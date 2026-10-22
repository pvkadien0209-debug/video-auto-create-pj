// skills-ai-cannot-replace--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "skills-ai-cannot-replace--w01",
  "hook": "HOOK-22",
  "unit": {
    "audience": "experts-staying-relevant-with-ai",
    "slug": "skills-ai-cannot-replace",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Kỹ năng nào của chuyên gia lâu năm vẫn khó bị thay?",
    "series": "Làm cùng AI thay vì sợ AI — cho chuyên gia lâu năm học lại để giữ giá trị nghề"
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
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "point"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1:Bình",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up",
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai · tuần 1 · họp giao ban",
            "icon": "page-facing-up"
          },
          {
            "id": "a-cut",
            "t": "text",
            "text": "“AI bảo ổn rồi, sao anh còn…”",
            "x": 60,
            "y": 120,
            "size": 48,
            "at": "l2:still",
            "color": "coral"
          },
          {
            "id": "a-stop",
            "t": "text",
            "text": "Khoan, giữ câu đó!",
            "x": 60,
            "y": 240,
            "size": 64,
            "at": "l3:Pause",
            "color": "accent",
            "hl": [
              {
                "text": "giữ câu đó",
                "at": "l3:sentence"
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
          "say": "Monday meeting. Sam, the CEO, and chú Bình, head of legal for decades.",
          "sub": "Họp giao ban thứ Hai. Sam, giám đốc điều hành, và chú Bình, trưởng pháp chế lâu năm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Bình, AI said this clause is fine. So why are you still...",
          "sub": "Anh Bình, AI bảo điều khoản này ổn rồi, sao anh còn…",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Pause! Hold that sentence. We'll finish it in a minute.",
          "sub": "Khoan! Giữ câu đó lại. Lát nữa mình nói nốt.",
          "keys": [
            "Giữ câu đó"
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
      "ref": "p9"
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
            "id": "a-20",
            "t": "text",
            "text": "20 năm kinh nghiệm",
            "x": 60,
            "y": 400,
            "size": 56,
            "at": "l1:twenty"
          },
          {
            "id": "a-w",
            "t": "text",
            "text": "còn đáng giá bao nhiêu?",
            "x": 60,
            "y": 480,
            "size": 52,
            "at": "l1:worth",
            "color": "coral",
            "hl": [
              {
                "text": "đáng giá",
                "at": "l1:worth"
              }
            ]
          },
          {
            "id": "a-rb",
            "t": "illus",
            "name": "robot",
            "x": 60,
            "y": 580,
            "size": 110,
            "at": "l2:drafts"
          },
          {
            "id": "a-ai",
            "t": "text",
            "text": "nháp · tóm tắt · dịch thô: nhanh",
            "x": 190,
            "y": 610,
            "size": 44,
            "at": "l2:drafts",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Behind that sentence hides a big worry: twenty years of experience, how much is it still worth?",
          "sub": "Sau câu nói ấy là một nỗi lo lớn: hai mươi năm kinh nghiệm, còn đáng giá bao nhiêu?",
          "keys": [
            "còn đáng giá bao nhiêu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "AI drafts, summarises and translates in seconds. And experts feel the floor shake.",
          "sub": "AI soạn nháp, tóm tắt, dịch thô trong vài giây. Chuyên gia thấy sàn nhà rung rinh."
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
            "text": "Kỹ năng nào vẫn khó bị thay?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:skills",
            "hl": [
              {
                "text": "khó bị thay",
                "at": "l1:hard to replace"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: đua tốc độ với AI",
            "x": 2028,
            "y": 160,
            "size": 48,
            "at": "l2:racing",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:But"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: kinh nghiệm thành lợi thế",
            "x": 2028,
            "y": 240,
            "size": 52,
            "at": "l2:advantage",
            "color": "accent",
            "hl": [
              {
                "text": "lợi thế",
                "at": "l2:advantage"
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
          "say": "So which skills of long-serving experts are still hard to replace?",
          "sub": "Vậy kỹ năng nào của chuyên gia lâu năm vẫn khó bị thay?",
          "keys": [
            "khó bị thay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not racing AI for speed. But turning experience into an advantage when working with it.",
          "sub": "Không phải đua tốc độ với AI. Mà là biến kinh nghiệm thành lợi thế khi làm cùng AI.",
          "keys": [
            "biến kinh nghiệm thành lợi thế"
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
          },
          {
            "at": "l1",
            "fit": [
              "b-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4",
            "fit": "B",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "b-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 3008,
            "y": 150,
            "w": 640,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "pose": "point"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "page-facing-up"
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
                  "on": "binh",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Quay lại phòng họp",
            "icon": "page-facing-up"
          },
          {
            "id": "b-full",
            "t": "text",
            "text": "“…sao anh còn sửa?”",
            "x": 2028,
            "y": 340,
            "size": 56,
            "at": "l1:editing",
            "color": "coral",
            "hl": [
              {
                "text": "sửa?",
                "at": "l1:editing"
              }
            ]
          },
          {
            "id": "b-ans",
            "t": "text",
            "text": "Đúng câu chữ, sai bối cảnh khách",
            "x": 2028,
            "y": 440,
            "size": 46,
            "at": "l2:wording",
            "hl": [
              {
                "text": "sai bối cảnh",
                "at": "l2:fit"
              }
            ]
          },
          {
            "id": "b-ok",
            "t": "text",
            "text": "Sếp đồng ý giữ bản sửa ✓",
            "x": 2028,
            "y": 530,
            "size": 46,
            "at": "l4:keep",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "sam",
          "say": "Bình, AI said this clause is fine. So why are you still editing it?",
          "sub": "Anh Bình, AI bảo điều khoản này ổn rồi, sao anh còn sửa?",
          "pose": "point"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "The wording is right. But it doesn't fit what we agreed with this client before.",
          "sub": "Câu chữ thì đúng. Nhưng không hợp với cách công ty đã thoả thuận với khách này từ trước.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "And my name goes on it.",
          "sub": "Mà người đứng tên là tôi.",
          "face": "neutral"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sam agrees to keep the edit. That one answer holds today's whole lesson.",
          "sub": "Sam đồng ý giữ bản sửa. Câu trả lời ấy chứa cả bài học hôm nay.",
          "keys": [
            "giữ bản sửa"
          ]
        }
      ],
      "ref": "p9,p10"
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
            "text": "Thị trường đang cần gì?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:report"
          },
          {
            "id": "c-wb",
            "t": "text",
            "text": "Ngân hàng Thế giới: cần thêm",
            "x": 3996,
            "y": 150,
            "size": 40,
            "at": "l1:demand",
            "color": "muted"
          },
          {
            "id": "c-w1",
            "t": "text",
            "text": "• giải quyết vấn đề phức tạp",
            "x": 3996,
            "y": 210,
            "size": 42,
            "at": "l1:complex"
          },
          {
            "id": "c-w2",
            "t": "text",
            "text": "• làm việc nhóm · • thích ứng",
            "x": 3996,
            "y": 270,
            "size": 42,
            "at": "l1:teamwork"
          },
          {
            "id": "c-yr",
            "t": "text",
            "text": "→ lớn lên qua nhiều năm làm việc",
            "x": 3996,
            "y": 340,
            "size": 42,
            "at": "l2:years",
            "color": "accent",
            "hl": [
              {
                "text": "nhiều năm",
                "at": "l2:years"
              }
            ]
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Tư duy phân tích",
            "x": 4836,
            "y": 150,
            "size": 38,
            "at": "l3:Analytical"
          },
          {
            "id": "c-b0",
            "t": "box",
            "x": 5206,
            "y": 160,
            "w": 345,
            "h": 44,
            "at": "l3:Analytical+200",
            "fill": "#f2d64b",
            "stroke": 4
          },
          {
            "id": "c-v0",
            "t": "text",
            "text": "69%",
            "x": 5571,
            "y": 150,
            "size": 40,
            "at": "l3:Analytical+400",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Bền bỉ, linh hoạt",
            "x": 4836,
            "y": 245,
            "size": 38,
            "at": "l3:resilience"
          },
          {
            "id": "c-b1",
            "t": "box",
            "x": 5206,
            "y": 255,
            "w": 335,
            "h": 44,
            "at": "l3:resilience+200",
            "fill": "#cfd8e3",
            "stroke": 4
          },
          {
            "id": "c-v1",
            "t": "text",
            "text": "67%",
            "x": 5561,
            "y": 245,
            "size": 40,
            "at": "l3:resilience+400",
            "color": "ink"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Lãnh đạo, ảnh hưởng",
            "x": 4836,
            "y": 340,
            "size": 38,
            "at": "l3:leadership"
          },
          {
            "id": "c-b2",
            "t": "box",
            "x": 5206,
            "y": 350,
            "w": 305,
            "h": 44,
            "at": "l3:leadership+200",
            "fill": "#cfd8e3",
            "stroke": 4
          },
          {
            "id": "c-v2",
            "t": "text",
            "text": "61%",
            "x": 5531,
            "y": 340,
            "size": 40,
            "at": "l3:leadership+400",
            "color": "ink"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Tư duy sáng tạo",
            "x": 4836,
            "y": 435,
            "size": 38,
            "at": "l3:creative"
          },
          {
            "id": "c-b3",
            "t": "box",
            "x": 5206,
            "y": 445,
            "w": 285,
            "h": 44,
            "at": "l3:creative+200",
            "fill": "#cfd8e3",
            "stroke": 4
          },
          {
            "id": "c-v3",
            "t": "text",
            "text": "57%",
            "x": 5511,
            "y": 435,
            "size": 40,
            "at": "l3:creative+400",
            "color": "ink"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: tóm tắt WEF Future of Jobs 2025, Human Resources Online",
            "x": 4836,
            "y": 540,
            "size": 24,
            "at": "l3",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "c-vn",
            "t": "text",
            "text": "VN thích ứng 38,8% · phân tích 26%",
            "x": 3996,
            "y": 620,
            "size": 44,
            "at": "l4:adaptability",
            "hl": [
              {
                "text": "38,8%",
                "at": "l4:thirty-eight"
              }
            ]
          },
          {
            "id": "c-src2",
            "t": "text",
            "text": "Nguồn: Navigos 2026, Tuổi Trẻ dẫn 26/1/2026",
            "x": 3996,
            "y": 700,
            "size": 24,
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
          "say": "The World Bank's 2019 report: demand grows for complex problem solving, teamwork, and skills that help people adapt.",
          "sub": "Báo cáo 2019 của Ngân hàng Thế giới: nhu cầu tăng ở giải quyết vấn đề phức tạp, làm việc nhóm, kỹ năng giúp thích ứng.",
          "keys": [
            "giải quyết vấn đề phức tạp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "None of these fit in a short course. They grow over years of work.",
          "sub": "Những kỹ năng này không học xong trong một khoá ngắn, mà lớn lên qua nhiều năm làm việc.",
          "keys": [
            "nhiều năm làm việc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The World Economic Forum's summary: analytical thinking, sixty-nine percent. Resilience, sixty-seven. Leadership, sixty-one. Creative thinking, fifty-seven.",
          "sub": "Tóm tắt của WEF: tư duy phân tích 69%, bền bỉ linh hoạt 67%, lãnh đạo 61%, tư duy sáng tạo 57%."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "In Vietnam, Navigos adds adaptability, thirty-eight point eight percent, and problem solving, twenty-six. Right after technology come human skills.",
          "sub": "Ở Việt Nam, Navigos thêm thích ứng 38,8%, phân tích, giải quyết vấn đề 26%. Ngay sau công nghệ là kỹ năng gắn với con người.",
          "keys": [
            "gắn với con người"
          ]
        }
      ],
      "ref": "p1,p2,p3"
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
            "text": "① Thứ Tư · Phán đoán bối cảnh",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Wednesday",
            "hl": [
              {
                "text": "bối cảnh",
                "at": "l4:documents"
              }
            ]
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6944,
            "y": 150,
            "w": 640,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1:Dũng",
                  "pose": "give",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop",
                "fountain-pen"
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
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Hoa",
            "caption": "Thứ Tư · tuần 1 · bàn chị Hoa",
            "icon": "laptop"
          },
          {
            "id": "d-n1",
            "t": "text",
            "text": "Sam: dòng tiền trước, biểu đồ sau",
            "x": 5964,
            "y": 160,
            "size": 42,
            "at": "l3:cash"
          },
          {
            "id": "d-n2",
            "t": "text",
            "text": "Khách này: ngoại lệ, đừng gộp",
            "x": 5964,
            "y": 230,
            "size": 42,
            "at": "l3:exception",
            "hl": [
              {
                "text": "ngoại lệ",
                "at": "l3:exception"
              }
            ]
          },
          {
            "id": "d-doc",
            "t": "text",
            "text": "Không có trong tài liệu",
            "x": 5964,
            "y": 320,
            "size": 50,
            "at": "l4:documents",
            "color": "accent"
          },
          {
            "id": "d-ai",
            "t": "text",
            "text": "AI: đúng kiểu chung chung",
            "x": 5964,
            "y": 410,
            "size": 46,
            "at": "l5:general",
            "color": "muted",
            "hl": [
              {
                "text": "chung chung",
                "at": "l5:general"
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
          "say": "Wednesday. Chị Hoa, chief accountant, and Dũng, her young colleague who asks AI first.",
          "sub": "Thứ Tư. Chị Hoa, kế toán trưởng, và Dũng, đồng nghiệp trẻ việc gì cũng hỏi AI trước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Chị Hoa, AI wrote the cash report for Sam. Looks perfect!",
          "sub": "Chị Hoa, AI viết xong báo cáo dòng tiền cho Sam rồi. Đẹp lắm!",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Sam reads cash first, charts later. And this client is an exception, don't merge it.",
          "sub": "Sam đọc dòng tiền trước, biểu đồ sau. Còn khách này là ngoại lệ, đừng gộp chung.",
          "face": "thinking",
          "pose": "point"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Who changes plans late, how the boss reads numbers, which case is an exception: none of that is in the documents.",
          "sub": "Khách nào hay đổi ý phút cuối, sếp đọc số kiểu gì, ca nào là ngoại lệ: chẳng tài liệu nào ghi.",
          "keys": [
            "chẳng tài liệu nào ghi"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "AI answers from what you feed it and what's common. Right in general, not always right for your case.",
          "sub": "AI trả lời dựa trên thứ bạn đưa vào và thứ phổ biến. Đúng kiểu chung chung, chưa chắc đúng ca của bạn.",
          "keys": [
            "chung chung"
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
      "ref": "p4"
    },
    {
      "id": "s06",
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
            "id": "d-fil",
            "t": "illus",
            "name": "magnifying-glass-tilted-left",
            "x": 5964,
            "y": 500,
            "size": 100,
            "at": "l2:filter"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Kinh nghiệm = bộ lọc",
            "x": 6084,
            "y": 515,
            "size": 60,
            "at": "l2:filter",
            "color": "accent",
            "hl": [
              {
                "text": "bộ lọc",
                "at": "l2:filter"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: UNESCO, hướng dẫn AI tạo sinh (bản Việt 2025)",
            "x": 5964,
            "y": 630,
            "size": 24,
            "at": "l1",
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
          "say": "UNESCO's guidance says AI errors are hard to spot if you don't know the topic well. Flip it: experts spot them fastest.",
          "sub": "Hướng dẫn của UNESCO: lỗi của AI khó nhận ra nếu chưa vững chủ đề. Nói ngược lại, người vững nghề thấy lỗi nhanh nhất.",
          "keys": [
            "thấy lỗi nhanh nhất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your experience is the filter. Twenty years of coffee grounds, finally useful.",
          "sub": "Kinh nghiệm của bạn chính là bộ lọc. Như cái phin cà phê hai mươi năm.",
          "keys": [
            "bộ lọc"
          ]
        }
      ],
      "ref": "p5,p7"
    },
    {
      "id": "s07",
      "module": "BRK-04",
      "data": {
        "title": "UNESCO lo điều gì?",
        "labels": [
          "Người mới",
          "Người lâu năm"
        ],
        "wrong": "Chép nguyên câu trả lời hời hợt của AI",
        "right": "Đọc một lần là thấy chỗ không ổn",
        "wrongIllus": "clipboard",
        "rightIllus": "fountain-pen"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "UNESCO worries newcomers accept shallow AI answers.",
          "sub": "UNESCO lo người mới dễ tin câu trả lời hời hợt của AI.",
          "keys": [
            "hời hợt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A veteran reads it once and sees what's off.",
          "sub": "Người lâu năm đọc một lần là thấy chỗ không ổn.",
          "keys": [
            "đọc một lần"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
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
            "fit": "D",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "d-r",
            "t": "text",
            "text": "Càng hiểu nghề, càng thấy AI sai",
            "x": 5964,
            "y": 700,
            "size": 48,
            "at": "l1:better",
            "color": "accent",
            "hl": [
              {
                "text": "thấy AI sai",
                "at": "l1:mistakes"
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
          "say": "The better you know your field, the more clearly you see AI's mistakes.",
          "sub": "Càng hiểu nghề, bạn càng thấy rõ chỗ AI nói sai.",
          "keys": [
            "càng thấy rõ chỗ AI nói sai"
          ]
        }
      ],
      "ref": "p7"
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
            "text": "② Tuần 2 · Người ký tên",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Week two",
            "hl": [
              {
                "text": "Người ký tên",
                "at": "l1:signs"
              }
            ]
          },
          {
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 170,
            "w": 44,
            "h": 44,
            "at": "l1:financial",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 156,
            "size": 56,
            "at": "l1:financial+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Báo cáo tài chính",
            "x": 7998,
            "y": 160,
            "size": 44,
            "at": "l1:financial+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 245,
            "w": 44,
            "h": 44,
            "at": "l1:legal",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 231,
            "size": 56,
            "at": "l1:legal+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Ý kiến pháp lý",
            "x": 7998,
            "y": 235,
            "size": 44,
            "at": "l1:legal+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 320,
            "w": 44,
            "h": 44,
            "at": "l1:notarised",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 306,
            "size": 56,
            "at": "l1:notarised+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Bản dịch công chứng",
            "x": 7998,
            "y": 310,
            "size": 44,
            "at": "l1:notarised+200"
          },
          {
            "id": "e-c3",
            "t": "box",
            "x": 7932,
            "y": 395,
            "w": 44,
            "h": 44,
            "at": "l1:HR",
            "stroke": 5
          },
          {
            "id": "e-k3",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 381,
            "size": 56,
            "at": "l1:HR+600",
            "color": "accent"
          },
          {
            "id": "e-l3",
            "t": "text",
            "text": "Quyết định nhân sự",
            "x": 7998,
            "y": 385,
            "size": 44,
            "at": "l1:HR+200"
          },
          {
            "id": "e-own",
            "t": "text",
            "text": "Quyền làm chủ của con người",
            "x": 7932,
            "y": 490,
            "size": 46,
            "at": "l3:human agency",
            "color": "accent",
            "hl": [
              {
                "text": "làm chủ",
                "at": "l3:agency"
              }
            ]
          },
          {
            "id": "e-dep",
            "t": "text",
            "text": "đề phòng phụ thuộc quá mức",
            "x": 7932,
            "y": 560,
            "size": 42,
            "at": "l3:over-reliance"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: UNESCO, hướng dẫn AI tạo sinh (bản Việt 2025)",
            "x": 7932,
            "y": 630,
            "size": 24,
            "at": "l3",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "AI gợi ý · người ký quyết định",
            "x": 8772,
            "y": 690,
            "size": 46,
            "at": "l4:decides",
            "hl": [
              {
                "text": "người ký quyết định",
                "at": "l4:decides"
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
          "say": "Week two. Financial reports, legal opinions, notarised translations, HR decisions: someone signs each one.",
          "sub": "Tuần hai. Báo cáo tài chính, ý kiến pháp lý, bản dịch công chứng, quyết định nhân sự: đều cần một người đứng tên.",
          "keys": [
            "một người đứng tên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And that person answers when something goes wrong.",
          "sub": "Và người đó chịu trách nhiệm khi có sai sót."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "UNESCO recommends protecting human agency and guarding against over-reliance on AI.",
          "sub": "UNESCO khuyến nghị bảo đảm quyền làm chủ của con người, đề phòng phụ thuộc quá mức vào AI.",
          "keys": [
            "quyền làm chủ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "At work, agency comes with responsibility. AI suggests, the signer decides.",
          "sub": "Ở nơi làm việc, quyền làm chủ đi kèm trách nhiệm. AI gợi ý, người ký tên quyết định.",
          "keys": [
            "người ký tên quyết định"
          ]
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Chiều thứ Năm · tuần 2",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "give",
            "face": "happy"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "AI bảo ổn, nộp luôn cho sếp",
          "why": "Người đứng tên báo cáo phải trả lời khi có chuyện, không phải AI.",
          "rule": "AI có thể nói ổn, người ký tên mới phải trả lời"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "AI says the monthly report is fine. I'll send it to Sam right now, under chị Hoa's name!",
          "sub": "AI bảo báo cáo tháng ổn rồi. Em gửi Sam luôn, ký tên chị Hoa!",
          "face": "happy",
          "pose": "give",
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
          "say": "If a number is wrong, will AI answer Sam? No. Chị Hoa will.",
          "sub": "Lỡ sai một con số, AI có đứng ra trả lời Sam không? Không. Chị Hoa trả lời.",
          "keys": [
            "Chị Hoa trả lời"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind!",
          "sub": "Tua lại!",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Chị Hoa, AI drafted it. Could you check before you sign?",
          "sub": "Chị Hoa, AI làm nháp rồi. Chị kiểm giúp em trước khi ký nhé?",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "AI can say fine. The signer is the one who answers.",
          "sub": "AI có thể nói ổn, nhưng người ký tên mới phải trả lời khi có chuyện.",
          "phase": "redo",
          "keys": [
            "người ký tên mới phải trả lời"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p8,p10"
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
            "at": "l6",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "③ Tuần 3 · Niềm tin của khách",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Week three",
            "hl": [
              {
                "text": "Niềm tin",
                "at": "l6:trust"
              }
            ]
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 1040,
            "y": 1240,
            "w": 640,
            "data": {
              "set": "office",
              "label": "Khách quen nhắn chị Hoa",
              "actor": {
                "id": "hoa",
                "side": "left"
              },
              "contact": {
                "name": "Khách quen (xưởng gỗ)",
                "illus": "factory"
              },
              "messages": [
                {
                  "from": "them",
                  "text": "Chị ơi, bên em sắp bị kiểm tra thuế, lo quá.",
                  "at": "l2"
                },
                {
                  "from": "me",
                  "text": "Em chuẩn bị trước ba loại hồ sơ các kỳ trước hay thiếu nhé. Chiều nay chị gọi em.",
                  "at": "l4"
                },
                {
                  "from": "them",
                  "text": "Dạ, em gửi chị luôn! Cho em hỏi thêm…",
                  "at": "l5"
                }
              ]
            },
            "at": "l2",
            "caption": "Tuần 3 · khách sắp bị kiểm tra thuế",
            "icon": "mobile-phone"
          },
          {
            "id": "f-bf",
            "t": "text",
            "text": "Trước: “chuẩn bị đầy đủ hồ sơ”",
            "x": 60,
            "y": 1250,
            "size": 38,
            "at": "l3:Before",
            "color": "muted"
          },
          {
            "id": "f-bfx",
            "t": "strike",
            "over": "f-bf",
            "at": "l4:After"
          },
          {
            "id": "f-af1",
            "t": "text",
            "text": "Sau: AI chỉ làm dàn ý",
            "x": 60,
            "y": 1340,
            "size": 42,
            "at": "l4:outline",
            "color": "accent"
          },
          {
            "id": "f-af2",
            "t": "text",
            "text": "+ tự viết: 3 loại hay thiếu",
            "x": 60,
            "y": 1410,
            "size": 42,
            "at": "l4:three"
          },
          {
            "id": "f-af3",
            "t": "text",
            "text": "+ hẹn gọi chiều nay",
            "x": 60,
            "y": 1480,
            "size": 42,
            "at": "l4:call"
          },
          {
            "id": "f-re",
            "t": "text",
            "text": "Khách trả lời ngay, hỏi thêm",
            "x": 60,
            "y": 1570,
            "size": 46,
            "at": "l5:replies",
            "hl": [
              {
                "text": "trả lời ngay",
                "at": "l5:replies"
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
          "say": "Week three. A long-time client of chị Hoa is about to face a tax inspection.",
          "sub": "Tuần ba. Một khách quen của chị Hoa sắp bị kiểm tra thuế."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The client writes, clearly worried.",
          "sub": "Khách nhắn, giọng lo thấy rõ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Before: Hoa sent AI's paragraph as it was. Correct, but generic. Please prepare all documents as required.",
          "sub": "Trước: chị gửi nguyên đoạn AI viết, đúng mà chung chung: “Quý công ty vui lòng chuẩn bị đầy đủ hồ sơ theo quy định.”",
          "keys": [
            "đúng mà chung chung"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "After: AI's text becomes an outline. She rewrites it, names three document types this client often missed, and offers a call this afternoon.",
          "sub": "Sau: đoạn AI chỉ làm dàn ý. Chị tự viết lại, nêu ba loại hồ sơ khách hay thiếu các kỳ trước, hẹn gọi chiều nay.",
          "keys": [
            "chỉ làm dàn ý"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The client replies at once, and asks more.",
          "sub": "Khách trả lời ngay, còn hỏi thêm."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Long-time clients trust you because you know their situation, helped them through hard times, and tell the truth even when it's bad news.",
          "sub": "Khách lâu năm tin bạn vì bạn hiểu hoàn cảnh họ, từng giúp họ qua lúc khó, và nói thật cả khi tin không vui.",
          "keys": [
            "nói thật cả khi tin không vui"
          ]
        }
      ],
      "ref": "p11,p12"
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
            "id": "f-wb",
            "t": "text",
            "text": "Làm việc nhóm · lãnh đạo, ảnh hưởng",
            "x": 60,
            "y": 1650,
            "size": 40,
            "at": "l1:teamwork"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Ngân hàng Thế giới 2019; tóm tắt WEF 2025",
            "x": 60,
            "y": 1710,
            "size": 24,
            "at": "l1",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Khách quay lại vì bạn hiểu họ",
            "x": 60,
            "y": 1780,
            "size": 46,
            "at": "l2:back",
            "color": "accent",
            "hl": [
              {
                "text": "bạn hiểu họ",
                "at": "l2:understand"
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
          "say": "The World Bank lists teamwork among social skills in rising demand. The forum's summary puts leadership and social influence among core skills.",
          "sub": "Ngân hàng Thế giới xếp làm việc nhóm vào kỹ năng ứng xử xã hội đang được cần nhiều hơn; WEF đặt lãnh đạo, ảnh hưởng xã hội vào nhóm cốt lõi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "AI helps you write faster. But clients come back because you understand them.",
          "sub": "AI giúp bạn viết nhanh hơn, nhưng khách quay lại vì bạn hiểu họ.",
          "keys": [
            "khách quay lại vì bạn hiểu họ"
          ]
        }
      ],
      "ref": "p11,p13"
    },
    {
      "id": "s13",
      "module": "BRK-05",
      "data": {
        "title": "Đến đây, AI khó thay",
        "points": [
          "Phán đoán theo bối cảnh",
          "Trách nhiệm người ký tên",
          "Niềm tin của khách"
        ],
        "illus": "ginger-root"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Quick recap of what AI finds hard to replace.",
          "sub": "Nhắc nhanh những gì AI khó thay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Judgement in context.",
          "sub": "Phán đoán theo bối cảnh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The signer's responsibility.",
          "sub": "Trách nhiệm của người ký tên."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And clients' trust.",
          "sub": "Và niềm tin của khách."
        }
      ],
      "ref": "p4,p8,p11"
    },
    {
      "id": "s14",
      "module": "BRK-07",
      "data": {
        "question": "Vậy ai dùng công cụ giỏi hơn sẽ thắng?",
        "illus": "thinking-face"
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
          "say": "So whoever uses the tools better wins?",
          "sub": "Vậy ai dùng công cụ giỏi hơn sẽ thắng?",
          "keys": [
            "dùng công cụ giỏi hơn"
          ]
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
            "text": "④ Tuần 3 · Biết hỏi, biết kiểm",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Still week three",
            "hl": [
              {
                "text": "biết kiểm",
                "at": "l2:good result"
              }
            ]
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 3008,
            "y": 1240,
            "w": 640,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "phone",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "laptop",
                "fountain-pen"
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
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l3",
            "caption": "Tuần 3 · Dũng và chị Hoa cùng làm",
            "icon": "laptop"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Hiểu · hỏi đúng · đánh giá · cộng tác",
            "x": 2028,
            "y": 1250,
            "size": 38,
            "at": "l1:four"
          },
          {
            "id": "g-oc",
            "t": "text",
            "text": "Thiếu: kiểm soát đầu ra",
            "x": 2028,
            "y": 1320,
            "size": 44,
            "at": "l1:output control",
            "color": "coral"
          },
          {
            "id": "g-a1",
            "t": "text",
            "text": "Lợi thế 1: biết câu hỏi đúng",
            "x": 2028,
            "y": 1410,
            "size": 42,
            "at": "l2:right questions"
          },
          {
            "id": "g-a2",
            "t": "text",
            "text": "Lợi thế 2: biết kết quả tốt",
            "x": 2028,
            "y": 1480,
            "size": 42,
            "at": "l2:good result",
            "hl": [
              {
                "text": "kết quả tốt",
                "at": "l2:good result"
              }
            ]
          },
          {
            "id": "g-myth",
            "t": "text",
            "text": "Có AI → kinh nghiệm vô dụng",
            "x": 2028,
            "y": 1580,
            "size": 44,
            "at": "l5:useless",
            "color": "muted"
          },
          {
            "id": "g-mythx",
            "t": "strike",
            "over": "g-myth",
            "at": "l6:judging"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Still week three. Tuổi Trẻ lists four parts of AI literacy, and Navigos says output control is the skill workers lack.",
          "sub": "Vẫn tuần ba. Tuổi Trẻ nêu bốn phần của hiểu biết AI; Navigos nói kiểm soát đầu ra là kỹ năng người lao động còn thiếu.",
          "keys": [
            "kiểm soát đầu ra"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Veterans have two built-in advantages: they know the right questions in their field, and what a good result looks like.",
          "sub": "Người lâu năm có sẵn hai lợi thế: biết câu hỏi đúng trong nghề, và biết kết quả tốt trông thế nào.",
          "keys": [
            "hai lợi thế"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Chị Hoa, AI found ten similar invoices in two minutes!",
          "sub": "Chị Hoa, AI tìm ra mười hoá đơn giống nhau trong hai phút!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Good. Now these two are not duplicates. Different contracts. See?",
          "sub": "Tốt. Nhưng hai cái này không trùng đâu, khác hợp đồng. Thấy chưa?",
          "pose": "point"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Many think that with AI, old experience becomes useless.",
          "sub": "Nhiều người nghĩ có AI rồi, kinh nghiệm cũ thành vô dụng.",
          "keys": [
            "vô dụng"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "But tools only speed up drafting and searching. Judging right or wrong, fit or not, still takes experience.",
          "sub": "Thực ra công cụ chỉ làm nhanh phần soạn và tìm. Đánh giá đúng sai, hợp hay không hợp vẫn cần kinh nghiệm.",
          "keys": [
            "vẫn cần kinh nghiệm"
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
          }
        ],
        "items": [
          {
            "id": "g-bb",
            "t": "illus",
            "name": "seedling",
            "x": 2028,
            "y": 1670,
            "size": 100,
            "at": "l1:bamboo"
          },
          {
            "id": "g-ca",
            "t": "text",
            "text": "“Tre già măng mọc”",
            "x": 2148,
            "y": 1680,
            "size": 56,
            "at": "l1:bamboo",
            "color": "accent",
            "hl": [
              {
                "text": "măng mọc",
                "at": "l1:shoots"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Trẻ dùng nhanh · lâu năm kiểm chắc",
            "x": 2868,
            "y": 1780,
            "size": 40,
            "at": "l2:fast",
            "hl": [
              {
                "text": "kiểm chắc",
                "at": "l2:check firmly"
              }
            ]
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "Kinh nghiệm: làm ra → kiểm, quyết",
            "x": 2028,
            "y": 1790,
            "size": 38,
            "at": "l3:moves",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Old bamboo stands, young shoots rise. Our elders saw this coming.",
          "sub": "“Tre già măng mọc.” Ông bà mình thấy trước rồi.",
          "keys": [
            "Tre già măng mọc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The young use tools fast, veterans check firmly. Together, both get stronger.",
          "sub": "Người trẻ dùng công cụ nhanh, người lâu năm kiểm kết quả chắc. Làm cùng nhau thì cả hai mạnh hơn.",
          "keys": [
            "cả hai mạnh hơn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Experience doesn't lose value. It moves from making things to checking and deciding.",
          "sub": "Kinh nghiệm không mất giá, nó chuyển từ làm ra sang kiểm và quyết.",
          "keys": [
            "kiểm và quyết"
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
            "text": "Tuần 4 · Sổ “lỗi hay gặp”",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Week four",
            "hl": [
              {
                "text": "lỗi hay gặp",
                "at": "l1:common mistakes"
              }
            ]
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4976,
            "y": 1240,
            "w": 640,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "notebook",
                "fountain-pen"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:notebook",
            "caption": "Tối thứ Ba · tuần 4",
            "icon": "notebook"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l2:errors",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 1246,
            "size": 56,
            "at": "l2:errors+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Lỗi hay gặp",
            "x": 4062,
            "y": 1250,
            "size": 44,
            "at": "l2:errors+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1340,
            "w": 44,
            "h": 44,
            "at": "l2:questions",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 1326,
            "size": 56,
            "at": "l2:questions+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Câu luôn hỏi khách",
            "x": 4062,
            "y": 1330,
            "size": 44,
            "at": "l2:questions+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1420,
            "w": 44,
            "h": 44,
            "at": "l2:signs",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 1406,
            "size": 56,
            "at": "l2:signs+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Dấu hiệu hồ sơ có vấn đề",
            "x": 4062,
            "y": 1410,
            "size": 44,
            "at": "l2:signs+200"
          },
          {
            "id": "h-u1",
            "t": "text",
            "text": "① đưa vào yêu cầu gửi AI",
            "x": 3996,
            "y": 1530,
            "size": 44,
            "at": "l3:requests",
            "color": "accent"
          },
          {
            "id": "h-u2",
            "t": "text",
            "text": "② dùng để kiểm kết quả AI",
            "x": 3996,
            "y": 1600,
            "size": 44,
            "at": "l3:check",
            "color": "accent"
          },
          {
            "id": "h-sh",
            "t": "text",
            "text": "Chia sẻ cho người trẻ",
            "x": 3996,
            "y": 1690,
            "size": 46,
            "at": "l4:Share",
            "hl": [
              {
                "text": "người trẻ",
                "at": "l4:young"
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
          "say": "Week four. Chị Hoa opens a notebook for her common mistakes.",
          "sub": "Tuần bốn. Chị Hoa mở một cuốn sổ ghi lỗi hay gặp.",
          "keys": [
            "lỗi hay gặp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Errors I see every month. Questions I always ask clients. Signs a file has a problem.",
          "sub": "Lỗi tháng nào cũng gặp. Câu luôn hỏi khách. Dấu hiệu một hồ sơ có vấn đề.",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two uses: put it in your requests to AI, so results fit the job. And use it to check what AI produces.",
          "sub": "Hai cách dùng: đưa vào yêu cầu gửi AI cho kết quả sát nghề, và dùng để kiểm lại những gì AI làm ra.",
          "keys": [
            "Hai cách dùng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Share it with young colleagues too. It shows your value better than any CV.",
          "sub": "Chia sẻ với đồng nghiệp trẻ nữa. Nó cho thấy giá trị của bạn rõ hơn mọi bản CV.",
          "keys": [
            "giá trị của bạn"
          ]
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s18",
      "module": "BRK-03",
      "data": {
        "value": 39,
        "suffix": "%",
        "label": "kỹ năng cốt lõi dự báo sẽ thay đổi đến 2030",
        "illus": "hourglass-done"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "But don't stand still.",
          "sub": "Nhưng đừng đứng yên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "About thirty-nine percent of core skills may change by 2030.",
          "sub": "Khoảng 39% kỹ năng cốt lõi dự báo sẽ thay đổi đến năm 2030.",
          "keys": [
            "39%"
          ]
        }
      ],
      "ref": "p18"
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Kinh nghiệm là nền",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:foundation",
            "hl": [
              {
                "text": "là nền",
                "at": "l1:foundation"
              }
            ]
          },
          {
            "id": "i-hs",
            "t": "illus",
            "name": "house",
            "x": 5964,
            "y": 1260,
            "size": 140,
            "at": "l1:foundation"
          },
          {
            "id": "i-base",
            "t": "text",
            "text": "Nền: hai mươi năm nghề",
            "x": 6134,
            "y": 1280,
            "size": 50,
            "at": "l1:foundation"
          },
          {
            "id": "i-new",
            "t": "text",
            "text": "Tầng mới: cách làm cùng AI",
            "x": 6134,
            "y": 1370,
            "size": 50,
            "at": "l1:learn",
            "color": "accent",
            "hl": [
              {
                "text": "cách làm cùng AI",
                "at": "l1:working with AI"
              }
            ]
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: tóm tắt WEF Future of Jobs 2025, Human Resources Online",
            "x": 5964,
            "y": 1470,
            "size": 24,
            "at": "l1",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "i-nx",
            "t": "text",
            "text": "Bài sau: dữ liệu nào cấm đưa?",
            "x": 5964,
            "y": 1560,
            "size": 46,
            "at": "l3:data",
            "color": "muted",
            "hl": [
              {
                "text": "cấm đưa",
                "at": "l3:never"
              }
            ]
          },
          {
            "id": "i-ck",
            "t": "text",
            "text": "… và cách kiểm câu trả lời",
            "x": 5994,
            "y": 1640,
            "size": 44,
            "at": "l3:check"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So keeping your value doesn't mean standing still. Experience is the foundation, working with AI is the new floor you still have to learn.",
          "sub": "Giữ giá trị nghề không có nghĩa là đứng yên. Kinh nghiệm là nền, còn cách làm cùng AI phải học thêm.",
          "keys": [
            "Kinh nghiệm là nền"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A house on a strong base can always add a floor.",
          "sub": "Nhà có móng chắc thì lúc nào cũng xây thêm tầng được."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "To work with AI without risk, you need to know which data must never go in, and how to check its answers. That's next.",
          "sub": "Muốn làm cùng AI mà không rủi ro, phải biết dữ liệu nào không được đưa vào và cách kiểm câu trả lời. Đó là bài sau.",
          "keys": [
            "dữ liệu nào không được đưa vào"
          ]
        }
      ],
      "ref": "p18,p19"
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
            "text": "Thứ Hai tuần 5 · Giao ban",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Monday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8912,
            "y": 1240,
            "w": 640,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "binh",
                  "side": "center",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "notebook",
                "page-facing-up"
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
            "at": "l1:room",
            "caption": "Vẫn phòng họp ấy",
            "icon": "page-facing-up"
          },
          {
            "id": "j-s",
            "t": "text",
            "text": "“Lần này, tôi hỏi anh Bình trước”",
            "x": 7932,
            "y": 1250,
            "size": 40,
            "at": "l2:asked",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi anh Bình trước",
                "at": "l2:asked"
              }
            ]
          },
          {
            "id": "j-b",
            "t": "text",
            "text": "Sổ lỗi hay gặp → Dũng",
            "x": 7932,
            "y": 1350,
            "size": 48,
            "at": "l3:notebook"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Tre già măng mọc”",
            "x": 7932,
            "y": 1470,
            "size": 56,
            "at": "l4:shoots",
            "color": "accent",
            "hl": [
              {
                "text": "măng mọc",
                "at": "l4:rise"
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
          "say": "Monday of week five. Same meeting room, same table.",
          "sub": "Thứ Hai tuần năm. Vẫn phòng họp ấy, vẫn cái bàn ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "AI said the new clause is fine. So this time, I asked Bình first.",
          "sub": "AI bảo điều khoản mới ổn. Nên lần này, tôi hỏi anh Bình trước.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "And chị Hoa lent me her notebook of common mistakes. Gold!",
          "sub": "Còn chị Hoa cho em mượn sổ lỗi hay gặp. Vàng ròng luôn!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Old bamboo stands, young shoots rise. This time, the sentence finishes the right way.",
          "sub": "“Tre già măng mọc.” Lần này, câu nói được nói trọn theo cách đúng.",
          "keys": [
            "Tre già măng mọc"
          ]
        }
      ],
      "ref": "outro"
    },
    {
      "id": "s21",
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
            "fit": "D",
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
            "x": 6664,
            "y": 500,
            "at": "l1+1200"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8632,
            "y": 170,
            "at": "l2+1200"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 760,
            "y": 1570,
            "at": "l3+1200"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 2728,
            "y": 1410,
            "at": "l4+1200"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo; số liệu theo nguồn đã dẫn, có thể thay đổi. Nhân vật là minh hoạ.",
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
          "id": "l0",
          "lang": "en",
          "who": "det",
          "say": "Step back. One month, one board.",
          "sub": "Lùi lại xem. Một tháng, một tấm bảng."
        },
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: judgement in context. Your experience is the filter.",
          "sub": "Tóm lại: phán đoán theo bối cảnh, kinh nghiệm là bộ lọc.",
          "keys": [
            "kinh nghiệm là bộ lọc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The signer answers, not the AI.",
          "sub": "Người ký tên trả lời, không phải AI.",
          "keys": [
            "Người ký tên trả lời"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Clients come back because you understand them.",
          "sub": "Khách quay lại vì bạn hiểu họ.",
          "keys": [
            "bạn hiểu họ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Know the right question, and check the result.",
          "sub": "Biết hỏi đúng, và biết kiểm kết quả.",
          "keys": [
            "biết kiểm kết quả"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Your turn: write a list of ten common mistakes in your field.",
          "sub": "Đến lượt bạn: viết danh sách mười lỗi hay gặp trong nghề.",
          "keys": [
            "mười lỗi hay gặp"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s22",
      "module": "QUIZ-01",
      "data": {
        "q": "Why did Tuan change a penalty clause that AI said was fine?",
        "options": [
          "The wording was correct but did not match the earlier deal with this client",
          "The AI tool asked him to change it before the contract could be printed",
          "He wanted to show his boss that he was busier than the AI tool"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "page-facing-up",
        "why": "Câu chữ đúng nhưng không hợp thoả thuận trước đó với khách này: phán đoán theo bối cảnh của người đứng tên."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Why did Tuan change a penalty clause that AI said was fine?",
          "sub": "Vì sao anh Tuấn sửa điều khoản phạt mà AI nói là ổn?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The wording was right, but it didn't fit the earlier deal with this client.",
          "sub": "Câu chữ đúng, nhưng không hợp thoả thuận trước đó với khách."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Context, and a name on the page.",
          "sub": "Bối cảnh, và một cái tên đứng trên trang giấy."
        }
      ],
      "ref": "questions[15]"
    },
    {
      "id": "s23",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi viết mười lỗi hay gặp trong nghề của bạn"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, start your own notebook: ten common mistakes in your job.",
          "sub": "Tối nay, mở cuốn sổ của riêng bạn: mười lỗi hay gặp trong nghề."
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
  "notes": "#145 bài MỚI (chuỗi experts-staying-relevant-with-ai, bài 2) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-22 (câu thoại bị cắt): Sam “AI bảo điều khoản này ổn rồi, sao anh còn…” → Đét “Giữ câu đó!” → nói trọn ở s03 (≈ giây 60) kèm câu trả lời của chú Bình (📌 p9). Dòng thời gian: MỘT THÁNG (thứ Hai tuần 1 họp giao ban → số liệu thị trường → thứ Tư tuần 1 phán đoán bối cảnh: Dũng nộp báo cáo dòng tiền AI viết, chị Hoa chỉ chỗ ngoại lệ → tuần 2 người ký tên + “Khoan đã!” Dũng định gửi báo cáo ký tên chị Hoa → tuần 3 khách sắp kiểm tra thuế (✍️ p12) → tuần 3 biết hỏi, biết kiểm, hoá đơn trùng → tuần 4 sổ lỗi hay gặp (p17) → thứ Hai tuần 5 cùng phòng họp). Nhân vật theo w145/_series/experts-staying-relevant-with-ai.md: chú Bình (= anh Tuấn p9), Sam (= sếp p9), chị Hoa (= chị Hương p12), Dũng (người trẻ dùng công cụ nhanh, minh hoạ p6/p15). Chi tiết minh hoạ tự đặt, không phải số liệu: báo cáo dòng tiền cho Sam, “mười hoá đơn giống nhau trong hai phút”, khách quen xưởng gỗ. Số chỉ từ bài: 69/67/61/57%, 38,8%, 26%, 39% đến 2030, ba loại hồ sơ, mười lỗi (outro). Ngắt nhịp: BRK-04 s07 (người mới / lâu năm p6), DLG-01 s10 (p8, p10), BRK-05 s13 (nhắc nhanh), BRK-07 s14 (rehook p15), BRK-03 s18 (39%). Khung SCENE-02 tin nhắn khách s11. Tục ngữ: “Tre già măng mọc”. Câu đố questions[15]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s00",
    "close": "s20"
  }
};
