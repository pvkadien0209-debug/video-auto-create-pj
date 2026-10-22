// past-simple-regular-irregular--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "past-simple-regular-irregular--w01",
  "hook": "HOOK-22",
  "unit": {
    "audience": "grammar-a2-past-and-future",
    "slug": "past-simple-regular-irregular",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Thì quá khứ đơn: thêm -ed thế nào và học động từ bất quy tắc ra sao?",
    "series": "Kể chuyện hôm qua, hẹn chuyện ngày mai — ngữ pháp quá khứ và tương lai cho người học A2"
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
            "x": 900,
            "y": 110,
            "w": 780,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
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
            "caption": "Thứ Hai 9:00 · gọi chị Sam",
            "icon": "laptop"
          },
          {
            "id": "a-cut",
            "t": "text",
            "text": "“Last weekend I…”",
            "x": 60,
            "y": 150,
            "size": 66,
            "at": "l4:Cut",
            "color": "muted"
          },
          {
            "id": "a-x",
            "t": "text",
            "text": "✂",
            "x": 640,
            "y": 140,
            "size": 80,
            "at": "l4:Cut",
            "color": "coral"
          },
          {
            "id": "a-g",
            "t": "text",
            "text": "goed?",
            "x": 100,
            "y": 280,
            "size": 110,
            "at": "l5:goed",
            "color": "coral",
            "hl": [
              {
                "text": "goed",
                "at": "l5:goed"
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
          "say": "Meet Thảo, an accountant in Hà Nội, and Sam, her foreign partner. Monday call, nine a.m.",
          "sub": "Đây là Thảo, kế toán ở Hà Nội, và chị Sam, đối tác nước ngoài. Cuộc gọi chín giờ sáng thứ Hai.",
          "keys": [
            "Thảo",
            "chị Sam"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Hi Thảo! How was your weekend?",
          "sub": "Chào Thảo! Cuối tuần của em thế nào?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Great! Last weekend I... go-ed... I...",
          "sub": "Vui lắm chị! Last weekend I… go-ed… I…",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Cut! Hold that sentence. We'll finish it in a minute.",
          "sub": "Cắt! Giữ câu đó lại. Một phút nữa ta nói nốt.",
          "keys": [
            "Giữ câu đó lại"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Goed tells Sam it was yesterday. But goed is not an English word.",
          "sub": "Goed cho chị Sam biết đó là chuyện đã qua. Nhưng goed không phải là một từ tiếng Anh.",
          "keys": [
            "không phải là một từ tiếng Anh"
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
          "at": "l4",
          "key": "pop",
          "offsetMs": 0
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
          }
        ],
        "items": [
          {
            "id": "a-p",
            "t": "text",
            "text": "Quá khứ đơn = nền của mọi chuyện",
            "x": 60,
            "y": 470,
            "size": 46,
            "at": "l1:foundation",
            "hl": [
              {
                "text": "nền",
                "at": "l1:foundation"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Nước chảy đá mòn”",
            "x": 60,
            "y": 600,
            "size": 60,
            "at": "l2:water",
            "color": "accent",
            "hl": [
              {
                "text": "đá mòn",
                "at": "l2:stone"
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
          "say": "Today: the past simple, the foundation of every story.",
          "sub": "Hôm nay: thì quá khứ đơn, nền móng của mọi câu chuyện.",
          "keys": [
            "nền móng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And as the saying goes: water that keeps flowing wears down the stone. A little every day.",
          "sub": "Ông bà dặn: “Nước chảy đá mòn.” Mỗi ngày một chút.",
          "keys": [
            "Nước chảy đá mòn"
          ]
        }
      ],
      "ref": "intro,p22"
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
            "text": "Quá khứ đơn nói gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:simple",
            "hl": [
              {
                "text": "Quá khứ đơn",
                "at": "l1:simple"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "① việc đã xong",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:finished",
            "hl": [
              {
                "text": "đã xong",
                "at": "l2:finished"
              }
            ]
          },
          {
            "id": "b-1e",
            "t": "text",
            "text": "They got home very late last night.",
            "x": 2068,
            "y": 245,
            "size": 40,
            "at": "l2:got",
            "color": "accent",
            "hl": [
              {
                "text": "got",
                "at": "l2:got"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "② việc lặp lại",
            "x": 2028,
            "y": 325,
            "size": 50,
            "at": "l3:repeated"
          },
          {
            "id": "b-2e",
            "t": "text",
            "text": "I walked a mile to school…",
            "x": 2068,
            "y": 400,
            "size": 40,
            "at": "l3:walked",
            "color": "accent",
            "hl": [
              {
                "text": "walked",
                "at": "l3:walked"
              }
            ]
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "③ trạng thái rồi thôi",
            "x": 2028,
            "y": 480,
            "size": 50,
            "at": "l4:state"
          },
          {
            "id": "b-3e",
            "t": "text",
            "text": "I lived abroad for ten years.",
            "x": 2068,
            "y": 555,
            "size": 40,
            "at": "l4:lived",
            "color": "accent",
            "hl": [
              {
                "text": "lived",
                "at": "l4:lived"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Ví dụ: British Council LearnEnglish",
            "x": 2028,
            "y": 650,
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
          "say": "So what does the past simple talk about? British Council gives three jobs.",
          "sub": "Vậy thì quá khứ đơn dùng để nói gì? British Council kể ba việc.",
          "keys": [
            "ba việc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One, a finished action: they got home very late last night.",
          "sub": "Một, việc đã xong: They got home very late last night.",
          "keys": [
            "việc đã xong"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two, a repeated action: when I was a boy, I walked a mile to school every day.",
          "sub": "Hai, việc lặp lại: When I was a boy, I walked a mile to school every day."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three, a state that lasted, then stopped: I lived abroad for ten years.",
          "sub": "Ba, trạng thái kéo dài rồi thôi: I lived abroad for ten years.",
          "keys": [
            "kéo dài rồi thôi"
          ]
        }
      ],
      "ref": "p1"
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
            "id": "b-s",
            "t": "text",
            "text": "yesterday · last night · last week",
            "x": 2928,
            "y": 170,
            "size": 42,
            "at": "l1:yesterday",
            "hl": [
              {
                "text": "yesterday",
                "at": "l1:yesterday"
              }
            ]
          },
          {
            "id": "b-s2",
            "t": "text",
            "text": "in 2020 · a long time ago",
            "x": 2928,
            "y": 240,
            "size": 42,
            "at": "l1:ago"
          },
          {
            "id": "b-vn",
            "t": "text",
            "text": "“Hôm qua tôi đi chợ.”",
            "x": 2928,
            "y": 340,
            "size": 48,
            "at": "l3:sentence"
          },
          {
            "id": "b-vn2",
            "t": "text",
            "text": "→ không có “đã”",
            "x": 2968,
            "y": 410,
            "size": 44,
            "at": "l3:marker",
            "color": "coral"
          },
          {
            "id": "b-en",
            "t": "text",
            "text": "Yesterday I went to the market.",
            "x": 2928,
            "y": 500,
            "size": 44,
            "at": "l4:went",
            "color": "accent",
            "hl": [
              {
                "text": "went",
                "at": "l4:went"
              }
            ]
          },
          {
            "id": "b-k",
            "t": "text",
            "text": "Đã xong → đổi động từ",
            "x": 2928,
            "y": 610,
            "size": 54,
            "at": "l5:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "đổi động từ",
                "at": "l5:change"
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
          "say": "Signals: yesterday, last night, last week, in twenty twenty, a long time ago.",
          "sub": "Dấu hiệu: yesterday, last night, last week, in 2020, a long time ago.",
          "keys": [
            "Dấu hiệu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "See one, and the verb almost certainly goes past.",
          "sub": "Thấy những chữ này, gần như chắc chắn động từ phải ở dạng quá khứ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A common trap: Vietnamese often drops its past marker. The sentence is still about yesterday.",
          "sub": "Bẫy thường gặp: tiếng Việt hay bỏ chữ “đã”. “Hôm qua tôi đi chợ” không có “đã”, mà vẫn là chuyện hôm qua.",
          "keys": [
            "hay bỏ chữ “đã”"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "English can't skip it. Yesterday I went to the market.",
          "sub": "Tiếng Anh không bỏ được: Yesterday I went to the market."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: finished means change the verb, with or without đã.",
          "sub": "Rút ra: chuyện đã xong thì đổi động từ, dù câu tiếng Việt có chữ “đã” hay không.",
          "keys": [
            "đổi động từ"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Okay! Last weekend, I went to Vũng Tàu!",
          "sub": "Okay! Last weekend, I went to Vũng Tàu!",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "There's the sentence we cut. Went, not goed. Now, how do the other verbs change?",
          "sub": "Câu bị cắt đây rồi: went, không phải goed. Giờ xem các động từ khác đổi thế nào."
        }
      ],
      "ref": "p2,p3,p4"
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
            "at": "l5",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Tối thứ Hai · Thêm -ed",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one",
            "hl": [
              {
                "text": "-ed",
                "at": "l1:ed"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop",
                "envelope"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:email",
            "caption": "Thứ Hai 20:00 · viết email",
            "icon": "envelope"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "call → called",
            "x": 3996,
            "y": 170,
            "size": 52,
            "at": "l2:called",
            "hl": [
              {
                "text": "called",
                "at": "l2:called"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "want → wanted",
            "x": 3996,
            "y": 245,
            "size": 52,
            "at": "l2:wanted"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "work → worked · watch → watched",
            "x": 3996,
            "y": 320,
            "size": 44,
            "at": "l2:worked"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Tận cùng -e: chỉ thêm -d",
            "x": 3996,
            "y": 430,
            "size": 48,
            "at": "l3:only",
            "color": "coral",
            "hl": [
              {
                "text": "-d",
                "at": "l3:d"
              }
            ]
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "live → lived · love → loved",
            "x": 3996,
            "y": 510,
            "size": 46,
            "at": "l3:lived",
            "hl": [
              {
                "text": "lived",
                "at": "l3:lived"
              }
            ]
          },
          {
            "id": "c-6",
            "t": "text",
            "text": "save → saved",
            "x": 3996,
            "y": 585,
            "size": 46,
            "at": "l3:saved"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, Monday evening. Thảo writes an email to Sam about last week. First, regular verbs: ed.",
          "sub": "Chặng một, tối thứ Hai. Thảo viết email kể chuyện tuần trước cho chị Sam. Trước hết, động từ có quy tắc: thêm -ed.",
          "keys": [
            "thêm -ed"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Most verbs just add ed: called, wanted, worked, watched.",
          "sub": "Phần lớn động từ chỉ cần thêm -ed: called, wanted, worked, watched."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ending in e? Only add d: lived, loved, saved.",
          "sub": "Tận cùng bằng -e? Chỉ thêm -d: lived, loved, saved.",
          "keys": [
            "Chỉ thêm -d"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I called the factory and I saved the file. Easy!",
          "sub": "I called the factory and I saved the file. Dễ mà!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Easy for now. Tomorrow the spelling gets trickier.",
          "sub": "Dễ… cho tới hôm nay. Mai chính tả mới bắt đầu khó."
        }
      ],
      "ref": "p5"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Ba · Chữ y, gấp đôi",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "phụ âm + y → ied",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l2:consonant",
            "hl": [
              {
                "text": "ied",
                "at": "l2:i"
              }
            ]
          },
          {
            "id": "d-1e",
            "t": "text",
            "text": "worry → worried",
            "x": 6004,
            "y": 245,
            "size": 50,
            "at": "l2:worried",
            "color": "accent",
            "hl": [
              {
                "text": "worried",
                "at": "l2:worried"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "nguyên âm + y: giữ y",
            "x": 5964,
            "y": 335,
            "size": 50,
            "at": "l3:vowel"
          },
          {
            "id": "d-2e",
            "t": "text",
            "text": "play → played",
            "x": 6004,
            "y": 410,
            "size": 50,
            "at": "l3:played",
            "color": "accent",
            "hl": [
              {
                "text": "played",
                "at": "l3:played"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "1 âm tiết: phụ–nguyên–phụ",
            "x": 5964,
            "y": 510,
            "size": 46,
            "at": "l4:syllable",
            "color": "coral"
          },
          {
            "id": "d-3e",
            "t": "text",
            "text": "stop → stopped · shop → shopped",
            "x": 6004,
            "y": 585,
            "size": 44,
            "at": "l4:stopped",
            "hl": [
              {
                "text": "stopped",
                "at": "l4:stopped"
              }
            ]
          },
          {
            "id": "d-wo",
            "t": "illus",
            "name": "worried-face",
            "x": 7204,
            "y": 180,
            "size": 200,
            "at": "l2:worried"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, Tuesday. Two spelling rules: the letter y, and the double letter.",
          "sub": "Chặng hai, thứ Ba. Hai quy tắc chính tả: chữ y, và gấp đôi phụ âm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A consonant plus y? Change y to i, then add ed. Worry becomes worried.",
          "sub": "Phụ âm + y? Đổi y thành i rồi thêm -ed. Worry thành worried.",
          "keys": [
            "Đổi y thành i"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A vowel before the y? Keep the y. Play becomes played.",
          "sub": "Đứng trước y là nguyên âm? Giữ nguyên y. Play thành played."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One syllable ending consonant, vowel, consonant? Double the last letter: stopped, shopped.",
          "sub": "Một âm tiết, tận cùng phụ âm + nguyên âm + phụ âm? Gấp đôi phụ âm cuối: stopped, shopped.",
          "keys": [
            "Gấp đôi phụ âm cuối"
          ]
        }
      ],
      "ref": "p6,p7"
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
            "id": "d-4",
            "t": "text",
            "text": "2 âm tiết: nhấn cuối mới gấp",
            "x": 6864,
            "y": 420,
            "size": 42,
            "at": "l1:stress",
            "hl": [
              {
                "text": "nhấn cuối",
                "at": "l1:last"
              }
            ]
          },
          {
            "id": "d-4e",
            "t": "text",
            "text": "prefer → preferred",
            "x": 6904,
            "y": 490,
            "size": 46,
            "at": "l1:preferred",
            "color": "accent"
          },
          {
            "id": "d-4f",
            "t": "text",
            "text": "regret → regretted",
            "x": 6904,
            "y": 555,
            "size": 46,
            "at": "l1:regretted",
            "color": "accent"
          },
          {
            "id": "d-5",
            "t": "text",
            "text": "visit → visited · answer → answered",
            "x": 6864,
            "y": 630,
            "size": 40,
            "at": "l2:visited"
          },
          {
            "id": "d-6",
            "t": "text",
            "text": "Anh–Anh: travel → travelled",
            "x": 6864,
            "y": 700,
            "size": 40,
            "at": "l3:travelled",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Two syllables? Double only when the stress is on the last one: preferred, regretted.",
          "sub": "Hai âm tiết? Chỉ gấp đôi khi trọng âm ở âm cuối: preferred, regretted.",
          "keys": [
            "trọng âm ở âm cuối"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Visit and answer have stress up front, so: visited, answered.",
          "sub": "Visit, answer có trọng âm ở âm đầu, nên: visited, answered."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And a final l doubles in British English: travelled.",
          "sub": "Riêng chữ l ở cuối, tiếng Anh–Anh gấp đôi: travelled."
        }
      ],
      "ref": "p7"
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
            "text": "③ Thứ Tư · Ba chữ cuối",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three",
            "hl": [
              {
                "text": "Ba chữ cuối",
                "at": "l1:three"
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
                "airplane",
                "spiral-calendar"
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
                },
                {
                  "at": "l6",
                  "shot": "close",
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
            "at": "l1:office",
            "caption": "Thứ Tư 12:00 · chuyến Đà Nẵng",
            "icon": "airplane"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "B1 · lên kế hoạch = plan",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l3:plan"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "B2 · p-l-a-n: phụ–nguyên–phụ",
            "x": 7932,
            "y": 250,
            "size": 44,
            "at": "l4:vowel",
            "hl": [
              {
                "text": "phụ–nguyên–phụ",
                "at": "l4:between"
              }
            ]
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "B3 · gấp n → planned",
            "x": 7932,
            "y": 330,
            "size": 46,
            "at": "l5:double",
            "color": "accent",
            "hl": [
              {
                "text": "planned",
                "at": "l5:planned"
              }
            ]
          },
          {
            "id": "e-ok",
            "t": "text",
            "text": "I planned a trip to Đà Nẵng.",
            "x": 7932,
            "y": 430,
            "size": 46,
            "at": "l6:planned",
            "color": "accent",
            "hl": [
              {
                "text": "planned",
                "at": "l6:planned"
              }
            ]
          },
          {
            "id": "e-x",
            "t": "text",
            "text": "planed = một từ khác hẳn",
            "x": 7932,
            "y": 520,
            "size": 44,
            "at": "l7:different",
            "color": "coral"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Nhìn ba chữ cuối trước",
            "x": 7932,
            "y": 620,
            "size": 54,
            "at": "l8:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "ba chữ cuối",
                "at": "l8:last"
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
          "say": "Stop three, Wednesday noon at the office. Thảo is planning a trip to Đà Nẵng for Sam.",
          "sub": "Chặng ba, trưa thứ Tư ở văn phòng. Thảo lên lịch chuyến đi Đà Nẵng cho chị Sam."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I want to write: I planned the trip. One n or two?",
          "sub": "Em muốn viết: tôi đã lên kế hoạch cho chuyến đi. Một chữ n hay hai?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Step one, pick the verb: plan.",
          "sub": "Bước một, chọn động từ: plan."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Step two, look at the last three letters: a vowel, a, between two consonants, l and n.",
          "sub": "Bước hai, nhìn ba chữ cuối: nguyên âm a đứng giữa hai phụ âm l và n."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Step three, double the n, then add ed: planned.",
          "sub": "Bước ba, gấp đôi chữ n rồi mới thêm -ed: planned.",
          "keys": [
            "gấp đôi chữ n"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "I planned a trip to Đà Nẵng. Got it.",
          "sub": "I planned a trip to Đà Nẵng. Got it.",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Write planed, and it's a spelling mistake. That's a completely different word.",
          "sub": "Viết planed là sai chính tả, vì đó là một từ khác hẳn."
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: look at the last three letters before you add ed.",
          "sub": "Rút ra: nhìn ba chữ cuối của động từ trước khi thêm -ed.",
          "keys": [
            "nhìn ba chữ cuối"
          ]
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "s08",
      "module": "BRK-07",
      "data": {
        "question": "Go, buy, eat: thêm -ed được không?",
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
          "say": "Go, buy, eat. Can we just add ed?",
          "sub": "Go, buy, eat: thêm -ed được không?",
          "keys": [
            "thêm -ed được không"
          ]
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
            "text": "④ Thứ Năm · Bất quy tắc",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four",
            "hl": [
              {
                "text": "Bất quy tắc",
                "at": "l1:irregular"
              }
            ]
          },
          {
            "id": "f-bc",
            "t": "text",
            "text": "be → was/were · have → had",
            "x": 60,
            "y": 1260,
            "size": 44,
            "at": "l2:had"
          },
          {
            "id": "f-bc2",
            "t": "text",
            "text": "make → made · eat → ate",
            "x": 60,
            "y": 1330,
            "size": 44,
            "at": "l2:ate"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Bảng động từ bất quy tắc: British Council LearnEnglish",
            "x": 60,
            "y": 1400,
            "size": 28,
            "at": "l2",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "f-g1",
            "t": "box",
            "x": 40,
            "y": 1470,
            "w": 520,
            "h": 230,
            "at": "l4:ought",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "f-g1t",
            "t": "text",
            "text": "-ought",
            "x": 70,
            "y": 1485,
            "size": 54,
            "at": "l4:ought",
            "color": "accent"
          },
          {
            "id": "f-g1a",
            "t": "text",
            "text": "buy → bought",
            "x": 70,
            "y": 1560,
            "size": 42,
            "at": "l4:bought"
          },
          {
            "id": "f-g1b",
            "t": "text",
            "text": "think → thought",
            "x": 70,
            "y": 1625,
            "size": 42,
            "at": "l4:thought"
          },
          {
            "id": "f-g2",
            "t": "box",
            "x": 600,
            "y": 1470,
            "w": 520,
            "h": 230,
            "at": "l5:vowel",
            "stroke": 5
          },
          {
            "id": "f-g2t",
            "t": "text",
            "text": "đổi nguyên âm",
            "x": 630,
            "y": 1485,
            "size": 50,
            "at": "l5:vowel"
          },
          {
            "id": "f-g2a",
            "t": "text",
            "text": "begin → began · write → wrote",
            "x": 630,
            "y": 1560,
            "size": 34,
            "at": "l5:began"
          },
          {
            "id": "f-g2b",
            "t": "text",
            "text": "take → took",
            "x": 630,
            "y": 1625,
            "size": 42,
            "at": "l5:took"
          },
          {
            "id": "f-g3",
            "t": "box",
            "x": 1160,
            "y": 1470,
            "w": 520,
            "h": 230,
            "at": "l6:completely",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "f-g3t",
            "t": "text",
            "text": "đổi hẳn",
            "x": 1190,
            "y": 1485,
            "size": 54,
            "at": "l6:completely",
            "color": "coral"
          },
          {
            "id": "f-g3a",
            "t": "text",
            "text": "go → went",
            "x": 1190,
            "y": 1560,
            "size": 42,
            "at": "l6:went"
          },
          {
            "id": "f-g3b",
            "t": "text",
            "text": "be → was / were",
            "x": 1190,
            "y": 1625,
            "size": 42,
            "at": "l6:was"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Hay dùng nhất → học trước",
            "x": 60,
            "y": 1750,
            "size": 50,
            "at": "l8:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "học trước",
                "at": "l8:first"
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
          "say": "Stop four, Thursday. No. Many of the most common verbs are irregular. They change shape.",
          "sub": "Chặng bốn, thứ Năm. Không được. Nhiều động từ thông dụng nhất lại là bất quy tắc: đổi hẳn hình dạng.",
          "keys": [
            "bất quy tắc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "From British Council's list: was or were, began, bought, ate, went, had, made, took, thought, wrote.",
          "sub": "Trong bảng của British Council: was hoặc were, began, bought, ate, went, had, made, took, thought, wrote."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Learn them in sound groups, not in alphabetical order.",
          "sub": "Học theo nhóm có âm giống nhau, đừng học theo thứ tự chữ cái.",
          "keys": [
            "theo nhóm có âm giống nhau"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The ought group: bought, thought.",
          "sub": "Nhóm đuôi -ought: bought, thought."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The vowel change group: began, wrote, took.",
          "sub": "Nhóm đổi nguyên âm: began, wrote, took."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And the completely different ones: went, was, were.",
          "sub": "Và nhóm đổi hẳn: went, was, were."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "One group per session, then review with your own sentences.",
          "sub": "Mỗi nhóm học riêng một buổi, ôn lại bằng câu của chính mình."
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: the more common the verb, the likelier it's irregular. Learn those first.",
          "sub": "Rút ra: động từ càng hay dùng càng dễ là bất quy tắc, nên học chúng trước.",
          "keys": [
            "học chúng trước"
          ]
        }
      ],
      "ref": "p10,p11,p13"
    },
    {
      "id": "s10",
      "module": "BRK-04",
      "data": {
        "title": "Thảo kể về cuối tuần",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Last weekend I goed to Vũng Tàu and buyed some seafood.",
        "right": "Last weekend I went to Vũng Tàu and bought some seafood.",
        "wrongIllus": "red-question-mark",
        "rightIllus": "crab"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: I goed, I buyed.",
          "sub": "Trước: I goed… I buyed…"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: I went, I bought.",
          "sub": "Sau: I went, I bought. Tự nhiên hơn hẳn.",
          "keys": [
            "Tự nhiên hơn hẳn"
          ]
        }
      ],
      "ref": "p12"
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
            "text": "⑤ Thứ Sáu · Did, didn't",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, Friday morning at the office. Meet Dũng, the company's delivery guy. He talks as fast as he rides.",
          "sub": "Chặng năm, sáng thứ Sáu ở văn phòng. Đây là Dũng, anh giao hàng của công ty, nói nhanh như chạy xe.",
          "keys": [
            "Dũng"
          ]
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Sáu 8:00 · văn phòng",
        "actors": [
          {
            "id": "thao",
            "side": "left"
          },
          {
            "id": "dung",
            "side": "right",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "I didn't went to work",
          "why": "Did đã mang quá khứ, động từ sau didn't về nguyên mẫu.",
          "rule": "didn't + nguyên mẫu"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Dũng, where were you yesterday?",
          "sub": "Dũng ơi, hôm qua em đi đâu?",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I didn't went to work yesterday. I was sick.",
          "sub": "I didn't went to work yesterday. I was sick.",
          "face": "sad",
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
          "say": "Did is already past. So after didn't, the verb goes back to its base form.",
          "sub": "Did đã ở dạng quá khứ rồi, nên sau didn't động từ trở về nguyên mẫu.",
          "keys": [
            "trở về nguyên mẫu"
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
          "who": "dung",
          "say": "I didn't go to work yesterday. I was sick.",
          "sub": "I didn't go to work yesterday. I was sick.",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Same for questions: did you went becomes did you go.",
          "sub": "Câu hỏi cũng vậy: “Did you went?” sửa thành “Did you go?”.",
          "phase": "redo",
          "keys": [
            "Did you go?"
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
            "id": "g-n",
            "t": "text",
            "text": "didn't + nguyên mẫu",
            "x": 2028,
            "y": 1260,
            "size": 56,
            "at": "l1:base",
            "color": "accent",
            "hl": [
              {
                "text": "nguyên mẫu",
                "at": "l1:base"
              }
            ]
          },
          {
            "id": "g-n1",
            "t": "text",
            "text": "They didn't go to Spain this year.",
            "x": 2068,
            "y": 1345,
            "size": 42,
            "at": "l1:Spain",
            "hl": [
              {
                "text": "didn't go",
                "at": "l1:go"
              }
            ]
          },
          {
            "id": "g-n2",
            "t": "text",
            "text": "I didn't see you yesterday.",
            "x": 2068,
            "y": 1410,
            "size": 42,
            "at": "l2:see"
          },
          {
            "id": "g-q",
            "t": "text",
            "text": "did + chủ ngữ + nguyên mẫu",
            "x": 2028,
            "y": 1500,
            "size": 50,
            "at": "l3:subject"
          },
          {
            "id": "g-q1",
            "t": "text",
            "text": "Did she play tennis…?",
            "x": 2068,
            "y": 1575,
            "size": 42,
            "at": "l3:play",
            "hl": [
              {
                "text": "Did",
                "at": "l3:Did"
              },
              {
                "text": "play",
                "at": "l3:play"
              }
            ]
          },
          {
            "id": "g-q2",
            "t": "text",
            "text": "Where did you go for your holidays?",
            "x": 2068,
            "y": 1640,
            "size": 40,
            "at": "l4:holidays"
          },
          {
            "id": "g-w",
            "t": "text",
            "text": "who là chủ ngữ: không did",
            "x": 2928,
            "y": 1260,
            "size": 46,
            "at": "l5:who",
            "color": "coral",
            "hl": [
              {
                "text": "không did",
                "at": "l5:no"
              }
            ]
          },
          {
            "id": "g-w1",
            "t": "text",
            "text": "Who wrote Don Quixote?",
            "x": 2968,
            "y": 1335,
            "size": 46,
            "at": "l6:wrote",
            "hl": [
              {
                "text": "wrote",
                "at": "l6:wrote"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Có did → động từ về nguyên mẫu",
            "x": 2928,
            "y": 1490,
            "size": 44,
            "at": "l7:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "về nguyên mẫu",
                "at": "l7:base"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Ví dụ: British Council LearnEnglish",
            "x": 2928,
            "y": 1570,
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
          "say": "Negatives: didn't plus the base verb. They didn't go to Spain this year.",
          "sub": "Phủ định: didn't cộng động từ nguyên mẫu. They didn't go to Spain this year.",
          "keys": [
            "nguyên mẫu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "I didn't see you yesterday.",
          "sub": "I didn't see you yesterday: hôm qua tôi không thấy bạn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Questions: did, the subject, the base verb. Did she play tennis when she was younger?",
          "sub": "Câu hỏi: did, chủ ngữ, động từ nguyên mẫu. Did she play tennis when she was younger?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Where did you go for your holidays?",
          "sub": "Where did you go for your holidays? Kỳ nghỉ bạn đã đi đâu?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One exception British Council points out: when who is the subject, no did.",
          "sub": "Một ngoại lệ British Council nhắc riêng: khi who là chủ ngữ thì không dùng did.",
          "keys": [
            "không dùng did"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Who wrote Don Quixote?",
          "sub": "Who wrote Don Quixote? Ai viết Don Quixote?"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: with did or didn't, the main verb goes back to its base form.",
          "sub": "Rút ra: có did hoặc didn't thì động từ chính quay về nguyên mẫu.",
          "keys": [
            "quay về nguyên mẫu"
          ]
        }
      ],
      "ref": "p14,p15,p17"
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
            "at": "l7",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Bảy · Was, were",
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
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "hot-beverage",
                "television"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:cafe",
            "caption": "Thứ Bảy 15:00 · quán cà phê",
            "icon": "hot-beverage"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "I · he · she · it → was",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l2:was",
            "hl": [
              {
                "text": "was",
                "at": "l2:was"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "you · we · they → were",
            "x": 3996,
            "y": 1340,
            "size": 48,
            "at": "l2:were",
            "hl": [
              {
                "text": "were",
                "at": "l2:were"
              }
            ]
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "I was tired. · They were at home.",
            "x": 3996,
            "y": 1425,
            "size": 40,
            "at": "l3:tired"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "wasn't · weren't",
            "x": 3996,
            "y": 1510,
            "size": 48,
            "at": "l4:wasn't",
            "color": "coral"
          },
          {
            "id": "h-x",
            "t": "text",
            "text": "Did you were tired?",
            "x": 3996,
            "y": 1610,
            "size": 46,
            "at": "l5:Did",
            "color": "muted"
          },
          {
            "id": "h-xx",
            "t": "strike",
            "over": "h-x",
            "at": "l6:Were"
          },
          {
            "id": "h-ok",
            "t": "text",
            "text": "→ Were you tired?",
            "x": 3996,
            "y": 1690,
            "size": 50,
            "at": "l6:Were",
            "color": "accent",
            "hl": [
              {
                "text": "Were you",
                "at": "l6:Were"
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
          "say": "Stop six, Saturday afternoon at a cafe. Thảo and Dũng talk about a film.",
          "sub": "Chặng sáu, chiều thứ Bảy ở quán cà phê. Thảo và Dũng nói chuyện về một bộ phim."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Be has two past forms. Was with I, he, she, it. Were with you, we, they.",
          "sub": "Be có hai dạng quá khứ: was đi với I, he, she, it; were đi với you, we, they.",
          "keys": [
            "hai dạng quá khứ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "I was tired. They were at home.",
          "sub": "I was tired. They were at home."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Negatives just add not: wasn't, weren't. He wasn't listening.",
          "sub": "Phủ định chỉ thêm not: wasn't, weren't. He wasn't listening."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Did you were tired after work?",
          "sub": "Did you were tired after work?",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Were you tired? No did with be. And was the film good? Yes!",
          "sub": "Were you tired? Với be thì không cần did. Còn Was the film good? Hay lắm!",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Exactly. Did you were mixes two question patterns in one.",
          "sub": "Chuẩn. “Did you were tired?” là trộn hai cách đặt câu hỏi vào một câu.",
          "keys": [
            "trộn hai cách đặt câu hỏi"
          ]
        }
      ],
      "ref": "p18,p19"
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Chủ nhật · Năm động từ",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop seven",
            "hl": [
              {
                "text": "Năm động từ",
                "at": "l1:five"
              }
            ]
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "I bought bread.",
            "x": 5964,
            "y": 1260,
            "size": 50,
            "at": "l2:bought",
            "color": "accent",
            "hl": [
              {
                "text": "bought",
                "at": "l2:bought"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "I took the bus.",
            "x": 5964,
            "y": 1335,
            "size": 50,
            "at": "l2:took",
            "color": "accent",
            "hl": [
              {
                "text": "took",
                "at": "l2:took"
              }
            ]
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Hôm sau: che cột quá khứ",
            "x": 5964,
            "y": 1430,
            "size": 46,
            "at": "l3:cover",
            "hl": [
              {
                "text": "che cột quá khứ",
                "at": "l3:cover"
              }
            ]
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "→ nhìn nguyên mẫu, nói lại câu",
            "x": 5964,
            "y": 1505,
            "size": 42,
            "at": "l3:base"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Nước chảy đá mòn”",
            "x": 5964,
            "y": 1630,
            "size": 54,
            "at": "l5:water",
            "color": "accent",
            "hl": [
              {
                "text": "đá mòn",
                "at": "l5:stone"
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
          "say": "Stop seven, Sunday evening. Every day, pick five verbs from one group.",
          "sub": "Chặng bảy, tối Chủ nhật. Mỗi ngày chọn năm động từ trong một nhóm.",
          "keys": [
            "năm động từ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Write a true sentence about your yesterday for each: I bought bread. I took the bus.",
          "sub": "Mỗi động từ viết một câu thật về hôm qua của mình: I bought bread. I took the bus."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The next day, cover the past column, look at the base form, and say the sentence again.",
          "sub": "Hôm sau che cột quá khứ, nhìn nguyên mẫu rồi tự nói lại câu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It ties each verb to your own story, so it often sticks longer than copying a table.",
          "sub": "Cách này gắn động từ với chuyện của chính mình nên thường nhớ lâu hơn chép bảng.",
          "keys": [
            "nhớ lâu hơn chép bảng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Five verbs a day. Water keeps flowing, and the stone wears down.",
          "sub": "Mỗi ngày năm động từ. “Nước chảy đá mòn.”",
          "keys": [
            "Nước chảy đá mòn"
          ]
        }
      ],
      "ref": "p20"
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
            "at": "l2",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 1200,
            "w": 780,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "thumb",
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "cut"
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
            "at": "l1:Monday",
            "caption": "Thứ Hai tuần sau 9:00 · gọi chị Sam",
            "icon": "laptop"
          },
          {
            "id": "i-w",
            "t": "text",
            "text": "went · bought · didn't go · was",
            "x": 6864,
            "y": 1760,
            "size": 40,
            "at": "l5:verb",
            "color": "accent",
            "hl": [
              {
                "text": "went",
                "at": "l5:verb"
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
          "say": "Next Monday, nine a.m. Same call, same question.",
          "sub": "Thứ Hai tuần sau, chín giờ sáng. Vẫn cuộc gọi ấy, vẫn câu hỏi ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Hi Thảo! How was your weekend?",
          "sub": "Chào Thảo! Cuối tuần của em thế nào?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Last weekend I went to the market and bought some fish. I didn't go out at night.",
          "sub": "Last weekend I went to the market and bought some fish. I didn't go out at night.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I was tired, but it was great. Got it.",
          "sub": "I was tired, but it was great. Got it.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "No cut this time. Every verb in the right form.",
          "sub": "Lần này không phải cắt. Động từ nào cũng đúng dạng.",
          "keys": [
            "đúng dạng"
          ]
        }
      ],
      "ref": "p4,p17"
    },
    {
      "id": "s17",
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
            "fit": "E",
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
            "at": "l4:end",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tóm lại: hai việc",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:week"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 9522,
            "y": 40,
            "at": "l2:Change"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1650,
            "y": 1130,
            "at": "l3:irregular"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3618,
            "y": 1130,
            "at": "l4:did"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So, after a whole week, the past simple comes down to two jobs.",
          "sub": "Tóm lại, sau cả một tuần, quá khứ đơn gồm hai việc.",
          "keys": [
            "hai việc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Change the verb: ed, after checking the last three letters.",
          "sub": "Đổi động từ: thêm -ed, sau khi nhìn ba chữ cuối."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Or the irregular form, learned in sound groups.",
          "sub": "Hoặc dạng bất quy tắc, học theo nhóm âm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And did or didn't with the base verb. For be, was or were.",
          "sub": "Và did, didn't với động từ nguyên mẫu. Riêng be thì dùng was, were."
        }
      ],
      "ref": "p9,p13,p17,outro"
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
          }
        ],
        "items": [
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l2:time",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1242,
            "size": 56,
            "at": "l2:time+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "có mốc đã qua?",
            "x": 7997,
            "y": 1252,
            "size": 42,
            "at": "l2:time+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1340,
            "w": 44,
            "h": 44,
            "at": "l2:spelling",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1322,
            "size": 56,
            "at": "l2:spelling+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "-ed đúng chính tả?",
            "x": 7997,
            "y": 1332,
            "size": 42,
            "at": "l2:spelling+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1420,
            "w": 44,
            "h": 44,
            "at": "l2:irregular",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1402,
            "size": 56,
            "at": "l2:irregular+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "bất quy tắc đúng dạng?",
            "x": 7997,
            "y": 1412,
            "size": 42,
            "at": "l2:irregular+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1500,
            "w": 44,
            "h": 44,
            "at": "l3:base",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1482,
            "size": 56,
            "at": "l3:base+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "sau did: nguyên mẫu?",
            "x": 7997,
            "y": 1492,
            "size": 42,
            "at": "l3:base+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1580,
            "w": 44,
            "h": 44,
            "at": "l3:were",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1562,
            "size": 56,
            "at": "l3:were+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "be: was, were, không did?",
            "x": 7997,
            "y": 1572,
            "size": 42,
            "at": "l3:were+200"
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Bài tiếp: đang làm gì thì…",
            "x": 7932,
            "y": 1690,
            "size": 44,
            "at": "l5:Next",
            "color": "accent"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi học; cách dùng có thể khác theo ngữ cảnh — tra từ điển hoặc hỏi giáo viên. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1790,
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
          "say": "Five checks every time you write a story.",
          "sub": "Năm ô soát mỗi khi viết một đoạn kể chuyện.",
          "keys": [
            "Năm ô soát"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A finished time? Correct ed spelling? The right irregular form?",
          "sub": "Có mốc đã qua chưa? -ed đúng chính tả chưa? Bất quy tắc đúng dạng chưa?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Base verb after did? And was or were, not did, with be?",
          "sub": "Sau did đã về nguyên mẫu chưa? Với be đã dùng was, were thay vì did chưa?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Try now: five sentences about yesterday, one irregular verb each.",
          "sub": "Làm ngay: viết năm câu về hôm qua, mỗi câu một động từ bất quy tắc.",
          "keys": [
            "năm câu về hôm qua"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next up: what were you doing when something happened? The past continuous.",
          "sub": "Bài tiếp theo: đang làm gì thì chuyện gì xảy ra? Thì quá khứ tiếp diễn."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p21,p22,outro"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "A friend asks did you went to the party, what is the correct question?",
        "options": [
          "Do you went to the party, because do is used with past verbs",
          "Did you go to the party, because did is followed by the base verb",
          "Went you to the party, because the past verb moves to the front"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "party-popper",
        "why": "Câu hỏi có did thì động từ chính ở nguyên mẫu. Vì vậy là “Did you go to the party”."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A friend asks did you went to the party, what is the correct question?",
          "sub": "Một người bạn hỏi did you went to the party, câu hỏi đúng là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Did you go to the party, because did is followed by the base verb.",
          "sub": "Did you go to the party? Sau did là động từ nguyên mẫu."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[28]"
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
          "say": "You watched it, you learned it. Now try the forty questions below.",
          "sub": "Bạn đã xem, đã học. Giờ thử bốn mươi câu hỏi bên dưới nhé.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân (#136) + biến thể #144. HOOK-22 (câu thoại bị cắt): Thảo kể với chị Sam “Last weekend I… go-ed…” — cắt; nói trọn cuối s03 (“I went to Vũng Tàu”). Dòng thời gian: một tuần của Thảo (thứ Hai 9:00 gọi chị Sam → ① tối thứ Hai -ed → ② thứ Ba chữ y, gấp đôi → ③ trưa thứ Tư planned (chuyến Đà Nẵng) → ④ thứ Năm bất quy tắc theo nhóm → “Khoan đã!” thứ Sáu 8:00 Dũng “I didn't went” → ⑤ did/didn't, who → ⑥ thứ Bảy was/were ở quán cà phê → ⑦ Chủ nhật năm động từ mỗi ngày → thứ Hai tuần sau 9:00 khép vòng). Nhân vật: Thảo (= chị Lan p8, chị Hương p12), chị Sam, Dũng (= anh Minh p16) — w145/_series/grammar-a2-past-and-future.md. BRK-07 (rehook go/buy), BRK-04 (trước/sau Vũng Tàu). Ca dao: “Nước chảy đá mòn”.",
  "loop": {
    "open": "s00",
    "close": "s16"
  }
};
