// visa-guarantee-scams--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "visa-guarantee-scams--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "emigrants-avoiding-migration-scams",
    "slug": "visa-guarantee-scams",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Dịch vụ 'bao visa', 'bao đậu phỏng vấn' có thật không?",
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
      "id": "v00",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": [
              "a-tk",
              "a-pax"
            ],
            "move": "cut",
            "zoom": 1.6
          },
          {
            "at": "l2",
            "fit": "A",
            "ms": 1400
          }
        ],
        "items": [
          {
            "id": "a-tk",
            "t": "illus",
            "name": "ticket",
            "x": 120,
            "y": 110,
            "size": 300,
            "at": 0
          },
          {
            "id": "a-pax",
            "t": "text",
            "text": "Hành khách: LAN",
            "x": 80,
            "y": 430,
            "size": 64,
            "at": 0,
            "color": "accent"
          },
          {
            "id": "a-shot",
            "t": "text",
            "text": "…chỉ là ảnh chụp màn hình",
            "x": 60,
            "y": 530,
            "size": 46,
            "at": "l2:screenshot",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A plane ticket. Passenger: Lan.",
          "sub": "Một tấm vé máy bay. Hành khách: Lan.",
          "keys": [
            "Hành khách: Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Well, a screenshot of one, sent by a visa service to show her file is moving.",
          "sub": "À, đúng hơn là ảnh chụp màn hình, do một dịch vụ visa gửi để chứng tỏ hồ sơ đang chạy."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Remember this picture. By the end, you'll see it very differently.",
          "sub": "Nhớ tấm ảnh này nhé. Cuối bài, bạn sẽ nhìn nó rất khác.",
          "keys": [
            "Nhớ tấm ảnh này"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 0
        }
      ],
      "ref": "p3"
    },
    {
      "id": "v01",
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
            "at": "l5",
            "fit": "A",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "a-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "home",
              "label": "Tin nhắn dịch vụ visa",
              "actor": {
                "id": "lan",
                "side": "left"
              },
              "contact": {
                "name": "Dịch vụ visa",
                "illus": "passport-control"
              },
              "messages": [
                {
                  "from": "them",
                  "text": "Vé của em đây, hồ sơ đang chạy rồi!",
                  "at": "l2"
                },
                {
                  "from": "them",
                  "text": "Em chuyển khoản trọn gói trong hôm nay nhé.",
                  "at": "l3"
                }
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Hai · tuần thứ ba",
            "icon": "mobile-phone"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Tiền mất tật mang”",
            "x": 60,
            "y": 620,
            "size": 56,
            "at": "l5:trouble",
            "color": "accent",
            "hl": [
              {
                "text": "tật mang",
                "at": "l5:trouble"
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
          "say": "Meet Lan again, Dũng's sister, the tailor in a hurry.",
          "sub": "Lại là Lan, em gái Dũng, cô thợ may đang vội."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Here's your ticket. Your file is already moving!",
          "sub": "“Vé của em đây, hồ sơ đang chạy rồi!”"
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Transfer the full package today.",
          "sub": "“Em chuyển khoản trọn gói trong hôm nay nhé.”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "A ticket in my name! It must be real.",
          "sub": "Vé đứng tên em hẳn hoi! Chắc là thật rồi.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our elders have a phrase for what may follow: lose the money, and keep the trouble.",
          "sub": "Ông bà có câu cho chuyện có thể xảy ra: “Tiền mất tật mang.”",
          "keys": [
            "Tiền mất tật mang"
          ]
        }
      ],
      "ref": "p1"
    },
    {
      "id": "v02",
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
            "text": "“Bao đậu” có thật không?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:real",
            "hl": [
              {
                "text": "có thật không",
                "at": "l1:real"
              }
            ]
          },
          {
            "id": "b-fear",
            "t": "text",
            "text": "Đánh đúng nỗi lo lớn nhất",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:fear",
            "color": "coral",
            "hl": [
              {
                "text": "nỗi lo lớn nhất",
                "at": "l2:fear"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "1. Vì sao không ai bảo đảm",
            "x": 2028,
            "y": 290,
            "size": 46,
            "at": "l3:guarantee"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "2. Giấy tờ giả hại ai",
            "x": 2028,
            "y": 370,
            "size": 46,
            "at": "l4:fake"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "3. Giữ hộ chiếu, tiền, bằng chứng",
            "x": 2028,
            "y": 450,
            "size": 46,
            "at": "l4:passport",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So are guaranteed visa and guaranteed interview services real?",
          "sub": "Vậy dịch vụ “bao visa”, “bao đậu phỏng vấn” có thật không?",
          "keys": [
            "có thật không"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Those words hit the biggest fear of anyone applying to go abroad.",
          "sub": "Những lời ấy đánh đúng nỗi lo lớn nhất của người làm hồ sơ đi nước ngoài.",
          "keys": [
            "nỗi lo lớn nhất"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Today: why no one can guarantee the result.",
          "sub": "Hôm nay: vì sao không ai bảo đảm được kết quả."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Why fake papers hurt you, and how to keep your passport, money and proof.",
          "sub": "Vì sao giấy tờ giả hại chính bạn, và cách giữ hộ chiếu, tiền, bằng chứng."
        }
      ],
      "ref": "intro"
    },
    {
      "id": "v03",
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
            "text": "① Thứ Hai · Lời hứa",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:promise"
          },
          {
            "id": "c-s1",
            "t": "text",
            "text": "“Bao đậu visa” · “100%”",
            "x": 3996,
            "y": 160,
            "size": 52,
            "at": "l2:guaranteed",
            "color": "coral"
          },
          {
            "id": "c-s2",
            "t": "text",
            "text": "“Không cần phỏng vấn”",
            "x": 3996,
            "y": 235,
            "size": 52,
            "at": "l2:interview",
            "color": "coral"
          },
          {
            "id": "c-then",
            "t": "text",
            "text": "→ giao hộ chiếu · ký · chuyển khoản",
            "x": 3996,
            "y": 330,
            "size": 44,
            "at": "l3:passport",
            "hl": [
              {
                "text": "giao hộ chiếu",
                "at": "l3:passport"
              }
            ]
          },
          {
            "id": "c-acc",
            "t": "text",
            "text": "Tài khoản giả vào hội nhóm",
            "x": 4836,
            "y": 160,
            "size": 46,
            "at": "l4:fake"
          },
          {
            "id": "c-fast",
            "t": "text",
            "text": "Visa rất nhanh · tỷ lệ cao",
            "x": 4836,
            "y": 235,
            "size": 46,
            "at": "l4:fast"
          },
          {
            "id": "c-file",
            "t": "text",
            "text": "…mà không xem kỹ hồ sơ",
            "x": 4836,
            "y": 310,
            "size": 46,
            "at": "l5:reading",
            "color": "coral",
            "hl": [
              {
                "text": "không xem kỹ hồ sơ",
                "at": "l5:reading"
              }
            ]
          },
          {
            "id": "c-fee",
            "t": "text",
            "text": "Phí không rõ ràng, chuyển trước",
            "x": 4836,
            "y": 385,
            "size": 42,
            "at": "l5:unclear",
            "color": "muted"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Vietnam+ (TTXVN, 18/9/2026) · Cục An toàn thông tin (Cổng TTĐT Hà Tĩnh, 5/8/2024)",
            "x": 3996,
            "y": 730,
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
          "say": "Stop one, Monday. What does the promise sound like?",
          "sub": "Chặng một, thứ Hai. Lời hứa “bao đậu” nghe thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Vietnam Plus, September twenty twenty-six: guaranteed visa, one hundred percent, no interview needed.",
          "sub": "Vietnam+ tháng 9/2026: “bao đậu visa”, “100% có visa”, “không cần phỏng vấn”, để tạo niềm tin."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then: hand over your passport, sign papers, transfer a large sum.",
          "sub": "Sau đó: giao hộ chiếu, ký giấy tờ, chuyển khoản số tiền lớn.",
          "keys": [
            "giao hộ chiếu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "In twenty twenty-four, another trick: fake accounts joined groups, promising very fast visas.",
          "sub": "Năm 2024, Cục An toàn thông tin cảnh báo: tài khoản giả vào hội nhóm, nhắn tin hứa xin visa rất nhanh."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "High success, without even reading the file. Then unclear fees, paid first.",
          "sub": "Bảo đảm tỷ lệ thành công cao mà không cần xem kỹ hồ sơ. Rồi đòi chuyển trước các khoản phí không rõ ràng.",
          "keys": [
            "không cần xem kỹ hồ sơ"
          ]
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "v04",
      "module": "BRK-03",
      "data": {
        "value": 740,
        "suffix": " triệu",
        "label": "hơn 740 triệu đồng, 10 người bị chiếm đoạt (2024)",
        "illus": "money-with-wings"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Ten people believed it.",
          "sub": "Mười người đã tin."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Together they lost over seven hundred forty million dong.",
          "sub": "Tổng cộng bị chiếm đoạt hơn 740 triệu đồng."
        }
      ],
      "ref": "p2"
    },
    {
      "id": "v05",
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
            "text": "② Thứ Ba · Tấm ảnh vé",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:ticket"
          },
          {
            "id": "d-trust",
            "t": "text",
            "text": "Ảnh vé đứng tên mình → tin?",
            "x": 5964,
            "y": 160,
            "size": 46,
            "at": "l2:screenshot",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, Tuesday. Back to Lan's ticket.",
          "sub": "Chặng hai, thứ Ba. Quay lại tấm vé của Lan."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Many people trust a screenshot of a booking in their own name.",
          "sub": "Nhiều người tin khi bên dịch vụ gửi ảnh chụp vé máy bay đứng tên mình."
        }
      ],
      "ref": "p3"
    },
    {
      "id": "v06",
      "module": "BRK-01",
      "data": {
        "illus": "ticket",
        "around": [
          "mobile-phone",
          "camera-with-flash"
        ],
        "label": "Chỉ là ảnh chụp!",
        "note": "Nhập tên bạn vào trang đặt vé, chụp lại, gửi đi"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Stop right there.",
          "sub": "Dừng lại đã."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "They typed your name into a booking site, took a screenshot, and sent it.",
          "sub": "Họ nhập tên bạn vào trang đặt vé, chụp màn hình rồi gửi đi."
        }
      ],
      "ref": "p3"
    },
    {
      "id": "v07",
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
            "id": "d-trustx",
            "t": "strike",
            "over": "d-trust",
            "at": "l1:trick"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "ticket",
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-07",
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
            "caption": "Thứ Ba · Lan nhìn lại tấm vé",
            "icon": "ticket"
          },
          {
            "id": "d-trick",
            "t": "text",
            "text": "= cách tạo lòng tin",
            "x": 5964,
            "y": 240,
            "size": 50,
            "at": "l1:trick",
            "color": "coral"
          },
          {
            "id": "d-none",
            "t": "text",
            "text": "Nhận tiền → không làm thủ tục",
            "x": 5964,
            "y": 320,
            "size": 44,
            "at": "l2:contact"
          },
          {
            "id": "d-rule",
            "t": "text",
            "text": "Ảnh chụp ≠ hồ sơ đã nộp",
            "x": 5964,
            "y": 430,
            "size": 60,
            "at": "l4:prove",
            "color": "accent",
            "hl": [
              {
                "text": "≠ hồ sơ đã nộp",
                "at": "l4:submitted"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: cảnh báo của Cục An toàn thông tin, 2024",
            "x": 5964,
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
          "say": "The twenty twenty-four warning calls it a trust trick.",
          "sub": "Cảnh báo năm 2024 nói rõ: đó chỉ là cách tạo lòng tin.",
          "keys": [
            "cách tạo lòng tin"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After the money arrives, they contact no agency or organisation at all.",
          "sub": "Nhận tiền xong, chúng không liên hệ cơ quan, tổ chức nào để làm thủ tục."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "So my ticket proves... nothing?",
          "sub": "Vậy tấm vé của em chẳng chứng minh được gì?",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Nothing. A screenshot doesn't prove your file was submitted anywhere.",
          "sub": "Chẳng gì cả. Ảnh chụp màn hình không chứng minh hồ sơ của bạn đã được nộp ở đâu cả.",
          "keys": [
            "không chứng minh"
          ]
        }
      ],
      "ref": "p3,p4"
    },
    {
      "id": "v08",
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
            "text": "③ Thứ Tư · Ai quyết visa?",
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
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "at": "l1:video",
            "caption": "Thứ Tư · gọi video chị Thảo",
            "icon": "laptop"
          },
          {
            "id": "e-who",
            "t": "text",
            "text": "Cơ quan nước đến quyết",
            "x": 7932,
            "y": 170,
            "size": 54,
            "at": "l4:authorities",
            "color": "accent",
            "hl": [
              {
                "text": "nước đến",
                "at": "l4:destination"
              }
            ]
          },
          {
            "id": "e-svc",
            "t": "text",
            "text": "Dịch vụ: chỉ giúp chuẩn bị",
            "x": 7932,
            "y": 260,
            "size": 46,
            "at": "l5:prepare"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, Wednesday. Lan video-calls her cousin, Chị Thảo, an office worker in Hanoi.",
          "sub": "Chặng ba, thứ Tư. Lan gọi video cho chị họ, chị Thảo, nhân viên văn phòng ở Hà Nội.",
          "keys": [
            "chị Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thảo is preparing her own skilled-worker file for Canada.",
          "sub": "Chị Thảo đang tự làm hồ sơ định cư tay nghề Canada."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "First question: who actually decides your visa?",
          "sub": "Thứ nhất: ai thật sự quyết visa của em?",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The destination country's authorities. Not the service.",
          "sub": "Cơ quan của nước đến. Không phải bên làm dịch vụ.",
          "keys": [
            "Cơ quan của nước đến"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "An honest service only helps you prepare the file.",
          "sub": "Bên dịch vụ, nếu làm đúng, chỉ giúp bạn chuẩn bị hồ sơ."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1500
        }
      ],
      "ref": "p5"
    },
    {
      "id": "v09",
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
            "at": "l3",
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
            "id": "e-resp",
            "t": "text",
            "text": "Bạn chịu trách nhiệm mọi dòng",
            "x": 7932,
            "y": 350,
            "size": 44,
            "at": "l1:responsible",
            "color": "coral"
          },
          {
            "id": "e-hand",
            "t": "text",
            "text": "“Bao đậu” = hứa việc ngoài tầm",
            "x": 7932,
            "y": 430,
            "size": 44,
            "at": "l2:control",
            "hl": [
              {
                "text": "ngoài tầm",
                "at": "l2:control"
              }
            ]
          },
          {
            "id": "e-lic",
            "t": "text",
            "text": "Canada: tư vấn thu tiền cần phép",
            "x": 7932,
            "y": 510,
            "size": 36,
            "at": "l3:licensed",
            "color": "muted"
          },
          {
            "id": "e-ask",
            "t": "text",
            "text": "Hỏi: giấy phép gì, tra ở đâu?",
            "x": 8752,
            "y": 692,
            "size": 46,
            "at": "l5:licence",
            "color": "accent",
            "hl": [
              {
                "text": "tra ở đâu",
                "at": "l5:check"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Chính phủ Canada (IRCC)",
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
          "say": "Canada's government is clear: you're responsible for everything in your file, even if an agent filled it in.",
          "sub": "Chính phủ Canada nói rõ: bạn chịu trách nhiệm mọi thông tin trong hồ sơ, kể cả khi người đại diện điền giúp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So guaranteed is a promise about something the service doesn't control.",
          "sub": "Vậy “bao đậu” là lời hứa về một việc bên dịch vụ không nắm trong tay.",
          "keys": [
            "không nắm trong tay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "In Canada, paid advisers must be licensed: consultants, lawyers, or Quebec notaries.",
          "sub": "Ở Canada, người tư vấn di trú có thu tiền phải có giấy phép: tư vấn viên, luật sư, hoặc công chứng viên ở Quebec."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "And the government site has a tool to check them.",
          "sub": "Trang Chính phủ Canada còn có công cụ để kiểm tra họ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So don't ask: is it guaranteed? Ask: what licence, and where do I check it?",
          "sub": "Vậy đừng hỏi “có bao đậu không”, hãy hỏi “anh chị có giấy phép gì, tra ở đâu”.",
          "keys": [
            "giấy phép gì, tra ở đâu"
          ]
        }
      ],
      "ref": "p5,p6,p7"
    },
    {
      "id": "v10",
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
            "text": "④ Thứ Năm · “Làm đẹp”",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Thursday"
          },
          {
            "id": "f-offer",
            "t": "text",
            "text": "“Làm đẹp” giấy xác nhận lương",
            "x": 60,
            "y": 1250,
            "size": 46,
            "at": "l2:polish",
            "color": "coral"
          },
          {
            "id": "f-blame",
            "t": "text",
            "text": "“Lỗi bên anh”",
            "x": 60,
            "y": 1330,
            "size": 54,
            "at": "l2:blame",
            "color": "coral",
            "hl": [
              {
                "text": "Lỗi bên anh",
                "at": "l2:blame"
              }
            ]
          },
          {
            "id": "f-lure",
            "t": "text",
            "text": "Xúi làm giả: kiểu dụ thường gặp",
            "x": 60,
            "y": 1420,
            "size": 42,
            "at": "l3:fake",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four, Thursday. Now Thảo's own service makes an offer.",
          "sub": "Chặng bốn, thứ Năm. Đến lượt dịch vụ của chị Thảo đề nghị."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "We'll polish your salary letter a bit. If it's caught, the blame is ours.",
          "sub": "“Để bên anh ‘làm đẹp’ giấy xác nhận lương chút. Lỡ bị phát hiện thì lỗi bên anh.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "LuatVietnam warns: pushing people to fake diplomas or papers is a common lure.",
          "sub": "LuatVietnam cảnh báo: xúi làm giả bằng cấp, giấy tờ cho hồ sơ “đẹp” là kiểu dụ dỗ thường gặp."
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "v11",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Năm · giờ nghỉ trưa",
        "actors": [
          {
            "id": "thao",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đồng ý “làm đẹp” giấy tờ",
          "why": "Người chịu hậu quả là người nộp: hồ sơ bị từ chối, có thể bị cấm nhập cảnh nhiều năm.",
          "rule": "Không ký hồ sơ có thông tin mình không chắc là thật"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Well, if the blame is theirs... fine, polish it.",
          "sub": "Ừ thì lỗi bên họ... vậy cứ làm đẹp đi.",
          "face": "thinking",
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
          "say": "Wrong. Canada says you are responsible, even when your agent sends the papers.",
          "sub": "Sai. Theo Chính phủ Canada, bạn chịu trách nhiệm, kể cả khi người đại diện gửi giấy tờ.",
          "keys": [
            "bạn chịu trách nhiệm"
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
          "say": "No, thank you. Only real documents go into my file.",
          "sub": "Không, cảm ơn anh. Hồ sơ của em chỉ có giấy tờ thật.",
          "phase": "redo",
          "face": "stern",
          "pose": "phone"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "The one banned is you, not the service.",
          "sub": "Người bị cấm nhập cảnh là bạn, không phải bên dịch vụ.",
          "phase": "redo",
          "keys": [
            "là bạn"
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
      "id": "v12",
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
            "id": "f-h",
            "t": "text",
            "text": "Hậu quả (Canada):",
            "x": 900,
            "y": 1250,
            "size": 50,
            "at": "l1:lists",
            "color": "accent"
          },
          {
            "id": "f-h1",
            "t": "text",
            "text": "✗ hồ sơ bị từ chối",
            "x": 900,
            "y": 1325,
            "size": 44,
            "at": "l1:Refusal"
          },
          {
            "id": "f-h2",
            "t": "text",
            "text": "✗ cấm vào Canada ≥ 5 năm",
            "x": 900,
            "y": 1390,
            "size": 44,
            "at": "l2:ban",
            "hl": [
              {
                "text": "≥ 5 năm",
                "at": "l2:five years"
              }
            ]
          },
          {
            "id": "f-h3",
            "t": "text",
            "text": "✗ cấm xin quốc tịch 5 năm",
            "x": 900,
            "y": 1455,
            "size": 44,
            "at": "l2:citizenship"
          },
          {
            "id": "f-h4",
            "t": "text",
            "text": "✗ mất cư trú, buộc rời đi",
            "x": 900,
            "y": 1520,
            "size": 40,
            "at": "l3:status"
          },
          {
            "id": "f-h5",
            "t": "text",
            "text": "✗ hồ sơ gian lận vĩnh viễn",
            "x": 900,
            "y": 1585,
            "size": 44,
            "at": "l3:permanent",
            "color": "coral"
          },
          {
            "id": "f-sign",
            "t": "text",
            "text": "Không chắc thật → không ký",
            "x": 60,
            "y": 1610,
            "size": 56,
            "at": "l4:sign",
            "color": "accent",
            "hl": [
              {
                "text": "không ký",
                "at": "l4:sign"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: LuatVietnam (13/4/2022) · Chính phủ Canada (IRCC)",
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
          "say": "Canada lists what false papers can bring. Refusal, for a start.",
          "sub": "Chính phủ Canada liệt kê hậu quả của giấy tờ giả. Trước hết: hồ sơ bị từ chối."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A ban of at least five years. No citizenship application for five years.",
          "sub": "Có thể bị cấm vào Canada ít nhất 5 năm, cấm nộp đơn xin quốc tịch 5 năm.",
          "keys": [
            "ít nhất 5 năm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Loss of status or being made to leave. And a permanent fraud record.",
          "sub": "Có thể mất tư cách cư trú, bị buộc rời Canada, và bị lưu hồ sơ gian lận vĩnh viễn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lose the money, keep the trouble. Never sign anything you're not sure is true.",
          "sub": "Tiền mất tật mang. Đừng ký vào hồ sơ có thông tin mình không chắc là thật.",
          "keys": [
            "không chắc là thật"
          ]
        }
      ],
      "ref": "p8,p10"
    },
    {
      "id": "v13",
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
            "text": "⑤ Thứ Sáu · Ở lại làm?",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "enter": "pop",
                  "at": "l3"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "airplane",
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "lan",
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
            "at": "l1:package",
            "caption": "Thứ Sáu · quán nước cô Hoa",
            "icon": "airplane"
          },
          {
            "id": "g-pk",
            "t": "text",
            "text": "“Du lịch, sang có người lo việc”",
            "x": 2028,
            "y": 1250,
            "size": 40,
            "at": "l1:tourist",
            "color": "coral"
          },
          {
            "id": "g-ill",
            "t": "text",
            "text": "= đường bất hợp pháp · trục xuất",
            "x": 2028,
            "y": 1340,
            "size": 44,
            "at": "l4:illegal",
            "hl": [
              {
                "text": "trục xuất",
                "at": "l4:deportation"
              }
            ]
          },
          {
            "id": "g-auth",
            "t": "text",
            "text": "Hỏi cơ quan chức năng trước",
            "x": 2028,
            "y": 1420,
            "size": 44,
            "at": "l5:authorities",
            "color": "accent"
          },
          {
            "id": "g-39",
            "t": "text",
            "text": "39 công dân bị giữ ở Myanmar",
            "x": 2848,
            "y": 1782,
            "size": 44,
            "at": "l6:thirty-nine",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, Friday. Lan's new package: a tourist visa, and someone handles the job over there.",
          "sub": "Chặng năm, thứ Sáu. Gói mới của Lan: “visa du lịch, sang đó có người lo việc làm”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "It's fast, and no exams! Bác, what do you think?",
          "sub": "Nhanh, lại không phải thi! Bác thấy sao?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Take it slow. I went abroad with a contract, and that protected me.",
          "sub": "Từ từ, mình xem lại đã. Ngày trước bác đi có hợp đồng, nhờ thế mà được bảo vệ.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "LuatVietnam lists this as an illegal route. It can end in deportation.",
          "sub": "LuatVietnam xếp đây vào các đường “bất hợp pháp”, có thể dẫn tới bị trục xuất.",
          "keys": [
            "bị trục xuất"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The foreign ministry: consult the authorities first, to avoid working or living illegally.",
          "sub": "Bộ Ngoại giao khuyên tham khảo cơ quan chức năng trước khi đi, tránh làm việc, cư trú bất hợp pháp."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "That same round, thirty-nine citizens held in Myanmar for breaking its entry rules were brought home.",
          "sub": "Cũng trong đợt đó, 39 công dân bị giữ ở Myanmar vì vi phạm quy định xuất nhập cảnh nước này đã được đưa về."
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 0
        }
      ],
      "ref": "p11"
    },
    {
      "id": "v14",
      "module": "BRK-04",
      "data": {
        "title": "Gói của Lan",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrong": "Gói visa du lịch: nhanh, không phải thi",
        "right": "Diện đi làm hợp pháp: học, thi, có hợp đồng",
        "wrongIllus": "airplane",
        "rightIllus": "page-facing-up"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Option A: fast, but she could be deported.",
          "sub": "Cách A: nhanh, nhưng có thể bị trục xuất."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Option B: slower, with a contract and the law's protection.",
          "sub": "Cách B: chậm hơn, có hợp đồng, được pháp luật bảo vệ."
        }
      ],
      "ref": "p12"
    },
    {
      "id": "v15",
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
            "id": "g-b",
            "t": "text",
            "text": "Hỏi trung tâm dịch vụ việc làm",
            "x": 2028,
            "y": 1520,
            "size": 44,
            "at": "l1:centre"
          },
          {
            "id": "g-b2",
            "t": "text",
            "text": "hoặc doanh nghiệp được cấp phép",
            "x": 2028,
            "y": 1585,
            "size": 44,
            "at": "l1:licensed"
          },
          {
            "id": "g-rule",
            "t": "text",
            "text": "Visa du lịch: để du lịch",
            "x": 2028,
            "y": 1680,
            "size": 58,
            "at": "l3:touring",
            "color": "accent",
            "hl": [
              {
                "text": "để du lịch",
                "at": "l3:touring"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: LuatVietnam 2022 · Bộ Ngoại giao (Báo Thanh Tra, 9/4/2025)",
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
          "say": "Option B: Lan asks a job service centre or a licensed company about a legal work route.",
          "sub": "Cách B: Lan hỏi trung tâm dịch vụ việc làm hoặc doanh nghiệp được cấp phép về một diện đi làm hợp pháp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "It means study and exams. Fine, I'll take the time.",
          "sub": "Phải học, phải thi. Được, em chấp nhận mất thời gian.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A tourist visa is for touring. Work needs the right labour route and a clear contract.",
          "sub": "Visa du lịch là để du lịch. Đi làm cần đúng diện lao động và hợp đồng rõ ràng.",
          "keys": [
            "Visa du lịch là để du lịch"
          ]
        }
      ],
      "ref": "p12,p13"
    },
    {
      "id": "v16",
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
            "at": "l4:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Bảy · Giữ cho chặt",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Saturday"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "label": "Lan trả lời dịch vụ",
              "actor": {
                "id": "lan",
                "side": "left"
              },
              "contact": {
                "name": "Dịch vụ visa",
                "illus": "passport-control"
              },
              "messages": [
                {
                  "from": "them",
                  "text": "Em gửi luôn hộ chiếu bản gốc qua bưu điện, chuyển khoản trọn gói, bên anh bao đậu.",
                  "at": "l2"
                },
                {
                  "from": "me",
                  "text": "Em tự đọc quy trình trên trang đại sứ quán. Anh cho em địa chỉ văn phòng, giấy phép để tra. Hộ chiếu em giữ, tiền nộp có biên nhận.",
                  "at": "l3"
                }
              ]
            },
            "at": "l1:pushes",
            "caption": "Thứ Bảy · viết lại câu trả lời",
            "icon": "passport-control"
          },
          {
            "id": "h-self",
            "t": "text",
            "text": "Tự đọc quy trình đại sứ quán",
            "x": 3996,
            "y": 1260,
            "size": 42,
            "at": "l3:embassy",
            "color": "accent"
          },
          {
            "id": "h-off",
            "t": "text",
            "text": "Xin địa chỉ văn phòng, giấy phép",
            "x": 3996,
            "y": 1330,
            "size": 42,
            "at": "l3:address"
          },
          {
            "id": "h-pp",
            "t": "text",
            "text": "Hộ chiếu tự giữ · có biên nhận",
            "x": 3996,
            "y": 1400,
            "size": 42,
            "at": "l4:passport",
            "hl": [
              {
                "text": "tự giữ",
                "at": "l4:stays"
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
          "say": "Stop six, Saturday. The service pushes once more.",
          "sub": "Chặng sáu, thứ Bảy. Bên dịch vụ giục thêm lần nữa."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Post your original passport and pay the full package. We guarantee it.",
          "sub": "“Em gửi luôn hộ chiếu bản gốc qua bưu điện, chuyển khoản trọn gói, bên anh bao đậu.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "I'll read the process on the embassy site myself. Your office address and licence, please.",
          "sub": "Em tự đọc quy trình trên trang đại sứ quán. Anh cho em địa chỉ văn phòng, giấy phép để em tra.",
          "pose": "phone",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "My passport stays with me. Any payment comes with a receipt.",
          "sub": "Hộ chiếu em tự giữ. Tiền nộp phải có biên nhận.",
          "face": "stern"
        }
      ],
      "ref": "p15"
    },
    {
      "id": "v17",
      "module": "BRK-11",
      "data": {
        "title": "3 thứ không giao vội",
        "items": [
          "Hộ chiếu",
          "Chữ ký",
          "Tiền"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Three: your money.",
          "sub": "Ba: tiền."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Two: your signature.",
          "sub": "Hai: chữ ký."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "One: your passport. Not until you've verified them.",
          "sub": "Một: hộ chiếu. Chưa xác minh được họ thì chưa giao."
        }
      ],
      "ref": "p16"
    },
    {
      "id": "v18",
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
            "id": "h-keep",
            "t": "text",
            "text": "Giữ: hợp đồng · biên nhận",
            "x": 3996,
            "y": 1500,
            "size": 46,
            "at": "l2:Keep",
            "color": "accent"
          },
          {
            "id": "h-keep2",
            "t": "text",
            "text": "chứng từ chuyển tiền · tin nhắn",
            "x": 3996,
            "y": 1565,
            "size": 42,
            "at": "l2:messages"
          },
          {
            "id": "h-pol",
            "t": "text",
            "text": "→ cung cấp cho công an",
            "x": 4036,
            "y": 1630,
            "size": 42,
            "at": "l2:police",
            "color": "muted"
          },
          {
            "id": "h-link",
            "t": "text",
            "text": "✗ link lạ · tự tìm trang chính thức",
            "x": 3996,
            "y": 1710,
            "size": 42,
            "at": "l3:links",
            "color": "coral"
          },
          {
            "id": "h-real",
            "t": "text",
            "text": "Văn phòng, liên hệ rõ ràng",
            "x": 4816,
            "y": 1782,
            "size": 46,
            "at": "l4:office",
            "hl": [
              {
                "text": "rõ ràng",
                "at": "l4:clear"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: Vietnam+ 9/2026 · Cục An toàn thông tin 2024",
            "x": 3996,
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
          "say": "Vietnam Plus: verify who they are before handing over money, a passport, or a signature.",
          "sub": "Vietnam+ khuyên: xác minh tổ chức, cá nhân trước khi giao tiền, giao hộ chiếu hay ký giấy tờ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Already paid, or suspicious? Keep contracts, receipts, transfer records and messages for the police.",
          "sub": "Đã giao dịch hoặc nghi bị lừa? Giữ hợp đồng, biên nhận, chứng từ chuyển tiền, tin nhắn để cung cấp cho công an.",
          "keys": [
            "để cung cấp cho công an"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Don't tap strange links. Find the embassy's official website yourself.",
          "sub": "Không bấm đường link lạ. Tự tìm đến trang web chính thức của đại sứ quán, cơ quan lãnh sự."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And only use services with a real office and clear contacts.",
          "sub": "Và chỉ làm qua đơn vị có văn phòng, thông tin liên hệ rõ ràng.",
          "keys": [
            "văn phòng, thông tin liên hệ rõ ràng"
          ]
        }
      ],
      "ref": "p14"
    },
    {
      "id": "v19",
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
            "at": "l4",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Chủ nhật · Mỗi nước một kiểu",
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
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "props": [
                "globe-with-meridians"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Sunday",
            "caption": "Chủ nhật · gọi video chị Thảo",
            "icon": "globe-with-meridians"
          },
          {
            "id": "i-own",
            "t": "text",
            "text": "Visa, lệ phí, người đại diện: riêng",
            "x": 5964,
            "y": 1260,
            "size": 40,
            "at": "l1:fees"
          },
          {
            "id": "i-us",
            "t": "text",
            "text": "Mỹ diện gia đình · Canada tay nghề",
            "x": 5964,
            "y": 1340,
            "size": 40,
            "at": "l2:family",
            "color": "muted"
          },
          {
            "id": "i-us2",
            "t": "text",
            "text": "→ mỗi chuỗi có bài riêng",
            "x": 6004,
            "y": 1405,
            "size": 42,
            "at": "l2:own"
          },
          {
            "id": "i-save",
            "t": "text",
            "text": "Lưu trang đại sứ quán",
            "x": 5964,
            "y": 1510,
            "size": 56,
            "at": "l3:save",
            "color": "accent",
            "hl": [
              {
                "text": "đại sứ quán",
                "at": "l3:embassy"
              }
            ]
          },
          {
            "id": "i-next",
            "t": "text",
            "text": "Bài sau: kênh chính thức",
            "x": 6784,
            "y": 1782,
            "size": 46,
            "at": "l4:Next"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven, Sunday. Each country has its own visa process, fees, and list of allowed representatives.",
          "sub": "Chặng bảy, Chủ nhật. Mỗi nước có cách xét visa, lệ phí và danh sách người đại diện được phép riêng.",
          "keys": [
            "riêng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "US family immigration? Canada skilled work? Each series has its own scam lesson.",
          "sub": "Định cư Mỹ diện gia đình? Định cư tay nghề Canada? Mỗi chuỗi có bài riêng về dịch vụ lừa đảo."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Lan, save the embassy's official website now. Then you'll never need a middleman's link.",
          "sub": "Lan, lưu ngay trang chính thức của đại sứ quán. Khỏi cần link của ai nữa.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Next in this series: checking companies and fees on official channels.",
          "sub": "Bài tiếp theo của chuỗi: kiểm tra doanh nghiệp, lệ phí qua kênh chính thức."
        }
      ],
      "ref": "p17,outro"
    },
    {
      "id": "v20",
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
            "text": "Tối Chủ nhật · lại tấm vé",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:ticket"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "ticket",
                "passport-control"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1:Sunday",
            "caption": "Tối Chủ nhật · hộ chiếu vẫn trong tủ",
            "icon": "passport-control"
          },
          {
            "id": "j-tk",
            "t": "illus",
            "name": "ticket",
            "x": 7932,
            "y": 1250,
            "size": 150,
            "at": "l1:ticket"
          },
          {
            "id": "j-pax",
            "t": "text",
            "text": "Hành khách: LAN",
            "x": 8112,
            "y": 1280,
            "size": 50,
            "at": "l1:ticket+300"
          },
          {
            "id": "j-proof",
            "t": "text",
            "text": "= bằng chứng hồ sơ?",
            "x": 7932,
            "y": 1430,
            "size": 50,
            "at": "l2:Proof",
            "color": "muted"
          },
          {
            "id": "j-proofx",
            "t": "strike",
            "over": "j-proof",
            "at": "l2:nothing"
          },
          {
            "id": "j-0",
            "t": "text",
            "text": "0 đồng · hộ chiếu trong tủ",
            "x": 7932,
            "y": 1520,
            "size": 50,
            "at": "l2:paid",
            "color": "accent"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Tiền còn · tật không",
            "x": 7932,
            "y": 1620,
            "size": 60,
            "at": "l3:money",
            "color": "accent",
            "hl": [
              {
                "text": "tật không",
                "at": "l3:trouble"
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
          "say": "Sunday night. That ticket screenshot again.",
          "sub": "Tối Chủ nhật. Lại tấm ảnh vé ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Passenger: Lan. Proof of nothing. And I never paid a dong.",
          "sub": "Hành khách: Lan. Chẳng chứng minh gì cả. May mà em chưa chuyển đồng nào.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Lose the money, keep the trouble? Not Lan. She kept her money, her passport, and no trouble.",
          "sub": "“Tiền mất tật mang”? Lan thì không: tiền còn, hộ chiếu còn, tật cũng không.",
          "keys": [
            "tiền còn, hộ chiếu còn"
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
      "ref": "p4"
    },
    {
      "id": "v21",
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
            "at": "l1:guarantee",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l2:papers",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:Passport",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l4",
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
            "y": 170,
            "at": "l1:guarantee+400"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 780,
            "y": 1610,
            "at": "l2:papers+400"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4716,
            "y": 1400,
            "at": "l3:Passport+400"
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
          "say": "No one can guarantee a visa. The destination country decides.",
          "sub": "Không ai bảo đảm được kết quả visa: cơ quan nước đến quyết định.",
          "keys": [
            "Không ai bảo đảm được"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fake papers hurt the applicant. A ban can last years.",
          "sub": "Giấy tờ giả hại chính người nộp, có thể bị cấm nhập cảnh nhiều năm.",
          "keys": [
            "hại chính người nộp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Passport, signature, money: only after you've verified them.",
          "sub": "Hộ chiếu, chữ ký, tiền: chỉ giao khi đã xác minh.",
          "keys": [
            "chỉ giao khi đã xác minh"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Today, save the official website of the embassy you're aiming for.",
          "sub": "Việc làm ngay: lưu trang chính thức của đại sứ quán nước bạn muốn đến.",
          "keys": [
            "lưu trang chính thức"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "v22",
      "module": "QUIZ-01",
      "data": {
        "q": "Which three things does the takeaway say not to hand over before checking?",
        "options": [
          "Your phone number, your email address and the name of your street",
          "Your passport, your signature on papers, and your money in any form",
          "Your holiday photos, your school diplomas and your old family letters"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "passport-control",
        "why": "Hộ chiếu, chữ ký và tiền là ba thứ không giao khi chưa xác minh được họ."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which three things does the takeaway say not to hand over before checking?",
          "sub": "Câu Rút ra nói ba thứ nào không giao khi chưa xác minh?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Passport, signature and money. Verify first, hand over later.",
          "sub": "Hộ chiếu, chữ ký, tiền. Xác minh trước, giao sau."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "A screenshot proves nothing.",
          "sub": "Ảnh chụp màn hình không chứng minh gì cả."
        }
      ],
      "ref": "questions[37]"
    },
    {
      "id": "v23",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi lưu trang chính thức của đại sứ quán"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Next lesson: checking companies, offers and fees on official channels.",
          "sub": "Bài tiếp theo: kiểm tra doanh nghiệp, lời mời, lệ phí qua kênh chính thức."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But first, the forty questions below.",
          "sub": "Nhưng trước hết, bốn mươi câu hỏi bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi emigrants-avoiding-migration-scams, bài 2) dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-23 (đồ vật kể chuyện): ảnh chụp vé máy bay “Hành khách: LAN” (p3) mở bài, máy kéo ra thấy tin nhắn dịch vụ; vật trở lại ở v20. Dòng thời gian: TUẦN THỨ BA của nhà Dũng (T2 lời hứa “bao đậu” → T3 tấm ảnh vé → T4 gọi chị Thảo: ai quyết visa → T5 “làm đẹp” giấy xác nhận lương + “Khoan đã!” → T6 gói visa du lịch, Bác Bình, Cách A/B → T7 giữ hộ chiếu, tiền, bằng chứng → CN mỗi nước một bài → tối CN lại tấm vé). Nhân vật theo w145/_series/emigrants-avoiding-migration-scams.md: Lan (gộp chị Ngọc p12), chị Thảo (gộp anh Phong p9 — hồ sơ định cư Canada), Bác Bình. Số liệu chỉ từ bài: Vietnam+ 18/9/2026, Cục ATTT 2024: 10 người hơn 740 triệu đồng, Canada (IRCC): cấm ≥ 5 năm, cấm xin quốc tịch 5 năm, 39 công dân ở Myanmar (Bộ Ngoại giao 2025). Ngắt nhịp: BRK-03 (740 triệu), BRK-01 (dừng hình tấm vé), DLG v11, BRK-04 Cách A/B (p12), BRK-11 ba thứ không giao (p16). Khép vòng: “Tiền mất tật mang” → tiền còn, hộ chiếu còn. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "v00",
    "close": "v20"
  }
};
