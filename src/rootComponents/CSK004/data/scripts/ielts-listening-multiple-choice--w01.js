// ielts-listening-multiple-choice--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "ielts-listening-multiple-choice--w01",
  "hook": "HOOK-20",
  "unit": {
    "audience": "ielts-listening-takers",
    "slug": "ielts-listening-multiple-choice",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Dạng trắc nghiệm trong Listening: tránh bẫy đáp án nghe thấy mà sai thế nào?",
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
            "id": "a-big",
            "t": "text",
            "text": "Nghe thấy ≠ đúng",
            "x": 60,
            "y": 60,
            "size": 96,
            "at": "l2:hearing",
            "color": "accent",
            "hl": [
              {
                "text": "≠ đúng",
                "at": "l2:right"
              }
            ]
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "1. Nói lại bằng từ khác",
            "x": 60,
            "y": 230,
            "size": 48,
            "at": "l3:other words"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "2. Nhắc rồi bị loại",
            "x": 60,
            "y": 310,
            "size": 48,
            "at": "l3:thrown out"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "3. Đứng lại câu lỡ",
            "x": 60,
            "y": 390,
            "size": 48,
            "at": "l4:three",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "You hear bus. You pick the option with bus. And it's wrong.",
          "sub": "Bạn nghe rõ “bus”, chọn ngay phương án có “bus”. Và sai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Short answer first: in Listening multiple choice, hearing it doesn't make it right.",
          "sub": "Nói đáp án trước: trắc nghiệm Listening, nghe thấy chưa phải là đúng.",
          "keys": [
            "nghe thấy chưa phải là đúng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The right option usually comes in other words. Wrong ones get mentioned, then thrown out.",
          "sub": "Phương án đúng thường được nói bằng từ khác; phương án sai thường được nhắc rồi bị loại."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sounds simple. But there are three places people slip.",
          "sub": "Nghe đơn giản, nhưng có ba chỗ hay trượt.",
          "keys": [
            "ba chỗ hay trượt"
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
            "y": 150,
            "w": 800,
            "data": {
              "set": "campus",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "shrug",
                  "face": "surprised"
                }
              ],
              "props": [
                "headphone",
                "books"
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
            "caption": "Chủ nhật 8:30 · phòng nhóm thư viện",
            "icon": "books"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Nghe hơi nồi chõ”",
            "x": 60,
            "y": 520,
            "size": 60,
            "at": "l3:phrase",
            "color": "accent",
            "hl": [
              {
                "text": "nồi chõ",
                "at": "l3:steam"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "bắt được hơi, chưa thấy xôi",
            "x": 100,
            "y": 620,
            "size": 44,
            "at": "l3:rice",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, twenty-one, Thảo's cousin. This Sunday, Sam runs a Part three workshop at the library.",
          "sub": "Đây là Dũng, 21 tuổi, em họ Thảo. Sáng Chủ nhật này, Sam mở buổi luyện Phần 3 ở thư viện.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Last week I heard bus, picked bus. Wrong! Was the tape broken?",
          "sub": "Tuần trước em nghe “bus”, chọn bus. Sai! Băng hỏng à?",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The tape was fine. Our grandparents have a phrase for it: catching the steam, not the rice.",
          "sub": "Băng không hỏng. Ông bà gọi đó là “nghe hơi nồi chõ”: bắt được hơi, chưa thấy xôi.",
          "keys": [
            "nghe hơi nồi chõ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Today, Dũng learns to wait for the rice.",
          "sub": "Hôm nay, Dũng học cách chờ… xôi chín.",
          "keys": [
            "chờ… xôi chín"
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
            "text": "Trắc nghiệm trông thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:look like"
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "A · B · C → chọn 1",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:three"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Danh sách dài → chọn nhiều",
            "x": 2028,
            "y": 255,
            "size": 48,
            "at": "l2:several"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Chi tiết + ý chung",
            "x": 2028,
            "y": 340,
            "size": 48,
            "at": "l3:detail"
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "Số câu: không cố định",
            "x": 2028,
            "y": 420,
            "size": 48,
            "at": "l3:fixed",
            "color": "muted"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: IELTS.org — IELTS Academic format: Listening",
            "x": 2028,
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
          "say": "So what does Listening multiple choice look like?",
          "sub": "Vậy trắc nghiệm phần Nghe trông thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "IELTS dot org: two kinds. One answer from three, A, B or C. Or several from a longer list.",
          "sub": "Theo IELTS.org có hai kiểu: chọn một trong ba phương án A, B, C, hoặc chọn nhiều đáp án từ danh sách dài hơn.",
          "keys": [
            "hai kiểu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It tests detail and the general idea. And the number of these questions isn't fixed.",
          "sub": "Dạng này kiểm tra cả chi tiết lẫn ý chung. Số câu trắc nghiệm mỗi đề không cố định."
        }
      ],
      "ref": "p1"
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
            "text": "Choose TWO letters",
            "x": 2928,
            "y": 170,
            "size": 56,
            "at": "l1:Choose",
            "hl": [
              {
                "text": "TWO",
                "at": "l1:exactly"
              }
            ]
          },
          {
            "id": "b-6",
            "t": "text",
            "text": "= đúng 2, không 1, không 3",
            "x": 2928,
            "y": 260,
            "size": 48,
            "at": "l2:three",
            "color": "coral"
          },
          {
            "id": "b-7",
            "t": "text",
            "text": "Gọi 2 bát phở, bưng ra 3",
            "x": 2928,
            "y": 345,
            "size": 44,
            "at": "l2:phở",
            "color": "muted"
          },
          {
            "id": "b-8",
            "t": "text",
            "text": "Có cả ở bài giảng Phần 4",
            "x": 2928,
            "y": 440,
            "size": 48,
            "at": "l3:lecture",
            "color": "accent",
            "hl": [
              {
                "text": "Phần 4",
                "at": "l3:four"
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
          "say": "IDP's warning: read the instruction. Choose TWO letters means exactly two.",
          "sub": "IDP nhắc: đọc kỹ hướng dẫn. Choose TWO letters là đúng hai chữ cái.",
          "keys": [
            "đúng hai chữ cái"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One or three spoils the question. Like ordering two bowls of phở and getting three.",
          "sub": "Chọn một hay ba đều làm hỏng câu. Như gọi hai bát phở mà bưng ra ba."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And it can turn up in any part, even the Part four lecture.",
          "sub": "Và dạng này có thể xuất hiện ở nhiều phần, kể cả bài giảng Phần 4."
        }
      ],
      "ref": "p2"
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
          },
          {
            "at": "l5",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 8:45 · Đọc cả phương án",
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
                  "id": "sam",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "center"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "think"
                }
              ],
              "props": [
                "memo",
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
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Sam",
            "caption": "8:45 · câu hỏi về bài khảo sát",
            "icon": "memo"
          },
          {
            "id": "c-q",
            "t": "text",
            "text": "The survey?",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l3:survey",
            "color": "muted"
          },
          {
            "id": "c-a",
            "t": "text",
            "text": "A. too long",
            "x": 3996,
            "y": 250,
            "size": 48,
            "at": "l4:three"
          },
          {
            "id": "c-b",
            "t": "text",
            "text": "B. too few people",
            "x": 3996,
            "y": 325,
            "size": 48,
            "at": "l4:three+300"
          },
          {
            "id": "c-c",
            "t": "text",
            "text": "C. wrong questions",
            "x": 3996,
            "y": 400,
            "size": 48,
            "at": "l4:three+600"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, eight forty-five. Meet Sam, the group's native-speaker teacher. Today she reads the tapes herself.",
          "sub": "Chặng một, 8 giờ 45. Đây là Sam, cô giáo bản ngữ của nhóm. Hôm nay cô tự đọc đoạn luyện như băng.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And Thảo, Dũng's cousin, who reads everything carefully.",
          "sub": "Và Thảo, chị họ Dũng, cái gì cũng đọc kỹ.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Question: what does the tutor say about the survey?",
          "sub": "Câu hỏi: người hướng dẫn nói gì về bài khảo sát?",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Dũng reads only the question. Thảo reads all three options, and underlines.",
          "sub": "Dũng chỉ đọc câu hỏi. Thảo đọc cả ba phương án, và gạch chân.",
          "keys": [
            "cả ba phương án"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Too long. Too few people. Wrong questions.",
          "sub": "Too long. Too few people. Wrong questions.",
          "face": "thinking"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p3,p4"
    },
    {
      "id": "s05",
      "module": "DLG-01",
      "data": {
        "set": "campus",
        "label": "8:46 · băng đang chạy",
        "actors": [
          {
            "id": "sam",
            "side": "left",
            "pose": "hold"
          },
          {
            "id": "dung",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Chỉ đọc câu hỏi, chờ băng mới đọc phương án",
          "why": "Băng chạy nhanh: chưa đọc xong C thì người nói đã sang ý khác.",
          "rule": "Đọc trước cả câu hỏi lẫn ba phương án"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "sam",
          "say": "You only asked fifteen students.",
          "sub": "Các em mới hỏi có mười lăm sinh viên.",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Wait, I'm still reading option C!",
          "sub": "Khoan, em còn đang đọc phương án C!",
          "face": "worried",
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
          "say": "The tape didn't wait for Dũng. While he was reading, the answer drove past.",
          "sub": "Băng đâu chờ Dũng. Đang đọc dở thì đáp án đã chạy qua.",
          "keys": [
            "đáp án đã chạy qua"
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
          "who": "dung",
          "say": "All three options first. Fifteen students... that's too few people!",
          "sub": "Đọc cả ba trước. Mười lăm sinh viên… là too few people!",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Read the options before the tape, not during it.",
          "sub": "Đọc phương án trước khi băng chạy, đừng đọc lúc băng chạy.",
          "phase": "redo",
          "keys": [
            "trước khi băng chạy"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
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
            "fit": "C",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "c-m",
            "t": "text",
            "text": "fifteen students = too few people",
            "x": 3996,
            "y": 480,
            "size": 42,
            "at": "l1:Fifteen",
            "hl": [
              {
                "text": "too few people",
                "at": "l1:too few"
              }
            ]
          },
          {
            "id": "c-r",
            "t": "ring",
            "around": [
              "c-b"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l1:too few"
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "Gạch: tên · số · nơi chốn · ngày",
            "x": 3996,
            "y": 560,
            "size": 40,
            "at": "l2:underline"
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "Băng theo thứ tự: 21 → 22",
            "x": 3996,
            "y": 630,
            "size": 40,
            "at": "l3:order"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Đọc trước cả 3 phương án",
            "x": 4836,
            "y": 695,
            "size": 46,
            "at": "l4:read them",
            "color": "accent",
            "hl": [
              {
                "text": "cả 3 phương án",
                "at": "l4:options"
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
          "say": "Fifteen students means too few people. Not one word matched, but the idea did.",
          "sub": "Mười lăm sinh viên chính là too few people. Không chữ nào trùng, nhưng ý thì trùng.",
          "keys": [
            "ý thì trùng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "IDP's tip: underline names, numbers, places and dates. They keep your ears in the right spot.",
          "sub": "Mẹo của IDP: gạch tên, số, nơi chốn, ngày tháng. Chúng giữ tai bạn ở đúng đoạn băng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And the tape always follows the question order. Twenty-one comes before twenty-two.",
          "sub": "Băng luôn đi theo thứ tự câu hỏi: câu 21 đến trước câu 22."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Telling the options apart is the hard part. So read them first.",
          "sub": "Phân biệt các phương án mới là phần khó nhất. Nên hãy đọc chúng trước.",
          "keys": [
            "đọc chúng trước"
          ]
        }
      ],
      "ref": "p3,p5"
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
            "text": "② 9:15 · Nói bằng từ khác",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "local region = geographical area",
            "x": 5964,
            "y": 170,
            "size": 42,
            "at": "l2:local region",
            "hl": [
              {
                "text": "local region",
                "at": "l2:local region"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "1 từ ↔ cả cụm, cả câu",
            "x": 5964,
            "y": 250,
            "size": 48,
            "at": "l3:phrase",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, nine fifteen. IDP says the words on the tape may not match the words on the page.",
          "sub": "Chặng hai, 9 giờ 15. IDP nhắc: chữ trong băng có thể không khớp chữ in trong đề."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Their example: the speaker says local region, for the option geographical area.",
          "sub": "Ví dụ của IDP: người nói dùng local region cho phương án geographical area.",
          "keys": [
            "local region"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And one word in a question can match a whole phrase, even a whole sentence.",
          "sub": "Một từ trong câu hỏi có thể ứng với cả một cụm, thậm chí cả một câu."
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
            "at": "l6",
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
              "set": "campus",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "memo"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:tries",
            "caption": "9:20 · Sam đọc giọng Hà",
            "icon": "memo"
          },
          {
            "id": "d-q",
            "t": "text",
            "text": "Why did Hà choose this course?",
            "x": 5964,
            "y": 340,
            "size": 40,
            "at": "l1:Why"
          },
          {
            "id": "d-a",
            "t": "text",
            "text": "A. cheaper",
            "x": 5964,
            "y": 410,
            "size": 46,
            "at": "l1:cheaper"
          },
          {
            "id": "d-b",
            "t": "text",
            "text": "B. fitted her timetable",
            "x": 5964,
            "y": 480,
            "size": 46,
            "at": "l1:timetable"
          },
          {
            "id": "d-c",
            "t": "text",
            "text": "C. a friend recommended it",
            "x": 5964,
            "y": 550,
            "size": 46,
            "at": "l1:friend"
          },
          {
            "id": "d-ax",
            "t": "strike",
            "over": "d-a",
            "at": "l7:mentioned"
          },
          {
            "id": "d-cx",
            "t": "strike",
            "over": "d-c",
            "at": "l7:aside"
          },
          {
            "id": "d-br",
            "t": "ring",
            "around": [
              "d-b"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l6:fitted"
          },
          {
            "id": "d-n",
            "t": "text",
            "text": "evenings + work by day = B",
            "x": 5964,
            "y": 640,
            "size": 44,
            "at": "l6:evenings",
            "color": "accent",
            "hl": [
              {
                "text": "= B",
                "at": "l6:fitted"
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
          "say": "Thảo tries one. Why did Hà choose this course? A, cheaper. B, fitted her timetable. C, a friend recommended it.",
          "sub": "Thảo thử một câu: Vì sao Hà chọn khoá này? A, rẻ hơn. B, hợp lịch. C, bạn giới thiệu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sam reads Hà's part.",
          "sub": "Sam đọc lời của Hà."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Honestly, the price was about the same everywhere, and nobody I knew had done it.",
          "sub": "Thật ra giá chỗ nào cũng xêm xêm, mà người quen cũng chẳng ai học.",
          "face": "neutral"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "But it's the only one on weekday evenings, so I can still work during the day.",
          "sub": "Nhưng đây là khoá duy nhất học tối trong tuần, nên ban ngày vẫn đi làm được.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "No option was read out. But it's B. I heard it!",
          "sub": "Không phương án nào được đọc nguyên văn. Nhưng là B. Nghe ra rồi!",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Weekday evenings, work during the day: that's fitted her timetable, in other words.",
          "sub": "Tối trong tuần, ban ngày đi làm: chính là “hợp lịch”, nói bằng lời khác.",
          "keys": [
            "nói bằng lời khác"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "A and C were mentioned, then pushed aside by Hà herself.",
          "sub": "A và C có được nhắc, rồi bị chính Hà gạt đi.",
          "keys": [
            "bị chính Hà gạt đi"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s09",
      "module": "BRK-10",
      "data": {
        "quote": "Đừng chờ đúng chữ in trong đề, hãy chờ cùng một ý nói bằng lời khác",
        "mark": "cùng một ý",
        "by": "Rút ra ở chặng hai",
        "illus": "ear"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Don't wait for the printed words.",
          "sub": "Đừng chờ đúng chữ in trong đề."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Wait for the same idea, in other words.",
          "sub": "Hãy chờ cùng một ý, nói bằng lời khác.",
          "keys": [
            "cùng một ý"
          ]
        }
      ],
      "ref": "p8"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 9:45 · Nhắc rồi bị loại",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Phương án sai: cài có chủ đích",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l1:purpose",
            "hl": [
              {
                "text": "có chủ đích",
                "at": "l1:purpose"
              }
            ]
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Chi tiết lạc đề kéo đi lạc",
            "x": 7932,
            "y": 250,
            "size": 44,
            "at": "l2:irrelevant"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Nhắc → gạt → chọn cái khác",
            "x": 7932,
            "y": 330,
            "size": 48,
            "at": "l3:rejects",
            "color": "coral"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "Có chữ trong băng ≠ đáp án",
            "x": 7932,
            "y": 420,
            "size": 48,
            "at": "l4:never",
            "color": "accent",
            "hl": [
              {
                "text": "≠ đáp án",
                "at": "l4:context"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: IDP — IELTS Listening multiple choice questions",
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
          "say": "Stop three, quarter to ten. IDP says wrong options are put there on purpose.",
          "sub": "Chặng ba, 9 giờ 45. IDP cho biết các phương án sai được cài vào có chủ đích.",
          "keys": [
            "có chủ đích"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The tape may carry irrelevant details, to lead you astray.",
          "sub": "Băng có thể chứa thông tin không liên quan để kéo bạn đi lạc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Or a speaker mentions an option, rejects it, and only then chooses another.",
          "sub": "Hoặc người nói nhắc một phương án, gạt nó đi, rồi mới chọn phương án khác."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So never pick an option just because one of its words was on the tape. Listen to the context.",
          "sub": "Vậy đừng chọn phương án chỉ vì có một chữ của nó trong băng. Hãy nghe cả ngữ cảnh.",
          "keys": [
            "nghe cả ngữ cảnh"
          ]
        }
      ],
      "ref": "p9"
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
            "at": "l1",
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
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "campus",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "shrug"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "memo"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
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
            "at": 0,
            "caption": "9:50 · Dũng chưa chịu",
            "icon": "thinking-face"
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "Đừng bám phương án đoán trước",
            "x": 7932,
            "y": 510,
            "size": 42,
            "at": "l3:cling",
            "color": "muted"
          },
          {
            "id": "e-6",
            "t": "text",
            "text": "→ để băng dẫn đường",
            "x": 7972,
            "y": 580,
            "size": 46,
            "at": "l3:lead",
            "color": "accent",
            "hl": [
              {
                "text": "dẫn đường",
                "at": "l3:lead"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Đúng = còn trụ đến cuối ý",
            "x": 7932,
            "y": 645,
            "size": 48,
            "at": "l4:standing",
            "color": "accent",
            "hl": [
              {
                "text": "cuối ý",
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
          "who": "dung",
          "say": "But if I hear the word, it must be the answer, right?",
          "sub": "Nhưng nghe thấy chữ đó thì phải là đáp án chứ?",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "In Hà's clip, all three options were mentioned.",
          "sub": "Trong đoạn của Hà, cả ba phương án đều được nhắc mà.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Exactly. IDP also says: don't cling to the option you predicted. Let the tape lead.",
          "sub": "Đúng vậy. IDP còn khuyên: đừng bám phương án mình đoán trước. Hãy để băng dẫn đường.",
          "keys": [
            "để băng dẫn đường"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Hearing isn't being right. The right option is the one still standing at the end of the idea.",
          "sub": "Nghe thấy chưa phải là đúng. Phương án đúng là phương án còn trụ lại đến cuối ý.",
          "keys": [
            "còn trụ lại đến cuối ý"
          ]
        }
      ],
      "ref": "p10,p11"
    },
    {
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "Nghe “coach”, đề ghi “bus”: chọn ngay?",
        "illus": "bus"
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
          "say": "You hear coach, the option says bus. Pick it right away?",
          "sub": "Nghe “coach”, đề ghi “bus”: chọn ngay?",
          "keys": [
            "chọn ngay"
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
            "at": "l5",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 10:15 · Đi bảo tàng",
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
                  "id": "sam",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "bus",
                "station"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:museum",
            "caption": "10:15 · How will the students travel?",
            "icon": "bus"
          },
          {
            "id": "f-a",
            "t": "text",
            "text": "A. by bus",
            "x": 60,
            "y": 1260,
            "size": 50,
            "at": "l1:bus"
          },
          {
            "id": "f-b",
            "t": "text",
            "text": "B. by train",
            "x": 60,
            "y": 1340,
            "size": 50,
            "at": "l1:train"
          },
          {
            "id": "f-c",
            "t": "text",
            "text": "C. on foot",
            "x": 60,
            "y": 1420,
            "size": 50,
            "at": "l1:foot"
          },
          {
            "id": "f-ax",
            "t": "strike",
            "over": "f-a",
            "at": "l6:last year"
          },
          {
            "id": "f-br",
            "t": "ring",
            "around": [
              "f-b"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l6:B"
          },
          {
            "id": "f-q",
            "t": "text",
            "text": "Bạn chọn gì?",
            "x": 60,
            "y": 1520,
            "size": 56,
            "at": "l5:answer",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four, ten fifteen. How will the students travel to the museum? A, by bus. B, by train. C, on foot.",
          "sub": "Chặng bốn, 10 giờ 15. Sinh viên đi bảo tàng bằng gì? A, xe buýt. B, tàu. C, đi bộ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Last year we took a coach, but it got stuck in traffic for an hour.",
          "sub": "Năm ngoái mình đi xe khách, nhưng tắc đường mất một tiếng.",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "This time the station is just next to the museum, so that's what we'll do.",
          "sub": "Lần này nhà ga ngay cạnh bảo tàng, nên mình sẽ đi như vậy.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Coach! That's a bus. A!",
          "sub": "Coach! Là xe buýt. Chọn A!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Hold on. What's your answer?",
          "sub": "Khoan. Bạn chọn gì?",
          "keys": [
            "Bạn chọn gì"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "B, by train. The coach was last year. This time, it's the station.",
          "sub": "B, đi tàu. Xe khách là chuyện năm ngoái. Lần này là nhà ga.",
          "keys": [
            "B, đi tàu"
          ],
          "wait": 1500
        }
      ],
      "ref": "p12"
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
            "id": "f-1",
            "t": "text",
            "text": "but · this time · instead",
            "x": 60,
            "y": 1620,
            "size": 50,
            "at": "l1:but",
            "color": "accent",
            "hl": [
              {
                "text": "this time",
                "at": "l1:this time"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "= phương án vừa nhắc bị loại",
            "x": 60,
            "y": 1700,
            "size": 42,
            "at": "l2:thrown"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "last year ≠ bây giờ",
            "x": 900,
            "y": 1785,
            "size": 46,
            "at": "l3:Last year",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Watch the time words and contrast words: but, this time, instead.",
          "sub": "Để ý từ chỉ thời gian và từ đối lập: but, this time, instead.",
          "keys": [
            "but, this time, instead"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "They often announce that an option has just been thrown out.",
          "sub": "Chúng thường báo phương án vừa nhắc đã bị loại."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Last year belongs in the museum. The question asks about now.",
          "sub": "Năm ngoái thì cho vào bảo tàng. Câu hỏi hỏi chuyện bây giờ.",
          "keys": [
            "chuyện bây giờ"
          ]
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s15",
      "module": "BRK-04",
      "data": {
        "title": "Đi bảo tàng bằng gì?",
        "wrong": "Nghe “coach” → chọn A, bus",
        "right": "Nghe “this time… the station” → B, train",
        "wrongIllus": "bus",
        "rightIllus": "train"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Heard coach, picked bus?",
          "sub": "Nghe coach, chọn bus?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Heard this time, the station. Train.",
          "sub": "Nghe this time, the station: đi tàu.",
          "keys": [
            "đi tàu"
          ]
        }
      ],
      "ref": "p12,p13"
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
            "text": "⑤ 10:45 · Câu lỡ",
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
              "set": "campus",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "headphone"
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
            "at": "l1:full",
            "caption": "10:45 · câu 24",
            "icon": "headphone"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Câu 24: A hay C?",
            "x": 2028,
            "y": 1260,
            "size": 52,
            "at": "l3:looks"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "→ lỡ luôn câu 25",
            "x": 2068,
            "y": 1345,
            "size": 50,
            "at": "l3:gone",
            "color": "coral",
            "hl": [
              {
                "text": "câu 25",
                "at": "l3:twenty-five"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Băng 1 lần, theo thứ tự",
            "x": 2028,
            "y": 1435,
            "size": 46,
            "at": "l4:once"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, quarter to eleven. A full Part three, no stopping.",
          "sub": "Chặng năm, 10 giờ 45. Làm trọn Phần 3, không dừng băng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Twenty-four: A or C? A or C? Let me replay it in my head...",
          "sub": "Câu 24: A hay C? A hay C? Để tua lại trong đầu…",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "When Dũng looks up, the tape is on twenty-six. Twenty-five is gone, and it wasn't even hard.",
          "sub": "Lúc Dũng định thần, băng đã sang câu 26. Câu 25 trôi mất, dù chẳng khó.",
          "keys": [
            "Câu 25 trôi mất"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The tape plays once, in order. A missed answer has already left the station.",
          "sub": "Băng phát một lần, theo thứ tự. Đáp án đã lỡ thì tàu đã rời ga."
        }
      ],
      "ref": "p14,p15"
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
            "id": "g-4",
            "t": "text",
            "text": "Không điểm âm:",
            "x": 2028,
            "y": 1530,
            "size": 48,
            "at": "l1:negative"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "chọn tạm → đánh dấu → câu kế",
            "x": 2068,
            "y": 1605,
            "size": 44,
            "at": "l1:mark",
            "color": "accent",
            "hl": [
              {
                "text": "câu kế",
                "at": "l1:move"
              }
            ]
          },
          {
            "id": "g-6",
            "t": "text",
            "text": "1 câu lỡ = mất 1",
            "x": 2028,
            "y": 1690,
            "size": 46,
            "at": "l3:one mark"
          },
          {
            "id": "g-7",
            "t": "text",
            "text": "đứng lại tiếc = mất thêm 2, 3",
            "x": 2028,
            "y": 1760,
            "size": 46,
            "at": "l3:Mourning",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "IDP: there's no negative marking. So pick the most likely option, mark it, and move straight on.",
          "sub": "IDP ghi không có điểm âm. Nên chọn tạm phương án có vẻ đúng nhất, đánh dấu, rồi đi tiếp ngay.",
          "keys": [
            "đi tiếp ngay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Next test: pick, mark, next question. Done.",
          "sub": "Đề sau: chọn tạm, đánh dấu, nhìn câu kế. Xong.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A missed question costs one mark. Mourning it can cost two or three more.",
          "sub": "Một câu lỡ chỉ mất một điểm. Đứng lại tiếc nó có thể mất thêm hai, ba điểm.",
          "keys": [
            "mất thêm hai, ba điểm"
          ]
        }
      ],
      "ref": "p14,p16"
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
            "text": "⑥ 11:10 · Phần 3: ai nói gì",
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
              "set": "campus",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain"
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
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Part three",
            "caption": "11:10 · ghi chú người nói",
            "icon": "pencil"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Ghi: người nói · quan hệ · tình huống",
            "x": 3996,
            "y": 1260,
            "size": 40,
            "at": "l2:speakers",
            "hl": [
              {
                "text": "quan hệ",
                "at": "l2:relationship"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Người hướng dẫn ↔ sinh viên",
            "x": 3996,
            "y": 1340,
            "size": 44,
            "at": "l4:tutor"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "đề xuất → bác bỏ",
            "x": 4036,
            "y": 1415,
            "size": 48,
            "at": "l4:rejects",
            "color": "coral"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "Nghe tiếp: cuối cùng chốt gì?",
            "x": 3996,
            "y": 1505,
            "size": 44,
            "at": "l5:agree",
            "color": "accent",
            "hl": [
              {
                "text": "chốt gì",
                "at": "l5:agree"
              }
            ]
          },
          {
            "id": "h-n",
            "t": "text",
            "text": "Bài tiếp: bản đồ, nối ý kiến",
            "x": 3996,
            "y": 1610,
            "size": 44,
            "at": "l6:Next",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, ten past eleven. In Part three, many questions ask what each person thinks.",
          "sub": "Chặng sáu, 11 giờ 10. Ở Phần 3, nhiều câu hỏi về ý kiến của từng người."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "IDP: read the questions, then note the speakers, their relationship, and the situation.",
          "sub": "IDP khuyên: đọc trước câu hỏi, rồi ghi chú người nói, quan hệ giữa họ và tình huống.",
          "keys": [
            "quan hệ giữa họ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Speaker one, student. Speaker two, tutor. Topic, the survey.",
          "sub": "Người 1: sinh viên. Người 2: người hướng dẫn. Chủ đề: bài khảo sát.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Knowing who's the tutor helps you notice when one suggests and the other rejects.",
          "sub": "Biết ai là người hướng dẫn giúp bạn nhận ra lúc một người đề xuất, người kia bác bỏ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One suggests, the other says it won't work? Keep listening for what they finally agree on.",
          "sub": "Một người đề xuất, người kia bảo không ổn? Nghe tiếp xem cuối cùng họ chốt gì.",
          "keys": [
            "cuối cùng họ chốt gì"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next lesson: maps, plans, and matching people with opinions.",
          "sub": "Bài tiếp: bản đồ, sơ đồ và nối người với ý kiến."
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
            "text": "11:30 · Cùng phòng ấy",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Half past"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "campus",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "headphone",
                "books"
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
            "at": "l1:room",
            "caption": "11:30 · phòng nhóm thư viện",
            "icon": "books"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Vẫn nghe thấy “bus”…",
            "x": 5964,
            "y": 1260,
            "size": 50,
            "at": "l2:bus",
            "color": "muted"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "… chờ hết ý mới chọn",
            "x": 6004,
            "y": 1345,
            "size": 50,
            "at": "l2:wait",
            "color": "accent",
            "hl": [
              {
                "text": "hết ý",
                "at": "l2:end"
              }
            ]
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Nghe hơi nồi chõ”",
            "x": 5964,
            "y": 1470,
            "size": 56,
            "at": "l3:steam",
            "color": "muted"
          },
          {
            "id": "i-cax",
            "t": "strike",
            "over": "i-ca",
            "at": "l3:isn't"
          },
          {
            "id": "i-ca2",
            "t": "text",
            "text": "→ chờ xôi chín",
            "x": 6004,
            "y": 1560,
            "size": 56,
            "at": "l3:cook",
            "color": "accent",
            "hl": [
              {
                "text": "xôi chín",
                "at": "l3:cook"
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
          "say": "Half past eleven. Same room, same headphones, same Dũng.",
          "sub": "11 giờ 30. Vẫn phòng ấy, tai nghe ấy, Dũng ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I still hear bus. But now I wait for the end of the idea before I pick.",
          "sub": "Em vẫn nghe thấy “bus”. Nhưng giờ em chờ hết ý mới chọn.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Catching the steam isn't eating the rice. Today, Dũng waited for the rice to cook.",
          "sub": "“Nghe hơi nồi chõ” thì chưa được ăn xôi. Hôm nay Dũng đã chờ xôi chín.",
          "keys": [
            "chờ xôi chín"
          ]
        }
      ],
      "ref": "p11"
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
            "at": "l2:Wait",
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
            "text": "Tóm lại: nghe ý, đừng bắt chữ",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:So"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Đọc trước phương án · chờ nói lại",
            "x": 7932,
            "y": 1280,
            "size": 44,
            "at": "l1:rewards"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Cảnh giác nhắc rồi loại",
            "x": 7932,
            "y": 1365,
            "size": 48,
            "at": "l1:listening"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Lỡ câu → đi tiếp",
            "x": 7932,
            "y": 1450,
            "size": 50,
            "at": "l1:ideas",
            "color": "accent"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4696,
            "y": 250,
            "at": "l2:options"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6664,
            "y": 170,
            "at": "l2:paraphrase"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 8632,
            "y": 330,
            "at": "l3:rejected"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 2728,
            "y": 1260,
            "at": "l4:on"
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Bài tiếp: bản đồ, nối thông tin",
            "x": 7932,
            "y": 1560,
            "size": 44,
            "at": "l5:Next",
            "color": "accent"
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
          "say": "So: multiple choice rewards listening for ideas, not catching words.",
          "sub": "Tóm lại: trắc nghiệm Listening thưởng cho người nghe ý, không thưởng người bắt chữ.",
          "keys": [
            "người nghe ý"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Read the options first. Wait for the paraphrase.",
          "sub": "Đọc trước phương án. Chờ cách nói lại."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Beware of options mentioned, then rejected.",
          "sub": "Cảnh giác phương án được nhắc rồi bị loại.",
          "keys": [
            "nhắc rồi bị loại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Missed one? Move on.",
          "sub": "Lỡ câu nào thì đi tiếp."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next up: maps, diagrams and matching.",
          "sub": "Bài tiếp theo: bản đồ, sơ đồ và nối thông tin.",
          "keys": [
            "bản đồ, sơ đồ"
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
        "q": "Which words often signal that a mentioned option has been rejected?",
        "options": [
          "Number words like first, second and third in a list",
          "Contrast and time words like but, this time and instead",
          "Greeting words like hello, good morning and thank you very much"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "ear",
        "why": "Câu rút ra nêu but, this time, instead. Chúng thường báo phương án vừa nhắc bị gạt đi."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which words often signal that a mentioned option has been rejected?",
          "sub": "Những từ nào thường báo phương án vừa nhắc đã bị loại?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Contrast and time words like but, this time and instead.",
          "sub": "Từ đối lập và từ chỉ thời gian như but, this time, instead."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "They often mean the option you just heard has been thrown out.",
          "sub": "Chúng thường báo phương án vừa nghe đã bị loại."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[23]"
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
          "say": "Read the options, wait for the idea, move on. Now try the forty questions below.",
          "sub": "Đọc phương án, chờ ý, đi tiếp. Giờ thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT SÁNG CHỦ NHẬT, buổi luyện Phần 3 của Sam ở phòng nhóm thư viện (8:30 Dũng “nghe bus chọn bus” → 8:45 đọc cả phương án + “Khoan đã!” → 9:15 nói bằng từ khác (Hà) → 9:45 nhắc rồi bị loại → 10:15 đi bảo tàng (coach/station) → 10:45 câu lỡ → 11:10 Phần 3 ai nói gì → 11:30 khép vòng). Hook HOOK-20: đáp án trước “Nghe thấy ≠ đúng” + ba chỗ hay trượt. Nhân vật: Dũng (vai Tuấn + Nam), Thảo (vai Mai), Sam (đọc đoạn luyện: Hà, người hướng dẫn) — w145/_series/ielts-listening-takers.md. Cảnh ngắt nhịp: BRK-10 (chờ cùng một ý), BRK-07 (rehook coach/bus), BRK-04 (Sai/Đúng bảo tàng). Ca dao: “Nghe hơi nồi chõ”. Câu đố questions[23].",
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
