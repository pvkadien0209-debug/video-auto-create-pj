// en-visa-documents-checklist--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "en-visa-documents-checklist--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "en-us-student-visa-applicants",
    "slug": "en-visa-documents-checklist",
    "door": "ky-nang",
    "level": "B1",
    "title": "Đi phỏng vấn visa F-1 mang những giấy tờ gì?",
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
              "set": "hotel",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "worried"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "file-folder",
                "passport-control"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Năm 7:30 · ô cửa kính (minh hoạ)",
            "icon": "passport-control"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Đưa gì?",
            "x": 60,
            "y": 90,
            "size": 120,
            "at": "l4:Guess",
            "color": "accent",
            "hl": [
              {
                "text": "Đưa gì?",
                "at": "l4:Guess"
              }
            ]
          },
          {
            "id": "a-A",
            "t": "text",
            "text": "A. Cả xấp, cho chắc",
            "x": 60,
            "y": 300,
            "size": 56,
            "at": "l4:whole stack"
          },
          {
            "id": "a-B",
            "t": "text",
            "text": "B. Đúng một tờ",
            "x": 60,
            "y": 400,
            "size": 56,
            "at": "l5:one page"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thursday, seven thirty. Meet Lan, at the visa window, holding a folder as thick as a brick.",
          "sub": "Thứ Năm, bảy rưỡi sáng. Đây là Lan, ở ô cửa visa, ôm tập hồ sơ dày như viên gạch.",
          "keys": [
            "dày như viên gạch"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Behind the glass: Sam, the consular officer.",
          "sub": "Sau ô kính là chị Sam, viên chức lãnh sự."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Can you show me your financial documents?",
          "sub": "Em cho xem giấy tờ tài chính nhé?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Guess. Does Lan hand over the whole stack, to be safe?",
          "sub": "Đoán xem. Lan nên đưa cả xấp cho chắc ăn?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Or just one page?",
          "sub": "Hay chỉ đưa đúng một tờ?",
          "keys": [
            "đúng một tờ"
          ]
        }
      ],
      "beats": {
        "after": 1500
      },
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        },
        {
          "at": "l5",
          "key": "cau-hoi"
        }
      ],
      "ref": "p15"
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
          }
        ],
        "items": [
          {
            "id": "a-r",
            "t": "ring",
            "around": [
              "a-A"
            ],
            "color": "coral",
            "stroke": 8,
            "at": "l1:Most"
          },
          {
            "id": "a-rw",
            "t": "text",
            "text": "Tua lại 12 tiếng…",
            "x": 60,
            "y": 560,
            "size": 56,
            "at": "l2:Rewind",
            "color": "muted",
            "hl": [
              {
                "text": "12 tiếng",
                "at": "l2:twelve"
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
          "say": "Most people pick A. More paper, more safety, right?",
          "sub": "Đa số chọn A. Nhiều giấy thì càng an toàn, đúng không?",
          "keys": [
            "Đa số chọn A"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Hold that thought. Rewind twelve hours.",
          "sub": "Giữ câu trả lời đó lại. Tua ngược mười hai tiếng."
        }
      ],
      "ref": "p15"
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
          },
          {
            "at": "l3",
            "fit": [
              "b-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "B",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "b-t",
            "t": "text",
            "text": "Tối hôm trước · 19:00",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:School"
          },
          {
            "id": "b-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 150,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "point"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "face": "worried"
                }
              ],
              "props": [
                "page-facing-up",
                "file-folder",
                "money-bag"
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
            "at": "l1:night",
            "caption": "Tối hôm trước · giấy kín bàn",
            "icon": "page-facing-up"
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Học bạ · sổ tiết kiệm · giấy nhà",
            "x": 2028,
            "y": 170,
            "size": 44,
            "at": "l1:reports"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "ảnh · thư giới thiệu…",
            "x": 2028,
            "y": 235,
            "size": 44,
            "at": "l1:photos",
            "color": "muted"
          },
          {
            "id": "b-dl",
            "t": "text",
            "text": "Mang hết: rối · Bỏ bớt: thiếu?",
            "x": 2028,
            "y": 330,
            "size": 46,
            "at": "l4:mess",
            "color": "coral",
            "hl": [
              {
                "text": "thiếu?",
                "at": "l4:missing"
              }
            ]
          },
          {
            "id": "b-ca",
            "t": "text",
            "text": "“Giấy rách phải giữ lấy lề”",
            "x": 2028,
            "y": 440,
            "size": 52,
            "at": "l5:torn",
            "color": "accent",
            "hl": [
              {
                "text": "giữ lấy lề",
                "at": "l5:margin"
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
          "say": "The night before. School reports, savings book, house papers, photos, reference letters. The table disappears.",
          "sub": "Tối hôm trước. Học bạ, sổ tiết kiệm, giấy tờ nhà, ảnh, thư giới thiệu. Mặt bàn biến mất."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Cô Hoa, Lan's mum, the chief of paperwork.",
          "sub": "Còn đây là cô Hoa, mẹ Lan, tổng chỉ huy giấy tờ.",
          "keys": [
            "tổng chỉ huy giấy tờ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Take everything, dear. Better too much than too little!",
          "sub": "Mang hết đi con. Thừa còn hơn thiếu!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "But everything is a mess, Mum. And if I leave some, what if something's missing?",
          "sub": "Mang hết thì rối mẹ ạ. Mà bỏ bớt, lỡ thiếu thì sao?",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Grandma says: even torn paper keeps its margin. Order matters more than weight.",
          "sub": "Ông bà dặn: “Giấy rách phải giữ lấy lề.” Thứ tự quan trọng hơn độ dày.",
          "keys": [
            "Giấy rách phải giữ lấy lề"
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
            "id": "b-q",
            "t": "text",
            "text": "Mang những giấy gì?",
            "x": 2028,
            "y": 540,
            "size": 64,
            "at": "l1:bring",
            "color": "accent",
            "hl": [
              {
                "text": "giấy gì?",
                "at": "l1:papers"
              }
            ]
          },
          {
            "id": "b-a1",
            "t": "text",
            "text": "Bắt buộc: đủ, để trên cùng",
            "x": 2028,
            "y": 620,
            "size": 46,
            "at": "l2:required",
            "hl": [
              {
                "text": "trên cùng",
                "at": "l2:top"
              }
            ]
          },
          {
            "id": "b-a2",
            "t": "text",
            "text": "Hỗ trợ: đúng hồ sơ, theo nhóm",
            "x": 2028,
            "y": 680,
            "size": 46,
            "at": "l3:support",
            "hl": [
              {
                "text": "theo nhóm",
                "at": "l3:groups"
              }
            ]
          },
          {
            "id": "b-chk",
            "t": "text",
            "text": "Mỗi nơi có thể đòi thêm",
            "x": 2848,
            "y": 690,
            "size": 42,
            "at": "l4:extra",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So which papers do you really bring?",
          "sub": "Vậy rốt cuộc mang những giấy gì?",
          "keys": [
            "những giấy gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Required papers: always all of them, on top.",
          "sub": "Giấy bắt buộc: luôn mang đủ, để trên cùng.",
          "keys": [
            "để trên cùng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Support papers: the ones about your case, sorted into groups.",
          "sub": "Giấy hỗ trợ: những tờ liên quan hồ sơ của bạn, xếp theo nhóm.",
          "keys": [
            "xếp theo nhóm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Each interview place may ask for extra, and rules change. Check your place's page.",
          "sub": "Mỗi nơi có thể đòi thêm, quy định cũng đổi. Kiểm trang của nơi bạn hẹn.",
          "keys": [
            "Kiểm trang của nơi bạn hẹn"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s04",
      "module": "BRK-08",
      "data": {
        "title": "Một đêm trước phỏng vấn",
        "points": [
          {
            "label": "19:00",
            "sub": "Năm giấy bắt buộc",
            "illus": "passport-control"
          },
          {
            "label": "19:30",
            "sub": "Soát I-20",
            "illus": "magnifying-glass-tilted-left"
          },
          {
            "label": "20:00",
            "sub": "Giấy hỗ trợ",
            "illus": "bookmark-tabs"
          },
          {
            "label": "21:00",
            "sub": "Bìa năm ngăn",
            "illus": "card-index-dividers"
          },
          {
            "label": "22:00",
            "sub": "Tập nói",
            "illus": "speech-balloon"
          },
          {
            "label": "7:30",
            "sub": "Ô cửa kính",
            "illus": "file-folder"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One night, six stops.",
          "sub": "Một đêm, sáu chặng.",
          "keys": [
            "sáu chặng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Coffee ready. Let's sort.",
          "sub": "Pha sẵn cà phê. Bắt đầu xếp nào."
        }
      ],
      "ref": "p13"
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
            "at": "l5",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 19:00 · Năm giấy bắt buộc",
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
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "hold"
                }
              ],
              "props": [
                "passport-control",
                "receipt"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:must",
            "caption": "19:00 · tờ nào cũng phải có",
            "icon": "receipt"
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 170,
            "w": 44,
            "h": 44,
            "at": "l2:I twenty",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 152,
            "size": 56,
            "at": "l2:I twenty+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "I-20 bản gốc, ký mực",
            "x": 4061,
            "y": 162,
            "size": 42,
            "at": "l2:I twenty+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 245,
            "w": 44,
            "h": 44,
            "at": "l2:passport",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 227,
            "size": 56,
            "at": "l2:passport+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Hộ chiếu còn hạn đi Mỹ",
            "x": 4061,
            "y": 237,
            "size": 42,
            "at": "l2:passport+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 320,
            "w": 44,
            "h": 44,
            "at": "l3:DS",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 302,
            "size": 56,
            "at": "l3:DS+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Trang xác nhận DS-160",
            "x": 4061,
            "y": 312,
            "size": 42,
            "at": "l3:DS+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 395,
            "w": 44,
            "h": 44,
            "at": "l3:receipt",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 377,
            "size": 56,
            "at": "l3:receipt+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Biên lai lệ phí (nếu đóng trước)",
            "x": 4061,
            "y": 387,
            "size": 42,
            "at": "l3:receipt+200"
          },
          {
            "id": "c-c4",
            "t": "box",
            "x": 3996,
            "y": 470,
            "w": 44,
            "h": 44,
            "at": "l4:photo",
            "stroke": 5
          },
          {
            "id": "c-k4",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 452,
            "size": 56,
            "at": "l4:photo+600",
            "color": "accent"
          },
          {
            "id": "c-l4",
            "t": "text",
            "text": "Ảnh đúng chuẩn visa Mỹ",
            "x": 4061,
            "y": 462,
            "size": 42,
            "at": "l4:photo+200"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Study in the States — Prepare for Your Visa Interview",
            "x": 3996,
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
          "say": "Stop one, seven p.m. Study in the States lists five must-haves.",
          "sub": "Chặng một, bảy giờ tối. Study in the States liệt kê năm thứ phải mang.",
          "keys": [
            "năm thứ phải mang"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your original I twenty with an ink signature. A passport valid for the trip.",
          "sub": "I-20 bản gốc có chữ ký mực. Hộ chiếu còn hạn để đi Mỹ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The DS one sixty confirmation page. The fee receipt, if you paid before the interview.",
          "sub": "Trang xác nhận đơn DS-160. Biên lai lệ phí, nếu phải đóng trước buổi phỏng vấn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And a photo that meets US visa photo rules.",
          "sub": "Và ảnh đúng chuẩn ảnh visa Mỹ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "Five out of five. Done!",
          "sub": "Đủ năm trên năm. Xong!",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Not so fast. The small print has more.",
          "sub": "Khoan vui. Chữ nhỏ còn nữa."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 800
        }
      ],
      "ref": "p1"
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
            "id": "c-6",
            "t": "text",
            "text": "Hộ chiếu: ≥ 6 tháng sau lưu trú",
            "x": 3996,
            "y": 560,
            "size": 40,
            "at": "l1:six months",
            "hl": [
              {
                "text": "≥ 6 tháng",
                "at": "l1:six months"
              }
            ]
          },
          {
            "id": "c-7",
            "t": "text",
            "text": "Ảnh tải không được → mang ảnh in",
            "x": 3996,
            "y": 615,
            "size": 36,
            "at": "l2:upload"
          },
          {
            "id": "c-8",
            "t": "text",
            "text": "+ Biên lai SEVIS · thư hẹn: in ra!",
            "x": 3996,
            "y": 670,
            "size": 40,
            "at": "l4:print",
            "color": "accent",
            "hl": [
              {
                "text": "in ra!",
                "at": "l4:print"
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
          "say": "The State Department adds: your passport must be valid six months beyond your stay, unless your country is exempt.",
          "sub": "Bộ Ngoại giao Mỹ thêm: hộ chiếu còn hạn ít nhất sáu tháng sau thời gian định ở Mỹ, trừ nước được miễn.",
          "keys": [
            "sáu tháng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The photo goes up with the DS one sixty. If it won't upload, bring a printed one.",
          "sub": "Ảnh tải lên khi khai DS-160. Tải không được thì mang một ảnh in."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "The SEVIS receipt and the appointment letter? They're only in my email!",
          "sub": "Biên lai SEVIS với giấy hẹn à? Con chỉ để trong email!",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Concordia reminds you to bring both. Light papers, often forgotten. Print them.",
          "sub": "Concordia nhắc mang cả hai. Giấy nhẹ mà hay quên. In ra ngay.",
          "keys": [
            "In ra ngay"
          ]
        }
      ],
      "ref": "p2,p3"
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
            "at": "l6",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 19:30 · Soát I-20",
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
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "page-facing-up",
                "envelope-with-arrow"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l3:Dũng",
            "caption": "19:30 · Dũng ghé, mang I-20 đã sửa",
            "icon": "envelope-with-arrow"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Bản gốc, ký mực ≠ bản chụp",
            "x": 5964,
            "y": 170,
            "size": 48,
            "at": "l2:original",
            "hl": [
              {
                "text": "ký mực",
                "at": "l2:ink"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Tên, ngày sinh ↔ hộ chiếu",
            "x": 5964,
            "y": 255,
            "size": 48,
            "at": "l2:name"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Ngành · ngày bắt đầu · thời gian",
            "x": 5964,
            "y": 335,
            "size": 44,
            "at": "l2:major"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "“How long will you study?”",
            "x": 5964,
            "y": 420,
            "size": 44,
            "at": "l6:How long",
            "color": "accent",
            "hl": [
              {
                "text": "How long",
                "at": "l6:How long"
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
          "say": "Stop two, seven thirty. The I twenty, the star of the folder.",
          "sub": "Chặng hai, bảy rưỡi. I-20, ngôi sao của tập hồ sơ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The original, signed in ink, not a copy from email. Check the name and date of birth against the passport, then the major, start date and length.",
          "sub": "Bản gốc ký mực, không phải bản in từ email. Đối chiếu tên, ngày sinh với hộ chiếu, rồi ngành, ngày bắt đầu, thời gian học."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ding dong. Meet Dũng, Lan's classmate, future engineer.",
          "sub": "Kính coong. Đây là Dũng, bạn cùng lớp Lan, kỹ sư tương lai."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Check every letter. My middle name was one letter off from my passport!",
          "sub": "Soát từng chữ nhé. Tên đệm của tớ lệch hộ chiếu đúng một chữ!",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "I emailed the international office with my passport page. They sent a corrected form before my interview.",
          "sub": "Tớ email văn phòng sinh viên quốc tế, gửi kèm trang hộ chiếu. Trường gửi I-20 đã sửa trước buổi hẹn."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And know your study length. Wabash says the officer may ask: how long will you study?",
          "sub": "Và nhớ thời gian học. Wabash dặn: viên chức có thể hỏi “How long will you study?”."
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p4,p5,p6"
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
          }
        ],
        "items": [
          {
            "id": "d-k",
            "t": "text",
            "text": "Sai một chữ? Sửa trước!",
            "x": 5964,
            "y": 560,
            "size": 56,
            "at": "l1:fix",
            "color": "accent",
            "hl": [
              {
                "text": "Sửa trước!",
                "at": "l1:before"
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
          "say": "One letter wrong on paper? Fix it before, rather than explain it after.",
          "sub": "Sai một chữ trên giấy? Sửa trước còn hơn giải thích sau.",
          "keys": [
            "Sửa trước"
          ]
        }
      ],
      "ref": "p7"
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
            "fit": "E",
            "ms": 500
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 20:00 · Giấy hỗ trợ",
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
                  "pose": "hold"
                },
                {
                  "id": "lan",
                  "side": "right"
                }
              ],
              "props": [
                "bank",
                "graduation-cap"
              ],
              "camera": [
                {
                  "at": "l1:end",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:support",
            "caption": "20:00 · cô Hoa ôm chồng giấy",
            "icon": "bank"
          },
          {
            "id": "e-0",
            "t": "text",
            "text": "Có thể hỏi, không chắc",
            "x": 7932,
            "y": 170,
            "size": 40,
            "at": "l1:may"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Học lực:",
            "x": 7932,
            "y": 245,
            "size": 50,
            "at": "l2:Academic",
            "color": "accent"
          },
          {
            "id": "e-1b",
            "t": "text",
            "text": "bảng điểm, bằng, chứng chỉ, điểm thi",
            "x": 8142,
            "y": 255,
            "size": 38,
            "at": "l2:transcripts"
          },
          {
            "id": "e-1c",
            "t": "text",
            "text": "+ điểm tiếng Anh nếu trường dùng",
            "x": 8142,
            "y": 310,
            "size": 36,
            "at": "l3:English",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, eight p.m. The support papers. The officer may ask, not always.",
          "sub": "Chặng ba, tám giờ tối. Giấy hỗ trợ: viên chức có thể hỏi, không chắc lần nào cũng hỏi.",
          "keys": [
            "có thể hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three groups. Academic: transcripts, diplomas, certificates, and the test scores your school requires.",
          "sub": "Ba nhóm. Học lực: bảng điểm, bằng cấp, chứng chỉ, điểm các kỳ thi trường yêu cầu.",
          "keys": [
            "Học lực"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Concordia adds English test scores, if your school used them.",
          "sub": "Concordia nhắc thêm điểm thi tiếng Anh, nếu trường dùng khi xét tuyển."
        }
      ],
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
            "fit": "E",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "e-2",
            "t": "text",
            "text": "Tài chính:",
            "x": 7932,
            "y": 395,
            "size": 50,
            "at": "l1:Finances",
            "color": "accent"
          },
          {
            "id": "e-2b",
            "t": "text",
            "text": "học phí, sinh hoạt, đi lại",
            "x": 8172,
            "y": 405,
            "size": 38,
            "at": "l1:tuition"
          },
          {
            "id": "e-2c",
            "t": "text",
            "text": "≥ 1 năm học · số trên I-20",
            "x": 8172,
            "y": 460,
            "size": 38,
            "at": "l2:one year",
            "hl": [
              {
                "text": "≥ 1 năm học",
                "at": "l2:one year"
              }
            ]
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Ý định về:",
            "x": 7932,
            "y": 545,
            "size": 50,
            "at": "l4:return",
            "color": "accent"
          },
          {
            "id": "e-3b",
            "t": "text",
            "text": "gia đình, việc làm, kế hoạch nghề",
            "x": 8172,
            "y": 555,
            "size": 38,
            "at": "l4:family"
          },
          {
            "id": "e-3c",
            "t": "text",
            "text": "nghỉ học lâu → thêm giấy",
            "x": 8172,
            "y": 610,
            "size": 38,
            "at": "l5:break",
            "color": "coral"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Study in the States · Concordia University Texas · Wabash College",
            "x": 7932,
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
          "say": "Finances: papers showing you can pay tuition, living costs and travel.",
          "sub": "Tài chính: giấy cho thấy bạn trả được học phí, sinh hoạt phí, chi phí đi lại.",
          "keys": [
            "Tài chính"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Concordia says cover at least one year. The amount is usually on your I twenty.",
          "sub": "Concordia ghi cần đủ cho ít nhất một năm học; con số thường có trên I-20.",
          "keys": [
            "ít nhất một năm học"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Wabash says bring copies too.",
          "sub": "Wabash khuyên mang thêm bản sao."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Intent to return: papers about your family, a job or career plans in Vietnam.",
          "sub": "Ý định quay về: giấy tờ về gia đình, công việc, kế hoạch nghề nghiệp ở Việt Nam.",
          "keys": [
            "Ý định quay về"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Took a long break from school? Wabash notes you may need extra papers.",
          "sub": "Từng nghỉ học lâu? Wabash lưu ý có thể cần thêm giấy tờ."
        }
      ],
      "ref": "p10,p11"
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
            "at": "l3",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 21:00 · Bìa năm ngăn",
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
                  "pose": "explain"
                }
              ],
              "props": [
                "card-index-dividers",
                "label"
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
            "at": "l3:five",
            "caption": "21:00 · khay cơm năm ngăn",
            "icon": "card-index-dividers"
          },
          {
            "id": "f-0",
            "t": "text",
            "text": "Mỗi tờ: là gì, chứng minh gì",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l2:proves",
            "hl": [
              {
                "text": "chứng minh gì",
                "at": "l2:proves"
              }
            ]
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "1 · I-20, hộ chiếu, biên lai, hẹn",
            "x": 60,
            "y": 1340,
            "size": 38,
            "at": "l3:one"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "2 · Academic: điểm, bằng",
            "x": 60,
            "y": 1395,
            "size": 38,
            "at": "l4:two"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "3 · Finances: tài chính + bản sao",
            "x": 60,
            "y": 1450,
            "size": 38,
            "at": "l4:three"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "4 · Gia đình, kế hoạch ở VN",
            "x": 60,
            "y": 1505,
            "size": 38,
            "at": "l4:four"
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "5 · Bản sao dự phòng",
            "x": 60,
            "y": 1560,
            "size": 38,
            "at": "l4:five"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Xếp theo câu hỏi",
            "x": 60,
            "y": 1680,
            "size": 56,
            "at": "l6:File",
            "color": "accent",
            "hl": [
              {
                "text": "theo câu hỏi",
                "at": "l6:pulls"
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
          "say": "Stop four, nine p.m. Concordia says: keep papers neat and easy to reach.",
          "sub": "Chặng bốn, chín giờ tối. Concordia khuyên: giấy tờ gọn gàng, dễ lấy.",
          "keys": [
            "gọn gàng, dễ lấy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "UC San Diego: each paper should show at once what it is and what it proves. Long letters rarely get read.",
          "sub": "UC San Diego: mỗi tờ phải cho thấy ngay nó là gì, chứng minh điều gì. Thư giải thích dài khó được đọc.",
          "keys": [
            "chứng minh điều gì"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "One folder, five sections. Section one: passport, I twenty, confirmation page, receipts, appointment.",
          "sub": "Một bìa, năm ngăn. Ngăn một: hộ chiếu, I-20, trang xác nhận, các biên lai, lịch hẹn.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Two, academic. Three, finances and copies. Four, family and plans in Vietnam. Five, spare copies.",
          "sub": "Hai, học lực. Ba, tài chính và bản sao. Bốn, gia đình và kế hoạch ở Việt Nam. Năm, bản sao dự phòng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "Bank statement! Transcript! Finances!",
          "sub": "Sao kê ngân hàng! Bảng điểm! Tài chính!",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Mum calls the names in English, Lan's hand finds them. File by question, your hand pulls by question.",
          "sub": "Mẹ đọc tên giấy bằng tiếng Anh, tay Lan rút ra. Xếp theo câu hỏi thì tay rút theo câu hỏi.",
          "keys": [
            "tay rút theo câu hỏi"
          ]
        }
      ],
      "ref": "p12,p13,p14"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "21:30 · Dũng tập thử",
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
          "label": "Đưa cả xấp cho đủ",
          "why": "Viên chức phải tự tìm trong vài phút ít ỏi; tờ cần đưa chìm giữa học bạ, giấy khen.",
          "rule": "Đưa một tờ, nói một câu"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "Practice. Can I see your financial documents?",
          "sub": "Tập nhé. Cho xem giấy tài chính được không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Sure. All my documents are here!",
          "sub": "Dạ. Toàn bộ giấy tờ của em đây ạ!",
          "pose": "give",
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
          "say": "That's a haystack. Now the officer must find the needle.",
          "sub": "Đó là đống rơm. Giờ viên chức phải tự mò kim.",
          "keys": [
            "đống rơm"
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
          "say": "This is a letter from my father's company. It shows his position and salary.",
          "sub": "Đây là thư công ty bố em, ghi chức vụ và mức lương.",
          "phase": "redo",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. One page, one sentence.",
          "sub": "Đúng. Một tờ, một câu.",
          "phase": "redo",
          "keys": [
            "Một tờ, một câu"
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
            "text": "⑤ 22:00 · Đưa giấy, nói gì?",
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
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "give"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "page-facing-up",
                "speech-balloon"
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
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:aloud",
            "caption": "22:00 · tập nói to",
            "icon": "speech-balloon"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "“Here is my I-20 and my passport.”",
            "x": 2028,
            "y": 1260,
            "size": 40,
            "at": "l2:Here",
            "font": "base",
            "hl": [
              {
                "text": "Here is",
                "at": "l2:Here"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "“This is my bank statement.",
            "x": 2028,
            "y": 1330,
            "size": 40,
            "at": "l3:bank",
            "font": "base"
          },
          {
            "id": "g-2b",
            "t": "text",
            "text": "It shows my parents' savings.”",
            "x": 2028,
            "y": 1385,
            "size": 40,
            "at": "l3:shows",
            "font": "base",
            "hl": [
              {
                "text": "It shows",
                "at": "l3:shows"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Tên giấy + điều nó chứng minh",
            "x": 2028,
            "y": 1470,
            "size": 46,
            "at": "l4:name",
            "color": "accent",
            "hl": [
              {
                "text": "chứng minh",
                "at": "l4:proves"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "“I'm sorry, I don't have",
            "x": 2028,
            "y": 1550,
            "size": 34,
            "at": "l5:sorry",
            "font": "base",
            "color": "coral"
          },
          {
            "id": "g-3b",
            "t": "text",
            "text": "that document with me today.”",
            "x": 2028,
            "y": 1595,
            "size": 34,
            "at": "l5:document",
            "font": "base",
            "color": "coral"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "“Would you like to see my transcript instead?”",
            "x": 2028,
            "y": 1655,
            "size": 32,
            "at": "l6:instead",
            "font": "base",
            "hl": [
              {
                "text": "instead",
                "at": "l6:instead"
              }
            ]
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "Thiếu giấy: nói thật, đừng bịa",
            "x": 2028,
            "y": 1730,
            "size": 46,
            "at": "l6:invent",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, ten p.m. Papers need words too. Lan practises aloud.",
          "sub": "Chặng năm, mười giờ tối. Giấy cũng cần lời. Lan tập nói to."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Here is my I twenty and my passport.",
          "sub": "Đây là I-20 và hộ chiếu của em.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "This is my bank statement. It shows my parents' savings.",
          "sub": "Đây là sao kê ngân hàng, cho thấy tiền tiết kiệm của bố mẹ em."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Short sentences: the name of the paper, plus what it proves.",
          "sub": "Câu ngắn: tên tờ giấy, cộng điều nó chứng minh.",
          "keys": [
            "điều nó chứng minh"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "And if she asks for a paper I didn't bring? I'm sorry, I don't have that document with me today.",
          "sub": "Còn nếu hỏi tờ con không mang? “I'm sorry, I don't have that document with me today.”",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Tell the truth, never invent. Then offer: would you like to see my transcript instead?",
          "sub": "Nói thật, đừng bịa. Rồi đề nghị: “Would you like to see my transcript instead?”",
          "keys": [
            "đừng bịa"
          ]
        }
      ],
      "ref": "p17,p18"
    },
    {
      "id": "s14",
      "module": "BRK-04",
      "data": {
        "title": "Cùng một lần đưa giấy",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Đẩy cả xấp qua khe kính: “All my documents are here.”",
        "right": "Một tờ + một câu: là gì, chứng minh gì",
        "wrongIllus": "card-file-box",
        "rightIllus": "page-facing-up"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: the whole pile through the window.",
          "sub": "Trước: đẩy cả xấp qua khe kính."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: one page, and what it proves.",
          "sub": "Sau: một tờ, và nó chứng minh gì.",
          "keys": [
            "nó chứng minh gì"
          ]
        }
      ],
      "ref": "p19"
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
            "at": "l3",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 22:30 · Kiểm lần cuối",
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
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "mobile-phone",
                "laptop"
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
            "at": "l1:phone",
            "caption": "22:30 · phòng Lan",
            "icon": "mobile-phone"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "18/6/2025: mạng xã hội để công khai",
            "x": 3996,
            "y": 1260,
            "size": 40,
            "at": "l3:June",
            "hl": [
              {
                "text": "công khai",
                "at": "l3:public"
              }
            ]
          },
          {
            "id": "h-1b",
            "t": "text",
            "text": "(người xin visa F, M, J)",
            "x": 4036,
            "y": 1325,
            "size": 36,
            "at": "l3:F",
            "color": "muted"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Có thể đổi → kiểm trang chính thức",
            "x": 3996,
            "y": 1405,
            "size": 40,
            "at": "l4:adjusted",
            "color": "coral"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Khai đúng, đủ trong DS-160",
            "x": 3996,
            "y": 1480,
            "size": 44,
            "at": "l4:fully",
            "color": "accent",
            "hl": [
              {
                "text": "đúng, đủ",
                "at": "l4:correctly"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Thông báo Bộ Ngoại giao Mỹ 18/6/2025, Yale OISS trích lại",
            "x": 3996,
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
          "say": "Stop six, ten thirty. Lan scrolls her phone, one last check.",
          "sub": "Chặng sáu, mười rưỡi. Lan lướt điện thoại, kiểm lần cuối."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Wait. Something about social media accounts?",
          "sub": "Khoan. Có chuyện gì về tài khoản mạng xã hội à?",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A State Department notice of June eighteenth, twenty twenty five, quoted by Yale: F, M and J applicants were asked to set every social media account to public.",
          "sub": "Thông báo ngày 18/6/2025 của Bộ Ngoại giao Mỹ, Yale trích lại: người xin visa F, M, J được yêu cầu để công khai mọi tài khoản mạng xã hội.",
          "keys": [
            "để công khai"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Such rules can be adjusted. Check the current official page, and answer the DS one sixty correctly and fully.",
          "sub": "Yêu cầu kiểu này có thể điều chỉnh. Kiểm trang chính thức hiện hành, và khai đúng, đủ trong DS-160.",
          "keys": [
            "khai đúng, đủ"
          ]
        }
      ],
      "ref": "p22"
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
          }
        ],
        "items": [
          {
            "id": "h-4",
            "t": "text",
            "text": "Giấy thật, đúng hoàn cảnh",
            "x": 3996,
            "y": 1590,
            "size": 50,
            "at": "l1:genuine",
            "hl": [
              {
                "text": "Giấy thật",
                "at": "l1:genuine"
              }
            ]
          },
          {
            "id": "h-5",
            "t": "text",
            "text": "Khai gian → từ chối vĩnh viễn",
            "x": 3996,
            "y": 1660,
            "size": 48,
            "at": "l2:permanent",
            "color": "coral"
          },
          {
            "id": "h-6",
            "t": "text",
            "text": "Ít mà thật > nhiều mà sai",
            "x": 3996,
            "y": 1730,
            "size": 52,
            "at": "l3:few",
            "color": "accent",
            "hl": [
              {
                "text": "Ít mà thật",
                "at": "l3:few"
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
          "say": "And every paper must be genuine, telling your real situation.",
          "sub": "Và mọi tờ giấy phải là giấy thật, nói đúng hoàn cảnh của bạn.",
          "keys": [
            "giấy thật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The State Department warns: lies or fraud can mean a permanent visa refusal.",
          "sub": "Bộ Ngoại giao Mỹ cảnh báo: khai gian, gian lận có thể bị từ chối visa vĩnh viễn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A few true papers beat many false ones. Every time.",
          "sub": "Giấy ít mà thật luôn an toàn hơn giấy nhiều mà sai.",
          "keys": [
            "Giấy ít mà thật"
          ]
        }
      ],
      "ref": "p23"
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Thứ Năm 6:30 · Lên đường",
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
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "no-mobile-phones",
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
                }
              ]
            },
            "at": "l1:morning",
            "caption": "6:30 sáng · ở cửa nhà",
            "icon": "no-mobile-phones"
          },
          {
            "id": "i-ph",
            "t": "illus",
            "name": "no-mobile-phones",
            "x": 5964,
            "y": 1260,
            "size": 110,
            "at": "l2:phone"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Điện thoại, đồ điện tử: để lại",
            "x": 6104,
            "y": 1280,
            "size": 44,
            "at": "l3:phones",
            "color": "coral"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Danh sách cấm: tuỳ nơi",
            "x": 5964,
            "y": 1410,
            "size": 50,
            "at": "l4:differs",
            "hl": [
              {
                "text": "tuỳ nơi",
                "at": "l4:differs"
              }
            ]
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "→ đọc trang nơi hẹn",
            "x": 6004,
            "y": 1490,
            "size": 46,
            "at": "l4:read",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven, Thursday, six thirty in the morning. The folder is ready.",
          "sub": "Chặng bảy, sáu rưỡi sáng thứ Năm. Bìa hồ sơ đã sẵn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Phone, charger, power bank. Take them all, dear!",
          "sub": "Điện thoại, sạc, pin dự phòng. Mang hết đi con!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Wabash says: leave prohibited items like phones and electronics behind.",
          "sub": "Wabash dặn: để lại những vật bị cấm như điện thoại, đồ điện tử.",
          "keys": [
            "để lại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The banned list differs by place, so read the page of the place where you're booked.",
          "sub": "Danh sách cấm khác nhau tuỳ nơi, nên đọc trang của nơi bạn hẹn.",
          "keys": [
            "tuỳ nơi"
          ]
        }
      ],
      "ref": "p21"
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
            "at": "l6",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "⑧ Thứ Năm 7:30 · Ô cửa kính",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:seven"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "hotel",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "give",
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "right"
                }
              ],
              "props": [
                "file-folder",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:window",
            "caption": "7:30 · cùng ô cửa, cùng câu hỏi",
            "icon": "file-folder"
          },
          {
            "id": "j-B",
            "t": "text",
            "text": "B. Đúng một tờ ✓",
            "x": 7932,
            "y": 1260,
            "size": 60,
            "at": "l6:one page",
            "color": "accent",
            "hl": [
              {
                "text": "Đúng một tờ",
                "at": "l6:one page"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Giấy lành giữ lấy… ngăn",
            "x": 7932,
            "y": 1370,
            "size": 52,
            "at": "l7:margin",
            "color": "accent",
            "hl": [
              {
                "text": "ngăn",
                "at": "l7:sections"
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
          "say": "Back to seven thirty. Same window, same question.",
          "sub": "Trở lại bảy rưỡi. Cùng ô cửa, cùng câu hỏi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Can you show me your financial documents?",
          "sub": "Em cho xem giấy tờ tài chính nhé?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Lan opens Finances and takes out one page.",
          "sub": "Lan mở ngăn Finances, rút đúng một tờ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "This is my bank statement. It shows my parents' savings.",
          "sub": "Đây là sao kê ngân hàng, cho thấy tiền tiết kiệm của bố mẹ em.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "sam",
          "say": "Thank you. Next question.",
          "sub": "Cảm ơn em. Câu tiếp theo."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "So the answer was B: one page. Faster than the whole stack.",
          "sub": "Vậy đáp án là B: đúng một tờ. Nhanh hơn đưa cả xấp.",
          "keys": [
            "Nhanh hơn đưa cả xấp"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Torn paper keeps its margin. Good paper keeps its sections.",
          "sub": "“Giấy rách phải giữ lấy lề”, giấy lành thì giữ lấy… ngăn.",
          "keys": [
            "giữ lấy… ngăn"
          ]
        }
      ],
      "ref": "p15,p16"
    },
    {
      "id": "s19",
      "module": "BRK-03",
      "data": {
        "value": 30,
        "prefix": "≈ ",
        "suffix": " giây",
        "label": "gần nửa phút lục tìm (cách A)",
        "illus": "stopwatch"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Way A? Almost half a minute digging.",
          "sub": "Cách A? Gần nửa phút lục tìm."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "In an interview of a few minutes.",
          "sub": "Trong buổi chỉ vài phút."
        }
      ],
      "ref": "p15"
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
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l2",
            "fit": "C",
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
            "x": 4636,
            "y": 170,
            "at": "l2"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 700,
            "y": 1340,
            "at": "l3"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2728,
            "y": 1470,
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
          "say": "So: full papers, neatly filed, calm before you even speak.",
          "sub": "Tóm lại: giấy đủ, xếp gọn, bình tĩnh trước cả khi mở miệng.",
          "keys": [
            "bình tĩnh trước cả khi mở miệng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: five required papers, always, on top.",
          "sub": "Một: năm giấy bắt buộc, luôn đủ, để trên cùng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: one folder, five labelled sections.",
          "sub": "Hai: một bìa, năm ngăn có nhãn.",
          "keys": [
            "năm ngăn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: one page, one sentence. What it is, what it proves.",
          "sub": "Ba: một tờ, một câu. Giấy gì, chứng minh gì.",
          "keys": [
            "một tờ, một câu"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: grab a folder, label it in English, and practise handing over each page.",
          "sub": "Làm ngay: lấy một bìa nhiều ngăn, dán nhãn tiếng Anh, tập đưa từng tờ kèm một câu.",
          "keys": [
            "dán nhãn tiếng Anh"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next up: why this school, why this major.",
          "sub": "Bài tiếp theo: “Why this school? Why this major?”"
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "Which line sums up the two choices about handing over papers?",
        "options": [
          "Giving the right single page is faster than giving the whole stack",
          "Giving nothing is safest, because papers can only cause trouble",
          "Giving more pages always makes a better impression on any officer"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "page-facing-up",
        "why": "Dòng Rút ra nhắc đưa đúng một tờ nhanh hơn đưa cả xấp. Đây cũng là cách cho viên chức thấy bạn hiểu hồ sơ của mình."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which line sums up the two choices about handing over papers?",
          "sub": "Câu nào tóm tắt bài học từ hai lựa chọn khi đưa giấy tờ?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Giving the right single page is faster than giving the whole stack.",
          "sub": "Đưa đúng một tờ nhanh hơn đưa cả xấp."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Remember the guess at the window?",
          "sub": "Nhớ câu đoán ở ô cửa chứ?"
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
          "say": "One page, one sentence. Now the forty questions below.",
          "sub": "Một tờ, một câu. Giờ đến bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144. Hook HOOK-21 (câu hỏi để đoán sai): thứ Năm 7:30 ở ô cửa, chị Sam hỏi giấy tài chính — A. cả xấp cho chắc / B. đúng một tờ? → lặng đoán → “Đa số chọn A” → tua lại 12 tiếng; trả lời ở chặng ⑧ cùng ô cửa (khép vòng). Dòng thời gian ĐÊM TRƯỚC PHỎNG VẤN: 19:00 giấy kín bàn, câu hỏi chính → ① 19:00 năm giấy bắt buộc, 6 tháng, ảnh, biên lai SEVIS + thư hẹn (in ra) → ② 19:30 soát I-20, Dũng ghé kể chuyện tên đệm lệch (= Khoa p6) → ③ 20:00 ba nhóm hỗ trợ → ④ 21:00 bìa năm ngăn, mẹ đọc tên tiếng Anh → “Khoan đã!” Dũng đẩy cả xấp → ⑤ 22:00 câu nói khi đưa giấy, thiếu giấy nói thật → BRK-04 trước/sau → ⑥ 22:30 mạng xã hội công khai (18/6/2025), giấy thật → ⑦ 6:30 để điện thoại lại → ⑧ 7:30 ô cửa, đáp án B → BRK-03 nửa phút. Đổi tên: Ngọc → Lan, Khoa → Dũng; cô Hoa = mẹ Lan; Sam = viên chức. Tục ngữ: “Giấy rách phải giữ lấy lề” → “giấy lành giữ lấy… ngăn”. Set `hotel` làm ô cửa phỏng vấn. Câu đố questions[27].",
  "loop": {
    "open": "s00",
    "close": "s18"
  }
};
