// high-frequency-words-first--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "high-frequency-words-first--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "beginner-vocabulary-learners",
    "slug": "high-frequency-words-first",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Vì sao nên học 1.000 từ thông dụng nhất trước và lấy chúng ở đâu?",
    "series": "Học từ vựng không quên — cách chọn từ, ghi nhớ và dùng được, cho người mới học ngoại ngữ"
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
            "fit": "A",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "a-q",
            "t": "text",
            "text": "100 từ thông dụng nhất = ?",
            "x": 60,
            "y": 60,
            "size": 64,
            "at": "l1:hundred",
            "hl": [
              {
                "text": "100 từ",
                "at": "l1:hundred"
              }
            ]
          },
          {
            "id": "a-q2",
            "t": "text",
            "text": "… bao nhiêu phần một trang?",
            "x": 60,
            "y": 160,
            "size": 54,
            "at": "l1:page"
          },
          {
            "id": "a-b1",
            "t": "box",
            "x": 120,
            "y": 280,
            "w": 420,
            "h": 200,
            "at": "l2:Five",
            "stroke": 6
          },
          {
            "id": "a-5",
            "t": "text",
            "text": "5%",
            "x": 230,
            "y": 300,
            "size": 130,
            "at": "l2:Five"
          },
          {
            "id": "a-b2",
            "t": "box",
            "x": 700,
            "y": 280,
            "w": 420,
            "h": 200,
            "at": "l2:fifty",
            "stroke": 6
          },
          {
            "id": "a-50",
            "t": "text",
            "text": "50%",
            "x": 770,
            "y": 300,
            "size": 130,
            "at": "l2:fifty"
          },
          {
            "id": "a-5x",
            "t": "strike",
            "over": "a-5",
            "at": "l4:Not"
          },
          {
            "id": "a-r",
            "t": "ring",
            "around": [
              "a-50"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l4:about half"
          },
          {
            "id": "a-half",
            "t": "text",
            "text": "≈ một nửa trang!",
            "x": 1200,
            "y": 330,
            "size": 60,
            "at": "l4:half",
            "color": "accent",
            "hl": [
              {
                "text": "một nửa",
                "at": "l4:half"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: Paul Nation (2014), What do you need to know to learn a foreign language? — ĐH Victoria Wellington",
            "x": 60,
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
          "say": "Quick guess. The hundred most common English words: how much of a page do they fill?",
          "sub": "Đoán nhanh: một trăm từ tiếng Anh thông dụng nhất chiếm bao nhiêu phần một trang?",
          "keys": [
            "một trăm từ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Five percent? Or fifty?",
          "sub": "Năm phần trăm? Hay năm mươi?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Most people pick five. A hundred tiny words can't do much, right?",
          "sub": "Đa số chọn năm. Trăm từ bé tí thì làm được gì, đúng không?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not five. About half the page.",
          "sub": "Không phải năm. Khoảng một nửa trang.",
          "keys": [
            "một nửa trang"
          ]
        }
      ],
      "beats": {
        "after": 300
      },
      "ref": "p1,p2"
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
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "newspaper",
                "orange-book"
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
            "at": "l1",
            "caption": "Chủ nhật 8:00 · phòng ký túc",
            "icon": "newspaper"
          },
          {
            "id": "a-bk",
            "t": "text",
            "text": "Sổ chép mọi từ lạ",
            "x": 60,
            "y": 530,
            "size": 48,
            "at": "l2:copied",
            "color": "muted"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Tích tiểu thành đại”",
            "x": 60,
            "y": 630,
            "size": 54,
            "at": "l5:little",
            "color": "accent",
            "hl": [
              {
                "text": "Tích tiểu",
                "at": "l5:little"
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
          "say": "Meet Lan, a first-year student. Sunday, eight a.m., an English news article.",
          "sub": "Đây là Lan, sinh viên năm nhất. Chủ nhật, tám giờ sáng, một bài báo tiếng Anh.",
          "keys": [
            "bài báo tiếng Anh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "She bought a fat book of three thousand common words, started at page one, and copied every strange word she met.",
          "sub": "Lan mua cuốn “3.000 từ vựng thông dụng”, học từ trang đầu, gặp từ lạ nào cũng chép.",
          "keys": [
            "gặp từ lạ nào cũng chép"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "So many words, and still strange words everywhere. Am I learning the wrong way?",
          "sub": "Học bao nhiêu từ rồi mà chữ lạ vẫn khắp nơi. Mình học sai cách à?",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not wrong. Just in a random order, like building a house roof first.",
          "sub": "Không sai. Chỉ là sai thứ tự, như xây nhà mà lợp mái trước.",
          "keys": [
            "lợp mái trước"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our saying goes: little things add up to big ones.",
          "sub": "Ông bà dặn: “Tích tiểu thành đại.”",
          "keys": [
            "Tích tiểu thành đại"
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
            "text": "Học từ nào trước?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:first",
            "hl": [
              {
                "text": "từ nào trước",
                "at": "l1:first"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: từ trang đầu",
            "x": 2028,
            "y": 165,
            "size": 50,
            "at": "l2:page",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:but"
          },
          {
            "id": "b-no2",
            "t": "text",
            "text": "Không phải: chép mọi từ lạ",
            "x": 2028,
            "y": 245,
            "size": 50,
            "at": "l2:every",
            "color": "muted"
          },
          {
            "id": "b-no2x",
            "t": "strike",
            "over": "b-no2",
            "at": "l2:but"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: 1.000 từ thông dụng",
            "x": 2028,
            "y": 340,
            "size": 54,
            "at": "l3:thousand",
            "color": "accent",
            "hl": [
              {
                "text": "1.000 từ",
                "at": "l3:thousand"
              }
            ]
          },
          {
            "id": "b-80",
            "t": "text",
            "text": "≈ 80% chữ một văn bản",
            "x": 2068,
            "y": 425,
            "size": 48,
            "at": "l3:eighty",
            "hl": [
              {
                "text": "80%",
                "at": "l3:eighty"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Danh sách A2 Key, B1 Preliminary",
            "x": 2928,
            "y": 170,
            "size": 44,
            "at": "l4:Key",
            "color": "accent"
          },
          {
            "id": "b-src2",
            "t": "text",
            "text": "Cambridge English · miễn phí",
            "x": 2928,
            "y": 245,
            "size": 40,
            "at": "l4:Cambridge"
          },
          {
            "id": "b-grp",
            "t": "text",
            "text": "Chia nhóm ~100 từ",
            "x": 2928,
            "y": 330,
            "size": 50,
            "at": "l5:groups",
            "hl": [
              {
                "text": "~100 từ",
                "at": "l5:hundred"
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
          "say": "So which words should you learn first? And where do you get them?",
          "sub": "Vậy nên học từ nào trước? Và lấy ở đâu?",
          "keys": [
            "học từ nào trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not page one onwards, not every strange word, but the right words first.",
          "sub": "Không phải học từ trang đầu, không phải chép mọi từ lạ, mà là đúng từ trước."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The thousand most common words make up about eighty percent of an English text.",
          "sub": "Một nghìn từ thông dụng nhất chiếm khoảng 80% chữ trong một văn bản tiếng Anh.",
          "keys": [
            "khoảng 80%"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Get them from official lists: Cambridge English, A2 Key and B1 Preliminary.",
          "sub": "Lấy từ danh sách chính thức: A2 Key và B1 Preliminary của Cambridge English."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then split them into groups of about a hundred.",
          "sub": "Rồi chia thành từng nhóm khoảng một trăm từ.",
          "keys": [
            "nhóm khoảng một trăm từ"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Một tuần của Lan",
        "points": [
          {
            "label": "Chủ nhật",
            "sub": "Từ nhỏ, gặp nhiều",
            "illus": "newspaper"
          },
          {
            "label": "Thứ Hai",
            "sub": "Sổ từ của Dũng",
            "illus": "ledger"
          },
          {
            "label": "Thứ Ba",
            "sub": "Tải danh sách",
            "illus": "laptop"
          },
          {
            "label": "Thứ Năm",
            "sub": "Chia nhóm",
            "illus": "card-index"
          },
          {
            "label": "Thứ Bảy",
            "sub": "Xấp thẻ đầu",
            "illus": "check-mark-button"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One week, one word list.",
          "sub": "Một tuần, một danh sách từ.",
          "keys": [
            "Một tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Let's follow Lan.",
          "sub": "Theo chân Lan nhé."
        }
      ],
      "ref": "p17"
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
            "text": "① Chủ nhật 9:00 · Từ nhỏ",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-s0",
            "t": "box",
            "x": 3996,
            "y": 560,
            "w": 280,
            "h": 150,
            "at": "l2:ten",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "c-a0",
            "t": "text",
            "text": "10 từ",
            "x": 4016,
            "y": 570,
            "size": 46,
            "at": "l2:ten+200"
          },
          {
            "id": "c-b0",
            "t": "text",
            "text": "≈ 25%",
            "x": 4016,
            "y": 630,
            "size": 52,
            "at": "l2:ten+400",
            "color": "accent"
          },
          {
            "id": "c-s1",
            "t": "box",
            "x": 4296,
            "y": 410,
            "w": 280,
            "h": 300,
            "at": "l2:hundred",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "c-a1",
            "t": "text",
            "text": "100 từ",
            "x": 4316,
            "y": 420,
            "size": 46,
            "at": "l2:hundred+200"
          },
          {
            "id": "c-b1",
            "t": "text",
            "text": "≈ 50%",
            "x": 4316,
            "y": 480,
            "size": 52,
            "at": "l2:hundred+400",
            "color": "accent"
          },
          {
            "id": "c-s2",
            "t": "box",
            "x": 4596,
            "y": 260,
            "w": 280,
            "h": 450,
            "at": "l2:thousand",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "c-a2",
            "t": "text",
            "text": "1.000 từ",
            "x": 4616,
            "y": 270,
            "size": 46,
            "at": "l2:thousand+200"
          },
          {
            "id": "c-b2",
            "t": "text",
            "text": "≈ 80%",
            "x": 4616,
            "y": 330,
            "size": 52,
            "at": "l2:thousand+400",
            "color": "accent"
          },
          {
            "id": "c-grp",
            "t": "text",
            "text": "Nhóm tần suất cao: 2.000–3.000",
            "x": 4896,
            "y": 170,
            "size": 44,
            "at": "l3:group",
            "hl": [
              {
                "text": "2.000–3.000",
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
          "say": "Stop one. Sunday, nine a.m. Look at Nation's staircase.",
          "sub": "Chặng một. Chín giờ sáng Chủ nhật. Nhìn bậc thang của Nation."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The ten most common words cover about a quarter of any text. The top hundred, about half. The top thousand, about eighty percent.",
          "sub": "Mười từ thông dụng nhất chiếm khoảng 25% chữ. Một trăm từ đầu khoảng 50%. Một nghìn từ đầu khoảng 80%."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "He says the high-frequency group is around two to three thousand words.",
          "sub": "Theo ông, nhóm từ tần suất cao có chừng hai đến ba nghìn từ."
        }
      ],
      "ref": "p1"
    },
    {
      "id": "s05",
      "module": "BRK-03",
      "data": {
        "value": 7,
        "suffix": "%",
        "label": "chữ trong văn viết là đúng một từ: the",
        "illus": "page-facing-up"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "And one single word, the, is about seven percent",
          "sub": "Riêng một từ “the” đã chiếm khoảng 7%"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "of all the words in written English.",
          "sub": "số chữ trong văn viết tiếng Anh.",
          "keys": [
            "văn viết"
          ]
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
            "id": "c-w",
            "t": "text",
            "text": "the · of · and · to",
            "x": 4896,
            "y": 270,
            "size": 60,
            "at": "l1:the",
            "color": "accent"
          },
          {
            "id": "c-w2",
            "t": "text",
            "text": "câu nào cũng có",
            "x": 4896,
            "y": 360,
            "size": 46,
            "at": "l1:every"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Từ nhỏ gặp nhiều: học trước",
            "x": 4896,
            "y": 460,
            "size": 46,
            "at": "l3:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "học trước",
                "at": "l3:first"
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
          "say": "Mostly small words: the, of, and, to. In every sentence, like rice in every Vietnamese meal.",
          "sub": "Phần lớn là từ nhỏ: the, of, and, to. Câu nào cũng có, như cơm trong mọi bữa ăn Việt.",
          "keys": [
            "như cơm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Know them well, and a page looks much less strange, even without hard words.",
          "sub": "Vững nhóm này thì một trang bớt lạ đi rất nhiều, dù chưa biết từ “khó”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: small words you meet a lot pay the most when learned first.",
          "sub": "Rút ra: từ nhỏ mà gặp nhiều, học trước thì lời nhiều.",
          "keys": [
            "học trước thì lời nhiều"
          ]
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 10:00 · Lan học sai?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-house",
            "t": "illus",
            "name": "house",
            "x": 7004,
            "y": 180,
            "size": 300,
            "at": "l4:foundation"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "1.000 từ ≈ 80%",
            "x": 5964,
            "y": 170,
            "size": 56,
            "at": "l2:eighty",
            "hl": [
              {
                "text": "80%",
                "at": "l2:eighty"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "→ cứ 5 chữ, 1 chữ lạ",
            "x": 5964,
            "y": 260,
            "size": 50,
            "at": "l2:five",
            "color": "coral",
            "hl": [
              {
                "text": "1 chữ lạ",
                "at": "l2:one"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Báo: nhiều từ hơn lời nói",
            "x": 5964,
            "y": 350,
            "size": 46,
            "at": "l3:news"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "Học tiếp tới 2.000–3.000",
            "x": 5964,
            "y": 440,
            "size": 48,
            "at": "l5:three",
            "color": "accent",
            "hl": [
              {
                "text": "2.000–3.000",
                "at": "l5:two"
              }
            ]
          },
          {
            "id": "d-5",
            "t": "text",
            "text": "+ sách phân cấp vừa sức",
            "x": 5964,
            "y": 520,
            "size": 46,
            "at": "l5:graded"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Móng nhà, chưa phải mái",
            "x": 6804,
            "y": 600,
            "size": 54,
            "at": "l4:foundation",
            "color": "accent",
            "hl": [
              {
                "text": "Móng nhà",
                "at": "l4:foundation"
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
          "say": "Stop two, ten a.m. So did Lan learn the wrong way?",
          "sub": "Chặng hai, mười giờ sáng. Vậy Lan có học sai không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. A thousand words cover about eighty percent. That still means one unknown word in every five.",
          "sub": "Không. Một nghìn từ phủ khoảng 80%, nghĩa là cứ năm chữ vẫn có một chữ lạ.",
          "keys": [
            "năm chữ vẫn có một chữ lạ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And news uses more words than everyday speech. Reading a normal page is still hard work.",
          "sub": "Mà báo dùng nhiều từ hơn lời nói. Đọc một trang bình thường vẫn còn vất vả."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: the first thousand words are the foundation, not the roof.",
          "sub": "Rút ra: một nghìn từ đầu là móng nhà, chưa phải mái nhà.",
          "keys": [
            "móng nhà"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "So I keep going to two or three thousand, and read graded readers at my level.",
          "sub": "Vậy mình học tiếp tới hai, ba nghìn từ, và đọc sách phân cấp vừa sức.",
          "face": "happy"
        }
      ],
      "ref": "p7,p8,p9"
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
            "text": "③ Thứ Hai · Sổ dày",
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
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "ledger",
                "newspaper"
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
            "at": "l2:Dũng",
            "caption": "Thứ Hai 12:30 · văn phòng",
            "icon": "ledger"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Một nửa số từ khác nhau…",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l4:half"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "… chỉ gặp đúng 1 lần",
            "x": 7932,
            "y": 245,
            "size": 50,
            "at": "l4:once",
            "color": "coral",
            "hl": [
              {
                "text": "1 lần",
                "at": "l4:once"
              }
            ]
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Phần lớn: từ tần suất thấp",
            "x": 7932,
            "y": 330,
            "size": 44,
            "at": "l5:low"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "→ đọc tài liệu có kiểm soát",
            "x": 7932,
            "y": 405,
            "size": 44,
            "at": "l5:controlled",
            "color": "accent",
            "hl": [
              {
                "text": "có kiểm soát",
                "at": "l5:controlled"
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
          "say": "Stop three, Monday lunch.",
          "sub": "Chặng ba, trưa thứ Hai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Dũng, Lan's friend from the reading club. He just started an office job.",
          "sub": "Đây là Dũng, bạn của Lan ở câu lạc bộ đọc, mới đi làm văn phòng.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Look at my notebook! Every rare word from every article. Thick as a phone book!",
          "sub": "Nhìn sổ của tôi này! Từ hiếm nào trong báo cũng chép. Dày như danh bạ!",
          "face": "happy",
          "pose": "hold"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Nation found that about half the different words in a text appear only once.",
          "sub": "Nation chỉ ra: khoảng một nửa số từ khác nhau trong một văn bản chỉ xuất hiện đúng một lần.",
          "keys": [
            "đúng một lần"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Most are low-frequency words. So he suggests material with controlled vocabulary, like books for learners.",
          "sub": "Phần lớn là từ tần suất thấp. Nên ông khuyên dùng tài liệu có kiểm soát từ vựng, như sách cho người học."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p4,p5"
    },
    {
      "id": "s09",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Hai 12:45 · bàn làm việc",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Gặp từ lạ nào cũng chép",
          "why": "Sổ đầy từ cả năm mới gặp lại một lần, còn từ thông dụng chưa vững.",
          "rule": "Chép ít mà đúng từ hay gặp"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "A real learner copies every new word. That's how you study hard!",
          "sub": "Học chăm thì gặp từ lạ nào cũng phải chép chứ!",
          "pose": "explain",
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
          "say": "Half of those you may meet once a year. Meanwhile, common words are still shaky.",
          "sub": "Nhiều từ trong đó có khi cả năm mới gặp lại một lần, trong khi từ thông dụng còn chưa vững.",
          "keys": [
            "cả năm mới gặp lại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Lần nữa nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Fine. I only copy words from the common list.",
          "sub": "Được. Tôi chỉ chép những từ có trong danh sách thông dụng.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A thinner notebook, and he remembers more. Those words keep coming back.",
          "sub": "Sổ mỏng hơn mà nhớ nhiều hơn, vì những từ ấy gặp lại thường xuyên.",
          "phase": "redo",
          "keys": [
            "Sổ mỏng hơn mà nhớ nhiều hơn"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p5"
    },
    {
      "id": "s10",
      "module": "BRK-04",
      "data": {
        "title": "Sổ từ của Dũng",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Sổ dày, toàn từ hiếm",
        "right": "Sổ mỏng, từ hay gặp, nhớ nhiều hơn",
        "wrongIllus": "ledger",
        "rightIllus": "notebook"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: a thick book of rare words.",
          "sub": "Trước: sổ dày, toàn từ hiếm."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: a thin one, full of words he meets every day.",
          "sub": "Sau: sổ mỏng, toàn từ ngày nào cũng gặp.",
          "keys": [
            "sổ mỏng"
          ]
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s11",
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
            "text": "Chép ít mà đúng từ hay gặp",
            "x": 7932,
            "y": 520,
            "size": 52,
            "at": "l1:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "đúng từ hay gặp",
                "at": "l1:common"
              }
            ]
          },
          {
            "id": "e-r",
            "t": "text",
            "text": "Từ hiếm gặp 1 lần: lướt qua",
            "x": 8772,
            "y": 695,
            "size": 44,
            "at": "l2:once",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: copy fewer, but the common ones. Better than many rare ones.",
          "sub": "Rút ra: chép ít mà đúng từ hay gặp, hơn chép nhiều từ hiếm.",
          "keys": [
            "chép ít mà đúng từ hay gặp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A rare word seen once in a long article? Give it a nod, not a page.",
          "sub": "Từ hiếm gặp một lần trong bài dài? Gật đầu chào, đừng dành cả trang sổ."
        }
      ],
      "ref": "p6,p4"
    },
    {
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "Vậy lấy 1.000 từ ấy ở đâu?",
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
          "say": "Where do you actually get those words?",
          "sub": "Vậy lấy những từ ấy ở đâu?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p10"
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
            "text": "④ Thứ Ba · Danh sách",
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
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "laptop",
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "at": "l2:Cô Hoa",
            "caption": "Thứ Ba 20:00 · quán cà phê sách",
            "icon": "laptop"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "A2 Key · B1 Preliminary",
            "x": 60,
            "y": 1255,
            "size": 50,
            "at": "l3:Key",
            "color": "accent"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "theo CEFR · kho ngữ liệu",
            "x": 60,
            "y": 1335,
            "size": 46,
            "at": "l4:CEFR",
            "hl": [
              {
                "text": "kho ngữ liệu",
                "at": "l4:corpus"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "cập nhật đều đặn",
            "x": 60,
            "y": 1410,
            "size": 46,
            "at": "l4:updated"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "Bản đọc: 8/2025 → tải mới nhất",
            "x": 60,
            "y": 1485,
            "size": 40,
            "at": "l5:August",
            "color": "coral",
            "hl": [
              {
                "text": "tải mới nhất",
                "at": "l5:latest"
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
          "say": "Stop four, Tuesday night, back at the book café.",
          "sub": "Chặng bốn, tối thứ Ba, ở quán cà phê sách."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Cô Hoa, the owner, who runs the English reading club.",
          "sub": "Đây là cô Hoa, chủ quán, người lập câu lạc bộ đọc tiếng Anh.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Free and reliable, Lan: the Cambridge word lists for A2 Key and B1 Preliminary.",
          "sub": "Miễn phí mà đáng tin này Lan: danh sách từ của Cambridge cho A2 Key và B1 Preliminary.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "They follow CEFR levels, use corpus evidence of high-frequency words, and are updated regularly.",
          "sub": "Danh sách xây theo trình độ CEFR, dựa trên bằng chứng kho ngữ liệu về từ tần suất cao, được cập nhật đều đặn.",
          "keys": [
            "kho ngữ liệu"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The version the writer read is dated August twenty twenty-five. Download the latest one.",
          "sub": "Bản người viết đọc ghi tháng 8 năm 2025. Bạn nên tải bản mới nhất trên trang Cambridge."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p10"
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
            "id": "f-az",
            "t": "text",
            "text": "Xếp theo vần A → Z",
            "x": 60,
            "y": 1570,
            "size": 48,
            "at": "l1:Z",
            "hl": [
              {
                "text": "A → Z",
                "at": "l1:Z"
              }
            ]
          },
          {
            "id": "f-pos",
            "t": "text",
            "text": "n · v · adj",
            "x": 60,
            "y": 1645,
            "size": 48,
            "at": "l1:noun",
            "color": "accent"
          },
          {
            "id": "f-bank",
            "t": "text",
            "text": "bank: “I changed my money in the bank.”",
            "x": 60,
            "y": 1720,
            "size": 36,
            "at": "l2:bank",
            "font": "base"
          },
          {
            "id": "f-pv",
            "t": "text",
            "text": "look after · go out",
            "x": 900,
            "y": 1785,
            "size": 46,
            "at": "l3:look after",
            "color": "accent",
            "hl": [
              {
                "text": "look after",
                "at": "l3:look after"
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
          "say": "The list runs from A to Z. Each word has its word class: noun, verb, adjective.",
          "sub": "Danh sách xếp theo vần A đến Z, mỗi từ kèm từ loại: danh từ, động từ, tính từ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Example sentences appear only when a word has several meanings. Bank: I changed my money in the bank.",
          "sub": "Câu ví dụ chỉ có khi từ có nhiều nghĩa cần chỉ rõ, như bank: I changed my money in the bank."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Phrasal verbs are there too: look after, go out.",
          "sub": "Có cả cụm động từ: look after, go out.",
          "keys": [
            "cụm động từ"
          ]
        }
      ],
      "ref": "p11"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Tư · Phụ lục",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "số · ngày · tháng · mùa · quốc gia",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "l2:numbers"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Food and Drink",
            "x": 2028,
            "y": 1340,
            "size": 46,
            "at": "l3:Food",
            "color": "accent"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Travel and Transport",
            "x": 2028,
            "y": 1410,
            "size": 46,
            "at": "l3:Travel",
            "color": "accent"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Work and Jobs",
            "x": 2028,
            "y": 1480,
            "size": 46,
            "at": "l3:Work",
            "color": "accent"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "B1 Preliminary: dài hơn, bước sau",
            "x": 2028,
            "y": 1570,
            "size": 42,
            "at": "l4:longer",
            "hl": [
              {
                "text": "bước sau",
                "at": "l4:next"
              }
            ]
          },
          {
            "id": "g-6",
            "t": "text",
            "text": "Không chỉ học trong danh sách",
            "x": 2928,
            "y": 1260,
            "size": 44,
            "at": "l5:only",
            "color": "coral",
            "hl": [
              {
                "text": "Không chỉ",
                "at": "l5:only"
              }
            ]
          },
          {
            "id": "g-7",
            "t": "text",
            "text": "+ từ cá nhân: ngành học, sở thích",
            "x": 2928,
            "y": 1340,
            "size": 40,
            "at": "l6:major",
            "color": "accent",
            "hl": [
              {
                "text": "từ cá nhân",
                "at": "l6:myself"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Danh sách = bộ khung",
            "x": 2928,
            "y": 1440,
            "size": 56,
            "at": "l7:frame",
            "color": "accent",
            "hl": [
              {
                "text": "bộ khung",
                "at": "l7:frame"
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
          "say": "Stop five, Wednesday. Lan scrolls to the end.",
          "sub": "Chặng năm, thứ Tư. Lan kéo xuống cuối danh sách."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The appendices: numbers, days, months, seasons, countries.",
          "sub": "Phần phụ lục: số, ngày, tháng, mùa, quốc gia."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And topic lists: Food and Drink, Travel and Transport, Work and Jobs.",
          "sub": "Và các danh sách theo chủ đề: Food and Drink, Travel and Transport, Work and Jobs."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The B1 Preliminary list is longer, for your next step.",
          "sub": "Danh sách B1 Preliminary dài hơn, dành cho bước tiếp theo."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "But Cambridge says clearly: the list is not complete. Don't only study within it.",
          "sub": "Nhưng Cambridge nói rõ: danh sách không đầy đủ, thí sinh “không nên chỉ học trong phạm vi danh sách”."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "lan",
          "say": "My major, my hobbies, what I like and don't like. I add those myself!",
          "sub": "Ngành học, sở thích, điều mình thích và không thích. Mấy từ đó mình tự thêm!",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "The list is the frame. The words for your own life, you add.",
          "sub": "Danh sách là bộ khung, còn từ cho cuộc sống của bạn thì bạn tự thêm.",
          "keys": [
            "bộ khung"
          ]
        }
      ],
      "ref": "p12,p13"
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
            "text": "⑥ Thứ Năm · Chia nhóm",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "props": [
                "laptop",
                "card-index"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2:Thảo",
            "caption": "Thứ Năm 20:00 · cùng danh sách A2 Key",
            "icon": "card-index"
          },
          {
            "id": "h-th",
            "t": "text",
            "text": "Thảo: từ chữ A",
            "x": 3996,
            "y": 1255,
            "size": 50,
            "at": "l3:A",
            "color": "coral"
          },
          {
            "id": "h-th2",
            "t": "text",
            "text": "→ vững A, B; thiếu từ hằng ngày",
            "x": 4036,
            "y": 1330,
            "size": 40,
            "at": "l5:missing",
            "color": "muted"
          },
          {
            "id": "h-du",
            "t": "text",
            "text": "Dũng: lọc → nhóm ~100",
            "x": 3996,
            "y": 1420,
            "size": 50,
            "at": "l4:filtered",
            "color": "accent",
            "hl": [
              {
                "text": "nhóm ~100",
                "at": "l4:hundred"
              }
            ]
          },
          {
            "id": "h-du2",
            "t": "text",
            "text": "→ xen chủ đề, không dồn màu",
            "x": 4036,
            "y": 1495,
            "size": 40,
            "at": "l4:colours"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, Thursday. Same A2 Key list, two people.",
          "sub": "Chặng sáu, thứ Năm. Cùng danh sách A2 Key, hai người."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Thảo, Lan's cousin. Fast, keen, and very alphabetical.",
          "sub": "Đây là Thảo, chị họ của Lan. Nhanh, hăng, và rất… theo vần.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I start at A. A few pages every night, in order!",
          "sub": "Chị học từ chữ A. Mỗi tối vài trang, đúng thứ tự!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "I ticked what I know, filtered the rest, and made groups of a hundred. No group of only colours or days.",
          "sub": "Tôi đánh dấu từ đã biết, lọc ra từ chưa biết, chia nhóm khoảng trăm từ. Không dồn cả nhóm tên màu hay tên ngày.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Weeks later, Thảo knows lots of A and B words, but is missing everyday words at the end of the list.",
          "sub": "Một thời gian sau, Thảo thuộc nhiều từ vần A, B nhưng thiếu nhiều từ hằng ngày nằm cuối danh sách."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s17",
      "module": "BRK-12",
      "data": {
        "word": "~100 từ",
        "sub": "Một nhóm, đi gần thứ tự tần suất",
        "from": [
          1180,
          345
        ],
        "others": [
          "Thảo",
          "Dũng",
          "A2 Key"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "About a hundred words.",
          "sub": "Khoảng một trăm từ."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "One group at a time, close to frequency order.",
          "sub": "Mỗi lần một nhóm, đi gần theo thứ tự tần suất.",
          "keys": [
            "thứ tự tần suất"
          ]
        }
      ],
      "ref": "p14"
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
            "id": "h-n",
            "t": "text",
            "text": "Nation: nhóm ~100, theo tần suất",
            "x": 3996,
            "y": 1590,
            "size": 44,
            "at": "l1:Nation",
            "hl": [
              {
                "text": "theo tần suất",
                "at": "l1:frequency"
              }
            ]
          },
          {
            "id": "h-c",
            "t": "text",
            "text": "Xấp thẻ đầu: 15–20 từ",
            "x": 3996,
            "y": 1670,
            "size": 50,
            "at": "l2:fifteen",
            "color": "accent",
            "hl": [
              {
                "text": "15–20 từ",
                "at": "l2:twenty"
              }
            ]
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Theo vần: để tra",
            "x": 4836,
            "y": 1785,
            "size": 46,
            "at": "l3:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "để tra",
                "at": "l3:looking up"
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
          "say": "Nation advises groups of about a hundred, roughly in frequency order. The Cambridge list is alphabetical, so filter and group it yourself.",
          "sub": "Nation khuyên học theo nhóm khoảng trăm từ, gần theo thứ tự tần suất. Danh sách Cambridge xếp theo vần, nên tự lọc rồi chia nhóm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And when you make cards, a pack should start with about fifteen to twenty words.",
          "sub": "Khi chuyển sang thẻ, một xấp nên bắt đầu với khoảng mười lăm đến hai mươi từ.",
          "keys": [
            "mười lăm đến hai mươi từ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: an alphabetical list is for looking up, not for learning from A.",
          "sub": "Rút ra: danh sách theo vần là để tra, không phải để học từ chữ A.",
          "keys": [
            "để tra"
          ]
        }
      ],
      "ref": "p14,p16"
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
            "text": "⑦ Thứ Bảy · Năm bước",
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
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "card-index"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
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
            "at": "l1:Saturday",
            "caption": "Thứ Bảy 9:00 · bàn học",
            "icon": "card-index"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l2:know",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1242,
            "size": 56,
            "at": "l2:know+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Đánh dấu từ đã biết",
            "x": 6029,
            "y": 1252,
            "size": 38,
            "at": "l2:know+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1342,
            "w": 44,
            "h": 44,
            "at": "l3:table",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1324,
            "size": 56,
            "at": "l3:table+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Chép từ chưa biết: bảng riêng",
            "x": 6029,
            "y": 1334,
            "size": 38,
            "at": "l3:table+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1424,
            "w": 44,
            "h": 44,
            "at": "l4:groups",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1406,
            "size": 56,
            "at": "l4:groups+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Chia nhóm ~100, xen chủ đề",
            "x": 6029,
            "y": 1416,
            "size": 38,
            "at": "l4:groups+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1506,
            "w": 44,
            "h": 44,
            "at": "l4:cards",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1488,
            "size": 56,
            "at": "l4:cards+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Mỗi lần 15–20 từ → thẻ",
            "x": 6029,
            "y": 1498,
            "size": 38,
            "at": "l4:cards+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1588,
            "w": 44,
            "h": 44,
            "at": "l5:own",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1570,
            "size": 56,
            "at": "l5:own+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Thêm từ cá nhân",
            "x": 6029,
            "y": 1580,
            "size": 38,
            "at": "l5:own+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven, Saturday morning. Lan's five steps.",
          "sub": "Chặng bảy, sáng thứ Bảy. Năm bước của Lan."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "One: skim the list and tick the words I know for sure.",
          "sub": "Một: đọc lướt, đánh dấu những từ đã biết chắc.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Two: copy the unknown ones to a separate table. Food and Drink, Travel and Transport first.",
          "sub": "Hai: chép từ chưa biết ra bảng riêng, ưu tiên Food and Drink, Travel and Transport."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: split it into groups of about a hundred, mixing topics. Four: fifteen to twenty words at a time onto cards.",
          "sub": "Ba: chia thành nhóm khoảng trăm từ, xen chủ đề. Bốn: mỗi lần mười lăm đến hai mươi từ ra thẻ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "Five: add my own words, like my major and my hobbies.",
          "sub": "Năm: thêm vài từ của riêng mình, như ngành học, sở thích.",
          "face": "happy"
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s20",
      "module": "BRK-10",
      "data": {
        "quote": "Lọc từ đã biết, chia nhóm, rồi làm thẻ từng xấp nhỏ",
        "mark": "từng xấp nhỏ",
        "by": "Rút ra cho Lan",
        "illus": "card-index"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Filter what you know, group the rest,",
          "sub": "Lọc từ đã biết, chia nhóm,"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "then make cards in small packs.",
          "sub": "rồi làm thẻ từng xấp nhỏ.",
          "keys": [
            "từng xấp nhỏ"
          ]
        }
      ],
      "ref": "p18"
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
            "text": "Chủ nhật sau · 8:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:desk"
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
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "newspaper",
                "card-index"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1:Sunday",
            "caption": "Chủ nhật sau 8:00 · cùng bàn ấy",
            "icon": "newspaper"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Xấp thẻ đầu: 20 từ ✓",
            "x": 7932,
            "y": 1260,
            "size": 50,
            "at": "l2:twenty",
            "color": "accent"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Sổ mỏng, từ hay gặp",
            "x": 7932,
            "y": 1345,
            "size": 48,
            "at": "l3:thinner"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Tích tiểu thành đại”",
            "x": 7932,
            "y": 1460,
            "size": 56,
            "at": "l4:little",
            "color": "accent",
            "hl": [
              {
                "text": "thành đại",
                "at": "l4:big"
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
          "say": "Next Sunday, eight a.m. Same desk, same kind of article.",
          "sub": "Chủ nhật sau, tám giờ sáng. Vẫn bàn ấy, vẫn kiểu bài báo ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Still some strange words. But my first twenty cards keep popping up!",
          "sub": "Vẫn còn chữ lạ. Nhưng hai mươi thẻ đầu tiên cứ hiện ra liên tục!",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A thinner notebook, the right words, met again and again.",
          "sub": "Sổ mỏng hơn, đúng từ, gặp đi gặp lại."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Little things add up to big ones. Little words most of all.",
          "sub": "“Tích tiểu thành đại.” Mà từ nhỏ lại tích nhanh nhất.",
          "keys": [
            "Tích tiểu thành đại"
          ]
        }
      ],
      "ref": "p19"
    },
    {
      "id": "s22",
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
            "at": "l1:eighty",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:list",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:groups",
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
            "x": 4896,
            "y": 40,
            "at": "l1:eighty"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 760,
            "y": 1260,
            "at": "l2:list"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1420,
            "at": "l3:groups"
          },
          {
            "id": "j-do",
            "t": "text",
            "text": "Làm ngay: tải A2 Key, đánh dấu",
            "x": 7932,
            "y": 1610,
            "size": 44,
            "at": "l5:Try",
            "hl": [
              {
                "text": "đánh dấu",
                "at": "l5:tick"
              }
            ]
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi tự học; số liệu theo Paul Nation (2014), danh sách theo Cambridge English. Nhân vật là minh hoạ.",
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
          "say": "So: the first thousand words cover about eighty percent of a text. Learn them first.",
          "sub": "Tóm lại: một nghìn từ đầu phủ khoảng 80% văn bản. Học chúng trước.",
          "keys": [
            "Học chúng trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Get them from the Cambridge list: A2 Key, then B1 Preliminary.",
          "sub": "Lấy từ danh sách Cambridge: A2 Key, rồi B1 Preliminary."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Tick what you know, filter, make groups of a hundred, and cards of fifteen to twenty.",
          "sub": "Đánh dấu từ đã biết, lọc, chia nhóm trăm từ, làm thẻ mười lăm đến hai mươi từ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Add your own words, and meet them again in easy books.",
          "sub": "Thêm từ cá nhân, và gặp lại chúng qua sách đọc dễ.",
          "keys": [
            "sách đọc dễ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: download the A2 Key list and tick the words you already know.",
          "sub": "Làm ngay: tải danh sách A2 Key và đánh dấu những từ bạn đã biết.",
          "keys": [
            "đánh dấu"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next up: word cards done right, with self-testing and spaced review.",
          "sub": "Bài tiếp: học thẻ thế nào cho đúng, tự kiểm tra và ôn giãn cách."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p19,outro"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "Lan finished the first thousand words but still finds news hard, did she learn wrongly?",
        "options": [
          "Yes, she must have learned the wrong list and should start again",
          "Yes, news articles only use the first thousand words, so she failed",
          "No, those words cover about eighty percent, so unknown words remain common"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "newspaper",
        "why": "Lan không học sai. Một nghìn từ đầu phủ khoảng 80%, nên chữ lạ vẫn dày, nhất là trong báo."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Lan finished the first thousand words but still finds news hard, did she learn wrongly?",
          "sub": "Lan học xong một nghìn từ đầu mà vẫn thấy báo khó, Lan có học sai không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. A thousand words still leave one unknown word in five.",
          "sub": "Không. Một nghìn từ vẫn để lại một chữ lạ trong năm chữ."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Keep going to two or three thousand, and read graded readers.",
          "sub": "Học tiếp tới hai, ba nghìn từ, và đọc sách phân cấp."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[14]"
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
          "say": "One list, one tick at a time. Then try the forty questions below.",
          "sub": "Một danh sách, từng dấu tích. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT TUẦN VỚI DANH SÁCH A2 KEY của Lan (Chủ nhật 8:00 bài báo chữ lạ khắp nơi → 9:00 bậc thang 10/100/1.000 từ → 10:00 móng nhà → Thứ Hai Dũng sổ dày “Khoan đã!” → Thứ Ba cô Hoa chỉ danh sách Cambridge → Thứ Tư phụ lục, giới hạn → Thứ Năm Thảo học từ chữ A vs Dũng chia nhóm → Thứ Bảy năm bước → Chủ nhật sau 8:00 khép vòng). Hook HOOK-21 (câu hỏi để đoán sai: 100 từ = 5% hay 50% trang?). Nhân vật: Lan, Dũng, Cô Hoa, Thảo — w145/_series/beginner-vocabulary-learners.md. Cảnh ngắt nhịp: BRK-08 (một tuần), BRK-03 (the ≈ 7%), BRK-04 (sổ của Dũng), BRK-07 (rehook), BRK-12 (match cut ~100 từ), BRK-10 (rút ra). Tục ngữ: “Tích tiểu thành đại”. Câu đố questions[14].",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
