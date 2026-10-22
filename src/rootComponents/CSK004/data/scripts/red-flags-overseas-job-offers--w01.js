// red-flags-overseas-job-offers--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "red-flags-overseas-job-offers--w01",
  "hook": "HOOK-22",
  "unit": {
    "audience": "emigrants-avoiding-migration-scams",
    "slug": "red-flags-overseas-job-offers",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Dấu hiệu nào cho thấy một lời mời việc làm ở nước ngoài là lừa đảo?",
    "series": "Không mất tiền vì lừa đảo xuất ngoại — cho người Việt nhận ra dịch vụ lừa đảo việc làm, định cư"
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
      "id": "r00",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": [
              "a-v"
            ],
            "move": "cut",
            "zoom": 1.35
          },
          {
            "at": "l2",
            "fit": "A",
            "ms": 900
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
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "money-with-wings"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "close",
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
            "at": 0,
            "caption": "Sáng thứ Hai · một cuộc gọi",
            "icon": "mobile-phone"
          },
          {
            "id": "a-cut",
            "t": "text",
            "text": "“…hợp đồng thì… em sẽ…”",
            "x": 60,
            "y": 150,
            "size": 56,
            "at": "l2:Cut",
            "color": "muted"
          },
          {
            "id": "a-x",
            "t": "text",
            "text": "✂",
            "x": 700,
            "y": 140,
            "size": 70,
            "at": "l2:Cut",
            "color": "coral"
          },
          {
            "id": "a-end",
            "t": "text",
            "text": "Kết câu = giữ tiền?",
            "x": 60,
            "y": 270,
            "size": 60,
            "at": "l3:decides",
            "color": "accent",
            "hl": [
              {
                "text": "giữ tiền",
                "at": "l3:safe"
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
          "say": "Okay. The deposit to hold my place, and the contract... I'll...",
          "sub": "Vâng. Tiền cọc giữ suất, còn hợp đồng thì... em sẽ...",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Cut! Hold that sentence. We'll come back for it.",
          "sub": "Cắt! Giữ câu đó lại. Lát nữa ta quay lại.",
          "keys": [
            "Giữ câu đó lại"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "How Dũng ends it decides whether his money stays safe.",
          "sub": "Dũng kết câu ấy thế nào sẽ quyết định tiền của anh có an toàn không.",
          "keys": [
            "tiền của anh có an toàn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 0
        }
      ],
      "ref": "p5"
    },
    {
      "id": "r01",
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
            "id": "a-in",
            "t": "text",
            "text": "Bài đăng · người quen · ảnh đẹp",
            "x": 60,
            "y": 400,
            "size": 44,
            "at": "l2:posts"
          },
          {
            "id": "a-pay",
            "t": "text",
            "text": "+ lương ai cũng muốn đi",
            "x": 60,
            "y": 470,
            "size": 44,
            "at": "l3:pay",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Dục tốc bất đạt”",
            "x": 60,
            "y": 580,
            "size": 60,
            "at": "l4:haste",
            "color": "accent",
            "hl": [
              {
                "text": "bất đạt",
                "at": "l4:success"
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
          "say": "Meet Dũng again, the welder who wants to work abroad.",
          "sub": "Lại là Dũng, anh thợ hàn muốn đi làm nước ngoài."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Week two. Offers pour in for the whole family: posts, friends, shiny factory photos.",
          "sub": "Tuần thứ hai. Lời mời đổ về cả nhà: bài đăng, người quen giới thiệu, ảnh nhà máy sạch đẹp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And the pay? The kind that makes everyone want to go.",
          "sub": "Còn lương? Mức làm ai nghe cũng muốn đi.",
          "keys": [
            "ai nghe cũng muốn đi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our elders warned: haste brings no success.",
          "sub": "Ông bà dặn: “Dục tốc bất đạt.”",
          "keys": [
            "Dục tốc bất đạt"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "r02",
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
            "id": "b-face",
            "t": "text",
            "text": "Hiếm khi lộ mặt ngay",
            "x": 2028,
            "y": 160,
            "size": 50,
            "at": "l2:rarely",
            "color": "muted"
          },
          {
            "id": "b-names",
            "t": "text",
            "text": "Nhớ tên từng công ty?",
            "x": 2028,
            "y": 240,
            "size": 46,
            "at": "l3:memorise",
            "color": "muted"
          },
          {
            "id": "b-namesx",
            "t": "strike",
            "over": "b-names",
            "at": "l3:Just"
          },
          {
            "id": "b-stop",
            "t": "text",
            "text": "Biết lúc nào dừng tay",
            "x": 2028,
            "y": 320,
            "size": 60,
            "at": "l3:stop",
            "color": "accent",
            "hl": [
              {
                "text": "dừng tay",
                "at": "l3:stop"
              }
            ]
          },
          {
            "id": "b-s0",
            "t": "box",
            "x": 2028,
            "y": 600,
            "w": 300,
            "h": 100,
            "at": "l4:Five+300",
            "stroke": 4
          },
          {
            "id": "b-s1",
            "t": "box",
            "x": 2358,
            "y": 600,
            "w": 300,
            "h": 100,
            "at": "l4:Five+600",
            "stroke": 4
          },
          {
            "id": "b-s2",
            "t": "box",
            "x": 2688,
            "y": 600,
            "w": 300,
            "h": 100,
            "at": "l4:Five+900",
            "stroke": 4
          },
          {
            "id": "b-s3",
            "t": "box",
            "x": 3018,
            "y": 600,
            "w": 300,
            "h": 100,
            "at": "l4:Five+1200",
            "stroke": 4
          },
          {
            "id": "b-s4",
            "t": "box",
            "x": 3348,
            "y": 600,
            "w": 300,
            "h": 100,
            "at": "l4:Five+1500",
            "stroke": 4
          },
          {
            "id": "b-st0",
            "t": "text",
            "text": "1. Lương",
            "x": 2053,
            "y": 622,
            "size": 42,
            "at": "l4:Five+420"
          },
          {
            "id": "b-st1",
            "t": "text",
            "text": "2. Tiền trước",
            "x": 2383,
            "y": 622,
            "size": 42,
            "at": "l4:Five+720"
          },
          {
            "id": "b-st2",
            "t": "text",
            "text": "3. Hợp đồng",
            "x": 2713,
            "y": 622,
            "size": 42,
            "at": "l4:Five+1020"
          },
          {
            "id": "b-st3",
            "t": "text",
            "text": "4. Giục",
            "x": 3043,
            "y": 622,
            "size": 42,
            "at": "l4:Five+1320"
          },
          {
            "id": "b-st4",
            "t": "text",
            "text": "5. Đường tắt",
            "x": 3373,
            "y": 622,
            "size": 42,
            "at": "l4:Five+1620"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So which signs show an overseas job offer is a scam?",
          "sub": "Vậy dấu hiệu nào cho thấy một lời mời việc ở nước ngoài là lừa đảo?",
          "keys": [
            "lừa đảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Scam offers rarely show their face at once.",
          "sub": "Lời mời lừa đảo hiếm khi lộ mặt ngay."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "You don't need to memorise company names. Just know when to stop.",
          "sub": "Bạn không cần nhớ tên từng công ty, chỉ cần biết lúc nào nên dừng tay.",
          "keys": [
            "lúc nào nên dừng tay"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Five common signs, from police, foreign ministry and legal site warnings.",
          "sub": "Năm dấu hiệu chung, rút từ cảnh báo của công an, Bộ Ngoại giao và các trang pháp luật.",
          "keys": [
            "Năm dấu hiệu chung"
          ]
        }
      ],
      "ref": "intro,outro"
    },
    {
      "id": "r03",
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
            "at": "l2",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 900
          },
          {
            "at": "l4",
            "fit": "B",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "b-full",
            "t": "text",
            "text": "“…chỉ nộp sau khi có văn bản”",
            "x": 2868,
            "y": 170,
            "size": 48,
            "at": "l2:writing",
            "color": "accent",
            "hl": [
              {
                "text": "có văn bản",
                "at": "l2:writing"
              }
            ]
          },
          {
            "id": "b-rec",
            "t": "text",
            "text": "nộp tại văn phòng · có phiếu thu",
            "x": 2868,
            "y": 250,
            "size": 42,
            "at": "l3:receipt"
          },
          {
            "id": "b-two",
            "t": "text",
            "text": "Một câu: mất tiền hay giữ tiền",
            "x": 2868,
            "y": 360,
            "size": 46,
            "at": "l4:loses",
            "color": "coral",
            "hl": [
              {
                "text": "giữ tiền",
                "at": "l4:keeps"
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
          "say": "Now, Dũng's sentence. The safe ending sounds like this.",
          "sub": "Giờ đến câu của Dũng. Kết cho an toàn thì nghe thế này."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "...pay only after you send the contract and fee list in writing, with your full company name.",
          "sub": "...em sẽ chỉ nộp tiền sau khi anh gửi hợp đồng, bảng phí bằng văn bản, kèm tên đầy đủ công ty.",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "I'll check, then pay at your office, with a receipt naming the fee.",
          "sub": "Em tra xong sẽ nộp tại văn phòng, có phiếu thu ghi rõ khoản tiền."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Same man, same call. One ending loses money, the other keeps it.",
          "sub": "Cùng một người, một cuộc gọi. Một cách kết mất tiền, một cách kết giữ tiền.",
          "keys": [
            "giữ tiền"
          ]
        }
      ],
      "ref": "p5"
    },
    {
      "id": "r04",
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
            "at": "l4:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Hai · Lương cao",
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
              "set": "home",
              "label": "Bài đăng trên mạng",
              "actor": {
                "id": "lan",
                "side": "left"
              },
              "contact": {
                "name": "Tuyển đi nước ngoài",
                "illus": "factory"
              },
              "messages": [
                {
                  "from": "them",
                  "text": "Việc nhẹ, lương cao! Hàng chục triệu mỗi tháng.",
                  "at": "l2"
                },
                {
                  "from": "them",
                  "text": "Không cần tay nghề. Bên mình lo chi phí đi lại.",
                  "at": "l3"
                }
              ]
            },
            "at": "l1:Lan",
            "caption": "Tối thứ Hai · Lan lướt mạng",
            "icon": "factory"
          },
          {
            "id": "c-q",
            "t": "text",
            "text": "“Lương ngoài đó vốn cao mà?”",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l4:higher",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sign one, Monday night. Dũng's sister Lan finds a post.",
          "sub": "Dấu hiệu một, tối thứ Hai. Lan, em gái Dũng, thấy một bài đăng.",
          "keys": [
            "Dấu hiệu một"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Easy work, high pay! Tens of millions of dong a month.",
          "sub": "“Việc nhẹ, lương cao! Hàng chục triệu mỗi tháng.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "No skills needed. We cover your travel costs.",
          "sub": "“Không cần tay nghề. Bên mình lo chi phí đi lại.”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Pay is higher abroad anyway. What's strange about that?",
          "sub": "Lương nước ngoài vốn cao hơn mà. Có gì lạ đâu?",
          "face": "happy",
          "pose": "phone"
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
      "id": "r05",
      "module": "BRK-04",
      "data": {
        "title": "Lương cao có gì lạ?",
        "labels": [
          "Hiểu lầm",
          "Thật ra"
        ],
        "wrong": "Lương nước ngoài vốn cao, chẳng có gì lạ",
        "right": "Đáng ngờ là khoảng cách giữa lương và yêu cầu",
        "wrongIllus": "money-bag",
        "rightIllus": "balance-scale"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Pay abroad is higher, so nothing's odd?",
          "sub": "Lương nước ngoài vốn cao, nên chẳng có gì lạ?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The red flag is the gap between pay and requirements.",
          "sub": "Đáng ngờ là khoảng cách giữa lương và yêu cầu."
        }
      ],
      "ref": "p2"
    },
    {
      "id": "r06",
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
            "id": "c-hi",
            "t": "text",
            "text": "Lương, phúc lợi quá cao",
            "x": 3996,
            "y": 260,
            "size": 50,
            "at": "l1:far too"
          },
          {
            "id": "c-cam",
            "t": "text",
            "text": "Campuchia: “việc nhẹ, lương cao”",
            "x": 3996,
            "y": 340,
            "size": 42,
            "at": "l2:Cambodia",
            "color": "coral"
          },
          {
            "id": "c-deg",
            "t": "text",
            "text": "Không bằng cấp, không trình độ",
            "x": 3996,
            "y": 410,
            "size": 42,
            "at": "l3:degree",
            "color": "muted"
          },
          {
            "id": "c-gap",
            "t": "text",
            "text": "So lương ↔ yêu cầu",
            "x": 3996,
            "y": 510,
            "size": 62,
            "at": "l4:compare",
            "color": "accent",
            "hl": [
              {
                "text": "lương ↔ yêu cầu",
                "at": "l4:requirements"
              }
            ]
          },
          {
            "id": "c-most",
            "t": "text",
            "text": "Không cần gì, trả nhiều → soi kỹ",
            "x": 4816,
            "y": 692,
            "size": 40,
            "at": "l4:hardest",
            "hl": [
              {
                "text": "soi kỹ",
                "at": "l4:hardest"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Cổng TTĐT Hà Tĩnh (VOV, 2025) · Công an Hải Phòng 2022",
            "x": 3996,
            "y": 730,
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
          "say": "The Ha Tinh portal flags pay and benefits far too high for the job.",
          "sub": "Cổng thông tin Hà Tĩnh, dẫn VOV, nêu dấu hiệu lương, phúc lợi quá cao so với yêu cầu công việc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Hai Phong police saw it in Cambodia ads: light work, tens of millions, travel paid.",
          "sub": "Công an Hải Phòng kể các tin tuyển sang Campuchia: việc nhẹ, lương hàng chục triệu, lo cả chi phí đi lại."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "LuatVietnam and the foreign ministry agree: no skills, no degree, yet big money promised.",
          "sub": "LuatVietnam và Bộ Ngoại giao cùng cảnh báo: không cần tay nghề, bằng cấp mà vẫn hứa thu nhập lớn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So compare pay with requirements. Asks nothing, pays a lot? Check that one hardest.",
          "sub": "Hãy so lương với yêu cầu. Không cần gì mà trả rất nhiều là việc cần kiểm tra kỹ nhất.",
          "keys": [
            "so lương với yêu cầu"
          ]
        }
      ],
      "ref": "p1,p2,p3"
    },
    {
      "id": "r07",
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
            "text": "② Thứ Ba · Tiền trước",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Tuesday"
          },
          {
            "id": "d-fee",
            "t": "text",
            "text": "✗ phí hồ sơ, tuyển dụng, đào tạo",
            "x": 5964,
            "y": 160,
            "size": 44,
            "at": "l2:file",
            "color": "coral"
          },
          {
            "id": "d-fin",
            "t": "text",
            "text": "✗ nạp để “hoàn tất thủ tục”",
            "x": 5964,
            "y": 230,
            "size": 44,
            "at": "l2:finish",
            "color": "coral"
          },
          {
            "id": "d-can",
            "t": "text",
            "text": "Doanh nghiệp cấp phép: được thu",
            "x": 5964,
            "y": 320,
            "size": 44,
            "at": "l3:licensed"
          },
          {
            "id": "d-cap",
            "t": "text",
            "text": "→ trong mức trần Luật 69",
            "x": 6004,
            "y": 390,
            "size": 44,
            "at": "l4:ceiling",
            "color": "muted"
          },
          {
            "id": "d-ask",
            "t": "text",
            "text": "Khoản gì? Bao nhiêu? Giấy?",
            "x": 5964,
            "y": 480,
            "size": 58,
            "at": "l4:what for",
            "color": "accent",
            "hl": [
              {
                "text": "Giấy?",
                "at": "l4:paper"
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
          "say": "Sign two, Tuesday. Money demanded before anything is clear.",
          "sub": "Dấu hiệu hai, thứ Ba: đòi tiền trước khi mọi thứ rõ ràng.",
          "keys": [
            "Dấu hiệu hai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "File fees, recruitment fees, training fees, or a top-up to finish the paperwork.",
          "sub": "Phí hồ sơ, phí tuyển dụng, phí đào tạo, hay nạp tiền để “hoàn tất thủ tục”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Careful though. For contract work abroad, a licensed firm may charge a service fee.",
          "sub": "Nhưng khoan. Đi làm theo hợp đồng, doanh nghiệp được cấp phép có thể thu tiền dịch vụ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Within Law sixty-nine's ceiling. So ask: what for, how much, and on paper?",
          "sub": "Trong mức trần của Luật 69/2020/QH14. Nên hỏi: thu khoản gì, bao nhiêu, có giấy tờ không?",
          "keys": [
            "khoản gì, bao nhiêu"
          ]
        }
      ],
      "ref": "p4"
    },
    {
      "id": "r08",
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
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "home",
              "label": "Tin nhắn với người tuyển",
              "actor": {
                "id": "dung",
                "side": "left"
              },
              "contact": {
                "name": "Người tuyển",
                "illus": "factory"
              },
              "messages": [
                {
                  "from": "them",
                  "text": "Em chuyển tiền cọc giữ suất trước nhé, hợp đồng ký sau, bên anh lo hết.",
                  "at": "l1"
                },
                {
                  "from": "me",
                  "text": "Anh gửi em tên đầy đủ công ty, hợp đồng và bảng phí bằng văn bản. Em tra xong sẽ nộp tại văn phòng, có phiếu thu.",
                  "at": "l2"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Ba · viết ra cho rõ",
            "icon": "receipt"
          },
          {
            "id": "d-lv",
            "t": "text",
            "text": "Cam kết phí bằng văn bản",
            "x": 5964,
            "y": 590,
            "size": 44,
            "at": "l3:written"
          },
          {
            "id": "d-bn",
            "t": "text",
            "text": "+ biên nhận có chữ ký",
            "x": 5964,
            "y": 655,
            "size": 44,
            "at": "l3:signed",
            "hl": [
              {
                "text": "có chữ ký",
                "at": "l3:signed"
              }
            ]
          },
          {
            "id": "d-0",
            "t": "text",
            "text": "Chưa giấy → chưa một đồng",
            "x": 6784,
            "y": 692,
            "size": 46,
            "at": "l4:Not one",
            "color": "accent",
            "hl": [
              {
                "text": "chưa một đồng",
                "at": "l4:Not one"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: LuatVietnam (13/4/2022)",
            "x": 5964,
            "y": 730,
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
          "say": "Send the deposit first to hold your place. Contract later, we handle everything.",
          "sub": "“Em chuyển tiền cọc giữ suất trước nhé, hợp đồng ký sau, bên anh lo hết.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Company name, contract and fees in writing, please. I'll pay at your office, with a receipt.",
          "sub": "Anh gửi em tên đầy đủ công ty, hợp đồng và bảng phí bằng văn bản. Em tra xong sẽ nộp tại văn phòng, có phiếu thu.",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "LuatVietnam's advice: pay only with a written fee commitment and a signed receipt.",
          "sub": "LuatVietnam khuyên: chỉ nộp tiền khi có cam kết bằng văn bản về mức phí và giấy biên nhận có chữ ký.",
          "keys": [
            "biên nhận có chữ ký"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No paper naming the fee, no signed receipt? Not one dong.",
          "sub": "Không có văn bản ghi rõ khoản phí và biên nhận có chữ ký thì chưa nộp đồng nào.",
          "keys": [
            "chưa nộp đồng nào"
          ]
        }
      ],
      "ref": "p4,p5,p6"
    },
    {
      "id": "r09",
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
            "text": "③ Thứ Tư · Giấy phép",
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
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "dung",
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
            "at": "l1:Wednesday",
            "caption": "Thứ Tư · quán nước cô Hoa",
            "icon": "page-facing-up"
          },
          {
            "id": "e-no",
            "t": "text",
            "text": "✗ hợp đồng ✗ doanh nghiệp cấp phép",
            "x": 7932,
            "y": 170,
            "size": 40,
            "at": "l4:contract",
            "color": "coral"
          },
          {
            "id": "e-lend",
            "t": "text",
            "text": "Mượn, thuê giấy phép · mạo danh",
            "x": 7932,
            "y": 250,
            "size": 42,
            "at": "l5:lent"
          },
          {
            "id": "e-fake",
            "t": "text",
            "text": "Giấy phép giả: khá phổ biến",
            "x": 7932,
            "y": 330,
            "size": 50,
            "at": "l6:fake",
            "color": "coral",
            "hl": [
              {
                "text": "khá phổ biến",
                "at": "l6:common"
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
          "say": "Sign three, Wednesday. No contract, no licensed company.",
          "sub": "Dấu hiệu ba, thứ Tư: không hợp đồng, không doanh nghiệp được cấp phép.",
          "keys": [
            "Dấu hiệu ba"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Bác, they sent a photo of their licence. Looks real!",
          "sub": "Bác ơi, họ gửi ảnh giấy phép đây. Trông thật lắm!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Take it slow, son. A photo is just a photo.",
          "sub": "Từ từ, mình xem lại đã cháu. Ảnh thì chỉ là ảnh.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The foreign ministry's sign: no contract, and no licensed firm involved.",
          "sub": "Bộ Ngoại giao nêu dấu hiệu: không có hợp đồng, không có doanh nghiệp được cấp phép tham gia."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The interior ministry adds: licences lent or rented, and licensed firms impersonated.",
          "sub": "Bộ Nội vụ thêm: có nơi cho mượn, cho thuê giấy phép, hoặc mạo danh doanh nghiệp được cấp phép."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And LuatVietnam notes fake licences are fairly common.",
          "sub": "LuatVietnam lưu ý: giấy phép giả khá phổ biến.",
          "keys": [
            "giấy phép giả khá phổ biến"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 0
        }
      ],
      "ref": "p7"
    },
    {
      "id": "r10",
      "module": "BRK-09",
      "data": {
        "kind": "Luật",
        "title": "Luật 69/2020/QH14",
        "detail": "Hiệu lực 01/01/2022 · cấm lừa, cấm thu phí trái quy định",
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
          "say": "Law sixty-nine, in force since January twenty twenty-two.",
          "sub": "Luật 69/2020/QH14, hiệu lực từ 01/01/2022."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "It bans deceiving workers, and illegal fees.",
          "sub": "Cấm lừa người lao động, cấm thu tiền trái quy định."
        }
      ],
      "ref": "p8"
    },
    {
      "id": "r11",
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
            "id": "e-law",
            "t": "text",
            "text": "Cấm cả: mua bán người, cưỡng bức",
            "x": 7932,
            "y": 430,
            "size": 38,
            "at": "l1:illegal",
            "color": "muted"
          },
          {
            "id": "e-oral",
            "t": "text",
            "text": "Hứa miệng ≠ hợp đồng",
            "x": 7932,
            "y": 520,
            "size": 56,
            "at": "l2:verbal",
            "color": "accent",
            "hl": [
              {
                "text": "≠ hợp đồng",
                "at": "l2:contract"
              }
            ]
          },
          {
            "id": "e-photo",
            "t": "text",
            "text": "Ảnh giấy phép ≠ tra tên",
            "x": 7932,
            "y": 610,
            "size": 56,
            "at": "l3:photo",
            "color": "accent",
            "hl": [
              {
                "text": "tra tên",
                "at": "l3:searching"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Bộ Ngoại giao 2025 · Bộ Nội vụ 2026 · Tạp chí Luật sư VN",
            "x": 7932,
            "y": 730,
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
          "say": "It also bans using recruitment for illegal exits, trafficking or forced labour.",
          "sub": "Luật còn cấm lợi dụng việc đưa người đi làm để tổ chức xuất cảnh trái phép, mua bán người, cưỡng bức lao động."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So: a verbal promise can't replace a contract.",
          "sub": "Vậy: lời hứa miệng không thay được hợp đồng.",
          "keys": [
            "không thay được hợp đồng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And a licence photo can't replace searching the name on the official site.",
          "sub": "Và tờ giấy phép không thay được việc tra tên trên trang chính thức.",
          "keys": [
            "tra tên trên trang chính thức"
          ]
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "r12",
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
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Năm · Bị giục",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:offer"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "“Tuyển gấp · không cần ngoại ngữ”",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l2:Urgent"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "“Bay trong tháng”",
            "x": 60,
            "y": 1335,
            "size": 46,
            "at": "l2:flying"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "“Ứng trước tiền vé”",
            "x": 60,
            "y": 1410,
            "size": 46,
            "at": "l3:advance"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "“Quyết ngay hôm nay!”",
            "x": 60,
            "y": 1485,
            "size": 54,
            "at": "l3:today",
            "color": "coral",
            "hl": [
              {
                "text": "ngay hôm nay",
                "at": "l3:today"
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
          "say": "Sign four, Thursday. A new offer for Dũng.",
          "sub": "Dấu hiệu bốn, thứ Năm. Dũng nhận một lời mời mới.",
          "keys": [
            "Dấu hiệu bốn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Urgent hiring abroad, no foreign language needed, flying this month.",
          "sub": "“Tuyển gấp đi làm ở nước ngoài, không cần ngoại ngữ, bay trong tháng.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "They'll advance his ticket. He just has to decide today.",
          "sub": "Họ sẽ ứng trước tiền vé. Chỉ cần anh quyết ngay hôm nay."
        }
      ],
      "ref": "p11"
    },
    {
      "id": "r13",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Thứ Năm · 20:00",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Quyết ngay trong ngày vì sợ lỡ chuyến",
          "why": "Ít nhất ba dấu hiệu: hứa nhiều mà không cần gì, giục quyết trong ngày, ứng trước tiền vé.",
          "rule": "Càng bị giục, càng nên chậm lại"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Flying this month, ticket paid? Deal, I'll decide right now!",
          "sub": "Bay trong tháng, có người ứng vé? Chốt, em quyết luôn!",
          "face": "happy",
          "pose": "phone",
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
          "say": "Count them. Big promise, no requirements. Decide today. Ticket advanced. That's three signs.",
          "sub": "Đếm đi: không cần gì mà hứa nhiều, giục quyết trong ngày, ứng trước tiền vé. Ba dấu hiệu rồi.",
          "keys": [
            "Ba dấu hiệu"
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
          "who": "dung",
          "say": "I need a few days to check. A real offer can wait.",
          "sub": "Em cần vài ngày để tra cứu. Lời mời thật thì chờ được ạ.",
          "phase": "redo",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. The more you're rushed, the more you slow down.",
          "sub": "Đúng. Càng bị giục, càng nên chậm lại.",
          "phase": "redo",
          "keys": [
            "càng nên chậm lại"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p11,p12"
    },
    {
      "id": "r14",
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
            "id": "f-sign",
            "t": "text",
            "text": "Ép ký trong ngày",
            "x": 900,
            "y": 1260,
            "size": 52,
            "at": "l1:same day",
            "color": "coral"
          },
          {
            "id": "f-luck",
            "t": "text",
            "text": "Rút nhỏ → dụ nạp lớn",
            "x": 900,
            "y": 1340,
            "size": 52,
            "at": "l2:little",
            "color": "coral",
            "hl": [
              {
                "text": "dụ nạp lớn",
                "at": "l2:big"
              }
            ]
          },
          {
            "id": "f-skip",
            "t": "text",
            "text": "Vội + chút “lộc” → bỏ kiểm tra",
            "x": 900,
            "y": 1430,
            "size": 44,
            "at": "l3:luck"
          },
          {
            "id": "f-slow",
            "t": "text",
            "text": "Lời mời thật chờ được",
            "x": 60,
            "y": 1610,
            "size": 64,
            "at": "l4:wait",
            "color": "accent",
            "hl": [
              {
                "text": "chờ được",
                "at": "l4:wait"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Cổng TTĐT Hà Tĩnh (VOV, 2025) · Bộ Công an 2026 · Công an Hải Phòng 2022",
            "x": 60,
            "y": 1820,
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
          "say": "The Ha Tinh portal flags this: pressure to sign the same day.",
          "sub": "Cổng Hà Tĩnh nêu dấu hiệu này: ép ký hợp đồng ngay trong ngày, tạo áp lực quyết nhanh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The police add a trick: let you withdraw a little first, then lure a big deposit.",
          "sub": "Bộ Công an năm 2026 kể thêm: cho rút một khoản nhỏ lúc đầu để tạo lòng tin, rồi dụ nạp số tiền lớn.",
          "keys": [
            "dụ nạp số tiền lớn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hurry plus a little luck, and people skip the checks.",
          "sub": "Vội vàng cộng chút “lộc” ban đầu, người ta bỏ qua bước kiểm tra."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So when rushed, slow down. A real offer can wait for your checks.",
          "sub": "Vậy càng bị giục, càng chậm lại. Lời mời thật vẫn chờ được bạn kiểm tra.",
          "keys": [
            "chờ được bạn kiểm tra"
          ]
        }
      ],
      "ref": "p10,p12"
    },
    {
      "id": "r15",
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
            "text": "⑤ Thứ Sáu · Đường tắt",
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
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "airplane",
                "passport-control"
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
            "at": "l1:Lan",
            "caption": "Thứ Sáu · lời mời “đi du lịch”",
            "icon": "airplane"
          },
          {
            "id": "g-tv",
            "t": "text",
            "text": "Visa du lịch, du học → đi làm",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "l3:tourist",
            "color": "coral"
          },
          {
            "id": "g-dep",
            "t": "text",
            "text": "= bất hợp pháp · trục xuất",
            "x": 2028,
            "y": 1335,
            "size": 50,
            "at": "l3:deportation",
            "hl": [
              {
                "text": "trục xuất",
                "at": "l3:deportation"
              }
            ]
          },
          {
            "id": "g-fake",
            "t": "text",
            "text": "Xúi làm giả bằng cấp",
            "x": 2028,
            "y": 1420,
            "size": 46,
            "at": "l4:fake",
            "color": "muted"
          },
          {
            "id": "g-acc",
            "t": "text",
            "text": "Tài khoản giả: “du lịch không visa”",
            "x": 2028,
            "y": 1495,
            "size": 40,
            "at": "l5:accounts",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sign five, Friday. Lan is offered a shortcut.",
          "sub": "Dấu hiệu năm, thứ Sáu. Lan được mời một “đường tắt”.",
          "keys": [
            "Dấu hiệu năm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Travel visa-free, then just work over there. Easy, right?",
          "sub": "Đi du lịch không cần visa, sang đó làm luôn. Dễ mà, phải không?",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "LuatVietnam calls working on a study or tourist visa an illegal route. It can end in deportation.",
          "sub": "LuatVietnam xếp việc dùng visa du học, du lịch để sang làm việc vào đường “bất hợp pháp”, có thể bị trục xuất.",
          "keys": [
            "trục xuất"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Some are even pushed to fake diplomas or papers.",
          "sub": "Có người còn bị xúi làm giả bằng cấp, giấy tờ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "In twenty twenty-four, fake accounts posted jobs with visa-free trips, then took the money.",
          "sub": "Năm 2024, Cục An toàn thông tin cảnh báo tài khoản giả đăng tin đi lao động kèm du lịch không cần visa, rồi chiếm đoạt tiền."
        }
      ],
      "ref": "p13"
    },
    {
      "id": "r16",
      "module": "BRK-06",
      "data": {
        "title": "Tìm hiểu kỹ trước khi nhận lời",
        "items": [
          {
            "illus": "clipboard",
            "text": "Nội dung công việc"
          },
          {
            "illus": "factory",
            "text": "Nơi làm việc"
          },
          {
            "illus": "man",
            "text": "Người giới thiệu"
          },
          {
            "illus": "shield",
            "text": "Bảo hiểm, quyền lợi"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The job, the workplace, the referrer, insurance and rights.",
          "sub": "Công việc, nơi làm, người giới thiệu, bảo hiểm và quyền lợi."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Check them all before saying yes.",
          "sub": "Tìm hiểu kỹ cả bốn trước khi nhận lời."
        }
      ],
      "ref": "p14"
    },
    {
      "id": "r17",
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
            "zoom": 1.3,
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
            "id": "g-auth",
            "t": "text",
            "text": "Hỏi cơ quan chức năng trước",
            "x": 2028,
            "y": 1590,
            "size": 42,
            "at": "l1:authorities",
            "color": "accent",
            "hl": [
              {
                "text": "cơ quan chức năng",
                "at": "l1:authorities"
              }
            ]
          },
          {
            "id": "g-next",
            "t": "text",
            "text": "“Bao visa” → bài kế tiếp",
            "x": 2848,
            "y": 1782,
            "size": 46,
            "at": "l3:guaranteed"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: LuatVietnam · Cục ATTT 2024 · Bộ Ngoại giao 2025",
            "x": 2028,
            "y": 1820,
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
          "say": "The foreign ministry also says: consult the authorities, to avoid working or living illegally abroad.",
          "sub": "Bộ Ngoại giao khuyên thêm: tham khảo cơ quan chức năng để tránh làm việc, cư trú bất hợp pháp ở nước ngoài.",
          "keys": [
            "tham khảo cơ quan chức năng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "So, no shortcut. I'll ask about a proper route instead.",
          "sub": "Vậy là không có đường tắt. Em sẽ hỏi một con đường đàng hoàng.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And the guaranteed visa promise? That's the next lesson.",
          "sub": "Còn lời hứa “bao visa”? Để bài sau nhé."
        }
      ],
      "ref": "p14"
    },
    {
      "id": "r18",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                }
              ],
              "props": [
                "memo",
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
            "at": "l1:Hoa",
            "caption": "Thứ Bảy · quán nước cô Hoa",
            "icon": "memo"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Saturday. Even Cô Hoa, Dũng's mum, gets an offer, sent by a friend.",
          "sub": "Thứ Bảy. Đến cô Hoa, mẹ Dũng, cũng nhận một lời mời, qua người quen gửi.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "I'll copy it onto paper and tick it, like the kids. Right, here we go!",
          "sub": "Mẹ chép ra giấy rồi đánh dấu, như tụi nhỏ. Rồi, vậy nha!",
          "face": "happy",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A worked example, line by line.",
          "sub": "Làm mẫu, từng dòng một."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1200
        }
      ],
      "ref": "p15"
    },
    {
      "id": "r19",
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
            "y": 1250,
            "w": 44,
            "h": 44,
            "at": "l1",
            "stroke": 5
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Lương cao / yêu cầu",
            "x": 4066,
            "y": 1242,
            "size": 40,
            "at": "l1+200"
          },
          {
            "id": "h-m0",
            "t": "text",
            "text": "✓ có",
            "x": 4576,
            "y": 1242,
            "size": 40,
            "at": "l1+600",
            "color": "coral"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1328,
            "w": 44,
            "h": 44,
            "at": "l2",
            "stroke": 5
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Tiền trước, không biên nhận",
            "x": 4066,
            "y": 1320,
            "size": 40,
            "at": "l2+200"
          },
          {
            "id": "h-m1",
            "t": "text",
            "text": "✓ có",
            "x": 4576,
            "y": 1320,
            "size": 40,
            "at": "l2+600",
            "color": "coral"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1406,
            "w": 44,
            "h": 44,
            "at": "l3",
            "stroke": 5
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Không hợp đồng, công ty",
            "x": 4066,
            "y": 1398,
            "size": 40,
            "at": "l3+200"
          },
          {
            "id": "h-m2",
            "t": "text",
            "text": "? chưa rõ tên",
            "x": 4576,
            "y": 1398,
            "size": 40,
            "at": "l3+600",
            "color": "muted"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1484,
            "w": 44,
            "h": 44,
            "at": "l4",
            "stroke": 5
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Hối thúc",
            "x": 4066,
            "y": 1476,
            "size": 40,
            "at": "l4+200"
          },
          {
            "id": "h-m3",
            "t": "text",
            "text": "✓ có",
            "x": 4576,
            "y": 1476,
            "size": 40,
            "at": "l4+600",
            "color": "coral"
          },
          {
            "id": "h-c4",
            "t": "box",
            "x": 3996,
            "y": 1562,
            "w": 44,
            "h": 44,
            "at": "l4:tourist",
            "stroke": 5
          },
          {
            "id": "h-l4",
            "t": "text",
            "text": "Visa du lịch",
            "x": 4066,
            "y": 1554,
            "size": 40,
            "at": "l4:tourist+200"
          },
          {
            "id": "h-m4",
            "t": "text",
            "text": "? chưa rõ",
            "x": 4576,
            "y": 1554,
            "size": 40,
            "at": "l4:tourist+600",
            "color": "muted"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "3 dấu hiệu → không chuyển",
            "x": 3996,
            "y": 1670,
            "size": 52,
            "at": "l5:Three",
            "color": "accent",
            "hl": [
              {
                "text": "không chuyển",
                "at": "l5:No transfer"
              }
            ]
          },
          {
            "id": "h-name",
            "t": "text",
            "text": "→ xin tên công ty để tra",
            "x": 4816,
            "y": 1782,
            "size": 46,
            "at": "l5:name"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Pay too high for what it asks? Yes: no skills needed.",
          "sub": "Lương cao bất thường so với yêu cầu? Có: “không cần tay nghề”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Money first, no receipt? Yes: transfer a deposit to hold a place.",
          "sub": "Đòi tiền trước, không biên nhận? Có: “chuyển khoản cọc giữ suất”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No contract, unclear company? No company name in sight.",
          "sub": "Không hợp đồng, không rõ công ty? Chưa thấy tên công ty."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rushing? Yes: expires this weekend. A tourist visa? Not clear yet.",
          "sub": "Hối thúc? Có: “hết hạn cuối tuần”. Đi bằng visa du lịch? Chưa rõ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "Three signs. No transfer. First, send me the company's name.",
          "sub": "Ba dấu hiệu. Không chuyển tiền. Cho cô xin tên công ty để tra đã.",
          "face": "stern"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Cô Hoa, three ticks, zero dong. Faster than the kids.",
          "sub": "Cô Hoa: ba dấu tích, không một đồng. Nhanh hơn cả tụi nhỏ.",
          "keys": [
            "không một đồng"
          ]
        }
      ],
      "ref": "p15"
    },
    {
      "id": "r20",
      "module": "BRK-07",
      "data": {
        "question": "Phải thấy đủ năm dấu hiệu mới dừng?",
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
          "say": "Must you see all five signs before you stop?",
          "sub": "Phải thấy đủ cả năm dấu hiệu mới dừng?"
        }
      ],
      "ref": "p16"
    },
    {
      "id": "r21",
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
                  "id": "lan",
                  "side": "left",
                  "pose": "phone",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "props": [
                "mobile-phone",
                "memo"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "dung",
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
            "icon": "memo"
          },
          {
            "id": "i-12",
            "t": "text",
            "text": "1–2 dấu hiệu = dừng",
            "x": 5964,
            "y": 1260,
            "size": 64,
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
            "text": "Chờ đủ 5 đèn đỏ mới phanh?",
            "x": 5964,
            "y": 1380,
            "size": 44,
            "at": "l2:five",
            "color": "muted"
          },
          {
            "id": "i-5x",
            "t": "strike",
            "over": "i-5",
            "at": "l2:brake"
          },
          {
            "id": "i-ph",
            "t": "text",
            "text": "Bảng kiểm 5 dòng → điện thoại",
            "x": 5964,
            "y": 1480,
            "size": 44,
            "at": "l3:checklist"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven, Sunday. No. One or two signs are enough to stop.",
          "sub": "Chặng bảy, Chủ nhật. Không cần. Một hai dấu hiệu là đủ để dừng.",
          "keys": [
            "Một hai dấu hiệu là đủ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Waiting for all five is like waiting for five red lights before you brake.",
          "sub": "Chờ đủ năm dấu hiệu, khác gì chờ đủ năm đèn đỏ mới chịu phanh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Then let's all copy the five-line checklist into our phones.",
          "sub": "Vậy cả nhà chép bảng kiểm năm dòng vào điện thoại đi.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Done. And next time, I'll end my sentence the right way.",
          "sub": "Xong. Lần sau, anh sẽ kết câu cho đúng."
        }
      ],
      "ref": "p16,outro"
    },
    {
      "id": "r22",
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
            "text": "Sáng thứ Hai · tuần sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Monday"
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
                  "shot": "close",
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
            "at": "l1:Monday",
            "caption": "Sáng thứ Hai · lại một cuộc gọi",
            "icon": "mobile-phone"
          },
          {
            "id": "j-s",
            "t": "text",
            "text": "“…bằng văn bản trước, rồi em tra”",
            "x": 7932,
            "y": 1260,
            "size": 44,
            "at": "l2:writing",
            "color": "accent",
            "hl": [
              {
                "text": "bằng văn bản trước",
                "at": "l2:writing"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Dục tốc bất đạt”",
            "x": 7932,
            "y": 1390,
            "size": 60,
            "at": "l3:Haste",
            "color": "accent"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "chậm lại → giữ tiền",
            "x": 7932,
            "y": 1480,
            "size": 50,
            "at": "l3:keeps",
            "hl": [
              {
                "text": "giữ tiền",
                "at": "l3:keeps"
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
          "say": "Monday again. Same phone, a new recruiter, the same deposit request.",
          "sub": "Lại sáng thứ Hai. Vẫn chiếc điện thoại ấy, người tuyển mới, vẫn lời đòi cọc ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Contract and fees in writing first, with your full company name. Then I'll check.",
          "sub": "Hợp đồng và bảng phí gửi em bằng văn bản trước, kèm tên đầy đủ công ty. Rồi em tra.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Haste brings no success. And slowing down, this time, keeps the money.",
          "sub": "“Dục tốc bất đạt.” Còn chậm lại, lần này, giữ được tiền.",
          "keys": [
            "giữ được tiền"
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
      "ref": "p5"
    },
    {
      "id": "r23",
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
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "F",
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
            "y": 510,
            "at": "l1:pay"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6684,
            "y": 480,
            "at": "l2:Money"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 780,
            "y": 1610,
            "at": "l3:Pressure"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 6684,
            "y": 1260,
            "at": "l4:One or two"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Nhân vật là minh hoạ; bài để tham khảo, quy định có thể thay đổi, kiểm lại với cơ quan chức năng.",
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
          "say": "Five signs. Pay far above what the job asks.",
          "sub": "Năm dấu hiệu. Lương cao so với yêu cầu.",
          "keys": [
            "Lương cao so với yêu cầu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Money before any paper. No contract, no licensed firm.",
          "sub": "Đòi tiền trước khi có văn bản. Không hợp đồng, không doanh nghiệp được cấp phép.",
          "keys": [
            "Đòi tiền trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Pressure. And shortcuts on tourist or study visas.",
          "sub": "Hối thúc. Và “đường tắt” bằng visa du lịch, du học.",
          "keys": [
            "Hối thúc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One or two are enough to stop. Copy the checklist into your phone today.",
          "sub": "Gặp một hai dấu hiệu là đủ để dừng. Hôm nay, chép bảng kiểm năm dòng vào điện thoại.",
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
      "id": "r24",
      "module": "QUIZ-01",
      "data": {
        "q": "How many signs are enough to stop, according to the final takeaway?",
        "options": [
          "All of the signs must appear before you should stop anything",
          "No number of signs matters if a friend recommends the job",
          "One or two signs are enough, without waiting to see all of them"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "stop-sign",
        "why": "Một hai dấu hiệu đã đủ để dừng; không cần chờ thấy đủ cả năm."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "How many signs are enough to stop, according to the final takeaway?",
          "sub": "Theo câu Rút ra cuối, mấy dấu hiệu là đủ để dừng?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "One or two signs are enough. No need to wait for all five.",
          "sub": "Một hai dấu hiệu là đủ. Không cần chờ đủ cả năm."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Stop first, check later.",
          "sub": "Dừng trước, kiểm tra sau."
        }
      ],
      "ref": "questions[38]"
    },
    {
      "id": "r25",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi đọc tiếp bài “bao visa”"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Next up in the series: are guaranteed visa services real?",
          "sub": "Bài tiếp theo của chuỗi: dịch vụ “bao visa” có thật không?"
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
  "notes": "#145 bài MỚI (chuỗi emigrants-avoiding-migration-scams, bài 1) dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-22: Dũng “Em chuyển cọc luôn. Còn hợp đồng thì…” bị cắt, nói trọn ở r03 (cuối ô B, < 90 s) bằng câu “Sau” của p5, nói gọn lại ở r22. Dòng thời gian: TUẦN THỨ HAI của nhà Dũng, mỗi ngày một dấu hiệu (T2 Lan và bài đăng lương cao → T3 tiền trước, tin nhắn viết rõ → T4 ảnh giấy phép, Bác Bình → T5 lời mời gấp + “Khoan đã!” → T6 Lan “đường tắt” → T7 cô Hoa đánh bảng kiểm → CN một hai dấu hiệu là đủ → thứ Hai tuần sau). Nhân vật theo w145/_series/emigrants-avoiding-migration-scams.md: Dũng (gộp anh Hùng p11), Lan, Bác Bình, cô Hoa (gộp chị Hương p15). Không số liệu ngoài bài: Luật 69/2020/QH14 hiệu lực 01/01/2022, nguồn VOV/Hà Tĩnh 2025, Bộ Ngoại giao 2025, Bộ Nội vụ 2026, Bộ Công an 2026, Cục ATTT 2024. Ngắt nhịp: BRK-04 hiểu lầm lương (p2), BRK-09 luật 69 (p8), DLG r13 (p11), BRK-06 bốn điều cần tìm hiểu (p14), BRK-07 rehook “phải đủ năm dấu hiệu?” (p16). Khép vòng: “Dục tốc bất đạt” → chậm lại giữ được tiền. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "r00",
    "close": "r22"
  }
};
