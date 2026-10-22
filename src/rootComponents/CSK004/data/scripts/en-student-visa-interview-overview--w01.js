// en-student-visa-interview-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "en-student-visa-interview-overview--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "en-us-student-visa-applicants",
    "slug": "en-student-visa-interview-overview",
    "door": "ky-nang",
    "level": "B1",
    "title": "Phỏng vấn visa du học Mỹ diễn ra thế nào và cần chuẩn bị gì?",
    "series": "Phỏng vấn visa du học Mỹ — cho học sinh sinh viên, trả lời ngắn, thật và đủ giấy tờ"
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
              "a-env",
              "a-i20"
            ],
            "zoom": 1.5,
            "move": "cut"
          },
          {
            "at": "l2",
            "fit": "A",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "a-env",
            "t": "illus",
            "name": "envelope",
            "x": 70,
            "y": 90,
            "size": 210,
            "at": "l1:envelope"
          },
          {
            "id": "a-i20",
            "t": "text",
            "text": "I-20",
            "x": 320,
            "y": 80,
            "size": 150,
            "at": "l1:form",
            "color": "accent",
            "hl": [
              {
                "text": "I-20",
                "at": "l1:twenty"
              }
            ]
          },
          {
            "id": "a-ok",
            "t": "text",
            "text": "Đã được nhận ✓",
            "x": 80,
            "y": 330,
            "size": 56,
            "at": "l2:accepted"
          },
          {
            "id": "a-no",
            "t": "text",
            "text": "Có visa? Chưa!",
            "x": 80,
            "y": 420,
            "size": 56,
            "at": "l2:does not",
            "color": "coral",
            "hl": [
              {
                "text": "Chưa!",
                "at": "l2:visa"
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
          "say": "One envelope, one form: the I twenty, sent by an American school.",
          "sub": "Một phong bì, một tờ giấy: I-20, gửi từ một trường đại học Mỹ.",
          "keys": [
            "I-20"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It says: you are accepted. It does not say: you have a visa.",
          "sub": "Nó báo: bạn đã được nhận. Nó chưa báo: bạn có visa.",
          "keys": [
            "chưa báo: bạn có visa"
          ]
        }
      ],
      "beats": {
        "after": 200
      },
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 200
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
            "at": "l3",
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
            "y": 110,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "envelope"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
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
            "at": "l1",
            "caption": "Tối thứ Sáu · phong bì I-20 về",
            "icon": "envelope"
          },
          {
            "id": "a-bay",
            "t": "text",
            "text": "“Câu bẫy? Nói lắp là trượt?”",
            "x": 60,
            "y": 530,
            "size": 50,
            "at": "l3:trick",
            "color": "coral",
            "hl": [
              {
                "text": "Câu bẫy?",
                "at": "l3:trick"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Mài sắt có ngày nên kim”",
            "x": 60,
            "y": 630,
            "size": 50,
            "at": "l5:iron",
            "color": "accent",
            "hl": [
              {
                "text": "Mài sắt",
                "at": "l5:iron"
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
          "say": "Meet Lan, just out of high school, holding that envelope like a winning lottery ticket.",
          "sub": "Đây là Lan, vừa xong cấp ba, cầm phong bì như cầm vé số trúng giải.",
          "keys": [
            "vé số trúng giải"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Cô Hoa, her mum, already worrying for two.",
          "sub": "Còn đây là cô Hoa, mẹ Lan, đã kịp lo thay cho cả hai mẹ con."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "People say the officer asks trick questions. One stutter and you fail!",
          "sub": "Người ta bảo viên chức hay hỏi câu bẫy. Nói lắp một câu là trượt!",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Mum, now I'm scared too.",
          "sub": "Mẹ ơi, giờ con cũng sợ rồi.",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Grandma would say: keep grinding an iron bar, one day it becomes a needle.",
          "sub": "Ông bà dặn: “Có công mài sắt, có ngày nên kim.”",
          "keys": [
            "Có công mài sắt"
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
            "text": "Phỏng vấn visa diễn ra thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:really",
            "hl": [
              {
                "text": "thế nào",
                "at": "l1:work"
              }
            ]
          },
          {
            "id": "b-min",
            "t": "text",
            "text": "Thường chỉ vài phút",
            "x": 2028,
            "y": 170,
            "size": 56,
            "at": "l2:few minutes",
            "color": "accent",
            "hl": [
              {
                "text": "vài phút",
                "at": "l2:minutes"
              }
            ]
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Trường · Tài chính · Kế hoạch",
            "x": 2028,
            "y": 265,
            "size": 54,
            "at": "l3:three",
            "hl": [
              {
                "text": "Tài chính",
                "at": "l3:money"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: gameshow câu bẫy",
            "x": 2928,
            "y": 170,
            "size": 48,
            "at": "l4:quiz show",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l4:traps"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: hiểu hồ sơ của mình",
            "x": 2928,
            "y": 255,
            "size": 48,
            "at": "l4:own file",
            "color": "accent",
            "hl": [
              {
                "text": "hồ sơ của mình",
                "at": "l4:own file"
              }
            ]
          },
          {
            "id": "b-do",
            "t": "text",
            "text": "Đủ giấy · ngắn · thật · tiếng Anh",
            "x": 2028,
            "y": 360,
            "size": 50,
            "at": "l5:papers",
            "hl": [
              {
                "text": "ngắn · thật",
                "at": "l5:true"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: U.S. Department of State — Student Visa · Study in the States",
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
          "say": "So how does the student visa interview really work?",
          "sub": "Vậy buổi phỏng vấn visa du học thật ra diễn ra thế nào?",
          "keys": [
            "diễn ra thế nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Short answer: it usually takes just a few minutes.",
          "sub": "Trả lời ngắn: thường chỉ vài phút.",
          "keys": [
            "vài phút"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The questions circle three things: your school, your money, and your plans after graduation.",
          "sub": "Câu hỏi xoay quanh ba chuyện: trường học, tài chính, kế hoạch sau khi học.",
          "keys": [
            "ba chuyện"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not a quiz show of traps. Just a check: do you know your own file?",
          "sub": "Không phải gameshow bẫy, mà là: bạn có hiểu hồ sơ của mình?",
          "keys": [
            "hồ sơ của mình"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So bring full papers, and answer short and true, in English.",
          "sub": "Vậy mang đủ giấy tờ, trả lời ngắn và thật, bằng tiếng Anh.",
          "keys": [
            "ngắn và thật"
          ]
        }
      ],
      "ref": "intro,p9"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Từ phong bì đến ô cửa kính",
        "points": [
          {
            "label": "I-20",
            "sub": "Kiểm thông tin",
            "illus": "envelope"
          },
          {
            "label": "SEVIS",
            "sub": "Đóng phí I-901",
            "illus": "receipt"
          },
          {
            "label": "DS-160",
            "sub": "Khai, in xác nhận",
            "illus": "laptop"
          },
          {
            "label": "Lịch hẹn",
            "sub": "Lệ phí, đặt lịch",
            "illus": "spiral-calendar"
          },
          {
            "label": "Bìa hồ sơ",
            "sub": "Xếp giấy, luyện nói",
            "illus": "file-folder"
          },
          {
            "label": "Phỏng vấn",
            "sub": "Vài phút",
            "illus": "passport-control"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "From envelope to window, in the right order.",
          "sub": "Từ phong bì đến ô cửa kính, đi đúng thứ tự.",
          "keys": [
            "đúng thứ tự"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Let's follow Lan, step by step.",
          "sub": "Theo chân Lan, từng bước một."
        }
      ],
      "ref": "p5,p6"
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
            "at": "l2",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Tối thứ Sáu · Soát I-20",
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
                  "id": "lan",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "passport-control",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:checks",
            "caption": "Tối thứ Sáu · bàn học của Lan",
            "icon": "page-facing-up"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Tên · ngày sinh · ngành",
            "x": 3996,
            "y": 170,
            "size": 54,
            "at": "l2:Name",
            "hl": [
              {
                "text": "ngày sinh",
                "at": "l2:date of birth"
              }
            ]
          },
          {
            "id": "c-1b",
            "t": "text",
            "text": "→ khớp hộ chiếu",
            "x": 4036,
            "y": 245,
            "size": 50,
            "at": "l2:match",
            "color": "accent"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Trường được SEVP công nhận",
            "x": 3996,
            "y": 340,
            "size": 46,
            "at": "l3:SEVP",
            "hl": [
              {
                "text": "SEVP",
                "at": "l3:SEVP"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Trường nhập SEVIS → gửi I-20",
            "x": 3996,
            "y": 415,
            "size": 46,
            "at": "l4:SEVIS"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, that Friday night. Before celebrating, Lan checks the form.",
          "sub": "Chặng một, ngay tối thứ Sáu ấy. Chưa kịp ăn mừng, Lan soát lại tờ giấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Name, date of birth, major. They all match my passport. Phew!",
          "sub": "Họ tên, ngày sinh, ngành học. Khớp hộ chiếu hết. Phù!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Where did it come from? Her school must be approved by SEVP.",
          "sub": "Tờ này từ đâu ra? Trường của Lan phải được SEVP công nhận.",
          "keys": [
            "SEVP công nhận"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The school enters her details into SEVIS, then sends her the I twenty.",
          "sub": "Trường nhập thông tin của Lan vào hệ thống SEVIS, rồi gửi cho Lan I-20."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 800
        }
      ],
      "ref": "p1,p5"
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
            "text": "Đóng phí SEVIS I-901",
            "x": 3996,
            "y": 510,
            "size": 52,
            "at": "l1:fee",
            "color": "accent",
            "hl": [
              {
                "text": "I-901",
                "at": "l1:nine oh one"
              }
            ]
          },
          {
            "id": "c-4b",
            "t": "text",
            "text": "→ lưu biên lai",
            "x": 4036,
            "y": 580,
            "size": 46,
            "at": "l1:receipt"
          },
          {
            "id": "c-rc",
            "t": "illus",
            "name": "receipt",
            "x": 4456,
            "y": 560,
            "size": 80,
            "at": "l1:receipt"
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "5 bước dán bàn học",
            "x": 3996,
            "y": 670,
            "size": 44,
            "at": "l3:five steps",
            "hl": [
              {
                "text": "5 bước",
                "at": "l3:five steps"
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
          "say": "Next, pay the SEVIS I nine oh one fee, and keep the receipt like a family treasure.",
          "sub": "Bước tiếp: đóng phí SEVIS I-901, giữ biên lai như giữ của gia bảo.",
          "keys": [
            "giữ biên lai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Only then does the visa application begin.",
          "sub": "Xong việc đó rồi mới bắt đầu làm hồ sơ xin visa."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Okay. Five steps on my desk. I cross one off each time I finish.",
          "sub": "Được rồi. Dán năm bước lên bàn học, xong bước nào gạch bước đó.",
          "face": "happy"
        }
      ],
      "ref": "p1,p5,p6"
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
            "at": "l4",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Tuần sau · Đơn DS-160",
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
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "laptop",
                "camera-with-flash"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:online",
            "caption": "Tuần sau · khai đơn trên mạng",
            "icon": "laptop"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Khai DS-160 · tải ảnh lên",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l2:uploads",
            "hl": [
              {
                "text": "tải ảnh",
                "at": "l2:photo"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "In trang xác nhận",
            "x": 5964,
            "y": 245,
            "size": 54,
            "at": "l2:prints",
            "color": "accent",
            "hl": [
              {
                "text": "trang xác nhận",
                "at": "l2:confirmation"
              }
            ]
          },
          {
            "id": "d-fee",
            "t": "text",
            "text": "Lệ phí: 185 USD",
            "x": 5964,
            "y": 340,
            "size": 58,
            "at": "l3:one hundred",
            "color": "coral",
            "hl": [
              {
                "text": "185 USD",
                "at": "l3:dollars"
              }
            ]
          },
          {
            "id": "d-fee2",
            "t": "text",
            "text": "không hoàn lại · có thể đổi",
            "x": 5964,
            "y": 420,
            "size": 44,
            "at": "l4:change",
            "color": "muted",
            "hl": [
              {
                "text": "có thể đổi",
                "at": "l4:change"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Lệ phí ghi trên travel.state.gov lúc viết bài (20/10/2026)",
            "x": 5964,
            "y": 720,
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
          "say": "Stop two, the next week. Lan fills in the DS one sixty online.",
          "sub": "Chặng hai, tuần sau đó. Lan điền đơn DS-160 trên mạng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "She uploads her photo while filling it in, then prints the confirmation page.",
          "sub": "Lan tải ảnh lên ngay lúc khai, rồi in trang xác nhận để mang theo.",
          "keys": [
            "in trang xác nhận"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "The fee is one hundred eighty five US dollars. And it's not refundable!",
          "sub": "Lệ phí 185 đô la Mỹ. Mà không hoàn lại!",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That was the fee when the lesson was written. It can change, so check again when you pay.",
          "sub": "Đó là mức lúc viết bài. Con số có thể đổi, nên xem lại khi đóng.",
          "keys": [
            "xem lại khi đóng"
          ]
        }
      ],
      "ref": "p2"
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
            "id": "d-pl",
            "t": "text",
            "text": "Đại sứ quán / Lãnh sự quán",
            "x": 5964,
            "y": 515,
            "size": 46,
            "at": "l1:embassy",
            "hl": [
              {
                "text": "Lãnh sự quán",
                "at": "l1:consulate"
              }
            ]
          },
          {
            "id": "d-pl2",
            "t": "text",
            "text": "Mỹ, ở nước bạn đang sống",
            "x": 6004,
            "y": 580,
            "size": 44,
            "at": "l1:country"
          },
          {
            "id": "d-ord",
            "t": "text",
            "text": "Đọc hướng dẫn của nơi hẹn",
            "x": 5964,
            "y": 665,
            "size": 48,
            "at": "l2:differ",
            "color": "accent",
            "hl": [
              {
                "text": "nơi hẹn",
                "at": "l2:instructions"
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
          "say": "Then book the interview at the US embassy or consulate in the country where you live.",
          "sub": "Rồi đặt lịch phỏng vấn ở Đại sứ quán hoặc Lãnh sự quán Mỹ tại nước bạn đang sống."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The order of steps can differ by place, so read that place's own instructions.",
          "sub": "Thứ tự các bước có thể khác tuỳ nơi, nên đọc kỹ hướng dẫn của chính nơi bạn phỏng vấn.",
          "keys": [
            "hướng dẫn của chính nơi"
          ]
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s08",
      "module": "BRK-03",
      "data": {
        "value": 365,
        "suffix": " ngày",
        "label": "visa có thể cấp sớm nhất trước ngày học",
        "illus": "spiral-calendar"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A number with a catch.",
          "sub": "Một con số có cái bẫy."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Three sixty five days: the earliest a new student visa can be issued.",
          "sub": "365 ngày trước ngày nhập học: visa có thể cấp sớm nhất.",
          "keys": [
            "365 ngày"
          ]
        }
      ],
      "ref": "p4"
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
            "text": "③ Bữa tối · Mốc thời gian",
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
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "lan",
                  "side": "right"
                }
              ],
              "props": [
                "airplane",
                "ticket"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "at": "l1:dinner",
            "caption": "Bữa tối · cô Hoa vừa đọc tin",
            "icon": "airplane"
          },
          {
            "id": "e-365",
            "t": "text",
            "text": "365 ngày: visa cấp sớm nhất",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l1:three sixty five"
          },
          {
            "id": "e-30",
            "t": "text",
            "text": "30 ngày: vào Mỹ sớm nhất",
            "x": 7932,
            "y": 255,
            "size": 54,
            "at": "l3:thirty",
            "color": "accent",
            "hl": [
              {
                "text": "30 ngày",
                "at": "l3:thirty"
              }
            ]
          },
          {
            "id": "e-tk",
            "t": "text",
            "text": "Mua vé ngay cho rẻ",
            "x": 7932,
            "y": 350,
            "size": 50,
            "at": "l2:tickets",
            "color": "muted"
          },
          {
            "id": "e-tkx",
            "t": "strike",
            "over": "e-tk",
            "at": "l4:before"
          },
          {
            "id": "e-tk2",
            "t": "text",
            "text": "Chưa có visa → chưa mua vé",
            "x": 7932,
            "y": 430,
            "size": 50,
            "at": "l4:visa",
            "color": "coral",
            "hl": [
              {
                "text": "chưa mua vé",
                "at": "l4:buy"
              }
            ]
          },
          {
            "id": "e-early",
            "t": "text",
            "text": "Nộp sớm: lịch hẹn rất kín",
            "x": 7932,
            "y": 530,
            "size": 46,
            "at": "l5:early",
            "hl": [
              {
                "text": "Nộp sớm",
                "at": "l5:early"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: travel.state.gov · Study in the States",
            "x": 7932,
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
          "say": "Stop three, family dinner. Cô Hoa heard about that three sixty five.",
          "sub": "Chặng ba, bữa tối. Cô Hoa vừa nghe về con số 365."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "A visa a whole year early? Then let's fly early and buy cheap tickets now!",
          "sub": "Visa cấp sớm cả năm à? Vậy sang sớm, mua vé rẻ ngay bây giờ!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Slow down. With this visa, you can enter only thirty days before your start date.",
          "sub": "Từ từ đã. Visa này chỉ cho vào Mỹ sớm nhất 30 ngày trước ngày bắt đầu khoá học.",
          "keys": [
            "30 ngày"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And the State Department says: don't buy tickets before you have the visa.",
          "sub": "Bộ Ngoại giao Mỹ còn dặn: chưa có visa thì đừng mua vé máy bay.",
          "keys": [
            "đừng mua vé máy bay"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Study in the States advises applying early. Appointments get packed like Tết trains.",
          "sub": "Study in the States khuyên nộp sớm, lịch hẹn có lúc kín như tàu Tết.",
          "keys": [
            "nộp sớm"
          ]
        }
      ],
      "ref": "p4,p21"
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
            "at": 150,
            "fit": "F",
            "ms": 900
          },
          {
            "at": "l1:end",
            "fit": [
              "f-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Cuối tuần · Bìa hồ sơ",
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
                  "id": "lan",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "point"
                }
              ],
              "props": [
                "file-folder",
                "passport-control"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:papers",
            "caption": "Cuối tuần · giấy tờ kín giường",
            "icon": "file-folder"
          },
          {
            "id": "f-h",
            "t": "text",
            "text": "Nhóm bắt buộc:",
            "x": 60,
            "y": 1250,
            "size": 52,
            "at": "l2:must-haves",
            "color": "accent",
            "hl": [
              {
                "text": "bắt buộc",
                "at": "l2:must-haves"
              }
            ]
          },
          {
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1330,
            "w": 44,
            "h": 44,
            "at": "l3:I twenty",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1312,
            "size": 56,
            "at": "l3:I twenty+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "I-20 bản gốc, ký mực",
            "x": 125,
            "y": 1322,
            "size": 42,
            "at": "l3:I twenty+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1405,
            "w": 44,
            "h": 44,
            "at": "l3:passport",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1387,
            "size": 56,
            "at": "l3:passport+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "Hộ chiếu còn hạn",
            "x": 125,
            "y": 1397,
            "size": 42,
            "at": "l3:passport+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1480,
            "w": 44,
            "h": 44,
            "at": "l3:confirmation",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1462,
            "size": 56,
            "at": "l3:confirmation+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "Trang xác nhận DS-160",
            "x": 125,
            "y": 1472,
            "size": 42,
            "at": "l3:confirmation+200"
          },
          {
            "id": "f-c3",
            "t": "box",
            "x": 60,
            "y": 1555,
            "w": 44,
            "h": 44,
            "at": "l4:receipt",
            "stroke": 5
          },
          {
            "id": "f-k3",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1537,
            "size": 56,
            "at": "l4:receipt+600",
            "color": "accent"
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "Biên lai lệ phí (nếu đóng trước)",
            "x": 125,
            "y": 1547,
            "size": 42,
            "at": "l4:receipt+200"
          },
          {
            "id": "f-c4",
            "t": "box",
            "x": 60,
            "y": 1630,
            "w": 44,
            "h": 44,
            "at": "l4:photo",
            "stroke": 5
          },
          {
            "id": "f-k4",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1612,
            "size": 56,
            "at": "l4:photo+600",
            "color": "accent"
          },
          {
            "id": "f-l4",
            "t": "text",
            "text": "Ảnh đúng chuẩn visa Mỹ",
            "x": 125,
            "y": 1622,
            "size": 42,
            "at": "l4:photo+200"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Study in the States — Prepare for Your Visa Interview",
            "x": 880,
            "y": 1815,
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
          "say": "Stop four, the weekend. Papers everywhere, the bed looks like a post office.",
          "sub": "Chặng bốn, cuối tuần. Giấy tờ bày kín giường như bưu điện."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Study in the States splits them into two groups. First, the must-haves.",
          "sub": "Study in the States chia giấy tờ thành hai nhóm. Trước hết, nhóm bắt buộc.",
          "keys": [
            "nhóm bắt buộc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The original I twenty with an ink signature. A valid passport. The DS one sixty confirmation page.",
          "sub": "I-20 bản gốc có chữ ký mực. Hộ chiếu còn hạn. Trang xác nhận DS-160."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The fee receipt, if you paid before. And a photo that meets US visa rules.",
          "sub": "Biên lai lệ phí, nếu phải đóng trước. Và ảnh đúng chuẩn visa Mỹ."
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
            "fit": "F",
            "move": "cut"
          },
          {
            "at": "l1",
            "fit": [
              "f-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-s",
            "t": "text",
            "text": "Nhóm hỗ trợ: có thể được hỏi",
            "x": 60,
            "y": 1700,
            "size": 40,
            "at": "l2:support",
            "hl": [
              {
                "text": "có thể được hỏi",
                "at": "l2:may"
              }
            ]
          },
          {
            "id": "f-s2",
            "t": "text",
            "text": "học bạ · giấy sẽ rời Mỹ · tiền",
            "x": 60,
            "y": 1755,
            "size": 36,
            "at": "l3:records",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "And the school reports, the savings book, the house papers?",
          "sub": "Còn học bạ, sổ tiết kiệm, giấy tờ nhà thì sao con?",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "That's the support group: papers the officer may ask to see.",
          "sub": "Đó là nhóm hỗ trợ: giấy tờ viên chức có thể hỏi xem.",
          "keys": [
            "nhóm hỗ trợ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "School records and test scores. Proof you will leave the US. Proof of money for study, living and travel.",
          "sub": "Học bạ, điểm thi. Giấy cho thấy bạn sẽ rời Mỹ. Giấy chứng minh đủ tiền học, tiền sống, tiền đi lại."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "How to file them for a quick grab? That's the next lesson.",
          "sub": "Xếp sao để rút ra trong vài giây? Hẹn bài tiếp theo."
        }
      ],
      "ref": "p8"
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
            "text": "⑤ Tuần luyện nói · Ba nhóm câu",
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
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "lan",
                  "side": "right"
                }
              ],
              "props": [
                "memo",
                "hot-beverage"
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
            "at": "l1:Dũng",
            "caption": "Tuần luyện nói · quán cà phê",
            "icon": "memo"
          },
          {
            "id": "g-q1",
            "t": "text",
            "text": "“Why do you want to study in the United States?”",
            "x": 2028,
            "y": 1260,
            "size": 30,
            "at": "l3:usual",
            "font": "base"
          },
          {
            "id": "g-q2",
            "t": "text",
            "text": "“What program will you study?”",
            "x": 2028,
            "y": 1315,
            "size": 30,
            "at": "l4:program",
            "font": "base"
          },
          {
            "id": "g-q3",
            "t": "text",
            "text": "“Who will pay for your education?”",
            "x": 2028,
            "y": 1370,
            "size": 30,
            "at": "l4:pays",
            "font": "base"
          },
          {
            "id": "g-q4",
            "t": "text",
            "text": "“What are your career goals after graduation?”",
            "x": 2028,
            "y": 1425,
            "size": 30,
            "at": "l4:career",
            "font": "base"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Trường, ngành · Tài chính · Kế hoạch",
            "x": 2028,
            "y": 1510,
            "size": 46,
            "at": "l5:school",
            "color": "accent",
            "hl": [
              {
                "text": "Tài chính",
                "at": "l5:money"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Câu hỏi: Concordia University Texas — F-1 Visa Interview Preparation",
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
          "say": "Stop five, practice week, at a café. Meet Dũng, Lan's classmate, future engineer, champion of memorising.",
          "sub": "Chặng năm, tuần luyện nói, ở quán cà phê. Đây là Dũng, bạn cùng lớp Lan, kỹ sư tương lai, vô địch học thuộc lòng.",
          "keys": [
            "vô địch học thuộc lòng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "My cousin says officers have secret trick questions. So I'll memorise model answers!",
          "sub": "Anh họ tớ bảo viên chức có bộ câu hỏi bẫy bí mật. Nên tớ học thuộc đáp án mẫu!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Concordia University Texas lists the usual ones.",
          "sub": "Concordia University Texas liệt kê những câu quen thuộc."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Why the US, what program, who pays, what career goals.",
          "sub": "Vì sao học ở Mỹ, học chương trình gì, ai trả tiền, mục tiêu nghề nghiệp."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Group them: school and major, money, plans after graduation.",
          "sub": "Gom lại: trường và ngành, tài chính, kế hoạch sau khi học.",
          "keys": [
            "trường và ngành, tài chính, kế hoạch"
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
      "ref": "p9,p10"
    },
    {
      "id": "s13",
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
            "id": "g-my",
            "t": "text",
            "text": "Bộ câu bẫy + đáp án mẫu",
            "x": 2028,
            "y": 1590,
            "size": 46,
            "at": "l1:Trick",
            "color": "muted"
          },
          {
            "id": "g-myx",
            "t": "strike",
            "over": "g-my",
            "at": "l1:simple"
          },
          {
            "id": "g-ok",
            "t": "text",
            "text": "Câu trả lời khớp hồ sơ?",
            "x": 2028,
            "y": 1660,
            "size": 48,
            "at": "l1:match",
            "hl": [
              {
                "text": "khớp hồ sơ",
                "at": "l1:match"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Sợ nhất: lệch hồ sơ",
            "x": 2028,
            "y": 1745,
            "size": 52,
            "at": "l3:no trick",
            "color": "accent",
            "hl": [
              {
                "text": "lệch hồ sơ",
                "at": "l3:match"
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
          "say": "Trick questions? The common ones are simple. The officer listens: does your answer match your file?",
          "sub": "Câu bẫy ư? Các câu hay gặp đều đơn giản. Viên chức nghe xem câu trả lời có khớp hồ sơ không.",
          "keys": [
            "khớp hồ sơ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "UC San Diego writes: no magic explanation, and no single document, guarantees a visa.",
          "sub": "UC San Diego viết: không có lời giải thích thần kỳ hay giấy tờ nào bảo đảm chắc chắn được cấp visa."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: no trick questions, only answers that don't match the file.",
          "sub": "Rút ra: không có câu bẫy, chỉ có câu trả lời không khớp hồ sơ.",
          "keys": [
            "không khớp hồ sơ"
          ]
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s14",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "Luyện thử · Lan hỏi",
        "actors": [
          {
            "id": "lan",
            "side": "left"
          },
          {
            "id": "dung",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đọc bài thuộc cho chắc",
          "why": "Câu hỏi chỉ là ai trả tiền; đọc đoạn dài rồi khựng, viên chức phải hỏi lại.",
          "rule": "Hỏi gì đáp nấy, một hai câu là đủ"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "Practice question. Who will pay for your studies?",
          "sub": "Câu luyện thử nhé. Ai sẽ trả tiền học cho bạn?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "My name is Dũng, I'm from Hà Nội, I love football, and, uh…",
          "sub": "Em tên Dũng, quê Hà Nội, thích bóng đá, và… ờ…",
          "pose": "explain",
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
          "say": "She asked who pays. You played the whole cassette.",
          "sub": "Hỏi ai trả tiền, cậu bật nguyên cuốn băng.",
          "keys": [
            "nguyên cuốn băng"
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
          "say": "My parents will pay for my studies.",
          "sub": "Bố mẹ em sẽ trả tiền học.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. Answer what is asked. One or two sentences are enough.",
          "sub": "Đúng. Hỏi gì đáp nấy, một hai câu là đủ.",
          "phase": "redo",
          "keys": [
            "Hỏi gì đáp nấy"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p17,p18"
    },
    {
      "id": "s15",
      "module": "BRK-07",
      "data": {
        "question": "Không có câu bẫy, sao viên chức vẫn nghi?",
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
          "say": "If there are no trick questions, why does the officer still have doubts?",
          "sub": "Không có câu bẫy, sao viên chức vẫn còn nghi?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p13"
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
          },
          {
            "at": "l5",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Buổi tối · Ý định quay về",
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
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "phone",
                  "face": "surprised"
                },
                {
                  "id": "hoa",
                  "side": "right"
                }
              ],
              "props": [
                "house",
                "laptop"
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
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:evening",
            "caption": "Một tối ở nhà · Lan đọc trang trường",
            "icon": "house"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Bị coi: muốn định cư…",
            "x": 3996,
            "y": 1260,
            "size": 50,
            "at": "l2:immigrants",
            "color": "coral"
          },
          {
            "id": "h-1b",
            "t": "text",
            "text": "…đến khi thuyết phục được",
            "x": 4036,
            "y": 1330,
            "size": 46,
            "at": "l2:convince"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Lý do về > lý do ở",
            "x": 3996,
            "y": 1420,
            "size": 60,
            "at": "l3:stronger",
            "color": "accent",
            "hl": [
              {
                "text": "Lý do về",
                "at": "l3:return"
              }
            ]
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Gia đình · việc làm · nghề nghiệp",
            "x": 3996,
            "y": 1520,
            "size": 44,
            "at": "l4:family"
          },
          {
            "id": "h-3b",
            "t": "text",
            "text": "tài sản · triển vọng tài chính",
            "x": 3996,
            "y": 1585,
            "size": 44,
            "at": "l4:assets",
            "color": "muted"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "Không tờ giấy nào nói thay bạn",
            "x": 3996,
            "y": 1690,
            "size": 46,
            "at": "l6:replaces",
            "color": "accent",
            "hl": [
              {
                "text": "nói thay bạn",
                "at": "l6:your own"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: UC San Diego International Students & Programs — Visa Interview",
            "x": 3996,
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
          "say": "Stop six, evening at home. Lan reads the UC San Diego page.",
          "sub": "Chặng sáu, tối ở nhà. Lan đọc trang của UC San Diego."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Applicants are seen as intending immigrants, until they convince the officer otherwise?",
          "sub": "Người xin visa du học bị coi là có ý định định cư, cho đến khi thuyết phục được viên chức?",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Yes. You show your reasons to return are stronger than your reasons to stay.",
          "sub": "Đúng vậy. Bạn cần cho thấy lý do quay về mạnh hơn lý do ở lại.",
          "keys": [
            "lý do quay về mạnh hơn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Ties: family, a job or career plan at home, family assets and prospects.",
          "sub": "Ràng buộc: gia đình, việc làm, kế hoạch nghề nghiệp ở quê, tài sản, triển vọng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "So our house papers will do the talking for you?",
          "sub": "Vậy giấy tờ nhà mình sẽ nói thay con hả?",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Not quite. No paper replaces your own clear answer.",
          "sub": "Chưa đâu cô. Không tờ giấy nào thay được câu trả lời rõ ràng của chính bạn.",
          "keys": [
            "câu trả lời rõ ràng"
          ]
        }
      ],
      "ref": "p13,p14"
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
          },
          {
            "at": "l5",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Sáng thứ Năm · Ô cửa kính",
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
              "set": "hotel",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "point"
                },
                {
                  "id": "lan",
                  "side": "center"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l4"
                }
              ],
              "props": [
                "passport-control",
                "file-folder"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:interview",
            "caption": "Nơi phỏng vấn · ô cửa kính (minh hoạ)",
            "icon": "passport-control"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Mẹ trả lời thay",
            "x": 5964,
            "y": 1260,
            "size": 52,
            "at": "l2:answer",
            "color": "muted"
          },
          {
            "id": "i-1x",
            "t": "strike",
            "over": "i-1",
            "at": "l3:herself"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Tiếng Anh · tự nói cho mình",
            "x": 5964,
            "y": 1340,
            "size": 50,
            "at": "l3:English",
            "color": "accent",
            "hl": [
              {
                "text": "tự nói",
                "at": "l3:herself"
              }
            ]
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "2–3 phút / người",
            "x": 5964,
            "y": 1430,
            "size": 54,
            "at": "l4:two or three",
            "hl": [
              {
                "text": "2–3 phút",
                "at": "l4:minutes"
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
          "say": "Stop seven, Thursday morning. Interview day.",
          "sub": "Chặng bảy, sáng thứ Năm. Ngày phỏng vấn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Let Mum go to the window and answer for you!",
          "sub": "Để mẹ ra ô cửa trả lời giúp con!",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sorry, Cô Hoa. The interview is in English, and Lan must speak for herself.",
          "sub": "Xin lỗi cô Hoa. Phỏng vấn bằng tiếng Anh, và Lan phải tự nói cho mình.",
          "keys": [
            "tự nói cho mình"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Behind the glass: Sam, the consular officer. Polite, quick, often two or three minutes per person.",
          "sub": "Sau ô kính là chị Sam, viên chức lãnh sự. Lịch sự, nhanh, thường chỉ hai đến ba phút mỗi người.",
          "keys": [
            "hai đến ba phút"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "sam",
          "say": "Good morning. What program will you study?",
          "sub": "Chào em. Em sẽ học chương trình gì?"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "lan",
          "say": "I'm going to study data science.",
          "sub": "Em sẽ học ngành khoa học dữ liệu.",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l4",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p15,p16"
    },
    {
      "id": "s18",
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
            "id": "i-4",
            "t": "text",
            "text": "Ấn tượng: ngay phút đầu",
            "x": 5964,
            "y": 1530,
            "size": 48,
            "at": "l1:first minute",
            "hl": [
              {
                "text": "phút đầu",
                "at": "l1:first minute"
              }
            ]
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "“I'm going to study computer science…”",
            "x": 5964,
            "y": 1610,
            "size": 40,
            "at": "l2:computer",
            "font": "base"
          },
          {
            "id": "i-6",
            "t": "text",
            "text": "“Sorry, could you repeat the question, please?”",
            "x": 5964,
            "y": 1690,
            "size": 36,
            "at": "l4:repeat",
            "color": "accent",
            "hl": [
              {
                "text": "repeat the question",
                "at": "l4:repeat"
              }
            ]
          },
          {
            "id": "i-7",
            "t": "text",
            "text": "Giữ bình tĩnh: một bài riêng",
            "x": 5964,
            "y": 1770,
            "size": 42,
            "at": "l5:calm",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First impressions form in the first minute. So answer short, and right on the question.",
          "sub": "Ấn tượng hình thành ngay phút đầu. Nên trả lời ngắn, đúng câu được hỏi.",
          "keys": [
            "phút đầu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Like the lesson's model: I'm going to study computer science at a university in Ohio.",
          "sub": "Như câu mẫu trong bài: “I'm going to study computer science at a university in Ohio.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then, behind the glass, Lan misses a question.",
          "sub": "Rồi sau tấm kính, Lan nghe sót một câu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Sorry, could you repeat the question, please?",
          "sub": "Xin lỗi, chị có thể nhắc lại câu hỏi được không ạ?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Polite, and perfectly fine. Staying calm gets its own lesson in this series.",
          "sub": "Lịch sự và hoàn toàn ổn. Cách giữ bình tĩnh có một bài riêng trong chuỗi.",
          "keys": [
            "hoàn toàn ổn"
          ]
        }
      ],
      "ref": "p16,p19"
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
            "text": "⑧ Vài ngày sau · Nhận hộ chiếu",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop eight"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "passport-control",
                "envelope"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "at": "l1:passport",
            "caption": "Vài ngày sau · cùng phòng khách",
            "icon": "envelope"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Loại visa · họ tên · ngày sinh",
            "x": 7932,
            "y": 1260,
            "size": 46,
            "at": "l2:type",
            "hl": [
              {
                "text": "họ tên",
                "at": "l2:name"
              }
            ]
          },
          {
            "id": "j-1b",
            "t": "text",
            "text": "→ sai thì báo ngay nơi cấp",
            "x": 7972,
            "y": 1330,
            "size": 42,
            "at": "l3:mistake",
            "color": "coral"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Có công mài sắt… có trang visa”",
            "x": 7932,
            "y": 1420,
            "size": 46,
            "at": "l4:needle",
            "color": "accent",
            "hl": [
              {
                "text": "có trang visa",
                "at": "l4:visa page"
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
          "say": "Stop eight, a few days later. The passport comes back. Same living room, same envelope on the table.",
          "sub": "Chặng tám, vài ngày sau. Hộ chiếu được trả về. Vẫn phòng khách ấy, vẫn phong bì ấy trên bàn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Visa type, my name, my date of birth. Let me check them against my passport.",
          "sub": "Loại visa, họ tên, ngày sinh. Để con soát lại với hộ chiếu.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Any mistake? Contact the office that issued it, right away.",
          "sub": "Có sai sót thì liên hệ ngay nơi đã cấp.",
          "keys": [
            "liên hệ ngay"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Keep grinding the iron bar. Lan's needle is a visa page with the right name.",
          "sub": "“Có công mài sắt, có ngày nên kim.” Cây kim của Lan là trang visa đúng tên.",
          "keys": [
            "trang visa đúng tên"
          ]
        }
      ],
      "ref": "p20"
    },
    {
      "id": "s20",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "J",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "j-2",
            "t": "text",
            "text": "Visa ≠ chắc được vào Mỹ",
            "x": 7932,
            "y": 1520,
            "size": 50,
            "at": "l1:guarantee",
            "color": "coral",
            "hl": [
              {
                "text": "≠",
                "at": "l1:guarantee"
              }
            ]
          },
          {
            "id": "j-2b",
            "t": "text",
            "text": "Cửa khẩu Mỹ mới quyết",
            "x": 7932,
            "y": 1590,
            "size": 44,
            "at": "l2:Customs"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Khai gian → từ chối vĩnh viễn",
            "x": 7932,
            "y": 1670,
            "size": 48,
            "at": "l3:permanent",
            "color": "coral",
            "hl": [
              {
                "text": "vĩnh viễn",
                "at": "l3:permanent"
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
          "say": "One more thing: a visa does not guarantee entry.",
          "sub": "Thêm một điều: visa không bảo đảm bạn được vào Mỹ.",
          "keys": [
            "không bảo đảm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It lets you reach the border and ask. US Customs and Border Protection decides.",
          "sub": "Nó chỉ cho bạn đến cửa khẩu để xin vào. Hải quan và Biên phòng Mỹ quyết định."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And false papers or lies can lead to a permanent visa refusal.",
          "sub": "Còn khai gian hay nộp giấy không thật có thể bị từ chối visa vĩnh viễn.",
          "keys": [
            "vĩnh viễn"
          ]
        }
      ],
      "ref": "p21,p22"
    },
    {
      "id": "s21",
      "module": "BRK-04",
      "data": {
        "title": "Bị từ chối theo điều 214(b)",
        "labels": [
          "Sai",
          "Đúng"
        ],
        "wrong": "Nộp lại y như cũ, mong lần này may hơn",
        "right": "Nộp lại khi có thêm bằng chứng hoặc hoàn cảnh đã đổi",
        "wrongIllus": "crossed-fingers",
        "rightIllus": "file-folder"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Refused under two fourteen b? Same file, same result.",
          "sub": "Bị từ chối theo 214(b)? Nộp y như cũ, thường vô ích."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Reapply with new evidence, or changed circumstances.",
          "sub": "Nộp lại khi có thêm bằng chứng, hoàn cảnh mới.",
          "keys": [
            "thêm bằng chứng"
          ]
        }
      ],
      "ref": "p22"
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
            "fit": "B",
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
            "x": 2788,
            "y": 170,
            "at": "l2"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 700,
            "y": 1260,
            "at": "l3"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2728,
            "y": 1650,
            "at": "l4"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; quy định có thể thay đổi, kiểm lại trang chính thức nơi bạn phỏng vấn. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1790,
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
          "say": "So, the interview is short. The preparation is the long part.",
          "sub": "Tóm lại: buổi phỏng vấn thì ngắn, phần chuẩn bị mới là phần dài.",
          "keys": [
            "phần chuẩn bị"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: do the steps in order, I twenty, SEVIS, DS one sixty, appointment.",
          "sub": "Một: làm đúng thứ tự, I-20, SEVIS, DS-160, lịch hẹn.",
          "keys": [
            "đúng thứ tự"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: the must-have papers on top, the support papers ready.",
          "sub": "Hai: giấy bắt buộc để trên cùng, giấy hỗ trợ sẵn sàng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: answer what is asked, short and true, in your own words.",
          "sub": "Ba: hỏi gì đáp nấy, ngắn, thật, bằng lời của mình.",
          "keys": [
            "hỏi gì đáp nấy"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: tick your six boxes, from the I twenty check to practice.",
          "sub": "Làm ngay: đánh dấu sáu ô, từ soát I-20 đến luyện ba nhóm câu.",
          "keys": [
            "sáu ô"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Any box empty? Write the date you'll do it.",
          "sub": "Ô nào chưa xong, ghi ngày sẽ làm.",
          "keys": [
            "ghi ngày sẽ làm"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p24,outro"
    },
    {
      "id": "s23",
      "module": "BRK-06",
      "data": {
        "title": "Đọc chuỗi theo thứ tự",
        "items": [
          {
            "illus": "file-folder",
            "text": "Giấy tờ"
          },
          {
            "illus": "school",
            "text": "Trường, ngành"
          },
          {
            "illus": "money-bag",
            "text": "Tài chính"
          },
          {
            "illus": "house",
            "text": "Kế hoạch sau học"
          },
          {
            "illus": "relieved-face",
            "text": "Giữ bình tĩnh"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Papers, school, money, plans, staying calm.",
          "sub": "Giấy tờ, trường học, tài chính, kế hoạch, giữ bình tĩnh.",
          "keys": [
            "Giấy tờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The series follows that road, one lesson at a time.",
          "sub": "Chuỗi bài đi đúng con đường ấy, từng bài một."
        }
      ],
      "ref": "p10,p23"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "What is the lesson from Khoa's story?",
        "options": [
          "Answer exactly what is asked, and one or two sentences are enough",
          "Speak as long as possible, because long answers show strong English",
          "Always recite your full introduction first, whatever the question may be"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "speech-balloon",
        "why": "Dòng Rút ra nhắc hỏi gì đáp nấy. Câu trả lời ngắn, trúng câu hỏi vừa đủ thời gian vừa cho thấy bạn hiểu kế hoạch của mình."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What is the lesson from Khoa's story?",
          "sub": "Bài học từ câu chuyện của Khoa là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Answer exactly what is asked, and one or two sentences are enough.",
          "sub": "Hỏi gì đáp nấy, một hai câu là đủ."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Remember Dũng's cassette at the café?",
          "sub": "Nhớ cuốn băng của Dũng ở quán cà phê chứ?"
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[27]"
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
          "say": "Short and true. Now try the forty questions below.",
          "sub": "Ngắn và thật. Giờ thử bốn mươi câu hỏi bên dưới nhé.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144. Hook HOOK-23 (đồ vật kể chuyện): phong bì + tờ I-20 cận cảnh → kéo ra thấy Lan, tối thứ Sáu; vật trở lại ở kết (vẫn phong bì ấy, trang visa). Dòng thời gian TỪ PHONG BÌ ĐẾN TRANG VISA: ① tối thứ Sáu soát I-20, SEVP/SEVIS, phí I-901 → ② tuần sau DS-160, 185 USD (lúc viết bài), nơi hẹn → BRK-03 365 ngày → ③ bữa tối: 30 ngày, chưa mua vé → ④ cuối tuần bìa hồ sơ (5 bắt buộc + nhóm hỗ trợ) → ⑤ tuần luyện nói, ba nhóm câu, không có câu bẫy → “Khoan đã!” Dũng đọc bài thuộc → BRK-07 → ⑥ tối ở nhà: ý định quay về → ⑦ sáng thứ Năm ô cửa kính (Sam), tự nói, 2–3 phút, xin nhắc lại → ⑧ vài ngày sau nhận hộ chiếu, visa ≠ bảo đảm nhập cảnh, khai gian, BRK-04 214(b). Đổi tên: Ngọc → Lan, Khoa → Dũng; cô Hoa = mẹ Lan; Sam = viên chức lãnh sự. Tục ngữ: “Có công mài sắt, có ngày nên kim” → kim = trang visa đúng tên. Set `hotel` làm quầy phỏng vấn (chưa có set lãnh sự quán). Câu đố questions[27].",
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
