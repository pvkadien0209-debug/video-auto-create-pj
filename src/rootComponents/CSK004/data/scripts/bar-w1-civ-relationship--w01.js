// bar-w1-civ-relationship--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-w1-civ-relationship--w01",
  "unit": {
    "audience": "bar-exam-written1-civil",
    "slug": "bar-w1-civ-relationship",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Xác định quan hệ tranh chấp và tư cách đương sự từ đề bài",
    "series": "Bài viết 1 phần dân sự — xác định quan hệ tranh chấp, chứng cứ và hướng bảo vệ cho người ôn kiểm tra tập sự"
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
            "fit": "A",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "a-n",
            "t": "text",
            "text": "5–6 nhân vật",
            "x": 60,
            "y": 110,
            "size": 130,
            "at": "l1:five",
            "color": "accent",
            "hl": [
              {
                "text": "5–6 nhân vật",
                "at": "l1:characters"
              }
            ]
          },
          {
            "id": "a-g",
            "t": "text",
            "text": "3–4 giao dịch nối nhau",
            "x": 70,
            "y": 300,
            "size": 56,
            "at": "l1:deals"
          },
          {
            "id": "a-dive",
            "t": "text",
            "text": "→ lao ngay vào điều luật",
            "x": 70,
            "y": 400,
            "size": 50,
            "at": "l2:dive",
            "color": "coral",
            "hl": [
              {
                "text": "lao ngay",
                "at": "l2:dive"
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
          "say": "Five or six characters. Three or four deals, chained. Half a page.",
          "sub": "Năm, sáu nhân vật. Ba, bốn giao dịch nối nhau. Gói trong nửa trang đề.",
          "keys": [
            "Năm, sáu nhân vật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And most of us dive into the code before knowing who is suing whom.",
          "sub": "Và ta lao ngay vào điều luật, trước khi biết ai kiện ai.",
          "keys": [
            "ai kiện ai"
          ]
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                },
                {
                  "id": "lan",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "think"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                }
              ],
              "props": [
                "books",
                "page-facing-up"
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
                  "shot": "E-SHOT-10",
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
            "caption": "19:00 thứ Tư · nhóm ôn",
            "icon": "books"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Sai một li, đi một dặm”",
            "x": 60,
            "y": 560,
            "size": 56,
            "at": "l5:mile",
            "color": "accent",
            "hl": [
              {
                "text": "đi một dặm",
                "at": "l5:mile"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Theo bài học: Giáo trình kỹ năng dân sự, Học viện Tư pháp · BLTTDS 2015 sửa bởi Luật 85/2025/QH15 · BLDS 2015",
            "x": 60,
            "y": 740,
            "size": 22,
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
          "say": "Wednesday, seven p.m., Cô Hoa's office. Meet Thảo, trainee lawyer, hosting the study group.",
          "sub": "Bảy giờ tối thứ Tư, văn phòng Cô Hoa. Đây là Thảo, luật sư tập sự, chủ trì nhóm ôn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Lan, who reads every word twice. And Dũng, who writes before he finishes reading.",
          "sub": "Đây là Lan, chữ nào cũng soi hai lần. Và Dũng, chưa đọc hết đã viết."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Civil dispute! Done. Next, time limits!",
          "sub": "Tranh chấp dân sự! Xong. Sang thời hiệu!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Hold on. Who is standing where?",
          "sub": "Khoan. Ai đứng ở đâu đã?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "As our elders say: a hair off at the start, a mile off at the end.",
          "sub": "Ông bà dặn: “Sai một li, đi một dặm.”",
          "keys": [
            "Sai một li, đi một dặm"
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
            "text": "Bước đầu tiên là gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:first step",
            "hl": [
              {
                "text": "Bước đầu tiên",
                "at": "l1:first step"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: lao vào điều luật",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:Not",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:code"
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "① Gọi đúng tên quan hệ",
            "x": 2028,
            "y": 280,
            "size": 58,
            "at": "l2:name",
            "color": "accent",
            "hl": [
              {
                "text": "tên quan hệ",
                "at": "l2:name"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "② Xếp đúng tư cách đương sự",
            "x": 2028,
            "y": 380,
            "size": 58,
            "at": "l2:place"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "③ Viết lại yêu cầu mỗi bên",
            "x": 2028,
            "y": 480,
            "size": 58,
            "at": "l2:rewrite"
          },
          {
            "id": "b-i",
            "t": "illus",
            "name": "link",
            "x": 3118,
            "y": 300,
            "size": 120,
            "at": "l3:hold"
          },
          {
            "id": "b-hold",
            "t": "text",
            "text": "→ toà, thời hiệu, chứng cứ",
            "x": 2028,
            "y": 610,
            "size": 50,
            "at": "l3:court"
          },
          {
            "id": "b-hold2",
            "t": "text",
            "text": "có chỗ bám",
            "x": 2728,
            "y": 610,
            "size": 50,
            "at": "l3:hold",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what is the very first step?",
          "sub": "Vậy bước đầu tiên là gì?",
          "keys": [
            "bước đầu tiên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not the code. Three jobs: name the dispute, place every party, rewrite each side's claim.",
          "sub": "Không phải điều luật. Ba việc: gọi tên quan hệ, xếp tư cách đương sự, viết lại yêu cầu.",
          "keys": [
            "Ba việc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Nail this, and the court, the time limit and the evidence have something to hold.",
          "sub": "Làm chắc bước này, thì toà, thời hiệu, chứng cứ mới có chỗ bám.",
          "keys": [
            "có chỗ bám"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Một buổi tối ôn",
        "current": 0,
        "points": [
          {
            "label": "19:10",
            "sub": "Gọi tên",
            "illus": "label"
          },
          {
            "label": "19:40",
            "sub": "Dân sự hay kinh doanh",
            "illus": "factory"
          },
          {
            "label": "20:00",
            "sub": "Ai kiện ai",
            "illus": "busts-in-silhouette"
          },
          {
            "label": "20:15",
            "sub": "Người liên quan",
            "illus": "house"
          },
          {
            "label": "20:45",
            "sub": "Yêu cầu",
            "illus": "memo"
          },
          {
            "label": "21:00",
            "sub": "Khung tám ô",
            "illus": "clipboard"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One evening, six stops.",
          "sub": "Một buổi tối, sáu chặng."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "From a name, to a one-page frame.",
          "sub": "Từ một cái tên, tới một khung một trang."
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
            "text": "① 19:10 · Gọi tên",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:seven ten"
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
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "open-book"
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
            "at": "l1:textbook",
            "caption": "19:10 · giáo trình",
            "icon": "open-book"
          },
          {
            "id": "c-o",
            "t": "text",
            "text": "Quan hệ → toà → thời hiệu",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l3:relationship",
            "color": "accent",
            "hl": [
              {
                "text": "Quan hệ",
                "at": "l3:relationship"
              }
            ]
          },
          {
            "id": "c-h",
            "t": "text",
            "text": "Hợp đồng: xem trước",
            "x": 3996,
            "y": 260,
            "size": 46,
            "at": "l4:contracts"
          },
          {
            "id": "c-h2",
            "t": "text",
            "text": "hiệu lực · chủ thể · quyền, nghĩa vụ",
            "x": 4016,
            "y": 325,
            "size": 40,
            "at": "l4:validity",
            "color": "muted"
          },
          {
            "id": "c-h3",
            "t": "text",
            "text": "diễn biến → rồi mới bàn kiện",
            "x": 4016,
            "y": 385,
            "size": 40,
            "at": "l4:sue",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seven ten. Thảo opens the Judicial Academy textbook.",
          "sub": "Chặng một: bảy giờ mười. Thảo mở giáo trình Học viện Tư pháp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "After meeting the client, it lists the order. Let me read it out.",
          "sub": "Sau khi gặp khách hàng, giáo trình ghi thứ tự. Em đọc nhé.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The disputed relationship, then the court, then the time limit. Relationship comes first.",
          "sub": "Quan hệ pháp luật tranh chấp, rồi thẩm quyền toà, rồi thời hiệu. Quan hệ đứng đầu.",
          "keys": [
            "Quan hệ đứng đầu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "For contracts: validity, parties, rights and duties, what happened. Only then, whether to sue.",
          "sub": "Với hợp đồng: xem hiệu lực, chủ thể, quyền nghĩa vụ, diễn biến, rồi mới bàn có nên kiện.",
          "keys": [
            "rồi mới bàn có nên kiện"
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
          }
        ],
        "items": [
          {
            "id": "c-429",
            "t": "text",
            "text": "Hợp đồng → thời hiệu Điều 429",
            "x": 3996,
            "y": 470,
            "size": 46,
            "at": "l1:contract",
            "hl": [
              {
                "text": "Điều 429",
                "at": "l1:twenty-nine"
              }
            ]
          },
          {
            "id": "c-155",
            "t": "text",
            "text": "Đất đai → khoản 3 Điều 155",
            "x": 3996,
            "y": 540,
            "size": 44,
            "at": "l2:land"
          },
          {
            "id": "c-155b",
            "t": "text",
            "text": "không áp dụng thời hiệu",
            "x": 4016,
            "y": 600,
            "size": 44,
            "at": "l2:no time limit",
            "color": "coral",
            "hl": [
              {
                "text": "không áp dụng",
                "at": "l2:no time limit"
              }
            ]
          },
          {
            "id": "c-sai",
            "t": "text",
            "text": "Sai dòng đầu → sai cả bài",
            "x": 3996,
            "y": 680,
            "size": 54,
            "at": "l3:wrong",
            "color": "accent",
            "hl": [
              {
                "text": "sai cả bài",
                "at": "l3:follows"
              }
            ]
          },
          {
            "id": "c-dd",
            "t": "text",
            "text": "Luật Đất đai đang sửa: kiểm lại sau kỳ họp",
            "x": 4836,
            "y": 700,
            "size": 26,
            "at": "l3:amended",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The name picks the article. Contract dispute? Time limit under Article four twenty-nine.",
          "sub": "Tên quan hệ chọn điều luật. Tranh chấp hợp đồng: thời hiệu theo Điều 429 Bộ luật Dân sự.",
          "keys": [
            "Điều 429"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Land use right dispute? Article one fifty-five, clause three: no time limit.",
          "sub": "Tranh chấp quyền sử dụng đất: khoản 3 Điều 155, không áp dụng thời hiệu.",
          "keys": [
            "không áp dụng thời hiệu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Wrong name on line one, and every line below follows. The Land Law is being amended too.",
          "sub": "Gọi sai tên dòng đầu, các dòng sau sai theo. Luật Đất đai cũng đang sửa: nhớ kiểm lại.",
          "keys": [
            "các dòng sau sai theo"
          ]
        }
      ],
      "ref": "p2"
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
            "at": "l2",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 19:25 · Cụ thể đến đâu?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:seven twenty-five"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "thumb",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "think"
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
            "at": "l1:Dũng",
            "caption": "19:25 · nháp của Dũng",
            "icon": "memo"
          },
          {
            "id": "d-m",
            "t": "text",
            "text": "“Tranh chấp dân sự” = xong",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l3:civil dispute",
            "color": "muted"
          },
          {
            "id": "d-mx",
            "t": "strike",
            "over": "d-m",
            "at": "l3:group"
          },
          {
            "id": "d-grp",
            "t": "text",
            "text": "← chỉ là nhóm lớn",
            "x": 5964,
            "y": 250,
            "size": 50,
            "at": "l3:group",
            "color": "coral",
            "hl": [
              {
                "text": "nhóm lớn",
                "at": "l3:big group"
              }
            ]
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "“hợp đồng vay tài sản”",
            "x": 5964,
            "y": 340,
            "size": 50,
            "at": "l4:loan",
            "color": "accent"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "“hợp đồng thuê nhà”",
            "x": 5964,
            "y": 410,
            "size": 50,
            "at": "l4:lease",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two: seven twenty-five. Dũng proudly shows his first line.",
          "sub": "Chặng hai: bảy giờ hai lăm. Dũng hãnh diện khoe dòng đầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Civil dispute. Short and safe, right?",
          "sub": "Tranh chấp dân sự. Gọn mà chắc, đúng không?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Short, yes. Safe, no. Civil dispute is only the big group.",
          "sub": "Gọn thì có. Chắc thì không. “Tranh chấp dân sự” chỉ là nhóm lớn.",
          "keys": [
            "nhóm lớn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Markers want a real name: a loan contract dispute, a house lease dispute.",
          "sub": "Người chấm muốn tên cụ thể: tranh chấp hợp đồng vay tài sản, hợp đồng thuê nhà.",
          "keys": [
            "tên cụ thể"
          ]
        }
      ],
      "ref": "p3"
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
            "id": "d-why",
            "t": "text",
            "text": "→ điều luật · thời hiệu · toà chuyên trách",
            "x": 5964,
            "y": 500,
            "size": 40,
            "at": "l1:article",
            "color": "muted"
          },
          {
            "id": "d-two",
            "t": "text",
            "text": "Vay + bảo lãnh: hai tên riêng",
            "x": 5964,
            "y": 580,
            "size": 48,
            "at": "l2:guarantee",
            "hl": [
              {
                "text": "hai tên riêng",
                "at": "l2:own name"
              }
            ]
          },
          {
            "id": "d-r",
            "t": "text",
            "text": "Càng cụ thể, càng dễ tìm",
            "x": 5964,
            "y": 670,
            "size": 58,
            "at": "l3:precise",
            "color": "accent",
            "hl": [
              {
                "text": "càng dễ tìm",
                "at": "l3:easier"
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
          "say": "Only a precise name finds the article, the time limit, the specialised court.",
          "sub": "Chỉ tên cụ thể mới dẫn được điều luật nội dung, mốc thời hiệu và toà chuyên trách."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One story can hold two relationships, say a loan plus a guarantee. Each gets its own name.",
          "sub": "Một đề có thể chứa hai quan hệ, như vay kèm bảo lãnh. Mỗi quan hệ một tên riêng.",
          "keys": [
            "một tên riêng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The more precise the name, the easier the article is to find.",
          "sub": "Gọi tên càng cụ thể, điều luật càng dễ tìm.",
          "keys": [
            "càng dễ tìm"
          ]
        }
      ],
      "ref": "p3,p4"
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
            "text": "③ 19:40 · Dân sự hay kinh doanh?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:seven forty"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "explain",
                  "face": "thinking"
                }
              ],
              "props": [
                "factory",
                "receipt"
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
            "at": "l1:Lan",
            "caption": "19:40 · đề của Lan",
            "icon": "factory"
          },
          {
            "id": "e-26",
            "t": "text",
            "text": "Điều 26: dân sự",
            "x": 7932,
            "y": 170,
            "size": 52,
            "at": "l3:twenty-six"
          },
          {
            "id": "e-30",
            "t": "text",
            "text": "Điều 30: kinh doanh, thương mại",
            "x": 7932,
            "y": 245,
            "size": 50,
            "at": "l3:thirty",
            "hl": [
              {
                "text": "kinh doanh, thương mại",
                "at": "l3:commercial"
              }
            ]
          },
          {
            "id": "e-35",
            "t": "text",
            "text": "Cả hai: toà khu vực (Đ35)",
            "x": 7932,
            "y": 335,
            "size": 44,
            "at": "l4:both"
          },
          {
            "id": "e-36",
            "t": "text",
            "text": "Đ36 → toà chuyên trách:",
            "x": 7932,
            "y": 410,
            "size": 44,
            "at": "l5:specialised",
            "color": "accent",
            "hl": [
              {
                "text": "toà chuyên trách",
                "at": "l5:specialised"
              }
            ]
          },
          {
            "id": "e-36b",
            "t": "text",
            "text": "Dân sự · Kinh tế · Sở hữu trí tuệ",
            "x": 7952,
            "y": 470,
            "size": 28,
            "at": "l5:family",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "e-36c",
            "t": "text",
            "text": "Gia đình và người chưa thành niên",
            "x": 7952,
            "y": 510,
            "size": 28,
            "at": "l5:juveniles",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three: seven forty. Lan's facts: Company A sells machines to Company B.",
          "sub": "Chặng ba: bảy giờ bốn mươi. Đề của Lan: Công ty A bán máy móc cho Công ty B."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "B got the machines, but pays late. Civil, or commercial?",
          "sub": "B nhận máy rồi mà chậm trả tiền. Dân sự hay kinh doanh?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The procedure code splits them: civil at Article twenty-six, commercial at Article thirty.",
          "sub": "Bộ luật Tố tụng dân sự tách: dân sự ở Điều 26, kinh doanh, thương mại ở Điều 30.",
          "keys": [
            "Điều 30"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Since Law eighty-five, regional courts hear both at first instance.",
          "sub": "Sau Luật 85/2025/QH15, Điều 35 giao toà khu vực sơ thẩm cả hai."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "But Article thirty-six sets specialised courts: civil, economic, intellectual property, family and juveniles.",
          "sub": "Nhưng Điều 36 chia toà chuyên trách: Dân sự, Kinh tế, Sở hữu trí tuệ, Gia đình và người chưa thành niên.",
          "keys": [
            "toà chuyên trách"
          ]
        }
      ],
      "ref": "p5,p6"
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
          }
        ],
        "items": [
          {
            "id": "e-q1",
            "t": "text",
            "text": "Có đăng ký kinh doanh?",
            "x": 7932,
            "y": 580,
            "size": 42,
            "at": "l1:registered"
          },
          {
            "id": "e-q2",
            "t": "text",
            "text": "Nhằm lợi nhuận?",
            "x": 7932,
            "y": 640,
            "size": 42,
            "at": "l1:profit"
          },
          {
            "id": "e-q3",
            "t": "text",
            "text": "→ đối chiếu chữ Điều 26, 30",
            "x": 7932,
            "y": 700,
            "size": 40,
            "at": "l2:wording",
            "color": "muted"
          },
          {
            "id": "e-tm",
            "t": "text",
            "text": "+ Luật Thương mại (đang sửa)",
            "x": 8772,
            "y": 700,
            "size": 40,
            "at": "l3:Commercial Law",
            "color": "coral",
            "hl": [
              {
                "text": "Luật Thương mại",
                "at": "l3:Commercial Law"
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
          "say": "So ask: are the parties registered businesses? Is the deal for profit?",
          "sub": "Vậy hỏi: các bên có đăng ký kinh doanh không? Giao dịch có nhằm lợi nhuận không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then compare the wording of both articles in the code you brought.",
          "sub": "Rồi đối chiếu chữ của Điều 26 và Điều 30 trong văn bản mang vào phòng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two businesses trading goods? Add the Commercial Law, now being amended.",
          "sub": "Hai doanh nghiệp mua bán để kinh doanh: đọc thêm Luật Thương mại. Luật này đang sửa, nhớ kiểm lại.",
          "keys": [
            "Luật Thương mại"
          ]
        }
      ],
      "ref": "p6,p8"
    },
    {
      "id": "s10",
      "module": "BRK-04",
      "data": {
        "title": "Hai cách của Lan",
        "wrong": "“Hợp đồng dân sự”, chỉ dẫn Bộ luật Dân sự",
        "right": "Mua bán hàng hoá thương mại: Điều 30 + Luật Thương mại",
        "wrongIllus": "page-facing-up",
        "rightIllus": "factory",
        "labels": [
          "Cách A",
          "Cách B"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A: short, but no specialised court.",
          "sub": "A: gọn, nhưng thiếu toà chuyên trách."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "B: longer, every step grounded.",
          "sub": "B: dài hơn, bước nào cũng có căn cứ.",
          "keys": [
            "có căn cứ"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s11",
      "module": "BRK-10",
      "data": {
        "quote": "Hai bên đều kinh doanh, hãy hỏi luật chuyên ngành",
        "mark": "luật chuyên ngành",
        "by": "Rút ra từ bài học",
        "illus": "light-bulb"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Both sides in business? Ask the specialised law.",
          "sub": "Hai bên đều kinh doanh, hãy hỏi luật chuyên ngành.",
          "keys": [
            "luật chuyên ngành"
          ]
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
            "text": "④ 20:00 · Ai kiện ai?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:eight"
          },
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
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "balance-scale"
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
            "at": "l1:who",
            "caption": "20:00 · Thảo đọc đề bài",
            "icon": "balance-scale"
          },
          {
            "id": "f-68",
            "t": "text",
            "text": "Điều 68 BLTTDS",
            "x": 60,
            "y": 1260,
            "size": 50,
            "at": "l3:sixty-eight",
            "hl": [
              {
                "text": "Điều 68",
                "at": "l3:sixty-eight"
              }
            ]
          },
          {
            "id": "f-nd",
            "t": "text",
            "text": "k2 · Nguyên đơn: người khởi kiện",
            "x": 60,
            "y": 1335,
            "size": 46,
            "at": "l3:plaintiff",
            "color": "accent"
          },
          {
            "id": "f-nd2",
            "t": "text",
            "text": "(hoặc được người khác luật định kiện thay)",
            "x": 80,
            "y": 1400,
            "size": 26,
            "at": "l3:on their behalf",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "f-bd",
            "t": "text",
            "text": "k3 · Bị đơn: người bị kiện",
            "x": 60,
            "y": 1450,
            "size": 46,
            "at": "l4:defendant",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four: eight o'clock. Who sues whom?",
          "sub": "Chặng bốn: tám giờ. Ai kiện ai?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "The task says: protect Ms B. And Ms B is the one being sued.",
          "sub": "Đề bảo: bảo vệ quyền lợi cho bà B. Mà bà B đang bị kiện.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article sixty-eight, clause two: the plaintiff sues for their rights, or someone sues on their behalf by law.",
          "sub": "Khoản 2 Điều 68: nguyên đơn là người khởi kiện, hoặc được người khác do luật định kiện thay.",
          "keys": [
            "nguyên đơn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Clause three: the defendant is sued for allegedly infringing the plaintiff's rights.",
          "sub": "Khoản 3: bị đơn là người bị kiện vì cho là đã xâm phạm quyền của nguyên đơn.",
          "keys": [
            "bị đơn"
          ]
        }
      ],
      "ref": "p9"
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
          }
        ],
        "items": [
          {
            "id": "f-pub",
            "t": "text",
            "text": "Cơ quan: kiện vì lợi ích công",
            "x": 60,
            "y": 1540,
            "size": 40,
            "at": "l1:public",
            "color": "muted"
          },
          {
            "id": "f-b",
            "t": "text",
            "text": "Bà B bị kiện → bị đơn",
            "x": 60,
            "y": 1620,
            "size": 52,
            "at": "l2:defendant",
            "color": "accent",
            "hl": [
              {
                "text": "bị đơn",
                "at": "l2:defendant"
              }
            ]
          },
          {
            "id": "f-pd",
            "t": "text",
            "text": "→ phản đối: văn bản + chứng cứ (Đ91)",
            "x": 60,
            "y": 1700,
            "size": 44,
            "at": "l3:object",
            "hl": [
              {
                "text": "văn bản + chứng cứ",
                "at": "l3:writing"
              }
            ]
          },
          {
            "id": "f-r",
            "t": "text",
            "text": "Vị trí trước, chứng minh sau",
            "x": 60,
            "y": 1780,
            "size": 44,
            "at": "l4:position",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Some agencies may sue for the public interest.",
          "sub": "Cơ quan, tổ chức được kiện vì lợi ích công cộng, Nhà nước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your client can stand anywhere. Ms B is sued, so she is the defendant.",
          "sub": "Khách hàng có thể đứng ở bất cứ đâu. Bà B bị kiện, vậy là bị đơn.",
          "keys": [
            "bị đơn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So the defence opposes the claim. Article ninety-one: object in writing, with evidence.",
          "sub": "Hướng bảo vệ là phản đối yêu cầu. Điều 91: phản đối bằng văn bản, kèm chứng cứ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Fix the position first, then you know what to prove.",
          "sub": "Xác định vị trí trước, mới biết phải chứng minh gì.",
          "keys": [
            "phải chứng minh gì"
          ]
        }
      ],
      "ref": "p9,p10"
    },
    {
      "id": "s14",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "20:10 · nháp của Dũng",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "lan",
            "side": "right",
            "pose": "think"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Chỉ ghi “bị đơn: bà B”",
          "why": "Ông D, chồng bà B, cũng ký giấy vay. Chưa xét ông D thì phần đương sự thiếu.",
          "rule": "Ai ký vào giấy, phải xét vị trí trong vụ án"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Ms B borrowed from Mr A. Defendant: Ms B. Next!",
          "sub": "Bà B vay ông A. Bị đơn: bà B. Sang phần thời hiệu!",
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
          "who": "lan",
          "say": "Her husband, Mr D, signed the note too. Where does he stand?",
          "sub": "Chồng bà B là ông D cũng ký giấy vay. Ông D đứng ở đâu?",
          "face": "thinking"
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
          "say": "Let me reread. Whom did Mr A sue? And in what capacity did Mr D sign?",
          "sub": "Đọc lại đã. Ông A kiện những ai? Ông D ký với tư cách gì?",
          "phase": "redo",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Whoever signs the paper must get a place in the case.",
          "sub": "Ai ký vào giấy, người đó phải được xét vị trí trong vụ án.",
          "phase": "redo",
          "keys": [
            "phải được xét vị trí"
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
            "at": 150,
            "fit": "G",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 20:15 · Người hay bị sót",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:eight fifteen",
            "hl": [
              {
                "text": "hay bị sót",
                "at": "l1:missed"
              }
            ]
          },
          {
            "id": "g-68",
            "t": "text",
            "text": "k1 Điều 68: cũng là đương sự",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l2:clause one",
            "hl": [
              {
                "text": "cũng là đương sự",
                "at": "l2:parties"
              }
            ]
          },
          {
            "id": "g-who",
            "t": "text",
            "text": "Không kiện, không bị kiện",
            "x": 2028,
            "y": 1340,
            "size": 48,
            "at": "l3:neither"
          },
          {
            "id": "g-who2",
            "t": "text",
            "text": "→ nhưng bản án chạm tới",
            "x": 2028,
            "y": 1410,
            "size": 48,
            "at": "l3:touch",
            "color": "coral"
          },
          {
            "id": "g-k4",
            "t": "text",
            "text": "Đối chiếu đúng chữ khoản 4 Điều 68",
            "x": 2028,
            "y": 1485,
            "size": 32,
            "at": "l3:clause four",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "g-70",
            "t": "text",
            "text": "k17 Điều 70: xin đưa vào",
            "x": 2028,
            "y": 1545,
            "size": 48,
            "at": "l4:seventeen",
            "color": "accent",
            "hl": [
              {
                "text": "đưa vào",
                "at": "l4:bring"
              }
            ]
          },
          {
            "id": "g-i1",
            "t": "illus",
            "name": "busts-in-silhouette",
            "x": 3008,
            "y": 1250,
            "size": 100,
            "at": "l5:co-owners"
          },
          {
            "id": "g-s1",
            "t": "text",
            "text": "Đồng sở hữu tài sản",
            "x": 3118,
            "y": 1265,
            "size": 44,
            "at": "l5:co-owners"
          },
          {
            "id": "g-i2",
            "t": "illus",
            "name": "house",
            "x": 3008,
            "y": 1360,
            "size": 100,
            "at": "l5:living"
          },
          {
            "id": "g-s2",
            "t": "text",
            "text": "Đang giữ, đang ở",
            "x": 3118,
            "y": 1375,
            "size": 44,
            "at": "l5:living"
          },
          {
            "id": "g-i3",
            "t": "illus",
            "name": "handshake",
            "x": 3008,
            "y": 1470,
            "size": 100,
            "at": "l5:guarantors"
          },
          {
            "id": "g-s3",
            "t": "text",
            "text": "Người bảo lãnh",
            "x": 3118,
            "y": 1485,
            "size": 44,
            "at": "l5:guarantors"
          },
          {
            "id": "g-i4",
            "t": "illus",
            "name": "package",
            "x": 3008,
            "y": 1580,
            "size": 100,
            "at": "l5:received"
          },
          {
            "id": "g-s4",
            "t": "text",
            "text": "Nhận lại tài sản từ bị đơn",
            "x": 3118,
            "y": 1595,
            "size": 40,
            "at": "l5:received"
          },
          {
            "id": "g-miss",
            "t": "text",
            "text": "Bỏ sót → đương sự thiếu",
            "x": 2028,
            "y": 1700,
            "size": 54,
            "at": "l6:Miss",
            "color": "coral",
            "hl": [
              {
                "text": "đương sự thiếu",
                "at": "l6:incomplete"
              }
            ]
          },
          {
            "id": "g-miss2",
            "t": "text",
            "text": "án coi như chưa giải quyết hết quan hệ",
            "x": 2028,
            "y": 1780,
            "size": 30,
            "at": "l6:fully",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five: eight fifteen. The group most often missed.",
          "sub": "Chặng năm: tám giờ mười lăm. Nhóm hay bị bỏ sót nhất.",
          "keys": [
            "hay bị bỏ sót"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article sixty-eight, clause one: persons with related rights and obligations are parties too.",
          "sub": "Khoản 1 Điều 68: người có quyền lợi, nghĩa vụ liên quan cũng là đương sự.",
          "keys": [
            "cũng là đương sự"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "They neither sue nor get sued, but the case may touch them. Check clause four's exact words.",
          "sub": "Họ không kiện, không bị kiện, nhưng vụ án có thể chạm tới họ. Đối chiếu đúng chữ khoản 4."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Article seventy, clause seventeen: a party may ask the court to bring them in.",
          "sub": "Khoản 17 Điều 70: đương sự có quyền đề nghị toà đưa họ vào tham gia tố tụng.",
          "keys": [
            "đưa họ vào"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Watch for co-owners, people holding or living in the property, guarantors, those who received it from the defendant.",
          "sub": "Để ý: người đồng sở hữu, người đang giữ hoặc ở trong tài sản, người bảo lãnh, người nhận lại tài sản từ bị đơn."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Miss them, and the parties are incomplete. The case is not fully resolved.",
          "sub": "Bỏ sót họ, phần đương sự thiếu, và bản án bị coi là chưa giải quyết hết.",
          "keys": [
            "phần đương sự thiếu"
          ]
        }
      ],
      "ref": "p13,p14"
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 20:30 · Đề thuê nhà",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:eight thirty"
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
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "house",
                "old-key"
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
            "at": "l1:worked",
            "caption": "20:30 · làm mẫu",
            "icon": "house"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "1 · Tranh chấp hợp đồng thuê nhà",
            "x": 3996,
            "y": 1255,
            "size": 42,
            "at": "l3:lease"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "2 · Nguyên đơn: ông A",
            "x": 3996,
            "y": 1320,
            "size": 42,
            "at": "l3:plaintiff"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "3 · Bị đơn: bà B, bên thuê",
            "x": 3996,
            "y": 1385,
            "size": 42,
            "at": "l3:defendant"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "4 · Bà C: người liên quan",
            "x": 3996,
            "y": 1450,
            "size": 42,
            "at": "l4:related",
            "color": "accent",
            "hl": [
              {
                "text": "người liên quan",
                "at": "l4:related"
              }
            ]
          },
          {
            "id": "h-4b",
            "t": "text",
            "text": "đề nghị đưa vào theo khoản 17 Điều 70",
            "x": 4026,
            "y": 1510,
            "size": 26,
            "at": "l4:related+400",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "h-5",
            "t": "text",
            "text": "5 · Yêu cầu của ông A",
            "x": 3996,
            "y": 1560,
            "size": 42,
            "at": "l5:request"
          },
          {
            "id": "h-r",
            "t": "text",
            "text": "Ai ở trong tài sản",
            "x": 3996,
            "y": 1680,
            "size": 56,
            "at": "l6:inside",
            "color": "accent"
          },
          {
            "id": "h-r2",
            "t": "text",
            "text": "→ có thể ở trong vụ án",
            "x": 3996,
            "y": 1755,
            "size": 56,
            "at": "l6:case",
            "color": "accent",
            "hl": [
              {
                "text": "trong vụ án",
                "at": "l6:case"
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
          "say": "Stop six: eight thirty. Thảo walks through a worked example.",
          "sub": "Chặng sáu: tám giờ rưỡi. Thảo làm mẫu một đề."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Mr A rents to Ms B. She lets Ms C move in. Lease over, he wants the house.",
          "sub": "Ông A cho bà B thuê nhà. Bà B cho bà C vào ở cùng. Hết hạn, ông A đòi nhà.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One: a house lease dispute. Two: plaintiff, Mr A. Three: defendant, Ms B, the tenant.",
          "sub": "Một: tranh chấp hợp đồng thuê nhà. Hai: nguyên đơn ông A. Ba: bị đơn bà B, bên thuê."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Four: Ms C lives there. An eviction hits her, so bring her in as a related party.",
          "sub": "Bốn: bà C đang ở trong nhà, buộc trả nhà thì bà bị ảnh hưởng: đề nghị đưa vào là người liên quan.",
          "keys": [
            "người liên quan"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Five: write down Mr A's request.",
          "sub": "Năm: ghi lại yêu cầu của ông A."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Whoever is inside the property may be inside the case.",
          "sub": "Ai đang ở trong tài sản, người đó có thể đang ở trong vụ án.",
          "keys": [
            "đang ở trong vụ án"
          ]
        }
      ],
      "ref": "p15,p16"
    },
    {
      "id": "s17",
      "module": "BRK-07",
      "data": {
        "question": "Xếp xong đương sự rồi. Họ đòi gì?",
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
          "say": "Everyone is placed. But what do they actually want?",
          "sub": "Xếp xong đương sự rồi. Mà họ đòi gì?",
          "keys": [
            "họ đòi gì"
          ]
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
            "text": "⑦ 20:45 · Viết lại yêu cầu",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:eight forty-five"
          },
          {
            "id": "i-nd",
            "t": "text",
            "text": "Nguyên đơn đòi: gốc · lãi · bồi thường",
            "x": 5964,
            "y": 1260,
            "size": 44,
            "at": "l2:principal"
          },
          {
            "id": "i-nd2",
            "t": "text",
            "text": "trả tài sản · huỷ hợp đồng",
            "x": 5984,
            "y": 1325,
            "size": 44,
            "at": "l2:cancelling",
            "color": "muted"
          },
          {
            "id": "i-bd",
            "t": "text",
            "text": "Bị đơn: nhận? phản đối? kiện ngược?",
            "x": 5964,
            "y": 1400,
            "size": 44,
            "at": "l3:accept",
            "hl": [
              {
                "text": "kiện ngược",
                "at": "l3:counterclaim"
              }
            ]
          },
          {
            "id": "i-91",
            "t": "text",
            "text": "Tách yêu cầu → ai chứng minh gì",
            "x": 5964,
            "y": 1480,
            "size": 40,
            "at": "l4:prove",
            "color": "accent"
          },
          {
            "id": "i-bf",
            "t": "text",
            "text": "Trước: “A kiện B đòi tiền”",
            "x": 6904,
            "y": 1260,
            "size": 40,
            "at": "l5:Before",
            "color": "muted"
          },
          {
            "id": "i-bfx",
            "t": "strike",
            "over": "i-bf",
            "at": "l6:After"
          },
          {
            "id": "i-af1",
            "t": "text",
            "text": "Sau: A đòi gốc + lãi chậm trả",
            "x": 6904,
            "y": 1340,
            "size": 44,
            "at": "l6:After",
            "color": "accent"
          },
          {
            "id": "i-af2",
            "t": "text",
            "text": "B nhận trả gốc, không nhận lãi",
            "x": 6904,
            "y": 1410,
            "size": 44,
            "at": "l6:interest",
            "hl": [
              {
                "text": "không nhận lãi",
                "at": "l6:not the interest"
              }
            ]
          },
          {
            "id": "i-r",
            "t": "text",
            "text": "Mỗi yêu cầu = một câu hỏi tiếp",
            "x": 5964,
            "y": 1710,
            "size": 54,
            "at": "l7:question",
            "color": "accent",
            "hl": [
              {
                "text": "câu hỏi tiếp",
                "at": "l7:marker"
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
          "say": "Stop seven: eight forty-five. Rewrite every claim.",
          "sub": "Chặng bảy: 20:45. Viết lại từng yêu cầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Plaintiff wants what? Principal, interest, damages, the property, or cancelling the contract?",
          "sub": "Nguyên đơn đòi gì: tiền gốc, tiền lãi, bồi thường, trả tài sản hay huỷ hợp đồng?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Which parts does the defendant accept, which does she oppose, any counterclaim?",
          "sub": "Bị đơn đồng ý phần nào, phản đối phần nào, có yêu cầu ngược lại không?",
          "keys": [
            "yêu cầu ngược lại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Article ninety-one: whoever claims must prove. Split the claims, and you see who proves what.",
          "sub": "Điều 91: ai yêu cầu, người đó chứng minh. Tách từng yêu cầu là thấy ai phải chứng minh gì.",
          "keys": [
            "ai phải chứng minh gì"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Before: Mr A sues Ms B for money.",
          "sub": "Trước: “A kiện B đòi tiền”"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "After: A wants principal and late interest. B accepts the principal, not the interest.",
          "sub": "Sau: ông A đòi tiền gốc và lãi chậm trả; bà B đồng ý trả gốc, không đồng ý trả lãi.",
          "keys": [
            "không đồng ý trả lãi"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Each claim is a question the marker will ask next.",
          "sub": "Mỗi yêu cầu là một câu người chấm sẽ hỏi tiếp.",
          "keys": [
            "người chấm sẽ hỏi tiếp"
          ]
        }
      ],
      "ref": "p17,p18,p19"
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
            "text": "21:00 · Khung tám ô",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:nine"
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
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "thumb"
                }
              ],
              "props": [
                "clipboard"
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
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:same table",
            "caption": "21:00 · cùng bàn",
            "icon": "clipboard"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Lần này: không lệch li nào",
            "x": 7932,
            "y": 1750,
            "size": 52,
            "at": "l4:hair",
            "color": "accent",
            "hl": [
              {
                "text": "không lệch li nào",
                "at": "l4:not a hair"
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
          "say": "Nine o'clock. Same table, same facts as seven.",
          "sub": "Chín giờ. Vẫn bàn ấy, vẫn đề lúc bảy giờ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Loan contract dispute. And Mr D, I'm placing him first.",
          "sub": "Tranh chấp hợp đồng vay tài sản. Và ông D, tôi xét vị trí trước.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "See? Now ask me about time limits.",
          "sub": "Thấy chưa? Giờ mới hỏi thời hiệu.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A hair off at the start, a mile off at the end. Tonight, not a hair off.",
          "sub": "“Sai một li, đi một dặm.” Tối nay, không lệch li nào.",
          "keys": [
            "không lệch li nào"
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
      "ref": "outro"
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
          },
          {
            "at": "l1",
            "fit": [
              "j-l0",
              "j-l7"
            ],
            "zoom": 1.1,
            "ms": 700
          },
          {
            "at": "l3:end",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1265,
            "w": 40,
            "h": 40,
            "at": "l1:name",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1247,
            "size": 52,
            "at": "l1:name+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Tên quan hệ · Điều 26 hay 30",
            "x": 7992,
            "y": 1257,
            "size": 34,
            "at": "l1:name+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1327,
            "w": 40,
            "h": 40,
            "at": "l1:contract",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1309,
            "size": 52,
            "at": "l1:contract+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Hợp đồng, chủ thể, diễn biến",
            "x": 7992,
            "y": 1319,
            "size": 34,
            "at": "l1:contract+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1389,
            "w": 40,
            "h": 40,
            "at": "l1:plaintiff",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1371,
            "size": 52,
            "at": "l1:plaintiff+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Nguyên đơn, lý do kiện",
            "x": 7992,
            "y": 1381,
            "size": 34,
            "at": "l1:plaintiff+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1451,
            "w": 40,
            "h": 40,
            "at": "l1:defendant",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1433,
            "size": 52,
            "at": "l1:defendant+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Bị đơn, điều bị cho xâm phạm",
            "x": 7992,
            "y": 1443,
            "size": 34,
            "at": "l1:defendant+200"
          },
          {
            "id": "j2-c0",
            "t": "box",
            "x": 7932,
            "y": 1515,
            "w": 40,
            "h": 40,
            "at": "l2:related",
            "stroke": 5
          },
          {
            "id": "j2-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1497,
            "size": 52,
            "at": "l2:related+600",
            "color": "accent"
          },
          {
            "id": "j2-l0",
            "t": "text",
            "text": "Người liên quan, người giữ tài sản",
            "x": 7992,
            "y": 1507,
            "size": 34,
            "at": "l2:related+200"
          },
          {
            "id": "j2-c1",
            "t": "box",
            "x": 7932,
            "y": 1577,
            "w": 40,
            "h": 40,
            "at": "l2:claims",
            "stroke": 5
          },
          {
            "id": "j2-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1559,
            "size": 52,
            "at": "l2:claims+600",
            "color": "accent"
          },
          {
            "id": "j2-l1",
            "t": "text",
            "text": "Yêu cầu: đồng ý, phản đối",
            "x": 7992,
            "y": 1569,
            "size": 34,
            "at": "l2:claims+200"
          },
          {
            "id": "j2-c2",
            "t": "box",
            "x": 7932,
            "y": 1639,
            "w": 40,
            "h": 40,
            "at": "l2:dates",
            "stroke": 5
          },
          {
            "id": "j2-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1621,
            "size": 52,
            "at": "l2:dates+600",
            "color": "accent"
          },
          {
            "id": "j2-l2",
            "t": "text",
            "text": "Các mốc ngày → thời hiệu",
            "x": 7992,
            "y": 1631,
            "size": 34,
            "at": "l2:dates+200"
          },
          {
            "id": "j2-c3",
            "t": "box",
            "x": 7932,
            "y": 1701,
            "w": 40,
            "h": 40,
            "at": "l2:client",
            "stroke": 5
          },
          {
            "id": "j2-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1683,
            "size": 52,
            "at": "l2:client+600",
            "color": "accent"
          },
          {
            "id": "j2-l3",
            "t": "text",
            "text": "Khách hàng đứng ở đâu",
            "x": 7992,
            "y": 1693,
            "size": 34,
            "at": "l2:client+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The frame: dispute name and article, contract and story, plaintiff, defendant.",
          "sub": "Khung ghi nhanh: tên quan hệ và điều, hợp đồng và diễn biến, nguyên đơn, bị đơn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Related persons, claims, dates for the time limit, and where your client stands.",
          "sub": "Người liên quan, yêu cầu các bên, các mốc ngày để tính thời hiệu, và vị trí khách hàng.",
          "keys": [
            "các mốc ngày"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One draft page, reused by every later step. The dates lead to the next lesson.",
          "sub": "Một trang nháp, mọi bước sau dùng lại. Dòng mốc ngày dẫn sang bài thẩm quyền và thời hiệu.",
          "keys": [
            "mọi bước sau dùng lại"
          ]
        }
      ],
      "ref": "p20,p21,p22"
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
            "at": "l1:name",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:party",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l3:claim",
            "fit": "I",
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
            "x": 6664,
            "y": 340,
            "at": "l1:name"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 2828,
            "y": 1260,
            "at": "l2:party"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 7464,
            "y": 1710,
            "at": "l3:claim"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài là kiến thức nghề để ôn thi, không phải tư vấn cho vụ việc cụ thể; luật đang sửa đổi, đối chiếu văn bản hiện hành.",
            "x": 7932,
            "y": 1830,
            "size": 22,
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
          "say": "So: read the facts like a client talking. Give the dispute a precise name.",
          "sub": "Tóm lại: đọc đề như nghe khách kể. Gọi tên quan hệ thật cụ thể.",
          "keys": [
            "thật cụ thể"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Place every party, including the related party hiding in the house.",
          "sub": "Xếp đủ đương sự, kể cả người liên quan đang “trốn” trong nhà."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And split each claim. Then the law has somewhere to land.",
          "sub": "Và tách từng yêu cầu. Khi đó điều luật mới có chỗ đáp.",
          "keys": [
            "tách từng yêu cầu"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s31",
      "module": "QUIZ-01",
      "data": {
        "q": "The exam asks you to protect a woman who is being sued, what is her position?",
        "options": [
          "She is a witness, since clients cannot be parties in exam questions",
          "She is the plaintiff, because the lawyer always represents the plaintiff",
          "She is the defendant, so the defence centres on opposing the claim"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "balance-scale",
        "why": "Người bị kiện là bị đơn, nên hướng bảo vệ xoay quanh phản đối yêu cầu. Bài lấy ví dụ đề yêu cầu bảo vệ quyền lợi cho bà B."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The exam asks you to protect a woman who is being sued, what is her position?",
          "sub": "Đề yêu cầu bảo vệ một người phụ nữ đang bị kiện, vị trí của bà ấy là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "She is the defendant, so the defence opposes the claim.",
          "sub": "Bà ấy là bị đơn, nên hướng bảo vệ là phản đối yêu cầu."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[16]"
    },
    {
      "id": "s32",
      "module": "END-05",
      "data": {
        "text": "Lấy một đề cũ, điền khung tám ô trong mười phút",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your move: one old paper, the eight box frame, ten minutes. Then the forty questions below!",
          "sub": "Việc làm ngay: một đề cũ, khung tám ô, mười phút. Rồi thử bốn mươi câu bên dưới nhé!",
          "face": "laugh"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-24",
  "notes": "#145 dựng mới theo hạt nhân #136 + biến thể #144 (bang-trang-kit): Đét đứng trái + một bảng trắng 10 ô theo BUỔI ÔN TỐI THỨ TƯ của nhóm Thảo ở văn phòng Cô Hoa (19:00 Dũng ghi “tranh chấp dân sự” → 19:10 giáo trình, gọi tên → 19:25 cụ thể đến đâu → 19:40 dân sự hay kinh doanh (đề Lan, Công ty A/B) → 20:00 ai kiện ai → Khoan đã! ông D cũng ký → 20:15 người liên quan → 20:30 làm mẫu thuê nhà → 20:45 viết lại yêu cầu → 21:00 khung tám ô, khép vòng cùng bàn, cùng đề, “Sai một li, đi một dặm” → “không lệch li nào”). Mở HOOK-24 (neo số: năm, sáu nhân vật; ba, bốn giao dịch — intro). Nhân vật (3): Thảo, Lan (thay Ngân p7, p11), Dũng (thay Khoa p11) — xem w145/_series/bar-exam-written1-civil.md. Người trong đề (ông A, bà B, bà C, ông D, Công ty A/B) chỉ là chữ. Ngắt nhịp: BRK-08 (buổi tối sáu chặng), BRK-04 (cách A/B của Lan, p7), BRK-10 (rút ra p8), BRK-07 (rehook sang yêu cầu). Điều luật chỉ lấy từ bài: Đ26, 30, 35, 36, 68 (k1–k4), 70 k17, 91 BLTTDS; Đ429, 155 k3 BLDS; Luật 85/2025/QH15; Luật Đất đai, Luật Thương mại đang sửa. Câu đố questions[16]. Lưu ý chung cuối bài (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
