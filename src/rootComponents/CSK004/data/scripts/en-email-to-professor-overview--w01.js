// en-email-to-professor-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "en-email-to-professor-overview--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "en-students-emailing-professors",
    "slug": "en-email-to-professor-overview",
    "door": "ky-nang",
    "level": "B1",
    "title": "Viết email cho giáo sư nước ngoài cần đúng những phép tắc nào?",
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
          }
        ],
        "items": [
          {
            "id": "a-mail",
            "t": "text",
            "text": "“Hi teacher, when is the deadline?”",
            "x": 60,
            "y": 90,
            "size": 72,
            "at": "l1:teacher",
            "color": "accent"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "3 ngày · không hồi âm",
            "x": 70,
            "y": 220,
            "size": 60,
            "at": "l1:three days",
            "color": "coral",
            "hl": [
              {
                "text": "không hồi âm",
                "at": "l1:no reply"
              }
            ]
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "A. Thầy khó tính?",
            "x": 70,
            "y": 340,
            "size": 56,
            "at": "l2:strict"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "B. Thư thiếu thông tin?",
            "x": 70,
            "y": 430,
            "size": 56,
            "at": "l2:missing"
          },
          {
            "id": "a-1x",
            "t": "strike",
            "over": "a-1",
            "at": "l3:Probably not"
          },
          {
            "id": "a-2r",
            "t": "ring",
            "around": [
              "a-2"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l3:needed"
          },
          {
            "id": "a-env",
            "t": "illus",
            "name": "envelope-with-arrow",
            "x": 1450,
            "y": 300,
            "size": 160,
            "at": "l1:email"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One email. Hi teacher, when is the deadline? Three days later, still no reply.",
          "sub": "Một email: “Hi teacher, when is the deadline?”. Ba ngày sau, vẫn không hồi âm.",
          "keys": [
            "không hồi âm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Quick guess. Is the professor strict, or is the email missing something?",
          "sub": "Đoán nhanh: thầy khó tính, hay thư thiếu thứ gì đó?",
          "keys": [
            "Đoán nhanh"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Probably not strict. The email simply lacked what he needed to answer fast.",
          "sub": "Chắc chẳng phải khó tính. Thư chỉ thiếu những thứ thầy cần để trả lời nhanh.",
          "keys": [
            "thiếu những thứ thầy cần"
          ]
        }
      ],
      "beats": {
        "after": 300
      },
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
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop",
                "crescent-moon"
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
            "caption": "Chủ nhật 23:00 · phòng trọ",
            "icon": "crescent-moon"
          },
          {
            "id": "a-no",
            "t": "text",
            "text": "không tiêu đề · không ký tên",
            "x": 60,
            "y": 545,
            "size": 46,
            "at": "l2:subject",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Tiên học lễ, hậu học văn”",
            "x": 60,
            "y": 630,
            "size": 56,
            "at": "l4:manners",
            "color": "accent",
            "hl": [
              {
                "text": "học lễ",
                "at": "l4:manners"
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
          "say": "Meet Thảo, a first-year student in an international joint programme in Hà Nội.",
          "sub": "Đây là Thảo, sinh viên năm nhất một chương trình liên kết quốc tế ở Hà Nội.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sunday, eleven p.m. Old personal mailbox, no subject line, no name.",
          "sub": "Chủ nhật, mười một giờ đêm. Hộp thư cá nhân cũ, không tiêu đề, không ký tên.",
          "keys": [
            "không tiêu đề"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Microeconomics deadline... One line is enough. Send!",
          "sub": "Hạn nộp Kinh tế vi mô… Một dòng là đủ. Gửi!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents say: first learn manners, then learn letters. Email has manners too.",
          "sub": "Ông bà dạy: “Tiên học lễ, hậu học văn.” Email cũng có lễ của nó.",
          "keys": [
            "Tiên học lễ, hậu học văn"
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
      "ref": "p3"
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
            "text": "Email cho giáo sư cần gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:need",
            "hl": [
              {
                "text": "cần gì",
                "at": "l1:need"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: tiếng Anh hoa mỹ",
            "x": 2028,
            "y": 165,
            "size": 52,
            "at": "l2:fancy",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:Four"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: đủ thông tin, đúng phép",
            "x": 2028,
            "y": 250,
            "size": 54,
            "at": "l2:Four",
            "color": "accent",
            "hl": [
              {
                "text": "đúng phép",
                "at": "l2:politely"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "1. Tiêu đề có mã môn",
            "x": 2028,
            "y": 345,
            "size": 50,
            "at": "l3:course code"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "2. Danh xưng + họ",
            "x": 2028,
            "y": 415,
            "size": 50,
            "at": "l3:title"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "3. Mục đích nói ngay",
            "x": 2028,
            "y": 485,
            "size": 50,
            "at": "l4:purpose"
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "4. Chữ ký đủ thông tin",
            "x": 2028,
            "y": 555,
            "size": 50,
            "at": "l4:signature"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what does an email to a foreign professor really need?",
          "sub": "Vậy email gửi giáo sư nước ngoài thật ra cần gì?",
          "keys": [
            "cần gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not fancy English. Four things, said clearly and politely.",
          "sub": "Không phải tiếng Anh hoa mỹ. Mà là bốn thứ, nói rõ và đúng phép.",
          "keys": [
            "bốn thứ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A subject line with the course code. A greeting with a title and family name.",
          "sub": "Tiêu đề có mã môn. Lời chào có danh xưng và họ.",
          "keys": [
            "mã môn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A purpose stated right away. And a signature that says who you are.",
          "sub": "Mục đích nói ngay từ đầu. Và chữ ký cho biết bạn là ai.",
          "keys": [
            "Mục đích nói ngay từ đầu"
          ]
        }
      ],
      "ref": "intro,p14"
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
            "id": "b-inbox",
            "t": "illus",
            "name": "inbox-tray",
            "x": 2928,
            "y": 160,
            "size": 130,
            "at": "l1:many"
          },
          {
            "id": "b-many",
            "t": "text",
            "text": "Thầy nhận rất nhiều thư",
            "x": 3078,
            "y": 185,
            "size": 48,
            "at": "l1:many emails",
            "hl": [
              {
                "text": "rất nhiều thư",
                "at": "l1:many emails"
              }
            ]
          },
          {
            "id": "b-face",
            "t": "text",
            "text": "Chữ thay mặt, thay giọng",
            "x": 2928,
            "y": 330,
            "size": 52,
            "at": "l3:face",
            "color": "accent",
            "hl": [
              {
                "text": "thay mặt",
                "at": "l3:face"
              }
            ]
          },
          {
            "id": "b-care",
            "t": "text",
            "text": "Thiếu chào, thiếu tên → “cẩu thả”",
            "x": 2928,
            "y": 420,
            "size": 44,
            "at": "l4:careless",
            "color": "coral"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: San José State Writing Center · Purdue OWL — Email Etiquette for Professors",
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
          "say": "Lecturers abroad get many emails every day, especially with big classes.",
          "sub": "Giảng viên ở trường nước ngoài nhận rất nhiều email mỗi ngày, nhất là khi lớp đông.",
          "keys": [
            "rất nhiều email"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "San José State advises: for simple things like deadlines, check the syllabus or ask a classmate first.",
          "sub": "San José State khuyên: chuyện đơn giản như hạn nộp, xem đề cương hoặc hỏi bạn cùng lớp trước.",
          "keys": [
            "xem đề cương"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Purdue adds: readers treat writing as if it has a personality. No face, no voice. Only your words.",
          "sub": "Purdue thêm: người đọc phản ứng với chữ như thể nó có tính cách. Không nét mặt, không giọng nói, chỉ có câu chữ.",
          "keys": [
            "chỉ có câu chữ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No greeting, no name, no class? It reads as careless.",
          "sub": "Không chào, không tên, không lớp? Đọc lên thấy cẩu thả, dù bạn chẳng có ý đó.",
          "keys": [
            "cẩu thả"
          ]
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s04",
      "module": "BRK-08",
      "data": {
        "title": "Một tuần của Thảo",
        "points": [
          {
            "label": "Thứ Tư",
            "sub": "Đề cương, tiêu đề",
            "illus": "open-book"
          },
          {
            "label": "Thứ Tư tối",
            "sub": "Lời chào",
            "illus": "waving-hand"
          },
          {
            "label": "Thứ Năm",
            "sub": "Thân thư, chữ ký",
            "illus": "memo"
          },
          {
            "label": "Thứ Hai",
            "sub": "Chờ và nhắc",
            "illus": "hourglass-not-done"
          },
          {
            "label": "Chủ nhật",
            "sub": "Thư mới",
            "illus": "e-mail"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One week, one email rebuilt from scratch.",
          "sub": "Một tuần, viết lại một email từ đầu.",
          "keys": [
            "Một tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Let's follow Thảo.",
          "sub": "Theo chân Thảo nào."
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
            "at": "l5",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Tư 9:00 · Đề cương",
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
              "set": "campus",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "face": "sad"
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
                "open-book"
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
                  "shot": "E-SHOT-05",
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
            "at": "l2:Lan",
            "caption": "Thứ Tư 9:00 · trước giờ học",
            "icon": "open-book"
          },
          {
            "id": "c-p",
            "t": "text",
            "text": "Hạn nộp: trang 2",
            "x": 3996,
            "y": 170,
            "size": 64,
            "at": "l4:page two",
            "color": "accent",
            "hl": [
              {
                "text": "trang 2",
                "at": "l4:page two"
              }
            ]
          },
          {
            "id": "c-sy",
            "t": "text",
            "text": "syllabus = đề cương môn học",
            "x": 3996,
            "y": 275,
            "size": 46,
            "at": "l3:syllabus"
          },
          {
            "id": "c-map",
            "t": "illus",
            "name": "world-map",
            "x": 3996,
            "y": 360,
            "size": 110,
            "at": "l5:treasure"
          },
          {
            "id": "c-tr",
            "t": "text",
            "text": "“bản đồ kho báu”",
            "x": 4126,
            "y": 385,
            "size": 52,
            "at": "l5:treasure",
            "hl": [
              {
                "text": "kho báu",
                "at": "l5:treasure"
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
          "say": "Stop one. Wednesday, nine a.m. Still no reply.",
          "sub": "Chặng một. Chín giờ sáng thứ Tư. Vẫn chưa hồi âm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Lan, her classmate, a second-year student who never loses a document.",
          "sub": "Đây là Lan, bạn cùng lớp, sinh viên năm hai, chưa từng thất lạc một tờ giấy nào.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Did you check the syllabus? The course outline from week one?",
          "sub": "Cậu xem đề cương chưa? Cái đề cương môn học phát từ tuần một ấy?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Oh no. The deadline is right here, on page two.",
          "sub": "Thôi chết. Hạn nộp ghi ngay đây, trang hai.",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A syllabus is a treasure map. Deadlines, formats, grading, all marked.",
          "sub": "Đề cương là tấm bản đồ kho báu: hạn nộp, định dạng, cách chấm, đánh dấu đủ cả.",
          "keys": [
            "bản đồ kho báu"
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
      "ref": "p3,p1"
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
            "id": "c-k",
            "t": "text",
            "text": "Đề cương trả lời được",
            "x": 3996,
            "y": 560,
            "size": 58,
            "at": "l1:syllabus",
            "color": "accent"
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "→ đừng bắt thầy trả lời",
            "x": 4036,
            "y": 650,
            "size": 54,
            "at": "l1:professor",
            "color": "accent",
            "hl": [
              {
                "text": "đừng bắt thầy",
                "at": "l1:Don't make"
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
          "say": "Takeaway: if the syllabus can answer it, don't make the professor answer it.",
          "sub": "Rút ra: đề cương trả lời được thì đừng bắt thầy trả lời.",
          "keys": [
            "đừng bắt thầy trả lời"
          ]
        }
      ],
      "ref": "p4"
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
            "text": "② Thứ Tư 13:00 · Tiêu đề",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-why",
            "t": "text",
            "text": "Tiêu đề = biển số nhà",
            "x": 5964,
            "y": 165,
            "size": 54,
            "at": "l2:house number",
            "hl": [
              {
                "text": "biển số nhà",
                "at": "l2:house number"
              }
            ]
          },
          {
            "id": "d-f",
            "t": "text",
            "text": "Mã môn + lớp → chủ đề",
            "x": 5964,
            "y": 255,
            "size": 54,
            "at": "l3:course code",
            "color": "accent",
            "hl": [
              {
                "text": "Mã môn",
                "at": "l3:course code"
              }
            ]
          },
          {
            "id": "d-e1",
            "t": "text",
            "text": "ECON 101, Section 2:",
            "x": 5964,
            "y": 360,
            "size": 52,
            "at": "l4:ECON"
          },
          {
            "id": "d-e1b",
            "t": "text",
            "text": "Question about the essay topic",
            "x": 6004,
            "y": 430,
            "size": 48,
            "at": "l4:essay"
          },
          {
            "id": "d-e2",
            "t": "text",
            "text": "Appointment request:",
            "x": 5964,
            "y": 520,
            "size": 52,
            "at": "l5:Appointment"
          },
          {
            "id": "d-e2b",
            "t": "text",
            "text": "ECON 101 project",
            "x": 6004,
            "y": 590,
            "size": 48,
            "at": "l5:project"
          },
          {
            "id": "d-pin",
            "t": "illus",
            "name": "round-pushpin",
            "x": 7404,
            "y": 160,
            "size": 110,
            "at": "l2:house number"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: University at Buffalo (CSE) · Tulane Success Center",
            "x": 5964,
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
          "say": "Stop two. Wednesday, one p.m. The subject line.",
          "sub": "Chặng hai. Một giờ chiều thứ Tư. Tiêu đề thư."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It's the first thing a professor sees. Think of it as a house number.",
          "sub": "Đó là thứ đầu tiên thầy nhìn thấy. Coi nó như biển số nhà.",
          "keys": [
            "biển số nhà"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Buffalo says: start with the course code and section, then the topic. Tulane agrees.",
          "sub": "Buffalo khuyên: mở bằng mã môn và lớp, rồi đến chủ đề. Tulane cũng nhắc ghi mã môn.",
          "keys": [
            "mã môn và lớp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "For example: ECON one-oh-one, Section two, question about the essay topic.",
          "sub": "Ví dụ: “ECON 101, Section 2: Question about the essay topic”."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Or: Appointment request, ECON one-oh-one project.",
          "sub": "Hoặc: “Appointment request: ECON 101 project”."
        }
      ],
      "ref": "p5,p6"
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
            "id": "d-bad",
            "t": "text",
            "text": "Help · Question · (trống)",
            "x": 6864,
            "y": 380,
            "size": 54,
            "at": "l1:Help",
            "color": "muted"
          },
          {
            "id": "d-badx",
            "t": "strike",
            "over": "d-bad",
            "at": "l2:Never"
          },
          {
            "id": "d-nev",
            "t": "text",
            "text": "Không bao giờ để trống",
            "x": 6864,
            "y": 470,
            "size": 52,
            "at": "l2:Never",
            "color": "coral",
            "hl": [
              {
                "text": "để trống",
                "at": "l2:no subject"
              }
            ]
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Một thư · một việc",
            "x": 6864,
            "y": 600,
            "size": 60,
            "at": "l3:one main",
            "color": "accent",
            "hl": [
              {
                "text": "một việc",
                "at": "l3:one main"
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
          "say": "Avoid vague subjects like help or question. A professor teaching many classes can't sort those.",
          "sub": "Tránh tiêu đề chung chung như “Help”, “Question”. Thầy dạy nhiều lớp, nhìn vào chẳng biết xếp đâu.",
          "keys": [
            "chung chung"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And Buffalo is firm: never send a message with no subject line.",
          "sub": "Buffalo nói chắc: đừng bao giờ gửi thư không có tiêu đề.",
          "keys": [
            "không có tiêu đề"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One email, one main matter, so the subject matches what's inside.",
          "sub": "Mỗi thư xoay quanh một việc chính, để tiêu đề khớp với nội dung.",
          "keys": [
            "một việc chính"
          ]
        }
      ],
      "ref": "p6,p12"
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
            "text": "③ Thứ Tư 20:00 · Lời chào",
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
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop",
                "e-mail"
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
            "at": "l1:greeting",
            "caption": "Thứ Tư 20:00 · viết lại thư",
            "icon": "e-mail"
          },
          {
            "id": "e-d",
            "t": "text",
            "text": "Dear Professor Carter,",
            "x": 7932,
            "y": 170,
            "size": 64,
            "at": "l3:Dear",
            "color": "accent",
            "hl": [
              {
                "text": "Professor Carter",
                "at": "l3:Carter"
              }
            ]
          },
          {
            "id": "e-dr",
            "t": "text",
            "text": "tiến sĩ: Dear Dr. Carter,",
            "x": 7932,
            "y": 270,
            "size": 48,
            "at": "l4:doctorate"
          },
          {
            "id": "e-ms",
            "t": "text",
            "text": "không chắc: Ms. an toàn hơn Mrs.",
            "x": 7932,
            "y": 350,
            "size": 44,
            "at": "l5:Ms",
            "hl": [
              {
                "text": "Ms.",
                "at": "l5:safer"
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
          "say": "Stop three. Wednesday, eight p.m. Thảo rewrites the greeting.",
          "sub": "Chặng ba. Tám giờ tối thứ Tư. Thảo viết lại lời chào."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Hi teacher sounded friendly to me. What's wrong with it?",
          "sub": "Mình thấy “Hi teacher” thân thiện mà. Sai ở đâu nhỉ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The safest greeting is Dear Professor, plus the family name. Dear Professor Carter, comma.",
          "sub": "Lời chào an toàn nhất: “Dear Professor + họ,”. Ví dụ “Dear Professor Carter,”.",
          "keys": [
            "Dear Professor + họ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "If the lecturer has a doctorate, Dear Doctor Carter works too.",
          "sub": "Giảng viên có bằng tiến sĩ thì “Dear Dr. Carter,” cũng được."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "No academic title, and not sure? Ms is safer than Mrs.",
          "sub": "Chưa có học vị mà bạn không chắc? “Ms.” an toàn hơn “Mrs.”.",
          "keys": [
            "an toàn hơn"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Thầy ký tên “Mark”",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Thầy ký “Mark” thì cứ gọi “Hi Mark”",
          "why": "Buffalo: giữ danh xưng + họ kể cả khi giảng viên ký tên riêng; chỉ gọi tên riêng khi được mời.",
          "rule": "Chưa được mời thì giữ “Professor + họ”"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Wait, he signs his emails Mark. So, Hi Mark! Very friendly.",
          "sub": "Ơ, thầy ký tên là Mark. Vậy viết “Hi Mark!”. Thân thiện ghê.",
          "face": "happy",
          "pose": "explain",
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
          "say": "Buffalo says: keep the title and family name, even when he signs with his first name.",
          "sub": "Buffalo dặn: vẫn giữ danh xưng và họ, kể cả khi thầy ký bằng tên riêng.",
          "keys": [
            "vẫn giữ danh xưng và họ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "First names only when he invites you. Rewind!",
          "sub": "Chỉ gọi tên riêng khi thầy mời. Tua lại!",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Dear Professor Carter. Until he says, call me Mark.",
          "sub": "“Dear Professor Carter.” Bao giờ thầy bảo “gọi tôi là Mark” đã.",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. Unsure what he prefers? The syllabus often says.",
          "sub": "Đúng. Không chắc thầy muốn được gọi thế nào? Đề cương thường có ghi.",
          "phase": "redo",
          "keys": [
            "Đề cương thường có ghi"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p7,p8"
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
            "at": "l3",
            "fit": [
              "e-bef",
              "e-aft"
            ],
            "zoom": 1.15,
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
            "id": "e-ht",
            "t": "text",
            "text": "“Hi teacher” = “Chào cô giáo ơi”",
            "x": 7932,
            "y": 440,
            "size": 46,
            "at": "l1:title",
            "color": "coral",
            "hl": [
              {
                "text": "cô giáo ơi",
                "at": "l2:Miss Teacher"
              }
            ]
          },
          {
            "id": "e-bef",
            "t": "text",
            "text": "hi teacher, can u explain???",
            "x": 7932,
            "y": 530,
            "size": 44,
            "at": "l3:hi teacher",
            "color": "muted"
          },
          {
            "id": "e-befx",
            "t": "strike",
            "over": "e-bef",
            "at": "l4:Dear"
          },
          {
            "id": "e-aft",
            "t": "text",
            "text": "Dear Professor Carter, I am Thao",
            "x": 7932,
            "y": 610,
            "size": 44,
            "at": "l4:Dear",
            "color": "accent"
          },
          {
            "id": "e-aft2",
            "t": "text",
            "text": "from your ECON 101 class…",
            "x": 7972,
            "y": 670,
            "size": 40,
            "at": "l4:Section",
            "color": "accent"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Danh xưng + họ, chào xong mới hỏi",
            "x": 8752,
            "y": 690,
            "size": 44,
            "at": "l5:title",
            "hl": [
              {
                "text": "chào xong mới hỏi",
                "at": "l5:then ask"
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
          "say": "Why not Hi teacher? In English, teacher is not a title for addressing someone.",
          "sub": "Sao không “Hi teacher”? Trong tiếng Anh, “teacher” không phải danh xưng để gọi người.",
          "keys": [
            "không phải danh xưng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It sounds like calling out, hey Miss Teacher, to someone whose name you don't know.",
          "sub": "Nghe như gọi “Chào cô giáo ơi” với người mình không biết tên.",
          "keys": [
            "Chào cô giáo ơi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Before: hi teacher, i dont understand the homework, can u explain, three question marks.",
          "sub": "Trước: “hi teacher, i dont understand the homework, can u explain???”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "After: Dear Professor Carter, I am Thao Nguyen, ECON one-oh-one, Section two. My question is on Homework two.",
          "sub": "Sau: “Dear Professor Carter, I am Thao Nguyen, ECON 101, Section 2…”, hỏi câu ba Bài tập 2.",
          "keys": [
            "Dear Professor Carter"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Proper capitals, no texting u. Title and family name. Greet first, then ask.",
          "sub": "Viết hoa đúng, không “u” kiểu nhắn tin. Danh xưng cộng họ, chào xong mới hỏi.",
          "keys": [
            "chào xong mới hỏi"
          ]
        }
      ],
      "ref": "p8,p9,p10"
    },
    {
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "Chào đúng rồi, thư dài bao nhiêu thì vừa?",
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
          "say": "The greeting is fixed. How long should the rest be?",
          "sub": "Chào đúng rồi, thư dài bao nhiêu thì vừa?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p11"
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
            "text": "④ Thứ Năm 21:00 · Thân thư",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Một câu giới thiệu:",
            "x": 60,
            "y": 1255,
            "size": 52,
            "at": "l2:introduce",
            "hl": [
              {
                "text": "giới thiệu",
                "at": "l2:introduce"
              }
            ]
          },
          {
            "id": "f-1b",
            "t": "text",
            "text": "họ tên · môn · giờ học",
            "x": 100,
            "y": 1330,
            "size": 46,
            "at": "l2:class time"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Rồi mục đích, nói ngay:",
            "x": 60,
            "y": 1410,
            "size": 52,
            "at": "l3:purpose",
            "hl": [
              {
                "text": "mục đích",
                "at": "l3:purpose"
              }
            ]
          },
          {
            "id": "f-2b",
            "t": "text",
            "text": "hỏi · xin gia hạn · xin gặp",
            "x": 100,
            "y": 1485,
            "size": 46,
            "at": "l3:extension"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Nhiều câu hỏi → đánh số",
            "x": 60,
            "y": 1565,
            "size": 50,
            "at": "l4:number"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "Ngắn: một đoạn, một màn hình",
            "x": 60,
            "y": 1645,
            "size": 50,
            "at": "l4:screen",
            "color": "accent",
            "hl": [
              {
                "text": "một màn hình",
                "at": "l4:screen"
              }
            ]
          },
          {
            "id": "f-lap",
            "t": "illus",
            "name": "laptop",
            "x": 1400,
            "y": 1260,
            "size": 140,
            "at": "l4:screen"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: UMass Boston Writing Center · San José State · British Council LearnEnglish",
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
          "say": "Stop four. Thursday, nine p.m. The body of the email.",
          "sub": "Chặng bốn. Chín giờ tối thứ Năm. Phần thân thư."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "UMass Boston says: in a big class, introduce yourself briefly. Name, course, class time.",
          "sub": "UMass Boston khuyên: lớp đông thì giới thiệu ngắn: họ tên, môn học, giờ học.",
          "keys": [
            "giới thiệu ngắn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then the purpose, right away. A question? An extension? A meeting?",
          "sub": "Ngay sau đó là mục đích: hỏi một câu, xin gia hạn hay xin gặp?",
          "keys": [
            "mục đích"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Several questions? Number them. San José State says one paragraph, about one screen.",
          "sub": "Nhiều câu hỏi thì đánh số. San José State khuyên một đoạn, vừa một màn hình.",
          "keys": [
            "vừa một màn hình"
          ]
        }
      ],
      "ref": "p11"
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
            "id": "f-sh",
            "t": "text",
            "text": "Quá ngắn → cộc lốc",
            "x": 960,
            "y": 1450,
            "size": 50,
            "at": "l1:short",
            "color": "coral"
          },
          {
            "id": "f-lo",
            "t": "text",
            "text": "Quá dài → không ai đọc hết",
            "x": 960,
            "y": 1530,
            "size": 50,
            "at": "l1:long",
            "color": "coral"
          },
          {
            "id": "f-caps",
            "t": "text",
            "text": "VIẾT HOA CẢ CÂU = quát",
            "x": 960,
            "y": 1630,
            "size": 54,
            "at": "l2:capitals",
            "hl": [
              {
                "text": "= quát",
                "at": "l2:shouting"
              }
            ]
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Ngắn mà vẫn lịch sự",
            "x": 960,
            "y": 1730,
            "size": 58,
            "at": "l3:brief",
            "color": "accent",
            "hl": [
              {
                "text": "vẫn lịch sự",
                "at": "l3:polite"
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
          "say": "British Council warns: too short sounds rude, too long rarely gets read to the end.",
          "sub": "British Council nhắc: quá ngắn nghe cộc lốc, quá dài thường không được đọc hết.",
          "keys": [
            "cộc lốc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And never type a whole sentence in capitals. It feels like shouting through the screen.",
          "sub": "Đừng viết hoa cả câu. Người đọc thấy như bị quát qua màn hình.",
          "keys": [
            "bị quát"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So: brief, but still polite.",
          "sub": "Vậy nên: ngắn mà vẫn lịch sự.",
          "keys": [
            "ngắn mà vẫn lịch sự"
          ]
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
            "text": "Thứ Năm 21:15 · Làm mẫu 5 bước",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:five steps"
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
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "open-book"
              ],
              "camera": [
                {
                  "at": "l2",
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
            "at": "l1:essay",
            "caption": "Thứ Năm 21:15 · bài luận cuối kỳ",
            "icon": "memo"
          },
          {
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l2:subject",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1242,
            "size": 56,
            "at": "l2:subject+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "(1) ECON 101, Section 2: …",
            "x": 2093,
            "y": 1252,
            "size": 42,
            "at": "l2:subject+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1345,
            "w": 44,
            "h": 44,
            "at": "l3:Dear",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1327,
            "size": 56,
            "at": "l3:Dear+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "(2) Dear Professor Carter,",
            "x": 2093,
            "y": 1337,
            "size": 42,
            "at": "l3:Dear+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1430,
            "w": 44,
            "h": 44,
            "at": "l3:Tuesday",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1412,
            "size": 56,
            "at": "l3:Tuesday+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "(3) I am Thao Nguyen…",
            "x": 2093,
            "y": 1422,
            "size": 42,
            "at": "l3:Tuesday+200"
          },
          {
            "id": "g-c3",
            "t": "box",
            "x": 2028,
            "y": 1515,
            "w": 44,
            "h": 44,
            "at": "l4:checked",
            "stroke": 5
          },
          {
            "id": "g-k3",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1497,
            "size": 56,
            "at": "l4:checked+600",
            "color": "accent"
          },
          {
            "id": "g-l3",
            "t": "text",
            "text": "(4) I checked the syllabus…",
            "x": 2093,
            "y": 1507,
            "size": 42,
            "at": "l4:checked+200"
          },
          {
            "id": "g-c4",
            "t": "box",
            "x": 2028,
            "y": 1600,
            "w": 44,
            "h": 44,
            "at": "l5:thanks",
            "stroke": 5
          },
          {
            "id": "g-k4",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1582,
            "size": 56,
            "at": "l5:thanks+600",
            "color": "accent"
          },
          {
            "id": "g-l4",
            "t": "text",
            "text": "(5) Cảm ơn + ký tên",
            "x": 2093,
            "y": 1592,
            "size": 42,
            "at": "l5:thanks+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thảo tries it. A question about the final essay length, in five steps.",
          "sub": "Thảo thử ngay: hỏi độ dài bài luận cuối kỳ, năm bước.",
          "keys": [
            "năm bước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Step one, the subject: ECON one-oh-one, Section two, question about the final essay length.",
          "sub": "Bước một, tiêu đề: “ECON 101, Section 2: Question about the final essay length”.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Two, Dear Professor Carter. Three, I am Thao Nguyen from your Tuesday morning class.",
          "sub": "Hai: “Dear Professor Carter,”. Ba: em là Thảo Nguyễn, lớp sáng thứ Ba của thầy."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Four, I checked the syllabus but couldn't find the word limit. Could you please let me know?",
          "sub": "Bốn: em đã xem đề cương nhưng không thấy giới hạn số từ. Thầy có thể cho em biết không ạ?",
          "keys": [
            "đã xem đề cương"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Five: thanks and a signature. One intro line, one purpose, one thank you.",
          "sub": "Năm: cảm ơn và ký tên. Một dòng giới thiệu, một mục đích, một câu cảm ơn.",
          "keys": [
            "một câu cảm ơn"
          ]
        }
      ],
      "ref": "p13,p14"
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑤ Thứ Năm 21:30 · Kết thư",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
          },
          {
            "id": "h-ty",
            "t": "text",
            "text": "Thank you for your time.",
            "x": 3996,
            "y": 1255,
            "size": 56,
            "at": "l2:Thank you"
          },
          {
            "id": "h-br",
            "t": "text",
            "text": "Best regards, · Sincerely,",
            "x": 3996,
            "y": 1340,
            "size": 52,
            "at": "l2:Best regards",
            "color": "accent",
            "hl": [
              {
                "text": "Best regards,",
                "at": "l2:Best regards"
              }
            ]
          },
          {
            "id": "h-s1",
            "t": "text",
            "text": "Thao Nguyen (Nguyen Thi Thao)",
            "x": 3996,
            "y": 1435,
            "size": 46,
            "at": "l3:full name"
          },
          {
            "id": "h-s2",
            "t": "text",
            "text": "Student ID 2023xxxx",
            "x": 3996,
            "y": 1500,
            "size": 46,
            "at": "l3:student ID"
          },
          {
            "id": "h-s3",
            "t": "text",
            "text": "ECON 101, Section 2",
            "x": 3996,
            "y": 1565,
            "size": 46,
            "at": "l3:course"
          },
          {
            "id": "h-card",
            "t": "text",
            "text": "= thẻ sinh viên cuối thư",
            "x": 3996,
            "y": 1635,
            "size": 46,
            "at": "l4:student card",
            "color": "accent",
            "hl": [
              {
                "text": "thẻ sinh viên",
                "at": "l4:student card"
              }
            ]
          },
          {
            "id": "h-id",
            "t": "illus",
            "name": "identification-card",
            "x": 5386,
            "y": 1250,
            "size": 130,
            "at": "l4:student card"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five. Thursday, nine thirty. The ending.",
          "sub": "Chặng năm. Chín rưỡi tối thứ Năm. Phần kết thư."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A thank you line, like thank you for your time. Then Best regards, or Sincerely, and your name.",
          "sub": "Một câu cảm ơn như “Thank you for your time.”, rồi “Best regards,” hoặc “Sincerely,” và tên bạn.",
          "keys": [
            "Best regards,"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Below it, Buffalo wants your full name, student ID, course and section.",
          "sub": "Dưới tên, Buffalo khuyên ghi họ tên đầy đủ, mã sinh viên, môn học và lớp.",
          "keys": [
            "mã sinh viên"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Add your Vietnamese full name in brackets, so he finds you in the class list. A student card.",
          "sub": "Thêm họ tên kiểu Việt trong ngoặc để thầy tìm đúng bạn trong danh sách lớp. Như thẻ sinh viên.",
          "keys": [
            "thẻ sinh viên"
          ]
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
            "fit": "H",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "h-mail",
            "t": "text",
            "text": "Gửi từ email trường",
            "x": 4896,
            "y": 1450,
            "size": 54,
            "at": "l1:university",
            "color": "accent",
            "hl": [
              {
                "text": "email trường",
                "at": "l1:university"
              }
            ]
          },
          {
            "id": "h-old",
            "t": "text",
            "text": "hộp thư cá nhân cũ",
            "x": 4896,
            "y": 1530,
            "size": 46,
            "at": "l1:old",
            "color": "muted"
          },
          {
            "id": "h-oldx",
            "t": "strike",
            "over": "h-old",
            "at": "l1:old+400"
          },
          {
            "id": "h-att",
            "t": "text",
            "text": "Đính kèm TRƯỚC khi viết",
            "x": 4896,
            "y": 1620,
            "size": 50,
            "at": "l3:before",
            "hl": [
              {
                "text": "TRƯỚC",
                "at": "l3:before"
              }
            ]
          },
          {
            "id": "h-fn",
            "t": "text",
            "text": "Tên tệp: họ + tên bài",
            "x": 4896,
            "y": 1700,
            "size": 46,
            "at": "l4:Name the file"
          },
          {
            "id": "h-rd",
            "t": "text",
            "text": "Đọc lại: chính tả, tên thầy",
            "x": 4896,
            "y": 1780,
            "size": 46,
            "at": "l2:read",
            "color": "coral"
          },
          {
            "id": "h-clip",
            "t": "illus",
            "name": "linked-paperclips",
            "x": 5436,
            "y": 1590,
            "size": 90,
            "at": "l3:attach"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tulane and San José State agree: send it from your university email, not your old personal one.",
          "sub": "Tulane và San José State cùng nhắc: gửi từ email trường cấp, không dùng hộp thư cá nhân cũ.",
          "keys": [
            "email trường cấp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Before you hit send, read it again. Spelling, grammar, and the professor's name.",
          "sub": "Trước khi bấm gửi, đọc lại: chính tả, ngữ pháp, và tên giảng viên.",
          "keys": [
            "đọc lại"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A file? British Council says attach it before you write, so you can't forget.",
          "sub": "Có tệp? British Council gợi ý đính kèm trước khi viết, để khỏi quên.",
          "keys": [
            "đính kèm trước khi viết"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Name the file with your family name and the task, and mention it in the email.",
          "sub": "Đặt tên tệp có họ của bạn và tên bài, và nhắc trong thư rằng có tệp đính kèm."
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
            "at": "l4",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑥ Thứ Hai · Chờ bao lâu?",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "mobile-phone",
                "envelope"
              ],
              "camera": [
                {
                  "at": "l3",
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
            "at": "l2:Dũng",
            "caption": "Thứ Hai 16:00 · quán gần trường",
            "icon": "envelope"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Khoảng 1 ngày làm việc",
            "x": 5964,
            "y": 1260,
            "size": 56,
            "at": "l4:working day",
            "color": "accent",
            "hl": [
              {
                "text": "1 ngày làm việc",
                "at": "l4:working day"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "không: cuối tuần, lễ, đêm khuya",
            "x": 5964,
            "y": 1350,
            "size": 44,
            "at": "l4:weekends",
            "color": "muted"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Có thầy không đọc thư mỗi ngày",
            "x": 5964,
            "y": 1430,
            "size": 44,
            "at": "l5:every day"
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "→ xem đề cương có ghi không",
            "x": 6004,
            "y": 1500,
            "size": 42,
            "at": "l5:few days",
            "color": "accent"
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: Tulane Success Center · University at Buffalo",
            "x": 5964,
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
          "say": "Stop six. The next Monday, four p.m. Waiting.",
          "sub": "Chặng sáu. Bốn giờ chiều thứ Hai tuần sau. Chờ thư."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, Thảo's classmate. He emailed this morning about his presentation topic.",
          "sub": "Đây là Dũng, bạn cùng khoá của Thảo. Sáng nay cậu email hỏi đề tài thuyết trình.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Seven hours and nothing! I'll send two more. Please reply ASAP!",
          "sub": "Bảy tiếng rồi mà chưa thấy gì! Gửi thêm hai thư nữa. Please reply ASAP!",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Tulane says expect a reply in about one working day. Not on weekends, holidays or late at night.",
          "sub": "Tulane cho biết: có thể mong hồi âm trong khoảng một ngày làm việc, không phải cuối tuần, ngày lễ hay đêm khuya.",
          "keys": [
            "một ngày làm việc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Buffalo adds: some don't read email every day, so wait a few days.",
          "sub": "Buffalo thêm: có giảng viên không đọc thư mỗi ngày, nên đôi khi phải chờ vài ngày.",
          "keys": [
            "chờ vài ngày"
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
      "ref": "p18"
    },
    {
      "id": "s19",
      "module": "BRK-04",
      "data": {
        "title": "Thư chưa được trả lời",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrong": "Ba thư một buổi, “Please reply ASAP!!!”",
        "right": "Chờ đến thứ Năm, nhắc một câu trong chuỗi cũ",
        "wrongIllus": "bell",
        "rightIllus": "hourglass-not-done"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Way A: three emails. A one-line reply.",
          "sub": "Cách A: ba thư. Nhận lại một câu.",
          "keys": [
            "ba thư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Way B: wait, then one line. A full reply.",
          "sub": "Cách B: chờ, rồi nhắc một câu. Được trả lời đủ.",
          "keys": [
            "nhắc một câu"
          ]
        }
      ],
      "ref": "p19"
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
          }
        ],
        "items": [
          {
            "id": "i-fu",
            "t": "text",
            "text": "I just wanted to follow up",
            "x": 5964,
            "y": 1590,
            "size": 50,
            "at": "l1:follow up",
            "color": "accent",
            "hl": [
              {
                "text": "follow up",
                "at": "l1:follow up"
              }
            ]
          },
          {
            "id": "i-fu2",
            "t": "text",
            "text": "on my email below…",
            "x": 6004,
            "y": 1655,
            "size": 46,
            "at": "l1:below",
            "color": "accent"
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Chờ vài ngày, nhắc một câu",
            "x": 5964,
            "y": 1720,
            "size": 52,
            "at": "l2:few days",
            "hl": [
              {
                "text": "nhắc một câu",
                "at": "l2:one line"
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
          "say": "Way B in words: I just wanted to follow up on my email below about the presentation topic.",
          "sub": "Câu của cách B: “I just wanted to follow up on my email below about the presentation topic.”",
          "keys": [
            "follow up"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Wait a few days, then one line. Don't ring the doorbell nonstop.",
          "sub": "Chờ vài ngày rồi nhắc một câu. Đừng bấm chuông cửa liên hồi.",
          "keys": [
            "nhắc một câu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Got a reply? Say thanks, even just, Thank you, Professor Carter.",
          "sub": "Được trả lời thì cảm ơn, dù chỉ một câu “Thank you, Professor Carter.”",
          "keys": [
            "cảm ơn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And grades? Tulane and Buffalo agree: don't argue by email. Ask to meet in person.",
          "sub": "Còn chuyện điểm? Tulane và Buffalo cùng khuyên: đừng tranh luận qua email, hãy xin gặp trực tiếp.",
          "keys": [
            "xin gặp trực tiếp"
          ]
        }
      ],
      "ref": "p19,p20,p21"
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
            "text": "Chủ nhật sau · 21:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:nine"
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
                "laptop",
                "check-mark-button"
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
            "at": "l1:room",
            "caption": "Chủ nhật sau 21:00 · cùng căn phòng",
            "icon": "e-mail"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l2:subject",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1242,
            "size": 56,
            "at": "l2:subject+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Tiêu đề có mã môn, lớp",
            "x": 7997,
            "y": 1252,
            "size": 42,
            "at": "l2:subject+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1340,
            "w": 44,
            "h": 44,
            "at": "l2:Dear",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1322,
            "size": 56,
            "at": "l2:Dear+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Dear Professor + họ,",
            "x": 7997,
            "y": 1332,
            "size": 42,
            "at": "l2:Dear+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1420,
            "w": 44,
            "h": 44,
            "at": "l3:intro",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1402,
            "size": 56,
            "at": "l3:intro+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Một câu giới thiệu",
            "x": 7997,
            "y": 1412,
            "size": 42,
            "at": "l3:intro+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1500,
            "w": 44,
            "h": 44,
            "at": "l3:syllabus",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1482,
            "size": 56,
            "at": "l3:syllabus+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Mục đích, đã xem đề cương",
            "x": 7997,
            "y": 1492,
            "size": 42,
            "at": "l3:syllabus+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1580,
            "w": 44,
            "h": 44,
            "at": "l3:signature",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1562,
            "size": 56,
            "at": "l3:signature+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Chữ ký đủ, email trường",
            "x": 7997,
            "y": 1572,
            "size": 42,
            "at": "l3:signature+200"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Tiên học lễ… rồi mới bấm Send",
            "x": 7932,
            "y": 1690,
            "size": 50,
            "at": "l4:manners",
            "color": "accent",
            "hl": [
              {
                "text": "bấm Send",
                "at": "l4:Send"
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
          "say": "Next Sunday, nine p.m. Same room, same Thảo, a new question for Professor Carter.",
          "sub": "Chủ nhật tuần sau, chín giờ tối. Vẫn căn phòng ấy, vẫn Thảo, một câu hỏi mới cho thầy Carter."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Subject with the course code. Dear Professor Carter.",
          "sub": "Tiêu đề có mã môn. “Dear Professor Carter.”",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "One intro line, I checked the syllabus, my question, then my signature. University email.",
          "sub": "Một câu giới thiệu, em đã xem đề cương, câu hỏi, rồi chữ ký. Email trường.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "First learn manners, then learn letters. This time, manners first, then Send.",
          "sub": "“Tiên học lễ, hậu học văn.” Lần này: lễ trước, rồi mới bấm Send.",
          "keys": [
            "lễ trước"
          ]
        }
      ],
      "ref": "p24"
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
            "at": 200,
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
            "fit": "H",
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
            "x": 7404,
            "y": 40,
            "at": "l2:subject"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9372,
            "y": 40,
            "at": "l3:title"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5436,
            "y": 1130,
            "at": "l4:signature"
          },
          {
            "id": "j-nx",
            "t": "text",
            "text": "Còn 5 bài sau:",
            "x": 7932,
            "y": 1770,
            "size": 44,
            "at": "l5:Five",
            "hl": [
              {
                "text": "5 bài sau",
                "at": "l5:Five"
              }
            ]
          },
          {
            "id": "j-nx2",
            "t": "text",
            "text": "hỏi bài, xin gặp, gia hạn",
            "x": 8232,
            "y": 1770,
            "size": 38,
            "at": "l5:coursework"
          },
          {
            "id": "j-nx3",
            "t": "text",
            "text": "thư giới thiệu, hướng dẫn",
            "x": 8232,
            "y": 1818,
            "size": 38,
            "at": "l5:recommendation"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Tham khảo; mỗi trường một khác — xem đề cương. Nhân vật minh hoạ.",
            "x": 8772,
            "y": 1825,
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
          "say": "So, a good email needs no fancy English. Just enough information and proper manners.",
          "sub": "Tóm lại, email tốt không cần tiếng Anh hoa mỹ, chỉ cần đủ thông tin và đúng phép.",
          "keys": [
            "đủ thông tin và đúng phép"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A subject line with the course code and section.",
          "sub": "Tiêu đề có mã môn và lớp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Dear, plus title and family name, and your purpose right away.",
          "sub": "“Dear” + danh xưng + họ, và nói mục đích ngay."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A full signature, sent from your university email. Then wait, and follow up once.",
          "sub": "Chữ ký đủ, gửi từ email trường. Rồi chờ, và nhắc một lần."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Five lessons follow: coursework, meetings, extensions, recommendation letters, and research supervisors.",
          "sub": "Năm bài tiếp theo: hỏi bài, xin gặp, xin gia hạn, xin thư giới thiệu, liên hệ giáo sư hướng dẫn.",
          "keys": [
            "Năm bài tiếp theo"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p22,p23"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "Why does hi teacher sound strange to an English speaking professor?",
        "options": [
          "Because the word hi is never allowed in any email written in English",
          "In English, teacher is not used as a title to address a person",
          "Because English speakers think teaching is not an important job at all"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "man-teacher",
        "why": "Trong tiếng Anh, “teacher” là tên nghề, không phải danh xưng để gọi. Thay vào đó, hãy dùng danh xưng và họ của giảng viên."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Why does hi teacher sound strange to an English speaking professor?",
          "sub": "Vì sao “Hi teacher” nghe lạ với một giảng viên nói tiếng Anh?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "In English, teacher is not used as a title to address a person.",
          "sub": "Trong tiếng Anh, “teacher” không phải danh xưng để gọi người."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "So, Dear Professor Carter. Never Hi teacher.",
          "sub": "Vậy: “Dear Professor Carter.” Đừng “Hi teacher”."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[11]"
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
          "say": "Tonight: set up a signature with your name, student ID, course and section. Then try the forty questions below.",
          "sub": "Tối nay: tạo sẵn chữ ký có họ tên, mã sinh viên, môn và lớp. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144. Hook HOOK-21: đoán sai (thư “Hi teacher” ba ngày không hồi âm: thầy khó tính hay thư thiếu thông tin?). Dòng thời gian: MỘT TUẦN của Thảo (Chủ nhật 23:00 gửi “Hi teacher” → T4 9:00 Lan chỉ đề cương trang hai → T4 13:00 tiêu đề → T4 20:00 lời chào + “Khoan đã!” (thầy ký “Mark”) → T5 21:00 thân thư + làm mẫu 5 bước → T5 21:30 kết thư, chữ ký → Thứ Hai sau: Dũng gửi dồn, chờ và nhắc → Chủ nhật sau 21:00 khép vòng). Nhân vật: Thảo, Lan (bạn cùng lớp), Dũng; thầy Carter chỉ qua thư. Tục ngữ: “Tiên học lễ, hậu học văn”. Cảnh ngắt nhịp: BRK-08 (một tuần), BRK-07 (rehook), BRK-04 (Cách A/B nhắc thư). Câu đố questions[11].",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
