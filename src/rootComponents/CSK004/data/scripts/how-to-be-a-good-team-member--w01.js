// Kịch bản video W lần 3 (#110, #112) — "Làm sao để nhóm nào cũng muốn làm việc cùng bạn?" · bài tổng chuỗi "Làm thành viên tốt trong nhóm"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-be-a-good-team-member--w01",
  "hook": "HOOK-05",
  "unit": {
    "audience": "team-members",
    "slug": "how-to-be-a-good-team-member",
    "door": "ky-nang",
    "level": "B1",
    "title": "Làm sao để nhóm nào cũng muốn làm việc cùng bạn?",
    "series": "Làm thành viên tốt trong nhóm"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô (5 × 2) đi theo MỘT ĐỢT TIỂU LUẬN của nhóm Lan (mở: buổi họp tuần ba, Lan phát phiếu cả tuần mà phần hai đã đổi sang phỏng vấn — 📌 p12) → tua lại tuần một: họp đầu (20 phút, 3 câu hỏi; BRK-04 Trước/Sau p4) → chia việc (công sức, nhẹ/vừa/nặng) → tuần hai báo tiến độ (“Khoan đã!” DLG nhóm chat phụ p11–p13) → BRK-07 rehook → tuần ba nhắc Dũng chậm việc (p15) + chuyện báo giá ở công ty chị Thảo (✍️ p16) → tuần bốn nhận góp ý + báo cáo tuần của chị Thảo (❓ p21; BRK-02) → buổi thuyết trình, thầy Bình khen, Dũng nhắc tên Lan (📌 p25) → BRK-08 bản đồ chuỗi (p27) → năm thói quen (outro) → kỳ sau, cùng phòng họp (khép vòng). Nhân vật (w145/_series/team-members.md): Lan (Diễm p12, Lành p23/p25), Dũng (một trong ba bạn ở nhóm chat phụ p12, Vinh p25), chị Thảo (Luân p16, “bạn” gửi báo cáo p21), thầy Bình (thầy p25). Mẫn, Thoa (p4) chỉ trên BRK-04. Câu tục ngữ mở/khép: “Một bàn tay không vỗ nên kêu”. Bản cũ (W lần 3, #110/#112): w145/bak/how-to-be-a-good-team-member--w01.js.",
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
            "id": "a-n",
            "t": "text",
            "text": "Cả tuần phát phiếu",
            "x": 60,
            "y": 140,
            "size": 96,
            "at": "l1:whole week",
            "color": "accent",
            "hl": [
              {
                "text": "Cả tuần",
                "at": "l1:whole week"
              }
            ]
          },
          {
            "id": "a-x",
            "t": "text",
            "text": "→ không tờ nào được dùng",
            "x": 80,
            "y": 290,
            "size": 56,
            "at": "l1:Not one",
            "color": "coral"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Không ai lười, không ai xấu",
            "x": 70,
            "y": 400,
            "size": 50,
            "at": "l2:lazy",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One whole week of survey forms. Not one of them gets used.",
          "sub": "Cả một tuần đi phát phiếu khảo sát. Không tờ nào được dùng.",
          "keys": [
            "Cả một tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Nobody was lazy. Nobody was mean. So what went wrong?",
          "sub": "Không ai lười. Không ai xấu tính. Vậy sai ở đâu?",
          "keys": [
            "sai ở đâu"
          ]
        }
      ],
      "ref": "intro,p12"
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
            "y": 140,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "enter": "walk",
                  "at": "l1",
                  "face": "happy",
                  "pose": "give"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "clipboard"
              ]
            },
            "at": "l1",
            "caption": "Tuần ba · buổi họp nhóm",
            "icon": "clipboard"
          },
          {
            "id": "a-k",
            "t": "text",
            "text": "Phần hai đã đổi, Lan không biết",
            "x": 60,
            "y": 520,
            "size": 46,
            "at": "l4:changed",
            "color": "coral",
            "hl": [
              {
                "text": "không biết",
                "at": "l4:know"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Một bàn tay không vỗ nên kêu”",
            "x": 60,
            "y": 690,
            "size": 52,
            "at": "l5:clap",
            "color": "accent",
            "hl": [
              {
                "text": "không vỗ nên kêu",
                "at": "l5:clap"
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
          "say": "Meet Lan, a second-year student, and her group's biggest worrier.",
          "sub": "Đây là Lan, sinh viên năm hai, người lo nhiều nhất nhóm.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "I handed out surveys all week!",
          "sub": "Mình phát phiếu khảo sát cả tuần rồi nè!",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Dũng, her teammate. Fast hands, slightly forgetful.",
          "sub": "Còn đây là Dũng, bạn cùng nhóm. Nhanh tay, hơi đãng trí.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Oh... part two changed to interviews. Didn't you know?",
          "sub": "Ơ… phần hai đổi sang phỏng vấn rồi mà. Lan không biết à?",
          "face": "surprised",
          "react": {
            "lan": "sad"
          }
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One hand alone can't clap. Here, four hands clapped four songs.",
          "sub": "“Một bàn tay không vỗ nên kêu.” Ở đây, bốn bàn tay vỗ bốn nhịp khác nhau.",
          "keys": [
            "Một bàn tay không vỗ nên kêu"
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
      "ref": "p12,p13"
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
            "text": "Nhóm nào cũng muốn làm cùng?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:every team",
            "hl": [
              {
                "text": "muốn làm cùng",
                "at": "l1:wants"
              }
            ]
          },
          {
            "id": "b-n1",
            "t": "text",
            "text": "Người giỏi nhất",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:smartest",
            "color": "muted"
          },
          {
            "id": "b-n2",
            "t": "text",
            "text": "Người ôm hết một mình",
            "x": 2528,
            "y": 170,
            "size": 50,
            "at": "l2:carries",
            "color": "muted"
          },
          {
            "id": "b-n1x",
            "t": "strike",
            "over": "b-n1",
            "at": "l2:smartest+400"
          },
          {
            "id": "b-n2x",
            "t": "strike",
            "over": "b-n2",
            "at": "l2:alone"
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "① Rõ vai từ buổi đầu",
            "x": 2028,
            "y": 270,
            "size": 52,
            "at": "l3:clear roles",
            "hl": [
              {
                "text": "Rõ vai",
                "at": "l3:clear roles"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "② Làm đủ, cả nhóm thấy",
            "x": 2028,
            "y": 350,
            "size": 52,
            "at": "l3:full share",
            "hl": [
              {
                "text": "cả nhóm thấy",
                "at": "l3:see"
              }
            ]
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "③ Nói thẳng bằng sự việc",
            "x": 2868,
            "y": 270,
            "size": 52,
            "at": "l3:straight",
            "hl": [
              {
                "text": "sự việc",
                "at": "l3:facts"
              }
            ]
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "④ Ghi nhận đúng người",
            "x": 2868,
            "y": 350,
            "size": 52,
            "at": "l3:credit",
            "hl": [
              {
                "text": "đúng người",
                "at": "l3:right person"
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
          "say": "So how do you become the team member every team wants?",
          "sub": "Vậy làm sao để thành người mà nhóm nào cũng muốn làm cùng?",
          "keys": [
            "nhóm nào cũng muốn làm cùng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not the smartest. Not the one who carries everything alone.",
          "sub": "Không phải người giỏi nhất. Cũng không phải người ôm hết một mình."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Clear roles, a full share the team can see, straight talk with facts, and credit to the right person.",
          "sub": "Rõ vai từ buổi đầu, làm đủ phần cho cả nhóm thấy, nói thẳng bằng sự việc, ghi nhận đúng người.",
          "keys": [
            "Rõ vai từ buổi đầu"
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
            "id": "b-map",
            "t": "text",
            "text": "Bài này là bản đồ của chuỗi",
            "x": 2028,
            "y": 470,
            "size": 46,
            "at": "l2:map",
            "color": "muted",
            "hl": [
              {
                "text": "bản đồ",
                "at": "l2:map"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 590,
            "w": 250,
            "h": 90,
            "at": "l1:three weeks+400",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2303,
            "y": 590,
            "w": 250,
            "h": 90,
            "at": "l1:three weeks+650",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2578,
            "y": 590,
            "w": 250,
            "h": 90,
            "at": "l1:three weeks+900",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2853,
            "y": 590,
            "w": 250,
            "h": 90,
            "at": "l1:three weeks+1150",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3128,
            "y": 590,
            "w": 250,
            "h": 90,
            "at": "l1:three weeks+1400",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3403,
            "y": 590,
            "w": 250,
            "h": 90,
            "at": "l1:three weeks+1650",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Họp đầu",
            "x": 2046,
            "y": 610,
            "size": 40,
            "at": "l1:three weeks+520"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Chia việc",
            "x": 2321,
            "y": 610,
            "size": 40,
            "at": "l1:three weeks+770"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Tiến độ",
            "x": 2596,
            "y": 610,
            "size": 40,
            "at": "l1:three weeks+1020"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Nhắc bạn",
            "x": 2871,
            "y": 610,
            "size": 40,
            "at": "l1:three weeks+1270"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Góp ý",
            "x": 3146,
            "y": 610,
            "size": 40,
            "at": "l1:three weeks+1520"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Thuyết trình",
            "x": 3421,
            "y": 610,
            "size": 40,
            "at": "l1:three weeks+1770"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Rewind three weeks, to the first meeting. Six stops.",
          "sub": "Tua lại ba tuần, về buổi họp đầu của nhóm. Sáu chặng.",
          "keys": [
            "Tua lại ba tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This video is the map. Each stop opens a deeper lesson.",
          "sub": "Video này là tấm bản đồ, mỗi chặng dẫn sang một bài đào sâu.",
          "keys": [
            "tấm bản đồ"
          ]
        }
      ],
      "ref": "intro,p27"
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
            "text": "① Tuần một · Buổi họp đầu",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First stop"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 140,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "face": "worried"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "books"
              ]
            },
            "at": "l1:library",
            "caption": "Tuần một · thư viện",
            "icon": "books"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Mỗi người hiểu đề một kiểu",
            "x": 3996,
            "y": 170,
            "size": 48,
            "at": "l3:differently",
            "hl": [
              {
                "text": "một kiểu",
                "at": "l3:differently"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Việc chung: chẳng của ai",
            "x": 3996,
            "y": 245,
            "size": 48,
            "at": "l3:nobody",
            "color": "coral",
            "hl": [
              {
                "text": "chẳng của ai",
                "at": "l3:nobody"
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
          "say": "First stop: week one, the first meeting, in the library.",
          "sub": "Chặng một: tuần một, buổi họp đầu ở thư viện."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Easy! Let's all just do our own part!",
          "sub": "Dễ mà! Mỗi người cứ làm phần mình nhé!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Careful. Each person reads the task differently, and shared jobs belong to nobody.",
          "sub": "Cẩn thận. Mỗi người hiểu đề một kiểu, còn việc chung như in ấn, nộp bài thì chẳng thuộc về ai.",
          "keys": [
            "Mỗi người hiểu đề một kiểu"
          ]
        }
      ],
      "ref": "p1"
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
            "id": "c-20",
            "t": "text",
            "text": "20 phút · 3 câu hỏi",
            "x": 3996,
            "y": 330,
            "size": 56,
            "at": "l1:twenty",
            "color": "accent",
            "hl": [
              {
                "text": "20 phút",
                "at": "l1:twenty minutes"
              }
            ]
          },
          {
            "id": "c-q",
            "t": "text",
            "text": "Để làm gì? Xong? Ai lo?",
            "x": 3996,
            "y": 410,
            "size": 44,
            "at": "l1:what for"
          },
          {
            "id": "c-g",
            "t": "text",
            "text": "Mục tiêu: một câu, ai cũng nhắc giống",
            "x": 3996,
            "y": 480,
            "size": 40,
            "at": "l2:one sentence",
            "font": "base",
            "hl": [
              {
                "text": "một câu",
                "at": "l2:one sentence"
              }
            ]
          },
          {
            "id": "c-d",
            "t": "text",
            "text": "Xong: dạng, độ dài, giờ nộp, ai nộp",
            "x": 3996,
            "y": 545,
            "size": 32,
            "at": "l2:Done",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "c-ask",
            "t": "text",
            "text": "Chưa rõ đề → hỏi thầy trước",
            "x": 3996,
            "y": 690,
            "size": 48,
            "at": "l4:cheaper",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi thầy trước",
                "at": "l4:question"
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
          "say": "First twenty minutes, three questions: what for, what is done, who does what.",
          "sub": "Dành hai mươi phút đầu cho ba câu: làm để làm gì, xong trông thế nào, ai lo phần nào.",
          "keys": [
            "hai mươi phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The goal: one sentence everyone repeats. Done: format, length, deadline, who submits.",
          "sub": "Mục tiêu là một câu ai nhắc cũng giống nhau. “Xong” là dạng, độ dài, mẫu, giờ nộp, ai nộp.",
          "keys": [
            "một câu ai nhắc cũng giống nhau"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Survey or literature review? I'll ask Mr. Bình first.",
          "sub": "Khảo sát hay tổng hợp tài liệu? Mình hỏi lại thầy Bình trước đã.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One question at the start is cheaper than redoing it at the end.",
          "sub": "Một câu hỏi lúc đầu rẻ hơn nhiều so với làm lại lúc cuối.",
          "keys": [
            "rẻ hơn nhiều"
          ]
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s06",
      "module": "BRK-04",
      "data": {
        "title": "Phỏng vấn mười bạn sinh viên",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "“Mẫn, Thoa” — hai tên, ai cũng chờ",
        "right": "“Mẫn phụ trách, Thoa hỗ trợ hẹn người quen”",
        "wrongIllus": "hourglass-done",
        "rightIllus": "label"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Two names, one task. A week later: no interviews.",
          "sub": "Hai tên một việc. Một tuần sau: chưa ai phỏng vấn ai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One leads, one helps.",
          "sub": "Một người phụ trách, một người hỗ trợ.",
          "keys": [
            "Một người phụ trách"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
          }
        ],
        "items": [
          {
            "id": "c-pin",
            "t": "text",
            "text": "📌 Ghim: mục tiêu · “xong” · ai, hạn",
            "x": 4836,
            "y": 690,
            "size": 44,
            "at": "l2:pin",
            "color": "accent",
            "hl": [
              {
                "text": "Ghim",
                "at": "l2:pin"
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
          "say": "Two names on one task, and each one sits waiting for the other.",
          "sub": "Hai tên một việc, mỗi người ngồi chờ người kia.",
          "keys": [
            "mỗi người ngồi chờ người kia"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then pin one summary in the group chat: goal, done, names, dates.",
          "sub": "Rồi gửi tin tóm tắt vào nhóm chat và ghim lên đầu: mục tiêu, “xong”, tên và hạn.",
          "keys": [
            "ghim lên đầu"
          ]
        }
      ],
      "ref": "p3,p5"
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
            "text": "② Tuần một · Chia việc",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second stop"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 140,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up"
              ]
            },
            "at": "l1:divide",
            "caption": "Tuần một · chia việc",
            "icon": "page-facing-up"
          },
          {
            "id": "d-p",
            "t": "text",
            "text": "Số trang bằng nhau?",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l2:pages",
            "color": "muted"
          },
          {
            "id": "d-px",
            "t": "strike",
            "over": "d-p",
            "at": "l4:Way A"
          },
          {
            "id": "d-A",
            "t": "text",
            "text": "A: bốn trang mỗi người",
            "x": 5964,
            "y": 260,
            "size": 46,
            "at": "l4:Way A",
            "color": "coral"
          },
          {
            "id": "d-A2",
            "t": "text",
            "text": "số liệu gần một tuần, kỳ sau từ chối chung nhóm",
            "x": 5994,
            "y": 325,
            "size": 32,
            "at": "l4:week",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "d-B",
            "t": "text",
            "text": "B: ước độ khó trước",
            "x": 5964,
            "y": 390,
            "size": 46,
            "at": "l5:Way B",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: still week one. Time to divide the work.",
          "sub": "Chặng hai: vẫn tuần một. Đến lúc chia việc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Easy. Same number of pages for everyone. Fair!",
          "sub": "Dễ ợt. Mỗi người số trang bằng nhau. Công bằng!",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Four pages of data aren't four pages of intro. Way A: data takes a week; that person quits.",
          "sub": "Nhưng bốn trang số liệu khác xa bốn trang mở đầu. Cách A: người làm số liệu mất gần một tuần, kỳ sau từ chối chung nhóm."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Way B: judge effort first, less writing for the data person.",
          "sub": "Cách B: ước lượng độ khó trước, người làm số liệu được bớt phần viết."
        }
      ],
      "ref": "p6,p7"
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
            "id": "d-l",
            "t": "box",
            "x": 5964,
            "y": 480,
            "w": 200,
            "h": 70,
            "at": "l2:light",
            "stroke": 4
          },
          {
            "id": "d-lt",
            "t": "text",
            "text": "nhẹ",
            "x": 6014,
            "y": 488,
            "size": 44,
            "at": "l2:light+200"
          },
          {
            "id": "d-m",
            "t": "box",
            "x": 6194,
            "y": 480,
            "w": 200,
            "h": 70,
            "at": "l2:medium",
            "stroke": 4
          },
          {
            "id": "d-mt",
            "t": "text",
            "text": "vừa",
            "x": 6244,
            "y": 488,
            "size": 44,
            "at": "l2:medium+200"
          },
          {
            "id": "d-h",
            "t": "box",
            "x": 6424,
            "y": 480,
            "w": 200,
            "h": 70,
            "at": "l2:heavy",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "d-ht",
            "t": "text",
            "text": "nặng",
            "x": 6469,
            "y": 488,
            "size": 44,
            "at": "l2:heavy+200",
            "color": "coral"
          },
          {
            "id": "d-inv",
            "t": "text",
            "text": "kể cả việc vô hình: ghép bài, định dạng, nộp",
            "x": 5964,
            "y": 580,
            "size": 32,
            "at": "l2:invisible",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Công bằng = công sức, không = số trang",
            "x": 5964,
            "y": 690,
            "size": 50,
            "at": "l1:effort",
            "color": "accent",
            "hl": [
              {
                "text": "công sức",
                "at": "l1:effort"
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
          "say": "Fairness is measured in effort, not pages.",
          "sub": "Công bằng đo bằng công sức, không đo bằng số trang.",
          "keys": [
            "Công bằng đo bằng công sức"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "List every task, even invisible ones. Mark light, medium, heavy. Ask who's busy. Arrange together.",
          "sub": "Liệt kê hết, kể cả việc vô hình. Đánh dấu nhẹ, vừa, nặng. Hỏi lịch bận, rồi cùng nhau xếp.",
          "keys": [
            "nhẹ, vừa, nặng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "The data part may take four sessions. Can I drop the introduction?",
          "sub": "Phần xử lý số liệu chắc mất khoảng bốn buổi, mình xin bớt phần mở đầu nhé.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Say it while dividing. And grab-what-you-like in the chat? The busy always get leftovers.",
          "sub": "Nặng quá thì nói ngay lúc chia. Còn kiểu “ai nhận thì nhắn vào nhóm”? Người bận luôn nhận phần còn lại.",
          "keys": [
            "nói ngay lúc chia"
          ]
        }
      ],
      "ref": "p6,p8,p9"
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
            "text": "③ Tuần hai · Cả nhóm cùng thấy",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third stop"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Một nơi chung, mỗi việc một dòng",
            "x": 7932,
            "y": 170,
            "size": 48,
            "at": "l2:shared place",
            "hl": [
              {
                "text": "Một nơi chung",
                "at": "l2:one shared place"
              }
            ]
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Ai · hạn · tình trạng",
            "x": 7932,
            "y": 245,
            "size": 46,
            "at": "l2:owner"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Chưa làm · Đang làm · Xong · Vướng",
            "x": 7932,
            "y": 320,
            "size": 44,
            "at": "l2:status",
            "color": "accent",
            "hl": [
              {
                "text": "Vướng",
                "at": "l2:status"
              }
            ]
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "Bài chung: chỉ một bản đang sửa",
            "x": 7932,
            "y": 395,
            "size": 44,
            "at": "l3:one copy",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: week two. Where is each part?",
          "sub": "Chặng ba: tuần hai. Phần của mỗi người đang ở đâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One shared place, one line per task: owner, deadline, status.",
          "sub": "Một nơi chung, mỗi việc một dòng: người phụ trách, hạn chót, tình trạng.",
          "keys": [
            "Một nơi chung"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Just one copy of the essay. Meanwhile, Dũng opens a small side chat, to discuss faster.",
          "sub": "Bài viết chung chỉ một bản. Trong khi đó, Dũng lập một nhóm chat nhỏ “để bàn cho nhanh”."
        }
      ],
      "ref": "p10,p12"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "online",
        "label": "Tuần hai · nhóm chat phụ",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Chốt trong nhóm chat phụ",
          "why": "Lan không có trong nhóm nhỏ, phát phiếu khảo sát cả tuần mà không dùng đến.",
          "rule": "Bàn ở đâu cũng được, chốt rồi thì báo về một chỗ"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Decided: part two is interviews, not surveys. Done!",
          "sub": "Chốt nhé: phần hai đổi sang phỏng vấn, bỏ khảo sát. Xong!",
          "pose": "thumb",
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
          "say": "Lan isn't in this chat. She'll hand out surveys all week for nothing.",
          "sub": "Lan đâu có trong nhóm nhỏ này. Cô ấy sẽ phát phiếu cả tuần cho không.",
          "keys": [
            "phát phiếu cả tuần cho không"
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
          "say": "One line in the main chat: part two is interviews now!",
          "sub": "Một dòng vào nhóm chính: phần hai giờ là phỏng vấn nhé!",
          "phase": "redo",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Discuss anywhere. Once decided, report to one place.",
          "sub": "Bàn ở đâu cũng được, chốt rồi thì báo về một chỗ.",
          "phase": "redo",
          "keys": [
            "chốt rồi thì báo về một chỗ"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p11,p12,p13"
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
          }
        ],
        "items": [
          {
            "id": "e-x",
            "t": "text",
            "text": "Xong · Tiếp · Vướng",
            "x": 7932,
            "y": 490,
            "size": 60,
            "at": "l1:Done",
            "color": "accent",
            "hl": [
              {
                "text": "Xong · Tiếp · Vướng",
                "at": "l1:Stuck"
              }
            ]
          },
          {
            "id": "e-y",
            "t": "text",
            "text": "Cần ai làm gì → dòng đầu",
            "x": 7932,
            "y": 575,
            "size": 44,
            "at": "l1:Requests",
            "color": "muted"
          },
          {
            "id": "e-z",
            "t": "text",
            "text": "Tin xấu báo sớm: chuyện gì, vì sao, ngày mới, cần ai giúp gì",
            "x": 7932,
            "y": 690,
            "size": 34,
            "at": "l2:four parts",
            "font": "base",
            "color": "coral",
            "hl": [
              {
                "text": "báo sớm",
                "at": "l2:early"
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
          "say": "Update in three lines: Done, Next, Stuck. Requests go first.",
          "sub": "Cập nhật đều bằng ba dòng: Xong, Tiếp, Vướng. Việc cần người khác thì lên dòng đầu.",
          "keys": [
            "Xong, Tiếp, Vướng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Bad news? Tell it early, in four parts: what happened, why, the new date, who you need.",
          "sub": "Tin xấu thì báo sớm, đủ bốn phần: chuyện gì, vì sao, ngày mới, cần ai giúp gì.",
          "keys": [
            "báo sớm"
          ]
        }
      ],
      "ref": "p11,p14"
    },
    {
      "id": "s13",
      "module": "BRK-07",
      "data": {
        "question": "Nhắc năm lần, năm lần “ok”, vẫn chưa có gì?",
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
          "say": "Five reminders, five okays, and still nothing?",
          "sub": "Nhắc năm lần, năm lần “ok”, mà vẫn chưa có gì?",
          "keys": [
            "vẫn chưa có gì"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
        }
      ],
      "ref": "p16"
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
          },
          {
            "at": "l4",
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
            "text": "④ Tuần ba · Bạn chậm việc",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth stop"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1230,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "mobile-phone",
                "spiral-calendar"
              ]
            },
            "at": "l1:Thursday",
            "caption": "Thứ Năm · phòng trọ của Lan",
            "icon": "mobile-phone"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "“Lười thì có”",
            "x": 60,
            "y": 1260,
            "size": 56,
            "at": "l2:lazy",
            "color": "muted"
          },
          {
            "id": "f-1x",
            "t": "strike",
            "over": "f-1",
            "at": "l3:guess"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Sự việc: hẹn thứ Ba, chưa có",
            "x": 60,
            "y": 1350,
            "size": 46,
            "at": "l3:Fact",
            "hl": [
              {
                "text": "Sự việc",
                "at": "l3:Fact"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "hiểu nhầm? ngại hỏi? kẹt lịch thi?",
            "x": 60,
            "y": 1420,
            "size": 40,
            "at": "l3:misunderstanding",
            "color": "muted"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "Nhắn riêng · sớm · sự việc + câu hỏi",
            "x": 60,
            "y": 1780,
            "size": 46,
            "at": "l5:Private",
            "color": "accent",
            "hl": [
              {
                "text": "Nhắn riêng",
                "at": "l5:Private"
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
          "say": "Fourth stop: week three. Dũng's survey part was due Tuesday. It's Thursday.",
          "sub": "Chặng bốn: tuần ba. Phần khảo sát của Dũng hẹn thứ Ba. Giờ đã thứ Năm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "He's just lazy. I'll post something sharp in the group chat.",
          "sub": "Lười thì có. Mình đăng một câu thật thâm vào nhóm chung.",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hold on. Fact versus guess: it's late. The reason may be a misunderstanding, shyness, or exams.",
          "sub": "Khoan. Tách sự việc khỏi phỏng đoán: sự việc là trễ hạn. Phía sau có thể là hiểu nhầm, ngại hỏi, kẹt lịch thi.",
          "keys": [
            "Tách sự việc khỏi phỏng đoán"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Dũng, the survey part was due Tuesday and I haven't seen it. Are you stuck somewhere?",
          "sub": "Dũng ơi, phần khảo sát hẹn thứ Ba mà mình chưa thấy. Bạn đang vướng chỗ nào không?",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Private and early, a fact and a question. No hints in the group chat.",
          "sub": "Nhắc riêng và sớm, một sự việc và một câu hỏi. Đừng ám chỉ trong nhóm chung.",
          "keys": [
            "Nhắc riêng và sớm"
          ]
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
            "at": "l2",
            "fit": [
              "f-v2"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "F",
            "ms": 700
          },
          {
            "at": "l4",
            "fit": [
              "f-v2"
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
            "id": "f-v2",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1230,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "worried",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "telephone-receiver",
                "page-facing-up"
              ]
            },
            "at": "l1:Thảo",
            "caption": "Cùng tuần · công ty chị Thảo",
            "icon": "office-building"
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "Lần ba phải đổi cách",
            "x": 60,
            "y": 1510,
            "size": 50,
            "at": "l3:third time",
            "color": "coral",
            "hl": [
              {
                "text": "đổi cách",
                "at": "l3:change"
              }
            ]
          },
          {
            "id": "f-6",
            "t": "text",
            "text": "Ngày · lý do · gặp · bước tiếp",
            "x": 60,
            "y": 1600,
            "size": 46,
            "at": "l5:date",
            "color": "accent",
            "hl": [
              {
                "text": "bước tiếp",
                "at": "l5:next step"
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
          "say": "Meanwhile, meet Thảo, Lan's cousin, an office worker waiting for a price quote.",
          "sub": "Cùng tuần đó, đây là chị Thảo, chị họ của Lan, đang chờ anh đồng nghiệp gửi số liệu báo giá.",
          "keys": [
            "chị Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Please remember the quote. Five messages, five replies: okay!",
          "sub": "“Anh ơi nhớ phần báo giá giúp em nhé.” Năm lần, lần nào cũng “ok em”.",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Still nothing. If the same reminder fails twice, the third time must change.",
          "sub": "Đến hạn vẫn chưa có. Nhắc hai lần y câu cũ không được thì lần thứ ba phải đổi cách.",
          "keys": [
            "lần thứ ba phải đổi cách"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I need it by Tuesday noon, for Thursday's client. Five minutes tomorrow? Or I tell the project lead.",
          "sub": "Thứ Năm em gặp khách nên cần báo giá trước trưa thứ Ba. Mai gặp năm phút được không ạ? Chưa có thì em báo chị phụ trách dự án.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A date, a reason, a meeting, a next step.",
          "sub": "Có ngày cụ thể, có lý do, hẹn gặp trực tiếp, và báo trước bước tiếp theo."
        }
      ],
      "ref": "p16,p17"
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
            "id": "f-7",
            "t": "text",
            "text": "Hứa chưa làm: chốt kế hoạch có ngày, nhắn lại",
            "x": 60,
            "y": 1680,
            "size": 32,
            "at": "l1:dated plan",
            "font": "base"
          },
          {
            "id": "f-9",
            "t": "text",
            "text": "Báo thầy sau cùng · mình chậm thì báo sớm",
            "x": 900,
            "y": 1780,
            "size": 40,
            "at": "l2:early",
            "color": "muted",
            "font": "base"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Promised, not done? A dated plan, in writing. Still nothing? Tell the teacher, with facts.",
          "sub": "Hứa mà chưa làm? Chốt kế hoạch có ngày, ghi bằng tin nhắn. Vẫn không đổi? Báo thầy cô, kèm sự việc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And if you're the slow one, warn the team early.",
          "sub": "Còn nếu chính mình chậm, báo sớm và đề xuất cách bù.",
          "keys": [
            "báo sớm"
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Tuần bốn · Nhận góp ý",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth stop"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1230,
            "w": 800,
            "data": {
              "set": "campus",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up"
              ]
            },
            "at": "l1:feedback",
            "caption": "Tuần bốn · sau giờ học",
            "icon": "speech-balloon"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Đồng đội thấy bài mình sớm nhất",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "l1:first",
            "color": "muted"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Dừng · cảm ơn · hỏi ví dụ",
            "x": 2028,
            "y": 1340,
            "size": 46,
            "at": "l4:Pause+600",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi ví dụ",
                "at": "l4:example"
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
          "say": "Fifth stop: week four. Lan gets feedback from teammates, who see her work first.",
          "sub": "Chặng năm: tuần bốn. Lan nhận góp ý từ bạn cùng nhóm, người thấy bài của Lan sớm nhất."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Lan, your analysis is hard to follow in places.",
          "sub": "Lan ơi, phần phân tích của Lan có chỗ khó theo dõi lắm.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Thanks. Can you show me one example?",
          "sub": "Cảm ơn nhé. Bạn chỉ mình một ví dụ được không?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Pause, thank them, ask for one example, repeat the point in your own words.",
          "sub": "Dừng một nhịp, cảm ơn ngắn, hỏi một ví dụ, rồi nhắc lại ý chính bằng lời của mình.",
          "keys": [
            "hỏi một ví dụ"
          ]
        }
      ],
      "ref": "p19"
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
            "at": "l3",
            "fit": [
              "g-v2"
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
            "id": "g-f",
            "t": "text",
            "text": "3 cái lọc",
            "x": 2028,
            "y": 1430,
            "size": 50,
            "at": "l1:three filters",
            "hl": [
              {
                "text": "3 cái lọc",
                "at": "l1:three filters"
              }
            ]
          },
          {
            "id": "g-f1",
            "t": "text",
            "text": "sự việc cụ thể? nhiều người nói? sửa thì tốt hơn?",
            "x": 2028,
            "y": 1500,
            "size": 30,
            "at": "l1:clear fact",
            "font": "base"
          },
          {
            "id": "g-f2",
            "t": "text",
            "text": "Không đồng ý: nói lý do · Sửa xong: báo lại",
            "x": 2028,
            "y": 1550,
            "size": 30,
            "at": "l1:Disagree",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "g-v2",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1230,
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
                "laptop",
                "bar-chart"
              ]
            },
            "at": "l2:weekly report",
            "caption": "Công ty chị Thảo · báo cáo tuần",
            "icon": "bar-chart"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Dài quá · khó tìm ý · trễ không?",
            "x": 2028,
            "y": 1650,
            "size": 40,
            "at": "l3:late",
            "color": "coral"
          },
          {
            "id": "g-fix",
            "t": "text",
            "text": "Rút gọn, kết luận lên đầu",
            "x": 2868,
            "y": 1780,
            "size": 46,
            "at": "l4:conclusion",
            "color": "accent",
            "hl": [
              {
                "text": "kết luận lên đầu",
                "at": "l4:conclusion first"
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
          "say": "Three filters: a clear fact? Several people? Will fixing help? Disagree? Say why.",
          "sub": "Ba cái lọc: có sự việc cụ thể? Nhiều người nói giống? Sửa thì tốt hơn? Không đồng ý thì nói lý do, sửa xong báo lại.",
          "keys": [
            "Ba cái lọc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thảo's weekly report gets two comments: too long, and hard to find the point.",
          "sub": "Ở công ty, báo cáo tuần của chị Thảo bị nói: dài quá, rồi khó tìm ý chính."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "A third person asks: so, late or not? Is that just their taste?",
          "sub": "Người thứ ba hỏi: “Tóm lại trễ hay không?” Đây là gu riêng của từng người à?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three people, one direction: almost surely real. Shorten it, put the conclusion first.",
          "sub": "Ba người cùng chỉ một hướng thì gần như chắc là thật. Rút gọn, đưa kết luận lên đầu.",
          "keys": [
            "đưa kết luận lên đầu"
          ]
        }
      ],
      "ref": "p20,p21"
    },
    {
      "id": "s19",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Ba người nói là dấu hiệu",
        "hl": "dấu hiệu",
        "sub": "Một người nói là gu, ba người nói là dấu hiệu"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One person saying it is taste.",
          "sub": "Một người nói là gu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three people saying it is a sign.",
          "sub": "Ba người nói là dấu hiệu.",
          "keys": [
            "dấu hiệu"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p22"
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
            "text": "⑥ Thuyết trình · Ghi nhận",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sixth stop"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1230,
            "w": 800,
            "data": {
              "set": "campus",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "explain"
                },
                {
                  "id": "lan",
                  "side": "right"
                }
              ],
              "props": [
                "bar-chart"
              ]
            },
            "at": "l1:Bình",
            "caption": "Buổi thuyết trình · lớp thầy Bình",
            "icon": "graduation-cap"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "“Dạ em cảm ơn thầy”",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l3:Thank you",
            "color": "muted"
          },
          {
            "id": "h-1x",
            "t": "strike",
            "over": "h-1",
            "at": "l4:assigned"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Lan: chỉ gửi đúng phần giao",
            "x": 3996,
            "y": 1340,
            "size": 44,
            "at": "l4:only",
            "color": "coral"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "“Phần này Lan làm ạ”",
            "x": 3996,
            "y": 1440,
            "size": 56,
            "at": "l5:Lan did",
            "color": "accent",
            "hl": [
              {
                "text": "Lan làm",
                "at": "l5:Lan did"
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
          "say": "Sixth stop: presentation day. Meet Mr. Bình, their lecturer.",
          "sub": "Chặng sáu: buổi thuyết trình. Đây là thầy Bình, giảng viên.",
          "keys": [
            "thầy Bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "This data analysis is very clear.",
          "sub": "Phần phân tích số liệu này rất rõ.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Thank you, sir!",
          "sub": "Dạ em cảm ơn thầy!",
          "face": "happy",
          "react": {
            "lan": "sad"
          }
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lan did it all week. Silent, she now sends Dũng only her assigned part.",
          "sub": "Phần đó Lan làm cả tuần. Lan không nói gì, nhưng từ đó chỉ gửi Dũng đúng phần được giao."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Rewind. Thank you, sir. Lan did this analysis.",
          "sub": "Tua lại. Dạ em cảm ơn thầy. Phần phân tích này Lan làm ạ.",
          "face": "happy",
          "pose": "pointL"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Praised for someone's part? Say their name.",
          "sub": "Được khen phần của ai, nhắc tên người ấy.",
          "keys": [
            "nhắc tên người ấy"
          ]
        }
      ],
      "ref": "p25,p26"
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
          }
        ],
        "items": [
          {
            "id": "h-f",
            "t": "text",
            "text": "Ai · làm gì · giúp được gì",
            "x": 3996,
            "y": 1540,
            "size": 56,
            "at": "l1:who",
            "color": "accent",
            "hl": [
              {
                "text": "giúp được gì",
                "at": "l1:how it helped"
              }
            ]
          },
          {
            "id": "h-e",
            "t": "text",
            "text": "“Cảm ơn Lan đã gọi lại từng bạn → đủ phiếu”",
            "x": 3996,
            "y": 1630,
            "size": 30,
            "at": "l1:helped",
            "font": "base"
          },
          {
            "id": "h-n",
            "t": "text",
            "text": "Khen việc làm · sớm · không “nhưng”",
            "x": 3996,
            "y": 1690,
            "size": 40,
            "at": "l2:action",
            "color": "muted"
          },
          {
            "id": "h-r",
            "t": "text",
            "text": "Báo cáo: nêu tên người làm",
            "x": 4836,
            "y": 1780,
            "size": 44,
            "at": "l3:name",
            "hl": [
              {
                "text": "nêu tên",
                "at": "l3:name"
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
          "say": "Anyone can give credit, in three parts: who, what they did, and how it helped.",
          "sub": "Ai cũng ghi nhận được, theo ba phần: ai, đã làm gì, giúp được gì.",
          "keys": [
            "ai, làm gì, giúp được gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Praise the action, soon, with no but. Some prefer private praise; ask once.",
          "sub": "Khen hành động, trong một hai ngày, đừng kèm “nhưng”. Có người không thích khen trước đông người, hãy hỏi một lần."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Reporting up? Name who did which part.",
          "sub": "Báo cáo lên thầy cô, quản lý? Nêu tên ai làm phần nào.",
          "keys": [
            "Nêu tên ai làm phần nào"
          ]
        }
      ],
      "ref": "p23,p24"
    },
    {
      "id": "s22",
      "module": "BRK-08",
      "data": {
        "title": "Bản đồ chuỗi: sáu bài",
        "points": [
          {
            "label": "Rõ vai",
            "sub": "buổi đầu",
            "illus": "label"
          },
          {
            "label": "Chia việc",
            "sub": "công bằng",
            "illus": "balance-scale"
          },
          {
            "label": "Tiến độ",
            "sub": "cả nhóm thấy",
            "illus": "clipboard"
          },
          {
            "label": "Bạn chậm",
            "sub": "nói thẳng",
            "illus": "mobile-phone"
          },
          {
            "label": "Góp ý",
            "sub": "không tự ái",
            "illus": "speech-balloon"
          },
          {
            "label": "Ghi nhận",
            "sub": "đúng người",
            "illus": "clapping-hands"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Roles, dividing, updates, a slow teammate,",
          "sub": "Rõ vai, chia việc, báo tiến độ, bạn chậm việc,"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "feedback, and credit. Six lessons.",
          "sub": "nhận góp ý, và ghi nhận. Sáu bài.",
          "keys": [
            "Sáu bài"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p27"
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
            "at": "l3",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Tối hôm ấy · 5 thói quen",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:five",
            "hl": [
              {
                "text": "5 thói quen",
                "at": "l1:five small habits"
              }
            ]
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1230,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "notebook",
                "crescent-moon"
              ]
            },
            "at": "l1:notebook",
            "caption": "Tối hôm ấy · phòng trọ",
            "icon": "notebook"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1280,
            "w": 44,
            "h": 44,
            "at": "l2:goal",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1264,
            "size": 56,
            "at": "l2:goal+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Một câu mục tiêu",
            "x": 6029,
            "y": 1270,
            "size": 46,
            "at": "l2:goal+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1370,
            "w": 44,
            "h": 44,
            "at": "l2:name",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1354,
            "size": 56,
            "at": "l2:name+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Một tên mỗi việc",
            "x": 6029,
            "y": 1360,
            "size": 46,
            "at": "l2:name+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1460,
            "w": 44,
            "h": 44,
            "at": "l3:Three",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1444,
            "size": 56,
            "at": "l3:Three+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Ba dòng cập nhật",
            "x": 6029,
            "y": 1450,
            "size": 46,
            "at": "l3:Three+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1550,
            "w": 44,
            "h": 44,
            "at": "l3:private",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1534,
            "size": 56,
            "at": "l3:private+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Một tin nhắn riêng",
            "x": 6029,
            "y": 1540,
            "size": 46,
            "at": "l3:private+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1640,
            "w": 44,
            "h": 44,
            "at": "l3:thank",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1624,
            "size": 56,
            "at": "l3:thank+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Một lời cảm ơn cụ thể",
            "x": 6029,
            "y": 1630,
            "size": 46,
            "at": "l3:thank+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "That night, Lan writes five small habits in her notebook.",
          "sub": "Tối hôm ấy, Lan ghi năm thói quen nhỏ vào sổ.",
          "keys": [
            "năm thói quen nhỏ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "One goal sentence. One name per task.",
          "sub": "Một câu mục tiêu. Một tên cho mỗi việc.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Three-line updates, a private message instead of hints, and one specific thank you.",
          "sub": "Ba dòng cập nhật, một tin nhắn riêng thay lời ám chỉ, và một lời cảm ơn cụ thể."
        }
      ],
      "ref": "outro"
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
            "text": "Kỳ sau · cùng phòng họp",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Next term"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1230,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "clipboard",
                "round-pushpin"
              ]
            },
            "at": "l1:meeting room",
            "caption": "Kỳ sau · buổi họp đầu",
            "icon": "clipboard"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "“Việc này ai nhận?”",
            "x": 7932,
            "y": 1260,
            "size": 58,
            "at": "l2:who takes",
            "color": "accent",
            "hl": [
              {
                "text": "ai nhận",
                "at": "l2:who takes"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Chốt gì: một dòng nhóm chính",
            "x": 7932,
            "y": 1360,
            "size": 44,
            "at": "l3:main chat",
            "hl": [
              {
                "text": "nhóm chính",
                "at": "l3:main chat"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Bốn bàn tay, một nhịp",
            "x": 7932,
            "y": 1490,
            "size": 56,
            "at": "l4:one song",
            "color": "accent",
            "hl": [
              {
                "text": "một nhịp",
                "at": "l4:one song"
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
          "say": "Next term. Same meeting room, same two faces.",
          "sub": "Kỳ sau. Vẫn phòng họp ấy, vẫn hai gương mặt ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Who takes this? One name per line. I'll pin the summary.",
          "sub": "Việc này ai nhận? Mỗi dòng một tên. Mình ghim tin tóm tắt nhé.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "And any change, I post one line in the main chat. Promise!",
          "sub": "Còn đổi gì thì mình đăng một dòng vào nhóm chính. Hứa!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One hand alone can't clap. This time, four hands, one song.",
          "sub": "“Một bàn tay không vỗ nên kêu.” Lần này, bốn bàn tay vỗ cùng một nhịp.",
          "keys": [
            "cùng một nhịp"
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
      "ref": "outro,p3,p13"
    },
    {
      "id": "s25",
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
            "at": "l1",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 5496,
            "y": 40,
            "at": "l1:name"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9432,
            "y": 40,
            "at": "l2:one place"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5496,
            "y": 1130,
            "at": "l3:name"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "h-3"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:name+400"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: clear roles from the first meeting, one name per task.",
          "sub": "Tóm lại: rõ vai từ buổi đầu, mỗi việc một tên.",
          "keys": [
            "mỗi việc một tên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Decided somewhere? Report to one place.",
          "sub": "Chốt ở đâu thì báo về một chỗ.",
          "keys": [
            "báo về một chỗ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Praised for someone's part? Say their name.",
          "sub": "Được khen phần của ai, nhắc tên người ấy.",
          "keys": [
            "nhắc tên người ấy"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Next lesson: clear goals and roles from the first meeting.",
          "sub": "Bài tiếp: phân vai rõ ràng ngay từ buổi đầu.",
          "keys": [
            "Bài tiếp"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s40",
      "module": "QUIZ-01",
      "ref": "questions[16]",
      "data": {
        "q": "Three members decide something in a small side chat, what must happen next?",
        "options": [
          "The person who decided posts one line in the main group chat that day",
          "The side chat becomes the main chat, and the others must join it later",
          "Nothing, because the others can ask if they want to know what changed"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "mobile-phone",
        "why": "Điều đã chốt ảnh hưởng đến người khác thì phải có một dòng ở nhóm chính ngay trong ngày."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Three members decide something in a small side chat, what must happen next?",
          "sub": "Ba thành viên chốt một việc trong nhóm chat phụ, sau đó cần làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The person who decided posts one line in the main group chat that day.",
          "sub": "Người chốt đăng một dòng vào nhóm chat chính ngay trong ngày."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Then nobody keeps working on the old plan.",
          "sub": "Nhờ vậy không ai làm theo kế hoạch cũ."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s41",
      "module": "END-05",
      "data": {
        "text": "Rõ vai, làm đủ, nói thẳng, ghi nhận",
        "sub": "Bốn mươi câu hỏi đang chờ bạn"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "At your next meeting, ask “Who takes this?” for every line. Then try the forty questions!",
          "sub": "Buổi họp tới, hỏi “việc này ai nhận?” cho từng dòng. Rồi thử bốn mươi câu nhé!"
        }
      ]
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s24"
  }
};
