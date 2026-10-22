// extensive-listening-for-fun--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "extensive-listening-for-fun--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "beginner-listening-learners",
    "slug": "extensive-listening-for-fun",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Nghe nhiều cho quen tai: nghe gì, bao nhiêu, có cần hiểu hết không?",
    "series": "Nghe được tiếng Anh từ chậm đến nhanh — cho người mới học bị 'đứng hình' khi nghe"
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
              "a-ear"
            ],
            "zoom": 1.6,
            "move": "cut"
          },
          {
            "at": "l2",
            "fit": "A",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "a-ear",
            "t": "illus",
            "name": "headphone",
            "x": 120,
            "y": 120,
            "size": 300,
            "at": "l1:earbuds"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "1 tháng · podcast làm nhạc nền",
            "x": 480,
            "y": 150,
            "size": 54,
            "at": "l2:month",
            "hl": [
              {
                "text": "nhạc nền",
                "at": "l2:background"
              }
            ]
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "Tai: vẫn y nguyên",
            "x": 480,
            "y": 250,
            "size": 60,
            "at": "l3:same",
            "color": "coral",
            "hl": [
              {
                "text": "y nguyên",
                "at": "l3:same"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Dựa trên: Paul Nation (2014); Cambridge English — Tips for listening",
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
          "say": "These earbuds worked harder than anyone in the office last month.",
          "sub": "Đôi tai nghe này tháng trước làm việc chăm hơn ai hết trong văn phòng.",
          "keys": [
            "Đôi tai nghe"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Every working day, English podcasts, playing in the background for a whole month.",
          "sub": "Ngày nào đi làm cũng phát podcast tiếng Anh làm nhạc nền, suốt một tháng.",
          "keys": [
            "nhạc nền"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And the ears inside them? Exactly the same as before.",
          "sub": "Còn đôi tai bên trong? Vẫn y nguyên như cũ.",
          "keys": [
            "y nguyên"
          ]
        }
      ],
      "ref": "intro,p15"
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
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "shrug",
                  "face": "sad"
                }
              ],
              "props": [
                "headphone",
                "laptop"
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
            "at": "l1",
            "caption": "Ngày 1 · thứ Hai 8:30",
            "icon": "headphone"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Mưa dầm thấm lâu”",
            "x": 60,
            "y": 420,
            "size": 56,
            "at": "l4:drizzle",
            "color": "accent",
            "hl": [
              {
                "text": "thấm lâu",
                "at": "l4:soaks"
              }
            ]
          },
          {
            "id": "a-roof",
            "t": "text",
            "text": "… mưa trên mái tôn?",
            "x": 100,
            "y": 520,
            "size": 50,
            "at": "l5:roof",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, Thảo's desk neighbour. Football fan, always in a hurry.",
          "sub": "Đây là Dũng, ngồi bàn bên Thảo. Mê bóng đá, lúc nào cũng vội."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Someone told him: just listen a lot, and your ears will get used to it.",
          "sub": "Có người bảo Dũng: cứ nghe nhiều là quen tai.",
          "keys": [
            "cứ nghe nhiều là quen tai"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "A month of podcasts while I work. And I still catch nothing!",
          "sub": "Nghe podcast cả tháng trong lúc làm việc. Vậy mà vẫn chẳng bắt được gì!",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: a steady drizzle soaks deep.",
          "sub": "Ông bà nói: “Mưa dầm thấm lâu.”",
          "keys": [
            "Mưa dầm thấm lâu"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "But Dũng's drizzle fell on a tin roof. Noisy, and nothing soaked in.",
          "sub": "Nhưng mưa của Dũng rơi trên mái tôn: ồn ào, mà chẳng thấm vào đâu.",
          "keys": [
            "mái tôn"
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
      "ref": "intro,p15"
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
            "text": "Nghe nhiều sao mới thấm?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:actually",
            "hl": [
              {
                "text": "mới thấm",
                "at": "l1:work"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Nghe gì?",
            "x": 2028,
            "y": 170,
            "size": 56,
            "at": "l2:what"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Bao nhiêu?",
            "x": 2348,
            "y": 170,
            "size": 56,
            "at": "l2:how much"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Hiểu hết?",
            "x": 2688,
            "y": 170,
            "size": 56,
            "at": "l2:every word"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: bật cả ngày",
            "x": 2028,
            "y": 280,
            "size": 52,
            "at": "l3:all day",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l4:easy"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: dễ · để tâm · đều",
            "x": 2028,
            "y": 370,
            "size": 58,
            "at": "l4:easy",
            "color": "accent",
            "hl": [
              {
                "text": "dễ · để tâm · đều",
                "at": "l4:regularly"
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
          "say": "So, listening a lot is needed. But when does it actually work?",
          "sub": "Vậy, nghe nhiều đúng là cần. Nhưng khi nào nó mới thật sự có tác dụng?",
          "keys": [
            "có tác dụng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three questions decide it: what to hear, how much, and must you understand every word?",
          "sub": "Ba câu hỏi quyết định: nghe gì, bao nhiêu, và có cần hiểu từng từ không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not a podcast running all day in the background.",
          "sub": "Không phải bật podcast chạy nền cả ngày."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But easy material, attention on the content, and short sessions, regularly.",
          "sub": "Mà là chất liệu dễ, để tâm vào nội dung, nghe những khoảng ngắn đều đặn.",
          "keys": [
            "chất liệu dễ"
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
            "id": "b-n",
            "t": "text",
            "text": "Nation: “đầu vào có nghĩa”",
            "x": 2928,
            "y": 280,
            "size": 48,
            "at": "l1:meaning",
            "hl": [
              {
                "text": "đầu vào có nghĩa",
                "at": "l1:input"
              }
            ]
          },
          {
            "id": "b-n2",
            "t": "text",
            "text": "nghe để hiểu, như nghe kể chuyện",
            "x": 2928,
            "y": 360,
            "size": 40,
            "at": "l1:story"
          },
          {
            "id": "b-n3",
            "t": "text",
            "text": "≈ 1/4 thời gian học",
            "x": 2928,
            "y": 430,
            "size": 50,
            "at": "l2:quarter",
            "color": "accent",
            "hl": [
              {
                "text": "1/4",
                "at": "l2:quarter"
              }
            ]
          },
          {
            "id": "b-n4",
            "t": "text",
            "text": "3/4: dùng để giao tiếp",
            "x": 2928,
            "y": 510,
            "size": 46,
            "at": "l3:three quarters"
          },
          {
            "id": "b-k",
            "t": "text",
            "text": "Nghe kỹ → tai sắc",
            "x": 2028,
            "y": 600,
            "size": 48,
            "at": "l4:sharper"
          },
          {
            "id": "b-k2",
            "t": "text",
            "text": "Nghe nhiều → tai quen",
            "x": 2928,
            "y": 600,
            "size": 48,
            "at": "l4:familiar",
            "hl": [
              {
                "text": "tai quen",
                "at": "l4:familiar"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Paul Nation (2014), Victoria University of Wellington",
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
          "say": "For Paul Nation, listening a lot is meaning-focused input: you listen for the content, like hearing a story.",
          "sub": "Với Paul Nation, nghe nhiều thuộc mạch “đầu vào có nghĩa”: nghe để hiểu nội dung, như nghe kể chuyện.",
          "keys": [
            "đầu vào có nghĩa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "He suggests about a quarter of learning time for input like that.",
          "sub": "Ông gợi ý dành khoảng một phần tư thời gian học cho đầu vào như vậy.",
          "keys": [
            "một phần tư"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three quarters should be using the language: to understand, and be understood.",
          "sub": "Ba phần tư là dùng ngôn ngữ để giao tiếp: để hiểu, và được hiểu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Close listening makes your ear sharper. Listening a lot makes what it catches familiar.",
          "sub": "Nghe kỹ làm tai sắc hơn. Nghe nhiều làm những gì tai đã nhận ra trở nên quen thuộc.",
          "keys": [
            "quen thuộc"
          ]
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s03b",
      "module": "BRK-08",
      "data": {
        "title": "Một tháng của Dũng",
        "points": [
          {
            "label": "Ngày 1",
            "sub": "Vì sao hỏng?",
            "illus": "headphone"
          },
          {
            "label": "Ngày 2",
            "sub": "Bản tin quá khó",
            "illus": "television"
          },
          {
            "label": "Ngày 3",
            "sub": "Bài có chữ",
            "illus": "bus"
          },
          {
            "label": "Tuần 2",
            "sub": "Chủ đề mình thích",
            "illus": "soccer-ball"
          },
          {
            "label": "Tuần 3",
            "sub": "Tăng tốc dần",
            "illus": "fast-forward-button"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One month of Dũng, in a few stops.",
          "sub": "Một tháng của Dũng, qua vài chặng.",
          "keys": [
            "Một tháng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Start with day one.",
          "sub": "Bắt đầu từ ngày đầu tiên."
        }
      ],
      "ref": "intro"
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
            "text": "① Ngày 1 · Hỏng ở đâu?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Podcast trình độ cao",
            "x": 3996,
            "y": 170,
            "size": 52,
            "at": "l2:advanced",
            "color": "coral"
          },
          {
            "id": "c-1b",
            "t": "text",
            "text": "→ hiểu rất ít",
            "x": 4036,
            "y": 245,
            "size": 48,
            "at": "l2:little"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Vừa làm việc khác",
            "x": 3996,
            "y": 330,
            "size": 52,
            "at": "l3:working",
            "color": "coral"
          },
          {
            "id": "c-2b",
            "t": "text",
            "text": "→ không để tâm nội dung",
            "x": 4036,
            "y": 405,
            "size": 48,
            "at": "l3:attention"
          },
          {
            "id": "c-x",
            "t": "text",
            "text": "Thiếu cả hai điều kiện",
            "x": 4896,
            "y": 170,
            "size": 50,
            "at": "l4:both",
            "hl": [
              {
                "text": "cả hai",
                "at": "l4:both"
              }
            ]
          },
          {
            "id": "c-c1",
            "t": "text",
            "text": "1. dễ, hiểu phần lớn",
            "x": 4896,
            "y": 250,
            "size": 46,
            "at": "l4:easy",
            "color": "accent"
          },
          {
            "id": "c-c2",
            "t": "text",
            "text": "2. để tâm vào ý nghĩa",
            "x": 4896,
            "y": 320,
            "size": 46,
            "at": "l4:meaning",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, day one. Why did a whole month change nothing?",
          "sub": "Chặng một, ngày đầu tiên. Vì sao cả tháng mà tai chẳng đổi?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "First, the podcasts were advanced, so Dũng understood very little.",
          "sub": "Một là, podcast trình độ cao, nên Dũng hiểu rất ít."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Second, he was working at the same time, so he paid no attention to the content.",
          "sub": "Hai là, anh vừa nghe vừa làm việc, nên chẳng để tâm vào nội dung."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "He missed both conditions: easy enough to understand most, and attention on meaning.",
          "sub": "Thiếu cả hai điều kiện của nghe nhiều: đủ dễ để hiểu phần lớn, và tập trung vào ý nghĩa.",
          "keys": [
            "cả hai điều kiện"
          ]
        }
      ],
      "ref": "p15"
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
            "id": "c-n",
            "t": "text",
            "text": "Rất sớm: giúp có “cảm nhận”",
            "x": 3996,
            "y": 510,
            "size": 40,
            "at": "l1:feel",
            "color": "muted"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Nhạc nền chỉ để làm quen",
            "x": 3996,
            "y": 600,
            "size": 54,
            "at": "l2:familiar",
            "color": "accent",
            "hl": [
              {
                "text": "làm quen",
                "at": "l2:familiar"
              }
            ]
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "Muốn tiến: nghe thứ mình hiểu",
            "x": 3996,
            "y": 690,
            "size": 46,
            "at": "l3:understand",
            "hl": [
              {
                "text": "thứ mình hiểu",
                "at": "l3:understand"
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
          "say": "Nation does say: at the very start, hearing a language you don't understand gives you a feel for it.",
          "sub": "Nation có nói: ở giai đoạn rất sớm, nghe một ngôn ngữ dù chưa hiểu gì cũng giúp có cảm nhận về nó."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But that's a first hello. Background sound only makes you familiar.",
          "sub": "Nhưng đó chỉ là cái chào làm quen. Âm thanh chạy nền chỉ giúp làm quen.",
          "keys": [
            "chỉ giúp làm quen"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "To move forward, listen to what you understand, and mind the content.",
          "sub": "Muốn tiến, hãy nghe thứ mình hiểu và để tâm vào nội dung.",
          "keys": [
            "nghe thứ mình hiểu"
          ]
        }
      ],
      "ref": "p14,p16"
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
            "text": "② Ngày 2 · Càng khó càng giỏi?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Bản tin thời sự, tốc độ thật",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l2:news",
            "color": "coral",
            "hl": [
              {
                "text": "tốc độ thật",
                "at": "l2:real speed"
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
          "say": "Stop two, day two. Dũng switches plans, at full speed, as usual.",
          "sub": "Chặng hai, ngày thứ hai. Dũng đổi kế hoạch, và như mọi khi, đổi rất nhanh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No more chatty podcasts. Real news, at real speed.",
          "sub": "Thôi podcast tán gẫu. Giờ nghe bản tin thời sự, tốc độ thật."
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s07",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Ngày 2 · 12:00 · bàn làm việc",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Nghe càng khó, giỏi càng nhanh",
          "why": "Quá khó thì chỉ bắt được vài từ, mau nản. Bài hiểu được phần lớn mới nghe được lâu.",
          "rule": "Nghe nhiều cần chất liệu dễ"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "The harder the better! Real news, and I'll be fluent by summer.",
          "sub": "Càng khó càng giỏi! Nghe bản tin thật, hè này là trôi chảy.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I caught... three words. And one was my name.",
          "sub": "Bắt được… ba từ. Một từ là tên mình.",
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
          "say": "Too hard means a few words, then giving up. Easy lessons you mostly follow keep you listening.",
          "sub": "Quá khó thì chỉ bắt vài từ rồi nản. Bài dễ, hiểu phần lớn, mới giữ được mình nghe lâu.",
          "keys": [
            "hiểu phần lớn"
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
          "say": "Graded lessons, then. I follow the story, and I keep going.",
          "sub": "Vậy nghe bài phân cấp. Theo được câu chuyện, và nghe được lâu.",
          "phase": "redo",
          "face": "happy"
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
            "id": "d-c",
            "t": "text",
            "text": "Cambridge: ý chính thường là đủ",
            "x": 5964,
            "y": 270,
            "size": 48,
            "at": "l1:main idea",
            "hl": [
              {
                "text": "ý chính",
                "at": "l1:main idea"
              }
            ]
          },
          {
            "id": "d-c2",
            "t": "text",
            "text": "theo được mạch, không dừng liên tục",
            "x": 5964,
            "y": 350,
            "size": 40,
            "at": "l2:thread"
          },
          {
            "id": "d-nf",
            "t": "text",
            "text": "Luyện trôi chảy (Nation):",
            "x": 5964,
            "y": 440,
            "size": 48,
            "at": "l3:fluency"
          },
          {
            "id": "d-nf2",
            "t": "text",
            "text": "dễ, quen, không từ lạ",
            "x": 6004,
            "y": 515,
            "size": 48,
            "at": "l3:no new",
            "color": "accent",
            "hl": [
              {
                "text": "không từ lạ",
                "at": "l3:no new"
              }
            ]
          },
          {
            "id": "d-nf3",
            "t": "text",
            "text": "→ xử lý nhanh cái đã biết",
            "x": 6004,
            "y": 590,
            "size": 44,
            "at": "l4:faster"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Hiểu phần lớn là đủ",
            "x": 6864,
            "y": 590,
            "size": 56,
            "at": "l5:most",
            "color": "accent",
            "hl": [
              {
                "text": "phần lớn",
                "at": "l5:most"
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
          "say": "Cambridge English agrees: don't worry if you miss parts. The main idea is usually enough.",
          "sub": "Cambridge English cũng nói: đừng lo nếu không hiểu hết, nắm ý chính thường là đủ.",
          "keys": [
            "ý chính"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Good material lets you follow the main thread without stopping all the time.",
          "sub": "Chất liệu hợp là thứ bạn theo được mạch chính mà không phải dừng liên tục."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "For fluency, Nation is even stricter: easy, familiar, no new words or grammar.",
          "sub": "Khi luyện trôi chảy, Nation còn chặt hơn: dễ, quen, không có từ hay ngữ pháp lạ.",
          "keys": [
            "không có từ hay ngữ pháp lạ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "You're not learning anything new there. You're getting faster with what you know.",
          "sub": "Lúc ấy bạn không học cái mới, mà tập xử lý nhanh những gì đã biết."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: easy material, and understanding most of it is enough.",
          "sub": "Rút ra: nghe nhiều cần chất liệu dễ; hiểu phần lớn là đủ.",
          "keys": [
            "hiểu phần lớn là đủ"
          ]
        }
      ],
      "ref": "p3,p4,p6"
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
            "at": "l3",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Ngày 3 · Bài có chữ",
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
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "bus",
                "headphone"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "caption": "Ngày 3 · 7:45 · trên xe buýt",
            "icon": "bus"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "LearnEnglish: A1 · A2 · B1",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l3:LearnEnglish",
            "hl": [
              {
                "text": "A1 · A2 · B1",
                "at": "l3:B1"
              }
            ]
          },
          {
            "id": "e-1b",
            "t": "text",
            "text": "bài ngắn, có transcript",
            "x": 7972,
            "y": 245,
            "size": 46,
            "at": "l3:transcript"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Sách phân cấp + bản ghi âm",
            "x": 7932,
            "y": 330,
            "size": 46,
            "at": "l4:graded readers"
          },
          {
            "id": "e-2b",
            "t": "text",
            "text": "đọc trước, hoặc vừa đọc vừa nghe",
            "x": 7972,
            "y": 400,
            "size": 38,
            "at": "l4:while"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Sách điện tử: đọc thành tiếng",
            "x": 7932,
            "y": 480,
            "size": 44,
            "at": "l5:read aloud",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, day three, on the bus to work.",
          "sub": "Chặng ba, ngày thứ ba, trên xe buýt đi làm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Short lesson, with the words on screen. Hey, I understand most of it!",
          "sub": "Bài ngắn, có chữ trên màn hình. Ơ, mình hiểu gần hết!",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Graded lessons are a great start. LearnEnglish has A1, A2 and B1 listening, short, each with a transcript.",
          "sub": "Bài nghe phân cấp là chỗ bắt đầu tốt. Mục Listening của LearnEnglish có bài A1, A2, B1, bài nào cũng ngắn và có transcript.",
          "keys": [
            "Bài nghe phân cấp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Nation adds: many graded readers come with audio. Read first and then listen, or read while listening.",
          "sub": "Nation thêm: nhiều sách đọc phân cấp có kèm ghi âm. Đọc trước rồi nghe, hoặc vừa đọc vừa nghe."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Or listen again to a book you've read. On an e-book, the read aloud function works too.",
          "sub": "Hoặc nghe lại cuốn sách đã đọc; sách điện tử thì dùng chức năng đọc thành tiếng."
        }
      ],
      "ref": "p7"
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
            "id": "e-p",
            "t": "text",
            "text": "Người học thích nghe kèm đọc",
            "x": 7932,
            "y": 570,
            "size": 46,
            "at": "l1:preferred",
            "hl": [
              {
                "text": "nghe kèm đọc",
                "at": "l1:reading"
              }
            ]
          },
          {
            "id": "e-p2",
            "t": "text",
            "text": "+ điểm từ vựng thường cao hơn",
            "x": 7972,
            "y": 640,
            "size": 40,
            "at": "l1:vocabulary"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Kèm chữ ≠ lười",
            "x": 8832,
            "y": 690,
            "size": 54,
            "at": "l2:lazy",
            "color": "accent",
            "hl": [
              {
                "text": "≠ lười",
                "at": "l2:lazy"
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
          "say": "In one activity Nation describes, learners preferred listening while reading, and often got higher vocabulary scores.",
          "sub": "Trong một hoạt động Nation mô tả, người học thích nghe kèm đọc hơn nghe riêng, và thường đạt điểm từ vựng cao hơn.",
          "keys": [
            "nghe kèm đọc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So listening with text isn't lazy. At the start, it's how you listen a lot and still understand.",
          "sub": "Vậy nghe kèm chữ không phải lười. Lúc đầu, đó là cách nghe nhiều mà vẫn hiểu.",
          "keys": [
            "không phải lười"
          ]
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Dễ rồi, có chữ rồi. Vậy nghe bao nhiêu là đủ?",
        "illus": "hourglass-done"
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
          "say": "Easy, with text. So how much is enough?",
          "sub": "Dễ rồi, có chữ rồi. Vậy nghe bao nhiêu là đủ?"
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
            "at": "l4",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Hết tuần 1 · Bao lâu?",
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
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "props": [
                "headphone",
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l3:Thảo",
            "caption": "Thứ Hai tuần 2 · giờ nghỉ trưa",
            "icon": "hot-beverage"
          },
          {
            "id": "f-d",
            "t": "text",
            "text": "Dũng: dồn 1 buổi Chủ nhật",
            "x": 60,
            "y": 1260,
            "size": 48,
            "at": "l2:Sunday",
            "color": "coral"
          },
          {
            "id": "f-d2",
            "t": "text",
            "text": "tuần bận → bỏ luôn",
            "x": 100,
            "y": 1335,
            "size": 46,
            "at": "l2:skipped"
          },
          {
            "id": "f-t1",
            "t": "text",
            "text": "Thảo: 15 phút mỗi trưa",
            "x": 60,
            "y": 1420,
            "size": 48,
            "at": "l4:fifteen",
            "color": "accent",
            "hl": [
              {
                "text": "15 phút",
                "at": "l4:fifteen"
              }
            ]
          },
          {
            "id": "f-t2",
            "t": "text",
            "text": "chủ đề mình thích",
            "x": 100,
            "y": 1495,
            "size": 46,
            "at": "l4:topics"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four, end of week one. Dũng has a system, of course.",
          "sub": "Chặng bốn, hết tuần đầu. Dũng có hẳn một “hệ thống”, tất nhiên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One long session on Sunday morning. Except this Sunday was busy, so he skipped it.",
          "sub": "Dồn hết vào một buổi dài sáng Chủ nhật. Có điều Chủ nhật này bận, nên bỏ luôn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Monday lunch. Thảo, from the next desk, sits down with him.",
          "sub": "Trưa thứ Hai. Thảo, cô đồng nghiệp bàn bên, ngồi xuống cùng.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I just do fifteen minutes every lunch break. Easy topics I like.",
          "sub": "Chị chỉ nghe mười lăm phút mỗi giờ nghỉ trưa. Bài dễ, chủ đề chị thích.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Fifteen minutes? That's nothing!",
          "sub": "Mười lăm phút? Có thấm vào đâu!",
          "face": "surprised"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Add it up. Their weekly totals are almost the same. But only one habit survives a busy week.",
          "sub": "Cộng lại xem: tổng thời gian mỗi tuần của hai người gần như nhau. Nhưng chỉ một thói quen sống sót qua tuần bận.",
          "keys": [
            "gần như nhau"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s13",
      "module": "BRK-04",
      "data": {
        "title": "Cùng tổng giờ, khác thói quen",
        "labels": [
          "Dũng",
          "Thảo"
        ],
        "wrong": "Một buổi dài, tuần bận là bỏ",
        "right": "15 phút mỗi trưa, đều đặn",
        "wrongIllus": "spiral-calendar",
        "rightIllus": "alarm-clock"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One long session, easy to skip.",
          "sub": "Một buổi dài, dễ bỏ."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Short and daily, easy to keep.",
          "sub": "Ngắn mà mỗi ngày, dễ giữ.",
          "keys": [
            "dễ giữ"
          ]
        }
      ],
      "ref": "p12,p13"
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
            "id": "f-n",
            "t": "text",
            "text": "Nation, lúc đầu: ≥ ½ – 1 giờ/tuần",
            "x": 60,
            "y": 1590,
            "size": 42,
            "at": "l1:hour",
            "hl": [
              {
                "text": "½ – 1 giờ/tuần",
                "at": "l1:hour"
              }
            ]
          },
          {
            "id": "f-n2",
            "t": "text",
            "text": "nghe + đọc, tăng dần",
            "x": 100,
            "y": 1655,
            "size": 40,
            "at": "l1:reading"
          },
          {
            "id": "f-c",
            "t": "text",
            "text": "15' trưa + 15' trước bữa sáng",
            "x": 60,
            "y": 1720,
            "size": 40,
            "at": "l2:breakfast",
            "color": "muted"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Ngắn, đều > dài, thất thường",
            "x": 900,
            "y": 1780,
            "size": 44,
            "at": "l3:regular",
            "color": "accent",
            "hl": [
              {
                "text": "Ngắn, đều",
                "at": "l3:regular"
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
          "say": "Nation suggests that at the start, aim for at least half an hour to an hour a week of listening and reading.",
          "sub": "Nation gợi ý giai đoạn đầu: ít nhất khoảng nửa giờ đến một giờ mỗi tuần cho nghe và đọc, rồi tăng dần.",
          "keys": [
            "nửa giờ đến một giờ mỗi tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Cambridge English says choose a daily amount that suits you, like fifteen minutes at lunch and fifteen before breakfast.",
          "sub": "Cambridge English khuyên chọn lượng vừa sức mỗi ngày, chẳng hạn 15 phút buổi trưa và 15 phút trước bữa sáng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: short regular sessions beat one long one that only happens sometimes.",
          "sub": "Rút ra: những khoảng ngắn đều đặn dễ giữ hơn một buổi dài thỉnh thoảng mới có.",
          "keys": [
            "ngắn đều đặn"
          ]
        }
      ],
      "ref": "p11,p13"
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
            "text": "⑤ Tuần 2 · Nghe thứ mình thích",
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
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "soccer-ball",
                "television"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
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
            "at": "l1:football",
            "caption": "Tuần 2 · tối thứ Tư · ở nhà",
            "icon": "soccer-ball"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Chủ đề mình thích",
            "x": 2028,
            "y": 1260,
            "size": 52,
            "at": "l3:topics",
            "hl": [
              {
                "text": "mình thích",
                "at": "l3:enjoy"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "podcast · đài trực tuyến · TV",
            "x": 2028,
            "y": 1345,
            "size": 44,
            "at": "l3:podcasts"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Phim: phụ đề + tiếng gốc",
            "x": 2028,
            "y": 1430,
            "size": 48,
            "at": "l4:subtitles",
            "color": "accent",
            "hl": [
              {
                "text": "tiếng gốc",
                "at": "l4:original"
              }
            ]
          },
          {
            "id": "g-3b",
            "t": "text",
            "text": "không xem bản lồng tiếng",
            "x": 2068,
            "y": 1505,
            "size": 42,
            "at": "l4:dubbed",
            "color": "muted"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Nation: phim ngắn, xem lại nhiều lần",
            "x": 2028,
            "y": 1590,
            "size": 40,
            "at": "l5:again"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, week two. Dũng finds a football podcast at his level. Suddenly, he's never late for it.",
          "sub": "Chặng năm, tuần hai. Dũng tìm được podcast bóng đá đúng trình độ. Bỗng dưng chẳng bao giờ trễ hẹn.",
          "keys": [
            "podcast bóng đá"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Football in English? I'd listen to that even without a coach!",
          "sub": "Bóng đá bằng tiếng Anh? Không ai ép mình cũng nghe!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Cambridge English says: pick topics you enjoy. Add podcasts, online radio, TV shows.",
          "sub": "Cambridge English khuyên: chọn chủ đề mình thích, nghe thêm podcast, đài trực tuyến, chương trình truyền hình.",
          "keys": [
            "chủ đề mình thích"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Films? Use subtitles, and keep the original soundtrack, not the dubbed one.",
          "sub": "Xem phim thì bật phụ đề, giữ âm thanh gốc thay vì bản lồng tiếng.",
          "keys": [
            "âm thanh gốc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Nation adds: short films with subtitles are perfect for watching again and again.",
          "sub": "Nation thêm: phim ngắn có phụ đề rất hợp để xem đi xem lại."
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
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l3:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Tuần 3 · Tăng tốc dần",
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
                "headphone",
                "memo"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "dung",
                  "move": "push"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "Tuần 3 · thứ Hai đến thứ Năm",
            "icon": "memo"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Đoạn 200 – 300 chữ",
            "x": 3996,
            "y": 1260,
            "size": 52,
            "at": "l2:hundred",
            "hl": [
              {
                "text": "200 – 300 chữ",
                "at": "l2:three hundred"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "học kỹ bản viết trước",
            "x": 4036,
            "y": 1340,
            "size": 46,
            "at": "l2:study"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "nghe kèm chữ: chậm → thường",
            "x": 3996,
            "y": 1420,
            "size": 46,
            "at": "l2:normal",
            "color": "accent"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: Paul Nation (2014) — hoạt động nghe trôi chảy",
            "x": 3996,
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
          "say": "Stop six, week three. Now Dũng wants speed. Real speed.",
          "sub": "Chặng sáu, tuần ba. Giờ Dũng muốn tốc độ. Tốc độ thật."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Nation's fluency drill: take two to three hundred words, study the text first, then listen while reading, slowly, rising to normal speed over a few days.",
          "sub": "Bài luyện trôi chảy của Nation: lấy đoạn 200 đến 300 chữ, học kỹ bản viết, rồi vừa nghe vừa đọc ở tốc độ chậm, tăng dần tới tốc độ thường trong vài ngày.",
          "keys": [
            "tăng dần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Two hundred and fifty words from an A2 lesson I've studied. Four days. Let's go!",
          "sub": "Đoạn 250 chữ trong bài A2 đã học. Bốn ngày. Chiến thôi!",
          "face": "happy"
        }
      ],
      "ref": "p17"
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
            "at": "l1",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l4",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-d0",
            "t": "text",
            "text": "Ngày 1: đọc kỹ, nghe chậm",
            "x": 3996,
            "y": 1520,
            "size": 38,
            "at": "l1:Day one"
          },
          {
            "id": "h-d1",
            "t": "text",
            "text": "Ngày 2: kèm chữ, nhích tốc độ",
            "x": 3996,
            "y": 1590,
            "size": 38,
            "at": "l2:Day two"
          },
          {
            "id": "h-d2",
            "t": "text",
            "text": "Ngày 3: gần tốc độ thường",
            "x": 3996,
            "y": 1660,
            "size": 38,
            "at": "l2:Day three"
          },
          {
            "id": "h-d3",
            "t": "text",
            "text": "Ngày 4: tốc độ thường, không chữ",
            "x": 3996,
            "y": 1730,
            "size": 38,
            "at": "l3:Day four",
            "color": "accent"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Quen + tăng tốc dần",
            "x": 4836,
            "y": 1780,
            "size": 48,
            "at": "l4:familiar",
            "color": "accent",
            "hl": [
              {
                "text": "tăng tốc dần",
                "at": "l4:rising"
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
          "say": "Day one: I read it carefully, look up every new word, and listen slowly with the text.",
          "sub": "Ngày 1: đọc kỹ bản viết, tra hết từ lạ, nghe kèm chữ ở tốc độ chậm.",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Day two: with text, a little faster. Day three: close to normal speed.",
          "sub": "Ngày 2: kèm chữ, tốc độ nhích lên. Ngày 3: gần tốc độ thường.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Day four: normal speed, eyes off the text. And no translating in my head!",
          "sub": "Ngày 4: tốc độ thường, thử không nhìn chữ. Không còn dịch trong đầu!",
          "face": "happy",
          "keys": [
            "Không còn dịch trong đầu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: familiar material at rising speed helps the ear catch real speed without overload.",
          "sub": "Rút ra: chất liệu quen nghe ở tốc độ tăng dần giúp tai bắt kịp tốc độ thật mà không quá tải.",
          "keys": [
            "tốc độ tăng dần"
          ]
        }
      ],
      "ref": "p18,p19"
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
            "at": "l4",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Ngày 30 · thứ Hai 8:30",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Day thirty"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "headphone",
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
            "at": "l1:desk",
            "caption": "Ngày 30 · cùng bàn ấy",
            "icon": "headphone"
          },
          {
            "id": "i-ear",
            "t": "illus",
            "name": "headphone",
            "x": 5964,
            "y": 1260,
            "size": 150,
            "at": "l1:earbuds"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "bài dễ · để tâm · mỗi trưa",
            "x": 6144,
            "y": 1300,
            "size": 46,
            "at": "l1:earbuds+600",
            "color": "accent"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "kể lại được ý chính",
            "x": 5964,
            "y": 1450,
            "size": 52,
            "at": "l2:story",
            "hl": [
              {
                "text": "ý chính",
                "at": "l2:story"
              }
            ]
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Mưa dầm thấm lâu”",
            "x": 5964,
            "y": 1570,
            "size": 56,
            "at": "l4:drizzle",
            "color": "accent"
          },
          {
            "id": "i-ca2",
            "t": "text",
            "text": "… mưa vào ruộng",
            "x": 6004,
            "y": 1665,
            "size": 52,
            "at": "l4:field",
            "hl": [
              {
                "text": "vào ruộng",
                "at": "l4:field"
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
          "say": "Day thirty, Monday, eight thirty. Same desk, same earbuds.",
          "sub": "Ngày 30, thứ Hai, tám rưỡi sáng. Vẫn bàn ấy, vẫn đôi tai nghe ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Listen to this: a striker who missed a penalty, then scored twice. I got the whole story!",
          "sub": "Nghe nè: chuyện một tiền đạo đá hỏng phạt đền rồi ghi hai bàn. Em hiểu trọn câu chuyện!",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "And no more news at real speed?",
          "sub": "Thế không nghe bản tin tốc độ thật nữa à?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A steady drizzle soaks deep. This time it fell on the field, not the tin roof.",
          "sub": "“Mưa dầm thấm lâu.” Lần này mưa rơi vào ruộng, không phải mái tôn.",
          "keys": [
            "mưa rơi vào ruộng"
          ]
        }
      ],
      "ref": "p16"
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
            "fit": "C",
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
            "text": "Tóm lại: dễ · để tâm · đều",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:works"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Làm ngay: 1 chủ đề thích",
            "x": 7932,
            "y": 1290,
            "size": 50,
            "at": "l5:topic",
            "hl": [
              {
                "text": "1 chủ đề thích",
                "at": "l5:topic"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "bài phân cấp có chữ · 15'/ngày",
            "x": 7972,
            "y": 1370,
            "size": 42,
            "at": "l5:fifteen"
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Bài tiếp: khi nào lên A1 → B1?",
            "x": 7932,
            "y": 1470,
            "size": 48,
            "at": "l6:Next",
            "color": "accent"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 6664,
            "y": 590,
            "at": "l2:easy"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 760,
            "y": 1420,
            "at": "l3:short"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 600,
            "at": "l4:background"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi học; nội dung trang nguồn có thể thay đổi — điều chỉnh theo trình độ và thời gian của mình. Nhân vật là minh hoạ.",
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
          "say": "So, listening a lot works when three things line up.",
          "sub": "Tóm lại, nghe nhiều có tác dụng khi hội đủ ba điều.",
          "keys": [
            "ba điều"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Material easy enough to understand most of it.",
          "sub": "Chất liệu đủ dễ để hiểu phần lớn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Short sessions, every day.",
          "sub": "Những khoảng ngắn, mỗi ngày."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And your attention on the content. Background noise is only a hello.",
          "sub": "Và để tâm vào nội dung. Âm thanh chạy nền chỉ là lời chào."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: pick a topic you like, find a graded lesson with text, and book fifteen minutes a day this week.",
          "sub": "Làm ngay: chọn một chủ đề bạn thích, tìm bài nghe phân cấp có chữ, đặt lịch 15 phút mỗi ngày trong tuần này.",
          "keys": [
            "15 phút mỗi ngày"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next up: when to move from A1 to B1 listening.",
          "sub": "Bài tiếp theo: khi nào chuyển từ bài nghe A1 lên B1.",
          "keys": [
            "A1 lên B1"
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
        "q": "Why can background listening not replace listening for meaning?",
        "options": [
          "Background audio is always recorded in a very poor sound quality",
          "Background audio always uses a different language from the graded lessons",
          "Meaning focused input needs you to pay attention to the content"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "headphone",
        "why": "Mạch đầu vào có nghĩa đòi hỏi chú ý vào nội dung. Âm thanh chạy nền không đáp ứng điều đó."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Why can background listening not replace listening for meaning?",
          "sub": "Vì sao nghe nền không thay được nghe có hiểu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Meaning focused input needs you to pay attention to the content.",
          "sub": "Đầu vào có nghĩa đòi hỏi bạn chú ý vào nội dung."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Remember the tin roof? Noise is not attention.",
          "sub": "Nhớ mái tôn chứ? Ồn ào không phải là để tâm."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[26]"
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
          "say": "Fifteen easy minutes today. Then try the forty questions below.",
          "sub": "Hôm nay mười lăm phút nghe dễ. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144. Hook HOOK-23 (đồ vật kể chuyện): mở cận đôi tai nghe của Dũng (một tháng podcast làm nhạc nền, tai y nguyên), kéo ra thấy Dũng; đôi tai nghe trở lại ở cảnh khép vòng. Dòng thời gian: MỘT THÁNG của Dũng (Ngày 1 thứ Hai 8:30 → Ngày 2 bản tin tốc độ thật + “Khoan đã!” → Ngày 3 xe buýt, bài phân cấp có chữ → hết tuần 1: dồn Chủ nhật vs Thảo 15 phút mỗi trưa → tuần 2 podcast bóng đá, phim phụ đề → tuần 3 bốn ngày tăng tốc đoạn 250 chữ → Ngày 30 thứ Hai 8:30 khép vòng). Nhân vật: Dũng (gộp Ngân p15, Thu p5, Hải p12, Duy p18), Thảo (Vy p12). Ca dao: “Mưa dầm thấm lâu” (mưa trên mái tôn → mưa vào ruộng). Cảnh ngắt nhịp: BRK-07 (rehook), BRK-04 (Dũng/Thảo). Số: 1/4 & 3/4 thời gian, ½–1 giờ/tuần, 200–300 chữ (Nation); 15 phút (Cambridge). Câu đố questions[26].",
  "loop": {
    "open": "s01",
    "close": "s18"
  }
};
