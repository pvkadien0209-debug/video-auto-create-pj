// Kịch bản video W lần 3 (#110) — "Sao chổi và thiên thạch khác nhau thế nào?" · chuỗi "Hệ Mặt Trời và vũ trụ"
// Giọng đọc tiếng Anh, phụ đề tiếng Việt; hoạt hình + thẻ; đủ ý để làm 40 câu.
export default {
  "schema": "detpro.video-script/0.2",
  "id": "comets-vs-meteors--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "space-curious",
    "slug": "comets-vs-meteors",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Sao chổi và thiên thạch khác nhau thế nào?",
    "series": "Hệ Mặt Trời và vũ trụ"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#143 dựng lại theo hạt nhân #136: Đét đứng trái + một bảng trắng chung 10 ô (5 × 2) đi theo MỘT ĐÊM ngắm mưa sao băng Song Tử của Bin và ông Bình (chập tối → 5:30 sáng, 7 chặng ô C–I). Ô bảng vẽ sơ đồ bằng nét (vòng, đường, mũi tên): tên gọi, lõi–mây–đuôi sao chổi, Kuiper/Oort, độ cao sao băng cháy, dải bụi → mưa sao băng, phép thử nam châm. Toàn màn: Đét “Khoan đã!” (DLG p8, đuôi sao chổi), câu đố, kết. Đồng dao “Một ông sao sáng” mở và khép vòng. Bản cũ (lần 3, #110): w143/bak/comets-vs-meteors--w01.js.",
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
            "text": "1–2 giây",
            "x": 60,
            "y": 140,
            "size": 200,
            "at": "l1:one",
            "color": "accent",
            "hl": [
              {
                "text": "1–2 giây",
                "at": "l1:seconds"
              }
            ]
          },
          {
            "id": "a-life",
            "t": "text",
            "text": "cả “cuộc đời” một vệt sáng",
            "x": 70,
            "y": 400,
            "size": 52,
            "at": "l1:whole life"
          },
          {
            "id": "a-wrong",
            "t": "text",
            "text": "Nhiều người gọi: “sao chổi”?",
            "x": 70,
            "y": 500,
            "size": 52,
            "at": "l2:wrong name",
            "color": "muted"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: bài học · NASA Science — Meteors and Meteorites",
            "x": 60,
            "y": 730,
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
          "say": "One, two seconds. That is the whole life of tonight's streak of light.",
          "sub": "Một, hai giây: cả cuộc đời vệt sáng đêm nay.",
          "keys": [
            "Một, hai giây"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Blink, and it's gone. Yet many call it the wrong name.",
          "sub": "Chớp mắt là tắt. Vậy mà nhiều người gọi nhầm tên.",
          "keys": [
            "gọi nhầm tên"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh-ngan",
          "offsetMs": 200
        }
      ],
      "ref": "p3"
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
              "set": "park",
              "actors": [
                {
                  "id": "bin",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "night-with-stars",
                "shooting-star"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "bin",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "push"
                }
              ]
            },
            "at": "l1",
            "caption": "Chập tối · bãi cỏ ngoại thành",
            "icon": "night-with-stars"
          },
          {
            "id": "a-bin",
            "t": "text",
            "text": "Bin: “Sao chổi kìa!”",
            "x": 920,
            "y": 650,
            "size": 52,
            "at": "l3:comet",
            "color": "coral"
          },
          {
            "id": "a-poem",
            "t": "text",
            "text": "“Một ông sao sáng, hai ông…”",
            "x": 60,
            "y": 610,
            "size": 50,
            "at": "l5:rhyme",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Bin, nine, a professional sky watcher.",
          "sub": "Đây là Bin, chín tuổi, chuyên gia ngắm trời."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And his grandpa, Mr Bình. Mid December, a dark field out of town.",
          "sub": "Còn đây là ông Bình. Giữa tháng Mười Hai, bãi tối ngoại thành.",
          "keys": [
            "Giữa tháng Mười Hai"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "bin",
          "say": "Look, Grandpa! A comet!",
          "sub": "Ông ơi! Sao chổi kìa!",
          "face": "surprised",
          "pose": "point"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A streak, gone in a blink. Really a comet?",
          "sub": "Vụt qua, chớp mắt đã tắt. Sao chổi thật à?",
          "keys": [
            "Sao chổi thật à?"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "An old rhyme: one bright star, two shining stars. Tonight, Bin counts them all.",
          "sub": "Đồng dao: “Một ông sao sáng, hai ông sáng sao.” Đêm nay Bin đếm hết.",
          "keys": [
            "Một ông sao sáng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        },
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 900
        },
        {
          "at": "l3",
          "key": "whoosh-ngan"
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
            "text": "Sao chổi hay sao băng?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:comet",
            "hl": [
              {
                "text": "hay",
                "at": "l1:or"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: hai tên, một thứ",
            "x": 2028,
            "y": 160,
            "size": 52,
            "at": "l1:two names",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:not at all"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: cầu tuyết ≠ tia lửa",
            "x": 2028,
            "y": 250,
            "size": 58,
            "at": "l2:snowball",
            "color": "accent",
            "hl": [
              {
                "text": "cầu tuyết",
                "at": "l2:snowball"
              },
              {
                "text": "tia lửa",
                "at": "l2:spark"
              }
            ]
          },
          {
            "id": "b-c",
            "t": "text",
            "text": "Sao chổi: băng bụi, có đuôi",
            "x": 2028,
            "y": 350,
            "size": 50,
            "at": "l3:stays"
          },
          {
            "id": "b-s",
            "t": "text",
            "text": "Sao băng: đá nhỏ cháy, 1–2 giây",
            "x": 2828,
            "y": 350,
            "size": 50,
            "at": "l3:burns",
            "hl": [
              {
                "text": "1–2 giây",
                "at": "l3:second"
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
          "say": "So, comet or shooting star? Two names for one thing?",
          "sub": "Vậy sao chổi hay sao băng? Hai tên một thứ?",
          "keys": [
            "sao chổi hay sao băng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not at all. They differ like a snowball and a spark.",
          "sub": "Không hề. Khác nhau như cầu tuyết với tia lửa.",
          "keys": [
            "cầu tuyết",
            "tia lửa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One stays for nights, with a tail. The other burns out in a second or two.",
          "sub": "Một thứ ở nhiều đêm, có đuôi. Thứ kia cháy tắt trong một, hai giây."
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
            "text": "7 chặng · 1 đêm ngắm sao",
            "x": 2028,
            "y": 470,
            "size": 56,
            "at": "l1:seven",
            "hl": [
              {
                "text": "1 đêm",
                "at": "l1:one night"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 570,
            "w": 212,
            "h": 100,
            "at": "l1:seven+400",
            "color": "muted",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2260,
            "y": 570,
            "w": 212,
            "h": 100,
            "at": "l1:seven+700",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2492,
            "y": 570,
            "w": 212,
            "h": 100,
            "at": "l1:seven+1000",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2724,
            "y": 570,
            "w": 212,
            "h": 100,
            "at": "l1:seven+1300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2956,
            "y": 570,
            "w": 212,
            "h": 100,
            "at": "l1:seven+1600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3188,
            "y": 570,
            "w": 212,
            "h": 100,
            "at": "l1:seven+1900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3420,
            "y": 570,
            "w": 212,
            "h": 100,
            "at": "l1:seven+2200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "19:00",
            "x": 2058,
            "y": 590,
            "size": 48,
            "at": "l1:seven+520"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "20:00",
            "x": 2290,
            "y": 590,
            "size": 48,
            "at": "l1:seven+820"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "21:00",
            "x": 2522,
            "y": 590,
            "size": 48,
            "at": "l1:seven+1120"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "22:00",
            "x": 2754,
            "y": 590,
            "size": 48,
            "at": "l1:seven+1420"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "23:00",
            "x": 2986,
            "y": 590,
            "size": 48,
            "at": "l1:seven+1720"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "0:30",
            "x": 3218,
            "y": 590,
            "size": 48,
            "at": "l1:seven+2020"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "5:30",
            "x": 3450,
            "y": 590,
            "size": 48,
            "at": "l1:seven+2320"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Let's follow them through one night, from seven p.m. to half past five, in seven stops.",
          "sub": "Theo hai ông cháu qua một đêm, từ bảy giờ tối tới năm rưỡi sáng.",
          "keys": [
            "một đêm"
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
            "at": "l2",
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
            "text": "① 19:00 Gọi cho đúng tên",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:first"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 5036,
            "y": 140,
            "w": 600,
            "data": {
              "set": "park",
              "actors": [
                {
                  "id": "bin",
                  "side": "left"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "night-with-stars"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "bin",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "binh",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:mat",
            "caption": "19:00 · trải bạt",
            "icon": "camping"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop, seven p.m. Mat down, class open.",
          "sub": "Chặng một, bảy giờ tối. Trải bạt, mở lớp.",
          "keys": [
            "bảy giờ tối"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Comet, meteor, meteorite... they all sound the same!",
          "sub": "Sao chổi, sao băng, thiên thạch… na ná nhau!",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Let's call the roll.",
          "sub": "Mình điểm danh nhé.",
          "pose": "explain",
          "face": "happy"
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
            "fit": "C",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "c-core",
            "t": "ring",
            "x": 4026,
            "y": 200,
            "w": 70,
            "h": 70,
            "at": "l1:ball"
          },
          {
            "id": "c-t1",
            "t": "line",
            "pts": [
              [
                4101,
                220
              ],
              [
                4296,
                170
              ]
            ],
            "at": "l1:dust"
          },
          {
            "id": "c-t2",
            "t": "line",
            "pts": [
              [
                4104,
                235
              ],
              [
                4316,
                235
              ]
            ],
            "at": "l1:circling"
          },
          {
            "id": "c-t3",
            "t": "line",
            "pts": [
              [
                4101,
                250
              ],
              [
                4296,
                300
              ]
            ],
            "at": "l1:sun"
          },
          {
            "id": "c-cm",
            "t": "text",
            "text": "Sao chổi · comet",
            "x": 3996,
            "y": 320,
            "size": 46,
            "at": "l1:path",
            "hl": [
              {
                "text": "Sao chổi",
                "at": "l1:path+300"
              }
            ]
          },
          {
            "id": "c-rock",
            "t": "ring",
            "x": 4456,
            "y": 210,
            "w": 44,
            "h": 40,
            "at": "l2:small rocks",
            "stroke": 5
          },
          {
            "id": "c-rk",
            "t": "text",
            "text": "đá, bụi trôi",
            "x": 4406,
            "y": 270,
            "size": 40,
            "at": "l2:drifting",
            "color": "muted"
          },
          {
            "id": "c-atm",
            "t": "line",
            "pts": [
              [
                3976,
                440
              ],
              [
                4236,
                425
              ],
              [
                4496,
                420
              ],
              [
                4756,
                425
              ],
              [
                4996,
                440
              ]
            ],
            "at": "l3:dives",
            "color": "accent",
            "stroke": 5
          },
          {
            "id": "c-atml",
            "t": "text",
            "text": "khí quyển",
            "x": 3996,
            "y": 450,
            "size": 36,
            "at": "l3:air",
            "color": "accent"
          },
          {
            "id": "c-fall",
            "t": "arrow",
            "from": [
              4481,
              260
            ],
            "to": [
              4521,
              430
            ],
            "at": "l3:dives+300",
            "color": "muted",
            "stroke": 4
          },
          {
            "id": "c-streak",
            "t": "arrow",
            "from": [
              4526,
              450
            ],
            "to": [
              4596,
              610
            ],
            "at": "l3:burns",
            "color": "coral",
            "stroke": 8
          },
          {
            "id": "c-mt",
            "t": "text",
            "text": "Sao băng · meteor",
            "x": 4626,
            "y": 470,
            "size": 46,
            "at": "l3:streak",
            "color": "coral",
            "hl": [
              {
                "text": "Sao băng",
                "at": "l3:meteor"
              }
            ]
          },
          {
            "id": "c-gnd",
            "t": "line",
            "pts": [
              [
                3976,
                700
              ],
              [
                4996,
                700
              ]
            ],
            "at": "l4:lands",
            "stroke": 5
          },
          {
            "id": "c-mite",
            "t": "box",
            "x": 4586,
            "y": 658,
            "w": 38,
            "h": 38,
            "at": "l4:crumb",
            "hatch": true,
            "stroke": 4
          },
          {
            "id": "c-mtl",
            "t": "text",
            "text": "Thiên thạch · meteorite",
            "x": 4636,
            "y": 620,
            "size": 40,
            "at": "l4:meteorite",
            "hl": [
              {
                "text": "meteorite",
                "at": "l4:meteorite+300"
              }
            ]
          },
          {
            "id": "c-ast",
            "t": "ring",
            "x": 4736,
            "y": 170,
            "w": 120,
            "h": 90,
            "at": "l5:bigger rock",
            "stroke": 7
          },
          {
            "id": "c-asl",
            "t": "text",
            "text": "Tiểu hành tinh · asteroid",
            "x": 4636,
            "y": 280,
            "size": 38,
            "at": "l5:asteroid"
          },
          {
            "id": "c-asm",
            "t": "text",
            "text": "phần lớn: giữa Hỏa – Mộc",
            "x": 4636,
            "y": 330,
            "size": 34,
            "at": "l5:mars",
            "color": "muted"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: NASA Science — 10 Things: What's That Space Rock?",
            "x": 5036,
            "y": 735,
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
          "say": "A comet: a ball of ice and dust, circling the Sun on a long path.",
          "sub": "Sao chổi: khối băng bụi, quay quanh Mặt Trời theo đường rất dài.",
          "keys": [
            "khối băng bụi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Small rocks or dust drifting in space: space rocks.",
          "sub": "Đá, bụi nhỏ trôi trong không gian: gọi chung là thiên thạch."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "When one dives into our air and burns, that streak is a meteor.",
          "sub": "Lao vào khí quyển, cháy sáng: vệt ấy là sao băng, meteor.",
          "keys": [
            "sao băng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A crumb that survives and lands: a meteorite.",
          "sub": "Mẩu sót lại rơi xuống đất: thiên thạch, meteorite.",
          "keys": [
            "meteorite"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "An asteroid: a bigger rock, mostly between Mars and Jupiter.",
          "sub": "Asteroid: tiểu hành tinh, đá lớn, phần lớn giữa Sao Hỏa và Sao Mộc.",
          "keys": [
            "tiểu hành tinh"
          ]
        }
      ],
      "ref": "p1,p2"
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
            "at": "l5:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 20:00 Vụt qua hay đứng yên?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:second"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 7004,
            "y": 140,
            "w": 600,
            "data": {
              "set": "park",
              "actors": [
                {
                  "id": "bin",
                  "side": "left"
                },
                {
                  "id": "binh",
                  "side": "right"
                }
              ],
              "props": [
                "night-with-stars",
                "shooting-star"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "bin",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:streak",
            "caption": "20:00 · lại một vệt sáng",
            "icon": "shooting-star"
          },
          {
            "id": "d-bin",
            "t": "text",
            "text": "“Lại sao chổi!”",
            "x": 7204,
            "y": 580,
            "size": 46,
            "at": "l2:another",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop, eight p.m. Another streak.",
          "sub": "Chặng hai, tám giờ tối. Lại một vệt sáng.",
          "keys": [
            "tám giờ tối"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "A comet! Another comet!",
          "sub": "Sao chổi! Lại sao chổi!",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "One, two, gone. Comets aren't that fast.",
          "sub": "Một, hai, tắt. Sao chổi đâu nhanh thế.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "bin",
          "say": "So what does a comet look like?",
          "sub": "Thế sao chổi trông thế nào ạ?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "binh",
          "say": "A fuzzy spot with a tail, almost still, for nights or even weeks.",
          "sub": "Đốm mờ có đuôi, gần như đứng yên, nhiều đêm, có khi nhiều tuần.",
          "pose": "explain",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh-ngan",
          "offsetMs": 600
        }
      ],
      "ref": "p3,p4"
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
            "id": "d-sb",
            "t": "text",
            "text": "Sao băng",
            "x": 5964,
            "y": 150,
            "size": 58,
            "at": "l1:shooting star",
            "color": "coral"
          },
          {
            "id": "d-binx",
            "t": "strike",
            "over": "d-bin",
            "at": "l1:trick"
          },
          {
            "id": "d-ar",
            "t": "arrow",
            "from": [
              5994,
              250
            ],
            "to": [
              6234,
              380
            ],
            "at": "l1:burning",
            "color": "coral",
            "stroke": 8
          },
          {
            "id": "d-in",
            "t": "text",
            "text": "cháy trong khí quyển",
            "x": 5964,
            "y": 470,
            "size": 42,
            "at": "l1:our air",
            "color": "muted"
          },
          {
            "id": "d-12",
            "t": "text",
            "text": "1–2 giây rồi tắt",
            "x": 5964,
            "y": 400,
            "size": 48,
            "at": "l1:second",
            "hl": [
              {
                "text": "1–2 giây",
                "at": "l1:or two"
              }
            ]
          },
          {
            "id": "d-sc",
            "t": "text",
            "text": "Sao chổi",
            "x": 6464,
            "y": 150,
            "size": 58,
            "at": "l2:comet"
          },
          {
            "id": "d-core",
            "t": "ring",
            "x": 6504,
            "y": 270,
            "w": 54,
            "h": 54,
            "at": "l2:comet+200"
          },
          {
            "id": "d-t1",
            "t": "line",
            "pts": [
              [
                6562,
                285
              ],
              [
                6804,
                230
              ]
            ],
            "at": "l2:far"
          },
          {
            "id": "d-t2",
            "t": "line",
            "pts": [
              [
                6564,
                298
              ],
              [
                6824,
                298
              ]
            ],
            "at": "l2:hangs"
          },
          {
            "id": "d-t3",
            "t": "line",
            "pts": [
              [
                6562,
                312
              ],
              [
                6804,
                365
              ]
            ],
            "at": "l2:beyond"
          },
          {
            "id": "d-still",
            "t": "text",
            "text": "đốm mờ, đứng yên nhiều đêm",
            "x": 6464,
            "y": 400,
            "size": 42,
            "at": "l2:sleepy",
            "hl": [
              {
                "text": "đứng yên",
                "at": "l2:tadpole"
              }
            ]
          },
          {
            "id": "d-out",
            "t": "text",
            "text": "ở ngoài khí quyển",
            "x": 6464,
            "y": 470,
            "size": 42,
            "at": "l2:tadpole",
            "color": "muted"
          },
          {
            "id": "d-news",
            "t": "illus",
            "name": "newspaper",
            "x": 5964,
            "y": 545,
            "size": 70,
            "at": "l3:news"
          },
          {
            "id": "d-nt",
            "t": "text",
            "text": "Báo đưa tin → tìm đốm mờ",
            "x": 6054,
            "y": 555,
            "size": 46,
            "at": "l3:look",
            "hl": [
              {
                "text": "tìm đốm mờ",
                "at": "l3:fuzzy spot"
              }
            ]
          },
          {
            "id": "d-r1",
            "t": "text",
            "text": "Vụt qua → sao băng",
            "x": 5964,
            "y": 650,
            "size": 54,
            "at": "l4:zips",
            "color": "accent",
            "hl": [
              {
                "text": "Vụt qua",
                "at": "l4:zips"
              }
            ]
          },
          {
            "id": "d-r2",
            "t": "text",
            "text": "Đứng lâu, có đuôi → sao chổi",
            "x": 6464,
            "y": 650,
            "size": 54,
            "at": "l4:stays",
            "color": "accent",
            "hl": [
              {
                "text": "có đuôi",
                "at": "l4:tail"
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
          "say": "Trick: a shooting star is rock burning in our air, gone in a second or two.",
          "sub": "Mẹo đây: sao băng là hạt đá cháy trong khí quyển, một, hai giây là tắt.",
          "keys": [
            "một, hai giây"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A comet hangs far beyond our air, like a sleepy tadpole.",
          "sub": "Sao chổi ở xa, ngoài khí quyển, treo giữa sao như nòng nọc ngủ gật.",
          "keys": [
            "ngoài khí quyển"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "News of a comet? Look for a fuzzy spot with a tail, not a streak.",
          "sub": "Báo đưa tin sao chổi? Tìm đốm mờ có đuôi, đừng chờ vụt qua.",
          "keys": [
            "đốm mờ có đuôi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Zips past: shooting star. Stays, with a tail: comet.",
          "sub": "Vụt qua là sao băng, đứng lâu có đuôi là sao chổi.",
          "keys": [
            "Vụt qua là sao băng",
            "đứng lâu có đuôi là sao chổi"
          ]
        }
      ],
      "ref": "p3,p4,p5"
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
            "at": "l3:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 21:00 Quả cầu tuyết bẩn",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:third"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8992,
            "y": 130,
            "w": 560,
            "data": {
              "set": "park",
              "actors": [
                {
                  "id": "bin",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "binh",
                  "side": "right"
                }
              ],
              "props": [
                "night-with-stars"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "bin",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "binh",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:homework",
            "caption": "21:00 · Bin vẽ sao chổi",
            "icon": "comet"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop, nine p.m. Bin draws a comet for homework.",
          "sub": "Chặng ba, chín giờ tối. Trời vắng, Bin vẽ sao chổi làm bài tập.",
          "keys": [
            "vẽ sao chổi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Grandpa, what is a comet made of?",
          "sub": "Ông ơi, sao chổi làm bằng gì?",
          "face": "thinking",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Ice, dust and rock. A dirty snowball.",
          "sub": "Băng, bụi và đá. Quả cầu tuyết bẩn.",
          "face": "happy",
          "pose": "explain"
        }
      ],
      "ref": "p6"
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
          }
        ],
        "items": [
          {
            "id": "e-core",
            "t": "text",
            "text": "Lõi: vài – vài chục km",
            "x": 7932,
            "y": 600,
            "size": 46,
            "at": "l1:core",
            "hl": [
              {
                "text": "vài – vài chục km",
                "at": "l1:kilometres"
              }
            ]
          },
          {
            "id": "e-dsb",
            "t": "text",
            "text": "“Quả cầu tuyết bẩn”",
            "x": 8472,
            "y": 600,
            "size": 46,
            "at": "l1:wide",
            "color": "accent"
          },
          {
            "id": "e-far",
            "t": "ring",
            "x": 8852,
            "y": 175,
            "w": 30,
            "h": 30,
            "at": "l2:far",
            "color": "muted",
            "stroke": 4
          },
          {
            "id": "e-farl",
            "t": "text",
            "text": "xa: lạnh cóng, tối",
            "x": 8732,
            "y": 220,
            "size": 32,
            "at": "l2:frozen",
            "color": "muted"
          },
          {
            "id": "e-sun",
            "t": "ring",
            "x": 7932,
            "y": 280,
            "w": 170,
            "h": 170,
            "at": "l2:sun",
            "color": "coral",
            "stroke": 7
          },
          {
            "id": "e-sunl",
            "t": "text",
            "text": "Mặt Trời",
            "x": 7950,
            "y": 340,
            "size": 40,
            "at": "l2:sun+300",
            "color": "coral"
          },
          {
            "id": "e-nc",
            "t": "ring",
            "x": 8292,
            "y": 345,
            "w": 40,
            "h": 40,
            "at": "l3:near"
          },
          {
            "id": "e-cloud",
            "t": "ring",
            "x": 8242,
            "y": 300,
            "w": 140,
            "h": 130,
            "at": "l4:cloud",
            "dash": true,
            "color": "accent"
          },
          {
            "id": "e-cl",
            "t": "text",
            "text": "Mây sáng: hàng trăm nghìn km",
            "x": 7932,
            "y": 680,
            "size": 44,
            "at": "l4:hundreds",
            "hl": [
              {
                "text": "hàng trăm nghìn km",
                "at": "l4:thousands"
              }
            ]
          },
          {
            "id": "e-t1",
            "t": "line",
            "pts": [
              [
                8384,
                352
              ],
              [
                8772,
                300
              ]
            ],
            "at": "l4:tails"
          },
          {
            "id": "e-t2",
            "t": "line",
            "pts": [
              [
                8386,
                366
              ],
              [
                8792,
                366
              ]
            ],
            "at": "l4:even"
          },
          {
            "id": "e-t3",
            "t": "line",
            "pts": [
              [
                8384,
                380
              ],
              [
                8772,
                440
              ]
            ],
            "at": "l4:longer"
          },
          {
            "id": "e-tl",
            "t": "text",
            "text": "đuôi còn dài hơn",
            "x": 8592,
            "y": 680,
            "size": 44,
            "at": "l4:longer+300",
            "color": "muted"
          },
          {
            "id": "e-push",
            "t": "arrow",
            "from": [
              8112,
              500
            ],
            "to": [
              8432,
              500
            ],
            "at": "l5:push",
            "color": "accent"
          },
          {
            "id": "e-pl",
            "t": "text",
            "text": "gió + ánh sáng Mặt Trời đẩy",
            "x": 8462,
            "y": 478,
            "size": 36,
            "at": "l5:sunlight",
            "color": "accent",
            "hl": [
              {
                "text": "đẩy",
                "at": "l5:push"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: NASA Science — Comet Facts",
            "x": 8992,
            "y": 735,
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
          "say": "The core is a few to a few dozen kilometres wide.",
          "sub": "Lõi rộng vài đến vài chục km.",
          "keys": [
            "vài chục km"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Far from the Sun, it's frozen and dark.",
          "sub": "Xa Mặt Trời: lạnh cóng, tối, gần như vô hình."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Near the Sun, ice turns to gas, dragging dust along.",
          "sub": "Gần Mặt Trời: băng bốc hơi, kéo bụi theo."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A bright cloud swells around it, hundreds of thousands of kilometres wide. Tails, even longer.",
          "sub": "Mây sáng phồng quanh lõi, rộng hàng trăm nghìn km. Đuôi còn dài hơn.",
          "keys": [
            "hàng trăm nghìn km"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Sunlight and solar wind push the tail.",
          "sub": "Gió và ánh sáng Mặt Trời đẩy đuôi.",
          "keys": [
            "đẩy đuôi"
          ]
        }
      ],
      "ref": "p6,p7"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "ref": "p8,p9",
      "data": {
        "set": "park",
        "label": "21:00 · Bin vẽ sao chổi",
        "actors": [
          {
            "id": "bin",
            "side": "left",
            "pose": "hold"
          },
          {
            "id": "binh",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Vẽ đuôi kéo theo phía sau",
          "why": "Đuôi không kéo theo như đuôi diều; ánh sáng và gió Mặt Trời đẩy nó ra xa Mặt Trời.",
          "rule": "Đuôi sao chổi luôn quay lưng với Mặt Trời"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "binh",
          "say": "This comet has passed the Sun. Where does its tail go?",
          "sub": "Sao chổi này đã vòng qua Mặt Trời. Đuôi ở đâu?",
          "pose": "explain",
          "to": "bin"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Behind it, of course! Like a kite's tail!",
          "sub": "Phía sau chứ ạ! Như đuôi diều!",
          "face": "happy",
          "pose": "hold",
          "stop": true
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hold on!",
          "sub": "Khoan đã!",
          "face": "wink"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Remember the push? The tail always points away from the Sun.",
          "sub": "Nhớ cú đẩy chứ? Đuôi luôn chỉ ra xa Mặt Trời.",
          "keys": [
            "chỉ ra xa Mặt Trời"
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
          "who": "binh",
          "say": "Draw the Sun first, then turn the tail away.",
          "sub": "Vẽ Mặt Trời trước, rồi cho đuôi quay ra xa.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "bin",
          "say": "Oh! It's flying away, so the tail goes in front!",
          "sub": "À! Nó bay ra xa, nên đuôi đi trước!",
          "phase": "redo",
          "face": "surprised"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      }
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
            "at": "l1",
            "fit": [
              "e-t1",
              "e-t2",
              "e-t3",
              "e-fly"
            ],
            "zoom": 1.2,
            "ms": 700
          },
          {
            "at": "l1:always",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-ring",
            "t": "ring",
            "around": [
              "e-t1",
              "e-t2",
              "e-t3"
            ],
            "color": "accent",
            "stroke": 7,
            "at": "l1:tail"
          },
          {
            "id": "e-fly",
            "t": "text",
            "text": "bay ra xa → đuôi đi trước",
            "x": 8172,
            "y": 160,
            "size": 42,
            "at": "l1:flying",
            "color": "accent",
            "hl": [
              {
                "text": "đuôi đi trước",
                "at": "l1:in front"
              }
            ]
          },
          {
            "id": "e-rule",
            "t": "text",
            "text": "Đuôi luôn quay lưng Mặt Trời",
            "x": 8992,
            "y": 590,
            "size": 42,
            "at": "l1:always",
            "color": "accent",
            "hl": [
              {
                "text": "quay lưng",
                "at": "l1:turns its back"
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
          "say": "Flying away? Then the tail leads, in front. A comet's tail always turns its back on the Sun. How rude.",
          "sub": "Bay ra xa thì đuôi đi trước. Đuôi sao chổi luôn quay lưng với Mặt Trời. Kiêu ghê.",
          "keys": [
            "quay lưng với Mặt Trời"
          ]
        }
      ],
      "ref": "p8,p9"
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
            "at": "l2",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 22:00 Nhà của sao chổi",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:fourth"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 1120,
            "y": 1220,
            "w": 560,
            "data": {
              "set": "park",
              "actors": [
                {
                  "id": "bin",
                  "side": "left"
                },
                {
                  "id": "binh",
                  "side": "right"
                }
              ],
              "props": [
                "night-with-stars"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "bin",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "binh",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:looks up",
            "caption": "22:00 · ngước nhìn trời",
            "icon": "telescope"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop, ten p.m. Bin looks up.",
          "sub": "Chặng bốn, mười giờ đêm. Bin ngước nhìn trời.",
          "keys": [
            "mười giờ đêm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Do comets have a home?",
          "sub": "Sao chổi có nhà không ông?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Far away. Past Neptune, and farther still.",
          "sub": "Xa lắm. Ngoài Sao Hải Vương, và xa hơn nữa.",
          "pose": "point"
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
            "id": "f-sun",
            "t": "ring",
            "x": 60,
            "y": 1420,
            "w": 70,
            "h": 70,
            "at": "l1:many",
            "color": "coral",
            "stroke": 6
          },
          {
            "id": "f-sunl",
            "t": "text",
            "text": "Mặt Trời",
            "x": 40,
            "y": 1500,
            "size": 30,
            "at": "l1:many+300",
            "color": "coral"
          },
          {
            "id": "f-nep",
            "t": "ring",
            "x": 330,
            "y": 1435,
            "w": 40,
            "h": 40,
            "at": "l1:neptune"
          },
          {
            "id": "f-nepl",
            "t": "text",
            "text": "Sao Hải Vương",
            "x": 290,
            "y": 1485,
            "size": 30,
            "at": "l1:neptune+300"
          },
          {
            "id": "f-kui",
            "t": "ring",
            "x": 20,
            "y": 1320,
            "w": 600,
            "h": 290,
            "at": "l1:kuiper",
            "dash": true,
            "color": "accent"
          },
          {
            "id": "f-kuil",
            "t": "text",
            "text": "Vành đai Kuiper",
            "x": 380,
            "y": 1340,
            "size": 40,
            "at": "l1:belt",
            "color": "accent",
            "hl": [
              {
                "text": "Kuiper",
                "at": "l1:belt+300"
              }
            ]
          },
          {
            "id": "f-oort",
            "t": "ring",
            "x": 0,
            "y": 1240,
            "w": 1080,
            "h": 440,
            "at": "l2:oort",
            "dash": true,
            "color": "muted"
          },
          {
            "id": "f-oortl",
            "t": "text",
            "text": "Đám mây Oort: xa hơn nữa",
            "x": 660,
            "y": 1390,
            "size": 40,
            "at": "l2:cloud",
            "hl": [
              {
                "text": "Oort",
                "at": "l2:farther"
              }
            ]
          },
          {
            "id": "f-hl",
            "t": "line",
            "pts": [
              [
                60,
                1750
              ],
              [
                1000,
                1750
              ]
            ],
            "at": "l3:halley",
            "stroke": 5
          },
          {
            "id": "f-76",
            "t": "text",
            "text": "Halley: ~76 năm một lần",
            "x": 330,
            "y": 1680,
            "size": 46,
            "at": "l3:seventy",
            "color": "accent",
            "hl": [
              {
                "text": "~76 năm",
                "at": "l3:seventy six"
              }
            ]
          },
          {
            "id": "f-86",
            "t": "text",
            "text": "1986",
            "x": 60,
            "y": 1765,
            "size": 50,
            "at": "l4:nineteen"
          },
          {
            "id": "f-61",
            "t": "text",
            "text": "2061",
            "x": 880,
            "y": 1765,
            "size": 50,
            "at": "l4:twenty sixty",
            "color": "accent",
            "hl": [
              {
                "text": "2061",
                "at": "l4:sixty one"
              }
            ]
          },
          {
            "id": "f-date",
            "t": "text",
            "text": "Bin hẹn ông cùng xem",
            "x": 1120,
            "y": 1690,
            "size": 42,
            "at": "l4:date",
            "hl": [
              {
                "text": "cùng xem",
                "at": "l4:booked"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: NASA Science — Comet Facts; 1P/Halley",
            "x": 1120,
            "y": 1825,
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
          "say": "Many come from the Kuiper belt, beyond Neptune.",
          "sub": "Nhiều sao chổi đến từ vành đai Kuiper, ngoài Sao Hải Vương.",
          "keys": [
            "vành đai Kuiper"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Others from the Oort cloud, farther still.",
          "sub": "Số khác từ đám mây Oort, xa hơn nữa.",
          "keys": [
            "đám mây Oort"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Halley's Comet returns about every seventy six years.",
          "sub": "Sao chổi Halley khoảng 76 năm quay lại một lần.",
          "keys": [
            "76 năm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Last time: nineteen eighty six. Next: around twenty sixty one. Date booked, Grandpa!",
          "sub": "Lần trước: 1986. Lần tới: khoảng 2061. Hẹn ông cùng xem nhé!",
          "keys": [
            "2061"
          ]
        }
      ],
      "ref": "p10"
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
            "at": "l2",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 23:00 Có rơi trúng mình?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:fifth"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 3088,
            "y": 1220,
            "w": 560,
            "data": {
              "set": "park",
              "actors": [
                {
                  "id": "bin",
                  "side": "left"
                },
                {
                  "id": "binh",
                  "side": "right"
                }
              ],
              "props": [
                "night-with-stars"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "bin",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "binh",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:colder",
            "caption": "23:00 · gió lạnh hơn",
            "icon": "shooting-star"
          },
          {
            "id": "g-calm",
            "t": "text",
            "text": "Bình tĩnh + có lý do",
            "x": 3088,
            "y": 1680,
            "size": 44,
            "at": "l5:calm",
            "color": "accent",
            "hl": [
              {
                "text": "có lý do",
                "at": "l5:reason"
              }
            ]
          },
          {
            "id": "g-nope",
            "t": "text",
            "text": "> “không sao đâu”",
            "x": 3088,
            "y": 1750,
            "size": 40,
            "at": "l5:worry",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop, eleven p.m. Colder wind, heavier question.",
          "sub": "Chặng năm, mười một giờ đêm. Gió lạnh, câu hỏi nặng.",
          "keys": [
            "mười một giờ đêm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Grandpa, could a comet crash into Earth?",
          "sub": "Ông ơi, sao chổi có đâm vào Trái Đất không?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Shooting stars are grains of sand burning high up. They hit no one.",
          "sub": "Sao băng chỉ là hạt cát cháy trên cao, không trúng ai.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Big ones are rare. Scientists watch them, and tested a way to push one away.",
          "sub": "Khối lớn rất hiếm. Các nhà khoa học theo dõi, còn thử được cách đẩy đi.",
          "face": "happy",
          "react": {
            "bin": "happy"
          }
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Calm, with a reason. Better than, don't worry.",
          "sub": "Bình tĩnh, có lý do. Hơn hẳn câu “không sao đâu”.",
          "keys": [
            "Bình tĩnh, có lý do"
          ]
        }
      ],
      "ref": "p21,p11,p12"
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
            "id": "g-alt",
            "t": "line",
            "pts": [
              [
                2108,
                1650
              ],
              [
                2108,
                1250
              ]
            ],
            "at": "l1:most",
            "color": "muted",
            "stroke": 4
          },
          {
            "id": "g-grain",
            "t": "ring",
            "x": 2268,
            "y": 1305,
            "w": 26,
            "h": 26,
            "at": "l1:sand",
            "stroke": 5
          },
          {
            "id": "g-size",
            "t": "text",
            "text": "cỡ hạt cát, hạt đậu",
            "x": 2328,
            "y": 1318,
            "size": 40,
            "at": "l1:pea",
            "hl": [
              {
                "text": "hạt cát, hạt đậu",
                "at": "l1:pieces"
              }
            ]
          },
          {
            "id": "g-altl",
            "t": "text",
            "text": "hàng chục km",
            "x": 2128,
            "y": 1250,
            "size": 38,
            "at": "l2:tens",
            "color": "muted",
            "hl": [
              {
                "text": "hàng chục km",
                "at": "l2:kilometres"
              }
            ]
          },
          {
            "id": "g-streak",
            "t": "arrow",
            "from": [
              2288,
              1340
            ],
            "to": [
              2408,
              1490
            ],
            "at": "l2:glow",
            "color": "coral",
            "stroke": 8
          },
          {
            "id": "g-burn",
            "t": "text",
            "text": "cháy hết",
            "x": 2438,
            "y": 1460,
            "size": 48,
            "at": "l2:burn",
            "color": "coral",
            "hl": [
              {
                "text": "cháy hết",
                "at": "l2:before"
              }
            ]
          },
          {
            "id": "g-gnd",
            "t": "line",
            "pts": [
              [
                2028,
                1650
              ],
              [
                3028,
                1650
              ]
            ],
            "at": "l2:ground",
            "stroke": 5
          },
          {
            "id": "g-earth",
            "t": "text",
            "text": "mặt đất",
            "x": 2028,
            "y": 1660,
            "size": 30,
            "at": "l2:ground+300",
            "color": "muted"
          },
          {
            "id": "g-mite",
            "t": "box",
            "x": 2668,
            "y": 1610,
            "w": 38,
            "h": 38,
            "at": "l3:land",
            "hatch": true,
            "stroke": 4
          },
          {
            "id": "g-inj",
            "t": "text",
            "text": "Thiên thạch: bị thương cực hiếm",
            "x": 2528,
            "y": 1540,
            "size": 38,
            "at": "l3:injuries",
            "hl": [
              {
                "text": "cực hiếm",
                "at": "l3:extremely"
              }
            ]
          },
          {
            "id": "g-safe",
            "t": "text",
            "text": "Ngắm sao băng: an toàn",
            "x": 2128,
            "y": 1690,
            "size": 48,
            "at": "l3:stargazing",
            "color": "accent",
            "hl": [
              {
                "text": "an toàn",
                "at": "l3:safe"
              }
            ]
          },
          {
            "id": "g-big",
            "t": "text",
            "text": "Va chạm lớn: chục triệu năm/lần",
            "x": 2028,
            "y": 1752,
            "size": 34,
            "at": "l4:impacts"
          },
          {
            "id": "g-66",
            "t": "text",
            "text": "66 triệu năm trước: khủng long",
            "x": 2568,
            "y": 1735,
            "size": 36,
            "at": "l4:dinosaurs"
          },
          {
            "id": "g-22",
            "t": "text",
            "text": "2022: tàu đâm thử, đổi quỹ đạo",
            "x": 2028,
            "y": 1802,
            "size": 34,
            "at": "l5:twenty twenty two",
            "hl": [
              {
                "text": "đổi quỹ đạo",
                "at": "l5:changed"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: NASA Science; NASA — DART",
            "x": 3088,
            "y": 1825,
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
          "say": "Most shooting stars are sand or pea sized pieces.",
          "sub": "Phần lớn sao băng là mảnh cỡ hạt cát, hạt đậu.",
          "keys": [
            "hạt cát, hạt đậu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "They glow tens of kilometres up, then burn up before the ground.",
          "sub": "Sáng ở độ cao hàng chục km, rồi cháy hết trước khi chạm đất.",
          "keys": [
            "cháy hết"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A few land as meteorites, and injuries are extremely rare. Stargazing is safe.",
          "sub": "Vài mảnh rơi thành thiên thạch, làm người bị thương cực kỳ hiếm. Ngắm sao băng an toàn.",
          "keys": [
            "an toàn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Big impacts come tens of millions of years apart. One helped end the dinosaurs.",
          "sub": "Va chạm lớn cách nhau hàng chục triệu năm. Vụ 66 triệu năm trước góp phần xoá sổ khủng long.",
          "keys": [
            "hàng chục triệu năm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And in twenty twenty two, a spacecraft hit a small asteroid and changed its orbit.",
          "sub": "Năm 2022, một tàu vũ trụ đâm thử tiểu hành tinh nhỏ, đổi được quỹ đạo.",
          "keys": [
            "đổi được quỹ đạo"
          ]
        }
      ],
      "ref": "p11,p12,p13"
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 0:30 Mưa sao băng",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:sixth"
          },
          {
            "id": "h-trail",
            "t": "ring",
            "x": 3996,
            "y": 1260,
            "w": 760,
            "h": 250,
            "at": "l2:path",
            "dash": true,
            "color": "muted"
          },
          {
            "id": "h-trl",
            "t": "text",
            "text": "đường đi + bụi rải lại",
            "x": 4026,
            "y": 1230,
            "size": 36,
            "at": "l2:dust",
            "color": "muted",
            "hl": [
              {
                "text": "bụi rải lại",
                "at": "l2:path"
              }
            ]
          },
          {
            "id": "h-earth",
            "t": "ring",
            "x": 4496,
            "y": 1470,
            "w": 60,
            "h": 60,
            "at": "l3:earth",
            "color": "accent",
            "stroke": 7
          },
          {
            "id": "h-el",
            "t": "text",
            "text": "Trái Đất",
            "x": 4456,
            "y": 1538,
            "size": 34,
            "at": "l3:earth+300",
            "color": "accent"
          },
          {
            "id": "h-s1",
            "t": "arrow",
            "from": [
              4576,
              1390
            ],
            "to": [
              4636,
              1450
            ],
            "at": "l3:many",
            "color": "coral",
            "stroke": 5
          },
          {
            "id": "h-s2",
            "t": "arrow",
            "from": [
              4636,
              1370
            ],
            "to": [
              4696,
              1435
            ],
            "at": "l3:once",
            "color": "coral",
            "stroke": 5
          },
          {
            "id": "h-s3",
            "t": "arrow",
            "from": [
              4516,
              1380
            ],
            "to": [
              4566,
              1440
            ],
            "at": "l3:once+300",
            "color": "coral",
            "stroke": 5
          },
          {
            "id": "h-ms",
            "t": "text",
            "text": "→ mưa sao băng",
            "x": 4636,
            "y": 1560,
            "size": 52,
            "at": "l3:meteor shower",
            "color": "coral",
            "hl": [
              {
                "text": "mưa sao băng",
                "at": "l3:shower"
              }
            ]
          },
          {
            "id": "h-at",
            "t": "text",
            "text": "Anh Tiên: giữa tháng 8",
            "x": 3996,
            "y": 1620,
            "size": 44,
            "at": "l4:perseids"
          },
          {
            "id": "h-st",
            "t": "text",
            "text": "Song Tử: giữa tháng 12",
            "x": 3996,
            "y": 1680,
            "size": 44,
            "at": "l4:geminids",
            "color": "accent",
            "hl": [
              {
                "text": "Song Tử",
                "at": "l4:december"
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
          "say": "Sixth stop, past midnight. So many streaks! Blame messy travellers.",
          "sub": "Chặng sáu, quá nửa đêm. Sao nhiều vệt thế? Tại khách xả rác.",
          "keys": [
            "quá nửa đêm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Comets, and sometimes asteroids, leave dust along their path.",
          "sub": "Sao chổi, đôi khi tiểu hành tinh, rải bụi dọc đường.",
          "keys": [
            "rải bụi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Each year Earth crosses that dust. Many pieces hit at once: a meteor shower!",
          "sub": "Mỗi năm Trái Đất đi qua dải bụi, nhiều mảnh lao vào cùng lúc: mưa sao băng!",
          "keys": [
            "mưa sao băng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Easy ones: Perseids in mid August, Geminids in mid December.",
          "sub": "Dễ xem: Anh Tiên giữa tháng Tám, Song Tử giữa tháng Mười Hai.",
          "keys": [
            "Anh Tiên",
            "Song Tử"
          ]
        }
      ],
      "ref": "p14"
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
            "at": "l5:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 5056,
            "y": 1220,
            "w": 560,
            "data": {
              "set": "park",
              "actors": [
                {
                  "id": "bin",
                  "side": "left"
                },
                {
                  "id": "binh",
                  "side": "right"
                }
              ],
              "props": [
                "night-with-stars",
                "camping"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "bin",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "binh",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "close",
                  "on": "bin",
                  "move": "push"
                }
              ]
            },
            "at": "l1:grandpa",
            "caption": "0:30 · nằm ngửa trên bạt",
            "icon": "night-with-stars"
          },
          {
            "id": "h-eyes",
            "t": "illus",
            "name": "eyes",
            "x": 4576,
            "y": 1650,
            "size": 60,
            "at": "l3:eyes"
          },
          {
            "id": "h-30",
            "t": "text",
            "text": "mắt quen tối ~30 phút",
            "x": 4646,
            "y": 1660,
            "size": 40,
            "at": "l3:half an hour",
            "hl": [
              {
                "text": "~30 phút",
                "at": "l3:eyes"
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
          "say": "Grandpa checked the peak date with an astronomy society, and picked this dark field.",
          "sub": "Ông đã tra ngày cực điểm ở hội thiên văn, chọn bãi tối này.",
          "keys": [
            "ngày cực điểm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Can I play on your phone while we wait?",
          "sub": "Chờ lâu quá, cháu chơi điện thoại nhé?",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Phone away for half an hour. Our eyes need time for the dark.",
          "sub": "Cất điện thoại nửa tiếng. Mắt cần quen tối.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Now lie back and look at the whole sky.",
          "sub": "Giờ nằm ngửa, nhìn rộng cả bầu trời.",
          "pose": "point"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "bin",
          "say": "One! Two! Three! One bright star, two shining stars!",
          "sub": "Một! Hai! Ba! Một ông sao sáng, hai ông sáng sao!",
          "face": "happy",
          "pose": "point"
        }
      ],
      "sfx": [
        {
          "at": "l5",
          "key": "lap-lanh"
        }
      ],
      "ref": "p15,p16"
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
          }
        ],
        "items": [
          {
            "id": "h-c0",
            "t": "box",
            "x": 5056,
            "y": 1638,
            "w": 36,
            "h": 36,
            "at": "l1:peak",
            "stroke": 4
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 5060,
            "y": 1623,
            "size": 46,
            "at": "l1:peak+500",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Tra ngày cực điểm",
            "x": 5111,
            "y": 1633,
            "size": 38,
            "at": "l1:peak+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 5056,
            "y": 1693,
            "w": 36,
            "h": 36,
            "at": "l1:dark place",
            "stroke": 4
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 5060,
            "y": 1678,
            "size": 46,
            "at": "l1:dark place+500",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Chỗ tối, xa đèn đường",
            "x": 5111,
            "y": 1688,
            "size": 38,
            "at": "l1:dark place+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 5056,
            "y": 1748,
            "w": 36,
            "h": 36,
            "at": "l1:after midnight",
            "stroke": 4
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 5060,
            "y": 1733,
            "size": 46,
            "at": "l1:after midnight+500",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Sau nửa đêm, nằm ngửa",
            "x": 5111,
            "y": 1743,
            "size": 38,
            "at": "l1:after midnight+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 5056,
            "y": 1803,
            "w": 36,
            "h": 36,
            "at": "l1:phone",
            "stroke": 4
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 5060,
            "y": 1788,
            "size": 46,
            "at": "l1:phone+500",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Cất điện thoại 30 phút",
            "x": 5111,
            "y": 1798,
            "size": 38,
            "at": "l1:phone+200"
          },
          {
            "id": "h-rule",
            "t": "text",
            "text": "Trời tối, mắt quen, sau nửa đêm",
            "x": 3996,
            "y": 1770,
            "size": 48,
            "at": "l2:dark sky",
            "color": "accent",
            "hl": [
              {
                "text": "Trời tối, mắt quen, sau nửa đêm",
                "at": "l2:after midnight"
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
          "say": "Checklist: official peak date, dark place, after midnight, phone away.",
          "sub": "Ghi nhớ: tra ngày chính thức, chỗ tối, sau nửa đêm, cất điện thoại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No telescope needed: dark sky, eyes used to the dark, after midnight.",
          "sub": "Không cần kính thiên văn: trời tối, mắt quen, sau nửa đêm.",
          "keys": [
            "trời tối, mắt quen, sau nửa đêm"
          ]
        }
      ],
      "ref": "p15,p17"
    },
    {
      "id": "s23",
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
            "at": "a1",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "b3:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 5:30 Hòn đá “từ trời”",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:last"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 7024,
            "y": 1220,
            "w": 560,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "bin"
                },
                {
                  "id": "binh"
                }
              ],
              "left": {
                "label": "Cách A: tin nam châm",
                "ok": false
              },
              "right": {
                "label": "Cách B: hỏi chuyên gia",
                "ok": true
              }
            },
            "at": "l1:stall",
            "caption": "5:30 · sạp ven đường",
            "icon": "rock"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Last stop, half past five, dawn. A stall sells real meteorites.",
          "sub": "Chặng cuối, năm rưỡi sáng. Sạp ven đường bán “thiên thạch thật”.",
          "keys": [
            "thiên thạch thật"
          ]
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "bin",
          "say": "Grandpa, it sticks to a magnet, so it's real!",
          "sub": "Ông ơi, hút nam châm là thật đấy!",
          "phase": "a",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "binh",
          "say": "Then it's from space. Let's buy it.",
          "sub": "Vậy là từ trời rơi xuống. Mua thôi.",
          "phase": "a",
          "pose": "give"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "bin",
          "say": "Grandpa, it sticks to a magnet, so it's real!",
          "sub": "Ông ơi, hút nam châm là thật đấy!",
          "phase": "b",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "binh",
          "say": "A magnet is just one sign. Slag and many Earth rocks stick too.",
          "sub": "Nam châm mới là một dấu hiệu. Xỉ sắt, đá thường cũng hút.",
          "phase": "b",
          "pose": "explain"
        },
        {
          "id": "b3",
          "lang": "en",
          "who": "binh",
          "say": "Let's ask a museum first.",
          "sub": "Hỏi bảo tàng trước đã.",
          "phase": "b",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "ting",
          "offsetMs": 400
        }
      ],
      "ref": "p18,p19"
    },
    {
      "id": "s24",
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
            "id": "i-rare",
            "t": "text",
            "text": "Thiên thạch thật: rất hiếm",
            "x": 5964,
            "y": 1240,
            "size": 52,
            "at": "l1:rare",
            "hl": [
              {
                "text": "rất hiếm",
                "at": "l1:rare+200"
              }
            ]
          },
          {
            "id": "i-mag",
            "t": "text",
            "text": "Hút nam châm có thể là…",
            "x": 5964,
            "y": 1325,
            "size": 46,
            "at": "l2:magnets"
          },
          {
            "id": "i-a1",
            "t": "arrow",
            "from": [
              6204,
              1390
            ],
            "to": [
              6064,
              1430
            ],
            "at": "l2:iron meteorites"
          },
          {
            "id": "i-a2",
            "t": "arrow",
            "from": [
              6224,
              1390
            ],
            "to": [
              6404,
              1430
            ],
            "at": "l2:slag"
          },
          {
            "id": "i-a3",
            "t": "arrow",
            "from": [
              6244,
              1390
            ],
            "to": [
              6744,
              1430
            ],
            "at": "l2:earth rocks"
          },
          {
            "id": "i-m1",
            "t": "text",
            "text": "thiên thạch có sắt",
            "x": 5964,
            "y": 1440,
            "size": 40,
            "at": "l2:stick"
          },
          {
            "id": "i-m2",
            "t": "text",
            "text": "xỉ sắt, quặng sắt",
            "x": 6324,
            "y": 1440,
            "size": 40,
            "at": "l2:iron ore"
          },
          {
            "id": "i-m3",
            "t": "text",
            "text": "nhiều đá thường",
            "x": 6684,
            "y": 1440,
            "size": 40,
            "at": "l2:earth rocks+200"
          },
          {
            "id": "i-proof",
            "t": "text",
            "text": "→ chỉ loại bớt, không chứng minh",
            "x": 5964,
            "y": 1520,
            "size": 46,
            "at": "l3:rules",
            "color": "coral",
            "hl": [
              {
                "text": "không chứng minh",
                "at": "l3:never proves"
              }
            ]
          },
          {
            "id": "i-ask",
            "t": "text",
            "text": "Hỏi: bảo tàng · viện địa chất",
            "x": 5964,
            "y": 1600,
            "size": 50,
            "at": "l4:museum",
            "color": "accent",
            "hl": [
              {
                "text": "bảo tàng",
                "at": "l4:museum+200"
              }
            ]
          },
          {
            "id": "i-law",
            "t": "text",
            "text": "Giữ, bán: quy định tuỳ nơi",
            "x": 5964,
            "y": 1680,
            "size": 42,
            "at": "l4:keeping",
            "color": "muted"
          },
          {
            "id": "i-rule",
            "t": "text",
            "text": "Đá lạ chưa chắc từ trời",
            "x": 5964,
            "y": 1755,
            "size": 60,
            "at": "l5:strange stone",
            "color": "accent",
            "hl": [
              {
                "text": "chưa chắc",
                "at": "l5:maybe not"
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
          "say": "Real meteorites are rare. Most odd stones are just rocks.",
          "sub": "Thiên thạch thật rất hiếm. Đá lạ phần lớn là đá thường, xỉ.",
          "keys": [
            "rất hiếm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Iron meteorites stick to magnets. So do slag, iron ore, and many Earth rocks.",
          "sub": "Thiên thạch sắt hút nam châm. Xỉ sắt, quặng sắt, nhiều đá thường cũng hút."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So a magnet rules some out, but never proves a stone came from space.",
          "sub": "Nam châm chỉ loại bớt, không chứng minh được đá từ không gian.",
          "keys": [
            "không chứng minh"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "To be sure, ask a museum or geology institute. Rules on keeping vary.",
          "sub": "Muốn chắc, hỏi bảo tàng, viện địa chất. Giữ hay bán: quy định tuỳ nơi.",
          "keys": [
            "bảo tàng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Strange stone? Maybe not from the sky. Ask first.",
          "sub": "Đá lạ chưa chắc từ trời. Hỏi trước đã.",
          "keys": [
            "chưa chắc từ trời"
          ]
        }
      ],
      "ref": "p18,p19,p20"
    },
    {
      "id": "s25",
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
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Việc làm ngay",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:your turn"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1250,
            "w": 56,
            "h": 56,
            "at": "l1",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1230,
            "size": 70,
            "at": "l1+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Tra ngày cực điểm trận tới",
            "x": 8012,
            "y": 1250,
            "size": 50,
            "at": "l1+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1360,
            "w": 56,
            "h": 56,
            "at": "l2",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1340,
            "size": 70,
            "at": "l2+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Đánh dấu lên lịch",
            "x": 8012,
            "y": 1360,
            "size": 50,
            "at": "l2+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1470,
            "w": 56,
            "h": 56,
            "at": "l3",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1450,
            "size": 70,
            "at": "l3+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Chọn trước một chỗ tối",
            "x": 8012,
            "y": 1470,
            "size": 50,
            "at": "l3+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1580,
            "w": 56,
            "h": 56,
            "at": "l4",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1560,
            "size": 70,
            "at": "l4+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Tập gọi đúng tên",
            "x": 8012,
            "y": 1580,
            "size": 50,
            "at": "l4+200"
          },
          {
            "id": "j-note",
            "t": "text",
            "text": "Số liệu tham khảo theo NASA Science; ngày cực điểm mỗi năm hãy tra nguồn thiên văn chính thức.",
            "x": 7932,
            "y": 1825,
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
          "say": "Your turn. Look up the next meteor shower's peak date.",
          "sub": "Đến lượt bạn: tra ngày cực điểm trận tới.",
          "keys": [
            "ngày cực điểm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Mark the calendar.",
          "sub": "Đánh dấu lên lịch."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Pick a dark place for the family.",
          "sub": "Chọn trước chỗ tối cho cả nhà."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And practise the names.",
          "sub": "Và tập gọi đúng tên."
        }
      ],
      "ref": "outro"
    },
    {
      "id": "s25b",
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
            "at": "l1",
            "fit": [
              "j-v"
            ],
            "zoom": 1.4,
            "ms": 800
          },
          {
            "at": "l4",
            "fit": "J",
            "ms": 800
          }
        ],
        "items": [
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "park",
              "actors": [
                {
                  "id": "bin",
                  "side": "left"
                },
                {
                  "id": "binh",
                  "side": "right"
                }
              ],
              "props": [
                "night-with-stars",
                "shooting-star"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "bin",
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
            "caption": "Chập tối hôm sau",
            "icon": "shooting-star"
          },
          {
            "id": "j-poem",
            "t": "text",
            "text": "Đếm sao, và gọi đúng tên",
            "x": 8772,
            "y": 1758,
            "size": 40,
            "at": "l4:one bright",
            "color": "accent",
            "hl": [
              {
                "text": "gọi đúng tên",
                "at": "l4:names"
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
          "say": "The next evening, at dusk. Another streak.",
          "sub": "Chập tối hôm sau. Lại một vệt sáng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "A shooting star! It zipped past, so it's not a comet.",
          "sub": "Sao băng kìa! Vụt qua, không phải sao chổi.",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Right. See a fuzzy smudge with a tail? Wake me up.",
          "sub": "Đúng. Thấy đốm mờ có đuôi thì gọi ông dậy.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One bright star, two shining stars. Now Bin counts, and names them.",
          "sub": "“Một ông sao sáng…” Giờ Bin vừa đếm, vừa gọi đúng tên.",
          "keys": [
            "gọi đúng tên"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh-ngan",
          "offsetMs": 500
        }
      ],
      "ref": "outro,p5"
    },
    {
      "id": "s26",
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
            "at": "l2:one",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:two",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l4:three",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l4:end",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 7484,
            "y": 620,
            "at": "l2:one"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8892,
            "y": 480,
            "at": "l3:two"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4836,
            "y": 1750,
            "at": "l4:three"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "h-rule"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l4:after midnight"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One night, seven stops. Step back.",
          "sub": "Một đêm, bảy chặng. Lùi lại xem."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: zips past, shooting star. Stays with a tail, comet.",
          "sub": "Một: vụt qua là sao băng, đứng lâu có đuôi là sao chổi.",
          "keys": [
            "vụt qua",
            "có đuôi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: a comet's tail turns its back on the Sun.",
          "sub": "Hai: đuôi sao chổi quay lưng với Mặt Trời.",
          "keys": [
            "quay lưng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: dark sky, eyes used to the dark, after midnight.",
          "sub": "Ba: trời tối, mắt quen, sau nửa đêm.",
          "keys": [
            "sau nửa đêm"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p5,p9,p17"
    },
    {
      "id": "s31",
      "module": "QUIZ-01",
      "ref": "questions[11]",
      "data": {
        "q": "A comet has passed the Sun and is moving away, where does its tail point?",
        "options": [
          "Down toward the Earth, because our planet pulls the gas toward itself",
          "Backward, trailing behind the comet like the tail of a flying kite",
          "Forward, ahead of the comet, because the tail always points away from the Sun"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "comet",
        "why": "Ánh sáng và gió Mặt Trời đẩy đuôi ra xa Mặt Trời, nên khi bay ra xa, đuôi ở phía trước."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A comet has passed the Sun and is moving away, where does its tail point?",
          "sub": "Sao chổi đã vòng qua Mặt Trời và đang bay ra xa, đuôi nó chỉ về đâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Forward, ahead of the comet, because the tail always points away from the Sun.",
          "sub": "Phía trước, vì đuôi luôn chỉ ra xa Mặt Trời."
        }
      ],
      "beats": {
        "after": 800
      }
    },
    {
      "id": "s32",
      "module": "END-05",
      "ref": "outro",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting below.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ bên dưới."
        }
      ]
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s25b"
  }
};
