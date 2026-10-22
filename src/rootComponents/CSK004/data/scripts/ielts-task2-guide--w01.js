// ielts-task2-guide--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "ielts-task2-guide--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "ielts-writing-task2-takers",
    "slug": "ielts-task2-guide",
    "door": "kien-thuc",
    "level": "B1",
    "title": "IELTS Writing Task 2 chấm những gì và vì sao bài dài vẫn điểm thấp?",
    "series": "IELTS Writing Task 2 vượt band 6 — đọc đề, lập ý và viết bài luận cho thí sinh IELTS"
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
            "text": "40 phút · 250 từ",
            "x": 60,
            "y": 100,
            "size": 110,
            "at": "l1:Forty",
            "color": "accent",
            "hl": [
              {
                "text": "250 từ",
                "at": "l1:fifty"
              }
            ]
          },
          {
            "id": "a-x2",
            "t": "text",
            "text": "nặng gấp đôi Task 1",
            "x": 70,
            "y": 300,
            "size": 60,
            "at": "l2:twice",
            "hl": [
              {
                "text": "gấp đôi",
                "at": "l2:twice"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: British Council — IELTS Writing; How IELTS is assessed",
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
          "say": "Forty minutes. Two hundred and fifty words, at least.",
          "sub": "Bốn mươi phút. Ít nhất hai trăm năm mươi từ.",
          "keys": [
            "hai trăm năm mươi từ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "That's IELTS Writing Task 2, the essay. And it counts twice as much as Task 1.",
          "sub": "Đó là IELTS Writing Task 2, bài luận. Và nó nặng gấp đôi Task 1.",
          "keys": [
            "gấp đôi Task 1"
          ]
        }
      ],
      "ref": "p2,p3"
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
            "x": 860,
            "y": 110,
            "w": 780,
            "data": {
              "set": "room",
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
                "stopwatch",
                "memo"
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
            "caption": "Thứ Năm 19:00 · bài luận cũ",
            "icon": "memo"
          },
          {
            "id": "a-w",
            "t": "text",
            "text": "Viết: thấp nhất · 6",
            "x": 60,
            "y": 420,
            "size": 56,
            "at": "l2:lowest",
            "color": "coral",
            "hl": [
              {
                "text": "thấp nhất",
                "at": "l2:lowest"
              }
            ]
          },
          {
            "id": "a-l",
            "t": "text",
            "text": "Bài dài… vẫn 6?",
            "x": 60,
            "y": 520,
            "size": 56,
            "at": "l3:long"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Quý hồ tinh, bất quý hồ đa”",
            "x": 60,
            "y": 630,
            "size": 50,
            "at": "l5:quality",
            "color": "accent",
            "hl": [
              {
                "text": "Quý hồ tinh",
                "at": "l5:quality"
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
          "say": "Meet Thảo, twenty-seven, an office worker taking IELTS Academic for a master's place.",
          "sub": "Đây là Thảo, hai mươi bảy tuổi, nhân viên văn phòng, thi IELTS Academic để học thạc sĩ.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "She took the test once. Listening and Reading were fine. Writing was her lowest: a six.",
          "sub": "Cô đã thi một lần. Nghe, Đọc ổn. Viết thấp nhất: sáu.",
          "keys": [
            "Viết thấp nhất"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "But my essay was so long! Way over the minimum. How is that a six?",
          "sub": "Nhưng bài luận của mình dài lắm! Vượt xa mức tối thiểu. Sao lại sáu?",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Thursday, seven p.m. Thảo opens her old essay, covered in red pen by Sam, her teacher.",
          "sub": "Bảy giờ tối thứ Năm. Thảo mở lại bài luận cũ, đầy vết bút đỏ của Sam, cô giáo của nhóm.",
          "keys": [
            "bút đỏ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "An old saying fits: quality matters, not quantity.",
          "sub": "Ông bà dặn: “Quý hồ tinh, bất quý hồ đa.”",
          "keys": [
            "Quý hồ tinh, bất quý hồ đa"
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
            "text": "Bài dài, sao vẫn điểm thấp?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:long",
            "hl": [
              {
                "text": "điểm thấp",
                "at": "l1:low"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: viết thêm chữ",
            "x": 2028,
            "y": 190,
            "size": 52,
            "at": "l2:more",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:words+300"
          },
          {
            "id": "b-y1",
            "t": "text",
            "text": "Mà là: bốn tiêu chí",
            "x": 2028,
            "y": 290,
            "size": 58,
            "at": "l3:four",
            "color": "accent",
            "hl": [
              {
                "text": "bốn tiêu chí",
                "at": "l3:four"
              }
            ]
          },
          {
            "id": "b-y2",
            "t": "text",
            "text": "trả lời đúng và đủ đề",
            "x": 2088,
            "y": 380,
            "size": 50,
            "at": "l3:answer"
          },
          {
            "id": "b-y3",
            "t": "text",
            "text": "bố cục mạch lạc",
            "x": 2088,
            "y": 455,
            "size": 50,
            "at": "l3:organise"
          },
          {
            "id": "b-y4",
            "t": "text",
            "text": "vốn từ · ngữ pháp",
            "x": 2088,
            "y": 530,
            "size": 50,
            "at": "l3:vocabulary"
          },
          {
            "id": "b-k",
            "t": "text",
            "text": "Lạc đề, thiếu ví dụ → mất điểm",
            "x": 2028,
            "y": 640,
            "size": 46,
            "at": "l4:off",
            "color": "coral",
            "hl": [
              {
                "text": "mất điểm",
                "at": "l4:loses"
              }
            ]
          },
          {
            "id": "b-i",
            "t": "illus",
            "name": "balance-scale",
            "x": 3218,
            "y": 250,
            "size": 300,
            "at": "l3:four"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So why can a long essay still score low?",
          "sub": "Vậy vì sao bài dài vẫn điểm thấp?",
          "keys": [
            "bài dài vẫn điểm thấp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not because you need more words.",
          "sub": "Không phải vì thiếu chữ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Task 2 is marked on four criteria: answer the task fully, organise clearly, then vocabulary and grammar.",
          "sub": "Task 2 chấm bốn tiêu chí: trả lời đúng và đủ đề, bố cục mạch lạc, rồi vốn từ và ngữ pháp.",
          "keys": [
            "bốn tiêu chí"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A long essay that drifts off topic or lacks examples still loses marks on the first one.",
          "sub": "Bài dài mà lạc đề hay thiếu ví dụ vẫn mất điểm ở tiêu chí đầu tiên.",
          "keys": [
            "tiêu chí đầu tiên"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Tối thứ Năm của Thảo",
        "points": [
          {
            "label": "19:00",
            "sub": "Bài luận cũ",
            "illus": "memo"
          },
          {
            "label": "20:00",
            "sub": "Bốn tiêu chí",
            "illus": "balance-scale"
          },
          {
            "label": "20:40",
            "sub": "Band 5·6·7",
            "illus": "bar-chart"
          },
          {
            "label": "21:45",
            "sub": "Từ ăn điểm?",
            "illus": "books"
          },
          {
            "label": "22:15",
            "sub": "Lộ trình",
            "illus": "chequered-flag"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One Thursday evening, one old essay.",
          "sub": "Một tối thứ Năm, một bài luận cũ.",
          "keys": [
            "một bài luận cũ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Red pen ready. Let's read it again.",
          "sub": "Bút đỏ sẵn sàng. Đọc lại nào."
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
            "text": "① 19:00 · Task 2 ở đâu?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4796,
            "y": 150,
            "w": 780,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "point",
                  "face": "thinking"
                }
              ],
              "props": [
                "memo",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l3",
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
            "at": "l1:Stop one",
            "caption": "19:00 · đọc lại đề cũ",
            "icon": "memo"
          },
          {
            "id": "c-60",
            "t": "text",
            "text": "Viết: 60 phút · 2 bài",
            "x": 3996,
            "y": 165,
            "size": 56,
            "at": "l1:sixty",
            "hl": [
              {
                "text": "60 phút",
                "at": "l1:sixty"
              }
            ]
          },
          {
            "id": "c-ac",
            "t": "text",
            "text": "Academic: báo cáo + bài luận",
            "x": 3996,
            "y": 250,
            "size": 44,
            "at": "l2:Academic"
          },
          {
            "id": "c-gt",
            "t": "text",
            "text": "General: thư + bài luận",
            "x": 3996,
            "y": 315,
            "size": 44,
            "at": "l3:General"
          },
          {
            "id": "c-same",
            "t": "text",
            "text": "Bài luận = Task 2, giống nhau",
            "x": 3996,
            "y": 390,
            "size": 48,
            "at": "l4:same",
            "color": "accent",
            "hl": [
              {
                "text": "giống nhau",
                "at": "l4:same"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: British Council — IELTS test format; IELTS Writing",
            "x": 4836,
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
          "say": "Stop one, seven p.m. The British Council says Writing lasts sixty minutes, with two tasks.",
          "sub": "Chặng một, bảy giờ tối. British Council ghi phần Viết dài sáu mươi phút, gồm hai bài.",
          "keys": [
            "sáu mươi phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In IELTS Academic: an academic-style report, then a formal essay.",
          "sub": "Với IELTS Academic: một bản báo cáo kiểu học thuật, rồi một bài luận trang trọng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In General Training: a letter, then a formal essay.",
          "sub": "Với General Training: một bức thư, rồi một bài luận trang trọng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That essay is Task 2, and it's the same in both tests.",
          "sub": "Bài luận ấy là Task 2, và nó giống nhau ở cả hai loại thi.",
          "keys": [
            "giống nhau ở cả hai"
          ]
        }
      ],
      "ref": "p1"
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
            "id": "c-f",
            "t": "text",
            "text": "40 phút · ≥ 250 từ · trang trọng",
            "x": 3996,
            "y": 470,
            "size": 42,
            "at": "l1:forty",
            "hl": [
              {
                "text": "≥ 250 từ",
                "at": "l1:fifty"
              }
            ]
          },
          {
            "id": "c-j1",
            "t": "text",
            "text": "ý kiến · so sánh quan điểm",
            "x": 3996,
            "y": 540,
            "size": 42,
            "at": "l2:defend"
          },
          {
            "id": "c-j2",
            "t": "text",
            "text": "ưu nhược · giải pháp",
            "x": 3996,
            "y": 600,
            "size": 42,
            "at": "l2:advantages"
          },
          {
            "id": "c-ex",
            "t": "text",
            "text": "+ ví dụ đỡ lập trường",
            "x": 3996,
            "y": 662,
            "size": 46,
            "at": "l4:examples",
            "color": "accent",
            "hl": [
              {
                "text": "ví dụ",
                "at": "l4:examples"
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
          "say": "The British Council suggests forty minutes for Task 2, at least two hundred and fifty words, in a formal tone.",
          "sub": "British Council gợi ý bốn mươi phút cho Task 2, tối thiểu hai trăm năm mươi từ, giọng trang trọng.",
          "keys": [
            "bốn mươi phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The task gives a view, an argument or a problem. You may defend an opinion, compare views, weigh advantages, or suggest solutions.",
          "sub": "Đề đưa một quan điểm, lập luận hay vấn đề. Bạn có thể bảo vệ ý kiến, so sánh quan điểm, bàn ưu nhược điểm, hay đề xuất giải pháp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "My topic was online learning. I wrote about it a lot.",
          "sub": "Đề của mình là học trực tuyến. Mình viết về nó nhiều lắm.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Whatever the job, you need examples to support your position.",
          "sub": "Việc nào cũng vậy, bạn cần ví dụ để đỡ cho lập trường của mình.",
          "keys": [
            "ví dụ để đỡ"
          ]
        }
      ],
      "ref": "p2"
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
            "at": "l4",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 19:30 · Bài nào nặng hơn?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6764,
            "y": 150,
            "w": 780,
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
                "stopwatch",
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
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "19:30 · Dũng sang chơi",
            "icon": "stopwatch"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Task 1 làm trước…",
            "x": 5964,
            "y": 190,
            "size": 54,
            "at": "l2:first"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "…ăn lẹm giờ Task 2",
            "x": 5964,
            "y": 280,
            "size": 54,
            "at": "l3:ate",
            "color": "coral",
            "hl": [
              {
                "text": "ăn lẹm",
                "at": "l3:ate"
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
          "say": "Stop two, seven thirty. Meet Dũng, Thảo's cousin, a biology student, dropping by.",
          "sub": "Chặng hai, bảy rưỡi. Đây là Dũng, em họ Thảo, sinh viên sinh học, ghé chơi.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Task 1 comes first, so I take my time on it. The essay can wait.",
          "sub": "Task 1 làm trước thì em làm thong thả. Bài luận tính sau.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Same here. Task 1 ate into my essay time.",
          "sub": "Chị cũng thế. Task 1 ăn lẹm sang giờ của bài luận.",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Careful. That's spending your money on the cheaper dish.",
          "sub": "Cẩn thận. Thế là dồn tiền vào món rẻ hơn rồi."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s07",
      "module": "BRK-03",
      "data": {
        "value": 2,
        "prefix": "×",
        "suffix": "",
        "label": "Task 2 so với Task 1 — British Council",
        "illus": "balance-scale"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The British Council says it plainly.",
          "sub": "British Council ghi rõ."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Task 2 is worth twice as much as Task 1.",
          "sub": "Task 2 có giá trị gấp đôi Task 1.",
          "keys": [
            "gấp đôi Task 1"
          ]
        }
      ],
      "ref": "p3"
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
            "id": "d-3",
            "t": "text",
            "text": "Bài luận yếu: kéo điểm nhiều hơn",
            "x": 5964,
            "y": 390,
            "size": 44,
            "at": "l1:weak"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "Tập canh đủ 40 phút trước",
            "x": 5964,
            "y": 480,
            "size": 50,
            "at": "l2:forty",
            "hl": [
              {
                "text": "40 phút",
                "at": "l2:forty"
              }
            ]
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Nặng gấp đôi: giữ đủ giờ",
            "x": 5964,
            "y": 600,
            "size": 50,
            "at": "l3:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "giữ đủ giờ",
                "at": "l3:keep"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: British Council — How is IELTS assessed",
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
          "say": "So a weak essay drags your Writing score down more than a weak Task 1.",
          "sub": "Nên một bài luận yếu kéo điểm Viết xuống nhiều hơn một bài Task 1 yếu.",
          "keys": [
            "kéo điểm Viết xuống"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Still messy with time? Practise guarding the full forty minutes for the essay first.",
          "sub": "Còn rối giờ? Tập canh đủ bốn mươi phút cho bài luận trước.",
          "keys": [
            "đủ bốn mươi phút"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: Task 2 weighs double, so keep enough time for it.",
          "sub": "Rút ra: Task 2 nặng gấp đôi, nên giữ đủ thời gian cho nó.",
          "keys": [
            "giữ đủ thời gian"
          ]
        }
      ],
      "ref": "p3,p4"
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
            "text": "③ 20:00 · Bốn tiêu chí chấm",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three",
            "hl": [
              {
                "text": "Bốn tiêu chí",
                "at": "l1:four"
              }
            ]
          },
          {
            "id": "e-i0",
            "t": "illus",
            "name": "bullseye",
            "x": 7932,
            "y": 170,
            "size": 70,
            "at": "l2:Task Response"
          },
          {
            "id": "e-c0",
            "t": "text",
            "text": "Task Response",
            "x": 8022,
            "y": 170,
            "size": 46,
            "at": "l2:Task Response+150",
            "color": "accent"
          },
          {
            "id": "e-d0",
            "t": "text",
            "text": "đủ phần, lập trường, phát triển",
            "x": 8772,
            "y": 174,
            "size": 42,
            "at": "l2:Task Response+400"
          },
          {
            "id": "e-i1",
            "t": "illus",
            "name": "link",
            "x": 7932,
            "y": 280,
            "size": 70,
            "at": "l3:Coherence"
          },
          {
            "id": "e-c1",
            "t": "text",
            "text": "Coherence & Cohesion",
            "x": 8022,
            "y": 280,
            "size": 46,
            "at": "l3:Coherence+150",
            "color": "accent"
          },
          {
            "id": "e-d1",
            "t": "text",
            "text": "sắp ý, chia đoạn, nối câu",
            "x": 8772,
            "y": 284,
            "size": 42,
            "at": "l3:Coherence+400"
          },
          {
            "id": "e-i2",
            "t": "illus",
            "name": "books",
            "x": 7932,
            "y": 390,
            "size": 70,
            "at": "l4:Lexical"
          },
          {
            "id": "e-c2",
            "t": "text",
            "text": "Lexical Resource",
            "x": 8022,
            "y": 390,
            "size": 46,
            "at": "l4:Lexical+150",
            "color": "accent"
          },
          {
            "id": "e-d2",
            "t": "text",
            "text": "từ rộng, đúng nghĩa, đúng kết hợp",
            "x": 8772,
            "y": 394,
            "size": 42,
            "at": "l4:Lexical+400"
          },
          {
            "id": "e-i3",
            "t": "illus",
            "name": "gear",
            "x": 7932,
            "y": 500,
            "size": 70,
            "at": "l5:Grammatical"
          },
          {
            "id": "e-c3",
            "t": "text",
            "text": "Grammatical Range & Accuracy",
            "x": 8022,
            "y": 500,
            "size": 46,
            "at": "l5:Grammatical+150",
            "color": "accent"
          },
          {
            "id": "e-d3",
            "t": "text",
            "text": "đa dạng cấu trúc, ít lỗi",
            "x": 8772,
            "y": 504,
            "size": 42,
            "at": "l5:Grammatical+400"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: IELTS Writing Task 2 Band Descriptors (5/2023)",
            "x": 8772,
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
          "say": "Stop three, eight p.m. Examiners use four criteria from the official band descriptors.",
          "sub": "Chặng ba, tám giờ tối. Giám khảo dùng bốn tiêu chí trong bản mô tả band chính thức.",
          "keys": [
            "bốn tiêu chí"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Task Response: do you answer every part, with a clear position, and develop it?",
          "sub": "Task Response, trả lời đề: có trả lời đủ các phần, có lập trường rõ và phát triển ý không?",
          "keys": [
            "trả lời đề"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Coherence and Cohesion: are ideas ordered, paragraphs clear, sentences linked naturally?",
          "sub": "Coherence and Cohesion, mạch lạc và liên kết: ý có sắp xếp, chia đoạn rõ, nối câu tự nhiên không?",
          "keys": [
            "mạch lạc và liên kết"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lexical Resource: is your vocabulary wide enough, accurate, with the right word partners?",
          "sub": "Lexical Resource, vốn từ: từ có đủ rộng, đúng nghĩa, đúng kết hợp không?",
          "keys": [
            "vốn từ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Grammatical Range and Accuracy: varied structures, few errors?",
          "sub": "Grammatical Range and Accuracy, ngữ pháp: đa dạng cấu trúc và ít lỗi không?",
          "keys": [
            "ngữ pháp"
          ]
        }
      ],
      "ref": "p5"
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
              "e-no"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "E",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "e-09",
            "t": "text",
            "text": "Band 0–9 · Overall = trung bình",
            "x": 7932,
            "y": 600,
            "size": 40,
            "at": "l1:nine"
          },
          {
            "id": "e-no",
            "t": "text",
            "text": "Không có tiêu chí “độ dài”",
            "x": 7932,
            "y": 665,
            "size": 44,
            "at": "l2:length",
            "color": "coral",
            "hl": [
              {
                "text": "“độ dài”",
                "at": "l2:length"
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
          "say": "Writing gets a band from zero to nine. Overall is the average of four skills, rounded to the nearest half or whole band.",
          "sub": "Phần Viết được band 0 đến 9. Overall là trung bình bốn kỹ năng, làm tròn đến nửa band hoặc band nguyên gần nhất."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Look closely. No criterion is called length, or difficult words.",
          "sub": "Nhìn kỹ nhé. Không có tiêu chí nào tên là độ dài, hay từ khó.",
          "keys": [
            "độ dài, hay từ khó"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Hmm. Then where did my long essay lose marks?",
          "sub": "Hừm. Vậy bài dài của mình mất điểm ở đâu?",
          "face": "thinking"
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Thứ Năm 20:20 · kế hoạch mới",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Lần sau viết dài hơn nữa",
          "why": "250 từ là tối thiểu, không phải mục tiêu; bài dài thêm mà lặp ý chỉ thêm chỗ cho giám khảo thấy lỗi.",
          "rule": "Đủ 250 từ, đừng vượt quá khoảng 20%"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "New plan: next time, I write even longer!",
          "sub": "Kế hoạch mới: lần sau viết dài hơn nữa!",
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
          "say": "Two hundred and fifty is the minimum, not the target.",
          "sub": "Hai trăm năm mươi từ là mức tối thiểu, không phải mục tiêu.",
          "keys": [
            "không phải mục tiêu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The British Council even advises not going more than about twenty percent over it.",
          "sub": "British Council còn khuyên đừng viết vượt mức tối thiểu quá khoảng hai mươi phần trăm.",
          "keys": [
            "hai mươi phần trăm"
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
          "say": "Just over two hundred and fifty words, and every one answers the task.",
          "sub": "Hơn hai trăm năm mươi từ một chút, chữ nào cũng trả lời đề.",
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
      "ref": "p7"
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
            "id": "e-low",
            "t": "text",
            "text": "Độ dài: chỉ ở band rất thấp",
            "x": 8772,
            "y": 590,
            "size": 40,
            "at": "l1:very low"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "250 từ: điều kiện; đúng đề: điểm",
            "x": 8772,
            "y": 650,
            "size": 40,
            "at": "l3:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "đúng đề: điểm",
                "at": "l3:marks"
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
          "say": "The descriptors only mention length at very low bands, when there's too little to judge.",
          "sub": "Bản mô tả band chỉ nhắc độ dài ở band rất thấp, khi bài thiếu chữ đến mức không đủ để chấm.",
          "keys": [
            "band rất thấp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Extra words full of repeats just give the examiner more places to find mistakes.",
          "sub": "Thêm chữ toàn ý lặp chỉ cho giám khảo thêm chỗ để thấy lỗi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: two hundred and fifty words is the entry ticket. Answering the task earns the marks.",
          "sub": "Rút ra: đủ hai trăm năm mươi từ là điều kiện, trả lời đúng đề mới là điểm.",
          "keys": [
            "trả lời đúng đề mới là điểm"
          ]
        }
      ],
      "ref": "p7,p8"
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
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 20:40 · Band 5 · 6 · 7",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four"
          },
          {
            "id": "f-b0",
            "t": "box",
            "x": 60,
            "y": 1240,
            "w": 520,
            "h": 470,
            "at": "l2:Band five",
            "stroke": 5
          },
          {
            "id": "f-n0",
            "t": "text",
            "text": "Band 5",
            "x": 90,
            "y": 1255,
            "size": 58,
            "at": "l2:Band five+150"
          },
          {
            "id": "f-r00",
            "t": "text",
            "text": "trả lời chưa đủ",
            "x": 90,
            "y": 1360,
            "size": 38,
            "at": "l2:Band five+400"
          },
          {
            "id": "f-r01",
            "t": "text",
            "text": "ý chưa rõ",
            "x": 90,
            "y": 1440,
            "size": 38,
            "at": "l2:Band five+700"
          },
          {
            "id": "f-r02",
            "t": "text",
            "text": "ý lặp, lạc",
            "x": 90,
            "y": 1520,
            "size": 38,
            "at": "l2:Band five+1000"
          },
          {
            "id": "f-b1",
            "t": "box",
            "x": 600,
            "y": 1240,
            "w": 520,
            "h": 470,
            "at": "l3:Band six",
            "stroke": 5
          },
          {
            "id": "f-n1",
            "t": "text",
            "text": "Band 6",
            "x": 630,
            "y": 1255,
            "size": 58,
            "at": "l3:Band six+150"
          },
          {
            "id": "f-r10",
            "t": "text",
            "text": "trả lời đủ phần",
            "x": 630,
            "y": 1360,
            "size": 38,
            "at": "l3:Band six+400"
          },
          {
            "id": "f-r11",
            "t": "text",
            "text": "kết luận mờ",
            "x": 630,
            "y": 1440,
            "size": 38,
            "at": "l3:Band six+700"
          },
          {
            "id": "f-r12",
            "t": "text",
            "text": "ý chưa đủ sâu",
            "x": 630,
            "y": 1520,
            "size": 38,
            "at": "l3:Band six+1000"
          },
          {
            "id": "f-b2",
            "t": "box",
            "x": 1140,
            "y": 1240,
            "w": 520,
            "h": 470,
            "at": "l4:Band seven",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "f-n2",
            "t": "text",
            "text": "Band 7",
            "x": 1170,
            "y": 1255,
            "size": 58,
            "at": "l4:Band seven+150",
            "color": "accent"
          },
          {
            "id": "f-r20",
            "t": "text",
            "text": "trả lời phù hợp",
            "x": 1170,
            "y": 1360,
            "size": 38,
            "at": "l4:Band seven+400"
          },
          {
            "id": "f-r21",
            "t": "text",
            "text": "quan điểm rõ",
            "x": 1170,
            "y": 1440,
            "size": 38,
            "at": "l4:Band seven+700"
          },
          {
            "id": "f-r22",
            "t": "text",
            "text": "ý có dẫn chứng",
            "x": 1170,
            "y": 1520,
            "size": 38,
            "at": "l4:Band seven+1000"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: IELTS Writing Task 2 Band Descriptors (5/2023) — Task Response",
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
          "say": "Stop four, eight forty. Thảo reads the Task Response line for bands five, six and seven.",
          "sub": "Chặng bốn, tám giờ bốn mươi. Thảo đọc dòng Task Response của band năm, sáu, bảy.",
          "keys": [
            "Task Response"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Band five: main parts answered only partly. An opinion, but unclear. Ideas limited, sometimes off topic or repeated.",
          "sub": "Band năm: các phần chính trả lời chưa đủ. Có quan điểm nhưng chưa rõ. Ý hạn chế, có khi lạc hoặc lặp.",
          "keys": [
            "chưa đủ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Band six: main parts answered, some more than others. The conclusion may be unclear. Some ideas underdeveloped.",
          "sub": "Band sáu: các phần chính được trả lời, có phần kỹ hơn. Kết luận có thể chưa rõ. Vài ý chưa phát triển đủ.",
          "keys": [
            "Kết luận có thể chưa rõ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Band seven: a clear position, developed. Main ideas extended and supported, though sometimes too general.",
          "sub": "Band bảy: quan điểm rõ ràng, được phát triển. Ý chính mở rộng, có dẫn chứng, dù đôi khi còn khái quát.",
          "keys": [
            "quan điểm rõ ràng"
          ]
        }
      ],
      "ref": "p9,p10"
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
            "at": "l1",
            "fit": [
              "f-k"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l2:end",
            "fit": "F",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "f-k",
            "t": "text",
            "text": "Qua band 6: lập trường xuyên suốt",
            "x": 60,
            "y": 1740,
            "size": 46,
            "at": "l1:position",
            "color": "accent",
            "hl": [
              {
                "text": "lập trường xuyên suốt",
                "at": "l1:position"
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
          "say": "In short: to pass band six, keep one position from start to finish.",
          "sub": "Nói gọn: muốn qua band sáu, cần một lập trường xuyên suốt.",
          "keys": [
            "lập trường xuyên suốt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And explain and illustrate each main idea properly.",
          "sub": "Và mỗi ý chính phải được giải thích, minh hoạ đến nơi đến chốn.",
          "keys": [
            "đến nơi đến chốn"
          ]
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s15",
      "module": "BRK-07",
      "data": {
        "question": "Vậy bài luận dài của Thảo kẹt ở dòng nào?",
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
          "say": "So which line is Thảo's long essay stuck on?",
          "sub": "Vậy bài luận dài của Thảo kẹt ở dòng nào?",
          "keys": [
            "kẹt ở dòng nào"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p10"
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
            "zoom": 1.35,
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
            "text": "⑤ 21:15 · Bài cũ của Thảo",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2828,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "memo",
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
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Stop five",
            "caption": "21:15 · đề học trực tuyến",
            "icon": "memo"
          },
          {
            "id": "g-q",
            "t": "text",
            "text": "Học trực tuyến thay lớp truyền thống?",
            "x": 2028,
            "y": 1260,
            "size": 38,
            "at": "l1:online"
          },
          {
            "id": "g-p1",
            "t": "box",
            "x": 2028,
            "y": 1340,
            "w": 120,
            "h": 90,
            "at": "l2:three",
            "stroke": 5
          },
          {
            "id": "g-p2",
            "t": "box",
            "x": 2168,
            "y": 1340,
            "w": 120,
            "h": 90,
            "at": "l2:three+200",
            "stroke": 5
          },
          {
            "id": "g-p3",
            "t": "box",
            "x": 2308,
            "y": 1340,
            "w": 120,
            "h": 90,
            "at": "l2:three+400",
            "stroke": 5
          },
          {
            "id": "g-pl",
            "t": "text",
            "text": "3 đoạn ưu điểm",
            "x": 2458,
            "y": 1355,
            "size": 44,
            "at": "l2:advantages"
          },
          {
            "id": "g-m1",
            "t": "box",
            "x": 2028,
            "y": 1450,
            "w": 120,
            "h": 90,
            "at": "l2:one",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "g-ml",
            "t": "text",
            "text": "1 đoạn nhược",
            "x": 2168,
            "y": 1465,
            "size": 44,
            "at": "l2:disadvantages"
          },
          {
            "id": "g-c",
            "t": "text",
            "text": "Kết: “mỗi cách đều có cái hay”",
            "x": 2028,
            "y": 1570,
            "size": 44,
            "at": "l3:merits",
            "color": "coral",
            "hl": [
              {
                "text": "mỗi cách đều có cái hay",
                "at": "l3:merits"
              }
            ]
          },
          {
            "id": "g-x1",
            "t": "text",
            "text": "✗ đồng ý mức nào? ✗ ví dụ?",
            "x": 2028,
            "y": 1655,
            "size": 44,
            "at": "l4:how far",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, quarter past nine. Her old practice task: should online learning replace traditional classes? Agree?",
          "sub": "Chặng năm, chín giờ mười lăm. Đề luyện cũ: học trực tuyến có nên thay lớp học truyền thống không? Đồng ý không?",
          "keys": [
            "học trực tuyến"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thảo wrote three paragraphs of advantages, then one of disadvantages.",
          "sub": "Thảo viết ba đoạn kể ưu điểm, rồi một đoạn kể nhược điểm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "And my conclusion: each way has its merits. Safe, right?",
          "sub": "Kết bài mình viết: mỗi cách đều có cái hay. An toàn mà?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "She never says how far she agrees. And not one paragraph has a specific example.",
          "sub": "Cô không nói rõ mình đồng ý đến mức nào. Và không đoạn nào có ví dụ cụ thể.",
          "keys": [
            "đồng ý đến mức nào"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A long list, like a hotpot of everything in the fridge. Tasty? Maybe. An answer? No.",
          "sub": "Một danh sách dài, như nồi lẩu thập cẩm vét tủ lạnh. Ngon? Có thể. Trả lời đề? Chưa."
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s17",
      "module": "BRK-04",
      "data": {
        "title": "Bài dài của Thảo",
        "wrong": "Dài, kể đủ ưu nhược, kết lưng chừng",
        "right": "Một lập trường rõ, mỗi ý có ví dụ",
        "wrongIllus": "scroll",
        "rightIllus": "bullseye"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Long, everything listed, and a shrug at the end.",
          "sub": "Dài, kể đủ ưu nhược, kết bài lưng chừng.",
          "keys": [
            "kết bài lưng chừng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "One clear position, and an example for each idea.",
          "sub": "Một lập trường rõ, mỗi ý có ví dụ.",
          "keys": [
            "Một lập trường rõ"
          ]
        }
      ],
      "ref": "p11,p12"
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
          }
        ],
        "items": [
          {
            "id": "g-k",
            "t": "text",
            "text": "Dài mà không lập trường = liệt kê",
            "x": 2028,
            "y": 1735,
            "size": 46,
            "at": "l1:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "= liệt kê",
                "at": "l1:list"
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
          "say": "Takeaway: long without a clear position is still just a list.",
          "sub": "Rút ra: dài mà không có lập trường rõ thì vẫn chỉ là liệt kê.",
          "keys": [
            "vẫn chỉ là liệt kê"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "So that's my band six line: the conclusion was unclear.",
          "sub": "Vậy ra mình kẹt đúng dòng band sáu: kết luận chưa rõ.",
          "face": "worried"
        }
      ],
      "ref": "p12"
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
            "at": "l4",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 21:45 · Từ “ăn điểm”?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4796,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "books",
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Stop six",
            "caption": "21:45 · danh sách của Dũng",
            "icon": "books"
          },
          {
            "id": "h-cc",
            "t": "text",
            "text": "Band 6: từ nối máy móc",
            "x": 3996,
            "y": 1260,
            "size": 40,
            "at": "l3:mechanical"
          },
          {
            "id": "h-cc7",
            "t": "text",
            "text": "Band 7: đại từ, từ thay thế",
            "x": 3996,
            "y": 1325,
            "size": 40,
            "at": "l3:pronouns"
          },
          {
            "id": "h-gr",
            "t": "text",
            "text": "Band 7: nhiều câu không lỗi",
            "x": 3996,
            "y": 1390,
            "size": 40,
            "at": "l4:error-free"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, quarter to ten. Dũng waves a list of big words.",
          "sub": "Chặng sáu, mười giờ kém mười lăm. Dũng phe phẩy một danh sách từ “kêu”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Band seven vocabulary! I'll fit these into every essay.",
          "sub": "Từ vựng band bảy! Em sẽ chèn vào mọi bài.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "On cohesion, band six linkers can feel mechanical. Band seven also links with pronouns and substitutes.",
          "sub": "Ở mạch lạc, band sáu dùng từ nối có thể máy móc. Band bảy nối linh hoạt, cả bằng đại từ và từ thay thế.",
          "keys": [
            "máy móc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "On grammar, band seven has many complex structures and many error-free sentences.",
          "sub": "Ở ngữ pháp, band bảy có nhiều cấu trúc phức và nhiều câu không lỗi.",
          "keys": [
            "nhiều câu không lỗi"
          ]
        }
      ],
      "ref": "p15,p16"
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
          }
        ],
        "items": [
          {
            "id": "h-a",
            "t": "text",
            "text": "Cách A: học thuộc, chèn mọi bài",
            "x": 3996,
            "y": 1480,
            "size": 44,
            "at": "l1:Option A",
            "color": "coral"
          },
          {
            "id": "h-a2",
            "t": "text",
            "text": "→ câu gượng, dùng sai nghĩa",
            "x": 4036,
            "y": 1545,
            "size": 40,
            "at": "l1:wrong",
            "color": "muted"
          },
          {
            "id": "h-ax",
            "t": "strike",
            "over": "h-a",
            "at": "l3:Takeaway"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "Cách B: cụm từ theo chủ đề",
            "x": 3996,
            "y": 1620,
            "size": 44,
            "at": "l2:Option B",
            "color": "accent",
            "hl": [
              {
                "text": "cụm từ",
                "at": "l2:partners"
              }
            ]
          },
          {
            "id": "h-b2",
            "t": "text",
            "text": "giáo dục · môi trường · công việc",
            "x": 4036,
            "y": 1685,
            "size": 40,
            "at": "l2:education"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Từ đúng chỗ > từ khó dùng sai",
            "x": 3996,
            "y": 1755,
            "size": 44,
            "at": "l3:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "Từ đúng chỗ",
                "at": "l3:right place"
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
          "say": "Option A: memorise the list, force it into every essay. The sentences sound stiff, some words wrong.",
          "sub": "Cách A: học thuộc danh sách, cố chèn vào mọi bài. Câu đọc gượng, vài từ dùng sai nghĩa.",
          "keys": [
            "Cách A"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Option B: pick common topics like education, environment, work. Note word partners you're sure of, and use them in your own sentences.",
          "sub": "Cách B: chọn chủ đề hay gặp như giáo dục, môi trường, công việc. Ghi cụm từ đi liền nhau mình chắc nghĩa, tập dùng trong câu của mình.",
          "keys": [
            "Cách B"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: a word in the right place beats a hard word used wrong.",
          "sub": "Rút ra: từ đúng chỗ có giá trị hơn từ khó dùng sai.",
          "keys": [
            "từ đúng chỗ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Fine. Fewer fancy words, more sure ones.",
          "sub": "Thôi được. Bớt từ “kêu”, thêm từ chắc.",
          "face": "happy"
        }
      ],
      "ref": "p17,p18"
    },
    {
      "id": "s21",
      "module": "BRK-11",
      "data": {
        "title": "Năm bài theo thứ tự làm",
        "items": [
          "Đọc đúng dạng đề",
          "Lập dàn ý 5 phút",
          "Viết đoạn mạch lạc",
          "Từ và câu chính xác",
          "Tự soát, rút kinh nghiệm"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Five: check your own essay.",
          "sub": "Năm: tự soát bài.",
          "keys": [
            "tự soát bài"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Four: words and sentences.",
          "sub": "Bốn: từ và câu."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Three: clear paragraphs.",
          "sub": "Ba: đoạn mạch lạc."
        },
        {
          "id": "l4",
          "lang": "en",
          "say": "Two: plan first.",
          "sub": "Hai: lập dàn ý."
        },
        {
          "id": "l5",
          "lang": "en",
          "say": "One: read the task. Start here.",
          "sub": "Một: đọc đúng đề. Bắt đầu từ đây.",
          "keys": [
            "Bắt đầu từ đây"
          ]
        }
      ],
      "ref": "p13,p14,p15,p16,p19"
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 22:15 · Lộ trình",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop seven"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Đọc lần lượt 5 bài",
            "x": 5964,
            "y": 1260,
            "size": 44,
            "at": "l1:five"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Cuối tuần: 1 bài trọn 40 phút",
            "x": 5964,
            "y": 1330,
            "size": 46,
            "at": "l2:weekend",
            "color": "accent",
            "hl": [
              {
                "text": "trọn 40 phút",
                "at": "l2:full"
              }
            ]
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "Vài tuần sau: viết lại bài cũ",
            "x": 5964,
            "y": 1400,
            "size": 44,
            "at": "l3:rewrite"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven, ten fifteen. The plan: read the five lessons in order, each with one practice task.",
          "sub": "Chặng bảy, mười giờ mười lăm. Kế hoạch: đọc lần lượt năm bài, mỗi bài làm thực hành với một đề luyện.",
          "keys": [
            "đọc lần lượt năm bài"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "At each weekend, one full essay in forty minutes.",
          "sub": "Cuối mỗi tuần, viết một bài trọn bốn mươi phút.",
          "keys": [
            "trọn bốn mươi phút"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "After a few weeks, rewrite an old essay and compare. See which criterion moved.",
          "sub": "Sau vài tuần, viết lại một bài cũ và so với bản đầu, xem mình tiến ở tiêu chí nào.",
          "keys": [
            "viết lại một bài cũ"
          ]
        }
      ],
      "ref": "p20"
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
            "x": 6764,
            "y": 1240,
            "w": 780,
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
                "memo"
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
            "at": "l1:Next Thursday",
            "caption": "Thứ Năm sau 19:00 · cùng bàn ấy",
            "icon": "stopwatch"
          },
          {
            "id": "i-n1",
            "t": "text",
            "text": "Mở = Kết: đồng ý một phần ✓",
            "x": 5964,
            "y": 1490,
            "size": 40,
            "at": "l2:partly",
            "hl": [
              {
                "text": "một phần",
                "at": "l2:partly"
              }
            ]
          },
          {
            "id": "i-n3",
            "t": "text",
            "text": "Mỗi ý một ví dụ ✓",
            "x": 5964,
            "y": 1560,
            "size": 40,
            "at": "l3:example"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Quý hồ tinh…”",
            "x": 5964,
            "y": 1650,
            "size": 56,
            "at": "l4:quality",
            "color": "accent",
            "hl": [
              {
                "text": "tinh",
                "at": "l4:quality"
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
          "say": "Next Thursday, seven p.m. Same desk, same red pen, same Thảo. Same online learning task.",
          "sub": "Bảy giờ tối thứ Năm tuần sau. Vẫn bàn ấy, bút đỏ ấy, Thảo ấy. Vẫn đề học trực tuyến."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Intro: I partly agree. Conclusion: the very same thing. Pointed it out!",
          "sub": "Mở bài: mình đồng ý một phần. Kết bài: nói đúng điều ấy. Chỉ tay được rồi!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two ideas, an example each, and just over two hundred and fifty words.",
          "sub": "Hai ý, mỗi ý một ví dụ, và chỉ hơn hai trăm năm mươi từ một chút.",
          "keys": [
            "mỗi ý một ví dụ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Shorter than last time, sharper than last time. Quality, not quantity.",
          "sub": "Ngắn hơn lần trước, sắc hơn lần trước. Quý hồ tinh, bất quý hồ đa.",
          "keys": [
            "Quý hồ tinh"
          ]
        }
      ],
      "ref": "p10,p12"
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
            "text": "Tóm lại: tiêu chí, không độ dài",
            "x": 7922,
            "y": 1114,
            "size": 64,
            "at": "l1:So"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Làm ngay: lấy bài luận gần nhất",
            "x": 7932,
            "y": 1290,
            "size": 50,
            "at": "l5:Try",
            "hl": [
              {
                "text": "bài luận gần nhất",
                "at": "l5:latest"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "đủ phần đề? quan điểm rõ?",
            "x": 7972,
            "y": 1375,
            "size": 40,
            "at": "l5:every part"
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Bài tiếp: các dạng đề Task 2",
            "x": 7932,
            "y": 1480,
            "size": 50,
            "at": "l6:Next",
            "color": "accent"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 7504,
            "y": 40,
            "at": "l2:double"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9472,
            "y": 40,
            "at": "l3:four"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3568,
            "y": 1130,
            "at": "l4:position"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi học; quy định thi có thể đổi — kiểm lại trang chính thức IELTS. Đề là đề luyện, nhân vật là minh hoạ.",
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
          "say": "So, Task 2 is marked on four criteria, not on length.",
          "sub": "Tóm lại, Task 2 chấm theo bốn tiêu chí, không theo độ dài.",
          "keys": [
            "không theo độ dài"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: it weighs double, so guard your forty minutes.",
          "sub": "Một: nó nặng gấp đôi, nên giữ đủ bốn mươi phút."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: four criteria, and answering the task comes first.",
          "sub": "Hai: bốn tiêu chí, trả lời đúng đề đứng đầu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: one clear position, from introduction to conclusion, with examples.",
          "sub": "Ba: một lập trường rõ từ mở bài đến kết bài, có ví dụ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: take your latest essay. Did it answer every part? Was your view clear from start to end?",
          "sub": "Làm ngay: lấy bài luận gần nhất. Bài đã trả lời đủ mọi phần chưa? Quan điểm có rõ từ đầu đến cuối không?",
          "keys": [
            "bài luận gần nhất"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next up: the different types of Task 2 questions.",
          "sub": "Bài tiếp theo: các dạng đề Task 2 khác nhau thế nào.",
          "keys": [
            "các dạng đề Task 2"
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
        "q": "A friend writes very long essays to get more marks, what is wrong?",
        "options": [
          "Length is only a minimum, and extra repeated ideas just show more mistakes",
          "Long essays are banned, so the examiner will give a score of zero",
          "Nothing is wrong, because examiners reward every essay over five hundred words"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "memo",
        "why": "250 từ là mức tối thiểu, không phải mục tiêu. Ý lặp hay lạc đề chỉ cho giám khảo thêm chỗ thấy lỗi."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A friend writes very long essays to get more marks, what is wrong?",
          "sub": "Một người bạn viết bài rất dài để được thêm điểm, sai ở đâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Length is only a minimum, and extra repeated ideas just show more mistakes.",
          "sub": "250 từ là mức tối thiểu, không phải mục tiêu. Ý lặp hay lạc đề chỉ cho giám khảo thêm chỗ thấy lỗi."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Enough words is the ticket. The answer earns the marks.",
          "sub": "Đủ chữ là điều kiện, trả lời đúng đề mới là điểm."
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
          "say": "Pick up your latest essay and your red pen. Then try the forty questions below.",
          "sub": "Lấy bài luận gần nhất và cây bút đỏ. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT TỐI THỨ NĂM ở nhà Thảo, mở lại bài luận cũ (19:00 bài cũ → 19:30 Dũng, gấp đôi → 20:00 bốn tiêu chí → 20:20 “Khoan đã!” viết dài hơn? → 20:40 band 5·6·7 → 21:15 bài “mỗi cách đều có cái hay” → 21:45 từ “ăn điểm” → 22:15 lộ trình → Thứ Năm sau 19:00 khép vòng). Neo mở (HOOK-24): “40 phút · 250 từ · gấp đôi” (British Council). Nhân vật: Thảo (chính, vai Minh), Dũng (em họ, vai Trang) — w145/_series/ielts-writing-task2-takers.md. Cảnh ngắt nhịp: BRK-08 (tối thứ Năm), BRK-03 (×2), BRK-07 (rehook), BRK-04 (bài dài / lập trường rõ), BRK-11 (năm bài). Tục ngữ: “Quý hồ tinh, bất quý hồ đa”.",
  "loop": {
    "open": "s01",
    "close": "s23"
  }
};
