// en-email-arranging-a-meeting--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "en-email-arranging-a-meeting--w01",
  "hook": "HOOK-22",
  "unit": {
    "audience": "en-email-office-workers",
    "slug": "en-email-arranging-a-meeting",
    "door": "ky-nang",
    "level": "B1",
    "title": "Hẹn lịch, dời lịch họp qua email tiếng Anh viết sao?",
    "series": "Email tiếng Anh đi làm — cho nhân viên văn phòng, viết đúng việc trong 10 phút"
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
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "spiral-calendar",
                "e-mail"
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai · 8:00 · thư hẹn gọi",
            "icon": "spiral-calendar"
          },
          {
            "id": "a-line",
            "t": "text",
            "text": "…on Tuesday at 10am",
            "x": 60,
            "y": 140,
            "size": 76,
            "at": "l2:tuesday"
          },
          {
            "id": "a-cut",
            "t": "text",
            "text": "✂ + ???",
            "x": 60,
            "y": 270,
            "size": 90,
            "at": "l3:cut",
            "color": "coral",
            "hl": [
              {
                "text": "???",
                "at": "l3:missing"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Sai một li, đi một dặm”",
            "x": 60,
            "y": 560,
            "size": 58,
            "at": "l4:millimetre",
            "color": "accent",
            "hl": [
              {
                "text": "đi một dặm",
                "at": "l4:mile"
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
          "say": "Meet Lan, from purchasing. Monday, eight a.m. She's booking a call with Sam, a partner in Melbourne.",
          "sub": "Đây là Lan, nhân viên mua hàng. Tám giờ sáng thứ Hai, Lan hẹn gọi với chị Sam, đối tác ở Melbourne."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Would you be available for a short call next week? I am free on Tuesday at ten a.m.",
          "sub": "“Would you be available for a short call next week? I am free on Tuesday at 10am…”",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Cut! The most important words of that email are still missing.",
          "sub": "Cắt! Mấy chữ quan trọng nhất của thư còn chưa viết.",
          "keys": [
            "quan trọng nhất"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Remember the gap. Our grandparents say: one millimetre off, one mile lost.",
          "sub": "Nhớ lấy chỗ trống ấy. Ông bà nói: “Sai một li, đi một dặm.”",
          "keys": [
            "Sai một li, đi một dặm"
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
            "at": 150,
            "fit": "B",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "b-q",
            "t": "text",
            "text": "Hẹn, dời lịch họp: viết sao?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:english",
            "hl": [
              {
                "text": "dời lịch",
                "at": "l1:move"
              }
            ]
          },
          {
            "id": "b-can",
            "t": "text",
            "text": "“Can we meet?” = ai cũng viết được",
            "x": 2028,
            "y": 170,
            "size": 44,
            "at": "l2:easy",
            "color": "muted"
          },
          {
            "id": "b-good",
            "t": "text",
            "text": "Thư tốt: dễ chọn, khó nhầm",
            "x": 2028,
            "y": 250,
            "size": 50,
            "at": "l2:choose",
            "color": "accent",
            "hl": [
              {
                "text": "khó nhầm",
                "at": "l2:wrong"
              }
            ]
          },
          {
            "id": "b-j0",
            "t": "text",
            "text": "① Đưa sẵn 2–3 giờ",
            "x": 2028,
            "y": 360,
            "size": 48,
            "at": "l3:offer"
          },
          {
            "id": "b-j1",
            "t": "text",
            "text": "② Ngày, giờ, múi giờ",
            "x": 2028,
            "y": 436,
            "size": 48,
            "at": "l3:zone"
          },
          {
            "id": "b-j2",
            "t": "text",
            "text": "③ Chốt rồi: xác nhận",
            "x": 2028,
            "y": 512,
            "size": 48,
            "at": "l3:confirm"
          },
          {
            "id": "b-j3",
            "t": "text",
            "text": "④ Dời: sớm, ngắn, giờ mới",
            "x": 2028,
            "y": 588,
            "size": 48,
            "at": "l3:move"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you arrange, and move, a meeting by email in English?",
          "sub": "Vậy hẹn lịch, dời lịch họp qua email tiếng Anh viết sao?",
          "keys": [
            "hẹn lịch, dời lịch"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Can we meet? Easy. A good email makes it easy to choose, and hard to get wrong.",
          "sub": "“Can we meet?” ai cũng viết được. Thư tốt giúp người đọc chọn giờ dễ, khó nhầm ngày, lệch giờ.",
          "keys": [
            "chọn giờ dễ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Offer times. Write the zone. Confirm. And to move it: early, short sorry, new times.",
          "sub": "Đưa sẵn vài giờ, ghi múi giờ, xác nhận lại. Phải dời thì báo sớm, xin lỗi ngắn, đưa giờ mới.",
          "keys": [
            "Đưa sẵn vài giờ"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s02",
      "module": "BRK-08",
      "data": {
        "title": "Hai tuần, một cuộc họp",
        "current": 0,
        "points": [
          {
            "label": "T2 8:00",
            "sub": "Lan hẹn giờ",
            "illus": "spiral-calendar"
          },
          {
            "label": "T2 9:00",
            "sub": "Dũng chờ phòng trống",
            "illus": "hourglass-not-done"
          },
          {
            "label": "Thứ Ba",
            "sub": "Xác nhận lịch",
            "illus": "check-mark-button"
          },
          {
            "label": "Thứ Sáu",
            "sub": "Thảo phải dời họp",
            "illus": "counterclockwise-arrows-button"
          },
          {
            "label": "12 May",
            "sub": "Họp đúng giờ",
            "illus": "video-camera"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Two weeks, one meeting, a handful of emails.",
          "sub": "Hai tuần, một cuộc họp, vài lá thư."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Starting with Lan's unfinished line.",
          "sub": "Bắt đầu từ câu thư còn dang dở của Lan.",
          "keys": [
            "dang dở"
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
          },
          {
            "at": 150,
            "fit": "C",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Hai 8:10 · Đưa sẵn giờ",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:draft"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "spiral-calendar"
              ]
            },
            "at": "l1:draft",
            "caption": "Thứ Hai · 8:10 · nháp đầu tiên",
            "icon": "spiral-calendar"
          },
          {
            "id": "c-old",
            "t": "text",
            "text": "Can we meet next week?",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l1:can we meet",
            "color": "coral"
          },
          {
            "id": "c-hw",
            "t": "text",
            "text": "→ khách tự nghĩ giờ",
            "x": 4016,
            "y": 250,
            "size": 44,
            "at": "l2:invent",
            "color": "muted",
            "hl": [
              {
                "text": "tự nghĩ giờ",
                "at": "l2:invent"
              }
            ]
          },
          {
            "id": "c-q1",
            "t": "text",
            "text": "Are you free next Tuesday…?",
            "x": 3996,
            "y": 330,
            "size": 42,
            "at": "l3:free"
          },
          {
            "id": "c-q2",
            "t": "text",
            "text": "When would be convenient?",
            "x": 3996,
            "y": 400,
            "size": 42,
            "at": "l4:convenient",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one. Lan's first draft was just: Can we meet next week?",
          "sub": "Chặng một. Nháp đầu của Lan chỉ có: “Can we meet next week?”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Polite, but the client must invent a time, then write back. Homework!",
          "sub": "Lịch sự, nhưng khách phải tự nghĩ giờ rồi viết lại. Như giao bài tập về nhà!",
          "keys": [
            "giao bài tập về nhà"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "British Council has ready questions: Are you free next Tuesday afternoon? What time would you like to meet?",
          "sub": "British Council có sẵn: “Are you free next Tuesday afternoon?”, “What time would you like to meet?”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Or: When would be convenient for you? Then close with: Could you please let me know?",
          "sub": "Hoặc “When would be convenient for you?”, rồi chốt “Could you please let me know?”"
        }
      ],
      "ref": "p1,p3"
    },
    {
      "id": "s04",
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
          },
          {
            "at": "l4",
            "fit": [
              "c-v"
            ],
            "zoom": 1.3,
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
            "id": "c-oldx",
            "t": "strike",
            "over": "c-old",
            "at": "l1:pick"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "T3 10am · T5 2pm",
            "x": 3996,
            "y": 480,
            "size": 60,
            "at": "l2:thursday",
            "color": "accent",
            "hl": [
              {
                "text": "T5 2pm",
                "at": "l2:thursday"
              }
            ]
          },
          {
            "id": "c-tz",
            "t": "text",
            "text": "Vietnam time (GMT+7)",
            "x": 3996,
            "y": 580,
            "size": 54,
            "at": "l3:vietnam",
            "color": "coral",
            "hl": [
              {
                "text": "(GMT+7)",
                "at": "l3:seven"
              }
            ]
          },
          {
            "id": "c-key",
            "t": "text",
            "text": "Đưa sẵn 2 giờ · chỉ việc chọn",
            "x": 4816,
            "y": 685,
            "size": 44,
            "at": "l6:two times",
            "color": "accent",
            "hl": [
              {
                "text": "chỉ việc chọn",
                "at": "l6:picks"
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
          "say": "But busy people answer faster when they can just pick. Instantly.ai says: offer two or three options.",
          "sub": "Nhưng người bận trả lời nhanh hơn khi được chọn sẵn. Instantly.ai khuyên: đưa hai ba lựa chọn.",
          "keys": [
            "hai ba lựa chọn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "I am free on Tuesday at ten a.m., or on Thursday at two p.m., Vietnam time, GMT plus seven.",
          "sub": "“I am free on Tuesday at 10am or on Thursday at 2pm, Vietnam time (GMT+7).”",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "There they are, the missing words: Vietnam time, GMT plus seven.",
          "sub": "Mấy chữ còn thiếu đây rồi: “Vietnam time (GMT+7)”.",
          "keys": [
            "Vietnam time (GMT+7)"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Could you please let me know which time suits you?",
          "sub": "“Could you please let me know which time suits you?” (Chị báo giúp em giờ nào tiện nhé?)",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A quick call? Break Into English suggests: Would you be available for a brief call this week?",
          "sub": "Gọi nhanh? Break Into English gợi ý: “Would you be available for a brief call this week?”"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Offer two times, and the reader just picks one.",
          "sub": "Đưa sẵn hai giờ, người đọc chỉ việc chọn.",
          "keys": [
            "chỉ việc chọn"
          ]
        }
      ],
      "ref": "p2,p3,p4"
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
            "text": "② Thứ Hai 9:00 · Múi giờ",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:nine"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "worried"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "face": "thinking"
                }
              ],
              "props": [
                "hourglass-not-done"
              ]
            },
            "at": "l1:alone",
            "caption": "Thứ Hai · 9:00 · phòng họp trực tuyến",
            "icon": "hourglass-not-done"
          },
          {
            "id": "d-msg",
            "t": "text",
            "text": "“Let's meet online on Monday at 9am.”",
            "x": 5964,
            "y": 170,
            "size": 38,
            "at": "l2:online"
          },
          {
            "id": "d-15",
            "t": "text",
            "text": "15 phút · không ai",
            "x": 5964,
            "y": 245,
            "size": 54,
            "at": "l2:fifteen",
            "color": "coral",
            "hl": [
              {
                "text": "không ai",
                "at": "l2:nobody"
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
          "say": "Stop two: same Monday, nine a.m. And this is Dũng, from sales, alone in an online meeting room.",
          "sub": "Chặng hai: cũng thứ Hai, chín giờ. Còn đây là Dũng, phòng kinh doanh, ngồi một mình trong phòng họp trực tuyến."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I wrote: Let's meet online on Monday at nine a.m. Fifteen minutes now. Nobody!",
          "sub": "Em đã viết: “Let's meet online on Monday at 9am.” Mười lăm phút rồi. Chẳng ai!",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "His partner is Sam, in Australia. She joined at nine too. Her nine.",
          "sub": "Đối tác của Dũng chính là chị Sam, bên Úc. Chị cũng vào lúc chín giờ. Chín giờ của chị.",
          "keys": [
            "Chín giờ của chị"
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
      "ref": "p11"
    },
    {
      "id": "s06",
      "module": "DLG-01",
      "data": {
        "set": "online",
        "label": "Thứ Hai · 9:00",
        "actors": [
          {
            "id": "dung",
            "side": "left",
            "pose": "phone"
          },
          {
            "id": "sam",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Hẹn giờ không kèm múi giờ",
          "why": "Dũng vào lúc 9 giờ Việt Nam, đối tác vào lúc 9 giờ bên Úc; hai người chờ nhau ở hai giờ khác nhau.",
          "rule": "Giờ không có múi giờ là giờ của riêng mình"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "sam",
          "say": "Hi Dũng, I waited at nine. Was the meeting cancelled?",
          "sub": "Chào Dũng, chị chờ lúc chín giờ. Cuộc họp bị huỷ à?",
          "face": "thinking",
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
          "say": "Dũng's nine was Vietnam's nine. Sam's nine was Australia's. Two nines, zero meetings.",
          "sub": "Chín giờ của Dũng là giờ Việt Nam, của Sam là giờ bên Úc. Hai cái chín giờ, không cuộc họp nào.",
          "keys": [
            "Hai cái chín giờ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind!",
          "sub": "Tua lại!",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Monday, nine a.m. Vietnam time, GMT plus seven. Plus your time, Sam.",
          "sub": "“Monday, 9am Vietnam time (GMT+7).” Thêm cả giờ bên chị nữa.",
          "phase": "redo",
          "face": "happy",
          "pose": "phone"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p11,p12"
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
            "id": "d-tz",
            "t": "text",
            "text": "10am Vietnam time (GMT+7)",
            "x": 5964,
            "y": 345,
            "size": 44,
            "at": "l3:vietnam",
            "color": "accent",
            "hl": [
              {
                "text": "(GMT+7)",
                "at": "l3:seven"
              }
            ]
          },
          {
            "id": "d-their",
            "t": "text",
            "text": "+ giờ bên người nhận",
            "x": 5964,
            "y": 415,
            "size": 42,
            "at": "l3:their"
          },
          {
            "id": "d-date",
            "t": "text",
            "text": "Tuesday, 12 May ✓",
            "x": 5964,
            "y": 495,
            "size": 48,
            "at": "l4:tuesday",
            "color": "accent"
          },
          {
            "id": "d-bad",
            "t": "text",
            "text": "12/5 ?",
            "x": 6424,
            "y": 495,
            "size": 48,
            "at": "l4:slash",
            "color": "muted"
          },
          {
            "id": "d-badx",
            "t": "strike",
            "over": "d-bad",
            "at": "l4:month"
          },
          {
            "id": "d-key",
            "t": "text",
            "text": "Không múi giờ = giờ riêng mình",
            "x": 6784,
            "y": 685,
            "size": 42,
            "at": "l5:private",
            "color": "accent",
            "hl": [
              {
                "text": "giờ riêng mình",
                "at": "l5:private"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: UNC Writing Center; Instantly.ai",
            "x": 5964,
            "y": 722,
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
          "say": "UNC's Writing Center: email helps you reach people in other time zones. That's also the trap.",
          "sub": "Đại học North Carolina: email giúp liên lạc với người ở múi giờ khác. Cũng chính vì vậy mà dễ lệch giờ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Instantly.ai lists a wrong time zone as one reason meetings get moved.",
          "sub": "Instantly.ai kể nhầm múi giờ là một lý do khiến cuộc họp phải dời."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So always add the zone: ten a.m. Vietnam time, GMT plus seven. And their time, if you can.",
          "sub": "Vậy luôn ghi múi giờ: “10am Vietnam time (GMT+7)”, được thì thêm giờ bên người nhận.",
          "keys": [
            "luôn ghi múi giờ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Dates too: Tuesday, twelve May, not twelve slash five. In the US, the month comes first.",
          "sub": "Ngày cũng thế: “Tuesday, 12 May”, đừng viết “12/5”. Ở Mỹ, tháng đứng trước ngày.",
          "keys": [
            "tháng đứng trước ngày"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A time with no zone is your own private time.",
          "sub": "Giờ không có múi giờ là giờ của riêng mình.",
          "keys": [
            "giờ của riêng mình"
          ]
        }
      ],
      "ref": "p9,p10,p12"
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
            "at": "l3:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Hai 11:00 · when + ?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:eleven"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                }
              ],
              "props": [
                "memo"
              ]
            },
            "at": "l1:thảo",
            "caption": "Thứ Hai · 11:00 · Thảo đọc nháp của Dũng",
            "icon": "memo"
          },
          {
            "id": "e-bad",
            "t": "text",
            "text": "…when I will receive…",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l2:receive",
            "color": "coral"
          },
          {
            "id": "e-ok",
            "t": "text",
            "text": "…when I receive…",
            "x": 7932,
            "y": 255,
            "size": 54,
            "at": "l3:present",
            "color": "accent",
            "hl": [
              {
                "text": "I receive",
                "at": "l3:receive"
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
          "say": "Stop three: eleven a.m. And this is Thảo, the team's senior, reading Dũng's new draft.",
          "sub": "Chặng ba: mười một giờ. Còn đây là Thảo, chị khoá trên trong nhóm, đang đọc nháp mới của Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I will send the agenda when I will receive your slides.",
          "sub": "“I will send the agenda when I will receive your slides.”",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "One will too many. After when, use the present: when I receive your slides.",
          "sub": "Thừa một “will”. Sau “when”, dùng hiện tại: “when I receive your slides”.",
          "pose": "explain"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s09",
      "module": "BRK-04",
      "data": {
        "title": "Sau “when”",
        "wrong": "I will call you when I will arrive",
        "right": "I will call you when I get to the station",
        "wrongIllus": "cross-mark",
        "rightIllus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Not: when I will arrive.",
          "sub": "Không viết: “when I will arrive”."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "But: I will call you when I get to the station.",
          "sub": "Mà là: “I will call you when I get to the station.”",
          "keys": [
            "when I get to the station"
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
            "id": "e-badx",
            "t": "strike",
            "over": "e-bad",
            "at": "l1:present simple"
          },
          {
            "id": "e-when",
            "t": "text",
            "text": "when · if · next time + hiện tại",
            "x": 7932,
            "y": 345,
            "size": 42,
            "at": "l1:when",
            "hl": [
              {
                "text": "hiện tại",
                "at": "l1:present simple"
              }
            ]
          },
          {
            "id": "e-pre",
            "t": "text",
            "text": "on Monday · in October · at 3pm",
            "x": 7932,
            "y": 420,
            "size": 42,
            "at": "l3:little words",
            "color": "accent"
          },
          {
            "id": "e-next",
            "t": "text",
            "text": "next week",
            "x": 7932,
            "y": 490,
            "size": 46,
            "at": "l4:next"
          },
          {
            "id": "e-cont",
            "t": "text",
            "text": "is coming = đã sắp xếp",
            "x": 7932,
            "y": 565,
            "size": 46,
            "at": "l5:arranged",
            "hl": [
              {
                "text": "đã sắp xếp",
                "at": "l5:arranged"
              }
            ]
          },
          {
            "id": "e-key",
            "t": "text",
            "text": "Tương lai mặc áo hiện tại",
            "x": 8752,
            "y": 685,
            "size": 46,
            "at": "l2:clothes",
            "color": "accent",
            "hl": [
              {
                "text": "mặc áo hiện tại",
                "at": "l2:present clothes"
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
          "say": "British Council: after when, if and next time, a future time takes the present simple.",
          "sub": "British Council: sau “when”, “if”, “next time” nói về tương lai, ta dùng hiện tại đơn.",
          "keys": [
            "dùng hiện tại đơn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After when, the future wears present clothes.",
          "sub": "Sau “when”, tương lai cũng mặc áo hiện tại.",
          "keys": [
            "mặc áo hiện tại"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Little words: on with days, in with months and years, at with clock times.",
          "sub": "Giới từ: “on” với thứ, “in” với tháng, năm, “at” với giờ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Could we meet on Monday? Call me at three p.m.? And next for soon: next week.",
          "sub": "“Could we meet on Monday?”, “Could you please call me at 3pm?”. “Next” cho thời gian sắp tới: “next week”."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Timetables, present simple. Plans, going to. Arranged already? Mr Toshiko is coming to our next meeting.",
          "sub": "Lịch cố định: hiện tại đơn. Dự định: “be going to”. Đã sắp xếp: “Mr Toshiko is coming to our next meeting.”",
          "keys": [
            "Đã sắp xếp"
          ]
        }
      ],
      "ref": "p5,p6,p7,p8"
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
            "zoom": 0.8,
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Ba 9:00 · Xác nhận",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:picks"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "phone",
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "happy",
                  "pose": "thumb"
                }
              ],
              "props": [
                "check-mark-button"
              ]
            },
            "at": "l1:time",
            "caption": "Thứ Ba · 9:00 · khách đã chọn giờ",
            "icon": "check-mark-button"
          },
          {
            "id": "f-chk",
            "t": "text",
            "text": "Ngày · giờ · múi giờ · hình thức",
            "x": 60,
            "y": 1260,
            "size": 42,
            "at": "l3:day",
            "hl": [
              {
                "text": "múi giờ",
                "at": "l3:zone"
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
          "say": "Stop four: Tuesday morning. Sam picks a time.",
          "sub": "Chặng bốn: sáng thứ Ba. Sam chọn giờ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Tuesday at ten works for me. Thanks, Lan!",
          "sub": "Mười giờ thứ Ba được nhé. Cảm ơn Lan!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Done? Not yet. Confirm it: the day, the time, the zone, and the format.",
          "sub": "Xong chưa? Chưa. Gửi câu xác nhận đủ ngày, giờ, múi giờ, hình thức họp.",
          "keys": [
            "Gửi câu xác nhận"
          ]
        }
      ],
      "ref": "p13"
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
            "at": "l1",
            "fit": [
              "f-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-1",
            "t": "text",
            "text": "① We are meeting on Tuesday…",
            "x": 60,
            "y": 1350,
            "size": 36,
            "at": "l1:meeting",
            "hl": [
              {
                "text": "are meeting",
                "at": "l2:present continuous"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "② I'll send a calendar invitation…",
            "x": 60,
            "y": 1420,
            "size": 36,
            "at": "l3:calendar"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "③ Please let me know if…",
            "x": 60,
            "y": 1490,
            "size": 40,
            "at": "l5:changes"
          },
          {
            "id": "f-cal",
            "t": "text",
            "text": "Đồng ý → lời mời trên lịch",
            "x": 60,
            "y": 1580,
            "size": 44,
            "at": "l4:agrees",
            "color": "accent"
          },
          {
            "id": "f-key",
            "t": "text",
            "text": "Chốt rồi: nhắc lại đủ",
            "x": 880,
            "y": 1775,
            "size": 48,
            "at": "l6:repeated",
            "color": "accent",
            "hl": [
              {
                "text": "nhắc lại đủ",
                "at": "l6:repeated"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "Thank you for your reply. We are meeting on Tuesday, twelve May, at ten a.m. Vietnam time.",
          "sub": "“Thank you for your reply. We are meeting on Tuesday, 12 May at 10am Vietnam time (GMT+7).”",
          "pose": "phone"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "We are meeting: present continuous, because it's arranged.",
          "sub": "“We are meeting”: hiện tại tiếp diễn, vì lịch đã chốt.",
          "keys": [
            "hiện tại tiếp diễn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "I'll send a calendar invitation with the video call link.",
          "sub": "“I'll send a calendar invitation with the video call link.”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Instantly.ai says: once everyone agrees, send the calendar update.",
          "sub": "Instantly.ai khuyên: mọi người đồng ý rồi thì gửi lời mời trên lịch."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "Please let me know if anything changes.",
          "sub": "“Please let me know if anything changes.” (Nếu có gì thay đổi, chị báo em nhé)"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Three sentences. Confirmed means repeated: day, time, zone.",
          "sub": "Ba câu là đủ. Chốt rồi thì nhắc lại, đủ ngày, giờ, múi giờ.",
          "keys": [
            "Chốt rồi thì nhắc lại"
          ]
        }
      ],
      "ref": "p13,p14,p15"
    },
    {
      "id": "s13",
      "module": "BRK-07",
      "data": {
        "question": "Một giờ trước buổi họp với khách, Thảo bị gọi vào họp khẩn…",
        "illus": "alarm-clock"
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
          "say": "One hour before a client meeting, Thảo is pulled into an urgent meeting.",
          "sub": "Một giờ trước buổi họp với khách, Thảo bị gọi vào họp khẩn.",
          "keys": [
            "họp khẩn"
          ]
        }
      ],
      "ref": "p18"
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
            "at": "l3",
            "fit": "G",
            "ms": 700
          },
          {
            "at": "l5",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Sáu 14:00 · Dời lịch",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:friday"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "alarm-clock"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:client",
            "caption": "Thứ Sáu · 14:00 · 15:00 họp khách",
            "icon": "alarm-clock"
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "A: Something came up…",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l2:something",
            "color": "coral"
          },
          {
            "id": "g-a2",
            "t": "text",
            "text": "→ “later” = ? · trễ vài ngày",
            "x": 2048,
            "y": 1335,
            "size": 42,
            "at": "l3:later",
            "color": "muted"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "B: xin lỗi + giờ mới",
            "x": 2028,
            "y": 1420,
            "size": 48,
            "at": "l4:version b",
            "color": "accent",
            "hl": [
              {
                "text": "giờ mới",
                "at": "l6:wednesday"
              }
            ]
          },
          {
            "id": "g-b2",
            "t": "text",
            "text": "→ khách chọn ngay",
            "x": 2048,
            "y": 1495,
            "size": 44,
            "at": "l7:picks",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five: Friday, two p.m. Thảo has a client meeting at three. Version A.",
          "sub": "Chặng năm: hai giờ chiều thứ Sáu. Ba giờ Thảo họp khách. Phiên bản A."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Sorry, something came up. Let's talk later.",
          "sub": "“Sorry, something came up. Let's talk later.”",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Later when? The client writes back to ask. The contract slips a few more days.",
          "sub": "“Later” là bao giờ? Khách phải gửi thư hỏi lại, việc chốt hợp đồng trễ thêm vài ngày.",
          "keys": [
            "trễ thêm vài ngày"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Version B.",
          "sub": "Phiên bản B."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "I apologize for the late notice, but because of a scheduling conflict I need to reschedule our meeting.",
          "sub": "“I apologize for the late notice, but because of a scheduling conflict I need to reschedule our meeting.”",
          "pose": "phone"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Would Wednesday at ten, or Thursday at three, Vietnam time, work for you?",
          "sub": "“Would Wednesday at 10am or Thursday at 3pm, Vietnam time, work for you?”",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "The client picks a time in the very first reply.",
          "sub": "Khách chọn ngay một giờ trong thư trả lời.",
          "keys": [
            "chọn ngay một giờ"
          ]
        }
      ],
      "ref": "p18"
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
            "id": "g-r",
            "t": "text",
            "text": "Báo ngay · xin lỗi ngắn",
            "x": 2028,
            "y": 1580,
            "size": 44,
            "at": "l1:as soon",
            "hl": [
              {
                "text": "Báo ngay",
                "at": "l1:as soon"
              }
            ]
          },
          {
            "id": "g-r2",
            "t": "text",
            "text": "Lý do: cụ thể mà gọn",
            "x": 2848,
            "y": 1775,
            "size": 44,
            "at": "l1:reason"
          },
          {
            "id": "g-why",
            "t": "text",
            "text": "Because of a scheduling conflict…",
            "x": 2028,
            "y": 1660,
            "size": 38,
            "at": "l2:because"
          },
          {
            "id": "g-fog",
            "t": "text",
            "text": "Something came up",
            "x": 2028,
            "y": 1730,
            "size": 44,
            "at": "l3:foggy",
            "color": "muted"
          },
          {
            "id": "g-fogx",
            "t": "strike",
            "over": "g-fog",
            "at": "l3:foggy+500"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Instantly.ai: send it as soon as you know. A short, sincere apology. A short reason.",
          "sub": "Instantly.ai: báo ngay khi biết có thay đổi, xin lỗi ngắn mà chân thành, lý do gọn.",
          "keys": [
            "báo ngay khi biết"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Specific but short: because of a scheduling conflict, or due to an urgent client presentation.",
          "sub": "Lý do cụ thể mà ngắn: “Because of a scheduling conflict…”, “Due to an urgent client presentation…”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not the foggy: something came up.",
          "sub": "Tránh câu mơ hồ: “Something came up”.",
          "keys": [
            "Tránh câu mơ hồ"
          ]
        }
      ],
      "ref": "p16"
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
            "at": "l3",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Sáu 14:10 · Đường lui",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:ten minutes"
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
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "envelope-with-arrow"
              ]
            },
            "at": "l1:escape",
            "caption": "Thứ Sáu · 14:10 · thư B đã gửi",
            "icon": "envelope-with-arrow"
          },
          {
            "id": "h-neither",
            "t": "text",
            "text": "If neither time works…",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l2:neither",
            "hl": [
              {
                "text": "neither",
                "at": "l2:neither"
              }
            ]
          },
          {
            "id": "h-flex",
            "t": "text",
            "text": "Thank you for your flexibility",
            "x": 3996,
            "y": 1345,
            "size": 42,
            "at": "l3:flexibility",
            "color": "accent"
          },
          {
            "id": "h-subj",
            "t": "text",
            "text": "Meeting reschedule: design review",
            "x": 3996,
            "y": 1425,
            "size": 38,
            "at": "l4:reschedule"
          },
          {
            "id": "h-key",
            "t": "text",
            "text": "Đưa lịch mới, đừng chỉ xin lỗi",
            "x": 4816,
            "y": 1775,
            "size": 42,
            "at": "l5:new times",
            "color": "accent",
            "hl": [
              {
                "text": "lịch mới",
                "at": "l5:new times"
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
          "say": "Stop six: ten minutes later. Thảo's B email also had an escape route.",
          "sub": "Chặng sáu: mười phút sau. Thư B của Thảo còn có sẵn đường lui.",
          "keys": [
            "đường lui"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "If neither time works, please let me know your availability, and I'll do my best to adjust.",
          "sub": "“If neither time works, please let me know your availability, and I'll do my best to adjust.”",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then thanks: Thank you for your flexibility. Please let me know which time works best.",
          "sub": "Rồi cảm ơn: “Thank you for your flexibility, and please let me know which time works best for you.”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And a clear subject: Meeting reschedule, design review.",
          "sub": "Tiêu đề cũng rõ: “Meeting reschedule: design review” (Dời lịch họp: duyệt thiết kế)."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Moving a meeting? Bring new times, not just an apology.",
          "sub": "Dời lịch thì đưa lịch mới, đừng chỉ đưa lời xin lỗi.",
          "keys": [
            "đưa lịch mới"
          ]
        }
      ],
      "ref": "p17,p19"
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
            "at": "l1",
            "fit": [
              "i-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Thứ Hai sau · Soát thư",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:monday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "clipboard"
              ]
            },
            "at": "l1:monday",
            "caption": "Thứ Hai tuần sau · trước khi gửi",
            "icon": "clipboard"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1250,
            "w": 40,
            "h": 40,
            "at": "l2:subject",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1234,
            "size": 50,
            "at": "l2:subject+500",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Tiêu đề: hẹn, xác nhận, dời",
            "x": 6026,
            "y": 1242,
            "size": 34,
            "at": "l2:subject+150"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1314,
            "w": 40,
            "h": 40,
            "at": "l2:two or three",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1298,
            "size": 50,
            "at": "l2:two or three+500",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "2–3 khung giờ cụ thể",
            "x": 6026,
            "y": 1306,
            "size": 34,
            "at": "l2:two or three+150"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1378,
            "w": 40,
            "h": 40,
            "at": "l2:zone",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1362,
            "size": 50,
            "at": "l2:zone+500",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Giờ kèm múi giờ",
            "x": 6026,
            "y": 1370,
            "size": 34,
            "at": "l2:zone+150"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1442,
            "w": 40,
            "h": 40,
            "at": "l3:months",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1426,
            "size": 50,
            "at": "l3:months+500",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Tháng bằng chữ, có thứ",
            "x": 6026,
            "y": 1434,
            "size": 34,
            "at": "l3:months+150"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1506,
            "w": 40,
            "h": 40,
            "at": "l3:on",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1490,
            "size": 50,
            "at": "l3:on+500",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Đúng on · in · at",
            "x": 6026,
            "y": 1498,
            "size": 34,
            "at": "l3:on+150"
          },
          {
            "id": "i-c5",
            "t": "box",
            "x": 5964,
            "y": 1570,
            "w": 40,
            "h": 40,
            "at": "l3:could you",
            "stroke": 5
          },
          {
            "id": "i-k5",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1554,
            "size": 50,
            "at": "l3:could you+500",
            "color": "accent"
          },
          {
            "id": "i-l5",
            "t": "text",
            "text": "Could you please let me know…",
            "x": 6026,
            "y": 1562,
            "size": 34,
            "at": "l3:could you+150"
          },
          {
            "id": "i-c6",
            "t": "box",
            "x": 5964,
            "y": 1634,
            "w": 40,
            "h": 40,
            "at": "l4:agreed",
            "stroke": 5
          },
          {
            "id": "i-k6",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1618,
            "size": 50,
            "at": "l4:agreed+500",
            "color": "accent"
          },
          {
            "id": "i-l6",
            "t": "text",
            "text": "Chốt: xác nhận, lời mời",
            "x": 6026,
            "y": 1626,
            "size": 34,
            "at": "l4:agreed+150"
          },
          {
            "id": "i-c7",
            "t": "box",
            "x": 5964,
            "y": 1698,
            "w": 40,
            "h": 40,
            "at": "l4:move",
            "stroke": 5
          },
          {
            "id": "i-k7",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1682,
            "size": 50,
            "at": "l4:move+500",
            "color": "accent"
          },
          {
            "id": "i-l7",
            "t": "text",
            "text": "Dời: báo ngay, giờ mới",
            "x": 6026,
            "y": 1690,
            "size": 34,
            "at": "l4:move+150"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven: next Monday. Before any meeting email, Lan checks eight things.",
          "sub": "Chặng bảy: thứ Hai tuần sau. Trước khi gửi thư hẹn lịch, Lan soát tám điều.",
          "keys": [
            "soát tám điều"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A subject saying arrange, confirm or reschedule. Two or three times, each with its zone.",
          "sub": "Tiêu đề nói rõ hẹn, xác nhận hay dời lịch. Hai ba khung giờ, giờ nào cũng kèm múi giờ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Months in words, with the weekday. On, in, at, in the right place. And: Could you please let me know?",
          "sub": "Tháng viết bằng chữ, có thứ. Đúng “on”, “in”, “at”. Câu chốt “Could you please let me know…”."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Agreed? Confirm, and send the invite. Must move it? Tell them now, with new times.",
          "sub": "Đã chốt: xác nhận, gửi lời mời trên lịch. Phải dời: báo ngay, xin lỗi ngắn, lý do gọn, kèm giờ mới."
        }
      ],
      "ref": "p20"
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
            "text": "Thứ Ba, 12 May · 10:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:twelve"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "face": "happy",
                  "pose": "wave"
                },
                {
                  "id": "sam",
                  "side": "center",
                  "face": "happy",
                  "pose": "wave"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l4",
                  "face": "happy",
                  "pose": "thumb"
                }
              ],
              "props": [
                "video-camera"
              ]
            },
            "at": "l1:ten",
            "caption": "10am Vietnam time (GMT+7)",
            "icon": "video-camera"
          },
          {
            "id": "j-ok",
            "t": "text",
            "text": "Cả ba vào đúng giờ ✓",
            "x": 7932,
            "y": 1260,
            "size": 56,
            "at": "l2:on time",
            "color": "accent",
            "hl": [
              {
                "text": "đúng giờ",
                "at": "l2:on time"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Sai một li” → đúng một múi giờ",
            "x": 7932,
            "y": 1370,
            "size": 46,
            "at": "l5:millimetre",
            "color": "accent",
            "hl": [
              {
                "text": "đúng một múi giờ",
                "at": "l5:zone"
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
          "say": "Tuesday, twelve May. Ten a.m., Vietnam time.",
          "sub": "Thứ Ba, 12 May. Mười giờ sáng, giờ Việt Nam."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Hi Lan! Right on time. Your time and mine.",
          "sub": "Chào Lan! Đúng giờ nhé. Đúng cả giờ em lẫn giờ chị.",
          "face": "happy",
          "pose": "wave"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "And Dũng is joining us too.",
          "sub": "Có cả Dũng vào cùng nữa ạ.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Ten a.m., GMT plus seven. I checked three times!",
          "sub": "Mười giờ, GMT+7. Em kiểm ba lần rồi!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One millimetre off, one mile lost. One time zone right, and everyone arrives together.",
          "sub": "“Sai một li, đi một dặm.” Đúng một múi giờ, cả nhà tới cùng lúc.",
          "keys": [
            "Đúng một múi giờ"
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
      "ref": "outro,p12"
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
            "at": "l1:offer",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:zone",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l4:moving",
            "fit": "H",
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
            "y": 480,
            "at": "l1:offer+900"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6704,
            "y": 340,
            "at": "l2:zone+900"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 3,
            "x": 4736,
            "y": 1260,
            "at": "l4:moving+900"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Nhân vật trong bài là minh hoạ.",
            "x": 7932,
            "y": 1812,
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
          "say": "So: offer two times, and the reader just picks.",
          "sub": "Tóm lại: đưa sẵn hai giờ, người đọc chỉ việc chọn.",
          "keys": [
            "chỉ việc chọn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Every time with its zone. Months in words.",
          "sub": "Giờ nào cũng kèm múi giờ. Tháng viết bằng chữ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Agreed? Repeat day, time and zone: we are meeting.",
          "sub": "Đã chốt: nhắc lại ngày, giờ, múi giờ: “we are meeting”."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Moving it? New times, not just sorry.",
          "sub": "Phải dời: đưa giờ mới, đừng chỉ xin lỗi.",
          "keys": [
            "đưa giờ mới"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: save three lines. An offer with a zone, a confirmation, a reschedule. Next: asking for information.",
          "sub": "Làm ngay: lưu ba câu, một câu đề nghị hai giờ có múi giờ, một câu xác nhận, một câu xin dời lịch. Bài tiếp: hỏi thông tin cho lịch sự.",
          "keys": [
            "lưu ba câu"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p4,p12,p15,p19"
    },
    {
      "id": "s20",
      "module": "QUIZ-01",
      "data": {
        "q": "Dung is setting a call with a partner in Australia, what should he add?",
        "options": [
          "A longer greeting, so the partner feels more welcome at the meeting",
          "The time zone, and if possible the matching time in Australia too",
          "A photo of his office, so the partner can picture the room"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "globe-showing-asia-australia",
        "why": "Ghi múi giờ và giờ tương ứng của người nhận giúp hai bên vào phòng đúng lúc. Đó là điều tình huống của Dũng cho thấy."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Dung is setting a call with a partner in Australia, what should he add?",
          "sub": "Dũng đang hẹn gọi với đối tác ở Úc, anh nên thêm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The time zone, and if possible the matching time in Australia too.",
          "sub": "Ghi giờ kèm múi giờ, như giờ Việt Nam (GMT+7), để không ai chờ nhầm giờ."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[19]"
    },
    {
      "id": "s21",
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
          "say": "Save your three lines today. Then try the forty questions below.",
          "sub": "Hôm nay lưu ba câu mẫu. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi en-email-office-workers, bài 2) dựng theo hạt nhân (#136) + biến thể #144: Đét trái + bảng 10 ô theo HAI TUẦN quanh một cuộc họp với Sam (Thứ Hai 8:00 Lan viết thư hẹn — câu bị cắt trước “Vietnam time (GMT+7)” (HOOK-22), nói trọn ở chặng ① → 9:00 Dũng chờ phòng trống, “Khoan đã!” → 11:00 Thảo sửa “when I will” → Thứ Ba xác nhận “We are meeting…” → Thứ Sáu 14:00 Thảo dời lịch A/B → 14:10 đường lui → Thứ Hai sau soát tám điều → Thứ Ba 12 May 10:00 cả ba vào đúng giờ, khép vòng). Nhân vật: Lan (Lan p3, p14), Dũng (Dũng p11), Thảo (Thảo p18), Sam (đối tác bên Úc p11, khách của Lan p3) — w145/_series/en-email-office-workers.md. Ngắt nhịp: BRK-08 hai tuần, BRK-04 “when I will” (p7), BRK-07 rehook (trước p18). Tục ngữ mở/khép: “Sai một li, đi một dặm”. Câu đố questions[19].",
  "loop": {
    "open": "s00",
    "close": "s18"
  }
};
