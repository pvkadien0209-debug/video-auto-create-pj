// en-meeting-sound-and-connection-problems--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "en-meeting-sound-and-connection-problems--w01",
  "hook": "HOOK-22",
  "unit": {
    "audience": "en-online-meeting-staff",
    "slug": "en-meeting-sound-and-connection-problems",
    "door": "ky-nang",
    "level": "B1",
    "title": "Mất tiếng, rớt mạng khi họp tiếng Anh thì nói gì?",
    "series": "Họp online bằng tiếng Anh — cho người đi làm, dám lên tiếng và chốt được việc"
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
            "at": "l3",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 600
          },
          {
            "at": "l4",
            "fit": "A",
            "ms": 600
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
              "set": "online",
              "actors": [
                {
                  "id": "dung",
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
                  "at": "l2",
                  "face": "worried"
                }
              ],
              "props": [
                "laptop"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "sam",
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
            "caption": "Thứ Hai 9:00 · họp video",
            "icon": "laptop"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "“Dung, you need to—”",
            "x": 60,
            "y": 120,
            "size": 64,
            "at": "l3:need",
            "color": "coral"
          },
          {
            "id": "a-q2",
            "t": "text",
            "text": "… cần làm gì?",
            "x": 100,
            "y": 230,
            "size": 60,
            "at": "l4:what",
            "color": "accent",
            "hl": [
              {
                "text": "cần làm gì",
                "at": "l4:what"
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
          "say": "Meet Dũng, a software engineer. He's been presenting his test plan for a while now.",
          "sub": "Đây là Dũng, kỹ sư phần mềm. Anh đang trình bày kế hoạch thử nghiệm được một lúc rồi.",
          "keys": [
            "kế hoạch thử nghiệm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then Sam, the project manager in Singapore who chairs the call, cuts in.",
          "sub": "Rồi chị Sam, quản lý dự án ở Singapore, người chủ trì, lên tiếng.",
          "keys": [
            "chị Sam"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Dung, you need to—",
          "sub": "Dũng, em cần phải—",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Need to what? Hold that thought. We'll hear the end soon.",
          "sub": "Cần làm gì? Giữ câu hỏi đó. Lát nữa nghe nốt.",
          "keys": [
            "Cần làm gì"
          ]
        }
      ],
      "beats": {
        "after": 300
      },
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
            "id": "a-t",
            "t": "text",
            "text": "Mất tiếng, rớt mạng:",
            "x": 60,
            "y": 360,
            "size": 60,
            "at": "l1:sound"
          },
          {
            "id": "a-t2",
            "t": "text",
            "text": "nói câu gì?",
            "x": 100,
            "y": 440,
            "size": 60,
            "at": "l1:say",
            "hl": [
              {
                "text": "câu gì",
                "at": "l1:say"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Tai nghe không bằng",
            "x": 60,
            "y": 560,
            "size": 50,
            "at": "l2:ears",
            "color": "accent"
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "mắt thấy”",
            "x": 100,
            "y": 625,
            "size": 50,
            "at": "l2:eyes",
            "color": "accent",
            "hl": [
              {
                "text": "mắt thấy",
                "at": "l2:eyes"
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
          "say": "Today: what to say when the sound or the connection lets you down.",
          "sub": "Hôm nay: nói câu gì khi âm thanh hay đường truyền phản bội bạn.",
          "keys": [
            "âm thanh hay đường truyền"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents said: what ears hear is worth less than what eyes see.",
          "sub": "Ông bà dạy: “Tai nghe không bằng mắt thấy.”",
          "keys": [
            "Tai nghe không bằng mắt thấy"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Online, half the time, your ears are all you have.",
          "sub": "Họp online thì nhiều lúc chỉ còn mỗi cái tai."
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
            "text": "Vì sao thuộc sẵn câu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:ready",
            "hl": [
              {
                "text": "thuộc sẵn",
                "at": "l1:ready"
              }
            ]
          },
          {
            "id": "b-g",
            "t": "text",
            "text": "TJ Taylor: trục trặc kỹ thuật",
            "x": 2028,
            "y": 165,
            "size": 50,
            "at": "l2:technical",
            "hl": [
              {
                "text": "trục trặc kỹ thuật",
                "at": "l2:technical"
              }
            ]
          },
          {
            "id": "b-g2",
            "t": "text",
            "text": "= một nhóm câu riêng",
            "x": 2068,
            "y": 240,
            "size": 46,
            "at": "l2:own group"
          },
          {
            "id": "b-g3",
            "t": "text",
            "text": "ngang: nhắc lại · làm rõ · chen lời",
            "x": 2068,
            "y": 305,
            "size": 42,
            "at": "l2:repeating",
            "color": "muted"
          },
          {
            "id": "b-n",
            "t": "text",
            "text": "Micro, tiếng ồn = chuyện thường",
            "x": 2028,
            "y": 400,
            "size": 50,
            "at": "l3:normal",
            "color": "accent",
            "hl": [
              {
                "text": "chuyện thường",
                "at": "l3:normal"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: TJ Taylor blog (JM Webster) — Your Complete Survival Guide to Conference Calls in English",
            "x": 2028,
            "y": 725,
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
          "say": "Why have these lines ready?",
          "sub": "Vì sao nên thuộc sẵn mấy câu này?",
          "keys": [
            "thuộc sẵn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A conference call guide on the TJ Taylor blog gives technical problems their own group, next to repeating, clarifying and interrupting.",
          "sub": "Bài hướng dẫn họp qua điện thoại trên blog TJ Taylor xếp trục trặc kỹ thuật thành một nhóm câu riêng, ngang với nhắc lại, làm rõ, chen lời.",
          "keys": [
            "một nhóm câu riêng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So a broken mic is normal on any call. Nothing to be ashamed of.",
          "sub": "Vậy micro hỏng là chuyện thường của mọi cuộc gọi, chẳng có gì xấu hổ.",
          "keys": [
            "chẳng có gì xấu hổ"
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
            "id": "b-sw",
            "t": "text",
            "text": "switch off the mute button",
            "x": 2928,
            "y": 500,
            "size": 50,
            "at": "l1:switch off",
            "color": "coral",
            "hl": [
              {
                "text": "switch off",
                "at": "l1:switch off"
              }
            ]
          },
          {
            "id": "b-sw2",
            "t": "text",
            "text": "= tắt “tắt tiếng” = BẬT micro",
            "x": 2928,
            "y": 570,
            "size": 42,
            "at": "l2:double"
          },
          {
            "id": "b-sw3",
            "t": "text",
            "text": "Không nói → bật lại mute",
            "x": 2928,
            "y": 630,
            "size": 40,
            "at": "l1:not speaking",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The guide's basic reminder: switch off the mute button when you are speaking. Switch it on when you're not speaking.",
          "sub": "Lời nhắc nền trong hướng dẫn: nói thì “switch off the mute button”, không nói thì bật lại.",
          "keys": [
            "switch off the mute button"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Confusing, like a double negative: turning off the turning off.",
          "sub": "Rối như phủ định kép: tắt cái “tắt”.",
          "keys": [
            "phủ định kép"
          ]
        }
      ],
      "ref": "p2"
    },
    {
      "id": "s04",
      "module": "BRK-12",
      "data": {
        "word": "switch off",
        "sub": "Tắt nút tắt tiếng = bật micro",
        "from": [
          960,
          500
        ],
        "others": [
          "mute",
          "button"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Switch off the mute button.",
          "sub": "Tắt nút tắt tiếng."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Mute off means your mic is on.",
          "sub": "Tức là micro đang bật.",
          "keys": [
            "micro đang bật"
          ]
        }
      ],
      "ref": "p2"
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
            "at": "l4",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Hai 9:00 · Micro tắt",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Monday"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain",
                  "face": "surprised"
                },
                {
                  "id": "sam",
                  "side": "right"
                }
              ],
              "props": [
                "muted-speaker",
                "laptop"
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
                  "shot": "E-SHOT-05",
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
            "at": "l1:Monday",
            "caption": "Thứ Hai 9:00 · họp với đối tác Úc",
            "icon": "muted-speaker"
          },
          {
            "id": "c-full",
            "t": "text",
            "text": "“…switch off the mute button",
            "x": 3996,
            "y": 165,
            "size": 44,
            "at": "l2:switch off",
            "color": "coral"
          },
          {
            "id": "c-full2",
            "t": "text",
            "text": "if you want to speak.”",
            "x": 4036,
            "y": 230,
            "size": 44,
            "at": "l2:speak",
            "color": "coral"
          },
          {
            "id": "c-half",
            "t": "text",
            "text": "Thời gian của Dũng: trôi mất ½",
            "x": 3996,
            "y": 320,
            "size": 46,
            "at": "l4:half",
            "hl": [
              {
                "text": "trôi mất ½",
                "at": "l4:half"
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
          "say": "Stop one, Monday, nine a.m. A video call with a partner in Australia. Here's the full line.",
          "sub": "Chặng một, chín giờ sáng thứ Hai, họp video với đối tác ở Úc. Đây là câu nói trọn vẹn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Dung, you need to switch off the mute button if you want to speak.",
          "sub": "Dũng, em cần tắt nút tắt tiếng nếu muốn nói nhé.",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Oh no. Was I on mute the whole time?",
          "sub": "Ôi không. Nãy giờ em tắt micro à?",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Yes. He unmutes, but half his time slot has already gone.",
          "sub": "Đúng thế. Dũng bật micro, nhưng nửa thời gian của anh đã trôi mất.",
          "keys": [
            "nửa thời gian"
          ]
        }
      ],
      "ref": "p5"
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
            "id": "c-1",
            "t": "text",
            "text": "Nói đầu tiên, vừa vào lại:",
            "x": 3996,
            "y": 420,
            "size": 44,
            "at": "l1:first"
          },
          {
            "id": "c-1b",
            "t": "text",
            "text": "“Can you hear me ok?”",
            "x": 4036,
            "y": 485,
            "size": 52,
            "at": "l1:hear me",
            "color": "accent",
            "hl": [
              {
                "text": "hear me ok",
                "at": "l1:hear me"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "“I have a problem with",
            "x": 3996,
            "y": 570,
            "size": 40,
            "at": "l2:problem"
          },
          {
            "id": "c-2b",
            "t": "text",
            "text": "my microphone.”",
            "x": 4036,
            "y": 620,
            "size": 40,
            "at": "l2:microphone"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "“I can't hear very well.”",
            "x": 4836,
            "y": 690,
            "size": 44,
            "at": "l3:can't hear"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before a long point, especially speaking first or just back in: can you hear me ok?",
          "sub": "Trước khi nói dài, nhất là khi nói đầu tiên hoặc vừa vào lại: “Can you hear me ok?”",
          "keys": [
            "Can you hear me ok"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your mic acting up? Keep it short: I'm sorry. I have a problem with my microphone.",
          "sub": "Micro mình trục trặc? Nói ngắn: “I'm sorry. I have a problem with my microphone.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Can't hear others? I can't hear very well.",
          "sub": "Nghe người khác không rõ? “I can't hear very well.”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: one quick can you hear me ok beats a minute of talking into the void.",
          "sub": "Rút ra: một câu “Can you hear me ok?” đáng giá hơn một phút nói vào khoảng không.",
          "keys": [
            "nói vào khoảng không"
          ]
        }
      ],
      "ref": "p3,p4,p6"
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
            "at": "l4",
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
            "text": "② Thứ Ba 14:00 · Tiếng ồn",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Tuesday"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain",
                  "face": "worried"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "face": "thinking"
                }
              ],
              "props": [
                "hammer-and-wrench",
                "laptop"
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
            "at": "l1:Tuesday",
            "caption": "Thứ Ba 14:00 · họp tuần",
            "icon": "hammer-and-wrench"
          },
          {
            "id": "d-m",
            "t": "text",
            "text": "“I think you're on mute.”",
            "x": 5964,
            "y": 165,
            "size": 50,
            "at": "l4:mute",
            "color": "accent",
            "hl": [
              {
                "text": "on mute",
                "at": "l4:mute"
              }
            ]
          },
          {
            "id": "d-n",
            "t": "text",
            "text": "“John, you need to switch off",
            "x": 5964,
            "y": 260,
            "size": 40,
            "at": "l5:John"
          },
          {
            "id": "d-n2",
            "t": "text",
            "text": "the mute button…”",
            "x": 6004,
            "y": 315,
            "size": 40,
            "at": "l5:button"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: ESL Brains — Can you hear me? (A1); TJ Taylor blog",
            "x": 5964,
            "y": 725,
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
          "say": "Stop two, Tuesday, two p.m., the weekly meeting. Dũng's lips move. No sound.",
          "sub": "Chặng hai, hai giờ chiều thứ Ba, họp tuần. Môi Dũng mấp máy. Không có tiếng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Thảo, project specialist, Dũng's teammate. Tired of mime shows.",
          "sub": "Đây là Thảo, chuyên viên dự án, cùng nhóm với Dũng. Đã chán xem kịch câm.",
          "keys": [
            "chán xem kịch câm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Dung, I think you're on mute.",
          "sub": "Dũng ơi, hình như anh đang tắt micro.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The gentlest line, from an ESL Brains A1 lesson. The TJ Taylor guide adds a name: John, you need to switch off the mute button.",
          "sub": "Câu nhẹ nhàng nhất, có trong bài A1 của ESL Brains. Hướng dẫn TJ Taylor thêm tên: “John, you need to switch off the mute button.”",
          "keys": [
            "Câu nhẹ nhàng nhất"
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
      "ref": "p7"
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
            "at": "l2",
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
            "id": "d-dr",
            "t": "illus",
            "name": "hammer-and-wrench",
            "x": 5964,
            "y": 400,
            "size": 80,
            "at": "l1:drilling"
          },
          {
            "id": "d-dr2",
            "t": "text",
            "text": "Máy khoan hàng xóm",
            "x": 6064,
            "y": 415,
            "size": 46,
            "at": "l1:drilling",
            "color": "coral"
          },
          {
            "id": "d-bg",
            "t": "text",
            "text": "“There's a lot of noise",
            "x": 5964,
            "y": 505,
            "size": 42,
            "at": "l3:noise"
          },
          {
            "id": "d-bg2",
            "t": "text",
            "text": "in the background.”",
            "x": 6004,
            "y": 560,
            "size": 42,
            "at": "l3:background",
            "hl": [
              {
                "text": "in the background",
                "at": "l3:background"
              }
            ]
          },
          {
            "id": "d-ck",
            "t": "text",
            "text": "“Could you check your microphone?”",
            "x": 5964,
            "y": 630,
            "size": 38,
            "at": "l3:check"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Dũng unmutes. And next door, the neighbour starts drilling. Classic Hà Nội.",
          "sub": "Dũng bật micro. Đúng lúc ấy nhà hàng xóm khoan tường. Đặc sản Hà Nội.",
          "keys": [
            "khoan tường"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "So, as I was saying, the test… zzzrrrr…",
          "sub": "Như em đang nói, kế hoạch thử… rrrừừừ…",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The guide's line: there's a lot of noise in the background. Could you check your microphone please?",
          "sub": "Câu trong hướng dẫn: “There's a lot of noise in the background. Could you check your microphone please?”",
          "keys": [
            "noise in the background"
          ]
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s09",
      "module": "BRK-04",
      "data": {
        "title": "Tiếng khoan át cả cuộc họp",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "“Your microphone is terrible.”",
        "right": "“There's a lot of noise in the background.”",
        "wrongIllus": "face-with-steam-from-nose",
        "rightIllus": "handshake"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: your microphone is terrible. Aimed at the person.",
          "sub": "Trước: “Your microphone is terrible.” Nhắm vào người."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: name the noise, ask one thing.",
          "sub": "Sau: nói về tiếng ồn, nhờ một việc.",
          "keys": [
            "nói về tiếng ồn"
          ]
        }
      ],
      "ref": "p9"
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
            "id": "d-k",
            "t": "text",
            "text": "Chê tiếng ồn, đừng chê người",
            "x": 6804,
            "y": 690,
            "size": 46,
            "at": "l2:noise",
            "color": "accent",
            "hl": [
              {
                "text": "đừng chê người",
                "at": "l2:person"
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
          "say": "The first line can embarrass him in front of everyone. The second just asks for a fix.",
          "sub": "Câu trước dễ làm anh ấy ngượng trước cả nhóm. Câu sau chỉ nhờ chỉnh micro rồi nói tiếp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: talk about the noise, not about the person.",
          "sub": "Rút ra: nói về tiếng ồn, đừng nói về người.",
          "keys": [
            "đừng nói về người"
          ]
        }
      ],
      "ref": "p9,p10"
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
            "text": "③ Thứ Tư 10:00 · Tiếng rè",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Wednesday"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "worried"
                }
              ],
              "props": [
                "antenna-bars",
                "laptop"
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
            "at": "l1:Wednesday",
            "caption": "Thứ Tư 10:00 · họp với chị Sam",
            "icon": "antenna-bars"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "“You're breaking up.”",
            "x": 7932,
            "y": 165,
            "size": 56,
            "at": "l3:breaking up",
            "color": "accent",
            "hl": [
              {
                "text": "breaking up",
                "at": "l3:breaking up"
              }
            ]
          },
          {
            "id": "e-b2",
            "t": "text",
            "text": "= tiếng bị đứt quãng",
            "x": 7972,
            "y": 255,
            "size": 46,
            "at": "l4:cut"
          },
          {
            "id": "e-ox",
            "t": "text",
            "text": "Oxford: người nói qua di động",
            "x": 7932,
            "y": 335,
            "size": 42,
            "at": "l4:Oxford"
          },
          {
            "id": "e-ox2",
            "t": "text",
            "text": "bị đứt tiếng, khó nghe",
            "x": 7972,
            "y": 395,
            "size": 42,
            "at": "l4:hard to hear",
            "color": "muted"
          },
          {
            "id": "e-r",
            "t": "text",
            "text": "+ “Could you repeat that please?”",
            "x": 7932,
            "y": 470,
            "size": 40,
            "at": "l5:repeat",
            "hl": [
              {
                "text": "repeat",
                "at": "l5:repeat"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Oxford Learner's Dictionaries — break up",
            "x": 7932,
            "y": 725,
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
          "say": "Stop three, Wednesday, ten a.m. Sam's voice sounds like an old cassette radio.",
          "sub": "Chặng ba, mười giờ sáng thứ Tư. Giọng chị Sam nghe như đài cát-sét cũ.",
          "keys": [
            "đài cát-sét cũ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "So the… krr… for the… krr… next week…",
          "sub": "Vậy thì… rè… cho… rè… tuần sau…",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Sorry, Sam, you're breaking up.",
          "sub": "Xin lỗi chị Sam, tiếng chị bị đứt quãng.",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Oxford Learner's Dictionaries gives this meaning of break up: a mobile caller's voice gets cut, hard to hear.",
          "sub": "Từ điển Oxford Learner's ghi nghĩa này của break up: người nói qua di động bị đứt tiếng, khó nghe.",
          "keys": [
            "break up"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Add the request: could you repeat that please?",
          "sub": "Ghép thêm lời nhờ: “Could you repeat that please?”"
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
          }
        ],
        "items": [
          {
            "id": "e-me",
            "t": "text",
            "text": "Mạng mình yếu: “I'm sorry.",
            "x": 7932,
            "y": 560,
            "size": 42,
            "at": "l1:weak"
          },
          {
            "id": "e-me2",
            "t": "text",
            "text": "I have a problem with my connection.”",
            "x": 7972,
            "y": 615,
            "size": 36,
            "at": "l1:connection",
            "hl": [
              {
                "text": "connection",
                "at": "l1:connection"
              }
            ]
          },
          {
            "id": "e-me3",
            "t": "text",
            "text": "→ khỏi để mọi người đoán",
            "x": 8772,
            "y": 690,
            "size": 42,
            "at": "l2:guessing",
            "color": "accent",
            "hl": [
              {
                "text": "khỏi để mọi người đoán",
                "at": "l2:guessing"
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
          "say": "If your own line is weak, swap one word in the guide's line: I have a problem with my connection.",
          "sub": "Nếu chính mạng mình yếu, đổi một từ trong câu mẫu: “I'm sorry. I have a problem with my connection.”",
          "keys": [
            "đổi một từ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Say it early, so people know why you sound robotic, instead of guessing.",
          "sub": "Báo trước, để mọi người hiểu vì sao tiếng bạn rè, thay vì ngồi đoán.",
          "keys": [
            "thay vì ngồi đoán"
          ]
        }
      ],
      "ref": "p12"
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
            "at": "l4",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Tư 10:20 · Ngày giao hàng",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:delivery"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "spiral-calendar",
                "laptop"
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
            "at": "l1:delivery",
            "caption": "Thứ Tư 10:20 · chốt ngày giao",
            "icon": "spiral-calendar"
          },
          {
            "id": "f-d",
            "t": "text",
            "text": "giao ngày …teenth??",
            "x": 60,
            "y": 1255,
            "size": 54,
            "at": "l2:teenth",
            "color": "coral"
          },
          {
            "id": "f-d2",
            "t": "text",
            "text": "13? hay 30?",
            "x": 100,
            "y": 1345,
            "size": 60,
            "at": "l4:thirteenth",
            "color": "coral",
            "hl": [
              {
                "text": "13? hay 30?",
                "at": "l4:thirtieth"
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
          "say": "Same call, ten minutes later. Sam gets to the delivery date. Of course, the line breaks right there.",
          "sub": "Cùng cuộc gọi, mười phút sau. Chị Sam nói tới ngày giao hàng. Và dĩ nhiên, tiếng rè đúng chỗ ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "The delivery is on the… krr… teenth.",
          "sub": "Hàng sẽ giao vào ngày… rè… mười mấy.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Mm-hm. Okay!",
          "sub": "Ừm. Vâng ạ!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Thảo nods and writes down a guess. Thirteenth? Thirtieth? Who knows.",
          "sub": "Thảo gật đầu, ghi đại ngày đoán được. Mười ba? Ba mươi? Có trời biết."
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s14",
      "module": "DLG-01",
      "data": {
        "set": "online",
        "label": "Thứ Tư 10:20 · ngày giao hàng",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Gật đầu, ghi đại ngày",
          "why": "Tuần sau hai bên phát hiện hiểu lệch hạn giao, phải gọi thêm một cuộc để sửa.",
          "rule": "Rè đúng chỗ quan trọng: hỏi lại ngay"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "I'll just guess the date. Asking again feels rude.",
          "sub": "Thôi ghi đại. Hỏi lại thấy ngại.",
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
          "say": "Next week, both sides find different dates, and need another call to fix it.",
          "sub": "Tuần sau hai bên phát hiện hiểu lệch hạn giao, lại phải gọi thêm một cuộc để sửa.",
          "keys": [
            "gọi thêm một cuộc"
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
          "who": "thao",
          "say": "Sorry, you're breaking up. Could you repeat that please?",
          "sub": "Xin lỗi, tiếng chị bị đứt quãng. Chị nhắc lại giúp em được không?",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Sam repeats it slower, Thảo writes the right date, and the call moves on in seconds.",
          "sub": "Chị Sam nhắc lại chậm hơn, Thảo ghi đúng ngày, cuộc họp đi tiếp sau vài giây.",
          "phase": "redo",
          "keys": [
            "sau vài giây"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p13"
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
          }
        ],
        "items": [
          {
            "id": "f-a",
            "t": "text",
            "text": "A: đoán → gọi thêm cuộc nữa",
            "x": 60,
            "y": 1470,
            "size": 46,
            "at": "l1:guess",
            "color": "muted"
          },
          {
            "id": "f-ax",
            "t": "strike",
            "over": "f-a",
            "at": "l1:another"
          },
          {
            "id": "f-b",
            "t": "text",
            "text": "B: hỏi lại ngay → vài giây",
            "x": 60,
            "y": 1560,
            "size": 50,
            "at": "l1:seconds",
            "color": "accent"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Rè đúng chỗ quan trọng:",
            "x": 60,
            "y": 1670,
            "size": 50,
            "at": "l2:important"
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "hỏi lại ngay, đừng đoán",
            "x": 100,
            "y": 1740,
            "size": 54,
            "at": "l2:ask",
            "color": "accent",
            "hl": [
              {
                "text": "đừng đoán",
                "at": "l2:guess"
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
          "say": "A guess costs another call. Asking costs a few seconds.",
          "sub": "Đoán thì tốn thêm một cuộc gọi. Hỏi lại chỉ tốn vài giây."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: if the important part breaks up, ask right away. Don't guess.",
          "sub": "Rút ra: tiếng rè đúng chỗ quan trọng thì hỏi lại ngay, đừng đoán.",
          "keys": [
            "hỏi lại ngay, đừng đoán"
          ]
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s16",
      "module": "BRK-07",
      "data": {
        "question": "Rớt mạng hẳn, vào lại thì nói gì?",
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
          "say": "What if you drop out completely, then come back?",
          "sub": "Rớt mạng hẳn, vào lại thì nói gì?",
          "keys": [
            "vào lại"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p15"
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
            "at": "l6",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Năm 14:00 · Vào lại",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Thursday"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "face": "worried",
                  "pose": "explain"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "antenna-bars",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Thursday",
            "caption": "Thứ Năm 14:00 · vừa vào lại",
            "icon": "antenna-bars"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "1. Báo ngắn: “I had a problem",
            "x": 2028,
            "y": 1255,
            "size": 40,
            "at": "l2:problem"
          },
          {
            "id": "g-1b",
            "t": "text",
            "text": "with my connection.”",
            "x": 2068,
            "y": 1310,
            "size": 40,
            "at": "l2:connection"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "2. Hỏi đúng phần lỡ:",
            "x": 2028,
            "y": 1390,
            "size": 42,
            "at": "l3:last part"
          },
          {
            "id": "g-2b",
            "t": "text",
            "text": "“I didn't catch the last part.”",
            "x": 2068,
            "y": 1450,
            "size": 40,
            "at": "l3:catch",
            "hl": [
              {
                "text": "the last part",
                "at": "l3:last part"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "3. Nhắc lại: “So what",
            "x": 2028,
            "y": 1535,
            "size": 42,
            "at": "l4:saying"
          },
          {
            "id": "g-3b",
            "t": "text",
            "text": "you're saying is…”",
            "x": 2068,
            "y": 1590,
            "size": 42,
            "at": "l4:saying is",
            "color": "accent",
            "hl": [
              {
                "text": "you're saying is",
                "at": "l4:saying is"
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
          "say": "Stop five, Thursday, two p.m. Thảo's Wi-Fi drops mid-meeting. A while later, she's back.",
          "sub": "Chặng năm, hai giờ chiều thứ Năm. Wi-Fi của Thảo rớt giữa cuộc họp. Một lúc sau, cô vào lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Sorry, I had a problem with my connection.",
          "sub": "Xin lỗi, đường truyền của em vừa có vấn đề.",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I didn't catch the last part. Could you repeat that please?",
          "sub": "Em chưa nghe được đoạn cuối. Chị nhắc lại giúp em được không?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "So what you're saying is, we need to move the launch.",
          "sub": "Vậy ý chị là mình cần dời ngày ra mắt.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "sam",
          "say": "Exactly. Welcome back!",
          "sub": "Chính xác. Chào mừng em quay lại!",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Three steps: explain briefly, ask about the exact gap, then repeat it back.",
          "sub": "Ba bước: báo ngắn, hỏi đúng chỗ lỡ, rồi nhắc lại để chắc.",
          "keys": [
            "Ba bước"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1500
        }
      ],
      "ref": "p17"
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
          }
        ],
        "items": [
          {
            "id": "g-r1",
            "t": "text",
            "text": "“Please could you say that again?”",
            "x": 2028,
            "y": 1660,
            "size": 38,
            "at": "l1:again"
          },
          {
            "id": "g-r2",
            "t": "text",
            "text": "“I'm sorry Mr McKay…”",
            "x": 2028,
            "y": 1715,
            "size": 38,
            "at": "l1:McKay"
          },
          {
            "id": "g-r3",
            "t": "text",
            "text": "“Sorry, but you've lost me.”",
            "x": 2868,
            "y": 1780,
            "size": 42,
            "at": "l2:lost me",
            "color": "coral",
            "hl": [
              {
                "text": "lost me",
                "at": "l2:lost me"
              }
            ]
          },
          {
            "id": "g-sp",
            "t": "text",
            "text": "specifying the problem",
            "x": 2028,
            "y": 1775,
            "size": 38,
            "at": "l2:specifying",
            "hl": [
              {
                "text": "specifying",
                "at": "l2:specifying"
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
          "say": "The guide has softer ways to ask: please could you say that again? Or with a name: I'm sorry Mr McKay, but I didn't catch that.",
          "sub": "Hướng dẫn có nhiều cách xin nhắc lại: “Please could you say that again?” Hoặc gọi tên: “I'm sorry Mr McKay but I didn't catch that.”",
          "keys": [
            "gọi tên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "British Council calls naming your gap specifying the problem. Missed a lot? Sorry, but you've lost me. What exactly are we talking about?",
          "sub": "British Council gọi việc nói rõ chỗ lỡ là specifying the problem. Lỡ cả đoạn dài? “Sorry, but you've lost me. What exactly are we talking about?”",
          "keys": [
            "specifying the problem"
          ]
        }
      ],
      "ref": "p15,p16,p18"
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
            "at": "l5",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Sáu 8:00 · Chỉ có tiếng",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "face": "thinking"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "telephone",
                "laptop"
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
            "at": "l1:Friday",
            "caption": "Thứ Sáu 8:00 · ai cũng tắt camera",
            "icon": "telephone"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "“Sorry. Who's speaking please?”",
            "x": 3996,
            "y": 1255,
            "size": 42,
            "at": "l2:Who's speaking",
            "hl": [
              {
                "text": "Who's speaking",
                "at": "l2:Who's speaking"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "“Please could you say your name",
            "x": 3996,
            "y": 1340,
            "size": 38,
            "at": "l3:name"
          },
          {
            "id": "h-2b",
            "t": "text",
            "text": "before speaking?”",
            "x": 4036,
            "y": 1395,
            "size": 38,
            "at": "l3:before speaking"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Chen vào: “It's Thảo here.”",
            "x": 3996,
            "y": 1485,
            "size": 46,
            "at": "l4:here",
            "color": "accent",
            "hl": [
              {
                "text": "It's Thảo here",
                "at": "l4:here"
              }
            ]
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "mẫu: “It's Susan here.”",
            "x": 4036,
            "y": 1560,
            "size": 38,
            "at": "l5:Susan",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, Friday, eight a.m. Cameras off, sound only. Voices, but no faces. Like a radio drama.",
          "sub": "Chặng sáu, tám giờ sáng thứ Sáu. Ai cũng tắt camera, chỉ còn tiếng. Như nghe kịch truyền thanh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Sorry. Who's speaking please?",
          "sub": "Xin lỗi, ai đang nói vậy ạ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Or ask the group: please could you say your name before speaking?",
          "sub": "Hoặc đề nghị cả nhóm: “Please could you say your name before speaking?”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I'm sorry to interrupt. It's Thảo here.",
          "sub": "Xin lỗi cắt ngang, em là Thảo đây ạ.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "When you cut in, say your name first. The guide's example: it's Susan here.",
          "sub": "Khi chen vào, xưng tên trước. Câu mẫu trong hướng dẫn: “It's Susan here.”",
          "keys": [
            "xưng tên trước"
          ]
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
            "fit": "H",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "I",
            "ms": 900
          },
          {
            "at": "l1:end",
            "fit": [
              "i-v"
            ],
            "zoom": 1.25,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Tối thứ Sáu · Giấy nhớ",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:sticky"
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
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "memo",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "medium",
                  "on": "dung",
                  "move": "push"
                }
              ]
            },
            "at": "l1:sticky",
            "caption": "Tối thứ Sáu · ở nhà Dũng",
            "icon": "memo"
          },
          {
            "id": "i-n",
            "t": "box",
            "x": 5934,
            "y": 1240,
            "w": 820,
            "h": 600,
            "at": "l2",
            "fill": "#fff3a6",
            "stroke": 4
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1290,
            "w": 44,
            "h": 44,
            "at": "l2:hear me",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1272,
            "size": 56,
            "at": "l2:hear me+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Can you hear me ok?",
            "x": 6029,
            "y": 1282,
            "size": 36,
            "at": "l2:hear me+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1375,
            "w": 44,
            "h": 44,
            "at": "l2:mute",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1357,
            "size": 56,
            "at": "l2:mute+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "I think you're on mute.",
            "x": 6029,
            "y": 1367,
            "size": 36,
            "at": "l2:mute+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1460,
            "w": 44,
            "h": 44,
            "at": "l3:breaking",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1442,
            "size": 56,
            "at": "l3:breaking+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "You're breaking up.",
            "x": 6029,
            "y": 1452,
            "size": 36,
            "at": "l3:breaking+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1545,
            "w": 44,
            "h": 44,
            "at": "l3:repeat",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1527,
            "size": 56,
            "at": "l3:repeat+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Could you repeat that please?",
            "x": 6029,
            "y": 1537,
            "size": 36,
            "at": "l3:repeat+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1630,
            "w": 44,
            "h": 44,
            "at": "l4:connection",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1612,
            "size": 56,
            "at": "l4:connection+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "I have a problem with my connection.",
            "x": 6029,
            "y": 1622,
            "size": 36,
            "at": "l4:connection+200"
          },
          {
            "id": "i-c5",
            "t": "box",
            "x": 5964,
            "y": 1715,
            "w": 44,
            "h": 44,
            "at": "l4:name",
            "stroke": 5
          },
          {
            "id": "i-k5",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1697,
            "size": 56,
            "at": "l4:name+600",
            "color": "accent"
          },
          {
            "id": "i-l5",
            "t": "text",
            "text": "Nói tên trước (chỉ có tiếng)",
            "x": 6029,
            "y": 1707,
            "size": 36,
            "at": "l4:name+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Friday night. Dũng writes a sticky note for Monday's call.",
          "sub": "Tối thứ Sáu. Dũng viết một tờ giấy nhớ cho cuộc họp thứ Hai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Can you hear me ok, for when I speak first. I think you're on mute, for others.",
          "sub": "“Can you hear me ok?” khi mình nói đầu tiên. “I think you're on mute.” để nhắc người khác.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "You're breaking up. Could you repeat that please?",
          "sub": "“You're breaking up. Could you repeat that please?”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Plus: I have a problem with my connection. And say your name first in sound-only calls.",
          "sub": "Thêm: “I have a problem with my connection.” Và họp chỉ có tiếng thì xưng tên trước.",
          "keys": [
            "xưng tên trước"
          ]
        }
      ],
      "ref": "p20"
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
            "at": "l4",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Thứ Hai sau · 9:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:same"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "wave",
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "memo"
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
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:same",
            "caption": "Thứ Hai sau 9:00 · cùng cuộc họp",
            "icon": "laptop"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "“Can you hear me ok?” ✓",
            "x": 7932,
            "y": 1270,
            "size": 48,
            "at": "l2:hear me",
            "color": "accent"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Không thấy mặt? Hỏi cho",
            "x": 7932,
            "y": 1390,
            "size": 50,
            "at": "l4:ears"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "tai chắc",
            "x": 7972,
            "y": 1460,
            "size": 60,
            "at": "l4:sure",
            "color": "accent",
            "hl": [
              {
                "text": "tai chắc",
                "at": "l4:sure"
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
          "say": "Next Monday, nine a.m. Same call, same Dũng, same Sam.",
          "sub": "Thứ Hai tuần sau, chín giờ sáng. Vẫn cuộc họp ấy, vẫn Dũng, vẫn chị Sam."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Morning, everyone! Can you hear me ok?",
          "sub": "Chào cả nhà! Mọi người nghe em rõ không ạ?",
          "face": "happy",
          "pose": "wave"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Loud and clear, Dung. No mute button needed today!",
          "sub": "Rõ lắm Dung. Hôm nay khỏi cần nhắc nút tắt tiếng!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Ears can't beat eyes? Online, when you can't see, ask until your ears are sure.",
          "sub": "“Tai nghe không bằng mắt thấy”? Họp online không thấy mặt thì hỏi cho tai chắc.",
          "keys": [
            "hỏi cho tai chắc"
          ]
        }
      ],
      "ref": "p3"
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
            "at": "l2",
            "fit": "C",
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
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "j-s",
            "t": "text",
            "text": "Sự cố tốn vài giây,",
            "x": 7932,
            "y": 1560,
            "size": 52,
            "at": "l1:glitch"
          },
          {
            "id": "j-s2",
            "t": "text",
            "text": "không tốn lượt nói",
            "x": 7972,
            "y": 1635,
            "size": 52,
            "at": "l1:seconds",
            "hl": [
              {
                "text": "không tốn lượt nói",
                "at": "l1:turn"
              }
            ]
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4696,
            "y": 480,
            "at": "l2+500"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 760,
            "y": 1730,
            "at": "l3+500"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2728,
            "y": 1250,
            "at": "l4+500"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Câu mẫu theo các nguồn đã ghi trên bảng. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1815,
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
          "say": "So: a glitch should cost you a few seconds, not your turn.",
          "sub": "Tóm lại: sự cố chỉ nên tốn vài giây, không tốn lượt nói của bạn.",
          "keys": [
            "không tốn lượt nói"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Check the sound before you speak.",
          "sub": "Hỏi nghe rõ chưa trước khi nói."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Breaking up on something important? Ask right away.",
          "sub": "Rè đúng chỗ quan trọng? Hỏi lại ngay."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Back from a drop? Explain briefly, ask about the gap, repeat it back.",
          "sub": "Rớt mạng vào lại? Báo ngắn, hỏi đúng chỗ lỡ, nhắc lại cho chắc."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: read the five lines aloud twice before your next meeting. Next up: how to interrupt politely.",
          "sub": "Làm ngay: đọc to năm câu hai lần trước cuộc họp tới. Bài sau: chen lời sao cho lịch sự.",
          "keys": [
            "đọc to năm câu hai lần"
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
        "q": "The sound breaks up exactly when a partner says a date, what is the better choice?",
        "options": [
          "Say you're breaking up and ask them to repeat it right away",
          "Wait until next week and ask the partner by email instead",
          "Nod and write down the date that you think you probably heard"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "spiral-calendar",
        "why": "Hỏi lại ngay chỉ tốn vài giây và giúp bạn ghi đúng ngày. Đoán ngày dễ dẫn đến hiểu lệch hạn giao."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The sound breaks up exactly when a partner says a date, what is the better choice?",
          "sub": "Tiếng bị rè đúng lúc đối tác nói ngày tháng, nên chọn cách nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Say you're breaking up and ask them to repeat it right away.",
          "sub": "Báo tiếng bị đứt quãng và nhờ nhắc lại ngay."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Thirteenth or thirtieth? Just ask.",
          "sub": "Mười ba hay ba mươi? Cứ hỏi lại."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[21]"
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Năm câu cho sự cố. Còn bốn mươi câu hỏi",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Can you hear me ok? Good. Forty questions are waiting below.",
          "sub": "Nghe rõ chứ? Tốt. Bốn mươi câu hỏi đang chờ bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144. Hook HOOK-22: câu thoại bị cắt (chị Sam: “Dung, you need to—”), nói trọn ở chặng ① (≤ 90 s). Dòng thời gian: MỘT TUẦN HỌP (Thứ Hai 9:00 Dũng nói khi micro tắt → Thứ Ba 14:00 Thảo nhắc on mute, máy khoan hàng xóm → Thứ Tư 10:00 tiếng rè “breaking up” → 10:20 ngày giao hàng “…teenth” + “Khoan đã!” → Thứ Năm 14:00 Thảo rớt mạng, vào lại ba bước → Thứ Sáu 8:00 họp chỉ có tiếng → tối giấy nhớ → Thứ Hai sau 9:00 khép vòng). Nhân vật: Dũng, chị Sam, Thảo. Tục ngữ: “Tai nghe không bằng mắt thấy” → “không thấy mặt thì hỏi cho tai chắc”. Cảnh ngắt nhịp: BRK-12 (switch off), BRK-04 (Trước/Sau tiếng ồn p9), BRK-07 (rehook rớt mạng). Câu đố questions[21].",
  "loop": {
    "open": "s00",
    "close": "s21"
  }
};
