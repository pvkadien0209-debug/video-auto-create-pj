// Kịch bản video W lần 3 (#110) — "Sinh viên năm cuối cần chuẩn bị gì để có công việc đầu tiên?" · chuỗi "Từ giảng đường đến công việc đầu tiên"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "prepare-for-first-job-final-year--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "final-year-students",
    "slug": "prepare-for-first-job-final-year",
    "door": "ky-nang",
    "level": "B1",
    "title": "Sinh viên năm cuối cần chuẩn bị gì để có công việc đầu tiên?",
    "series": "Từ giảng đường đến công việc đầu tiên"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo CẢ NĂM CUỐI của Lan (tháng 9 nộp bừa → T10 về quê → T11 khoanh hướng → T12 CV → T3 thực tập → T4 nộp đơn, “Khoan đã!” phí tài liệu → T5 phỏng vấn, lời mời → T6 mùa đồ án → cuối T6 23:00 khép vòng). Nhân vật (theo w145/_series/final-year-students.md): Lan (Hà p3, “bạn”), Bác Bình (phụ huynh p5), Cô Hoa (người hướng dẫn thực tập p12, người phỏng vấn p22–p23 — cùng văn phòng thiết kế), Dũng (Quang p31); chị Thảo chỉ qua tin nhắn (p7, p15, đổi nghề kiểm thử phần mềm → công việc kế toán cho hợp Lan). Câu giới thiệu p22 điền: kế toán, phân tích chi phí, mảng thuế. Ngắt nhịp: BRK-07 rehook (thực tập), BRK-08 dòng thời gian, BRK-04 Trước/Sau p27. Không có số liệu ngoài bài. Bản cũ (W lần 3, #110): w145/bak/prepare-for-first-job-final-year--w01.js.",
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
            "text": "3 tấm ảnh",
            "x": 60,
            "y": 110,
            "size": 150,
            "at": "l1:three",
            "color": "accent",
            "hl": [
              {
                "text": "3 tấm ảnh",
                "at": "l1:photos"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "“ngày đầu đi làm” của bạn bè",
            "x": 70,
            "y": 300,
            "size": 52,
            "at": "l1:first day"
          },
          {
            "id": "a-cv",
            "t": "text",
            "text": "Còn mình: CV gần như trống",
            "x": 70,
            "y": 390,
            "size": 52,
            "at": "l2:empty",
            "color": "coral",
            "hl": [
              {
                "text": "gần như trống",
                "at": "l2:almost empty"
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
          "say": "Three photos. Three friends, smiling on their first day at work.",
          "sub": "Ba tấm ảnh. Ba người bạn cười tươi ngày đầu đi làm.",
          "keys": [
            "Ba tấm ảnh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And one final-year student, staring at an almost empty CV.",
          "sub": "Và một sinh viên năm cuối, nhìn bản CV gần như trống.",
          "keys": [
            "gần như trống"
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
                "mobile-phone",
                "crescent-moon"
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
            "at": "l1",
            "caption": "Tháng 9 · 23:00 · phòng trọ",
            "icon": "crescent-moon"
          },
          {
            "id": "a-net",
            "t": "text",
            "text": "1 đêm · 1 CV · gửi tất cả",
            "x": 70,
            "y": 490,
            "size": 52,
            "at": "l4:every",
            "color": "coral",
            "hl": [
              {
                "text": "gửi tất cả",
                "at": "l4:sight"
              }
            ]
          },
          {
            "id": "a-quit",
            "t": "text",
            "text": "→ nhận nơi đầu tiên, vài tuần: nghỉ",
            "x": 70,
            "y": 580,
            "size": 44,
            "at": "l5:quits"
          },
          {
            "id": "a-why",
            "t": "text",
            "text": "việc chẳng liên quan điều muốn học",
            "x": 70,
            "y": 660,
            "size": 40,
            "at": "l5:Nothing",
            "color": "muted"
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
          "say": "Final year, accounting. Tonight, panic is her roommate.",
          "sub": "Năm cuối ngành kế toán. Tối nay, cơn hoảng ở chung phòng với cô.",
          "keys": [
            "cơn hoảng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Everyone has a job but me! I'll send my CV everywhere. Tonight!",
          "sub": "Ai cũng có việc rồi, trừ mình! Gửi CV khắp nơi. Ngay tối nay!",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One night, one CV, every job ad in sight. A net cast into a puddle.",
          "sub": "Một đêm, một CV, gửi mọi tin tuyển dụng thấy được. Quăng chài xuống vũng nước.",
          "keys": [
            "Một đêm, một CV"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "She takes the first call, and quits weeks later. Nothing she wanted to learn.",
          "sub": "Lan nhận ngay nơi đầu tiên gọi, vài tuần sau nghỉ: việc chẳng liên quan điều muốn học.",
          "keys": [
            "chẳng liên quan"
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
            "text": "Năm cuối cần chuẩn bị gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:need",
            "hl": [
              {
                "text": "chuẩn bị gì",
                "at": "l1:need"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Một CV hoàn hảo",
            "x": 2028,
            "y": 160,
            "size": 54,
            "at": "l2:perfect",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:small steps"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Vài bước nhỏ, đúng thứ tự",
            "x": 2028,
            "y": 250,
            "size": 58,
            "at": "l2:small steps",
            "color": "accent",
            "hl": [
              {
                "text": "đúng thứ tự",
                "at": "l2:right order"
              }
            ]
          },
          {
            "id": "b-dt",
            "t": "text",
            "text": "“Dục tốc bất đạt”",
            "x": 2028,
            "y": 350,
            "size": 56,
            "at": "l3:haste",
            "hl": [
              {
                "text": "bất đạt",
                "at": "l3:less speed"
              }
            ]
          },
          {
            "id": "b-r1",
            "t": "text",
            "text": "Sốt ruột → nộp bừa",
            "x": 2028,
            "y": 440,
            "size": 50,
            "at": "l4:panic",
            "color": "coral"
          },
          {
            "id": "b-r2",
            "t": "text",
            "text": "Bình tĩnh → nộp trúng",
            "x": 2028,
            "y": 515,
            "size": 50,
            "at": "l4:calm",
            "color": "accent",
            "hl": [
              {
                "text": "nộp trúng",
                "at": "l4:right places"
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
          "say": "So, what does a final-year student need for a first job?",
          "sub": "Vậy năm cuối cần chuẩn bị gì để có công việc đầu tiên?",
          "keys": [
            "chuẩn bị gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not a perfect CV. A few small steps, in the right order.",
          "sub": "Không phải một CV hoàn hảo, mà là vài bước nhỏ, làm đều, đúng thứ tự.",
          "keys": [
            "vài bước nhỏ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "More haste, less speed, as Grandma says.",
          "sub": "Ông bà dặn: dục tốc bất đạt.",
          "keys": [
            "dục tốc bất đạt"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Panic applies anywhere. Calm applies to the right places.",
          "sub": "Sốt ruột thì nộp bừa, bình tĩnh thì nộp trúng.",
          "keys": [
            "bình tĩnh thì nộp trúng"
          ]
        }
      ],
      "ref": "intro,p4"
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
            "id": "b-pace",
            "t": "text",
            "text": "Mỗi người một nhịp",
            "x": 2968,
            "y": 160,
            "size": 54,
            "at": "l2:pace",
            "hl": [
              {
                "text": "một nhịp",
                "at": "l2:own pace"
              }
            ]
          },
          {
            "id": "b-me",
            "t": "text",
            "text": "So với mình tuần trước",
            "x": 2968,
            "y": 250,
            "size": 54,
            "at": "l4:yourself",
            "color": "accent",
            "hl": [
              {
                "text": "mình tuần trước",
                "at": "l4:last week"
              }
            ]
          },
          {
            "id": "b-q1",
            "t": "text",
            "text": "Sửa gì trong CV? Hỏi ai?",
            "x": 2968,
            "y": 340,
            "size": 42,
            "at": "l4:fix"
          },
          {
            "id": "b-q2",
            "t": "text",
            "text": "Nộp đơn nào thật sự hợp?",
            "x": 2968,
            "y": 400,
            "size": 42,
            "at": "l4:really fit"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l5:Lan+200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2263,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l5:Lan+350",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2498,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l5:Lan+500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2733,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l5:Lan+650",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l5:Lan+800",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l5:Lan+950",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3438,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l5:Lan+1100",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T10",
            "x": 2073,
            "y": 628,
            "size": 48,
            "at": "l5:Lan+300"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T11",
            "x": 2308,
            "y": 628,
            "size": 48,
            "at": "l5:Lan+450"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T12",
            "x": 2543,
            "y": 628,
            "size": 48,
            "at": "l5:Lan+600"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T3",
            "x": 2778,
            "y": 628,
            "size": 48,
            "at": "l5:Lan+750"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T4",
            "x": 3013,
            "y": 628,
            "size": 48,
            "at": "l5:Lan+900"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T5",
            "x": 3248,
            "y": 628,
            "size": 48,
            "at": "l5:Lan+1050"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "T6",
            "x": 3483,
            "y": 628,
            "size": 48,
            "at": "l5:Lan+1200"
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Is Lan slow? No. Everyone has their own pace: some stay after an internship, some find work after the thesis.",
          "sub": "Lan có chậm không? Không. Mỗi người một nhịp riêng: có bạn được giữ lại sau thực tập, có bạn có việc sau khi bảo vệ đồ án.",
          "keys": [
            "một nhịp riêng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Compare with yourself last week: what did I fix, who did I ask, what really fit?",
          "sub": "Hãy so với chính mình tuần trước: đã sửa gì trong CV? Đã hỏi ai? Đã nộp đơn nào thật sự hợp?",
          "keys": [
            "chính mình tuần trước"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Lan's final year, in seven stops.",
          "sub": "Giờ theo Lan qua năm cuối, bảy chặng.",
          "keys": [
            "bảy chặng"
          ]
        }
      ],
      "ref": "p1,p2"
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
            "at": "l5",
            "fit": "C",
            "ms": 700
          },
          {
            "at": "l7",
            "fit": [
              "c-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l8",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Tháng 10 · Về quê",
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
              "set": "home",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "face": "sad"
                }
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                },
                {
                  "at": "l7",
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "push"
                }
              ]
            },
            "at": "l1:home",
            "caption": "Cuối tuần · nhà bố mẹ",
            "icon": "house"
          },
          {
            "id": "c-old",
            "t": "text",
            "text": "“Con nhà người ta…”",
            "x": 3996,
            "y": 170,
            "size": 56,
            "at": "l5:line",
            "color": "muted"
          },
          {
            "id": "c-oldx",
            "t": "strike",
            "over": "c-old",
            "at": "l5:anxious"
          },
          {
            "id": "c-anx",
            "t": "text",
            "text": "→ con sốt ruột hơn",
            "x": 4036,
            "y": 260,
            "size": 48,
            "at": "l5:anxious",
            "color": "coral"
          },
          {
            "id": "c-new",
            "t": "text",
            "text": "“Con đang ở bước nào?”",
            "x": 3996,
            "y": 400,
            "size": 56,
            "at": "l8:real",
            "color": "accent",
            "hl": [
              {
                "text": "bước nào",
                "at": "l8:real"
              }
            ]
          },
          {
            "id": "c-help",
            "t": "text",
            "text": "“Bố mẹ giúp được gì?”",
            "x": 3996,
            "y": 490,
            "size": 56,
            "at": "l8:conversation",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one: October, home for the weekend.",
          "sub": "Chặng một: tháng Mười, Lan về quê cuối tuần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Bác Bình, Lan's dad, champion of comparing children.",
          "sub": "Còn đây là bác Bình, bố Lan, vô địch môn so con mình với con người ta.",
          "keys": [
            "bác Bình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Other people's children already have jobs. What about you?",
          "sub": "Con nhà người ta đi làm cả rồi. Còn con thì sao?",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Dear parents: that line makes kids anxious, not faster. Try this.",
          "sub": "Thưa phụ huynh: câu “con nhà người ta” làm con sốt ruột hơn chứ không nhanh hơn. Thử câu này.",
          "keys": [
            "sốt ruột hơn"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "binh",
          "say": "Which step are you on, and how can I help?",
          "sub": "Con đang ở bước nào, bố giúp được gì?",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Now that opens a real conversation.",
          "sub": "Câu này mới mở ra một cuộc nói chuyện thật.",
          "keys": [
            "cuộc nói chuyện thật"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "ref": "p5"
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
          },
          {
            "at": 150,
            "fit": "D",
            "ms": 900
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
            "at": "l8",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Tháng 11 · Khoanh hướng",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:stop two"
          },
          {
            "id": "d-no",
            "t": "text",
            "text": "Chọn đúng một nghề mãi mãi",
            "x": 5964,
            "y": 160,
            "size": 50,
            "at": "l2:forever",
            "color": "muted"
          },
          {
            "id": "d-nox",
            "t": "strike",
            "over": "d-no",
            "at": "l2:two or three"
          },
          {
            "id": "d-yes",
            "t": "text",
            "text": "Khoanh 2–3 hướng để thử",
            "x": 5964,
            "y": 250,
            "size": 58,
            "at": "l2:two or three",
            "color": "accent",
            "hl": [
              {
                "text": "2–3 hướng",
                "at": "l2:directions"
              }
            ]
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
              "label": "Nhắn người trong nghề",
              "actor": {
                "id": "lan",
                "side": "left"
              },
              "contact": {
                "name": "Chị Thảo · khoá trên",
                "illus": "woman-office-worker"
              },
              "messages": [
                {
                  "from": "me",
                  "text": "Em chào chị, em là sinh viên năm cuối ngành kế toán, em đọc bài chị chia sẻ về công việc.",
                  "at": "l6"
                },
                {
                  "from": "me",
                  "text": "Em xin hỏi một câu: một ngày làm việc của chị thường gồm những việc gì ạ?",
                  "at": "l7"
                }
              ]
            },
            "at": "l4",
            "caption": "Hỏi một người đang làm nghề",
            "icon": "mobile-phone"
          },
          {
            "id": "d-fg",
            "t": "text",
            "text": "Môn nào làm quên cả giờ?",
            "x": 5964,
            "y": 440,
            "size": 48,
            "at": "l4:forget"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two: November. First, a direction.",
          "sub": "Chặng hai: tháng Mười Một. Trước hết: chọn hướng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not one career forever. Two or three directions to try this year, or your applications scatter.",
          "sub": "Không phải chọn đúng mãi mãi. Khoanh hai, ba hướng để thử trong năm nay, kẻo đơn xin việc tản mát.",
          "keys": [
            "hai, ba hướng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "What made me forget the time? Cost analysis. And tax!",
          "sub": "Môn nào làm mình quên cả giờ giấc? Phân tích chi phí. Và thuế!",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then ask someone in that job: Thảo, a senior.",
          "sub": "Rồi hỏi người đang làm nghề: chị Thảo, chị khoá trên."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "lan",
          "say": "Hello, I'm a final-year accounting student.",
          "sub": "Em chào chị, em là sinh viên năm cuối ngành kế toán, em đọc bài chị chia sẻ."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "lan",
          "say": "May I ask: what's a normal working day like for you?",
          "sub": "Em xin hỏi một câu: một ngày làm việc của chị thường gồm những việc gì ạ?",
          "face": "happy"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "One specific question, not a job request. That's networking: asking, and keeping in touch.",
          "sub": "Một câu hỏi cụ thể, không phải xin việc. Kết nối nghề nghiệp chỉ là hỏi han và giữ liên lạc.",
          "keys": [
            "Một câu hỏi cụ thể"
          ]
        }
      ],
      "ref": "p6,p7,p14,p15"
    },
    {
      "id": "b07",
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
            "text": "③ Tháng 12 · CV đầu tiên",
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
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "laptop",
                "memo"
              ]
            },
            "at": "l1:CV",
            "caption": "Mục “Kinh nghiệm”… trống",
            "icon": "memo"
          },
          {
            "id": "e-tr",
            "t": "text",
            "text": "“Mới có” = kho báu",
            "x": 7932,
            "y": 160,
            "size": 56,
            "at": "l3:treasure",
            "color": "accent",
            "hl": [
              {
                "text": "kho báu",
                "at": "l3:treasure"
              }
            ]
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Đồ án · bài nhóm",
            "x": 7932,
            "y": 255,
            "size": 48,
            "at": "l4:thesis"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Việc làm thêm · câu lạc bộ",
            "x": 7932,
            "y": 320,
            "size": 48,
            "at": "l4:clubs"
          },
          {
            "id": "e-f",
            "t": "text",
            "text": "Ghi rõ: làm gì → kết quả gì",
            "x": 7932,
            "y": 405,
            "size": 50,
            "at": "l4:what you did",
            "color": "accent",
            "hl": [
              {
                "text": "kết quả gì",
                "at": "l4:what came"
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
          "say": "Stop three: December. Her CV freezes at work experience.",
          "sub": "Chặng ba: tháng Mười Hai. Mẫu CV. Lan khựng lại ở mục “Kinh nghiệm”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "I've only got my thesis, a group project and a part-time job.",
          "sub": "Mình mới có đồ án, bài tập nhóm với việc làm thêm thôi.",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Only? She's sitting on treasure, calling it scrap.",
          "sub": "“Mới có”? Lan ngồi trên kho báu mà tưởng giấy vụn.",
          "keys": [
            "kho báu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Thesis, group work, jobs, clubs: all experience, if you write what you did and what came of it.",
          "sub": "Đồ án, bài nhóm, việc làm thêm, câu lạc bộ đều là kinh nghiệm, nếu ghi rõ đã làm gì và ra kết quả gì.",
          "keys": [
            "đã làm gì",
            "ra kết quả gì"
          ]
        }
      ],
      "ref": "p8"
    },
    {
      "id": "b08",
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
            "id": "e-k-c0",
            "t": "box",
            "x": 7932,
            "y": 520,
            "w": 46,
            "h": 46,
            "at": "l2:one page",
            "stroke": 5
          },
          {
            "id": "e-k-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 502,
            "size": 58,
            "at": "l2:one page+600",
            "color": "accent"
          },
          {
            "id": "e-k-l0",
            "t": "text",
            "text": "Gọn một trang",
            "x": 8002,
            "y": 512,
            "size": 40,
            "at": "l2:one page+200"
          },
          {
            "id": "e-k-c1",
            "t": "box",
            "x": 7932,
            "y": 582,
            "w": 46,
            "h": 46,
            "at": "l2:serious",
            "stroke": 5
          },
          {
            "id": "e-k-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 564,
            "size": 58,
            "at": "l2:serious+600",
            "color": "accent"
          },
          {
            "id": "e-k-l1",
            "t": "text",
            "text": "Email nghiêm túc, có tên mình",
            "x": 8002,
            "y": 574,
            "size": 40,
            "at": "l2:serious+200"
          },
          {
            "id": "e-k-c2",
            "t": "box",
            "x": 7932,
            "y": 644,
            "w": 46,
            "h": 46,
            "at": "l2:phone",
            "stroke": 5
          },
          {
            "id": "e-k-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 626,
            "size": 58,
            "at": "l2:phone+600",
            "color": "accent"
          },
          {
            "id": "e-k-l2",
            "t": "text",
            "text": "Số điện thoại đang dùng",
            "x": 8002,
            "y": 636,
            "size": 40,
            "at": "l2:phone+200"
          },
          {
            "id": "e-k-c3",
            "t": "box",
            "x": 7932,
            "y": 706,
            "w": 46,
            "h": 46,
            "at": "l3:typos",
            "stroke": 5
          },
          {
            "id": "e-k-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 688,
            "size": 58,
            "at": "l3:typos+600",
            "color": "accent"
          },
          {
            "id": "e-k-l3",
            "t": "text",
            "text": "Nhờ người đọc lại chính tả",
            "x": 8002,
            "y": 698,
            "size": 40,
            "at": "l3:typos+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then check: one page, a serious email with your name, a phone you actually use.",
          "sub": "Rồi soát: gọn một trang, email nghiêm túc có tên mình, số điện thoại đang dùng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And a friend to hunt typos. Your eyes forgive your own mistakes.",
          "sub": "Và nhờ một người đọc lại lỗi chính tả. Mắt mình hay tha lỗi cho mình.",
          "keys": [
            "đọc lại lỗi chính tả"
          ]
        }
      ],
      "ref": "p9"
    },
    {
      "id": "b09",
      "module": "BRK-07",
      "data": {
        "question": "Thực tập xong, làm sao để nơi đó còn nhớ tên mình?",
        "illus": "name-badge"
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
          "say": "After the internship, will they remember your name?",
          "sub": "Thực tập xong, làm sao để nơi đó còn nhớ tên mình?"
        }
      ]
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
            "text": "④ Tháng 3 · Thực tập",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:stop four"
          },
          {
            "id": "f-lx",
            "t": "text",
            "text": "Thực tập = lái thử nghề thật",
            "x": 60,
            "y": 1250,
            "size": 52,
            "at": "l2:test drive",
            "hl": [
              {
                "text": "lái thử",
                "at": "l2:test drive"
              }
            ]
          },
          {
            "id": "f-hire",
            "t": "text",
            "text": "Nhiều nơi tuyển từ thực tập sinh",
            "x": 60,
            "y": 1335,
            "size": 44,
            "at": "l2:hire",
            "color": "muted"
          },
          {
            "id": "f-log",
            "t": "text",
            "text": "Mỗi tuần 1 dòng:",
            "x": 60,
            "y": 1425,
            "size": 52,
            "at": "l3:a week",
            "color": "accent",
            "hl": [
              {
                "text": "1 dòng",
                "at": "l3:one line"
              }
            ]
          },
          {
            "id": "f-log2",
            "t": "text",
            "text": "làm gì · công cụ gì · kết quả",
            "x": 60,
            "y": 1500,
            "size": 44,
            "at": "l3:tool"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four: March. Lan interns in accounting at a design office.",
          "sub": "Chặng bốn: tháng Ba. Lan thực tập kế toán ở một văn phòng thiết kế."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A test drive of a real job. And many places hire their good interns.",
          "sub": "Thực tập là lái thử nghề thật, và không ít nơi tuyển người từ chính thực tập sinh làm tốt.",
          "keys": [
            "lái thử"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Her habit: one line a week. What she did, which tool, what result.",
          "sub": "Thói quen: mỗi tuần một dòng. Làm gì, dùng công cụ gì, kết quả ra sao: ví dụ thật cho CV.",
          "keys": [
            "mỗi tuần một dòng"
          ]
        }
      ],
      "ref": "p10,p11"
    },
    {
      "id": "b11",
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
            "at": "l5",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "left"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Tuần cuối thực tập",
            "icon": "office-building"
          },
          {
            "id": "f-s1",
            "t": "text",
            "text": "1. Xin 15 phút nhận xét",
            "x": 60,
            "y": 1590,
            "size": 44,
            "at": "l2:fifteen"
          },
          {
            "id": "f-s2",
            "t": "text",
            "text": "2. Xin liên lạc, hẹn quay lại",
            "x": 60,
            "y": 1655,
            "size": 40,
            "at": "l3:come back"
          },
          {
            "id": "f-s3",
            "t": "text",
            "text": "3. Cảm ơn kèm điều đã học",
            "x": 60,
            "y": 1720,
            "size": 40,
            "at": "l5:thanks"
          },
          {
            "id": "f-r",
            "t": "text",
            "text": "Xong việc, nhớ để lại tên",
            "x": 880,
            "y": 1780,
            "size": 52,
            "at": "l7:leave your name",
            "color": "accent",
            "hl": [
              {
                "text": "để lại tên",
                "at": "l7:leave your name"
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
          "say": "Last week. Meet Cô Hoa, her mentor, busy as Tết eve.",
          "sub": "Tuần cuối. Còn đây là cô Hoa, người hướng dẫn, bận như chợ ba mươi Tết.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Fifteen minutes, please? What did I do well, and what should I improve?",
          "sub": "Cô cho em xin mười lăm phút ạ? Em làm tốt gì, nên cải thiện gì?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "If a suitable position opens, I'd love to come back.",
          "sub": "Nếu có vị trí phù hợp, em rất muốn quay lại ạ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Here's my contact. Keep in touch.",
          "sub": "Số của cô đây. Giữ liên lạc nhé.",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Last day: thanks, plus one thing she learned. Months later, they remember her.",
          "sub": "Ngày cuối: nhắn cảm ơn, kèm một điều đã học. Vài tháng sau, nơi đó vẫn nhớ Lan là ai."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Finish the work, and leave your name.",
          "sub": "Thực tập xong việc, nhớ để lại tên.",
          "keys": [
            "để lại tên"
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
      "ref": "p12,p13"
    },
    {
      "id": "b12",
      "module": "BRK-08",
      "data": {
        "title": "Năm cuối của Lan",
        "current": 4,
        "points": [
          {
            "label": "Tháng 9",
            "sub": "Nộp bừa",
            "illus": "crescent-moon"
          },
          {
            "label": "Tháng 11",
            "sub": "Khoanh hướng",
            "illus": "compass"
          },
          {
            "label": "Tháng 12",
            "sub": "CV đầu tiên",
            "illus": "memo"
          },
          {
            "label": "Tháng 3",
            "sub": "Thực tập",
            "illus": "office-building"
          },
          {
            "label": "Tháng 4",
            "sub": "Nộp đơn",
            "illus": "e-mail"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Panic, direction, a CV, an internship.",
          "sub": "Hoảng, chọn hướng, CV, thực tập."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Next: applying safely.",
          "sub": "Tiếp theo: nộp đơn an toàn."
        }
      ]
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
            "at": "l4",
            "fit": [
              "g-f0",
              "g-f3"
            ],
            "zoom": 1.1,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Tháng 4 · Nộp đơn an toàn",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:stop five"
          },
          {
            "id": "g-ok",
            "t": "text",
            "text": "✓ Trang việc làm của trường",
            "x": 2028,
            "y": 1250,
            "size": 46,
            "at": "l2:university",
            "color": "accent",
            "hl": [
              {
                "text": "của trường",
                "at": "l2:university"
              }
            ]
          },
          {
            "id": "g-ok2",
            "t": "text",
            "text": "✓ Ngày hội việc làm",
            "x": 2028,
            "y": 1315,
            "size": 46,
            "at": "l2:fairs",
            "color": "accent"
          },
          {
            "id": "g-ok3",
            "t": "text",
            "text": "✓ Trang chính thức · người quen",
            "x": 2028,
            "y": 1380,
            "size": 46,
            "at": "l2:official",
            "color": "accent"
          },
          {
            "id": "g-grp",
            "t": "text",
            "text": "? Nhóm mạng xã hội: soi kỹ",
            "x": 2028,
            "y": 1465,
            "size": 46,
            "at": "l2:Group",
            "hl": [
              {
                "text": "soi kỹ",
                "at": "l2:twice"
              }
            ]
          },
          {
            "id": "g-f0",
            "t": "text",
            "text": "✗ Lương cao, việc rất nhẹ",
            "x": 2868,
            "y": 1250,
            "size": 46,
            "at": "l4:high pay",
            "color": "coral"
          },
          {
            "id": "g-f1",
            "t": "text",
            "text": "✗ Đòi phí hồ sơ, đào tạo",
            "x": 2868,
            "y": 1315,
            "size": 46,
            "at": "l4:fee",
            "color": "coral"
          },
          {
            "id": "g-f2",
            "t": "text",
            "text": "✗ Đòi giữ giấy tờ gốc",
            "x": 2868,
            "y": 1380,
            "size": 46,
            "at": "l4:originals",
            "color": "coral"
          },
          {
            "id": "g-f3",
            "t": "text",
            "text": "✗ Hẹn ở quán cà phê",
            "x": 2868,
            "y": 1445,
            "size": 46,
            "at": "l4:cafe",
            "color": "coral"
          },
          {
            "id": "g-chk",
            "t": "text",
            "text": "Tra tên, địa chỉ · báo người thân",
            "x": 2028,
            "y": 1560,
            "size": 46,
            "at": "l6:check",
            "hl": [
              {
                "text": "báo người thân",
                "at": "l6:tell"
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
          "say": "Stop five: April. Applying. But where?",
          "sub": "Chặng năm: tháng Tư. Nộp đơn. Nhưng nộp ở đâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Safest: your university's job page, job fairs, official sites, people you know. Group posts? Check twice.",
          "sub": "An toàn nhất: trang việc làm của trường, ngày hội, trang chính thức, người quen. Tin trong nhóm mạng? Soi kỹ.",
          "keys": [
            "An toàn nhất"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Red flags: high pay for easy work, a training fee, keeping originals, a cafe interview.",
          "sub": "Dấu hiệu lừa: lương cao cho việc nhẹ, đòi phí đào tạo, giữ giấy tờ gốc, hẹn phỏng vấn ở quán cà phê.",
          "keys": [
            "Dấu hiệu lừa"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Before you go: check the company and address, and tell family where you'll be.",
          "sub": "Trước khi đi: tra tên, địa chỉ công ty, báo người thân nơi và giờ phỏng vấn.",
          "keys": [
            "báo người thân"
          ]
        }
      ],
      "ref": "p16,p17,p18"
    },
    {
      "id": "b14",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Tin “nhập liệu tại nhà”",
        "actors": [
          {
            "id": "lan",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đóng phí nhỏ để được nhận",
          "why": "Sau phí nhỏ là “phí kích hoạt tài khoản”, cứ thế tiếp; ngừng chuyển thì bị chặn liên lạc.",
          "rule": "Việc thật trả lương cho bạn, không bắt bạn trả tiền"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "Typing at home, high pay! Just a small document fee. Sending now!",
          "sub": "Nhập liệu tại nhà, lương cao! Chỉ chút phí tài liệu. Chuyển luôn!",
          "face": "happy",
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
          "say": "A small fee, then an activation fee, on and on. Stop paying, they block you.",
          "sub": "Phí nhỏ, rồi “phí kích hoạt tài khoản”, cứ thế mãi. Ngừng chuyển là bị chặn.",
          "keys": [
            "phí kích hoạt tài khoản"
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
          "say": "Pay to get hired? Real employers pay me. I stop here.",
          "sub": "Trả tiền để được nhận? Nơi tuyển thật trả lương cho mình. Dừng ở đây.",
          "phase": "redo",
          "face": "thinking",
          "pose": "stop"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "First request for money: time to stop.",
          "sub": "Lần đầu bị đòi tiền là lúc dừng lại.",
          "phase": "redo",
          "keys": [
            "lúc dừng lại"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p19,p20"
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
            "id": "g-rule",
            "t": "text",
            "text": "Việc thật trả lương cho bạn",
            "x": 2028,
            "y": 1670,
            "size": 62,
            "at": "l2:real job",
            "color": "accent",
            "hl": [
              {
                "text": "trả lương cho bạn",
                "at": "l2:pays you"
              }
            ]
          },
          {
            "id": "g-rule2",
            "t": "text",
            "text": "không bắt bạn trả tiền",
            "x": 2068,
            "y": 1760,
            "size": 54,
            "at": "l2:never"
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Learn it like your PIN: a real job pays you. It never makes you pay.",
          "sub": "Thuộc như mã PIN: việc thật trả lương cho bạn, không bắt bạn trả tiền.",
          "keys": [
            "trả lương cho bạn"
          ]
        }
      ],
      "ref": "p20"
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
            "at": "l4",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "H",
            "ms": 700
          },
          {
            "at": "l8",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l11",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Tháng 5 · Phỏng vấn",
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
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left"
                },
                {
                  "id": "lan",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-10",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l8",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l10",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l11",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:interview",
            "caption": "Văn phòng thiết kế, lần này là phỏng vấn",
            "icon": "office-building"
          },
          {
            "id": "h-p1",
            "t": "text",
            "text": "Đọc lại tin · tìm hiểu công ty",
            "x": 3996,
            "y": 1250,
            "size": 44,
            "at": "l2:rereads"
          },
          {
            "id": "h-p2",
            "t": "text",
            "text": "2–3 câu chuyện về mình",
            "x": 3996,
            "y": 1320,
            "size": 50,
            "at": "l2:stories",
            "color": "accent",
            "hl": [
              {
                "text": "2–3 câu chuyện",
                "at": "l2:stories"
              }
            ]
          },
          {
            "id": "h-p3",
            "t": "text",
            "text": "Tập nói to câu giới thiệu",
            "x": 3996,
            "y": 1405,
            "size": 46,
            "at": "l7:out loud",
            "hl": [
              {
                "text": "nói to",
                "at": "l7:out loud"
              }
            ]
          },
          {
            "id": "h-p4",
            "t": "text",
            "text": "Cuối buổi: hỏi 1 câu",
            "x": 3996,
            "y": 1485,
            "size": 50,
            "at": "l11:serious",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi 1 câu",
                "at": "l11:serious"
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
          "say": "Stop six: May. The design office is hiring, and Lan gets an interview.",
          "sub": "Chặng sáu: tháng Năm. Văn phòng thiết kế tuyển người, Lan được gọi phỏng vấn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "She rereads the post, studies the company, prepares two or three stories.",
          "sub": "Lan đọc lại tin, tìm hiểu công ty, chuẩn bị hai, ba câu chuyện, như một khó khăn trong đồ án.",
          "keys": [
            "hai, ba câu chuyện"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Please introduce yourself.",
          "sub": "Em giới thiệu về bản thân nhé.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "I'm Lan, graduating in accounting. I did the cost analysis in my thesis, and I want to learn tax.",
          "sub": "Em là Lan, sắp tốt nghiệp kế toán. Trong đồ án em phụ trách phân tích chi phí, và muốn học sâu về thuế.",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Practised out loud, because shy people shake most on the first sentence.",
          "sub": "Đã tập nói to, vì người ngại nói thường run nhất ở câu đầu.",
          "keys": [
            "tập nói to"
          ]
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "hoa",
          "say": "Do you have any questions for us?",
          "sub": "Em có câu hỏi gì không?",
          "face": "neutral"
        },
        {
          "id": "l10",
          "lang": "en",
          "who": "lan",
          "say": "How are new staff usually guided in their first month?",
          "sub": "Người mới ở vị trí này thường được hướng dẫn thế nào trong tháng đầu ạ?",
          "face": "thinking"
        },
        {
          "id": "l11",
          "lang": "en",
          "who": "det",
          "say": "Better than 'no, thank you'. It shows you are serious.",
          "sub": "Hơn hẳn “dạ không ạ”: cho thấy bạn nghiêm túc.",
          "keys": [
            "nghiêm túc"
          ]
        }
      ],
      "ref": "p21,p22,p23"
    },
    {
      "id": "b17",
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
            "id": "h-o",
            "t": "text",
            "text": "Lời mời: so hơn cả lương",
            "x": 3996,
            "y": 1590,
            "size": 52,
            "at": "l2:beyond",
            "color": "accent",
            "hl": [
              {
                "text": "hơn cả lương",
                "at": "l2:beyond salary"
              }
            ]
          },
          {
            "id": "h-o2",
            "t": "text",
            "text": "học gì · ai kèm · giờ · bảo hiểm",
            "x": 3996,
            "y": 1665,
            "size": 40,
            "at": "l2:learning"
          },
          {
            "id": "h-wait",
            "t": "text",
            "text": "Xin hẹn rõ ngày trả lời",
            "x": 3996,
            "y": 1740,
            "size": 48,
            "at": "l3:Friday",
            "hl": [
              {
                "text": "hẹn rõ ngày",
                "at": "l3:Friday"
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
          "say": "A week later: an offer! Don't nod like a dashboard puppy.",
          "sub": "Một tuần sau: có lời mời! Đừng gật như chú chó lắc lư trên taplô."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Compare beyond salary: learning, a mentor, hours, travel, insurance.",
          "sub": "So thêm ngoài lương: học được gì, có ai hướng dẫn, giờ làm, đi lại, bảo hiểm.",
          "keys": [
            "ngoài lương"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Thank you so much. May I reply by this Friday?",
          "sub": "Em rất cảm ơn anh chị. Em xin phép phản hồi trước thứ Sáu tuần này được không ạ?",
          "face": "happy"
        }
      ],
      "ref": "p24,p25"
    },
    {
      "id": "b18",
      "module": "BRK-04",
      "data": {
        "title": "Gọi báo trúng tuyển",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "“Dạ vâng, em đồng ý, thứ Hai em đi làm”",
        "right": "“Gửi giúp em thư mời ghi rõ lương và thử việc”",
        "wrongIllus": "telephone-receiver",
        "rightIllus": "page-facing-up"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: yes, Monday!",
          "sub": "Trước: “Dạ vâng, thứ Hai em đi làm.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: an offer letter, please.",
          "sub": "Sau: “Anh chị gửi giúp em thư mời ghi rõ lương ạ.”"
        }
      ],
      "ref": "p27"
    },
    {
      "id": "b19",
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
            "id": "h-pp",
            "t": "text",
            "text": "Nghe bằng tai, chốt bằng giấy",
            "x": 4816,
            "y": 1780,
            "size": 52,
            "at": "l2:paper",
            "color": "accent",
            "hl": [
              {
                "text": "chốt bằng giấy",
                "at": "l2:confirm on paper"
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
          "say": "Still polite, but trial pay, full pay and trial length are on paper.",
          "sub": "Vẫn lịch sự, nhưng lương thử việc, lương chính thức, thời gian thử việc đã nằm trên giấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Listen with your ears, confirm on paper. No surprises on the first payday.",
          "sub": "Nghe bằng tai, chốt bằng giấy. Tháng lương đầu khỏi bất ngờ.",
          "keys": [
            "chốt bằng giấy"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Also ask about hours, insurance, how to leave. Unsure? Ask HR.",
          "sub": "Trước khi ký, hỏi rõ cả giờ làm, bảo hiểm, điều kiện nghỉ việc. Chưa chắc thì hỏi phòng nhân sự."
        }
      ],
      "ref": "p26,p28"
    },
    {
      "id": "b20",
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
          },
          {
            "at": "l5",
            "fit": [
              "i-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Tháng 6 · Mùa đồ án",
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
              "set": "campus",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "books"
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
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-07",
                  "on": "dung",
                  "move": "push"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "Dũng, ngành cơ khí",
            "icon": "books"
          },
          {
            "id": "i-a",
            "t": "text",
            "text": "Dồn hết đi phỏng vấn",
            "x": 5964,
            "y": 1250,
            "size": 50,
            "at": "l2:interviews",
            "color": "muted"
          },
          {
            "id": "i-b",
            "t": "text",
            "text": "→ thức trắng, đồ án sơ sài",
            "x": 6004,
            "y": 1335,
            "size": 46,
            "at": "l4:sleepless",
            "color": "coral"
          },
          {
            "id": "i-c",
            "t": "text",
            "text": "→ việc mới cần có bằng",
            "x": 6004,
            "y": 1410,
            "size": 46,
            "at": "l5:degree",
            "color": "coral",
            "hl": [
              {
                "text": "cần có bằng",
                "at": "l5:needs a degree"
              }
            ]
          },
          {
            "id": "i-r",
            "t": "text",
            "text": "Đồ án giữ chỗ trước",
            "x": 5964,
            "y": 1510,
            "size": 60,
            "at": "l6:first",
            "color": "accent",
            "hl": [
              {
                "text": "giữ chỗ trước",
                "at": "l6:seat first"
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
          "say": "Stop seven: June, thesis season. Meet Dũng, Lan's classmate.",
          "sub": "Chặng bảy: tháng Sáu, mùa đồ án. Còn đây là Dũng, bạn cùng khoá ngành cơ khí.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Afraid of being slow, he spent spring on interviews.",
          "sub": "Sợ chậm hơn bạn, Dũng dồn cả mùa xuân đi phỏng vấn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Thesis? I'll catch up next month!",
          "sub": "Đồ án á? Tháng sau làm bù!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Next month came like a debt collector: sleepless nights, a weak thesis.",
          "sub": "Tháng sau đến như chủ nợ: thức trắng mấy đêm, đồ án sơ sài, sửa đi sửa lại.",
          "keys": [
            "thức trắng mấy đêm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "And my new company asks when I graduate. The job needs a degree!",
          "sub": "Mà công ty đã nhận mình hỏi lịch tốt nghiệp. Vị trí đó cần có bằng!",
          "face": "worried"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "The thesis decides your graduation, so it books its seat first.",
          "sub": "Đồ án quyết định có tốt nghiệp đúng hạn không, nên nó được giữ chỗ trước.",
          "keys": [
            "giữ chỗ trước"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1200
        }
      ],
      "ref": "p29,p31,p32"
    },
    {
      "id": "b21",
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
            "id": "i-w1",
            "t": "text",
            "text": "Buổi cố định: đồ án trước",
            "x": 5964,
            "y": 1610,
            "size": 48,
            "at": "l1:thesis",
            "hl": [
              {
                "text": "Buổi cố định",
                "at": "l1:Fixed"
              }
            ]
          },
          {
            "id": "i-w2",
            "t": "text",
            "text": "1–2 buổi cố định: tìm việc",
            "x": 5964,
            "y": 1680,
            "size": 48,
            "at": "l1:job hunting"
          },
          {
            "id": "i-w3",
            "t": "text",
            "text": "Trùng lịch gặp thầy cô → báo sớm",
            "x": 5964,
            "y": 1750,
            "size": 42,
            "at": "l3:early",
            "color": "coral",
            "hl": [
              {
                "text": "báo sớm",
                "at": "l3:early"
              }
            ]
          },
          {
            "id": "i-tb",
            "t": "text",
            "text": "Bảng theo dõi: nơi · ngày · hồi âm",
            "x": 6784,
            "y": 1780,
            "size": 44,
            "at": "l4:table",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fixed weekly sessions for the thesis, then one or two for job hunting. Not a daily stir-fry.",
          "sub": "Buổi cố định mỗi tuần cho đồ án, rồi một hai buổi cố định cho tìm việc. Đừng xào thập cẩm mỗi ngày.",
          "keys": [
            "buổi cố định"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Note thesis deadlines. Interview clashes with your supervisor? Tell them early.",
          "sub": "Ghi các mốc nộp đồ án. Phỏng vấn trùng buổi gặp thầy cô? Báo sớm.",
          "keys": [
            "Báo sớm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Keep a table: where you applied, when, any reply.",
          "sub": "Lập bảng theo dõi đơn: nơi nào, ngày nào, đã có hồi âm chưa."
        }
      ],
      "ref": "p29,p30,p32"
    },
    {
      "id": "b22",
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
            "at": "l4",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Cuối tháng 6 · 23:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:late june"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "crescent-moon",
                "page-facing-up"
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
            "at": "l1:same room",
            "caption": "Vẫn phòng trọ ấy",
            "icon": "crescent-moon"
          },
          {
            "id": "j-4",
            "t": "text",
            "text": "Ảnh thứ 4: “ngày đầu đi làm”",
            "x": 7932,
            "y": 1250,
            "size": 46,
            "at": "l1:photo"
          },
          {
            "id": "j-ok",
            "t": "text",
            "text": "Thư mời: đã có, trên giấy",
            "x": 7932,
            "y": 1335,
            "size": 48,
            "at": "l3:offer letter",
            "color": "accent"
          },
          {
            "id": "j-dt",
            "t": "text",
            "text": "Dục tốc bất đạt → chậm mà chắc",
            "x": 7932,
            "y": 1430,
            "size": 46,
            "at": "l4:slowly",
            "hl": [
              {
                "text": "chậm mà chắc",
                "at": "l4:slowly"
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
          "say": "Late June, eleven p.m. Same room. Another friend posts a first-day photo.",
          "sub": "Cuối tháng Sáu, mười một giờ đêm. Vẫn phòng ấy. Lại một người bạn khoe ảnh ngày đầu đi làm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Happy for her! My turn is Monday. The offer letter is in my inbox.",
          "sub": "Mừng cho bạn ấy! Thứ Hai đến lượt mình, thư mời đã nằm trong hộp thư.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "More haste, less speed. Lan went slowly, surely, and arrived.",
          "sub": "Dục tốc bất đạt. Lan đi chậm mà chắc, và đã đến nơi.",
          "keys": [
            "chậm mà chắc"
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
      "ref": "p4"
    },
    {
      "id": "b23",
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
            "at": "l2:directions",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:interning",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:applying",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l4:offer",
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
            "x": 6664,
            "y": 250,
            "at": "l2:directions"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 760,
            "y": 1780,
            "at": "l3:interning"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3468,
            "y": 1490,
            "at": "l3:applying"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 4736,
            "y": 1780,
            "at": "l4:offer"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; điều khoản cụ thể, hỏi phòng nhân sự hoặc nguồn chính thức.",
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
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your map. Start of final year: two or three directions, then your first CV.",
          "sub": "Bản đồ của bạn. Đầu năm cuối: khoanh hai, ba hướng rồi viết CV đầu tiên.",
          "keys": [
            "hai, ba hướng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Interning: leave your name. Applying: safe sources, no fees.",
          "sub": "Đang thực tập: ghi lại việc, để lại tên. Khi nộp đơn: nguồn an toàn, không trả phí."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Offer: compare, get it on paper. All year: protect your thesis.",
          "sub": "Có lời mời: so sánh, chốt bằng giấy. Suốt năm: giữ lịch cho đồ án.",
          "keys": [
            "chốt bằng giấy"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One small step per stage.",
          "sub": "Mỗi giai đoạn, chỉ cần một bước nhỏ.",
          "keys": [
            "một bước nhỏ"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p33,outro"
    },
    {
      "id": "s33",
      "module": "QUIZ-01",
      "ref": "questions[14]",
      "data": {
        "q": "What is the lesson about finishing an internship well?",
        "options": [
          "Do only what you are told, because asking questions makes interns look weak",
          "Leave quietly on the last day, so you do not bother busy people",
          "Finish your tasks well, and make sure people remember your name when you leave"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "name-badge",
        "why": "Làm xong việc, và để người hướng dẫn nhớ bạn là ai."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What is the lesson about finishing an internship well?",
          "sub": "Bài học về cách kết thúc kỳ thực tập cho trọn vẹn là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Finish your tasks well, and make sure people remember your name when you leave.",
          "sub": "Làm tốt việc, và để mọi người nhớ tên bạn khi rời đi."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Finish the work, and leave your name.",
          "sub": "Thực tập xong việc, nhớ để lại tên."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s34",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Bản đồ năm cuối"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting below.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ.",
          "face": "happy"
        }
      ]
    }
  ],
  "loop": {
    "open": "b01",
    "close": "b22"
  }
};
