// en-visa-questions-about-your-school--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "en-visa-questions-about-your-school--w01",
  "hook": "HOOK-22",
  "unit": {
    "audience": "en-us-student-visa-applicants",
    "slug": "en-visa-questions-about-your-school",
    "door": "ky-nang",
    "level": "B1",
    "title": "Trả lời 'Why this school? Why this major?' thế nào cho thuyết phục?",
    "series": "Phỏng vấn visa du học Mỹ — cho học sinh sinh viên, trả lời ngắn, thật và đủ giấy tờ"
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
            "at": "l3",
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
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up",
                "school"
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
                  "shot": "E-SHOT-07",
                  "on": "lan",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Sáu · tập phỏng vấn ở nhà",
            "icon": "school"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "“Why did you choose this university?”",
            "x": 60,
            "y": 130,
            "size": 40,
            "at": "l3:Why",
            "font": "base",
            "hl": [
              {
                "text": "this university",
                "at": "l3:university"
              }
            ]
          },
          {
            "id": "a-cut",
            "t": "text",
            "text": "“Because it is a good…”",
            "x": 60,
            "y": 260,
            "size": 60,
            "at": "l4:good",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Lan. Next Thursday, her student visa interview. Tonight, a rehearsal at home.",
          "sub": "Đây là Lan. Thứ Năm tới phỏng vấn visa du học. Tối nay, tập dượt ở nhà.",
          "keys": [
            "tập dượt ở nhà"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Playing the officer: Cô Hoa, her mum, reading from a sheet.",
          "sub": "Đóng vai viên chức là cô Hoa, mẹ Lan, cầm tờ giấy đọc câu hỏi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Why did you choose this university?",
          "sub": "Vì sao em chọn trường này?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Because it is a good…",
          "sub": "Vì đó là một trường…",
          "face": "happy",
          "stop": true
        }
      ],
      "beats": {
        "after": 300
      },
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
            "text": "Why this school? Why this major?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:school",
            "font": "base",
            "hl": [
              {
                "text": "Why this major?",
                "at": "l1:major"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "1–2 lý do cụ thể",
            "x": 2028,
            "y": 170,
            "size": 60,
            "at": "l2:specific",
            "color": "accent",
            "hl": [
              {
                "text": "cụ thể",
                "at": "l2:specific"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "nối: đã học → nghề muốn làm",
            "x": 2028,
            "y": 260,
            "size": 48,
            "at": "l2:connected"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "1–2 câu · lời của mình",
            "x": 2028,
            "y": 345,
            "size": 52,
            "at": "l3:own words",
            "hl": [
              {
                "text": "lời của mình",
                "at": "l3:own words"
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
          "say": "Why this school? Why this major? Two questions every student meets at the window.",
          "sub": "“Why this school? Why this major?” Hai câu hỏi học sinh nào cũng gặp ở ô cửa.",
          "keys": [
            "Hai câu hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Short answer: one or two specific reasons about the program, connected to what you studied and the job you want.",
          "sub": "Trả lời ngắn: một hai lý do cụ thể về chương trình, nối với điều đã học và nghề muốn làm.",
          "keys": [
            "lý do cụ thể"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In one or two sentences, in your own words.",
          "sub": "Nói trong một hai câu, bằng lời của chính mình.",
          "keys": [
            "lời của chính mình"
          ]
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
            "fit": "B",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "b-c1",
            "t": "text",
            "text": "“Why do you want to study in the United States?”",
            "x": 2028,
            "y": 440,
            "size": 30,
            "at": "l1:United States",
            "font": "base"
          },
          {
            "id": "b-c2",
            "t": "text",
            "text": "“What program will you study?”",
            "x": 2028,
            "y": 490,
            "size": 30,
            "at": "l1:program",
            "font": "base"
          },
          {
            "id": "b-dec",
            "t": "text",
            "text": "Viên chức quyết: đủ điều kiện?",
            "x": 2028,
            "y": 560,
            "size": 44,
            "at": "l2:decides",
            "hl": [
              {
                "text": "đủ điều kiện?",
                "at": "l2:qualify"
              }
            ]
          },
          {
            "id": "b-fit",
            "t": "text",
            "text": "Kế hoạch học ↔ học bạ, điểm",
            "x": 2028,
            "y": 625,
            "size": 44,
            "at": "l3:records",
            "color": "accent",
            "hl": [
              {
                "text": "học bạ",
                "at": "l3:records"
              }
            ]
          },
          {
            "id": "b-cc",
            "t": "text",
            "text": "Rõ · thật · ngắn",
            "x": 2928,
            "y": 640,
            "size": 56,
            "at": "l4:clear",
            "color": "accent",
            "hl": [
              {
                "text": "thật",
                "at": "l4:honest"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Câu hỏi thường gặp: Concordia University Texas — F-1 Visa Interview Preparation",
            "x": 2028,
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
          "say": "Concordia University Texas lists the family: why study in the United States, what program will you study.",
          "sub": "Concordia University Texas kể cả họ hàng nhà nó: vì sao học ở Mỹ, bạn học chương trình gì."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The officer decides if you qualify for a student visa.",
          "sub": "Viên chức là người quyết định bạn có đủ điều kiện nhận visa du học hay không.",
          "keys": [
            "đủ điều kiện"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Your answer shows you understand your studies, and that the plan matches your records and test scores.",
          "sub": "Câu trả lời cho thấy bạn hiểu mình sắp học gì, và kế hoạch khớp học bạ, điểm thi.",
          "keys": [
            "khớp học bạ, điểm thi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Concordia's advice: clear, honest, short.",
          "sub": "Concordia nhấn mạnh: rõ ràng, trung thực, ngắn gọn.",
          "keys": [
            "rõ ràng, trung thực, ngắn gọn"
          ]
        }
      ],
      "ref": "p1,p2,p3"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Một tuần luyện nói của Lan",
        "points": [
          {
            "label": "Thứ Sáu",
            "sub": "Vì sao chọn trường",
            "illus": "school"
          },
          {
            "label": "Thứ Bảy",
            "sub": "Vì sao chọn ngành",
            "illus": "bar-chart"
          },
          {
            "label": "Chủ nhật",
            "sub": "Vì sao học ở Mỹ",
            "illus": "statue-of-liberty"
          },
          {
            "label": "Thứ Hai",
            "sub": "Nhớ ý, không nhớ chữ",
            "illus": "memo"
          },
          {
            "label": "Thứ Tư",
            "sub": "Ghi âm, nghe lại",
            "illus": "studio-microphone"
          },
          {
            "label": "Thứ Năm",
            "sub": "Ô cửa kính",
            "illus": "passport-control"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One week of practice, six stops.",
          "sub": "Một tuần luyện nói, sáu chặng.",
          "keys": [
            "sáu chặng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Back to Friday night.",
          "sub": "Quay lại tối thứ Sáu."
        }
      ],
      "ref": "p22"
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
          },
          {
            "at": "l1",
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
            "text": "① Thứ Sáu · Vì sao trường này",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l3:Stop one"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "shrug"
                }
              ],
              "props": [
                "laptop",
                "school"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Sáu tối · vẫn buổi tập ấy",
            "icon": "school"
          },
          {
            "id": "c-bad",
            "t": "text",
            "text": "“…a good school.”",
            "x": 3996,
            "y": 170,
            "size": 56,
            "at": "l1:school",
            "color": "coral"
          },
          {
            "id": "c-badx",
            "t": "strike",
            "over": "c-bad",
            "at": "l3:any"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Lý do chỉ đúng với trường bạn",
            "x": 3996,
            "y": 270,
            "size": 44,
            "at": "l4:only",
            "hl": [
              {
                "text": "chỉ đúng",
                "at": "l4:only"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "môn học · hướng sâu · thực hành",
            "x": 3996,
            "y": 340,
            "size": 42,
            "at": "l4:course",
            "color": "muted"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "→ đọc lại trang chương trình",
            "x": 3996,
            "y": 410,
            "size": 44,
            "at": "l5:program page",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "Because it is a good school.",
          "sub": "Vì đó là một trường tốt.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Every school says it's good, dear. Even the one next to our market!",
          "sub": "Trường nào chẳng bảo mình tốt, con. Cả trường cạnh chợ nhà mình!",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Stop one. That answer fits any school on Earth, so it tells the officer nothing.",
          "sub": "Chặng một. Câu ấy lắp vào trường nào trên Trái Đất cũng vừa, nên chẳng nói gì với viên chức.",
          "keys": [
            "trường nào trên Trái Đất cũng vừa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A good reason is true only for your school: a course, a specialisation, a hands-on chance.",
          "sub": "Lý do tốt là lý do chỉ đúng với trường bạn: một môn học, một hướng chuyên sâu, một cơ hội thực hành.",
          "keys": [
            "chỉ đúng với trường bạn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So Lan reads her program page again, and picks one thing she truly cares about.",
          "sub": "Thế là Lan đọc lại trang chương trình, chọn một điều mình thật sự quan tâm."
        }
      ],
      "ref": "p4,p6"
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
            "at": "l1",
            "fit": [
              "c-v"
            ],
            "zoom": 1.3,
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
            "id": "c-s1",
            "t": "text",
            "text": "“…its program combines data science",
            "x": 3996,
            "y": 500,
            "size": 34,
            "at": "l1:combines",
            "font": "base",
            "hl": [
              {
                "text": "combines",
                "at": "l1:combines"
              }
            ]
          },
          {
            "id": "c-s2",
            "t": "text",
            "text": "with business courses.”",
            "x": 3996,
            "y": 548,
            "size": 34,
            "at": "l1:business",
            "font": "base"
          },
          {
            "id": "c-s3",
            "t": "text",
            "text": "“That's exactly the mix I need for my career plan.”",
            "x": 3996,
            "y": 610,
            "size": 30,
            "at": "l2:mix",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Càng cụ thể, càng là của bạn",
            "x": 3996,
            "y": 670,
            "size": 46,
            "at": "l3:specific",
            "color": "accent",
            "hl": [
              {
                "text": "của bạn",
                "at": "l3:yours"
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
          "say": "I chose this university because its program combines data science with business courses.",
          "sub": "Em chọn trường này vì chương trình kết hợp khoa học dữ liệu với các môn kinh doanh.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Asked more? Add one line: that's exactly the mix I need for my career plan.",
          "sub": "Được hỏi tiếp thì thêm một câu: “That's exactly the mix I need for my career plan.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The more specific the reason, the more the answer is yours.",
          "sub": "Lý do càng cụ thể, câu trả lời càng là của bạn.",
          "keys": [
            "càng là của bạn"
          ]
        }
      ],
      "ref": "p5,p7"
    },
    {
      "id": "s06",
      "module": "BRK-04",
      "data": {
        "title": "“Why this school?”",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "“Because it is a famous school and America is very good.”",
        "right": "“…supply chain management and a project with local companies in year two.”",
        "wrongIllus": "school",
        "rightIllus": "bullseye"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: famous school, America is very good.",
          "sub": "Trước: trường nổi tiếng, nước Mỹ rất tốt."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: one real detail, that leads to your career.",
          "sub": "Sau: một chi tiết thật, mở đường sang chuyện nghề nghiệp.",
          "keys": [
            "một chi tiết thật"
          ]
        }
      ],
      "ref": "p6"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Bảy · Vì sao ngành này",
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
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "bar-chart",
                "file-folder"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "lan",
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
            "caption": "Thứ Bảy · Lan lật lại học bạ",
            "icon": "bar-chart"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Đã học → Sẽ học → Sẽ làm",
            "x": 5964,
            "y": 170,
            "size": 54,
            "at": "l2:frame",
            "color": "accent",
            "hl": [
              {
                "text": "Sẽ làm",
                "at": "l2:I'll do"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "môn giỏi · dự án · việc thêm · thi",
            "x": 5964,
            "y": 260,
            "size": 40,
            "at": "l1:projects",
            "color": "muted"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "“I've always been strong in math…",
            "x": 5964,
            "y": 340,
            "size": 34,
            "at": "l3:math",
            "font": "base"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "…I want to study data science",
            "x": 5964,
            "y": 395,
            "size": 34,
            "at": "l4:data science",
            "font": "base"
          },
          {
            "id": "d-5",
            "t": "text",
            "text": "so I can work in data analysis later.”",
            "x": 5964,
            "y": 450,
            "size": 34,
            "at": "l4:analysis",
            "font": "base",
            "hl": [
              {
                "text": "data analysis",
                "at": "l4:analysis"
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
          "say": "Stop two, Saturday. Your major should grow from what you've done: strong subjects, school projects, a part-time job, a contest.",
          "sub": "Chặng hai, thứ Bảy. Ngành học nên mọc ra từ việc bạn đã làm: môn giỏi, dự án ở trường, việc làm thêm, cuộc thi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A simple frame: what I studied, what I'll study, what I'll do.",
          "sub": "Khung đơn giản: đã học, sẽ học, sẽ làm.",
          "keys": [
            "đã học, sẽ học, sẽ làm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "I've always been strong in math, and I enjoyed a statistics project at school.",
          "sub": "Em luôn học tốt môn toán và rất thích một dự án thống kê ở trường.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "I want to study data science, so I can work in data analysis later.",
          "sub": "Em muốn học khoa học dữ liệu để sau này làm phân tích dữ liệu."
        }
      ],
      "ref": "p8,p9"
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
            "id": "d-pr",
            "t": "text",
            "text": "Học bạ, điểm thi = bằng chứng",
            "x": 5964,
            "y": 545,
            "size": 44,
            "at": "l1:transcripts",
            "hl": [
              {
                "text": "bằng chứng",
                "at": "l1:evidence"
              }
            ]
          },
          {
            "id": "d-ca",
            "t": "text",
            "text": "“Nói có sách, mách có chứng”",
            "x": 5964,
            "y": 620,
            "size": 50,
            "at": "l2:books",
            "color": "accent",
            "hl": [
              {
                "text": "mách có chứng",
                "at": "l2:proof"
              }
            ]
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Ngành có gốc → nói tự nhiên",
            "x": 5964,
            "y": 690,
            "size": 44,
            "at": "l3:roots",
            "hl": [
              {
                "text": "có gốc",
                "at": "l3:roots"
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
          "say": "Her transcripts and test scores in the folder are the evidence for this answer.",
          "sub": "Học bạ và điểm thi trong bìa hồ sơ chính là bằng chứng cho câu trả lời này.",
          "keys": [
            "bằng chứng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Grandma would say: speak with books, report with proof.",
          "sub": "Ông bà gọi là: “Nói có sách, mách có chứng.”",
          "keys": [
            "Nói có sách, mách có chứng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A major with roots in what you've done comes out naturally.",
          "sub": "Ngành học có gốc từ việc đã làm thì nói ra rất tự nhiên.",
          "keys": [
            "rất tự nhiên"
          ]
        }
      ],
      "ref": "p8,p11"
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
            "text": "③ Chủ nhật · Sao học ở Mỹ",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "lan",
                  "side": "right"
                }
              ],
              "props": [
                "statue-of-liberty",
                "hot-beverage"
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
            "caption": "Chủ nhật · quán cà phê",
            "icon": "statue-of-liberty"
          },
          {
            "id": "e-q",
            "t": "text",
            "text": "“Why don't you study this at home?”",
            "x": 7932,
            "y": 170,
            "size": 40,
            "at": "l3:home",
            "font": "base",
            "color": "accent"
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "A. “Because life in America is better.”",
            "x": 7932,
            "y": 250,
            "size": 36,
            "at": "l4:life",
            "font": "base"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "B. “…a specialisation I can use",
            "x": 7932,
            "y": 315,
            "size": 32,
            "at": "l5:specialisation",
            "font": "base"
          },
          {
            "id": "e-b2",
            "t": "text",
            "text": "in my career at home.”",
            "x": 7972,
            "y": 360,
            "size": 32,
            "at": "l5:career",
            "font": "base"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, Sunday, at a café. Meet Dũng, Lan's classmate, future engineer.",
          "sub": "Chặng ba, Chủ nhật, ở quán cà phê. Đây là Dũng, bạn cùng lớp Lan, kỹ sư tương lai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Why America? Easy. Because life in America is better!",
          "sub": "Vì sao học ở Mỹ á? Dễ. Vì cuộc sống ở Mỹ tốt hơn!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hmm. Now the officer asks: why don't you study this at home? Two answers.",
          "sub": "Hừm. Giờ viên chức hỏi: “Why don't you study this at home?” Hai câu trả lời."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A: because life in America is better.",
          "sub": "A: vì cuộc sống ở Mỹ tốt hơn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "B: because this program offers a specialisation I can use in my career at home. Which one?",
          "sub": "B: vì chương trình có một hướng chuyên sâu em dùng được cho nghề nghiệp ở quê nhà. Câu nào?"
        }
      ],
      "beats": {
        "after": 900
      },
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p12,p13"
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
            "id": "e-ax",
            "t": "strike",
            "over": "e-a",
            "at": "l1:stay"
          },
          {
            "id": "e-br",
            "t": "ring",
            "around": [
              "e-b",
              "e-b2"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l2:B"
          },
          {
            "id": "e-us",
            "t": "text",
            "text": "“The program I want, with this combination",
            "x": 7932,
            "y": 430,
            "size": 30,
            "at": "l3:combination",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "e-us2",
            "t": "text",
            "text": "of courses, isn't easy to find at home.”",
            "x": 7932,
            "y": 472,
            "size": 30,
            "at": "l3:easy",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Nói việc học, đừng nói giấc mơ",
            "x": 7932,
            "y": 540,
            "size": 46,
            "at": "l4:dream",
            "color": "accent",
            "hl": [
              {
                "text": "giấc mơ",
                "at": "l4:dream"
              }
            ]
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "sống ở Mỹ",
            "x": 7972,
            "y": 605,
            "size": 46,
            "at": "l4:living",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A talks about life in America. The officer may think you want to stay.",
          "sub": "Câu A nói về cuộc sống ở Mỹ, dễ khiến viên chức nghĩ bạn muốn ở lại.",
          "keys": [
            "muốn ở lại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "B talks about study, linked to a career at home. Exactly what the officer needs to hear.",
          "sub": "Câu B nói về việc học, nối với nghề nghiệp ở quê nhà, đúng điều viên chức cần nghe.",
          "keys": [
            "đúng điều viên chức cần nghe"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Or simply: the program I want, with this combination of courses, isn't easy to find at home.",
          "sub": "Hoặc đơn giản: chương trình em muốn, với cách kết hợp các môn như vậy, khó tìm ở trong nước."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Talk about your studies, not a dream of living in America.",
          "sub": "Nói về việc học, đừng nói về giấc mơ sống ở Mỹ.",
          "keys": [
            "giấc mơ sống ở Mỹ"
          ]
        }
      ],
      "ref": "p12,p13,p14"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "Chủ nhật · Lan hỏi lệch",
        "actors": [
          {
            "id": "lan",
            "side": "left"
          },
          {
            "id": "dung",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Thuộc lòng sáu câu cho chắc",
          "why": "Câu hỏi lệch một chút, Dũng vẫn đọc đoạn cũ rồi ngập ngừng khi bị cắt ngang.",
          "rule": "Nhớ ý, đừng nhớ chữ"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "Okay, a small change. What will you study first?",
          "sub": "Đổi câu chút nhé. Năm đầu cậu học gì trước?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Because, first, it's famous. Second, the campus is beautiful. Third…",
          "sub": "Vì, một, trường nổi tiếng. Hai, khuôn viên đẹp. Ba…",
          "pose": "explain",
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
          "say": "Different question, same cassette.",
          "sub": "Câu hỏi khác, vẫn cuốn băng cũ.",
          "keys": [
            "vẫn cuốn băng cũ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Three keywords this time.",
          "sub": "Tua lại! Lần này chỉ ba từ khoá.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "First, engineering basics and lab projects. Later, I want to work for an energy company.",
          "sub": "Năm đầu, nền tảng kỹ thuật và các dự án phòng thí nghiệm. Sau này, em muốn làm cho một công ty năng lượng.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. Remember ideas, not words.",
          "sub": "Đúng. Nhớ ý, đừng nhớ chữ.",
          "phase": "redo",
          "keys": [
            "Nhớ ý, đừng nhớ chữ"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p19,p20"
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
            "at": "l3",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Hai · Ba từ khoá",
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
              "set": "campus",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "point"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "memo",
                "light-bulb"
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
            "at": "l1:Monday",
            "caption": "Thứ Hai · lớp học thêm",
            "icon": "memo"
          },
          {
            "id": "f-no",
            "t": "text",
            "text": "Soạn bài diễn văn để đọc thuộc",
            "x": 60,
            "y": 1260,
            "size": 42,
            "at": "l1:speech",
            "color": "muted"
          },
          {
            "id": "f-nox",
            "t": "strike",
            "over": "f-no",
            "at": "l1:recite"
          },
          {
            "id": "f-yes",
            "t": "text",
            "text": "Luyện nói với người khác",
            "x": 60,
            "y": 1335,
            "size": 48,
            "at": "l1:others",
            "color": "accent"
          },
          {
            "id": "f-kw",
            "t": "text",
            "text": "engineering · lab projects · energy company",
            "x": 60,
            "y": 1420,
            "size": 36,
            "at": "l2:engineering",
            "font": "base",
            "hl": [
              {
                "text": "energy company",
                "at": "l2:energy"
              }
            ]
          },
          {
            "id": "f-how",
            "t": "text",
            "text": "Vài từ khoá → nói nhiều cách",
            "x": 60,
            "y": 1500,
            "size": 46,
            "at": "l3:keywords",
            "hl": [
              {
                "text": "nhiều cách",
                "at": "l3:different ways"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: UC San Diego ISP — Visa Interview",
            "x": 60,
            "y": 1810,
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
          "say": "Stop four, Monday. UC San Diego says: practise speaking with others, but don't prepare a speech to recite.",
          "sub": "Chặng bốn, thứ Hai. UC San Diego khuyên: luyện nói với người khác, nhưng đừng soạn diễn văn để đọc thuộc.",
          "keys": [
            "đừng soạn diễn văn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "So my whole answer lives in three words: engineering, lab projects, energy company.",
          "sub": "Vậy cả câu trả lời của tớ gói trong ba từ: engineering, lab projects, energy company.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Write a few keywords for each question, then practise saying them in different ways.",
          "sub": "Viết vài từ khoá cho mỗi câu hỏi, rồi tập nói thành câu theo nhiều cách.",
          "keys": [
            "nhiều cách"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The question changes shape, the answer still fits. Like a raincoat, not a tailored suit.",
          "sub": "Câu hỏi đổi kiểu nào, câu trả lời vẫn vừa. Như áo mưa, chứ không phải com-lê may đo."
        }
      ],
      "ref": "p18,p19"
    },
    {
      "id": "s13",
      "module": "BRK-07",
      "data": {
        "question": "Chưa chọn ngành thì trả lời “Why this major?” sao đây?",
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
          "say": "What if you haven't even chosen a major?",
          "sub": "Nếu bạn còn chưa chọn ngành thì sao?"
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
            "text": "⑤ Thứ Ba · Câu hỏi phụ",
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
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "house"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l4:Hoa",
            "caption": "Thứ Ba · mẹ hỏi thêm",
            "icon": "page-facing-up"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Chưa chọn ngành: nói thật",
            "x": 2028,
            "y": 1260,
            "size": 48,
            "at": "l1:undeclared",
            "hl": [
              {
                "text": "nói thật",
                "at": "l2:honestly"
              }
            ]
          },
          {
            "id": "g-1b",
            "t": "text",
            "text": "“I'm interested in economics, and",
            "x": 2028,
            "y": 1325,
            "size": 30,
            "at": "l2:economics",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "g-1c",
            "t": "text",
            "text": "I plan to declare it as my major.”",
            "x": 2028,
            "y": 1365,
            "size": 30,
            "at": "l2:declare",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Học tiếng Anh: giúp gì ở quê?",
            "x": 2028,
            "y": 1425,
            "size": 46,
            "at": "l3:intensive"
          },
          {
            "id": "g-2b",
            "t": "text",
            "text": "“Better English will help me get a job",
            "x": 2028,
            "y": 1490,
            "size": 30,
            "at": "l3:Better",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "g-2c",
            "t": "text",
            "text": "at an international company back home.”",
            "x": 2028,
            "y": 1530,
            "size": 30,
            "at": "l3:international",
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
          "say": "Stop five, Tuesday. Some schools let first-year students stay undeclared.",
          "sub": "Chặng năm, thứ Ba. Một số trường cho sinh viên năm đầu chưa chọn ngành."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Wabash says: share your interests honestly. I'm interested in economics, and I plan to declare it as my major.",
          "sub": "Wabash khuyên cứ nói thật sở thích và ngành dự định: “I'm interested in economics, and I plan to declare it as my major.”",
          "keys": [
            "nói thật"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Going only for intensive English? Explain how it helps at home: better English will help me get a job at an international company back home.",
          "sub": "Chỉ sang học tiếng Anh tăng cường? Giải thích nó giúp gì ở quê nhà: “Better English will help me get a job at an international company back home.”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Back home, Cô Hoa has follow-up questions.",
          "sub": "Ở nhà, cô Hoa có thêm câu hỏi phụ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "How long will you study? And where will you live?",
          "sub": "Em sẽ học bao lâu? Và ở đâu?",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "lan",
          "say": "The length is on my I twenty, I checked. And I'll live on campus.",
          "sub": "Thời gian học ghi trên I-20, con đã xem. Và em sẽ ở trong khuôn viên trường.",
          "face": "happy"
        }
      ],
      "ref": "p15,p16,p17"
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
            "id": "g-3",
            "t": "text",
            "text": "Thời gian học: xem trên I-20",
            "x": 2028,
            "y": 1610,
            "size": 46,
            "at": "l1:length",
            "color": "accent",
            "hl": [
              {
                "text": "I-20",
                "at": "l1:twenty"
              }
            ]
          },
          {
            "id": "g-3b",
            "t": "text",
            "text": "“I'll live on campus.”",
            "x": 2028,
            "y": 1685,
            "size": 40,
            "at": "l1:campus",
            "font": "base",
            "hl": [
              {
                "text": "on campus",
                "at": "l1:campus"
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
          "say": "Wabash's tip: check your I twenty for the length of study. And if it's true, say: I'll live on campus.",
          "sub": "Mẹo của Wabash: xem I-20 để biết thời gian học. Nếu đúng vậy thì nói: “I'll live on campus.”",
          "keys": [
            "xem I-20"
          ]
        }
      ],
      "ref": "p17"
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
            "text": "⑥ Thứ Tư · Ghi âm, nghe lại",
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
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "studio-microphone",
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1:records",
            "caption": "Thứ Tư · phòng Lan, điện thoại ghi âm",
            "icon": "studio-microphone"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Đúng câu hỏi chưa?",
            "x": 3996,
            "y": 1260,
            "size": 50,
            "at": "l3:answer"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Quá hai câu không?",
            "x": 3996,
            "y": 1335,
            "size": 50,
            "at": "l3:longer",
            "hl": [
              {
                "text": "hai câu",
                "at": "l3:two sentences"
              }
            ]
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Có tên trường, tên ngành?",
            "x": 3996,
            "y": 1410,
            "size": 50,
            "at": "l3:name"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "Nói chậm, lịch sự",
            "x": 3996,
            "y": 1510,
            "size": 54,
            "at": "l4:slowly",
            "color": "accent",
            "hl": [
              {
                "text": "lịch sự",
                "at": "l4:politely"
              }
            ]
          },
          {
            "id": "h-5",
            "t": "text",
            "text": "thái độ ≈ hồ sơ",
            "x": 4036,
            "y": 1590,
            "size": 50,
            "at": "l4:attitude",
            "hl": [
              {
                "text": "thái độ",
                "at": "l4:attitude"
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
          "say": "Stop six, Wednesday. Lan records her answers on her phone and listens back.",
          "sub": "Chặng sáu, thứ Tư. Lan ghi âm câu trả lời bằng điện thoại rồi nghe lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Ugh, is that really my voice?",
          "sub": "Trời, giọng mình thật đấy à?",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three checks: does it answer the question, is it longer than two sentences, does it name the school and major?",
          "sub": "Ba điều cần soát: có trả lời đúng câu hỏi không, có dài quá hai câu không, có tên trường, tên ngành không?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Wabash adds: speak slowly and politely. Your attitude matters as much as your file.",
          "sub": "Wabash nhắc thêm: nói chậm, lịch sự, vì thái độ quan trọng không kém hồ sơ.",
          "keys": [
            "thái độ quan trọng không kém hồ sơ"
          ]
        }
      ],
      "ref": "p21"
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
            "at": "l3",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Thứ Năm 7:30 · Ô cửa kính",
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
              "set": "hotel",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "face": "happy",
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
                "passport-control",
                "file-folder"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:window",
            "caption": "Thứ Năm 7:30 · ô cửa kính (minh hoạ)",
            "icon": "passport-control"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Trường: một chi tiết thật ✓",
            "x": 5964,
            "y": 1260,
            "size": 46,
            "at": "l4:combines",
            "color": "accent"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Ngành: dự án lớp 11 ✓",
            "x": 5964,
            "y": 1340,
            "size": 46,
            "at": "l6:grade eleven",
            "color": "accent"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "→ phân tích dữ liệu bán lẻ",
            "x": 6004,
            "y": 1410,
            "size": 42,
            "at": "l6:retail"
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "Hỏi thời gian học → tài chính",
            "x": 5964,
            "y": 1500,
            "size": 42,
            "at": "l7:funding",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven, Thursday, seven thirty. The real window this time.",
          "sub": "Chặng bảy, bảy rưỡi sáng thứ Năm. Lần này là ô cửa thật."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Behind the glass: Sam, the consular officer.",
          "sub": "Sau ô kính là chị Sam, viên chức lãnh sự."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Why did you choose this university?",
          "sub": "Vì sao em chọn trường này?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Because its program combines data science with business courses. That's the mix I need.",
          "sub": "Vì chương trình kết hợp khoa học dữ liệu với các môn kinh doanh. Đúng thứ em cần.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "sam",
          "say": "Why data science?",
          "sub": "Sao lại là khoa học dữ liệu?"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "lan",
          "say": "In grade eleven, I did a statistics project on our class test scores. I want to do data analysis for retail companies.",
          "sub": "Lớp mười một, em làm dự án thống kê điểm thi của lớp. Em muốn phân tích dữ liệu cho các công ty bán lẻ."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Sam nods, asks how long she'll study, then moves on to funding. No more half sentences.",
          "sub": "Chị Sam gật đầu, hỏi Lan học bao lâu, rồi chuyển sang câu tài chính. Hết cảnh nói nửa câu.",
          "keys": [
            "Hết cảnh nói nửa câu"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p10"
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
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "J",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Mang về: 5 ô cần tick",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l5:Try"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l5:Try",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1242,
            "size": 56,
            "at": "l5:Try+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Một lý do cụ thể chọn trường",
            "x": 7997,
            "y": 1252,
            "size": 44,
            "at": "l5:Try+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1345,
            "w": 44,
            "h": 44,
            "at": "l5:keywords",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1327,
            "size": 56,
            "at": "l5:keywords+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Một câu nối ngành với đã học",
            "x": 7997,
            "y": 1337,
            "size": 44,
            "at": "l5:keywords+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1430,
            "w": 44,
            "h": 44,
            "at": "l6:sentences",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1412,
            "size": 56,
            "at": "l6:sentences+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Một câu vì sao học ở Mỹ",
            "x": 7997,
            "y": 1422,
            "size": 44,
            "at": "l6:sentences+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1515,
            "w": 44,
            "h": 44,
            "at": "l6:length",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1497,
            "size": 56,
            "at": "l6:length+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Biết thời gian học trên I-20",
            "x": 7997,
            "y": 1507,
            "size": 44,
            "at": "l6:length+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1600,
            "w": 44,
            "h": 44,
            "at": "l6:record",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1582,
            "size": 56,
            "at": "l6:record+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Đã ghi âm và nghe lại",
            "x": 7997,
            "y": 1592,
            "size": 44,
            "at": "l6:record+200"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4696,
            "y": 270,
            "at": "l2"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6664,
            "y": 170,
            "at": "l3"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 8632,
            "y": 520,
            "at": "l4"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; quy định có thể thay đổi, kiểm lại trang chính thức nơi bạn phỏng vấn. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1790,
            "size": 28,
            "at": "l7:end",
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
          "say": "So, school questions aren't hard if you understand your own program.",
          "sub": "Tóm lại, câu hỏi về trường và ngành không khó nếu bạn hiểu chương trình mình sắp học.",
          "keys": [
            "hiểu chương trình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: a reason true only for your school.",
          "sub": "Một: lý do chỉ đúng với trường của bạn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: a major rooted in what you've done.",
          "sub": "Hai: ngành học có gốc từ việc đã làm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: talk about study, not about living in America.",
          "sub": "Ba: nói về việc học, không nói chuyện sống ở Mỹ.",
          "keys": [
            "nói về việc học"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: open your program page, pick one detail, write three keywords.",
          "sub": "Làm ngay: mở trang chương trình, chọn một chi tiết, viết ba từ khoá.",
          "keys": [
            "ba từ khoá"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Then say them in two sentences, check your study length, and record yourself.",
          "sub": "Rồi nói thành hai câu, xem thời gian học, và ghi âm lại."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Next up: who will pay for your studies?",
          "sub": "Bài tiếp theo: “Who will pay for your studies?”"
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p22,outro"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "The officer asks why you do not study this at home, which answer is stronger?",
        "options": [
          "This program offers a specialisation I can use in my career back home",
          "Because I want to leave my country as soon as I can",
          "Because life in America is better than life in my country"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "statue-of-liberty",
        "why": "Câu trả lời nói về việc học và nối với nghề nghiệp ở quê nhà. Đó là điều viên chức cần nghe, theo lời giải trong bài."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The officer asks why you do not study this at home, which answer is stronger?",
          "sub": "Viên chức hỏi vì sao bạn không học ngành này trong nước, câu nào mạnh hơn?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "This program offers a specialisation I can use in my career back home.",
          "sub": "Nói về việc học, nối với nghề nghiệp ở quê nhà."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Remember Dũng at the café on Sunday?",
          "sub": "Nhớ Dũng ở quán cà phê hôm Chủ nhật chứ?"
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
          "say": "Remember ideas, not words. Now the forty questions below.",
          "sub": "Nhớ ý, đừng nhớ chữ. Giờ đến bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144. Hook HOOK-22 (câu thoại bị cắt): tối thứ Sáu cô Hoa đóng vai viên chức hỏi “Why did you choose this university?”, Lan “Because it is a good…” → cắt; nói trọn ở chặng ① (“…a good school”) rồi sửa thành lý do cụ thể. Dòng thời gian TUẦN LUYỆN NÓI: ① T6 tối trường (p4–p7) + BRK-04 trước/sau → ② T7 ngành, khung đã học–sẽ học–sẽ làm → ③ CN quán cà phê, Dũng “life in America is better”, đoán A/B (p13) → “Khoan đã!” Dũng đọc thuộc sáu câu khi bị hỏi lệch (p19) → ④ T2 ba từ khoá (UCSD) → BRK-07 → ⑤ T3 chưa chọn ngành, học tiếng Anh, thời gian học, ở ký túc xá → ⑥ T4 ghi âm nghe lại, Wabash thái độ → ⑦ T5 7:30 ô cửa thật, chị Sam (p10 = chuyện Ngọc) → tóm tắt + 5 ô (p22). Đổi tên: Ngọc → Lan, Khoa → Dũng; cô Hoa = mẹ Lan; Sam = viên chức. Tục ngữ: “Nói có sách, mách có chứng”. Câu đố questions[21].",
  "loop": {
    "open": "s00",
    "close": "s17"
  }
};
