// basic-english-sentence-order--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "basic-english-sentence-order--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "grammar-zero-beginners",
    "slug": "basic-english-sentence-order",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Một câu tiếng Anh đơn giản nhất cần những gì và xếp theo thứ tự nào?",
    "series": "Ngữ pháp từ con số 0 — cho người lớn mới bắt đầu, nói được câu tiếng Anh đầu tiên cho đúng"
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
            "id": "a-vi",
            "t": "text",
            "text": "“Mưa rồi.”",
            "x": 60,
            "y": 110,
            "size": 120,
            "at": "l1:Vietnamese",
            "color": "accent"
          },
          {
            "id": "a-rain",
            "t": "illus",
            "name": "cloud-with-rain",
            "x": 620,
            "y": 110,
            "size": 130,
            "at": "l1:two words"
          },
          {
            "id": "a-o1",
            "t": "text",
            "text": "A. Is raining.",
            "x": 60,
            "y": 300,
            "size": 64,
            "at": "l2:A"
          },
          {
            "id": "a-o2",
            "t": "text",
            "text": "B. It is raining.",
            "x": 60,
            "y": 400,
            "size": 64,
            "at": "l2:B"
          },
          {
            "id": "a-x",
            "t": "strike",
            "over": "a-o1",
            "at": "l4:B"
          },
          {
            "id": "a-r",
            "t": "ring",
            "around": [
              "a-o2"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l4:B"
          },
          {
            "id": "a-k",
            "t": "text",
            "text": "luôn cần chủ ngữ",
            "x": 60,
            "y": 510,
            "size": 54,
            "at": "l4:always",
            "color": "accent",
            "hl": [
              {
                "text": "chủ ngữ",
                "at": "l4:subject"
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
          "say": "Quick guess. Vietnamese says mưa rồi, just two words. What about English?",
          "sub": "Đoán nhanh. Tiếng Việt nói “Mưa rồi”, hai chữ là xong. Tiếng Anh thì sao?",
          "keys": [
            "Mưa rồi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A: is raining. Or B: it is raining?",
          "sub": "A: Is raining. Hay B: It is raining?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Pick one. I'll wait.",
          "sub": "Chọn đi. Đét đợi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "B. An English sentence always needs a subject, even when nobody does anything.",
          "sub": "Đáp án B. Câu tiếng Anh luôn cần chủ ngữ, kể cả khi chẳng ai làm gì.",
          "keys": [
            "luôn cần chủ ngữ"
          ]
        }
      ],
      "beats": {
        "after": 300
      },
      "ref": "p6"
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
            "y": 150,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "cloud-with-rain",
                "mobile-phone"
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
            "caption": "Thứ Bảy 7:00 · trời mưa",
            "icon": "cloud-with-rain"
          },
          {
            "id": "a-sms",
            "t": "text",
            "text": "✉ “Is raining. Come at ten?”",
            "x": 60,
            "y": 610,
            "size": 42,
            "at": "l3:Is raining",
            "color": "coral",
            "hl": [
              {
                "text": "Is raining",
                "at": "l3:Is raining"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Ăn nên đọi, nói nên lời”",
            "x": 60,
            "y": 690,
            "size": 46,
            "at": "l5:eat",
            "color": "accent",
            "hl": [
              {
                "text": "nói nên lời",
                "at": "l5:speak"
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
          "say": "Meet Thảo, a housewife, learning English from zero.",
          "sub": "Đây là Thảo, nội trợ, học tiếng Anh từ con số 0.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Saturday, seven a.m., rain. She invites her new neighbour, Sam, to see her new house.",
          "sub": "Bảy giờ sáng thứ Bảy, trời mưa. Thảo mời Sam, hàng xóm mới, sang xem nhà mới."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Is raining. Come at ten? Send!",
          "sub": "Is raining. Come at ten? Gửi!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Thảo picked A. Translated word by word, like the Vietnamese.",
          "sub": "Thảo đã chọn A: dịch từng chữ theo tiếng Việt.",
          "keys": [
            "dịch từng chữ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: eat like a proper meal, speak like a proper sentence.",
          "sub": "Ông bà dặn: “Ăn nên đọi, nói nên lời.”",
          "keys": [
            "Ăn nên đọi, nói nên lời"
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
      "ref": "intro,p6"
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
            "text": "Câu tối thiểu cần gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:smallest",
            "hl": [
              {
                "text": "cần gì",
                "at": "l1:need"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: dịch từng chữ",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:word by word",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:one"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: một khuôn ổn định",
            "x": 2028,
            "y": 260,
            "size": 56,
            "at": "l2:one",
            "color": "accent",
            "hl": [
              {
                "text": "một khuôn",
                "at": "l2:pattern"
              }
            ]
          },
          {
            "id": "b-k1",
            "t": "box",
            "x": 2028,
            "y": 380,
            "w": 300,
            "h": 100,
            "at": "l3:Subject",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "b-k1t",
            "t": "text",
            "text": "Chủ ngữ",
            "x": 2058,
            "y": 395,
            "size": 56,
            "at": "l3:Subject+200"
          },
          {
            "id": "b-k2",
            "t": "box",
            "x": 2368,
            "y": 380,
            "w": 300,
            "h": 100,
            "at": "l3:verb",
            "stroke": 5
          },
          {
            "id": "b-k2t",
            "t": "text",
            "text": "Động từ",
            "x": 2398,
            "y": 395,
            "size": 56,
            "at": "l3:verb+200"
          },
          {
            "id": "b-k3",
            "t": "box",
            "x": 2708,
            "y": 380,
            "w": 420,
            "h": 100,
            "at": "l3:rest",
            "stroke": 5
          },
          {
            "id": "b-k3t",
            "t": "text",
            "text": "Phần còn lại",
            "x": 2738,
            "y": 395,
            "size": 56,
            "at": "l3:rest+200"
          },
          {
            "id": "b-day",
            "t": "text",
            "text": "Một ngày mưa của Thảo",
            "x": 2028,
            "y": 560,
            "size": 50,
            "at": "l4:rainy",
            "hl": [
              {
                "text": "Một ngày mưa",
                "at": "l4:rainy"
              }
            ]
          },
          {
            "id": "b-umb",
            "t": "illus",
            "name": "umbrella-with-rain-drops",
            "x": 2608,
            "y": 530,
            "size": 100,
            "at": "l4:umbrella"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what does the smallest English sentence need, and in what order?",
          "sub": "Vậy một câu tiếng Anh đơn giản nhất cần những gì, xếp theo thứ tự nào?",
          "keys": [
            "cần những gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not translating word by word, but one steady pattern.",
          "sub": "Không phải dịch từng chữ, mà là một khuôn rất ổn định.",
          "keys": [
            "một khuôn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Subject first, the verb next, then the rest.",
          "sub": "Chủ ngữ đứng đầu, động từ theo sau, rồi mới đến phần còn lại.",
          "keys": [
            "Chủ ngữ đứng đầu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Thảo's rainy Saturday. Grab an umbrella.",
          "sub": "Cùng theo Thảo qua một ngày thứ Bảy mưa. Cầm ô nhé."
        }
      ],
      "ref": "intro,p2"
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
            "text": "① 7:30 · Hai phần là đủ",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "bin",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain",
                  "face": "thinking"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "open-book",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "caption": "7:30 · bài tập của Bin",
            "icon": "open-book"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "John smiled.",
            "x": 3996,
            "y": 170,
            "size": 64,
            "at": "l2:John",
            "color": "accent",
            "hl": [
              {
                "text": "smiled",
                "at": "l3:smiled"
              }
            ]
          },
          {
            "id": "c-1s",
            "t": "text",
            "text": "chủ ngữ + động từ",
            "x": 4016,
            "y": 260,
            "size": 44,
            "at": "l3:subject"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "The children laughed.",
            "x": 3996,
            "y": 335,
            "size": 54,
            "at": "l4:children",
            "hl": [
              {
                "text": "laughed",
                "at": "l4:laughed"
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
          "say": "Stop one, seven thirty. This is Bé Bin, Thảo's son, doing English homework.",
          "sub": "Chặng một, bảy giờ rưỡi. Đây là Bé Bin, con trai Thảo, đang làm bài tập tiếng Anh.",
          "keys": [
            "Bé Bin"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Mum! John smiled. Just two words, and it's a full sentence?",
          "sub": "Mẹ ơi! John smiled. Có hai chữ mà là câu trọn vẹn à?",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Yes. British Council says every clause has a subject, John, and a verb, smiled.",
          "sub": "Đúng. British Council nói mỗi mệnh đề có ít nhất chủ ngữ, John, và động từ, smiled.",
          "keys": [
            "chủ ngữ",
            "động từ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The children laughed. Same story: two parts, done.",
          "sub": "The children laughed. Cũng vậy: hai phần, xong một câu."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
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
          }
        ],
        "items": [
          {
            "id": "c-3",
            "t": "text",
            "text": "+ tân ngữ · bổ ngữ · trạng ngữ",
            "x": 3996,
            "y": 430,
            "size": 42,
            "at": "l1:third",
            "hl": [
              {
                "text": "tân ngữ",
                "at": "l1:object"
              }
            ]
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 510,
            "w": 44,
            "h": 44,
            "at": "l3:subject",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 492,
            "size": 50,
            "at": "l3:subject+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Có chủ ngữ chưa?",
            "x": 4061,
            "y": 502,
            "size": 38,
            "at": "l3:subject+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 570,
            "w": 44,
            "h": 44,
            "at": "l3:verb",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 552,
            "size": 50,
            "at": "l3:verb+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Có động từ chưa?",
            "x": 4061,
            "y": 562,
            "size": 38,
            "at": "l3:verb+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 630,
            "w": 44,
            "h": 44,
            "at": "l4:before",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 612,
            "size": 50,
            "at": "l4:before+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Chủ ngữ đứng trước?",
            "x": 4061,
            "y": 622,
            "size": 38,
            "at": "l4:before+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 690,
            "w": 44,
            "h": 44,
            "at": "l4:after",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 672,
            "size": 50,
            "at": "l4:after+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Phần còn lại đứng sau?",
            "x": 4061,
            "y": 682,
            "size": 38,
            "at": "l4:after+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Most sentences add a third part: an object, a description, or a place and time.",
          "sub": "Phần lớn câu có thêm phần thứ ba: tân ngữ, bổ ngữ, hoặc trạng ngữ nơi chốn, thời gian.",
          "keys": [
            "phần thứ ba"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Here's a four-box check for any simple statement.",
          "sub": "Đây là bộ kiểm bốn ô cho mọi câu kể đơn giản.",
          "keys": [
            "bộ kiểm bốn ô"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Is there a subject? Is there a verb?",
          "sub": "Có chủ ngữ chưa? Có động từ chưa?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Does the subject come before the verb? Does the rest come after it?",
          "sub": "Chủ ngữ đứng trước động từ chưa? Phần còn lại đứng sau chưa?"
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
            "fit": "C",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "D",
            "ms": 900
          },
          {
            "at": "l5",
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
            "text": "② 8:00 · Không bỏ chủ ngữ",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "mobile-phone",
                "cloud-with-rain"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l5",
            "caption": "8:00 · Thảo đọc lại tin nhắn",
            "icon": "mobile-phone"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Is late.",
            "x": 5964,
            "y": 170,
            "size": 54,
            "at": "l2:Is late",
            "color": "muted"
          },
          {
            "id": "d-1x",
            "t": "strike",
            "over": "d-1",
            "at": "l2:She"
          },
          {
            "id": "d-1b",
            "t": "text",
            "text": "→ She is late.",
            "x": 6204,
            "y": 170,
            "size": 54,
            "at": "l2:She",
            "color": "accent",
            "hl": [
              {
                "text": "She",
                "at": "l2:She"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Was a teacher.",
            "x": 5964,
            "y": 255,
            "size": 50,
            "at": "l3:Was",
            "color": "muted"
          },
          {
            "id": "d-2x",
            "t": "strike",
            "over": "d-2",
            "at": "l3:He"
          },
          {
            "id": "d-2b",
            "t": "text",
            "text": "→ He was a teacher.",
            "x": 6324,
            "y": 255,
            "size": 50,
            "at": "l3:He",
            "color": "accent",
            "hl": [
              {
                "text": "He",
                "at": "l3:He"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Stop! · Please come to dinner.",
            "x": 5964,
            "y": 345,
            "size": 44,
            "at": "l4:Stop",
            "hl": [
              {
                "text": "Stop!",
                "at": "l4:Stop"
              }
            ]
          },
          {
            "id": "d-3b",
            "t": "text",
            "text": "lời mời: người nghe ngầm hiểu",
            "x": 5964,
            "y": 410,
            "size": 36,
            "at": "l4:listener",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, eight a.m. Can English drop the subject, like Vietnamese does?",
          "sub": "Chặng hai, tám giờ sáng. Tiếng Anh có bỏ được chủ ngữ như tiếng Việt không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. An English clause always has a subject. Not is late, but she is late.",
          "sub": "Không. Mệnh đề tiếng Anh luôn có chủ ngữ. Không nói “Is late”, mà “She is late”.",
          "keys": [
            "luôn có chủ ngữ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not was a teacher, but he was a teacher.",
          "sub": "Không nói “Was a teacher”, mà “He was a teacher”."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The exception: orders, invitations, requests. Stop! Please come to dinner tomorrow. The listener is the hidden subject.",
          "sub": "Ngoại lệ: mệnh lệnh, lời mời, lời nhờ. Stop! Please come to dinner tomorrow. Người nghe là chủ ngữ ngầm hiểu."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "But my message, is raining... nobody is doing the raining!",
          "sub": "Nhưng tin nhắn của mình, is raining… có ai làm mưa đâu!",
          "face": "thinking"
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
            "fit": "D",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "d-it",
            "t": "text",
            "text": "It is raining. · It is late.",
            "x": 5964,
            "y": 480,
            "size": 48,
            "at": "l1:It is raining",
            "hl": [
              {
                "text": "It",
                "at": "l1:It is raining"
              }
            ]
          },
          {
            "id": "d-it2",
            "t": "text",
            "text": "It's a lovely day.",
            "x": 5964,
            "y": 550,
            "size": 48,
            "at": "l2:lovely"
          },
          {
            "id": "d-it3",
            "t": "text",
            "text": "it = giữ chỗ, không phải “nó”",
            "x": 5964,
            "y": 620,
            "size": 44,
            "at": "l3:holds",
            "color": "coral",
            "hl": [
              {
                "text": "giữ chỗ",
                "at": "l3:holds"
              }
            ]
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Không ai làm chủ ngữ → mượn it",
            "x": 5964,
            "y": 690,
            "size": 44,
            "at": "l4:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "mượn it",
                "at": "l4:borrow"
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
          "say": "Then English uses a dummy subject, it. It is raining. It is late.",
          "sub": "Khi đó tiếng Anh dùng chủ ngữ giả it. It is raining. It is late.",
          "keys": [
            "chủ ngữ giả it"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It's a lovely day.",
          "sub": "Hôm nay trời đẹp: It's a lovely day."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "This it doesn't mean nó. It just holds the subject's seat, like a coat on a cinema chair.",
          "sub": "Chữ it này không có nghĩa là “nó”, chỉ giữ chỗ cho chủ ngữ, như cái áo vắt trên ghế rạp phim.",
          "keys": [
            "giữ chỗ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: nobody for the subject? Borrow it.",
          "sub": "Rút ra: không có ai làm chủ ngữ, hãy mượn chữ it.",
          "keys": [
            "mượn chữ it"
          ]
        }
      ],
      "ref": "p6,p7"
    },
    {
      "id": "s07",
      "module": "BRK-12",
      "data": {
        "word": "It",
        "sub": "Chủ ngữ giả: giữ chỗ cho khuôn câu",
        "from": [
          520,
          620
        ],
        "others": [
          "is raining",
          "is late",
          "a lovely day"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One tiny word: it.",
          "sub": "Một chữ nhỏ xíu: it."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A fake subject, keeping the pattern in place.",
          "sub": "Chủ ngữ giả, giữ chỗ cho khuôn câu.",
          "keys": [
            "Chủ ngữ giả"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p6"
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
            "text": "③ 9:00 · Ai, làm gì, ở đâu",
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
            "w": 780,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "hot-beverage",
                "taxi"
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
            "at": "l1",
            "caption": "9:00 · quán nước đầu ngõ",
            "icon": "hot-beverage"
          },
          {
            "id": "e-vi",
            "t": "text",
            "text": "“Uống cà phê ở chỗ làm”",
            "x": 7932,
            "y": 170,
            "size": 40,
            "at": "l2:coffee",
            "color": "muted"
          },
          {
            "id": "e-w1",
            "t": "text",
            "text": "We",
            "x": 7932,
            "y": 260,
            "size": 64,
            "at": "l3:we",
            "color": "coral"
          },
          {
            "id": "e-w2",
            "t": "text",
            "text": "drink",
            "x": 8072,
            "y": 260,
            "size": 64,
            "at": "l4:drink"
          },
          {
            "id": "e-w3",
            "t": "text",
            "text": "coffee",
            "x": 8272,
            "y": 260,
            "size": 64,
            "at": "l5:coffee"
          },
          {
            "id": "e-w4",
            "t": "text",
            "text": "at work.",
            "x": 8492,
            "y": 260,
            "size": 64,
            "at": "l6:at work",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "ai",
            "x": 7952,
            "y": 345,
            "size": 36,
            "at": "l3:we+300",
            "color": "muted"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "làm gì",
            "x": 8082,
            "y": 345,
            "size": 36,
            "at": "l4:drink+300",
            "color": "muted"
          },
          {
            "id": "e-l3",
            "t": "text",
            "text": "cái gì",
            "x": 8282,
            "y": 345,
            "size": 36,
            "at": "l5:coffee+300",
            "color": "muted"
          },
          {
            "id": "e-l4",
            "t": "text",
            "text": "ở đâu",
            "x": 8512,
            "y": 345,
            "size": 36,
            "at": "l6:at work+300",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, nine a.m., the café at the end of the alley. Meet Dũng, Thảo's brother, a ride-hailing driver.",
          "sub": "Chặng ba, chín giờ, quán nước đầu ngõ. Đây là Dũng, em trai Thảo, tài xế xe công nghệ.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Sis, how do I say: we drivers drink coffee at work?",
          "sub": "Chị ơi, “chúng tôi uống cà phê ở chỗ làm” nói sao?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Step one, the subject: chúng tôi is we.",
          "sub": "Bước một, tìm chủ ngữ: chúng tôi là we."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Step two, the verb right after it: drink.",
          "sub": "Bước hai, động từ đặt ngay sau: uống là drink."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Step three, the object after the verb: coffee.",
          "sub": "Bước ba, tân ngữ sau động từ: cà phê là coffee."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Step four, the place at the end: at work. We drink coffee at work.",
          "sub": "Bước bốn, nơi chốn ở cuối: at work. We drink coffee at work.",
          "keys": [
            "We drink coffee at work"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1200
        }
      ],
      "ref": "p11"
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
          }
        ],
        "items": [
          {
            "id": "e-svo",
            "t": "text",
            "text": "John wanted a new bicycle.",
            "x": 7932,
            "y": 410,
            "size": 44,
            "at": "l2:John wanted",
            "hl": [
              {
                "text": "wanted",
                "at": "l2:wanted"
              }
            ]
          },
          {
            "id": "e-me",
            "t": "text",
            "text": "Can you help me, please?",
            "x": 7932,
            "y": 475,
            "size": 44,
            "at": "l3:help me",
            "hl": [
              {
                "text": "me",
                "at": "l3:me"
              }
            ]
          },
          {
            "id": "e-me2",
            "t": "text",
            "text": "I → me khi làm tân ngữ",
            "x": 7932,
            "y": 540,
            "size": 36,
            "at": "l4:object",
            "color": "coral"
          },
          {
            "id": "e-vase",
            "t": "text",
            "text": "She put the flowers in a vase.",
            "x": 7932,
            "y": 600,
            "size": 40,
            "at": "l5:vase",
            "hl": [
              {
                "text": "in a vase",
                "at": "l5:vase"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Ai · làm gì · cái gì · ở đâu",
            "x": 7932,
            "y": 680,
            "size": 46,
            "at": "l6:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "ở đâu",
                "at": "l6:where"
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
          "say": "That's even a sentence from British Council's present simple page. Order checked.",
          "sub": "Đây chính là một câu ví dụ trong bài hiện tại đơn của British Council. Đúng khuôn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Subject, verb, object: John wanted a new bicycle. Same order as Vietnamese. The easy part.",
          "sub": "Chủ ngữ, động từ, tân ngữ: John wanted a new bicycle. Giống tiếng Việt, nên đây là phần dễ nhất.",
          "keys": [
            "phần dễ nhất"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Dũng, carry these chairs. Can you help me, please?",
          "sub": "Dũng, khiêng giúp chị mấy cái ghế. Can you help me, please?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Notice: I becomes me when it's the object. Lesson three goes deeper.",
          "sub": "Để ý: tôi làm tân ngữ thì I thành me. Bài thứ ba của chuỗi sẽ đi kỹ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Place and time go after the verb, and after the object: she put the flowers in a vase.",
          "sub": "Nơi chốn, thời gian đứng sau động từ, sau cả tân ngữ: She put the flowers in a vase."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: who, does what, to what, where. Just line them up.",
          "sub": "Rút ra: ai, làm gì, cái gì, ở đâu: cứ thế mà xếp.",
          "keys": [
            "cứ thế mà xếp"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Ten a.m., the doorbell rings. Sam, the new neighbour, has come to see the house.",
          "sub": "Mười giờ, chuông cửa reo. Sam, cô hàng xóm mới, sang xem nhà.",
          "keys": [
            "Sam"
          ]
        }
      ],
      "ref": "p8,p9,p10,p12"
    },
    {
      "id": "s10",
      "module": "BRK-07",
      "data": {
        "question": "Thế tính từ đứng đâu?",
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
          "say": "Where does the adjective go? Here English turns against Vietnamese.",
          "sub": "Tính từ thì đứng đâu? Chỗ này tiếng Anh đi ngược tiếng Việt.",
          "keys": [
            "đi ngược tiếng Việt"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "10:00 · Sam sang xem nhà mới",
        "actors": [
          {
            "id": "thao",
            "side": "left",
            "pose": "explain"
          },
          {
            "id": "sam",
            "side": "right",
            "pose": "hold",
            "face": "happy"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "We have a house beautiful",
          "why": "Giữ trật tự tiếng Việt: danh từ trước, tính từ sau.",
          "rule": "Tính từ đứng trước danh từ, hoặc sau be"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Welcome, Sam! We have a house beautiful!",
          "sub": "Chào Sam! We have a house beautiful!",
          "face": "happy",
          "pose": "explain",
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
          "say": "That's Vietnamese order: nhà đẹp, noun first, adjective after. English flips it.",
          "sub": "Đó là trật tự tiếng Việt: “nhà đẹp”, danh từ trước, tính từ sau. Tiếng Anh đảo lại.",
          "keys": [
            "Tiếng Anh đảo lại"
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
          "say": "Welcome, Sam! We have a beautiful house!",
          "sub": "Chào Sam! We have a beautiful house!",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "sam",
          "say": "Yes! Your house is beautiful.",
          "sub": "Đúng thật! Your house is beautiful.",
          "phase": "redo",
          "face": "happy"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p15"
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
            "at": "l4",
            "fit": [
              "f-2",
              "f-3"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l5",
            "fit": "F",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 10:15 · Tính từ đứng đâu",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four"
          },
          {
            "id": "f-vi",
            "t": "text",
            "text": "nhà đẹp",
            "x": 60,
            "y": 1260,
            "size": 64,
            "at": "l2:nhà đẹp",
            "color": "muted"
          },
          {
            "id": "f-ar",
            "t": "arrow",
            "from": [
              330,
              1300
            ],
            "to": [
              470,
              1300
            ],
            "at": "l2:beautiful house"
          },
          {
            "id": "f-en",
            "t": "text",
            "text": "beautiful house",
            "x": 500,
            "y": 1260,
            "size": 64,
            "at": "l2:beautiful house",
            "color": "accent",
            "hl": [
              {
                "text": "beautiful",
                "at": "l2:beautiful house"
              }
            ]
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "They have a beautiful house.",
            "x": 60,
            "y": 1370,
            "size": 48,
            "at": "l3:They have",
            "hl": [
              {
                "text": "beautiful",
                "at": "l3:beautiful"
              }
            ]
          },
          {
            "id": "f-1b",
            "t": "text",
            "text": "We saw a very exciting film.",
            "x": 60,
            "y": 1440,
            "size": 48,
            "at": "l3:exciting",
            "hl": [
              {
                "text": "exciting",
                "at": "l3:exciting"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Chỗ 1: ngay trước danh từ",
            "x": 60,
            "y": 1540,
            "size": 48,
            "at": "l4:right before",
            "color": "accent"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Chỗ 2: sau be, look, feel",
            "x": 60,
            "y": 1620,
            "size": 48,
            "at": "l4:after",
            "color": "accent",
            "hl": [
              {
                "text": "be, look, feel",
                "at": "l4:be"
              }
            ]
          },
          {
            "id": "f-3b",
            "t": "text",
            "text": "Their house is beautiful.",
            "x": 60,
            "y": 1700,
            "size": 44,
            "at": "l5:Their"
          },
          {
            "id": "f-3c",
            "t": "text",
            "text": "That film looks interesting.",
            "x": 60,
            "y": 1765,
            "size": 44,
            "at": "l5:looks",
            "hl": [
              {
                "text": "looks",
                "at": "l5:looks"
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
          "say": "Stop four, ten fifteen. Where do adjectives go?",
          "sub": "Chặng bốn, mười giờ mười lăm. Tính từ đứng ở đâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Vietnamese says nhà đẹp. English says beautiful house. Most adjectives come before the noun.",
          "sub": "Tiếng Việt nói “nhà đẹp”, tiếng Anh nói “beautiful house”: phần lớn tính từ đứng trước danh từ.",
          "keys": [
            "đứng trước danh từ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "From the source: they have a beautiful house. We saw a very exciting film.",
          "sub": "Ví dụ trong nguồn: They have a beautiful house. We saw a very exciting film."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So two seats: right before the noun, or after link verbs like be, look, feel.",
          "sub": "Vậy có hai chỗ: ngay trước danh từ, hoặc sau động từ nối như be, look, feel.",
          "keys": [
            "hai chỗ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Their house is beautiful. That film looks interesting. Both natural.",
          "sub": "Their house is beautiful. That film looks interesting. Cả hai đều tự nhiên."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: Vietnamese nhà đẹp, English beautiful house.",
          "sub": "Rút ra: tiếng Việt “nhà đẹp”, tiếng Anh “beautiful house”.",
          "keys": [
            "beautiful house"
          ]
        }
      ],
      "ref": "p13,p14,p16"
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
            "at": "l3",
            "fit": "G",
            "ms": 700
          },
          {
            "at": "l4",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 12:00 · Thiếu động từ",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "kitchen",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "shrug",
                  "face": "sad"
                },
                {
                  "id": "bin",
                  "side": "center",
                  "pose": "point",
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "steaming-bowl",
                "cooked-rice"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "bin",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "12:00 · bữa trưa nhà Thảo",
            "icon": "steaming-bowl"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "“Nó đói” → He hungry",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l2:He hungry",
            "color": "coral"
          },
          {
            "id": "g-1x",
            "t": "strike",
            "over": "g-1",
            "at": "l3:is"
          },
          {
            "id": "g-1b",
            "t": "text",
            "text": "He is hungry.",
            "x": 2028,
            "y": 1340,
            "size": 60,
            "at": "l3:He is hungry",
            "color": "accent",
            "hl": [
              {
                "text": "is",
                "at": "l3:is"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "I tired. · I driver.",
            "x": 2028,
            "y": 1440,
            "size": 50,
            "at": "l4:I tired",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, noon. Lunch at Thảo's. Dũng drops in, straight from driving.",
          "sub": "Chặng năm, giữa trưa. Bữa trưa nhà Thảo. Dũng vừa chạy xe về ghé qua."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Look at Uncle Dũng, Sam. He hungry!",
          "sub": "Cô Sam nhìn chú Dũng kìa. He hungry!",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Vietnamese says nó đói, nothing in between. So learners drop the verb. Correct: he is hungry.",
          "sub": "Tiếng Việt nói “Nó đói”, không có chữ nào ở giữa, nên người học hay bỏ động từ. Câu đúng: He is hungry.",
          "keys": [
            "He is hungry"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Yes, Sam. I tired. I driver.",
          "sub": "Vâng, Sam. I tired. I driver.",
          "face": "sad",
          "pose": "shrug"
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s14",
      "module": "BRK-04",
      "data": {
        "title": "Dũng nói với Sam",
        "labels": [
          "Sai",
          "Đúng"
        ],
        "wrong": "I tired. I driver.",
        "right": "I am tired. I am a driver.",
        "wrongIllus": "tired-face",
        "rightIllus": "oncoming-taxi"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "I tired. I driver. No verb.",
          "sub": "I tired. I driver. Thiếu động từ.",
          "keys": [
            "Thiếu động từ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "I am tired. I am a driver.",
          "sub": "I am tired. I am a driver."
        }
      ],
      "ref": "p19"
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
          }
        ],
        "items": [
          {
            "id": "g-3",
            "t": "text",
            "text": "Động từ nối: be, look, feel, taste",
            "x": 2028,
            "y": 1530,
            "size": 42,
            "at": "l1:link",
            "hl": [
              {
                "text": "Động từ nối",
                "at": "l1:Link verbs"
              }
            ]
          },
          {
            "id": "g-3b",
            "t": "text",
            "text": "She looks happy. · He became a teacher.",
            "x": 2028,
            "y": 1595,
            "size": 38,
            "at": "l2:looks"
          },
          {
            "id": "g-soup",
            "t": "text",
            "text": "This soup tastes awful.",
            "x": 2028,
            "y": 1660,
            "size": 44,
            "at": "l3:awful",
            "color": "coral",
            "hl": [
              {
                "text": "tastes",
                "at": "l3:tastes"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Người + tính từ → thêm am, is, are",
            "x": 2028,
            "y": 1760,
            "size": 46,
            "at": "l5:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "am, is, are",
                "at": "l5:am"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l0",
          "lang": "en",
          "who": "det",
          "say": "And see the little a in I am a driver? Jobs need a in front.",
          "sub": "Để ý chữ a nhỏ trong “I am a driver”: trước nghề nghiệp cần có a.",
          "keys": [
            "trước nghề nghiệp cần có a"
          ]
        },
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Link verbs like be, look, feel, taste connect the subject to its description.",
          "sub": "Động từ nối như be, look, feel, taste nối chủ ngữ với phần mô tả.",
          "keys": [
            "Động từ nối"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "She looks happy. He became a teacher.",
          "sub": "She looks happy: cô ấy trông vui. He became a teacher: anh ấy trở thành giáo viên."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "bin",
          "say": "And this soup tastes awful!",
          "sub": "Còn món súp này... This soup tastes awful!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Grammar, perfect. Diplomacy, zero. Bin washes the dishes tonight.",
          "sub": "Ngữ pháp: chuẩn. Ngoại giao: bằng không. Tối nay Bin rửa bát."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: a sentence with only a person and an adjective? Find a place for am, is, are.",
          "sub": "Rút ra: thấy câu chỉ có người và tính từ, hãy tìm chỗ cho am, is, are.",
          "keys": [
            "tìm chỗ cho am, is, are"
          ]
        }
      ],
      "ref": "p18,p20"
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
            "text": "⑥ 21:00 · Tự kiểm bốn ô",
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
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "notebook",
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
            "caption": "21:00 · sổ tay của Thảo",
            "icon": "notebook"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1270,
            "w": 44,
            "h": 44,
            "at": "l3:subject",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1252,
            "size": 56,
            "at": "l3:subject+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Đầu câu có chủ ngữ",
            "x": 4061,
            "y": 1262,
            "size": 40,
            "at": "l3:subject+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1345,
            "w": 44,
            "h": 44,
            "at": "l3:verb",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1327,
            "size": 56,
            "at": "l3:verb+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Ngay sau có động từ",
            "x": 4061,
            "y": 1337,
            "size": 40,
            "at": "l3:verb+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1420,
            "w": 44,
            "h": 44,
            "at": "l4:adjective",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1402,
            "size": 56,
            "at": "l4:adjective+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Tính từ: trước danh từ, sau be",
            "x": 4061,
            "y": 1412,
            "size": 40,
            "at": "l4:adjective+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1495,
            "w": 44,
            "h": 44,
            "at": "l4:place",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1477,
            "size": 56,
            "at": "l4:place+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Nơi chốn, thời gian ở cuối",
            "x": 4061,
            "y": 1487,
            "size": 40,
            "at": "l4:place+200"
          },
          {
            "id": "h-5",
            "t": "text",
            "text": "Mỗi ngày: 5 câu về mình",
            "x": 3996,
            "y": 1590,
            "size": 50,
            "at": "l5:five",
            "color": "accent",
            "hl": [
              {
                "text": "5 câu",
                "at": "l5:five"
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
          "say": "Stop six, nine p.m. Thảo writes sentences about her day.",
          "sub": "Chặng sáu, chín giờ tối. Thảo viết vài câu về ngày hôm nay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "My house is new. Sam likes my house. It is raining.",
          "sub": "My house is new. Sam likes my house. It is raining.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then the check. A subject at the start? A verb right after it?",
          "sub": "Rồi soát. Đầu câu có chủ ngữ chưa? Ngay sau có động từ chưa?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Adjective before the noun, or after be? Place and time at the end?",
          "sub": "Tính từ đứng trước danh từ hoặc sau be chưa? Nơi chốn, thời gian ở cuối chưa?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Every day, five sentences about yourself, then these four boxes.",
          "sub": "Mỗi ngày tự đặt năm câu về bản thân rồi soát bốn ô này.",
          "keys": [
            "năm câu về bản thân"
          ]
        }
      ],
      "ref": "p21"
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
            "id": "h-be",
            "t": "text",
            "text": "be: am · is · are",
            "x": 3996,
            "y": 1680,
            "size": 56,
            "at": "l1:am",
            "color": "accent",
            "hl": [
              {
                "text": "am · is · are",
                "at": "l1:are"
              }
            ]
          },
          {
            "id": "h-nx",
            "t": "text",
            "text": "→ bài sau: chủ ngữ nào, dạng nào?",
            "x": 3996,
            "y": 1765,
            "size": 40,
            "at": "l2:Next"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "And the verb that shows up most in introductions? Be, with three forms: am, is, are.",
          "sub": "Động từ xuất hiện nhiều nhất trong câu giới thiệu, mô tả: be, với ba dạng am, is, are.",
          "keys": [
            "am, is, are"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next step: which subject takes which form.",
          "sub": "Bước tiếp theo: chủ ngữ nào đi với dạng nào."
        }
      ],
      "ref": "p22"
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
            "text": "Chủ nhật · 7:00 · lại mưa",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "cloud-with-rain",
                "mobile-phone"
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
            "caption": "Chủ nhật 7:00 · trời lại mưa",
            "icon": "cloud-with-rain"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "✉ “It is raining again.”",
            "x": 5964,
            "y": 1270,
            "size": 48,
            "at": "l2:It is raining",
            "color": "accent",
            "hl": [
              {
                "text": "It",
                "at": "l2:It is raining"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "“Please come for coffee!”",
            "x": 5964,
            "y": 1350,
            "size": 48,
            "at": "l2:Please"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Ăn nên đọi, nói nên lời”",
            "x": 5964,
            "y": 1490,
            "size": 52,
            "at": "l3:eat",
            "color": "accent",
            "hl": [
              {
                "text": "nói nên lời",
                "at": "l3:sentence"
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
          "say": "Sunday, seven a.m. Same window, same rain, same Thảo.",
          "sub": "Chủ nhật, bảy giờ sáng. Vẫn ô cửa ấy, cơn mưa ấy, Thảo ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "It is raining again. Please come for coffee! Send. Got it!",
          "sub": "It is raining again. Please come for coffee! Gửi. Got it!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Eat like a proper meal, speak like a proper sentence. Today, Thảo picked B.",
          "sub": "“Ăn nên đọi, nói nên lời.” Hôm nay Thảo chọn B.",
          "keys": [
            "Thảo chọn B"
          ]
        }
      ],
      "ref": "p6"
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
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "J",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tóm lại: một khuôn câu",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:So"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Chủ ngữ → động từ → phần còn lại",
            "x": 7932,
            "y": 1270,
            "size": 48,
            "at": "l1:subject",
            "hl": [
              {
                "text": "Chủ ngữ",
                "at": "l1:subject"
              }
            ]
          },
          {
            "id": "j-4",
            "t": "text",
            "text": "Làm ngay: 3 câu về mình",
            "x": 7932,
            "y": 1390,
            "size": 52,
            "at": "l5:Do it now",
            "color": "accent",
            "hl": [
              {
                "text": "3 câu",
                "at": "l5:three"
              }
            ]
          },
          {
            "id": "j-5",
            "t": "text",
            "text": "Bài sau: am, is, are",
            "x": 7932,
            "y": 1480,
            "size": 50,
            "at": "l5:Next",
            "color": "accent"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 6604,
            "y": 470,
            "at": "l2:subject"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1060,
            "y": 1260,
            "at": "l3:adjective"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2468,
            "y": 1330,
            "at": "l4:verb"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Nhân vật trong bài là minh hoạ. Câu mẫu theo British Council LearnEnglish, The TEFL Academy.",
            "x": 7932,
            "y": 1810,
            "size": 28,
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
          "say": "So, one pattern: subject, verb, then the rest.",
          "sub": "Tóm lại, nhớ một khuôn: chủ ngữ, động từ, rồi phần còn lại.",
          "keys": [
            "một khuôn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Never drop the subject. Nobody there? Borrow it.",
          "sub": "Không bỏ chủ ngữ. Không có ai thì mượn it."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The adjective goes before the noun, or after be.",
          "sub": "Tính từ đứng trước danh từ, hoặc sau be."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And never drop the verb: I am tired.",
          "sub": "Và không bỏ động từ: I am tired."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Do it now: three sentences about you, checked with four boxes. Next up: am, is, are.",
          "sub": "Việc làm ngay: viết ba câu về mình, soát bằng bốn ô. Bài tiếp theo: am, is, are.",
          "keys": [
            "ba câu về mình"
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
        "q": "Dung wants to say he is a driver, which sentence is correct?",
        "options": [
          "I am a driver, with am as the verb and a before driver",
          "I am driver, because jobs never need a word before them",
          "I driver, because the job name can work as the verb"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "oncoming-taxi",
        "why": "Câu cần động từ am và mạo từ a trước nghề nghiệp. The TEFL Academy ghi nhận lỗi bỏ mạo từ kiểu “I want to be teacher”."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Dung wants to say he is a driver, which sentence is correct?",
          "sub": "Anh Dũng muốn nói mình là tài xế, câu nào đúng?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "I am a driver, with am as the verb and a before driver.",
          "sub": "I am a driver: có động từ am, có chữ a trước nghề."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "A verb in the middle, a before the job.",
          "sub": "Động từ ở giữa, chữ a trước nghề."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[33]"
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
          "say": "Subject, verb, the rest. Now try the forty questions below.",
          "sub": "Chủ ngữ, động từ, phần còn lại. Giờ thử bốn mươi câu hỏi bên dưới nhé.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT NGÀY THỨ BẢY MƯA của Thảo (7:00 nhắn Sam “Is raining” → 7:30 bài tập của Bin “John smiled” → 8:00 không bỏ chủ ngữ, mượn it → 9:00 quán đầu ngõ, Dũng ghép “We drink coffee at work” → 10:00 “Khoan đã!” “a house beautiful” → 10:15 tính từ hai chỗ → 12:00 bữa trưa “He hungry”, “I tired, I driver” → 21:00 tự kiểm bốn ô → Chủ nhật 7:00 mưa lại, khép vòng “It is raining again”). HOOK-21 câu đoán “Is raining / It is raining”. Nhân vật: Thảo, Bé Bin, Dũng, Sam — w145/_series/grammar-zero-beginners.md. Cảnh ngắt nhịp: BRK-12 (chữ it), BRK-07 (rehook tính từ), BRK-04 (I tired / I am tired). Ca dao: “Ăn nên đọi, nói nên lời”. Câu đố questions[33].",
  "loop": {
    "open": "s01",
    "close": "s18"
  }
};
