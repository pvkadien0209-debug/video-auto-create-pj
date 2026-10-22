// ielts-listening-strategy--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "ielts-listening-strategy--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "ielts-listening-takers",
    "slug": "ielts-listening-strategy",
    "door": "kien-thuc",
    "level": "B1",
    "title": "IELTS Listening gồm những phần nào và chiến thuật chung là gì?",
    "series": "IELTS Listening từng phần — chiến thuật 40 câu, 4 phần cho thí sinh nhắm band 5.5–7"
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
            "id": "a-q",
            "t": "text",
            "text": "Băng phát mấy lần?",
            "x": 50,
            "y": 24,
            "size": 84,
            "at": "l1:how many",
            "hl": [
              {
                "text": "mấy lần",
                "at": "l1:times"
              }
            ]
          },
          {
            "id": "a-b1",
            "t": "box",
            "x": 60,
            "y": 170,
            "w": 330,
            "h": 140,
            "at": "l2:Once"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "1 lần",
            "x": 120,
            "y": 190,
            "size": 84,
            "at": "l2:Once"
          },
          {
            "id": "a-b2",
            "t": "box",
            "x": 460,
            "y": 170,
            "w": 330,
            "h": 140,
            "at": "l2:twice"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "2 lần",
            "x": 520,
            "y": 190,
            "size": 84,
            "at": "l2:twice"
          },
          {
            "id": "a-r1",
            "t": "ring",
            "around": [
              "a-b1"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:once"
          },
          {
            "id": "a-x2",
            "t": "strike",
            "over": "a-2",
            "at": "l3:Just"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: IELTS.org, IDP — bản ghi chỉ phát một lần",
            "x": 60,
            "y": 340,
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
          "say": "Quick guess. In IELTS Listening, how many times is each recording played?",
          "sub": "Đoán nhanh: phần Nghe IELTS, mỗi bản ghi được phát mấy lần?",
          "keys": [
            "mấy lần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Once? Or twice?",
          "sub": "Một lần? Hay hai lần?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Answer: once. Just once.",
          "sub": "Đáp án: một lần. Đúng một lần thôi.",
          "keys": [
            "một lần"
          ],
          "wait": 1500
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "IELTS dot org and IDP both say so. No replay button, no second chance.",
          "sub": "IELTS.org và IDP đều ghi vậy. Không nút phát lại, không cơ hội thứ hai.",
          "keys": [
            "không cơ hội thứ hai"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
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
            "y": 150,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "headphone",
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
            "at": "l1",
            "caption": "Thứ Bảy 13:55 · quán nhóm học",
            "icon": "headphone"
          },
          {
            "id": "a-my",
            "t": "text",
            "text": "Lần 1 làm quen, lần 2 điền",
            "x": 60,
            "y": 430,
            "size": 46,
            "at": "l4:grandparents",
            "color": "muted"
          },
          {
            "id": "a-myx",
            "t": "strike",
            "over": "a-my",
            "at": "l5:once"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Lời nói gió bay”",
            "x": 60,
            "y": 540,
            "size": 64,
            "at": "l4:wind",
            "color": "accent",
            "hl": [
              {
                "text": "gió bay",
                "at": "l4:wind"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "… bay đúng một lần",
            "x": 100,
            "y": 640,
            "size": 48,
            "at": "l5:never",
            "color": "coral",
            "hl": [
              {
                "text": "một lần",
                "at": "l5:once"
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
          "say": "Meet Thảo, twenty-seven, an office worker preparing her master's application.",
          "sub": "Đây là Thảo, 27 tuổi, nhân viên văn phòng, đang chuẩn bị hồ sơ học thạc sĩ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Reading is done. This Saturday afternoon, her first mock Listening test.",
          "sub": "Xong phần Đọc. Chiều thứ Bảy này, Thảo thi thử phần Nghe lần đầu.",
          "keys": [
            "thi thử phần Nghe"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "The first play is to get used to it. The second time, I'll write.",
          "sub": "Lần phát đầu để làm quen. Lần hai mình mới điền.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents warned us: spoken words fly away with the wind.",
          "sub": "Ông bà dặn rồi: “Lời nói gió bay.”",
          "keys": [
            "Lời nói gió bay"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "In IELTS, they fly once, and never come back.",
          "sub": "Trong IELTS, lời bay đúng một lần, rồi không quay lại.",
          "keys": [
            "đúng một lần"
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
      "ref": "intro,p3"
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
            "text": "40 câu, 1 lần nghe",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:keep",
            "hl": [
              {
                "text": "1 lần nghe",
                "at": "l1:one play"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "30 phút · 4 phần · 40 câu",
            "x": 2028,
            "y": 165,
            "size": 52,
            "at": "l2:thirty",
            "hl": [
              {
                "text": "4 phần",
                "at": "l2:four parts"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "2 độc thoại + 2 hội thoại",
            "x": 2028,
            "y": 250,
            "size": 46,
            "at": "l3:monologues"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Academic = General Training",
            "x": 2028,
            "y": 320,
            "size": 46,
            "at": "l3:same"
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "Giọng Anh, Mỹ, Úc, Ireland, NZ",
            "x": 2028,
            "y": 390,
            "size": 46,
            "at": "l4:British"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: tai siêu nhân",
            "x": 2928,
            "y": 170,
            "size": 50,
            "at": "l5:super",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l5:preparing"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: chuẩn bị trước băng",
            "x": 2928,
            "y": 255,
            "size": 52,
            "at": "l5:preparing",
            "color": "accent",
            "hl": [
              {
                "text": "chuẩn bị trước",
                "at": "l5:before"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: British Council — IELTS test format",
            "x": 2928,
            "y": 345,
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
          "say": "So, one play only. How do you keep your marks?",
          "sub": "Vậy chỉ nghe một lần, làm sao giữ điểm?",
          "keys": [
            "giữ điểm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "First, the shape. British Council: thirty minutes, four parts, forty questions.",
          "sub": "Trước hết, hình dáng đề. Theo British Council: 30 phút, bốn phần, 40 câu.",
          "keys": [
            "bốn phần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two monologues, two conversations. The same for Academic and General Training.",
          "sub": "Hai bài độc thoại, hai bài hội thoại. Academic hay General Training đều như nhau."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Plus a parade of accents: British, American, Australian, Irish, New Zealand.",
          "sub": "Thêm một đoàn diễu hành giọng: Anh, Mỹ, Úc, Ireland, New Zealand."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So the secret isn't super ears. It's preparing before the tape runs.",
          "sub": "Vậy bí quyết không phải tai siêu nhân, mà là chuẩn bị trước khi băng chạy.",
          "keys": [
            "chuẩn bị trước khi băng chạy"
          ]
        }
      ],
      "ref": "p1,p4"
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
            "id": "b-5",
            "t": "text",
            "text": "10 câu/phần · 1 câu = 1 điểm",
            "x": 2028,
            "y": 490,
            "size": 46,
            "at": "l1:Ten"
          },
          {
            "id": "b-6",
            "t": "text",
            "text": "Điểm thô /40 → band 5.5, 7.0",
            "x": 2028,
            "y": 570,
            "size": 46,
            "at": "l2:raw",
            "hl": [
              {
                "text": "band",
                "at": "l2:band"
              }
            ]
          },
          {
            "id": "b-7",
            "t": "text",
            "text": "Sai không trừ → đừng bỏ trống",
            "x": 2028,
            "y": 660,
            "size": 52,
            "at": "l3:never",
            "color": "accent",
            "hl": [
              {
                "text": "đừng bỏ trống",
                "at": "l3:empty"
              }
            ]
          },
          {
            "id": "b-8",
            "t": "text",
            "text": "Ô trống = vé số chưa mua",
            "x": 2928,
            "y": 560,
            "size": 46,
            "at": "l4:lottery",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Ten questions per part, one mark each.",
          "sub": "Mỗi phần mười câu, mỗi câu đúng một điểm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your raw score out of forty becomes a band, whole or half, like five point five or seven.",
          "sub": "Điểm thô trên 40 được quy ra band, nguyên hoặc nửa band, như 5.5 hay 7.0."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Wrong answers lose nothing. So IDP says: never leave a box empty.",
          "sub": "Câu sai không bị trừ điểm. Nên IDP khuyên: đừng bỏ trống ô nào.",
          "keys": [
            "đừng bỏ trống"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "An empty box is a lottery ticket you never even bought.",
          "sub": "Ô trống là tờ vé số mà bạn còn chẳng thèm mua."
        }
      ],
      "ref": "p2"
    },
    {
      "id": "s04",
      "module": "BRK-08",
      "data": {
        "title": "Buổi thi thử của Thảo",
        "points": [
          {
            "label": "14:00",
            "sub": "Đeo tai nghe",
            "illus": "headphone"
          },
          {
            "label": "14:01",
            "sub": "Phần giới thiệu",
            "illus": "memo"
          },
          {
            "label": "14:05",
            "sub": "Lỡ một câu",
            "illus": "warning"
          },
          {
            "label": "14:30",
            "sub": "Ba phút soát",
            "illus": "stopwatch"
          },
          {
            "label": "15:00",
            "sub": "Chấm, ghi lỗi",
            "illus": "check-mark-button"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One mock test, five checkpoints.",
          "sub": "Một buổi thi thử, năm trạm dừng.",
          "keys": [
            "năm trạm dừng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Headphones on, Thảo.",
          "sub": "Đeo tai nghe vào nào, Thảo."
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
            "text": "① 14:00 · Bốn phần",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                }
              ],
              "props": [
                "laptop",
                "headphone"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:café",
            "caption": "14:00 · Sam mở băng",
            "icon": "laptop"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "4 phần = 4 căn phòng",
            "x": 3996,
            "y": 170,
            "size": 56,
            "at": "l4:rooms",
            "color": "accent",
            "hl": [
              {
                "text": "4 căn phòng",
                "at": "l4:rooms"
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
          "say": "Stop one, two p.m., the study café. Meet Sam, the group's native teacher, who runs the tape.",
          "sub": "Chặng một, 14 giờ, quán nhóm tự học. Đây là Sam, cô giáo bản ngữ của nhóm, người phát băng.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And Lan, twenty, the tidiest note-taker in the group.",
          "sub": "Và Lan, 20 tuổi, người ghi chép ngăn nắp nhất nhóm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Headphones on. Four parts, forty questions, one play only.",
          "sub": "Đeo tai nghe vào. Bốn phần, 40 câu, chỉ phát một lần.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Four parts, like four different rooms.",
          "sub": "Bốn phần, như bốn căn phòng khác nhau."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
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
          }
        ],
        "items": [
          {
            "id": "c-p1",
            "t": "text",
            "text": "P1 · 2 người · tên, ngày, giá",
            "x": 3996,
            "y": 270,
            "size": 44,
            "at": "l1:Part one"
          },
          {
            "id": "c-p2",
            "t": "text",
            "text": "P2 · 1 người · nơi chốn, dịch vụ",
            "x": 3996,
            "y": 345,
            "size": 44,
            "at": "l2:Part two"
          },
          {
            "id": "c-p3",
            "t": "text",
            "text": "P3 · thảo luận học tập",
            "x": 3996,
            "y": 420,
            "size": 44,
            "at": "l3:Part three"
          },
          {
            "id": "c-p3b",
            "t": "text",
            "text": "ai nghĩ gì, chốt ra sao",
            "x": 4036,
            "y": 490,
            "size": 40,
            "at": "l4:decide",
            "color": "muted"
          },
          {
            "id": "c-p4",
            "t": "text",
            "text": "P4 · 1 người · bài giảng",
            "x": 3996,
            "y": 560,
            "size": 44,
            "at": "l5:Part four"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "P1–2: đời thường · P3–4: giảng đường",
            "x": 3996,
            "y": 670,
            "size": 44,
            "at": "l6:daily",
            "color": "accent",
            "hl": [
              {
                "text": "giảng đường",
                "at": "l6:lecture hall"
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
          "say": "Part one: two people, an everyday situation. Names, dates, times, prices, addresses.",
          "sub": "Phần 1: hai người, tình huống đời thường. Hỏi tên, ngày, giờ, giá, địa chỉ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Part two: one speaker, introducing a product, a place or a service.",
          "sub": "Phần 2: một người nói, giới thiệu sản phẩm, địa điểm hay dịch vụ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Part three: a study discussion. Two main speakers, maybe a tutor.",
          "sub": "Phần 3: thảo luận học tập. Hai người nói chính, có thể thêm người hướng dẫn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Follow who thinks what, and what they decide.",
          "sub": "Theo dõi ai nghĩ gì, và cả nhóm chốt ra sao.",
          "keys": [
            "chốt ra sao"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Part four: one speaker on an academic subject, like a lecture.",
          "sub": "Phần 4: một người nói về chủ đề học thuật, như bài giảng."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "One and two: daily life. Three and four: the lecture hall.",
          "sub": "Phần 1, 2: đời thường. Phần 3, 4: giảng đường.",
          "keys": [
            "giảng đường"
          ]
        }
      ],
      "ref": "p5,p6"
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
          },
          {
            "at": "l4",
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
            "text": "② 14:01 · Phần giới thiệu",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "headphone",
                "memo"
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
            "at": "l1:introduction",
            "caption": "14:01 · băng đang giới thiệu",
            "icon": "headphone"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Thảo: ngồi chờ băng",
            "x": 5964,
            "y": 165,
            "size": 46,
            "at": "l1:waits",
            "color": "muted"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Lan: lướt 10 câu",
            "x": 5964,
            "y": 235,
            "size": 46,
            "at": "l3:skims",
            "color": "accent",
            "hl": [
              {
                "text": "lướt 10 câu",
                "at": "l3:ten"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "gạch: date · cost · street",
            "x": 6004,
            "y": 305,
            "size": 40,
            "at": "l5:underlines"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "bên lề: số · tiền · tên",
            "x": 6004,
            "y": 370,
            "size": 40,
            "at": "l5:margin",
            "hl": [
              {
                "text": "số · tiền · tên",
                "at": "l5:margin"
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
          "say": "Stop two. The tape opens with an introduction, and Thảo waits politely.",
          "sub": "Chặng hai. Băng mở đầu bằng phần giới thiệu, Thảo ngồi chờ rất lịch sự."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'll read the questions when the real talk starts.",
          "sub": "Khi nào vào nội dung thật, mình mới đọc câu hỏi.",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Lan does the opposite. She skims all ten questions.",
          "sub": "Lan làm ngược lại: lướt hết cả mười câu.",
          "keys": [
            "lướt hết cả mười câu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Date, cost, name of street. Number, money, name.",
          "sub": "Date, cost, name of street. Số, tiền, tên.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "She underlines key words, and writes in the margin what each gap needs.",
          "sub": "Lan gạch từ khoá, ghi bên lề mỗi chỗ trống cần gì."
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s08",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "14:02 · câu 3 trôi qua",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Băng chạy rồi mới đọc câu hỏi",
          "why": "Vừa đọc vừa nghe là khó nhất: lỡ liền câu 3 và câu 4.",
          "rule": "Đọc trước để biết mình chờ nghe gì"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Reading and listening at once... wait, what was question three?",
          "sub": "Vừa đọc vừa nghe… ơ, câu 3 hỏi gì nhỉ?",
          "face": "worried",
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
          "say": "Reading while listening is the hardest juggling act. Questions three and four just flew away.",
          "sub": "Vừa đọc vừa nghe là trò tung hứng khó nhất. Câu 3, câu 4 vừa bay mất.",
          "keys": [
            "Câu 3, câu 4 vừa bay mất"
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
          "say": "Intro time is reading time. All ten questions, key words underlined.",
          "sub": "Phần giới thiệu là giờ đọc. Đủ mười câu, gạch xong từ khoá.",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Now she knows exactly what she's waiting to hear.",
          "sub": "Giờ Thảo biết chính xác mình đang chờ nghe gì.",
          "phase": "redo",
          "keys": [
            "chờ nghe gì"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p3,p11,p12"
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
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 460,
            "w": 44,
            "h": 44,
            "at": "l1:type",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 442,
            "size": 56,
            "at": "l1:type+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Ghi gì: chữ cái, ô, hay từ?",
            "x": 6029,
            "y": 452,
            "size": 40,
            "at": "l1:type+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 532,
            "w": 44,
            "h": 44,
            "at": "l2:underline",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 514,
            "size": 56,
            "at": "l2:underline+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Gạch từ khoá",
            "x": 6029,
            "y": 524,
            "size": 40,
            "at": "l2:underline+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 604,
            "w": 44,
            "h": 44,
            "at": "l2:guess",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 586,
            "size": 56,
            "at": "l2:guess+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Đoán: tên, ngày, số, nơi chốn",
            "x": 6029,
            "y": 596,
            "size": 40,
            "at": "l2:guess+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 676,
            "w": 44,
            "h": 44,
            "at": "l3:synonyms",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 658,
            "size": 56,
            "at": "l3:synonyms+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Nghĩ sẵn từ đồng nghĩa",
            "x": 6029,
            "y": 668,
            "size": 40,
            "at": "l3:synonyms+200"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Đọc trước = biết chờ gì",
            "x": 6804,
            "y": 695,
            "size": 46,
            "at": "l4:menu",
            "color": "accent",
            "hl": [
              {
                "text": "biết chờ gì",
                "at": "l4:menu"
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
          "say": "IDP's recipe for reading ahead. One: check the answer type. A letter, a box option, or words?",
          "sub": "Công thức đọc trước của IDP. Một: xem phải ghi gì, chữ cái, lựa chọn trong khung, hay từ?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two: underline key words. Three: guess the gap. A name, date, number, place, noun or adjective?",
          "sub": "Hai: gạch từ khoá. Ba: đoán chỗ trống cần tên, ngày, số, nơi chốn, danh từ hay tính từ?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Four: think of synonyms. Speakers rarely use the printed words.",
          "sub": "Bốn: nghĩ sẵn từ đồng nghĩa. Người nói hiếm khi dùng đúng chữ in trong đề.",
          "keys": [
            "từ đồng nghĩa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Like reading the menu before the waiter arrives.",
          "sub": "Như xem thực đơn trước khi người phục vụ tới.",
          "keys": [
            "xem thực đơn"
          ]
        }
      ],
      "ref": "p10,p12"
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
            "text": "③ 14:05 · Lỡ một câu",
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
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "headphone"
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
            "at": "l1:hesitates",
            "caption": "14:05 · câu 6",
            "icon": "headphone"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Câu hỏi = thứ tự băng",
            "x": 7932,
            "y": 170,
            "size": 52,
            "at": "l3:order",
            "color": "accent",
            "hl": [
              {
                "text": "thứ tự băng",
                "at": "l3:recording"
              }
            ]
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "11 → 12 → 13",
            "x": 7932,
            "y": 260,
            "size": 64,
            "at": "l4:eleven"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "như số ghế trên toa",
            "x": 7972,
            "y": 360,
            "size": 44,
            "at": "l4:seats",
            "color": "muted"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "Lỡ → đoán tạm → câu kế",
            "x": 7932,
            "y": 450,
            "size": 50,
            "at": "l5:Guess",
            "color": "coral",
            "hl": [
              {
                "text": "câu kế",
                "at": "l5:next"
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
          "say": "Stop three, five past two. Thảo hesitates on question six.",
          "sub": "Chặng ba, 14 giờ 5. Thảo phân vân ở câu 6."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Was it fifteen or fifty? Let me think...",
          "sub": "Mười lăm hay năm mươi nhỉ? Để nghĩ đã…",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Here is the lifebuoy. Questions follow the order of the recording.",
          "sub": "Phao cứu sinh đây: câu hỏi đi theo đúng thứ tự băng.",
          "keys": [
            "thứ tự băng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Eleven comes before twelve, twelve before thirteen. Like numbered seats on a train.",
          "sub": "Câu 11 trước câu 12, câu 12 trước câu 13. Như số ghế trên toa tàu."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Missed one? The train has passed that seat. Guess, and jump to the next.",
          "sub": "Lỡ một câu? Tàu đã qua ghế đó. Đoán tạm, nhảy sang câu kế.",
          "keys": [
            "nhảy sang câu kế"
          ]
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
            "at": "l3",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-5",
            "t": "text",
            "text": "Hết đoạn băng:",
            "x": 7932,
            "y": 545,
            "size": 50,
            "at": "l1:ends"
          },
          {
            "id": "e-6",
            "t": "text",
            "text": "soát câu vừa ghi + đọc trước",
            "x": 7972,
            "y": 620,
            "size": 44,
            "at": "l2:read ahead",
            "hl": [
              {
                "text": "đọc trước",
                "at": "l2:read ahead"
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
          "say": "And when a section ends, don't sit mourning. Check what you just wrote.",
          "sub": "Khi hết một đoạn băng, đừng ngồi tiếc. Soát lại đáp án vừa ghi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then read ahead for the next part. It's about to start.",
          "sub": "Rồi đọc trước phần sau, vì phần mới sắp bắt đầu.",
          "keys": [
            "đọc trước phần sau"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Question six, goodbye. Question seven, here I come.",
          "sub": "Câu 6, tạm biệt. Câu 7, mình đây.",
          "face": "happy"
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "Đề có sáu dạng câu, đọc trước sao kịp?",
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
          "say": "Six task types in one test. How do you read ahead for all of them?",
          "sub": "Đề có sáu dạng câu, đọc trước sao cho kịp?",
          "keys": [
            "sáu dạng câu"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p8"
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
            "text": "④ 14:10 · Sáu dạng câu",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four",
            "hl": [
              {
                "text": "Sáu dạng",
                "at": "l2:six"
              }
            ]
          },
          {
            "id": "f-g0",
            "t": "text",
            "text": "1. Trắc nghiệm",
            "x": 60,
            "y": 1260,
            "size": 44,
            "at": "l2:multiple"
          },
          {
            "id": "f-g1",
            "t": "text",
            "text": "2. Nối thông tin",
            "x": 60,
            "y": 1338,
            "size": 44,
            "at": "l2:matching"
          },
          {
            "id": "f-g2",
            "t": "text",
            "text": "3. Bản đồ, sơ đồ",
            "x": 60,
            "y": 1416,
            "size": 44,
            "at": "l2:maps"
          },
          {
            "id": "f-g3",
            "t": "text",
            "text": "4. Điền form, ghi chú, bảng",
            "x": 60,
            "y": 1494,
            "size": 44,
            "at": "l3:form"
          },
          {
            "id": "f-g4",
            "t": "text",
            "text": "5. Hoàn thành câu",
            "x": 60,
            "y": 1572,
            "size": 44,
            "at": "l3:sentence"
          },
          {
            "id": "f-g5",
            "t": "text",
            "text": "6. Trả lời ngắn",
            "x": 60,
            "y": 1650,
            "size": 44,
            "at": "l3:short"
          },
          {
            "id": "f-nf",
            "t": "text",
            "text": "Số câu mỗi dạng: không cố định",
            "x": 60,
            "y": 1750,
            "size": 44,
            "at": "l4:fixed",
            "color": "coral",
            "hl": [
              {
                "text": "không cố định",
                "at": "l4:fixed"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: IELTS.org — IELTS Academic format: Listening",
            "x": 960,
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
          "say": "Stop four, ten past two. Part two brings a new task type.",
          "sub": "Chặng bốn, 14 giờ 10. Phần 2 mang tới một dạng câu mới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "IELTS dot org lists six: multiple choice, matching, maps and plans,",
          "sub": "IELTS.org liệt kê sáu dạng: trắc nghiệm, nối thông tin, bản đồ, sơ đồ,",
          "keys": [
            "sáu dạng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "form and note completion, sentence completion, and short answers.",
          "sub": "điền form, ghi chú, hoàn thành câu, và trả lời ngắn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The mix isn't fixed. One test is full of gaps, another full of choices.",
          "sub": "Số câu mỗi dạng không cố định: đề này nhiều điền từ, đề kia nhiều trắc nghiệm.",
          "keys": [
            "không cố định"
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
            "id": "f-bag",
            "t": "text",
            "text": "Chuỗi này: ba túi",
            "x": 960,
            "y": 1250,
            "size": 56,
            "at": "l1:bags",
            "color": "accent",
            "hl": [
              {
                "text": "ba túi",
                "at": "l1:three bags"
              }
            ]
          },
          {
            "id": "f-b1",
            "t": "text",
            "text": "Điền từ → Bài 1",
            "x": 960,
            "y": 1340,
            "size": 48,
            "at": "l2:Gap"
          },
          {
            "id": "f-b1s",
            "t": "text",
            "text": "tên, số, chính tả",
            "x": 1000,
            "y": 1405,
            "size": 38,
            "at": "l2:spelling",
            "color": "muted"
          },
          {
            "id": "f-b2",
            "t": "text",
            "text": "Trắc nghiệm → Bài 2",
            "x": 960,
            "y": 1470,
            "size": 48,
            "at": "l3:Multiple"
          },
          {
            "id": "f-b2s",
            "t": "text",
            "text": "nghe thấy mà sai",
            "x": 1000,
            "y": 1535,
            "size": 38,
            "at": "l3:wrong",
            "color": "muted"
          },
          {
            "id": "f-b3",
            "t": "text",
            "text": "Bản đồ, nối → Bài 3",
            "x": 960,
            "y": 1600,
            "size": 48,
            "at": "l4:Maps"
          },
          {
            "id": "f-b4",
            "t": "text",
            "text": "Bài 4: Phần 4, tới câu 40",
            "x": 960,
            "y": 1680,
            "size": 48,
            "at": "l4:forty",
            "hl": [
              {
                "text": "câu 40",
                "at": "l4:forty"
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
          "say": "This series packs them into three bags.",
          "sub": "Chuỗi này gom chúng vào ba túi.",
          "keys": [
            "ba túi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Gap filling: the next lesson. Names, numbers, spelling.",
          "sub": "Túi điền từ: bài tiếp theo. Tên, số, chính tả."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Multiple choice: the lesson after. Options you hear, but that are wrong.",
          "sub": "Túi trắc nghiệm: bài sau đó. Phương án nghe thấy mà sai."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Maps and matching: lesson three. Lesson four follows the Part four lecture, all the way to question forty.",
          "sub": "Túi bản đồ, nối thông tin: bài ba. Bài bốn theo bài giảng Phần 4 đến tận câu 40."
        }
      ],
      "ref": "p9,p18"
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
            "at": "l3",
            "fit": "G",
            "ms": 700
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
            "at": "l5",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 14:30 · Thi trên máy",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "center"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3"
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
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                },
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
            "at": "l1:ends",
            "caption": "14:30 · băng vừa hết",
            "icon": "stopwatch"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Tai nghe chống ồn: điểm thi phát",
            "x": 2028,
            "y": 1260,
            "size": 42,
            "at": "l5:headphones",
            "hl": [
              {
                "text": "điểm thi phát",
                "at": "l5:centre"
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
          "say": "Stop five, two thirty. The tape ends. Sam checks her watch.",
          "sub": "Chặng năm, 14 giờ 30. Băng hết. Sam nhìn đồng hồ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Three minutes to check. Just like the computer test.",
          "sub": "Ba phút soát lại. Y như thi trên máy.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Next to Thảo sits Dũng, her cousin. Quick fingers, even quicker mistakes.",
          "sub": "Ngồi cạnh Thảo là Dũng, em họ. Tay nhanh, sai còn nhanh hơn.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "On the real day, do I bring my own headphones?",
          "sub": "Hôm thi thật, em có phải tự mang tai nghe không?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "In Vietnam, IELTS is on computer now. IDP Vietnam says the centre gives noise-cancelling headphones.",
          "sub": "Ở Việt Nam, IELTS nay thi trên máy. Theo IDP Việt Nam, điểm thi phát tai nghe chống ồn."
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p14"
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
            "id": "g-2",
            "t": "text",
            "text": "Gõ đáp án vào ô",
            "x": 2028,
            "y": 1350,
            "size": 48,
            "at": "l1:type"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "3 phút soát ở cuối",
            "x": 2028,
            "y": 1435,
            "size": 56,
            "at": "l1:three minutes",
            "color": "accent",
            "hl": [
              {
                "text": "3 phút",
                "at": "l1:three minutes"
              }
            ]
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Giấy nháp + bút chì",
            "x": 2028,
            "y": 1535,
            "size": 48,
            "at": "l2:pencil"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "Lần đầu thi máy? Có bài riêng",
            "x": 2028,
            "y": 1630,
            "size": 40,
            "at": "l3:First",
            "color": "muted"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: IDP Việt Nam — IELTS trên máy tính",
            "x": 2868,
            "y": 1790,
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
          "say": "You type answers straight into boxes on screen, with three minutes at the end to check.",
          "sub": "Bạn gõ đáp án thẳng vào ô trên màn hình, cuối phần có ba phút soát lại.",
          "keys": [
            "ba phút soát lại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Scrap paper and a pencil too, for notes.",
          "sub": "Có cả giấy nháp và bút chì để ghi chú."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "First time on a computer test? Another series has a lesson just for that.",
          "sub": "Lần đầu thi trên máy? Chuỗi dành cho người thi lần đầu có bài riêng về giao diện."
        }
      ],
      "ref": "p14"
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
            "at": "l4",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 14:31 · Hai lỗi mất oan",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six",
            "hl": [
              {
                "text": "mất oan",
                "at": "l4:strict"
              }
            ]
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
                  "id": "sam",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "face": "surprised"
                }
              ],
              "props": [
                "laptop"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "at": "l1:peeks",
            "caption": "14:31 · màn hình của Dũng",
            "icon": "laptop"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Quá số từ → sai",
            "x": 3996,
            "y": 1260,
            "size": 56,
            "at": "l4:over",
            "color": "coral",
            "hl": [
              {
                "text": "sai",
                "at": "l4:wrong"
              }
            ]
          },
          {
            "id": "h-1b",
            "t": "text",
            "text": "dù ý đúng",
            "x": 4036,
            "y": 1345,
            "size": 46,
            "at": "l4:right idea",
            "color": "muted"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Sai chính tả → sai",
            "x": 3996,
            "y": 1430,
            "size": 56,
            "at": "l5:spelling",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six. During checking, Sam peeks at Dũng's screen.",
          "sub": "Chặng sáu. Lúc soát, Sam liếc màn hình của Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "The limit is two words and a number. You wrote three words.",
          "sub": "Đề cho tối đa hai từ và một số. Em viết ba từ.",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "But the meaning is right!",
          "sub": "Nhưng ý đúng mà cô!",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "IDP is strict: over the limit, the answer is wrong, even with the right idea.",
          "sub": "IDP ghi rõ: viết quá số từ là sai, dù ý đúng.",
          "keys": [
            "quá số từ là sai"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Same for spelling. One wrong letter, zero marks.",
          "sub": "Chính tả cũng vậy. Sai một chữ cái, mất trọn điểm.",
          "keys": [
            "Sai một chữ cái"
          ]
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s18",
      "module": "BRK-04",
      "data": {
        "title": "Thế nào mới được điểm?",
        "wrong": "Ý đúng là được điểm",
        "right": "Đúng ý, đúng chính tả, trong giới hạn từ",
        "wrongIllus": "red-question-mark",
        "rightIllus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Right idea, so it counts?",
          "sub": "Ý đúng là được điểm?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Right idea, right spelling, within the limit. All three.",
          "sub": "Đúng ý, đúng chính tả, trong giới hạn từ. Đủ cả ba.",
          "keys": [
            "Đủ cả ba"
          ]
        }
      ],
      "ref": "p17"
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
            "id": "h-3",
            "t": "text",
            "text": "check-in = 1 từ",
            "x": 3996,
            "y": 1540,
            "size": 52,
            "at": "l1:check-in",
            "color": "accent",
            "hl": [
              {
                "text": "1 từ",
                "at": "l1:one"
              }
            ]
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "they're: không kiểm tra",
            "x": 3996,
            "y": 1625,
            "size": 46,
            "at": "l2:Contractions"
          },
          {
            "id": "h-5",
            "t": "text",
            "text": "Số viết bằng chữ: được",
            "x": 3996,
            "y": 1705,
            "size": 46,
            "at": "l3:numbers"
          },
          {
            "id": "h-5b",
            "t": "text",
            "text": "… nếu đúng chính tả",
            "x": 4036,
            "y": 1775,
            "size": 40,
            "at": "l3:spelled",
            "color": "muted"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: IELTS.org; IDP — sai chính tả, quá số từ bị tính sai",
            "x": 4836,
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
          "say": "Two pieces of good news from IELTS dot org. A hyphenated word like check-in counts as one.",
          "sub": "Hai tin vui từ IELTS.org. Từ có gạch nối như check-in tính là một từ.",
          "keys": [
            "một từ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Contractions like they're are not tested.",
          "sub": "Dạng viết tắt như they're không được đưa vào để kiểm tra."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And IDP accepts numbers written in words, if they're spelled correctly.",
          "sub": "Và IDP chấp nhận viết số bằng chữ, miễn là đúng chính tả."
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
            "text": "⑦ 15:00 · Chấm, dán nhãn",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "lan",
                  "side": "right"
                }
              ],
              "props": [
                "memo",
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
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Marking",
            "caption": "15:00 · chấm bài",
            "icon": "memo"
          },
          {
            "id": "i-b0",
            "t": "box",
            "x": 5964,
            "y": 1260,
            "w": 360,
            "h": 90,
            "at": "l4:Every",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "i-b1",
            "t": "box",
            "x": 6364,
            "y": 1260,
            "w": 360,
            "h": 90,
            "at": "l4:Every",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "i-b2",
            "t": "box",
            "x": 5964,
            "y": 1380,
            "w": 360,
            "h": 90,
            "at": "l4:Every",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "i-b3",
            "t": "box",
            "x": 6364,
            "y": 1380,
            "w": 360,
            "h": 90,
            "at": "l4:Every",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "i-g0",
            "t": "text",
            "text": "Chính tả",
            "x": 5994,
            "y": 1275,
            "size": 46,
            "at": "l4:Every"
          },
          {
            "id": "i-g1",
            "t": "text",
            "text": "Quá số từ",
            "x": 6394,
            "y": 1275,
            "size": 46,
            "at": "l4:Every"
          },
          {
            "id": "i-g2",
            "t": "text",
            "text": "Dính bẫy",
            "x": 5994,
            "y": 1395,
            "size": 46,
            "at": "l4:Every"
          },
          {
            "id": "i-g3",
            "t": "text",
            "text": "Lỡ nhịp",
            "x": 6394,
            "y": 1395,
            "size": 46,
            "at": "l4:Every"
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Mỗi tuần: 1 đề trọn 30 phút",
            "x": 5964,
            "y": 1540,
            "size": 46,
            "at": "l5:week",
            "color": "accent",
            "hl": [
              {
                "text": "trọn 30 phút",
                "at": "l5:thirty"
              }
            ]
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "không dừng băng",
            "x": 6004,
            "y": 1615,
            "size": 46,
            "at": "l5:pausing"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven, three p.m. Marking time. But Thảo doesn't just count her score.",
          "sub": "Chặng bảy, 15 giờ. Chấm bài. Nhưng Thảo không chỉ đếm điểm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Each wrong answer gets a label. Spelling, word limit, trap, or lost the beat.",
          "sub": "Câu sai nào cũng dán nhãn: chính tả, quá số từ, dính bẫy, hay lỡ nhịp.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "After a few weeks, you'll see where your marks leak.",
          "sub": "Vài tuần là thấy điểm rò ở đâu.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Every label points to the lesson to review first.",
          "sub": "Mỗi nhãn chỉ ra nên ôn bài nào của chuỗi trước.",
          "keys": [
            "ôn bài nào"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And every week, at least one full thirty-minute test, no pausing the tape.",
          "sub": "Và mỗi tuần, ít nhất một đề trọn 30 phút, không dừng băng.",
          "keys": [
            "không dừng băng"
          ]
        }
      ],
      "ref": "p19"
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
            "at": "l1:Next Saturday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "headphone",
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
            "at": "l1:café",
            "caption": "Thứ Bảy sau 14:00 · cùng bàn ấy",
            "icon": "headphone"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Lời nói gió bay”",
            "x": 7932,
            "y": 1260,
            "size": 60,
            "at": "l4:wind",
            "color": "accent",
            "hl": [
              {
                "text": "gió bay",
                "at": "l4:wind"
              }
            ]
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "… đáp án đã nằm trên giấy",
            "x": 7972,
            "y": 1360,
            "size": 44,
            "at": "l4:paper",
            "hl": [
              {
                "text": "trên giấy",
                "at": "l4:paper"
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
          "say": "Next Saturday, two p.m. Same café, same headphones, same Thảo.",
          "sub": "Thứ Bảy tuần sau, 14 giờ. Vẫn quán ấy, tai nghe ấy, Thảo ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Intro time: ten questions read. Margin notes: number, money, name.",
          "sub": "Phần giới thiệu: đọc xong mười câu. Bên lề: số, tiền, tên.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Missed question six, guessed, moved on. And question seven... I heard it!",
          "sub": "Lỡ câu 6, đoán tạm, đi tiếp. Còn câu 7… Nghe ra rồi!",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Spoken words fly away with the wind. But this time, the answers are already on paper.",
          "sub": "“Lời nói gió bay.” Nhưng lần này, đáp án đã kịp nằm trên giấy.",
          "keys": [
            "đã kịp nằm trên giấy"
          ]
        }
      ],
      "ref": "p12,p7"
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
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "E",
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
            "id": "j-s1",
            "t": "text",
            "text": "Tóm lại: chuẩn bị trước băng",
            "x": 7932,
            "y": 1490,
            "size": 50,
            "at": "l1:So",
            "color": "accent",
            "hl": [
              {
                "text": "chuẩn bị trước băng",
                "at": "l1:once"
              }
            ]
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Bài tiếp: điền form, ghi chú",
            "x": 7932,
            "y": 1590,
            "size": 46,
            "at": "l5:Next"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 6664,
            "y": 460,
            "at": "l2:Read"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 4696,
            "y": 1260,
            "at": "l3:spelling"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 8632,
            "y": 450,
            "at": "l4:Missed"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi học; cấu trúc đề, quy định thi có thể đổi — kiểm lại trang chính thức IELTS. Nhân vật là minh hoạ.",
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
          "say": "So: four parts, forty questions, played once, in the order of the questions.",
          "sub": "Tóm lại: bốn phần, 40 câu, nghe một lần, câu hỏi theo thứ tự băng.",
          "keys": [
            "nghe một lần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Read ahead, and guess the type of answer.",
          "sub": "Đọc trước, đoán loại thông tin.",
          "keys": [
            "Đọc trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Right spelling, within the word limit.",
          "sub": "Đúng chính tả, trong giới hạn từ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Missed one? Let it go, and catch the next.",
          "sub": "Lỡ câu nào, buông, bám câu sau.",
          "keys": [
            "bám câu sau"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next up: forms and notes. Names, numbers and spelling.",
          "sub": "Bài tiếp: điền form, ghi chú. Nghe tên, số, chính tả.",
          "keys": [
            "điền form, ghi chú"
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
        "q": "The limit is two words and a number, you write three words, what happens?",
        "options": [
          "The answer is marked incorrect, even if the content is right",
          "The examiner removes the extra word and gives you the mark",
          "You get the mark only if the third word is spelled correctly"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "memo",
        "why": "Vượt giới hạn từ làm câu bị tính sai. Phải đọc kỹ giới hạn của từng câu."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The limit is two words and a number, you write three words, what happens?",
          "sub": "Giới hạn là hai từ và một số, bạn viết ba từ, chuyện gì xảy ra?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The answer is marked incorrect, even if the content is right.",
          "sub": "Quá số từ thì câu đó bị tính sai, dù nội dung đúng."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Right idea is not enough. Stay within the limit.",
          "sub": "Ý đúng chưa đủ. Phải nằm trong giới hạn từ."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[32]"
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
          "say": "Read ahead, write tight, move on. Now try the forty questions below.",
          "sub": "Đọc trước, viết gọn, đi tiếp. Giờ thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT BUỔI THI THỬ NGHE chiều thứ Bảy ở quán nhóm (13:55 → 14:00 bốn phần → 14:01 phần giới thiệu + “Khoan đã!” → 14:05 lỡ câu 6 → 14:10 sáu dạng → 14:30 thi trên máy → 14:31 hai lỗi oan → 15:00 chấm, dán nhãn → thứ Bảy sau 14:00 khép vòng). Hook HOOK-21: “Băng phát mấy lần? 1 hay 2?” (IELTS.org, IDP: một lần). Nhân vật: Thảo (vai Lan trong bài), Lan (vai Huy), Sam (phát băng, chấm), Dũng (quá số từ; câu hỏi tai nghe) — w145/_series/ielts-listening-takers.md. Cảnh ngắt nhịp: BRK-08 (buổi thi thử), BRK-07 (rehook sáu dạng), BRK-04 (ý đúng ≠ được điểm). Ca dao: “Lời nói gió bay”. Câu đố questions[32].",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
