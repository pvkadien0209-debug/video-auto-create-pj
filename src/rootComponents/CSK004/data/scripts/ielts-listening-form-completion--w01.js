// ielts-listening-form-completion--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "ielts-listening-form-completion--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "ielts-listening-takers",
    "slug": "ielts-listening-form-completion",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Dạng điền form, ghi chú: nghe số, tên, chính tả thế nào cho đúng?",
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
            "fit": [
              "a-p"
            ],
            "move": "cut",
            "zoom": 1.2
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "a-p",
            "t": "box",
            "x": 60,
            "y": 140,
            "w": 760,
            "h": 400,
            "at": "l1:practice",
            "stroke": 5
          },
          {
            "id": "a-r0",
            "t": "text",
            "text": "Hotel: Benton",
            "x": 100,
            "y": 170,
            "size": 54,
            "at": "l1:practice"
          },
          {
            "id": "a-m0",
            "t": "text",
            "text": "✗",
            "x": 700,
            "y": 160,
            "size": 72,
            "at": "l1:crosses",
            "color": "coral"
          },
          {
            "id": "a-r1",
            "t": "text",
            "text": "Room: 30",
            "x": 100,
            "y": 290,
            "size": 54,
            "at": "l2:Thirty"
          },
          {
            "id": "a-m1",
            "t": "text",
            "text": "✗",
            "x": 700,
            "y": 280,
            "size": 72,
            "at": "l1:crosses+300",
            "color": "coral"
          },
          {
            "id": "a-r2",
            "t": "text",
            "text": "Class: every Monday",
            "x": 100,
            "y": 410,
            "size": 54,
            "at": "l2:Every"
          },
          {
            "id": "a-m2",
            "t": "text",
            "text": "✗",
            "x": 700,
            "y": 400,
            "size": 72,
            "at": "l1:crosses+600",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A marked practice sheet. Three boxes, three red crosses.",
          "sub": "Một tờ đề luyện đã chấm. Ba ô, ba dấu gạch đỏ.",
          "keys": [
            "ba dấu gạch đỏ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Benton. Thirty. Every Monday.",
          "sub": "Benton. Ba mươi. Every Monday."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And the owner swears he heard every word clearly.",
          "sub": "Vậy mà chủ nhân thề là nghe rõ từng chữ.",
          "keys": [
            "nghe rõ từng chữ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 200
        }
      ],
      "ref": "intro,p11"
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
              "set": "meeting",
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
                "memo",
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
            "at": "l1",
            "caption": "Tối thứ Ba 19:00 · lớp chữa đề",
            "icon": "memo"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Sai một li, đi một dặm”",
            "x": 60,
            "y": 600,
            "size": 56,
            "at": "l3:hair",
            "color": "accent",
            "hl": [
              {
                "text": "Sai một li",
                "at": "l3:hair"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "Sai 1 chữ cái = mất 1 điểm",
            "x": 100,
            "y": 690,
            "size": 44,
            "at": "l4:letter",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The owner: Dũng, twenty-one, biology student, the fastest pen in Sam's evening class.",
          "sub": "Chủ nhân: Dũng, 21 tuổi, sinh viên sinh học, cây bút nhanh nhất lớp tối của Sam.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I heard them all! So why are they all wrong?",
          "sub": "Em nghe rõ hết mà! Sao sai cả ba?",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents say: a hair's breadth off, a mile astray.",
          "sub": "Ông bà nói: “Sai một li, đi một dặm.”",
          "keys": [
            "Sai một li, đi một dặm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "In form completion, one letter off, one mark gone.",
          "sub": "Ở dạng điền form, sai một chữ cái là đi một điểm.",
          "keys": [
            "đi một điểm"
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
      "ref": "intro,p13"
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
            "text": "Nghe rõ mà vẫn sai?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:clear",
            "hl": [
              {
                "text": "vẫn sai",
                "at": "l1:wrong"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Form · ghi chú · bảng · lưu đồ",
            "x": 2028,
            "y": 170,
            "size": 46,
            "at": "l2:form"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "= khung tóm ý chính",
            "x": 2068,
            "y": 245,
            "size": 46,
            "at": "l2:outline",
            "color": "muted"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Bắt ý người nghe hay ghi lại",
            "x": 2028,
            "y": 330,
            "size": 44,
            "at": "l3:write down",
            "hl": [
              {
                "text": "ý",
                "at": "l3:key points"
              }
            ]
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "Phần 1: tên, ngày, giá, địa chỉ",
            "x": 2028,
            "y": 415,
            "size": 42,
            "at": "l4:Part one",
            "color": "coral"
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
          "say": "So why does a clear ear still write a wrong answer?",
          "sub": "Vậy vì sao tai nghe rõ mà tay vẫn ghi sai?",
          "keys": [
            "tay vẫn ghi sai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "First, the task. IELTS dot org: you fill gaps in an outline, a form, notes, a table or a flowchart.",
          "sub": "Trước hết, dạng bài. Theo IELTS.org: điền chỗ trống trong một khung tóm ý, như tờ đơn, ghi chú, bảng hay lưu đồ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It checks whether you catch the key points any listener would write down.",
          "sub": "Dạng này kiểm tra bạn có bắt được những ý chính mà người nghe bình thường sẽ ghi lại."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Part one loves it. Names, dates, times, prices, addresses.",
          "sub": "Phần 1 rất hay dùng dạng này: tên, ngày, giờ, giá tiền, địa chỉ.",
          "keys": [
            "Phần 1"
          ]
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
            "text": "Năm việc, năm chặng:",
            "x": 2928,
            "y": 160,
            "size": 50,
            "at": "l1:Five",
            "color": "accent"
          },
          {
            "id": "b-f0",
            "t": "text",
            "text": "1. Đoán loại",
            "x": 2928,
            "y": 240,
            "size": 46,
            "at": "l1:predict"
          },
          {
            "id": "b-f1",
            "t": "text",
            "text": "2. Giới hạn từ",
            "x": 2928,
            "y": 320,
            "size": 46,
            "at": "l1:limit"
          },
          {
            "id": "b-f2",
            "t": "text",
            "text": "3. Chữ cái, số",
            "x": 2928,
            "y": 400,
            "size": 46,
            "at": "l2:letters"
          },
          {
            "id": "b-f3",
            "t": "text",
            "text": "4. Số nhiều, chính tả",
            "x": 2928,
            "y": 480,
            "size": 46,
            "at": "l2:plurals"
          },
          {
            "id": "b-f4",
            "t": "text",
            "text": "5. Nghe hết ý",
            "x": 2928,
            "y": 560,
            "size": 46,
            "at": "l3:end"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Five fixes for tonight. Predict the type, respect the word limit,",
          "sub": "Năm việc cho tối nay. Đoán loại thông tin, giữ giới hạn từ,",
          "keys": [
            "Năm việc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "train letters and numbers, remember plurals and spelling,",
          "sub": "luyện chữ cái và số, nhớ số nhiều và chính tả,"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "and listen to the end, because speakers correct themselves.",
          "sub": "và nghe hết ý, vì người nói hay tự sửa.",
          "keys": [
            "nghe hết ý"
          ]
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
            "at": "l6:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 19:15 · Đoán loại",
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
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
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
                "laptop"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Sam",
            "caption": "19:15 · đơn câu lạc bộ thể thao",
            "icon": "memo"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Surname: ____ → tên riêng",
            "x": 3996,
            "y": 170,
            "size": 44,
            "at": "l4:Surname",
            "hl": [
              {
                "text": "tên riêng",
                "at": "l4:name"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Start date: ____ → ngày",
            "x": 3996,
            "y": 245,
            "size": 44,
            "at": "l4:date"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Bring a ____ photo → loại ảnh",
            "x": 3996,
            "y": 320,
            "size": 44,
            "at": "l4:photo"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, seven fifteen. Meet Sam, the native-speaker teacher, who reads practice clips like a real tape.",
          "sub": "Chặng một, 19 giờ 15. Đây là Sam, cô giáo bản ngữ, đọc đoạn luyện y như băng thật.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And Thảo, Dũng's cousin, twenty-seven, who never writes before she's sure.",
          "sub": "Và Thảo, chị họ Dũng, 27 tuổi, chưa chắc thì chưa ghi.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "A sports club form. Three gaps. Before the clip, I label them.",
          "sub": "Đơn câu lạc bộ thể thao, ba chỗ trống. Trước khi nghe, mình dán nhãn.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Surname: a name, maybe spelled out. Start date: a date. Bring a blank photo: what kind of photo.",
          "sub": "Surname: tên riêng, có thể được đánh vần. Start date: ngày tháng. Bring a ____ photo: loại ảnh gì."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "sam",
          "say": "And please bring a passport-sized photo.",
          "sub": "Và nhớ mang theo một ảnh cỡ hộ chiếu.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Passport-sized. I heard it!",
          "sub": "Passport-sized. Nghe ra rồi!",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p2,p3"
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
            "id": "c-4",
            "t": "text",
            "text": "Chữ quanh ô là gợi ý:",
            "x": 3996,
            "y": 420,
            "size": 48,
            "at": "l1:words",
            "color": "accent"
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "£ ____ → tiền",
            "x": 4036,
            "y": 495,
            "size": 44,
            "at": "l2:pound"
          },
          {
            "id": "c-6",
            "t": "text",
            "text": "Postcode: ____ → chữ + số",
            "x": 4036,
            "y": 560,
            "size": 44,
            "at": "l2:Postcode"
          },
          {
            "id": "c-7",
            "t": "text",
            "text": "a ____ → danh từ số ít",
            "x": 4036,
            "y": 625,
            "size": 44,
            "at": "l3:singular",
            "hl": [
              {
                "text": "số ít",
                "at": "l3:singular"
              }
            ]
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Đoán loại → tai biết bắt gì",
            "x": 4836,
            "y": 695,
            "size": 46,
            "at": "l4:ears",
            "color": "accent",
            "hl": [
              {
                "text": "tai biết bắt gì",
                "at": "l4:catch"
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
          "say": "IDP's tip: the words around the gap are clues.",
          "sub": "Mẹo của IDP: chữ đứng trước và sau chỗ trống chính là gợi ý.",
          "keys": [
            "gợi ý"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After a pound sign comes money. After postcode, letters and numbers.",
          "sub": "Sau dấu bảng Anh là tiền. Sau Postcode là chữ và số."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "After a, a singular noun.",
          "sub": "Sau a là một danh từ số ít."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Predict the type first, so your ears know what to catch. A fishing net with the right holes.",
          "sub": "Đoán loại thông tin trước, để tai biết phải bắt gì. Như lưới đánh cá đúng cỡ mắt.",
          "keys": [
            "tai biết phải bắt gì"
          ]
        }
      ],
      "ref": "p2,p4"
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
            "text": "② 19:40 · Giới hạn từ",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "NO MORE THAN TWO WORDS",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l1:no more",
            "hl": [
              {
                "text": "TWO WORDS",
                "at": "l1:two"
              }
            ]
          },
          {
            "id": "d-1b",
            "t": "text",
            "text": "AND/OR A NUMBER",
            "x": 5964,
            "y": 240,
            "size": 50,
            "at": "l1:number"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Quá số từ → mất điểm",
            "x": 5964,
            "y": 330,
            "size": 52,
            "at": "l2:over",
            "color": "coral",
            "hl": [
              {
                "text": "mất điểm",
                "at": "l2:lose"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "1 từ: “the bus” ✗",
            "x": 5964,
            "y": 420,
            "size": 50,
            "at": "l3:bus",
            "color": "muted"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "the cũng là một từ",
            "x": 6004,
            "y": 500,
            "size": 44,
            "at": "l3:the"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, seven forty. Every set of gaps has a line like: no more than two words and, or, a number.",
          "sub": "Chặng hai, 19 giờ 40. Mỗi bộ câu điền từ có một dòng như: không quá hai từ và, hoặc, một số."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "IELTS dot org and IDP agree: go over the limit, and you lose the mark.",
          "sub": "IELTS.org và IDP đều ghi: viết quá số từ là mất điểm câu đó.",
          "keys": [
            "mất điểm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "IDP's example: one word allowed, you write the bus. Wrong. The is a word too.",
          "sub": "Ví dụ của IDP: đề cho một từ, bạn ghi “the bus”. Sai, vì “the” cũng là một từ.",
          "keys": [
            "“the” cũng là một từ"
          ]
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s07",
      "module": "DLG-01",
      "data": {
        "set": "meeting",
        "label": "19:45 · ô một từ",
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
          "label": "Chép lại chữ đã in sẵn",
          "why": "Ô một từ mà ghi “every Monday”: thừa một từ, mất điểm dù nghe đúng.",
          "rule": "Chỉ viết phần còn thiếu"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "sam",
          "say": "Classes are every blank. One word only.",
          "sub": "Đề ghi: classes are every ____. Chỉ một từ.",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Easy. Every Monday!",
          "sub": "Dễ ợt. Every Monday!",
          "face": "happy",
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
          "say": "Every is already printed. Two words in a one-word gap: no mark, even if he heard it right.",
          "sub": "Chữ every đã in sẵn. Hai từ cho ô một từ: mất điểm, dù nghe đúng.",
          "keys": [
            "mất điểm, dù nghe đúng"
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
          "say": "Just the missing part. Monday.",
          "sub": "Chỉ phần còn thiếu thôi. Monday.",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "One gap, one word, one mark.",
          "sub": "Một ô, một từ, một điểm.",
          "phase": "redo",
          "keys": [
            "một điểm"
          ]
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
            "id": "d-5",
            "t": "text",
            "text": "check-in = 1 từ",
            "x": 6864,
            "y": 170,
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
            "id": "d-6",
            "t": "text",
            "text": "don't, they're: không kiểm tra",
            "x": 6864,
            "y": 255,
            "size": 44,
            "at": "l2:tested"
          },
          {
            "id": "d-7",
            "t": "text",
            "text": "every Monday ✗ → Monday ✓",
            "x": 6864,
            "y": 345,
            "size": 46,
            "at": "l3:wrong",
            "hl": [
              {
                "text": "Monday ✓",
                "at": "l3:content"
              }
            ]
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Đọc giới hạn trước",
            "x": 5964,
            "y": 600,
            "size": 52,
            "at": "l4:Read",
            "color": "accent",
            "hl": [
              {
                "text": "giới hạn",
                "at": "l4:limit"
              }
            ]
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "Chỉ viết phần còn thiếu",
            "x": 5964,
            "y": 680,
            "size": 52,
            "at": "l4:missing",
            "color": "accent",
            "hl": [
              {
                "text": "phần còn thiếu",
                "at": "l4:missing"
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
          "say": "Two things help you count. A hyphenated word like check-in counts as one.",
          "sub": "Hai điều giúp đếm cho đúng. Từ có gạch nối như check-in tính là một từ.",
          "keys": [
            "một từ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Contractions like don't and they're are not tested. No headache there.",
          "sub": "Dạng viết tắt như don't, they're không được đưa vào kiểm tra. Khỏi đau đầu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The myth: write a bit more to be safe. IDP says extra words make it wrong, even when the content is right.",
          "sub": "Ngộ nhận: viết dài chút cho chắc. IDP ghi rõ: viết thêm từ là sai, kể cả khi nội dung đúng.",
          "keys": [
            "viết thêm từ là sai"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So read the limit first, and write only the missing part.",
          "sub": "Vậy hãy đọc giới hạn từ trước, và chỉ viết phần còn thiếu.",
          "keys": [
            "chỉ viết phần còn thiếu"
          ]
        }
      ],
      "ref": "p6,p7,p8"
    },
    {
      "id": "s09",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Chỉ viết phần còn thiếu",
        "hl": "phần còn thiếu",
        "sub": "Chữ đã in sẵn, đừng chép lại"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Write only what's missing.",
          "sub": "Chỉ viết phần còn thiếu.",
          "keys": [
            "phần còn thiếu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "If it's printed, don't copy it.",
          "sub": "Chữ đã in sẵn, đừng chép lại."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
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
            "id": "e-t",
            "t": "text",
            "text": "③ 20:10 · Chữ cái và số",
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
                  "id": "sam",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
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
            "at": "l1:Sam",
            "caption": "20:10 · Sam đánh vần",
            "icon": "headphone"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Benton ✗ → Denton ✓",
            "x": 7932,
            "y": 165,
            "size": 54,
            "at": "l4:Denton",
            "hl": [
              {
                "text": "Denton",
                "at": "l4:Denton"
              }
            ]
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "m / n · t / d · b / d",
            "x": 7932,
            "y": 250,
            "size": 46,
            "at": "l5:m and n",
            "color": "coral"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "z: giọng Anh ≠ giọng Mỹ",
            "x": 7932,
            "y": 320,
            "size": 42,
            "at": "l6:z"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, ten past eight. Sam spells a hotel name.",
          "sub": "Chặng ba, 20 giờ 10. Sam đánh vần tên một khách sạn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "The hotel is Denton. D, E, N, T, O, N.",
          "sub": "Khách sạn tên Denton. D, E, N, T, O, N.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Benton. Got it!",
          "sub": "Benton. Xong!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Benton again. The answer is Denton.",
          "sub": "Lại Benton. Đáp án là Denton.",
          "keys": [
            "Denton"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "IDP lists the look-alike sounds: m and n, t and d. Learn the English letter names cold.",
          "sub": "IDP chỉ ra những cặp dễ nhầm: m với n, t với d. Thuộc làu tên chữ cái tiếng Anh.",
          "keys": [
            "Thuộc làu tên chữ cái"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And z sounds different in British and American English. Hear both.",
          "sub": "Còn z thì giọng Anh, giọng Mỹ đọc khác nhau. Nghe cả hai."
        }
      ],
      "ref": "p9,p11"
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
          }
        ],
        "items": [
          {
            "id": "e-4",
            "t": "text",
            "text": "thirteen ≠ thirty",
            "x": 7932,
            "y": 395,
            "size": 50,
            "at": "l1:thirteen",
            "color": "coral",
            "hl": [
              {
                "text": "≠",
                "at": "l1:thirty"
              }
            ]
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "7:45pm = seven forty-five",
            "x": 7932,
            "y": 470,
            "size": 40,
            "at": "l2:seven forty-five"
          },
          {
            "id": "e-6",
            "t": "text",
            "text": "= quarter to eight = 19:45",
            "x": 7972,
            "y": 530,
            "size": 40,
            "at": "l2:quarter"
          },
          {
            "id": "e-7",
            "t": "text",
            "text": "five fifty = five dollars fifty",
            "x": 7932,
            "y": 595,
            "size": 40,
            "at": "l3:five fifty"
          },
          {
            "id": "e-8",
            "t": "text",
            "text": "Chữ số: ngắn, ít sai",
            "x": 8772,
            "y": 700,
            "size": 40,
            "at": "l4:digits",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Numbers have traps too. IDP warns about thirteen and thirty.",
          "sub": "Con số cũng có bẫy. IDP nhắc cặp thirteen và thirty.",
          "keys": [
            "thirteen và thirty"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One time, many voices: seven forty-five, quarter to eight, nineteen forty-five.",
          "sub": "Một giờ, nhiều cách đọc: seven forty-five, quarter to eight, hay 19:45."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One price, many voices: five dollars fifty, five dollars and fifty cents, or just five fifty.",
          "sub": "Một giá, nhiều cách đọc: five dollars fifty, five dollars and fifty cents, hay chỉ five fifty."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Numbers in words are accepted. But digits are shorter, and harder to misspell.",
          "sub": "Viết số bằng chữ được chấp nhận. Nhưng chữ số ngắn hơn, khó sai chính tả hơn.",
          "keys": [
            "chữ số ngắn hơn"
          ]
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s12",
      "module": "BRK-04",
      "data": {
        "title": "Dũng luyện tai",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Benton, phòng thirty: nghe rõ mà sai",
        "right": "Mỗi ngày 5 phút: chữ cái ngẫu nhiên, cặp -teen, -ty",
        "wrongIllus": "cross-mark",
        "rightIllus": "headphone"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: Benton, and thirty for thirteen.",
          "sub": "Trước: Benton, thirty thay vì thirteen."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: five minutes a day of letters and numbers.",
          "sub": "Sau: mỗi ngày năm phút chữ cái và số.",
          "keys": [
            "mỗi ngày năm phút"
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
            "at": "l3",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-10",
            "t": "text",
            "text": "Trọng âm cuối: thirTEEN",
            "x": 7932,
            "y": 660,
            "size": 40,
            "at": "l3",
            "hl": [
              {
                "text": "thirTEEN",
                "at": "l3:trained"
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
          "say": "Dũng's new habit: five minutes a day, a friend reads random letters and teen and ty numbers, he writes them down.",
          "sub": "Thói quen mới của Dũng: mỗi ngày năm phút, nhờ bạn đọc chữ cái ngẫu nhiên và số đuôi -teen, -ty, rồi tự ghi lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Stress at the end: thirTEEN. And b or d? I ask myself before typing.",
          "sub": "Trọng âm cuối: thirTEEN. Còn b hay d? Hỏi lại mình trước khi gõ.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Letters and numbers can be trained daily. Don't meet them for the first time on test day.",
          "sub": "Chữ cái và cách đọc số luyện được mỗi ngày. Đừng để hôm thi mới gặp.",
          "keys": [
            "luyện được mỗi ngày"
          ]
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s14",
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
            "text": "④ 20:40 · Số nhiều, chính tả",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Sai chính tả → sai",
            "x": 60,
            "y": 1260,
            "size": 56,
            "at": "l1:spelling",
            "color": "coral",
            "hl": [
              {
                "text": "→ sai",
                "at": "l1:wrong"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "two / several ____ → thêm s",
            "x": 60,
            "y": 1360,
            "size": 48,
            "at": "l3:several",
            "hl": [
              {
                "text": "thêm s",
                "at": "l3:s"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "IDP: quên số nhiều, sai thì",
            "x": 60,
            "y": 1450,
            "size": 40,
            "at": "l2:plurals",
            "color": "muted"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: IDP — Commonly used difficult words in IELTS Listening",
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
          "say": "Stop four, twenty to nine. IDP is clear: a spelling mistake makes the answer wrong.",
          "sub": "Chặng bốn, 20 giờ 40. IDP ghi rõ: sai chính tả thì đáp án bị tính sai.",
          "keys": [
            "sai chính tả"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "On their list of mistakes: forgetting plurals, and using the wrong tense.",
          "sub": "Trong danh sách lỗi cần tránh còn có quên số nhiều và dùng sai thì."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So look around the gap. Two, or several, before it? The noun needs an s.",
          "sub": "Nên hãy nhìn quanh chỗ trống. Trước đó có two hay several? Danh từ cần thêm s.",
          "keys": [
            "cần thêm s"
          ]
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s15",
      "module": "BRK-06",
      "data": {
        "title": "Từ hay viết sai (IDP)",
        "items": [
          {
            "illus": "books",
            "text": "library"
          },
          {
            "illus": "leaf-fluttering-in-wind",
            "text": "environment"
          },
          {
            "illus": "spiral-calendar",
            "text": "February"
          },
          {
            "illus": "tear-off-calendar",
            "text": "Wednesday"
          },
          {
            "illus": "house",
            "text": "neighbour"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Library, environment, February, Wednesday, neighbour.",
          "sub": "Library, environment, February, Wednesday, neighbour."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "All on IDP's list of words people often misspell.",
          "sub": "Đều có trong danh sách từ hay viết sai của IDP.",
          "keys": [
            "từ hay viết sai"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
            "fit": "F",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "f-4",
            "t": "text",
            "text": "enviroment ✗",
            "x": 960,
            "y": 1260,
            "size": 50,
            "at": "l1:silent",
            "color": "muted"
          },
          {
            "id": "f-4x",
            "t": "strike",
            "over": "f-4",
            "at": "l1:missing"
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "environment ✓ (âm câm)",
            "x": 960,
            "y": 1335,
            "size": 46,
            "at": "l1:missing",
            "color": "accent"
          },
          {
            "id": "f-6",
            "t": "text",
            "text": "begin → beginning",
            "x": 960,
            "y": 1420,
            "size": 50,
            "at": "l2:beginning",
            "hl": [
              {
                "text": "beginning",
                "at": "l2:beginning"
              }
            ]
          },
          {
            "id": "f-7",
            "t": "text",
            "text": "Viết → soát → lặp lại",
            "x": 960,
            "y": 1520,
            "size": 50,
            "at": "l3:repeat",
            "color": "accent",
            "hl": [
              {
                "text": "lặp lại",
                "at": "l3:repeat"
              }
            ]
          },
          {
            "id": "f-8",
            "t": "text",
            "text": "thứ, tháng, nơi chốn",
            "x": 1000,
            "y": 1600,
            "size": 42,
            "at": "l4:days"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Danh sách từ hay sai của mình",
            "x": 960,
            "y": 1700,
            "size": 42,
            "at": "l5:own list",
            "color": "coral",
            "hl": [
              {
                "text": "của mình",
                "at": "l5:own"
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
          "say": "Some errors hide a silent letter: enviroment, missing its n.",
          "sub": "Có lỗi do âm câm: viết enviroment, thiếu mất chữ n."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Others change form: begin becomes beginning, with a double n.",
          "sub": "Có lỗi do đổi dạng từ: begin thành beginning, nhân đôi chữ n."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "IDP's drill: write the hard words, check them with a spell checker, repeat until it's automatic.",
          "sub": "Cách luyện của IDP: viết từ khó, soát bằng công cụ chính tả, lặp lại tới khi viết đúng không cần nghĩ.",
          "keys": [
            "lặp lại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Start with days, months and places. Easy marks, kept safe.",
          "sub": "Bắt đầu với thứ, tháng, các loại địa điểm. Giữ chắc những điểm dễ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Every spelling slip is a mark lost for nothing. Keep your own list.",
          "sub": "Mỗi lỗi chính tả là một điểm mất oan. Hãy lập danh sách từ hay sai của riêng mình.",
          "keys": [
            "danh sách từ hay sai"
          ]
        }
      ],
      "ref": "p14,p15,p16"
    },
    {
      "id": "s17",
      "module": "BRK-07",
      "data": {
        "question": "Nghe đúng, viết đúng, vẫn có thể sai?",
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
          "say": "Heard right, spelled right, and still wrong?",
          "sub": "Nghe đúng, viết đúng, mà vẫn sai?",
          "keys": [
            "vẫn sai"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p17"
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
            "at": "l5",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 21:00 · Bẫy tự sửa",
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
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "center",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "bicycle"
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
                  "shot": "E-SHOT-06",
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
            "at": "l1:clip",
            "caption": "21:00 · Collect the bike at the ____",
            "icon": "bicycle"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "north gate ✗",
            "x": 2028,
            "y": 1260,
            "size": 56,
            "at": "l5:north",
            "color": "muted"
          },
          {
            "id": "g-1x",
            "t": "strike",
            "over": "g-1",
            "at": "l5:cancelled"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "car park ✓",
            "x": 2028,
            "y": 1355,
            "size": 60,
            "at": "l5:car park",
            "color": "accent",
            "hl": [
              {
                "text": "car park",
                "at": "l5:car park"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "actually · instead → đáp án đứng sau",
            "x": 2028,
            "y": 1455,
            "size": 40,
            "at": "l6:actually",
            "color": "coral",
            "hl": [
              {
                "text": "actually",
                "at": "l6:actually"
              },
              {
                "text": "instead",
                "at": "l6:instead"
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
          "say": "Stop five, nine p.m. The last clip. Gap: collect the bike at the blank.",
          "sub": "Chặng năm, 21 giờ. Đoạn luyện cuối. Chỗ trống: collect the bike at the ____."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "You can pick it up at the north gate. Oh, actually, that's closed this month, so it'll be the car park instead.",
          "sub": "Có thể lấy xe ở cổng bắc. À, thật ra tháng này cổng đó đóng, nên sẽ là bãi đỗ xe.",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "North gate. Typed it already!",
          "sub": "North gate. Gõ xong rồi!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Wait. Actually... instead. The answer moved.",
          "sub": "Khoan. Actually… instead. Đáp án dời chỗ rồi.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The north gate was cancelled. The answer is car park.",
          "sub": "Cổng bắc đã bị huỷ. Đáp án là car park.",
          "keys": [
            "car park"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Actually and instead are the signal: the real answer comes after.",
          "sub": "Actually và instead là tín hiệu: đáp án thật đứng phía sau.",
          "keys": [
            "đáp án thật đứng phía sau"
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
            "id": "g-4",
            "t": "text",
            "text": "Bẫy đáp án: trông giống, chưa phải",
            "x": 2028,
            "y": 1560,
            "size": 40,
            "at": "l1:distractor",
            "hl": [
              {
                "text": "Bẫy đáp án",
                "at": "l1:distractor"
              }
            ]
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "Người nói tự sửa · người kia sửa",
            "x": 2028,
            "y": 1635,
            "size": 40,
            "at": "l2:changes"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Ghi nháp → hết ý → mới chốt",
            "x": 2028,
            "y": 1730,
            "size": 50,
            "at": "l3:finish",
            "color": "accent",
            "hl": [
              {
                "text": "mới chốt",
                "at": "l3:lock"
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
          "say": "IDP calls it a distractor: information that looks like the answer, to test if you hear the whole message.",
          "sub": "IDP gọi đây là bẫy đáp án: thông tin trông như đáp án, để thử bạn nghe trọn ý hay chỉ bắt từ khoá.",
          "keys": [
            "bẫy đáp án"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sometimes the speaker changes their mind. Sometimes the other person corrects them.",
          "sub": "Có khi chính người nói đổi ý, có khi người kia sửa lại."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So note a likely answer, but wait for the speaker to finish before you lock it in.",
          "sub": "Nên nghe thấy đáp án hợp lý thì ghi nháp, chờ người nói hết ý rồi mới chốt.",
          "keys": [
            "hết ý rồi mới chốt"
          ]
        }
      ],
      "ref": "p17,p19"
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
            "text": "⑥ 21:20 · Ba phút soát",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six",
            "hl": [
              {
                "text": "Ba phút",
                "at": "l1:three minutes"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: IDP Việt Nam — IELTS trên máy tính: 3 phút kiểm tra lại",
            "x": 3996,
            "y": 1215,
            "size": 28,
            "at": "l1",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1290,
            "w": 44,
            "h": 44,
            "at": "l3:limit",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1272,
            "size": 56,
            "at": "l3:limit+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Ô nào vượt số từ?",
            "x": 4061,
            "y": 1282,
            "size": 46,
            "at": "l3:limit+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1380,
            "w": 44,
            "h": 44,
            "at": "l3:printed",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1362,
            "size": 56,
            "at": "l3:printed+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Có chép chữ in sẵn?",
            "x": 4061,
            "y": 1372,
            "size": 46,
            "at": "l3:printed+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1470,
            "w": 44,
            "h": 44,
            "at": "l4:plural",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1452,
            "size": 56,
            "at": "l4:plural+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Danh từ cần số nhiều?",
            "x": 4061,
            "y": 1462,
            "size": 46,
            "at": "l4:plural+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1560,
            "w": 44,
            "h": 44,
            "at": "l4:name",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1542,
            "size": 56,
            "at": "l4:name+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Tên riêng đúng từng chữ?",
            "x": 4061,
            "y": 1552,
            "size": 46,
            "at": "l4:name+200"
          },
          {
            "id": "h-c4",
            "t": "box",
            "x": 3996,
            "y": 1650,
            "w": 44,
            "h": 44,
            "at": "l5:empty",
            "stroke": 5
          },
          {
            "id": "h-k4",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1632,
            "size": 56,
            "at": "l5:empty+600",
            "color": "accent"
          },
          {
            "id": "h-l4",
            "t": "text",
            "text": "Còn ô nào trống?",
            "x": 4061,
            "y": 1642,
            "size": 46,
            "at": "l5:empty+200"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Không trừ điểm → đoán, đừng bỏ trống",
            "x": 4836,
            "y": 1720,
            "size": 40,
            "at": "l5:guess",
            "color": "coral",
            "hl": [
              {
                "text": "đừng bỏ trống",
                "at": "l5:empty"
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
          "say": "Stop six, twenty past nine. On the computer test, IDP Vietnam says you get three minutes to check.",
          "sub": "Chặng sáu, 21 giờ 20. Thi trên máy, theo IDP Việt Nam, bạn có ba phút kiểm tra lại.",
          "keys": [
            "ba phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sam hands out a five-line checklist.",
          "sub": "Sam phát một danh sách soát năm dòng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Any box over the limit? Any printed words copied?",
          "sub": "Có ô nào vượt số từ? Có chép lại chữ in sẵn không?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Does a noun need a plural? Is every name right, letter by letter?",
          "sub": "Danh từ có cần số nhiều? Tên riêng có đúng từng chữ?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Any box still empty? Write a sensible guess. Wrong answers lose nothing.",
          "sub": "Còn ô nào trống? Đoán một đáp án hợp lý. Câu sai không bị trừ điểm.",
          "keys": [
            "Câu sai không bị trừ điểm"
          ]
        }
      ],
      "ref": "p20,p21"
    },
    {
      "id": "s21",
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
            "text": "21:30 · Tờ đề ấy",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:sheet"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "thumb",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "memo"
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
            "at": "l1:same",
            "caption": "21:30 · cùng tờ đề, cùng lớp",
            "icon": "memo"
          },
          {
            "id": "i-p",
            "t": "box",
            "x": 5964,
            "y": 1240,
            "w": 780,
            "h": 380,
            "at": "l1:sheet",
            "stroke": 5
          },
          {
            "id": "i-r0",
            "t": "text",
            "text": "Hotel: Denton",
            "x": 6004,
            "y": 1270,
            "size": 54,
            "at": "l2:Denton"
          },
          {
            "id": "i-m0",
            "t": "text",
            "text": "✓",
            "x": 6604,
            "y": 1260,
            "size": 72,
            "at": "l2:Denton+300",
            "color": "accent"
          },
          {
            "id": "i-r1",
            "t": "text",
            "text": "Room: 13",
            "x": 6004,
            "y": 1390,
            "size": 54,
            "at": "l2:Thirteen"
          },
          {
            "id": "i-m1",
            "t": "text",
            "text": "✓",
            "x": 6604,
            "y": 1380,
            "size": 72,
            "at": "l2:Thirteen+300",
            "color": "accent"
          },
          {
            "id": "i-r2",
            "t": "text",
            "text": "Class: Monday",
            "x": 6004,
            "y": 1510,
            "size": 54,
            "at": "l2:Monday"
          },
          {
            "id": "i-m2",
            "t": "text",
            "text": "✓",
            "x": 6604,
            "y": 1500,
            "size": 72,
            "at": "l2:Monday+300",
            "color": "accent"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Sai một li…” → đúng từng li",
            "x": 5964,
            "y": 1700,
            "size": 50,
            "at": "l4:hair",
            "color": "accent",
            "hl": [
              {
                "text": "đúng từng li",
                "at": "l4:exact"
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
          "say": "Nine thirty. Same class, same sheet, a fresh try.",
          "sub": "21 giờ 30. Vẫn lớp ấy, tờ đề ấy, làm lại một lượt."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Denton, with a D. Thirteen, stress at the end. And just Monday.",
          "sub": "Denton, chữ D. Thirteen, trọng âm cuối. Và chỉ Monday thôi.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three crosses become three ticks. Same ears, better habits.",
          "sub": "Ba dấu gạch thành ba dấu tích. Vẫn đôi tai ấy, chỉ khác thói quen.",
          "keys": [
            "ba dấu tích"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A hair's breadth off, a mile astray. Tonight, Dũng is exact to the hair.",
          "sub": "“Sai một li, đi một dặm.” Tối nay, Dũng đúng đến từng li.",
          "keys": [
            "đúng đến từng li"
          ]
        }
      ],
      "ref": "p11,p7"
    },
    {
      "id": "s22",
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
            "at": "l2:Respect",
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
            "text": "Tóm lại: dễ lấy, dễ mất",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:So"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Đoán loại · giới hạn từ",
            "x": 7932,
            "y": 1280,
            "size": 50,
            "at": "l1:form"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Chữ cái, số · số nhiều, chính tả",
            "x": 7932,
            "y": 1370,
            "size": 44,
            "at": "l1:easiest"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Nghe hết ý rồi mới chốt",
            "x": 7932,
            "y": 1460,
            "size": 50,
            "at": "l1:win",
            "color": "accent"
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Bài tiếp: trắc nghiệm",
            "x": 7932,
            "y": 1570,
            "size": 50,
            "at": "l5:Next",
            "color": "accent"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4696,
            "y": 170,
            "at": "l2:type"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6664,
            "y": 330,
            "at": "l2:limit"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 8632,
            "y": 165,
            "at": "l3:numbers"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 2728,
            "y": 1355,
            "at": "l4:end"
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
          "say": "So: form completion is the easiest place to win marks, and to lose them for nothing.",
          "sub": "Tóm lại: điền form là chỗ dễ lấy điểm nhất, cũng là chỗ dễ mất điểm oan nhất.",
          "keys": [
            "dễ mất điểm oan nhất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Predict the type. Respect the word limit.",
          "sub": "Đoán loại thông tin. Giữ giới hạn từ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Train letters and numbers. Remember plurals and spelling.",
          "sub": "Luyện chữ cái và số. Nhớ số nhiều và chính tả."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And listen to the end before you lock it in.",
          "sub": "Và nghe hết ý rồi mới chốt.",
          "keys": [
            "nghe hết ý"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next up: multiple choice, where the traps get sneakier.",
          "sub": "Bài tiếp theo: trắc nghiệm, nơi bẫy tinh vi hơn.",
          "keys": [
            "trắc nghiệm"
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
        "q": "Every is printed before a one word gap, what should you write?",
        "options": [
          "The full phrase every Monday, because that is what the speaker said",
          "Only the missing word, such as Monday, without copying every again",
          "The word every alone, since it was the first word you heard"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "memo",
        "why": "Chữ đã in sẵn không cần chép lại. Chép lại sẽ vượt giới hạn một từ."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Every is printed before a one word gap, what should you write?",
          "sub": "Chữ every đã in sẵn trước chỗ trống một từ, bạn nên viết gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Only the missing word, such as Monday, without copying every again.",
          "sub": "Chỉ viết phần còn thiếu, không chép lại chữ đã in sẵn."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Every is already on the page. Don't pay for it twice.",
          "sub": "Chữ every đã có trên đề. Đừng trả giá cho nó hai lần."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[13]"
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
          "say": "Predict, count, spell, wait. Now try the forty questions below.",
          "sub": "Đoán, đếm, đánh vần, chờ. Giờ thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT TỐI THỨ BA ở lớp chữa đề của Sam (19:00 tờ đề đã chấm → 19:15 đoán loại → 19:40 giới hạn từ + “Khoan đã!” every Monday → 20:10 chữ cái, số → 20:40 số nhiều, chính tả → 21:00 bẫy tự sửa north gate → 21:20 ba phút soát → 21:30 tờ đề sửa xong). Hook HOOK-23: tờ đề luyện của Dũng (Benton · 30 · every Monday — ba ô sai, đều lấy từ bài p7, p11), trở lại ở ô I với ba dấu tích. Nhân vật: Dũng (vai Khoa + Linh), Thảo (vai Trang), Sam (đọc đoạn luyện) — w145/_series/ielts-listening-takers.md. Cảnh ngắt nhịp: BRK-02 (chỉ viết phần còn thiếu), BRK-04 (trước–sau Dũng luyện tai), BRK-06 (từ hay viết sai của IDP), BRK-07 (rehook bẫy tự sửa). Ca dao: “Sai một li, đi một dặm”. Câu đố questions[13].",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
