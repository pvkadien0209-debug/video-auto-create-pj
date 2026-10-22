// know-what-you-want-at-35--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "know-what-you-want-at-35--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "career-changers-over-35",
    "slug": "know-what-you-want-at-35",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Biết mình thật sự muốn gì khi đã đi làm hơn chục năm?",
    "series": "Đổi nghề tuổi 35 mà không đánh cược cả nhà — cho người đi làm lâu năm muốn rẽ hướng"
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
          }
        ],
        "items": [
          {
            "id": "a-res",
            "t": "text",
            "text": "Kết quả: HƯỚNG NỘI",
            "x": 60,
            "y": 40,
            "size": 64,
            "at": "l1:introvert",
            "hl": [
              {
                "text": "HƯỚNG NỘI",
                "at": "l1:introvert"
              }
            ]
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "→ hết làm việc gặp người?",
            "x": 60,
            "y": 140,
            "size": 52,
            "at": "l2:never"
          },
          {
            "id": "a-b1",
            "t": "box",
            "x": 60,
            "y": 250,
            "w": 620,
            "h": 120,
            "at": "l3:Yes",
            "stroke": 6
          },
          {
            "id": "a-y",
            "t": "text",
            "text": "Đúng, đã phán",
            "x": 100,
            "y": 265,
            "size": 72,
            "at": "l3:Yes+200"
          },
          {
            "id": "a-b2",
            "t": "box",
            "x": 60,
            "y": 400,
            "w": 620,
            "h": 120,
            "at": "l3:not so fast",
            "stroke": 6
          },
          {
            "id": "a-n",
            "t": "text",
            "text": "Chưa vững",
            "x": 100,
            "y": 415,
            "size": 72,
            "at": "l3:not so fast+200",
            "color": "accent"
          },
          {
            "id": "a-yx",
            "t": "strike",
            "over": "a-y",
            "at": "l4:answer"
          },
          {
            "id": "a-ring",
            "t": "ring",
            "around": [
              "a-n"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l4:not so fast"
          },
          {
            "id": "a-mit",
            "t": "text",
            "text": "Tính cách không nên là giới hạn",
            "x": 60,
            "y": 560,
            "size": 44,
            "at": "l4:limit",
            "hl": [
              {
                "text": "giới hạn",
                "at": "l4:limit"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Theo trang tự đánh giá, MIT Career Advising & Professional Development",
            "x": 60,
            "y": 730,
            "size": 24,
            "at": "l4",
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
          "say": "A free online personality test. The result: introvert.",
          "sub": "Một bài trắc nghiệm tính cách miễn phí trên mạng. Kết quả: hướng nội.",
          "keys": [
            "hướng nội"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Quick guess. Does that mean you can never do a job meeting lots of people?",
          "sub": "Đoán nhanh: vậy là đừng mơ làm việc phải gặp nhiều người?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Yes, the test has spoken? Or, not so fast?",
          "sub": "Đúng, trắc nghiệm đã phán? Hay là chưa vững?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The answer: not so fast. MIT says personality should not limit your career.",
          "sub": "Đáp án: chưa vững. MIT nhắc: tính cách không nên thành giới hạn cho nghề nghiệp.",
          "keys": [
            "chưa vững"
          ]
        }
      ],
      "ref": "intro,p4,p5"
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
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "sad"
                }
              ],
              "props": [
                "laptop",
                "crescent-moon"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "at": "l1",
            "caption": "Tối thứ Hai · tuần 1 · ở nhà",
            "icon": "laptop"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Biết người biết ta”",
            "x": 60,
            "y": 640,
            "size": 54,
            "at": "l4:know yourself",
            "color": "accent",
            "hl": [
              {
                "text": "biết ta",
                "at": "l4:know yourself"
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
          "say": "Thirty-eight, in purchasing for thirteen years. Knows every supplier by voice. Himself? Not so much.",
          "sub": "38 tuổi, mua hàng mười ba năm. Nghe giọng là biết nhà cung cấp nào. Còn chính mình? Chưa chắc.",
          "keys": [
            "mua hàng mười ba năm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Introvert. So jobs with people are out. Done, decided!",
          "sub": "Hướng nội. Vậy việc gặp nhiều người là gạch. Xong, chốt!",
          "face": "sad",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The old saying: know them, know yourself, win every battle. Dũng skipped the know yourself part.",
          "sub": "Người xưa dạy: “Biết người biết ta, trăm trận trăm thắng.” Dũng thì bỏ qua vế “biết ta”.",
          "keys": [
            "Biết người biết ta"
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
      "ref": "p5"
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
            "text": "Đi làm 10+ năm: muốn gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:decade",
            "hl": [
              {
                "text": "muốn gì",
                "at": "l1:want"
              }
            ]
          },
          {
            "id": "b-mit",
            "t": "text",
            "text": "Hài lòng = hiểu rõ điều mình muốn",
            "x": 2028,
            "y": 160,
            "size": 48,
            "at": "l2:satisfaction",
            "hl": [
              {
                "text": "hiểu rõ",
                "at": "l2:understanding"
              }
            ]
          },
          {
            "id": "b-ch",
            "t": "text",
            "text": "… và điều đó đổi theo thời gian",
            "x": 2028,
            "y": 240,
            "size": 44,
            "at": "l2:change",
            "color": "muted"
          },
          {
            "id": "b-22",
            "t": "text",
            "text": "22 tuổi ≠ 38 tuổi",
            "x": 2028,
            "y": 330,
            "size": 60,
            "at": "l3:twenty-two",
            "color": "accent"
          },
          {
            "id": "b-data",
            "t": "text",
            "text": "Năm đi làm = dữ liệu mới",
            "x": 2568,
            "y": 340,
            "size": 48,
            "at": "l3:data",
            "hl": [
              {
                "text": "dữ liệu mới",
                "at": "l3:new data"
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
          "say": "So after a decade at work, how do you find out what you really want?",
          "sub": "Vậy đi làm hơn chục năm rồi, làm sao biết mình thật sự muốn gì?",
          "keys": [
            "thật sự muốn gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "MIT's career centre: satisfaction comes from understanding what you want. And that can change over time.",
          "sub": "Trung tâm hướng nghiệp MIT: hài lòng với nghề đến từ việc hiểu rõ điều mình muốn. Và điều ấy có thể đổi theo thời gian.",
          "keys": [
            "hiểu rõ điều mình muốn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Your answer at twenty-two may not fit at thirty-eight. Your working years are new data.",
          "sub": "Câu trả lời lúc 22 tuổi chưa chắc còn đúng ở tuổi 38. Những năm đi làm là dữ liệu mới.",
          "keys": [
            "dữ liệu mới"
          ]
        }
      ],
      "ref": "intro,p1"
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
            "id": "b-cv",
            "t": "text",
            "text": "Né cập nhật hồ sơ",
            "x": 2028,
            "y": 440,
            "size": 46,
            "at": "l1:avoid",
            "color": "coral"
          },
          {
            "id": "b-pa",
            "t": "text",
            "text": "Chờ đam mê ập tới",
            "x": 2668,
            "y": 440,
            "size": 46,
            "at": "l2:passion",
            "color": "muted"
          },
          {
            "id": "b-pax",
            "t": "strike",
            "over": "b-pa",
            "at": "l2:after"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 600,
            "w": 250,
            "h": 100,
            "at": "l3:pieces",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2303,
            "y": 600,
            "w": 250,
            "h": 100,
            "at": "l3:compass",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2578,
            "y": 600,
            "w": 250,
            "h": 100,
            "at": "l3:dashboard",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2853,
            "y": 600,
            "w": 250,
            "h": 100,
            "at": "l3:journal",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3128,
            "y": 600,
            "w": 250,
            "h": 100,
            "at": "l3:hate",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3403,
            "y": 600,
            "w": 250,
            "h": 100,
            "at": "l3:market",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "4 mảnh",
            "x": 2053,
            "y": 618,
            "size": 42,
            "at": "l3:pieces+200"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "La bàn",
            "x": 2328,
            "y": 618,
            "size": 42,
            "at": "l3:compass+200"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Đồng hồ",
            "x": 2603,
            "y": 618,
            "size": 42,
            "at": "l3:dashboard+200"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Nhật ký",
            "x": 2878,
            "y": 618,
            "size": 42,
            "at": "l3:journal+200"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Điều ghét",
            "x": 3153,
            "y": 618,
            "size": 42,
            "at": "l3:hate+200"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Thị trường",
            "x": 3428,
            "y": 618,
            "size": 42,
            "at": "l3:market+200"
          },
          {
            "id": "b-3w",
            "t": "text",
            "text": "Dữ liệu nhỏ · 3 tuần",
            "x": 2028,
            "y": 520,
            "size": 50,
            "at": "l3:three weeks",
            "color": "accent",
            "hl": [
              {
                "text": "Dữ liệu nhỏ",
                "at": "l3:small"
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
          "say": "A familiar sign, says CareerLink: you avoid updating your CV, because you can't describe yourself.",
          "sub": "Dấu hiệu quen, theo CareerLink: né cập nhật hồ sơ năng lực vì không biết tả mình ở đâu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And don't wait for passion to strike. Designing Your Life says passion comes after mastery.",
          "sub": "Cũng đừng ngồi chờ đam mê ập tới. Sách Designing Your Life nói đam mê là kết quả, thành thạo đến trước.",
          "keys": [
            "đam mê là kết quả"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So: small data, over three weeks. Pieces, compass, dashboard, journal, what you hate, the market.",
          "sub": "Vậy: dữ liệu nhỏ, gom trong ba tuần. Mảnh ghép, la bàn, đồng hồ, nhật ký, điều ghét, thị trường.",
          "keys": [
            "dữ liệu nhỏ"
          ]
        }
      ],
      "ref": "p2"
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
            "at": "l5",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "Thứ Ba · 4 mảnh ghép",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Tuesday",
            "hl": [
              {
                "text": "4 mảnh ghép",
                "at": "l1:four pieces"
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
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "think"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l4",
                  "face": "surprised"
                }
              ],
              "props": [
                "laptop",
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l4:Thảo",
            "caption": "Tối thứ Ba · bàn ăn",
            "icon": "hot-beverage"
          },
          {
            "id": "c-f0",
            "t": "text",
            "text": "Giá trị",
            "x": 3996,
            "y": 160,
            "size": 48,
            "at": "l2:Values",
            "color": "accent"
          },
          {
            "id": "c-g0",
            "t": "text",
            "text": "quan trọng",
            "x": 3996,
            "y": 220,
            "size": 34,
            "at": "l2:Values+200",
            "color": "muted"
          },
          {
            "id": "c-f1",
            "t": "text",
            "text": "Sở thích",
            "x": 4396,
            "y": 160,
            "size": 48,
            "at": "l2:Interests",
            "color": "accent"
          },
          {
            "id": "c-g1",
            "t": "text",
            "text": "yêu thích",
            "x": 4396,
            "y": 220,
            "size": 34,
            "at": "l2:Interests+200",
            "color": "muted"
          },
          {
            "id": "c-f2",
            "t": "text",
            "text": "Tính cách",
            "x": 3996,
            "y": 280,
            "size": 48,
            "at": "l2:Personality",
            "color": "accent"
          },
          {
            "id": "c-g2",
            "t": "text",
            "text": "động lực",
            "x": 3996,
            "y": 340,
            "size": 34,
            "at": "l2:Personality+200",
            "color": "muted"
          },
          {
            "id": "c-f3",
            "t": "text",
            "text": "Kỹ năng",
            "x": 4396,
            "y": 280,
            "size": 48,
            "at": "l2:Skills",
            "color": "accent"
          },
          {
            "id": "c-g3",
            "t": "text",
            "text": "làm giỏi",
            "x": 4396,
            "y": 340,
            "size": 34,
            "at": "l2:Skills+200",
            "color": "muted"
          },
          {
            "id": "c-rank",
            "t": "text",
            "text": "Xếp ưu tiên · hỏi người tin",
            "x": 3996,
            "y": 420,
            "size": 44,
            "at": "l3:Rank",
            "hl": [
              {
                "text": "Xếp ưu tiên",
                "at": "l3:Rank"
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
          "say": "Week one, Tuesday. Tool one: MIT's four pieces.",
          "sub": "Tuần một, thứ Ba. Công cụ một: bốn mảnh ghép của MIT.",
          "keys": [
            "bốn mảnh ghép"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Values: what matters. Interests: what you love. Personality: what drives you. Skills: what you do well.",
          "sub": "Giá trị: điều quan trọng. Sở thích: điều yêu thích. Tính cách: điều tạo động lực. Kỹ năng: điều làm giỏi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Rank them, ask what the results mean, and check them with people you trust.",
          "sub": "Xếp thứ tự ưu tiên, nghĩ xem kết quả nghĩa là gì, rồi đem bàn với người mình tin.",
          "keys": [
            "Xếp thứ tự ưu tiên"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Like Thảo, Dũng's wife. An accountant who checks everything twice.",
          "sub": "Như Thảo, vợ Dũng. Kế toán, cái gì cũng soát hai lần.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Introvert? You've negotiated with suppliers for thirteen years!",
          "sub": "Hướng nội? Anh đàm phán với nhà cung cấp mười ba năm nay rồi còn gì!",
          "face": "surprised"
        }
      ],
      "sfx": [
        {
          "at": "l4",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p3,p5"
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
          }
        ],
        "items": [
          {
            "id": "c-neg",
            "t": "text",
            "text": "Đàm phán thật > 1 bài test",
            "x": 3996,
            "y": 510,
            "size": 50,
            "at": "l1:negotiations",
            "color": "accent",
            "hl": [
              {
                "text": "Đàm phán thật",
                "at": "l1:real"
              }
            ]
          },
          {
            "id": "c-q",
            "t": "text",
            "text": "Nghề có hợp giá trị mình?",
            "x": 3996,
            "y": 590,
            "size": 40,
            "at": "l2:values"
          },
          {
            "id": "c-priv",
            "t": "text",
            "text": "Cẩn thận dữ liệu cá nhân",
            "x": 3996,
            "y": 650,
            "size": 38,
            "at": "l3:careful",
            "color": "coral"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "MIT: kết quả trắc nghiệm cần bàn với người mình tin",
            "x": 3996,
            "y": 725,
            "size": 24,
            "at": "l1",
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
          "say": "Exactly. Years of real negotiations are better data than one online test.",
          "sub": "Chuẩn. Nhiều năm đàm phán thật là dữ liệu đáng tin hơn một bài trắc nghiệm.",
          "keys": [
            "dữ liệu đáng tin hơn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Use results to ask: does this job support my values? How can my interests fit into daily work?",
          "sub": "Dùng kết quả để hỏi: nghề này có ủng hộ giá trị của mình? Đưa sở thích vào việc hằng ngày thế nào?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And MIT warns: be careful sharing sensitive personal data with free test sites.",
          "sub": "MIT còn nhắc: thận trọng khi chia sẻ dữ liệu cá nhân nhạy cảm với các trang trắc nghiệm miễn phí.",
          "keys": [
            "dữ liệu cá nhân nhạy cảm"
          ]
        }
      ],
      "ref": "p4,p5"
    },
    {
      "id": "s06",
      "module": "BRK-10",
      "data": {
        "quote": "Kết quả trắc nghiệm là gợi ý để hỏi tiếp, không phải bản án về nghề",
        "mark": "gợi ý để hỏi tiếp",
        "by": "Rút ra cho Dũng",
        "illus": "magnifying-glass-tilted-left"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A test result is a hint to ask more.",
          "sub": "Kết quả trắc nghiệm là gợi ý để hỏi tiếp.",
          "keys": [
            "gợi ý để hỏi tiếp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not a verdict on your career.",
          "sub": "Không phải bản án về nghề."
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
            "text": "Thứ Tư · Chiếc la bàn",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Wednesday",
            "hl": [
              {
                "text": "la bàn",
                "at": "l1:compass"
              }
            ]
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
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "compass",
                "notebook"
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
            "at": "l3",
            "caption": "Giờ nghỉ trưa · bàn làm việc",
            "icon": "compass"
          },
          {
            "id": "d-cp",
            "t": "illus",
            "name": "compass",
            "x": 5964,
            "y": 150,
            "size": 100,
            "at": "l1:compass"
          },
          {
            "id": "d-wv",
            "t": "text",
            "text": "Công việc: làm để làm gì?",
            "x": 6084,
            "y": 160,
            "size": 44,
            "at": "l2:Workview"
          },
          {
            "id": "d-lv",
            "t": "text",
            "text": "Cuộc sống: điều gì ý nghĩa?",
            "x": 6084,
            "y": 230,
            "size": 44,
            "at": "l2:Lifeview"
          },
          {
            "id": "d-before",
            "t": "text",
            "text": "Trước: “làm để nuôi con”",
            "x": 5964,
            "y": 330,
            "size": 38,
            "at": "l3:earn",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Wednesday. Tool two: the compass, two short essays from Designing Your Life.",
          "sub": "Thứ Tư. Công cụ hai: chiếc la bàn, hai bản tự viết trong sách Designing Your Life.",
          "keys": [
            "chiếc la bàn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Workview: why work, and what is good work? Lifeview: what gives life meaning?",
          "sub": "Quan điểm công việc: làm để làm gì, thế nào là việc tốt? Quan điểm cuộc sống: điều gì cho đời ý nghĩa?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Easy. I work to earn money for the kids. Done!",
          "sub": "Dễ. Tôi đi làm để có lương nuôi con. Xong!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "True. But that line can't compare one job with another. Add what makes work good.",
          "sub": "Đúng. Nhưng câu ấy không so được nghề này với nghề kia. Thêm điều làm công việc “tốt”."
        }
      ],
      "ref": "p7,p8"
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
            "at": "l1",
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
            "id": "d-a1",
            "t": "text",
            "text": "Sau: thu nhập ổn định, +",
            "x": 5964,
            "y": 400,
            "size": 42,
            "at": "l1:stable",
            "color": "accent"
          },
          {
            "id": "d-a2",
            "t": "text",
            "text": "• gỡ vấn đề rối cho người",
            "x": 5984,
            "y": 460,
            "size": 36,
            "at": "l1:messy"
          },
          {
            "id": "d-a3",
            "t": "text",
            "text": "• học điều mới mỗi năm",
            "x": 5984,
            "y": 510,
            "size": 36,
            "at": "l2:learning"
          },
          {
            "id": "d-a4",
            "t": "text",
            "text": "• về kịp bữa tối",
            "x": 5984,
            "y": 560,
            "size": 36,
            "at": "l2:dinner"
          },
          {
            "id": "d-ruler",
            "t": "text",
            "text": "= thước đo so nghề",
            "x": 5964,
            "y": 630,
            "size": 48,
            "at": "l3:ruler",
            "hl": [
              {
                "text": "thước đo",
                "at": "l3:ruler"
              }
            ]
          },
          {
            "id": "d-fit",
            "t": "text",
            "text": "khớp · đá nhau · kéo nhau?",
            "x": 5964,
            "y": 705,
            "size": 40,
            "at": "l4:clash",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "I work for a stable family income. Good work is untangling a messy problem for someone...",
          "sub": "Tôi đi làm để có thu nhập ổn định cho gia đình. Việc tốt là gỡ được một vấn đề rối cho người khác...",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "learning something new each year, and getting home for dinner.",
          "sub": "được học điều mới mỗi năm, và về kịp bữa tối.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The money reason stays. But now there's a ruler to compare the old job with a new one.",
          "sub": "Lý do thu nhập vẫn giữ. Nhưng giờ đã có thước đo để so nghề cũ với nghề mới.",
          "keys": [
            "thước đo"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then check: do both views and your actual job fit, clash, or pull each other along?",
          "sub": "Rồi soi: hai bản la bàn và việc đang làm ăn khớp, đá nhau, hay kéo nhau đi?"
        }
      ],
      "ref": "p8,p9"
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
            "at": "l4",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "Chủ nhật · Đồng hồ bốn mặt",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Sunday",
            "hl": [
              {
                "text": "bốn mặt",
                "at": "l1:four gauges"
              }
            ]
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "park",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "stopwatch"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l4",
            "caption": "Sáng Chủ nhật · công viên",
            "icon": "stopwatch"
          },
          {
            "id": "e-g0",
            "t": "text",
            "text": "Sức khoẻ",
            "x": 7932,
            "y": 160,
            "size": 46,
            "at": "l2:Health",
            "color": "accent"
          },
          {
            "id": "e-h0",
            "t": "text",
            "text": "tinh thần · thể chất · tâm hồn",
            "x": 8202,
            "y": 172,
            "size": 32,
            "at": "l2:Health+200",
            "color": "muted"
          },
          {
            "id": "e-g1",
            "t": "text",
            "text": "Công việc",
            "x": 7932,
            "y": 255,
            "size": 46,
            "at": "l2:Work",
            "color": "accent"
          },
          {
            "id": "e-h1",
            "t": "text",
            "text": "có lương · không lương",
            "x": 8202,
            "y": 267,
            "size": 32,
            "at": "l2:Work+200",
            "color": "muted"
          },
          {
            "id": "e-g2",
            "t": "text",
            "text": "Vui chơi",
            "x": 7932,
            "y": 350,
            "size": 46,
            "at": "l2:Play",
            "color": "accent"
          },
          {
            "id": "e-h2",
            "t": "text",
            "text": "chỉ vì vui",
            "x": 8202,
            "y": 362,
            "size": 32,
            "at": "l2:Play+200",
            "color": "muted"
          },
          {
            "id": "e-g3",
            "t": "text",
            "text": "Tình thân",
            "x": 7932,
            "y": 445,
            "size": 46,
            "at": "l2:Love",
            "color": "accent"
          },
          {
            "id": "e-h3",
            "t": "text",
            "text": "quan hệ · cộng đồng",
            "x": 8202,
            "y": 457,
            "size": 32,
            "at": "l2:Love+200",
            "color": "muted"
          },
          {
            "id": "e-10",
            "t": "text",
            "text": "Chấm 1 → 10",
            "x": 7932,
            "y": 560,
            "size": 54,
            "at": "l3:one to ten",
            "hl": [
              {
                "text": "1 → 10",
                "at": "l3:ten"
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
          "say": "Sunday. Tool three: a dashboard with four gauges.",
          "sub": "Chủ nhật. Công cụ ba: bảng đồng hồ bốn mặt.",
          "keys": [
            "đồng hồ bốn mặt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Health: mind, body, spirit. Work: paid and unpaid. Play: just for joy. Love: relationships and community.",
          "sub": "Sức khoẻ: tinh thần, thể chất, tâm hồn. Công việc: có lương, không lương. Vui chơi: chỉ vì vui. Tình thân: quan hệ, cộng đồng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Score each from one to ten, to see what needs attention first.",
          "sub": "Chấm mỗi mặt từ một đến mười, để thấy chỗ nào cần chú ý nhất."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Work, fine. Family, good. Health, low. Play... what is play again?",
          "sub": "Công việc tạm. Tình thân tốt. Sức khoẻ thấp. Vui chơi... là cái gì nhỉ?",
          "face": "worried"
        }
      ],
      "ref": "p10"
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
            "id": "e-warn",
            "t": "text",
            "text": "Một mặt cạn = đèn báo",
            "x": 7932,
            "y": 640,
            "size": 50,
            "at": "l1:warning",
            "color": "coral",
            "hl": [
              {
                "text": "đèn báo",
                "at": "l1:warning light"
              }
            ]
          },
          {
            "id": "e-tank",
            "t": "text",
            "text": "Mệt chưa chắc tại nghề",
            "x": 7932,
            "y": 710,
            "size": 42,
            "at": "l2:tiredness",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Perfect balance is rare, the book admits. But one gauge near empty is a warning light.",
          "sub": "Sách thừa nhận cân bằng hoàn hảo là hiếm. Nhưng một mặt thiếu hụt nghiêm trọng là đèn báo.",
          "keys": [
            "đèn báo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After thirty-five, the tiredness may not come from the job. Health or play may have run dry long ago.",
          "sub": "Ngoài 35, nhiều khi cái mệt không nằm ở nghề, mà ở chỗ sức khoẻ hay vui chơi đã cạn từ lâu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Change jobs then, and you just carry an empty tank to a new office.",
          "sub": "Đổi nghề lúc ấy, có khi chỉ là xách bình xăng cạn sang văn phòng mới.",
          "keys": [
            "bình xăng cạn"
          ]
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Việc nào nạp năng lượng, việc nào rút cạn?",
        "illus": "battery"
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
          "say": "Which tasks charge you up, and which drain you dry?",
          "sub": "Việc nào nạp năng lượng, việc nào rút cạn?",
          "keys": [
            "nạp năng lượng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p12"
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
            "text": "Tuần 2 · Nhật ký năng lượng",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Week two",
            "hl": [
              {
                "text": "năng lượng",
                "at": "l2:energy"
              }
            ]
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "explain",
                  "face": "thinking"
                }
              ],
              "props": [
                "notebook",
                "pen"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "at": "l3",
            "caption": "Mỗi tối · tuần 2",
            "icon": "notebook"
          },
          {
            "id": "f-g",
            "t": "text",
            "text": "Ghi việc + gắn bó + năng lượng",
            "x": 60,
            "y": 1250,
            "size": 42,
            "at": "l2:activities"
          },
          {
            "id": "f-q",
            "t": "text",
            "text": "+ lúc “quên cả thời gian”",
            "x": 60,
            "y": 1315,
            "size": 42,
            "at": "l2:forget",
            "color": "accent",
            "hl": [
              {
                "text": "quên cả thời gian",
                "at": "l2:forget"
              }
            ]
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "1. Cuối ngày: liệt kê việc",
            "x": 60,
            "y": 1400,
            "size": 38,
            "at": "l3:list"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "2. Nạp ↑ / rút ↓",
            "x": 60,
            "y": 1455,
            "size": 38,
            "at": "l3:charged"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "3. Cuối tuần: soi AEIOU",
            "x": 60,
            "y": 1510,
            "size": 38,
            "at": "l4:weekend"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Week two. Tool four, the core one: the good time journal.",
          "sub": "Tuần hai. Công cụ bốn, công cụ trung tâm: nhật ký thời gian tốt.",
          "keys": [
            "nhật ký thời gian tốt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Log your daily activities for a few weeks, with engagement, energy, and times you forget the clock.",
          "sub": "Ghi các hoạt động hằng ngày trong vài tuần, kèm mức gắn bó, năng lượng, và những lúc quên cả thời gian."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Each evening, I list the main tasks. Then I mark what charged me, and what drained me.",
          "sub": "Cuối ngày, liệt kê việc chính. Rồi đánh dấu việc làm mình tràn năng lượng, việc làm mình kiệt sức.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Every weekend, he reviews it with five letters: AEIOU.",
          "sub": "Cuối tuần, soi lại bằng năm chữ cái: AEIOU.",
          "keys": [
            "AEIOU"
          ]
        }
      ],
      "ref": "p12,p13"
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
            "id": "f-a0",
            "t": "text",
            "text": "A",
            "x": 60,
            "y": 1600,
            "size": 80,
            "at": "l1:Activities",
            "color": "accent"
          },
          {
            "id": "f-b0",
            "t": "text",
            "text": "Hoạt động",
            "x": 50,
            "y": 1710,
            "size": 28,
            "at": "l1:Activities+200",
            "color": "muted"
          },
          {
            "id": "f-a1",
            "t": "text",
            "text": "E",
            "x": 225,
            "y": 1600,
            "size": 80,
            "at": "l1:Environment",
            "color": "accent"
          },
          {
            "id": "f-b1",
            "t": "text",
            "text": "Môi trường",
            "x": 215,
            "y": 1710,
            "size": 28,
            "at": "l1:Environment+200",
            "color": "muted"
          },
          {
            "id": "f-a2",
            "t": "text",
            "text": "I",
            "x": 390,
            "y": 1600,
            "size": 80,
            "at": "l1:Interactions",
            "color": "accent"
          },
          {
            "id": "f-b2",
            "t": "text",
            "text": "Tương tác",
            "x": 380,
            "y": 1710,
            "size": 28,
            "at": "l1:Interactions+200",
            "color": "muted"
          },
          {
            "id": "f-a3",
            "t": "text",
            "text": "O",
            "x": 555,
            "y": 1600,
            "size": 80,
            "at": "l2:Objects",
            "color": "accent"
          },
          {
            "id": "f-b3",
            "t": "text",
            "text": "Đồ vật",
            "x": 545,
            "y": 1710,
            "size": 28,
            "at": "l2:Objects+200",
            "color": "muted"
          },
          {
            "id": "f-a4",
            "t": "text",
            "text": "U",
            "x": 720,
            "y": 1600,
            "size": 80,
            "at": "l2:Users",
            "color": "accent"
          },
          {
            "id": "f-b4",
            "t": "text",
            "text": "Người dùng",
            "x": 710,
            "y": 1710,
            "size": 28,
            "at": "l2:Users+200",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Activities: what were you doing? Environment: where? Interactions: with whom?",
          "sub": "A, hoạt động: làm gì? E, môi trường: ở đâu? I, tương tác: với ai?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Objects: which tools? Users: who did it serve?",
          "sub": "O, đồ vật: dùng công cụ gì? U, người dùng: phục vụ ai?"
        }
      ],
      "ref": "p12"
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
            "text": "Tuần 3 · Quy luật hiện ra",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Week three"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "desktop-computer",
                "package"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "at": "l1",
            "caption": "Phòng mua hàng · hướng dẫn người mới",
            "icon": "desktop-computer"
          },
          {
            "id": "g-up",
            "t": "text",
            "text": "↑ Hướng dẫn người mới",
            "x": 2028,
            "y": 1250,
            "size": 48,
            "at": "l2:teaching",
            "color": "accent",
            "hl": [
              {
                "text": "Hướng dẫn",
                "at": "l2:teaching"
              }
            ]
          },
          {
            "id": "g-up2",
            "t": "text",
            "text": "phần mềm đặt hàng",
            "x": 2078,
            "y": 1320,
            "size": 36,
            "at": "l2:software",
            "color": "muted"
          },
          {
            "id": "g-dn",
            "t": "text",
            "text": "↓ Một mình đối chiếu chứng từ",
            "x": 2028,
            "y": 1390,
            "size": 44,
            "at": "l2:alone",
            "color": "coral"
          },
          {
            "id": "g-q",
            "t": "text",
            "text": "Câu hỏi: hợp nghề đào tạo?",
            "x": 2028,
            "y": 1490,
            "size": 48,
            "at": "l3:training",
            "hl": [
              {
                "text": "đào tạo",
                "at": "l3:training"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Nhật ký rõ hơn mọi phỏng đoán",
            "x": 2028,
            "y": 1590,
            "size": 42,
            "at": "l4:guess",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Week three. The patterns show up.",
          "sub": "Tuần ba. Quy luật hiện ra."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I light up teaching new staff our ordering software. I fade checking documents alone.",
          "sub": "Mình hào hứng nhất khi hướng dẫn nhân viên mới dùng phần mềm đặt hàng. Đuối nhất khi một mình đối chiếu chứng từ.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "So, one question to test: do I fit training, guiding other people?",
          "sub": "Vậy ghi một câu hỏi để thử: mình có hợp việc đào tạo, hướng dẫn người khác không?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The so-called introvert, glowing in front of new staff. The journal beats any guess.",
          "sub": "Anh “hướng nội” ấy lại sáng bừng trước nhân viên mới. Nhật ký rõ hơn mọi phỏng đoán.",
          "keys": [
            "rõ hơn mọi phỏng đoán"
          ]
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s15",
      "module": "BRK-02",
      "data": {
        "kicker": "Công cụ năm",
        "title": "Trọng lực hay mỏ neo?",
        "hl": "mỏ neo",
        "sub": "Điều không chịu được cũng là dữ liệu"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tool five: gravity, or anchor?",
          "sub": "Công cụ năm: trọng lực, hay mỏ neo?",
          "keys": [
            "mỏ neo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "What you can't stand is data too.",
          "sub": "Điều không chịu được cũng là dữ liệu."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p15"
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "Tối thứ Sáu · Điều không chịu được",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:gravity"
          },
          {
            "id": "h-gi",
            "t": "illus",
            "name": "globe-showing-asia-australia",
            "x": 3996,
            "y": 1250,
            "size": 100,
            "at": "l1:Gravity"
          },
          {
            "id": "h-g",
            "t": "text",
            "text": "Trọng lực: thực tế cố định",
            "x": 4126,
            "y": 1255,
            "size": 46,
            "at": "l1:fixed",
            "hl": [
              {
                "text": "Trọng lực",
                "at": "l1:Gravity"
              }
            ]
          },
          {
            "id": "h-g2",
            "t": "text",
            "text": "→ chấp nhận, dồn sức chỗ khác",
            "x": 4126,
            "y": 1325,
            "size": 38,
            "at": "l1:accept",
            "color": "muted"
          },
          {
            "id": "h-ai",
            "t": "illus",
            "name": "anchor",
            "x": 3996,
            "y": 1410,
            "size": 100,
            "at": "l2:Anchor"
          },
          {
            "id": "h-a",
            "t": "text",
            "text": "Mỏ neo: bám giải pháp bế tắc",
            "x": 4126,
            "y": 1415,
            "size": 46,
            "at": "l2:cling",
            "hl": [
              {
                "text": "Mỏ neo",
                "at": "l2:Anchor"
              }
            ]
          },
          {
            "id": "h-a2",
            "t": "text",
            "text": "→ nhìn lại, thử bản mẫu nhỏ",
            "x": 4126,
            "y": 1485,
            "size": 38,
            "at": "l2:prototypes",
            "color": "accent"
          },
          {
            "id": "h-yr",
            "t": "text",
            "text": "Sai vấn đề = mất nhiều năm",
            "x": 3996,
            "y": 1580,
            "size": 46,
            "at": "l3:years",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Gravity problems are fixed realities, like the job market. You can't solve them, so accept, and move your effort.",
          "sub": "Vấn đề trọng lực là thực tế cố định, như tình hình thị trường. Không giải được, nên chấp nhận và chuyển sức sang chỗ khác."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Anchor problems: you cling to a solution that can't work. Reframe it, and try small prototypes.",
          "sub": "Vấn đề mỏ neo: bám chặt một giải pháp không khả thi. Gỡ bằng cách nhìn lại vấn đề, thử những bản mẫu nhỏ.",
          "keys": [
            "bản mẫu nhỏ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Work on the wrong problem, and it can cost you years. Now, Thảo's Friday.",
          "sub": "Làm sai vấn đề có thể tốn nhiều năm. Giờ xem tối thứ Sáu của Thảo.",
          "keys": [
            "tốn nhiều năm"
          ]
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s17",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Tối thứ Sáu · tuần 3",
        "actors": [
          {
            "id": "thao",
            "side": "center",
            "pose": "cross",
            "face": "worried"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Ghét họp tối → bỏ hẳn văn phòng",
          "why": "Nhật ký cho thấy điều không chịu được là lịch họp, không phải bản thân công việc.",
          "rule": "Gọi đúng tên rồi mới đổi"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Meetings till evening again! I'm quitting office work to open a little shop!",
          "sub": "Lại họp đến tối! Thôi, bỏ hẳn văn phòng, mở một tiệm nhỏ cho rồi!",
          "face": "worried",
          "pose": "cross",
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
          "say": "Check your journal. It's the meeting schedule, not the office work.",
          "sub": "Xem lại nhật ký đi. Cái làm chị kiệt sức là lịch họp, đâu phải việc văn phòng.",
          "keys": [
            "lịch họp"
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
          "who": "thao",
          "say": "Two options: propose a new meeting schedule, or find a role with fewer meetings.",
          "sub": "Hai hướng: đề xuất đổi lịch họp, hoặc tìm vị trí ít họp hơn. Mở tiệm tính sau.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Name it right: change career, change place, or just change how?",
          "sub": "Gọi đúng tên, mới biết cần đổi nghề, đổi chỗ, hay chỉ đổi cách làm.",
          "phase": "redo",
          "keys": [
            "đổi nghề, đổi chỗ, hay chỉ đổi cách làm"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p16,p17"
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
            "text": "Kiểm kê · đối chiếu thị trường",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:inventory",
            "hl": [
              {
                "text": "Kiểm kê",
                "at": "l1:inventory"
              }
            ]
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "at": "l3",
            "caption": "Cuối tuần 3 · bàn ăn",
            "icon": "page-facing-up"
          },
          {
            "id": "i-2w",
            "t": "text",
            "text": "~2 tuần liệt kê:",
            "x": 5964,
            "y": 1250,
            "size": 48,
            "at": "l1:two weeks",
            "hl": [
              {
                "text": "2 tuần",
                "at": "l1:two weeks"
              }
            ]
          },
          {
            "id": "i-l",
            "t": "text",
            "text": "dự án, kết quả, kỹ năng",
            "x": 5964,
            "y": 1320,
            "size": 34,
            "at": "l1:projects",
            "color": "muted"
          },
          {
            "id": "i-ads",
            "t": "text",
            "text": "↔ 10–15 tin tuyển dụng",
            "x": 5964,
            "y": 1390,
            "size": 50,
            "at": "l2:ten",
            "color": "accent",
            "hl": [
              {
                "text": "10–15",
                "at": "l2:fifteen"
              }
            ]
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: CareerLink, 07/7/2026",
            "x": 5964,
            "y": 1465,
            "size": 26,
            "at": "l1",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "coi trọng · năng lượng · thị trường",
            "x": 5964,
            "y": 1540,
            "size": 36,
            "at": "l4:value"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Last tool: inventory. CareerLink suggests about two weeks to list projects, measurable results, skills and network.",
          "sub": "Công cụ cuối: kiểm kê. CareerLink gợi ý khoảng hai tuần liệt kê dự án, kết quả đo được, kỹ năng, mạng lưới quan hệ.",
          "keys": [
            "khoảng hai tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then compare with ten to fifteen job ads at the level you're aiming for.",
          "sub": "Rồi đối chiếu với 10 đến 15 tin tuyển dụng ở cấp bậc mình nhắm tới.",
          "keys": [
            "10 đến 15 tin tuyển dụng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Thảo, pass the highlighter. Fifteen training job ads tonight!",
          "sub": "Thảo, đưa anh cây bút dạ. Tối nay mười lăm tin tuyển người làm đào tạo!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Journal, compass and market together: what you value, what energises you, what the market needs.",
          "sub": "Ghép nhật ký, la bàn và thị trường: điều mình coi trọng, điều cho mình năng lượng, điều thị trường cần."
        }
      ],
      "ref": "p18"
    },
    {
      "id": "s19",
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
            "id": "i-not",
            "t": "text",
            "text": "Chưa phải quyết định",
            "x": 5964,
            "y": 1650,
            "size": 50,
            "at": "l1:decision",
            "color": "muted"
          },
          {
            "id": "i-qs",
            "t": "text",
            "text": "→ vài câu hỏi đáng thử",
            "x": 5964,
            "y": 1730,
            "size": 52,
            "at": "l1:questions",
            "color": "accent",
            "hl": [
              {
                "text": "câu hỏi đáng thử",
                "at": "l1:worth testing"
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
          "say": "This picture isn't a decision yet. It gives you a few questions worth testing.",
          "sub": "Bức tranh này chưa phải quyết định. Nó cho bạn vài câu hỏi đáng thử.",
          "keys": [
            "câu hỏi đáng thử"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Like Dũng's question about training. Testing it without quitting? That's the next video.",
          "sub": "Như câu hỏi về nghề đào tạo của Dũng. Thử mà chưa cần bỏ việc thế nào? Đó là bài sau."
        }
      ],
      "ref": "p19"
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
            "at": "l5",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tối Chủ nhật · cuối tuần 3",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday"
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
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "laptop",
                "notebook",
                "crescent-moon"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:desk",
            "caption": "Vẫn bàn ấy, vẫn tờ kết quả ấy",
            "icon": "crescent-moon"
          },
          {
            "id": "j-in",
            "t": "text",
            "text": "Hướng nội ✓",
            "x": 7932,
            "y": 1250,
            "size": 54,
            "at": "l2:Introvert",
            "color": "muted"
          },
          {
            "id": "j-up",
            "t": "text",
            "text": "+ sáng bừng khi hướng dẫn",
            "x": 7932,
            "y": 1330,
            "size": 46,
            "at": "l2:light up",
            "color": "accent"
          },
          {
            "id": "j-nx",
            "t": "text",
            "text": "Bước tiếp: hỏi người trong nghề",
            "x": 7932,
            "y": 1420,
            "size": 44,
            "at": "l4:ask",
            "hl": [
              {
                "text": "hỏi người trong nghề",
                "at": "l4:someone"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Biết người biết ta”",
            "x": 7932,
            "y": 1540,
            "size": 58,
            "at": "l5:know yourself",
            "color": "accent",
            "hl": [
              {
                "text": "biết ta",
                "at": "l5:know yourself"
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
          "say": "Sunday night, three weeks later. Same desk, same test result.",
          "sub": "Tối Chủ nhật, ba tuần sau. Vẫn bàn ấy, vẫn tờ kết quả ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Introvert, fine. But I light up when I teach. That's data too.",
          "sub": "Hướng nội, được thôi. Nhưng mình sáng bừng khi hướng dẫn người khác. Đó cũng là dữ liệu.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "And your question to test?",
          "sub": "Thế câu hỏi để thử của anh?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Do I fit training? Next step: ask someone who does it.",
          "sub": "Mình có hợp nghề đào tạo không? Bước tiếp: hỏi người đang làm nghề.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Know them, know yourself. This time Dũng did the know yourself part.",
          "sub": "“Biết người biết ta.” Lần này Dũng làm nốt vế “biết ta”.",
          "keys": [
            "biết ta"
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
      "ref": "outro"
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
            "ms": 1200
          },
          {
            "at": "l1",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "H",
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
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4636,
            "y": 510,
            "at": "l1+400"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6424,
            "y": 630,
            "at": "l2+400"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2688,
            "y": 1590,
            "at": "l3+400"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 4696,
            "y": 1415,
            "at": "l4+400"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo; bế tắc kéo dài thì nên gặp chuyên viên hướng nghiệp. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1810,
            "size": 26,
            "at": "l5:end",
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
          "say": "So: a test is a hint, not a verdict.",
          "sub": "Tóm lại: trắc nghiệm là gợi ý, không phải bản án.",
          "keys": [
            "gợi ý"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Write down what makes work good for you.",
          "sub": "Viết ra điều làm công việc “tốt” với mình.",
          "keys": [
            "tốt"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Log your energy, not just your tasks.",
          "sub": "Ghi năng lượng, không chỉ ghi việc.",
          "keys": [
            "Ghi năng lượng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And name what you can't stand, before you change anything.",
          "sub": "Và gọi đúng tên điều không chịu được, trước khi đổi bất cứ gì.",
          "keys": [
            "gọi đúng tên"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Tonight: three tasks that energised you, three that drained you.",
          "sub": "Tối nay: ghi ba việc làm bạn có năng lượng nhất, ba việc làm bạn đuối nhất.",
          "keys": [
            "ba việc"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s22",
      "module": "QUIZ-01",
      "data": {
        "q": "You feel exhausted but your health and play gauges are almost empty, what does the article suggest?",
        "options": [
          "Work longer hours so that the work gauge rises and covers the others",
          "Change jobs at once, because tiredness always comes from the wrong career",
          "A career change alone may not fix it, so look at those gauges too"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "battery",
        "why": "Mặt sức khoẻ, vui chơi đã cạn thì đổi nghề chưa chắc chữa được cái mệt."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You feel exhausted but your health and play gauges are almost empty, what does the article suggest?",
          "sub": "Bạn thấy kiệt sức nhưng mặt sức khoẻ và vui chơi gần như cạn, bài gợi ý gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A new job may not fix it, if health and play ran dry long ago.",
          "sub": "Đổi nghề chưa chắc chữa được, khi sức khoẻ và vui chơi đã cạn từ lâu."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Refill the empty gauges first.",
          "sub": "Nạp lại mặt đồng hồ đang cạn trước đã."
        }
      ],
      "ref": "questions[23]"
    },
    {
      "id": "s23",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi ghi ba việc nạp, ba việc rút năng lượng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, write three tasks that charged you, and three that drained you.",
          "sub": "Tối nay, ghi ba việc nạp năng lượng và ba việc rút cạn của bạn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then try the forty questions below.",
          "sub": "Rồi thử bốn mươi câu hỏi bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi career-changers-over-35, bài 1) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-21 (đoán sai): “trắc nghiệm nói hướng nội → hết làm việc gặp người?” → lật ngay “chưa vững” (p5), nhắc lại ở khép vòng. Dòng thời gian: BA TUẦN của Dũng (tối thứ Hai tuần 1 → thứ Ba 4 mảnh ghép → thứ Tư la bàn → Chủ nhật đồng hồ bốn mặt → tuần 2 nhật ký + AEIOU → tuần 3 quy luật → tối thứ Sáu Thảo “Khoan đã!” → kiểm kê, tin tuyển dụng → tối Chủ nhật cuối tuần 3, cùng bàn, cùng tờ kết quả). Nhân vật theo w145/_series/career-changers-over-35.md: Dũng (= anh Tuấn p5, p13, p19: 38 tuổi, mua hàng 13 năm), Thảo (vợ Dũng = chị Thảo p16; trong bài là nhân viên hành chính 36 tuổi, ở chuỗi là kế toán 37 tuổi; giữ “mở tiệm nhỏ” như bài). Không bịa số: Dũng tự chấm đồng hồ bằng chữ (tạm/tốt/thấp), không bằng số. Số chỉ từ bài: 22 / 38 tuổi, 13 năm, 1–10, 3 tuần, ~2 tuần, 10–15 tin. Ngắt nhịp: BRK-10 s06 (câu Rút ra p6), BRK-07 s11 (rehook nạp/rút năng lượng), BRK-02 s15 (trọng lực hay mỏ neo p15), DLG-01 s17 (p16). Tục ngữ: “Biết người biết ta, trăm trận trăm thắng”. Câu đố questions[23]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
