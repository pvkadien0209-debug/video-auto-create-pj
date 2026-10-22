// keep-your-mind-steady-while-unemployed--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "keep-your-mind-steady-while-unemployed--w01",
  "hook": "HOOK-19",
  "unit": {
    "audience": "graduates-still-job-hunting",
    "slug": "keep-your-mind-steady-while-unemployed",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Giữ tinh thần khi chờ việc và bị hỏi han ở nhà thế nào?",
    "series": "Chưa có việc không phải dấu chấm hết — kế hoạch 90 ngày cho người mới tốt nghiệp"
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
            "y": 110,
            "size": 200,
            "at": "l1"
          },
          {
            "id": "a-n1",
            "t": "text",
            "text": "“Yêu cầu: có kinh nghiệm”",
            "x": 320,
            "y": 130,
            "size": 56,
            "at": "l1:experience",
            "color": "coral",
            "hl": [
              {
                "text": "có kinh nghiệm",
                "at": "l1:experience"
              }
            ]
          },
          {
            "id": "a-n2",
            "t": "text",
            "text": "Ting! “… có kinh nghiệm”",
            "x": 320,
            "y": 240,
            "size": 44,
            "at": "l2:Another",
            "color": "muted"
          },
          {
            "id": "a-n3",
            "t": "text",
            "text": "Ting! “… có kinh nghiệm”",
            "x": 320,
            "y": 320,
            "size": 44,
            "at": "l2:another+300",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Ting! Eleven p.m. A new job ad: experience required.",
          "sub": "Ting! Mười một giờ đêm. Tin tuyển dụng mới: yêu cầu có kinh nghiệm.",
          "keys": [
            "yêu cầu có kinh nghiệm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ting! Another. And another. Each one a tiny punch.",
          "sub": "Ting! Thêm tin nữa. Rồi tin nữa. Mỗi tin là một cú đấm nhỏ."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "ting",
          "offsetMs": 0
        },
        {
          "at": "l2",
          "key": "ting",
          "offsetMs": 0
        }
      ],
      "ref": "intro,p9"
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
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 600
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
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "sad"
                }
              ],
              "props": [
                "mobile-phone",
                "crescent-moon"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "caption": "Chủ nhật · 23:00 · trên giường",
            "icon": "crescent-moon"
          },
          {
            "id": "a-sch",
            "t": "text",
            "text": "Đi học: lịch chia ngày hộ",
            "x": 60,
            "y": 450,
            "size": 44,
            "at": "l3:timetable"
          },
          {
            "id": "a-no",
            "t": "text",
            "text": "Ra trường: ngày không hình dạng",
            "x": 60,
            "y": 520,
            "size": 44,
            "at": "l3:no shape",
            "color": "coral",
            "hl": [
              {
                "text": "không hình dạng",
                "at": "l3:no shape"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Sau cơn mưa trời lại sáng”",
            "x": 60,
            "y": 620,
            "size": 52,
            "at": "l4:rain",
            "color": "accent",
            "hl": [
              {
                "text": "trời lại sáng",
                "at": "l4:clears"
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
          "say": "Meet Thảo again. Accounting graduate, five months of waiting, phone in bed.",
          "sub": "Gặp lại Thảo. Cử nhân kế toán, năm tháng chờ việc, ôm điện thoại trên giường."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Every ad wants experience. How do I get experience without a job?",
          "sub": "Tin nào cũng đòi kinh nghiệm. Không có việc thì lấy đâu ra kinh nghiệm?",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "At school, the timetable shaped your day. Now days have no shape, and worry fills every gap.",
          "sub": "Hồi đi học, lịch học chia ngày hộ bạn. Giờ ngày không có hình dạng, nỗi lo lấp mọi khoảng trống.",
          "keys": [
            "nỗi lo lấp mọi khoảng trống"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "They say after the rain, the sky clears. True. But meanwhile, you need an umbrella.",
          "sub": "Người ta nói: “Sau cơn mưa trời lại sáng.” Đúng. Nhưng trong lúc chờ, cần một cái ô.",
          "keys": [
            "cần một cái ô"
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
      "ref": "p1"
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
            "text": "Giữ tinh thần thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:steady",
            "hl": [
              {
                "text": "Giữ tinh thần",
                "at": "l1:steady"
              }
            ]
          },
          {
            "id": "b-16",
            "t": "text",
            "text": "1,6 triệu thanh niên",
            "x": 2028,
            "y": 165,
            "size": 60,
            "at": "l2:million",
            "color": "accent",
            "hl": [
              {
                "text": "1,6 triệu",
                "at": "l2:million"
              }
            ]
          },
          {
            "id": "b-16s",
            "t": "text",
            "text": "không việc, không học · quý III/2026",
            "x": 2028,
            "y": 255,
            "size": 40,
            "at": "l2:study"
          },
          {
            "id": "b-up",
            "t": "text",
            "text": "tăng sau mùa tốt nghiệp",
            "x": 2028,
            "y": 320,
            "size": 40,
            "at": "l3:after"
          },
          {
            "id": "b-al",
            "t": "text",
            "text": "→ không chỉ mình mình",
            "x": 2028,
            "y": 395,
            "size": 48,
            "at": "l3:only",
            "color": "accent"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Cục Thống kê, quý III/2026 (VnExpress, 7/10/2026)",
            "x": 2028,
            "y": 720,
            "size": 26,
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
          "say": "So how do you keep your mind steady while you wait, and while family asks?",
          "sub": "Vậy giữ tinh thần thế nào khi chờ việc, và khi người nhà hỏi han?",
          "keys": [
            "giữ tinh thần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "First, company. In quarter three, about one point six million young people had no job and no study.",
          "sub": "Trước hết, bạn có bạn đồng hành. Quý III, khoảng 1,6 triệu thanh niên không việc làm, không đi học.",
          "keys": [
            "1,6 triệu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The number rises after graduation season. It won't end the worry, but you're not the only one.",
          "sub": "Con số tăng sau mùa tốt nghiệp. Biết vậy không hết lo, nhưng bạn không phải người duy nhất.",
          "keys": [
            "không phải người duy nhất"
          ]
        }
      ],
      "ref": "intro,p2"
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
            "id": "b-no",
            "t": "text",
            "text": "Không phải: tìm từ sáng đến tối",
            "x": 2868,
            "y": 165,
            "size": 44,
            "at": "l1:morning",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:exhausted"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: một buổi có mục tiêu",
            "x": 2868,
            "y": 255,
            "size": 48,
            "at": "l3:one",
            "color": "accent",
            "hl": [
              {
                "text": "có mục tiêu",
                "at": "l3:clear goal"
              }
            ]
          },
          {
            "id": "b-rest",
            "t": "text",
            "text": "+ vận động · việc nhà · gặp người",
            "x": 2868,
            "y": 335,
            "size": 38,
            "at": "l3:moving"
          },
          {
            "id": "b-k",
            "t": "text",
            "text": "Ngày có khung, lo có chỗ dừng",
            "x": 2868,
            "y": 440,
            "size": 48,
            "at": "l5:frame",
            "color": "accent",
            "hl": [
              {
                "text": "lo có chỗ dừng",
                "at": "l5:stop"
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
          "say": "A common myth: real effort means searching from morning to night.",
          "sub": "Hiểu lầm thường gặp: cố gắng thật là tìm việc từ sáng đến tối."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Actually, sitting all day at job sites leaves you exhausted, and quick to apply in a rush.",
          "sub": "Thực ra, ngồi cả ngày trước trang tuyển dụng chỉ làm bạn kiệt sức và dễ nộp vội.",
          "keys": [
            "kiệt sức"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Better: one session with a clear goal. The rest for moving, chores and seeing people.",
          "sub": "Tốt hơn: một buổi có mục tiêu rõ. Phần còn lại để vận động, việc nhà, gặp người khác.",
          "keys": [
            "một buổi có mục tiêu rõ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Effort is measured by the quality of your work, not the hours you spend worrying.",
          "sub": "Cố gắng đo bằng chất lượng việc làm, không phải số giờ ngồi lo."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A day with a frame gives worry a place to stop.",
          "sub": "Ngày có khung thì lo có chỗ dừng.",
          "keys": [
            "lo có chỗ dừng"
          ]
        }
      ],
      "ref": "p3,p4"
    },
    {
      "id": "s04",
      "module": "BRK-06",
      "data": {
        "title": "Năm cái ô che mưa",
        "items": [
          {
            "illus": "spiral-calendar",
            "text": "Lịch ngày"
          },
          {
            "illus": "alarm-clock",
            "text": "Giờ đọc tin"
          },
          {
            "illus": "speech-balloon",
            "text": "Câu trả lời ngắn"
          },
          {
            "illus": "brain",
            "text": "Kỹ năng nhỏ"
          },
          {
            "illus": "people-hugging",
            "text": "Người hỗ trợ"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A daily frame, set hours for job ads, short answers, small skills, and support.",
          "sub": "Lịch ngày, giờ cố định đọc tin, câu trả lời ngắn, vài kỹ năng nhỏ, và người hỗ trợ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Five umbrellas. One week to open them.",
          "sub": "Năm cái ô. Một tuần để mở hết.",
          "keys": [
            "Năm cái ô"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
            "at": "l4",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Hai · Lịch ngày",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Monday"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "thinking"
                }
              ],
              "props": [
                "spiral-calendar",
                "pencil"
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
            "at": "l1:Monday",
            "caption": "Thứ Hai · 7:00 · tờ lịch dán tường",
            "icon": "spiral-calendar"
          },
          {
            "id": "c-job",
            "t": "text",
            "text": "Tìm việc = việc bán thời gian",
            "x": 3996,
            "y": 160,
            "size": 46,
            "at": "l1:part-time",
            "hl": [
              {
                "text": "bán thời gian",
                "at": "l1:part-time"
              }
            ]
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 260,
            "w": 44,
            "h": 44,
            "at": "l2:wake",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 246,
            "size": 56,
            "at": "l2:wake+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Dậy giờ cố định, cả cuối tuần",
            "x": 4062,
            "y": 250,
            "size": 40,
            "at": "l2:wake+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 338,
            "w": 44,
            "h": 44,
            "at": "l2:morning",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 324,
            "size": 56,
            "at": "l2:morning+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Sáng: 2–3 tiếng sửa hồ sơ",
            "x": 4062,
            "y": 328,
            "size": 40,
            "at": "l2:morning+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 416,
            "w": 44,
            "h": 44,
            "at": "l4:afternoon",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 402,
            "size": 56,
            "at": "l4:afternoon+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Chiều: học, việc tạm, việc nhà",
            "x": 4062,
            "y": 406,
            "size": 40,
            "at": "l4:afternoon+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 494,
            "w": 44,
            "h": 44,
            "at": "l4:outside",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 480,
            "size": 56,
            "at": "l4:outside+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Ra ngoài vận động một lần",
            "x": 4062,
            "y": 484,
            "size": 40,
            "at": "l4:outside+200"
          },
          {
            "id": "c-c4",
            "t": "box",
            "x": 3996,
            "y": 572,
            "w": 44,
            "h": 44,
            "at": "l5:evening",
            "stroke": 5
          },
          {
            "id": "c-k4",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 558,
            "size": 56,
            "at": "l5:evening+600",
            "color": "accent"
          },
          {
            "id": "c-l4",
            "t": "text",
            "text": "Tối: nghỉ, không mở tin",
            "x": 4062,
            "y": 562,
            "size": 40,
            "at": "l5:evening+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Monday. Treat job hunting like a part-time job, with a start time and an end time.",
          "sub": "Thứ Hai. Coi tìm việc như một việc bán thời gian, có giờ vào ca và giờ tan ca.",
          "keys": [
            "việc bán thời gian"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Wake at a fixed time, weekends too. Morning: two to three hours on applications.",
          "sub": "Dậy giờ cố định, kể cả cuối tuần. Buổi sáng: hai đến ba tiếng tìm và sửa hồ sơ.",
          "keys": [
            "hai đến ba tiếng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "It doesn't need to be perfect. Just a frame to come back to each morning.",
          "sub": "Không cần hoàn hảo. Chỉ cần một cái khung để sáng nào cũng quay về.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Afternoon: a skill, a temp job or chores. And get outside to move at least once.",
          "sub": "Buổi chiều: học một kỹ năng, làm việc tạm hoặc việc nhà. Ít nhất một lần ra ngoài vận động."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Evening: rest. No job sites.",
          "sub": "Buổi tối: nghỉ. Không mở trang tuyển dụng.",
          "keys": [
            "Không mở trang tuyển dụng"
          ]
        }
      ],
      "ref": "p5,p6"
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
            "text": "② Thứ Ba · Lịch của Dũng",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Tuesday"
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
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "running-shoe"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "Thứ Ba · phòng của Dũng",
            "icon": "laptop"
          },
          {
            "id": "d-h0",
            "t": "text",
            "text": "7:00",
            "x": 5964,
            "y": 160,
            "size": 46,
            "at": "l3:seven",
            "color": "ink"
          },
          {
            "id": "d-w0",
            "t": "text",
            "text": "dậy",
            "x": 6164,
            "y": 165,
            "size": 40,
            "at": "l3:seven+200"
          },
          {
            "id": "d-h1",
            "t": "text",
            "text": "8–10",
            "x": 5964,
            "y": 240,
            "size": 46,
            "at": "l3:eight",
            "color": "ink"
          },
          {
            "id": "d-w1",
            "t": "text",
            "text": "đọc tin, sửa 1 CV",
            "x": 6164,
            "y": 245,
            "size": 40,
            "at": "l3:eight+200"
          },
          {
            "id": "d-h2",
            "t": "text",
            "text": "10–11",
            "x": 5964,
            "y": 320,
            "size": 46,
            "at": "l3:ten to eleven",
            "color": "ink"
          },
          {
            "id": "d-w2",
            "t": "text",
            "text": "nhắn 1 người trong nghề",
            "x": 6164,
            "y": 325,
            "size": 40,
            "at": "l3:ten to eleven+200"
          },
          {
            "id": "d-h3",
            "t": "text",
            "text": "Chiều",
            "x": 5964,
            "y": 400,
            "size": 46,
            "at": "l4:afternoon",
            "color": "ink"
          },
          {
            "id": "d-w3",
            "t": "text",
            "text": "học · chạy · nấu cơm",
            "x": 6164,
            "y": 405,
            "size": 40,
            "at": "l4:afternoon+200"
          },
          {
            "id": "d-h4",
            "t": "text",
            "text": "20:00",
            "x": 5964,
            "y": 480,
            "size": 46,
            "at": "l4:eight p.m.",
            "color": "accent"
          },
          {
            "id": "d-w4",
            "t": "text",
            "text": "tắt thông báo",
            "x": 6164,
            "y": 485,
            "size": 40,
            "at": "l4:eight p.m.+200"
          },
          {
            "id": "d-rev",
            "t": "text",
            "text": "Chủ nhật: xem lại tuần",
            "x": 5964,
            "y": 590,
            "size": 40,
            "at": "l5:Sunday",
            "hl": [
              {
                "text": "xem lại",
                "at": "l5:reviews"
              }
            ]
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Có giờ làm thì có giờ tan",
            "x": 5964,
            "y": 670,
            "size": 52,
            "at": "l6:clock out",
            "color": "accent",
            "hl": [
              {
                "text": "giờ tan",
                "at": "l6:clock out"
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
          "say": "Tuesday. Here's Dũng, Thảo's high school friend, IT graduate, champion of “ok, let's do it”.",
          "sub": "Thứ Ba. Đây là Dũng, bạn cấp ba của Thảo, cử nhân công nghệ thông tin, vua câu “Ok, làm luôn!”.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I wrote my first week already. Want to see?",
          "sub": "Mình viết xong lịch tuần đầu rồi. Xem không?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Up at seven. Eight to ten, job ads and one CV. Ten to eleven, message someone in the field.",
          "sub": "Bảy giờ dậy. Tám đến mười giờ đọc tin, sửa một CV. Mười đến mười một giờ nhắn hỏi một người trong nghề."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Afternoon: study, a run, help Mom cook. After eight p.m., job app notifications off.",
          "sub": "Chiều: học, chạy bộ, phụ mẹ nấu cơm. Sau tám giờ tối, tắt thông báo ứng dụng tuyển dụng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "On Sunday he reviews: how many CVs fixed, who he talked to.",
          "sub": "Cuối tuần Dũng xem lại: sửa được mấy CV, nói chuyện được với ai."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "If job hunting has hours, it also needs a time to clock out.",
          "sub": "Tìm việc có giờ làm thì cũng phải có giờ tan.",
          "keys": [
            "giờ tan"
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
      "ref": "p7,p8"
    },
    {
      "id": "s07",
      "module": "BRK-07",
      "data": {
        "question": "Lịch đẹp rồi. Nhưng cái ứng dụng cứ ting ting thì sao?",
        "illus": "mobile-phone"
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
          "say": "Nice schedule. But what about that app that keeps going ting?",
          "sub": "Lịch đẹp rồi. Nhưng cái ứng dụng cứ ting ting thì sao?",
          "keys": [
            "ting ting"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "ting"
        }
      ],
      "ref": "p9"
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
            "text": "③ Thứ Tư · Giờ hẹn đọc tin",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Wednesday",
            "hl": [
              {
                "text": "Giờ hẹn",
                "at": "l5:appointment"
              }
            ]
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "cooked-rice",
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:lunch",
            "caption": "Thứ Tư · giữa bữa trưa",
            "icon": "mobile-phone"
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "A: mở mỗi lần bồn chồn",
            "x": 7932,
            "y": 165,
            "size": 48,
            "at": "l3:Way A",
            "color": "coral"
          },
          {
            "id": "e-a2",
            "t": "text",
            "text": "→ lướt tiêu đề, lại buồn",
            "x": 7962,
            "y": 240,
            "size": 40,
            "at": "l3:sad",
            "color": "muted"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "B: chỉ 8–9 giờ sáng",
            "x": 7932,
            "y": 330,
            "size": 48,
            "at": "l4:eight",
            "color": "accent",
            "hl": [
              {
                "text": "8–9 giờ",
                "at": "l4:nine"
              }
            ]
          },
          {
            "id": "e-b2",
            "t": "text",
            "text": "→ đọc kỹ, lưu bảng tính, tắt",
            "x": 7962,
            "y": 405,
            "size": 40,
            "at": "l4:spreadsheet"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Mở theo giờ hẹn, không theo lo",
            "x": 7932,
            "y": 510,
            "size": 44,
            "at": "l5:appointment",
            "color": "accent",
            "hl": [
              {
                "text": "theo giờ hẹn",
                "at": "l5:appointment"
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
          "say": "Wednesday lunch. Thảo opens the app between two spoonfuls of rice.",
          "sub": "Thứ Tư, bữa trưa. Thảo mở ứng dụng giữa hai thìa cơm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Just checking. Again. Nothing new.",
          "sub": "Xem chút thôi. Lần nữa. Chẳng có gì mới.",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Way A: open it whenever she's restless, dozens of times a day, skim titles, get sad.",
          "sub": "Cách A: bồn chồn là mở, mỗi ngày mấy chục lần, lướt tiêu đề, rồi lại buồn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Way B: only eight to nine a.m. Read each ad closely, save good ones with deadlines in a spreadsheet, close.",
          "sub": "Cách B: chỉ từ tám đến chín giờ sáng. Đọc kỹ, lưu tin hợp vào bảng tính kèm hạn nộp, rồi tắt."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Fewer ads, better understood, and no title stealing her sleep. Open by appointment, not by worry.",
          "sub": "Đọc ít mà hiểu hơn, tối không bị tiêu đề nào cướp giấc. Mở tin theo giờ hẹn, đừng theo nỗi lo.",
          "keys": [
            "theo giờ hẹn"
          ]
        }
      ],
      "ref": "p9,p11,p12"
    },
    {
      "id": "s09",
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
            "id": "e-cam",
            "t": "illus",
            "name": "camera-with-flash",
            "x": 7932,
            "y": 600,
            "size": 90,
            "at": "l1:photo"
          },
          {
            "id": "e-ph",
            "t": "text",
            "text": "Ảnh nhận việc = khoảnh khắc đẹp nhất",
            "x": 8042,
            "y": 615,
            "size": 40,
            "at": "l1:best"
          },
          {
            "id": "e-hide",
            "t": "text",
            "text": "Trang làm mình tệ đi → tạm ẩn",
            "x": 8042,
            "y": 690,
            "size": 40,
            "at": "l2:hide",
            "color": "accent",
            "hl": [
              {
                "text": "tạm ẩn",
                "at": "l2:hide"
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
          "say": "Social media too. A friend's new job photo shows the best moment, not how long they waited.",
          "sub": "Mạng xã hội cũng vậy. Ảnh bạn nhận việc chỉ cho thấy khoảnh khắc đẹp nhất, không cho thấy họ đã chờ bao lâu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "If a page makes you feel worse every time, you're allowed to hide it for a few months.",
          "sub": "Trang nào mở ra là thấy tệ đi, bạn có quyền tạm ẩn nó trong mấy tháng này.",
          "keys": [
            "tạm ẩn"
          ]
        }
      ],
      "ref": "p10"
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
            "text": "④ Thứ Năm · Bữa cơm",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Thursday"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "worried"
                }
              ],
              "props": [
                "cooked-rice",
                "pot-of-food"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:dinner",
            "caption": "Thứ Năm · 19:00 · bữa cơm nhà",
            "icon": "cooked-rice"
          },
          {
            "id": "f-q",
            "t": "text",
            "text": "“Bao giờ mới đi làm?”",
            "x": 60,
            "y": 1260,
            "size": 58,
            "at": "l2:When",
            "color": "coral"
          },
          {
            "id": "f-why",
            "t": "text",
            "text": "Hỏi vì lo, không để làm khó",
            "x": 60,
            "y": 1370,
            "size": 42,
            "at": "l3:worry",
            "hl": [
              {
                "text": "vì lo",
                "at": "l3:worry"
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
          "say": "Thursday dinner. This is Bác Bình, Thảo's dad. Loves her deeply. Asks one question daily.",
          "sub": "Thứ Năm, bữa tối. Đây là bác Bình, bố Thảo. Thương con hết mực. Ngày nào cũng hỏi đúng một câu.",
          "keys": [
            "bác Bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "So... when are you starting work?",
          "sub": "Thế… bao giờ mới đi làm?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Family questions usually come from worry, not to shame you. But hearing it daily still hurts.",
          "sub": "Câu hỏi của người nhà thường xuất phát từ lo lắng, không để làm bạn xấu hổ. Nhưng nghe mãi vẫn mệt."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Thứ Năm · bữa cơm",
        "actors": [
          {
            "id": "binh",
            "side": "left"
          },
          {
            "id": "thao",
            "side": "right",
            "face": "stern"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "“Bố đừng hỏi nữa được không!”",
          "why": "Cả hai cùng buồn, và lần sau bố còn hỏi gắt hơn.",
          "rule": "Cho người nhà thấy kế hoạch, họ bớt hỏi kết quả"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Dad, can you please stop asking?!",
          "sub": "Bố đừng hỏi nữa được không!",
          "face": "stern",
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
          "say": "Now both are sad, and next time Dad asks even harder.",
          "sub": "Giờ cả hai cùng buồn, và lần sau bố còn hỏi gắt hơn.",
          "keys": [
            "hỏi gắt hơn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Quay lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "I know you're worried, Dad. I'm on a three-month plan, fixing applications every morning.",
          "sub": "Con biết bố sốt ruột. Con đang làm theo kế hoạch ba tháng, sáng nào cũng sửa hồ sơ.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "End of the month, I'll tell you the results.",
          "sub": "Cuối tháng con kể bố nghe kết quả nhé.",
          "phase": "redo"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "binh",
          "say": "Alright. End of the month.",
          "sub": "Ừ. Cuối tháng nhé.",
          "phase": "redo",
          "face": "happy"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p15,p16"
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
          }
        ],
        "items": [
          {
            "id": "f-k",
            "t": "text",
            "text": "Thấy kế hoạch → bớt hỏi",
            "x": 60,
            "y": 1470,
            "size": 42,
            "at": "l1:plan",
            "color": "accent",
            "hl": [
              {
                "text": "kế hoạch",
                "at": "l1:plan"
              }
            ]
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Bố mẹ: “nhắm 2 vị trí”",
            "x": 60,
            "y": 1570,
            "size": 40,
            "at": "l2:parents"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Họ hàng: “có tin vui cháu báo”",
            "x": 60,
            "y": 1650,
            "size": 40,
            "at": "l3:relatives"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Bạn hỏi lương: “đang chọn kỹ”",
            "x": 60,
            "y": 1730,
            "size": 40,
            "at": "l4:salary"
          },
          {
            "id": "f-sh",
            "t": "text",
            "text": "Ngắn · thật · có kế hoạch",
            "x": 900,
            "y": 1780,
            "size": 46,
            "at": "l4:end",
            "color": "accent",
            "hl": [
              {
                "text": "có kế hoạch",
                "at": "l4:end"
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
          "say": "Show family the plan, and they'll ask less about results.",
          "sub": "Cho người nhà thấy kế hoạch, họ sẽ bớt hỏi kết quả.",
          "keys": [
            "bớt hỏi kết quả"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "For parents: no job yet, but two target roles, and a chat with someone in the field this week.",
          "sub": "Với bố mẹ: chưa có việc chính thức, nhưng đang nhắm hai vị trí, tuần này có hẹn nói chuyện với người trong nghề."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "For relatives you rarely see: still finding the right job, good news coming first to you.",
          "sub": "Với họ hàng ít gặp: cháu đang tìm đúng việc hợp ngành, có tin vui cháu báo ngay ạ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "For friends asking your salary: not working yet, just choosing carefully.",
          "sub": "Với bạn hỏi lương: mình chưa đi làm, đang chọn kỹ một chút.",
          "keys": [
            "đang chọn kỹ"
          ]
        }
      ],
      "ref": "p14,p16"
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
            "text": "⑤ Thứ Sáu · “Mình vô dụng”",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday",
            "hl": [
              {
                "text": "vô dụng",
                "at": "l2:useless"
              }
            ]
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
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "sad"
                }
              ],
              "props": [
                "laptop",
                "thought-balloon"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:CV",
            "caption": "Thứ Sáu · 9:00 · đang sửa CV",
            "icon": "thought-balloon"
          },
          {
            "id": "g-who",
            "t": "text",
            "text": "WHO: 5 kỹ năng",
            "x": 2028,
            "y": 1250,
            "size": 54,
            "at": "l3:five",
            "color": "accent",
            "hl": [
              {
                "text": "5 kỹ năng",
                "at": "l3:five"
              }
            ]
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "neo vào hiện tại",
            "x": 2028,
            "y": 1330,
            "size": 40,
            "at": "l3:grounding"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "gỡ khỏi ý nghĩ khó chịu",
            "x": 2028,
            "y": 1390,
            "size": 40,
            "at": "l3:unhooking",
            "color": "accent"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "làm theo điều mình coi trọng",
            "x": 2028,
            "y": 1450,
            "size": 40,
            "at": "l3:values"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "tử tế với mình và người khác",
            "x": 2028,
            "y": 1510,
            "size": 40,
            "at": "l4:kind"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "nhường chỗ cho cảm xúc",
            "x": 2028,
            "y": 1570,
            "size": 40,
            "at": "l4:room"
          },
          {
            "id": "g-min",
            "t": "text",
            "text": "vài phút mỗi ngày",
            "x": 2028,
            "y": 1650,
            "size": 44,
            "at": "l4:few minutes",
            "hl": [
              {
                "text": "vài phút",
                "at": "l4:few minutes"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: WHO, Doing What Matters in Times of Stress",
            "x": 2868,
            "y": 1810,
            "size": 26,
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
          "say": "Friday morning. Thảo is fixing her CV. Then a visitor drops by, uninvited.",
          "sub": "Sáng thứ Sáu. Thảo đang sửa CV. Rồi một vị khách không mời ghé qua."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'm useless. Nobody needs me.",
          "sub": "Mình vô dụng. Chẳng ai cần mình.",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "WHO's stress guide teaches five skills: grounding, unhooking from hard thoughts, acting on your values,",
          "sub": "Tài liệu của WHO dạy năm kỹ năng: neo vào hiện tại, gỡ mình khỏi ý nghĩ khó chịu, làm theo điều mình coi trọng,",
          "keys": [
            "năm kỹ năng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "being kind, and making room for hard feelings. A few minutes a day each.",
          "sub": "tử tế với mình và người khác, nhường chỗ cho cảm xúc khó chịu. Mỗi kỹ năng vài phút một ngày."
        }
      ],
      "ref": "p17"
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
            "id": "g-ah",
            "t": "text",
            "text": "“À, lại là ý nghĩ ấy”",
            "x": 2028,
            "y": 1730,
            "size": 46,
            "at": "l2:there",
            "color": "accent",
            "hl": [
              {
                "text": "ý nghĩ",
                "at": "l2:thought"
              }
            ]
          },
          {
            "id": "g-arg",
            "t": "text",
            "text": "Cãi tay đôi → càng bị cuốn",
            "x": 2028,
            "y": 1795,
            "size": 40,
            "at": "l3:Arguing",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Unhooking: notice the thought, name it in your head, then bring attention back.",
          "sub": "Kỹ năng gỡ mình: nhận ra ý nghĩ, gọi tên nó trong đầu, rồi đưa sự chú ý trở lại.",
          "keys": [
            "gọi tên nó"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Ah, there's the I'm useless thought again. Back to line three.",
          "sub": "À, lại là ý nghĩ mình vô dụng. Quay về dòng thứ ba.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Arguing hard with a thought only pulls you deeper. Like wrestling in mud.",
          "sub": "Cãi tay đôi với ý nghĩ chỉ làm bạn bị cuốn sâu hơn. Như vật nhau dưới bùn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The thought may stay. But it no longer drives your day.",
          "sub": "Ý nghĩ có thể vẫn còn. Nhưng nó không còn cầm lái ngày của bạn.",
          "keys": [
            "không còn cầm lái"
          ]
        }
      ],
      "ref": "p18,p20"
    },
    {
      "id": "s15",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Gọi tên ý nghĩ, quay về việc",
        "hl": "quay về việc",
        "sub": "Một hồ sơ, một vòng đi bộ"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Name the thought. Return to the task in front of you.",
          "sub": "Gọi tên ý nghĩ, rồi quay về việc trước mặt.",
          "keys": [
            "quay về việc trước mặt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Finish one application, or take a walk.",
          "sub": "Hoàn thành một hồ sơ, hoặc ra ngoài đi bộ."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "hit"
        }
      ],
      "ref": "p20,p21"
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
            "at": "l3",
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
            "text": "⑥ Thứ Bảy · Việc nhỏ",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Saturday"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "kitchen",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "cooking",
                "pot-of-food"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "at": "l1:Saturday",
            "caption": "Thứ Bảy · 17:00 · bếp nhà",
            "icon": "cooking"
          },
          {
            "id": "h-v3",
            "t": "text",
            "text": "Chọn 3–4 giá trị",
            "x": 3996,
            "y": 1250,
            "size": 54,
            "at": "l1:three",
            "color": "accent",
            "hl": [
              {
                "text": "3–4 giá trị",
                "at": "l1:four"
              }
            ]
          },
          {
            "id": "h-w",
            "t": "text",
            "text": "→ mỗi tuần một việc nhỏ",
            "x": 3996,
            "y": 1335,
            "size": 44,
            "at": "l1:week"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Tử tế: nấu một bữa",
            "x": 3996,
            "y": 1430,
            "size": 40,
            "at": "l4:Kindness"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Biết ơn: một tin cảm ơn",
            "x": 3996,
            "y": 1500,
            "size": 40,
            "at": "l4:thank"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Học điều mới: xong một bài",
            "x": 3996,
            "y": 1570,
            "size": 40,
            "at": "l4:lesson"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: PAHO (2021), bản chuyển thể tài liệu của WHO",
            "x": 4836,
            "y": 1810,
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
          "say": "Saturday. A 2021 adaptation by PAHO suggests choosing three or four values, then one small act each week.",
          "sub": "Thứ Bảy. Bản chuyển thể 2021 của PAHO gợi ý chọn ba, bốn giá trị, rồi mỗi tuần làm một việc nhỏ hướng về chúng.",
          "keys": [
            "mỗi tuần làm một việc nhỏ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Cô Hoa, Thảo's mom, general of the kitchen.",
          "sub": "Đây là cô Hoa, mẹ Thảo, tổng tư lệnh gian bếp.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "You're cooking tonight? Then I get to sit down for once!",
          "sub": "Hôm nay con nấu à? Vậy mẹ được ngồi chơi một bữa!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Kindness to family: one dinner. Gratitude: one thank-you message. Learning: finish one lesson.",
          "sub": "Tử tế với gia đình: nấu một bữa. Biết ơn: gửi một tin cảm ơn. Học điều mới: xong một bài."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Tiny acts. But they remind Thảo who she is, beyond a job title.",
          "sub": "Việc nhỏ thôi. Nhưng nhắc Thảo mình là ai, ngoài một chức danh.",
          "keys": [
            "mình là ai"
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
            "at": "l3",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Chủ nhật · Nói ra",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
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
            "at": "l1:coffee",
            "caption": "Chủ nhật · quán cà phê đầu ngõ",
            "icon": "hot-beverage"
          },
          {
            "id": "i-weak",
            "t": "text",
            "text": "Tâm sự ≠ yếu đuối",
            "x": 5964,
            "y": 1250,
            "size": 54,
            "at": "l3:weakness",
            "color": "accent",
            "hl": [
              {
                "text": "≠ yếu đuối",
                "at": "l3:weakness"
              }
            ]
          },
          {
            "id": "i-hear",
            "t": "text",
            "text": "nghe lại suy nghĩ của mình",
            "x": 5964,
            "y": 1335,
            "size": 40,
            "at": "l3:hear"
          },
          {
            "id": "i-law",
            "t": "text",
            "text": "Tư vấn việc làm: miễn phí",
            "x": 5964,
            "y": 1420,
            "size": 38,
            "at": "l4:free",
            "hl": [
              {
                "text": "miễn phí",
                "at": "l4:free"
              }
            ]
          },
          {
            "id": "i-lsrc",
            "t": "text",
            "text": "Luật Việc làm 74/2025/QH15, hiệu lực 1/1/2026",
            "x": 5964,
            "y": 1490,
            "size": 26,
            "at": "l4",
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
          "say": "Sunday. Coffee with Dũng.",
          "sub": "Chủ nhật. Cà phê với Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Honestly? I felt the same last month. And a friend told me about an opening I never saw.",
          "sub": "Nói thật? Tháng trước mình cũng y như vậy. Rồi một đứa bạn kể cho mình một chỗ đang tuyển mà mình không hề thấy."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Talking to someone you trust isn't weakness. You hear your own thoughts, and they may know a chance you missed.",
          "sub": "Tâm sự với người tin cậy không phải yếu đuối. Bạn nghe lại suy nghĩ của mình, và người nghe có khi biết cơ hội bạn chưa thấy.",
          "keys": [
            "không phải yếu đuối"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And the Employment Law sets free job counselling. A public centre gives you one more listener who knows the market.",
          "sub": "Luật Việc làm có chính sách tư vấn việc làm miễn phí. Trung tâm dịch vụ việc làm cho bạn thêm một người lắng nghe hiểu thị trường."
        }
      ],
      "ref": "p22,p23"
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
            "at": "l1",
            "fit": [
              "i-sos",
              "i-115"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l2:end",
            "fit": "I",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "i-sos",
            "t": "text",
            "text": "Buồn, mất ngủ kéo dài → đi khám",
            "x": 5964,
            "y": 1630,
            "size": 38,
            "at": "l1:weeks",
            "color": "coral",
            "hl": [
              {
                "text": "đi khám",
                "at": "l1:psychologist"
              }
            ]
          },
          {
            "id": "i-115",
            "t": "text",
            "text": "Nguy cấp: báo người thân, gọi 115",
            "x": 5964,
            "y": 1710,
            "size": 38,
            "at": "l2:harming",
            "color": "coral",
            "hl": [
              {
                "text": "115",
                "at": "l2:one one five"
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
          "say": "If sadness, poor sleep or no appetite last for weeks, see a mental health doctor or a psychologist.",
          "sub": "Nếu buồn bã, mất ngủ, chán ăn kéo dài nhiều tuần, hãy đi khám chuyên khoa tâm thần hoặc gặp chuyên gia tâm lý.",
          "keys": [
            "đi khám"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thoughts of harming yourself? Tell family now, and call one one five or go to the nearest hospital.",
          "sub": "Nếu có ý nghĩ làm hại bản thân, nói ngay với người thân và gọi 115 hoặc đến bệnh viện gần nhất.",
          "keys": [
            "gọi 115"
          ]
        }
      ],
      "ref": "p24"
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
            "at": "l3",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Chủ nhật · 23:00 · tuần sau",
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
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone-off",
                "crescent-moon"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:bed",
            "caption": "Vẫn chiếc giường ấy · điện thoại im",
            "icon": "mobile-phone-off"
          },
          {
            "id": "j-off",
            "t": "illus",
            "name": "bell-with-slash",
            "x": 7932,
            "y": 1260,
            "size": 110,
            "at": "l1:silent"
          },
          {
            "id": "j-8",
            "t": "text",
            "text": "Hẹn đọc tin: 8:00 sáng mai",
            "x": 8062,
            "y": 1285,
            "size": 46,
            "at": "l2:eight",
            "hl": [
              {
                "text": "8:00",
                "at": "l2:eight"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Sau cơn mưa trời lại sáng”",
            "x": 7932,
            "y": 1450,
            "size": 52,
            "at": "l3:rain",
            "color": "accent"
          },
          {
            "id": "j-um",
            "t": "text",
            "text": "→ Thảo đã có ô: cái lịch",
            "x": 7932,
            "y": 1540,
            "size": 48,
            "at": "l3:umbrella",
            "color": "accent",
            "hl": [
              {
                "text": "cái lịch",
                "at": "l3:schedule"
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
          "say": "Sunday, eleven p.m., one week later. Same bed. The phone is silent.",
          "sub": "Chủ nhật, mười một giờ đêm, một tuần sau. Vẫn chiếc giường ấy. Điện thoại im lặng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Job ads? Tomorrow, eight a.m. That's our appointment.",
          "sub": "Tin tuyển dụng à? Tám giờ sáng mai. Hẹn rồi.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "After the rain, the sky clears. Still raining a bit. But Thảo has her umbrella: a schedule.",
          "sub": "“Sau cơn mưa trời lại sáng.” Mưa vẫn còn lất phất. Nhưng Thảo đã có ô: cái lịch.",
          "keys": [
            "cái lịch"
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
      "ref": "outro"
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
            "fit": "E",
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
            "at": "l5",
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
            "y": 160,
            "at": "l1+900"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8652,
            "y": 510,
            "at": "l2+900"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 780,
            "y": 1470,
            "at": "l3+900"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 2748,
            "y": 1730,
            "at": "l4+900"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung, không thay tư vấn y tế; cần hỗ trợ, gặp chuyên gia hoặc gọi 115.",
            "x": 7932,
            "y": 1805,
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
          "say": "So: give your day a frame, with a time to clock out.",
          "sub": "Tóm lại: cho ngày một cái khung, có cả giờ tan.",
          "keys": [
            "một cái khung"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Open job ads by appointment.",
          "sub": "Mở tin theo giờ hẹn.",
          "keys": [
            "theo giờ hẹn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Show family your plan.",
          "sub": "Cho người nhà thấy kế hoạch.",
          "keys": [
            "kế hoạch"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Name the thought, then return to the task.",
          "sub": "Gọi tên ý nghĩ, rồi quay về việc.",
          "keys": [
            "Gọi tên ý nghĩ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Keeping steady isn't being happy all the time. It's having a frame to come back to.",
          "sub": "Giữ tinh thần không phải lúc nào cũng vui, mà là ngày nào cũng có khung để quay về.",
          "keys": [
            "có khung để quay về"
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
        "q": "While fixing your CV, the thought that you are useless appears, what does unhooking suggest?",
        "options": [
          "Close the laptop and wait in bed until the thought goes away",
          "Stop working at once and argue with the thought until you win",
          "Notice and name the thought, then bring your attention back to the CV"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "thought-balloon",
        "why": "Nhận ra, gọi tên ý nghĩ rồi đưa sự chú ý về việc đang làm, thay vì cãi lại hay bỏ dở."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "While fixing your CV, the thought that you are useless appears, what does unhooking suggest?",
          "sub": "Đang sửa CV thì ý nghĩ mình vô dụng hiện lên, kỹ năng gỡ mình gợi ý gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Notice it, name it, and go back to the CV.",
          "sub": "Nhận ra, gọi tên, rồi quay về CV."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "The thought stays, but stops driving.",
          "sub": "Ý nghĩ còn đó, nhưng không cầm lái nữa."
        }
      ],
      "ref": "questions[30]"
    },
    {
      "id": "s22",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi viết lịch cho ngày mai"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, write tomorrow: wake time, search time, and app-off time.",
          "sub": "Tối nay, viết lịch ngày mai: giờ dậy, giờ tìm việc, giờ tắt ứng dụng tuyển dụng."
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
  "notes": "#145 bài MỚI (chuỗi graduates-still-job-hunting, bài 1 sau bài tổng) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-19 (âm thanh trước hình): tiếng “ting” ứng dụng tuyển dụng lúc 23:00, cận chiếc điện thoại, rồi mới thấy Thảo. Dòng thời gian: MỘT TUẦN của Thảo — Chủ nhật 23:00 → Thứ Hai lịch ngày (☐ p6) → Thứ Ba lịch mẫu của Dũng (🧪 p7) → Thứ Tư đọc tin theo giờ hẹn (🔀 p11) → Thứ Năm bữa cơm, bác Bình hỏi, “Khoan đã!” câu gắt → câu có kế hoạch (✍️ p15) → Thứ Sáu ý nghĩ “mình vô dụng”, WHO 5 kỹ năng, gỡ mình (p17, p18, ❓ p20) → Thứ Bảy việc nhỏ theo giá trị, nấu bữa cho cô Hoa (p19) → Chủ nhật cà phê với Dũng, trung tâm dịch vụ việc làm, dấu hiệu cần đi khám, 115 (p22–p24) → Chủ nhật 23:00 tuần sau, cùng giường, điện thoại im. Nhân vật (w145/_series/graduates-still-job-hunting.md): Thảo, Dũng, Bác Bình (bố), Cô Hoa (mẹ). Chi tiết minh hoạ tự đặt (không phải số liệu): giờ các cảnh (19:00, 17:00, 9:00), “dòng thứ ba”, chuyện bạn của Dũng kể chỗ tuyển (minh hoạ p22). Số chỉ từ bài: 1,6 triệu, 2–3 tiếng, 7:00, 8–10, 10–11, 20:00, 8–9 giờ sáng, 5 kỹ năng, 3–4 giá trị, 2021, 74/2025, 1/1/2026, 115. Ngắt nhịp: BRK-06 s04 (năm cái ô), BRK-07 s07 (rehook ting ting), BRK-02 s15 (Gọi tên ý nghĩ), DLG-01 s11. Câu neo: “Sau cơn mưa trời lại sáng” → “Thảo đã có ô: cái lịch”. Giọng ấm, không bi kịch hoá; lưu ý sức khoẻ tinh thần chung ở cảnh tóm tắt (#133). Câu đố questions[30].",
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
