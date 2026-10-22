// Kịch bản video W lần 3 (#110) — "Mở cửa hàng nhỏ, quán ăn: cần làm gì để giữ khách?" · chuỗi "Giữ khách cho cửa hàng nhỏ"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "keep-customers-small-shop--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "small-shop-owners",
    "slug": "keep-customers-small-shop",
    "door": "ky-nang",
    "level": "B1",
    "title": "Mở cửa hàng nhỏ, quán ăn: cần làm gì để giữ khách?",
    "series": "Giữ khách cho cửa hàng nhỏ"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô theo NĂM ĐẦU của quán cô Hoa (tối 1 tháng trước ngày mở → tuần trước ngày mở, ăn thử → tuần đầu → tháng thứ hai: bị chê tại quán + nửa đêm đánh giá xấu → tháng thứ ba: hàng nhập, người phụ → mỗi tối: cuốn sổ → mùa mưa: quán vắng → một năm sau, cùng bàn tối). Nhân vật theo w145/_series/small-shop-owners.md: Cô Hoa (gộp Huyền p5, Tùng p13, Ngân p18, Thắng p25), Bà Tư (người quen ăn thử p4), Bác Bình (khách lạ tuần đầu p7 → khách quen p24), Lan (bạn trẻ phụ quầy p18). Bỏ Sam của bản cũ. Tiệm tạp hoá p13 chuyển thành tủ nước của quán (cùng tình huống hộp sữa sắp hết hạn). ‘Canh nguội’ (s13) là ví dụ của câu hỏi 16. Không có số liệu ngoài bài: ‘3–4 món’, ‘mười mấy món’ (p5), ‘10 phút mỗi tối’ (p21). Cảnh ngắt nhịp: BRK-07 s11 (rehook trước chặng bị chê, p10), DLG s14 (trả lời lúc nửa đêm, p12–p14), BRK-04 s19 (tiền ngăn kéo ≠ tiền lời, p20), BRK-06 s22 (mùa mưa, sau Tết, quán mới, p23). Khép vòng: ‘Một lần bất tín, vạn lần bất tin’ → ‘một bát giữ đều, vạn lần khách quen’; buổi tối ở bàn nhà cô Hoa mở và khép. Câu đố giữ questions[10]. Bản cũ (W lần 3, #110): w145/bak/keep-customers-small-shop--w01.js.",
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
            "text": "4 việc nhỏ",
            "x": 60,
            "y": 120,
            "size": 150,
            "at": "l1:four",
            "color": "accent",
            "hl": [
              {
                "text": "4 việc nhỏ",
                "at": "l1:small things"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "làm đều tay mỗi ngày",
            "x": 70,
            "y": 330,
            "size": 56,
            "at": "l1:same way"
          },
          {
            "id": "a-big",
            "t": "text",
            "text": "Ta tưởng: phải làm gì to tát?",
            "x": 70,
            "y": 440,
            "size": 50,
            "at": "l2:something big",
            "color": "muted"
          },
          {
            "id": "a-bigx",
            "t": "strike",
            "over": "a-big",
            "at": "l3:small"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Four small things, done the same way every day. That is what brings customers back.",
          "sub": "Bốn việc nhỏ, làm đều tay mỗi ngày: đó là thứ kéo khách quay lại.",
          "keys": [
            "Bốn việc nhỏ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "We think it takes something big: big discounts, big banners, a big menu.",
          "sub": "Ta tưởng phải làm gì to tát: giảm giá to, băng rôn to, thực đơn to.",
          "keys": [
            "to tát"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Nope. Small things win, like ants carrying a mountain.",
          "sub": "Không đâu. Việc nhỏ mới thắng, như kiến tha lâu đầy tổ.",
          "keys": [
            "Việc nhỏ mới thắng"
          ]
        }
      ],
      "ref": "intro,outro"
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
                  "id": "hoa",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think"
                }
              ],
              "props": [
                "notebook",
                "steaming-bowl"
              ]
            },
            "at": "l1",
            "caption": "Tối · 1 tháng trước ngày mở quán",
            "icon": "notebook"
          },
          {
            "id": "a-menu",
            "t": "text",
            "text": "Thực đơn: mười mấy món!",
            "x": 900,
            "y": 660,
            "size": 46,
            "at": "l3:dishes",
            "color": "coral"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Mai khách có quay lại?",
            "x": 70,
            "y": 530,
            "size": 50,
            "at": "l4:come back",
            "hl": [
              {
                "text": "quay lại",
                "at": "l4:come back"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Một lần bất tín…”",
            "x": 60,
            "y": 640,
            "size": 52,
            "at": "l5:once",
            "color": "accent",
            "hl": [
              {
                "text": "bất tín",
                "at": "l5:break"
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
          "say": "Meet Cô Hoa.",
          "sub": "Đây là cô Hoa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A fine cook, opening a small eatery in her lane next month.",
          "sub": "Nấu khéo có tiếng, tháng sau mở quán ăn nhỏ đầu hẻm.",
          "keys": [
            "quán ăn nhỏ đầu hẻm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Over ten dishes! Every customer finds something.",
          "sub": "Thực đơn mười mấy món! Khách nào cũng có cái ăn.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Her biggest worry, every night: will they come back tomorrow?",
          "sub": "Nỗi lo lớn nhất mỗi tối: mai khách có quay lại không?",
          "keys": [
            "mai khách có quay lại không"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Grandma says: break trust once, doubted forever.",
          "sub": "Ông bà dặn: “Một lần bất tín, vạn lần bất tin.”",
          "keys": [
            "Một lần bất tín, vạn lần bất tin"
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
            "text": "Làm gì để khách quay lại?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:keeps",
            "hl": [
              {
                "text": "quay lại",
                "at": "l1:coming back"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: giảm giá, làm rầm rộ",
            "x": 2028,
            "y": 160,
            "size": 52,
            "at": "l2:discounts",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:small"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: việc nhỏ, làm đều",
            "x": 2028,
            "y": 250,
            "size": 60,
            "at": "l2:small",
            "color": "accent",
            "hl": [
              {
                "text": "làm đều",
                "at": "l2:evenly"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "• Món giữ đều",
            "x": 2028,
            "y": 350,
            "size": 50,
            "at": "l3:steady"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "• Chào hỏi tử tế",
            "x": 2868,
            "y": 350,
            "size": 50,
            "at": "l3:greeting"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "• Xử lý êm khi có chuyện",
            "x": 2028,
            "y": 425,
            "size": 50,
            "at": "l3:calm"
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "• Biết lời lỗ mỗi ngày",
            "x": 2868,
            "y": 425,
            "size": 50,
            "at": "l3:profit",
            "hl": [
              {
                "text": "lời lỗ",
                "at": "l3:profit"
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
          "say": "So what really keeps a small shop's customers coming back?",
          "sub": "Vậy rốt cuộc điều gì giữ khách cho một quán nhỏ?",
          "keys": [
            "giữ khách"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not discounts. Small things, done evenly.",
          "sub": "Không phải giảm giá, mà là việc nhỏ làm đều.",
          "keys": [
            "việc nhỏ làm đều"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Steady dishes. A kind greeting. Calm handling when trouble comes. And knowing your profit every day.",
          "sub": "Món giữ đều. Chào hỏi tử tế. Xử lý êm khi có chuyện. Và biết mỗi ngày lời lỗ bao nhiêu."
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
            "id": "b-yr",
            "t": "text",
            "text": "7 chặng, năm đầu của quán",
            "x": 2028,
            "y": 530,
            "size": 52,
            "at": "l1:seven",
            "hl": [
              {
                "text": "năm đầu",
                "at": "l1:first year"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 610,
            "w": 222,
            "h": 90,
            "at": "l1:seven+0",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2266,
            "y": 610,
            "w": 222,
            "h": 90,
            "at": "l1:seven+300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2504,
            "y": 610,
            "w": 222,
            "h": 90,
            "at": "l1:seven+600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2742,
            "y": 610,
            "w": 222,
            "h": 90,
            "at": "l1:seven+900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2980,
            "y": 610,
            "w": 222,
            "h": 90,
            "at": "l1:seven+1200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3218,
            "y": 610,
            "w": 222,
            "h": 90,
            "at": "l1:seven+1500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3456,
            "y": 610,
            "w": 222,
            "h": 90,
            "at": "l1:seven+1800",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Trước mở",
            "x": 2044,
            "y": 630,
            "size": 36,
            "at": "l1:seven+120"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Ăn thử",
            "x": 2282,
            "y": 630,
            "size": 36,
            "at": "l1:seven+420"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Tuần đầu",
            "x": 2520,
            "y": 630,
            "size": 36,
            "at": "l1:seven+720"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Bị chê",
            "x": 2758,
            "y": 630,
            "size": 36,
            "at": "l1:seven+1020"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Hàng, người",
            "x": 2996,
            "y": 630,
            "size": 36,
            "at": "l1:seven+1320"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Mỗi tối",
            "x": 3234,
            "y": 630,
            "size": 36,
            "at": "l1:seven+1620"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "Mùa mưa",
            "x": 3472,
            "y": 630,
            "size": 36,
            "at": "l1:seven+1920"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Cô Hoa through her first year, in seven stops.",
          "sub": "Cùng theo cô Hoa qua năm đầu mở quán, bảy chặng.",
          "keys": [
            "năm đầu mở quán"
          ]
        }
      ],
      "ref": "intro"
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
            "at": "a1",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "b3",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 1 tháng trước · Chọn món",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:first stop"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "kitchen",
              "actors": [
                {
                  "id": "hoa"
                }
              ],
              "left": {
                "label": "Cách A: mười mấy món",
                "ok": false
              },
              "right": {
                "label": "Cách B: ba bốn món",
                "ok": true
              }
            },
            "at": "l1:two versions",
            "caption": "Cùng một bếp, hai cách mở quán",
            "icon": "steaming-bowl"
          },
          {
            "id": "c-a",
            "t": "text",
            "text": "A: mười mấy món",
            "x": 3996,
            "y": 160,
            "size": 54,
            "at": "a1:ten",
            "color": "coral"
          },
          {
            "id": "c-a2",
            "t": "text",
            "text": "→ món chậm, vị lúc đậm lúc nhạt",
            "x": 4026,
            "y": 235,
            "size": 42,
            "at": "a2:slow",
            "color": "muted"
          },
          {
            "id": "c-a3",
            "t": "text",
            "text": "→ đồ ăn kèm bỏ đi",
            "x": 4026,
            "y": 300,
            "size": 42,
            "at": "a2:thrown",
            "color": "muted"
          },
          {
            "id": "c-b",
            "t": "text",
            "text": "B: ba bốn món chắc tay",
            "x": 3996,
            "y": 380,
            "size": 54,
            "at": "b1:three",
            "color": "accent"
          },
          {
            "id": "c-b2",
            "t": "text",
            "text": "→ bếp gọn, món nhanh, vị đều",
            "x": 4026,
            "y": 455,
            "size": 42,
            "at": "b2:tidy",
            "hl": [
              {
                "text": "vị đều",
                "at": "b2:same taste"
              }
            ]
          },
          {
            "id": "c-b3",
            "t": "text",
            "text": "Khách nhớ quán vì một món ngon",
            "x": 3996,
            "y": 540,
            "size": 46,
            "at": "b3:remember",
            "hl": [
              {
                "text": "một món ngon",
                "at": "b3:great dish"
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
          "say": "First stop: a month before opening. Two versions of Cô Hoa's menu.",
          "sub": "Chặng một: một tháng trước ngày mở. Thực đơn của cô Hoa, hai phiên bản.",
          "keys": [
            "hai phiên bản"
          ]
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "hoa",
          "say": "Over ten dishes, so everyone finds something!",
          "sub": "Mười mấy món, khách nào cũng có cái ăn!",
          "phase": "a",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "a2",
          "lang": "en",
          "say": "Every morning: slow dishes, uneven broth, and side food thrown out at night.",
          "sub": "Sáng nào cũng luống cuống: món chậm, nước dùng lúc đậm lúc nhạt, đồ kèm bỏ đi.",
          "phase": "a"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "hoa",
          "say": "Just three or four dishes, cooked really well.",
          "sub": "Chỉ ba bốn món, làm thật chắc tay.",
          "phase": "b",
          "pose": "thumb",
          "face": "happy"
        },
        {
          "id": "b2",
          "lang": "en",
          "say": "Tidy kitchen, fast service, same taste. More regulars? Add one dish at a time.",
          "sub": "Bếp gọn, món ra nhanh, vị đều. Khách quen đông dần thì thêm từng món một.",
          "phase": "b"
        },
        {
          "id": "b3",
          "lang": "en",
          "say": "Customers remember one great dish, not a long menu.",
          "sub": "Khách nhớ quán vì một thứ ngon, không vì thực đơn dài.",
          "phase": "b"
        }
      ],
      "ref": "p1,p5"
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
            "id": "c-rule",
            "t": "text",
            "text": "Ít món chắc > nhiều món vội",
            "x": 3996,
            "y": 680,
            "size": 56,
            "at": "l1:few",
            "color": "accent",
            "hl": [
              {
                "text": "Ít món chắc",
                "at": "l1:carefully"
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
          "say": "A few dishes done carefully beat many dishes done in a hurry.",
          "sub": "Ít món làm chắc, hơn nhiều món làm vội.",
          "keys": [
            "Ít món làm chắc"
          ]
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Tuần trước ngày mở · Ăn thử",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:second stop"
          },
          {
            "id": "d-g",
            "t": "text",
            "text": "Giá bán = cộng đủ:",
            "x": 5964,
            "y": 150,
            "size": 52,
            "at": "l2:add"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "+ nguyên liệu",
            "x": 5994,
            "y": 225,
            "size": 46,
            "at": "l2:ingredients"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "+ mặt bằng",
            "x": 5994,
            "y": 285,
            "size": 46,
            "at": "l2:rent"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "+ điện nước",
            "x": 5994,
            "y": 345,
            "size": 46,
            "at": "l2:power"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "+ công của mình",
            "x": 5994,
            "y": 405,
            "size": 46,
            "at": "l2:own work",
            "color": "coral",
            "hl": [
              {
                "text": "công của mình",
                "at": "l3:forget"
              }
            ]
          },
          {
            "id": "d-then",
            "t": "text",
            "text": "→ rồi mới đặt giá",
            "x": 6304,
            "y": 405,
            "size": 46,
            "at": "l2:only then",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: the week before opening. First job: the price.",
          "sub": "Chặng hai: tuần trước ngày mở. Việc đầu tiên: giá bán."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Add ingredients, rent, power and water, and your own work. Only then set the price.",
          "sub": "Cộng tiền nguyên liệu, mặt bằng, điện nước và cả công của mình, rồi mới đặt giá.",
          "keys": [
            "công của mình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Forget your work, and you cook for free all year.",
          "sub": "Quên công mình là nấu không công cả năm."
        }
      ],
      "ref": "p2,p4"
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
            "at": "l4",
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
            "id": "d-cl",
            "t": "text",
            "text": "Bếp, quầy: sạch từ ngày đầu",
            "x": 5964,
            "y": 500,
            "size": 46,
            "at": "l1:clean",
            "hl": [
              {
                "text": "sạch từ ngày đầu",
                "at": "l1:day one"
              }
            ]
          },
          {
            "id": "d-pp",
            "t": "text",
            "text": "Giấy tờ: hỏi phường, xã",
            "x": 5964,
            "y": 575,
            "size": 44,
            "at": "l2:ward",
            "hl": [
              {
                "text": "hỏi phường, xã",
                "at": "l2:ask"
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
              "set": "kitchen",
              "actors": [
                {
                  "id": "tu",
                  "side": "left",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l3"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "stand"
                }
              ],
              "props": [
                "steaming-bowl"
              ]
            },
            "at": "l3:meet",
            "caption": "Tuần trước ngày mở · mời ăn thử",
            "icon": "steaming-bowl"
          },
          {
            "id": "d-tu",
            "t": "text",
            "text": "Mời ăn thử, xin chê thật",
            "x": 5964,
            "y": 680,
            "size": 48,
            "at": "l4:honestly",
            "color": "accent",
            "hl": [
              {
                "text": "xin chê thật",
                "at": "l4:honestly"
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
          "say": "Kitchen, counter, sink: clean from day one. Customers notice fast.",
          "sub": "Bếp, quầy, chỗ rửa sạch từ ngày đầu. Khách để ý nhanh hơn mình tưởng.",
          "keys": [
            "sạch từ ngày đầu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Food safety papers depend on your shop and area. Ask the ward office.",
          "sub": "Giấy tờ an toàn thực phẩm tuỳ loại hình, tuỳ nơi: hỏi phường, xã hoặc cơ quan địa phương.",
          "keys": [
            "hỏi phường, xã"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And meet Bà Tư, the sharpest tongue in the lane.",
          "sub": "Còn đây là bà Tư, hàng xóm, cái lưỡi khó tính nhất con hẻm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Bà Tư, please try it, and tell me honestly what's wrong.",
          "sub": "Bà ăn thử giúp cháu, rồi chê thật cho cháu nhé.",
          "pose": "give"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "tu",
          "say": "You really want the truth? Then I'll tell you straight.",
          "sub": "Cháu muốn nghe thật à? Vậy bà nói thẳng nhé.",
          "face": "happy",
          "pose": "explain"
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p3,p4"
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
            "at": "l3",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Tuần đầu · Khách lạ",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:third stop"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "enter": "walk",
                  "at": "l2"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "stand"
                }
              ],
              "props": [
                "steaming-bowl"
              ]
            },
            "at": "l2:meet",
            "caption": "Tuần đầu · lần đầu bác Bình ghé",
            "icon": "waving-hand"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "1. Chào khi khách vào",
            "x": 7932,
            "y": 160,
            "size": 50,
            "at": "l3:morning"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "2. Nhớ: “không rau mùi”",
            "x": 7932,
            "y": 235,
            "size": 50,
            "at": "l5:coriander",
            "hl": [
              {
                "text": "“không rau mùi”",
                "at": "l5:asked"
              }
            ]
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "3. Cảm ơn khi khách về",
            "x": 7932,
            "y": 310,
            "size": 50,
            "at": "l6:thanks"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "→ khách thấy được đón tiếp",
            "x": 7932,
            "y": 390,
            "size": 50,
            "at": "l7:welcome",
            "color": "accent",
            "hl": [
              {
                "text": "được đón tiếp",
                "at": "l7:welcome"
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
          "say": "Third stop: opening week. New faces.",
          "sub": "Chặng ba: tuần khai trương. Khách lạ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Bác Bình, retired, early riser, first visit.",
          "sub": "Đây là bác Bình, nghỉ hưu, lần đầu ghé quán."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Good morning! Sit anywhere you like.",
          "sub": "Chào bác ạ! Bác ngồi đâu cũng được.",
          "pose": "wave",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "One bowl, please. No coriander.",
          "sub": "Cho bác một bát, không rau mùi nhé.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "Here you are. No coriander, just as you asked.",
          "sub": "Của bác đây, không rau mùi như bác dặn.",
          "pose": "give"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "Thanks for coming! See you again.",
          "sub": "Cảm ơn bác đã ghé, hẹn gặp lại ạ!",
          "pose": "wave"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Greet, remember one detail, say thanks. He feels welcome.",
          "sub": "Chào, nhớ một chi tiết, cảm ơn: khách thấy được đón tiếp.",
          "keys": [
            "được đón tiếp"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 600
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
          },
          {
            "at": "l4",
            "fit": [
              "e-v"
            ],
            "zoom": 1.3,
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
            "id": "e-st",
            "t": "text",
            "text": "Giữ đều > giảm giá",
            "x": 7932,
            "y": 480,
            "size": 56,
            "at": "l1:steady",
            "color": "accent",
            "hl": [
              {
                "text": "Giữ đều",
                "at": "l1:steady"
              }
            ]
          },
          {
            "id": "e-bw",
            "t": "text",
            "text": "Bát nay đầy, mai vơi",
            "x": 7932,
            "y": 560,
            "size": 48,
            "at": "l2:full",
            "color": "coral"
          },
          {
            "id": "e-ask",
            "t": "text",
            "text": "“Hôm nay món vừa miệng không ạ?”",
            "x": 7932,
            "y": 650,
            "size": 48,
            "at": "l4:right",
            "hl": [
              {
                "text": "vừa miệng",
                "at": "l4:right for you"
              }
            ]
          },
          {
            "id": "e-ear",
            "t": "text",
            "text": "nghe trước khi cả xóm nghe",
            "x": 8772,
            "y": 690,
            "size": 44,
            "at": "l5:before",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "And staying steady matters more than discounts.",
          "sub": "Và giữ đều quan trọng hơn giảm giá.",
          "keys": [
            "giữ đều"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Full bowl today, thin bowl tomorrow? Customers notice, and quietly stop coming.",
          "sub": "Bát nay đầy mai vơi? Khách nhận ra, lặng lẽ không quay lại.",
          "keys": [
            "lặng lẽ không quay lại"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So each day, she asks a few customers gently.",
          "sub": "Nên mỗi ngày, cô hỏi vài khách một câu nhẹ nhàng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Was the dish right for you today? Anything I can adjust next time?",
          "sub": "Hôm nay món vừa miệng không bác, có gì cháu chỉnh cho lần sau?",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "She hears it before the whole street does.",
          "sub": "Cô nghe góp ý trước khi cả xóm nghe.",
          "keys": [
            "nghe góp ý"
          ]
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Khách đã quay lại. Nhưng ngày khách chê thì sao?",
        "illus": "face-with-steam-from-nose"
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
          "say": "Customers are coming back. But what about the day one of them complains?",
          "sub": "Khách đã quay lại. Nhưng ngày khách chê thì sao?",
          "keys": [
            "ngày khách chê"
          ]
        }
      ],
      "ref": "p10"
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
            "text": "④ Tháng thứ hai · Bị chê",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:fourth stop"
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
                  "id": "binh",
                  "side": "left",
                  "face": "stern"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "stand",
                  "face": "worried"
                }
              ],
              "props": [
                "steaming-bowl"
              ]
            },
            "at": "l1:lunch",
            "caption": "Tháng thứ hai · trưa đông khách",
            "icon": "steaming-bowl"
          },
          {
            "id": "f-hot",
            "t": "text",
            "text": "Bị chê → nóng mặt",
            "x": 60,
            "y": 1250,
            "size": 52,
            "at": "l3:hot",
            "color": "coral"
          },
          {
            "id": "f-br",
            "t": "text",
            "text": "Hít một hơi đã",
            "x": 100,
            "y": 1325,
            "size": 46,
            "at": "l3:breathe",
            "hl": [
              {
                "text": "Hít một hơi",
                "at": "l3:breathe"
              }
            ]
          },
          {
            "id": "f-c1",
            "t": "text",
            "text": "Chê tại quán: còn cơ hội",
            "x": 60,
            "y": 1410,
            "size": 50,
            "at": "l4:complains",
            "color": "accent",
            "hl": [
              {
                "text": "còn cơ hội",
                "at": "l4:chance"
              }
            ]
          },
          {
            "id": "f-c2",
            "t": "text",
            "text": "Im lặng bỏ đi: mất hẳn",
            "x": 60,
            "y": 1485,
            "size": 50,
            "at": "l4:quietly",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: month two. Lunch rush. Bác Bình frowns.",
          "sub": "Chặng bốn: tháng thứ hai. Trưa đông, bác Bình nhăn mặt."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Hoa, the soup is cold today.",
          "sub": "Hoa này, canh hôm nay nguội quá.",
          "face": "stern",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Criticism after a long day? Everyone gets hot. Breathe first.",
          "sub": "Bị chê khi đã mệt cả ngày thì ai cũng nóng. Hít một hơi đã.",
          "keys": [
            "Hít một hơi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A customer who complains still gives you a chance. One who leaves quietly is gone for good.",
          "sub": "Khách phàn nàn tại quán là còn cho mình cơ hội; khách bỏ đi im lặng mới là mất hẳn.",
          "keys": [
            "còn cho mình cơ hội"
          ]
        }
      ],
      "ref": "p10"
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
            "id": "f-s1",
            "t": "text",
            "text": "1. Nghe hết",
            "x": 60,
            "y": 1580,
            "size": 50,
            "at": "l1:listen"
          },
          {
            "id": "f-s2",
            "t": "text",
            "text": "2. Xin lỗi đúng chuyện",
            "x": 60,
            "y": 1655,
            "size": 50,
            "at": "l2:sorry"
          },
          {
            "id": "f-s3",
            "t": "text",
            "text": "3. Sửa cụ thể: hâm, đổi",
            "x": 60,
            "y": 1730,
            "size": 50,
            "at": "l4:fix",
            "color": "accent",
            "hl": [
              {
                "text": "Sửa cụ thể",
                "at": "l4:clear fix"
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
          "say": "Three steps. One: listen to the end.",
          "sub": "Ba bước. Một: nghe hết.",
          "keys": [
            "nghe hết"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two: sorry for what he got. Cold soup? Sorry for the cold soup.",
          "sub": "Hai: xin lỗi về chuyện khách gặp. Canh nguội thì xin lỗi vì canh nguội."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "I'm sorry, Bác. I'll heat it up right now, or bring you a new bowl.",
          "sub": "Cháu xin lỗi bác. Cháu hâm nóng ngay, hoặc đổi bác bát mới ạ.",
          "face": "neutral",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: a clear fix, not a lecture about the stove.",
          "sub": "Ba: đưa cách sửa cụ thể. Không phải bài diễn văn về cái bếp ga.",
          "keys": [
            "cách sửa cụ thể"
          ]
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s14",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Nửa đêm · nhà cô Hoa",
        "actors": [
          {
            "id": "hoa",
            "side": "right",
            "pose": "phone",
            "face": "neutral"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Trả lời lúc nửa đêm, đang bực",
          "why": "Câu trả lời giận dữ dễ bị chụp lại và lan nhanh hơn cả lời chê.",
          "rule": "Giận thì để qua đêm, sáng ra mới trả lời"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Midnight. A review: her fridge sells milk near expiry.",
          "sub": "Nửa đêm. Khách chê: tủ nước bán sữa sắp hết hạn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "If you don't like it, shop somewhere else!",
          "sub": "Không thích thì mua chỗ khác đi!",
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
          "say": "That reply gets screenshotted, and spreads faster.",
          "sub": "Câu ấy bị chụp lại, lan nhanh hơn lời chê.",
          "keys": [
            "lan nhanh hơn lời chê"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Angry? Sleep on it.",
          "sub": "Tua lại! Giận thì để qua đêm.",
          "phase": "redo",
          "keys": [
            "Giận thì để qua đêm"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "Morning: thanks for telling us. That milk is gone. Come by for a new box.",
          "sub": "Sáng ra: cảm ơn anh chị đã báo. Quán đã dọn hộp sữa đó, xin đổi hộp mới.",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Many future customers read that.",
          "sub": "Rất nhiều khách sau sẽ đọc.",
          "phase": "redo",
          "keys": [
            "khách sau"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p12,p13,p14"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Tháng thứ ba · Hàng và người",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:fifth stop"
          },
          {
            "id": "g-tr",
            "t": "illus",
            "name": "delivery-truck",
            "x": 2608,
            "y": 1240,
            "size": 130,
            "at": "l2:supplier"
          },
          {
            "id": "g-ch",
            "t": "text",
            "text": "Chỉ chọn nơi rẻ nhất",
            "x": 2028,
            "y": 1250,
            "size": 50,
            "at": "l2:cheapest",
            "color": "muted"
          },
          {
            "id": "g-chx",
            "t": "strike",
            "over": "g-ch",
            "at": "l2:cheapest+500"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "✓ hàng có đều?",
            "x": 2028,
            "y": 1330,
            "size": 46,
            "at": "l3:steady"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "✓ giao đúng giờ?",
            "x": 2028,
            "y": 1395,
            "size": 46,
            "at": "l3:on time"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "✓ đổi trả thế nào?",
            "x": 2028,
            "y": 1460,
            "size": 46,
            "at": "l3:returns"
          },
          {
            "id": "g-bk",
            "t": "text",
            "text": "+ 1 nguồn dự phòng",
            "x": 2028,
            "y": 1540,
            "size": 52,
            "at": "l4:backup",
            "color": "accent",
            "hl": [
              {
                "text": "dự phòng",
                "at": "l4:backup"
              }
            ]
          },
          {
            "id": "g-out",
            "t": "text",
            "text": "kẻo treo biển “hết món”",
            "x": 2428,
            "y": 1470,
            "size": 40,
            "at": "l4:sold out",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: month three. New worries: supplies and help.",
          "sub": "Chặng năm: tháng thứ ba. Lo hàng nhập, lo người phụ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Steady supplier, steady dishes. So don't just pick the cheapest.",
          "sub": "Mối hàng ổn định, món ngon đều. Đừng chỉ chọn nơi rẻ nhất.",
          "keys": [
            "đừng chỉ chọn nơi rẻ nhất"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ask: is quality steady? Delivery on time? How do returns work?",
          "sub": "Hỏi ba điều: hàng có đều không? Giao có đúng giờ không? Đổi trả thế nào?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And keep a backup for the main ingredient. No meat one morning means sold out signs.",
          "sub": "Mặt hàng chính cần ít nhất một nguồn dự phòng. Một sáng thiếu thịt là một sáng treo biển “hết món”.",
          "keys": [
            "nguồn dự phòng"
          ]
        }
      ],
      "ref": "p15,p16"
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
          },
          {
            "at": "l6",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l8",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "face": "thinking"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "stand"
                }
              ],
              "props": [
                "hot-beverage"
              ]
            },
            "at": "l1:meet",
            "caption": "Tháng thứ ba · quầy nước",
            "icon": "hot-beverage"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "“Cứ làm như cô” → đậm nhạt",
            "x": 2028,
            "y": 1650,
            "size": 44,
            "at": "l4:strong",
            "color": "coral"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "Dạy: công thức + chào bằng tên",
            "x": 2028,
            "y": 1730,
            "size": 46,
            "at": "l6:same amount",
            "color": "accent",
            "hl": [
              {
                "text": "chào bằng tên",
                "at": "l6:by name"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Dạy kỹ tuần đầu",
            "x": 2868,
            "y": 1780,
            "size": 50,
            "at": "l8:carefully",
            "hl": [
              {
                "text": "Dạy kỹ tuần đầu",
                "at": "l8:week one"
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
          "say": "Then help. Meet Lan, twenty, hardworking, shy.",
          "sub": "Người phụ: đây là Lan, hai mươi tuổi, chăm, ngại hỏi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "What should I do first, Cô Hoa?",
          "sub": "Cháu làm gì trước ạ, cô?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Just do it like me.",
          "sub": "Cứ làm như cô là được.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Weeks later: strong cup, weak cup. Bác Bình walks in, ungreeted.",
          "sub": "Vài tuần sau: ly đậm ly nhạt. Bác Bình bước vào, không ai chào."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Staff are the shop's face. So, lesson two, properly.",
          "sub": "Nhân viên là bộ mặt của quán. Nên cô dạy lại, đàng hoàng.",
          "keys": [
            "bộ mặt của quán"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "Same amount in every cup. And greet Bác Bình by name.",
          "sub": "Ly nào cũng đúng một lượng. Và chào bác Bình bằng tên nhé.",
          "pose": "give"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Teach carefully in week one, save trouble later.",
          "sub": "Dạy kỹ tuần đầu, đỡ cực về sau.",
          "keys": [
            "Dạy kỹ tuần đầu"
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
      "ref": "p17,p18,p19"
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
            "text": "⑥ Mỗi tối · Cuốn sổ",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:sixth stop"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "money-bag",
                "notebook"
              ]
            },
            "at": "l1:count",
            "caption": "Mỗi tối · đóng cửa",
            "icon": "money-bag"
          },
          {
            "id": "h-dr",
            "t": "text",
            "text": "Đếm ngăn kéo rồi đi ngủ?",
            "x": 3996,
            "y": 1250,
            "size": 50,
            "at": "l1:drawer",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: every night at closing. Many owners count the drawer and go to bed.",
          "sub": "Chặng sáu: mỗi tối đóng cửa. Nhiều chủ quán đếm tiền ngăn kéo rồi đi ngủ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "A full drawer today! I'm rich!",
          "sub": "Ngăn kéo đầy ắp! Giàu to rồi!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Rich? Let's check that.",
          "sub": "Giàu à? Để xem đã."
        }
      ],
      "ref": "p20"
    },
    {
      "id": "s19",
      "module": "BRK-04",
      "data": {
        "title": "Tiền trong ngăn kéo cuối ngày",
        "wrong": "Ngăn kéo đầy là lãi đầy",
        "right": "Còn tiền hàng, mặt bằng, điện nước phải trả",
        "wrongIllus": "money-bag",
        "rightIllus": "receipt"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Full drawer, full profit?",
          "sub": "Ngăn kéo đầy là lãi đầy?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. It still owes stock, rent, power and water.",
          "sub": "Không. Trong đó còn tiền nhập hàng, mặt bằng, điện nước phải trả.",
          "keys": [
            "còn tiền nhập hàng"
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
            "fit": "H",
            "move": "cut"
          },
          {
            "at": "l2",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
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
            "id": "h-no",
            "t": "text",
            "text": "≠ tiền lời",
            "x": 4576,
            "y": 1250,
            "size": 50,
            "at": "l1:magic",
            "color": "coral"
          },
          {
            "id": "h-10",
            "t": "text",
            "text": "10 phút mỗi tối:",
            "x": 3996,
            "y": 1340,
            "size": 50,
            "at": "l1:ten minutes",
            "hl": [
              {
                "text": "10 phút",
                "at": "l1:ten minutes"
              }
            ]
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1430,
            "w": 46,
            "h": 46,
            "at": "l2:total",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1412,
            "size": 58,
            "at": "l2:total+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Tổng thu",
            "x": 4064,
            "y": 1420,
            "size": 44,
            "at": "l2:total+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1502,
            "w": 46,
            "h": 46,
            "at": "l2:spent",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1484,
            "size": 58,
            "at": "l2:spent+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Các khoản đã chi",
            "x": 4064,
            "y": 1492,
            "size": 44,
            "at": "l2:spent+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1574,
            "w": 46,
            "h": 46,
            "at": "l2:best",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1556,
            "size": 58,
            "at": "l2:best+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Món chạy, món ế",
            "x": 4064,
            "y": 1564,
            "size": 44,
            "at": "l2:best+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1646,
            "w": 46,
            "h": 46,
            "at": "l2:comment",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1628,
            "size": 58,
            "at": "l2:comment+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Một góp ý của khách",
            "x": 4064,
            "y": 1636,
            "size": 44,
            "at": "l2:comment+200"
          },
          {
            "id": "h-use",
            "t": "text",
            "text": "→ bỏ món · nhập gì · xem giá",
            "x": 3996,
            "y": 1730,
            "size": 44,
            "at": "l3:drop",
            "color": "accent",
            "hl": [
              {
                "text": "bỏ món",
                "at": "l3:drop"
              }
            ]
          },
          {
            "id": "h-th",
            "t": "text",
            "text": "rẻ hơn thầy bói",
            "x": 4836,
            "y": 1780,
            "size": 46,
            "at": "l4:fortune",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So Cô Hoa opens her magic notebook. Ten minutes a night, four lines.",
          "sub": "Nên cô Hoa mở cuốn sổ thần. Mười phút mỗi tối, bốn dòng.",
          "keys": [
            "cuốn sổ thần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Total sales. Money spent. Best and worst sellers. And one customer comment.",
          "sub": "Tổng thu. Các khoản đã chi. Món bán chạy, món ế. Và một điều khách góp ý.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It shows which dish to drop, what to restock, when to check prices.",
          "sub": "Cuốn sổ cho biết nên bỏ món nào, nhập thêm gì, lúc nào xem lại giá bán.",
          "keys": [
            "nên bỏ món nào"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Cheaper than a fortune teller, and far more accurate.",
          "sub": "Rẻ hơn thầy bói, mà đúng hơn nhiều."
        }
      ],
      "ref": "p21,p22"
    },
    {
      "id": "s21",
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
            "text": "⑦ Mùa mưa · Quán vắng",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:seventh stop"
          },
          {
            "id": "i-rain",
            "t": "illus",
            "name": "umbrella-with-rain-drops",
            "x": 7304,
            "y": 1250,
            "size": 140,
            "at": "l1:rainy"
          },
          {
            "id": "i-dc",
            "t": "text",
            "text": "Giảm giá mạnh + băng rôn to",
            "x": 5964,
            "y": 1250,
            "size": 52,
            "at": "l2:discounts",
            "color": "coral"
          },
          {
            "id": "i-ls",
            "t": "text",
            "text": "→ vài hôm lại thưa, lỗ thêm",
            "x": 5994,
            "y": 1330,
            "size": 46,
            "at": "l3:quiet",
            "color": "muted",
            "hl": [
              {
                "text": "lỗ thêm",
                "at": "l3:losses"
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
          "say": "Seventh stop: rainy season. The lunch crowd thins out.",
          "sub": "Chặng bảy: mùa mưa. Khách trưa thưa hẳn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Her first idea? Big discounts, and a big banner.",
          "sub": "Ý đầu tiên của cô Hoa? Giảm giá mạnh, treo băng rôn thật to."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A few busy days, then quiet again, and bigger losses.",
          "sub": "Khách đến thử vài hôm rồi lại thưa. Cô còn lỗ thêm.",
          "keys": [
            "lỗ thêm"
          ]
        }
      ],
      "ref": "p23,p25"
    },
    {
      "id": "s22",
      "module": "BRK-06",
      "data": {
        "title": "Quán mình vắng vì đâu?",
        "items": [
          {
            "illus": "umbrella-with-rain-drops",
            "text": "Mùa mưa"
          },
          {
            "illus": "red-envelope",
            "text": "Sau Tết"
          },
          {
            "illus": "convenience-store",
            "text": "Quán mới gần đó"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Rainy season, after Tết, a new shop nearby.",
          "sub": "Mùa mưa, sau Tết, gần đó mở quán mới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Every shop has quiet times. The question is why yours.",
          "sub": "Quán nào cũng có lúc vắng. Câu hỏi là quán mình vắng vì đâu.",
          "keys": [
            "vắng vì đâu"
          ]
        }
      ],
      "ref": "p23"
    },
    {
      "id": "s23",
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
            "id": "i-bk",
            "t": "text",
            "text": "Đừng vội giảm giá. Mở sổ:",
            "x": 5964,
            "y": 1420,
            "size": 48,
            "at": "l1:rush",
            "hl": [
              {
                "text": "Đừng vội giảm giá",
                "at": "l1:rush"
              }
            ]
          },
          {
            "id": "i-w",
            "t": "text",
            "text": "từ khi nào · giờ nào · món nào",
            "x": 5994,
            "y": 1490,
            "size": 42,
            "at": "l1:since when"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1420,
            "w": 640,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "pose": "stand"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "leafy-green",
                "motor-scooter"
              ]
            },
            "at": "l3",
            "caption": "Mùa mưa · hỏi khách quen",
            "icon": "leafy-green"
          },
          {
            "id": "i-r",
            "t": "text",
            "text": "Rau không còn tươi",
            "x": 5964,
            "y": 1580,
            "size": 46,
            "at": "l4:fresh",
            "color": "coral"
          },
          {
            "id": "i-p",
            "t": "text",
            "text": "Trưa không chỗ để xe",
            "x": 5964,
            "y": 1650,
            "size": 46,
            "at": "l4:parking",
            "color": "coral"
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Tìm đúng bệnh rồi hãy bốc thuốc",
            "x": 5964,
            "y": 1760,
            "size": 52,
            "at": "l6:illness",
            "color": "accent",
            "hl": [
              {
                "text": "Tìm đúng bệnh",
                "at": "l6:real illness"
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
          "say": "Don't rush to cut prices. Check the notebook: quiet since when, what hours, which dishes?",
          "sub": "Đừng vội giảm giá. Mở sổ: vắng từ khi nào, giờ nào, món nào?",
          "keys": [
            "Đừng vội giảm giá"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Bác Bình, have you noticed anything different about the shop lately?",
          "sub": "Bác Bình ơi, dạo này bác thấy quán có gì khác không ạ?",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Since the new vegetable seller, greens aren't fresh. And no parking at lunch.",
          "sub": "Từ khi đổi người giao rau, rau không còn tươi. Mà giờ trưa không có chỗ để xe.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Regulars tell the truth when asked honestly. Discounts can't fix wilted greens.",
          "sub": "Khách quen nói thật khi được hỏi thật. Giảm giá không chữa được rau héo.",
          "keys": [
            "được hỏi thật"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Find the real illness before you pick the medicine.",
          "sub": "Tìm đúng bệnh rồi hãy bốc thuốc.",
          "keys": [
            "Tìm đúng bệnh"
          ]
        }
      ],
      "ref": "p23,p24,p25,p26"
    },
    {
      "id": "s24",
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
            "text": "Một năm sau · Tối đóng cửa",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:one year"
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
                  "id": "hoa",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "notebook",
                "clipboard"
              ]
            },
            "at": "l1:table",
            "caption": "Một năm sau · cùng cái bàn ấy",
            "icon": "clipboard"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1260,
            "w": 46,
            "h": 46,
            "at": "l2:steady",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1242,
            "size": 58,
            "at": "l2:steady+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Món chủ lực giữ đều",
            "x": 8000,
            "y": 1250,
            "size": 44,
            "at": "l2:steady+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1332,
            "w": 46,
            "h": 46,
            "at": "l2:greetings",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1314,
            "size": 58,
            "at": "l2:greetings+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Chào, cảm ơn mỗi khách",
            "x": 8000,
            "y": 1322,
            "size": 44,
            "at": "l2:greetings+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1404,
            "w": 46,
            "h": 46,
            "at": "l2:arguing",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1386,
            "size": 58,
            "at": "l2:arguing+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Nghe chê mà không cãi",
            "x": 8000,
            "y": 1394,
            "size": 44,
            "at": "l2:arguing+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1476,
            "w": 46,
            "h": 46,
            "at": "l2:notebook",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1458,
            "size": 58,
            "at": "l2:notebook+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Ghi sổ mỗi tối",
            "x": 8000,
            "y": 1466,
            "size": 44,
            "at": "l2:notebook+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1548,
            "w": 46,
            "h": 46,
            "at": "l2:backup",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1530,
            "size": 58,
            "at": "l2:backup+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Có nguồn hàng dự phòng",
            "x": 8000,
            "y": 1538,
            "size": 44,
            "at": "l2:backup+200"
          },
          {
            "id": "j-wk",
            "t": "text",
            "text": "Mỗi tuần một việc",
            "x": 7932,
            "y": 1650,
            "size": 50,
            "at": "l4:habit",
            "hl": [
              {
                "text": "Mỗi tuần một việc",
                "at": "l4:habit"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“…vạn lần khách quen”",
            "x": 7932,
            "y": 1760,
            "size": 52,
            "at": "l5:version",
            "color": "accent",
            "hl": [
              {
                "text": "vạn lần khách quen",
                "at": "l5:regulars"
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
          "say": "One year later. Same table, same lamp, same Cô Hoa.",
          "sub": "Một năm sau. Vẫn cái bàn ấy, ngọn đèn tối ấy, cô Hoa ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "My counter list: steady dishes, greetings and thanks, no arguing, the notebook, a backup supplier.",
          "sub": "Dán cạnh quầy: món giữ đều, chào và cảm ơn, nghe chê không cãi, ghi sổ, mối dự phòng.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not all at once. One habit a week, then the next.",
          "sub": "Không làm hết một lúc. Mỗi tuần một việc, quen rồi thêm.",
          "keys": [
            "Mỗi tuần một việc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Break trust once, doubted forever. Her version: one steady bowl, ten thousand regulars.",
          "sub": "“Một lần bất tín…” Bản cô Hoa: một bát giữ đều, vạn lần khách quen.",
          "keys": [
            "vạn lần khách quen"
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
      "ref": "p27,p28"
    },
    {
      "id": "s25",
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
            "at": "l1:few",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:listen",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:notebook",
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
            "x": 4696,
            "y": 600,
            "at": "l1:few"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 760,
            "y": 1690,
            "at": "l2:listen"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1350,
            "at": "l3:notebook"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: a few dishes, done well, the same every day.",
          "sub": "Tóm lại: ít món, làm chắc, ngày nào cũng đều.",
          "keys": [
            "ít món, làm chắc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Greet people, listen without arguing, sleep on angry replies.",
          "sub": "Chào khách, nghe chê không cãi, giận thì để qua đêm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And the notebook. Tonight: your three best sellers, one customer comment.",
          "sub": "Và cuốn sổ. Tối nay: ba món bán chạy nhất, một góp ý.",
          "keys": [
            "ba món bán chạy nhất"
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
      "ref": "questions[10]",
      "data": {
        "q": "Which keeps customers longer, steady quality every day or frequent discounts?",
        "options": [
          "Frequent discounts, because customers care about price much more than taste",
          "Both equally, so change portions freely as long as prices stay low",
          "Steady quality, because customers notice at once when a bowl is smaller or weaker"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "steaming-bowl",
        "why": "Bát vơi, ly nhạt là khách nhận ra ngay. Giảm giá kéo khách thử, chất lượng đều mới giữ khách."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which keeps customers longer, steady quality every day or frequent discounts?",
          "sub": "Điều gì giữ khách lâu hơn, chất lượng đều mỗi ngày hay giảm giá thường xuyên?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Steady quality, because customers notice at once when a bowl is smaller or weaker.",
          "sub": "Chất lượng đều, vì bát vơi hay nhạt hơn là khách nhận ra ngay."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Discounts bring people to try. Steady quality keeps them.",
          "sub": "Giảm giá kéo khách thử, chất lượng đều mới giữ khách."
        }
      ]
    },
    {
      "id": "s32",
      "module": "END-05",
      "data": {
        "text": "Tối nay: ghi 3 món bán chạy nhất",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting below.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ bên dưới."
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s24"
  }
};
