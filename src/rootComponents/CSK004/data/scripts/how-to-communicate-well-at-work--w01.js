// Kịch bản video W lần 3 (#110, #112) — "Giao tiếp nơi công sở: bảy việc để đồng nghiệp hiểu đúng ý bạn" · bài tổng chuỗi "Giao tiếp nơi công sở"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-communicate-well-at-work--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "office-communicators",
    "slug": "how-to-communicate-well-at-work",
    "door": "ky-nang",
    "level": "B1",
    "title": "Giao tiếp nơi công sở: bảy việc để đồng nghiệp hiểu đúng ý bạn",
    "series": "Giao tiếp nơi công sở"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô đi theo MỘT TUẦN của Dũng và Thảo (Thứ Sáu 16:00 email gửi chung → Thứ Hai 9:00 → 14:00 → Thứ Ba 9:00 “Khoan đã!” → 15:00 → Thứ Tư 7:00 → Thứ Năm 10:00 → 15:00 → Thứ Sáu 16:00 tuần sau khép vòng). Nhân vật: Dũng (Toàn p3, Nhàn p7, Hải p15, “bạn” p19, người nghe p23), Thảo (Kha p7, Khôi p11, người bị khách mắng p23), Cô Hoa (sếp p11, chủ trì p25). Ngắt nhịp: BRK-04 (p7–p8), BRK-01 (p15–p16), BRK-03 12 ngày (p17, nguồn ghi trên ô G), BRK-07 rehook (trước p21). Ca dao mở/khép: “Lời nói chẳng mất tiền mua…”. Bản cũ: w145/bak/how-to-communicate-well-at-work--w01.js.",
  "narrator": "det",
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
          }
        ],
        "items": [
          {
            "id": "a-num",
            "t": "text",
            "text": "5 người nhận",
            "x": 60,
            "y": 110,
            "size": 130,
            "at": "l1:five",
            "color": "accent",
            "hl": [
              {
                "text": "5 người",
                "at": "l1:five people"
              }
            ]
          },
          {
            "id": "a-zero",
            "t": "text",
            "text": "0 trả lời",
            "x": 60,
            "y": 290,
            "size": 110,
            "at": "l1:zero",
            "color": "coral",
            "hl": [
              {
                "text": "0",
                "at": "l1:zero"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "sau 3 ngày chờ",
            "x": 70,
            "y": 440,
            "size": 56,
            "at": "l1:three days"
          },
          {
            "id": "a-ma",
            "t": "text",
            "text": "Văn phòng ma?",
            "x": 70,
            "y": 530,
            "size": 52,
            "at": "l2:ghost",
            "color": "muted"
          },
          {
            "id": "a-max",
            "t": "strike",
            "over": "a-ma",
            "at": "l2:busy"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Five people got the email. Three days later, zero replies.",
          "sub": "Năm người nhận email. Ba ngày sau: không ai trả lời.",
          "keys": [
            "không ai trả lời"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not a ghost office. A busy one, full of kind people.",
          "sub": "Đâu phải văn phòng ma. Đông vui, toàn người tử tế."
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
            "at": "l1",
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
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "e-mail"
              ]
            },
            "at": "l1",
            "caption": "Thứ Sáu · 16:00",
            "icon": "e-mail"
          },
          {
            "id": "a-mail",
            "t": "text",
            "text": "“Mọi người xem giúp em nhé”",
            "x": 880,
            "y": 650,
            "size": 44,
            "at": "l3:everyone",
            "color": "coral",
            "hl": [
              {
                "text": "Mọi người",
                "at": "l3:everyone"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Lời nói chẳng mất tiền mua”",
            "x": 60,
            "y": 640,
            "size": 50,
            "at": "l4:words",
            "color": "accent",
            "hl": [
              {
                "text": "chẳng mất tiền mua",
                "at": "l4:cost nothing"
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
          "say": "Meet Dũng.",
          "sub": "Đây là Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sales staff. Fast hands, allergic to long emails.",
          "sub": "Dân kinh doanh. Tay nhanh, dị ứng email dài.",
          "keys": [
            "dị ứng email dài"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Plan done! To five people: everyone, please take a look. Send!",
          "sub": "Xong kế hoạch! Gửi năm người: “Mọi người xem giúp em nhé.” Gửi!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Grandma's rhyme: words cost nothing, so choose them kindly.",
          "sub": "Ca dao dặn: “Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng nhau.”",
          "keys": [
            "Lời nói chẳng mất tiền mua"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Dũng's words cost nothing. And bought nothing.",
          "sub": "Lời Dũng chẳng mất tiền mua. Cũng chẳng mua được gì.",
          "keys": [
            "chẳng mua được gì"
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
            "text": "Hiểu đúng ý ngay lần đầu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:first time",
            "hl": [
              {
                "text": "đúng ý",
                "at": "l1:right"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: tài ăn nói",
            "x": 2028,
            "y": 170,
            "size": 54,
            "at": "l2:silver",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:just"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: 5 thói quen nhỏ",
            "x": 2028,
            "y": 260,
            "size": 58,
            "at": "l2:habits",
            "color": "accent",
            "hl": [
              {
                "text": "5 thói quen",
                "at": "l2:five small habits"
              }
            ]
          },
          {
            "id": "b-h0",
            "t": "text",
            "text": "① Nói rõ việc chính ngay đầu",
            "x": 2888,
            "y": 150,
            "size": 46,
            "at": "l3:main point"
          },
          {
            "id": "b-h1",
            "t": "text",
            "text": "② Gọi đúng tên, ghi rõ hạn",
            "x": 2888,
            "y": 222,
            "size": 46,
            "at": "l3:deadline"
          },
          {
            "id": "b-h2",
            "t": "text",
            "text": "③ Nói sự việc, không nói người",
            "x": 2888,
            "y": 294,
            "size": 46,
            "at": "l4:facts"
          },
          {
            "id": "b-h3",
            "t": "text",
            "text": "④ Nghe hết rồi nhắc lại",
            "x": 2888,
            "y": 366,
            "size": 46,
            "at": "l4:repeat"
          },
          {
            "id": "b-h4",
            "t": "text",
            "text": "⑤ Chốt bằng chữ",
            "x": 2888,
            "y": 438,
            "size": 46,
            "at": "l4:writing"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do people understand you right, the first time?",
          "sub": "Vậy làm sao để người khác hiểu đúng ý bạn ngay lần đầu?",
          "keys": [
            "hiểu đúng ý"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not a silver tongue. Just five small habits.",
          "sub": "Không cần tài ăn nói. Chỉ năm thói quen nhỏ.",
          "keys": [
            "năm thói quen nhỏ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Say the main point first. Name the person and the deadline.",
          "sub": "Nói rõ việc chính ngay đầu. Gọi đúng tên người, thời hạn.",
          "keys": [
            "việc chính"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Facts, not people. Listen, repeat it back, and put it in writing.",
          "sub": "Nói sự việc, không nhận xét người. Nghe hết, nhắc lại, chốt bằng chữ.",
          "keys": [
            "chốt bằng chữ"
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
            "id": "b-wk",
            "t": "text",
            "text": "1 tuần, 7 việc",
            "x": 2028,
            "y": 520,
            "size": 52,
            "at": "l1:one week",
            "hl": [
              {
                "text": "7 việc",
                "at": "l1:seven"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 610,
            "w": 214,
            "h": 90,
            "at": "l2:emails+0",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2260,
            "y": 610,
            "w": 214,
            "h": 90,
            "at": "l2:emails+280",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2492,
            "y": 610,
            "w": 214,
            "h": 90,
            "at": "l2:emails+560",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2724,
            "y": 610,
            "w": 214,
            "h": 90,
            "at": "l2:emails+840",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2956,
            "y": 610,
            "w": 214,
            "h": 90,
            "at": "l2:emails+1120",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3188,
            "y": 610,
            "w": 214,
            "h": 90,
            "at": "l2:emails+1400",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3420,
            "y": 610,
            "w": 214,
            "h": 90,
            "at": "l2:emails+1680",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Email",
            "x": 2046,
            "y": 625,
            "size": 40,
            "at": "l2:emails+120"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Góp ý",
            "x": 2278,
            "y": 625,
            "size": 40,
            "at": "l2:emails+400"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Từ chối",
            "x": 2510,
            "y": 625,
            "size": 40,
            "at": "l2:emails+680"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Họp mạng",
            "x": 2742,
            "y": 625,
            "size": 40,
            "at": "l2:emails+960"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Xin nghỉ",
            "x": 2974,
            "y": 625,
            "size": 40,
            "at": "l2:emails+1240"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Lắng nghe",
            "x": 3206,
            "y": 625,
            "size": 40,
            "at": "l2:emails+1520"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "Ý tưởng",
            "x": 3438,
            "y": 625,
            "size": 40,
            "at": "l2:emails+1800"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Follow Dũng and Thảo through one week, seven everyday tasks.",
          "sub": "Theo Dũng và Thảo qua một tuần, bảy việc thường ngày.",
          "keys": [
            "một tuần, bảy việc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Emails, feedback, saying no, meetings, leave, listening, ideas. Each has its own lesson.",
          "sub": "Email, góp ý, từ chối, họp mạng, xin nghỉ, lắng nghe, ý tưởng. Mỗi việc một bài riêng."
        }
      ],
      "ref": "intro,p27"
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
            "text": "① Thứ Hai 9:00 · Email",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:monday"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "face": "sad",
                  "pose": "shrug"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "e-mail"
              ]
            },
            "at": "l1:monday",
            "caption": "Thứ Hai · 9:00",
            "icon": "e-mail"
          },
          {
            "id": "c-loa",
            "t": "text",
            "text": "Gửi chung = loa phường",
            "x": 3996,
            "y": 170,
            "size": 54,
            "at": "l5:loudspeaker",
            "color": "coral",
            "hl": [
              {
                "text": "loa phường",
                "at": "l5:loudspeaker"
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
          "say": "Stop one: Monday, nine a.m. Three days of silence.",
          "sub": "Chặng một: chín giờ sáng thứ Hai. Ba ngày im lặng.",
          "keys": [
            "Ba ngày im lặng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Thảo, the neat colleague next door.",
          "sub": "Còn đây là Thảo, cô đồng nghiệp ngăn nắp bàn bên."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Three days, and nobody has answered my email!",
          "sub": "Ba ngày rồi mà chẳng ai trả lời email!",
          "face": "sad",
          "pose": "shrug"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Oh, I thought someone else already replied.",
          "sub": "Ơ, mình tưởng người khác góp ý rồi.",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Everyone thought so. A group email is a loudspeaker: all hear, none answer.",
          "sub": "Ai cũng tưởng thế. Email gửi chung như loa phường: ai cũng nghe, chẳng ai thưa.",
          "keys": [
            "loa phường"
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
      "ref": "p3"
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
            "at": "l3",
            "fit": [
              "c-v"
            ],
            "zoom": 1.3,
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
            "id": "c-q",
            "t": "text",
            "text": "Đọc xong, họ cần làm gì?",
            "x": 3996,
            "y": 255,
            "size": 52,
            "at": "l1:after reading",
            "color": "accent",
            "hl": [
              {
                "text": "cần làm gì",
                "at": "l1:must"
              }
            ]
          },
          {
            "id": "c-12",
            "t": "text",
            "text": "1 việc chính · tiêu đề có hạn",
            "x": 3996,
            "y": 335,
            "size": 46,
            "at": "l2:one main",
            "hl": [
              {
                "text": "tiêu đề có hạn",
                "at": "l2:deadline"
              }
            ]
          },
          {
            "id": "c-re",
            "t": "text",
            "text": "Từng tên · từng phần · hạn thứ Tư",
            "x": 4816,
            "y": 685,
            "size": 42,
            "at": "l3:each name",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before typing, ask: after reading, what must the reader do?",
          "sub": "Trước khi gõ, tự hỏi: đọc xong, người nhận cần làm gì?",
          "keys": [
            "cần làm gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One email, one main task. A subject with the task and the deadline.",
          "sub": "Mỗi email một việc chính. Tiêu đề nói rõ việc và hạn.",
          "keys": [
            "việc và hạn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Take two. Each name, each part, and a deadline: Wednesday.",
          "sub": "Làm lại. Từng tên người, từng phần, hạn thứ Tư.",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That same afternoon, every reply arrived.",
          "sub": "Ngay chiều hôm đó, Dũng nhận đủ góp ý.",
          "keys": [
            "nhận đủ góp ý"
          ]
        }
      ],
      "ref": "p1,p3"
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
          }
        ],
        "items": [
          {
            "id": "c-end",
            "t": "text",
            "text": "Kết: đề nghị + tên + giờ",
            "x": 3996,
            "y": 415,
            "size": 46,
            "at": "l1:request",
            "hl": [
              {
                "text": "tên + giờ",
                "at": "l1:name"
              }
            ]
          },
          {
            "id": "c-dr",
            "t": "text",
            "text": "Đang bực → lưu nháp",
            "x": 3996,
            "y": 490,
            "size": 46,
            "at": "l2:angry",
            "color": "coral"
          },
          {
            "id": "c-ck",
            "t": "text",
            "text": "Trước khi gửi: tệp, To, CC",
            "x": 3996,
            "y": 565,
            "size": 46,
            "at": "l2:attachment"
          },
          {
            "id": "c-key",
            "t": "text",
            "text": "Đúng tên · đúng việc · rõ hạn",
            "x": 3996,
            "y": 650,
            "size": 52,
            "at": "l3:name the person",
            "color": "accent",
            "hl": [
              {
                "text": "rõ hạn",
                "at": "l3:deadline"
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
          "say": "End with a request, a name and a time: please reply by three on Thursday.",
          "sub": "Kết bằng đề nghị có tên, có giờ: “Anh phản hồi trước 15 giờ thứ Năm nhé.”",
          "keys": [
            "có tên, có giờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Angry? Save a draft till morning. Before sending, check the attachment, To and CC.",
          "sub": "Đang bực thì lưu nháp, sáng mai đọc lại. Trước khi gửi: xem tệp đính kèm, ô To, CC.",
          "keys": [
            "lưu nháp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Name the person, give the task, write the deadline.",
          "sub": "Gọi đúng tên, giao đúng việc, ghi rõ hạn.",
          "keys": [
            "Gọi đúng tên",
            "ghi rõ hạn"
          ]
        }
      ],
      "ref": "p2,p4"
    },
    {
      "id": "s08",
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
            "text": "② Thứ Hai 14:00 · Góp ý",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:monday"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "props": [
                "sandwich"
              ]
            },
            "at": "l1:feedback",
            "caption": "Thứ Hai · 14:00",
            "icon": "sandwich"
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "Khen slide",
            "x": 5964,
            "y": 170,
            "size": 48,
            "at": "l2:slides",
            "color": "muted"
          },
          {
            "id": "d-g",
            "t": "text",
            "text": "Trả lời khách chậm",
            "x": 5964,
            "y": 240,
            "size": 54,
            "at": "l2:slow",
            "color": "coral",
            "hl": [
              {
                "text": "chậm",
                "at": "l2:slow"
              }
            ]
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "Khen tinh thần",
            "x": 5964,
            "y": 320,
            "size": 48,
            "at": "l2:spirit",
            "color": "muted"
          },
          {
            "id": "d-bm",
            "t": "text",
            "text": "Bánh mì kẹp: nhân bị lạc",
            "x": 5964,
            "y": 410,
            "size": 50,
            "at": "l4:sandwich",
            "color": "coral",
            "hl": [
              {
                "text": "nhân bị lạc",
                "at": "l4:filling"
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
          "say": "Stop two: Monday afternoon. Thảo has feedback for Dũng.",
          "sub": "Chặng hai: chiều thứ Hai. Thảo muốn góp ý với Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Great slides! Oh, client replies are a bit slow. And I love your team spirit!",
          "sub": "Slide hay lắm! À, trả lời khách hơi chậm nhé. Tinh thần thì tuyệt!",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Thanks! So nice to hear.",
          "sub": "Cảm ơn nhé! Nghe vui ghê.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A feedback sandwich. Dũng remembers the bread, loses the filling. Clients still complain.",
          "sub": "Góp ý kiểu bánh mì kẹp: Dũng nhớ hai lát khen, quên phần nhân. Khách vẫn phàn nàn.",
          "keys": [
            "bánh mì kẹp"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s09",
      "module": "BRK-04",
      "data": {
        "title": "Góp ý cho đồng nghiệp",
        "wrong": "Kẹp góp ý giữa hai lời khen",
        "right": "Khen thật lòng, góp ý thẳng",
        "wrongIllus": "sandwich",
        "rightIllus": "speech-balloon"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Hide it between two compliments?",
          "sub": "Kẹp góp ý giữa hai lời khen?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Praise sincerely, give feedback directly. Don't wrap them together.",
          "sub": "Khen thật lòng, góp ý thẳng, đừng gói chung một gói.",
          "keys": [
            "Khen thật lòng, góp ý thẳng"
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
            "fit": "D",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "d-real",
            "t": "text",
            "text": "Ảnh hưởng thật hay khác thói quen?",
            "x": 5964,
            "y": 490,
            "size": 44,
            "at": "l1:real impact",
            "hl": [
              {
                "text": "Ảnh hưởng thật",
                "at": "l1:real impact"
              }
            ]
          },
          {
            "id": "d-pr",
            "t": "text",
            "text": "Nói riêng · nói sớm · gặp hay gọi",
            "x": 6784,
            "y": 685,
            "size": 42,
            "at": "l1:privately",
            "color": "accent"
          },
          {
            "id": "d-b1",
            "t": "box",
            "x": 5964,
            "y": 580,
            "w": 250,
            "h": 80,
            "at": "l2:situation",
            "stroke": 4
          },
          {
            "id": "d-s1",
            "t": "text",
            "text": "Tình huống",
            "x": 5984,
            "y": 590,
            "size": 44,
            "at": "l2:situation+200"
          },
          {
            "id": "d-b2",
            "t": "box",
            "x": 6234,
            "y": 580,
            "w": 230,
            "h": 80,
            "at": "l2:behaviour",
            "stroke": 4
          },
          {
            "id": "d-s2",
            "t": "text",
            "text": "Hành vi",
            "x": 6269,
            "y": 590,
            "size": 44,
            "at": "l2:behaviour+200"
          },
          {
            "id": "d-b3",
            "t": "box",
            "x": 6484,
            "y": 580,
            "w": 270,
            "h": 80,
            "at": "l2:impact",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "d-s3",
            "t": "text",
            "text": "Ảnh hưởng",
            "x": 6509,
            "y": 590,
            "size": 44,
            "at": "l2:impact+200",
            "hl": [
              {
                "text": "Ảnh hưởng",
                "at": "l3:half a day"
              }
            ]
          },
          {
            "id": "d-ask",
            "t": "text",
            "text": "“Chị thấy sao?” → chốt 1 việc",
            "x": 5964,
            "y": 690,
            "size": 40,
            "at": "l4:what do you think",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Real impact, or just a different habit? If real, say it privately, within two days.",
          "sub": "Ảnh hưởng thật hay chỉ khác thói quen? Đáng nói thì nói riêng, nói sớm.",
          "keys": [
            "nói riêng, nói sớm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three steps: situation, behaviour, impact.",
          "sub": "Ba bước: tình huống, hành vi, ảnh hưởng.",
          "keys": [
            "tình huống, hành vi, ảnh hưởng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Tuesday's client report had three numbers off. The client called, and the team lost half a day.",
          "sub": "Báo cáo gửi khách thứ Ba lệch ba số liệu. Khách gọi hỏi, nhóm mất nửa buổi giải thích."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then ask: what do you think? And agree on one clear step.",
          "sub": "Rồi hỏi “Chị thấy sao?” và chốt một thoả thuận cụ thể.",
          "keys": [
            "chốt một thoả thuận"
          ]
        }
      ],
      "ref": "p5,p6"
    },
    {
      "id": "s11",
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
            "text": "③ Thứ Ba 9:00 · Từ chối",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:tuesday"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "worried"
                }
              ],
              "props": [
                "clipboard"
              ]
            },
            "at": "l1:tuesday",
            "caption": "Thứ Ba · 9:00",
            "icon": "clipboard"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Thảo: 2 việc, hạn thứ Sáu",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l3:two tasks",
            "hl": [
              {
                "text": "2 việc",
                "at": "l3:two tasks"
              }
            ]
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "+ 1 bộ slide = ?",
            "x": 7932,
            "y": 250,
            "size": 50,
            "at": "l3:friday",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three: Tuesday morning. Meet Cô Hoa, the head of department. Short words, long to-do list.",
          "sub": "Chặng ba: sáng thứ Ba. Đây là cô Hoa, trưởng phòng. Nói ngắn, việc dài.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, can you also make the slides for the new client?",
          "sub": "Thảo làm thêm bộ slide cho khách mới nhé?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Thảo already holds two tasks, both due Friday.",
          "sub": "Thảo đang ôm hai việc, cùng hạn thứ Sáu."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Ba · sếp giao thêm việc",
        "actors": [
          {
            "id": "thao",
            "side": "left"
          },
          {
            "id": "hoa",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Nhận thêm khi đã kín việc",
          "why": "Đang ôm hai việc hạn thứ Sáu; nhận hết thì cả ba có thể dang dở.",
          "rule": "Nêu việc đang làm, để sếp chọn ưu tiên"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Yes, of course!",
          "sub": "Dạ được ạ!",
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
          "say": "Two Friday tasks plus one? All three may end half done.",
          "sub": "Hai việc hạn thứ Sáu, thêm một? Cả ba có thể dang dở.",
          "keys": [
            "cả ba có thể dang dở"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại nào!",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "I'm on two tasks due Friday. Which one should come first?",
          "sub": "Em đang làm hai việc hạn thứ Sáu. Chị muốn em ưu tiên việc nào ạ?",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Now the boss decides with the full picture.",
          "sub": "Giờ sếp quyết đúng, vì có đủ thông tin.",
          "phase": "redo",
          "keys": [
            "có đủ thông tin"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p11,p12"
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
          }
        ],
        "items": [
          {
            "id": "e-uy",
            "t": "text",
            "text": "Nhận hết rồi trễ → mất uy tín",
            "x": 7932,
            "y": 350,
            "size": 48,
            "at": "l1:missing",
            "color": "coral",
            "hl": [
              {
                "text": "mất uy tín",
                "at": "l1:costs"
              }
            ]
          },
          {
            "id": "e-h",
            "t": "text",
            "text": "Cần nghĩ: hẹn giờ trả lời",
            "x": 7932,
            "y": 430,
            "size": 48,
            "at": "l2:think"
          },
          {
            "id": "e-s",
            "t": "text",
            "text": "Ghi nhận → Rõ → Lý do → Phương án",
            "x": 7932,
            "y": 510,
            "size": 42,
            "at": "l3:four steps",
            "color": "accent",
            "hl": [
              {
                "text": "Phương án",
                "at": "l3:another option"
              }
            ]
          },
          {
            "id": "e-lui",
            "t": "text",
            "text": "Sửa lùi ngày chứng từ: KHÔNG",
            "x": 8752,
            "y": 685,
            "size": 44,
            "at": "l4:backdate",
            "color": "coral"
          },
          {
            "id": "e-key",
            "t": "text",
            "text": "Đưa danh sách việc, sếp chọn",
            "x": 7932,
            "y": 620,
            "size": 52,
            "at": "l5:task list",
            "color": "accent",
            "hl": [
              {
                "text": "sếp chọn",
                "at": "l5:pick"
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
          "say": "Saying no isn't unprofessional. Taking everything, then missing deadlines, costs your reputation.",
          "sub": "Từ chối không làm bạn kém chuyên nghiệp. Nhận hết rồi trễ hạn mới mất uy tín.",
          "keys": [
            "mất uy tín"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Need to think? Give a time: I'll reply before three this afternoon.",
          "sub": "Cần suy nghĩ thì hẹn giờ: “Em trả lời chị trước 3 giờ chiều nay.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Four steps: show you understand, a clear answer, one short reason, another option.",
          "sub": "Bốn bước: ghi nhận nhu cầu, trả lời rõ, một lý do ngắn, một phương án khác.",
          "keys": [
            "Bốn bước"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Asked to backdate a document? Refuse, firmly and briefly.",
          "sub": "Bị nhờ sửa lùi ngày chứng từ? Từ chối dứt khoát, ngắn gọn.",
          "keys": [
            "dứt khoát, ngắn gọn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Show the boss your task list. Let the boss pick the priority.",
          "sub": "Đưa sếp danh sách việc, để sếp chọn ưu tiên.",
          "keys": [
            "để sếp chọn ưu tiên"
          ]
        }
      ],
      "ref": "p9,p10,p12"
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
            "text": "④ Thứ Ba 15:00 · Họp mạng",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:afternoon"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "face": "neutral"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "laptop"
              ]
            },
            "at": "l1:online",
            "caption": "Thứ Ba · 15:00",
            "icon": "laptop"
          },
          {
            "id": "f-say",
            "t": "text",
            "text": "“Chẳng liên quan gì đến mình”",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l2:nothing",
            "color": "muted"
          },
          {
            "id": "f-mic",
            "t": "text",
            "text": "Micro: VẪN BẬT",
            "x": 60,
            "y": 1345,
            "size": 60,
            "at": "l3:over ten",
            "color": "coral",
            "hl": [
              {
                "text": "VẪN BẬT",
                "at": "l3:heard"
              }
            ]
          },
          {
            "id": "f-10",
            "t": "text",
            "text": "Hơn chục người nghe rõ",
            "x": 60,
            "y": 1440,
            "size": 50,
            "at": "l3:every word"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four: Tuesday afternoon, a big online meeting. Dũng turns to his roommate.",
          "sub": "Chặng bốn: chiều thứ Ba, họp trực tuyến đông người. Dũng quay sang bạn cùng phòng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "So long! Nothing to do with me.",
          "sub": "Họp gì mà dài thế, chẳng liên quan gì đến mình.",
          "face": "neutral",
          "pose": "shrug"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "His mic was still on. Over ten people heard every word.",
          "sub": "Micro vẫn bật. Hơn chục người nghe rõ từng chữ.",
          "keys": [
            "Micro vẫn bật"
          ]
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s15",
      "module": "BRK-01",
      "data": {
        "illus": "laptop",
        "around": [
          "microphone",
          "speaker-high-volume"
        ],
        "label": "Micro đang bật!",
        "note": "Không nói thì tắt micro"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Freeze! The mic is on.",
          "sub": "Dừng hình! Micro đang bật."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Not speaking? Mute. Every single time.",
          "sub": "Không nói thì tắt micro, luôn luôn như vậy.",
          "keys": [
            "tắt micro"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop"
        }
      ],
      "ref": "p15,p16"
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
            "id": "f-2c",
            "t": "text",
            "text": "Họp khi cần bàn hai chiều",
            "x": 60,
            "y": 1530,
            "size": 48,
            "at": "l1:two-way",
            "hl": [
              {
                "text": "hai chiều",
                "at": "l1:two-way"
              }
            ]
          },
          {
            "id": "f-pre",
            "t": "text",
            "text": "Gửi trước: mục tiêu, chương trình, link",
            "x": 60,
            "y": 1605,
            "size": 40,
            "at": "l2:goal"
          },
          {
            "id": "f-chk",
            "t": "text",
            "text": "Micro · camera · mạng · tắt báo",
            "x": 60,
            "y": 1670,
            "size": 42,
            "at": "l3:camera"
          },
          {
            "id": "f-win",
            "t": "text",
            "text": "Chia sẻ 1 cửa sổ",
            "x": 60,
            "y": 1740,
            "size": 46,
            "at": "l3:one window",
            "color": "accent"
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "5 phút cuối: việc, người, hạn",
            "x": 880,
            "y": 1775,
            "size": 42,
            "at": "l4:last five",
            "color": "accent",
            "hl": [
              {
                "text": "hạn",
                "at": "l4:deadline"
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
          "say": "Meet only for two-way talk. One-way news? An email does the job.",
          "sub": "Chỉ họp khi cần bàn hai chiều. Thông báo một chiều thì gửi email.",
          "keys": [
            "bàn hai chiều"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Hosting? Send the goal, agenda, documents and link ahead. Far away? Write both time zones.",
          "sub": "Chủ trì: gửi trước mục tiêu, chương trình, tài liệu, link. Người ở xa: ghi giờ cả hai bên."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Check mic, camera, connection. Notifications off. Share one window, not your whole screen.",
          "sub": "Kiểm tra micro, camera, mạng, tắt thông báo. Chỉ chia sẻ đúng một cửa sổ.",
          "keys": [
            "một cửa sổ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Last five minutes: every task gets one owner and one deadline.",
          "sub": "Năm phút cuối: mỗi việc một người phụ trách, một hạn chót.",
          "keys": [
            "một hạn chót"
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
            "text": "⑤ Thứ Tư 7:00 · Xin nghỉ",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:wednesday"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "face": "sad",
                  "pose": "phone"
                }
              ],
              "props": [
                "face-with-thermometer"
              ]
            },
            "at": "l1:fever",
            "caption": "Thứ Tư · 7:00 · ở nhà",
            "icon": "face-with-thermometer"
          },
          {
            "id": "g-9",
            "t": "text",
            "text": "9:00: khách C đến",
            "x": 2028,
            "y": 1260,
            "size": 52,
            "at": "l1:nine",
            "color": "coral",
            "hl": [
              {
                "text": "khách C",
                "at": "l1:client"
              }
            ]
          },
          {
            "id": "g-grp",
            "t": "text",
            "text": "Thả vào nhóm chung",
            "x": 2028,
            "y": 1345,
            "size": 50,
            "at": "l3:group chat",
            "color": "muted"
          },
          {
            "id": "g-grpx",
            "t": "strike",
            "over": "g-grp",
            "at": "l3:stone"
          },
          {
            "id": "g-ok",
            "t": "text",
            "text": "Nhắn riêng quản lý + việc gấp",
            "x": 2028,
            "y": 1430,
            "size": 46,
            "at": "l5:right person",
            "color": "accent",
            "hl": [
              {
                "text": "Nhắn riêng",
                "at": "l5:right person"
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
          "say": "Stop five: Wednesday, seven a.m. Dũng has a fever. And client C comes at nine.",
          "sub": "Chặng năm: bảy giờ sáng thứ Tư. Dũng sốt từ đêm. Chín giờ khách C hẹn đến."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I'll just post in the team chat: off sick today.",
          "sub": "Nhắn nhóm chung là xong: “Hôm nay em xin nghỉ ạ.”",
          "face": "sad",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In a busy group chat, that line sinks like a stone in a pond.",
          "sub": "Giữa nhóm chat đông vui, câu ấy chìm như đá ném ao.",
          "keys": [
            "chìm như đá ném ao"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Better: to Cô Hoa. Fever, off today. Client C at nine, please send someone.",
          "sub": "Thôi, nhắn riêng cô Hoa: “Em sốt, xin nghỉ. Chín giờ khách C đến, nhờ cô cử người tiếp.”",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Tell the right person. Don't just drop it in the group chat.",
          "sub": "Báo đúng người, đừng chỉ thả vào nhóm chung.",
          "keys": [
            "Báo đúng người"
          ]
        }
      ],
      "ref": "p19,p20"
    },
    {
      "id": "s18",
      "module": "BRK-03",
      "data": {
        "value": 12,
        "suffix": " ngày",
        "label": "nghỉ hằng năm có lương, làm đủ 12 tháng",
        "illus": "spiral-calendar"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Leave is a normal right.",
          "sub": "Nghỉ phép là quyền lợi bình thường."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Twelve paid working days a year, after twelve full months.",
          "sub": "Mười hai ngày làm việc có lương mỗi năm, khi làm đủ mười hai tháng.",
          "keys": [
            "Mười hai ngày"
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
            "fit": "G",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Bộ luật Lao động 2019, Điều 113 — điều kiện làm việc bình thường",
            "x": 2028,
            "y": 1822,
            "size": 26,
            "at": "l1",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "g-hr",
            "t": "text",
            "text": "Nội quy rộng hơn? Hỏi nhân sự",
            "x": 2028,
            "y": 1515,
            "size": 46,
            "at": "l1:hr",
            "hl": [
              {
                "text": "Hỏi nhân sự",
                "at": "l1:hr"
              }
            ]
          },
          {
            "id": "g-ve",
            "t": "text",
            "text": "Báo quản lý trước khi đặt vé",
            "x": 2028,
            "y": 1590,
            "size": 48,
            "at": "l2:booking",
            "color": "accent"
          },
          {
            "id": "g-mail",
            "t": "text",
            "text": "Email: ngày, loại, lý do, người thay",
            "x": 2028,
            "y": 1665,
            "size": 42,
            "at": "l2:dates"
          },
          {
            "id": "g-bg",
            "t": "text",
            "text": "Bàn giao bằng bảng",
            "x": 2028,
            "y": 1735,
            "size": 50,
            "at": "l3:table",
            "hl": [
              {
                "text": "bằng bảng",
                "at": "l3:table"
              }
            ]
          },
          {
            "id": "g-bg2",
            "t": "text",
            "text": "việc · đến đâu · tiếp gì · hỏi ai",
            "x": 2848,
            "y": 1775,
            "size": 40,
            "at": "l3:contact",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "That's the Labour Code twenty nineteen. Company rules may give more, so ask HR.",
          "sub": "Theo Bộ luật Lao động 2019. Nội quy công ty có thể rộng hơn, hãy hỏi nhân sự.",
          "keys": [
            "hỏi nhân sự"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Tell your manager before booking tickets. Then email dates, type, reason, and cover.",
          "sub": "Báo quản lý trước khi đặt vé. Rồi email: ngày, loại nghỉ, lý do, người thay.",
          "keys": [
            "trước khi đặt vé"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And hand over in a table: what, how far, what next, who to contact.",
          "sub": "Và bàn giao bằng bảng: việc gì, đến đâu, làm tiếp gì, liên hệ ai.",
          "keys": [
            "bàn giao bằng bảng"
          ]
        }
      ],
      "ref": "p17,p18"
    },
    {
      "id": "s20",
      "module": "BRK-07",
      "data": {
        "question": "Lắng nghe thì ai mà chẳng biết?",
        "illus": "ear"
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
          "say": "Listening is easy, right? Everyone has two ears.",
          "sub": "Lắng nghe thì ai mà chẳng biết? Ai cũng có hai tai.",
          "keys": [
            "hai tai"
          ]
        }
      ],
      "ref": "p21"
    },
    {
      "id": "s21",
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
            "text": "⑥ Thứ Năm 10:00 · Lắng nghe",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:thursday"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "face": "sad",
                  "pose": "phone"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "props": [
                "telephone-receiver"
              ]
            },
            "at": "l1:phone",
            "caption": "Thứ Năm · 10:00",
            "icon": "telephone-receiver"
          },
          {
            "id": "h-adv",
            "t": "text",
            "text": "Nhảy ngay vào lời khuyên",
            "x": 3996,
            "y": 1260,
            "size": 50,
            "at": "l4:advice",
            "color": "coral"
          },
          {
            "id": "h-advx",
            "t": "strike",
            "over": "h-adv",
            "at": "l6:people"
          },
          {
            "id": "h-fe",
            "t": "text",
            "text": "Gọi tên cảm xúc, hỏi cần gì",
            "x": 3996,
            "y": 1345,
            "size": 46,
            "at": "l6:understood",
            "color": "accent",
            "hl": [
              {
                "text": "cảm xúc",
                "at": "l6:understood"
              }
            ]
          },
          {
            "id": "h-key",
            "t": "text",
            "text": "Được hiểu trước, lời khuyên sau",
            "x": 3996,
            "y": 1435,
            "size": 50,
            "at": "l6:advice",
            "color": "accent",
            "hl": [
              {
                "text": "Được hiểu trước",
                "at": "l6:understood"
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
          "say": "Stop six: Thursday morning. Thảo just put down the phone.",
          "sub": "Chặng sáu: sáng thứ Năm. Thảo vừa đặt điện thoại xuống."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "A difficult client just shouted at me.",
          "sub": "Vừa bị một khách khó tính mắng.",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "You should do this, and this. That's the right way!",
          "sub": "Bạn phải làm thế này, thế này mới đúng!",
          "pose": "point"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Straight into advice. Thảo feels blamed, and stops talking. Take two!",
          "sub": "Nhảy ngay vào lời khuyên. Thảo thấy bị trách, thôi không kể. Làm lại!",
          "keys": [
            "Nhảy ngay vào lời khuyên"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "That sounds tiring. Do you want me to just listen, or give advice?",
          "sub": "Nghe mệt thật đấy. Bạn muốn mình nghe thôi, hay góp ý?",
          "face": "worried",
          "pose": "hold"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "People need to be understood before they need advice.",
          "sub": "Người ta cần được hiểu trước khi cần lời khuyên.",
          "keys": [
            "được hiểu"
          ]
        }
      ],
      "ref": "p23,p24"
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
            "id": "h-al",
            "t": "text",
            "text": "Nghe để hiểu, không chờ lượt",
            "x": 3996,
            "y": 1525,
            "size": 48,
            "at": "l1:understand",
            "hl": [
              {
                "text": "Nghe để hiểu",
                "at": "l1:understand"
              }
            ]
          },
          {
            "id": "h-ph",
            "t": "text",
            "text": "Gác điện thoại · không ngắt lời",
            "x": 3996,
            "y": 1600,
            "size": 44,
            "at": "l1:phone down"
          },
          {
            "id": "h-qq",
            "t": "text",
            "text": "“Cuối thứ Sáu hay sáng thứ Hai?”",
            "x": 4816,
            "y": 1775,
            "size": 42,
            "at": "l2:friday",
            "color": "muted"
          },
          {
            "id": "h-rp",
            "t": "text",
            "text": "Nhắc lại bằng lời mình",
            "x": 3996,
            "y": 1670,
            "size": 48,
            "at": "l3:own words",
            "color": "accent"
          },
          {
            "id": "h-sum",
            "t": "text",
            "text": "Cuối buổi: tóm tắt điều đã chốt",
            "x": 3996,
            "y": 1745,
            "size": 44,
            "at": "l3:sum up"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Active listening: listen to understand, not to wait your turn. Phone down, no interrupting.",
          "sub": "Lắng nghe chủ động: nghe để hiểu, không chờ lượt nói. Gác điện thoại, không ngắt lời.",
          "keys": [
            "nghe để hiểu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask to be clear: end of Friday, or Monday morning?",
          "sub": "Hỏi để làm rõ: “Hạn là cuối thứ Sáu hay sáng thứ Hai ạ?”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Repeat it in your own words. At the end, sum up what was agreed.",
          "sub": "Nhắc lại bằng lời của mình. Cuối buổi, tóm tắt điều đã chốt để cùng kiểm tra.",
          "keys": [
            "bằng lời của mình"
          ]
        }
      ],
      "ref": "p21,p22"
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
            "at": "l3",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Thứ Năm 15:00 · Ý tưởng",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:meeting"
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
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "side": "right"
                }
              ],
              "props": [
                "light-bulb"
              ]
            },
            "at": "l1:meeting",
            "caption": "Thứ Năm · 15:00 · họp phòng",
            "icon": "light-bulb"
          },
          {
            "id": "i-old",
            "t": "text",
            "text": "“Chắc ý này không hay đâu ạ…”",
            "x": 5964,
            "y": 1260,
            "size": 44,
            "at": "l1:probably",
            "color": "muted"
          },
          {
            "id": "i-oldx",
            "t": "strike",
            "over": "i-old",
            "at": "l2:one sentence"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Viết thành 1 câu · xin 1 chỗ",
            "x": 5964,
            "y": 1345,
            "size": 46,
            "at": "l2:one sentence",
            "color": "accent",
            "hl": [
              {
                "text": "1 câu",
                "at": "l2:one sentence"
              }
            ]
          },
          {
            "id": "i-run",
            "t": "text",
            "text": "Chạy thử 4 tuần, 1 kho",
            "x": 6784,
            "y": 1775,
            "size": 46,
            "at": "l3:trial",
            "hl": [
              {
                "text": "4 tuần",
                "at": "l3:four-week"
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
          "say": "Stop seven: the team meeting. Old Dũng would cut in: this idea is probably bad...",
          "sub": "Chặng bảy: họp phòng. Dũng ngày xưa chen ngang: “Chắc ý này không hay đâu ạ…”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "New Dũng wrote it as one sentence, and asked Cô Hoa for a slot.",
          "sub": "Dũng bây giờ viết ý thành một câu, xin cô Hoa một chỗ trong chương trình.",
          "keys": [
            "một câu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "The problem first. My idea: a four-week trial in one warehouse.",
          "sub": "Vấn đề trước đã. Ý của em: chạy thử bốn tuần ở một kho.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Do you have the numbers?",
          "sub": "Có số liệu chưa em?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Not yet. I'll send them before Friday.",
          "sub": "Em chưa có. Em gửi cô trước thứ Sáu.",
          "face": "happy"
        }
      ],
      "ref": "p25,p26"
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
          }
        ],
        "items": [
          {
            "id": "i-pb",
            "t": "text",
            "text": "Vấn đề → giải pháp",
            "x": 5964,
            "y": 1435,
            "size": 50,
            "at": "l1:problem",
            "hl": [
              {
                "text": "giải pháp",
                "at": "l1:solution"
              }
            ]
          },
          {
            "id": "i-rr",
            "t": "text",
            "text": "Lợi ích kèm rủi ro",
            "x": 5964,
            "y": 1515,
            "size": 50,
            "at": "l1:risks"
          },
          {
            "id": "i-fri",
            "t": "text",
            "text": "Chưa có số → hẹn ngày gửi",
            "x": 5964,
            "y": 1595,
            "size": 48,
            "at": "l1:numbers"
          },
          {
            "id": "i-sm",
            "t": "text",
            "text": "Đề nghị nhỏ, có hạn, quyết ngay",
            "x": 5964,
            "y": 1680,
            "size": 50,
            "at": "l2:small",
            "color": "accent",
            "hl": [
              {
                "text": "quyết ngay",
                "at": "l2:decide"
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
          "say": "The recipe: problem, then solution, benefits with risks. No numbers yet? Promise a date.",
          "sub": "Công thức: vấn đề, rồi giải pháp, lợi ích kèm rủi ro. Chưa có số thì hẹn ngày gửi.",
          "keys": [
            "vấn đề, rồi giải pháp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "End with a small, time-limited request the meeting can decide right now.",
          "sub": "Kết bằng một đề nghị nhỏ, có thời hạn, mà cuộc họp quyết được ngay.",
          "keys": [
            "quyết được ngay"
          ]
        }
      ],
      "ref": "p26"
    },
    {
      "id": "s25",
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
            "text": "Thứ Sáu 16:00 · tuần sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:friday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
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
                  "id": "thao",
                  "side": "right",
                  "pose": "thumb"
                }
              ],
              "props": [
                "e-mail"
              ]
            },
            "at": "l1:friday",
            "caption": "Thứ Sáu · 16:00 · tuần sau",
            "icon": "e-mail"
          },
          {
            "id": "j-sub",
            "t": "text",
            "text": "Tiêu đề: việc + hạn",
            "x": 7932,
            "y": 1260,
            "size": 50,
            "at": "l2:subject"
          },
          {
            "id": "j-nm",
            "t": "text",
            "text": "Từng tên · từng phần",
            "x": 7932,
            "y": 1340,
            "size": 50,
            "at": "l2:each name",
            "hl": [
              {
                "text": "Từng tên",
                "at": "l2:each name"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Lựa lời mà nói…”",
            "x": 7932,
            "y": 1430,
            "size": 52,
            "at": "l4:choose",
            "color": "accent",
            "hl": [
              {
                "text": "Lựa lời",
                "at": "l4:choose"
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
          "say": "Friday, four p.m. again. Same desk, same Dũng, new email.",
          "sub": "Lại bốn giờ chiều thứ Sáu. Vẫn bàn ấy, vẫn Dũng ấy, email mới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Subject with task and deadline. Each name, each part. Send!",
          "sub": "Tiêu đề có việc và hạn. Từng tên, từng phần. Gửi!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Got it. My part is back before five.",
          "sub": "Nhận rồi. Phần mình gửi lại trước năm giờ.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Words cost nothing. Choose them well, and they buy replies before five.",
          "sub": "Lời nói chẳng mất tiền mua. Lựa lời mà nói, mua được cả câu trả lời trước năm giờ.",
          "keys": [
            "mua được cả câu trả lời"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "to": "l1",
          "key": "tich-tac-dai"
        }
      ],
      "ref": "p1,p4"
    },
    {
      "id": "s27",
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
            "at": "l1:main point",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:facts",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:listen",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l3:end",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4696,
            "y": 640,
            "at": "l1:main point"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6694,
            "y": 600,
            "at": "l2:facts"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1435,
            "at": "l3:listen"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "c-key"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l1:deadline"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: the main point first, with a name and a deadline.",
          "sub": "Tóm lại: việc chính nói trước, kèm tên người và thời hạn.",
          "keys": [
            "việc chính"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Talk about facts, not the person.",
          "sub": "Nói về sự việc, không nhận xét con người.",
          "keys": [
            "sự việc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Listen to understand, repeat it back, put it in writing.",
          "sub": "Nghe để hiểu, nhắc lại, rồi chốt bằng chữ.",
          "keys": [
            "chốt bằng chữ"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s43",
      "module": "QUIZ-01",
      "ref": "questions[25]",
      "data": {
        "q": "Before your leave starts, how should you hand over your work?",
        "options": [
          "Write a table of each task, its progress, the next step, and who to contact",
          "Leave everything as it is, because the work can wait until you return",
          "Tell one colleague quickly in the corridor, and trust them to remember everything"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "clipboard",
        "why": "Bảng bàn giao ghi việc gì, đến đâu, làm tiếp gì, liên hệ ai."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before your leave starts, how should you hand over your work?",
          "sub": "Trước khi nghỉ, bạn nên bàn giao công việc thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Write a table of each task, its progress, the next step, and who to contact.",
          "sub": "Viết bảng: từng việc, đến đâu, bước tiếp theo, liên hệ ai."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "With the table, the person covering can do the work, and you can rest.",
          "sub": "Có bảng, người thay đọc là làm được, còn bạn nghỉ cũng yên."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s44",
      "module": "END-05",
      "data": {
        "text": "Hôm nay: sửa tiêu đề một email",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fix the subject line of today's email. Then try the forty questions below!",
          "sub": "Sửa tiêu đề email hôm nay cho rõ việc và hạn. Rồi thử bốn mươi câu bên dưới nhé!"
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s25"
  }
};
