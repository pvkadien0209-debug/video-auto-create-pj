// Kịch bản video W lần 3 (#110) — "Lần đầu làm trưởng nhóm cần chuẩn bị những gì?" · chuỗi "Lần đầu làm trưởng nhóm"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "prepare-first-time-team-leader--w01",
  "hook": "HOOK-02",
  "unit": {
    "audience": "first-time-team-leaders",
    "slug": "prepare-first-time-team-leader",
    "door": "ky-nang",
    "level": "B1",
    "title": "Lần đầu làm trưởng nhóm cần chuẩn bị những gì?",
    "series": "Lần đầu làm trưởng nhóm"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô (5 × 2) đi theo HAI THÁNG ĐẦU của Thảo (17:00 thứ Sáu cô Hoa báo tin → hỏi sếp → tuần đầu gặp riêng, nói thẳng với Dũng → họp đầu muốn sửa ngay (BRK-04 Cách A/B) → tuần ba sửa hộ đến nửa đêm (“Khoan đã!” DLG) → cuối tháng một báo cáo cô Hoa → tháng hai Lan nộp muộn → BRK-07 rehook → Dũng kể một phía → 17:00 thứ Sáu hai tháng sau, khép vòng). Nhân vật (chuỗi w145/_series/first-time-team-leaders.md): Thảo (“bạn”, Trang p13, Phong p20), Dũng (bạn thân cũ, người kể một phía p25), Lan (thành viên nộp muộn p20, người bị kể p25), cô Hoa (sếp). Câu khép vòng: “Vạn sự khởi đầu nan” → “có bản đồ thì bớt nan”. Bản cũ (W lần 3, #110): w145/bak/prepare-first-time-team-leader--w01.js.",
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
            "id": "a-q",
            "t": "text",
            "text": "“Từ thứ Hai, em dẫn nhóm.”",
            "x": 60,
            "y": 150,
            "size": 84,
            "at": "l1:From Monday",
            "color": "accent",
            "hl": [
              {
                "text": "em dẫn nhóm",
                "at": "l1:lead the team"
              }
            ]
          },
          {
            "id": "a-q2",
            "t": "text",
            "text": "Làm nổi không? Bạn cũ nghĩ sao?",
            "x": 70,
            "y": 320,
            "size": 50,
            "at": "l2:can I"
          },
          {
            "id": "a-x",
            "t": "text",
            "text": "Phải hoá thành người khác?",
            "x": 70,
            "y": 420,
            "size": 54,
            "at": "l2:different person",
            "color": "muted"
          },
          {
            "id": "a-xx",
            "t": "strike",
            "over": "a-x",
            "at": "l2:you don't"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Friday, five p.m. One sentence from the boss: from Monday, you lead the team.",
          "sub": "Năm giờ chiều thứ Sáu. Sếp nói một câu: “Từ thứ Hai, em dẫn nhóm.”",
          "keys": [
            "em dẫn nhóm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Can I do this? Must I become a different person? Good news: you don't.",
          "sub": "Mình làm nổi không? Có phải hoá thành người khác? Tin vui: không cần đâu.",
          "keys": [
            "không cần đâu"
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
            "at": "l4:end",
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
            "y": 140,
            "w": 800,
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
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold"
                }
              ],
              "props": [
                "bar-chart"
              ]
            },
            "at": "l1",
            "caption": "17:00 thứ Sáu · phòng kinh doanh",
            "icon": "office-building"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Vạn sự khởi đầu nan”",
            "x": 60,
            "y": 540,
            "size": 64,
            "at": "l5:beginning",
            "color": "accent",
            "hl": [
              {
                "text": "khởi đầu nan",
                "at": "l5:hard"
              }
            ]
          },
          {
            "id": "a-map",
            "t": "text",
            "text": "…có bản đồ thì bớt nan",
            "x": 100,
            "y": 640,
            "size": 50,
            "at": "l5:map",
            "hl": [
              {
                "text": "bản đồ",
                "at": "l5:map"
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
          "say": "Meet Thảo, best report writer on the team, and from Monday, its new leader.",
          "sub": "Đây là Thảo, cây viết báo cáo số một của nhóm, và từ thứ Hai: trưởng nhóm mới.",
          "keys": [
            "trưởng nhóm mới"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Cô Hoa, head of sales, Thảo's boss.",
          "sub": "Còn đây là cô Hoa, trưởng phòng kinh doanh, sếp của Thảo."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "From Monday, you lead the team. I trust you.",
          "sub": "Từ thứ Hai em dẫn nhóm nhé. Cô tin em.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Me? Lead my old friends?",
          "sub": "Em ạ? Dẫn cả mấy bạn cũ ạ?",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Every beginning is hard, they say. But with a map, a little less hard.",
          "sub": "“Vạn sự khởi đầu nan.” Nhưng có bản đồ thì bớt nan.",
          "keys": [
            "Vạn sự khởi đầu nan"
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
            "text": "Lần đầu dẫn nhóm: chuẩn bị gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:prepare",
            "hl": [
              {
                "text": "chuẩn bị gì",
                "at": "l1:prepare"
              }
            ]
          },
          {
            "id": "b-n",
            "t": "text",
            "text": "Biết hết từ ngày đầu",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l1:every answer",
            "color": "muted"
          },
          {
            "id": "b-nx",
            "t": "strike",
            "over": "b-n",
            "at": "l2:small things"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: làm đều việc nhỏ",
            "x": 2028,
            "y": 260,
            "size": 62,
            "at": "l2:small things",
            "color": "accent",
            "hl": [
              {
                "text": "làm đều",
                "at": "l2:steadily"
              }
            ]
          },
          {
            "id": "b-s1",
            "t": "text",
            "text": "Hỏi rõ sếp · Nghe từng người",
            "x": 2028,
            "y": 380,
            "size": 46,
            "at": "l3:Ask"
          },
          {
            "id": "b-s2",
            "t": "text",
            "text": "Giao rõ · Họp ngắn · Báo đều",
            "x": 2028,
            "y": 445,
            "size": 46,
            "at": "l3:Delegate"
          },
          {
            "id": "b-s3",
            "t": "text",
            "text": "Nói sớm khi có chuyện",
            "x": 2028,
            "y": 510,
            "size": 46,
            "at": "l3:speak up",
            "hl": [
              {
                "text": "Nói sớm",
                "at": "l3:speak up early"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 610,
            "w": 250,
            "h": 90,
            "at": "l4:six stops+400",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2303,
            "y": 610,
            "w": 250,
            "h": 90,
            "at": "l4:six stops+650",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2578,
            "y": 610,
            "w": 250,
            "h": 90,
            "at": "l4:six stops+900",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2853,
            "y": 610,
            "w": 250,
            "h": 90,
            "at": "l4:six stops+1150",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3128,
            "y": 610,
            "w": 250,
            "h": 90,
            "at": "l4:six stops+1400",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3403,
            "y": 610,
            "w": 250,
            "h": 90,
            "at": "l4:six stops+1650",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Trước",
            "x": 2048,
            "y": 626,
            "size": 44,
            "at": "l4:six stops+520"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Tuần 1",
            "x": 2323,
            "y": 626,
            "size": 44,
            "at": "l4:six stops+770"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Tháng 1",
            "x": 2598,
            "y": 626,
            "size": 44,
            "at": "l4:six stops+1020"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Báo cáo",
            "x": 2873,
            "y": 626,
            "size": 44,
            "at": "l4:six stops+1270"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Có chuyện",
            "x": 3148,
            "y": 626,
            "size": 44,
            "at": "l4:six stops+1520"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Giữ sức",
            "x": 3423,
            "y": 626,
            "size": 44,
            "at": "l4:six stops+1770"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So, what to prepare? Not every answer on day one.",
          "sub": "Vậy cần chuẩn bị gì? Không phải biết hết mọi câu trả lời từ ngày đầu.",
          "keys": [
            "chuẩn bị gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Just small things, done steadily.",
          "sub": "Mà là làm đều những việc nhỏ.",
          "keys": [
            "làm đều những việc nhỏ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ask clearly, listen to each person, delegate clearly, meet briefly, report regularly, speak up early.",
          "sub": "Hỏi rõ sếp, nghe từng người. Giao việc rõ, họp ngắn, báo cáo đều, và nói sớm khi có chuyện.",
          "keys": [
            "nói sớm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Thảo's first two months, in six stops.",
          "sub": "Giờ theo Thảo qua hai tháng đầu, sáu chặng.",
          "keys": [
            "hai tháng đầu"
          ]
        }
      ],
      "ref": "intro,outro"
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
            "at": "l4:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Trước khi nhận · Hỏi sếp",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First stop"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 140,
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
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "memo"
              ]
            },
            "at": "l1:private talk",
            "caption": "Vẫn thứ Sáu · gặp riêng sếp",
            "icon": "speech-balloon"
          },
          {
            "id": "c-q1",
            "t": "text",
            "text": "Mục tiêu vài tháng tới?",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l2:achieve",
            "hl": [
              {
                "text": "Mục tiêu",
                "at": "l2:achieve"
              }
            ]
          },
          {
            "id": "c-q2",
            "t": "text",
            "text": "Việc gì em tự quyết?",
            "x": 3996,
            "y": 245,
            "size": 50,
            "at": "l3:decide myself",
            "hl": [
              {
                "text": "tự quyết",
                "at": "l3:decide myself"
              }
            ]
          },
          {
            "id": "c-q3",
            "t": "text",
            "text": "Báo cáo theo nhịp nào?",
            "x": 3996,
            "y": 320,
            "size": 50,
            "at": "l4:how often",
            "hl": [
              {
                "text": "nhịp nào",
                "at": "l4:how often"
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
          "say": "First stop: still Friday. A private talk with the boss.",
          "sub": "Chặng một: vẫn thứ Sáu. Thảo xin gặp riêng sếp.",
          "keys": [
            "gặp riêng sếp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "What would you like our team to achieve in the next few months?",
          "sub": "Cô mong nhóm em đạt được điều gì trong vài tháng tới ạ?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "What can I decide myself, and what should I ask you first?",
          "sub": "Việc nào em tự quyết được, việc nào cần hỏi cô trước ạ?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "And how often should I report?",
          "sub": "Và cô muốn em báo cáo theo nhịp nào ạ?",
          "face": "thinking"
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
          }
        ],
        "items": [
          {
            "id": "c-why",
            "t": "text",
            "text": "Mệt vì: được quyết đến đâu?",
            "x": 3996,
            "y": 410,
            "size": 46,
            "at": "l1:how far",
            "hl": [
              {
                "text": "quyết đến đâu",
                "at": "l1:how far"
              }
            ]
          },
          {
            "id": "c-a",
            "t": "text",
            "text": "→ hỏi sếp từng chuyện nhỏ",
            "x": 4026,
            "y": 480,
            "size": 42,
            "at": "l2:tiny thing",
            "color": "muted"
          },
          {
            "id": "c-b",
            "t": "text",
            "text": "→ tự quyết việc phải hỏi",
            "x": 4026,
            "y": 540,
            "size": 42,
            "at": "l2:should have asked",
            "color": "coral"
          },
          {
            "id": "c-page",
            "t": "text",
            "text": "Ghi gọn một trang, giữ lại",
            "x": 3996,
            "y": 620,
            "size": 48,
            "at": "l3:one page",
            "color": "accent",
            "hl": [
              {
                "text": "một trang",
                "at": "l3:one page"
              }
            ]
          },
          {
            "id": "c-hand",
            "t": "text",
            "text": "Hỏi người dẫn trước: việc dở?",
            "x": 4816,
            "y": 700,
            "size": 44,
            "at": "l4:old team leader",
            "hl": [
              {
                "text": "việc dở",
                "at": "l4:unfinished"
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
          "say": "Why ask? New leaders tire not from work, but from not knowing how far they can decide.",
          "sub": "Vì sao phải hỏi? Trưởng nhóm mới mệt không vì nhiều việc, mà vì không biết mình được quyết đến đâu.",
          "keys": [
            "được quyết đến đâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then you either ask about every tiny thing, or decide things you should have asked.",
          "sub": "Rồi hoặc chạy đi hỏi sếp từng chuyện nhỏ, hoặc tự quyết việc lẽ ra phải hỏi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So Thảo writes one page: goals, decision rights, reporting, unfinished work, promises.",
          "sub": "Nên Thảo ghi gọn một trang: mục tiêu, việc được tự quyết, cách báo cáo, việc dở dang và lời hứa với bên khác.",
          "keys": [
            "một trang"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then she asks the old team leader: what's unfinished, who carries what, who's waiting?",
          "sub": "Rồi hỏi người dẫn nhóm trước: việc gì dở, ai gánh gì, ai đang chờ nhóm?",
          "keys": [
            "việc gì dở"
          ]
        }
      ],
      "ref": "p2,p3,p4"
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
            "at": "l5:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Tuần đầu · Gặp riêng từng người",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second stop"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 140,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "hot-beverage"
              ]
            },
            "at": "l1:each person",
            "caption": "Thứ Hai tuần đầu · quán nước",
            "icon": "hot-beverage"
          },
          {
            "id": "d-q1",
            "t": "text",
            "text": "Đang làm gì? Vướng gì?",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l1:working on"
          },
          {
            "id": "d-q2",
            "t": "text",
            "text": "Muốn học gì? Cần giúp gì?",
            "x": 5964,
            "y": 245,
            "size": 50,
            "at": "l1:learn"
          },
          {
            "id": "d-ear",
            "t": "text",
            "text": "Nghe nhiều hơn nói",
            "x": 5964,
            "y": 340,
            "size": 62,
            "at": "l2:listens more",
            "color": "accent",
            "hl": [
              {
                "text": "Nghe nhiều hơn",
                "at": "l2:listens more"
              }
            ]
          },
          {
            "id": "d-say",
            "t": "text",
            "text": "Bạn cũ: nói thẳng một lần",
            "x": 5964,
            "y": 640,
            "size": 50,
            "at": "l5:tell me",
            "hl": [
              {
                "text": "nói thẳng một lần",
                "at": "l5:straight"
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
          "say": "Second stop: week one. Thảo meets each person alone. What are you working on, stuck on, hoping to learn?",
          "sub": "Chặng hai: tuần đầu. Thảo gặp riêng từng người: đang làm gì, vướng gì, muốn học thêm gì, cần giúp gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "She listens more than she talks. Two ears, one mouth.",
          "sub": "Cô nghe nhiều hơn nói. Hai tai, một miệng mà.",
          "keys": [
            "nghe nhiều hơn nói"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Dũng, her old desk buddy.",
          "sub": "Còn đây là Dũng, bạn thân bàn bên.",
          "keys": [
            "bạn thân"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "So... do I call you boss now?",
          "sub": "Thế… giờ mình gọi cậu là sếp à?",
          "face": "happy",
          "pose": "shrug"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "I'm still me. But now some decisions are mine. If something's wrong, tell me straight.",
          "sub": "Mình vẫn là mình, nhưng giờ có vài việc mình phải quyết. Có gì chưa ổn, cậu cứ nói thẳng nhé.",
          "pose": "explain",
          "keys": [
            "nói thẳng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 500
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
            "text": "③ Họp đầu tiên · Muốn sửa ngay?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third stop"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 140,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "props": [
                "clipboard"
              ]
            },
            "at": "l1:first team meeting",
            "caption": "Buổi họp nhóm đầu tiên",
            "icon": "clipboard"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Đổi cách báo cáo",
            "x": 7932,
            "y": 170,
            "size": 48,
            "at": "l3:report format"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Đổi giờ họp",
            "x": 7932,
            "y": 235,
            "size": 48,
            "at": "l3:meeting time"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Đổi người hai mảng việc",
            "x": 7932,
            "y": 300,
            "size": 48,
            "at": "l3:two areas"
          },
          {
            "id": "e-oai",
            "t": "text",
            "text": "“Mới lên đã ra oai”",
            "x": 7932,
            "y": 400,
            "size": 56,
            "at": "l5:showing off",
            "color": "coral",
            "hl": [
              {
                "text": "ra oai",
                "at": "l5:showing off"
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
          "say": "Third stop: the first team meeting. Thảo has a notebook full of fixes.",
          "sub": "Chặng ba: buổi họp nhóm đầu tiên. Thảo có cả cuốn sổ những chỗ muốn sửa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Lan, the team's numbers expert. Quiet, sharp, misses nothing.",
          "sub": "Còn đây là Lan, cao thủ số liệu của nhóm. Ít nói, sắc sảo, không sót gì.",
          "keys": [
            "cao thủ số liệu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "From today: new report format, new meeting time, and two areas change owners!",
          "sub": "Từ hôm nay: đổi cách báo cáo, đổi giờ họp, hai mảng việc đổi người phụ trách!",
          "pose": "point"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Okay.",
          "sub": "Dạ… vâng.",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "At lunch, whispers: just promoted, already showing off.",
          "sub": "Giờ trưa thì xì xào: “Mới lên đã ra oai.”",
          "keys": [
            "Mới lên đã ra oai"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "s10",
      "module": "BRK-04",
      "data": {
        "title": "Hai cách bắt đầu",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrong": "Họp đầu đổi ngay ba thứ",
        "right": "Hai tuần nghe từng người, rồi sửa một việc",
        "wrongIllus": "loudspeaker",
        "rightIllus": "ear"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Way A: change everything at once.",
          "sub": "Cách A: đổi hết ngay một lúc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Way B: listen first, then fix one thing.",
          "sub": "Cách B: nghe trước, rồi sửa một việc.",
          "keys": [
            "nghe trước"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p8"
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
            "id": "e-A",
            "t": "text",
            "text": "A: im lặng, người giỏi xin chuyển",
            "x": 7932,
            "y": 490,
            "size": 42,
            "at": "l1:silence",
            "color": "muted"
          },
          {
            "id": "e-B",
            "t": "text",
            "text": "B: chậm hơn, có người đứng cùng",
            "x": 7932,
            "y": 555,
            "size": 42,
            "at": "l1:slower",
            "hl": [
              {
                "text": "có người đứng cùng",
                "at": "l1:beside you"
              }
            ]
          },
          {
            "id": "e-w1",
            "t": "text",
            "text": "Ghi lại → hiểu vì sao → sửa dần",
            "x": 7932,
            "y": 625,
            "size": 42,
            "at": "l2:Write things",
            "hl": [
              {
                "text": "hiểu vì sao",
                "at": "l2:why"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Hiểu người trước, đổi việc sau",
            "x": 8752,
            "y": 700,
            "size": 50,
            "at": "l3:Understand people",
            "color": "accent",
            "hl": [
              {
                "text": "Hiểu người trước",
                "at": "l3:Understand people first"
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
          "say": "Way A: obeyed in silence, and the best person may transfer out. Way B: slower, but with people beside you.",
          "sub": "Cách A: cả nhóm im lặng làm theo, người giỏi nhất có thể xin chuyển. Cách B: chậm hơn, nhưng có người đứng cùng.",
          "keys": [
            "có người đứng cùng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Week one is not for big changes. Write things down, understand why, then fix them one by one.",
          "sub": "Tuần đầu chưa phải lúc đổi lớn. Ghi lại, hiểu vì sao nó đang như vậy, rồi sửa từng thứ.",
          "keys": [
            "hiểu vì sao"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Understand people first, change things later.",
          "sub": "Hiểu người trước, đổi việc sau.",
          "keys": [
            "Hiểu người trước, đổi việc sau"
          ]
        }
      ],
      "ref": "p7,p8,p9"
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
            "text": "④ Tuần ba · Sửa hộ nửa đêm",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth stop"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1230,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "face": "sad",
                  "pose": "think"
                }
              ],
              "props": [
                "laptop",
                "crescent-moon"
              ]
            },
            "at": "l1:eleven",
            "caption": "23:00 · tuần thứ ba",
            "icon": "crescent-moon"
          },
          {
            "id": "f-me",
            "t": "text",
            "text": "“Mình làm nhanh hơn”",
            "x": 60,
            "y": 1260,
            "size": 54,
            "at": "l2:faster",
            "color": "muted"
          },
          {
            "id": "f-mex",
            "t": "strike",
            "over": "f-me",
            "at": "l3:classic trap"
          },
          {
            "id": "f-burn",
            "t": "text",
            "text": "→ kiệt sức, nhóm không lớn",
            "x": 60,
            "y": 1345,
            "size": 48,
            "at": "l3:burn out",
            "color": "coral",
            "hl": [
              {
                "text": "không lớn",
                "at": "l3:nobody grows"
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
          "say": "Fourth stop: week three, eleven p.m. Thảo is fixing everyone's reports herself.",
          "sub": "Chặng bốn: tuần thứ ba, mười một giờ đêm. Thảo đang tự sửa báo cáo của cả nhóm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "It's faster if I just do it myself.",
          "sub": "Mình tự làm cho nhanh.",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The classic trap for skilled people. It works for weeks, then you burn out, and nobody grows.",
          "sub": "Cái bẫy kinh điển của người giỏi. Chạy được vài tuần, rồi kiệt sức, còn nhóm không ai lớn lên.",
          "keys": [
            "không ai lớn lên"
          ]
        }
      ],
      "ref": "p10,p13"
    },
    {
      "id": "s13",
      "module": "DLG-01",
      "ref": "p10,p13,p14",
      "data": {
        "set": "office",
        "label": "Sáng hôm sau · bàn làm việc",
        "actors": [
          {
            "id": "thao",
            "side": "left"
          },
          {
            "id": "dung",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Mang việc của nhóm về sửa hộ",
          "why": "Chạy được vài tuần, rồi bạn kiệt sức, còn nhóm không ai lớn lên."
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Here is my report.",
          "sub": "Em gửi chị báo cáo ạ.",
          "pose": "give"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Leave it. I will fix it tonight.",
          "sub": "Cứ để đó, tối chị sửa cho.",
          "stop": true
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Wait a second!",
          "sub": "Khoan đã!",
          "face": "stern"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Soon: why try, you redo it anyway. Do it for them today, weaker team tomorrow.",
          "sub": "Rồi sẽ nghe: “Đằng nào chị cũng làm lại.” Làm thay hôm nay, nhóm yếu ngày mai.",
          "keys": [
            "nhóm yếu ngày mai"
          ]
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
          "who": "thao",
          "say": "Here are my notes. Can you fix it?",
          "sub": "Chị ghi góp ý rồi, em sửa nhé?",
          "phase": "redo",
          "pose": "give",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "dung",
          "say": "Sure, I will try again.",
          "sub": "Dạ, em làm lại ạ.",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Give it back with notes. First tries aren't perfect.",
          "sub": "Trả việc lại kèm góp ý, chấp nhận lần đầu chưa hoàn hảo.",
          "phase": "redo",
          "face": "happy",
          "keys": [
            "Trả việc lại kèm góp ý"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      }
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
            "id": "f-g",
            "t": "text",
            "text": "Giao việc, nói đủ:",
            "x": 60,
            "y": 1440,
            "size": 50,
            "at": "l1:say it fully",
            "hl": [
              {
                "text": "nói đủ",
                "at": "l1:say it fully"
              }
            ]
          },
          {
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1530,
            "w": 44,
            "h": 44,
            "at": "l1:result",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1514,
            "size": 56,
            "at": "l1:result+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "Kết quả cần có",
            "x": 125,
            "y": 1520,
            "size": 42,
            "at": "l1:result+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1600,
            "w": 44,
            "h": 44,
            "at": "l1:deadline",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1584,
            "size": 56,
            "at": "l1:deadline+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "Hạn chót",
            "x": 125,
            "y": 1590,
            "size": 42,
            "at": "l1:deadline+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1670,
            "w": 44,
            "h": 44,
            "at": "l1:help",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1654,
            "size": 56,
            "at": "l1:help+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "Ai hỗ trợ",
            "x": 125,
            "y": 1660,
            "size": 42,
            "at": "l1:help+200"
          },
          {
            "id": "f-c3",
            "t": "box",
            "x": 60,
            "y": 1740,
            "w": 44,
            "h": 44,
            "at": "l1:review",
            "stroke": 5
          },
          {
            "id": "f-k3",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1724,
            "size": 56,
            "at": "l1:review+600",
            "color": "accent"
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "Khi nào xem lại",
            "x": 125,
            "y": 1730,
            "size": 42,
            "at": "l1:review+200"
          },
          {
            "id": "f-meet",
            "t": "text",
            "text": "Họp ngắn, đều đặn",
            "x": 880,
            "y": 1790,
            "size": 50,
            "at": "l2:short",
            "color": "accent",
            "hl": [
              {
                "text": "Họp ngắn",
                "at": "l2:short"
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
          "say": "When you delegate, say it fully: the result, the deadline, who can help, and when you'll review it.",
          "sub": "Khi giao việc, hãy nói đủ: kết quả cần có, hạn chót, ai hỗ trợ, khi nào hai bên xem lại.",
          "keys": [
            "nói đủ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And set a short, regular meeting: who's doing what, who's stuck where.",
          "sub": "Và đặt nhịp họp ngắn, đều đặn: ai đang làm gì, vướng ở đâu.",
          "keys": [
            "họp ngắn, đều đặn"
          ]
        }
      ],
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
            "at": "l3",
            "fit": "G",
            "ms": 700
          },
          {
            "at": "l5",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Cuối tháng một · Báo cáo",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth stop"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1230,
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
                  "id": "hoa",
                  "side": "right"
                }
              ],
              "props": [
                "bar-chart",
                "memo"
              ]
            },
            "at": "l1:Report time",
            "caption": "Cuối tháng một · phòng cô Hoa",
            "icon": "bar-chart"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Đã xong · Đang làm · Vướng gì",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l1:done",
            "hl": [
              {
                "text": "Vướng gì",
                "at": "l1:needs help"
              }
            ]
          },
          {
            "id": "g-bad",
            "t": "text",
            "text": "Tin xấu: báo sớm + đề xuất",
            "x": 2028,
            "y": 1370,
            "size": 52,
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
            "id": "g-hide",
            "t": "text",
            "text": "Giấu đến sát hạn",
            "x": 2028,
            "y": 1455,
            "size": 48,
            "at": "l4:Hiding",
            "color": "muted"
          },
          {
            "id": "g-hidex",
            "t": "strike",
            "over": "g-hide",
            "at": "l4:lose trust"
          },
          {
            "id": "g-name",
            "t": "text",
            "text": "Việc tốt: nêu tên người làm",
            "x": 2028,
            "y": 1560,
            "size": 52,
            "at": "l6:Name",
            "color": "accent",
            "hl": [
              {
                "text": "nêu tên",
                "at": "l6:Name who"
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
          "say": "Fifth stop: end of month one. Report time, short and on rhythm: done, doing, and where she needs help.",
          "sub": "Chặng năm: cuối tháng đầu. Giờ báo cáo, ngắn và đúng nhịp: đã xong gì, đang làm gì, vướng gì cần sếp giúp.",
          "keys": [
            "ngắn và đúng nhịp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "One problem: the client file may be late. Here's what I tried, and my suggestion.",
          "sub": "Có một tin chưa vui: hồ sơ gửi khách có thể trễ. Đây là cách em đã thử, và đề xuất của em.",
          "pose": "give"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Bad news? Report it early, with what you tried and your suggestion.",
          "sub": "Tin xấu càng nên báo sớm, kèm điều đã thử và đề xuất.",
          "keys": [
            "báo sớm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Hiding it until the deadline is the fastest way to lose trust.",
          "sub": "Giấu đến sát hạn là cách mất lòng tin nhanh nhất.",
          "keys": [
            "mất lòng tin nhanh nhất"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "And the good news: the new sales table is all Lan's work.",
          "sub": "Còn tin vui: bảng doanh số mới là công của Lan hết ạ.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Name who did it. Teams trust that more than pep talks.",
          "sub": "Nêu đúng tên người đã làm. Nhóm tin điều đó hơn mọi lời động viên.",
          "keys": [
            "Nêu đúng tên"
          ]
        }
      ],
      "ref": "p15,p16,p17"
    },
    {
      "id": "s17",
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
            "at": "l4",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Tháng hai · Có người chậm",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sixth stop"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1230,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "face": "surprised"
                }
              ],
              "props": [
                "page-facing-up"
              ]
            },
            "at": "l2:review day",
            "caption": "Nếu cứ im lặng… · kỳ đánh giá",
            "icon": "page-facing-up"
          },
          {
            "id": "h-late",
            "t": "text",
            "text": "Lan nộp muộn, Thảo làm bù",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l1:late",
            "color": "muted"
          },
          {
            "id": "h-bad",
            "t": "text",
            "text": "Kỳ đánh giá: “chưa đạt”",
            "x": 3996,
            "y": 1340,
            "size": 48,
            "at": "l2:Not meeting",
            "color": "coral"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Nói sớm thì nhẹ",
            "x": 3996,
            "y": 1440,
            "size": 58,
            "at": "l4:Speak early",
            "color": "accent",
            "hl": [
              {
                "text": "Nói sớm",
                "at": "l4:Speak early"
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
          "say": "Sixth stop: month two. Lan starts submitting late. Thảo hates conflict, so she quietly fills the gaps.",
          "sub": "Chặng sáu: tháng thứ hai. Lan bắt đầu nộp muộn. Thảo ngại va chạm, nên im lặng tự làm bù phần thiếu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fast forward to review day. Thảo writes: not meeting expectations.",
          "sub": "Tua nhanh đến kỳ đánh giá. Thảo ghi: “Chưa đạt.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "What? Why didn't you tell me sooner?",
          "sub": "Sao ạ? Sao chị không nói với em sớm hơn?",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Speak early and it's light. Wait too long and it's heavy.",
          "sub": "Nói sớm thì nhẹ, để lâu thì nặng.",
          "keys": [
            "Nói sớm thì nhẹ, để lâu thì nặng"
          ]
        }
      ],
      "ref": "p18,p20,p21"
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
            "at": "l2",
            "fit": [
              "h-v2"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-v2",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1230,
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
                  "face": "thinking"
                }
              ]
            },
            "at": "l1:Rewind",
            "caption": "Tua lại · lần trễ thứ hai",
            "icon": "speech-balloon"
          },
          {
            "id": "h-ask",
            "t": "text",
            "text": "Hỏi sớm, hỏi riêng",
            "x": 3996,
            "y": 1540,
            "size": 50,
            "at": "l1:Ask early",
            "hl": [
              {
                "text": "hỏi riêng",
                "at": "l1:privately"
              }
            ]
          },
          {
            "id": "h-why",
            "t": "text",
            "text": "Thiếu tin? Quá tải? Chuyện riêng?",
            "x": 3996,
            "y": 1615,
            "size": 42,
            "at": "l3:Missing",
            "color": "muted"
          },
          {
            "id": "h-rule",
            "t": "text",
            "text": "Nói về việc, không về người",
            "x": 3996,
            "y": 1700,
            "size": 48,
            "at": "l4:the work",
            "color": "accent",
            "hl": [
              {
                "text": "về việc",
                "at": "l4:the work"
              }
            ]
          },
          {
            "id": "h-ok",
            "t": "text",
            "text": "“Thiếu số liệu tháng trước” ✓",
            "x": 4816,
            "y": 1790,
            "size": 40,
            "at": "l5:missing last month",
            "color": "accent"
          },
          {
            "id": "h-no",
            "t": "text",
            "text": "“Em làm ẩu quá”",
            "x": 3996,
            "y": 1780,
            "size": 40,
            "at": "l5:careless",
            "color": "muted"
          },
          {
            "id": "h-nox",
            "t": "strike",
            "over": "h-no",
            "at": "l5:careless+500"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Rewind to the second late report. Ask early, ask privately, look for the cause first.",
          "sub": "Quay lại lần trễ thứ hai. Hỏi sớm, hỏi riêng, bắt đầu bằng tìm nguyên nhân.",
          "keys": [
            "Hỏi sớm, hỏi riêng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Lan, your last two reports came in late. Is something in the way?",
          "sub": "Lan ơi, hai bản gần đây nộp muộn. Có gì đang làm em vướng không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Missing information? Too much work? Something personal?",
          "sub": "Thiếu thông tin? Quá tải? Hay đang có chuyện riêng?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then talk about the work, not the person, in private.",
          "sub": "Rồi góp ý về việc cụ thể, không về con người, và nói riêng, không nói trước cả nhóm.",
          "keys": [
            "về việc cụ thể"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Missing last month's numbers, lands softer than, you're so careless.",
          "sub": "“Bản này thiếu phần số liệu tháng trước” dễ nghe hơn nhiều so với “Em làm ẩu quá”."
        }
      ],
      "ref": "p18,p19"
    },
    {
      "id": "s19",
      "module": "BRK-07",
      "data": {
        "question": "Bạn thân kể một phía, có nên nhắn ngay?",
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
          "say": "Your best friend tells one side. Do you act right away?",
          "sub": "Bạn thân kể một phía. Có nên nhắn ngay cho người kia?",
          "keys": [
            "một phía"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p25"
    },
    {
      "id": "s20",
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
            "at": "l1",
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
            "at": "l5:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Tháng hai · Hai bạn va chạm",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l0:Seventh stop"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1230,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "hot-beverage"
              ]
            },
            "at": "l0:clash",
            "caption": "Cuối tháng hai · giờ nghỉ chiều",
            "icon": "hot-beverage"
          },
          {
            "id": "i-msg",
            "t": "text",
            "text": "Nhắn ngay: “Lần sau kỹ hơn”",
            "x": 5964,
            "y": 1260,
            "size": 46,
            "at": "l2:message",
            "color": "muted"
          },
          {
            "id": "i-msgx",
            "t": "strike",
            "over": "i-msg",
            "at": "l4:judged"
          },
          {
            "id": "i-one",
            "t": "text",
            "text": "Mới nghe một phía",
            "x": 5964,
            "y": 1340,
            "size": 50,
            "at": "l3:one side",
            "color": "coral",
            "hl": [
              {
                "text": "một phía",
                "at": "l3:one side"
              }
            ]
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Nghe đủ hai phía rồi nói",
            "x": 5964,
            "y": 1440,
            "size": 54,
            "at": "l6:Hear both",
            "color": "accent",
            "hl": [
              {
                "text": "Nghe đủ hai phía",
                "at": "l6:Hear both sides"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l0",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: Dũng and Lan clash over a wrong number.",
          "sub": "Chặng bảy: Dũng và Lan va nhau vì một số liệu sai."
        },
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "The numbers were wrong because of Lan, not me. That's the whole story.",
          "sub": "Số liệu sai là do Lan, không phải mình. Đầu đuôi là thế.",
          "face": "stern",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Then I'll message Lan: next time, check more carefully.",
          "sub": "Vậy mình nhắn Lan: “Lần sau em kiểm tra kỹ hơn nhé.”",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hold on. One side only, and it's her best friend's.",
          "sub": "Từ từ. Mới nghe một phía, lại là phía bạn thân.",
          "keys": [
            "một phía"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lan would feel judged, and share less.",
          "sub": "Lan sẽ thấy bị xử ép mà chưa được nói câu nào, rồi từ đó ít chia sẻ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Thanks for telling me. I'll talk with Lan too, then we sit down together.",
          "sub": "Cảm ơn cậu đã kể. Mình sẽ nói riêng với Lan nữa, rồi ba người ngồi chung.",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Hear both sides fully before you speak.",
          "sub": "Nghe đủ hai phía rồi hãy mở lời.",
          "keys": [
            "Nghe đủ hai phía"
          ]
        }
      ],
      "ref": "p25,p26"
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
          }
        ],
        "items": [
          {
            "id": "i-c1",
            "t": "text",
            "text": "Va chạm: nghe riêng, rồi ngồi chung",
            "x": 5964,
            "y": 1540,
            "size": 42,
            "at": "l1:clash",
            "hl": [
              {
                "text": "nghe riêng",
                "at": "l1:privately"
              }
            ]
          },
          {
            "id": "i-c2",
            "t": "text",
            "text": "Không xử ai đúng ai sai",
            "x": 5964,
            "y": 1610,
            "size": 42,
            "at": "l1:court",
            "color": "muted"
          },
          {
            "id": "i-c3",
            "t": "text",
            "text": "Cao điểm: bỏ bớt, cùng gánh",
            "x": 5964,
            "y": 1680,
            "size": 42,
            "at": "l2:busy season",
            "hl": [
              {
                "text": "cùng gánh",
                "at": "l2:carry some"
              }
            ]
          },
          {
            "id": "i-c4",
            "t": "text",
            "text": "Bất đồng: rõ ai quyết",
            "x": 5964,
            "y": 1750,
            "size": 42,
            "at": "l3:can't agree",
            "hl": [
              {
                "text": "ai quyết",
                "at": "l3:who decides"
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
          "say": "Two members clash? Hear each privately, then sit together. No court case about who's right.",
          "sub": "Khi hai người va chạm: nghe riêng từng người, rồi ngồi chung bàn cách làm tiếp, chứ không phân xử ai đúng ai sai.",
          "keys": [
            "nghe riêng từng người"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Busy season? Tell the truth, drop extras, share the load, carry some yourself.",
          "sub": "Mùa cao điểm: nói thật tình hình, bỏ bớt việc chưa cần, chia nhau gánh, và chính mình cũng gánh một phần.",
          "keys": [
            "chính mình cũng gánh"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Can't agree? Let all speak, say who decides and when, then explain why.",
          "sub": "Khi cả nhóm không cùng ý: cho mọi người nói hết, nói rõ ai quyết, khi nào, rồi giải thích lý do.",
          "keys": [
            "ai quyết"
          ]
        }
      ],
      "ref": "p22,p23,p24"
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
          },
          {
            "at": "l6",
            "fit": [
              "j-v"
            ],
            "zoom": 1.25,
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Hai tháng sau · 17:00 thứ Sáu",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Two months later"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1230,
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
                  "id": "hoa",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "bar-chart"
              ]
            },
            "at": "l1:Friday",
            "caption": "17:00 thứ Sáu · hai tháng sau",
            "icon": "office-building"
          },
          {
            "id": "j-ok",
            "t": "text",
            "text": "Lúng túng = bình thường",
            "x": 7932,
            "y": 1255,
            "size": 48,
            "at": "l1:normal",
            "hl": [
              {
                "text": "bình thường",
                "at": "l1:normal"
              }
            ]
          },
          {
            "id": "j-men",
            "t": "text",
            "text": "Hỏi riêng một người đi trước",
            "x": 7932,
            "y": 1325,
            "size": 44,
            "at": "l2:experienced",
            "color": "accent"
          },
          {
            "id": "j-note",
            "t": "text",
            "text": "Ghi lại tình huống khó",
            "x": 7932,
            "y": 1390,
            "size": 44,
            "at": "l3:write down",
            "color": "muted"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Khởi đầu nan”… bớt nan",
            "x": 8752,
            "y": 1790,
            "size": 48,
            "at": "l6:beginning",
            "color": "accent",
            "hl": [
              {
                "text": "bớt nan",
                "at": "l6:less hard"
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
          "say": "Two months later, Friday, five p.m. Thảo still feels lost sometimes. Normal.",
          "sub": "Hai tháng sau. Lại năm giờ chiều thứ Sáu. Thảo thỉnh thoảng vẫn lúng túng. Chuyện bình thường.",
          "keys": [
            "bình thường"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Could you connect me with an experienced team leader I can ask privately?",
          "sub": "Cô giới thiệu giúp em một trưởng nhóm đi trước để em hỏi riêng được không ạ?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Of course. And write down the hard cases, and how you handled them.",
          "sub": "Được chứ. Em cứ ghi lại những tình huống khó, cùng cách mình đã xử lý nhé.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Don't drop your expert work, but don't hide in it.",
          "sub": "Đừng bỏ hẳn chuyên môn, nhưng cũng đừng trốn vào đó.",
          "keys": [
            "đừng trốn vào đó"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Unblocking others is now your main job, not extra work.",
          "sub": "Gỡ vướng cho người khác giờ là việc chính, không phải việc làm thêm.",
          "keys": [
            "việc chính"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Every beginning is hard. With a map, a little less hard.",
          "sub": "“Vạn sự khởi đầu nan.” Có bản đồ thì… bớt nan.",
          "keys": [
            "bớt nan"
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
      "ref": "p27,p28"
    },
    {
      "id": "s23",
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
            "id": "j-map",
            "t": "text",
            "text": "Bản đồ hai tháng:",
            "x": 7932,
            "y": 1470,
            "size": 46,
            "at": "l1:map",
            "hl": [
              {
                "text": "Bản đồ",
                "at": "l1:map"
              }
            ]
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1550,
            "w": 44,
            "h": 44,
            "at": "l1:Before",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1534,
            "size": 56,
            "at": "l1:Before+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Trước: hỏi sếp ba điều",
            "x": 7997,
            "y": 1540,
            "size": 40,
            "at": "l1:Before+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1625,
            "w": 44,
            "h": 44,
            "at": "l2",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1609,
            "size": 56,
            "at": "l2+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Tuần đầu: gặp riêng, chưa đổi",
            "x": 7997,
            "y": 1615,
            "size": 40,
            "at": "l2+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1700,
            "w": 44,
            "h": 44,
            "at": "l3",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1684,
            "size": 56,
            "at": "l3+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Tháng đầu: giao, họp, báo cáo",
            "x": 7997,
            "y": 1690,
            "size": 40,
            "at": "l3+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1775,
            "w": 44,
            "h": 44,
            "at": "l4",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1759,
            "size": 56,
            "at": "l4+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Có chuyện: sớm, riêng, đủ",
            "x": 7997,
            "y": 1765,
            "size": 40,
            "at": "l4+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Save this map. Before: ask about goals, decision rights and reporting.",
          "sub": "Lưu tấm bản đồ này. Trước khi nhận nhóm: hỏi sếp mục tiêu, quyền tự quyết, cách báo cáo.",
          "keys": [
            "bản đồ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Week one: meet each person, no big changes.",
          "sub": "Tuần đầu: gặp riêng từng người, chưa đổi lớn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Month one: delegate clearly, meet briefly, report regularly.",
          "sub": "Tháng đầu: giao việc rõ, họp ngắn, báo cáo đều."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Trouble? Ask early, talk privately, hear both sides.",
          "sub": "Khi có chuyện: hỏi sớm, nói riêng, nghe đủ hai phía."
        }
      ],
      "ref": "p29"
    },
    {
      "id": "s24",
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
            "at": "l1",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3",
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
            "x": 5496,
            "y": 40,
            "at": "l1:asking"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9432,
            "y": 40,
            "at": "l2:listening"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5496,
            "y": 1130,
            "at": "l3:trouble"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "h-k"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:early"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So, leading a team starts with asking clearly.",
          "sub": "Tóm lại, dẫn nhóm bắt đầu bằng hỏi rõ.",
          "keys": [
            "hỏi rõ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then listening first, and delegating clearly.",
          "sub": "Rồi nghe trước, giao rõ.",
          "keys": [
            "nghe trước, giao rõ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And speaking early when trouble starts.",
          "sub": "Và nói sớm khi có chuyện.",
          "keys": [
            "nói sớm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "This week: meet your boss, and each member. Next: from colleague to team leader.",
          "sub": "Tuần này: hẹn gặp sếp, gặp riêng từng thành viên. Bài tiếp: “Từ đồng nghiệp thành trưởng nhóm”.",
          "keys": [
            "Tuần này"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s30",
      "module": "QUIZ-01",
      "ref": "questions[22]",
      "data": {
        "q": "Two team members are arguing, what should you do first?",
        "options": [
          "Decide quickly who is right, so the argument stops before it grows bigger",
          "Ignore it completely, because adults should solve their own problems without a leader",
          "Listen to each person privately, then meet together to agree how to work on"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "balance-scale",
        "why": "Nghe riêng để hiểu đủ hai phía, rồi ngồi chung bàn cách làm tiếp."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Two team members are arguing, what should you do first?",
          "sub": "Hai thành viên đang tranh cãi, bạn nên làm gì trước tiên?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Listen to each person privately, then meet together to agree how to work on.",
          "sub": "Nghe riêng từng người, rồi ngồi chung bàn cách làm tiếp."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Do not judge who is right. Talk about how to work.",
          "sub": "Đừng phân xử ai đúng ai sai, hãy bàn cách làm."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s31",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Những tháng đầu dẫn nhóm"
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
    "open": "s01",
    "close": "s22"
  }
};
