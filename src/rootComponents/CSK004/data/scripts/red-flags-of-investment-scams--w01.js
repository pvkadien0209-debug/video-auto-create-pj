// red-flags-of-investment-scams--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "red-flags-of-investment-scams--w01",
  "hook": "HOOK-19",
  "unit": {
    "audience": "investment-scam-targets",
    "slug": "red-flags-of-investment-scams",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Dấu hiệu nào cho thấy một lời mời đầu tư là lừa đảo?",
    "series": "Không mất tiền tích luỹ vì lừa đảo đầu tư — cho người 40+ nhận ra mời chào đa cấp, tiền ảo, sàn giả"
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
      "id": "f00",
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
            "id": "a-t",
            "t": "text",
            "text": "Ting… ting…",
            "x": 60,
            "y": 80,
            "size": 130,
            "at": "l1:Ting",
            "color": "accent",
            "hl": [
              {
                "text": "Ting",
                "at": "l1:Ting"
              }
            ]
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "“Chúc mừng chị vào nhóm!”",
            "x": 70,
            "y": 290,
            "size": 52,
            "at": "l2:Welcome"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "Bảng lãi đẹp · con dấu đỏ",
            "x": 70,
            "y": 380,
            "size": 52,
            "at": "l3:table",
            "color": "coral"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "Có ai tự nhận lừa đảo?",
            "x": 70,
            "y": 480,
            "size": 56,
            "at": "l4:calls itself",
            "color": "accent",
            "hl": [
              {
                "text": "lừa đảo",
                "at": "l4:scam"
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
          "say": "Ting. Ting. Ting.",
          "sub": "Ting. Ting. Ting."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Welcome to the group: Investing with Experts!",
          "sub": "“Chúc mừng chị đã vào nhóm Đầu tư cùng chuyên gia!”",
          "keys": [
            "Đầu tư cùng chuyên gia"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A friendly voice. A pretty profit table. Papers with a red stamp.",
          "sub": "Giọng thân thiện. Bảng lãi đẹp. Giấy tờ có con dấu đỏ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A scam offer almost never calls itself a scam.",
          "sub": "Lời mời lừa đảo hiếm khi tự nhận mình là lừa đảo.",
          "keys": [
            "hiếm khi tự nhận"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "ting",
          "offsetMs": 0
        },
        {
          "at": "l1",
          "key": "tin-den",
          "offsetMs": 700
        }
      ],
      "ref": "intro"
    },
    {
      "id": "f01",
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
            "at": "l3",
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
              "set": "shop",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "mobile-phone",
                "chart-increasing"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "at": "l1",
            "caption": "Sáng thứ Hai · tiệm tạp hoá",
            "icon": "convenience-store"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Tham thì thâm”",
            "x": 60,
            "y": 610,
            "size": 64,
            "at": "l3:Greed",
            "color": "accent",
            "hl": [
              {
                "text": "thâm",
                "at": "l3:bruises"
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
          "say": "Remember Chị Hoa, the careful shop owner? Week two. A stranger added her to a chat group.",
          "sub": "Nhớ chị Hoa, chủ tiệm tạp hoá cẩn thận chứ? Tuần thứ hai, một người lạ thêm chị vào nhóm chat.",
          "keys": [
            "Tuần thứ hai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Who added me here? Wow, they all seem to be winning.",
          "sub": "Ai thêm chị vào đây nhỉ? Chà, ai trong này cũng đang thắng.",
          "face": "surprised",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Our elders warn: greed leaves bruises.",
          "sub": "Ông bà dặn: “Tham thì thâm.”",
          "keys": [
            "Tham thì thâm"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "intro"
    },
    {
      "id": "f02",
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
            "text": "Dấu hiệu nào là lừa?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:signs",
            "hl": [
              {
                "text": "lừa",
                "at": "l1:scam"
              }
            ]
          },
          {
            "id": "b-names",
            "t": "text",
            "text": "Nhớ tên từng sàn, dự án?",
            "x": 2028,
            "y": 170,
            "size": 48,
            "at": "l2:memorise",
            "color": "muted"
          },
          {
            "id": "b-namesx",
            "t": "strike",
            "over": "b-names",
            "at": "l2:Just"
          },
          {
            "id": "b-stop",
            "t": "text",
            "text": "Biết lúc nào dừng tay",
            "x": 2028,
            "y": 260,
            "size": 60,
            "at": "l2:stop",
            "color": "accent",
            "hl": [
              {
                "text": "dừng tay",
                "at": "l2:stop"
              }
            ]
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "5 dấu hiệu · 7 ngày",
            "x": 2028,
            "y": 380,
            "size": 52,
            "at": "l3:Five"
          },
          {
            "id": "b-s0",
            "t": "box",
            "x": 2028,
            "y": 600,
            "w": 300,
            "h": 100,
            "at": "l3:Five+300",
            "stroke": 4
          },
          {
            "id": "b-s1",
            "t": "box",
            "x": 2358,
            "y": 600,
            "w": 300,
            "h": 100,
            "at": "l3:Five+600",
            "stroke": 4
          },
          {
            "id": "b-s2",
            "t": "box",
            "x": 2688,
            "y": 600,
            "w": 300,
            "h": 100,
            "at": "l3:Five+900",
            "stroke": 4
          },
          {
            "id": "b-s3",
            "t": "box",
            "x": 3018,
            "y": 600,
            "w": 300,
            "h": 100,
            "at": "l3:Five+1200",
            "stroke": 4
          },
          {
            "id": "b-s4",
            "t": "box",
            "x": 3348,
            "y": 600,
            "w": 300,
            "h": 100,
            "at": "l3:Five+1500",
            "stroke": 4
          },
          {
            "id": "b-st0",
            "t": "text",
            "text": "1. Lãi cao",
            "x": 2053,
            "y": 622,
            "size": 42,
            "at": "l3:Five+420"
          },
          {
            "id": "b-st1",
            "t": "text",
            "text": "2. Hối thúc",
            "x": 2383,
            "y": 622,
            "size": 42,
            "at": "l3:Five+720"
          },
          {
            "id": "b-st2",
            "t": "text",
            "text": "3. Rủ người",
            "x": 2713,
            "y": 622,
            "size": 42,
            "at": "l3:Five+1020"
          },
          {
            "id": "b-st3",
            "t": "text",
            "text": "4. Giấy tờ",
            "x": 3043,
            "y": 622,
            "size": 42,
            "at": "l3:Five+1320"
          },
          {
            "id": "b-st4",
            "t": "text",
            "text": "5. Phí mới rút",
            "x": 3373,
            "y": 622,
            "size": 42,
            "at": "l3:Five+1620"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Rút từ cảnh báo của Bộ Công an, Công an Hà Nội, Báo Điện tử Chính phủ, Thư viện Pháp luật",
            "x": 2028,
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
          "say": "So which signs show an investment offer is a scam?",
          "sub": "Vậy dấu hiệu nào cho thấy một lời mời đầu tư là lừa đảo?",
          "keys": [
            "lừa đảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "You don't need to memorise every platform's name. Just know when to stop.",
          "sub": "Không cần nhớ tên từng sàn, từng dự án. Chỉ cần biết lúc nào nên dừng tay.",
          "keys": [
            "lúc nào nên dừng tay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Five common signs from police warnings. One a day, all week.",
          "sub": "Năm dấu hiệu chung, rút từ cảnh báo của công an. Mỗi ngày một dấu hiệu.",
          "keys": [
            "Năm dấu hiệu chung"
          ]
        }
      ],
      "ref": "intro,outro"
    },
    {
      "id": "f03",
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
            "text": "① Thứ Hai · Lãi cao",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Monday"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "shop",
              "label": "Nhóm “Đầu tư cùng chuyên gia”",
              "actor": {
                "id": "hoa",
                "side": "left"
              },
              "contact": {
                "name": "Đầu tư cùng chuyên gia",
                "illus": "chart-increasing"
              },
              "messages": [
                {
                  "from": "them",
                  "text": "Cam kết có lãi, lợi nhuận cao, kiếm tiền dễ dàng!",
                  "at": "l2"
                },
                {
                  "from": "them",
                  "text": "Chiến lược chắc thắng, an toàn tuyệt đối.",
                  "at": "l3"
                }
              ]
            },
            "at": "l1:expert",
            "caption": "Thứ Hai · “chuyên gia” nhắn",
            "icon": "chart-increasing"
          },
          {
            "id": "c-fx",
            "t": "text",
            "text": "Sàn ngoại hối: “thắng” gấp 2–3 vốn",
            "x": 3996,
            "y": 170,
            "size": 42,
            "at": "l4:foreign",
            "color": "coral"
          },
          {
            "id": "c-cp",
            "t": "text",
            "text": "Cổ phiếu “ưu đãi” rẻ bất thường",
            "x": 3996,
            "y": 250,
            "size": 42,
            "at": "l5:shares",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sign one, Monday. The group's expert posts his first promise.",
          "sub": "Dấu hiệu một, thứ Hai. “Chuyên gia” của nhóm đăng lời hứa đầu tiên.",
          "keys": [
            "Dấu hiệu một"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Guaranteed profit, high returns, easy money!",
          "sub": "“Cam kết có lãi, lợi nhuận cao, kiếm tiền dễ dàng!”"
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "A sure-win strategy. Absolutely safe.",
          "sub": "“Chiến lược chắc thắng, an toàn tuyệt đối.”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "On fake foreign exchange platforms, accounts win early, two to three times the capital, they say.",
          "sub": "Ở sàn ngoại hối lừa đảo, tài khoản được cho “thắng” giai đoạn đầu, nghe nói gấp 2–3 lần vốn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Fake stock apps offer preferential shares far below the market price.",
          "sub": "Ứng dụng chứng khoán giả mời mua “cổ phiếu ưu đãi” rẻ hơn nhiều so với thị trường."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "tin-den",
          "offsetMs": 0
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "f04",
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
            "id": "c-pz",
            "t": "text",
            "text": "Ponzi 2019: 6–15%/tháng ≈ 180%/năm",
            "x": 3996,
            "y": 340,
            "size": 42,
            "at": "l1:fifteen",
            "color": "coral",
            "hl": [
              {
                "text": "180%/năm",
                "at": "l1:eighty"
              }
            ]
          },
          {
            "id": "c-24",
            "t": "text",
            "text": "Vàng ảo 2025: tới 24%/ngày",
            "x": 3996,
            "y": 420,
            "size": 46,
            "at": "l2:twenty-four",
            "color": "coral"
          },
          {
            "id": "c-risk",
            "t": "text",
            "text": "Lãi cao + không rủi ro = đáng ngờ",
            "x": 3996,
            "y": 510,
            "size": 44,
            "at": "l3:risk",
            "color": "accent",
            "hl": [
              {
                "text": "đáng ngờ",
                "at": "l3:suspicious"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: cẩm nang Bộ Công an (BĐT Chính phủ 15/7/2024) · Thư viện Pháp luật 2024 · Bộ Công an 2019 · BĐT Chính phủ 2025",
            "x": 3996,
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
          "say": "A Ponzi scheme police warned about in twenty nineteen offered six to fifteen percent a month, about one hundred eighty a year.",
          "sub": "Mô hình Ponzi Bộ Công an cảnh báo năm 2019 hứa 6–15% mỗi tháng, khoảng 180% một năm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A fake gold platform in twenty twenty-five: up to twenty-four percent a day.",
          "sub": "Một sàn vàng ảo năm 2025: tới 24% mỗi ngày."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Real investing always carries risk. High returns with no risk is suspicious.",
          "sub": "Đầu tư thật luôn có rủi ro. Lãi cao mà không rủi ro là điều đáng ngờ.",
          "keys": [
            "đáng ngờ"
          ]
        }
      ],
      "ref": "p2"
    },
    {
      "id": "f05",
      "module": "BRK-04",
      "data": {
        "title": "Hiểu lầm thường gặp",
        "labels": [
          "Hiểu lầm",
          "Thật ra"
        ],
        "wrong": "Lãi “vừa phải” vài phần trăm mỗi tháng thì yên tâm",
        "right": "Gói thấp nhất của Ponzi chỉ 6% mỗi tháng",
        "wrongIllus": "relieved-face",
        "rightIllus": "warning"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Modest returns are safe?",
          "sub": "Lãi “vừa phải” thì yên tâm?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "That Ponzi's lowest package: just six percent a month.",
          "sub": "Gói thấp nhất của Ponzi ấy: chỉ 6% mỗi tháng.",
          "keys": [
            "chỉ 6% mỗi tháng"
          ]
        }
      ],
      "ref": "p3"
    },
    {
      "id": "f06",
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
            "id": "c-q1",
            "t": "text",
            "text": "Lãi lấy từ đâu?",
            "x": 3996,
            "y": 665,
            "size": 52,
            "at": "l2:come from",
            "color": "accent",
            "hl": [
              {
                "text": "từ đâu",
                "at": "l2:come from"
              }
            ]
          },
          {
            "id": "c-q2",
            "t": "text",
            "text": "Ai cấp phép?",
            "x": 4436,
            "y": 665,
            "size": 52,
            "at": "l2:licensed",
            "color": "accent",
            "hl": [
              {
                "text": "cấp phép",
                "at": "l2:licensed"
              }
            ]
          },
          {
            "id": "c-x",
            "t": "text",
            "text": "Đừng chỉ hỏi “lãi bao nhiêu”",
            "x": 3996,
            "y": 595,
            "size": 44,
            "at": "l1:how much",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So the rate alone is not the test. Don't just ask how much.",
          "sub": "Vậy mức lãi không phải phép thử duy nhất. Đừng chỉ hỏi “lãi bao nhiêu”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Then I'll ask: where does the profit come from, and who licensed you?",
          "sub": "Vậy chị hỏi: tiền lãi lấy từ đâu, và ai cấp phép cho các em?",
          "face": "stern",
          "pose": "phone"
        }
      ],
      "ref": "p3,p4"
    },
    {
      "id": "f07",
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
            "text": "② Thứ Ba · Hạn chót",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Tuesday"
          },
          {
            "id": "d-m",
            "t": "text",
            "text": "“Suất ưu đãi chỉ đến tối nay”",
            "x": 5964,
            "y": 170,
            "size": 48,
            "at": "l2:tonight",
            "color": "coral",
            "hl": [
              {
                "text": "tối nay",
                "at": "l2:tonight"
              }
            ]
          },
          {
            "id": "d-m2",
            "t": "text",
            "text": "“Chuyển ngay, chậm là mất”",
            "x": 5964,
            "y": 255,
            "size": 48,
            "at": "l2:lose"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sign two, Tuesday. The expert doesn't answer her questions. He sets a deadline.",
          "sub": "Dấu hiệu hai, thứ Ba. “Chuyên gia” không trả lời câu hỏi của chị, mà đặt hạn chót.",
          "keys": [
            "Dấu hiệu hai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The special slot lasts only until tonight. Transfer now, or lose it.",
          "sub": "“Suất ưu đãi chỉ còn đến tối nay, chuyển ngay để giữ chỗ, chậm là mất.”"
        }
      ],
      "ref": "p5,p6"
    },
    {
      "id": "f08",
      "module": "DLG-01",
      "data": {
        "set": "shop",
        "label": "Thứ Ba · 20:30",
        "actors": [
          {
            "id": "hoa",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Chuyển gấp để giữ suất",
          "why": "Hạn chót gấp để bạn không kịp hỏi ai. Mất vì kiểm tra một ngày thì chẳng phải cơ hội cần.",
          "rule": "Càng gấp, càng nên chậm lại"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "Tonight only? Then I'd better send it now, before I lose my slot.",
          "sub": "Chỉ đến tối nay à? Thôi chuyển luôn kẻo mất suất.",
          "pose": "phone",
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
          "say": "Read it again with clear eyes. Who benefits from your hurry?",
          "sub": "Đọc lại bằng con mắt tỉnh táo. Ai được lợi khi chị vội?",
          "keys": [
            "con mắt tỉnh táo"
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
          "who": "hoa",
          "say": "They don't want me to have time to ask anyone.",
          "sub": "Họ không muốn mình có thời gian hỏi ai.",
          "phase": "redo",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "If one day of checking loses it, it's not a chance I need.",
          "sub": "Kiểm tra thêm một ngày mà mất, thì đó không phải cơ hội mình cần.",
          "phase": "redo",
          "face": "stern",
          "keys": [
            "không phải cơ hội mình cần"
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
      "id": "f09",
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
            "id": "d-hn",
            "t": "text",
            "text": "2024: 20% số dư, 5 tiếng",
            "x": 5964,
            "y": 350,
            "size": 44,
            "at": "l1:twenty",
            "color": "coral",
            "hl": [
              {
                "text": "5 tiếng",
                "at": "l1:five hours"
              }
            ]
          },
          {
            "id": "d-thr",
            "t": "text",
            "text": "Doạ: không chuyển thêm là mất",
            "x": 5964,
            "y": 430,
            "size": 44,
            "at": "l2:threaten"
          },
          {
            "id": "d-slow",
            "t": "text",
            "text": "Càng gấp → càng chậm",
            "x": 5964,
            "y": 530,
            "size": 64,
            "at": "l3:slow down",
            "color": "accent",
            "hl": [
              {
                "text": "càng chậm",
                "at": "l3:slow down"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Công an Hà Nội (Cổng TTĐT Chính phủ – Thăng Long, 12/12/2024) · Bộ Công an (BĐT Chính phủ 04/5/2024)",
            "x": 5964,
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
          "say": "Hanoi police: in twenty twenty-four, one victim had to pay twenty percent of the balance within five hours.",
          "sub": "Công an Hà Nội: năm 2024, một nạn nhân muốn rút lãi bị đòi nộp 20% số dư trong 5 tiếng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In chat group scams, crooks threaten that the money already paid will be lost.",
          "sub": "Trong nhóm chat chứng khoán, kẻ gian doạ sẽ mất số tiền đã nộp nếu không chuyển thêm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A deadline is there so you can't ask anyone. The more urgent, the more you slow down.",
          "sub": "Hạn chót gấp là để bạn không kịp hỏi ai. Càng gấp càng nên chậm lại.",
          "keys": [
            "Càng gấp càng nên chậm lại"
          ]
        }
      ],
      "ref": "p5,p7"
    },
    {
      "id": "f10",
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
            "text": "③ Thứ Tư · Rủ người",
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
            "y": 150,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "pose": "phone",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "hot-beverage",
                "handshake"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
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
            "at": "l1:Bình",
            "caption": "Thứ Tư · quán nước đầu ngõ",
            "icon": "handshake"
          },
          {
            "id": "e-club",
            "t": "text",
            "text": "“Câu lạc bộ đầu tư”",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l1:club",
            "color": "coral"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Góp một lần",
            "x": 7932,
            "y": 255,
            "size": 46,
            "at": "l2:once"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Rủ ai → thêm phần trăm",
            "x": 7932,
            "y": 325,
            "size": 46,
            "at": "l2:percent"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Không bán gì cả",
            "x": 7932,
            "y": 395,
            "size": 46,
            "at": "l2:sell",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sign three, Wednesday. Bác Bình, the neighbour, has been invited to an investment club.",
          "sub": "Dấu hiệu ba, thứ Tư. Bác Bình hàng xóm được mời vào một “câu lạc bộ đầu tư”.",
          "keys": [
            "Dấu hiệu ba"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Pay in once, and earn a percent for everyone I bring. No need to sell anything.",
          "sub": "Góp tiền một lần, rủ được ai thì bác hưởng thêm phần trăm. Không cần bán gì.",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Take it slow, though. I've been burned before.",
          "sub": "Nhưng từ từ, mình xem lại đã. Bác từng bị một lần rồi.",
          "face": "thinking"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p9"
    },
    {
      "id": "f11",
      "module": "BRK-07",
      "data": {
        "question": "Lời mời của bác Bình có dấu hiệu nào?",
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
          "say": "Which sign does Bác Bình's invitation show?",
          "sub": "Lời mời của bác Bình có dấu hiệu nào?"
        }
      ],
      "ref": "p9"
    },
    {
      "id": "f12",
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
            "id": "e-ans",
            "t": "text",
            "text": "Thưởng theo rủ người, không theo hàng",
            "x": 7932,
            "y": 480,
            "size": 40,
            "at": "l1:recruiting",
            "color": "accent",
            "hl": [
              {
                "text": "rủ người",
                "at": "l1:recruiting"
              }
            ]
          },
          {
            "id": "e-tier",
            "t": "text",
            "text": "Gói 50.000 USD: 6% · 5% · 3%",
            "x": 7932,
            "y": 560,
            "size": 44,
            "at": "l2:fifty",
            "color": "coral"
          },
          {
            "id": "e-nd",
            "t": "text",
            "text": "NĐ 40/2018: cấm thưởng tuyển người",
            "x": 7932,
            "y": 640,
            "size": 40,
            "at": "l3:decree"
          },
          {
            "id": "e-link",
            "t": "text",
            "text": "= mắt xích",
            "x": 8752,
            "y": 690,
            "size": 48,
            "at": "l4:link",
            "color": "accent",
            "hl": [
              {
                "text": "mắt xích",
                "at": "l4:link"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Bộ Công an (2019) · Thư viện Pháp luật (2023)",
            "x": 7932,
            "y": 735,
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
          "say": "The reward is tied to recruiting people who pay in, not to real goods.",
          "sub": "Tiền thưởng gắn với việc rủ người góp tiền, không gắn với hàng hoá thật.",
          "keys": [
            "không gắn với hàng hoá thật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In that Ponzi, a fifty thousand dollar package paid six percent, five, then three, across three levels.",
          "sub": "Trong mô hình Ponzi ấy, với gói 50.000 USD, người giới thiệu hưởng 6%, 5% rồi 3% qua ba tầng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Decree forty bans multi-level firms from paying for recruiting that isn't tied to selling goods.",
          "sub": "Nghị định 40/2018 cấm doanh nghiệp đa cấp trả thưởng cho việc tuyển người không gắn với bán hàng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Earning mainly by pulling in others? You're being invited to become a link in the chain.",
          "sub": "Kiếm tiền chủ yếu nhờ rủ người khác góp tiền? Bạn đang được mời làm mắt xích.",
          "keys": [
            "làm mắt xích"
          ]
        }
      ],
      "ref": "p8,p9,p10"
    },
    {
      "id": "f13",
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
            "text": "④ Thứ Năm · Giấy tờ",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:group"
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
                  "id": "hoa",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "page-facing-up",
                "bank"
              ],
              "camera": [
                {
                  "at": "l3",
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
            "at": "l2:son",
            "caption": "Thứ Năm · gọi video cho Dũng",
            "icon": "page-facing-up"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Giấy chứng nhận lập quỹ",
            "x": 60,
            "y": 1260,
            "size": 44,
            "at": "l1:certificate"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Giấy phép kinh doanh",
            "x": 60,
            "y": 1330,
            "size": 44,
            "at": "l1:licence"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Thư ngân hàng lưu ký",
            "x": 60,
            "y": 1400,
            "size": 44,
            "at": "l1:custodian"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "Tài khoản tên công ty",
            "x": 60,
            "y": 1470,
            "size": 44,
            "at": "l1:account"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sign four, Thursday. The group sends a fund certificate, a business licence, a custodian bank letter, a company account.",
          "sub": "Dấu hiệu bốn, thứ Năm. Nhóm gửi giấy chứng nhận lập quỹ, giấy phép kinh doanh, thư ngân hàng lưu ký, tài khoản tên công ty.",
          "keys": [
            "Dấu hiệu bốn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Look, son. Stamps, signatures, and I even found the name online!",
          "sub": "Con xem này. Có dấu, có chữ ký, mẹ còn tìm thấy tên trên mạng nữa!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Mum, police say that's exactly how victims get convinced. It can be a shell company.",
          "sub": "Mẹ ơi, công an nói nạn nhân tin chính vì thế đó. Có khi chỉ là công ty “vỏ bọc”.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Crooks work very hard on paperwork. Matching info online makes people trust even more.",
          "sub": "Kẻ gian rất chịu khó làm giấy tờ. Thông tin trùng khớp trên mạng càng làm người ta tin.",
          "keys": [
            "chịu khó làm giấy tờ"
          ]
        }
      ],
      "ref": "p11"
    },
    {
      "id": "f14",
      "module": "BRK-09",
      "data": {
        "kind": "Nguồn",
        "title": "Điều 5 Nghị định 40/2018/NĐ-CP",
        "detail": "Cấm đòi đặt cọc, nộp tiền để ký hợp đồng",
        "illus": "balance-scale",
        "around": [
          "page-facing-up",
          "money-with-wings"
        ],
        "icon": "scale"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Decree forty, article five.",
          "sub": "Điều 5, Nghị định 40/2018."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No deposit or fee to sign, no forced first stock.",
          "sub": "Cấm đòi đặt cọc, nộp tiền để ký, cấm bắt mua hàng ban đầu.",
          "keys": [
            "Cấm đòi đặt cọc"
          ]
        }
      ],
      "ref": "p13"
    },
    {
      "id": "f15",
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
            "id": "f-reg",
            "t": "text",
            "text": "Không đăng ký ở Việt Nam",
            "x": 60,
            "y": 1560,
            "size": 42,
            "at": "l1:registered",
            "color": "coral"
          },
          {
            "id": "f-hq",
            "t": "text",
            "text": "Không xác minh được trụ sở",
            "x": 60,
            "y": 1625,
            "size": 42,
            "at": "l1:office",
            "color": "coral"
          },
          {
            "id": "f-br",
            "t": "text",
            "text": "Nộp qua môi giới, không biên lai",
            "x": 60,
            "y": 1690,
            "size": 42,
            "at": "l2:brokers",
            "color": "coral"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Giấy đẹp ≠ bằng chứng",
            "x": 880,
            "y": 1780,
            "size": 48,
            "at": "l4:proof",
            "color": "accent",
            "hl": [
              {
                "text": "≠ bằng chứng",
                "at": "l4:proof"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Bộ Công an (2019, 2024) · Thư viện Pháp luật",
            "x": 60,
            "y": 1825,
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
          "say": "That twenty nineteen Ponzi wasn't registered in Vietnam. Nobody could verify its name or office.",
          "sub": "Mô hình Ponzi năm 2019 không đăng ký ở Việt Nam, không xác minh được tên, trụ sở công ty."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Money went through brokers, with no papers or receipts.",
          "sub": "Tiền nộp qua người môi giới, không giấy tờ, không biên lai."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And never transfer money to someone who offers to deposit it for you.",
          "sub": "Và đừng chuyển tiền cho người khác để họ nạp hộ.",
          "keys": [
            "nạp hộ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Nice papers are not proof. They must check out at official sources.",
          "sub": "Giấy tờ đẹp chưa phải bằng chứng; phải tra được ở nguồn chính thức.",
          "keys": [
            "nguồn chính thức"
          ]
        }
      ],
      "ref": "p12,p14"
    },
    {
      "id": "f16",
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
            "text": "⑤ Thứ Sáu · Phí mới rút",
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
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
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
                "chart-increasing"
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
            "at": "l1:app",
            "caption": "Tối thứ Sáu · ứng dụng “thử”",
            "icon": "chart-increasing"
          },
          {
            "id": "g-e1",
            "t": "text",
            "text": "Lỗi hệ thống · sai nội dung",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "l3:system"
          },
          {
            "id": "g-e2",
            "t": "text",
            "text": "Sai tài khoản · “thuế nước ngoài”",
            "x": 2028,
            "y": 1335,
            "size": 42,
            "at": "l3:tax"
          },
          {
            "id": "g-e3",
            "t": "text",
            "text": "→ đóng phí, “hoàn lại hết”",
            "x": 2028,
            "y": 1410,
            "size": 46,
            "at": "l4:refund",
            "color": "coral",
            "hl": [
              {
                "text": "hoàn lại hết",
                "at": "l4:refund"
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
          "say": "Sign five, Friday. Chị Hoa peeks at the group's demo app.",
          "sub": "Dấu hiệu năm, thứ Sáu. Chị Hoa ghé xem ứng dụng “thử” của nhóm.",
          "keys": [
            "Dấu hiệu năm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Members' screens all show profits. But one says she can't withdraw.",
          "sub": "Màn hình ai cũng báo lãi. Mà có chị kêu không rút được.",
          "face": "surprised",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The police handbook lists the excuses: system error, wrong details, wrong account, even a foreign tax probe.",
          "sub": "Cẩm nang Bộ Công an kể lý do: lỗi hệ thống, sai nội dung, sai tài khoản, cả “cơ quan thuế nước ngoài điều tra”."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then a fee, with a promise to refund both fee and profit.",
          "sub": "Rồi đòi đóng thêm phí, hứa hoàn lại cả phí lẫn lãi."
        }
      ],
      "ref": "p15"
    },
    {
      "id": "f17",
      "module": "BRK-03",
      "data": {
        "from": 4,
        "value": 20,
        "prefix": "≈ ",
        "suffix": " tỷ",
        "label": "trên màn hình sau 4 ngày, rồi bị đòi nộp 8 tỷ",
        "illus": "mobile-phone"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Twenty twenty-three: over four billion became nearly twenty, in four days.",
          "sub": "2023: hơn 4 tỷ thành gần 20 tỷ trong 4 ngày."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Then: pay eight billion more to withdraw.",
          "sub": "Rồi: nộp thêm 8 tỷ mới cho rút.",
          "keys": [
            "nộp thêm 8 tỷ"
          ]
        }
      ],
      "ref": "p15"
    },
    {
      "id": "f18",
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
            "id": "g-tv",
            "t": "text",
            "text": "Lãi trên màn = tiền trong tivi",
            "x": 2028,
            "y": 1570,
            "size": 48,
            "at": "l1:screen",
            "color": "accent",
            "hl": [
              {
                "text": "tiền trong tivi",
                "at": "l1:television"
              }
            ]
          },
          {
            "id": "g-own",
            "t": "text",
            "text": "Là của bạn khi: về ngân hàng",
            "x": 2028,
            "y": 1660,
            "size": 46,
            "at": "l2:bank",
            "hl": [
              {
                "text": "về ngân hàng",
                "at": "l2:bank"
              }
            ]
          },
          {
            "id": "g-0",
            "t": "text",
            "text": "… không nộp thêm gì",
            "x": 2068,
            "y": 1735,
            "size": 46,
            "at": "l2:paying"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: cẩm nang Bộ Công an (BĐT Chính phủ 15/7/2024) · Báo Điện tử Chính phủ (08/9/2023)",
            "x": 2028,
            "y": 1825,
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
          "say": "Profit on a screen is money on television. Nice to watch, can't spend it.",
          "sub": "Lãi trên màn hình là tiền trong tivi: xem thì sướng, tiêu thì không.",
          "keys": [
            "tiền trong tivi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It's yours only when it reaches your bank account, without paying anything more.",
          "sub": "Nó chỉ là của bạn khi về tài khoản ngân hàng của bạn, mà không phải nộp thêm gì.",
          "keys": [
            "không phải nộp thêm gì"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "How fake platforms let you withdraw a little first? A later lesson.",
          "sub": "Chuyện sàn giả cho rút ít lúc đầu để lấy lòng tin? Để bài sau."
        }
      ],
      "ref": "p16"
    },
    {
      "id": "f19",
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
            "text": "⑥ Thứ Bảy · Bảng kiểm",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Saturday"
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
                  "side": "left",
                  "pose": "hold"
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
                "notebook",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "at": "l1:Thảo",
            "caption": "Thứ Bảy · cuốn sổ của chị Hoa",
            "icon": "notebook"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Saturday. Thảo, the accountant daughter, is home. A new message: a safe fund investment.",
          "sub": "Thứ Bảy. Thảo, cô con gái kế toán, về nhà. Tin mới: “đầu tư quỹ an toàn”.",
          "keys": [
            "đầu tư quỹ an toàn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "This time I copy it into my notebook, and tick it line by line.",
          "sub": "Lần này mẹ chép vào sổ, đánh dấu từng dòng.",
          "face": "happy",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A worked example. Five lines.",
          "sub": "Làm mẫu. Năm dòng."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "p17"
    },
    {
      "id": "f20",
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
            "at": "l5",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1265,
            "w": 44,
            "h": 44,
            "at": "l1",
            "stroke": 5
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Lãi cao, “chắc thắng”",
            "x": 4066,
            "y": 1257,
            "size": 40,
            "at": "l1+200"
          },
          {
            "id": "h-m0",
            "t": "text",
            "text": "✓ có",
            "x": 4526,
            "y": 1257,
            "size": 40,
            "at": "l1+600",
            "color": "coral"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1343,
            "w": 44,
            "h": 44,
            "at": "l2",
            "stroke": 5
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Hối thúc, hạn chót",
            "x": 4066,
            "y": 1335,
            "size": 40,
            "at": "l2+200"
          },
          {
            "id": "h-m1",
            "t": "text",
            "text": "✓ có",
            "x": 4526,
            "y": 1335,
            "size": 40,
            "at": "l2+600",
            "color": "coral"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1421,
            "w": 44,
            "h": 44,
            "at": "l3",
            "stroke": 5
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Thưởng khi rủ người",
            "x": 4066,
            "y": 1413,
            "size": 40,
            "at": "l3+200"
          },
          {
            "id": "h-m2",
            "t": "text",
            "text": "? chưa thấy",
            "x": 4526,
            "y": 1413,
            "size": 40,
            "at": "l3+600",
            "color": "muted"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1499,
            "w": 44,
            "h": 44,
            "at": "l4",
            "stroke": 5
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Giấy tờ chưa tra được",
            "x": 4066,
            "y": 1491,
            "size": 40,
            "at": "l4+200"
          },
          {
            "id": "h-m3",
            "t": "text",
            "text": "✓ có",
            "x": 4526,
            "y": 1491,
            "size": 40,
            "at": "l4+600",
            "color": "coral"
          },
          {
            "id": "h-c4",
            "t": "box",
            "x": 3996,
            "y": 1577,
            "w": 44,
            "h": 44,
            "at": "l4:withdraw",
            "stroke": 5
          },
          {
            "id": "h-l4",
            "t": "text",
            "text": "Nộp phí mới rút",
            "x": 4066,
            "y": 1569,
            "size": 40,
            "at": "l4:withdraw+200"
          },
          {
            "id": "h-m4",
            "t": "text",
            "text": "? chưa biết",
            "x": 4526,
            "y": 1569,
            "size": 40,
            "at": "l4:withdraw+600",
            "color": "muted"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "3 dấu hiệu → không chuyển",
            "x": 3996,
            "y": 1680,
            "size": 52,
            "at": "l5:Three",
            "color": "accent",
            "hl": [
              {
                "text": "không chuyển",
                "at": "l5:transfer"
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
          "say": "High returns, sure to win? Yes.",
          "sub": "Hứa lãi cao, “chắc thắng”? Có."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Rushing, a deadline? Yes: only today.",
          "sub": "Hối thúc, đặt hạn chót? Có: “chỉ còn hôm nay”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Rewards for recruiting? Not seen yet.",
          "sub": "Thưởng khi rủ người? Chưa thấy."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Papers not checkable at official sources? Yes. A fee to withdraw? Unknown.",
          "sub": "Giấy tờ chưa tra được ở nguồn chính thức? Có. Phải nộp phí mới rút? Chưa biết."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "Three signs. No transfer. Done.",
          "sub": "Ba dấu hiệu. Không chuyển tiền. Xong.",
          "face": "stern"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "First time I've seen you win against a sales pitch, Mum.",
          "sub": "Lần đầu con thấy mẹ thắng một màn chào hàng đấy.",
          "face": "happy"
        }
      ],
      "ref": "p17"
    },
    {
      "id": "f21",
      "module": "BRK-06",
      "data": {
        "title": "Năm dấu hiệu, chép vào điện thoại",
        "items": [
          {
            "illus": "money-bag",
            "text": "Lãi chắc thắng"
          },
          {
            "illus": "stopwatch",
            "text": "Hối thúc"
          },
          {
            "illus": "link",
            "text": "Rủ người"
          },
          {
            "illus": "page-facing-up",
            "text": "Giấy tờ"
          },
          {
            "illus": "receipt",
            "text": "Phí mới rút"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Sure-win profit, rushing, recruiting, papers, fees to withdraw.",
          "sub": "Lãi chắc thắng, hối thúc, rủ người, giấy tờ, phí mới rút."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Five lines. Copy them into your phone.",
          "sub": "Năm dòng. Chép vào điện thoại."
        }
      ],
      "ref": "outro"
    },
    {
      "id": "f22",
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
            "at": "l4:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Chủ nhật · Đủ để dừng",
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
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "phone",
                  "enter": "pop",
                  "at": "l3"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "props": [
                "mobile-phone",
                "notebook"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l4:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Sunday",
            "caption": "Chủ nhật · cả nhà chép bảng kiểm",
            "icon": "mobile-phone"
          },
          {
            "id": "i-12",
            "t": "text",
            "text": "1–2 dấu hiệu = dừng",
            "x": 5964,
            "y": 1260,
            "size": 62,
            "at": "l1:One or two",
            "color": "accent",
            "hl": [
              {
                "text": "= dừng",
                "at": "l1:enough"
              }
            ]
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "Chờ đủ 5 mới dừng?",
            "x": 5964,
            "y": 1380,
            "size": 46,
            "at": "l2:all five",
            "color": "muted"
          },
          {
            "id": "i-5x",
            "t": "strike",
            "over": "i-5",
            "at": "l2:fire"
          },
          {
            "id": "i-sm",
            "t": "text",
            "text": "Thấy khói là chạy",
            "x": 5964,
            "y": 1470,
            "size": 52,
            "at": "l2:smoke",
            "hl": [
              {
                "text": "khói",
                "at": "l2:smoke"
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
          "say": "Sunday. One or two signs are enough to stop.",
          "sub": "Chủ nhật. Một hai dấu hiệu là đủ để dừng.",
          "keys": [
            "Một hai dấu hiệu là đủ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Waiting for all five is like waiting for the fire after you smell smoke.",
          "sub": "Chờ đủ cả năm, khác gì ngửi thấy khói còn đợi lửa."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Mum, I put the five-line checklist on your phone's home screen.",
          "sub": "Mẹ ơi, con để bảng kiểm năm dòng ngay màn hình chính điện thoại mẹ rồi.",
          "pose": "phone",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Right, got it! And I'm leaving that group.",
          "sub": "Rồi, vậy nha! Mẹ rời nhóm kia luôn.",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p18"
    },
    {
      "id": "f23",
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
            "text": "Sáng thứ Hai · tuần sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Monday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "shop",
              "label": "Lại một nhóm mới",
              "actor": {
                "id": "hoa",
                "side": "left"
              },
              "contact": {
                "name": "Quỹ an toàn VIP",
                "illus": "gem-stone"
              },
              "messages": [
                {
                  "from": "them",
                  "text": "Chị ơi, lãi chắc thắng, chỉ còn hôm nay!",
                  "at": "l2"
                },
                {
                  "from": "me",
                  "text": "Hai dấu hiệu rồi. Chị dừng ở đây nhé.",
                  "at": "l3"
                }
              ]
            },
            "at": "l1:Monday",
            "caption": "Sáng thứ Hai · ting…",
            "icon": "mobile-phone"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "✓ lãi chắc thắng  ✓ hối thúc",
            "x": 7932,
            "y": 1260,
            "size": 44,
            "at": "l3:Two",
            "color": "coral"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Tham thì thâm”",
            "x": 7932,
            "y": 1370,
            "size": 60,
            "at": "l4:Greed",
            "color": "accent"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "Không tham → chẳng thâm",
            "x": 7932,
            "y": 1460,
            "size": 52,
            "at": "l4:no greed",
            "hl": [
              {
                "text": "chẳng thâm",
                "at": "l4:no bruise"
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
          "say": "Monday again. Ting. A brand new group.",
          "sub": "Lại sáng thứ Hai. Ting. Một nhóm mới toanh."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Sure-win profit, sister. Today only!",
          "sub": "“Chị ơi, lãi chắc thắng, chỉ còn hôm nay!”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Two signs already. I stop here.",
          "sub": "Hai dấu hiệu rồi. Chị dừng ở đây nhé.",
          "face": "stern",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Greed leaves bruises. And no greed, no bruise.",
          "sub": "“Tham thì thâm.” Không tham, chẳng thâm.",
          "keys": [
            "Không tham, chẳng thâm"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "ting",
          "offsetMs": 800
        }
      ],
      "ref": "p18"
    },
    {
      "id": "f24",
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
            "at": "l1",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "I",
            "zoom": 0.8
          },
          {
            "at": "l4:end",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4716,
            "y": 520,
            "at": "l1:returns"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8652,
            "y": 480,
            "at": "l2:recruiting"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2748,
            "y": 1580,
            "at": "l3:fee"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 6684,
            "y": 1270,
            "at": "l4:One or two"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Nhân vật là minh hoạ; bài để tham khảo, quy định có thể thay đổi, kiểm lại với cơ quan/chuyên gia.",
            "x": 7932,
            "y": 1820,
            "size": 28,
            "at": "l4:end",
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
          "say": "Five signs. High returns, sure to win. And a rush.",
          "sub": "Năm dấu hiệu. Lãi cao “chắc thắng”. Hối thúc.",
          "keys": [
            "Lãi cao “chắc thắng”"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Rewards for recruiting. Papers you can't check.",
          "sub": "Thưởng khi rủ người. Giấy tờ không tra được.",
          "keys": [
            "Thưởng khi rủ người"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And profit on a screen that needs a fee to withdraw.",
          "sub": "Và lãi trên màn hình nhưng phải nộp phí mới rút.",
          "keys": [
            "phải nộp phí mới rút"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One or two are enough to stop. Copy the five lines into your phone today.",
          "sub": "Gặp một hai dấu hiệu là đủ để dừng. Hôm nay, chép năm dòng vào điện thoại.",
          "keys": [
            "đủ để dừng"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "f25",
      "module": "QUIZ-01",
      "data": {
        "q": "When does profit shown on a screen become your money, according to the article?",
        "options": [
          "When the chat group congratulates you on a successful trade",
          "When it reaches your bank account without you paying anything more",
          "When the app shows a green number above your original deposit"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "bank",
        "why": "Lãi trên màn hình chỉ là của bạn khi về tài khoản ngân hàng mà không phải nộp thêm gì."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "When does profit shown on a screen become your money, according to the article?",
          "sub": "Theo bài, khi nào tiền lãi trên màn hình mới là tiền của bạn?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Only when it reaches your bank, with nothing more to pay.",
          "sub": "Chỉ khi về tài khoản ngân hàng, không phải nộp thêm gì."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Until then, it's money on television.",
          "sub": "Trước đó, nó chỉ là tiền trong tivi."
        }
      ],
      "ref": "questions[34]"
    },
    {
      "id": "f26",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi đọc tiếp bài đa cấp biến tướng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Next in the series: how do disguised multi-level and Ponzi schemes work?",
          "sub": "Bài tiếp theo: đa cấp biến tướng và “lấy tiền người sau trả người trước” vận hành ra sao?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But first, try the forty questions below.",
          "sub": "Nhưng trước hết, thử bốn mươi câu hỏi bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi investment-scam-targets, bài 1) dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-19: tiếng “ting” nhóm chat vào trước hình (sfx ting + tin-den), quay lại ở cảnh khép vòng f23. Dòng thời gian: TUẦN THỨ HAI của chị Hoa trong nhóm chat “Đầu tư cùng chuyên gia” (T2 lãi cao “chắc thắng” → T3 hạn chót + “Khoan đã!” theo khung Trước–Sau p6 → T4 Bác Bình và “câu lạc bộ đầu tư” → T5 giấy tờ, Dũng → T6 lãi trên màn hình, phí mới rút → T7 cuốn sổ, bảng kiểm năm dòng, Thảo → CN đủ để dừng → thứ Hai sau). Đổi tên: anh Dũng 47 (p9) → Bác Bình; chị Hương 55 (p17) → chị Hoa. Kẻ gian chỉ qua tin nhắn. Không nêu tên sàn/dự án. Số chỉ từ bài: gấp 2–3 lần vốn, 6–15%/tháng ≈ 180%/năm, 24%/ngày, gói thấp nhất 6%, 20% số dư/5 tiếng, gói 50.000 USD 6%/5%/3%, hơn 4 tỷ → gần 20 tỷ trong 4 ngày, đòi 8 tỷ; NĐ 40/2018/NĐ-CP. Ngắt nhịp: BRK-04 (hiểu lầm lãi vừa phải p3), DLG f08 (p6–7), BRK-07 rehook (p9), BRK-09 (Điều 5 NĐ 40/2018, p13), BRK-03 (4 → 20 tỷ, p15), BRK-06 (năm dấu hiệu). Khép vòng: “Tham thì thâm” → không tham, chẳng thâm. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "f00",
    "close": "f23"
  }
};
