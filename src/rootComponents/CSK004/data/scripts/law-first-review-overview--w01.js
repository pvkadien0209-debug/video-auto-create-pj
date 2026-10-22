// law-first-review-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "law-first-review-overview--w01",
  "hook": "HOOK-22",
  "unit": {
    "audience": "law-contract-first-review",
    "slug": "law-first-review-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Lần đầu rà một hợp đồng mua bán, pháp chế đọc theo thứ tự nào?",
    "series": "Rà hợp đồng mua bán đầu tiên — cho pháp chế mới vào nghề, biết đọc theo thứ tự nào và hỏi lại đúng chỗ"
  },
  "format": "W",
  "mode": "text",
  "narrator": "det",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
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
            "y": 60,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "surprised",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "page-facing-up",
                "three-oclock"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Ngày 1 · 15:00 · phòng Cô Hoa",
            "icon": "three-oclock"
          },
          {
            "id": "a-15",
            "t": "text",
            "text": "15:00",
            "x": 60,
            "y": 80,
            "size": 120,
            "at": "l1:three",
            "color": "accent"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "“Bên kia ai ký, có…”",
            "x": 60,
            "y": 300,
            "size": 56,
            "at": "l2:signs",
            "color": "coral",
            "hl": [
              {
                "text": "ai ký",
                "at": "l2:signs"
              }
            ]
          },
          {
            "id": "a-cut",
            "t": "text",
            "text": "✂ câu hỏi bị cắt",
            "x": 60,
            "y": 400,
            "size": 44,
            "at": "l3:hold",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three p.m. This is Cô Hoa, head of legal. Facing her, Thảo, her newest legal officer.",
          "sub": "Ba giờ chiều. Đây là Cô Hoa, trưởng phòng pháp chế. Đối diện là Thảo, chuyên viên pháp chế mới.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, who signs for the other side, and do they have...",
          "sub": "Thảo, bên kia ai ký, có...",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hold that sentence. We will finish it soon. First, rewind five hours.",
          "sub": "Giữ câu hỏi ấy lại. Lát nữa ta nghe trọn. Giờ tua lại năm tiếng đã.",
          "keys": [
            "tua lại năm tiếng"
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
      "ref": "intro,p4"
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
              "a-v2"
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
            "id": "a-v2",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 60,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "pencil",
                "ten-oclock"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
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
            "caption": "Ngày 1 · 10:00 · bàn của Thảo",
            "icon": "ten-oclock"
          },
          {
            "id": "a-new",
            "t": "text",
            "text": "Pháp chế mới, tháng đầu",
            "x": 60,
            "y": 500,
            "size": 46,
            "at": "l1:legal officer",
            "hl": [
              {
                "text": "tháng đầu",
                "at": "l1:first month"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Học ăn, học nói,",
            "x": 60,
            "y": 600,
            "size": 50,
            "at": "l4:eat",
            "color": "accent"
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "học gói, học mở”",
            "x": 60,
            "y": 670,
            "size": 50,
            "at": "l4:open",
            "color": "accent",
            "hl": [
              {
                "text": "học mở",
                "at": "l4:open"
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
          "say": "Ten a.m. Thảo, the new legal officer, in her first month in the job.",
          "sub": "Mười giờ sáng. Thảo, pháp chế mới, đang trong tháng đầu đi làm.",
          "keys": [
            "tháng đầu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Cô Hoa drops a supplier's draft on her desk. Comments by this afternoon, please.",
          "sub": "Cô Hoa đặt bản hợp đồng đối tác gửi lên bàn: chiều nay cho chị nhận xét."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "My first contract! I'll read every article from Article one. Carefully.",
          "sub": "Hợp đồng đầu tiên! Em đọc từng điều, từ Điều 1. Thật kỹ.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our elders said: learn to eat, to speak, to wrap, to open. Every skill has an order.",
          "sub": "Ông bà dặn: “Học ăn, học nói, học gói, học mở.” Việc gì cũng có thứ tự.",
          "keys": [
            "Học ăn, học nói, học gói, học mở"
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
      "ref": "intro,p4"
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
            "text": "Đọc theo thứ tự nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:order",
            "hl": [
              {
                "text": "thứ tự nào",
                "at": "l1:order"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: Điều 1 → cuối",
            "x": 2028,
            "y": 160,
            "size": 50,
            "at": "l2:Article one",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:novel"
          },
          {
            "id": "b-why",
            "t": "text",
            "text": "Mà là: hỏi mục đích trước",
            "x": 2028,
            "y": 250,
            "size": 56,
            "at": "l3:purpose",
            "color": "accent",
            "hl": [
              {
                "text": "mục đích",
                "at": "l3:purpose"
              }
            ]
          },
          {
            "id": "b-b0",
            "t": "box",
            "x": 2028,
            "y": 380,
            "w": 300,
            "h": 110,
            "at": "l4:parties",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-p0",
            "t": "text",
            "text": "① Chủ thể",
            "x": 2048,
            "y": 405,
            "size": 44,
            "at": "l4:parties+200"
          },
          {
            "id": "b-b1",
            "t": "box",
            "x": 2358,
            "y": 380,
            "w": 300,
            "h": 110,
            "at": "l4:goods",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-p1",
            "t": "text",
            "text": "② Đối tượng",
            "x": 2378,
            "y": 405,
            "size": 44,
            "at": "l4:goods+200"
          },
          {
            "id": "b-b2",
            "t": "box",
            "x": 2688,
            "y": 380,
            "w": 300,
            "h": 110,
            "at": "l4:money",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-p2",
            "t": "text",
            "text": "③ Tiền",
            "x": 2708,
            "y": 405,
            "size": 44,
            "at": "l4:money+200"
          },
          {
            "id": "b-b3",
            "t": "box",
            "x": 3018,
            "y": 380,
            "w": 300,
            "h": 110,
            "at": "l4:risk",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-p3",
            "t": "text",
            "text": "④ Rủi ro",
            "x": 3038,
            "y": 405,
            "size": 44,
            "at": "l4:risk+200"
          },
          {
            "id": "b-b4",
            "t": "box",
            "x": 3348,
            "y": 380,
            "w": 300,
            "h": 110,
            "at": "l4:disputes",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-p4",
            "t": "text",
            "text": "⑤ Tranh chấp",
            "x": 3368,
            "y": 405,
            "size": 44,
            "at": "l4:disputes+200"
          },
          {
            "id": "b-end",
            "t": "text",
            "text": "→ mỗi lượt một bài đào sâu",
            "x": 2028,
            "y": 560,
            "size": 46,
            "at": "l5:deeper",
            "hl": [
              {
                "text": "bài đào sâu",
                "at": "l5:deeper"
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
          "say": "So, your first sales contract review. What order should you read in?",
          "sub": "Vậy lần đầu rà hợp đồng mua bán, đọc theo thứ tự nào?",
          "keys": [
            "thứ tự nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not from Article one to the last page, like a novel.",
          "sub": "Không phải từ Điều 1 đến điều cuối, như đọc truyện.",
          "keys": [
            "như đọc truyện"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "First ask about the purpose of the deal.",
          "sub": "Mà là hỏi mục đích giao dịch trước.",
          "keys": [
            "mục đích giao dịch"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then five passes: parties, goods, money, risk, disputes.",
          "sub": "Rồi đọc năm lượt: chủ thể, đối tượng, tiền, rủi ro, tranh chấp.",
          "keys": [
            "năm lượt"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Each pass leads to a deeper lesson in this series.",
          "sub": "Mỗi lượt dẫn sang một bài đào sâu trong chuỗi.",
          "keys": [
            "bài đào sâu"
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
            "at": "l4",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Ngày 1 · 15:00",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Five"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 120,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "sad",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up",
                "three-oclock"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Five",
            "caption": "15:00 · câu hỏi nói trọn",
            "icon": "three-oclock"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "10:00 → Điều 1, chính tả",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l1:spelling"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "15:00 → mới tới thanh toán",
            "x": 3996,
            "y": 245,
            "size": 46,
            "at": "l1:payment"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Người ký? Chưa xem",
            "x": 3996,
            "y": 320,
            "size": 50,
            "at": "l3:yet",
            "color": "coral",
            "hl": [
              {
                "text": "Chưa xem",
                "at": "l3:yet"
              }
            ]
          },
          {
            "id": "c-key",
            "t": "text",
            "text": "Hỏi việc trước,",
            "x": 3996,
            "y": 470,
            "size": 60,
            "at": "l5:deal",
            "color": "accent"
          },
          {
            "id": "c-key2",
            "t": "text",
            "text": "đọc chữ sau",
            "x": 3996,
            "y": 560,
            "size": 60,
            "at": "l5:words",
            "color": "accent",
            "hl": [
              {
                "text": "đọc chữ sau",
                "at": "l5:words"
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
          "say": "Five hours of spelling fixes and numbering later, Thảo has only reached payment.",
          "sub": "Năm tiếng sửa chính tả, chỉnh đánh số, Thảo mới tới phần thanh toán."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, who signs for the other side, and do they have a power of attorney?",
          "sub": "Thảo, bên kia ai ký, có giấy uỷ quyền không em?",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I... haven't got to the signer yet.",
          "sub": "Em... chưa tới phần người ký ạ.",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The first question from the boss, and the one page she never reached.",
          "sub": "Câu hỏi đầu tiên của sếp, đúng trang Thảo chưa kịp lật."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Lesson one: ask about the deal first, read the words after.",
          "sub": "Bài học đầu: hỏi việc trước, đọc chữ sau.",
          "keys": [
            "hỏi việc trước, đọc chữ sau"
          ]
        }
      ],
      "ref": "p4,p5"
    },
    {
      "id": "s04",
      "module": "BRK-04",
      "data": {
        "title": "Cách rà của Thảo",
        "labels": [
          "Ngày 1",
          "Ngày 2"
        ],
        "wrong": "Đọc Điều 1 đến cuối, sửa từng lỗi chính tả",
        "right": "Hỏi việc trước, đọc năm lượt",
        "wrongIllus": "pencil",
        "rightIllus": "clipboard"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Day one: read it like a novel, fix every typo.",
          "sub": "Ngày 1: đọc như đọc truyện, sửa từng lỗi chính tả.",
          "keys": [
            "Ngày 1"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Day two: ask first, then five passes.",
          "sub": "Ngày 2: hỏi trước, rồi đọc năm lượt.",
          "keys": [
            "Ngày 2"
          ]
        }
      ],
      "ref": "p4,p5"
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
            "text": "② Ngày 2 · 8:00",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:eight"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 120,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "e-mail",
                "package"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
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
            "at": "l2:Dũng",
            "caption": "Ngày 2 · 8:00 · nhắn phòng kinh doanh",
            "icon": "e-mail"
          },
          {
            "id": "d-n0",
            "t": "badge",
            "n": 1,
            "x": 5994,
            "y": 200,
            "at": "l5:buying"
          },
          {
            "id": "d-a0",
            "t": "text",
            "text": "Mua hay bán?",
            "x": 6044,
            "y": 175,
            "size": 46,
            "at": "l5:buying+200"
          },
          {
            "id": "d-n1",
            "t": "badge",
            "n": 2,
            "x": 5994,
            "y": 285,
            "at": "l5:goods"
          },
          {
            "id": "d-a1",
            "t": "text",
            "text": "Hàng gì, dùng làm gì?",
            "x": 6044,
            "y": 260,
            "size": 46,
            "at": "l5:goods+200"
          },
          {
            "id": "d-n2",
            "t": "badge",
            "n": 3,
            "x": 5994,
            "y": 370,
            "at": "l5:value"
          },
          {
            "id": "d-a2",
            "t": "text",
            "text": "Tổng giá trị?",
            "x": 6044,
            "y": 345,
            "size": 46,
            "at": "l5:value+200"
          },
          {
            "id": "d-n3",
            "t": "badge",
            "n": 4,
            "x": 5994,
            "y": 455,
            "at": "l5:delivery"
          },
          {
            "id": "d-a3",
            "t": "text",
            "text": "Mốc giao hàng?",
            "x": 6044,
            "y": 430,
            "size": 46,
            "at": "l5:delivery+200"
          },
          {
            "id": "d-n4",
            "t": "badge",
            "n": 5,
            "x": 5994,
            "y": 540,
            "at": "l6:email"
          },
          {
            "id": "d-a4",
            "t": "text",
            "text": "Đã hứa miệng gì?",
            "x": 6044,
            "y": 515,
            "size": 46,
            "at": "l6:email+200",
            "color": "coral",
            "hl": [
              {
                "text": "hứa miệng",
                "at": "l6:email"
              }
            ]
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Hợp đồng = công cụ của việc",
            "x": 5964,
            "y": 640,
            "size": 44,
            "at": "l7:tool",
            "color": "accent",
            "hl": [
              {
                "text": "công cụ",
                "at": "l7:tool"
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
          "say": "Day two. Eight a.m. Same contract, new method.",
          "sub": "Ngày thứ hai. Tám giờ sáng. Vẫn bản hợp đồng ấy, cách làm mới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Dũng, from sales, the man who keeps the supplier relationship.",
          "sub": "Đây là anh Dũng bên kinh doanh, người giữ quan hệ với đối tác.",
          "keys": [
            "anh Dũng bên kinh doanh"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Legal is asking me questions before reading? Okay, fire away!",
          "sub": "Pháp chế hỏi tôi trước khi đọc à? Ok, hỏi luôn!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Thảo sends five questions before she opens the draft.",
          "sub": "Thảo gửi năm câu hỏi trước khi mở bản hợp đồng.",
          "keys": [
            "năm câu hỏi"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Are we buying or selling? What goods, for what use? Total value? Delivery date?",
          "sub": "Mình là bên mua hay bán? Hàng gì, dùng làm gì? Tổng giá trị? Mốc giao hàng?"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And the sneaky one: what was promised by phone or email, but is missing here?",
          "sub": "Và câu tinh nhất: điều gì đã hứa miệng hay qua email mà chưa có trong bản này?",
          "keys": [
            "hứa miệng"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "A contract is a tool for a business deal. Without the deal, you only fix commas.",
          "sub": "Hợp đồng là công cụ cho một việc kinh doanh. Không biết việc, ta chỉ sửa được dấu phẩy.",
          "keys": [
            "chỉ sửa được dấu phẩy"
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
      "ref": "p1,p2"
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
            "zoom": 1.3,
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
            "id": "d-ans",
            "t": "text",
            "text": "Bên mua, dây chuyền đóng gói",
            "x": 6784,
            "y": 660,
            "size": 40,
            "at": "l1:packaging",
            "hl": [
              {
                "text": "Bên mua",
                "at": "l1:buyer"
              }
            ]
          },
          {
            "id": "d-early",
            "t": "text",
            "text": "Vào từ lúc đàm phán",
            "x": 5964,
            "y": 715,
            "size": 40,
            "at": "l2:negotiation",
            "color": "accent",
            "hl": [
              {
                "text": "lúc đàm phán",
                "at": "l2:negotiation"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "We're the buyer. The materials go into our packaging line.",
          "sub": "Mình là bên mua. Vật tư dùng cho dây chuyền đóng gói.",
          "face": "neutral"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Legal officers draft and review contracts. A trade journal adds: join at the negotiation, not just stamp the final copy.",
          "sub": "Pháp chế soạn, thẩm định hợp đồng. Một tạp chí ngành khuyên: tham gia từ lúc đàm phán, đừng chỉ “đóng dấu pháp lý”.",
          "keys": [
            "tham gia từ lúc đàm phán"
          ]
        }
      ],
      "ref": "p3,p18"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Lượt 1 · Chủ thể",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:pass one"
          },
          {
            "id": "e-who",
            "t": "text",
            "text": "Người ký bên bán: phó giám đốc",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l1:deputy",
            "color": "coral"
          },
          {
            "id": "e-poa",
            "t": "text",
            "text": "→ cần giấy uỷ quyền",
            "x": 7972,
            "y": 245,
            "size": 52,
            "at": "l1:power",
            "color": "accent",
            "hl": [
              {
                "text": "giấy uỷ quyền",
                "at": "l1:power"
              }
            ]
          },
          {
            "id": "e-141",
            "t": "text",
            "text": "Điều 141: chỉ trong phạm vi",
            "x": 7932,
            "y": 340,
            "size": 46,
            "at": "l2:scope",
            "hl": [
              {
                "text": "phạm vi",
                "at": "l2:scope"
              }
            ]
          },
          {
            "id": "e-141b",
            "t": "text",
            "text": "điều lệ · giấy uỷ quyền · luật",
            "x": 7972,
            "y": 405,
            "size": 40,
            "at": "l2:charter",
            "color": "muted"
          },
          {
            "id": "e-143",
            "t": "text",
            "text": "Điều 143: phần vượt",
            "x": 7932,
            "y": 480,
            "size": 46,
            "at": "l3:beyond"
          },
          {
            "id": "e-143b",
            "t": "text",
            "text": "→ không ràng buộc bên kia",
            "x": 7972,
            "y": 545,
            "size": 46,
            "at": "l3:bind",
            "color": "coral",
            "hl": [
              {
                "text": "không ràng buộc",
                "at": "l3:bind"
              }
            ]
          },
          {
            "id": "e-sau",
            "t": "text",
            "text": "Bài sau: tư cách, thẩm quyền",
            "x": 7932,
            "y": 630,
            "size": 38,
            "at": "l4:next lesson",
            "color": "muted"
          },
          {
            "id": "e-i",
            "t": "illus",
            "name": "identification-card",
            "x": 9222,
            "y": 170,
            "size": 220,
            "at": "l1:deputy"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Bộ luật Dân sự 2015, Điều 141, 143",
            "x": 7932,
            "y": 720,
            "size": 26,
            "at": "l2",
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
          "say": "Pass one: the parties. The seller's signer is a deputy director, so Thảo marks: power of attorney needed.",
          "sub": "Lượt một: chủ thể. Người ký bên bán là phó giám đốc, Thảo đánh dấu: cần giấy uỷ quyền.",
          "keys": [
            "cần giấy uỷ quyền"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article one forty-one: a representative acts only within the scope set by the charter, the power of attorney, or the law.",
          "sub": "Điều 141: người đại diện chỉ giao dịch trong phạm vi theo điều lệ, giấy uỷ quyền hoặc pháp luật.",
          "keys": [
            "trong phạm vi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article one forty-three: the part beyond that scope does not bind the company, unless, for example, it agrees.",
          "sub": "Điều 143: phần vượt phạm vi không ràng buộc người được đại diện, trừ một số trường hợp như họ đồng ý.",
          "keys": [
            "không ràng buộc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The next lesson shows how to check the signer and the approval limits.",
          "sub": "Bài tiếp theo chỉ cách đối chiếu người ký, giấy uỷ quyền và ngưỡng phải xin chấp thuận."
        }
      ],
      "ref": "p6,p18"
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
              "e-393",
              "e-400"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "E",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "e-q2",
            "t": "text",
            "text": "Đã ràng buộc từ lúc nào?",
            "x": 8772,
            "y": 340,
            "size": 46,
            "at": "l1:formed",
            "color": "accent",
            "hl": [
              {
                "text": "từ lúc nào",
                "at": "l1:formed"
              }
            ]
          },
          {
            "id": "e-393",
            "t": "text",
            "text": "Điều 393: im lặng ≠ đồng ý",
            "x": 8772,
            "y": 430,
            "size": 42,
            "at": "l2:silence"
          },
          {
            "id": "e-400",
            "t": "text",
            "text": "Điều 400: bên sau cùng ký",
            "x": 8772,
            "y": 500,
            "size": 42,
            "at": "l2:last"
          },
          {
            "id": "e-mail",
            "t": "text",
            "text": "Email báo giá, đơn hàng → bài 2",
            "x": 8772,
            "y": 580,
            "size": 36,
            "at": "l3:email",
            "color": "muted"
          },
          {
            "id": "e-src2",
            "t": "text",
            "text": "Bộ luật Dân sự 2015, Điều 393, 400",
            "x": 8772,
            "y": 720,
            "size": 26,
            "at": "l2",
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
          "say": "Same pass, one more question: is the contract already formed?",
          "sub": "Cùng lượt này, hỏi thêm: hợp đồng đã hình thành chưa?",
          "keys": [
            "đã hình thành chưa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Silence is not acceptance, unless agreed or customary. A written contract forms when the last party signs.",
          "sub": "Im lặng không phải là chấp nhận, trừ khi có thoả thuận hay thói quen. Hợp đồng văn bản giao kết khi bên sau cùng ký."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Quotes and orders already flew by email? Another lesson tells you when you got bound.",
          "sub": "Báo giá, đơn hàng đã bay qua email? Một bài riêng giúp bạn biết lúc nào mình đã bị ràng buộc."
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
            "text": "④ Lượt 2 · Hàng hoá",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:pass two"
          },
          {
            "id": "f-34",
            "t": "text",
            "text": "Điều 34: giao đúng thoả thuận",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l2:deliver"
          },
          {
            "id": "f-34b",
            "t": "text",
            "text": "số lượng, chất lượng, đóng gói",
            "x": 100,
            "y": 1325,
            "size": 40,
            "at": "l2:quantity",
            "color": "muted"
          },
          {
            "id": "f-35",
            "t": "text",
            "text": "Im về địa điểm → Điều 35 chọn",
            "x": 60,
            "y": 1410,
            "size": 44,
            "at": "l3:place"
          },
          {
            "id": "f-39",
            "t": "text",
            "text": "Im về chất lượng → Điều 39",
            "x": 60,
            "y": 1485,
            "size": 44,
            "at": "l3:quality"
          },
          {
            "id": "f-39b",
            "t": "text",
            "text": "mục đích sử dụng thông thường",
            "x": 100,
            "y": 1550,
            "size": 40,
            "at": "l3:ordinary",
            "color": "muted"
          },
          {
            "id": "f-gap",
            "t": "text",
            "text": "Luật “điền chỗ trống”",
            "x": 1000,
            "y": 1290,
            "size": 52,
            "at": "l4:fills",
            "color": "coral",
            "hl": [
              {
                "text": "điền chỗ trống",
                "at": "l4:fills"
              }
            ]
          },
          {
            "id": "f-gap2",
            "t": "text",
            "text": "chưa chắc như ý mình",
            "x": 1000,
            "y": 1370,
            "size": 46,
            "at": "l4:sales"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Luật Thương mại 2005, Điều 34, 35, 39",
            "x": 60,
            "y": 1810,
            "size": 26,
            "at": "l2",
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
          "say": "Pass two: the goods. Is everything about them clear enough?",
          "sub": "Lượt hai: đối tượng. Hàng hoá, chất lượng, giao nhận đã đủ rõ chưa?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article thirty-four: the seller must deliver goods and documents as agreed, in quantity, quality and packing.",
          "sub": "Điều 34 Luật Thương mại: bên bán giao hàng và chứng từ đúng thoả thuận về số lượng, chất lượng, đóng gói, bảo quản."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Silent on place? Article thirty-five picks it. Silent on quality? Article thirty-nine uses ordinary use.",
          "sub": "Hợp đồng im về địa điểm? Điều 35 chọn thay. Im về chất lượng? Điều 39 lấy mục đích sử dụng thông thường."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "When the law fills the gaps, sales may not like the result.",
          "sub": "Khi luật phải “điền chỗ trống”, kết quả chưa chắc như phòng kinh doanh muốn.",
          "keys": [
            "điền chỗ trống"
          ]
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
            "fit": "F",
            "move": "cut"
          },
          {
            "at": "l1",
            "fit": [
              "f-good",
              "f-goodx"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "F",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "f-good",
            "t": "text",
            "text": "Hợp đồng ghi: “hàng tốt”",
            "x": 60,
            "y": 1635,
            "size": 50,
            "at": "l1:good goods",
            "color": "coral"
          },
          {
            "id": "f-goodx",
            "t": "strike",
            "over": "f-good",
            "at": "l1:good goods+700"
          },
          {
            "id": "f-meas",
            "t": "text",
            "text": "→ cần tiêu chuẩn đo được",
            "x": 60,
            "y": 1715,
            "size": 50,
            "at": "l2:measurable",
            "color": "accent",
            "hl": [
              {
                "text": "đo được",
                "at": "l2:measurable"
              }
            ]
          },
          {
            "id": "f-list",
            "t": "text",
            "text": "tên · mã · tiêu chuẩn · số lượng",
            "x": 1000,
            "y": 1635,
            "size": 40,
            "at": "l3:name"
          },
          {
            "id": "f-list2",
            "t": "text",
            "text": "dung sai · cách kiểm khi nhận",
            "x": 1000,
            "y": 1700,
            "size": 40,
            "at": "l3:tolerance"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thảo's draft only says: good goods. Good for whom? A grandma's soup is also good.",
          "sub": "Bản của Thảo chỉ ghi: “hàng tốt”. Tốt theo ai? Nồi canh của bà cũng “tốt”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'll mark it: needs a measurable standard.",
          "sub": "Em đánh dấu: cần tiêu chuẩn đo được.",
          "keys": [
            "tiêu chuẩn đo được"
          ],
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Name, code, standard, quantity, tolerance, and how goods are checked on receipt.",
          "sub": "Tên, mã, tiêu chuẩn, số lượng, dung sai, và cách kiểm tra khi nhận hàng."
        }
      ],
      "ref": "p9,p18"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Trả trước toàn bộ khi chưa thấy chứng từ giao hàng?",
        "illus": "money-with-wings"
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
          "say": "Full payment upfront, before any delivery documents?",
          "sub": "Trả trước toàn bộ, khi chưa có chứng từ giao hàng?",
          "keys": [
            "Trả trước toàn bộ"
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
          },
          {
            "at": 150,
            "fit": "G",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Lượt 3 · Tiền",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:pass three"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Giá gồm thuế, vận chuyển, lắp đặt?",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "l2:VAT"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Mấy đợt? Mỗi đợt chứng từ gì?",
            "x": 2028,
            "y": 1330,
            "size": 44,
            "at": "l2:instalments"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Đồng tiền thanh toán?",
            "x": 2028,
            "y": 1400,
            "size": 44,
            "at": "l2:currency"
          },
          {
            "id": "g-55",
            "t": "text",
            "text": "Điều 55: trả khi giao hàng",
            "x": 2028,
            "y": 1490,
            "size": 50,
            "at": "l3:delivered",
            "color": "accent",
            "hl": [
              {
                "text": "trả khi giao hàng",
                "at": "l3:delivered"
              }
            ]
          },
          {
            "id": "g-55b",
            "t": "text",
            "text": "hoặc chứng từ, nếu không thoả thuận",
            "x": 2068,
            "y": 1560,
            "size": 36,
            "at": "l3:documents",
            "color": "muted"
          },
          {
            "id": "g-ask",
            "t": "text",
            "text": "Trả trước 100% → hỏi anh Dũng",
            "x": 2028,
            "y": 1650,
            "size": 48,
            "at": "l4:question",
            "color": "coral",
            "hl": [
              {
                "text": "hỏi anh Dũng",
                "at": "l4:question"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Luật Thương mại 2005, Điều 55 · Bộ luật Dân sự 2015, Điều 357",
            "x": 2028,
            "y": 1810,
            "size": 26,
            "at": "l3",
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
          "say": "Pass three: money. When does it leave, how much, on what conditions?",
          "sub": "Lượt ba: tiền. Tiền đi lúc nào, bao nhiêu, theo điều kiện gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Does the price include VAT, transport, installation? How many instalments, and which documents for each? Which currency?",
          "sub": "Giá đã gồm thuế giá trị gia tăng, vận chuyển, lắp đặt chưa? Mấy đợt, mỗi đợt cần chứng từ gì? Đồng tiền nào?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Under Article fifty-five, unless agreed otherwise, the buyer pays when goods or documents are delivered.",
          "sub": "Theo Điều 55 Luật Thương mại, nếu không thoả thuận khác, bên mua trả tiền khi bên bán giao hàng hoặc chứng từ.",
          "keys": [
            "trả tiền khi bên bán giao hàng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Everything upfront, before any documents? A question for Dũng: why, and what protects us?",
          "sub": "Trả trước toàn bộ khi chưa có chứng từ? Ghi câu hỏi cho anh Dũng: vì sao, cái gì bảo vệ mình?",
          "keys": [
            "câu hỏi cho anh Dũng"
          ],
          "face": "thinking"
        }
      ],
      "ref": "p10,p18"
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
          }
        ],
        "items": [
          {
            "id": "g-357",
            "t": "text",
            "text": "Chậm trả → lãi trên số chậm trả",
            "x": 2968,
            "y": 1260,
            "size": 44,
            "at": "l1:late",
            "hl": [
              {
                "text": "lãi",
                "at": "l1:interest"
              }
            ]
          },
          {
            "id": "g-357b",
            "t": "text",
            "text": "thoả thuận, trong giới hạn luật",
            "x": 2968,
            "y": 1330,
            "size": 36,
            "at": "l2:agreed",
            "color": "muted"
          },
          {
            "id": "g-i",
            "t": "illus",
            "name": "money-with-wings",
            "x": 3268,
            "y": 1420,
            "size": 200,
            "at": "l1:late"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Tiền đi sau chứng từ",
            "x": 2968,
            "y": 1670,
            "size": 50,
            "at": "l3:money",
            "color": "accent",
            "hl": [
              {
                "text": "sau chứng từ",
                "at": "l3:paper"
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
          "say": "And paying late? Article three fifty-seven: interest on the late amount.",
          "sub": "Còn trả chậm? Điều 357 Bộ luật Dân sự: phải trả lãi trên số tiền chậm trả.",
          "keys": [
            "trả lãi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The rate is agreed by the parties, within the limit the law allows.",
          "sub": "Mức lãi do các bên thoả thuận, trong giới hạn luật cho phép."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Short version: money should follow paper, not run ahead of it.",
          "sub": "Nói gọn: tiền nên đi sau chứng từ, đừng chạy trước nó.",
          "keys": [
            "tiền nên đi sau chứng từ"
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
            "text": "⑥ Lượt 4 + 5",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:pass four"
          },
          {
            "id": "h-r",
            "t": "text",
            "text": "Rủi ro: hỏng trên đường?",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l1:transit"
          },
          {
            "id": "h-r2",
            "t": "text",
            "text": "phạt bao nhiêu? bồi thường?",
            "x": 4036,
            "y": 1330,
            "size": 42,
            "at": "l1:penalty",
            "color": "muted"
          },
          {
            "id": "h-8",
            "t": "text",
            "text": "Trần phạt 8% · Điều 301",
            "x": 3996,
            "y": 1410,
            "size": 50,
            "at": "l2:eight",
            "color": "coral",
            "hl": [
              {
                "text": "8%",
                "at": "l2:eight"
              }
            ]
          },
          {
            "id": "h-8b",
            "t": "text",
            "text": "đang đề nghị bãi bỏ → kiểm lại",
            "x": 4036,
            "y": 1485,
            "size": 40,
            "at": "l2:repeal",
            "hl": [
              {
                "text": "kiểm lại",
                "at": "l3:Check"
              }
            ]
          },
          {
            "id": "h-d",
            "t": "text",
            "text": "Tranh chấp: toà hay trọng tài?",
            "x": 3996,
            "y": 1570,
            "size": 46,
            "at": "l4:court"
          },
          {
            "id": "h-d2",
            "t": "text",
            "text": "ở đâu? luật nào áp dụng?",
            "x": 4036,
            "y": 1640,
            "size": 42,
            "at": "l4:where",
            "color": "muted"
          },
          {
            "id": "h-law",
            "t": "text",
            "text": "“giải quyết theo pháp luật”",
            "x": 4936,
            "y": 1270,
            "size": 46,
            "at": "l5:law",
            "color": "coral"
          },
          {
            "id": "h-law2",
            "t": "text",
            "text": "→ cần chọn nơi giải quyết",
            "x": 4936,
            "y": 1345,
            "size": 46,
            "at": "l5:choose",
            "color": "accent",
            "hl": [
              {
                "text": "cần chọn",
                "at": "l5:choose"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Luật Thương mại 2005, Điều 301 (dự án sửa đổi, kỳ họp 10/2026)",
            "x": 3996,
            "y": 1810,
            "size": 26,
            "at": "l2",
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
          "say": "Pass four: risk. Goods broken in transit? The penalty for delay? Damages?",
          "sub": "Lượt bốn: rủi ro. Hàng hỏng trên đường ai chịu? Chậm phạt bao nhiêu? Bồi thường thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Careful: the eight percent penalty cap in Article three hundred and one sits in a chapter proposed for repeal.",
          "sub": "Lưu ý: trần phạt 8% ở Điều 301 nằm trong chương chế tài đang được đề nghị bãi bỏ.",
          "keys": [
            "đề nghị bãi bỏ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The bill goes to the October twenty twenty-six session. Check again after it.",
          "sub": "Dự án luật trình kỳ họp tháng 10/2026. Cần kiểm lại sau kỳ họp.",
          "keys": [
            "kiểm lại sau kỳ họp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Pass five: disputes. Court or arbitration, where, under which law?",
          "sub": "Lượt năm: tranh chấp. Toà án hay trọng tài, ở đâu, luật nào áp dụng?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Ours just says: resolved according to law. Which law, which door? I'll mark: choose a forum.",
          "sub": "Bản này chỉ ghi “giải quyết theo pháp luật”. Luật nào, cửa nào? Em đánh dấu: cần chọn cơ quan giải quyết.",
          "keys": [
            "cần chọn cơ quan giải quyết"
          ],
          "face": "thinking"
        }
      ],
      "ref": "p12,p13,p18"
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
          }
        ],
        "items": [
          {
            "id": "h-404",
            "t": "text",
            "text": "Điều 404: giải thích theo",
            "x": 4936,
            "y": 1450,
            "size": 44,
            "at": "l1:read"
          },
          {
            "id": "h-404b",
            "t": "text",
            "text": "ý chí chung, không chỉ câu chữ",
            "x": 4936,
            "y": 1515,
            "size": 40,
            "at": "l1:common",
            "hl": [
              {
                "text": "ý chí chung",
                "at": "l1:common"
              }
            ]
          },
          {
            "id": "h-tt",
            "t": "text",
            "text": "Luật Trọng tài TM cũng đang sửa",
            "x": 4936,
            "y": 1600,
            "size": 38,
            "at": "l2:arbitration",
            "color": "muted"
          },
          {
            "id": "h-2n",
            "t": "text",
            "text": "Câu nào hiểu được hai nghĩa?",
            "x": 4936,
            "y": 1690,
            "size": 44,
            "at": "l3:two meanings",
            "color": "accent"
          },
          {
            "id": "h-src2",
            "t": "text",
            "text": "Bộ luật Dân sự 2015, Điều 404",
            "x": 4936,
            "y": 1810,
            "size": 26,
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
          "say": "Article four hundred and four lets a court read a contract by the parties' common intention, not only the words.",
          "sub": "Điều 404 Bộ luật Dân sự cho phép giải thích hợp đồng theo ý chí chung của các bên, không chỉ theo câu chữ.",
          "keys": [
            "ý chí chung"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The commercial arbitration law is being amended too. Check after the session.",
          "sub": "Luật Trọng tài thương mại cũng đang được sửa đổi, cần kiểm lại sau kỳ họp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So hunt for sentences with two meanings. A lesson ahead shows how to rewrite them.",
          "sub": "Vậy hãy săn những câu hiểu được hai nghĩa. Một bài phía sau chỉ cách viết lại.",
          "keys": [
            "hai nghĩa"
          ]
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s16",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Ngày 2 · 11:30 · Dũng ghé bàn",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Mẫu chuẩn của họ, điền tên rồi ký",
          "why": "Mẫu nào cũng do một bên soạn để bảo vệ bên đó trước. Điều 405 chỉ là cái phao khi đã cãi nhau.",
          "rule": "Mẫu của người khác là bản nháp của mình"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Relax, it's their standard template. Fill in our name and sign!",
          "sub": "Yên tâm, đây là mẫu chuẩn của họ. Điền tên mình rồi ký thôi!",
          "pose": "thumb",
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
          "say": "Every template protects its drafter first. Article four oh five only helps after the fight.",
          "sub": "Mẫu nào cũng bảo vệ bên soạn trước. Điều 405 chỉ là cái phao khi đã cãi nhau.",
          "keys": [
            "bảo vệ bên soạn trước"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Rewind!",
          "sub": "Tua lại!",
          "phase": "redo"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "dung",
          "say": "Fine. You propose changes, I send them before signing.",
          "sub": "Được rồi. Em đề nghị sửa, anh gửi bên bán trước khi ký.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Someone else's template is your first draft.",
          "sub": "Mẫu của người khác là bản nháp của mình.",
          "phase": "redo",
          "keys": [
            "bản nháp của mình"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p14,p15"
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
            "text": "⑦ 14:00 · Bảng kiểm 1 trang",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:checklist",
            "hl": [
              {
                "text": "1 trang",
                "at": "l1:one page"
              }
            ]
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1265,
            "w": 46,
            "h": 46,
            "at": "l2:purpose",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1245,
            "size": 58,
            "at": "l2:purpose+500",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Mục đích, vai mua hay bán",
            "x": 6029,
            "y": 1258,
            "size": 38,
            "at": "l2:purpose+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1365,
            "w": 46,
            "h": 46,
            "at": "l2:signer",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1345,
            "size": 58,
            "at": "l2:signer+500",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Tên, mã số, người ký, uỷ quyền",
            "x": 6029,
            "y": 1358,
            "size": 38,
            "at": "l2:signer+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1465,
            "w": 46,
            "h": 46,
            "at": "l2:formed",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1445,
            "size": 58,
            "at": "l2:formed+500",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Hình thành, hiệu lực lúc nào",
            "x": 6029,
            "y": 1458,
            "size": 38,
            "at": "l2:formed+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1565,
            "w": 46,
            "h": 46,
            "at": "l2:goods",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1545,
            "size": 58,
            "at": "l2:goods+500",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Hàng, chất lượng, cách kiểm",
            "x": 6029,
            "y": 1558,
            "size": 38,
            "at": "l2:goods+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1665,
            "w": 46,
            "h": 46,
            "at": "l3:delivery",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1645,
            "size": 58,
            "at": "l3:delivery+500",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Giao hàng, chuyển rủi ro",
            "x": 6029,
            "y": 1658,
            "size": 38,
            "at": "l3:delivery+200"
          },
          {
            "id": "i-c5",
            "t": "box",
            "x": 6824,
            "y": 1265,
            "w": 46,
            "h": 46,
            "at": "l3:price",
            "stroke": 5
          },
          {
            "id": "i-k5",
            "t": "text",
            "text": "✓",
            "x": 6830,
            "y": 1245,
            "size": 58,
            "at": "l3:price+500",
            "color": "accent"
          },
          {
            "id": "i-l5",
            "t": "text",
            "text": "Giá gồm gì, thanh toán, hoá đơn",
            "x": 6889,
            "y": 1258,
            "size": 38,
            "at": "l3:price+200"
          },
          {
            "id": "i-c6",
            "t": "box",
            "x": 6824,
            "y": 1365,
            "w": 46,
            "h": 46,
            "at": "l3:penalties",
            "stroke": 5
          },
          {
            "id": "i-k6",
            "t": "text",
            "text": "✓",
            "x": 6830,
            "y": 1345,
            "size": 58,
            "at": "l3:penalties+500",
            "color": "accent"
          },
          {
            "id": "i-l6",
            "t": "text",
            "text": "Phạt, bồi thường, chấm dứt",
            "x": 6889,
            "y": 1358,
            "size": 38,
            "at": "l3:penalties+200"
          },
          {
            "id": "i-c7",
            "t": "box",
            "x": 6824,
            "y": 1465,
            "w": 46,
            "h": 46,
            "at": "l3:court",
            "stroke": 5
          },
          {
            "id": "i-k7",
            "t": "text",
            "text": "✓",
            "x": 6830,
            "y": 1445,
            "size": 58,
            "at": "l3:court+500",
            "color": "accent"
          },
          {
            "id": "i-l7",
            "t": "text",
            "text": "Toà hay trọng tài, luật nào",
            "x": 6889,
            "y": 1458,
            "size": 38,
            "at": "l3:court+200"
          },
          {
            "id": "i-c8",
            "t": "box",
            "x": 6824,
            "y": 1565,
            "w": 46,
            "h": 46,
            "at": "l3:two meanings",
            "stroke": 5
          },
          {
            "id": "i-k8",
            "t": "text",
            "text": "✓",
            "x": 6830,
            "y": 1545,
            "size": 58,
            "at": "l3:two meanings+500",
            "color": "accent"
          },
          {
            "id": "i-l8",
            "t": "text",
            "text": "Câu nào hai nghĩa",
            "x": 6889,
            "y": 1558,
            "size": 38,
            "at": "l3:two meanings+200",
            "color": "coral"
          },
          {
            "id": "i-key",
            "t": "text",
            "text": "1 trang, 5 lượt, không sót",
            "x": 6824,
            "y": 1710,
            "size": 38,
            "at": "l4:one page",
            "color": "accent",
            "hl": [
              {
                "text": "không sót",
                "at": "l4:missed"
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
          "say": "Two p.m. Thảo turns it all into a one page checklist.",
          "sub": "Hai giờ chiều. Thảo gom tất cả thành bảng kiểm một trang.",
          "keys": [
            "bảng kiểm một trang"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Purpose and our role. Names, codes, signer, authority. When it formed. Goods, quality, inspection.",
          "sub": "Mục đích và vai mua bán. Tên, mã số, người ký, uỷ quyền. Hình thành lúc nào. Hàng, chất lượng, cách kiểm.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Delivery and risk. Price, payment, invoices. Penalties, termination. Court or arbitration. Any two meanings.",
          "sub": "Giao hàng, chuyển rủi ro. Giá, thanh toán, hoá đơn. Phạt, chấm dứt. Toà hay trọng tài. Câu hai nghĩa."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One page, five passes, no big point missed.",
          "sub": "Một trang bảng kiểm, năm lượt đọc, không sót điều lớn.",
          "keys": [
            "không sót điều lớn"
          ]
        }
      ],
      "ref": "p16,p17,p19"
    },
    {
      "id": "s18",
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
            "at": "l5",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "⑧ Ngày 2 · 15:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:three"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1210,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "happy",
                  "pose": "explain"
                }
              ],
              "props": [
                "page-facing-up",
                "three-oclock"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:three",
            "caption": "Ngày 2 · 15:00 · cùng phòng, cùng giờ",
            "icon": "three-oclock"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Vấn đề",
            "x": 7932,
            "y": 1270,
            "size": 50,
            "at": "l4:issue",
            "hl": [
              {
                "text": "Vấn đề",
                "at": "l4:issue"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Căn cứ",
            "x": 7932,
            "y": 1345,
            "size": 50,
            "at": "l4:basis"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Câu đề xuất thay",
            "x": 7932,
            "y": 1420,
            "size": 50,
            "at": "l4:wording"
          },
          {
            "id": "j-r",
            "t": "text",
            "text": "xếp theo mức rủi ro",
            "x": 7932,
            "y": 1500,
            "size": 44,
            "at": "l4:ranked",
            "color": "accent",
            "hl": [
              {
                "text": "mức rủi ro",
                "at": "l4:ranked"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Học ăn, học nói…",
            "x": 7932,
            "y": 1630,
            "size": 46,
            "at": "l6:eat",
            "color": "accent"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "học đọc hợp đồng”",
            "x": 7932,
            "y": 1700,
            "size": 46,
            "at": "l6:contract",
            "color": "accent",
            "hl": [
              {
                "text": "học đọc",
                "at": "l6:read"
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
          "say": "Three p.m. again. Same room, same boss, same question.",
          "sub": "Lại ba giờ chiều. Vẫn phòng ấy, vẫn sếp ấy, vẫn câu hỏi ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "So, Thảo. Who signs for the other side, and do they have a power of attorney?",
          "sub": "Nào Thảo. Bên kia ai ký, có giấy uỷ quyền không em?",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "A deputy director. I've asked sales for his power of attorney. And three more comments, ranked by risk.",
          "sub": "Phó giám đốc ạ. Em đã nhờ anh Dũng xin giấy uỷ quyền. Và thêm ba nhận xét, xếp theo mức rủi ro.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not a page full of red ink. A few comments, ranked by risk: the issue, the basis, the proposed wording.",
          "sub": "Không phải bản gạch đỏ chi chít, mà vài nhận xét xếp theo rủi ro: vấn đề, căn cứ, câu đề xuất thay.",
          "keys": [
            "vấn đề, căn cứ, câu đề xuất thay"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "Good. Send it to me now, okay!",
          "sub": "Rồi, gửi chị luôn nha!",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Learn to eat, to speak, to wrap, to open. And now, to read a contract.",
          "sub": "“Học ăn, học nói, học gói, học mở.” Và giờ, học đọc hợp đồng.",
          "keys": [
            "học đọc hợp đồng"
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
      "ref": "p20,p18"
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
          }
        ],
        "items": [
          {
            "id": "j-map",
            "t": "text",
            "text": "Người ký, giao kết, hàng, giá,",
            "x": 8752,
            "y": 1750,
            "size": 36,
            "at": "l1:Signers"
          },
          {
            "id": "j-map2",
            "t": "text",
            "text": "hai nghĩa, nhận xét",
            "x": 8752,
            "y": 1802,
            "size": 36,
            "at": "l1:comments",
            "hl": [
              {
                "text": "nhận xét",
                "at": "l1:comments"
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
          "say": "The series follows one review: Signers, formation, goods, price, two meanings, then review comments.",
          "sub": "Chuỗi đi đúng thứ tự một lần rà: người ký, giao kết, hàng hoá, giá, câu hai nghĩa, rồi viết nhận xét.",
          "keys": [
            "viết nhận xét"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Articles follow the Civil Code and Commercial Law in force in October twenty twenty-six. Check the latest consolidated text before citing.",
          "sub": "Điều luật theo Bộ luật Dân sự 2015, Luật Thương mại 2005 có hiệu lực tháng 10/2026. Trước khi dẫn thật, mở văn bản hợp nhất mới nhất."
        }
      ],
      "ref": "p21,p22"
    },
    {
      "id": "s20",
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
            "at": "l1:deal",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:five",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l3:template",
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
            "x": 5556,
            "y": 20,
            "at": "l1:deal"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 3588,
            "y": 20,
            "at": "l2:five+900"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 7524,
            "y": 1110,
            "at": "l3:template"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Tham khảo, không phải tư vấn vụ việc cụ thể. Nhân vật minh hoạ. Luật Thương mại đang sửa; đối chiếu văn bản mới nhất.",
            "x": 5964,
            "y": 1825,
            "size": 28,
            "at": "l3:end",
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
          "say": "So: ask about the deal first, read the words after.",
          "sub": "Tóm lại: hỏi việc trước, đọc chữ sau.",
          "keys": [
            "hỏi việc trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then five passes: parties, goods, money, risk, disputes.",
          "sub": "Rồi năm lượt: chủ thể, đối tượng, tiền, rủi ro, tranh chấp.",
          "keys": [
            "năm lượt"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And their template is only your first draft, checked on one page.",
          "sub": "Và mẫu của bên kia chỉ là bản nháp của mình, rà bằng một trang bảng kiểm.",
          "keys": [
            "bản nháp của mình"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s21",
      "module": "QUIZ-01",
      "data": {
        "q": "Your manager wants comments by this afternoon, which reading pass should you start with?",
        "options": [
          "The parties, checking who signs and whether that person has authority",
          "The dispute clause, because arguments always matter more than anything else",
          "The page numbers, because a neat layout impresses the manager the most"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "clipboard",
        "why": "Lượt đầu tiên là chủ thể: ai ký và có đủ quyền ký không."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Your manager wants comments by this afternoon, which reading pass should you start with?",
          "sub": "Trưởng phòng cần nhận xét trong chiều nay, bạn nên bắt đầu từ lượt đọc nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Start with the parties: who signs, and with what authority.",
          "sub": "Bắt đầu từ chủ thể: ai ký, ký theo quyền nào."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "That is the question Cô Hoa asked first.",
          "sub": "Đó cũng là câu Cô Hoa hỏi đầu tiên."
        }
      ],
      "ref": "questions[36]"
    },
    {
      "id": "s22",
      "module": "END-05",
      "data": {
        "text": "Năm câu hỏi trước, năm lượt sau",
        "sub": "Bài sau: bên ký có đủ tư cách, thẩm quyền?"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Do it now: before opening the draft, send sales your five questions.",
          "sub": "Việc làm ngay: trước khi mở bản hợp đồng, nhắn phòng kinh doanh năm câu hỏi.",
          "keys": [
            "năm câu hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next lesson: does the signer have the capacity and authority to sign? Now, the forty questions below.",
          "sub": "Bài sau: bên ký có đủ tư cách và thẩm quyền không. Giờ thử bốn mươi câu hỏi bên dưới nhé."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "This is general professional knowledge, not advice for a specific case. Check the latest law texts.",
          "sub": "Kiến thức nghề tham khảo, không phải tư vấn cho vụ việc cụ thể. Đối chiếu văn bản mới nhất."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (mở chuỗi law-contract-first-review) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-22 (câu thoại bị cắt): 15:00 Cô Hoa “Bên kia ai ký, có…” → tua lại 10:00 → câu nói trọn ở ô C (≈ 1 phút). Dòng thời gian: HAI NGÀY ĐẦU Thảo rà bản hợp đồng mua vật tư (ngày 1: 10:00 đọc từ Điều 1 → 15:00 bị hỏi; ngày 2: 8:00 năm câu hỏi cho Dũng p2 → lượt 1 chủ thể p6, p7 → lượt 2 hàng p8, p9 → lượt 3 tiền p10, p11 → lượt 4 + 5 p12, p13 → 11:30 “Khoan đã!” mẫu chuẩn p14 → 14:00 bảng kiểm p16, p17 → 15:00 gửi Cô Hoa, khép vòng). Nhân vật theo w145/_series/law-contract-first-review.md: Thảo (chính), Cô Hoa (trưởng phòng; bài viết gọi chị Lan), Dũng (kinh doanh). Không nêu tên doanh nghiệp/tạp chí thật (“một mô tả nghề tuyển dụng”, “một tạp chí ngành”). Điều luật chỉ từ bài: BLDS Điều 141, 143, 357, 393, 400, 404, 405; LTM Điều 34, 35, 39, 55, 301 (8%, đề nghị bãi bỏ, kỳ họp 10/2026). Cảnh ngắt nhịp: BRK-04 s04 (Ngày 1/Ngày 2), BRK-07 s11, DLG s16. Câu trích “Học ăn, học nói, học gói, học mở” mở/khép vòng. Câu đố questions[36]. Lưu ý chung (#133) ở tóm tắt + END.",
  "loop": {
    "open": "s00",
    "close": "s18"
  }
};
