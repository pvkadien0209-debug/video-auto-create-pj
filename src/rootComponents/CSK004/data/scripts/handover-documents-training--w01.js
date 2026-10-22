// handover-documents-training--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "handover-documents-training--w01",
  "unit": {
    "audience": "epc-om-operator",
    "slug": "handover-documents-training",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Hồ sơ hoàn công, sách vận hành, đào tạo, phụ tùng: thiếu gì thì không nhận?",
    "series": "Nhận và vận hành nhà máy sau EPC — cho đội O&M, nhận đủ hồ sơ và bắt nhà thầu sửa đúng lỗi"
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
            "at": "l2",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "a-wk",
            "t": "text",
            "text": "Tuần bàn giao",
            "x": 60,
            "y": 150,
            "size": 64,
            "at": "l1:handover"
          },
          {
            "id": "a-st",
            "t": "illus",
            "name": "page-facing-up",
            "x": 60,
            "y": 250,
            "size": 110,
            "at": "l1:stack"
          },
          {
            "id": "a-bb",
            "t": "text",
            "text": "một xấp biên bản",
            "x": 190,
            "y": 285,
            "size": 48,
            "at": "l1:stack+200",
            "color": "muted"
          },
          {
            "id": "a-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 900,
            "y": 110,
            "w": 780,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "think"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:sam",
            "caption": "Thứ Hai · phòng họp với nhà thầu",
            "icon": "page-facing-up"
          },
          {
            "id": "a-cut",
            "t": "text",
            "text": "“Hồ sơ còn lại sẽ gửi…”",
            "x": 60,
            "y": 420,
            "size": 56,
            "at": "l2:remaining",
            "color": "coral",
            "hl": [
              {
                "text": "sẽ gửi…",
                "at": "l2:sent"
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
          "say": "Handover week. Sam, the contractor's handover manager, brings a stack of records for Thảo, our shift leader.",
          "sub": "Tuần bàn giao. Sam, quản lý bàn giao của nhà thầu, mang một xấp biên bản tới cho Thảo, trưởng ca của ta.",
          "keys": [
            "một xấp biên bản"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Everything is ready to sign. The remaining documents will be sent...",
          "sub": "Mọi thứ sẵn sàng để ký. Hồ sơ còn lại sẽ gửi…",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hold that sentence. We'll hear the ending in a minute.",
          "sub": "Giữ câu ấy lại. Lát nữa nghe nốt."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1200
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
          }
        ],
        "items": [
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Trăm nghe không bằng một thấy”",
            "x": 60,
            "y": 560,
            "size": 50,
            "at": "l1:hundred",
            "color": "accent",
            "hl": [
              {
                "text": "một thấy",
                "at": "l1:seeing"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "Thấy thôi đã đủ chưa?",
            "x": 60,
            "y": 660,
            "size": 44,
            "at": "l2:enough",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents say: hearing a hundred times is not worth seeing once.",
          "sub": "Ông bà dặn: “Trăm nghe không bằng một thấy.”",
          "keys": [
            "Trăm nghe không bằng một thấy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This week Thảo finds out that seeing isn't always enough either.",
          "sub": "Tuần này Thảo sẽ thấy: có khi thấy thôi cũng chưa đủ."
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
            "text": "Thiếu gì thì không nhận?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:place",
            "hl": [
              {
                "text": "không nhận",
                "at": "l1:place"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Phải đủ trước khi ký",
            "x": 2028,
            "y": 160,
            "size": 52,
            "at": "l1:must"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Được để lại sau COD?",
            "x": 2868,
            "y": 160,
            "size": 52,
            "at": "l1:wait",
            "color": "muted"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: tin lời “gửi sau”",
            "x": 2028,
            "y": 260,
            "size": 50,
            "at": "l3:trusting",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:later"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: kiểm theo danh mục",
            "x": 2028,
            "y": 345,
            "size": 58,
            "at": "l3:checking",
            "color": "accent",
            "hl": [
              {
                "text": "kiểm theo danh mục",
                "at": "l3:list"
              }
            ]
          },
          {
            "id": "b-s0b",
            "t": "box",
            "x": 2028,
            "y": 480,
            "w": 255,
            "h": 100,
            "at": "l2:week+300",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s1b",
            "t": "box",
            "x": 2303,
            "y": 480,
            "w": 255,
            "h": 100,
            "at": "l2:week+550",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s2b",
            "t": "box",
            "x": 2578,
            "y": 480,
            "w": 255,
            "h": 100,
            "at": "l2:week+800",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s3b",
            "t": "box",
            "x": 2853,
            "y": 480,
            "w": 255,
            "h": 100,
            "at": "l2:week+1050",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s4b",
            "t": "box",
            "x": 3128,
            "y": 480,
            "w": 255,
            "h": 100,
            "at": "l2:week+1300",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s5b",
            "t": "box",
            "x": 3403,
            "y": 480,
            "w": 255,
            "h": 100,
            "at": "l2:week+1550",
            "color": "coral",
            "stroke": 5
          },
          {
            "id": "b-s0",
            "t": "text",
            "text": "① T2 Điều kiện",
            "x": 2043,
            "y": 505,
            "size": 34,
            "at": "l2:week+420"
          },
          {
            "id": "b-s1",
            "t": "text",
            "text": "② T3 Sách",
            "x": 2318,
            "y": 505,
            "size": 34,
            "at": "l2:week+670"
          },
          {
            "id": "b-s2",
            "t": "text",
            "text": "③ T4 Đào tạo",
            "x": 2593,
            "y": 505,
            "size": 34,
            "at": "l2:week+920"
          },
          {
            "id": "b-s3",
            "t": "text",
            "text": "④ T5 Hoàn công",
            "x": 2868,
            "y": 505,
            "size": 34,
            "at": "l2:week+1170"
          },
          {
            "id": "b-s4",
            "t": "text",
            "text": "⑤ T6 Phụ tùng",
            "x": 3143,
            "y": 505,
            "size": 34,
            "at": "l2:week+1420"
          },
          {
            "id": "b-s5",
            "t": "text",
            "text": "⑥ Chiều T6 Tồn",
            "x": 3418,
            "y": 505,
            "size": 34,
            "at": "l2:week+1670"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Luật Xây dựng 135/2025/QH15 Điều 80 · mẫu hợp đồng quốc tế Silver Book 2017",
            "x": 2028,
            "y": 700,
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
          "say": "So before you take over: what must be in place, and what can wait until after COD?",
          "sub": "Vậy trước khi nhận: những gì phải đủ, và việc gì được để lại sau COD?",
          "keys": [
            "phải đủ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One week before handover, six stops: conditions, manuals, training, records, spares, and the punch list.",
          "sub": "Một tuần trước bàn giao, sáu chặng: điều kiện, sách vận hành, đào tạo, hồ sơ, phụ tùng, danh mục tồn.",
          "keys": [
            "Một tuần trước bàn giao"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not trusting 'we'll send it later'. Checking against a list.",
          "sub": "Không phải tin lời “gửi sau”, mà là kiểm theo danh mục.",
          "keys": [
            "kiểm theo danh mục"
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
            "at": "l3:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Hai · Điều kiện",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:monday"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 150,
            "w": 780,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "think",
                  "face": "thinking"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l3:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:monday",
            "caption": "Thứ Hai · phòng họp",
            "icon": "page-facing-up"
          },
          {
            "id": "c-sau",
            "t": "text",
            "text": "“…sau bàn giao”",
            "x": 3996,
            "y": 160,
            "size": 64,
            "at": "l2:after handover",
            "color": "coral",
            "hl": [
              {
                "text": "sau",
                "at": "l2:after"
              }
            ]
          },
          {
            "id": "c-nho",
            "t": "text",
            "text": "Một chữ nhỏ xíu",
            "x": 3996,
            "y": 260,
            "size": 46,
            "at": "l3:tiny",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, Monday. Sam finishes his sentence.",
          "sub": "Chặng một, thứ Hai. Sam nói nốt câu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "...after handover. The rest will follow after handover.",
          "sub": "…sau bàn giao. Phần còn lại sẽ gửi sau bàn giao.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "After. A tiny word. Thảo opens the list of handover conditions instead.",
          "sub": "Sau. Một chữ nhỏ xíu. Thảo mở ngay danh sách điều kiện bàn giao.",
          "keys": [
            "điều kiện bàn giao"
          ]
        }
      ],
      "ref": "intro,p1"
    },
    {
      "id": "s04",
      "module": "BRK-06",
      "data": {
        "title": "Điều kiện bàn giao thường gặp",
        "items": [
          {
            "illus": "high-voltage",
            "text": "COD, độ tin cậy"
          },
          {
            "illus": "open-book",
            "text": "Sách vận hành"
          },
          {
            "illus": "teacher",
            "text": "Đào tạo"
          },
          {
            "illus": "hammer-and-wrench",
            "text": "Dụng cụ đặc biệt"
          },
          {
            "illus": "shield",
            "text": "Bảo lãnh bảo hành"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "COD and reliability, manuals, as-built records, special tools, training, safety, a clean site.",
          "sub": "COD và thử độ tin cậy, sách vận hành, hoàn công, dụng cụ đặc biệt, đào tạo, an toàn, dọn công trường."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Punch list cleared, warranty guarantee posted, type certificates in hand.",
          "sub": "Danh mục tồn đã xử lý, đã có bảo lãnh bảo hành, chứng nhận kiểu thiết bị.",
          "keys": [
            "bảo lãnh bảo hành"
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
            "id": "c-r",
            "t": "text",
            "text": "Sau bàn giao: rủi ro → CĐT",
            "x": 3996,
            "y": 380,
            "size": 48,
            "at": "l1:risk"
          },
          {
            "id": "c-bd",
            "t": "text",
            "text": "Chỉ còn: bảo đảm khiếm khuyết",
            "x": 3996,
            "y": 460,
            "size": 48,
            "at": "l2:defects",
            "hl": [
              {
                "text": "bảo đảm khiếm khuyết",
                "at": "l2:warranty"
              }
            ]
          },
          {
            "id": "c-no",
            "t": "text",
            "text": "Thiếu 1 tập = nợ lãi kép",
            "x": 3996,
            "y": 560,
            "size": 60,
            "at": "l3:compound",
            "color": "accent",
            "hl": [
              {
                "text": "nợ lãi kép",
                "at": "l3:compound"
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
          "say": "Every line is something your crew uses daily. And after handover, risk passes to the owner.",
          "sub": "Mỗi dòng là thứ đội bạn dùng hằng ngày. Mà sau bàn giao, rủi ro chuyển sang Chủ đầu tư."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your main lever on the contractor becomes the defects warranty.",
          "sub": "Quyền đòi nhà thầu chủ yếu chỉ còn qua bảo đảm khiếm khuyết."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So one missing file today becomes a long fight later. A debt with compound interest.",
          "sub": "Nên thiếu một tập hồ sơ hôm nay có thể thành cuộc tranh cãi dài. Món nợ lãi kép.",
          "keys": [
            "Món nợ lãi kép"
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
            "text": "② Thứ Ba · Sách vận hành",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:tuesday"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 150,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "open-book"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1:tuesday",
            "caption": "Thứ Ba · phòng điều khiển",
            "icon": "open-book"
          },
          {
            "id": "d-day",
            "t": "text",
            "text": "Dày ≠ đủ",
            "x": 5964,
            "y": 150,
            "size": 60,
            "at": "l3:thick",
            "color": "coral"
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 255,
            "w": 44,
            "h": 44,
            "at": "l3:start-up",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 237,
            "size": 56,
            "at": "l3:start-up+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Khởi động",
            "x": 6034,
            "y": 247,
            "size": 40,
            "at": "l3:start-up+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 317,
            "w": 44,
            "h": 44,
            "at": "l3:shutdown",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 299,
            "size": 56,
            "at": "l3:shutdown+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Dừng máy",
            "x": 6034,
            "y": 309,
            "size": 40,
            "at": "l3:shutdown+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 379,
            "w": 44,
            "h": 44,
            "at": "l3:limits",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 361,
            "size": 56,
            "at": "l3:limits+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Giới hạn vận hành",
            "x": 6034,
            "y": 371,
            "size": 40,
            "at": "l3:limits+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 441,
            "w": 44,
            "h": 44,
            "at": "l3:schedule",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 423,
            "size": 56,
            "at": "l3:schedule+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Lịch bảo dưỡng",
            "x": 6034,
            "y": 433,
            "size": 40,
            "at": "l3:schedule+200"
          },
          {
            "id": "d-c4",
            "t": "box",
            "x": 5964,
            "y": 503,
            "w": 44,
            "h": 44,
            "at": "l3:alarm",
            "stroke": 5
          },
          {
            "id": "d-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 485,
            "size": 56,
            "at": "l3:alarm+600",
            "color": "accent"
          },
          {
            "id": "d-l4",
            "t": "text",
            "text": "Xử lý báo động",
            "x": 6034,
            "y": 495,
            "size": 40,
            "at": "l3:alarm+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, Tuesday. Dũng, the team's young maintenance engineer, gets the draft O and M manual.",
          "sub": "Chặng hai, thứ Ba. Dũng, kỹ sư bảo dưỡng trẻ của đội, nhận bản nháp sách vận hành – bảo dưỡng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "So thick! It must be complete. Ok, sign it off!",
          "sub": "Dày thế này! Chắc đủ rồi. Ok, duyệt luôn!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Thick isn't complete. A usable manual covers start-up, shutdown, operating limits, maintenance schedule and alarm response.",
          "sub": "Dày chưa chắc đủ. Sách dùng được phải có: khởi động, dừng máy, giới hạn vận hành, lịch bảo dưỡng, xử lý báo động.",
          "keys": [
            "Dày chưa chắc đủ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It's a project document, filed with quality records and test results.",
          "sub": "Sách nằm trong nhóm tài liệu dự án, cùng hồ sơ chất lượng và kết quả thử."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s07",
      "module": "BRK-10",
      "data": {
        "quote": "Ngôn ngữ của hợp đồng xây dựng là tiếng Việt",
        "mark": "hợp đồng xây dựng",
        "by": "Luật Xây dựng 2025 (tóm ý)",
        "illus": "page-facing-up"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The language of a construction contract is Vietnamese.",
          "sub": "Ngôn ngữ của hợp đồng xây dựng là tiếng Việt.",
          "keys": [
            "hợp đồng xây dựng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Note: the contract, not the manual.",
          "sub": "Để ý: nói về hợp đồng, không nói về sách vận hành."
        }
      ],
      "ref": "p4"
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
            "id": "d-vn",
            "t": "text",
            "text": "Ngôn ngữ tài liệu → Yêu cầu CĐT",
            "x": 5964,
            "y": 590,
            "size": 40,
            "at": "l1:language",
            "hl": [
              {
                "text": "Yêu cầu CĐT",
                "at": "l1:requirements"
              }
            ]
          },
          {
            "id": "d-bb",
            "t": "text",
            "text": "Hợp đồng im → ghi biên bản",
            "x": 5964,
            "y": 670,
            "size": 52,
            "at": "l3:minutes",
            "color": "accent",
            "hl": [
              {
                "text": "ghi biên bản",
                "at": "l3:minutes"
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
          "say": "A missing Vietnamese manual is a classic risk. So set each document's language in the Employer's Requirements.",
          "sub": "Thiếu sách tiếng Việt là rủi ro điển hình. Nên ghi ngôn ngữ từng tài liệu vào Yêu cầu của Chủ đầu tư.",
          "keys": [
            "Yêu cầu của Chủ đầu tư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Plants also change after every repair, replacement or software update.",
          "sub": "Nhà máy còn thay đổi sau mỗi lần sửa, thay thiết bị hay cập nhật phần mềm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ask that manuals and drawings get updated in the defects period. Contract silent? Put it in the minutes.",
          "sub": "Đề nghị nhà thầu cập nhật sách và bản vẽ trong thời hạn bảo đảm. Hợp đồng không nói? Ghi vào biên bản làm việc.",
          "keys": [
            "Ghi vào biên bản"
          ]
        }
      ],
      "ref": "p4,p5"
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
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "② Chiều thứ Ba · Bốn bước",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:shows"
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
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "open-book",
                "high-voltage"
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
                  "on": "dung",
                  "move": "cut"
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
            "at": "l1:afternoon",
            "caption": "Chiều thứ Ba · chương trạm biến áp",
            "icon": "high-voltage"
          },
          {
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 170,
            "w": 44,
            "h": 44,
            "at": "l2:open",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 152,
            "size": 56,
            "at": "l2:open+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Mở danh mục yêu cầu",
            "x": 8002,
            "y": 162,
            "size": 42,
            "at": "l2:open+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 255,
            "w": 44,
            "h": 44,
            "at": "l3:compare",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 237,
            "size": 56,
            "at": "l3:compare+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Đối chiếu từng chương",
            "x": 8002,
            "y": 247,
            "size": 42,
            "at": "l3:compare+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 340,
            "w": 44,
            "h": 44,
            "at": "l4:language",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 322,
            "size": 56,
            "at": "l4:language+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Kiểm ngôn ngữ",
            "x": 8002,
            "y": 332,
            "size": 42,
            "at": "l4:language+200"
          },
          {
            "id": "e-c3",
            "t": "box",
            "x": 7932,
            "y": 425,
            "w": 44,
            "h": 44,
            "at": "l5:written",
            "stroke": 5
          },
          {
            "id": "e-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 407,
            "size": 56,
            "at": "l5:written+600",
            "color": "accent"
          },
          {
            "id": "e-l3",
            "t": "text",
            "text": "Ý kiến bằng văn bản, đúng hạn",
            "x": 8002,
            "y": 417,
            "size": 42,
            "at": "l5:written+200"
          },
          {
            "id": "e-g1",
            "t": "text",
            "text": "thiếu: báo động máy biến áp",
            "x": 8002,
            "y": 470,
            "size": 32,
            "at": "l3:alarm",
            "color": "coral"
          },
          {
            "id": "e-g2",
            "t": "text",
            "text": "phụ lục bảo dưỡng: chỉ tiếng Anh",
            "x": 8002,
            "y": 520,
            "size": 32,
            "at": "l4:english",
            "color": "coral"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Đọc bằng danh mục, không cảm giác",
            "x": 7932,
            "y": 640,
            "size": 50,
            "at": "l6:list",
            "color": "accent",
            "hl": [
              {
                "text": "bằng danh mục",
                "at": "l6:list"
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
          "say": "Tuesday afternoon. Thảo shows Dũng how to read it, using the substation chapter.",
          "sub": "Chiều thứ Ba. Thảo chỉ Dũng cách đọc, lấy chương trạm biến áp làm mẫu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Step one: open the document list in the Employer's Requirements and tick what must be there.",
          "sub": "Bước một: mở danh mục tài liệu trong Yêu cầu của Chủ đầu tư, đánh dấu mục phải có.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Step two: compare chapter by chapter. Hey, no transformer alarm section!",
          "sub": "Bước hai: đối chiếu từng chương. Ơ, thiếu phần xử lý báo động máy biến áp!",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Step three: check the language. The maintenance annex is English only.",
          "sub": "Bước ba: kiểm ngôn ngữ. Phụ lục bảo dưỡng chỉ có tiếng Anh."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Step four: written comments within the review period, naming both gaps and the matching requirement.",
          "sub": "Bước bốn: gửi ý kiến bằng văn bản trong thời hạn xem xét, nêu hai chỗ thiếu, dẫn mục yêu cầu.",
          "keys": [
            "trong thời hạn xem xét"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Lesson: read a manual with the list in hand, not by feel.",
          "sub": "Rút ra: đọc sách vận hành bằng danh mục trong tay, không bằng cảm giác.",
          "keys": [
            "bằng danh mục trong tay"
          ]
        }
      ],
      "ref": "p6,p7"
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
            "text": "③ Thứ Tư · Đào tạo",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:wednesday"
          },
          {
            "id": "f-nt",
            "t": "text",
            "text": "Nhà thầu: đào tạo",
            "x": 60,
            "y": 1250,
            "size": 50,
            "at": "l2:contractor's"
          },
          {
            "id": "f-cdt",
            "t": "text",
            "text": "Chủ đầu tư: cử người học",
            "x": 700,
            "y": 1250,
            "size": 50,
            "at": "l2:sending"
          },
          {
            "id": "f-dk",
            "t": "text",
            "text": "Điều kiện COD + bàn giao",
            "x": 60,
            "y": 1340,
            "size": 50,
            "at": "l3:condition",
            "hl": [
              {
                "text": "COD + bàn giao",
                "at": "l3:handover"
              }
            ]
          },
          {
            "id": "f-ct",
            "t": "text",
            "text": "Chương trình được duyệt:",
            "x": 60,
            "y": 1420,
            "size": 52,
            "at": "l4:approved",
            "color": "accent"
          },
          {
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1512,
            "w": 44,
            "h": 44,
            "at": "l4:what",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1494,
            "size": 56,
            "at": "l4:what+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "Học gì",
            "x": 130,
            "y": 1504,
            "size": 40,
            "at": "l4:what+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1582,
            "w": 44,
            "h": 44,
            "at": "l4:who",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1564,
            "size": 56,
            "at": "l4:who+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "Ai học",
            "x": 130,
            "y": 1574,
            "size": 40,
            "at": "l4:who+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1652,
            "w": 44,
            "h": 44,
            "at": "l4:how long",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1634,
            "size": 56,
            "at": "l4:how long+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "Bao lâu",
            "x": 130,
            "y": 1644,
            "size": 40,
            "at": "l4:how long+200"
          },
          {
            "id": "f-c3",
            "t": "box",
            "x": 60,
            "y": 1722,
            "w": 44,
            "h": 44,
            "at": "l4:assessed",
            "stroke": 5
          },
          {
            "id": "f-k3",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1704,
            "size": 56,
            "at": "l4:assessed+600",
            "color": "accent"
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "Đánh giá thế nào",
            "x": 130,
            "y": 1714,
            "size": 40,
            "at": "l4:assessed+200"
          },
          {
            "id": "f-sc",
            "t": "text",
            "text": "thường nằm cạnh phần yêu cầu SCADA",
            "x": 900,
            "y": 1560,
            "size": 30,
            "at": "l4:scada",
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
          "say": "Stop three, Wednesday: training.",
          "sub": "Chặng ba, thứ Tư: đào tạo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Training the owner's operators is the contractor's duty. Sending people to be trained is the owner's.",
          "sub": "Đào tạo nhân sự vận hành là nghĩa vụ của nhà thầu; cử người để được đào tạo là nghĩa vụ của Chủ đầu tư.",
          "keys": [
            "nghĩa vụ của nhà thầu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Many contracts make training a condition for COD and for handover.",
          "sub": "Nhiều hợp đồng đặt “đã đào tạo” vào điều kiện COD và điều kiện bàn giao."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So you need an approved programme: what, who, how long, how assessed. Often next to the SCADA requirements.",
          "sub": "Nên cần chương trình được duyệt: học gì, ai học, bao lâu, đánh giá thế nào. Thường nằm cạnh phần yêu cầu SCADA.",
          "keys": [
            "chương trình được duyệt"
          ]
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Tư · phòng điều khiển",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "thumb"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đứng cạnh suốt chạy thử là đã được đào tạo",
          "why": "Chạy thử chứng minh nhà máy đạt; đào tạo giúp người CĐT tự vận hành, cần chương trình, học viên, đánh giá.",
          "rule": "Đứng xem chạy thử chưa phải là được đào tạo"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "We stood next to their engineers through every test. So we're trained. Tick!",
          "sub": "Bọn em đứng cạnh kỹ sư nhà thầu suốt mọi lần thử. Vậy là đã được đào tạo. Tích!",
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
          "say": "Commissioning proves the plant works. Training proves your people can run it alone.",
          "sub": "Chạy thử để chứng minh nhà máy đạt. Đào tạo để người của mình tự vận hành được.",
          "keys": [
            "tự vận hành được"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No programme, trainee list or assessment? Hard to call it done.",
          "sub": "Không chương trình, danh sách học viên, đánh giá? Khó nói đã xong."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind!",
          "sub": "Tua lại!",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Okay. Programme, trainee list, assessment record. Then we tick.",
          "sub": "Được rồi. Chương trình, danh sách học viên, biên bản đánh giá. Rồi mới tích.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p9"
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
          }
        ],
        "items": [
          {
            "id": "f-xem",
            "t": "text",
            "text": "Đứng xem chạy thử ≠ được đào tạo",
            "x": 60,
            "y": 1795,
            "size": 44,
            "at": "l2:watching",
            "color": "coral",
            "hl": [
              {
                "text": "≠ được đào tạo",
                "at": "l2:trained"
              }
            ]
          },
          {
            "id": "f-ca",
            "t": "text",
            "text": "Trăm thấy < một lần tự làm",
            "x": 900,
            "y": 1790,
            "size": 40,
            "at": "l1:hands-on",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One sighting beats a hundred hearings. But a hundred sightings don't beat one hands-on try.",
          "sub": "Một thấy hơn trăm nghe. Nhưng trăm lần thấy vẫn không bằng một lần tự tay làm.",
          "keys": [
            "một lần tự tay làm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Lesson: watching commissioning is not being trained.",
          "sub": "Rút ra: đứng xem chạy thử chưa phải là được đào tạo.",
          "keys": [
            "chưa phải là được đào tạo"
          ]
        }
      ],
      "ref": "p10"
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
            "text": "④ Thứ Năm · Hồ sơ lưu",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:thursday"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 2868,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "give",
                  "face": "happy"
                }
              ],
              "props": [
                "toolbox",
                "high-voltage"
              ],
              "camera": [
                {
                  "at": "l4",
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
            "at": "l1:thursday",
            "caption": "Thứ Năm · sân trạm biến áp",
            "icon": "toolbox"
          },
          {
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1255,
            "w": 44,
            "h": 44,
            "at": "l2:as-built",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1237,
            "size": 56,
            "at": "l2:as-built+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "Bản vẽ hoàn công đúng thực tế",
            "x": 2098,
            "y": 1247,
            "size": 36,
            "at": "l2:as-built+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1317,
            "w": 44,
            "h": 44,
            "at": "l2:factory",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1299,
            "size": 56,
            "at": "l2:factory+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "Kết quả thử FAT, SAT",
            "x": 2098,
            "y": 1309,
            "size": 36,
            "at": "l2:factory+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1379,
            "w": 44,
            "h": 44,
            "at": "l3:quality",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1361,
            "size": 56,
            "at": "l3:quality+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "Hồ sơ chất lượng",
            "x": 2098,
            "y": 1371,
            "size": 36,
            "at": "l3:quality+200"
          },
          {
            "id": "g-c3",
            "t": "box",
            "x": 2028,
            "y": 1441,
            "w": 44,
            "h": 44,
            "at": "l3:data sheets",
            "stroke": 5
          },
          {
            "id": "g-k3",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1423,
            "size": 56,
            "at": "l3:data sheets+600",
            "color": "accent"
          },
          {
            "id": "g-l3",
            "t": "text",
            "text": "Data sheet thiết bị",
            "x": 2098,
            "y": 1433,
            "size": 36,
            "at": "l3:data sheets+200"
          },
          {
            "id": "g-c4",
            "t": "box",
            "x": 2028,
            "y": 1503,
            "w": 44,
            "h": 44,
            "at": "l3:type",
            "stroke": 5
          },
          {
            "id": "g-k4",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1485,
            "size": 56,
            "at": "l3:type+600",
            "color": "accent"
          },
          {
            "id": "g-l4",
            "t": "text",
            "text": "Chứng nhận kiểu (nếu yêu cầu)",
            "x": 2098,
            "y": 1495,
            "size": 36,
            "at": "l3:type+200"
          },
          {
            "id": "g-c5",
            "t": "box",
            "x": 2028,
            "y": 1565,
            "w": 44,
            "h": 44,
            "at": "l3:keeps",
            "stroke": 5
          },
          {
            "id": "g-k5",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1547,
            "size": 56,
            "at": "l3:keeps+600",
            "color": "accent"
          },
          {
            "id": "g-l5",
            "t": "text",
            "text": "Nơi lưu, người giữ",
            "x": 2098,
            "y": 1557,
            "size": 36,
            "at": "l3:keeps+200"
          },
          {
            "id": "g-tbd",
            "t": "text",
            "text": "“Chưa xác định” = không mốc so",
            "x": 2028,
            "y": 1635,
            "size": 36,
            "at": "l5:blank",
            "color": "coral",
            "hl": [
              {
                "text": "không mốc so",
                "at": "l5:compare"
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
          "say": "Stop four, Thursday, at the substation yard. What stays at the plant?",
          "sub": "Chặng bốn, thứ Năm, ở sân trạm biến áp. Lưu gì tại nhà máy?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "As-built drawings that match what was installed. Factory and site test results, FAT and SAT.",
          "sub": "Bản vẽ hoàn công đúng với thứ đã lắp. Kết quả thử tại xưởng và hiện trường, FAT và SAT."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Quality records, data sheets, type certificates if required, and who keeps each set, where.",
          "sub": "Hồ sơ chất lượng, bảng thông số, chứng nhận kiểu nếu có yêu cầu, và ai giữ bộ nào, ở đâu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Sam, this data sheet still says 'to be determined' on key values.",
          "sub": "Anh Sam, data sheet này còn ô “chưa xác định” ở thông số quan trọng.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A common slip. A blank today leaves nothing to compare with when the machine underperforms.",
          "sub": "Lỗi hay gặp. Ô trống hôm nay là không có mốc để so khi thiết bị chạy kém.",
          "keys": [
            "không có mốc để so"
          ]
        }
      ],
      "ref": "p11,p12"
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
            "at": "l1",
            "fit": [
              "g-v2"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "G",
            "ms": 700
          },
          {
            "at": "l4",
            "fit": [
              "g-v2"
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
            "id": "g-v2",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 2868,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "give",
                  "face": "happy"
                }
              ],
              "props": [
                "toolbox",
                "high-voltage"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
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
            "at": 0,
            "caption": "Thứ Năm · thùng “dụng cụ đặc biệt”",
            "icon": "toolbox"
          },
          {
            "id": "g-dc",
            "t": "text",
            "text": "“Dụng cụ đặc biệt” = ?",
            "x": 2028,
            "y": 1710,
            "size": 44,
            "at": "l2:never defined",
            "color": "coral"
          },
          {
            "id": "g-dm",
            "t": "text",
            "text": "Chưa định nghĩa → lập danh mục",
            "x": 2028,
            "y": 1785,
            "size": 46,
            "at": "l6:list",
            "color": "accent",
            "hl": [
              {
                "text": "lập danh mục",
                "at": "l6:list"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "sam",
          "say": "And here are your special tools. That condition is met.",
          "sub": "Còn đây là dụng cụ đặc biệt. Điều kiện ấy đủ rồi nhé.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A crate of ordinary spanners. And the contract never defined special tools.",
          "sub": "Một thùng cờ lê thông thường. Mà hợp đồng chưa từng định nghĩa dụng cụ đặc biệt."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Don't argue by feel. The problem is in the wording.",
          "sub": "Đừng cãi bằng cảm nhận. Lỗi nằm ở câu chữ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Then let's list special tools per machine, against the maker's maintenance manual.",
          "sub": "Vậy mình lập danh mục dụng cụ đặc biệt theo từng thiết bị, đối chiếu sách bảo dưỡng của hãng.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "The agreed list goes in the minutes before we sign.",
          "sub": "Danh mục thống nhất thì ghi vào biên bản trước khi ký."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Lesson: an undefined word gets defined by a list.",
          "sub": "Rút ra: chữ chưa định nghĩa thì định nghĩa bằng danh mục.",
          "keys": [
            "định nghĩa bằng danh mục"
          ]
        }
      ],
      "ref": "p13,p14"
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
            "at": "l4",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑤ Sáng thứ Sáu · Phụ tùng",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:friday"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "package",
                "clipboard"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "close",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:friday",
            "caption": "Sáng thứ Sáu · kho phụ tùng",
            "icon": "package"
          },
          {
            "id": "h-ch",
            "t": "text",
            "text": "Tự xử lý hay ngồi chờ?",
            "x": 3996,
            "y": 1250,
            "size": 50,
            "at": "l2:waits",
            "color": "coral"
          },
          {
            "id": "h-new",
            "t": "text",
            "text": "Cam kết: phụ tùng là hàng mới",
            "x": 3996,
            "y": 1330,
            "size": 44,
            "at": "l3:new"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1430,
            "w": 44,
            "h": 44,
            "at": "l4:code",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1412,
            "size": 56,
            "at": "l4:code+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Mã",
            "x": 4066,
            "y": 1422,
            "size": 40,
            "at": "l4:code+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1492,
            "w": 44,
            "h": 44,
            "at": "l4:quantity",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1474,
            "size": 56,
            "at": "l4:quantity+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Số lượng",
            "x": 4066,
            "y": 1484,
            "size": 40,
            "at": "l4:quantity+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1554,
            "w": 44,
            "h": 44,
            "at": "l4:condition",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1536,
            "size": 56,
            "at": "l4:condition+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Tình trạng",
            "x": 4066,
            "y": 1546,
            "size": 40,
            "at": "l4:condition+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1616,
            "w": 44,
            "h": 44,
            "at": "l4:location",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1598,
            "size": 56,
            "at": "l4:location+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Nơi để",
            "x": 4066,
            "y": 1608,
            "size": 40,
            "at": "l4:location+200"
          },
          {
            "id": "h-c4",
            "t": "box",
            "x": 3996,
            "y": 1678,
            "w": 44,
            "h": 44,
            "at": "l4:sign",
            "stroke": 5
          },
          {
            "id": "h-k4",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1660,
            "size": 56,
            "at": "l4:sign+600",
            "color": "accent"
          },
          {
            "id": "h-l4",
            "t": "text",
            "text": "Hai bên cùng ký",
            "x": 4066,
            "y": 1670,
            "size": 40,
            "at": "l4:sign+200"
          },
          {
            "id": "h-ton",
            "t": "text",
            "text": "Chưa giao → danh mục tồn + hạn",
            "x": 3996,
            "y": 1760,
            "size": 46,
            "at": "l5:punch",
            "color": "accent",
            "hl": [
              {
                "text": "+ hạn",
                "at": "l5:deadline"
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
          "say": "Stop five, Friday morning, the spare parts store.",
          "sub": "Chặng năm, sáng thứ Sáu, kho phụ tùng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Spares and special tools decide whether your crew fixes small faults itself, or waits.",
          "sub": "Phụ tùng và dụng cụ đặc biệt quyết định đội bạn tự xử lý sự cố nhỏ hay phải ngồi chờ.",
          "keys": [
            "ngồi chờ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "EPC contracts often promise new spares. And special tools are a handover condition.",
          "sub": "Hợp đồng EPC thường cam kết phụ tùng giao là hàng mới; dụng cụ đặc biệt là điều kiện bàn giao."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Counting now: code, quantity, condition, location. Then both sides sign.",
          "sub": "Em đang kiểm đếm: mã, số lượng, tình trạng, nơi để. Rồi hai bên cùng ký.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Anything not delivered goes on the punch list, with a deadline. Not on a verbal promise.",
          "sub": "Món nào chưa giao thì ghi vào danh mục tồn kèm hạn, đừng chỉ nhận lời hứa miệng.",
          "keys": [
            "kèm hạn"
          ]
        }
      ],
      "ref": "p15,p16"
    },
    {
      "id": "s16",
      "module": "BRK-02",
      "data": {
        "kicker": "Chặng cuối",
        "title": "Việc gì được để lại sau COD?",
        "hl": "sau COD",
        "sub": "Danh mục tồn: việc nhỏ không chặn bàn giao"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What may wait until after COD?",
          "sub": "Việc gì được để lại sau COD?",
          "keys": [
            "sau COD"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Enter the punch list.",
          "sub": "Đến lượt danh mục tồn."
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
            "text": "⑥ Chiều thứ Sáu · Danh mục tồn",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:friday"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Kiểm tra chung → danh sách",
            "x": 5964,
            "y": 1250,
            "size": 40,
            "at": "l2:joint"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "CĐT góp ý trong [ ] ngày",
            "x": 5964,
            "y": 1320,
            "size": 40,
            "at": "l2:comments"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Quá hạn = bản chốt",
            "x": 5964,
            "y": 1390,
            "size": 48,
            "at": "l3:final",
            "color": "coral",
            "hl": [
              {
                "text": "bản chốt",
                "at": "l3:final"
              }
            ]
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "Xong trong [ ] ngày sau COD",
            "x": 5964,
            "y": 1470,
            "size": 40,
            "at": "l3:due"
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "Không làm → CĐT làm, trừ tiền",
            "x": 5964,
            "y": 1540,
            "size": 40,
            "at": "l4:deducts"
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Silver Book 2017: việc tồn xong trước khi hết thời hạn thông báo khiếm khuyết",
            "x": 5964,
            "y": 1610,
            "size": 26,
            "at": "l5:silver",
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
          "say": "Stop six, Friday afternoon. Sam sends the punch list, so small jobs don't block handover.",
          "sub": "Chặng sáu, chiều thứ Sáu. Sam gửi danh mục tồn, để việc nhỏ không chặn bàn giao."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Joint inspection. The contractor lists items with time and cost. The owner comments within so many days.",
          "sub": "Hai bên kiểm tra chung. Nhà thầu lập danh sách kèm thời gian, chi phí. Chủ đầu tư góp ý trong [ ] ngày."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Miss that window, and the list is final. Items are due so many days after COD.",
          "sub": "Quá hạn góp ý thì danh sách ấy là bản chốt. Nhà thầu làm xong trong [ ] ngày sau COD.",
          "keys": [
            "bản chốt"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not done? The owner does it and deducts the cost.",
          "sub": "Không làm thì Chủ đầu tư tự làm và trừ tiền."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Under the international Silver Book, punch items finish before the defects notification period ends.",
          "sub": "Theo mẫu quốc tế Silver Book 2017, việc tồn phải xong trước khi hết thời hạn thông báo khiếm khuyết."
        }
      ],
      "ref": "p17,p18"
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
            "at": "l4",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-nho",
            "t": "text",
            "text": "Thiếu sách, chưa đào tạo ≠ việc nhỏ",
            "x": 5964,
            "y": 1680,
            "size": 40,
            "at": "l1:small",
            "color": "coral",
            "hl": [
              {
                "text": "≠ việc nhỏ",
                "at": "l1:small"
              }
            ]
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 1240,
            "w": 780,
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
                "spiral-calendar",
                "fire-extinguisher"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2:story",
            "caption": "Chiều thứ Sáu · lịch theo dõi thời hạn",
            "icon": "spiral-calendar"
          },
          {
            "id": "i-dh",
            "t": "text",
            "text": "Chốt theo đồng hồ",
            "x": 5964,
            "y": 1760,
            "size": 56,
            "at": "l3:clock",
            "color": "accent",
            "hl": [
              {
                "text": "đồng hồ",
                "at": "l3:clock"
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
          "say": "And only items that don't affect safe operation belong there. A missing manual or untrained crew is no small item.",
          "sub": "Chỉ việc không ảnh hưởng vận hành an toàn mới nên vào danh mục. Thiếu sách vận hành hay chưa đào tạo không phải “việc nhỏ”.",
          "keys": [
            "không phải “việc nhỏ”"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The common story: a busy shift leader, a week of grid incidents, comments sent too late. A cable room fire alarm drops off the list.",
          "sub": "Chuyện thường gặp: trưởng ca bận sự cố lưới cả tuần, gửi ý kiến khi đã quá hạn. Báo cháy một phòng cáp rơi khỏi danh mục."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Punch lists close by the clock, not when busy people are free.",
          "sub": "Danh mục tồn chốt theo đồng hồ, không chờ người bận.",
          "keys": [
            "chốt theo đồng hồ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Not this time. The deadline is in my calendar. I'm writing comments tonight.",
          "sub": "Lần này thì không. Hạn góp ý đã nằm trong lịch. Tối nay chị viết luôn.",
          "face": "thinking"
        }
      ],
      "ref": "p18,p19,p20"
    },
    {
      "id": "s19",
      "module": "BRK-04",
      "data": {
        "title": "Ý kiến về danh mục tồn",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Đề nghị nhà thầu bổ sung các tồn tại còn lại",
        "right": "Theo Điều [ ]: báo cháy phòng cáp chưa thử, hạn [ ] ngày sau COD",
        "wrongIllus": "speech-balloon",
        "rightIllus": "memo"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: please add the remaining items.",
          "sub": "Trước: đề nghị bổ sung các tồn tại còn lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: the clause, the item, a deadline.",
          "sub": "Sau: dẫn điều, nêu mục, có hạn.",
          "keys": [
            "có hạn"
          ]
        }
      ],
      "ref": "p21"
    },
    {
      "id": "s20",
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
            "id": "i-cc",
            "t": "text",
            "text": "Tên mục + hạn = căn cứ",
            "x": 6804,
            "y": 1795,
            "size": 40,
            "at": "l2:evidence",
            "color": "accent",
            "hl": [
              {
                "text": "căn cứ",
                "at": "l2:evidence"
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
          "say": "Thảo's version also names the missing as-built drawings for the control panel.",
          "sub": "Bản của Thảo còn nêu mục thiếu bản vẽ hoàn công tủ điều khiển."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The first names nothing, so it's easy to dispute. The second cites the clause, every item, a deadline: evidence.",
          "sub": "Bản trước không nêu mục nào nên dễ cãi. Bản sau dẫn điều khoản, nêu từng mục, có hạn: thành căn cứ.",
          "keys": [
            "thành căn cứ"
          ]
        }
      ],
      "ref": "p21,p22"
    },
    {
      "id": "s21",
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
            "at": "l5",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Thứ Hai tuần sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:monday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l3",
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
            "at": "l1:monday",
            "caption": "Thứ Hai tuần sau · phòng họp",
            "icon": "page-facing-up"
          },
          {
            "id": "j-s",
            "t": "text",
            "text": "“…sẽ gửi sau bàn giao”",
            "x": 7932,
            "y": 1250,
            "size": 50,
            "at": "l2:remaining",
            "color": "muted"
          },
          {
            "id": "j-d",
            "t": "text",
            "text": "→ danh mục tồn: tên + hạn",
            "x": 7932,
            "y": 1340,
            "size": 50,
            "at": "l3:punch",
            "color": "accent",
            "hl": [
              {
                "text": "tên + hạn",
                "at": "l3:deadline"
              }
            ]
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Sách, đào tạo: phải có trước",
            "x": 7932,
            "y": 1430,
            "size": 48,
            "at": "l4:manuals",
            "color": "coral"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Trăm nghe · một thấy · một lần làm",
            "x": 7932,
            "y": 1540,
            "size": 44,
            "at": "l5:hundred",
            "hl": [
              {
                "text": "một lần làm",
                "at": "l5:try"
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
          "say": "Monday again, same meeting room. Same Sam, same sentence.",
          "sub": "Lại thứ Hai, vẫn phòng họp ấy. Vẫn Sam, vẫn câu ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "The remaining documents will be sent after handover.",
          "sub": "Hồ sơ còn lại sẽ gửi sau bàn giao.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Then each one goes on the punch list, by name, with a deadline.",
          "sub": "Vậy từng món vào danh mục tồn, có tên, có hạn.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Except manuals and training. Those come first. They're no small items.",
          "sub": "Trừ sách vận hành và đào tạo: phải có trước. Đó không phải việc nhỏ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A hundred hearings, one sighting, one hands-on try. And now, one checklist.",
          "sub": "Trăm nghe, một thấy, một lần tự làm. Và giờ, một bảng kiểm.",
          "keys": [
            "một bảng kiểm"
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
      "ref": "intro,p18"
    },
    {
      "id": "s22",
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
            "at": "l1:list",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l2:watching",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:clock",
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
            "x": 8692,
            "y": 640,
            "at": "l1:list"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 800,
            "y": 1780,
            "at": "l2:watching"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 6504,
            "y": 1760,
            "at": "l3:clock"
          },
          {
            "id": "z-src-note",
            "t": "text",
            "text": "Bài để tham khảo chung; tình huống là minh hoạ, không lấy từ hợp đồng hay dự án cụ thể nào. Việc cụ thể, đọc chính hợp đồng của bạn và hỏi pháp chế.",
            "x": 7932,
            "y": 1805,
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
          "say": "So: read manuals against a list, and check their language.",
          "sub": "Tóm lại: đọc sách vận hành theo danh mục, kiểm cả ngôn ngữ.",
          "keys": [
            "theo danh mục"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Watching commissioning isn't training. Undefined words get defined by a list.",
          "sub": "Đứng xem chạy thử chưa phải được đào tạo. Chữ chưa định nghĩa thì định nghĩa bằng danh mục."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Punch lists close by the clock. General info only: read your own contract and ask legal.",
          "sub": "Danh mục tồn chốt theo đồng hồ. Bài là kiến thức chung: đọc chính hợp đồng của bạn, hỏi pháp chế.",
          "keys": [
            "chốt theo đồng hồ"
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
        "q": "Should a missing operation manual go on the punch list as a small item?",
        "options": [
          "Yes, as long as the contractor promises to send it someday",
          "No, only items that do not affect safe operation should be left for later",
          "Yes, manuals are always minor because staff can learn by trying"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "open-book",
        "why": "Chỉ việc thật sự không ảnh hưởng tới vận hành an toàn mới nên nằm trong danh mục tồn. Thiếu sách vận hành hay chưa đào tạo không phải việc nhỏ."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Should a missing operation manual go on the punch list as a small item?",
          "sub": "Thiếu sách vận hành có nên đưa vào danh mục tồn như một việc nhỏ không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A missing manual is no small item.",
          "sub": "Thiếu sách vận hành không phải việc nhỏ."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[33]"
    },
    {
      "id": "s32",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Right now: one table, from manuals to the punch list, with a name on every line.",
          "sub": "Việc làm ngay: một bảng, từ sách vận hành tới danh mục tồn, mỗi dòng ghi tên người phụ trách.",
          "keys": [
            "mỗi dòng ghi tên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next lesson: from which day your team carries the risk. Now, forty questions below!",
          "sub": "Bài sau: từ ngày nào đội vận hành chịu rủi ro. Giờ thì, bốn mươi câu hỏi bên dưới!"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-22",
  "notes": "#145 bài MỚI (đào sâu 1) dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-22 (câu thoại bị cắt): Sam “Hồ sơ còn lại sẽ gửi…” (intro) → nói trọn ở s03 “…sau bàn giao” → khép vòng s21 (thứ Hai tuần sau, cùng câu; Thảo: vào danh mục tồn có tên, có hạn; trừ sách vận hành, đào tạo). Dòng thời gian: MỘT TUẦN TRƯỚC BÀN GIAO (T2 điều kiện p1–p2 → T3 sách vận hành p3–p5 → chiều T3 làm mẫu bốn bước với Dũng p6–p7 → T4 đào tạo p8, “Khoan đã!” Dũng tưởng đứng xem là đã học p9–p10 → T5 sân trạm: hồ sơ lưu, data sheet p11–p12, thùng cờ lê p13–p14 → sáng T6 kho phụ tùng p15–p16 → chiều T6 danh mục tồn p17–p20, Trước/Sau p21–p22). Nhân vật: w145/_series/epc-om-operator.md (Thảo trưởng ca, Sam nhà thầu, Dũng kỹ sư bảo dưỡng). Tục ngữ mở/khép: “Trăm nghe không bằng một thấy” → trăm lần thấy không bằng một lần tự tay làm. BRK: 06 (điều kiện bàn giao), 10 (Luật XD 2025 ngôn ngữ hợp đồng, tóm ý), 02 (việc gì được để sau COD), 04 (Trước/Sau ý kiến danh mục tồn). Số chỉ lấy từ bài: Luật XD 135/2025 Điều 80, Silver Book 2017, [ ] ngày giữ nguyên. Câu đố questions[33].",
  "loop": {
    "open": "s00",
    "close": "s21"
  }
};
