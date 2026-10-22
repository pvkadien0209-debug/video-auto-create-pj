// Kịch bản video W lần 3 (#110) — "Những điều sinh viên cần chuẩn bị trước khi ra trường" · chuỗi "Năm hai, năm ba: chuẩn bị sớm cho nghề nghiệp"
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "what-students-should-prepare-before-graduating--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "students-preparing-early",
    "slug": "what-students-should-prepare-before-graduating",
    "door": "ky-nang",
    "level": "B1",
    "title": "Những điều sinh viên cần chuẩn bị trước khi ra trường",
    "series": "Năm hai, năm ba: chuẩn bị sớm cho nghề nghiệp"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo NĂM HAI → NĂM BA của Lan và bạn bè (T9 năm hai 23:00 phòng trọ → T9 CLB → T11 sổ thích/không thích → T12 hội chợ khoa → T3 kỹ năng mềm trong lớp → T2 năm ba mùa thực tập, “Khoan đã!” nộp đại → T4 hỏi chị Thảo → T5 điều kiện tốt nghiệp, hồ sơ, học tiếp → T8 năm ba 23:00 bố nhắn, khép vòng). Nhân vật (theo w145/_series/students-preparing-early.md): Lan (chính; Duyên p22), Dũng (Thiện p4, Khôi p12, bạn cùng phòng khoe thực tập p22), chị Thảo (anh chị khoá trên p15; chuyện chứng chỉ của Loan p19 do chị Thảo kể lại), Bác Bình (phụ huynh p24, qua tin nhắn). Con số neo “1 viên gạch mỗi học kỳ” lấy từ intro; câu tục ngữ “Kiến tha lâu cũng đầy tổ” mở/khép vòng. Ngắt nhịp: BRK-04 Trước/Sau dòng CV (p12), BRK-07 rehook (p22), BRK-08 dòng thời gian. Không có số liệu ngoài bài. Bản cũ (W lần 3, #110): w145/bak/what-students-should-prepare-before-graduating--w01.js.",
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
      "id": "b00",
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
            "text": "1 viên gạch",
            "x": 60,
            "y": 100,
            "size": 150,
            "at": "l1:one brick",
            "color": "accent",
            "hl": [
              {
                "text": "1 viên gạch",
                "at": "l1:brick"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "mỗi học kỳ",
            "x": 70,
            "y": 290,
            "size": 64,
            "at": "l1:semester"
          },
          {
            "id": "a-x",
            "t": "text",
            "text": "Ta tưởng: năm cuối xây một lèo?",
            "x": 70,
            "y": 390,
            "size": 48,
            "at": "l2:final year",
            "color": "muted"
          },
          {
            "id": "a-xx",
            "t": "strike",
            "over": "a-x",
            "at": "l2:night+300"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One brick per semester. That is all you need to build a career.",
          "sub": "Mỗi học kỳ một viên gạch. Chỉ cần vậy để xây dần một nghề.",
          "keys": [
            "một viên gạch"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet many students plan to build the whole house in final year. In one night.",
          "sub": "Vậy mà nhiều bạn định xây cả căn nhà vào năm cuối. Trong một đêm.",
          "keys": [
            "cả căn nhà"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "b01",
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
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "crescent-moon",
                "books"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Tháng 9 năm hai · 23:00 · phòng trọ",
            "icon": "crescent-moon"
          },
          {
            "id": "a-sr",
            "t": "text",
            "text": "CV · thực tập · đồ án · chứng chỉ",
            "x": 70,
            "y": 500,
            "size": 44,
            "at": "l3:CVs"
          },
          {
            "id": "a-at",
            "t": "text",
            "text": "→ cùng một lúc",
            "x": 100,
            "y": 570,
            "size": 50,
            "at": "l3:once",
            "color": "coral",
            "hl": [
              {
                "text": "cùng một lúc",
                "at": "l3:once"
              }
            ]
          },
          {
            "id": "a-ant",
            "t": "text",
            "text": "“Kiến tha lâu cũng đầy tổ”",
            "x": 70,
            "y": 670,
            "size": 52,
            "at": "l5:ant",
            "color": "accent",
            "hl": [
              {
                "text": "đầy tổ",
                "at": "l5:nest"
              }
            ]
          },
          {
            "id": "a-anti",
            "t": "illus",
            "name": "ant",
            "x": 760,
            "y": 660,
            "size": 80,
            "at": "l5:ant+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Lan.",
          "sub": "Đây là Lan."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Year two, accounting, part-time waitress. And a professional worrier.",
          "sub": "Năm hai ngành kế toán, làm thêm phục vụ quán cơm, kiêm chuyên gia lo xa.",
          "keys": [
            "chuyên gia lo xa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "The seniors are chasing CVs, internships, theses, certificates. All at once!",
          "sub": "Anh chị khoá trên chạy đôn chạy đáo: CV, thực tập, đồ án, chứng chỉ. Cùng một lúc!",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "I'm only in year two. Is it too early to worry?",
          "sub": "Mình mới năm hai. Lo bây giờ có sớm quá không?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents had an answer: slowly, the ant still fills its nest.",
          "sub": "Ông bà đã trả lời sẵn: “Kiến tha lâu cũng đầy tổ.”",
          "keys": [
            "Kiến tha lâu cũng đầy tổ"
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
      "ref": "p2"
    },
    {
      "id": "b02",
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
            "text": "Năm hai, năm ba: từ đâu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:start",
            "hl": [
              {
                "text": "từ đâu",
                "at": "l1:start"
              }
            ]
          },
          {
            "id": "b-e",
            "t": "text",
            "text": "Sớm quá?",
            "x": 2028,
            "y": 160,
            "size": 56,
            "at": "l2:early",
            "color": "muted"
          },
          {
            "id": "b-ex",
            "t": "strike",
            "over": "b-e",
            "at": "l2:No"
          },
          {
            "id": "b-e2",
            "t": "text",
            "text": "Không sớm · không vội",
            "x": 2298,
            "y": 160,
            "size": 56,
            "at": "l2:rush",
            "color": "accent",
            "hl": [
              {
                "text": "không vội",
                "at": "l2:rush"
              }
            ]
          },
          {
            "id": "b-t",
            "t": "text",
            "text": "Mọi thứ cần vài học kỳ",
            "x": 2028,
            "y": 250,
            "size": 46,
            "at": "l3:semesters"
          },
          {
            "id": "b-s",
            "t": "text",
            "text": "Anh chị: dồn cả vào năm cuối",
            "x": 2028,
            "y": 325,
            "size": 46,
            "at": "l3:everything",
            "color": "coral"
          },
          {
            "id": "b-y",
            "t": "text",
            "text": "Bạn: thời gian để thử, để sai",
            "x": 2028,
            "y": 410,
            "size": 52,
            "at": "l4:time",
            "color": "accent",
            "hl": [
              {
                "text": "để thử, để sai",
                "at": "l4:fail"
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
          "say": "So where do you start, in years two and three?",
          "sub": "Vậy năm hai, năm ba nên bắt đầu từ đâu?",
          "keys": [
            "bắt đầu từ đâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Too early? No. And no need to rush either.",
          "sub": "Sớm quá không? Không sớm. Mà cũng không cần vội.",
          "keys": [
            "không cần vội"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "An internship, a job that fits: each takes semesters. Seniors struggle because they start everything in final year.",
          "sub": "Thực tập, biết mình hợp nghề nào: đều cần vài học kỳ. Anh chị khoá trên vất vả vì năm cuối mới làm tất cả."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "You have what they have lost: time to try, and time to fail.",
          "sub": "Bạn có lợi thế họ không còn: thời gian để thử và để sai.",
          "keys": [
            "để thử và để sai"
          ]
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "b03",
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
            "id": "b-g0",
            "t": "text",
            "text": "Mỗi kỳ 1 viên gạch:",
            "x": 2968,
            "y": 160,
            "size": 50,
            "at": "l1:brick",
            "hl": [
              {
                "text": "1 viên gạch",
                "at": "l1:one brick"
              }
            ]
          },
          {
            "id": "b-g1",
            "t": "text",
            "text": "• hiểu mình hơn",
            "x": 2968,
            "y": 235,
            "size": 42,
            "at": "l2:yourself"
          },
          {
            "id": "b-g2",
            "t": "text",
            "text": "• một trải nghiệm thật",
            "x": 2968,
            "y": 295,
            "size": 42,
            "at": "l2:real"
          },
          {
            "id": "b-g3",
            "t": "text",
            "text": "• ghi lại kết quả",
            "x": 2968,
            "y": 355,
            "size": 42,
            "at": "l2:write"
          },
          {
            "id": "b-g4",
            "t": "text",
            "text": "• giữ vài mối quan hệ",
            "x": 2968,
            "y": 415,
            "size": 42,
            "at": "l2:contacts"
          },
          {
            "id": "b-6",
            "t": "text",
            "text": "Loạt bài: 6 bài đào sâu",
            "x": 2028,
            "y": 480,
            "size": 40,
            "at": "l3:six",
            "color": "muted"
          },
          {
            "id": "b-y2",
            "t": "text",
            "text": "Năm hai",
            "x": 2028,
            "y": 545,
            "size": 40,
            "at": "l4:Lan",
            "color": "muted"
          },
          {
            "id": "b-y3",
            "t": "text",
            "text": "Năm ba",
            "x": 2968,
            "y": 545,
            "size": 40,
            "at": "l4:Lan+400",
            "color": "muted"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 615,
            "w": 180,
            "h": 90,
            "at": "l4:Lan+200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2238,
            "y": 615,
            "w": 180,
            "h": 90,
            "at": "l4:Lan+350",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2448,
            "y": 615,
            "w": 180,
            "h": 90,
            "at": "l4:Lan+500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2658,
            "y": 615,
            "w": 180,
            "h": 90,
            "at": "l4:Lan+650",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 615,
            "w": 180,
            "h": 90,
            "at": "l4:Lan+800",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3178,
            "y": 615,
            "w": 180,
            "h": 90,
            "at": "l4:Lan+950",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3388,
            "y": 615,
            "w": 180,
            "h": 90,
            "at": "l4:Lan+1100",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d7",
            "t": "box",
            "x": 3598,
            "y": 615,
            "w": 180,
            "h": 90,
            "at": "l4:Lan+1250",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T9",
            "x": 2068,
            "y": 628,
            "size": 48,
            "at": "l4:Lan+300"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T11",
            "x": 2278,
            "y": 628,
            "size": 48,
            "at": "l4:Lan+450"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T12",
            "x": 2488,
            "y": 628,
            "size": 48,
            "at": "l4:Lan+600"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T3",
            "x": 2698,
            "y": 628,
            "size": 48,
            "at": "l4:Lan+750"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T2",
            "x": 3008,
            "y": 628,
            "size": 48,
            "at": "l4:Lan+900"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T4",
            "x": 3218,
            "y": 628,
            "size": 48,
            "at": "l4:Lan+1050"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "T5",
            "x": 3428,
            "y": 628,
            "size": 48,
            "at": "l4:Lan+1200"
          },
          {
            "id": "b-dt7",
            "t": "text",
            "text": "T8",
            "x": 3638,
            "y": 628,
            "size": 48,
            "at": "l4:Lan+1350"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Not everything at once. Each semester, just add one brick.",
          "sub": "Không làm tất cả cùng lúc. Mỗi học kỳ chỉ thêm một viên gạch.",
          "keys": [
            "một viên gạch"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Know yourself better, get one real experience, write down the result, keep a few contacts.",
          "sub": "Hiểu mình hơn, có một trải nghiệm thật, ghi lại kết quả, giữ vài mối quan hệ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Six deeper lessons follow, from career path to study or work.",
          "sub": "Sau bài này là sáu bài đào sâu, từ chọn nghề đến học tiếp hay đi làm.",
          "keys": [
            "sáu bài đào sâu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Today, the map: two years of Lan and friends, in eight stops.",
          "sub": "Hôm nay là tấm bản đồ: hai năm của Lan và bạn bè, tám chặng.",
          "keys": [
            "tám chặng"
          ]
        }
      ],
      "ref": "intro,p6"
    },
    {
      "id": "b04",
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
            "text": "① Tháng 9 · Câu lạc bộ",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:stop one"
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
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "clipboard",
                "busts-in-silhouette"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:club",
            "caption": "Ngày hội câu lạc bộ, năm hai",
            "icon": "clipboard"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "4 câu lạc bộ một lúc",
            "x": 3996,
            "y": 160,
            "size": 48,
            "at": "l3:four",
            "hl": [
              {
                "text": "4 câu lạc bộ",
                "at": "l3:four"
              }
            ]
          },
          {
            "id": "c-m",
            "t": "text",
            "text": "Giữa kỳ: tối nào cũng họp",
            "x": 3996,
            "y": 240,
            "size": 46,
            "at": "l4:meetings",
            "color": "coral"
          },
          {
            "id": "c-q",
            "t": "text",
            "text": "→ rút dần · 0 việc xong",
            "x": 3996,
            "y": 320,
            "size": 46,
            "at": "l5:quits",
            "color": "coral",
            "hl": [
              {
                "text": "0 việc xong",
                "at": "l5:finished"
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
          "say": "Stop one: September of year two. Club fair season.",
          "sub": "Chặng một: tháng Chín năm hai, mùa câu lạc bộ tuyển quân."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Dũng, Lan's classmate in mechanical engineering, a man who never says no.",
          "sub": "Còn đây là Dũng, bạn cùng khoá ngành cơ khí, người chưa từng biết nói “không”.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Everyone's joining! English, volunteering, events, start-ups. Four clubs, done!",
          "sub": "Bạn bè rủ cả! Tiếng Anh, tình nguyện, sự kiện, khởi nghiệp. Bốn nơi, chốt!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "By mid-term: meetings every night, homework piling up like dirty dishes.",
          "sub": "Giữa kỳ: tối nào cũng họp, bài tập chồng như bát chưa rửa.",
          "keys": [
            "tối nào cũng họp"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "He quits one by one. Year's end: nothing finished to talk about.",
          "sub": "Dũng xin rút dần. Cuối năm, chẳng kể được một việc nào đã làm xong.",
          "keys": [
            "chẳng kể được"
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
      "ref": "p3,p4"
    },
    {
      "id": "b05",
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
            "id": "c-my",
            "t": "text",
            "text": "Nhiều câu lạc bộ = CV đẹp",
            "x": 3996,
            "y": 420,
            "size": 46,
            "at": "l1:prettier",
            "color": "muted"
          },
          {
            "id": "c-myx",
            "t": "strike",
            "over": "c-my",
            "at": "l1:count"
          },
          {
            "id": "c-hr",
            "t": "text",
            "text": "Người tuyển hỏi: làm được gì?",
            "x": 3996,
            "y": 490,
            "size": 46,
            "at": "l1:did",
            "hl": [
              {
                "text": "làm được gì",
                "at": "l1:did"
              }
            ]
          },
          {
            "id": "c-ask",
            "t": "text",
            "text": "Việc này: gần hơn hướng nào?",
            "x": 3996,
            "y": 575,
            "size": 46,
            "at": "l2:closer",
            "hl": [
              {
                "text": "gần hơn hướng nào",
                "at": "l2:closer"
              }
            ]
          },
          {
            "id": "c-r",
            "t": "text",
            "text": "Chọn ít mà sâu",
            "x": 3996,
            "y": 660,
            "size": 72,
            "at": "l3:less",
            "color": "accent",
            "hl": [
              {
                "text": "ít mà sâu",
                "at": "l3:deeper"
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
          "say": "More clubs, prettier CV? Employers ask what you did. They never count club names.",
          "sub": "Càng nhiều câu lạc bộ, CV càng đẹp? Người tuyển hỏi bạn đã làm được gì, không đếm tên câu lạc bộ.",
          "keys": [
            "đã làm được gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Before copying friends, ask: does this bring me closer to a direction?",
          "sub": "Trước khi làm theo bạn bè, hỏi: việc này giúp mình gần hơn với hướng nào?",
          "keys": [
            "gần hơn với hướng nào"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One or two places, one clear job, done to the end. Choose less, go deeper.",
          "sub": "Một, hai nơi, một việc rõ ràng, làm đến cùng. Chọn ít mà sâu.",
          "keys": [
            "Chọn ít mà sâu"
          ]
        }
      ],
      "ref": "p3,p4,p5"
    },
    {
      "id": "b06",
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
            "text": "② Tháng 11 · Sổ thích, không thích",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:stop two"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "receipt",
                "notebook"
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
            "at": "l1:November",
            "caption": "Ca tối ở quán cơm",
            "icon": "notebook"
          },
          {
            "id": "d-no",
            "t": "text",
            "text": "Chọn đúng nghề cho cả đời",
            "x": 5964,
            "y": 160,
            "size": 46,
            "at": "l2:life",
            "color": "muted"
          },
          {
            "id": "d-nox",
            "t": "strike",
            "over": "d-no",
            "at": "l2:little"
          },
          {
            "id": "d-yes",
            "t": "text",
            "text": "Hiểu mình hơn một chút",
            "x": 5964,
            "y": 240,
            "size": 56,
            "at": "l2:little",
            "color": "accent",
            "hl": [
              {
                "text": "một chút",
                "at": "l2:little"
              }
            ]
          },
          {
            "id": "d-h",
            "t": "text",
            "text": "😀 hào hứng: kiểm hoá đơn",
            "x": 5964,
            "y": 340,
            "size": 44,
            "at": "l3:loved"
          },
          {
            "id": "d-m",
            "t": "text",
            "text": "😩 mệt: bưng khay",
            "x": 5964,
            "y": 410,
            "size": 44,
            "at": "l3:Exhausting",
            "color": "coral"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "môn học · bài tập · việc làm thêm",
            "x": 5964,
            "y": 490,
            "size": 38,
            "at": "l4:subjects",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two: November. Lan still has no idea which job suits her. Totally normal.",
          "sub": "Chặng hai: tháng Mười Một. Lan vẫn chưa biết mình hợp nghề gì. Hoàn toàn bình thường."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Don't wait to choose right for life. Just know yourself a little better.",
          "sub": "Đừng chờ chọn đúng cho cả đời. Chỉ cần hiểu mình hơn một chút.",
          "keys": [
            "hiểu mình hơn một chút"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Tonight I loved checking the bills. Carrying trays? Exhausting.",
          "sub": "Tối nay mình mê kiểm hoá đơn. Bưng khay thì… mệt rã.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Keep a notebook: which subjects, homework and part-time tasks excite you, and which tire you.",
          "sub": "Giữ một cuốn sổ: môn học, bài tập, việc làm thêm nào khiến bạn hào hứng, việc nào khiến bạn mệt.",
          "keys": [
            "hào hứng"
          ]
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "b08",
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
            "text": "③ Tháng 12 · Hội chợ khoa",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:stop three"
          },
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
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "circus-tent",
                "microphone"
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
            "at": "l1:fair",
            "caption": "Hội chợ của khoa",
            "icon": "circus-tent"
          },
          {
            "id": "e-j",
            "t": "text",
            "text": "Hậu cần: bàn ghế, âm thanh",
            "x": 7932,
            "y": 160,
            "size": 40,
            "at": "l1:tables"
          },
          {
            "id": "e-n",
            "t": "text",
            "text": "“Ghi lại á? Nhớ mà!”",
            "x": 7932,
            "y": 240,
            "size": 50,
            "at": "l2:remember",
            "color": "coral"
          },
          {
            "id": "e-2y",
            "t": "text",
            "text": "2 năm sau: quên sạch",
            "x": 7932,
            "y": 330,
            "size": 50,
            "at": "l3:photos",
            "color": "muted",
            "hl": [
              {
                "text": "quên sạch",
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
          "say": "Stop three: December, the faculty fair. Dũng runs logistics: tables, sound, a duty roster.",
          "sub": "Chặng ba: tháng Mười Hai, hội chợ của khoa. Dũng phụ trách hậu cần: bàn ghế, âm thanh, lịch trực.",
          "keys": [
            "hậu cần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Done! Great fair. Write it down? Nah, I'll remember!",
          "sub": "Xong! Hội chợ ngon lành. Ghi lại á? Thôi, nhớ mà!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two years later, CV time. No photos, no idea of scale, not even the teacher's name.",
          "sub": "Hai năm sau, đến lúc viết CV: không còn ảnh, không nhớ quy mô, quên cả tên thầy phụ trách.",
          "keys": [
            "quên cả tên thầy"
          ]
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "b09",
      "module": "BRK-04",
      "data": {
        "title": "Dòng CV của Dũng",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "“Có tham gia tổ chức hội chợ của khoa.”",
        "right": "“Phụ trách hậu cần hội chợ; có thầy xác nhận.”",
        "wrongIllus": "fog",
        "rightIllus": "clipboard"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: helped organise the faculty fair.",
          "sub": "Trước: “Có tham gia tổ chức hội chợ của khoa.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: ran the logistics, with a teacher to confirm it.",
          "sub": "Sau: “Phụ trách hậu cần hội chợ, có thầy phụ trách xác nhận.”"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p12"
    },
    {
      "id": "b10",
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
            "id": "e-wk",
            "t": "text",
            "text": "Chỉ viết được nếu ghi ngay",
            "x": 7932,
            "y": 420,
            "size": 46,
            "at": "l1:week",
            "hl": [
              {
                "text": "ghi ngay",
                "at": "l1:week"
              }
            ]
          },
          {
            "id": "e-nk",
            "t": "text",
            "text": "Nhật ký trải nghiệm: 3 dòng",
            "x": 7932,
            "y": 495,
            "size": 50,
            "at": "l2:diary",
            "color": "accent",
            "hl": [
              {
                "text": "3 dòng",
                "at": "l2:three lines"
              }
            ]
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "làm gì · cho ai · kết quả",
            "x": 7932,
            "y": 570,
            "size": 44,
            "at": "l3:whom"
          },
          {
            "id": "e-r",
            "t": "text",
            "text": "Làm xong việc gì, ghi lại ngay",
            "x": 7932,
            "y": 670,
            "size": 56,
            "at": "l4:right away",
            "color": "accent",
            "hl": [
              {
                "text": "ghi lại ngay",
                "at": "l4:right away"
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
          "say": "That line needs notes written the week of the fair.",
          "sub": "Dòng sau chỉ viết được nếu ngay tuần hội chợ kết thúc, Dũng ghi vài dòng.",
          "keys": [
            "ngay tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So keep an experience diary. After each project, event or shift: three lines.",
          "sub": "Vậy hãy mở tệp “nhật ký trải nghiệm”. Xong mỗi dự án, sự kiện, ca làm: ghi ba dòng.",
          "keys": [
            "nhật ký trải nghiệm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "What I did, for whom, and the result. Raw material for your final-year CV.",
          "sub": "Mình làm gì, cho ai, kết quả ra sao. Nguyên liệu cho bản CV năm cuối.",
          "keys": [
            "Nguyên liệu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Finish a task, write it down right away.",
          "sub": "Làm xong việc gì, ghi lại ngay việc đó.",
          "keys": [
            "ghi lại ngay"
          ]
        }
      ],
      "ref": "p11,p12,p13"
    },
    {
      "id": "b11",
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
            "at": "l3",
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
            "id": "f-t",
            "t": "text",
            "text": "④ Tháng 3 · Kỹ năng mềm",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:stop four"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "busts-in-silhouette"
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
            "at": "l2:Lan",
            "caption": "Bài tập nhóm môn đại cương",
            "icon": "busts-in-silhouette"
          },
          {
            "id": "f-w",
            "t": "text",
            "text": "Luyện ở đâu? Ngay trong lớp",
            "x": 60,
            "y": 1250,
            "size": 50,
            "at": "l1:class",
            "hl": [
              {
                "text": "Ngay trong lớp",
                "at": "l1:class"
              }
            ]
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "• Điều phối một bài nhóm",
            "x": 60,
            "y": 1350,
            "size": 46,
            "at": "l4:coordinate",
            "color": "accent"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "• Thuyết trình một lần",
            "x": 60,
            "y": 1420,
            "size": 46,
            "at": "l4:Present"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "• Email cho thầy cô cho đúng",
            "x": 60,
            "y": 1490,
            "size": 46,
            "at": "l4:email"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four: March. Soft skills. Where do you train them? Right in class.",
          "sub": "Chặng bốn: tháng Ba. Kỹ năng mềm luyện ở đâu? Ngay trong lớp.",
          "keys": [
            "Ngay trong lớp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Shy Lan volunteers to coordinate a group assignment.",
          "sub": "Lan, cô gái ngại hỏi, xung phong điều phối bài nhóm.",
          "keys": [
            "điều phối"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Okay team, who takes which part? Deadline Thursday. I'll check progress on Tuesday.",
          "sub": "Cả nhóm ơi, ai nhận phần nào? Hạn thứ Năm. Thứ Ba mình hỏi tiến độ nhé.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Coordinate a group task. Present once. Write a proper email to a teacher.",
          "sub": "Điều phối một bài nhóm. Thuyết trình một lần. Viết email cho thầy cô cho đúng cách."
        }
      ],
      "ref": "p9"
    },
    {
      "id": "b12",
      "module": "BRK-07",
      "data": {
        "question": "Bạn bè khoe được nhận thực tập, mình chưa có. Nộp đại?",
        "illus": "anxious-face-with-sweat"
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
          "say": "Friends keep getting internships, and you have none. Apply anywhere?",
          "sub": "Bạn bè lần lượt khoe được nhận thực tập, mình chưa có. Nộp đại một chỗ?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p22"
    },
    {
      "id": "b13",
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
            "at": "l3:end",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Tháng 2 năm ba · Thực tập",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:stop five"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "phone",
                  "face": "happy"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "face": "worried"
                }
              ],
              "props": [
                "mobile-phone"
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
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l3:end",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:summer",
            "caption": "Tối thứ Bảy · phòng trọ",
            "icon": "mobile-phone"
          },
          {
            "id": "g-y3",
            "t": "text",
            "text": "Năm ba: kỳ thực tập đầu tiên",
            "x": 2028,
            "y": 1250,
            "size": 46,
            "at": "l1:year three",
            "hl": [
              {
                "text": "kỳ thực tập đầu tiên",
                "at": "l1:first"
              }
            ]
          },
          {
            "id": "g-pt",
            "t": "text",
            "text": "hè hoặc bán thời gian",
            "x": 2068,
            "y": 1325,
            "size": 42,
            "at": "l1:part-time",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five: February, year three. Time for a first internship, summer or part-time.",
          "sub": "Chặng năm: tháng Hai năm ba, lúc tìm kỳ thực tập đầu tiên: hè hoặc bán thời gian.",
          "keys": [
            "kỳ thực tập đầu tiên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Got it! A summer internship at a big company!",
          "sub": "Được nhận rồi! Thực tập hè ở công ty lớn!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Everyone has one but me. I'll just apply anywhere. Tonight!",
          "sub": "Ai cũng có, trừ mình. Nộp đại một chỗ. Ngay tối nay!",
          "face": "worried"
        }
      ],
      "ref": "p10,p22"
    },
    {
      "id": "b14",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Nộp đại một chỗ",
        "actors": [
          {
            "id": "lan",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Nộp đại “cho bằng bạn”",
          "why": "Ba tháng chủ yếu nhập liệu, không học thêm được gì, lại lỡ dự án nghiên cứu cùng thầy mà mình thật sự thích.",
          "rule": "Hỏi mình muốn gì, trước khi hỏi bạn đang làm gì"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "Data entry, not my major. Whatever, at least I'll have one!",
          "sub": "Nhập liệu, trái ngành. Kệ, có cho bằng bạn là được!",
          "face": "worried",
          "pose": "phone",
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
          "say": "Three months of typing, nothing learned. And she misses a research project she loved.",
          "sub": "Ba tháng nhập liệu, chẳng học thêm gì. Lại lỡ dự án nghiên cứu cùng thầy mà cô rất thích.",
          "keys": [
            "chẳng học thêm gì"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Quay lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "Wait. What do I want to learn from this internship?",
          "sub": "Khoan. Mình muốn học được gì từ kỳ thực tập này?",
          "phase": "redo",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Ask what you want, before asking what friends are doing.",
          "sub": "Hỏi mình muốn gì, trước khi hỏi bạn đang làm gì.",
          "phase": "redo",
          "keys": [
            "Hỏi mình muốn gì"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p22,p23"
    },
    {
      "id": "b15",
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
            "id": "g-oai",
            "t": "text",
            "text": "Cái tên nghe oai",
            "x": 2028,
            "y": 1410,
            "size": 50,
            "at": "l1:impressive",
            "color": "muted"
          },
          {
            "id": "g-oaix",
            "t": "strike",
            "over": "g-oai",
            "at": "l1:impressive+400"
          },
          {
            "id": "g-ok",
            "t": "text",
            "text": "Việc thật + người hướng dẫn",
            "x": 2028,
            "y": 1490,
            "size": 54,
            "at": "l1:real work",
            "color": "accent",
            "hl": [
              {
                "text": "người hướng dẫn",
                "at": "l1:mentor"
              }
            ]
          },
          {
            "id": "g-p",
            "t": "text",
            "text": "Mỗi người một nhịp",
            "x": 2028,
            "y": 1610,
            "size": 52,
            "at": "l2:pace",
            "hl": [
              {
                "text": "một nhịp",
                "at": "l2:pace"
              }
            ]
          },
          {
            "id": "g-me",
            "t": "text",
            "text": "So với mình kỳ trước",
            "x": 2028,
            "y": 1690,
            "size": 52,
            "at": "l3:yourself",
            "color": "accent",
            "hl": [
              {
                "text": "mình kỳ trước",
                "at": "l3:last semester"
              }
            ]
          },
          {
            "id": "g-ph",
            "t": "text",
            "text": "không với ảnh bạn đăng",
            "x": 2068,
            "y": 1770,
            "size": 42,
            "at": "l3:photos",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Choose a place with real work and a mentor, not just a name that sounds impressive.",
          "sub": "Chọn nơi cho làm việc thật, có người hướng dẫn, thay vì một cái tên nghe oai.",
          "keys": [
            "người hướng dẫn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A friend interning at a big company doesn't mean you're late. Everyone has their own pace.",
          "sub": "Bạn cùng lớp thực tập công ty lớn không có nghĩa là bạn đã chậm. Mỗi người một nhịp.",
          "keys": [
            "Mỗi người một nhịp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Compare yourself with last semester, not with your friends' photos.",
          "sub": "So với chính mình học kỳ trước, đừng so với ảnh bạn bè đăng.",
          "keys": [
            "chính mình học kỳ trước"
          ]
        }
      ],
      "ref": "p10,p21,p23"
    },
    {
      "id": "b16",
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
            "at": "l8",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Tháng 4 · Hỏi chị khoá trên",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:stop six"
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
                  "id": "lan",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l6:waiting",
                  "shot": "E-SHOT-07",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l8",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l2:Thảo",
            "caption": "Quán nước gần trường",
            "icon": "hot-beverage"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Quan hệ: từ người đã quen",
            "x": 3996,
            "y": 1250,
            "size": 46,
            "at": "l1:know",
            "hl": [
              {
                "text": "người đã quen",
                "at": "l1:know"
              }
            ]
          },
          {
            "id": "h-q",
            "t": "text",
            "text": "“Nếu được học lại năm ba…?”",
            "x": 3996,
            "y": 1330,
            "size": 50,
            "at": "l3:redo",
            "color": "accent"
          },
          {
            "id": "h-e",
            "t": "text",
            "text": "câu nhỏ · lời khuyên thật",
            "x": 3996,
            "y": 1410,
            "size": 44,
            "at": "l4:honest",
            "hl": [
              {
                "text": "lời khuyên thật",
                "at": "l4:honest"
              }
            ]
          },
          {
            "id": "h-c",
            "t": "text",
            "text": "Chứng chỉ? “Năm cuối thi”",
            "x": 3996,
            "y": 1500,
            "size": 44,
            "at": "l5:final year",
            "color": "muted"
          },
          {
            "id": "h-cx",
            "t": "strike",
            "over": "h-c",
            "at": "l6:full"
          },
          {
            "id": "h-f",
            "t": "text",
            "text": "→ đợt thi kín chỗ",
            "x": 4036,
            "y": 1570,
            "size": 44,
            "at": "l6:full",
            "color": "coral"
          },
          {
            "id": "h-l",
            "t": "text",
            "text": "→ lùi đợt xét tốt nghiệp",
            "x": 4036,
            "y": 1640,
            "size": 44,
            "at": "l6:next",
            "color": "coral",
            "hl": [
              {
                "text": "lùi đợt",
                "at": "l6:wait"
              }
            ]
          },
          {
            "id": "h-r",
            "t": "text",
            "text": "Hạn của trường không chờ ai",
            "x": 3996,
            "y": 1750,
            "size": 60,
            "at": "l8:deadlines",
            "color": "accent",
            "hl": [
              {
                "text": "không chờ ai",
                "at": "l8:no one"
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
          "say": "Stop six: April. Contacts start with people you know.",
          "sub": "Chặng sáu: tháng Tư. Lúc giữ liên lạc, bắt đầu từ người đã quen: thầy cô, anh chị khoá trên.",
          "keys": [
            "người đã quen"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Thảo, Lan's senior, now in an office job. Organised like a spreadsheet.",
          "sub": "Còn đây là chị Thảo, chị khoá trên, giờ đi làm văn phòng. Ngăn nắp như một bảng tính.",
          "keys": [
            "chị Thảo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Excuse me, if you could redo year three, what would you do differently?",
          "sub": "Dạ, cho em hỏi, nếu được học lại năm ba, chị sẽ làm gì khác ạ?",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Small question, very honest answers.",
          "sub": "Câu hỏi nhỏ, lời khuyên rất thật.",
          "keys": [
            "rất thật"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "First: the language certificate. I thought I'd take it in final year.",
          "sub": "Thứ nhất: chứng chỉ ngoại ngữ. Hồi đó chị nghĩ năm cuối thi cũng được.",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Last semester, the tests were full. A job was waiting, and I had to wait for the next graduation round.",
          "sub": "Học kỳ cuối, các đợt thi đã kín chỗ. Có nơi hẹn nhận đi làm, chị vẫn phải lùi sang đợt xét tốt nghiệp sau.",
          "face": "sad"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "School deadlines wait for no one.",
          "sub": "Hạn của trường không chờ ai.",
          "keys": [
            "không chờ ai"
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
      "ref": "p14,p15,p19,p20"
    },
    {
      "id": "b17",
      "module": "BRK-08",
      "data": {
        "title": "Hai năm của Lan và bạn bè",
        "current": 5,
        "points": [
          {
            "label": "T9 năm hai",
            "sub": "Chọn ít mà sâu",
            "illus": "bullseye"
          },
          {
            "label": "T11",
            "sub": "Sổ thích, không thích",
            "illus": "notebook"
          },
          {
            "label": "T12",
            "sub": "Nhật ký trải nghiệm",
            "illus": "memo"
          },
          {
            "label": "T2 năm ba",
            "sub": "Mùa thực tập",
            "illus": "briefcase"
          },
          {
            "label": "T4",
            "sub": "Hỏi người đã quen",
            "illus": "handshake"
          },
          {
            "label": "T5",
            "sub": "Hạn của trường",
            "illus": "spiral-calendar"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Clubs, a notebook, a diary, internships, contacts.",
          "sub": "Câu lạc bộ, sổ ghi, nhật ký, thực tập, quan hệ."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Next: the school's own deadlines.",
          "sub": "Tiếp theo: những hạn của chính trường mình."
        }
      ],
      "ref": "p26"
    },
    {
      "id": "b18",
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
            "text": "⑦ Tháng 5 · Điều kiện tốt nghiệp",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:stop seven"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
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
                "laptop",
                "spiral-calendar"
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
            "at": "l1:same night",
            "caption": "Ngay tối hôm ấy",
            "icon": "spiral-calendar"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "• số tín chỉ · môn bắt buộc",
            "x": 5964,
            "y": 1250,
            "size": 44,
            "at": "l2:credits"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "• chứng chỉ ngoại ngữ, tin học?",
            "x": 5964,
            "y": 1320,
            "size": 44,
            "at": "l2:language",
            "hl": [
              {
                "text": "ngoại ngữ, tin học",
                "at": "l2:computer"
              }
            ]
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "tuỳ trường → hỏi phòng đào tạo",
            "x": 5964,
            "y": 1390,
            "size": 40,
            "at": "l2:office",
            "color": "muted"
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "Hạn chót → lịch điện thoại",
            "x": 5964,
            "y": 1470,
            "size": 48,
            "at": "l3:calendar",
            "color": "accent",
            "hl": [
              {
                "text": "lịch điện thoại",
                "at": "l3:calendar"
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
          "say": "Stop seven: May. That same night, Lan opens her school's graduation rules.",
          "sub": "Chặng bảy: tháng Năm. Ngay tối hôm ấy, Lan mở điều kiện tốt nghiệp của trường."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Credits, required subjects, language or computer certificates. It varies, so ask the academic office.",
          "sub": "Số tín chỉ, môn bắt buộc, chứng chỉ ngoại ngữ hay tin học. Tuỳ trường, hỏi phòng đào tạo cho chắc.",
          "keys": [
            "hỏi phòng đào tạo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Every deadline goes into my phone calendar. Tonight!",
          "sub": "Mọi hạn chót vào lịch điện thoại. Ngay tối nay!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Miss one, and you may wait for the next graduation round.",
          "sub": "Lỡ một hạn, có thể phải chờ đợt xét tốt nghiệp sau.",
          "keys": [
            "chờ đợt xét tốt nghiệp sau"
          ]
        }
      ],
      "ref": "p18"
    },
    {
      "id": "b19",
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
            "id": "i-p",
            "t": "text",
            "text": "Hồ sơ trực tuyến:",
            "x": 5964,
            "y": 1560,
            "size": 46,
            "at": "l1:profile",
            "hl": [
              {
                "text": "Hồ sơ",
                "at": "l1:profile"
              }
            ]
          },
          {
            "id": "i-p1",
            "t": "text",
            "text": "đúng tên · tiêu đề · khớp nhật ký",
            "x": 5964,
            "y": 1625,
            "size": 38,
            "at": "l1:headline"
          },
          {
            "id": "i-p2",
            "t": "text",
            "text": "1 tối dựng khung, mỗi kỳ thêm",
            "x": 5964,
            "y": 1685,
            "size": 38,
            "at": "l2:evening",
            "color": "muted"
          },
          {
            "id": "i-s",
            "t": "text",
            "text": "Học tiếp? Nghĩ từ năm ba",
            "x": 5964,
            "y": 1760,
            "size": 46,
            "at": "l3:further",
            "hl": [
              {
                "text": "từ năm ba",
                "at": "l3:year three"
              }
            ]
          },
          {
            "id": "i-s2",
            "t": "text",
            "text": "“Chưa biết làm gì” → cân nhắc",
            "x": 6784,
            "y": 1790,
            "size": 40,
            "at": "l4:only reason",
            "color": "coral",
            "hl": [
              {
                "text": "cân nhắc",
                "at": "l4:twice"
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
          "say": "Same evening, an online profile: real name, clear headline, entries matching her diary.",
          "sub": "Cũng tối ấy, dựng hồ sơ trực tuyến: đúng tên như CV, tiêu đề rõ, việc khớp nhật ký.",
          "keys": [
            "hồ sơ trực tuyến"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One evening for the frame, then a little each semester.",
          "sub": "Một buổi tối dựng khung, mỗi học kỳ thêm một chút."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Further study? Think from year three. Many scholarships have early deadlines.",
          "sub": "Học tiếp lên cao? Nghĩ từ năm ba, vì nhiều học bổng có hạn nộp khá sớm.",
          "keys": [
            "từ năm ba"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But if your only reason is not knowing what to do, think twice.",
          "sub": "Nhưng nếu lý do duy nhất là “chưa biết làm gì”, hãy cân nhắc kỹ.",
          "keys": [
            "cân nhắc kỹ"
          ]
        }
      ],
      "ref": "p16,p17"
    },
    {
      "id": "b20",
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
            "at": "l3",
            "fit": [
              "j-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "⑧ Tháng 8 năm ba · 23:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:August"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "label": "Bố nhắn lúc 23:00",
              "actor": {
                "id": "lan",
                "side": "left"
              },
              "contact": {
                "name": "Bố (bác Bình)",
                "illus": "old-man"
              },
              "messages": [
                {
                  "from": "them",
                  "text": "Học kỳ này con muốn thử điều gì?",
                  "at": "l3"
                },
                {
                  "from": "me",
                  "text": "Con muốn làm dự án nghiên cứu cùng thầy ạ. Con hỏi thầy rồi.",
                  "at": "l4"
                }
              ]
            },
            "at": "l1:same room",
            "caption": "Vẫn phòng trọ ấy · bố nhắn",
            "icon": "telephone-receiver"
          },
          {
            "id": "j-old",
            "t": "text",
            "text": "“Ra trường con làm gì?”",
            "x": 7932,
            "y": 1250,
            "size": 46,
            "at": "l2:graduating",
            "color": "muted"
          },
          {
            "id": "j-oldx",
            "t": "strike",
            "over": "j-old",
            "at": "l3:Instead"
          },
          {
            "id": "j-new",
            "t": "text",
            "text": "“Học kỳ này con muốn thử gì?”",
            "x": 7932,
            "y": 1330,
            "size": 50,
            "at": "l3:try",
            "color": "accent",
            "hl": [
              {
                "text": "muốn thử gì",
                "at": "l3:try"
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
          "say": "Final stop: August of year three, eleven p.m. Same room. Her dad, Bác Bình, texts.",
          "sub": "Chặng cuối: tháng Tám năm ba, mười một giờ đêm. Vẫn phòng ấy. Bố Lan, bác Bình, nhắn tin.",
          "keys": [
            "bác Bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Dear parents, skip: what will you do after graduating?",
          "sub": "Thưa phụ huynh, bỏ qua câu cũ: “Ra trường con làm gì?”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Instead: what would you like to try this semester?",
          "sub": "Thay vào đó: “Học kỳ này con muốn thử điều gì?”",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "A research project with my teacher, Dad. I already asked him.",
          "sub": "Con muốn làm dự án nghiên cứu cùng thầy, bố ạ. Con hỏi thầy rồi.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A lighter question helps children speak honestly.",
          "sub": "Câu hỏi nhẹ hơn giúp con nói thật, nhất là khi thấy bạn đi nhanh hơn.",
          "keys": [
            "nói thật"
          ]
        }
      ],
      "ref": "p24"
    },
    {
      "id": "b21",
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
            "id": "j-h",
            "t": "text",
            "text": "Cuối kỳ, nửa tiếng, ba dòng",
            "x": 7932,
            "y": 1420,
            "size": 46,
            "at": "l1:half",
            "hl": [
              {
                "text": "nửa tiếng",
                "at": "l1:half an hour"
              }
            ]
          },
          {
            "id": "j-k-c0",
            "t": "box",
            "x": 7932,
            "y": 1490,
            "w": 46,
            "h": 46,
            "at": "l2:direction",
            "stroke": 5
          },
          {
            "id": "j-k-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1472,
            "size": 58,
            "at": "l2:direction+600",
            "color": "accent"
          },
          {
            "id": "j-k-l0",
            "t": "text",
            "text": "Hướng nghề · Kỹ năng",
            "x": 8002,
            "y": 1482,
            "size": 40,
            "at": "l2:direction+200"
          },
          {
            "id": "j-k-c1",
            "t": "box",
            "x": 7932,
            "y": 1554,
            "w": 46,
            "h": 46,
            "at": "l2:internship",
            "stroke": 5
          },
          {
            "id": "j-k-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1536,
            "size": 58,
            "at": "l2:internship+600",
            "color": "accent"
          },
          {
            "id": "j-k-l1",
            "t": "text",
            "text": "Thực tập + nhật ký",
            "x": 8002,
            "y": 1546,
            "size": 40,
            "at": "l2:internship+200"
          },
          {
            "id": "j-k-c2",
            "t": "box",
            "x": 7932,
            "y": 1618,
            "w": 46,
            "h": 46,
            "at": "l2:contacts",
            "stroke": 5
          },
          {
            "id": "j-k-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1600,
            "size": 58,
            "at": "l2:contacts+600",
            "color": "accent"
          },
          {
            "id": "j-k-l2",
            "t": "text",
            "text": "Quan hệ · Hồ sơ",
            "x": 8002,
            "y": 1610,
            "size": 40,
            "at": "l2:contacts+200"
          },
          {
            "id": "j-k-c3",
            "t": "box",
            "x": 7932,
            "y": 1682,
            "w": 46,
            "h": 46,
            "at": "l2:graduation",
            "stroke": 5
          },
          {
            "id": "j-k-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1664,
            "size": 58,
            "at": "l2:graduation+600",
            "color": "accent"
          },
          {
            "id": "j-k-l3",
            "t": "text",
            "text": "Tốt nghiệp · học tiếp?",
            "x": 8002,
            "y": 1674,
            "size": 40,
            "at": "l2:graduation+200"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Kiến tha lâu… đầy tổ”",
            "x": 7932,
            "y": 1755,
            "size": 50,
            "at": "l4:ant",
            "color": "accent",
            "hl": [
              {
                "text": "đầy tổ",
                "at": "l4:nest"
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
          "say": "Her end-of-semester habit: half an hour. What did I add? What next?",
          "sub": "Thói quen cuối kỳ của Lan: nửa tiếng, ba dòng. Kỳ này thêm được gì? Kỳ sau thêm gì?",
          "keys": [
            "nửa tiếng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Her list: direction, skills, internship, contacts, profile, graduation.",
          "sub": "Danh sách của Lan: hướng nghề, kỹ năng, thực tập, quan hệ, hồ sơ, tốt nghiệp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Not every box is ticked. But one or two each semester. I'm on track.",
          "sub": "Chưa đánh dấu hết. Nhưng mỗi kỳ một, hai ô. Mình đang đi đúng hướng.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Slowly, the ant still fills its nest. Lan's diary is full of lines now.",
          "sub": "Kiến tha lâu cũng đầy tổ. Nhật ký trải nghiệm của Lan giờ đã kín dòng.",
          "keys": [
            "Kiến tha lâu cũng đầy tổ"
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
      "ref": "p8,p25,p26,p27"
    },
    {
      "id": "b22",
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
            "at": "l1:deeper",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:down",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:want",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l4:deadlines",
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
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4536,
            "y": 670,
            "at": "l1:deeper"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8692,
            "y": 690,
            "at": "l2:down"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2728,
            "y": 1690,
            "at": "l3:want"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 4786,
            "y": 1760,
            "at": "l4:deadlines"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Điều kiện tốt nghiệp mỗi trường một khác; hỏi phòng đào tạo của trường bạn.",
            "x": 7932,
            "y": 1832,
            "size": 24,
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
          "say": "So, your map. Choose less, go deeper.",
          "sub": "Tóm lại, tấm bản đồ của bạn. Chọn ít mà sâu.",
          "keys": [
            "Chọn ít mà sâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Finish something, write it down.",
          "sub": "Làm xong việc gì, ghi lại ngay.",
          "keys": [
            "ghi lại ngay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ask what you want before asking what friends do.",
          "sub": "Hỏi mình muốn gì, trước khi hỏi bạn làm gì.",
          "keys": [
            "Hỏi mình muốn gì"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And watch your school's deadlines.",
          "sub": "Và để ý hạn của trường.",
          "keys": [
            "hạn của trường"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Final year has its own series. What you gather now is raw material.",
          "sub": "Năm cuối có loạt bài riêng: CV, phỏng vấn. Những gì gom bây giờ là nguyên liệu.",
          "keys": [
            "nguyên liệu"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p28"
    },
    {
      "id": "s31",
      "module": "QUIZ-01",
      "ref": "questions[35]",
      "data": {
        "q": "A student took an unrelated internship only to keep up with roommates, what was the cost?",
        "options": [
          "She learned little from data entry and missed a research project she truly liked",
          "She gained the best experience possible, because any internship is equally useful",
          "There was no cost, since she was paid more than everyone in her class"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "keyboard",
        "why": "Ba tháng chủ yếu nhập liệu, không học thêm được gì, lại lỡ dự án nghiên cứu cô thật sự thích."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A student took an unrelated internship only to keep up with roommates, what was the cost?",
          "sub": "Một bạn nhận thực tập trái ngành chỉ để bằng bạn cùng phòng, cái giá là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "She learned little from data entry and missed a research project she truly liked.",
          "sub": "Chủ yếu nhập liệu, học được ít, lại lỡ dự án nghiên cứu cô thật sự thích."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "She skipped one question: what do I want to learn?",
          "sub": "Cô đã bỏ qua một câu hỏi: mình muốn học được gì?"
        }
      ]
    },
    {
      "id": "s32",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi cho học kỳ này",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, start an experience diary and write the first line. Then try the forty questions below.",
          "sub": "Hôm nay mở tệp nhật ký trải nghiệm, viết dòng đầu tiên, rồi làm bốn mươi câu bên dưới nhé.",
          "face": "happy"
        }
      ]
    }
  ],
  "loop": {
    "open": "b01",
    "close": "b20"
  }
};
