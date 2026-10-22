// call-back-rule-for-families--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "call-back-rule-for-families--w01",
  "hook": "HOOK-25",
  "unit": {
    "audience": "children-protecting-parents-from-scams",
    "slug": "call-back-rule-for-families",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Lập 'quy tắc gọi lại cho con' trong gia đình thế nào?",
    "series": "Giữ cha mẹ khỏi bẫy lừa qua điện thoại — cho con cái dạy cha mẹ nhận ra và xử lý"
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
            "id": "a-lb",
            "t": "text",
            "text": "Câu nhớ",
            "x": 60,
            "y": 60,
            "size": 44,
            "at": "l1",
            "color": "muted"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "Hễ ai đòi mã đòi tiền",
            "x": 60,
            "y": 130,
            "size": 92,
            "at": "l1:Cash",
            "hl": [
              {
                "text": "đòi mã đòi tiền",
                "at": "l1:code"
              }
            ]
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "Thì ta cúp máy,",
            "x": 60,
            "y": 250,
            "size": 80,
            "at": "l1:Hang",
            "color": "accent",
            "hl": [
              {
                "text": "cúp máy",
                "at": "l1:Hang"
              }
            ]
          },
          {
            "id": "a-2b",
            "t": "text",
            "text": "gọi liền cho con",
            "x": 160,
            "y": 350,
            "size": 80,
            "at": "l1:child",
            "color": "accent"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "Dặn “cẩn thận nhé” → quên",
            "x": 70,
            "y": 500,
            "size": 54,
            "at": "l3:careful",
            "color": "muted"
          },
          {
            "id": "a-3x",
            "t": "strike",
            "over": "a-3",
            "at": "l3:forgotten"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Cash or code on the line? Hang up, call your child, you're fine.",
          "sub": "Hễ ai đòi mã đòi tiền, / Thì ta cúp máy, gọi liền cho con.",
          "keys": [
            "cúp máy, gọi liền cho con"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two lines. Easy to remember, even in a panic.",
          "sub": "Hai câu. Dễ nhớ, kể cả lúc đang hoảng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Unlike be careful, Mum, which is forgotten the moment a scary call comes in.",
          "sub": "Khác với “cẩn thận nhé mẹ”, câu dặn quên sạch đúng lúc cuộc gọi đáng sợ đến."
        }
      ],
      "ref": "p1,p6"
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
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "tu",
                  "side": "center",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "thumb"
                }
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "binh",
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
            "caption": "Thứ Bảy · 8:00 · Dũng về quê",
            "icon": "house"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy”",
            "x": 60,
            "y": 600,
            "size": 60,
            "at": "l5:Caution",
            "color": "accent",
            "hl": [
              {
                "text": "vô áy náy",
                "at": "l5:regret"
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
          "say": "Meet Dũng, the younger son, home for the weekend.",
          "sub": "Đây là Dũng, con trai út, về quê cuối tuần.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "He has told his parents, Bà Tư and Bác Bình, all about scams.",
          "sub": "Cậu đã kể hết các kiểu lừa cho bố mẹ, bà Tư và bác Bình, nghe."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "We know, we know. Scams. We've heard it all.",
          "sub": "Biết rồi, biết rồi. Lừa đảo chứ gì. Nghe cả rồi.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But will they remember anything when bad news rings? Dũng isn't sure.",
          "sub": "Nhưng lúc có tin dữ gọi đến, bố mẹ có nhớ gì không? Dũng không chắc."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Caution never brings regret, our elders say. So today, a family rule.",
          "sub": "Ông bà dặn: “Cẩn tắc vô áy náy.” Vậy hôm nay, lập một quy tắc của nhà.",
          "keys": [
            "Cẩn tắc vô áy náy"
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
            "text": "Lập quy tắc gọi lại thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:set",
            "hl": [
              {
                "text": "gọi lại",
                "at": "l1:call"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Kẻ gian cố làm ta hoảng",
            "x": 2028,
            "y": 160,
            "size": 52,
            "at": "l2:panic",
            "color": "coral"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Bình tĩnh + liên hệ người thân",
            "x": 2028,
            "y": 250,
            "size": 50,
            "at": "l3:calm",
            "hl": [
              {
                "text": "liên hệ người thân",
                "at": "l3:contact"
              }
            ]
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Không phải: lời dặn chung chung",
            "x": 2028,
            "y": 360,
            "size": 50,
            "at": "l4:warning",
            "color": "muted"
          },
          {
            "id": "b-3x",
            "t": "strike",
            "over": "b-3",
            "at": "l4:warning+500"
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "Mà là: quy tắc → phản xạ",
            "x": 2028,
            "y": 450,
            "size": 58,
            "at": "l4:reflex",
            "color": "accent",
            "hl": [
              {
                "text": "phản xạ",
                "at": "l4:reflex"
              }
            ]
          },
          {
            "id": "b-5",
            "t": "text",
            "text": "Luật chung của nhà → đỡ ngại",
            "x": 2028,
            "y": 560,
            "size": 50,
            "at": "l5:shared",
            "hl": [
              {
                "text": "đỡ ngại",
                "at": "l5:awkward"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Bộ Công an, Cổng TTĐT Chính phủ (16/03/2023)",
            "x": 2028,
            "y": 720,
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
          "say": "So how do you set up a call back rule in the family?",
          "sub": "Vậy lập “quy tắc gọi lại cho con” trong gia đình thế nào?",
          "keys": [
            "quy tắc gọi lại cho con"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Scammers make people panic on purpose.",
          "sub": "Kẻ gian cố tình làm người nghe hoảng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The police advice: stay calm, don't panic, contact family for advice.",
          "sub": "Bộ Công an khuyến cáo: giữ bình tĩnh, không hoang mang, liên hệ người thân để được tư vấn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not a vague warning, but a short rule the family agrees on. It turns that advice into a reflex.",
          "sub": "Không phải lời dặn chung chung, mà là một quy tắc ngắn cả nhà thống nhất, biến khuyến cáo thành phản xạ.",
          "keys": [
            "phản xạ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And a shared rule feels less awkward. Hanging up isn't distrust, it's what we agreed.",
          "sub": "Luật chung còn giúp cha mẹ đỡ ngại: cúp máy không phải “con không tin mẹ”, mà là làm đúng điều cả nhà đã hẹn.",
          "keys": [
            "đỡ ngại"
          ]
        }
      ],
      "ref": "p1,p2"
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
            "at": "l5",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 8:00 · Ba câu, chữ to",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:three"
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
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "memo",
                "telephone"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:writes",
            "caption": "Thứ Bảy · 8:00 · tờ giấy A4",
            "icon": "memo"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "1. Cúp máy",
            "x": 3996,
            "y": 170,
            "size": 64,
            "at": "l2:hang",
            "color": "accent",
            "hl": [
              {
                "text": "Cúp máy",
                "at": "l2:hang"
              }
            ]
          },
          {
            "id": "c-1b",
            "t": "text",
            "text": "đòi tiền, đòi mã, tin dữ",
            "x": 4036,
            "y": 255,
            "size": 40,
            "at": "l2:money",
            "color": "muted"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "2. Gọi Dũng hoặc Thảo",
            "x": 3996,
            "y": 320,
            "size": 56,
            "at": "l3:Call",
            "hl": [
              {
                "text": "Gọi Dũng",
                "at": "l3:Call"
              }
            ]
          },
          {
            "id": "c-2b",
            "t": "text",
            "text": "số đã lưu, không bấm số lạ",
            "x": 4036,
            "y": 395,
            "size": 40,
            "at": "l3:saved",
            "color": "muted"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "3. Chưa gọi được: chưa chuyển",
            "x": 3996,
            "y": 460,
            "size": 50,
            "at": "l4:Until",
            "color": "coral"
          },
          {
            "id": "c-3b",
            "t": "text",
            "text": "chưa đọc mã, chưa cài gì",
            "x": 4036,
            "y": 530,
            "size": 40,
            "at": "l4:codes",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, Saturday eight a.m. Dũng writes three sentences in big letters on one sheet.",
          "sub": "Chặng một, tám giờ sáng thứ Bảy. Dũng viết ba câu bằng chữ to lên một tờ giấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "One. Someone asks for money or codes, or brings bad news? Hang up.",
          "sub": "Một. Ai đòi tiền, đòi mã hay báo tin dữ về người thân? Cúp máy.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Two. Call Dũng or Thảo, on the saved number. Never a number the caller gives.",
          "sub": "Hai. Gọi Dũng hoặc chị Thảo, bằng số đã lưu. Không bấm số người gọi đưa."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Three. Until you reach us: no transfer, no codes, no installing anything.",
          "sub": "Ba. Chưa gọi được cho con thì chưa chuyển tiền, chưa đọc mã, chưa cài gì."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then he saves both numbers with clear names, rings each one to test, and tapes the sheet by Mum's chair.",
          "sub": "Rồi lưu số mình và số chị với tên dễ thấy, bấm thử cho đổ chuông, dán tờ giấy cạnh chỗ mẹ hay ngồi nghe điện thoại."
        }
      ],
      "ref": "p3,p5"
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
            "id": "c-4",
            "t": "text",
            "text": "Thật: mất vài phút",
            "x": 3996,
            "y": 590,
            "size": 46,
            "at": "l1:real",
            "hl": [
              {
                "text": "vài phút",
                "at": "l1:minutes"
              }
            ]
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "Giả: giữ cả khoản tiền",
            "x": 3996,
            "y": 652,
            "size": 46,
            "at": "l1:fake",
            "color": "accent",
            "hl": [
              {
                "text": "cả khoản tiền",
                "at": "l1:savings"
              }
            ]
          },
          {
            "id": "c-6",
            "t": "text",
            "text": "Đọc trong 5 giây",
            "x": 4836,
            "y": 690,
            "size": 52,
            "at": "l3:five",
            "color": "accent",
            "hl": [
              {
                "text": "5 giây",
                "at": "l3:five"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: hội thảo TPHCM, 08/03/2026",
            "x": 3996,
            "y": 730,
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
          "say": "If the story is real, checking costs a few minutes. If it's fake, those minutes save the savings.",
          "sub": "Nếu chuyện là thật, gọi lại chỉ mất vài phút. Nếu là giả, vài phút đó giữ được cả khoản tiền.",
          "keys": [
            "giữ được cả khoản tiền"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A twenty twenty-six seminar agrees: verify through official channels or the police, never through the caller.",
          "sub": "Hội thảo tại TPHCM năm 2026 cũng khuyên: xác minh qua kênh chính thức hoặc công an, không qua chính người đang gọi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: readable in five seconds, usable even in a panic.",
          "sub": "Rút ra: quy tắc phải đọc được trong năm giây, làm được cả khi đang hoảng.",
          "keys": [
            "năm giây"
          ]
        }
      ],
      "ref": "p4,p6"
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
            "text": "② 10:00 · Câu hỏi bí mật",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:secret",
            "hl": [
              {
                "text": "bí mật",
                "at": "l1:secret"
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
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "left"
                },
                {
                  "id": "tu",
                  "side": "right",
                  "face": "thinking",
                  "pose": "think"
                }
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "tu",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2:borrowed",
            "caption": "Thứ Bảy · 10:00 · chọn câu hỏi",
            "icon": "red-question-mark"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "“Con mất máy, mượn máy bạn”",
            "x": 5964,
            "y": 170,
            "size": 46,
            "at": "l2:lost",
            "color": "coral"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Giả giọng, giả mặt, Deepfake",
            "x": 5964,
            "y": 255,
            "size": 46,
            "at": "l2:faces",
            "color": "coral",
            "hl": [
              {
                "text": "Deepfake",
                "at": "l2:Deepfake"
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
          "say": "Stop two, ten a.m. Calling back on a saved number is the main shield. Now the secret question.",
          "sub": "Chặng hai, mười giờ. Gọi lại số đã lưu là lớp bảo vệ chính. Giờ thêm câu hỏi bí mật."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Some scammers say: I lost my phone, I borrowed a friend's. And they fake voices, faces, even Deepfake video calls.",
          "sub": "Có kẻ gọi số lạ, nói “con mất điện thoại, mượn máy bạn”. Chúng còn giả giọng, giả nhân dạng, gọi video Deepfake."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "tu",
          "say": "So I ask something only my real son would know?",
          "sub": "Vậy mẹ hỏi điều chỉ con thật mới biết à?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Exactly. Something not on social media, not on any paper.",
          "sub": "Đúng thế. Điều không có trên mạng xã hội, không đoán được từ giấy tờ.",
          "keys": [
            "không có trên mạng xã hội"
          ]
        }
      ],
      "ref": "p7,p8"
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
            "id": "d-3",
            "t": "text",
            "text": "Nên: tên chó cũ, món mẹ nấu",
            "x": 5964,
            "y": 360,
            "size": 42,
            "at": "l1:dog",
            "color": "accent",
            "hl": [
              {
                "text": "món mẹ nấu",
                "at": "l1:cooked"
              }
            ]
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "Tránh: ngày sinh, tên trường, quê",
            "x": 5964,
            "y": 440,
            "size": 42,
            "at": "l2:birthdays",
            "color": "coral"
          },
          {
            "id": "d-5",
            "t": "text",
            "text": "Lỡ nói trước người lạ → đổi câu",
            "x": 5964,
            "y": 530,
            "size": 42,
            "at": "l3:stranger",
            "hl": [
              {
                "text": "đổi câu",
                "at": "l3:change"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Công văn 847/BCA-V01 (2026) — Thư viện Pháp luật; hội thảo TPHCM (2026)",
            "x": 5964,
            "y": 728,
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
          "say": "Like the name of the old family dog, or the dish Mum cooked when he was sick.",
          "sub": "Ví dụ tên con chó ngày xưa, hay món mẹ hay nấu khi con ốm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Avoid birthdays, school names and home towns. Too easy to look up.",
          "sub": "Tránh ngày sinh, tên trường, tên quê, vì dễ tra ra."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Said the answer in front of a stranger? Change the question.",
          "sub": "Lỡ nói câu trả lời trước người lạ? Đổi câu khác.",
          "keys": [
            "Đổi câu khác"
          ]
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s07",
      "module": "BRK-04",
      "data": {
        "title": "Hỏi sao cho ra con thật",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Con là Dũng phải không?",
        "right": "Hồi bé con hay đòi mẹ nấu món gì khi ốm?",
        "wrongIllus": "red-question-mark",
        "rightIllus": "pot-of-food"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: is that you, Dũng? Yes, it's me.",
          "sub": "Trước: “Con là Dũng phải không?” “Dạ, con đây.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: what did Mum cook when you were sick?",
          "sub": "Sau: “Hồi bé con hay đòi mẹ nấu món gì khi ốm?”",
          "keys": [
            "món gì khi ốm"
          ]
        }
      ],
      "ref": "p9"
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
            "id": "d-k",
            "t": "text",
            "text": "Đừng hỏi câu “dạ phải”",
            "x": 5964,
            "y": 620,
            "size": 54,
            "at": "l1:yes",
            "color": "accent",
            "hl": [
              {
                "text": "“dạ phải”",
                "at": "l1:yes"
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
          "say": "Takeaway: never ask a question that only needs a yes. Ask what only your family knows.",
          "sub": "Rút ra: đừng hỏi câu người gọi chỉ cần đáp “dạ phải”; hãy hỏi điều chỉ nhà mình biết.",
          "keys": [
            "điều chỉ nhà mình biết"
          ]
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
            "fit": "D",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "E",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 15:00 · Đang nghe máy",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:three"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "“Không được cúp, không kể ai”",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l2:hang",
            "color": "coral"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Vừa nghe vừa chuyển = dễ sai nhất",
            "x": 7932,
            "y": 260,
            "size": 46,
            "at": "l3:easiest",
            "hl": [
              {
                "text": "dễ sai nhất",
                "at": "l3:easiest"
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
          "say": "Stop three, three p.m. A drill call for Bà Tư.",
          "sub": "Chặng ba, ba giờ chiều. Một cuộc gọi tập dượt cho bà Tư."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Scammers keep you on the line: don't hang up, don't tell anyone. With threats, the police warn.",
          "sub": "Kẻ gian giữ máy thật lâu: không được cúp, không được kể với ai. Bộ Công an cảnh báo chúng dùng lời đe doạ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Transferring while listening is the easiest moment to get it wrong. No second to think.",
          "sub": "Vừa nghe máy vừa chuyển tiền là lúc dễ sai nhất, không có giây nào để nghĩ.",
          "keys": [
            "lúc dễ sai nhất"
          ]
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "15:00 · “bệnh viện” gọi",
        "actors": [
          {
            "id": "tu",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Vừa giữ máy vừa mở ứng dụng ngân hàng",
          "why": "Làm theo từng lời người lạ đọc, không còn giây nào để hỏi ai.",
          "rule": "Cúp máy trước, rồi mới nghĩ chuyện tiền"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "tu",
          "say": "My grandson needs surgery, they say. Opening the bank app now.",
          "sub": "Bên bệnh viện bảo cháu cần mổ gấp. Mẹ vừa nghe vừa mở ứng dụng ngân hàng đây.",
          "face": "worried",
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
          "say": "Following a stranger step by step, phone in one hand, bank in the other.",
          "sub": "Làm theo từng lời người lạ, tay giữ máy, tay mở ngân hàng."
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
          "who": "tu",
          "say": "Let me call you back. Click. Now, Thảo, on the saved number.",
          "sub": "Để tôi gọi lại. Cạch. Giờ gọi Thảo, số đã lưu.",
          "phase": "redo",
          "face": "neutral"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Hang up first, then think about money. Never the other way.",
          "sub": "Cúp máy trước, rồi mới nghĩ chuyện tiền. Không bao giờ ngược lại.",
          "phase": "redo",
          "keys": [
            "Cúp máy trước"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p12,p13"
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
                  "id": "tu",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "happy"
                }
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
            "at": "l1",
            "caption": "15:05 · gọi Thảo",
            "icon": "telephone-receiver"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Cúp máy trước → tiền sau",
            "x": 7932,
            "y": 400,
            "size": 58,
            "at": "l3:first",
            "color": "accent",
            "hl": [
              {
                "text": "Cúp máy trước",
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
          "say": "Meet Thảo, the elder sister in the city, on the other end.",
          "sub": "Còn đây là Thảo, chị gái ở thành phố, đầu dây bên kia.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Bin is at school, Mum, perfectly fine. And you passed the test!",
          "sub": "Bin đang ở trường, khoẻ re mẹ ạ. Mà mẹ qua bài tập rồi!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hang up first. Money talk comes after, if ever.",
          "sub": "Cúp máy trước. Chuyện tiền tính sau, nếu có."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p12,p13"
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
            "text": "④ 19:00 · Danh sách số",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:list"
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
                  "id": "binh",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "memo",
                "telephone"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:list",
            "caption": "Thứ Bảy · 19:00 · sổ ghi số",
            "icon": "memo"
          },
          {
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l3:children",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1242,
            "size": 56,
            "at": "l3:children+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "Số các con",
            "x": 125,
            "y": 1252,
            "size": 46,
            "at": "l3:children+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1350,
            "w": 44,
            "h": 44,
            "at": "l3:neighbour",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1332,
            "size": 56,
            "at": "l3:neighbour+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "Người thân, hàng xóm gần",
            "x": 125,
            "y": 1342,
            "size": 46,
            "at": "l3:neighbour+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1440,
            "w": 44,
            "h": 44,
            "at": "l4:hotline",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1422,
            "size": 56,
            "at": "l4:hotline+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "Đường dây nóng ngân hàng",
            "x": 125,
            "y": 1432,
            "size": 46,
            "at": "l4:hotline+200"
          },
          {
            "id": "f-c3",
            "t": "box",
            "x": 60,
            "y": 1530,
            "w": 44,
            "h": 44,
            "at": "l5:police",
            "stroke": 5
          },
          {
            "id": "f-k3",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1512,
            "size": 56,
            "at": "l5:police+600",
            "color": "accent"
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "Công an xã, phường",
            "x": 125,
            "y": 1522,
            "size": 46,
            "at": "l5:police+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four, seven p.m. Dũng and his dad make the list of numbers to keep.",
          "sub": "Chặng bốn, bảy giờ tối. Dũng và bố lập danh sách số cần nhớ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Your numbers I know. What if neither of you picks up?",
          "sub": "Số hai đứa thì bố biết. Nhỡ gọi không đứa nào nghe thì sao?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Besides the children: a trusted relative or neighbour nearby.",
          "sub": "Ngoài số các con: một người thân hoặc hàng xóm tin cậy ở gần."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The hotline of your parents' bank.",
          "sub": "Số đường dây nóng của ngân hàng cha mẹ dùng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And the commune or ward police where they live.",
          "sub": "Và số công an xã, phường nơi cha mẹ ở."
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s13",
      "module": "BRK-09",
      "data": {
        "kind": "Nguồn",
        "title": "Thông tư 50/2024/TT-NHNN",
        "detail": "Ngân hàng cung cấp đầu mối, đường dây nóng cho khách",
        "illus": "bank",
        "around": [
          "telephone",
          "page-facing-up"
        ],
        "icon": "landmark"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The bank hotline? It's required.",
          "sub": "Đường dây nóng ngân hàng? Có quy định hẳn hoi."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Banks must give customers a hotline.",
          "sub": "Ngân hàng phải cung cấp đường dây nóng cho khách.",
          "keys": [
            "đường dây nóng"
          ]
        }
      ],
      "ref": "p14"
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
            "id": "f-5",
            "t": "text",
            "text": "+ địa chỉ công an gần nhà",
            "x": 60,
            "y": 1630,
            "size": 46,
            "at": "l1:address",
            "hl": [
              {
                "text": "địa chỉ",
                "at": "l1:address"
              }
            ]
          },
          {
            "id": "f-6",
            "t": "text",
            "text": "Viết ra giấy, không chỉ lưu máy",
            "x": 60,
            "y": 1720,
            "size": 50,
            "at": "l3:paper",
            "color": "accent",
            "hl": [
              {
                "text": "Viết ra giấy",
                "at": "l3:paper"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Công an Thái Nguyên (05/02/2026); Thư viện Pháp luật (20/11/2024)",
            "x": 900,
            "y": 1810,
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
          "say": "Thái Nguyên police advise: for paperwork, go to the station in person. Suspicious? Report to the nearest police. So keep their address too.",
          "sub": "Công an Thái Nguyên khuyên: làm thủ tục thì đến trực tiếp trụ sở; nghi ngờ thì báo ngay công an gần nhất. Nên ghi cả địa chỉ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "And if the phone is dead?",
          "sub": "Thế máy hết pin thì sao?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "That's why the list goes on paper, not just in the phone.",
          "sub": "Vì vậy danh sách phải viết ra giấy, không chỉ lưu trong máy.",
          "keys": [
            "viết ra giấy"
          ]
        }
      ],
      "ref": "p15,p16"
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Chủ nhật · Tập dượt",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday"
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
                  "side": "left",
                  "pose": "phone",
                  "face": "stern"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "props": [
                "telephone"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:plays",
            "caption": "Chủ nhật · 9:00 · Dũng đóng vai",
            "icon": "telephone"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Đóng vai người gọi lạ",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l1:stranger"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "→ cúp máy, gọi lại",
            "x": 2068,
            "y": 1340,
            "size": 50,
            "at": "l3:hanging",
            "color": "accent"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Thường xuyên, mỗi lần về thăm",
            "x": 2028,
            "y": 1450,
            "size": 46,
            "at": "l4:regularly",
            "hl": [
              {
                "text": "Thường xuyên",
                "at": "l4:regularly"
              }
            ]
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "+ sinh hoạt cộng đồng",
            "x": 2028,
            "y": 1535,
            "size": 46,
            "at": "l5:community"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Công an tỉnh Phú Thọ, Cổng TTĐT Chính phủ (22/06/2026)",
            "x": 2028,
            "y": 1818,
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
          "say": "Stop five, Sunday morning. A rule works only if you try it. Dũng plays the stranger.",
          "sub": "Chặng năm, sáng Chủ nhật. Quy tắc chỉ có tác dụng khi được dùng thử. Dũng đóng vai người gọi lạ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Hello, this is the police. Your account is in a case. Don't tell your children!",
          "sub": "A lô, công an đây. Tài khoản bác liên quan vụ án. Không được kể với con cái!",
          "face": "stern"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Threats and secrets? I'm hanging up, young man. Calling my son.",
          "sub": "Doạ lại còn bắt giữ bí mật? Tôi cúp máy đây. Gọi con trai tôi.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Phú Thọ police advise families to regularly guide older people on new tricks. A few minutes each visit.",
          "sub": "Công an Phú Thọ khuyến cáo gia đình thường xuyên hướng dẫn người cao tuổi nhận diện thủ đoạn mới. Mỗi lần về, vài phút."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And to encourage community activities, for reliable information.",
          "sub": "Và khuyến khích người cao tuổi sinh hoạt cộng đồng để tiếp cận thông tin chính thống."
        }
      ],
      "ref": "p17"
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
            "text": "⑥ Chủ nhật tối · Hai chiều",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:ways",
            "hl": [
              {
                "text": "Hai chiều",
                "at": "l1:ways"
              }
            ]
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
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "mobile-phone",
                "money-with-wings"
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
            "at": "l1:back",
            "caption": "Chủ nhật · 21:00 · phòng trọ",
            "icon": "mobile-phone"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Tin “mẹ” mượn tiền",
            "x": 3996,
            "y": 1260,
            "size": 50,
            "at": "l2:borrow",
            "color": "coral"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "→ con cũng gọi lại mẹ",
            "x": 4036,
            "y": 1345,
            "size": 50,
            "at": "l3:calls",
            "color": "accent",
            "hl": [
              {
                "text": "gọi lại mẹ",
                "at": "l3:calls"
              }
            ]
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Cha mẹ gọi hỏi → cảm ơn, khen",
            "x": 3996,
            "y": 1470,
            "size": 46,
            "at": "l4:thank",
            "hl": [
              {
                "text": "cảm ơn, khen",
                "at": "l4:praise"
              }
            ]
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "“Chuyện thế mà cũng hỏi”",
            "x": 3996,
            "y": 1560,
            "size": 46,
            "at": "l5:laugh",
            "color": "muted"
          },
          {
            "id": "h-4x",
            "t": "strike",
            "over": "h-4",
            "at": "l5:again"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, Sunday night, back in the city. The rule works both ways.",
          "sub": "Chặng sáu, tối Chủ nhật, Dũng đã về phòng trọ. Quy tắc đi hai chiều."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "A message from Mum's account: borrow some money, urgent?",
          "sub": "Tin nhắn từ tài khoản của mẹ: mượn ít tiền, gấp?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So Dũng calls Mum back, too. Same rule.",
          "sub": "Vậy Dũng cũng gọi lại cho mẹ. Đúng quy tắc.",
          "keys": [
            "gọi lại cho mẹ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And when parents call to ask, even about something small, thank them and praise them.",
          "sub": "Còn khi cha mẹ gọi hỏi, dù chuyện nhỏ, hãy cảm ơn và khen.",
          "keys": [
            "cảm ơn và khen"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Laugh at the question, and next time they may not call again.",
          "sub": "Cười “chuyện thế mà cũng hỏi”, lần sau cha mẹ có thể ngại không gọi nữa."
        }
      ],
      "ref": "p18"
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
            "text": "⑦ Thứ Tư sau · Số lạ gọi",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Wednesday"
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
                  "id": "tu",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "telephone",
                "red-question-mark"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "tu",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:number",
            "caption": "Thứ Tư tuần sau · 11:00",
            "icon": "telephone"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "“Con mất máy, mượn máy bạn”",
            "x": 5964,
            "y": 1260,
            "size": 46,
            "at": "l1:lost",
            "color": "coral"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Câu hỏi bí mật → im lặng",
            "x": 5964,
            "y": 1350,
            "size": 48,
            "at": "l3:silence",
            "hl": [
              {
                "text": "im lặng",
                "at": "l3:silence"
              }
            ]
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "→ cúp máy, gọi Dũng",
            "x": 6004,
            "y": 1440,
            "size": 54,
            "at": "l4:Dũng",
            "color": "accent",
            "hl": [
              {
                "text": "gọi Dũng",
                "at": "l4:Dũng"
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
          "say": "Next Wednesday, for real. A strange number: Mum, I lost my phone, I'm on a friend's.",
          "sub": "Thứ Tư tuần sau, chuyện thật. Một số lạ: “Mẹ ơi, con mất điện thoại, mượn máy bạn gọi.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "tu",
          "say": "Then tell me: what did I cook when you were sick?",
          "sub": "Thế con nói mẹ nghe: hồi bé ốm, con hay đòi mẹ nấu món gì?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Silence. Then the line goes dead.",
          "sub": "Im lặng. Rồi tắt máy."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "tu",
          "say": "Thought so. Now I call the real Dũng, on the saved number.",
          "sub": "Biết ngay mà. Giờ gọi Dũng thật, số đã lưu.",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhac-chuong",
          "offsetMs": 0
        }
      ],
      "ref": "p7,p9"
    },
    {
      "id": "s18",
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
            "text": "Câu nhớ, lần nữa",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:lines"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Hễ ai đòi mã đòi tiền",
            "x": 7932,
            "y": 1250,
            "size": 64,
            "at": "l2:Cash",
            "hl": [
              {
                "text": "đòi mã đòi tiền",
                "at": "l2:code"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Thì ta cúp máy,",
            "x": 7932,
            "y": 1340,
            "size": 60,
            "at": "l2:Hang",
            "color": "accent"
          },
          {
            "id": "j-2b",
            "t": "text",
            "text": "gọi liền cho con",
            "x": 8432,
            "y": 1340,
            "size": 60,
            "at": "l2:child",
            "color": "accent",
            "hl": [
              {
                "text": "gọi liền cho con",
                "at": "l2:fine"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy” ✓",
            "x": 7932,
            "y": 1450,
            "size": 52,
            "at": "l3:Caution",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Same two lines Dũng taped by the chair.",
          "sub": "Vẫn hai câu Dũng dán cạnh ghế."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Cash or code on the line? Hang up, call your child, you're fine.",
          "sub": "Hễ ai đòi mã đòi tiền, / Thì ta cúp máy, gọi liền cho con.",
          "keys": [
            "gọi liền cho con"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Caution never brings regret. This time, Mum has no regrets at all.",
          "sub": "“Cẩn tắc vô áy náy.” Lần này mẹ chẳng phải áy náy gì.",
          "keys": [
            "Cẩn tắc vô áy náy"
          ]
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s19",
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
            "at": "l1:three",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:question",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:paper",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l4:weekend",
            "fit": "J",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4696,
            "y": 170,
            "at": "l1:three"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6664,
            "y": 170,
            "at": "l2:question"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 760,
            "y": 1260,
            "at": "l3:paper"
          },
          {
            "id": "j-do",
            "t": "text",
            "text": "Cuối tuần: viết 3 câu, lưu số",
            "x": 7932,
            "y": 1560,
            "size": 46,
            "at": "l4:weekend",
            "hl": [
              {
                "text": "3 câu",
                "at": "l4:three"
              }
            ]
          },
          {
            "id": "j-do2",
            "t": "text",
            "text": "→ cùng chọn câu hỏi bí mật",
            "x": 7972,
            "y": 1635,
            "size": 42,
            "at": "l4:secret"
          },
          {
            "id": "j-nx",
            "t": "text",
            "text": "Bài tiếp: điều ngân hàng không đòi",
            "x": 7932,
            "y": 1720,
            "size": 40,
            "at": "l5:Next",
            "color": "accent"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi học; quy định có thể thay đổi — khi cần áp dụng, kiểm lại với cơ quan/chuyên gia. Nhân vật là minh hoạ.",
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
          "say": "So: three sentences. Hang up, call back on a saved number, no money or codes until you reach your child.",
          "sub": "Tóm lại, ba câu: cúp máy, gọi lại bằng số đã lưu, chưa gọi được thì chưa chuyển tiền hay đọc mã.",
          "keys": [
            "ba câu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Plus a secret question only your family knows.",
          "sub": "Thêm một câu hỏi bí mật chỉ nhà mình biết."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A list of numbers on paper, and a few minutes of practice each visit.",
          "sub": "Một danh sách số viết ra giấy, và vài phút tập dượt mỗi lần về thăm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "This weekend: write the three sentences, save your numbers in their phone, and choose a secret question together.",
          "sub": "Việc làm ngay: cuối tuần này viết ba câu quy tắc, lưu số các con vào máy cha mẹ, cùng chọn một câu hỏi bí mật.",
          "keys": [
            "cuối tuần này"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next: what banks and state offices never ask for.",
          "sub": "Bài tiếp: Ngân hàng và cơ quan nhà nước không bao giờ yêu cầu những gì?"
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p19"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "What is wrong with asking whether the caller is your son?",
        "options": [
          "The caller only has to say yes, so it proves nothing",
          "The caller will feel hurt and stop calling for many months",
          "The caller cannot hear the question on an old phone"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "red-question-mark",
        "why": "Ở câu trước, người kia chỉ cần đáp “Dạ, con đây”. Câu hỏi đó không chứng minh được gì."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What is wrong with asking whether the caller is your son?",
          "sub": "Hỏi người gọi có phải con mình không thì có vấn đề gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The caller only has to say yes, so it proves nothing.",
          "sub": "Người gọi chỉ cần đáp “dạ, con đây”, nên câu hỏi đó không chứng minh được gì."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Ask what only your family knows.",
          "sub": "Hãy hỏi điều chỉ nhà mình biết."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[18]"
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Hễ ai đòi mã đòi tiền… Còn bốn mươi câu hỏi",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Hang up, call your child. And now, the forty questions below.",
          "sub": "Cúp máy, gọi con. Còn giờ là bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân (#136) + biến thể #144. HOOK-25 câu nhớ lục bát “Hễ ai đòi mã đòi tiền / Thì ta cúp máy, gọi liền cho con” (lời Anh vần riêng), nhắc lại ở cảnh khép. Dòng thời gian: MỘT CUỐI TUẦN Dũng về quê (thứ Bảy 8:00 ba câu → 10:00 câu hỏi bí mật → 15:00 “Khoan đã!” đang nghe máy, Thảo đầu dây → 19:00 danh sách số → Chủ nhật 9:00 tập dượt → Chủ nhật 21:00 hai chiều → thứ Tư sau: số lạ “con mất máy” bị câu hỏi bí mật chặn). Đổi tên: anh Hùng → Dũng; em gái Thu → chị Thảo (chuỗi: Thảo là chị cả); bà Hạnh → Bà Tư; bố → Bác Bình; cháu → Bin (chỉ nhắc tên). Tục ngữ: “Cẩn tắc vô áy náy”. BRK-04 (câu hỏi trước–sau p9), BRK-09 (Thông tư 50/2024/TT-NHNN). Câu đố questions[18]. Lưu ý chung cuối bài (#133).",
  "loop": {
    "open": "s00",
    "close": "s18"
  }
};
