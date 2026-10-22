// en-meeting-how-to-interrupt-politely--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "en-meeting-how-to-interrupt-politely--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "en-online-meeting-staff",
    "slug": "en-meeting-how-to-interrupt-politely",
    "door": "ky-nang",
    "level": "B1",
    "title": "Muốn chen vào phát biểu trong cuộc họp tiếng Anh thì nói thế nào?",
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
          }
        ],
        "items": [
          {
            "id": "a-q",
            "t": "text",
            "text": "Chen lời giữa họp là…",
            "x": 60,
            "y": 90,
            "size": 80,
            "at": "l1:Interrupting"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "A. bất lịch sự, chờ được mời",
            "x": 70,
            "y": 230,
            "size": 54,
            "at": "l2:rude"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "B. một kỹ năng có bài dạy",
            "x": 70,
            "y": 330,
            "size": 54,
            "at": "l2:skill"
          },
          {
            "id": "a-1x",
            "t": "strike",
            "over": "a-1",
            "at": "l3:B"
          },
          {
            "id": "a-2r",
            "t": "ring",
            "around": [
              "a-2"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l3:B+300"
          },
          {
            "id": "a-bc",
            "t": "text",
            "text": "nhóm câu riêng · đóng vai",
            "x": 70,
            "y": 440,
            "size": 46,
            "at": "l4:phrases",
            "hl": [
              {
                "text": "nhóm câu riêng",
                "at": "l4:phrases"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: British Council TeachingEnglish — Meetings 2: Getting involved in meetings",
            "x": 60,
            "y": 725,
            "size": 28,
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
          "say": "Quick guess. Interrupting someone in a meeting is…",
          "sub": "Đoán nhanh. Chen lời người khác trong cuộc họp là…",
          "keys": [
            "Đoán nhanh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A: rude, so wait to be invited. Or B: a skill you can learn?",
          "sub": "A: bất lịch sự, nên chờ được mời. Hay B: một kỹ năng học được?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "B. A British Council lesson teaches it like any other skill.",
          "sub": "Đáp án B. Giáo án của British Council dạy chen lời như một kỹ năng hẳn hoi.",
          "keys": [
            "kỹ năng hẳn hoi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It has its own group of phrases, and a role play where talkers dominate on purpose, so quiet ones must practise.",
          "sub": "Có cả nhóm câu riêng, và bài đóng vai mà người hay nói cố tình lấn lướt để người cầu toàn buộc phải tập chen.",
          "keys": [
            "nhóm câu riêng"
          ]
        }
      ],
      "beats": {
        "after": 300
      },
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
            "at": "l4",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
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
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "face": "thinking",
                  "pose": "think"
                },
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "light-bulb",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
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
            "at": "l1",
            "caption": "Thứ Ba 9:00 · họp ý tưởng",
            "icon": "light-bulb"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Ăn có mời, làm có khiến”",
            "x": 60,
            "y": 560,
            "size": 50,
            "at": "l5:invited",
            "color": "accent",
            "hl": [
              {
                "text": "Ăn có mời",
                "at": "l5:invited"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "Họp thì khác: xin phép mà vào",
            "x": 60,
            "y": 640,
            "size": 44,
            "at": "l6:permission",
            "hl": [
              {
                "text": "xin phép",
                "at": "l6:permission"
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
          "say": "Meet Thảo, a project specialist in Hà Nội. Careful, and a bit of a perfectionist.",
          "sub": "Đây là Thảo, chuyên viên dự án ở Hà Nội. Cẩn thận, hơi cầu toàn.",
          "keys": [
            "hơi cầu toàn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Tuesday, nine a.m., an ideas meeting. Dũng, her engineer teammate, talks like a waterfall.",
          "sub": "Chín giờ sáng thứ Ba, họp góp ý tưởng. Dũng, kỹ sư cùng nhóm, nói như thác đổ.",
          "keys": [
            "nói như thác đổ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And Sam, the project manager in Singapore, chairs.",
          "sub": "Còn chị Sam, quản lý dự án ở Singapore, chủ trì.",
          "keys": [
            "chị Sam"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I have an idea about the budget. But by the time it's ready, they've moved on.",
          "sub": "Em có ý về ngân sách. Nhưng soạn xong câu thì mọi người đã sang chuyện khác.",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents said: eat when invited, work when asked.",
          "sub": "Ông bà dạy: “Ăn có mời, làm có khiến.”",
          "keys": [
            "Ăn có mời, làm có khiến"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Meetings are different. Nobody sends an invitation. You ask permission and step in.",
          "sub": "Họp thì khác: chẳng ai gửi thiệp mời. Bạn xin phép rồi bước vào.",
          "keys": [
            "xin phép rồi bước vào"
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
      "ref": "intro,p1"
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
            "text": "Vì sao chen lời khó?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:hard",
            "hl": [
              {
                "text": "khó",
                "at": "l1:hard"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Bạn chen thường xuyên",
            "x": 2028,
            "y": 165,
            "size": 48,
            "at": "l2:often"
          },
          {
            "id": "b-1b",
            "t": "text",
            "text": "hay chỉ nói khi được hỏi?",
            "x": 2068,
            "y": 230,
            "size": 46,
            "at": "l2:asked",
            "color": "muted"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Chưa kịp đáp, đã sang ý khác?",
            "x": 2028,
            "y": 320,
            "size": 48,
            "at": "l3:move on",
            "color": "coral",
            "hl": [
              {
                "text": "sang ý khác",
                "at": "l3:move on"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: British Council TeachingEnglish — Meetings 2 (Jeremy Day), phiếu bài tập",
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
          "say": "So why is interrupting so hard in English?",
          "sub": "Vậy vì sao chen lời bằng tiếng Anh lại khó thế?",
          "keys": [
            "chen lời"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The worksheet asks: with stronger speakers, do you interrupt often, or only speak when asked?",
          "sub": "Phiếu bài tập hỏi: ngồi với người nói tiếng Anh giỏi hơn, bạn chen thường xuyên hay chỉ nói khi được hỏi?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And does the conversation often move on before you can respond?",
          "sub": "Và cuộc trò chuyện có hay sang ý khác trước khi bạn kịp đáp không?",
          "keys": [
            "sang ý khác"
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
            "id": "b-p",
            "t": "text",
            "text": "Người cầu toàn:",
            "x": 2928,
            "y": 165,
            "size": 50,
            "at": "l1:perfectionists",
            "hl": [
              {
                "text": "cầu toàn",
                "at": "l1:perfectionists"
              }
            ]
          },
          {
            "id": "b-p2",
            "t": "text",
            "text": "học sẵn câu chen → thêm giờ nghĩ",
            "x": 2968,
            "y": 235,
            "size": 40,
            "at": "l1:thinking"
          },
          {
            "id": "b-p3",
            "t": "text",
            "text": "giữ được lượt khi cần",
            "x": 2968,
            "y": 295,
            "size": 40,
            "at": "l1:turn"
          },
          {
            "id": "b-t",
            "t": "text",
            "text": "Người hay nói:",
            "x": 2928,
            "y": 375,
            "size": 50,
            "at": "l2:talkers"
          },
          {
            "id": "b-t2",
            "t": "text",
            "text": "chừa chỗ cho người ngập ngừng",
            "x": 2968,
            "y": 445,
            "size": 40,
            "at": "l2:space",
            "hl": [
              {
                "text": "chừa chỗ",
                "at": "l2:space"
              }
            ]
          },
          {
            "id": "b-k",
            "t": "text",
            "text": "Chen đúng câu = tham gia",
            "x": 2028,
            "y": 520,
            "size": 58,
            "at": "l3:taking part",
            "color": "accent",
            "hl": [
              {
                "text": "= tham gia",
                "at": "l3:taking part"
              }
            ]
          },
          {
            "id": "b-kx",
            "t": "text",
            "text": "không phải vô phép",
            "x": 2068,
            "y": 610,
            "size": 48,
            "at": "l3:rude",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Its advice: perfectionists learn interrupting phrases. They buy thinking time, and help you keep your turn.",
          "sub": "Lời khuyên: người cầu toàn học sẵn câu chen lời. Câu ấy cho thêm thời gian nghĩ, và giúp giữ lượt khi cần.",
          "keys": [
            "học sẵn câu chen lời"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Big talkers should leave space for people who hesitate, or who just got cut off.",
          "sub": "Người hay nói thì chừa chỗ cho ai đang ngập ngừng hoặc vừa bị cắt ngang.",
          "keys": [
            "chừa chỗ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The aim is not to avoid interrupting, but to use the right phrase. That's taking part, not being rude.",
          "sub": "Điều giáo án nhắm tới không phải tránh chen, mà chen bằng câu phù hợp. Đó là tham gia, không phải vô phép.",
          "keys": [
            "tham gia, không phải vô phép"
          ]
        }
      ],
      "ref": "p2,p4"
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
            "text": "① 9:20 · Câu chen lời",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:phrases"
          },
          {
            "id": "c-ar",
            "t": "arrow",
            "from": [
              4016,
              640
            ],
            "to": [
              5536,
              640
            ],
            "at": "l1:light",
            "color": "muted"
          },
          {
            "id": "c-lo",
            "t": "text",
            "text": "nhẹ",
            "x": 3996,
            "y": 670,
            "size": 44,
            "at": "l1:light",
            "color": "muted"
          },
          {
            "id": "c-hi",
            "t": "text",
            "text": "mạnh",
            "x": 5476,
            "y": 670,
            "size": 44,
            "at": "l1:strong",
            "color": "coral"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "“But…”",
            "x": 4016,
            "y": 470,
            "size": 56,
            "at": "l2:But"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "“Can I just say",
            "x": 4276,
            "y": 380,
            "size": 50,
            "at": "l3:say something"
          },
          {
            "id": "c-2b",
            "t": "text",
            "text": "something?”",
            "x": 4316,
            "y": 440,
            "size": 50,
            "at": "l3:something"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "“Sorry to interrupt,",
            "x": 4756,
            "y": 290,
            "size": 50,
            "at": "l4:Sorry",
            "color": "accent",
            "hl": [
              {
                "text": "Sorry to interrupt",
                "at": "l4:interrupt"
              }
            ]
          },
          {
            "id": "c-3b",
            "t": "text",
            "text": "but…”",
            "x": 4796,
            "y": 350,
            "size": 50,
            "at": "l4:but"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "“Can I just stop you",
            "x": 5176,
            "y": 170,
            "size": 48,
            "at": "l5:stop you",
            "color": "coral"
          },
          {
            "id": "c-4b",
            "t": "text",
            "text": "for a second?”",
            "x": 5216,
            "y": 230,
            "size": 48,
            "at": "l5:second",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, nine twenty. The lesson's interrupting phrases go from light to strong.",
          "sub": "Chặng một, chín giờ hai mươi. Câu chen lời trong giáo án đi từ nhẹ đến mạnh.",
          "keys": [
            "từ nhẹ đến mạnh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The lightest: but…",
          "sub": "Nhẹ nhất: “But…”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then: can I just say something?",
          "sub": "Rồi: “Can I just say something?”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then: sorry to interrupt, but…",
          "sub": "Rồi: “Sorry to interrupt, but…”"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The strongest: can I just stop you for a second?",
          "sub": "Mạnh nhất: “Can I just stop you for a second?”",
          "keys": [
            "Mạnh nhất"
          ]
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
          }
        ],
        "items": [
          {
            "id": "c-k",
            "t": "text",
            "text": "Câu cuối: người nói dừng hẳn",
            "x": 3996,
            "y": 170,
            "size": 44,
            "at": "l1:stop dead",
            "hl": [
              {
                "text": "dừng hẳn",
                "at": "l1:stop dead"
              }
            ]
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "→ để dành: số liệu sai",
            "x": 4036,
            "y": 235,
            "size": 42,
            "at": "l1:wrong figure",
            "color": "coral",
            "hl": [
              {
                "text": "số liệu sai",
                "at": "l1:wrong figure"
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
          "say": "That last one makes the speaker stop dead. Save it for real need, like someone building on a wrong figure.",
          "sub": "Câu cuối khiến người nói dừng hẳn. Để dành cho lúc thật cần, ví dụ người kia đang dựa trên một số liệu sai.",
          "keys": [
            "Để dành cho lúc thật cần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It's an emergency brake, not the horn.",
          "sub": "Đó là phanh khẩn cấp, không phải cái còi."
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
            "at": "l4",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 9:25 · Ngân sách quảng cáo",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:advertising"
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
                  "id": "sam",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "stop",
                  "face": "surprised"
                }
              ],
              "props": [
                "megaphone",
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
            "at": "l1:advertising",
            "caption": "9:25 · chị Sam nói về quảng cáo",
            "icon": "megaphone"
          },
          {
            "id": "d-w",
            "t": "text",
            "text": "“Wait, wait! No…”",
            "x": 5964,
            "y": 170,
            "size": 64,
            "at": "l3:Wait",
            "color": "coral"
          },
          {
            "id": "d-w2",
            "t": "text",
            "text": "→ giật mình, tưởng phản đối hết",
            "x": 5964,
            "y": 280,
            "size": 42,
            "at": "l4:startled",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, nine twenty-five. Sam is presenting the advertising plan. Dũng wants to add a point about the budget.",
          "sub": "Chặng hai, chín giờ hai lăm. Chị Sam trình bày kế hoạch quảng cáo. Dũng muốn thêm ý về ngân sách."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "So for the advertising plan, we start with social media…",
          "sub": "Vậy kế hoạch quảng cáo, mình bắt đầu từ mạng xã hội…",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Wait, wait! No…",
          "sub": "Khoan, khoan! Không…",
          "face": "surprised",
          "pose": "stop"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sam is startled. It sounds like Dũng rejects the whole plan. He only wanted the budget.",
          "sub": "Chị Sam giật mình. Nghe như Dũng phản đối cả kế hoạch, trong khi anh chỉ muốn nói chuyện ngân sách.",
          "keys": [
            "phản đối cả kế hoạch"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s07",
      "module": "BRK-04",
      "data": {
        "title": "Muốn nói về ngân sách",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "“Wait, wait! No…”",
        "right": "“Sorry to interrupt, but can I just say something about the budget?”",
        "wrongIllus": "face-screaming-in-fear",
        "rightIllus": "raised-hand"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: wait, wait! No…",
          "sub": "Trước: “Wait, wait! No…”"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: sorry to interrupt, but can I just say something about the budget?",
          "sub": "Sau: xin phép, rồi nói rõ đề tài.",
          "keys": [
            "nói rõ đề tài"
          ]
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
          }
        ],
        "items": [
          {
            "id": "d-s",
            "t": "text",
            "text": "“Sorry to interrupt, but",
            "x": 5964,
            "y": 380,
            "size": 46,
            "at": "l1:permission",
            "color": "accent"
          },
          {
            "id": "d-s2",
            "t": "text",
            "text": "can I just say something",
            "x": 6004,
            "y": 445,
            "size": 46,
            "at": "l1:topic"
          },
          {
            "id": "d-s3",
            "t": "text",
            "text": "about the budget?”",
            "x": 6004,
            "y": 510,
            "size": 46,
            "at": "l1:topic",
            "hl": [
              {
                "text": "about the budget",
                "at": "l1:topic"
              }
            ]
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Xin phép → đề tài → vào ý",
            "x": 5964,
            "y": 620,
            "size": 52,
            "at": "l3:permission",
            "color": "accent",
            "hl": [
              {
                "text": "đề tài",
                "at": "l3:topic"
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
          "say": "The after version asks permission and names the topic, so Sam can hand over easily.",
          "sub": "Câu sau xin phép và nói luôn đề tài, nên chị Sam dễ nhường lời."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And the whole group knows what's coming next.",
          "sub": "Cả nhóm cũng biết sắp nghe chuyện gì."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: ask permission first, then name the topic, then make your point.",
          "sub": "Rút ra: xin phép trước, nói đề tài sau, rồi mới vào ý.",
          "keys": [
            "xin phép trước, nói đề tài sau"
          ]
        }
      ],
      "ref": "p7,p8"
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
            "text": "③ 10:00 · Camera tắt hết",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:cameras"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "telephone",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l2",
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
            "at": "l1:cameras",
            "caption": "10:00 · họp với đối tác Úc",
            "icon": "telephone"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "“Dũng here. Could I",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l2:here",
            "color": "accent"
          },
          {
            "id": "e-1b",
            "t": "text",
            "text": "just jump in here?”",
            "x": 7972,
            "y": 240,
            "size": 50,
            "at": "l2:jump in",
            "color": "accent",
            "hl": [
              {
                "text": "jump in",
                "at": "l2:jump in"
              }
            ]
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "mẫu: “It's Susan here.”",
            "x": 7932,
            "y": 330,
            "size": 44,
            "at": "l3:Susan",
            "color": "muted"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "mẫu: “Alex here.”",
            "x": 7932,
            "y": 395,
            "size": 44,
            "at": "l3:Alex",
            "color": "muted"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Không thấy mặt → xưng tên",
            "x": 7932,
            "y": 480,
            "size": 50,
            "at": "l4:name",
            "hl": [
              {
                "text": "xưng tên",
                "at": "l4:name"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: TJ Taylor blog (JM Webster) — Conference Calls in English",
            "x": 7932,
            "y": 725,
            "size": 28,
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
          "say": "Stop three, ten a.m. A call with the partner in Australia. Cameras off. Just voices.",
          "sub": "Chặng ba, mười giờ sáng. Họp với đối tác Úc. Camera tắt hết, chỉ còn giọng nói."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Dũng here. Could I just jump in here?",
          "sub": "Dũng đây ạ. Cho em xen vào một chút được không?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "From the TJ Taylor guide: I'm sorry to interrupt. It's Susan here. Or: Alex here. Could I just jump in here?",
          "sub": "Theo hướng dẫn TJ Taylor: “I'm sorry to interrupt. It's Susan here.” Hoặc: “Alex here. Could I just jump in here?”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "When nobody can see you, say your name as you cut in.",
          "sub": "Khi không ai thấy mặt, chen vào thì xưng tên.",
          "keys": [
            "xưng tên"
          ]
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
            "at": "l5",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 14:00 · Nút giơ tay",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Teams"
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
                  "id": "thao",
                  "side": "left",
                  "face": "surprised"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "raised-hand",
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
            "at": "l1:Teams",
            "caption": "14:00 · họp Teams",
            "icon": "raised-hand"
          },
          {
            "id": "f-h",
            "t": "illus",
            "name": "raised-hand",
            "x": 60,
            "y": 1250,
            "size": 90,
            "at": "l1:raises"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Người trình bày nhận báo",
            "x": 170,
            "y": 1265,
            "size": 44,
            "at": "l1:notification"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Ai cũng thấy ✋ cạnh tên",
            "x": 60,
            "y": 1360,
            "size": 44,
            "at": "l2:People"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Nhiều tay → đánh số",
            "x": 60,
            "y": 1435,
            "size": 46,
            "at": "l2:numbered",
            "hl": [
              {
                "text": "đánh số",
                "at": "l2:numbered"
              }
            ]
          },
          {
            "id": "f-q",
            "t": "text",
            "text": "“…you still have your hand up.”",
            "x": 60,
            "y": 1530,
            "size": 40,
            "at": "l3:still",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four, two p.m., on Teams. Thảo raises her hand. The presenters get a notification.",
          "sub": "Chặng bốn, hai giờ chiều, trên Teams. Thảo giơ tay. Người trình bày nhận được thông báo.",
          "keys": [
            "giơ tay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Anyone opening the People list sees her hand. Several hands? Names are numbered in order.",
          "sub": "Ai mở danh sách người dự cũng thấy bàn tay cạnh tên. Nhiều người giơ thì tên được đánh số theo thứ tự.",
          "keys": [
            "đánh số theo thứ tự"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Thao, you still have your hand up. Did you want to add something?",
          "sub": "Thảo ơi, tay em vẫn đang giơ. Em muốn nói thêm gì à?",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Oh! No, I finished ten minutes ago…",
          "sub": "Ơ! Dạ không, em nói xong từ mười phút trước rồi…",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Her hand stood there like a flagpole. Everyone waited.",
          "sub": "Cánh tay đứng sừng sững như cột cờ. Cả nhóm ngồi chờ.",
          "keys": [
            "như cột cờ"
          ]
        }
      ],
      "ref": "p9,p11"
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
          }
        ],
        "items": [
          {
            "id": "f-auto",
            "t": "text",
            "text": "Teams tự hạ tay: cần lọc ồn",
            "x": 60,
            "y": 1620,
            "size": 44,
            "at": "l1:noise suppression",
            "hl": [
              {
                "text": "lọc ồn",
                "at": "l1:noise suppression"
              }
            ]
          },
          {
            "id": "f-off",
            "t": "text",
            "text": "lọc ồn tắt → tự hạ",
            "x": 100,
            "y": 1685,
            "size": 42,
            "at": "l2:off",
            "color": "coral"
          },
          {
            "id": "f-un",
            "t": "text",
            "text": "Không tự bật micro? Giơ tay xin",
            "x": 900,
            "y": 1780,
            "size": 40,
            "at": "l3:unmute"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Nói xong: nhìn lại nút ✋",
            "x": 60,
            "y": 1750,
            "size": 52,
            "at": "l4:check",
            "color": "accent",
            "hl": [
              {
                "text": "nhìn lại",
                "at": "l4:check"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Microsoft Support — Raise your hand in Teams meetings",
            "x": 60,
            "y": 1825,
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
          "say": "Teams lowers your hand when it notices you've spoken, but that relies on noise suppression.",
          "sub": "Teams tự hạ tay khi nhận ra bạn đã nói, nhưng việc này dựa vào tính năng lọc tiếng ồn.",
          "keys": [
            "lọc tiếng ồn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "If that's off, your hand stays up. Lower it yourself.",
          "sub": "Tính năng ấy tắt thì tay vẫn giơ. Phải tự hạ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In meetings where you can't unmute yourself, the presenter can let you after you raise your hand.",
          "sub": "Họp mà người dự không tự bật micro được thì người trình bày có thể cho bạn bật sau khi bạn giơ tay."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: after you speak, check the hand button.",
          "sub": "Rút ra: nói xong thì nhìn lại nút giơ tay.",
          "keys": [
            "nhìn lại nút giơ tay"
          ]
        }
      ],
      "ref": "p10,p12"
    },
    {
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "Mình đang nói mà bị người khác chen thì sao?",
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
          "say": "What if someone cuts in on you?",
          "sub": "Mình đang nói mà bị chen thì sao?",
          "keys": [
            "bị chen"
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 15:00 · Bị chen ngang",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:testing"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "point"
                }
              ],
              "props": [
                "calendar",
                "laptop"
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
            "at": "l1:testing",
            "caption": "15:00 · Dũng xin thêm tuần kiểm thử",
            "icon": "calendar"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "“Can I just finish my point?”",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "l5:finish",
            "color": "accent",
            "hl": [
              {
                "text": "finish my point",
                "at": "l5:finish"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "“I'll let you speak",
            "x": 2028,
            "y": 1340,
            "size": 44,
            "at": "l5:let you"
          },
          {
            "id": "g-2b",
            "t": "text",
            "text": "in a second.”",
            "x": 2068,
            "y": 1400,
            "size": 44,
            "at": "l5:second"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Bị chen nhiều lần:",
            "x": 2028,
            "y": 1490,
            "size": 42,
            "at": "l6:several",
            "color": "coral"
          },
          {
            "id": "g-3b",
            "t": "text",
            "text": "“Hang on a second,",
            "x": 2068,
            "y": 1550,
            "size": 42,
            "at": "l6:Hang on"
          },
          {
            "id": "g-3c",
            "t": "text",
            "text": "can you let me finish?”",
            "x": 2068,
            "y": 1605,
            "size": 42,
            "at": "l6:let me finish"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, three p.m. Dũng explains why testing needs one more week.",
          "sub": "Chặng năm, ba giờ chiều. Dũng trình bày vì sao cần thêm một tuần kiểm thử."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "We need one more week because the payment tests…",
          "sub": "Mình cần thêm một tuần vì phần kiểm thử thanh toán…",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "About the launch date, I think we should…",
          "sub": "Về ngày ra mắt, chị nghĩ mình nên…",
          "pose": "point"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sam cuts in about the launch date. Dũng's reason is only half out.",
          "sub": "Chị Sam chen vào chuyện ngày ra mắt. Lý do của Dũng mới nói được một nửa."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The lesson has phrases to keep your turn: can I just finish my point? I'll let you speak in a second.",
          "sub": "Giáo án có câu giữ lượt: “Can I just finish my point?” “I'll let you speak in a second.”",
          "keys": [
            "câu giữ lượt"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Firmer, after several interruptions: hang on a second, can you let me finish?",
          "sub": "Mạnh hơn, khi đã bị chen nhiều lần: “Hang on a second, can you let me finish?”"
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s14",
      "module": "DLG-01",
      "data": {
        "set": "online",
        "label": "15:00 · Dũng bị chen",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Im lặng nhường luôn",
          "why": "Cuộc họp sang ngày ra mắt, lý do kiểm thử không ai nghe hết, tuần thêm bị gạt đi.",
          "rule": "Giữ lượt bằng câu mềm, trả lượt bằng câu ngắn"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Fine. I'll just stop. The launch date matters more anyway.",
          "sub": "Thôi, mình im. Ngày ra mắt chắc quan trọng hơn.",
          "pose": "shrug",
          "face": "sad",
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
          "say": "Then nobody hears your reason, and the extra week gets dropped.",
          "sub": "Thế thì không ai nghe hết lý do, và tuần kiểm thử thêm bị gạt đi.",
          "keys": [
            "bị gạt đi"
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
          "say": "I'll let you speak in a second. Can I just finish my point?",
          "sub": "Một chút nữa em nhường chị nói. Cho em nói nốt ý này nhé?",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "That's my point. Go on.",
          "sub": "Em nói xong rồi. Chị cứ nói tiếp.",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Now everyone hears the full reason first.",
          "sub": "Giờ cả nhóm nghe đủ lý do rồi mới bàn ngày ra mắt.",
          "phase": "redo",
          "keys": [
            "nghe đủ lý do"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p14"
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
            "id": "g-k",
            "t": "text",
            "text": "Giữ lượt: câu mềm",
            "x": 2028,
            "y": 1695,
            "size": 50,
            "at": "l1:soft",
            "color": "accent",
            "hl": [
              {
                "text": "câu mềm",
                "at": "l1:soft"
              }
            ]
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "Trả lượt: “Go on.”",
            "x": 2028,
            "y": 1770,
            "size": 50,
            "at": "l1:short",
            "hl": [
              {
                "text": "“Go on.”",
                "at": "l1:short"
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
          "say": "Takeaway: keep your turn with a soft phrase, then give it back with a short one.",
          "sub": "Rút ra: giữ lượt bằng một câu mềm, rồi trả lượt bằng một câu ngắn.",
          "keys": [
            "giữ lượt bằng một câu mềm"
          ]
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
            "at": "l7",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 16:00 · Nhường và mời",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:same time"
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
                  "id": "thao",
                  "side": "left",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "center",
                  "face": "surprised"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "enter": "pop",
                  "at": "l4",
                  "face": "worried"
                }
              ],
              "props": [
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
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-05",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:same time",
            "caption": "16:00 · họp nhóm",
            "icon": "busts-in-silhouette"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Nhường: “After you.” · “Go on.”",
            "x": 3996,
            "y": 1260,
            "size": 42,
            "at": "l2:After you",
            "hl": [
              {
                "text": "“After you.”",
                "at": "l2:After you"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Mời: “Do you think…?”",
            "x": 3996,
            "y": 1350,
            "size": 44,
            "at": "l6:think"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "“What about if we…?”",
            "x": 3996,
            "y": 1425,
            "size": 44,
            "at": "l6:What about"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "“Why don't we…?”",
            "x": 3996,
            "y": 1500,
            "size": 44,
            "at": "l6:Why don't we"
          },
          {
            "id": "h-5",
            "t": "text",
            "text": "“That would work, wouldn't it?”",
            "x": 3996,
            "y": 1575,
            "size": 40,
            "at": "l7:wouldn't it",
            "color": "accent",
            "hl": [
              {
                "text": "wouldn't it?",
                "at": "l7:wouldn't it"
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
          "say": "Stop six, four p.m. Thảo and Dũng start talking at the same time. Awkward.",
          "sub": "Chặng sáu, bốn giờ chiều. Thảo và Dũng cùng mở miệng một lúc. Ngượng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Oh, after you.",
          "sub": "Ồ, anh nói trước đi.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One quick phrase saves those seconds when both stop, then both start again.",
          "sub": "Nhường nhanh một câu là khỏi cảnh cả hai cùng dừng rồi lại cùng nói."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And this is Lan, the intern. She hasn't said a word all meeting.",
          "sub": "Còn đây là Lan, thực tập sinh. Cả buổi chưa nói câu nào.",
          "keys": [
            "thực tập sinh"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The worksheet asks: ignore silent people, or invite them in?",
          "sub": "Phiếu bài tập hỏi: mặc kệ người im lặng, hay chủ động mời họ nói?"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Inviting phrases: do you think…? What about if we…? Why don't we…?",
          "sub": "Câu mời: “Do you think…?” “What about if we…?” “Why don't we…?”",
          "keys": [
            "Câu mời"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "thao",
          "say": "Lan, a weekly check-in would work, wouldn't it?",
          "sub": "Lan này, mỗi tuần kiểm tra một lần là ổn, phải không em?",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l4",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p16,p17,p18"
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
            "at": "l2",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-tag",
            "t": "text",
            "text": "câu hỏi đuôi = cớ để lên tiếng",
            "x": 3996,
            "y": 1670,
            "size": 44,
            "at": "l2:tag",
            "hl": [
              {
                "text": "cớ để lên tiếng",
                "at": "l2:reason"
              }
            ]
          },
          {
            "id": "h-eq",
            "t": "text",
            "text": "Mục tiêu: góp ý ngang nhau",
            "x": 3996,
            "y": 1750,
            "size": 50,
            "at": "l3:equally",
            "color": "accent",
            "hl": [
              {
                "text": "ngang nhau",
                "at": "l3:equally"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "Yes, it would. And maybe a short checklist too?",
          "sub": "Dạ, được ạ. Mà có thể thêm một danh sách kiểm tra ngắn nữa ạ?",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A question tag like wouldn't it gives quiet people a reason to speak.",
          "sub": "Câu hỏi đuôi như “wouldn't it?” cho người ít nói một cái cớ để lên tiếng.",
          "keys": [
            "cái cớ để lên tiếng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The lesson's final role play aims for everyone to contribute equally. Once you can interrupt, pull others in.",
          "sub": "Bài đóng vai cuối của giáo án đặt mục tiêu mọi người góp ý ngang nhau. Đã quen chen, hãy kéo người khác vào cuộc.",
          "keys": [
            "góp ý ngang nhau"
          ]
        }
      ],
      "ref": "p17,p18"
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
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l3:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "17:30 · Chuẩn bị",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:prepares"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "memo",
                "studio-microphone"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:prepares",
            "caption": "17:30 · bàn làm việc",
            "icon": "memo"
          },
          {
            "id": "i-r",
            "t": "text",
            "text": "Ghi âm mình, nghe lại",
            "x": 5964,
            "y": 1255,
            "size": 46,
            "at": "l1:recording",
            "hl": [
              {
                "text": "nghe lại",
                "at": "l1:listening"
              }
            ]
          },
          {
            "id": "i-r2",
            "t": "text",
            "text": "(hỏi ý mọi người, theo quy định)",
            "x": 6004,
            "y": 1320,
            "size": 36,
            "at": "l2:permission",
            "color": "muted"
          },
          {
            "id": "i-s",
            "t": "text",
            "text": "Cứ bắt đầu: càng làm càng dễ",
            "x": 5964,
            "y": 1390,
            "size": 44,
            "at": "l2:easier",
            "hl": [
              {
                "text": "càng làm càng dễ",
                "at": "l2:easier"
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
          "say": "Five thirty. Thảo prepares. The lesson suggests recording yourself in a meeting and listening back later.",
          "sub": "Năm rưỡi chiều. Thảo chuẩn bị. Giáo án gợi ý ghi âm chính mình trong cuộc họp rồi nghe lại.",
          "keys": [
            "ghi âm chính mình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask everyone's permission and follow company rules. And just start. It gets easier.",
          "sub": "Nhớ hỏi ý mọi người, theo quy định công ty. Và cứ bắt đầu, càng làm càng dễ.",
          "keys": [
            "càng làm càng dễ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Four lines on a sticky note, and one goal.",
          "sub": "Bốn câu trên giấy nhớ, và một mục tiêu.",
          "face": "happy",
          "pose": "hold"
        }
      ],
      "ref": "p19,p20"
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
            "id": "i-n",
            "t": "box",
            "x": 5934,
            "y": 1470,
            "w": 820,
            "h": 370,
            "at": "l0",
            "fill": "#fff3a6",
            "stroke": 4
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1500,
            "w": 44,
            "h": 44,
            "at": "l0:interrupt",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1482,
            "size": 56,
            "at": "l0:interrupt+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Sorry to interrupt, but…",
            "x": 6029,
            "y": 1492,
            "size": 38,
            "at": "l0:interrupt+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1566,
            "w": 44,
            "h": 44,
            "at": "l0:finish",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1548,
            "size": 56,
            "at": "l0:finish+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Can I just finish my point?",
            "x": 6029,
            "y": 1558,
            "size": 38,
            "at": "l0:finish+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1632,
            "w": 44,
            "h": 44,
            "at": "l0:Go on",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1614,
            "size": 56,
            "at": "l0:Go on+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Go on.",
            "x": 6029,
            "y": 1624,
            "size": 38,
            "at": "l0:Go on+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1698,
            "w": 44,
            "h": 44,
            "at": "l0:think",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1680,
            "size": 56,
            "at": "l0:think+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Do you think…?",
            "x": 6029,
            "y": 1690,
            "size": 38,
            "at": "l0:think+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1764,
            "w": 44,
            "h": 44,
            "at": "l0:once",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1746,
            "size": 56,
            "at": "l0:once+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Nói ít nhất 1 lần",
            "x": 6029,
            "y": 1756,
            "size": 38,
            "at": "l0:once+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l0",
          "lang": "en",
          "who": "det",
          "say": "Interrupt, finish my point, go on, do you think, and speak up once. Done.",
          "sub": "Chen, giữ lượt, nhường, mời, và nói ít nhất một lần. Xong.",
          "keys": [
            "nói ít nhất một lần"
          ]
        }
      ],
      "ref": "p20"
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
            "at": "l4",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Thứ Ba sau · 9:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:waterfall"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "center"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "light-bulb",
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
            "at": "l1:waterfall",
            "caption": "Thứ Ba sau 9:00 · họp ý tưởng",
            "icon": "light-bulb"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "“Sorry to interrupt, but…” ✓",
            "x": 7932,
            "y": 1270,
            "size": 46,
            "at": "l2:interrupt",
            "color": "accent"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Không ai mời?",
            "x": 7932,
            "y": 1380,
            "size": 54,
            "at": "l4:invitation"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "Xin phép mà vào",
            "x": 7972,
            "y": 1460,
            "size": 60,
            "at": "l4:permission",
            "color": "accent",
            "hl": [
              {
                "text": "Xin phép",
                "at": "l4:permission"
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
          "say": "Next Tuesday, nine a.m. Same ideas meeting, same waterfall Dũng.",
          "sub": "Thứ Ba tuần sau, chín giờ sáng. Vẫn buổi họp ý tưởng ấy, vẫn Dũng thác đổ ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Sorry to interrupt, but can I just say something about the budget?",
          "sub": "Xin lỗi cắt ngang, cho em nói một chút về ngân sách được không ạ?",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Of course, Thảo. Go on.",
          "sub": "Tất nhiên rồi Thảo. Em nói đi.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Eat when invited? In meetings, no invitation comes. Ask permission, and step in.",
          "sub": "“Ăn có mời, làm có khiến”? Họp thì chẳng ai mời. Xin phép, rồi bước vào.",
          "keys": [
            "Xin phép, rồi bước vào"
          ]
        }
      ],
      "ref": "p7"
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
            "ms": 1400
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
            "id": "j-s",
            "t": "text",
            "text": "Vào lượt đúng cách,",
            "x": 7932,
            "y": 1570,
            "size": 52,
            "at": "l1:entering"
          },
          {
            "id": "j-s2",
            "t": "text",
            "text": "trả lượt đúng lúc",
            "x": 7972,
            "y": 1645,
            "size": 52,
            "at": "l1:giving",
            "hl": [
              {
                "text": "trả lượt đúng lúc",
                "at": "l1:right moment"
              }
            ]
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 6664,
            "y": 380,
            "at": "l2+500"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 2728,
            "y": 1260,
            "at": "l3+500"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1350,
            "at": "l4+500"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Câu mẫu theo các nguồn đã ghi; ghi âm cuộc họp cần hỏi ý mọi người và theo quy định công ty. Nhân vật là minh hoạ.",
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
          "say": "So: interrupting isn't fighting for the mic. It's entering properly, and giving it back at the right moment.",
          "sub": "Tóm lại: chen lời không phải tranh nói, mà là vào lượt đúng cách và trả lượt đúng lúc.",
          "keys": [
            "trả lượt đúng lúc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask permission, then name your topic.",
          "sub": "Xin phép, rồi nói đề tài."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Keep your turn softly, give it back briefly.",
          "sub": "Giữ lượt mềm, trả lượt gọn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And invite the quiet ones in.",
          "sub": "Và mời người ít nói vào cuộc."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: use one line at your next meeting. Next up: disagreeing without upsetting anyone.",
          "sub": "Làm ngay: dùng ít nhất một câu ở cuộc họp tới. Bài sau: không đồng ý mà không mất lòng.",
          "keys": [
            "dùng ít nhất một câu"
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
        "q": "Dung is cut off while explaining a testing delay, what is the better choice?",
        "options": [
          "Keep quiet, because a colleague who interrupts must have a better idea",
          "Leave the call and explain the testing delay in a long email",
          "Say I'll let you speak in a second, finish briefly, then say go on"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "raised-hand",
        "why": "Cách B giữ lượt bằng một câu mềm, nói nốt hai câu rồi trả lượt. Cả nhóm nghe đủ lý do trước khi quyết định."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Dung is cut off while explaining a testing delay, what is the better choice?",
          "sub": "Dũng bị cắt lời khi đang giải thích việc lùi kiểm thử, nên chọn cách nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Say I'll let you speak in a second, finish briefly, then say go on.",
          "sub": "Giữ lượt bằng câu mềm, nói nốt, rồi trả lượt bằng “Go on.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Remember the rewind? That's take two.",
          "sub": "Nhớ cảnh tua lại chứ? Chính là lần hai."
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
        "text": "Xin phép mà vào. Còn bốn mươi câu hỏi",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sorry to interrupt, but forty questions are waiting below.",
          "sub": "Xin lỗi cắt ngang, nhưng bốn mươi câu hỏi đang chờ bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144. Hook HOOK-21: câu hỏi để đoán sai (chen lời giữa họp: A. bất lịch sự, chờ được mời / B. một kỹ năng) rồi lật B theo ⚖️ p3. Dòng thời gian: MỘT NGÀY HỌP thứ Ba của Thảo (9:00 họp ý tưởng → 9:20 thang câu chen nhẹ→mạnh → 9:25 Dũng “Wait, wait! No…” → 10:00 camera tắt, xưng tên → 14:00 Teams giơ tay quên hạ → 15:00 Dũng bị chen + “Khoan đã!” → 16:00 “After you”, mời Lan → 17:30 chuẩn bị, giấy nhớ → Thứ Ba sau 9:00 khép vòng). Nhân vật: Thảo, Dũng, chị Sam, Lan. Tục ngữ: “Ăn có mời, làm có khiến” → họp thì xin phép mà vào. Cảnh ngắt nhịp: BRK-04 (Trước/Sau p7), BRK-07 (rehook bị chen). Câu đố questions[26].",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
