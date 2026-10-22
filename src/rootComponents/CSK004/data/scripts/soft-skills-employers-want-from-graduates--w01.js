// Kịch bản video W lần 3 (#110) — "Kỹ năng mềm nhà tuyển dụng cần ở sinh viên mới ra trường" · chuỗi "Năm hai, năm ba: chuẩn bị sớm cho nghề nghiệp"
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "soft-skills-employers-want-from-graduates--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "students-preparing-early",
    "slug": "soft-skills-employers-want-from-graduates",
    "door": "ky-nang",
    "level": "B1",
    "title": "Kỹ năng mềm nhà tuyển dụng cần ở sinh viên mới ra trường",
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
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo HỌC KỲ MỘT NĂM BA của Lan và Dũng (T9 23:00 Lan sửa hộ cả nhóm → T9 chị Thảo: nhà tuyển dụng tìm gì → T10 Dũng báo tiến độ → T11 làm việc nhóm → T12 Dũng im lặng đến hạn, “Khoan đã!” → T1 Dũng tự học, hỏi cụ thể → T2 thời gian, góp ý slide → T3 phỏng vấn thực tập của Lan → cuối T3 23:00 khép vòng: câu chuyện bốn phần). Nhân vật (theo w145/_series/students-preparing-early.md): Lan (Trinh p8; ví dụ khảo sát p23), Dũng (Hùng p12, Quý p16, Sang p20; báo tiến độ p6), chị Thảo (nêu lý do nhà tuyển dụng p2–p3), Cô Hoa (vai người phỏng vấn thực tập p8, Đét giới thiệu rõ vai); anh trưởng ban chỉ qua tin nhắn; cô giáo nhận xét slide chỉ nhắc trong lời. Con số neo “7 kỹ năng” lấy từ p1. Ngắt nhịp: BRK-07 rehook (p8), BRK-04 Trước/Sau nhận góp ý (p20). Không có số liệu ngoài bài. Bản cũ (W lần 3, #110): w145/bak/soft-skills-employers-want-from-graduates--w01.js.",
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
            "text": "7 kỹ năng",
            "x": 60,
            "y": 100,
            "size": 150,
            "at": "l1:seven",
            "color": "accent",
            "hl": [
              {
                "text": "7 kỹ năng",
                "at": "l1:skills"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "trong tin tuyển người mới",
            "x": 70,
            "y": 290,
            "size": 56,
            "at": "l1:ads"
          },
          {
            "id": "a-x",
            "t": "text",
            "text": "Ghi đủ tên vào CV là xong?",
            "x": 70,
            "y": 390,
            "size": 48,
            "at": "l2:list",
            "color": "muted"
          },
          {
            "id": "a-xx",
            "t": "strike",
            "over": "a-x",
            "at": "l2:proves+300"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seven skills, again and again, in job ads for new graduates.",
          "sub": "Bảy kỹ năng, lặp đi lặp lại trong tin tuyển dụng cho người mới ra trường.",
          "keys": [
            "Bảy kỹ năng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Most students just list them on a CV. That proves about as much as a horoscope.",
          "sub": "Nhiều bạn chỉ ghi tên chúng vào CV. Chứng minh được chừng bằng… tử vi.",
          "keys": [
            "tử vi"
          ]
        }
      ],
      "ref": "intro,p1"
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
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "laptop",
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
            "caption": "Tháng 9 năm ba · 23:00 · phòng trọ",
            "icon": "laptop"
          },
          {
            "id": "a-fix",
            "t": "text",
            "text": "Sửa hết phần của cả nhóm",
            "x": 70,
            "y": 500,
            "size": 46,
            "at": "l3:fix",
            "color": "coral"
          },
          {
            "id": "a-gr",
            "t": "text",
            "text": "“Điểm phải cao!”",
            "x": 70,
            "y": 580,
            "size": 52,
            "at": "l3:high"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Đó là làm việc nhóm giỏi?",
            "x": 70,
            "y": 670,
            "size": 50,
            "at": "l4:teamwork",
            "color": "accent",
            "hl": [
              {
                "text": "làm việc nhóm giỏi",
                "at": "l4:teamwork"
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
          "say": "Meet Lan.",
          "sub": "Đây là Lan."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Year three, accounting. Top grades. Tonight, the group report is due tomorrow.",
          "sub": "Năm ba ngành kế toán. Điểm luôn cao. Tối nay, mai nộp bài nhóm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "I'll fix everyone's parts myself. Our grade must be high!",
          "sub": "Thôi, mình tự sửa hết phần của mọi người. Điểm phải cao!",
          "face": "worried",
          "pose": "think"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lan believes this is great teamwork. Hold that thought.",
          "sub": "Lan tin đó là làm việc nhóm giỏi. Nhớ lấy niềm tin này nhé.",
          "keys": [
            "làm việc nhóm giỏi"
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
      "ref": "p8"
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
            "text": "Học ở đâu? Chứng minh bằng gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:learn",
            "hl": [
              {
                "text": "Chứng minh",
                "at": "l1:prove"
              }
            ]
          },
          {
            "id": "b-r",
            "t": "text",
            "text": "Phòng luyện ngay trong trường:",
            "x": 2028,
            "y": 160,
            "size": 48,
            "at": "l2:gym"
          },
          {
            "id": "b-r2",
            "t": "text",
            "text": "bài nhóm · CLB · việc làm thêm",
            "x": 2028,
            "y": 230,
            "size": 40,
            "at": "l2:group",
            "color": "muted"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Đủ tên kỹ năng trong CV",
            "x": 2028,
            "y": 320,
            "size": 48,
            "at": "l3:names",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:story"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "1 kỹ năng = 1 chuyện thật",
            "x": 2028,
            "y": 400,
            "size": 58,
            "at": "l3:story",
            "color": "accent",
            "hl": [
              {
                "text": "1 chuyện thật",
                "at": "l3:real story"
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
          "say": "So where do you learn soft skills, and how do you prove them?",
          "sub": "Vậy kỹ năng mềm học ở đâu, chứng minh bằng gì?",
          "keys": [
            "chứng minh bằng gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your gym is already on campus: group work, clubs, part-time jobs.",
          "sub": "Phòng luyện có sẵn ngay trong trường: bài tập nhóm, câu lạc bộ, việc làm thêm.",
          "keys": [
            "Phòng luyện"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not a list of skill names. One real story for each skill.",
          "sub": "Không phải ghi đủ tên kỹ năng, mà là một câu chuyện thật cho mỗi kỹ năng.",
          "keys": [
            "một câu chuyện thật"
          ]
        }
      ],
      "ref": "intro"
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
            "id": "b-s0",
            "t": "text",
            "text": "Giao tiếp rõ ràng · Làm việc nhóm",
            "x": 2968,
            "y": 160,
            "size": 38,
            "at": "l1:communication"
          },
          {
            "id": "b-s1",
            "t": "text",
            "text": "Trách nhiệm · Tự học",
            "x": 2968,
            "y": 220,
            "size": 38,
            "at": "l1:responsibility"
          },
          {
            "id": "b-s2",
            "t": "text",
            "text": "Giải quyết vấn đề · Thời gian",
            "x": 2968,
            "y": 280,
            "size": 38,
            "at": "l2:problem"
          },
          {
            "id": "b-s3",
            "t": "text",
            "text": "Tiếp nhận góp ý",
            "x": 2968,
            "y": 340,
            "size": 38,
            "at": "l2:feedback",
            "hl": [
              {
                "text": "góp ý",
                "at": "l2:feedback"
              }
            ]
          },
          {
            "id": "b-hk",
            "t": "text",
            "text": "Học kỳ một năm ba",
            "x": 2028,
            "y": 545,
            "size": 40,
            "at": "l3:semester",
            "color": "muted"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l3:stops+200",
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
            "at": "l3:stops+350",
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
            "at": "l3:stops+500",
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
            "at": "l3:stops+650",
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
            "at": "l3:stops+800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l3:stops+950",
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
            "at": "l3:stops+1100",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T9",
            "x": 2078,
            "y": 628,
            "size": 48,
            "at": "l3:stops+300"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T10",
            "x": 2313,
            "y": 628,
            "size": 48,
            "at": "l3:stops+450"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T11",
            "x": 2548,
            "y": 628,
            "size": 48,
            "at": "l3:stops+600"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T12",
            "x": 2783,
            "y": 628,
            "size": 48,
            "at": "l3:stops+750"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T1",
            "x": 3018,
            "y": 628,
            "size": 48,
            "at": "l3:stops+900"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T2",
            "x": 3253,
            "y": 628,
            "size": 48,
            "at": "l3:stops+1050"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "T3",
            "x": 3488,
            "y": 628,
            "size": 48,
            "at": "l3:stops+1200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The seven: clear communication, teamwork, responsibility, self-learning.",
          "sub": "Bảy kỹ năng: giao tiếp rõ ràng, làm việc nhóm, tinh thần trách nhiệm, tự học."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Problem solving, time management, and taking feedback.",
          "sub": "Giải quyết vấn đề, quản lý thời gian và tiếp nhận góp ý.",
          "keys": [
            "tiếp nhận góp ý"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Lan and Dũng's semester, in seven stops.",
          "sub": "Học kỳ của Lan và Dũng, bảy chặng.",
          "keys": [
            "bảy chặng"
          ]
        }
      ],
      "ref": "p1"
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
            "at": "l2",
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
            "text": "① Tháng 9 · Tuyển dụng tìm gì?",
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                }
              ],
              "props": [
                "memo"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "at": "l1:Thảo",
            "caption": "Chị Thảo, giờ nghỉ trưa",
            "icon": "office-building"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Kiến thức: đào tạo thêm được",
            "x": 3996,
            "y": 160,
            "size": 46,
            "at": "l2:trained"
          },
          {
            "id": "c-w",
            "t": "text",
            "text": "Cách làm việc: khó dạy lại",
            "x": 3996,
            "y": 240,
            "size": 48,
            "at": "l2:habits",
            "color": "coral",
            "hl": [
              {
                "text": "khó dạy lại",
                "at": "l2:hard"
              }
            ]
          },
          {
            "id": "c-y",
            "t": "text",
            "text": "Năm đầu: nhận việc, hỏi, báo",
            "x": 3996,
            "y": 330,
            "size": 44,
            "at": "l3:Receiving"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one: September. Meet Thảo, Lan's senior, now in an office job, a born list-maker.",
          "sub": "Chặng một: tháng Chín. Đây là chị Thảo, chị khoá trên, giờ đi làm văn phòng, sinh ra để lập danh sách.",
          "keys": [
            "chị Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "First: knowledge can be trained later. Working habits are hard to teach again.",
          "sub": "Thứ nhất: kiến thức thì đào tạo thêm được. Cách làm việc mới khó dạy lại.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Second: my first year was mostly coordination. Receiving tasks, asking people, reporting results.",
          "sub": "Thứ hai: năm đầu đi làm, chị chủ yếu phối hợp: nhận việc, hỏi người khác, báo kết quả.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Someone who asks on time, takes notes and keeps promises gets more tasks, and learns faster than a quiet genius.",
          "sub": "Bạn hỏi đúng lúc, ghi chép, giữ lời sẽ được giao thêm việc, học nhanh hơn bạn giỏi mà im lặng.",
          "keys": [
            "giữ lời"
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
      "ref": "p2,p3"
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
          },
          {
            "at": "l5",
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
            "id": "d-t",
            "t": "text",
            "text": "② Tháng 10 · Giao tiếp rõ ràng",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:stop two"
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
              "label": "Nhóm chat bài tập",
              "actor": {
                "id": "dung",
                "side": "left"
              },
              "contact": {
                "name": "Nhóm bài tập",
                "illus": "busts-in-silhouette"
              },
              "messages": [
                {
                  "from": "them",
                  "text": "Phần của Dũng sao rồi?",
                  "at": "l3"
                },
                {
                  "from": "me",
                  "text": "Mình đang làm.",
                  "at": "l3:working"
                },
                {
                  "from": "me",
                  "text": "Xong 2/3 phần. Phần cuối cần số liệu của Mai, tối thứ Năm gửi cả nhóm.",
                  "at": "l5"
                }
              ]
            },
            "at": "l2:Dũng",
            "caption": "Dũng báo tiến độ",
            "icon": "mobile-phone"
          },
          {
            "id": "d-n",
            "t": "text",
            "text": "Không phải nói hay",
            "x": 5964,
            "y": 160,
            "size": 46,
            "at": "l1:beautifully",
            "color": "muted"
          },
          {
            "id": "d-nx",
            "t": "strike",
            "over": "d-n",
            "at": "l1:enough"
          },
          {
            "id": "d-y",
            "t": "text",
            "text": "Nói đủ · đúng lúc · dễ hiểu",
            "x": 5964,
            "y": 240,
            "size": 52,
            "at": "l1:enough",
            "color": "accent",
            "hl": [
              {
                "text": "đúng lúc",
                "at": "l1:time"
              }
            ]
          },
          {
            "id": "d-w",
            "t": "text",
            "text": "“Đang làm”: chẳng ai hiểu gì",
            "x": 5964,
            "y": 330,
            "size": 44,
            "at": "l4:nothing",
            "color": "coral"
          },
          {
            "id": "d-r",
            "t": "text",
            "text": "Kết quả trước, chi tiết sau",
            "x": 5964,
            "y": 420,
            "size": 48,
            "at": "l6:result",
            "color": "accent",
            "hl": [
              {
                "text": "Kết quả trước",
                "at": "l6:result first"
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
          "say": "Stop two: October. At work, communication isn't speaking beautifully. It's enough, on time, and simple.",
          "sub": "Chặng hai: tháng Mười. Giao tiếp ở chỗ làm không phải nói hay, mà là nói đủ, đúng lúc, dễ hiểu.",
          "keys": [
            "nói đủ, đúng lúc, dễ hiểu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, Lan's classmate in mechanical engineering. Fast hands, short messages.",
          "sub": "Còn đây là Dũng, bạn cùng khoá ngành cơ khí. Tay nhanh, tin nhắn ngắn.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "My part? I'm working on it!",
          "sub": "Phần mình á? Đang làm mà!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Working on it. Says nothing. Like a weather forecast that says: weather.",
          "sub": "“Đang làm”. Chẳng nói gì cả. Như bản tin dự báo: “trời có thời tiết”.",
          "keys": [
            "Chẳng nói gì cả"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try: two of three parts done. The last needs Mai's data. I'll send it Thursday evening.",
          "sub": "Thử: xong hai trên ba phần, phần cuối cần số liệu của Mai, tối thứ Năm gửi cả nhóm.",
          "keys": [
            "xong hai trên ba phần"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Result first, then details.",
          "sub": "Kết quả trước, chi tiết sau.",
          "keys": [
            "Kết quả trước"
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
      "ref": "p4,p5,p6"
    },
    {
      "id": "b06",
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
            "id": "d-rp",
            "t": "text",
            "text": "Nhận việc → nhắc lại bằng lời mình",
            "x": 5964,
            "y": 520,
            "size": 42,
            "at": "l1:repeat",
            "hl": [
              {
                "text": "nhắc lại",
                "at": "l1:repeat"
              }
            ]
          },
          {
            "id": "d-em",
            "t": "text",
            "text": "Email thầy cô:",
            "x": 5964,
            "y": 600,
            "size": 46,
            "at": "l2:email"
          },
          {
            "id": "d-e1",
            "t": "text",
            "text": "tiêu đề rõ · ý chính đầu",
            "x": 5964,
            "y": 660,
            "size": 40,
            "at": "l2:subject",
            "color": "muted"
          },
          {
            "id": "d-e2",
            "t": "text",
            "text": "việc cần làm ở cuối",
            "x": 5964,
            "y": 715,
            "size": 40,
            "at": "l2:request",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Given a task? Repeat it in your own words, to check you understood.",
          "sub": "Được giao việc? Nhắc lại yêu cầu bằng lời của mình để chắc đã hiểu đúng.",
          "keys": [
            "Nhắc lại yêu cầu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And an email to a teacher is great practice: clear subject, main point first, your request at the end.",
          "sub": "Email gửi thầy cô là bài tập rất tốt: tiêu đề rõ, ý chính ở đầu, việc cần người nhận làm ở cuối."
        }
      ],
      "ref": "p4,p5"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Tháng 11 · Làm việc nhóm",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:stop three"
          },
          {
            "id": "e-q",
            "t": "text",
            "text": "Đóng góp, hay chỉ có mặt?",
            "x": 7932,
            "y": 160,
            "size": 54,
            "at": "l1:contributing",
            "hl": [
              {
                "text": "chỉ có mặt",
                "at": "l1:showing"
              }
            ]
          },
          {
            "id": "e-k-c0",
            "t": "box",
            "x": 7932,
            "y": 270,
            "w": 46,
            "h": 46,
            "at": "l2:clear",
            "stroke": 5
          },
          {
            "id": "e-k-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 252,
            "size": 58,
            "at": "l2:clear+600",
            "color": "accent"
          },
          {
            "id": "e-k-l0",
            "t": "text",
            "text": "Nhận phần rõ ràng",
            "x": 8002,
            "y": 262,
            "size": 42,
            "at": "l2:clear+200"
          },
          {
            "id": "e-k-c1",
            "t": "box",
            "x": 7932,
            "y": 340,
            "w": 46,
            "h": 46,
            "at": "l2:time",
            "stroke": 5
          },
          {
            "id": "e-k-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 322,
            "size": 58,
            "at": "l2:time+600",
            "color": "accent"
          },
          {
            "id": "e-k-l1",
            "t": "text",
            "text": "Xong đúng hạn",
            "x": 8002,
            "y": 332,
            "size": 42,
            "at": "l2:time+200"
          },
          {
            "id": "e-k-c2",
            "t": "box",
            "x": 7932,
            "y": 410,
            "w": 46,
            "h": 46,
            "at": "l2:stuck",
            "stroke": 5
          },
          {
            "id": "e-k-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 392,
            "size": 58,
            "at": "l2:stuck+600",
            "color": "accent"
          },
          {
            "id": "e-k-l2",
            "t": "text",
            "text": "Hỗ trợ khi bạn vướng",
            "x": 8002,
            "y": 402,
            "size": 42,
            "at": "l2:stuck+200"
          },
          {
            "id": "e-k-c3",
            "t": "box",
            "x": 7932,
            "y": 480,
            "w": 46,
            "h": 46,
            "at": "l3:honest",
            "stroke": 5
          },
          {
            "id": "e-k-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 462,
            "size": 58,
            "at": "l3:honest+600",
            "color": "accent"
          },
          {
            "id": "e-k-l3",
            "t": "text",
            "text": "Góp ý thẳng mà tôn trọng",
            "x": 8002,
            "y": 472,
            "size": 42,
            "at": "l3:honest+200"
          },
          {
            "id": "e-c",
            "t": "text",
            "text": "Thử một lần làm điều phối",
            "x": 8772,
            "y": 300,
            "size": 46,
            "at": "l4:coordinating",
            "color": "accent",
            "hl": [
              {
                "text": "điều phối",
                "at": "l4:coordinating"
              }
            ]
          },
          {
            "id": "e-c2",
            "t": "text",
            "text": "chia việc · đặt hạn · nhắc tiến độ",
            "x": 8772,
            "y": 370,
            "size": 36,
            "at": "l4:divide",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three: November. Teamwork. Are you contributing, or just showing up?",
          "sub": "Chặng ba: tháng Mười Một. Làm việc nhóm: bạn đang đóng góp, hay chỉ có mặt?",
          "keys": [
            "chỉ có mặt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A good member takes a clear part, finishes on time, helps when others get stuck.",
          "sub": "Thành viên tốt nhận phần rõ ràng, xong đúng hạn, hỗ trợ khi người khác vướng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And gives honest but respectful feedback.",
          "sub": "Và góp ý thẳng thắn mà tôn trọng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Once, try coordinating: divide tasks, set deadlines, check progress.",
          "sub": "Thử làm điều phối một lần: chia việc, đặt hạn, nhắc tiến độ.",
          "keys": [
            "điều phối"
          ]
        }
      ],
      "ref": "p7"
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
            "id": "e-my",
            "t": "text",
            "text": "Ôm hết bài nhóm = nhóm giỏi",
            "x": 7932,
            "y": 590,
            "size": 46,
            "at": "l1:whole",
            "color": "muted"
          },
          {
            "id": "e-myx",
            "t": "strike",
            "over": "e-my",
            "at": "l2:coordination"
          },
          {
            "id": "e-r",
            "t": "text",
            "text": "Phối hợp: giúp người khác xong",
            "x": 7932,
            "y": 670,
            "size": 50,
            "at": "l2:finish",
            "color": "accent",
            "hl": [
              {
                "text": "Phối hợp",
                "at": "l2:coordination"
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
          "say": "Remember Lan, fixing the whole report alone? Many think that's great teamwork.",
          "sub": "Nhớ Lan một mình sửa cả bài không? Nhiều bạn nghĩ ôm hết bài nhóm là làm việc nhóm giỏi.",
          "keys": [
            "ôm hết bài nhóm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Employers want coordination: dividing work, setting deadlines, helping others finish their part.",
          "sub": "Nhà tuyển dụng muốn thấy phối hợp: chia việc, đặt hạn, giúp người khác xong phần của họ.",
          "keys": [
            "phối hợp"
          ]
        }
      ],
      "ref": "p8"
    },
    {
      "id": "b09",
      "module": "BRK-07",
      "data": {
        "question": "Điểm luôn cao, vậy sao buổi phỏng vấn thực tập của Lan lại hỏng?",
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
          "say": "Lan's grades are always high. So why will her internship interview go wrong?",
          "sub": "Điểm luôn cao, vậy sao buổi phỏng vấn thực tập của Lan lại hỏng?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p8"
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
            "text": "④ Tháng 12 · Trách nhiệm",
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
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "laptop",
                "warning"
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
            "at": "l2",
            "caption": "Thứ Hai · phần mềm báo lỗi",
            "icon": "warning"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Giữ lời: thứ Sáu là thứ Sáu",
            "x": 60,
            "y": 1250,
            "size": 42,
            "at": "l3:Friday",
            "hl": [
              {
                "text": "Giữ lời",
                "at": "l3:word"
              }
            ]
          },
          {
            "id": "f-b",
            "t": "text",
            "text": "Không kịp → báo trước + cách xử lý",
            "x": 60,
            "y": 1330,
            "size": 40,
            "at": "l3:early"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four: December. Dũng handles the data for a group project.",
          "sub": "Chặng bốn: tháng Mười Hai. Dũng nhận phần xử lý số liệu cho bài nhóm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Monday. The software shows an error. Eh, I'll sort it out later.",
          "sub": "Thứ Hai. Phần mềm báo lỗi. Ờ, để tính sau.",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Responsibility starts with keeping your word: Friday means Friday. Can't make it? Say so early, with a fix.",
          "sub": "Trách nhiệm bắt đầu từ giữ lời: hẹn thứ Sáu là thứ Sáu. Không kịp thì báo sớm, kèm cách xử lý.",
          "keys": [
            "giữ lời"
          ]
        }
      ],
      "ref": "p10,p12"
    },
    {
      "id": "b11",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Tối trước hạn nộp",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Im lặng đến hạn",
          "why": "Ai hỏi cũng “đang làm”, tối trước hạn mới báo: cả nhóm thức trắng, nộp một bản vá víu.",
          "rule": "Không kịp thì báo sớm, đừng im đến hạn"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Thursday night. Guys, the data won't run. Deadline's tomorrow!",
          "sub": "Tối thứ Năm. Mọi người ơi, số liệu không chạy. Mai nộp rồi!",
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
          "say": "All week: working on it. Now the whole group stays up, for a patched-up report.",
          "sub": "Cả tuần ai hỏi cũng “đang làm”. Giờ cả nhóm thức trắng, nộp bản vá víu.",
          "keys": [
            "thức trắng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Back to Monday.",
          "sub": "Tua lại! Về thứ Hai.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "The software shows an error. I can't run it yet. Does anyone know how?",
          "sub": "Phần mềm báo lỗi, mình chưa chạy được, ai biết cách không?",
          "phase": "redo",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Days left to ask a friend or the teacher. Say it early.",
          "sub": "Còn mấy ngày để nhờ bạn khác hoặc hỏi thầy. Không kịp thì báo sớm.",
          "phase": "redo",
          "keys": [
            "báo sớm"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p12,p13"
    },
    {
      "id": "b12",
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
            "id": "f-r",
            "t": "text",
            "text": "Không kịp: báo sớm, đừng im",
            "x": 60,
            "y": 1430,
            "size": 52,
            "at": "l1:early",
            "color": "accent",
            "hl": [
              {
                "text": "báo sớm",
                "at": "l1:early"
              }
            ]
          },
          {
            "id": "f-l",
            "t": "text",
            "text": "Nhận lỗi:",
            "x": 60,
            "y": 1530,
            "size": 48,
            "at": "l2:mistakes",
            "hl": [
              {
                "text": "Nhận lỗi",
                "at": "l2:Owning"
              }
            ]
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "“Nhầm bảng hai, đã sửa, đã soát”",
            "x": 60,
            "y": 1605,
            "size": 36,
            "at": "l2:table two"
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "> tìm lý do",
            "x": 60,
            "y": 1680,
            "size": 44,
            "at": "l3:excuse",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Can't make it? Say so early. Never go silent until the deadline.",
          "sub": "Không kịp thì báo sớm, đừng im đến hạn.",
          "keys": [
            "báo sớm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Owning mistakes counts too: I got table two wrong. I fixed it and rechecked the whole table.",
          "sub": "Trách nhiệm cũng là dám nhận lỗi: “Mình nhầm số liệu ở bảng hai, đã sửa và kiểm tra lại cả bảng.”",
          "keys": [
            "dám nhận lỗi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "That builds more trust than any excuse.",
          "sub": "Câu đó tạo tin tưởng hơn mọi lý do."
        }
      ],
      "ref": "p10,p11,p13"
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
            "text": "⑤ Tháng 1 · Tự học",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:stop five"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "label": "Áp phích câu lạc bộ",
              "actor": {
                "id": "dung",
                "side": "left"
              },
              "contact": {
                "name": "Anh trưởng ban",
                "illus": "man-office-worker"
              },
              "messages": [
                {
                  "from": "me",
                  "text": "Em làm theo video tới bước ba thì báo lỗi. Em gửi ảnh chụp ạ.",
                  "at": "l4"
                },
                {
                  "from": "me",
                  "text": "Em có ba câu hỏi: 1) chỉnh cỡ chữ… 2) xuất ảnh… 3) màu nền…",
                  "at": "l4:three"
                }
              ]
            },
            "at": "l3",
            "caption": "Dũng nhắn anh trưởng ban",
            "icon": "artist-palette"
          },
          {
            "id": "g-old",
            "t": "text",
            "text": "Lần trước: hỏi từng bước nhỏ",
            "x": 2028,
            "y": 1250,
            "size": 44,
            "at": "l2:step",
            "color": "coral"
          },
          {
            "id": "g-old2",
            "t": "text",
            "text": "→ trả lời ngắn dần, giao người khác",
            "x": 2028,
            "y": 1320,
            "size": 38,
            "at": "l2:shorter",
            "color": "muted"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "1. Xem video, làm bản nháp",
            "x": 2028,
            "y": 1420,
            "size": 44,
            "at": "l3:draft"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "2. Ghi: chỗ được, chỗ vướng",
            "x": 2028,
            "y": 1485,
            "size": 44,
            "at": "l3:stuck"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "3. Gom 3 câu hỏi + ảnh chụp",
            "x": 2028,
            "y": 1550,
            "size": 44,
            "at": "l4:three",
            "color": "accent",
            "hl": [
              {
                "text": "3 câu hỏi",
                "at": "l4:three"
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
          "say": "Stop five: January. Self-learning, starring Dũng and new design software.",
          "sub": "Chặng năm: tháng Một. Tự học, vai chính: Dũng và một phần mềm thiết kế mới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Last time he asked his club leader about every tiny step. Replies got shorter, and the next task went to someone else.",
          "sub": "Lần trước Dũng hỏi anh trưởng ban từng bước nhỏ. Anh trả lời ngắn dần, rồi giao việc tiếp cho người khác.",
          "keys": [
            "giao việc tiếp cho người khác"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "This time, a poster. He watches a guide, makes a draft, notes what works and where he's stuck.",
          "sub": "Lần này làm áp phích: Dũng xem video, làm bản nháp, ghi lại chỗ được, chỗ vướng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then one message: three specific questions, with a screenshot.",
          "sub": "Rồi nhắn một lần: ba câu hỏi cụ thể, kèm ảnh chụp.",
          "keys": [
            "ba câu hỏi cụ thể"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try first, take notes, then ask specifically.",
          "sub": "Thử trước, ghi lại, rồi hỏi cho cụ thể.",
          "keys": [
            "hỏi cho cụ thể"
          ]
        }
      ],
      "ref": "p16,p17"
    },
    {
      "id": "b14",
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
            "id": "g-n",
            "t": "text",
            "text": "Ghi lại, khỏi hỏi lại",
            "x": 2028,
            "y": 1650,
            "size": 46,
            "at": "l1:twice"
          },
          {
            "id": "g-p",
            "t": "text",
            "text": "Gặp vấn đề: mang 1–2 phương án",
            "x": 2028,
            "y": 1730,
            "size": 44,
            "at": "l2:solutions",
            "color": "accent",
            "hl": [
              {
                "text": "1–2 phương án",
                "at": "l2:solutions"
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
          "say": "Write down what you're shown, so you never ask the same thing twice.",
          "sub": "Ghi lại điều được chỉ, để không hỏi lại cùng một câu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And bring one or two possible solutions, not just: there's a problem.",
          "sub": "Gặp vấn đề, mang theo một, hai phương án, thay vì chỉ báo “có vấn đề”.",
          "keys": [
            "một, hai phương án"
          ]
        }
      ],
      "ref": "p14,p15"
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
            "at": "l3:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Tháng 2 · Thời gian, góp ý",
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
              "set": "campus",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "explain",
                  "face": "worried"
                }
              ],
              "props": [
                "bar-chart"
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
            "at": "l3",
            "caption": "Thuyết trình môn Marketing",
            "icon": "bar-chart"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Tối: danh sách việc ngày mai",
            "x": 3996,
            "y": 1250,
            "size": 44,
            "at": "l1:list"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Việc lớn → bước nhỏ",
            "x": 3996,
            "y": 1320,
            "size": 44,
            "at": "l1:small"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Chồng hạn: hỏi ưu tiên gì",
            "x": 3996,
            "y": 1390,
            "size": 44,
            "at": "l2:first",
            "hl": [
              {
                "text": "ưu tiên",
                "at": "l2:first"
              }
            ]
          },
          {
            "id": "h-c",
            "t": "text",
            "text": "Cô: “slide quá nhiều chữ”",
            "x": 3996,
            "y": 1490,
            "size": 46,
            "at": "l3:text",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six: February. Each evening, list tomorrow's tasks, and break big ones into small steps.",
          "sub": "Chặng sáu: tháng Hai. Mỗi tối viết danh sách việc ngày mai, chia việc lớn thành bước nhỏ.",
          "keys": [
            "danh sách việc ngày mai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Deadlines piling up? Ask whoever gave the work which part comes first.",
          "sub": "Nhiều hạn chồng nhau? Hỏi người giao việc nên ưu tiên phần nào trước.",
          "keys": [
            "ưu tiên"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then feedback. The teacher says Dũng's marketing slides have too much text.",
          "sub": "Rồi đến góp ý. Cô nhận xét slide môn Marketing của nhóm Dũng quá nhiều chữ."
        }
      ],
      "ref": "p18,p20"
    },
    {
      "id": "b16",
      "module": "BRK-04",
      "data": {
        "title": "Khi cô nhận xét slide",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "“Dạ, nhóm em muốn trình bày đủ ý nên…”",
        "right": "“Em cảm ơn cô. Mỗi slide bao nhiêu chữ là vừa ạ?”",
        "wrongIllus": "speaking-head",
        "rightIllus": "ear"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Well, we wanted to cover every point, so…",
          "sub": "Dạ, nhóm em muốn trình bày đủ ý nên mới…"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Thank you. How much text is right for one slide?",
          "sub": "Dạ em cảm ơn cô. Một slide khoảng bao nhiêu chữ là vừa ạ?"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p20"
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
            "id": "h-a",
            "t": "text",
            "text": "Giải thích một tràng → vẫn trừ điểm",
            "x": 3996,
            "y": 1590,
            "size": 40,
            "at": "l1:explanation",
            "color": "muted"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "Hỏi rõ → hướng dẫn để sửa",
            "x": 3996,
            "y": 1660,
            "size": 44,
            "at": "l2:guide"
          },
          {
            "id": "h-r",
            "t": "text",
            "text": "Nghe hết · hỏi rõ · cảm ơn · sửa",
            "x": 3996,
            "y": 1750,
            "size": 48,
            "at": "l3:listen",
            "color": "accent",
            "hl": [
              {
                "text": "cảm ơn",
                "at": "l3:thank"
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
          "say": "Version one: a long explanation, and the final slides are still full of text. Marks lost.",
          "sub": "Cách đầu: giải thích một tràng, bài cuối kỳ slide vẫn kín chữ, bị trừ điểm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Version two turns a comment into a guide he can use next time.",
          "sub": "Cách sau biến lời nhận xét thành hướng dẫn cụ thể để sửa lần tới.",
          "keys": [
            "hướng dẫn cụ thể"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Listen fully, ask, thank, fix, then show the change. Sulking makes people stop helping.",
          "sub": "Nghe hết, hỏi rõ, cảm ơn, sửa, rồi cho người góp ý thấy thay đổi. Tự ái thì lần sau chẳng ai góp ý.",
          "keys": [
            "Nghe hết, hỏi rõ, cảm ơn, sửa"
          ]
        }
      ],
      "ref": "p19,p20,p21"
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
            "at": "l2",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Tháng 3 · Phỏng vấn thực tập",
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
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "lan",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l3",
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
            "at": "l1:interview",
            "caption": "Phỏng vấn thực tập",
            "icon": "office-building"
          },
          {
            "id": "i-q",
            "t": "text",
            "text": "“Kể một lần em phối hợp”",
            "x": 5964,
            "y": 1250,
            "size": 42,
            "at": "l2:team"
          },
          {
            "id": "i-a",
            "t": "text",
            "text": "“Em… tự làm hết ạ”",
            "x": 5964,
            "y": 1330,
            "size": 50,
            "at": "l3:myself",
            "color": "coral"
          },
          {
            "id": "i-c",
            "t": "text",
            "text": "Giỏi, nhưng chưa thấy phối hợp",
            "x": 5964,
            "y": 1420,
            "size": 44,
            "at": "l4:others",
            "color": "muted"
          },
          {
            "id": "i-r",
            "t": "text",
            "text": "Làm hết một mình ≠ làm việc nhóm",
            "x": 5964,
            "y": 1520,
            "size": 46,
            "at": "l5:alone",
            "color": "accent",
            "hl": [
              {
                "text": "≠ làm việc nhóm",
                "at": "l5:teamwork"
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
          "say": "Stop seven: March, Lan's first internship interview. Her interviewer, Cô Hoa, is calm and precise.",
          "sub": "Chặng bảy: tháng Ba, buổi phỏng vấn thực tập đầu tiên của Lan. Người phỏng vấn, cô Hoa, điềm tĩnh và rành mạch.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Tell me about a time you worked with a team.",
          "sub": "Em kể một lần em phối hợp với nhóm nhé.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Well… I usually stayed up late and did everything myself.",
          "sub": "Dạ… thường em thức khuya tự làm hết ạ.",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "You're clearly good. But I don't see you working with others yet.",
          "sub": "Em giỏi, nhưng cô chưa thấy em làm việc với người khác.",
          "face": "neutral"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "There's the answer to our riddle. Doing it all alone is not teamwork.",
          "sub": "Lời giải câu đố đây. Làm hết một mình không phải là làm việc nhóm.",
          "keys": [
            "không phải là làm việc nhóm"
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
      "ref": "p8,p9"
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
            "id": "i-x",
            "t": "text",
            "text": "“Tôi làm việc nhóm tốt”",
            "x": 5964,
            "y": 1630,
            "size": 44,
            "at": "l1:good",
            "color": "muted"
          },
          {
            "id": "i-xx",
            "t": "strike",
            "over": "i-x",
            "at": "l1:anyone"
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "Tình huống · nhiệm vụ · làm · kết quả",
            "x": 5964,
            "y": 1710,
            "size": 34,
            "at": "l2:situation",
            "color": "accent",
            "hl": [
              {
                "text": "kết quả",
                "at": "l2:result"
              }
            ]
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Năm cuối: gộp còn 3 bước",
            "x": 5964,
            "y": 1780,
            "size": 40,
            "at": "l3:final",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "I'm good at teamwork convinces nobody. Anyone can say it.",
          "sub": "“Tôi làm việc nhóm tốt” không thuyết phục ai. Ai cũng nói được.",
          "keys": [
            "không thuyết phục ai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Prepare a short story per skill: situation, task, what you did, result.",
          "sub": "Chuẩn bị một câu chuyện ngắn cho mỗi kỹ năng: tình huống, nhiệm vụ, việc bạn làm, kết quả.",
          "keys": [
            "tình huống, nhiệm vụ, việc bạn làm, kết quả"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "By final year, merge the first two: three steps, like in the first interview lesson.",
          "sub": "Đến năm cuối, gộp hai phần đầu làm một: ba bước, như bài về buổi phỏng vấn đầu tiên."
        }
      ],
      "ref": "p22"
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
            "text": "Cuối tháng 3 · 23:00",
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
                "laptop",
                "crescent-moon",
                "notebook"
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
            "at": "l1:same room",
            "caption": "Vẫn phòng trọ ấy · bài nhóm mới",
            "icon": "notebook"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Khảo sát ít người trả lời",
            "x": 7932,
            "y": 1250,
            "size": 42,
            "at": "l2:replies"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "→ rút gọn bảng hỏi, nhờ CLB",
            "x": 7932,
            "y": 1315,
            "size": 36,
            "at": "l3:shorter"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "→ 1 tuần: đủ phiếu, đúng hạn",
            "x": 7932,
            "y": 1380,
            "size": 40,
            "at": "l3:week",
            "color": "accent",
            "hl": [
              {
                "text": "đủ phiếu",
                "at": "l3:enough"
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
          "say": "Late March, eleven p.m. Same room, new group project. No fixing everyone's parts tonight.",
          "sub": "Cuối tháng Ba, mười một giờ đêm. Vẫn phòng ấy, bài nhóm mới. Tối nay không sửa hộ ai nữa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Our market research survey got too few replies.",
          "sub": "Khảo sát môn Nghiên cứu thị trường của nhóm quá ít người trả lời.",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "I suggested a shorter form, and asked clubs to share it. One week later: enough answers, on time!",
          "sub": "Mình đề xuất rút gọn bảng hỏi, nhờ các câu lạc bộ chia sẻ. Một tuần sau: đủ phiếu, nộp đúng hạn!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "She writes it into her diary in four parts. Now that's a real story.",
          "sub": "Lan ghi vào nhật ký theo bốn phần. Giờ mới là một câu chuyện thật.",
          "keys": [
            "câu chuyện thật"
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
      "ref": "p23"
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
            "id": "j-k-c0",
            "t": "box",
            "x": 7932,
            "y": 1490,
            "w": 46,
            "h": 46,
            "at": "l1:communication",
            "stroke": 5
          },
          {
            "id": "j-k-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1472,
            "size": 58,
            "at": "l1:communication+600",
            "color": "accent"
          },
          {
            "id": "j-k-l0",
            "t": "text",
            "text": "Giao tiếp · Làm nhóm",
            "x": 8002,
            "y": 1482,
            "size": 42,
            "at": "l1:communication+200"
          },
          {
            "id": "j-k-c1",
            "t": "box",
            "x": 7932,
            "y": 1556,
            "w": 46,
            "h": 46,
            "at": "l1:mistake",
            "stroke": 5
          },
          {
            "id": "j-k-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1538,
            "size": 58,
            "at": "l1:mistake+600",
            "color": "accent"
          },
          {
            "id": "j-k-l1",
            "t": "text",
            "text": "Nhận lỗi và sửa",
            "x": 8002,
            "y": 1548,
            "size": 42,
            "at": "l1:mistake+200"
          },
          {
            "id": "j-k-c2",
            "t": "box",
            "x": 7932,
            "y": 1622,
            "w": 46,
            "h": 46,
            "at": "l1:learning",
            "stroke": 5
          },
          {
            "id": "j-k-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1604,
            "size": 58,
            "at": "l1:learning+600",
            "color": "accent"
          },
          {
            "id": "j-k-l2",
            "t": "text",
            "text": "Tự học cái mới",
            "x": 8002,
            "y": 1614,
            "size": 42,
            "at": "l1:learning+200"
          },
          {
            "id": "j-k-c3",
            "t": "box",
            "x": 7932,
            "y": 1688,
            "w": 46,
            "h": 46,
            "at": "l1:feedback",
            "stroke": 5
          },
          {
            "id": "j-k-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1670,
            "size": 58,
            "at": "l1:feedback+600",
            "color": "accent"
          },
          {
            "id": "j-k-l3",
            "t": "text",
            "text": "Nhận góp ý",
            "x": 8002,
            "y": 1680,
            "size": 42,
            "at": "l1:feedback+200"
          },
          {
            "id": "j-r",
            "t": "text",
            "text": "Ghi ngay, đừng đợi năm cuối",
            "x": 7932,
            "y": 1770,
            "size": 50,
            "at": "l2:wait",
            "color": "accent",
            "hl": [
              {
                "text": "đừng đợi năm cuối",
                "at": "l2:final year"
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
          "say": "Collect five stories: communication, teamwork, a mistake fixed, learning something new, taking feedback.",
          "sub": "Gom năm câu chuyện: giao tiếp, làm nhóm, một lần nhận lỗi và sửa, một lần tự học, một lần nhận góp ý.",
          "keys": [
            "năm câu chuyện"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Write each one down when it happens. Don't wait for final year.",
          "sub": "Ghi vào nhật ký ngay khi chuyện xảy ra, đừng đợi năm cuối.",
          "keys": [
            "đừng đợi năm cuối"
          ]
        }
      ],
      "ref": "p24"
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
            "at": "l1:result",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:early",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:thank",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l4:story",
            "fit": "I",
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
            "y": 420,
            "at": "l1:result"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 760,
            "y": 1430,
            "at": "l2:early"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4796,
            "y": 1780,
            "at": "l3:thank+900"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 6724,
            "y": 1790,
            "at": "l4:story+600"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: result first, then details.",
          "sub": "Tóm lại: kết quả trước, chi tiết sau.",
          "keys": [
            "kết quả trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Can't make it? Say so early.",
          "sub": "Không kịp thì báo sớm.",
          "keys": [
            "báo sớm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Listen, ask, thank, fix.",
          "sub": "Nghe hết, hỏi rõ, cảm ơn, sửa.",
          "keys": [
            "cảm ơn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And one real story for each skill.",
          "sub": "Và mỗi kỹ năng một câu chuyện thật.",
          "keys": [
            "một câu chuyện thật"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The realest skills gym is an internship. Next lesson: how to choose one.",
          "sub": "Phòng luyện thật nhất là một kỳ thực tập. Bài tiếp theo: cách chọn nơi thực tập.",
          "keys": [
            "kỳ thực tập"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s29",
      "module": "QUIZ-01",
      "ref": "questions[10]",
      "data": {
        "q": "A student did all the group work alone, what problem appeared at her internship interview?",
        "options": [
          "She had no real story about working with others when they asked for one",
          "The interviewer gave her the job at once because of her high grades",
          "She was asked to lead the company, which she was not ready for"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "busts-in-silhouette",
        "why": "Điểm cao nhưng không có chuyện phối hợp nào để kể: giỏi, mà chưa thấy làm cùng ai."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A student did all the group work alone, what problem appeared at her internship interview?",
          "sub": "Một bạn luôn tự làm hết bài nhóm, buổi phỏng vấn thực tập gặp vấn đề gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "She had no real story about working with others when they asked for one.",
          "sub": "Được hỏi, bạn ấy không có chuyện phối hợp nào để kể."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "High grades, but no proof she can work with people.",
          "sub": "Điểm cao, nhưng chưa thấy bạn ấy làm việc cùng ai."
        }
      ]
    },
    {
      "id": "s30",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi để luyện tiếp",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Pick one skill, take one clear role in your next group project, and write the story in four parts. Then try the forty questions!",
          "sub": "Chọn một kỹ năng, nhận một vai rõ trong bài nhóm tới, ghi lại câu chuyện bốn phần. Rồi làm bốn mươi câu nhé!",
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
