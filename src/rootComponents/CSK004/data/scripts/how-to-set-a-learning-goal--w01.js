// Kịch bản video W lần 3 (#110) — "Cách đặt mục tiêu học tập rõ ràng để không bỏ cuộc giữa chừng" · chuỗi "Tự học và học cách học". Mở rộng đủ ý (#110).
export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-set-a-learning-goal--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "adult-self-learners",
    "slug": "how-to-set-a-learning-goal",
    "door": "ky-nang",
    "level": "B1",
    "title": "Cách đặt mục tiêu học tập rõ ràng để không bỏ cuộc giữa chừng",
    "series": "Tự học và học cách học"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT QUÝ của Thảo (tối Chủ nhật trước ngày 1 → ngày 1 → ngày 2 → tuần 1 → tuần 2 → tuần 4 → tháng 2 → tháng 3 → hai tháng sau, cùng bàn, cùng tối Chủ nhật). Nhân vật (theo w145/_series/adult-self-learners.md): Thảo (kế toán, gộp chị Yến p23), Dũng (kỹ thuật viên, anh Sơn p13, cảnh “Khoan đã!”), Lan (người bạn p23 hỏi “thu nhỏ lại thì sao?”), cô Hoa (sếp, người hỏi lại tiến độ p27); chị Ngọc p3 kể không tên (BRK-04 Trước/Sau). Cảnh ngắt nhịp: BRK-04 (p3), BRK-12 “20 phút” (p15), BRK-07 rehook tháng thứ hai (p21). Tục ngữ mở/khép vòng: “Có công mài sắt, có ngày nên kim” → “chọn kim nào đã”. Ví dụ Thảo tự thêm Excel/tiếng Trung/thuyết trình (p12) và bài thử “đọc một hợp đồng thật” là lời dựng cảnh, không thêm số. Bản cũ (W lần 3, #110): w145/bak/how-to-set-a-learning-goal--w01.js.",
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
            "text": "3 tuần",
            "x": 60,
            "y": 130,
            "size": 200,
            "at": "l1:three weeks",
            "color": "accent",
            "hl": [
              {
                "text": "3 tuần",
                "at": "l1:quit"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "hăm hở → bỏ dở",
            "x": 70,
            "y": 390,
            "size": 60,
            "at": "l1:sign up"
          },
          {
            "id": "a-lazy",
            "t": "text",
            "text": "Ta tưởng: tại mình lười?",
            "x": 70,
            "y": 490,
            "size": 54,
            "at": "l2:blame",
            "color": "muted"
          },
          {
            "id": "a-lazyx",
            "t": "strike",
            "over": "a-lazy",
            "at": "l2:lazy+500"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Bài dựa trên: Locke & Latham (2002) · Gollwitzer & Sheeran (2006) · Gardner, Lally & Wardle (2012)",
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
          "say": "Three weeks. You sign up for a course, buy the books, and three weeks later, you quit.",
          "sub": "Ba tuần. Hăm hở đăng ký khoá học, mua sách, rồi ba tuần sau bỏ dở.",
          "keys": [
            "ba tuần sau bỏ dở"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And then we blame ourselves: I'm just lazy.",
          "sub": "Rồi ta tự trách: “Mình lười quá.”",
          "keys": [
            "Mình lười quá"
          ]
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
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                }
              ],
              "props": [
                "books",
                "laptop"
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
            "caption": "Tối Chủ nhật · trước ngày 1",
            "icon": "books"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Có công mài sắt…”",
            "x": 60,
            "y": 580,
            "size": 46,
            "at": "l4:iron",
            "color": "accent",
            "hl": [
              {
                "text": "mài sắt",
                "at": "l4:iron"
              }
            ]
          },
          {
            "id": "a-kim",
            "t": "text",
            "text": "…mà kim nào?",
            "x": 470,
            "y": 575,
            "size": 54,
            "at": "l4:which needle",
            "color": "coral",
            "hl": [
              {
                "text": "kim nào",
                "at": "l4:which needle"
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
          "say": "Meet Thảo.",
          "sub": "Đây là Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Accountant by day, collector of unread English books by night.",
          "sub": "Ngày làm kế toán, tối về sưu tầm sách tiếng Anh… chưa đọc.",
          "keys": [
            "sưu tầm sách tiếng Anh"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "This year, I'll get better at English. For real this time!",
          "sub": "Năm nay mình phải giỏi tiếng Anh hơn. Lần này là thật!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: keep grinding iron, you get a needle. But Thảo hasn't picked which needle.",
          "sub": "Ông bà dặn: “Có công mài sắt, có ngày nên kim.” Nhưng Thảo chưa biết mài ra cái kim nào.",
          "keys": [
            "Có công mài sắt",
            "cái kim nào"
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
            "text": "Đặt mục tiêu sao cho khỏi bỏ?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:goal",
            "hl": [
              {
                "text": "khỏi bỏ",
                "at": "l1:quit halfway"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: cố chăm hơn",
            "x": 2028,
            "y": 180,
            "size": 52,
            "at": "l3:trying harder",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:one clear"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: đích rõ trong một câu",
            "x": 2028,
            "y": 290,
            "size": 58,
            "at": "l3:one clear sentence",
            "color": "accent",
            "hl": [
              {
                "text": "một câu",
                "at": "l3:one clear sentence"
              }
            ]
          },
          {
            "id": "b-q1",
            "t": "text",
            "text": "① Làm được gì?",
            "x": 2028,
            "y": 440,
            "size": 50,
            "at": "l4:able to do"
          },
          {
            "id": "b-q2",
            "t": "text",
            "text": "② Kiểm tra thế nào?",
            "x": 2528,
            "y": 440,
            "size": 50,
            "at": "l4:check"
          },
          {
            "id": "b-q3",
            "t": "text",
            "text": "③ Đến khi nào?",
            "x": 3098,
            "y": 440,
            "size": 50,
            "at": "l4:by when"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you set a learning goal you won't quit halfway?",
          "sub": "Vậy đặt mục tiêu học thế nào để không bỏ giữa chừng?",
          "keys": [
            "không bỏ giữa chừng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Usually it isn't you. The fix isn't trying harder; it's one clear sentence.",
          "sub": "Thường không tại bạn. Cách sửa không phải cố chăm hơn, mà là viết mục tiêu thành một câu rõ.",
          "keys": [
            "một câu rõ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "What you'll be able to do, how you'll check it, and by when.",
          "sub": "Làm được việc gì, kiểm tra bằng cách nào, và đến khi nào.",
          "keys": [
            "Làm được việc gì"
          ]
        }
      ],
      "ref": "intro,p5"
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
            "text": "7 chặng · 1 quý của Thảo",
            "x": 2028,
            "y": 535,
            "size": 52,
            "at": "l1:seven stops",
            "hl": [
              {
                "text": "1 quý",
                "at": "l1:quarter"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+0",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2263,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+260",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2498,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+520",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2733,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+780",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+1040",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+1300",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3438,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+1560",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Ngày 1",
            "x": 2050,
            "y": 628,
            "size": 44,
            "at": "l1:seven+120"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Ngày 2",
            "x": 2285,
            "y": 628,
            "size": 44,
            "at": "l1:seven+380"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Tuần 1",
            "x": 2520,
            "y": 628,
            "size": 44,
            "at": "l1:seven+640"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Tuần 2",
            "x": 2755,
            "y": 628,
            "size": 44,
            "at": "l1:seven+900"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Tuần 4",
            "x": 2990,
            "y": 628,
            "size": 44,
            "at": "l1:seven+1160"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Tháng 2",
            "x": 3225,
            "y": 628,
            "size": 44,
            "at": "l1:seven+1420"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "Tháng 3",
            "x": 3460,
            "y": 628,
            "size": 44,
            "at": "l1:seven+1680"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Thảo through one quarter, in seven stops. Bring snacks.",
          "sub": "Mình theo Thảo qua một quý, bảy chặng. Mang ít đồ ăn vặt nhé.",
          "keys": [
            "một quý"
          ]
        }
      ],
      "ref": "p23"
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
            "text": "① Ngày 1 · Vì sao hay bỏ?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:first stop"
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
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l2",
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
            "at": "l1:monday",
            "caption": "Ngày 1 · tối thứ Hai",
            "icon": "laptop"
          },
          {
            "id": "c-v1",
            "t": "text",
            "text": "“Giỏi tiếng Anh hơn”",
            "x": 3996,
            "y": 170,
            "size": 54,
            "at": "l4:fog",
            "color": "muted"
          },
          {
            "id": "c-fin",
            "t": "text",
            "text": "→ không có vạch đích",
            "x": 3996,
            "y": 255,
            "size": 52,
            "at": "l4:finish line",
            "color": "coral",
            "hl": [
              {
                "text": "vạch đích",
                "at": "l4:finish line"
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
          "say": "First stop: day one, Monday night. A brand new course.",
          "sub": "Chặng một: ngày đầu, tối thứ Hai. Khoá học mới tinh.",
          "keys": [
            "ngày đầu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "My goal? Better English. Clear enough, right?",
          "sub": "Mục tiêu á? Giỏi tiếng Anh hơn. Rõ rồi còn gì?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Clear as fog. No finish line, so weeks later, you can't tell how far you've come.",
          "sub": "Rõ như sương mù. Không có điểm kết thúc, học mấy tuần vẫn không biết đã đi bao xa.",
          "keys": [
            "không có điểm kết thúc"
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
      "ref": "p1"
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
            "id": "c-no",
            "t": "text",
            "text": "Không thấy tiến bộ → động lực tụt",
            "x": 3996,
            "y": 345,
            "size": 48,
            "at": "l1:progress",
            "hl": [
              {
                "text": "động lực tụt",
                "at": "l1:leaks"
              }
            ]
          },
          {
            "id": "c-tal",
            "t": "text",
            "text": "“Mình không có năng khiếu”",
            "x": 3996,
            "y": 425,
            "size": 48,
            "at": "l1:talent",
            "color": "muted"
          },
          {
            "id": "c-talx",
            "t": "strike",
            "over": "c-tal",
            "at": "l3:opposite"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Đích rõ: tuần nào cũng gần hơn",
            "x": 4816,
            "y": 690,
            "size": 52,
            "at": "l3:closer",
            "color": "accent",
            "hl": [
              {
                "text": "gần hơn",
                "at": "l3:closer"
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
          "say": "No visible progress, so motivation leaks like a flat tyre, and you think: no talent.",
          "sub": "Không thấy tiến bộ, động lực xì dần như lốp xe thủng, rồi nghĩ “mình không có năng khiếu”.",
          "keys": [
            "động lực xì dần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A visible target does the opposite: every week, a little closer.",
          "sub": "Đích nhìn thấy được thì ngược lại: tuần nào cũng gần hơn một chút.",
          "keys": [
            "gần hơn một chút"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Proof: Thảo's colleague, an order coordinator who emails foreign customers daily.",
          "sub": "Bằng chứng: chị đồng nghiệp điều phối đơn hàng, ngày nào cũng trả lời email khách nước ngoài."
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s06b",
      "module": "BRK-04",
      "data": {
        "title": "Chị điều phối đơn hàng",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Năm nay phải giỏi tiếng Anh: hai sách, ba khoá",
        "right": "Ba tháng: tự viết email báo đơn giao chậm, một khoá",
        "wrongIllus": "books",
        "rightIllus": "e-mail"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: get good at English. Three courses, none finished.",
          "sub": "Trước: “giỏi tiếng Anh”. Ba khoá, chẳng khoá nào xong.",
          "keys": [
            "chẳng khoá nào xong"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: in three months, late-delivery emails, alone.",
          "sub": "Sau: ba tháng, tự viết email báo giao chậm.",
          "keys": [
            "ba tháng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "whoosh"
        }
      ],
      "ref": "p3"
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
          }
        ],
        "items": [
          {
            "id": "c-why",
            "t": "text",
            "text": "việc thật · có hạn · có cách đo",
            "x": 3996,
            "y": 515,
            "size": 46,
            "at": "l1:real",
            "hl": [
              {
                "text": "có cách đo",
                "at": "l1:a check"
              }
            ]
          },
          {
            "id": "c-rut",
            "t": "text",
            "text": "Đích mờ dễ bỏ, rõ dễ đi",
            "x": 3996,
            "y": 595,
            "size": 56,
            "at": "l2:blurry",
            "color": "accent",
            "hl": [
              {
                "text": "rõ dễ đi",
                "at": "l2:clear one"
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
          "say": "Why better? Real daily work, a deadline, a check, and her time not split three ways.",
          "sub": "Vì sao tốt hơn? Việc thật hằng ngày, có hạn, có cách đo, thời gian không chia ba.",
          "keys": [
            "có cách đo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A blurry target is easy to quit. A clear one is easy to follow.",
          "sub": "Đích mờ thì dễ bỏ, đích rõ thì dễ đi.",
          "keys": [
            "Đích mờ thì dễ bỏ"
          ]
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
            "at": "l5",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Ngày 2 · Viết lại mục tiêu",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:day two"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6944,
            "y": 150,
            "w": 640,
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
                "memo",
                "pen"
              ],
              "camera": [
                {
                  "at": "l3",
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
            "at": "l1:rewrites",
            "caption": "Ngày 2 · tối thứ Ba",
            "icon": "memo"
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 175,
            "w": 50,
            "h": 50,
            "at": "l2:action",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 157,
            "size": 62,
            "at": "l2:action+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Làm được gì: một hành động",
            "x": 6039,
            "y": 167,
            "size": 46,
            "at": "l2:action+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 265,
            "w": 50,
            "h": 50,
            "at": "l2:check",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 247,
            "size": 62,
            "at": "l2:check+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Kiểm tra: việc thật, bài thử nhỏ",
            "x": 6039,
            "y": 257,
            "size": 46,
            "at": "l2:check+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 355,
            "w": 50,
            "h": 50,
            "at": "l5:three months",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 337,
            "size": 62,
            "at": "l5:three months+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Thời hạn: 1–3 tháng",
            "x": 6039,
            "y": 347,
            "size": 46,
            "at": "l5:three months+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: day two. Thảo rewrites her goal.",
          "sub": "Chặng hai: ngày thứ hai. Thảo viết lại mục tiêu, trịnh trọng như ký hợp đồng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "An action you can do, and a check: a real task or small test.",
          "sub": "Một hành động làm được, và cách kiểm tra: một việc thật hay bài thử nhỏ.",
          "keys": [
            "bài thử nhỏ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "In three months, I can read English contracts on my own.",
          "sub": "Trong ba tháng, mình tự đọc hiểu được hợp đồng tiếng Anh.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "My check: one real contract from work, no help.",
          "sub": "Kiểm tra: đọc một hợp đồng thật ở công ty, không nhờ ai.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "For working people, one to three months is easiest to track.",
          "sub": "Với nhiều người đi làm, mốc một đến ba tháng là dễ theo dõi nhất.",
          "keys": [
            "một đến ba tháng"
          ]
        }
      ],
      "ref": "p5,p6"
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
          }
        ],
        "items": [
          {
            "id": "d4-c0",
            "t": "box",
            "x": 5964,
            "y": 445,
            "w": 50,
            "h": 50,
            "at": "l1:the reason",
            "stroke": 5
          },
          {
            "id": "d4-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 427,
            "size": 62,
            "at": "l1:the reason+600",
            "color": "accent"
          },
          {
            "id": "d4-l0",
            "t": "text",
            "text": "Lý do: vì sao với riêng mình",
            "x": 6039,
            "y": 437,
            "size": 46,
            "at": "l1:the reason+200"
          },
          {
            "id": "d-mag",
            "t": "illus",
            "name": "magnet",
            "x": 6784,
            "y": 430,
            "size": 80,
            "at": "l3:magnet"
          },
          {
            "id": "d-hr",
            "t": "text",
            "text": "“Mỗi ngày học một tiếng”",
            "x": 5964,
            "y": 530,
            "size": 48,
            "at": "l4:one hour",
            "color": "muted"
          },
          {
            "id": "d-hrx",
            "t": "strike",
            "over": "d-hr",
            "at": "l4:unchanged"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Giờ = đường đi · việc làm được = đích",
            "x": 5964,
            "y": 610,
            "size": 52,
            "at": "l5:road",
            "color": "accent",
            "hl": [
              {
                "text": "việc làm được = đích",
                "at": "l5:destination"
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
          "say": "Line four, often skipped: the reason. Hers: foreign partners, no translator. Heavier than: English matters.",
          "sub": "Dòng thứ tư hay bị bỏ: lý do. Của Thảo: tự làm việc với đối tác nước ngoài, không nhờ ai dịch. Nặng hơn hẳn “vì tiếng Anh quan trọng”.",
          "keys": [
            "lý do"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "On tired evenings, it pulls you to your desk like a magnet.",
          "sub": "Những tối mệt, chính dòng ấy kéo bạn ngồi vào bàn như nam châm.",
          "keys": [
            "như nam châm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Count skills, not hours: one hour a day can pass, skill unchanged.",
          "sub": "Đặt mục tiêu theo việc làm được, không theo giờ: “mỗi ngày một tiếng” có thể trôi qua mà kỹ năng không đổi."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Hours are the road. Skills are the destination.",
          "sub": "Số giờ chỉ là đường đi, việc làm được mới là đích.",
          "keys": [
            "việc làm được mới là đích"
          ]
        }
      ],
      "ref": "p6,p8,p9"
    },
    {
      "id": "s09b",
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
              "d-ex1",
              "d-ex2"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l2",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-ex1",
            "t": "text",
            "text": "“Giỏi bảng tính” →",
            "x": 5964,
            "y": 700,
            "size": 44,
            "at": "l1:spreadsheets",
            "color": "muted"
          },
          {
            "id": "d-ex2",
            "t": "text",
            "text": "báo cáo có biểu đồ, tự làm",
            "x": 6374,
            "y": 700,
            "size": 44,
            "at": "l1:sales report",
            "color": "accent",
            "hl": [
              {
                "text": "tự làm",
                "at": "l1:alone"
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
          "say": "Not: good at spreadsheets. But: by quarter end, I make the monthly sales report with charts, alone.",
          "sub": "Đừng viết “giỏi bảng tính”, hãy viết: cuối quý, tôi tự làm được báo cáo doanh số tháng có biểu đồ.",
          "keys": [
            "báo cáo doanh số tháng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Now you know what to practise, and when you've arrived.",
          "sub": "Câu này cho biết hôm nay cần luyện gì, và lúc nào là đạt.",
          "keys": [
            "lúc nào là đạt"
          ]
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
            "text": "③ Tuần 1 · Chia nhỏ cái đích",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l2:finish"
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
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l2:week one",
            "caption": "Tuần 1 · giờ nghỉ trưa",
            "icon": "page-facing-up"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Liệt kê việc thật khi đạt đích",
            "x": 7932,
            "y": 165,
            "size": 46,
            "at": "l2:list+300"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "→ chọn việc dễ nhất cho tuần 1",
            "x": 7932,
            "y": 245,
            "size": 46,
            "at": "l2:easiest",
            "color": "accent",
            "hl": [
              {
                "text": "dễ nhất",
                "at": "l2:easiest"
              }
            ]
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "VD: 15 câu hay gặp khi họp",
            "x": 7932,
            "y": 330,
            "size": 44,
            "at": "l4:fifteen",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Third stop: week one. The finish is far, so list its real tasks, and pick the easiest.",
          "sub": "Chặng ba: tuần một. Đích còn xa, nên liệt kê việc thật sẽ làm khi tới đích, rồi chọn việc dễ nhất.",
          "keys": [
            "việc dễ nhất"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One small goal a week, like fifteen common meeting phrases.",
          "sub": "Mỗi tuần một mục tiêu nhỏ đánh dấu được “xong”, như dùng được mười lăm câu hay gặp khi họp.",
          "keys": [
            "Mỗi tuần một mục tiêu nhỏ"
          ]
        }
      ],
      "ref": "p10"
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
          }
        ],
        "items": [
          {
            "id": "e-mic",
            "t": "illus",
            "name": "studio-microphone",
            "x": 7932,
            "y": 420,
            "size": 80,
            "at": "l1:recording"
          },
          {
            "id": "e-rec",
            "t": "text",
            "text": "Ghi lại mức hôm nay",
            "x": 8032,
            "y": 430,
            "size": 50,
            "at": "l1:record",
            "hl": [
              {
                "text": "hôm nay",
                "at": "l1:day one"
              }
            ]
          },
          {
            "id": "e-cmp",
            "t": "text",
            "text": "Cuối tháng làm lại → đặt cạnh nhau",
            "x": 7932,
            "y": 520,
            "size": 46,
            "at": "l2:same test",
            "color": "accent",
            "hl": [
              {
                "text": "đặt cạnh nhau",
                "at": "l2:side by side"
              }
            ]
          },
          {
            "id": "e-one",
            "t": "text",
            "text": "Tối đa 2 · còn lại “để sau”",
            "x": 8752,
            "y": 690,
            "size": 50,
            "at": "l4:at most two",
            "color": "accent",
            "hl": [
              {
                "text": "“để sau”",
                "at": "l4:later list"
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
          "say": "On day one, record your level: an email you wrote, or a two-minute recording.",
          "sub": "Ngay hôm đầu, ghi lại mức hiện tại: một email tự viết, hay hai phút ghi âm tự giới thiệu.",
          "keys": [
            "ghi lại mức hiện tại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Month's end, redo the same test. Slow progress only shows side by side.",
          "sub": "Cuối tháng làm lại đúng bài đó. Tiến bộ chậm chỉ thấy khi đặt hai bản cạnh nhau.",
          "keys": [
            "đặt hai bản cạnh nhau"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One goal, at most two; the rest on a later list. Ten goals means minutes each.",
          "sub": "Một, nhiều nhất hai mục tiêu; còn lại ghi “để sau”. Mười mục tiêu thì mỗi cái được vài phút.",
          "keys": [
            "“để sau”"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Meanwhile, meet Dũng, a technician who dreams of team leader.",
          "sub": "Cùng tuần ấy, ở phòng họp: đây là Dũng, kỹ thuật viên mơ lên trưởng nhóm."
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "meeting",
        "label": "Cùng tuần · phòng họp",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Chỉ dựa vào cảm giác “vẫn dở”",
          "why": "Chưa từng nghe lại để so, nên tiến bộ thật vẫn không nhìn thấy.",
          "rule": "Ghi lại hôm nay, tháng sau mới thấy mình đã lớn"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Six months of practice, still as bad as before. I'll give up.",
          "sub": "Học nói nửa năm mà vẫn dở như cũ. Chắc bỏ thôi.",
          "face": "sad",
          "pose": "shrug",
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
          "say": "You never once listened back to compare.",
          "sub": "Bạn chưa từng nghe lại để so lần nào.",
          "keys": [
            "nghe lại để so"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Quay lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "My recording from six months ago... I hesitate much less now!",
          "sub": "Ghi âm buổi họp nửa năm trước… Ồ, giờ mình bớt ngập ngừng hẳn!",
          "phase": "redo",
          "face": "surprised",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Record today; next month, you'll see you've grown.",
          "sub": "Ghi lại hôm nay, tháng sau mới thấy mình đã lớn.",
          "phase": "redo",
          "keys": [
            "tháng sau mới thấy mình đã lớn"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p13,p14"
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
            "at": "l3",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Tuần 2 · Giờ nào, nguồn nào?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:busy"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "hot-beverage",
                "sunrise"
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
            "at": "l1:week two",
            "caption": "Tuần 2 · 6:30 sáng",
            "icon": "sunrise"
          },
          {
            "id": "f-clock",
            "t": "illus",
            "name": "stopwatch",
            "x": 60,
            "y": 1250,
            "size": 80,
            "at": "l3:twenty"
          },
          {
            "id": "f-20",
            "t": "text",
            "text": "20 phút lúc còn tỉnh",
            "x": 160,
            "y": 1260,
            "size": 54,
            "at": "l3:twenty",
            "color": "accent",
            "hl": [
              {
                "text": "20 phút",
                "at": "l3:twenty minutes"
              }
            ]
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "+ vài khoảng 5–10 phút để ôn",
            "x": 60,
            "y": 1350,
            "size": 46,
            "at": "l4:five"
          },
          {
            "id": "f-wait",
            "t": "text",
            "text": "Chờ một tối trống",
            "x": 60,
            "y": 1435,
            "size": 48,
            "at": "l3:free evening",
            "color": "muted"
          },
          {
            "id": "f-waitx",
            "t": "strike",
            "over": "f-wait",
            "at": "l4:enough"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: week two. Where does a busy accountant find time?",
          "sub": "Chặng bốn: tuần hai. Kế toán bận rộn lấy đâu ra thời gian?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Twenty minutes with coffee, before the emails wake up.",
          "sub": "Hai mươi phút bên cốc cà phê, trước khi email kịp thức dậy.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Smart. Don't wait for a free evening: twenty minutes while your mind is fresh.",
          "sub": "Khôn đấy. Đừng chờ tối trống: hai mươi phút lúc đầu óc còn tỉnh.",
          "keys": [
            "Hai mươi phút lúc đầu óc còn tỉnh"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Plus a few five-minute gaps to review. Enough for most goals.",
          "sub": "Cộng vài khoảng năm, mười phút để ôn. Thế là đủ cho phần lớn mục tiêu.",
          "keys": [
            "năm, mười phút"
          ]
        }
      ],
      "ref": "p15"
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
            "id": "f-book",
            "t": "illus",
            "name": "notebook",
            "x": 60,
            "y": 1530,
            "size": 80,
            "at": "l1:main source"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Một nguồn chính, lộ trình rõ",
            "x": 160,
            "y": 1540,
            "size": 50,
            "at": "l1:main source",
            "hl": [
              {
                "text": "Một nguồn chính",
                "at": "l1:one main source"
              }
            ]
          },
          {
            "id": "f-vid",
            "t": "text",
            "text": "video khác: chỉ tra khi kẹt",
            "x": 60,
            "y": 1630,
            "size": 44,
            "at": "l1:stuck",
            "color": "muted"
          },
          {
            "id": "f-job",
            "t": "text",
            "text": "Việc gấp → làm việc tuần này",
            "x": 880,
            "y": 1780,
            "size": 50,
            "at": "l3:this week",
            "color": "coral",
            "hl": [
              {
                "text": "việc tuần này",
                "at": "l3:this week"
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
          "say": "One main source with a clear path. Other videos, only when you're stuck.",
          "sub": "Một nguồn chính có lộ trình rõ. Video khác chỉ để tra thêm khi kẹt.",
          "keys": [
            "một nguồn chính"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Urgent skill for work? Go straight to the tasks due this week.",
          "sub": "Kỹ năng cho việc gấp ở chỗ làm? Đi thẳng vào những việc phải làm tuần này.",
          "keys": [
            "việc phải làm tuần này"
          ]
        }
      ],
      "ref": "p16,p17"
    },
    {
      "id": "s14b",
      "module": "BRK-12",
      "data": {
        "word": "20 phút",
        "sub": "Hai mươi phút, lúc đầu óc còn tỉnh",
        "from": [
          400,
          360
        ],
        "others": [
          "nguồn chính",
          "…",
          "5–10 phút"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Twenty minutes.",
          "sub": "Hai mươi phút.",
          "keys": [
            "Hai mươi phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Small, fresh, daily. Not an evening that never comes.",
          "sub": "Nhỏ, tỉnh, mỗi ngày. Không phải buổi tối rảnh chẳng bao giờ tới."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh",
          "offsetMs": 1100
        }
      ],
      "ref": "p15"
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
            "text": "⑤ Tuần 4 · Học sao cho nhớ?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:week four"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "closed-book",
                "notebook"
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
            "at": "l1:week four",
            "caption": "Tuần 4 · giờ nghỉ trưa",
            "icon": "closed-book"
          },
          {
            "id": "g-re",
            "t": "text",
            "text": "Đọc đi đọc lại → quen mặt chữ",
            "x": 2028,
            "y": 1255,
            "size": 46,
            "at": "l3:rereading+900",
            "color": "muted"
          },
          {
            "id": "g-rex",
            "t": "strike",
            "over": "g-re",
            "at": "l4:close the book"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "① Gập sách, tự trả lời",
            "x": 2028,
            "y": 1345,
            "size": 50,
            "at": "l4:close the book",
            "color": "accent",
            "hl": [
              {
                "text": "tự trả lời",
                "at": "l4:answer"
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
          "say": "Fifth stop: week four. Thảo has read one contract page five times.",
          "sub": "Chặng năm: tuần bốn. Thảo đã đọc một trang hợp đồng năm lần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "So familiar. So why can't I explain it?",
          "sub": "Trông quen lắm rồi. Sao bảo giải thích lại thì chịu?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Rereading only makes words look familiar. Not remembered.",
          "sub": "Vì đọc đi đọc lại chỉ làm mặt chữ quen hơn, chưa chắc đã nhớ.",
          "keys": [
            "mặt chữ quen hơn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Close the book, answer from memory, then open to check. It sticks better.",
          "sub": "Gập sách lại, tự trả lời, rồi mới mở ra kiểm tra. Cách ấy nhớ chắc hơn nhiều.",
          "keys": [
            "Gập sách lại"
          ]
        }
      ],
      "ref": "p18"
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
          }
        ],
        "items": [
          {
            "id": "g-cal",
            "t": "illus",
            "name": "spiral-notepad",
            "x": 2028,
            "y": 1430,
            "size": 70,
            "at": "l1:review"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "② Ôn giãn, cách xa dần",
            "x": 2118,
            "y": 1440,
            "size": 48,
            "at": "l1:next day",
            "hl": [
              {
                "text": "Ôn giãn",
                "at": "l1:growing gaps"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "③ Ghi ngắn, câu hỏi ở lề",
            "x": 2028,
            "y": 1530,
            "size": 48,
            "at": "l2:own words",
            "hl": [
              {
                "text": "câu hỏi ở lề",
                "at": "l2:margin"
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
          "say": "Review with growing gaps: the next day, a few days later, next week.",
          "sub": "Ôn cùng nội dung nhiều lần, khoảng cách xa dần: hôm sau, vài ngày sau, tuần sau.",
          "keys": [
            "khoảng cách xa dần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And short notes in your own words, with questions in the margin.",
          "sub": "Và ghi chép ngắn bằng lời của bạn, thêm câu hỏi ở lề để sau này tự hỏi lại.",
          "keys": [
            "câu hỏi ở lề"
          ]
        }
      ],
      "ref": "p19,p20"
    },
    {
      "id": "s16b",
      "module": "BRK-07",
      "data": {
        "question": "Tháng thứ hai, hết hứng rồi thì sao?",
        "illus": "downcast-face-with-sweat"
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
          "say": "Month two. The new shine wears off. Then what?",
          "sub": "Tháng thứ hai, phần mới lạ hết rồi. Rồi sao?",
          "keys": [
            "Tháng thứ hai"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
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
            "text": "⑥ Tháng 2 · Lỡ gần ba tuần",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:month two",
            "hl": [
              {
                "text": "Lỡ gần ba tuần",
                "at": "l1:three weeks"
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "face": "sad",
                  "pose": "shrug"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "enter": "walk",
                  "at": "l3"
                }
              ],
              "props": [
                "ledger",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "medium",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "medium",
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
            "at": "l1:month two",
            "caption": "Tháng 2 · mùa quyết toán",
            "icon": "ledger"
          },
          {
            "id": "h-big",
            "t": "text",
            "text": "Đích cũ: cả hợp đồng, 3 tháng",
            "x": 3996,
            "y": 1255,
            "size": 46,
            "at": "l5:smaller",
            "color": "muted"
          },
          {
            "id": "h-bigx",
            "t": "strike",
            "over": "h-big",
            "at": "l5:not deleted"
          },
          {
            "id": "h-small",
            "t": "text",
            "text": "Mới: điều khoản thanh toán, 2 tháng",
            "x": 3996,
            "y": 1340,
            "size": 46,
            "at": "l5:smaller+600",
            "color": "accent",
            "hl": [
              {
                "text": "điều khoản thanh toán",
                "at": "l5:not deleted"
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
          "say": "Sixth stop: month two, year-end closing. Three weeks missed.",
          "sub": "Chặng sáu: tháng thứ hai, quyết toán cuối năm dồn tới. Thảo lỡ gần ba tuần.",
          "keys": [
            "lỡ gần ba tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "This late already? Then I'll just stop.",
          "sub": "Trễ thế này rồi thì thôi vậy.",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Enter Lan, her friend from customer care, with one question.",
          "sub": "Đây là Lan, cô bạn bên chăm sóc khách hàng, ghé qua hỏi đúng một câu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "What if you made it smaller?",
          "sub": "Thu nhỏ lại thì sao?",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Okay. Just the payment terms, in the next two months. Smaller, not deleted.",
          "sub": "Ừ nhỉ. Chỉ phần điều khoản thanh toán, trong hai tháng tới. Nhỏ lại, không xoá.",
          "face": "thinking"
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p23"
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
          }
        ],
        "items": [
          {
            "id": "h-new",
            "t": "text",
            "text": "Gắn vào việc hằng ngày",
            "x": 3996,
            "y": 1435,
            "size": 50,
            "at": "l1:attach",
            "hl": [
              {
                "text": "việc hằng ngày",
                "at": "l1:every day"
              }
            ]
          },
          {
            "id": "h-5",
            "t": "text",
            "text": "+ bản 5 phút cho ngày bận",
            "x": 3996,
            "y": 1515,
            "size": 46,
            "at": "l2:five minute",
            "color": "accent"
          },
          {
            "id": "h-chk",
            "t": "text",
            "text": "Đích to? Ít giờ? Sai cách?",
            "x": 3996,
            "y": 1605,
            "size": 50,
            "at": "l3:too big",
            "color": "coral"
          },
          {
            "id": "h-rut",
            "t": "text",
            "text": "Trễ hạn: dời mốc, đừng xoá đích",
            "x": 4816,
            "y": 1780,
            "size": 50,
            "at": "l4:move the date",
            "color": "accent",
            "hl": [
              {
                "text": "đừng xoá đích",
                "at": "l4:delete the goal"
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
          "say": "When newness fades, many quit. So attach a small study task to something you do every day.",
          "sub": "Hết mới lạ là lúc nhiều người bỏ nhất. Vậy hãy gắn một việc học nhỏ vào việc vẫn làm hằng ngày.",
          "keys": [
            "gắn một việc học nhỏ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Keep a five minute version for crazy days.",
          "sub": "Và đặt sẵn phiên bản năm phút cho những ngày bận tối mắt.",
          "keys": [
            "phiên bản năm phút"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Missed the date? Goal too big, time too little, or method wrong?",
          "sub": "Đến hạn chưa đạt? Mục tiêu quá lớn, thời gian quá ít, hay cách học chưa hợp?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Move the date, or shrink it. But don't delete the goal.",
          "sub": "Dời mốc hoặc thu nhỏ. Trễ hạn thì dời mốc, đừng xoá đích.",
          "keys": [
            "đừng xoá đích"
          ]
        }
      ],
      "ref": "p21,p22,p24"
    },
    {
      "id": "s19",
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
            "at": "l5",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Tháng 3 · Có người hỏi lại",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l2:month three"
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
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "medium",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2:manager",
            "caption": "Tháng 3 · phòng kinh doanh",
            "icon": "office-building"
          },
          {
            "id": "i-who",
            "t": "text",
            "text": "Kể với người sẽ hỏi lại",
            "x": 5964,
            "y": 1255,
            "size": 50,
            "at": "l5:ask again",
            "hl": [
              {
                "text": "hỏi lại",
                "at": "l5:ask again"
              }
            ]
          },
          {
            "id": "i-net",
            "t": "text",
            "text": "Đăng mạng để được khen",
            "x": 5964,
            "y": 1340,
            "size": 46,
            "at": "l5:praise",
            "color": "muted"
          },
          {
            "id": "i-netx",
            "t": "strike",
            "over": "i-net",
            "at": "l5:praise+500"
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop, month three. This is Cô Hoa, Thảo's manager, calm as a lotus pond.",
          "sub": "Chặng bảy, tháng thứ ba. Đây là cô Hoa, trưởng phòng, sếp của Thảo. Điềm tĩnh như ao sen.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "At month end, could you ask if I can read this clause alone?",
          "sub": "Cuối tháng chị hỏi em xem em đã tự đọc được loại điều khoản này chưa nhé.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Deal. End of the month, I'll ask.",
          "sub": "Được. Cuối tháng chị hỏi.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Someone who will ask again beats posting online for praise.",
          "sub": "Người sẽ hỏi lại tiến độ giúp ích hơn đăng lên mạng để được khen.",
          "keys": [
            "hỏi lại tiến độ"
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
      "ref": "p27"
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
          }
        ],
        "items": [
          {
            "id": "i-memo",
            "t": "illus",
            "name": "memo",
            "x": 5964,
            "y": 1430,
            "size": 70,
            "at": "l1:mistake"
          },
          {
            "id": "i-err",
            "t": "text",
            "text": "Lỗi = thông tin, không phải “mình kém”",
            "x": 6054,
            "y": 1440,
            "size": 44,
            "at": "l1:information",
            "hl": [
              {
                "text": "thông tin",
                "at": "l1:information"
              }
            ]
          },
          {
            "id": "i-log",
            "t": "text",
            "text": "→ một dòng trong sổ lỗi",
            "x": 5964,
            "y": 1530,
            "size": 46,
            "at": "l2:mistake log",
            "color": "accent",
            "hl": [
              {
                "text": "sổ lỗi",
                "at": "l2:mistake log"
              }
            ]
          },
          {
            "id": "i-2m",
            "t": "text",
            "text": "Giải thích lại trong 2 phút",
            "x": 5964,
            "y": 1620,
            "size": 48,
            "at": "l3:two minutes"
          },
          {
            "id": "i-gap",
            "t": "text",
            "text": "chỗ nói vấp = chỗ còn hổng",
            "x": 6784,
            "y": 1780,
            "size": 48,
            "at": "l3:stumble",
            "color": "coral",
            "hl": [
              {
                "text": "chỗ còn hổng",
                "at": "l3:gap"
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
          "say": "Each mistake she corrects is information about one step to fix, not proof you're bad.",
          "sub": "Khi cô Hoa sửa một lỗi, đó là thông tin về một bước cần sửa, không phải bằng chứng bạn kém.",
          "keys": [
            "thông tin về một bước cần sửa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Write it as one line in a mistake log.",
          "sub": "Ghi nó thành một dòng trong sổ lỗi.",
          "keys": [
            "sổ lỗi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Once you can do it, explain it in two minutes. Where you stumble, there's a gap.",
          "sub": "Làm được rồi, thử giải thích lại trong hai phút. Chỗ nào nói vấp là chỗ còn hổng.",
          "keys": [
            "chỗ còn hổng"
          ]
        }
      ],
      "ref": "p25,p26"
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
            "at": "l3",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Hai tháng sau · cùng chiếc bàn",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:sunday"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "laptop"
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
            "at": "l1:same desk",
            "caption": "Hai tháng sau · tối Chủ nhật",
            "icon": "page-facing-up"
          },
          {
            "id": "j-ok",
            "t": "text",
            "text": "Điều khoản thanh toán: tự đọc ✓",
            "x": 7932,
            "y": 1255,
            "size": 46,
            "at": "l2:payment terms",
            "color": "accent",
            "hl": [
              {
                "text": "tự đọc",
                "at": "l2:alone"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Mài sắt… nhưng chọn kim nào”",
            "x": 7932,
            "y": 1690,
            "size": 50,
            "at": "l4:needle",
            "color": "accent",
            "hl": [
              {
                "text": "chọn kim nào",
                "at": "l4:which needle"
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
          "say": "Two months later. Sunday night, same desk, same books, now bookmarked.",
          "sub": "Hai tháng sau. Tối Chủ nhật, vẫn chiếc bàn ấy, chồng sách ấy, giờ đã có đánh dấu trang."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Payment terms. I read the whole section alone!",
          "sub": "Điều khoản thanh toán. Mình tự đọc hết cả phần, không nhờ ai!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "This time, she reached the end.",
          "sub": "Lần này, Thảo đi được đến cuối.",
          "keys": [
            "đi được đến cuối"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Keep grinding the iron, yes. But first, decide which needle.",
          "sub": "“Có công mài sắt, có ngày nên kim”, đúng. Nhưng trước hết, chọn kim nào đã.",
          "keys": [
            "chọn kim nào"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "to": "l1",
          "key": "tich-tac-dai"
        }
      ],
      "ref": "p23,p24"
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
          }
        ],
        "items": [
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1360,
            "w": 50,
            "h": 50,
            "at": "l1:three questions",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1342,
            "size": 62,
            "at": "l1:three questions+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Mục tiêu: 3 câu hỏi + lý do",
            "x": 8007,
            "y": 1352,
            "size": 40,
            "at": "l1:three questions+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1440,
            "w": 50,
            "h": 50,
            "at": "l1:record",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1422,
            "size": 62,
            "at": "l1:record+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Ghi lại mức hôm nay",
            "x": 8007,
            "y": 1432,
            "size": 40,
            "at": "l1:record+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1520,
            "w": 50,
            "h": 50,
            "at": "l1:week one",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1502,
            "size": 62,
            "at": "l1:week one+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Chọn mục tiêu tuần đầu",
            "x": 8007,
            "y": 1512,
            "size": 40,
            "at": "l1:week one+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1600,
            "w": 50,
            "h": 50,
            "at": "l1:redo",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1582,
            "size": 62,
            "at": "l1:redo+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Hẹn cuối tháng làm lại bài thử",
            "x": 8007,
            "y": 1592,
            "size": 40,
            "at": "l1:redo+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "To save: one goal, three questions, a reason. Record your level, pick a week one goal, and a date to redo the test.",
          "sub": "Để lưu: một mục tiêu, ba câu hỏi, một lý do. Ghi lại mức hôm nay, chọn mục tiêu tuần đầu, hẹn ngày làm lại bài thử.",
          "keys": [
            "làm lại bài thử"
          ]
        }
      ],
      "ref": "p28"
    },
    {
      "id": "s23",
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
            "at": "l1:one sentence",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l2:record",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:late",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l3:end",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 3468,
            "y": 330,
            "at": "l1:one sentence"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8572,
            "y": 420,
            "at": "l2:record"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1690,
            "at": "l3:late"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "h-rut"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:delete"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: quitting is rarely laziness. Write one sentence: do what, check how, by when.",
          "sub": "Tóm lại: bỏ cuộc hiếm khi vì lười. Viết đích thành một câu: làm được gì, kiểm tra thế nào, đến khi nào.",
          "keys": [
            "một câu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Record your start, to see how far you've come.",
          "sub": "Ghi lại điểm xuất phát, để thấy mình đã đi bao xa.",
          "keys": [
            "đã đi bao xa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And when you're late, move the date. Don't delete the goal.",
          "sub": "Và khi trễ hạn, dời mốc, đừng xoá đích.",
          "keys": [
            "đừng xoá đích"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s31",
      "module": "QUIZ-01",
      "ref": "questions[4]",
      "data": {
        "q": "What three things should a clear learning goal tell you?",
        "options": [
          "How many books you will buy, which teacher you like, and how you feel",
          "What you will be able to do, how you will check it, and by when",
          "How many hours you will sit, which website you use, and who is watching"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "bullseye",
        "why": "Số sách, số giờ hay cảm xúc không cho biết bạn đã đạt chưa."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What three things should a clear learning goal tell you?",
          "sub": "Một mục tiêu học tập rõ ràng phải nói được ba điều gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "What you will be able to do, how you will check it, and by when.",
          "sub": "Làm được gì, kiểm tra thế nào, và đến khi nào."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Books, hours or feelings do not show whether you arrived.",
          "sub": "Số sách, số giờ hay cảm xúc không cho biết bạn đã đạt chưa."
        }
      ],
      "beats": {
        "after": 500
      }
    },
    {
      "id": "s32",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A small goal for today: forty questions, right below.",
          "sub": "Mục tiêu nhỏ hôm nay: bốn mươi câu hỏi ngay bên dưới."
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
