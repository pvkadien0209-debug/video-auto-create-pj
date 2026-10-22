// Kịch bản video W lần 3 (#110) — "Nhân viên mới cần làm gì trong ba tháng đầu?" · chuỗi "Ba tháng đầu ở chỗ làm mới"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "first-three-months-new-job--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "new-employees",
    "slug": "first-three-months-new-job",
    "door": "ky-nang",
    "level": "B1",
    "title": "Nhân viên mới cần làm gì trong ba tháng đầu?",
    "series": "Ba tháng đầu ở chỗ làm mới"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng theo hạt nhân #136 + biến thể #144 (bang-trang-kit): Đét đứng trái + một bảng trắng 10 ô theo ba tháng đầu của Thảo — A mở (Ba tháng đầu, tối nhận thư mời, “Có công mài sắt…”), B câu hỏi chính (ai được giữ lại?) + bản đồ 6 chặng, C ① trước ngày đầu (p1–p3), D ② tuần đầu (p4–p5) + Khoan đã! hoá đơn (p6–p8, toàn màn) + quy tắc hỏi (p6), E ③ tháng đầu luật không viết (p9–p10), BRK-07 rehook, F chuyện cũ của Dũng (p11–p12), G ④ tháng hai góp ý A/B (p13–p15), H ⑤ lỗi, tin nhắn, việc dồn (p16–p18), BRK-03 85% (p19), I ⑥ lương đầu + BHXH (p19, p22), J ⑦ cuối thử việc (p20–p21), BRK-04 Trước/Sau (p23), J khép vòng tối sau đánh giá (p24, p26), tóm tắt lùi xa = danh sách p25. Nhân vật theo w145/_series/new-employees.md: Nhi/Nhung → Thảo; chị phụ trách/chị trưởng nhóm → Cô Hoa; Tâm → Dũng (Dũng kể chuyện hồi ở chỗ cũ, khớp vai ‘chuyên gia ăn trưa’ hiện nay). p23: bỏ chữ ‘tồn kho’ (Thảo ở nhóm nội dung), giữ số ‘một ngày → nửa ngày’. Số: 85% (p19, BLLĐ 2019 Đ26), 60 ngày (p20, Đ25), BHXH 2024 hiệu lực 1/7/2025, hợp đồng từ đủ 1 tháng (p22). Lưu ý luật chung ở END. Câu đố questions[14]. Bản trước (W lần 3, #110): w145/bak/first-three-months-new-job--w01.js.",
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
            "id": "a-3",
            "t": "text",
            "text": "Ba tháng đầu",
            "x": 60,
            "y": 120,
            "size": 130,
            "at": "l1:three",
            "color": "accent",
            "hl": [
              {
                "text": "Ba tháng",
                "at": "l1:months"
              }
            ]
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Qua được thử việc không?",
            "x": 70,
            "y": 310,
            "size": 56,
            "at": "l2:pass"
          },
          {
            "id": "a-best",
            "t": "text",
            "text": "Ta tưởng: phải giỏi nhất ngay?",
            "x": 70,
            "y": 410,
            "size": 50,
            "at": "l3:smartest",
            "color": "muted"
          },
          {
            "id": "a-bestx",
            "t": "strike",
            "over": "a-best",
            "at": "l4:rarely"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Theo bài “Ba tháng đầu ở chỗ làm mới” · nguồn: SHRM (Bauer 2010, Maurer), Bộ luật Lao động 2019, Luật BHXH 2024, MIT Sloan",
            "x": 60,
            "y": 724,
            "size": 24,
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
          "say": "Three months at a new job. One question keeps new people awake at night.",
          "sub": "Ba tháng đầu ở chỗ làm mới. Có một câu hỏi khiến người mới mất ngủ.",
          "keys": [
            "Ba tháng đầu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Will I pass probation?",
          "sub": "Mình có qua được thử việc không?",
          "keys": [
            "qua được thử việc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "We think: only the smartest person survives.",
          "sub": "Ta tưởng: chỉ người giỏi nhất mới trụ lại."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Good news: that is rarely true.",
          "sub": "Tin vui: hiếm khi đúng vậy.",
          "keys": [
            "hiếm khi"
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
            "at": "l2",
            "fit": [
              "a-thao"
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
            "id": "a-thao",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "envelope",
                "notebook"
              ]
            },
            "at": "l1",
            "caption": "Tối nhận thư mời · phòng trọ",
            "icon": "envelope"
          },
          {
            "id": "a-kim",
            "t": "text",
            "text": "“Có công mài sắt…”",
            "x": 60,
            "y": 540,
            "size": 56,
            "at": "l5:iron",
            "color": "accent",
            "hl": [
              {
                "text": "mài sắt",
                "at": "l5:iron"
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
          "say": "Meet Thảo.",
          "sub": "Đây là Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "A job offer! They want me!",
          "sub": "Thư mời nhận việc! Người ta nhận mình rồi!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "What if I don't pass probation? What if they don't keep me?",
          "sub": "Lỡ không qua thử việc thì sao? Lỡ người ta không giữ mình?",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents said: grind iron long enough, and it becomes a needle.",
          "sub": "Ông bà nói: “Có công mài sắt, có ngày nên kim.”",
          "keys": [
            "Có công mài sắt"
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
            "text": "Ai được giữ lại sau thử việc?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:kept",
            "hl": [
              {
                "text": "được giữ lại",
                "at": "l1:kept"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: người giỏi nhất ngày đầu",
            "x": 2028,
            "y": 160,
            "size": 50,
            "at": "l2:not",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:day one"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là người:",
            "x": 2028,
            "y": 240,
            "size": 54,
            "at": "l3:one",
            "color": "accent"
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "① hiểu đúng việc",
            "x": 2058,
            "y": 315,
            "size": 52,
            "at": "l3:understands",
            "hl": [
              {
                "text": "hiểu đúng",
                "at": "l3:understands"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "② hỏi đúng lúc",
            "x": 2058,
            "y": 390,
            "size": 52,
            "at": "l3:asks",
            "hl": [
              {
                "text": "đúng lúc",
                "at": "l3:right time"
              }
            ]
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "③ sửa nhanh khi sai",
            "x": 2848,
            "y": 315,
            "size": 52,
            "at": "l4:fixes"
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "④ tiến bộ từng tuần",
            "x": 2848,
            "y": 390,
            "size": 52,
            "at": "l4:progress",
            "hl": [
              {
                "text": "từng tuần",
                "at": "l4:every week"
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
          "say": "So who actually gets kept after probation?",
          "sub": "Vậy rốt cuộc ai được giữ lại sau thử việc?",
          "keys": [
            "được giữ lại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not the best person on day one.",
          "sub": "Không phải người giỏi nhất ngày đầu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It is the one who understands the job, and asks at the right time.",
          "sub": "Mà là người hiểu đúng việc, và hỏi đúng lúc.",
          "keys": [
            "hiểu đúng việc",
            "hỏi đúng lúc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Who fixes mistakes fast, and lets the boss see progress every week.",
          "sub": "Sửa nhanh khi sai, và để sếp thấy mình tiến bộ từng tuần.",
          "keys": [
            "tiến bộ từng tuần"
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
            "text": "Bản đồ 6 chặng · ba tháng đầu",
            "x": 2028,
            "y": 480,
            "size": 48,
            "at": "l1:map",
            "hl": [
              {
                "text": "6 chặng",
                "at": "l1:six stops"
              }
            ]
          },
          {
            "id": "b-s0",
            "t": "box",
            "x": 2028,
            "y": 580,
            "w": 250,
            "h": 100,
            "at": "l2+0",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-s1",
            "t": "box",
            "x": 2300,
            "y": 580,
            "w": 250,
            "h": 100,
            "at": "l2+420",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-s2",
            "t": "box",
            "x": 2572,
            "y": 580,
            "w": 250,
            "h": 100,
            "at": "l2+840",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-s3",
            "t": "box",
            "x": 2844,
            "y": 580,
            "w": 250,
            "h": 100,
            "at": "l2+1260",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-s4",
            "t": "box",
            "x": 3116,
            "y": 580,
            "w": 250,
            "h": 100,
            "at": "l2+1680",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-s5",
            "t": "box",
            "x": 3388,
            "y": 580,
            "w": 250,
            "h": 100,
            "at": "l2+2100",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "b-st0",
            "t": "text",
            "text": "Trước",
            "x": 2052,
            "y": 600,
            "size": 44,
            "at": "l2+120"
          },
          {
            "id": "b-st1",
            "t": "text",
            "text": "Tuần 1",
            "x": 2324,
            "y": 600,
            "size": 44,
            "at": "l2+540"
          },
          {
            "id": "b-st2",
            "t": "text",
            "text": "Tháng 1",
            "x": 2596,
            "y": 600,
            "size": 44,
            "at": "l2+960"
          },
          {
            "id": "b-st3",
            "t": "text",
            "text": "Tháng 2",
            "x": 2868,
            "y": 600,
            "size": 44,
            "at": "l2+1380"
          },
          {
            "id": "b-st4",
            "t": "text",
            "text": "Lương",
            "x": 3140,
            "y": 600,
            "size": 44,
            "at": "l2+1800"
          },
          {
            "id": "b-st5",
            "t": "text",
            "text": "Đánh giá",
            "x": 3412,
            "y": 600,
            "size": 44,
            "at": "l2+2220"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Here is the map: six stops, in the exact order you will live them.",
          "sub": "Đây là bản đồ: sáu chặng, đúng thứ tự bạn sẽ trải qua.",
          "keys": [
            "sáu chặng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Before day one, week one, month one, month two, first pay, and the review.",
          "sub": "Trước ngày đầu, tuần đầu, tháng đầu, tháng hai, lương đầu, và buổi đánh giá."
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
            "id": "c-t",
            "t": "text",
            "text": "① Trước ngày đầu: đọc thư mời",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:before"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think"
                }
              ],
              "props": [
                "envelope",
                "notebook"
              ]
            },
            "at": "l1:offer",
            "caption": "Trước ngày đầu · đọc thư mời",
            "icon": "envelope"
          },
          {
            "id": "c-env",
            "t": "illus",
            "name": "envelope",
            "x": 3996,
            "y": 150,
            "size": 80,
            "at": "l2:position"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "vị trí · quản lý · giờ làm",
            "x": 4096,
            "y": 165,
            "size": 46,
            "at": "l2:manager"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "thử việc bao lâu · lương thử việc",
            "x": 3996,
            "y": 245,
            "size": 44,
            "at": "l3:how long",
            "hl": [
              {
                "text": "lương thử việc",
                "at": "l3:pay"
              }
            ]
          },
          {
            "id": "c-hr",
            "t": "text",
            "text": "Chưa rõ → hỏi nhân sự trước",
            "x": 3996,
            "y": 325,
            "size": 48,
            "at": "l4:unclear",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi nhân sự trước",
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
          "say": "Stop one: before day one. Thảo reads her offer letter. Twice.",
          "sub": "Chặng một: trước ngày đầu. Thảo đọc thư mời. Đọc hai lần.",
          "keys": [
            "đọc thư mời"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "My position, my direct manager, my working hours.",
          "sub": "Vị trí, quản lý trực tiếp, giờ làm.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "How long is probation? And how much is the pay during probation?",
          "sub": "Thử việc bao lâu? Lương thử việc bao nhiêu?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Anything unclear? Ask HR now, not on the first morning.",
          "sub": "Chỗ nào chưa rõ thì hỏi nhân sự ngay, đừng đợi sáng ngày đầu.",
          "keys": [
            "hỏi nhân sự ngay"
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
            "id": "c-bagi",
            "t": "illus",
            "name": "backpack",
            "x": 3996,
            "y": 410,
            "size": 70,
            "at": "l1:night"
          },
          {
            "id": "c-bag",
            "t": "text",
            "text": "giấy tờ · đường đi · quần áo",
            "x": 4086,
            "y": 420,
            "size": 42,
            "at": "l1:papers"
          },
          {
            "id": "c-bag2",
            "t": "text",
            "text": "sổ ghi · tên người đón",
            "x": 4086,
            "y": 472,
            "size": 42,
            "at": "l1:notebook"
          },
          {
            "id": "c-old",
            "t": "text",
            "text": "Chuyển chỗ: chia tay vui vẻ",
            "x": 3996,
            "y": 570,
            "size": 46,
            "at": "l3:leaving",
            "hl": [
              {
                "text": "chia tay vui vẻ",
                "at": "l3:good terms"
              }
            ]
          },
          {
            "id": "c-cu",
            "t": "text",
            "text": "“Ở công ty cũ em…” → để dành",
            "x": 3996,
            "y": 640,
            "size": 44,
            "at": "l4:save",
            "color": "coral"
          },
          {
            "id": "c-why",
            "t": "text",
            "text": "hiểu vì sao rồi hãy nói",
            "x": 3996,
            "y": 705,
            "size": 36,
            "at": "l4:why",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The night before: papers, a tested route, the right clothes, a notebook, your contact's name.",
          "sub": "Tối hôm trước: giấy tờ, đường đi đã thử, quần áo hợp, sổ ghi, tên người đón.",
          "keys": [
            "Tối hôm trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Leaving an old job? Hand over neatly, part on good terms. Your field is smaller than you think.",
          "sub": "Chuyển từ chỗ cũ? Bàn giao gọn, chia tay vui vẻ. Giới làm nghề nhỏ hơn bạn nghĩ.",
          "keys": [
            "chia tay vui vẻ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And save the line “at my old company we did this”, until you know why here is different.",
          "sub": "Để dành câu “ở công ty cũ em làm thế này” cho lúc đã hiểu vì sao chỗ mới làm khác.",
          "keys": [
            "vì sao chỗ mới làm khác"
          ]
        }
      ],
      "ref": "p2,p3"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Tuần đầu: hiểu, chưa cần nhiều",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:week one"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Hiểu 3 điều:",
            "x": 5964,
            "y": 150,
            "size": 56,
            "at": "l2:three",
            "color": "accent"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "① mình làm cho ai",
            "x": 5994,
            "y": 230,
            "size": 50,
            "at": "l3:work for"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "② việc mình nối với ai",
            "x": 5994,
            "y": 305,
            "size": 50,
            "at": "l3:connects"
          },
          {
            "id": "d-3b",
            "t": "text",
            "text": "③ thế nào là làm tốt",
            "x": 5994,
            "y": 380,
            "size": 50,
            "at": "l3:good work",
            "hl": [
              {
                "text": "làm tốt",
                "at": "l3:good work"
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
          "say": "Stop two: week one. Nobody expects much output yet.",
          "sub": "Chặng hai: tuần đầu. Chưa ai mong bạn làm ra nhiều.",
          "keys": [
            "Chưa ai mong"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your real job this week is to understand three things.",
          "sub": "Việc thật của tuần này là hiểu ba điều."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Who you work for. Whose work yours connects to. And what good work looks like here.",
          "sub": "Mình làm cho ai. Việc mình nối với việc của ai. Và thế nào thì được coi là làm tốt.",
          "keys": [
            "làm tốt"
          ]
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
            "fit": "D",
            "move": "cut"
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
                  "id": "hoa",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ]
            },
            "at": "l1",
            "caption": "Tuần đầu · nhận việc",
            "icon": "clipboard"
          },
          {
            "id": "d-rep",
            "t": "text",
            "text": "Nhắc lại bằng lời mình",
            "x": 5964,
            "y": 480,
            "size": 52,
            "at": "l4:repeat",
            "color": "accent",
            "hl": [
              {
                "text": "Nhắc lại",
                "at": "l4:repeat"
              }
            ]
          },
          {
            "id": "d-dl",
            "t": "text",
            "text": "+ hỏi hạn chót đến giờ",
            "x": 5964,
            "y": 555,
            "size": 48,
            "at": "l4:deadline",
            "hl": [
              {
                "text": "hạn chót",
                "at": "l4:deadline"
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
          "say": "This is Cô Hoa, team leader and Thảo's guide. Warm heart, zero free time.",
          "sub": "Đây là cô Hoa, trưởng nhóm, người hướng dẫn Thảo. Tốt bụng, nhưng bận tối mặt.",
          "keys": [
            "người hướng dẫn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, compare three suppliers for me. By Thursday, okay?",
          "sub": "Thảo, so sánh giúp cô ba nhà cung cấp nhé. Thứ Năm nhé?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "So you need a comparison table of three suppliers, by Thursday afternoon. Is that right?",
          "sub": "Em hiểu là cô cần bảng so sánh ba nhà cung cấp, gửi trước chiều thứ Năm, đúng không ạ?",
          "face": "thinking",
          "keys": [
            "đúng không ạ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Repeat it in your own words, and pin the deadline down.",
          "sub": "Nhắc lại bằng lời của mình, và hỏi rõ hạn chót.",
          "keys": [
            "Nhắc lại bằng lời của mình"
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
      "ref": "p5"
    },
    {
      "id": "s08",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Tuần đầu · nhập hoá đơn",
        "actors": [
          {
            "id": "thao",
            "side": "left",
            "face": "thinking"
          },
          {
            "id": "hoa",
            "side": "right",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Ngại hỏi, tự đoán mã chi phí",
          "why": "Một câu hỏi chưa tới năm phút thành gần hết hoá đơn phải nhập lại.",
          "rule": "Hỏi năm phút, đỡ làm lại năm ngày"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Week one, entering invoices. Which code goes with this cost?",
          "sub": "Tuần đầu, nhập hoá đơn. Loại chi phí này đặt mã nào nhỉ?",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Cô Hoa looks so busy. I'll just guess.",
          "sub": "Cô Hoa bận quá. Thôi, mình tự đoán.",
          "face": "worried",
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
          "say": "By Friday, almost every invoice must be redone.",
          "sub": "Cuối tuần: gần hết hoá đơn phải nhập lại.",
          "keys": [
            "phải nhập lại"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind to Monday!",
          "sub": "Tua lại thứ Hai!",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Cô Hoa, quick question: which code is this?",
          "sub": "Cô ơi, cho em hỏi nhanh: loại này đặt mã nào ạ?",
          "phase": "redo",
          "pose": "explain",
          "to": "hoa"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "hoa",
          "say": "Like this. Under five minutes.",
          "sub": "Thế này này. Chưa tới năm phút.",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Ask for five minutes, save five days of redoing.",
          "sub": "Hỏi năm phút, đỡ làm lại năm ngày.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb",
          "keys": [
            "Hỏi năm phút, đỡ làm lại năm ngày"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
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
            "fit": "D",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": [
              "d-now",
              "d-later"
            ],
            "zoom": 1.1,
            "ms": 800
          }
        ],
        "items": [
          {
            "id": "d-now",
            "t": "text",
            "text": "Hỏi ngay: tiền, khách, dữ liệu…",
            "x": 5964,
            "y": 640,
            "size": 44,
            "at": "l2:money",
            "color": "coral",
            "hl": [
              {
                "text": "Hỏi ngay",
                "at": "l2:at once"
              }
            ]
          },
          {
            "id": "d-later",
            "t": "text",
            "text": "Còn lại: tự tìm, rồi hỏi gom",
            "x": 5964,
            "y": 700,
            "size": 44,
            "at": "l3:everything else",
            "hl": [
              {
                "text": "hỏi gom",
                "at": "l3:once"
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
          "say": "Two fears: asking too much, or getting it wrong.",
          "sub": "Hai nỗi sợ: hỏi nhiều bị coi là kém, không hỏi thì làm sai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Simple rule. Money, clients, data, or hard to undo: ask at once.",
          "sub": "Quy tắc đơn giản. Tiền, khách hàng, dữ liệu, việc khó hoàn tác: hỏi ngay.",
          "keys": [
            "hỏi ngay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Everything else: search first, note what you tried, then ask once.",
          "sub": "Còn lại: tự tìm trước một lúc, ghi đã thử gì, rồi hỏi gom một lần.",
          "keys": [
            "hỏi gom một lần"
          ]
        }
      ],
      "ref": "p6"
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
          },
          {
            "at": "l5",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "E",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Tháng đầu: luật không viết",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:month one",
            "hl": [
              {
                "text": "luật không viết",
                "at": "l3:rules"
              }
            ]
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "explain"
                }
              ]
            },
            "at": "l1:month",
            "caption": "Tháng đầu · phòng họp",
            "icon": "eyes"
          },
          {
            "id": "e-eye",
            "t": "illus",
            "name": "eyes",
            "x": 7932,
            "y": 150,
            "size": 80,
            "at": "l2:meetings"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Họp có đúng giờ không?",
            "x": 8032,
            "y": 160,
            "size": 46,
            "at": "l2:on time"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Email hay nhóm chat?",
            "x": 8032,
            "y": 230,
            "size": 46,
            "at": "l2:email"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Báo cáo ngắn hay dài?",
            "x": 8032,
            "y": 300,
            "size": 46,
            "at": "l2:short"
          },
          {
            "id": "e-c1",
            "t": "text",
            "text": "☐ ai quyết định, ai giúp được",
            "x": 7932,
            "y": 400,
            "size": 44,
            "at": "l4:decides"
          },
          {
            "id": "e-c2",
            "t": "text",
            "text": "☐ kênh trao đổi chính",
            "x": 7932,
            "y": 465,
            "size": 44,
            "at": "l4:channel"
          },
          {
            "id": "e-c3",
            "t": "text",
            "text": "☐ hỏi sếp: sau 3 tháng, mong gì?",
            "x": 7932,
            "y": 530,
            "size": 44,
            "at": "l5:three months",
            "color": "accent",
            "hl": [
              {
                "text": "mong gì",
                "at": "l5:expect"
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
          "say": "Stop three: month one, and its unwritten rules.",
          "sub": "Chặng ba: tháng đầu, và những luật không viết ra."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meetings on time? Email or group chat? Short reports or long?",
          "sub": "Họp đúng giờ không? Email hay nhóm chat? Báo cáo ngắn hay dài?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Watch a few weeks, and the rules show up.",
          "sub": "Quan sát vài tuần, luật sẽ lộ ra.",
          "keys": [
            "luật không viết"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "By month's end: who decides, who can help, which channel matters.",
          "sub": "Hết tháng đầu: biết ai quyết định, ai giúp được, kênh trao đổi chính."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Cô Hoa, after three months, what do you expect me to do well?",
          "sub": "Cô ơi, sau ba tháng, cô mong em làm được những gì ạ?",
          "face": "thinking",
          "keys": [
            "sau ba tháng"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Now the target is no guess.",
          "sub": "Giờ đích đến hết là đoán mò.",
          "keys": [
            "hết là đoán mò"
          ]
        }
      ],
      "ref": "p9,p10"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Giỏi chuyên môn, cắm cúi làm: thế là đủ?",
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
          "say": "Good at your job, head down, no chit-chat. Isn't that enough?",
          "sub": "Giỏi chuyên môn, cắm cúi làm, chẳng chuyện trò. Thế chưa đủ sao?",
          "keys": [
            "Thế chưa đủ sao"
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
            "at": "l5:first",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "③ Tháng đầu: quen người",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:ask"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ]
            },
            "at": "l1",
            "caption": "Giờ ăn trưa · quán cơm",
            "icon": "fork-and-knife-with-plate"
          },
          {
            "id": "f-bento",
            "t": "illus",
            "name": "takeout-box",
            "x": 60,
            "y": 1240,
            "size": 80,
            "at": "l2:alone"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Ăn trưa một mình",
            "x": 160,
            "y": 1250,
            "size": 46,
            "at": "l2:alone+200"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Nhóm chat: im lặng",
            "x": 160,
            "y": 1320,
            "size": 46,
            "at": "l2:chat"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Cần số liệu gấp → ai ưu tiên?",
            "x": 60,
            "y": 1410,
            "size": 42,
            "at": "l4:urgent",
            "color": "coral"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "Việc trễ, dù chuyên môn ổn",
            "x": 60,
            "y": 1480,
            "size": 42,
            "at": "l5:late",
            "color": "coral"
          },
          {
            "id": "f-rule",
            "t": "text",
            "text": "Quen người lúc rảnh,",
            "x": 60,
            "y": 1580,
            "size": 58,
            "at": "l6:know",
            "color": "accent",
            "hl": [
              {
                "text": "lúc rảnh",
                "at": "l6:free"
              }
            ]
          },
          {
            "id": "f-rule2",
            "t": "text",
            "text": "nhờ người lúc cần",
            "x": 60,
            "y": 1660,
            "size": 58,
            "at": "l6:need",
            "color": "accent",
            "hl": [
              {
                "text": "lúc cần",
                "at": "l6:need"
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
          "say": "Ask Dũng, next desk. Lunch expert today. Not always.",
          "sub": "Hỏi Dũng bàn bên. Giờ là chuyên gia ăn trưa. Hồi trước thì không."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "At my old job, month one, I just worked. Lunch alone. Silent in the group chat.",
          "sub": "Hồi ở chỗ cũ, tháng đầu anh chỉ cắm cúi làm. Ăn trưa một mình. Nhóm chat thì im re.",
          "face": "neutral"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Then I needed urgent numbers from the next team. Nobody knew who I was.",
          "sub": "Rồi cần phòng bên gửi số liệu gấp. Chẳng ai biết anh là ai.",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Nobody put me first. Late work, though my skills were fine.",
          "sub": "Không ai ưu tiên. Việc trễ, dù chuyên môn chẳng sao.",
          "face": "sad"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Know people when you are free. Ask them when you need.",
          "sub": "Quen người lúc rảnh, nhờ người lúc cần.",
          "keys": [
            "quen người lúc rảnh, nhờ người lúc cần"
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
            "fit": "F",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "G",
            "ms": 900
          },
          {
            "at": "a1",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "④ Tháng hai: góp ý dày lên",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:month two"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao"
                },
                {
                  "id": "hoa",
                  "pose": "explain"
                }
              ],
              "left": {
                "label": "Cách A: cãi lại",
                "ok": false
              },
              "right": {
                "label": "Cách B: nghe, hỏi lại",
                "ok": true
              }
            },
            "at": "l2:two ways",
            "caption": "Tháng hai · buổi họp",
            "icon": "speech-balloon"
          },
          {
            "id": "g-sign",
            "t": "text",
            "text": "Góp ý nhiều = sếp đang đầu tư",
            "x": 2028,
            "y": 1250,
            "size": 46,
            "at": "l1:investing",
            "hl": [
              {
                "text": "đang đầu tư",
                "at": "l1:investing"
              }
            ]
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "A: “em làm đúng cô dặn mà!”",
            "x": 2028,
            "y": 1340,
            "size": 42,
            "at": "a2:exactly",
            "color": "coral"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "B: “cô cần so mục nào ạ?”",
            "x": 2028,
            "y": 1420,
            "size": 42,
            "at": "b2:which",
            "color": "accent",
            "hl": [
              {
                "text": "mục nào",
                "at": "b2:which parts"
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
          "say": "Stop four: month two. More feedback. Usually, your boss is investing in you.",
          "sub": "Chặng bốn: tháng hai. Góp ý dày lên. Thường là sếp đang đầu tư vào bạn.",
          "keys": [
            "đang đầu tư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two ways to react.",
          "sub": "Hai cách phản ứng."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "hoa",
          "say": "This report has no comparison with last month.",
          "sub": "Báo cáo này thiếu số liệu so với tháng trước.",
          "phase": "a"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "thao",
          "say": "But I did exactly what you told me!",
          "sub": "Em làm đúng như cô dặn mà!",
          "phase": "a",
          "face": "stern"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "hoa",
          "say": "This report has no comparison with last month.",
          "sub": "Báo cáo này thiếu số liệu so với tháng trước.",
          "phase": "b"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "thao",
          "say": "Which parts do you need compared with last month?",
          "sub": "Cô cần so với tháng trước ở những mục nào ạ?",
          "phase": "b",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A: silent all afternoon, awkward next day. B: fixed the same day.",
          "sub": "A: im cả chiều, hôm sau còn ngượng. B: sửa xong trong ngày.",
          "keys": [
            "sửa xong trong ngày"
          ]
        }
      ],
      "ref": "p13,p14"
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
          }
        ],
        "items": [
          {
            "id": "g-pv",
            "t": "text",
            "text": "Giải thích? Gặp riêng sau họp",
            "x": 2028,
            "y": 1510,
            "size": 42,
            "at": "l1:private"
          },
          {
            "id": "g-rule",
            "t": "text",
            "text": "Nghe hết rồi hãy nói,",
            "x": 2028,
            "y": 1610,
            "size": 60,
            "at": "l2:listen",
            "color": "accent",
            "hl": [
              {
                "text": "Nghe hết",
                "at": "l2:listen"
              }
            ]
          },
          {
            "id": "g-rule2",
            "t": "text",
            "text": "sửa xong rồi hãy buồn",
            "x": 2028,
            "y": 1695,
            "size": 60,
            "at": "l2:fix",
            "color": "accent",
            "hl": [
              {
                "text": "sửa xong",
                "at": "l2:fix"
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
          "say": "Want to explain? Do it in private, after the meeting.",
          "sub": "Muốn giải thích? Gặp riêng, sau buổi họp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Listen to the end before you speak. Fix it first, feel sad later.",
          "sub": "Nghe hết rồi hãy nói, sửa xong rồi hãy buồn.",
          "keys": [
            "Nghe hết rồi hãy nói"
          ]
        }
      ],
      "ref": "p14,p15"
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑤ Tháng hai: lỗi, tin, việc dồn",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:month two"
          },
          {
            "id": "h-i1",
            "t": "illus",
            "name": "magnifying-glass-tilted-left",
            "x": 3996,
            "y": 1240,
            "size": 90,
            "at": "l2:mistake"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Lỗi đầu: báo sớm, kèm cách sửa",
            "x": 4106,
            "y": 1260,
            "size": 46,
            "at": "l2:report",
            "hl": [
              {
                "text": "báo sớm",
                "at": "l2:early"
              }
            ]
          },
          {
            "id": "h-i2",
            "t": "illus",
            "name": "envelope",
            "x": 3996,
            "y": 1380,
            "size": 90,
            "at": "l3:messages"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Tin nhắn: chào, cần gì, hạn",
            "x": 4106,
            "y": 1400,
            "size": 46,
            "at": "l3:hello",
            "hl": [
              {
                "text": "hạn",
                "at": "l3:by when"
              }
            ]
          },
          {
            "id": "h-i3",
            "t": "illus",
            "name": "spiral-notepad",
            "x": 3996,
            "y": 1520,
            "size": 90,
            "at": "l4:list"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Việc dồn: một danh sách",
            "x": 4106,
            "y": 1530,
            "size": 46,
            "at": "l4:list+200"
          },
          {
            "id": "h-3b",
            "t": "text",
            "text": "hỏi việc nào trước, trễ báo sớm",
            "x": 4106,
            "y": 1600,
            "size": 42,
            "at": "l4:first"
          },
          {
            "id": "h-rule",
            "t": "text",
            "text": "Sớm một câu, đỡ một trận",
            "x": 3996,
            "y": 1730,
            "size": 58,
            "at": "l6:early",
            "color": "accent",
            "hl": [
              {
                "text": "Sớm một câu",
                "at": "l6:early"
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
          "say": "Stop five: still month two, and three things arrive at once.",
          "sub": "Chặng năm: vẫn tháng hai, ba thứ ập đến cùng lúc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your first mistake: almost everyone has one. Report it early, say what happened, suggest a fix.",
          "sub": "Lỗi đầu tiên, ai cũng có. Báo sớm, nói rõ chuyện gì, đề xuất cách sửa.",
          "keys": [
            "Báo sớm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "More messages: a hello, what you need, and by when.",
          "sub": "Tin nhắn nhiều lên: có lời chào, cần gì, trước khi nào.",
          "keys": [
            "trước khi nào"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "More tasks: one list, ask which comes first, and warn early if late.",
          "sub": "Việc dồn: ghi một danh sách, hỏi việc nào trước, thấy trễ thì báo sớm."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "See the pattern? Early words save big fights.",
          "sub": "Thấy điểm chung chưa? Sớm một câu, đỡ một trận.",
          "keys": [
            "Sớm một câu"
          ]
        }
      ],
      "ref": "p16,p17,p18"
    },
    {
      "id": "s16",
      "module": "BRK-03",
      "data": {
        "value": 85,
        "prefix": "≥ ",
        "suffix": "%",
        "label": "lương thử việc, so với lương của công việc đó",
        "illus": "money-bag"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "After about a month, first pay.",
          "sub": "Khoảng một tháng, lương đầu về."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Probation pay: at least eighty-five percent.",
          "sub": "Lương thử việc: ít nhất 85%.",
          "keys": [
            "ít nhất 85%"
          ]
        }
      ],
      "ref": "p19"
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
            "at": "l3",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑥ Lương đầu: chia cho đủ",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:stop six"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "money-bag",
                "notebook"
              ]
            },
            "at": "l1",
            "caption": "Ngày lương đầu · phòng trọ",
            "icon": "money-bag"
          },
          {
            "id": "i-85",
            "t": "text",
            "text": "≥ 85% lương công việc đó",
            "x": 5964,
            "y": 1250,
            "size": 52,
            "at": "l1:labour code",
            "hl": [
              {
                "text": "≥ 85%",
                "at": "l1:rule"
              }
            ]
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Bộ luật Lao động 2019, Điều 26",
            "x": 5964,
            "y": 1325,
            "size": 26,
            "at": "l1:labour code",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "i-real",
            "t": "text",
            "text": "Ngân sách theo lương thực nhận",
            "x": 5964,
            "y": 1410,
            "size": 48,
            "at": "l2:actually",
            "color": "accent",
            "hl": [
              {
                "text": "thực nhận",
                "at": "l2:actually"
              }
            ]
          },
          {
            "id": "i-big",
            "t": "text",
            "text": "con số “sau này”",
            "x": 5964,
            "y": 1485,
            "size": 44,
            "at": "l2:later",
            "color": "muted"
          },
          {
            "id": "i-bigx",
            "t": "strike",
            "over": "i-big",
            "at": "l2:later+300"
          },
          {
            "id": "i-save",
            "t": "text",
            "text": "Lương về → để riêng một khoản",
            "x": 5964,
            "y": 1560,
            "size": 44,
            "at": "l3:pay"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six. That rule is in the 2019 Labour Code. Your exact amount: offer and contract.",
          "sub": "Chặng sáu. Mức đó theo Bộ luật Lao động 2019. Số cụ thể: thư mời, hợp đồng.",
          "keys": [
            "ít nhất 85%"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Budget on the pay you actually get, not the bigger number later.",
          "sub": "Lập ngân sách theo lương thực nhận, không theo con số sau này.",
          "keys": [
            "thực nhận"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Pay day! First, a small amount set aside.",
          "sub": "Lương về! Để riêng một khoản nhỏ trước đã.",
          "face": "happy"
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
            "fit": "I",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "i-doc",
            "t": "illus",
            "name": "memo",
            "x": 5964,
            "y": 1650,
            "size": 80,
            "at": "l1:contract"
          },
          {
            "id": "i-hd",
            "t": "text",
            "text": "Sau thử việc: tuỳ công ty",
            "x": 6064,
            "y": 1660,
            "size": 40,
            "at": "l1:depend"
          },
          {
            "id": "i-bh",
            "t": "text",
            "text": "BHXH: hợp đồng từ đủ 1 tháng",
            "x": 6064,
            "y": 1720,
            "size": 40,
            "at": "l2:one month",
            "hl": [
              {
                "text": "từ đủ 1 tháng",
                "at": "l2:one month"
              }
            ]
          },
          {
            "id": "i-bhs",
            "t": "text",
            "text": "Luật BHXH 2024, hiệu lực 1/7/2025",
            "x": 6064,
            "y": 1775,
            "size": 26,
            "at": "l2:law",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "i-ask",
            "t": "text",
            "text": "Đóng từ khi nào? Hỏi nhân sự",
            "x": 6784,
            "y": 1780,
            "size": 40,
            "at": "l3:when",
            "color": "accent",
            "hl": [
              {
                "text": "Hỏi nhân sự",
                "at": "l3:ask"
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
          "say": "Contract and pay after probation depend on the company.",
          "sub": "Hợp đồng, lương sau thử việc: tuỳ công ty, tuỳ hợp đồng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Social insurance is set by law: contracts of one month or more must join.",
          "sub": "Bảo hiểm xã hội do luật định: hợp đồng từ đủ một tháng phải tham gia.",
          "keys": [
            "từ đủ một tháng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Probation covered? Depends on your papers. Ask HR when it starts, and read before you sign.",
          "sub": "Thử việc đóng chưa? Tuỳ giấy tờ. Hỏi nhân sự đóng từ khi nào, đọc kỹ trước khi ký.",
          "keys": [
            "Hỏi nhân sự"
          ]
        }
      ],
      "ref": "p22"
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
            "at": "l4",
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
            "text": "⑦ Cuối thử việc: đừng đợi",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:last"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right"
                }
              ],
              "props": [
                "notebook"
              ]
            },
            "at": "l3:halfway",
            "caption": "Giữa thời gian thử việc",
            "icon": "spiral-calendar"
          },
          {
            "id": "j-60",
            "t": "text",
            "text": "Cao đẳng trở lên: ≤ 60 ngày",
            "x": 7932,
            "y": 1250,
            "size": 46,
            "at": "l1:sixty",
            "hl": [
              {
                "text": "≤ 60 ngày",
                "at": "l1:sixty days"
              }
            ]
          },
          {
            "id": "j-60s",
            "t": "text",
            "text": "Bộ luật Lao động 2019, Điều 25",
            "x": 7932,
            "y": 1310,
            "size": 26,
            "at": "l1:sixty",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "j-m2",
            "t": "text",
            "text": "→ đánh giá: cuối tháng hai",
            "x": 7932,
            "y": 1370,
            "size": 44,
            "at": "l1:month two"
          },
          {
            "id": "j-half",
            "t": "text",
            "text": "Giữa chừng: xin nhận xét",
            "x": 7932,
            "y": 1460,
            "size": 52,
            "at": "l3:halfway",
            "color": "accent",
            "hl": [
              {
                "text": "xin nhận xét",
                "at": "l3:short talk"
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
          "say": "Last stop. Jobs needing college or higher: probation of sixty days at most, so the review lands near month two's end.",
          "sub": "Chặng cuối. Việc cần cao đẳng trở lên: thử việc không quá 60 ngày, nên đánh giá rơi vào cuối tháng hai.",
          "keys": [
            "không quá 60 ngày"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Check your contract, and don't wait. Halfway, ask for a short talk.",
          "sub": "Xem hợp đồng, và đừng đợi. Giữa chừng, xin một buổi trao đổi ngắn.",
          "keys": [
            "xin một buổi trao đổi ngắn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Cô Hoa, where am I doing well, and what should I improve?",
          "sub": "Cô ơi, em đang ổn ở đâu, và cần cải thiện gì để đạt yêu cầu ạ?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And from week one, a few lines weekly: tasks, results, lessons.",
          "sub": "Và từ tuần đầu, mỗi tuần vài dòng: làm gì, kết quả, học được gì.",
          "keys": [
            "mỗi tuần vài dòng"
          ]
        }
      ],
      "ref": "p20,p21"
    },
    {
      "id": "s20",
      "module": "BRK-04",
      "data": {
        "title": "“Em thấy mình đã đóng góp được gì?”",
        "wrong": "“Em làm hết việc được giao ạ.”",
        "right": "“Báo cáo tuần: một ngày còn nửa ngày, thêm hội chợ.”",
        "wrongIllus": "neutral-face",
        "rightIllus": "notebook",
        "labels": [
          "Trước",
          "Sau"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: I did all my tasks.",
          "sub": "Trước: “Em làm hết việc ạ.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: weekly report, one day cut to half, plus the fair.",
          "sub": "Sau: báo cáo tuần, một ngày rút còn nửa, thêm hội chợ.",
          "keys": [
            "một ngày rút còn nửa"
          ]
        }
      ],
      "ref": "p23"
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
            "at": "l2",
            "fit": [
              "j-v2"
            ],
            "zoom": 1.35,
            "ms": 800
          },
          {
            "at": "l5",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-rule",
            "t": "text",
            "text": "Làm mỗi tuần, ghi mỗi tuần",
            "x": 7932,
            "y": 1560,
            "size": 58,
            "at": "l1:work",
            "color": "accent",
            "hl": [
              {
                "text": "ghi mỗi tuần",
                "at": "l1:write"
              }
            ]
          },
          {
            "id": "j-v2",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think"
                }
              ],
              "props": [
                "envelope",
                "notebook"
              ]
            },
            "at": "l2",
            "caption": "Tối sau buổi đánh giá · phòng trọ",
            "icon": "crescent-moon"
          },
          {
            "id": "j-fit",
            "t": "text",
            "text": "Không hợp ≠ thất bại",
            "x": 7932,
            "y": 1660,
            "size": 50,
            "at": "l4:fit",
            "hl": [
              {
                "text": "≠ thất bại",
                "at": "l4:no failure"
              }
            ]
          },
          {
            "id": "j-kim",
            "t": "text",
            "text": "Ba tháng mài sắt… kim đây rồi",
            "x": 7932,
            "y": 1750,
            "size": 50,
            "at": "l5:needle",
            "color": "accent",
            "hl": [
              {
                "text": "kim đây rồi",
                "at": "l5:needle"
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
          "say": "The first shows nothing. The second has notes behind it. Work weekly, write weekly.",
          "sub": "Câu trước chẳng cho thấy gì. Câu sau có sổ đứng sau. Làm mỗi tuần, ghi mỗi tuần.",
          "keys": [
            "Làm mỗi tuần, ghi mỗi tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Same room as the offer night. Same Thảo, three months wiser.",
          "sub": "Vẫn căn phòng tối nhận thư mời. Vẫn Thảo, khôn thêm ba tháng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "They kept me. And honestly, I chose them too.",
          "sub": "Người ta giữ mình. Mà nói thật, mình cũng chọn họ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not a fit? No failure. Probation tests both sides. Talk honestly, take the lessons along.",
          "sub": "Không hợp? Không phải thất bại. Thử việc để hai bên tìm hiểu nhau. Nói thẳng, mang bài học đi tiếp.",
          "keys": [
            "không phải thất bại"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Grind iron long enough, and there's your needle.",
          "sub": "Có công mài sắt… kim đây rồi.",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "tich-tac-dai"
        }
      ],
      "ref": "p23,p24,p26"
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
            "at": "l2",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "J",
            "zoom": 0.8
          },
          {
            "at": "l5:end",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 7464,
            "y": 30,
            "at": "l2"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1560,
            "y": 1120,
            "at": "l3"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5496,
            "y": 1120,
            "at": "l4"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 9432,
            "y": 1120,
            "at": "l5"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Step back: three months, one list to save.",
          "sub": "Lùi lại: ba tháng, một danh sách để lưu.",
          "keys": [
            "một danh sách để lưu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Week one: understand the job, the people, and what good means.",
          "sub": "Tuần đầu: hiểu việc, hiểu người, hiểu thế nào là làm tốt.",
          "keys": [
            "hiểu việc, hiểu người"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Month one: get to know people, and the team's channels.",
          "sub": "Tháng đầu: quen người, quen kênh trao đổi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Month two: feedback, mistakes, messages, priorities, first pay.",
          "sub": "Tháng hai: góp ý, sửa lỗi, tin nhắn gọn, sắp việc, chia lương đầu."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Before probation ends: assess yourself, ask for comments, prepare.",
          "sub": "Trước khi hết thử việc: tự đánh giá, xin nhận xét, chuẩn bị.",
          "keys": [
            "xin nhận xét"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p25"
    },
    {
      "id": "s23",
      "module": "QUIZ-01",
      "ref": "questions[14]",
      "data": {
        "q": "You make your first real mistake at work, what should you do?",
        "options": [
          "Hide it and fix it quietly, hoping nobody notices before the end of probation",
          "Report it early, explain what happened, and suggest a way to fix it",
          "Blame the unclear instructions first, so your manager knows it was not your fault"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "warning",
        "why": "Báo sớm kèm cách sửa cho thấy bạn có trách nhiệm; lỗi thường còn nhỏ lúc mới phát hiện."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You make your first real mistake at work, what should you do?",
          "sub": "Bạn mắc lỗi thật sự đầu tiên ở chỗ làm, bạn nên làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Report it early, explain what happened, and suggest a way to fix it.",
          "sub": "Báo sớm, nói rõ chuyện gì xảy ra và đề xuất cách sửa."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Reporting early shows responsibility, and the mistake is usually still small.",
          "sub": "Báo sớm cho thấy bạn có trách nhiệm, lỗi thường còn nhỏ."
        }
      ],
      "beats": {
        "after": 800
      }
    },
    {
      "id": "s24",
      "module": "END-05",
      "data": {
        "text": "Hôm nay: mở “Nhật ký ba tháng”",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, open a three-month diary: who you work for, your first task, what good means.",
          "sub": "Hôm nay mở “Nhật ký ba tháng”: làm cho ai, việc đầu là gì, thế nào là làm tốt.",
          "face": "laugh",
          "keys": [
            "Nhật ký ba tháng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then try forty questions below. Law points are a summary; check your own case with HR.",
          "sub": "Rồi thử bốn mươi câu bên dưới. Phần luật chỉ là tóm tắt; trường hợp của bạn, hỏi nhân sự."
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
