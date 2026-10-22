// audit-your-tasks-for-ai--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "audit-your-tasks-for-ai--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "experts-staying-relevant-with-ai",
    "slug": "audit-your-tasks-for-ai",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Liệt kê việc của mình xem phần nào nên giao cho AI?",
    "series": "Làm cùng AI thay vì sợ AI — cho chuyên gia lâu năm học lại để giữ giá trị nghề"
  },
  "format": "W",
  "mode": "text",
  "narrator": "det",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
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
            "fit": [
              "a-ct0",
              "a-ct1"
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
            "id": "a-box",
            "t": "box",
            "x": 60,
            "y": 60,
            "w": 1600,
            "h": 300,
            "at": "l1",
            "stroke": 6
          },
          {
            "id": "a-cb0",
            "t": "box",
            "x": 60,
            "y": 60,
            "w": 320,
            "h": 90,
            "at": "l1:task",
            "stroke": 4
          },
          {
            "id": "a-cb1",
            "t": "box",
            "x": 380,
            "y": 60,
            "w": 320,
            "h": 90,
            "at": "l1:how long",
            "stroke": 4
          },
          {
            "id": "a-cb2",
            "t": "box",
            "x": 700,
            "y": 60,
            "w": 320,
            "h": 90,
            "at": "l1:how often",
            "stroke": 4
          },
          {
            "id": "a-cb3",
            "t": "box",
            "x": 1020,
            "y": 60,
            "w": 320,
            "h": 90,
            "at": "l1:documents",
            "stroke": 4
          },
          {
            "id": "a-cb4",
            "t": "box",
            "x": 1340,
            "y": 60,
            "w": 320,
            "h": 90,
            "at": "l1:who",
            "stroke": 4
          },
          {
            "id": "a-ct0",
            "t": "text",
            "text": "Việc",
            "x": 90,
            "y": 72,
            "size": 50,
            "at": "l1:task+200"
          },
          {
            "id": "a-ct1",
            "t": "text",
            "text": "Bao lâu",
            "x": 410,
            "y": 72,
            "size": 50,
            "at": "l1:how long+200"
          },
          {
            "id": "a-ct2",
            "t": "text",
            "text": "Tần suất",
            "x": 730,
            "y": 72,
            "size": 50,
            "at": "l1:how often+200"
          },
          {
            "id": "a-ct3",
            "t": "text",
            "text": "Tài liệu",
            "x": 1050,
            "y": 72,
            "size": 50,
            "at": "l1:documents+200"
          },
          {
            "id": "a-ct4",
            "t": "text",
            "text": "Gửi ai",
            "x": 1370,
            "y": 72,
            "size": 50,
            "at": "l1:who+200"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Tờ giấy quyết định AI làm gì",
            "x": 100,
            "y": 200,
            "size": 52,
            "at": "l2:decide",
            "color": "coral",
            "hl": [
              {
                "text": "AI làm gì",
                "at": "l2:AI does"
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
          "say": "Five columns: the task, how long, how often, what documents, and who gets the result.",
          "sub": "Năm cột: việc gì, bao lâu, bao lâu một lần, dùng tài liệu gì, kết quả gửi ai.",
          "keys": [
            "Năm cột"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This humble sheet will decide what AI does for chị Hoa.",
          "sub": "Tờ giấy khiêm tốn này sẽ quyết định AI làm gì cho chị Hoa.",
          "keys": [
            "AI làm gì"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 200
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
            "at": "l2",
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
            "x": 1040,
            "y": 380,
            "w": 640,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "give",
                  "face": "happy"
                }
              ],
              "props": [
                "clipboard",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "push"
                },
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
            "at": "l1:Hoa",
            "caption": "Sáng thứ Hai · tuần 1",
            "icon": "clipboard"
          },
          {
            "id": "a-tried",
            "t": "text",
            "text": "Thử lung tung → chẳng giúp mấy",
            "x": 60,
            "y": 400,
            "size": 44,
            "at": "l2:random",
            "color": "muted"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy”",
            "x": 60,
            "y": 520,
            "size": 56,
            "at": "l5:careful",
            "color": "accent",
            "hl": [
              {
                "text": "vô áy náy",
                "at": "l5:regrets"
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
          "say": "Remember chị Hoa, chief accountant for twenty years?",
          "sub": "Nhớ chị Hoa, kế toán trưởng hai mươi năm chứ?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "I tried AI on random things. It barely helped. Where do I even start?",
          "sub": "Chị thử AI lung tung mấy việc, chẳng giúp được bao nhiêu. Bắt đầu từ đâu đây?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Enter Thảo, head of HR, a woman who has never met a table she didn't love.",
          "sub": "Đây là Thảo, trưởng phòng nhân sự, chưa gặp cái bảng nào mà không mê."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "First, don't touch the tools. List your week. Here's my template.",
          "sub": "Thứ nhất, khoan đụng công cụ. Liệt kê tuần làm việc đã. Mẫu của em đây.",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Old wisdom says: careful now, no regrets later.",
          "sub": "Ông bà dặn: “Cẩn tắc vô áy náy.”",
          "keys": [
            "Cẩn tắc vô áy náy"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "ref": "intro,p1"
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
            "text": "Việc nào nên giao cho AI?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:tasks",
            "hl": [
              {
                "text": "giao cho AI",
                "at": "l1:give"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Tải thật nhiều công cụ",
            "x": 2028,
            "y": 160,
            "size": 52,
            "at": "l2:download",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:list"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Liệt kê việc của mình trước",
            "x": 2688,
            "y": 160,
            "size": 56,
            "at": "l3:list",
            "color": "accent",
            "hl": [
              {
                "text": "Liệt kê việc",
                "at": "l3:list"
              }
            ]
          },
          {
            "id": "b-bas",
            "t": "text",
            "text": "Phần lớn: mới hỗ trợ cơ bản",
            "x": 2028,
            "y": 260,
            "size": 44,
            "at": "l2:basic"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Navigos 2026, Tuổi Trẻ dẫn 26/1/2026",
            "x": 2028,
            "y": 330,
            "size": 24,
            "at": "l2",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So, which of your tasks should you give to AI?",
          "sub": "Vậy việc nào của mình nên giao cho AI?",
          "keys": [
            "giao cho AI"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Many people download every tool. Navigos found most workers still use AI only for basic support.",
          "sub": "Nhiều người tải đủ thứ công cụ. Navigos thấy phần lớn người lao động mới dùng AI hỗ trợ cơ bản.",
          "keys": [
            "hỗ trợ cơ bản"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One reason: they never decided which task AI should help. So list your own tasks first.",
          "sub": "Một lý do: chưa xác định AI giúp nhiệm vụ nào. Vậy hãy liệt kê việc của mình trước.",
          "keys": [
            "liệt kê việc của mình"
          ]
        }
      ],
      "ref": "p1"
    },
    {
      "id": "s03",
      "module": "BRK-06",
      "data": {
        "title": "Tải hết về rồi tính?",
        "items": [
          {
            "illus": "speech-balloon",
            "text": "Trò chuyện"
          },
          {
            "illus": "globe-with-meridians",
            "text": "Dịch"
          },
          {
            "illus": "bar-chart",
            "text": "Làm slide"
          },
          {
            "illus": "studio-microphone",
            "text": "Ghi âm"
          },
          {
            "illus": "framed-picture",
            "text": "Vẽ ảnh"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Chat, translate, slides, voice, pictures, all at once?",
          "sub": "Trò chuyện, dịch, slide, ghi âm, vẽ ảnh, tải hết cùng lúc?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "That's not a plan. That's a shopping spree.",
          "sub": "Đó không phải kế hoạch. Đó là đi chợ vô tội vạ.",
          "keys": [
            "đi chợ vô tội vạ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
          }
        ],
        "items": [
          {
            "id": "b-wbsrc",
            "t": "text",
            "text": "Ngân hàng Thế giới, Báo cáo Phát triển Thế giới 2019",
            "x": 2028,
            "y": 400,
            "size": 26,
            "at": "l1:World Bank",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "b-tk",
            "t": "text",
            "text": "Đổi từng nhiệm vụ trước",
            "x": 2028,
            "y": 440,
            "size": 44,
            "at": "l1:task",
            "hl": [
              {
                "text": "nhiệm vụ trước",
                "at": "l1:task first"
              }
            ]
          },
          {
            "id": "b-in",
            "t": "illus",
            "name": "inbox-tray",
            "x": 2028,
            "y": 510,
            "size": 80,
            "at": "l2:input"
          },
          {
            "id": "b-def",
            "t": "text",
            "text": "đầu vào · cách làm · kết quả",
            "x": 2128,
            "y": 525,
            "size": 44,
            "at": "l2:input",
            "color": "accent",
            "hl": [
              {
                "text": "đầu vào",
                "at": "l2:input"
              }
            ]
          },
          {
            "id": "b-s0",
            "t": "box",
            "x": 2028,
            "y": 640,
            "w": 380,
            "h": 90,
            "at": "l3:four+300",
            "stroke": 4,
            "color": "accent"
          },
          {
            "id": "b-s1",
            "t": "box",
            "x": 2438,
            "y": 640,
            "w": 380,
            "h": 90,
            "at": "l3:four+600",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-s2",
            "t": "box",
            "x": 2848,
            "y": 640,
            "w": 380,
            "h": 90,
            "at": "l3:four+900",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-s3",
            "t": "box",
            "x": 3258,
            "y": 640,
            "w": 380,
            "h": 90,
            "at": "l3:four+1200",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-st0",
            "t": "text",
            "text": "Tuần 1: ghi",
            "x": 2048,
            "y": 655,
            "size": 40,
            "at": "l3:four+420"
          },
          {
            "id": "b-st1",
            "t": "text",
            "text": "Thứ Sáu: chia nhóm",
            "x": 2458,
            "y": 655,
            "size": 40,
            "at": "l3:four+720"
          },
          {
            "id": "b-st2",
            "t": "text",
            "text": "Tuần 2: chấm",
            "x": 2868,
            "y": 655,
            "size": 40,
            "at": "l3:four+1020"
          },
          {
            "id": "b-st3",
            "t": "text",
            "text": "Tuần 2–3: thử",
            "x": 3278,
            "y": 655,
            "size": 40,
            "at": "l3:four+1320"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The World Bank's 2019 report shows technology changes work task by task first, not whole job titles.",
          "sub": "Báo cáo 2019 của Ngân hàng Thế giới: công nghệ đổi cách làm theo từng nhiệm vụ trước, không phải cả chức danh.",
          "keys": [
            "từng nhiệm vụ trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A task means clear input, a way of doing it, and a clear result.",
          "sub": "Một nhiệm vụ là việc có đầu vào, cách làm và kết quả rõ ràng.",
          "keys": [
            "đầu vào, cách làm và kết quả"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hoa's plan: three weeks, four steps.",
          "sub": "Kế hoạch của chị Hoa: ba tuần, bốn bước.",
          "keys": [
            "bốn bước"
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
            "text": "Tuần 1 · Ghi ngay sau mỗi việc",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Week one",
            "hl": [
              {
                "text": "Ghi ngay",
                "at": "l1:right after"
              }
            ]
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4976,
            "y": 150,
            "w": 640,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "clipboard",
                "fountain-pen"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:five",
            "caption": "Thứ Hai → thứ Sáu · tuần 1",
            "icon": "clipboard"
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "5 ngày làm việc",
            "x": 3996,
            "y": 150,
            "size": 56,
            "at": "l1:five",
            "color": "accent"
          },
          {
            "id": "c-q",
            "t": "text",
            "text": "việc gì · bao lâu · lặp bao lâu",
            "x": 3996,
            "y": 240,
            "size": 42,
            "at": "l3:what"
          },
          {
            "id": "c-q2",
            "t": "text",
            "text": "tài liệu gì · gửi cho ai",
            "x": 3996,
            "y": 300,
            "size": 42,
            "at": "l3:documents"
          },
          {
            "id": "c-mem",
            "t": "text",
            "text": "Cuối tuần nhớ lại",
            "x": 3996,
            "y": 390,
            "size": 46,
            "at": "l4:memory",
            "color": "muted"
          },
          {
            "id": "c-memx",
            "t": "strike",
            "over": "c-mem",
            "at": "l4:forget"
          },
          {
            "id": "c-sm",
            "t": "text",
            "text": "Việc nhỏ lặp: AI dễ giúp",
            "x": 3996,
            "y": 470,
            "size": 44,
            "at": "l5:small",
            "color": "accent",
            "hl": [
              {
                "text": "AI dễ giúp",
                "at": "l5:helps"
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
          "say": "Step one, week one. For five working days, Hoa writes a line right after each task.",
          "sub": "Bước một, tuần một. Trong năm ngày làm việc, xong việc nào chị Hoa ghi ngay việc đó.",
          "keys": [
            "ghi ngay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Formatted the cost table. Twenty minutes. Every week. Sent to the director.",
          "sub": "Định dạng bảng chi phí. Hai mươi phút. Tuần nào cũng làm. Gửi giám đốc.",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "What, how long, how often, which documents, and who gets it.",
          "sub": "Việc gì, bao lâu, bao lâu lặp lại, dùng tài liệu gì, gửi cho ai."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not from memory on Friday night. Small repeated tasks are the first ones you forget.",
          "sub": "Đừng ghi theo trí nhớ tối thứ Sáu. Việc nhỏ lặp lại là thứ quên đầu tiên.",
          "keys": [
            "Đừng ghi theo trí nhớ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And those small repeats are exactly where AI helps most easily.",
          "sub": "Mà chính những việc nhỏ lặp lại là chỗ AI dễ giúp nhất.",
          "keys": [
            "AI dễ giúp nhất"
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
            "at": "l1",
            "fit": [
              "c-v2"
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
            "id": "c-v2",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4976,
            "y": 150,
            "w": 640,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "card-index",
                "locked"
              ],
              "camera": [
                {
                  "at": "l1",
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
            "at": "l1",
            "caption": "Bảng mẫu của Thảo",
            "icon": "card-index"
          },
          {
            "id": "c-h1",
            "t": "text",
            "text": "Thông báo tuyển dụng",
            "x": 3996,
            "y": 560,
            "size": 40,
            "at": "l2:ads"
          },
          {
            "id": "c-h2",
            "t": "text",
            "text": "Tổng hợp phiếu thử việc",
            "x": 3996,
            "y": 615,
            "size": 40,
            "at": "l2:probation"
          },
          {
            "id": "c-h3",
            "t": "text",
            "text": "Nói chuyện người muốn nghỉ",
            "x": 3996,
            "y": 670,
            "size": 40,
            "at": "l2:quit"
          },
          {
            "id": "c-lock",
            "t": "illus",
            "name": "locked",
            "x": 4576,
            "y": 600,
            "size": 80,
            "at": "l3:personal"
          },
          {
            "id": "c-pd",
            "t": "text",
            "text": "dữ liệu cá nhân?",
            "x": 4666,
            "y": 615,
            "size": 44,
            "at": "l3:personal",
            "color": "coral",
            "hl": [
              {
                "text": "dữ liệu cá nhân",
                "at": "l3:personal data"
              }
            ]
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Ghi ngay = danh sách thật",
            "x": 4976,
            "y": 690,
            "size": 44,
            "at": "l4:real",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "First, five columns. Second, write right after each task.",
          "sub": "Thứ nhất, kẻ năm cột. Thứ hai, làm xong việc nào ghi ngay việc đó.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Third, at week's end, merge similar ones: job ads, probation reviews, talks with people who want to quit.",
          "sub": "Thứ ba, cuối tuần gộp việc giống nhau: thông báo tuyển dụng, phiếu đánh giá thử việc, nói chuyện với người muốn nghỉ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Fourth, mark every task that uses staff personal data.",
          "sub": "Thứ tư, đánh dấu việc nào có dùng dữ liệu cá nhân của nhân viên.",
          "keys": [
            "dữ liệu cá nhân"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Write it right after, and the list matches your real week.",
          "sub": "Ghi ngay sau khi làm thì danh sách mới đúng tuần làm việc thật.",
          "keys": [
            "đúng tuần làm việc thật"
          ]
        }
      ],
      "ref": "p4,p5"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "Thứ Sáu · Chia ba nhóm",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Friday",
            "hl": [
              {
                "text": "ba nhóm",
                "at": "l1:three groups"
              }
            ]
          },
          {
            "id": "d-b0",
            "t": "box",
            "x": 5964,
            "y": 150,
            "w": 520,
            "h": 230,
            "at": "l1:pattern",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "d-a0",
            "t": "text",
            "text": "① Lặp theo mẫu",
            "x": 5989,
            "y": 165,
            "size": 48,
            "at": "l1:pattern+200"
          },
          {
            "id": "d-s0",
            "t": "text",
            "text": "nháp, tóm tắt, định dạng, dịch thô",
            "x": 5989,
            "y": 250,
            "size": 32,
            "at": "l1:pattern+500",
            "color": "muted"
          },
          {
            "id": "d-b1",
            "t": "box",
            "x": 6524,
            "y": 150,
            "w": 520,
            "h": 230,
            "at": "l2:judgement",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "d-a1",
            "t": "text",
            "text": "② Cần phán đoán",
            "x": 6549,
            "y": 165,
            "size": 48,
            "at": "l2:judgement+200"
          },
          {
            "id": "d-s1",
            "t": "text",
            "text": "duyệt chi, rủi ro, ký báo cáo",
            "x": 6549,
            "y": 250,
            "size": 32,
            "at": "l2:judgement+500",
            "color": "muted"
          },
          {
            "id": "d-b2",
            "t": "box",
            "x": 7084,
            "y": 150,
            "w": 520,
            "h": 230,
            "at": "l3:relationship",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "d-a2",
            "t": "text",
            "text": "③ Cần quan hệ",
            "x": 7109,
            "y": 165,
            "size": 48,
            "at": "l3:relationship+200"
          },
          {
            "id": "d-s2",
            "t": "text",
            "text": "thương lượng, tư vấn, thuyết phục",
            "x": 7109,
            "y": 250,
            "size": 32,
            "at": "l3:relationship+500",
            "color": "muted"
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "Có khuôn → nhìn là biết đạt",
            "x": 5964,
            "y": 410,
            "size": 40,
            "at": "l1:glance",
            "hl": [
              {
                "text": "nhìn là biết",
                "at": "l1:glance"
              }
            ]
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "AI gợi ý, người chịu",
            "x": 6524,
            "y": 410,
            "size": 40,
            "at": "l2:responsible"
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "Dựa vào niềm tin",
            "x": 7084,
            "y": 410,
            "size": 40,
            "at": "l3:trust",
            "hl": [
              {
                "text": "niềm tin",
                "at": "l3:trust"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Làm việc nhóm: kỹ năng ứng xử xã hội được cần nhiều hơn (Ngân hàng Thế giới)",
            "x": 6524,
            "y": 480,
            "size": 24,
            "at": "l3",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Step two, Friday afternoon: three groups. One, pattern work. Drafts, summaries, formatting, rough translation. You can judge it at a glance.",
          "sub": "Bước hai, chiều thứ Sáu: ba nhóm. Một, việc lặp theo mẫu: nháp, tóm tắt, định dạng, dịch thô. Nhìn là biết đạt chưa.",
          "keys": [
            "việc lặp theo mẫu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two, judgement work. Approving spending, weighing a clause's risk, signing reports. AI suggests, you stay responsible.",
          "sub": "Hai, việc cần phán đoán: duyệt chi, cân rủi ro điều khoản, ký báo cáo. AI gợi ý, người làm nghề chịu trách nhiệm.",
          "keys": [
            "việc cần phán đoán"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three, relationship work. Negotiating, advising a worried client, persuading the boss. It runs on trust.",
          "sub": "Ba, việc cần quan hệ: thương lượng, tư vấn khách đang lo, thuyết phục cấp trên. Dựa vào niềm tin.",
          "keys": [
            "việc cần quan hệ"
          ]
        }
      ],
      "ref": "p6,p7,p8"
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
            "id": "d-easy",
            "t": "text",
            "text": "Dễ → AI · khó → mình",
            "x": 5964,
            "y": 560,
            "size": 56,
            "at": "l1:Easy",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "Easy! Easy tasks go to AI, hard ones stay with me. Starting with the payroll check!",
          "sub": "Dễ thôi! Việc dễ giao AI, việc khó chị giữ. Bắt đầu bằng đối chiếu bảng lương!",
          "face": "happy",
          "pose": "point"
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s09",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Chiều thứ Sáu · tuần 1",
        "actors": [
          {
            "id": "hoa",
            "side": "center",
            "pose": "point",
            "face": "happy"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Việc dễ giao hết, việc khó AI chịu",
          "why": "Việc dễ vẫn có thể chứa dữ liệu mật; việc khó vẫn có phần AI giúp được.",
          "rule": "Chia theo cách kiểm và trách nhiệm, không theo dễ hay khó"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "Payroll is easy, so AI takes it. Hard files, AI can't help at all.",
          "sub": "Bảng lương dễ, giao AI. Hồ sơ khó thì AI chịu thua.",
          "face": "happy",
          "pose": "point",
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
          "say": "Easy, but full of confidential data? Still not for AI.",
          "sub": "Dễ mà đầy dữ liệu mật? Vẫn không giao.",
          "keys": [
            "dữ liệu mật"
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
          "who": "hoa",
          "say": "Payroll stays with me. For the hard audit file, AI summarises first, then I analyse.",
          "sub": "Bảng lương chị giữ. Hồ sơ kiểm toán khó thì AI tóm tắt trước, chị tự phân tích sau.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Ask: can I check the result, and who is finally responsible?",
          "sub": "Hỏi: mình kiểm được kết quả không, và ai chịu trách nhiệm cuối cùng?",
          "phase": "redo",
          "keys": [
            "ai chịu trách nhiệm cuối cùng"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p9,p10"
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
          }
        ],
        "items": [
          {
            "id": "d-easyx",
            "t": "strike",
            "over": "d-easy",
            "at": "l1:feeling"
          },
          {
            "id": "d-rule",
            "t": "text",
            "text": "Chia theo: kiểm được? ai chịu?",
            "x": 5964,
            "y": 650,
            "size": 52,
            "at": "l1:checking",
            "color": "accent",
            "hl": [
              {
                "text": "ai chịu?",
                "at": "l1:responsibility"
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
          "say": "Sort by checking and responsibility, not by a feeling of easy or hard.",
          "sub": "Chia việc theo cách kiểm và trách nhiệm, không theo cảm giác dễ hay khó.",
          "keys": [
            "cách kiểm và trách nhiệm"
          ]
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s11",
      "module": "BRK-11",
      "data": {
        "title": "5 câu hỏi chấm mỗi việc",
        "items": [
          "Kiểm kết quả nhanh không?",
          "Lặp lại thường xuyên?",
          "Có khuôn mẫu rõ?",
          "Có dữ liệu mật?",
          "Sai thì ai chịu?"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Step three: five questions. Five: who's responsible?",
          "sub": "Bước ba: năm câu hỏi. Năm: sai thì ai chịu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Four: secret data?",
          "sub": "Bốn: có dữ liệu mật?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three: a pattern? Two: repeated?",
          "sub": "Ba: có khuôn? Hai: lặp lại?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One: can I check it fast?",
          "sub": "Một: kiểm nhanh được không?",
          "keys": [
            "kiểm nhanh"
          ]
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s12",
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
            "text": "Tuần 2 · Chấm từng việc",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Monday",
            "hl": [
              {
                "text": "Chấm",
                "at": "l1:scores"
              }
            ]
          },
          {
            "id": "e-a0",
            "t": "text",
            "text": "Định dạng bảng chi phí",
            "x": 7932,
            "y": 160,
            "size": 46,
            "at": "l2:cost table"
          },
          {
            "id": "e-s0",
            "t": "text",
            "text": "✓✓✓✓",
            "x": 8632,
            "y": 160,
            "size": 46,
            "at": "l2:cost table+400",
            "color": "accent"
          },
          {
            "id": "e-a1",
            "t": "text",
            "text": "Tóm tắt hồ sơ kiểm toán",
            "x": 7932,
            "y": 245,
            "size": 46,
            "at": "l2:Summarising"
          },
          {
            "id": "e-s1",
            "t": "text",
            "text": "✓✓✓",
            "x": 8632,
            "y": 245,
            "size": 46,
            "at": "l2:Summarising+400",
            "color": "accent"
          },
          {
            "id": "e-a2",
            "t": "text",
            "text": "Đối chiếu bảng lương",
            "x": 7932,
            "y": 330,
            "size": 46,
            "at": "l2:payroll"
          },
          {
            "id": "e-s2",
            "t": "text",
            "text": "✗ dữ liệu mật",
            "x": 8632,
            "y": 330,
            "size": 46,
            "at": "l2:payroll+400",
            "color": "coral"
          },
          {
            "id": "e-good",
            "t": "text",
            "text": "Lặp + khuôn + kiểm nhanh + không mật = thử",
            "x": 7932,
            "y": 430,
            "size": 40,
            "at": "l3:candidates",
            "hl": [
              {
                "text": "= thử",
                "at": "l3:try"
              }
            ]
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Câu “kiểm được” quan trọng nhất",
            "x": 7932,
            "y": 520,
            "size": 48,
            "at": "l4:matters most",
            "color": "accent",
            "hl": [
              {
                "text": "quan trọng nhất",
                "at": "l4:matters most"
              }
            ]
          },
          {
            "id": "e-flu",
            "t": "text",
            "text": "AI: trôi chảy ≠ chính xác",
            "x": 7932,
            "y": 600,
            "size": 44,
            "at": "l5:fluent"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: UNESCO, hướng dẫn AI tạo sinh (bản Việt 2025)",
            "x": 7932,
            "y": 670,
            "size": 24,
            "at": "l5",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "e-own",
            "t": "text",
            "text": "→ chọn việc trong chuyên môn của mình",
            "x": 8772,
            "y": 600,
            "size": 42,
            "at": "l6:own field",
            "hl": [
              {
                "text": "chuyên môn của mình",
                "at": "l6:own field"
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
          "say": "Monday of week two. Hoa scores each task.",
          "sub": "Thứ Hai tuần hai. Chị Hoa chấm từng việc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Formatting the cost table: four ticks. Summarising audit files: three. Payroll check: confidential, out.",
          "sub": "Định dạng bảng chi phí: bốn dấu tích. Tóm tắt hồ sơ kiểm toán: ba. Đối chiếu bảng lương: dữ liệu mật, loại."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Repeated, patterned, quick to check, no secrets: good candidates to try.",
          "sub": "Lặp lại, có khuôn, kiểm nhanh, không dữ liệu mật: ứng viên tốt để thử.",
          "keys": [
            "ứng viên tốt"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The checking question matters most.",
          "sub": "Câu hỏi về kiểm kết quả quan trọng nhất.",
          "keys": [
            "quan trọng nhất"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "UNESCO warns AI can sound fluent without being reliably accurate, and errors hide from people new to the topic.",
          "sub": "UNESCO nhắc: AI có thể trôi chảy mà không chính xác đáng tin, và lỗi khó thấy nếu người dùng chưa vững chủ đề.",
          "keys": [
            "chưa vững chủ đề"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "So pick tasks in your own field, where you can spot the mistakes.",
          "sub": "Vậy hãy chọn việc thuộc chuyên môn của mình, nơi bạn đủ sức nhận ra chỗ sai.",
          "keys": [
            "chuyên môn của mình"
          ]
        }
      ],
      "ref": "p11,p12"
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
            "at": "a1",
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
            "text": "Tuần 2 · Hai cách của chú Bình",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Same week"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "binh",
                  "side": "center"
                }
              ],
              "left": {
                "label": "A: AI soạn trọn, gửi luôn",
                "ok": false
              },
              "right": {
                "label": "B: tự soạn khung, AI so sánh",
                "ok": true
              }
            },
            "at": "l2",
            "caption": "Hợp đồng cho khách mới",
            "icon": "page-facing-up"
          },
          {
            "id": "f-a",
            "t": "text",
            "text": "A: khách hỏi lại → sửa gấp",
            "x": 60,
            "y": 1260,
            "size": 44,
            "at": "a2:asks",
            "color": "coral"
          },
          {
            "id": "f-b",
            "t": "text",
            "text": "B: chậm hơn, hiểu từng chữ",
            "x": 60,
            "y": 1350,
            "size": 44,
            "at": "b2:understand",
            "color": "accent",
            "hl": [
              {
                "text": "hiểu từng chữ",
                "at": "b2:every word"
              }
            ]
          },
          {
            "id": "f-nm",
            "t": "text",
            "text": "mẫu nội bộ đã bỏ tên khách",
            "x": 60,
            "y": 1430,
            "size": 38,
            "at": "b1:removed",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Same week. Chú Bình, head of legal, prepares a contract for a new client.",
          "sub": "Cùng tuần. Chú Bình, trưởng pháp chế, chuẩn bị hợp đồng cho một khách mới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two versions of chú Bình.",
          "sub": "Hai phiên bản của chú Bình."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "binh",
          "say": "Version A: AI drafts the whole contract, I send it straight to the client.",
          "sub": "Cách A: AI soạn trọn hợp đồng, gửi thẳng cho khách.",
          "phase": "a"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "binh",
          "say": "The client asks about a clause that doesn't fit this deal. Now I'm fixing it in a rush.",
          "sub": "Khách hỏi lại một điều khoản không hợp giao dịch. Giờ phải giải thích, sửa gấp.",
          "phase": "a",
          "face": "worried"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "binh",
          "say": "Version B: I draft the frame. AI compares it with our internal template, client name removed.",
          "sub": "Cách B: tự soạn khung. AI so bản nháp với mẫu nội bộ đã bỏ tên khách.",
          "phase": "b",
          "pose": "explain"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "binh",
          "say": "Then I read every clause myself. Slower, but I understand every word I send.",
          "sub": "Rồi tự đọc lại từng điều. Chậm hơn, nhưng hiểu từng chữ mình gửi đi.",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Give AI the part you can check. Keep the part you must sign.",
          "sub": "Giao cho AI phần mình kiểm được, giữ lại phần mình phải đứng tên.",
          "keys": [
            "phần mình phải đứng tên"
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
      "ref": "p13,p14"
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
            "id": "f-k",
            "t": "text",
            "text": "Kiểm được: giao · Ký tên: giữ",
            "x": 60,
            "y": 1790,
            "size": 48,
            "at": "l1:Check",
            "color": "accent",
            "hl": [
              {
                "text": "Ký tên: giữ",
                "at": "l1:Sign"
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
          "say": "Check what you give. Sign what you keep. A legal mind's favourite rule.",
          "sub": "Giao phần kiểm được, giữ phần đứng tên. Luật ruột của dân pháp chế.",
          "keys": [
            "giữ phần đứng tên"
          ]
        }
      ],
      "ref": "p14"
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
            "at": "l3",
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
            "text": "Tuần 2–3 · Thử nhỏ, đo, rồi mở",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Step four",
            "hl": [
              {
                "text": "đo",
                "at": "l2:measure"
              }
            ]
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 3008,
            "y": 1240,
            "w": 640,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "stopwatch",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
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
            "at": "l1:two",
            "caption": "Thử hai việc điểm cao",
            "icon": "stopwatch"
          },
          {
            "id": "g-23",
            "t": "text",
            "text": "2–3 việc điểm cao",
            "x": 2028,
            "y": 1250,
            "size": 56,
            "at": "l1:two",
            "color": "accent",
            "hl": [
              {
                "text": "2–3 việc",
                "at": "l1:three"
              }
            ]
          },
          {
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1360,
            "w": 44,
            "h": 44,
            "at": "l2:how long",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 1346,
            "size": 56,
            "at": "l2:how long+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "Mất bao lâu so với tự làm",
            "x": 2094,
            "y": 1350,
            "size": 42,
            "at": "l2:how long+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1440,
            "w": 44,
            "h": 44,
            "at": "l2:fixes",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 1426,
            "size": 56,
            "at": "l2:fixes+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "Phải sửa bao nhiêu chỗ",
            "x": 2094,
            "y": 1430,
            "size": 42,
            "at": "l2:fixes+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1520,
            "w": 44,
            "h": 44,
            "at": "l2:slipped",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 1506,
            "size": 56,
            "at": "l2:slipped+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "Lỗi nào suýt lọt",
            "x": 2094,
            "y": 1510,
            "size": 42,
            "at": "l2:slipped+200"
          },
          {
            "id": "g-ev",
            "t": "text",
            "text": "Bằng chứng của chính mình",
            "x": 2028,
            "y": 1650,
            "size": 50,
            "at": "l4:evidence",
            "color": "accent",
            "hl": [
              {
                "text": "của chính mình",
                "at": "l4:own evidence"
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
          "say": "Step four, weeks two and three. Pick two or three top-scoring tasks and try them for a few weeks.",
          "sub": "Bước bốn, tuần hai và ba. Chọn hai, ba việc điểm cao nhất, thử trong vài tuần.",
          "keys": [
            "hai, ba việc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Each time, measure: how long versus doing it yourself, how many fixes, which errors almost slipped through.",
          "sub": "Mỗi lần thử, ghi: mất bao lâu so với tự làm, sửa bao nhiêu chỗ, lỗi nào suýt lọt qua."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Cost table: faster. Audit summary: two wrong dates, caught by my red pen.",
          "sub": "Bảng chi phí: nhanh hơn. Tóm tắt kiểm toán: sai hai ngày tháng, bút đỏ bắt được.",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Now Hoa has her own evidence, not office gossip about AI being fast or slow.",
          "sub": "Giờ chị Hoa có bằng chứng của chính mình, chứ không nghe đồn AI nhanh hay chậm.",
          "keys": [
            "bằng chứng của chính mình"
          ]
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s16",
      "module": "BRK-07",
      "data": {
        "question": "Thử mà thua thì sao? Bỏ luôn à?",
        "illus": "thinking-face"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "But wait.",
          "sub": "Nhưng khoan."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "What if a test fails? Do you just quit?",
          "sub": "Thử mà thua thì sao? Bỏ luôn à?",
          "keys": [
            "Bỏ luôn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p16"
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
            "at": "l3",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "Tuần 3 · Thua cũng là dữ liệu",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Week three",
            "hl": [
              {
                "text": "dữ liệu",
                "at": "l6:data"
              }
            ]
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4976,
            "y": 1240,
            "w": 640,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "page-facing-up",
                "books"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Lan",
            "caption": "Tuần 3 · bàn biên dịch",
            "icon": "page-facing-up"
          },
          {
            "id": "h-sl",
            "t": "text",
            "text": "Sửa lâu hơn tự dịch",
            "x": 3996,
            "y": 1250,
            "size": 52,
            "at": "l2:longer",
            "color": "coral"
          },
          {
            "id": "h-qq",
            "t": "text",
            "text": "Bỏ hẳn?",
            "x": 3996,
            "y": 1340,
            "size": 56,
            "at": "l3:quit"
          },
          {
            "id": "h-qqx",
            "t": "strike",
            "over": "h-qq",
            "at": "l4:Not yet"
          },
          {
            "id": "h-g",
            "t": "text",
            "text": "+ bảng thuật ngữ quen dùng",
            "x": 3996,
            "y": 1430,
            "size": 44,
            "at": "l4:glossary",
            "color": "accent",
            "hl": [
              {
                "text": "bảng thuật ngữ",
                "at": "l4:glossary"
              }
            ]
          },
          {
            "id": "h-o",
            "t": "text",
            "text": "+ thử thư từ thông thường",
            "x": 3996,
            "y": 1500,
            "size": 44,
            "at": "l5:letters"
          },
          {
            "id": "h-n",
            "t": "text",
            "text": "Vẫn không lợi → ghi “tự dịch”",
            "x": 3996,
            "y": 1590,
            "size": 44,
            "at": "l5:still",
            "color": "muted"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Ghi lại vì sao",
            "x": 3996,
            "y": 1690,
            "size": 60,
            "at": "l6:why",
            "color": "accent",
            "hl": [
              {
                "text": "vì sao",
                "at": "l6:why"
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
          "say": "Week three. Meet Lan, the company's translator, quiet and careful.",
          "sub": "Tuần ba. Đây là Lan, biên dịch viên của công ty, nói nhỏ, làm kỹ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "AI roughly translated a house lease. Fixing the terms took longer than translating it myself.",
          "sub": "AI dịch thô hợp đồng thuê nhà. Sửa thuật ngữ còn lâu hơn tự dịch.",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Should I just quit using it?",
          "sub": "Hay em bỏ hẳn luôn?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not yet. Give the tool her usual glossary.",
          "sub": "Chưa nên bỏ. Đưa kèm bảng thuật ngữ quen dùng.",
          "keys": [
            "bảng thuật ngữ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Or try ordinary letters instead. Still no gain? Note it: this document type, translate yourself.",
          "sub": "Hoặc thử thư từ thông thường. Vẫn không lợi? Ghi rõ: loại tài liệu này nên tự dịch."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A failed test is still data, as long as you write down why.",
          "sub": "Thử không hiệu quả cũng là dữ liệu, miễn là ghi lại vì sao.",
          "keys": [
            "cũng là dữ liệu"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 700
        }
      ],
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
            "text": "Cuối tuần 3 · Thêm ba cột",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:three more",
            "hl": [
              {
                "text": "ba cột",
                "at": "l1:columns"
              }
            ]
          },
          {
            "id": "i-c",
            "t": "text",
            "text": "Nhóm việc · Mức giao · Ghi chú",
            "x": 5964,
            "y": 1250,
            "size": 52,
            "at": "l1:group",
            "color": "accent"
          },
          {
            "id": "i-b0",
            "t": "box",
            "x": 5964,
            "y": 1360,
            "w": 520,
            "h": 100,
            "at": "l2:drafts",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "AI làm nháp, tôi sửa",
            "x": 5989,
            "y": 1380,
            "size": 40,
            "at": "l2:drafts+200"
          },
          {
            "id": "i-b1",
            "t": "box",
            "x": 6524,
            "y": 1360,
            "w": 520,
            "h": 100,
            "at": "l2:part",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "AI hỗ trợ một phần",
            "x": 6549,
            "y": 1380,
            "size": 40,
            "at": "l2:part+200"
          },
          {
            "id": "i-b2",
            "t": "box",
            "x": 7084,
            "y": 1360,
            "w": 520,
            "h": 100,
            "at": "l2:myself",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Tôi tự làm",
            "x": 7109,
            "y": 1380,
            "size": 40,
            "at": "l2:myself+200"
          },
          {
            "id": "i-ch",
            "t": "text",
            "text": "Bảng đổi theo thời gian",
            "x": 5964,
            "y": 1510,
            "size": 46,
            "at": "l3:changes"
          },
          {
            "id": "i-oc",
            "t": "text",
            "text": "Luyện “kiểm soát đầu ra”",
            "x": 5964,
            "y": 1600,
            "size": 50,
            "at": "l4:output control",
            "color": "accent",
            "hl": [
              {
                "text": "kiểm soát đầu ra",
                "at": "l4:output control"
              }
            ]
          },
          {
            "id": "i-89",
            "t": "text",
            "text": "89,45% sẵn sàng học kỹ năng mới",
            "x": 5964,
            "y": 1690,
            "size": 44,
            "at": "l5:eighty"
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: Navigos 2026, Tuổi Trẻ dẫn 26/1/2026",
            "x": 5964,
            "y": 1760,
            "size": 24,
            "at": "l5",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "End of week three. The sheet grows three more columns: task group, AI level, and notes.",
          "sub": "Cuối tuần ba. Tờ bảng mọc thêm ba cột: nhóm việc, mức giao cho AI, ghi chú.",
          "keys": [
            "ba cột"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Levels: AI drafts and I fix. AI helps with part. Or I do it myself.",
          "sub": "Mức giao: “AI làm nháp, tôi sửa”, “AI hỗ trợ một phần”, hoặc “tôi tự làm”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The table changes as the tools and your skills change.",
          "sub": "Bảng này thay đổi khi công cụ và kỹ năng của bạn thay đổi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It also trains the skill Navigos says workers lack: output control.",
          "sub": "Nó còn luyện kỹ năng Navigos nói người lao động còn thiếu: kiểm soát đầu ra.",
          "keys": [
            "kiểm soát đầu ra"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And eighty-nine point four five percent of workers surveyed are ready to learn. This table starts from your own work.",
          "sub": "Mà 89,45% người lao động trong khảo sát sẵn sàng học. Bảng này là cách học từ chính việc của bạn.",
          "keys": [
            "89,45%"
          ]
        }
      ],
      "ref": "p18,p19"
    },
    {
      "id": "s19",
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
            "text": "Thứ Sáu tuần 3 · Tờ giấy ấy",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8912,
            "y": 1240,
            "w": 640,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "give",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "clipboard",
                "fountain-pen"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "at": "l1:sheet",
            "caption": "Năm cột thành tám cột",
            "icon": "clipboard"
          },
          {
            "id": "j-58",
            "t": "text",
            "text": "5 cột → 8 cột",
            "x": 7932,
            "y": 1250,
            "size": 72,
            "at": "l1:eight",
            "color": "accent",
            "hl": [
              {
                "text": "8 cột",
                "at": "l1:eight"
              }
            ]
          },
          {
            "id": "j-g",
            "t": "text",
            "text": "2 việc giao · 1 việc giữ",
            "x": 7932,
            "y": 1380,
            "size": 50,
            "at": "l2:two"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy”",
            "x": 7932,
            "y": 1510,
            "size": 56,
            "at": "l4:careful",
            "color": "accent",
            "hl": [
              {
                "text": "vô áy náy",
                "at": "l4:regrets"
              }
            ]
          },
          {
            "id": "j-nx",
            "t": "text",
            "text": "→ bài sau: kỹ năng khó thay",
            "x": 7932,
            "y": 1610,
            "size": 42,
            "at": "l5:next",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Friday of week three. Same sheet of paper, now eight columns instead of five.",
          "sub": "Thứ Sáu tuần ba. Vẫn tờ giấy ấy, năm cột giờ thành tám."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Two tasks go to AI as drafts. The payroll check stays with me.",
          "sub": "Hai việc giao AI làm nháp. Đối chiếu bảng lương chị giữ.",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Third, and finally: now you know exactly why.",
          "sub": "Thứ ba, và cuối cùng: giờ chị biết rõ vì sao.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Careful now, no regrets later. The sheet came before the tools.",
          "sub": "“Cẩn tắc vô áy náy.” Tờ giấy đi trước, công cụ theo sau.",
          "keys": [
            "Tờ giấy đi trước"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next question: which parts of your job stay hard to replace? That's our next video.",
          "sub": "Câu hỏi tiếp: phần nào trong nghề vẫn khó bị thay? Đó là bài tiếp theo.",
          "keys": [
            "khó bị thay"
          ]
        }
      ],
      "ref": "p20,outro"
    },
    {
      "id": "s20",
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
            "ms": 1200
          },
          {
            "at": "l1",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "E",
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
            "x": 4696,
            "y": 150,
            "at": "l1+400"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 7404,
            "y": 560,
            "at": "l2+400"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 9372,
            "y": 160,
            "at": "l3+400"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 2728,
            "y": 1650,
            "at": "l4+1400"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo; quy định dữ liệu tuỳ nơi làm việc. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1805,
            "size": 28,
            "at": "l4:end",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          }
        ]
      },
      "lines": [
        {
          "id": "l0",
          "lang": "en",
          "who": "det",
          "say": "Step back. Three weeks, one board.",
          "sub": "Lùi lại xem. Ba tuần, một tấm bảng."
        },
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: log your real week, right after each task.",
          "sub": "Tóm lại: ghi tuần làm việc thật, xong việc nào ghi ngay.",
          "keys": [
            "ghi ngay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sort by checking and responsibility, not easy or hard.",
          "sub": "Chia theo cách kiểm và trách nhiệm, không theo dễ khó.",
          "keys": [
            "cách kiểm và trách nhiệm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Score with five questions. Checking comes first.",
          "sub": "Chấm bằng năm câu hỏi, câu kiểm kết quả đứng đầu.",
          "keys": [
            "năm câu hỏi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Test small, measure, and write down why. Your turn: log the next five working days.",
          "sub": "Thử nhỏ, đo, ghi lại vì sao. Đến lượt bạn: ghi mọi việc trong năm ngày làm việc tới.",
          "keys": [
            "năm ngày làm việc tới"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s21",
      "module": "QUIZ-01",
      "data": {
        "q": "You score a task high on every question except sensitive data, what should you do?",
        "options": [
          "Leave it out or remove the sensitive data before trying it with AI",
          "Ask the AI tool whether the data is secret and trust its reply",
          "Try it anyway, because four good answers are always enough"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "locked",
        "why": "Việc điểm cao nhưng có dữ liệu mật thì bỏ ra, hoặc làm sạch dữ liệu trước khi thử."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You score a task high on every question except sensitive data, what should you do?",
          "sub": "Bạn chấm một việc cao ở mọi câu hỏi trừ dữ liệu mật, bạn nên làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Leave it out, or remove the sensitive data before trying it.",
          "sub": "Bỏ ra, hoặc gỡ dữ liệu mật trước khi thử."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Easy is not the same as safe.",
          "sub": "Dễ chưa chắc đã an toàn."
        }
      ],
      "ref": "questions[39]"
    },
    {
      "id": "s22",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi kẻ tờ bảng năm cột cho tuần tới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Draw your five-column sheet tonight, then pick the two best tasks to test.",
          "sub": "Tối nay kẻ tờ bảng năm cột, rồi chọn hai việc điểm cao nhất để thử."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then try the forty questions below.",
          "sub": "Rồi thử bốn mươi câu hỏi bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi experts-staying-relevant-with-ai, bài 1) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-23 (đồ vật kể chuyện): cận tờ bảng năm cột (p3, p4) → kéo ra thấy chị Hoa, Thảo; tờ giấy trở lại ở J (năm cột thành tám, p18). Dòng thời gian: BA TUẦN của chị Hoa (sáng thứ Hai tuần 1 → tuần 1 ghi ngay sau mỗi việc → chiều thứ Sáu chia ba nhóm + “Khoan đã!” dễ/khó p9 → thứ Hai tuần 2 chấm năm câu hỏi → tuần 2 chú Bình hai cách p13 → tuần 2–3 thử và đo p15 → tuần 3 Lan dịch thô p16 → cuối tuần 3 thêm ba cột → thứ Sáu tuần 3 cùng tờ giấy). Nhân vật theo w145/_series/experts-staying-relevant-with-ai.md: chị Hoa (chính), Thảo (= chị Thu p4, trưởng nhân sự), chú Bình (= anh Tuấn p13), Lan (= chị Lan p16, biên dịch). Chi tiết minh hoạ tự đặt, không phải số liệu: việc “định dạng bảng chi phí, 20 phút”, tóm tắt kiểm toán sai hai ngày tháng, dấu tích chấm điểm. Số chỉ từ bài: năm ngày, năm cột, ba nhóm, năm câu hỏi, 2–3 việc, ba cột thêm, 89,45%. Ngắt nhịp: BRK-06 s03 (tải công cụ p1), DLG-01 s09 (p9), BRK-11 s11 (năm câu hỏi p11), BRK-07 s16 (rehook). Cảnh A/B SCENE-03 trong khung ảnh s13. Tục ngữ: “Cẩn tắc vô áy náy”. Câu đố questions[39]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s00",
    "close": "s19"
  }
};
