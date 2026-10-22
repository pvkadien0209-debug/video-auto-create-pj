// Kịch bản video W lần 3 (#110) — "Từ đồng nghiệp thành trưởng nhóm: thay đổi cách cư xử thế nào?" · chuỗi "Lần đầu làm trưởng nhóm"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "from-colleague-to-team-leader--w01",
  "hook": "HOOK-01",
  "unit": {
    "audience": "first-time-team-leaders",
    "slug": "from-colleague-to-team-leader",
    "door": "ky-nang",
    "level": "B1",
    "title": "Từ đồng nghiệp thành trưởng nhóm: thay đổi cách cư xử thế nào?",
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
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô (5 × 2) đi theo HAI TUẦN ĐẦU của Thảo sau khi lên trưởng nhóm (chiều thứ Sáu than ở quán cà phê → thứ Hai ai cũng ngượng → lời than bay lên tầng trên (BRK-01 dừng hình) → họp nhóm nói thẳng một lần → gặp riêng Lan, người từng cạnh tranh → ăn trưa với Dũng, công bằng → BRK-10 ca dao → nhắc hạn rõ việc, hạn, lý do → Dũng trễ hạn (“Khoan đã!” DLG) → BRK-07 rehook → họp tuần hai, nhận sai → chiều thứ Sáu hai tuần sau cùng quán, khép vòng). Nhân vật (chuỗi w145/_series/first-time-team-leaders.md): Thảo (“bạn”, Thảo p3, Bảo p20), Dũng (bạn cũ, Tuấn p20), Lan (người từng cùng ứng tuyển p7–p8), cô Hoa (sếp, “sếp lớn” p3). Câu khép vòng: “Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng nhau”. Bản cũ (W lần 3, #110): w145/bak/from-colleague-to-team-leader--w01.js.",
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
            "id": "a-y",
            "t": "text",
            "text": "Hôm qua: cùng than hạn chót",
            "x": 60,
            "y": 150,
            "size": 64,
            "at": "l1:Yesterday",
            "color": "muted"
          },
          {
            "id": "a-t",
            "t": "text",
            "text": "Hôm nay: người nhắc hạn chót",
            "x": 60,
            "y": 260,
            "size": 70,
            "at": "l1:Today",
            "color": "accent",
            "hl": [
              {
                "text": "người nhắc",
                "at": "l1:the one"
              }
            ]
          },
          {
            "id": "a-n",
            "t": "text",
            "text": "Ngượng? Bình thường.",
            "x": 70,
            "y": 400,
            "size": 56,
            "at": "l2:awkward",
            "hl": [
              {
                "text": "Bình thường",
                "at": "l2:normal"
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
          "say": "Yesterday you complained about deadlines with everyone. Today, you're the one reminding them.",
          "sub": "Hôm qua bạn còn cùng mọi người than hạn chót, hôm nay bạn là người phải nhắc hạn chót.",
          "keys": [
            "người phải nhắc hạn chót"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Feeling awkward? Completely normal. And no, you don't need to become someone else.",
          "sub": "Thấy ngượng? Rất bình thường. Và không, bạn không cần biến thành người khác.",
          "keys": [
            "Rất bình thường"
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
            "y": 140,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                }
              ],
              "props": [
                "hot-beverage"
              ]
            },
            "at": "l1",
            "caption": "Chiều thứ Sáu · quán cà phê quen",
            "icon": "hot-beverage"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Lời nói chẳng mất tiền mua”",
            "x": 60,
            "y": 520,
            "size": 56,
            "at": "l5:cost",
            "color": "accent",
            "hl": [
              {
                "text": "chẳng mất tiền mua",
                "at": "l5:cost"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "…lựa lời mà nói",
            "x": 100,
            "y": 610,
            "size": 52,
            "at": "l5:choose",
            "hl": [
              {
                "text": "lựa lời",
                "at": "l5:choose"
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
          "say": "Meet Thảo, the new team leader, at the usual Friday coffee.",
          "sub": "Đây là Thảo, trưởng nhóm mới, vẫn ngồi cà phê chiều thứ Sáu cùng cả nhóm như mọi khi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And her old friend Dũng, chief complainer of the coffee table.",
          "sub": "Và bạn cũ Dũng, “trưởng ban than phiền” của bàn cà phê.",
          "keys": [
            "trưởng ban than phiền"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "That team next door again! And the boss, don't get me started.",
          "sub": "Lại phòng bên cạnh nữa! Còn sếp thì thôi khỏi nói.",
          "face": "stern"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I know, right? Same here!",
          "sub": "Chuẩn luôn! Mình cũng thấy thế!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Words cost nothing, says the folk poem. So choose them well. Especially now.",
          "sub": "Ca dao dạy: “Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng nhau.” Nhất là bây giờ.",
          "keys": [
            "lựa lời mà nói"
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
      "ref": "intro,p3"
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
            "text": "Bạn cũ thành sếp: cư xử sao?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:act",
            "hl": [
              {
                "text": "cư xử sao",
                "at": "l1:act"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Nói rõ vai mới một lần",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:once"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Công bằng với tất cả",
            "x": 2028,
            "y": 240,
            "size": 50,
            "at": "l2:fair"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Nhắc việc, không ra lệnh",
            "x": 2028,
            "y": 310,
            "size": 50,
            "at": "l3:remind"
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "Giữ kín việc của trưởng nhóm",
            "x": 2028,
            "y": 380,
            "size": 50,
            "at": "l3:private",
            "hl": [
              {
                "text": "Giữ kín",
                "at": "l3:private"
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
            "at": "l4:two weeks+400",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2303,
            "y": 610,
            "w": 250,
            "h": 90,
            "at": "l4:two weeks+650",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2578,
            "y": 610,
            "w": 250,
            "h": 90,
            "at": "l4:two weeks+900",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2853,
            "y": 610,
            "w": 250,
            "h": 90,
            "at": "l4:two weeks+1150",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3128,
            "y": 610,
            "w": 250,
            "h": 90,
            "at": "l4:two weeks+1400",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3403,
            "y": 610,
            "w": 250,
            "h": 90,
            "at": "l4:two weeks+1650",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Thứ Hai",
            "x": 2048,
            "y": 626,
            "size": 44,
            "at": "l4:two weeks+520"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Họp nhóm",
            "x": 2323,
            "y": 626,
            "size": 44,
            "at": "l4:two weeks+770"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Gặp Lan",
            "x": 2598,
            "y": 626,
            "size": 44,
            "at": "l4:two weeks+1020"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Ăn trưa",
            "x": 2873,
            "y": 626,
            "size": 44,
            "at": "l4:two weeks+1270"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Nhắc hạn",
            "x": 3148,
            "y": 626,
            "size": 44,
            "at": "l4:two weeks+1520"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Trễ hạn",
            "x": 3423,
            "y": 626,
            "size": 44,
            "at": "l4:two weeks+1770"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how should you act when your colleagues become your team?",
          "sub": "Vậy từ đồng nghiệp thành trưởng nhóm, nên cư xử thế nào?",
          "keys": [
            "cư xử thế nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Explain your new role once. Be fair to everyone.",
          "sub": "Nói rõ vai mới một lần. Công bằng với tất cả.",
          "keys": [
            "Công bằng với tất cả"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Remind without ordering. And keep private what a leader must keep private.",
          "sub": "Nhắc việc rõ ràng mà không ra lệnh. Và giữ kín những gì trưởng nhóm phải giữ.",
          "keys": [
            "giữ kín"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Let's watch Thảo's first two weeks, stop by stop.",
          "sub": "Giờ xem hai tuần đầu của Thảo, từng chặng một.",
          "keys": [
            "hai tuần đầu"
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
            "text": "① Thứ Hai · Ai cũng ngượng",
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
                  "side": "left"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "face": "worried"
                }
              ],
              "props": [
                "laptop"
              ]
            },
            "at": "l1:Monday",
            "caption": "Sáng thứ Hai · bàn làm việc",
            "icon": "laptop"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Bạn cũ cũng đang ngượng",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l3:awkward too",
            "hl": [
              {
                "text": "cũng đang ngượng",
                "at": "l3:awkward too"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Dè dặt ≠ chống đối",
            "x": 3996,
            "y": 250,
            "size": 56,
            "at": "l4:resistance",
            "color": "accent",
            "hl": [
              {
                "text": "≠ chống đối",
                "at": "l4:resistance"
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
          "say": "First stop: Monday morning. Dũng doesn't know how to say hello anymore.",
          "sub": "Chặng một: sáng thứ Hai. Dũng bỗng không biết chào Thảo thế nào."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Morning... boss? Can I still joke with you?",
          "sub": "Chào… sếp? Mình còn được đùa với cậu không nhỉ?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "See? Your old friends feel awkward too. How to talk now, how far to joke.",
          "sub": "Thấy chưa? Bạn cũ cũng đang ngượng: giờ nói chuyện thế nào, đùa đến đâu thì vừa."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So don't read their caution as resistance.",
          "sub": "Nên đừng vội đọc sự dè dặt của họ là chống đối.",
          "keys": [
            "chống đối"
          ]
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
          },
          {
            "at": "l2",
            "fit": [
              "c-v2"
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
            "id": "c-v2",
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
                  "face": "worried"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "speech-balloon"
              ]
            },
            "at": "l1:Two weeks",
            "caption": "Hai tuần sau · phòng cô Hoa",
            "icon": "speech-balloon"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Than ở bàn cà phê →",
            "x": 3996,
            "y": 380,
            "size": 48,
            "at": "l1:coffee"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "“trưởng nhóm cũng nói thế”",
            "x": 3996,
            "y": 455,
            "size": 48,
            "at": "l3:leader said",
            "color": "coral"
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "Phòng bên lạnh nhạt hẳn",
            "x": 3996,
            "y": 530,
            "size": 46,
            "at": "l4:cold",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Now picture Thảo keeping that Friday coffee habit. Within two weeks, the complaints travel upstairs.",
          "sub": "Giờ thử hình dung Thảo vẫn giữ thói quen than ở bàn cà phê. Chưa đầy hai tuần, lời than đã bay lên tầng trên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Cô Hoa, head of sales.",
          "sub": "Còn đây là cô Hoa, trưởng phòng kinh doanh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, I heard: even the team leader said so. Can we talk?",
          "sub": "Thảo, cô nghe nói “trưởng nhóm cũng nói thế mà”. Mình nói chuyện chút nhé?",
          "face": "neutral"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And the team next door? Suddenly very cold to the whole team.",
          "sub": "Còn phòng bên cạnh? Bỗng lạnh nhạt hẳn với cả nhóm."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p2,p3"
    },
    {
      "id": "s05",
      "module": "BRK-01",
      "data": {
        "illus": "hot-beverage",
        "around": [
          "speech-balloon",
          "loudspeaker"
        ],
        "label": "Sai ở đây!",
        "note": "Trưởng nhóm than phiền ở bàn cà phê",
        "tone": "bad"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Freeze. Here's the mistake.",
          "sub": "Dừng hình. Sai ở đây."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A leader's complaint weighs much more.",
          "sub": "Lời than của trưởng nhóm nặng hơn nhiều.",
          "keys": [
            "nặng hơn nhiều"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "re-dia"
        }
      ],
      "ref": "p3"
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
            "id": "c-6",
            "t": "text",
            "text": "Đổi: không phải con người",
            "x": 3996,
            "y": 610,
            "size": 44,
            "at": "l1:not you",
            "color": "muted"
          },
          {
            "id": "c-7",
            "t": "text",
            "text": "Đổi: trách nhiệm",
            "x": 4436,
            "y": 610,
            "size": 44,
            "at": "l1:responsibility",
            "hl": [
              {
                "text": "trách nhiệm",
                "at": "l1:responsibility"
              }
            ]
          },
          {
            "id": "c-8",
            "t": "text",
            "text": "Chưa vừa ý → nói riêng với sếp",
            "x": 3996,
            "y": 680,
            "size": 44,
            "at": "l2:privately",
            "color": "accent",
            "hl": [
              {
                "text": "nói riêng với sếp",
                "at": "l2:privately"
              }
            ]
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Vai đã khác, lời phải chọn",
            "x": 4816,
            "y": 700,
            "size": 48,
            "at": "l3:role",
            "color": "accent",
            "hl": [
              {
                "text": "lời phải chọn",
                "at": "l3:choose"
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
          "say": "What changed is not you. It's your responsibility for the team's results.",
          "sub": "Điều thay đổi không phải con người bạn, mà là trách nhiệm cho kết quả cả nhóm.",
          "keys": [
            "trách nhiệm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Unhappy with the company? Tell your boss privately, not the coffee table.",
          "sub": "Chưa vừa ý với công ty? Nói thẳng với sếp trong buổi gặp riêng, đừng than ở bàn cà phê.",
          "keys": [
            "gặp riêng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The role has changed, so choose your words.",
          "sub": "Vai đã khác, lời phải chọn.",
          "keys": [
            "Vai đã khác, lời phải chọn"
          ]
        }
      ],
      "ref": "p2,p4"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Họp nhóm · Nói thẳng một lần",
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
            "at": "l1:meeting",
            "caption": "Thứ Ba · họp cả nhóm",
            "icon": "busts-in-silhouette"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Không giả vờ như cũ",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l1:pretending",
            "color": "muted"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Ngắn, thẳng, một lần",
            "x": 5964,
            "y": 250,
            "size": 54,
            "at": "l5:once",
            "color": "accent",
            "hl": [
              {
                "text": "một lần",
                "at": "l5:once"
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
          "say": "Second stop: the team meeting. No pretending nothing happened.",
          "sub": "Chặng hai: họp nhóm. Không giả vờ như chưa có gì xảy ra."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Here's Lan too, the numbers expert.",
          "sub": "Có cả Lan, cao thủ số liệu của nhóm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I know this feels strange for all of us. Now I'm responsible for our results, so sometimes I'll remind you about tasks.",
          "sub": "Mình biết chuyện này hơi lạ với tất cả. Từ giờ mình chịu trách nhiệm kết quả chung, nên đôi khi sẽ nhắc việc.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "And please tell me straight when I get it wrong.",
          "sub": "Và mình cần mọi người góp ý thẳng khi mình làm chưa ổn.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Short, straight, and only once. No speeches.",
          "sub": "Ngắn, thẳng, và một lần thôi. Không diễn văn.",
          "keys": [
            "một lần thôi"
          ]
        }
      ],
      "ref": "p5"
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
            "text": "Rồi gặp riêng từng người",
            "x": 5964,
            "y": 400,
            "size": 50,
            "at": "l1:each person"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "“Mình hỗ trợ bạn thế nào?”",
            "x": 5964,
            "y": 480,
            "size": 54,
            "at": "l2:support",
            "color": "accent",
            "hl": [
              {
                "text": "hỗ trợ",
                "at": "l2:support"
              }
            ]
          },
          {
            "id": "d-5",
            "t": "text",
            "text": "Đến để giúp, không để ra lệnh",
            "x": 6784,
            "y": 700,
            "size": 44,
            "at": "l3:help",
            "hl": [
              {
                "text": "để giúp",
                "at": "l3:help"
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
          "say": "Then meet each person alone, especially old friends, and anyone who wanted this job too.",
          "sub": "Sau đó gặp riêng từng người, nhất là bạn thân cũ và người từng cùng ứng tuyển vị trí này."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask one question: how can I support you?",
          "sub": "Hỏi một câu: “Bạn muốn mình hỗ trợ bạn thế nào?”",
          "keys": [
            "hỗ trợ bạn thế nào"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It shows you came to help them do well, not to give orders.",
          "sub": "Câu ấy cho thấy bạn đến để giúp họ làm tốt, không phải để ra lệnh.",
          "keys": [
            "để giúp"
          ]
        }
      ],
      "ref": "p6"
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
            "text": "③ Gặp riêng Lan",
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "lan",
                  "side": "right"
                }
              ],
              "props": [
                "bar-chart"
              ]
            },
            "at": "l3",
            "caption": "Thứ Tư · gặp riêng",
            "icon": "handshake"
          },
          {
            "id": "e-A",
            "t": "text",
            "text": "A: né, giao việc lặt vặt",
            "x": 7932,
            "y": 170,
            "size": 48,
            "at": "l2:small jobs",
            "color": "muted"
          },
          {
            "id": "e-A2",
            "t": "text",
            "text": "→ im lặng, làm vừa đủ",
            "x": 7972,
            "y": 240,
            "size": 44,
            "at": "l2:minimum",
            "color": "coral"
          },
          {
            "id": "e-B",
            "t": "text",
            "text": "B: ghi nhận, giao mảng giỏi nhất",
            "x": 7932,
            "y": 330,
            "size": 46,
            "at": "l3:best at",
            "hl": [
              {
                "text": "ghi nhận",
                "at": "l5:Recognise"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Né người giỏi là mất người giỏi",
            "x": 7932,
            "y": 450,
            "size": 50,
            "at": "l6:Avoid",
            "color": "accent",
            "hl": [
              {
                "text": "mất người giỏi",
                "at": "l6:lose"
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
          "say": "Third stop: Lan. She applied for this job too, and Thảo got it.",
          "sub": "Chặng ba: Lan. Lan cũng từng ứng tuyển trưởng nhóm, và Thảo được chọn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Way A: avoid her, give her small jobs. She feels pushed aside, does the minimum.",
          "sub": "Cách A: né, chỉ giao việc lặt vặt. Lan thấy bị gạt ra rìa, im lặng trong họp, làm vừa đủ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Lan, you're the best at data here. Could you lead that area?",
          "sub": "Lan ơi, em giỏi số liệu nhất nhóm. Em phụ trách mảng đó nhé?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Thank you. I'd really like that.",
          "sub": "Cảm ơn chị. Em rất muốn.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Way B: recognise her skills, give matching work. Trying to look better only widens the gap.",
          "sub": "Cách B: ghi nhận năng lực, giao việc xứng tầm. Cố chứng tỏ mình giỏi hơn chỉ làm khoảng cách xa thêm.",
          "keys": [
            "ghi nhận năng lực"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Avoid a strong colleague, and you lose a strong colleague.",
          "sub": "Né người giỏi là mất người giỏi.",
          "keys": [
            "Né người giỏi là mất người giỏi"
          ]
        }
      ],
      "ref": "p7,p8,p9"
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
            "text": "④ Ăn trưa · Bạn thân",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "bowl-with-spoon"
              ]
            },
            "at": "l1:lunch",
            "caption": "Thứ Năm · ăn trưa",
            "icon": "bowl-with-spoon"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Không kể tin của trưởng nhóm",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l4:leader-only",
            "color": "coral",
            "hl": [
              {
                "text": "Không kể",
                "at": "l4:Never"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Không đem chuyện riêng cũ ra",
            "x": 60,
            "y": 1335,
            "size": 46,
            "at": "l5:private things"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: lunch with Dũng. Still friends? Of course.",
          "sub": "Chặng bốn: ăn trưa với Dũng. Vẫn là bạn chứ? Đương nhiên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "So, Lan's review result? Just between us.",
          "sub": "Kể mình nghe kết quả đánh giá của Lan đi. Nói cho bạn biết thôi mà.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Sorry, that stays with me. Ask me anything else.",
          "sub": "Cái đó mình phải giữ. Hỏi chuyện khác đi.",
          "face": "happy",
          "pose": "stop"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Never share leader-only info, like reviews or staffing plans. Not even just between us.",
          "sub": "Thông tin chỉ trưởng nhóm được biết, như kết quả đánh giá, kế hoạch nhân sự, không kể lại, dù chỉ “nói cho bạn biết thôi”.",
          "keys": [
            "không kể lại"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And private things you knew as friends? Keep them out of tasks and reviews.",
          "sub": "Ngược lại, chuyện riêng biết từ hồi còn là bạn bè, đừng mang ra khi giao việc hay đánh giá."
        }
      ],
      "ref": "p11"
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
          }
        ],
        "items": [
          {
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1460,
            "w": 44,
            "h": 44,
            "at": "l1:skills",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1444,
            "size": 56,
            "at": "l1:skills+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "Giao theo năng lực, không theo thân",
            "x": 125,
            "y": 1450,
            "size": 40,
            "at": "l1:skills+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1530,
            "w": 44,
            "h": 44,
            "at": "l1:same standard",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1514,
            "size": 56,
            "at": "l1:same standard+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "Khen, nhắc cùng một chuẩn",
            "x": 125,
            "y": 1520,
            "size": 40,
            "at": "l1:same standard+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1600,
            "w": 44,
            "h": 44,
            "at": "l2:gossip",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1584,
            "size": 56,
            "at": "l2:gossip+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "Không kể chuyện người này người kia",
            "x": 125,
            "y": 1590,
            "size": 40,
            "at": "l2:gossip+200"
          },
          {
            "id": "f-c3",
            "t": "box",
            "x": 60,
            "y": 1670,
            "w": 44,
            "h": 44,
            "at": "l2:whole team",
            "stroke": 5
          },
          {
            "id": "f-k3",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1654,
            "size": 56,
            "at": "l2:whole team+600",
            "color": "accent"
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "Rủ cả nhóm đi ăn",
            "x": 125,
            "y": 1660,
            "size": 40,
            "at": "l2:whole team+200"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Thân ở bàn ăn, công bằng ở bàn làm việc",
            "x": 880,
            "y": 1790,
            "size": 38,
            "at": "l5:lunch table",
            "font": "base",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "At work, be fair: assign by skills, praise and remind by the same standard.",
          "sub": "Ở công việc phải công bằng: giao việc theo năng lực, khen và nhắc theo cùng một chuẩn.",
          "keys": [
            "cùng một chuẩn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No gossip about one person to another. Invite the whole team to lunch sometimes.",
          "sub": "Không kể chuyện người này với người kia. Thỉnh thoảng rủ cả nhóm đi ăn, không chỉ nhóm bạn cũ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not tougher on your friend just to look fair. That's unfair too.",
          "sub": "Cũng đừng khắt khe hơn với bạn thân chỉ để tỏ ra không thiên vị."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Trap: they can't see intentions, only who gets which project. Your friend gets every good one? The leader's pet.",
          "sub": "Cái bẫy: nhóm không thấy ý của bạn, chỉ thấy ai được giao việc gì. Bạn thân cứ được dự án hay? “Người của trưởng nhóm”.",
          "keys": [
            "Người của trưởng nhóm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Friends at the lunch table, fair at the work table.",
          "sub": "Thân ở bàn ăn, công bằng ở bàn làm việc.",
          "keys": [
            "Thân ở bàn ăn, công bằng ở bàn làm việc"
          ]
        }
      ],
      "ref": "p10,p12,p13,p14"
    },
    {
      "id": "s12",
      "module": "BRK-10",
      "data": {
        "quote": "Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng nhau",
        "mark": "lựa lời mà nói",
        "by": "Ca dao Việt Nam",
        "illus": "speech-balloon"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Words cost nothing. So choose them to suit each other.",
          "sub": "Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng nhau.",
          "keys": [
            "lựa lời mà nói"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A Vietnamese folk poem.",
          "sub": "Ca dao Việt Nam."
        }
      ],
      "ref": "p4"
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Tuần hai · Nhắc việc",
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
                  "id": "dung",
                  "side": "right"
                }
              ],
              "props": [
                "alarm-clock"
              ]
            },
            "at": "l1:reminder",
            "caption": "Thứ Hai tuần hai · bàn Dũng",
            "icon": "alarm-clock"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Việc · Hạn · Lý do",
            "x": 2028,
            "y": 1260,
            "size": 62,
            "at": "l3:task",
            "color": "accent",
            "hl": [
              {
                "text": "Lý do",
                "at": "l3:reason"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "“Bạn thấy kịp không?”",
            "x": 2028,
            "y": 1360,
            "size": 54,
            "at": "l4:work for you",
            "hl": [
              {
                "text": "kịp không",
                "at": "l4:work for you"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Không kịp → dời việc, thêm người",
            "x": 2028,
            "y": 1450,
            "size": 44,
            "at": "l5:If not",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: week two, Thảo's first real reminder. No bossy voice needed.",
          "sub": "Chặng năm: tuần hai, lần nhắc việc thật đầu tiên. Không cần giọng ra lệnh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I need these numbers by Thursday afternoon, to send the client. Does that work for you?",
          "sub": "Phần số liệu này mình cần trước chiều thứ Năm để kịp gửi khách. Bạn thấy kịp không?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The task, the deadline, the reason. Clear.",
          "sub": "Rõ việc, rõ hạn, rõ lý do.",
          "keys": [
            "rõ lý do"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And, does that work for you? invites problems early, not a nod and a late file.",
          "sub": "Và câu “bạn thấy kịp không?” mở đường nói khó khăn sớm, thay vì gật đầu rồi trễ.",
          "keys": [
            "nói khó khăn sớm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "If not, fix it now: move other work, or add help. No endless bargaining.",
          "sub": "Không kịp thì bàn ngay: dời bớt việc khác hoặc thêm người hỗ trợ. Hạn không thành chuyện mặc cả mãi."
        }
      ],
      "ref": "p15,p16"
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
          }
        ],
        "items": [
          {
            "id": "g-soft",
            "t": "text",
            "text": "Quá mềm: “không gấp đâu” → trôi",
            "x": 2028,
            "y": 1570,
            "size": 42,
            "at": "l1:too soft",
            "color": "muted"
          },
          {
            "id": "g-hard",
            "t": "text",
            "text": "Quá cứng: “làm ngay đi” → tổn thương",
            "x": 2028,
            "y": 1640,
            "size": 42,
            "at": "l2:too hard",
            "color": "coral"
          },
          {
            "id": "g-mid",
            "t": "text",
            "text": "Rõ ràng, tôn trọng",
            "x": 2028,
            "y": 1730,
            "size": 58,
            "at": "l3:clear",
            "color": "accent",
            "hl": [
              {
                "text": "Rõ ràng",
                "at": "l3:clear"
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
          "say": "Too soft: if you can, no rush. And the task drifts forever.",
          "sub": "Quá mềm: “nếu được thì làm giúp mình nhé, không gấp đâu”, và việc trôi mãi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Too hard: do it now. And your old friend feels looked down on.",
          "sub": "Quá cứng: “làm ngay đi”, và bạn cũ thấy bị coi thường."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Aim for the middle: clear, and respectful.",
          "sub": "Đứng giữa: rõ ràng mà tôn trọng.",
          "keys": [
            "rõ ràng mà tôn trọng"
          ]
        }
      ],
      "ref": "p17"
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
            "text": "⑥ Thứ Năm · Lại trễ hạn",
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
                  "side": "left",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "shrug",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up"
              ]
            },
            "at": "l1:Thursday",
            "caption": "Thứ Năm · quá hạn",
            "icon": "page-facing-up"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Lần 1, 2, 3: cười cho qua",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l3:laughs",
            "color": "muted"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Lần 4: hai bạn khác trễ theo",
            "x": 3996,
            "y": 1340,
            "size": 48,
            "at": "l3:two others",
            "color": "coral",
            "hl": [
              {
                "text": "trễ theo",
                "at": "l3:late too"
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
          "say": "Sixth stop: Thursday. Dũng's numbers are late. Again.",
          "sub": "Chặng sáu: thứ Năm. Số liệu của Dũng lại trễ. Lần nữa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Sorry, late again. But you're easygoing!",
          "sub": "Lại trễ rồi. Nhưng cậu dễ tính mà!",
          "face": "happy",
          "pose": "shrug"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Thảo laughs it off three times. The fourth time, two others are late too: Dũng is, so why not?",
          "sub": "Thảo cười cho qua ba lần. Đến lần thứ tư, hai bạn khác cũng trễ theo, vì “Dũng trễ có sao đâu”.",
          "keys": [
            "trễ theo"
          ]
        }
      ],
      "ref": "p20"
    },
    {
      "id": "s16",
      "module": "DLG-01",
      "ref": "p19,p20,p21",
      "data": {
        "set": "office",
        "label": "Tua lại · lần trễ đầu tiên",
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
          "label": "Cười cho qua vì là bạn cũ",
          "why": "Ba lần cho qua, đến lần thứ tư hai bạn khác cũng nộp muộn theo."
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Sorry, late again. But you're easygoing!",
          "sub": "Lại trễ rồi. Nhưng bạn dễ tính mà!",
          "face": "happy",
          "pose": "shrug"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Ha ha, okay. No problem.",
          "sub": "Haha, thôi được, không sao.",
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
          "say": "Let it go once, and the whole team learns.",
          "sub": "Bỏ qua một lần, cả nhóm học theo.",
          "keys": [
            "cả nhóm học theo"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! The first late file.",
          "sub": "Tua lại! Lần trễ đầu tiên.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Come on, we're friends. What's the rush?",
          "sub": "Thôi mà, bạn bè cả, gấp gì.",
          "phase": "redo",
          "pose": "shrug"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "thao",
          "say": "I get it. But the client is waiting. Before noon tomorrow, okay?",
          "sub": "Mình hiểu, nhưng khách đang chờ. Trước trưa mai nhé.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l9",
          "lang": "en",
          "who": "det",
          "say": "Friendly voice, same deadline.",
          "sub": "Giọng thân thiện, hạn vẫn giữ.",
          "phase": "redo",
          "face": "happy"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      }
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
            "id": "h-3",
            "t": "text",
            "text": "Không phản ứng trước cả nhóm",
            "x": 3996,
            "y": 1450,
            "size": 44,
            "at": "l1:front",
            "color": "muted"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "Gặp riêng: sự việc + hỏi lý do",
            "x": 3996,
            "y": 1520,
            "size": 44,
            "at": "l1:privately",
            "hl": [
              {
                "text": "hỏi lý do",
                "at": "l2:getting in"
              }
            ]
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Bỏ qua một lần, nhóm học theo",
            "x": 3996,
            "y": 1630,
            "size": 50,
            "at": "l3:Let it go",
            "color": "accent",
            "hl": [
              {
                "text": "nhóm học theo",
                "at": "l3:whole team"
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
          "say": "Don't react in front of the team. Meet privately and state the facts.",
          "sub": "Đừng phản ứng trước mặt cả nhóm. Gặp riêng, nói đúng sự việc.",
          "keys": [
            "Gặp riêng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Your report didn't come yesterday as agreed. Is something getting in the way?",
          "sub": "Hôm qua phần báo cáo chưa gửi như đã hẹn. Có gì đang làm bạn vướng không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Let it go once, and the whole team learns it.",
          "sub": "Bỏ qua một lần, cả nhóm học theo.",
          "keys": [
            "Bỏ qua một lần, cả nhóm học theo"
          ]
        }
      ],
      "ref": "p18,p19,p21"
    },
    {
      "id": "s18",
      "module": "BRK-07",
      "data": {
        "question": "Trưởng nhóm có phải giỏi nhất mọi thứ?",
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
          "say": "Must a leader be the best at everything?",
          "sub": "Trưởng nhóm có phải giỏi nhất mọi thứ?",
          "keys": [
            "giỏi nhất mọi thứ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p22"
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
            "at": "l3",
            "fit": "I",
            "ms": 700
          },
          {
            "at": "l4",
            "fit": [
              "i-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Tuần hai · Không cần giỏi nhất",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Seventh stop"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1230,
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
                  "side": "center"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "props": [
                "bar-chart"
              ]
            },
            "at": "l1:meeting",
            "caption": "Thứ Sáu tuần hai · họp nhóm",
            "icon": "bar-chart"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Giúp người giỏi làm tốt hơn",
            "x": 5964,
            "y": 1260,
            "size": 48,
            "at": "l3:better",
            "color": "accent",
            "hl": [
              {
                "text": "làm tốt hơn",
                "at": "l3:better"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Nhận sai ngắn + cách sửa",
            "x": 5964,
            "y": 1360,
            "size": 48,
            "at": "l5:Admit",
            "hl": [
              {
                "text": "Nhận sai",
                "at": "l5:Admit"
              }
            ]
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "→ nhóm dám nói sớm",
            "x": 6004,
            "y": 1435,
            "size": 46,
            "at": "l5:speaks up",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: the week-two meeting.",
          "sub": "Chặng bảy: họp nhóm cuối tuần hai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Lan, you know this part better than me. Could you walk everyone through it?",
          "sub": "Phần này em rành hơn chị. Em hướng dẫn giúp mọi người nhé?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not weaker. More respected. Your job is helping strong people do better.",
          "sub": "Không kém đi mà được tôn trọng hơn. Việc của bạn là giúp người giỏi làm tốt hơn.",
          "keys": [
            "giúp người giỏi làm tốt hơn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Yesterday I gave you incomplete information. My mistake. Here's the full version.",
          "sub": "Hôm qua mình giao thiếu thông tin, lỗi ở mình. Đây là bản đầy đủ.",
          "pose": "give"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Admit it briefly, show the fix. A leader who admits mistakes gets a team that speaks up early.",
          "sub": "Nhận sai ngắn gọn, nói cách sửa. Trưởng nhóm dám nhận sai thì nhóm cũng dám nói ra vấn đề sớm.",
          "keys": [
            "dám nhận sai"
          ]
        }
      ],
      "ref": "p22,p23"
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
            "at": "l4",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Hai tuần sau · Cùng quán cũ",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Two weeks"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1230,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "face": "happy"
                },
                {
                  "id": "lan",
                  "side": "center",
                  "face": "happy"
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
            "at": "l1:Friday",
            "caption": "Chiều thứ Sáu · quán cà phê quen",
            "icon": "hot-beverage"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Rủ cả nhóm, không chỉ bạn cũ",
            "x": 7932,
            "y": 1255,
            "size": 44,
            "at": "l1:whole team"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Chuyện công ty → gặp riêng cô Hoa",
            "x": 7932,
            "y": 1330,
            "size": 44,
            "at": "l3:Cô Hoa",
            "color": "accent"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Hỏi riêng một trưởng nhóm đi trước",
            "x": 7932,
            "y": 1405,
            "size": 44,
            "at": "l5:experienced",
            "hl": [
              {
                "text": "Hỏi riêng",
                "at": "l5:privately"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "…lựa lời mà nói ✓",
            "x": 8752,
            "y": 1790,
            "size": 50,
            "at": "l6:choose",
            "color": "accent",
            "hl": [
              {
                "text": "lựa lời",
                "at": "l6:choose"
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
          "say": "Two weeks later. Friday coffee again, same café. But this time, the whole team came.",
          "sub": "Hai tuần sau. Lại cà phê chiều thứ Sáu, cùng quán ấy. Nhưng lần này cả nhóm cùng đi.",
          "keys": [
            "cả nhóm cùng đi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "That team next door again!",
          "sub": "Lại phòng bên cạnh nữa!",
          "face": "stern"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I'll raise it with Cô Hoa directly. Now, who wants cake?",
          "sub": "Chuyện đó mình sẽ nói thẳng với cô Hoa. Giờ ai ăn bánh nào?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Same friends, same café. Different words.",
          "sub": "Vẫn bạn ấy, quán ấy. Chỉ khác lời.",
          "keys": [
            "Chỉ khác lời"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "For hard stuff, Thảo asks an experienced leader privately. Asking is learning, not weakness.",
          "sub": "Chuyện khó nói với nhóm, Thảo hỏi riêng một trưởng nhóm đi trước. Hỏi là cách học nhanh nhất, không phải yếu kém.",
          "keys": [
            "Hỏi là cách học nhanh nhất"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Words cost nothing. Choose them well.",
          "sub": "Lời nói chẳng mất tiền mua. Lựa lời mà nói.",
          "keys": [
            "Lựa lời mà nói"
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
      "ref": "p24,p12"
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
            "x": 7464,
            "y": 40,
            "at": "l1:once"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1560,
            "y": 1130,
            "at": "l2:work table"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5496,
            "y": 1130,
            "at": "l3:first"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "h-k"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:privately"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: say your new role straight, once.",
          "sub": "Tóm lại: nói thẳng một lần về vai mới.",
          "keys": [
            "nói thẳng một lần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Stay friends, but be fair at the work table.",
          "sub": "Vẫn là bạn, nhưng công bằng ở bàn làm việc.",
          "keys": [
            "công bằng ở bàn làm việc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And remind privately, from the very first late task.",
          "sub": "Và nhắc riêng ngay từ lần trễ đầu tiên.",
          "keys": [
            "nhắc riêng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "This week: pick one old friend on your team and book a private talk. Next lesson: delegating clearly.",
          "sub": "Việc làm ngay: chọn một người bạn cũ trong nhóm, hẹn nói chuyện riêng tuần này. Bài tiếp: giao việc rõ ràng.",
          "keys": [
            "Việc làm ngay"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "ref": "questions[22]",
      "data": {
        "q": "How can you remind an old friend about a task without sounding bossy?",
        "options": [
          "Drop small hints for days and hope they understand what you need from them",
          "Use a strong voice and short words, so they know you are the boss now",
          "State the task, the deadline and the reason, then ask if the timing works"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "speech-balloon",
        "why": "Nói rõ việc, hạn và lý do, rồi hỏi “bạn thấy kịp không?”."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "How can you remind an old friend about a task without sounding bossy?",
          "sub": "Làm sao nhắc việc một người bạn cũ mà không nghe như ra lệnh?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "State the task, the deadline and the reason, then ask if the timing works.",
          "sub": "Nói rõ việc, hạn và lý do, rồi hỏi xem có kịp không."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Clear words do the work. You do not need a bossy voice.",
          "sub": "Nói rõ là đủ, không cần giọng ra lệnh."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Từ đồng nghiệp thành trưởng nhóm"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Now it is your turn. Forty questions below.",
          "sub": "Giờ đến lượt bạn: bốn mươi câu bên dưới.",
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
