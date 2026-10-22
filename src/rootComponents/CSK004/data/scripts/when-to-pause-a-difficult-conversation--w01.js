// Kịch bản video W lần 3 (#110) — "Khi nào nên tạm dừng cuộc cãi" · chuỗi "Xử lý xung đột và cuộc nói chuyện khó"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "when-to-pause-a-difficult-conversation--w01",
  "hook": "HOOK-03",
  "unit": {
    "audience": "people-in-conflict",
    "slug": "when-to-pause-a-difficult-conversation",
    "door": "ky-nang",
    "level": "B1",
    "title": "Khi nào nên tạm dừng cuộc cãi vã và nói chuyện lại sau?",
    "series": "Xử lý xung đột và cuộc nói chuyện khó"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT TUẦN của Thảo. Mở: 23:30 thứ Hai, cãi chuyện vay mua nhà, “Thôi em đi ngủ” (neo 23:30; chồng không lên hình) → ① dấu hiệu cần dừng (p1–p3) → ② dừng ≠ bỏ chạy + BRK-04 trước/sau + làm lại “Tối thứ Bảy” (p4–p7) → ③ T3 họp: xin dừng thế nào, 5 phút / 20 phút (p8–p10) → ④ T3 chiều hồ sơ thanh toán với Dũng + “Khoan đã!” “để lúc khác” → 15:00 (p11–p12) → BRK-07 → ⑤ T4 tối danh sách mười điều = mài dao + 3 câu tự hỏi (p13–p16) → ⑥ T5 người kia không chịu dừng + tôn trọng khi họ xin dừng + an toàn (p17–p18) → ⑦ CN sáng gọi chị gái về chuyện đón mẹ (Tâm → Thảo, chị gái không lên hình) (p19–p23) → BRK-08 nghỉ bao lâu (p24) → khép: 23:30 thứ Hai tuần sau, câu tạm dừng chung (p25). Nhân vật (3): Thảo, chị Hoa, Dũng (xem w145/_series/people-in-conflict.md); đồng nghiệp kế toán (p11) → Dũng bên vận hành lo hồ sơ thanh toán. unit.title lấy lại đủ từ meta (bản cũ bị cụt). Bản cũ (W lần 3): w145/bak/when-to-pause-a-difficult-conversation--w01.js.",
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
            "text": "23:30",
            "x": 60,
            "y": 110,
            "size": 150,
            "at": "l1:eleven thirty",
            "color": "accent",
            "hl": [
              {
                "text": "23:30",
                "at": "l1:eleven thirty"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "vay tiền mua nhà?",
            "x": 70,
            "y": 330,
            "size": 56,
            "at": "l1:loan"
          },
          {
            "id": "a-up",
            "t": "text",
            "text": "càng nói càng to ↑",
            "x": 70,
            "y": 420,
            "size": 50,
            "at": "l2:louder",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Monday, eleven thirty at night. Thảo and her husband discuss a home loan.",
          "sub": "Thứ Hai, mười một rưỡi đêm. Thảo và chồng bàn chuyện có nên vay tiền mua nhà.",
          "keys": [
            "vay tiền mua nhà"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Louder and louder, like two radios fighting for one channel.",
          "sub": "Càng nói càng to, như hai cái đài tranh nhau một kênh.",
          "keys": [
            "Càng nói càng to"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Each wants to finish it tonight. Neither can hear the other.",
          "sub": "Ai cũng muốn nói cho ra nhẽ ngay đêm nay. Mà chẳng ai còn nghe được ai."
        }
      ],
      "ref": "intro,p6"
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
            "at": "l3",
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
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "cross",
                  "face": "stern"
                }
              ],
              "props": [
                "house",
                "crescent-moon"
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
            "caption": "Thứ Hai 23:30 · căn hộ thuê",
            "icon": "house"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Tạm dừng, hay bỏ chạy?",
            "x": 70,
            "y": 560,
            "size": 54,
            "at": "l3:pause",
            "color": "accent",
            "hl": [
              {
                "text": "bỏ chạy",
                "at": "l3:running"
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
          "say": "Thảo is tired. Her husband is off screen, but very much awake.",
          "sub": "Thảo mệt rã rời. Chồng cô không lên hình, nhưng còn tỉnh như sáo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "That's it. I'm going to sleep.",
          "sub": "Thôi em đi ngủ.",
          "face": "stern",
          "pose": "cross"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "She turns to the wall. Is that a pause, or running away?",
          "sub": "Rồi cô quay mặt vào tường. Đó là tạm dừng, hay bỏ chạy?",
          "keys": [
            "tạm dừng, hay bỏ chạy"
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
            "text": "Khi nào nên dừng?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:When",
            "hl": [
              {
                "text": "Khi nào",
                "at": "l1:When"
              }
            ]
          },
          {
            "id": "b-a",
            "t": "text",
            "text": "Khi một người không còn nghe được",
            "x": 2028,
            "y": 160,
            "size": 46,
            "at": "l1:listen",
            "color": "accent",
            "hl": [
              {
                "text": "không còn nghe được",
                "at": "l1:listen"
              }
            ]
          },
          {
            "id": "b-c0",
            "t": "box",
            "x": 2028,
            "y": 290,
            "w": 46,
            "h": 46,
            "at": "l2:Say",
            "stroke": 5
          },
          {
            "id": "b-k0",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 272,
            "size": 58,
            "at": "l2:Say+600",
            "color": "accent"
          },
          {
            "id": "b-l0",
            "t": "text",
            "text": "Nói rõ: mình cần dừng",
            "x": 2098,
            "y": 280,
            "size": 50,
            "at": "l2:Say+200"
          },
          {
            "id": "b-c1",
            "t": "box",
            "x": 2028,
            "y": 370,
            "w": 46,
            "h": 46,
            "at": "l2:time",
            "stroke": 5
          },
          {
            "id": "b-k1",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 352,
            "size": 58,
            "at": "l2:time+600",
            "color": "accent"
          },
          {
            "id": "b-l1",
            "t": "text",
            "text": "Hẹn giờ cụ thể",
            "x": 2098,
            "y": 360,
            "size": 50,
            "at": "l2:time+200"
          },
          {
            "id": "b-c2",
            "t": "box",
            "x": 2028,
            "y": 450,
            "w": 46,
            "h": 46,
            "at": "l2:come back",
            "stroke": 5
          },
          {
            "id": "b-k2",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 432,
            "size": 58,
            "at": "l2:come back+600",
            "color": "accent"
          },
          {
            "id": "b-l2",
            "t": "text",
            "text": "Thật sự quay lại",
            "x": 2098,
            "y": 440,
            "size": 50,
            "at": "l2:come back+200"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+200",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2260,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2492,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2724,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2956,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+1000",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3188,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+1200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3420,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+1400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2 23:30",
            "x": 2044,
            "y": 628,
            "size": 38,
            "at": "l3:seven stops+300"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T2 23:31",
            "x": 2276,
            "y": 628,
            "size": 38,
            "at": "l3:seven stops+500"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T3 họp",
            "x": 2508,
            "y": 628,
            "size": 38,
            "at": "l3:seven stops+700"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T3 chiều",
            "x": 2740,
            "y": 628,
            "size": 38,
            "at": "l3:seven stops+900"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T4 tối",
            "x": 2972,
            "y": 628,
            "size": 38,
            "at": "l3:seven stops+1100"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T5",
            "x": 3204,
            "y": 628,
            "size": 38,
            "at": "l3:seven stops+1300"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "CN sáng",
            "x": 3436,
            "y": 628,
            "size": 38,
            "at": "l3:seven stops+1500"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "When should you pause? When one of you can't listen anymore.",
          "sub": "Khi nào nên tạm dừng? Khi một trong hai người không còn nghe được nữa.",
          "keys": [
            "không còn nghe được nữa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then pause in three parts. Say you need to stop, set a clear time, and really come back.",
          "sub": "Và dừng đúng cách có ba phần: nói rõ mình cần dừng, hẹn giờ cụ thể, rồi thật sự quay lại.",
          "keys": [
            "ba phần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One week with Thảo, seven stops.",
          "sub": "Một tuần cùng Thảo, bảy chặng.",
          "keys": [
            "bảy chặng"
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
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 23:30 · Dấu hiệu cần dừng",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 175,
            "w": 46,
            "h": 46,
            "at": "l1:over",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 157,
            "size": 58,
            "at": "l1:over+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Nói chồng lên nhau",
            "x": 4066,
            "y": 165,
            "size": 44,
            "at": "l1:over+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 250,
            "w": 46,
            "h": 46,
            "at": "l1:always",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 232,
            "size": 58,
            "at": "l1:always+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "“Lúc nào cũng”, “không bao giờ”",
            "x": 4066,
            "y": 240,
            "size": 44,
            "at": "l1:always+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 325,
            "w": 46,
            "h": 46,
            "at": "l2:months",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 307,
            "size": 58,
            "at": "l2:months+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Lôi chuyện mấy tháng trước",
            "x": 4066,
            "y": 315,
            "size": 44,
            "at": "l2:months+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 400,
            "w": 46,
            "h": 46,
            "at": "l3:person",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 382,
            "size": 58,
            "at": "l3:person+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Từ việc sang người",
            "x": 4066,
            "y": 390,
            "size": 44,
            "at": "l3:person+200"
          },
          {
            "id": "c-c4",
            "t": "box",
            "x": 3996,
            "y": 475,
            "w": 46,
            "h": 46,
            "at": "l4:silent",
            "stroke": 5
          },
          {
            "id": "c-k4",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 457,
            "size": 58,
            "at": "l4:silent+600",
            "color": "accent"
          },
          {
            "id": "c-l4",
            "t": "text",
            "text": "Im bặt, khoanh tay",
            "x": 4066,
            "y": 465,
            "size": 44,
            "at": "l4:silent+200"
          },
          {
            "id": "c-ic",
            "t": "illus",
            "name": "stop-sign",
            "x": 5236,
            "y": 170,
            "size": 220,
            "at": "l1:Stop one"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, rewind ten minutes. They talk over each other. Always, never.",
          "sub": "Chặng một, tua lại mười phút. Hai người nói chồng lên nhau. “Lúc nào cũng”, “không bao giờ”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then come things from months ago.",
          "sub": "Rồi lôi cả chuyện từ mấy tháng trước."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "From the problem to the person: that's just how you are.",
          "sub": "Từ việc chuyển sang người: tính anh là thế."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And one goes silent, arms crossed, not looking.",
          "sub": "Và một người im bặt, khoanh tay, không nhìn nữa."
        }
      ],
      "ref": "p1"
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
          }
        ],
        "items": [
          {
            "id": "c-ctx",
            "t": "text",
            "text": "Đêm khuya · con nghe · chỗ đông",
            "x": 4836,
            "y": 440,
            "size": 44,
            "at": "l1:late"
          },
          {
            "id": "c-ctx2",
            "t": "text",
            "text": "· sắp đi làm",
            "x": 4836,
            "y": 510,
            "size": 44,
            "at": "l1:work"
          },
          {
            "id": "c-rule",
            "t": "text",
            "text": "1–2 dấu hiệu là đủ để dừng",
            "x": 4836,
            "y": 620,
            "size": 48,
            "at": "l2:one or two",
            "color": "accent",
            "hl": [
              {
                "text": "1–2 dấu hiệu",
                "at": "l2:one or two"
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
          "say": "The setting is a sign too: late at night, a child listening, a crowd, someone leaving for work.",
          "sub": "Bối cảnh cũng là dấu hiệu: đêm đã khuya, con nhỏ đang nghe, chỗ đông người, một người sắp đi làm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One or two signs are enough. More talking only adds hurt.",
          "sub": "Chỉ cần một hai dấu hiệu là đủ. Nói tiếp chỉ làm tổn thương thêm.",
          "keys": [
            "một hai dấu hiệu là đủ"
          ]
        }
      ],
      "ref": "p2,p3"
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
            "text": "② 23:31 · Dừng hay bỏ chạy?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-run",
            "t": "text",
            "text": "Né tránh: bỏ đi, không nhắc lại",
            "x": 5964,
            "y": 160,
            "size": 46,
            "at": "l1:walking",
            "color": "coral"
          },
          {
            "id": "d-run2",
            "t": "text",
            "text": "→ vấn đề nằm im, chờ bùng",
            "x": 5964,
            "y": 230,
            "size": 46,
            "at": "l2:explode"
          },
          {
            "id": "d-p",
            "t": "text",
            "text": "Tạm dừng = lời hứa quay lại",
            "x": 5964,
            "y": 330,
            "size": 50,
            "at": "l3:promise",
            "color": "accent",
            "hl": [
              {
                "text": "lời hứa",
                "at": "l3:promise"
              }
            ]
          },
          {
            "id": "d-p2",
            "t": "text",
            "text": "Có giờ hẹn · người dừng mở lại",
            "x": 5964,
            "y": 410,
            "size": 44,
            "at": "l4:reopens"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two. Avoiding is walking out, shutting the door, never bringing it up again.",
          "sub": "Chặng hai. Né tránh là bỏ đi, đóng cửa, không bao giờ nhắc lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "They feel ignored, and the problem waits to explode, usually bigger.",
          "sub": "Người kia thấy bị phớt lờ, còn vấn đề nằm im chờ bùng lên, thường to hơn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A pause is a promise: we're not done, I'll come back.",
          "sub": "Tạm dừng là một lời hứa: mình chưa xong, mình sẽ quay lại.",
          "keys": [
            "một lời hứa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It has a set time, and whoever stopped reopens it.",
          "sub": "Có giờ hẹn rõ ràng, và người xin dừng là người mở lại câu chuyện."
        }
      ],
      "ref": "p4,p5"
    },
    {
      "id": "s06",
      "module": "BRK-04",
      "data": {
        "title": "Gần nửa đêm, chuyện vay mua nhà",
        "wrong": "“Thôi em đi ngủ” → cả nhà lạnh tanh một tuần",
        "right": "“Em mệt quá. Tối thứ Bảy mình nói tiếp nhé”",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrongIllus": "sleeping-face",
        "rightIllus": "spiral-calendar"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before: a cold house for a week.",
          "sub": "Trước: cả nhà lạnh tanh suốt một tuần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After: a reason, and a time.",
          "sub": "Sau: có lý do, có giờ hẹn.",
          "keys": [
            "có lý do, có giờ hẹn"
          ]
        }
      ],
      "ref": "p6"
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
            "at": "l1",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
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
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "neutral"
                }
              ],
              "props": [
                "spiral-calendar",
                "crescent-moon"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-06",
                  "on": "thao"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": 0,
            "caption": "Thứ Hai 23:31 · làm lại",
            "icon": "spiral-calendar"
          },
          {
            "id": "d-rule",
            "t": "text",
            "text": "Dừng có hẹn là nghỉ",
            "x": 5964,
            "y": 510,
            "size": 52,
            "at": "l2:break",
            "color": "accent",
            "hl": [
              {
                "text": "có hẹn",
                "at": "l2:time"
              }
            ]
          },
          {
            "id": "d-rule2",
            "t": "text",
            "text": "Dừng không hẹn là bỏ",
            "x": 5964,
            "y": 590,
            "size": 52,
            "at": "l2:leaving",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "This matters, but I'm too tired now. Let's talk on Saturday evening.",
          "sub": "Chuyện này quan trọng, nhưng giờ em mệt quá, nói tiếp dễ nặng lời. Tối thứ Bảy mình nói tiếp nhé.",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A pause with a time is a break. Without one, it's leaving.",
          "sub": "Dừng có hẹn là nghỉ, dừng không hẹn là bỏ.",
          "keys": [
            "Dừng có hẹn là nghỉ"
          ]
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
            "at": "l5",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Ba · Xin dừng thế nào?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three"
          },
          {
            "id": "e-bad",
            "t": "text",
            "text": "“Em vô lý quá, thôi khỏi nói”",
            "x": 7932,
            "y": 160,
            "size": 44,
            "at": "l1:unreasonable",
            "color": "muted"
          },
          {
            "id": "e-badx",
            "t": "strike",
            "over": "e-bad",
            "at": "l2"
          },
          {
            "id": "e-ok",
            "t": "text",
            "text": "“Anh nóng quá, sợ nói sai”",
            "x": 7932,
            "y": 240,
            "size": 46,
            "at": "l2:heated",
            "color": "accent",
            "hl": [
              {
                "text": "nói sai",
                "at": "l2:wrong"
              }
            ]
          },
          {
            "id": "e-me",
            "t": "text",
            "text": "Nói về mình, không về họ",
            "x": 7932,
            "y": 320,
            "size": 46,
            "at": "l2:yourself"
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
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "cross",
                  "face": "stern"
                }
              ],
              "props": [
                "bar-chart",
                "alarm-clock"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "thao"
                },
                {
                  "at": "l4",
                  "shot": "medium",
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
            "at": "l3",
            "caption": "Thứ Ba 10:00 · họp căng",
            "icon": "alarm-clock"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, Tuesday. How do you ask without making them feel dropped? Not: you're unreasonable.",
          "sub": "Chặng ba, thứ Ba. Xin dừng thế nào để người kia không thấy bị bỏ rơi? Đừng nói: em vô lý quá."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Talk about yourself: I'm too heated, I'm afraid I'll say something wrong.",
          "sub": "Nói về mình: anh đang nóng quá, anh sợ nói điều không nên nói.",
          "keys": [
            "Nói về mình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Let's take five minutes and come back to this point.",
          "sub": "Mình nghỉ năm phút rồi quay lại điểm này nhé.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Fine. Five minutes.",
          "sub": "Được. Năm phút.",
          "face": "neutral",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "At work, keep it short. A break keeps the meeting going. Not unprofessional at all.",
          "sub": "Ở chỗ làm, chỉ cần gọn hơn. Xin nghỉ giữ cho buổi họp đi tiếp, chẳng thiếu chuyên nghiệp chút nào.",
          "keys": [
            "giữ cho buổi họp đi tiếp"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 200
        }
      ],
      "ref": "p8,p10"
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
            "id": "e-20",
            "t": "text",
            "text": "“Chuyện này quan trọng với em”",
            "x": 7932,
            "y": 430,
            "size": 44,
            "at": "l1:matters"
          },
          {
            "id": "e-20b",
            "t": "text",
            "text": "+ “nghỉ 20 phút rồi nói tiếp”",
            "x": 7932,
            "y": 500,
            "size": 44,
            "at": "l1:twenty",
            "color": "accent",
            "hl": [
              {
                "text": "20 phút",
                "at": "l1:twenty"
              }
            ]
          },
          {
            "id": "e-tm",
            "t": "text",
            "text": "hoặc: “Tối mai ăn cơm xong”",
            "x": 7932,
            "y": 570,
            "size": 44,
            "at": "l2:Tomorrow"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "At home: this matters to me. Let's take twenty minutes, then talk again?",
          "sub": "Ở nhà: chuyện này quan trọng với em. Mình nghỉ hai mươi phút rồi nói tiếp nhé?",
          "keys": [
            "hai mươi phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Or: tomorrow, after dinner, shall we sit down together?",
          "sub": "Hoặc: tối mai ăn cơm xong mình ngồi lại, được không anh?"
        }
      ],
      "ref": "p9"
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
            "text": "④ T3 chiều · Hồ sơ bị trả",
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
                  "enter": "pop",
                  "at": "l1:Dũng",
                  "pose": "hold",
                  "face": "stern"
                }
              ],
              "props": [
                "page-facing-up",
                "alarm-clock"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "dung"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "Thứ Ba 14:00 · hồ sơ thanh toán",
            "icon": "page-facing-up"
          },
          {
            "id": "f-hot",
            "t": "text",
            "text": "Không khí nóng dần ↑",
            "x": 60,
            "y": 1250,
            "size": 50,
            "at": "l3:heats",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four, Tuesday afternoon. Meet Dũng from operations. He handles payment files.",
          "sub": "Chặng bốn, chiều thứ Ba. Đây là Dũng bên vận hành, người lo hồ sơ thanh toán."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "This payment file came back again. Who checked it?",
          "sub": "Hồ sơ thanh toán này lại bị trả về. Ai kiểm tra vậy?",
          "face": "stern",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The air heats up. Thảo wants out.",
          "sub": "Không khí nóng dần. Thảo muốn rút.",
          "keys": [
            "nóng dần"
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
      "ref": "p11"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Ba 14:00 · bàn làm việc",
        "actors": [
          {
            "id": "thao",
            "side": "left",
            "pose": "cross"
          },
          {
            "id": "dung",
            "side": "right",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "“Để lúc khác”",
          "why": "“Lúc khác” rất dễ không bao giờ đến; vài tuần sau email bay thẳng lên trưởng phòng.",
          "rule": "Hẹn giờ cụ thể"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Let's just leave it for later.",
          "sub": "Thôi để lúc khác.",
          "face": "stern",
          "pose": "cross",
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
          "say": "Later may never come. In weeks, he emails the manager: I reminded her, no reply.",
          "sub": "“Lúc khác” dễ không bao giờ đến. Vài tuần sau, Dũng email lên trưởng phòng: đã nhắc mà không thấy phản hồi.",
          "keys": [
            "không bao giờ đến"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind.",
          "sub": "Tua lại.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Let's look at the file together at three this afternoon.",
          "sub": "Ba giờ chiều nay mình xem lại hồ sơ cùng nhau nhé.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Three o'clock. Okay, deal.",
          "sub": "Ba giờ. Ok, chốt.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
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
            "fit": "F",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "f-bad",
            "t": "text",
            "text": "“Để lúc khác”",
            "x": 60,
            "y": 1350,
            "size": 50,
            "at": "l1:later",
            "color": "muted"
          },
          {
            "id": "f-badx",
            "t": "strike",
            "over": "f-bad",
            "at": "l1:three"
          },
          {
            "id": "f-ok",
            "t": "text",
            "text": "“15:00 chiều nay”",
            "x": 60,
            "y": 1430,
            "size": 64,
            "at": "l1:three",
            "color": "accent",
            "hl": [
              {
                "text": "15:00",
                "at": "l1:three"
              }
            ]
          },
          {
            "id": "f-rule",
            "t": "text",
            "text": "Hẹn mơ hồ = không bao giờ",
            "x": 880,
            "y": 1795,
            "size": 40,
            "at": "l2:vague",
            "color": "accent",
            "hl": [
              {
                "text": "không bao giờ",
                "at": "l2:never"
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
          "say": "Not later, but three this afternoon. Dũng knows it'll be handled, so no need to go above her.",
          "sub": "Không phải “lúc khác”, mà ba giờ chiều nay. Dũng biết việc sẽ được xử lý, nên chẳng cần tìm đến cấp trên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A vague later is a promise for never.",
          "sub": "Hẹn mơ hồ là hẹn không bao giờ.",
          "keys": [
            "hẹn không bao giờ"
          ]
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s13",
      "module": "BRK-07",
      "data": {
        "kicker": "Thử nghĩ xem…",
        "question": "Nghỉ một tiếng để ghi mười lỗi của chồng: lần sau nhẹ hay nặng hơn?",
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
          "say": "What do you do during the break?",
          "sub": "Trong lúc nghỉ thì làm gì?",
          "keys": [
            "Trong lúc nghỉ"
          ]
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
            "text": "⑤ Thứ Tư tối · Nghỉ làm gì?",
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
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "stern"
                }
              ],
              "props": [
                "memo",
                "pen"
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
            "at": "l1:hour",
            "caption": "Thứ Tư 21:00 · nghỉ một tiếng",
            "icon": "memo"
          },
          {
            "id": "g-10",
            "t": "text",
            "text": "Mười điều anh làm sai",
            "x": 2028,
            "y": 1250,
            "size": 50,
            "at": "l2:Ten",
            "color": "coral"
          },
          {
            "id": "g-q",
            "t": "text",
            "text": "Lần sau: nhẹ hơn hay nặng hơn?",
            "x": 2028,
            "y": 1330,
            "size": 44,
            "at": "l3:easier"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, Wednesday night. A fight about visiting his family's ancestors. Thảo asks for an hour's break.",
          "sub": "Chặng năm, tối thứ Tư. Cãi nhau chuyện đi lễ nhà nội. Thảo xin chồng nghỉ một tiếng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Ten things he did wrong this year. I'll read them all.",
          "sub": "Mười điều anh ấy làm sai suốt năm qua. Mình sẽ đọc hết.",
          "face": "stern",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Will the second talk be easier, or harder?",
          "sub": "Lần nói chuyện thứ hai sẽ nhẹ hơn hay nặng hơn?",
          "keys": [
            "nhẹ hơn hay nặng hơn"
          ]
        }
      ],
      "ref": "p15"
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
          }
        ],
        "items": [
          {
            "id": "g-h",
            "t": "text",
            "text": "Nặng hơn: nghỉ thành phản công",
            "x": 2028,
            "y": 1420,
            "size": 44,
            "at": "l1:Harder",
            "color": "coral",
            "hl": [
              {
                "text": "Nặng hơn",
                "at": "l1:Harder"
              }
            ]
          },
          {
            "id": "g-cool",
            "t": "text",
            "text": "Đi bộ · uống nước · rửa mặt",
            "x": 2028,
            "y": 1500,
            "size": 44,
            "at": "l2:walk"
          },
          {
            "id": "g-rule",
            "t": "text",
            "text": "Nghỉ để nguội, đừng mài dao",
            "x": 2028,
            "y": 1580,
            "size": 50,
            "at": "l3:Rest",
            "color": "accent",
            "hl": [
              {
                "text": "đừng mài dao",
                "at": "l3:knife"
              }
            ]
          },
          {
            "id": "g-knife",
            "t": "illus",
            "name": "kitchen-knife",
            "x": 2668,
            "y": 1560,
            "size": 100,
            "at": "l3:knife"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Harder. The break became time to plan an attack. He can only defend himself.",
          "sub": "Nặng hơn. Giờ nghỉ đã thành giờ chuẩn bị phản công. Chồng chỉ còn cách tự vệ.",
          "keys": [
            "chuẩn bị phản công"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Really cool down: walk, drink water, wash your face, do something with your hands.",
          "sub": "Hạ nhiệt thật sự: đi bộ một vòng, uống nước, rửa mặt, làm việc tay chân."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Rest to cool down. Don't rest to sharpen your knife.",
          "sub": "Nghỉ để nguội, đừng nghỉ để mài dao.",
          "keys": [
            "đừng nghỉ để mài dao"
          ]
        }
      ],
      "ref": "p15,p13,p16"
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
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1665,
            "w": 46,
            "h": 46,
            "at": "l1:need",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 1647,
            "size": 58,
            "at": "l1:need+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "Mình thật sự cần gì?",
            "x": 2098,
            "y": 1655,
            "size": 40,
            "at": "l1:need+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1727,
            "w": 46,
            "h": 46,
            "at": "l2:worried",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 1709,
            "size": 58,
            "at": "l2:worried+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "Người kia đang lo gì?",
            "x": 2098,
            "y": 1717,
            "size": 40,
            "at": "l2:worried+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1789,
            "w": 46,
            "h": 46,
            "at": "l3:mine",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 1771,
            "size": 58,
            "at": "l3:mine+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "Phần nào là của mình?",
            "x": 2098,
            "y": 1779,
            "size": 40,
            "at": "l3:mine+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Then ask yourself three questions. What do I really need from this talk?",
          "sub": "Rồi tự hỏi ba câu. Mình thật sự cần gì từ cuộc nói chuyện này?",
          "keys": [
            "ba câu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "What might he be worried about?",
          "sub": "Người kia có thể đang lo điều gì?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Which part can I admit is mine?",
          "sub": "Phần nào mình có thể nhận là của mình?"
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s16b",
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
            "at": "l2",
            "fit": [
              "g-w"
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
            "id": "g-w",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking",
                  "enter": "walk",
                  "at": "l1"
                }
              ],
              "props": [
                "droplet",
                "person-walking"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "thao"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Tư 21:20 · đi bộ cho nguội",
            "icon": "person-walking"
          },
          {
            "id": "g-tear",
            "t": "text",
            "text": "Xé danh sách ✓",
            "x": 2848,
            "y": 1795,
            "size": 40,
            "at": "l1:tears",
            "color": "accent",
            "hl": [
              {
                "text": "Xé",
                "at": "l1:tears"
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
          "say": "Rewind the hour. This time Thảo tears up the list, and walks around the block.",
          "sub": "Tua lại một tiếng ấy. Lần này Thảo xé danh sách, đi bộ một vòng quanh khu nhà."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "What might he be worried about, with the family visit?",
          "sub": "Anh ấy đang lo điều gì về chuyện đi lễ nhỉ?",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Now the second talk can go better than the first.",
          "sub": "Giờ thì lần nói sau mới có thể khá hơn lần đầu.",
          "keys": [
            "khá hơn lần đầu"
          ]
        }
      ],
      "ref": "p13,p15,p16"
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
            "at": "l3",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Năm · Không chịu dừng",
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
              "set": "kitchen",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "stop",
                  "face": "neutral"
                }
              ],
              "props": [
                "alarm-clock",
                "droplet"
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
            "at": "l1:Thursday",
            "caption": "Thứ Năm 19:00 · trong bếp",
            "icon": "alarm-clock"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Nói lại một lần, kèm giờ hẹn",
            "x": 3996,
            "y": 1250,
            "size": 46,
            "at": "l1b:once",
            "hl": [
              {
                "text": "kèm giờ hẹn",
                "at": "l1b:time"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Giữ đúng hẹn → lần sau dễ hơn",
            "x": 3996,
            "y": 1330,
            "size": 44,
            "at": "l3:Keeping",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, Thursday. Her husband follows her into the kitchen, like a radio stuck on max volume.",
          "sub": "Chặng sáu, thứ Năm. Chồng đi theo vào tận bếp, như cái đài kẹt nút âm lượng to nhất."
        },
        {
          "id": "l1b",
          "lang": "en",
          "who": "det",
          "say": "He won't stop. Say it once more, calmly, with a time.",
          "sub": "Anh không chịu dừng. Thì nói lại một lần, giọng bình tĩnh, kèm giờ hẹn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I want to talk about this, but not like this. Let's talk at seven tonight.",
          "sub": "Em muốn nói chuyện này, nhưng không phải lúc cả hai đang thế này. Bảy giờ tối nay mình nói nhé.",
          "pose": "stop"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then keep that time. Keeping it makes the next pause easier to accept.",
          "sub": "Rồi giữ đúng hẹn. Giữ hẹn thì lần sau người kia dễ chấp nhận hơn.",
          "keys": [
            "giữ đúng hẹn"
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
          }
        ],
        "items": [
          {
            "id": "h-r",
            "t": "text",
            "text": "Họ xin dừng → tôn trọng",
            "x": 3996,
            "y": 1430,
            "size": 48,
            "at": "l1:respect",
            "hl": [
              {
                "text": "tôn trọng",
                "at": "l1:respect"
              }
            ]
          },
          {
            "id": "h-q",
            "t": "text",
            "text": "“Mấy giờ mình nói tiếp được?”",
            "x": 3996,
            "y": 1510,
            "size": 46,
            "at": "l2:What time",
            "color": "accent"
          },
          {
            "id": "h-s",
            "t": "text",
            "text": "Đe doạ, động tay: an toàn trước",
            "x": 4816,
            "y": 1795,
            "size": 40,
            "at": "l3:threats",
            "color": "coral",
            "hl": [
              {
                "text": "an toàn trước",
                "at": "l3:safe"
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
          "say": "When they ask for a pause, respect it. Following them into the room corners them.",
          "sub": "Khi người kia xin dừng, hãy tôn trọng. Đi theo vào phòng để nói nốt chỉ dồn họ vào góc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Just ask: what time can we continue?",
          "sub": "Chỉ cần hỏi: mấy giờ mình nói tiếp được?",
          "keys": [
            "mấy giờ mình nói tiếp được"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Threats or violence? Don't keep talking. Get safe, ask trusted family, call the police if in danger.",
          "sub": "Có đe doạ hay động tay chân? Đừng cố nói tiếp. Ra chỗ an toàn, nhờ người thân tin cậy, gọi công an nếu nguy hiểm."
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
            "text": "⑦ Sáng Chủ nhật · Quay lại",
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
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "neutral"
                }
              ],
              "props": [
                "mobile-phone",
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
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:sister",
            "caption": "Chủ nhật 9:00 · gọi chị gái",
            "icon": "mobile-phone"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Cảm ơn đã chờ",
            "x": 5964,
            "y": 1250,
            "size": 50,
            "at": "l2:Thank you",
            "hl": [
              {
                "text": "Cảm ơn",
                "at": "l2:Thank you"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Nhận phần mình",
            "x": 5964,
            "y": 1325,
            "size": 50,
            "at": "l2:sorry"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Mở bằng một câu hỏi",
            "x": 5964,
            "y": 1400,
            "size": 50,
            "at": "l3:Tell me",
            "color": "accent",
            "hl": [
              {
                "text": "câu hỏi",
                "at": "l3:Tell me"
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
          "say": "Stop seven, Sunday morning. Thảo and her older sister argued: who takes Mum in after her illness? They agreed to talk again today.",
          "sub": "Chặng bảy, sáng Chủ nhật. Thảo và chị gái đã cãi nhau: ai đón mẹ lên ở cùng sau đợt mẹ ốm? Hai chị em hẹn sáng nay nói tiếp."
        },
        {
          "id": "l1b",
          "lang": "en",
          "who": "det",
          "say": "The first sentence after a break decides where the talk goes.",
          "sub": "Câu đầu tiên sau quãng nghỉ quyết định cuộc nói chuyện đi về đâu.",
          "keys": [
            "Câu đầu tiên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Thank you for waiting. The other day I shouted. I'm sorry.",
          "sub": "Cảm ơn chị đã chờ. Hôm trước em lớn tiếng, em xin lỗi.",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Tell me what worries you most.",
          "sub": "Chị kể em nghe chị lo nhất điều gì.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Thanks, because waiting is hard for them too. Then her sister opens up: she fears her small house will make Mum sad.",
          "sub": "Cảm ơn, vì chờ cũng khó với người kia. Rồi chị gái mới kể: chị sợ nhà chật làm mẹ tủi."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p22,p19,p20"
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
            "id": "i-deal",
            "t": "text",
            "text": "→ Mỗi nhà đón mẹ một thời gian",
            "x": 5964,
            "y": 1490,
            "size": 44,
            "at": "l1:each",
            "color": "accent"
          },
          {
            "id": "i-x1",
            "t": "text",
            "text": "“Anh nghĩ kỹ rồi, anh vẫn đúng”",
            "x": 5964,
            "y": 1570,
            "size": 40,
            "at": "l2:still right",
            "color": "muted"
          },
          {
            "id": "i-x2",
            "t": "text",
            "text": "“Thôi bỏ qua đi”",
            "x": 5964,
            "y": 1635,
            "size": 40,
            "at": "l2:forget",
            "color": "muted"
          },
          {
            "id": "i-x1s",
            "t": "strike",
            "over": "i-x1",
            "at": "l2:war"
          },
          {
            "id": "i-x2s",
            "t": "strike",
            "over": "i-x2",
            "at": "l2:avoiding"
          },
          {
            "id": "i-rule",
            "t": "text",
            "text": "Mở lại: lời cảm ơn + câu hỏi",
            "x": 6784,
            "y": 1795,
            "size": 40,
            "at": "l3:thank you",
            "color": "accent",
            "hl": [
              {
                "text": "câu hỏi",
                "at": "l3:question"
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
          "say": "So Mum stays with each family for a while, instead of a fight over who loves her more.",
          "sub": "Thế là mỗi nhà đón mẹ một thời gian, thay vì cãi xem ai có hiếu hơn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Avoid: I'm still right, which restarts the war. And: let's forget it, which turns pause into avoiding.",
          "sub": "Tránh hai câu: “anh vẫn đúng” khơi lại cuộc chiến; “thôi bỏ qua đi” biến tạm dừng thành né tránh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Restart with a thank you, and a question. One topic only.",
          "sub": "Mở lại bằng lời cảm ơn và một câu hỏi. Chỉ bàn một chuyện.",
          "keys": [
            "lời cảm ơn và một câu hỏi"
          ]
        }
      ],
      "ref": "p22,p21,p23"
    },
    {
      "id": "s21",
      "module": "BRK-08",
      "data": {
        "title": "Nghỉ bao lâu?",
        "points": [
          {
            "label": "Vài phút",
            "sub": "Ở chỗ làm",
            "illus": "office-building"
          },
          {
            "label": "Vài chục phút",
            "sub": "đến một ngày · trong nhà",
            "illus": "house"
          },
          {
            "label": "Quá vài ngày",
            "sub": "Dễ thành né tránh",
            "illus": "warning"
          }
        ],
        "current": 1
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Work: minutes. Home: tens of minutes to a day.",
          "sub": "Chỗ làm: vài phút. Trong nhà: vài chục phút đến một ngày."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Days, unagreed? That's avoiding.",
          "sub": "Quá vài ngày mà không cùng đồng ý? Thành né tránh.",
          "keys": [
            "Thành né tránh"
          ]
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
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Thứ Hai tuần sau · 23:30",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Monday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
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
                "crescent-moon"
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
            "at": "l1:same",
            "caption": "Thứ Hai · 23:30 · cùng căn hộ",
            "icon": "house"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Câu tạm dừng chung",
            "x": 7932,
            "y": 1270,
            "size": 56,
            "at": "l2:twenty",
            "color": "accent",
            "hl": [
              {
                "text": "tạm dừng chung",
                "at": "l3:shared"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "= lời hẹn, không phải bỏ đi",
            "x": 7932,
            "y": 1370,
            "size": 46,
            "at": "l3:promise"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Monday again, eleven thirty, same flat. The loan talk heats up again.",
          "sub": "Lại thứ Hai, mười một rưỡi, vẫn căn hộ ấy. Chuyện vay mua nhà lại nóng lên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Let's take twenty minutes, then talk again, okay?",
          "sub": "Mình nghỉ hai mươi phút rồi nói tiếp nhé?",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Since Saturday, it's their shared pause sentence. Both know it's a promise. Nobody faces the wall.",
          "sub": "Từ hôm thứ Bảy, đó là câu tạm dừng chung của hai người. Ai cũng hiểu đó là lời hẹn. Chẳng ai quay mặt vào tường.",
          "keys": [
            "câu tạm dừng chung"
          ]
        }
      ],
      "ref": "p25,outro"
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
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l1",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "I",
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
            "x": 6684,
            "y": 500,
            "at": "l1:reason+200"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 560,
            "y": 1430,
            "at": "l2:time+200"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 6464,
            "y": 1390,
            "at": "l3:thank+200"
          },
          {
            "id": "z-s1",
            "t": "text",
            "text": "Tiếp theo: tách sự việc khỏi cảm xúc",
            "x": 7932,
            "y": 1560,
            "size": 32,
            "at": "l4:next+600",
            "font": "base"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; khi có đe doạ hay bạo lực, hãy tìm người tin cậy hoặc cơ quan chức năng.",
            "x": 7932,
            "y": 1810,
            "size": 26,
            "at": "l4:end",
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
          "say": "So: give a reason, talking about yourself.",
          "sub": "Tóm lại: nói rõ lý do, nói về mình.",
          "keys": [
            "nói rõ lý do"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Set a clear time, not some vague later.",
          "sub": "Hẹn giờ cụ thể, không phải “lúc khác”.",
          "keys": [
            "Hẹn giờ cụ thể"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And come back with a thank you and a question.",
          "sub": "Và quay lại bằng lời cảm ơn và một câu hỏi.",
          "keys": [
            "một câu hỏi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Tonight, agree on one pause sentence with your family. Next: separating facts from feelings.",
          "sub": "Tối nay, thống nhất với người thân một câu xin tạm dừng chung. Bài tiếp: tách sự việc khỏi cảm xúc."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s33",
      "module": "QUIZ-01",
      "ref": "questions[20]",
      "data": {
        "q": "What does the saying cool down, do not sharpen your knife mean?",
        "options": [
          "You should always take a long break before any important family discussion",
          "Kitchen work is a good way to forget an argument with your partner",
          "A break is for calming down, not for planning how to hurt the other person"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "kitchen-knife",
        "why": "Tạm dừng để hạ nhiệt và hiểu nhau, không phải để chuẩn bị phản công."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What does the saying cool down, do not sharpen your knife mean?",
          "sub": "Câu “nghỉ để nguội, đừng nghỉ để mài dao” có nghĩa là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A break is for calming down, not for planning how to hurt the other person.",
          "sub": "Nghỉ là để bình tĩnh lại, không phải để tính cách làm đau người kia."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "If you use the break to prepare an attack, the pause loses its point.",
          "sub": "Dùng lúc nghỉ để chuẩn bị phản công thì tạm dừng mất hết tác dụng."
        }
      ]
    },
    {
      "id": "s34",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Dừng đúng lúc, quay lại đúng hẹn"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting below.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ bên dưới."
        }
      ]
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s22"
  }
};
