// Kịch bản video W lần 3 (#110) — "Cần chuẩn bị những gì trước khi vào đại học xa nhà?" · chuỗi "Chuẩn bị vào đại học xa nhà"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "prepare-before-university-away-from-home--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "first-year-students-living-away",
    "slug": "prepare-before-university-away-from-home",
    "door": "ky-nang",
    "level": "B1",
    "title": "Cần chuẩn bị những gì trước khi vào đại học xa nhà?",
    "series": "Chuẩn bị vào đại học xa nhà"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô theo HÀNH TRÌNH của Dũng (tối nhận giấy báo ≈ 2 tháng trước → bàn tiền → 1 tháng trước → tuần cuối → ngày lên thành phố → tuần nhập học → tuần đầu → cuối tháng đầu). Nhân vật theo w145/_series/first-year-students-living-away.md: Dũng (gộp Hà p4, Khoa p18), Bác Bình (bố, p7, p9), Lan (Vy p24), chị Thảo (cô ở văn phòng khoa p24, chỉ nói câu của bài). Cảnh ngắt nhịp: BRK-07 s09 (rehook chỗ ở), DLG s12 (“cứ ở rồi tính”, p13–p14), BRK-04 s16 (ba lô dưới chân / giấy tờ sát người, p18–p19), BRK-06 s19 (chiêu lừa p22). Bài không có số liệu; ‘5 chặng’ là năm mốc của bài. Câu “Có con số thì dễ nói”, “Tối Chủ nhật gọi về” là lời trung lập dựng theo p7, p26. Khép vòng: “Đi một ngày đàng, học một sàng khôn” (sàng đầy lo → bớt lo). Câu đố giữ questions[32]. Bản cũ (W lần 3, #110): w145/bak/prepare-before-university-away-from-home--w01.js.",
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
            "id": "a-num",
            "t": "text",
            "text": "5 chặng",
            "x": 60,
            "y": 120,
            "size": 150,
            "at": "l1:five",
            "color": "accent",
            "hl": [
              {
                "text": "5 chặng",
                "at": "l1:stops"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "giấy báo → tháng đầu yên ổn",
            "x": 70,
            "y": 330,
            "size": 54,
            "at": "l1:letter"
          },
          {
            "id": "a-all",
            "t": "text",
            "text": "Ta tưởng: lo hết trong một tối?",
            "x": 70,
            "y": 430,
            "size": 52,
            "at": "l2:everything",
            "color": "muted"
          },
          {
            "id": "a-allx",
            "t": "strike",
            "over": "a-all",
            "at": "l2:night+300"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Five stops between an admission letter and a calm first month away from home.",
          "sub": "Năm chặng, từ tờ giấy báo nhập học đến một tháng đầu xa nhà yên ổn.",
          "keys": [
            "Năm chặng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet most of us try to worry about everything on the same night.",
          "sub": "Vậy mà ta hay lo hết mọi thứ trong cùng một tối.",
          "keys": [
            "lo hết mọi thứ"
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
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up",
                "party-popper"
              ]
            },
            "at": "l1",
            "caption": "Tối nhận giấy báo · ở quê",
            "icon": "page-facing-up"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Ở đâu? Ăn gì? Ai nấu?",
            "x": 900,
            "y": 690,
            "size": 50,
            "at": "l3:where",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Đi một ngày đàng,",
            "x": 60,
            "y": 520,
            "size": 50,
            "at": "l4:travel",
            "color": "accent"
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "học một sàng khôn”",
            "x": 100,
            "y": 585,
            "size": 50,
            "at": "l4:gain",
            "color": "accent",
            "hl": [
              {
                "text": "sàng khôn",
                "at": "l4:basket"
              }
            ]
          },
          {
            "id": "a-lo",
            "t": "text",
            "text": "Chưa đi, sàng đã đầy… lo",
            "x": 60,
            "y": 670,
            "size": 48,
            "at": "l5:worries",
            "hl": [
              {
                "text": "đầy… lo",
                "at": "l5:worries"
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
          "say": "Meet Dũng.",
          "sub": "Đây là Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Country boy, admission letter in hand, about to study far from home.",
          "sub": "Chàng trai ở quê, tay cầm giấy báo nhập học, sắp đi học xa nhà.",
          "keys": [
            "giấy báo nhập học"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "I got in! But where will I live? What will I eat? Who cooks?",
          "sub": "Đỗ rồi! Mà ở đâu? Ăn gì? Ai nấu?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Grandparents say: travel one day, gain a basket of wisdom.",
          "sub": "Ông bà dặn: “Đi một ngày đàng, học một sàng khôn.”",
          "keys": [
            "học một sàng khôn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Dũng hasn't left, and his basket's already full of worries.",
          "sub": "Dũng chưa đi bước nào, sàng đã đầy... lo.",
          "keys": [
            "đầy... lo"
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
            "text": "Chuẩn bị gì, vào lúc nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:prepare",
            "hl": [
              {
                "text": "vào lúc nào",
                "at": "l1:when"
              }
            ]
          },
          {
            "id": "b-good",
            "t": "text",
            "text": "Không phải lo tất cả cùng lúc",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:everything",
            "hl": [
              {
                "text": "cùng lúc",
                "at": "l2:once"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: một danh sách khổng lồ",
            "x": 2028,
            "y": 260,
            "size": 50,
            "at": "l3:giant",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:right job"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: đúng việc, đúng lúc",
            "x": 2028,
            "y": 345,
            "size": 60,
            "at": "l3:right job",
            "color": "accent",
            "hl": [
              {
                "text": "đúng việc, đúng lúc",
                "at": "l3:right time"
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
          "say": "So what should you prepare, and when?",
          "sub": "Vậy cần chuẩn bị gì, và vào lúc nào?",
          "keys": [
            "vào lúc nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Good news: not everything at once.",
          "sub": "Tin vui: không phải lo tất cả cùng lúc.",
          "keys": [
            "không phải lo tất cả cùng lúc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not one giant to-do list. The right job at the right time.",
          "sub": "Không phải một danh sách khổng lồ, mà là đúng việc, đúng lúc.",
          "keys": [
            "đúng việc, đúng lúc"
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
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 450,
            "w": 300,
            "h": 86,
            "at": "l1:two months",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2358,
            "y": 450,
            "w": 300,
            "h": 86,
            "at": "l1:one month",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2688,
            "y": 450,
            "w": 300,
            "h": 86,
            "at": "l2:last week",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 3018,
            "y": 450,
            "w": 300,
            "h": 86,
            "at": "l2:enrolment",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3348,
            "y": 450,
            "w": 300,
            "h": 86,
            "at": "l2:first month",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "2 tháng",
            "x": 2052,
            "y": 462,
            "size": 46,
            "at": "l1:two months+200"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "1 tháng",
            "x": 2382,
            "y": 462,
            "size": 46,
            "at": "l1:one month+200"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Tuần cuối",
            "x": 2712,
            "y": 462,
            "size": 46,
            "at": "l2:last week+200"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Nhập học",
            "x": 3042,
            "y": 462,
            "size": 46,
            "at": "l2:enrolment+200"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Tháng đầu",
            "x": 3372,
            "y": 462,
            "size": 46,
            "at": "l2:first month+200"
          },
          {
            "id": "b-ds0",
            "t": "text",
            "text": "giấy tờ, tiền",
            "x": 2038,
            "y": 548,
            "size": 34,
            "at": "l1:two months+500",
            "color": "muted"
          },
          {
            "id": "b-ds1",
            "t": "text",
            "text": "chỗ ở, cách sống",
            "x": 2368,
            "y": 548,
            "size": 34,
            "at": "l1:one month+500",
            "color": "muted"
          },
          {
            "id": "b-ds2",
            "t": "text",
            "text": "hành lý",
            "x": 2698,
            "y": 548,
            "size": 34,
            "at": "l2:last week+500",
            "color": "muted"
          },
          {
            "id": "b-ds3",
            "t": "text",
            "text": "làm quen trường",
            "x": 3028,
            "y": 548,
            "size": 34,
            "at": "l2:enrolment+500",
            "color": "muted"
          },
          {
            "id": "b-ds4",
            "t": "text",
            "text": "nhịp sống mới",
            "x": 3358,
            "y": 548,
            "size": 34,
            "at": "l2:first month+500",
            "color": "muted"
          },
          {
            "id": "b-map",
            "t": "text",
            "text": "Bản đồ của cả chuỗi",
            "x": 2028,
            "y": 640,
            "size": 54,
            "at": "l3:map",
            "hl": [
              {
                "text": "cả chuỗi",
                "at": "l3:series"
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
          "say": "Two months before: papers, money. One month before: where and how to live.",
          "sub": "Hai tháng trước: giấy tờ, tiền. Một tháng trước: chỗ ở, cách sống."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Last week: luggage. Enrolment week: the school. First month: a new rhythm.",
          "sub": "Tuần cuối: hành lý. Tuần nhập học: làm quen trường. Tháng đầu: nhịp sống mới."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The map of the whole series. Follow Dũng, and bring snacks.",
          "sub": "Đây là bản đồ của cả chuỗi. Cùng theo Dũng nhé, mang bim bim theo.",
          "keys": [
            "bản đồ của cả chuỗi"
          ]
        }
      ],
      "ref": "intro"
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
            "text": "① 2 tháng trước · Giấy báo",
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
                  "id": "dung",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "page-facing-up",
                "spiral-calendar"
              ]
            },
            "at": "l1:reads",
            "caption": "Tối nhận giấy báo",
            "icon": "page-facing-up"
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 170,
            "w": 46,
            "h": 46,
            "at": "l2:confirm",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 152,
            "size": 58,
            "at": "l2:confirm+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Hạn xác nhận nhập học",
            "x": 4064,
            "y": 160,
            "size": 44,
            "at": "l2:confirm+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 242,
            "w": 46,
            "h": 46,
            "at": "l2:fees",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 224,
            "size": 58,
            "at": "l2:fees+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Hạn nộp học phí",
            "x": 4064,
            "y": 232,
            "size": 44,
            "at": "l2:fees+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 314,
            "w": 46,
            "h": 46,
            "at": "l2:papers",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 296,
            "size": 58,
            "at": "l2:papers+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Danh sách giấy tờ",
            "x": 4064,
            "y": 304,
            "size": 44,
            "at": "l2:papers+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 386,
            "w": 46,
            "h": 46,
            "at": "l2:arrive",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 368,
            "size": 58,
            "at": "l2:arrive+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Ngày có mặt",
            "x": 4064,
            "y": 376,
            "size": 44,
            "at": "l2:arrive+200"
          },
          {
            "id": "c-cal",
            "t": "illus",
            "name": "alarm-clock",
            "x": 3996,
            "y": 465,
            "size": 80,
            "at": "l3:calendar"
          },
          {
            "id": "c-rem",
            "t": "text",
            "text": "→ lịch điện thoại, nhắc trước",
            "x": 4096,
            "y": 478,
            "size": 46,
            "at": "l3:calendar+200",
            "color": "accent",
            "hl": [
              {
                "text": "nhắc trước",
                "at": "l3:reminder"
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
          "say": "Stop one: letter night. Dũng reads every line, the school website too.",
          "sub": "Chặng một: tối nhận giấy báo. Dũng đọc kỹ giấy báo và trang của trường, từng dòng.",
          "keys": [
            "đọc kỹ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Confirm by this date, fees by that one, these papers, arrive on this day...",
          "sub": "Hạn xác nhận ngày này, học phí ngày kia, giấy tờ này, ngày có mặt...",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Every date goes into his phone calendar, with a reminder a few days early.",
          "sub": "Mọi mốc ghi vào lịch điện thoại, đặt nhắc trước vài ngày.",
          "keys": [
            "đặt nhắc trước vài ngày"
          ]
        }
      ],
      "ref": "p1,p4"
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
          }
        ],
        "items": [
          {
            "id": "c-ppr",
            "t": "text",
            "text": "Giấy tờ: chụp hết, gửi bố mẹ",
            "x": 3996,
            "y": 575,
            "size": 46,
            "at": "l1:ID",
            "hl": [
              {
                "text": "gửi bố mẹ",
                "at": "l1:send"
              }
            ]
          },
          {
            "id": "c-ktx",
            "t": "text",
            "text": "KTX: hỏi sớm, giữ 1 lựa chọn",
            "x": 4836,
            "y": 690,
            "size": 46,
            "at": "l3:dorm",
            "color": "coral",
            "hl": [
              {
                "text": "hỏi sớm",
                "at": "l3:ask"
              }
            ]
          },
          {
            "id": "c-rule",
            "t": "text",
            "text": "Đọc ngay, ghi ngay",
            "x": 3996,
            "y": 665,
            "size": 62,
            "at": "l4:read",
            "color": "accent",
            "hl": [
              {
                "text": "Đọc ngay, ghi ngay",
                "at": "l4:now"
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
          "say": "ID, letter, school documents, photos: snap each into a phone folder, send copies to his parents.",
          "sub": "Tuỳ thân, giấy báo, giấy tờ học tập, ảnh thẻ: chụp vào thư mục riêng trong máy, gửi bố mẹ một bản.",
          "keys": [
            "gửi bố mẹ một bản"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The dorm deadline comes first. Dorms fill early, so ask anyway: one more option.",
          "sub": "Hạn ký túc xá đến sớm nhất. Ký túc xá hết sớm: chưa chắc ở cũng cứ hỏi, giữ thêm lựa chọn.",
          "keys": [
            "cứ hỏi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Read the letter now, write the deadlines now.",
          "sub": "Giấy báo đọc ngay, hạn chót ghi ngay.",
          "keys": [
            "đọc ngay",
            "ghi ngay"
          ]
        }
      ],
      "ref": "p2,p3,p5"
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
            "at": "l3",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "D",
            "ms": 700
          },
          {
            "at": "l6",
            "fit": [
              "d-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l6:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 2 tháng trước · Bàn tiền",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:money talk"
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
                  "pose": "hold"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "money-bag"
              ]
            },
            "at": "l1:money talk",
            "caption": "Cùng tuần · ở nhà",
            "icon": "money-bag"
          },
          {
            "id": "d-q",
            "t": "text",
            "text": "“Con tính sơ… bố xem giúp con?”",
            "x": 5964,
            "y": 170,
            "size": 46,
            "at": "l3:roughly",
            "color": "accent"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Con số cụ thể → bớt ngại",
            "x": 5964,
            "y": 260,
            "size": 52,
            "at": "l5:real numbers",
            "hl": [
              {
                "text": "bớt ngại",
                "at": "l5:awkward"
              }
            ]
          },
          {
            "id": "d-call",
            "t": "text",
            "text": "Thiếu thì gọi về, không trách",
            "x": 6804,
            "y": 690,
            "size": 46,
            "at": "l6:call home",
            "color": "accent",
            "hl": [
              {
                "text": "không trách",
                "at": "l6:scolding"
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
          "say": "Stop two: the money talk. Dũng would rather wash dishes.",
          "sub": "Chặng hai: chuyện tiền nong. Dũng thà đi rửa bát còn hơn.",
          "keys": [
            "chuyện tiền nong"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Bác Bình, Dũng's dad. Few words, many sighs.",
          "sub": "Còn đây là bác Bình, bố Dũng. Ít lời, nhiều tiếng thở dài.",
          "keys": [
            "bác Bình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Dad, I've roughly added up rent, food and transport. Does this look reasonable?",
          "sub": "Bố ơi, con tính sơ tiền phòng, tiền ăn, tiền đi lại thế này, bố xem giúp con có hợp lý không ạ?",
          "pose": "give"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Real numbers make it less awkward.",
          "sub": "Con số cụ thể giúp câu chuyện bớt ngại.",
          "keys": [
            "bớt ngại"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "binh",
          "say": "And if you run short, call home. No scolding.",
          "sub": "Thiếu thì cứ gọi về. Bố không trách.",
          "pose": "explain"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p6,p7,p9"
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
            "id": "d-3",
            "t": "text",
            "text": "Thống nhất 3 điều:",
            "x": 5964,
            "y": 360,
            "size": 50,
            "at": "l1:three",
            "hl": [
              {
                "text": "3 điều",
                "at": "l1:three"
              }
            ]
          },
          {
            "id": "d-31",
            "t": "text",
            "text": "• mỗi tháng bao nhiêu, ngày nào",
            "x": 5964,
            "y": 430,
            "size": 44,
            "at": "l1:how much"
          },
          {
            "id": "d-32",
            "t": "text",
            "text": "• khoản bố mẹ trả riêng",
            "x": 5964,
            "y": 490,
            "size": 44,
            "at": "l1:separately"
          },
          {
            "id": "d-33",
            "t": "text",
            "text": "• học phí, tiền cọc…",
            "x": 5964,
            "y": 550,
            "size": 44,
            "at": "l1:separately+800",
            "color": "muted"
          },
          {
            "id": "d-ph",
            "t": "text",
            "text": "Phụ huynh: tháng đầu thường tốn hơn",
            "x": 5964,
            "y": 635,
            "size": 46,
            "at": "l4:month one",
            "color": "coral",
            "hl": [
              {
                "text": "tốn hơn",
                "at": "l4:costs more"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Chia khoản, ghi chép: bài “Quản lý tiền bố mẹ gửi hằng tháng”",
            "x": 5964,
            "y": 718,
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
          "say": "Agree on three things: how much each month, which day, and which costs your parents pay separately.",
          "sub": "Thống nhất ba điều: mỗi tháng bao nhiêu, gửi ngày nào, khoản nào bố mẹ trả riêng như học phí, tiền cọc.",
          "keys": [
            "trả riêng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Parents, note: month one usually costs more. Look at the budget together.",
          "sub": "Phụ huynh lưu ý: tháng đầu thường tốn hơn. Hãy cùng con xem bảng chi.",
          "keys": [
            "tháng đầu thường tốn hơn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And say it out loud, like Bác Bình: no scolding. Then nobody hides an empty wallet.",
          "sub": "Và nói rõ như bác Bình: thiếu thì gọi về, không trách. Để con không giấu chuyện hết tiền.",
          "keys": [
            "không giấu chuyện hết tiền"
          ]
        }
      ],
      "ref": "p6,p8,p9"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Tiền đã bàn xong. Nhưng ngủ ở đâu?",
        "illus": "house"
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
          "say": "Money's sorted. But where will Dũng sleep?",
          "sub": "Tiền đã bàn xong. Nhưng Dũng ngủ ở đâu?"
        }
      ],
      "ref": "p10"
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
            "text": "③ 1 tháng trước · Chỗ ở",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:one month"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "house",
                "cooked-rice"
              ]
            },
            "at": "l1:biggest",
            "caption": "1 tháng trước · lướt tin phòng",
            "icon": "house"
          },
          {
            "id": "e-ktx",
            "t": "text",
            "text": "Không vào được KTX → thuê trọ",
            "x": 7932,
            "y": 170,
            "size": 48,
            "at": "l2:dorm"
          },
          {
            "id": "e-link",
            "t": "text",
            "text": "Đọc bài thuê trọ trước đã",
            "x": 7932,
            "y": 250,
            "size": 48,
            "at": "l3:visiting",
            "color": "accent",
            "hl": [
              {
                "text": "trước đã",
                "at": "l3:before"
              }
            ]
          },
          {
            "id": "e-cook",
            "t": "illus",
            "name": "pot-of-food",
            "x": 7932,
            "y": 330,
            "size": 90,
            "at": "l4:cook"
          },
          {
            "id": "e-dish",
            "t": "text",
            "text": "Trứng · rau · canh · nồi cơm",
            "x": 8042,
            "y": 350,
            "size": 50,
            "at": "l4:eggs"
          },
          {
            "id": "e-mi",
            "t": "text",
            "text": "Mì gói",
            "x": 8042,
            "y": 430,
            "size": 48,
            "at": "l4:noodles",
            "color": "muted"
          },
          {
            "id": "e-mix",
            "t": "strike",
            "over": "e-mi",
            "at": "l4:count"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three: one month before. The biggest job here is a place to live.",
          "sub": "Chặng ba: một tháng trước. Việc lớn nhất chặng này là chỗ ở.",
          "keys": [
            "chỗ ở"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "No dorm place. Rent, then. Ooh, cheap and pretty!",
          "sub": "Không vào được ký túc xá. Vậy thuê trọ. Ơ, rẻ mà đẹp ghê!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Easy, tiger. Before visiting rooms, read the lesson on renting a safe room.",
          "sub": "Bình tĩnh. Trước khi đi xem phòng đầu tiên, đọc bài “Cách tìm và thuê phòng trọ an toàn cho tân sinh viên”.",
          "keys": [
            "đi xem phòng đầu tiên"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Also, cook with Mum a few times: eggs, greens, soup, rice. Instant noodles don't count.",
          "sub": "Tranh thủ vào bếp cùng mẹ vài buổi: trứng, rau, canh, nồi cơm. Mì gói không tính.",
          "keys": [
            "Mì gói không tính"
          ]
        }
      ],
      "ref": "p10,p12"
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
          }
        ],
        "items": [
          {
            "id": "e-3",
            "t": "text",
            "text": "Ở ghép: giờ giấc · tiền · việc nhà",
            "x": 7932,
            "y": 540,
            "size": 46,
            "at": "l1:share",
            "hl": [
              {
                "text": "giờ giấc",
                "at": "l1:sleep"
              }
            ]
          },
          {
            "id": "e-now",
            "t": "text",
            "text": "→ nói ngay từ bây giờ",
            "x": 7932,
            "y": 620,
            "size": 52,
            "at": "l1:now",
            "color": "accent",
            "hl": [
              {
                "text": "ngay từ bây giờ",
                "at": "l1:not later"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Đọc thêm: “Ở ghép với bạn cùng phòng” · “Tự nấu ăn đơn giản, đủ chất”",
            "x": 8772,
            "y": 715,
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
          "say": "Planning to share a room? Talk about sleep times, money and chores now, not later.",
          "sub": "Định ở ghép? Nói chuyện giờ giấc, chia tiền, chia việc ngay từ bây giờ.",
          "keys": [
            "ngay từ bây giờ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Right on cue, a friend from home calls. They'll rent together.",
          "sub": "Đúng lúc ấy, cậu bạn cùng quê gọi tới. Hai đứa định thuê chung."
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Hai bạn cùng quê thuê chung",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "“Cứ ở rồi tính”",
          "why": "Va chạm đến từ chuyện nhỏ chưa ai nói: đèn khuya, hoá đơn điện tháng đầu.",
          "rule": "Nói trước cho rõ, ở lâu mới vui"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Rules? Let's just move in and sort it out later!",
          "sub": "Luật gì đâu, cứ ở rồi tính!",
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
          "say": "Week one: lights on late versus early sleeper. Then the power bill, and nobody pays more.",
          "sub": "Tuần đầu: người thức khuya bật đèn, người muốn ngủ sớm. Rồi hoá đơn điện, chẳng ai chịu phần hơn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Thử lại nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Before we sign: bedtime, lights off, and how we split the bills?",
          "sub": "Trước khi ký: mấy giờ ngủ, mấy giờ tắt đèn, tiền chia thế nào?",
          "phase": "redo",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Talk it through first, and living together stays happy.",
          "sub": "Nói trước cho rõ, ở lâu mới vui.",
          "phase": "redo",
          "keys": [
            "Nói trước cho rõ"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p13,p14"
    },
    {
      "id": "s13",
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
            "text": "④ Tuần cuối · Xếp hành lý",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:packs"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "think"
                }
              ],
              "props": [
                "luggage",
                "backpack",
                "pill"
              ]
            },
            "at": "l1:packs",
            "caption": "Tuần cuối · ở nhà",
            "icon": "luggage"
          },
          {
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1260,
            "w": 46,
            "h": 46,
            "at": "l4:original",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1242,
            "size": 58,
            "at": "l4:original+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "Giấy tờ gốc: túi sát người",
            "x": 128,
            "y": 1250,
            "size": 44,
            "at": "l4:original+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1332,
            "w": 46,
            "h": 46,
            "at": "l5:medicine",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1314,
            "size": 58,
            "at": "l5:medicine+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "Thuốc, đơn thuốc nếu có",
            "x": 128,
            "y": 1322,
            "size": 44,
            "at": "l5:medicine+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1404,
            "w": 46,
            "h": 46,
            "at": "l5:charger",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1386,
            "size": 58,
            "at": "l5:charger+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "Sạc, pin dự phòng",
            "x": 128,
            "y": 1394,
            "size": 44,
            "at": "l5:charger+200"
          },
          {
            "id": "f-c3",
            "t": "box",
            "x": 60,
            "y": 1476,
            "w": 46,
            "h": 46,
            "at": "l5:kitchen",
            "stroke": 5
          },
          {
            "id": "f-k3",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1458,
            "size": 58,
            "at": "l5:kitchen+600",
            "color": "accent"
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "Vài món đồ bếp",
            "x": 128,
            "y": 1466,
            "size": 44,
            "at": "l5:kitchen+200"
          },
          {
            "id": "f-c4",
            "t": "box",
            "x": 60,
            "y": 1548,
            "w": 46,
            "h": 46,
            "at": "l5:clothes",
            "stroke": 5
          },
          {
            "id": "f-k4",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1530,
            "size": 58,
            "at": "l5:clothes+600",
            "color": "accent"
          },
          {
            "id": "f-l4",
            "t": "text",
            "text": "Quần áo hợp thời tiết",
            "x": 128,
            "y": 1538,
            "size": 44,
            "at": "l5:clothes+200"
          },
          {
            "id": "f-big",
            "t": "text",
            "text": "Đồ cồng kềnh: mua sau",
            "x": 900,
            "y": 1780,
            "size": 48,
            "at": "l3:bulky",
            "color": "coral",
            "hl": [
              {
                "text": "mua sau",
                "at": "l3:later"
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
          "say": "Stop four: last week. Dũng packs like he's moving house.",
          "sub": "Chặng bốn: tuần cuối. Dũng xếp đồ như dọn nhà."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Rice cooker, fan, blankets, a bucket... will it fit?",
          "sub": "Nồi cơm, quạt, hai cái chăn, cái xô... có nhét vừa không nhỉ?",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Bulky stuff? Buy it later, once you know what the room lacks.",
          "sub": "Đồ cồng kềnh mua sau, khi đã biết phòng thiếu gì.",
          "keys": [
            "mua sau"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "What must come: original papers, in a bag worn close to your body.",
          "sub": "Thứ phải mang: giấy tờ gốc, để trong túi đeo sát người.",
          "keys": [
            "túi đeo sát người"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Medicine, prescriptions, charger, power bank, kitchen basics, clothes for the new weather.",
          "sub": "Thuốc thường dùng, đơn thuốc, sạc, pin dự phòng, vài món đồ bếp, quần áo hợp thời tiết nơi mới."
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s14",
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
            "id": "f-bh",
            "t": "text",
            "text": "BHYT sinh viên: đóng đâu, khám đâu?",
            "x": 60,
            "y": 1635,
            "size": 44,
            "at": "l1:insurance",
            "hl": [
              {
                "text": "BHYT sinh viên",
                "at": "l1:insurance"
              }
            ]
          },
          {
            "id": "f-num",
            "t": "text",
            "text": "Lưu số: nhà · người quen · phòng CTSV",
            "x": 60,
            "y": 1705,
            "size": 42,
            "at": "l3:numbers"
          },
          {
            "id": "f-wal",
            "t": "text",
            "text": "+ chép giấy trong ví",
            "x": 60,
            "y": 1775,
            "size": 50,
            "at": "l3:wallet",
            "color": "accent",
            "hl": [
              {
                "text": "giấy trong ví",
                "at": "l3:wallet"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Ốm thì sao: bài “Ốm khi sống một mình”",
            "x": 900,
            "y": 1845,
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
          "say": "Ask the school about student health insurance: where to pay, where to get checked, which card to bring.",
          "sub": "Hỏi trường về bảo hiểm y tế sinh viên: đóng ở đâu, khám ở đâu, cần mang thẻ gì.",
          "keys": [
            "bảo hiểm y tế sinh viên"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Save numbers: family, a contact in the city, student affairs. Copy them onto paper in your wallet.",
          "sub": "Lưu số người thân, người quen ở thành phố mới, phòng công tác sinh viên. Chép thêm vào mảnh giấy trong ví.",
          "keys": [
            "mảnh giấy trong ví"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Phones die. Phones get lost.",
          "sub": "Điện thoại có lúc hết pin, có lúc mất."
        }
      ],
      "ref": "p16,p17"
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Ngày lên thành phố · Xe khách",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:coach"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "stand",
                  "face": "neutral"
                }
              ],
              "props": [
                "backpack",
                "oncoming-bus"
              ]
            },
            "at": "l1:coach",
            "caption": "Xuống xe khách · thành phố",
            "icon": "oncoming-bus"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Ví, căn cước, giấy báo",
            "x": 2028,
            "y": 1260,
            "size": 48,
            "at": "l2:wallet"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "→ ba lô dưới chân + ngủ gật",
            "x": 2028,
            "y": 1335,
            "size": 46,
            "at": "l2:dozes",
            "color": "coral",
            "hl": [
              {
                "text": "ngủ gật",
                "at": "l2:dozes"
              }
            ]
          },
          {
            "id": "g-cut",
            "t": "illus",
            "name": "backpack",
            "x": 2028,
            "y": 1420,
            "size": 90,
            "at": "l3:cut"
          },
          {
            "id": "g-ok",
            "t": "text",
            "text": "Có ảnh chụp → làm lại đỡ vất",
            "x": 2138,
            "y": 1435,
            "size": 46,
            "at": "l4:photos",
            "hl": [
              {
                "text": "ảnh chụp",
                "at": "l4:photos"
              }
            ]
          },
          {
            "id": "g-lost",
            "t": "text",
            "text": "Vẫn mất mấy buổi chạy thủ tục",
            "x": 2028,
            "y": 1530,
            "size": 46,
            "at": "l5:several days",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five: the coach to the city.",
          "sub": "Chặng năm: xe khách lên thành phố."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Wallet, ID, letter: all in the backpack at his feet. And Dũng dozes off.",
          "sub": "Ví, căn cước, giấy báo: tất cả trong ba lô dưới chân. Và Dũng ngủ gật.",
          "keys": [
            "ngủ gật"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Oh no! Someone cut my backpack open!",
          "sub": "Trời ơi! Ba lô bị rạch rồi!",
          "face": "surprised",
          "pose": "shrug"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lucky him: photos of his papers were on his phone, so redoing them was easier.",
          "sub": "May mà có ảnh chụp giấy tờ trong điện thoại, nên làm lại đỡ vất vả hơn.",
          "keys": [
            "ảnh chụp giấy tờ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Still, several days of paperwork. Tuition paid in flip-flop rubber.",
          "sub": "Nhưng vẫn mất mấy buổi chạy thủ tục. Học phí đóng bằng... đế dép.",
          "keys": [
            "mấy buổi chạy thủ tục"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 100
        }
      ],
      "ref": "p18"
    },
    {
      "id": "s16",
      "module": "BRK-04",
      "data": {
        "title": "Ngày lên xe",
        "wrong": "Ba lô dưới chân, ngủ say",
        "right": "Giấy tờ sát người, bản chụp trong máy",
        "wrongIllus": "sleeping-face",
        "rightIllus": "mobile-phone"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Backpack at your feet, fast asleep?",
          "sub": "Ba lô dưới chân, ngủ say?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. Papers close to your body, copies in your phone.",
          "sub": "Không. Giấy tờ sát người, bản chụp trong máy.",
          "keys": [
            "Giấy tờ sát người"
          ]
        }
      ],
      "ref": "p19,p2"
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
            "at": 150,
            "fit": "H",
            "ms": 900
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
            "text": "⑥ Tuần nhập học · Làm quen trường",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:enrolment"
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
                  "side": "left"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "enter": "pop",
                  "at": "l4",
                  "pose": "phone"
                }
              ],
              "props": [
                "books"
              ]
            },
            "at": "l1:walks",
            "caption": "Tuần nhập học · ở trường",
            "icon": "school"
          },
          {
            "id": "h-route",
            "t": "text",
            "text": "Đi thử: chỗ ở → trường",
            "x": 3996,
            "y": 1260,
            "size": 50,
            "at": "l1:route",
            "hl": [
              {
                "text": "Đi thử",
                "at": "l1:walks"
              }
            ]
          },
          {
            "id": "h-find",
            "t": "text",
            "text": "Phòng học · thư viện · căng tin",
            "x": 3996,
            "y": 1340,
            "size": 44,
            "at": "l2:classroom"
          },
          {
            "id": "h-no",
            "t": "text",
            "text": "Không có cô chủ nhiệm nhắc",
            "x": 3996,
            "y": 1435,
            "size": 48,
            "at": "l5:homeroom",
            "color": "coral"
          },
          {
            "id": "h-reg",
            "t": "text",
            "text": "Tín chỉ, lịch thi, điểm danh",
            "x": 3996,
            "y": 1515,
            "size": 46,
            "at": "l6:credit",
            "color": "accent",
            "hl": [
              {
                "text": "Tín chỉ",
                "at": "l6:week one"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Đi lại an toàn ở thành phố mới · Từ phổ thông lên đại học",
            "x": 4836,
            "y": 1805,
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
          "say": "Stop six: enrolment week. Dũng walks the route from his room to school, before class.",
          "sub": "Chặng sáu: tuần nhập học. Dũng đi thử quãng đường từ chỗ ở tới trường trước buổi học đầu.",
          "keys": [
            "đi thử quãng đường"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Classroom, library, canteen. Priorities: canteen first.",
          "sub": "Tìm sẵn phòng học, thư viện, căng tin. Ưu tiên số một: căng tin."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And this is Lan, his new classmate. Phone in hand, always.",
          "sub": "Còn đây là Lan, bạn cùng khoa mới quen. Điện thoại lúc nào cũng trên tay.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "No homeroom teacher here to remind us of anything!",
          "sub": "Ở đây không có cô chủ nhiệm nhắc từng việc đâu nhé!",
          "face": "surprised"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "So read up on credit registration, exams and attendance in week one.",
          "sub": "Nên đọc kỹ cách đăng ký tín chỉ, lịch thi, quy định điểm danh ngay tuần đầu.",
          "keys": [
            "ngay tuần đầu"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l4",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p20,p21"
    },
    {
      "id": "s19",
      "module": "BRK-06",
      "data": {
        "title": "Mùa nhập học, mùa kẻ gian",
        "items": [
          {
            "illus": "money-with-wings",
            "text": "Việc làm nộp phí"
          },
          {
            "illus": "bust-in-silhouette",
            "text": "“Cán bộ trường”"
          },
          {
            "illus": "link",
            "text": "Link “học bổng”"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Jobs that charge a fee first. Fake school staff. Scholarship links.",
          "sub": "Việc làm bắt nộp phí trước. “Cán bộ trường” xin thông tin. Đường dẫn “trúng học bổng”."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Enrolment week is scammer season too.",
          "sub": "Tuần nhập học cũng là mùa của kẻ gian."
        }
      ],
      "ref": "p22"
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
            "at": "l4:end",
            "fit": "I",
            "ms": 700
          },
          {
            "at": "l6",
            "fit": [
              "i-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l6:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Tuần đầu · Tin “phòng đào tạo”",
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
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "phone",
                  "face": "worried"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l5"
                }
              ],
              "props": [
                "mobile-phone"
              ]
            },
            "at": "l1:message",
            "caption": "Tuần đầu · văn phòng khoa",
            "icon": "mobile-phone"
          },
          {
            "id": "i-msg",
            "t": "text",
            "text": "“Nộp gấp phí giữ suất học”",
            "x": 5964,
            "y": 1260,
            "size": 48,
            "at": "l2:fee",
            "color": "coral"
          },
          {
            "id": "i-acc",
            "t": "text",
            "text": "→ vào tài khoản cá nhân",
            "x": 5964,
            "y": 1335,
            "size": 46,
            "at": "l2:personal",
            "color": "muted"
          },
          {
            "id": "i-ask",
            "t": "text",
            "text": "Mang tin nhắn lên khoa hỏi",
            "x": 5964,
            "y": 1430,
            "size": 48,
            "at": "l4:faculty",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi",
                "at": "l4:ask"
              }
            ]
          },
          {
            "id": "i-off",
            "t": "text",
            "text": "Mọi khoản: thông báo chính thức",
            "x": 5964,
            "y": 1510,
            "size": 44,
            "at": "l6:official"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Hỏi trước một câu, giữ được tiền",
            "x": 6804,
            "y": 1780,
            "size": 44,
            "at": "l6:official+400",
            "hl": [
              {
                "text": "giữ được tiền",
                "at": "l6:notice"
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
          "say": "Stop seven: Lan gets a message from the so-called training office.",
          "sub": "Chặng bảy: Lan nhận tin nhắn xưng là “phòng đào tạo”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Pay a fee today to keep my place? To a personal account...",
          "sub": "Nộp gấp phí để giữ suất học? Vào tài khoản cá nhân... thôi chuyển vậy.",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Wait. My senior said: ask first. Faculty office, here I come.",
          "sub": "Khoan. Chị khoá trên dặn hỏi trước. Lên văn phòng khoa hỏi đã.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "This is Chị Thảo, faculty office. Calm as a lotus pond.",
          "sub": "Đây là chị Thảo, văn phòng khoa. Bình thản như mặt hồ sen.",
          "keys": [
            "chị Thảo"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "The school doesn't collect money this way. Every fee has an official notice.",
          "sub": "Trường không thu tiền kiểu đó, mọi khoản đều có thông báo chính thức.",
          "pose": "explain",
          "react": {
            "lan": "happy"
          }
        }
      ],
      "sfx": [
        {
          "at": "l5",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p24"
    },
    {
      "id": "s22",
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
            "id": "i-stop",
            "t": "illus",
            "name": "hourglass-not-done",
            "x": 5964,
            "y": 1590,
            "size": 80,
            "at": "l1:Stop"
          },
          {
            "id": "i-r1",
            "t": "text",
            "text": "Gấp + tiền / mã → DỪNG",
            "x": 6064,
            "y": 1602,
            "size": 50,
            "at": "l1:hurry",
            "color": "coral",
            "hl": [
              {
                "text": "DỪNG",
                "at": "l1:Stop"
              }
            ]
          },
          {
            "id": "i-r2",
            "t": "text",
            "text": "Hỏi phòng CTSV, người thân",
            "x": 5964,
            "y": 1690,
            "size": 46,
            "at": "l1:student affairs"
          },
          {
            "id": "i-code",
            "t": "text",
            "text": "Mã xác nhận: không đưa ai",
            "x": 5964,
            "y": 1765,
            "size": 50,
            "at": "l3:code",
            "color": "accent",
            "hl": [
              {
                "text": "không đưa ai",
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
          "say": "The rule: money or a code wanted in a hurry? Stop. Ask student affairs or family first.",
          "sub": "Nguyên tắc: đòi tiền hay mã xác nhận gấp? Dừng lại. Hỏi phòng công tác sinh viên hoặc người thân trước.",
          "keys": [
            "Dừng lại"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And never give your code to anyone, even someone who says they're staff.",
          "sub": "Mã xác nhận không đưa cho ai, kể cả người xưng là nhân viên.",
          "keys": [
            "không đưa cho ai"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rushed for money? Slow down, ask the school, then pay.",
          "sub": "Đòi tiền gấp thì chậm lại, hỏi trường trước rồi hãy chuyển.",
          "keys": [
            "chậm lại"
          ]
        }
      ],
      "ref": "p23,p25,p22"
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
            "at": "l3",
            "fit": "J",
            "ms": 700
          },
          {
            "at": "l5",
            "fit": [
              "j-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "⑧ Cuối tháng đầu · Tối, phòng trọ",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:month"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "sad"
                }
              ],
              "props": [
                "crescent-moon",
                "mobile-phone"
              ]
            },
            "at": "l1:evening",
            "caption": "Tối · phòng trọ ở thành phố",
            "icon": "crescent-moon"
          },
          {
            "id": "j-nor",
            "t": "text",
            "text": "Nhớ nhà tuần đầu: bình thường",
            "x": 7932,
            "y": 1260,
            "size": 48,
            "at": "l3:homesick",
            "hl": [
              {
                "text": "bình thường",
                "at": "l3:normal"
              }
            ]
          },
          {
            "id": "j-call",
            "t": "text",
            "text": "Gọi nhà: vài khung giờ cố định",
            "x": 7932,
            "y": 1340,
            "size": 46,
            "at": "l4:call times",
            "color": "accent",
            "hl": [
              {
                "text": "cố định",
                "at": "l4:weekly"
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
          "say": "Last stop: end of month one. Evening, his rented room. Too quiet.",
          "sub": "Chặng cuối: hết tháng đầu. Tối, phòng trọ. Yên quá."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I miss home. Mum's soup. Even Dad's sighs.",
          "sub": "Nhớ nhà ghê. Nhớ canh mẹ nấu. Nhớ cả tiếng thở dài của bố.",
          "face": "sad",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Homesick at first? Totally normal, even for the class clown.",
          "sub": "Nhớ nhà vài tuần đầu là rất bình thường, kể cả với người vui nhất lớp.",
          "keys": [
            "rất bình thường"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Fix a few weekly call times. Home relaxes, and you keep time for your new life.",
          "sub": "Hẹn vài khung giờ gọi cố định trong tuần: nhà yên tâm, bạn vẫn còn thời gian cho cuộc sống mới.",
          "keys": [
            "khung giờ gọi cố định"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Sunday evenings, I call home. Other evenings, I'm busy living.",
          "sub": "Tối Chủ nhật gọi về. Các tối khác, bận sống.",
          "face": "happy",
          "pose": "thumb"
        }
      ],
      "ref": "p26"
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
          }
        ],
        "items": [
          {
            "id": "j-club",
            "t": "text",
            "text": "Bớt cô đơn: có việc chung",
            "x": 7932,
            "y": 1425,
            "size": 48,
            "at": "l1:others",
            "hl": [
              {
                "text": "việc chung",
                "at": "l1:others"
              }
            ]
          },
          {
            "id": "j-cl2",
            "t": "text",
            "text": "CLB · nhóm học · sinh hoạt khoa",
            "x": 7932,
            "y": 1495,
            "size": 42,
            "at": "l1:club",
            "color": "muted"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1580,
            "w": 46,
            "h": 46,
            "at": "l3:money",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1562,
            "size": 58,
            "at": "l3:money+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Tiền còn / dự tính",
            "x": 8000,
            "y": 1570,
            "size": 42,
            "at": "l3:money+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1642,
            "w": 46,
            "h": 46,
            "at": "l3:meals",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1624,
            "size": 58,
            "at": "l3:meals+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Bữa ăn có đều?",
            "x": 8000,
            "y": 1632,
            "size": 42,
            "at": "l3:meals+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1704,
            "w": 46,
            "h": 46,
            "at": "l3:sleep",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1686,
            "size": 58,
            "at": "l3:sleep+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Giấc ngủ có đủ?",
            "x": 8000,
            "y": 1694,
            "size": 42,
            "at": "l3:sleep+200"
          },
          {
            "id": "j-fix",
            "t": "text",
            "text": "Lệch → chỉnh ngay tháng sau",
            "x": 7932,
            "y": 1780,
            "size": 46,
            "at": "l4:next month",
            "color": "coral",
            "hl": [
              {
                "text": "chỉnh ngay",
                "at": "l4:fix"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“…học một sàng khôn”",
            "x": 8772,
            "y": 1780,
            "size": 50,
            "at": "l5:basket",
            "color": "accent",
            "hl": [
              {
                "text": "sàng khôn",
                "at": "l5:basket"
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
          "say": "Loneliness cure: do something with others. A club, a study group, a faculty event.",
          "sub": "Cách nhanh nhất để bớt cô đơn: có việc chung với người khác. Câu lạc bộ, nhóm học, sinh hoạt khoa.",
          "keys": [
            "có việc chung"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then check three things: money left versus plan, regular meals, enough sleep.",
          "sub": "Cuối tháng tự xem lại ba thứ: tiền còn so với dự tính, bữa ăn có đều, giấc ngủ có đủ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Something off? Fix it next month, not at semester's end.",
          "sub": "Chỗ nào lệch thì chỉnh ngay từ tháng sau, đừng đợi hết học kỳ.",
          "keys": [
            "chỉnh ngay từ tháng sau"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Travel one day, gain a basket of wisdom. Dũng's basket: fewer worries now.",
          "sub": "“Đi một ngày đàng, học một sàng khôn.” Giờ sàng của Dũng bớt hẳn... lo.",
          "keys": [
            "bớt hẳn... lo"
          ]
        }
      ],
      "ref": "p27,p28"
    },
    {
      "id": "s26",
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
            "at": "l1:right job",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l2:close",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l3:slow",
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
            "x": 2968,
            "y": 350,
            "at": "l1:right job"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 2728,
            "y": 1610,
            "at": "l2:close"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 6664,
            "y": 1690,
            "at": "l3:slow"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "b-yes"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l1:time"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Thông tin chung; hạn, phí, thủ tục cụ thể theo thông báo chính thức của trường bạn.",
            "x": 7932,
            "y": 1845,
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
          "say": "So: the right job at the right time. Read the letter now, write the deadlines now.",
          "sub": "Tóm lại: đúng việc, đúng lúc. Giấy báo đọc ngay, hạn chót ghi ngay.",
          "keys": [
            "đúng việc, đúng lúc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Papers close to your body, copies in your phone.",
          "sub": "Giấy tờ sát người, bản chụp trong máy.",
          "keys": [
            "Giấy tờ sát người"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And when someone rushes you for money: slow down, ask the school first.",
          "sub": "Và ai giục chuyển tiền gấp: chậm lại, hỏi trường trước.",
          "keys": [
            "hỏi trường trước"
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
      "ref": "questions[32]",
      "data": {
        "q": "Someone asks you for money or a verification code urgently, what is the general rule?",
        "options": [
          "Send the code but not the money, since codes are not worth anything",
          "Act fast, because urgent requests are usually real and delays can cost you more",
          "Stop, and ask the student office or your family before doing anything at all"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "locked",
        "why": "Gấp gáp là công cụ của kẻ lừa; mã xác nhận không đưa ai."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Someone asks you for money or a verification code urgently, what is the general rule?",
          "sub": "Có người gấp gáp đòi tiền hoặc mã xác nhận, nguyên tắc chung là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Stop, and ask the student office or your family before doing anything at all.",
          "sub": "Dừng lại, hỏi phòng công tác sinh viên hoặc người thân trước đã."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Hurry is a scammer's tool. Never give away a code.",
          "sub": "Gấp gáp là công cụ của kẻ lừa. Mã xác nhận đừng đưa ai."
        }
      ]
    },
    {
      "id": "s32",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Nghe tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Open your calendar now and add the deadlines from your letter. First stop in the series: renting a safe room.",
          "sub": "Mở lịch ghi các hạn trong giấy báo. Bài nên mở tiếp: thuê phòng trọ an toàn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then try the forty questions below.",
          "sub": "Rồi thử bốn mươi câu hỏi bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s24"
  }
};
