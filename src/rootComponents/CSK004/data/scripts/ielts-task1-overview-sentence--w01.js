// ielts-task1-overview-sentence--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "ielts-task1-overview-sentence--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "ielts-writing-task1-takers",
    "slug": "ielts-task1-overview-sentence",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Câu tổng quan (overview) trong Task 1 viết thế nào?",
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
            "fit": [
              "a-pg",
              "a-red"
            ],
            "zoom": 1.5,
            "move": "cut"
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 1400
          }
        ],
        "items": [
          {
            "id": "a-pg",
            "t": "illus",
            "name": "page-facing-up",
            "x": 200,
            "y": 120,
            "size": 300,
            "at": 0
          },
          {
            "id": "a-w",
            "t": "text",
            "text": "150 từ ✓",
            "x": 560,
            "y": 150,
            "size": 60,
            "at": "l1:hundred"
          },
          {
            "id": "a-n",
            "t": "text",
            "text": "Số đúng ✓",
            "x": 560,
            "y": 240,
            "size": 60,
            "at": "l2:correct"
          },
          {
            "id": "a-red",
            "t": "text",
            "text": "Thiếu overview",
            "x": 120,
            "y": 450,
            "size": 84,
            "at": "l3:overview",
            "color": "coral",
            "hl": [
              {
                "text": "overview",
                "at": "l3:overview"
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
          "say": "A returned essay. One hundred and fifty words.",
          "sub": "Một bài viết được trả về. Một trăm năm mươi từ.",
          "keys": [
            "được trả về"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Every number correct.",
          "sub": "Số nào cũng đúng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And one red line from the teacher: no overview.",
          "sub": "Và một dòng bút đỏ của cô giáo: Thiếu overview.",
          "keys": [
            "Thiếu overview"
          ]
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
            "x": 880,
            "y": 120,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "worried"
                },
                {
                  "id": "sam",
                  "side": "left",
                  "enter": "pop",
                  "at": "l3"
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
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Bảy 14:00 · lớp chữa bài",
            "icon": "pencil"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Văn hay chẳng luận đặt dài”",
            "x": 60,
            "y": 640,
            "size": 50,
            "at": "l5:length",
            "color": "accent",
            "hl": [
              {
                "text": "chẳng luận đặt dài",
                "at": "l5:length"
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
          "say": "The essay belongs to Thảo, twenty-seven, an office worker preparing IELTS Academic.",
          "sub": "Bài ấy của Thảo, hai mươi bảy tuổi, nhân viên văn phòng đang luyện IELTS Academic.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I wrote enough words, and every figure is right. So what's missing?",
          "sub": "Mình viết đủ chữ, số nào cũng đúng. Vậy thiếu gì?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Saturday, two p.m., the marking class. And this is Sam, the native teacher with the red pen.",
          "sub": "Thứ Bảy, hai giờ chiều, lớp chữa bài. Còn đây là cô Sam, giáo viên bản ngữ cầm bút đỏ.",
          "keys": [
            "cô Sam"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "Where's your overview, Thảo? What does the chart show?",
          "sub": "Overview của em đâu, Thảo? Biểu đồ này nói gì?",
          "face": "stern"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "As our saying goes: good writing isn't judged by its length.",
          "sub": "Ông bà nói: “Văn hay chẳng luận đặt dài.”",
          "keys": [
            "Văn hay chẳng luận đặt dài"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        },
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 900
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
            "text": "Tổng quan là câu gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:overview",
            "hl": [
              {
                "text": "Tổng quan",
                "at": "l1:overview"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: thêm số",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:more",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:numbers+300"
          },
          {
            "id": "b-y1",
            "t": "text",
            "text": "Mà là: bức tranh lớn",
            "x": 2028,
            "y": 260,
            "size": 56,
            "at": "l3:big picture",
            "color": "accent",
            "hl": [
              {
                "text": "bức tranh lớn",
                "at": "l3:big picture"
              }
            ]
          },
          {
            "id": "b-y2",
            "t": "text",
            "text": "bằng chữ, đặt sớm",
            "x": 2088,
            "y": 350,
            "size": 50,
            "at": "l3:words"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what is this overview, and how do you write one?",
          "sub": "Vậy tổng quan là câu gì, viết thế nào?",
          "keys": [
            "tổng quan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not more numbers.",
          "sub": "Không phải thêm số."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But the big picture: in words, not detailed figures, and placed early.",
          "sub": "Mà là bức tranh lớn: bằng chữ, không bằng số chi tiết, và đặt sớm.",
          "keys": [
            "bức tranh lớn"
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
            "text": "1–2 câu",
            "x": 2928,
            "y": 170,
            "size": 60,
            "at": "l1:two",
            "hl": [
              {
                "text": "1–2 câu",
                "at": "l1:two"
              }
            ]
          },
          {
            "id": "b-k2",
            "t": "text",
            "text": "Tăng hay giảm?",
            "x": 2928,
            "y": 260,
            "size": 50,
            "at": "l1:rise"
          },
          {
            "id": "b-k3",
            "t": "text",
            "text": "Nhóm nào lớn nhất?",
            "x": 2928,
            "y": 335,
            "size": 50,
            "at": "l1:largest"
          },
          {
            "id": "b-k4",
            "t": "text",
            "text": "Chỉ đọc câu này vẫn hiểu",
            "x": 2928,
            "y": 430,
            "size": 46,
            "at": "l2:only",
            "color": "accent",
            "hl": [
              {
                "text": "vẫn hiểu",
                "at": "l2:still"
              }
            ]
          },
          {
            "id": "b-k5",
            "t": "text",
            "text": "Đề kiểm tra đúng việc này",
            "x": 2928,
            "y": 525,
            "size": 46,
            "at": "l3:tests",
            "hl": [
              {
                "text": "đúng việc này",
                "at": "l3:exactly"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: IELTS.org — IELTS Academic format: Writing",
            "x": 2028,
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
          "say": "An overview is one or two sentences: did things rise or fall, which group is largest, what's the clearest difference.",
          "sub": "Tổng quan là một hai câu: tăng hay giảm, nhóm nào lớn nhất, khác biệt nào rõ nhất.",
          "keys": [
            "một hai câu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Read only this sentence, and you still know what the visual is saying.",
          "sub": "Chỉ đọc câu này, người đọc vẫn biết hình muốn nói gì.",
          "keys": [
            "vẫn biết hình muốn nói gì"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The IELTS page says Task one tests exactly this: a well organised overview. Not decoration.",
          "sub": "Trang IELTS ghi Task 1 kiểm tra đúng việc này: một tổng quan được sắp xếp tốt. Không phải đồ trang trí.",
          "keys": [
            "Không phải đồ trang trí"
          ]
        }
      ],
      "ref": "p1"
    },
    {
      "id": "s04",
      "module": "BRK-08",
      "data": {
        "title": "Một chiều thứ Bảy",
        "points": [
          {
            "label": "14:00",
            "sub": "Trả bài",
            "illus": "page-facing-up"
          },
          {
            "label": "14:30",
            "sub": "Nhìn từ xa",
            "illus": "eyes"
          },
          {
            "label": "15:30",
            "sub": "Bằng chữ",
            "illus": "pencil"
          },
          {
            "label": "16:00",
            "sub": "Đặt ở đâu",
            "illus": "round-pushpin"
          },
          {
            "label": "16:30",
            "sub": "Tự kiểm",
            "illus": "check-box-with-check"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One Saturday afternoon, five stops.",
          "sub": "Một chiều thứ Bảy, năm chặng.",
          "keys": [
            "Một chiều thứ Bảy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Red pen ready.",
          "sub": "Bút đỏ sẵn sàng."
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
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 14:15 · Ranh giới band",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-b7",
            "t": "box",
            "x": 3996,
            "y": 180,
            "w": 1600,
            "h": 110,
            "at": "l2:seven",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "c-7",
            "t": "text",
            "text": "Band 7 · tổng quan rõ",
            "x": 4036,
            "y": 200,
            "size": 60,
            "at": "l2:seven+200",
            "color": "accent",
            "hl": [
              {
                "text": "rõ",
                "at": "l2:clear"
              }
            ]
          },
          {
            "id": "c-7b",
            "t": "text",
            "text": "nhóm số hợp lý, nêu xu hướng",
            "x": 4756,
            "y": 210,
            "size": 44,
            "at": "l2:grouped"
          },
          {
            "id": "c-b6",
            "t": "box",
            "x": 3996,
            "y": 320,
            "w": 1600,
            "h": 110,
            "at": "l3:six",
            "stroke": 5
          },
          {
            "id": "c-6",
            "t": "text",
            "text": "Band 6 · cố gắng có tổng quan",
            "x": 4036,
            "y": 340,
            "size": 56,
            "at": "l3:six+200",
            "hl": [
              {
                "text": "cố gắng",
                "at": "l3:attempts"
              }
            ]
          },
          {
            "id": "c-b5",
            "t": "box",
            "x": 3996,
            "y": 460,
            "w": 1600,
            "h": 110,
            "at": "l4:five",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "Band 5 · sa vào chi tiết",
            "x": 4036,
            "y": 480,
            "size": 56,
            "at": "l4:five+200",
            "color": "coral",
            "hl": [
              {
                "text": "chi tiết",
                "at": "l4:details"
              }
            ]
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Tổng quan → điểm Task achievement",
            "x": 3996,
            "y": 620,
            "size": 50,
            "at": "l5:Task",
            "hl": [
              {
                "text": "Task achievement",
                "at": "l5:achievement"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: IELTS Writing band descriptors (5/2023)",
            "x": 3996,
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
          "say": "Stop one, two fifteen. Sam draws a ladder from the official band descriptors.",
          "sub": "Chặng một, hai giờ mười lăm. Cô Sam vẽ cái thang từ bản mô tả band chính thức."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Band seven: a clear overview, data grouped sensibly, main trends or differences shown.",
          "sub": "Band 7: có tổng quan rõ, số liệu xếp nhóm hợp lý, nêu được xu hướng hay khác biệt chính.",
          "keys": [
            "tổng quan rõ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Band six: the answer only attempts a relevant overview.",
          "sub": "Band 6: bài mới chỉ cố gắng có một tổng quan phù hợp.",
          "keys": [
            "cố gắng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Band five: it tends to focus on details, without the bigger picture.",
          "sub": "Band 5: có xu hướng sa vào chi tiết, không nói tới bức tranh lớn.",
          "keys": [
            "sa vào chi tiết"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So the overview hits your Task achievement score directly.",
          "sub": "Vậy tổng quan ảnh hưởng thẳng đến điểm Task achievement.",
          "keys": [
            "ảnh hưởng thẳng"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 14:30 · Bốn câu tự hỏi",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two",
            "hl": [
              {
                "text": "Bốn câu",
                "at": "l1:four"
              }
            ]
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "☐ Tăng, giảm hay giữ nguyên?",
            "x": 5964,
            "y": 180,
            "size": 46,
            "at": "l2:rise"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "☐ Nhóm lớn nhất, nhỏ nhất?",
            "x": 5964,
            "y": 255,
            "size": 46,
            "at": "l2:largest"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "☐ Ai vượt lên, ai tụt xuống?",
            "x": 5964,
            "y": 330,
            "size": 46,
            "at": "l3:overtake"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "☐ Điểm chung của các nhóm?",
            "x": 5964,
            "y": 405,
            "size": 46,
            "at": "l3:common"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "2 câu trả lời rõ là đủ",
            "x": 5964,
            "y": 495,
            "size": 50,
            "at": "l4:Two",
            "color": "accent",
            "hl": [
              {
                "text": "là đủ",
                "at": "l4:enough"
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
          "say": "Stop two, two thirty. Before writing, four questions.",
          "sub": "Chặng hai, hai giờ rưỡi. Trước khi viết, tự hỏi bốn câu.",
          "keys": [
            "bốn câu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Did the groups rise, fall, or stay about the same? Which is largest, which smallest, most of the time?",
          "sub": "Các nhóm tăng, giảm hay gần như giữ nguyên? Nhóm nào lớn nhất, nhỏ nhất trong phần lớn thời gian?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Did any group overtake or drop below another? Do the groups have something in common?",
          "sub": "Có nhóm nào vượt lên hay tụt xuống không? Các nhóm có điểm gì chung không?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Two clear answers are usually enough for an overview.",
          "sub": "Hai câu trả lời rõ nhất thường là đủ làm tổng quan.",
          "keys": [
            "Hai câu trả lời rõ nhất"
          ]
        }
      ],
      "ref": "p3"
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
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "bar-chart",
                "eyes"
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
            "at": "l1:trick",
            "caption": "14:40 · che số, nhìn từ xa",
            "icon": "eyes"
          },
          {
            "id": "d-f1",
            "t": "text",
            "text": "Che số → nhìn hình dạng",
            "x": 5964,
            "y": 590,
            "size": 46,
            "at": "l3:Cover",
            "hl": [
              {
                "text": "Che số",
                "at": "l3:Cover"
              }
            ]
          },
          {
            "id": "d-f2",
            "t": "text",
            "text": "Thấy đầu tiên = cần nói",
            "x": 5964,
            "y": 670,
            "size": 46,
            "at": "l4:first",
            "color": "accent",
            "hl": [
              {
                "text": "cần nói",
                "at": "l4:needs"
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
          "say": "Then Sam's trick: look at the chart from a distance.",
          "sub": "Rồi mẹo của cô Sam: nhìn biểu đồ từ xa.",
          "keys": [
            "nhìn biểu đồ từ xa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Hands over the numbers. One line goes up, one goes down, and that bar is way taller!",
          "sub": "Lấy tay che số. Một đường đi lên, một đường đi xuống, cột kia cao vượt hẳn!",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Cover the numbers. Look only at the shape of the lines, the height of the bars.",
          "sub": "Che số đi. Chỉ nhìn hình dạng của đường, chiều cao của cột."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "What you see first is what readers see first, and what the overview needs.",
          "sub": "Cái thấy đầu tiên là cái người đọc thấy đầu tiên, cũng là cái tổng quan cần nói.",
          "keys": [
            "tổng quan cần nói"
          ]
        }
      ],
      "ref": "p4"
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
            "text": "③ 15:00 · Câu nào là tổng quan?",
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
              "set": "meeting",
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
                "chart-increasing",
                "motor-scooter"
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
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "15:00 · đề luyện, số giả định",
            "icon": "motor-scooter"
          },
          {
            "id": "e-0",
            "t": "text",
            "text": "Đi học: 2010 → 2025",
            "x": 7932,
            "y": 170,
            "size": 48,
            "at": "l2:twenty"
          },
          {
            "id": "e-m",
            "t": "text",
            "text": "Xe máy: luôn cao nhất",
            "x": 7932,
            "y": 245,
            "size": 44,
            "at": "l3:motorbikes"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "Xe buýt: tăng dần",
            "x": 7932,
            "y": 310,
            "size": 44,
            "at": "l3:bus"
          },
          {
            "id": "e-c",
            "t": "text",
            "text": "Xe đạp: giảm dần",
            "x": 7932,
            "y": 375,
            "size": 44,
            "at": "l3:cycling"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, three o'clock. Meet Dũng, Thảo's cousin, a second-year student who joins the class.",
          "sub": "Chặng ba, ba giờ. Đây là Dũng, em họ Thảo, sinh viên năm hai, theo chị đến lớp.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "My practice graph: how students at one university got to class, twenty ten to twenty twenty-five. Made-up numbers.",
          "sub": "Đồ thị luyện của em: sinh viên một trường đi học bằng gì, 2010 đến 2025. Số giả định.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Motorbikes always on top. The bus climbs slowly. Cycling slowly falls.",
          "sub": "Xe máy luôn cao nhất. Xe buýt tăng dần. Xe đạp giảm dần."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p5"
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
          },
          {
            "at": "l4",
            "fit": [
              "e-ob"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l5",
            "fit": "E",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "e-oa",
            "t": "text",
            "text": "A · 2010: một nửa đi xe máy",
            "x": 7932,
            "y": 450,
            "size": 42,
            "at": "l1:half"
          },
          {
            "id": "e-ob",
            "t": "text",
            "text": "B · máy dẫn, buýt tăng, đạp giảm",
            "x": 7932,
            "y": 520,
            "size": 42,
            "at": "l1:remained"
          },
          {
            "id": "e-oc",
            "t": "text",
            "text": "C · biểu đồ nói về đi lại",
            "x": 7932,
            "y": 590,
            "size": 42,
            "at": "l1:transport"
          },
          {
            "id": "e-xa",
            "t": "strike",
            "over": "e-oa",
            "at": "l3:detail"
          },
          {
            "id": "e-xc",
            "t": "strike",
            "over": "e-oc",
            "at": "l3:trend"
          },
          {
            "id": "e-okb",
            "t": "box",
            "x": 7912,
            "y": 505,
            "w": 1050,
            "h": 70,
            "at": "l4:names",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Nhóm lớn nhất + hướng thay đổi",
            "x": 7932,
            "y": 680,
            "size": 46,
            "at": "l5:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "hướng thay đổi",
                "at": "l5:direction"
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
          "say": "Option A: half went by motorbike in twenty ten. B: motorbikes remained most common, while buses grew and cycling dropped. C: the chart gives information about transport.",
          "sub": "A: năm 2010, một nửa đi xe máy. B: xe máy vẫn phổ biến nhất, xe buýt tăng, xe đạp giảm. C: biểu đồ cung cấp thông tin về đi lại.",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your guess? Three seconds.",
          "sub": "Bạn chọn câu nào? Ba giây.",
          "pause": 1500
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A is one detail of one year. C says no trend at all.",
          "sub": "A chỉ là một chi tiết của một năm. C chẳng nói xu hướng nào.",
          "keys": [
            "chẳng nói xu hướng nào"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "B names the largest group and two directions of change. B wins.",
          "sub": "B nêu nhóm lớn nhất và hai hướng thay đổi. Chọn B.",
          "keys": [
            "Chọn B"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: the overview names the biggest group and the direction of change.",
          "sub": "Rút ra: tổng quan nói nhóm lớn nhất và hướng thay đổi.",
          "keys": [
            "nhóm lớn nhất và hướng thay đổi"
          ]
        }
      ],
      "ref": "p5,p6"
    },
    {
      "id": "s10",
      "module": "BRK-07",
      "data": {
        "question": "Tổng quan có số thì chẳng phải chính xác hơn?",
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
          "say": "Wouldn't an overview with numbers be more precise?",
          "sub": "Tổng quan có số thì chẳng phải chính xác hơn sao?",
          "keys": [
            "chính xác hơn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p7"
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
            "text": "④ 15:30 · Tổng quan có số?",
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
              "set": "meeting",
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
                "chart-increasing"
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
            "at": "l1:Stop four",
            "caption": "15:30 · viết lại overview",
            "icon": "memo"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Ô tô: 20% → 45%",
            "x": 60,
            "y": 1270,
            "size": 52,
            "at": "l2:twenty"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Xe buýt: 50% → 30%",
            "x": 60,
            "y": 1355,
            "size": 52,
            "at": "l2:fifty"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four, half past three. Thảo rewrites her overview on a made-up travel chart.",
          "sub": "Chặng bốn, ba rưỡi. Thảo viết lại tổng quan cho một biểu đồ đi lại giả định."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Overall, car use rose from twenty to forty-five per cent, while bus use fell from fifty to thirty.",
          "sub": "Nhìn chung, đi ô tô tăng từ hai mươi lên bốn mươi lăm phần trăm, còn xe buýt giảm từ năm mươi xuống ba mươi.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Every figure correct. Very precise.",
          "sub": "Số nào cũng đúng. Rất chính xác."
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "meeting",
        "label": "Thứ Bảy 15:35 · lớp chữa bài",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Tổng quan toàn số",
          "why": "Câu đúng số nhưng là câu thân bài, chưa nói điều gì lớn hơn các con số; đoạn thân dễ lặp lại đúng những số ấy.",
          "rule": "Tổng quan bằng chữ, đoạn thân mới dùng số"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Four percentages in one sentence. That's a strong overview!",
          "sub": "Bốn con số phần trăm trong một câu. Tổng quan thế là chắc!",
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
          "say": "That's a body sentence wearing an overview hat. It says nothing bigger than the numbers.",
          "sub": "Đó là câu thân bài đội mũ tổng quan. Nó chưa nói gì lớn hơn các con số.",
          "keys": [
            "câu thân bài đội mũ tổng quan"
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
          "who": "thao",
          "say": "Overall, car travel became much more popular, and the bus lost its top spot.",
          "sub": "Nhìn chung, ô tô phổ biến hơn hẳn, xe buýt mất ngôi đầu.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. The trend and the change of leader. Numbers wait for the body.",
          "sub": "Đúng. Xu hướng và sự đổi ngôi. Con số để dành cho đoạn thân.",
          "phase": "redo",
          "keys": [
            "sự đổi ngôi"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p8"
    },
    {
      "id": "s13",
      "module": "BRK-04",
      "data": {
        "title": "Viết lại tổng quan",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Ô tô 20% → 45%, buýt 50% → 30%",
        "right": "Ô tô phổ biến hơn hẳn, buýt mất ngôi",
        "wrongIllus": "input-numbers",
        "rightIllus": "automobile"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: four numbers, no big picture.",
          "sub": "Trước: bốn con số, không bức tranh lớn.",
          "keys": [
            "không bức tranh lớn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: a trend, and a new leader.",
          "sub": "Sau: một xu hướng, và kẻ đổi ngôi.",
          "keys": [
            "kẻ đổi ngôi"
          ]
        }
      ],
      "ref": "p8"
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
            "id": "f-r1",
            "t": "text",
            "text": "Band 7: hai việc tách nhau",
            "x": 60,
            "y": 1470,
            "size": 48,
            "at": "l1:separates",
            "hl": [
              {
                "text": "hai việc",
                "at": "l1:two"
              }
            ]
          },
          {
            "id": "f-r2",
            "t": "text",
            "text": "① Tổng quan rõ → bằng chữ",
            "x": 60,
            "y": 1545,
            "size": 44,
            "at": "l1:clear"
          },
          {
            "id": "f-r3",
            "t": "text",
            "text": "② Đặc điểm minh hoạ → số",
            "x": 60,
            "y": 1615,
            "size": 44,
            "at": "l2:figures"
          },
          {
            "id": "f-r4",
            "t": "text",
            "text": "Không phải luật IELTS, là cách luyện",
            "x": 60,
            "y": 1690,
            "size": 36,
            "at": "l3:rule",
            "color": "muted"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Tổng quan bằng chữ, thân bằng số",
            "x": 60,
            "y": 1760,
            "size": 44,
            "at": "l4:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "bằng chữ",
                "at": "l4:words"
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
          "say": "Why? Band seven separates two jobs: a clear overview, and key features highlighted and illustrated.",
          "sub": "Vì sao? Band 7 tách hai việc: có tổng quan rõ, và đặc điểm chính được làm nổi bật, minh hoạ.",
          "keys": [
            "tách hai việc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The overview does job one. The body uses figures for job two.",
          "sub": "Tổng quan làm việc một. Đoạn thân dùng số làm việc hai."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "This is a common practice method, not an official rule. But numbers in the overview tend to repeat later.",
          "sub": "Đây là cách luyện phổ biến, không phải luật chính thức. Nhưng số trong tổng quan dễ bị lặp lại ở thân bài.",
          "keys": [
            "không phải luật chính thức"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: overview in words, figures in the body.",
          "sub": "Rút ra: tổng quan bằng chữ, đoạn thân mới dùng số.",
          "keys": [
            "tổng quan bằng chữ"
          ]
        }
      ],
      "ref": "p7,p9"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 16:00 · Đặt tổng quan ở đâu?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
          },
          {
            "id": "g-p1",
            "t": "box",
            "x": 2028,
            "y": 1270,
            "w": 200,
            "h": 70,
            "at": "l2:introduction",
            "stroke": 4
          },
          {
            "id": "g-p1t",
            "t": "text",
            "text": "Mở",
            "x": 2088,
            "y": 1278,
            "size": 46,
            "at": "l2:introduction+200"
          },
          {
            "id": "g-p2",
            "t": "box",
            "x": 2028,
            "y": 1360,
            "w": 200,
            "h": 70,
            "at": "l2:introduction+400",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "g-p2t",
            "t": "text",
            "text": "Tổng quan",
            "x": 2043,
            "y": 1372,
            "size": 40,
            "at": "l2:introduction+600",
            "color": "accent",
            "hl": [
              {
                "text": "Tổng quan",
                "at": "l2:paragraph"
              }
            ]
          },
          {
            "id": "g-p3",
            "t": "box",
            "x": 2028,
            "y": 1450,
            "w": 200,
            "h": 70,
            "at": "l2:end",
            "stroke": 4
          },
          {
            "id": "g-p3t",
            "t": "text",
            "text": "Thân 1",
            "x": 2063,
            "y": 1458,
            "size": 46,
            "at": "l2:end+200"
          },
          {
            "id": "g-or",
            "t": "text",
            "text": "hoặc cuối bài",
            "x": 2268,
            "y": 1470,
            "size": 46,
            "at": "l2:end+400",
            "color": "muted"
          },
          {
            "id": "g-b1",
            "t": "text",
            "text": "Giám khảo thấy ngay",
            "x": 2268,
            "y": 1280,
            "size": 46,
            "at": "l3:examiner"
          },
          {
            "id": "g-b2",
            "t": "text",
            "text": "Mình có hướng chia thân bài",
            "x": 2268,
            "y": 1370,
            "size": 42,
            "at": "l3:plan"
          },
          {
            "id": "g-w",
            "t": "text",
            "text": "Overall, · In general, · It is clear that…",
            "x": 2028,
            "y": 1560,
            "size": 40,
            "at": "l4:Overall",
            "hl": [
              {
                "text": "Overall,",
                "at": "l4:Overall"
              }
            ]
          },
          {
            "id": "g-no",
            "t": "text",
            "text": "Không nêu ý kiến",
            "x": 2028,
            "y": 1635,
            "size": 46,
            "at": "l5:opinion",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, four o'clock. Where does the overview go?",
          "sub": "Chặng năm, bốn giờ. Tổng quan đặt ở đâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two common spots: its own paragraph right after the introduction, or at the end.",
          "sub": "Hai chỗ hay dùng: thành đoạn riêng ngay sau câu mở, hoặc ở cuối bài."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Early wins twice: the examiner sees it at once, and you get a plan for the body.",
          "sub": "Đặt sớm lợi hai đường: giám khảo thấy ngay, và chính bạn có hướng chia thân bài.",
          "keys": [
            "Đặt sớm lợi hai đường"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It often opens with Overall, In general, or It is clear that.",
          "sub": "Thường mở bằng “Overall,”, “In general,” hay “It is clear that…”."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Task one needs no opinion conclusion. At the end, it still only sums up the big picture.",
          "sub": "Task 1 không cần kết luận nêu ý kiến. Đặt cuối, nó vẫn chỉ tóm bức tranh lớn.",
          "keys": [
            "không cần kết luận nêu ý kiến"
          ]
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
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "pose": "point"
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
                  "at": "l1",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "16:10 · cô Sam đọc to hai câu",
            "icon": "pencil"
          },
          {
            "id": "g-6",
            "t": "text",
            "text": "Band 6: “cố gắng” (attempted)",
            "x": 2028,
            "y": 1710,
            "size": 42,
            "at": "l3:attempted",
            "hl": [
              {
                "text": "attempted",
                "at": "l3:attempted"
              }
            ]
          },
          {
            "id": "g-7",
            "t": "text",
            "text": "Band 7: “rõ” (clear)",
            "x": 2028,
            "y": 1780,
            "size": 42,
            "at": "l3:clear",
            "color": "accent",
            "hl": [
              {
                "text": "clear",
                "at": "l3:clear"
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
          "say": "Overall, there were some changes in the figures. Which changes?",
          "sub": "Overall, there were some changes in the figures. Thay đổi nào?",
          "face": "stern"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Overall, spending on food fell, while housing rose to become the largest item.",
          "sub": "Overall, chi cho ăn uống giảm, còn nhà ở tăng lên thành khoản lớn nhất.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The descriptors use two words: band six, attempted. Band seven, clear.",
          "sub": "Bản mô tả dùng hai chữ: band 6 là “cố gắng”, band 7 là “rõ”.",
          "keys": [
            "cố gắng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sam's sentence has the shape of an overview, but says no change. Thảo's shows the picture.",
          "sub": "Câu của cô Sam có dáng tổng quan mà không nói thay đổi nào. Câu của Thảo mới cho thấy hình.",
          "keys": [
            "có dáng tổng quan"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: put it early, and make it specific.",
          "sub": "Rút ra: đặt sớm, và viết thật cụ thể.",
          "keys": [
            "viết thật cụ thể"
          ]
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s17",
      "module": "BRK-06",
      "data": {
        "title": "Tổng quan theo dạng đề",
        "items": [
          {
            "illus": "chart-increasing",
            "text": "Đường: hướng chung"
          },
          {
            "illus": "bar-chart",
            "text": "Cột, bảng: lớn nhất"
          },
          {
            "illus": "pie",
            "text": "Tròn: phần lớn nhất"
          },
          {
            "illus": "gear",
            "text": "Quy trình: mấy bước"
          },
          {
            "illus": "world-map",
            "text": "Bản đồ: đổi gì"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Lines, bars, pies, processes, maps.",
          "sub": "Đường, cột, tròn, quy trình, bản đồ."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Each one, a different overview.",
          "sub": "Mỗi dạng một kiểu tổng quan.",
          "keys": [
            "Mỗi dạng một kiểu tổng quan"
          ]
        }
      ],
      "ref": "p13,p14"
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 16:15 · Mỗi dạng một kiểu",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six"
          },
          {
            "id": "h-i1",
            "t": "illus",
            "name": "chart-increasing",
            "x": 4006,
            "y": 1260,
            "size": 70,
            "at": "l2:line"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Hướng chung, nhóm cao nhất",
            "x": 4096,
            "y": 1270,
            "size": 44,
            "at": "l2:line+200"
          },
          {
            "id": "h-i2",
            "t": "illus",
            "name": "bar-chart",
            "x": 4006,
            "y": 1350,
            "size": 70,
            "at": "l3:bar"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Lớn nhất, nhỏ nhất, khác biệt",
            "x": 4096,
            "y": 1360,
            "size": 44,
            "at": "l3:bar+200"
          },
          {
            "id": "h-i3",
            "t": "illus",
            "name": "pie",
            "x": 4006,
            "y": 1440,
            "size": 70,
            "at": "l4:pie"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Phần nhiều nhất; tăng, giảm",
            "x": 4096,
            "y": 1450,
            "size": 44,
            "at": "l4:pie+200"
          },
          {
            "id": "h-i4",
            "t": "illus",
            "name": "gear",
            "x": 4006,
            "y": 1530,
            "size": 70,
            "at": "l5:process"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "Mấy bước, đầu, cuối, vòng lặp",
            "x": 4096,
            "y": 1540,
            "size": 44,
            "at": "l5:process+200",
            "hl": [
              {
                "text": "Mấy bước",
                "at": "l5:stages"
              }
            ]
          },
          {
            "id": "h-i5",
            "t": "illus",
            "name": "world-map",
            "x": 4006,
            "y": 1620,
            "size": 70,
            "at": "l6:maps"
          },
          {
            "id": "h-5",
            "t": "text",
            "text": "Thay đổi lớn nhất, cái giữ nguyên",
            "x": 4096,
            "y": 1630,
            "size": 42,
            "at": "l6:maps+200",
            "hl": [
              {
                "text": "giữ nguyên",
                "at": "l6:same"
              }
            ]
          },
          {
            "id": "h-n",
            "t": "text",
            "text": "Hai dạng cuối: hai bài cuối chuỗi",
            "x": 3996,
            "y": 1740,
            "size": 40,
            "at": "l7:last",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, quarter past four. Each task type, its own overview.",
          "sub": "Chặng sáu, bốn giờ mười lăm. Mỗi dạng đề một kiểu tổng quan."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Line graph: the general direction over time, and the top group or the one that overtakes.",
          "sub": "Biểu đồ đường: hướng chung theo thời gian, nhóm cao nhất hoặc nhóm đổi ngôi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Bar chart or table: the largest, the smallest, and the clearest difference.",
          "sub": "Biểu đồ cột và bảng: nhóm lớn nhất, nhỏ nhất, khác biệt rõ nhất."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Pie chart: the biggest share. Two years? Which parts gained share, which lost.",
          "sub": "Biểu đồ tròn: phần chiếm nhiều nhất. Có hai năm thì phần nào tăng, phần nào giảm tỉ trọng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Process: how many stages, where it starts and ends, or whether it's a cycle.",
          "sub": "Quy trình: bao nhiêu giai đoạn, bắt đầu và kết thúc ở đâu, hay là một chu trình.",
          "keys": [
            "bao nhiêu giai đoạn"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Before and after maps: the biggest change, like more buildings or fewer trees, and what stayed the same.",
          "sub": "Bản đồ trước và sau: thay đổi lớn nhất, như nhiều nhà hơn hay ít cây hơn, và những gì vẫn giữ nguyên.",
          "keys": [
            "vẫn giữ nguyên"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "The last two lessons of this series practise those two.",
          "sub": "Hai bài cuối của chuỗi sẽ luyện kỹ hai dạng này."
        }
      ],
      "ref": "p13,p14"
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
            "at": "l4",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 16:30 · Bài của Lan",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop seven"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "sam",
                  "side": "right"
                }
              ],
              "props": [
                "page-facing-up",
                "memo"
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
            "caption": "16:30 · bài cuối trong xấp",
            "icon": "page-facing-up"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "2000 … 2010 … 2020 …",
            "x": 5964,
            "y": 1270,
            "size": 50,
            "at": "l2:two thousand"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "“…many interesting numbers.”",
            "x": 5964,
            "y": 1355,
            "size": 44,
            "at": "l2:interesting",
            "color": "coral"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Đủ dài, số đúng, không tổng quan",
            "x": 5964,
            "y": 1440,
            "size": 42,
            "at": "l3:overview",
            "color": "muted"
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "1 tổng quan rõ > 10 số",
            "x": 5964,
            "y": 1530,
            "size": 52,
            "at": "l4:ten",
            "color": "accent",
            "hl": [
              {
                "text": "> 10 số",
                "at": "l4:ten"
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
          "say": "Stop seven, half past four. Meet Lan, twenty, from the weekend study group. Last paper in the pile.",
          "sub": "Chặng bảy, bốn rưỡi. Đây là Lan, hai mươi tuổi, bạn nhóm tự học cuối tuần. Bài cuối trong xấp.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Year two thousand, then twenty ten, then twenty twenty. And: in conclusion, the chart has many interesting numbers.",
          "sub": "Năm 2000, rồi 2010, rồi 2020. Và câu cuối: in conclusion, the chart has many interesting numbers.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Long enough, figures right, but no sentence says who leads or what the trend is. No overview.",
          "sub": "Đủ dài, số đúng, nhưng không câu nào nói ai dẫn đầu hay xu hướng chung. Không có tổng quan.",
          "keys": [
            "Không có tổng quan"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: one clear overview sentence is worth more than ten numbers.",
          "sub": "Rút ra: một câu tổng quan rõ đáng giá hơn mười con số.",
          "keys": [
            "đáng giá hơn mười con số"
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
      "ref": "p15,p16"
    },
    {
      "id": "s20",
      "module": "BRK-05",
      "data": {
        "title": "Ba câu tự kiểm trước khi nộp",
        "points": [
          "Có câu “Overall” nói xu hướng?",
          "Đúng với cả hình, không một năm?",
          "Không lặp số của đoạn thân?"
        ],
        "illus": "check-box-with-check"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "An Overall sentence with the main trend?",
          "sub": "Có câu Overall nói xu hướng chính?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "True for the whole visual?",
          "sub": "Đúng với cả hình, không chỉ một năm?"
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "No body figures repeated? Three ticks, a backbone.",
          "sub": "Không lặp số của thân bài? Ba dấu tích, bài có xương sống.",
          "keys": [
            "bài có xương sống"
          ]
        }
      ],
      "ref": "p17"
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
            "text": "Thứ Bảy sau · 14:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:two"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "thumb",
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "left",
                  "face": "happy"
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
            "at": "l1:Saturday",
            "caption": "Thứ Bảy sau 14:00 · cùng lớp ấy",
            "icon": "pencil"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Clear overview ✓",
            "x": 7932,
            "y": 1280,
            "size": 64,
            "at": "l2:Clear",
            "color": "accent",
            "hl": [
              {
                "text": "✓",
                "at": "l2:Clear"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Văn hay: một câu là đủ",
            "x": 7932,
            "y": 1390,
            "size": 50,
            "at": "l4:length",
            "hl": [
              {
                "text": "một câu",
                "at": "l4:one"
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
          "say": "Next Saturday, two p.m. Same class, same red pen.",
          "sub": "Thứ Bảy tuần sau, hai giờ chiều. Vẫn lớp ấy, cây bút đỏ ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Clear overview. Well done, Thảo.",
          "sub": "Tổng quan rõ. Giỏi lắm, Thảo.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "One sentence, no numbers. Nailed it!",
          "sub": "Một câu, không số nào. Chỉ tay được rồi!",
          "face": "happy",
          "keys": [
            "Chỉ tay được rồi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Good writing isn't judged by length. Here, one sentence did the job.",
          "sub": "Văn hay chẳng luận đặt dài. Ở đây, một câu là đủ việc.",
          "keys": [
            "một câu là đủ việc"
          ]
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s22",
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
            "id": "j-s",
            "t": "text",
            "text": "Tóm lại: hiểu hình, không chỉ số",
            "x": 7932,
            "y": 1510,
            "size": 44,
            "at": "l1:So",
            "hl": [
              {
                "text": "hiểu hình",
                "at": "l1:understand"
              }
            ]
          },
          {
            "id": "j-do",
            "t": "text",
            "text": "Làm ngay: 3 hình, 3 câu “Overall…”",
            "x": 7932,
            "y": 1600,
            "size": 42,
            "at": "l5:Try",
            "hl": [
              {
                "text": "3 câu",
                "at": "l5:three"
              }
            ]
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Bài tiếp: từ tả xu hướng",
            "x": 7932,
            "y": 1690,
            "size": 46,
            "at": "l6:Next",
            "color": "accent"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 9472,
            "y": 40,
            "at": "l2:largest"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1600,
            "y": 1130,
            "at": "l3:words"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3568,
            "y": 1130,
            "at": "l4:early"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi học; định dạng, tiêu chí thi có thể đổi — kiểm lại trang chính thức IELTS. Số liệu giả định, nhân vật minh hoạ.",
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
          "say": "So, the overview shows you understand the picture, not just read the numbers.",
          "sub": "Tóm lại, tổng quan cho thấy bạn hiểu hình, không chỉ đọc được số.",
          "keys": [
            "hiểu hình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: name the largest group and the direction of change.",
          "sub": "Một: nêu nhóm lớn nhất và hướng thay đổi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: in words. Figures belong to the body.",
          "sub": "Hai: bằng chữ. Số để cho đoạn thân."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: early, and specific.",
          "sub": "Ba: đặt sớm, viết cụ thể."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: three different charts, one Overall sentence each, then the three checks.",
          "sub": "Làm ngay: ba biểu đồ khác dạng, mỗi hình một câu Overall, rồi soát bằng ba câu tự kiểm.",
          "keys": [
            "mỗi hình một câu Overall"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next: words for rises, falls and comparisons.",
          "sub": "Bài tiếp: từ tả tăng giảm và so sánh số liệu.",
          "keys": [
            "từ tả tăng giảm"
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
        "q": "Why is option B the best overview in the example?",
        "options": [
          "It explains why students prefer motorbikes to the other options",
          "It names the largest group and the two directions of change",
          "It includes every percentage for each year from start to finish"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "chart-increasing",
        "why": "Câu B nêu xe máy luôn phổ biến nhất, xe buýt tăng và xe đạp giảm. Đó là nhóm lớn nhất và hướng thay đổi."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Why is option B the best overview in the example?",
          "sub": "Vì sao câu B là tổng quan tốt nhất trong ví dụ?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "It names the largest group and the two directions of change.",
          "sub": "Nó nêu nhóm lớn nhất và hai hướng thay đổi."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Biggest group, plus direction. That's the overview.",
          "sub": "Nhóm lớn nhất, cộng hướng thay đổi. Đó là tổng quan."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[14]"
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
          "say": "Cover the numbers, find the big picture. Then try the forty questions below.",
          "sub": "Che số đi, tìm bức tranh lớn. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT CHIỀU THỨ BẢY ở lớp chữa bài của cô Sam (14:00 trả bài “Thiếu overview” → 14:15 thang band → 14:30 bốn câu tự hỏi, nhìn từ xa → 15:00 câu đố của Dũng → 15:30 tổng quan toàn số, “Khoan đã!” → 16:00 đặt ở đâu, attempted/clear → 16:15 từng dạng đề → 16:30 bài của Lan, ba câu tự kiểm → Thứ Bảy sau 14:00 khép vòng). Mở HOOK-23 (đồ vật: tờ bài trả về có dòng bút đỏ). Nhân vật: Thảo (chính), Sam, Dũng, Lan (vai Trang) — w145/_series/ielts-writing-task1-takers.md. Cảnh ngắt nhịp: BRK-08 (một chiều), BRK-07 (rehook có số thì chính xác hơn?), BRK-04 (Trước/Sau), BRK-06 (từng dạng đề), BRK-05 (ba câu tự kiểm). Tục ngữ: “Văn hay chẳng luận đặt dài”. Câu đố questions[14].",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
