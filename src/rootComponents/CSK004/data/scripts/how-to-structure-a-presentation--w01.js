// Kịch bản video W lần 3 (#110) — "Bố cục bài thuyết trình gồm những phần nào?" · chuỗi "Thuyết trình và trình bày ý tưởng"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-structure-a-presentation--w01",
  "hook": "HOOK-14",
  "unit": {
    "audience": "first-time-presenters",
    "slug": "how-to-structure-a-presentation",
    "door": "ky-nang",
    "level": "B1",
    "title": "Bố cục bài thuyết trình gồm những phần nào?",
    "series": "Thuyết trình và trình bày ý tưởng"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT TUẦN của Thảo trước buổi gặp lại Bác Bình (Thứ Sáu tuần trước kết bằng “em xin hết” → Thứ Hai → Thứ Ba → tối Thứ Ba → Thứ Tư → tối Thứ Tư → Thứ Năm → tối Thứ Năm → Thứ Sáu 10:00). Nhân vật (4): Thảo (Trâm 📌 p22), Bác Bình (khách p22), Cô Hoa (trưởng phòng, hẹn buổi gặp lại), Dũng (em họ: Tâm ✍️ p7 ở hội thảo sinh viên, nhóm Đoan 🧪 p13, câu lạc bộ của Vũ 📌 p17 — Vũ không lên hình, Dũng là người ghi biên bản). Câu nối mẫu p25 giữ tên “Hà” như bài. Số liệu chỉ lấy từ bài: khoảng một phần mười thời gian cho mở đầu (p4), gần năm phút tự giới thiệu (p7), khoảng ba ý / bảy ý gom ba nhóm (p9), mười lăm phút, trước phút thứ mười (p13), hai lý do trên ba (p17), hai tuần từ thứ Hai (p20), bài hai ba phút (p24), năm dòng (p27). Ngắt nhịp: BRK-03 (một phần mười), BRK-04 (lịch mình làm ↔ điều người nghe cần), BRK-07 (rehook trước phần kết). Khép vòng: Thứ Sáu tuần trước “em xin hết” (s01) → Thứ Sáu 10:00 cùng phòng, cùng khách, kết bằng bước tiếp theo (s21). Bản cũ: w145/bak/how-to-structure-a-presentation--w01.js.",
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
            "id": "a-1",
            "t": "text",
            "text": "Người nghe: 1 lần",
            "x": 60,
            "y": 110,
            "size": 110,
            "at": "l1:once",
            "color": "accent",
            "hl": [
              {
                "text": "1 lần",
                "at": "l1:once"
              }
            ]
          },
          {
            "id": "a-r",
            "t": "text",
            "text": "Người đọc: lật lại thoải mái",
            "x": 70,
            "y": 280,
            "size": 56,
            "at": "l1:reader",
            "color": "muted"
          },
          {
            "id": "a-sp",
            "t": "text",
            "text": "theo đúng tốc độ bạn nói",
            "x": 70,
            "y": 370,
            "size": 50,
            "at": "l2:speed",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A reader can flip back a page. A listener hears your talk once.",
          "sub": "Người đọc lật lại trang trước được. Người nghe chỉ nghe một lần.",
          "keys": [
            "chỉ nghe một lần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "At your speed. No rewind button, unless you're me.",
          "sub": "Theo đúng tốc độ bạn nói. Không có nút tua lại, trừ khi bạn là tôi.",
          "keys": [
            "Không có nút tua lại"
          ]
        }
      ],
      "ref": "p1"
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
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "handshake"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "medium",
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
            "at": "l1",
            "caption": "Thứ Sáu tuần trước · gặp khách",
            "icon": "handshake"
          },
          {
            "id": "a-end",
            "t": "text",
            "text": "“Em xin hết ạ.”",
            "x": 60,
            "y": 500,
            "size": 64,
            "at": "l2:all",
            "color": "coral"
          },
          {
            "id": "a-wk",
            "t": "text",
            "text": "1 tuần sau: chưa nhúc nhích",
            "x": 60,
            "y": 610,
            "size": 44,
            "at": "l5:week",
            "color": "muted",
            "hl": [
              {
                "text": "1 tuần sau",
                "at": "l5:week later"
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
          "say": "Meet Thảo, new at the company, presenting a service package to a client.",
          "sub": "Đây là Thảo, nhân viên mới, đang trình bày gói dịch vụ cho khách.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "…and that is our package. That is all. Any questions?",
          "sub": "…đó là gói dịch vụ bên em. Em xin hết, bác có hỏi gì không ạ?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The client is Bác Bình, calm, careful, never in a hurry.",
          "sub": "Khách là Bác Bình, điềm tĩnh, kỹ tính, chẳng bao giờ vội."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "No, thank you.",
          "sub": "Không, cảm ơn cháu.",
          "face": "neutral"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "She spoke smoothly. A week later, nothing had moved. Why?",
          "sub": "Thảo nói rất trôi. Một tuần sau, chưa có gì nhúc nhích. Vì sao?",
          "keys": [
            "chưa có gì nhúc nhích"
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
      "ref": "p22"
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
            "text": "Nói từ đâu, kết thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:start",
            "hl": [
              {
                "text": "kết thế nào",
                "at": "l1:end"
              }
            ]
          },
          {
            "id": "b-o",
            "t": "box",
            "x": 2028,
            "y": 170,
            "w": 440,
            "h": 200,
            "at": "l2:Open",
            "stroke": 5
          },
          {
            "id": "b-ot",
            "t": "text",
            "text": "MỞ",
            "x": 2058,
            "y": 185,
            "size": 64,
            "at": "l2:Open+200",
            "color": "accent"
          },
          {
            "id": "b-od",
            "t": "text",
            "text": "vấn đề + thông điệp",
            "x": 2058,
            "y": 290,
            "size": 40,
            "at": "l2:problem"
          },
          {
            "id": "b-a1",
            "t": "arrow",
            "from": [
              2478,
              270
            ],
            "to": [
              2568,
              270
            ],
            "at": "l3:body"
          },
          {
            "id": "b-b",
            "t": "box",
            "x": 2578,
            "y": 170,
            "w": 440,
            "h": 200,
            "at": "l3:body",
            "stroke": 5
          },
          {
            "id": "b-bt",
            "t": "text",
            "text": "THÂN",
            "x": 2608,
            "y": 185,
            "size": 64,
            "at": "l3:body+200",
            "color": "accent"
          },
          {
            "id": "b-bd",
            "t": "text",
            "text": "khoảng 3 ý",
            "x": 2608,
            "y": 290,
            "size": 40,
            "at": "l3:three"
          },
          {
            "id": "b-a2",
            "t": "arrow",
            "from": [
              3028,
              270
            ],
            "to": [
              3118,
              270
            ],
            "at": "l4:close"
          },
          {
            "id": "b-c",
            "t": "box",
            "x": 3128,
            "y": 170,
            "w": 440,
            "h": 200,
            "at": "l4:close",
            "stroke": 5
          },
          {
            "id": "b-ct",
            "t": "text",
            "text": "KẾT",
            "x": 3158,
            "y": 185,
            "size": 64,
            "at": "l4:close+200",
            "color": "accent"
          },
          {
            "id": "b-cd",
            "t": "text",
            "text": "thông điệp + đề nghị",
            "x": 3158,
            "y": 290,
            "size": 40,
            "at": "l4:request",
            "hl": [
              {
                "text": "đề nghị",
                "at": "l4:request"
              }
            ]
          },
          {
            "id": "b-link",
            "t": "text",
            "text": "nối bằng câu chuyển ý ngắn",
            "x": 2528,
            "y": 400,
            "size": 44,
            "at": "l3:linked",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So where do you start, what comes first, and how do you end?",
          "sub": "Vậy nói từ đâu, nói gì trước, và kết thế nào?",
          "keys": [
            "kết thế nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A clear talk has three parts. Open with the problem and your message.",
          "sub": "Một bài gọn có ba phần. Mở đầu nêu vấn đề và thông điệp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A body of about three points, linked by short sentences.",
          "sub": "Thân bài khoảng ba ý, nối bằng những câu chuyển ý ngắn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And close with the message again, plus a request.",
          "sub": "Và kết bằng thông điệp nhắc lại, kèm một lời đề nghị.",
          "keys": [
            "một lời đề nghị"
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
            "id": "b-wk",
            "t": "text",
            "text": "1 tuần trước buổi gặp lại",
            "x": 2028,
            "y": 520,
            "size": 52,
            "at": "l1:week",
            "hl": [
              {
                "text": "gặp lại",
                "at": "l1:second meeting"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 620,
            "w": 185,
            "h": 90,
            "at": "l1:week+500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2228,
            "y": 620,
            "w": 185,
            "h": 90,
            "at": "l1:week+720",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2428,
            "y": 620,
            "w": 185,
            "h": 90,
            "at": "l1:week+940",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2628,
            "y": 620,
            "w": 185,
            "h": 90,
            "at": "l1:week+1160",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2828,
            "y": 620,
            "w": 185,
            "h": 90,
            "at": "l1:week+1380",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3028,
            "y": 620,
            "w": 185,
            "h": 90,
            "at": "l1:week+1600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3228,
            "y": 620,
            "w": 185,
            "h": 90,
            "at": "l1:week+1820",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d7",
            "t": "box",
            "x": 3428,
            "y": 620,
            "w": 185,
            "h": 90,
            "at": "l1:week+2040",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2",
            "x": 2046,
            "y": 640,
            "size": 36,
            "at": "l1:week+620"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T3",
            "x": 2246,
            "y": 640,
            "size": 36,
            "at": "l1:week+840"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T3 tối",
            "x": 2446,
            "y": 640,
            "size": 36,
            "at": "l1:week+1060"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T4",
            "x": 2646,
            "y": 640,
            "size": 36,
            "at": "l1:week+1280"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T4 tối",
            "x": 2846,
            "y": 640,
            "size": 36,
            "at": "l1:week+1500"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T5",
            "x": 3046,
            "y": 640,
            "size": 36,
            "at": "l1:week+1720"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "T5 tối",
            "x": 3246,
            "y": 640,
            "size": 36,
            "at": "l1:week+1940"
          },
          {
            "id": "b-dt7",
            "t": "text",
            "text": "T6 10h",
            "x": 3446,
            "y": 640,
            "size": 36,
            "at": "l1:week+2160"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thảo gets a second meeting next Friday. One week to build the road.",
          "sub": "Thảo được hẹn gặp lại vào thứ Sáu tới. Một tuần để làm đường.",
          "keys": [
            "Một tuần"
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
            "at": "l1",
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
            "text": "① Thứ Hai · Vì sao bố cục?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l3:map"
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
                  "id": "hoa",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "sad"
                }
              ],
              "props": [
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "medium",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l0:manager",
            "caption": "Thứ Hai · văn phòng",
            "icon": "spiral-calendar"
          },
          {
            "id": "c-map",
            "t": "text",
            "text": "Bài nói cần bản đồ rõ hơn",
            "x": 3996,
            "y": 170,
            "size": 48,
            "at": "l3:map",
            "color": "accent"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "• Báo trước sẽ đi đâu",
            "x": 3996,
            "y": 260,
            "size": 48,
            "at": "l3:going"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "• Báo mỗi lần rẽ",
            "x": 3996,
            "y": 340,
            "size": 48,
            "at": "l3:turn"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "• Nhắc lại khi kết",
            "x": 3996,
            "y": 420,
            "size": 48,
            "at": "l3:repeat"
          }
        ]
      },
      "lines": [
        {
          "id": "l0",
          "lang": "en",
          "who": "det",
          "say": "Monday. Her manager, Cô Hoa, brings a second chance.",
          "sub": "Thứ Hai. Trưởng phòng của Thảo, cô Hoa, mang tới cơ hội thứ hai.",
          "keys": [
            "cơ hội thứ hai"
          ]
        },
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "Bác Bình will meet you again on Friday. Make it count.",
          "sub": "Thứ Sáu Bác Bình gặp lại em. Tận dụng cho tốt nhé.",
          "face": "neutral"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "But I already said everything last time!",
          "sub": "Nhưng lần trước em nói hết rồi mà!",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Everything, but no map. Say where you're going, signal each turn, repeat at the end.",
          "sub": "Nói hết, nhưng không có bản đồ. Báo trước sẽ đi đâu, báo mỗi lần rẽ, nhắc lại khi kết.",
          "keys": [
            "không có bản đồ"
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
            "id": "c-tell",
            "t": "text",
            "text": "Nói trước · Nói · Nhắc lại",
            "x": 3996,
            "y": 540,
            "size": 58,
            "at": "l1:Tell",
            "color": "accent",
            "hl": [
              {
                "text": "Nhắc lại",
                "at": "l1:remind"
              }
            ]
          },
          {
            "id": "c-hold",
            "t": "text",
            "text": "lặp có chủ đích = chỗ bám",
            "x": 3996,
            "y": 630,
            "size": 46,
            "at": "l2:hold",
            "hl": [
              {
                "text": "chỗ bám",
                "at": "l2:hold on to"
              }
            ]
          },
          {
            "id": "c-me",
            "t": "text",
            "text": "Quên câu, vẫn biết phần sau",
            "x": 4836,
            "y": 700,
            "size": 46,
            "at": "l3:forget",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "An easy rule: tell them what they'll hear, tell them, then remind them.",
          "sub": "Cách nhớ: nói trước họ sẽ nghe gì, nói điều đó, rồi nhắc lại họ vừa nghe gì.",
          "keys": [
            "nhắc lại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sounds repetitive. For listeners, it's something to hold on to.",
          "sub": "Nghe như lặp. Với người nghe, đó là chỗ bám.",
          "keys": [
            "chỗ bám"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It helps you too: forget a sentence, and you still know what part comes next.",
          "sub": "Nó giúp cả bạn: lỡ quên câu chữ, vẫn biết phần tiếp theo là gì."
        }
      ],
      "ref": "p2,p3"
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
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Ba · Mở đầu",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l3:opening"
          },
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
                  "pose": "explain",
                  "face": "worried"
                }
              ],
              "props": [
                "memo"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Ba · tập câu mở",
            "icon": "memo"
          },
          {
            "id": "d-sorry",
            "t": "text",
            "text": "“Em chuẩn bị chưa kỹ lắm…”",
            "x": 5964,
            "y": 170,
            "size": 46,
            "at": "l1:prepare",
            "color": "muted"
          },
          {
            "id": "d-sorryx",
            "t": "strike",
            "over": "d-sorry",
            "at": "l2:apology"
          },
          {
            "id": "d-why",
            "t": "text",
            "text": "Câu đầu: người nghe quyết có nghe",
            "x": 5964,
            "y": 250,
            "size": 40,
            "at": "l2:decide",
            "color": "coral"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "1. Vấn đề họ đang gặp",
            "x": 5964,
            "y": 340,
            "size": 48,
            "at": "l3:problem"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "2. Thông điệp trong 1 câu",
            "x": 5964,
            "y": 420,
            "size": 48,
            "at": "l3:message"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "3. Lộ trình",
            "x": 5964,
            "y": 500,
            "size": 48,
            "at": "l4:route",
            "color": "accent",
            "hl": [
              {
                "text": "Lộ trình",
                "at": "l4:route"
              }
            ]
          },
          {
            "id": "d-route",
            "t": "text",
            "text": "“Em sẽ nói 3 điều: nguyên nhân, 2 cách, đề xuất”",
            "x": 5964,
            "y": 590,
            "size": 32,
            "at": "l5:cover",
            "font": "base",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Good morning. Sorry, I didn't prepare very well…",
          "sub": "Em chào bác. Em xin lỗi, em chuẩn bị chưa kỹ lắm…",
          "face": "worried"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No apology! The first sentence is when people decide to listen. Don't spend it on doubt.",
          "sub": "Đừng xin lỗi! Câu đầu là lúc người nghe quyết định có tập trung, đừng dùng nó để họ bớt tin bạn.",
          "keys": [
            "Đừng xin lỗi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A short opening does three jobs: name their problem, and state your message in one sentence.",
          "sub": "Phần mở ngắn làm ba việc: nêu vấn đề họ đang gặp, nói thông điệp trong một câu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And give the route.",
          "sub": "Và giới thiệu lộ trình.",
          "keys": [
            "lộ trình"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Like: I will cover three things: the cause, two solutions, and our proposal.",
          "sub": "Ví dụ: em sẽ nói ba điều: nguyên nhân, hai cách xử lý và đề xuất của nhóm."
        }
      ],
      "ref": "p4,p6"
    },
    {
      "id": "s08",
      "module": "BRK-03",
      "data": {
        "value": 10,
        "prefix": "~",
        "suffix": "%",
        "label": "thời gian cho phần mở đầu, theo kinh nghiệm chung",
        "illus": "stopwatch"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "How long? About a tenth of your time.",
          "sub": "Mở đầu bao lâu? Khoảng một phần mười thời gian."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Short, but it does three jobs.",
          "sub": "Ngắn, nhưng làm đủ ba việc.",
          "keys": [
            "ba việc"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p4"
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
          }
        ],
        "items": [
          {
            "id": "d-q",
            "t": "text",
            "text": "Câu hỏi thật > lời chào dài",
            "x": 6804,
            "y": 700,
            "size": 46,
            "at": "l1:question",
            "color": "accent",
            "hl": [
              {
                "text": "Câu hỏi thật",
                "at": "l1:real question"
              }
            ]
          },
          {
            "id": "d-name",
            "t": "text",
            "text": "Tên, vai trò: một câu ngắn",
            "x": 5964,
            "y": 700,
            "size": 44,
            "at": "l3:name"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A real question often beats a long greeting.",
          "sub": "Một câu hỏi thật thường mở đầu tốt hơn lời chào dài.",
          "keys": [
            "câu hỏi thật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Last week, how many of you waited over ten minutes for the lift?",
          "sub": "“Tuần trước có bao nhiêu bạn phải chờ thang máy quá mười phút?”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Your name and role? One short sentence, or let the host do it.",
          "sub": "Tên và vai trò? Một câu ngắn, hoặc để người dẫn chương trình giới thiệu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Tuesday evening: Thảo's cousin Dũng, a student, opens a seminar.",
          "sub": "Tối thứ Ba: Dũng, em họ Thảo, sinh viên, mở đầu ở hội thảo.",
          "keys": [
            "Dũng"
          ]
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "data": {
        "set": "campus",
        "label": "Tối thứ Ba · hội thảo",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "explain"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Mở bằng năm phút kể về mình",
          "why": "Gần năm phút tự giới thiệu, đến nội dung chính thì nửa hội trường đã cúi xuống điện thoại.",
          "rule": "Câu đầu để kéo người nghe vào, không phải để kể về mình"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Let me introduce myself. I'm a third-year student, I chose this topic because…",
          "sub": "Em xin tự giới thiệu, em là sinh viên năm ba, em chọn đề tài vì…",
          "face": "happy",
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
          "say": "Nearly five minutes of that. Half the hall is on their phones.",
          "sub": "Gần năm phút như thế. Nửa hội trường cúi xuống điện thoại.",
          "keys": [
            "gần năm phút"
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
          "say": "Every exam season, the library fills up early. My research shares the hours, so more get a seat.",
          "sub": "Mùa thi nào thư viện cũng hết chỗ từ sớm. Em đề xuất chia giờ để thêm bạn có chỗ.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "The first line pulls people in. It's not about you.",
          "sub": "Câu đầu để kéo người nghe vào, không phải kể về mình.",
          "phase": "redo",
          "keys": [
            "không phải kể về mình"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p7,p8"
    },
    {
      "id": "s12",
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
            "at": "l1",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
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
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Tư · Thân bài",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l2:seven ideas"
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
                  "side": "center",
                  "pose": "think"
                }
              ],
              "props": [
                "card-index-dividers"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Tư · bảy ý trên bàn",
            "icon": "card-index-dividers"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "~3 ý · 7 ý → 3 nhóm",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l3:three",
            "color": "accent",
            "hl": [
              {
                "text": "3 nhóm",
                "at": "l3:Group"
              }
            ]
          },
          {
            "id": "e-o1",
            "t": "text",
            "text": "Cải tiến: vấn đề → nguyên nhân → giải pháp",
            "x": 7932,
            "y": 260,
            "size": 32,
            "at": "l4:improving",
            "font": "base"
          },
          {
            "id": "e-o2",
            "t": "text",
            "text": "Tiến độ: trước → nay → sắp tới",
            "x": 7932,
            "y": 320,
            "size": 32,
            "at": "l4:progress",
            "font": "base"
          },
          {
            "id": "e-o3",
            "t": "text",
            "text": "Cần chọn: cách A → cách B → đề xuất",
            "x": 7932,
            "y": 380,
            "size": 32,
            "at": "l5:choose",
            "font": "base",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "I have seven ideas for the body. Seven!",
          "sub": "Thân bài em có bảy ý. Bảy luôn!",
          "face": "worried"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Wednesday. Seven ideas, like seven dishes on one tray.",
          "sub": "Thứ Tư. Bảy ý, như bảy món dồn một mâm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "About three points is right: enough to argue, few enough to remember. Group the seven into three.",
          "sub": "Khoảng ba ý là vừa: đủ để lập luận, đủ ít để nhớ. Gom bảy ý thành ba nhóm.",
          "keys": [
            "Gom bảy ý thành ba nhóm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Improving something? Problem, cause, solution. A progress report? Before, now, next.",
          "sub": "Đề xuất cải tiến: vấn đề, nguyên nhân, giải pháp. Báo cáo tiến độ: trước đây, hiện tại, sắp tới."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Need them to choose? Option A, option B, your recommendation.",
          "sub": "Cần người nghe chọn: cách A, cách B, đề xuất của bạn."
        }
      ],
      "ref": "p9,p10"
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
          }
        ],
        "items": [
          {
            "id": "e-claim",
            "t": "text",
            "text": "1 ý = khẳng định + bằng chứng",
            "x": 7932,
            "y": 470,
            "size": 48,
            "at": "l1:claim",
            "color": "accent",
            "hl": [
              {
                "text": "bằng chứng",
                "at": "l1:evidence"
              }
            ]
          },
          {
            "id": "e-ev",
            "t": "text",
            "text": "con số · trường hợp thật · ảnh chụp",
            "x": 7932,
            "y": 550,
            "size": 40,
            "at": "l1:number",
            "color": "muted"
          },
          {
            "id": "e-no",
            "t": "text",
            "text": "Thiếu chứng: khó tin · thiếu ý: chứng gì?",
            "x": 7932,
            "y": 640,
            "size": 32,
            "at": "l2:believe",
            "font": "base",
            "color": "coral"
          },
          {
            "id": "e-proverb",
            "t": "text",
            "text": "Nói có sách, mách có chứng",
            "x": 8772,
            "y": 700,
            "size": 48,
            "at": "l3:book",
            "hl": [
              {
                "text": "mách có chứng",
                "at": "l3:proof"
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
          "say": "Each point needs one claim and one piece of evidence: a number, a real case, a photo.",
          "sub": "Mỗi ý cần một câu khẳng định và một bằng chứng: con số, trường hợp thật, ảnh chụp.",
          "keys": [
            "một bằng chứng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No evidence? Hard to believe. Evidence with no claim? Nobody knows what it proves.",
          "sub": "Không bằng chứng thì khó tin. Bằng chứng không khẳng định thì chẳng biết chứng minh gì."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "As we say: speak with a book, report with proof.",
          "sub": "Như ông bà dặn: nói có sách, mách có chứng.",
          "keys": [
            "nói có sách, mách có chứng"
          ]
        }
      ],
      "ref": "p11"
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
            "text": "④ Thứ Tư tối · Đồ án",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:project"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "campus",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "mobile-phone",
                "laptop"
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
            "at": "l1:Dũng",
            "caption": "Thứ Tư tối · nhóm Dũng, 15 phút",
            "icon": "mobile-phone"
          },
          {
            "id": "f-0",
            "t": "text",
            "text": "Mở: kết quả trước",
            "x": 60,
            "y": 1260,
            "size": 50,
            "at": "l2:result",
            "color": "accent",
            "hl": [
              {
                "text": "kết quả trước",
                "at": "l2:result"
              }
            ]
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Ý 1: đã làm được",
            "x": 60,
            "y": 1340,
            "size": 48,
            "at": "l3:worked"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Ý 2: còn vướng",
            "x": 60,
            "y": 1420,
            "size": 48,
            "at": "l3:stuck"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Ý 3: cần thầy góp ý",
            "x": 60,
            "y": 1500,
            "size": 48,
            "at": "l4:teacher"
          },
          {
            "id": "f-10",
            "t": "text",
            "text": "trước phút 10",
            "x": 520,
            "y": 1500,
            "size": 40,
            "at": "l4:minute ten",
            "color": "coral",
            "hl": [
              {
                "text": "phút 10",
                "at": "l4:minute ten"
              }
            ]
          },
          {
            "id": "f-wk",
            "t": "text",
            "text": "Tuần 1, tuần 2… chỉ kể khi được hỏi",
            "x": 60,
            "y": 1590,
            "size": 36,
            "at": "l5:week one",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Wednesday evening, Dũng's group: fifteen minutes on their room-booking project.",
          "sub": "Tối thứ Tư, nhóm Dũng: mười lăm phút báo cáo đồ án ứng dụng đặt phòng học."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Result first: the app works on phones, but data sync is still stuck.",
          "sub": "Kết quả trước: ứng dụng chạy được trên điện thoại, còn vướng phần đồng bộ dữ liệu.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Point one: what worked. Point two: what's stuck.",
          "sub": "Ý một: điều đã làm được. Ý hai: điều còn vướng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Point three: what they need from the teacher, before minute ten, to leave time to talk.",
          "sub": "Ý ba: điều cần thầy góp ý, đặt trước phút thứ mười để còn thời gian trao đổi.",
          "keys": [
            "trước phút thứ mười"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Week one, week two? Only if someone asks.",
          "sub": "Chuyện tuần một, tuần hai? Chỉ kể khi được hỏi."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p12,p13"
    },
    {
      "id": "s15",
      "module": "BRK-04",
      "data": {
        "wrong": "Kể theo lịch mình đã làm",
        "right": "Kể theo điều người nghe cần",
        "wrongIllus": "spiral-calendar",
        "rightIllus": "ear"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your journey matters. But listeners need the conclusion first.",
          "sub": "Hành trình của bạn đáng kể. Nhưng người nghe cần kết luận trước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Follow what they need, not your calendar.",
          "sub": "Kể theo điều người nghe cần, đừng theo lịch mình làm.",
          "keys": [
            "điều người nghe cần"
          ]
        }
      ],
      "ref": "p12,p14"
    },
    {
      "id": "s16",
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
            "text": "⑤ Thứ Năm · Chuyển ý",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Thursday"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "campus",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "face": "worried",
                  "pose": "phone"
                }
              ],
              "props": [
                "memo",
                "keycap-3"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2:club",
            "caption": "Biên bản câu lạc bộ",
            "icon": "memo"
          },
          {
            "id": "g-sign",
            "t": "text",
            "text": "Câu chuyển ý = biển chỉ đường",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l1:road sign",
            "color": "accent",
            "hl": [
              {
                "text": "biển chỉ đường",
                "at": "l1:road sign"
              }
            ]
          },
          {
            "id": "g-r",
            "t": "text",
            "text": "3 lý do, nói một mạch",
            "x": 2028,
            "y": 1360,
            "size": 48,
            "at": "l2:three reasons"
          },
          {
            "id": "g-n",
            "t": "text",
            "text": "→ biên bản chỉ còn 2",
            "x": 2068,
            "y": 1440,
            "size": 50,
            "at": "l3:two",
            "color": "coral",
            "hl": [
              {
                "text": "chỉ còn 2",
                "at": "l3:two"
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
          "say": "Thursday: linking. A linking sentence is a road sign.",
          "sub": "Thứ Năm: chuyển ý. Câu chuyển ý là biển chỉ đường.",
          "keys": [
            "biển chỉ đường"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "At Dũng's club, a student gives three reasons to change the meeting time, in one long stream.",
          "sub": "Ở câu lạc bộ của Dũng, một bạn nêu ba lý do đổi giờ sinh hoạt, nói liền một mạch."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Wait, I only wrote down two reasons!",
          "sub": "Ơ, biên bản em chỉ chép được hai lý do!",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No pause, no numbers, so reasons two and three blended into one.",
          "sub": "Không dừng, không đánh số, nên lý do hai và ba nhập làm một."
        }
      ],
      "ref": "p15,p17"
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
          }
        ],
        "items": [
          {
            "id": "g-s1",
            "t": "text",
            "text": "“Đó là nguyên nhân. Giờ mình xem cách xử lý.”",
            "x": 2028,
            "y": 1550,
            "size": 34,
            "at": "l1:cause",
            "font": "base",
            "color": "accent"
          },
          {
            "id": "g-s2",
            "t": "text",
            "text": "“Ý thứ hai, và quan trọng nhất, là…”",
            "x": 2028,
            "y": 1610,
            "size": 34,
            "at": "l2:second",
            "font": "base",
            "color": "accent"
          },
          {
            "id": "g-p",
            "t": "text",
            "text": "Dừng 1 nhịp → chuyển slide → câu mới",
            "x": 2028,
            "y": 1700,
            "size": 44,
            "at": "l3:Pause",
            "hl": [
              {
                "text": "Dừng 1 nhịp",
                "at": "l3:Pause"
              }
            ]
          },
          {
            "id": "g-xn",
            "t": "text",
            "text": "Rẽ là bật xi nhan",
            "x": 2868,
            "y": 1790,
            "size": 54,
            "at": "l4:indicator",
            "color": "accent",
            "hl": [
              {
                "text": "bật xi nhan",
                "at": "l4:indicator"
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
          "say": "Try: that was the cause. Now let's look at ways to fix it.",
          "sub": "Thử: đó là nguyên nhân. Giờ mình xem có những cách nào để xử lý.",
          "keys": [
            "đó là nguyên nhân"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Or: the second point, and the most important, is this.",
          "sub": "Hoặc: ý thứ hai, và cũng là ý quan trọng nhất, là…"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Pause a beat, change the slide, then start the new sentence. Silence is a signal too.",
          "sub": "Dừng một nhịp, chuyển slide, rồi mới nói câu mới. Khoảng lặng cũng là tín hiệu.",
          "keys": [
            "Khoảng lặng cũng là tín hiệu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Every turn, put your indicator on for listeners.",
          "sub": "Mỗi lần rẽ, nhớ bật xi nhan cho người nghe.",
          "keys": [
            "bật xi nhan"
          ]
        }
      ],
      "ref": "p15,p16,p18"
    },
    {
      "id": "s18",
      "module": "BRK-07",
      "data": {
        "question": "Nói xong ba ý, kết sao cho khỏi “hết rồi ạ”?",
        "illus": "chequered-flag"
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
          "say": "Three points done. How do you end without 'that's all'?",
          "sub": "Nói xong ba ý, kết sao cho khỏi “hết rồi ạ”?",
          "keys": [
            "hết rồi ạ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p19"
    },
    {
      "id": "s19",
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
            "at": "l3",
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
            "text": "⑥ Thứ Năm tối · Kết bài",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:closing"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
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
                "chequered-flag"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "medium",
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
            "at": "l1:evening",
            "caption": "Thứ Năm tối · viết phần kết",
            "icon": "chequered-flag"
          },
          {
            "id": "h-no",
            "t": "text",
            "text": "“Hết rồi ạ” · im lặng",
            "x": 3996,
            "y": 1260,
            "size": 50,
            "at": "l1:that's all",
            "color": "muted"
          },
          {
            "id": "h-nox",
            "t": "strike",
            "over": "h-no",
            "at": "l2:Sum up"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "✓ Tóm 3 ý trong 1–2 câu",
            "x": 3996,
            "y": 1350,
            "size": 48,
            "at": "l2:Sum up"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "✓ Nhắc lại thông điệp",
            "x": 3996,
            "y": 1430,
            "size": 48,
            "at": "l2:message"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "✓ Một lời đề nghị cụ thể",
            "x": 3996,
            "y": 1510,
            "size": 48,
            "at": "l2:request",
            "color": "accent",
            "hl": [
              {
                "text": "cụ thể",
                "at": "l2:specific"
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
          "say": "Thursday evening: the closing, what people take home. Never end on 'that's all', or silence.",
          "sub": "Tối thứ Năm: phần kết, thứ người nghe mang về. Đừng kết bằng “hết rồi ạ” hay im lặng.",
          "keys": [
            "thứ người nghe mang về"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sum up three points in a sentence or two. Repeat the message. Make one specific request.",
          "sub": "Tóm ba ý trong một hai câu. Nhắc lại thông điệp. Một lời đề nghị cụ thể.",
          "keys": [
            "Một lời đề nghị cụ thể"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Specific, like: we ask the class to try the shared folder for two weeks from Monday?",
          "sub": "Cụ thể kiểu: nhóm em đề nghị lớp thử nộp bài qua thư mục chung hai tuần, từ thứ Hai?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Exactly. Specific enough that people know what to do next.",
          "sub": "Đúng thế. Đủ cụ thể để người nghe biết làm gì tiếp theo.",
          "keys": [
            "biết làm gì tiếp theo"
          ]
        }
      ],
      "ref": "p19,p20"
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
          }
        ],
        "items": [
          {
            "id": "h-qa",
            "t": "text",
            "text": "Có hỏi đáp:",
            "x": 3996,
            "y": 1630,
            "size": 48,
            "at": "l1:question time"
          },
          {
            "id": "h-q1",
            "t": "text",
            "text": "tóm tắt + đề nghị → hỏi đáp → nhắc thông điệp",
            "x": 3996,
            "y": 1700,
            "size": 34,
            "at": "l1:before",
            "font": "base",
            "color": "accent"
          },
          {
            "id": "h-last",
            "t": "text",
            "text": "Điều cuối: ý chính, không phải câu lạc đề",
            "x": 3996,
            "y": 1780,
            "size": 34,
            "at": "l2:last thing",
            "font": "base",
            "hl": [
              {
                "text": "ý chính",
                "at": "l2:main idea"
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
          "say": "With question time, give the summary and request before the questions. Afterwards, repeat the message.",
          "sub": "Có hỏi đáp thì tóm tắt và nêu đề nghị trước khi nhận câu hỏi. Trả lời xong, nhắc lại thông điệp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So the last thing they take home is your main idea, not an off-topic question.",
          "sub": "Để điều cuối người nghe mang về là ý chính, chứ không phải câu hỏi lạc đề.",
          "keys": [
            "ý chính"
          ]
        }
      ],
      "ref": "p21"
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
            "at": "l5",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Thứ Sáu 10:00 · Gặp lại",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:same"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
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
                  "id": "binh",
                  "side": "right"
                }
              ],
              "props": [
                "handshake"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "medium",
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
            "at": "l1:Friday",
            "caption": "Thứ Sáu 10:00 · cùng phòng họp",
            "icon": "handshake"
          },
          {
            "id": "i-sum",
            "t": "text",
            "text": "Tóm tắt · thông điệp",
            "x": 5964,
            "y": 1260,
            "size": 52,
            "at": "l2:sum up",
            "color": "accent"
          },
          {
            "id": "i-req",
            "t": "text",
            "text": "→ chốt bước tiếp theo",
            "x": 5964,
            "y": 1350,
            "size": 56,
            "at": "l3:next step",
            "color": "accent",
            "hl": [
              {
                "text": "bước tiếp theo",
                "at": "l3:next step"
              }
            ]
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Kết bằng bước tiếp theo, không phải “em xin hết”",
            "x": 5964,
            "y": 1795,
            "size": 34,
            "at": "l5:next step",
            "font": "base",
            "hl": [
              {
                "text": "bước tiếp theo",
                "at": "l5:next step"
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
          "say": "Friday, ten a.m. Same room, same client.",
          "sub": "Thứ Sáu, mười giờ. Vẫn phòng ấy, vẫn vị khách ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "To sum up: three points, and our message once more.",
          "sub": "Tóm lại: ba ý chính, và nhắc lại thông điệp.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "My request: let's agree on the next step today. Then, any questions?",
          "sub": "Em đề nghị mình chốt bước tiếp theo ngay hôm nay. Rồi bác có câu hỏi gì không ạ?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Good. Let's do that.",
          "sub": "Được, mình chốt luôn.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "End with a next step, not with 'that's all'.",
          "sub": "Đừng kết bằng “em xin hết”, hãy kết bằng một bước tiếp theo.",
          "keys": [
            "một bước tiếp theo"
          ]
        }
      ],
      "ref": "p22,p23"
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
            "text": "⑧ Bài ngắn · bài nhóm",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:minutes"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "campus",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "thumb"
                }
              ],
              "props": [
                "spiral-notepad"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "medium",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2:group",
            "caption": "Nhóm Dũng chia vai",
            "icon": "spiral-notepad"
          },
          {
            "id": "j-short",
            "t": "text",
            "text": "2–3 phút: vẫn đủ 3 phần",
            "x": 7932,
            "y": 1260,
            "size": 50,
            "at": "l1:three parts",
            "hl": [
              {
                "text": "đủ 3 phần",
                "at": "l1:three parts"
              }
            ]
          },
          {
            "id": "j-tight",
            "t": "text",
            "text": "càng ngắn, bố cục càng gọn",
            "x": 7932,
            "y": 1340,
            "size": 44,
            "at": "l1:tighter",
            "color": "muted"
          },
          {
            "id": "j-open",
            "t": "text",
            "text": "Ai mở: thông điệp + lộ trình",
            "x": 7932,
            "y": 1430,
            "size": 44,
            "at": "l2:opens"
          },
          {
            "id": "j-close",
            "t": "text",
            "text": "Ai kết: lời đề nghị",
            "x": 7932,
            "y": 1500,
            "size": 44,
            "at": "l2:closes"
          },
          {
            "id": "j-hand",
            "t": "text",
            "text": "Đổi người: có câu nối",
            "x": 7932,
            "y": 1570,
            "size": 44,
            "at": "l3:Hà",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Only two or three minutes? Still three parts, a sentence or two each. Shorter time, tighter structure.",
          "sub": "Chỉ hai ba phút? Vẫn đủ ba phần, mỗi phần một hai câu. Càng ngắn, bố cục càng gọn.",
          "keys": [
            "Vẫn đủ ba phần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In a group, the structure belongs to everyone: who opens with the message, who closes with the request.",
          "sub": "Bài nhóm thì bố cục là của cả nhóm: ai mở đầu nêu thông điệp, ai kết bằng lời đề nghị."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "And at each handover: Hà will now present the solutions.",
          "sub": "Và mỗi lần đổi người: bạn Hà sẽ trình bày cách xử lý.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A joke to open? Only if it fits the problem and the room. A real question is safer.",
          "sub": "Mở bằng câu đùa? Chỉ khi nó dính tới vấn đề và hợp người nghe. Câu hỏi thật an toàn hơn.",
          "keys": [
            "Câu hỏi thật an toàn hơn"
          ]
        }
      ],
      "ref": "p24,p25,p26"
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
            "id": "j-5",
            "t": "text",
            "text": "5 dòng: mở · 3 ý · đề nghị",
            "x": 7932,
            "y": 1670,
            "size": 54,
            "at": "l1:five lines",
            "color": "accent",
            "hl": [
              {
                "text": "5 dòng",
                "at": "l1:five lines"
              }
            ]
          },
          {
            "id": "j-pic",
            "t": "text",
            "text": "đọc liền hợp lý → slide chỉ là minh hoạ",
            "x": 7932,
            "y": 1770,
            "size": 36,
            "at": "l2:logical",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before the software, write exactly five lines: opening, point one, two, three, final request.",
          "sub": "Trước khi mở máy, viết đúng năm dòng: câu mở, ý một, hai, ba, câu đề nghị cuối bài.",
          "keys": [
            "năm dòng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Read together and logical? Then slides are just pictures.",
          "sub": "Đọc liền thấy hợp lý? Thì slide chỉ còn là minh hoạ."
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
            "at": "l1:opening",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:linking",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l3:request",
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
            "x": 7504,
            "y": 40,
            "at": "l1:opening"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 3568,
            "y": 1130,
            "at": "l2:linking"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 7504,
            "y": 1130,
            "at": "l3:request"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "g-xn"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l2:signal"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: an opening with the problem, the message and the route.",
          "sub": "Tóm lại: mở đầu có vấn đề, thông điệp và lộ trình.",
          "keys": [
            "vấn đề, thông điệp và lộ trình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three points with evidence, and a linking signal at every turn.",
          "sub": "Ba ý có bằng chứng, và câu chuyển ý ở mỗi lần rẽ.",
          "keys": [
            "câu chuyển ý"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A closing with a summary and a request.",
          "sub": "Kết bằng tóm tắt và một lời đề nghị.",
          "keys": [
            "lời đề nghị"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Structure doesn't make you stiff. It helps people follow, and keeps you on the road.",
          "sub": "Bố cục không làm bài cứng nhắc. Nó giúp người nghe theo kịp, và giữ bạn khỏi lạc.",
          "keys": [
            "giữ bạn khỏi lạc"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p28,outro"
    },
    {
      "id": "s33",
      "module": "QUIZ-01",
      "ref": "questions[22]",
      "data": {
        "q": "What should a good closing include?",
        "options": [
          "A brand new idea that you did not have time to mention earlier",
          "A short summary, the key message again, and one clear request",
          "Only a warm thank you and a smile before you sit down"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "chequered-flag",
        "why": "Phần kết gom lại ý chính và chỉ ra bước tiếp theo. Lời cảm ơn nói sau lời đề nghị."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What should a good closing include?",
          "sub": "Một phần kết tốt nên có những gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A short summary, the key message again, and one clear request.",
          "sub": "Tóm tắt ngắn, nhắc lại thông điệp, và một lời đề nghị rõ ràng."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Say thank you after the request, not instead of it.",
          "sub": "Lời cảm ơn nói sau lời đề nghị, không thay cho nó."
        }
      ]
    },
    {
      "id": "s35",
      "module": "END-05",
      "data": {
        "text": "Thử ngay 40 câu hỏi bên dưới",
        "sub": "Mỗi câu một tình huống thuyết trình"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, write five lines for your next talk. Then try the forty questions below!",
          "sub": "Hôm nay viết năm dòng bố cục cho bài sắp tới. Rồi thử bốn mươi câu bên dưới nhé!"
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
