// Kịch bản video W lần 3 (#110) — "Khi nào nên hỏi, khi nào nên tự tìm hiểu?" · chuỗi "Ba tháng đầu ở chỗ làm mới"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "when-to-ask-when-to-figure-out--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "new-employees",
    "slug": "when-to-ask-when-to-figure-out",
    "door": "ky-nang",
    "level": "B1",
    "title": "Khi nào nên hỏi, khi nào nên tự tìm hiểu?",
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
  "notes": "#145 dựng theo hạt nhân #136 + biến thể #144 (bang-trang-kit): Đét đứng trái + một bảng trắng 10 ô theo một ngày thứ Tư (tuần hai) của Thảo — A mở “2 ngày mày mò / 5 phút để hỏi” (p13) + Thảo 8:30 ngại hỏi, “Học thầy không tày học bạn”, B câu hỏi chính (ba ý intro) + BRK-08 dòng thời gian ngày, C ① 9:00 việc phải hỏi ngay (p1–p2), Khoan đã! email nghỉ lễ chọn danh sách lớn nhất (p3–p4, toàn màn), D ② 10:00 tự tìm trước (p5–p7), E ③ 10:30 ghi chép làm mẫu (p8–p9), BRK-07 rehook, F ④ 11:00 bấm giờ nửa tiếng (p10–p12), G Dũng kể gần hai ngày / năm phút (p13–p14), H ⑥ 11:30 câu hỏi bốn phần + kênh (p15–p18), I ⑦ 14:00 hỏi ai + Thảo hỏi Dũng chuyện ưu tiên (p19–p21), BRK-04 hỏi bàn bên / hỏi sếp (p22), J ⑧ 17:00 ghi câu trả lời, cảm ơn (p23–p24) + vài tuần sau 8:30 cùng bàn gửi file cho người mới (p25, khép vòng). Đổi tên theo w145/_series/new-employees.md: Hoa (p3, người mới) → Thảo; Nga (p8) → Thảo; Nam (p13) → Dũng; Thu (p21) → Thảo; chị Oanh (p21) → Dũng (người bàn bên dễ tính); trưởng phòng/chị trưởng nhóm/anh hướng dẫn → Cô Hoa. p15 câu mẫu ‘báo cáo tồn kho, lọc theo kho, mã kho mới’ đổi sang việc ghép hai bảng tính của Thảo (p13), giữ đủ bốn phần. Số chỉ có: nửa tiếng (p10), gần hai ngày / năm phút (p13). Câu đố questions[18]. Bản trước (W lần 3, #110): w145/bak/when-to-ask-when-to-figure-out--w01.js.",
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
            "id": "a-2",
            "t": "text",
            "text": "2 ngày mày mò",
            "x": 60,
            "y": 110,
            "size": 120,
            "at": "l1:two days",
            "color": "coral",
            "hl": [
              {
                "text": "2 ngày",
                "at": "l1:two days"
              }
            ]
          },
          {
            "id": "a-5",
            "t": "text",
            "text": "5 phút để hỏi",
            "x": 60,
            "y": 290,
            "size": 120,
            "at": "l2:five minutes",
            "color": "accent",
            "hl": [
              {
                "text": "5 phút",
                "at": "l2:five minutes"
              }
            ]
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Hỏi = kém?",
            "x": 70,
            "y": 480,
            "size": 60,
            "at": "l3:weak",
            "color": "muted"
          },
          {
            "id": "a-qx",
            "t": "strike",
            "over": "a-q",
            "at": "l4:wrong"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Theo bài “Khi nào nên hỏi, khi nào nên tự tìm hiểu?” · nguồn: MIT Sloan (Brooks, Gino, Schweitzer 2015), Government Executive (Khazan 2015), SHRM (Bauer 2010)",
            "x": 60,
            "y": 724,
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
          "say": "Nearly two days, stuck on one spreadsheet.",
          "sub": "Gần hai ngày, mắc kẹt với một bảng tính.",
          "keys": [
            "Gần hai ngày"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The answer? Five minutes, from someone who knew.",
          "sub": "Lời giải? Năm phút, từ người biết việc.",
          "keys": [
            "Năm phút"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Why wait two days? Because we think asking looks weak.",
          "sub": "Sao phải chờ hai ngày? Vì ta tưởng hỏi là kém."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Asking is not the problem. Asking the wrong thing, at the wrong time, to the wrong person is.",
          "sub": "Hỏi không phải vấn đề. Hỏi sai việc, sai lúc, sai người mới là vấn đề.",
          "keys": [
            "sai việc, sai lúc, sai người"
          ]
        }
      ],
      "ref": "intro,p13"
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
                  "side": "left",
                  "pose": "think",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "props": [
                "laptop"
              ]
            },
            "at": "l1",
            "caption": "Thứ Tư, tuần hai · 8:30",
            "icon": "alarm-clock"
          },
          {
            "id": "a-hc",
            "t": "text",
            "text": "Học thầy không tày học bạn…",
            "x": 60,
            "y": 590,
            "size": 44,
            "at": "l5:teachers",
            "color": "accent"
          },
          {
            "id": "a-hc2",
            "t": "text",
            "text": "…nhưng phải biết hỏi",
            "x": 60,
            "y": 650,
            "size": 40,
            "at": "l5:know",
            "color": "accent",
            "hl": [
              {
                "text": "biết hỏi",
                "at": "l5:how"
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
          "say": "Meet Thảo again. Week two, Wednesday, eight thirty.",
          "sub": "Lại là Thảo. Tuần thứ hai, thứ Tư, tám giờ rưỡi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'm stuck. Cô Hoa is right there. But if I ask, will she think I can't manage?",
          "sub": "Kẹt rồi. Cô Hoa ngồi ngay đó. Nhưng hỏi thì cô có nghĩ mình không tự lo được không?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "If I don't ask, I'll be going in circles all morning.",
          "sub": "Không hỏi thì loay hoay cả buổi.",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Short answer: some things you ask at once. The rest, you search first, with a time limit.",
          "sub": "Trả lời ngắn: có việc phải hỏi ngay. Còn lại thì tự tìm trước, có giới hạn thời gian.",
          "keys": [
            "hỏi ngay",
            "có giới hạn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Learning from friends beats learning from teachers, they say. Only if you know how to ask.",
          "sub": "Ông bà nói “Học thầy không tày học bạn”. Với điều kiện biết hỏi."
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
            "text": "Hỏi ngay hay tự tìm?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:figure",
            "hl": [
              {
                "text": "tự tìm",
                "at": "l1:yourself"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "① Việc rủi ro: hỏi ngay",
            "x": 2028,
            "y": 170,
            "size": 56,
            "at": "l2:risky",
            "color": "coral",
            "hl": [
              {
                "text": "hỏi ngay",
                "at": "l2:at once"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "② Còn lại: tự tìm có hạn",
            "x": 2028,
            "y": 270,
            "size": 56,
            "at": "l3:rest",
            "hl": [
              {
                "text": "có hạn",
                "at": "l3:limit"
              }
            ]
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "③ Ghi đã thử gì, hỏi gọn",
            "x": 2028,
            "y": 370,
            "size": 56,
            "at": "l4:note",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi gọn",
                "at": "l4:short"
              }
            ]
          },
          {
            "id": "b-i",
            "t": "illus",
            "name": "magnifying-glass-tilted-left",
            "x": 3268,
            "y": 200,
            "size": 220,
            "at": "l1:figure"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: ask now, or figure it out yourself?",
          "sub": "Vậy: hỏi ngay, hay tự tìm hiểu?",
          "keys": [
            "hỏi ngay, hay tự tìm hiểu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: risky things, you ask at once.",
          "sub": "Một: việc rủi ro thì hỏi ngay.",
          "keys": [
            "hỏi ngay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: the rest, you search first, within a limit.",
          "sub": "Hai: còn lại thì tự tìm trước, có giới hạn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: note what you tried, then ask, short and clear.",
          "sub": "Ba: ghi lại đã thử gì, rồi hỏi gọn.",
          "keys": [
            "hỏi gọn"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Một ngày thứ Tư của Thảo",
        "current": 0,
        "points": [
          {
            "label": "9:00",
            "sub": "Email gửi khách",
            "illus": "envelope"
          },
          {
            "label": "10:00",
            "sub": "Tự tìm, ghi lại",
            "illus": "magnifying-glass-tilted-left"
          },
          {
            "label": "11:00",
            "sub": "Bấm giờ nửa tiếng",
            "illus": "hourglass-not-done"
          },
          {
            "label": "11:30",
            "sub": "Hỏi đủ bốn phần",
            "illus": "speech-balloon"
          },
          {
            "label": "14:00",
            "sub": "Hỏi đúng người",
            "illus": "busts-in-silhouette"
          },
          {
            "label": "17:00",
            "sub": "Ghi câu trả lời",
            "illus": "spiral-notepad"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One Wednesday: an email, a search, a timer.",
          "sub": "Một ngày thứ Tư: một email, một lần tự tìm, một cái đồng hồ."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A good question, the right person, and notes.",
          "sub": "Một câu hỏi hay, đúng người, và ghi chép."
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
            "text": "① 9:00: hỏi ngay, đừng đoán",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:nine",
            "hl": [
              {
                "text": "hỏi ngay",
                "at": "l1:ask"
              }
            ]
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "☐ Tiền, giá, hợp đồng",
            "x": 3996,
            "y": 150,
            "size": 46,
            "at": "l2:money"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "☐ Dữ liệu khách, mật khẩu",
            "x": 3996,
            "y": 222,
            "size": 46,
            "at": "l2:passwords"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "☐ Gửi ra ngoài, tên công ty",
            "x": 3996,
            "y": 294,
            "size": 46,
            "at": "l3:outside"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "☐ Khó hoàn tác: xoá, gửi hàng loạt",
            "x": 3996,
            "y": 366,
            "size": 46,
            "at": "l3:undo"
          },
          {
            "id": "c-l4",
            "t": "text",
            "text": "☐ Máy móc, an toàn",
            "x": 3996,
            "y": 438,
            "size": 46,
            "at": "l4:machines"
          },
          {
            "id": "c-cost",
            "t": "text",
            "text": "Hỏi: vài phút",
            "x": 4896,
            "y": 200,
            "size": 64,
            "at": "l5:minutes",
            "color": "accent",
            "hl": [
              {
                "text": "vài phút",
                "at": "l5:minutes"
              }
            ]
          },
          {
            "id": "c-cost2",
            "t": "text",
            "text": "Sửa: nhiều ngày + lòng tin",
            "x": 4896,
            "y": 300,
            "size": 52,
            "at": "l5:days",
            "color": "coral",
            "hl": [
              {
                "text": "lòng tin",
                "at": "l5:trust"
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
          "say": "Stop one: nine a.m. Some things you never guess. You ask.",
          "sub": "Chặng một: chín giờ. Có những việc không bao giờ đoán. Phải hỏi.",
          "keys": [
            "Phải hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Money, prices, client contracts. Client data, passwords, internal files.",
          "sub": "Tiền, giá, hợp đồng với khách. Dữ liệu khách, mật khẩu, tài liệu nội bộ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Anything going outside under the company name. Anything hard to undo, like deleting data or mass messages.",
          "sub": "Thứ gửi ra ngoài dưới tên công ty. Thao tác khó hoàn tác: xoá dữ liệu, gửi thông báo cho nhiều người."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And machines, or safety at work.",
          "sub": "Và máy móc, an toàn lao động."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One question costs minutes. Fixing a wrong email to clients can cost days, and trust.",
          "sub": "Hỏi một câu mất vài phút. Sửa email gửi nhầm khách có thể mất nhiều ngày, và cả lòng tin.",
          "keys": [
            "cả lòng tin"
          ]
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s05",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "9:00 · email báo lịch nghỉ lễ",
        "actors": [
          {
            "id": "thao",
            "side": "left"
          },
          {
            "id": "hoa",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đoán, chọn danh sách lớn nhất “cho đủ”",
          "why": "Có cả khách đã ngừng hợp tác, đối tác không liên quan; trưởng phòng phải gọi xin lỗi từng người.",
          "rule": "Việc ra khỏi cửa, hỏi trước một câu"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Holiday schedule email, to clients. Which list? The biggest one, to be safe.",
          "sub": "Email báo lịch nghỉ lễ cho khách. Danh sách nào nhỉ? Chọn cái lớn nhất cho đủ.",
          "face": "neutral",
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
          "say": "That list has former clients and unrelated partners. Phones ring. The boss apologizes, one by one.",
          "sub": "Danh sách đó có cả khách đã ngừng, đối tác không liên quan. Điện thoại reo. Trưởng phòng gọi xin lỗi từng người.",
          "keys": [
            "xin lỗi từng người"
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
          "who": "thao",
          "say": "Cô Hoa, before I send this to clients, which list should I use?",
          "sub": "Cô ơi, trước khi gửi khách, em nên chọn danh sách nào ạ?",
          "phase": "redo",
          "pose": "explain",
          "to": "hoa"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "When something leaves the building, ask one question first.",
          "sub": "Việc ra khỏi cửa, hỏi trước một câu.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb",
          "keys": [
            "Việc ra khỏi cửa, hỏi trước một câu"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p3,p4"
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
            "text": "② 10:00: tự tìm trước",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:ten",
            "hl": [
              {
                "text": "tự tìm",
                "at": "l1:search"
              }
            ]
          },
          {
            "id": "d-what",
            "t": "text",
            "text": "Phần mềm · chỗ lưu · mẫu có sẵn",
            "x": 5964,
            "y": 150,
            "size": 46,
            "at": "l2:software"
          },
          {
            "id": "d-mem",
            "t": "text",
            "text": "Tự tìm → nhớ lâu hơn",
            "x": 5964,
            "y": 220,
            "size": 50,
            "at": "l2:remember",
            "color": "accent",
            "hl": [
              {
                "text": "nhớ lâu",
                "at": "l2:longer"
              }
            ]
          },
          {
            "id": "d-w",
            "t": "text",
            "text": "Tìm ở:",
            "x": 5964,
            "y": 320,
            "size": 50,
            "at": "l3:guides"
          },
          {
            "id": "d-w1",
            "t": "text",
            "text": "☐ tài liệu hướng dẫn, quy trình",
            "x": 5994,
            "y": 390,
            "size": 44,
            "at": "l3:guides"
          },
          {
            "id": "d-w2",
            "t": "text",
            "text": "☐ thư mục chung, file mẫu cũ",
            "x": 5994,
            "y": 450,
            "size": 44,
            "at": "l3:shared"
          },
          {
            "id": "d-w3",
            "t": "text",
            "text": "☐ tin nhắn nhóm, email cũ",
            "x": 5994,
            "y": 510,
            "size": 44,
            "at": "l4:chat"
          },
          {
            "id": "d-w4",
            "t": "text",
            "text": "☐ sổ ghi của chính mình",
            "x": 5994,
            "y": 570,
            "size": 44,
            "at": "l4:own notes"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Hỏi lần thứ ba → người ta ngại",
            "x": 6784,
            "y": 640,
            "size": 42,
            "at": "l5:third",
            "color": "coral",
            "hl": [
              {
                "text": "lần thứ ba",
                "at": "l5:third"
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
          "say": "Stop two: ten a.m. Now, things you can search first.",
          "sub": "Chặng hai: mười giờ. Giờ là những thứ nên tự tìm trước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "How the software works, where files live, existing templates. Find it yourself, remember it longer.",
          "sub": "Cách dùng phần mềm, nơi lưu tài liệu, mẫu có sẵn. Tự tìm thì nhớ lâu hơn.",
          "keys": [
            "nhớ lâu hơn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Where? Company guides and processes. Shared folders and old template files.",
          "sub": "Tìm ở đâu? Tài liệu hướng dẫn, quy trình. Thư mục chung, file mẫu những lần trước."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The team chat history, old emails, and your own notes.",
          "sub": "Lịch sử nhóm chat, email cũ, và ghi chú của chính mình."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "New questions are fine. Asking the same thing a third time is what bothers people.",
          "sub": "Hỏi nhiều điều mới thì không sao. Hỏi lại cùng một điều đến lần thứ ba mới làm người ta ngại.",
          "keys": [
            "lần thứ ba"
          ]
        }
      ],
      "ref": "p5,p6,p7"
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
            "at": "l3",
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
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "laptop"
              ]
            },
            "at": "l1",
            "caption": "10:00 · tự tìm",
            "icon": "magnifying-glass-tilted-left"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thảo searches the team chat.",
          "sub": "Thảo lục lại nhóm chat."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Found it! Cô Hoa answered this last week. To me.",
          "sub": "Thấy rồi! Tuần trước cô Hoa trả lời rồi. Trả lời mình luôn.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Which is why the next stop exists.",
          "sub": "Vì thế mới có chặng tiếp theo."
        }
      ],
      "ref": "p6,p7"
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
            "at": "l3",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 10:30: ghi ngay khi được chỉ",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:ten thirty"
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
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "notebook",
                "laptop"
              ]
            },
            "at": "l1",
            "caption": "10:30 · được chỉ xuất báo cáo",
            "icon": "spiral-notepad"
          },
          {
            "id": "e-b0",
            "t": "badge",
            "n": 1,
            "x": 7932,
            "y": 160,
            "at": "l2:page"
          },
          {
            "id": "e-s0",
            "t": "text",
            "text": "Tạo trang “Xuất báo cáo tuần”",
            "x": 8012,
            "y": 160,
            "size": 40,
            "at": "l2:page+200"
          },
          {
            "id": "e-b1",
            "t": "badge",
            "n": 2,
            "x": 7932,
            "y": 250,
            "at": "l2:screenshot"
          },
          {
            "id": "e-s1",
            "t": "text",
            "text": "Chép từng bước, kèm ảnh chụp",
            "x": 8012,
            "y": 250,
            "size": 40,
            "at": "l2:screenshot+200"
          },
          {
            "id": "e-b2",
            "t": "badge",
            "n": 3,
            "x": 7932,
            "y": 340,
            "at": "l3:follow"
          },
          {
            "id": "e-s2",
            "t": "text",
            "text": "Tự làm theo, kẹt đâu hỏi đó",
            "x": 8012,
            "y": 340,
            "size": 40,
            "at": "l3:follow+200"
          },
          {
            "id": "e-b3",
            "t": "badge",
            "n": 4,
            "x": 7932,
            "y": 430,
            "at": "l4:updates"
          },
          {
            "id": "e-s3",
            "t": "text",
            "text": "Sửa ghi chú cho khớp",
            "x": 8012,
            "y": 430,
            "size": 40,
            "at": "l4:updates+200"
          },
          {
            "id": "e-rule",
            "t": "text",
            "text": "Hỏi một lần, ghi, dùng mãi",
            "x": 7932,
            "y": 560,
            "size": 52,
            "at": "l5:once",
            "color": "accent",
            "hl": [
              {
                "text": "dùng mãi",
                "at": "l5:forever"
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
          "say": "Stop three: ten thirty. Cô Hoa shows Thảo how to export the weekly report.",
          "sub": "Chặng ba: mười giờ rưỡi. Cô Hoa chỉ Thảo cách xuất báo cáo cuối tuần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thảo makes a notes page, one step per line, with a screenshot where buttons are confusing.",
          "sub": "Thảo tạo một trang ghi chú, mỗi bước một dòng, chỗ nhiều nút dễ nhầm thì chụp màn hình."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Next week I follow my notes. If one step blocks me, I ask only about that step.",
          "sub": "Tuần sau mình tự làm theo ghi chú. Vướng bước nào thì chỉ hỏi đúng bước đó.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then she updates her notes. A few weeks later, she exports it alone.",
          "sub": "Rồi sửa ghi chú cho khớp. Vài tuần sau, cô tự xuất báo cáo, không cần nhắn ai."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Ask once, write once, use forever.",
          "sub": "Hỏi một lần, ghi một lần, dùng mãi.",
          "keys": [
            "Hỏi một lần, ghi một lần, dùng mãi"
          ]
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Tự tìm bao lâu thì nên dừng lại để hỏi?",
        "illus": "hourglass-not-done"
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
          "say": "Searching is good. But how long before you stop and ask?",
          "sub": "Tự tìm thì tốt. Nhưng tìm bao lâu thì nên dừng lại để hỏi?",
          "keys": [
            "bao lâu"
          ]
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
            "text": "④ 11:00: tự tìm có hạn",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:eleven",
            "hl": [
              {
                "text": "có hạn",
                "at": "l1:limit"
              }
            ]
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
                  "pose": "think"
                }
              ],
              "props": [
                "laptop",
                "alarm-clock"
              ]
            },
            "at": "l1",
            "caption": "11:00 · ghép hai bảng tính",
            "icon": "hourglass-not-done"
          },
          {
            "id": "f-i",
            "t": "illus",
            "name": "hourglass-not-done",
            "x": 60,
            "y": 1240,
            "size": 90,
            "at": "l3:half an hour"
          },
          {
            "id": "f-30",
            "t": "text",
            "text": "Việc trong ngày: ~ nửa tiếng",
            "x": 170,
            "y": 1255,
            "size": 46,
            "at": "l3:half an hour",
            "hl": [
              {
                "text": "nửa tiếng",
                "at": "l3:half an hour"
              }
            ]
          },
          {
            "id": "f-long",
            "t": "text",
            "text": "Việc dài hạn: có thể lâu hơn",
            "x": 170,
            "y": 1325,
            "size": 40,
            "at": "l3:longer",
            "color": "muted"
          },
          {
            "id": "f-sig",
            "t": "text",
            "text": "Hỏi ngay khi:",
            "x": 60,
            "y": 1420,
            "size": 50,
            "at": "l4:right away",
            "color": "coral"
          },
          {
            "id": "f-s1",
            "t": "text",
            "text": "· thử vài cách vẫn đứng yên",
            "x": 90,
            "y": 1490,
            "size": 42,
            "at": "l4:tried"
          },
          {
            "id": "f-s2",
            "t": "text",
            "text": "· bắt đầu đoán mò",
            "x": 90,
            "y": 1550,
            "size": 42,
            "at": "l4:guessing"
          },
          {
            "id": "f-s3",
            "t": "text",
            "text": "· người khác phải chờ mình",
            "x": 90,
            "y": 1610,
            "size": 42,
            "at": "l5:waiting"
          },
          {
            "id": "f-no",
            "t": "text",
            "text": "Mày mò quá lâu ≠ chăm chỉ",
            "x": 60,
            "y": 1710,
            "size": 50,
            "at": "l6:hard work",
            "color": "accent",
            "hl": [
              {
                "text": "≠ chăm chỉ",
                "at": "l6:hard work"
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
          "say": "Stop four: eleven a.m. Thảo must merge two spreadsheets. Before starting, she sets a limit.",
          "sub": "Chặng bốn: mười một giờ. Thảo cần ghép hai bảng tính. Trước khi bắt đầu, cô đặt giới hạn.",
          "keys": [
            "đặt giới hạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Thirty minutes on the timer. No progress by then, I ask.",
          "sub": "Hẹn giờ ba mươi phút. Hết giờ chưa nhích được thì hỏi.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "For a small block in a same-day task, about half an hour is enough. Long projects, maybe longer.",
          "sub": "Vướng nhỏ trong việc cần xong trong ngày: khoảng nửa tiếng là đủ. Việc dài hạn có thể lâu hơn.",
          "keys": [
            "khoảng nửa tiếng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Ask right away if you've tried a few ways and you're still stuck, or you start guessing.",
          "sub": "Hỏi ngay nếu đã thử vài cách mà vẫn đứng yên, hoặc bắt đầu đoán mò."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Or if someone else is waiting on you.",
          "sub": "Hoặc sự chậm trễ của bạn khiến người khác phải chờ."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Searching too long is not hard work. Bosses want to know early that you're stuck.",
          "sub": "Tự tìm quá lâu không phải chăm chỉ. Người giao việc muốn biết sớm bạn đang kẹt.",
          "keys": [
            "không phải chăm chỉ"
          ]
        }
      ],
      "ref": "p10,p11,p12"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "Vì sao phải bấm giờ?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:why"
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
            "caption": "11:05 · Dũng ghé bàn",
            "icon": "speech-balloon"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Dũng: gần 2 ngày",
            "x": 2028,
            "y": 1250,
            "size": 56,
            "at": "l2:two days",
            "color": "coral",
            "hl": [
              {
                "text": "2 ngày",
                "at": "l2:two days"
              }
            ]
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "Cô Hoa: 5 phút, có file mẫu",
            "x": 2028,
            "y": 1340,
            "size": 50,
            "at": "l3:five minutes",
            "color": "accent",
            "hl": [
              {
                "text": "5 phút",
                "at": "l3:five minutes"
              }
            ]
          },
          {
            "id": "g-rule",
            "t": "text",
            "text": "Tự tìm có hạn,",
            "x": 2028,
            "y": 1470,
            "size": 60,
            "at": "l4:limit",
            "color": "accent",
            "hl": [
              {
                "text": "có hạn",
                "at": "l4:limit"
              }
            ]
          },
          {
            "id": "g-rule2",
            "t": "text",
            "text": "quá hạn thì hỏi",
            "x": 2028,
            "y": 1555,
            "size": 60,
            "at": "l4:ask",
            "color": "accent",
            "hl": [
              {
                "text": "quá hạn",
                "at": "l4:over"
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
          "say": "Why a timer? Ask Dũng, from the next desk.",
          "sub": "Bấm giờ làm gì? Hỏi Dũng bàn bên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Same task, my first month. I didn't want to bother anyone. Nearly two days.",
          "sub": "Đúng việc này, tháng đầu của anh. Ngại làm phiền. Mày mò gần hai ngày.",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Then I asked. Five minutes: the company already had a template file for it.",
          "sub": "Rồi anh hỏi. Năm phút: công ty có sẵn file mẫu làm đúng việc đó.",
          "face": "laugh"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Your two days cost more than their five minutes. Search within a limit; over the limit, ask.",
          "sub": "Hai ngày của bạn đắt hơn năm phút của người biết việc. Tự tìm có hạn, quá hạn thì hỏi.",
          "keys": [
            "Tự tìm có hạn, quá hạn thì hỏi"
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
      "ref": "p13,p14"
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
            "text": "⑥ 11:30: câu hỏi bốn phần",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:eleven thirty",
            "hl": [
              {
                "text": "bốn phần",
                "at": "l1:four parts"
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
            "caption": "11:30 · hết 30 phút",
            "icon": "speech-balloon"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "① đang làm gì",
            "x": 3996,
            "y": 1250,
            "size": 48,
            "at": "l2:merging"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "② kẹt ở đâu",
            "x": 3996,
            "y": 1320,
            "size": 48,
            "at": "l2:match"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "③ đã thử gì",
            "x": 3996,
            "y": 1390,
            "size": 48,
            "at": "l3:tried",
            "color": "accent",
            "hl": [
              {
                "text": "đã thử gì",
                "at": "l3:tried"
              }
            ]
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "④ mình đoán thế nào",
            "x": 3996,
            "y": 1460,
            "size": 48,
            "at": "l3:guess"
          },
          {
            "id": "h-why",
            "t": "text",
            "text": "“Đã thử gì” → khỏi gợi ý lại",
            "x": 3996,
            "y": 1550,
            "size": 42,
            "at": "l4:tried",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five: eleven thirty. Time is up. Thảo asks, in four parts.",
          "sub": "Chặng năm: mười một rưỡi. Hết giờ. Thảo hỏi, đủ bốn phần.",
          "keys": [
            "đủ bốn phần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Cô Hoa, I'm merging the two spreadsheets. At the matching step, the numbers don't match.",
          "sub": "Cô ơi, em đang ghép hai bảng tính, đến bước ghép theo mã thì số không khớp.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I've tried filtering again and checking last month's file. I guess it's the new codes. Am I right?",
          "sub": "Em đã lọc lại và đối chiếu file tháng trước mà vẫn lệch. Em đoán là do mã mới, cô xem giúp em có đúng không ạ?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Saying what you tried shows effort, and saves her from suggesting it again.",
          "sub": "Nói “đã thử gì” cho thấy bạn đã cố, và người trả lời khỏi gợi ý lại cách bạn đã làm.",
          "keys": [
            "đã thử gì"
          ]
        }
      ],
      "ref": "p15,p16"
    },
    {
      "id": "s13",
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
            "id": "h-blk",
            "t": "text",
            "text": "Câu chặn việc → hỏi ngay",
            "x": 3996,
            "y": 1650,
            "size": 44,
            "at": "l1:blocking",
            "color": "coral"
          },
          {
            "id": "h-lst",
            "t": "text",
            "text": "Câu không gấp → gom, hỏi cuối sáng",
            "x": 3996,
            "y": 1710,
            "size": 40,
            "at": "l1:list",
            "hl": [
              {
                "text": "cuối sáng",
                "at": "l1:end"
              }
            ]
          },
          {
            "id": "h-ch1",
            "t": "text",
            "text": "Ngắn → nhắn · màn hình → ngồi cạnh",
            "x": 3996,
            "y": 1780,
            "size": 34,
            "at": "l2:short"
          },
          {
            "id": "h-ch2",
            "t": "text",
            "text": "Lương, nghỉ phép → hỏi riêng",
            "x": 4936,
            "y": 1780,
            "size": 34,
            "at": "l3:salary",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Questions blocking your work, ask now. The rest, list them and ask together, say at the end of the morning.",
          "sub": "Câu đang chặn việc thì hỏi ngay. Câu không gấp thì ghi danh sách, hỏi một lượt, ví dụ cuối buổi sáng.",
          "keys": [
            "hỏi một lượt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Pick the channel. Short question, a message. Need to see the screen, sit beside them.",
          "sub": "Chọn kênh cho hợp. Câu ngắn thì nhắn. Cần nhìn màn hình thì xin vài phút ngồi cạnh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Private things like salary or leave: ask privately, or go through HR.",
          "sub": "Chuyện riêng như lương, nghỉ phép: hỏi riêng hoặc qua nhân sự."
        }
      ],
      "ref": "p17,p18"
    },
    {
      "id": "s14",
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
            "text": "⑦ 14:00: hỏi ai?",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:two"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Cách làm → bàn bên, người hướng dẫn",
            "x": 5964,
            "y": 1250,
            "size": 40,
            "at": "l2:daily"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Ưu tiên → quản lý trực tiếp",
            "x": 5964,
            "y": 1320,
            "size": 40,
            "at": "l2:priorities",
            "color": "accent",
            "hl": [
              {
                "text": "quản lý trực tiếp",
                "at": "l2:manager"
              }
            ]
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Giấy tờ, chế độ → nhân sự",
            "x": 5964,
            "y": 1390,
            "size": 40,
            "at": "l3:paperwork"
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "Máy tính, tài khoản → kỹ thuật",
            "x": 5964,
            "y": 1460,
            "size": 40,
            "at": "l3:accounts"
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "Đừng dồn hết vào người dễ tính",
            "x": 5964,
            "y": 1560,
            "size": 44,
            "at": "l4:easiest",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six: two p.m. Every question has its right person.",
          "sub": "Chặng sáu: hai giờ chiều. Mỗi loại câu hỏi có người phù hợp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Daily how-to: your guide or teammates. Priorities and direction: your direct manager.",
          "sub": "Cách làm hằng ngày: người hướng dẫn, đồng nghiệp cùng nhóm. Ưu tiên, hướng đi: quản lý trực tiếp.",
          "keys": [
            "quản lý trực tiếp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Paperwork and benefits: HR. Computers and accounts: the tech team.",
          "sub": "Giấy tờ, chế độ: nhân sự. Máy tính, tài khoản: bộ phận kỹ thuật."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And don't pour everything on the easiest-going person. Spread it, and you meet more people.",
          "sub": "Và đừng dồn mọi câu vào một người dễ tính nhất. Chia đều, bạn quen thêm nhiều người.",
          "keys": [
            "dễ tính nhất"
          ]
        }
      ],
      "ref": "p19,p20"
    },
    {
      "id": "s15",
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
            "at": "l1",
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
                  "pose": "shrug"
                },
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "stand"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "explain"
                }
              ]
            },
            "at": "l1",
            "caption": "14:00 · báo cáo gấp",
            "icon": "hourglass-done"
          },
          {
            "id": "i-6",
            "t": "text",
            "text": "“Dũng bảo vậy ạ”",
            "x": 5964,
            "y": 1670,
            "size": 48,
            "at": "l4:said",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Dũng is so easygoing, Thảo asks him everything. Even which task comes first.",
          "sub": "Dũng dễ tính quá, việc gì Thảo cũng hỏi. Kể cả nên làm việc nào trước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "That report? Tomorrow is fine, I think.",
          "sub": "Báo cáo đó á? Mai làm cũng được, chắc thế.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, why did you leave my urgent report?",
          "sub": "Thảo, sao em bỏ báo cáo gấp của cô?",
          "face": "stern"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Dũng said so.",
          "sub": "Dạ… anh Dũng bảo vậy ạ.",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Now both of them feel awkward. Priorities depend on goals the manager knows best.",
          "sub": "Giờ thì cả hai cùng khó xử. Ưu tiên tuỳ mục tiêu mà quản lý nắm rõ nhất."
        }
      ],
      "ref": "p21"
    },
    {
      "id": "s16",
      "module": "BRK-04",
      "data": {
        "title": "Việc nào làm trước?",
        "wrong": "Hỏi người bàn bên dễ tính",
        "right": "Hỏi quản lý trực tiếp",
        "wrongIllus": "busts-in-silhouette",
        "rightIllus": "office-building"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "How to do it? Ask the next desk.",
          "sub": "Cách làm? Hỏi bàn bên."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "What comes first? Ask your boss.",
          "sub": "Việc trước việc sau? Hỏi sếp.",
          "keys": [
            "Hỏi sếp"
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
            "at": "l3",
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
            "text": "⑧ 17:00: hỏi xong thì ghi",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:five"
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
                  "pose": "thumb"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "notebook",
                "laptop"
              ]
            },
            "at": "l1",
            "caption": "17:00 · trước khi về",
            "icon": "spiral-notepad"
          },
          {
            "id": "j-i",
            "t": "illus",
            "name": "spiral-notepad",
            "x": 7932,
            "y": 1240,
            "size": 90,
            "at": "l2:notes"
          },
          {
            "id": "j-f",
            "t": "text",
            "text": "“Đã hỏi, đã học”",
            "x": 8042,
            "y": 1250,
            "size": 54,
            "at": "l2:learned",
            "color": "accent",
            "hl": [
              {
                "text": "Đã hỏi, đã học",
                "at": "l2:learned"
              }
            ]
          },
          {
            "id": "j-m",
            "t": "text",
            "text": "phần mềm · quy trình · ai lo gì",
            "x": 7932,
            "y": 1350,
            "size": 42,
            "at": "l2:software"
          },
          {
            "id": "j-ty",
            "t": "text",
            "text": "Làm được → báo lại một câu",
            "x": 7932,
            "y": 1440,
            "size": 46,
            "at": "l4:worked",
            "hl": [
              {
                "text": "báo lại",
                "at": "l4:tell"
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
          "say": "Last stop: five p.m. Every answer goes in, right away.",
          "sub": "Chặng cuối: năm giờ chiều. Câu trả lời nào cũng ghi lại ngay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One notes file called asked and learned, with sections: software, process, who does what.",
          "sub": "Một file tên “Đã hỏi, đã học”, chia mục: phần mềm, quy trình, ai phụ trách gì.",
          "keys": [
            "Đã hỏi, đã học"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Cô Hoa, the new codes trick worked. Thank you!",
          "sub": "Cô ơi, cách mã mới làm được rồi ạ. Em cảm ơn cô!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Short thanks, and tell them it worked. Helpers love knowing their words helped.",
          "sub": "Cảm ơn ngắn, và báo lại là đã làm được. Người giúp luôn vui khi biết lời mình có ích.",
          "keys": [
            "báo lại"
          ]
        }
      ],
      "ref": "p23,p24"
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
            "at": "l2",
            "fit": [
              "j-v2"
            ],
            "zoom": 1.35,
            "ms": 800
          },
          {
            "at": "l4",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-nx",
            "t": "text",
            "text": "File ấy → giúp người mới sau",
            "x": 7932,
            "y": 1550,
            "size": 46,
            "at": "l1:weeks",
            "color": "accent"
          },
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
                  "side": "left",
                  "pose": "give"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "wave"
                }
              ],
              "props": [
                "laptop"
              ]
            },
            "at": "l1",
            "caption": "Vài tuần sau · 8:30 · cùng bàn",
            "icon": "alarm-clock"
          },
          {
            "id": "j-hc",
            "t": "text",
            "text": "Học bạn… rồi thành bạn để học",
            "x": 7932,
            "y": 1650,
            "size": 46,
            "at": "l4:friend",
            "color": "accent",
            "hl": [
              {
                "text": "thành bạn",
                "at": "l4:friend"
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
          "say": "A few weeks later. Same desk, eight thirty. That file has grown.",
          "sub": "Vài tuần sau. Cùng cái bàn, tám giờ rưỡi. File ấy đã dày lên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Cô Hoa, here are my notes. Maybe for the next new person?",
          "sub": "Cô ơi, em gửi cô file ghi chú. Biết đâu giúp được người mới sau ạ?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A small sign she's on solid ground now.",
          "sub": "Một dấu hiệu nhỏ: cô đã vững dần trong công việc."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Learn from friends, they said. Now Thảo is the friend to learn from.",
          "sub": "Học thầy không tày học bạn. Giờ Thảo thành người bạn để học."
        }
      ],
      "ref": "p25"
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
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "I",
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
            "x": 5496,
            "y": 30,
            "at": "l2"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 3528,
            "y": 1120,
            "at": "l3"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "g-rule",
              "g-rule2"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:limit"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 7464,
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
          "say": "Step back: Thảo's whole Wednesday.",
          "sub": "Lùi lại xem trọn ngày thứ Tư của Thảo.",
          "keys": [
            "trọn ngày thứ Tư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: when it leaves the building, ask one question first.",
          "sub": "Một: việc ra khỏi cửa, hỏi trước một câu.",
          "keys": [
            "hỏi trước một câu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: search within a limit. Over the limit, ask.",
          "sub": "Hai: tự tìm có hạn, quá hạn thì hỏi.",
          "keys": [
            "quá hạn thì hỏi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: how-to, ask the next desk. What comes first, ask the boss.",
          "sub": "Ba: cách làm hỏi bàn bên, việc trước việc sau hỏi sếp.",
          "keys": [
            "hỏi sếp"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p4,p14,p22"
    },
    {
      "id": "s20",
      "module": "QUIZ-01",
      "ref": "questions[18]",
      "data": {
        "q": "You do not know which task to do first, who should you ask?",
        "options": [
          "Your direct manager, because priorities depend on goals that only they fully know",
          "The technical support team, because they know every task in the company",
          "The friendliest colleague nearby, because they will answer quickly without judging you"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "man-office-worker",
        "why": "Thứ tự ưu tiên phụ thuộc vào mục tiêu chung mà quản lý trực tiếp nắm rõ nhất."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You do not know which task to do first, who should you ask?",
          "sub": "Bạn không biết nên làm việc nào trước, nên hỏi ai?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Your direct manager, because priorities depend on goals that only they fully know.",
          "sub": "Quản lý trực tiếp, vì thứ tự ưu tiên tuỳ vào mục tiêu mà họ nắm rõ nhất."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Ask a colleague how to do it. Ask your manager what comes first.",
          "sub": "Cách làm hỏi bàn bên, việc trước việc sau hỏi sếp."
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
        "text": "Mở file “Đã hỏi, đã học”",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Open an asked-and-learned file today, and copy in the last answer you got. Then try the forty questions below!",
          "sub": "Hôm nay mở file “Đã hỏi, đã học”, chép vào câu trả lời gần nhất bạn nhận được. Rồi thử bốn mươi câu bên dưới nhé!",
          "face": "laugh"
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s18"
  }
};
