// Kịch bản video W lần 3 (#110, #112) — bài tổng "Người đi làm cần ôn lại những điểm ngữ pháp nào?" · chuỗi "Ngữ pháp tiếng Anh cần biết"
// Giọng đọc tiếng Anh, phụ đề tiếng Việt; hoạt hình + thẻ. Đủ ý cho 40 câu bài tập.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "english-grammar-points-to-review-for-work--w01",
  "hook": "HOOK-07",
  "unit": {
    "audience": "grammar-relearners",
    "slug": "english-grammar-points-to-review-for-work",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Người đi làm cần ôn lại những điểm ngữ pháp nào?",
    "series": "Ngữ pháp tiếng Anh cần biết"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT TUẦN LÀM VIỆC của Thảo (Thứ Hai 8:30 email → 10:00 gọi Sam “Khoan đã!” → Thứ Ba Cô Hoa gặp Sam → Thứ Tư đề xuất + nhắc nhóm → Thứ Năm CV Dũng, hẹn hạn → Thứ Sáu Sam thăm xưởng, báo lại sếp → Thứ Hai tuần sau 8:30 khép vòng). Nhân vật: Thảo, Sam, Cô Hoa, Dũng (w145/_series/grammar-relearners.md). Cảnh ngắt nhịp: BRK-11 (3 phần), BRK-04 (trước–sau câu điều kiện), BRK-07 (rehook sang bị động), BRK-04 (until/by). Khép vòng: “Học ăn, học nói, học gói, học mở”. Không có số liệu ngoài bài (≈10 điểm, 10 năm ngân hàng là của bài). Bản cũ (W lần 3): w145/bak/english-grammar-points-to-review-for-work--w01.js.",
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
            "text": "≈ 10 điểm",
            "x": 60,
            "y": 120,
            "size": 150,
            "at": "l1:ten",
            "color": "accent",
            "hl": [
              {
                "text": "10 điểm",
                "at": "l1:points"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "ngữ pháp cho câu ở chỗ làm",
            "x": 70,
            "y": 330,
            "size": 50,
            "at": "l1:work"
          },
          {
            "id": "a-bk",
            "t": "text",
            "text": "Ta tưởng: học lại cả cuốn?",
            "x": 70,
            "y": 440,
            "size": 50,
            "at": "l2:whole",
            "color": "muted"
          },
          {
            "id": "a-bkx",
            "t": "strike",
            "over": "a-bk",
            "at": "l2:brick+300"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "About ten grammar points. That is what most English at work runs on.",
          "sub": "Khoảng mười điểm ngữ pháp. Phần lớn tiếng Anh ở chỗ làm chạy bằng chừng ấy.",
          "keys": [
            "mười điểm ngữ pháp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not the whole grammar book, thick as a brick.",
          "sub": "Không phải cả cuốn ngữ pháp dày như viên gạch.",
          "keys": [
            "dày như viên gạch"
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
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "e-mail",
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
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
            "at": "l1",
            "caption": "Thứ Hai 8:30 · email cho đối tác",
            "icon": "e-mail"
          },
          {
            "id": "a-q1",
            "t": "text",
            "text": "work hay working?",
            "x": 900,
            "y": 660,
            "size": 46,
            "at": "l3:working",
            "color": "coral"
          },
          {
            "id": "a-q2",
            "t": "text",
            "text": "until hay by?",
            "x": 1340,
            "y": 660,
            "size": 46,
            "at": "l4:by",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Học ăn, học nói, học gói…”",
            "x": 60,
            "y": 560,
            "size": 46,
            "at": "l5:learn to eat",
            "color": "accent",
            "hl": [
              {
                "text": "học gói",
                "at": "l5:wrap"
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
          "who": "det",
          "say": "Accountant at a furniture exporter. Every Monday she writes to foreign partners.",
          "sub": "Kế toán ở công ty nội thất xuất khẩu. Sáng thứ Hai nào cũng viết email cho đối tác nước ngoài.",
          "keys": [
            "đối tác nước ngoài"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I work on it... or I'm working on it?",
          "sub": "I work on it… hay I'm working on it?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Until Friday... or by Friday?",
          "sub": "Until Friday… hay by Friday?",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "As our grandparents say: learn to eat, learn to speak, learn to wrap, learn to open.",
          "sub": "Ông bà dạy: “Học ăn, học nói, học gói, học mở.”",
          "keys": [
            "học gói, học mở"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Thảo wraps a lovely email. She trips on the tiny words.",
          "sub": "Thảo gói email thì khéo, chỉ vấp mấy chữ tí hon.",
          "keys": [
            "chữ tí hon"
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
            "text": "Ôn lại điểm nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:review",
            "hl": [
              {
                "text": "điểm nào",
                "at": "l1:grammar points"
              }
            ]
          },
          {
            "id": "b-j1",
            "t": "text",
            "text": "Báo việc · đặt hạn · đề xuất",
            "x": 2028,
            "y": 170,
            "size": 48,
            "at": "l2:report"
          },
          {
            "id": "b-j2",
            "t": "text",
            "text": "Nhờ việc · so sánh · chuyển lời",
            "x": 2028,
            "y": 245,
            "size": 48,
            "at": "l2:ask"
          },
          {
            "id": "b-err",
            "t": "text",
            "text": "Lỗi lặp ở mấy chỗ quen",
            "x": 2028,
            "y": 330,
            "size": 52,
            "at": "l3:same",
            "color": "coral",
            "hl": [
              {
                "text": "mấy chỗ quen",
                "at": "l3:same few spots"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: bảng công thức",
            "x": 2928,
            "y": 170,
            "size": 48,
            "at": "l4:formulas",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l4:formulas+400"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: một câu hỏi",
            "x": 2928,
            "y": 250,
            "size": 52,
            "at": "l4:one question",
            "color": "accent",
            "hl": [
              {
                "text": "một câu hỏi",
                "at": "l4:one question"
              }
            ]
          },
          {
            "id": "b-y1",
            "t": "text",
            "text": "Thường ngày hay đang dở?",
            "x": 2968,
            "y": 340,
            "size": 44,
            "at": "l5:everyday"
          },
          {
            "id": "b-y2",
            "t": "text",
            "text": "Người nghe biết chưa?",
            "x": 2968,
            "y": 405,
            "size": 44,
            "at": "l5:listener"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So which grammar points do working adults really need to review?",
          "sub": "Vậy người đi làm thật sự cần ôn lại điểm ngữ pháp nào?",
          "keys": [
            "điểm ngữ pháp nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Work sentences do a few jobs: report work, set deadlines, propose, ask, compare, pass on words.",
          "sub": "Câu ở chỗ làm chỉ làm vài việc: báo việc, hẹn và đặt hạn, đề xuất, nhờ việc, so sánh, chuyển lời."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And the mistakes land in the same few spots, like a roof that leaks in one place.",
          "sub": "Và lỗi cứ rơi đúng mấy chỗ quen, như mái dột đúng một chỗ.",
          "keys": [
            "mấy chỗ quen"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So each lesson skips the formulas and opens with one question.",
          "sub": "Nên mỗi bài bỏ bảng công thức, mở bằng một câu hỏi để tự chọn.",
          "keys": [
            "một câu hỏi"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Everyday thing, or unfinished? Does the listener know which one?",
          "sub": "Chuyện thường ngày hay đang dở? Người nghe đã biết là cái nào chưa?"
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s03",
      "module": "BRK-11",
      "data": {
        "title": "Bản đồ chuỗi: 3 phần",
        "items": [
          "Các thì để báo việc",
          "Câu hai vế và bị động",
          "Chữ nhỏ và giọng điệu"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Three: small words and tone.",
          "sub": "Ba: chữ nhỏ và giọng điệu."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Two: conditionals and the passive.",
          "sub": "Hai: câu điều kiện và bị động."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "One: tenses to report work.",
          "sub": "Một: các thì để báo việc."
        }
      ],
      "ref": "p3"
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
          }
        ],
        "items": [
          {
            "id": "b-wk",
            "t": "text",
            "text": "Một tuần của Thảo",
            "x": 2028,
            "y": 520,
            "size": 52,
            "at": "l1:week",
            "hl": [
              {
                "text": "Một tuần",
                "at": "l1:week"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 610,
            "w": 300,
            "h": 90,
            "at": "l1:week+500",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2358,
            "y": 610,
            "w": 300,
            "h": 90,
            "at": "l1:week+800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2688,
            "y": 610,
            "w": 300,
            "h": 90,
            "at": "l1:week+1100",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 3018,
            "y": 610,
            "w": 300,
            "h": 90,
            "at": "l1:week+1400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3348,
            "y": 610,
            "w": 300,
            "h": 90,
            "at": "l1:week+1700",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Thứ Hai",
            "x": 2063,
            "y": 622,
            "size": 48,
            "at": "l1:week+620"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Thứ Ba",
            "x": 2393,
            "y": 622,
            "size": 48,
            "at": "l1:week+920"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Thứ Tư",
            "x": 2723,
            "y": 622,
            "size": 48,
            "at": "l1:week+1220"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Thứ Năm",
            "x": 3053,
            "y": 622,
            "size": 48,
            "at": "l1:week+1520"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Thứ Sáu",
            "x": 3383,
            "y": 622,
            "size": 48,
            "at": "l1:week+1820"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Let's follow one work week of Thảo, Monday to Friday.",
          "sub": "Giờ theo Thảo qua một tuần làm việc, thứ Hai tới thứ Sáu.",
          "keys": [
            "một tuần làm việc"
          ]
        }
      ],
      "ref": "p26"
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
            "at": "l4",
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
            "text": "① Thứ Hai · Việc đang làm",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:monday"
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
                  "pose": "explain"
                }
              ],
              "props": [
                "e-mail"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:monday",
            "caption": "Thứ Hai 8:30",
            "icon": "e-mail"
          },
          {
            "id": "c-q",
            "t": "text",
            "text": "Thường ngày hay đang dở?",
            "x": 3996,
            "y": 160,
            "size": 52,
            "at": "l1:everyday",
            "hl": [
              {
                "text": "đang dở",
                "at": "l1:unfinished"
              }
            ]
          },
          {
            "id": "c-s",
            "t": "text",
            "text": "Thường ngày: I work in sales",
            "x": 3996,
            "y": 250,
            "size": 48,
            "at": "l2:everyday",
            "hl": [
              {
                "text": "work",
                "at": "l2:work"
              }
            ]
          },
          {
            "id": "c-c",
            "t": "text",
            "text": "Đang dở: I'm working on…",
            "x": 3996,
            "y": 330,
            "size": 48,
            "at": "l3:unfinished",
            "color": "accent",
            "hl": [
              {
                "text": "I'm working",
                "at": "l3:working"
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
          "say": "Monday, eight thirty. First question: an everyday thing, or something unfinished and temporary?",
          "sub": "Thứ Hai, tám rưỡi. Câu hỏi đầu: chuyện thường ngày, hay đang dở, tạm thời?",
          "keys": [
            "thường ngày",
            "đang dở"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Everyday takes the present simple. I work in sales.",
          "sub": "Thường ngày dùng hiện tại đơn: I work in sales.",
          "keys": [
            "hiện tại đơn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Unfinished takes am, is, are plus -ing. I'm working on a sales report.",
          "sub": "Đang dở dùng am, is, are cộng -ing: I'm working on a sales report.",
          "keys": [
            "am, is, are cộng -ing"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "So, I'm working on it. Got it.",
          "sub": "Vậy là I'm working on it. Hiểu rồi.",
          "face": "happy"
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
            "fit": "C",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "c-s1",
            "t": "text",
            "text": "My manager wants the report",
            "x": 3996,
            "y": 430,
            "size": 48,
            "at": "l1:manager",
            "hl": [
              {
                "text": "wants",
                "at": "l1:wants"
              }
            ]
          },
          {
            "id": "c-i1",
            "t": "text",
            "text": "I working on it",
            "x": 3996,
            "y": 520,
            "size": 48,
            "at": "l2:wrong",
            "color": "muted"
          },
          {
            "id": "c-i1x",
            "t": "strike",
            "over": "c-i1",
            "at": "l2:wrong+300"
          },
          {
            "id": "c-i2",
            "t": "text",
            "text": "→ I'm working on it",
            "x": 4396,
            "y": 520,
            "size": 48,
            "at": "l2:wrong+600",
            "color": "accent",
            "hl": [
              {
                "text": "I'm",
                "at": "l2:wrong+600"
              }
            ]
          },
          {
            "id": "c-sam",
            "t": "text",
            "text": "10:00 · gọi với Sam",
            "x": 4836,
            "y": 690,
            "size": 48,
            "at": "l3:Sam"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Typing fast, we drop the s after he, she, it. My manager wants the report today.",
          "sub": "Gõ vội, ta sót chữ s sau he, she, it: My manager wants the report today.",
          "keys": [
            "chữ s"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And we drop am, is, are. I working on it is wrong.",
          "sub": "Và sót am, is, are trước -ing: I working on it là sai.",
          "keys": [
            "sót am, is, are"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ten o'clock, a call. Meet Sam, the foreign buyer.",
          "sub": "Mười giờ, có cuộc gọi. Đây là Sam, đối tác bên mua.",
          "keys": [
            "Sam"
          ]
        }
      ],
      "ref": "p4"
    },
    {
      "id": "s07",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Hai 10:00 · gọi với Sam",
        "actors": [
          {
            "id": "thao",
            "side": "left"
          },
          {
            "id": "sam",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Yes, I'm understanding",
          "why": "Understand là động từ trạng thái, chỉ điều trong đầu, không phải hành động đang chạy.",
          "rule": "Hiểu, biết, cần, muốn: không đi với -ing"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Is everything clear so far?",
          "sub": "Tới đây rõ cả chứ?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Yes, I'm understanding.",
          "sub": "Vâng, tôi đang hiểu ạ.",
          "face": "happy",
          "stop": true
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Wait a second!",
          "sub": "Khoan đã!",
          "face": "stern",
          "pose": "stop"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Adding -ing doesn't sound more focused. Understand is a state, so people say I understand.",
          "sub": "Thêm -ing không làm mình nghe chăm chú hơn. Understand là trạng thái: nói I understand.",
          "keys": [
            "trạng thái"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Lần nữa nhé.",
          "phase": "redo"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "thao",
          "say": "Got it. That makes sense.",
          "sub": "Got it. That makes sense.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Know, understand, need, want: no -ing.",
          "sub": "Hiểu, biết, cần, muốn: không đi với -ing.",
          "phase": "redo",
          "keys": [
            "không đi với -ing"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p5,p6"
    },
    {
      "id": "s08",
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
            "text": "② Thứ Ba · Việc đã xong",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:tuesday"
          },
          {
            "id": "d-r",
            "t": "text",
            "text": "Kết quả còn, không nói lúc nào",
            "x": 5964,
            "y": 160,
            "size": 50,
            "at": "l1:result"
          },
          {
            "id": "d-r2",
            "t": "text",
            "text": "→ I've sent you the contract",
            "x": 6004,
            "y": 240,
            "size": 52,
            "at": "l1:sent",
            "color": "accent",
            "hl": [
              {
                "text": "I've sent",
                "at": "l1:sent"
              }
            ]
          },
          {
            "id": "d-y",
            "t": "text",
            "text": "yesterday, last week",
            "x": 5964,
            "y": 340,
            "size": 50,
            "at": "l2:yesterday",
            "color": "coral"
          },
          {
            "id": "d-y2",
            "t": "text",
            "text": "→ We shipped your order",
            "x": 6004,
            "y": 420,
            "size": 52,
            "at": "l2:shipped",
            "hl": [
              {
                "text": "shipped",
                "at": "l2:shipped"
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
          "say": "Tuesday, the job is done. Result still here, no time given? I've sent you the contract.",
          "sub": "Thứ Ba, việc đã xong. Kết quả còn đó, không nói lúc nào: have, has cộng quá khứ phân từ. I've sent you the contract.",
          "keys": [
            "have, has"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A finished time, like yesterday? Past simple. We shipped your order yesterday.",
          "sub": "Có thời điểm đã qua như yesterday, last week: quá khứ đơn. We shipped your order yesterday.",
          "keys": [
            "quá khứ đơn"
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
              "set": "meeting",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "sam",
                  "side": "right"
                }
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
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Cô Hoa",
            "caption": "Thứ Ba 15:00 · gặp Sam",
            "icon": "bank"
          },
          {
            "id": "d-w",
            "t": "text",
            "text": "worked → đã nghỉ?",
            "x": 5964,
            "y": 520,
            "size": 52,
            "at": "l4:closes",
            "color": "coral",
            "hl": [
              {
                "text": "đã nghỉ?",
                "at": "l4:left"
              }
            ]
          },
          {
            "id": "d-hw",
            "t": "text",
            "text": "have worked → vẫn làm",
            "x": 5964,
            "y": 610,
            "size": 56,
            "at": "l5:still",
            "color": "accent",
            "hl": [
              {
                "text": "vẫn làm",
                "at": "l5:still inside"
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
          "say": "That afternoon, Sam meets Cô Hoa, from the bank that funds the orders.",
          "sub": "Chiều đó, Sam gặp Cô Hoa, người của ngân hàng tài trợ đơn hàng.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Nice to meet you, Sam. I worked in banking for ten years.",
          "sub": "Rất vui được gặp chị Sam. Tôi đã làm ngân hàng mười năm.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Oh. So what do you do now?",
          "sub": "Ồ. Vậy giờ chị làm gì?",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Past simple closes the door. Sam thinks she has left the bank.",
          "sub": "Quá khứ đơn đóng cửa giai đoạn ấy. Sam tưởng cô đã nghỉ.",
          "keys": [
            "đóng cửa"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Still there? I've worked in banking for ten years. Ten years, and still inside.",
          "sub": "Còn làm thì nói I've worked: mười năm, và vẫn trong nghề.",
          "keys": [
            "vẫn trong nghề"
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
            "text": "③ Thứ Tư · Đề xuất với sếp",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:wednesday"
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
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "chart-increasing"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:hiring",
            "caption": "Thứ Tư 9:00 · phòng họp",
            "icon": "chart-increasing"
          },
          {
            "id": "e-r",
            "t": "text",
            "text": "Càng xa thật, động từ càng lùi",
            "x": 7932,
            "y": 160,
            "size": 46,
            "at": "l1:further",
            "hl": [
              {
                "text": "càng lùi",
                "at": "l1:further back"
              }
            ]
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Loại 1 · có thể: will",
            "x": 7932,
            "y": 240,
            "size": 46,
            "at": "l2:possible"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Loại 2 · giả định: would",
            "x": 7932,
            "y": 315,
            "size": 46,
            "at": "l3:imagined"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Loại 3 · đã lỡ: would have",
            "x": 7932,
            "y": 390,
            "size": 46,
            "at": "l3:lost"
          },
          {
            "id": "e-if",
            "t": "text",
            "text": "Vế if: không will, would",
            "x": 7932,
            "y": 480,
            "size": 50,
            "at": "l4:no will",
            "color": "coral",
            "hl": [
              {
                "text": "không will, would",
                "at": "l4:no will"
              }
            ]
          },
          {
            "id": "e-un",
            "t": "text",
            "text": "unless = nếu không",
            "x": 7932,
            "y": 560,
            "size": 50,
            "at": "l4:unless",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Wednesday, Thảo pitches a hiring plan. Conditionals: the further from reality, the further back the verb.",
          "sub": "Thứ Tư, Thảo trình đề xuất tuyển người. Câu điều kiện: càng xa sự thật, động từ càng lùi về quá khứ.",
          "keys": [
            "càng lùi về quá khứ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Type one, possible. If the client approves the design, we'll start next week.",
          "sub": "Loại 1, có thể xảy ra: If the client approves the design, we'll start next week."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Type two, imagined. If I were you, I would accept. Type three, already lost: would have.",
          "sub": "Loại 2, giả định: If I were you, I would accept the offer. Loại 3, chuyện đã lỡ: would have."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No will or would in the if part. And unless means if not.",
          "sub": "Vế if không dùng will hay would. Unless đọc là “nếu không”.",
          "keys": [
            "không dùng will hay would"
          ]
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s11",
      "module": "BRK-04",
      "data": {
        "title": "Ngân sách nhiều khả năng được duyệt",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "If we had more budget, we would hire two people",
        "right": "If the budget is approved, we'll hire two people",
        "wrongIllus": "money-with-wings",
        "rightIllus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "If we had more budget... Sounds like: sorry, no money.",
          "sub": "Loại 2: nghe như “tiếc là không có tiền”.",
          "keys": [
            "không có tiền"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "If the budget is approved... A real plan.",
          "sub": "Loại 1: một kế hoạch có thật.",
          "keys": [
            "kế hoạch có thật"
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
          }
        ],
        "items": [
          {
            "id": "e-k",
            "t": "text",
            "text": "Có thật, đừng nói như mơ",
            "x": 8772,
            "y": 690,
            "size": 52,
            "at": "l1:dream",
            "color": "accent",
            "hl": [
              {
                "text": "đừng nói như mơ",
                "at": "l1:dream"
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
          "say": "If it can really happen, don't say it like a dream.",
          "sub": "Có khả năng thật, đừng nói như một giấc mơ.",
          "keys": [
            "đừng nói như một giấc mơ"
          ]
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s13",
      "module": "BRK-07",
      "data": {
        "question": "Nhắc cả nhóm mà không chỉ mặt ai?",
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
          "say": "How do you remind the whole team, without pointing at anyone?",
          "sub": "Nhắc cả nhóm thế nào cho khéo, mà không chỉ mặt ai?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s14",
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
            "text": "④ Thứ Tư chiều · Bị động",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:tense"
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
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "mobile-phone",
                "receipt"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:passive",
            "caption": "Thứ Tư 16:00 · nhóm chat",
            "icon": "mobile-phone"
          },
          {
            "id": "f-f",
            "t": "text",
            "text": "be + quá khứ phân từ",
            "x": 60,
            "y": 1250,
            "size": 50,
            "at": "l1:past participle",
            "hl": [
              {
                "text": "be",
                "at": "l1:be"
              }
            ]
          },
          {
            "id": "f-n",
            "t": "text",
            "text": "has been received",
            "x": 60,
            "y": 1330,
            "size": 50,
            "at": "l2:received",
            "color": "accent",
            "hl": [
              {
                "text": "has been received",
                "at": "l2:received"
              }
            ]
          },
          {
            "id": "f-r",
            "t": "text",
            "text": "needs to be completed",
            "x": 60,
            "y": 1410,
            "size": 50,
            "at": "l2:completed",
            "hl": [
              {
                "text": "to be completed",
                "at": "l2:completed"
              }
            ]
          },
          {
            "id": "f-e",
            "t": "text",
            "text": "The goods delivered yesterday",
            "x": 60,
            "y": 1510,
            "size": 46,
            "at": "l3:goods",
            "color": "muted"
          },
          {
            "id": "f-ex",
            "t": "strike",
            "over": "f-e",
            "at": "l3:should+200"
          },
          {
            "id": "f-e2",
            "t": "text",
            "text": "→ The goods were delivered",
            "x": 60,
            "y": 1590,
            "size": 50,
            "at": "l3:were",
            "color": "accent",
            "hl": [
              {
                "text": "were",
                "at": "l3:were"
              }
            ]
          },
          {
            "id": "f-m",
            "t": "text",
            "text": "Lỗi của mình: nói chủ động",
            "x": 60,
            "y": 1700,
            "size": 50,
            "at": "l4:actively",
            "color": "coral",
            "hl": [
              {
                "text": "chủ động",
                "at": "l4:actively"
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
          "say": "With the passive: be, in the right tense, plus the past participle.",
          "sub": "Bằng câu bị động: be chia theo thì, cộng quá khứ phân từ.",
          "keys": [
            "câu bị động"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Notices: your request has been received. Reminders: the expense form needs to be completed by Friday.",
          "sub": "Thông báo: Your request has been received. Nhắc khéo: The expense form needs to be completed by Friday."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Top mistake: no be. The goods delivered yesterday should be: the goods were delivered.",
          "sub": "Lỗi hay gặp nhất là thiếu be: phải là The goods were delivered yesterday.",
          "keys": [
            "thiếu be"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Your own mistake? Say it actively. I made a mistake in the invoice, and I'm fixing it now.",
          "sub": "Lỗi của mình thì nói chủ động: I made a mistake in the invoice, and I'm fixing it now.",
          "keys": [
            "nói chủ động"
          ]
        }
      ],
      "ref": "p13"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Năm · Mạo từ",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:thursday"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "give"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
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
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "Thứ Năm 9:00 · dòng đầu CV",
            "icon": "page-facing-up"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "an university · a MBA",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l2:university",
            "color": "muted"
          },
          {
            "id": "g-1x",
            "t": "strike",
            "over": "g-1",
            "at": "l3:sound"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "a university · an MBA",
            "x": 2028,
            "y": 1350,
            "size": 52,
            "at": "l3:you",
            "color": "accent",
            "hl": [
              {
                "text": "a university",
                "at": "l3:you"
              },
              {
                "text": "an MBA",
                "at": "l3:em"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Nghe âm, đừng nhìn chữ",
            "x": 2028,
            "y": 1450,
            "size": 56,
            "at": "l3:letter",
            "color": "accent",
            "hl": [
              {
                "text": "Nghe âm",
                "at": "l3:letter"
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
          "say": "Thursday. Meet Dũng, the new logistics guy, holding his CV like a lottery ticket.",
          "sub": "Thứ Năm. Đây là Dũng, nhân viên kho vận mới, cầm CV như cầm vé số.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Thảo, check my first line? I have an university degree and a MBA.",
          "sub": "Chị Thảo xem giúp dòng đầu? I have an university degree and a MBA.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "University starts with a you sound, so a. MBA starts with em, so an. Sound, not letter.",
          "sub": "University đọc /juː/, âm phụ âm, nên a. MBA đọc /em/, âm nguyên âm, nên an. Nghe âm, đừng nhìn chữ.",
          "keys": [
            "Nghe âm, đừng nhìn chữ"
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
      "ref": "p14,p15,p16"
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
          }
        ],
        "items": [
          {
            "id": "g-m",
            "t": "text",
            "text": "I have meeting",
            "x": 2028,
            "y": 1550,
            "size": 46,
            "at": "l1:meeting",
            "color": "muted"
          },
          {
            "id": "g-mx",
            "t": "strike",
            "over": "g-m",
            "at": "l1:alone"
          },
          {
            "id": "g-m2",
            "t": "text",
            "text": "→ I have a meeting",
            "x": 2388,
            "y": 1550,
            "size": 46,
            "at": "l1:alone+300",
            "color": "accent",
            "hl": [
              {
                "text": "a",
                "at": "l1:alone+300"
              }
            ]
          },
          {
            "id": "g-u",
            "t": "text",
            "text": "advice, feedback: không a, không s",
            "x": 2028,
            "y": 1635,
            "size": 40,
            "at": "l2:information"
          },
          {
            "id": "g-th",
            "t": "text",
            "text": "the: hai bên cùng biết",
            "x": 2028,
            "y": 1720,
            "size": 50,
            "at": "l3:the",
            "hl": [
              {
                "text": "hai bên cùng biết",
                "at": "l3:both"
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
          "say": "Also, a singular countable noun never stands alone. I have a meeting, not I have meeting.",
          "sub": "Danh từ đếm được số ít không đứng một mình: I have a meeting.",
          "keys": [
            "không đứng một mình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Information, advice, feedback, equipment: no a or an, no s.",
          "sub": "Information, advice, feedback, equipment: không a, an, không thêm s."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Use the only when both of you know which one.",
          "sub": "Chỉ dùng the khi cả hai bên đều biết là cái nào.",
          "keys": [
            "cả hai bên đều biết"
          ]
        }
      ],
      "ref": "p14"
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "Thứ Năm chiều · at, on, in",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:meeting"
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
                  "pose": "think"
                }
              ],
              "props": [
                "e-mail",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:afternoon",
            "caption": "Thứ Năm 15:00 · hẹn Sam",
            "icon": "spiral-calendar"
          },
          {
            "id": "h-ar",
            "t": "arrow",
            "from": [
              3976,
              1260
            ],
            "to": [
              3976,
              1470
            ],
            "at": "l1:small",
            "stroke": 5
          },
          {
            "id": "h-at",
            "t": "text",
            "text": "at nine · giờ",
            "x": 3996,
            "y": 1250,
            "size": 52,
            "at": "l2:at"
          },
          {
            "id": "h-on",
            "t": "text",
            "text": "on Monday morning · ngày",
            "x": 3996,
            "y": 1325,
            "size": 52,
            "at": "l2:on"
          },
          {
            "id": "h-in",
            "t": "text",
            "text": "in March · tháng, buổi",
            "x": 3996,
            "y": 1400,
            "size": 52,
            "at": "l2:months"
          },
          {
            "id": "h-nx",
            "t": "text",
            "text": "on next Monday",
            "x": 3996,
            "y": 1500,
            "size": 48,
            "at": "l3:next",
            "color": "muted"
          },
          {
            "id": "h-nxx",
            "t": "strike",
            "over": "h-nx",
            "at": "l3:not"
          },
          {
            "id": "h-nx2",
            "t": "text",
            "text": "→ next Monday",
            "x": 4386,
            "y": 1500,
            "size": 48,
            "at": "l3:not+300",
            "color": "accent"
          },
          {
            "id": "h-dl",
            "t": "text",
            "text": "Hạn chót: by · within",
            "x": 3996,
            "y": 1590,
            "size": 50,
            "at": "l4:deadline",
            "hl": [
              {
                "text": "by",
                "at": "l4:by"
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
          "say": "That afternoon Thảo sets a meeting with Sam. Time words go from small to big.",
          "sub": "Chiều đó, Thảo hẹn họp với Sam. Giới từ thời gian đi từ nhỏ đến lớn.",
          "keys": [
            "từ nhỏ đến lớn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "At nine. On Monday morning. In March, in the morning: months, years, parts of the day.",
          "sub": "At cho giờ, on cho ngày, in cho tháng, năm, quý và các buổi.",
          "keys": [
            "At",
            "on",
            "in"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Nothing before next, last, this, tomorrow. Next Monday, not on next Monday.",
          "sub": "Không dùng giới từ trước next, last, this, tomorrow: next Monday.",
          "keys": [
            "Không dùng giới từ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "For a deadline: by with a date, or within with a number of days.",
          "sub": "Hạn chót: by kèm ngày cụ thể, hoặc within kèm số ngày.",
          "keys": [
            "by kèm ngày cụ thể"
          ]
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s18",
      "module": "BRK-04",
      "data": {
        "title": "“Đến thứ Sáu” trong email",
        "labels": [
          "Sai",
          "Đúng"
        ],
        "wrong": "Please send me the figures until Friday",
        "right": "Please send me the figures by Friday",
        "wrongIllus": "repeat-button",
        "rightIllus": "spiral-calendar"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Until Friday keeps going: figures every day, until Friday?",
          "sub": "Until là kéo dài: gửi số liệu đều đặn tới thứ Sáu?",
          "keys": [
            "kéo dài"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A deadline takes by. By Friday.",
          "sub": "Hạn chót thì dùng by: by Friday.",
          "keys": [
            "by"
          ]
        }
      ],
      "ref": "p18"
    },
    {
      "id": "s19",
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
            "id": "h-un",
            "t": "text",
            "text": "open until six · kéo dài",
            "x": 3996,
            "y": 1690,
            "size": 48,
            "at": "l1:open",
            "hl": [
              {
                "text": "until",
                "at": "l1:until"
              }
            ]
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Hạn chót: by · kéo dài: until",
            "x": 4836,
            "y": 1780,
            "size": 50,
            "at": "l1:so",
            "color": "accent",
            "hl": [
              {
                "text": "by",
                "at": "l1:deadline"
              },
              {
                "text": "until",
                "at": "l1:ongoing"
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
          "say": "The office is open until six. So: a deadline takes by, something ongoing takes until.",
          "sub": "The office is open until six. Rút ra: hạn chót dùng by, kéo dài dùng until.",
          "keys": [
            "hạn chót dùng by"
          ]
        }
      ],
      "ref": "p18,p19"
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
            "at": "l2",
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
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑥ Thứ Sáu · Sam thăm xưởng",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:friday"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "point"
                },
                {
                  "id": "sam",
                  "side": "right"
                }
              ],
              "props": [
                "factory",
                "camera-with-flash"
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
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:factory",
            "caption": "Thứ Sáu 10:00 · dây chuyền mới",
            "icon": "factory"
          },
          {
            "id": "i-tag",
            "t": "text",
            "text": "…, don't you?",
            "x": 5964,
            "y": 1250,
            "size": 52,
            "at": "l1:flips",
            "hl": [
              {
                "text": "don't you",
                "at": "l1:flips"
              }
            ]
          },
          {
            "id": "i-no",
            "t": "text",
            "text": "Chưa nhận → No, I didn't",
            "x": 5964,
            "y": 1330,
            "size": 50,
            "at": "l4:facts",
            "color": "accent",
            "hl": [
              {
                "text": "No, I didn't",
                "at": "l4:facts"
              }
            ]
          },
          {
            "id": "i-up",
            "t": "text",
            "text": "Không chắc: lên giọng ↗",
            "x": 5964,
            "y": 1410,
            "size": 48,
            "at": "l4:unsure"
          },
          {
            "id": "i-dh",
            "t": "text",
            "text": "don't have to = không bắt buộc",
            "x": 5964,
            "y": 1540,
            "size": 44,
            "at": "l7:necessary",
            "color": "coral",
            "hl": [
              {
                "text": "không bắt buộc",
                "at": "l7:necessary"
              }
            ]
          },
          {
            "id": "i-mn",
            "t": "text",
            "text": "mustn't = cấm",
            "x": 5964,
            "y": 1620,
            "size": 56,
            "at": "l7:mustn't",
            "color": "accent",
            "hl": [
              {
                "text": "cấm",
                "at": "l7:mustn't"
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
          "say": "Friday, Sam tours the factory. A question tag just flips the helper verb: you work here, don't you?",
          "sub": "Thứ Sáu, Sam thăm xưởng. Câu hỏi đuôi chỉ đổi chiều trợ động từ: You work in finance, don't you?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "You didn't receive my email, did you?",
          "sub": "Chị chưa nhận email của tôi, phải không?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "No, I didn't.",
          "sub": "Đúng, tôi chưa nhận.",
          "face": "neutral"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Answer by the facts, not the question. Unsure yourself? Let your voice go up.",
          "sub": "Trả lời theo sự thật, không theo cách hỏi. Mình không chắc thì lên giọng ở đuôi.",
          "keys": [
            "theo sự thật"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "This is our new line. You don't have to take photos here.",
          "sub": "Đây là dây chuyền mới. Ở đây chị không cần chụp ảnh đâu.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "sam",
          "say": "Great. I'll take a few anyway!",
          "sub": "Tuyệt. Tôi cứ chụp vài tấm nhé!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Don't have to is not necessary, not forbidden. To ban it: you mustn't take photos here.",
          "sub": "Don't have to là không bắt buộc, không phải cấm. Muốn cấm: Please don't, hoặc You mustn't take photos here.",
          "keys": [
            "không bắt buộc"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l6",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "p20,p21,p22,p23"
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
            "id": "i-m",
            "t": "text",
            "text": "can · could · should · must",
            "x": 5964,
            "y": 1710,
            "size": 50,
            "at": "l1:can"
          },
          {
            "id": "i-cy",
            "t": "text",
            "text": "Could you … ? + lý do",
            "x": 6804,
            "y": 1780,
            "size": 52,
            "at": "l1:could you",
            "color": "accent",
            "hl": [
              {
                "text": "Could you",
                "at": "l1:could you"
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
          "say": "Can, could, should, must: able, polite, advice, required. With partners, swap must for could you.",
          "sub": "Can là làm được, could là nhờ lịch sự, should là nên, must là phải. Với đối tác, thay must bằng could you.",
          "keys": [
            "could you"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Plus a reason. Could you send the documents by Monday? We need them for the contract.",
          "sub": "Kèm lý do: Could you please send the documents by Monday? We need them to prepare the contract."
        }
      ],
      "ref": "p21"
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
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Thứ Sáu chiều · So & kể lại",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:suppliers"
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
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "balance-scale"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:afternoon",
            "caption": "Thứ Sáu 16:00 · báo lại sếp",
            "icon": "balance-scale"
          },
          {
            "id": "j-mc",
            "t": "text",
            "text": "more cheaper",
            "x": 7932,
            "y": 1250,
            "size": 48,
            "at": "l1:never",
            "color": "muted"
          },
          {
            "id": "j-mcx",
            "t": "strike",
            "over": "j-mc",
            "at": "l1:never+300"
          },
          {
            "id": "j-ch",
            "t": "text",
            "text": "→ cheaper",
            "x": 8272,
            "y": 1250,
            "size": 48,
            "at": "l1:never+600",
            "color": "accent",
            "hl": [
              {
                "text": "cheaper",
                "at": "l1:never+600"
              }
            ]
          },
          {
            "id": "j-gap",
            "t": "text",
            "text": "slightly · much · twice as",
            "x": 7932,
            "y": 1330,
            "size": 48,
            "at": "l2:slightly",
            "hl": [
              {
                "text": "twice as",
                "at": "l2:twice"
              }
            ]
          },
          {
            "id": "j-r",
            "t": "text",
            "text": "will → would",
            "x": 7932,
            "y": 1430,
            "size": 52,
            "at": "l3:would",
            "hl": [
              {
                "text": "would",
                "at": "l3:would"
              }
            ]
          },
          {
            "id": "j-tm",
            "t": "text",
            "text": "tomorrow → ngày cụ thể",
            "x": 7932,
            "y": 1510,
            "size": 48,
            "at": "l3:time words",
            "color": "accent"
          },
          {
            "id": "j-v3",
            "t": "text",
            "text": "told · asked · suggested",
            "x": 7932,
            "y": 1590,
            "size": 48,
            "at": "l4:order"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Friday afternoon, Thảo compares two suppliers. Short adjectives take -er, long ones more, never both.",
          "sub": "Chiều thứ Sáu, Thảo so hai nhà cung cấp. Tính từ ngắn thêm -er, dài dùng more, không dùng cả hai: cheaper.",
          "keys": [
            "không dùng cả hai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Show the gap: slightly, much, twice as expensive as, half as much as.",
          "sub": "Nói rõ chênh bao nhiêu: slightly, much, twice as expensive as, half as much as."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Passing on a client's words: tense back, pronouns, time words. I'll call you becomes he said he would call me.",
          "sub": "Chuyển lời: lùi thì, đổi đại từ, đổi từ chỉ thời gian; an toàn nhất là thay tomorrow bằng ngày cụ thể.",
          "keys": [
            "lùi thì"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Keep the weight: told us to is an order, asked us to a request, suggested a suggestion.",
          "sub": "Giữ đúng sức nặng: told us to là lệnh, asked us to là nhờ, suggested là gợi ý.",
          "keys": [
            "Giữ đúng sức nặng"
          ]
        }
      ],
      "ref": "p24,p25"
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
          },
          {
            "at": "l2",
            "fit": [
              "j-v2"
            ],
            "zoom": 1.2,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-v2",
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
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "e-mail",
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1",
            "caption": "Thứ Hai tuần sau · 8:30",
            "icon": "sunrise"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1690,
            "w": 46,
            "h": 46,
            "at": "l3:third",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1672,
            "size": 58,
            "at": "l3:third+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "s · yesterday · if",
            "x": 7997,
            "y": 1682,
            "size": 44,
            "at": "l3:third+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1760,
            "w": 46,
            "h": 46,
            "at": "l3:article",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1742,
            "size": 58,
            "at": "l3:article+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "mạo từ · by · could you",
            "x": 7997,
            "y": 1752,
            "size": 44,
            "at": "l3:article+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Next Monday. Eight thirty. Same desk, same coffee, same Thảo.",
          "sub": "Thứ Hai tuần sau. Tám rưỡi. Vẫn bàn ấy, ly cà phê ấy, Thảo ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'm working on the quotation. I'll send it by Friday.",
          "sub": "I'm working on the quotation. I'll send it by Friday.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Before send, six boxes: third person s, yesterday, if, an article, by, could you.",
          "sub": "Trước khi gửi, soát sáu ô: chữ s ngôi ba, quá khứ với yesterday, vế if, mạo từ, by thay until, could you."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Learn to wrap, learn to open. Thảo opens with no stumbling.",
          "sub": "“Học gói, học mở.” Lần này Thảo mở lời không vấp.",
          "keys": [
            "Học gói, học mở"
          ]
        }
      ],
      "ref": "p27"
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
            "at": "l2",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l4",
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
            "x": 4696,
            "y": 170,
            "at": "l2:tenses"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8632,
            "y": 170,
            "at": "l3:conditionals"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1260,
            "at": "l4:small"
          },
          {
            "id": "z-ord",
            "t": "text",
            "text": "Học theo thứ tự, nói to",
            "x": 2028,
            "y": 720,
            "size": 32,
            "at": "l5:order",
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
          "say": "So: about ten points, in three parts.",
          "sub": "Tóm lại: khoảng mười điểm, chia ba phần.",
          "keys": [
            "ba phần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One, tenses to report work.",
          "sub": "Một, các thì để báo việc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two, conditionals and the passive.",
          "sub": "Hai, câu điều kiện và bị động."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three, the small words and tone.",
          "sub": "Ba, chữ nhỏ và giọng điệu."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Study in that order, and say sentences about your own work out loud.",
          "sub": "Học đúng thứ tự ấy, đặt câu bằng chuyện công việc của mình và nói to.",
          "keys": [
            "nói to"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p26"
    },
    {
      "id": "s43",
      "module": "QUIZ-01",
      "ref": "questions[26]",
      "data": {
        "q": "You need the figures no later than Friday, how should you write it?",
        "options": [
          "Write by Friday, since by shows the latest time the figures can arrive",
          "Write until Friday, since until is the usual way to give a deadline",
          "Write in Friday, since in is used for days and other short periods"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "spiral-calendar",
        "why": "By là không muộn hơn mốc đó. Until là kéo dài liên tục, dễ hiểu thành gửi đều tới thứ Sáu."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You need the figures no later than Friday, how should you write it?",
          "sub": "Bạn cần số liệu muộn nhất là thứ Sáu, nên viết thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Write by Friday, since by shows the latest time the figures can arrive.",
          "sub": "Viết by Friday, vì by chỉ mốc muộn nhất số liệu có thể đến."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s44",
      "module": "END-05",
      "data": {
        "text": "Mười điểm, ba phần",
        "sub": "Bốn mươi câu hỏi đang chờ bạn"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Open your last email, check the six boxes, then try the forty questions below!",
          "sub": "Mở email gần nhất, soát sáu ô, rồi thử bốn mươi câu bên dưới nhé!"
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s23"
  }
};
