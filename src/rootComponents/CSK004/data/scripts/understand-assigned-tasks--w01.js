// Kịch bản video W lần 3 (#110) — "Hiểu đúng việc được giao: hỏi lại thế nào cho khéo" · chuỗi "Ba tháng đầu ở chỗ làm mới"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "understand-assigned-tasks--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "new-employees",
    "slug": "understand-assigned-tasks",
    "door": "ky-nang",
    "level": "B1",
    "title": "Hiểu đúng việc được giao: hỏi lại thế nào cho khéo",
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
  "notes": "#145 dựng theo hạt nhân #136 + biến thể #144 (bang-trang-kit): Đét đứng trái + một bảng trắng 10 ô theo MỘT việc Cô Hoa giao Thảo trong một tuần (bài giới thiệu dịch vụ mới cho trang web — lấy từ 📌 p23) — A mở 30 trang slide của Dũng (p3–p4), B 9:00 nhận việc + câu hỏi chính (intro), BRK-08 dòng thời gian tuần, C ① 9:00 vì sao hiểu sai (p1–p2), D ② 9:02 năm điều (p5–p8), E ③ 9:05 nhắc lại, chọn lúc, đề xuất (p9–p12), Khoan đã! Dũng “Dạ vâng” (p13–p14, toàn màn), F ④ 9:10 tin xác nhận (SCENE-02 trong khung, p15, p17), G hai bản không nhắn/có nhắn (SCENE-03, p16, p18), BRK-10 “Lời nói gió bay, tin nhắn ở lại” (p19), H ⑤ thứ Ba nháp sớm (p20, p23), BRK-04 cách A/B (p23–p24), I ⑥ thứ Tư đổi yêu cầu + thứ Năm báo trễ kèm phương án (p21–p22), J ⑦ thứ Sáu 9:00 nộp trọn (p25–p27) khép vòng với thứ Hai 9:00 cùng bàn. Đổi tên theo w145/_series/new-employees.md: Trang (p3) → Dũng (Dũng kể tháng đầu của mình); Long (p13) → Dũng; Mai (p18), Kim (p23) → Thảo; sếp/trưởng nhóm → Cô Hoa. p22 ví dụ ‘số liệu miền Nam chờ kho’ đổi thành ‘ảnh chờ bên thiết kế’ cho khớp việc viết bài, giữ cấu trúc báo sớm + phương án gửi trước phần đã xong. Không có số liệu ngoài bài. Câu đố questions[14]. Bản trước (W lần 3, #110): w145/bak/understand-assigned-tasks--w01.js.",
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
            "id": "a-30",
            "t": "text",
            "text": "30 trang",
            "x": 60,
            "y": 110,
            "size": 150,
            "at": "l1:thirty",
            "color": "accent",
            "hl": [
              {
                "text": "30 trang",
                "at": "l1:slides"
              }
            ]
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "hai đêm thức trắng",
            "x": 70,
            "y": 310,
            "size": 54,
            "at": "l1:sleepless"
          },
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
                  "id": "dung",
                  "side": "center",
                  "pose": "shrug",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "laptop"
              ]
            },
            "at": "l2",
            "caption": "Tháng đầu của Dũng",
            "icon": "studio-microphone"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "Sếp cần: 3 trang, theo mẫu",
            "x": 70,
            "y": 410,
            "size": 50,
            "at": "l4:three",
            "color": "coral",
            "hl": [
              {
                "text": "3 trang",
                "at": "l4:three"
              }
            ]
          },
          {
            "id": "a-rule",
            "t": "text",
            "text": "Hỏi rõ cho ai, rồi hãy làm",
            "x": 60,
            "y": 530,
            "size": 54,
            "at": "l5:who",
            "color": "accent",
            "hl": [
              {
                "text": "cho ai",
                "at": "l5:who"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Theo bài “Hiểu đúng việc được giao” · nguồn: SHRM (Bauer 2010), HBR (Sehgal 2016), MIT Sloan, SPSP (Buehler)",
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
          "say": "Thirty slides. Two sleepless nights. Custom effects on every page.",
          "sub": "Ba mươi trang slide. Hai đêm thức trắng. Trang nào cũng có hiệu ứng riêng.",
          "keys": [
            "Ba mươi trang slide"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Dũng, from the next desk. That was his first month.",
          "sub": "Đây là Dũng, ngồi bàn bên. Đó là tháng đầu của anh ấy."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "The boss said: make a slide on the new product. So I made thirty.",
          "sub": "Sếp bảo: làm cái slide giới thiệu sản phẩm mới. Thế là anh làm ba mươi trang.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "She needed three, in the company template, for a client the next morning.",
          "sub": "Sếp chỉ cần ba trang theo mẫu công ty, chèn vào buổi gặp khách sáng hôm sau.",
          "face": "sad",
          "keys": [
            "ba trang theo mẫu công ty"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Ask who it is for, then decide how much to make.",
          "sub": "Hỏi rõ cho ai, rồi hãy làm bao nhiêu.",
          "keys": [
            "Hỏi rõ cho ai"
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
      "ref": "p3,p4"
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
            "at": 150,
            "fit": "B",
            "ms": 900
          },
          {
            "at": "l2",
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
            "id": "b-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "point",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "laptop",
                "notebook"
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai · 9:00 · bàn của Thảo",
            "icon": "alarm-clock"
          },
          {
            "id": "b-q",
            "t": "text",
            "text": "Hỏi lại = chậm hiểu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l5:slow",
            "hl": [
              {
                "text": "chậm hiểu",
                "at": "l5:slow"
              }
            ]
          },
          {
            "id": "b-note",
            "t": "text",
            "text": "1 dòng ghi chú, đầy câu hỏi",
            "x": 2028,
            "y": 170,
            "size": 44,
            "at": "l4:one line",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Now meet Thảo, new on the content team. Monday, nine a.m.",
          "sub": "Còn đây là Thảo, người mới nhóm nội dung. Thứ Hai, chín giờ sáng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And Cô Hoa, team leader: two minutes, one task, gone.",
          "sub": "Và cô Hoa, trưởng nhóm: hai phút, một việc, đi họp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, write the website intro for our new service. As usual. Bye!",
          "sub": "Thảo, viết bài giới thiệu dịch vụ mới cho trang web nhé. Như mọi khi. Cô đi đây!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "One line of notes, and a head full of questions.",
          "sub": "Một dòng ghi chú, và cả đống câu hỏi trong đầu.",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "If I ask back, will she think I'm slow? If I don't, I might get it wrong.",
          "sub": "Hỏi lại thì sợ bị nghĩ là chậm hiểu. Không hỏi thì sợ làm sai.",
          "face": "worried",
          "keys": [
            "chậm hiểu"
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
            "fit": "B",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: chậm hiểu",
            "x": 2028,
            "y": 260,
            "size": 50,
            "at": "l1:slow",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l1:careful"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: cẩn thận, chuyên nghiệp",
            "x": 2028,
            "y": 335,
            "size": 50,
            "at": "l1:careful",
            "color": "accent",
            "hl": [
              {
                "text": "chuyên nghiệp",
                "at": "l1:professional"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "① hỏi đủ năm điều",
            "x": 2058,
            "y": 420,
            "size": 46,
            "at": "l2:five"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "② nhắc lại bằng lời mình",
            "x": 2058,
            "y": 485,
            "size": 46,
            "at": "l2:repeat"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "③ nhắn xác nhận",
            "x": 2058,
            "y": 550,
            "size": 46,
            "at": "l3:confirming",
            "hl": [
              {
                "text": "nhắn xác nhận",
                "at": "l3:confirming"
              }
            ]
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "④ gửi nháp sớm",
            "x": 2058,
            "y": 615,
            "size": 46,
            "at": "l3:draft",
            "hl": [
              {
                "text": "nháp sớm",
                "at": "l3:draft"
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
          "say": "Asked the right way, it doesn't look slow. It looks careful and professional.",
          "sub": "Hỏi lại đúng cách không làm bạn trông chậm. Mà trông cẩn thận, chuyên nghiệp.",
          "keys": [
            "cẩn thận, chuyên nghiệp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The secret: ask five things, then repeat it in your own words.",
          "sub": "Bí quyết: hỏi đủ năm điều, rồi nhắc lại bằng lời của mình.",
          "keys": [
            "hỏi đủ năm điều"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Send a confirming message, and share a draft before anyone asks.",
          "sub": "Nhắn xác nhận, và gửi bản nháp trước khi bị hỏi.",
          "keys": [
            "gửi bản nháp"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Một việc, một tuần",
        "current": 0,
        "points": [
          {
            "label": "T2 9:00",
            "sub": "Nhận việc",
            "illus": "alarm-clock"
          },
          {
            "label": "9:05",
            "sub": "Nhắc lại",
            "illus": "speech-balloon"
          },
          {
            "label": "9:10",
            "sub": "Nhắn xác nhận",
            "illus": "mobile-phone"
          },
          {
            "label": "Thứ Ba",
            "sub": "Gửi nháp",
            "illus": "memo"
          },
          {
            "label": "Thứ Sáu",
            "sub": "Nộp việc",
            "illus": "check-mark-button"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One task, one week. Monday morning, a confirmation, a draft.",
          "sub": "Một việc, một tuần. Sáng thứ Hai, tin xác nhận, bản nháp."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "And Friday, delivery. Let's go.",
          "sub": "Và thứ Sáu, nộp việc. Bắt đầu nào."
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
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 9:00: vì sao hay hiểu sai?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:nine"
          },
          {
            "id": "c-i1",
            "t": "illus",
            "name": "speech-balloon",
            "x": 3996,
            "y": 150,
            "size": 90,
            "at": "l2:shortcuts"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Người giao: nói tắt",
            "x": 4106,
            "y": 160,
            "size": 52,
            "at": "l2:shortcuts",
            "hl": [
              {
                "text": "nói tắt",
                "at": "l2:shortcuts"
              }
            ]
          },
          {
            "id": "c-1b",
            "t": "text",
            "text": "bỏ qua điều “ai cũng biết”",
            "x": 4106,
            "y": 235,
            "size": 44,
            "at": "l2:everyone",
            "color": "muted"
          },
          {
            "id": "c-gap",
            "t": "text",
            "text": "Khoảng trống → lấp bằng đoán",
            "x": 3996,
            "y": 330,
            "size": 50,
            "at": "l3:guessing",
            "color": "coral",
            "hl": [
              {
                "text": "đoán",
                "at": "l3:guessing"
              }
            ]
          },
          {
            "id": "c-i2",
            "t": "illus",
            "name": "person-bowing",
            "x": 3996,
            "y": 430,
            "size": 90,
            "at": "l4:nod"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Người mới: gật cho nhanh",
            "x": 4106,
            "y": 445,
            "size": 52,
            "at": "l4:nod"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "→ làm chăm, nhưng sai thứ",
            "x": 3996,
            "y": 545,
            "size": 50,
            "at": "l5:hard",
            "color": "coral"
          },
          {
            "id": "c-asu",
            "t": "text",
            "text": "“Như mọi khi” = ?",
            "x": 4816,
            "y": 160,
            "size": 70,
            "at": "l1:usual",
            "color": "accent",
            "hl": [
              {
                "text": "Như mọi khi",
                "at": "l1:usual"
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
          "say": "Stop one: nine a.m. As usual? Thảo has no idea what usual means.",
          "sub": "Chặng một: chín giờ. “Như mọi khi”? Thảo đâu biết mọi khi là thế nào.",
          "keys": [
            "Như mọi khi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Cô Hoa has done this many times, so she talks in shortcuts, skipping what everyone knows.",
          "sub": "Cô Hoa làm việc này nhiều lần rồi, nên nói tắt, bỏ qua điều “ai cũng biết”.",
          "keys": [
            "nói tắt"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Thảo doesn't know those things yet. So the gaps get filled by guessing.",
          "sub": "Thảo thì chưa biết. Thế là khoảng trống được lấp bằng đoán.",
          "keys": [
            "lấp bằng đoán"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And new people nod fast, to look smart.",
          "sub": "Mà người mới lại hay gật cho nhanh, vì ngại."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Result: working hard on what you understood, not what they needed.",
          "sub": "Kết quả: làm rất chăm cho thứ mình hiểu, chứ không phải thứ người ta cần.",
          "keys": [
            "thứ người ta cần"
          ]
        }
      ],
      "ref": "p1,p2"
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
            "text": "② 9:02: hỏi đủ năm điều",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:five",
            "hl": [
              {
                "text": "năm điều",
                "at": "l1:five things"
              }
            ]
          },
          {
            "id": "d-n0",
            "t": "text",
            "text": "1. Mục đích",
            "x": 5964,
            "y": 150,
            "size": 50,
            "at": "l2:purpose",
            "color": "accent",
            "hl": [
              {
                "text": "Mục đích",
                "at": "l4:purpose"
              }
            ]
          },
          {
            "id": "d-d0",
            "t": "text",
            "text": "để làm gì, ai dùng?",
            "x": 6324,
            "y": 158,
            "size": 42,
            "at": "l2:purpose+300",
            "color": "muted"
          },
          {
            "id": "d-n1",
            "t": "text",
            "text": "2. Sản phẩm",
            "x": 5964,
            "y": 230,
            "size": 50,
            "at": "l2:product"
          },
          {
            "id": "d-d1",
            "t": "text",
            "text": "nộp gì, dạng nào?",
            "x": 6324,
            "y": 238,
            "size": 42,
            "at": "l2:product+300",
            "color": "muted"
          },
          {
            "id": "d-n2",
            "t": "text",
            "text": "3. Hạn chót",
            "x": 5964,
            "y": 310,
            "size": 50,
            "at": "l3:deadline"
          },
          {
            "id": "d-d2",
            "t": "text",
            "text": "ngày nào, giờ nào?",
            "x": 6324,
            "y": 318,
            "size": 42,
            "at": "l3:deadline+300",
            "color": "muted"
          },
          {
            "id": "d-n3",
            "t": "text",
            "text": "4. Ưu tiên",
            "x": 5964,
            "y": 390,
            "size": 50,
            "at": "l3:priority"
          },
          {
            "id": "d-d3",
            "t": "text",
            "text": "trước hay sau việc khác?",
            "x": 6324,
            "y": 398,
            "size": 42,
            "at": "l3:priority+300",
            "color": "muted"
          },
          {
            "id": "d-n4",
            "t": "text",
            "text": "5. Nguồn",
            "x": 5964,
            "y": 470,
            "size": 50,
            "at": "l3:source"
          },
          {
            "id": "d-d4",
            "t": "text",
            "text": "lấy ở đâu, hỏi ai?",
            "x": 6324,
            "y": 478,
            "size": 42,
            "at": "l3:source+300",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two: nine-oh-two. Before Cô Hoa vanishes, five things to ask.",
          "sub": "Chặng hai: chín giờ hai phút. Trước khi cô Hoa biến mất, hỏi đủ năm điều.",
          "keys": [
            "năm điều"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Purpose: what is it for, who uses it? Product: what do you hand in, in what form?",
          "sub": "Mục đích: để làm gì, ai dùng? Sản phẩm: nộp cái gì, dạng nào?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Deadline, down to the hour. Priority, against your other work. And source: where to look, who to ask.",
          "sub": "Hạn chót, đến từng giờ. Ưu tiên so với việc đang làm. Và nguồn: lấy ở đâu, hỏi ai."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Of the five, purpose is king. Know it, and you answer the small questions yourself.",
          "sub": "Trong năm điều, mục đích là vua. Biết nó, bạn tự trả lời được nhiều câu nhỏ.",
          "keys": [
            "mục đích là vua"
          ]
        }
      ],
      "ref": "p5,p7,p8"
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
            "at": "l1",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4:weekend",
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
                "laptop"
              ]
            },
            "at": "l1",
            "caption": "9:02 · ở cửa phòng họp",
            "icon": "speech-balloon"
          },
          {
            "id": "d-w",
            "t": "text",
            "text": "“Cuối tuần” = T6 chiều? T2 sáng?",
            "x": 5964,
            "y": 580,
            "size": 46,
            "at": "l5:weekend",
            "color": "coral",
            "hl": [
              {
                "text": "Cuối tuần",
                "at": "l5:weekend"
              }
            ]
          },
          {
            "id": "d-w2",
            "t": "text",
            "text": "→ hỏi đến giờ",
            "x": 5964,
            "y": 650,
            "size": 50,
            "at": "l5:hour",
            "color": "accent",
            "hl": [
              {
                "text": "đến giờ",
                "at": "l5:hour"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Cô Hoa, what will this article be used for?",
          "sub": "Cô ơi, bài này sẽ dùng vào việc gì ạ?",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "The new service page. Our customers are young.",
          "sub": "Trang dịch vụ mới. Khách của mình trẻ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "A document, or straight on the page? Is there an old one I can look at?",
          "sub": "Cô cần dạng tài liệu hay đăng thẳng lên trang ạ? Có bài mẫu nào trước đây em xem được không ạ?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "A document. Check last year's folder. By the weekend.",
          "sub": "Tài liệu. Xem thư mục năm ngoái. Cuối tuần nhé.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The weekend? For one person, Friday afternoon. For another, Monday morning. Ask the hour.",
          "sub": "Cuối tuần? Với người này là chiều thứ Sáu, người kia là sáng thứ Hai. Hỏi đến giờ.",
          "keys": [
            "Hỏi đến giờ"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "Friday, nine a.m.",
          "sub": "Chín giờ sáng thứ Sáu.",
          "face": "happy"
        }
      ],
      "ref": "p6,p8"
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
            "text": "③ 9:05: nhắc lại một câu",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:nine",
            "hl": [
              {
                "text": "nhắc lại",
                "at": "l1:repeats"
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
              ]
            },
            "at": "l1",
            "caption": "9:05 · trước giờ họp",
            "icon": "speech-balloon"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "“Em tóm lại xem đúng chưa…”",
            "x": 7932,
            "y": 160,
            "size": 46,
            "at": "l2:summarize"
          },
          {
            "id": "e-1b",
            "t": "text",
            "text": "… đúng không ạ?",
            "x": 7932,
            "y": 230,
            "size": 52,
            "at": "l2:right",
            "color": "accent",
            "hl": [
              {
                "text": "đúng không ạ",
                "at": "l2:right"
              }
            ]
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "→ sếp thấy ngay chỗ lệch",
            "x": 7932,
            "y": 310,
            "size": 46,
            "at": "l3:spot",
            "hl": [
              {
                "text": "chỗ lệch",
                "at": "l3:off"
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
          "say": "Stop three: nine-oh-five. Thảo repeats it in her own words.",
          "sub": "Chặng ba: chín giờ năm phút. Thảo nhắc lại bằng lời của mình.",
          "keys": [
            "nhắc lại bằng lời của mình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Let me summarize: a service intro for young customers, as a document, by Friday nine a.m. Is that right?",
          "sub": "Em tóm lại xem đúng chưa: bài giới thiệu dịch vụ cho khách trẻ, dạng tài liệu, trước chín giờ sáng thứ Sáu. Đúng không ạ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Repeating lets the boss spot instantly where you are off.",
          "sub": "Nhắc lại giúp sếp thấy ngay chỗ bạn hiểu lệch.",
          "keys": [
            "chỗ bạn hiểu lệch"
          ]
        }
      ],
      "ref": "p9"
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
          }
        ],
        "items": [
          {
            "id": "e-i3",
            "t": "illus",
            "name": "hourglass-not-done",
            "x": 7932,
            "y": 400,
            "size": 80,
            "at": "l1:hurry"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Sếp vội? Xin năm phút sau",
            "x": 8032,
            "y": 410,
            "size": 46,
            "at": "l1:hurry",
            "hl": [
              {
                "text": "năm phút",
                "at": "l2:five minutes"
              }
            ]
          },
          {
            "id": "e-i4",
            "t": "illus",
            "name": "envelope",
            "x": 7932,
            "y": 500,
            "size": 80,
            "at": "l3:bundle"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "Gom câu hỏi, hỏi một lần",
            "x": 8032,
            "y": 510,
            "size": 46,
            "at": "l3:bundle",
            "hl": [
              {
                "text": "hỏi một lần",
                "at": "l3:once"
              }
            ]
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "“Vậy em phải làm thế nào?”",
            "x": 7932,
            "y": 610,
            "size": 42,
            "at": "l4:how",
            "color": "muted"
          },
          {
            "id": "e-5x",
            "t": "strike",
            "over": "e-5",
            "at": "l5:plan"
          },
          {
            "id": "e-6",
            "t": "text",
            "text": "→ “Em định thế này, được không?”",
            "x": 7932,
            "y": 680,
            "size": 42,
            "at": "l5:plan",
            "color": "accent",
            "hl": [
              {
                "text": "Em định",
                "at": "l5:plan"
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
          "say": "Is she in a hurry? Don't grab her sleeve on the way to a meeting.",
          "sub": "Sếp đang vội? Đừng níu áo người ta trên đường đi họp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I have a few questions to get this right. Do you have five minutes today?",
          "sub": "Em có vài câu để làm cho đúng, hôm nay cô có năm phút lúc nào không ạ?",
          "keys": [
            "năm phút"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Bundle questions, ask once. Three in one message beat three messages.",
          "sub": "Gom câu hỏi, hỏi một lần. Ba câu một tin dễ trả lời hơn ba tin rời."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And skip: so how should I do it? That throws the task back.",
          "sub": "Và tránh câu: “Vậy em phải làm thế nào ạ?” Thế là đẩy việc ngược lại."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try: here is my plan, is that okay? She just nods, or tweaks it.",
          "sub": "Thay bằng: “Em định làm thế này, cô thấy được không ạ?” Người nghe chỉ cần gật, hoặc chỉnh chút.",
          "keys": [
            "Em định làm thế này"
          ]
        }
      ],
      "ref": "p10,p11,p12"
    },
    {
      "id": "s09",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Cùng sáng · bàn bên",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Chưa chắc mà vẫn “Dạ vâng”",
          "why": "Làm hai ngày mới biết chỉ cần phía Bắc, tách theo nhóm sản phẩm; làm lại gần hết.",
          "rule": "Nhắc lại một câu, đỡ sửa cả tuần"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Boss says: put together last month's sales numbers.",
          "sub": "Sếp nhắn: “Em tổng hợp số liệu bán hàng tháng trước nhé.”",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "All branches, I guess. Just say yes.",
          "sub": "Chắc tất cả chi nhánh. Cứ “Dạ vâng”.",
          "face": "neutral",
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
          "say": "Two days later: only the North, by product group. Redo almost everything.",
          "sub": "Hai ngày sau mới biết: chỉ cần phía Bắc, tách theo nhóm sản phẩm. Làm lại gần hết.",
          "keys": [
            "Làm lại gần hết"
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
          "who": "dung",
          "say": "So: all branches, by week, by Thursday. Is that right?",
          "sub": "Em hiểu là tất cả chi nhánh, chia theo tuần, gửi trước thứ Năm. Đúng chưa ạ?",
          "phase": "redo",
          "face": "thinking"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "The boss fixes one line. Repeat one sentence, save a week.",
          "sub": "Sếp chỉ sửa một dòng. Nhắc lại một câu, đỡ sửa cả tuần.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb",
          "keys": [
            "Nhắc lại một câu, đỡ sửa cả tuần"
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
            "at": "l4",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 9:10: nhắn xác nhận",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:nine",
            "hl": [
              {
                "text": "nhắn xác nhận",
                "at": "l1:message"
              }
            ]
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "label": "Tin xác nhận",
              "actor": {
                "id": "thao",
                "side": "left"
              },
              "contact": {
                "name": "Cô Hoa",
                "illus": "woman-office-worker"
              },
              "messages": [
                {
                  "from": "me",
                  "text": "Em tóm lại việc cô giao: bài giới thiệu dịch vụ mới, cho khách trẻ, dạng tài liệu.",
                  "at": "l2"
                },
                {
                  "from": "me",
                  "text": "Hạn: 9:00 sáng thứ Sáu. Nếu em hiểu sai chỗ nào cô nhắn em nhé.",
                  "at": "l3"
                }
              ]
            },
            "at": "l1",
            "caption": "9:10 · một phút",
            "icon": "mobile-phone"
          },
          {
            "id": "f-i",
            "t": "illus",
            "name": "mobile-phone",
            "x": 60,
            "y": 1240,
            "size": 90,
            "at": "l1:message"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Một phút → cùng một phiên bản",
            "x": 170,
            "y": 1255,
            "size": 44,
            "at": "l4:version",
            "hl": [
              {
                "text": "cùng một phiên bản",
                "at": "l4:same version"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Giọng nhẹ: để làm đúng,",
            "x": 60,
            "y": 1370,
            "size": 46,
            "at": "l5:gentle"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "không phải để bắt lỗi ai",
            "x": 60,
            "y": 1435,
            "size": 46,
            "at": "l5:evidence",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four: nine-ten. Cô Hoa is in her meeting. Thảo sends one short message.",
          "sub": "Chặng bốn: chín giờ mười. Cô Hoa đang họp. Thảo gửi một tin ngắn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "My summary of the task: a new service intro, for young customers, as a document.",
          "sub": "Em tóm lại việc cô giao: bài giới thiệu dịch vụ mới, cho khách trẻ, dạng tài liệu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Deadline: Friday, nine a.m. If I got anything wrong, please tell me.",
          "sub": "Hạn: chín giờ sáng thứ Sáu. Nếu em hiểu sai chỗ nào cô nhắn em nhé."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One minute. Now both of them remember the same version.",
          "sub": "Mất một phút. Giờ hai bên nhớ cùng một phiên bản.",
          "keys": [
            "cùng một phiên bản"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Keep it gentle. It's for doing it right, not for collecting evidence.",
          "sub": "Giữ giọng nhẹ nhàng. Để mình làm đúng, không phải giữ bằng chứng bắt lỗi ai."
        }
      ],
      "ref": "p15,p17"
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
            "at": "a1",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "Vì sao phải nhắn? Hai bản",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:why"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
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
                "label": "Không nhắn lại",
                "ok": false
              },
              "right": {
                "label": "Có tin xác nhận",
                "ok": true
              }
            },
            "at": "l1:versions",
            "caption": "Tuần sau · mẫu cũ hay mẫu mới?",
            "icon": "speech-balloon"
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "A: lời nói vs lời nói",
            "x": 2028,
            "y": 1250,
            "size": 48,
            "at": "a3:nobody",
            "color": "coral"
          },
          {
            "id": "g-a2",
            "t": "text",
            "text": "→ làm lại, ngượng mấy hôm",
            "x": 2028,
            "y": 1325,
            "size": 44,
            "at": "a3:redo",
            "color": "muted"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "B: cùng xem lại tin nhắn",
            "x": 2028,
            "y": 1420,
            "size": 48,
            "at": "b2:look",
            "color": "accent",
            "hl": [
              {
                "text": "xem lại tin nhắn",
                "at": "b2:message"
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
          "say": "Why bother? A different task, a week later. Two versions.",
          "sub": "Nhắn làm gì? Một việc khác, tuần sau. Hai phiên bản."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "hoa",
          "say": "Why didn't you use the new template?",
          "sub": "Sao em không dùng mẫu mới?",
          "phase": "a"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "thao",
          "say": "But you told me the old one!",
          "sub": "Cô dặn mẫu cũ mà!",
          "phase": "a",
          "face": "worried"
        },
        {
          "id": "a3",
          "lang": "en",
          "who": "det",
          "say": "She remembers differently. Nobody can prove it. Thảo must redo it, and both feel awkward.",
          "sub": "Cô nhớ khác. Không ai chứng minh được. Thảo làm lại, cả hai ngượng mấy hôm.",
          "phase": "a"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "hoa",
          "say": "Why didn't you use the new template?",
          "sub": "Sao em không dùng mẫu mới?",
          "phase": "b"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "thao",
          "say": "Let's look at my message from last week together.",
          "sub": "Mình cùng xem lại tin em nhắn tuần trước nhé cô.",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "If requests change, the message is where you look back, instead of arguing.",
          "sub": "Yêu cầu có thể đổi. Tin nhắn là chỗ cùng nhìn lại, thay vì cãi “hôm trước cô bảo thế này”."
        }
      ],
      "ref": "p16,p18"
    },
    {
      "id": "s12",
      "module": "BRK-10",
      "data": {
        "quote": "Lời nói gió bay, tin nhắn ở lại",
        "mark": "tin nhắn ở lại",
        "by": "Tục ngữ, sửa một chữ",
        "illus": "mobile-phone"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Spoken words fly away. Messages stay.",
          "sub": "Lời nói gió bay, tin nhắn ở lại.",
          "keys": [
            "tin nhắn ở lại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "An old proverb, with one small update.",
          "sub": "Tục ngữ của ông bà, sửa đúng một chữ."
        }
      ],
      "ref": "p19"
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
            "at": "l4",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑤ Thứ Ba: gửi nháp sớm",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:tuesday",
            "hl": [
              {
                "text": "nháp sớm",
                "at": "l1:draft"
              }
            ]
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
                  "side": "left",
                  "pose": "give"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "laptop"
              ]
            },
            "at": "l1",
            "caption": "Thứ Ba · ngày thứ hai",
            "icon": "memo"
          },
          {
            "id": "h-i",
            "t": "illus",
            "name": "memo",
            "x": 3996,
            "y": 1240,
            "size": 90,
            "at": "l2:opening"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Gửi đoạn mở đầu",
            "x": 4106,
            "y": 1250,
            "size": 50,
            "at": "l2:opening"
          },
          {
            "id": "h-1b",
            "t": "text",
            "text": "“Giọng văn đã hợp chưa ạ?”",
            "x": 4106,
            "y": 1325,
            "size": 44,
            "at": "l2:tone",
            "color": "muted"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Sai ở nháp: mất một buổi",
            "x": 3996,
            "y": 1430,
            "size": 48,
            "at": "l4:draft",
            "color": "accent",
            "hl": [
              {
                "text": "một buổi",
                "at": "l4:afternoon"
              }
            ]
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Sai ở bản cuối: mất cả tuần",
            "x": 3996,
            "y": 1505,
            "size": 48,
            "at": "l4:final",
            "color": "coral",
            "hl": [
              {
                "text": "cả tuần",
                "at": "l4:week"
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
          "say": "Stop five: Tuesday, day two. Thảo shares a draft. Nobody asked yet.",
          "sub": "Chặng năm: thứ Ba, ngày thứ hai. Thảo gửi bản nháp. Chưa ai hỏi cả."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Here is my opening paragraph. Is this tone right?",
          "sub": "Em gửi cô đoạn mở đầu. Giọng văn thế này đã hợp chưa ạ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "A bit too formal. Our customers are young. The rest, go ahead.",
          "sub": "Hơi trang trọng. Khách mình trẻ. Phần còn lại cứ thế viết.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Wrong direction in a draft costs an afternoon. In the final version, maybe a week.",
          "sub": "Sai hướng ở bản nháp mất một buổi. Ở bản cuối có thể mất cả tuần.",
          "keys": [
            "mất một buổi"
          ]
        }
      ],
      "ref": "p20,p23"
    },
    {
      "id": "s14",
      "module": "BRK-04",
      "data": {
        "title": "Hạn một tuần",
        "wrong": "Giữ kín, nộp chiều ngày cuối",
        "right": "Ngày hai gửi đoạn mở đầu",
        "wrongIllus": "sleeping-face",
        "rightIllus": "memo",
        "labels": [
          "Cách A",
          "Cách B"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A: secret until the last day. All-night rewrite.",
          "sub": "A: giữ kín đến ngày cuối. Thức trắng viết lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "B: early draft, light fixes.",
          "sub": "B: nháp sớm, sửa nhẹ.",
          "keys": [
            "nháp sớm, sửa nhẹ"
          ]
        }
      ],
      "ref": "p23,p24"
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑥ Thứ Tư: yêu cầu đổi",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:wednesday"
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
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "laptop"
              ]
            },
            "at": "l1",
            "caption": "Thứ Tư · thêm yêu cầu",
            "icon": "spiral-calendar"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Hạn còn như cũ không?",
            "x": 5964,
            "y": 1250,
            "size": 48,
            "at": "l3:still"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Phần đã làm dùng tiếp được?",
            "x": 5964,
            "y": 1325,
            "size": 48,
            "at": "l3:keep"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "âm thầm làm thêm → trễ",
            "x": 5964,
            "y": 1410,
            "size": 44,
            "at": "l4:miss",
            "color": "muted"
          },
          {
            "id": "i-3x",
            "t": "strike",
            "over": "i-3",
            "at": "l4:deadline"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six: Wednesday. The request changes.",
          "sub": "Chặng sáu: thứ Tư. Yêu cầu thay đổi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, let's add a short questions-and-answers part.",
          "sub": "Thảo, thêm một phần hỏi đáp ngắn nhé.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Sure. Is Friday nine still the deadline? And can I keep what I've written?",
          "sub": "Dạ. Hạn vẫn chín giờ thứ Sáu ạ? Phần em viết rồi có dùng tiếp được không ạ?",
          "face": "thinking",
          "keys": [
            "Hạn vẫn chín giờ thứ Sáu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Never quietly add work, and then miss the deadline.",
          "sub": "Đừng âm thầm làm thêm rồi trễ hạn.",
          "keys": [
            "âm thầm làm thêm"
          ]
        }
      ],
      "ref": "p21"
    },
    {
      "id": "s16",
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
            "id": "i-4",
            "t": "text",
            "text": "Thấy sắp trễ: báo ngay",
            "x": 5964,
            "y": 1530,
            "size": 52,
            "at": "l1:late",
            "color": "accent",
            "hl": [
              {
                "text": "báo ngay",
                "at": "l1:now"
              }
            ]
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "+ kèm phương án",
            "x": 5964,
            "y": 1610,
            "size": 52,
            "at": "l3:plan",
            "color": "accent",
            "hl": [
              {
                "text": "phương án",
                "at": "l3:plan"
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
          "say": "Thursday, she sees a risk of being late. Tell the boss now, not after.",
          "sub": "Thứ Năm, thấy nguy cơ trễ. Báo ngay khi biết, đừng đợi qua hạn.",
          "keys": [
            "Báo ngay khi biết"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "The photos are waiting on design, maybe one day late. Can I send the text by Friday nine?",
          "sub": "Ảnh đang chờ bên thiết kế, có thể chậm một ngày. Em gửi trước phần chữ đúng chín giờ thứ Sáu được không ạ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Bad news, plus a plan. Now the boss can still choose.",
          "sub": "Tin xấu, kèm phương án. Sếp vẫn còn kịp lựa chọn.",
          "keys": [
            "kèm phương án"
          ]
        }
      ],
      "ref": "p22"
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
            "text": "⑦ Thứ Sáu 9:00: nộp cho trọn",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:friday"
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
                  "pose": "give"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "laptop",
                "notebook"
              ]
            },
            "at": "l1",
            "caption": "Thứ Sáu · 9:00 · bàn của Thảo",
            "icon": "alarm-clock"
          },
          {
            "id": "j-b0",
            "t": "box",
            "x": 7932,
            "y": 1250,
            "w": 40,
            "h": 40,
            "at": "l2:check",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7935,
            "y": 1230,
            "size": 52,
            "at": "l2:check+500",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Đối chiếu tin xác nhận",
            "x": 7992,
            "y": 1240,
            "size": 44,
            "at": "l2:check+200"
          },
          {
            "id": "j-b1",
            "t": "box",
            "x": 7932,
            "y": 1324,
            "w": 40,
            "h": 40,
            "at": "l2:typos",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7935,
            "y": 1304,
            "size": 52,
            "at": "l2:typos+500",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Soát chính tả, số liệu",
            "x": 7992,
            "y": 1314,
            "size": 44,
            "at": "l2:typos+200"
          },
          {
            "id": "j-b2",
            "t": "box",
            "x": 7932,
            "y": 1398,
            "w": 40,
            "h": 40,
            "at": "l3:assumptions",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7935,
            "y": 1378,
            "size": 52,
            "at": "l3:assumptions+500",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Ghi đã làm gì, giả định gì",
            "x": 7992,
            "y": 1388,
            "size": 44,
            "at": "l3:assumptions+200"
          },
          {
            "id": "j-b3",
            "t": "box",
            "x": 7932,
            "y": 1472,
            "w": 40,
            "h": 40,
            "at": "l3:unsure",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7935,
            "y": 1452,
            "size": 52,
            "at": "l3:unsure+500",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Nêu chỗ chưa chắc",
            "x": 7992,
            "y": 1462,
            "size": 44,
            "at": "l3:unsure+200"
          },
          {
            "id": "j-y",
            "t": "text",
            "text": "Chỗ chưa rõ → tô vàng",
            "x": 7932,
            "y": 1560,
            "size": 46,
            "at": "l4:yellow",
            "hl": [
              {
                "text": "tô vàng",
                "at": "l4:yellow"
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
          "say": "Last stop: Friday, nine a.m. Same desk as Monday.",
          "sub": "Chặng cuối: chín giờ sáng thứ Sáu. Vẫn cái bàn hôm thứ Hai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Before sending: check against the confirming message, and check typos and numbers.",
          "sub": "Trước khi gửi: đối chiếu với tin xác nhận, soát lỗi chính tả, số liệu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Note what you did, which assumptions you made, and what you're still unsure about.",
          "sub": "Ghi ngắn đã làm gì, dựa trên giả định nào, và chỗ nào còn chưa chắc."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Here's the article. Sources from last year's folder. Two sentences I'm unsure of are in yellow.",
          "sub": "Em gửi cô bài viết. Tư liệu lấy từ thư mục năm ngoái. Hai câu em còn chưa chắc, em tô vàng ạ.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Next time, is there anything you'd like me to adjust?",
          "sub": "Lần sau làm việc tương tự, cô muốn em điều chỉnh gì không ạ?",
          "face": "thinking",
          "keys": [
            "điều chỉnh gì"
          ]
        }
      ],
      "ref": "p25,p26"
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
            "at": "l1",
            "fit": [
              "j-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-learn",
            "t": "text",
            "text": "Mỗi lần giao việc = một lần học",
            "x": 7932,
            "y": 1660,
            "size": 48,
            "at": "l2:lesson",
            "color": "accent",
            "hl": [
              {
                "text": "một lần học",
                "at": "l2:lesson"
              }
            ]
          },
          {
            "id": "j-loop",
            "t": "text",
            "text": "Đầy câu hỏi → còn một câu",
            "x": 7932,
            "y": 1750,
            "size": 40,
            "at": "l3:monday",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "Good question. Shorter titles next time. Otherwise, perfect.",
          "sub": "Hỏi hay đấy. Lần sau tiêu đề ngắn hơn. Còn lại ổn rồi.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "That one question turns every task into a lesson.",
          "sub": "Câu hỏi ấy biến mỗi lần được giao việc thành một lần học.",
          "keys": [
            "một lần học"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Monday, a head full of questions. Friday, just one left, and a good one.",
          "sub": "Thứ Hai, cả đống câu hỏi. Thứ Sáu, còn đúng một câu. Mà là câu hay."
        }
      ],
      "ref": "p27"
    },
    {
      "id": "s19",
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
            "fit": "E",
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
            "at": "l4:end",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 9432,
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
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Step back: one task, one week.",
          "sub": "Lùi lại: một việc, một tuần.",
          "keys": [
            "một việc, một tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: repeat one sentence, save a week of fixing.",
          "sub": "Một: nhắc lại một câu, đỡ sửa cả tuần.",
          "keys": [
            "nhắc lại một câu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: spoken words fly away, messages stay.",
          "sub": "Hai: lời nói gió bay, tin nhắn ở lại.",
          "keys": [
            "tin nhắn ở lại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: early draft, light fixes. Late delivery, painful fixes.",
          "sub": "Ba: nháp sớm sửa nhẹ, nộp muộn sửa đau.",
          "keys": [
            "nháp sớm sửa nhẹ"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p14,p19,p24"
    },
    {
      "id": "s20",
      "module": "QUIZ-01",
      "ref": "questions[14]",
      "data": {
        "q": "After a spoken briefing, what should you send to your manager?",
        "options": [
          "A short message summarising the task and deadline, inviting corrections if anything is wrong",
          "Nothing, because a spoken briefing is enough and messages only create more work",
          "A long formal letter thanking the manager for trusting you with the task"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "speech-balloon",
        "why": "Tin xác nhận ngắn giúp hai bên nhớ cùng một phiên bản của yêu cầu."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "After a spoken briefing, what should you send to your manager?",
          "sub": "Sau khi được giao việc bằng lời, bạn nên gửi gì cho sếp?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A short message summarising the task and deadline, inviting corrections if anything is wrong.",
          "sub": "Một tin ngắn tóm lại việc và hạn chót, mời sếp sửa nếu có gì sai."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "It keeps both of you on the same version of the request. Spoken words fly away, messages stay.",
          "sub": "Hai bên nhớ cùng một phiên bản. Lời nói gió bay, tin nhắn ở lại."
        }
      ],
      "beats": {
        "after": 800
      }
    },
    {
      "id": "s21",
      "module": "END-05",
      "data": {
        "text": "Lưu năm điều cần hỏi vào điện thoại",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Save the five questions on your phone. Next task, end with: is that right? Then try the forty questions below!",
          "sub": "Lưu năm điều cần hỏi vào điện thoại. Lần tới nhận việc, kết bằng “đúng không ạ?”. Rồi thử bốn mươi câu bên dưới nhé!",
          "face": "laugh"
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s17"
  }
};
