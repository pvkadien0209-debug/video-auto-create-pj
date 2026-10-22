// Kịch bản video W lần 3 (#110) — "Khi nào dùng thì hiện tại hoàn thành?" · chuỗi "Ngữ pháp tiếng Anh cần biết"
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "when-to-use-the-present-perfect--w01",
  "hook": "HOOK-09",
  "unit": {
    "audience": "grammar-relearners",
    "slug": "when-to-use-the-present-perfect",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Khi nào dùng thì hiện tại hoàn thành?",
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
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT NGÀY THỨ NĂM giám đốc vắng (8:00 Thảo gửi hợp đồng “I sent hay I've sent?” → 9:00 Sam gọi tìm sếp “Khoan đã!” been/gone → 10:00 Thảo phỏng vấn Dũng thay sếp → 10:20 for/since → 14:00 soát email mẫu giao hàng → 16:00 Cô Hoa gặp Sam → 17:30 bốn câu → 8:00 thứ Sáu khép vòng). Neo mở: “4 tình huống”. Nhân vật: Thảo, Sam, Dũng, Cô Hoa; Bác Bình chỉ được nhắc (w145/_series/grammar-relearners.md). Cảnh ngắt nhịp: BRK-11 (4 tình huống), BRK-04 (trước–sau câu phỏng vấn), BRK-07 (rehook sang yesterday). Ca dao: “Đi một ngày đàng, học một sàng khôn”. Câu đố questions[1] (has went → has gone). Bản cũ (W lần 3): w145/bak/when-to-use-the-present-perfect--w01.js.",
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
            "text": "4 tình huống",
            "x": 60,
            "y": 110,
            "size": 140,
            "at": "l1:four",
            "color": "accent",
            "hl": [
              {
                "text": "4",
                "at": "l1:four"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "đủ cho gần hết email, cuộc họp",
            "x": 70,
            "y": 310,
            "size": 48,
            "at": "l1:email"
          },
          {
            "id": "a-vn",
            "t": "text",
            "text": "Tiếng Việt: không có thì này",
            "x": 70,
            "y": 410,
            "size": 48,
            "at": "l2:Vietnamese",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Four situations. That's enough for almost every email and meeting.",
          "sub": "Bốn tình huống. Đủ cho gần hết email và cuộc họp.",
          "keys": [
            "Bốn tình huống"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Four situations for a tense Vietnamese simply doesn't have.",
          "sub": "Bốn tình huống, cho một thì mà tiếng Việt không hề có.",
          "keys": [
            "tiếng Việt không hề có"
          ]
        }
      ],
      "ref": "intro,p3"
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
            "at": "l4",
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
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l3",
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
            "at": "l1",
            "caption": "Thứ Năm 8:00 · gửi hợp đồng",
            "icon": "e-mail"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "I sent · I've sent?",
            "x": 60,
            "y": 520,
            "size": 56,
            "at": "l3:sent",
            "color": "coral",
            "hl": [
              {
                "text": "'ve",
                "at": "l3:I've"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Đi một ngày đàng…”",
            "x": 60,
            "y": 640,
            "size": 50,
            "at": "l5:journey",
            "color": "accent",
            "hl": [
              {
                "text": "ngày đàng",
                "at": "l5:journey"
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
          "say": "Meet Thảo, accountant at a furniture exporter.",
          "sub": "Đây là Thảo, kế toán ở công ty nội thất xuất khẩu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thursday, eight a.m. The boss, Bác Bình, is away. Thảo emails a contract.",
          "sub": "Thứ Năm, tám giờ sáng. Sếp Bác Bình đi vắng. Thảo gửi hợp đồng qua email."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I sent the file... or I've sent the file?",
          "sub": "I sent the file… hay I've sent the file?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Pausing here is normal. We have nothing like it at home.",
          "sub": "Chần chừ ở đây là chuyện thường, vì tiếng Việt chẳng có thì nào giống vậy."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our saying goes: one day's journey, one basket of wisdom. Today, Thảo walks a long day.",
          "sub": "Ông bà nói: “Đi một ngày đàng, học một sàng khôn.” Hôm nay Thảo đi một ngày dài.",
          "keys": [
            "học một sàng khôn"
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
            "text": "Khi nào dùng have + V3?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:perfect",
            "hl": [
              {
                "text": "have + V3",
                "at": "l1:present perfect"
              }
            ]
          },
          {
            "id": "b-r1",
            "t": "text",
            "text": "Quá khứ còn dính tới bây giờ",
            "x": 2028,
            "y": 160,
            "size": 50,
            "at": "l1:linked",
            "color": "accent",
            "hl": [
              {
                "text": "bây giờ",
                "at": "l1:now"
              }
            ]
          },
          {
            "id": "b-r2",
            "t": "text",
            "text": "Không nói lúc nào",
            "x": 2028,
            "y": 240,
            "size": 50,
            "at": "l2:when"
          },
          {
            "id": "b-r3",
            "t": "text",
            "text": "Có thời điểm → quá khứ đơn",
            "x": 2028,
            "y": 320,
            "size": 46,
            "at": "l3:past simple",
            "color": "coral"
          },
          {
            "id": "b-f",
            "t": "text",
            "text": "She has finished the training",
            "x": 2928,
            "y": 170,
            "size": 44,
            "at": "l4:finished",
            "hl": [
              {
                "text": "has finished",
                "at": "l4:finished"
              }
            ]
          },
          {
            "id": "b-c",
            "t": "text",
            "text": "I've sent it · She's left",
            "x": 2928,
            "y": 245,
            "size": 48,
            "at": "l4:shorten"
          },
          {
            "id": "b-w",
            "t": "text",
            "text": "She has went home",
            "x": 2928,
            "y": 330,
            "size": 48,
            "at": "l5:went",
            "color": "muted"
          },
          {
            "id": "b-wx",
            "t": "strike",
            "over": "b-w",
            "at": "l5:column"
          },
          {
            "id": "b-g",
            "t": "text",
            "text": "→ She has gone home",
            "x": 2928,
            "y": 410,
            "size": 52,
            "at": "l5:gone",
            "color": "accent",
            "hl": [
              {
                "text": "gone",
                "at": "l5:gone"
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
          "say": "So when do we use the present perfect? When a past action is linked to now.",
          "sub": "Vậy khi nào dùng hiện tại hoàn thành? Khi việc trong quá khứ còn liên quan đến bây giờ.",
          "keys": [
            "liên quan đến bây giờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And we don't say when. The listener cares about the result, not the date.",
          "sub": "Và không nói rõ lúc nào. Người nghe quan tâm kết quả, không phải ngày giờ.",
          "keys": [
            "kết quả"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Give a finished time, and it's the past simple.",
          "sub": "Có thời điểm cụ thể đã qua thì dùng quá khứ đơn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Formula: have or has, plus the third column. She has finished the training. In speech, shorten: I've sent it.",
          "sub": "Công thức: have, has cộng quá khứ phân từ, cột ba: She has finished the training. Nói thì rút gọn: I've sent it, She's left."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Classic slip: the second column. She has went home. Wrong column! She has gone home.",
          "sub": "Lỗi hay gặp: dùng nhầm cột hai. She has went home là sai, phải là She has gone home.",
          "keys": [
            "nhầm cột hai"
          ]
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s03",
      "module": "BRK-11",
      "data": {
        "title": "4 tình huống dùng have + V3",
        "items": [
          "Báo việc vừa xong",
          "Kể kinh nghiệm",
          "Kéo dài đến nay",
          "Khoảng thời gian chưa hết"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Four: today, this week.",
          "sub": "Bốn: hôm nay, tuần này."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Three: still going on.",
          "sub": "Ba: kéo dài đến nay."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Two: experience.",
          "sub": "Hai: kinh nghiệm."
        },
        {
          "id": "l4",
          "lang": "en",
          "say": "One: a result.",
          "sub": "Một: việc vừa xong."
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
            "text": "Một ngày sếp đi vắng",
            "x": 2028,
            "y": 520,
            "size": 52,
            "at": "l1:boss",
            "hl": [
              {
                "text": "sếp đi vắng",
                "at": "l1:away"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l1:stops+400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2298,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l1:stops+650",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2568,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l1:stops+900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2838,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l1:stops+1150",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3108,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l1:stops+1400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3378,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l1:stops+1650",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "8:00",
            "x": 2063,
            "y": 628,
            "size": 48,
            "at": "l1:stops+520"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "9:00",
            "x": 2333,
            "y": 628,
            "size": 48,
            "at": "l1:stops+770"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "10:00",
            "x": 2603,
            "y": 628,
            "size": 48,
            "at": "l1:stops+1020"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "14:00",
            "x": 2873,
            "y": 628,
            "size": 48,
            "at": "l1:stops+1270"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "16:00",
            "x": 3143,
            "y": 628,
            "size": 48,
            "at": "l1:stops+1520"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "17:30",
            "x": 3413,
            "y": 628,
            "size": 48,
            "at": "l1:stops+1770"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Now, one Thursday with the boss away, in six stops.",
          "sub": "Giờ theo Thảo qua một ngày thứ Năm sếp đi vắng, sáu chặng.",
          "keys": [
            "sáu chặng"
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
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 8:00 · Báo việc vừa xong",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:stop one"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "I've sent you the contract",
            "x": 3996,
            "y": 160,
            "size": 50,
            "at": "l1:contract",
            "hl": [
              {
                "text": "I've sent",
                "at": "l1:sent"
              }
            ]
          },
          {
            "id": "c-1b",
            "t": "text",
            "text": "→ đang nằm trong hộp thư",
            "x": 4036,
            "y": 235,
            "size": 46,
            "at": "l1:inbox",
            "color": "accent"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "The client has cancelled the order",
            "x": 3996,
            "y": 320,
            "size": 46,
            "at": "l2:cancelled"
          },
          {
            "id": "c-2b",
            "t": "text",
            "text": "→ giờ không còn đơn",
            "x": 4036,
            "y": 390,
            "size": 46,
            "at": "l2:no order",
            "color": "coral"
          },
          {
            "id": "c-j",
            "t": "text",
            "text": "just = vừa mới",
            "x": 4896,
            "y": 160,
            "size": 52,
            "at": "l3:just",
            "hl": [
              {
                "text": "just",
                "at": "l3:just"
              }
            ]
          },
          {
            "id": "c-a",
            "t": "text",
            "text": "already = sớm hơn mong đợi",
            "x": 4896,
            "y": 240,
            "size": 46,
            "at": "l4:already",
            "hl": [
              {
                "text": "already",
                "at": "l4:already"
              }
            ]
          },
          {
            "id": "c-y",
            "t": "text",
            "text": "yet: hỏi và phủ định",
            "x": 4896,
            "y": 320,
            "size": 50,
            "at": "l5:yet",
            "hl": [
              {
                "text": "yet",
                "at": "l5:yet"
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
          "say": "Stop one: a result. I've sent you the contract means: it's in your inbox now.",
          "sub": "Chặng một: báo việc vừa xong. I've sent you the contract: hợp đồng giờ đang nằm trong hộp thư của bạn.",
          "keys": [
            "hộp thư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The client has cancelled the order means: there's no order now.",
          "sub": "The client has cancelled the order: hiện không còn đơn hàng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three helpers. Just is very recent: he's just left the office.",
          "sub": "Ba từ hay đi kèm. Just là vừa mới: He's just left the office.",
          "keys": [
            "vừa mới"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Already is done, often sooner than expected: I've already paid the invoice.",
          "sub": "Already là đã rồi, thường sớm hơn mong đợi: I've already paid the invoice."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Yet lives in questions and negatives: has the shipment arrived yet? It hasn't arrived yet.",
          "sub": "Yet dùng trong câu hỏi và phủ định: Has the shipment arrived yet? It hasn't arrived yet."
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
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 490,
            "w": 46,
            "h": 46,
            "at": "l1:just",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 472,
            "size": 58,
            "at": "l1:just+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "I've just sent you the file",
            "x": 4061,
            "y": 482,
            "size": 40,
            "at": "l1:just+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 560,
            "w": 46,
            "h": 46,
            "at": "l2:chance",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 542,
            "size": 58,
            "at": "l2:chance+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Have you had a chance…?",
            "x": 4061,
            "y": 552,
            "size": 40,
            "at": "l2:chance+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 630,
            "w": 46,
            "h": 46,
            "at": "l3:heard",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 612,
            "size": 58,
            "at": "l3:heard+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "I haven't heard back from them yet",
            "x": 4061,
            "y": 622,
            "size": 40,
            "at": "l3:heard+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 700,
            "w": 46,
            "h": 46,
            "at": "l4:discussed",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 682,
            "size": 58,
            "at": "l4:discussed+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "We've already discussed this issue",
            "x": 4061,
            "y": 692,
            "size": 40,
            "at": "l4:discussed+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Save four lines. I've just sent you the file.",
          "sub": "Lưu sẵn bốn câu: I've just sent you the file."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Have you had a chance…?",
          "sub": "Have you had a chance…?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "I haven't heard back from them yet.",
          "sub": "I haven't heard back from them yet."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "We've already discussed this issue. You'll use them almost every week.",
          "sub": "We've already discussed this issue. Gần như tuần nào cũng dùng.",
          "keys": [
            "tuần nào cũng dùng"
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
            "fit": "C",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "c-sam",
            "t": "text",
            "text": "9:00 · Sam gọi tìm sếp",
            "x": 4836,
            "y": 690,
            "size": 48,
            "at": "l1:Sam"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Nine o'clock, the phone rings. Meet Sam, the foreign buyer. She wants the director.",
          "sub": "Chín giờ, điện thoại reo. Đây là Sam, đối tác bên mua. Chị muốn gặp giám đốc.",
          "keys": [
            "Sam"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s08",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "9:00 · Sam gọi tìm giám đốc",
        "actors": [
          {
            "id": "thao",
            "side": "left",
            "pose": "phone"
          },
          {
            "id": "sam",
            "side": "right",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "He has been to Hanoi",
          "why": "Been là đã đi và đã về; Sam tưởng ông đã về văn phòng.",
          "rule": "Gone là còn ở đó, been là đã đi về"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "sam",
          "say": "Is Mr Bình in today? I'd like to see him.",
          "sub": "Hôm nay ông Bình có ở văn phòng không? Tôi muốn gặp.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "He has been to Hanoi.",
          "sub": "He has been to Hanoi.",
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
          "say": "Been means he went and came back. Sam will drop by this afternoon, and find an empty chair.",
          "sub": "Been là đã đi và đã về. Sam sẽ ghé văn phòng chiều nay, và gặp cái ghế trống.",
          "keys": [
            "đã đi và đã về"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Lần nữa nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "He's gone to Hanoi. He'll be back on Monday.",
          "sub": "He's gone to Hanoi. He'll be back on Monday.",
          "phase": "redo",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Gone, still there. Been, there and back.",
          "sub": "Gone là còn ở đó, been là đã đi về.",
          "phase": "redo",
          "keys": [
            "Gone là còn ở đó"
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
      "id": "s09",
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
            "at": "l6",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 10:00 · Kể kinh nghiệm",
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
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "walk",
                  "at": "l2",
                  "pose": "hold"
                }
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:interview",
            "caption": "10:00 · phỏng vấn thay sếp",
            "icon": "handshake"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "I've managed a team of ten",
            "x": 5964,
            "y": 160,
            "size": 46,
            "at": "l3:managed",
            "hl": [
              {
                "text": "I've managed",
                "at": "l3:managed"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "I've never worked night shifts",
            "x": 5964,
            "y": 235,
            "size": 46,
            "at": "l3:never"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Have you ever …?",
            "x": 5964,
            "y": 310,
            "size": 50,
            "at": "l4:ever",
            "color": "accent",
            "hl": [
              {
                "text": "ever",
                "at": "l4:ever"
              }
            ]
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "Chi tiết, có thời điểm → went",
            "x": 5964,
            "y": 400,
            "size": 46,
            "at": "l6:detail",
            "color": "coral",
            "hl": [
              {
                "text": "went",
                "at": "l6:went"
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
          "say": "Stop two: ten o'clock. With the boss away, Thảo runs an interview.",
          "sub": "Chặng hai: mười giờ. Sếp vắng, Thảo phỏng vấn thay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, the candidate. Five years in logistics, and a tie tied far too tight.",
          "sub": "Đây là Dũng, ứng viên. Năm năm làm kho vận, cà vạt thắt chặt quá mức.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "I've managed a team of ten people. I've never worked night shifts.",
          "sub": "I've managed a team of ten people. I've never worked night shifts.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Have you ever been to Singapore?",
          "sub": "Have you ever been to Singapore?",
          "face": "neutral"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Yes, I went there in May for a conference.",
          "sub": "Yes, I went there in May for a conference.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Experience first, no time: present perfect. Then the detail with a time: went, in May.",
          "sub": "Kinh nghiệm trước, không cần thời điểm: hiện tại hoàn thành. Vào chi tiết có thời điểm: quá khứ đơn, went in May.",
          "keys": [
            "quá khứ đơn"
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
      "ref": "p9,p10"
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
          }
        ],
        "items": [
          {
            "id": "d-h",
            "t": "text",
            "text": "I haven't used that tool,",
            "x": 5964,
            "y": 520,
            "size": 46,
            "at": "l2:haven't"
          },
          {
            "id": "d-h2",
            "t": "text",
            "text": "but I've used a similar one",
            "x": 5964,
            "y": 590,
            "size": 46,
            "at": "l2:similar",
            "color": "accent",
            "hl": [
              {
                "text": "a similar one",
                "at": "l2:similar"
              }
            ]
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Thật mà vẫn cho thấy học nhanh",
            "x": 5964,
            "y": 680,
            "size": 44,
            "at": "l3:honest",
            "hl": [
              {
                "text": "học nhanh",
                "at": "l3:quickly"
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
          "say": "Dũng's other lines: I've worked with Japanese clients. I've handled complaints by phone and email.",
          "sub": "Dũng còn nói: I've worked with Japanese clients. I've handled customer complaints by phone and email."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I haven't used that tool, but I've used a similar one.",
          "sub": "I haven't used that tool, but I've used a similar one.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Honest, and it shows he learns quickly.",
          "sub": "Trả lời thật mà vẫn cho thấy mình học nhanh.",
          "keys": [
            "học nhanh"
          ]
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
            "text": "③ 10:20 · Kéo dài đến nay",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:still"
          },
          {
            "id": "e-f",
            "t": "text",
            "text": "for + khoảng: for two years",
            "x": 7932,
            "y": 160,
            "size": 50,
            "at": "l2:for",
            "hl": [
              {
                "text": "for",
                "at": "l2:for"
              }
            ]
          },
          {
            "id": "e-s",
            "t": "text",
            "text": "since + mốc: since March",
            "x": 7932,
            "y": 240,
            "size": 50,
            "at": "l2:since",
            "color": "accent",
            "hl": [
              {
                "text": "since",
                "at": "l2:since"
              }
            ]
          },
          {
            "id": "e-x",
            "t": "text",
            "text": "I work here for five years",
            "x": 7932,
            "y": 340,
            "size": 46,
            "at": "l3:work",
            "color": "muted"
          },
          {
            "id": "e-xx",
            "t": "strike",
            "over": "e-x",
            "at": "l3:translating"
          },
          {
            "id": "e-x2",
            "t": "text",
            "text": "I am working here since two years",
            "x": 7932,
            "y": 410,
            "size": 42,
            "at": "l3:since",
            "color": "muted"
          },
          {
            "id": "e-x2x",
            "t": "strike",
            "over": "e-x2",
            "at": "l4:I've"
          },
          {
            "id": "e-ok",
            "t": "text",
            "text": "I've worked here for five years",
            "x": 7932,
            "y": 490,
            "size": 46,
            "at": "l4:I've",
            "color": "accent",
            "hl": [
              {
                "text": "I've worked",
                "at": "l4:I've"
              }
            ]
          },
          {
            "id": "e-ok2",
            "t": "text",
            "text": "… since 2020",
            "x": 7932,
            "y": 560,
            "size": 46,
            "at": "l4:twenty"
          },
          {
            "id": "e-pg",
            "t": "text",
            "text": "I've been working on it since Monday",
            "x": 8772,
            "y": 620,
            "size": 40,
            "at": "l5:working",
            "hl": [
              {
                "text": "been working",
                "at": "l5:working"
              }
            ]
          },
          {
            "id": "e-kn",
            "t": "text",
            "text": "I've known him for years",
            "x": 8772,
            "y": 690,
            "size": 44,
            "at": "l6:known",
            "color": "coral",
            "hl": [
              {
                "text": "known",
                "at": "l6:known"
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
          "say": "Stop three: something that started back then and is still going on.",
          "sub": "Chặng ba: việc bắt đầu từ trước và vẫn kéo dài đến nay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Present perfect with for or since. For a length: for two years. Since a point: since March.",
          "sub": "Dùng hiện tại hoàn thành với for hoặc since. For đi với khoảng: for two years. Since đi với mốc: since March.",
          "keys": [
            "khoảng",
            "mốc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Our classic slip is translating straight from Vietnamese: I work here for five years, I am working here since two years.",
          "sub": "Lỗi rất hay gặp là dịch thẳng từ tiếng Việt: I work here for five years, hay I am working here since two years.",
          "keys": [
            "dịch thẳng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Say: I've worked here for five years. Or I've worked here since twenty twenty.",
          "sub": "Câu đúng: I've worked here for five years, hoặc I've worked here since 2020."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "To stress the ongoing effort: I've been working on this project since Monday.",
          "sub": "Muốn nhấn quá trình còn đang diễn ra: I've been working on this project since Monday."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "But state verbs stay simple: I've known him for years.",
          "sub": "Còn động từ trạng thái giữ dạng thường: I've known him for years.",
          "keys": [
            "giữ dạng thường"
          ]
        }
      ],
      "ref": "p12,p13,p14"
    },
    {
      "id": "s12",
      "module": "BRK-04",
      "data": {
        "title": "Dũng trả lời về kinh nghiệm",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "I work at my company for five years",
        "right": "I've worked there for five years",
        "wrongIllus": "red-question-mark",
        "rightIllus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "I work at my company for five years? Still there?",
          "sub": "Trước: sai và mơ hồ, phải hỏi lại: còn làm ở đó không?",
          "keys": [
            "hỏi lại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "I've worked there for five years.",
          "sub": "Sau: năm năm, và vẫn đang làm.",
          "keys": [
            "vẫn đang làm"
          ]
        }
      ],
      "ref": "p15"
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
            "id": "e-k",
            "t": "text",
            "text": "Kéo đến tận giờ: have + for / since",
            "x": 8772,
            "y": 160,
            "size": 42,
            "at": "l1:until now",
            "color": "accent",
            "hl": [
              {
                "text": "have + for / since",
                "at": "l1:for"
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
          "say": "One short line says both facts. Until now? Have, plus for or since.",
          "sub": "Một câu ngắn nói trọn hai ý. Kéo đến tận giờ thì have cộng for hay since.",
          "keys": [
            "have cộng for hay since"
          ]
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s14",
      "module": "BRK-07",
      "data": {
        "question": "Câu có yesterday thì have còn đứng được không?",
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
          "say": "What if the sentence has yesterday in it?",
          "sub": "Nếu câu có chữ yesterday thì sao?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
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
            "zoom": 1.3,
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
            "text": "④ 14:00 · Soát email mẫu",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:template"
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
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "e-mail",
                "delivery-truck"
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
            "at": "l1:template",
            "caption": "14:00 · mẫu email giao hàng",
            "icon": "delivery-truck"
          },
          {
            "id": "f-w",
            "t": "text",
            "text": "We have shipped your order yesterday",
            "x": 60,
            "y": 1250,
            "size": 40,
            "at": "l1:shipped",
            "color": "muted"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "(1) yesterday = thời điểm đã qua",
            "x": 60,
            "y": 1330,
            "size": 44,
            "at": "l2:yesterday",
            "hl": [
              {
                "text": "yesterday",
                "at": "l2:yesterday"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "(2) bỏ have",
            "x": 60,
            "y": 1405,
            "size": 48,
            "at": "l3:drop"
          },
          {
            "id": "f-wx",
            "t": "strike",
            "over": "f-w",
            "at": "l3:drop"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "→ We shipped your order yesterday",
            "x": 60,
            "y": 1480,
            "size": 42,
            "at": "l3:shipped",
            "color": "accent",
            "hl": [
              {
                "text": "shipped",
                "at": "l3:shipped"
              }
            ]
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "(4) soát luôn các mẫu khác",
            "x": 60,
            "y": 1560,
            "size": 46,
            "at": "l5:other",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four: two p.m. Thảo checks the delivery team's email template: we have shipped your order yesterday.",
          "sub": "Chặng bốn: hai giờ chiều. Thảo soát mẫu email của bộ phận giao hàng: We have shipped your order yesterday."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Step one: find the time word. Yesterday, a finished, specific time.",
          "sub": "Bước một: tìm từ chỉ thời gian. Yesterday, một thời điểm cụ thể đã qua.",
          "keys": [
            "thời điểm cụ thể đã qua"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Step two: drop have. We shipped your order yesterday.",
          "sub": "Bước hai: bỏ have, dùng quá khứ đơn: We shipped your order yesterday."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Want to keep we have shipped your order? Then drop yesterday.",
          "sub": "Muốn giữ We have shipped your order thì phải bỏ yesterday."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And check the other templates too. One wrong template repeats in every email to every client.",
          "sub": "Và soát luôn các mẫu khác, vì một câu mẫu sai sẽ lặp lại trong mọi email gửi khách.",
          "keys": [
            "soát luôn các mẫu khác"
          ]
        }
      ],
      "ref": "p20,p21"
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
          }
        ],
        "items": [
          {
            "id": "f-tw",
            "t": "text",
            "text": "yesterday · last week · ago",
            "x": 60,
            "y": 1635,
            "size": 40,
            "at": "l1:yesterday",
            "color": "coral"
          },
          {
            "id": "f-p1",
            "t": "text",
            "text": "I've visited Japan ↔ last year",
            "x": 60,
            "y": 1690,
            "size": 40,
            "at": "l2:visited"
          },
          {
            "id": "f-p2",
            "t": "text",
            "text": "has worked ↔ worked: còn / nghỉ",
            "x": 60,
            "y": 1745,
            "size": 40,
            "at": "l3:bank",
            "hl": [
              {
                "text": "còn / nghỉ",
                "at": "l3:left"
              }
            ]
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Ngày giờ cụ thể → quá khứ đơn",
            "x": 60,
            "y": 1800,
            "size": 42,
            "at": "l5:specific",
            "color": "accent",
            "hl": [
              {
                "text": "quá khứ đơn",
                "at": "l5:past simple"
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
          "say": "Yesterday, last week, in twenty nineteen, two days ago, when I was a student: always past simple.",
          "sub": "Yesterday, last week, in 2019, two days ago, when I was a student: dùng quá khứ đơn.",
          "keys": [
            "quá khứ đơn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "I've visited Japan is experience. I visited Japan last year has a time. Have you finished? When did you finish?",
          "sub": "I've visited Japan là kinh nghiệm; I visited Japan last year có thời điểm. Have you finished hỏi tình trạng, When did you finish hỏi lúc nào."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "He has worked at the bank for three years: still there. He worked there for three years: he left.",
          "sub": "He has worked at the bank for three years: vẫn đang làm. He worked there for three years: đã nghỉ.",
          "keys": [
            "vẫn đang làm",
            "đã nghỉ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Unfinished time: I've had three meetings today. Once it's over: I had three meetings yesterday.",
          "sub": "Khoảng chưa hết như today, this week: I've had three meetings today. Qua rồi thì I had three meetings yesterday."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A specific time? Back to the past simple.",
          "sub": "Có ngày giờ cụ thể, quay về quá khứ đơn.",
          "keys": [
            "quay về quá khứ đơn"
          ]
        }
      ],
      "ref": "p17,p18,p19,p21"
    },
    {
      "id": "s17",
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
            "text": "⑤ 16:00 · Còn làm hay nghỉ rồi?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:four"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
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
              "props": [
                "hot-beverage"
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
            "caption": "16:00 · quán cà phê",
            "icon": "hot-beverage"
          },
          {
            "id": "g-w",
            "t": "text",
            "text": "I worked in banking",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l2:worked",
            "color": "muted"
          },
          {
            "id": "g-w2",
            "t": "text",
            "text": "→ “So what do you do now?”",
            "x": 2028,
            "y": 1340,
            "size": 46,
            "at": "l3:now",
            "color": "coral"
          },
          {
            "id": "g-wx",
            "t": "strike",
            "over": "g-w",
            "at": "l4:closed"
          },
          {
            "id": "g-ok",
            "t": "text",
            "text": "I've worked in banking",
            "x": 2028,
            "y": 1450,
            "size": 52,
            "at": "l5:I've",
            "color": "accent",
            "hl": [
              {
                "text": "I've worked",
                "at": "l5:I've"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Còn làm: have worked · nghỉ: worked",
            "x": 2028,
            "y": 1560,
            "size": 42,
            "at": "l6:have",
            "color": "accent",
            "hl": [
              {
                "text": "have worked",
                "at": "l6:have"
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
          "say": "Stop five: four p.m., a café. Meet Cô Hoa, ten years at the bank that funds the orders. Still there.",
          "sub": "Chặng năm: bốn giờ chiều, quán cà phê. Đây là Cô Hoa, mười năm ở ngân hàng tài trợ đơn hàng, vẫn đang làm.",
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
          "say": "The past simple closed that chapter. Sam thinks she has left the bank.",
          "sub": "Quá khứ đơn cho thấy giai đoạn đó đã khép lại. Sam tưởng cô đã rời ngành.",
          "keys": [
            "đã khép lại"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "Sorry. I've worked in banking for ten years.",
          "sub": "Xin lỗi. I've worked in banking for ten years.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "One little have, and a whole career changes. Still working: have worked. Left: worked.",
          "sub": "Chỉ một chữ have đổi hẳn sự nghiệp trong mắt người nghe. Còn làm: have worked; nghỉ rồi: worked.",
          "keys": [
            "một chữ have"
          ]
        }
      ],
      "ref": "p22,p23"
    },
    {
      "id": "s18",
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
            "zoom": 1.3,
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
            "text": "⑥ 17:30 · Bốn câu của tôi",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:sentences"
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
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "memo"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:sentences",
            "caption": "17:30 · trước giờ về",
            "icon": "memo"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Vừa xong · kinh nghiệm",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l1:result"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Kéo đến nay · tuần này",
            "x": 3996,
            "y": 1335,
            "size": 48,
            "at": "l1:week"
          },
          {
            "id": "h-s",
            "t": "text",
            "text": "Nói gọn: I've · haven't",
            "x": 3996,
            "y": 1420,
            "size": 52,
            "at": "l3:I've",
            "color": "accent",
            "hl": [
              {
                "text": "I've",
                "at": "l3:I've"
              }
            ]
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1540,
            "w": 46,
            "h": 46,
            "at": "l4:yesterday",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1522,
            "size": 58,
            "at": "l4:yesterday+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "yesterday, ago → quá khứ đơn",
            "x": 4061,
            "y": 1532,
            "size": 42,
            "at": "l4:yesterday+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1620,
            "w": 46,
            "h": 46,
            "at": "l4:third",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1602,
            "size": 58,
            "at": "l4:third+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "đúng cột ba: gone, taken",
            "x": 4061,
            "y": 1612,
            "size": 42,
            "at": "l4:third+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1700,
            "w": 46,
            "h": 46,
            "at": "l4:for",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1682,
            "size": 58,
            "at": "l4:for+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "for + khoảng · since + mốc",
            "x": 4061,
            "y": 1692,
            "size": 42,
            "at": "l4:for+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six: five thirty. Thảo writes four sentences: a result, an experience, until now, this week.",
          "sub": "Chặng sáu: năm rưỡi chiều. Thảo viết bốn câu: việc vừa xong, kinh nghiệm, kéo dài đến nay, tuần này."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I've had three meetings today. I've worked here since twenty twenty.",
          "sub": "I've had three meetings today. I've worked here since 2020.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Read them aloud, short and natural: I've, haven't.",
          "sub": "Đọc to, nói gọn I've, haven't cho tự nhiên.",
          "keys": [
            "nói gọn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then three checks before send: yesterday or ago means past simple, the right third column, for with a length, since with a point.",
          "sub": "Rồi soát ba điều trước khi gửi: có yesterday, ago thì quá khứ đơn; đúng cột ba như gone, written, taken; for với khoảng, since với mốc."
        }
      ],
      "ref": "p24,p25"
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Thứ Sáu · 8:00",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
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
            "at": "l1:Friday",
            "caption": "Thứ Sáu 8:00 · cùng bàn ấy",
            "icon": "e-mail"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "I've just sent you the file",
            "x": 5964,
            "y": 1260,
            "size": 50,
            "at": "l2:sent",
            "color": "accent",
            "hl": [
              {
                "text": "I've just sent",
                "at": "l2:sent"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "I sent it yesterday",
            "x": 5964,
            "y": 1350,
            "size": 50,
            "at": "l2:yesterday",
            "hl": [
              {
                "text": "sent",
                "at": "l2:yesterday"
              }
            ]
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Đi một ngày đàng…”",
            "x": 5964,
            "y": 1470,
            "size": 56,
            "at": "l4:journey",
            "color": "accent",
            "hl": [
              {
                "text": "ngày đàng",
                "at": "l4:journey"
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
          "say": "Friday, eight a.m. Same desk, same coffee, same Thảo.",
          "sub": "Thứ Sáu, tám giờ sáng. Vẫn bàn ấy, ly cà phê ấy, Thảo ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I've just sent you the file. The contract? I sent it yesterday.",
          "sub": "I've just sent you the file. Còn hợp đồng? I sent it yesterday.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No pause this time. Result now: have. Yesterday: past simple.",
          "sub": "Lần này không chần chừ. Kết quả bây giờ: have. Có yesterday: quá khứ đơn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One day's journey, one basket of wisdom. And a full basket it was.",
          "sub": "“Đi một ngày đàng, học một sàng khôn.” Sàng hôm qua đầy ắp.",
          "keys": [
            "một sàng khôn"
          ]
        }
      ],
      "ref": "p4,p17"
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
            "at": "l1:end",
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
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l6",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tóm lại: 4 việc + 1 lối về",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:four"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4696,
            "y": 170,
            "at": "l2:result"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6664,
            "y": 170,
            "at": "l3:experience"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 8632,
            "y": 170,
            "at": "l4:until"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 760,
            "y": 1260,
            "at": "l5:specific"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So, the present perfect does four jobs.",
          "sub": "Tóm lại, hiện tại hoàn thành chỉ có bốn việc.",
          "keys": [
            "bốn việc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Report a fresh result.",
          "sub": "Báo việc vừa xong."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Share experience.",
          "sub": "Kể kinh nghiệm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Things that go on until now, and time that isn't over.",
          "sub": "Việc kéo dài đến nay, và khoảng thời gian chưa hết."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "See a specific finished time? Take the road back to the past simple.",
          "sub": "Thấy thời điểm cụ thể đã qua thì quay về quá khứ đơn.",
          "keys": [
            "quay về quá khứ đơn"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next in the series: conditionals, for plans and proposals.",
          "sub": "Bước tiếp theo của chuỗi: câu điều kiện, để hẹn và đề xuất.",
          "keys": [
            "câu điều kiện"
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
      "data": {
        "q": "A colleague writes, she has went to the bank already, what is the mistake?",
        "options": [
          "The word already is wrong, and it must always come at the very start",
          "After has, use the third form, so it should be she has gone",
          "Nothing is wrong, because went is the correct form after has in English"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "bank",
        "why": "Sau have, has là cột ba: go, went, gone. “She has gone to the bank” là cô ấy vẫn đang ở đó."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A colleague writes, she has went to the bank already, what is the mistake?",
          "sub": "Đồng nghiệp viết she has went to the bank already, sai ở đâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After has, use the third form, so it should be she has gone.",
          "sub": "Sau has phải dùng cột ba: she has gone."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[1]"
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Bạn đã xem xong. Còn bốn mươi câu hỏi",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Check one email with yesterday or last week. You've finished the video. Have you tried the forty questions yet?",
          "sub": "Soát một email có yesterday hay last week. Bạn đã xem xong video. Đã thử bốn mươi câu hỏi chưa?",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
