// ielts-speaking-part-2-long-turn--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "ielts-speaking-part-2-long-turn--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "ielts-speaking-takers",
    "slug": "ielts-speaking-part-2-long-turn",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Part 2: nói đủ 2 phút về một chủ đề với 1 phút chuẩn bị thế nào?",
    "series": "IELTS Speaking tự nhiên — ba phần thi và bốn tiêu chí chấm cho thí sinh band 5.5–7"
  },
  "format": "W",
  "mode": "text",
  "narrator": "det",
  "presenter": {
    "side": "left"
  },
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
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
            "fit": [
              "a-p-box"
            ],
            "move": "cut",
            "zoom": 1.2
          },
          {
            "at": "l2:end",
            "fit": "A",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "a-p-box",
            "t": "box",
            "x": 60,
            "y": 110,
            "w": 740,
            "h": 520,
            "at": "l1:sheet",
            "stroke": 5
          },
          {
            "id": "a-p-v",
            "t": "line",
            "pts": [
              [
                430,
                126
              ],
              [
                430,
                614
              ]
            ],
            "at": "l1:cross"
          },
          {
            "id": "a-p-h",
            "t": "line",
            "pts": [
              [
                76,
                370
              ],
              [
                784,
                370
              ]
            ],
            "at": "l1:cross"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "?",
            "x": 210,
            "y": 210,
            "size": 90,
            "at": "l2:empty",
            "color": "muted"
          },
          {
            "id": "a-q2",
            "t": "text",
            "text": "?",
            "x": 570,
            "y": 210,
            "size": 90,
            "at": "l2:empty+150",
            "color": "muted"
          },
          {
            "id": "a-q3",
            "t": "text",
            "text": "?",
            "x": 210,
            "y": 470,
            "size": 90,
            "at": "l2:empty+300",
            "color": "muted"
          },
          {
            "id": "a-q4",
            "t": "text",
            "text": "?",
            "x": 570,
            "y": 470,
            "size": 90,
            "at": "l2:empty+450",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A blank sheet. One simple cross.",
          "sub": "Một tờ giấy trắng. Một dấu cộng đơn giản.",
          "keys": [
            "dấu cộng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Four empty boxes, and sixty seconds to fill them.",
          "sub": "Bốn ô trống, và sáu mươi giây để lấp đầy.",
          "keys": [
            "sáu mươi giây"
          ]
        }
      ],
      "ref": "p5"
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
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "memo",
                "pencil"
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
            "caption": "Chủ nhật 14:00 · quán nhóm",
            "icon": "memo"
          },
          {
            "id": "a-40",
            "t": "text",
            "text": "Nói 40 giây… hết chuyện",
            "x": 60,
            "y": 660,
            "size": 48,
            "at": "l3:forty",
            "color": "coral",
            "hl": [
              {
                "text": "40 giây",
                "at": "l3:forty"
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
          "say": "Sunday, two p.m., the group's café. Meet Thảo, twenty-seven, an office worker, holding a part two task card.",
          "sub": "Chủ nhật, hai giờ chiều, quán nhóm. Đây là Thảo, hai mươi bảy tuổi, nhân viên văn phòng, tay cầm thẻ đề Phần 2.",
          "keys": [
            "thẻ đề Phần 2"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Pencil ready, and my head is completely empty!",
          "sub": "Bút chì sẵn rồi, mà đầu óc trống trơn!",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The minute flies. She talks for about forty seconds, runs out, and sits there waiting.",
          "sub": "Một phút bay vèo. Cô nói được chừng bốn mươi giây thì hết chuyện, ngồi im chờ.",
          "keys": [
            "bốn mươi giây"
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
            "text": "Nói đủ 2 phút thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:two",
            "hl": [
              {
                "text": "2 phút",
                "at": "l1:two"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: viết câu ra nháp",
            "x": 2028,
            "y": 170,
            "size": 48,
            "at": "l2:sentences",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:sentences+300"
          },
          {
            "id": "b-y1",
            "t": "text",
            "text": "Mà là: bốn ô theo thẻ",
            "x": 2028,
            "y": 260,
            "size": 54,
            "at": "l3:four",
            "color": "accent",
            "hl": [
              {
                "text": "bốn ô",
                "at": "l3:four"
              }
            ]
          },
          {
            "id": "b-y2",
            "t": "text",
            "text": "từ khoá · từ nối",
            "x": 2088,
            "y": 345,
            "size": 50,
            "at": "l3:keywords"
          },
          {
            "id": "b-y3",
            "t": "text",
            "text": "hết ý → quay lại thẻ",
            "x": 2088,
            "y": 420,
            "size": 50,
            "at": "l4:card",
            "hl": [
              {
                "text": "quay lại thẻ",
                "at": "l4:back"
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
          "say": "So how do you speak for two minutes after one minute of preparation?",
          "sub": "Vậy làm sao nói đủ hai phút với một phút chuẩn bị?",
          "keys": [
            "nói đủ hai phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not by writing full sentences on your paper.",
          "sub": "Không phải bằng cách viết nguyên câu ra giấy."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But by splitting the paper into four boxes, writing keywords, and linking each point in order.",
          "sub": "Mà là chia giấy thành bốn ô theo thẻ, ghi từ khoá, nói lần lượt từng ý bằng từ nối.",
          "keys": [
            "bốn ô theo thẻ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And when ideas run out, go back to the card. Don't stop.",
          "sub": "Hết ý thì quay lại thẻ để mở rộng, đừng dừng.",
          "keys": [
            "quay lại thẻ"
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
            "id": "b-k1",
            "t": "text",
            "text": "3–4 phút, cả chuẩn bị",
            "x": 2928,
            "y": 170,
            "size": 48,
            "at": "l1:three",
            "color": "accent",
            "hl": [
              {
                "text": "3–4 phút",
                "at": "l1:three"
              }
            ]
          },
          {
            "id": "b-k2",
            "t": "text",
            "text": "Thẻ đề · bút chì · giấy",
            "x": 2928,
            "y": 260,
            "size": 46,
            "at": "l1:card"
          },
          {
            "id": "b-k3",
            "t": "text",
            "text": "1 phút chuẩn bị → nói ~2 phút",
            "x": 2928,
            "y": 350,
            "size": 42,
            "at": "l2:minute",
            "hl": [
              {
                "text": "~2 phút",
                "at": "l2:two"
              }
            ]
          },
          {
            "id": "b-k4",
            "t": "text",
            "text": "British Council: 1–2 phút",
            "x": 2928,
            "y": 430,
            "size": 40,
            "at": "l2:one to two",
            "color": "muted"
          },
          {
            "id": "b-k5",
            "t": "text",
            "text": "Hết giờ: dừng + 1–2 câu hỏi",
            "x": 2928,
            "y": 510,
            "size": 42,
            "at": "l3:stops"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: IELTS.org — Speaking; British Council — Speaking test format",
            "x": 2028,
            "y": 720,
            "size": 28,
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
          "say": "IELTS dot org: part two takes three to four minutes, with a task card, a pencil and paper.",
          "sub": "Theo IELTS.org, Phần 2 dài ba đến bốn phút, có thẻ đề, bút chì và giấy.",
          "keys": [
            "ba đến bốn phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One minute to prepare and make notes, then about two minutes of talk. British Council says one to two.",
          "sub": "Một phút chuẩn bị, ghi chú, rồi nói khoảng hai phút. British Council ghi là một đến hai phút.",
          "keys": [
            "Một phút chuẩn bị"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "When time is up, the examiner stops you and may ask one or two questions on the topic.",
          "sub": "Hết giờ, giám khảo dừng bạn lại, có thể hỏi thêm một hai câu cùng chủ đề."
        }
      ],
      "ref": "p1"
    },
    {
      "id": "s04",
      "module": "BRK-08",
      "data": {
        "title": "Chiều Chủ nhật ở quán nhóm",
        "points": [
          {
            "label": "14:15",
            "sub": "Thẻ bốn ý",
            "illus": "memo"
          },
          {
            "label": "14:30",
            "sub": "Ghi chú",
            "illus": "pencil"
          },
          {
            "label": "14:50",
            "sub": "Kể trình tự",
            "illus": "link"
          },
          {
            "label": "15:20",
            "sub": "Hết ý",
            "illus": "zipper-mouth-face"
          },
          {
            "label": "16:00",
            "sub": "Bấm giờ",
            "illus": "stopwatch"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One Sunday afternoon, five stops.",
          "sub": "Một chiều Chủ nhật, năm chặng.",
          "keys": [
            "Một chiều Chủ nhật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Card on the table. Go.",
          "sub": "Thẻ đề trên bàn. Bắt đầu."
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
            "text": "① 14:15 · Thẻ có 4 ý",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one",
            "hl": [
              {
                "text": "4 ý",
                "at": "l4:four"
              }
            ]
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "give"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "memo",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Sam",
            "caption": "14:15 · Sam đưa thẻ luyện",
            "icon": "memo"
          },
          {
            "id": "c-0",
            "t": "text",
            "text": "a skill you learned outside school",
            "x": 3996,
            "y": 170,
            "size": 36,
            "at": "l2:skill",
            "color": "accent"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "• what · • when, where",
            "x": 3996,
            "y": 235,
            "size": 40,
            "at": "l3:what"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "• how · + explain why",
            "x": 3996,
            "y": 300,
            "size": 40,
            "at": "l3:explain"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Chủ đề + 3 gạch + câu cuối",
            "x": 3996,
            "y": 380,
            "size": 44,
            "at": "l4:three",
            "hl": [
              {
                "text": "câu cuối",
                "at": "l4:final"
              }
            ]
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Câu cuối: giải thích một khía cạnh",
            "x": 3996,
            "y": 450,
            "size": 36,
            "at": "l5:explain"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: IDP — long turn Part 2; IELTS.org",
            "x": 3996,
            "y": 720,
            "size": 28,
            "at": "l4",
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
          "say": "Stop one, two fifteen. Meet Sam, the group's native English teacher, playing examiner.",
          "sub": "Chặng một, hai giờ mười lăm. Đây là Sam, cô giáo bản ngữ của nhóm, đóng vai giám khảo.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Describe a skill you learned outside school.",
          "sub": "Hãy tả một kỹ năng em học được ngoài trường lớp.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Say what it is, when and where, how you learned it, and explain why it's useful.",
          "sub": "Nói đó là gì, học khi nào, ở đâu, học thế nào, và giải thích vì sao nó có ích."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "IDP: a topic, three bullet points and a final question. So there are always four things to say.",
          "sub": "IDP: một chủ đề, ba gạch đầu dòng và một câu cuối. Nên lúc nào cũng có bốn ý để nói.",
          "keys": [
            "bốn ý để nói"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "IELTS dot org adds: the final point usually asks you to explain one aspect. It tests speaking at length.",
          "sub": "IELTS.org thêm: câu cuối thường bảo bạn giải thích một khía cạnh. Phần này kiểm tra khả năng nói dài.",
          "keys": [
            "nói dài"
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
      "ref": "p2"
    },
    {
      "id": "s06",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "Chủ nhật 14:20 · Phần 2",
        "actors": [
          {
            "id": "sam",
            "side": "left"
          },
          {
            "id": "thao",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Chạy cho xong bốn ý",
          "why": "Mục tiêu là nói liên tục đến khi giám khảo dừng; bị ngắt giữa câu là bình thường.",
          "rule": "Nói đến khi giám khảo dừng"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Swimming, age twelve, my uncle, it's healthy. Done! All four points!",
          "sub": "Bơi, mười hai tuổi, chú dạy, tốt cho sức khoẻ. Xong! Đủ bốn ý!",
          "face": "happy",
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
          "say": "Four points in ten seconds isn't the goal. Keep talking until the examiner stops you.",
          "sub": "Đủ bốn ý trong mười giây không phải mục tiêu. Cứ nói đến khi giám khảo dừng.",
          "keys": [
            "nói đến khi giám khảo dừng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "IDP says being cut off mid-sentence is normal. And covering only two points still shows you can speak at length.",
          "sub": "IDP nói bị ngắt giữa câu là chuyện bình thường. Mới kịp hai ý vẫn cho thấy bạn nói dài được.",
          "keys": [
            "bị ngắt giữa câu là chuyện bình thường"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! This time, use the minute well.",
          "sub": "Tua lại! Lần này, dùng một phút cho đáng.",
          "phase": "redo"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 14:30 · Ghi chú 1 phút",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-p-box",
            "t": "box",
            "x": 5964,
            "y": 150,
            "w": 1608,
            "h": 470,
            "at": "l1:cross",
            "stroke": 5
          },
          {
            "id": "d-p-v",
            "t": "line",
            "pts": [
              [
                6768,
                166
              ],
              [
                6768,
                604
              ]
            ],
            "at": "l1:cross+300"
          },
          {
            "id": "d-p-h",
            "t": "line",
            "pts": [
              [
                5980,
                385
              ],
              [
                7556,
                385
              ]
            ],
            "at": "l1:cross+300"
          },
          {
            "id": "d-n1",
            "t": "text",
            "text": "swim",
            "x": 6014,
            "y": 190,
            "size": 52,
            "at": "l3:swim",
            "color": "accent"
          },
          {
            "id": "d-n2",
            "t": "text",
            "text": "summer, age 12, pool near home",
            "x": 6824,
            "y": 190,
            "size": 40,
            "at": "l3:summer"
          },
          {
            "id": "d-n3",
            "t": "text",
            "text": "uncle taught, scared of water",
            "x": 6014,
            "y": 410,
            "size": 38,
            "at": "l4:uncle"
          },
          {
            "id": "d-n3b",
            "t": "text",
            "text": "3 weeks, every evening",
            "x": 6014,
            "y": 470,
            "size": 38,
            "at": "l4:weeks"
          },
          {
            "id": "d-n4",
            "t": "text",
            "text": "healthy, safe at beach",
            "x": 6824,
            "y": 410,
            "size": 38,
            "at": "l4:healthy"
          },
          {
            "id": "d-n4b",
            "t": "text",
            "text": "now teach my sister",
            "x": 6824,
            "y": 470,
            "size": 38,
            "at": "l4:sister"
          },
          {
            "id": "d-20",
            "t": "text",
            "text": "≈ 20 chữ, đủ cho 2 phút",
            "x": 5964,
            "y": 660,
            "size": 46,
            "at": "l5:twenty",
            "color": "accent",
            "hl": [
              {
                "text": "≈ 20 chữ",
                "at": "l5:twenty"
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
          "say": "Stop two, two thirty. IDP's tip: one cross divides the paper in seconds. One box per point.",
          "sub": "Chặng hai, hai rưỡi. Mẹo của IDP: một dấu cộng chia tờ giấy chỉ trong vài giây. Mỗi ô một ý.",
          "keys": [
            "Mỗi ô một ý"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Keywords, not sentences. Spelling doesn't matter. Abbreviations and symbols are fine.",
          "sub": "Ghi từ khoá, không viết câu. Sai chính tả không sao, viết tắt, ký hiệu đều được.",
          "keys": [
            "Ghi từ khoá, không viết câu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Box one: swim. Box two: summer, age twelve, the pool near home.",
          "sub": "Ô một: bơi. Ô hai: mùa hè, mười hai tuổi, bể bơi gần nhà.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Box three: uncle taught, scared of water, three weeks. Box four: healthy, safe, teach my sister.",
          "sub": "Ô ba: chú dạy, sợ nước, ba tuần. Ô bốn: khoẻ, an toàn, giờ dạy em gái.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "About twenty words, yet enough for two minutes. Names, dates, examples: that's your material.",
          "sub": "Chỉ khoảng hai chục chữ, mà đủ cho hai phút. Tên, ngày tháng, ví dụ là chất liệu để kể.",
          "keys": [
            "hai chục chữ"
          ]
        }
      ],
      "ref": "p5,p6"
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
            "id": "d-k",
            "t": "text",
            "text": "Ghi chú = từ khoá + chi tiết",
            "x": 6804,
            "y": 660,
            "size": 44,
            "at": "l1:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "từ khoá + chi tiết",
                "at": "l1:keywords"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: IDP — IELTS Speaking long turn Part 2",
            "x": 5964,
            "y": 128,
            "size": 28,
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
          "say": "Takeaway: notes are keywords and details for each point, not a mini essay.",
          "sub": "Rút ra: ghi chú là từ khoá và chi tiết cho từng ý, không phải bài văn thu nhỏ.",
          "keys": [
            "không phải bài văn thu nhỏ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And keep writing until the examiner says start.",
          "sub": "Và cứ ghi tiếp cho đến khi giám khảo bảo bắt đầu."
        }
      ],
      "ref": "p7,p5"
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
            "at": "l2",
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
            "text": "③ 14:50 · Kể có trình tự",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three"
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
                  "id": "sam",
                  "side": "left"
                },
                {
                  "id": "thao",
                  "side": "right",
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
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Stop three",
            "caption": "14:50 · nói lại từ đầu",
            "icon": "memo"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Mở: nói lại chủ đề",
            "x": 7932,
            "y": 170,
            "size": 48,
            "at": "l1:paraphrasing",
            "hl": [
              {
                "text": "nói lại chủ đề",
                "at": "l1:paraphrasing"
              }
            ]
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "cái gì → khi nào, ở đâu",
            "x": 7932,
            "y": 260,
            "size": 44,
            "at": "l4:what"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "→ thế nào → vì sao",
            "x": 7972,
            "y": 330,
            "size": 44,
            "at": "l4:why"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "and · so · but · however",
            "x": 7932,
            "y": 420,
            "size": 44,
            "at": "l5:however",
            "color": "accent",
            "hl": [
              {
                "text": "so",
                "at": "l5:so"
              }
            ]
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "for example",
            "x": 7972,
            "y": 490,
            "size": 44,
            "at": "l5:example"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, ten to three. IDP: open by paraphrasing the topic, then move through the points in order.",
          "sub": "Chặng ba, ba giờ kém mười. IDP khuyên mở đầu bằng cách nói lại chủ đề, rồi đi lần lượt từng ý.",
          "keys": [
            "nói lại chủ đề"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'd like to talk about a skill I picked up outside school, which is swimming.",
          "sub": "Em muốn kể về một kỹ năng em học ngoài trường lớp, đó là bơi.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I learned it the summer I was twelve, at a public pool not far from my house.",
          "sub": "Em học bơi vào mùa hè năm mười hai tuổi, ở bể bơi công cộng gần nhà."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The card's order is already a good path: what, when and where, how, why.",
          "sub": "Thứ tự trên thẻ đã là một trình tự tốt: cái gì, khi nào và ở đâu, như thế nào, vì sao.",
          "keys": [
            "trình tự tốt"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Simple linkers like and, so, but, however, for example help the examiner see your structure.",
          "sub": "Từ nối đơn giản như and, so, but, however, for example giúp giám khảo thấy bố cục.",
          "keys": [
            "thấy bố cục"
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
            "fit": "E",
            "move": "cut"
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
            "at": "l3",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-6",
            "t": "text",
            "text": "Chuyện cũ: quá khứ",
            "x": 7932,
            "y": 580,
            "size": 44,
            "at": "l3:past"
          },
          {
            "id": "e-7",
            "t": "text",
            "text": "Bây giờ: hiện tại",
            "x": 8392,
            "y": 580,
            "size": 44,
            "at": "l4:Now",
            "color": "accent",
            "hl": [
              {
                "text": "hiện tại",
                "at": "l4:Now"
              }
            ]
          },
          {
            "id": "e-8",
            "t": "text",
            "text": "“Now I swim twice a week…”",
            "x": 7932,
            "y": 660,
            "size": 44,
            "at": "l4:twice"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: IDP — IELTS Speaking long turn Part 2",
            "x": 7932,
            "y": 128,
            "size": 28,
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
          "who": "thao",
          "say": "To be honest, I was terrified of water at first, so my uncle had to be very patient with me.",
          "sub": "Thú thật, lúc đầu em sợ nước lắm, nên chú phải rất kiên nhẫn với em.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sentence one restates the topic, the next answers point two, and “so” leads into how she learned.",
          "sub": "Câu đầu nói lại chủ đề, câu sau trả lời ý hai, và chữ “so” dẫn sang cách học.",
          "keys": [
            "“so” dẫn sang cách học"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Watch the tense. The learning happened in the past.",
          "sub": "Để ý thì. Chuyện học bơi đã xảy ra trong quá khứ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Now I swim twice a week, and I'm teaching my little sister.",
          "sub": "Giờ em bơi tuần hai buổi, và đang dạy em gái.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The final point, why it's useful today, moves to the present.",
          "sub": "Câu cuối, vì sao có ích bây giờ, chuyển sang hiện tại.",
          "keys": [
            "chuyển sang hiện tại"
          ]
        }
      ],
      "ref": "p9,p10"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Mới một phút đã hết chuyện: dừng, hay nói tiếp?",
        "illus": "zipper-mouth-face"
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
          "say": "One minute in, and you run dry. Stop, or keep going?",
          "sub": "Mới một phút đã hết chuyện. Dừng, hay nói tiếp?",
          "keys": [
            "Dừng, hay nói tiếp"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
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
            "text": "④ 15:20 · Hết ý",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "face": "neutral"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "memo"
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
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "15:20 · cùng thẻ, phút thứ nhất",
            "icon": "memo"
          },
          {
            "id": "f-d",
            "t": "text",
            "text": "Dũng: “That's all.” → im",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l2:all",
            "color": "coral"
          },
          {
            "id": "f-s",
            "t": "text",
            "text": "Thảo: liếc ô cuối",
            "x": 60,
            "y": 1350,
            "size": 46,
            "at": "l3:glances"
          },
          {
            "id": "f-s2",
            "t": "text",
            "text": "“What else can I say…?”",
            "x": 100,
            "y": 1425,
            "size": 44,
            "at": "l4:else",
            "color": "accent",
            "hl": [
              {
                "text": "What else",
                "at": "l4:else"
              }
            ]
          },
          {
            "id": "f-s3",
            "t": "text",
            "text": "+ gần một phút nữa",
            "x": 100,
            "y": 1500,
            "size": 46,
            "at": "l5:minute",
            "color": "accent",
            "hl": [
              {
                "text": "gần một phút",
                "at": "l5:nearly"
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
          "say": "Stop four, three twenty. Meet Dũng, Thảo's cousin, a biology student. Same card. Both run dry after a minute.",
          "sub": "Chặng bốn, ba giờ hai mươi. Đây là Dũng, em họ Thảo, sinh viên sinh học. Cùng thẻ, cả hai cạn ý sau một phút.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "That's all.",
          "sub": "Hết rồi ạ.",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Dũng sits in silence. Thảo glances at her last box.",
          "sub": "Dũng ngồi im. Thảo liếc lại ô ghi chú cuối."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "What else can I say about that? Well, learning it also changed how I deal with fear.",
          "sub": "Còn gì để nói nữa nhỉ? À, học bơi còn thay đổi cách em đối mặt với nỗi sợ.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "She adds a time she used the skill, and keeps going for nearly another minute.",
          "sub": "Cô kể thêm một lần dùng kỹ năng ấy, và nói thêm được gần một phút.",
          "keys": [
            "gần một phút"
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
      "ref": "p12"
    },
    {
      "id": "s13",
      "module": "BRK-04",
      "data": {
        "title": "Phút thứ nhất, hết ý",
        "labels": [
          "Dừng",
          "Mở rộng"
        ],
        "wrong": "“That's all.” rồi ngồi im",
        "right": "Quay lại ghi chú, thêm ví dụ, cảm nghĩ",
        "wrongIllus": "zipper-mouth-face",
        "rightIllus": "memo"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Close the talk yourself?",
          "sub": "Tự kết thúc sớm?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Go back to your notes, and expand one point.",
          "sub": "Quay lại ghi chú, mở rộng một ý đã nói.",
          "keys": [
            "mở rộng một ý"
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
          }
        ],
        "items": [
          {
            "id": "f-1",
            "t": "text",
            "text": "Nhìn thẻ, nói lại một gợi ý",
            "x": 60,
            "y": 1600,
            "size": 40,
            "at": "l1:card"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "“let me think”, không “eh, er”",
            "x": 60,
            "y": 1660,
            "size": 40,
            "at": "l2:think"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Thở giữa các câu",
            "x": 60,
            "y": 1720,
            "size": 40,
            "at": "l2:breathe"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "“Còn gì nữa không?” → còn!",
            "x": 60,
            "y": 1780,
            "size": 40,
            "at": "l3:yes",
            "color": "accent",
            "hl": [
              {
                "text": "còn!",
                "at": "l3:yes"
              }
            ]
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "Câu hỏi thêm: ngắn như Phần 1",
            "x": 900,
            "y": 1780,
            "size": 36,
            "at": "l4:short",
            "color": "muted"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: IDP — IELTS Speaking long turn Part 2",
            "x": 60,
            "y": 1218,
            "size": 28,
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
          "say": "IDP's other tricks: look back at the card, and paraphrase a prompt to open it up.",
          "sub": "Mẹo khác của IDP: nhìn lại thẻ đề, diễn đạt lại một gợi ý để mở thêm.",
          "keys": [
            "nhìn lại thẻ đề"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Say “let me think” instead of “eh” or “er”. And breathe between sentences.",
          "sub": "Nói “let me think” thay cho “eh”, “er”. Và thở giữa các câu cho bình tĩnh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "If the examiner asks whether there's anything more, say yes, and carry on.",
          "sub": "Giám khảo hỏi còn gì nữa không, hãy đáp là còn, và nói tiếp.",
          "keys": [
            "đáp là còn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "After you stop, one or two short follow-ups. Answer like part one: a direct answer and a reason.",
          "sub": "Sau khi dừng, có thể có một hai câu hỏi ngắn. Đáp như Phần 1: trả lời thẳng kèm một lý do."
        }
      ],
      "ref": "p11,p14"
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
            "text": "⑤ 16:00 · Bấm giờ 3 phút",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five",
            "hl": [
              {
                "text": "3 phút",
                "at": "l2:three"
              }
            ]
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
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "stopwatch",
                "memo"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
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
            "at": "l1:Lan",
            "caption": "16:00 · đồng hồ 3 phút",
            "icon": "stopwatch"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "1' ghi chú + 2' nói",
            "x": 2028,
            "y": 1260,
            "size": 56,
            "at": "l2:one",
            "color": "accent",
            "hl": [
              {
                "text": "2' nói",
                "at": "l2:two"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Ghi âm → nghe ngập ngừng,",
            "x": 2028,
            "y": 1355,
            "size": 44,
            "at": "l2:record"
          },
          {
            "id": "g-2b",
            "t": "text",
            "text": "dừng lâu, từ đệm",
            "x": 2068,
            "y": 1420,
            "size": 44,
            "at": "l2:fillers"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Lan: 10 thẻ, mỗi lần ~1 phút",
            "x": 2028,
            "y": 1510,
            "size": 42,
            "at": "l3:ten",
            "color": "coral"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Mỗi ô… chỉ một câu",
            "x": 2028,
            "y": 1585,
            "size": 46,
            "at": "l4:sentence",
            "color": "coral",
            "hl": [
              {
                "text": "một câu",
                "at": "l4:sentence"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: IDP — IELTS Speaking long turn Part 2",
            "x": 2028,
            "y": 1810,
            "size": 28,
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
          "say": "Stop five, four p.m. Meet Lan, a friend from the study group, with a stopwatch.",
          "sub": "Chặng năm, bốn giờ chiều. Đây là Lan, bạn trong nhóm tự học, cầm đồng hồ bấm giờ.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "IDP: set three minutes, one for notes, two for talking. Record, and listen for hesitations, long pauses, fillers.",
          "sub": "IDP khuyên đặt đồng hồ ba phút: một phút ghi chú, hai phút nói. Ghi âm, nghe chỗ ngập ngừng, dừng lâu, từ đệm.",
          "keys": [
            "ba phút"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "I've done ten cards. Full notes, but I always stop at about one minute.",
          "sub": "Mình luyện mười thẻ rồi. Ghi chú kín cả, mà lần nào cũng chỉ nói được chừng một phút.",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Listening back, she hears it: each box gets just one sentence.",
          "sub": "Nghe lại, Lan nhận ra: mỗi ô cô chỉ nói đúng một câu.",
          "keys": [
            "chỉ nói đúng một câu"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "ref": "p15,p16"
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
            "id": "g-5",
            "t": "text",
            "text": "Mỗi ô 3 câu:",
            "x": 2028,
            "y": 1670,
            "size": 48,
            "at": "l1:three"
          },
          {
            "id": "g-6",
            "t": "text",
            "text": "ý · chi tiết · cảm nghĩ",
            "x": 2348,
            "y": 1670,
            "size": 46,
            "at": "l1:feeling",
            "color": "accent",
            "hl": [
              {
                "text": "cảm nghĩ",
                "at": "l1:feeling"
              }
            ]
          },
          {
            "id": "g-ca",
            "t": "text",
            "text": "“Có công mài sắt…”",
            "x": 2028,
            "y": 1755,
            "size": 44,
            "at": "l4:needle",
            "hl": [
              {
                "text": "mài sắt",
                "at": "l4:needle"
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
          "say": "The fix: three sentences per box. One idea, one detail or example, one feeling.",
          "sub": "Cách sửa: mỗi ô ba câu. Một câu nêu ý, một câu chi tiết hay ví dụ, một câu cảm nghĩ.",
          "keys": [
            "mỗi ô ba câu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Four boxes, three sentences each. That's almost two minutes!",
          "sub": "Bốn ô, mỗi ô ba câu. Thế là gần đủ hai phút!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Practise until you speak a full two minutes at a normal pace.",
          "sub": "Luyện đến khi nói trọn hai phút ở tốc độ bình thường."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our saying: grind iron long enough, and one day it's a needle.",
          "sub": "Ông bà nói: “Có công mài sắt, có ngày nên kim.”",
          "keys": [
            "Có công mài sắt, có ngày nên kim"
          ]
        }
      ],
      "ref": "p16,p17,p15"
    },
    {
      "id": "s17",
      "module": "BRK-03",
      "data": {
        "value": 12,
        "suffix": " câu",
        "label": "4 ô × 3 câu có chi tiết ≈ gần 2 phút",
        "illus": "stopwatch"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Four boxes, three sentences each.",
          "sub": "Bốn ô, mỗi ô ba câu."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Twelve sentences with details: close to two minutes.",
          "sub": "Mười hai câu có chi tiết: gần hai phút.",
          "keys": [
            "gần hai phút"
          ]
        }
      ],
      "ref": "p16"
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 16:30 · Thẻ tự luyện",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six"
          },
          {
            "id": "h-i1",
            "t": "illus",
            "name": "busts-in-silhouette",
            "x": 4006,
            "y": 1260,
            "size": 80,
            "at": "l2:crowded"
          },
          {
            "id": "h-c1",
            "t": "text",
            "text": "a place you visited that was crowded",
            "x": 4116,
            "y": 1280,
            "size": 40,
            "at": "l2:crowded+200"
          },
          {
            "id": "h-i2",
            "t": "illus",
            "name": "handshake",
            "x": 4006,
            "y": 1370,
            "size": 80,
            "at": "l2:helped"
          },
          {
            "id": "h-c2",
            "t": "text",
            "text": "a time you helped a stranger",
            "x": 4116,
            "y": 1390,
            "size": 40,
            "at": "l2:helped+200"
          },
          {
            "id": "h-i3",
            "t": "illus",
            "name": "mobile-phone",
            "x": 4006,
            "y": 1480,
            "size": 80,
            "at": "l2:technology"
          },
          {
            "id": "h-c3",
            "t": "text",
            "text": "technology you use every day",
            "x": 4116,
            "y": 1500,
            "size": 40,
            "at": "l2:technology+200"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "Thêm: gì · khi, đâu · thế nào",
            "x": 3996,
            "y": 1610,
            "size": 40,
            "at": "l3:bullet"
          },
          {
            "id": "h-b2",
            "t": "text",
            "text": "+ câu cuối: vì sao?",
            "x": 4036,
            "y": 1675,
            "size": 46,
            "at": "l3:why",
            "color": "accent",
            "hl": [
              {
                "text": "vì sao",
                "at": "l3:why"
              }
            ]
          },
          {
            "id": "h-o",
            "t": "text",
            "text": "Rồi: giáo dục, giao thông…",
            "x": 3996,
            "y": 1755,
            "size": 40,
            "at": "l4:education",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, half past four. Three practice cards for this week.",
          "sub": "Chặng sáu, bốn rưỡi. Ba thẻ tự luyện cho tuần này.",
          "keys": [
            "Ba thẻ tự luyện"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A crowded place you visited. A time you helped someone you didn't know. A piece of technology you use every day.",
          "sub": "Một nơi đông người bạn từng đến. Một lần giúp người lạ. Một món công nghệ bạn dùng hằng ngày."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "For each, add three bullet points, what, when or where, how, and a final question asking why.",
          "sub": "Mỗi thẻ, tự thêm ba gạch: cái gì, khi nào hay ở đâu, như thế nào, và một câu cuối hỏi vì sao.",
          "keys": [
            "câu cuối hỏi vì sao"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "After those, IDP suggests making your own cards: education, transport, health, history.",
          "sub": "Xong ba thẻ, IDP gợi ý tự làm thẻ đề: giáo dục, giao thông, sức khoẻ, lịch sử."
        }
      ],
      "ref": "p18,p15"
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "17:00 · Cùng bàn ấy",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Five"
          },
          {
            "id": "i-p-box",
            "t": "box",
            "x": 5964,
            "y": 1250,
            "w": 780,
            "h": 360,
            "at": "l1:sheet",
            "stroke": 5
          },
          {
            "id": "i-p-v",
            "t": "line",
            "pts": [
              [
                6354,
                1266
              ],
              [
                6354,
                1594
              ]
            ],
            "at": "l1:sheet+300"
          },
          {
            "id": "i-p-h",
            "t": "line",
            "pts": [
              [
                5980,
                1430
              ],
              [
                6728,
                1430
              ]
            ],
            "at": "l1:sheet+300"
          },
          {
            "id": "i-n1",
            "t": "text",
            "text": "phone",
            "x": 6004,
            "y": 1280,
            "size": 40,
            "at": "l2:phone",
            "color": "accent"
          },
          {
            "id": "i-n2",
            "t": "text",
            "text": "bus, office",
            "x": 6374,
            "y": 1280,
            "size": 36,
            "at": "l2:bus"
          },
          {
            "id": "i-n3",
            "t": "text",
            "text": "maps, notes",
            "x": 6004,
            "y": 1460,
            "size": 36,
            "at": "l2:maps"
          },
          {
            "id": "i-n4",
            "t": "text",
            "text": "saves time",
            "x": 6374,
            "y": 1460,
            "size": 36,
            "at": "l2:saves"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "memo",
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Five",
            "caption": "17:00 · thẻ “technology”",
            "icon": "mobile-phone"
          },
          {
            "id": "i-ok",
            "t": "text",
            "text": "Nói đến khi giám khảo dừng ✓",
            "x": 5964,
            "y": 1660,
            "size": 44,
            "at": "l3:Thank",
            "color": "accent",
            "hl": [
              {
                "text": "✓",
                "at": "l3:Thank"
              }
            ]
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "Mài sắt… đã thành kim",
            "x": 5964,
            "y": 1750,
            "size": 46,
            "at": "l5:needle",
            "hl": [
              {
                "text": "thành kim",
                "at": "l5:needle"
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
          "say": "Five p.m. Same table, same kind of sheet. This time, all four boxes are full.",
          "sub": "Năm giờ chiều. Vẫn bàn ấy, vẫn tờ nháp ấy. Lần này, bốn ô đầy cả.",
          "keys": [
            "bốn ô đầy cả"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "My phone, on the bus and at the office, for maps and notes. Honestly, it saves me so much time…",
          "sub": "Điện thoại của em, dùng trên xe buýt và ở công ty, để xem bản đồ, ghi chú. Thật lòng, nó giúp em tiết kiệm bao nhiêu thời gian…",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Thank you. That's the end of part two.",
          "sub": "Cảm ơn em. Phần 2 kết thúc ở đây.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Stopped mid-sentence, by the examiner, not by an empty head.",
          "sub": "Bị dừng giữa câu, bởi giám khảo, chứ không phải vì đầu trống.",
          "keys": [
            "bởi giám khảo"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The iron is turning into a needle.",
          "sub": "Sắt đang thành kim rồi đấy.",
          "keys": [
            "thành kim"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "I said it!",
          "sub": "Nói ra rồi!",
          "face": "happy"
        }
      ],
      "ref": "p4,p13"
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
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tóm lại: bốn ô, nói tiếp",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:So"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Làm ngay: đồng hồ 3 phút",
            "x": 7932,
            "y": 1290,
            "size": 50,
            "at": "l5:Try",
            "hl": [
              {
                "text": "3 phút",
                "at": "l5:three"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "một thẻ tự luyện, ghi âm",
            "x": 7972,
            "y": 1375,
            "size": 46,
            "at": "l5:card"
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Bài tiếp: Phần 3, thảo luận",
            "x": 7932,
            "y": 1480,
            "size": 48,
            "at": "l6:Next",
            "color": "accent"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 7504,
            "y": 30,
            "at": "l2:boxes"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9472,
            "y": 30,
            "at": "l3:order"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1600,
            "y": 1120,
            "at": "l4:card"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi học; cấu trúc đề, quy định thi có thể đổi — kiểm lại trang chính thức IELTS. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1810,
            "size": 28,
            "at": "l6:end",
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
          "say": "So, part two: one minute to prepare, about two minutes to talk.",
          "sub": "Tóm lại, Phần 2: một phút chuẩn bị, khoảng hai phút nói.",
          "keys": [
            "khoảng hai phút nói"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: four boxes, keywords and details.",
          "sub": "Một: bốn ô, từ khoá và chi tiết."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: tell it in order, with linking words.",
          "sub": "Hai: kể theo thứ tự, có từ nối."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: run dry? Back to the card, and expand.",
          "sub": "Ba: hết ý? Quay lại thẻ, mở rộng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: a three-minute timer and one practice card. Record it, and count your sentences per box.",
          "sub": "Làm ngay: đặt đồng hồ ba phút, một thẻ tự luyện. Ghi âm, đếm số câu mỗi ô.",
          "keys": [
            "đồng hồ ba phút"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next up: part three, discussing abstract ideas clearly.",
          "sub": "Bài tiếp theo: Phần 3, thảo luận ý kiến trừu tượng cho mạch lạc.",
          "keys": [
            "Phần 3"
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
        "q": "What should Yen change in her practice?",
        "options": [
          "Say three sentences for each box, an idea, a detail and a feeling",
          "Speak more slowly so that each sentence takes twice as long",
          "Write a full script in the minute and read it aloud word for word"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "memo",
        "why": "Lời giải là mỗi ô nói ba câu: ý, chi tiết, cảm nghĩ. Bốn ô như vậy gần đủ 2 phút."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What should Yen change in her practice?",
          "sub": "Yến nên thay đổi gì khi luyện?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Say three sentences for each box, an idea, a detail and a feeling.",
          "sub": "Mỗi ô ba câu: một ý, một chi tiết, một cảm nghĩ."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Four boxes, three sentences, two minutes.",
          "sub": "Bốn ô, ba câu, hai phút."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[34]"
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
          "say": "One cross, four boxes, keep talking. Then try the forty questions below.",
          "sub": "Một dấu cộng, bốn ô, nói đến hết giờ. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT CHIỀU CHỦ NHẬT ở quán nhóm (14:00 thẻ đề, đầu trống, 40 giây → 14:15 Sam đưa thẻ bốn ý + “Khoan đã!” chạy cho xong bốn ý → 14:30 tờ nháp bốn ô từ khoá → 14:50 kể có trình tự, đổi thì → 15:20 hết ý: Dũng vai Trâm, Thảo vai Sơn → 16:00 bấm giờ 3 phút, Lan vai Yến → 16:30 ba thẻ tự luyện → 17:00 bốn ô đầy, khép vòng). Mở HOOK-23 (đồ vật: tờ nháp chia dấu cộng). Nhân vật: Thảo, Sam, Dũng, Lan — w145/_series/ielts-speaking-takers.md. Cảnh ngắt nhịp: BRK-08 (chiều Chủ nhật), BRK-07 (rehook hết ý), BRK-04 (dừng / mở rộng), BRK-03 (12 câu ≈ 2 phút). Tục ngữ: “Có công mài sắt, có ngày nên kim”. Câu đố questions[34].",
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
