// ielts-task2-question-types--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "ielts-task2-question-types--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "ielts-writing-task2-takers",
    "slug": "ielts-task2-question-types",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Các dạng đề Task 2 (agree/disagree, discuss, problem–solution…) khác nhau thế nào?",
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
            "x": 860,
            "y": 110,
            "w": 780,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "memo",
                "stopwatch"
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
            "at": "l1",
            "caption": "Thứ Bảy 14:00 · quán nhóm",
            "icon": "memo"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Nửa đồng ý, nửa không",
            "x": 60,
            "y": 120,
            "size": 60,
            "at": "l2:Half",
            "color": "accent"
          },
          {
            "id": "a-b1",
            "t": "box",
            "x": 60,
            "y": 260,
            "w": 360,
            "h": 130,
            "at": "l3:Safe",
            "stroke": 5
          },
          {
            "id": "a-o1",
            "t": "text",
            "text": "An toàn?",
            "x": 110,
            "y": 285,
            "size": 60,
            "at": "l3:Safe+200"
          },
          {
            "id": "a-b2",
            "t": "box",
            "x": 460,
            "y": 260,
            "w": 360,
            "h": 130,
            "at": "l3:lose",
            "stroke": 5
          },
          {
            "id": "a-o2",
            "t": "text",
            "text": "Mất điểm?",
            "x": 500,
            "y": 285,
            "size": 60,
            "at": "l3:lose+200"
          },
          {
            "id": "a-g",
            "t": "text",
            "text": "Bạn đoán xem…",
            "x": 60,
            "y": 450,
            "size": 52,
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
          "say": "Meet Thảo, twenty-seven, an office worker taking IELTS Academic. She has a favourite trick for opinion essays.",
          "sub": "Đây là Thảo, hai mươi bảy tuổi, nhân viên văn phòng, thi IELTS Academic. Cô có một mẹo ruột cho bài nêu ý kiến.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Half agree, half disagree. Then the examiner can't argue with me!",
          "sub": "Nửa đồng ý, nửa không. Thế thì giám khảo hết đường bắt bẻ!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So, is that safe? Or does it lose marks?",
          "sub": "Vậy mẹo ấy an toàn, hay làm mất điểm?",
          "keys": [
            "an toàn, hay làm mất điểm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Take a guess.",
          "sub": "Bạn đoán thử xem."
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
        "after": 1500
      },
      "ref": "p7"
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
            "id": "a-x1",
            "t": "strike",
            "over": "a-o1",
            "at": "l1:loses"
          },
          {
            "id": "a-r2",
            "t": "ring",
            "over": "a-o2",
            "at": "l1:loses+300"
          },
          {
            "id": "a-ok",
            "t": "text",
            "text": "Phía nào cũng được — miễn rõ",
            "x": 60,
            "y": 540,
            "size": 48,
            "at": "l2:Any side",
            "color": "accent",
            "hl": [
              {
                "text": "miễn rõ",
                "at": "l2:clear"
              }
            ]
          },
          {
            "id": "a-ko",
            "t": "text",
            "text": "Lưng chừng mới mất điểm",
            "x": 60,
            "y": 625,
            "size": 48,
            "at": "l3:middle",
            "color": "coral",
            "hl": [
              {
                "text": "Lưng chừng",
                "at": "l3:middle"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: IELTS Writing Task 2 Band Descriptors (5/2023)",
            "x": 60,
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
          "say": "It loses marks.",
          "sub": "Mất điểm.",
          "keys": [
            "Mất điểm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Any side is accepted, as long as it's clear and has reasons.",
          "sub": "Quan điểm nào cũng được chấp nhận, miễn là rõ và có lý do.",
          "keys": [
            "miễn là rõ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "What costs marks is the vague middle. Band six: the conclusion may be unclear.",
          "sub": "Cái mất điểm là quan điểm lưng chừng. Band sáu: kết luận có thể chưa rõ.",
          "keys": [
            "lưng chừng"
          ]
        }
      ],
      "ref": "p7,p8"
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
            "text": "Đề này giao việc gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:job",
            "hl": [
              {
                "text": "việc gì",
                "at": "l1:job"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: chủ đề quen là viết",
            "x": 2028,
            "y": 180,
            "size": 50,
            "at": "l2:familiar",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:five+300"
          },
          {
            "id": "b-r",
            "t": "text",
            "text": "→ Task Response: band 5",
            "x": 2088,
            "y": 260,
            "size": 46,
            "at": "l2:five",
            "color": "coral"
          },
          {
            "id": "b-y1",
            "t": "text",
            "text": "Mà là: nhận ra việc đề giao",
            "x": 2028,
            "y": 350,
            "size": 54,
            "at": "l3:spot",
            "color": "accent",
            "hl": [
              {
                "text": "việc đề giao",
                "at": "l3:job"
              }
            ]
          },
          {
            "id": "b-y2",
            "t": "text",
            "text": "đếm đủ số câu hỏi",
            "x": 2088,
            "y": 435,
            "size": 50,
            "at": "l3:count",
            "hl": [
              {
                "text": "đếm đủ",
                "at": "l3:count"
              }
            ]
          },
          {
            "id": "b-ca",
            "t": "text",
            "text": "“Hỏi gà đáp vịt”",
            "x": 2028,
            "y": 560,
            "size": 60,
            "at": "l4:duck",
            "color": "accent",
            "hl": [
              {
                "text": "đáp vịt",
                "at": "l4:duck"
              }
            ]
          },
          {
            "id": "b-i",
            "t": "illus",
            "name": "red-question-mark",
            "x": 3218,
            "y": 220,
            "size": 300,
            "at": "l1:job"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today's real question: what job does each Task 2 prompt give you?",
          "sub": "Câu hỏi hôm nay: mỗi đề Task 2 giao cho bạn việc gì?",
          "keys": [
            "giao cho bạn việc gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not: see a familiar topic and write all about it. That gets Task Response band five.",
          "sub": "Không phải thấy chủ đề quen là viết một mạch. Kiểu đó Task Response chỉ band năm.",
          "keys": [
            "band năm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But: spot the job, and count how many questions the prompt asks. Miss one, and you answer half.",
          "sub": "Mà là nhận ra việc đề giao, và đếm đủ số câu hỏi. Sót một câu là trả lời một nửa.",
          "keys": [
            "đếm đủ số câu hỏi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Otherwise it's our old saying: asked about the chicken, answering about the duck.",
          "sub": "Không thì thành “Hỏi gà đáp vịt”.",
          "keys": [
            "Hỏi gà đáp vịt"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Chiều thứ Bảy ở quán nhóm",
        "points": [
          {
            "label": "14:00",
            "sub": "Bốn việc",
            "illus": "memo"
          },
          {
            "label": "14:30",
            "sub": "Tới mức nào?",
            "illus": "balance-scale"
          },
          {
            "label": "15:00",
            "sub": "Hai quan điểm",
            "illus": "busts-in-silhouette"
          },
          {
            "label": "16:00",
            "sub": "Hai câu hỏi",
            "illus": "red-question-mark"
          },
          {
            "label": "16:30",
            "sub": "Một phút",
            "illus": "stopwatch"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One Saturday afternoon, five practice prompts.",
          "sub": "Một chiều thứ Bảy, năm đề luyện.",
          "keys": [
            "năm đề luyện"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Pencils ready.",
          "sub": "Bút chì sẵn sàng."
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
            "text": "① 14:00 · Bốn việc",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "memo",
                "pencil"
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
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Lan",
            "caption": "14:00 · năm đề luyện của Lan",
            "icon": "memo"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Nêu ý kiến · agree/disagree",
            "x": 3996,
            "y": 170,
            "size": 40,
            "at": "l4:agree"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Hai quan điểm · discuss",
            "x": 3996,
            "y": 235,
            "size": 40,
            "at": "l4:discuss"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Ưu nhược · advantages",
            "x": 3996,
            "y": 300,
            "size": 40,
            "at": "l4:advantages"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Vấn đề – giải pháp",
            "x": 3996,
            "y": 365,
            "size": 40,
            "at": "l4:problem"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, two p.m. Meet Lan, twenty, from the weekend study group. She brings five practice prompts.",
          "sub": "Chặng một, hai giờ chiều. Đây là Lan, hai mươi tuổi, bạn nhóm tự học cuối tuần. Lan mang năm đề luyện.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And Dũng, Thảo's cousin, a biology student, always the first to start writing.",
          "sub": "Và Dũng, em họ Thảo, sinh viên sinh học, lúc nào cũng viết trước tiên.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Easy. My intro copies the prompt, then adds: I agree. Done!",
          "sub": "Dễ ợt. Mở bài em chép đề, thêm câu “I agree”. Xong!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Learners name four jobs: agree or disagree, discuss both views, advantages and disadvantages, problem and solution.",
          "sub": "Người học gọi tắt bốn dạng: nêu ý kiến, bàn hai quan điểm, ưu nhược điểm, vấn đề và giải pháp.",
          "keys": [
            "bốn dạng"
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
      "ref": "p2"
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
          }
        ],
        "items": [
          {
            "id": "c-n",
            "t": "text",
            "text": "Tên để nhớ; câu lệnh quyết định",
            "x": 3996,
            "y": 440,
            "size": 38,
            "at": "l2:instruction",
            "color": "accent",
            "hl": [
              {
                "text": "câu lệnh",
                "at": "l2:instruction"
              }
            ]
          },
          {
            "id": "c-cp",
            "t": "text",
            "text": "Chữ chép từ đề: không tính",
            "x": 3996,
            "y": 520,
            "size": 46,
            "at": "l3:copied",
            "color": "coral",
            "hl": [
              {
                "text": "không tính",
                "at": "l3:counted"
              }
            ]
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Viết lại đề bằng lời mình",
            "x": 3996,
            "y": 620,
            "size": 50,
            "at": "l5:own",
            "color": "accent",
            "hl": [
              {
                "text": "lời mình",
                "at": "l5:own"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: British Council — IELTS Writing; Band Descriptors",
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
          "say": "The British Council puts it this way: give an opinion, compare views, discuss advantages, or suggest solutions. Always with examples.",
          "sub": "British Council ghi: nêu ý kiến, so sánh quan điểm, bàn ưu nhược điểm, hoặc đề xuất giải pháp. Việc nào cũng cần ví dụ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The names just help memory. The instruction at the end decides the job.",
          "sub": "Tên gọi chỉ để nhớ. Câu lệnh cuối đề mới quyết định việc phải làm.",
          "keys": [
            "Câu lệnh cuối đề"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And Dũng, the band descriptors say words copied from the prompt are not counted.",
          "sub": "Còn Dũng này, bản mô tả band ghi phần chữ chép từ đề không được tính.",
          "keys": [
            "không được tính"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Not counted? So my intro says… nothing?",
          "sub": "Không tính? Vậy mở bài của em… chẳng nói gì à?",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: copying isn't counted. Rewrite the prompt in your own words, then answer straight away.",
          "sub": "Rút ra: chép đề không được tính. Viết lại đề bằng lời mình, rồi đi thẳng vào câu trả lời.",
          "keys": [
            "lời mình"
          ]
        }
      ],
      "ref": "p1,p2,p3,p4"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 14:30 · Đồng ý tới đâu?",
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
                "memo",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:Stop two",
            "caption": "14:30 · đề luyện số 1",
            "icon": "memo"
          },
          {
            "id": "d-p",
            "t": "text",
            "text": "Chỉ học môn có ích cho nghề?",
            "x": 5964,
            "y": 170,
            "size": 40,
            "at": "l1:university"
          },
          {
            "id": "d-e",
            "t": "text",
            "text": "To what extent…?",
            "x": 5964,
            "y": 250,
            "size": 60,
            "at": "l2:extent",
            "color": "accent",
            "hl": [
              {
                "text": "To what extent",
                "at": "l2:extent"
              }
            ]
          },
          {
            "id": "d-o1",
            "t": "text",
            "text": "hoàn toàn đồng ý",
            "x": 6004,
            "y": 350,
            "size": 42,
            "at": "l2:fully"
          },
          {
            "id": "d-o2",
            "t": "text",
            "text": "hoàn toàn không",
            "x": 6004,
            "y": 410,
            "size": 42,
            "at": "l2:not at all"
          },
          {
            "id": "d-o3",
            "t": "text",
            "text": "một phần — và vì sao",
            "x": 6004,
            "y": 470,
            "size": 42,
            "at": "l2:partly"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, half past two. Practice prompt one: should university students only study subjects useful for their future jobs?",
          "sub": "Chặng hai, hai rưỡi. Đề luyện một: sinh viên có nên chỉ học những môn có ích trực tiếp cho nghề sau này?",
          "keys": [
            "Đề luyện một"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "To what extent do you agree? It asks how far: fully, not at all, or partly, and why.",
          "sub": "“To what extent” hỏi bạn đồng ý tới mức nào: hoàn toàn, hoàn toàn không, hay một phần, và vì sao.",
          "keys": [
            "tới mức nào"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "My usual trick. A bit of both, and nobody can argue.",
          "sub": "Mẹo quen của mình. Mỗi bên một ít, khỏi ai cãi.",
          "face": "thinking"
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s07",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "14:40 · đề luyện số 1",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Nửa đồng ý nửa không cho an toàn",
          "why": "Quan điểm lưng chừng làm kết luận mờ; band 6 ghi kết luận có thể chưa rõ hoặc lặp lại.",
          "rule": "Chọn phía nào cũng được, miễn rõ và giữ đến cuối"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Conclusion: both sides have a point. Neat!",
          "sub": "Kết bài: bên nào cũng có lý. Gọn!",
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
          "say": "Band five says the development isn't always clear. Fence-sitting is the risk.",
          "sub": "Band năm ghi phát triển ý không phải lúc nào cũng rõ. Đứng giữa hàng rào mới là rủi ro.",
          "keys": [
            "Đứng giữa hàng rào"
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
          "say": "Partly agree. One paragraph for the part I agree with, one for the part I don't.",
          "sub": "Đồng ý một phần. Một đoạn cho phần đồng ý, một đoạn cho phần không.",
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
            "id": "d-s1",
            "t": "text",
            "text": "Mở bài: nói lập trường",
            "x": 5964,
            "y": 560,
            "size": 42,
            "at": "l1:introduction"
          },
          {
            "id": "d-s2",
            "t": "text",
            "text": "Thân bài: giữ nguyên · Kết: nhắc lại",
            "x": 5964,
            "y": 615,
            "size": 38,
            "at": "l1:conclusion"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Phía nào cũng được — giữ đến cuối",
            "x": 5964,
            "y": 680,
            "size": 40,
            "at": "l2:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "giữ đến cuối",
                "at": "l2:end"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: IELTS Writing Task 2 Band Descriptors (5/2023)",
            "x": 6804,
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
          "say": "Band seven wants a clear, developed position. State it in the introduction, keep it through the body, repeat it in the conclusion.",
          "sub": "Band bảy đòi quan điểm rõ và được phát triển. Nói lập trường ở mở bài, giữ qua thân bài, nhắc lại ở kết bài.",
          "keys": [
            "quan điểm rõ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: pick any side. Just say it clearly, and keep it to the end.",
          "sub": "Rút ra: chọn phía nào cũng được, miễn là nói rõ và giữ đến cuối.",
          "keys": [
            "giữ đến cuối"
          ]
        }
      ],
      "ref": "p6,p8"
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
            "at": "l5",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 15:00 · Hai quan điểm",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8732,
            "y": 150,
            "w": 780,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "enter": "walk",
                  "at": "l2"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "memo",
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l2:Sam",
            "caption": "15:00 · Sam ghé quán",
            "icon": "hot-beverage"
          },
          {
            "id": "e-p",
            "t": "text",
            "text": "Trẻ đi học sớm hay muộn?",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l1:young"
          },
          {
            "id": "e-c",
            "t": "text",
            "text": "Discuss both views",
            "x": 7932,
            "y": 255,
            "size": 52,
            "at": "l1:Discuss",
            "color": "accent"
          },
          {
            "id": "e-c2",
            "t": "text",
            "text": "+ give your own opinion",
            "x": 7932,
            "y": 330,
            "size": 52,
            "at": "l1:own opinion",
            "color": "accent",
            "hl": [
              {
                "text": "own opinion",
                "at": "l1:own opinion"
              }
            ]
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "= 2 việc",
            "x": 8472,
            "y": 400,
            "size": 60,
            "at": "l1:end",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, three p.m. Should children start school very young, or later? Discuss both views and give your own opinion.",
          "sub": "Chặng ba, ba giờ chiều. Trẻ nên đi học rất sớm hay muộn hơn? Bàn cả hai quan điểm và nêu ý kiến của bạn.",
          "keys": [
            "ý kiến của bạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sam drops by: the group's teacher, a native speaker, red pen in hand.",
          "sub": "Sam ghé quán: cô giáo bản ngữ của nhóm, tay cầm bút đỏ.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Two views, nicely summarised. But where is your opinion?",
          "sub": "Hai quan điểm tóm tắt gọn đấy. Nhưng ý kiến của em đâu?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Oh. I only did the first half of the instruction.",
          "sub": "Ôi. Em mới làm nửa đầu câu lệnh.",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Exactly. This prompt has two jobs, and Thảo did one.",
          "sub": "Đúng vậy. Đề này có hai việc, Thảo mới làm một."
        }
      ],
      "ref": "p9"
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
            "id": "e-b1",
            "t": "box",
            "x": 7932,
            "y": 480,
            "w": 240,
            "h": 110,
            "at": "l1:first",
            "stroke": 5
          },
          {
            "id": "e-b1t",
            "t": "text",
            "text": "Quan điểm 1",
            "x": 7952,
            "y": 500,
            "size": 40,
            "at": "l1:first+200"
          },
          {
            "id": "e-b2",
            "t": "box",
            "x": 8202,
            "y": 480,
            "w": 240,
            "h": 110,
            "at": "l1:second",
            "stroke": 5
          },
          {
            "id": "e-b2t",
            "t": "text",
            "text": "Quan điểm 2",
            "x": 8222,
            "y": 500,
            "size": 40,
            "at": "l1:second+200"
          },
          {
            "id": "e-op",
            "t": "text",
            "text": "Ý mình: mở + kết",
            "x": 7932,
            "y": 600,
            "size": 44,
            "at": "l2:introduction",
            "color": "accent",
            "hl": [
              {
                "text": "Ý mình",
                "at": "l2:opinion"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Chỉ tóm tắt hai phía = nửa đề",
            "x": 7932,
            "y": 670,
            "size": 40,
            "at": "l3:half",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A neat split: one paragraph for the first view, one for the second, each with reasons and an example.",
          "sub": "Cách chia gọn: một đoạn cho quan điểm thứ nhất, một đoạn cho quan điểm thứ hai, mỗi đoạn có lý do và ví dụ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your opinion goes in the introduction, and again in the conclusion.",
          "sub": "Ý kiến của bạn nêu ở mở bài, nhắc lại ở kết bài.",
          "keys": [
            "mở bài"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Summarise both sides without leaning? That's half the instruction.",
          "sub": "Chỉ tóm tắt hai phía mà không nói mình nghiêng về đâu? Mới làm một nửa câu lệnh.",
          "keys": [
            "một nửa câu lệnh"
          ]
        }
      ],
      "ref": "p10"
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
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 15:30 · Cân và chữa",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four"
          },
          {
            "id": "f-p1",
            "t": "text",
            "text": "Làm việc ở nhà: lợi > hại?",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l1:home"
          },
          {
            "id": "f-o",
            "t": "text",
            "text": "outweigh → cân, nói bên nào nặng",
            "x": 60,
            "y": 1340,
            "size": 44,
            "at": "l2:outweigh",
            "color": "accent",
            "hl": [
              {
                "text": "bên nào nặng",
                "at": "l2:heavier"
              }
            ]
          },
          {
            "id": "f-o2",
            "t": "text",
            "text": "“what are…” → nêu hai bên là đủ",
            "x": 60,
            "y": 1420,
            "size": 40,
            "at": "l4:what are",
            "color": "muted"
          },
          {
            "id": "f-i",
            "t": "illus",
            "name": "balance-scale",
            "x": 1300,
            "y": 1260,
            "size": 260,
            "at": "l2:outweigh"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four, half past three. More people work from home. Do the advantages outweigh the disadvantages?",
          "sub": "Chặng bốn, ba rưỡi. Ngày càng nhiều người làm việc ở nhà. Lợi có nhiều hơn hại không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Outweigh means weigh both sides, then say which one is heavier.",
          "sub": "“Outweigh” đòi bạn cân hai bên, rồi nói bên nào nặng hơn.",
          "keys": [
            "bên nào nặng hơn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Just listing pros and cons, with no verdict? You've missed the main part.",
          "sub": "Chỉ liệt kê ưu nhược mà không kết luận là thiếu phần chính của đề.",
          "keys": [
            "thiếu phần chính"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But if it only asks what are the advantages and disadvantages, presenting both is enough.",
          "sub": "Còn nếu đề chỉ hỏi “what are the advantages and disadvantages”, trình bày cả hai là đủ, không bắt buộc phải cân."
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s12",
      "module": "BRK-04",
      "data": {
        "title": "Đề có chữ outweigh",
        "wrong": "Liệt kê ưu, liệt kê nhược, hết bài",
        "right": "Cân hai bên, nói rõ bên nào nặng hơn",
        "wrongIllus": "scroll",
        "rightIllus": "balance-scale"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Pros, cons, the end?",
          "sub": "Ưu, nhược, hết bài?",
          "keys": [
            "hết bài"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Weigh them, and name the heavier side.",
          "sub": "Cân hai bên, nói rõ bên nào nặng hơn.",
          "keys": [
            "bên nào nặng hơn"
          ]
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
            "fit": "F",
            "move": "cut"
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
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 860,
            "y": 1420,
            "w": 620,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "point",
                  "face": "happy"
                }
              ],
              "props": [
                "memo",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
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
            "at": "l1:Lan",
            "caption": "15:45 · Lan gạch đề nhà ở",
            "icon": "pencil"
          },
          {
            "id": "f-h",
            "t": "text",
            "text": "Nhà đầu tiên: causes + solutions",
            "x": 60,
            "y": 1510,
            "size": 40,
            "at": "l1:home"
          },
          {
            "id": "f-s1",
            "t": "text",
            "text": "1 gạch chủ đề · 2 câu lệnh",
            "x": 60,
            "y": 1580,
            "size": 40,
            "at": "l2:underline"
          },
          {
            "id": "f-s2",
            "t": "text",
            "text": "3 nguyên nhân · 4 giải pháp",
            "x": 60,
            "y": 1645,
            "size": 40,
            "at": "l3:causes"
          },
          {
            "id": "f-s3",
            "t": "text",
            "text": "5 đủ hai việc mới viết",
            "x": 60,
            "y": 1710,
            "size": 40,
            "at": "l4:both",
            "color": "accent",
            "hl": [
              {
                "text": "đủ hai việc",
                "at": "l4:both"
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
          "say": "Prompt four: young people can't buy their first home. Causes, and solutions? Lan shows her five steps.",
          "sub": "Đề bốn: người trẻ khó mua căn nhà đầu tiên. Nguyên nhân và giải pháp? Lan làm mẫu năm bước.",
          "keys": [
            "năm bước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Underline the topic: young people, first home, cities. Then the instruction: causes, solutions. Two jobs.",
          "sub": "Gạch chủ đề: người trẻ, nhà đầu tiên, thành phố. Rồi gạch câu lệnh: nguyên nhân, giải pháp. Hai việc.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Draft two causes. For each cause, one matching solution.",
          "sub": "Nháp hai nguyên nhân. Mỗi nguyên nhân, một giải pháp đi cặp."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then check: both jobs covered? Only then start writing.",
          "sub": "Rồi kiểm lại: đủ cả hai việc chưa? Đủ mới bắt đầu viết.",
          "keys": [
            "Đủ mới bắt đầu viết"
          ]
        }
      ],
      "ref": "p12,p13"
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
            "id": "f-k",
            "t": "text",
            "text": "Giải pháp ↔ nguyên nhân",
            "x": 60,
            "y": 1770,
            "size": 44,
            "at": "l2:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "nguyên nhân",
                "at": "l2:cause"
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
          "say": "If the cause is house prices rising faster than income, the solution must touch that. No jumping to another problem.",
          "sub": "Nếu nguyên nhân là giá nhà tăng nhanh hơn thu nhập, giải pháp phải chạm tới chuyện đó, đừng nhảy sang vấn đề khác."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: each solution answers one cause you've named.",
          "sub": "Rút ra: mỗi giải pháp nên trả lời một nguyên nhân đã nêu.",
          "keys": [
            "trả lời một nguyên nhân"
          ]
        }
      ],
      "ref": "p12,p14"
    },
    {
      "id": "s15",
      "module": "BRK-07",
      "data": {
        "question": "Đề kết thúc bằng HAI câu hỏi thì sao?",
        "illus": "red-question-mark"
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
          "say": "What if a prompt ends with two questions?",
          "sub": "Nếu đề kết thúc bằng hai câu hỏi thì sao?",
          "keys": [
            "hai câu hỏi"
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 16:00 · Hai câu hỏi",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "stopwatch",
                "laptop"
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
            "at": "l3",
            "caption": "16:00 · đề video ngắn",
            "icon": "stopwatch"
          },
          {
            "id": "g-p",
            "t": "text",
            "text": "Xem video ngắn hàng giờ mỗi ngày",
            "x": 2028,
            "y": 1260,
            "size": 40,
            "at": "l1:videos"
          },
          {
            "id": "g-q1",
            "t": "text",
            "text": "① Why is this the case?",
            "x": 2028,
            "y": 1340,
            "size": 46,
            "at": "l1:Why",
            "color": "accent"
          },
          {
            "id": "g-q2",
            "t": "text",
            "text": "② Positive or negative?",
            "x": 2028,
            "y": 1415,
            "size": 46,
            "at": "l1:positive",
            "color": "accent"
          },
          {
            "id": "g-d1",
            "t": "text",
            "text": "Dũng: 3 đoạn lý do ✓",
            "x": 2028,
            "y": 1510,
            "size": 46,
            "at": "l3:three"
          },
          {
            "id": "g-d2",
            "t": "text",
            "text": "Kết: “a popular trend”",
            "x": 2028,
            "y": 1585,
            "size": 46,
            "at": "l3:popular",
            "color": "coral",
            "hl": [
              {
                "text": "popular",
                "at": "l3:popular"
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
          "say": "Stop five, four p.m. Many people watch short videos for hours a day. Why? Is it positive or negative?",
          "sub": "Chặng năm, bốn giờ chiều. Nhiều người xem video ngắn hàng giờ mỗi ngày. Vì sao? Tích cực hay tiêu cực?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two separate questions. Answer both, one body paragraph each.",
          "sub": "Hai câu hỏi riêng. Trả lời cả hai, mỗi câu một đoạn thân bài.",
          "keys": [
            "Trả lời cả hai"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Three great paragraphs on why people watch. Then time's up. Conclusion: this is a popular trend!",
          "sub": "Ba đoạn rất kỹ về lý do. Rồi hết giờ. Kết bài: đây là trào lưu phổ biến!",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Did Dũng answer the whole prompt? Think for a second.",
          "sub": "Dũng đã trả lời đủ đề chưa? Nghĩ một chút nhé.",
          "keys": [
            "trả lời đủ đề chưa"
          ]
        }
      ],
      "beats": {
        "after": 1200
      },
      "ref": "p15,p17"
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
            "id": "g-x",
            "t": "strike",
            "over": "g-d2",
            "at": "l2:not"
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "Chưa: thiếu câu ②",
            "x": 2028,
            "y": 1670,
            "size": 52,
            "at": "l1:Not yet",
            "color": "coral",
            "hl": [
              {
                "text": "thiếu câu ②",
                "at": "l1:second"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: IELTS Writing Task 2 Band Descriptors (5/2023)",
            "x": 2028,
            "y": 1810,
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
          "say": "Not yet. He answered question one. The second, positive or negative, is still waiting.",
          "sub": "Chưa. Dũng mới trả lời câu một. Câu hai, tích cực hay tiêu cực, vẫn bỏ ngỏ.",
          "keys": [
            "vẫn bỏ ngỏ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Popular is not a judgement. It says how common it is, not whether it's good or bad.",
          "sub": "“Popular” không phải là đánh giá. Nó nói chuyện phổ biến, không nói tốt hay xấu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Band five: main parts incompletely addressed. Band six: all addressed. Band seven: appropriately addressed.",
          "sub": "Band năm: các phần chính trả lời chưa đủ. Band sáu: đều được trả lời. Band bảy: trả lời phù hợp."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Skip one question, and you push yourself toward band five.",
          "sub": "Bỏ hẳn một câu hỏi là tự đẩy mình về phía band năm.",
          "keys": [
            "band năm"
          ]
        }
      ],
      "ref": "p16,p17"
    },
    {
      "id": "s18",
      "module": "BRK-12",
      "data": {
        "word": "2 câu hỏi",
        "sub": "Đề có mấy câu hỏi, bài cần bấy nhiêu câu trả lời",
        "from": [
          520,
          420
        ],
        "others": [
          "Why?",
          "Positive?",
          "popular"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Two questions.",
          "sub": "Hai câu hỏi."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "As many questions as the prompt asks, that many answers.",
          "sub": "Đề có mấy câu hỏi, bài cần bấy nhiêu câu trả lời.",
          "keys": [
            "bấy nhiêu câu trả lời"
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
            "fit": "G",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "g-fix",
            "t": "text",
            "text": "Lần sau: lý do + đánh giá",
            "x": 2028,
            "y": 1745,
            "size": 44,
            "at": "l1:one paragraph",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Next time I split my time: one paragraph of reasons, one of judgement, with an example.",
          "sub": "Lần sau em chia giờ đều: một đoạn lý do, một đoạn đánh giá có lý lẽ và ví dụ.",
          "face": "happy"
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s20",
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
            "text": "⑥ 16:30 · Một phút đọc đề",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six",
            "hl": [
              {
                "text": "Một phút",
                "at": "l1:minute"
              }
            ]
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1280,
            "w": 44,
            "h": 44,
            "at": "l2:Step one",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1262,
            "size": 56,
            "at": "l2:Step one+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Đọc câu lệnh cuối trước",
            "x": 4061,
            "y": 1272,
            "size": 46,
            "at": "l2:Step one+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1370,
            "w": 44,
            "h": 44,
            "at": "l3:Step two",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1352,
            "size": 56,
            "at": "l3:Step two+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Đếm số việc, ghi ra nháp",
            "x": 4061,
            "y": 1362,
            "size": 46,
            "at": "l3:Step two+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1460,
            "w": 44,
            "h": 44,
            "at": "l4:Step three",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1442,
            "size": 56,
            "at": "l4:Step three+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Gạch chủ đề hẹp",
            "x": 4061,
            "y": 1452,
            "size": 46,
            "at": "l4:Step three+200"
          },
          {
            "id": "h-n",
            "t": "text",
            "text": "university students ≠ education",
            "x": 4061,
            "y": 1530,
            "size": 40,
            "at": "l4:university",
            "color": "muted"
          },
          {
            "id": "h-i",
            "t": "illus",
            "name": "stopwatch",
            "x": 5286,
            "y": 1270,
            "size": 240,
            "at": "l1:minute"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, half past four. Lan sums it up: three steps, one minute.",
          "sub": "Chặng sáu, bốn rưỡi. Lan gom lại: ba bước, một phút.",
          "keys": [
            "ba bước, một phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Step one: read the last instruction first. That's where the prompt hands out the job.",
          "sub": "Bước một: đọc câu lệnh cuối trước, vì đó là chỗ đề giao việc.",
          "keys": [
            "câu lệnh cuối"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Step two: count the jobs and write them on scratch paper.",
          "sub": "Bước hai: đếm số việc phải làm, ghi ra nháp.",
          "keys": [
            "đếm số việc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Step three: underline the narrow topic. University students, not education in general.",
          "sub": "Bước ba: gạch chủ đề hẹp. “University students”, chứ không phải giáo dục nói chung.",
          "keys": [
            "chủ đề hẹp"
          ]
        }
      ],
      "ref": "p19"
    },
    {
      "id": "s21",
      "module": "BRK-04",
      "data": {
        "title": "Đề làm việc ở nhà",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Chủ đề quen, viết một mạch về công nghệ",
        "right": "Thấy outweigh: ưu, nhược, bên nào nặng hơn",
        "wrongIllus": "laptop",
        "rightIllus": "memo"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: Dũng wrote all about technology.",
          "sub": "Trước: Dũng viết một mạch về công nghệ.",
          "keys": [
            "viết một mạch"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: he spots outweigh first.",
          "sub": "Sau: thấy chữ outweigh trước.",
          "keys": [
            "outweigh trước"
          ]
        }
      ],
      "ref": "p20"
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
          }
        ],
        "items": [
          {
            "id": "h-s",
            "t": "text",
            "text": "Bài sau ngắn hơn — nhưng đúng đề",
            "x": 3996,
            "y": 1630,
            "size": 46,
            "at": "l1:shorter",
            "hl": [
              {
                "text": "đúng đề",
                "at": "l1:exactly"
              }
            ]
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Đọc câu lệnh trước, chủ đề sau",
            "x": 3996,
            "y": 1730,
            "size": 50,
            "at": "l2:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "câu lệnh trước",
                "at": "l2:instruction"
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
          "say": "His second essay is shorter, but it answers exactly what was asked.",
          "sub": "Bài sau ngắn hơn bài trước, nhưng trả lời đúng điều đề hỏi.",
          "keys": [
            "trả lời đúng điều đề hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: read the instruction first, the topic second.",
          "sub": "Rút ra: đọc câu lệnh trước, đọc chủ đề sau.",
          "keys": [
            "đọc câu lệnh trước"
          ]
        }
      ],
      "ref": "p20,p21"
    },
    {
      "id": "s23",
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
            "text": "17:00 · Cùng bàn ấy",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Five"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6764,
            "y": 1240,
            "w": 780,
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
                "memo",
                "stopwatch"
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
            "at": "l1:Five",
            "caption": "17:00 · đề luyện số 1, lần hai",
            "icon": "memo"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Lệnh: to what extent ✓",
            "x": 5964,
            "y": 1270,
            "size": 46,
            "at": "l2:extent"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Đồng ý một phần",
            "x": 5964,
            "y": 1350,
            "size": 52,
            "at": "l2:partly",
            "color": "accent",
            "hl": [
              {
                "text": "một phần",
                "at": "l2:partly"
              }
            ]
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Đoạn 1: phần đồng ý",
            "x": 6004,
            "y": 1435,
            "size": 44,
            "at": "l3:agree"
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "Đoạn 2: phần không",
            "x": 6004,
            "y": 1505,
            "size": 44,
            "at": "l3:don't"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "Hỏi gà → đáp gà",
            "x": 5964,
            "y": 1620,
            "size": 60,
            "at": "l4:chicken",
            "color": "accent",
            "hl": [
              {
                "text": "đáp gà",
                "at": "l4:answered"
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
          "say": "Five p.m. Same café table, same prompt number one, same Thảo.",
          "sub": "Năm giờ chiều. Vẫn bàn quán ấy, vẫn đề luyện số một, vẫn Thảo ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "To what extent: I partly agree. Clear from intro to conclusion. Pointed it out!",
          "sub": "To what extent: mình đồng ý một phần. Rõ từ mở bài đến kết bài. Chỉ tay được rồi!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Paragraph one, the part I agree with. Paragraph two, the part I don't.",
          "sub": "Đoạn một, phần mình đồng ý. Đoạn hai, phần mình không đồng ý."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Asked about the chicken, she answered about the chicken. No duck in sight.",
          "sub": "Hỏi gà, đáp gà. Chẳng thấy con vịt nào.",
          "keys": [
            "Hỏi gà, đáp gà"
          ]
        }
      ],
      "ref": "p5,p6"
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
            "fit": "G",
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
            "id": "j-t",
            "t": "text",
            "text": "Tóm lại: đọc lệnh, đếm việc",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:So"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Làm ngay: 5 đề luyện trong bài",
            "x": 7932,
            "y": 1290,
            "size": 50,
            "at": "l5:Try",
            "hl": [
              {
                "text": "5 đề luyện",
                "at": "l5:five"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "ghi: dạng gì? mấy việc?",
            "x": 7972,
            "y": 1375,
            "size": 46,
            "at": "l5:how many"
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Bài tiếp: lập dàn ý 5 phút",
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
            "at": "l2:side"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 3568,
            "y": 1130,
            "at": "l3:questions"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5536,
            "y": 1130,
            "at": "l4:instruction"
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
          "say": "So, every Task 2 prompt gives a clear job, and many give two at once.",
          "sub": "Tóm lại, mỗi đề Task 2 giao một việc rõ ràng, và nhiều đề giao hai việc cùng lúc.",
          "keys": [
            "hai việc cùng lúc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: in opinion essays, choose a side and keep it.",
          "sub": "Một: bài nêu ý kiến, chọn một phía và giữ đến cuối."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: two questions need two answers.",
          "sub": "Hai: hai câu hỏi cần hai câu trả lời."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: read the instruction first, count the jobs, underline the narrow topic.",
          "sub": "Ba: đọc câu lệnh trước, đếm số việc, gạch chủ đề hẹp."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: take the five practice prompts. For each, write its type and how many jobs. No essay yet.",
          "sub": "Làm ngay: lấy năm đề luyện trong bài, mỗi đề ghi ra dạng gì và có mấy việc, chưa cần viết.",
          "keys": [
            "năm đề luyện"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next up: a five-minute plan before you write.",
          "sub": "Bài tiếp theo: lập dàn ý năm phút trước khi viết.",
          "keys": [
            "lập dàn ý năm phút"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p22"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "Is a half agree, half disagree answer safest?",
        "options": [
          "Yes, because a clear opinion is not allowed in a formal essay",
          "No, any side is accepted if clear, but a vague middle position loses marks",
          "Yes, examiners always give band seven to essays that avoid choosing"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "balance-scale",
        "why": "Quan điểm nào cũng được chấp nhận nếu rõ và có lý do. Quan điểm lưng chừng làm kết luận chưa rõ, như band 6 mô tả."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Is a half agree, half disagree answer safest?",
          "sub": "Câu trả lời nửa đồng ý nửa không có phải an toàn nhất không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No, any side is accepted if clear, but a vague middle position loses marks.",
          "sub": "Quan điểm nào cũng được chấp nhận nếu rõ và có lý do. Quan điểm lưng chừng làm kết luận chưa rõ, như band 6 mô tả."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Remember the opening guess? Clear beats safe.",
          "sub": "Nhớ câu đoán lúc đầu chứ? Rõ ràng thắng an toàn."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[10]"
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
          "say": "Read the instruction, count the jobs. Then try the forty questions below.",
          "sub": "Đọc câu lệnh, đếm số việc. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT CHIỀU THỨ BẢY ở quán nhóm (14:00 bốn việc → 14:30 to what extent → “Khoan đã!” nửa đồng ý nửa không → 15:00 Sam: hai quan điểm + ý mình → 15:30 outweigh, Lan làm mẫu đề nhà ở → 16:00 đề hai câu hỏi (Dũng vai Linh) → 16:30 ba bước một phút → 17:00 cùng bàn, khép vòng). Mở HOOK-21: đoán “nửa đồng ý nửa không — an toàn hay mất điểm?” lặng 1,5 s rồi lật. Nhân vật: Thảo (chính), Lan (vai Hùng), Dũng (vai Linh), Sam — w145/_series/ielts-writing-task2-takers.md. Cảnh ngắt nhịp: BRK-08, BRK-04 ×2 (outweigh; trước–sau), BRK-07 (rehook hai câu hỏi), BRK-12 (match cut “2 câu hỏi”). Tục ngữ: “Hỏi gà đáp vịt”.",
  "loop": {
    "open": "s00",
    "close": "s23"
  }
};
