// talk-to-family-after-job-loss--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "talk-to-family-after-job-loss--w01",
  "unit": {
    "audience": "laid-off-at-40",
    "slug": "talk-to-family-after-job-loss",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Mất việc ở tuổi 40: nói với vợ chồng, con cái thế nào để cả nhà cùng vượt qua?",
    "series": "Mất việc ở tuổi 40: ba mươi ngày đầu — cho người vừa bị cắt giảm, đứng dậy có kế hoạch"
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
            "module": "SCENE-03",
            "x": 920,
            "y": 130,
            "w": 720,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "automobile",
                "house"
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
            "at": "l1",
            "caption": "Thứ Hai · 18:00 · trước cổng nhà",
            "icon": "automobile"
          },
          {
            "id": "a-15",
            "t": "text",
            "text": "15 phút trong xe",
            "x": 60,
            "y": 130,
            "size": 64,
            "at": "l1:fifteen",
            "color": "accent",
            "hl": [
              {
                "text": "15 phút",
                "at": "l1:fifteen"
              }
            ]
          },
          {
            "id": "a-msg",
            "t": "text",
            "text": "“Em ơi, hôm nay công ty…”",
            "x": 60,
            "y": 260,
            "size": 56,
            "at": "l3:company",
            "color": "coral"
          },
          {
            "id": "a-cut",
            "t": "text",
            "text": "… câu bỏ dở",
            "x": 60,
            "y": 360,
            "size": 50,
            "at": "l4:unfinished",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, forty two, just laid off. He has sat in his car outside home for fifteen minutes.",
          "sub": "Đây là Dũng, 42 tuổi, vừa bị cắt giảm. Anh ngồi trong xe trước cổng nhà đã mười lăm phút.",
          "keys": [
            "mười lăm phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "He's rehearsing the first sentence.",
          "sub": "Anh đang tập câu đầu tiên."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Honey, today the company...",
          "sub": "Em ơi, hôm nay công ty…",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Unfinished. How do you say it so she doesn't panic, the kid isn't scared, and you don't feel small?",
          "sub": "Bỏ dở. Nói sao để vợ không hoảng, con không sợ, mà mình không thấy nhỏ bé?",
          "keys": [
            "không thấy nhỏ bé"
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
            "at": 150,
            "fit": "B",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "b-q",
            "t": "text",
            "text": "Nói với vợ, con thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:tell",
            "hl": [
              {
                "text": "thế nào",
                "at": "l1:how"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Giấu, có việc mới kể",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:hide",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:Not"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Nói sớm, nói thật, nói vừa sức",
            "x": 2028,
            "y": 260,
            "size": 54,
            "at": "l3:early",
            "color": "accent",
            "hl": [
              {
                "text": "nói vừa sức",
                "at": "l3:right size"
              }
            ]
          },
          {
            "id": "b-ca",
            "t": "text",
            "text": "“Đóng cửa bảo nhau”",
            "x": 2028,
            "y": 380,
            "size": 56,
            "at": "l4:door",
            "color": "accent",
            "hl": [
              {
                "text": "bảo nhau",
                "at": "l4:together"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l5:week+400",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2298,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l5:week+650",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2568,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l5:week+900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2838,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l5:week+1150",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3108,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l5:week+1400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3378,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l5:week+1650",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2 18:15",
            "x": 2048,
            "y": 580,
            "size": 38,
            "at": "l5:week+520"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T2 18:30",
            "x": 2318,
            "y": 580,
            "size": 38,
            "at": "l5:week+770"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T5 20:00",
            "x": 2588,
            "y": 580,
            "size": 38,
            "at": "l5:week+1020"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T6",
            "x": 2858,
            "y": 580,
            "size": 38,
            "at": "l5:week+1270"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "CN chiều",
            "x": 3128,
            "y": 580,
            "size": 38,
            "at": "l5:week+1520"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "CN 19:00",
            "x": 3398,
            "y": 580,
            "size": 38,
            "at": "l5:week+1770"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn chính: HelpGuide — Job Loss and Unemployment Stress",
            "x": 2028,
            "y": 690,
            "size": 26,
            "at": "l5",
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
          "say": "So how do you tell your spouse and kids, so the whole family gets through it?",
          "sub": "Vậy nói với vợ chồng, con cái thế nào để cả nhà cùng vượt qua?",
          "keys": [
            "cả nhà cùng vượt qua"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not hide it and tell them once there's a new job.",
          "sub": "Không phải giấu đi, có việc mới rồi kể."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But early, honest, and the right size for each person.",
          "sub": "Mà là nói sớm, nói thật, nói vừa sức từng người.",
          "keys": [
            "nói vừa sức"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: close the door and sort it out together.",
          "sub": "Ông bà dặn: “Đóng cửa bảo nhau.”",
          "keys": [
            "Đóng cửa bảo nhau"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One week of Dũng's family, starting from that car.",
          "sub": "Một tuần của nhà Dũng, bắt đầu từ chiếc xe ấy."
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
            "text": "① 18:15 · Vì sao muốn giấu",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:company"
          },
          {
            "id": "c-say",
            "t": "text",
            "text": "“…báo anh nằm trong đợt cắt giảm.”",
            "x": 3996,
            "y": 165,
            "size": 46,
            "at": "l1:list",
            "color": "accent"
          },
          {
            "id": "c-f",
            "t": "text",
            "text": "Tổn thương, giận, lo, tự trách",
            "x": 3996,
            "y": 255,
            "size": 44,
            "at": "l2:hurt",
            "hl": [
              {
                "text": "tự trách",
                "at": "l2:blame"
              }
            ]
          },
          {
            "id": "c-sh",
            "t": "text",
            "text": "Xấu hổ → thu mình lại",
            "x": 3996,
            "y": 330,
            "size": 46,
            "at": "l3:shame",
            "color": "coral",
            "hl": [
              {
                "text": "thu mình",
                "at": "l3:withdraw"
              }
            ]
          },
          {
            "id": "c-pi",
            "t": "text",
            "text": "Trụ cột 40+: sợ mất hình ảnh",
            "x": 3996,
            "y": 405,
            "size": 44,
            "at": "l4:face"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: HelpGuide",
            "x": 3996,
            "y": 475,
            "size": 26,
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
          "who": "dung",
          "say": "Honey, today the company told me I'm on the layoff list. There. I said it, to the steering wheel.",
          "sub": "Em ơi, hôm nay công ty báo anh nằm trong đợt cắt giảm. Đấy, nói được rồi, với cái vô lăng.",
          "face": "sad"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Why is it so hard? HelpGuide says job loss brings hurt, anger, anxiety, betrayal, and self blame.",
          "sub": "Sao khó thế? HelpGuide nói mất việc kéo theo tổn thương, giận dữ, lo âu, thấy bị phản bội, tự trách.",
          "keys": [
            "tự trách"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Shame makes people withdraw.",
          "sub": "Cảm giác xấu hổ hay khiến người ta thu mình lại.",
          "keys": [
            "thu mình lại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And for a breadwinner over forty, there's the fear of losing face before the family.",
          "sub": "Với người trụ cột ngoài bốn mươi, còn thêm nỗi sợ mất hình ảnh trước vợ con."
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
            "fit": "C",
            "move": "cut"
          },
          {
            "at": "l1",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 4856,
            "y": 130,
            "w": 720,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "automobile",
                "house"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai · 18:15 · vẫn trong xe",
            "icon": "automobile"
          },
          {
            "id": "c-my",
            "t": "text",
            "text": "Âm thầm tìm, có việc mới kể",
            "x": 3996,
            "y": 560,
            "size": 44,
            "at": "l1:quietly",
            "color": "muted"
          },
          {
            "id": "c-myx",
            "t": "strike",
            "over": "c-my",
            "at": "l2:worse"
          },
          {
            "id": "c-hurt",
            "t": "text",
            "text": "Buồn hơn: vì bị giấu",
            "x": 3996,
            "y": 630,
            "size": 46,
            "at": "l3:dark",
            "color": "coral",
            "hl": [
              {
                "text": "bị giấu",
                "at": "l3:dark"
              }
            ]
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Cần sự thật, không cần hoàn hảo",
            "x": 4856,
            "y": 668,
            "size": 34,
            "at": "l4:truth",
            "color": "accent",
            "hl": [
              {
                "text": "sự thật",
                "at": "l4:truth"
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
          "say": "Maybe I search quietly, and tell her once I find something. Then nobody worries.",
          "sub": "Hay mình âm thầm tìm việc, có việc rồi kể. Thế là chẳng ai phải lo.",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A common mistake. HelpGuide says keeping it secret makes things worse. And you lose your closest support.",
          "sub": "Hiểu lầm thường gặp. HelpGuide nói chính việc giấu làm tình hình tệ hơn, và bạn mất nguồn hỗ trợ gần nhất.",
          "keys": [
            "làm tình hình tệ hơn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Families notice. Then what hurts is not just the job loss, but being kept in the dark.",
          "sub": "Người thân sớm muộn cũng nhận ra. Lúc ấy điều làm họ buồn không chỉ là mất việc, mà là bị giấu.",
          "keys": [
            "bị giấu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Your family doesn't need a perfect person. They need the truth, to cope together.",
          "sub": "Gia đình không cần một người hoàn hảo, họ cần biết sự thật để cùng xoay xở.",
          "keys": [
            "cần biết sự thật"
          ]
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
            "at": "l3",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 18:30 · Mở lời với vợ",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:living room"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 130,
            "w": 720,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "couch-and-lamp",
                "teacup-without-handle"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "at": "l1:Thảo",
            "caption": "Thứ Hai · 18:30 · phòng khách",
            "icon": "couch-and-lamp"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Kể tiến độ tìm việc",
            "x": 5964,
            "y": 170,
            "size": 46,
            "at": "l3:progress"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Nói rõ người thân giúp gì",
            "x": 5964,
            "y": 240,
            "size": 46,
            "at": "l3:help"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Mời nói nỗi lo, mời góp ý",
            "x": 5964,
            "y": 310,
            "size": 46,
            "at": "l4:worries",
            "color": "accent",
            "hl": [
              {
                "text": "nỗi lo",
                "at": "l4:worries"
              }
            ]
          },
          {
            "id": "d-2c",
            "t": "text",
            "text": "→ hai chiều, không phải thông báo",
            "x": 5964,
            "y": 390,
            "size": 40,
            "at": "l5:two way"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: six thirty, the living room. This is Thảo, Dũng's wife, an office worker who loves lists.",
          "sub": "Chặng hai: sáu rưỡi tối, phòng khách. Đây là Thảo, vợ Dũng, dân văn phòng mê lập danh sách.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "You're home early. What's wrong?",
          "sub": "Anh về sớm thế. Có chuyện gì à?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "HelpGuide suggests three things: share your search progress, say how family can help.",
          "sub": "HelpGuide gợi ý ba việc: kể tiến độ tìm việc, nói rõ người thân giúp được gì.",
          "keys": [
            "ba việc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And let them voice worries about their own security, then invite ideas.",
          "sub": "Và để họ nói ra nỗi lo về sự an toàn của chính họ, rồi mời họ góp ý.",
          "keys": [
            "nói ra nỗi lo"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "That makes it a two way talk, not an announcement.",
          "sub": "Như vậy cuộc nói chuyện là hai chiều, không chỉ là một bản thông báo.",
          "keys": [
            "hai chiều"
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
      "ref": "p5"
    },
    {
      "id": "s05",
      "module": "BRK-04",
      "data": {
        "title": "Câu mở lời",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "“Anh bị cho nghỉ rồi. Em đừng hỏi nhiều.”",
        "right": "“Anh đang buồn. Em lo nhất chuyện gì?”",
        "wrongIllus": "zipper-mouth-face",
        "rightIllus": "people-hugging"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "I got let go. Don't ask too much.",
          "sub": "Anh bị cho nghỉ rồi. Em đừng hỏi nhiều.",
          "face": "sad",
          "keys": [
            "đừng hỏi nhiều"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I'm sad and a bit lost. What worries you most?",
          "sub": "Anh đang buồn, hơi rối. Em lo nhất chuyện gì?",
          "keys": [
            "Em lo nhất chuyện gì"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p7"
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
            "id": "d-k1",
            "t": "text",
            "text": "Chuyện gì xảy ra",
            "x": 5964,
            "y": 480,
            "size": 44,
            "at": "l3:what happened",
            "hl": [
              {
                "text": "xảy ra",
                "at": "l3:happened"
              }
            ]
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "Mình đang làm gì",
            "x": 5964,
            "y": 545,
            "size": 44,
            "at": "l3:doing"
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "Người kia đang lo gì",
            "x": 5964,
            "y": 610,
            "size": 44,
            "at": "l3:fears",
            "color": "accent",
            "hl": [
              {
                "text": "lo gì",
                "at": "l3:fears"
              }
            ]
          },
          {
            "id": "d-ls",
            "t": "text",
            "text": "Nghe hết đã, chưa cần giải",
            "x": 6824,
            "y": 668,
            "size": 38,
            "at": "l4:listen",
            "hl": [
              {
                "text": "Nghe hết đã",
                "at": "l4:listen"
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
          "say": "Today the company put me in the layoff. I've got my papers, and I'll redo our numbers this week. Let's look together.",
          "sub": "Hôm nay công ty báo anh nằm trong đợt cắt giảm. Anh đã xin đủ giấy tờ, tuần này tính lại các khoản. Mình cùng xem nhé.",
          "face": "sad",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "The loan, Bin's classes, everything at once...",
          "sub": "Khoản vay, lớp học của Bin, đủ thứ một lúc…",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The pattern: what happened, what you're doing, then what the other person fears.",
          "sub": "Công thức: chuyện gì đã xảy ra, mình đang làm gì, rồi hỏi người kia đang lo gì.",
          "keys": [
            "người kia đang lo gì"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "When she pours out money questions, you don't need every answer. Listen to it all first.",
          "sub": "Khi vợ dồn câu hỏi về tiền, chưa cần trả lời ngay mọi câu, chỉ cần nghe hết đã.",
          "keys": [
            "nghe hết đã"
          ]
        }
      ],
      "ref": "p6,p7,p8"
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
            "at": "l5",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Năm · Bin hỏi",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Thursday"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8792,
            "y": 130,
            "w": 720,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "bin",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "face": "worried"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "artist-palette",
                "electric-plug"
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
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
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
            "at": "l1:Bin",
            "caption": "Thứ Năm · 20:00 · phòng Bin",
            "icon": "artist-palette"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Con tưởng tượng điều tệ nhất",
            "x": 7932,
            "y": 170,
            "size": 44,
            "at": "l3:worst"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Nghĩ bố mẹ làm sai",
            "x": 7932,
            "y": 240,
            "size": 44,
            "at": "l3:wrong"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Nghĩ mình có lỗi, là gánh nặng",
            "x": 7932,
            "y": 310,
            "size": 44,
            "at": "l3:burden",
            "color": "coral",
            "hl": [
              {
                "text": "có lỗi",
                "at": "l3:blame"
              }
            ]
          },
          {
            "id": "e-sil",
            "t": "text",
            "text": "Im lặng → con tự đoán",
            "x": 7932,
            "y": 400,
            "size": 50,
            "at": "l5:guess",
            "color": "accent",
            "hl": [
              {
                "text": "tự đoán",
                "at": "l5:guess"
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
          "say": "Third stop: Thursday, eight p.m. Bé Bin, their nine year old, saw Dad home in the mornings, and heard whispers about the power bill.",
          "sub": "Chặng ba: tối thứ Năm. Bé Bin, chín tuổi, thấy bố ở nhà buổi sáng, nghe mẹ nói khẽ chuyện tiền điện.",
          "keys": [
            "Bé Bin"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Dad, is it because I asked for drawing class that we ran out of money?",
          "sub": "Bố ơi, có phải tại con đòi học thêm vẽ nên nhà mình hết tiền không bố?",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "HelpGuide says kids may imagine the worst, think a parent did wrong, or feel they're to blame, a burden.",
          "sub": "HelpGuide cho biết trẻ có thể tưởng tượng điều tồi tệ nhất, nghĩ bố mẹ làm gì sai, hoặc thấy mình có lỗi, là gánh nặng.",
          "keys": [
            "thấy mình có lỗi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "No, son. The company cut many people. Dad is finding a new job. It's nobody's fault.",
          "sub": "Không đâu con. Công ty cắt giảm nhiều người. Bố đang tìm việc mới. Không phải lỗi của ai cả.",
          "pose": "explain",
          "face": "neutral"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So silence doesn't shield a child. It just leaves them to guess.",
          "sub": "Vậy im lặng không che chắn được con, nó chỉ để con tự đoán.",
          "keys": [
            "để con tự đoán"
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
      "ref": "p9,p11"
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
            "id": "e-ok",
            "t": "text",
            "text": "Nói thật: chuyện gì, ra sao",
            "x": 7932,
            "y": 500,
            "size": 38,
            "at": "l1:honest"
          },
          {
            "id": "e-no",
            "t": "text",
            "text": "Bớt chi tiết cảm xúc, tiền bạc",
            "x": 7932,
            "y": 565,
            "size": 40,
            "at": "l1:detail",
            "color": "coral"
          },
          {
            "id": "e-open",
            "t": "text",
            "text": "Để ngỏ: hỏi lúc nào cũng được",
            "x": 7932,
            "y": 630,
            "size": 40,
            "at": "l2:questions"
          },
          {
            "id": "e-nf",
            "t": "text",
            "text": "Không phải lỗi của ai",
            "x": 8792,
            "y": 668,
            "size": 44,
            "at": "l2:nobody",
            "color": "accent",
            "hl": [
              {
                "text": "lỗi của ai",
                "at": "l2:fault"
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
          "say": "Be honest about what happened and how it affects the family, without heavy emotional or money detail.",
          "sub": "Nói thật chuyện đã xảy ra và ảnh hưởng thế nào, nhưng tránh dồn lên con chi tiết cảm xúc, tiền bạc.",
          "keys": [
            "Nói thật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Keep the door open for questions, and help them see it's nobody's fault.",
          "sub": "Để ngỏ cho con hỏi tiếp lúc nào cũng được, và giúp con hiểu đây không phải lỗi của ai.",
          "keys": [
            "không phải lỗi của ai"
          ]
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s09",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Không được kể, con tự đoán",
        "hl": "con tự đoán",
        "sub": "Và con thường đoán phần lỗi về mình"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Children who aren't told, guess.",
          "sub": "Con không được kể thì con tự đoán.",
          "keys": [
            "con tự đoán"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And they often guess the blame is theirs.",
          "sub": "Và con thường đoán phần lỗi về mình.",
          "keys": [
            "phần lỗi về mình"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p12"
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
            "text": "④ Thứ Sáu · Cùng góp phần",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:table"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 920,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "kitchen",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "hold"
                },
                {
                  "id": "bin",
                  "side": "right",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "ledger",
                "money-bag"
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
            "at": "l1:Friday",
            "caption": "Thứ Sáu · bữa tối · bàn bếp",
            "icon": "ledger"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Tiền tiêu vặt ít hơn",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l3:pocket money"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Hoãn món đồ đắt tiền",
            "x": 60,
            "y": 1330,
            "size": 46,
            "at": "l3:delaying"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Con lớn: làm thêm sau giờ học",
            "x": 60,
            "y": 1400,
            "size": 44,
            "at": "l3:older"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "→ con là thành viên của đội",
            "x": 60,
            "y": 1480,
            "size": 46,
            "at": "l4:team",
            "color": "accent",
            "hl": [
              {
                "text": "của đội",
                "at": "l4:team"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: HelpGuide; CFPB — Budgeting",
            "x": 60,
            "y": 1550,
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
          "say": "Fourth stop: Friday dinner. Something changed at this table.",
          "sub": "Chặng bốn: bữa tối thứ Sáu. Bàn ăn này đã khác."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Dad, I can take less pocket money. And skip the new crayons!",
          "sub": "Bố ơi, con lấy ít tiền tiêu vặt thôi. Hộp bút màu mới để sau!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "HelpGuide suggests small ways: less pocket money, delaying big purchases, or for older kids, an after school job.",
          "sub": "HelpGuide gợi ý những cách nhỏ: ít tiền tiêu vặt hơn, hoãn món đắt tiền, con lớn thì làm thêm sau giờ học."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So the child feels part of the team, less helpless.",
          "sub": "Để con thấy mình là một thành viên của đội, bớt bất lực.",
          "keys": [
            "thành viên của đội"
          ]
        }
      ],
      "ref": "p13"
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
            "id": "f-grp",
            "t": "text",
            "text": "Nhóm hỗ trợ: người thân, bạn bè",
            "x": 60,
            "y": 1630,
            "size": 40,
            "at": "l1:support",
            "hl": [
              {
                "text": "Nhóm hỗ trợ",
                "at": "l1:support"
              }
            ]
          },
          {
            "id": "f-bud",
            "t": "text",
            "text": "Lo chung → việc làm chung",
            "x": 920,
            "y": 1758,
            "size": 42,
            "at": "l3:shared",
            "color": "accent",
            "hl": [
              {
                "text": "việc làm chung",
                "at": "l3:shared task"
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
          "say": "And the CFPB budgeting guide suggests a support team: family and trusted friends who budget with you, or just listen.",
          "sub": "Trang ngân sách của CFPB khuyên lập một nhóm hỗ trợ: người thân, bạn bè tin cậy cùng lập ngân sách hoặc lắng nghe.",
          "keys": [
            "nhóm hỗ trợ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "First, rent and loan. Second, food. Third, Bin's school. Pen, please.",
          "sub": "Thứ nhất, nhà và khoản vay. Thứ hai, ăn uống. Thứ ba, học của Bin. Đưa em cây bút.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A couple making the spending table together turns a shared worry into a shared task.",
          "sub": "Vợ chồng cùng ngồi làm bảng chi tiêu là biến nỗi lo chung thành việc làm chung.",
          "keys": [
            "việc làm chung"
          ]
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "Cả nhà biết rồi. Giờ ai cũng căng như dây đàn?",
        "illus": "anxious-face-with-sweat"
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
          "say": "Everyone knows now. So should the house go tight as a guitar string?",
          "sub": "Cả nhà biết rồi. Giờ ai cũng phải căng như dây đàn?",
          "keys": [
            "căng như dây đàn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s13",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Thứ Bảy · 23:00 · phòng khách",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "thao",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Huỷ đi chơi, lướt tin đến khuya",
          "why": "Không tìm việc nhanh hơn, mà cả nhà căng như dây đàn.",
          "rule": "Tìm việc giờ cố định, giữ một nếp vui"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Are we still walking in the park tomorrow?",
          "sub": "Mai cả nhà vẫn đi công viên chứ anh?",
          "face": "neutral"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Cancel it! I'm reading job ads all weekend. Don't bother me.",
          "sub": "Huỷ đi! Anh lướt tin tuyển dụng cả cuối tuần. Đừng làm phiền.",
          "pose": "cross",
          "face": "stern",
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
          "say": "Late nights and snapping don't find work faster. Rewind!",
          "sub": "Thức khuya, gắt gỏng không tìm việc nhanh hơn. Tua lại!",
          "keys": [
            "Tua lại"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Fixed hours on weekdays. Sunday afternoon, the park, all three of us.",
          "sub": "Ngày thường anh tìm việc giờ cố định. Chiều chủ nhật, ba người đi công viên.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Deal.",
          "sub": "Chốt nhé.",
          "phase": "redo",
          "face": "happy"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p19"
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
            "at": "l3",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Chủ nhật · Nếp vui",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2888,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "park",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "face": "happy"
                },
                {
                  "id": "bin",
                  "side": "center",
                  "face": "happy",
                  "pose": "thumb"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "kite",
                "sun"
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
            "at": "l1:park",
            "caption": "Chủ nhật · 16:00 · công viên",
            "icon": "kite"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Lịch vui chơi đều đặn",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l3:regular",
            "hl": [
              {
                "text": "đều đặn",
                "at": "l3:regular"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Không tốn tiền: dạo, nấu, chơi",
            "x": 2028,
            "y": 1330,
            "size": 44,
            "at": "l4:walk"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Tìm việc như đi làm",
            "x": 2028,
            "y": 1420,
            "size": 46,
            "at": "l5:like a job",
            "color": "accent",
            "hl": [
              {
                "text": "như đi làm",
                "at": "l5:like a job"
              }
            ]
          },
          {
            "id": "g-3b",
            "t": "text",
            "text": "giờ bắt đầu, kết thúc, vận động",
            "x": 2068,
            "y": 1490,
            "size": 36,
            "at": "l5:start"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Vẫn đưa con đi học như cũ",
            "x": 2028,
            "y": 1560,
            "size": 44,
            "at": "l6:school"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: Sunday afternoon, the park. The take two version.",
          "sub": "Chặng năm: chiều chủ nhật, công viên. Bản đã tua lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Job ads stay on weekdays. Today we fly a kite.",
          "sub": "Tin tuyển dụng để ngày thường. Hôm nay thả diều.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "HelpGuide suggests regular family fun time, to ease tension and keep the mood positive.",
          "sub": "HelpGuide khuyên lên lịch vui chơi cho cả nhà đều đặn, để giảm căng thẳng, giữ không khí tích cực.",
          "keys": [
            "vui chơi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Free things work: a walk, cooking together, a game.",
          "sub": "Việc không tốn tiền vẫn được: đi dạo, nấu một bữa cùng nhau, chơi một trò chơi."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And treat the search like a job, with start times, end times, and exercise.",
          "sub": "Còn bản thân, coi tìm việc như một công việc, có giờ bắt đầu, kết thúc, có giờ vận động.",
          "keys": [
            "như một công việc"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "When Dad still takes Bin to school on time, home still runs normally.",
          "sub": "Khi bố vẫn dậy đúng giờ, đưa con đi học như cũ, con thấy nhà mình vẫn chạy bình thường."
        }
      ],
      "ref": "p17,p18"
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
            "text": "Giữ một nếp vui = giữ chỗ dựa",
            "x": 2028,
            "y": 1690,
            "size": 50,
            "at": "l1:familiar",
            "color": "accent",
            "hl": [
              {
                "text": "chỗ dựa",
                "at": "l1:lean"
              }
            ]
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "không làm tìm việc chậm hơn",
            "x": 2028,
            "y": 1770,
            "size": 40,
            "at": "l2:slower"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Keeping a familiar bit of fun gives the whole family something to lean on.",
          "sub": "Giữ một chút nếp vui quen thuộc là giữ cho cả nhà một chỗ dựa.",
          "keys": [
            "một chỗ dựa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And it doesn't make the job search any slower.",
          "sub": "Mà cũng không làm việc tìm việc chậm hơn."
        }
      ],
      "ref": "p19,p20"
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
            "at": "l4",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 19:00 · Họp nhà 15 phút",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:fifteen"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "kitchen",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "bin",
                  "side": "center",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "alarm-clock",
                "ice-cream"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "bin",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:meeting",
            "caption": "Chủ nhật · 19:00 · bàn bếp",
            "icon": "alarm-clock"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1270,
            "w": 40,
            "h": 40,
            "at": "l2:week",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1254,
            "size": 50,
            "at": "l2:week+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Bố kể tuần qua làm được gì",
            "x": 4058,
            "y": 1260,
            "size": 40,
            "at": "l2:week+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1350,
            "w": 40,
            "h": 40,
            "at": "l3:worry",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1334,
            "size": 50,
            "at": "l3:worry+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Mỗi người một nỗi lo, chỉ nghe",
            "x": 4058,
            "y": 1340,
            "size": 40,
            "at": "l3:worry+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1430,
            "w": 40,
            "h": 40,
            "at": "l4:small",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1414,
            "size": 50,
            "at": "l4:small+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Chọn 1–2 việc nhỏ tuần tới",
            "x": 4058,
            "y": 1420,
            "size": 40,
            "at": "l4:small+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1510,
            "w": 40,
            "h": 40,
            "at": "l5:fun",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1494,
            "size": 50,
            "at": "l5:fun+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Kết bằng một việc vui",
            "x": 4058,
            "y": 1500,
            "size": 40,
            "at": "l5:fun+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: Sunday, seven p.m. A fifteen minute family meeting.",
          "sub": "Chặng sáu: bảy giờ tối chủ nhật. Buổi họp gia đình mười lăm phút.",
          "keys": [
            "mười lăm phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Step one: a parent shares what got done this week in the search.",
          "sub": "Bước một: bố hoặc mẹ kể ngắn tuần qua đã làm được gì trong việc tìm việc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "bin",
          "say": "My worry: are we still going to Grandma's at Tết?",
          "sub": "Con lo là: Tết nhà mình còn về bà không ạ?",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Step two: one worry each, everyone just listens. Step three: one or two small tasks, like cooking at home more.",
          "sub": "Bước hai: mỗi người một nỗi lo, cả nhà chỉ nghe. Bước ba: chọn một hai việc nhỏ, như nấu ăn ở nhà thêm vài bữa."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Step four: end with something fun, agreed in advance. Tonight, ice cream.",
          "sub": "Bước bốn: kết thúc bằng một việc vui đã hẹn trước. Tối nay: kem.",
          "keys": [
            "một việc vui"
          ]
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
            "fit": "H",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "h-k",
            "t": "text",
            "text": "Mỗi người 1 phần việc nhỏ",
            "x": 3996,
            "y": 1630,
            "size": 48,
            "at": "l1:small task",
            "hl": [
              {
                "text": "phần việc nhỏ",
                "at": "l1:small task"
              }
            ]
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "→ lo chung thành kế hoạch chung",
            "x": 3996,
            "y": 1710,
            "size": 44,
            "at": "l1:plan",
            "color": "accent",
            "hl": [
              {
                "text": "kế hoạch chung",
                "at": "l1:shared plan"
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
          "say": "Give everyone a small task, and a shared worry becomes a shared plan.",
          "sub": "Giao cho mỗi người một phần việc nhỏ, nỗi lo chung trở thành kế hoạch chung.",
          "keys": [
            "kế hoạch chung"
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
            "text": "Thứ Hai sau · 18:00",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Monday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 6824,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "automobile",
                "house"
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
            "at": "l1:Monday",
            "caption": "Thứ Hai tuần sau · 18:00 · trước cổng nhà",
            "icon": "house"
          },
          {
            "id": "i-0",
            "t": "text",
            "text": "0 phút trong xe",
            "x": 5964,
            "y": 1260,
            "size": 60,
            "at": "l1:zero",
            "color": "accent",
            "hl": [
              {
                "text": "0 phút",
                "at": "l1:zero"
              }
            ]
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Người thân cũng buồn, cũng sợ",
            "x": 5964,
            "y": 1370,
            "size": 42,
            "at": "l3:sad"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Mở lòng → quan hệ bền hơn",
            "x": 5964,
            "y": 1440,
            "size": 44,
            "at": "l3:stronger",
            "hl": [
              {
                "text": "bền hơn",
                "at": "l3:stronger"
              }
            ]
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Đóng cửa bảo nhau”",
            "x": 5964,
            "y": 1540,
            "size": 54,
            "at": "l5:door",
            "color": "accent",
            "hl": [
              {
                "text": "bảo nhau",
                "at": "l5:together"
              }
            ]
          },
          {
            "id": "i-next",
            "t": "text",
            "text": "Bước tiếp: cùng nhìn con số",
            "x": 5964,
            "y": 1650,
            "size": 44,
            "at": "l6:numbers",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Monday again, six p.m., same gate. This time, zero minutes in the car.",
          "sub": "Lại thứ Hai, sáu giờ tối, vẫn cổng ấy. Lần này, không phút nào ngồi lì trong xe.",
          "keys": [
            "không phút nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Honey, I'm home! Two calls today, one coffee meeting on Wednesday.",
          "sub": "Em ơi, anh về rồi! Hôm nay gọi được hai người, thứ Tư có hẹn cà phê.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Family members may feel angry, scared or sad too. HelpGuide says opening up usually makes relationships stronger.",
          "sub": "Người thân cũng có thể giận, sợ hay buồn. HelpGuide nhắc mở lòng thường làm các mối quan hệ bền hơn.",
          "keys": [
            "bền hơn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And asking for help doesn't make you a burden.",
          "sub": "Và nhờ người khác giúp không biến bạn thành gánh nặng.",
          "keys": [
            "không biến bạn thành gánh nặng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Close the door and sort it out together. Now the door opens on a team.",
          "sub": "“Đóng cửa bảo nhau.” Giờ cánh cửa mở ra là cả một đội.",
          "keys": [
            "cả một đội"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next step, together: the numbers. How will next month's spending change?",
          "sub": "Bước tiếp, cùng nhau: nhìn vào con số. Chi tiêu tháng tới sẽ thay đổi thế nào?"
        }
      ],
      "ref": "p21"
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
            "at": "l1:So",
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
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "J",
            "ms": 1000
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tóm lại · làm ngay",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l5:points"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 7464,
            "y": 40,
            "at": "l2:spouse"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9432,
            "y": 40,
            "at": "l3:kids"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3528,
            "y": 1130,
            "at": "l4:fun"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Tối nay: nói theo 3 ý",
            "x": 7932,
            "y": 1270,
            "size": 50,
            "at": "l5:three",
            "color": "accent",
            "hl": [
              {
                "text": "3 ý",
                "at": "l5:three"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Hẹn họp nhà 15 phút cuối tuần",
            "x": 7932,
            "y": 1350,
            "size": 46,
            "at": "l5:meeting"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Bài tiếp: cắt giảm chi tiêu",
            "x": 7932,
            "y": 1430,
            "size": 44,
            "at": "l6:Next"
          },
          {
            "id": "j-src",
            "t": "text",
            "text": "Bài để tham khảo; quy định có thể thay đổi — khi cần áp dụng, kiểm lại với cơ quan/chuyên gia. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1780,
            "size": 26,
            "at": "l6",
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
          "say": "So, in short.",
          "sub": "Tóm lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Tell your spouse early, honestly, fully.",
          "sub": "Nói sớm, nói thật, nói đủ với vợ hoặc chồng.",
          "keys": [
            "nói đủ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Tell your kids at their size, and say it's nobody's fault.",
          "sub": "Nói vừa sức với con, và nói rõ không phải lỗi của ai.",
          "keys": [
            "Nói vừa sức với con"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Give everyone a small task, and keep one familiar bit of fun.",
          "sub": "Cho mỗi người một phần việc nhỏ, giữ một nếp vui quen thuộc.",
          "keys": [
            "một nếp vui quen thuộc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Tonight: talk using the three points, and book a fifteen minute family meeting this weekend.",
          "sub": "Việc làm ngay: tối nay nói theo ba ý, hẹn họp gia đình mười lăm phút cuối tuần.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next: cutting family spending without a salary.",
          "sub": "Bài tiếp: cắt giảm chi tiêu gia đình khi không còn lương."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s20",
      "module": "QUIZ-01",
      "data": {
        "q": "Your son becomes quiet after hearing you talk about bills, what should you do?",
        "options": [
          "Tell him to go to his room because money is an adult topic only",
          "Sit with him, explain simply what happened, and say it is nobody's fault",
          "Ignore it, since children always get over such moods without help"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "people-hugging",
        "why": "Im lặng để con tự đoán; nói vừa sức và nói rõ không phải lỗi của ai."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Your son becomes quiet after hearing you talk about bills, what should you do?",
          "sub": "Con trai trở nên im lặng sau khi nghe bạn nói chuyện hoá đơn, bạn nên làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Sit with him, explain simply what happened, and say it is nobody's fault.",
          "sub": "Ngồi với con, giải thích đơn giản, nói rõ không phải lỗi của ai."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Silence leaves children to guess.",
          "sub": "Im lặng chỉ để con tự đoán."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[22]"
    },
    {
      "id": "s21",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Nói với gia đình sau khi mất việc"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting below.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ ngay bên dưới.",
          "face": "happy"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-22",
  "notes": "#145 bài MỚI (bài 2 chuỗi laid-off-at-40) theo hạt nhân (#136) + biến thể edit (#144). HOOK-22 (câu thoại bị cắt): Dũng tập trong xe “Em ơi, hôm nay công ty…” → cắt → nói trọn ở đầu ô C (≈ giây 50) → bản đầy đủ ở BRK-04 Trước/Sau + s06 (✍️ p7). Dòng thời gian: MỘT TUẦN từ tối nói thật: thứ Hai 18:00 trong xe (intro) → 18:15 vì sao muốn giấu, hiểu lầm (p1–p4) → 18:30 phòng khách, Thảo, 3 việc HelpGuide, nghe hết đã (p5–p8; BRK-04 Trước/Sau) → thứ Năm 20:00 Bé Bin hỏi chuyện học vẽ (vai bé Linh + anh Tuấn p9–p11; BRK-02 rút ra p12) → thứ Sáu bàn bếp, con góp phần, nhóm hỗ trợ CFPB (p13, p14) → BRK-07 rehook → DLG “Khoan đã!” thứ Bảy Cách A huỷ đi chơi, gắt (vai chị Mai p19, do Dũng đóng) → chủ nhật chiều công viên, nếp vui, tìm việc như đi làm (p17–p20) → chủ nhật 19:00 họp nhà 15 phút 4 bước (p15, p16) → thứ Hai sau 18:00 cùng cổng, “0 phút trong xe”, khép vòng (p21) → tóm tắt + lưu ý #133. Nhân vật theo w145/_series/laid-off-at-40.md: Dũng (= anh Tuấn p11, chị Mai p19), Thảo (vợ), Bé Bin (= bé Linh, 12 tuổi → 9 tuổi trong chuỗi; “đòi học thêm” → “học thêm vẽ”). Chi tiết minh hoạ tự đặt, không phải số liệu: thả diều, kem, Tết về bà, “hai cuộc gọi, hẹn cà phê thứ Tư”. Số chỉ từ bài: 15 phút trong xe, ngoài 40 tuổi, 3 việc, 15 phút họp, 4 bước. Ca dao neo: “Đóng cửa bảo nhau”. Câu đố questions[22].",
  "loop": {
    "open": "s00",
    "close": "s18"
  }
};
