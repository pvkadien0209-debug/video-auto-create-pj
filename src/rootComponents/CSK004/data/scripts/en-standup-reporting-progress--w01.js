// en-standup-reporting-progress--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "en-standup-reporting-progress--w01",
  "hook": "HOOK-22",
  "unit": {
    "audience": "en-dev-daily-standup",
    "slug": "en-standup-reporting-progress",
    "door": "ky-nang",
    "level": "B1",
    "title": "Báo cáo hôm qua làm gì, hôm nay làm gì bằng tiếng Anh cho gọn?",
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
          },
          {
            "at": "l2",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
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
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
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
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Năm 9:00 · stand-up",
            "icon": "laptop"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "“Is the payment feature still on track for Friday?”",
            "x": 60,
            "y": 130,
            "size": 30,
            "at": "l2:payment",
            "font": "base"
          },
          {
            "id": "a-cut",
            "t": "text",
            "text": "“Well… actually, the payment gateway is…”",
            "x": 60,
            "y": 220,
            "size": 44,
            "at": "l3:Well",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thursday, nine a.m. Sam, the Product Owner in Australia, asks Dũng, a backend developer, one question.",
          "sub": "Thứ Năm, chín giờ sáng. Chị Sam, Product Owner ở Úc, hỏi Dũng, lập trình viên backend, đúng một câu.",
          "keys": [
            "đúng một câu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Dũng, is the payment feature still on track for Friday?",
          "sub": "Dũng ơi, tính năng thanh toán vẫn kịp thứ Sáu chứ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Well, actually, the payment gateway is...",
          "sub": "Ờ… thật ra thì, phần cổng thanh toán đang…",
          "face": "worried",
          "stop": true
        }
      ],
      "beats": {
        "after": 300
      },
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
            "move": "cut",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "a-rw",
            "t": "text",
            "text": "⏪ Thứ Hai · Thứ Ba · Thứ Tư",
            "x": 60,
            "y": 330,
            "size": 50,
            "at": "l1:Monday"
          },
          {
            "id": "a-same",
            "t": "text",
            "text": "“Same as yesterday.” ×3",
            "x": 60,
            "y": 420,
            "size": 56,
            "at": "l2:Same",
            "color": "coral",
            "hl": [
              {
                "text": "×3",
                "at": "l3:three"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Tốt phô ra, xấu đậy lại”",
            "x": 60,
            "y": 620,
            "size": 54,
            "at": "l4:hide",
            "color": "accent",
            "hl": [
              {
                "text": "xấu đậy lại",
                "at": "l4:hide"
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
          "say": "Hold that sentence. Rewind to Monday, Tuesday, Wednesday.",
          "sub": "Giữ câu đó lại. Tua về thứ Hai, thứ Ba, thứ Tư.",
          "keys": [
            "Tua về"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Same as yesterday. Still working on the payment feature.",
          "sub": "Vẫn như hôm qua. Vẫn đang làm tính năng thanh toán.",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three mornings, the same sentence. Like a radio stuck on one song.",
          "sub": "Ba buổi sáng, cùng một câu. Như cái đài kẹt đúng một bài hát.",
          "keys": [
            "Ba buổi sáng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents say: show the good, hide the bad.",
          "sub": "Ông bà gọi là: “Tốt đẹp phô ra, xấu xa đậy lại.”",
          "keys": [
            "Tốt đẹp phô ra, xấu xa đậy lại"
          ]
        }
      ],
      "ref": "p2"
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
            "at": "l1",
            "fit": [
              "a-v2"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "A",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "a-v2",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "sam",
                  "side": "right",
                  "face": "surprised"
                },
                {
                  "id": "dung",
                  "side": "left",
                  "face": "sad"
                }
              ],
              "props": [
                "laptop"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Năm 9:00 · nói nốt câu",
            "icon": "laptop"
          },
          {
            "id": "a-2d",
            "t": "text",
            "text": "… chậm 2 ngày!",
            "x": 900,
            "y": 680,
            "size": 56,
            "at": "l1:two days",
            "color": "coral",
            "hl": [
              {
                "text": "2 ngày",
                "at": "l1:two days"
              }
            ]
          },
          {
            "id": "a-k",
            "t": "text",
            "text": "“Như hôm qua” ×3 giấu trễ hạn",
            "x": 60,
            "y": 520,
            "size": 48,
            "at": "l3:hide",
            "color": "accent",
            "hl": [
              {
                "text": "giấu trễ hạn",
                "at": "l3:delay"
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
          "say": "Well, actually, the payment gateway is two days behind.",
          "sub": "Ờ… thật ra, phần cổng thanh toán đang chậm hai ngày.",
          "face": "sad"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Silence. Then the whole team changes its plan in a hurry.",
          "sub": "Im lặng. Rồi cả nhóm phải đổi kế hoạch gấp.",
          "keys": [
            "đổi kế hoạch gấp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: three times like yesterday can hide one delay.",
          "sub": "Rút ra: ba lần “như hôm qua” có thể giấu một lần trễ hạn.",
          "keys": [
            "giấu một lần trễ hạn"
          ]
        }
      ],
      "ref": "p2,p3"
    },
    {
      "id": "s03",
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
            "text": "Hôm qua, hôm nay: nói gọn?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:short",
            "hl": [
              {
                "text": "nói gọn",
                "at": "l1:short"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Daily Scrum → kế hoạch cho ngày mai",
            "x": 2028,
            "y": 165,
            "size": 48,
            "at": "l2:plan",
            "hl": [
              {
                "text": "kế hoạch",
                "at": "l2:plan"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "“Same as yesterday” → đứng yên?",
            "x": 2028,
            "y": 245,
            "size": 48,
            "at": "l3:moving",
            "color": "coral"
          },
          {
            "id": "b-x1",
            "t": "text",
            "text": "Báo cáo tình trạng dài dằng dặc",
            "x": 2028,
            "y": 340,
            "size": 46,
            "at": "l4:status report",
            "color": "muted"
          },
          {
            "id": "b-x1s",
            "t": "strike",
            "over": "b-x1",
            "at": "l4:monologue"
          },
          {
            "id": "b-x2",
            "t": "text",
            "text": "Độc thoại quá 60–90 giây",
            "x": 2028,
            "y": 410,
            "size": 46,
            "at": "l4:monologue",
            "color": "muted",
            "hl": [
              {
                "text": "60–90 giây",
                "at": "l4:ninety"
              }
            ]
          },
          {
            "id": "b-x2s",
            "t": "strike",
            "over": "b-x2",
            "at": "l4:seconds+300"
          },
          {
            "id": "b-ok",
            "t": "text",
            "text": "Vừa đủ: 3 câu",
            "x": 2028,
            "y": 500,
            "size": 60,
            "at": "l5:Just right",
            "color": "accent",
            "hl": [
              {
                "text": "Vừa đủ",
                "at": "l5:Just right"
              }
            ]
          },
          {
            "id": "b-ok2",
            "t": "text",
            "text": "một câu việc đã xong · một câu việc hôm nay · một câu vướng mắc",
            "x": 2028,
            "y": 590,
            "size": 34,
            "at": "l5:one sentence",
            "font": "base"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: The 2020 Scrum Guide · Stefan Wolpers, Scrum.org — Daily Scrum Anti-Patterns",
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
          "say": "So how do you report yesterday and today, short and clear?",
          "sub": "Vậy báo cáo hôm qua, hôm nay thế nào cho gọn mà rõ?",
          "keys": [
            "gọn mà rõ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The Scrum Guide says the Daily Scrum checks progress and makes a plan for the next day.",
          "sub": "Scrum Guide nói Daily Scrum để kiểm tra tiến độ và tạo kế hoạch cho ngày tiếp theo.",
          "keys": [
            "kế hoạch cho ngày tiếp theo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Same as yesterday tells nobody if the work is moving. Nothing to adapt.",
          "sub": "“Same as yesterday” không cho ai biết việc đang tiến hay đứng yên. Nhóm chẳng có gì để điều chỉnh."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Scrum.org warns about the opposite too: a long status report, or a monologue past sixty to ninety seconds.",
          "sub": "Scrum.org cảnh báo cả kiểu ngược lại: báo cáo tình trạng dài, hay độc thoại quá 60 đến 90 giây.",
          "keys": [
            "60 đến 90 giây"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Just right: one sentence done, one sentence today, one sentence blockers.",
          "sub": "Vừa đủ: một câu việc đã xong, một câu việc hôm nay, một câu vướng mắc.",
          "keys": [
            "Vừa đủ"
          ]
        }
      ],
      "ref": "p1,p4"
    },
    {
      "id": "s04",
      "module": "BRK-08",
      "data": {
        "title": "Tuần sau của Dũng",
        "points": [
          {
            "label": "Thứ Hai",
            "sub": "Quá khứ đơn",
            "illus": "spiral-calendar"
          },
          {
            "label": "Thứ Ba",
            "sub": "Just · yet",
            "illus": "hourglass-done"
          },
          {
            "label": "Thứ Tư",
            "sub": "I'm working on",
            "illus": "laptop"
          },
          {
            "label": "Thứ Năm",
            "sub": "Sprint Goal",
            "illus": "bullseye"
          },
          {
            "label": "Thứ Sáu",
            "sub": "Báo chậm",
            "illus": "snail"
          },
          {
            "label": "Thứ Năm sau",
            "sub": "Kịp không?",
            "illus": "chequered-flag"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Next week, Dũng tries again.",
          "sub": "Tuần sau, Dũng làm lại từ đầu.",
          "keys": [
            "làm lại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Five mornings, five small fixes.",
          "sub": "Năm buổi sáng, năm chỗ sửa nhỏ."
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
            "text": "① Thứ Hai 8:55 · Hôm qua",
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
            "at": "l1:notes",
            "caption": "Thứ Hai 8:55 · ghi trước giờ họp",
            "icon": "memo"
          },
          {
            "id": "c-r",
            "t": "text",
            "text": "Có mốc đã qua → quá khứ đơn",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l3:past",
            "hl": [
              {
                "text": "quá khứ đơn",
                "at": "l3:past simple"
              }
            ]
          },
          {
            "id": "c-r2",
            "t": "text",
            "text": "yesterday · last Friday · on Friday",
            "x": 3996,
            "y": 245,
            "size": 42,
            "at": "l3:yesterday",
            "color": "muted"
          },
          {
            "id": "c-e1",
            "t": "text",
            "text": "“Yesterday I finished the login API.”",
            "x": 3996,
            "y": 330,
            "size": 36,
            "at": "l4:finished",
            "font": "base",
            "hl": [
              {
                "text": "finished",
                "at": "l4:finished"
              }
            ]
          },
          {
            "id": "c-e2",
            "t": "text",
            "text": "“I fixed the checkout bug on Friday.”",
            "x": 3996,
            "y": 395,
            "size": 36,
            "at": "l4:fixed",
            "font": "base",
            "hl": [
              {
                "text": "fixed",
                "at": "l4:fixed"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Quy tắc: Test-English — Past simple or present perfect? (B1)",
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
          "say": "Stop one, Monday, eight fifty-five. Dũng writes notes before the call. A first!",
          "sub": "Chặng một, tám giờ năm mươi lăm thứ Hai. Dũng ghi chú trước giờ họp. Lần đầu tiên!"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Yesterday... do I say I finished, or I have finished?",
          "sub": "Hôm qua… nói I finished hay I have finished nhỉ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Test-English's B1 rule: a finished time like yesterday or last Friday takes the past simple.",
          "sub": "Quy tắc B1 của Test-English: có mốc đã qua như yesterday, last Friday thì dùng quá khứ đơn.",
          "keys": [
            "quá khứ đơn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Yesterday I finished the login API. I fixed the checkout bug on Friday.",
          "sub": "“Yesterday I finished the login API.” “I fixed the checkout bug on Friday.”"
        }
      ],
      "ref": "p5"
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
            "id": "c-v1",
            "t": "text",
            "text": "finished · fixed · merged",
            "x": 3996,
            "y": 470,
            "size": 52,
            "at": "l1:finished"
          },
          {
            "id": "c-v2",
            "t": "text",
            "text": "reviewed · tested · deployed",
            "x": 3996,
            "y": 545,
            "size": 52,
            "at": "l2:reviewed"
          },
          {
            "id": "c-ed",
            "t": "text",
            "text": "Đọc rõ đuôi -ed = việc đã xong",
            "x": 3996,
            "y": 630,
            "size": 48,
            "at": "l3:ending",
            "color": "accent",
            "hl": [
              {
                "text": "đuôi -ed",
                "at": "l3:ed"
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
          "say": "Stand-up verbs: finished, fixed, merged, which means added your code to the shared branch.",
          "sub": "Động từ hay dùng: finished, fixed, merged, tức gộp code vào nhánh chung."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Reviewed, tested, deployed. Review code, test it, put it live.",
          "sub": "Reviewed, tested, deployed: xem lại code, kiểm thử, triển khai."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "All end in ed. Say that ending clearly, so listeners hear: it's done.",
          "sub": "Đều có đuôi ed. Đọc rõ âm cuối, để người nghe biết: việc đã xong.",
          "keys": [
            "Đọc rõ âm cuối"
          ]
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s07",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Hai 8:58 · đọc thử",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Hiện tại hoàn thành nghe trang trọng hơn",
          "why": "Test-English: câu có mốc đã kết thúc như yesterday thì dùng quá khứ đơn.",
          "rule": "Có yesterday → quá khứ đơn"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Have done sounds more formal. Yesterday I have finished the API!",
          "sub": "Have done nghe sang hơn. Yesterday I have finished the API!",
          "pose": "thumb",
          "face": "happy",
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
          "say": "Yesterday is a finished time. It wants the past simple, not a tuxedo.",
          "sub": "Yesterday là mốc đã kết thúc. Nó cần quá khứ đơn, chứ không cần mặc vest.",
          "keys": [
            "quá khứ đơn"
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
          "say": "Yesterday I finished the API.",
          "sub": "Yesterday I finished the API.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Listeners still understand the wrong one. The right one just sounds short and confident.",
          "sub": "Câu sai người ta vẫn hiểu. Câu đúng thì nghe gọn và tự tin hơn.",
          "phase": "redo",
          "keys": [
            "gọn và tự tin"
          ]
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
            "text": "Hai thì, hai loại mốc",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:times"
          },
          {
            "id": "d-b1",
            "t": "box",
            "x": 5964,
            "y": 160,
            "w": 780,
            "h": 300,
            "at": "l2:finished time",
            "stroke": 5
          },
          {
            "id": "d-a",
            "t": "text",
            "text": "Mốc đã kết thúc",
            "x": 6004,
            "y": 185,
            "size": 52,
            "at": "l2:finished time",
            "hl": [
              {
                "text": "đã kết thúc",
                "at": "l2:finished"
              }
            ]
          },
          {
            "id": "d-a2",
            "t": "text",
            "text": "yesterday · last Friday",
            "x": 6004,
            "y": 265,
            "size": 44,
            "at": "l2:yesterday",
            "color": "muted"
          },
          {
            "id": "d-a3",
            "t": "text",
            "text": "→ I finished",
            "x": 6004,
            "y": 345,
            "size": 56,
            "at": "l2:past",
            "color": "accent"
          },
          {
            "id": "d-b2",
            "t": "box",
            "x": 6804,
            "y": 160,
            "w": 780,
            "h": 300,
            "at": "l3:no time",
            "stroke": 5
          },
          {
            "id": "d-b",
            "t": "text",
            "text": "Không mốc / chưa hết",
            "x": 6844,
            "y": 185,
            "size": 52,
            "at": "l3:no time",
            "hl": [
              {
                "text": "chưa hết",
                "at": "l3:unfinished"
              }
            ]
          },
          {
            "id": "d-b3",
            "t": "text",
            "text": "today · this week",
            "x": 6844,
            "y": 265,
            "size": 44,
            "at": "l3:today",
            "color": "muted"
          },
          {
            "id": "d-b4",
            "t": "text",
            "text": "→ I've finished",
            "x": 6844,
            "y": 345,
            "size": 56,
            "at": "l3:present perfect",
            "color": "accent"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Có yesterday → quá khứ đơn",
            "x": 5964,
            "y": 520,
            "size": 52,
            "at": "l4:yesterday",
            "color": "accent",
            "hl": [
              {
                "text": "quá khứ đơn",
                "at": "l4:past simple"
              }
            ]
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "Không mốc → cân nhắc have done",
            "x": 5964,
            "y": 600,
            "size": 52,
            "at": "l4:No time",
            "color": "accent",
            "hl": [
              {
                "text": "have done",
                "at": "l4:have done"
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
          "say": "So, two tenses, two kinds of times.",
          "sub": "Vậy là hai thì, hai loại mốc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A finished time, like yesterday or last Friday: past simple. I finished.",
          "sub": "Mốc đã kết thúc, như yesterday, last Friday: quá khứ đơn. I finished.",
          "keys": [
            "Mốc đã kết thúc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No time at all, or an unfinished one like today, this week: present perfect.",
          "sub": "Không nêu mốc, hoặc mốc chưa hết như today, this week: hiện tại hoàn thành.",
          "keys": [
            "hiện tại hoàn thành"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: with yesterday, use the past simple. No time given? Then consider have done.",
          "sub": "Rút ra: có yesterday thì dùng quá khứ đơn, không có mốc mới cân nhắc have done.",
          "keys": [
            "dùng quá khứ đơn"
          ]
        }
      ],
      "ref": "p7,p8"
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
            "at": "l4",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "② Thứ Ba 9:00 · Tin mới nhất",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
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
            "id": "e-bef",
            "t": "text",
            "text": "“I finish… I not test…”",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l3:finish",
            "color": "coral"
          },
          {
            "id": "e-q",
            "t": "text",
            "text": "Xong rồi hay đang làm?",
            "x": 7932,
            "y": 245,
            "size": 48,
            "at": "l4:guess",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, Tuesday's stand-up. Ten minutes ago, someone finished a page.",
          "sub": "Chặng hai, stand-up sáng thứ Ba. Mười phút trước, có người vừa làm xong một trang."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Thảo, the frontend developer, queen of sticky notes.",
          "sub": "Đây là Thảo, lập trình viên frontend, nữ hoàng giấy nhớ.",
          "keys": [
            "lập trình viên frontend"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I finish the sign up page. I not test on mobile.",
          "sub": "I finish the sign up page. I not test on mobile.",
          "face": "neutral"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Done or still going? Listeners have to guess.",
          "sub": "Xong rồi hay vẫn đang làm? Người nghe phải đoán.",
          "keys": [
            "phải đoán"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "p11"
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
            "id": "e-j",
            "t": "text",
            "text": "just = vừa mới",
            "x": 7932,
            "y": 330,
            "size": 48,
            "at": "l1:just",
            "hl": [
              {
                "text": "just",
                "at": "l1:just"
              }
            ]
          },
          {
            "id": "e-al",
            "t": "text",
            "text": "already = xong rồi, sớm hơn",
            "x": 7932,
            "y": 395,
            "size": 48,
            "at": "l1:already"
          },
          {
            "id": "e-y",
            "t": "text",
            "text": "yet = chưa (phủ định, câu hỏi)",
            "x": 7932,
            "y": 460,
            "size": 48,
            "at": "l1:yet",
            "hl": [
              {
                "text": "yet",
                "at": "l1:yet"
              }
            ]
          },
          {
            "id": "e-m1",
            "t": "text",
            "text": "“I've just merged the fix.”",
            "x": 7932,
            "y": 530,
            "size": 30,
            "at": "l2:merged",
            "font": "base"
          },
          {
            "id": "e-m2",
            "t": "text",
            "text": "“I've already finished the unit tests.”",
            "x": 7932,
            "y": 572,
            "size": 30,
            "at": "l2:already",
            "font": "base"
          },
          {
            "id": "e-m3",
            "t": "text",
            "text": "“I haven't deployed it yet.”",
            "x": 7932,
            "y": 614,
            "size": 30,
            "at": "l3:deployed",
            "font": "base"
          },
          {
            "id": "e-m4",
            "t": "text",
            "text": "“I've fixed three bugs this week.”",
            "x": 7932,
            "y": 656,
            "size": 30,
            "at": "l3:fixed",
            "font": "base"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Test-English — Past simple or present perfect? (B1)",
            "x": 7932,
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
          "say": "Test-English: the present perfect loves just, already, yet, and times like today or this week.",
          "sub": "Test-English: hiện tại hoàn thành hay đi với just, already, yet, và các mốc chưa hết như today, this week.",
          "keys": [
            "just, already, yet"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "I've just merged the fix. I've already finished the unit tests.",
          "sub": "“I've just merged the fix.” “I've already finished the unit tests.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "I haven't deployed it yet. I've fixed three bugs this week. The tense for fresh news.",
          "sub": "“I haven't deployed it yet.” “I've fixed three bugs this week.” Thì của tin nóng hổi.",
          "keys": [
            "tin nóng hổi"
          ]
        }
      ],
      "ref": "p9,p10"
    },
    {
      "id": "s11",
      "module": "BRK-04",
      "data": {
        "title": "Câu của Thảo",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "I finish the sign up page. I not test on mobile.",
        "right": "I've just finished the page, but I haven't tested it yet.",
        "wrongIllus": "face-with-spiral-eyes",
        "rightIllus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: I finish, I not test.",
          "sub": "Trước: I finish, I not test."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: just finished, not tested yet.",
          "sub": "Sau: vừa xong, nhưng chưa test.",
          "keys": [
            "vừa xong"
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
            "at": "l2",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-k",
            "t": "text",
            "text": "just: vừa xong · yet: chưa xong",
            "x": 8812,
            "y": 690,
            "size": 44,
            "at": "l2:Just",
            "color": "accent",
            "hl": [
              {
                "text": "yet: chưa xong",
                "at": "l2:yet"
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
          "say": "I've just finished the sign up page, but I haven't tested it on mobile yet.",
          "sub": "Mình vừa làm xong trang đăng ký, nhưng chưa test trên điện thoại.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One sentence: what's done, what's missing. Just for done, yet for not done.",
          "sub": "Một câu: cái đã xong, cái còn thiếu. Just cho việc vừa xong, yet cho việc chưa xong.",
          "keys": [
            "Just",
            "yet"
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
            "text": "③ Thứ Tư 9:00 · Hôm nay",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop three"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
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
            "at": "l1:Wednesday",
            "caption": "Thứ Tư 9:00 · stand-up",
            "icon": "laptop"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Today I'm working on…",
            "x": 60,
            "y": 1260,
            "size": 56,
            "at": "l2:working on",
            "color": "accent",
            "hl": [
              {
                "text": "I'm working on",
                "at": "l2:working on"
              }
            ]
          },
          {
            "id": "f-1b",
            "t": "text",
            "text": "“…the order history page.”",
            "x": 100,
            "y": 1340,
            "size": 36,
            "at": "l2:order",
            "font": "base"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Việc cũ: I'm still working on…",
            "x": 60,
            "y": 1420,
            "size": 46,
            "at": "l3:still",
            "hl": [
              {
                "text": "still",
                "at": "l3:still"
              }
            ]
          },
          {
            "id": "f-2b",
            "t": "text",
            "text": "“I expect to finish it today.”",
            "x": 100,
            "y": 1490,
            "size": 36,
            "at": "l3:expect",
            "font": "base"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Khung câu hỏi: Dan Radigan, Atlassian — What is a stand up meeting",
            "x": 60,
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
          "say": "Stop three, Wednesday. Atlassian's second question: what am I working on today?",
          "sub": "Chặng ba, thứ Tư. Câu hỏi thứ hai của Atlassian: hôm nay mình làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Today I'm working on the order history page.",
          "sub": "Hôm nay mình làm trang lịch sử đơn hàng.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "And instead of same as yesterday: I'm still working on the payment feature. I expect to finish it today.",
          "sub": "Thay cho “như hôm qua”: mình vẫn đang làm tính năng thanh toán, dự kiến xong trong hôm nay.",
          "keys": [
            "dự kiến xong trong hôm nay"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Same answer, the question's own words. Like returning a ball the way it came.",
          "sub": "Trả lời bằng chính cấu trúc câu hỏi. Như đỡ bóng trả về đúng đường bóng tới."
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
          }
        ],
        "items": [
          {
            "id": "f-3",
            "t": "text",
            "text": "Phụ thuộc người khác? Nói thứ tự",
            "x": 60,
            "y": 1590,
            "size": 46,
            "at": "l1:depends",
            "hl": [
              {
                "text": "thứ tự",
                "at": "l1:order"
              }
            ]
          },
          {
            "id": "f-3b",
            "t": "text",
            "text": "After Thảo's review → staging",
            "x": 60,
            "y": 1665,
            "size": 50,
            "at": "l2:review",
            "color": "accent"
          },
          {
            "id": "f-3c",
            "t": "text",
            "text": "ai trước · ai sau · ai làm tiếp",
            "x": 60,
            "y": 1740,
            "size": 42,
            "at": "l3:next",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "If today depends on someone else, say the order.",
          "sub": "Nếu việc hôm nay phụ thuộc người khác, nói luôn thứ tự.",
          "keys": [
            "thứ tự"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "After Thảo's review, I'll deploy it to staging.",
          "sub": "Sau khi Thảo review xong, mình sẽ đưa lên môi trường staging.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Now everyone sees what goes first, what goes next, and who acts next.",
          "sub": "Giờ cả nhóm thấy việc nào trước, việc nào sau, và ai làm gì tiếp theo."
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s15",
      "module": "BRK-07",
      "data": {
        "question": "Đúng thì rồi, sao Sam vẫn chưa biết có kịp không?",
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
          "say": "Perfect tenses, and Sam still can't tell if Friday is safe?",
          "sub": "Đúng thì rồi, sao chị Sam vẫn chưa biết có kịp thứ Sáu không?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
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
            "at": "l3",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "④ Thứ Năm 9:00 · Sprint Goal",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "credit-card"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
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
            "at": "l2:goal",
            "caption": "Thứ Năm 9:00 · ba câu, ba mươi giây",
            "icon": "credit-card"
          },
          {
            "id": "g-goal",
            "t": "text",
            "text": "Goal: “Users can pay by card”",
            "x": 2028,
            "y": 1255,
            "size": 46,
            "at": "l2:pay by card",
            "hl": [
              {
                "text": "pay by card",
                "at": "l2:card"
              }
            ]
          },
          {
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1350,
            "w": 44,
            "h": 44,
            "at": "l3:validation",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1332,
            "size": 56,
            "at": "l3:validation+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "Hôm qua: card form validation",
            "x": 2093,
            "y": 1342,
            "size": 44,
            "at": "l3:validation+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1435,
            "w": 44,
            "h": 44,
            "at": "l4:gateway",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1417,
            "size": 56,
            "at": "l4:gateway+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "Hôm nay: payment gateway",
            "x": 2093,
            "y": 1427,
            "size": 44,
            "at": "l4:gateway+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1520,
            "w": 44,
            "h": 44,
            "at": "l5:blockers",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1502,
            "size": 56,
            "at": "l5:blockers+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "No blockers so far",
            "x": 2093,
            "y": 1512,
            "size": 44,
            "at": "l5:blockers+200"
          },
          {
            "id": "g-30",
            "t": "text",
            "text": "3 câu ≈ 30 giây",
            "x": 2028,
            "y": 1605,
            "size": 56,
            "at": "l6:thirty",
            "color": "accent",
            "hl": [
              {
                "text": "30 giây",
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
          "say": "Stop four, Thursday. The Sprint Goal is the only goal of the sprint. Every sentence serves it.",
          "sub": "Chặng bốn, thứ Năm. Sprint Goal là mục tiêu duy nhất của sprint. Mỗi câu đều phục vụ nó.",
          "keys": [
            "mục tiêu duy nhất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Dũng's team goal: users can pay by card.",
          "sub": "Mục tiêu của nhóm Dũng: người dùng trả được bằng thẻ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Yesterday I finished the card form validation.",
          "sub": "Hôm qua mình làm xong phần kiểm tra dữ liệu thẻ.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Today I'm connecting it to the payment gateway, the last step for our sprint goal.",
          "sub": "Hôm nay mình nối nó với cổng thanh toán, bước cuối cho mục tiêu sprint."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "No blockers so far.",
          "sub": "Đến giờ chưa có vướng mắc.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Three sentences, about thirty seconds. Sam can do the maths on Friday herself.",
          "sub": "Ba câu, khoảng ba mươi giây. Chị Sam tự tính được thứ Sáu có kịp không."
        }
      ],
      "ref": "p15,p16"
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
            "id": "g-q",
            "t": "text",
            "text": "Câu này giúp mục tiêu ra sao?",
            "x": 2028,
            "y": 1690,
            "size": 46,
            "at": "l1:help",
            "hl": [
              {
                "text": "giúp mục tiêu",
                "at": "l1:help"
              }
            ]
          },
          {
            "id": "g-tk",
            "t": "text",
            "text": "“the card form, ticket 312”",
            "x": 2908,
            "y": 1780,
            "size": 40,
            "at": "l3:three twelve",
            "hl": [
              {
                "text": "ticket 312",
                "at": "l3:three twelve"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Mỗi câu một việc, nối mục tiêu",
            "x": 2028,
            "y": 1770,
            "size": 44,
            "at": "l4:sentence",
            "color": "accent",
            "hl": [
              {
                "text": "nối mục tiêu",
                "at": "l4:goal"
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
          "say": "Each sentence quietly answers: how does this help the sprint goal?",
          "sub": "Mỗi câu ngầm trả lời: việc này giúp mục tiêu sprint ra sao?",
          "keys": [
            "giúp mục tiêu sprint ra sao"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Updating a library, cleaning code? One short phrase, or skip it.",
          "sub": "Cập nhật thư viện, dọn code? Một cụm ngắn, hoặc bỏ qua."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Need a ticket? Name first, number once: the card form, ticket three twelve.",
          "sub": "Cần nhắc ticket? Tên trước, số một lần: “the card form, ticket 312”.",
          "keys": [
            "Tên trước, số một lần"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: one sentence, one task, every task tied to the goal.",
          "sub": "Rút ra: mỗi câu một việc, mỗi việc nối với mục tiêu.",
          "keys": [
            "mỗi việc nối với mục tiêu"
          ]
        }
      ],
      "ref": "p15,p17,p18"
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑤ Thứ Sáu 9:00 · Đang chậm",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "laptop",
                "snail"
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
            "at": "l1:staging",
            "caption": "Thứ Sáu 9:00 · staging trả dữ liệu lạ",
            "icon": "snail"
          },
          {
            "id": "h-o",
            "t": "text",
            "text": "Openness: cởi mở cả khó khăn",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l4:Openness",
            "hl": [
              {
                "text": "Openness",
                "at": "l4:Openness"
              }
            ]
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "It's taking longer than I expected",
            "x": 3996,
            "y": 1350,
            "size": 42,
            "at": "l2:longer",
            "color": "accent",
            "hl": [
              {
                "text": "taking longer",
                "at": "l2:longer"
              }
            ]
          },
          {
            "id": "h-1b",
            "t": "text",
            "text": "“…because the API returns different data on staging.”",
            "x": 3996,
            "y": 1420,
            "size": 26,
            "at": "l2:staging",
            "font": "base"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "I think I need one more day",
            "x": 3996,
            "y": 1490,
            "size": 42,
            "at": "l3:one more day",
            "color": "accent",
            "hl": [
              {
                "text": "one more day",
                "at": "l3:one more day"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Giá trị Openness: The 2020 Scrum Guide",
            "x": 3996,
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
          "say": "Stop five, Friday. On staging, the API suddenly returns strange data.",
          "sub": "Chặng năm, thứ Sáu. Trên staging, API bỗng trả về dữ liệu lạ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "It's taking longer than I expected, because the API returns different data on staging.",
          "sub": "Việc này lâu hơn mình nghĩ, vì API trả dữ liệu khác trên staging.",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "I think I need one more day.",
          "sub": "Mình nghĩ cần thêm một ngày."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "This time, he says it early. That's Openness, a Scrum value: open about work and its problems.",
          "sub": "Lần này anh nói sớm. Đó là Openness, giá trị Scrum: cởi mở cả công việc lẫn khó khăn.",
          "keys": [
            "nói sớm"
          ]
        }
      ],
      "ref": "p19"
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
            "id": "h-bl",
            "t": "text",
            "text": "Bị người khác chặn? → bài sau",
            "x": 3996,
            "y": 1590,
            "size": 44,
            "at": "l1:blocks",
            "color": "muted"
          },
          {
            "id": "h-hl",
            "t": "text",
            "text": "Khách hỏi “How long?” → bài ước lượng",
            "x": 3996,
            "y": 1660,
            "size": 40,
            "at": "l2:How long",
            "color": "muted"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Chậm thì nói sớm, kèm lý do",
            "x": 3996,
            "y": 1740,
            "size": 52,
            "at": "l3:early",
            "color": "accent",
            "hl": [
              {
                "text": "nói sớm",
                "at": "l3:early"
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
          "say": "Slow because someone else blocks you? That's a blocker, with its own lesson next.",
          "sub": "Chậm vì bị người khác hay hệ thống chặn? Đó là vướng mắc, có cách nói riêng ở bài sau."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And when the client asks how long it will take, there's an estimating lesson too.",
          "sub": "Còn khi khách hỏi bao giờ xong, có bài riêng về ước lượng an toàn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: late? Say it early, with the reason. Early news gives the team time.",
          "sub": "Rút ra: chậm thì nói sớm, kèm lý do. Tin sớm cho cả nhóm thời gian xoay.",
          "keys": [
            "nói sớm, kèm lý do"
          ]
        }
      ],
      "ref": "p20,p21"
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
            "at": "l5",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Thứ Năm tuần sau · 9:00",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Thursday"
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
                  "id": "sam",
                  "side": "right"
                },
                {
                  "id": "dung",
                  "side": "left",
                  "face": "happy",
                  "pose": "explain"
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
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:call",
            "caption": "Thứ Năm tuần sau 9:00 · cùng câu hỏi",
            "icon": "laptop"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "finished ✓ · I'm working on ✓",
            "x": 5964,
            "y": 1270,
            "size": 46,
            "at": "l3:finished",
            "color": "accent"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "sprint goal ✓ · one more day ✓",
            "x": 5964,
            "y": 1350,
            "size": 46,
            "at": "l4:goal",
            "color": "accent"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "Chậm thì… phô ra sớm",
            "x": 5964,
            "y": 1510,
            "size": 56,
            "at": "l6:early",
            "color": "accent",
            "hl": [
              {
                "text": "phô ra sớm",
                "at": "l6:early"
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
          "say": "Thursday next week, nine a.m. Same call, same question.",
          "sub": "Thứ Năm tuần sau, chín giờ sáng. Vẫn cuộc gọi ấy, vẫn câu hỏi ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Dũng, is the order history page still on track for Friday?",
          "sub": "Dũng ơi, trang lịch sử đơn hàng vẫn kịp thứ Sáu chứ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Yesterday I finished the filters. Today I'm working on the export button.",
          "sub": "Hôm qua mình làm xong bộ lọc. Hôm nay mình làm nút xuất file.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "It's the last part for our sprint goal, but I need one more day for testing.",
          "sub": "Đây là phần cuối cho mục tiêu sprint, nhưng mình cần thêm một ngày để test."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "sam",
          "say": "Thanks for telling us early. We'll plan around it.",
          "sub": "Cảm ơn đã báo sớm. Cả nhóm sẽ xếp kế hoạch theo.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Show the good, hide the bad? In a stand-up, show the slow part early too.",
          "sub": "“Tốt đẹp phô ra, xấu xa đậy lại”? Ở stand-up, chỗ chậm cũng phô ra sớm.",
          "keys": [
            "phô ra sớm"
          ]
        }
      ],
      "ref": "p13,p19"
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
            "at": "l4:end",
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l5",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l6",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l7",
            "fit": "G",
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
            "text": "Tóm lại: đúng việc, đúng thì",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:task"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1250,
            "w": 44,
            "h": 44,
            "at": "l2:past simple",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1232,
            "size": 56,
            "at": "l2:past simple+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Hôm qua: quá khứ đơn",
            "x": 7997,
            "y": 1242,
            "size": 44,
            "at": "l2:past simple+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1332,
            "w": 44,
            "h": 44,
            "at": "l2:just",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1314,
            "size": 56,
            "at": "l2:just+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Vừa xong: I've just…",
            "x": 7997,
            "y": 1324,
            "size": 44,
            "at": "l2:just+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1414,
            "w": 44,
            "h": 44,
            "at": "l3:yet",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1396,
            "size": 56,
            "at": "l3:yet+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Chưa xong: I haven't… yet",
            "x": 7997,
            "y": 1406,
            "size": 44,
            "at": "l3:yet+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1496,
            "w": 44,
            "h": 44,
            "at": "l3:working on",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1478,
            "size": 56,
            "at": "l3:working on+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Today I'm working on…",
            "x": 7997,
            "y": 1488,
            "size": 44,
            "at": "l3:working on+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1578,
            "w": 44,
            "h": 44,
            "at": "l4:goal",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1560,
            "size": 56,
            "at": "l4:goal+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Nối Sprint Goal",
            "x": 7997,
            "y": 1570,
            "size": 44,
            "at": "l4:goal+200"
          },
          {
            "id": "j-c5",
            "t": "box",
            "x": 7932,
            "y": 1660,
            "w": 44,
            "h": 44,
            "at": "l4:late",
            "stroke": 5
          },
          {
            "id": "j-k5",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1642,
            "size": 56,
            "at": "l4:late+600",
            "color": "accent"
          },
          {
            "id": "j-l5",
            "t": "text",
            "text": "Chậm: nói sớm, kèm lý do",
            "x": 7997,
            "y": 1652,
            "size": 44,
            "at": "l4:late+200"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 7504,
            "y": 40,
            "at": "l5:tense"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9472,
            "y": 40,
            "at": "l6:yet"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3568,
            "y": 1130,
            "at": "l7:goal"
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
          "say": "So, a short update depends on the right task and the right tense, not big words.",
          "sub": "Tóm lại, phần nói gọn hay không là nhờ chọn đúng việc, đúng thì, chứ không phải vốn từ.",
          "keys": [
            "đúng việc, đúng thì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yesterday: past simple. Fresh news: I've just.",
          "sub": "Hôm qua: quá khứ đơn. Tin vừa xong: I've just."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not done: I haven't, yet. Today: I'm working on.",
          "sub": "Chưa xong: I haven't… yet. Hôm nay: I'm working on."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Tie it to the sprint goal, and if you're late, say it early.",
          "sub": "Nối với Sprint Goal, và chậm thì nói sớm.",
          "keys": [
            "nói sớm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Finished time, finished tense.",
          "sub": "Mốc đã qua, thì quá khứ."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Just for done, yet for not done.",
          "sub": "Just cho việc vừa xong, yet cho việc chưa xong."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "And every sentence serves the goal.",
          "sub": "Và mỗi câu phục vụ mục tiêu."
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Try now: tonight, write three sentences. Past simple, I'm working on, and blockers. Read them aloud twice.",
          "sub": "Làm ngay: tối nay viết ba câu: một câu quá khứ đơn, một câu I'm working on, một câu vướng mắc, rồi đọc to hai lần.",
          "keys": [
            "đọc to hai lần"
          ]
        },
        {
          "id": "l9",
          "lang": "en",
          "who": "det",
          "say": "Next up: how to tell the team you're blocked.",
          "sub": "Bài tiếp theo: bị vướng việc thì nói với team thế nào.",
          "keys": [
            "bị vướng việc"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p21,outro"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "Why is yesterday I have finished the API incorrect?",
        "options": [
          "Because a finished time like yesterday needs the past simple, not have finished",
          "Because the word API cannot be used in a sentence about yesterday",
          "Because you must always say the date instead of using the word yesterday"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "spiral-calendar",
        "why": "Yesterday là mốc đã kết thúc nên câu đúng là “Yesterday I finished the API.” Người nghe vẫn hiểu câu sai, nhưng câu đúng gọn và tự tin hơn."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Why is yesterday I have finished the API incorrect?",
          "sub": "Vì sao câu “Yesterday I have finished the API” sai?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Because a finished time like yesterday needs the past simple, not have finished.",
          "sub": "Mốc đã kết thúc như yesterday cần quá khứ đơn."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Dũng's tuxedo sentence, remember? Yesterday I finished. Done.",
          "sub": "Nhớ câu “mặc vest” của Dũng chứ? Yesterday I finished. Xong."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[12]"
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
          "say": "Three sentences tonight, read aloud twice. Then try the forty questions below.",
          "sub": "Tối nay ba câu, đọc to hai lần. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144. Hook HOOK-22 (câu thoại bị cắt): Thứ Năm 9:00 Sam hỏi “still on track for Friday?”, Dũng “Well, actually, the payment gateway is…” — cắt, tua ba buổi “Same as yesterday” (p2), nói trọn “two days behind” ở s02 (< 90 s). Dòng thời gian: tuần sau của Dũng (T2 8:55 quá khứ đơn + “Khoan đã!” Yesterday I have finished → hai loại mốc → T3 9:00 Thảo just/yet → T4 hôm nay, sau review của Thảo → T5 Sprint Goal “Users can pay by card”, ba câu ~30 giây → T6 báo chậm sớm → Thứ Năm tuần sau 9:00 khép vòng). Nhân vật: Dũng, Thảo, Sam. Tục ngữ: “Tốt đẹp phô ra, xấu xa đậy lại” → “chỗ chậm cũng phô ra sớm”. Cảnh ngắt nhịp: BRK-08 (tuần), BRK-04 (Trước/Sau câu của Thảo), BRK-07 (rehook). Câu đố questions[12].",
  "loop": {
    "open": "s00",
    "close": "s20"
  }
};
