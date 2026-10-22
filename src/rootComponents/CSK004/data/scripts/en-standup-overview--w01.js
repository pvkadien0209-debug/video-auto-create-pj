// en-standup-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "en-standup-overview--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "en-dev-daily-standup",
    "slug": "en-standup-overview",
    "door": "ky-nang",
    "level": "B1",
    "title": "Daily stand-up bằng tiếng Anh: nói gì, nói bao lâu?",
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
            "id": "a-num",
            "t": "text",
            "text": "15 phút",
            "x": 60,
            "y": 90,
            "size": 150,
            "at": "l1:fifteen",
            "color": "accent",
            "hl": [
              {
                "text": "15 phút",
                "at": "l1:minutes"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "Daily Scrum · cả nhóm Developers",
            "x": 70,
            "y": 300,
            "size": 52,
            "at": "l1:Daily Scrum"
          },
          {
            "id": "a-1m",
            "t": "text",
            "text": "→ lượt của bạn: 60 giây rõ ràng",
            "x": 70,
            "y": 390,
            "size": 48,
            "at": "l2:one",
            "hl": [
              {
                "text": "60 giây rõ ràng",
                "at": "l2:clear"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: Ken Schwaber, Jeff Sutherland — The 2020 Scrum Guide",
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
          "say": "Fifteen minutes. That is the whole Daily Scrum, says the Scrum Guide.",
          "sub": "Mười lăm phút. Theo Scrum Guide, đó là trọn một buổi Daily Scrum.",
          "keys": [
            "Mười lăm phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And your own turn? This series aims for one clear minute.",
          "sub": "Còn lượt của bạn? Chuỗi bài này nhắm tới: một phút rõ ràng.",
          "keys": [
            "một phút rõ ràng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One minute. In English. With the client listening.",
          "sub": "Một phút. Bằng tiếng Anh. Có khách hàng ngồi nghe."
        }
      ],
      "beats": {
        "after": 200
      },
      "ref": "intro,p1"
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
            "at": "l4",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
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
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "laptop"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai 9:00 · stand-up trực tuyến",
            "icon": "laptop"
          },
          {
            "id": "a-same",
            "t": "text",
            "text": "“Same as yesterday.”",
            "x": 60,
            "y": 500,
            "size": 58,
            "at": "l4:Same",
            "color": "coral",
            "hl": [
              {
                "text": "Same as yesterday",
                "at": "l5:blank"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Ăn có nhai, nói có nghĩ”",
            "x": 60,
            "y": 620,
            "size": 54,
            "at": "l6:chew",
            "color": "accent",
            "hl": [
              {
                "text": "nói có nghĩ",
                "at": "l6:think"
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
          "say": "Meet Dũng, a backend developer in Hà Nội, on a project for an Australian client.",
          "sub": "Đây là Dũng, lập trình viên backend ở Hà Nội, làm dự án cho khách hàng Úc.",
          "keys": [
            "lập trình viên backend"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "His code runs like a train. His English, at nine a.m., not so much.",
          "sub": "Code chạy như tàu hoả. Còn tiếng Anh lúc chín giờ sáng thì… chưa chắc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Monday, nine o'clock. The stand-up call. Sam, the Product Owner in Australia, is waiting.",
          "sub": "Thứ Hai, chín giờ. Cuộc gọi stand-up. Chị Sam, Product Owner ở Úc, đang chờ.",
          "keys": [
            "Product Owner"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Uh, same as yesterday.",
          "sub": "Ờ… vẫn như hôm qua.",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "His mind went blank, and the safest sentence jumped out.",
          "sub": "Đầu óc trống trơn, thế là câu an toàn nhất tự bật ra.",
          "keys": [
            "trống trơn"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Grandma would say: chew before you eat, think before you speak.",
          "sub": "Ông bà dặn: “Ăn có nhai, nói có nghĩ.”",
          "keys": [
            "Ăn có nhai, nói có nghĩ"
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
            "text": "Stand-up thật ra để làm gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:really",
            "hl": [
              {
                "text": "để làm gì",
                "at": "l1:for"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Kiểm tra tiến độ → Sprint Goal",
            "x": 2028,
            "y": 165,
            "size": 50,
            "at": "l2:inspect",
            "hl": [
              {
                "text": "Sprint Goal",
                "at": "l2:Sprint Goal"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Chỉnh Sprint Backlog khi cần",
            "x": 2028,
            "y": 245,
            "size": 50,
            "at": "l3:adapt"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Ra: kế hoạch cho ngày tiếp theo",
            "x": 2028,
            "y": 325,
            "size": 50,
            "at": "l3:plan",
            "color": "accent",
            "hl": [
              {
                "text": "kế hoạch",
                "at": "l3:plan"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: báo cáo cho sếp",
            "x": 2928,
            "y": 165,
            "size": 50,
            "at": "l5:boss",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l5:Not"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: nhóm xem còn kịp không",
            "x": 2928,
            "y": 250,
            "size": 46,
            "at": "l5:whole team",
            "color": "accent",
            "hl": [
              {
                "text": "còn kịp không",
                "at": "l5:reachable"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: The 2020 Scrum Guide",
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
          "say": "So what is a stand-up really for?",
          "sub": "Vậy stand-up thật ra để làm gì?",
          "keys": [
            "để làm gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The Scrum Guide says: to inspect progress toward the Sprint Goal, the one goal of the sprint.",
          "sub": "Scrum Guide nói: để kiểm tra tiến độ hướng tới Sprint Goal, mục tiêu duy nhất của sprint.",
          "keys": [
            "Sprint Goal"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And to adapt the Sprint Backlog, so the team leaves with a plan for the next day.",
          "sub": "Và để chỉnh Sprint Backlog, để cả nhóm ra về với một kế hoạch cho ngày tiếp theo.",
          "keys": [
            "một kế hoạch"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Who is it for? The Developers, the people doing the work in the sprint.",
          "sub": "Dành cho ai? Cho Developers, những người trực tiếp làm việc trong sprint."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Not a report for the boss. The whole team checks if the goal is still reachable.",
          "sub": "Không phải báo cáo cho sếp. Mà là cả nhóm xem mục tiêu sprint còn kịp không.",
          "keys": [
            "còn kịp không"
          ]
        }
      ],
      "ref": "p1,p2"
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
            "id": "b-same",
            "t": "text",
            "text": "Cùng giờ, cùng chỗ, mỗi ngày",
            "x": 2028,
            "y": 430,
            "size": 48,
            "at": "l1:same time",
            "hl": [
              {
                "text": "Cùng giờ, cùng chỗ",
                "at": "l1:same place"
              }
            ]
          },
          {
            "id": "b-gain",
            "t": "text",
            "text": "→ rõ hơn, thấy vướng, quyết nhanh",
            "x": 2068,
            "y": 505,
            "size": 40,
            "at": "l2:communication"
          },
          {
            "id": "b-op1",
            "t": "text",
            "text": "“I'm still on track for the sprint goal.”",
            "x": 2028,
            "y": 600,
            "size": 40,
            "at": "l3:on track",
            "font": "base",
            "color": "accent",
            "hl": [
              {
                "text": "on track",
                "at": "l3:on track"
              }
            ]
          },
          {
            "id": "b-op2",
            "t": "text",
            "text": "“I'm a bit behind on the payment feature, and here's why.”",
            "x": 2028,
            "y": 665,
            "size": 36,
            "at": "l4:behind",
            "font": "base",
            "hl": [
              {
                "text": "a bit behind",
                "at": "l4:behind"
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
          "say": "Same time, same place, every working day. Like the weather news, but for code.",
          "sub": "Cùng giờ, cùng chỗ, mỗi ngày làm việc. Như bản tin thời tiết, nhưng cho code.",
          "keys": [
            "Cùng giờ, cùng chỗ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The guide lists the gains: better communication, blockers found, fast decisions, fewer other meetings.",
          "sub": "Lợi ích được ghi rõ: giao tiếp tốt hơn, phát hiện trở ngại, quyết nhanh, bớt các cuộc họp khác."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So the best opening links to the goal: I'm still on track for the sprint goal.",
          "sub": "Nên câu mở đầu hợp nhất gắn với mục tiêu: “I'm still on track for the sprint goal.”",
          "keys": [
            "on track"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Or, if things are slow: I'm a bit behind on the payment feature, and here's why.",
          "sub": "Hoặc khi chậm: “I'm a bit behind on the payment feature, and here's why.”",
          "keys": [
            "a bit behind"
          ]
        }
      ],
      "ref": "p2,p3"
    },
    {
      "id": "s04",
      "module": "BRK-08",
      "data": {
        "title": "Một tuần sprint của nhóm Dũng",
        "points": [
          {
            "label": "Thứ Hai",
            "sub": "Ba câu hỏi",
            "illus": "red-question-mark"
          },
          {
            "label": "Thứ Ba",
            "sub": "Nêu vướng",
            "illus": "stop-sign"
          },
          {
            "label": "Thứ Tư",
            "sub": "Số ticket",
            "illus": "ticket"
          },
          {
            "label": "Thứ Năm",
            "sub": "Họp từ xa",
            "illus": "laptop"
          },
          {
            "label": "Thứ Sáu",
            "sub": "Ngoài stand-up",
            "illus": "spiral-calendar"
          },
          {
            "label": "Chủ nhật",
            "sub": "Ba dòng",
            "illus": "memo"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One sprint week, six stops.",
          "sub": "Một tuần sprint, sáu chặng.",
          "keys": [
            "sáu chặng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Camera on. Let's join Dũng's team.",
          "sub": "Bật camera. Vào nhóm của Dũng nào."
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
            "text": "① Thứ Hai 9:20 · Ba câu hỏi",
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
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop",
                "memo"
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
            "at": "l1:after",
            "caption": "Thứ Hai 9:20 · sau cuộc gọi",
            "icon": "laptop"
          },
          {
            "id": "c-q1",
            "t": "text",
            "text": "Yesterday? (Hôm qua?)",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l3:yesterday"
          },
          {
            "id": "c-q2",
            "t": "text",
            "text": "Today? (Hôm nay?)",
            "x": 3996,
            "y": 250,
            "size": 50,
            "at": "l3:today"
          },
          {
            "id": "c-q3",
            "t": "text",
            "text": "Blocking me? (Gì đang chặn?)",
            "x": 3996,
            "y": 330,
            "size": 50,
            "at": "l3:blocking"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Ba câu hỏi: Atlassian · Scrum Guide 2020 đã bỏ: Derek Davidson, Scrum.org",
            "x": 3996,
            "y": 720,
            "size": 28,
            "at": "l3",
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
          "say": "Stop one, Monday, nine twenty. After the call, Dũng googles stand-up tips.",
          "sub": "Chặng một, chín giờ hai mươi thứ Hai. Tắt cuộc gọi, Dũng lên mạng tìm mẹo stand-up."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Three questions? Yesterday, today, blockers. Easy! Why didn't anyone tell me?",
          "sub": "Ba câu hỏi à? Hôm qua, hôm nay, vướng gì. Dễ ợt! Sao không ai bảo mình?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Atlassian lists them: what did I work on yesterday, what am I working on today, what's blocking me.",
          "sub": "Atlassian liệt kê đúng ba câu: hôm qua làm gì, hôm nay làm gì, điều gì đang chặn mình."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But here's a twist. The twenty-twenty Scrum Guide dropped the three questions completely.",
          "sub": "Nhưng có cú lật. Scrum Guide bản 2020 đã bỏ hẳn ba câu hỏi ấy.",
          "keys": [
            "bỏ hẳn ba câu hỏi"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Derek Davidson on Scrum.org explains: any structure is fine, if it focuses on the Sprint Goal.",
          "sub": "Derek Davidson trên Scrum.org giải thích: cấu trúc nào cũng được, miễn tập trung vào Sprint Goal.",
          "keys": [
            "tập trung vào Sprint Goal"
          ]
        }
      ],
      "ref": "p4,p5"
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
            "at": "l2",
            "fit": [
              "c-bef"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "C",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "c-ok",
            "t": "ring",
            "around": [
              "c-q1",
              "c-q2",
              "c-q3"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l1:still"
          },
          {
            "id": "c-bef",
            "t": "text",
            "text": "Trước: “fixed bugs… fix bugs.”",
            "x": 3996,
            "y": 410,
            "size": 46,
            "at": "l2:fixed",
            "color": "coral"
          },
          {
            "id": "c-befx",
            "t": "strike",
            "over": "c-bef",
            "at": "l2:nothing"
          },
          {
            "id": "c-aft",
            "t": "text",
            "text": "Sau: “login API, so the team can…”",
            "x": 3996,
            "y": 480,
            "size": 44,
            "at": "l3:login",
            "color": "accent",
            "hl": [
              {
                "text": "so the team can",
                "at": "l3:team"
              }
            ]
          },
          {
            "id": "c-aft2",
            "t": "text",
            "text": "“…the last item for our sprint goal”",
            "x": 3996,
            "y": 545,
            "size": 42,
            "at": "l4:password"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Gắn mục tiêu, đừng đọc danh sách",
            "x": 3996,
            "y": 620,
            "size": 46,
            "at": "l5:list",
            "color": "accent",
            "hl": [
              {
                "text": "Gắn mục tiêu",
                "at": "l5:goal"
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
          "say": "The three questions still work for beginners. Just answer them through the goal.",
          "sub": "Ba câu hỏi vẫn dùng được cho người mới. Chỉ cần trả lời theo mục tiêu sprint.",
          "keys": [
            "theo mục tiêu sprint"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Dũng's old version: yesterday I fixed bugs, today I fix bugs. That tells the listener nothing.",
          "sub": "Bản cũ của Dũng: hôm qua sửa lỗi, hôm nay sửa lỗi. Người nghe chẳng biết thêm gì."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "New version: yesterday I finished the login API, so the team can start testing it.",
          "sub": "Bản mới: hôm qua mình làm xong API đăng nhập, nên nhóm có thể bắt đầu kiểm thử.",
          "keys": [
            "nhóm có thể bắt đầu kiểm thử"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Today I'm working on the password reset, the last item for our sprint goal. No blockers for now.",
          "sub": "Hôm nay mình làm phần đặt lại mật khẩu, việc cuối cho mục tiêu sprint. Tạm thời chưa vướng gì."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: tie your work to the goal. Don't just read a list.",
          "sub": "Rút ra: nói việc gắn với mục tiêu, đừng chỉ đọc danh sách việc.",
          "keys": [
            "gắn với mục tiêu"
          ]
        }
      ],
      "ref": "p6,p7"
    },
    {
      "id": "s07",
      "module": "BRK-04",
      "data": {
        "title": "Cùng là ba câu hỏi",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Kể từng việc nhỏ, không ai biết còn xa mục tiêu bao nhiêu",
        "right": "Việc xong giúp được ai, việc hôm nay đưa mục tiêu tới đâu",
        "wrongIllus": "scroll",
        "rightIllus": "bullseye"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A list of small tasks?",
          "sub": "Kể một danh sách việc nhỏ?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Or who your work helps, and how close the goal is?",
          "sub": "Hay nói việc mình giúp được ai, và mục tiêu còn bao xa?",
          "keys": [
            "mục tiêu còn bao xa"
          ]
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s08",
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
            "text": "② Thứ Ba 9:00 · Đang vướng",
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
                  "enter": "pop",
                  "at": "l2"
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
                  "at": "l3",
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
            "at": "l2:Thảo",
            "caption": "Thứ Ba 9:00 · stand-up",
            "icon": "laptop"
          },
          {
            "id": "d-yes",
            "t": "text",
            "text": "Có nói! (Openness)",
            "x": 5964,
            "y": 170,
            "size": 56,
            "at": "l4:listed",
            "color": "accent",
            "hl": [
              {
                "text": "Openness",
                "at": "l4:Openness"
              }
            ]
          },
          {
            "id": "d-a1",
            "t": "text",
            "text": "Phát hiện trở ngại = lợi ích",
            "x": 5964,
            "y": 260,
            "size": 46,
            "at": "l4:impediments"
          },
          {
            "id": "d-a2",
            "t": "text",
            "text": "Không ai nêu vướng = lỗi",
            "x": 5964,
            "y": 330,
            "size": 46,
            "at": "l5:mistake",
            "color": "coral",
            "hl": [
              {
                "text": "lỗi",
                "at": "l5:mistake"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Scrum Guide 2020 · Stefan Wolpers, Scrum.org — Daily Scrum Anti-Patterns",
            "x": 5964,
            "y": 720,
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
          "say": "Stop two, Tuesday, nine a.m. Same call, new face.",
          "sub": "Chặng hai, chín giờ sáng thứ Ba. Vẫn cuộc gọi ấy, thêm gương mặt mới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Thảo, the frontend developer, owner of the neatest sticky notes in Hà Nội.",
          "sub": "Đây là Thảo, lập trình viên frontend, chủ nhân những tờ giấy nhớ ngăn nắp nhất Hà Nội.",
          "keys": [
            "lập trình viên frontend"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I'm stuck waiting for the new screen design. Should I even say that here?",
          "sub": "Mình đang kẹt vì chờ thiết kế màn hình mới. Có nên nói ở đây không nhỉ?",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Yes. Finding impediments is a listed benefit, and the value Openness asks the team to share problems.",
          "sub": "Có. Phát hiện trở ngại là lợi ích được ghi rõ, và giá trị Openness yêu cầu cởi mở cả khó khăn.",
          "keys": [
            "Openness"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Stefan Wolpers on Scrum.org even lists nobody raising blockers as a mistake.",
          "sub": "Stefan Wolpers trên Scrum.org còn xếp chuyện không ai nêu vướng vào danh sách lỗi.",
          "keys": [
            "danh sách lỗi"
          ]
        }
      ],
      "ref": "p9"
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
            "id": "d-A",
            "t": "text",
            "text": "A: bàn qua lại, cả nhóm chờ",
            "x": 5964,
            "y": 400,
            "size": 46,
            "at": "l2:back and forth",
            "color": "coral"
          },
          {
            "id": "d-Ax",
            "t": "strike",
            "over": "d-A",
            "at": "l2:overtime"
          },
          {
            "id": "d-B",
            "t": "text",
            "text": "B: “Could we have a quick call after this?”",
            "x": 5964,
            "y": 475,
            "size": 36,
            "at": "l3:quick call",
            "font": "base",
            "color": "accent",
            "hl": [
              {
                "text": "quick call",
                "at": "l3:quick call"
              }
            ]
          },
          {
            "id": "d-key",
            "t": "text",
            "text": "“I'm blocked by the missing API key.”",
            "x": 5964,
            "y": 545,
            "size": 36,
            "at": "l4:API key",
            "font": "base"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Họp: nêu vướng · sau họp: gỡ vướng",
            "x": 5964,
            "y": 615,
            "size": 48,
            "at": "l5:raise",
            "color": "accent",
            "hl": [
              {
                "text": "gỡ vướng",
                "at": "l5:fix"
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
          "say": "But raising a blocker is not solving it. Two ways for Thảo.",
          "sub": "Nhưng nêu vướng khác với gỡ vướng. Thảo có hai cách."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Way A: she explains every detail, the designer replies, back and forth, five people wait. Overtime.",
          "sub": "Cách A: kể chi tiết, anh designer đáp, hai người bàn qua lại, năm người ngồi chờ. Quá giờ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Way B. I'm waiting for the new screen design. Could we have a quick call after this?",
          "sub": "Cách B. Mình đang chờ thiết kế màn hình mới. Lát nữa mình gọi nhanh được không?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Same pattern: I'm blocked by the missing API key. Can we talk after the stand-up?",
          "sub": "Mẫu chung: “I'm blocked by the missing API key. Can we talk after the stand-up?”"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: raise it in the meeting, fix it after the meeting.",
          "sub": "Rút ra: trong họp nêu vướng, sau họp gỡ vướng.",
          "keys": [
            "sau họp gỡ vướng"
          ]
        }
      ],
      "ref": "p10,p11,p12"
    },
    {
      "id": "s10",
      "module": "BRK-07",
      "data": {
        "question": "Nói đủ ý rồi, sao lượt nói vẫn dài gấp đôi?",
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
          "say": "What if you say everything, and your turn still runs twice as long?",
          "sub": "Nói đủ ý rồi, sao lượt nói vẫn dài gấp đôi?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s11",
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
            "text": "③ Thứ Tư 9:00 · Đọc số ticket",
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
                  "pose": "phone"
                },
                {
                  "id": "sam",
                  "side": "right"
                }
              ],
              "props": [
                "laptop",
                "ticket"
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
                  "shot": "E-SHOT-06",
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
            "at": "l1:Jira",
            "caption": "Thứ Tư 9:00 · Dũng mở Jira",
            "icon": "ticket"
          },
          {
            "id": "e-n",
            "t": "text",
            "text": "231 · 245 · 250 …",
            "x": 7932,
            "y": 160,
            "size": 64,
            "at": "l2:two thirty-one",
            "color": "coral"
          },
          {
            "id": "e-q",
            "t": "text",
            "text": "Sam: “Which one is the checkout bug?”",
            "x": 7932,
            "y": 270,
            "size": 36,
            "at": "l3:checkout",
            "font": "base"
          },
          {
            "id": "e-x2",
            "t": "text",
            "text": "→ mở lại từng ticket, lượt nói ×2",
            "x": 7932,
            "y": 340,
            "size": 42,
            "at": "l4:twice",
            "color": "coral",
            "hl": [
              {
                "text": "×2",
                "at": "l4:twice"
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
          "say": "Stop three, Wednesday. Dũng opens Jira and reads it aloud.",
          "sub": "Chặng ba, thứ Tư. Dũng mở Jira và đọc to."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Ticket two thirty-one done, two forty-five in progress, two fifty to do.",
          "sub": "Ticket 231 xong, 245 đang làm, 250 chưa làm.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Sorry, which one is the checkout bug?",
          "sub": "Xin lỗi, cái nào là lỗi thanh toán vậy?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Dũng opens every ticket again to explain. His turn runs twice as long.",
          "sub": "Dũng phải mở lại từng ticket để giải thích. Lượt nói dài gấp đôi.",
          "keys": [
            "dài gấp đôi"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 200
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "online",
        "label": "Thứ Tư 9:01 · lượt của Dũng",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đọc số ticket là đủ thông tin",
          "why": "Người nghe không nhớ số; Scrum.org xếp “chỉ đọc số ticket” vào lỗi stand-up.",
          "rule": "Số ticket để tra, tên việc để nghe"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Two thirty-one, two forty-five, two fifty. Done. Next person!",
          "sub": "231, 245, 250. Xong. Mời người tiếp theo!",
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
          "say": "Numbers are house numbers. Nobody remembers who lives at two forty-five.",
          "sub": "Số ticket như số nhà. Có ai nhớ nhà số 245 là ai ở đâu.",
          "keys": [
            "số nhà"
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
          "say": "I fixed the checkout bug. The search filter is in progress.",
          "sub": "Mình đã sửa lỗi thanh toán. Bộ lọc tìm kiếm đang làm.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. Ticket numbers are for searching. Task names are for listening.",
          "sub": "Đúng. Số ticket là để tra, tên việc là để nghe.",
          "phase": "redo",
          "keys": [
            "tên việc là để nghe"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p16"
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
          }
        ],
        "items": [
          {
            "id": "e-k",
            "t": "text",
            "text": "Số để tra, tên việc để nghe",
            "x": 7932,
            "y": 450,
            "size": 52,
            "at": "l1:searching",
            "color": "accent",
            "hl": [
              {
                "text": "tên việc để nghe",
                "at": "l1:listening"
              }
            ]
          },
          {
            "id": "e-l",
            "t": "text",
            "text": "5 lỗi hay gặp (trong 20+):",
            "x": 7932,
            "y": 545,
            "size": 42,
            "at": "l2:twenty"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "báo cáo · độc thoại > 60–90 giây",
            "x": 7932,
            "y": 610,
            "size": 40,
            "at": "l3:status",
            "hl": [
              {
                "text": "60–90 giây",
                "at": "l3:ninety"
              }
            ]
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "đọc số · không chuẩn bị · muộn",
            "x": 7932,
            "y": 670,
            "size": 40,
            "at": "l4:unprepared",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So remember: ticket numbers for searching, task names for listening.",
          "sub": "Nhớ nhé: số ticket để tra, tên việc để nghe.",
          "keys": [
            "tên việc để nghe"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Wolpers lists over twenty mistakes. Five are common in projects abroad.",
          "sub": "Wolpers liệt kê hơn hai mươi lỗi. Có năm lỗi rất hay gặp ở nhóm làm dự án nước ngoài."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A status report for others. A monologue past sixty to ninety seconds.",
          "sub": "Biến buổi họp thành báo cáo tình trạng. Độc thoại quá khoảng 60 đến 90 giây.",
          "keys": [
            "60 đến 90 giây"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Reading ticket numbers only. Coming unprepared. Arriving late, or not at all.",
          "sub": "Chỉ đọc số ticket. Đến họp không chuẩn bị. Đến muộn, hoặc vắng mặt."
        }
      ],
      "ref": "p14,p16"
    },
    {
      "id": "s14",
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
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Năm 9:00 · Họp từ xa",
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
                  "pose": "point"
                },
                {
                  "id": "sam",
                  "side": "right"
                }
              ],
              "props": [
                "laptop",
                "clipboard"
              ],
              "camera": [
                {
                  "at": "l3",
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
            "at": "l1:Thursday",
            "caption": "Thứ Năm 9:00 · chia sẻ bảng việc",
            "icon": "clipboard"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "1 người từ xa → coi như",
            "x": 60,
            "y": 1260,
            "size": 48,
            "at": "l2:remote"
          },
          {
            "id": "f-1b",
            "t": "text",
            "text": "TẤT CẢ đều từ xa",
            "x": 100,
            "y": 1330,
            "size": 52,
            "at": "l2:everyone",
            "color": "accent",
            "hl": [
              {
                "text": "TẤT CẢ",
                "at": "l2:everyone"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Mỗi người một máy · chung một bảng",
            "x": 60,
            "y": 1420,
            "size": 44,
            "at": "l2:board"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "“As you can see on the board…”",
            "x": 60,
            "y": 1510,
            "size": 46,
            "at": "l3:board",
            "hl": [
              {
                "text": "on the board",
                "at": "l3:board"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Mẹo: Dan Radigan, Atlassian — What is a stand up meeting",
            "x": 60,
            "y": 1810,
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
          "say": "Stop four, Thursday. Half the team is in the office, Sam is in Australia.",
          "sub": "Chặng bốn, thứ Năm. Nửa nhóm ngồi văn phòng, chị Sam ở tận Úc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Atlassian's tip: if one person is remote, everyone is remote. Each joins from their own device, sharing one board.",
          "sub": "Mẹo của Atlassian: một người họp từ xa thì coi như mọi người đều từ xa. Mỗi người vào từ máy mình, cùng nhìn một bảng.",
          "keys": [
            "mọi người đều từ xa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "As you can see on the board, the checkout task is in review.",
          "sub": "Như mọi người thấy trên bảng, việc thanh toán đang được review.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One sentence, a finger on the board, and Sam is right there with her.",
          "sub": "Một câu, một ngón tay chỉ lên bảng, chị Sam theo kịp ngay."
        }
      ],
      "ref": "p17"
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Sáu · Ngoài stand-up",
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
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "left",
                  "face": "worried"
                }
              ],
              "props": [
                "laptop"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Friday",
            "caption": "Thứ Sáu · họp với khách",
            "icon": "laptop"
          },
          {
            "id": "g-q",
            "t": "text",
            "text": "“How long will it take?”",
            "x": 2028,
            "y": 1260,
            "size": 56,
            "at": "l2:How long",
            "color": "coral",
            "hl": [
              {
                "text": "How long",
                "at": "l2:How long"
              }
            ]
          },
          {
            "id": "g-e",
            "t": "text",
            "text": "Ước lượng: Developers tự làm",
            "x": 2028,
            "y": 1360,
            "size": 46,
            "at": "l4:Developers",
            "hl": [
              {
                "text": "Developers",
                "at": "l4:Developers"
              }
            ]
          },
          {
            "id": "g-e2",
            "t": "text",
            "text": "→ khoảng thời gian, điều kiện, rủi ro",
            "x": 2068,
            "y": 1430,
            "size": 40,
            "at": "l5:range",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, Friday. A stand-up is just one event of the sprint.",
          "sub": "Chặng năm, thứ Sáu. Stand-up chỉ là một trong các sự kiện của sprint."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Dũng, about the new filter feature. How long will it take?",
          "sub": "Dũng ơi, tính năng bộ lọc mới ấy. Mất bao lâu vậy?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Uh, maybe, uh, soon?",
          "sub": "Ờ… chắc là… sớm thôi?",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The Scrum Guide says Developers, the people doing the work, size the work. So Sam asks Dũng.",
          "sub": "Scrum Guide nói chính Developers, người làm việc, ước lượng công việc. Nên chị Sam hỏi Dũng.",
          "keys": [
            "Developers"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A safe answer has a range, a condition and a risk. That's a later lesson.",
          "sub": "Câu trả lời an toàn có khoảng thời gian, có điều kiện, có rủi ro. Để dành cho một bài sau."
        }
      ],
      "ref": "p18"
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
            "id": "g-r",
            "t": "text",
            "text": "Sprint Review: làm việc chung",
            "x": 2028,
            "y": 1530,
            "size": 48,
            "at": "l1:Review",
            "hl": [
              {
                "text": "làm việc chung",
                "at": "l1:working session"
              }
            ]
          },
          {
            "id": "g-r2",
            "t": "text",
            "text": "→ demo, mời góp ý",
            "x": 2068,
            "y": 1600,
            "size": 40,
            "at": "l2:demo",
            "color": "muted"
          },
          {
            "id": "g-re",
            "t": "text",
            "text": "Retro: tốt gì, vướng gì, cải tiến",
            "x": 2028,
            "y": 1680,
            "size": 44,
            "at": "l3:Retrospective",
            "hl": [
              {
                "text": "cải tiến",
                "at": "l3:improvements"
              }
            ]
          },
          {
            "id": "g-n",
            "t": "text",
            "text": "Mỗi việc một bài trong chuỗi",
            "x": 2028,
            "y": 1770,
            "size": 46,
            "at": "l3:matter",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "At the end comes the Sprint Review. The guide calls it a working session, not a presentation.",
          "sub": "Cuối sprint là Sprint Review. Scrum Guide gọi đó là buổi làm việc chung, đừng biến thành bài thuyết trình.",
          "keys": [
            "buổi làm việc chung"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "There you demo the feature and invite feedback.",
          "sub": "Ở đó bạn demo tính năng và mời góp ý."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then the Retrospective: what went well, what went wrong, which improvements matter most.",
          "sub": "Rồi đến Retrospective: điều gì tốt, vấn đề gì, chọn cải tiến có tác động lớn nhất.",
          "keys": [
            "cải tiến"
          ]
        }
      ],
      "ref": "p19,p20"
    },
    {
      "id": "s17",
      "module": "BRK-06",
      "data": {
        "title": "Lộ trình của chuỗi",
        "items": [
          {
            "illus": "memo",
            "text": "Hôm qua, hôm nay"
          },
          {
            "illus": "stop-sign",
            "text": "Nêu vướng"
          },
          {
            "illus": "stopwatch",
            "text": "Ước lượng"
          },
          {
            "illus": "laptop",
            "text": "Demo"
          },
          {
            "illus": "speech-balloon",
            "text": "Retro"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Reporting, blockers, estimates, demos, retros.",
          "sub": "Báo cáo, vướng mắc, ước lượng, demo, retro.",
          "keys": [
            "Báo cáo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Five lessons, one by one.",
          "sub": "Năm bài, từng bước một."
        }
      ],
      "ref": "p8,p13"
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
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Chủ nhật 20:00 · Ba dòng",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "memo",
                "stopwatch"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:coffee",
            "caption": "Chủ nhật 20:00 · quán cà phê",
            "icon": "memo"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "1. Xong gì + ai được lợi",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l2:Line one",
            "hl": [
              {
                "text": "ai được lợi",
                "at": "l2:benefits"
              }
            ]
          },
          {
            "id": "h-1b",
            "t": "text",
            "text": "“I finished the search page, so Sam can review it today.”",
            "x": 3996,
            "y": 1330,
            "size": 26,
            "at": "l2:finished",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "2. Hôm nay + Sprint Goal",
            "x": 3996,
            "y": 1390,
            "size": 48,
            "at": "l3:Line two"
          },
          {
            "id": "h-2b",
            "t": "text",
            "text": "“Today I'm working on the filters, for the sprint goal.”",
            "x": 3996,
            "y": 1460,
            "size": 26,
            "at": "l3:filters",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "3. “No blockers.”",
            "x": 3996,
            "y": 1520,
            "size": 48,
            "at": "l4:Line three"
          },
          {
            "id": "h-sw",
            "t": "illus",
            "name": "stopwatch",
            "x": 4576,
            "y": 1500,
            "size": 90,
            "at": "l4:timer"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Ghi ba dòng trước, nói một phút",
            "x": 3996,
            "y": 1770,
            "size": 50,
            "at": "l7:three",
            "color": "accent",
            "hl": [
              {
                "text": "nói một phút",
                "at": "l7:one minute"
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
          "say": "Stop six, Sunday evening, over coffee. Thảo shows Dũng her secret weapon.",
          "sub": "Chặng sáu, tối Chủ nhật, bên ly cà phê. Thảo khoe Dũng vũ khí bí mật."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Five minutes before the call, I write three lines. Line one: what I finished, and who benefits.",
          "sub": "Năm phút trước giờ họp, mình ghi ba dòng. Dòng một: việc đã xong, và ai được lợi.",
          "keys": [
            "ai được lợi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Line two: today's work, tied to the sprint goal. Like the filters we need.",
          "sub": "Dòng hai: việc hôm nay, gắn với mục tiêu sprint. Như phần bộ lọc ta cần."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Line three: blockers, or just no blockers. Then I read it aloud with a timer.",
          "sub": "Dòng ba: vướng mắc, hoặc chỉ “No blockers”. Rồi mình đọc to, bấm giờ.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "And?",
          "sub": "Rồi sao?",
          "face": "surprised"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Under one minute. Every time.",
          "sub": "Chưa tới một phút. Lần nào cũng vậy.",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Three lines written first, one minute spoken short.",
          "sub": "Ba dòng ghi trước, một phút nói gọn.",
          "keys": [
            "một phút nói gọn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p21,p22"
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
            "text": "Thứ Hai sau · 9:00",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Next Monday"
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
                  "id": "dung",
                  "side": "left",
                  "face": "happy",
                  "pose": "explain"
                },
                {
                  "id": "sam",
                  "side": "right"
                }
              ],
              "props": [
                "laptop",
                "memo"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
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
            "at": "l1:call",
            "caption": "Thứ Hai sau 9:00 · cùng cuộc gọi",
            "icon": "laptop"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Xong + ai được lợi ✓",
            "x": 5964,
            "y": 1270,
            "size": 50,
            "at": "l2:review",
            "color": "accent"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Hôm nay + Sprint Goal ✓",
            "x": 5964,
            "y": 1350,
            "size": 50,
            "at": "l3:sprint goal",
            "color": "accent"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Vướng → hẹn sau họp ✓",
            "x": 5964,
            "y": 1430,
            "size": 50,
            "at": "l3:after",
            "color": "accent"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Ăn có nhai, nói có… ba dòng”",
            "x": 5964,
            "y": 1560,
            "size": 52,
            "at": "l5:think",
            "color": "accent",
            "hl": [
              {
                "text": "ba dòng",
                "at": "l5:three lines"
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
          "say": "Next Monday, nine a.m. Same call, same Sam, same Dũng.",
          "sub": "Thứ Hai tuần sau, chín giờ sáng. Vẫn cuộc gọi ấy, vẫn chị Sam, vẫn Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Yesterday I finished the card form, so Thảo can review it today.",
          "sub": "Hôm qua mình làm xong form thẻ, nên hôm nay Thảo có thể review.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Today I'm on the payment gateway, the last step for our sprint goal. One blocker, can we talk after?",
          "sub": "Hôm nay mình làm cổng thanh toán, bước cuối cho mục tiêu sprint. Có một vướng, mình bàn sau nhé?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "Perfect. Clear and short. Thanks, Dũng!",
          "sub": "Tuyệt. Rõ và gọn. Cảm ơn Dũng!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Chew before you eat, think before you speak. Dũng now thinks in three lines.",
          "sub": "“Ăn có nhai, nói có nghĩ.” Giờ Dũng nghĩ bằng… ba dòng.",
          "keys": [
            "ba dòng"
          ]
        }
      ],
      "ref": "p23"
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
            "at": "l6",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l7",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l8",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l9",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tóm lại: đúng ý, khỏi hoa mỹ",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:fancy"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l2:finished",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1242,
            "size": 56,
            "at": "l2:finished+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Xong gì, ai được lợi",
            "x": 7997,
            "y": 1252,
            "size": 46,
            "at": "l2:finished+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1345,
            "w": 44,
            "h": 44,
            "at": "l3:today",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1327,
            "size": 56,
            "at": "l3:today+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Hôm nay, gắn Sprint Goal",
            "x": 7997,
            "y": 1337,
            "size": 46,
            "at": "l3:today+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1430,
            "w": 44,
            "h": 44,
            "at": "l3:blockers",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1412,
            "size": 56,
            "at": "l3:blockers+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Vướng gì, cần ai",
            "x": 7997,
            "y": 1422,
            "size": 46,
            "at": "l3:blockers+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1515,
            "w": 44,
            "h": 44,
            "at": "l4:after",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1497,
            "size": 56,
            "at": "l4:after+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Hẹn bàn sau họp",
            "x": 7997,
            "y": 1507,
            "size": 46,
            "at": "l4:after+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1600,
            "w": 44,
            "h": 44,
            "at": "l4:names",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1582,
            "size": 56,
            "at": "l4:names+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Tên việc, không đọc số",
            "x": 7997,
            "y": 1592,
            "size": 46,
            "at": "l4:names+200"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 3568,
            "y": 40,
            "at": "l6"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 7504,
            "y": 40,
            "at": "l7"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5536,
            "y": 1130,
            "at": "l8"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo; cách họp mỗi nhóm có thể khác — làm theo quy ước của nhóm bạn. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1810,
            "size": 28,
            "at": "l10:end",
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
          "say": "So, a good stand-up needs no fancy English. Just the right ideas.",
          "sub": "Tóm lại, stand-up tốt không cần tiếng Anh hoa mỹ, chỉ cần đúng ý.",
          "keys": [
            "đúng ý"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One sentence: what you finished, and who it helps.",
          "sub": "Một câu: việc đã xong, giúp được ai."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One for today, tied to the Sprint Goal. One for blockers, and who you need.",
          "sub": "Một câu cho hôm nay, gắn với Sprint Goal. Một câu cho vướng mắc, cần ai giúp."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Details after the meeting. Task names, not ticket numbers.",
          "sub": "Chi tiết để sau họp. Gọi tên việc, đừng đọc số ticket.",
          "keys": [
            "Gọi tên việc"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Step back. A stand-up checks the goal.",
          "sub": "Lùi lại nhìn cả tuần: stand-up là để xem mục tiêu."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Blockers: raise them, then fix them after.",
          "sub": "Vướng mắc: nêu trong họp, gỡ sau họp.",
          "keys": [
            "gỡ sau họp"
          ]
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "And three lines, written before the call.",
          "sub": "Và ba dòng, ghi trước giờ họp.",
          "keys": [
            "ba dòng"
          ]
        },
        {
          "id": "l9",
          "lang": "en",
          "who": "det",
          "say": "Try now: tomorrow morning, write your three lines and time yourself reading them aloud.",
          "sub": "Làm ngay: sáng mai, viết ba dòng trước giờ họp và bấm giờ khi đọc to.",
          "keys": [
            "bấm giờ"
          ]
        },
        {
          "id": "l10",
          "lang": "en",
          "who": "det",
          "say": "Next up: reporting yesterday and today, with the right tense.",
          "sub": "Bài tiếp theo: báo cáo hôm qua, hôm nay, chọn thì cho đúng.",
          "keys": [
            "chọn thì cho đúng"
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
        "q": "What does ticket numbers are for searching, task names are for listening mean?",
        "options": [
          "Listeners need task names, while numbers help only when looking things up",
          "You must learn every ticket number by heart before the daily meeting",
          "Ticket numbers are useless, so your team should delete the whole board"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "ticket",
        "why": "Người nghe qua cuộc gọi không nhớ được số ticket. Tên việc dễ hiểu, còn số ticket để tra khi cần."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What does ticket numbers are for searching, task names are for listening mean?",
          "sub": "Câu “Số ticket là để tra, tên việc là để nghe” nghĩa là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Listeners need task names, while numbers help only when looking things up.",
          "sub": "Người nghe cần tên việc; số chỉ có ích khi tra cứu."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Remember Wednesday? Sam just wanted the checkout bug.",
          "sub": "Nhớ thứ Tư chứ? Chị Sam chỉ muốn biết đâu là lỗi thanh toán."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[27]"
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
          "say": "Three lines, one minute. Then try the forty questions below.",
          "sub": "Ba dòng, một phút. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144. Hook HOOK-24: vật neo con số “15 phút” (Scrum Guide 2020) → lượt mỗi người ~1 phút → Dũng “Same as yesterday”. Dòng thời gian: MỘT TUẦN SPRINT (T2 9:00 stand-up → T2 9:20 ba câu hỏi Atlassian / Scrum Guide 2020 bỏ → T3 9:00 Thảo chờ thiết kế, cách A/B → T4 Dũng đọc số ticket, Sam hỏi lỗi thanh toán, “Khoan đã!” → T5 họp từ xa nhìn chung bảng → T6 Sam hỏi “How long?”, Review, Retro → CN 20:00 Thảo dạy ba dòng → T2 sau 9:00 khép vòng). Nhân vật: Dũng (backend), Thảo (frontend), Sam (PO ở Úc). Tục ngữ: “Ăn có nhai, nói có nghĩ” → “nói có… ba dòng”. Cảnh ngắt nhịp: BRK-08 (tuần sprint), BRK-04 (Trước/Sau), BRK-07 (rehook), BRK-06 (lộ trình chuỗi). Câu đố questions[27].",
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
