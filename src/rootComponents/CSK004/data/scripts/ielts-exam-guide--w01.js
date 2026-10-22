// ielts-exam-guide--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "ielts-exam-guide--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "ielts-first-time-takers",
    "slug": "ielts-exam-guide",
    "door": "kien-thuc",
    "level": "B1",
    "title": "IELTS là gì, thi những gì và bắt đầu chuẩn bị từ đâu?",
    "series": "IELTS lần đầu không bỡ ngỡ — cho học sinh, sinh viên hiểu bài thi, chọn loại thi và đăng ký đúng"
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
            "id": "a-num",
            "t": "text",
            "text": "2 giờ 45 phút",
            "x": 60,
            "y": 110,
            "size": 140,
            "at": "l1:Two",
            "color": "accent",
            "hl": [
              {
                "text": "2 giờ 45 phút",
                "at": "l1:minutes"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "4 kỹ năng · band 0–9",
            "x": 70,
            "y": 320,
            "size": 60,
            "at": "l1:Four"
          },
          {
            "id": "a-pap",
            "t": "text",
            "text": "Thi giấy?",
            "x": 70,
            "y": 430,
            "size": 64,
            "at": "l2:paper",
            "color": "muted"
          },
          {
            "id": "a-papx",
            "t": "strike",
            "over": "a-pap",
            "at": "l2:no more"
          },
          {
            "id": "a-com",
            "t": "text",
            "text": "Sau 29/3/2025: thi máy",
            "x": 70,
            "y": 530,
            "size": 56,
            "at": "l3:computer",
            "color": "coral",
            "hl": [
              {
                "text": "thi máy",
                "at": "l3:computer"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: British Council (định dạng đề); British Council Việt Nam, thông cáo 07/01/2025",
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
          "say": "Two hours and forty five minutes. Four skills. One band scale from zero to nine.",
          "sub": "Hai giờ bốn lăm phút. Bốn kỹ năng. Một thang band từ 0 đến 9.",
          "keys": [
            "Hai giờ bốn lăm phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "That is IELTS. Sounds simple. Except in Vietnam, there is no more paper test.",
          "sub": "Đó là IELTS. Nghe đơn giản. Chỉ có điều ở Việt Nam, không còn thi giấy nữa.",
          "keys": [
            "không còn thi giấy"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Since after March twenty ninth, twenty twenty five, every IELTS here is on computer.",
          "sub": "Từ sau 29/3/2025, mọi bài IELTS ở Việt Nam đều thi trên máy tính.",
          "keys": [
            "thi trên máy tính"
          ]
        }
      ],
      "ref": "intro,p5"
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
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "mobile-phone",
                "laptop"
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
            "at": "l1",
            "caption": "Chủ nhật 8:00 · phòng trọ",
            "icon": "mobile-phone"
          },
          {
            "id": "a-ru",
            "t": "text",
            "text": "Tin vỉa hè",
            "x": 1180,
            "y": 630,
            "size": 52,
            "at": "l4:Sidewalk",
            "color": "coral",
            "hl": [
              {
                "text": "vỉa hè",
                "at": "l4:Sidewalk"
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
          "say": "Meet Dũng, second year biology student, first time IELTS taker.",
          "sub": "Đây là Dũng, sinh viên năm hai ngành sinh học, lần đầu thi IELTS.",
          "keys": [
            "lần đầu thi IELTS"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sunday, eight a.m. His group chat is already boiling like a hotpot.",
          "sub": "Tám giờ sáng Chủ nhật. Nhóm chat của cậu đã sôi như nồi lẩu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Paper is easier, computer is faster, the fee is this, the fee is that. Help!",
          "sub": "Người bảo giấy dễ hơn, người bảo máy nhanh hơn, phí thế này, phí thế kia. Cứu!",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sidewalk news, all of it. And the elders say: know your rival, know yourself, win every battle.",
          "sub": "Toàn tin vỉa hè. Mà ông bà dặn: “Biết người biết ta, trăm trận trăm thắng.”",
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
            "text": "Thi gì? Bắt đầu từ đâu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:test",
            "hl": [
              {
                "text": "Bắt đầu từ đâu",
                "at": "l1:start"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: nhóm chat",
            "x": 2028,
            "y": 180,
            "size": 56,
            "at": "l2:group chat",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:official"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: trang chính thức",
            "x": 2028,
            "y": 280,
            "size": 60,
            "at": "l2:official",
            "color": "accent",
            "hl": [
              {
                "text": "trang chính thức",
                "at": "l2:official"
              }
            ]
          },
          {
            "id": "b-who",
            "t": "text",
            "text": "IELTS · British Council · IDP",
            "x": 2028,
            "y": 380,
            "size": 46,
            "at": "l2:British"
          },
          {
            "id": "b-map",
            "t": "text",
            "text": "Bản đồ năm bước",
            "x": 2028,
            "y": 480,
            "size": 52,
            "at": "l3:map",
            "hl": [
              {
                "text": "năm bước",
                "at": "l3:five"
              }
            ]
          },
          {
            "id": "b-s0",
            "t": "box",
            "x": 2028,
            "y": 580,
            "w": 300,
            "h": 90,
            "at": "l3:five+500",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-s1",
            "t": "box",
            "x": 2358,
            "y": 580,
            "w": 300,
            "h": 90,
            "at": "l3:five+800",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-s2",
            "t": "box",
            "x": 2688,
            "y": 580,
            "w": 300,
            "h": 90,
            "at": "l3:five+1100",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-s3",
            "t": "box",
            "x": 3018,
            "y": 580,
            "w": 300,
            "h": 90,
            "at": "l3:five+1400",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-s4",
            "t": "box",
            "x": 3348,
            "y": 580,
            "w": 300,
            "h": 90,
            "at": "l3:five+1700",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-st0",
            "t": "text",
            "text": "Loại thi",
            "x": 2058,
            "y": 592,
            "size": 46,
            "at": "l3:five+620"
          },
          {
            "id": "b-st1",
            "t": "text",
            "text": "Thi máy",
            "x": 2388,
            "y": 592,
            "size": 46,
            "at": "l3:five+920"
          },
          {
            "id": "b-st2",
            "t": "text",
            "text": "Đăng ký",
            "x": 2718,
            "y": 592,
            "size": 46,
            "at": "l3:five+1220"
          },
          {
            "id": "b-st3",
            "t": "text",
            "text": "Thi lại",
            "x": 3048,
            "y": 592,
            "size": 46,
            "at": "l3:five+1520"
          },
          {
            "id": "b-st4",
            "t": "text",
            "text": "Band",
            "x": 3378,
            "y": 592,
            "size": 46,
            "at": "l3:five+1820"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what does IELTS test, and where should a first timer start?",
          "sub": "Vậy IELTS thi những gì, và người thi lần đầu nên bắt đầu từ đâu?",
          "keys": [
            "bắt đầu từ đâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not with the group chat. With the official pages: IELTS, British Council, IDP.",
          "sub": "Không phải từ nhóm chat, mà từ trang chính thức: IELTS, British Council, IDP.",
          "keys": [
            "trang chính thức"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "This lesson is the map of a five step series: type, computer, registration, retake, band.",
          "sub": "Bài này là bản đồ của chuỗi năm bước: loại thi, thi máy, đăng ký, thi lại, band.",
          "keys": [
            "chuỗi năm bước"
          ]
        }
      ],
      "ref": "intro,p19"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Một Chủ nhật của Dũng",
        "points": [
          {
            "label": "9:00",
            "sub": "Hai loại thi",
            "illus": "books"
          },
          {
            "label": "10:00",
            "sub": "Bốn kỹ năng",
            "illus": "headphone"
          },
          {
            "label": "11:00",
            "sub": "Giấy hay máy",
            "illus": "desktop-computer"
          },
          {
            "label": "14:00",
            "sub": "Đăng ký, lệ phí",
            "illus": "money-bag"
          },
          {
            "label": "17:00",
            "sub": "Thi lại, band",
            "illus": "trophy"
          },
          {
            "label": "20:00",
            "sub": "Giấy nhớ",
            "illus": "memo"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One Sunday, from the noisy group chat to a clear plan.",
          "sub": "Một ngày Chủ nhật, từ nhóm chat ồn ào đến một kế hoạch rõ ràng.",
          "keys": [
            "kế hoạch rõ ràng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Seven stops. Grab a notebook.",
          "sub": "Bảy chặng. Cầm sổ theo nhé."
        }
      ],
      "ref": "p19"
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
            "text": "① 9:00 · Hai loại thi",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-own",
            "t": "text",
            "text": "BC · IDP · Cambridge cùng sở hữu",
            "x": 3996,
            "y": 160,
            "size": 44,
            "at": "l2:owned"
          },
          {
            "id": "c-ac",
            "t": "text",
            "text": "Academic",
            "x": 3996,
            "y": 250,
            "size": 60,
            "at": "l3:Academic",
            "color": "accent"
          },
          {
            "id": "c-gt",
            "t": "text",
            "text": "General Training",
            "x": 4396,
            "y": 250,
            "size": 60,
            "at": "l3:General",
            "color": "accent"
          },
          {
            "id": "c-same",
            "t": "text",
            "text": "Nghe, Nói: giống nhau",
            "x": 3996,
            "y": 350,
            "size": 50,
            "at": "l3:same",
            "hl": [
              {
                "text": "giống nhau",
                "at": "l3:same"
              }
            ]
          },
          {
            "id": "c-diff",
            "t": "text",
            "text": "Đọc, Viết: khác nhau",
            "x": 3996,
            "y": 430,
            "size": 50,
            "at": "l3:Different",
            "color": "coral",
            "hl": [
              {
                "text": "khác nhau",
                "at": "l3:Different"
              }
            ]
          },
          {
            "id": "c-uac",
            "t": "text",
            "text": "Academic → đại học, sau đại học",
            "x": 4836,
            "y": 160,
            "size": 42,
            "at": "l4:university"
          },
          {
            "id": "c-ugt",
            "t": "text",
            "text": "GT → đi làm, định cư",
            "x": 4836,
            "y": 230,
            "size": 42,
            "at": "l4:migration"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: British Council — test format, test types",
            "x": 4836,
            "y": 720,
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
          "say": "Stop one, nine a.m., at the weekend study café.",
          "sub": "Chặng một, chín giờ, ở quán cà phê nhóm tự học cuối tuần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "IELTS is owned by British Council, IDP and Cambridge. That's why both websites talk about it.",
          "sub": "IELTS do British Council, IDP và Cambridge cùng sở hữu, nên trang nào cũng có thông tin.",
          "keys": [
            "cùng sở hữu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two main types: Academic and General Training. Same listening and speaking. Different reading and writing.",
          "sub": "Hai loại chính: Academic và General Training. Nghe, Nói giống nhau; Đọc, Viết khác nhau.",
          "keys": [
            "Đọc, Viết khác nhau"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Academic for university study. General Training often for work, migration, or study below degree level.",
          "sub": "Academic để học đại học, sau đại học. General Training thường cho đi làm, định cư, học dưới bậc đại học."
        }
      ],
      "ref": "p1,p2"
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
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 300,
            "w": 640,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "school"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Lan",
            "caption": "Hai năm trước · Lan lớp 12",
            "icon": "school"
          },
          {
            "id": "c-rum",
            "t": "text",
            "text": "“GT dễ thở hơn”",
            "x": 3996,
            "y": 520,
            "size": 52,
            "at": "l2:easier",
            "color": "muted"
          },
          {
            "id": "c-rumx",
            "t": "strike",
            "over": "c-rum",
            "at": "l3:asked"
          },
          {
            "id": "c-rule",
            "t": "text",
            "text": "Nơi nhận cần loại nào",
            "x": 3996,
            "y": 600,
            "size": 56,
            "at": "l4:receiver",
            "color": "accent",
            "hl": [
              {
                "text": "Nơi nhận",
                "at": "l4:receiver"
              }
            ]
          },
          {
            "id": "c-rule2",
            "t": "text",
            "text": "→ thi đúng loại đó",
            "x": 4036,
            "y": 680,
            "size": 48,
            "at": "l4:take"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Lan, from the study group. Two years ago, in grade twelve, she nearly slipped.",
          "sub": "Đây là Lan, bạn trong nhóm tự học. Hai năm trước, hồi lớp 12, Lan suýt trượt chân.",
          "keys": [
            "Hai năm trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "A friend said General Training reading is easier. So I almost picked it!",
          "sub": "Bạn em bảo Đọc của General Training dễ thở hơn. Thế là em suýt chọn nó!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But her target university asked for IELTS Academic: academic texts, not everyday notices.",
          "sub": "Nhưng trường Lan nhắm lại yêu cầu IELTS Academic: bài học thuật, không phải văn bản đời thường.",
          "keys": [
            "yêu cầu IELTS Academic"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: take the type your receiver asks for, not the one that sounds easier.",
          "sub": "Rút ra: nơi nhận cần loại nào, thi loại đó, đừng chọn đề nghe có vẻ dễ.",
          "keys": [
            "nơi nhận cần loại nào"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p3,p4"
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
            "at": "l3",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 10:00 · Bốn kỹ năng",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 150,
            "w": 760,
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
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                }
              ],
              "props": [
                "hot-beverage",
                "stopwatch"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Thảo",
            "caption": "10:00 · quán nhóm tự học",
            "icon": "hot-beverage"
          },
          {
            "id": "d-b0",
            "t": "box",
            "x": 5964,
            "y": 170,
            "w": 760,
            "h": 70,
            "at": "l3:Listening",
            "stroke": 4
          },
          {
            "id": "d-bt0",
            "t": "text",
            "text": "Nghe: 30 phút · 40 câu",
            "x": 5988,
            "y": 176,
            "size": 46,
            "at": "l3:Listening+200"
          },
          {
            "id": "d-b1",
            "t": "box",
            "x": 5964,
            "y": 255,
            "w": 760,
            "h": 70,
            "at": "l4:Reading",
            "stroke": 4
          },
          {
            "id": "d-bt1",
            "t": "text",
            "text": "Đọc: 60 phút · 40 câu",
            "x": 5988,
            "y": 261,
            "size": 46,
            "at": "l4:Reading+200"
          },
          {
            "id": "d-b2",
            "t": "box",
            "x": 5964,
            "y": 340,
            "w": 760,
            "h": 70,
            "at": "l4:Writing",
            "stroke": 4
          },
          {
            "id": "d-bt2",
            "t": "text",
            "text": "Viết: 60 phút · 2 bài",
            "x": 5988,
            "y": 346,
            "size": 46,
            "at": "l4:Writing+200"
          },
          {
            "id": "d-b3",
            "t": "box",
            "x": 5964,
            "y": 425,
            "w": 760,
            "h": 70,
            "at": "l5:Speaking",
            "stroke": 4
          },
          {
            "id": "d-bt3",
            "t": "text",
            "text": "Nói: 11–14 phút · 3 phần",
            "x": 5988,
            "y": 431,
            "size": 46,
            "at": "l5:Speaking+200"
          },
          {
            "id": "d-sp",
            "t": "text",
            "text": "giới thiệu · tự nói · thảo luận",
            "x": 6004,
            "y": 510,
            "size": 40,
            "at": "l5:introduction",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, ten a.m. Meet Thảo, Dũng's cousin, preparing IELTS Academic for her master's.",
          "sub": "Chặng hai, mười giờ. Đây là Thảo, chị họ Dũng, đang luyện IELTS Academic để học thạc sĩ.",
          "keys": [
            "chị họ Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "First, the whole test: two hours forty five. Let me list it.",
          "sub": "Thứ nhất, cả bài: 2 giờ 45 phút. Để chị liệt kê.",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Listening: thirty minutes, four parts, forty questions.",
          "sub": "Nghe: 30 phút, bốn phần, 40 câu.",
          "keys": [
            "40 câu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Reading: sixty minutes, forty questions. Writing: sixty minutes, two tasks.",
          "sub": "Đọc: 60 phút, 40 câu. Viết: 60 phút, hai bài."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Speaking: eleven to fourteen minutes. An introduction, a short talk, then a discussion with the examiner.",
          "sub": "Nói: 11 đến 14 phút. Giới thiệu, tự nói một chủ đề, rồi thảo luận với giám khảo.",
          "keys": [
            "thảo luận với giám khảo"
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
            "at": "l3",
            "fit": [
              "d-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l4",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-run",
            "t": "text",
            "text": "Nghe → Đọc → Viết: không nghỉ",
            "x": 5964,
            "y": 560,
            "size": 48,
            "at": "l1:back to back",
            "color": "coral",
            "hl": [
              {
                "text": "không nghỉ",
                "at": "l1:No break"
              }
            ]
          },
          {
            "id": "d-sp7",
            "t": "text",
            "text": "Nói: ±7 ngày",
            "x": 5964,
            "y": 630,
            "size": 48,
            "at": "l2:seven"
          },
          {
            "id": "d-w2",
            "t": "text",
            "text": "Viết bài 2 = bài luận",
            "x": 6324,
            "y": 630,
            "size": 44,
            "at": "l5:essay",
            "hl": [
              {
                "text": "bài luận",
                "at": "l5:essay"
              }
            ]
          },
          {
            "id": "d-do",
            "t": "text",
            "text": "Tập ngồi liền ba kỹ năng",
            "x": 5964,
            "y": 695,
            "size": 46,
            "at": "l4:sitting",
            "color": "accent",
            "hl": [
              {
                "text": "ngồi liền",
                "at": "l4:sitting"
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
          "say": "Listening, reading and writing run back to back. No break between them.",
          "sub": "Nghe, Đọc, Viết thi liền một mạch, không nghỉ giữa các phần.",
          "keys": [
            "không nghỉ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Speaking may be the same day, or within seven days before or after, depending on the centre.",
          "sub": "Nói có thể cùng ngày, hoặc trong vòng 7 ngày trước hay sau, tuỳ điểm thi.",
          "keys": [
            "7 ngày"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Three skills, no break? That's a four course feast with no water!",
          "sub": "Ba kỹ năng liền không nghỉ? Như ăn mâm cỗ bốn món không kịp uống nước!",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So at home, practise sitting through all three in one go.",
          "sub": "Vậy ở nhà, tập ngồi liền cả ba kỹ năng một lượt.",
          "keys": [
            "ngồi liền cả ba kỹ năng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And remember: writing task two is an essay.",
          "sub": "Và nhớ: bài Viết thứ hai là bài luận."
        }
      ],
      "ref": "p6,p7"
    },
    {
      "id": "s08",
      "module": "BRK-07",
      "data": {
        "question": "Thi trên máy thì Nói vào máy?",
        "illus": "microphone"
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
          "say": "A computer test. So you talk to a computer?",
          "sub": "Thi trên máy. Vậy là nói chuyện với máy tính?",
          "keys": [
            "nói chuyện với máy tính"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p9"
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
            "text": "③ 11:00 · Giấy hay máy?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 150,
            "w": 760,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop",
                "headphone"
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
            "at": "l1:paper",
            "caption": "11:00 · laptop của Dũng",
            "icon": "laptop"
          },
          {
            "id": "e-d",
            "t": "text",
            "text": "Sau 29/3/2025: chỉ thi máy",
            "x": 7932,
            "y": 170,
            "size": 48,
            "at": "l3:after",
            "color": "coral",
            "hl": [
              {
                "text": "chỉ thi máy",
                "at": "l3:computer"
              }
            ]
          },
          {
            "id": "e-same",
            "t": "text",
            "text": "Đề giống hệt thi giấy",
            "x": 7932,
            "y": 255,
            "size": 50,
            "at": "l4:Same",
            "hl": [
              {
                "text": "giống hệt",
                "at": "l4:Same"
              }
            ]
          },
          {
            "id": "e-2d",
            "t": "text",
            "text": "Kết quả ~2 ngày",
            "x": 7932,
            "y": 340,
            "size": 50,
            "at": "l4:two days",
            "color": "accent"
          },
          {
            "id": "e-hp",
            "t": "illus",
            "name": "headphone",
            "x": 7932,
            "y": 430,
            "size": 80,
            "at": "l5:headphones"
          },
          {
            "id": "e-hpt",
            "t": "text",
            "text": "tai nghe · màn chia đôi",
            "x": 8032,
            "y": 445,
            "size": 42,
            "at": "l5:headphones+200"
          },
          {
            "id": "e-kb",
            "t": "illus",
            "name": "keyboard",
            "x": 7932,
            "y": 530,
            "size": 80,
            "at": "l5:typing"
          },
          {
            "id": "e-kbt",
            "t": "text",
            "text": "gõ bài, có đếm từ",
            "x": 8032,
            "y": 545,
            "size": 42,
            "at": "l5:typing+200"
          },
          {
            "id": "e-pp",
            "t": "text",
            "text": "IDP: Viết tay trên giấy",
            "x": 7932,
            "y": 640,
            "size": 46,
            "at": "l6:hand",
            "color": "accent",
            "hl": [
              {
                "text": "Viết tay",
                "at": "l6:hand"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: British Council Việt Nam (07/01/2025); IDP Việt Nam",
            "x": 8772,
            "y": 720,
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
          "say": "Stop three, eleven a.m. The big one: paper or computer?",
          "sub": "Chặng ba, mười một giờ. Câu lớn: thi giấy hay thi máy?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "My chat says paper is easier. Should I hunt for a paper test?",
          "sub": "Nhóm chat bảo thi giấy dễ hơn. Em có nên đi tìm kỳ thi giấy không?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "British Council Vietnam, January twenty twenty five: after March twenty ninth, every IELTS here moves to computer.",
          "sub": "British Council Việt Nam, ngày 07/01/2025: từ sau 29/3/2025, mọi bài IELTS ở Việt Nam chuyển hẳn sang thi máy.",
          "keys": [
            "chuyển hẳn sang thi máy"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Same four skills as the paper test. Results in about two days.",
          "sub": "Nội dung bốn kỹ năng giống hệt thi giấy. Kết quả khoảng 2 ngày.",
          "keys": [
            "giống hệt thi giấy"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Headphones for listening, a split screen for reading, typing with a word counter for writing.",
          "sub": "Đeo tai nghe khi Nghe, đọc màn hình chia đôi, gõ bài Viết có bộ đếm từ."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "IDP also offers writing by hand on paper, while listening and reading stay on screen.",
          "sub": "IDP còn có lựa chọn Viết tay trên giấy; Nghe và Đọc vẫn trên máy.",
          "keys": [
            "Viết tay trên giấy"
          ]
        }
      ],
      "ref": "p8,p11"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "11:30 · quán nhóm tự học",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Thi máy thì Nói vào máy",
          "why": "Nói vẫn trò chuyện với giám khảo: trực tiếp hoặc qua video, tại điểm thi. Không thi ở nhà, không gõ câu trả lời.",
          "rule": "Ba kỹ năng trên máy, Nói với người"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Computer test, so I'll practise speaking into my laptop microphone!",
          "sub": "Thi máy, vậy em tập nói vào micro laptop là xong!",
          "face": "happy",
          "pose": "thumb",
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
          "say": "Speaking is still a talk with an examiner, face to face or by video, at the centre. Never from home.",
          "sub": "Nói vẫn là trò chuyện với giám khảo, trực tiếp hoặc qua video, tại điểm thi. Không thi ở nhà.",
          "keys": [
            "trò chuyện với giám khảo"
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
          "say": "Then I'll practise with a real person. Thảo, you're up!",
          "sub": "Vậy em tập với người thật. Chị Thảo ơi!",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. Three skills on the computer, speaking with a person.",
          "sub": "Đúng. Ba kỹ năng làm trên máy, phần Nói vẫn nói với người.",
          "phase": "redo",
          "keys": [
            "Nói vẫn nói với người"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
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
            "text": "④ 14:00 · Đăng ký, lệ phí",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 900,
            "y": 1240,
            "w": 760,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "laptop",
                "money-bag"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Thảo's",
            "caption": "14:00 · nhà Thảo",
            "icon": "house"
          },
          {
            "id": "f-w",
            "t": "text",
            "text": "British Council hoặc IDP",
            "x": 60,
            "y": 1260,
            "size": 48,
            "at": "l2:British"
          },
          {
            "id": "f-w2",
            "t": "text",
            "text": "trực tuyến · văn phòng · đối tác",
            "x": 60,
            "y": 1335,
            "size": 40,
            "at": "l2:online",
            "color": "muted"
          },
          {
            "id": "f-fee",
            "t": "text",
            "text": "4.664.000 đ",
            "x": 60,
            "y": 1410,
            "size": 84,
            "at": "l3:four million",
            "color": "accent",
            "hl": [
              {
                "text": "4.664.000 đ",
                "at": "l3:sixty four"
              }
            ]
          },
          {
            "id": "f-fee2",
            "t": "text",
            "text": "IDP · đến 31/12/2026 · gồm VAT 8%",
            "x": 60,
            "y": 1520,
            "size": 38,
            "at": "l3:December"
          },
          {
            "id": "f-sys",
            "t": "text",
            "text": "Số chính xác: xem trên hệ thống",
            "x": 60,
            "y": 1590,
            "size": 44,
            "at": "l4:system",
            "color": "coral",
            "hl": [
              {
                "text": "trên hệ thống",
                "at": "l4:system"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: IDP Việt Nam — Book my test (ngày thi 01/7/2023–31/12/2026); British Council Việt Nam — Đăng ký thi",
            "x": 60,
            "y": 1810,
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
          "say": "Stop four, two p.m., at Thảo's place. Where to register, and how much?",
          "sub": "Chặng bốn, hai giờ chiều, ở nhà Thảo. Đăng ký ở đâu, tốn bao nhiêu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Second: register with British Council or IDP, online or at their offices and partners.",
          "sub": "Thứ hai: đăng ký qua British Council hoặc IDP, trực tuyến hay tại văn phòng, đối tác.",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "IDP's fee table, test dates up to December thirty first, twenty twenty six, eight percent VAT included: four million, six hundred sixty four thousand dong.",
          "sub": "Bảng phí IDP, ngày thi đến 31/12/2026, đã gồm VAT 8%: 4.664.000 đồng.",
          "keys": [
            "4.664.000 đồng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Only a reference. Check the exact amount on the system when you register.",
          "sub": "Chỉ là mức tham khảo. Số chính xác xem ngay trên hệ thống lúc đăng ký.",
          "keys": [
            "xem ngay trên hệ thống"
          ]
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
            "fit": "F",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "f-18",
            "t": "text",
            "text": "Dưới 18 tuổi: phụ huynh đăng ký",
            "x": 60,
            "y": 1670,
            "size": 46,
            "at": "l1:eighteen",
            "hl": [
              {
                "text": "phụ huynh",
                "at": "l1:parent"
              }
            ]
          },
          {
            "id": "f-id",
            "t": "text",
            "text": "Giấy tờ: đúng loại đã khai",
            "x": 60,
            "y": 1745,
            "size": 46,
            "at": "l2:same",
            "color": "accent",
            "hl": [
              {
                "text": "đúng loại",
                "at": "l2:same"
              }
            ]
          },
          {
            "id": "f-idc",
            "t": "illus",
            "name": "identification-card",
            "x": 760,
            "y": 1680,
            "size": 100,
            "at": "l2:card"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Under eighteen? British Council Vietnam says a parent or legal guardian registers for you.",
          "sub": "Dưới 18 tuổi? Theo British Council Việt Nam, phụ huynh hoặc người giám hộ đứng ra đăng ký.",
          "keys": [
            "Dưới 18 tuổi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And bring the same type of ID you registered with: citizen card or passport.",
          "sub": "Và mang đúng loại giấy tờ đã dùng khi đăng ký: căn cước hay hộ chiếu.",
          "keys": [
            "đúng loại giấy tờ"
          ]
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
            "text": "⑤ 15:00 · Đăng ký sát ngày?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2868,
            "y": 1240,
            "w": 760,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "thumb",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "cross"
                }
              ],
              "props": [
                "spiral-calendar",
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
            "at": "l1:plan",
            "caption": "15:00 · nhà Thảo",
            "icon": "spiral-calendar"
          },
          {
            "id": "g-bc",
            "t": "text",
            "text": "BC (2025): trước 1–2 ngày",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l4:one to two"
          },
          {
            "id": "g-idp",
            "t": "text",
            "text": "IDP: đóng 4 ngày trước",
            "x": 2028,
            "y": 1340,
            "size": 46,
            "at": "l4:four days",
            "color": "coral",
            "hl": [
              {
                "text": "4 ngày trước",
                "at": "l4:four days"
              }
            ]
          },
          {
            "id": "g-full",
            "t": "text",
            "text": "Lịch có thể hết chỗ",
            "x": 2028,
            "y": 1420,
            "size": 46,
            "at": "l5:Seats"
          },
          {
            "id": "g-res",
            "t": "text",
            "text": "+ vài ngày chờ kết quả",
            "x": 2028,
            "y": 1500,
            "size": 46,
            "at": "l5:results"
          },
          {
            "id": "g-late",
            "t": "text",
            "text": "→ dễ trễ hạn nộp",
            "x": 2028,
            "y": 1580,
            "size": 52,
            "at": "l5:misses",
            "color": "coral",
            "hl": [
              {
                "text": "trễ hạn",
                "at": "l5:misses"
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
          "say": "Stop five, three p.m. Dũng has a plan, and a friend's advice behind it.",
          "sub": "Chặng năm, ba giờ chiều. Dũng có kế hoạch, kèm lời khuyên của bạn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Computer tests are flexible. I'll register the week before my application deadline!",
          "sub": "Thi máy linh hoạt mà. Tuần trước hạn nộp hồ sơ em mới đăng ký!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Did you check the booking system?",
          "sub": "Em xem hệ thống đăng ký chưa?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "British Council's twenty twenty five release says one to two days before. IDP's page says booking closes four days before.",
          "sub": "Thông cáo 2025 của British Council nói trước 1–2 ngày; trang IDP lại ghi đóng đăng ký 4 ngày trước kỳ thi.",
          "keys": [
            "4 ngày trước"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Seats can run out. Add a few days for results, and Dũng misses his deadline.",
          "sub": "Lịch có thể hết chỗ. Cộng vài ngày chờ kết quả, Dũng dễ trễ hạn.",
          "keys": [
            "dễ trễ hạn"
          ]
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s14",
      "module": "BRK-04",
      "data": {
        "title": "Hạn đăng ký",
        "wrong": "Thi máy thì sát ngày mới đăng ký",
        "right": "Đăng ký sớm, hạn xem trên hệ thống",
        "wrongIllus": "hourglass-done",
        "rightIllus": "spiral-calendar"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Register at the last minute?",
          "sub": "Sát ngày mới đăng ký?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Register early. Check the system, not hearsay.",
          "sub": "Đăng ký sớm. Hạn xem trên hệ thống, đừng nghe lời kể.",
          "keys": [
            "Hạn xem trên hệ thống"
          ]
        }
      ],
      "ref": "p14,p15"
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
            "text": "⑥ 17:00 · Thi lại, band",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 1240,
            "w": 760,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "sad"
                }
              ],
              "props": [
                "trophy",
                "memo"
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
            "at": "l1:worries",
            "caption": "17:00 · nhà Thảo",
            "icon": "trophy"
          },
          {
            "id": "h-osr",
            "t": "text",
            "text": "One Skill Retake",
            "x": 3996,
            "y": 1260,
            "size": 56,
            "at": "l3:One Skill",
            "color": "accent"
          },
          {
            "id": "h-o1",
            "t": "text",
            "text": "thi lại đúng một kỹ năng",
            "x": 3996,
            "y": 1340,
            "size": 44,
            "at": "l3:just one",
            "hl": [
              {
                "text": "một kỹ năng",
                "at": "l3:just one"
              }
            ]
          },
          {
            "id": "h-o2",
            "t": "text",
            "text": "trong 60 ngày · một lần",
            "x": 3996,
            "y": 1410,
            "size": 44,
            "at": "l4:sixty"
          },
          {
            "id": "h-o3",
            "t": "text",
            "text": "IDP: 2.940.000 đ",
            "x": 3996,
            "y": 1480,
            "size": 44,
            "at": "l4:two million"
          },
          {
            "id": "h-acc",
            "t": "text",
            "text": "Nơi nhận có chấp nhận?",
            "x": 3996,
            "y": 1560,
            "size": 50,
            "at": "l5:accept",
            "color": "coral",
            "hl": [
              {
                "text": "chấp nhận",
                "at": "l5:accept"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: IDP Việt Nam; IELTS.org — scoring",
            "x": 3996,
            "y": 1810,
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
          "say": "Stop six, five p.m. Dũng worries: what if one skill falls short?",
          "sub": "Chặng sáu, năm giờ chiều. Dũng lo: thiếu điểm một kỹ năng thì sao?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "One dish goes wrong, and I cook the whole feast again?",
          "sub": "Hỏng một món mà phải nấu lại cả mâm à?",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not always. IELTS One Skill Retake lets you redo just one skill, after a full test on computer.",
          "sub": "Không nhất thiết. IELTS One Skill Retake cho thi lại đúng một kỹ năng, sau khi đã thi đủ trên máy.",
          "keys": [
            "đúng một kỹ năng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Book within sixty days, once per test. IDP's fee: two million, nine hundred forty thousand dong.",
          "sub": "Đăng ký trong 60 ngày, mỗi lượt thi một lần. Lệ phí ở IDP: 2.940.000 đồng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Most important: does your receiver accept it?",
          "sub": "Quan trọng nhất: nơi nhận có chấp nhận không?",
          "keys": [
            "nơi nhận có chấp nhận không"
          ]
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s16",
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
            "id": "h-b",
            "t": "text",
            "text": "Mỗi kỹ năng: band 0–9",
            "x": 3996,
            "y": 1650,
            "size": 46,
            "at": "l1:zero"
          },
          {
            "id": "h-ov",
            "t": "text",
            "text": "Overall: trung bình, làm tròn ½",
            "x": 3996,
            "y": 1720,
            "size": 44,
            "at": "l2:average",
            "hl": [
              {
                "text": "làm tròn",
                "at": "l2:rounded"
              }
            ]
          },
          {
            "id": "h-ex",
            "t": "text",
            "text": "6,125 → 6,0",
            "x": 4836,
            "y": 1780,
            "size": 56,
            "at": "l2:becomes",
            "color": "accent"
          },
          {
            "id": "h-2y",
            "t": "text",
            "text": "Giá trị 2 năm",
            "x": 5236,
            "y": 1790,
            "size": 46,
            "at": "l4:two years",
            "color": "coral",
            "hl": [
              {
                "text": "2 năm",
                "at": "l4:two years"
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
          "say": "Scores: each skill gets a band from zero to nine.",
          "sub": "Điểm: mỗi kỹ năng một band từ 0 đến 9."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Overall is the average of four, rounded to the nearest half band. Six point one two five becomes six.",
          "sub": "Overall là trung bình bốn kỹ năng, làm tròn đến nửa band gần nhất: 6,125 thành 6,0.",
          "keys": [
            "nửa band gần nhất"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "How much do you need? Each school's current rules decide, and they can change yearly.",
          "sub": "Cần bao nhiêu? Quy chế, đề án hiện hành của từng trường, nơi nhận quyết định, có thể đổi theo năm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "IELTS recommends treating results as valid for two years, so time your test with the deadline.",
          "sub": "IELTS khuyến nghị coi kết quả có giá trị hai năm, nên tính ngày thi cho khớp hạn nộp.",
          "keys": [
            "hai năm"
          ]
        }
      ],
      "ref": "p17,p18"
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
            "at": "l3",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 20:00 · Tờ giấy nhớ",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop seven"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 1240,
            "w": 760,
            "data": {
              "set": "room",
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:room",
            "caption": "20:00 · phòng trọ",
            "icon": "memo"
          },
          {
            "id": "i-n",
            "t": "text",
            "text": "Nơi nhận cần gì?",
            "x": 5964,
            "y": 1255,
            "size": 56,
            "at": "l2:receiver",
            "color": "accent",
            "hl": [
              {
                "text": "cần gì",
                "at": "l2:need"
              }
            ]
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1360,
            "w": 44,
            "h": 44,
            "at": "l4:Choose",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1342,
            "size": 56,
            "at": "l4:Choose+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Chọn loại thi",
            "x": 6029,
            "y": 1352,
            "size": 44,
            "at": "l4:Choose+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1445,
            "w": 44,
            "h": 44,
            "at": "l4:computer",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1427,
            "size": 56,
            "at": "l4:computer+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Làm quen thi máy",
            "x": 6029,
            "y": 1437,
            "size": 44,
            "at": "l4:computer+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1530,
            "w": 44,
            "h": 44,
            "at": "l4:Register",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1512,
            "size": 56,
            "at": "l4:Register+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Đăng ký, lệ phí",
            "x": 6029,
            "y": 1522,
            "size": 44,
            "at": "l4:Register+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1615,
            "w": 44,
            "h": 44,
            "at": "l4:retake",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1597,
            "size": 56,
            "at": "l4:retake+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Tính đường thi lại",
            "x": 6029,
            "y": 1607,
            "size": 44,
            "at": "l4:retake+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1700,
            "w": 44,
            "h": 44,
            "at": "l4:band",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1682,
            "size": 56,
            "at": "l4:band+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Đặt mục tiêu band",
            "x": 6029,
            "y": 1692,
            "size": 44,
            "at": "l4:band+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven, eight p.m., back in his room. Dũng writes one yellow sticky note.",
          "sub": "Chặng bảy, tám giờ tối, về phòng trọ. Dũng viết một tờ giấy nhớ vàng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "What does my receiver need? Type, band, deadline.",
          "sub": "Nơi nhận cần gì? Loại thi, band, hạn nộp.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then the series, in the order you will live it.",
          "sub": "Rồi đến chuỗi bài, đúng thứ tự bạn sẽ trải qua."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Choose the type. Learn the computer test. Register. Plan a retake. Set your band goal.",
          "sub": "Chọn loại thi. Làm quen thi máy. Đăng ký. Tính đường thi lại. Đặt mục tiêu band."
        }
      ],
      "ref": "p19"
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
            "at": "l3",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "21:00 · Nhóm chat",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Nine"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1240,
            "w": 760,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:same",
            "caption": "Chủ nhật 21:00 · phòng trọ",
            "icon": "mobile-phone"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Biết đề, biết mình",
            "x": 7932,
            "y": 1270,
            "size": 64,
            "at": "l3:Know",
            "color": "accent",
            "hl": [
              {
                "text": "biết mình",
                "at": "l3:yourself"
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
          "say": "Nine p.m. Same room, same group chat, still boiling.",
          "sub": "Chín giờ tối. Vẫn phòng ấy, vẫn nhóm chat ấy, vẫn sôi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "The official page says: four skills, on computer, speaking with an examiner. Fees, check the system.",
          "sub": "Trang chính thức ghi: bốn kỹ năng, thi máy, Nói với giám khảo. Phí thì xem trên hệ thống.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Know the test, know yourself. A hundred battles suddenly look smaller.",
          "sub": "Biết đề, biết mình. Trăm trận bỗng nhẹ hẳn đi.",
          "keys": [
            "Biết đề, biết mình"
          ]
        }
      ],
      "ref": "p10,p15"
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
            "at": "l1:four skills",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:computer",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l2:receiver",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "J",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 6726,
            "y": 175,
            "at": "l1:four skills"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8692,
            "y": 170,
            "at": "l2:computer"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 600,
            "at": "l2:receiver"
          },
          {
            "id": "z-do",
            "t": "text",
            "text": "Làm ngay: mở trang tuyển sinh",
            "x": 7932,
            "y": 1650,
            "size": 44,
            "at": "l3:Do it",
            "color": "accent",
            "hl": [
              {
                "text": "Làm ngay",
                "at": "l3:Do it"
              }
            ]
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo; đề, lệ phí, lịch có thể đổi — kiểm lại trang IELTS, British Council, IDP. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1810,
            "size": 28,
            "at": "l3:end",
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
          "say": "So: IELTS is four skills, about two hours forty five, bands from zero to nine.",
          "sub": "Tóm lại: IELTS bốn kỹ năng, khoảng 2 giờ 45 phút, band từ 0 đến 9."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In Vietnam, three skills on computer, speaking with a person. Your receiver decides the type and the band.",
          "sub": "Ở Việt Nam: ba kỹ năng trên máy, Nói với người. Nơi nhận quyết định loại thi và band.",
          "keys": [
            "Nơi nhận quyết định"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Do it now: open your receiver's admission page, and write down the IELTS type and band.",
          "sub": "Làm ngay: mở trang tuyển sinh nơi bạn nộp, ghi lại loại IELTS và band họ cần.",
          "keys": [
            "Làm ngay"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p18"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "Dung plans to register only a week before his deadline, what is the risk?",
        "options": [
          "Registration may close early, seats may run out, and results also take days",
          "His test will be harder, because late candidates receive a special paper",
          "There is no risk, because results always arrive on the same afternoon"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "spiral-calendar",
        "why": "Trang IDP ghi đóng đăng ký 4 ngày trước kỳ thi, lịch có thể hết chỗ, rồi còn chờ kết quả. Dũng dễ trễ hạn nộp hồ sơ."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Dung plans to register only a week before his deadline, what is the risk?",
          "sub": "Dũng định chỉ đăng ký một tuần trước hạn nộp hồ sơ, rủi ro là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Registration may close early, seats may run out, and results also take days.",
          "sub": "Có thể hết hạn đăng ký, hết chỗ, lại phải chờ kết quả, nên dễ trễ hạn nộp."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[25]"
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Đã có bản đồ. Còn bốn mươi câu hỏi",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "You have the map. Forty questions below. Next: Academic or General Training?",
          "sub": "Bạn đã có bản đồ. Bốn mươi câu bên dưới. Bài sau: Academic hay General Training?",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi ielts-first-time-takers, bài tổng) dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT NGÀY CHỦ NHẬT của Dũng (8:00 nhóm chat lời đồn → ① 9:00 quán nhóm: hai loại thi, Lan kể chuyện lớp 12 → ② 10:00 bốn kỹ năng, Thảo liệt kê → ③ 11:00 giấy hay máy + “Khoan đã!” Nói vào máy? → ④ 14:00 đăng ký, lệ phí → ⑤ 15:00 đăng ký sát ngày → ⑥ 17:00 thi lại một kỹ năng, band → ⑦ 20:00 giấy nhớ, thứ tự chuỗi → 21:00 nhóm chat, khép vòng). HOOK-24: vật neo “2 giờ 45 phút”. Nhân vật: Dũng (p14), Lan (p3, hồi tưởng lớp 12), Thảo — w145/_series/ielts-first-time-takers.md. Cảnh ngắt nhịp: BRK-08 (một Chủ nhật), BRK-07 (Nói vào máy?), BRK-04 (đăng ký sát ngày). Tục ngữ: “Biết người biết ta, trăm trận trăm thắng”. Câu đố questions[25].",
  "loop": {
    "open": "s01",
    "close": "s18"
  }
};
