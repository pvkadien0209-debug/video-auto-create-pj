// bar-admission-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-admission-overview--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "bar-academy-admission",
    "slug": "bar-admission-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Lớp đào tạo nghề luật sư tuyển sinh thế nào?",
    "series": "Vào lớp đào tạo nghề luật sư — hồ sơ, xét tuyển và chọn hệ học tại Học viện Tư pháp"
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
          }
        ],
        "items": [
          {
            "id": "a-num",
            "t": "text",
            "text": "0 bài thi",
            "x": 60,
            "y": 110,
            "size": 160,
            "at": "l1:Zero",
            "color": "accent",
            "hl": [
              {
                "text": "0 bài thi",
                "at": "l1:exams"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "đầu vào lớp luật sư",
            "x": 70,
            "y": 330,
            "size": 56,
            "at": "l1:entrance"
          },
          {
            "id": "a-myth",
            "t": "text",
            "text": "Ta tưởng: ôn thi như đại học?",
            "x": 70,
            "y": 430,
            "size": 52,
            "at": "l2:cram",
            "color": "muted"
          },
          {
            "id": "a-mythx",
            "t": "strike",
            "over": "a-myth",
            "at": "l3:Nope"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: Thông báo tuyển sinh khoá 28 lần 1/2026, Học viện Tư pháp",
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
          "say": "Zero entrance exams. That is how the bar training class at the Judicial Academy admits you.",
          "sub": "Không một bài thi đầu vào. Lớp đào tạo nghề luật sư của Học viện Tư pháp tuyển như thế.",
          "keys": [
            "Không một bài thi đầu vào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet many people cram law for a month, like a second university exam.",
          "sub": "Vậy mà nhiều người vẫn ôn luật cả tháng, như thi đại học lần hai.",
          "keys": [
            "thi đại học lần hai"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Nope. The notice says selection by application.",
          "sub": "Không đâu. Thông báo ghi: xét tuyển hồ sơ.",
          "keys": [
            "xét tuyển hồ sơ"
          ]
        }
      ],
      "ref": "intro,p1,p3"
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
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone"
                }
              ],
              "props": [
                "mobile-phone",
                "books"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
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
            "caption": "Tối thứ Sáu · thông báo khoá 28",
            "icon": "mobile-phone"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "“Thi hay xét? Bao lâu?”",
            "x": 900,
            "y": 640,
            "size": 46,
            "at": "l3:exam",
            "color": "coral",
            "hl": [
              {
                "text": "Thi hay xét",
                "at": "l3:exam"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Có công mài sắt…”",
            "x": 70,
            "y": 560,
            "size": 58,
            "at": "l4:iron",
            "color": "accent",
            "hl": [
              {
                "text": "mài sắt",
                "at": "l4:iron"
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
          "say": "Meet Thảo.",
          "sub": "Đây là Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Law graduate, legal staff in Hanoi. She plans even breakfast in bullet points.",
          "sub": "Cử nhân luật, làm pháp chế ở Hà Nội. Lên kế hoạch cả bữa sáng bằng gạch đầu dòng.",
          "keys": [
            "làm pháp chế"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Intake twenty-eight is open! Is there an exam? How long is the course?",
          "sub": "Khoá 28 tuyển sinh rồi! Có thi không? Học bao lâu?",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: with effort, an iron bar becomes a needle. Thảo grabs a whetstone.",
          "sub": "Ông bà dặn: “Có công mài sắt, có ngày nên kim.” Thảo xắn tay áo mài luôn.",
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
            "text": "Vào lớp luật sư thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:training",
            "hl": [
              {
                "text": "thế nào",
                "at": "l1:how"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: thi đầu vào",
            "x": 2028,
            "y": 160,
            "size": 54,
            "at": "l2:exam",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:not"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: xét hồ sơ",
            "x": 2028,
            "y": 250,
            "size": 60,
            "at": "l3:file",
            "color": "accent",
            "hl": [
              {
                "text": "xét hồ sơ",
                "at": "l3:file"
              }
            ]
          },
          {
            "id": "b-len",
            "t": "text",
            "text": "12 tháng · 36 tín chỉ",
            "x": 2868,
            "y": 160,
            "size": 64,
            "at": "l4:twelve",
            "hl": [
              {
                "text": "12 tháng",
                "at": "l4:twelve"
              },
              {
                "text": "36 tín chỉ",
                "at": "l4:credits"
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
          "say": "So how do you get into the bar training class?",
          "sub": "Vậy vào lớp đào tạo nghề luật sư thế nào?",
          "keys": [
            "thế nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not by an entrance exam.",
          "sub": "Không phải bằng thi đầu vào."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "By your application file. The academy selects by reviewing it.",
          "sub": "Mà bằng bộ hồ sơ. Học viện xét tuyển dựa trên hồ sơ.",
          "keys": [
            "xét tuyển"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then you study twelve months, thirty-six credits.",
          "sub": "Rồi học mười hai tháng, ba mươi sáu tín chỉ.",
          "keys": [
            "mười hai tháng",
            "ba mươi sáu tín chỉ"
          ]
        }
      ],
      "ref": "intro,p1,p5"
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
            "id": "b-road",
            "t": "text",
            "text": "Lộ trình gọn:",
            "x": 2028,
            "y": 380,
            "size": 52,
            "at": "l1:route",
            "hl": [
              {
                "text": "Lộ trình",
                "at": "l1:route"
              }
            ]
          },
          {
            "id": "b-r0",
            "t": "box",
            "x": 2028,
            "y": 470,
            "w": 300,
            "h": 100,
            "at": "l2:file",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-r1",
            "t": "box",
            "x": 2358,
            "y": 470,
            "w": 300,
            "h": 100,
            "at": "l2:twelve",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-r2",
            "t": "box",
            "x": 2688,
            "y": 470,
            "w": 300,
            "h": 100,
            "at": "l2:probation",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-r3",
            "t": "box",
            "x": 3018,
            "y": 470,
            "w": 300,
            "h": 100,
            "at": "l2:assessment",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-r4",
            "t": "box",
            "x": 3348,
            "y": 470,
            "w": 300,
            "h": 100,
            "at": "l2:certificate",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-rt0",
            "t": "text",
            "text": "Hồ sơ",
            "x": 2048,
            "y": 490,
            "size": 44,
            "at": "l2:file+200"
          },
          {
            "id": "b-rt1",
            "t": "text",
            "text": "Học 12 th",
            "x": 2378,
            "y": 490,
            "size": 44,
            "at": "l2:twelve+200"
          },
          {
            "id": "b-rt2",
            "t": "text",
            "text": "Tập sự 12 th",
            "x": 2708,
            "y": 490,
            "size": 44,
            "at": "l2:probation+200"
          },
          {
            "id": "b-rt3",
            "t": "text",
            "text": "Kiểm tra",
            "x": 3038,
            "y": 490,
            "size": 44,
            "at": "l2:assessment+200"
          },
          {
            "id": "b-rt4",
            "t": "text",
            "text": "Chứng chỉ",
            "x": 3368,
            "y": 490,
            "size": 44,
            "at": "l2:certificate+200"
          },
          {
            "id": "b-3w",
            "t": "text",
            "text": "Bài này: 3 tuần của Thảo",
            "x": 2028,
            "y": 640,
            "size": 50,
            "at": "l3:three weeks",
            "color": "accent",
            "hl": [
              {
                "text": "3 tuần",
                "at": "l3:three weeks"
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
          "say": "Here is the whole route, short version.",
          "sub": "Đây là cả lộ trình, bản rút gọn.",
          "keys": [
            "cả lộ trình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "File, twelve months of class, twelve months of probation, an assessment, then the certificate.",
          "sub": "Hồ sơ, mười hai tháng học, mười hai tháng tập sự, kỳ kiểm tra, rồi chứng chỉ.",
          "keys": [
            "mười hai tháng tập sự"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Today we follow Thảo for three weeks, from notice to posted file.",
          "sub": "Hôm nay theo Thảo ba tuần, từ lúc đọc thông báo đến lúc gửi hồ sơ.",
          "keys": [
            "ba tuần"
          ]
        }
      ],
      "ref": "intro,outro"
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
            "text": "① Sáng thứ Bảy · Thi hay xét?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Saturday"
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
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold"
                }
              ],
              "props": [
                "hot-beverage",
                "balance-scale"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "binh",
                  "move": "push"
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
            "at": "l1:coffee",
            "caption": "Sáng thứ Bảy · quán cà phê",
            "icon": "hot-beverage"
          },
          {
            "id": "c-sel",
            "t": "text",
            "text": "Hình thức: xét tuyển",
            "x": 3996,
            "y": 170,
            "size": 56,
            "at": "l3:selection",
            "color": "accent",
            "hl": [
              {
                "text": "xét tuyển",
                "at": "l3:selection"
              }
            ]
          },
          {
            "id": "c-th",
            "t": "text",
            "text": "Thảo: “Con định ôn cả tháng”",
            "x": 3996,
            "y": 270,
            "size": 46,
            "at": "l4:revise",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: Saturday morning, coffee with family.",
          "sub": "Chặng một: sáng thứ Bảy, cà phê với người nhà."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Uncle Bình, Thảo's uncle, a lawyer for decades. Slow, warm, never in a hurry.",
          "sub": "Đây là Bác Bình, bác ruột Thảo, làm luật sư mấy chục năm. Chậm, ấm, chẳng bao giờ vội.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Slow down. The notice says selection. They review your file, there is no entrance test.",
          "sub": "Từ từ con. Thông báo ghi xét tuyển. Người ta xét hồ sơ, không thi đầu vào.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Really? I planned to revise civil law for a whole month.",
          "sub": "Thật ạ? Con định ôn luật dân sự cả tháng.",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "binh",
          "say": "The hard test comes later, after training and probation. The bar federation runs it.",
          "sub": "Kỳ kiểm tra nặng ở phía sau, sau khi học và tập sự. Liên đoàn Luật sư tổ chức.",
          "keys": [
            "Liên đoàn Luật sư"
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
      "ref": "p1,p3"
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
            "id": "c-chk",
            "t": "text",
            "text": "Học viện xem:",
            "x": 3996,
            "y": 380,
            "size": 50,
            "at": "l1:checks",
            "hl": [
              {
                "text": "xem",
                "at": "l1:checks"
              }
            ]
          },
          {
            "id": "c-c1",
            "t": "text",
            "text": "đối tượng · điều kiện chung",
            "x": 3996,
            "y": 450,
            "size": 44,
            "at": "l1:target"
          },
          {
            "id": "c-c2",
            "t": "text",
            "text": "hồ sơ, lệ phí: đủ, đúng hạn",
            "x": 3996,
            "y": 515,
            "size": 44,
            "at": "l2:complete"
          },
          {
            "id": "c-ck",
            "t": "text",
            "text": "Ghi sai nội dung chuyển khoản",
            "x": 3996,
            "y": 590,
            "size": 44,
            "at": "l3:wrong",
            "color": "coral"
          },
          {
            "id": "c-ck2",
            "t": "text",
            "text": "→ không ai gỡ giúp",
            "x": 4036,
            "y": 650,
            "size": 44,
            "at": "l3:responsible",
            "color": "coral",
            "hl": [
              {
                "text": "không ai gỡ giúp",
                "at": "l3:responsible"
              }
            ]
          },
          {
            "id": "c-key",
            "t": "text",
            "text": "Hồ sơ = bài thi đầu tiên",
            "x": 4836,
            "y": 690,
            "size": 50,
            "at": "l4:first",
            "color": "accent",
            "hl": [
              {
                "text": "bài thi đầu tiên",
                "at": "l4:first exam"
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
          "say": "The academy checks the target group and general conditions.",
          "sub": "Học viện xem đối tượng và điều kiện chung."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then whether your file and fee arrived complete, on time.",
          "sub": "Rồi hồ sơ, lệ phí đã nộp đủ, đúng hạn chưa.",
          "keys": [
            "đủ, đúng hạn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A wrong transfer note? The notice says they are not responsible.",
          "sub": "Ghi sai nội dung chuyển khoản? Học viện không chịu trách nhiệm giải quyết.",
          "keys": [
            "không chịu trách nhiệm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So with no entrance test, your file is your first exam.",
          "sub": "Vậy không thi đầu vào thì bộ hồ sơ chính là bài thi đầu tiên.",
          "keys": [
            "bài thi đầu tiên"
          ]
        }
      ],
      "ref": "p1,p2,p4"
    },
    {
      "id": "s07",
      "module": "BRK-07",
      "data": {
        "question": "Một năm học nghề. Có lối tắt không?",
        "illus": "hourglass-not-done"
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
          "say": "A whole year of class. Is there a shortcut?",
          "sub": "Cả một năm học nghề. Có lối tắt nào không?",
          "keys": [
            "lối tắt"
          ]
        }
      ],
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
            "text": "② Chủ nhật · Lối tắt?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Sunday"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
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
            "caption": "Chủ nhật · gọi video từ quê",
            "icon": "mobile-phone"
          },
          {
            "id": "d-ex",
            "t": "text",
            "text": "Miễn đào tạo (Điều 13):",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l4:exempts",
            "hl": [
              {
                "text": "Miễn đào tạo",
                "at": "l4:exempts"
              }
            ]
          },
          {
            "id": "d-e1",
            "t": "text",
            "text": "• thẩm phán, KSV, điều tra viên",
            "x": 5964,
            "y": 240,
            "size": 36,
            "at": "l4:judges"
          },
          {
            "id": "d-e2",
            "t": "text",
            "text": "• GS, PGS luật, tiến sĩ luật",
            "x": 5964,
            "y": 295,
            "size": 36,
            "at": "l4:professors"
          },
          {
            "id": "d-e3",
            "t": "text",
            "text": "• một số ngạch chính, cao cấp",
            "x": 5964,
            "y": 350,
            "size": 36,
            "at": "l5:senior"
          },
          {
            "id": "d-new",
            "t": "text",
            "text": "Cử nhân mới ra trường",
            "x": 5964,
            "y": 430,
            "size": 48,
            "at": "l6:fresh",
            "color": "muted"
          },
          {
            "id": "d-newx",
            "t": "strike",
            "over": "d-new",
            "at": "l6:not"
          },
          {
            "id": "d-main",
            "t": "text",
            "text": "→ đường chính: 1 năm học",
            "x": 5964,
            "y": 510,
            "size": 52,
            "at": "l7:main road",
            "color": "accent",
            "hl": [
              {
                "text": "đường chính",
                "at": "l7:main road"
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
          "say": "Second stop: Sunday evening, a video call.",
          "sub": "Chặng hai: tối Chủ nhật, một cuộc gọi video."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, Thảo's cousin. Fresh law graduate back in a central province, fast as a motorbike taxi.",
          "sub": "Đây là Dũng, em họ Thảo. Vừa tốt nghiệp cử nhân luật, đang ở quê miền Trung, nhanh như xe ôm.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Sis, a year is too long! Isn't there some shortcut for people like us?",
          "sub": "Chị ơi, một năm lâu quá! Có lối tắt nào cho bọn mình không?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Article thirteen exempts judges, prosecutors, investigators, law professors and doctors of law.",
          "sub": "Điều 13 Luật Luật sư miễn đào tạo cho thẩm phán, kiểm sát viên, điều tra viên, giáo sư, tiến sĩ luật."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Plus some senior officials in law.",
          "sub": "Cùng một số ngạch chính, cao cấp ngành pháp luật."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Fresh graduates? Not on the list.",
          "sub": "Cử nhân mới ra trường? Không có trong danh sách."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "For most graduates, the one year class is the main road.",
          "sub": "Với phần lớn cử nhân, một năm học là đường chính.",
          "keys": [
            "đường chính"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p7,p8"
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
            "at": "l2",
            "fit": [
              "d-blk",
              "d-b1",
              "d-b2"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-blk",
            "t": "text",
            "text": "Học gì? (khoá 27, Đồng Nai)",
            "x": 5964,
            "y": 590,
            "size": 44,
            "at": "l1:learn",
            "hl": [
              {
                "text": "Học gì",
                "at": "l1:learn"
              }
            ]
          },
          {
            "id": "d-b1",
            "t": "text",
            "text": "đạo đức nghề · tố tụng · tư vấn",
            "x": 5964,
            "y": 650,
            "size": 40,
            "at": "l2:ethics"
          },
          {
            "id": "d-b2",
            "t": "text",
            "text": "ngoài tố tụng · chuyên sâu · thực tập",
            "x": 5964,
            "y": 705,
            "size": 40,
            "at": "l2:practice"
          },
          {
            "id": "d-cert",
            "t": "text",
            "text": "→ Giấy chứng nhận tốt nghiệp",
            "x": 6804,
            "y": 680,
            "size": 46,
            "at": "l3:certificate",
            "color": "accent",
            "hl": [
              {
                "text": "tốt nghiệp",
                "at": "l3:graduation"
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
          "say": "And what do you learn? A report on one class lists the blocks.",
          "sub": "Học gì? Bài viết về lớp khoá 27 ở Đồng Nai kể các khối nội dung.",
          "keys": [
            "Học gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ethics, litigation, advice, representation, practice skills, and a placement.",
          "sub": "Đạo đức nghề nghiệp, tố tụng, tư vấn, đại diện ngoài tố tụng, kỹ năng chuyên sâu, thực tập."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Finish it, and you get a certificate of graduation from lawyer training.",
          "sub": "Học xong, nhận Giấy chứng nhận tốt nghiệp đào tạo nghề luật sư.",
          "keys": [
            "Giấy chứng nhận tốt nghiệp"
          ]
        }
      ],
      "ref": "p6"
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
            "text": "③ Thứ Hai · Đủ điều kiện?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Monday"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "clipboard",
                "graduation-cap"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:lunch",
            "caption": "Thứ Hai tuần 2 · giờ nghỉ trưa",
            "icon": "clipboard"
          },
          {
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 180,
            "w": 46,
            "h": 46,
            "at": "l3:bachelor",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 162,
            "size": 58,
            "at": "l3:bachelor+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Cử nhân luật trở lên",
            "x": 8000,
            "y": 170,
            "size": 42,
            "at": "l3:bachelor+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 275,
            "w": 46,
            "h": 46,
            "at": "l4:citizen",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 257,
            "size": 58,
            "at": "l4:citizen+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Công dân VN, thường trú ở VN",
            "x": 8000,
            "y": 265,
            "size": 42,
            "at": "l4:citizen+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 370,
            "w": 46,
            "h": 46,
            "at": "l4:political",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 352,
            "size": 58,
            "at": "l4:political+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Chính trị vững, đạo đức tốt",
            "x": 8000,
            "y": 360,
            "size": 42,
            "at": "l4:political+200"
          },
          {
            "id": "e-c3",
            "t": "box",
            "x": 7932,
            "y": 465,
            "w": 46,
            "h": 46,
            "at": "l5:prosecution",
            "stroke": 5
          },
          {
            "id": "e-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 447,
            "size": 58,
            "at": "l5:prosecution+600",
            "color": "accent"
          },
          {
            "id": "e-l3",
            "t": "text",
            "text": "Không bị truy cứu, án tích",
            "x": 8000,
            "y": 455,
            "size": 42,
            "at": "l5:prosecution+200"
          },
          {
            "id": "e-fr",
            "t": "text",
            "text": "Bằng nước ngoài: cần công nhận",
            "x": 7932,
            "y": 560,
            "size": 44,
            "at": "l6:abroad",
            "color": "coral",
            "hl": [
              {
                "text": "cần công nhận",
                "at": "l6:recognition"
              }
            ]
          },
          {
            "id": "e-nx",
            "t": "text",
            "text": "→ bài sau: điều kiện",
            "x": 7932,
            "y": 640,
            "size": 44,
            "at": "l6:unless",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Monday lunch, week two. Thảo checks herself like a pilot.",
          "sub": "Chặng ba: trưa thứ Hai tuần hai. Thảo tự kiểm như phi công trước giờ bay.",
          "keys": [
            "tự kiểm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Number one, conditions. Let me tick them one by one.",
          "sub": "Thứ nhất, điều kiện. Đánh dấu từng dòng.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "A bachelor degree in law, or higher. Tick.",
          "sub": "Cử nhân luật trở lên. Có.",
          "keys": [
            "Cử nhân luật trở lên"
          ],
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A Vietnamese citizen living permanently in Vietnam, with firm political views and good character.",
          "sub": "Công dân Việt Nam thường trú tại Việt Nam, lập trường chính trị vững vàng, đạo đức tốt."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Not facing criminal prosecution, and no conviction that is not yet cleared.",
          "sub": "Không đang bị truy cứu trách nhiệm hình sự, không thuộc diện chưa được xoá án tích."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Degree from abroad? It needs official recognition, unless it is exempt.",
          "sub": "Bằng nước ngoài? Phải có văn bản công nhận, trừ trường hợp được miễn.",
          "keys": [
            "văn bản công nhận"
          ]
        }
      ],
      "ref": "p9,p10"
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
            "text": "④ Thứ Tư · Bộ hồ sơ",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:night"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "hold"
                }
              ],
              "props": [
                "file-folder",
                "framed-picture",
                "fountain-pen"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:folder",
            "caption": "Thứ Tư · tối, ở nhà",
            "icon": "file-folder"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "02 bộ, bản giấy",
            "x": 60,
            "y": 1250,
            "size": 58,
            "at": "l3:two",
            "color": "accent",
            "hl": [
              {
                "text": "02 bộ",
                "at": "l3:two"
              }
            ]
          },
          {
            "id": "f-d1",
            "t": "text",
            "text": "• Sơ yếu lý lịch có xác nhận",
            "x": 60,
            "y": 1340,
            "size": 40,
            "at": "l4:history"
          },
          {
            "id": "f-d2",
            "t": "text",
            "text": "• Phiếu đăng ký: email, điện thoại",
            "x": 60,
            "y": 1395,
            "size": 40,
            "at": "l4:registration"
          },
          {
            "id": "f-d3",
            "t": "text",
            "text": "• Bản chứng thực bằng",
            "x": 60,
            "y": 1450,
            "size": 40,
            "at": "l5:certified"
          },
          {
            "id": "f-d4",
            "t": "text",
            "text": "• Ảnh 3x4 mới, ghi tên",
            "x": 60,
            "y": 1505,
            "size": 40,
            "at": "l5:photos"
          },
          {
            "id": "f-sub",
            "t": "text",
            "text": "Nộp trực tiếp hoặc bưu điện",
            "x": 60,
            "y": 1590,
            "size": 40,
            "at": "l6:weekdays"
          },
          {
            "id": "f-dl",
            "t": "text",
            "text": "Hạn đợt 1: 20/3/2026",
            "x": 60,
            "y": 1655,
            "size": 50,
            "at": "l6:twentieth",
            "color": "coral",
            "hl": [
              {
                "text": "20/3/2026",
                "at": "l6:twentieth"
              }
            ]
          },
          {
            "id": "f-fee",
            "t": "text",
            "text": "Lệ phí: 200.000 đ, chuyển khoản",
            "x": 60,
            "y": 1730,
            "size": 46,
            "at": "l7:two hundred",
            "hl": [
              {
                "text": "200.000 đ",
                "at": "l7:two hundred"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Thông báo tuyển sinh khoá 28 lần 1/2026, Học viện Tư pháp",
            "x": 880,
            "y": 1825,
            "size": 26,
            "at": "l6",
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
          "say": "Fourth stop: Wednesday night. The folder comes out.",
          "sub": "Chặng bốn: tối thứ Tư. Tập hồ sơ ra bàn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Number two, papers. How many sets do they want?",
          "sub": "Thứ hai, giấy tờ. Họ cần mấy bộ nhỉ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two paper sets.",
          "sub": "Hai bộ, bản giấy.",
          "keys": [
            "Hai bộ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A personal history form with a certification, and a registration form with your email and phone.",
          "sub": "Sơ yếu lý lịch có xác nhận, phiếu đăng ký ghi rõ email và số điện thoại."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A certified copy of your law degree, and three by four photos, under six months old, name on the back.",
          "sub": "Bản chứng thực bằng cử nhân luật, ảnh 3x4 chụp không quá sáu tháng, ghi tên sau ảnh.",
          "keys": [
            "Bản chứng thực"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Hand it in on weekdays, or post it. Round one deadline: the twentieth of March, twenty twenty-six.",
          "sub": "Nộp trực tiếp ngày thường hoặc gửi bưu điện. Đợt một khoá 28: hạn 20/3/2026.",
          "keys": [
            "20/3/2026"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "The fee: two hundred thousand dong, by bank transfer.",
          "sub": "Lệ phí: hai trăm nghìn đồng, chuyển khoản.",
          "keys": [
            "hai trăm nghìn đồng"
          ]
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Thứ Tư · lập kế hoạch",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Để việc xác nhận lại sau cùng",
          "why": "Xin xác nhận sơ yếu lý lịch thường mất thời gian nhất; để cuối dễ trễ hạn.",
          "rule": "Việc chậm nhất, làm trước"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Photos first, then the forms. I'll get the history form certified at the very end.",
          "sub": "Chụp ảnh trước, điền mẫu sau. Sơ yếu lý lịch để cuối cùng mới đi xác nhận.",
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
          "say": "Certification is usually the slowest step. You carry it there and you wait.",
          "sub": "Xin xác nhận thường là bước chậm nhất. Phải tự mang đi, rồi ngồi chờ.",
          "keys": [
            "bước chậm nhất"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Làm lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Fine. Certification first, tomorrow morning. Everything else can follow.",
          "sub": "Được rồi. Sáng mai đi xác nhận trước. Việc khác tính sau.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. The slowest task goes first.",
          "sub": "Đúng. Việc chậm nhất, làm trước.",
          "phase": "redo",
          "keys": [
            "Việc chậm nhất, làm trước"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p14"
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
            "at": 150,
            "fit": "G",
            "ms": 900
          },
          {
            "at": "l1:morning",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Năm · Làm theo thứ tự",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Thursday"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "file-folder",
                "classical-building"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-06",
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
            "at": "l1:morning",
            "caption": "Thứ Năm · đi xác nhận sớm",
            "icon": "classical-building"
          },
          {
            "id": "g-b0",
            "t": "badge",
            "n": 1,
            "x": 2058,
            "y": 1290,
            "at": "l2:download"
          },
          {
            "id": "g-s0",
            "t": "text",
            "text": "Tải mẫu trên cổng Học viện",
            "x": 2108,
            "y": 1265,
            "size": 40,
            "at": "l2:download+200"
          },
          {
            "id": "g-b1",
            "t": "badge",
            "n": 2,
            "x": 2058,
            "y": 1385,
            "at": "l3:blue"
          },
          {
            "id": "g-s1",
            "t": "text",
            "text": "Mực xanh, dán ảnh, xác nhận",
            "x": 2108,
            "y": 1360,
            "size": 40,
            "at": "l3:blue+200"
          },
          {
            "id": "g-b2",
            "t": "badge",
            "n": 3,
            "x": 2058,
            "y": 1480,
            "at": "l4:certify"
          },
          {
            "id": "g-s2",
            "t": "text",
            "text": "Chứng thực bằng, chụp ảnh mới",
            "x": 2108,
            "y": 1455,
            "size": 40,
            "at": "l4:certify+200"
          },
          {
            "id": "g-b3",
            "t": "badge",
            "n": 4,
            "x": 2058,
            "y": 1575,
            "at": "l5:transfer"
          },
          {
            "id": "g-s3",
            "t": "text",
            "text": "Chuyển khoản: đúng mã lớp",
            "x": 2108,
            "y": 1550,
            "size": 40,
            "at": "l5:transfer+200",
            "color": "coral",
            "hl": [
              {
                "text": "đúng mã lớp",
                "at": "l5:code"
              }
            ]
          },
          {
            "id": "g-b4",
            "t": "badge",
            "n": 5,
            "x": 2058,
            "y": 1670,
            "at": "l6:sets"
          },
          {
            "id": "g-s4",
            "t": "text",
            "text": "Xếp 2 bộ, nộp trước hạn",
            "x": 2108,
            "y": 1645,
            "size": 40,
            "at": "l6:sets+200"
          },
          {
            "id": "g-code",
            "t": "text",
            "text": "“Họ tên + mã lớp tối HN”",
            "x": 2848,
            "y": 1780,
            "size": 44,
            "at": "l5:code",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: Thursday morning. Step by step.",
          "sub": "Chặng năm: sáng thứ Năm. Từng bước một."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Step one: download the forms from the academy portal.",
          "sub": "Bước một: tải mẫu trên cổng thông tin Học viện.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: fill them in blue ink, stick on photos, get the history form certified.",
          "sub": "Hai: điền bằng bút mực xanh, dán ảnh, mang sơ yếu lý lịch đi xác nhận.",
          "keys": [
            "bút mực xanh"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Three: certify my degree, fresh photos, name and birth date on the back.",
          "sub": "Ba: chứng thực bằng, chụp ảnh mới, ghi tên và ngày sinh sau ảnh."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Four: transfer the fee with the exact code for the Hanoi evening class.",
          "sub": "Bốn: chuyển lệ phí, nội dung ghi đúng mã lớp buổi tối Hà Nội.",
          "keys": [
            "đúng mã lớp"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Five: two sets, sent before the deadline.",
          "sub": "Năm: xếp thành hai bộ, nộp trước hạn."
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s14",
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
            "at": "l5",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
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
            "text": "⑥ Tuần 3 · Hệ học, học phí",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:week three"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "think"
                }
              ],
              "props": [
                "crescent-moon",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:three",
            "caption": "Tuần 3 · chọn hệ",
            "icon": "crescent-moon"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Ngày T2–T6: 29.280.000 đ",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l3:daytime",
            "hl": [
              {
                "text": "29.280.000 đ",
                "at": "l3:twenty-nine"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Tối T2–T6: 36.600.000 đ",
            "x": 3996,
            "y": 1350,
            "size": 48,
            "at": "l4:evening",
            "color": "coral",
            "hl": [
              {
                "text": "Tối T2–T6",
                "at": "l4:evening"
              }
            ]
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Ngày T7, CN: 36.600.000 đ",
            "x": 3996,
            "y": 1440,
            "size": 48,
            "at": "l4:weekend"
          },
          {
            "id": "h-up",
            "t": "text",
            "text": "Học phí có thể tăng hằng năm",
            "x": 3996,
            "y": 1530,
            "size": 42,
            "at": "l4:rise",
            "color": "muted"
          },
          {
            "id": "h-red",
            "t": "text",
            "text": "Miễn, giảm: đối tượng chính sách…",
            "x": 3996,
            "y": 1610,
            "size": 40,
            "at": "l6:reductions",
            "hl": [
              {
                "text": "Miễn, giảm",
                "at": "l6:reductions"
              }
            ]
          },
          {
            "id": "h-red2",
            "t": "text",
            "text": "kèm giấy tờ chứng minh",
            "x": 4036,
            "y": 1670,
            "size": 40,
            "at": "l6:proof",
            "color": "muted"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: Quyết định 3011/QĐ-HVTP ngày 17/12/2025, cả khoá",
            "x": 3996,
            "y": 1825,
            "size": 26,
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
          "say": "Sixth stop: week three. Which class format?",
          "sub": "Chặng sáu: tuần thứ ba. Chọn hệ nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Intake twenty-eight has three: weekday daytime, weekday evening, and weekend daytime.",
          "sub": "Khoá 28 có ba hệ: ban ngày trong tuần, buổi tối trong tuần, ban ngày thứ Bảy, Chủ nhật."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Weekday daytime costs twenty-nine million, two hundred eighty thousand dong for the whole course.",
          "sub": "Hệ ban ngày trong tuần: hai mươi chín triệu hai trăm tám mươi nghìn đồng cả khoá.",
          "keys": [
            "cả khoá"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Evening and weekend: thirty-six million six hundred thousand. And fees may rise every year.",
          "sub": "Hệ buổi tối và cuối tuần: ba mươi sáu triệu sáu trăm nghìn. Học phí có thể tăng hằng năm.",
          "keys": [
            "có thể tăng hằng năm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "I work all day. Evening class it is. Costs more, but I keep my job.",
          "sub": "Ban ngày con đi làm. Chọn hệ tối thôi. Đắt hơn, nhưng giữ được việc.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Some groups get reductions, like policy groups, with proof.",
          "sub": "Một số nhóm được miễn, giảm, như đối tượng chính sách, kèm giấy chứng minh."
        }
      ],
      "ref": "p15,p16"
    },
    {
      "id": "s15",
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
            "text": "⑦ Tối thứ Bảy · Học ở đâu?",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Saturday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "think",
                  "face": "thinking"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
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
            "at": "l1:Dũng",
            "caption": "Tối thứ Bảy tuần 3 · Dũng gọi lại",
            "icon": "world-map"
          },
          {
            "id": "i-hn",
            "t": "text",
            "text": "Hà Nội: Trần Vỹ, Phú Diễn",
            "x": 5964,
            "y": 1260,
            "size": 44,
            "at": "l2:Hanoi"
          },
          {
            "id": "i-hcm",
            "t": "text",
            "text": "TP.HCM: 821 Kha Vạn Cân",
            "x": 5964,
            "y": 1330,
            "size": 44,
            "at": "l2:Chi Minh"
          },
          {
            "id": "i-loc",
            "t": "text",
            "text": "Lớp phối hợp ở tỉnh:",
            "x": 5964,
            "y": 1420,
            "size": 46,
            "at": "l4:local",
            "hl": [
              {
                "text": "ở tỉnh",
                "at": "l4:local"
              }
            ]
          },
          {
            "id": "i-loc2",
            "t": "text",
            "text": "Hà Tĩnh, Đồng Nai (khoá 28)",
            "x": 6004,
            "y": 1485,
            "size": 42,
            "at": "l4:provinces",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: Saturday night. Dũng calls back.",
          "sub": "Chặng bảy: tối thứ Bảy. Dũng gọi lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two main campuses: the academy in Hanoi, and its campus in Ho Chi Minh City.",
          "sub": "Hai địa điểm chính: Học viện ở Hà Nội và Cơ sở tại TP.HCM."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "But I have a job here at home. Do I quit and move for a whole year?",
          "sub": "Nhưng em đang có việc ở quê. Phải nghỉ việc, đi trọ cả năm à?",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not always. Intake twenty-eight also had local classes in two provinces, run with partners.",
          "sub": "Chưa chắc. Khoá 28 còn có lớp phối hợp ở Hà Tĩnh và Đồng Nai.",
          "keys": [
            "lớp phối hợp"
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
      "ref": "p17"
    },
    {
      "id": "s16",
      "module": "BRK-04",
      "data": {
        "title": "Hai cách của Dũng",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrong": "Ra Hà Nội học ngày: nghỉ việc, thuê trọ",
        "right": "Chờ lớp ở tỉnh: giữ việc, tuỳ năm",
        "wrongIllus": "houses",
        "rightIllus": "house-with-garden"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Option A: Hanoi. Quit, rent a room.",
          "sub": "Cách A: ra Hà Nội. Nghỉ việc, thuê trọ.",
          "keys": [
            "Cách A"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Option B: a local class, if one opens.",
          "sub": "Cách B: lớp ở tỉnh, nếu năm đó có mở.",
          "keys": [
            "Cách B"
          ]
        }
      ],
      "ref": "p18"
    },
    {
      "id": "s17",
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
            "id": "i-ask",
            "t": "text",
            "text": "Hỏi: lịch, học phí, hạn",
            "x": 5964,
            "y": 1580,
            "size": 42,
            "at": "l1:ask",
            "hl": [
              {
                "text": "Hỏi",
                "at": "l1:ask"
              }
            ]
          },
          {
            "id": "i-key",
            "t": "text",
            "text": "Nơi học = cả một năm sống",
            "x": 5964,
            "y": 1690,
            "size": 54,
            "at": "l2:year",
            "color": "accent",
            "hl": [
              {
                "text": "cả một năm sống",
                "at": "l2:whole year"
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
          "say": "For option B, ask the organiser: schedule, fees, deadline.",
          "sub": "Chọn cách B thì hỏi đơn vị tổ chức về lịch học, học phí, hạn nộp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A study place is not just an address. It is a whole year of your life and work.",
          "sub": "Nơi học không chỉ là địa chỉ, mà là cả một năm sống và làm việc.",
          "keys": [
            "cả một năm sống và làm việc"
          ]
        }
      ],
      "ref": "p18,p19"
    },
    {
      "id": "s18",
      "module": "BRK-08",
      "data": {
        "title": "Học xong đã là luật sư chưa?",
        "points": [
          {
            "label": "Học 12 th",
            "sub": "Học viện",
            "illus": "books"
          },
          {
            "label": "Tập sự 12 th",
            "sub": "tổ chức hành nghề",
            "illus": "briefcase"
          },
          {
            "label": "Kiểm tra",
            "sub": "Liên đoàn Luật sư",
            "illus": "memo"
          },
          {
            "label": "Chứng chỉ",
            "sub": "Bộ trưởng Tư pháp",
            "illus": "scroll"
          },
          {
            "label": "Đoàn luật sư",
            "sub": "gia nhập",
            "illus": "balance-scale"
          }
        ],
        "current": 4
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So, after class, is Thảo a lawyer? Not yet.",
          "sub": "Vậy học xong, Thảo đã là luật sư chưa? Chưa.",
          "keys": [
            "Chưa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Probation, assessment, certificate, then a bar association.",
          "sub": "Tập sự, kiểm tra, chứng chỉ, rồi gia nhập Đoàn luật sư."
        }
      ],
      "ref": "p20,p21"
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
            "fit": "B",
            "ms": 900
          },
          {
            "at": "l1",
            "fit": [
              "b-r2",
              "b-r3",
              "b-r4"
            ],
            "zoom": 1.1,
            "ms": 600
          },
          {
            "at": "l4",
            "fit": "B",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "b-p1",
            "t": "text",
            "text": "Người hướng dẫn: ≥ 3 năm",
            "x": 2028,
            "y": 590,
            "size": 36,
            "at": "l1:three years",
            "hl": [
              {
                "text": "≥ 3 năm",
                "at": "l1:three years"
              }
            ]
          },
          {
            "id": "b-p2",
            "t": "text",
            "text": "Chứng chỉ: trong 20 ngày",
            "x": 2868,
            "y": 380,
            "size": 40,
            "at": "l3:twenty days",
            "hl": [
              {
                "text": "20 ngày",
                "at": "l3:twenty days"
              }
            ]
          },
          {
            "id": "b-p3",
            "t": "text",
            "text": "Luật đang sửa: kiểm lại",
            "x": 2868,
            "y": 650,
            "size": 40,
            "at": "l4:amended",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Probation is twelve months. Your supervisor needs three years of practice, and three trainees at most.",
          "sub": "Tập sự mười hai tháng. Luật sư hướng dẫn có ít nhất ba năm kinh nghiệm, cùng lúc không quá ba người.",
          "keys": [
            "ít nhất ba năm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then the probation assessment, run by the Vietnam Bar Federation.",
          "sub": "Rồi kỳ kiểm tra kết quả tập sự, do Liên đoàn Luật sư Việt Nam tổ chức."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Pass, and the Justice Minister decides within twenty days of a complete file.",
          "sub": "Đạt thì Bộ trưởng Bộ Tư pháp quyết định cấp chứng chỉ trong hai mươi ngày kể từ khi đủ hồ sơ.",
          "keys": [
            "hai mươi ngày"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Caution: the Law on Lawyers is being amended, so recheck these steps.",
          "sub": "Lưu ý: Luật Luật sư đang được sửa đổi ở kỳ họp này, nên kiểm lại các mốc sau kỳ họp.",
          "keys": [
            "đang được sửa đổi"
          ]
        }
      ],
      "ref": "p20,p21"
    },
    {
      "id": "s20",
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
            "text": "Tối thứ Sáu · ba tuần sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
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
                  "id": "thao",
                  "side": "left",
                  "face": "happy",
                  "pose": "phone"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "thumb"
                }
              ],
              "props": [
                "receipt",
                "spiral-calendar"
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
                  "shot": "E-SHOT-06",
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
            "at": "l1:Friday",
            "caption": "Tối thứ Sáu · hồ sơ đã gửi",
            "icon": "receipt"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "2 bộ đã gửi, trước hạn ✓",
            "x": 7932,
            "y": 1260,
            "size": 50,
            "at": "l2:posted",
            "hl": [
              {
                "text": "trước hạn",
                "at": "l2:before"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Hạn mới đã ghi vào lịch",
            "x": 7932,
            "y": 1350,
            "size": 48,
            "at": "l2:calendar"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Mài sắt… nên hồ sơ”",
            "x": 7932,
            "y": 1490,
            "size": 58,
            "at": "l4:needle",
            "color": "accent",
            "hl": [
              {
                "text": "nên hồ sơ",
                "at": "l4:file"
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
          "say": "Friday night again, three weeks later. Same sofa, same Thảo.",
          "sub": "Lại tối thứ Sáu, ba tuần sau. Vẫn ghế ấy, vẫn Thảo ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Two sets posted, before the deadline. Receipt kept, the next steps marked on my calendar.",
          "sub": "Hai bộ đã gửi, trước hạn. Giữ biên nhận, các mốc sau đã ghi vào lịch.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Good. No exam to cram for, just paper to get right.",
          "sub": "Tốt. Không phải ôn thi, chỉ cần giấy tờ cho đúng.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "With effort, an iron bar becomes a needle. Here it became a perfect file.",
          "sub": "“Có công mài sắt, có ngày nên kim.” Ở đây, mài thành... một bộ hồ sơ chuẩn.",
          "keys": [
            "một bộ hồ sơ chuẩn"
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
            "ms": 1400
          },
          {
            "at": "l1:selection",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:slowest",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l3:route",
            "fit": "B",
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
            "x": 4716,
            "y": 660,
            "at": "l1:selection"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 2748,
            "y": 1750,
            "at": "l2:slowest"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3668,
            "y": 500,
            "at": "l3:route"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Kiến thức tham khảo; đối chiếu thông báo tuyển sinh mới nhất của Học viện. Luật Luật sư đang sửa đổi.",
            "x": 7932,
            "y": 1825,
            "size": 26,
            "at": "l3:end",
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
          "say": "So: selection by application, no entrance exam. Your file is the test.",
          "sub": "Tóm lại: xét tuyển hồ sơ, không thi đầu vào. Bộ hồ sơ là bài thi.",
          "keys": [
            "Bộ hồ sơ là bài thi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Do the slowest step first, and copy the fee code exactly.",
          "sub": "Việc chậm nhất làm trước, mã chuyển khoản chép cho đúng.",
          "keys": [
            "Việc chậm nhất làm trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And the route: twelve months class, twelve months probation, assessment, certificate.",
          "sub": "Và lộ trình: mười hai tháng học, mười hai tháng tập sự, kiểm tra, chứng chỉ.",
          "keys": [
            "lộ trình"
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
        "q": "Which task should you start first when preparing the file?",
        "options": [
          "Paying the fee, because the forms can be written after the deadline",
          "Getting the personal history form certified, because it usually takes the longest",
          "Taking the photos, because they must be older than one year"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "file-folder",
        "why": "Xin xác nhận sơ yếu lý lịch thường mất thời gian nhất, nên làm trước."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which task should you start first when preparing the file?",
          "sub": "Khi chuẩn bị hồ sơ, nên bắt đầu việc nào trước?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Get the history form certified first, because it usually takes the longest.",
          "sub": "Đi xác nhận sơ yếu lý lịch trước, vì việc này thường lâu nhất."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "The slowest task always goes first.",
          "sub": "Việc chậm nhất luôn làm trước."
        }
      ],
      "ref": "questions[24]"
    },
    {
      "id": "s23",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi mở thông báo mới nhất, ghi hạn nộp"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, open the latest admission notice and put the deadline in your calendar.",
          "sub": "Tối nay, mở thông báo tuyển sinh mới nhất, ghi hạn nộp vào lịch."
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
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô theo BA TUẦN của Thảo (tối thứ Sáu thấy thông báo khoá 28 → sáng thứ Bảy cà phê Bác Bình → Chủ nhật Dũng gọi video → thứ Hai kiểm điều kiện → thứ Tư bộ hồ sơ + “Khoan đã!” → thứ Năm 5 bước → tuần 3 hệ học → tối thứ Bảy Dũng chọn nơi học → quay lại ô B: lộ trình sau tốt nghiệp → tối thứ Sáu ba tuần sau). Nhân vật theo w145/_series/bar-academy-admission.md: Thảo (làm mẫu p13), Bác Bình (luật sư, giải thích xét tuyển p1–p3), Dũng (gộp Khoa p18). Số liệu chỉ từ bài: 12 tháng, 36 tín chỉ, 02 bộ, 6 tháng, 20/3/2026, 200.000 đ, 29.280.000 / 36.600.000 đ (QĐ 3011/QĐ-HVTP), ≥ 3 năm, ≤ 3 người, 20 ngày. Cảnh ngắt nhịp: BRK-07 s07 (lối tắt? p7), BRK-04 s16 (Cách A/B p18), BRK-08 s18 (học xong đã là luật sư chưa, p20–p21), DLG s12 (xác nhận để cuối, p14). Khép vòng: tối thứ Sáu ‘Có công mài sắt’ → mài thành bộ hồ sơ chuẩn. Câu đố questions[24]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
