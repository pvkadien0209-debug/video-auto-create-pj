// ielts-task1-guide--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "ielts-task1-guide--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "ielts-writing-task1-takers",
    "slug": "ielts-task1-guide",
    "door": "kien-thuc",
    "level": "B1",
    "title": "IELTS Writing Task 1 Academic yêu cầu gì và viết trong 20 phút thế nào?",
    "series": "IELTS Writing Task 1 rõ ràng — mô tả biểu đồ, bảng, quy trình cho thí sinh Academic"
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
            "text": "150 từ",
            "x": 60,
            "y": 90,
            "size": 150,
            "at": "l1:hundred",
            "color": "accent",
            "hl": [
              {
                "text": "150",
                "at": "l1:hundred"
              }
            ]
          },
          {
            "id": "a-min",
            "t": "text",
            "text": "20 phút",
            "x": 640,
            "y": 120,
            "size": 110,
            "at": "l1:twenty",
            "hl": [
              {
                "text": "20",
                "at": "l1:twenty"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "Mô tả biểu đồ, bảng, sơ đồ",
            "x": 70,
            "y": 320,
            "size": 54,
            "at": "l2:chart"
          },
          {
            "id": "a-own",
            "t": "text",
            "text": "bằng lời của mình",
            "x": 70,
            "y": 410,
            "size": 52,
            "at": "l2:own",
            "hl": [
              {
                "text": "lời của mình",
                "at": "l2:own"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: IELTS.org — IELTS Academic format: Writing",
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
          "say": "One hundred and fifty words. Twenty minutes.",
          "sub": "Một trăm năm mươi từ. Hai mươi phút.",
          "keys": [
            "Hai mươi phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "That's IELTS Academic Writing Task one: describe a chart, a table or a diagram, in your own words.",
          "sub": "Đó là Task 1 phần Viết IELTS Academic: tả biểu đồ, bảng hay sơ đồ, bằng lời của mình.",
          "keys": [
            "bằng lời của mình"
          ]
        }
      ],
      "ref": "p2"
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
            "y": 300,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "stopwatch",
                "bar-chart"
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
            "at": "l1",
            "caption": "Thứ Hai 20:00 · bài Task 1 đầu tiên",
            "icon": "stopwatch"
          },
          {
            "id": "a-cp",
            "t": "text",
            "text": "Phút 20: vẫn chép số",
            "x": 60,
            "y": 520,
            "size": 54,
            "at": "l3:twenty",
            "color": "coral",
            "hl": [
              {
                "text": "vẫn chép số",
                "at": "l3:copying"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Tham thì thâm”",
            "x": 60,
            "y": 630,
            "size": 56,
            "at": "l5:greedy",
            "color": "accent",
            "hl": [
              {
                "text": "Tham",
                "at": "l5:greedy"
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
          "say": "Meet Thảo, twenty-seven, an office worker. She took on IELTS Reading last month. Now, Writing.",
          "sub": "Đây là Thảo, hai mươi bảy tuổi, nhân viên văn phòng. Tháng trước luyện Đọc, giờ đến Viết.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Monday, eight p.m. A bar chart packed with numbers. Stopwatch on.",
          "sub": "Thứ Hai, tám giờ tối. Một biểu đồ cột dày đặc số. Bấm giờ.",
          "keys": [
            "dày đặc số"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Minute twenty, and I'm still copying numbers. What does this chart even show?",
          "sub": "Phút hai mươi, mình vẫn đang chép số. Mà biểu đồ này nói gì nhỉ?",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "She's reading the chart out like a phone book.",
          "sub": "Cô đang đọc biểu đồ như đọc danh bạ điện thoại.",
          "keys": [
            "danh bạ điện thoại"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our saying fits: the greedy end up with less. Take every number, say nothing.",
          "sub": "Ông bà nói: “Tham thì thâm.” Ôm hết số, chẳng nói được gì.",
          "keys": [
            "Tham thì thâm"
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
            "text": "Task 1 đòi gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:want",
            "hl": [
              {
                "text": "đòi gì",
                "at": "l1:want"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: chép hết số",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:copying",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:number+300"
          },
          {
            "id": "b-y1",
            "t": "text",
            "text": "Mà là: hình nói gì",
            "x": 2028,
            "y": 260,
            "size": 56,
            "at": "l3:shows",
            "color": "accent",
            "hl": [
              {
                "text": "hình nói gì",
                "at": "l3:shows"
              }
            ]
          },
          {
            "id": "b-y2",
            "t": "text",
            "text": "tổng quan rõ",
            "x": 2088,
            "y": 350,
            "size": 50,
            "at": "l3:overview"
          },
          {
            "id": "b-y3",
            "t": "text",
            "text": "chọn số nổi bật",
            "x": 2088,
            "y": 425,
            "size": 50,
            "at": "l3:key"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what does Task one really want, in twenty minutes?",
          "sub": "Vậy Task 1 thật ra đòi gì, trong hai mươi phút?",
          "keys": [
            "đòi gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not copying every number.",
          "sub": "Không phải chép hết mọi con số."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But showing what the picture shows: a clear overview, and only the key figures.",
          "sub": "Mà là cho thấy hình ấy nói gì: một tổng quan rõ, và chỉ những số nổi bật.",
          "keys": [
            "tổng quan rõ"
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
            "id": "b-k1",
            "t": "text",
            "text": "Viết: 60 phút · 2 bài",
            "x": 2928,
            "y": 170,
            "size": 54,
            "at": "l1:sixty",
            "hl": [
              {
                "text": "60 phút",
                "at": "l1:sixty"
              }
            ]
          },
          {
            "id": "b-k2",
            "t": "text",
            "text": "Cả hai đều bắt buộc",
            "x": 2928,
            "y": 255,
            "size": 48,
            "at": "l1:compulsory"
          },
          {
            "id": "b-k3",
            "t": "text",
            "text": "Tổng quan, sắp xếp tốt",
            "x": 2928,
            "y": 340,
            "size": 48,
            "at": "l2:organised",
            "hl": [
              {
                "text": "sắp xếp tốt",
                "at": "l2:organised"
              }
            ]
          },
          {
            "id": "b-k4",
            "t": "text",
            "text": "Task 1: báo cáo học thuật",
            "x": 2928,
            "y": 440,
            "size": 46,
            "at": "l3:report",
            "color": "accent"
          },
          {
            "id": "b-k5",
            "t": "text",
            "text": "Task 2: bài luận trang trọng",
            "x": 2928,
            "y": 515,
            "size": 46,
            "at": "l3:essay"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: IELTS.org; British Council — test format",
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
          "say": "The IELTS website says Academic Writing lasts sixty minutes, with two tasks, both compulsory.",
          "sub": "Trang IELTS ghi phần Viết Academic dài sáu mươi phút, gồm hai bài, cả hai bắt buộc.",
          "keys": [
            "sáu mươi phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Task one tests whether you can give a well organised overview of the information.",
          "sub": "Task 1 kiểm tra khả năng đưa ra một tổng quan được sắp xếp tốt về thông tin.",
          "keys": [
            "sắp xếp tốt"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The British Council calls it an academic style report. Task two is a formal essay.",
          "sub": "British Council gọi đó là bài báo cáo kiểu học thuật. Task 2 là bài luận trang trọng.",
          "keys": [
            "báo cáo kiểu học thuật"
          ]
        }
      ],
      "ref": "p1"
    },
    {
      "id": "s04",
      "module": "BRK-08",
      "data": {
        "title": "Một tuần luyện Task 1",
        "points": [
          {
            "label": "Thứ Hai",
            "sub": "Bài đầu",
            "illus": "stopwatch"
          },
          {
            "label": "Thứ Ba",
            "sub": "Dạng đề",
            "illus": "bar-chart"
          },
          {
            "label": "Thứ Tư",
            "sub": "Khung bài",
            "illus": "memo"
          },
          {
            "label": "Thứ Năm",
            "sub": "Chọn số",
            "illus": "magnifying-glass-tilted-left"
          },
          {
            "label": "Thứ Bảy",
            "sub": "Cô Sam chấm",
            "illus": "check-mark-button"
          },
          {
            "label": "Chủ nhật",
            "sub": "Chia giờ",
            "illus": "hourglass-not-done"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One week, six stops.",
          "sub": "Một tuần, sáu chặng.",
          "keys": [
            "Một tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Pen ready. Let's go.",
          "sub": "Bút sẵn sàng. Bắt đầu."
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
            "at": "l2:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Hai · ghi số cho nhanh?",
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
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "memo",
                "bar-chart"
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
            "at": "l1:Stop one",
            "caption": "Thứ Hai 20:20 · tập nháp",
            "icon": "memo"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "• 2016: 5 giờ",
            "x": 4016,
            "y": 180,
            "size": 52,
            "at": "l2:bullet"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "• 2026: …",
            "x": 4016,
            "y": 260,
            "size": 52,
            "at": "l2:bullet+400"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Gạch đầu dòng = đủ ý?",
            "x": 3996,
            "y": 360,
            "size": 50,
            "at": "l2:examiner",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, Monday night. Thảo has a time-saving idea.",
          "sub": "Chặng một, tối thứ Hai. Thảo nảy ra một mẹo tiết kiệm giờ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "It's just a data report, right? Key numbers as bullet points. The examiner sees everything!",
          "sub": "Chỉ là báo cáo số thôi mà? Ghi số chính thành gạch đầu dòng. Giám khảo vẫn thấy đủ!",
          "face": "happy"
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s06",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Thứ Hai 20:25 · tập nháp",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Ghi số dạng gạch đầu dòng",
          "why": "Trang IELTS ghi phải viết câu đầy đủ; bài quá ngắn có thể thiếu bằng chứng ngôn ngữ cho band cao.",
          "rule": "Câu đầy đủ, ít nhất 150 từ"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Bullets done. Short and sweet, and I'm finished early!",
          "sub": "Gạch đầu dòng xong. Ngắn gọn, lại xong sớm!",
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
          "say": "The IELTS page is clear: full sentences, not notes or bullet points.",
          "sub": "Trang IELTS ghi rõ: viết câu đầy đủ, không ghi chú, không gạch đầu dòng.",
          "keys": [
            "câu đầy đủ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And a very short answer may not show enough language for the higher bands.",
          "sub": "Bài quá ngắn có thể không đủ bằng chứng ngôn ngữ để lên band cao."
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
          "say": "Full sentences, then. In 2016, students spent about five hours a week on printed books.",
          "sub": "Vậy viết câu đủ. Năm 2016, sinh viên dành khoảng năm giờ mỗi tuần cho sách giấy.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
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
            "fit": "C",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "c-n1",
            "t": "text",
            "text": "Task 1: ≥ 150 từ · ≤ 20'",
            "x": 3996,
            "y": 440,
            "size": 50,
            "at": "l1:hundred",
            "hl": [
              {
                "text": "150 từ",
                "at": "l1:hundred"
              }
            ]
          },
          {
            "id": "c-n2",
            "t": "text",
            "text": "Task 2: ≥ 250 từ · ≤ 40'",
            "x": 3996,
            "y": 520,
            "size": 50,
            "at": "l2:fifty"
          },
          {
            "id": "c-n3",
            "t": "text",
            "text": "Task 2 nặng gấp đôi",
            "x": 3996,
            "y": 600,
            "size": 50,
            "at": "l2:twice",
            "color": "coral",
            "hl": [
              {
                "text": "gấp đôi",
                "at": "l2:twice"
              }
            ]
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Câu đủ · 150 từ · 20 phút",
            "x": 3996,
            "y": 670,
            "size": 46,
            "at": "l3:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "Câu đủ",
                "at": "l3:Full"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: IELTS.org — Academic Writing",
            "x": 3996,
            "y": 128,
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
          "say": "Three numbers for Task one: at least one hundred and fifty words, twenty minutes, a neutral academic style.",
          "sub": "Ba con số của Task 1: ít nhất một trăm năm mươi từ, không quá hai mươi phút, văn phong học thuật trung tính.",
          "keys": [
            "ít nhất một trăm năm mươi từ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Task two needs two hundred and fifty words, forty minutes, and counts twice as much. So keep Task one tight.",
          "sub": "Task 2 cần hai trăm năm mươi từ, bốn mươi phút, và nặng gấp đôi. Nên Task 1 phải gọn.",
          "keys": [
            "nặng gấp đôi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: full sentences, at least one fifty, done in twenty.",
          "sub": "Rút ra: câu đầy đủ, ít nhất một trăm năm mươi từ, gọn trong hai mươi phút.",
          "keys": [
            "câu đầy đủ"
          ]
        }
      ],
      "ref": "p2,p4"
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
            "text": "② Thứ Ba · đề có mấy dạng?",
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
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "bar-chart",
                "mobile-phone"
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
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "Thứ Ba 20:00 · Dũng sang chơi",
            "icon": "mobile-phone"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Đường: đổi theo thời gian",
            "x": 5964,
            "y": 180,
            "size": 46,
            "at": "l3:line",
            "hl": [
              {
                "text": "thời gian",
                "at": "l3:time"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Cột: so sánh các nhóm",
            "x": 5964,
            "y": 255,
            "size": 46,
            "at": "l3:bar"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Tròn: phần trong tổng",
            "x": 5964,
            "y": 330,
            "size": 46,
            "at": "l4:pie"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "Bảng: hàng và cột",
            "x": 5964,
            "y": 405,
            "size": 46,
            "at": "l4:table"
          },
          {
            "id": "d-5",
            "t": "text",
            "text": "→ xu hướng, khác biệt",
            "x": 5964,
            "y": 490,
            "size": 48,
            "at": "l5:trends",
            "color": "accent",
            "hl": [
              {
                "text": "xu hướng",
                "at": "l5:trends"
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
          "say": "Stop two, Tuesday. Meet Dũng, Thảo's cousin, a second-year biology student.",
          "sub": "Chặng hai, thứ Ba. Đây là Dũng, em họ Thảo, sinh viên năm hai ngành sinh học.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Sis, is every Task one a chart? What else can they give you?",
          "sub": "Chị ơi, Task 1 lúc nào cũng là biểu đồ à? Còn cho gì nữa?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "First, the number group. A line graph shows change over time. A bar chart compares groups.",
          "sub": "Trước hết là nhóm có số. Biểu đồ đường cho thấy thay đổi theo thời gian. Biểu đồ cột so sánh các nhóm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A pie chart shows each part of a whole. A table puts numbers in rows and columns.",
          "sub": "Biểu đồ tròn cho thấy mỗi phần trong tổng. Bảng xếp số theo hàng và cột."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Your job here: spot the trends and differences, then pick numbers as evidence.",
          "sub": "Việc chính: nhìn ra xu hướng và khác biệt, rồi chọn số làm dẫn chứng.",
          "keys": [
            "xu hướng và khác biệt"
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
      "ref": "p5"
    },
    {
      "id": "s09",
      "module": "BRK-06",
      "data": {
        "title": "Đề Task 1 có những dạng nào?",
        "items": [
          {
            "illus": "chart-increasing",
            "text": "Biểu đồ đường"
          },
          {
            "illus": "bar-chart",
            "text": "Biểu đồ cột"
          },
          {
            "illus": "clipboard",
            "text": "Bảng số liệu"
          },
          {
            "illus": "gear",
            "text": "Quy trình"
          },
          {
            "illus": "world-map",
            "text": "Bản đồ"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Lines, bars, tables, processes, maps.",
          "sub": "Đường, cột, bảng, quy trình, bản đồ."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Some have numbers. Some have none.",
          "sub": "Có dạng nhiều số, có dạng chẳng có số nào.",
          "keys": [
            "chẳng có số nào"
          ]
        }
      ],
      "ref": "p5,p6"
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
            "id": "d-6",
            "t": "text",
            "text": "Quy trình, đồ vật, sự kiện",
            "x": 5964,
            "y": 560,
            "size": 44,
            "at": "l1:process"
          },
          {
            "id": "d-7",
            "t": "text",
            "text": "Bản đồ trước – sau",
            "x": 5964,
            "y": 625,
            "size": 44,
            "at": "l2:maps",
            "hl": [
              {
                "text": "trước – sau",
                "at": "l2:before"
              }
            ]
          },
          {
            "id": "d-8",
            "t": "text",
            "text": "→ tả trình tự, thay đổi",
            "x": 5964,
            "y": 690,
            "size": 44,
            "at": "l3:sequence",
            "color": "accent"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: IELTS.org — Academic Writing",
            "x": 5964,
            "y": 128,
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
          "say": "The IELTS page adds: stages of a process, an object or event, or how something works.",
          "sub": "Trang IELTS ghi thêm: các bước của một quy trình, một đồ vật, sự kiện, hay cách một thứ hoạt động.",
          "keys": [
            "các bước của một quy trình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Practice books also put maps of an area, before and after a change, in this group.",
          "sub": "Sách luyện còn xếp bản đồ một khu vực trước và sau thay đổi vào nhóm này.",
          "keys": [
            "trước và sau"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "There, you describe the sequence or the change, not numbers.",
          "sub": "Ở đó, bạn tả trình tự hoặc sự thay đổi, không phải con số.",
          "keys": [
            "trình tự hoặc sự thay đổi"
          ]
        }
      ],
      "ref": "p6"
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
            "at": "l2",
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
            "id": "d-p1",
            "t": "text",
            "text": "Chép nguyên đề: không tính",
            "x": 6784,
            "y": 700,
            "size": 40,
            "at": "l1:discounted",
            "color": "coral",
            "hl": [
              {
                "text": "không tính",
                "at": "l1:discounted"
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
          "say": "One more thing. The band descriptors, updated May twenty twenty-three, say words copied from the task are discounted.",
          "sub": "Thêm một điều. Bản mô tả band, cập nhật tháng 5/2023, ghi phần chép nguyên đề bị loại, không được tính.",
          "keys": [
            "không được tính"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "So I can't start with the chart shows the number of?",
          "sub": "Vậy em không được mở bằng “the chart shows the number of” à?",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Rephrase it! The bar chart compares how many, and so on.",
          "sub": "Diễn đạt lại! Kiểu “the bar chart compares how many…”.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Change the verb, change the noun phrase, keep the meaning. Paraphrase, don't copy.",
          "sub": "Đổi động từ, đổi cụm danh từ, giữ nguyên nghĩa. Diễn đạt lại, đừng chép.",
          "keys": [
            "Diễn đạt lại, đừng chép"
          ]
        }
      ],
      "ref": "p7,p8"
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
            "text": "③ Thứ Tư · khung bốn đoạn",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three",
            "hl": [
              {
                "text": "bốn đoạn",
                "at": "l1:four"
              }
            ]
          },
          {
            "id": "e-b1",
            "t": "box",
            "x": 7932,
            "y": 180,
            "w": 780,
            "h": 100,
            "at": "l2:One",
            "stroke": 5
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "1 · Mở: diễn đạt lại đề",
            "x": 7962,
            "y": 198,
            "size": 48,
            "at": "l2:One+200"
          },
          {
            "id": "e-b2",
            "t": "box",
            "x": 7932,
            "y": 300,
            "w": 780,
            "h": 100,
            "at": "l3:Two",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "2 · Tổng quan: điều lớn nhất",
            "x": 7962,
            "y": 318,
            "size": 46,
            "at": "l3:Two+200",
            "color": "accent",
            "hl": [
              {
                "text": "Tổng quan",
                "at": "l3:overview"
              }
            ]
          },
          {
            "id": "e-b3",
            "t": "box",
            "x": 7932,
            "y": 420,
            "w": 780,
            "h": 100,
            "at": "l4:Three",
            "stroke": 5
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "3 + 4 · Thân: hai nhóm số",
            "x": 7962,
            "y": 438,
            "size": 48,
            "at": "l4:Three+200"
          },
          {
            "id": "e-n",
            "t": "text",
            "text": "Khung luyện, không bắt buộc",
            "x": 7932,
            "y": 560,
            "size": 44,
            "at": "l5:template",
            "color": "muted"
          },
          {
            "id": "e-b7",
            "t": "text",
            "text": "Band 7: tổng quan rõ",
            "x": 7932,
            "y": 640,
            "size": 44,
            "at": "l5:seven",
            "hl": [
              {
                "text": "tổng quan rõ",
                "at": "l5:clear"
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
          "say": "Stop three, Wednesday. A four paragraph plan that's easy to practise.",
          "sub": "Chặng ba, thứ Tư. Một khung bốn đoạn dễ luyện.",
          "keys": [
            "khung bốn đoạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: the introduction. Rephrase the task: what visual, about what, where, when.",
          "sub": "Một: câu mở. Diễn đạt lại đề: hình gì, về cái gì, ở đâu, khi nào."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: the overview. One or two sentences on the biggest trend or difference.",
          "sub": "Hai: tổng quan. Một hai câu về xu hướng hay khác biệt lớn nhất.",
          "keys": [
            "tổng quan"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three and four: two body paragraphs, each one group of figures with evidence.",
          "sub": "Ba và bốn: hai đoạn thân, mỗi đoạn một nhóm số liệu có dẫn chứng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "It's a practice plan, not an official template. But it matches band seven: a clear overview, data grouped sensibly.",
          "sub": "Đây là khung luyện, không phải mẫu bắt buộc. Nhưng nó khớp band 7: tổng quan rõ, số liệu xếp nhóm hợp lý.",
          "keys": [
            "khung luyện"
          ]
        }
      ],
      "ref": "p9"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "point",
                  "face": "happy"
                }
              ],
              "props": [
                "bar-chart",
                "books"
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
                }
              ]
            },
            "at": "l1:practice",
            "caption": "Thứ Tư 20:00 · đề luyện, số giả định",
            "icon": "bar-chart"
          },
          {
            "id": "e-x1",
            "t": "text",
            "text": "Sách giấy vs điện thoại",
            "x": 8752,
            "y": 700,
            "size": 40,
            "at": "l1:books"
          },
          {
            "id": "e-x2",
            "t": "text",
            "text": "2016: 5 giờ · 3 giờ",
            "x": 7932,
            "y": 700,
            "size": 40,
            "at": "l4:five",
            "color": "accent",
            "hl": [
              {
                "text": "5 giờ",
                "at": "l4:five"
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
          "say": "Thảo tries a practice bar chart, made-up figures: student reading hours, books versus phones.",
          "sub": "Thảo thử một biểu đồ cột luyện, số giả định: giờ đọc của sinh viên, sách giấy và điện thoại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "The bar chart compares the average hours per week students spent reading printed books and reading on their phones.",
          "sub": "Biểu đồ cột so sánh số giờ trung bình mỗi tuần sinh viên đọc sách giấy và đọc trên điện thoại.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Overall, phone reading replaced printed books, and the gap became much wider.",
          "sub": "Nhìn chung, đọc trên điện thoại đã thay sách giấy, và khoảng cách giãn rộng hơn nhiều.",
          "keys": [
            "Nhìn chung"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then the first body sentence: five hours on printed books, compared with three on phones.",
          "sub": "Rồi câu thân đầu tiên: năm giờ cho sách giấy, so với ba giờ trên điện thoại.",
          "keys": [
            "so với ba giờ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: introduction, overview, then two groups of figures.",
          "sub": "Rút ra: mở đề, tổng quan, rồi hai nhóm số liệu.",
          "keys": [
            "mở đề, tổng quan"
          ]
        }
      ],
      "ref": "p10,p11"
    },
    {
      "id": "s14",
      "module": "BRK-07",
      "data": {
        "question": "Viết đủ từng ô trong bảng thì điểm cao hơn?",
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
          "say": "If you write about every single cell, isn't that a better score?",
          "sub": "Viết đủ từng ô trong bảng thì chẳng phải điểm cao hơn sao?",
          "keys": [
            "điểm cao hơn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s15",
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
            "text": "④ Thứ Năm · chọn số nào?",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "clipboard",
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Lan",
            "caption": "Thứ Năm 19:00 · quán nhóm",
            "icon": "hot-beverage"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Bảng: 6 nước × 3 năm",
            "x": 60,
            "y": 1270,
            "size": 52,
            "at": "l1:six",
            "hl": [
              {
                "text": "6 nước",
                "at": "l1:six"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Mỗi ô một câu",
            "x": 60,
            "y": 1360,
            "size": 52,
            "at": "l2:cell",
            "color": "coral"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Không ai cao nhất?",
            "x": 60,
            "y": 1450,
            "size": 46,
            "at": "l4:highest",
            "color": "muted"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "Không xu hướng chung?",
            "x": 60,
            "y": 1525,
            "size": 46,
            "at": "l4:trend",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four, Thursday, the study group's café. Meet Lan, twenty, who brought a table: six countries, three years.",
          "sub": "Chặng bốn, thứ Năm, quán nhóm tự học. Đây là Lan, hai mươi tuổi, mang tới một bảng: sáu nước, ba năm.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "I wrote one sentence for every cell, in table order. Very long, very complete!",
          "sub": "Mình viết mỗi ô một câu, đúng thứ tự trong bảng. Dài lắm, đủ lắm!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "So which country is highest? What's the overall trend?",
          "sub": "Thế nước nào cao nhất? Xu hướng chung là gì?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Long, but no sentence says who's highest or what the trend is. And the numbers are never compared.",
          "sub": "Bài dài, nhưng không câu nào nói ai cao nhất hay xu hướng chung. Các số cũng chẳng được so với nhau.",
          "keys": [
            "chẳng được so với nhau"
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
      "ref": "p14"
    },
    {
      "id": "s16",
      "module": "BRK-10",
      "data": {
        "quote": "Kể chi tiết chủ yếu máy móc, sa vào chi tiết mà không nói tới bức tranh lớn",
        "mark": "bức tranh lớn",
        "by": "Mô tả band 5, Task 1 — IELTS",
        "illus": "page-facing-up"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Band five, in the official descriptors: mainly mechanical, lost in detail, no big picture.",
          "sub": "Band 5, theo bản mô tả chính thức: kể máy móc, sa vào chi tiết, thiếu bức tranh lớn.",
          "keys": [
            "thiếu bức tranh lớn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The IELTS band descriptors.",
          "sub": "Bản mô tả band của IELTS."
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s18",
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
            "text": "Năm điểm nổi bật",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:five",
            "hl": [
              {
                "text": "Năm",
                "at": "l1:five"
              }
            ]
          },
          {
            "id": "g-i1",
            "t": "illus",
            "name": "chart-increasing",
            "x": 2038,
            "y": 1260,
            "size": 70,
            "at": "l2:highest"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Cao nhất · thấp nhất",
            "x": 2128,
            "y": 1270,
            "size": 48,
            "at": "l2:highest+200"
          },
          {
            "id": "g-i2",
            "t": "illus",
            "name": "chart-decreasing",
            "x": 2038,
            "y": 1355,
            "size": 70,
            "at": "l2:biggest"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Thay đổi lớn nhất",
            "x": 2128,
            "y": 1365,
            "size": 48,
            "at": "l2:biggest+200"
          },
          {
            "id": "g-i3",
            "t": "illus",
            "name": "counterclockwise-arrows-button",
            "x": 2038,
            "y": 1450,
            "size": 70,
            "at": "l3:turning"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Điểm đổi chiều",
            "x": 2128,
            "y": 1460,
            "size": 48,
            "at": "l3:turning+200"
          },
          {
            "id": "g-i4",
            "t": "illus",
            "name": "crossed-swords",
            "x": 2038,
            "y": 1545,
            "size": 70,
            "at": "l3:cross"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Hai nhóm gặp, vượt nhau",
            "x": 2128,
            "y": 1555,
            "size": 48,
            "at": "l3:cross+200"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "1–2 số, đặt cạnh số khác",
            "x": 2028,
            "y": 1660,
            "size": 44,
            "at": "l4:two",
            "color": "accent",
            "hl": [
              {
                "text": "đặt cạnh số khác",
                "at": "l4:next"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Ít số, đúng chỗ, luôn so sánh",
            "x": 2028,
            "y": 1750,
            "size": 46,
            "at": "l5:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "luôn so sánh",
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
          "say": "So Thảo and Lan hunt for five kinds of key features.",
          "sub": "Thế là Thảo và Lan đi tìm năm loại điểm nổi bật.",
          "keys": [
            "năm loại điểm nổi bật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The highest value, the lowest value, the biggest change.",
          "sub": "Giá trị cao nhất, thấp nhất, thay đổi lớn nhất."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A turning point, rising then falling. And where two groups meet or cross.",
          "sub": "Điểm đổi chiều, đang tăng chuyển sang giảm. Và chỗ hai nhóm gặp hoặc vượt nhau."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Each idea needs one or two figures, placed next to another figure to compare.",
          "sub": "Mỗi ý chỉ cần một hai con số, đặt cạnh một số khác để so sánh."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: few numbers, in the right places, and always compare.",
          "sub": "Rút ra: chọn ít số, đúng chỗ, và luôn so sánh.",
          "keys": [
            "luôn so sánh"
          ]
        }
      ],
      "ref": "p13,p15"
    },
    {
      "id": "s19",
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
            "text": "⑤ Thứ Bảy · chấm thế nào?",
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
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "page-facing-up",
                "pencil"
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
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Sam",
            "caption": "Thứ Bảy 14:00 · lớp chữa bài",
            "icon": "pencil"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "TA · hoàn thành yêu cầu",
            "x": 3996,
            "y": 1270,
            "size": 46,
            "at": "l3:achievement",
            "hl": [
              {
                "text": "TA",
                "at": "l3:achievement"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "CC · mạch lạc, liên kết",
            "x": 3996,
            "y": 1345,
            "size": 46,
            "at": "l3:Coherence"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "LR · vốn từ",
            "x": 3996,
            "y": 1420,
            "size": 46,
            "at": "l3:Lexical"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "GRA · ngữ pháp",
            "x": 3996,
            "y": 1495,
            "size": 46,
            "at": "l3:Grammatical"
          },
          {
            "id": "h-b7",
            "t": "text",
            "text": "Band 7: linh hoạt, chính xác",
            "x": 3996,
            "y": 1590,
            "size": 46,
            "at": "l4:flexibility",
            "color": "accent",
            "hl": [
              {
                "text": "chính xác",
                "at": "l4:precision"
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
          "say": "Stop five, Saturday class. Meet Sam, the native teacher who marks the group's writing.",
          "sub": "Chặng năm, lớp thứ Bảy. Đây là cô Sam, giáo viên bản ngữ chấm bài Viết cho nhóm.",
          "keys": [
            "cô Sam"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Four criteria, everyone. I mark with all four.",
          "sub": "Bốn tiêu chí nhé cả lớp. Cô chấm theo đủ bốn.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Task achievement, Coherence and cohesion, Lexical resource, Grammatical range and accuracy.",
          "sub": "Hoàn thành yêu cầu đề, mạch lạc và liên kết, vốn từ, độ đa dạng và chính xác của ngữ pháp.",
          "keys": [
            "Hoàn thành yêu cầu đề"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "At band seven: vocabulary with some flexibility and precision, complex structures, frequent error-free sentences.",
          "sub": "Band 7: vốn từ đủ linh hoạt và chính xác, nhiều cấu trúc phức, câu không lỗi xuất hiện thường xuyên.",
          "keys": [
            "linh hoạt và chính xác"
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
      "ref": "p16"
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
            "at": "l2",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-p1",
            "t": "text",
            "text": "Lạc đề → bị trừ điểm",
            "x": 3996,
            "y": 1670,
            "size": 46,
            "at": "l1:topic",
            "color": "coral"
          },
          {
            "id": "h-p2",
            "t": "text",
            "text": "≤ 20 từ → band 1",
            "x": 3996,
            "y": 1745,
            "size": 46,
            "at": "l1:twenty",
            "color": "coral",
            "hl": [
              {
                "text": "band 1",
                "at": "l1:band"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: IELTS Writing band descriptors (5/2023)",
            "x": 3996,
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
          "say": "Off-topic writing is penalised. Plagiarism, heavily. Twenty words or fewer sits at band one.",
          "sub": "Viết lạc đề bị trừ điểm. Đạo văn bị phạt nặng. Bài từ hai mươi từ trở xuống chỉ ở band 1.",
          "keys": [
            "Đạo văn bị phạt nặng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "And please, no memorised model answers. Write for the chart in front of you.",
          "sub": "Và làm ơn, đừng học thuộc bài mẫu. Viết cho đúng hình trước mặt.",
          "face": "stern"
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s21",
      "module": "BRK-04",
      "data": {
        "title": "Học khung thế nào?",
        "wrong": "Thuộc lòng cả bài mẫu, đề nào cũng chép vào",
        "right": "Học khung, câu viết cho đúng hình trước mặt",
        "wrongIllus": "scroll",
        "rightIllus": "pencil"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Low bands: too many memorised phrases.",
          "sub": "Band thấp: lạm dụng cụm học thuộc.",
          "keys": [
            "cụm học thuộc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Learn the plan. Write for this chart.",
          "sub": "Học khung. Câu viết cho đúng hình này.",
          "keys": [
            "viết cho đúng hình này"
          ]
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s22",
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
            "text": "⑥ Chủ nhật · chia 20 phút",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six"
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
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "chart-increasing",
                "stopwatch"
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
            "at": "l1:Dũng",
            "caption": "Chủ nhật 9:00 · đường 4 nhóm",
            "icon": "chart-increasing"
          },
          {
            "id": "i-a",
            "t": "text",
            "text": "Cách A: viết ngay từ năm đầu",
            "x": 5964,
            "y": 1270,
            "size": 44,
            "at": "l1:straight",
            "color": "coral"
          },
          {
            "id": "i-a2",
            "t": "text",
            "text": "→ giữa bài viết thêm đoạn vá",
            "x": 5994,
            "y": 1345,
            "size": 42,
            "at": "l3:patch",
            "color": "muted"
          },
          {
            "id": "i-ax",
            "t": "strike",
            "over": "i-a",
            "at": "l4:Rewind"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, Sunday. Dũng gets a four-group line graph and writes straight away. Option A.",
          "sub": "Chặng sáu, Chủ nhật. Dũng gặp biểu đồ đường bốn nhóm, viết ngay. Cách A.",
          "keys": [
            "Cách A"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Wait, the smallest group ends up the highest? Now I need another paragraph!",
          "sub": "Ơ, nhóm nhỏ nhất lại vượt lên cao nhất? Giờ phải viết thêm một đoạn!",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Halfway through, he spots it and writes a patch paragraph. Haste makes waste.",
          "sub": "Đến giữa bài mới nhận ra, phải viết thêm đoạn vá. Đúng là dục tốc bất đạt.",
          "keys": [
            "dục tốc bất đạt"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind. Option B.",
          "sub": "Tua lại. Cách B."
        }
      ],
      "ref": "p19"
    },
    {
      "id": "s23",
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
            "id": "i-b",
            "t": "text",
            "text": "Cách B: 3 phút khoanh điểm",
            "x": 5964,
            "y": 1430,
            "size": 46,
            "at": "l1:three",
            "color": "accent",
            "hl": [
              {
                "text": "3 phút",
                "at": "l1:three"
              }
            ]
          },
          {
            "id": "i-s1",
            "t": "text",
            "text": "3' đọc đề, khoanh 3–4 điểm",
            "x": 5964,
            "y": 1520,
            "size": 42,
            "at": "l3:reading"
          },
          {
            "id": "i-s2",
            "t": "text",
            "text": "2–3' câu mở + tổng quan",
            "x": 5964,
            "y": 1585,
            "size": 42,
            "at": "l3:overview"
          },
          {
            "id": "i-s3",
            "t": "text",
            "text": "≈ 12' hai đoạn thân",
            "x": 5964,
            "y": 1650,
            "size": 42,
            "at": "l3:twelve",
            "hl": [
              {
                "text": "12'",
                "at": "l3:twelve"
              }
            ]
          },
          {
            "id": "i-s4",
            "t": "text",
            "text": "2–3' soát số, đơn vị, thì",
            "x": 5964,
            "y": 1715,
            "size": 42,
            "at": "l4:check"
          },
          {
            "id": "i-n",
            "t": "text",
            "text": "Gợi ý luyện, không phải quy định",
            "x": 5964,
            "y": 1790,
            "size": 32,
            "at": "l4:rule",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Option B: three minutes first, circling the highest point, the turning point, where two lines cross.",
          "sub": "Cách B: ba phút đầu khoanh điểm cao nhất, điểm đổi chiều, chỗ hai đường cắt nhau.",
          "keys": [
            "ba phút đầu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Overview first, then two body paragraphs. Done on time, nothing repeated!",
          "sub": "Viết tổng quan trước, rồi hai đoạn thân. Xong đúng giờ, ý không lặp!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A suggested split: three minutes reading, two or three for the opening and overview, about twelve for the body.",
          "sub": "Chia gợi ý: ba phút đọc đề, hai ba phút mở và tổng quan, khoảng mười hai phút thân bài."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Last two or three minutes: check figures, units, tenses, word count. A practice split, not an exam rule.",
          "sub": "Hai ba phút cuối: soát số, đơn vị, thì, số từ. Đây là cách chia khi luyện, không phải quy định thi.",
          "keys": [
            "không phải quy định thi"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: three minutes studying the task saves the whole answer.",
          "sub": "Rút ra: ba phút nhìn kỹ đề tiết kiệm cả bài.",
          "keys": [
            "ba phút nhìn kỹ đề"
          ]
        }
      ],
      "ref": "p18,p19,p20"
    },
    {
      "id": "s24",
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
            "text": "Thứ Hai sau · 20:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:eight"
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
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "stopwatch",
                "bar-chart"
              ],
              "camera": [
                {
                  "at": "l2",
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
            "at": "l1:Monday",
            "caption": "Thứ Hai sau 20:00 · cùng bàn ấy",
            "icon": "stopwatch"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "3' khoanh · tổng quan · 2 đoạn",
            "x": 7932,
            "y": 1270,
            "size": 44,
            "at": "l2:circled",
            "hl": [
              {
                "text": "tổng quan",
                "at": "l2:overview"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Phút 20: xong ✓",
            "x": 7932,
            "y": 1360,
            "size": 60,
            "at": "l3:twenty",
            "color": "accent",
            "hl": [
              {
                "text": "✓",
                "at": "l3:done"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Không tham số → không thâm",
            "x": 7932,
            "y": 1470,
            "size": 48,
            "at": "l4:greedy",
            "color": "accent",
            "hl": [
              {
                "text": "không thâm",
                "at": "l4:nothing"
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
          "say": "Next Monday, eight p.m. Same desk, same stopwatch, same Thảo.",
          "sub": "Thứ Hai tuần sau, tám giờ tối. Vẫn bàn ấy, đồng hồ ấy, Thảo ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Three minutes circled. Overview written. Two body paragraphs.",
          "sub": "Ba phút khoanh điểm. Đã có tổng quan. Hai đoạn thân.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Minute twenty, and I'm done. Nailed it!",
          "sub": "Phút hai mươi, xong. Chỉ tay được rồi!",
          "face": "happy",
          "keys": [
            "Chỉ tay được rồi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not greedy for numbers this time, and she lost nothing.",
          "sub": "Lần này không tham số, nên chẳng thâm gì.",
          "keys": [
            "không tham số"
          ]
        }
      ],
      "ref": "p20"
    },
    {
      "id": "s25",
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
            "id": "j-s",
            "t": "text",
            "text": "Tóm lại: hình nói gì",
            "x": 7932,
            "y": 1570,
            "size": 54,
            "at": "l1:So",
            "hl": [
              {
                "text": "hình nói gì",
                "at": "l1:shows"
              }
            ]
          },
          {
            "id": "j-do",
            "t": "text",
            "text": "Làm ngay: 3 phút khoanh điểm",
            "x": 7932,
            "y": 1660,
            "size": 46,
            "at": "l5:Try",
            "hl": [
              {
                "text": "3 phút",
                "at": "l5:three"
              }
            ]
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 5536,
            "y": 40,
            "at": "l2:full"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9472,
            "y": 40,
            "at": "l3:Introduction"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3568,
            "y": 1130,
            "at": "l4:few"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi học; định dạng, tiêu chí thi có thể đổi — kiểm lại trang chính thức IELTS. Số liệu giả định, nhân vật minh hoạ.",
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
          "say": "So, Task one doesn't want every number. It wants what the picture shows.",
          "sub": "Tóm lại, Task 1 không đòi chép hết số, mà đòi cho thấy hình ấy nói gì.",
          "keys": [
            "hình ấy nói gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: full sentences, at least one hundred and fifty words, in twenty minutes.",
          "sub": "Một: câu đầy đủ, ít nhất một trăm năm mươi từ, trong hai mươi phút."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: Introduction, overview, two body paragraphs.",
          "sub": "Hai: mở đề, tổng quan, hai đoạn thân."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: few figures, in the right places, always compared.",
          "sub": "Ba: ít số, đúng chỗ, luôn so sánh."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: take any chart, three minutes on the clock, and circle the key features.",
          "sub": "Làm ngay: lấy một biểu đồ bất kỳ, bấm ba phút, khoanh các điểm nổi bật.",
          "keys": [
            "khoanh các điểm nổi bật"
          ]
        }
      ],
      "beats": {
        "after": 400
      },
      "ref": "outro"
    },
    {
      "id": "s26",
      "module": "BRK-11",
      "data": {
        "title": "Lộ trình 4 bài tiếp",
        "items": [
          "Câu tổng quan (overview)",
          "Xu hướng và so sánh số liệu",
          "Bảng số liệu và bản đồ",
          "Quy trình, sơ đồ"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Four: processes and diagrams.",
          "sub": "Bốn: quy trình, sơ đồ."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Three: tables and maps.",
          "sub": "Ba: bảng số liệu và bản đồ."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Two: trend and comparison language.",
          "sub": "Hai: từ xu hướng và so sánh."
        },
        {
          "id": "l4",
          "lang": "en",
          "say": "One: the overview sentence. Start here.",
          "sub": "Một: câu tổng quan. Bắt đầu từ đây.",
          "keys": [
            "Bắt đầu từ đây"
          ]
        }
      ],
      "ref": "p21"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "Which points are worth looking for first in a chart?",
        "options": [
          "Only the first and last numbers, ignoring everything in between them",
          "The highest and lowest values, the biggest change, and any turning point",
          "The colours of the bars and the font used for the chart title"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "bar-chart",
        "why": "Bài liệt kê giá trị cao nhất, thấp nhất, thay đổi lớn nhất, điểm đổi chiều và chỗ hai nhóm gặp nhau. Đó là các điểm nổi bật cần khoanh."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which points are worth looking for first in a chart?",
          "sub": "Nên tìm những điểm nào trước tiên trên biểu đồ?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The highest and lowest values, the biggest change, and any turning point.",
          "sub": "Cao nhất, thấp nhất, thay đổi lớn nhất, và điểm đổi chiều hay chỗ vượt nhau."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Find those first. Then write.",
          "sub": "Tìm mấy điểm ấy trước. Rồi mới viết."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[24]"
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
          "say": "Three minutes, circle the key points. Then try the forty questions below.",
          "sub": "Bấm ba phút, khoanh điểm nổi bật. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT TUẦN LUYỆN TASK 1 của Thảo (Thứ Hai 20:00 chép số → gạch đầu dòng, “Khoan đã!” → Thứ Ba Dũng hỏi dạng đề → Thứ Tư khung 4 đoạn → Thứ Năm Lan bảng sáu nước → Thứ Bảy cô Sam chấm → Chủ nhật Dũng cách A/B chia 20 phút → Thứ Hai sau 20:00 khép vòng). Neo mở (HOOK-24): “150 từ · 20 phút” (IELTS.org). Nhân vật: Thảo (chính), Dũng (vai Hùng), Lan (vai Linh), Sam — w145/_series/ielts-writing-task1-takers.md. Cảnh ngắt nhịp: BRK-08 (một tuần), BRK-06 (dạng đề), BRK-07 (rehook viết đủ từng ô), BRK-10 (mô tả band 5), BRK-04 (bài mẫu / viết cho đúng hình), BRK-11 (lộ trình 4 bài). Tục ngữ: “Tham thì thâm” (+ “dục tốc bất đạt” ở cách A). Câu đố questions[24].",
  "loop": {
    "open": "s01",
    "close": "s24"
  }
};
