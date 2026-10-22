// en-standup-raising-a-blocker--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "en-standup-raising-a-blocker--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "en-dev-daily-standup",
    "slug": "en-standup-raising-a-blocker",
    "door": "ky-nang",
    "level": "B1",
    "title": "Bị vướng việc thì nói với team bằng tiếng Anh thế nào?",
    "series": "Stand-up bằng tiếng Anh — cho lập trình viên làm dự án nước ngoài, báo cáo 60 giây rõ ràng"
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
            "text": "Gỡ mất bao lâu?",
            "x": 60,
            "y": 90,
            "size": 120,
            "at": "l2:how long",
            "color": "accent"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "A. Hai ngày",
            "x": 70,
            "y": 300,
            "size": 64,
            "at": "l2:two days"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "B. Năm phút",
            "x": 70,
            "y": 400,
            "size": 64,
            "at": "l2:five minutes"
          },
          {
            "id": "a-2r",
            "t": "ring",
            "around": [
              "a-2"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l3:five"
          },
          {
            "id": "a-ans",
            "t": "text",
            "text": "… nhưng im lặng mất 2 ngày",
            "x": 520,
            "y": 410,
            "size": 50,
            "at": "l4:silence",
            "color": "coral",
            "hl": [
              {
                "text": "im lặng",
                "at": "l4:silence"
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
          "say": "A developer can't run the app. She's missing access to the test database.",
          "sub": "Một lập trình viên không chạy được ứng dụng, vì thiếu quyền vào cơ sở dữ liệu thử nghiệm.",
          "keys": [
            "thiếu quyền"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Quick guess. How long does the fix take? Two days, or five minutes?",
          "sub": "Đoán nhanh: gỡ mất bao lâu? Hai ngày, hay năm phút?",
          "keys": [
            "Đoán nhanh"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Five minutes.",
          "sub": "Năm phút."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But the silence before it? Two whole days.",
          "sub": "Nhưng khoảng im lặng trước đó? Trọn hai ngày.",
          "keys": [
            "Trọn hai ngày"
          ]
        }
      ],
      "beats": {
        "after": 300
      },
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
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l4"
                }
              ],
              "props": [
                "laptop"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "caption": "Thứ Ba 9:00 · stand-up",
            "icon": "laptop"
          },
          {
            "id": "a-nb",
            "t": "text",
            "text": "“No blockers.” ×2",
            "x": 60,
            "y": 530,
            "size": 56,
            "at": "l2:No blockers",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Một cây làm chẳng nên non”",
            "x": 60,
            "y": 630,
            "size": 52,
            "at": "l6:tree",
            "color": "accent",
            "hl": [
              {
                "text": "chẳng nên non",
                "at": "l6:mountain"
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
          "say": "Meet Thảo, a frontend developer on a project for an Australian client. Neat, careful, a bit of a perfectionist.",
          "sub": "Đây là Thảo, lập trình viên frontend trong dự án cho khách hàng Úc. Ngăn nắp, cẩn thận, hơi cầu toàn.",
          "keys": [
            "hơi cầu toàn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "No blockers.",
          "sub": "Không có vướng mắc.",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Monday, no blockers. Tuesday, no blockers. She thinks she'll find a way alone.",
          "sub": "Thứ Hai: không vướng. Thứ Ba: không vướng. Cô nghĩ tự mình sẽ tìm ra cách."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Tuesday afternoon she messages Dũng, the backend developer. Access granted in five minutes.",
          "sub": "Chiều thứ Ba, cô nhắn Dũng, lập trình viên backend. Năm phút sau có quyền.",
          "keys": [
            "Năm phút"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Her interface work is now two days behind plan.",
          "sub": "Phần giao diện của cô đã trễ hai ngày so với kế hoạch.",
          "keys": [
            "trễ hai ngày"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Grandma knew: one tree alone can't make a mountain.",
          "sub": "Ông bà dạy rồi: “Một cây làm chẳng nên non.”",
          "keys": [
            "Một cây làm chẳng nên non"
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
      "ref": "p3,p4"
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
            "text": "Vì sao ngại nói “mình kẹt”?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:afraid",
            "hl": [
              {
                "text": "ngại nói",
                "at": "l1:afraid"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Lo mắc lỗi",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:mistakes"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Thiếu tự tin",
            "x": 2028,
            "y": 245,
            "size": 52,
            "at": "l2:confidence"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Cầu toàn: chắc chắn mới nói",
            "x": 2028,
            "y": 320,
            "size": 52,
            "at": "l2:perfectionists",
            "hl": [
              {
                "text": "chắc chắn mới nói",
                "at": "l2:sure"
              }
            ]
          },
          {
            "id": "b-n",
            "t": "text",
            "text": "→ rất phổ biến, rất bình thường",
            "x": 2028,
            "y": 410,
            "size": 48,
            "at": "l3:normal",
            "color": "accent",
            "hl": [
              {
                "text": "rất bình thường",
                "at": "l3:normal"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: British Council TeachingEnglish — Meetings 2: Getting involved in meetings",
            "x": 2028,
            "y": 720,
            "size": 28,
            "at": "l2",
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
          "say": "So why are we so afraid to say: I'm stuck?",
          "sub": "Vậy sao ta ngại nói “mình đang kẹt” đến thế?",
          "keys": [
            "mình đang kẹt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A British Council lesson on meetings lists the usual barriers: fear of mistakes, low confidence, and perfectionists who wait until they're sure.",
          "sub": "Bài giảng về họp của British Council nêu các rào cản quen thuộc: lo mắc lỗi, thiếu tự tin, và người cầu toàn chờ thật chắc mới nói."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And it stresses: feeling insecure is very common, and completely normal.",
          "sub": "Bài giảng nhấn mạnh: cảm giác thiếu tự tin rất phổ biến, và hoàn toàn bình thường.",
          "keys": [
            "hoàn toàn bình thường"
          ]
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
            "id": "b-g",
            "t": "text",
            "text": "Scrum Guide: phát hiện trở ngại",
            "x": 2928,
            "y": 170,
            "size": 46,
            "at": "l1:impediments",
            "hl": [
              {
                "text": "phát hiện trở ngại",
                "at": "l1:impediments"
              }
            ]
          },
          {
            "id": "b-o",
            "t": "text",
            "text": "Openness: cởi mở cả khó khăn",
            "x": 2928,
            "y": 250,
            "size": 46,
            "at": "l2:Openness",
            "hl": [
              {
                "text": "Openness",
                "at": "l2:Openness"
              }
            ]
          },
          {
            "id": "b-c",
            "t": "text",
            "text": "Courage: dám làm điều đúng",
            "x": 2928,
            "y": 330,
            "size": 46,
            "at": "l2:Courage",
            "hl": [
              {
                "text": "Courage",
                "at": "l2:Courage"
              }
            ]
          },
          {
            "id": "b-w",
            "t": "text",
            "text": "Không ai nêu vướng = lỗi",
            "x": 2928,
            "y": 420,
            "size": 50,
            "at": "l3:mistake",
            "color": "coral",
            "hl": [
              {
                "text": "lỗi",
                "at": "l3:mistake"
              }
            ]
          },
          {
            "id": "b-k",
            "t": "text",
            "text": "Vướng mà im: 1 phút → 2 ngày",
            "x": 2028,
            "y": 560,
            "size": 56,
            "at": "l4:silent",
            "color": "accent",
            "hl": [
              {
                "text": "2 ngày",
                "at": "l4:two days"
              }
            ]
          },
          {
            "id": "b-src2",
            "t": "text",
            "text": "Scrum Guide 2020 · Stefan Wolpers, Scrum.org — Daily Scrum Anti-Patterns",
            "x": 2028,
            "y": 670,
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
          "say": "Meanwhile, the Scrum Guide counts finding impediments as a benefit of the Daily Scrum.",
          "sub": "Trong khi đó, Scrum Guide coi phát hiện trở ngại là một lợi ích của Daily Scrum.",
          "keys": [
            "phát hiện trở ngại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two values fit here. Openness: be open about the work and its problems. Courage: do the right thing, tackle hard problems.",
          "sub": "Hai giá trị khớp ở đây. Openness: cởi mở cả công việc lẫn khó khăn. Courage: can đảm làm điều đúng, xử lý việc khó.",
          "keys": [
            "Openness",
            "Courage"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Stefan Wolpers on Scrum.org lists nobody raising blockers or asking for help as a mistake.",
          "sub": "Stefan Wolpers trên Scrum.org xếp chuyện không ai nêu vướng hay xin giúp vào danh sách lỗi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: stay silent when stuck, and one minute turns into two days.",
          "sub": "Rút ra: vướng mà im, một phút thành hai ngày.",
          "keys": [
            "một phút thành hai ngày"
          ]
        }
      ],
      "ref": "p2,p4"
    },
    {
      "id": "s04",
      "module": "BRK-08",
      "data": {
        "title": "Một tuần sprint của Thảo",
        "points": [
          {
            "label": "Thứ Tư",
            "sub": "Ba phần",
            "illus": "stop-sign"
          },
          {
            "label": "Thứ Tư",
            "sub": "Đúng người",
            "illus": "person-raising-hand"
          },
          {
            "label": "Thứ Năm",
            "sub": "Bàn sau họp",
            "illus": "alarm-clock"
          },
          {
            "label": "Thứ Sáu",
            "sub": "Không đổ lỗi",
            "illus": "handshake"
          },
          {
            "label": "Thứ Sáu",
            "sub": "Hỏi lại",
            "illus": "ear"
          },
          {
            "label": "Thứ Hai",
            "sub": "Nhắn ngay",
            "illus": "mobile-phone"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The rest of the sprint, six stops.",
          "sub": "Phần còn lại của sprint, sáu chặng.",
          "keys": [
            "sáu chặng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Unmute. Let's go.",
          "sub": "Bật mic. Đi nào."
        }
      ],
      "ref": "intro"
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
            "at": "l6",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Tư 9:00 · Ba phần",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "laptop",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "at": "l1:Wednesday",
            "caption": "Thứ Tư 9:00 · lượt của Dũng",
            "icon": "page-facing-up"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "1. Cái gì chặn",
            "x": 3996,
            "y": 170,
            "size": 52,
            "at": "l3:blocked",
            "hl": [
              {
                "text": "chặn",
                "at": "l3:blocked"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "2. Việc nào bị ảnh hưởng",
            "x": 3996,
            "y": 250,
            "size": 52,
            "at": "l4:Without"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "3. Mình cần gì, từ ai",
            "x": 3996,
            "y": 330,
            "size": 52,
            "at": "l5:could you",
            "hl": [
              {
                "text": "từ ai",
                "at": "l5:Sam"
              }
            ]
          },
          {
            "id": "c-20",
            "t": "text",
            "text": "3 câu < 20 giây",
            "x": 3996,
            "y": 430,
            "size": 60,
            "at": "l6:twenty",
            "color": "accent",
            "hl": [
              {
                "text": "< 20 giây",
                "at": "l6:seconds"
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
          "say": "Stop one, Wednesday. Dũng waits for the partner's API documentation. Watch his three parts.",
          "sub": "Chặng một, thứ Tư. Dũng đang chờ tài liệu API của đối tác. Xem anh nói ba phần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sam, the Product Owner in Australia, is listening.",
          "sub": "Chị Sam, Product Owner ở Úc, đang nghe.",
          "keys": [
            "Product Owner"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "I'm blocked by the missing partner API documentation.",
          "sub": "Mình đang bị chặn vì chưa có tài liệu API của đối tác.",
          "face": "neutral"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Without it, I can't finish the shipping fee feature.",
          "sub": "Không có nó, mình chưa làm xong tính năng phí vận chuyển."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Sam, could you ask the partner to send it today?",
          "sub": "Chị Sam, nhờ đối tác gửi trong hôm nay được không?",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Three sentences, under twenty seconds. Short enough to say even when nervous.",
          "sub": "Ba câu, chưa tới hai mươi giây. Ngắn tới mức đang run vẫn nói được.",
          "keys": [
            "chưa tới hai mươi giây"
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
      "ref": "p6"
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
            "id": "c-p1",
            "t": "text",
            "text": "“I'm blocked by…”",
            "x": 3996,
            "y": 530,
            "size": 40,
            "at": "l1:blocked",
            "font": "base",
            "hl": [
              {
                "text": "blocked by",
                "at": "l1:blocked"
              }
            ]
          },
          {
            "id": "c-p2",
            "t": "text",
            "text": "“I'm stuck on…”",
            "x": 4356,
            "y": 530,
            "size": 40,
            "at": "l1:stuck",
            "font": "base"
          },
          {
            "id": "c-p3",
            "t": "text",
            "text": "“I can't move forward until…”",
            "x": 3996,
            "y": 590,
            "size": 40,
            "at": "l2:until",
            "font": "base",
            "hl": [
              {
                "text": "until",
                "at": "l2:until"
              }
            ]
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Cái chặn · ảnh hưởng · cái cần",
            "x": 3996,
            "y": 650,
            "size": 48,
            "at": "l3:blocks",
            "color": "accent",
            "hl": [
              {
                "text": "cái cần",
                "at": "l3:need"
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
          "say": "Handy starters: I'm blocked by. I'm stuck on.",
          "sub": "Câu mở tiện tay: “I'm blocked by…”, “I'm stuck on…”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And: I can't move forward until. Fill in the gap like a form.",
          "sub": "Và: “I can't move forward until…”. Điền vào chỗ trống như điền form."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: say what blocks you, what it affects, and what you need.",
          "sub": "Rút ra: nói cái chặn, nói cái bị ảnh hưởng, nói cái mình cần.",
          "keys": [
            "nói cái mình cần"
          ]
        }
      ],
      "ref": "p5,p7"
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
            "at": "l4",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Tư 9:05 · Đúng người",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
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
                "laptop",
                "shopping-cart"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
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
            "at": "l3:Thảo",
            "caption": "Thứ Tư 9:05 · lượt của Thảo",
            "icon": "shopping-cart"
          },
          {
            "id": "d-n",
            "t": "text",
            "text": "Gọi tên người hoặc vai trò",
            "x": 5964,
            "y": 170,
            "size": 48,
            "at": "l1:name",
            "hl": [
              {
                "text": "tên người",
                "at": "l1:name"
              }
            ]
          },
          {
            "id": "d-e1",
            "t": "text",
            "text": "“Could someone who knows the payment service help me after this?”",
            "x": 5964,
            "y": 240,
            "size": 22,
            "at": "l2:payment service",
            "font": "base"
          },
          {
            "id": "d-e2",
            "t": "text",
            "text": "“Dung, do you have a few minutes later today?”",
            "x": 5964,
            "y": 285,
            "size": 28,
            "at": "l3:few minutes",
            "font": "base"
          },
          {
            "id": "d-po",
            "t": "text",
            "text": "Yêu cầu chưa rõ → Product Owner",
            "x": 5964,
            "y": 360,
            "size": 44,
            "at": "l5:requirement",
            "color": "accent",
            "hl": [
              {
                "text": "Product Owner",
                "at": "l5:Product Owner"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Atlassian — What is a stand up meeting · Scrum Guide 2020: Product Owner",
            "x": 5964,
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
          "say": "Stop two, five minutes later. A request for help should name a person or a role.",
          "sub": "Chặng hai, năm phút sau. Lời xin giúp nên gọi tên người hoặc vai trò cụ thể.",
          "keys": [
            "gọi tên người hoặc vai trò"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So nobody guesses who should answer: could someone who knows the payment service help me after this?",
          "sub": "Để không ai phải đoán ai cần trả lời: “Ai rành dịch vụ thanh toán giúp mình sau buổi này được không?”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Or name him: Dũng, do you have a few minutes later today? Now Thảo's turn.",
          "sub": "Hoặc gọi thẳng: “Dũng ơi, lát nữa anh có vài phút không?” Giờ đến lượt Thảo."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Sam, could you confirm whether guests can check out without an account?",
          "sub": "Chị Sam, xác nhận giúp em khách chưa có tài khoản có được thanh toán không?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Unclear requirement? Ask the Product Owner, who orders the backlog and owns the product's value.",
          "sub": "Vướng vì yêu cầu chưa rõ? Hỏi Product Owner, người sắp xếp Product Backlog và chịu trách nhiệm giá trị sản phẩm.",
          "keys": [
            "Product Owner"
          ]
        }
      ],
      "ref": "p8,p10"
    },
    {
      "id": "s08",
      "module": "BRK-10",
      "data": {
        "quote": "If you're stuck, ask for help!",
        "mark": "ask for help",
        "by": "Dan Radigan, Atlassian",
        "illus": "person-raising-hand"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "If you're stuck, ask for help!",
          "sub": "Nếu bạn kẹt, hãy xin giúp đỡ!",
          "keys": [
            "xin giúp đỡ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Atlassian's stand-up guide.",
          "sub": "Hướng dẫn stand-up của Atlassian."
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
          }
        ],
        "items": [
          {
            "id": "d-w",
            "t": "text",
            "text": "Lỗi: một người vật lộn một mình",
            "x": 5964,
            "y": 480,
            "size": 44,
            "at": "l1:struggling",
            "color": "coral"
          },
          {
            "id": "d-w2",
            "t": "text",
            "text": "Scrum Master cũng đứng ngoài",
            "x": 5964,
            "y": 550,
            "size": 44,
            "at": "l1:Scrum Master",
            "color": "muted"
          },
          {
            "id": "d-ok",
            "t": "text",
            "text": "Bạn nêu vướng → cả nhóm tránh lỗi",
            "x": 5964,
            "y": 630,
            "size": 48,
            "at": "l2:avoid",
            "color": "accent",
            "hl": [
              {
                "text": "tránh lỗi",
                "at": "l2:avoid"
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
          "say": "Scrum.org also names this mistake: one developer struggling, nobody helping, and the Scrum Master not stepping in.",
          "sub": "Scrum.org cũng nêu lỗi này: một lập trình viên vật lộn, không ai hỗ trợ, Scrum Master không đứng ra giúp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Raise your blocker, and you help the whole team avoid it. Three trees, one mountain.",
          "sub": "Chủ động nêu vướng, bạn giúp cả nhóm tránh lỗi đó. Ba cây chụm lại thành núi.",
          "keys": [
            "Ba cây chụm lại"
          ]
        }
      ],
      "ref": "p9"
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
            "at": "l3",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Năm 9:00 · Bàn sau họp",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "phone",
                  "face": "worried"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop",
                "desktop-computer"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "at": "l1:test server",
            "caption": "Thứ Năm 9:00 · lỗi máy chủ thử nghiệm",
            "icon": "desktop-computer"
          },
          {
            "id": "e-A",
            "t": "text",
            "text": "A: trả lời hết, chia sẻ log",
            "x": 7932,
            "y": 170,
            "size": 44,
            "at": "l3:every",
            "color": "coral"
          },
          {
            "id": "e-A2",
            "t": "text",
            "text": "→ mọi người chờ, +10 phút",
            "x": 7972,
            "y": 240,
            "size": 44,
            "at": "l3:ten",
            "color": "coral",
            "hl": [
              {
                "text": "+10 phút",
                "at": "l3:minutes"
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
          "say": "Stop three, Thursday. Dũng can't connect to the test server, and says so.",
          "sub": "Chặng ba, thứ Năm. Dũng không kết nối được máy chủ thử nghiệm, và anh nói ra."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Which config file are you using? And which port?",
          "sub": "Anh dùng file cấu hình nào? Cổng nào?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Way A: Dũng answers every question, shares his logs on screen, the others wait. Ten more minutes.",
          "sub": "Cách A: Dũng trả lời từng câu, chia sẻ màn hình log, cả nhóm ngồi chờ. Thêm mười phút.",
          "keys": [
            "Thêm mười phút"
          ]
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "online",
        "label": "Thứ Năm 9:04 · chia sẻ log",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Gỡ lỗi ngay trong stand-up",
          "why": "Scrum.org coi bàn sâu vấn đề trong Daily Scrum là lỗi; Scrum Guide: Developers gặp nhau sau đó để bàn chi tiết.",
          "rule": "Nêu trong một phút, gỡ trong buổi riêng"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Okay, let me share my screen. Here are the logs, line by line...",
          "sub": "Rồi, để mình chia sẻ màn hình. Log đây, từng dòng một…",
          "pose": "explain",
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
          "say": "Five people, watching logs like a soap opera.",
          "sub": "Năm người xem log như xem phim dài tập.",
          "keys": [
            "phim dài tập"
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
          "say": "Good question. Can we come back to that after the stand-up? I'll share the logs with you.",
          "sub": "Câu hỏi hay. Mình bàn sau stand-up nhé? Mình sẽ gửi log cho em.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Way B. Ends on time, then two people debug.",
          "sub": "Cách B. Họp xong đúng giờ, rồi hai người gỡ lỗi riêng.",
          "phase": "redo",
          "keys": [
            "xong đúng giờ"
          ]
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
      "id": "s12",
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
            "id": "e-B",
            "t": "text",
            "text": "B: “Can we come back to that…”",
            "x": 7932,
            "y": 330,
            "size": 44,
            "at": "l1:Park",
            "color": "accent",
            "hl": [
              {
                "text": "come back",
                "at": "l2:come back"
              }
            ]
          },
          {
            "id": "e-p1",
            "t": "text",
            "text": "“Can we come back to that point later?”",
            "x": 7932,
            "y": 410,
            "size": 30,
            "at": "l2:point",
            "font": "base"
          },
          {
            "id": "e-p2",
            "t": "text",
            "text": "“When are you next free?”",
            "x": 7932,
            "y": 455,
            "size": 30,
            "at": "l2:free",
            "font": "base",
            "hl": [
              {
                "text": "next free",
                "at": "l2:free"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Nêu trong 1 phút, gỡ buổi riêng",
            "x": 7932,
            "y": 640,
            "size": 52,
            "at": "l3:minute",
            "color": "accent",
            "hl": [
              {
                "text": "gỡ buổi riêng",
                "at": "l3:separate"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Cụm từ: Dom Barnard, VirtualSpeech · Scrum.org — Daily Scrum Anti-Patterns",
            "x": 7932,
            "y": 720,
            "size": 28,
            "at": "l2",
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
          "say": "Scrum.org calls deep discussion in the Daily Scrum a mistake. Park it for later.",
          "sub": "Scrum.org coi việc bàn sâu trong Daily Scrum là lỗi. Hãy gác lại để sau.",
          "keys": [
            "gác lại để sau"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "VirtualSpeech gives two phrases: can we come back to that point later? When are you next free?",
          "sub": "VirtualSpeech gợi ý hai cụm: “Can we come back to that point later?” và “When are you next free?”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: raise it in one minute, fix it in a separate meeting.",
          "sub": "Rút ra: vướng mắc nêu trong một phút, gỡ trong buổi riêng.",
          "keys": [
            "gỡ trong buổi riêng"
          ]
        }
      ],
      "ref": "p11,p13"
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
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Sáu 9:00 · Không đổ lỗi",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four"
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
                  "id": "thao",
                  "side": "left",
                  "face": "worried"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "props": [
                "laptop",
                "locked"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "at": "l1:build",
            "caption": "Thứ Sáu 9:00 · build sáng làm hỏng đăng nhập",
            "icon": "locked"
          },
          {
            "id": "f-bad",
            "t": "text",
            "text": "“The backend team broke it again.”",
            "x": 60,
            "y": 1260,
            "size": 40,
            "at": "l2:broke",
            "color": "coral"
          },
          {
            "id": "f-badx",
            "t": "strike",
            "over": "f-bad",
            "at": "l4:defend"
          },
          {
            "id": "f-r",
            "t": "text",
            "text": "Respect: 1 trong 5 giá trị Scrum",
            "x": 60,
            "y": 1350,
            "size": 44,
            "at": "l4:Respect",
            "hl": [
              {
                "text": "Respect",
                "at": "l4:Respect"
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
          "say": "Stop four, Friday. This morning's build broke Thảo's login screen. She's annoyed.",
          "sub": "Chặng bốn, thứ Sáu. Bản build sáng nay làm hỏng màn hình đăng nhập của Thảo. Cô bực."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "The backend team broke the login API again. I can't do anything.",
          "sub": "Bên backend lại làm hỏng API đăng nhập rồi. Em chẳng làm gì được.",
          "face": "stern"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Dũng is the backend team. Look at his face.",
          "sub": "Dũng chính là bên backend. Nhìn mặt anh kìa."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Now he wants to defend himself, not help. Respect is a Scrum value, and blaming is on Wolpers' mistake list.",
          "sub": "Giờ anh chỉ muốn tự vệ, chẳng muốn giúp. Respect là giá trị Scrum, còn chê trách nhau nằm trong danh sách lỗi của Wolpers.",
          "keys": [
            "tự vệ"
          ]
        }
      ],
      "ref": "p14,p15"
    },
    {
      "id": "s14",
      "module": "BRK-04",
      "data": {
        "title": "Cùng một lỗi build",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "The backend team broke the login API again.",
        "right": "Since this morning's build, the login API returns an error.",
        "wrongIllus": "face-with-steam-from-nose",
        "rightIllus": "magnifying-glass-tilted-left"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Describe the people?",
          "sub": "Tả con người?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Or describe the system: since this morning's build, the API returns an error.",
          "sub": "Hay tả hệ thống: từ bản build sáng nay, API báo lỗi.",
          "keys": [
            "tả hệ thống"
          ]
        }
      ],
      "ref": "p15"
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
            "id": "f-g1",
            "t": "text",
            "text": "thời điểm · tác động · lời mời",
            "x": 60,
            "y": 1440,
            "size": 44,
            "at": "l3:time",
            "hl": [
              {
                "text": "lời mời",
                "at": "l3:invitation"
              }
            ]
          },
          {
            "id": "f-g2",
            "t": "text",
            "text": "“The API returns an error.” ✓",
            "x": 60,
            "y": 1520,
            "size": 44,
            "at": "l4:returns",
            "color": "accent"
          },
          {
            "id": "f-g3",
            "t": "text",
            "text": "“They broke the API.”",
            "x": 60,
            "y": 1590,
            "size": 44,
            "at": "l4:broke",
            "color": "muted"
          },
          {
            "id": "f-g3x",
            "t": "strike",
            "over": "f-g3",
            "at": "l4:broke+400"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Tả lỗi hệ thống, đừng tả người",
            "x": 60,
            "y": 1730,
            "size": 50,
            "at": "l5:system",
            "color": "accent",
            "hl": [
              {
                "text": "lỗi hệ thống",
                "at": "l5:system"
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
          "say": "Since this morning's build, the login API returns an error, so I can't test the login screen.",
          "sub": "Từ bản build sáng nay, API đăng nhập báo lỗi, nên em chưa test được màn hình đăng nhập.",
          "face": "neutral"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Dũng, could we look at it together after the stand-up?",
          "sub": "Anh Dũng, sau stand-up mình cùng xem được không?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A time, an impact, an invitation. The person named is happy to help right away.",
          "sub": "Có thời điểm, có tác động, có lời mời. Người được gọi tên sẵn lòng giúp ngay.",
          "keys": [
            "sẵn lòng giúp ngay"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The safe swap: the API returns an error, not they broke the API.",
          "sub": "Cách đổi an toàn: “The API returns an error.” thay vì “They broke the API.”"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: describe the system's fault, not a person's fault.",
          "sub": "Rút ra: tả lỗi của hệ thống, đừng tả lỗi của người.",
          "keys": [
            "tả lỗi của hệ thống"
          ]
        }
      ],
      "ref": "p14,p15,p16"
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Sáu 9:20 · Hỏi lại",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop",
                "ear"
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
                  "shot": "E-SHOT-05",
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
            "at": "l1:after",
            "caption": "Thứ Sáu 9:20 · sau stand-up",
            "icon": "ear"
          },
          {
            "id": "g-no",
            "t": "text",
            "text": "Gật đầu cho qua",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l3:nod",
            "color": "muted"
          },
          {
            "id": "g-nox",
            "t": "strike",
            "over": "g-no",
            "at": "l4:Don't"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "“Sorry, but just to clarify…”",
            "x": 2028,
            "y": 1350,
            "size": 36,
            "at": "l4:clarify",
            "font": "base",
            "hl": [
              {
                "text": "just to clarify",
                "at": "l4:clarify"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "“Can you repeat that please?”",
            "x": 2028,
            "y": 1410,
            "size": 36,
            "at": "l5:repeat",
            "font": "base",
            "hl": [
              {
                "text": "repeat",
                "at": "l5:repeat"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "“Just to be clear, do you mean…?”",
            "x": 2028,
            "y": 1470,
            "size": 36,
            "at": "l5:mean",
            "font": "base",
            "hl": [
              {
                "text": "do you mean",
                "at": "l5:mean"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Cụm từ: VirtualSpeech · lời khuyên: British Council TeachingEnglish",
            "x": 2028,
            "y": 1810,
            "size": 28,
            "at": "l4",
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
          "say": "Stop five, right after. Dũng explains the fix at full speed.",
          "sub": "Chặng năm, ngay sau họp. Dũng giải thích cách sửa với tốc độ tên lửa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Just clear the cache, restart the test server, then rerun the migration and you're good.",
          "sub": "Xoá cache, khởi động lại máy chủ thử nghiệm, chạy lại migration là xong.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Thảo caught half of it. The old Thảo would nod and suffer.",
          "sub": "Thảo nghe được một nửa. Thảo ngày xưa sẽ gật đầu cho qua rồi tự khổ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Don't. The British Council lesson says: interrupt and ask, even if it feels awkward. VirtualSpeech offers: sorry, but just to clarify.",
          "sub": "Đừng. British Council khuyên xen vào hỏi lại, kể cả khi ngại. VirtualSpeech gợi ý: “Sorry, but just to clarify…”",
          "keys": [
            "hỏi lại"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Can you repeat that please? Just to be clear, do you mean I should restart the test server first?",
          "sub": "Anh nhắc lại giúp em được không? Cho chắc nhé, ý anh là em khởi động lại máy chủ thử nghiệm trước à?",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Yes, exactly. Server first.",
          "sub": "Đúng rồi. Máy chủ trước.",
          "face": "happy",
          "pose": "thumb"
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s17",
      "module": "BRK-07",
      "data": {
        "question": "Kẹt lúc hai giờ chiều, có phải đợi tới sáng mai?",
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
          "say": "Stuck at two p.m.? Do you wait until tomorrow's stand-up?",
          "sub": "Kẹt lúc hai giờ chiều, có phải đợi stand-up sáng mai?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p18"
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
            "at": "l3",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
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
            "text": "⑥ Thứ Hai 14:00 · Nhắn ngay",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six"
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
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
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
            "at": "l1:expired",
            "caption": "Thứ Hai 14:00 · kênh chat của nhóm",
            "icon": "mobile-phone"
          },
          {
            "id": "h-a",
            "t": "text",
            "text": "Stand-up không phải lúc duy nhất",
            "x": 3996,
            "y": 1260,
            "size": 44,
            "at": "l2:only",
            "hl": [
              {
                "text": "không phải lúc duy nhất",
                "at": "l2:only"
              }
            ]
          },
          {
            "id": "h-m1",
            "t": "text",
            "text": "“Heads up: I'm blocked by the expired test account.”",
            "x": 3996,
            "y": 1340,
            "size": 22,
            "at": "l3:Heads up",
            "font": "base",
            "hl": [
              {
                "text": "Heads up",
                "at": "l3:Heads up"
              }
            ]
          },
          {
            "id": "h-m2",
            "t": "text",
            "text": "“Can anyone with admin access reset it?”",
            "x": 3996,
            "y": 1380,
            "size": 28,
            "at": "l3:admin",
            "font": "base"
          },
          {
            "id": "h-hu",
            "t": "text",
            "text": "Heads up = báo trước",
            "x": 3996,
            "y": 1460,
            "size": 48,
            "at": "l4:warns",
            "color": "accent"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Kẹt giữa ngày → nhắn ngay",
            "x": 3996,
            "y": 1550,
            "size": 52,
            "at": "l5:right away",
            "color": "accent",
            "hl": [
              {
                "text": "nhắn ngay",
                "at": "l5:right away"
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
          "say": "Stop six, next Monday, two p.m. Thảo's test account has expired.",
          "sub": "Chặng sáu, hai giờ chiều thứ Hai tuần sau. Tài khoản thử nghiệm của Thảo hết hạn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Atlassian reminds us: the stand-up isn't the only time to raise a blocker.",
          "sub": "Atlassian nhắc: stand-up không phải lúc duy nhất để nêu vướng mắc.",
          "keys": [
            "không phải lúc duy nhất"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Heads up: I'm blocked by the expired test account. Can anyone with admin access reset it?",
          "sub": "Báo trước: em bị chặn vì tài khoản thử nghiệm hết hạn. Ai có quyền quản trị đặt lại giúp được không?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Heads up warns everyone: important news coming.",
          "sub": "Heads up là lời báo trước: có tin quan trọng đây."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Blocked in the middle of the day? Message right away. Don't wait for tomorrow morning.",
          "sub": "Bị chặn giữa ngày? Nhắn ngay, đừng chờ sáng mai.",
          "keys": [
            "Nhắn ngay"
          ]
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
            "text": "Thứ Ba tuần sau · 9:00",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Tuesday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "face": "happy",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "props": [
                "laptop"
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
                  "shot": "E-SHOT-05",
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
            "at": "l1:stand-up",
            "caption": "Thứ Ba tuần sau 9:00 · cùng cuộc gọi",
            "icon": "laptop"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "cái chặn ✓",
            "x": 5964,
            "y": 1270,
            "size": 52,
            "at": "l2:blocked",
            "color": "accent"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "ảnh hưởng ✓",
            "x": 5964,
            "y": 1345,
            "size": 52,
            "at": "l2:can't",
            "color": "accent"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "gọi tên, hẹn sau họp ✓",
            "x": 5964,
            "y": 1420,
            "size": 52,
            "at": "l3:after",
            "color": "accent"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Ba cây chụm lại…”",
            "x": 5964,
            "y": 1560,
            "size": 56,
            "at": "l5:three trees",
            "color": "accent",
            "hl": [
              {
                "text": "Ba cây chụm lại",
                "at": "l5:three trees"
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
          "say": "Tuesday next week, nine a.m. Same stand-up, same Thảo.",
          "sub": "Thứ Ba tuần sau, chín giờ sáng. Vẫn buổi stand-up ấy, vẫn Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'm blocked by a permission error on the test database, so I can't run the app.",
          "sub": "Em đang bị chặn vì lỗi phân quyền ở cơ sở dữ liệu thử nghiệm, nên chưa chạy được ứng dụng.",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Dũng, could we look at it after the stand-up?",
          "sub": "Anh Dũng, sau stand-up mình xem cùng được không?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Sure. Five minutes after this call.",
          "sub": "Được. Năm phút sau cuộc gọi này.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One tree can't make a mountain. Three trees together can. Same five minutes, zero days lost.",
          "sub": "“Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao.” Vẫn năm phút, nhưng không mất ngày nào.",
          "keys": [
            "không mất ngày nào"
          ]
        }
      ],
      "ref": "p5,p19"
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
            "at": "l4:end",
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l5",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l6",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l7",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l8",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tóm lại: nêu sớm, nêu gọn",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:early"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1250,
            "w": 44,
            "h": 44,
            "at": "l2:blocks",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1232,
            "size": 56,
            "at": "l2:blocks+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Cái gì đang chặn",
            "x": 7997,
            "y": 1242,
            "size": 44,
            "at": "l2:blocks+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1332,
            "w": 44,
            "h": 44,
            "at": "l2:affects",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1314,
            "size": 56,
            "at": "l2:affects+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Việc nào bị ảnh hưởng",
            "x": 7997,
            "y": 1324,
            "size": 44,
            "at": "l2:affects+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1414,
            "w": 44,
            "h": 44,
            "at": "l2:need",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1396,
            "size": 56,
            "at": "l2:need+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Cần gì, gọi tên ai",
            "x": 7997,
            "y": 1406,
            "size": 44,
            "at": "l2:need+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1496,
            "w": 44,
            "h": 44,
            "at": "l3:after",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1478,
            "size": 56,
            "at": "l3:after+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Hẹn bàn sau họp",
            "x": 7997,
            "y": 1488,
            "size": 44,
            "at": "l3:after+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1578,
            "w": 44,
            "h": 44,
            "at": "l3:system",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1560,
            "size": 56,
            "at": "l3:system+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Tả hệ thống, không tả người",
            "x": 7997,
            "y": 1570,
            "size": 44,
            "at": "l3:system+200"
          },
          {
            "id": "j-c5",
            "t": "box",
            "x": 7932,
            "y": 1660,
            "w": 44,
            "h": 44,
            "at": "l4:message",
            "stroke": 5
          },
          {
            "id": "j-k5",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1642,
            "size": 56,
            "at": "l4:message+600",
            "color": "accent"
          },
          {
            "id": "j-l5",
            "t": "text",
            "text": "Giữa ngày: nhắn ngay",
            "x": 7997,
            "y": 1652,
            "size": 44,
            "at": "l4:message+200"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 5536,
            "y": 40,
            "at": "l5:short"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9472,
            "y": 40,
            "at": "l6:meeting"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1600,
            "y": 1130,
            "at": "l7:people"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi học; điều chỉnh theo quy ước của nhóm bạn. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1810,
            "size": 28,
            "at": "l9:end",
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
          "say": "So, raising a blocker early doesn't make you look weak. It keeps the sprint goal alive.",
          "sub": "Tóm lại, nêu vướng sớm không làm bạn trông yếu, mà giúp cả nhóm giữ được mục tiêu sprint.",
          "keys": [
            "giữ được mục tiêu sprint"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Say what blocks you, what it affects, and what you need, from whom.",
          "sub": "Nói cái gì chặn, việc nào bị ảnh hưởng, cần gì và cần ai."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Talk details after the meeting, and describe the system, not people.",
          "sub": "Chi tiết để sau họp, tả hệ thống chứ đừng tả người."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Blocked mid-day? Send a message, don't wait.",
          "sub": "Bị chặn giữa ngày? Nhắn ngay, đừng chờ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Three parts, said early and short.",
          "sub": "Ba phần, nói sớm, nói gọn."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Details go after the meeting, with the right person.",
          "sub": "Chi tiết để sau họp, với đúng người."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Systems, not people.",
          "sub": "Tả hệ thống, không tả người."
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Try now: think of your current task. Write one I'm blocked by sentence, with a name, ready to use.",
          "sub": "Làm ngay: nghĩ tới việc đang làm, viết sẵn một câu “I'm blocked by…” kèm tên người cần giúp.",
          "keys": [
            "viết sẵn"
          ]
        },
        {
          "id": "l9",
          "lang": "en",
          "who": "det",
          "say": "Next up: when the client asks, how long will it take?",
          "sub": "Bài tiếp theo: khách hỏi “How long will it take?” thì trả lời sao cho an toàn.",
          "keys": [
            "How long will it take"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p19,outro"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "How long did it take Dung to give Thao access once she asked?",
        "options": [
          "About two weeks, because access requests always need many approvals",
          "He refused, because developers are not allowed to share any access",
          "About five minutes, while her interface work was already running late"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "stopwatch",
        "why": "Dũng cấp quyền chỉ trong năm phút. Việc nhỏ như vậy lại làm trễ hai ngày vì không được nói sớm."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "How long did it take Dung to give Thao access once she asked?",
          "sub": "Khi Thảo hỏi, Dũng mất bao lâu để cấp quyền?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "About five minutes, while her interface work was already running late.",
          "sub": "Khoảng năm phút, trong khi phần giao diện đã trễ hai ngày."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Remember the guess? Five minutes to fix, two days of silence.",
          "sub": "Nhớ câu đoán chứ? Năm phút để gỡ, hai ngày im lặng."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[5]"
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
          "say": "One I'm blocked by sentence, ready. Then try the forty questions below.",
          "sub": "Một câu “I'm blocked by…” viết sẵn. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144. Hook HOOK-21: “Thiếu quyền truy cập, gỡ mất bao lâu? Hai ngày hay năm phút?” → năm phút, nhưng im lặng mất hai ngày (p3). Dòng thời gian: MỘT TUẦN SPRINT của Thảo (T3 9:00 “No blockers” ×2 → T4 9:00 Dũng ba phần, hỏi Sam → T4 9:05 gọi đúng người, Thảo hỏi Sam (PO) → T5 lỗi máy chủ thử nghiệm, “Khoan đã!” chia sẻ log giữa họp → T6 build sáng hỏng đăng nhập, không đổ lỗi → T6 9:20 hỏi lại cho rõ → T2 14:00 nhắn chat “Heads up” → Thứ Ba tuần sau 9:00 khép vòng). Nhân vật: Thảo (frontend), Dũng (backend), Sam (PO). Tục ngữ: “Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao”. Cảnh ngắt nhịp: BRK-08 (tuần), BRK-10 (trích Atlassian), BRK-04 (Trước/Sau đổ lỗi), BRK-07 (rehook). Câu đố questions[5].",
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
