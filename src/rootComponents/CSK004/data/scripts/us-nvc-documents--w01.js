// us-nvc-documents--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "us-nvc-documents--w01",
  "unit": {
    "audience": "family-sponsored-immigrants-to-us",
    "slug": "us-nvc-documents",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Nộp hồ sơ cho Trung tâm Thị thực Quốc gia gồm những giấy tờ gì?",
    "series": "Từ hồ sơ được duyệt đến ngày phỏng vấn — cho người được bảo lãnh định cư Mỹ diện gia đình"
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
            "id": "a-p",
            "t": "text",
            "text": "Phiếu lý lịch tư pháp",
            "x": 60,
            "y": 100,
            "size": 84,
            "at": "l1:record"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "số 2",
            "x": 60,
            "y": 220,
            "size": 170,
            "at": "l1:number two",
            "color": "accent",
            "hl": [
              {
                "text": "số 2",
                "at": "l1:number two+300"
              }
            ]
          },
          {
            "id": "a-o",
            "t": "text",
            "text": "bản gốc · chữ ký tươi · con dấu",
            "x": 70,
            "y": 440,
            "size": 46,
            "at": "l2:original"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: gói hướng dẫn lịch hẹn của Tổng Lãnh sự quán TP.HCM, 8/2026",
            "x": 60,
            "y": 700,
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
          "say": "One sheet of paper: the Vietnamese criminal record certificate, number two.",
          "sub": "Một tờ giấy: Phiếu lý lịch tư pháp số 2.",
          "keys": [
            "Phiếu lý lịch tư pháp số 2"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The consulate wants the original, with a wet signature and a seal.",
          "sub": "Tổng Lãnh sự quán đòi bản gốc, có chữ ký tươi và con dấu.",
          "keys": [
            "chữ ký tươi và con dấu"
          ]
        }
      ],
      "ref": "p5"
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
            "at": "l1",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
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
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "thinking"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "envelope",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai, tuần 1 · thư NVC đến",
            "icon": "envelope"
          },
          {
            "id": "a-e",
            "t": "text",
            "text": "Bản điện tử?",
            "x": 60,
            "y": 510,
            "size": 60,
            "at": "l5:electronic",
            "color": "coral",
            "hl": [
              {
                "text": "điện tử",
                "at": "l5:electronic"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy”",
            "x": 70,
            "y": 620,
            "size": 52,
            "at": "l6:care first",
            "color": "accent",
            "hl": [
              {
                "text": "Cẩn tắc",
                "at": "l6:care first"
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
          "say": "Meet Ms Hoa again. Her F four case is ready for documents, and NVC's letter has a list in English.",
          "sub": "Lại là cô Hoa. Hồ sơ F4 của cô đã đến lúc nộp giấy tờ, và thư NVC kèm danh sách bằng tiếng Anh.",
          "keys": [
            "danh sách bằng tiếng Anh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "One missing sheet and they send it all back, right?",
          "sub": "Thiếu một tờ là bị trả cả hồ sơ, phải không?",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And Dũng, her nephew, always first with a shortcut.",
          "sub": "Còn Dũng, cháu cô, lúc nào cũng nhanh tay đi đường tắt."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Auntie, I'll get the record online. Electronic, super quick!",
          "sub": "Cô ơi, để em xin phiếu trên mạng. Bản điện tử, nhanh lắm!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "But here's a detail that matters: electronic, or original?",
          "sub": "Nhưng có một chi tiết đáng chú ý: bản điện tử, hay bản gốc?",
          "keys": [
            "bản điện tử, hay bản gốc"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Many think electronic is easier and accepted too. Care first, regret never.",
          "sub": "Nhiều người nghĩ bản điện tử tiện hơn, cũng được nhận. “Cẩn tắc vô áy náy.”",
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
      "ref": "intro,p6"
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
            "text": "Nộp NVC gồm những gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:documents",
            "hl": [
              {
                "text": "những gì",
                "at": "l1:what"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: gom đại một xấp",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:pile",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:order"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: đúng loại, đúng thứ tự",
            "x": 2028,
            "y": 260,
            "size": 56,
            "at": "l2:right type",
            "color": "accent",
            "hl": [
              {
                "text": "đúng loại",
                "at": "l2:right type"
              }
            ]
          },
          {
            "id": "b-g0b",
            "t": "box",
            "x": 2028,
            "y": 400,
            "w": 520,
            "h": 120,
            "at": "l3:fees",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-g1b",
            "t": "box",
            "x": 2578,
            "y": 400,
            "w": 520,
            "h": 120,
            "at": "l3:civil",
            "color": "coral",
            "stroke": 5
          },
          {
            "id": "b-g2b",
            "t": "box",
            "x": 3128,
            "y": 400,
            "w": 520,
            "h": 120,
            "at": "l3:support",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-g0",
            "t": "text",
            "text": "① Phí + đơn",
            "x": 2058,
            "y": 430,
            "size": 50,
            "at": "l3:fees+200"
          },
          {
            "id": "b-g1",
            "t": "text",
            "text": "② Hộ tịch",
            "x": 2608,
            "y": 430,
            "size": 50,
            "at": "l3:civil+200"
          },
          {
            "id": "b-g2",
            "t": "text",
            "text": "③ Bảo trợ",
            "x": 3158,
            "y": 430,
            "size": 50,
            "at": "l3:support+200"
          },
          {
            "id": "b-plus",
            "t": "text",
            "text": "+ bản dịch · + giấy không xin được",
            "x": 2028,
            "y": 580,
            "size": 44,
            "at": "l4:translations"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Bộ Ngoại giao Mỹ (NVC, Step 7, I-864 FAQs); gói hướng dẫn 8/2026",
            "x": 2028,
            "y": 700,
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
          "say": "So what documents do you submit to the National Visa Center?",
          "sub": "Vậy nộp cho Trung tâm Thị thực Quốc gia gồm những giấy tờ gì?",
          "keys": [
            "những giấy tờ gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not a random pile. The right type of paper, in the right order.",
          "sub": "Không phải gom đại một xấp, mà là đúng loại giấy, đúng thứ tự.",
          "keys": [
            "đúng loại giấy, đúng thứ tự"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three groups: fees and the online form, civil documents, and financial support.",
          "sub": "Ba nhóm: lệ phí và đơn trực tuyến, giấy tờ hộ tịch, bảo trợ tài chính."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Plus two traps: translations, and papers you simply cannot get. Four weeks, step by step.",
          "sub": "Thêm hai cái bẫy: bản dịch, và giấy không xin được. Bốn tuần, từng bước một.",
          "keys": [
            "hai cái bẫy"
          ]
        }
      ],
      "ref": "intro,p3"
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
            "text": "① Tuần 1 · Phí và đơn",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:week one"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Thị thực có / sắp có → NVC báo",
            "x": 3996,
            "y": 160,
            "size": 44,
            "at": "l2:available",
            "hl": [
              {
                "text": "NVC báo",
                "at": "l2:tells"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Đóng phí trên CEAC",
            "x": 3996,
            "y": 240,
            "size": 52,
            "at": "l3:ceac",
            "color": "accent",
            "hl": [
              {
                "text": "CEAC",
                "at": "l3:ceac"
              }
            ]
          },
          {
            "id": "c-2s",
            "t": "text",
            "text": "phí xử lý đơn · phí xem xét bảo trợ · phụ phí an ninh: xem Fees for Visa Services",
            "x": 3996,
            "y": 310,
            "size": 28,
            "at": "l4:processing",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Điền DS-260 trực tuyến",
            "x": 3996,
            "y": 370,
            "size": 52,
            "at": "l5:ds",
            "hl": [
              {
                "text": "DS-260",
                "at": "l5:ds"
              }
            ]
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Mỗi người đi cùng: tự gom giấy",
            "x": 3996,
            "y": 450,
            "size": 46,
            "at": "l6:each"
          },
          {
            "id": "c-aos",
            "t": "text",
            "text": "Điều chỉnh ở Mỹ: khỏi phí NVC",
            "x": 3996,
            "y": 540,
            "size": 44,
            "at": "l7:adjusting",
            "color": "muted"
          },
          {
            "id": "c-aoss",
            "t": "text",
            "text": "chỉ báo ý định cho NVC",
            "x": 3996,
            "y": 600,
            "size": 28,
            "at": "l7:intention",
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
          "say": "Stop one, week one. What does NVC do, and when does it start?",
          "sub": "Chặng một, tuần thứ nhất. NVC làm gì, khi nào bắt đầu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "When a visa is available, or will be within months, NVC tells the applicant to begin.",
          "sub": "Khi thị thực đã có hoặc sắp có trong vài tháng, NVC báo người được bảo lãnh bắt đầu.",
          "keys": [
            "NVC báo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Step one: pay fees on CEAC.",
          "sub": "Bước một: đóng phí trên hệ thống CEAC.",
          "keys": [
            "CEAC"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The processing fee, the support review fee and the security surcharge are on the official fees page.",
          "sub": "Phí xử lý đơn, phí xem xét bảo trợ tài chính và phụ phí an ninh đăng trên trang Fees for Visa Services."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then the online application, DS two-sixty.",
          "sub": "Rồi điền đơn trực tuyến DS-260."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "After that, you and each family member going with you collect your own civil documents.",
          "sub": "Sau đó, bạn và từng người nhà đi cùng tự thu thập giấy tờ hộ tịch của mình.",
          "keys": [
            "từng người nhà đi cùng"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Adjusting status inside America instead? No NVC fees. You tell NVC your intention.",
          "sub": "Ai định điều chỉnh tình trạng ngay tại Mỹ thì không đóng phí NVC, chỉ báo ý định cho NVC."
        }
      ],
      "ref": "p1,p2,p3"
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
            "text": "② Thứ Tư · Giấy tờ hộ tịch",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:wednesday"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 150,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "explain",
                  "face": "thinking"
                }
              ],
              "props": [
                "file-folder",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
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
            "at": "l1:wednesday",
            "caption": "Thứ Tư, tuần 1 · tủ giấy tờ",
            "icon": "file-folder"
          },
          {
            "id": "d-auth",
            "t": "text",
            "text": "Cơ quan có thẩm quyền cấp",
            "x": 5964,
            "y": 160,
            "size": 46,
            "at": "l3:competent"
          },
          {
            "id": "d-tool",
            "t": "text",
            "text": "Reciprocity and Civil Documents by Country",
            "x": 5964,
            "y": 225,
            "size": 28,
            "at": "l3:country",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 300,
            "w": 46,
            "h": 46,
            "at": "l4:birth",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 284,
            "size": 56,
            "at": "l4:birth+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Khai sinh mọi người đi cùng",
            "x": 6034,
            "y": 292,
            "size": 42,
            "at": "l4:birth+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 375,
            "w": 46,
            "h": 46,
            "at": "l4:marriage",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 359,
            "size": 56,
            "at": "l4:marriage+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Kết hôn: mọi cuộc hôn nhân",
            "x": 6034,
            "y": 367,
            "size": 42,
            "at": "l4:marriage+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 450,
            "w": 46,
            "h": 46,
            "at": "l5:divorce",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 434,
            "size": 56,
            "at": "l5:divorce+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Chấm dứt hôn nhân trước",
            "x": 6034,
            "y": 442,
            "size": 42,
            "at": "l5:divorce+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 525,
            "w": 46,
            "h": 46,
            "at": "l6:passport",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 509,
            "size": 56,
            "at": "l6:passport+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Trang thông tin hộ chiếu",
            "x": 6034,
            "y": 517,
            "size": 42,
            "at": "l6:passport+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, Wednesday. Ms Hoa opens the family paper cabinet.",
          "sub": "Chặng hai, thứ Tư. Cô Hoa mở tủ giấy tờ của nhà."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Birth papers, marriage papers... which ones count?",
          "sub": "Khai sinh, kết hôn... giấy nào mới tính?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Papers issued by the competent authority in your country. Each country's rules are in NVC's lookup tool.",
          "sub": "Giấy do cơ quan có thẩm quyền ở nước bạn cấp; hướng dẫn riêng từng nước nằm ở công cụ tra cứu của NVC.",
          "keys": [
            "cơ quan có thẩm quyền"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Birth certificates for everyone going, marriage certificates for every marriage. Originals or certified copies.",
          "sub": "Khai sinh của mọi người đi cùng, giấy kết hôn của mọi cuộc hôn nhân: bản gốc hoặc bản sao có chứng thực.",
          "keys": [
            "bản gốc hoặc bản sao có chứng thực"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Proof that earlier marriages ended: a divorce decree, a death certificate, an annulment.",
          "sub": "Giấy tờ chấm dứt hôn nhân trước: bản án ly hôn, giấy chứng tử, quyết định huỷ hôn."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A copy of your valid passport's data page.",
          "sub": "Bản chụp trang thông tin hộ chiếu còn hạn."
        }
      ],
      "ref": "p4"
    },
    {
      "id": "s05",
      "module": "BRK-06",
      "data": {
        "title": "Thêm nếu có",
        "items": [
          {
            "illus": "military-helmet",
            "text": "Hồ sơ quân sự"
          },
          {
            "illus": "balance-scale",
            "text": "Bản án"
          },
          {
            "illus": "scroll",
            "text": "Kể cả ân xá"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Military records, court records, even if pardoned.",
          "sub": "Hồ sơ quân sự, bản án và thi hành án, kể cả đã được ân xá."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "If they apply to you, they go in too.",
          "sub": "Nếu có, cũng phải nộp.",
          "keys": [
            "cũng phải nộp"
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
          }
        ],
        "items": [
          {
            "id": "d-mil",
            "t": "text",
            "text": "+ quân sự (nếu từng đi lính) · án (kể cả ân xá)",
            "x": 5964,
            "y": 610,
            "size": 30,
            "at": "l1:military",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "d-sp",
            "t": "text",
            "text": "Người bảo lãnh cũng có phần",
            "x": 5964,
            "y": 670,
            "size": 50,
            "at": "l2:sponsor",
            "color": "accent",
            "hl": [
              {
                "text": "cũng có phần",
                "at": "l2:part"
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
          "say": "Military records if you served, certified court records if you were ever convicted.",
          "sub": "Bản chụp hồ sơ quân sự nếu từng đi lính; bản sao có chứng thực bản án nếu từng bị kết án."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And the sponsor has a part too. In a brothers and sisters case, the sponsor's birth certificate.",
          "sub": "Người bảo lãnh cũng có phần. Diện anh chị em F4: cần giấy khai sinh của người bảo lãnh.",
          "keys": [
            "giấy khai sinh của người bảo lãnh"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Spouse cases with a sponsor married before? Proof every earlier marriage ended.",
          "sub": "Diện vợ chồng mà người bảo lãnh từng kết hôn: cần bằng chứng mọi cuộc hôn nhân trước đã chấm dứt."
        }
      ],
      "ref": "p4,p8"
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
            "text": "③ Tuần 2 · Lý lịch tư pháp",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:week two"
          },
          {
            "id": "e-16",
            "t": "text",
            "text": "Từ 16 tuổi",
            "x": 7932,
            "y": 160,
            "size": 64,
            "at": "l2:sixteen",
            "color": "accent",
            "hl": [
              {
                "text": "16 tuổi",
                "at": "l2:sixteen"
              }
            ]
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "• nước quốc tịch, nếu sống > 6 tháng",
            "x": 7932,
            "y": 260,
            "size": 42,
            "at": "l3:six months"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "• nước đang sống",
            "x": 7932,
            "y": 325,
            "size": 42,
            "at": "l3:live now"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "• nước sống ≥ 12 tháng từ 16 tuổi",
            "x": 7932,
            "y": 390,
            "size": 42,
            "at": "l4:twelve"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "• nơi từng bị bắt giữ",
            "x": 7932,
            "y": 455,
            "size": 42,
            "at": "l4:arrested"
          },
          {
            "id": "e-2y",
            "t": "text",
            "text": "Thường hết hạn sau 2 năm",
            "x": 8772,
            "y": 260,
            "size": 46,
            "at": "l5:two years",
            "color": "coral",
            "hl": [
              {
                "text": "2 năm",
                "at": "l5:two years"
              }
            ]
          },
          {
            "id": "e-vn",
            "t": "text",
            "text": "Việt Nam: Phiếu số 2, bản gốc",
            "x": 8772,
            "y": 360,
            "size": 46,
            "at": "l6:vietnam",
            "color": "accent"
          },
          {
            "id": "e-vns",
            "t": "text",
            "text": "chữ ký tươi, con dấu (gói hướng dẫn 8/2026)",
            "x": 8772,
            "y": 425,
            "size": 28,
            "at": "l6:seal",
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
          "say": "Stop three, week two. The police certificate.",
          "sub": "Chặng ba, tuần thứ hai. Giấy xác nhận lý lịch tư pháp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Everyone aged sixteen or over needs one.",
          "sub": "Ai từ 16 tuổi trở lên đều cần.",
          "keys": [
            "16 tuổi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "From your country of nationality if you lived there over six months, and from where you live now.",
          "sub": "Của nước mang quốc tịch nếu từng sống ở đó hơn 6 tháng, và nước đang sống."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Any country you lived in twelve months or more after sixteen, and anywhere you were arrested.",
          "sub": "Nước từng sống từ 12 tháng trở lên khi đã đủ 16 tuổi, và nơi từng bị bắt giữ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "These usually expire after two years.",
          "sub": "Giấy này thường hết hạn sau 2 năm.",
          "keys": [
            "hết hạn sau 2 năm"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "For Vietnam: the original criminal record certificate number two, with a wet signature and seal.",
          "sub": "Với Việt Nam: bản gốc Phiếu lý lịch tư pháp số 2, có chữ ký tươi và con dấu.",
          "keys": [
            "bản gốc"
          ]
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s08",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Tuần 2 · bản điện tử",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "thumb"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Nộp Phiếu số 2 bản điện tử cho nhanh",
          "why": "Gói hướng dẫn 8/2026 ghi rõ bản điện tử của Phiếu lý lịch tư pháp số 2 không được chấp nhận.",
          "rule": "Đọc loại giấy trước khi đi xin"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Done! I printed the electronic version for you, Auntie. Same thing, right?",
          "sub": "Xong! Em in bản điện tử cho cô rồi. Cũng như nhau mà?",
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
          "say": "The August twenty twenty-six package says the electronic version is not accepted.",
          "sub": "Gói hướng dẫn 8/2026 ghi rõ: bản điện tử của Phiếu số 2 không được chấp nhận.",
          "keys": [
            "không được chấp nhận"
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
          "say": "Paper original, wet signature, seal. Applying properly this time.",
          "sub": "Bản giấy gốc, chữ ký tươi, con dấu. Lần này xin cho đúng.",
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
      "ref": "p6"
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
            "at": "l1",
            "fit": [
              "e-take"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l2",
            "fit": "E",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "e-el",
            "t": "text",
            "text": "Bản điện tử",
            "x": 7932,
            "y": 560,
            "size": 52,
            "at": "l1:electronic",
            "color": "muted"
          },
          {
            "id": "e-elx",
            "t": "strike",
            "over": "e-el",
            "at": "l1:accepted"
          },
          {
            "id": "e-take",
            "t": "text",
            "text": "Đọc kỹ loại giấy trước khi xin",
            "x": 7932,
            "y": 650,
            "size": 54,
            "at": "l2:before",
            "color": "accent",
            "hl": [
              {
                "text": "trước khi xin",
                "at": "l2:before"
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
          "say": "Electronic is handy, but not accepted here.",
          "sub": "Bản điện tử tiện thật, nhưng ở đây không được nhận."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Read the requirement, original or copy, before you apply, so you don't do it twice.",
          "sub": "Đọc kỹ yêu cầu về loại giấy, bản gốc hay bản chụp, trước khi đi xin, để khỏi làm lại.",
          "keys": [
            "khỏi làm lại"
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
            "text": "④ Cuối tuần 2 · Bảo trợ",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:affidavit"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "I-864: người bảo lãnh ký",
            "x": 60,
            "y": 1250,
            "size": 52,
            "at": "l2:signs",
            "color": "accent",
            "hl": [
              {
                "text": "I-864",
                "at": "l2:form"
              }
            ]
          },
          {
            "id": "f-1s",
            "t": "text",
            "text": "Affidavit of Support · thiếu trang thì không được nhận",
            "x": 60,
            "y": 1320,
            "size": 28,
            "at": "l3:pages",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Từ 18 tuổi",
            "x": 60,
            "y": 1380,
            "size": 46,
            "at": "l4:eighteen"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Công dân / thường trú nhân",
            "x": 60,
            "y": 1450,
            "size": 46,
            "at": "l4:citizen"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "Cư trú (domicile) ở Mỹ",
            "x": 60,
            "y": 1520,
            "size": 46,
            "at": "l4:domiciled"
          },
          {
            "id": "f-pc",
            "t": "text",
            "text": "Public charge: một trong các yếu tố",
            "x": 900,
            "y": 1250,
            "size": 40,
            "at": "l5:public charge",
            "hl": [
              {
                "text": "Public charge",
                "at": "l5:public charge"
              }
            ]
          },
          {
            "id": "f-pcs",
            "t": "text",
            "text": "cùng với tuổi, sức khoẻ, tài chính",
            "x": 900,
            "y": 1310,
            "size": 28,
            "at": "l6:age",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "f-in",
            "t": "text",
            "text": "Thu nhập ≥ mức theo chuẩn nghèo",
            "x": 900,
            "y": 1390,
            "size": 40,
            "at": "l7:poverty",
            "color": "coral"
          },
          {
            "id": "f-ins",
            "t": "text",
            "text": "Federal Poverty Guidelines hiện hành",
            "x": 900,
            "y": 1450,
            "size": 28,
            "at": "l7:guidelines",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "f-tax",
            "t": "text",
            "text": "Kèm: IRS tax transcript + W-2",
            "x": 900,
            "y": 1520,
            "size": 40,
            "at": "l8:transcript",
            "hl": [
              {
                "text": "W-2",
                "at": "l8:recent"
              }
            ]
          },
          {
            "id": "f-taxs",
            "t": "text",
            "text": "năm gần nhất (gói hướng dẫn 8/2026)",
            "x": 900,
            "y": 1580,
            "size": 28,
            "at": "l8:recent",
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
          "say": "Stop four, end of week two. The affidavit of support.",
          "sub": "Chặng bốn, cuối tuần thứ hai. Bản bảo trợ tài chính."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Form I-864. The sponsor signs it to support the applicant financially.",
          "sub": "Mẫu I-864: người bảo lãnh ký để bảo trợ tài chính cho người xin thị thực.",
          "keys": [
            "I-864"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "An incomplete form, even missing pages, won't be accepted.",
          "sub": "Điền thiếu, kể cả thiếu trang, sẽ không được nhận.",
          "keys": [
            "thiếu trang"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The sponsor must be eighteen or older, a citizen or permanent resident, and domiciled in America.",
          "sub": "Người bảo trợ phải từ 18 tuổi, là công dân hoặc thường trú nhân, và cư trú ở Mỹ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Officers consider whether the applicant may become a public charge.",
          "sub": "Viên chức xét khả năng người xin thị thực trở thành gánh nặng trợ cấp, public charge."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "The I-864 is one factor, along with age, health and finances.",
          "sub": "I-864 là một yếu tố, cùng với tuổi, sức khoẻ và tài chính."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "The sponsor needs a minimum income, based on the current federal poverty guidelines.",
          "sub": "Người bảo trợ phải đạt mức thu nhập tối thiểu theo chuẩn nghèo liên bang hiện hành.",
          "keys": [
            "thu nhập tối thiểu"
          ]
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "The package also asks for an IRS tax transcript and the W-2 from the most recent year.",
          "sub": "Gói hướng dẫn 8/2026 yêu cầu kèm bảng kê thuế IRS và mẫu W-2 năm gần nhất."
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
            "fit": "F",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "G",
            "ms": 900
          },
          {
            "at": "l3",
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
            "text": "⑤ Tuần 3 · Thu nhập chưa đủ",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:week three"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2868,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "phone",
                  "face": "thinking"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "think",
                  "face": "sad"
                }
              ],
              "props": [
                "laptop",
                "money-bag"
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
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:week three",
            "caption": "Tuần 3 · Lan gọi video",
            "icon": "laptop"
          },
          {
            "id": "g-pb",
            "t": "text",
            "text": "Anh Tâm: thu nhập chưa đạt",
            "x": 2028,
            "y": 1250,
            "size": 48,
            "at": "l3:short",
            "color": "coral"
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "A: người đồng bảo trợ",
            "x": 2028,
            "y": 1350,
            "size": 50,
            "at": "l5:joint",
            "hl": [
              {
                "text": "đồng bảo trợ",
                "at": "l5:joint sponsor"
              }
            ]
          },
          {
            "id": "g-as",
            "t": "text",
            "text": "bản bảo trợ riêng + thu nhập, tình trạng hợp pháp",
            "x": 2028,
            "y": 1415,
            "size": 28,
            "at": "l5:separate",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "B: vợ anh ký I-864A",
            "x": 2028,
            "y": 1480,
            "size": 50,
            "at": "l6:wife",
            "hl": [
              {
                "text": "I-864A",
                "at": "l6:form"
              }
            ]
          },
          {
            "id": "g-bs",
            "t": "text",
            "text": "thành viên cùng hộ, có thu nhập, cộng vào",
            "x": 2028,
            "y": 1545,
            "size": 28,
            "at": "l6:household",
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
          "say": "Stop five, week three. Bad news arrives by video call.",
          "sub": "Chặng năm, tuần thứ ba. Tin không vui đến qua cuộc gọi video."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Lan, Ms Hoa's daughter, has been talking to her uncle in America.",
          "sub": "Lan, con gái cô Hoa, vừa nói chuyện với cậu Tâm ở Mỹ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Mom, Uncle Tâm's income is short of the requirement.",
          "sub": "Mẹ ơi, thu nhập của cậu Tâm chưa đạt mức yêu cầu.",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "So my case stops here?",
          "sub": "Vậy hồ sơ của mẹ dừng ở đây sao?",
          "face": "sad"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Not a dead end. Option A: a qualified joint sponsor files a separate affidavit.",
          "sub": "Chưa phải ngõ cụt. Cách A: một người đủ điều kiện làm người đồng bảo trợ, nộp bản bảo trợ riêng.",
          "keys": [
            "người đồng bảo trợ"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Option B: his wife lives in the same household, has income, and signs form I-864A to add it.",
          "sub": "Cách B: vợ anh sống cùng hộ, có thu nhập, ký mẫu I-864A để cộng thu nhập.",
          "keys": [
            "I-864A"
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
            "fit": "G",
            "move": "cut"
          },
          {
            "at": "l1",
            "fit": [
              "g-take"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "G",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "g-resp",
            "t": "text",
            "text": "Người ký nhận trách nhiệm thật",
            "x": 2028,
            "y": 1650,
            "size": 46,
            "at": "l1:real",
            "color": "coral",
            "hl": [
              {
                "text": "trách nhiệm thật",
                "at": "l1:real"
              }
            ]
          },
          {
            "id": "g-take",
            "t": "text",
            "text": "Thiếu thu nhập ≠ ngõ cụt",
            "x": 2028,
            "y": 1740,
            "size": 58,
            "at": "l2:dead end",
            "color": "accent",
            "hl": [
              {
                "text": "≠ ngõ cụt",
                "at": "l2:dead end"
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
          "say": "Both are on the FAQ page. But every signer must understand they take on a real financial duty.",
          "sub": "Trang hỏi đáp nêu cả hai cách; nhưng người ký nào cũng phải hiểu mình nhận trách nhiệm tài chính thật.",
          "keys": [
            "trách nhiệm tài chính thật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Low income isn't a dead end, as long as the signer truly agrees and qualifies.",
          "sub": "Thiếu thu nhập chưa phải ngõ cụt, miễn là người ký thật sự đồng ý và đủ điều kiện.",
          "keys": [
            "chưa phải ngõ cụt"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "I'll ask Uncle Tâm and his wife tonight, and explain it clearly.",
          "sub": "Tối nay con hỏi cậu mợ, giải thích cho rõ.",
          "face": "happy"
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s13",
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
            "text": "⑥ Tuần 3 · Bản dịch",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:translation"
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
                "page-facing-up",
                "fountain-pen"
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
            "at": "l1:translation",
            "caption": "Tuần 3 · tiệm dịch thuật (minh hoạ)",
            "icon": "fountain-pen"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Dũng: ở Hàn Quốc > 1 năm",
            "x": 3996,
            "y": 1250,
            "size": 46,
            "at": "l2:korea"
          },
          {
            "id": "h-ks",
            "t": "text",
            "text": "→ cần lý lịch tư pháp Hàn Quốc (hồ sơ F1 của Dũng)",
            "x": 3996,
            "y": 1315,
            "size": 28,
            "at": "l2:certificate",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "h-r",
            "t": "text",
            "text": "Không phải tiếng Anh / tiếng Việt",
            "x": 3996,
            "y": 1380,
            "size": 44,
            "at": "l4:english"
          },
          {
            "id": "h-r2",
            "t": "text",
            "text": "→ bản dịch có chứng nhận",
            "x": 3996,
            "y": 1450,
            "size": 50,
            "at": "l4:certified",
            "color": "accent",
            "hl": [
              {
                "text": "có chứng nhận",
                "at": "l4:certified"
              }
            ]
          },
          {
            "id": "h-r3",
            "t": "text",
            "text": "Người dịch ký xác nhận",
            "x": 3996,
            "y": 1530,
            "size": 48,
            "at": "l5:signs",
            "hl": [
              {
                "text": "ký xác nhận",
                "at": "l5:signs"
              }
            ]
          },
          {
            "id": "h-r3s",
            "t": "text",
            "text": "bản dịch chính xác, người dịch đủ năng lực",
            "x": 3996,
            "y": 1600,
            "size": 28,
            "at": "l5:accurate",
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
          "say": "Stop six, week three. Dũng has his own NVC list now, and a translation problem.",
          "sub": "Chặng sáu, tuần thứ ba. Dũng giờ cũng có danh sách NVC của mình, và một vụ bản dịch."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I worked in Korea over a year, so I need their police certificate. It's all in Korean!",
          "sub": "Em từng làm ở Hàn Quốc hơn một năm, nên cần lý lịch tư pháp bên đó. Toàn tiếng Hàn!",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Any document not in English, or the official language where you apply, needs a certified translation.",
          "sub": "Giấy không viết bằng tiếng Anh hay ngôn ngữ chính thức nơi nộp hồ sơ thì cần bản dịch có chứng nhận."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "In Ho Chi Minh City, that means anything not in English or Vietnamese gets a certified translation.",
          "sub": "Ở TP.HCM: giấy không bằng tiếng Anh hoặc tiếng Việt thì cần bản dịch có chứng nhận.",
          "keys": [
            "bản dịch có chứng nhận"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The translator signs a statement: the translation is accurate, and they are competent to translate.",
          "sub": "Người dịch ký lời xác nhận: bản dịch chính xác, và mình đủ năng lực dịch.",
          "keys": [
            "ký lời xác nhận"
          ]
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s14",
      "module": "BRK-04",
      "data": {
        "title": "Lý lịch tư pháp Hàn Quốc của Dũng",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Bản tiếng Hàn + bản dịch không chữ ký",
        "right": "Bản dịch tiếng Anh có lời người dịch ký xác nhận",
        "wrongIllus": "page-facing-up",
        "rightIllus": "fountain-pen"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: Korean original, unsigned translation.",
          "sub": "Trước: bản tiếng Hàn, bản dịch không chữ ký."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: an English translation with the translator's signed statement.",
          "sub": "Sau: bản dịch tiếng Anh, có lời người dịch ký xác nhận.",
          "keys": [
            "ký xác nhận"
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
            "fit": "H",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "h-take",
            "t": "text",
            "text": "Kiểm chữ ký trước khi quét",
            "x": 3996,
            "y": 1670,
            "size": 54,
            "at": "l1:scanning",
            "color": "accent",
            "hl": [
              {
                "text": "trước khi quét",
                "at": "l1:before scanning"
              }
            ]
          },
          {
            "id": "h-take2",
            "t": "text",
            "text": "thiếu xác nhận → có thể phải làm lại",
            "x": 3996,
            "y": 1750,
            "size": 30,
            "at": "l1:redoing",
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
          "say": "A translation without that statement may need redoing. Check the translator's signature before scanning.",
          "sub": "Bản dịch thiếu lời xác nhận có thể phải làm lại. Kiểm phần chữ ký người dịch trước khi quét.",
          "keys": [
            "chữ ký người dịch"
          ]
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
            "text": "⑦ Tuần 4 · Giấy bị mất",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:week four"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "think",
                  "face": "sad"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "point"
                }
              ],
              "props": [
                "file-cabinet",
                "magnifying-glass-tilted-left"
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
                  "shot": "E-SHOT-05",
                  "on": "binh",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:week four",
            "caption": "Tuần 4 · lục tủ tìm bản án ly hôn",
            "icon": "file-cabinet"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Bước 1: tra công cụ của NVC",
            "x": 5964,
            "y": 1250,
            "size": 46,
            "at": "l5:first"
          },
          {
            "id": "i-1s",
            "t": "text",
            "text": "hướng dẫn cho Việt Nam: nơi cấp, cách xin lại",
            "x": 5964,
            "y": 1315,
            "size": 28,
            "at": "l5:again",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Bước 2: giải thích bằng văn bản",
            "x": 5964,
            "y": 1380,
            "size": 46,
            "at": "l6:written",
            "color": "accent",
            "hl": [
              {
                "text": "bằng văn bản",
                "at": "l6:written"
              }
            ]
          },
          {
            "id": "i-2s",
            "t": "text",
            "text": "viên chức quyết định ở buổi phỏng vấn",
            "x": 5964,
            "y": 1445,
            "size": 28,
            "at": "l6:officer",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "i-na",
            "t": "text",
            "text": "Ghi “không có” → khỏi quét",
            "x": 5964,
            "y": 1510,
            "size": 44,
            "at": "l7:unavailable"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven, week four. One paper refuses to be found.",
          "sub": "Chặng bảy, tuần thứ tư. Có một tờ giấy nhất định không chịu xuất hiện."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "My divorce decree from the first marriage. Gone! Should I just get one made somewhere?",
          "sub": "Bản án ly hôn cuộc hôn nhân đầu. Mất rồi! Hay nhờ chỗ nào làm đại một tờ?",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Uncle Bình, the neighbour, drops in with his usual calm.",
          "sub": "Bác Bình, hàng xóm, ghé qua với vẻ điềm tĩnh quen thuộc."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Slowly now. Let's check that again.",
          "sub": "Từ từ, mình xem lại đã.",
          "pose": "point"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "First, check the Vietnam guidance in NVC's lookup tool: where it's issued, how to get it again.",
          "sub": "Trước hết, xem hướng dẫn cho Việt Nam trong công cụ tra cứu: nơi cấp và cách xin lại."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Truly impossible? Submit a detailed written explanation. The officer decides at the interview.",
          "sub": "Thật sự không xin được? Nộp bản giải thích chi tiết bằng văn bản; viên chức quyết định ở buổi phỏng vấn.",
          "keys": [
            "giải thích chi tiết bằng văn bản"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "And if your country's guidance lists a paper as unavailable, you don't scan it. Missing papers slow things down.",
          "sub": "Còn giấy được ghi là “không có” trong hướng dẫn của nước bạn thì không cần quét. Thiếu giấy sẽ làm hồ sơ chậm lại."
        }
      ],
      "ref": "p16,p17"
    },
    {
      "id": "s17",
      "module": "BRK-11",
      "data": {
        "title": "3 điều cần nhớ",
        "items": [
          "Không làm giấy giả, giấy mua",
          "Thiếu thì giải thích bằng văn bản",
          "Đổi liên lạc: Public Inquiry Form"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Three: changed your phone or email? Use the Public Inquiry Form.",
          "sub": "Ba: đổi địa chỉ, số điện thoại, email thì báo qua Public Inquiry Form."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Two: missing a paper? Explain in writing.",
          "sub": "Hai: thiếu giấy thì giải thích bằng văn bản."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "One: never a homemade or bought replacement.",
          "sub": "Một: không thay bằng giấy tự làm hay mua ở đâu đó.",
          "keys": [
            "không thay bằng giấy tự làm"
          ]
        }
      ],
      "ref": "p18,p19"
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
          }
        ],
        "items": [
          {
            "id": "i-g28",
            "t": "text",
            "text": "Thêm luật sư: mẫu G-28",
            "x": 5964,
            "y": 1590,
            "size": 40,
            "at": "l1:lawyer"
          },
          {
            "id": "i-wd",
            "t": "text",
            "text": "Rút hồ sơ: văn bản có ký",
            "x": 5964,
            "y": 1660,
            "size": 40,
            "at": "l2:withdrawing"
          },
          {
            "id": "i-take",
            "t": "text",
            "text": "Thiếu thì nói thật, đừng làm giả",
            "x": 5964,
            "y": 1750,
            "size": 48,
            "at": "l3:never",
            "color": "accent",
            "hl": [
              {
                "text": "đừng làm giả",
                "at": "l3:never"
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
          "say": "Adding a lawyer? Send a signed form G-28 through the same channel.",
          "sub": "Muốn thêm luật sư đại diện: nộp mẫu G-28 có chữ ký qua cùng kênh đó."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Withdrawing the case? Send a signed letter with your reasons.",
          "sub": "Muốn rút hồ sơ: gửi văn bản có chữ ký, nêu lý do."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "So never a fake. Missing means explain. Got it.",
          "sub": "Vậy không bao giờ làm giả. Thiếu thì giải thích. Rồi, vậy nha!",
          "face": "happy"
        }
      ],
      "ref": "p19,p18"
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
            "text": "Tối thứ Sáu, tuần 4",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:friday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold",
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
                "open-file-folder",
                "page-facing-up"
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
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:friday",
            "caption": "Tối thứ Sáu, tuần 4 · bìa hồ sơ",
            "icon": "open-file-folder"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Phiếu số 2: bản gốc ✓",
            "x": 7932,
            "y": 1260,
            "size": 52,
            "at": "l2:original",
            "color": "accent",
            "hl": [
              {
                "text": "bản gốc",
                "at": "l2:original"
              }
            ]
          },
          {
            "id": "j-l",
            "t": "text",
            "text": "Danh sách cho từng người",
            "x": 7932,
            "y": 1360,
            "size": 46,
            "at": "l3:list"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Cẩn tắc… nên khỏi áy náy",
            "x": 7932,
            "y": 1490,
            "size": 52,
            "at": "l4:regret",
            "color": "accent",
            "hl": [
              {
                "text": "khỏi áy náy",
                "at": "l4:no regret"
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
          "say": "Friday night, end of week four. Same living room, same sheet of paper.",
          "sub": "Tối thứ Sáu, hết tuần thứ tư. Vẫn phòng khách ấy, vẫn tờ giấy ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Certificate number two. Original, wet signature, seal. For real this time!",
          "sub": "Phiếu số 2. Bản gốc, chữ ký tươi, con dấu. Lần này là thật!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "And a list for each person, by section. Nothing from somewhere shady.",
          "sub": "Còn mẹ có danh sách cho từng người, từng ngăn. Không tờ nào “làm đại”.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Care first, and this time, no regret at all.",
          "sub": "Cẩn tắc, nên lần này chẳng có gì phải áy náy.",
          "keys": [
            "chẳng có gì phải áy náy"
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
      "ref": "p5,p7"
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
            "at": "l1:ceac",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:right type",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:writing",
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
            "x": 5536,
            "y": 20,
            "at": "l1:ceac"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9472,
            "y": 20,
            "at": "l2:right type"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 7504,
            "y": 1110,
            "at": "l3:writing"
          },
          {
            "id": "z-src",
            "t": "text",
            "text": "Bài để tham khảo; quy trình, biểu mẫu, lệ phí có thể thay đổi, làm theo hướng dẫn chính thức của NVC và Tổng Lãnh sự quán Hoa Kỳ. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1780,
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
          "say": "So: pay on CEAC, fill in the online form, and submit the affidavit of support.",
          "sub": "Tóm lại: đóng phí trên CEAC, điền đơn trực tuyến, nộp bản bảo trợ tài chính.",
          "keys": [
            "đóng phí trên CEAC"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Civil documents of the right type, with certified translations when needed.",
          "sub": "Giấy tờ hộ tịch đúng loại, kèm bản dịch có xác nhận khi cần.",
          "keys": [
            "đúng loại"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And a paper you can't get? Explain it in writing.",
          "sub": "Giấy nào không xin được thì giải thích bằng văn bản.",
          "keys": [
            "giải thích bằng văn bản"
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
        "q": "Is an electronic version of the Vietnamese justice record accepted?",
        "options": [
          "Yes, electronic versions are preferred because they arrive much faster",
          "Yes, if you print it in colour on thick paper",
          "No, the package states that electronic versions are not accepted"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "page-facing-up",
        "why": "Gói hướng dẫn 8/2026 ghi rõ bản điện tử không được chấp nhận. Cần bản gốc có chữ ký tươi và con dấu."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Is an electronic version of the Vietnamese justice record accepted?",
          "sub": "Bản điện tử của Phiếu lý lịch tư pháp có được chấp nhận không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Remember what Dũng printed first.",
          "sub": "Nhớ lại bản Dũng in lần đầu."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[14]"
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
          "say": "Right now: make a document list for each person going with you.",
          "sub": "Việc làm ngay: lập danh sách giấy tờ cho từng người đi cùng.",
          "keys": [
            "lập danh sách giấy tờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next lesson: the medical exam and vaccinations. Now, forty questions below!",
          "sub": "Bài sau: khám sức khoẻ và tiêm chủng. Giờ thì, bốn mươi câu hỏi bên dưới!"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-24",
  "notes": "#145 bài MỚI dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-24 (vật neo rồi phân tích): “Phiếu lý lịch tư pháp số 2 · bản gốc, chữ ký tươi, con dấu” (p5) → thư NVC đến, cô Hoa sợ thiếu một tờ (intro) → “Nhưng có một chi tiết: bản điện tử hay bản gốc?” → người ta nghĩ điện tử tiện hơn (p6) → ba nhóm giấy. Dòng thời gian: BỐN TUẦN cô Hoa gom hồ sơ F4 (T2 tuần 1 thư NVC → tuần 1 phí, DS-260 p1–p3 → T4 tuần 1 giấy hộ tịch p4, p8 → tuần 2 lý lịch tư pháp p5, “Khoan đã!” Dũng in bản điện tử p6–p7 → cuối tuần 2 I-864 p9–p10 → tuần 3 thu nhập chưa đủ A/B qua Lan gọi video p11–p12 → tuần 3 bản dịch lý lịch Hàn Quốc của Dũng p13–p15 → tuần 4 bản án ly hôn bị mất, Bác Bình p16–p19 → tối T6 tuần 4 khép vòng). Đổi tên (w145/_series/family-sponsored-immigrants-to-us.md): chị Hoa p11, p17 → cô Hoa (anh trai = anh Tâm, không lên hình; vợ anh Tâm không lên hình); anh Dũng p14 → Dũng (hồ sơ F1 riêng). Tục ngữ: “Cẩn tắc vô áy náy”. BRK: 06 (montage quân sự, bản án p4), 04 (Trước/Sau bản dịch p14), 11 (3 điều cần nhớ p18–p19). Số chỉ lấy từ bài: 16 tuổi, > 6 tháng, ≥ 12 tháng, 2 năm, 18 tuổi, I-864/I-864A, W-2, G-28, DS-260, gói hướng dẫn 8/2026; không ghi lệ phí bằng số. Câu đố questions[14].",
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
