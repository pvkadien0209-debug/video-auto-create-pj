// bar-roadmap-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-roadmap-overview--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "bar-roadmap",
    "slug": "bar-roadmap-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Muốn làm luật sư ở Việt Nam phải qua những bước nào?",
    "series": "Bốn bước thành luật sư — lộ trình theo Luật Luật sư hiện hành cho cử nhân luật"
  },
  "format": "W",
  "mode": "text",
  "narrator": "det",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
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
            "id": "a-q",
            "t": "text",
            "text": "Đỗ một kỳ thi",
            "x": 60,
            "y": 90,
            "size": 120,
            "at": "l1:pass",
            "color": "accent"
          },
          {
            "id": "a-q2",
            "t": "text",
            "text": "= thành luật sư?",
            "x": 60,
            "y": 240,
            "size": 100,
            "at": "l1:lawyer",
            "hl": [
              {
                "text": "thành luật sư?",
                "at": "l1:lawyer"
              }
            ]
          },
          {
            "id": "a-o1",
            "t": "text",
            "text": "A. Đúng, đỗ là xong",
            "x": 70,
            "y": 400,
            "size": 56,
            "at": "l2:pass"
          },
          {
            "id": "a-o2",
            "t": "text",
            "text": "B. Kỳ thi chỉ ở giữa đường",
            "x": 70,
            "y": 480,
            "size": 56,
            "at": "l2:halfway"
          },
          {
            "id": "a-o1x",
            "t": "strike",
            "over": "a-o1",
            "at": "l3:B"
          },
          {
            "id": "a-ok",
            "t": "text",
            "text": "✓",
            "x": 20,
            "y": 465,
            "size": 80,
            "at": "l3:B",
            "color": "accent"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Theo Luật Luật sư (VBHN 03/VBHN-VPQH) và Thông tư 10/2021/TT-BTP",
            "x": 60,
            "y": 720,
            "size": 26,
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
          "say": "Pass one bar exam and you are a lawyer. True or false?",
          "sub": "Đỗ một kỳ thi là thành luật sư. Đúng hay sai?",
          "keys": [
            "Đúng hay sai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A: pass and done. B: the exam is only halfway. Guess.",
          "sub": "A: đỗ là xong. B: kỳ thi chỉ ở giữa đường. Đoán đi.",
          "wait": 1500
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The answer is B. Most guess A, and get surprised.",
          "sub": "Đáp án là B. Đa số đoán A, rồi bất ngờ.",
          "keys": [
            "Đáp án là B"
          ]
        }
      ],
      "ref": "intro,p3"
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
            "y": 40,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "graduation-cap",
                "party-popper"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "lan",
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
            "caption": "Tối Chủ nhật · tiệc tốt nghiệp",
            "icon": "graduation-cap"
          },
          {
            "id": "a-hard",
            "t": "text",
            "text": "“Thi luật sư khó lắm!”",
            "x": 70,
            "y": 590,
            "size": 46,
            "at": "l2:hard",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Đường đi khó…”",
            "x": 900,
            "y": 640,
            "size": 52,
            "at": "l4:roads",
            "color": "accent",
            "hl": [
              {
                "text": "Đường đi khó",
                "at": "l4:roads"
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
          "say": "Meet Lan.",
          "sub": "Đây là Lan."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fresh law degree, office job in Hanoi. At her party, one line repeats: the bar exam is hard.",
          "sub": "Vừa nhận bằng cử nhân luật, làm ở một công ty tại Hà Nội. Ở tiệc, ai cũng nhắc: thi luật sư khó lắm.",
          "keys": [
            "thi luật sư khó lắm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Hard, sure. But nobody shows me the road. Let me write it down.",
          "sub": "Khó thì khó. Nhưng chẳng ai chỉ đường cụ thể. Để em ghi lại đã.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A writer said: roads are hard not for rivers and mountains, but for our fear.",
          "sub": "Nguyễn Bá Học viết: “Đường đi khó, không khó vì ngăn sông cách núi, mà khó vì lòng người ngại núi e sông.”",
          "keys": [
            "ngại núi e sông"
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
            "text": "Thành luật sư: mấy bước?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:steps",
            "hl": [
              {
                "text": "mấy bước",
                "at": "l1:steps"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: một kỳ thi",
            "x": 2028,
            "y": 170,
            "size": 54,
            "at": "l2:exam",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:not"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: bốn chặng nối nhau",
            "x": 2028,
            "y": 260,
            "size": 60,
            "at": "l3:four",
            "color": "accent",
            "hl": [
              {
                "text": "bốn chặng",
                "at": "l3:four"
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
          "say": "So, what steps must you take to become a lawyer in Vietnam?",
          "sub": "Vậy muốn làm luật sư ở Việt Nam phải qua những bước nào?",
          "keys": [
            "những bước nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not one big exam.",
          "sub": "Không phải một kỳ thi lớn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Four stages in a chain, under the Law on Lawyers and Circular ten.",
          "sub": "Mà là bốn chặng nối nhau, theo Luật Luật sư và Thông tư 10/2021/TT-BTP.",
          "keys": [
            "bốn chặng nối nhau"
          ]
        }
      ],
      "ref": "intro,p3"
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
            "id": "b-r0",
            "t": "box",
            "x": 2028,
            "y": 380,
            "w": 380,
            "h": 110,
            "at": "l1:training",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-r1",
            "t": "box",
            "x": 2438,
            "y": 380,
            "w": 380,
            "h": 110,
            "at": "l1:probation",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-r2",
            "t": "box",
            "x": 2848,
            "y": 380,
            "w": 380,
            "h": 110,
            "at": "l1:test",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-r3",
            "t": "box",
            "x": 3258,
            "y": 380,
            "w": 380,
            "h": 110,
            "at": "l1:certificate",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-rt0",
            "t": "text",
            "text": "Học nghề",
            "x": 2048,
            "y": 400,
            "size": 46,
            "at": "l1:training+200"
          },
          {
            "id": "b-rt1",
            "t": "text",
            "text": "Tập sự",
            "x": 2458,
            "y": 400,
            "size": 46,
            "at": "l1:probation+200"
          },
          {
            "id": "b-rt2",
            "t": "text",
            "text": "Kiểm tra",
            "x": 2868,
            "y": 400,
            "size": 46,
            "at": "l1:test+200"
          },
          {
            "id": "b-rt3",
            "t": "text",
            "text": "Chứng chỉ + Đoàn",
            "x": 3278,
            "y": 400,
            "size": 46,
            "at": "l1:certificate+200"
          },
          {
            "id": "b-mid",
            "t": "text",
            "text": "↑ trạm giữa đường",
            "x": 2828,
            "y": 510,
            "size": 44,
            "at": "l2:middle",
            "color": "coral",
            "hl": [
              {
                "text": "giữa đường",
                "at": "l2:middle"
              }
            ]
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Bài này: một tuần của Lan",
            "x": 2028,
            "y": 620,
            "size": 50,
            "at": "l3:week",
            "color": "accent",
            "hl": [
              {
                "text": "một tuần",
                "at": "l3:week"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Luật Luật sư (VBHN 03/VBHN-VPQH) · Thông tư 10/2021/TT-BTP",
            "x": 2028,
            "y": 720,
            "size": 26,
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
          "say": "Training, probation, the probation test, then certificate and bar.",
          "sub": "Đào tạo nghề, tập sự, kiểm tra kết quả tập sự, rồi chứng chỉ và gia nhập Đoàn.",
          "keys": [
            "Đào tạo nghề, tập sự"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "See the test? Right in the middle.",
          "sub": "Thấy kỳ kiểm tra chưa? Nằm ngay giữa.",
          "keys": [
            "Nằm ngay giữa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "We follow Lan for one week.",
          "sub": "Mình theo Lan một tuần.",
          "keys": [
            "một tuần"
          ]
        }
      ],
      "ref": "intro,p4"
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
            "at": "l3",
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
            "text": "① Thứ Hai · Tiêu chuẩn",
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
            "y": 110,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "lan",
                  "side": "left"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold"
                }
              ],
              "props": [
                "hot-beverage",
                "balance-scale"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
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
            "at": "l1:coffee",
            "caption": "Sáng thứ Hai · quán cà phê",
            "icon": "hot-beverage"
          },
          {
            "id": "c-a",
            "t": "text",
            "text": "Điều 10 · tiêu chuẩn luật sư:",
            "x": 3996,
            "y": 160,
            "size": 46,
            "at": "l4:Article",
            "hl": [
              {
                "text": "Điều 10",
                "at": "l4:ten"
              }
            ]
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "• công dân VN, trung thành",
            "x": 3996,
            "y": 225,
            "size": 34,
            "at": "l4:citizen"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "• tuân thủ luật · đạo đức tốt",
            "x": 3996,
            "y": 275,
            "size": 34,
            "at": "l4:character"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "• bằng cử nhân luật",
            "x": 3996,
            "y": 325,
            "size": 40,
            "at": "l5:degree",
            "color": "accent",
            "hl": [
              {
                "text": "bằng cử nhân luật",
                "at": "l5:degree"
              }
            ]
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "• đào tạo nghề · tập sự",
            "x": 3996,
            "y": 380,
            "size": 34,
            "at": "l5:training"
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "• sức khoẻ hành nghề",
            "x": 3996,
            "y": 430,
            "size": 34,
            "at": "l5:health"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: Monday coffee.",
          "sub": "Chặng một: cà phê sáng thứ Hai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Uncle Bình, Lan's uncle, a lawyer for decades. He reads every comma.",
          "sub": "Đây là Bác Bình, bác ruột Lan, làm luật sư mấy chục năm. Đọc kỹ từng dấu phẩy.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Slow down. Before any exam, read the standards.",
          "sub": "Từ từ con. Trước chuyện thi cử, đọc tiêu chuẩn đã.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Article ten: a loyal, law abiding Vietnamese citizen of good character.",
          "sub": "Điều 10: công dân Việt Nam, trung thành với Tổ quốc, tuân thủ pháp luật, đạo đức tốt.",
          "keys": [
            "Điều 10"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Plus a law degree, training, probation, and good health.",
          "sub": "Thêm bằng cử nhân luật, đã đào tạo nghề, đã qua tập sự, có sức khoẻ hành nghề.",
          "keys": [
            "bằng cử nhân luật"
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
            "id": "c-first",
            "t": "text",
            "text": "Bằng cử nhân = dòng đầu tiên",
            "x": 3996,
            "y": 500,
            "size": 46,
            "at": "l1:first",
            "color": "coral",
            "hl": [
              {
                "text": "dòng đầu tiên",
                "at": "l1:first"
              }
            ]
          },
          {
            "id": "c-11",
            "t": "text",
            "text": "Điều 11: + chứng chỉ + gia nhập Đoàn",
            "x": 3996,
            "y": 580,
            "size": 44,
            "at": "l2:eleven",
            "hl": [
              {
                "text": "chứng chỉ",
                "at": "l2:certificate"
              }
            ]
          },
          {
            "id": "c-blk",
            "t": "text",
            "text": "Vẫn có thể bị chặn → bài sau",
            "x": 3996,
            "y": 660,
            "size": 38,
            "at": "l2:practise",
            "color": "muted"
          },
          {
            "id": "c-key",
            "t": "text",
            "text": "Bằng = vé vào cổng",
            "x": 4816,
            "y": 660,
            "size": 46,
            "at": "l3:gate",
            "color": "accent",
            "hl": [
              {
                "text": "vé vào cổng",
                "at": "l3:gate"
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
          "say": "So my degree is only the first line on the list?",
          "sub": "Vậy tấm bằng của con chỉ là dòng đầu tiên trong danh sách?",
          "face": "surprised"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Yes. And Article eleven adds: to practise, you need a certificate and a bar association.",
          "sub": "Đúng. Điều 11 còn thêm: muốn hành nghề phải có chứng chỉ và gia nhập một Đoàn luật sư.",
          "keys": [
            "gia nhập một Đoàn luật sư"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A degree gets you through the gate, not onto the stage.",
          "sub": "Tấm bằng là vé vào cổng, chưa phải vé lên sân khấu. Có người học xong vẫn bị chặn, bài sau kể.",
          "keys": [
            "vé vào cổng"
          ]
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s07",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "Thứ Hai · Lan lập kế hoạch",
        "actors": [
          {
            "id": "lan",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Chỉ lo ôn thi, đỗ là thành luật sư",
          "why": "Kỳ kiểm tra chỉ là một chặng ở giữa; trước và sau nó còn thủ tục.",
          "rule": "Trạm giữa đường, không phải vạch đích"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Easy. I cram for one exam, pass it, and I am a lawyer.",
          "sub": "Dễ mà. Ôn một kỳ thi, đỗ là thành luật sư.",
          "pose": "explain",
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
          "say": "Before it: a year of training, a year of probation.",
          "sub": "Trước nó: mười hai tháng đào tạo nghề, mười hai tháng tập sự.",
          "keys": [
            "mười hai tháng tập sự"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "After it: certificate, bar, card. Paperwork ambushes crammers.",
          "sub": "Sau nó: hồ sơ chứng chỉ, gia nhập Đoàn, thẻ luật sư. Người chỉ lo ôn thi bị giấy tờ phục kích.",
          "keys": [
            "giấy tờ phục kích"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Rewind!",
          "sub": "Tua lại!",
          "phase": "redo"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "lan",
          "say": "Fine. I map all four stages.",
          "sub": "Được rồi. Em vẽ đủ bốn chặng.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Right. A station halfway, not the finish.",
          "sub": "Đúng. Trạm giữa đường, không phải vạch đích.",
          "phase": "redo",
          "keys": [
            "Trạm giữa đường"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
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
            "at": "l6",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6:Hanoi",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Ba · Học nghề",
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
            "y": 110,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l6",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "push"
                }
              ]
            },
            "at": "l1:training",
            "caption": "Trưa thứ Ba · đọc thông báo khoá 28",
            "icon": "page-facing-up"
          },
          {
            "id": "d-12",
            "t": "text",
            "text": "Điều 12: 12 tháng",
            "x": 5964,
            "y": 160,
            "size": 56,
            "at": "l2:twelve",
            "color": "accent",
            "hl": [
              {
                "text": "12 tháng",
                "at": "l2:twelve"
              }
            ]
          },
          {
            "id": "d-gcn",
            "t": "text",
            "text": "→ Giấy chứng nhận tốt nghiệp",
            "x": 5964,
            "y": 240,
            "size": 42,
            "at": "l2:certificate"
          },
          {
            "id": "d-13",
            "t": "text",
            "text": "Điều 13 miễn: thẩm phán, KSV,",
            "x": 5964,
            "y": 320,
            "size": 38,
            "at": "l3:Thirteen"
          },
          {
            "id": "d-13b",
            "t": "text",
            "text": "điều tra viên, GS, PGS, TS luật",
            "x": 5964,
            "y": 370,
            "size": 38,
            "at": "l3:doctors"
          },
          {
            "id": "d-new",
            "t": "text",
            "text": "Cử nhân mới → học đủ khoá",
            "x": 5964,
            "y": 440,
            "size": 44,
            "at": "l4:full",
            "color": "coral",
            "hl": [
              {
                "text": "học đủ khoá",
                "at": "l4:full"
              }
            ]
          },
          {
            "id": "d-k28",
            "t": "text",
            "text": "Khoá 28: xét tuyển, không thi",
            "x": 5964,
            "y": 530,
            "size": 42,
            "at": "l5:selects",
            "hl": [
              {
                "text": "không thi",
                "at": "l5:no exam"
              }
            ]
          },
          {
            "id": "d-ca",
            "t": "text",
            "text": "3 ca: ngày · tối · cuối tuần",
            "x": 5964,
            "y": 595,
            "size": 40,
            "at": "l6:Three"
          },
          {
            "id": "d-loc",
            "t": "text",
            "text": "Hà Nội · TP. Hồ Chí Minh",
            "x": 5964,
            "y": 655,
            "size": 38,
            "at": "l6:Hanoi"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Thông báo tuyển sinh khoá 28 lần 1/2026, Học viện Tư pháp",
            "x": 6784,
            "y": 700,
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
          "say": "Tuesday: stage one, training.",
          "sub": "Thứ Ba: chặng một, đào tạo nghề."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article twelve: twelve months of training, then a graduation certificate.",
          "sub": "Điều 12: mười hai tháng ở cơ sở đào tạo nghề luật sư, xong được cấp Giấy chứng nhận tốt nghiệp.",
          "keys": [
            "mười hai tháng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article Thirteen exempts judges, prosecutors, investigators, law professors and doctors.",
          "sub": "Điều 13 chỉ miễn cho một số người: thẩm phán, kiểm sát viên, điều tra viên, giáo sư, phó giáo sư, tiến sĩ luật."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A fresh graduate usually takes the full course.",
          "sub": "Cử nhân mới ra trường thường phải học đủ khoá.",
          "keys": [
            "học đủ khoá"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Intake twenty-eight selects by file, no exam.",
          "sub": "Thông báo khoá 28 của Học viện Tư pháp: xét tuyển, không thi.",
          "keys": [
            "xét tuyển, không thi"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "lan",
          "say": "Three slots: weekday days, weekday evenings, weekend days. In Hanoi and Ho Chi Minh City.",
          "sub": "Ba ca: ban ngày thứ Hai đến thứ Sáu, buổi tối thứ Hai đến thứ Sáu, ban ngày cuối tuần. Ở Hà Nội và TP. Hồ Chí Minh.",
          "face": "thinking"
        }
      ],
      "ref": "p5,p6"
    },
    {
      "id": "s09",
      "module": "BRK-04",
      "data": {
        "title": "Lan chọn ca học",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrong": "Nghỉ việc, học ban ngày: học phí thấp, mất thu nhập một năm",
        "right": "Giữ việc, học tối hoặc cuối tuần: học phí cao hơn, ít giờ ôn",
        "wrongIllus": "sun",
        "rightIllus": "crescent-moon"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Option A: quit, study by day.",
          "sub": "Cách A: nghỉ việc, học ban ngày.",
          "keys": [
            "Cách A"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Option B: keep the job, study evenings.",
          "sub": "Cách B: giữ việc, học tối hoặc cuối tuần.",
          "keys": [
            "Cách B"
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
            "id": "d-key",
            "t": "text",
            "text": "Ca học = tiền · thu nhập · sức",
            "x": 6784,
            "y": 655,
            "size": 40,
            "at": "l3:fees",
            "color": "accent",
            "hl": [
              {
                "text": "sức",
                "at": "l3:energy"
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
          "say": "A: cheaper fee, no income for a year. B: higher fee, less review time. I keep my job.",
          "sub": "A: học phí thấp, mất thu nhập một năm. B: học phí cao hơn, ít giờ ôn. Em giữ việc.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Same certificate either way. Each option just costs something different.",
          "sub": "Cách nào cũng ra cùng một giấy chứng nhận. Mỗi cách tốn một thứ khác nhau."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Choosing a slot means choosing between fees, income and your energy.",
          "sub": "Chọn ca học là chọn giữa tiền học, thu nhập và sức mình.",
          "keys": [
            "tiền học, thu nhập và sức mình"
          ]
        }
      ],
      "ref": "p7,p8"
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
            "at": "l3",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Tư · Tập sự",
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
            "y": 110,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "think"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "notebook",
                "briefcase"
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
            "at": "l1:Wednesday",
            "caption": "Tối thứ Tư · văn phòng Bác Bình",
            "icon": "briefcase"
          },
          {
            "id": "e-14",
            "t": "text",
            "text": "Điều 14: 12 tháng tập sự",
            "x": 7932,
            "y": 160,
            "size": 50,
            "at": "l3:fourteen",
            "hl": [
              {
                "text": "12 tháng",
                "at": "l3:counts"
              }
            ]
          },
          {
            "id": "e-reg",
            "t": "text",
            "text": "tính từ ngày ĐĂNG KÝ tại Đoàn",
            "x": 7932,
            "y": 235,
            "size": 44,
            "at": "l3:registration",
            "color": "coral",
            "hl": [
              {
                "text": "ĐĂNG KÝ",
                "at": "l3:registration"
              }
            ]
          },
          {
            "id": "e-hd",
            "t": "text",
            "text": "Luật sư hướng dẫn: ≥ 3 năm,",
            "x": 7932,
            "y": 320,
            "size": 40,
            "at": "l4:three"
          },
          {
            "id": "e-hd2",
            "t": "text",
            "text": "không quá 3 người cùng lúc",
            "x": 7932,
            "y": 370,
            "size": 40,
            "at": "l4:most"
          },
          {
            "id": "e-tt",
            "t": "text",
            "text": "TT 10: ≥ 20 giờ/tuần",
            "x": 7932,
            "y": 450,
            "size": 46,
            "at": "l5:twenty",
            "hl": [
              {
                "text": "20 giờ/tuần",
                "at": "l5:twenty"
              }
            ]
          },
          {
            "id": "e-nk",
            "t": "text",
            "text": "Sổ nhật ký · báo cáo cuối",
            "x": 7932,
            "y": 520,
            "size": 42,
            "at": "l5:diary"
          },
          {
            "id": "e-no",
            "t": "text",
            "text": "✗ bào chữa tại toà",
            "x": 7932,
            "y": 590,
            "size": 40,
            "at": "l6:court",
            "color": "coral"
          },
          {
            "id": "e-no2",
            "t": "text",
            "text": "✗ ký văn bản tư vấn",
            "x": 7932,
            "y": 650,
            "size": 40,
            "at": "l6:signing",
            "color": "coral"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Luật Luật sư, Điều 14 · Thông tư 10/2021/TT-BTP",
            "x": 8752,
            "y": 700,
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
          "say": "Third stop: Wednesday. Stage two, probation.",
          "sub": "Chặng ba: tối thứ Tư. Chặng hai: tập sự."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "With that certificate, you train at a law practice. Twelve months.",
          "sub": "Có giấy chứng nhận ấy, con tập sự ở một tổ chức hành nghề luật sư. Mười hai tháng.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article fourteen counts them from your registration at the bar association.",
          "sub": "Điều 14 tính mười hai tháng ấy từ ngày đăng ký tập sự tại Đoàn luật sư nơi tổ chức có trụ sở.",
          "keys": [
            "từ ngày đăng ký tập sự"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Supervisors need three years of practice, three trainees at most.",
          "sub": "Luật sư hướng dẫn có ít nhất ba năm kinh nghiệm, không hướng dẫn quá ba người cùng lúc.",
          "keys": [
            "ít nhất ba năm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Circular ten adds: twenty hours a week, a probation diary, a final report.",
          "sub": "Thông tư 10 thêm: tối thiểu 20 giờ mỗi tuần, lập Sổ nhật ký tập sự, nộp báo cáo khi hoàn thành.",
          "keys": [
            "Sổ nhật ký tập sự"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "binh",
          "say": "You help me. But no defending clients in court, and no signing legal advice.",
          "sub": "Con giúp bác. Nhưng không bào chữa cho khách tại phiên toà, không ký văn bản tư vấn.",
          "keys": [
            "không ký văn bản tư vấn"
          ]
        }
      ],
      "ref": "p9,p10"
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
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Năm · Tua nhanh",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:call"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1200,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "lan",
                  "side": "left"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain",
                  "face": "happy"
                }
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
            "at": "l2:Dũng",
            "caption": "Tối thứ Năm · Dũng gọi video",
            "icon": "mobile-phone"
          },
          {
            "id": "f-ff",
            "t": "text",
            "text": "⏩ Giả sử: Dũng học xong",
            "x": 60,
            "y": 1260,
            "size": 44,
            "at": "l4:certificate",
            "hl": [
              {
                "text": "Giả sử",
                "at": "l4:certificate"
              }
            ]
          },
          {
            "id": "f-w1",
            "t": "text",
            "text": "Tuần sau: đi làm văn phòng",
            "x": 60,
            "y": 1340,
            "size": 42,
            "at": "l4:week"
          },
          {
            "id": "f-w2",
            "t": "text",
            "text": "3 tháng sau: hỏi Đoàn",
            "x": 60,
            "y": 1410,
            "size": 42,
            "at": "l5:Three"
          },
          {
            "id": "f-w3",
            "t": "text",
            "text": "Tập sự đã tính: 0 ngày",
            "x": 60,
            "y": 1490,
            "size": 54,
            "at": "l6:zero",
            "color": "coral",
            "hl": [
              {
                "text": "0 ngày",
                "at": "l6:zero"
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
          "say": "Fourth stop: Thursday, a call.",
          "sub": "Chặng bốn: tối thứ Năm, một cuộc gọi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, Lan's cousin. Law degree from abroad, fast as a delivery bike.",
          "sub": "Đây là Dũng, em họ Lan. Học luật ở nước ngoài, nhanh như xe giao hàng.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Probation? Easy! I start work and the clock runs.",
          "sub": "Tập sự hả? Dễ! Cứ đi làm là đồng hồ tự chạy.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Fast forward. Dũng has his training certificate, and starts at a law office the next week.",
          "sub": "Tua nhanh nhé. Giả sử Dũng đã có giấy chứng nhận tốt nghiệp, tuần sau đi làm ở một văn phòng luật sư.",
          "keys": [
            "Tua nhanh"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Three months later, he asks the bar association about his probation.",
          "sub": "Ba tháng sau, Dũng mới hỏi Đoàn luật sư về thời gian tập sự."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Zero days. Twelve months count only from registration, and he never filed.",
          "sub": "Không ngày nào. Mười hai tháng chỉ tính từ ngày đăng ký, mà Dũng chưa nộp hồ sơ nào.",
          "keys": [
            "chỉ tính từ ngày đăng ký"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p11"
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
          }
        ],
        "items": [
          {
            "id": "f-key",
            "t": "text",
            "text": "Ngày đi làm ≠ ngày tập sự",
            "x": 60,
            "y": 1570,
            "size": 56,
            "at": "l1:work",
            "color": "accent",
            "hl": [
              {
                "text": "ngày tập sự",
                "at": "l1:probation"
              }
            ]
          },
          {
            "id": "f-key2",
            "t": "text",
            "text": "Ngày ĐĂNG KÝ mới là ngày tính",
            "x": 60,
            "y": 1665,
            "size": 50,
            "at": "l2:registration",
            "hl": [
              {
                "text": "ĐĂNG KÝ",
                "at": "l2:registration"
              }
            ]
          },
          {
            "id": "f-dung",
            "t": "text",
            "text": "Dũng: “Ối… tua lại!”",
            "x": 60,
            "y": 1770,
            "size": 44,
            "at": "l3:Oops",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your first day at work is not your first day of probation.",
          "sub": "Ngày đi làm chưa phải ngày tập sự.",
          "keys": [
            "chưa phải ngày tập sự"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The registration day is the day that counts.",
          "sub": "Ngày đăng ký mới là ngày được tính.",
          "keys": [
            "Ngày đăng ký"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Oops. Register first, then start the clock. Got it.",
          "sub": "Ối. Đăng ký trước, rồi đồng hồ mới chạy. Em hiểu rồi.",
          "face": "surprised"
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s14",
      "module": "BRK-07",
      "data": {
        "question": "Tập sự xong rồi thì kiểm tra những gì?",
        "illus": "memo"
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
          "say": "Probation done. So what does that famous test actually check?",
          "sub": "Tập sự xong. Vậy kỳ kiểm tra nổi tiếng kia thực ra kiểm tra gì?",
          "keys": [
            "kiểm tra gì"
          ]
        }
      ],
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
          },
          {
            "at": 150,
            "fit": "G",
            "ms": 900
          },
          {
            "at": "l5",
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
            "text": "⑤ Thứ Sáu · Kiểm tra",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1200,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "notebook",
                "memo"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Friday",
            "caption": "Tối thứ Sáu · đọc Thông tư 10",
            "icon": "memo"
          },
          {
            "id": "g-15",
            "t": "text",
            "text": "Điều 15: Liên đoàn Luật sư VN",
            "x": 2028,
            "y": 1250,
            "size": 44,
            "at": "l2:fifteen",
            "hl": [
              {
                "text": "Liên đoàn Luật sư VN",
                "at": "l2:Federation"
              }
            ]
          },
          {
            "id": "g-w1",
            "t": "text",
            "text": "Viết 1: kỹ năng · 180 phút",
            "x": 2028,
            "y": 1330,
            "size": 44,
            "at": "l3:skills",
            "hl": [
              {
                "text": "180 phút",
                "at": "l3:hundred"
              }
            ]
          },
          {
            "id": "g-w2",
            "t": "text",
            "text": "Viết 2: luật, đạo đức · 90 phút",
            "x": 2028,
            "y": 1400,
            "size": 44,
            "at": "l4:ninety"
          },
          {
            "id": "g-or",
            "t": "text",
            "text": "Thực hành: bảo vệ vụ việc mình",
            "x": 2028,
            "y": 1480,
            "size": 42,
            "at": "l5:case"
          },
          {
            "id": "g-50",
            "t": "text",
            "text": "Mỗi bài ≥ 50/100",
            "x": 2028,
            "y": 1560,
            "size": 56,
            "at": "l6:fifty",
            "color": "accent",
            "hl": [
              {
                "text": "≥ 50/100",
                "at": "l6:fifty"
              }
            ]
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "Giấy chứng nhận: 5 năm",
            "x": 2028,
            "y": 1650,
            "size": 42,
            "at": "l7:five"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Trượt 3 kỳ → tập sự lại",
            "x": 2028,
            "y": 1720,
            "size": 42,
            "at": "l7:three",
            "color": "coral"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Luật Luật sư, Điều 15 · Thông tư 10/2021/TT-BTP",
            "x": 2028,
            "y": 1830,
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
          "who": "det",
          "say": "Fifth stop: Friday night. Stage three, the test.",
          "sub": "Chặng năm: tối thứ Sáu. Chặng ba: kiểm tra kết quả tập sự."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article fifteen: the Vietnam Bar Federation runs it, through a council.",
          "sub": "Điều 15: Liên đoàn Luật sư Việt Nam tổ chức, qua một Hội đồng kiểm tra.",
          "keys": [
            "Liên đoàn Luật sư Việt Nam"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two written papers. Skills: one hundred eighty minutes.",
          "sub": "Hai bài viết. Bài kỹ năng tố tụng, tư vấn: 180 phút.",
          "keys": [
            "180 phút"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lawyer law and the ethics code: ninety minutes.",
          "sub": "Bài pháp luật luật sư và Bộ Quy tắc đạo đức: 90 phút."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "Then the practical part: I defend a case I worked on.",
          "sub": "Rồi phần thực hành: bảo vệ quan điểm về vụ việc mình đã tham gia.",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Each part: fifty out of a hundred, at least.",
          "sub": "Mỗi bài thang 100, phải từ 50 điểm trở lên.",
          "keys": [
            "từ 50 điểm trở lên"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "The certificate lasts five years. Fail three rounds, and probation starts over.",
          "sub": "Giấy chứng nhận hiệu lực năm năm. Không đạt sau ba kỳ thì đăng ký tập sự lại.",
          "keys": [
            "sau ba kỳ"
          ]
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s16",
      "module": "BRK-03",
      "data": {
        "value": 50,
        "suffix": " điểm",
        "label": "mỗi bài, thang 100 — bài nào cũng phải qua",
        "illus": "memo"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tape this on your desk.",
          "sub": "Dán số này lên bàn học."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fifty points, in every part.",
          "sub": "Năm mươi điểm, ở từng bài.",
          "keys": [
            "Năm mươi điểm"
          ]
        }
      ],
      "ref": "p14"
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
            "at": "l1",
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
            "id": "g-tip",
            "t": "text",
            "text": "Vụ việc thi nói: tự chọn",
            "x": 2028,
            "y": 1790,
            "size": 36,
            "at": "l1:choose",
            "hl": [
              {
                "text": "tự chọn",
                "at": "l1:choose"
              }
            ]
          },
          {
            "id": "g-key",
            "t": "text",
            "text": "Nhật ký = bài nói mai sau",
            "x": 2848,
            "y": 1740,
            "size": 40,
            "at": "l3:today",
            "color": "accent",
            "hl": [
              {
                "text": "bài nói mai sau",
                "at": "l3:oral"
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
          "say": "Circular ten: you choose the oral case from cases you worked on.",
          "sub": "Bí mật trong Thông tư 10: vụ việc cho phần thực hành do người tập sự tự chọn trong số việc mình đã tham gia.",
          "keys": [
            "tự chọn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "So my probation diary is my oral exam material!",
          "sub": "Vậy Sổ nhật ký tập sự không chỉ để nộp. Nó là kho chất liệu cho phần thi nói!",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Exactly. A careful diary today is your oral answer later.",
          "sub": "Chính xác. Ghi nhật ký kỹ hôm nay là chuẩn bị bài thi nói ngày mai.",
          "keys": [
            "chuẩn bị bài thi nói ngày mai"
          ]
        }
      ],
      "ref": "p15,p16"
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
            "text": "⑥ Thứ Bảy · Chứng chỉ, Đoàn",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Saturday"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 4816,
            "y": 1200,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "hold"
                }
              ],
              "props": [
                "file-folder",
                "classical-building"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "at": "l1:Saturday",
            "caption": "Sáng thứ Bảy · đi ngang trụ sở Đoàn",
            "icon": "classical-building"
          },
          {
            "id": "h-17",
            "t": "text",
            "text": "Hồ sơ Điều 17: đơn, lý lịch,",
            "x": 3996,
            "y": 1250,
            "size": 38,
            "at": "l2:application"
          },
          {
            "id": "h-17b",
            "t": "text",
            "text": "giấy khám, bằng, giấy KT",
            "x": 3996,
            "y": 1305,
            "size": 38,
            "at": "l2:health"
          },
          {
            "id": "h-b0",
            "t": "badge",
            "n": 1,
            "x": 4026,
            "y": 1410,
            "at": "l3:board"
          },
          {
            "id": "h-c0",
            "t": "text",
            "text": "Ban chủ nhiệm Đoàn",
            "x": 4076,
            "y": 1385,
            "size": 44,
            "at": "l3:board+200"
          },
          {
            "id": "h-b1",
            "t": "badge",
            "n": 2,
            "x": 4026,
            "y": 1495,
            "at": "l4:chairman"
          },
          {
            "id": "h-c1",
            "t": "text",
            "text": "Chủ tịch UBND tỉnh",
            "x": 4076,
            "y": 1470,
            "size": 44,
            "at": "l4:chairman+200",
            "color": "coral",
            "hl": [
              {
                "text": "UBND tỉnh",
                "at": "l4:provincial"
              }
            ]
          },
          {
            "id": "h-b2",
            "t": "badge",
            "n": 3,
            "x": 4026,
            "y": 1580,
            "at": "l5:join"
          },
          {
            "id": "h-c2",
            "t": "text",
            "text": "Gia nhập Đoàn",
            "x": 4076,
            "y": 1555,
            "size": 44,
            "at": "l5:join+200"
          },
          {
            "id": "h-b3",
            "t": "badge",
            "n": 4,
            "x": 4026,
            "y": 1665,
            "at": "l6:card"
          },
          {
            "id": "h-c3",
            "t": "text",
            "text": "Liên đoàn: thẻ",
            "x": 4076,
            "y": 1640,
            "size": 44,
            "at": "l6:card+200"
          },
          {
            "id": "h-7",
            "t": "text",
            "text": "7 ngày làm việc",
            "x": 4496,
            "y": 1555,
            "size": 38,
            "at": "l5:seven",
            "color": "accent"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Luật Luật sư, Điều 17, 20 · NĐ 121/2025/NĐ-CP (theo Tạp chí Luật sư Việt Nam)",
            "x": 3996,
            "y": 1810,
            "size": 26,
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
          "say": "Sixth stop: Saturday. Stage four, certificate and bar.",
          "sub": "Chặng sáu: sáng thứ Bảy. Chặng bốn: chứng chỉ và Đoàn luật sư."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The file: application, criminal record, health paper, degree, test certificate.",
          "sub": "Hồ sơ Điều 17: đơn, phiếu lý lịch tư pháp, giấy khám sức khoẻ, bản sao bằng luật, giấy chứng nhận kiểm tra.",
          "keys": [
            "phiếu lý lịch tư pháp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It goes to a bar association board.",
          "sub": "Nộp cho Ban chủ nhiệm Đoàn luật sư."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Since July twenty twenty-five, the provincial chairman grants it, not the Justice Minister.",
          "sub": "Từ 01/7/2025, Nghị định 121/2025/NĐ-CP giao Chủ tịch UBND cấp tỉnh cấp chứng chỉ, thay Bộ trưởng Bộ Tư pháp.",
          "keys": [
            "Chủ tịch UBND cấp tỉnh"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then you join one bar association. Its board decides in seven working days.",
          "sub": "Có chứng chỉ, chọn gia nhập một Đoàn luật sư theo Điều 20. Ban chủ nhiệm quyết định trong bảy ngày làm việc.",
          "keys": [
            "bảy ngày làm việc"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And the Bar Federation issues your lawyer card.",
          "sub": "Rồi Đoàn đề nghị Liên đoàn Luật sư Việt Nam cấp Thẻ luật sư.",
          "keys": [
            "Thẻ luật sư"
          ]
        }
      ],
      "ref": "p17,p18"
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
            "at": "l4",
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
            "text": "⑦ Chủ nhật · Thời gian, tiền",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1200,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "think"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "money-bag",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Sunday",
            "caption": "Trưa Chủ nhật · cơm nhà Bác Bình",
            "icon": "money-bag"
          },
          {
            "id": "i-2y",
            "t": "text",
            "text": "Thường hơn 2 năm",
            "x": 5964,
            "y": 1250,
            "size": 60,
            "at": "l2:two",
            "color": "accent",
            "hl": [
              {
                "text": "hơn 2 năm",
                "at": "l2:years"
              }
            ]
          },
          {
            "id": "i-2y2",
            "t": "text",
            "text": "12 + 12 tháng + chờ, thủ tục",
            "x": 5964,
            "y": 1335,
            "size": 38,
            "at": "l2:waiting"
          },
          {
            "id": "i-f1",
            "t": "text",
            "text": "Phí xét tuyển: 200.000 đ",
            "x": 5964,
            "y": 1410,
            "size": 42,
            "at": "l3:fees"
          },
          {
            "id": "i-f2",
            "t": "text",
            "text": "Ban ngày: 29.280.000 đ",
            "x": 5964,
            "y": 1475,
            "size": 42,
            "at": "l3:twenty-nine"
          },
          {
            "id": "i-f3",
            "t": "text",
            "text": "Tối, cuối tuần: 36.600.000 đ",
            "x": 5964,
            "y": 1540,
            "size": 42,
            "at": "l3:thirty-six",
            "color": "coral",
            "hl": [
              {
                "text": "36.600.000 đ",
                "at": "l3:thirty-six"
              }
            ]
          },
          {
            "id": "i-law",
            "t": "text",
            "text": "Dự thảo: 4 bước → 2 bước",
            "x": 5964,
            "y": 1630,
            "size": 46,
            "at": "l5:four",
            "hl": [
              {
                "text": "4 bước → 2 bước",
                "at": "l5:two"
              }
            ]
          },
          {
            "id": "i-law2",
            "t": "text",
            "text": "+ thi quốc gia — CHƯA thông qua",
            "x": 5964,
            "y": 1695,
            "size": 40,
            "at": "l6:not",
            "color": "coral"
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Thông báo khoá 28 (học phí cả khoá) · Tạp chí Dân chủ và Pháp luật, 9/2026",
            "x": 5964,
            "y": 1810,
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
          "say": "Seventh stop: Sunday lunch. Time and money.",
          "sub": "Chặng bảy: trưa Chủ nhật. Thời gian và tiền."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Twelve months, twelve more, then waiting and paperwork. Usually over two years.",
          "sub": "Mười hai tháng học, mười hai tháng tập sự, rồi chờ kiểm tra, thủ tục. Thường hơn hai năm.",
          "keys": [
            "Thường hơn hai năm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Intake twenty-eight fees: daytime, twenty-nine million dong; evenings, thirty-six point six million.",
          "sub": "Khoá 28: phí xét tuyển 200.000 đồng; học phí ban ngày 29.280.000 đồng, tối và cuối tuần 36.600.000 đồng.",
          "keys": [
            "36.600.000 đồng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "And the law is being amended.",
          "sub": "Mà Luật Luật sư cũng đang được sửa.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A September report: the draft cuts four steps to two, with a national exam.",
          "sub": "Theo Tạp chí Dân chủ và Pháp luật 9/2026: dự thảo rút từ bốn bước xuống hai bước, có một kỳ thi quốc gia.",
          "keys": [
            "bốn bước xuống hai bước"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Only a draft, not passed. Recheck after the session ends in November.",
          "sub": "Nhưng đó mới là dự thảo, chưa được thông qua. Kiểm lại sau kỳ họp, từ 17/10 đến 21/11/2026.",
          "keys": [
            "chưa được thông qua"
          ]
        }
      ],
      "ref": "p19,p20"
    },
    {
      "id": "s20",
      "module": "BRK-08",
      "data": {
        "title": "Lộ trình hiện hành",
        "points": [
          {
            "label": "Học nghề",
            "sub": "12 tháng",
            "illus": "books"
          },
          {
            "label": "Tập sự",
            "sub": "12 tháng, từ ngày đăng ký",
            "illus": "briefcase"
          },
          {
            "label": "Kiểm tra",
            "sub": "mỗi bài ≥ 50",
            "illus": "memo"
          },
          {
            "label": "Chứng chỉ",
            "sub": "Chủ tịch UBND tỉnh",
            "illus": "scroll"
          },
          {
            "label": "Đoàn + thẻ",
            "sub": "7 ngày làm việc",
            "illus": "balance-scale"
          }
        ],
        "current": 2
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Training, probation, test, certificate, bar.",
          "sub": "Học nghề, tập sự, kiểm tra, chứng chỉ, Đoàn.",
          "keys": [
            "kiểm tra"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The test sits in the middle.",
          "sub": "Kỳ kiểm tra nằm ở giữa.",
          "keys": [
            "ở giữa"
          ]
        }
      ],
      "ref": "p17,p18,p19"
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
            "text": "Tối Chủ nhật · một tuần sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1200,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "face": "happy",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up",
                "graduation-cap"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Sunday",
            "caption": "Tối Chủ nhật · cùng chiếc bàn ngày tiệc",
            "icon": "page-facing-up"
          },
          {
            "id": "j-p0",
            "t": "text",
            "text": "1. Học nghề · tháng …",
            "x": 7932,
            "y": 1260,
            "size": 44,
            "at": "l2:four+0"
          },
          {
            "id": "j-p1",
            "t": "text",
            "text": "2. Tập sự · tháng …",
            "x": 7932,
            "y": 1335,
            "size": 44,
            "at": "l2:four+300"
          },
          {
            "id": "j-p2",
            "t": "text",
            "text": "3. Kiểm tra · tháng …",
            "x": 7932,
            "y": 1410,
            "size": 44,
            "at": "l2:four+600"
          },
          {
            "id": "j-p3",
            "t": "text",
            "text": "4. Chứng chỉ, Đoàn · tháng …",
            "x": 7932,
            "y": 1485,
            "size": 44,
            "at": "l2:four+900"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“…ngại núi e sông”",
            "x": 7932,
            "y": 1590,
            "size": 54,
            "at": "l4:rivers",
            "color": "accent",
            "hl": [
              {
                "text": "ngại núi e sông",
                "at": "l4:mountains"
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
          "say": "Sunday night, one week later. Same table.",
          "sub": "Tối Chủ nhật, một tuần sau. Vẫn chiếc bàn hôm tiệc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Four stages, each with a start month. The test is now one station on a map.",
          "sub": "Bốn chặng, mỗi chặng một tháng dự kiến bắt đầu. Kỳ kiểm tra giờ chỉ là một trạm trên bản đồ.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The road was never blocked by rivers and mountains. Only by not seeing it.",
          "sub": "Đường đi khó không vì ngăn sông cách núi. Chỉ vì chưa ai vẽ nó ra.",
          "keys": [
            "chưa ai vẽ nó ra"
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
      "ref": "outro"
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
            "at": "l1:four",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l2:registration",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:draft",
            "fit": "I",
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
            "x": 3568,
            "y": 640,
            "at": "l1:four"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1620,
            "y": 1110,
            "at": "l2:registration"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 7524,
            "y": 1110,
            "at": "l3:draft"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài là kiến thức nghề, không phải tư vấn cho vụ việc cụ thể. Nhân vật là minh hoạ. Luật Luật sư đang sửa đổi — kiểm lại sau kỳ họp.",
            "x": 7932,
            "y": 1810,
            "size": 26,
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
          "say": "So: four stages in a chain, and the test is only the middle one.",
          "sub": "Tóm lại: bốn chặng nối nhau, kỳ kiểm tra chỉ là chặng giữa.",
          "keys": [
            "bốn chặng nối nhau"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Probation counts from registration, not from your first day at work.",
          "sub": "Tập sự tính từ ngày đăng ký, không phải ngày đi làm.",
          "keys": [
            "từ ngày đăng ký"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Over two years, fees by slot, and a draft law to watch.",
          "sub": "Hơn hai năm, học phí theo ca học, và một dự thảo luật cần theo dõi.",
          "keys": [
            "dự thảo luật"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p20"
    },
    {
      "id": "s23",
      "module": "QUIZ-01",
      "data": {
        "q": "When does the probation period start to count?",
        "options": [
          "As soon as the graduate begins working at any law office",
          "On the date the university hands over the bachelor's law degree",
          "From the day the trainee registers for probation at the bar association"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "spiral-calendar",
        "why": "Mười hai tháng tập sự tính từ ngày đăng ký tập sự tại Đoàn luật sư, không phải ngày đi làm."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "When does the probation period start to count?",
          "sub": "Thời gian tập sự bắt đầu được tính từ khi nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "From the day the trainee registers for probation at the bar association.",
          "sub": "Từ ngày đăng ký tập sự tại Đoàn luật sư."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Not from your first day at the office.",
          "sub": "Không phải từ ngày đầu đi làm."
        }
      ],
      "ref": "questions[14]"
    },
    {
      "id": "s24",
      "module": "END-05",
      "data": {
        "text": "Bốn chặng, một tờ giấy",
        "sub": "Ghi tháng dự kiến cho từng chặng · bài sau: tiêu chuẩn luật sư"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, write the four stages and a start month for each.",
          "sub": "Tối nay, viết bốn chặng lên một tờ giấy, ghi tháng dự kiến bắt đầu bên cạnh.",
          "keys": [
            "bốn chặng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next: the standards. Now try the forty questions below.",
          "sub": "Bài sau: tiêu chuẩn luật sư. Giờ thử bốn mươi câu hỏi bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (bài tổng chuỗi bar-roadmap) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-21 (đoán sai): “Đỗ một kỳ thi là thành luật sư?” → B: kỳ kiểm tra chỉ ở giữa đường (⚖️ p3). Dòng thời gian: một tuần sau lễ tốt nghiệp của Lan (tối Chủ nhật tiệc → thứ Hai cà phê Bác Bình: Điều 10, 11 → “Khoan đã!” chỉ lo ôn thi → thứ Ba học nghề + Cách A/B → thứ Tư tập sự → thứ Năm Dũng gọi, Đét tua nhanh (p11) → thứ Sáu kiểm tra → thứ Bảy chứng chỉ, Đoàn, thẻ → Chủ nhật bao lâu, bao nhiêu, dự thảo → tối Chủ nhật tờ giấy bốn chặng). Nhân vật theo w145/_series/bar-roadmap.md: Lan (chính), Bác Bình (luật sư, bác ruột), Dũng (em họ, học luật ở nước ngoài). Số chỉ từ bài: 12 + 12 tháng, ≥ 3 năm, ≤ 3 người, 20 giờ/tuần, 180/90 phút, 100/50 điểm, 5 năm, 3 kỳ, 01/7/2025, 7 ngày làm việc, hơn 2 năm, 200.000 / 29.280.000 / 36.600.000 đ, 4 → 2 bước, 17/10–21/11/2026. Cảnh ngắt nhịp: DLG s07 (p3), BRK-04 s09 (Cách A/B p7), BRK-07 s14, BRK-03 s16 (50 điểm), BRK-08 s20. Trích Nguyễn Bá Học mở/khép vòng. Câu đố questions[14]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
