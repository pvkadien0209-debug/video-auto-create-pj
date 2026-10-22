// bar-supervisor-conditions--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-supervisor-conditions--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "bar-trainee-registration",
    "slug": "bar-supervisor-conditions",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Luật sư hướng dẫn tập sự phải đáp ứng điều kiện gì?",
    "series": "Bắt đầu tập sự đúng thủ tục — chọn nơi tập sự, luật sư hướng dẫn và đăng ký với Đoàn luật sư"
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
  "anchor": {
    "type": "number",
    "value": "3",
    "ref": "p1"
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
            "id": "a-3",
            "t": "text",
            "text": "3",
            "x": 220,
            "y": 60,
            "size": 300,
            "at": "l1:three",
            "color": "accent"
          },
          {
            "id": "a-3y",
            "t": "text",
            "text": "3 năm hành nghề",
            "x": 60,
            "y": 420,
            "size": 60,
            "at": "l2:years",
            "hl": [
              {
                "text": "3 năm",
                "at": "l2:years"
              }
            ]
          },
          {
            "id": "a-3p",
            "t": "text",
            "text": "≤ 3 người tập sự",
            "x": 60,
            "y": 520,
            "size": 60,
            "at": "l2:most",
            "color": "coral",
            "hl": [
              {
                "text": "≤ 3 người",
                "at": "l2:trainees"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: khoản 1 Điều 14 Luật Luật sư (VBHN 03) · khoản 1 Điều 8 Thông tư 10/2021/TT-BTP",
            "x": 60,
            "y": 735,
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
          "say": "One number, written twice in a single article: three.",
          "sub": "Một con số, xuất hiện hai lần trong cùng một điều luật: ba.",
          "keys": [
            "ba"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three years of practice. Three trainees at most.",
          "sub": "Ba năm hành nghề. Tối đa ba người tập sự.",
          "keys": [
            "Ba năm hành nghề"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Remember this three. It is about to knock on Thảo's door.",
          "sub": "Nhớ con số ba này. Nó sắp gõ cửa Thảo."
        }
      ],
      "ref": "intro,p1"
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
            "at": "l4",
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
            "x": 900,
            "y": 110,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "balance-scale",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "binh",
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
            "caption": "Sáng thứ Hai · buổi gặp đầu",
            "icon": "page-facing-up"
          },
          {
            "id": "a-paper",
            "t": "text",
            "text": "“Trên giấy thôi mà”",
            "x": 900,
            "y": 620,
            "size": 44,
            "at": "l4:paper",
            "color": "coral",
            "hl": [
              {
                "text": "Trên giấy",
                "at": "l4:paper"
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
          "say": "Meet Thảo. She chose a small law office for her traineeship.",
          "sub": "Đây là Thảo. Cô chọn một văn phòng luật nhỏ để tập sự."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Monday morning, first meeting, acceptance form on the desk.",
          "sub": "Sáng thứ Hai, buổi gặp đầu, Giấy xác nhận nằm trên bàn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Uncle Bình, her uncle, who runs the office. A lawyer for decades.",
          "sub": "Còn đây là Bác Bình, bác ruột Thảo, người đứng đầu văn phòng. Làm luật sư mấy chục năm.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "I'll write my name as your supervisor. I guide three already, but it's just paper.",
          "sub": "Bác ghi tên bác hướng dẫn cháu. Bác đang hướng dẫn ba đứa rồi, nhưng trên giấy thôi mà.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Decades of practice. Surely he qualifies? That is exactly the detail to check.",
          "sub": "Mấy chục năm hành nghề. Chắc chắn đủ điều kiện? Đó chính là chi tiết cần kiểm.",
          "keys": [
            "chi tiết cần kiểm"
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
      "ref": "intro,p7"
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
            "text": "Luật sư hướng dẫn cần gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:supervisor",
            "hl": [
              {
                "text": "cần gì",
                "at": "l1:need"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: cứ lâu năm là được",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:long",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:enough"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: đủ cùng lúc",
            "x": 2028,
            "y": 270,
            "size": 60,
            "at": "l2:once",
            "color": "accent",
            "hl": [
              {
                "text": "đủ cùng lúc",
                "at": "l2:once"
              }
            ]
          },
          {
            "id": "b-p0",
            "t": "box",
            "x": 2028,
            "y": 400,
            "w": 500,
            "h": 110,
            "at": "l3:conditions",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-p1",
            "t": "box",
            "x": 2568,
            "y": 400,
            "w": 500,
            "h": 110,
            "at": "l3:check",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-p2",
            "t": "box",
            "x": 3108,
            "y": 400,
            "w": 500,
            "h": 110,
            "at": "l3:change",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-pt0",
            "t": "text",
            "text": "① Điều kiện",
            "x": 2053,
            "y": 428,
            "size": 46,
            "at": "l3:conditions+200"
          },
          {
            "id": "b-pt1",
            "t": "text",
            "text": "② Kiểm trước",
            "x": 2593,
            "y": 428,
            "size": 46,
            "at": "l3:check+200"
          },
          {
            "id": "b-pt2",
            "t": "text",
            "text": "③ Khi thay đổi",
            "x": 3133,
            "y": 428,
            "size": 46,
            "at": "l3:change+200"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Căn cứ: Điều 14 Luật Luật sư (VBHN 03) · Điều 8, 13 Thông tư 10/2021/TT-BTP",
            "x": 2028,
            "y": 735,
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
          "say": "So what does a supervisor really need?",
          "sub": "Vậy luật sư hướng dẫn thật sự cần gì?",
          "keys": [
            "cần gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not long years alone. Years are not enough. All the conditions, at once.",
          "sub": "Không phải cứ lâu năm. Đủ năm chưa đủ. Phải đủ mọi điều kiện, cùng một lúc.",
          "keys": [
            "cùng một lúc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three parts: the conditions, how to check them, and what to do when things change.",
          "sub": "Ba phần: điều kiện, cách kiểm, và việc cần làm khi có thay đổi."
        }
      ],
      "ref": "intro,p4"
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
          },
          {
            "at": 150,
            "fit": "C",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Luật Luật sư · Điều 14",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First"
          },
          {
            "id": "c-who",
            "t": "text",
            "text": "Tổ chức phân công người hướng dẫn",
            "x": 3996,
            "y": 175,
            "size": 44,
            "at": "l2:assigns",
            "hl": [
              {
                "text": "Tổ chức phân công",
                "at": "l2:assigns"
              }
            ]
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 285,
            "w": 46,
            "h": 46,
            "at": "l3:three",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 267,
            "size": 58,
            "at": "l3:three+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Ít nhất ba năm hành nghề",
            "x": 4064,
            "y": 275,
            "size": 46,
            "at": "l3:three+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 380,
            "w": 46,
            "h": 46,
            "at": "l3:discipline",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 362,
            "size": 58,
            "at": "l3:discipline+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Không đang bị xem xét kỷ luật",
            "x": 4064,
            "y": 370,
            "size": 46,
            "at": "l3:discipline+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 475,
            "w": 46,
            "h": 46,
            "at": "l4:three",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 457,
            "size": 58,
            "at": "l4:three+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Không quá ba người cùng lúc",
            "x": 4064,
            "y": 465,
            "size": 46,
            "at": "l4:three+200"
          },
          {
            "id": "c-amend",
            "t": "text",
            "text": "Luật đang sửa: 17/10–21/11/2026",
            "x": 4896,
            "y": 600,
            "size": 40,
            "at": "l5:amended",
            "color": "coral",
            "hl": [
              {
                "text": "đang sửa",
                "at": "l5:amended"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: khoản 1 Điều 14 Luật Luật sư (VBHN 03)",
            "x": 3996,
            "y": 735,
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
          "say": "First part. Start with the Law on Lawyers, Article fourteen.",
          "sub": "Phần một. Bắt đầu từ Luật Luật sư, Điều 14."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The practice organisation assigns the supervisor. Not the trainee, not a friend.",
          "sub": "Tổ chức hành nghề luật sư phân công người hướng dẫn. Không phải người tập sự, không phải người quen.",
          "keys": [
            "phân công"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The supervisor needs at least three years of practice, and no pending discipline.",
          "sub": "Người hướng dẫn phải hành nghề ít nhất ba năm, và không đang bị xem xét xử lý kỷ luật.",
          "keys": [
            "ít nhất ba năm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And guides no more than three trainees at the same time.",
          "sub": "Và không hướng dẫn quá ba người tập sự cùng một thời điểm.",
          "keys": [
            "quá ba người"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One note: the law is being amended this session, until November twenty first. Recheck afterwards.",
          "sub": "Lưu ý: Luật đang được sửa ở kỳ họp từ 17/10 đến 21/11/2026. Kiểm lại sau kỳ họp.",
          "keys": [
            "Kiểm lại sau kỳ họp"
          ]
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s04",
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
              "d-10",
              "d-10x"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l5",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thông tư 10 · Điều 8",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second"
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 180,
            "w": 46,
            "h": 46,
            "at": "l2:Vietnamese",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 162,
            "size": 58,
            "at": "l2:Vietnamese+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Luật sư Việt Nam, đang hành nghề",
            "x": 6032,
            "y": 170,
            "size": 38,
            "at": "l2:Vietnamese+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 258,
            "w": 46,
            "h": 46,
            "at": "l2:years",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 240,
            "size": 58,
            "at": "l2:years+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Đủ 03 năm kinh nghiệm",
            "x": 6032,
            "y": 248,
            "size": 38,
            "at": "l2:years+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 336,
            "w": 46,
            "h": 46,
            "at": "l2:standing",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 318,
            "size": 58,
            "at": "l2:standing+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Có uy tín",
            "x": 6032,
            "y": 326,
            "size": 38,
            "at": "l2:standing+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 414,
            "w": 46,
            "h": 46,
            "at": "l3:discipline",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 396,
            "size": 58,
            "at": "l3:discipline+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Không đang bị kỷ luật",
            "x": 6032,
            "y": 404,
            "size": 38,
            "at": "l3:discipline+200"
          },
          {
            "id": "d-c4",
            "t": "box",
            "x": 5964,
            "y": 492,
            "w": 46,
            "h": 46,
            "at": "l3:year",
            "stroke": 5
          },
          {
            "id": "d-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 474,
            "size": 58,
            "at": "l3:year+600",
            "color": "accent"
          },
          {
            "id": "d-l4",
            "t": "text",
            "text": "Xử phạt xong ≥ 01 năm",
            "x": 6032,
            "y": 482,
            "size": 38,
            "at": "l3:year+200"
          },
          {
            "id": "d-10",
            "t": "text",
            "text": "10 năm, đang bị xem xét",
            "x": 6864,
            "y": 200,
            "size": 46,
            "at": "l4:ten",
            "color": "muted"
          },
          {
            "id": "d-10x",
            "t": "text",
            "text": "→ chưa được hướng dẫn",
            "x": 6864,
            "y": 280,
            "size": 46,
            "at": "l4:yet",
            "color": "coral",
            "hl": [
              {
                "text": "chưa được",
                "at": "l4:yet"
              }
            ]
          },
          {
            "id": "d-key",
            "t": "text",
            "text": "Đủ năm chưa đủ: sạch kỷ luật",
            "x": 6864,
            "y": 400,
            "size": 34,
            "at": "l5:clean",
            "color": "accent"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: khoản 1 Điều 8 Thông tư 10/2021/TT-BTP",
            "x": 5964,
            "y": 735,
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
          "say": "Second: Circular ten, Article eight, spells it out.",
          "sub": "Phần hai: Thông tư 10, Điều 8, nói rõ thêm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A Vietnamese lawyer practising in the organisation, three years of practice, and good standing.",
          "sub": "Luật sư Việt Nam đang hành nghề trong tổ chức, đủ ba năm kinh nghiệm, có uy tín.",
          "keys": [
            "có uy tín"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not under discipline, not under review. Fined in practice? One full year after serving it.",
          "sub": "Không trong thời gian kỷ luật, không đang bị xem xét. Từng bị xử phạt hành chính? Qua đủ một năm sau khi chấp hành xong.",
          "keys": [
            "một năm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So a lawyer with ten years, but under disciplinary review, cannot supervise yet.",
          "sub": "Vậy một luật sư mười năm kinh nghiệm mà đang bị xem xét kỷ luật thì vẫn chưa được hướng dẫn.",
          "keys": [
            "chưa được hướng dẫn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Enough years is not enough. The record must be clean too.",
          "sub": "Đủ năm chưa đủ; còn phải sạch hồ sơ kỷ luật.",
          "keys": [
            "sạch hồ sơ kỷ luật"
          ]
        }
      ],
      "ref": "p3,p4,p5"
    },
    {
      "id": "s05",
      "module": "BRK-04",
      "data": {
        "title": "Hiểu lầm thường gặp",
        "wrong": "Luật sư lâu năm nào cũng hướng dẫn được",
        "right": "Phải đủ cùng lúc mọi điều kiện ở Điều 8",
        "wrongIllus": "older-person",
        "rightIllus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Any veteran lawyer can supervise? A common myth.",
          "sub": "Luật sư lâu năm nào cũng hướng dẫn được? Hiểu lầm phổ biến."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Every condition in Article eight, all at once.",
          "sub": "Phải đủ cùng lúc mọi điều kiện ở Điều 8.",
          "keys": [
            "cùng lúc"
          ]
        }
      ],
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Sáng thứ Hai · Người thứ tư",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 150,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "think",
                  "face": "thinking"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up",
                "pen"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:Monday",
            "caption": "Sáng thứ Hai · ghi tên lên giấy",
            "icon": "page-facing-up"
          },
          {
            "id": "e-n",
            "t": "text",
            "text": "Đang hướng dẫn: 3",
            "x": 7932,
            "y": 170,
            "size": 56,
            "at": "l1:three",
            "color": "coral",
            "hl": [
              {
                "text": "3",
                "at": "l1:three"
              }
            ]
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "Thảo = người thứ 4?",
            "x": 7932,
            "y": 260,
            "size": 52,
            "at": "l2:fourth"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third: back to Monday. Uncle Bình already guides three trainees.",
          "sub": "Phần ba: trở lại sáng thứ Hai. Bác Bình đang hướng dẫn ba người tập sự."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thảo would be the fourth. Only on paper, he says.",
          "sub": "Thảo sẽ là người thứ tư. Chỉ trên giấy, bác bảo thế."
        }
      ],
      "ref": "p6,p7"
    },
    {
      "id": "s07",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Sáng thứ Hai · văn phòng",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Ghi tên “cho đủ” trên giấy",
          "why": "Khoản 1 Điều 8 Thông tư 10/2021/TT-BTP: không quá 03 người tập sự cùng một thời điểm; khoản 2: luật sư phải từ chối.",
          "rule": "Ghi tên cho đủ hôm nay, lỗi hồ sơ ngày mai"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Okay, Uncle. Just paper. Let's start.",
          "sub": "Dạ, trên giấy thôi. Mình bắt đầu ạ.",
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
          "say": "Article eight: three trainees at most. Over that, the lawyer must refuse.",
          "sub": "Điều 8: không quá ba người cùng lúc. Khoản 2: luật sư phải từ chối.",
          "keys": [
            "phải từ chối"
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
          "say": "Uncle, could the office assign another qualified lawyer from day one?",
          "sub": "Bác ơi, văn phòng phân công một luật sư khác đủ điều kiện ngay từ đầu được không ạ?",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. A name to fill the form today, a file error tomorrow.",
          "sub": "Đúng. Ghi tên “cho đủ” hôm nay có thể thành lỗi hồ sơ ngày mai.",
          "phase": "redo",
          "keys": [
            "lỗi hồ sơ ngày mai"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p7,p8"
    },
    {
      "id": "s08",
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
            "at": "l2",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-82",
            "t": "text",
            "text": "Khoản 2 Điều 8: từ chối + báo",
            "x": 7932,
            "y": 380,
            "size": 42,
            "at": "l2:clause",
            "hl": [
              {
                "text": "từ chối",
                "at": "l2:refuse"
              }
            ]
          },
          {
            "id": "e-new",
            "t": "text",
            "text": "→ phân công luật sư khác",
            "x": 7932,
            "y": 465,
            "size": 48,
            "at": "l1:another",
            "color": "accent",
            "hl": [
              {
                "text": "luật sư khác",
                "at": "l1:another"
              }
            ]
          },
          {
            "id": "e-key",
            "t": "text",
            "text": "“Cho đủ” hôm nay = lỗi mai",
            "x": 7932,
            "y": 570,
            "size": 48,
            "at": "l3:today",
            "color": "coral",
            "hl": [
              {
                "text": "lỗi mai",
                "at": "l3:tomorrow"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: khoản 1, 2 Điều 8 Thông tư 10/2021/TT-BTP",
            "x": 7932,
            "y": 735,
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
          "who": "binh",
          "say": "Slowly now, you're right. I'll ask another lawyer here to take you.",
          "sub": "Từ từ, cháu nói đúng. Bác nhờ một luật sư khác ở đây hướng dẫn cháu.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Clause two: a lawyer who does not qualify must refuse, and tell the organisation.",
          "sub": "Khoản 2: luật sư không đủ điều kiện phải từ chối hướng dẫn, và thông báo cho tổ chức nhận tập sự."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Paper today, problem tomorrow.",
          "sub": "Ghi cho đủ hôm nay, thành lỗi ngày mai."
        }
      ],
      "ref": "p6,p7,p8"
    },
    {
      "id": "s09",
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
            "text": "④ Thứ Ba · Bốn câu hỏi",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 900,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "memo",
                "red-question-mark"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Tuesday",
            "caption": "Thứ Ba · gặp người hướng dẫn mới",
            "icon": "memo"
          },
          {
            "id": "f-b0",
            "t": "badge",
            "n": 1,
            "x": 90,
            "y": 1295,
            "at": "l2:practise"
          },
          {
            "id": "f-q0",
            "t": "text",
            "text": "Đang hành nghề ở đây?",
            "x": 140,
            "y": 1270,
            "size": 40,
            "at": "l2:practise+200"
          },
          {
            "id": "f-b1",
            "t": "badge",
            "n": 2,
            "x": 90,
            "y": 1390,
            "at": "l2:years"
          },
          {
            "id": "f-q1",
            "t": "text",
            "text": "Đủ 03 năm chưa?",
            "x": 140,
            "y": 1365,
            "size": 40,
            "at": "l2:years+200"
          },
          {
            "id": "f-b2",
            "t": "badge",
            "n": 3,
            "x": 90,
            "y": 1485,
            "at": "l3:discipline"
          },
          {
            "id": "f-q2",
            "t": "text",
            "text": "Kỷ luật? Xử phạt < 01 năm?",
            "x": 140,
            "y": 1460,
            "size": 40,
            "at": "l3:discipline+200"
          },
          {
            "id": "f-b3",
            "t": "badge",
            "n": 4,
            "x": 90,
            "y": 1580,
            "at": "l4:many"
          },
          {
            "id": "f-q3",
            "t": "text",
            "text": "Đang hướng dẫn mấy người?",
            "x": 140,
            "y": 1555,
            "size": 40,
            "at": "l4:many+200"
          },
          {
            "id": "f-8",
            "t": "text",
            "text": "Lấy thẳng từ khoản 1 Điều 8",
            "x": 60,
            "y": 1670,
            "size": 40,
            "at": "l5:straight",
            "color": "accent",
            "hl": [
              {
                "text": "khoản 1 Điều 8",
                "at": "l5:clause"
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
          "say": "Fourth: Tuesday, meeting the new supervisor. Thảo brings four questions.",
          "sub": "Phần bốn: thứ Ba, gặp người hướng dẫn mới. Thảo mang theo bốn câu hỏi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "One: do you practise here, in this office? Two: three full years of practice?",
          "sub": "Một: anh chị có đang hành nghề ở chính văn phòng này? Hai: đã đủ ba năm hành nghề?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Three: any discipline, or a practice penalty served less than a year ago?",
          "sub": "Ba: có đang bị kỷ luật, xem xét kỷ luật, hay mới chấp hành xong xử phạt chưa đủ một năm?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Four: how many trainees are you guiding right now?",
          "sub": "Bốn: hiện anh chị đang hướng dẫn mấy người tập sự?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Straight from clause one, Article eight. Asked politely, in one meeting.",
          "sub": "Lấy thẳng từ khoản 1 Điều 8. Hỏi lịch sự, ngay trong buổi gặp.",
          "keys": [
            "khoản 1 Điều 8"
          ]
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s10",
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
            "id": "f-14",
            "t": "text",
            "text": "Tổ chức chịu trách nhiệm phân công",
            "x": 60,
            "y": 1730,
            "size": 36,
            "at": "l1:fourteen",
            "hl": [
              {
                "text": "chịu trách nhiệm",
                "at": "l1:responsible"
              }
            ]
          },
          {
            "id": "f-doan",
            "t": "text",
            "text": "Còn băn khoăn → hỏi Đoàn",
            "x": 60,
            "y": 1785,
            "size": 34,
            "at": "l2:doubt",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi Đoàn",
                "at": "l2:bar"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: khoản 1 Điều 8 · khoản 1 Điều 14 Thông tư 10/2021/TT-BTP",
            "x": 900,
            "y": 1825,
            "size": 26,
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
          "say": "And you have grounds to ask. Article fourteen makes the firm responsible for the assignment.",
          "sub": "Và mình có cơ sở để hỏi: Điều 14 Thông tư đặt trách nhiệm phân công cho tổ chức nhận tập sự.",
          "keys": [
            "trách nhiệm phân công"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Still in doubt? Ask the bar where that lawyer is a member.",
          "sub": "Còn băn khoăn? Hỏi Đoàn luật sư nơi luật sư đó là thành viên.",
          "keys": [
            "Hỏi Đoàn luật sư"
          ]
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s11",
      "module": "BRK-10",
      "data": {
        "quote": "Bốn câu hỏi trong năm phút có thể tránh mất nhiều tháng",
        "mark": "năm phút",
        "by": "Rút ra từ bài học",
        "illus": "stopwatch"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Four questions in five minutes can save many months.",
          "sub": "Bốn câu hỏi trong năm phút có thể tránh mất nhiều tháng.",
          "keys": [
            "năm phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Write that one down.",
          "sub": "Ghi câu này lại."
        }
      ],
      "ref": "p10"
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
            "at": "l5",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
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
            "text": "⑤ Cuối tuần · Người HD làm gì?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2868,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "notebook",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:weekend",
            "caption": "Cuối tuần · đọc Điều 13",
            "icon": "notebook"
          },
          {
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1270,
            "w": 46,
            "h": 46,
            "at": "l2:content",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1252,
            "size": 58,
            "at": "l2:content+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "Hướng dẫn nội dung, quyền, nghĩa vụ",
            "x": 2096,
            "y": 1260,
            "size": 36,
            "at": "l2:content+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1348,
            "w": 46,
            "h": 46,
            "at": "l2:monitor",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1330,
            "size": 58,
            "at": "l2:monitor+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "Theo dõi, kiểm tra, giám sát",
            "x": 2096,
            "y": 1338,
            "size": 36,
            "at": "l2:monitor+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1426,
            "w": 46,
            "h": 46,
            "at": "l3:logbook",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1408,
            "size": 58,
            "at": "l3:logbook+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "Ký xác nhận nhật ký",
            "x": 2096,
            "y": 1416,
            "size": 36,
            "at": "l3:logbook+200"
          },
          {
            "id": "g-c3",
            "t": "box",
            "x": 2028,
            "y": 1504,
            "w": 46,
            "h": 46,
            "at": "l3:evaluation",
            "stroke": 5
          },
          {
            "id": "g-k3",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1486,
            "size": 58,
            "at": "l3:evaluation+600",
            "color": "accent"
          },
          {
            "id": "g-l3",
            "t": "text",
            "text": "Viết nhận xét: ưu, khuyết điểm",
            "x": 2096,
            "y": 1494,
            "size": 36,
            "at": "l3:evaluation+200"
          },
          {
            "id": "g-c4",
            "t": "box",
            "x": 2028,
            "y": 1582,
            "w": 46,
            "h": 46,
            "at": "l4:report",
            "stroke": 5
          },
          {
            "id": "g-k4",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1564,
            "size": 58,
            "at": "l4:report+600",
            "color": "accent"
          },
          {
            "id": "g-l4",
            "t": "text",
            "text": "Báo ngay khi có vi phạm",
            "x": 2096,
            "y": 1572,
            "size": 36,
            "at": "l4:report+200"
          },
          {
            "id": "g-re",
            "t": "text",
            "text": "Luật: LS hướng dẫn chịu trách nhiệm",
            "x": 2028,
            "y": 1690,
            "size": 38,
            "at": "l5:answers",
            "hl": [
              {
                "text": "chịu trách nhiệm",
                "at": "l5:answers"
              }
            ]
          },
          {
            "id": "g-12",
            "t": "text",
            "text": "Điều 12: quyền được hướng dẫn",
            "x": 2028,
            "y": 1760,
            "size": 38,
            "at": "l6:right",
            "color": "accent"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Điều 12, 13 Thông tư 10/2021/TT-BTP · khoản 3 Điều 14 Luật Luật sư (VBHN 03)",
            "x": 2028,
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
          "say": "Fifth: the weekend. Thảo reads what her supervisor owes her.",
          "sub": "Phần năm: cuối tuần. Thảo đọc xem người hướng dẫn phải làm gì cho mình."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article thirteen: guide the content and her rights, then monitor and check the work given.",
          "sub": "Điều 13: hướng dẫn nội dung tập sự, quyền và nghĩa vụ; theo dõi, kiểm tra, giám sát việc được giao."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sign the logbook. Write an evaluation, with strengths and weaknesses.",
          "sub": "Ký xác nhận nhật ký. Viết nhận xét về năng lực, kỹ năng, ý thức tuân thủ, nêu rõ ưu, khuyết điểm.",
          "keys": [
            "Ký xác nhận nhật ký"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not block her lawful rights, and report at once if she breaks a rule.",
          "sub": "Không cản trở quyền hợp pháp, và báo ngay cho tổ chức khi người tập sự vi phạm."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The Law on Lawyers adds: the supervisor answers for the trainee's work.",
          "sub": "Luật Luật sư thêm: luật sư hướng dẫn chịu trách nhiệm về hoạt động của người tập sự.",
          "keys": [
            "chịu trách nhiệm"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "And Article twelve gives me the right to be guided. Good to know!",
          "sub": "Còn Điều 12 cho em quyền được hướng dẫn, được tạo điều kiện. Biết vậy đã!",
          "face": "happy"
        }
      ],
      "ref": "p12,p13"
    },
    {
      "id": "s13",
      "module": "BRK-07",
      "data": {
        "question": "Người hướng dẫn bỏ đi giữa chừng thì sao?",
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
          "say": "What if your supervisor leaves halfway through?",
          "sub": "Người hướng dẫn bỏ đi giữa chừng thì sao?",
          "keys": [
            "bỏ đi giữa chừng"
          ]
        }
      ],
      "ref": "p14"
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
            "text": "⑥ Tháng thứ năm · Dũng",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sixth"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "cross",
                  "face": "sad"
                }
              ],
              "props": [
                "notebook",
                "door"
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
            "caption": "Tháng thứ năm · nhật ký bỏ trống",
            "icon": "notebook"
          },
          {
            "id": "h-m5",
            "t": "text",
            "text": "Tháng 5: LS hướng dẫn chuyển đi",
            "x": 3996,
            "y": 1260,
            "size": 40,
            "at": "l2:moved",
            "color": "muted"
          },
          {
            "id": "h-blank",
            "t": "text",
            "text": "Nhật ký: để trống chữ ký",
            "x": 3996,
            "y": 1340,
            "size": 42,
            "at": "l3:blank",
            "color": "coral",
            "hl": [
              {
                "text": "để trống",
                "at": "l3:blank"
              }
            ]
          },
          {
            "id": "h-3m",
            "t": "text",
            "text": "Ba tháng: không ai xác nhận",
            "x": 3996,
            "y": 1420,
            "size": 42,
            "at": "l4:months",
            "color": "coral",
            "hl": [
              {
                "text": "không ai xác nhận",
                "at": "l4:nobody"
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
          "say": "Sixth: a different story, from Thảo's classmate.",
          "sub": "Phần sáu: một câu chuyện khác, của bạn cùng lớp Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Dũng. In month five, his supervisor moved to another firm.",
          "sub": "Đây là Dũng. Tháng thứ năm, luật sư hướng dẫn của Dũng chuyển sang tổ chức khác.",
          "keys": [
            "chuyển sang tổ chức khác"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "I'll keep writing the logbook, and leave the signature blank. Sort it out at the end!",
          "sub": "Tớ cứ ghi nhật ký, để trống chỗ ký. Cuối kỳ tính sau!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Nobody assigned, the bar not told. Three months later: a long stretch nobody confirms.",
          "sub": "Không ai được phân công, Đoàn chưa được báo. Ba tháng sau: một khoảng dài không người xác nhận.",
          "keys": [
            "không người xác nhận"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 400
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
            "fit": "H",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "h-83",
            "t": "text",
            "text": "Khoản 3 Điều 8: phải thay",
            "x": 3996,
            "y": 1520,
            "size": 44,
            "at": "l1:clause",
            "hl": [
              {
                "text": "phải thay",
                "at": "l1:replaced"
              }
            ]
          },
          {
            "id": "h-why",
            "t": "text",
            "text": "hết điều kiện, bỏ nghĩa vụ…",
            "x": 3996,
            "y": 1590,
            "size": 32,
            "at": "l1:qualifies",
            "color": "muted"
          },
          {
            "id": "h-doan",
            "t": "text",
            "text": "Phân công mới + văn bản báo Đoàn",
            "x": 3996,
            "y": 1660,
            "size": 40,
            "at": "l2:writing",
            "hl": [
              {
                "text": "báo Đoàn",
                "at": "l2:bar"
              }
            ]
          },
          {
            "id": "h-key",
            "t": "text",
            "text": "Đổi ngay trên giấy, báo ngay",
            "x": 3996,
            "y": 1740,
            "size": 46,
            "at": "l4:right",
            "color": "accent",
            "hl": [
              {
                "text": "báo ngay",
                "at": "l4:away"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: khoản 3 Điều 8, điểm đ khoản 1 Điều 12 Thông tư 10/2021/TT-BTP",
            "x": 4836,
            "y": 1825,
            "size": 26,
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
          "say": "Clause three, Article eight: a supervisor who no longer qualifies, fails duties, or loses the certificate must be replaced.",
          "sub": "Khoản 3 Điều 8: người hướng dẫn không còn đủ điều kiện, không làm đủ nghĩa vụ, bị thu hồi chứng chỉ thì phải thay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The firm assigns another lawyer, and informs the bar in writing.",
          "sub": "Tổ chức phân công luật sư khác và thông báo bằng văn bản cho Đoàn luật sư.",
          "keys": [
            "thông báo bằng văn bản"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And Article twelve lets the trainee ask for a change, in the allowed cases.",
          "sub": "Điều 12 cũng cho người tập sự quyền đề nghị thay đổi luật sư hướng dẫn, trong các trường hợp được phép."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Change the supervisor on paper right away, and tell the bar right away.",
          "sub": "Đổi người hướng dẫn thì đổi ngay trên giấy và báo ngay cho Đoàn.",
          "keys": [
            "báo ngay cho Đoàn"
          ]
        }
      ],
      "ref": "p14,p16"
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
            "text": "⑦ Nếu cả văn phòng đóng cửa?",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Seventh"
          },
          {
            "id": "i-84",
            "t": "text",
            "text": "Khoản 4 Điều 8:",
            "x": 5964,
            "y": 1265,
            "size": 46,
            "at": "l2:clause"
          },
          {
            "id": "i-why",
            "t": "text",
            "text": "tạm ngừng · chấm dứt · hết người HD",
            "x": 5964,
            "y": 1340,
            "size": 36,
            "at": "l2:pauses",
            "color": "muted"
          },
          {
            "id": "i-ba",
            "t": "box",
            "x": 5964,
            "y": 1430,
            "w": 760,
            "h": 130,
            "at": "l3:introduce",
            "stroke": 4
          },
          {
            "id": "i-a",
            "t": "text",
            "text": "A. Đoàn giới thiệu: 10 ngày",
            "x": 5989,
            "y": 1465,
            "size": 46,
            "at": "l3:ten",
            "color": "accent",
            "hl": [
              {
                "text": "10 ngày",
                "at": "l3:ten"
              }
            ]
          },
          {
            "id": "i-bb",
            "t": "box",
            "x": 6804,
            "y": 1430,
            "w": 760,
            "h": 130,
            "at": "l4:agree",
            "stroke": 4
          },
          {
            "id": "i-b",
            "t": "text",
            "text": "B. Tự thoả thuận nơi khác",
            "x": 6829,
            "y": 1465,
            "size": 46,
            "at": "l4:agree+200"
          },
          {
            "id": "i-next",
            "t": "text",
            "text": "Thủ tục đổi nơi: bài sau",
            "x": 5964,
            "y": 1650,
            "size": 40,
            "at": "l5:lesson",
            "color": "muted"
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: khoản 4 Điều 8 Thông tư 10/2021/TT-BTP",
            "x": 5964,
            "y": 1825,
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
          "say": "Seventh: worse still. What if the whole office stops?",
          "sub": "Phần bảy: tệ hơn nữa. Nếu cả văn phòng ngừng hoạt động?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Clause four: it pauses, closes, or has no qualified supervisor left.",
          "sub": "Khoản 4: tổ chức tạm ngừng, chấm dứt hoạt động, hoặc không còn luật sư đủ điều kiện hướng dẫn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Option A: ask the bar's board to introduce a new place, within ten days.",
          "sub": "Cách A: đề nghị Ban chủ nhiệm Đoàn giới thiệu nơi khác, trong mười ngày.",
          "keys": [
            "trong mười ngày"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Option B: agree with another organisation yourself.",
          "sub": "Cách B: tự thoả thuận với một tổ chức khác."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "How to change place is another lesson in this series.",
          "sub": "Thủ tục đổi nơi tập sự nằm ở một bài khác trong chuỗi."
        }
      ],
      "ref": "p17"
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
            "at": "l4",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Sáng thứ Hai · tuần sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Monday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "face": "happy",
                  "pose": "hold"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "check-mark-button"
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
            "at": "l1:Monday",
            "caption": "Sáng thứ Hai · cùng văn phòng",
            "icon": "page-facing-up"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1270,
            "w": 46,
            "h": 46,
            "at": "l2:practises",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1252,
            "size": 58,
            "at": "l2:practises+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Người HD: đang hành nghề ở đây",
            "x": 8000,
            "y": 1260,
            "size": 34,
            "at": "l2:practises+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1348,
            "w": 46,
            "h": 46,
            "at": "l2:years",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1330,
            "size": 58,
            "at": "l2:years+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Đủ 03 năm, có uy tín",
            "x": 8000,
            "y": 1338,
            "size": 34,
            "at": "l2:years+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1426,
            "w": 46,
            "h": 46,
            "at": "l2:discipline",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1408,
            "size": 58,
            "at": "l2:discipline+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Không kỷ luật, không xử phạt mới",
            "x": 8000,
            "y": 1416,
            "size": 34,
            "at": "l2:discipline+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1504,
            "w": 46,
            "h": 46,
            "at": "l2:fewer",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1486,
            "size": 58,
            "at": "l2:fewer+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Đang hướng dẫn dưới 3 người",
            "x": 8000,
            "y": 1494,
            "size": 34,
            "at": "l2:fewer+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1582,
            "w": 46,
            "h": 46,
            "at": "l2:form",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1564,
            "size": 58,
            "at": "l2:form+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Tên đúng trên Giấy xác nhận",
            "x": 8000,
            "y": 1572,
            "size": 34,
            "at": "l2:form+200"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Muốn biết phải hỏi”",
            "x": 7932,
            "y": 1690,
            "size": 52,
            "at": "l4:know",
            "color": "accent",
            "hl": [
              {
                "text": "phải hỏi",
                "at": "l4:ask"
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
          "say": "Monday morning, one week later. Same office, same desk.",
          "sub": "Sáng thứ Hai, một tuần sau. Vẫn văn phòng ấy, vẫn chiếc bàn ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "My supervisor practises here, three years plus, no discipline, fewer than three trainees. Right name on the form.",
          "sub": "Người hướng dẫn của em hành nghề ở đây, đủ ba năm, không kỷ luật, dưới ba người. Tên đúng trên giấy.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "And my three keep their supervisor. Nobody is on paper only.",
          "sub": "Còn ba đứa của bác vẫn có người hướng dẫn. Không ai chỉ nằm trên giấy.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "To know, you must ask. To be good, you must learn. And the number three, kept.",
          "sub": "“Muốn biết phải hỏi, muốn giỏi phải học.” Và con số ba, đã giữ đúng.",
          "keys": [
            "Muốn biết phải hỏi"
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
      "ref": "outro,p9"
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
            "at": "l1:clean",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:questions",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:change",
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
            "x": 6724,
            "y": 190,
            "at": "l1:clean"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 820,
            "y": 1280,
            "at": "l2:questions"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4756,
            "y": 1530,
            "at": "l3:change"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Kiến thức nghề, không phải tư vấn vụ việc cụ thể; nhân vật là minh hoạ. Luật Luật sư đang sửa đổi (17/10–21/11/2026).",
            "x": 7932,
            "y": 1825,
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
          "say": "So: three years, good standing, a clean record, and three trainees at most.",
          "sub": "Tóm lại: ba năm, có uy tín, sạch kỷ luật, và tối đa ba người tập sự.",
          "keys": [
            "tối đa ba người"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Four questions at the first meeting.",
          "sub": "Bốn câu hỏi ngay buổi gặp đầu.",
          "keys": [
            "Bốn câu hỏi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Supervisor change? Assign, and tell the bar in writing, right away.",
          "sub": "Đổi người hướng dẫn? Phân công lại và báo Đoàn bằng văn bản, ngay.",
          "keys": [
            "báo Đoàn bằng văn bản"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "General knowledge, not advice for your case. The law is being amended, so recheck.",
          "sub": "Đây là kiến thức nghề, không phải tư vấn cho trường hợp riêng. Luật Luật sư đang sửa đổi, nhớ kiểm lại.",
          "keys": [
            "nhớ kiểm lại"
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
        "q": "Your intended supervisor already guides three trainees, what should you ask the firm?",
        "options": [
          "Assign a different qualified lawyer to supervise you from the very start",
          "Write the same lawyer's name anyway because it is only paperwork",
          "Wait until one of the trainees quits without telling the bar"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "busts-in-silhouette",
        "why": "Khoản 1 Điều 8 Thông tư 10/2021/TT-BTP: không quá 03 người tập sự cùng lúc; nên đề nghị tổ chức phân công luật sư khác đủ điều kiện ngay từ đầu."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Your intended supervisor already guides three trainees, what should you ask the firm?",
          "sub": "Luật sư dự kiến đã hướng dẫn 3 người, anh chị nên đề nghị tổ chức điều gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Ask the firm to assign another qualified lawyer from the very start.",
          "sub": "Đề nghị tổ chức phân công một luật sư khác đủ điều kiện ngay từ đầu."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Paper today, problem tomorrow.",
          "sub": "Ghi tên cho đủ hôm nay, thành lỗi hồ sơ ngày mai."
        }
      ],
      "ref": "questions[12]"
    },
    {
      "id": "s20",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi chép bốn câu hỏi, mang theo buổi gặp"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, copy the four questions, and bring them to your meeting.",
          "sub": "Hôm nay, chép sẵn bốn câu hỏi, mang theo buổi gặp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then try the forty questions below.",
          "sub": "Rồi thử bốn mươi câu hỏi bên dưới."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-24: vật neo con số 3 (ba năm hành nghề, tối đa ba người tập sự) → buổi gặp đầu: Bác Bình định ghi tên mình dù đang hướng dẫn ba người (“trên giấy thôi”) → chi tiết cần kiểm → câu hỏi chính → 3 phần. Đét trái + bảng 10 ô theo tuần đầu của Thảo ở văn phòng Bác Bình: Luật nói gì → Thông tư nói thêm (BRK-04 hiểu lầm) → người thứ tư + “Khoan đã!” → thứ Ba bốn câu hỏi (BRK-10 trích rút ra) → cuối tuần Điều 13 → (BRK-07) tháng thứ năm của Dũng → cả văn phòng đóng cửa → sáng thứ Hai tuần sau, cùng văn phòng (khép vòng, “Muốn biết phải hỏi”). Nhân vật theo w145/_series/bar-trainee-registration.md. Số/điều chỉ từ bài: Điều 14 Luật Luật sư; Điều 8, 12, 13, 14 TT 10/2021; 03 năm, 03 người, 01 năm, 10 ngày; kỳ họp 17/10–21/11/2026. Câu đố questions[12]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s17"
  }
};
