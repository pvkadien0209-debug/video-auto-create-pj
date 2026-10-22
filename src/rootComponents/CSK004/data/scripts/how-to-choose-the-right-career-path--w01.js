// Kịch bản video W lần 3 (#110) — "Cách chọn ngành nghề phù hợp với bản thân" · chuỗi "Năm hai, năm ba: chuẩn bị sớm cho nghề nghiệp"
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-choose-the-right-career-path--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "students-preparing-early",
    "slug": "how-to-choose-the-right-career-path",
    "door": "ky-nang",
    "level": "B1",
    "title": "Cách chọn ngành nghề phù hợp với bản thân",
    "series": "Năm hai, năm ba: chuẩn bị sớm cho nghề nghiệp"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo HỌC KỲ HAI NĂM HAI + MÙA HÈ của Lan (T2 22:00 phòng trọ gửi 3 tin nhắn → T2 ngành ≠ nghề → T3 mình thích gì, trắc nghiệm → T4 Dũng theo nghề hot, “Khoan đã!” → T5 điểm mạnh, cô Hoa → T6 về quê, coi trọng gì, bác Bình → T7 Dũng hỏi chị hướng dẫn viên → T8 lớp kèm, thử nhỏ → cuối T8 22:00 khép vòng). Nhân vật (theo w145/_series/students-preparing-early.md): Lan (Oanh p12; ví dụ trắc nghiệm p7 gán cho Lan), Dũng (Thịnh p9, Mẫn p19), Cô Hoa (chị quản lý quán làm thêm p12), Bác Bình (phụ huynh p24); chị hướng dẫn viên chỉ qua tin nhắn. Con số neo “3 tin nhắn” (p11–p12); “15–20 phút” lấy từ p17. Ngắt nhịp: BRK-04 Sai/Đúng trắc nghiệm (p7–p8), BRK-07 rehook (p14), BRK-06 montage thử nhỏ (p21). Không có số liệu ngoài bài. Bản cũ (W lần 3, #110): w145/bak/how-to-choose-the-right-career-path--w01.js.",
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
      "id": "b00",
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
            "text": "3 tin nhắn",
            "x": 60,
            "y": 100,
            "size": 150,
            "at": "l1:three",
            "color": "accent",
            "hl": [
              {
                "text": "3 tin nhắn",
                "at": "l1:messages"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "cùng một câu hỏi",
            "x": 70,
            "y": 290,
            "size": 60,
            "at": "l1:same"
          },
          {
            "id": "a-x",
            "t": "text",
            "text": "Ta tưởng: tự biết mình giỏi gì?",
            "x": 70,
            "y": 390,
            "size": 48,
            "at": "l2:know",
            "color": "muted"
          },
          {
            "id": "a-xx",
            "t": "strike",
            "over": "a-x",
            "at": "l2:last+300"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three messages. The same question, sent to three different people.",
          "sub": "Ba tin nhắn. Cùng một câu hỏi, gửi cho ba người khác nhau.",
          "keys": [
            "Ba tin nhắn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "We think we know our own strengths. Often we are the last to know.",
          "sub": "Ta tưởng mình biết rõ điểm mạnh của mình. Nhiều khi ta lại biết sau cùng.",
          "keys": [
            "biết sau cùng"
          ]
        }
      ],
      "ref": "intro,p11"
    },
    {
      "id": "b01",
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
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "mobile-phone",
                "crescent-moon"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "lan",
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
            "caption": "Tháng 2 năm hai · 22:00 · phòng trọ",
            "icon": "mobile-phone"
          },
          {
            "id": "a-gr",
            "t": "text",
            "text": "“Ngoài điểm số, chẳng có gì”",
            "x": 70,
            "y": 500,
            "size": 46,
            "at": "l3:grades",
            "color": "coral"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "“Theo bạn, mình làm tốt gì nhất?”",
            "x": 70,
            "y": 590,
            "size": 46,
            "at": "l4:best",
            "color": "accent",
            "hl": [
              {
                "text": "làm tốt gì nhất",
                "at": "l4:best"
              }
            ]
          },
          {
            "id": "a-w",
            "t": "text",
            "text": "Gửi. Chờ…",
            "x": 70,
            "y": 680,
            "size": 50,
            "at": "l5:sent",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Lan.",
          "sub": "Đây là Lan."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Year two, accounting, halfway through university. Friends seem to have a direction. Lan has a blank page.",
          "sub": "Năm hai ngành kế toán, đã qua nửa chặng đại học. Bạn bè hình như ai cũng có hướng. Lan thì trang giấy trắng.",
          "keys": [
            "trang giấy trắng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Apart from good grades, I have nothing special.",
          "sub": "Ngoài điểm số, mình chẳng có gì nổi bật.",
          "face": "sad",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "So I'll ask. What do you think I do best?",
          "sub": "Thôi thì hỏi. “Theo bạn, mình làm tốt điều gì nhất?”",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Three messages sent. The answers come later, and they surprise her.",
          "sub": "Ba tin đã gửi. Câu trả lời đến sau, và làm Lan bất ngờ.",
          "keys": [
            "bất ngờ"
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
      "ref": "intro,p12"
    },
    {
      "id": "b02",
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
            "text": "Chọn nghề hợp mình thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:choose",
            "hl": [
              {
                "text": "hợp mình",
                "at": "l1:fits"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Đúng cho cả đời",
            "x": 2028,
            "y": 160,
            "size": 54,
            "at": "l2:life",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:enough"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Đủ tốt cho vài năm tới",
            "x": 2468,
            "y": 160,
            "size": 54,
            "at": "l2:enough",
            "color": "accent",
            "hl": [
              {
                "text": "vài năm tới",
                "at": "l2:next few"
              }
            ]
          },
          {
            "id": "b-ch",
            "t": "text",
            "text": "Nhiều người đổi hướng, cả người chắc",
            "x": 2028,
            "y": 250,
            "size": 40,
            "at": "l3:change"
          },
          {
            "id": "b-100",
            "t": "text",
            "text": "Chờ chắc 100%",
            "x": 2028,
            "y": 330,
            "size": 50,
            "at": "l4:hundred",
            "color": "muted"
          },
          {
            "id": "b-100x",
            "t": "strike",
            "over": "b-100",
            "at": "l4:wastes"
          },
          {
            "id": "b-y",
            "t": "text",
            "text": "Năm hai, ba: lúc thử tốt nhất",
            "x": 2028,
            "y": 410,
            "size": 48,
            "at": "l4:best time",
            "color": "accent",
            "hl": [
              {
                "text": "lúc thử tốt nhất",
                "at": "l4:best time"
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
          "say": "So how do you choose a job that fits you?",
          "sub": "Vậy chọn nghề thế nào cho hợp mình?",
          "keys": [
            "hợp mình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "You don't need it right for life. Just good enough for the next few years.",
          "sub": "Không cần chọn đúng cho cả đời. Chỉ cần một hướng đủ tốt cho vài năm tới.",
          "keys": [
            "đủ tốt cho vài năm tới"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Many people change direction, even very sure ones. A first choice just needs to let you learn.",
          "sub": "Rất nhiều người đổi hướng, kể cả người từng rất chắc. Lựa chọn đầu tiên chỉ cần đủ để học hỏi và tiến lên."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Waiting to be one hundred percent sure wastes years two and three, the best time to try.",
          "sub": "Chờ chắc chắn trăm phần trăm chỉ làm phí năm hai, năm ba, lúc thuận lợi nhất để thử.",
          "keys": [
            "lúc thuận lợi nhất để thử"
          ]
        }
      ],
      "ref": "intro,p1,p2"
    },
    {
      "id": "b03",
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
            "id": "b-k0",
            "t": "text",
            "text": "Thích gì",
            "x": 2968,
            "y": 170,
            "size": 50,
            "at": "l1:enjoy",
            "hl": [
              {
                "text": "Thích gì",
                "at": "l1:enjoy"
              }
            ]
          },
          {
            "id": "b-k1",
            "t": "text",
            "text": "Làm tốt gì",
            "x": 2968,
            "y": 245,
            "size": 50,
            "at": "l1:well",
            "hl": [
              {
                "text": "Làm tốt gì",
                "at": "l1:well"
              }
            ]
          },
          {
            "id": "b-k2",
            "t": "text",
            "text": "Coi trọng gì",
            "x": 2968,
            "y": 320,
            "size": 50,
            "at": "l1:value",
            "hl": [
              {
                "text": "Coi trọng gì",
                "at": "l1:value"
              }
            ]
          },
          {
            "id": "b-k3",
            "t": "text",
            "text": "→ kiểm chứng bằng việc thật",
            "x": 2968,
            "y": 400,
            "size": 44,
            "at": "l2:test",
            "color": "accent",
            "hl": [
              {
                "text": "việc thật",
                "at": "l2:real"
              }
            ]
          },
          {
            "id": "b-hk",
            "t": "text",
            "text": "Học kỳ hai và mùa hè",
            "x": 2028,
            "y": 545,
            "size": 40,
            "at": "l3:semester",
            "color": "muted"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l3:stops+200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2263,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l3:stops+350",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2498,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l3:stops+500",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2733,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l3:stops+650",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l3:stops+800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l3:stops+950",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3438,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l3:stops+1100",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2",
            "x": 2083,
            "y": 628,
            "size": 48,
            "at": "l3:stops+300"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T3",
            "x": 2318,
            "y": 628,
            "size": 48,
            "at": "l3:stops+450"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T4",
            "x": 2553,
            "y": 628,
            "size": 48,
            "at": "l3:stops+600"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T5",
            "x": 2788,
            "y": 628,
            "size": 48,
            "at": "l3:stops+750"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T6",
            "x": 3023,
            "y": 628,
            "size": 48,
            "at": "l3:stops+900"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T7",
            "x": 3258,
            "y": 628,
            "size": 48,
            "at": "l3:stops+1050"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "T8",
            "x": 3493,
            "y": 628,
            "size": 48,
            "at": "l3:stops+1200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Know what you enjoy, what you do well, and what you value.",
          "sub": "Hiểu mình thích gì, làm tốt gì, coi trọng gì.",
          "keys": [
            "thích gì",
            "làm tốt gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then test it with real experience.",
          "sub": "Rồi kiểm chứng bằng trải nghiệm thật.",
          "keys": [
            "trải nghiệm thật"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Lan's second semester and summer, in seven stops.",
          "sub": "Học kỳ hai và mùa hè của Lan, bảy chặng.",
          "keys": [
            "bảy chặng"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "b04",
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
            "text": "① Tháng 2 · Ngành khác nghề",
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
              "set": "campus",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "books"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:break",
            "caption": "Giờ giải lao trên lớp",
            "icon": "books"
          },
          {
            "id": "c-qt",
            "t": "text",
            "text": "Quản trị kinh doanh →",
            "x": 3996,
            "y": 160,
            "size": 48,
            "at": "l3:business"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "bán hàng · nhân sự",
            "x": 3996,
            "y": 230,
            "size": 40,
            "at": "l3:sales",
            "color": "muted"
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "vận hành · phân tích",
            "x": 3996,
            "y": 285,
            "size": 40,
            "at": "l3:operations",
            "color": "muted"
          },
          {
            "id": "c-rv",
            "t": "text",
            "text": "Nhiều nghề tuyển từ nhiều ngành",
            "x": 3996,
            "y": 355,
            "size": 44,
            "at": "l4:many majors",
            "hl": [
              {
                "text": "nhiều ngành",
                "at": "l4:many majors"
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
          "say": "Stop one: February, a break between classes.",
          "sub": "Chặng một: tháng Hai, giờ giải lao trên lớp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "I study accounting. So I can only be an accountant, right?",
          "sub": "Mình học kế toán. Vậy chỉ làm kế toán thôi nhỉ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not so fast. A business degree can lead to sales, HR, operations or analysis.",
          "sub": "Chưa chắc. Học Quản trị kinh doanh có thể dẫn tới bán hàng, nhân sự, vận hành, phân tích.",
          "keys": [
            "Chưa chắc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And many jobs hire from many majors. A major is a door, not a corridor.",
          "sub": "Ngược lại, nhiều nghề tuyển người từ nhiều ngành. Ngành học là cánh cửa, không phải hành lang một chiều.",
          "keys": [
            "cánh cửa"
          ]
        }
      ],
      "ref": "p3"
    },
    {
      "id": "b05",
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
            "id": "c-old",
            "t": "text",
            "text": "“Ngành mình ra làm gì?”",
            "x": 3996,
            "y": 420,
            "size": 46,
            "at": "l1:major",
            "color": "muted"
          },
          {
            "id": "c-oldx",
            "t": "strike",
            "over": "c-old",
            "at": "l1:Ask"
          },
          {
            "id": "c-new",
            "t": "text",
            "text": "“Mỗi ngày muốn làm việc gì?”",
            "x": 3996,
            "y": 495,
            "size": 50,
            "at": "l1:every day",
            "color": "accent",
            "hl": [
              {
                "text": "Mỗi ngày",
                "at": "l1:every day"
              }
            ]
          },
          {
            "id": "c-i0",
            "t": "illus",
            "name": "busts-in-silhouette",
            "x": 4006,
            "y": 590,
            "size": 90,
            "at": "l2:people"
          },
          {
            "id": "c-i1",
            "t": "illus",
            "name": "bar-chart",
            "x": 4206,
            "y": 590,
            "size": 90,
            "at": "l2:data"
          },
          {
            "id": "c-i2",
            "t": "illus",
            "name": "light-bulb",
            "x": 4406,
            "y": 590,
            "size": 90,
            "at": "l2:ideas"
          },
          {
            "id": "c-i3",
            "t": "illus",
            "name": "wrench",
            "x": 4606,
            "y": 590,
            "size": 90,
            "at": "l2:machines"
          },
          {
            "id": "c-l",
            "t": "text",
            "text": "người · số liệu · ý tưởng · máy móc",
            "x": 3996,
            "y": 700,
            "size": 38,
            "at": "l2:things"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So don't ask what your major leads to. Ask what work you want every day.",
          "sub": "Vậy đừng hỏi “ngành mình ra làm gì”, hãy hỏi “mỗi ngày mình muốn làm loại việc nào”.",
          "keys": [
            "mỗi ngày mình muốn làm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "With people, with data, with ideas, or with machines and things.",
          "sub": "Làm với con người, với số liệu, với ý tưởng, hay với máy móc, đồ vật."
        }
      ],
      "ref": "p4"
    },
    {
      "id": "b06",
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
            "at": "l4",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Tháng 3 · Mình thích gì?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:stop two"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "laptop",
                "artist-palette"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l3",
            "caption": "Bài trắc nghiệm hướng nghiệp trên mạng",
            "icon": "laptop"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "• Bài nào làm quên thời gian?",
            "x": 5964,
            "y": 160,
            "size": 44,
            "at": "l2:forget"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "• Trong nhóm, hay nhận phần nào?",
            "x": 5964,
            "y": 230,
            "size": 44,
            "at": "l2:group"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "• Việc làm thêm: dễ chịu hay mệt?",
            "x": 5964,
            "y": 300,
            "size": 44,
            "at": "l2:tiring"
          },
          {
            "id": "d-r",
            "t": "text",
            "text": "Kết quả: “nghề sáng tạo”",
            "x": 5964,
            "y": 400,
            "size": 48,
            "at": "l3:creative",
            "color": "coral"
          },
          {
            "id": "d-e",
            "t": "text",
            "text": "Mà đang giỏi tổ chức sự kiện",
            "x": 5964,
            "y": 475,
            "size": 42,
            "at": "l3:events",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two: March. What does Lan really enjoy? Look at what she has done, not what she imagines.",
          "sub": "Chặng hai: tháng Ba. Lan thật sự thích gì? Nhìn vào việc đã làm, không chỉ điều mình tưởng.",
          "keys": [
            "việc đã làm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Which tasks make you forget time? Which part do you grab in a group? Which job feels tiring?",
          "sub": "Bài nào làm quên thời gian? Trong nhóm hay tự nhận phần nào? Việc làm thêm nào dễ chịu, việc nào thấy mệt?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "This online test says I fit creative jobs! But I'm good at running club events.",
          "sub": "Bài trắc nghiệm bảo mình hợp nghề sáng tạo! Mà mình đang tổ chức sự kiện câu lạc bộ rất ổn.",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A test only sums up a few minutes of answers. It gives a direction to try, not a verdict.",
          "sub": "Bài trắc nghiệm chỉ tổng hợp vài phút trả lời: một hướng để thử, không phải lời phán.",
          "keys": [
            "một hướng để thử"
          ]
        }
      ],
      "ref": "p5,p6,p7"
    },
    {
      "id": "b07",
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
            "id": "d-k",
            "t": "text",
            "text": "Giữ việc đang làm tốt",
            "x": 5964,
            "y": 560,
            "size": 44,
            "at": "l1:keep"
          },
          {
            "id": "d-tr",
            "t": "text",
            "text": "+ thử 1 bài thiết kế thật",
            "x": 5964,
            "y": 625,
            "size": 42,
            "at": "l1:design",
            "hl": [
              {
                "text": "thử 1 bài",
                "at": "l1:design"
              }
            ]
          },
          {
            "id": "d-f",
            "t": "text",
            "text": "→ hứng thú hay bức bối?",
            "x": 5964,
            "y": 695,
            "size": 46,
            "at": "l2:excites",
            "color": "accent",
            "hl": [
              {
                "text": "bức bối",
                "at": "l2:annoys"
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
          "say": "Smart move: keep the events, and try one real design task, with feedback and edits.",
          "sub": "Cách hợp lý: giữ việc đang làm tốt, rồi thử nhỏ một bài thiết kế thật, có người góp ý và yêu cầu sửa.",
          "keys": [
            "thử nhỏ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then she knows if it excites or annoys her, before a long course.",
          "sub": "Làm xong mới biết hứng thú hay bức bối, trước khi đăng ký một khoá học dài.",
          "keys": [
            "hứng thú hay bức bối"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "b08",
      "module": "BRK-04",
      "data": {
        "title": "Bài trắc nghiệm hướng nghiệp",
        "wrong": "Cho biết chính xác mình hợp nghề gì",
        "right": "Để gợi ý, không phải để phán",
        "wrongIllus": "crystal-ball",
        "rightIllus": "compass"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A test tells you exactly which job fits?",
          "sub": "Trắc nghiệm cho biết chính xác nghề hợp mình?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. Tests suggest, they don't decide.",
          "sub": "Không. Trắc nghiệm để gợi ý, không phải để phán."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p6,p8"
    },
    {
      "id": "b09",
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
            "text": "③ Tháng 4 · Nghề đang hot",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:stop three"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "fire"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "Dũng, ngành cơ khí",
            "icon": "fire"
          },
          {
            "id": "e-g",
            "t": "text",
            "text": "Cả nhóm bạn học lập trình",
            "x": 7932,
            "y": 160,
            "size": 48,
            "at": "l2:coding"
          },
          {
            "id": "e-h",
            "t": "text",
            "text": "“Nghề đang hot!”",
            "x": 7932,
            "y": 240,
            "size": 56,
            "at": "l2:hot",
            "color": "coral",
            "hl": [
              {
                "text": "hot",
                "at": "l2:hot"
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
          "say": "Stop three: April. Meet Dũng, Lan's classmate in mechanical engineering, a weathervane in a hoodie.",
          "sub": "Chặng ba: tháng Tư. Còn đây là Dũng, bạn cùng khoá ngành cơ khí, một cái chong chóng mặc áo hoodie.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "My whole group is learning coding. It's the hot job! I'm in!",
          "sub": "Cả nhóm bạn mình học lập trình. Nghề đang hot! Mình theo luôn!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Same as his friends, same timing. Let's fast-forward three months.",
          "sub": "Theo bạn, cùng lúc với bạn. Tua nhanh ba tháng xem sao."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p9"
    },
    {
      "id": "b10",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Ba tháng sau",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "think"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Chọn theo nghề đang hot",
          "why": "Ba tháng một mình trước màn hình, ngày càng uể oải; việc làm hăng nhất lại là phỏng vấn thành viên câu lạc bộ.",
          "rule": "Nghề hot của người khác chưa chắc hợp với mình"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Three months alone at a screen. Hot job, cold me.",
          "sub": "Ba tháng một mình trước màn hình. Nghề thì hot, mình thì nguội.",
          "face": "sad",
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
          "say": "His most eager task? Interviewing club members, chatting with strangers all day, never tired.",
          "sub": "Việc Dũng làm hăng nhất? Phỏng vấn thành viên câu lạc bộ, nói chuyện với người lạ cả buổi không mệt.",
          "keys": [
            "làm hăng nhất"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Quay lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "I love talking with people. I'll try a small job like that first.",
          "sub": "Mình mê nói chuyện với người khác. Thử nhỏ một việc kiểu đó trước đã.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Someone else's hot job isn't always the right one for you.",
          "sub": "Nghề hot của người khác chưa chắc là nghề hợp với mình.",
          "phase": "redo",
          "keys": [
            "chưa chắc là nghề hợp với mình"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p9,p10"
    },
    {
      "id": "b12",
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
            "at": "l4",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Tháng 5 · Điểm mạnh",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:stop four"
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
                  "at": "l3"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "face": "surprised"
                }
              ],
              "props": [
                "bento-box"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-10",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l3:Hoa",
            "caption": "Quán cơm, sau giờ đông khách",
            "icon": "bento-box"
          },
          {
            "id": "f-d",
            "t": "text",
            "text": "Làm tốt hơn mặt bằng chung",
            "x": 60,
            "y": 1250,
            "size": 46,
            "at": "l2:better"
          },
          {
            "id": "f-n",
            "t": "text",
            "text": "+ người khác hay nhờ",
            "x": 60,
            "y": 1320,
            "size": 46,
            "at": "l2:ask you",
            "hl": [
              {
                "text": "hay nhờ",
                "at": "l2:ask you"
              }
            ]
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Bạn học nhóm: “giảng dễ hiểu”",
            "x": 60,
            "y": 1420,
            "size": 40,
            "at": "l6:study partner"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Cô chủ nhiệm: “giảng dễ hiểu”",
            "x": 60,
            "y": 1485,
            "size": 40,
            "at": "l6:teacher"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Cô Hoa: “chỉ việc dễ hiểu”",
            "x": 60,
            "y": 1550,
            "size": 40,
            "at": "l6:Hoa",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four: May. The three replies are in.",
          "sub": "Chặng bốn: tháng Năm. Ba tin nhắn đã có hồi âm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A strength is what you do better than most, and what people often ask you for.",
          "sub": "Điểm mạnh là điều bạn làm tốt hơn mặt bằng chung, và người khác hay nhờ bạn.",
          "keys": [
            "hay nhờ bạn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Reply three comes in person: Cô Hoa, owner of Lan's rice shop.",
          "sub": "Câu trả lời thứ ba đến tận nơi: đây là cô Hoa, chủ quán cơm nơi Lan làm thêm.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Every new waiter you train learns fast. You explain things so clearly.",
          "sub": "Đứa mới nào con chỉ việc cũng làm được nhanh. Con giảng dễ hiểu lắm.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "My study partner and my class teacher said the same thing!",
          "sub": "Bạn học nhóm với cô chủ nhiệm cũng nói y như vậy!",
          "face": "surprised"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Study partner, teacher, Cô Hoa: one repeated idea. That's a real strength.",
          "sub": "Bạn học nhóm, cô chủ nhiệm, cô Hoa: một ý lặp lại. Đó là điểm mạnh thật.",
          "keys": [
            "một ý lặp lại"
          ]
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "b13",
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
            "id": "f-k",
            "t": "text",
            "text": "Thử: nhận một lớp kèm",
            "x": 60,
            "y": 1650,
            "size": 48,
            "at": "l1:tutoring",
            "hl": [
              {
                "text": "lớp kèm",
                "at": "l1:tutoring"
              }
            ]
          },
          {
            "id": "f-j",
            "t": "text",
            "text": "→ tìm hiểu nghề đào tạo",
            "x": 60,
            "y": 1720,
            "size": 44,
            "at": "l1:training",
            "color": "muted"
          },
          {
            "id": "f-r",
            "t": "text",
            "text": "Điểm mạnh: người khác thấy trước",
            "x": 60,
            "y": 1795,
            "size": 46,
            "at": "l2:Other",
            "color": "accent",
            "hl": [
              {
                "text": "thấy trước",
                "at": "l2:first"
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
          "say": "So Lan takes on a tutoring class, and starts reading about training jobs in companies.",
          "sub": "Vậy Lan thử nhận một lớp kèm, và bắt đầu tìm hiểu nghề đào tạo trong doanh nghiệp.",
          "keys": [
            "lớp kèm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your strengths? Other people often see them first.",
          "sub": "Điểm mạnh của mình, nhiều khi người khác thấy trước.",
          "keys": [
            "người khác thấy trước"
          ]
        }
      ],
      "ref": "p12,p13"
    },
    {
      "id": "b14",
      "module": "BRK-07",
      "data": {
        "question": "Cùng thích, cùng giỏi một việc, sao hai người chọn hai nghề khác nhau?",
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
          "say": "Same interests, same strengths. Why do two people choose different jobs?",
          "sub": "Cùng thích, cùng giỏi một việc, sao hai người chọn khác nhau?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p14"
    },
    {
      "id": "b15",
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
            "at": "l4",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Tháng 6 · Coi trọng gì?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:stop five"
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
                  "id": "binh",
                  "side": "left",
                  "enter": "pop",
                  "at": "l3"
                },
                {
                  "id": "lan",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-10",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l3:Bình",
            "caption": "Nghỉ hè · nhà ở quê",
            "icon": "house"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Thu nhập vài năm đầu",
            "x": 2028,
            "y": 1250,
            "size": 40,
            "at": "l2:income"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Ổn định · học hỏi, thăng tiến",
            "x": 2028,
            "y": 1310,
            "size": 40,
            "at": "l2:stability"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Gia đình, sức khoẻ · ý nghĩa",
            "x": 2028,
            "y": 1370,
            "size": 40,
            "at": "l2:family"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Nơi làm việc",
            "x": 2028,
            "y": 1430,
            "size": 40,
            "at": "l2:workplace"
          },
          {
            "id": "g-rk",
            "t": "text",
            "text": "→ xếp hạng",
            "x": 2528,
            "y": 1430,
            "size": 44,
            "at": "l2:Rank",
            "color": "accent",
            "hl": [
              {
                "text": "xếp hạng",
                "at": "l2:Rank"
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
          "say": "Stop five: June, summer at home. Same interests, different choices: people value different things.",
          "sub": "Chặng năm: tháng Sáu, nghỉ hè ở quê. Cùng sở thích mà chọn khác nhau, vì mỗi người coi trọng điều khác nhau.",
          "keys": [
            "coi trọng điều khác nhau"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Rank them: early income, stability, learning, family and health, meaning, workplace.",
          "sub": "Hãy xếp hạng: thu nhập vài năm đầu, ổn định, học hỏi, thăng tiến, gia đình, sức khoẻ, ý nghĩa xã hội, nơi làm việc.",
          "keys": [
            "xếp hạng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Bác Bình, Lan's dad. He trusts two things: rice and stable jobs.",
          "sub": "Còn đây là bác Bình, bố Lan, người chỉ tin hai thứ: hạt gạo và việc ổn định.",
          "keys": [
            "bác Bình"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Training jobs? Think about stability too, my girl.",
          "sub": "Nghề đào tạo à? Con nghĩ cả chuyện ổn định nữa nhé.",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "I will, Dad. And I want to work near home, to help you and Mum.",
          "sub": "Dạ. Con cũng muốn làm gần nhà để đỡ đần bố mẹ.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "binh",
          "say": "Then try your tutoring class, and tell me what you find.",
          "sub": "Vậy cứ thử lớp kèm, rồi kể bố nghe con thấy gì.",
          "face": "happy",
          "pose": "explain"
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p14,p15,p24"
    },
    {
      "id": "b16",
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
            "id": "g-ft",
            "t": "text",
            "text": "Gia đình, khoản vay, gần nhà",
            "x": 2028,
            "y": 1530,
            "size": 44,
            "at": "l1:family"
          },
          {
            "id": "g-dk",
            "t": "text",
            "text": "= dữ kiện, không đáng xấu hổ",
            "x": 2028,
            "y": 1600,
            "size": 46,
            "at": "l1:information",
            "color": "accent",
            "hl": [
              {
                "text": "dữ kiện",
                "at": "l1:information"
              }
            ]
          },
          {
            "id": "g-x",
            "t": "text",
            "text": "thích ∩ làm tốt ∩ coi trọng ∩ thị trường",
            "x": 2028,
            "y": 1690,
            "size": 34,
            "at": "l2:meet"
          },
          {
            "id": "g-pa",
            "t": "text",
            "text": "Phụ huynh: để con thử, nghe kể",
            "x": 2028,
            "y": 1780,
            "size": 42,
            "at": "l3:parents",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Family duties, a student loan, wanting to live near home: nothing to be ashamed of. It's real information.",
          "sub": "Trách nhiệm gia đình, khoản vay học phí, muốn ở gần nhà: không đáng xấu hổ, đó là dữ kiện giúp chọn thực tế hơn.",
          "keys": [
            "dữ kiện"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A good direction sits where enjoy, strength, values and what the market needs all meet.",
          "sub": "Hướng phù hợp nằm ở chỗ giao nhau: điều bạn thích, làm tốt, coi trọng và điều thị trường cần.",
          "keys": [
            "chỗ giao nhau"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Dear parents: your advice is precious. But a choice your child tests herself usually lasts longer.",
          "sub": "Thưa phụ huynh: lời khuyên gia đình rất quý. Nhưng lựa chọn con tự kiểm chứng thường bền hơn lựa chọn được giao sẵn.",
          "keys": [
            "con tự kiểm chứng"
          ]
        }
      ],
      "ref": "p15,p16,p24"
    },
    {
      "id": "b17",
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
            "at": "l5",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Tháng 7 · Hỏi người đang làm",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:stop six"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "label": "Hỏi người đang làm nghề",
              "actor": {
                "id": "dung",
                "side": "left"
              },
              "contact": {
                "name": "Chị hướng dẫn viên",
                "illus": "world-map"
              },
              "messages": [
                {
                  "from": "me",
                  "text": "Em xem video thấy nghề dẫn đoàn đi khắp nơi, em định chuyển ngành ạ.",
                  "at": "l3"
                },
                {
                  "from": "them",
                  "text": "Mùa cao điểm xa nhà liên tục, thu nhập lên xuống theo mùa, có đêm đi tìm khách lạc em ạ.",
                  "at": "l4"
                }
              ]
            },
            "at": "l3",
            "caption": "Dũng nhắn trước khi đổi ngành",
            "icon": "world-map"
          },
          {
            "id": "h-vd",
            "t": "text",
            "text": "Video: quá đẹp hoặc quá tệ",
            "x": 3996,
            "y": 1250,
            "size": 46,
            "at": "l1:videos",
            "color": "muted"
          },
          {
            "id": "h-15",
            "t": "text",
            "text": "15–20 phút với người đang làm",
            "x": 3996,
            "y": 1330,
            "size": 46,
            "at": "l2:fifteen",
            "color": "accent",
            "hl": [
              {
                "text": "15–20 phút",
                "at": "l2:twenty"
              }
            ]
          },
          {
            "id": "h-qua",
            "t": "text",
            "text": "thầy cô · cựu sinh viên · người quen",
            "x": 3996,
            "y": 1400,
            "size": 36,
            "at": "l2:alumni",
            "color": "muted"
          },
          {
            "id": "h-tn",
            "t": "text",
            "text": "Tình nguyện dịp lễ hội → học thêm",
            "x": 3996,
            "y": 1490,
            "size": 40,
            "at": "l5:volunteers"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "không đổi ngành",
            "x": 4036,
            "y": 1555,
            "size": 46,
            "at": "l5:instead",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six: July. Online videos paint jobs too pretty, or too ugly.",
          "sub": "Chặng sáu: tháng Bảy. Video trên mạng hay tả nghề quá đẹp, hoặc quá tệ.",
          "keys": [
            "quá đẹp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Better: fifteen to twenty minutes with someone in the job, through teachers or alumni.",
          "sub": "Tốt nhất: mười lăm, hai mươi phút trò chuyện với người đang làm, qua thầy cô, cựu sinh viên, người quen.",
          "keys": [
            "mười lăm, hai mươi phút"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Travel guide videos look amazing! I'm switching majors. Let me ask a real guide first.",
          "sub": "Video hướng dẫn viên đi khắp nơi đỉnh quá! Mình định chuyển ngành. Hỏi chị dẫn đoàn thật đã.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Her reply: busy seasons away, income up and down, nights hunting lost tourists.",
          "sub": "Chị trả lời: mùa cao điểm xa nhà liên tục, thu nhập lên xuống theo mùa, những đêm đi tìm khách lạc."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "He volunteers at a festival tour, then takes extra courses instead of switching.",
          "sub": "Dũng đi tình nguyện dẫn khách một dịp lễ hội, rồi quyết định học thêm chứ không đổi ngành.",
          "keys": [
            "học thêm"
          ]
        }
      ],
      "ref": "p17,p19"
    },
    {
      "id": "b18",
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
            "id": "h-q1",
            "t": "text",
            "text": "• Một ngày làm việc gồm gì?",
            "x": 3996,
            "y": 1650,
            "size": 40,
            "at": "l1:normal"
          },
          {
            "id": "h-q2",
            "t": "text",
            "text": "• Khó nhất, người ngoài ít biết?",
            "x": 3996,
            "y": 1710,
            "size": 40,
            "at": "l1:hardest"
          },
          {
            "id": "h-q3",
            "t": "text",
            "text": "• Người mới cần kỹ năng gì?",
            "x": 3996,
            "y": 1770,
            "size": 40,
            "at": "l2:newcomer"
          },
          {
            "id": "h-r",
            "t": "text",
            "text": "Hỏi người làm, đừng chỉ xem video",
            "x": 4816,
            "y": 1790,
            "size": 40,
            "at": "l3:videos",
            "color": "accent",
            "hl": [
              {
                "text": "Hỏi người làm",
                "at": "l3:Ask"
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
          "say": "Three questions to ask: what is a normal day like? What's the hardest part outsiders rarely see?",
          "sub": "Ba câu nên hỏi: một ngày làm việc bình thường gồm những gì? Điều gì khó nhất mà người ngoài ít biết?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "What skills does a newcomer need? Then read real job ads for that role.",
          "sub": "Người mới cần kỹ năng gì để bắt đầu? Rồi đọc thêm tin tuyển dụng thật của vị trí đó."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ask people in the job. Don't just watch videos.",
          "sub": "Hỏi người đang làm, đừng chỉ xem video.",
          "keys": [
            "Hỏi người đang làm"
          ]
        }
      ],
      "ref": "p18,p20"
    },
    {
      "id": "b19",
      "module": "BRK-06",
      "data": {
        "title": "Thử nhỏ, chi phí thấp",
        "items": [
          {
            "illus": "briefcase",
            "text": "Thực tập ngắn"
          },
          {
            "illus": "hammer-and-wrench",
            "text": "Dự án nhỏ"
          },
          {
            "illus": "books",
            "text": "Khoá ngắn thực hành"
          },
          {
            "illus": "raising-hands",
            "text": "Tình nguyện sự kiện"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Short internships, small projects, short courses, volunteering.",
          "sub": "Thực tập ngắn, dự án nhỏ, khoá ngắn, tình nguyện."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Try small before you go all in.",
          "sub": "Thử nhỏ trước khi dồn hết vào một hướng."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p21"
    },
    {
      "id": "b20",
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
            "at": "l3",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Tháng 8 · Thử nhỏ",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:stop seven"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "campus",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "open-book"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:tutoring",
            "caption": "Lớp kèm hè của Lan",
            "icon": "open-book"
          },
          {
            "id": "i-q1",
            "t": "text",
            "text": "1. Muốn làm nhiều hơn không?",
            "x": 5964,
            "y": 1260,
            "size": 46,
            "at": "l3:more",
            "hl": [
              {
                "text": "nhiều hơn",
                "at": "l3:more"
              }
            ]
          },
          {
            "id": "i-q2",
            "t": "text",
            "text": "2. Mình có học nhanh không?",
            "x": 5964,
            "y": 1340,
            "size": 46,
            "at": "l3:quickly",
            "hl": [
              {
                "text": "học nhanh",
                "at": "l3:quickly"
              }
            ]
          },
          {
            "id": "i-bo",
            "t": "text",
            "text": "Chán mà học nhanh? Thử thêm",
            "x": 5964,
            "y": 1430,
            "size": 38,
            "at": "l4:bored",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven: August. Lan runs her summer tutoring class.",
          "sub": "Chặng bảy: tháng Tám. Lan đứng lớp kèm mùa hè."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Tutoring fits me! I want to do more of this.",
          "sub": "Kèm học hợp với mình! Mình muốn làm việc này nhiều hơn.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "After each try, two questions: do I want to do more of this? Do I learn it quickly?",
          "sub": "Sau mỗi lần thử, hỏi hai câu: mình có muốn làm việc này nhiều hơn? Mình có học nhanh ở việc này?",
          "keys": [
            "hai câu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Bored but learning fast? Read both signals, and try another task in that field.",
          "sub": "Thấy chán mà học nhanh? Nhìn cả hai tín hiệu, thử thêm một việc khác trong ngành rồi hãy quyết."
        }
      ],
      "ref": "p21,p22"
    },
    {
      "id": "b21",
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
            "text": "4 sai lầm:",
            "x": 5964,
            "y": 1520,
            "size": 48,
            "at": "l1:four",
            "color": "coral",
            "hl": [
              {
                "text": "4 sai lầm",
                "at": "l1:mistakes"
              }
            ]
          },
          {
            "id": "i-m1",
            "t": "text",
            "text": "✗ chỉ vì nghề hot",
            "x": 5964,
            "y": 1590,
            "size": 40,
            "at": "l1:hot"
          },
          {
            "id": "i-m2",
            "t": "text",
            "text": "✗ hoàn toàn theo ý người khác",
            "x": 5964,
            "y": 1650,
            "size": 40,
            "at": "l1:others"
          },
          {
            "id": "i-m3",
            "t": "text",
            "text": "✗ chờ chắc tuyệt đối",
            "x": 5964,
            "y": 1710,
            "size": 40,
            "at": "l2:totally"
          },
          {
            "id": "i-m4",
            "t": "text",
            "text": "✗ bỏ sau vài tuần khó",
            "x": 5964,
            "y": 1770,
            "size": 40,
            "at": "l2:quitting"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Four classic mistakes: choosing only because it's hot, or only because others say so.",
          "sub": "Bốn sai lầm hay gặp: chọn chỉ vì nghề hot, chọn hoàn toàn theo ý người khác mà không tự tìm hiểu.",
          "keys": [
            "Bốn sai lầm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Waiting to be totally sure. And quitting after a few hard weeks, before you can judge.",
          "sub": "Chờ chắc chắn tuyệt đối. Và bỏ cuộc sau vài tuần khó khăn khi chưa đủ thời gian đánh giá."
        }
      ],
      "ref": "p23"
    },
    {
      "id": "b22",
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
            "text": "Cuối tháng 8 · 22:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:ten"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "crescent-moon"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:same room",
            "caption": "Vẫn phòng trọ ấy",
            "icon": "crescent-moon"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Điểm mạnh: giảng dễ hiểu",
            "x": 7932,
            "y": 1260,
            "size": 46,
            "at": "l2:explaining",
            "color": "accent"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Hẹn 15 phút: người làm đào tạo",
            "x": 7932,
            "y": 1340,
            "size": 44,
            "at": "l3:fifteen",
            "hl": [
              {
                "text": "15 phút",
                "at": "l3:fifteen"
              }
            ]
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Không phải đặt cược cả đời",
            "x": 7932,
            "y": 1430,
            "size": 46,
            "at": "l4:bet",
            "color": "muted"
          },
          {
            "id": "j-4",
            "t": "text",
            "text": "Chuỗi thử nhỏ",
            "x": 7932,
            "y": 1510,
            "size": 62,
            "at": "l4:small tries",
            "color": "accent",
            "hl": [
              {
                "text": "thử nhỏ",
                "at": "l4:small tries"
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
          "say": "Late August, ten p.m. Same room, same phone. A new message to write.",
          "sub": "Cuối tháng Tám, mười giờ tối. Vẫn phòng ấy, vẫn điện thoại ấy. Lại một tin nhắn mới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Not just good grades. I'm good at explaining.",
          "sub": "Không chỉ điểm số. Mình giỏi giảng cho người khác hiểu.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Now, fifteen minutes with someone who trains staff. Message sent!",
          "sub": "Giờ hẹn mười lăm phút với một người làm đào tạo nhân viên. Gửi!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Choosing a career isn't one bet for life. It's a chain of small tries.",
          "sub": "Chọn nghề không phải một lần đặt cược cả đời, mà là chuỗi thử nhỏ, mỗi lần hiểu mình thêm một chút.",
          "keys": [
            "chuỗi thử nhỏ"
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
      "ref": "outro"
    },
    {
      "id": "b23",
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
            "at": "l1:suggest",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:strengths",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:job",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l3:small",
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
            "x": 6664,
            "y": 690,
            "at": "l1:suggest"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 820,
            "y": 1800,
            "at": "l2:strengths"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4716,
            "y": 1340,
            "at": "l3:job"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 6664,
            "y": 1270,
            "at": "l3:small+900"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: tests suggest, they don't decide.",
          "sub": "Tóm lại: trắc nghiệm để gợi ý, không để phán.",
          "keys": [
            "gợi ý"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your strengths? Ask three people.",
          "sub": "Điểm mạnh? Hỏi ba người hiểu mình.",
          "keys": [
            "Hỏi ba người"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Talk to someone in the job, then try small.",
          "sub": "Hỏi người đang làm nghề, rồi thử nhỏ.",
          "keys": [
            "thử nhỏ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Next, the skills every direction needs: soft skills employers want.",
          "sub": "Bước tiếp theo: kỹ năng hướng nào cũng cần, trong bài “Kỹ năng mềm nhà tuyển dụng cần”.",
          "keys": [
            "Kỹ năng mềm"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p8,p13,p20,outro"
    },
    {
      "id": "s31",
      "module": "QUIZ-01",
      "ref": "questions[23]",
      "data": {
        "q": "A student almost changed majors after watching travel guide videos, what did he do instead?",
        "options": [
          "He stopped watching videos and never thought about the job again",
          "He changed his major the same day without speaking to anyone",
          "He talked with a working guide, volunteered at a festival, then decided carefully"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "world-map",
        "why": "Nghe người đang dẫn đoàn kể, rồi thử dẫn khách một dịp lễ hội: quyết định dựa trên trải nghiệm thật."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A student almost changed majors after watching travel guide videos, what did he do instead?",
          "sub": "Một bạn suýt đổi ngành sau khi xem video về hướng dẫn viên, cuối cùng bạn ấy đã làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "He talked with a working guide, volunteered at a festival, then decided carefully.",
          "sub": "Bạn ấy nói chuyện với người đang dẫn đoàn, làm tình nguyện ở lễ hội, rồi mới quyết định."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Ask people who do the job. Don't just watch videos.",
          "sub": "Hỏi người đang làm nghề, đừng chỉ xem video."
        }
      ]
    },
    {
      "id": "s32",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi giúp bạn hiểu mình hơn",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today: text three people what you do best, and book a fifteen-minute chat. Then try the forty questions!",
          "sub": "Hôm nay: nhắn ba người câu “mình làm tốt gì nhất”, hẹn mười lăm phút với một người trong nghề, rồi làm bốn mươi câu nhé!",
          "face": "happy"
        }
      ]
    }
  ],
  "loop": {
    "open": "b01",
    "close": "b22"
  }
};
