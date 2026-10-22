// Kịch bản video W lần 3 (#110) — "Lặp lại ngắt quãng là gì? Cách ôn bài để nhớ lâu" · chuỗi "Tự học và học cách học". Mở rộng đủ ý (#110).
export default {
  "schema": "detpro.video-script/0.2",
  "id": "spaced-repetition-how-to-review--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "adult-self-learners",
    "slug": "spaced-repetition-how-to-review",
    "door": "ky-nang",
    "level": "B1",
    "title": "Lặp lại ngắt quãng là gì? Cách ôn bài để nhớ lâu",
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
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo THÁNG ĐẦU của Thảo ở phòng xuất nhập khẩu (tối Chủ nhật tuần 1 → thứ Năm → Chủ nhật tuần 2 → thứ Hai → thứ Tư → tuần 3 → tuần 5 → một tháng sau, cùng bàn, cùng tối Chủ nhật). Nhân vật (theo w145/_series/adult-self-learners.md): Thảo (gộp chị Nga p15, p17 và cách học ba tiếng p6–p7), Dũng (anh Hải p4: BRK-08 dòng thời gian quét; đối tác không lên hình), Lan (bạn trong khung ❓ p19), cô Hoa (chị Vân học tiếng Hàn p22; người bạn khuyên chỉ ở lời kể). Cảnh ngắt nhịp: BRK-08 (p4), BRK-07 rehook (p15), BRK-03 “hơn 300 thẻ” (p22). Tục ngữ mở/khép vòng: “Mưa dầm thấm lâu” (mưa rào ba tiếng → mười phút mỗi tối). Câu mẫu p25 “Our lead time is about two weeks.” Thảo đọc lên ở cảnh khép vòng. Bản cũ (W lần 3, #110): w145/bak/spaced-repetition-how-to-review--w01.js.",
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
            "text": "50 từ",
            "x": 60,
            "y": 130,
            "size": 200,
            "at": "l1:fifty",
            "color": "accent",
            "hl": [
              {
                "text": "50 từ",
                "at": "l1:sunday"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "học hết vào Chủ nhật",
            "x": 70,
            "y": 390,
            "size": 56,
            "at": "l1:learn"
          },
          {
            "id": "a-thu",
            "t": "text",
            "text": "Thứ Năm: còn lơ mơ vài từ",
            "x": 70,
            "y": 490,
            "size": 54,
            "at": "l2:thursday",
            "color": "coral",
            "hl": [
              {
                "text": "lơ mơ",
                "at": "l2:blurry"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Bài dựa trên: Murre & Dros (2015) · Cepeda và cs. (2006) · Dunlosky và cs. (2013) · hộp thẻ Leitner",
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
          "say": "Fifty new words. You learn them all on Sunday.",
          "sub": "Năm mươi từ mới. Bạn học hết vào Chủ nhật.",
          "keys": [
            "Năm mươi từ mới"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "By Thursday, when you need them, only a few are left, and blurry.",
          "sub": "Đến thứ Năm cần dùng, chỉ còn nhớ lơ mơ vài từ.",
          "keys": [
            "lơ mơ vài từ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Forgetting fast is every brain's habit, not just yours.",
          "sub": "Quên nhanh sau khi học là chuyện của mọi bộ não, không riêng bạn.",
          "keys": [
            "mọi bộ não"
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
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "books",
                "crescent-moon"
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
            "caption": "Tối Chủ nhật · tuần 1",
            "icon": "books"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Mưa dầm thấm lâu”",
            "x": 60,
            "y": 580,
            "size": 54,
            "at": "l4:steady rain",
            "color": "accent",
            "hl": [
              {
                "text": "thấm lâu",
                "at": "l4:soaks deep"
              }
            ]
          },
          {
            "id": "a-rao",
            "t": "text",
            "text": "…Thảo: mưa rào 3 tiếng",
            "x": 920,
            "y": 640,
            "size": 48,
            "at": "l4:storm",
            "color": "coral",
            "hl": [
              {
                "text": "mưa rào",
                "at": "l4:storm"
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
          "say": "Meet Thảo. Fresh from accounting, now in the import and export department.",
          "sub": "Đây là Thảo. Vừa từ phòng kế toán chuyển sang phòng xuất nhập khẩu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "About a hundred English terms to master: documents, shipping, payment.",
          "sub": "Phải nắm khoảng một trăm thuật ngữ tiếng Anh: chứng từ, vận tải, thanh toán.",
          "keys": [
            "khoảng một trăm thuật ngữ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Sunday. Three hours, fifty terms. I'll read until I know them all!",
          "sub": "Chủ nhật. Ba tiếng, năm mươi thuật ngữ. Đọc đến khi thuộc hết!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: slow, steady rain soaks deep. Thảo chose a three hour storm.",
          "sub": "Ông bà dặn: “Mưa dầm thấm lâu.” Thảo thì chọn… mưa rào ba tiếng.",
          "keys": [
            "Mưa dầm thấm lâu"
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
      "ref": "p6,p15"
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
            "text": "Ôn thế nào để nhớ lâu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:review",
            "hl": [
              {
                "text": "nhớ lâu",
                "at": "l1:longer"
              }
            ]
          },
          {
            "id": "b-def",
            "t": "text",
            "text": "Lặp lại ngắt quãng",
            "x": 2028,
            "y": 165,
            "size": 60,
            "at": "l2:spaced repetition",
            "color": "accent",
            "hl": [
              {
                "text": "ngắt quãng",
                "at": "l2:further apart"
              }
            ]
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Hôm sau → vài ngày → tuần sau",
            "x": 2028,
            "y": 260,
            "size": 52,
            "at": "l3:next day"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: ôn nhiều hơn",
            "x": 2028,
            "y": 360,
            "size": 52,
            "at": "l4:more",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l4:on time"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: ôn đúng lúc",
            "x": 2028,
            "y": 440,
            "size": 58,
            "at": "l4:on time",
            "color": "accent",
            "hl": [
              {
                "text": "đúng lúc",
                "at": "l4:on time"
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
          "say": "So how should you review, to remember for longer?",
          "sub": "Vậy ôn thế nào để nhớ lâu?",
          "keys": [
            "nhớ lâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Spaced repetition: the same thing, again and again, further apart each time.",
          "sub": "Lặp lại ngắt quãng: ôn cùng một nội dung nhiều lần, cách nhau xa dần.",
          "keys": [
            "cách nhau xa dần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The next day, a few days later, next week. Each time, just before you forget.",
          "sub": "Hôm sau, vài ngày sau, tuần sau. Mỗi lần ôn rơi đúng lúc sắp quên.",
          "keys": [
            "đúng lúc sắp quên"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not reviewing more. Reviewing on time.",
          "sub": "Không phải ôn nhiều hơn, mà là ôn đúng lúc.",
          "keys": [
            "ôn đúng lúc"
          ]
        }
      ],
      "ref": "intro,p16"
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
            "text": "7 chặng · tháng đầu ở phòng mới",
            "x": 2028,
            "y": 530,
            "size": 50,
            "at": "l1:seven stops",
            "hl": [
              {
                "text": "tháng đầu",
                "at": "l1:first month"
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
            "text": "CN · T1",
            "x": 2048,
            "y": 630,
            "size": 40,
            "at": "l1:seven+120"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T5 · T1",
            "x": 2283,
            "y": 630,
            "size": 40,
            "at": "l1:seven+380"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "CN · T2",
            "x": 2518,
            "y": 630,
            "size": 40,
            "at": "l1:seven+640"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T2 · T2",
            "x": 2753,
            "y": 630,
            "size": 40,
            "at": "l1:seven+900"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T4 · T2",
            "x": 2988,
            "y": 630,
            "size": 40,
            "at": "l1:seven+1160"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Tuần 3",
            "x": 3223,
            "y": 630,
            "size": 40,
            "at": "l1:seven+1420"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "Tuần 5",
            "x": 3458,
            "y": 630,
            "size": 40,
            "at": "l1:seven+1680"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Thảo's first month in the new department, in seven stops. Umbrellas ready.",
          "sub": "Mình theo tháng đầu của Thảo ở phòng mới, bảy chặng. Chuẩn bị ô nhé.",
          "keys": [
            "tháng đầu"
          ]
        }
      ],
      "ref": "p6"
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
            "at": "l3",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Tối Chủ nhật · Giờ thứ ba",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:hour three"
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
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "books",
                "alarm-clock"
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
            "at": "l1:sunday",
            "caption": "Tối Chủ nhật · tuần 1",
            "icon": "alarm-clock"
          },
          {
            "id": "c-curve",
            "t": "line",
            "pts": [
              [
                4016,
                160
              ],
              [
                4086,
                250
              ],
              [
                4176,
                300
              ],
              [
                4316,
                330
              ],
              [
                4516,
                345
              ],
              [
                4736,
                350
              ]
            ],
            "at": "l3:forget fast",
            "stroke": 8,
            "color": "coral"
          },
          {
            "id": "c-lbl",
            "t": "text",
            "text": "quên nhanh, rồi chậm dần",
            "x": 3996,
            "y": 380,
            "size": 48,
            "at": "l3:slower",
            "hl": [
              {
                "text": "chậm dần",
                "at": "l3:slower"
              }
            ]
          },
          {
            "id": "c-name",
            "t": "text",
            "text": "= đường cong quên lãng",
            "x": 3996,
            "y": 460,
            "size": 48,
            "at": "l3:forgetting curve",
            "color": "accent"
          },
          {
            "id": "c-all",
            "t": "text",
            "text": "Đúng với mọi người",
            "x": 3996,
            "y": 540,
            "size": 48,
            "at": "l4:everyone"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Murre & Dros (2015), lặp lại thí nghiệm Ebbinghaus",
            "x": 4816,
            "y": 690,
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
          "say": "First stop: Sunday night, hour three of the storm.",
          "sub": "Chặng một: tối Chủ nhật, giờ thứ ba của trận mưa rào."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Documents, shipping, payment terms... I know them all now!",
          "sub": "Chứng từ, vận tải, thanh toán… thuộc hết rồi!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Right after learning, we forget fast, then slower. It's called the forgetting curve.",
          "sub": "Ngay sau khi học, ta quên khá nhanh, rồi chậm dần. Gọi là đường cong quên lãng.",
          "keys": [
            "đường cong quên lãng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And it's true for everyone, not just people with a bad memory.",
          "sub": "Và nó đúng với mọi người, không riêng người “trí nhớ kém”."
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
            "id": "c-path",
            "t": "text",
            "text": "Trí nhớ mới = lối mòn",
            "x": 3996,
            "y": 620,
            "size": 52,
            "at": "l1:path",
            "hl": [
              {
                "text": "lối mòn",
                "at": "l1:path"
              }
            ]
          },
          {
            "id": "c-cram",
            "t": "text",
            "text": "Dồn 10 lần một tối → cỏ mọc",
            "x": 3996,
            "y": 700,
            "size": 46,
            "at": "l3:ten times",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Picture a new memory as a path you've walked once.",
          "sub": "Hình dung trí nhớ mới như lối mòn vừa đi qua lần đầu.",
          "keys": [
            "lối mòn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Nobody walks it again? Grass covers it. Walk it tomorrow, in a few days, next week: clearer each time.",
          "sub": "Không ai đi lại thì cỏ mọc lấp dần. Đi lại hôm sau, vài ngày sau, tuần sau thì lối rõ dần, mỗi lần tốn ít công hơn.",
          "keys": [
            "lối rõ dần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Cramming is walking it ten times in one evening. Clear next morning, grass again in a few days.",
          "sub": "Học dồn là đi lại mười lần trong một tối. Sáng mai lối còn rõ, vài ngày sau cỏ lại mọc.",
          "keys": [
            "Học dồn"
          ]
        }
      ],
      "ref": "p2,p3"
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
            "at": "l2",
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
            "text": "② Thứ Năm · Họp với đối tác",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:thursday"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "think",
                  "face": "worried"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "shrug"
                }
              ],
              "props": [
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "medium",
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
            "at": "l1:meeting",
            "caption": "Thứ Năm · tuần 1",
            "icon": "handshake"
          },
          {
            "id": "d-only",
            "t": "text",
            "text": "Chỉ nhớ một phần → tra lại",
            "x": 5964,
            "y": 170,
            "size": 48,
            "at": "l5:only part",
            "color": "coral",
            "hl": [
              {
                "text": "một phần",
                "at": "l5:only part"
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
          "say": "Second stop: Thursday, a meeting with foreign partners.",
          "sub": "Chặng hai: thứ Năm, họp với đối tác nước ngoài."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "That term... I learned it on Sunday. Let me look it up again.",
          "sub": "Từ này… Chủ nhật mình học rồi mà. Tra lại vậy.",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And next to her, meet Dũng, the warranty technician, with the same problem.",
          "sub": "Ngồi cạnh là Dũng, anh kỹ thuật viên bảo hành, cũng chung cảnh ngộ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Um... I knew this. I knew it so well...",
          "sub": "Ờ… câu này mình thuộc làu mà…",
          "face": "sad"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Thảo remembers only part, and looks it up again. Dũng's story is older.",
          "sub": "Thảo chỉ còn nhớ một phần, phải tra lại. Còn chuyện của Dũng thì cũ hơn."
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 800
        }
      ],
      "ref": "p4,p6"
    },
    {
      "id": "s08b",
      "module": "BRK-08",
      "data": {
        "title": "Chuyện của Dũng",
        "current": 3,
        "points": [
          {
            "label": "Tối trước PV",
            "sub": "thức đến một giờ sáng",
            "illus": "crescent-moon"
          },
          {
            "label": "Sáng PV",
            "sub": "trả lời khá trôi",
            "illus": "thumbs-up"
          },
          {
            "label": "Hai tuần sau",
            "sub": "họp đối tác đầu tiên",
            "illus": "handshake"
          },
          {
            "label": "Chưa ôn lần nào",
            "sub": "quên sạch",
            "illus": "face-with-spiral-eyes"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Interview eve: crammed till one a.m. Smooth next morning.",
          "sub": "Tối trước phỏng vấn: học thuộc đến một giờ sáng. Sáng hôm sau trả lời khá trôi."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Two weeks, zero reviews. Gone.",
          "sub": "Hai tuần, chưa ôn lần nào. Quên sạch.",
          "keys": [
            "chưa ôn lần nào"
          ]
        }
      ],
      "ref": "p4"
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
            "id": "d-r1",
            "t": "text",
            "text": "Dồn: qua một buổi",
            "x": 5964,
            "y": 300,
            "size": 54,
            "at": "l1:cram",
            "color": "muted"
          },
          {
            "id": "d-r2",
            "t": "text",
            "text": "Giãn: dùng cả năm",
            "x": 5964,
            "y": 400,
            "size": 58,
            "at": "l1:space it",
            "color": "accent",
            "hl": [
              {
                "text": "cả năm",
                "at": "l1:all year"
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
          "say": "Cram to get through one day. Space it out to use it all year.",
          "sub": "Học dồn để qua một buổi, ôn giãn để dùng cả năm.",
          "keys": [
            "ôn giãn để dùng cả năm"
          ]
        }
      ],
      "ref": "p5"
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
            "text": "③ Chủ nhật tuần 2 · Chia nhỏ",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:next sunday"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
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
                "spiral-calendar",
                "sun"
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
            "at": "l1:short sessions",
            "caption": "Chủ nhật · tuần 2",
            "icon": "spiral-calendar"
          },
          {
            "id": "e-cn",
            "t": "text",
            "text": "CN: học lần đầu",
            "x": 7932,
            "y": 170,
            "size": 48,
            "at": "l3:sunday"
          },
          {
            "id": "e-t2",
            "t": "text",
            "text": "T2: ôn nhanh",
            "x": 7932,
            "y": 245,
            "size": 48,
            "at": "l3:monday"
          },
          {
            "id": "e-t4",
            "t": "text",
            "text": "T4: từ còn sai",
            "x": 7932,
            "y": 320,
            "size": 48,
            "at": "l3:wednesday",
            "color": "coral"
          },
          {
            "id": "e-cn2",
            "t": "text",
            "text": "CN sau: thêm một lượt",
            "x": 7932,
            "y": 395,
            "size": 48,
            "at": "l3:next sunday"
          },
          {
            "id": "e-tot",
            "t": "text",
            "text": "Tổng giờ như cũ, nhớ bền hơn",
            "x": 8752,
            "y": 690,
            "size": 50,
            "at": "l4:no more time",
            "color": "accent",
            "hl": [
              {
                "text": "nhớ bền hơn",
                "at": "l4:stronger"
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
          "say": "Third stop: the next Sunday. Same three hours, cut into short sessions.",
          "sub": "Chặng ba: Chủ nhật tuần sau. Vẫn ba tiếng ấy, nhưng cắt thành nhiều buổi ngắn.",
          "keys": [
            "nhiều buổi ngắn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Same three hours. Just chopped up, like spring rolls.",
          "sub": "Vẫn ba tiếng. Chỉ là cắt khúc, như cắt nem.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sunday, learn. Monday, a quick review. Wednesday, the words still wrong. Next Sunday, one more round.",
          "sub": "Chủ nhật học lần đầu. Thứ Hai ôn nhanh. Thứ Tư ôn từ còn sai. Chủ nhật sau ôn thêm một lượt."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No more time in total, but a much stronger memory.",
          "sub": "Tổng thời gian không nhiều hơn, mà trí nhớ bền hơn hẳn.",
          "keys": [
            "bền hơn hẳn"
          ]
        }
      ],
      "ref": "p7"
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
            "id": "e-rule",
            "t": "text",
            "text": "Mỗi lần ôn = tự nhớ lại",
            "x": 7932,
            "y": 500,
            "size": 52,
            "at": "l1:recall",
            "color": "accent",
            "hl": [
              {
                "text": "tự nhớ lại",
                "at": "l1:recall"
              }
            ]
          },
          {
            "id": "e-skim",
            "t": "text",
            "text": "Đọc lướt danh sách",
            "x": 7932,
            "y": 590,
            "size": 48,
            "at": "l2:skimming",
            "color": "muted"
          },
          {
            "id": "e-skimx",
            "t": "strike",
            "over": "e-skim",
            "at": "l2:barely"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Cepeda và cs. (2006); Roediger & Karpicke (2006)",
            "x": 7932,
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
          "say": "One rule: every review is recall. See the question, answer it, then check.",
          "sub": "Một luật: mỗi lần ôn là một lần tự nhớ lại. Nhìn câu hỏi, tự trả lời, rồi mới xem đáp án.",
          "keys": [
            "tự nhớ lại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Just skimming the list? Then spacing barely helps.",
          "sub": "Chỉ đọc lướt danh sách? Thì giãn cách cũng ít tác dụng.",
          "keys": [
            "ít tác dụng"
          ]
        }
      ],
      "ref": "p8"
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
            "text": "④ Thứ Hai · Danh sách thành thẻ",
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
                "card-index",
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
            "at": "l1:cards",
            "caption": "Thứ Hai · tuần 2",
            "icon": "card-index"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Mặt trước: câu hỏi / từ",
            "x": 60,
            "y": 1260,
            "size": 48,
            "at": "l3:wise"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Mặt sau: câu trả lời",
            "x": 60,
            "y": 1335,
            "size": 48,
            "at": "l3:wise+400"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Mỗi thẻ: một ý",
            "x": 60,
            "y": 1410,
            "size": 52,
            "at": "l3:paragraph",
            "color": "accent",
            "hl": [
              {
                "text": "một ý",
                "at": "l3:paragraph"
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
          "say": "Fourth stop: Monday. Thảo turns her list into cards.",
          "sub": "Chặng bốn: thứ Hai. Thảo chuyển danh sách thành thẻ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "One side, the term. The other side, the answer. One idea per card.",
          "sub": "Một mặt là thuật ngữ, mặt kia là câu trả lời. Mỗi thẻ một ý.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Wise. A card with a whole paragraph is impossible to test.",
          "sub": "Khôn. Thẻ chứa cả đoạn văn thì rất khó tự kiểm tra.",
          "keys": [
            "rất khó tự kiểm tra"
          ]
        }
      ],
      "ref": "p9"
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
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1510,
            "w": 46,
            "h": 46,
            "at": "l1:day one",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1492,
            "size": 58,
            "at": "l1:day one+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "Ngày đầu: đúng mỗi thẻ 1 lần",
            "x": 130,
            "y": 1502,
            "size": 42,
            "at": "l1:day one+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1590,
            "w": 46,
            "h": 46,
            "at": "l2:next day",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1572,
            "size": 58,
            "at": "l2:next day+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "Hôm sau: trả lời rồi mới lật",
            "x": 130,
            "y": 1582,
            "size": 42,
            "at": "l2:next day+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1670,
            "w": 46,
            "h": 46,
            "at": "l3:easy cards",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1652,
            "size": 58,
            "at": "l3:easy cards+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "Thẻ dễ: vài ngày → 1, 2 tuần",
            "x": 130,
            "y": 1662,
            "size": 42,
            "at": "l3:easy cards+200"
          },
          {
            "id": "f-c3",
            "t": "box",
            "x": 60,
            "y": 1750,
            "w": 46,
            "h": 46,
            "at": "l3:wrong ones",
            "stroke": 5
          },
          {
            "id": "f-k3",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1732,
            "size": 58,
            "at": "l3:wrong ones+600",
            "color": "accent"
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "Thẻ sai: đưa về ôn sớm",
            "x": 130,
            "y": 1742,
            "size": 42,
            "at": "l3:wrong ones+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Day one: learn new cards until each is right once.",
          "sub": "Ngày đầu: học thẻ mới đến khi trả lời đúng mỗi thẻ một lần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next day: review, always answering before you flip.",
          "sub": "Hôm sau: ôn lại, luôn tự trả lời trước khi lật.",
          "keys": [
            "trả lời trước khi lật"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Easy cards wait a few days, then a week, two weeks. Wrong ones come back early.",
          "sub": "Thẻ dễ để vài ngày, rồi một tuần, hai tuần. Thẻ sai đưa về ôn sớm.",
          "keys": [
            "Thẻ sai đưa về ôn sớm"
          ]
        }
      ],
      "ref": "p10"
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
            "text": "⑤ Thứ Tư · Chờ xe buýt",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:wednesday"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "bus-stop",
                "card-index"
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
            "at": "l1:bus",
            "caption": "Thứ Tư · trạm xe buýt",
            "icon": "bus"
          },
          {
            "id": "g-15",
            "t": "text",
            "text": "10–15 phút cố định mỗi ngày",
            "x": 2028,
            "y": 1260,
            "size": 48,
            "at": "l1:fixed",
            "color": "accent",
            "hl": [
              {
                "text": "cố định",
                "at": "l1:fixed"
              }
            ]
          },
          {
            "id": "g-reg",
            "t": "text",
            "text": "Ngắn mà đều > dài thất thường",
            "x": 2028,
            "y": 1345,
            "size": 46,
            "at": "l3:paper"
          },
          {
            "id": "g-b0",
            "t": "box",
            "x": 2028,
            "y": 1450,
            "w": 240,
            "h": 90,
            "at": "l3:three boxes+0",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "g-bt0",
            "t": "text",
            "text": "Mỗi ngày",
            "x": 2063,
            "y": 1462,
            "size": 46,
            "at": "l3:three boxes+200"
          },
          {
            "id": "g-b1",
            "t": "box",
            "x": 2298,
            "y": 1450,
            "w": 240,
            "h": 90,
            "at": "l3:three boxes+400",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "g-bt1",
            "t": "text",
            "text": "Vài ngày",
            "x": 2333,
            "y": 1462,
            "size": 46,
            "at": "l3:three boxes+600"
          },
          {
            "id": "g-b2",
            "t": "box",
            "x": 2568,
            "y": 1450,
            "w": 240,
            "h": 90,
            "at": "l3:three boxes+800",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "g-bt2",
            "t": "text",
            "text": "Mỗi tuần",
            "x": 2603,
            "y": 1462,
            "size": 46,
            "at": "l3:three boxes+1000"
          },
          {
            "id": "g-ar1",
            "t": "arrow",
            "from": [
              2208,
              1570
            ],
            "to": [
              2388,
              1570
            ],
            "at": "l3:moves on",
            "color": "accent"
          },
          {
            "id": "g-ar2",
            "t": "arrow",
            "from": [
              2568,
              1590
            ],
            "to": [
              2108,
              1590
            ],
            "at": "l3:box one",
            "color": "coral"
          },
          {
            "id": "g-rule",
            "t": "text",
            "text": "đúng → hộp sau · sai → hộp 1",
            "x": 2028,
            "y": 1615,
            "size": 44,
            "at": "l3:box one+300"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Hộp thẻ Leitner",
            "x": 2848,
            "y": 1780,
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
          "say": "Fifth stop: Wednesday, waiting for the bus. Ten to fifteen fixed minutes a day.",
          "sub": "Chặng năm: thứ Tư, lúc chờ xe buýt. Mỗi ngày mười đến mười lăm phút cố định.",
          "keys": [
            "mười đến mười lăm phút cố định"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Bus stop, lunch break. Short and regular beats long and random.",
          "sub": "Chờ xe buýt, đầu giờ nghỉ trưa. Ngắn mà đều hơn dài mà thất thường.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "On paper? Use three boxes: daily, every few days, weekly. Right moves on, wrong goes back to box one.",
          "sub": "Dùng giấy? Ba hộp: mỗi ngày, vài ngày một lần, mỗi tuần. Đúng thì sang hộp sau, sai về hộp đầu.",
          "keys": [
            "Ba hộp"
          ]
        }
      ],
      "ref": "p11,p13"
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
            "id": "g-app",
            "t": "text",
            "text": "App hay giấy: trả lời trung thực",
            "x": 2028,
            "y": 1690,
            "size": 46,
            "at": "l1:honest",
            "hl": [
              {
                "text": "trung thực",
                "at": "l1:honest"
              }
            ]
          },
          {
            "id": "g-q",
            "t": "text",
            "text": "“Sắp quên gì?” chứ không “bao lâu?”",
            "x": 2028,
            "y": 1780,
            "size": 46,
            "at": "l2:about to be forgotten",
            "color": "accent"
          },
          {
            "id": "g-r",
            "t": "ring",
            "around": [
              "g-b0"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l3:due"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Apps schedule it for you; paper works fine too. Either way, be honest: no pressing remembered after a lucky guess.",
          "sub": "Ứng dụng xếp lịch tự động, giấy vẫn dùng tốt. Cách nào cũng trung thực: đừng bấm “đã nhớ” khi chỉ đoán trúng.",
          "keys": [
            "trung thực"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Only ten minutes today? Don't ask how long. Ask what's about to be forgotten.",
          "sub": "Hôm nay chỉ mười phút? Đừng hỏi ôn bao lâu. Hãy hỏi những gì sắp bị quên.",
          "keys": [
            "những gì sắp bị quên"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Due cards and often-missed cards first. Solid ones can wait.",
          "sub": "Ưu tiên thẻ đến hạn và thẻ hay sai; thẻ đã chắc để dành lần sau.",
          "keys": [
            "thẻ đến hạn"
          ]
        }
      ],
      "ref": "p12,p14"
    },
    {
      "id": "s16b",
      "module": "BRK-07",
      "data": {
        "question": "Tối nào cũng đọc lại cả danh sách: chắc nhất?",
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
          "say": "Reading the whole list every night. Isn't that safest?",
          "sub": "Tối nào cũng đọc lại cả danh sách. Thế chẳng phải chắc nhất?",
          "keys": [
            "chắc nhất"
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
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Tuần 3 · tối ở công ty",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Tối nào cũng đọc lại cả danh sách",
          "why": "Danh sách dài thành đọc lướt; từ khó chỉ được lướt qua, mà lướt là nhận ra, chưa phải nhớ lại.",
          "rule": "Ôn đúng lúc quan trọng hơn ôn nhiều"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Week three. The whole list again, like every night. Safest!",
          "sub": "Tuần ba. Lại đọc hết cả danh sách như mọi tối. Chắc nhất!",
          "pose": "cross",
          "face": "happy",
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
          "say": "You skim now. Hard words get a glance, and a glance only recognises.",
          "sub": "Giờ là đọc lướt. Từ khó chỉ được lướt qua, mà lướt chỉ là nhận ra.",
          "keys": [
            "lướt chỉ là nhận ra"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Quay lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Cards, a real email line on the back. Ten new a day, plus due ones.",
          "sub": "Thẻ: mặt sau ghi nghĩa và một câu từ email thật. Mỗi ngày mười thẻ mới, chỉ ôn thẻ đến hạn.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Fifteen minutes a night. On time beats a lot.",
          "sub": "Mỗi tối chừng mười lăm phút mà nhớ chắc hơn. Ôn đúng lúc quan trọng hơn ôn nhiều.",
          "phase": "redo",
          "keys": [
            "Ôn đúng lúc quan trọng hơn ôn nhiều"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p15,p16,p17"
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
            "at": "l3",
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
            "text": "⑥ Tuần 3 · 50 thẻ mỗi ngày",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:week three"
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
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "mobile-phone",
                "card-index"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:rented room",
            "caption": "Tuần 3 · phòng trọ của Lan",
            "icon": "mobile-phone"
          },
          {
            "id": "h-50",
            "t": "text",
            "text": "50 thẻ mới mỗi ngày",
            "x": 3996,
            "y": 1260,
            "size": 52,
            "at": "l5:every new card",
            "color": "coral"
          },
          {
            "id": "h-pile",
            "t": "text",
            "text": "→ hàng trăm thẻ chờ ôn",
            "x": 3996,
            "y": 1345,
            "size": 50,
            "at": "l5:pile up",
            "hl": [
              {
                "text": "hàng trăm",
                "at": "l5:pile up"
              }
            ]
          },
          {
            "id": "h-quit",
            "t": "text",
            "text": "bỏ một hôm → bỏ luôn",
            "x": 3996,
            "y": 1430,
            "size": 48,
            "at": "l5:quit",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop, week three, a rented room. Meet Lan, Thảo's friend from customer care.",
          "sub": "Chặng sáu, tuần ba, phòng trọ. Đây là Lan, cô bạn bên chăm sóc khách hàng của Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "She studies for an English certificate with a flashcard app.",
          "sub": "Cô ôn thi chứng chỉ tiếng Anh bằng ứng dụng thẻ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "I added fifty new cards a day. Now hundreds wait every morning!",
          "sub": "Ngày nào mình cũng thêm năm mươi thẻ mới. Giờ sáng nào cũng hàng trăm thẻ chờ!",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "I'll just skip today.",
          "sub": "Hôm nay bỏ vậy.",
          "face": "sad"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Every new card comes back several times, so due cards pile up. Many skip a day, then quit.",
          "sub": "Mỗi thẻ mới quay lại vài lần, nên thẻ đến hạn cộng dồn. Nhiều người bỏ một hôm rồi bỏ luôn.",
          "keys": [
            "quay lại vài lần"
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
      "ref": "p18,p19"
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
          }
        ],
        "items": [
          {
            "id": "h-err",
            "t": "text",
            "text": "Lỗi số 1: quá nhiều thẻ mới",
            "x": 3996,
            "y": 1540,
            "size": 48,
            "at": "l1:most common",
            "color": "coral"
          },
          {
            "id": "h-back",
            "t": "text",
            "text": "Tính ngược: phần ôn gói ~15 phút",
            "x": 3996,
            "y": 1630,
            "size": 46,
            "at": "l2:count backwards",
            "hl": [
              {
                "text": "Tính ngược",
                "at": "l2:count backwards"
              }
            ]
          },
          {
            "id": "h-rut",
            "t": "text",
            "text": "Ít mà đều > nhiều rồi bỏ",
            "x": 4816,
            "y": 1780,
            "size": 54,
            "at": "l3:steadily",
            "color": "accent",
            "hl": [
              {
                "text": "Ít mà đều",
                "at": "l3:a few"
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
          "say": "The most common mistake: too many new cards a day. Add only what you can keep up with.",
          "sub": "Lỗi phổ biến nhất: thêm quá nhiều thẻ mới mỗi ngày. Chỉ thêm mức mình ôn kịp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Count backwards: only enough new cards to keep reviews around fifteen minutes.",
          "sub": "Tính ngược: chỉ thêm số thẻ mới vừa đủ để phần ôn gói trong khoảng mười lăm phút.",
          "keys": [
            "Tính ngược"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Add a few, steadily, rather than many, then quit.",
          "sub": "Thêm ít mà đều, hơn thêm nhiều rồi bỏ.",
          "keys": [
            "Thêm ít mà đều"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Now meet Cô Hoa, Thảo's manager, learning Korean to talk with customers.",
          "sub": "Còn đây là cô Hoa, sếp của Thảo, đang học tiếng Hàn để nói chuyện với khách."
        }
      ],
      "ref": "p18,p19,p20"
    },
    {
      "id": "s20b",
      "module": "BRK-03",
      "data": {
        "value": 300,
        "prefix": "hơn ",
        "suffix": " thẻ",
        "label": "tồn sau mười ngày đi công tác",
        "illus": "card-file-box"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Ten days on a work trip. She opens the app.",
          "sub": "Đi công tác mười ngày về. Cô mở ứng dụng."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Over three hundred cards, waiting.",
          "sub": "Hơn ba trăm thẻ đang chờ.",
          "keys": [
            "Hơn ba trăm thẻ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "nhan"
        }
      ],
      "ref": "p22"
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
            "text": "⑦ Tuần 5 · Hơn 300 thẻ tồn",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:week five"
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
                  "side": "center",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "mobile-phone",
                "luggage"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:week five",
            "caption": "Tuần 5 · về từ chuyến công tác",
            "icon": "luggage"
          },
          {
            "id": "i-del",
            "t": "text",
            "text": "Xoá cả bộ, học lại từ đầu",
            "x": 5964,
            "y": 1260,
            "size": 48,
            "at": "l3:keep it",
            "color": "muted"
          },
          {
            "id": "i-delx",
            "t": "strike",
            "over": "i-del",
            "at": "l3:keep it+500"
          },
          {
            "id": "i-50",
            "t": "text",
            "text": "~50 thẻ đến hạn lâu nhất/ngày",
            "x": 5964,
            "y": 1345,
            "size": 46,
            "at": "l3:fifty"
          },
          {
            "id": "i-new",
            "t": "text",
            "text": "chưa thêm thẻ mới",
            "x": 5964,
            "y": 1425,
            "size": 48,
            "at": "l3:no new ones",
            "color": "accent"
          },
          {
            "id": "i-2w",
            "t": "text",
            "text": "2 tuần sau: hết tồn, vẫn nhớ",
            "x": 5964,
            "y": 1510,
            "size": 48,
            "at": "l4:two weeks",
            "hl": [
              {
                "text": "vẫn nhớ",
                "at": "l4:remembered"
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
          "say": "Seventh stop: week five.",
          "sub": "Chặng bảy: tuần năm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Over three hundred! I'll delete the whole deck and start again.",
          "sub": "Hơn ba trăm thẻ! Thôi xoá cả bộ học lại từ đầu.",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A friend says: keep it. Each day, about fifty of the oldest due cards, and no new ones.",
          "sub": "Một người bạn khuyên: giữ nguyên. Mỗi ngày ôn khoảng năm mươi thẻ đến hạn lâu nhất, chưa thêm thẻ mới.",
          "keys": [
            "giữ nguyên"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "About two weeks later, the pile was gone. She still remembered most, just a bit slower.",
          "sub": "Chừng hai tuần sau, phần tồn hết. Cô vẫn nhớ phần lớn, chỉ chậm hơn một chút.",
          "keys": [
            "vẫn nhớ phần lớn"
          ]
        }
      ],
      "ref": "p22"
    },
    {
      "id": "s22",
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
            "id": "i-rule",
            "t": "text",
            "text": "Lỡ vài ngày: ôn phần quan trọng",
            "x": 5964,
            "y": 1610,
            "size": 44,
            "at": "l1:missed"
          },
          {
            "id": "i-rut",
            "t": "text",
            "text": "Lỡ nhịp: bù từ từ",
            "x": 6784,
            "y": 1780,
            "size": 50,
            "at": "l2:catch up",
            "color": "accent",
            "hl": [
              {
                "text": "bù từ từ",
                "at": "l2:slowly"
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
          "say": "Missed a few days? Don't wipe it all. Review the most important due cards, and pause new ones till the pile shrinks.",
          "sub": "Lỡ vài ngày? Đừng xoá hết. Ôn phần đến hạn quan trọng nhất, tạm dừng thẻ mới đến khi phần tồn vơi đi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fell behind? Catch up slowly. Don't tear the house down.",
          "sub": "Lỡ nhịp thì ôn bù từ từ, đừng đập đi xây lại.",
          "keys": [
            "ôn bù từ từ"
          ]
        }
      ],
      "ref": "p21,p23"
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
            "text": "Một tháng sau · tối Chủ nhật",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:no storm"
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
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "card-index",
                "crescent-moon"
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
            "caption": "Một tháng sau · cùng chiếc bàn",
            "icon": "card-index"
          },
          {
            "id": "j-card",
            "t": "text",
            "text": "“Our lead time is about two weeks.”",
            "x": 7932,
            "y": 1260,
            "size": 40,
            "at": "l3:real sentence",
            "color": "accent"
          },
          {
            "id": "j-vi",
            "t": "text",
            "text": "thay vì một chữ nghĩa tiếng Việt",
            "x": 7932,
            "y": 1340,
            "size": 40,
            "at": "l3:vietnamese",
            "color": "muted"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Mưa dầm thấm lâu”",
            "x": 7932,
            "y": 1430,
            "size": 56,
            "at": "l4:steady rain",
            "color": "accent",
            "hl": [
              {
                "text": "thấm lâu",
                "at": "l4:soaks"
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
          "say": "A month later. Sunday night, the same desk. No storm tonight, just ten minutes of cards.",
          "sub": "Một tháng sau. Tối Chủ nhật, vẫn chiếc bàn ấy. Không còn mưa rào, chỉ mười phút ôn thẻ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Lead time. Our lead time is about two weeks.",
          "sub": "“Lead time”: thời gian chờ giao hàng của chúng tôi khoảng hai tuần.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Cards tied to your work stick better: a real sentence on the back, not one Vietnamese word.",
          "sub": "Thẻ gắn với công việc dễ nhớ hơn: mặt sau là một câu thật, thay vì chỉ một chữ nghĩa tiếng Việt.",
          "keys": [
            "một câu thật"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Slow, steady rain soaks deep. Ten minutes at a time.",
          "sub": "“Mưa dầm thấm lâu.” Mỗi lần mười phút.",
          "keys": [
            "Mưa dầm thấm lâu"
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
      "ref": "p25"
    },
    {
      "id": "s24",
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
            "id": "j-fit",
            "t": "text",
            "text": "Thẻ: từ, thuật ngữ, công thức",
            "x": 7932,
            "y": 1540,
            "size": 44,
            "at": "l1:exactly"
          },
          {
            "id": "j-skill",
            "t": "text",
            "text": "Kỹ năng: luyện rải nhiều ngày",
            "x": 7932,
            "y": 1625,
            "size": 46,
            "at": "l2:skills"
          },
          {
            "id": "j-now",
            "t": "text",
            "text": "Làm ngay: 10 thẻ, ôn sáng mai",
            "x": 8752,
            "y": 1780,
            "size": 50,
            "at": "l3:do it now",
            "color": "accent",
            "hl": [
              {
                "text": "ôn sáng mai",
                "at": "l3:tomorrow morning"
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
          "say": "Cards suit what you must remember exactly: words, terms, sentence patterns, formulas, process steps.",
          "sub": "Thẻ hợp với thứ cần nhớ chính xác: từ vựng, thuật ngữ, mẫu câu, công thức, các bước quy trình."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "For skills like writing or presenting, spread the practice over different days.",
          "sub": "Với kỹ năng như viết, thuyết trình: luyện vào nhiều ngày khác nhau, thay vì một buổi dài."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Do it now: pick ten things from this week, make ten cards, and review them tomorrow morning.",
          "sub": "Làm ngay: chọn mười điều vừa học tuần này, viết thành mười thẻ, hẹn ôn lại sáng mai.",
          "keys": [
            "mười thẻ"
          ]
        }
      ],
      "ref": "p24,outro"
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
            "at": "l1:normal",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:next day",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:a few",
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
            "x": 4636,
            "y": 450,
            "at": "l1:normal"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8572,
            "y": 500,
            "at": "l2:next day"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1630,
            "at": "l3:a few"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "h-rut"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:slowly"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: forgetting fast is normal. What you control is reviewing on time.",
          "sub": "Tóm lại: quên nhanh là bình thường. Điều bạn kiểm soát là ôn đúng lúc.",
          "keys": [
            "ôn đúng lúc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The next day, a few days later, next week, always answering before you look.",
          "sub": "Hôm sau, vài ngày sau, tuần sau, lần nào cũng tự trả lời trước khi xem.",
          "keys": [
            "tự trả lời trước khi xem"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Add a few, steadily. And when you fall behind, catch up slowly.",
          "sub": "Thêm ít mà đều. Lỡ nhịp thì bù từ từ.",
          "keys": [
            "bù từ từ"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s33",
      "module": "QUIZ-01",
      "ref": "questions[30]",
      "data": {
        "q": "In the think about it question, why might adding fifty new cards a day fail?",
        "options": [
          "Phones cannot store that many cards, so the app deletes the oldest ones",
          "Each new card returns several times, so hundreds pile up and learners feel overwhelmed",
          "Spaced review never works for exams, so the cards are wasted from the start"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "card-index",
        "why": "Phương pháp không sai, vấn đề là liều lượng."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "In the think about it question, why might adding fifty new cards a day fail?",
          "sub": "Trong phần thử nghĩ xem, vì sao thêm năm mươi thẻ mới mỗi ngày dễ thất bại?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Each new card returns several times, so hundreds pile up and learners feel overwhelmed.",
          "sub": "Mỗi thẻ mới quay lại vài lần, hàng trăm thẻ dồn lại khiến người học ngán."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "The method is fine. The amount is the problem.",
          "sub": "Phương pháp không sai, vấn đề là liều lượng."
        }
      ],
      "beats": {
        "after": 500
      }
    },
    {
      "id": "s34",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu để ôn đúng lúc",
        "sub": "Tự trả lời trước khi xem đáp án"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Forty questions are below. Answer first, then check.",
          "sub": "Bốn mươi câu hỏi ở bên dưới. Tự trả lời trước, rồi mới xem."
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s23"
  }
};
