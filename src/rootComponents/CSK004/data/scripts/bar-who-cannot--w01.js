// bar-who-cannot--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-who-cannot--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "bar-roadmap",
    "slug": "bar-who-cannot",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Những trường hợp nào không được cấp chứng chỉ hành nghề luật sư?",
    "series": "Bốn bước thành luật sư — lộ trình theo Luật Luật sư hiện hành cho cử nhân luật"
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
            "fit": [
              "a-h",
              "a-p0",
              "a-p6"
            ],
            "zoom": 1.3,
            "move": "cut"
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "a-h",
            "t": "text",
            "text": "Khoản 4 Điều 17",
            "x": 60,
            "y": 60,
            "size": 60,
            "at": "l1:sheet",
            "color": "accent"
          },
          {
            "id": "a-p0",
            "t": "text",
            "text": "a.  ………",
            "x": 80,
            "y": 150,
            "size": 46,
            "at": "l1:sheet+300"
          },
          {
            "id": "a-p1",
            "t": "text",
            "text": "b.  ………",
            "x": 80,
            "y": 220,
            "size": 46,
            "at": "l1:sheet+500"
          },
          {
            "id": "a-p2",
            "t": "text",
            "text": "c.  ………",
            "x": 80,
            "y": 290,
            "size": 46,
            "at": "l1:sheet+700"
          },
          {
            "id": "a-p3",
            "t": "text",
            "text": "d.  ………",
            "x": 80,
            "y": 360,
            "size": 46,
            "at": "l1:sheet+900"
          },
          {
            "id": "a-p4",
            "t": "text",
            "text": "đ.  ………",
            "x": 80,
            "y": 430,
            "size": 46,
            "at": "l1:sheet+1100"
          },
          {
            "id": "a-p5",
            "t": "text",
            "text": "e.  ………",
            "x": 80,
            "y": 500,
            "size": 46,
            "at": "l1:sheet+1300"
          },
          {
            "id": "a-p6",
            "t": "text",
            "text": "g.  ………",
            "x": 80,
            "y": 570,
            "size": 46,
            "at": "l1:sheet+1500"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Cột kết quả: trống",
            "x": 380,
            "y": 650,
            "size": 40,
            "at": "l2:empty",
            "color": "coral",
            "hl": [
              {
                "text": "trống",
                "at": "l2:empty"
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
          "say": "One sheet of paper. Seven letters down the side, from a to g.",
          "sub": "Một tờ giấy. Bảy chữ cái chạy dọc lề, từ a đến g.",
          "keys": [
            "Bảy chữ cái"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And next to them, an empty column. Nobody has dared to fill it yet.",
          "sub": "Bên cạnh là một cột trống. Chưa ai dám điền."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Let's pull back and see whose sheet this is.",
          "sub": "Lùi ra xem tờ giấy này của ai nhé."
        }
      ],
      "ref": "intro,p16"
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
            "y": 40,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
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
            "at": "l1",
            "caption": "7 giờ tối thứ Ba · bàn học của Lan",
            "icon": "page-facing-up"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy”",
            "x": 900,
            "y": 640,
            "size": 52,
            "at": "l4:careful",
            "color": "accent",
            "hl": [
              {
                "text": "Cẩn tắc",
                "at": "l4:careful"
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
          "say": "It is Lan's. Seven o'clock, Tuesday night.",
          "sub": "Của Lan. Bảy giờ tối thứ Ba."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Law graduate, about to apply for the training course. She has her degree. She has her seven standards.",
          "sub": "Cử nhân luật, sắp nộp hồ sơ học nghề. Có bằng. Có bảy tiêu chuẩn.",
          "keys": [
            "bảy tiêu chuẩn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "But could something still block me at the very end? Let me read it before I spend two years.",
          "sub": "Nhưng liệu có gì chặn em ở cuối đường không? Đọc trước đã, rồi mới bỏ hai năm.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Careful now, no regrets later. Our elders were right again.",
          "sub": "“Cẩn tắc vô áy náy.” Ông bà lại nói đúng.",
          "keys": [
            "Cẩn tắc vô áy náy"
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
            "text": "Ai không được cấp chứng chỉ?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:granted",
            "hl": [
              {
                "text": "không được cấp",
                "at": "l1:cannot"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: chỉ người thiếu bằng",
            "x": 2028,
            "y": 150,
            "size": 46,
            "at": "l2:degree",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:but"
          },
          {
            "id": "b-p0",
            "t": "text",
            "text": "a. thiếu tiêu chuẩn Điều 10",
            "x": 2028,
            "y": 250,
            "size": 36,
            "at": "l3:standards"
          },
          {
            "id": "b-p1",
            "t": "text",
            "text": "b. đang là CB, CC, VC…",
            "x": 2028,
            "y": 325,
            "size": 36,
            "at": "l3:officials",
            "color": "coral"
          },
          {
            "id": "b-p2",
            "t": "text",
            "text": "c. không thường trú tại VN",
            "x": 2028,
            "y": 400,
            "size": 36,
            "at": "l3:residence"
          },
          {
            "id": "b-p3",
            "t": "text",
            "text": "d. truy cứu hình sự, án tích",
            "x": 2028,
            "y": 475,
            "size": 36,
            "at": "l4:prosecuted",
            "color": "coral"
          },
          {
            "id": "b-p4",
            "t": "text",
            "text": "đ. đang cai nghiện bắt buộc",
            "x": 2868,
            "y": 250,
            "size": 36,
            "at": "l4:detox"
          },
          {
            "id": "b-p5",
            "t": "text",
            "text": "e. mất năng lực hành vi",
            "x": 2868,
            "y": 325,
            "size": 36,
            "at": "l4:capacity"
          },
          {
            "id": "b-p6",
            "t": "text",
            "text": "g. bị buộc thôi việc: 3 năm",
            "x": 2868,
            "y": 400,
            "size": 36,
            "at": "l4:dismissed"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Luật Luật sư (VBHN 03/VBHN-VPQH), khoản 4 Điều 17",
            "x": 2028,
            "y": 720,
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
          "say": "So who cannot be granted a lawyer practising certificate?",
          "sub": "Vậy những ai không được cấp chứng chỉ hành nghề luật sư?",
          "keys": [
            "không được cấp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not just people without a degree, but seven cases in clause four of Article seventeen.",
          "sub": "Không chỉ người thiếu bằng, mà là bảy điểm ở khoản 4 Điều 17.",
          "keys": [
            "bảy điểm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Missing the standards. Officials, civil servants, some army and police staff. No permanent residence.",
          "sub": "Thiếu tiêu chuẩn Điều 10. Cán bộ, công chức, viên chức, một số người trong Quân đội, Công an. Không thường trú."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Prosecuted or certain convictions. Compulsory detox or education centres. Lost capacity. And dismissed, for three years.",
          "sub": "Bị truy cứu hoặc có một số án tích. Đang cai nghiện, giáo dục bắt buộc. Mất năng lực hành vi. Và bị buộc thôi việc, trong ba năm."
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
            "id": "b-end",
            "t": "text",
            "text": "Áp dụng ở vạch đích",
            "x": 2028,
            "y": 560,
            "size": 52,
            "at": "l1:end",
            "color": "accent",
            "hl": [
              {
                "text": "vạch đích",
                "at": "l1:end"
              }
            ]
          },
          {
            "id": "b-k3",
            "t": "text",
            "text": "Từ chối: văn bản, lý do",
            "x": 2868,
            "y": 560,
            "size": 40,
            "at": "l2:writing"
          },
          {
            "id": "b-k3b",
            "t": "text",
            "text": "→ khiếu nại, khởi kiện",
            "x": 2908,
            "y": 625,
            "size": 40,
            "at": "l3:complain",
            "hl": [
              {
                "text": "khiếu nại",
                "at": "l3:complain"
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
          "say": "Why care now? Because this list is applied at the end, after two years of training and probation.",
          "sub": "Sao phải lo từ bây giờ? Vì danh sách này áp ở cuối đường, sau hai năm học nghề và tập sự.",
          "keys": [
            "sau hai năm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "If refused, clause three says you get the reasons in writing.",
          "sub": "Nếu bị từ chối, khoản 3 Điều 17 buộc phải thông báo bằng văn bản, nêu rõ lý do."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And you may complain or file a lawsuit. Useful, but better never needed.",
          "sub": "Và người bị từ chối có quyền khiếu nại, khởi kiện. Hữu ích, nhưng tốt nhất là không cần đến.",
          "keys": [
            "khiếu nại, khởi kiện"
          ]
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
            "text": "① 7 giờ rưỡi · Điểm b",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:knock"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 110,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "left"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "briefcase",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
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
            "at": "l2:Thảo",
            "caption": "7 giờ rưỡi · Thảo ghé chơi",
            "icon": "briefcase"
          },
          {
            "id": "c-b",
            "t": "text",
            "text": "Điểm b: ĐANG là",
            "x": 3996,
            "y": 170,
            "size": 54,
            "at": "l4:currently",
            "color": "accent",
            "hl": [
              {
                "text": "ĐANG",
                "at": "l4:currently"
              }
            ]
          },
          {
            "id": "c-b1",
            "t": "text",
            "text": "cán bộ, công chức, viên chức",
            "x": 3996,
            "y": 250,
            "size": 42,
            "at": "l4:official"
          },
          {
            "id": "c-b2",
            "t": "text",
            "text": "sĩ quan, quân nhân, CN quốc phòng",
            "x": 3996,
            "y": 310,
            "size": 40,
            "at": "l4:army"
          },
          {
            "id": "c-b3",
            "t": "text",
            "text": "sĩ quan, hạ sĩ quan công an",
            "x": 3996,
            "y": 370,
            "size": 40,
            "at": "l4:police"
          },
          {
            "id": "c-now",
            "t": "text",
            "text": "xét lúc đề nghị cấp",
            "x": 3996,
            "y": 450,
            "size": 46,
            "at": "l5:moment",
            "color": "coral",
            "hl": [
              {
                "text": "lúc đề nghị cấp",
                "at": "l5:moment"
              }
            ]
          },
          {
            "id": "c-tt",
            "t": "text",
            "text": "TT 10: vào cơ quan nhà nước",
            "x": 3996,
            "y": 540,
            "size": 40,
            "at": "l6:state"
          },
          {
            "id": "c-tt2",
            "t": "text",
            "text": "→ chấm dứt tập sự",
            "x": 4036,
            "y": 600,
            "size": 40,
            "at": "l6:ends",
            "color": "coral"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Luật Luật sư (VBHN 03/VBHN-VPQH), điểm b khoản 4 Điều 17 · Thông tư 10/2021/TT-BTP",
            "x": 3996,
            "y": 720,
            "size": 26,
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
          "say": "Half past seven. A knock on the door.",
          "sub": "Bảy giờ rưỡi. Có tiếng gõ cửa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Thảo, Lan's cousin. A public employee at a state unit, taking the evening training class.",
          "sub": "Đây là Thảo, chị họ Lan. Viên chức ở một đơn vị sự nghiệp công lập, đang học lớp đào tạo nghề buổi tối.",
          "keys": [
            "Viên chức"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Reading the law at night? Good. I'll finish my course first, then think about the job.",
          "sub": "Đọc luật buổi tối à? Hay đấy. Chị cứ học xong đã, chuyện công việc tính sau.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Point b blocks anyone currently an official, civil servant or public employee, or certain army and police staff.",
          "sub": "Điểm b chặn người đang là cán bộ, công chức, viên chức, hoặc một số người trong Quân đội, Công an.",
          "keys": [
            "đang là"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "That word, currently, means the moment you request the certificate.",
          "sub": "Chữ “đang” nghĩa là tình trạng tại thời điểm đề nghị cấp chứng chỉ.",
          "keys": [
            "thời điểm đề nghị cấp"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And Circular ten: probation ends if a trainee is recruited into a state agency.",
          "sub": "Thông tư 10 còn ghi: việc tập sự chấm dứt khi người tập sự được tuyển dụng vào cơ quan nhà nước."
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
      "id": "s06",
      "module": "BRK-04",
      "data": {
        "title": "Hai cách của Thảo",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrong": "Đợi có giấy kiểm tra mới tính, vẫn là viên chức",
        "right": "Đọc điểm b từ đầu, hỏi Đoàn, lên lịch nghỉ",
        "wrongIllus": "hourglass-not-done",
        "rightIllus": "spiral-calendar"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Option A: wait, still employed at the end.",
          "sub": "Cách A: đợi đến cuối, vẫn là viên chức.",
          "keys": [
            "Cách A"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Option B: plan the exit early.",
          "sub": "Cách B: lên lịch nghỉ từ sớm.",
          "keys": [
            "Cách B"
          ]
        }
      ],
      "ref": "p5"
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
            "at": "l1",
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
            "id": "c-key",
            "t": "text",
            "text": "Lịch nghỉ việc = một phần lộ trình",
            "x": 4816,
            "y": 650,
            "size": 38,
            "at": "l3:resignation",
            "color": "accent",
            "hl": [
              {
                "text": "Lịch nghỉ việc",
                "at": "l3:resignation"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "With option A, I land right on point b when I file. So I ask the bar association about probation now.",
          "sub": "Theo cách A, đến lúc nộp hồ sơ chị rơi đúng điểm b. Vậy chị hỏi Đoàn luật sư về việc tập sự ngay bây giờ.",
          "face": "surprised"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "And I set the date I leave my post, before the certificate file.",
          "sub": "Và lên lịch ngày thôi việc, trước khi nộp hồ sơ chứng chỉ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "For public sector workers, the resignation schedule is part of the road.",
          "sub": "Với người làm khu vực công, lịch nghỉ việc cũng là một phần của lộ trình.",
          "keys": [
            "lịch nghỉ việc"
          ]
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
            "text": "② 8 giờ · Điểm d",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:eight"
          },
          {
            "id": "d-b0",
            "t": "box",
            "x": 5964,
            "y": 160,
            "w": 1100,
            "h": 120,
            "at": "l2:prosecuted",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "d-g0",
            "t": "text",
            "text": "① Đang bị truy cứu",
            "x": 5994,
            "y": 180,
            "size": 46,
            "at": "l2:prosecuted+200"
          },
          {
            "id": "d-b1",
            "t": "box",
            "x": 5964,
            "y": 310,
            "w": 1100,
            "h": 120,
            "at": "l3:unintentional",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "d-g1",
            "t": "text",
            "text": "② Án vô ý, ít nghiêm trọng",
            "x": 5994,
            "y": 330,
            "size": 46,
            "at": "l3:unintentional+200"
          },
          {
            "id": "d-b2",
            "t": "box",
            "x": 5964,
            "y": 460,
            "w": 1100,
            "h": 120,
            "at": "l4:serious",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "d-g2",
            "t": "text",
            "text": "③ Án nghiêm trọng, cố ý",
            "x": 5994,
            "y": 480,
            "size": 46,
            "at": "l4:serious+200"
          },
          {
            "id": "d-g1x",
            "t": "text",
            "text": "chưa xoá án tích",
            "x": 7124,
            "y": 340,
            "size": 44,
            "at": "l3:cleared",
            "color": "muted"
          },
          {
            "id": "d-g2x",
            "t": "text",
            "text": "KỂ CẢ đã xoá",
            "x": 7124,
            "y": 490,
            "size": 50,
            "at": "l4:even",
            "color": "coral",
            "hl": [
              {
                "text": "KỂ CẢ",
                "at": "l4:even"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Luật Luật sư (VBHN 03/VBHN-VPQH), điểm d khoản 4 Điều 17",
            "x": 5964,
            "y": 720,
            "size": 26,
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
          "say": "Eight o'clock. Point d, the criminal law point. Three groups.",
          "sub": "Tám giờ. Điểm d, điểm về hình sự. Chia ba nhóm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: people currently being criminally prosecuted.",
          "sub": "Một: người đang bị truy cứu trách nhiệm hình sự."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: convicted of an unintentional or less serious intentional crime, not yet cleared.",
          "sub": "Hai: đã bị kết án về tội vô ý hoặc tội ít nghiêm trọng do cố ý, mà chưa được xoá án tích."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: convicted of a serious or worse intentional crime. Even if the record has been cleared.",
          "sub": "Ba: bị kết án về tội nghiêm trọng, rất nghiêm trọng, đặc biệt nghiêm trọng do cố ý, kể cả đã được xoá án tích.",
          "keys": [
            "kể cả đã được xoá án tích"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s09",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "8 giờ · Lan đọc lướt",
        "actors": [
          {
            "id": "lan",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đã xoá án tích thì luôn được cấp",
          "why": "Điểm d phân biệt theo loại tội; tội nghiêm trọng trở lên do cố ý thì xoá rồi vẫn chặn.",
          "rule": "Loại tội quyết định"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Easy. Once a record is cleared, it never happened. Certificate granted.",
          "sub": "Vậy dễ thôi. Xoá án tích rồi là như chưa từng bị kết án. Được cấp.",
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
          "say": "Unintentional or less serious crimes? Yes, clearing opens the gate.",
          "sub": "Với tội vô ý hoặc ít nghiêm trọng do cố ý, đúng, xoá án tích thì rào mở."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Serious intentional crimes? The law says even if cleared. It stays shut.",
          "sub": "Tội nghiêm trọng trở lên do cố ý? Luật ghi “kể cả đã xoá án tích”. Xoá cũng không mở được.",
          "keys": [
            "Xoá cũng không mở được"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Rewind!",
          "sub": "Tua lại!",
          "phase": "redo"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "lan",
          "say": "Got it. Type of crime first.",
          "sub": "Hiểu rồi. Xem loại tội trước.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "The type of crime decides.",
          "sub": "Loại tội quyết định, hơn việc đã xoá hay chưa.",
          "phase": "redo",
          "keys": [
            "Loại tội quyết định"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p8,p9"
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
            "text": "③ Rào chắn ở cả ba cửa",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:barrier"
          },
          {
            "id": "e-b0",
            "t": "box",
            "x": 7932,
            "y": 200,
            "w": 480,
            "h": 120,
            "at": "l2:admission",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "e-r0",
            "t": "text",
            "text": "Xét tuyển",
            "x": 7972,
            "y": 225,
            "size": 54,
            "at": "l2:admission+200"
          },
          {
            "id": "e-b1",
            "t": "box",
            "x": 8472,
            "y": 200,
            "w": 480,
            "h": 120,
            "at": "l3:probation",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "e-r1",
            "t": "text",
            "text": "Tập sự",
            "x": 8512,
            "y": 225,
            "size": 54,
            "at": "l3:probation+200"
          },
          {
            "id": "e-b2",
            "t": "box",
            "x": 9012,
            "y": 200,
            "w": 480,
            "h": 120,
            "at": "l4:end",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "e-r2",
            "t": "text",
            "text": "Chứng chỉ",
            "x": 9052,
            "y": 225,
            "size": 54,
            "at": "l4:end+200"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Khoá 28: không đang truy cứu,",
            "x": 7932,
            "y": 380,
            "size": 40,
            "at": "l2:notice"
          },
          {
            "id": "e-1b",
            "t": "text",
            "text": "không có án tích",
            "x": 7932,
            "y": 435,
            "size": 40,
            "at": "l2:convictions"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "TT 10: truy cứu, kết án",
            "x": 8472,
            "y": 380,
            "size": 40,
            "at": "l3:convicted"
          },
          {
            "id": "e-2b",
            "t": "text",
            "text": "→ chấm dứt tập sự",
            "x": 8472,
            "y": 435,
            "size": 40,
            "at": "l3:ends",
            "color": "coral"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Điều 17: điểm d",
            "x": 9012,
            "y": 380,
            "size": 40,
            "at": "l4:seventeen"
          },
          {
            "id": "e-key",
            "t": "text",
            "text": "Không chỉ ở cuối đường",
            "x": 7932,
            "y": 560,
            "size": 56,
            "at": "l5:only",
            "color": "accent",
            "hl": [
              {
                "text": "cuối đường",
                "at": "l5:end"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Thông báo khoá 28 năm 2026, Học viện Tư pháp · Thông tư 10/2021/TT-BTP",
            "x": 7932,
            "y": 720,
            "size": 26,
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
          "say": "Here is the twist: this barrier shows up early, not just at the end.",
          "sub": "Điểm thú vị: rào chắn này xuất hiện từ sớm, không chỉ ở cuối đường.",
          "keys": [
            "từ sớm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "At admission, the intake twenty-eight notice asks for no prosecution and no convictions under the rules.",
          "sub": "Khi xét tuyển, thông báo khoá 28 yêu cầu không đang bị truy cứu, không có án tích theo quy định."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "During probation, Circular ten ends it if the trainee is prosecuted or convicted.",
          "sub": "Khi tập sự, Thông tư 10 cho chấm dứt nếu người tập sự bị truy cứu hoặc bị kết án."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And at the end, Article seventeen, point d.",
          "sub": "Và ở cuối đường, điểm d Điều 17."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Three doors, one barrier. Not only at the end.",
          "sub": "Ba cánh cửa, một rào chắn. Không chỉ ở cuối đường.",
          "keys": [
            "một rào chắn"
          ]
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Bị buộc thôi việc thì phải chờ bao lâu?",
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
          "say": "Dismissed from a state job. How long must you wait?",
          "sub": "Bị buộc thôi việc ở khu vực công. Phải chờ bao lâu?",
          "keys": [
            "chờ bao lâu"
          ]
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s12",
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
            "text": "④ 9 giờ · Điểm g",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:nine"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Người thuộc điểm b",
            "x": 60,
            "y": 1260,
            "size": 48,
            "at": "l2:group"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "bị buộc thôi việc",
            "x": 60,
            "y": 1330,
            "size": 54,
            "at": "l2:dismissed",
            "color": "coral"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "→ 3 năm, tính từ ngày",
            "x": 60,
            "y": 1420,
            "size": 54,
            "at": "l3:three",
            "color": "accent",
            "hl": [
              {
                "text": "3 năm",
                "at": "l3:three"
              }
            ]
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "quyết định có hiệu lực",
            "x": 100,
            "y": 1500,
            "size": 50,
            "at": "l3:effect",
            "hl": [
              {
                "text": "có hiệu lực",
                "at": "l3:effect"
              }
            ]
          },
          {
            "id": "f-i",
            "t": "illus",
            "name": "hourglass-not-done",
            "x": 1300,
            "y": 1260,
            "size": 280,
            "at": "l3:three"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Luật Luật sư (VBHN 03/VBHN-VPQH), điểm g khoản 4 Điều 17",
            "x": 60,
            "y": 1810,
            "size": 26,
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
          "say": "Nine o'clock. Point g.",
          "sub": "Chín giờ. Điểm g."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It covers people from the point b group who were dismissed from their posts.",
          "sub": "Điểm này dành cho người thuộc điểm b, tức từng là cán bộ, công chức, viên chức hay người trong Quân đội, Công an, mà bị buộc thôi việc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No certificate for three years, counted from the day the dismissal decision takes effect.",
          "sub": "Không được cấp chứng chỉ trong ba năm, kể từ ngày quyết định buộc thôi việc có hiệu lực.",
          "keys": [
            "ba năm"
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
            "at": "l1",
            "fit": [
              "f-c1",
              "f-c2"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l4",
            "fit": "F",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "f-c1",
            "t": "text",
            "text": "Thử nghĩ: cựu công chức",
            "x": 60,
            "y": 1590,
            "size": 44,
            "at": "l1:former"
          },
          {
            "id": "f-c2",
            "t": "text",
            "text": "quyết định hiệu lực 2 năm trước",
            "x": 60,
            "y": 1650,
            "size": 40,
            "at": "l1:two"
          },
          {
            "id": "f-no",
            "t": "text",
            "text": "Nộp được chưa? CHƯA",
            "x": 60,
            "y": 1720,
            "size": 50,
            "at": "l3:Not",
            "color": "coral",
            "hl": [
              {
                "text": "CHƯA",
                "at": "l3:Not"
              }
            ]
          },
          {
            "id": "f-key",
            "t": "text",
            "text": "Không tính từ ngày mình sẵn sàng",
            "x": 900,
            "y": 1720,
            "size": 40,
            "at": "l4:ready",
            "color": "accent",
            "hl": [
              {
                "text": "sẵn sàng",
                "at": "l4:ready"
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
          "say": "Try this. A former civil servant, dismissed, decision effective two years ago.",
          "sub": "Thử nghĩ xem. Một cựu công chức bị buộc thôi việc, quyết định có hiệu lực từ hai năm trước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Training done, probation test passed. Can he file now?",
          "sub": "Đã học nghề, đã qua kiểm tra. Giờ nộp hồ sơ chứng chỉ được chưa?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not yet. Three years, from the day the decision took effect. Not from the day he left, or finished class.",
          "sub": "Chưa. Ba năm tính từ ngày quyết định có hiệu lực, không tính từ ngày nghỉ hay ngày học xong.",
          "keys": [
            "Chưa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The clock starts when the decision takes effect, not when you feel ready.",
          "sub": "Mốc chờ tính từ ngày quyết định có hiệu lực, không phải từ ngày mình sẵn sàng.",
          "keys": [
            "không phải từ ngày mình sẵn sàng"
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
            "text": "⑤ Ba điểm ngắn: c, đ, e",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:clear"
          },
          {
            "id": "g-i0",
            "t": "illus",
            "name": "house",
            "x": 2028,
            "y": 1260,
            "size": 110,
            "at": "l2:residence"
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "c.",
            "x": 2168,
            "y": 1280,
            "size": 60,
            "at": "l2:residence",
            "color": "accent"
          },
          {
            "id": "g-x0",
            "t": "text",
            "text": "Không thường trú tại VN",
            "x": 2258,
            "y": 1290,
            "size": 46,
            "at": "l2:residence+200"
          },
          {
            "id": "g-i1",
            "t": "illus",
            "name": "locked",
            "x": 2028,
            "y": 1410,
            "size": 110,
            "at": "l3:detox"
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "đ.",
            "x": 2168,
            "y": 1430,
            "size": 60,
            "at": "l3:detox",
            "color": "accent"
          },
          {
            "id": "g-x1",
            "t": "text",
            "text": "ĐANG cai nghiện, giáo dục bắt buộc",
            "x": 2258,
            "y": 1440,
            "size": 38,
            "at": "l3:detox+200",
            "hl": [
              {
                "text": "ĐANG",
                "at": "l3:currently"
              }
            ]
          },
          {
            "id": "g-i2",
            "t": "illus",
            "name": "brain",
            "x": 2028,
            "y": 1560,
            "size": 110,
            "at": "l4:capacity"
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "e.",
            "x": 2168,
            "y": 1580,
            "size": 60,
            "at": "l4:capacity",
            "color": "accent"
          },
          {
            "id": "g-x2",
            "t": "text",
            "text": "Mất, hạn chế năng lực hành vi",
            "x": 2258,
            "y": 1590,
            "size": 46,
            "at": "l4:capacity+200"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Luật Luật sư (VBHN 03/VBHN-VPQH), điểm c, đ, e khoản 4 Điều 17",
            "x": 2028,
            "y": 1810,
            "size": 26,
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
          "say": "Three short points left. Short, but clear.",
          "sub": "Còn ba điểm ngắn. Ngắn, nhưng rõ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Point c: no permanent residence in Vietnam.",
          "sub": "Điểm c: không thường trú tại Việt Nam."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Point đ: currently placed in a compulsory detox or education centre. Currently, again, so tied to that time.",
          "sub": "Điểm đ: đang bị đưa vào cơ sở cai nghiện bắt buộc, cơ sở giáo dục bắt buộc. Lại chữ “đang”, gắn với thời gian bị áp dụng.",
          "keys": [
            "đang"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Point e: lost, or limited, capacity for civil acts.",
          "sub": "Điểm e: mất hoặc bị hạn chế năng lực hành vi dân sự.",
          "keys": [
            "năng lực hành vi dân sự"
          ]
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s15",
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
            "text": "⑥ Có rồi, mất được không?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:calls"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1200,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "lan",
                  "side": "left"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                }
              ],
              "props": [
                "mobile-phone",
                "scroll"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:calls",
            "caption": "9 giờ rưỡi · Bác Bình gọi",
            "icon": "mobile-phone"
          },
          {
            "id": "h-18",
            "t": "text",
            "text": "Điều 18 · thu hồi khi:",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l3:Eighteen",
            "hl": [
              {
                "text": "thu hồi",
                "at": "l3:revoked"
              }
            ]
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "• hết đủ tiêu chuẩn",
            "x": 3996,
            "y": 1330,
            "size": 40,
            "at": "l3:standards"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "• vào làm nhà nước",
            "x": 3996,
            "y": 1385,
            "size": 40,
            "at": "l3:state"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "• 2 năm chưa vào Đoàn",
            "x": 3996,
            "y": 1440,
            "size": 40,
            "at": "l4:two",
            "color": "coral",
            "hl": [
              {
                "text": "2 năm",
                "at": "l4:two"
              }
            ]
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "• một số trường hợp kết án",
            "x": 3996,
            "y": 1495,
            "size": 40,
            "at": "l4:convictions"
          },
          {
            "id": "h-19",
            "t": "text",
            "text": "Điều 19: cấp lại tuỳ lý do",
            "x": 3996,
            "y": 1580,
            "size": 42,
            "at": "l5:Nineteen"
          },
          {
            "id": "h-19b",
            "t": "text",
            "text": "tội nghiêm trọng, cố ý → không",
            "x": 3996,
            "y": 1640,
            "size": 40,
            "at": "l5:never",
            "color": "coral"
          },
          {
            "id": "h-121",
            "t": "text",
            "text": "Từ 01/7/2025: Chủ tịch UBND tỉnh",
            "x": 3996,
            "y": 1720,
            "size": 40,
            "at": "l6:July"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Luật Luật sư (VBHN 03/VBHN-VPQH), Điều 18, 19 · NĐ 121/2025/NĐ-CP (theo Tạp chí Luật sư Việt Nam)",
            "x": 3996,
            "y": 1810,
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
          "say": "Half past nine. Uncle Bình calls, Lan's uncle, a lawyer for decades.",
          "sub": "Chín rưỡi. Bác Bình gọi, bác ruột Lan, làm luật sư mấy chục năm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Reading Article seventeen? Read eighteen too. A certificate can also be taken back.",
          "sub": "Đọc Điều 17 à? Đọc luôn Điều 18. Chứng chỉ có rồi vẫn có thể bị thu hồi.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article Eighteen: it can be revoked if you no longer meet the standards, or join the state sector.",
          "sub": "Điều 18: bị thu hồi khi không còn đủ tiêu chuẩn, hoặc được tuyển dụng, bổ nhiệm vào khu vực nhà nước.",
          "keys": [
            "thu hồi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Or if you do not join a bar within two years of the grant. And for some convictions.",
          "sub": "Hoặc không gia nhập Đoàn luật sư trong hai năm kể từ ngày được cấp. Và một số trường hợp bị kết án.",
          "keys": [
            "trong hai năm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "binh",
          "say": "Article Nineteen lets you apply again, depending on why. A serious intentional crime? Never again.",
          "sub": "Điều 19 cho cấp lại tuỳ lý do thu hồi. Bị kết án tội nghiêm trọng trở lên do cố ý? Không bao giờ được cấp lại."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And since July twenty twenty-five, the provincial chairman grants and regrants it.",
          "sub": "Từ 01/7/2025, theo Nghị định 121/2025, Chủ tịch UBND cấp tỉnh cấp và cấp lại chứng chỉ."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
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
            "text": "⑦ 10 giờ · Tự tra năm bước",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:ten"
          },
          {
            "id": "i-b0",
            "t": "badge",
            "n": 1,
            "x": 5994,
            "y": 1290,
            "at": "l2:open"
          },
          {
            "id": "i-s0",
            "t": "text",
            "text": "Mở VBHN, tìm Điều 17",
            "x": 6044,
            "y": 1265,
            "size": 44,
            "at": "l2:open+200"
          },
          {
            "id": "i-b1",
            "t": "badge",
            "n": 2,
            "x": 5994,
            "y": 1380,
            "at": "l3:point"
          },
          {
            "id": "i-s1",
            "t": "text",
            "text": "Đọc khoản 4: a → g",
            "x": 6044,
            "y": 1355,
            "size": 44,
            "at": "l3:point+200"
          },
          {
            "id": "i-b2",
            "t": "badge",
            "n": 3,
            "x": 5994,
            "y": 1470,
            "at": "l3:mark"
          },
          {
            "id": "i-s2",
            "t": "text",
            "text": "Ghi: không thuộc / thuộc / cần hỏi",
            "x": 6044,
            "y": 1445,
            "size": 44,
            "at": "l3:mark+200",
            "color": "coral"
          },
          {
            "id": "i-b3",
            "t": "badge",
            "n": 4,
            "x": 5994,
            "y": 1560,
            "at": "l4:newer"
          },
          {
            "id": "i-s3",
            "t": "text",
            "text": "Kiểm văn bản mới hơn",
            "x": 6044,
            "y": 1535,
            "size": 44,
            "at": "l4:newer+200"
          },
          {
            "id": "i-b4",
            "t": "badge",
            "n": 5,
            "x": 5994,
            "y": 1650,
            "at": "l5:ask"
          },
          {
            "id": "i-s4",
            "t": "text",
            "text": "Cần hỏi → Đoàn, Sở Tư pháp",
            "x": 6044,
            "y": 1625,
            "size": 44,
            "at": "l5:ask+200"
          },
          {
            "id": "i-key",
            "t": "text",
            "text": "Đọc lúc xuất phát",
            "x": 7004,
            "y": 1320,
            "size": 50,
            "at": "l6:start",
            "color": "accent",
            "hl": [
              {
                "text": "xuất phát",
                "at": "l6:start"
              }
            ]
          },
          {
            "id": "i-key2",
            "t": "text",
            "text": "rẻ hơn bị từ chối",
            "x": 7004,
            "y": 1390,
            "size": 50,
            "at": "l6:cheaper"
          },
          {
            "id": "i-key3",
            "t": "text",
            "text": "ở vạch đích",
            "x": 7004,
            "y": 1460,
            "size": 50,
            "at": "l6:finish"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Ten o'clock. Lan's method, five steps.",
          "sub": "Mười giờ. Cách tự tra của Lan, năm bước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "One: open the consolidated Law on Lawyers and find Article seventeen.",
          "sub": "Một: mở văn bản hợp nhất Luật Luật sư, tìm Điều 17.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Two: read clause four point by point, no skimming. Three: mark each one, does not apply, applies, or ask.",
          "sub": "Hai: đọc khoản 4 từng điểm, không lướt. Ba: ghi mỗi điểm “không thuộc”, “thuộc” hoặc “cần hỏi”."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Four: check newer documents, like Decree one twenty-one on who grants it.",
          "sub": "Bốn: kiểm văn bản mới hơn có sửa không, như Nghị định 121/2025 về thẩm quyền cấp."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Five: anything marked ask goes to the bar association or the justice department, before enrolling.",
          "sub": "Năm: điểm nào “cần hỏi” thì hỏi Đoàn luật sư hoặc Sở Tư pháp trước khi nhập học.",
          "keys": [
            "trước khi nhập học"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Reading each point at the start is cheaper than a refusal at the finish line.",
          "sub": "Đọc từng điểm một lần lúc xuất phát rẻ hơn bị từ chối ở vạch đích.",
          "keys": [
            "rẻ hơn bị từ chối"
          ]
        }
      ],
      "ref": "p16,p17"
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
            "at": "l3",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "11 giờ · Cột đã điền",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:eleven"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1200,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "face": "happy",
                  "pose": "thumb"
                }
              ],
              "props": [
                "page-facing-up",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:eleven",
            "caption": "11 giờ tối · cùng tờ giấy lúc 7 giờ",
            "icon": "page-facing-up"
          },
          {
            "id": "j-p0",
            "t": "text",
            "text": "a. không thuộc ✓",
            "x": 7952,
            "y": 1240,
            "size": 40,
            "at": "l2:seven+0"
          },
          {
            "id": "j-p1",
            "t": "text",
            "text": "b. không thuộc ✓",
            "x": 7952,
            "y": 1310,
            "size": 40,
            "at": "l2:seven+220"
          },
          {
            "id": "j-p2",
            "t": "text",
            "text": "c. không thuộc ✓",
            "x": 7952,
            "y": 1380,
            "size": 40,
            "at": "l2:seven+440"
          },
          {
            "id": "j-p3",
            "t": "text",
            "text": "d. không thuộc ✓",
            "x": 7952,
            "y": 1450,
            "size": 40,
            "at": "l2:seven+660"
          },
          {
            "id": "j-p4",
            "t": "text",
            "text": "đ. không thuộc ✓",
            "x": 7952,
            "y": 1520,
            "size": 40,
            "at": "l2:seven+880"
          },
          {
            "id": "j-p5",
            "t": "text",
            "text": "e. không thuộc ✓",
            "x": 7952,
            "y": 1590,
            "size": 40,
            "at": "l2:seven+1100"
          },
          {
            "id": "j-p6",
            "t": "text",
            "text": "g. không thuộc ✓",
            "x": 7952,
            "y": 1660,
            "size": 40,
            "at": "l2:seven+1320"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy”",
            "x": 7932,
            "y": 1750,
            "size": 46,
            "at": "l3:careful",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Eleven o'clock. The same sheet from seven.",
          "sub": "Mười một giờ. Vẫn tờ giấy lúc bảy giờ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "All seven points, does not apply. And Thảo has her exit date. Now I can spend my two years in peace.",
          "sub": "Cả bảy điểm: không thuộc. Chị Thảo cũng đã có lịch nghỉ. Giờ em yên tâm bỏ hai năm.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Careful now, no regrets later. One evening of reading, two years of peace.",
          "sub": "“Cẩn tắc vô áy náy.” Một tối đọc luật, hai năm yên tâm.",
          "keys": [
            "hai năm yên tâm"
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
      "ref": "outro,p16"
    },
    {
      "id": "s18",
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
            "at": "l1:seven",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l2:crime",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:clock",
            "fit": "F",
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
            "x": 3588,
            "y": 20,
            "at": "l1:seven"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 7524,
            "y": 20,
            "at": "l2:crime"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1620,
            "y": 1110,
            "at": "l3:clock"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài là kiến thức nghề, không phải tư vấn cho vụ việc cụ thể. Nhân vật là minh hoạ. Luật Luật sư đang sửa đổi — kiểm lại sau kỳ họp.",
            "x": 7932,
            "y": 1810,
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
          "say": "So: seven points in clause four, applied at the finish line. Read them at the start.",
          "sub": "Tóm lại: khoản 4 có bảy điểm, áp ở vạch đích. Đọc chúng từ lúc xuất phát.",
          "keys": [
            "bảy điểm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "With convictions, the type of crime matters more than clearing.",
          "sub": "Với án tích, loại tội quyết định nhiều hơn việc đã xoá.",
          "keys": [
            "loại tội"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And for dismissal, the three year clock starts when the decision takes effect.",
          "sub": "Và với buộc thôi việc, ba năm tính từ ngày quyết định có hiệu lực.",
          "keys": [
            "ba năm"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s19",
      "module": "QUIZ-01",
      "data": {
        "q": "In the think about it case, can the former civil servant apply after two years?",
        "options": [
          "No, the three year period counts from the day the decision took effect",
          "Yes, because the clock started when the training course began",
          "Yes, finishing training and probation cancels the waiting period at once"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "hourglass-not-done",
        "why": "Ba năm tính từ ngày quyết định buộc thôi việc có hiệu lực; hai năm thì chưa đủ."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "In the think about it case, can the former civil servant apply after two years?",
          "sub": "Trong khung Thử nghĩ xem, cựu công chức có nộp được sau hai năm không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. The three year period counts from the day the decision took effect.",
          "sub": "Chưa. Ba năm tính từ ngày quyết định có hiệu lực."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Two years is not three.",
          "sub": "Hai năm chưa phải ba năm."
        }
      ],
      "ref": "questions[21]"
    },
    {
      "id": "s20",
      "module": "END-05",
      "data": {
        "text": "Bảy điểm, một tối",
        "sub": "Tra khoản 4 Điều 17 · bài sau: bao lâu, tốn bao nhiêu"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, look up clause four yourself, and mark each point.",
          "sub": "Tối nay, tự tra khoản 4 theo cách của Lan, ghi kết quả từng điểm.",
          "keys": [
            "ghi kết quả từng điểm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next lesson: how long and how much. Now, the forty questions below.",
          "sub": "Bài sau: mất bao lâu, tốn bao nhiêu. Giờ thử bốn mươi câu hỏi bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (đào sâu 2 chuỗi bar-roadmap) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-23 (đồ vật kể chuyện): tờ giấy bảy điểm a–g với cột trống (cận rồi kéo ra thấy Lan) → trở lại ở ô J, cột đã điền “không thuộc”. Dòng thời gian: một tối thứ Ba Lan tự tra khoản 4 Điều 17 (7 giờ mở văn bản → 7 giờ rưỡi Thảo ghé: điểm b + Cách A/B p5 → 8 giờ điểm d + “Khoan đã!” xoá án tích p8 → rào chắn ở ba cửa p10 → 9 giờ điểm g, cựu công chức 2 năm p12 → c, đ, e → 9 giờ rưỡi Bác Bình gọi: thu hồi, cấp lại p15 → 10 giờ năm bước tự tra p16 → 11 giờ tờ giấy đã điền). Nhân vật theo w145/_series/bar-roadmap.md: Lan (chính), Thảo (chị họ, viên chức học tối — đóng vai Dũng của p5), Bác Bình. Số, điều chỉ từ bài: khoản 3, 4 Điều 17 (a–g), 3 năm, 2 năm, Điều 18, 19, 01/7/2025, NĐ 121/2025, Thông tư 10/2021, khoá 28. Cảnh ngắt nhịp: BRK-04 s06 (Cách A/B p5), DLG s09 (p8), BRK-07 s11. Câu trích “Cẩn tắc vô áy náy” mở/khép vòng. Câu đố questions[21]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s17"
  }
};
