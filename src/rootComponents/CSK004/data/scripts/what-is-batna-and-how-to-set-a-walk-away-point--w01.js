// Kịch bản video W lần 3 (#110) — "BATNA là gì? Cách xác định điểm dừng trước khi đàm phán" · chuỗi "Thương lượng ở chỗ làm"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); hoạt hình + thẻ. Đủ ý cho 40 câu hỏi của bài.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "what-is-batna-and-how-to-set-a-walk-away-point--w01",
  "hook": "HOOK-15",
  "unit": {
    "audience": "everyday-negotiators",
    "slug": "what-is-batna-and-how-to-set-a-walk-away-point",
    "door": "ky-nang",
    "level": "B1",
    "title": "BATNA là gì? Cách xác định điểm dừng trước khi đàm phán",
    "series": "Thương lượng ở chỗ làm"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng trắng 10 ô đi theo MỘT TUẦN ĐI TÌM VIỆC của Dũng (một năm trước, trước khi về pha chế ở quán Cô Hoa; xem w145/_series/everyday-negotiators.md). Mở 17:00 thứ Sáu: “trả lời trong hôm nay”, ngón cái lơ lửng → tua về thứ Hai: ① BATNA = phương án B (p1–p3) → ② điểm dừng ≠ phương án B, ba điều (p4–p6) → ③ T3 tối Thảo (bạn, dân mua hàng) chỉ năm bước, viết vào điện thoại, mục tiêu không phải tham (p7–p9) → BRK-07 → ④ T4 phỏng vấn ở quán Cô Hoa, cô kể chuyện mặt bằng (Chị Dung → Cô Hoa, p19–p20) + BRK-06 (p18) (p17) → ⑤ T5 đổi điểm dừng? + Giang (p14–p16) → ⑥ T6 10:00 nói phương án B thật (p21) + BRK-10 bịa người trả cao (p22–p23) + giữ điểm dừng (p24) → “Khoan đã!” 17:00 (Bảo → Dũng, p10–p13) → ⑦ xin đến sáng thứ Hai → khép 9:00 thứ Hai: quán Cô Hoa mời mức tốt hơn. Công ty mời Dũng không lên hình (chỉ tin nhắn/cuộc gọi). Bản cũ: w145/bak/what-is-batna-and-how-to-set-a-walk-away-point--w01.js.",
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
            "text": "“Trả lời trong hôm nay nhé”",
            "x": 60,
            "y": 120,
            "size": 96,
            "at": "l1:today",
            "color": "accent",
            "hl": [
              {
                "text": "trong hôm nay",
                "at": "l1:today"
              }
            ]
          },
          {
            "id": "a-l",
            "t": "text",
            "text": "Lương: dưới mặt bằng",
            "x": 70,
            "y": 300,
            "size": 58,
            "at": "l2:below",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Friday, five p.m. A company texts: please answer today.",
          "sub": "Thứ Sáu, năm giờ chiều. Một công ty nhắn: em trả lời trong hôm nay nhé.",
          "keys": [
            "trả lời trong hôm nay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The salary is below the market rate. And the clock is ticking.",
          "sub": "Mức lương thấp hơn mặt bằng. Còn đồng hồ thì cứ chạy.",
          "keys": [
            "thấp hơn mặt bằng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "tich-tac-dai",
          "to": "l2"
        }
      ],
      "ref": "intro,p11"
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
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "mobile-phone",
                "hourglass-not-done"
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
            "at": "l1",
            "caption": "Thứ Sáu 17:00 · phòng trọ",
            "icon": "mobile-phone"
          },
          {
            "id": "a-yes",
            "t": "text",
            "text": "“Dạ, em nhận…”",
            "x": 70,
            "y": 430,
            "size": 60,
            "at": "l3:thumb",
            "color": "muted"
          },
          {
            "id": "a-b",
            "t": "text",
            "text": "Sợ “không nhận thì mất”",
            "x": 70,
            "y": 540,
            "size": 52,
            "at": "l3:lose",
            "hl": [
              {
                "text": "không nhận thì mất",
                "at": "l3:lose"
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
          "say": "Meet Dũng, one year ago, before he made coffee at Cô Hoa's café. He left his old job a month ago.",
          "sub": "Đây là Dũng, một năm trước, khi chưa về pha chế ở quán Cô Hoa. Cậu nghỉ việc cũ được một tháng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Answer today? Okay, okay, I'll just say yes!",
          "sub": "Trả lời trong hôm nay á? Thôi, nhận luôn cho xong!",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "His thumb hovers over send. Say no, and lose it all? Hold that thumb. Rewind to Monday.",
          "sub": "Ngón cái lơ lửng trên nút gửi. Không nhận thì mất? Giữ ngón tay đó lại. Tua về thứ Hai.",
          "keys": [
            "Không nhận thì mất"
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
      "ref": "intro,p11"
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
            "text": "BATNA là gì? Dừng ở đâu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:BATNA",
            "hl": [
              {
                "text": "Dừng ở đâu",
                "at": "l1:walk away"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: có, hoặc không có gì",
            "x": 2028,
            "y": 160,
            "size": 50,
            "at": "l2:nothing",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:this"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: cái này, hoặc B",
            "x": 2028,
            "y": 250,
            "size": 58,
            "at": "l3:plan B",
            "color": "accent",
            "hl": [
              {
                "text": "hoặc B",
                "at": "l3:plan B"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l4:seven stops+200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2260,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l4:seven stops+400",
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
            "at": "l4:seven stops+600",
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
            "at": "l4:seven stops+800",
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
            "at": "l4:seven stops+1000",
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
            "at": "l4:seven stops+1200",
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
            "at": "l4:seven stops+1400",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2 sáng",
            "x": 2048,
            "y": 628,
            "size": 40,
            "at": "l4:seven stops+300"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T2 tối",
            "x": 2280,
            "y": 628,
            "size": 40,
            "at": "l4:seven stops+500"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T3 tối",
            "x": 2512,
            "y": 628,
            "size": 40,
            "at": "l4:seven stops+700"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T4",
            "x": 2744,
            "y": 628,
            "size": 40,
            "at": "l4:seven stops+900"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T5",
            "x": 2976,
            "y": 628,
            "size": 40,
            "at": "l4:seven stops+1100"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T6 10:00",
            "x": 3208,
            "y": 628,
            "size": 40,
            "at": "l4:seven stops+1300"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "T6 17:00",
            "x": 3440,
            "y": 628,
            "size": 40,
            "at": "l4:seven stops+1500"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what is a BATNA, and where should you walk away?",
          "sub": "Vậy BATNA là gì, và mình nên dừng ở đâu?",
          "keys": [
            "dừng ở đâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Under pressure, any offer looks better than nothing.",
          "sub": "Khi bị giục, lời đề nghị nào cũng có vẻ hơn “không có gì”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But you never stand before this or nothing. It's this, or plan B.",
          "sub": "Nhưng bạn đâu đứng trước “có hoặc không có gì”, mà là “cái này hoặc phương án B”.",
          "keys": [
            "cái này hoặc phương án B"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Let's walk Dũng's week again, in seven stops.",
          "sub": "Cùng đi lại tuần của Dũng, bảy chặng.",
          "keys": [
            "bảy chặng"
          ]
        }
      ],
      "ref": "intro,p10"
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
            "at": "l3",
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
            "text": "① Thứ Hai sáng · Phương án B",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:morning"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "notebook",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "dung",
                  "move": "push"
                }
              ]
            },
            "at": "l1:morning",
            "caption": "Thứ Hai 8:00 · phòng trọ",
            "icon": "notebook"
          },
          {
            "id": "c-def",
            "t": "text",
            "text": "BATNA: phương án tốt nhất",
            "x": 3996,
            "y": 160,
            "size": 50,
            "at": "l2:best",
            "color": "accent",
            "hl": [
              {
                "text": "tốt nhất",
                "at": "l2:best"
              }
            ]
          },
          {
            "id": "c-def2",
            "t": "text",
            "text": "nếu không đạt thoả thuận",
            "x": 3996,
            "y": 230,
            "size": 46,
            "at": "l2:agreement"
          },
          {
            "id": "c-q",
            "t": "text",
            "text": "Không thành thì mình làm gì?",
            "x": 3996,
            "y": 320,
            "size": 48,
            "at": "l3:fails",
            "hl": [
              {
                "text": "làm gì",
                "at": "l3:do"
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
          "say": "Stop one, Monday morning. Dũng meets a scary word: BATNA.",
          "sub": "Chặng một, sáng thứ Hai. Dũng gặp một từ nghe đáng sợ: BATNA."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It stands for the best alternative to a negotiated agreement. Plan B, for short.",
          "sub": "Viết tắt của “phương án tốt nhất nếu không đạt được thoả thuận”. Nói gọn: phương án B.",
          "keys": [
            "phương án B"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "So, if this talk fails, what will I actually do?",
          "sub": "Tức là, nếu lần này không thành, mình sẽ làm gì?",
          "face": "thinking"
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
            "id": "c-a1",
            "t": "text",
            "text": "Nhận lời công ty khác",
            "x": 3996,
            "y": 420,
            "size": 44,
            "at": "l1:company"
          },
          {
            "id": "c-a2",
            "t": "text",
            "text": "Giữ nguyên hiện tại ✓",
            "x": 3996,
            "y": 490,
            "size": 44,
            "at": "l1:are",
            "hl": [
              {
                "text": "Giữ nguyên",
                "at": "l1:are"
              }
            ]
          },
          {
            "id": "c-mine",
            "t": "text",
            "text": "Dũng: chờ 2 buổi phỏng vấn",
            "x": 3996,
            "y": 570,
            "size": 46,
            "at": "l2:interviews",
            "color": "accent",
            "hl": [
              {
                "text": "2 buổi phỏng vấn",
                "at": "l2:interviews"
              }
            ]
          },
          {
            "id": "c-write",
            "t": "text",
            "text": "Viết ra, kẻo quên lúc căng",
            "x": 3996,
            "y": 660,
            "size": 44,
            "at": "l3:write",
            "color": "coral",
            "hl": [
              {
                "text": "Viết ra",
                "at": "l3:write"
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
          "say": "A real action: accept another company, order elsewhere, or keep things as they are.",
          "sub": "Một việc cụ thể: nhận lời công ty khác, đặt nơi khác, hoặc giữ nguyên như hiện tại.",
          "keys": [
            "giữ nguyên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Dũng's plan B? Two interviews still waiting for results.",
          "sub": "Phương án B của Dũng? Hai buổi phỏng vấn đang chờ kết quả.",
          "keys": [
            "Hai buổi phỏng vấn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "People who give in early rarely lack a plan B. They forget it under stress. So write it down.",
          "sub": "Người hay nhượng sớm ít khi thiếu phương án B; họ chỉ quên nó lúc căng thẳng. Nên hãy viết ra.",
          "keys": [
            "viết ra"
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
            "text": "② Thứ Hai tối · Điểm dừng",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:night"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "memo",
                "stop-sign"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
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
            "at": "l1:night",
            "caption": "Thứ Hai 21:00",
            "icon": "stop-sign"
          },
          {
            "id": "d-b",
            "t": "text",
            "text": "Phương án B = một việc",
            "x": 5964,
            "y": 160,
            "size": 52,
            "at": "l3:action",
            "hl": [
              {
                "text": "một việc",
                "at": "l3:action"
              }
            ]
          },
          {
            "id": "d-s",
            "t": "text",
            "text": "Điểm dừng = con số, điều kiện",
            "x": 5964,
            "y": 240,
            "size": 48,
            "at": "l3:number",
            "color": "accent",
            "hl": [
              {
                "text": "con số",
                "at": "l3:number"
              }
            ]
          },
          {
            "id": "d-ex",
            "t": "text",
            "text": "lương ≥ · giá ≤ · giao ≤ ngày",
            "x": 5964,
            "y": 320,
            "size": 44,
            "at": "l4:salary"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, Monday night. Is plan B the same as a walk-away point?",
          "sub": "Chặng hai, tối thứ Hai. Phương án B có phải là điểm dừng không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Wait. Aren't they the same thing?",
          "sub": "Ơ, hai cái đó không phải là một à?",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No. Plan B is an action. A walk-away point is a number or a condition.",
          "sub": "Không. Phương án B là một việc. Điểm dừng là một con số hoặc điều kiện.",
          "keys": [
            "một việc",
            "con số hoặc điều kiện"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Salary not below this. Price not above that. Delivery not later than that day.",
          "sub": "Lương không dưới mức này. Giá không quá mức kia. Giao hàng không muộn hơn ngày đó."
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
            "id": "d-from",
            "t": "text",
            "text": "B → suy ra điểm dừng",
            "x": 5964,
            "y": 420,
            "size": 50,
            "at": "l1:comes",
            "hl": [
              {
                "text": "suy ra",
                "at": "l1:comes"
              }
            ]
          },
          {
            "id": "d-3a",
            "t": "text",
            "text": "Mục tiêu: mức hy vọng",
            "x": 5964,
            "y": 510,
            "size": 44,
            "at": "l3:target",
            "color": "accent"
          },
          {
            "id": "d-3b",
            "t": "text",
            "text": "Điểm dừng: mức kém nhất",
            "x": 5964,
            "y": 580,
            "size": 44,
            "at": "l3:walk-away"
          },
          {
            "id": "d-3c",
            "t": "text",
            "text": "Phương án B: việc sẽ làm",
            "x": 5964,
            "y": 650,
            "size": 44,
            "at": "l3:plan B"
          },
          {
            "id": "d-bu",
            "t": "text",
            "text": "Thấp hơn nhiều? Trừ khi bù khác",
            "x": 6804,
            "y": 705,
            "size": 38,
            "at": "l2:make up",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The walk-away point comes from plan B. The deal must be at least as good as leaving.",
          "sub": "Điểm dừng suy ra từ phương án B: thoả thuận phải tốt ít nhất bằng việc bạn làm nếu bỏ đi.",
          "keys": [
            "suy ra từ phương án B"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Got a salary elsewhere? Much lower here is hardly worth it, unless they make up with something you value.",
          "sub": "Nơi khác đã trả một mức lương, nơi này thấp hơn nhiều thì khó đáng nhận, trừ khi họ bù bằng điều bạn coi trọng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So bring three things: a target, a walk-away point, and plan B.",
          "sub": "Vậy mang theo ba điều: mục tiêu, điểm dừng, và phương án B.",
          "keys": [
            "ba điều"
          ]
        }
      ],
      "ref": "p5,p6"
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
          },
          {
            "at": "l5",
            "fit": [
              "e-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Ba tối · Ba con số",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:friend"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "think"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                }
              ],
              "props": [
                "mobile-phone",
                "hot-beverage"
              ]
            },
            "at": "l1:friend",
            "caption": "Thứ Ba 20:00 · quán nước",
            "icon": "hot-beverage"
          },
          {
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 160,
            "w": 46,
            "h": 46,
            "at": "l3:List",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 142,
            "size": 58,
            "at": "l3:List+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Liệt kê mọi lựa chọn",
            "x": 8002,
            "y": 150,
            "size": 40,
            "at": "l3:List+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 238,
            "w": 46,
            "h": 46,
            "at": "l3:Compare",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 220,
            "size": 58,
            "at": "l3:Compare+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "So: tiền, thời gian, rủi ro",
            "x": 8002,
            "y": 228,
            "size": 40,
            "at": "l3:Compare+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 316,
            "w": 46,
            "h": 46,
            "at": "l4:best",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 298,
            "size": 58,
            "at": "l4:best+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Chọn tốt nhất → phương án B",
            "x": 8002,
            "y": 306,
            "size": 40,
            "at": "l4:best+200"
          },
          {
            "id": "e-c3",
            "t": "box",
            "x": 7932,
            "y": 394,
            "w": 46,
            "h": 46,
            "at": "l4:walk-away",
            "stroke": 5
          },
          {
            "id": "e-k3",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 376,
            "size": 58,
            "at": "l4:walk-away+600",
            "color": "accent"
          },
          {
            "id": "e-l3",
            "t": "text",
            "text": "Từ B → điểm dừng",
            "x": 8002,
            "y": 384,
            "size": 40,
            "at": "l4:walk-away+200"
          },
          {
            "id": "e-c4",
            "t": "box",
            "x": 7932,
            "y": 472,
            "w": 46,
            "h": 46,
            "at": "l4:target",
            "stroke": 5
          },
          {
            "id": "e-k4",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 454,
            "size": 58,
            "at": "l4:target+600",
            "color": "accent"
          },
          {
            "id": "e-l4",
            "t": "text",
            "text": "Mục tiêu cao hơn, theo thị trường",
            "x": 8002,
            "y": 462,
            "size": 40,
            "at": "l4:target+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, Tuesday night. Meet Thảo, Dũng's friend, a buyer who haggles for a living.",
          "sub": "Chặng ba, tối thứ Ba. Đây là Thảo, bạn của Dũng, dân mua hàng, sống bằng nghề mặc cả.",
          "keys": [
            "sống bằng nghề mặc cả"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Plan B? Easy. Let's do it at home, in five steps.",
          "sub": "Phương án B à? Dễ. Làm từ ở nhà, năm bước.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "List every option, even keeping things as they are. Compare them: money, time, risk, convenience.",
          "sub": "Liệt kê mọi việc có thể làm, kể cả giữ nguyên. So từng việc: tiền, thời gian, rủi ro, sự tiện lợi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "The best one is plan B. From it, set your walk-away point. Then a target above it, based on market prices.",
          "sub": "Việc tốt nhất là phương án B. Từ đó đặt điểm dừng. Rồi mục tiêu cao hơn, dựa trên giá thị trường."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Isn't a high target a bit greedy?",
          "sub": "Đặt mục tiêu cao có bị coi là tham không?",
          "face": "worried"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A researched target isn't greed. It leaves both sides room to bargain.",
          "sub": "Mục tiêu có tìm hiểu không phải là tham. Đó là khoảng để hai bên còn thương lượng.",
          "keys": [
            "không phải là tham"
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
      "ref": "p7,p9"
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
          },
          {
            "at": "l1",
            "fit": [
              "e-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-w",
            "t": "text",
            "text": "Viết vào điện thoại",
            "x": 7932,
            "y": 580,
            "size": 52,
            "at": "l2:written",
            "color": "accent",
            "hl": [
              {
                "text": "Viết",
                "at": "l2:written"
              }
            ]
          },
          {
            "id": "e-calm",
            "t": "text",
            "text": "Số viết ra khó lung lay",
            "x": 8772,
            "y": 705,
            "size": 40,
            "at": "l2:calm",
            "hl": [
              {
                "text": "khó lung lay",
                "at": "l2:shake"
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
          "say": "And write all three in your phone. Numbers in your head wobble.",
          "sub": "Và ghi cả ba vào điện thoại. Số chỉ nằm trong đầu dễ lung lay lắm.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A number written while calm is harder to shake than one just floating in your head.",
          "sub": "Con số viết ra lúc bình tĩnh khó lung lay hơn con số chỉ nằm trong đầu.",
          "keys": [
            "khó lung lay"
          ]
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Nếu phương án B của mình yếu xìu thì sao?",
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
          "say": "What if your plan B is weak?",
          "sub": "Nếu phương án B của mình yếu xìu thì sao?",
          "keys": [
            "yếu xìu"
          ]
        }
      ]
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
            "at": "l5",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Tư · Làm B mạnh lên",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:owner"
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
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "house",
                "magnifying-glass-tilted-right"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:owner",
            "caption": "Thứ Tư · ghé quán cũ",
            "icon": "house"
          },
          {
            "id": "f-fear",
            "t": "text",
            "text": "“Không thuê thì đi đâu?”",
            "x": 60,
            "y": 1250,
            "size": 50,
            "at": "l2:where",
            "color": "coral"
          },
          {
            "id": "f-fearx",
            "t": "strike",
            "over": "f-fear",
            "at": "l3:cheaper"
          },
          {
            "id": "f-see",
            "t": "text",
            "text": "Đi xem 2 chỗ khác",
            "x": 60,
            "y": 1340,
            "size": 52,
            "at": "l3:afternoons",
            "color": "accent",
            "hl": [
              {
                "text": "2 chỗ khác",
                "at": "l3:two other"
              }
            ]
          },
          {
            "id": "f-res",
            "t": "text",
            "text": "→ chốt mức tăng ít hơn",
            "x": 60,
            "y": 1430,
            "size": 50,
            "at": "l4:smaller",
            "hl": [
              {
                "text": "ít hơn",
                "at": "l4:smaller"
              }
            ]
          },
          {
            "id": "f-rule",
            "t": "text",
            "text": "Xem chỗ khác = thương lượng chỗ này",
            "x": 60,
            "y": 1530,
            "size": 40,
            "at": "l5:negotiate",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four, Wednesday. Dũng drops by a café where he interviewed last week. Meet Cô Hoa, the owner.",
          "sub": "Chặng bốn, thứ Tư. Dũng ghé quán cà phê nơi cậu phỏng vấn tuần trước. Đây là Cô Hoa, chủ quán."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Last month my landlord raised the rent. I thought: if I don't rent here, where would I go?",
          "sub": "Tháng trước chủ nhà báo tăng tiền mặt bằng. Cô lo lắm: không thuê ở đây thì đi đâu?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "So I spent two afternoons seeing two other places. One was farther, but much cheaper.",
          "sub": "Rồi cô dành hai buổi chiều đi xem hai chỗ khác. Một chỗ xa hơn, nhưng rẻ hơn hẳn.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Then I talked to my landlord calmly. We agreed on a smaller increase.",
          "sub": "Thế là cô nói chuyện với chủ nhà nhẹ nhàng hơn. Hai bên chốt mức tăng ít hơn.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Seeing another place is how you negotiate this one.",
          "sub": "Rút ra: đi xem chỗ khác là cách thương lượng chỗ này.",
          "keys": [
            "đi xem chỗ khác"
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
      "ref": "p19,p20"
    },
    {
      "id": "s11",
      "module": "BRK-06",
      "data": {
        "title": "Làm phương án B mạnh lên",
        "items": [
          {
            "illus": "page-facing-up",
            "text": "Nộp nhiều nơi"
          },
          {
            "illus": "receipt",
            "text": "Xin 2–3 báo giá"
          },
          {
            "illus": "busts-in-silhouette",
            "text": "Chào vài khách"
          },
          {
            "illus": "house",
            "text": "Xem chỗ thay thế"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Apply widely. Get quotes. Pitch several clients. View another place.",
          "sub": "Nộp nhiều nơi. Xin vài báo giá. Chào vài khách. Đi xem chỗ thay thế."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Plan B gets stronger.",
          "sub": "Phương án B mạnh lên.",
          "keys": [
            "mạnh lên"
          ]
        }
      ],
      "ref": "p18"
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
            "id": "f-calm",
            "t": "text",
            "text": "B càng tốt → càng bình tĩnh",
            "x": 60,
            "y": 1650,
            "size": 46,
            "at": "l1:calmer",
            "hl": [
              {
                "text": "bình tĩnh",
                "at": "l1:calmer"
              }
            ]
          },
          {
            "id": "f-less",
            "t": "text",
            "text": "→ càng ít phải nhường",
            "x": 60,
            "y": 1730,
            "size": 46,
            "at": "l1:less"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Plan B isn't fixed. The better it gets, the calmer you are, and the less you give.",
          "sub": "Phương án B không cố định. Nó càng tốt, bạn càng bình tĩnh và càng ít phải nhường.",
          "keys": [
            "càng ít phải nhường"
          ]
        }
      ],
      "ref": "p17"
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
            "at": "l3",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Năm · Đổi điểm dừng?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:call"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
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
                "mobile-phone",
                "pensive-face"
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
            "at": "l1:call",
            "caption": "Thứ Năm · sau cuộc gọi",
            "icon": "mobile-phone"
          },
          {
            "id": "g-no",
            "t": "text",
            "text": "Ngại từ chối, họ trông buồn",
            "x": 2028,
            "y": 1250,
            "size": 46,
            "at": "l3:sad",
            "color": "muted"
          },
          {
            "id": "g-nox",
            "t": "strike",
            "over": "g-no",
            "at": "l3:refusing"
          },
          {
            "id": "g-yes",
            "t": "text",
            "text": "Chỉ đổi khi có tin mới thật",
            "x": 2028,
            "y": 1340,
            "size": 46,
            "at": "l4:new",
            "color": "accent",
            "hl": [
              {
                "text": "tin mới thật",
                "at": "l4:real"
              }
            ]
          },
          {
            "id": "g-ex",
            "t": "text",
            "text": "chi phí ẩn, điều kiện khác hẳn",
            "x": 2028,
            "y": 1420,
            "size": 40,
            "at": "l4:hidden"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, Thursday. A short call from the Friday company.",
          "sub": "Chặng năm, thứ Năm. Một cuộc gọi ngắn từ công ty hôm thứ Sáu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "She sounded so disappointed. Maybe I should lower my walk-away point?",
          "sub": "Chị ấy nghe buồn quá. Hay mình hạ điểm dừng xuống?",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not because refusing feels awkward, or because they look sad.",
          "sub": "Đừng đổi vì ngại từ chối, hay vì người kia trông buồn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Only change it for real new information, like a hidden cost or very different terms.",
          "sub": "Chỉ đổi khi có thông tin mới thật sự, như chi phí ẩn hay điều kiện khác hẳn.",
          "keys": [
            "thông tin mới thật sự"
          ]
        }
      ],
      "ref": "p14"
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
              "g-g1",
              "g-g2",
              "g-g3"
            ],
            "zoom": 1.15,
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
            "id": "g-g1",
            "t": "text",
            "text": "Giang: vải + công + lãi tối thiểu",
            "x": 2028,
            "y": 1530,
            "size": 40,
            "at": "l1:cloth",
            "color": "muted"
          },
          {
            "id": "g-g2",
            "t": "text",
            "text": "= điểm dừng, ghi vào điện thoại",
            "x": 2028,
            "y": 1600,
            "size": 40,
            "at": "l1:phone"
          },
          {
            "id": "g-g3",
            "t": "text",
            "text": "Lần 3: “Mức này là hết rồi”",
            "x": 2028,
            "y": 1670,
            "size": 44,
            "at": "l2:third",
            "color": "coral"
          },
          {
            "id": "g-rule",
            "t": "text",
            "text": "Điểm dừng đặt ở nhà",
            "x": 2028,
            "y": 1760,
            "size": 56,
            "at": "l3:home",
            "color": "accent",
            "hl": [
              {
                "text": "đặt ở nhà",
                "at": "l3:home"
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
          "say": "Remember Giang, who sews uniforms? Cloth, labour, minimum profit: that's her walk-away point, saved in her phone.",
          "sub": "Nhớ Giang may đồng phục chứ? Tiền vải, tiền công, lãi tối thiểu: tổng đó là điểm dừng, ghi sẵn trong điện thoại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Twice the owner asks for a bit less, and she gives. The third time it hits her number: this price is my limit.",
          "sub": "Hai lần chủ quán xin bớt thêm, Giang bớt. Lần ba chạm số đã ghi: “Mức này là hết rồi chị ạ.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Set your limit at home, not at the table.",
          "sub": "Rút ra: điểm dừng đặt ở nhà, không đặt giữa bàn.",
          "keys": [
            "đặt ở nhà"
          ]
        }
      ],
      "ref": "p15,p16"
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
            "text": "⑥ Thứ Sáu 10:00 · Nói gì?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:offer"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "locked"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
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
            "at": "l1:offer",
            "caption": "Thứ Sáu 10:00 · gọi điện",
            "icon": "locked"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "Nói B: chỉ khi thật, mạnh",
            "x": 3996,
            "y": 1250,
            "size": 48,
            "at": "l3:real",
            "color": "accent",
            "hl": [
              {
                "text": "thật, mạnh",
                "at": "l3:strong"
              }
            ]
          },
          {
            "id": "h-weak",
            "t": "text",
            "text": "B yếu → đừng nhắc",
            "x": 3996,
            "y": 1330,
            "size": 48,
            "at": "l3:weak",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, Friday ten a.m. The company calls with its offer.",
          "sub": "Chặng sáu, mười giờ sáng thứ Sáu. Công ty gọi báo mức đề nghị."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Thank you. I'm also waiting on two other interviews.",
          "sub": "Em cảm ơn. Em cũng đang chờ kết quả hai buổi phỏng vấn khác.",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "True, so he may say it. Mention plan B only if it's real, strong, and helps. If it's weak, keep quiet.",
          "sub": "Thật, nên cậu được nói. Chỉ nhắc phương án B khi nó có thật, mạnh, và giúp ích. Yếu thì đừng nhắc.",
          "keys": [
            "có thật, mạnh"
          ]
        }
      ],
      "ref": "p21"
    },
    {
      "id": "s16",
      "module": "BRK-10",
      "data": {
        "quote": "“Có người trả cao hơn rồi.” — “Ai vậy? Bán cho họ đi.”",
        "mark": "Bán cho họ đi.",
        "by": "Người bán lô hàng tồn và mối quen",
        "illus": "speech-balloon"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Someone pays more! Who? Sell to them, then.",
          "sub": "“Có người trả cao hơn rồi.” “Ai vậy? Bán cho họ đi.”",
          "keys": [
            "Bán cho họ đi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A fake plan B cuts its owner.",
          "sub": "Phương án B bịa ra là con dao quay lại cắt mình.",
          "keys": [
            "con dao quay lại cắt mình"
          ]
        }
      ],
      "ref": "p22,p23"
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
          }
        ],
        "items": [
          {
            "id": "h-lie",
            "t": "text",
            "text": "Bịa: bán giá thấp hơn + mất tin",
            "x": 3996,
            "y": 1430,
            "size": 44,
            "at": "l1:lower",
            "color": "coral",
            "hl": [
              {
                "text": "mất tin",
                "at": "l1:trusted"
              }
            ]
          },
          {
            "id": "h-min",
            "t": "text",
            "text": "“Tối thiểu em cần…”",
            "x": 3996,
            "y": 1530,
            "size": 52,
            "at": "l2:minimum",
            "color": "muted"
          },
          {
            "id": "h-minx",
            "t": "strike",
            "over": "h-min",
            "at": "l2:exactly"
          },
          {
            "id": "h-num",
            "t": "text",
            "text": "Số có lý do, trên mục tiêu",
            "x": 3996,
            "y": 1620,
            "size": 48,
            "at": "l3:reason",
            "color": "accent",
            "hl": [
              {
                "text": "có lý do",
                "at": "l3:reason"
              }
            ]
          },
          {
            "id": "h-keep",
            "t": "text",
            "text": "Giữ riêng điểm dừng",
            "x": 3996,
            "y": 1710,
            "size": 52,
            "at": "l3:keep",
            "hl": [
              {
                "text": "Giữ riêng",
                "at": "l3:keep"
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
          "say": "Caught bluffing, the seller often sells lower than before. Worse, every future quote gets half trusted.",
          "sub": "Bị lật tẩy, người bán thường phải bán thấp hơn cả lúc đầu. Tệ hơn, từ đó mỗi lần báo giá chỉ được nửa tin nửa ngờ.",
          "keys": [
            "nửa tin nửa ngờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And don't reveal your walk-away point early. Say 'my minimum is', and you get exactly that.",
          "sub": "Cũng đừng nói điểm dừng quá sớm. Nói “tối thiểu em cần mức này”, họ sẽ đưa đúng mức đó."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Give a number with a reason, a bit above your target. Keep your walk-away point to yourself.",
          "sub": "Hãy nêu con số có lý do, cao hơn mục tiêu một chút, và giữ riêng điểm dừng.",
          "keys": [
            "giữ riêng điểm dừng"
          ]
        }
      ],
      "ref": "p22,p24"
    },
    {
      "id": "s18",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Thứ Sáu 17:00 · lại tin nhắn",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Sốt ruột nhận luôn mức thấp",
          "why": "Quên hai buổi phỏng vấn đang chờ; tuần sau một nơi mời mức tốt hơn hẳn.",
          "rule": "Có đường lùi thì không phải chạy vội"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Answer today? Okay, I'll take it!",
          "sub": "Trả lời hôm nay ạ? Dạ, em nhận luôn!",
          "face": "worried",
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
          "say": "Next week, one of his two interviews calls with a much better offer. Too late.",
          "sub": "Tuần sau, một trong hai nơi kia gọi mời mức tốt hơn hẳn. Muộn rồi.",
          "keys": [
            "tốt hơn hẳn"
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
          "say": "Thank you, I'm very interested. May I answer by Monday morning?",
          "sub": "Em cảm ơn, em rất quan tâm vị trí này. Em xin đến sáng thứ Hai để trả lời ạ.",
          "phase": "redo",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "With a way out, you don't need to run.",
          "sub": "Có đường lùi thì không phải chạy vội.",
          "phase": "redo",
          "keys": [
            "không phải chạy vội"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p10,p11,p12,p13"
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Thứ Sáu 17:00 · Xin thêm giờ",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:days"
          },
          {
            "id": "i-s1",
            "t": "text",
            "text": "“Em cảm ơn, em rất quan tâm.",
            "x": 5964,
            "y": 1260,
            "size": 52,
            "at": "l1:polite"
          },
          {
            "id": "i-s2",
            "t": "text",
            "text": "Em xin đến sáng thứ Hai ạ.”",
            "x": 5964,
            "y": 1340,
            "size": 52,
            "at": "l1:days",
            "color": "accent",
            "hl": [
              {
                "text": "sáng thứ Hai",
                "at": "l1:days"
              }
            ]
          },
          {
            "id": "i-r",
            "t": "text",
            "text": "Xin vài ngày, không mất",
            "x": 5964,
            "y": 1450,
            "size": 50,
            "at": "l2:disappears",
            "hl": [
              {
                "text": "không mất",
                "at": "l2:disappears"
              }
            ]
          },
          {
            "id": "i-x",
            "t": "text",
            "text": "“Cái này” hay “phương án B”?",
            "x": 5964,
            "y": 1550,
            "size": 50,
            "at": "l2:plan B",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven. One polite sentence buys him a few days.",
          "sub": "Chặng bảy. Một câu lịch sự mua thêm cho cậu vài ngày.",
          "keys": [
            "vài ngày"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A good offer rarely disappears because you ask for a few days. Now it's this, or plan B.",
          "sub": "Lời đề nghị tốt hiếm khi biến mất chỉ vì bạn xin vài ngày. Giờ là “cái này” hay “phương án B”."
        }
      ],
      "ref": "p12,p13"
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
            "text": "Thứ Hai tuần sau · 9:00",
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
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
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
            "at": "l1:Monday",
            "caption": "Thứ Hai 9:00 · phòng trọ",
            "icon": "mobile-phone"
          },
          {
            "id": "j-call",
            "t": "text",
            "text": "Quán Cô Hoa: mức tốt hơn hẳn",
            "x": 7932,
            "y": 1260,
            "size": 46,
            "at": "l2:better",
            "color": "accent",
            "hl": [
              {
                "text": "tốt hơn hẳn",
                "at": "l2:better"
              }
            ]
          },
          {
            "id": "j-free",
            "t": "text",
            "text": "Ngón cái tự do ✓",
            "x": 7932,
            "y": 1360,
            "size": 56,
            "at": "l3:thumb",
            "hl": [
              {
                "text": "tự do",
                "at": "l3:free"
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
          "say": "Monday, nine a.m. Same room, same phone. It rings.",
          "sub": "Thứ Hai, chín giờ sáng. Vẫn phòng ấy, vẫn chiếc điện thoại ấy. Chuông reo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Cô Hoa's café? A much better offer? Yes, I'd love to!",
          "sub": "Quán Cô Hoa ạ? Mức tốt hơn hẳn? Dạ, em đồng ý ạ!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "This time his thumb is free. And that's how Dũng came to make coffee.",
          "sub": "Lần này ngón cái được tự do. Và đó là cách Dũng về pha cà phê ở quán.",
          "keys": [
            "ngón cái được tự do"
          ]
        }
      ],
      "ref": "p11"
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
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l1:action",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l1:limit",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:three",
            "fit": "E",
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
            "x": 4696,
            "y": 570,
            "at": "l1:action+400"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6664,
            "y": 240,
            "at": "l1:limit+400"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 8632,
            "y": 580,
            "at": "l2:three+400"
          },
          {
            "id": "z-next",
            "t": "text",
            "text": "Bài sau: đề xuất tăng lương",
            "x": 7932,
            "y": 1510,
            "size": 46,
            "at": "l4:raise",
            "hl": [
              {
                "text": "tăng lương",
                "at": "l4:raise"
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
          "say": "So: plan B is an action. The walk-away point is the limit that comes from it.",
          "sub": "Tóm lại: phương án B là một việc. Điểm dừng là ranh giới suy ra từ nó.",
          "keys": [
            "ranh giới suy ra từ nó"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Write the three things in your phone, and read them before you walk in.",
          "sub": "Viết ba điều vào điện thoại, đọc lại trước khi bước vào.",
          "keys": [
            "ba điều"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No more bad deals out of fear of losing a chance.",
          "sub": "Không còn nhận thoả thuận tệ chỉ vì sợ mất cơ hội."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Next: the talk many dread most. Asking your boss for a raise.",
          "sub": "Bài sau: cuộc nói chuyện nhiều người ngại nhất, đề xuất tăng lương."
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
      "ref": "questions[3]",
      "data": {
        "q": "What is the difference between a walk away point and a backup plan?",
        "options": [
          "They are the same thing, just two names used in different countries",
          "The walk away point is a number or condition, the backup plan is an action",
          "The backup plan is a number, while the stopping point is only a feeling"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "stop-sign",
        "why": "Phương án B là một việc bạn sẽ làm. Điểm dừng là một con số hoặc điều kiện."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What is the difference between a walk away point and a backup plan?",
          "sub": "Điểm dừng khác phương án B ở chỗ nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The walk away point is a number or condition, the backup plan is an action.",
          "sub": "Điểm dừng là con số hoặc điều kiện, phương án B là một việc."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "They go together, but they are not the same.",
          "sub": "Hai thứ đi cùng nhau nhưng không giống nhau."
        }
      ],
      "beats": {
        "after": 500
      }
    },
    {
      "id": "s31",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu về BATNA và điểm dừng",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Write your three things before every talk. Now, forty questions!",
          "sub": "Viết ba điều trước mỗi cuộc nói chuyện. Giờ làm bốn mươi câu nhé!",
          "face": "happy"
        }
      ]
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
