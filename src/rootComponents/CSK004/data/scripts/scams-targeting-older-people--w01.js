// scams-targeting-older-people--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "scams-targeting-older-people--w01",
  "hook": "HOOK-19",
  "unit": {
    "audience": "children-protecting-parents-from-scams",
    "slug": "scams-targeting-older-people",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Kịch bản lừa nào hay nhắm vào người cao tuổi?",
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
            "id": "a-r",
            "t": "text",
            "text": "Reng… reng…",
            "x": 60,
            "y": 90,
            "size": 130,
            "at": "l1:Ring",
            "color": "accent",
            "hl": [
              {
                "text": "reng",
                "at": "l1:again"
              }
            ]
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "Hôm qua: “điện lực”",
            "x": 70,
            "y": 300,
            "size": 56,
            "at": "l2:electricity"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "Hôm kia: “trúng xe máy”",
            "x": 70,
            "y": 390,
            "size": 56,
            "at": "l3:motorbike",
            "color": "coral"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "Thật hay giả?",
            "x": 70,
            "y": 490,
            "size": 64,
            "at": "l4:real",
            "color": "accent",
            "hl": [
              {
                "text": "giả",
                "at": "l4:fake"
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
          "say": "Ring, ring. Mum's phone again.",
          "sub": "Reng, reng. Máy mẹ lại đổ chuông."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yesterday, someone from the electricity company.",
          "sub": "Hôm qua, một người xưng bên điện lực."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The day before, someone saying she'd won a motorbike.",
          "sub": "Hôm kia, người báo mẹ trúng thưởng một chiếc xe máy.",
          "keys": [
            "trúng thưởng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Real or fake? Mum can't tell. And you can't answer for her every time.",
          "sub": "Thật hay giả? Mẹ không phân biệt được. Mà bạn đâu nghe máy thay mẹ mọi lúc.",
          "keys": [
            "Thật hay giả"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhac-chuong",
          "offsetMs": 0
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
                  "id": "tu",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone"
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
                "telephone",
                "newspaper"
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
            "at": "l1",
            "caption": "Sáng thứ Hai · nhà ở quê",
            "icon": "telephone"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Mật ngọt chết ruồi”",
            "x": 60,
            "y": 620,
            "size": 64,
            "at": "l4:honey",
            "color": "accent",
            "hl": [
              {
                "text": "chết ruồi",
                "at": "l4:flies"
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
          "say": "Meet Bà Tư, Thảo's mum, keeper of the old home phone.",
          "sub": "Đây là bà Tư, mẹ của Thảo, người giữ chiếc điện thoại bàn.",
          "keys": [
            "bà Tư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And Bác Bình, her husband, who reads the paper beside it.",
          "sub": "Còn đây là bác Bình, chồng bà, ngồi đọc báo ngay cạnh.",
          "keys": [
            "bác Bình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "tu",
          "say": "So many calls lately. Some sweet, some scary. Which ones are real?",
          "sub": "Dạo này lắm cuộc gọi quá. Cuộc thì ngọt, cuộc thì doạ. Biết đâu là thật?",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our elders warn: sweet honey kills flies. And scary calls work just as well.",
          "sub": "Ông bà dặn: “Mật ngọt chết ruồi.” Mà lời doạ cũng hiệu nghiệm chẳng kém.",
          "keys": [
            "Mật ngọt chết ruồi"
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
            "text": "Kẻ gian đóng vai ai?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:roles",
            "hl": [
              {
                "text": "vai ai",
                "at": "l1:play"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Vai đổi theo thời sự",
            "x": 2028,
            "y": 160,
            "size": 50,
            "at": "l2:change"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Mục đích: lấy tiền hoặc thông tin",
            "x": 2028,
            "y": 245,
            "size": 50,
            "at": "l2:aim",
            "color": "accent",
            "hl": [
              {
                "text": "lấy tiền",
                "at": "l2:money"
              }
            ]
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "1 tuần chuông reo · 5 vai",
            "x": 2028,
            "y": 530,
            "size": 52,
            "at": "l4:week",
            "hl": [
              {
                "text": "5 vai",
                "at": "l4:five"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2008,
            "y": 610,
            "w": 315,
            "h": 100,
            "at": "l4:five+400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2343,
            "y": 610,
            "w": 315,
            "h": 100,
            "at": "l4:five+700",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2678,
            "y": 610,
            "w": 315,
            "h": 100,
            "at": "l4:five+1000",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 3013,
            "y": 610,
            "w": 315,
            "h": 100,
            "at": "l4:five+1300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3348,
            "y": 610,
            "w": 315,
            "h": 100,
            "at": "l4:five+1600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Công an",
            "x": 2028,
            "y": 632,
            "size": 44,
            "at": "l4:five+550"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Báo gặp nạn",
            "x": 2363,
            "y": 632,
            "size": 44,
            "at": "l4:five+850"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Nhà mạng",
            "x": 2698,
            "y": 632,
            "size": 44,
            "at": "l4:five+1150"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Trúng thưởng",
            "x": 3033,
            "y": 632,
            "size": 44,
            "at": "l4:five+1450"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Chuyển nhầm",
            "x": 3368,
            "y": 632,
            "size": 44,
            "at": "l4:five+1750"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Công an tỉnh Phú Thọ (2026); Bộ Công an (2023) — Cổng TTĐT Chính phủ",
            "x": 2028,
            "y": 330,
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
          "say": "So which roles do scammers play when they call older people?",
          "sub": "Vậy kẻ gian hay đóng vai gì khi gọi cho người cao tuổi?",
          "keys": [
            "đóng vai gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The roles change with the news. The aim never does: money, or the details to get into an account.",
          "sub": "Vai đổi theo thời sự, mục đích thì không: lấy tiền, hoặc lấy thông tin để vào tài khoản.",
          "keys": [
            "mục đích thì không"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Police warned about these phone tricks back in twenty twenty-three. They're still around.",
          "sub": "Bộ Công an đã cảnh báo các thủ đoạn này từ năm 2023, đến nay vẫn còn gặp."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So, one week at the home phone. Five roles, one per day.",
          "sub": "Vậy theo chiếc điện thoại bàn qua một tuần. Năm vai, mỗi ngày một vai."
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
            "text": "① Thứ Hai · “Cán bộ điều tra”",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:investigator"
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
                  "id": "tu",
                  "side": "center",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "telephone",
                "identification-card"
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
            "at": "l1:call",
            "caption": "Thứ Hai · 10:00",
            "icon": "police-officer"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Bịa vụ án dính tới mình",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l2:case"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Doạ dẫm",
            "x": 3996,
            "y": 250,
            "size": 54,
            "at": "l2:threatening",
            "color": "coral"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "“Không được kể với ai”",
            "x": 3996,
            "y": 330,
            "size": 50,
            "at": "l3:anyone",
            "color": "coral",
            "hl": [
              {
                "text": "kể với ai",
                "at": "l3:anyone"
              }
            ]
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "→ ra ngân hàng “chứng minh trong sạch”",
            "x": 3996,
            "y": 420,
            "size": 40,
            "at": "l4:bank"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Monday, ten a.m. A call from a man claiming to be an investigator.",
          "sub": "Thứ Hai, mười giờ sáng. Một người gọi, xưng là cán bộ điều tra."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "He says Bà Tư's ID number was used to open an account in a criminal case. Threatening, of course.",
          "sub": "Hắn nói số căn cước của bà Tư bị dùng để mở tài khoản trong một vụ án. Giọng đầy đe doạ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "tu",
          "say": "He told me not to tell anyone. Not even my children.",
          "sub": "Anh ấy dặn không được kể với ai. Kể cả con cái.",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "tu",
          "say": "I'll go to the bank and transfer the money, to prove I'm innocent.",
          "sub": "Thôi để tôi ra ngân hàng chuyển tiền, chứng minh mình trong sạch.",
          "face": "sad"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Luckily, her daughter Thảo called home right then.",
          "sub": "May mà con gái là Thảo gọi về đúng lúc."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhac-chuong",
          "offsetMs": 0
        }
      ],
      "ref": "p3,p5"
    },
    {
      "id": "s04",
      "module": "BRK-01",
      "data": {
        "illus": "telephone",
        "around": [
          "shushing-face",
          "police-officer"
        ],
        "label": "Dấu hiệu rõ nhất",
        "note": "Lời doạ kèm lời dặn giữ bí mật"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Freeze. This is the clearest sign.",
          "sub": "Dừng hình. Đây là dấu hiệu rõ nhất."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A threat, plus keep it secret.",
          "sub": "Lời doạ, kèm lời dặn giữ bí mật.",
          "keys": [
            "giữ bí mật"
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
            "fit": "C",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "c-5",
            "t": "text",
            "text": "Triệu tập qua điện thoại:",
            "x": 3996,
            "y": 510,
            "size": 46,
            "at": "l1:summon"
          },
          {
            "id": "c-6",
            "t": "text",
            "text": "không có nghĩa vụ phải đến",
            "x": 3996,
            "y": 580,
            "size": 46,
            "at": "l2:duty",
            "color": "accent",
            "hl": [
              {
                "text": "không có nghĩa vụ",
                "at": "l2:duty"
              }
            ]
          },
          {
            "id": "c-7",
            "t": "text",
            "text": "Thủ tục → đến trụ sở",
            "x": 3996,
            "y": 665,
            "size": 46,
            "at": "l3:station",
            "hl": [
              {
                "text": "trụ sở",
                "at": "l3:station"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật (hỏi đáp 16/01/2024); Công an Thái Nguyên (05/02/2026)",
            "x": 3996,
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
          "say": "A legal Q and A cites a rule: investigators are banned from phoning people to summon them.",
          "sub": "Bài hỏi đáp của Thư viện Pháp luật dẫn quy định nghiêm cấm điều tra viên gọi điện để triệu tập người dân."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A summons by phone or text alone creates no duty to go.",
          "sub": "Chỉ nhận triệu tập qua điện thoại, tin nhắn thì không có nghĩa vụ phải đến.",
          "keys": [
            "không có nghĩa vụ phải đến"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And Thái Nguyên police: no ID updates for children by phone. For paperwork, go to the police station in person.",
          "sub": "Công an Thái Nguyên khẳng định không cập nhật căn cước trẻ em qua điện thoại. Cần thủ tục thì đến trực tiếp trụ sở công an."
        }
      ],
      "ref": "p4"
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
            "text": "② Thứ Ba · “Cháu đang cấp cứu”",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:hospital"
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
                  "id": "binh",
                  "side": "center",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "telephone",
                "ambulance"
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
            "at": "l1:Bác",
            "caption": "Thứ Ba · 15:00",
            "icon": "ambulance"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Xưng: giáo viên, y tế",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l3:teacher"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Đòi: tiền viện phí, gấp",
            "x": 5964,
            "y": 250,
            "size": 50,
            "at": "l3:fees",
            "color": "coral",
            "hl": [
              {
                "text": "gấp",
                "at": "l3:now"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "“Không kịp gọi ai đâu”",
            "x": 5964,
            "y": 340,
            "size": 52,
            "at": "l3:time",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tuesday, three p.m. Bác Bình picks up. The caller says grandson Bin fell at school and is in hospital.",
          "sub": "Thứ Ba, ba giờ chiều. Bác Bình nhấc máy. Người gọi báo cháu Bin ngã ở trường, đang cấp cứu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Hospital? Which account? I'll send it right away!",
          "sub": "Cấp cứu à? Số tài khoản nào? Tôi chuyển ngay!",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The caller poses as a teacher or medical worker, wants hospital fees now, and says there's no time to call anyone.",
          "sub": "Kẻ gọi xưng giáo viên hay nhân viên y tế, đòi chuyển ngay viện phí, giục “không kịp gọi ai đâu”."
        }
      ],
      "ref": "p7,p9"
    },
    {
      "id": "s07",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Thứ Ba · cuộc gọi báo cháu",
        "actors": [
          {
            "id": "binh",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Chuyển viện phí ngay",
          "why": "Kịch bản đánh vào nỗi lo cho cháu; người gọi giục để ông không kịp hỏi ai.",
          "rule": "Cúp máy, gọi bố mẹ cháu hoặc giáo viên"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "binh",
          "say": "Right, I'm opening the bank app now.",
          "sub": "Được, tôi mở ứng dụng ngân hàng đây.",
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
          "say": "The more they rush you, the more you must call family first.",
          "sub": "Càng bị giục “không kịp gọi ai”, càng phải gọi người thân trước.",
          "keys": [
            "gọi người thân trước"
          ]
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
          "who": "binh",
          "say": "I'll call you back. Click. Now, Bin's mum, on the saved number.",
          "sub": "Để tôi gọi lại. Cạch. Giờ gọi mẹ cháu Bin, số đã lưu.",
          "phase": "redo",
          "face": "neutral",
          "pose": "phone"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. Bin's parents or his class teacher, before anything else.",
          "sub": "Đúng. Gọi bố mẹ cháu hoặc giáo viên chủ nhiệm trước đã.",
          "phase": "redo",
          "keys": [
            "giáo viên chủ nhiệm"
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
            "id": "d-4",
            "t": "text",
            "text": "Gọi video Deepfake: giả người quen",
            "x": 5964,
            "y": 450,
            "size": 42,
            "at": "l1:Deepfake",
            "hl": [
              {
                "text": "Deepfake",
                "at": "l1:Deepfake"
              }
            ]
          },
          {
            "id": "d-5",
            "t": "text",
            "text": "“Bắt cóc online” → đòi tiền chuộc",
            "x": 5964,
            "y": 530,
            "size": 42,
            "at": "l2:kidnapping",
            "color": "coral"
          },
          {
            "id": "d-6",
            "t": "text",
            "text": "Thấy mặt, nghe giọng ≠ người thân",
            "x": 5964,
            "y": 615,
            "size": 46,
            "at": "l3:face",
            "color": "accent",
            "hl": [
              {
                "text": "≠ người thân",
                "at": "l3:really"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Bộ Công an (2023); hội thảo giao dịch ngân hàng an toàn, TPHCM (08/03/2026)",
            "x": 5964,
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
          "say": "A twenty twenty-six seminar in Ho Chi Minh City also warns of Deepfake video calls, faking a familiar face.",
          "sub": "Hội thảo tại TPHCM năm 2026 còn nêu kiểu gọi video Deepfake, giả người quen hoặc người có uy tín."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And online kidnapping, to force families to pay a ransom.",
          "sub": "Và kiểu “bắt cóc online” để buộc gia đình chuyển tiền chuộc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So a face or voice on screen may not really be your relative.",
          "sub": "Nên thấy mặt hay nghe giọng quen trên màn hình cũng chưa chắc là người thân thật.",
          "keys": [
            "chưa chắc là người thân thật"
          ]
        }
      ],
      "ref": "p8"
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
            "text": "③ Thứ Tư · “Nhà mạng”, “ngân hàng”",
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
                "mobile-phone",
                "link"
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
            "at": "l1:Wednesday",
            "caption": "Thứ Tư · tin nhắn và cuộc gọi",
            "icon": "mobile-phone"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "“Nâng cấp sim”, đóng cước",
            "x": 7932,
            "y": 170,
            "size": 48,
            "at": "l1:upgrade"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "“Khoá sim vì chưa chuẩn hoá”",
            "x": 7932,
            "y": 250,
            "size": 44,
            "at": "l2:locked",
            "color": "coral"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Tạo lòng tin → đòi mã OTP",
            "x": 7932,
            "y": 340,
            "size": 48,
            "at": "l2:trust",
            "color": "accent",
            "hl": [
              {
                "text": "mã OTP",
                "at": "l2:OTP"
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
          "say": "Wednesday. A friendly phone company voice offers to upgrade her SIM, or help pay the bill.",
          "sub": "Thứ Tư. Một giọng “nhà mạng” rất ân cần, hướng dẫn nâng cấp sim, đóng cước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Or warns the SIM will be locked for missing details. Once there's trust, they ask for the OTP code.",
          "sub": "Hoặc báo khoá sim vì chưa chuẩn hoá thông tin. Tạo được lòng tin rồi, chúng đòi mã OTP.",
          "keys": [
            "đòi mã OTP"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "tu",
          "say": "Now a message from the bank. Collect my biometrics? Send a photo of my face?",
          "sub": "Giờ lại tin nhắn “ngân hàng”. Thu thập sinh trắc học à? Gửi ảnh khuôn mặt?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A twenty twenty-four warning: fake bank staff ask for ID photos and face photos, sometimes a video call.",
          "sub": "Cảnh báo năm 2024: kẻ giả nhân viên ngân hàng xin ảnh căn cước, ảnh khuôn mặt, có khi gọi video."
        }
      ],
      "ref": "p11,p12"
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
          }
        ],
        "items": [
          {
            "id": "e-4",
            "t": "text",
            "text": "Link lạ → cài ứng dụng giả",
            "x": 7932,
            "y": 450,
            "size": 48,
            "at": "l1:link",
            "color": "coral"
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "Mã độc: chiếm điện thoại, lấy tiền",
            "x": 7932,
            "y": 535,
            "size": 44,
            "at": "l1:control",
            "hl": [
              {
                "text": "lấy tiền",
                "at": "l1:money"
              }
            ]
          },
          {
            "id": "e-6",
            "t": "text",
            "text": "Không mở link, gọi con trước",
            "x": 7932,
            "y": 630,
            "size": 52,
            "at": "l2:call",
            "color": "accent",
            "hl": [
              {
                "text": "gọi con trước",
                "at": "l2:child"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Cổng TTĐT Chính phủ (04/07/2024); Thư viện Pháp luật (09/11/2024)",
            "x": 7932,
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
          "say": "Then a strange link to install an app. Maybe a fake one with malware, to control the phone and take the money.",
          "sub": "Rồi dẫn vào link lạ để cài ứng dụng, có thể là ứng dụng giả chứa mã độc, giúp chúng kiểm soát điện thoại, lấy tiền."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So: don't open the link, and call your child first.",
          "sub": "Vậy: không mở link, gọi cho con trước.",
          "keys": [
            "gọi cho con trước"
          ]
        }
      ],
      "ref": "p12"
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
            "at": "l4",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Năm · “Trúng thưởng”",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Thursday"
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
                  "id": "tu",
                  "side": "left",
                  "pose": "phone",
                  "face": "happy"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "wrapped-gift",
                "motor-scooter"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "tu",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
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
            "at": "l1:prize",
            "caption": "Thứ Năm · tin vui bất ngờ",
            "icon": "wrapped-gift"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Xổ số, du lịch, bưu điện gọi",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l4:post"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Đòi: mua hàng, chuyển trước, nhập link",
            "x": 60,
            "y": 1340,
            "size": 40,
            "at": "l4:buy",
            "color": "coral"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Đóng phí để nhận xe",
            "x": 60,
            "y": 1430,
            "size": 48,
            "at": "l4:first",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thursday, good news for once. A prize!",
          "sub": "Thứ Năm, cuối cùng cũng có tin vui. Trúng thưởng!"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "tu",
          "say": "A motorbike! I just pay a small fee to receive it. Better than losing the whole bike!",
          "sub": "Trúng xe máy! Chỉ cần đóng ít phí là nhận xe. Mất ít còn hơn mất cả chiếc xe!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Did you even buy a ticket?",
          "sub": "Bà có mua vé số nào đâu?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lottery, travel or post office callers announce a prize or a parcel, then ask you to buy, pay first, or enter details on a link.",
          "sub": "Kẻ giả công ty xổ số, du lịch, bưu điện báo trúng thưởng hay có bưu phẩm, rồi đòi mua hàng, chuyển tiền trước, nhập thông tin vào link."
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s12",
      "module": "BRK-04",
      "data": {
        "title": "Đóng ít phí nhận xe?",
        "wrong": "Mất ít còn hơn mất cả chiếc xe",
        "right": "Trả trước mới nhận quà: gần như chắc không có quà",
        "wrongIllus": "motor-scooter",
        "rightIllus": "money-with-wings"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A small fee beats losing the bike?",
          "sub": "Mất ít còn hơn mất cả chiếc xe?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Pay first for a gift? There's almost surely no gift.",
          "sub": "Phải trả trước mới được nhận quà thì gần như chắc không có quà.",
          "keys": [
            "không có quà"
          ]
        }
      ],
      "ref": "p15,p16"
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
            "id": "f-4",
            "t": "text",
            "text": "Đòi phí trước = cách chiếm tiền",
            "x": 60,
            "y": 1540,
            "size": 46,
            "at": "l1:fee",
            "color": "accent",
            "hl": [
              {
                "text": "chiếm tiền",
                "at": "l1:take"
              }
            ]
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "Không mua vé, vẫn “trúng”?",
            "x": 60,
            "y": 1630,
            "size": 50,
            "at": "l2:ticket",
            "hl": [
              {
                "text": "vẫn “trúng”",
                "at": "l2:won"
              }
            ]
          },
          {
            "id": "f-6",
            "t": "text",
            "text": "→ càng đáng ngờ",
            "x": 100,
            "y": 1715,
            "size": 50,
            "at": "l2:suspicious",
            "color": "coral"
          },
          {
            "id": "f-ca",
            "t": "text",
            "text": "“Mật ngọt chết ruồi”",
            "x": 900,
            "y": 1780,
            "size": 50,
            "at": "l3:honey",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "According to these warnings, the fee itself is how scammers take your money.",
          "sub": "Theo các cảnh báo, đòi đóng phí hay chuyển tiền trước chính là cách kẻ gian chiếm đoạt tiền."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No ticket, no contest, and you still won? Even more suspicious.",
          "sub": "Không mua vé, không dự thi mà vẫn “trúng”? Càng đáng ngờ.",
          "keys": [
            "Càng đáng ngờ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sweet honey kills flies.",
          "sub": "Mật ngọt chết ruồi."
        }
      ],
      "ref": "p15,p16"
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
            "text": "⑤ Thứ Sáu · “Chuyển nhầm”",
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
                  "id": "binh",
                  "side": "center",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "mobile-phone",
                "money-bag"
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
            "at": "l1:arrives",
            "caption": "Thứ Sáu · tiền lạ vào tài khoản",
            "icon": "money-bag"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Tiền lạ vào → đòi trả",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l3:back"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "“khoản vay” lãi cắt cổ, doạ",
            "x": 2028,
            "y": 1345,
            "size": 46,
            "at": "l3:loan",
            "color": "coral",
            "hl": [
              {
                "text": "lãi cắt cổ",
                "at": "l3:interest"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Tự chuyển trả theo lời gọi",
            "x": 2028,
            "y": 1450,
            "size": 46,
            "at": "l4:yourself",
            "color": "muted"
          },
          {
            "id": "g-3x",
            "t": "strike",
            "over": "g-3",
            "at": "l4:instead"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Báo con + báo ngân hàng",
            "x": 2028,
            "y": 1540,
            "size": 56,
            "at": "l4:tell",
            "color": "accent",
            "hl": [
              {
                "text": "báo ngân hàng",
                "at": "l4:bank"
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
          "say": "Friday. Money from a stranger arrives in Bác Bình's account.",
          "sub": "Thứ Sáu. Một khoản tiền lạ chuyển vào tài khoản của bác Bình."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Someone sent this by mistake? Better send it straight back.",
          "sub": "Ai chuyển nhầm à? Chuyển trả ngay cho người ta thôi.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Careful. In this trick, they then demand it back as a loan with crushing interest, with threats.",
          "sub": "Khoan vội. Ở kiểu này, kẻ gian đòi trả lại như một khoản vay lãi cắt cổ, kèm đe doạ, quấy nhiễu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Don't send it back yourself. Tell your child and the bank instead.",
          "sub": "Đừng tự chuyển trả theo lời người gọi. Hãy báo con và báo ngân hàng.",
          "keys": [
            "báo con và báo ngân hàng"
          ]
        }
      ],
      "ref": "p14"
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
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Bảy · 5 dấu hiệu chung",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Saturday",
            "hl": [
              {
                "text": "5 dấu hiệu",
                "at": "l2:five"
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
              "set": "home",
              "actors": [
                {
                  "id": "tu",
                  "side": "left"
                },
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "walk",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "binh",
                  "side": "right"
                }
              ],
              "props": [
                "memo"
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
            "at": "l1:home",
            "caption": "Thứ Bảy · Thảo về quê",
            "icon": "house"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l3:unknown",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1242,
            "size": 56,
            "at": "l3:unknown+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Số lạ, tự xưng",
            "x": 4061,
            "y": 1252,
            "size": 42,
            "at": "l3:unknown+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1350,
            "w": 44,
            "h": 44,
            "at": "l4:sudden",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1332,
            "size": 56,
            "at": "l4:sudden+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Tin gấp: dữ hoặc vui",
            "x": 4061,
            "y": 1342,
            "size": 42,
            "at": "l4:sudden+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1440,
            "w": 44,
            "h": 44,
            "at": "l4:threats",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1422,
            "size": 56,
            "at": "l4:threats+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Doạ, hoặc bảo giữ bí mật",
            "x": 4061,
            "y": 1432,
            "size": 42,
            "at": "l4:threats+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1530,
            "w": 44,
            "h": 44,
            "at": "l5:money",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1512,
            "size": 56,
            "at": "l5:money+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Đòi tiền, mã, ảnh giấy tờ",
            "x": 4061,
            "y": 1522,
            "size": 42,
            "at": "l5:money+200"
          },
          {
            "id": "h-c4",
            "t": "box",
            "x": 3996,
            "y": 1620,
            "w": 44,
            "h": 44,
            "at": "l6:link",
            "stroke": 5
          },
          {
            "id": "h-k4",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1602,
            "size": 56,
            "at": "l6:link+600",
            "color": "accent"
          },
          {
            "id": "h-l4",
            "t": "text",
            "text": "Gửi link, bảo cài ứng dụng",
            "x": 4061,
            "y": 1612,
            "size": 42,
            "at": "l6:link+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Saturday. Thảo comes home and hears the whole week.",
          "sub": "Thứ Bảy. Thảo về quê, nghe kể cả tuần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Five roles, Mum. But they all share five signs.",
          "sub": "Năm vai mẹ ạ. Nhưng đều chung năm dấu hiệu.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One: an unknown number claiming to be an office, a bank, or news about family.",
          "sub": "Một: số lạ, tự xưng cơ quan, ngân hàng hay người báo tin về người thân.",
          "keys": [
            "số lạ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Two: sudden bad or good news, in a hurry. Three: threats, or keep it secret.",
          "sub": "Hai: tin dữ hoặc tin vui bất ngờ, kèm gấp gáp. Ba: doạ dẫm hoặc dặn giữ bí mật."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Four: transfer money, read out the OTP, send ID photos or account details.",
          "sub": "Bốn: đòi chuyển tiền, đọc mã OTP, gửi ảnh giấy tờ hay thông tin tài khoản."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Five: a link, or an app to install.",
          "sub": "Năm: gửi đường link hoặc bảo cài ứng dụng.",
          "keys": [
            "gửi đường link"
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
            "text": "⑦ Chủ nhật · Tấm thẻ cạnh máy",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:card"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "tu",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "props": [
                "telephone",
                "memo"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "tu",
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
            "caption": "Chủ nhật · tập dượt",
            "icon": "memo"
          },
          {
            "id": "i-card",
            "t": "box",
            "x": 5964,
            "y": 1250,
            "w": 760,
            "h": 300,
            "at": "l1:card",
            "stroke": 6
          },
          {
            "id": "i-c1",
            "t": "text",
            "text": "5 dấu hiệu · chữ to",
            "x": 6004,
            "y": 1280,
            "size": 50,
            "at": "l1:big"
          },
          {
            "id": "i-c2",
            "t": "text",
            "text": "Gặp 1 dấu hiệu:",
            "x": 6004,
            "y": 1370,
            "size": 50,
            "at": "l2:sign"
          },
          {
            "id": "i-c3",
            "t": "text",
            "text": "cúp máy, gọi Thảo",
            "x": 6004,
            "y": 1450,
            "size": 60,
            "at": "l2:hang",
            "color": "accent",
            "hl": [
              {
                "text": "gọi Thảo",
                "at": "l2:call"
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
          "say": "Sunday. Thảo makes a card next to the home phone, with the five signs in big letters.",
          "sub": "Chủ nhật. Thảo làm một tấm thẻ dán cạnh điện thoại bàn, viết năm dấu hiệu bằng chữ to."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Last line: spot one sign, hang up, call Thảo.",
          "sub": "Dòng cuối: gặp một dấu hiệu, cúp máy, gọi Thảo.",
          "keys": [
            "cúp máy, gọi Thảo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Hello, this is the bank. Your account will be locked. Read me the code, quickly!",
          "sub": "A lô, ngân hàng đây. Tài khoản bác sắp bị khoá. Đọc mã cho tôi, nhanh lên!",
          "face": "stern"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "tu",
          "say": "Strange number, in a hurry, asking for a code. Three signs! I'm hanging up.",
          "sub": "Số lạ, gấp gáp, đòi mã. Ba dấu hiệu! Tôi cúp máy đây.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then she rings Thảo. Practice done.",
          "sub": "Rồi bà gọi cho Thảo. Tập dượt xong."
        }
      ],
      "ref": "p18"
    },
    {
      "id": "s17",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Nhớ 5 dấu hiệu, không cần nhớ hết",
        "hl": "5 dấu hiệu",
        "sub": "Mọi kịch bản lừa đều lộ ra qua vài dấu hiệu chung"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Remember five signs.",
          "sub": "Nhớ năm dấu hiệu."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Not every single scam story.",
          "sub": "Không cần nhớ hết mọi kịch bản.",
          "keys": [
            "Không cần nhớ hết"
          ]
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
            "text": "Thứ Hai tuần sau · 10:00",
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
                  "id": "tu",
                  "side": "left",
                  "pose": "phone",
                  "face": "happy"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "telephone",
                "memo"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "tu",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Ring",
            "caption": "Thứ Hai tuần sau · 10:00",
            "icon": "telephone"
          },
          {
            "id": "j-r",
            "t": "text",
            "text": "Reng… reng…",
            "x": 7932,
            "y": 1250,
            "size": 80,
            "at": "l1:Ring",
            "color": "accent"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "nhìn thẻ → cúp máy ✓",
            "x": 7932,
            "y": 1370,
            "size": 52,
            "at": "l2:card",
            "hl": [
              {
                "text": "cúp máy",
                "at": "l2:hang"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Mật ngọt chết ruồi”",
            "x": 7932,
            "y": 1480,
            "size": 54,
            "at": "l3:honey",
            "color": "accent",
            "hl": [
              {
                "text": "chết ruồi",
                "at": "l3:flies"
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
          "say": "Next Monday, ten a.m. Ring, ring.",
          "sub": "Thứ Hai tuần sau, mười giờ sáng. Reng, reng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "tu",
          "say": "A prize again? I look at my card, and I hang up. Then I call Thảo.",
          "sub": "Lại trúng thưởng à? Nhìn thẻ, cúp máy. Rồi gọi Thảo.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sweet honey kills flies. But this fly reads the card first.",
          "sub": "“Mật ngọt chết ruồi.” Nhưng con ruồi này đọc thẻ trước đã.",
          "keys": [
            "đọc thẻ trước"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhac-chuong",
          "offsetMs": 900
        }
      ],
      "ref": "p18,intro"
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
            "at": "l1:police",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:signs",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l3:Today",
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
            "at": "l1:police"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 4696,
            "y": 1260,
            "at": "l2:signs"
          },
          {
            "id": "j-do",
            "t": "text",
            "text": "Hôm nay: viết thẻ 5 dấu hiệu",
            "x": 7932,
            "y": 1590,
            "size": 46,
            "at": "l3:Today",
            "hl": [
              {
                "text": "thẻ 5 dấu hiệu",
                "at": "l3:card"
              }
            ]
          },
          {
            "id": "j-do2",
            "t": "text",
            "text": "→ dán cạnh chỗ để điện thoại",
            "x": 7972,
            "y": 1660,
            "size": 42,
            "at": "l3:phone"
          },
          {
            "id": "j-nx",
            "t": "text",
            "text": "Bài tiếp: quy tắc gọi lại",
            "x": 7932,
            "y": 1735,
            "size": 42,
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
          "say": "So: fake police, a grandchild in trouble, bank or phone staff, prizes, wrong transfers.",
          "sub": "Tóm lại: giả công an, báo con cháu gặp nạn, giả ngân hàng, nhà mạng, trúng thưởng, chuyển nhầm tiền."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Every role shares the same signs: strange number, hurry, threats or secrets, money or codes, links or apps.",
          "sub": "Vai nào cũng chung dấu hiệu: số lạ tự xưng, tin gấp, doạ hoặc bảo giữ bí mật, đòi tiền hay mã, gửi link hay ứng dụng.",
          "keys": [
            "chung dấu hiệu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Today: write the five signs on a card, and stick it where your parents keep the phone.",
          "sub": "Việc làm ngay: viết năm dấu hiệu lên một tấm thẻ, dán cạnh chỗ cha mẹ để điện thoại.",
          "keys": [
            "năm dấu hiệu lên một tấm thẻ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Investment scams and fake money recovery services have their own lessons.",
          "sub": "Lừa đầu tư, sàn giả, và “dịch vụ lấy lại tiền bị lừa” có bài riêng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Spotting signs is half the job. Next: a family rule for what to do right then.",
          "sub": "Nhận ra dấu hiệu mới là một nửa. Bài tiếp: quy tắc chung của cả nhà để biết làm gì ngay lúc đó.",
          "keys": [
            "một nửa"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p20,p21"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "Your mother sees her son's face on a video call asking for money, what should she do?",
        "options": [
          "Ask the caller to sing a song and then send half the money",
          "Hang up and call her son back on the number she already saved",
          "Send the money because seeing his face proves the call is real"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "video-camera",
        "why": "Bài nói thấy mặt hay nghe giọng quen chưa chắc là người thân thật vì có Deepfake. Mẹ nên cúp máy và gọi lại bằng số đã lưu."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Your mother sees her son's face on a video call asking for money, what should she do?",
          "sub": "Mẹ bạn thấy mặt con trai trên cuộc gọi video xin tiền, mẹ nên làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Hang up and call her son back on the number she already saved.",
          "sub": "Cúp máy, gọi lại con trai bằng số đã lưu sẵn."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "With Deepfake, a familiar face is not proof.",
          "sub": "Có Deepfake, gương mặt quen chưa phải bằng chứng."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[16]"
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Năm dấu hiệu. Còn bốn mươi câu hỏi",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Five signs on a card. Then the forty questions below.",
          "sub": "Năm dấu hiệu lên thẻ. Rồi bốn mươi câu hỏi bên dưới nhé.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân (#136) + biến thể #144. HOOK-19: chuông điện thoại bàn trước lời (nhac-chuong), quay lại ở cảnh khép. Dòng thời gian: MỘT TUẦN CHUÔNG REO ở nhà bố mẹ (thứ Hai giả công an → thứ Ba báo cháu Bin cấp cứu + “Khoan đã!” → thứ Tư nhà mạng/sinh trắc học → thứ Năm trúng thưởng → thứ Sáu chuyển nhầm → thứ Bảy Thảo về, năm dấu hiệu → Chủ nhật tấm thẻ + tập dượt → thứ Hai sau chuông reo lại). Đổi tên: bà Hạnh → Bà Tư; ông Phúc → Bác Bình; chị Thu → Thảo (Bin chỉ được nhắc tên). Tục ngữ: “Mật ngọt chết ruồi”. BRK-01 (dấu hiệu giả công an), BRK-04 (đóng phí nhận quà), BRK-02 (năm dấu hiệu). Câu đố questions[16]. Lưu ý chung cuối bài (#133).",
  "loop": {
    "open": "s01",
    "close": "s18"
  }
};
