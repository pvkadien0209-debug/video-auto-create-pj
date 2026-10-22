// en-email-professor-question-about-coursework--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "en-email-professor-question-about-coursework--w01",
  "hook": "HOOK-22",
  "unit": {
    "audience": "en-students-emailing-professors",
    "slug": "en-email-professor-question-about-coursework",
    "door": "ky-nang",
    "level": "B1",
    "title": "Hỏi giảng viên về bài tập, điểm số qua email tiếng Anh thế nào?",
    "series": "Viết email cho giáo sư — cho sinh viên Việt, được trả lời mà không thất lễ"
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
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "sad"
                }
              ],
              "props": [
                "laptop",
                "thermometer"
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
            "at": "l1",
            "caption": "Thứ Tư tuần 5 · 21:00",
            "icon": "thermometer"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "Dear Professor Wilson,",
            "x": 60,
            "y": 120,
            "size": 60,
            "at": "l2:Dear"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "I was absent today.",
            "x": 60,
            "y": 210,
            "size": 60,
            "at": "l2:absent"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "What did I —",
            "x": 60,
            "y": 300,
            "size": 72,
            "at": "l2:What",
            "color": "coral"
          },
          {
            "id": "a-cut",
            "t": "text",
            "text": "(lát nữa nghe nốt)",
            "x": 60,
            "y": 410,
            "size": 44,
            "at": "l3:finishes",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, a business student. Wednesday night, week five, a fever, and one missed Marketing class.",
          "sub": "Đây là Dũng, sinh viên kinh doanh. Tối thứ Tư tuần năm, sốt, lỡ một buổi Marketing.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Dear Professor Wilson, I was absent today. What did I...",
          "sub": "Kính gửi Giáo sư Wilson, hôm nay em vắng mặt. Em đã…",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Stop right there. We'll hear how he finishes that line in a minute.",
          "sub": "Dừng đã. Lát nữa ta sẽ nghe cậu viết nốt câu ấy.",
          "keys": [
            "viết nốt câu ấy"
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
      "beats": {
        "after": 300
      },
      "ref": "p3"
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
          }
        ],
        "items": [
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Muốn biết phải hỏi”",
            "x": 60,
            "y": 520,
            "size": 56,
            "at": "l1:know",
            "color": "accent",
            "hl": [
              {
                "text": "phải hỏi",
                "at": "l1:ask"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "… hỏi đúng người, đúng cách",
            "x": 100,
            "y": 610,
            "size": 48,
            "at": "l2:right person",
            "hl": [
              {
                "text": "đúng cách",
                "at": "l2:right way"
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
          "say": "Our grandparents say: to know, you must ask. To be good, you must study.",
          "sub": "Ông bà dạy: “Muốn biết phải hỏi, muốn giỏi phải học.”",
          "keys": [
            "Muốn biết phải hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "True. But ask the right person, the right way.",
          "sub": "Đúng thế. Nhưng hỏi đúng người, và đúng cách.",
          "keys": [
            "đúng cách"
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
            "text": "Hỏi bài sao cho được trả lời?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:answer",
            "hl": [
              {
                "text": "được trả lời",
                "at": "l1:answer"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "1. Đọc đề cương trước",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:syllabus"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "2. Nói rõ đã thử gì",
            "x": 2028,
            "y": 250,
            "size": 52,
            "at": "l2:tried"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "3. Hỏi một điểm cụ thể",
            "x": 2028,
            "y": 330,
            "size": 52,
            "at": "l3:specific",
            "hl": [
              {
                "text": "một điểm cụ thể",
                "at": "l3:specific"
              }
            ]
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "4. Điểm số → gặp trực tiếp",
            "x": 2028,
            "y": 410,
            "size": 52,
            "at": "l3:grades",
            "color": "accent"
          },
          {
            "id": "b-mail",
            "t": "illus",
            "name": "e-mail",
            "x": 3368,
            "y": 180,
            "size": 150,
            "at": "l1:email"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you email a lecturer about coursework, and actually get an answer?",
          "sub": "Vậy hỏi giảng viên về bài tập qua email thế nào để thật sự được trả lời?",
          "keys": [
            "được trả lời"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Read the syllabus first. Say what you have tried.",
          "sub": "Đọc đề cương trước. Nói rõ mình đã thử gì."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ask one specific thing. And save grades for a face to face meeting.",
          "sub": "Hỏi một điều cụ thể. Còn chuyện điểm số thì để dành cho buổi gặp trực tiếp.",
          "keys": [
            "một điều cụ thể"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Ba tuần môn MKT 201",
        "points": [
          {
            "label": "Thứ Tư",
            "sub": "Vắng một buổi",
            "illus": "thermometer"
          },
          {
            "label": "Thứ Sáu",
            "sub": "Email hay gặp?",
            "illus": "speech-balloon"
          },
          {
            "label": "Chủ nhật",
            "sub": "Hỏi bài cụ thể",
            "illus": "memo"
          },
          {
            "label": "Thứ Hai",
            "sub": "Điểm C",
            "illus": "page-facing-up"
          },
          {
            "label": "Thứ Năm",
            "sub": "Lỗi tải bài",
            "illus": "warning"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Three weeks of one Marketing course.",
          "sub": "Ba tuần của một môn Marketing.",
          "keys": [
            "Ba tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Five emails, five lessons.",
          "sub": "Năm email, năm bài học."
        }
      ],
      "ref": "intro"
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
            "text": "① Thứ Tư 21:00 · Vắng học",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-m",
            "t": "text",
            "text": "What did I miss?",
            "x": 3996,
            "y": 170,
            "size": 72,
            "at": "l2:miss",
            "color": "coral",
            "hl": [
              {
                "text": "miss?",
                "at": "l2:miss"
              }
            ]
          },
          {
            "id": "c-sl",
            "t": "text",
            "text": "Đề cương có sẵn:",
            "x": 3996,
            "y": 300,
            "size": 50,
            "at": "l4:syllabus"
          },
          {
            "id": "c-sl2",
            "t": "text",
            "text": "hạn nộp · định dạng · cách chấm",
            "x": 4036,
            "y": 370,
            "size": 46,
            "at": "l4:deadlines"
          },
          {
            "id": "c-sl3",
            "t": "text",
            "text": "· chính sách nộp muộn",
            "x": 4036,
            "y": 435,
            "size": 46,
            "at": "l4:late"
          },
          {
            "id": "c-care",
            "t": "text",
            "text": "Hỏi điều có sẵn → “thiếu cẩn thận”",
            "x": 3996,
            "y": 530,
            "size": 46,
            "at": "l3:careless",
            "color": "coral",
            "hl": [
              {
                "text": "thiếu cẩn thận",
                "at": "l3:careless"
              }
            ]
          },
          {
            "id": "c-book",
            "t": "illus",
            "name": "open-book",
            "x": 5386,
            "y": 160,
            "size": 140,
            "at": "l4:syllabus"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: University at Buffalo (CSE) · San José State Writing Center",
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
          "say": "Stop one. Wednesday, nine p.m. Here's the full line.",
          "sub": "Chặng một. Chín giờ tối thứ Tư. Đây là câu đầy đủ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Dear Professor Wilson, I was absent today. What did I miss? Send.",
          "sub": "Kính gửi Giáo sư Wilson, hôm nay em vắng mặt. Em đã bỏ lỡ gì ạ? Gửi.",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Buffalo is blunt: asking what's already in the syllabus makes you look careless.",
          "sub": "Buffalo nói thẳng: hỏi điều đã có trong đề cương khiến bạn trông thiếu cẩn thận.",
          "keys": [
            "thiếu cẩn thận"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Deadlines, format, grading, the late policy. The syllabus usually has them all.",
          "sub": "Hạn nộp, định dạng bài, cách tính điểm, chính sách nộp muộn: đề cương thường có đủ.",
          "keys": [
            "đề cương thường có đủ"
          ]
        }
      ],
      "ref": "p1,p3"
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
            "at": "l2",
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
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 120,
            "w": 720,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "face": "surprised",
                  "pose": "phone"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
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
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Wilson",
            "caption": "Thứ Sáu · hai ngày sau",
            "icon": "e-mail"
          },
          {
            "id": "c-cls",
            "t": "text",
            "text": "Hỏi bạn trước, hỏi thầy sau",
            "x": 3996,
            "y": 620,
            "size": 56,
            "at": "l5:classmate",
            "color": "accent",
            "hl": [
              {
                "text": "Hỏi bạn trước",
                "at": "l5:classmate first"
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
          "say": "Two days later, a reply. Meet Professor Sam Wilson, Marketing lecturer, from Australia.",
          "sub": "Hai ngày sau, có thư trả lời. Đây là cô Sam Wilson, giảng viên Marketing người Úc.",
          "keys": [
            "cô Sam Wilson"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Please check the course page and ask a classmate.",
          "sub": "Em xem trang môn học và hỏi bạn cùng lớp nhé.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Oh. Slides and homework, posted on Wednesday afternoon.",
          "sub": "Ồ. Slide và bài tập đăng từ chiều thứ Tư rồi.",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Buffalo explains: a lecturer can't squeeze a whole class into one email. San José agrees.",
          "sub": "Buffalo giải thích: giảng viên khó tóm cả buổi học trong một email. San José State cũng vậy.",
          "keys": [
            "cả buổi học trong một email"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: ask a classmate first, the lecturer later.",
          "sub": "Rút ra: hỏi bạn trước, hỏi thầy sau.",
          "keys": [
            "hỏi bạn trước, hỏi thầy sau"
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
      "ref": "p2,p3,p4"
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
            "at": "l3",
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
            "text": "② Thứ Sáu 15:00 · Email hay gặp?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 120,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                }
              ],
              "props": [
                "open-book",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2:Lan",
            "caption": "Thứ Sáu 15:00 · quán gần trường",
            "icon": "speech-balloon"
          },
          {
            "id": "d-q",
            "t": "text",
            "text": "“Can you explain how",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l3:explain",
            "color": "coral"
          },
          {
            "id": "d-q2",
            "t": "text",
            "text": "regression works?”",
            "x": 6004,
            "y": 240,
            "size": 50,
            "at": "l3:regression",
            "color": "coral"
          },
          {
            "id": "d-r",
            "t": "text",
            "text": "Gõ lâu hơn nói",
            "x": 5964,
            "y": 340,
            "size": 58,
            "at": "l5:typing",
            "color": "accent",
            "hl": [
              {
                "text": "Gõ lâu hơn nói",
                "at": "l5:typing"
              }
            ]
          },
          {
            "id": "d-r2",
            "t": "text",
            "text": "→ giờ tiếp sinh viên, xin gặp",
            "x": 6004,
            "y": 430,
            "size": 46,
            "at": "l5:office hours"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two. Friday, three p.m., a café near campus.",
          "sub": "Chặng hai. Ba giờ chiều thứ Sáu, quán gần trường."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Lan, Dũng's classmate in year two. Her notes are tidier than the course page.",
          "sub": "Đây là Lan, bạn cùng lớp năm hai của Dũng. Vở ghi của Lan còn gọn hơn trang môn học.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Next email: can you explain how regression works? Short and simple!",
          "sub": "Thư tiếp theo: “Can you explain how regression works?” Ngắn gọn!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Short to ask, but a whole lesson to answer.",
          "sub": "Hỏi thì ngắn, nhưng trả lời mất cả buổi đấy.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Buffalo's test: if typing takes longer than saying, go to office hours or ask to meet.",
          "sub": "Phép thử của Buffalo: gõ lâu hơn nói thì hỏi ở giờ tiếp sinh viên hoặc xin hẹn gặp.",
          "keys": [
            "gõ lâu hơn nói"
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
            "fit": "D",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "d-ok",
            "t": "text",
            "text": "Hợp email:",
            "x": 5964,
            "y": 520,
            "size": 50,
            "at": "l1:Good",
            "color": "accent"
          },
          {
            "id": "d-ok2",
            "t": "text",
            "text": "đề cương, bạn chưa trả lời được",
            "x": 6204,
            "y": 525,
            "size": 42,
            "at": "l1:classmates"
          },
          {
            "id": "d-ok3",
            "t": "text",
            "text": "nộp sau buổi tới · nội dung",
            "x": 6204,
            "y": 585,
            "size": 42,
            "at": "l2:after"
          },
          {
            "id": "d-no",
            "t": "text",
            "text": "Không hợp:",
            "x": 5964,
            "y": 655,
            "size": 50,
            "at": "l3:Not",
            "color": "coral"
          },
          {
            "id": "d-no2",
            "t": "text",
            "text": "nộp trong ngày · trả lời dài",
            "x": 6204,
            "y": 665,
            "size": 38,
            "at": "l3:today"
          },
          {
            "id": "d-no3",
            "t": "text",
            "text": "· chuyện riêng tư",
            "x": 6204,
            "y": 715,
            "size": 38,
            "at": "l3:private"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "San José State's list. Good for email: questions the syllabus and classmates can't answer.",
          "sub": "Danh sách của San José State. Hợp với email: câu hỏi đề cương và bạn bè không trả lời được.",
          "keys": [
            "Hợp với email"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Also questions about work due after the next class, and about course content.",
          "sub": "Cả câu hỏi về bài nộp sau buổi học tới, và về nội dung môn học."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not for email: work due today, questions needing long answers, and private matters.",
          "sub": "Không nên gửi email: bài nộp ngay trong ngày, câu hỏi cần trả lời dài, và chuyện riêng tư.",
          "keys": [
            "Không nên gửi email"
          ]
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s08",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Chủ nhật 20:00",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "“I don't understand the assignment”",
          "why": "Không nói bài nào, đã thử gì, chưa rõ chỗ nào — giảng viên phải hỏi lại.",
          "rule": "Bài nào · đã thử gì · một điểm cần rõ"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Week six case study. Professor, I don't understand the assignment. Can you explain it?",
          "sub": "Bài tuần sáu. “Professor, I don't understand the assignment. Can you explain it?”",
          "face": "worried",
          "pose": "phone",
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
          "say": "Which assignment? Tried what? Unclear where? She'd have to ask back.",
          "sub": "Bài nào? Thử gì rồi? Chưa rõ chỗ nào? Cô sẽ phải hỏi lại.",
          "keys": [
            "Cô sẽ phải hỏi lại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Viết lại nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "I've read the brief twice. Should we analyse one competitor, or all three?",
          "sub": "Em đã đọc đề hai lần. Nên phân tích một đối thủ hay cả ba ạ?",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Better. One clear point, one clear answer.",
          "sub": "Thế mới được. Hỏi một điểm rõ, nhận một câu trả lời rõ.",
          "phase": "redo",
          "keys": [
            "Hỏi một điểm rõ"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Chủ nhật 20:00 · Hỏi một điểm",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three"
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "“this assignment”",
            "x": 7932,
            "y": 165,
            "size": 52,
            "at": "l2:this assignment",
            "color": "muted"
          },
          {
            "id": "e-ax",
            "t": "strike",
            "over": "e-a",
            "at": "l2:name"
          },
          {
            "id": "e-a2",
            "t": "text",
            "text": "→ Week 6 case study",
            "x": 8392,
            "y": 165,
            "size": 52,
            "at": "l2:name",
            "color": "accent"
          },
          {
            "id": "e-code",
            "t": "text",
            "text": "Mã môn cả trong thân thư",
            "x": 7932,
            "y": 250,
            "size": 50,
            "at": "l3:body",
            "hl": [
              {
                "text": "cả trong thân thư",
                "at": "l3:body"
              }
            ]
          },
          {
            "id": "e-chk",
            "t": "text",
            "text": "Đề cương không có → nói ra",
            "x": 7932,
            "y": 330,
            "size": 44,
            "at": "l4:syllabus"
          },
          {
            "id": "e-s1",
            "t": "text",
            "text": "I have read the instructions for",
            "x": 7932,
            "y": 420,
            "size": 44,
            "at": "l5:read",
            "color": "accent"
          },
          {
            "id": "e-s1b",
            "t": "text",
            "text": "Assignment 3, but I am not sure…",
            "x": 7972,
            "y": 480,
            "size": 44,
            "at": "l5:not sure",
            "color": "accent",
            "hl": [
              {
                "text": "not sure",
                "at": "l5:not sure"
              }
            ]
          },
          {
            "id": "e-s2",
            "t": "text",
            "text": "I tried the Week 5 method…",
            "x": 7932,
            "y": 560,
            "size": 44,
            "at": "l6:tried",
            "color": "accent",
            "hl": [
              {
                "text": "I tried",
                "at": "l6:tried"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: University at Buffalo (CSE) · UMass Boston Writing Center",
            "x": 7932,
            "y": 625,
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
          "say": "Stop three. Sunday, eight p.m. What made take two better?",
          "sub": "Chặng ba. Tám giờ tối Chủ nhật. Vì sao bản viết lại tốt hơn?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Buffalo says: don't write this assignment. Name it, like the Week six case study.",
          "sub": "Buffalo khuyên: đừng viết “this assignment”, hãy gọi đúng tên, như “Week 6 case study”.",
          "keys": [
            "gọi đúng tên"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Put the course code in the body too. Some email apps hide the subject once opened.",
          "sub": "Ghi mã môn cả trong thân thư, vì có ứng dụng ẩn tiêu đề khi thư đã mở.",
          "keys": [
            "ẩn tiêu đề"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "UMass Boston adds: checked the syllabus and found nothing? Say so.",
          "sub": "UMass Boston thêm: đã xem đề cương mà không thấy? Hãy nói rõ điều đó.",
          "keys": [
            "nói rõ điều đó"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Like: I have read the instructions for Assignment three, but I am not sure the limit includes references.",
          "sub": "Như: em đã đọc hướng dẫn Bài tập 3 nhưng chưa rõ giới hạn 1.500 từ có tính danh mục tham khảo không.",
          "keys": [
            "chưa rõ"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Or: I tried the method from Week five, but my answer for question two doesn't match.",
          "sub": "Hoặc: em đã thử cách của tuần 5 nhưng đáp án câu 2 không khớp với ví dụ.",
          "keys": [
            "đã thử"
          ]
        }
      ],
      "ref": "p7,p8"
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
            "at": "l2",
            "fit": [
              "e-v"
            ],
            "zoom": 1.3,
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
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8872,
            "y": 330,
            "w": 640,
            "data": {
              "set": "room",
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
                "camera-with-flash"
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
            "at": "l1:number",
            "caption": "Chủ nhật 20:30 · thêm hai câu nhỏ",
            "icon": "memo"
          },
          {
            "id": "e-num",
            "t": "text",
            "text": "Vài câu nhỏ → đánh số",
            "x": 7932,
            "y": 660,
            "size": 46,
            "at": "l1:number",
            "hl": [
              {
                "text": "đánh số",
                "at": "l1:number"
              }
            ]
          },
          {
            "id": "e-shot",
            "t": "text",
            "text": "Lỗi phần mềm → chụp màn hình",
            "x": 7932,
            "y": 715,
            "size": 40,
            "at": "l3:screenshot"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Two or three small questions? UMass Boston says number them.",
          "sub": "Có hai ba câu hỏi nhỏ? UMass Boston gợi ý đánh số.",
          "keys": [
            "đánh số"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "One, the word count. Two, the file format. Done!",
          "sub": "Một, số từ. Hai, định dạng tệp. Xong!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A problem with a file or software? Buffalo says attach the file or a screenshot.",
          "sub": "Vướng ở tệp hay phần mềm? Buffalo khuyên đính kèm tệp hoặc ảnh chụp màn hình.",
          "keys": [
            "ảnh chụp màn hình"
          ]
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Hỏi bài thì vậy. Còn thấy điểm thấp?",
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
          "say": "That's homework. What about a low grade?",
          "sub": "Hỏi bài thì vậy. Còn thấy điểm thấp?"
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
            "text": "④ Thứ Hai tuần 7 · Điểm C",
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
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l2",
                  "face": "sad",
                  "pose": "phone"
                }
              ],
              "props": [
                "page-facing-up",
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
            "at": "l2:Thảo",
            "caption": "Thứ Hai tuần 7 · 18:00",
            "icon": "page-facing-up"
          },
          {
            "id": "f-c",
            "t": "text",
            "text": "C",
            "x": 60,
            "y": 1240,
            "size": 160,
            "at": "l2:C",
            "color": "coral"
          },
          {
            "id": "f-no",
            "t": "text",
            "text": "Không tranh luận điểm qua email",
            "x": 60,
            "y": 1450,
            "size": 46,
            "at": "l4:argue",
            "hl": [
              {
                "text": "qua email",
                "at": "l4:by email"
              }
            ]
          },
          {
            "id": "f-fe",
            "t": "text",
            "text": "FERPA: luật bảo mật hồ sơ",
            "x": 60,
            "y": 1530,
            "size": 40,
            "at": "l5:FERPA",
            "color": "muted"
          },
          {
            "id": "f-pt",
            "t": "text",
            "text": "Gặp mặt → chỉ đúng chỗ trong bài",
            "x": 60,
            "y": 1610,
            "size": 44,
            "at": "l5:point",
            "color": "accent"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: University at Buffalo (CSE) · Tulane Success Center",
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
          "say": "Stop four. Monday of week seven. Grades are out.",
          "sub": "Chặng bốn. Thứ Hai tuần bảy. Điểm đã có."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Thảo, a first-year student in the same course. Her group presentation got a C.",
          "sub": "Đây là Thảo, sinh viên năm nhất cùng môn. Bài thuyết trình nhóm của Thảo được điểm C.",
          "keys": [
            "điểm C"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "A C? That's unfair. I'm writing to her right now!",
          "sub": "Điểm C? Không công bằng. Mình viết thư cho cô ngay!",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Buffalo and Tulane both advise: don't argue about grades by email, unless the lecturer says so.",
          "sub": "Buffalo và Tulane đều khuyên: không tranh luận điểm qua email, trừ khi giảng viên dặn vậy.",
          "keys": [
            "không tranh luận điểm qua email"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Under FERPA, a US privacy law, many schools limit grades by email. In person, she can point at your work.",
          "sub": "Theo FERPA, luật bảo mật hồ sơ học tập ở Mỹ, nhiều trường hạn chế gửi điểm qua email. Gặp mặt, cô chỉ được đúng chỗ.",
          "keys": [
            "chỉ được đúng chỗ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s13",
      "module": "BRK-04",
      "data": {
        "title": "Điểm C, viết gì?",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrong": "Thư dài kể lý do, “Please change our grade.”",
        "right": "Chờ một ngày, hai câu xin gặp",
        "wrongIllus": "page-with-curl",
        "rightIllus": "handshake"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Way A: a long email. Change our grade!",
          "sub": "Cách A: thư dài. Đổi điểm đi!",
          "keys": [
            "Cách A"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Way B: wait a day, ask to meet.",
          "sub": "Cách B: chờ một ngày, xin gặp.",
          "keys": [
            "xin gặp"
          ]
        }
      ],
      "ref": "p14"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Ba · Hai câu xin gặp",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
          },
          {
            "id": "g-s1",
            "t": "text",
            "text": "I would like to understand the",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l2:understand",
            "color": "accent"
          },
          {
            "id": "g-s1b",
            "t": "text",
            "text": "feedback on my midterm essay…",
            "x": 2068,
            "y": 1320,
            "size": 46,
            "at": "l2:feedback",
            "color": "accent",
            "hl": [
              {
                "text": "feedback",
                "at": "l2:feedback"
              }
            ]
          },
          {
            "id": "g-s2",
            "t": "text",
            "text": "Could I come to your office hours",
            "x": 2028,
            "y": 1400,
            "size": 46,
            "at": "l3:office hours",
            "color": "accent"
          },
          {
            "id": "g-s2b",
            "t": "text",
            "text": "this week?",
            "x": 2068,
            "y": 1460,
            "size": 46,
            "at": "l3:week",
            "color": "accent"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Hỏi để học, không đòi điểm",
            "x": 2028,
            "y": 1550,
            "size": 52,
            "at": "l4:learn",
            "hl": [
              {
                "text": "không đòi điểm",
                "at": "l4:not to bargain"
              }
            ]
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "Cách A: giữ nguyên điểm",
            "x": 2028,
            "y": 1630,
            "size": 38,
            "at": "l1:rubric",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five. Tuesday. Way A got a short reply: graded by the rubric, grade unchanged.",
          "sub": "Chặng năm. Thứ Ba. Cách A nhận câu trả lời ngắn: chấm theo thang tiêu chí, giữ nguyên điểm.",
          "keys": [
            "giữ nguyên điểm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So Thảo takes Way B: I would like to understand the feedback on my midterm essay.",
          "sub": "Nên Thảo chọn cách B: “I would like to understand the feedback on my midterm essay.”",
          "keys": [
            "understand the feedback"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then: could I come to your office hours this week?",
          "sub": "Rồi: “Could I come to your office hours this week?”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "She asks to learn, not to bargain. Email to ask for a meeting. The meeting to understand the grade.",
          "sub": "Hỏi để học, không phải để đòi điểm. Email để xin gặp, buổi gặp để hiểu điểm.",
          "keys": [
            "Email để xin gặp, buổi gặp để hiểu điểm"
          ]
        }
      ],
      "ref": "p13,p14,p15"
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
            "at": "l1",
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
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2968,
            "y": 1420,
            "w": 640,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "sam",
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
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "thao",
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
            "caption": "Thứ Tư 14:00 · văn phòng cô Wilson",
            "icon": "office-building"
          },
          {
            "id": "g-ci",
            "t": "text",
            "text": "Thiếu trích dẫn → biết sửa gì",
            "x": 2028,
            "y": 1730,
            "size": 48,
            "at": "l3:fix",
            "color": "accent",
            "hl": [
              {
                "text": "biết sửa gì",
                "at": "l3:fix"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "sam",
          "say": "Your analysis is good. But look here, the citations are missing.",
          "sub": "Phần phân tích tốt. Nhưng nhìn đây, phần trích dẫn còn thiếu.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Oh, I see it now. Thank you, Professor Wilson.",
          "sub": "À, giờ em thấy rồi. Em cảm ơn cô Wilson.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ten minutes face to face. Now Thảo knows exactly what to fix.",
          "sub": "Mười phút gặp mặt. Giờ Thảo biết chính xác cần sửa gì cho bài sau.",
          "keys": [
            "biết chính xác cần sửa gì"
          ]
        }
      ],
      "ref": "p14,p15"
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
            "text": "⑥ Thứ Năm 20:00 · Lỗi tải bài",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4936,
            "y": 1210,
            "w": 640,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "face": "surprised",
                  "pose": "phone"
                }
              ],
              "props": [
                "laptop",
                "warning"
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
            "at": "l1:upload",
            "caption": "Thứ Năm 20:00 · hạn nộp đêm nay",
            "icon": "warning"
          },
          {
            "id": "h-p",
            "t": "text",
            "text": "Lịch sự ≠ thụ động",
            "x": 3996,
            "y": 1260,
            "size": 56,
            "at": "l3:passive",
            "hl": [
              {
                "text": "≠ thụ động",
                "at": "l3:passive"
              }
            ]
          },
          {
            "id": "h-p2",
            "t": "text",
            "text": "gợi ý, không đòi hỏi",
            "x": 4036,
            "y": 1345,
            "size": 46,
            "at": "l4:suggestion"
          },
          {
            "id": "h-w",
            "t": "text",
            "text": "Would it be possible…?",
            "x": 3996,
            "y": 1430,
            "size": 52,
            "at": "l5:Would",
            "color": "accent"
          },
          {
            "id": "h-e",
            "t": "text",
            "text": "If it is easier for you…",
            "x": 3996,
            "y": 1510,
            "size": 52,
            "at": "l5:easier",
            "color": "accent"
          },
          {
            "id": "h-x",
            "t": "text",
            "text": "Nghĩ: có làm thầy tốn công thêm?",
            "x": 3996,
            "y": 1600,
            "size": 42,
            "at": "l4:extra work",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six. Thursday, eight p.m. The upload system shows an error.",
          "sub": "Chặng sáu. Tám giờ tối thứ Năm. Hệ thống nộp bài báo lỗi khi Thảo tải tệp lên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Error again! The deadline is tonight. What do I do?",
          "sub": "Lại lỗi! Hạn nộp là đêm nay. Làm sao bây giờ?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Buffalo says: offer a solution. Polite doesn't mean passive.",
          "sub": "Buffalo khuyên: đề xuất luôn cách giải quyết. Lịch sự không có nghĩa là thụ động.",
          "keys": [
            "Lịch sự không có nghĩa là thụ động"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Make it a suggestion, not a demand, and ask: does it create extra work for her?",
          "sub": "Nói như một gợi ý, không phải đòi hỏi, và tự hỏi: có làm cô tốn thêm công không?",
          "keys": [
            "gợi ý"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Would it be possible to submit a PDF instead? If it is easier for you, I can bring a printed copy.",
          "sub": "“Em nộp PDF thay thế được không ạ?” “Nếu tiện cho cô, em mang bản in đến lớp.”",
          "keys": [
            "Nếu tiện cho cô"
          ]
        }
      ],
      "ref": "p16,p17"
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
          }
        ],
        "items": [
          {
            "id": "h-1",
            "t": "text",
            "text": "(1) Chụp màn hình lỗi",
            "x": 4896,
            "y": 1670,
            "size": 40,
            "at": "l1:screenshot"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "(2) Upload error for Case Study 2",
            "x": 4896,
            "y": 1725,
            "size": 40,
            "at": "l2:Upload"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "(3) Lỗi lúc 8 giờ tối",
            "x": 4896,
            "y": 1780,
            "size": 40,
            "at": "l3:eight"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "(4) I have attached my file…",
            "x": 3996,
            "y": 1690,
            "size": 44,
            "at": "l4:attached",
            "color": "accent",
            "hl": [
              {
                "text": "attached",
                "at": "l4:attached"
              }
            ]
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Báo lỗi kèm bằng chứng, kèm bài",
            "x": 3996,
            "y": 1770,
            "size": 46,
            "at": "l5:proof",
            "hl": [
              {
                "text": "kèm bằng chứng",
                "at": "l5:proof"
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
          "say": "Thảo's five steps. One: screenshot the error message.",
          "sub": "Năm bước của Thảo. Một: chụp màn hình thông báo lỗi.",
          "keys": [
            "chụp màn hình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two, the subject: MKT two-oh-one, Section one, upload error for Case Study two.",
          "sub": "Hai, tiêu đề: “MKT 201, Section 1: Upload error for Case Study 2”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three: I tried to upload at eight p.m., but the system showed the error in the screenshot.",
          "sub": "Ba: em thử tải bài lúc 8 giờ tối nhưng hệ thống báo lỗi như ảnh đính kèm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Four: I have attached my file, in case it helps. Five: thanks, and a full signature.",
          "sub": "Bốn: em gửi kèm tệp bài trong thư, phòng khi cần. Năm: cảm ơn và ký tên đủ mã lớp.",
          "keys": [
            "gửi kèm tệp bài"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Report a problem with proof, and with your finished work.",
          "sub": "Báo lỗi thì kèm bằng chứng, kèm luôn bài làm.",
          "keys": [
            "kèm bằng chứng"
          ]
        }
      ],
      "ref": "p18,p19"
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
            "id": "i-t",
            "t": "text",
            "text": "Thứ Tư tuần 8 · 21:00",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Wednesday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "thermometer"
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
            "at": "l1:fever",
            "caption": "Thứ Tư tuần 8 · lại sốt",
            "icon": "thermometer"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l2:Lan",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1242,
            "size": 56,
            "at": "l2:Lan+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Nhắn Lan, xem trang môn học",
            "x": 6029,
            "y": 1252,
            "size": 44,
            "at": "l2:Lan+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1345,
            "w": 44,
            "h": 44,
            "at": "l3:one question",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1327,
            "size": 56,
            "at": "l3:one question+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Email: một câu cụ thể",
            "x": 6029,
            "y": 1337,
            "size": 44,
            "at": "l3:one question+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1430,
            "w": 44,
            "h": 44,
            "at": "l3:section",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1412,
            "size": 56,
            "at": "l3:section+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Mã môn, lớp, tên bài",
            "x": 6029,
            "y": 1422,
            "size": 44,
            "at": "l3:section+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1515,
            "w": 44,
            "h": 44,
            "at": "l4:Thank you",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1497,
            "size": 56,
            "at": "l4:Thank you+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Cảm ơn khi được trả lời",
            "x": 6029,
            "y": 1507,
            "size": 44,
            "at": "l4:Thank you+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Wednesday, week eight. Nine p.m. Dũng has a fever again. Same room, same missed class.",
          "sub": "Thứ Tư tuần tám. Chín giờ tối. Dũng lại sốt. Vẫn căn phòng ấy, vẫn một buổi học bị lỡ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "This time, I message Lan and check the course page first.",
          "sub": "Lần này, nhắn Lan và xem trang môn học trước đã.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Then just one question, with MKT two-oh-one, Section one, and the task name.",
          "sub": "Rồi chỉ một câu hỏi, kèm MKT 201, lớp 1, và tên bài.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And when she answers: Thank you, that is very clear. Buffalo and Tulane both ask for that.",
          "sub": "Khi cô trả lời: “Thank you, that is very clear.” Buffalo và Tulane đều nhắc điều này.",
          "keys": [
            "Thank you, that is very clear."
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Still not solved? Ask to meet, not another long email chain.",
          "sub": "Vẫn chưa xong? Xin gặp, đừng kéo thêm chuỗi thư dài.",
          "keys": [
            "Xin gặp"
          ]
        }
      ],
      "ref": "p20,p21"
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
            "id": "j-t",
            "t": "text",
            "text": "Tóm lại: hỏi để được trả lời",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:So"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Muốn biết phải hỏi…",
            "x": 7932,
            "y": 1290,
            "size": 56,
            "at": "l5:know",
            "color": "accent"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "… hỏi đúng người, đúng cách",
            "x": 7972,
            "y": 1380,
            "size": 50,
            "at": "l5:right way",
            "hl": [
              {
                "text": "đúng cách",
                "at": "l5:right way"
              }
            ]
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Làm ngay: gạch hạn nộp,",
            "x": 7932,
            "y": 1490,
            "size": 50,
            "at": "l6:underline"
          },
          {
            "id": "j-3b",
            "t": "text",
            "text": "chính sách nộp muộn",
            "x": 7972,
            "y": 1560,
            "size": 50,
            "at": "l6:late"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 5436,
            "y": 40,
            "at": "l2:syllabus"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9372,
            "y": 40,
            "at": "l3:one"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3468,
            "y": 1130,
            "at": "l4:meeting"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo; quy định mỗi trường, mỗi giảng viên một khác — xem đề cương. Nhân vật là minh hoạ.",
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
          "say": "So, a specific question shows you tried. That's what lecturers want to see.",
          "sub": "Tóm lại, một câu hỏi cụ thể cho thấy bạn đã cố gắng. Giảng viên muốn thấy điều đó.",
          "keys": [
            "bạn đã cố gắng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Syllabus and classmates first.",
          "sub": "Đề cương và bạn cùng lớp trước."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then one clear point, with what you tried.",
          "sub": "Rồi một điểm rõ, kèm điều đã thử."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And for grades, email only to ask for a meeting.",
          "sub": "Còn chuyện điểm, email chỉ để xin gặp."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "To know, you must ask. Just ask the right way.",
          "sub": "Muốn biết phải hỏi. Chỉ cần hỏi đúng cách.",
          "keys": [
            "hỏi đúng cách"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Now: open your hardest syllabus and underline the deadlines and the late policy. Next: asking for a meeting.",
          "sub": "Làm ngay: mở đề cương môn khó nhất, gạch dưới hạn nộp và chính sách nộp muộn. Bài sau: xin gặp giảng viên.",
          "keys": [
            "gạch dưới hạn nộp"
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
        "q": "Why is what did I miss a weak question to email a professor?",
        "options": [
          "The question is too short to be accepted by the university email system",
          "The professor cannot easily summarise a whole class in one short email",
          "Professors never let students who were absent come back to class"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "red-question-mark",
        "why": "Câu hỏi này đòi giảng viên kể lại cả buổi học. Hỏi bạn cùng lớp hoặc xem trang môn học sẽ nhanh hơn."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Why is what did I miss a weak question to email a professor?",
          "sub": "Vì sao “What did I miss?” là câu hỏi không nên email giảng viên?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The professor cannot easily summarise a whole class in one short email.",
          "sub": "Giảng viên khó tóm cả buổi học trong một email."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Remember Dũng? Classmate first, lecturer later.",
          "sub": "Nhớ Dũng chứ? Hỏi bạn trước, hỏi thầy sau."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[3]"
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
          "say": "One syllabus, two underlines. Then try the forty questions below.",
          "sub": "Một đề cương, hai chỗ gạch dưới. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144. Hook HOOK-22: câu thoại bị cắt (Dũng gõ “I was absent today. What did I—”), nói trọn ở chặng ① (s04). Dòng thời gian: BA TUẦN môn MKT 201 (Thứ Tư tuần 5 21:00 Dũng ốm → Thứ Sáu cô Wilson trả lời một dòng → Thứ Sáu 15:00 Lan: email hay gặp → Chủ nhật 20:00 hỏi bài case study tuần 6 + “Khoan đã!” → Thứ Hai tuần 7 Thảo điểm C → Thứ Ba hai câu xin gặp, Thứ Tư gặp cô Wilson → Thứ Năm 20:00 lỗi tải bài → Thứ Tư tuần 8 21:00 khép vòng). Nhân vật: Dũng, cô Sam Wilson (giảng viên, người nước ngoài duy nhất lên hình), Lan, Thảo. Tục ngữ: “Muốn biết phải hỏi, muốn giỏi phải học”. Cảnh ngắt nhịp: BRK-08, BRK-07, BRK-04. Câu đố questions[3].",
  "loop": {
    "open": "s00",
    "close": "s18"
  }
};
