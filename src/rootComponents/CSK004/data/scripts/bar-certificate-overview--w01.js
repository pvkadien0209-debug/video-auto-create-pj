// bar-certificate-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-certificate-overview--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "bar-practising-certificate",
    "slug": "bar-certificate-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Đạt kiểm tra rồi, làm gì để có chứng chỉ hành nghề luật sư?",
    "series": "Xin chứng chỉ hành nghề luật sư sau khi đạt kiểm tra — hồ sơ, thẩm quyền mới và khi bị từ chối"
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
            "text": "Nộp hồ sơ ở đâu?",
            "x": 60,
            "y": 90,
            "size": 110,
            "at": "l1:where",
            "color": "accent",
            "hl": [
              {
                "text": "ở đâu",
                "at": "l1:where"
              }
            ]
          },
          {
            "id": "a-bA",
            "t": "box",
            "x": 60,
            "y": 300,
            "w": 620,
            "h": 110,
            "at": "l2:bar",
            "stroke": 5
          },
          {
            "id": "a-A",
            "t": "text",
            "text": "A. Đoàn luật sư",
            "x": 90,
            "y": 320,
            "size": 60,
            "at": "l2:bar+200"
          },
          {
            "id": "a-bB",
            "t": "box",
            "x": 60,
            "y": 450,
            "w": 620,
            "h": 110,
            "at": "l2:justice",
            "stroke": 5
          },
          {
            "id": "a-B",
            "t": "text",
            "text": "B. Sở Tư pháp",
            "x": 90,
            "y": 470,
            "size": 60,
            "at": "l2:justice+200"
          },
          {
            "id": "a-Ax",
            "t": "strike",
            "over": "a-A",
            "at": "l3:answer"
          },
          {
            "id": "a-Br",
            "t": "ring",
            "around": [
              "a-B"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:B"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: Nghị định 121/2025/NĐ-CP, Mục I Phụ lục III — theo Tạp chí Luật sư Việt Nam, Thư viện Pháp luật",
            "x": 60,
            "y": 720,
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
          "say": "Quick guess. You passed the probation test. Where does your certificate file go?",
          "sub": "Đoán nhanh nhé. Bạn vừa đạt kỳ kiểm tra tập sự. Hồ sơ xin chứng chỉ nộp ở đâu?",
          "keys": [
            "nộp ở đâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A: the bar association. B: the provincial justice department.",
          "sub": "A: Đoàn luật sư. B: Sở Tư pháp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Most people say A. Under the procedure from July twenty twenty-five, the answer is B.",
          "sub": "Phần đông chọn A. Theo thủ tục từ 01/7/2025, đáp án là B.",
          "keys": [
            "đáp án là B"
          ]
        }
      ],
      "ref": "intro,p5,p6"
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
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "sports-medal"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
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
            "caption": "Chiều thứ Sáu · nhận giấy chứng nhận",
            "icon": "page-facing-up"
          },
          {
            "id": "a-ls",
            "t": "text",
            "text": "“Giờ em là luật sư rồi?”",
            "x": 900,
            "y": 640,
            "size": 46,
            "at": "l3:lawyer",
            "color": "coral",
            "hl": [
              {
                "text": "luật sư rồi",
                "at": "l3:lawyer"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Đi đường hỏi người già”",
            "x": 60,
            "y": 600,
            "size": 54,
            "at": "l4:road",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi người già",
                "at": "l4:elders"
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
          "say": "A year of probation at a small Hanoi law firm. Today, the paper she dreamed of.",
          "sub": "Một năm tập sự ở một công ty luật nhỏ tại Hà Nội. Hôm nay, tờ giấy mơ ước.",
          "keys": [
            "tờ giấy mơ ước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I passed! So, from Monday, I'm a real lawyer, right?",
          "sub": "Đạt rồi! Vậy từ thứ Hai, em là luật sư thật rồi, đúng không?",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: on the road, ask the old. Thảo will ask. But which road?",
          "sub": "Ông bà dặn: “Đi đường hỏi người già.” Thảo sẽ hỏi. Nhưng đường nào?",
          "keys": [
            "Đi đường hỏi người già"
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
      "ref": "intro,p2"
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
            "text": "Từ giấy chứng nhận đến chứng chỉ?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:practising",
            "hl": [
              {
                "text": "đến chứng chỉ",
                "at": "l1:certificate"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: đạt là xong",
            "x": 2028,
            "y": 170,
            "size": 54,
            "at": "l2:done",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:done+500"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: còn hai chặng",
            "x": 2028,
            "y": 260,
            "size": 60,
            "at": "l3:two",
            "color": "accent",
            "hl": [
              {
                "text": "hai chặng",
                "at": "l3:two"
              }
            ]
          },
          {
            "id": "b-11",
            "t": "text",
            "text": "Điều 11: chứng chỉ + gia nhập Đoàn",
            "x": 2868,
            "y": 180,
            "size": 44,
            "at": "l4:Article",
            "hl": [
              {
                "text": "gia nhập Đoàn",
                "at": "l4:join"
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
          "say": "So how do you get from that test paper to a practising certificate?",
          "sub": "Vậy từ tờ giấy chứng nhận ấy, đi thế nào để có chứng chỉ hành nghề?",
          "keys": [
            "chứng chỉ hành nghề"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not this: you passed, so you are done.",
          "sub": "Không phải: đạt là xong."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But this: two more stages are waiting.",
          "sub": "Mà là: còn hai chặng nữa.",
          "keys": [
            "hai chặng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Article eleven says a lawyer needs the practising certificate, and must join a bar association.",
          "sub": "Điều 11 Luật Luật sư: phải có chứng chỉ hành nghề và gia nhập một Đoàn luật sư.",
          "keys": [
            "gia nhập một Đoàn luật sư"
          ]
        }
      ],
      "ref": "p2"
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
            "id": "b-road",
            "t": "text",
            "text": "Lộ trình gọn:",
            "x": 2028,
            "y": 380,
            "size": 52,
            "at": "l1:route",
            "hl": [
              {
                "text": "Lộ trình",
                "at": "l1:route"
              }
            ]
          },
          {
            "id": "b-r0",
            "t": "box",
            "x": 2028,
            "y": 470,
            "w": 300,
            "h": 100,
            "at": "l1:paper",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-r1",
            "t": "box",
            "x": 2358,
            "y": 470,
            "w": 300,
            "h": 100,
            "at": "l1:file",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-r2",
            "t": "box",
            "x": 2688,
            "y": 470,
            "w": 300,
            "h": 100,
            "at": "l1:province",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-r3",
            "t": "box",
            "x": 3018,
            "y": 470,
            "w": 300,
            "h": 100,
            "at": "l2:join",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-r4",
            "t": "box",
            "x": 3348,
            "y": 470,
            "w": 300,
            "h": 100,
            "at": "l2:card",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-rt0",
            "t": "text",
            "text": "Giấy CN",
            "x": 2048,
            "y": 492,
            "size": 40,
            "at": "l1:paper+200"
          },
          {
            "id": "b-rt1",
            "t": "text",
            "text": "Hồ sơ ở Sở",
            "x": 2378,
            "y": 492,
            "size": 40,
            "at": "l1:file+200"
          },
          {
            "id": "b-rt2",
            "t": "text",
            "text": "Chủ tịch tỉnh",
            "x": 2708,
            "y": 492,
            "size": 40,
            "at": "l1:province+200"
          },
          {
            "id": "b-rt3",
            "t": "text",
            "text": "Gia nhập Đoàn",
            "x": 3038,
            "y": 492,
            "size": 40,
            "at": "l2:join+200"
          },
          {
            "id": "b-rt4",
            "t": "text",
            "text": "Thẻ luật sư",
            "x": 3368,
            "y": 492,
            "size": 40,
            "at": "l2:card+200"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Theo Thảo: từng chặng một",
            "x": 2028,
            "y": 640,
            "size": 50,
            "at": "l3:follow",
            "color": "accent",
            "hl": [
              {
                "text": "từng chặng",
                "at": "l3:stage"
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
          "say": "The route: your test paper, a file at the justice department, a decision in the province.",
          "sub": "Lộ trình: giấy chứng nhận, hồ sơ ở Sở Tư pháp, quyết định ở cấp tỉnh.",
          "keys": [
            "Lộ trình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then you join a bar association and get your lawyer card.",
          "sub": "Rồi gia nhập Đoàn luật sư và nhận Thẻ luật sư."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Thảo, stage by stage.",
          "sub": "Mình theo Thảo, từng chặng một.",
          "keys": [
            "từng chặng một"
          ]
        }
      ],
      "ref": "intro,outro"
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
              "c-50",
              "c-who"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l5",
            "fit": "C",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Chiều thứ Sáu · Giấy gì?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First"
          },
          {
            "id": "c-ic",
            "t": "illus",
            "name": "page-facing-up",
            "x": 5316,
            "y": 170,
            "size": 220,
            "at": "l2:Article"
          },
          {
            "id": "c-15",
            "t": "text",
            "text": "Điều 15: đạt → Giấy chứng nhận",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l2:Article",
            "hl": [
              {
                "text": "Giấy chứng nhận",
                "at": "l2:certificate"
              }
            ]
          },
          {
            "id": "c-50",
            "t": "text",
            "text": "Mỗi bài ≥ 50 điểm là đạt",
            "x": 3996,
            "y": 270,
            "size": 56,
            "at": "l3:fifty",
            "color": "accent",
            "hl": [
              {
                "text": "≥ 50 điểm",
                "at": "l3:fifty"
              }
            ]
          },
          {
            "id": "c-who",
            "t": "text",
            "text": "Cấp: Chủ tịch Hội đồng kiểm tra",
            "x": 3996,
            "y": 370,
            "size": 44,
            "at": "l4:chair"
          },
          {
            "id": "c-who2",
            "t": "text",
            "text": "(Liên đoàn Luật sư lập)",
            "x": 4036,
            "y": 435,
            "size": 38,
            "at": "l4:federation",
            "color": "muted"
          },
          {
            "id": "c-not",
            "t": "text",
            "text": "Chưa phải giấy phép hành nghề!",
            "x": 3996,
            "y": 540,
            "size": 56,
            "at": "l5:licence",
            "color": "coral",
            "hl": [
              {
                "text": "Chưa phải",
                "at": "l5:not"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Luật Luật sư (VBHN 03), Điều 11, 15 · Thông tư 10/2021/TT-BTP",
            "x": 3996,
            "y": 720,
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
          "say": "First stop: what exactly is in Thảo's hand?",
          "sub": "Chặng một: trong tay Thảo chính xác là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article fifteen: whoever passes the bar federation's test gets a test certificate.",
          "sub": "Điều 15: ai đạt kỳ kiểm tra do Liên đoàn tổ chức thì được cấp Giấy chứng nhận.",
          "keys": [
            "Giấy chứng nhận"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Circular ten adds the detail: each paper needs fifty points or more.",
          "sub": "Thông tư 10 nói rõ hơn: mỗi bài đạt từ năm mươi điểm trở lên là đạt.",
          "keys": [
            "năm mươi điểm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And the chair of the test council, set up by the federation, signs it.",
          "sub": "Và Chủ tịch Hội đồng kiểm tra, hội đồng do Liên đoàn lập, là người cấp."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A medal, yes. A licence to practise, not yet.",
          "sub": "Là huy chương, đúng. Là giấy phép hành nghề thì chưa.",
          "keys": [
            "chưa"
          ]
        }
      ],
      "ref": "p1,p2"
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
            "text": "② Tối thứ Sáu · Bốn giấy tờ",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "file-folder",
                "stethoscope"
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
            "at": "l1:evening",
            "caption": "Tối thứ Sáu · ở nhà",
            "icon": "file-folder"
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 175,
            "w": 46,
            "h": 46,
            "at": "l3:request",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 157,
            "size": 58,
            "at": "l3:request+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Văn bản đề nghị cấp",
            "x": 6032,
            "y": 165,
            "size": 40,
            "at": "l3:request+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 265,
            "w": 46,
            "h": 46,
            "at": "l3:health",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 247,
            "size": 58,
            "at": "l3:health+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Giấy chứng nhận sức khoẻ",
            "x": 6032,
            "y": 255,
            "size": 40,
            "at": "l3:health+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 355,
            "w": 46,
            "h": 46,
            "at": "l4:degree",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 337,
            "size": 58,
            "at": "l4:degree+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Bản sao bằng luật",
            "x": 6032,
            "y": 345,
            "size": 40,
            "at": "l4:degree+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 445,
            "w": 46,
            "h": 46,
            "at": "l4:test",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 427,
            "size": 58,
            "at": "l4:test+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Bản sao Giấy CN kiểm tra",
            "x": 6032,
            "y": 435,
            "size": 40,
            "at": "l4:test+200"
          },
          {
            "id": "d-e",
            "t": "text",
            "text": "Bản điện tử cũng được",
            "x": 5964,
            "y": 545,
            "size": 46,
            "at": "l5:electronic",
            "color": "accent",
            "hl": [
              {
                "text": "điện tử",
                "at": "l5:electronic"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: NĐ 121/2025, Phụ lục III",
            "x": 6804,
            "y": 735,
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
          "say": "Second stop: Friday evening, sofa, folder.",
          "sub": "Chặng hai: tối thứ Sáu, sofa, tập hồ sơ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Write it down first! What goes in this file?",
          "sub": "Ghi lại đã! Hồ sơ này gồm những gì?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Under the new procedure, just one set: a request letter and a health certificate.",
          "sub": "Theo thủ tục mới, chỉ một bộ: văn bản đề nghị, giấy chứng nhận sức khoẻ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Plus a copy of your law degree, bachelor or master, and a copy of the test certificate.",
          "sub": "Thêm bản sao bằng cử nhân hoặc thạc sĩ luật, và bản sao Giấy chứng nhận kiểm tra."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Electronic versions or electronic copies are accepted too.",
          "sub": "Bản điện tử, bản sao điện tử cũng được.",
          "keys": [
            "bản sao điện tử"
          ]
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
            "fit": "D",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "d-lltp",
            "t": "text",
            "text": "Phiếu lý lịch tư pháp",
            "x": 5964,
            "y": 615,
            "size": 46,
            "at": "l1:judicial",
            "color": "muted"
          },
          {
            "id": "d-lltpx",
            "t": "strike",
            "over": "d-lltp",
            "at": "l2:no longer"
          },
          {
            "id": "d-sel",
            "t": "text",
            "text": "→ Sở tự lấy thông tin",
            "x": 5964,
            "y": 685,
            "size": 44,
            "at": "l2:office",
            "color": "accent",
            "hl": [
              {
                "text": "Sở tự lấy",
                "at": "l2:office"
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
          "say": "Notice what's missing? The old list in Article seventeen had a judicial record form.",
          "sub": "Thấy thiếu gì không? Danh mục cũ ở Điều 17 có phiếu lý lịch tư pháp.",
          "keys": [
            "phiếu lý lịch tư pháp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The new list no longer has it. The record agency sends that information to the office.",
          "sub": "Danh mục mới không còn. Cơ quan lý lịch tư pháp tự cung cấp thông tin cho Sở.",
          "keys": [
            "không còn"
          ]
        }
      ],
      "ref": "p4"
    },
    {
      "id": "s08",
      "module": "BRK-07",
      "data": {
        "question": "Bốn tờ giấy đủ rồi. Nhưng mang đi đâu?",
        "illus": "file-folder"
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
          "say": "Four papers, ready. But where do they go?",
          "sub": "Bốn tờ giấy đủ rồi. Nhưng mang đi đâu?",
          "keys": [
            "mang đi đâu"
          ]
        }
      ],
      "ref": "p5"
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
            "at": "l4",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Sáng thứ Bảy · Nộp ở đâu?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third"
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
                  "id": "thao",
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
            "caption": "Sáng thứ Bảy · quán cà phê",
            "icon": "hot-beverage"
          },
          {
            "id": "e-old",
            "t": "text",
            "text": "Đường cũ (khoản 2 Điều 17):",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l4:old",
            "hl": [
              {
                "text": "Đường cũ",
                "at": "l4:old"
              }
            ]
          },
          {
            "id": "e-o1",
            "t": "text",
            "text": "Đoàn → Sở → Bộ Tư pháp",
            "x": 7932,
            "y": 250,
            "size": 52,
            "at": "l4:board",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Saturday coffee with someone who walked this road.",
          "sub": "Chặng ba: cà phê sáng thứ Bảy với người đã đi con đường này."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Uncle Bình, Thảo's uncle, a lawyer for decades.",
          "sub": "Đây là Bác Bình, bác ruột Thảo, làm luật sư mấy chục năm.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Easy. In my day you gave it to the bar association. They sent it up the line.",
          "sub": "Dễ thôi. Thời bác, nộp cho Đoàn luật sư. Đoàn chuyển lên trên.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Right, for the old wording: bar board, justice department, then the ministry.",
          "sub": "Đúng với lời văn cũ: Ban chủ nhiệm Đoàn, Sở Tư pháp, rồi Bộ Tư pháp.",
          "keys": [
            "lời văn cũ"
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
      "ref": "p5,p6"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "Sáng thứ Bảy · lên kế hoạch",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Thứ Hai mang hồ sơ đến Đoàn luật sư",
          "why": "Từ 01/7/2025, các bài hướng dẫn thủ tục ghi nơi nhận là Sở Tư pháp nơi tập sự.",
          "rule": "Hỏi đúng cửa trước khi xếp hàng"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Great. Monday morning, I'll queue at the bar association office.",
          "sub": "Hay quá. Sáng thứ Hai, con ra văn phòng Đoàn luật sư xếp hàng.",
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
          "say": "Since July twenty twenty-five, guides say: the justice department where you trained receives the file.",
          "sub": "Từ 01/7/2025, các bài hướng dẫn ghi: Sở Tư pháp nơi tập sự nhận hồ sơ.",
          "keys": [
            "Sở Tư pháp nơi tập sự"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Làm lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Then on Monday I'll call the justice department first, and ask how to submit.",
          "sub": "Vậy thứ Hai con gọi Sở Tư pháp trước, hỏi cách nộp.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. Check the right door before you queue.",
          "sub": "Đúng. Hỏi đúng cửa trước khi xếp hàng.",
          "phase": "redo",
          "keys": [
            "Hỏi đúng cửa trước khi xếp hàng"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p6,p7"
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
            "id": "e-new",
            "t": "text",
            "text": "Mới: Sở Tư pháp nơi tập sự",
            "x": 7932,
            "y": 340,
            "size": 52,
            "at": "l1:decree",
            "color": "accent",
            "hl": [
              {
                "text": "nơi tập sự",
                "at": "l1:trained"
              }
            ]
          },
          {
            "id": "e-how",
            "t": "text",
            "text": "trực tiếp · bưu chính · trực tuyến",
            "x": 7932,
            "y": 420,
            "size": 44,
            "at": "l2:person"
          },
          {
            "id": "e-ex",
            "t": "text",
            "text": "Miễn tập sự → Sở nơi thường trú",
            "x": 7932,
            "y": 500,
            "size": 44,
            "at": "l3:exempt",
            "hl": [
              {
                "text": "nơi thường trú",
                "at": "l3:permanently"
              }
            ]
          },
          {
            "id": "e-doan",
            "t": "text",
            "text": "Đoàn luật sư: chặng sau",
            "x": 7932,
            "y": 600,
            "size": 52,
            "at": "l4:later",
            "color": "coral",
            "hl": [
              {
                "text": "chặng sau",
                "at": "l4:later"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: NĐ 121/2025 (theo Tạp chí Luật sư Việt Nam)",
            "x": 8772,
            "y": 735,
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
          "say": "Under Decree one twenty-one: the justice department where you trained.",
          "sub": "Theo Nghị định 121/2025: Sở Tư pháp nơi mình tập sự.",
          "keys": [
            "nơi mình tập sự"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In person, by post, or online on the national portal.",
          "sub": "Trực tiếp, qua bưu chính, hoặc trực tuyến trên Cổng dịch vụ công quốc gia."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Exempt from probation? Then the department where you permanently live.",
          "sub": "Người được miễn tập sự thì nộp ở Sở Tư pháp nơi thường trú.",
          "keys": [
            "nơi thường trú"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The bar association still matters, just later, when you join it with your certificate.",
          "sub": "Đoàn luật sư vẫn quan trọng, nhưng ở chặng sau: gia nhập khi đã có chứng chỉ.",
          "keys": [
            "chặng sau"
          ]
        }
      ],
      "ref": "p5,p6"
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
            "text": "④ Thứ Hai · Ai ký, bao lâu?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "classical-building",
                "receipt"
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
            "at": "l1:submitted",
            "caption": "Thứ Hai tuần sau · đã nộp ở Sở",
            "icon": "classical-building"
          },
          {
            "id": "f-old",
            "t": "text",
            "text": "Bộ trưởng Bộ Tư pháp",
            "x": 60,
            "y": 1260,
            "size": 50,
            "at": "l3:minister",
            "color": "muted"
          },
          {
            "id": "f-oldx",
            "t": "strike",
            "over": "f-old",
            "at": "l3:instead"
          },
          {
            "id": "f-new",
            "t": "text",
            "text": "Từ 01/7/2025: Chủ tịch UBND tỉnh",
            "x": 60,
            "y": 1350,
            "size": 48,
            "at": "l3:chairperson",
            "color": "accent",
            "hl": [
              {
                "text": "Chủ tịch UBND tỉnh",
                "at": "l3:chairperson"
              }
            ]
          },
          {
            "id": "f-chk",
            "t": "text",
            "text": "Thẩm tra: pháp luật, đạo đức",
            "x": 60,
            "y": 1440,
            "size": 40,
            "at": "l4:character"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Điều 9 Nghị định 121/2025/NĐ-CP",
            "x": 60,
            "y": 1825,
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
          "say": "Fourth stop: next Monday. File submitted, receipt in hand.",
          "sub": "Chặng bốn: thứ Hai tuần sau. Hồ sơ đã nộp, tay cầm biên nhận."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "So who signs my certificate now? And how long do I wait?",
          "sub": "Giờ ai ký chứng chỉ cho em? Chờ bao lâu?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Under Article nine of the decree, the provincial chairperson decides now, instead of the minister of justice.",
          "sub": "Theo Điều 9 Nghị định, nay Chủ tịch Uỷ ban nhân dân cấp tỉnh quyết định, thay Bộ trưởng Bộ Tư pháp.",
          "keys": [
            "Chủ tịch Uỷ ban nhân dân cấp tỉnh"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The chair also leads the check on law-abiding conduct and moral character.",
          "sub": "Chủ tịch tỉnh còn chủ trì thẩm tra việc tuân thủ pháp luật và phẩm chất đạo đức."
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
            "fit": "F",
            "move": "cut"
          },
          {
            "at": "l1",
            "fit": [
              "f-b1",
              "f-b2",
              "f-b3"
            ],
            "zoom": 1.1,
            "ms": 600
          },
          {
            "at": "l3:end",
            "fit": "F",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "f-b1",
            "t": "box",
            "x": 60,
            "y": 1520,
            "w": 760,
            "h": 80,
            "at": "l1:five",
            "stroke": 4
          },
          {
            "id": "f-b1t",
            "t": "text",
            "text": "Sở: 5 ngày làm việc",
            "x": 85,
            "y": 1533,
            "size": 42,
            "at": "l1:five+200",
            "hl": [
              {
                "text": "5 ngày làm việc",
                "at": "l1:working"
              }
            ]
          },
          {
            "id": "f-b2",
            "t": "box",
            "x": 60,
            "y": 1615,
            "w": 760,
            "h": 80,
            "at": "l2:ten",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "f-b2t",
            "t": "text",
            "text": "Chủ tịch tỉnh: 10 ngày",
            "x": 85,
            "y": 1628,
            "size": 42,
            "at": "l2:ten+200",
            "hl": [
              {
                "text": "10 ngày",
                "at": "l2:ten"
              }
            ]
          },
          {
            "id": "f-b3",
            "t": "text",
            "text": "LLTP: 3 ngày, không tính",
            "x": 60,
            "y": 1715,
            "size": 40,
            "at": "l3:three",
            "color": "muted",
            "hl": [
              {
                "text": "không tính",
                "at": "l3:counted"
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
          "say": "The clock: the justice department checks a complete, valid file in five working days.",
          "sub": "Đồng hồ: Sở Tư pháp kiểm tra hồ sơ đủ, hợp lệ trong năm ngày làm việc.",
          "keys": [
            "năm ngày làm việc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then the provincial chair decides within ten working days.",
          "sub": "Rồi Chủ tịch tỉnh quyết định trong mười ngày làm việc.",
          "keys": [
            "mười ngày làm việc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The three working days for judicial record information are not counted.",
          "sub": "Ba ngày làm việc để cơ quan lý lịch tư pháp cung cấp thông tin thì không tính vào thời hạn.",
          "keys": [
            "không tính"
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
            "text": "⑤ Giả sử… bị từ chối",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:imagine",
            "hl": [
              {
                "text": "bị từ chối",
                "at": "l1:refusal"
              }
            ]
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
                  "id": "thao",
                  "side": "center",
                  "face": "sad",
                  "pose": "cross"
                }
              ],
              "props": [
                "envelope",
                "anger-symbol"
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
            "at": "l1:letter",
            "caption": "Giả sử · một tối nhận thư",
            "icon": "envelope"
          },
          {
            "id": "g-w",
            "t": "text",
            "text": "Văn bản, nêu rõ lý do",
            "x": 2028,
            "y": 1260,
            "size": 42,
            "at": "l3:writing",
            "hl": [
              {
                "text": "nêu rõ lý do",
                "at": "l3:reasons"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Quyền khiếu nại, khiếu kiện",
            "x": 2028,
            "y": 1340,
            "size": 40,
            "at": "l4:complain"
          },
          {
            "id": "g-r",
            "t": "text",
            "text": "Lý do: công chức, viên chức…",
            "x": 2028,
            "y": 1420,
            "size": 40,
            "at": "l5:civil",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop, just imagine: one evening, a refusal letter arrives.",
          "sub": "Chặng năm, thử tưởng tượng: một tối, thư từ chối gửi đến.",
          "keys": [
            "thư từ chối"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "This reason is wrong! I'll calm down for a few months, then deal with it.",
          "sub": "Lý do này không đúng! Để vài tháng cho nguôi rồi tính.",
          "face": "stern"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "First, the law and the new procedure both require a refusal in writing, with clear reasons.",
          "sub": "Trước hết, cả Luật lẫn thủ tục mới đều buộc từ chối bằng văn bản, nêu rõ lý do.",
          "keys": [
            "nêu rõ lý do"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Article seventeen gives you the right to complain or to sue.",
          "sub": "Khoản 3 Điều 17 cho người bị từ chối quyền khiếu nại, khiếu kiện.",
          "keys": [
            "khiếu nại, khiếu kiện"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Common reasons, clause four: civil servant, public employee, not living in Vietnam.",
          "sub": "Lý do thường ở khoản 4: đang là công chức, viên chức, không thường trú tại Việt Nam."
        }
      ],
      "ref": "p10,p11"
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
            "id": "g-90",
            "t": "text",
            "text": "90 ngày",
            "x": 2028,
            "y": 1495,
            "size": 96,
            "at": "l1:ninety",
            "color": "coral",
            "hl": [
              {
                "text": "90 ngày",
                "at": "l1:ninety"
              }
            ]
          },
          {
            "id": "g-90s",
            "t": "text",
            "text": "thời hiệu khiếu nại",
            "x": 2418,
            "y": 1530,
            "size": 40,
            "at": "l1:Complaints",
            "color": "muted"
          },
          {
            "id": "g-do",
            "t": "text",
            "text": "→ đọc lý do, gom giấy, ghi hạn",
            "x": 2028,
            "y": 1635,
            "size": 44,
            "at": "l2:read",
            "hl": [
              {
                "text": "ghi hạn",
                "at": "l2:deadline"
              }
            ]
          },
          {
            "id": "g-key",
            "t": "text",
            "text": "Có lý do, có đồng hồ",
            "x": 2028,
            "y": 1725,
            "size": 52,
            "at": "l3:clock",
            "color": "accent",
            "hl": [
              {
                "text": "có đồng hồ",
                "at": "l3:clock"
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
          "say": "Waiting months is risky: the Complaints Law of twenty eleven allows ninety days from receipt.",
          "sub": "Mà chờ vài tháng thì nguy. Luật Khiếu nại 2011 đặt thời hiệu chín mươi ngày kể từ khi nhận được.",
          "keys": [
            "chín mươi ngày"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Read the reasons now, gather papers, mark the deadline.",
          "sub": "Đọc kỹ lý do ngay, gom giấy tờ phản bác, ghi mốc hạn.",
          "keys": [
            "ghi mốc hạn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A refusal letter has a reason, and a ticking clock.",
          "sub": "Văn bản từ chối có lý do, và có đồng hồ đếm ngược.",
          "keys": [
            "đồng hồ đếm ngược"
          ]
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s16",
      "module": "BRK-03",
      "data": {
        "value": 5,
        "suffix": " năm",
        "label": "hiệu lực của Giấy chứng nhận kiểm tra",
        "illus": "hourglass-not-done"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One number for your calendar.",
          "sub": "Một con số cho cuốn lịch."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Five years: the life of your test certificate.",
          "sub": "Năm năm: tuổi thọ của giấy chứng nhận.",
          "keys": [
            "Năm năm"
          ]
        }
      ],
      "ref": "p13"
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
            "text": "⑥ Bốn năm sau · Dũng",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sixth"
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
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold",
                  "face": "surprised"
                }
              ],
              "props": [
                "file-cabinet",
                "tear-off-calendar"
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
            "caption": "Bốn năm sau · phòng pháp chế",
            "icon": "file-cabinet"
          },
          {
            "id": "h-plan",
            "t": "text",
            "text": "“Khi nào cần ra toà mới làm”",
            "x": 3996,
            "y": 1260,
            "size": 44,
            "at": "l2:court",
            "color": "muted"
          },
          {
            "id": "h-5",
            "t": "text",
            "text": "Hiệu lực: 05 năm từ ngày cấp",
            "x": 3996,
            "y": 1350,
            "size": 48,
            "at": "l4:five",
            "color": "accent",
            "hl": [
              {
                "text": "05 năm",
                "at": "l4:five years"
              }
            ]
          },
          {
            "id": "h-re",
            "t": "text",
            "text": "Quá hạn chưa nộp → kiểm tra lại",
            "x": 3996,
            "y": 1440,
            "size": 46,
            "at": "l5:again",
            "color": "coral",
            "hl": [
              {
                "text": "kiểm tra lại",
                "at": "l5:again"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: khoản 4 Điều 15 Thông tư 10/2021/TT-BTP",
            "x": 3996,
            "y": 1825,
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
          "say": "Sixth stop: four years later, another desk.",
          "sub": "Chặng sáu: bốn năm sau, một bàn làm việc khác."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, Thảo's classmate. Same test, then an in-house job. Court? Someday.",
          "sub": "Đây là Dũng, bạn cùng khoá Thảo. Đạt cùng đợt, rồi làm pháp chế. Ra toà? Để sau.",
          "keys": [
            "Để sau"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Where's that certificate? Wait. The date! Only a few months left?",
          "sub": "Giấy chứng nhận đâu rồi? Khoan. Ngày cấp! Chỉ còn vài tháng?",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Circular ten: the test certificate is valid five years from the issue date.",
          "sub": "Thông tư 10: Giấy chứng nhận kiểm tra có hiệu lực năm năm kể từ ngày cấp.",
          "keys": [
            "năm năm kể từ ngày cấp"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Miss it without applying, and you sit the test again.",
          "sub": "Quá hạn mà chưa đề nghị cấp chứng chỉ thì phải kiểm tra lại.",
          "keys": [
            "kiểm tra lại"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "p13,p14"
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
            "id": "h-key",
            "t": "text",
            "text": "Giấy có hạn → kế hoạch có hạn",
            "x": 3996,
            "y": 1560,
            "size": 46,
            "at": "l1:deadline",
            "color": "accent",
            "hl": [
              {
                "text": "kế hoạch có hạn",
                "at": "l1:deadline"
              }
            ]
          },
          {
            "id": "h-do",
            "t": "text",
            "text": "Ghi ngày hết hạn lên lịch ngay",
            "x": 3996,
            "y": 1650,
            "size": 46,
            "at": "l2:today",
            "hl": [
              {
                "text": "ngay",
                "at": "l2:today"
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
          "say": "The paper has a time limit, so your career plan needs a deadline too.",
          "sub": "Giấy chứng nhận có hạn, nên kế hoạch nghề cũng cần có hạn.",
          "keys": [
            "cũng cần có hạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Dũng's lesson for us: write the expiry date down today, not when you need it.",
          "sub": "Bài học từ Dũng: ghi ngày hết hạn ngay hôm nay, đừng đợi lúc cần.",
          "keys": [
            "ngay hôm nay"
          ]
        }
      ],
      "ref": "p14,p15"
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
            "text": "⑦ Lộ trình 5 bước của Thảo",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Seventh"
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
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "spiral-calendar",
                "clipboard"
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
            "at": "l1:plan",
            "caption": "Lộ trình riêng · một tờ giấy",
            "icon": "spiral-calendar"
          },
          {
            "id": "i-b0",
            "t": "badge",
            "n": 1,
            "x": 5994,
            "y": 1290,
            "at": "l2:date"
          },
          {
            "id": "i-s0",
            "t": "text",
            "text": "Ghi ngày hết hạn 5 năm",
            "x": 6044,
            "y": 1265,
            "size": 36,
            "at": "l2:date+200",
            "color": "coral"
          },
          {
            "id": "i-b1",
            "t": "badge",
            "n": 2,
            "x": 5994,
            "y": 1385,
            "at": "l3:ask"
          },
          {
            "id": "i-s1",
            "t": "text",
            "text": "Hỏi Sở: cách nộp, loại giấy khám",
            "x": 6044,
            "y": 1360,
            "size": 36,
            "at": "l3:ask+200"
          },
          {
            "id": "i-b2",
            "t": "badge",
            "n": 3,
            "x": 5994,
            "y": 1480,
            "at": "l4:four"
          },
          {
            "id": "i-s2",
            "t": "text",
            "text": "Gom 4 giấy, nộp một bộ",
            "x": 6044,
            "y": 1455,
            "size": 36,
            "at": "l4:four+200"
          },
          {
            "id": "i-b3",
            "t": "badge",
            "n": 4,
            "x": 5994,
            "y": 1575,
            "at": "l5:track"
          },
          {
            "id": "i-s3",
            "t": "text",
            "text": "Theo dõi 5 + 10 ngày làm việc",
            "x": 6044,
            "y": 1550,
            "size": 36,
            "at": "l5:track+200"
          },
          {
            "id": "i-b4",
            "t": "badge",
            "n": 5,
            "x": 5994,
            "y": 1670,
            "at": "l6:certificate"
          },
          {
            "id": "i-s4",
            "t": "text",
            "text": "Có chứng chỉ → chọn Đoàn",
            "x": 6044,
            "y": 1645,
            "size": 36,
            "at": "l6:certificate+200"
          },
          {
            "id": "i-key",
            "t": "text",
            "text": "Mỗi giấy một ngày dự kiến",
            "x": 6804,
            "y": 1790,
            "size": 40,
            "at": "l7:date",
            "color": "accent",
            "hl": [
              {
                "text": "một ngày",
                "at": "l7:expected"
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
          "say": "Seventh stop: back to Thảo. She turns all this into a plan on one page.",
          "sub": "Chặng bảy: về lại Thảo. Cô gói tất cả vào một lộ trình trên một tờ giấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "One: write down the issue date, and the five year expiry date.",
          "sub": "Một: ghi ngày cấp giấy chứng nhận và ngày hết hạn năm năm.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Two: ask the justice department where I trained how to submit, and which health paper it accepts.",
          "sub": "Hai: hỏi Sở Tư pháp nơi tập sự cách nộp và loại giấy khám được nhận."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Three: gather the four papers, one set.",
          "sub": "Ba: gom bốn giấy tờ, nộp một bộ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Four: track five working days at the department, ten with the provincial chair.",
          "sub": "Bốn: theo dõi mốc năm ngày làm việc ở Sở, mười ngày ở Chủ tịch tỉnh."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Five: with the certificate in hand, choose a bar association to join.",
          "sub": "Năm: có chứng chỉ rồi thì chọn Đoàn luật sư để gia nhập."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Each stage, one paper. Each paper, one expected date.",
          "sub": "Mỗi chặng một tờ giấy, mỗi tờ giấy một ngày dự kiến.",
          "keys": [
            "một ngày dự kiến"
          ]
        }
      ],
      "ref": "p16,p17"
    },
    {
      "id": "s20",
      "module": "BRK-08",
      "data": {
        "title": "Chặng cuối: Đoàn và Thẻ",
        "points": [
          {
            "label": "Chứng chỉ",
            "sub": "Chủ tịch tỉnh",
            "illus": "scroll"
          },
          {
            "label": "Hồ sơ Đoàn",
            "sub": "đề nghị + bản sao",
            "illus": "file-folder"
          },
          {
            "label": "7 ngày",
            "sub": "Ban chủ nhiệm Đoàn",
            "illus": "balance-scale"
          },
          {
            "label": "Thẻ luật sư",
            "sub": "Liên đoàn Luật sư",
            "illus": "identification-card"
          }
        ],
        "current": 3
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The last leg: join a bar association.",
          "sub": "Chặng cuối: gia nhập Đoàn luật sư.",
          "keys": [
            "Chặng cuối"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Seven working days, then the federation issues your lawyer card.",
          "sub": "Bảy ngày làm việc, rồi Liên đoàn cấp Thẻ luật sư.",
          "keys": [
            "Thẻ luật sư"
          ]
        }
      ],
      "ref": "p18"
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
            "at": "l2",
            "fit": [
              "i-6m"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l2:end",
            "fit": "I",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "i-20",
            "t": "text",
            "text": "Điều 20: đề nghị + bản sao",
            "x": 6044,
            "y": 1730,
            "size": 40,
            "at": "l1:Article",
            "hl": [
              {
                "text": "Điều 20",
                "at": "l1:Article"
              }
            ]
          },
          {
            "id": "i-6m",
            "t": "text",
            "text": "Quá 6 tháng → kèm LLTP",
            "x": 6044,
            "y": 1795,
            "size": 40,
            "at": "l2:six",
            "color": "coral",
            "hl": [
              {
                "text": "Quá 6 tháng",
                "at": "l2:six months"
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
          "say": "Under Article twenty, you send a request and a copy of your certificate. The board decides, the federation issues the card.",
          "sub": "Theo Điều 20, nộp giấy đề nghị và bản sao chứng chỉ. Ban chủ nhiệm Đoàn quyết định, Liên đoàn cấp Thẻ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One catch: apply more than six months after the certificate, and add a judicial record form.",
          "sub": "Lưu ý: nộp quá sáu tháng kể từ ngày cấp chứng chỉ thì kèm phiếu lý lịch tư pháp.",
          "keys": [
            "quá sáu tháng"
          ]
        }
      ],
      "ref": "p18"
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
            "text": "Chiều thứ Sáu · tuần sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "face": "happy",
                  "pose": "hold"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "spiral-calendar",
                "receipt"
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
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Friday",
            "caption": "Chiều thứ Sáu · cùng văn phòng",
            "icon": "receipt"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1265,
            "w": 46,
            "h": 46,
            "at": "l2:expiry",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1247,
            "size": 58,
            "at": "l2:expiry+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Ngày hết hạn đã ghi lịch",
            "x": 8000,
            "y": 1255,
            "size": 38,
            "at": "l2:expiry+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1345,
            "w": 46,
            "h": 46,
            "at": "l2:called",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1327,
            "size": 58,
            "at": "l2:called+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Đã hỏi Sở nơi tập sự",
            "x": 8000,
            "y": 1335,
            "size": 38,
            "at": "l2:called+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1425,
            "w": 46,
            "h": 46,
            "at": "l2:four",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1407,
            "size": 58,
            "at": "l2:four+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Đủ 4 giấy tờ",
            "x": 8000,
            "y": 1415,
            "size": 38,
            "at": "l2:four+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1505,
            "w": 46,
            "h": 46,
            "at": "l2:Deadlines",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1487,
            "size": 58,
            "at": "l2:Deadlines+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Đã ghi mốc 5 + 10 ngày",
            "x": 8000,
            "y": 1495,
            "size": 38,
            "at": "l2:Deadlines+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1585,
            "w": 46,
            "h": 46,
            "at": "l3:which",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1567,
            "size": 58,
            "at": "l3:which+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Đã nghĩ: gia nhập Đoàn nào",
            "x": 8000,
            "y": 1575,
            "size": 38,
            "at": "l3:which+200"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Hỏi người già… rồi hỏi Sở”",
            "x": 7932,
            "y": 1690,
            "size": 50,
            "at": "l4:elders",
            "color": "accent",
            "hl": [
              {
                "text": "rồi hỏi Sở",
                "at": "l4:department"
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
          "say": "Friday afternoon, one week later. Same office, same Thảo.",
          "sub": "Chiều thứ Sáu, một tuần sau. Vẫn văn phòng ấy, vẫn Thảo ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Expiry date noted. Office called. Four papers in. Deadlines tracked.",
          "sub": "Ngày hết hạn đã ghi. Đã gọi Sở. Bốn giấy đã nộp. Mốc đã theo dõi.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "And which bar will you join? Roads have changed since my day.",
          "sub": "Thế định gia nhập Đoàn nào? Đường sá đổi nhiều so với thời bác rồi.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "On the road, ask the elders. Then ask the justice department too.",
          "sub": "“Đi đường hỏi người già”, rồi hỏi thêm… Sở Tư pháp.",
          "keys": [
            "Sở Tư pháp"
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
      "ref": "p19"
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
            "at": "l1:justice",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l2:working",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:five",
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
            "x": 8652,
            "y": 360,
            "at": "l1:justice"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 780,
            "y": 1350,
            "at": "l2:working"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4716,
            "y": 1350,
            "at": "l3:five"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Kiến thức nghề, không phải tư vấn vụ việc cụ thể; nhân vật là minh hoạ. Luật Luật sư đang sửa đổi.",
            "x": 7932,
            "y": 1825,
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
          "say": "So: four papers, one set, at the justice department where you trained.",
          "sub": "Tóm lại: bốn giấy, một bộ, nộp ở Sở Tư pháp nơi tập sự.",
          "keys": [
            "Sở Tư pháp nơi tập sự"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Five plus ten working days. Refused? Written reasons, and a clock.",
          "sub": "Năm cộng mười ngày làm việc. Bị từ chối? Có lý do bằng văn bản, và có đồng hồ.",
          "keys": [
            "năm cộng mười ngày làm việc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Your test certificate lives five years. And the law is being amended, so recheck.",
          "sub": "Giấy chứng nhận sống năm năm. Luật Luật sư đang sửa đổi, nhớ kiểm lại.",
          "keys": [
            "năm năm"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s24",
      "module": "QUIZ-01",
      "data": {
        "q": "Under the new procedure, where does a person who passed the test submit?",
        "options": [
          "At the provincial justice department where the person did the probation",
          "At any district office chosen by the applicant, by phone call",
          "At the national bar federation office in the capital, in person only"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "classical-building",
        "why": "Theo thủ tục từ 01/7/2025, người đạt kiểm tra nộp tại Sở Tư pháp nơi tập sự."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Under the new procedure, where does a person who passed the test submit?",
          "sub": "Theo thủ tục mới, người đạt kiểm tra nộp hồ sơ ở đâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "At the justice department of the province where you did your probation.",
          "sub": "Tại Sở Tư pháp nơi mình tập sự."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Check the right door before you queue.",
          "sub": "Hỏi đúng cửa trước khi xếp hàng."
        }
      ],
      "ref": "questions[9]"
    },
    {
      "id": "s25",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi ghi ngày hết hạn giấy chứng nhận lên lịch"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, write your certificate's expiry date on your calendar.",
          "sub": "Hôm nay, ghi ngày hết hạn giấy chứng nhận lên lịch."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then try the forty questions below.",
          "sub": "Rồi thử bốn mươi câu hỏi bên dưới."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-21: đoán sai “nộp ở Đoàn hay ở Sở?”. Đét trái + bảng 10 ô theo lộ trình của Thảo (chiều thứ Sáu nhận giấy → tối thứ Sáu 4 giấy → sáng thứ Bảy cà phê Bác Bình + “Khoan đã!” nộp nhầm cửa → thứ Hai đã nộp: ai ký, bao lâu → giả sử bị từ chối → bốn năm sau ngăn kéo của Dũng → lộ trình 5 bước → chặng Đoàn/Thẻ → chiều thứ Sáu tuần sau, khép vòng). Nhân vật theo w145/_series/bar-practising-certificate.md: Thảo (p11, p16), Bác Bình (đường cũ p5), Dũng (p14). Số/điều chỉ từ bài: Điều 11, 15, 17, 20 Luật Luật sư; ≥ 50 điểm, 05 năm (TT 10/2021); Điều 9 NĐ 121/2025, 01/7/2025, 5 + 10 ngày làm việc, 3 ngày LLTP; 90 ngày (Luật Khiếu nại 2011); 6 tháng, 7 ngày làm việc. BRK: s08 BRK-07 (rehook), s16 BRK-03 (5 năm), s20 BRK-08 (chặng Đoàn/Thẻ); DLG s10. Câu đố questions[9]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s22"
  }
};
