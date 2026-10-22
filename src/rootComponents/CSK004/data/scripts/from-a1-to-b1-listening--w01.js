// from-a1-to-b1-listening--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "from-a1-to-b1-listening--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "beginner-listening-learners",
    "slug": "from-a1-to-b1-listening",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Khi nào chuyển từ bài nghe A1 lên B1?",
    "series": "Nghe được tiếng Anh từ chậm đến nhanh — cho người mới học bị 'đứng hình' khi nghe"
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
            "text": "12 bài",
            "x": 60,
            "y": 90,
            "size": 160,
            "at": "l1:Twelve",
            "color": "accent",
            "hl": [
              {
                "text": "12",
                "at": "l1:Twelve"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "mỗi cấp: A1 · A2 · B1",
            "x": 70,
            "y": 320,
            "size": 56,
            "at": "l1:level"
          },
          {
            "id": "a-f",
            "t": "text",
            "text": "chuẩn bị → nghe → 2 bài kiểm tra",
            "x": 70,
            "y": 420,
            "size": 46,
            "at": "l2:warm-up"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: British Council LearnEnglish — Listening; Cambridge English — Tips for listening",
            "x": 60,
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
          "say": "Twelve. That's how many listening lessons LearnEnglish lists at each level.",
          "sub": "Mười hai. Đó là số bài nghe LearnEnglish liệt kê ở mỗi cấp.",
          "keys": [
            "Mười hai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Each one has the same shape: a warm-up task, a recording, and two tasks to check you understood.",
          "sub": "Bài nào cũng một khuôn: bài tập chuẩn bị, một đoạn ghi âm, và hai bài tập kiểm tra hiểu.",
          "keys": [
            "một khuôn"
          ]
        }
      ],
      "ref": "p4"
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
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "headphone",
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
                }
              ]
            },
            "at": "l1",
            "caption": "Chủ nhật 21:00 · ở nhà",
            "icon": "headphone"
          },
          {
            "id": "a-th",
            "t": "text",
            "text": "12/12 bài A1: thuộc lòng",
            "x": 60,
            "y": 520,
            "size": 50,
            "at": "l2:heart",
            "color": "coral",
            "hl": [
              {
                "text": "thuộc lòng",
                "at": "l2:heart"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Đi đâu mà vội mà vàng…”",
            "x": 60,
            "y": 630,
            "size": 50,
            "at": "l4:hurry",
            "color": "accent",
            "hl": [
              {
                "text": "vội mà vàng",
                "at": "l4:hurry"
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
          "say": "Thảo, our import-export officer, has done all twelve A1 lessons.",
          "sub": "Thảo, cô nhân viên xuất nhập khẩu của chúng ta, đã làm hết mười hai bài A1."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I know all twelve by heart. Café, clothes, booking a table. But B1 still scares me.",
          "sub": "Thuộc lòng cả mười hai bài rồi. Quán cà phê, mua quần áo, đặt bàn. Mà B1 thì vẫn sợ.",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Stay too long, and A1 gets boring. Jump too high, and your ears freeze.",
          "sub": "Ở lâu thì A1 chán. Nhảy cao quá thì tai “đứng hình”.",
          "keys": [
            "đứng hình"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our elders warn: why hurry, why rush, only to trip on stones and tangle in vines?",
          "sub": "Ông bà dặn: “Đi đâu mà vội mà vàng, mà vấp phải đá mà quàng phải dây.”",
          "keys": [
            "Đi đâu mà vội mà vàng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Thảo has the opposite problem. She won't leave the house.",
          "sub": "Còn Thảo bị ngược lại: chẳng chịu ra khỏi nhà."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "intro,p7"
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
            "text": "Khi nào lên cấp?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:move up",
            "hl": [
              {
                "text": "lên cấp",
                "at": "l1:move up"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: đúng hết mới lên",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:perfect",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:most"
          },
          {
            "id": "b-y1",
            "t": "text",
            "text": "Mà là: làm được phần lớn bài",
            "x": 2028,
            "y": 255,
            "size": 50,
            "at": "l3:most",
            "color": "accent",
            "hl": [
              {
                "text": "phần lớn",
                "at": "l3:most"
              }
            ]
          },
          {
            "id": "b-y2",
            "t": "text",
            "text": "chưa cần mở transcript",
            "x": 2068,
            "y": 330,
            "size": 46,
            "at": "l3:transcript"
          },
          {
            "id": "b-y3",
            "t": "text",
            "text": "nghe lại bài cũ thấy dễ",
            "x": 2068,
            "y": 400,
            "size": 46,
            "at": "l3:easy"
          },
          {
            "id": "b-y4",
            "t": "text",
            "text": "A1 → A2 → B1",
            "x": 2928,
            "y": 255,
            "size": 64,
            "at": "l4:A2",
            "color": "accent",
            "hl": [
              {
                "text": "A2",
                "at": "l4:A2"
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
          "say": "So when do you move up a level?",
          "sub": "Vậy khi nào thì lên cấp?",
          "keys": [
            "lên cấp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not when everything is perfect.",
          "sub": "Không phải khi mọi thứ đã hoàn hảo."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But when you can do most lessons without the transcript, and old ones feel easy.",
          "sub": "Mà là khi làm được phần lớn bài chưa cần mở transcript, và nghe lại bài cũ thấy dễ.",
          "keys": [
            "phần lớn bài"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then try the next level. A2 first, then B1.",
          "sub": "Lúc đó thử cấp kế tiếp. A2 trước, rồi mới B1.",
          "keys": [
            "A2 trước"
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
          }
        ],
        "items": [
          {
            "id": "b-a1",
            "t": "text",
            "text": "A1: từ, cụm quen · nói chậm, rõ",
            "x": 2028,
            "y": 500,
            "size": 42,
            "at": "l1:slowly"
          },
          {
            "id": "b-a2",
            "t": "text",
            "text": "A2: giải thích, tin nhắn, thông báo",
            "x": 2028,
            "y": 570,
            "size": 42,
            "at": "l2:messages"
          },
          {
            "id": "b-b1",
            "t": "text",
            "text": "B1: ý chính · lời nói chuẩn",
            "x": 2028,
            "y": 640,
            "size": 42,
            "at": "l3:main points",
            "color": "accent",
            "hl": [
              {
                "text": "ý chính",
                "at": "l3:main points"
              }
            ]
          },
          {
            "id": "b-k",
            "t": "text",
            "text": "nhận ra từ → nắm ý chính",
            "x": 2928,
            "y": 640,
            "size": 44,
            "at": "l4:recognising",
            "hl": [
              {
                "text": "nắm ý chính",
                "at": "l4:main idea"
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
          "say": "LearnEnglish describes it clearly. A1: familiar words and basic phrases, spoken slowly and clearly.",
          "sub": "LearnEnglish mô tả khá rõ. A1: hiểu từ quen, cụm cơ bản khi người nói chậm và rõ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A2: simple explanations, introductions, messages and announcements.",
          "sub": "A2: lời giải thích đơn giản, giới thiệu, tin nhắn, thông báo."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "B1: the main points of clear, standard speech about daily life or work.",
          "sub": "B1: nắm ý chính của lời nói rõ ràng, chuẩn mực về đời sống hằng ngày hay công việc.",
          "keys": [
            "ý chính"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So the job changes, from recognising words to catching the main idea. B1 speakers don't slow down, but they stay clear.",
          "sub": "Vậy yêu cầu đổi từ nhận ra từ sang nắm ý chính. Người nói B1 không cố nói chậm nữa, nhưng vẫn rõ.",
          "keys": [
            "nắm ý chính"
          ]
        }
      ],
      "ref": "p1,p2"
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
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① CN 21:30 · Ba cấp",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "A1: gặp gỡ, mua sắm, chỗ làm",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l2:shopping"
          },
          {
            "id": "c-1b",
            "t": "text",
            "text": "gọi món · mua áo · đặt bàn",
            "x": 4036,
            "y": 240,
            "size": 40,
            "at": "l2:ordering",
            "color": "muted"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "A2: thông báo, tin nhắn",
            "x": 3996,
            "y": 320,
            "size": 46,
            "at": "l3:announcements"
          },
          {
            "id": "c-2b",
            "t": "text",
            "text": "đổi giờ họp",
            "x": 4036,
            "y": 390,
            "size": 40,
            "at": "l3:meeting time",
            "color": "muted"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "B1: điện thoại, họp, phỏng vấn",
            "x": 3996,
            "y": 470,
            "size": 46,
            "at": "l4:phone calls",
            "color": "accent"
          },
          {
            "id": "c-same",
            "t": "text",
            "text": "Cùng khuôn → so được mình",
            "x": 4896,
            "y": 170,
            "size": 50,
            "at": "l5:compare",
            "hl": [
              {
                "text": "so được",
                "at": "l5:compare"
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
          "say": "Stop one, Sunday, nine thirty p.m. Thảo opens the three levels side by side.",
          "sub": "Chặng một, chín rưỡi tối Chủ nhật. Thảo mở ba cấp ra xem cạnh nhau."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A1 is meeting people, shopping, chatting at work: ordering in a café, buying clothes, booking a table.",
          "sub": "A1 là gặp gỡ, mua sắm, trò chuyện ở chỗ làm: gọi món ở quán cà phê, mua quần áo, đặt bàn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A2 brings transport announcements, left messages, a change of meeting time.",
          "sub": "A2 có thông báo trên phương tiện giao thông, tin nhắn để lại, đổi giờ họp."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "B1 is phone calls, meetings and interviews.",
          "sub": "B1 là cuộc gọi điện thoại, cuộc họp, phỏng vấn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Same shape at every level, so you can compare how you do here and there.",
          "sub": "Khuôn bài giống nhau ở mọi cấp, nên bạn so được mình làm ở cấp này với cấp kia ra sao.",
          "keys": [
            "so được"
          ]
        }
      ],
      "ref": "p3,p4"
    },
    {
      "id": "s05",
      "module": "BRK-06",
      "data": {
        "title": "Bài nghe B1 trông thế nào?",
        "items": [
          {
            "illus": "telephone-receiver",
            "text": "Cuộc gọi"
          },
          {
            "illus": "busts-in-silhouette",
            "text": "Cuộc họp"
          },
          {
            "illus": "cloud-with-rain",
            "text": "Dự báo thời tiết"
          },
          {
            "illus": "woman-teacher",
            "text": "Mở đầu bài giảng"
          },
          {
            "illus": "radio",
            "text": "Phỏng vấn trên đài"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Calls, meetings, a weather forecast, a lecture intro, a radio interview.",
          "sub": "Cuộc gọi, cuộc họp, dự báo thời tiết, mở đầu bài giảng, phỏng vấn trên đài."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "That's B1 listening.",
          "sub": "Đó là bài nghe B1.",
          "keys": [
            "bài nghe B1"
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
            "at": 150,
            "fit": "D",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Hai · Ba dấu hiệu",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two",
            "hl": [
              {
                "text": "Ba dấu hiệu",
                "at": "l2:Sign"
              }
            ]
          },
          {
            "id": "d-0",
            "t": "text",
            "text": "Không có con số chính thức",
            "x": 5964,
            "y": 165,
            "size": 46,
            "at": "l1:official",
            "color": "muted"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "1. Làm được 2 bài kiểm tra",
            "x": 5964,
            "y": 250,
            "size": 48,
            "at": "l2:both"
          },
          {
            "id": "d-1b",
            "t": "text",
            "text": "ngay lượt đầu, chưa mở transcript",
            "x": 6004,
            "y": 320,
            "size": 40,
            "at": "l2:first listen"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "2. Nghe lại bài cũ: dễ hẳn",
            "x": 5964,
            "y": 400,
            "size": 48,
            "at": "l3:easier"
          },
          {
            "id": "d-2b",
            "t": "text",
            "text": "Nation: lặp lại thì dễ dần",
            "x": 6004,
            "y": 470,
            "size": 40,
            "at": "l3:Nation"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "3. Nắm ý chính, sót vài từ",
            "x": 5964,
            "y": 550,
            "size": 48,
            "at": "l4:main idea",
            "hl": [
              {
                "text": "ý chính",
                "at": "l4:main idea"
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
          "say": "Stop two, Monday. There's no official number for this, but the lesson format gives practical signs.",
          "sub": "Chặng hai, thứ Hai. Không có con số chính thức nào, nhưng khuôn bài gợi ý cách tự đo khá thực tế.",
          "keys": [
            "Không có con số chính thức"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sign one: you do both tasks for most lessons right after the first listen, without opening the transcript.",
          "sub": "Dấu hiệu một: làm được hai bài tập kiểm tra của phần lớn bài ngay sau lượt nghe đầu, chưa cần mở transcript.",
          "keys": [
            "Dấu hiệu một"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sign two: an old lesson you studied now feels much easier. Nation notes repeated material gets easier.",
          "sub": "Dấu hiệu hai: nghe lại bài đã học kỹ thấy dễ hẳn. Nation nhận xét chất liệu được lặp lại sẽ dễ dần."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sign three: you get the main idea, even with a few words missing. Cambridge says that's usually enough.",
          "sub": "Dấu hiệu ba: nắm được ý chính dù còn vài từ không nghe ra. Cambridge nói vậy thường là đủ.",
          "keys": [
            "nắm được ý chính"
          ]
        }
      ],
      "ref": "p5,p6"
    },
    {
      "id": "s07",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Thứ Hai 21:00 · ở nhà",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đúng hết bài cũ mới được lên",
          "why": "Thuộc bài rồi thì chỉ đang nhớ lời, không còn luyện tai. Thử vài bài A2 mới biết tai ở đâu.",
          "rule": "Phần lớn bài + ý chính là đủ để thử"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "One more round of all twelve A1 lessons. When I get every answer right, I'll move up.",
          "sub": "Thêm một vòng mười hai bài A1. Bao giờ đúng hết mọi câu thì mình lên.",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I already know what they say before they say it.",
          "sub": "Mình biết người ta nói gì trước cả khi họ nói.",
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
          "say": "Then you're remembering the words, not training your ears.",
          "sub": "Vậy là đang nhớ lời, chứ đâu còn luyện tai.",
          "keys": [
            "nhớ lời"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Lần nữa nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Two new A2 lessons this week. Let's see where my ears really are.",
          "sub": "Tuần này thử hai bài A2 mới. Xem tai mình thật sự ở đâu.",
          "phase": "redo",
          "face": "happy"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p7"
    },
    {
      "id": "s08",
      "module": "BRK-11",
      "data": {
        "title": "3 dấu hiệu sẵn sàng",
        "items": [
          "Làm được phần lớn bài",
          "Bài cũ nghe dễ hẳn",
          "Nắm ý chính là đủ"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Three: main idea is enough.",
          "sub": "Ba: nắm ý chính là đủ."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Two: old lessons feel easy.",
          "sub": "Hai: bài cũ nghe dễ hẳn."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "One: most lessons, no transcript. Not memorised by heart.",
          "sub": "Một: làm được phần lớn bài, chưa cần transcript. Không cần thuộc lòng.",
          "keys": [
            "Không cần thuộc lòng"
          ]
        }
      ],
      "ref": "p5,p6,p8"
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
            "at": "l3",
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
            "text": "③ Thứ Ba · Nhảy cóc?",
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
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "shrug",
                  "face": "sad"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "headphone",
                "laptop"
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
            "at": "l2:Dũng",
            "caption": "Thứ Ba 12:00 · văn phòng",
            "icon": "laptop"
          },
          {
            "id": "e-d",
            "t": "text",
            "text": "Dũng: A1 → B1",
            "x": 7932,
            "y": 170,
            "size": 56,
            "at": "l3:straight",
            "color": "coral"
          },
          {
            "id": "e-d2",
            "t": "text",
            "text": "transcript gần như mọi câu",
            "x": 7972,
            "y": 260,
            "size": 44,
            "at": "l3:transcript"
          },
          {
            "id": "e-d3",
            "t": "text",
            "text": "→ bỏ dở sau vài buổi",
            "x": 7972,
            "y": 330,
            "size": 44,
            "at": "l3:quit",
            "color": "coral"
          },
          {
            "id": "e-t1",
            "t": "text",
            "text": "Thảo: A1 → A2 → B1",
            "x": 7932,
            "y": 430,
            "size": 56,
            "at": "l5:through",
            "color": "accent"
          },
          {
            "id": "e-t2",
            "t": "text",
            "text": "khó hơn, vẫn theo được ý chính",
            "x": 7972,
            "y": 520,
            "size": 40,
            "at": "l5:main idea",
            "hl": [
              {
                "text": "vẫn theo được",
                "at": "l5:still"
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
          "say": "Stop three, Tuesday lunch.",
          "sub": "Chặng ba, trưa thứ Ba."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Dũng, from the next desk, has a story. Of course he does.",
          "sub": "Dũng, bàn bên, có chuyện kể. Tất nhiên rồi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Last month I went straight from A1 to B1. Weather forecast, radio interview... I opened the transcript every line, then quit.",
          "sub": "Tháng trước em nhảy thẳng A1 lên B1. Dự báo thời tiết, phỏng vấn trên đài… câu nào cũng phải mở transcript, rồi bỏ.",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "So I'll do A2 first. Messages, announcements, short explanations.",
          "sub": "Vậy chị đi qua A2 trước. Tin nhắn, thông báo, lời giải thích ngắn.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Going through A2, B1 will feel harder, but she'll still follow the main idea.",
          "sub": "Đi qua A2 thì sang B1 vẫn thấy khó hơn, nhưng vẫn theo được ý chính.",
          "keys": [
            "vẫn theo được ý chính"
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
            "fit": "E",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "e-ca",
            "t": "text",
            "text": "“… vấp phải đá, quàng phải dây”",
            "x": 7932,
            "y": 610,
            "size": 44,
            "at": "l1:stones",
            "color": "accent",
            "hl": [
              {
                "text": "vấp phải đá",
                "at": "l1:tripped"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Từng bậc → tránh cú sốc",
            "x": 8772,
            "y": 690,
            "size": 46,
            "at": "l2:shock",
            "color": "accent",
            "hl": [
              {
                "text": "tránh cú sốc",
                "at": "l2:shock"
              }
            ]
          },
          {
            "id": "e-new",
            "t": "text",
            "text": "Cấp mới: nghe kỹ, kèm chữ",
            "x": 7932,
            "y": 700,
            "size": 36,
            "at": "l3:close listening",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Dũng rushed, tripped on stones and tangled in vines.",
          "sub": "Dũng vội vàng, nên “vấp phải đá mà quàng phải dây”.",
          "keys": [
            "vấp phải đá"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: level by level, speed and length grow gradually, with no shock to make you quit.",
          "sub": "Rút ra: đi từng cấp, tốc độ và độ dài tăng dần, tránh cú sốc khiến mình bỏ cuộc.",
          "keys": [
            "tránh cú sốc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "New level? Use the four-step close listening again, with text more often. Harder is normal. The signs come back in a few weeks.",
          "sub": "Mới sang cấp mới? Dùng lại quy trình nghe kỹ bốn bước, nghe kèm chữ nhiều hơn. Khó hơn là bình thường; vài tuần sau các dấu hiệu sẽ lại xuất hiện."
        }
      ],
      "ref": "p10,p11"
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
            "text": "④ Thứ Tư · Tự kiểm trình độ",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "LearnEnglish: kiểm tra miễn phí",
            "x": 60,
            "y": 1260,
            "size": 50,
            "at": "l2:free",
            "hl": [
              {
                "text": "miễn phí",
                "at": "l2:free"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "+ trang giải thích CEFR A1 – C2",
            "x": 100,
            "y": 1340,
            "size": 44,
            "at": "l2:CEFR"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "cần đăng nhập / đăng ký",
            "x": 100,
            "y": 1410,
            "size": 44,
            "at": "l2:register",
            "color": "muted"
          },
          {
            "id": "f-r",
            "t": "text",
            "text": "Kết quả = mốc tham chiếu",
            "x": 60,
            "y": 1510,
            "size": 54,
            "at": "l3:reference",
            "color": "accent",
            "hl": [
              {
                "text": "mốc tham chiếu",
                "at": "l3:reference"
              }
            ]
          },
          {
            "id": "f-e",
            "t": "text",
            "text": "Bằng chứng: bài nghe đúng cấp",
            "x": 60,
            "y": 1600,
            "size": 40,
            "at": "l4:evidence"
          },
          {
            "id": "f-s",
            "t": "text",
            "text": "Chi tiết: chuỗi “Biết mình ở đâu, đi tới đâu”",
            "x": 60,
            "y": 1780,
            "size": 30,
            "at": "l5:series",
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
          "say": "Stop four, Wednesday. A second opinion for Thảo's ears.",
          "sub": "Chặng bốn, thứ Tư. Xin thêm “ý kiến thứ hai” cho đôi tai của Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "LearnEnglish has a free level test, with a page on CEFR levels from A1 to C2. You need to log in or register.",
          "sub": "LearnEnglish có bài kiểm tra trình độ miễn phí, kèm trang giải thích các bậc CEFR từ A1 đến C2; cần đăng nhập hoặc đăng ký.",
          "keys": [
            "miễn phí"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The result is a reference point, to compare with how listening feels to you.",
          "sub": "Kết quả là một mốc tham chiếu, để so với cảm nhận của chính mình khi nghe.",
          "keys": [
            "mốc tham chiếu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The daily evidence is how you do on lessons at your level.",
          "sub": "Còn bằng chứng hằng ngày là bạn làm bài nghe đúng cấp thế nào."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "How to take it and read the result? See the series on knowing where you are.",
          "sub": "Làm bài và đọc kết quả thế nào? Xem bài riêng trong chuỗi “Biết mình ở đâu, đi tới đâu”."
        }
      ],
      "ref": "p12,p13"
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
          },
          {
            "at": "l6",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Năm · Thi khác đời thật",
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
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "laptop",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-05",
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
            "at": "l3:Sam",
            "caption": "Thứ Năm 15:00 · gọi Sam",
            "icon": "page-facing-up"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Phòng thi: nghe 1 – 2 lần",
            "x": 2028,
            "y": 1260,
            "size": 48,
            "at": "l2:once"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Đời thật: được hỏi lại",
            "x": 2028,
            "y": 1340,
            "size": 48,
            "at": "l2:ask",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi lại",
                "at": "l2:ask"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "“And which office is that again?”",
            "x": 2028,
            "y": 1450,
            "size": 42,
            "at": "l5:again",
            "color": "accent",
            "hl": [
              {
                "text": "which office",
                "at": "l5:which office"
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
          "say": "Stop five, Thursday. A university teacher in a B1 LearnEnglish lesson points out a big difference.",
          "sub": "Chặng năm, thứ Năm. Một giáo viên đại học trong bài nghe B1 của LearnEnglish chỉ ra một khác biệt lớn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In an exam you hear the recording once or twice. In real life, you can ask the speaker again.",
          "sub": "Trong phòng thi bạn chỉ nghe một hoặc hai lần; ngoài đời, bạn có thể xin người nói nhắc lại.",
          "keys": [
            "xin người nói nhắc lại"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three p.m. Thảo calls Sam, the partner from the Monday meetings, about some customs papers.",
          "sub": "Ba giờ chiều. Thảo gọi Sam, đối tác trong các cuộc họp thứ Hai, về mấy giấy tờ hải quan."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "Send the originals to the regional office, the one near the port, before Friday.",
          "sub": "Gửi bản gốc tới văn phòng khu vực, cái gần cảng ấy, trước thứ Sáu nhé.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Okay, the regional office near the port. And which office is that again?",
          "sub": "Vâng, văn phòng khu vực gần cảng. Mà văn phòng nào ấy nhỉ, chị nói lại giúp em?",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "sam",
          "say": "Good question. The customs office, right next to the main gate.",
          "sub": "Hỏi hay đấy. Văn phòng hải quan, ngay cạnh cổng chính.",
          "face": "happy"
        }
      ],
      "ref": "p14,p15"
    },
    {
      "id": "s13",
      "module": "BRK-10",
      "data": {
        "quote": "Tóm lại điều mình nghĩ đã nghe, rồi biến nó thành câu hỏi",
        "mark": "biến nó thành câu hỏi",
        "by": "Giáo viên trong bài nghe B1, LearnEnglish",
        "illus": "speech-balloon"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Sum up what you think you heard, and turn it into a question.",
          "sub": "Tóm lại điều mình nghĩ đã nghe, rồi biến nó thành câu hỏi.",
          "keys": [
            "thành câu hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "That's the teacher's advice.",
          "sub": "Lời khuyên của người giáo viên ấy."
        }
      ],
      "ref": "p15"
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
            "id": "g-p",
            "t": "text",
            "text": "Giả vờ hiểu, vội kết thúc",
            "x": 2028,
            "y": 1560,
            "size": 46,
            "at": "l1:pretending",
            "color": "muted"
          },
          {
            "id": "g-px",
            "t": "strike",
            "over": "g-p",
            "at": "l1:bank"
          },
          {
            "id": "g-p2",
            "t": "text",
            "text": "→ hỏng ở ngân hàng, cơ quan",
            "x": 2068,
            "y": 1635,
            "size": 40,
            "at": "l1:government"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Đừng giả vờ: hỏi lại ngắn",
            "x": 2028,
            "y": 1730,
            "size": 50,
            "at": "l2:pretend",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi lại ngắn",
                "at": "l2:short"
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
          "say": "Pretending to understand and rushing off is common. But not at a bank, or a government office.",
          "sub": "Giả vờ hiểu rồi vội kết thúc là cách phổ biến, nhưng không ổn ở ngân hàng hay cơ quan nhà nước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: out in the world, don't pretend. Ask again with a short summary question.",
          "sub": "Rút ra: ngoài đời, đừng giả vờ hiểu; hãy hỏi lại bằng một câu tóm tắt ngắn.",
          "keys": [
            "đừng giả vờ hiểu"
          ]
        }
      ],
      "ref": "p15,p16"
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Sáu · Mẹo phòng thi",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l2:instructions",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1242,
            "size": 56,
            "at": "l2:instructions+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Đọc, nghe kỹ hướng dẫn",
            "x": 4061,
            "y": 1252,
            "size": 44,
            "at": "l2:instructions+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1340,
            "w": 44,
            "h": 44,
            "at": "l2:underline",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1322,
            "size": 56,
            "at": "l2:underline+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Gạch chân danh từ, động từ",
            "x": 4061,
            "y": 1332,
            "size": 44,
            "at": "l2:underline+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1420,
            "w": 44,
            "h": 44,
            "at": "l3:example",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1402,
            "size": 56,
            "at": "l3:example+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Nghe kỹ ví dụ đầu phần",
            "x": 4061,
            "y": 1412,
            "size": 44,
            "at": "l3:example+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1500,
            "w": 44,
            "h": 44,
            "at": "l3:predict",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1482,
            "size": 56,
            "at": "l3:predict+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Đoán: tên? số? nơi chốn?",
            "x": 4061,
            "y": 1492,
            "size": 44,
            "at": "l3:predict+200"
          },
          {
            "id": "h-c4",
            "t": "box",
            "x": 3996,
            "y": 1580,
            "w": 44,
            "h": 44,
            "at": "l4:forget",
            "stroke": 5
          },
          {
            "id": "h-k4",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1562,
            "size": 56,
            "at": "l4:forget+600",
            "color": "accent"
          },
          {
            "id": "h-l4",
            "t": "text",
            "text": "Câu mới: quên câu trước",
            "x": 4061,
            "y": 1572,
            "size": 44,
            "at": "l4:forget+200"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: Cambridge English — Tips for listening",
            "x": 3996,
            "y": 1690,
            "size": 28,
            "at": "l2",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "h-x",
            "t": "text",
            "text": "Vững B1 + có kỳ thi:",
            "x": 4896,
            "y": 1260,
            "size": 48,
            "at": "l5:steady"
          },
          {
            "id": "h-x1",
            "t": "text",
            "text": "A2 Key · B1 Preliminary",
            "x": 4936,
            "y": 1340,
            "size": 42,
            "at": "l5:Key"
          },
          {
            "id": "h-x2",
            "t": "text",
            "text": "TOEIC · IELTS · VSTEP",
            "x": 4936,
            "y": 1410,
            "size": 42,
            "at": "l5:TOEIC",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, Friday. And for the exam room?",
          "sub": "Chặng sáu, thứ Sáu. Còn trong phòng thi thì sao?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Cambridge English: read and hear the instructions carefully. Underline key words, usually nouns and verbs.",
          "sub": "Cambridge English khuyên: đọc và nghe kỹ hướng dẫn, gạch chân từ khoá trong câu hỏi, thường là danh từ và động từ.",
          "keys": [
            "gạch chân từ khoá"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Listen to the example at the start of each part. Predict answers: names, numbers, places.",
          "sub": "Nghe ví dụ ở đầu mỗi phần. Đoán trước đáp án: tên, số, nơi chốn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And on a new question, forget the last one. Water under the bridge.",
          "sub": "Và sang câu mới thì quên câu trước. Nước chảy qua cầu rồi.",
          "keys": [
            "quên câu trước"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Steady at B1 with an exam in mind? Move on to exam series: A2 Key, B1 Preliminary, TOEIC, IELTS, VSTEP.",
          "sub": "Đã vững B1 và có kỳ thi cụ thể? Chuyển sang các chuỗi luyện nghe theo kỳ thi: A2 Key, B1 Preliminary, TOEIC, IELTS, VSTEP."
        }
      ],
      "ref": "p17,p18"
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
            "text": "Tuần thử A2 · 15 phút/ngày",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:trial week",
            "hl": [
              {
                "text": "15 phút/ngày",
                "at": "l1:fifteen"
              }
            ]
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l2:Monday",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1242,
            "size": 56,
            "at": "l2:Monday+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "T2, T4: bài A2 mới, 4 bước",
            "x": 6029,
            "y": 1252,
            "size": 40,
            "at": "l2:Monday+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1345,
            "w": 44,
            "h": 44,
            "at": "l3:Tuesday",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1327,
            "size": 56,
            "at": "l3:Tuesday+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "T3, T5: bài A1 cũ, không chữ",
            "x": 6029,
            "y": 1337,
            "size": 40,
            "at": "l3:Tuesday+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1430,
            "w": 44,
            "h": 44,
            "at": "l4:Friday",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1412,
            "size": 56,
            "at": "l4:Friday+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "T6: nhại 3 câu khó",
            "x": 6029,
            "y": 1422,
            "size": 40,
            "at": "l4:Friday+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1515,
            "w": 44,
            "h": 44,
            "at": "l4:weekend",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1497,
            "size": 56,
            "at": "l4:weekend+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Cuối tuần: bài dễ, chủ đề thích",
            "x": 6029,
            "y": 1507,
            "size": 40,
            "at": "l4:weekend+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Looking back, this was Thảo's trial week of A2, about fifteen minutes a day.",
          "sub": "Nhìn lại, đó là tuần thử A2 của Thảo, mỗi ngày khoảng mười lăm phút.",
          "keys": [
            "tuần thử A2"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Monday and Wednesday: a new A2 lesson, close listening in four steps.",
          "sub": "Thứ Hai, thứ Tư: nghe kỹ một bài A2 mới theo quy trình bốn bước."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Tuesday and Thursday: an old A1 lesson without text, to keep her confidence.",
          "sub": "Thứ Ba, thứ Năm: nghe lại một bài A1 cũ không nhìn chữ, để giữ tự tin."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Friday: copy three hard lines from the week. The weekend: something easy on a topic she likes.",
          "sub": "Thứ Sáu: nhại lại ba câu khó trong tuần. Cuối tuần: một đoạn dễ theo chủ đề mình thích."
        }
      ],
      "ref": "p19"
    },
    {
      "id": "s17",
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
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6904,
            "y": 1260,
            "w": 640,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "headphone",
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
                }
              ]
            },
            "at": "l1:Sunday",
            "caption": "Chủ nhật sau 21:00 · cùng chỗ ấy",
            "icon": "headphone"
          },
          {
            "id": "i-c",
            "t": "text",
            "text": "Đếm: bài A2 làm được, chưa transcript",
            "x": 5964,
            "y": 1610,
            "size": 40,
            "at": "l2:count",
            "color": "accent",
            "hl": [
              {
                "text": "chưa transcript",
                "at": "l2:transcript"
              }
            ]
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "Không vội, không đứng yên",
            "x": 5964,
            "y": 1690,
            "size": 50,
            "at": "l4:hurry",
            "hl": [
              {
                "text": "không đứng yên",
                "at": "l4:stand"
              }
            ]
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Thử 1 tuần → dựa kết quả thật",
            "x": 5964,
            "y": 1780,
            "size": 44,
            "at": "l5:decide",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Next Sunday, nine p.m. Same sofa, same headphones.",
          "sub": "Chủ nhật tuần sau, chín giờ tối. Vẫn ghế ấy, vẫn tai nghe ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Let me count the A2 tasks I did without the transcript. Most of them!",
          "sub": "Để đếm số bài tập A2 làm được mà chưa cần transcript nào. Phần lớn luôn!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Why hurry, why rush? Dũng tripped on the stones.",
          "sub": "“Đi đâu mà vội mà vàng”? Dũng đã vấp đá rồi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Thảo didn't hurry. But she didn't stand still either. One step at a time.",
          "sub": "Thảo không vội, nhưng cũng không đứng yên. Đi từng bậc một.",
          "keys": [
            "không đứng yên"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: try a new level for a week, mix new and familiar lessons, then decide on real results.",
          "sub": "Rút ra: thử cấp mới theo tuần, xen bài mới với bài quen, rồi dựa vào kết quả thật để quyết định.",
          "keys": [
            "kết quả thật"
          ]
        }
      ],
      "ref": "p19,p20"
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
            "at": "l1:end",
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
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tóm lại: từng bậc một",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:perfect"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Làm ngay: 2 bài A2 mới",
            "x": 7932,
            "y": 1290,
            "size": 52,
            "at": "l5:two",
            "hl": [
              {
                "text": "2 bài A2",
                "at": "l5:two"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "thử ngay trong tuần này",
            "x": 7972,
            "y": 1370,
            "size": 46,
            "at": "l5:week"
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Xem lại cả chuỗi: bài tổng",
            "x": 7932,
            "y": 1470,
            "size": 50,
            "at": "l6:overview",
            "color": "accent"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 6664,
            "y": 250,
            "at": "l2:main idea"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8632,
            "y": 430,
            "at": "l3:A2"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2728,
            "y": 1340,
            "at": "l4:ask"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi học; nội dung trang nguồn có thể thay đổi — điều chỉnh theo trình độ và thời gian của mình. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1810,
            "size": 28,
            "at": "l6:end",
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
          "say": "So, moving up a level doesn't wait for perfect. It waits for a few clear signs.",
          "sub": "Tóm lại, lên cấp không cần chờ hoàn hảo, chỉ cần chờ vài dấu hiệu rõ ràng.",
          "keys": [
            "không cần chờ hoàn hảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Do most lessons, catch the main idea, and try the next level.",
          "sub": "Làm được phần lớn bài, nắm được ý chính là lúc thử cấp kế tiếp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Go through A2 before B1.",
          "sub": "Đi qua A2 rồi mới tới B1."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And in real life, don't pretend. Ask again.",
          "sub": "Và ngoài đời, đừng giả vờ hiểu. Hỏi lại."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: pick two new A2 lessons, and try them this week.",
          "sub": "Làm ngay: chọn hai bài A2 mới và thử trong tuần này.",
          "keys": [
            "hai bài A2 mới"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Want the whole journey again? Go back to the series overview.",
          "sub": "Muốn xem lại cả hành trình? Quay về bài tổng của chuỗi.",
          "keys": [
            "bài tổng"
          ]
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
        "q": "What is the first sign that you may be ready for the next level?",
        "options": [
          "You have listened to background audio for many months without stopping",
          "You complete both tasks for most lessons after one listen without a transcript",
          "You have memorised every word of every lesson at your current level"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "ladder",
        "why": "Dấu hiệu thứ nhất là làm được hai bài tập của phần lớn bài ngay sau lượt nghe đầu. Bạn chưa cần mở transcript."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What is the first sign that you may be ready for the next level?",
          "sub": "Dấu hiệu đầu tiên cho thấy bạn có thể sẵn sàng lên cấp là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "You complete both tasks for most lessons after one listen without a transcript.",
          "sub": "Làm được hai bài kiểm tra của phần lớn bài sau lượt nghe đầu, chưa cần transcript."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Not every answer, and not by heart.",
          "sub": "Không cần đúng hết, cũng chẳng cần thuộc lòng."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[10]"
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
          "say": "Two A2 lessons this week, one step up. Then try the forty questions below.",
          "sub": "Tuần này hai bài A2, lên một bậc. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144. Hook HOOK-24: vật neo con số “12 bài mỗi cấp” (LearnEnglish) → Thảo thuộc lòng 12 bài A1 mà vẫn sợ B1 → “Vậy khi nào lên cấp?”. Dòng thời gian: TUẦN THỬ A2 của Thảo (Chủ nhật 21:00 → CN 21:30 ba cấp → Thứ Hai ba dấu hiệu + “Khoan đã!” thuộc lòng → Thứ Ba Dũng kể nhảy cóc A1 → B1 → Thứ Tư bài kiểm tra trình độ → Thứ Năm 15:00 gọi Sam, hỏi lại “And which office is that again?” → Thứ Sáu mẹo phòng thi → Chủ nhật sau 21:00 khép vòng, đếm bài A2). Nhân vật: Thảo (gộp Phương p7, Nhung p9, Hiền p19), Dũng (Khoa p9), Sam. Ca dao: “Đi đâu mà vội mà vàng, mà vấp phải đá mà quàng phải dây”. Cảnh ngắt nhịp: BRK-06 (bài B1), BRK-11 (3 dấu hiệu), BRK-10 (lời khuyên hỏi lại). Lời Sam ở cảnh gọi điện là minh hoạ (không có trong bài). Câu đố questions[10].",
  "loop": {
    "open": "s01",
    "close": "s17"
  }
};
