// Kịch bản video W lần 3 (#110) — "Vì sao lúc nào cũng thấy thiếu thời gian?" · chuỗi "Sống trọn 24 giờ — dùng giờ ngoài công sở cho chính mình"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); nhân vật hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "why-you-never-have-enough-time--w01",
  "unit": {
    "audience": "office-workers-own-time",
    "slug": "why-you-never-have-enough-time",
    "door": "ky-nang",
    "level": "B1",
    "title": "Vì sao lúc nào cũng thấy thiếu thời gian?",
    "series": "Sống trọn 24 giờ — dùng giờ ngoài công sở cho chính mình"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
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
            "id": "a-n",
            "t": "text",
            "text": "24 giờ",
            "x": 60,
            "y": 130,
            "size": 200,
            "at": "l1:twenty",
            "color": "accent",
            "hl": [
              {
                "text": "24 giờ",
                "at": "l1:hours"
              }
            ]
          },
          {
            "id": "a-nb",
            "t": "text",
            "text": "sếp · bạn chủ quán · bạn",
            "x": 70,
            "y": 380,
            "size": 56,
            "at": "l1:boss"
          },
          {
            "id": "a-more",
            "t": "text",
            "text": "Ta tưởng: người khác nhiều hơn?",
            "x": 70,
            "y": 480,
            "size": 48,
            "at": "l2:more",
            "color": "muted"
          },
          {
            "id": "a-morex",
            "t": "strike",
            "over": "a-more",
            "at": "l2:end"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: Arnold Bennett, How to Live on 24 Hours a Day (1908), chương I–II",
            "x": 60,
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
          "say": "Twenty four hours. Your boss gets them, your old friend with a shop gets them, and so do you.",
          "sub": "Hai mươi bốn giờ. Sếp bạn có, người bạn cũ mở cửa hàng có, và bạn cũng có.",
          "keys": [
            "Hai mươi bốn giờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet we're quite sure other people have more.",
          "sub": "Vậy mà ta cứ chắc mẩm người khác có nhiều hơn.",
          "keys": [
            "nhiều hơn"
          ]
        }
      ],
      "ref": "p2"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "sad",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "bed",
                "closed-book"
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
            "caption": "Thứ Năm, 23:50",
            "icon": "mobile-phone"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "“Lại thêm một ngày…”",
            "x": 920,
            "y": 650,
            "size": 50,
            "at": "l3:another",
            "color": "coral"
          },
          {
            "id": "a-rw",
            "t": "text",
            "text": "⟲ Tua lại 6:30 sáng",
            "x": 70,
            "y": 590,
            "size": 50,
            "at": "l4:rewind",
            "color": "coral",
            "hl": [
              {
                "text": "6:30",
                "at": "l4:six thirty"
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
          "say": "Meet Thảo.",
          "sub": "Đây là Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Office worker by day, champion scroller by night. Thursday, ten to midnight.",
          "sub": "Ngày đi làm, đêm vô địch lướt điện thoại. Thứ Năm, mười hai giờ kém mười.",
          "keys": [
            "vô địch lướt điện thoại"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Another day with nothing done for me.",
          "sub": "Lại thêm một ngày chẳng làm gì cho mình.",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "This morning she promised herself a few pages of a book. Let's rewind to six thirty.",
          "sub": "Sáng nay cô tự hứa đọc vài trang sách. Tua lại sáu rưỡi sáng nhé.",
          "keys": [
            "Tua lại"
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
      "ref": "intro,p13"
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
            "text": "Vì sao luôn thấy thiếu giờ?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:short",
            "hl": [
              {
                "text": "thiếu giờ",
                "at": "l1:short"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: có quá ít giờ",
            "x": 2028,
            "y": 170,
            "size": 54,
            "at": "l2:few",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:believe"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: tin “sau này sẽ rảnh”",
            "x": 2028,
            "y": 270,
            "size": 58,
            "at": "l3:believe",
            "color": "accent",
            "hl": [
              {
                "text": "sau này sẽ rảnh",
                "at": "l3:later"
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
          "say": "So why do we always feel short of time?",
          "sub": "Vậy vì sao lúc nào cũng thấy thiếu thời gian?",
          "keys": [
            "thiếu thời gian"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Usually not because we have too few hours.",
          "sub": "Thường không phải vì có quá ít giờ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But because we believe we'll be less busy later.",
          "sub": "Mà vì ta tin rằng sau này mình sẽ rảnh hơn.",
          "keys": [
            "sau này mình sẽ rảnh hơn"
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
            "text": "Thứ Năm + đêm thứ Sáu",
            "x": 2028,
            "y": 450,
            "size": 52,
            "at": "l1:Thursday",
            "hl": [
              {
                "text": "Thứ Năm",
                "at": "l1:Thursday"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 560,
            "w": 185,
            "h": 90,
            "at": "l2+0",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2233,
            "y": 560,
            "w": 185,
            "h": 90,
            "at": "l2+200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2438,
            "y": 560,
            "w": 185,
            "h": 90,
            "at": "l2+400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2643,
            "y": 560,
            "w": 185,
            "h": 90,
            "at": "l2+600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2848,
            "y": 560,
            "w": 185,
            "h": 90,
            "at": "l2+800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3053,
            "y": 560,
            "w": 185,
            "h": 90,
            "at": "l2+1000",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3258,
            "y": 560,
            "w": 185,
            "h": 90,
            "at": "l2+1200",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "b-d7",
            "t": "box",
            "x": 3463,
            "y": 560,
            "w": 185,
            "h": 90,
            "at": "l2+1400",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "6:30",
            "x": 2040,
            "y": 578,
            "size": 44,
            "at": "l2+100"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "9:00",
            "x": 2245,
            "y": 578,
            "size": 44,
            "at": "l2+300"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "12:00",
            "x": 2450,
            "y": 578,
            "size": 44,
            "at": "l2+500"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "15:00",
            "x": 2655,
            "y": 578,
            "size": 44,
            "at": "l2+700"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "18:00",
            "x": 2860,
            "y": 578,
            "size": 44,
            "at": "l2+900"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "23:50",
            "x": 3065,
            "y": 578,
            "size": 44,
            "at": "l2+1100"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "T6 21:00",
            "x": 3270,
            "y": 578,
            "size": 34,
            "at": "l2+1300"
          },
          {
            "id": "b-dt7",
            "t": "text",
            "text": "T6 23:50",
            "x": 3475,
            "y": 578,
            "size": 34,
            "at": "l2+1500"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Thảo's Thursday, from her first promise to her last scroll.",
          "sub": "Mình theo ngày thứ Năm của Thảo, từ lời hứa đầu tiên tới lần lướt cuối cùng.",
          "keys": [
            "ngày thứ Năm của Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Six stops, then one more night.",
          "sub": "Sáu chặng, rồi thêm một đêm nữa."
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s03b",
      "module": "BRK-10",
      "data": {
        "quote": "Sẽ không bao giờ có thêm thời gian",
        "mark": "không bao giờ",
        "by": "Arnold Bennett, 1908",
        "illus": "hourglass-done"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "We shall never have any more time.",
          "sub": "Ta sẽ không bao giờ có thêm thời gian.",
          "keys": [
            "không bao giờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Arnold Bennett, nineteen oh eight.",
          "sub": "Arnold Bennett, năm 1908."
        }
      ],
      "ref": "p4"
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
          },
          {
            "at": "l4",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 6:30 · Phép màu mỗi ngày",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:first"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "stand",
                  "face": "happy"
                }
              ],
              "props": [
                "sunrise",
                "alarm-clock"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:wakes",
            "caption": "Thứ Năm, 6:30",
            "icon": "sunrise"
          },
          {
            "id": "c-spark",
            "t": "illus",
            "name": "sparkles",
            "x": 3996,
            "y": 160,
            "size": 90,
            "at": "l2:miracle"
          },
          {
            "id": "c-m",
            "t": "text",
            "text": "“phép màu mỗi ngày”",
            "x": 4106,
            "y": 175,
            "size": 54,
            "at": "l2:miracle",
            "color": "accent",
            "hl": [
              {
                "text": "phép màu",
                "at": "l2:daily miracle"
              }
            ]
          },
          {
            "id": "c-24",
            "t": "text",
            "text": "24 giờ mới, chưa dùng",
            "x": 3996,
            "y": 290,
            "size": 52,
            "at": "l2:fresh"
          },
          {
            "id": "c-free",
            "t": "text",
            "text": "không đơn · không phí · không xếp hàng",
            "x": 3996,
            "y": 380,
            "size": 40,
            "at": "l3:form",
            "color": "muted"
          },
          {
            "id": "c-pr",
            "t": "text",
            "text": "Hứa: “tối nay đọc vài trang”",
            "x": 3996,
            "y": 500,
            "size": 48,
            "at": "l4:tonight",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: six thirty a.m. Thảo wakes up.",
          "sub": "Chặng một: sáu rưỡi sáng. Thảo thức dậy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Bennett calls time the daily miracle. You wake up, and twenty four fresh hours are waiting.",
          "sub": "Bennett gọi thời gian là phép màu mỗi ngày. Mở mắt ra đã có sẵn 24 giờ mới tinh.",
          "keys": [
            "phép màu mỗi ngày"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No application form, no fee, no queue.",
          "sub": "Không phải làm đơn, không mất phí, không xếp hàng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Tonight, I'll read a few pages. Promise.",
          "sub": "Tối nay mình sẽ đọc vài trang. Hứa đấy.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Remember that promise. We'll check on it at midnight.",
          "sub": "Nhớ lời hứa ấy nhé. Nửa đêm mình kiểm tra.",
          "keys": [
            "Nhớ lời hứa ấy"
          ]
        }
      ],
      "ref": "p1"
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
            "text": "② 9:00 · Công bằng hiếm có",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:second"
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
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
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
            "at": "l1:office",
            "caption": "Thứ Năm, 9:00 · công ty",
            "icon": "office-building"
          },
          {
            "id": "d-boss",
            "t": "text",
            "text": "“Sếp chắc nhiều giờ hơn”",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l3:more hours",
            "color": "muted"
          },
          {
            "id": "d-bossx",
            "t": "strike",
            "over": "d-boss",
            "at": "l4:not one"
          },
          {
            "id": "d-r",
            "t": "text",
            "text": "Giàu nhất: không thêm 1 phút",
            "x": 5964,
            "y": 270,
            "size": 48,
            "at": "l4:richest"
          },
          {
            "id": "d-p",
            "t": "text",
            "text": "Nghèo nhất: không bớt 1 phút",
            "x": 5964,
            "y": 345,
            "size": 48,
            "at": "l4:poorest"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Khác ở: giờ ngoài bổn phận",
            "x": 5964,
            "y": 460,
            "size": 54,
            "at": "l5:outside",
            "color": "accent",
            "hl": [
              {
                "text": "ngoài bổn phận",
                "at": "l5:duty"
              }
            ]
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "ai dùng · ai để trôi",
            "x": 5964,
            "y": 545,
            "size": 46,
            "at": "l5:drift",
            "hl": [
              {
                "text": "để trôi",
                "at": "l5:drift"
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
          "say": "Second stop: nine a.m., the office.",
          "sub": "Chặng hai: chín giờ sáng, ở công ty."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Dũng, Thảo's desk neighbour, master of office gossip.",
          "sub": "Còn đây là Dũng, bàn bên Thảo, chuyên gia tin hành lang."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Our boss gets so much done. She must have more hours than us!",
          "sub": "Sếp mình làm được bao nhiêu việc. Chắc sếp có nhiều giờ hơn mình!",
          "face": "surprised"
        },
        {
          "id": "l3b",
          "lang": "en",
          "who": "thao",
          "say": "And my old classmate runs her own shop. Where does she find the time?",
          "sub": "Còn bạn học cũ của mình tự mở cửa hàng. Lấy đâu ra giờ nhỉ?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Bennett calls it a rare fairness. The richest don't get one extra minute, the poorest not one less.",
          "sub": "Bennett gọi đó là sự công bằng hiếm có. Người giàu nhất không được thêm một phút, người nghèo nhất không bị bớt một phút.",
          "keys": [
            "công bằng hiếm có"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The difference: who uses the hours outside duty, and who lets them drift.",
          "sub": "Chỗ khác nhau: ai dùng được phần giờ ngoài bổn phận, ai để nó trôi đi.",
          "keys": [
            "ngoài bổn phận"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p2,p3"
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
            "text": "③ 12:00 · “Xong dự án đã”",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:third"
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
                  "side": "left"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "artist-palette",
                "bowl-with-spoon"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:lunch",
            "caption": "Thứ Năm, 12:00 · quán cơm",
            "icon": "artist-palette"
          },
          {
            "id": "e-pal",
            "t": "illus",
            "name": "artist-palette",
            "x": 7932,
            "y": 160,
            "size": 90,
            "at": "l2:drawing"
          },
          {
            "id": "e-hua",
            "t": "text",
            "text": "Lớp vẽ: hứa từ tháng Giêng",
            "x": 8042,
            "y": 175,
            "size": 48,
            "at": "l3:January",
            "color": "coral"
          },
          {
            "id": "e-ill",
            "t": "text",
            "text": "“Bao giờ đỡ bận” = ảo tưởng",
            "x": 7932,
            "y": 300,
            "size": 50,
            "at": "l4:illusion",
            "hl": [
              {
                "text": "ảo tưởng",
                "at": "l4:illusion"
              }
            ]
          },
          {
            "id": "e-fill",
            "t": "text",
            "text": "Việc mới lấp chỗ việc cũ",
            "x": 7932,
            "y": 390,
            "size": 50,
            "at": "l5:fills",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: lunch with Dũng.",
          "sub": "Chặng ba: ăn trưa với Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "After this project, I'll sign up for a drawing class.",
          "sub": "Xong dự án này mình sẽ đăng ký lớp vẽ.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "You said that last January!",
          "sub": "Câu đó chị nói từ tháng Giêng năm ngoái!",
          "face": "laugh"
        },
        {
          "id": "l3b",
          "lang": "en",
          "who": "thao",
          "say": "Well, then came the audit. And moving house. Maybe next year, when I'm less busy.",
          "sub": "Thì sau đó có kiểm toán. Rồi chuyển nhà. Chắc sang năm, khi đỡ bận.",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Bennett calls it an illusion. Nobody will ever hand you extra hours.",
          "sub": "Bennett gọi đó là ảo tưởng. Sẽ chẳng ai cho bạn thêm giờ.",
          "keys": [
            "ảo tưởng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "New work always fills the gap old work leaves. A new project, a baby, a promotion.",
          "sub": "Việc mới luôn lấp vào chỗ việc cũ vừa xong. Dự án mới, con nhỏ, lên chức."
        }
      ],
      "ref": "p4,p5"
    },
    {
      "id": "s07",
      "module": "BRK-08",
      "data": {
        "title": "Năm ngoái của Thảo",
        "points": [
          {
            "label": "Tháng Giêng",
            "sub": "Hứa học vẽ",
            "illus": "artist-palette"
          },
          {
            "label": "Tháng Năm",
            "sub": "Xong dự án",
            "illus": "check-mark-button"
          },
          {
            "label": "Kiểm toán",
            "sub": "Lại bận",
            "illus": "clipboard"
          },
          {
            "label": "Chuyển nhà",
            "sub": "Lại bận",
            "illus": "package"
          },
          {
            "label": "Tết",
            "sub": "Lớp vẽ?",
            "illus": "red-question-mark"
          }
        ],
        "current": 4
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Project done in May. Then an audit, a move, Tết.",
          "sub": "Tháng Năm xong dự án. Rồi kiểm toán, chuyển nhà, Tết."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The free season never came.",
          "sub": "Mùa rảnh chẳng bao giờ tới.",
          "keys": [
            "chẳng bao giờ tới"
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
            "fit": "E",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "e-k",
            "t": "text",
            "text": "Đợi rảnh mới làm → đợi mãi",
            "x": 7932,
            "y": 510,
            "size": 56,
            "at": "l1:forever",
            "color": "accent",
            "hl": [
              {
                "text": "đợi mãi",
                "at": "l1:forever"
              }
            ]
          },
          {
            "id": "e-cut",
            "t": "text",
            "text": "1 khoảng nhỏ trong lịch bận",
            "x": 7932,
            "y": 610,
            "size": 46,
            "at": "l2:cut",
            "hl": [
              {
                "text": "1 khoảng nhỏ",
                "at": "l2:small"
              }
            ]
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "vd. 1 tối mỗi tuần",
            "x": 7932,
            "y": 690,
            "size": 44,
            "at": "l2:one evening",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Wait to be free, and you'll wait forever.",
          "sub": "Đợi rảnh mới làm thì sẽ đợi mãi.",
          "keys": [
            "đợi mãi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Instead, cut a small slot out of the busy calendar you have now. Say, one evening a week.",
          "sub": "Thay vào đó, cắt ra một khoảng nhỏ ngay trong lịch bận hiện tại. Chẳng hạn một tối mỗi tuần.",
          "keys": [
            "một khoảng nhỏ"
          ]
        }
      ],
      "ref": "p5,p6"
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
            "text": "④ 15:00 · Giờ khác tiền",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:fourth"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "give"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "money-bag"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:three",
            "caption": "Thứ Năm, 15:00",
            "icon": "money-bag"
          },
          {
            "id": "f-h1",
            "t": "text",
            "text": "Tiền",
            "x": 330,
            "y": 1250,
            "size": 50,
            "at": "l3:money"
          },
          {
            "id": "f-h2",
            "t": "text",
            "text": "Giờ",
            "x": 560,
            "y": 1250,
            "size": 50,
            "at": "l3:time",
            "color": "accent"
          },
          {
            "id": "f-r0",
            "t": "text",
            "text": "kiếm thêm",
            "x": 60,
            "y": 1330,
            "size": 46,
            "at": "l3:earn"
          },
          {
            "id": "f-y0",
            "t": "text",
            "text": "✓",
            "x": 350,
            "y": 1320,
            "size": 56,
            "at": "l3:earn+300"
          },
          {
            "id": "f-n0",
            "t": "text",
            "text": "✗",
            "x": 575,
            "y": 1320,
            "size": 56,
            "at": "l3:none",
            "color": "coral"
          },
          {
            "id": "f-r1",
            "t": "text",
            "text": "vay trước",
            "x": 60,
            "y": 1405,
            "size": 46,
            "at": "l3:borrow"
          },
          {
            "id": "f-y1",
            "t": "text",
            "text": "✓",
            "x": 350,
            "y": 1395,
            "size": 56,
            "at": "l3:borrow+300"
          },
          {
            "id": "f-n1",
            "t": "text",
            "text": "✗",
            "x": 575,
            "y": 1395,
            "size": 56,
            "at": "l3:none",
            "color": "coral"
          },
          {
            "id": "f-r2",
            "t": "text",
            "text": "để dành",
            "x": 60,
            "y": 1480,
            "size": 46,
            "at": "l3:save"
          },
          {
            "id": "f-y2",
            "t": "text",
            "text": "✓",
            "x": 350,
            "y": 1470,
            "size": 56,
            "at": "l3:save+300"
          },
          {
            "id": "f-n2",
            "t": "text",
            "text": "✗",
            "x": 575,
            "y": 1470,
            "size": 56,
            "at": "l3:none",
            "color": "coral"
          },
          {
            "id": "f-gold",
            "t": "text",
            "text": "“Thời gian là vàng”",
            "x": 60,
            "y": 1570,
            "size": 46,
            "at": "l4:gold"
          },
          {
            "id": "f-gold2",
            "t": "text",
            "text": "→ vàng còn vay được",
            "x": 470,
            "y": 1570,
            "size": 42,
            "at": "l4:borrow",
            "color": "coral",
            "hl": [
              {
                "text": "vay được",
                "at": "l4:borrow"
              }
            ]
          },
          {
            "id": "f-c1",
            "t": "text",
            "text": "Không ai lấy cắp được",
            "x": 60,
            "y": 1680,
            "size": 46,
            "at": "l5:steal",
            "color": "accent"
          },
          {
            "id": "f-c2",
            "t": "text",
            "text": "Không tiêu trước ngày mai",
            "x": 60,
            "y": 1755,
            "size": 46,
            "at": "l5:advance",
            "color": "accent",
            "hl": [
              {
                "text": "ngày mai",
                "at": "l5:tomorrow"
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
          "say": "Fourth stop: three p.m.",
          "sub": "Chặng bốn: ba giờ chiều."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Thảo, lend me a little money till payday?",
          "sub": "Thảo ơi, cho mượn ít tiền tới kỳ lương nhé?",
          "face": "happy"
        },
        {
          "id": "l2b",
          "lang": "en",
          "who": "thao",
          "say": "Sure. Shame nobody can lend me an hour.",
          "sub": "Được thôi. Tiếc là chẳng ai cho mình mượn một tiếng.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Money you can earn more of, borrow, and save. Time? None of the three.",
          "sub": "Tiền thì kiếm thêm được, vay trước được, để dành được. Thời gian? Không cái nào.",
          "keys": [
            "Không cái nào"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "We say time is gold. Bennett says time is better: gold you can borrow, tomorrow's hours never.",
          "sub": "Ta nói “Thời gian là vàng”. Bennett thấy giờ còn quý hơn: vàng còn vay được, giờ của ngày mai thì không.",
          "keys": [
            "Thời gian là vàng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Two comforts, though. Nobody can steal your time, and you can't spend tomorrow in advance.",
          "sub": "Nhưng có hai điều an ủi: không ai lấy cắp được giờ của bạn, và bạn không tiêu trước được ngày mai.",
          "keys": [
            "hai điều an ủi"
          ]
        }
      ],
      "ref": "p7,p8"
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
            "text": "⑤ 18:00 · Xe buýt về nhà",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:fifth"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:bus",
            "caption": "Thứ Năm, 18:00 · xe buýt",
            "icon": "bus"
          },
          {
            "id": "g-w",
            "t": "text",
            "text": "“Đợi đủ tiền học khoá lớn”",
            "x": 2028,
            "y": 1260,
            "size": 48,
            "at": "l2:wait",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: six p.m., the bus home.",
          "sub": "Chặng năm: sáu giờ chiều, xe buýt về nhà."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I want English to read papers for work. I'll wait until I can afford a big course.",
          "sub": "Mình muốn học tiếng Anh để đọc tài liệu. Đợi đủ tiền học một khoá lớn đã.",
          "face": "thinking"
        },
        {
          "id": "l2b",
          "lang": "en",
          "who": "thao",
          "say": "Three classes a week, after work? When?",
          "sub": "Ba buổi một tuần, sau giờ làm? Vào lúc nào?",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fast forward one year. Two Dũngs.",
          "sub": "Tua nhanh một năm. Hai phiên bản Dũng."
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s11",
      "module": "BRK-04",
      "data": {
        "title": "Một năm sau",
        "wrong": "Đợi khoá lớn: vẫn đang đợi",
        "right": "Tối T3, T5: một trang + từ điển",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrongIllus": "hourglass-not-done",
        "rightIllus": "open-book"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A: still waiting. Same English.",
          "sub": "A: vẫn đang đợi. Tiếng Anh vẫn thế."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "B: one page, two nights a week. Now he reads alone.",
          "sub": "B: một trang, hai tối mỗi tuần. Giờ tự đọc được.",
          "keys": [
            "tự đọc được"
          ]
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s12",
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
            "id": "g-walk",
            "t": "illus",
            "name": "person-walking",
            "x": 2028,
            "y": 1380,
            "size": 90,
            "at": "l1:pilgrim"
          },
          {
            "id": "g-pil",
            "t": "text",
            "text": "Người lên đường, chưa tới nơi",
            "x": 2138,
            "y": 1390,
            "size": 46,
            "at": "l1:pilgrim+300"
          },
          {
            "id": "g-gt",
            "t": "text",
            "text": ">",
            "x": 2028,
            "y": 1480,
            "size": 56,
            "at": "l2:beats",
            "color": "accent"
          },
          {
            "id": "g-home",
            "t": "text",
            "text": "người không rời chỗ quen",
            "x": 2088,
            "y": 1485,
            "size": 46,
            "at": "l2:never",
            "color": "muted"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Đi chưa tới vẫn hơn không đi",
            "x": 2028,
            "y": 1590,
            "size": 58,
            "at": "l3:better",
            "color": "accent",
            "hl": [
              {
                "text": "vẫn hơn không đi",
                "at": "l3:not going"
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
          "say": "Bennett tells of a pilgrim hoping to reach Mecca.",
          "sub": "Bennett kể về người mong hành hương tới thánh địa Mecca."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One who sets out and never arrives still beats one who never leaves home.",
          "sub": "Lên đường mà chưa tới nơi vẫn hơn người chẳng bao giờ rời chỗ quen."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not there yet is better than not going.",
          "sub": "Đi chưa tới vẫn hơn không đi.",
          "keys": [
            "Đi chưa tới vẫn hơn không đi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Doubt you'll ever be fluent? Set out anyway. One page is a step.",
          "sub": "Ngờ rằng mình chẳng bao giờ giỏi? Cứ lên đường. Một trang cũng là một bước."
        }
      ],
      "ref": "p15,p17"
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
          },
          {
            "at": 150,
            "fit": "H",
            "ms": 900
          },
          {
            "at": "l5",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 23:50 · Cảm giác bứt rứt",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:sixth"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "sad"
                }
              ],
              "props": [
                "bed",
                "closed-book"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:midnight",
            "caption": "Thứ Năm, 23:50 · lại lướt",
            "icon": "mobile-phone"
          },
          {
            "id": "h-d",
            "t": "text",
            "text": "Làm tròn bổn phận ✓",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l2:job"
          },
          {
            "id": "h-i",
            "t": "text",
            "text": "…mà vẫn bứt rứt",
            "x": 3996,
            "y": 1340,
            "size": 48,
            "at": "l2:itch",
            "color": "coral"
          },
          {
            "id": "h-ok",
            "t": "text",
            "text": "Không lạ · không vô ơn",
            "x": 3996,
            "y": 1430,
            "size": 48,
            "at": "l3:strange",
            "hl": [
              {
                "text": "không vô ơn",
                "at": "l3:ungrateful"
              }
            ]
          },
          {
            "id": "h-w",
            "t": "text",
            "text": "= muốn làm hơn mức buộc phải làm",
            "x": 3996,
            "y": 1520,
            "size": 40,
            "at": "l4:more than"
          },
          {
            "id": "h-r",
            "t": "text",
            "text": "lời nhắc ≠ áy náy",
            "x": 3996,
            "y": 1590,
            "size": 50,
            "at": "l4:reminder",
            "color": "accent",
            "hl": [
              {
                "text": "lời nhắc",
                "at": "l4:reminder"
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
          "say": "Sixth stop: back to ten to midnight.",
          "sub": "Chặng sáu: quay lại mười hai giờ kém mười."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thảo did her job, paid the rent, even saved a little. Still that itch: life is slipping by.",
          "sub": "Thảo làm tròn việc, trả tiền nhà, còn để dành chút ít. Mà vẫn bứt rứt: đời đang trôi qua."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Bennett wrote for exactly these people. You're not strange, and not ungrateful.",
          "sub": "Bennett viết đúng cho những người như thế. Bạn không lạ, cũng không vô ơn.",
          "keys": [
            "không vô ơn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That itch wants more than you must do. Take it as a reminder, not nightly guilt.",
          "sub": "Nó là mong muốn làm hơn mức buộc phải làm. Coi nó là lời nhắc, đừng thành áy náy mỗi tối.",
          "keys": [
            "lời nhắc"
          ]
        },
        {
          "id": "l4b",
          "lang": "en",
          "who": "det",
          "say": "But Thảo is tired, and has no idea what to do instead. So, the phone.",
          "sub": "Nhưng Thảo mệt, lại chẳng nghĩ ra nên làm gì thay vào. Thế là... điện thoại."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Tomorrow I'll blame myself again. Then scroll again.",
          "sub": "Mai mình lại tự trách. Rồi lại lướt tiếp.",
          "face": "sad"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Blame won't change an evening. One small, concrete task will.",
          "sub": "Tự trách không đổi được buổi tối. Một việc nhỏ cụ thể thì đổi được.",
          "keys": [
            "Một việc nhỏ cụ thể"
          ]
        }
      ],
      "ref": "p11,p12,p13,p14"
    },
    {
      "id": "s14",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Thứ Năm, 23:55",
        "actors": [
          {
            "id": "thao",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Phí cả tuần rồi, đợi thứ Hai làm lại",
          "why": "Mỗi sáng là 24 giờ mới; đợi thứ Hai chỉ để thêm vài ngày trôi qua.",
          "rule": "Hôm qua đã trôi, hôm nay vẫn nguyên"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "The whole week is wasted. I'll restart properly next Monday.",
          "sub": "Cả tuần phí rồi. Thứ Hai tuần sau làm lại cho tròn.",
          "face": "sad",
          "pose": "shrug",
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
          "say": "Each morning brings twenty four new hours. Yesterday doesn't take any away.",
          "sub": "Mỗi sáng là 24 giờ mới. Hôm qua không trừ bớt giờ nào.",
          "keys": [
            "24 giờ mới"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Waiting for Monday just lets more days slip by.",
          "sub": "Đợi thứ Hai chỉ để thêm vài ngày trôi qua."
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
          "who": "thao",
          "say": "Tomorrow night, then. One small thing.",
          "sub": "Vậy tối mai. Một việc nhỏ thôi.",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Yesterday is gone. Today is still whole.",
          "sub": "Hôm qua đã trôi, hôm nay vẫn nguyên.",
          "phase": "redo",
          "keys": [
            "hôm nay vẫn nguyên"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "sfx": [
        {
          "at": "l2",
          "key": "whoosh"
        }
      ],
      "ref": "p9,p10"
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
          },
          {
            "at": 150,
            "fit": "I",
            "ms": 900
          },
          {
            "at": "l4",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ T6 21:00 · Ba điều “giá mà”",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:seventh"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "think"
                }
              ],
              "props": [
                "spiral-notepad",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Friday",
            "caption": "Thứ Sáu, 21:00 · cầm bút trước",
            "icon": "spiral-notepad"
          },
          {
            "id": "i-u",
            "t": "text",
            "text": "Sâu bên dưới: muốn hiểu biết",
            "x": 5964,
            "y": 1250,
            "size": 46,
            "at": "l2:understand",
            "hl": [
              {
                "text": "hiểu biết",
                "at": "l2:understand"
              }
            ]
          },
          {
            "id": "i-lit",
            "t": "text",
            "text": "Văn chương: không phải đường duy nhất",
            "x": 5964,
            "y": 1320,
            "size": 38,
            "at": "l3:literature",
            "color": "muted"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1410,
            "w": 44,
            "h": 44,
            "at": "l4:drawing",
            "stroke": 4
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Vẽ",
            "x": 6029,
            "y": 1402,
            "size": 48,
            "at": "l4:drawing+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1485,
            "w": 44,
            "h": 44,
            "at": "l4:English",
            "stroke": 4
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Tiếng Anh",
            "x": 6029,
            "y": 1477,
            "size": 48,
            "at": "l4:English+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1560,
            "w": 44,
            "h": 44,
            "at": "l4:yoga",
            "stroke": 4
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Yoga",
            "x": 6029,
            "y": 1552,
            "size": 48,
            "at": "l4:yoga+200"
          },
          {
            "id": "i-x2",
            "t": "strike",
            "over": "i-l2",
            "at": "l5:crossed"
          },
          {
            "id": "i-later",
            "t": "text",
            "text": "→ để sau",
            "x": 6304,
            "y": 1477,
            "size": 40,
            "at": "l6:later",
            "color": "muted"
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1390,
            "size": 60,
            "at": "l6:curious",
            "color": "accent"
          },
          {
            "id": "i-one",
            "t": "text",
            "text": "Tò mò thật → 1 tối tuần này",
            "x": 5964,
            "y": 1650,
            "size": 48,
            "at": "l7:evening",
            "color": "accent",
            "hl": [
              {
                "text": "1 tối",
                "at": "l7:one evening"
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
          "say": "Seventh stop: Friday, nine p.m. Before touching her phone, Thảo picks up a pen.",
          "sub": "Chặng bảy: chín giờ tối thứ Sáu. Trước khi chạm điện thoại, Thảo cầm bút."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Bennett says that wish is really a hunger to understand: yourself and the world around you.",
          "sub": "Bennett nói mong muốn ấy thật ra là khát khao hiểu biết: hiểu mình và thế giới quanh mình.",
          "keys": [
            "khát khao hiểu biết"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And literature isn't the only way. Music, why house prices rise nearby, how you lived today.",
          "sub": "Văn chương không phải đường duy nhất: âm nhạc, vì sao giá nhà quanh mình tăng, hôm nay mình sống ra sao."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Three if only things: drawing, English, yoga.",
          "sub": "Ba điều “giá mà”: vẽ, tiếng Anh, yoga."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Yoga? Only because everyone says so. Crossed out.",
          "sub": "Yoga? Chỉ vì ai cũng bảo nên. Gạch.",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "English, later. Drawing, I'm truly curious.",
          "sub": "Tiếng Anh, để sau. Vẽ thì mình tò mò thật.",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Then ask: can it have one evening this week?",
          "sub": "Rồi tự hỏi: tuần này cho nó một buổi tối được không?",
          "keys": [
            "một buổi tối"
          ]
        }
      ],
      "ref": "p18,p19,p20"
    },
    {
      "id": "s16",
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
            "at": "l1",
            "fit": [
              "j-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3b",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "⑧ T6 23:50 · Cùng giường ấy",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "bed",
                "artist-palette"
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
            "at": "l1:same bed",
            "caption": "Thứ Sáu, 23:50",
            "icon": "artist-palette"
          },
          {
            "id": "j-ph",
            "t": "text",
            "text": "Điện thoại úp · bức vẽ con mèo",
            "x": 7932,
            "y": 1260,
            "size": 44,
            "at": "l2:face down"
          },
          {
            "id": "j-me",
            "t": "text",
            "text": "“Cho mình.”",
            "x": 7932,
            "y": 1350,
            "size": 64,
            "at": "l3:for me",
            "color": "accent",
            "hl": [
              {
                "text": "Cho mình.",
                "at": "l3:for me"
              }
            ]
          },
          {
            "id": "j-gold",
            "t": "text",
            "text": "Vàng vay được · giờ thì không",
            "x": 7932,
            "y": 1470,
            "size": 48,
            "at": "l4:gold"
          },
          {
            "id": "j-tm",
            "t": "text",
            "text": "…nhưng mai lại đầy 24 giờ",
            "x": 7932,
            "y": 1545,
            "size": 48,
            "at": "l4:tomorrow",
            "color": "accent",
            "hl": [
              {
                "text": "đầy 24 giờ",
                "at": "l4:full"
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
          "say": "Friday, ten to midnight. Same bed, same Thảo.",
          "sub": "Thứ Sáu, mười hai giờ kém mười. Vẫn chiếc giường ấy, vẫn Thảo ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But the phone is face down, and there's a rough sketch of a cat.",
          "sub": "Nhưng điện thoại úp xuống, và có một bức vẽ con mèo nguệch ngoạc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Not a drawing class. But I drew something. For me.",
          "sub": "Chưa phải lớp vẽ. Nhưng mình đã vẽ. Cho mình.",
          "face": "happy"
        },
        {
          "id": "l3b",
          "lang": "en",
          "who": "det",
          "say": "And Saturday morning? Twenty four brand new hours, untouched by this week.",
          "sub": "Còn sáng thứ Bảy? Lại 24 giờ mới tinh, tuần này chẳng trừ đi giờ nào."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Time is gold? Gold you can borrow. Time you can't, but tomorrow comes back full.",
          "sub": "“Thời gian là vàng”? Vàng còn vay được, giờ thì không. Nhưng mai lại đầy 24 giờ.",
          "keys": [
            "mai lại đầy 24 giờ"
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
      "id": "s17",
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
            "id": "j-n",
            "t": "text",
            "text": "Nhận ra = bước đầu",
            "x": 7932,
            "y": 1650,
            "size": 50,
            "at": "l1:first step",
            "hl": [
              {
                "text": "bước đầu",
                "at": "l1:first step"
              }
            ]
          },
          {
            "id": "j-y",
            "t": "text",
            "text": "Đọc thêm rồi hẹn sang năm",
            "x": 7932,
            "y": 1730,
            "size": 44,
            "at": "l1:next year",
            "color": "muted"
          },
          {
            "id": "j-yx",
            "t": "strike",
            "over": "j-y",
            "at": "l1:habit"
          },
          {
            "id": "j-nx",
            "t": "text",
            "text": "Tiếp: bắt đầu nhỏ",
            "x": 8772,
            "y": 1780,
            "size": 50,
            "at": "l2:small",
            "color": "accent",
            "hl": [
              {
                "text": "bắt đầu nhỏ",
                "at": "l2:small"
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
          "say": "Noticing is the first step. Reading more and waiting till next year is just the old habit.",
          "sub": "Nhận ra mới là bước đầu. Đọc thêm rồi hẹn sang năm chỉ là thói quen cũ.",
          "keys": [
            "bước đầu"
          ]
        },
        {
          "id": "l1b",
          "lang": "en",
          "who": "det",
          "say": "The full plan, seven and a half hours a week, is in the series map.",
          "sub": "Kế hoạch đủ, bảy tiếng rưỡi mỗi tuần, có ở bài tổng của chuỗi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next trap: too much, too soon. That's the lesson on starting small.",
          "sub": "Cái bẫy kế tiếp: hăng quá sức. Đó là bài “Bắt đầu nhỏ”.",
          "keys": [
            "Bắt đầu nhỏ"
          ]
        }
      ],
      "ref": "p21"
    },
    {
      "id": "s18",
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
            "at": "l1:everyone",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:yesterday",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:arriving",
            "fit": "G",
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
            "x": 6664,
            "y": 270,
            "at": "l1:everyone"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 760,
            "y": 1690,
            "at": "l2:yesterday"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2668,
            "y": 1700,
            "at": "l3:arriving"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: everyone has twenty four hours. Waiting to be free means waiting forever.",
          "sub": "Tóm lại: ai cũng có 24 giờ. Đợi rảnh là đợi mãi.",
          "keys": [
            "Đợi rảnh là đợi mãi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yesterday doesn't shrink today.",
          "sub": "Hôm qua không trừ vào hôm nay.",
          "keys": [
            "không trừ vào hôm nay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And setting out without arriving still beats staying home.",
          "sub": "Và đi chưa tới vẫn hơn không đi.",
          "keys": [
            "đi chưa tới"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s24",
      "module": "QUIZ-01",
      "ref": "questions[29]",
      "data": {
        "q": "Which is wiser, waiting for the perfect course or reading a page twice a week now?",
        "options": [
          "Waiting for the perfect course, because learning alone is a waste of effort",
          "Neither, since English is only useful for people who work at foreign companies",
          "Reading now, since small real progress is better than waiting for ideal conditions"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "open-book",
        "why": "Đọc ngay, dù ít, sau một năm có kết quả thật."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which is wiser, waiting for the perfect course or reading a page twice a week now?",
          "sub": "Khôn hơn là đợi khoá học hoàn hảo hay đọc một trang hai lần mỗi tuần ngay bây giờ?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Reading now, since small real progress is better than waiting for ideal conditions.",
          "sub": "Đọc ngay, vì tiến bộ nhỏ mà thật vẫn hơn đợi điều kiện lý tưởng."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Reading a little, starting now, gives real results after a year.",
          "sub": "Đọc ngay, dù ít, sau một năm có kết quả thật."
        }
      ]
    },
    {
      "id": "s25",
      "module": "END-05",
      "ref": "outro",
      "data": {
        "text": "Tối nay: chọn một điều, một buổi tối",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, before your phone, write one if only thing and give it one evening. Then try the forty questions!",
          "sub": "Tối nay, trước khi mở điện thoại, viết một điều “giá mà” và cho nó một buổi tối. Rồi thử bốn mươi câu nhé!",
          "face": "laugh"
        }
      ]
    }
  ],
  "hook": "HOOK-24",
  "notes": "#145 (hạt nhân #136 + biến thể #144): Đét đứng trái + bảng trắng 10 ô theo MỘT NGÀY thứ Năm của Thảo: 23:50 “lại thêm một ngày…” (A) → tua lại; câu hỏi chính (B) → ① 6:30 phép màu 24 giờ (C) → ② 9:00 công bằng hiếm có, Dũng (D) → ③ 12:00 “xong dự án sẽ học vẽ” (E) + BRK-08 năm ngoái của Thảo → ④ 15:00 giờ khác tiền (F) → ⑤ 18:00 xe buýt, Dũng học tiếng Anh, BRK-04 Cách A/B, người hành hương (G) → ⑥ 23:50 bứt rứt (H) → “Khoan đã!” đợi thứ Hai → ⑦ thứ Sáu 21:00 ba điều “giá mà” (I) → ⑧ thứ Sáu 23:50 cùng giường, bức vẽ con mèo (J, khép vòng “Thời gian là vàng”). Đổi tên: Phương (p5) → Thảo; chị Hồng (p13) → Thảo; Tùng (p16) → Dũng. Bản cũ: w145/bak/why-you-never-have-enough-time--w01.js.",
  "loop": {
    "open": "s01",
    "close": "s16"
  }
};
