// Kịch bản video W lần 3 (#110) — "Tư duy phản biện là gì? Cách rèn luyện cho người đi làm" · chuỗi "Tư duy phản biện"
// Giọng đọc tiếng Anh, phụ đề tiếng Việt; hoạt hình + thẻ. Đủ ý cho 40 câu bài tập.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "what-is-critical-thinking--w01",
  "hook": "HOOK-08",
  "unit": {
    "audience": "everyday-information-readers",
    "slug": "what-is-critical-thinking",
    "door": "ky-nang",
    "level": "B1",
    "title": "Tư duy phản biện là gì? Cách rèn luyện cho người đi làm",
    "series": "Tư duy phản biện"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit #144: Đét đứng trái + bảng trắng 10 ô (5 × 2) đi theo MỘT TUẦN điện thoại của Dũng (tối thứ Hai tin vàng → trưa thứ Ba bài đăng doạ → thứ Tư “Khoan đã!” + hỏi lại → thứ Năm quảng cáo khoá học → thứ Sáu nhóm chat cãi → thứ Bảy bác Bình đi xem xe → Chủ nhật bếp cô Hoa → tối thứ Hai tuần sau). Nhân vật (4, theo w145/_series): Dũng (gộp “bạn” ở mở bài/p5 và chị Loan p12), bác Bình bố Dũng (người rủ mua vàng p5, người nói “chân bớt đau” p15, anh Phúc p17), cô Hoa + Lan (mẹ Diệp + Diệp p22). Cảnh ngắt nhịp: BRK-04 Sai/Đúng (p1), BRK-07 rehook (p10), BRK-06 montage (p14). Không có số liệu ngoài bài (nửa phút–một phút, khoảng hai phút). Khép vòng: “Trăm nghe không bằng một thấy” → “… không bằng một câu hỏi đúng”. Bản cũ (W lần 3, #110): w145/bak/what-is-critical-thinking--w01.js.",
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
            "id": "a-msg",
            "t": "text",
            "text": "“Khẩn cấp, chia sẻ ngay!”",
            "x": 60,
            "y": 40,
            "size": 64,
            "at": "l1:urgent",
            "color": "coral"
          },
          {
            "id": "a-num",
            "t": "text",
            "text": "Vàng “sẽ” × 2",
            "x": 60,
            "y": 150,
            "size": 140,
            "at": "l1:double",
            "color": "accent",
            "hl": [
              {
                "text": "× 2",
                "at": "l1:double"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Trăm nghe không bằng một thấy”",
            "x": 60,
            "y": 400,
            "size": 50,
            "at": "l3:hundred",
            "hl": [
              {
                "text": "một thấy",
                "at": "l3:seeing once"
              }
            ]
          },
          {
            "id": "a-two",
            "t": "text",
            "text": "Tin luôn… hay cãi luôn?",
            "x": 60,
            "y": 490,
            "size": 50,
            "at": "l4:believe",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Urgent, share now! Gold will double next month, experts say.",
          "sub": "Khẩn cấp, chia sẻ ngay! Giá vàng sẽ tăng gấp đôi tháng tới, chuyên gia khẳng định.",
          "keys": [
            "tăng gấp đôi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The family chat buzzes like a beehive. But grandma said: hearing a hundred times is not worth seeing once.",
          "sub": "Nhóm chat gia đình rung như tổ ong. Nhưng bà dặn: “Trăm nghe không bằng một thấy.”",
          "keys": [
            "Trăm nghe không bằng một thấy"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Who has time to see? So we believe, or we argue.",
          "sub": "Ai rảnh mà đi thấy? Thế là ta hoặc tin luôn, hoặc cãi luôn."
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
            "at": "l3:end",
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
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "mobile-phone"
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Hai · nhóm chat gia đình",
            "icon": "mobile-phone"
          },
          {
            "id": "a-ask",
            "t": "text",
            "text": "Hỏi lại = bị coi là cãi?",
            "x": 60,
            "y": 590,
            "size": 50,
            "at": "l3:arguing",
            "color": "coral",
            "hl": [
              {
                "text": "bị coi là cãi",
                "at": "l3:arguing"
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
          "say": "Office worker, undefeated champion of the share button.",
          "sub": "Dân văn phòng, nhà vô địch bất bại của nút chia sẻ.",
          "keys": [
            "nút chia sẻ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Should I ask where this came from? They'll think I'm arguing...",
          "sub": "Có nên hỏi tin này ở đâu ra không? Lại bị coi là cãi…",
          "face": "worried"
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
            "text": "Tư duy phản biện là gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:critical thinking",
            "hl": [
              {
                "text": "là gì?",
                "at": "l1:really"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Hay cãi, nghi ngờ tất cả",
            "x": 2028,
            "y": 160,
            "size": 56,
            "at": "l2:arguing",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:not"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what is critical thinking, really?",
          "sub": "Vậy rốt cuộc tư duy phản biện là gì?",
          "keys": [
            "tư duy phản biện"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Many think it means arguing with everyone and doubting everything. It does not.",
          "sub": "Nhiều người nghĩ đó là cãi tất cả, nghi ngờ mọi thứ. Không phải."
        }
      ],
      "ref": "intro,p1"
    },
    {
      "id": "s03",
      "module": "BRK-04",
      "ref": "p1",
      "data": {
        "title": "Tư duy phản biện",
        "wrong": "Nghi ngờ tất cả, cãi lại mọi thứ",
        "right": "Tin có lý do, đổi ý khi có bằng chứng mới",
        "wrongIllus": "face-with-raised-eyebrow",
        "rightIllus": "handshake"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Doubting everything is lazy too.",
          "sub": "Nghi ngờ tất cả cũng là lười, chỉ theo hướng ngược lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Trust for a reason. Change with new evidence.",
          "sub": "Tin có lý do. Có bằng chứng mới thì đổi ý."
        }
      ]
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
            "id": "b-hab",
            "t": "text",
            "text": "Dừng vài giây, hỏi:",
            "x": 2028,
            "y": 250,
            "size": 56,
            "at": "l1:stop"
          },
          {
            "id": "b-how",
            "t": "text",
            "text": "“Làm sao biết điều này đúng?”",
            "x": 2568,
            "y": 250,
            "size": 56,
            "at": "l1:how do i know",
            "color": "accent",
            "hl": [
              {
                "text": "biết điều này đúng",
                "at": "l1:true"
              }
            ]
          },
          {
            "id": "b-then",
            "t": "text",
            "text": "→ rồi mới tin, chia sẻ, quyết định",
            "x": 2028,
            "y": 335,
            "size": 44,
            "at": "l1:true+600",
            "color": "muted"
          },
          {
            "id": "b-i1",
            "t": "illus",
            "name": "magnifying-glass-tilted-left",
            "x": 2028,
            "y": 410,
            "size": 80,
            "at": "l3:analyse"
          },
          {
            "id": "b-m1",
            "t": "text",
            "text": "① Phân tích",
            "x": 2118,
            "y": 420,
            "size": 54,
            "at": "l3:analyse+200",
            "hl": [
              {
                "text": "Phân tích",
                "at": "l3:parts"
              }
            ]
          },
          {
            "id": "b-m2",
            "t": "text",
            "text": "② So sánh",
            "x": 2568,
            "y": 420,
            "size": 54,
            "at": "l4:compare+200"
          },
          {
            "id": "b-m3",
            "t": "text",
            "text": "③ Đánh giá",
            "x": 2978,
            "y": 420,
            "size": 54,
            "at": "l4:evaluate+200"
          },
          {
            "id": "b-t",
            "t": "text",
            "text": "½ – 1 phút",
            "x": 3398,
            "y": 425,
            "size": 50,
            "at": "l5:half",
            "color": "coral",
            "hl": [
              {
                "text": "½ – 1 phút",
                "at": "l5:minute"
              }
            ]
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "1 tuần, 7 chặng",
            "x": 2028,
            "y": 540,
            "size": 46,
            "at": "l6:week"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l6:stops+400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2263,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l6:stops+650",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2498,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l6:stops+900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2733,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l6:stops+1150",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l6:stops+1400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l6:stops+1650",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3438,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l6:stops+1900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2",
            "x": 2093,
            "y": 628,
            "size": 48,
            "at": "l6:stops+520"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T3",
            "x": 2328,
            "y": 628,
            "size": 48,
            "at": "l6:stops+770"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T4",
            "x": 2563,
            "y": 628,
            "size": 48,
            "at": "l6:stops+1020"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T5",
            "x": 2798,
            "y": 628,
            "size": 48,
            "at": "l6:stops+1270"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T6",
            "x": 3033,
            "y": 628,
            "size": 48,
            "at": "l6:stops+1520"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T7",
            "x": 3268,
            "y": 628,
            "size": 48,
            "at": "l6:stops+1770"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "CN",
            "x": 3503,
            "y": 628,
            "size": 48,
            "at": "l6:stops+2020"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "It's a tiny habit: stop a few seconds, and ask, how do I know this is true?",
          "sub": "Thật ra chỉ là một thói quen nhỏ: dừng lại vài giây, hỏi “làm sao mình biết điều này đúng?”",
          "keys": [
            "làm sao mình biết điều này đúng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Inside are three moves. Analyse: break the news into parts.",
          "sub": "Bên trong có ba động tác. Phân tích: tách tin thành từng phần.",
          "keys": [
            "Phân tích"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Compare: side by side, same measure. Evaluate: how reliable, how far can you conclude?",
          "sub": "So sánh: đặt các nguồn cạnh nhau, cùng thước đo. Đánh giá: điều gì đáng tin hơn, kết luận được đến đâu.",
          "keys": [
            "So sánh",
            "Đánh giá"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "No degree needed. Many checks take half a minute to a minute.",
          "sub": "Không cần bằng cấp. Nhiều bước kiểm tra chỉ mất nửa phút đến một phút.",
          "keys": [
            "nửa phút đến một phút"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Now, Dũng's week, in seven stops.",
          "sub": "Giờ theo điện thoại của Dũng suốt một tuần, bảy chặng."
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
            "at": "l4",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Tối thứ Hai · Đọc tin",
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
                  "id": "binh",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "phone"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "props": [
                "coin"
              ]
            },
            "at": "l1:monday",
            "caption": "Tối thứ Hai · phòng khách",
            "icon": "coin"
          },
          {
            "id": "c-ok",
            "t": "text",
            "text": "Kiểm tra được → hỏi nguồn",
            "x": 3996,
            "y": 160,
            "size": 50,
            "at": "l4:checked",
            "hl": [
              {
                "text": "hỏi nguồn",
                "at": "l4:checked"
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
          "say": "Stop one: Monday. The gold message came from inside the house.",
          "sub": "Chặng một: tối thứ Hai. Tin vàng đến từ… ngay trong nhà.",
          "keys": [
            "ngay trong nhà"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Bác Bình, Dũng's dad, chief forwarder of the family chat.",
          "sub": "Đây là bác Bình, bố Dũng, trưởng ban chuyển tiếp của nhóm chat gia đình.",
          "keys": [
            "trưởng ban chuyển tiếp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Gold will double next month. An expert says so. Let's all buy now!",
          "sub": "Vàng sắp tăng gấp đôi, chuyên gia nói rồi. Cả nhà mua ngay thôi!",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "First move: split what can be checked from what is only judgement.",
          "sub": "Động tác đầu: tách phần kiểm tra được khỏi phần chỉ là nhận định.",
          "keys": [
            "kiểm tra được"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "ref": "p4,p5"
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
            "id": "c-ok2",
            "t": "text",
            "text": "ngày, con số, ai nói, ở đâu",
            "x": 4026,
            "y": 225,
            "size": 40,
            "at": "l1:dates",
            "color": "muted"
          },
          {
            "id": "c-op",
            "t": "text",
            "text": "Nhận định → hỏi lý do",
            "x": 3996,
            "y": 300,
            "size": 50,
            "at": "l2:judgements",
            "color": "coral",
            "hl": [
              {
                "text": "hỏi lý do",
                "at": "l2:reason"
              }
            ]
          },
          {
            "id": "c-op2",
            "t": "text",
            "text": "“tốt nhất”, “ai cũng biết”, “chắc chắn”",
            "x": 4026,
            "y": 365,
            "size": 40,
            "at": "l2:best",
            "color": "muted"
          },
          {
            "id": "c-2q",
            "t": "text",
            "text": "Ai nói? Dựa vào đâu?",
            "x": 3996,
            "y": 460,
            "size": 62,
            "at": "l5:who said it",
            "color": "accent",
            "hl": [
              {
                "text": "Dựa vào đâu?",
                "at": "l5:based on what"
              }
            ]
          },
          {
            "id": "c-rut",
            "t": "text",
            "text": "Chắc nịch vẫn là dự đoán",
            "x": 3996,
            "y": 575,
            "size": 44,
            "at": "l6:confident",
            "hl": [
              {
                "text": "dự đoán",
                "at": "l6:still"
              }
            ]
          },
          {
            "id": "c-pred",
            "t": "text",
            "text": "“sẽ gấp đôi” = dự đoán",
            "x": 4836,
            "y": 685,
            "size": 44,
            "at": "l4:prediction",
            "color": "coral"
          },
          {
            "id": "c-exp",
            "t": "text",
            "text": "“chuyên gia” = không tên",
            "x": 5276,
            "y": 685,
            "size": 44,
            "at": "l4:no name",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Checkable: dates, numbers, who, where. Ask for the source.",
          "sub": "Kiểm tra được: ngày tháng, con số, ai nói, ở đâu. Phần này hỏi nguồn.",
          "keys": [
            "hỏi nguồn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Judgements: the best, everyone knows, definitely. Ask for the reason.",
          "sub": "Nhận định: “tốt nhất”, “ai cũng biết”, “chắc chắn”. Phần này hỏi lý do.",
          "keys": [
            "hỏi lý do"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Which part already happened? None! Will double is a prediction, and the expert has no name.",
          "sub": "Phần nào đã xảy ra? Không phần nào! “Sẽ gấp đôi” là dự đoán, còn chuyên gia thì không tên.",
          "keys": [
            "dự đoán"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Before money moves, two questions: who said it, and based on what?",
          "sub": "Trước khi bỏ tiền, hỏi hai câu: ai nói, và dựa vào đâu?",
          "keys": [
            "ai nói",
            "dựa vào đâu"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Even insiders can't call gold. A confident prediction is still a prediction.",
          "sub": "Giá vàng khó đoán, kể cả với người trong nghề. Dự đoán chắc nịch vẫn chỉ là dự đoán.",
          "keys": [
            "vẫn chỉ là dự đoán"
          ]
        }
      ],
      "ref": "p4,p5,p6"
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
            "text": "② Thứ Ba · Trước khi chia sẻ",
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
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "mobile-phone",
                "warning"
              ]
            },
            "at": "l1:tuesday",
            "caption": "Trưa thứ Ba · văn phòng",
            "icon": "warning"
          },
          {
            "id": "d-emo",
            "t": "text",
            "text": "Sợ, tức → chậm lại",
            "x": 5964,
            "y": 160,
            "size": 60,
            "at": "l3:moment",
            "color": "coral",
            "hl": [
              {
                "text": "chậm lại",
                "at": "l3:slow down"
              }
            ]
          },
          {
            "id": "d-why",
            "t": "text",
            "text": "Tin giả: đánh vào cảm xúc",
            "x": 5964,
            "y": 250,
            "size": 40,
            "at": "l4:feelings",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two: Tuesday. A post makes Dũng's heart jump: share before it's deleted!",
          "sub": "Chặng hai: trưa thứ Ba. Một bài đăng làm tim Dũng nhảy: “Chia sẻ trước khi bị xoá!”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "This is scary! Everyone needs to know. Share!",
          "sub": "Ghê quá! Phải cho cả nhà biết. Chia sẻ!",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Scared or angry? That's exactly the moment to slow down.",
          "sub": "Đang sợ hay đang tức? Đúng lúc đó phải chậm lại.",
          "keys": [
            "chậm lại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Fake news pulls on feelings and rushes you, because panicked people rarely check.",
          "sub": "Tin giả đánh vào cảm xúc rồi giục chia sẻ ngay, vì người đang hoảng ít khi kiểm tra.",
          "keys": [
            "đánh vào cảm xúc"
          ]
        }
      ],
      "ref": "p7"
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
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 330,
            "w": 50,
            "h": 50,
            "at": "l1:who posted",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 312,
            "size": 62,
            "at": "l1:who posted+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Ai đăng? Tài khoản rõ không?",
            "x": 6039,
            "y": 322,
            "size": 42,
            "at": "l1:who posted+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 402,
            "w": 50,
            "h": 50,
            "at": "l2:evidence",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 384,
            "size": 62,
            "at": "l2:evidence+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Bằng chứng? Đường dẫn bài gốc?",
            "x": 6039,
            "y": 394,
            "size": 42,
            "at": "l2:evidence+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 474,
            "w": 50,
            "h": 50,
            "at": "l3:when",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 456,
            "size": 62,
            "at": "l3:when+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Đăng khi nào? Chuyện cũ?",
            "x": 6039,
            "y": 466,
            "size": 42,
            "at": "l3:when+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 546,
            "w": 50,
            "h": 50,
            "at": "l4:official",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 528,
            "size": 62,
            "at": "l4:official+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Nguồn chính thức nói giống?",
            "x": 6039,
            "y": 538,
            "size": 42,
            "at": "l4:official+200"
          },
          {
            "id": "d-2m",
            "t": "text",
            "text": "4 câu ≈ 2 phút",
            "x": 6804,
            "y": 685,
            "size": 46,
            "at": "l4:two minutes",
            "color": "accent",
            "hl": [
              {
                "text": "≈ 2 phút",
                "at": "l4:two minutes"
              }
            ]
          },
          {
            "id": "d-no",
            "t": "text",
            "text": "Chưa kiểm được → đừng chia sẻ",
            "x": 5964,
            "y": 625,
            "size": 42,
            "at": "l5:can't check",
            "color": "coral"
          },
          {
            "id": "d-fix",
            "t": "text",
            "text": "Lỡ rồi → xoá, đính chính",
            "x": 7194,
            "y": 685,
            "size": 44,
            "at": "l6:delete"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Four questions. Who posted it? Is the account clear?",
          "sub": "Bốn câu hỏi. Ai đăng, tài khoản có rõ không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Evidence? A link to the original?",
          "sub": "Bằng chứng là gì, có đường dẫn bài gốc không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "When was it posted? Old news?",
          "sub": "Đăng khi nào, có phải chuyện cũ?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Do official sources say the same? All four take about two minutes.",
          "sub": "Nguồn chính thức khác có nói giống vậy không? Bốn câu chỉ mất khoảng hai phút.",
          "keys": [
            "khoảng hai phút"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Can't check it? Don't share, or write: I haven't verified this.",
          "sub": "Không kiểm tra được thì đừng chia sẻ, hoặc ghi rõ: “mình chưa kiểm chứng”.",
          "keys": [
            "chưa kiểm chứng"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Already shared a wrong one? Delete it, and send a short correction.",
          "sub": "Lỡ chia sẻ tin sai? Xoá đi, nhắn một dòng đính chính ngắn.",
          "keys": [
            "đính chính"
          ]
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "ref": "p10",
      "data": {
        "question": "Người gửi tin là bố mình thì hỏi sao cho khỏi mất lòng?",
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
          "say": "What if the forwarder is your own dad?",
          "sub": "Nếu người chuyển tin là chính bố mình thì hỏi sao cho khỏi mất lòng?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ]
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "ref": "p5,p6,p10",
      "data": {
        "set": "home",
        "label": "Tối thứ Tư · bữa cơm",
        "actors": [
          {
            "id": "binh",
            "side": "left"
          },
          {
            "id": "dung",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Góp tiền theo một dự đoán",
          "why": "“Sẽ tăng gấp đôi” là dự đoán về tương lai, còn “chuyên gia” thì không tên, không biết là ai.",
          "rule": "Hỏi để hiểu, đừng hỏi để bắt lỗi"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "binh",
          "say": "Gold will double! Let's put the family money in tonight!",
          "sub": "Vàng sắp gấp đôi, bố nói rồi. Tối nay cả nhà góp tiền đi!",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Okay Dad, I'll put in my savings too!",
          "sub": "Dạ, con góp cả tiền tiết kiệm!",
          "face": "happy",
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
          "say": "Will double is a prediction. And the expert has no name.",
          "sub": "“Sẽ gấp đôi” là dự đoán. Còn chuyên gia thì không có tên.",
          "keys": [
            "dự đoán"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Ask to understand, not to catch a mistake.",
          "sub": "Tua lại! Hỏi để hiểu, đừng hỏi để bắt lỗi.",
          "phase": "redo",
          "keys": [
            "Hỏi để hiểu"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Sounds great, Dad! Where did you read that?",
          "sub": "Hay quá bố! Bố đọc tin này ở đâu vậy?",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "binh",
          "say": "Hmm... let me check.",
          "sub": "Ừ… để bố xem lại.",
          "phase": "redo",
          "face": "thinking",
          "pose": "think"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      }
    },
    {
      "id": "s11",
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
            "at": "l1:wednesday",
            "fit": [
              "e-v"
            ],
            "zoom": 1.3,
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
            "text": "③ Tối thứ Tư · Hỏi lại",
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
              "set": "home",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "pose": "think",
                  "face": "thinking"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "bowl-with-spoon"
              ]
            },
            "at": "l1:wednesday",
            "caption": "Tối thứ Tư · quay lại lần hai",
            "icon": "bowl-with-spoon"
          },
          {
            "id": "e-rule",
            "t": "text",
            "text": "Hỏi để hiểu, không để bắt lỗi",
            "x": 7932,
            "y": 160,
            "size": 50,
            "at": "l1:take two",
            "color": "accent",
            "hl": [
              {
                "text": "Hỏi để hiểu",
                "at": "l1:take two"
              }
            ]
          },
          {
            "id": "e-say",
            "t": "text",
            "text": "“Hay quá, bố đọc ở đâu vậy?”",
            "x": 7932,
            "y": 260,
            "size": 50,
            "at": "l3:sounds great"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "→ đưa câu chuyện về nguồn tin",
            "x": 7932,
            "y": 345,
            "size": 44,
            "at": "l3:source",
            "color": "muted"
          },
          {
            "id": "e-face",
            "t": "text",
            "text": "Không ai mất mặt",
            "x": 7932,
            "y": 450,
            "size": 60,
            "at": "l5:dignity",
            "color": "accent",
            "hl": [
              {
                "text": "mất mặt",
                "at": "l5:family"
              }
            ]
          },
          {
            "id": "e-sav",
            "t": "text",
            "text": "Bố giữ thể diện, nhà giữ tiền",
            "x": 8772,
            "y": 685,
            "size": 46,
            "at": "l5:savings"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three: Wednesday dinner, take two. Ask to understand.",
          "sub": "Chặng ba: bữa tối thứ Tư, quay lần hai. Hỏi để hiểu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sounds great, where did you read that? One gentle line brings the talk back to the source.",
          "sub": "“Hay quá, bố đọc ở đâu vậy?” Một câu nhẹ nhàng đưa câu chuyện về nguồn tin.",
          "keys": [
            "về nguồn tin"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Nobody loses face. Dad keeps his dignity, the family keeps its savings.",
          "sub": "Không ai mất mặt. Bố giữ được thể diện, cả nhà giữ được tiền.",
          "keys": [
            "Không ai mất mặt"
          ]
        }
      ],
      "ref": "p10"
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
            "at": "l3",
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
            "text": "④ Tối thứ Năm · Chọn khoá học",
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
                "laptop"
              ]
            },
            "at": "l1:thursday",
            "caption": "Tối thứ Năm · phòng trọ",
            "icon": "laptop"
          },
          {
            "id": "f-ad",
            "t": "text",
            "text": "“Nói tiếng Anh sau 1 tháng”",
            "x": 60,
            "y": 1250,
            "size": 50,
            "at": "l1:speak english"
          },
          {
            "id": "f-cm",
            "t": "text",
            "text": "Hàng trăm bình luận khen",
            "x": 60,
            "y": 1325,
            "size": 46,
            "at": "l2:hundreds"
          },
          {
            "id": "f-today",
            "t": "text",
            "text": "Ưu đãi chỉ hôm nay!",
            "x": 60,
            "y": 1395,
            "size": 54,
            "at": "l2:offer",
            "color": "coral",
            "hl": [
              {
                "text": "chỉ hôm nay",
                "at": "l2:today"
              }
            ]
          },
          {
            "id": "f-thin",
            "t": "text",
            "text": "Học vài buổi: sơ sài",
            "x": 60,
            "y": 1485,
            "size": 46,
            "at": "l4:thin",
            "color": "muted"
          },
          {
            "id": "f-new",
            "t": "text",
            "text": "Lời khen: tài khoản mới lập",
            "x": 60,
            "y": 1550,
            "size": 46,
            "at": "l4:brand new",
            "color": "coral",
            "hl": [
              {
                "text": "mới lập",
                "at": "l4:brand new"
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
          "say": "Stop four: Thursday. Dũng meets an ad: speak English in one month.",
          "sub": "Chặng bốn: tối thứ Năm. Dũng gặp quảng cáo: “nói tiếng Anh sau một tháng”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Hundreds of happy comments, and in red: offer ends today.",
          "sub": "Hàng trăm bình luận khen. Và chữ đỏ chót: “ưu đãi chỉ còn hôm nay”.",
          "keys": [
            "chỉ còn hôm nay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Only today? I'll pay right now!",
          "sub": "Chỉ hôm nay à? Đóng tiền luôn!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A few lessons later: thin content, and many comments from brand new accounts.",
          "sub": "Học vài buổi: bài giảng sơ sài. Nhiều lời khen đến từ tài khoản mới lập.",
          "keys": [
            "tài khoản mới lập"
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
          }
        ],
        "items": [
          {
            "id": "f-crit",
            "t": "text",
            "text": "Viết tiêu chí ra trước",
            "x": 60,
            "y": 1635,
            "size": 52,
            "at": "l1:criteria",
            "color": "accent",
            "hl": [
              {
                "text": "tiêu chí",
                "at": "l1:criteria"
              }
            ]
          },
          {
            "id": "f-same",
            "t": "text",
            "text": "Cùng thước đo cho cả hai",
            "x": 60,
            "y": 1715,
            "size": 46,
            "at": "l1:same measure"
          },
          {
            "id": "f-rule",
            "t": "text",
            "text": "Càng bị giục, càng nên chậm",
            "x": 880,
            "y": 1775,
            "size": 52,
            "at": "l3:rush",
            "color": "accent",
            "hl": [
              {
                "text": "càng nên chậm",
                "at": "l3:slower"
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
          "say": "The fix: write your criteria first, then judge each option by the same measure.",
          "sub": "Cách sửa: viết tiêu chí ra trước, rồi xét từng lựa chọn bằng cùng một thước đo.",
          "keys": [
            "tiêu chí ra trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And the golden rule: the more they rush you, the slower you go.",
          "sub": "Và luật vàng: càng bị giục, càng nên chậm.",
          "keys": [
            "càng bị giục, càng nên chậm"
          ]
        }
      ],
      "ref": "p11,p13"
    },
    {
      "id": "s14",
      "module": "BRK-06",
      "ref": "p14",
      "data": {
        "title": "Cãi trên mạng thắng nhờ gì?",
        "items": [
          {
            "illus": "loudspeaker",
            "text": "Giọng to"
          },
          {
            "illus": "crown",
            "text": "Chức danh"
          },
          {
            "illus": "busts-in-silhouette",
            "text": "Số đông"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Loud voices, big titles, big crowds.",
          "sub": "Giọng to, chức danh, số đông."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "That is how many online fights are won. Not by reasons.",
          "sub": "Nhiều trận cãi trên mạng thắng nhờ thế, chứ không nhờ lý lẽ."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ]
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Tối thứ Sáu · Nhóm chat cãi",
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
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "cup-with-straw",
                "mobile-phone"
              ]
            },
            "at": "l1:friday",
            "caption": "Tối thứ Sáu · võ đài nhóm chat",
            "icon": "loudspeaker"
          },
          {
            "id": "g-q",
            "t": "text",
            "text": "Bỏ giọng điệu, cảm xúc đi…",
            "x": 2028,
            "y": 1250,
            "size": 50,
            "at": "l4:tone"
          },
          {
            "id": "g-q2",
            "t": "text",
            "text": "còn lại lý do gì?",
            "x": 2028,
            "y": 1330,
            "size": 64,
            "at": "l4:reason",
            "color": "accent",
            "hl": [
              {
                "text": "lý do gì?",
                "at": "l4:reason"
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
          "say": "Stop five: Friday. The family chat becomes a boxing ring.",
          "sub": "Chặng năm: tối thứ Sáu. Nhóm chat gia đình biến thành võ đài."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Since I started drinking this, my leg hurts less. It works, I'm telling you!",
          "sub": "Từ khi uống loại nước này, chân bố bớt đau. Hiệu nghiệm, bố nói rồi!",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Ask yourself: without the tone and the feelings, what reason is left?",
          "sub": "Tự hỏi: bỏ đi giọng điệu và cảm xúc, thì còn lại lý do gì?",
          "keys": [
            "còn lại lý do gì"
          ]
        }
      ],
      "ref": "p14,p15"
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
            "id": "g-cc",
            "t": "text",
            "text": "Cùng lúc ≠ nguyên nhân",
            "x": 2028,
            "y": 1440,
            "size": 56,
            "at": "l1:same time",
            "color": "coral",
            "hl": [
              {
                "text": "≠ nguyên nhân",
                "at": "l1:caused"
              }
            ]
          },
          {
            "id": "g-sun",
            "t": "text",
            "text": "có thể chỉ vì trời ấm lên",
            "x": 2058,
            "y": 1520,
            "size": 42,
            "at": "l2:weather",
            "color": "muted"
          },
          {
            "id": "g-si",
            "t": "illus",
            "name": "sun",
            "x": 2608,
            "y": 1505,
            "size": 70,
            "at": "l2:sun"
          },
          {
            "id": "g-cb",
            "t": "text",
            "text": "Thích tin hợp ý mình",
            "x": 2028,
            "y": 1620,
            "size": 54,
            "at": "l3:fits",
            "hl": [
              {
                "text": "hợp ý mình",
                "at": "l3:already think"
              }
            ]
          },
          {
            "id": "g-feed",
            "t": "text",
            "text": "→ mạng đưa thêm đúng món",
            "x": 2028,
            "y": 1700,
            "size": 42,
            "at": "l3:social media",
            "color": "muted"
          },
          {
            "id": "g-rut",
            "t": "text",
            "text": "Cảm giác đúng ≠ đã đúng",
            "x": 2868,
            "y": 1775,
            "size": 48,
            "at": "l3:dish",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Two things at the same time don't mean one caused the other.",
          "sub": "Hai thứ xảy ra cùng lúc chưa chắc thứ này gây ra thứ kia.",
          "keys": [
            "chưa chắc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Maybe the weather got warmer. Thank the sun, not the bottle.",
          "sub": "Có thể chỉ vì trời ấm lên. Cảm ơn ông mặt trời, đừng cảm ơn cái chai."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And we love news that fits what we already think. Social media serves more of that dish.",
          "sub": "Ai cũng thích tin hợp với điều mình đã nghĩ, và mạng xã hội cứ dọn thêm đúng món đó.",
          "keys": [
            "hợp với điều mình đã nghĩ"
          ]
        }
      ],
      "ref": "p15,p16"
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
            "at": "l3",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Sáng thứ Bảy · Đi xem xe",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:stop six"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "binh",
                  "side": "center",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "automobile",
                "fire"
              ]
            },
            "at": "l1:saturday",
            "caption": "Sáng thứ Bảy · đi mua xe",
            "icon": "automobile"
          },
          {
            "id": "h-save",
            "t": "text",
            "text": "Tin “xe điện cháy” → lưu, gửi",
            "x": 3996,
            "y": 1250,
            "size": 46,
            "at": "l2:fire story",
            "color": "coral"
          },
          {
            "id": "h-skip",
            "t": "text",
            "text": "Tin tốt về xe điện → lướt qua",
            "x": 3996,
            "y": 1325,
            "size": 46,
            "at": "l3:scroll",
            "color": "muted"
          },
          {
            "id": "h-miss",
            "t": "text",
            "text": "Bỏ lỡ mẫu xe hợp hơn",
            "x": 3996,
            "y": 1410,
            "size": 54,
            "at": "l5:misses",
            "color": "coral",
            "hl": [
              {
                "text": "Bỏ lỡ",
                "at": "l5:misses"
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
          "say": "Stop six: Saturday. Bác Bình goes car shopping.",
          "sub": "Chặng sáu: sáng thứ Bảy. Bác Bình đi mua xe."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "He never trusted electric cars. Every fire story: saved and forwarded.",
          "sub": "Bác vốn không tin xe điện. Tin “xe điện cháy” nào cũng lưu lại, gửi nhóm bạn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "See? Another one on fire. Good news? I just scroll past. I knew it!",
          "sub": "Thấy chưa? Lại cháy một chiếc. Tin tốt hả? Lướt qua. Biết ngay mà!",
          "face": "surprised",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So he only checks petrol cars, and misses a better fit his old colleague used well for years.",
          "sub": "Thế là bác chỉ xem xe xăng, bỏ lỡ một mẫu hợp hơn mà đồng nghiệp cũ đã dùng ổn nhiều năm.",
          "keys": [
            "bỏ lỡ"
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
            "id": "h-rule",
            "t": "text",
            "text": "Tin “đúng quá” → kiểm kỹ hơn",
            "x": 3996,
            "y": 1540,
            "size": 56,
            "at": "l1:too right",
            "color": "accent",
            "hl": [
              {
                "text": "kiểm kỹ hơn",
                "at": "l1:harder"
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
          "say": "When a story feels too right, check it even harder.",
          "sub": "Tin nào “đúng quá”, càng nên kiểm tra kỹ.",
          "keys": [
            "đúng quá"
          ]
        }
      ],
      "ref": "p16,p18"
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
            "at": "l3",
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
            "text": "⑦ Chủ nhật · Bếp nhà cô Hoa",
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
              "set": "kitchen",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "face": "worried",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "egg"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "E-MOVE-01"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-10",
                  "on": "lan"
                }
              ]
            },
            "at": "l1:sunday",
            "caption": "Chủ nhật · hai bài báo trái ngược",
            "icon": "egg"
          },
          {
            "id": "i-rep",
            "t": "text",
            "text": "Nhắc lại ý họ trước",
            "x": 5964,
            "y": 1250,
            "size": 54,
            "at": "l4:repeats",
            "color": "accent",
            "hl": [
              {
                "text": "ý họ trước",
                "at": "l4:worry first"
              }
            ]
          },
          {
            "id": "i-def",
            "t": "text",
            "text": "→ người được hiểu bớt phòng thủ",
            "x": 5964,
            "y": 1330,
            "size": 42,
            "at": "l4:defensive",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven: Sunday. Meet Cô Hoa, Bác Bình's sister. She read two opposite articles about eggs.",
          "sub": "Chặng bảy: Chủ nhật. Đây là cô Hoa, em gái bác Bình. Cô vừa đọc hai bài trái ngược về chuyện ăn trứng.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "That's it. No more eggs in this house!",
          "sub": "Thôi, từ nay cả nhà cấm ăn trứng!",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Her daughter Lan doesn't argue. She repeats Mum's worry first: understood people get less defensive.",
          "sub": "Lan, con gái cô, không cãi. Lan nhắc lại nỗi lo của mẹ trước. Người được hiểu thì bớt phòng thủ.",
          "keys": [
            "bớt phòng thủ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "You're worried about our health, Mum. Honestly, I'm not sure which article is right either.",
          "sub": "Mẹ lo cho sức khoẻ cả nhà. Thật ra con cũng chưa chắc bài nào đúng.",
          "face": "thinking",
          "pose": "explain"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p19,p22"
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
            "id": "i-s1",
            "t": "text",
            "text": "1. Nói thật: chưa chắc",
            "x": 5964,
            "y": 1420,
            "size": 44,
            "at": "l1:together"
          },
          {
            "id": "i-s2",
            "t": "text",
            "text": "2. Mỗi bài dựa vào đâu?",
            "x": 5964,
            "y": 1485,
            "size": 44,
            "at": "l1:based on"
          },
          {
            "id": "i-s3",
            "t": "text",
            "text": "3. Ghi câu hỏi, hỏi bác sĩ",
            "x": 5964,
            "y": 1550,
            "size": 44,
            "at": "l2:doctor"
          },
          {
            "id": "i-bas",
            "t": "text",
            "text": "Quyết định có cơ sở",
            "x": 6804,
            "y": 1775,
            "size": 52,
            "at": "l4:basis",
            "color": "accent",
            "hl": [
              {
                "text": "có cơ sở",
                "at": "l4:basis"
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
          "say": "Together they check what each article is based on: a clear source, or just people say?",
          "sub": "Rồi hai mẹ con xem mỗi bài dựa vào đâu: có nguồn rõ, hay chỉ ghi “nghe nói”?",
          "keys": [
            "dựa vào đâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Let's write the question down and ask the doctor next time.",
          "sub": "Mình ghi câu hỏi lại, lần khám tới hỏi bác sĩ mẹ nhé.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Okay. That makes me feel better.",
          "sub": "Ừ, vậy mẹ yên tâm hơn.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not because anyone won, but because the decision has a basis.",
          "sub": "Không phải vì ai thắng, mà vì quyết định đã có cơ sở.",
          "keys": [
            "có cơ sở"
          ]
        }
      ],
      "ref": "p22,p23"
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
            "id": "i-obj",
            "t": "text",
            "text": "Khách quan ≠ nước đôi",
            "x": 5964,
            "y": 1635,
            "size": 50,
            "at": "l1:objective",
            "hl": [
              {
                "text": "≠ nước đôi",
                "at": "l1:fence"
              }
            ]
          },
          {
            "id": "i-w",
            "t": "text",
            "text": "“có thể” · “nhiều khả năng” · “đã xác nhận”",
            "x": 7124,
            "y": 1130,
            "size": 30,
            "at": "l2:may",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "i-q",
            "t": "text",
            "text": "Cân theo chất lượng, không theo số đông",
            "x": 7124,
            "y": 1180,
            "size": 30,
            "at": "l3:quality",
            "font": "base",
            "color": "muted",
            "hl": [
              {
                "text": "chất lượng",
                "at": "l3:quality"
              }
            ]
          },
          {
            "id": "i-uns",
            "t": "text",
            "text": "Chưa chắc → nói chưa chắc",
            "x": 5964,
            "y": 1715,
            "size": 46,
            "at": "l4:unsure",
            "color": "accent",
            "hl": [
              {
                "text": "nói chưa chắc",
                "at": "l4:say"
              }
            ]
          },
          {
            "id": "i-ask",
            "t": "text",
            "text": "→ rồi hỏi người biết",
            "x": 5964,
            "y": 1790,
            "size": 42,
            "at": "l4:ask"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Objective doesn't mean sitting on the fence. Pick the side the evidence supports more.",
          "sub": "Khách quan không có nghĩa là nói nước đôi. Hãy chọn hướng bằng chứng ủng hộ nhiều hơn.",
          "keys": [
            "không có nghĩa là nói nước đôi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Use measured words: may, likely, confirmed. Say what would change your mind.",
          "sub": "Dùng từ đúng mức: “có thể”, “nhiều khả năng”, “đã xác nhận”, và nói rõ điều gì khiến mình đổi ý.",
          "keys": [
            "từ đúng mức"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Weigh evidence by quality, not by how many people repeat it.",
          "sub": "Cân bằng chứng theo chất lượng, không theo số người nói.",
          "keys": [
            "theo chất lượng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And when unsure, say you're unsure. Then ask someone who knows.",
          "sub": "Chưa chắc thì nói chưa chắc, rồi đi hỏi người biết.",
          "keys": [
            "Chưa chắc thì nói chưa chắc"
          ]
        }
      ],
      "ref": "p20,p21,p23"
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
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tối thứ Hai tuần sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:monday"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone"
              ]
            },
            "at": "l1:monday",
            "caption": "Tối thứ Hai tuần sau · nhóm chat",
            "icon": "mobile-phone"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Trăm nghe < một thấy",
            "x": 7932,
            "y": 1650,
            "size": 54,
            "at": "l4:hundred"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "< một câu hỏi đúng",
            "x": 7932,
            "y": 1730,
            "size": 60,
            "at": "l4:one good question",
            "color": "accent",
            "hl": [
              {
                "text": "câu hỏi đúng",
                "at": "l4:good question"
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
          "say": "Monday evening again. A new forwarded message: urgent, share now!",
          "sub": "Lại tối thứ Hai. Một tin chuyển tiếp mới: “Khẩn cấp, chia sẻ ngay!”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Sounds great! Where did you read that?",
          "sub": "Hay quá! Đọc tin này ở đâu vậy ạ?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Hearing a hundred times is not worth seeing once. And seeing once is not worth one good question.",
          "sub": "“Trăm nghe không bằng một thấy.” Còn một thấy… không bằng một câu hỏi đúng.",
          "keys": [
            "một câu hỏi đúng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "outro,p10"
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
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1265,
            "w": 50,
            "h": 50,
            "at": "l1:trace",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1247,
            "size": 62,
            "at": "l1:trace+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Tìm nguồn một tin chuyển tiếp",
            "x": 8007,
            "y": 1257,
            "size": 42,
            "at": "l1:trace+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1350,
            "w": 50,
            "h": 50,
            "at": "l1:based on what",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1332,
            "size": 62,
            "at": "l1:based on what+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Hỏi một câu “Dựa vào đâu?”",
            "x": 8007,
            "y": 1342,
            "size": 42,
            "at": "l1:based on what+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1435,
            "w": 50,
            "h": 50,
            "at": "l2:three criteria",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1417,
            "size": 62,
            "at": "l2:three criteria+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Viết 3 tiêu chí trước khi mua",
            "x": 8007,
            "y": 1427,
            "size": 42,
            "at": "l2:three criteria+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1520,
            "w": 50,
            "h": 50,
            "at": "l2:may",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1502,
            "size": 62,
            "at": "l2:may+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Sửa “chắc chắn” thành “có thể”",
            "x": 8007,
            "y": 1512,
            "size": 42,
            "at": "l2:may+200"
          },
          {
            "id": "j-wk",
            "t": "text",
            "text": "Mỗi tuần một kỹ năng",
            "x": 8772,
            "y": 1775,
            "size": 50,
            "at": "l3:one skill",
            "color": "accent",
            "hl": [
              {
                "text": "một kỹ năng",
                "at": "l3:one skill"
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
          "say": "Homework: trace one forwarded message to its source, and ask one based on what.",
          "sub": "Bài tập: tìm nguồn gốc một tin chuyển tiếp, và hỏi một câu “Dựa vào đâu…?”.",
          "keys": [
            "Dựa vào đâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then write three criteria before buying, and turn one certain sentence of yours into may.",
          "sub": "Rồi viết ba tiêu chí trước khi mua, và sửa một câu chắc nịch của mình thành “có thể”.",
          "keys": [
            "có thể"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Don't swallow all seven deeper lessons at once. One skill a week is enough.",
          "sub": "Đừng nuốt cả bảy bài đào sâu một lúc. Mỗi tuần một kỹ năng, luyện trên tin nhắn hằng ngày, là đủ.",
          "keys": [
            "Mỗi tuần một kỹ năng"
          ]
        }
      ],
      "ref": "p24,p25"
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
            "at": "l1:asking",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:scared",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:say so",
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
            "x": 4696,
            "y": 455,
            "at": "l1:asking"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6504,
            "y": 165,
            "at": "l2:scared"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 6584,
            "y": 1710,
            "at": "l3:fool"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "i-uns"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:fool"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: critical thinking isn't arguing. It's asking, who said it, and based on what?",
          "sub": "Tóm lại: phản biện không phải cãi. Là dừng lại hỏi: ai nói, và dựa vào đâu?",
          "keys": [
            "ai nói, và dựa vào đâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Scared? Slow down. Rushed? Slow down more.",
          "sub": "Sợ thì chậm lại. Bị giục thì càng chậm.",
          "keys": [
            "chậm lại"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Unsure? Say so. It makes you harder to fool, not harder to live with.",
          "sub": "Chưa chắc thì nói chưa chắc. Phản biện làm bạn khó bị dắt mũi, chứ không làm bạn khó tính.",
          "keys": [
            "khó bị dắt mũi"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p6,p13,p23"
    },
    {
      "id": "s25",
      "module": "QUIZ-01",
      "ref": "questions[8]",
      "data": {
        "q": "In the gold price message, which part describes something that has already happened?",
        "options": [
          "Only the price part, because numbers in news are always checked facts",
          "The whole message, because an expert has already confirmed every word",
          "No part, it is a prediction about the future from an unnamed expert"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "coin",
        "why": "“Sẽ tăng gấp đôi” là dự đoán, “chuyên gia” lại không có tên."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "In the gold price message, which part describes something that has already happened?",
          "sub": "Trong tin về giá vàng, phần nào nói về điều đã xảy ra?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No part, it is a prediction about the future from an unnamed expert.",
          "sub": "Không phần nào: đó là dự đoán của một chuyên gia không tên."
        }
      ]
    },
    {
      "id": "s26",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Dừng lại, hỏi, rồi chọn"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop, ask, then choose. Forty questions are waiting below.",
          "sub": "Dừng lại, hỏi, rồi chọn. Bốn mươi câu hỏi đang chờ bên dưới."
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s22"
  }
};
