// vn-property-when-abroad-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "vn-property-when-abroad-overview--w01",
  "unit": {
    "audience": "emigrants-keeping-property-in-vietnam",
    "slug": "vn-property-when-abroad-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Định cư nước ngoài rồi, nhà đất ở Việt Nam xử lý thế nào?",
    "series": "Nhà đất ở quê khi mình ở nước ngoài — cho người định cư giữ, cho thuê, chuyển giao tài sản đúng luật"
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
          },
          {
            "at": 0,
            "fit": [
              "a-book",
              "a-t"
            ],
            "zoom": 1.3,
            "ms": 0
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "a-book",
            "t": "illus",
            "name": "closed-book",
            "x": 70,
            "y": 90,
            "size": 200,
            "at": "l1:red"
          },
          {
            "id": "a-t",
            "t": "text",
            "text": "Sổ đỏ",
            "x": 300,
            "y": 100,
            "size": 120,
            "at": "l1:certificate",
            "color": "coral",
            "hl": [
              {
                "text": "Sổ đỏ",
                "at": "l1:certificate"
              }
            ]
          },
          {
            "id": "a-n",
            "t": "text",
            "text": "đứng tên: Bà Tư",
            "x": 310,
            "y": 240,
            "size": 52,
            "at": "l3:name"
          },
          {
            "id": "a-lug",
            "t": "illus",
            "name": "luggage",
            "x": 700,
            "y": 120,
            "size": 130,
            "at": "l2:suitcase"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A red book. Not a novel, but a land use right certificate.",
          "sub": "Một cuốn sổ đỏ. Không phải tiểu thuyết, mà là giấy chứng nhận quyền sử dụng đất.",
          "keys": [
            "sổ đỏ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It lies in an open suitcase, between scarves and a jar of fish sauce.",
          "sub": "Nó nằm trong chiếc vali đang mở, giữa mấy chiếc khăn và một hũ nước mắm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The name on it: Bà Tư.",
          "sub": "Tên trên sổ: Bà Tư."
        }
      ],
      "beats": {
        "after": 300
      },
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
            "x": 920,
            "y": 130,
            "w": 720,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "tu",
                  "side": "center",
                  "pose": "hold",
                  "face": "worried",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "luggage",
                "closed-book"
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai · sáu ngày trước khi bay",
            "icon": "luggage"
          },
          {
            "id": "a-w0",
            "t": "text",
            "text": "• Sợ mất quyền",
            "x": 60,
            "y": 380,
            "size": 46,
            "at": "l3:losing",
            "color": "coral"
          },
          {
            "id": "a-w1",
            "t": "text",
            "text": "• Người thân tự ý bán",
            "x": 60,
            "y": 450,
            "size": 46,
            "at": "l3:relatives"
          },
          {
            "id": "a-w2",
            "t": "text",
            "text": "• Giấy tờ từ xa",
            "x": 60,
            "y": 520,
            "size": 46,
            "at": "l3:paperwork",
            "hl": [
              {
                "text": "từ xa",
                "at": "l3:afar"
              }
            ]
          },
          {
            "id": "a-age",
            "t": "text",
            "text": "Tuổi 35–65, nhà đất ở Việt Nam",
            "x": 60,
            "y": 610,
            "size": 34,
            "at": "l4:thirty five",
            "color": "muted"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Lá rụng về cội”",
            "x": 920,
            "y": 640,
            "size": 54,
            "at": "l5:root",
            "color": "accent",
            "hl": [
              {
                "text": "về cội",
                "at": "l5:root"
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
          "say": "Meet Bà Tư. On Sunday she flies abroad to live with her daughter.",
          "sub": "Đây là Bà Tư. Chủ nhật này bà bay sang nước ngoài ở với con gái.",
          "keys": [
            "Bà Tư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "tu",
          "say": "Where I go, my red book goes. But who will mind the house?",
          "sub": "Bà đi đâu, sổ đỏ theo đó. Mà ai trông nhà đây?",
          "face": "worried",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Her worries are the classic three: losing her rights, relatives selling, paperwork from afar.",
          "sub": "Ba nỗi lo kinh điển: mất quyền, người thân tự ý bán, không biết làm giấy tờ từ xa.",
          "keys": [
            "mất quyền"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Typical for people from thirty five to sixty five, with land at home and a ticket abroad.",
          "sub": "Nỗi lo quen của người từ 35 đến 65 tuổi, có nhà đất đứng tên ở Việt Nam, sắp sang nước ngoài hoặc đã định cư."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: leaves fall back to the root. The house will wait. But who minds it?",
          "sub": "Ông bà nói: “Lá rụng về cội.” Nhà vẫn đợi. Nhưng ai trông?",
          "keys": [
            "Lá rụng về cội"
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
            "text": "Ở xa, nhà đất xử lý sao?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:house",
            "hl": [
              {
                "text": "xử lý sao",
                "at": "l1:happens"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "1. Mình còn quyền gì?",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:rights",
            "color": "accent"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "2. Ai làm thay mình?",
            "x": 2028,
            "y": 245,
            "size": 52,
            "at": "l3:acts"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "3. Giữ, cho thuê hay bán?",
            "x": 2028,
            "y": 320,
            "size": 52,
            "at": "l3:keep"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: ký vội trước giờ bay",
            "x": 2028,
            "y": 420,
            "size": 46,
            "at": "l4:rush",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l4:plane"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: trả lời đúng thứ tự",
            "x": 2028,
            "y": 500,
            "size": 54,
            "at": "l4:order",
            "color": "accent",
            "hl": [
              {
                "text": "đúng thứ tự",
                "at": "l4:order"
              }
            ]
          },
          {
            "id": "b-a1",
            "t": "text",
            "text": "1 → quốc tịch, Luật Đất đai 2024",
            "x": 2928,
            "y": 180,
            "size": 38,
            "at": "l5:nationality"
          },
          {
            "id": "b-a2",
            "t": "text",
            "text": "2 → uỷ quyền",
            "x": 2928,
            "y": 250,
            "size": 38,
            "at": "l5:authority"
          },
          {
            "id": "b-a3",
            "t": "text",
            "text": "3 → đọc bài thuê hay bán",
            "x": 2928,
            "y": 320,
            "size": 38,
            "at": "l6:lesson"
          },
          {
            "id": "b-k",
            "t": "text",
            "text": "Đỡ ký giấy rồi phải gỡ",
            "x": 2928,
            "y": 420,
            "size": 44,
            "at": "l6:undo",
            "color": "coral",
            "hl": [
              {
                "text": "phải gỡ",
                "at": "l6:undo"
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
          "say": "So you live abroad. What happens to your house and land in Vietnam?",
          "sub": "Vậy định cư nước ngoài rồi, nhà đất ở Việt Nam xử lý thế nào?",
          "keys": [
            "xử lý thế nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three questions untie the knot. One: what rights do I keep?",
          "sub": "Ba câu hỏi gỡ nút thắt. Một: mình còn quyền gì?",
          "keys": [
            "Ba câu hỏi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: who acts for me? Three: do I keep, rent, or sell?",
          "sub": "Hai: ai làm thay mình? Ba: giữ, cho thuê hay bán?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not signing in a rush before the plane. But answering in the right order.",
          "sub": "Không phải ký vội trước giờ bay, mà là trả lời đúng thứ tự.",
          "keys": [
            "đúng thứ tự"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Question one hangs on nationality and the Land Law 2024. Question two is about authority.",
          "sub": "Câu một nằm ở quốc tịch và Luật Đất đai 2024. Câu hai là chuyện uỷ quyền."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Question three picks your next lesson. In order, you won't sign papers you must later undo.",
          "sub": "Câu ba quyết định bạn đọc bài cho thuê hay bài bán. Đi đúng thứ tự, khỏi ký vội giấy tờ rồi tốn công gỡ.",
          "keys": [
            "tốn công gỡ"
          ]
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Luật đất đai đang chuyển động",
        "points": [
          {
            "label": "2024",
            "sub": "Luật Đất đai 2024",
            "illus": "page-facing-up"
          },
          {
            "label": "11/12/2025",
            "sub": "Nghị quyết 254/2025/QH15",
            "illus": "classical-building"
          },
          {
            "label": "01/01/2026",
            "sub": "Nghị quyết có hiệu lực",
            "illus": "spiral-calendar"
          },
          {
            "label": "17/10–21/11/2026",
            "sub": "Kỳ họp sửa Luật Đất đai",
            "illus": "balance-scale"
          }
        ],
        "current": 3
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Did you know? December eleventh 2025: Resolution two five four, in force from 2026.",
          "sub": "Bạn có biết: 11/12/2025, Nghị quyết 254/2025/QH15, hiệu lực từ 01/01/2026.",
          "keys": [
            "Nghị quyết 254/2025/QH15"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this autumn, the Land Law itself is being amended.",
          "sub": "Và mùa thu này, chính Luật Đất đai đang được sửa.",
          "keys": [
            "đang được sửa"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p3"
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
          }
        ],
        "items": [
          {
            "id": "b-mv",
            "t": "text",
            "text": "Luật đang chuyển động",
            "x": 2928,
            "y": 520,
            "size": 46,
            "at": "l1:moving",
            "color": "coral",
            "hl": [
              {
                "text": "chuyển động",
                "at": "l1:moving"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 610,
            "w": 370,
            "h": 110,
            "at": "l2:four stops+400",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2428,
            "y": 610,
            "w": 370,
            "h": 110,
            "at": "l2:four stops+750",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2828,
            "y": 610,
            "w": 370,
            "h": 110,
            "at": "l2:four stops+1100",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 3228,
            "y": 610,
            "w": 370,
            "h": 110,
            "at": "l2:four stops+1450",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Quyền",
            "x": 2053,
            "y": 622,
            "size": 44,
            "at": "l2:four stops+550"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Uỷ quyền",
            "x": 2453,
            "y": 622,
            "size": 44,
            "at": "l2:four stops+900"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Cho thuê",
            "x": 2853,
            "y": 622,
            "size": 44,
            "at": "l2:four stops+1250"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Bán",
            "x": 3253,
            "y": 622,
            "size": 44,
            "at": "l2:four stops+1600"
          },
          {
            "id": "b-dd0",
            "t": "text",
            "text": "Thứ Ba",
            "x": 2053,
            "y": 675,
            "size": 30,
            "at": "l2:four stops+650",
            "color": "muted"
          },
          {
            "id": "b-dd1",
            "t": "text",
            "text": "Thứ Tư",
            "x": 2453,
            "y": 675,
            "size": 30,
            "at": "l2:four stops+1000",
            "color": "muted"
          },
          {
            "id": "b-dd2",
            "t": "text",
            "text": "Thứ Sáu",
            "x": 2853,
            "y": 675,
            "size": 30,
            "at": "l2:four stops+1350",
            "color": "muted"
          },
          {
            "id": "b-dd3",
            "t": "text",
            "text": "Thứ Bảy",
            "x": 3253,
            "y": 675,
            "size": 30,
            "at": "l2:four stops+1700",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l0",
          "lang": "en",
          "who": "det",
          "say": "The resolution removes snags in applying the Land Law. The amendment session runs October seventeenth to November twenty first.",
          "sub": "Nghị quyết tháo gỡ vướng mắc khi thi hành Luật Đất đai. Kỳ họp sửa luật: 17/10 đến 21/11/2026."
        },
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So some details may change after the session. Ask in order, and remember the law is moving.",
          "sub": "Nên một số chi tiết có thể đổi sau kỳ họp. Hỏi đúng thứ tự, và nhớ rằng luật đang chuyển động.",
          "keys": [
            "luật đang chuyển động"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Now, Bà Tư's last week at home, in four stops: rights, authority, renting, selling.",
          "sub": "Giờ theo Bà Tư qua tuần cuối ở nhà, bốn chặng: quyền, uỷ quyền, cho thuê, bán.",
          "keys": [
            "bốn chặng"
          ]
        }
      ],
      "ref": "p3,p4"
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
            "at": "l5",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Ba · Quyền của mình",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First stop"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 130,
            "w": 720,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "tu",
                  "side": "right",
                  "face": "worried"
                }
              ],
              "props": [
                "mobile-phone"
              ]
            },
            "at": "l2:Thảo",
            "caption": "Tối thứ Ba · Thảo gọi về",
            "icon": "mobile-phone"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Còn quốc tịch Việt Nam",
            "x": 3996,
            "y": 170,
            "size": 52,
            "at": "l5:citizens",
            "color": "accent"
          },
          {
            "id": "c-1b",
            "t": "text",
            "text": "→ quyền như người trong nước",
            "x": 4016,
            "y": 245,
            "size": 46,
            "at": "l5:full",
            "hl": [
              {
                "text": "như người trong nước",
                "at": "l5:full land rights"
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
          "say": "First stop: Tuesday evening. Rights.",
          "sub": "Chặng một: tối thứ Ba. Quyền của mình."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Thảo, Bà Tư's daughter, settled abroad for years, calling home.",
          "sub": "Đây là Thảo, con gái Bà Tư, định cư nước ngoài nhiều năm, đang gọi về.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "tu",
          "say": "Thảo, once I live over there, is the house still mine?",
          "sub": "Thảo ơi, sang bên đó ở rồi, nhà này còn là của mẹ không?",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Mom, I live abroad, and I'm still a Vietnamese citizen. Same rights as at home.",
          "sub": "Mẹ ơi, con ở nước ngoài mà vẫn là công dân Việt Nam. Quyền như ở nhà thôi.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Right. The Land Law 2024 treats Vietnamese living abroad as citizens, with full land rights like people at home.",
          "sub": "Đúng. Luật Đất đai 2024 coi người Việt định cư ở nước ngoài là công dân, có đầy đủ quyền về đất đai như công dân trong nước.",
          "keys": [
            "đầy đủ quyền"
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
      "ref": "p5"
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
            "id": "c-2",
            "t": "text",
            "text": "Người gốc Việt (đã thôi quốc tịch)",
            "x": 3996,
            "y": 330,
            "size": 44,
            "at": "l1:origin",
            "color": "coral"
          },
          {
            "id": "c-2a",
            "t": "text",
            "text": "• mua, thuê mua nhà gắn đất ở",
            "x": 4016,
            "y": 400,
            "size": 36,
            "at": "l2:buy"
          },
          {
            "id": "c-2b",
            "t": "text",
            "text": "• nhận thừa kế, nhận tặng cho",
            "x": 4016,
            "y": 450,
            "size": 36,
            "at": "l2:inherit"
          },
          {
            "id": "c-2c",
            "t": "text",
            "text": "nếu được phép nhập cảnh",
            "x": 4016,
            "y": 505,
            "size": 44,
            "at": "l3:enter",
            "color": "accent",
            "hl": [
              {
                "text": "được phép nhập cảnh",
                "at": "l3:allowed"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Không đủ điều kiện → hưởng giá trị",
            "x": 3996,
            "y": 590,
            "size": 36,
            "at": "l4:value",
            "hl": [
              {
                "text": "hưởng giá trị",
                "at": "l4:value"
              }
            ]
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Thừa kế đất: công chứng, chứng thực",
            "x": 4856,
            "y": 650,
            "size": 38,
            "at": "l5:notarised",
            "color": "coral"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật, theo Luật Đất đai 2024",
            "x": 3996,
            "y": 700,
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
          "say": "People of Vietnamese origin, who no longer hold the nationality, form a separate group.",
          "sub": "Người gốc Việt, tức người không còn quốc tịch Việt Nam, là một nhóm riêng.",
          "keys": [
            "nhóm riêng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "They may buy or lease-purchase a house with residential land, inherit, and receive gifts from their heirs' line.",
          "sub": "Họ được mua, thuê mua nhà ở gắn liền với quyền sử dụng đất ở, nhận thừa kế, nhận tặng cho từ người thuộc hàng thừa kế."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "On one condition: being allowed to enter Vietnam.",
          "sub": "Với điều kiện: được phép nhập cảnh vào Việt Nam.",
          "keys": [
            "được phép nhập cảnh"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not eligible? Their name can't go on the title, but they still receive the value of their share.",
          "sub": "Không đủ điều kiện thì không đứng tên được, nhưng vẫn được hưởng giá trị phần di sản.",
          "keys": [
            "hưởng giá trị"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And inheritance papers on land must be notarised or certified.",
          "sub": "Và văn bản về thừa kế quyền sử dụng đất phải công chứng hoặc chứng thực."
        }
      ],
      "ref": "p5,p6"
    },
    {
      "id": "s07",
      "module": "BRK-04",
      "data": {
        "title": "Trước khi bay",
        "wrong": "Ra nước ngoài là mất quyền, bán rẻ cho nhanh",
        "right": "Còn quốc tịch thì quyền như người trong nước",
        "wrongIllus": "money-with-wings",
        "rightIllus": "house-with-garden"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Moving abroad ends your rights? So sell cheap, fast?",
          "sub": "Ra nước ngoài là mất quyền? Vậy bán rẻ cho nhanh?",
          "keys": [
            "bán rẻ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Keep your nationality, keep your rights.",
          "sub": "Còn quốc tịch thì còn quyền.",
          "keys": [
            "còn quyền"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p7,p8"
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
            "text": "② Thứ Tư · Ai làm thay?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second stop"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 130,
            "w": 720,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "tu",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "phone",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "page-facing-up",
                "fountain-pen"
              ]
            },
            "at": "l2:Dũng",
            "caption": "Thứ Tư · bàn uống nước nhà Bà Tư",
            "icon": "page-facing-up"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Uỷ quyền = người khác làm thay",
            "x": 5964,
            "y": 170,
            "size": 48,
            "at": "l5:power of attorney",
            "color": "accent",
            "hl": [
              {
                "text": "làm thay",
                "at": "l5:acts"
              }
            ]
          },
          {
            "id": "d-1b",
            "t": "text",
            "text": "ký hợp đồng, nộp hồ sơ",
            "x": 5984,
            "y": 245,
            "size": 40,
            "at": "l5:contracts"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "KHÔNG đổi chủ sở hữu",
            "x": 5964,
            "y": 330,
            "size": 54,
            "at": "l6:ownership",
            "color": "coral",
            "hl": [
              {
                "text": "KHÔNG đổi",
                "at": "l6:does not change"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Nhà vẫn đứng tên Bà Tư",
            "x": 5984,
            "y": 410,
            "size": 42,
            "at": "l6:name"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: Wednesday. Who acts for Bà Tư when she's away?",
          "sub": "Chặng hai: thứ Tư. Bà Tư đi rồi, ai làm thay?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, her grandson. Kind, quick, and allergic to small print.",
          "sub": "Đây là Dũng, cháu nội bà. Tốt bụng, nhanh nhảu, và… dị ứng với chữ nhỏ.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "tu",
          "say": "Dũng, you'll rent out the house for me. I'll sign you a paper.",
          "sub": "Dũng à, cháu cho thuê nhà giùm bà. Bà ký giấy cho cháu.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Okay, let's do it now! I found a sample online.",
          "sub": "Ok, làm luôn! Cháu có mẫu trên mạng rồi.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "That paper is a power of attorney. Someone acts for you, like signing contracts or filing papers.",
          "sub": "Tờ giấy ấy là văn bản uỷ quyền: trao cho người khác làm thay, như ký hợp đồng, nộp hồ sơ.",
          "keys": [
            "làm thay"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And it does not change ownership. The house stays in Bà Tư's name.",
          "sub": "Và uỷ quyền không làm thay đổi quyền sở hữu. Nhà vẫn đứng tên Bà Tư.",
          "keys": [
            "không làm thay đổi quyền sở hữu"
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
      "ref": "p9"
    },
    {
      "id": "s09",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Thứ Tư · ký giấy cho cháu",
        "actors": [
          {
            "id": "tu",
            "side": "left"
          },
          {
            "id": "dung",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "“Toàn quyền quản lý, định đoạt”",
          "why": "Giấy ấy mở cửa cho bán, nhận tiền, giao sổ đỏ; bà mất kiểm soát căn nhà.",
          "rule": "Giao việc nào, viết đúng việc ấy"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "tu",
          "say": "Full power to manage and dispose of the house. Just so renting is easy.",
          "sub": "Toàn quyền quản lý, định đoạt căn nhà. Cho cháu tiện cho thuê thôi.",
          "pose": "give",
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
          "say": "Fast forward a few years. Neighbours call: strangers have moved in, on papers she never saw.",
          "sub": "Tua nhanh vài năm: hàng xóm báo có người lạ dọn đến ở, nhờ giấy tờ bà chưa từng thấy.",
          "keys": [
            "người lạ dọn đến ở"
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
          "who": "tu",
          "say": "Dũng signs leases only. Rent goes to my account. No selling.",
          "sub": "Dũng chỉ ký hợp đồng thuê. Tiền vào tài khoản bà. Không được bán.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Got it, Grandma. Just the lease.",
          "sub": "Dạ rõ rồi bà. Chỉ hợp đồng thuê thôi.",
          "phase": "redo",
          "face": "happy"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p9,p11"
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
            "text": "③ Thứ Năm · Viết rõ, ký đúng",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third stop"
          },
          {
            "id": "e-r",
            "t": "text",
            "text": "Rủi ro: bán, nhận tiền, giao sổ",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l2:selling",
            "color": "coral",
            "hl": [
              {
                "text": "giao sổ",
                "at": "l2:red book"
              }
            ]
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Ghi rõ: việc · địa điểm · thời hạn",
            "x": 7932,
            "y": 250,
            "size": 46,
            "at": "l3:task",
            "color": "accent",
            "hl": [
              {
                "text": "thời hạn",
                "at": "l3:time limit"
              }
            ]
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "“toàn quyền định đoạt”",
            "x": 7932,
            "y": 330,
            "size": 46,
            "at": "l3:avoid",
            "color": "muted"
          },
          {
            "id": "e-2x",
            "t": "strike",
            "over": "e-2",
            "at": "l3:dispose"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Thursday. That rewind was not paranoia.",
          "sub": "Chặng ba: thứ Năm. Pha tua lại vừa rồi không phải lo xa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The biggest risk is full authority: selling, taking the money, handing over the red book.",
          "sub": "Rủi ro lớn nhất là uỷ quyền toàn phần: cho phép bán, nhận tiền, giao sổ đỏ.",
          "keys": [
            "uỷ quyền toàn phần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So write the task, the place, and the time limit. Avoid the words full power to dispose.",
          "sub": "Nên ghi rõ việc được làm, địa điểm, thời hạn. Tránh cụm “toàn quyền định đoạt”.",
          "keys": [
            "ghi rõ việc được làm"
          ]
        }
      ],
      "ref": "p9,p11"
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
            "at": "l1",
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
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8792,
            "y": 130,
            "w": 720,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "classical-building",
                "envelope"
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Năm · Thảo gọi về",
            "icon": "classical-building"
          },
          {
            "id": "e-emb",
            "t": "illus",
            "name": "classical-building",
            "x": 7932,
            "y": 500,
            "size": 90,
            "at": "l2:embassy"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "Cơ quan đại diện Việt Nam",
            "x": 8042,
            "y": 510,
            "size": 38,
            "at": "l2:embassy+200"
          },
          {
            "id": "e-ar",
            "t": "arrow",
            "from": [
              8072,
              580
            ],
            "to": [
              8072,
              640
            ],
            "at": "l3:original"
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "bản gốc → công chứng nơi ở",
            "x": 8102,
            "y": 610,
            "size": 36,
            "at": "l3:notary",
            "hl": [
              {
                "text": "bản gốc",
                "at": "l3:original"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Giao việc, đừng giao cả nhà",
            "x": 8792,
            "y": 640,
            "size": 50,
            "at": "l4:task",
            "color": "accent",
            "hl": [
              {
                "text": "đừng giao cả nhà",
                "at": "l4:whole house"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "And later, if I must sign from abroad, I go to a Vietnamese embassy or consulate.",
          "sub": "Sau này nếu phải ký từ bên này, con đến cơ quan đại diện Việt Nam.",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yes. Abroad, the authority document is notarised at a Vietnamese embassy or consulate.",
          "sub": "Đúng. Ở nước ngoài, văn bản uỷ quyền được công chứng tại cơ quan đại diện ngoại giao hoặc lãnh sự Việt Nam.",
          "keys": [
            "cơ quan đại diện"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then the person authorised takes the original to a notary where they live, to finish the next step.",
          "sub": "Rồi người được uỷ quyền mang bản gốc đến tổ chức công chứng nơi mình cư trú để làm tiếp.",
          "keys": [
            "bản gốc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lesson: write exactly the task you hand over. Don't hand over the whole house.",
          "sub": "Rút ra: giao việc nào thì viết đúng việc ấy, đừng giao cả căn nhà.",
          "keys": [
            "đừng giao cả căn nhà"
          ]
        }
      ],
      "ref": "p10,p12"
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
            "text": "④ Thứ Sáu · Cho thuê",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth stop"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 920,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "house",
                "receipt"
              ]
            },
            "at": "l1:family",
            "caption": "Thứ Sáu · có nhà muốn thuê",
            "icon": "house"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "HĐ thuê: không bắt buộc công chứng",
            "x": 60,
            "y": 1260,
            "size": 42,
            "at": "l3:no",
            "hl": [
              {
                "text": "không bắt buộc",
                "at": "l3:no"
              }
            ]
          },
          {
            "id": "f-1s",
            "t": "text",
            "text": "(bài viết theo luật nhà ở cũ)",
            "x": 80,
            "y": 1320,
            "size": 30,
            "at": "l3:older",
            "color": "muted"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Cần: giá · thời hạn · thanh toán",
            "x": 60,
            "y": 1380,
            "size": 40,
            "at": "l3:rent"
          },
          {
            "id": "f-2b",
            "t": "text",
            "text": "quyền và nghĩa vụ các bên",
            "x": 80,
            "y": 1435,
            "size": 36,
            "at": "l3:duties"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Tiền thuê → tài khoản tên Bà Tư",
            "x": 60,
            "y": 1510,
            "size": 44,
            "at": "l4:account",
            "color": "accent",
            "hl": [
              {
                "text": "tài khoản tên Bà Tư",
                "at": "l4:account"
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
          "say": "Fourth stop: Friday. A family calls Dũng. They want to rent the house.",
          "sub": "Chặng bốn: thứ Sáu. Một gia đình gọi Dũng, muốn thuê nhà."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Grandma, does the lease have to be notarised?",
          "sub": "Bà ơi, hợp đồng thuê có phải công chứng không ạ?",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Per an article on the older housing law, no. But it needs rent, term, payment, rights and duties.",
          "sub": "Theo một bài viết theo luật nhà ở cũ: không bắt buộc. Nhưng cần đủ giá thuê, thời hạn, cách thanh toán, quyền và nghĩa vụ các bên."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Dũng signs as the authorised person. The rent goes straight into an account in Bà Tư's name.",
          "sub": "Dũng ký thay theo uỷ quyền, còn tiền thuê chuyển thẳng vào tài khoản đứng tên Bà Tư.",
          "keys": [
            "tài khoản đứng tên Bà Tư"
          ]
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s13",
      "module": "BRK-03",
      "data": {
        "value": 500,
        "suffix": " triệu",
        "label": "đồng mỗi năm: từ đó trở xuống, không thuế TNCN",
        "illus": "money-bag"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Now, tax.",
          "sub": "Giờ đến thuế."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Five hundred million a year or less: no income tax.",
          "sub": "Từ 500 triệu đồng một năm trở xuống: không thuế thu nhập.",
          "keys": [
            "500 triệu đồng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "nhan"
        }
      ],
      "ref": "p14"
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
            "id": "f-4",
            "t": "text",
            "text": "> 500 triệu: 5% phần vượt",
            "x": 60,
            "y": 1600,
            "size": 46,
            "at": "l1:five percent",
            "color": "coral",
            "hl": [
              {
                "text": "5% phần vượt",
                "at": "l1:above"
              }
            ]
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "Thuế GTGT 5%: hỏi cơ quan thuế",
            "x": 60,
            "y": 1680,
            "size": 40,
            "at": "l2:tax office",
            "hl": [
              {
                "text": "hỏi cơ quan thuế",
                "at": "l2:tax office"
              }
            ]
          },
          {
            "id": "f-q",
            "t": "text",
            "text": "Dưới 500 triệu → không TNCN ✓",
            "x": 920,
            "y": 1740,
            "size": 36,
            "at": "l3:No",
            "color": "accent"
          },
          {
            "id": "f-6",
            "t": "text",
            "text": "Vẫn giữ hợp đồng, chứng từ",
            "x": 920,
            "y": 1795,
            "size": 34,
            "at": "l4:receipts"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật 05/02/2026, dẫn Luật Thuế TNCN 2025",
            "x": 60,
            "y": 1795,
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
          "say": "Above that, five percent on the part above the line.",
          "sub": "Trên mức đó, nộp 5% trên phần vượt.",
          "keys": [
            "5% trên phần vượt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The article also mentions five percent VAT and some exemptions. So ask the tax office how it applies.",
          "sub": "Bài còn nêu thuế giá trị gia tăng 5% và trường hợp không chịu thuế, nên hỏi cơ quan thuế cách áp dụng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Quick quiz. Rent for the whole year stays under five hundred million. Income tax? No.",
          "sub": "Thử nghĩ: tiền thuê cả năm dưới 500 triệu. Có nộp thuế thu nhập cá nhân không? Không.",
          "keys": [
            "Không"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Still keep the lease and receipts. Ask about VAT, and the rate if you're no longer a tax resident.",
          "sub": "Vẫn giữ hợp đồng, chứng từ, và hỏi cơ quan thuế về thuế giá trị gia tăng, mức áp dụng nếu không còn là cá nhân cư trú."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Know the threshold before you worry. Then ask the tax office the rest.",
          "sub": "Biết ngưỡng doanh thu trước khi lo, rồi hỏi cơ quan thuế phần còn lại.",
          "keys": [
            "Biết ngưỡng doanh thu"
          ]
        }
      ],
      "ref": "p14,p15,p16"
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
            "at": "l3",
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
            "text": "⑤ Thứ Bảy · Bán khi ở xa",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth stop"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2888,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "tu",
                  "side": "right"
                }
              ],
              "props": [
                "hot-beverage",
                "house"
              ]
            },
            "at": "l2:Uncle",
            "caption": "Sáng thứ Bảy · cà phê với Bác Bình",
            "icon": "hot-beverage"
          },
          {
            "id": "g-n",
            "t": "text",
            "text": "Uỷ quyền cho người mua thay bán",
            "x": 2028,
            "y": 1260,
            "size": 42,
            "at": "l3:power of attorney",
            "color": "muted"
          },
          {
            "id": "g-nx",
            "t": "strike",
            "over": "g-n",
            "at": "l4:rope"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Bán = hợp đồng chuyển nhượng",
            "x": 2028,
            "y": 1340,
            "size": 50,
            "at": "l4:transfer contract",
            "color": "accent",
            "hl": [
              {
                "text": "hợp đồng chuyển nhượng",
                "at": "l4:transfer contract"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "bấp bênh cho cả hai bên",
            "x": 2048,
            "y": 1420,
            "size": 40,
            "at": "l5:shaky",
            "color": "coral"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "→ uỷ quyền cho người thân ký thay",
            "x": 2028,
            "y": 1500,
            "size": 42,
            "at": "l6:relative",
            "hl": [
              {
                "text": "ký thay",
                "at": "l6:sign"
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
          "say": "Fifth stop: Saturday, coffee with an old neighbour.",
          "sub": "Chặng năm: sáng thứ Bảy, cà phê với một người hàng xóm cũ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Uncle Bình. He moved abroad long ago, and wants to sell his house in town.",
          "sub": "Đây là Bác Bình, ra nước ngoài từ lâu, đang muốn bán căn nhà ở thị trấn.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "A buyer says: give me a power of attorney, and I'll pay in full. Easy, no?",
          "sub": "Người mua bảo: cứ làm giấy uỷ quyền cho tôi, tôi trả đủ tiền. Gọn nhỉ?",
          "pose": "shrug"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Easy like a rope bridge. The law recognises a sale through a transfer contract.",
          "sub": "Gọn như cầu khỉ. Luật ghi nhận chuyển nhượng qua hợp đồng chuyển nhượng.",
          "keys": [
            "hợp đồng chuyển nhượng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Authority instead of a sale leaves both sides on shaky ground.",
          "sub": "Dùng giấy uỷ quyền thay cho bán là bấp bênh cho cả hai bên.",
          "keys": [
            "bấp bênh"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "From afar, authorise a relative to sign the transfer contract for you, not the buyer.",
          "sub": "Ở xa thì uỷ quyền cho người thân ký hợp đồng chuyển nhượng thay mình, chứ không uỷ quyền cho người mua."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
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
            "at": "l2",
            "fit": "G",
            "ms": 700
          },
          {
            "at": "l3",
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
            "id": "g-a",
            "t": "text",
            "text": "A · về nước tự ký, nắm hết",
            "x": 2028,
            "y": 1590,
            "size": 36,
            "at": "l2:ticket"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "B · con gái ký thay",
            "x": 2028,
            "y": 1650,
            "size": 36,
            "at": "l4:Less travel"
          },
          {
            "id": "g-b2",
            "t": "text",
            "text": "ghi giá sàn · tài khoản · thời hạn",
            "x": 2068,
            "y": 1705,
            "size": 34,
            "at": "l4:floor price",
            "color": "accent",
            "hl": [
              {
                "text": "giá sàn",
                "at": "l4:floor price"
              }
            ]
          },
          {
            "id": "g-tax",
            "t": "text",
            "text": "Thuế = giá chuyển nhượng × 2%",
            "x": 2888,
            "y": 1740,
            "size": 40,
            "at": "l5:two percent",
            "color": "coral",
            "hl": [
              {
                "text": "× 2%",
                "at": "l5:two percent"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật 25/01/2026, dẫn Điều 14 Luật Thuế TNCN 2025",
            "x": 2028,
            "y": 1790,
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
          "who": "binh",
          "say": "Then I have two ways. A: fly home and sign it myself.",
          "sub": "Vậy bác có hai cách. Cách A: bay về tự ký.",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Costs a ticket and days off, but he holds every step.",
          "sub": "Tốn vé, tốn ngày nghỉ, nhưng nắm mọi việc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "B: authorise my daughter at the consulate, and she signs for me.",
          "sub": "Cách B: ký uỷ quyền ở cơ quan đại diện để con gái ký thay.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Less travel. But write a floor price, the receiving account, a time limit, and follow every step.",
          "sub": "Đỡ đi lại, nhưng phải ghi rõ giá sàn, tài khoản nhận tiền, thời hạn, và theo sát từng bước.",
          "keys": [
            "giá sàn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The tax? The article cites Article fourteen: transfer price times two percent.",
          "sub": "Thuế? Bài dẫn Điều 14 Luật Thuế thu nhập cá nhân 2025: giá chuyển nhượng nhân 2%.",
          "keys": [
            "nhân 2%"
          ]
        }
      ],
      "ref": "p18,p19"
    },
    {
      "id": "s17",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Bán bằng hợp đồng chuyển nhượng",
        "hl": "hợp đồng chuyển nhượng",
        "sub": "Uỷ quyền chỉ để có người ký thay"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sell through a transfer contract.",
          "sub": "Bán bằng hợp đồng chuyển nhượng.",
          "keys": [
            "hợp đồng chuyển nhượng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Authority only puts someone in the signing chair.",
          "sub": "Uỷ quyền chỉ để có người ký thay."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p20"
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
            "at": "l5",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "Chủ nhật sáng · Một trang giấy",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "tu",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "memo",
                "fountain-pen"
              ]
            },
            "at": "l1:page",
            "caption": "Chủ nhật · trước giờ ra sân bay",
            "icon": "memo"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1280,
            "w": 40,
            "h": 40,
            "at": "l2:nationality",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1264,
            "size": 50,
            "at": "l2:nationality+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Còn quốc tịch Việt Nam",
            "x": 4058,
            "y": 1270,
            "size": 40,
            "at": "l2:nationality+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1370,
            "w": 40,
            "h": 40,
            "at": "l3:name",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1354,
            "size": 50,
            "at": "l3:name+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Nhà đất đứng tên: căn ở quê",
            "x": 4058,
            "y": 1360,
            "size": 40,
            "at": "l3:name+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1460,
            "w": 40,
            "h": 40,
            "at": "l4:acts",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1444,
            "size": 50,
            "at": "l4:acts+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Người làm thay: Dũng, chỉ cho thuê",
            "x": 4058,
            "y": 1450,
            "size": 40,
            "at": "l4:acts+200"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "1 trang > 3 vali",
            "x": 3996,
            "y": 1590,
            "size": 64,
            "at": "l5:suitcases",
            "color": "accent",
            "hl": [
              {
                "text": "1 trang",
                "at": "l5:one page"
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
          "say": "Sunday morning. Before the airport, Bà Tư writes one page.",
          "sub": "Sáng Chủ nhật. Trước khi ra sân bay, Bà Tư viết một trang giấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "tu",
          "say": "One: I keep my Vietnamese nationality.",
          "sub": "Một: bà vẫn giữ quốc tịch Việt Nam.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "tu",
          "say": "Two: property in my name. This house in town.",
          "sub": "Hai: nhà đất đứng tên bà. Căn nhà ở quê này."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "tu",
          "say": "Three: who acts for me? Dũng, for leases only.",
          "sub": "Ba: ai làm thay? Dũng, chỉ việc cho thuê.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Three answers on one page. Worth more than three suitcases.",
          "sub": "Ba câu trả lời trên một trang giấy, đáng giá hơn ba chiếc vali.",
          "keys": [
            "một trang giấy"
          ]
        }
      ],
      "ref": "outro,p1"
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
            "at": "l4",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Chủ nhật · Sân bay",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:airport"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "airport",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "tu",
                  "side": "right",
                  "pose": "wave",
                  "face": "happy"
                }
              ],
              "props": [
                "luggage",
                "airplane-departure"
              ]
            },
            "at": "l1:airport",
            "caption": "Chủ nhật · cùng chiếc vali ấy",
            "icon": "airplane-departure"
          },
          {
            "id": "i-book",
            "t": "illus",
            "name": "closed-book",
            "x": 5964,
            "y": 1260,
            "size": 120,
            "at": "l2:red book"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Sổ đỏ: ở nhà, tủ khoá",
            "x": 6104,
            "y": 1280,
            "size": 46,
            "at": "l3:Locked",
            "hl": [
              {
                "text": "ở nhà",
                "at": "l3:home"
              }
            ]
          },
          {
            "id": "i-memo",
            "t": "illus",
            "name": "memo",
            "x": 5964,
            "y": 1420,
            "size": 110,
            "at": "l3:page"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Trong vali: một trang giấy",
            "x": 6104,
            "y": 1440,
            "size": 46,
            "at": "l3:page+300",
            "color": "accent"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Lá rụng về cội”",
            "x": 5964,
            "y": 1610,
            "size": 58,
            "at": "l4:root",
            "color": "accent",
            "hl": [
              {
                "text": "về cội",
                "at": "l4:root"
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
          "say": "Sunday. The airport. The same suitcase.",
          "sub": "Chủ nhật. Sân bay. Vẫn chiếc vali ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Grandma, where's your red book?",
          "sub": "Bà ơi, sổ đỏ của bà đâu?",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "tu",
          "say": "Locked at home, where it belongs. In my bag, just this page.",
          "sub": "Khoá trong tủ ở nhà, đúng chỗ của nó. Trong túi bà chỉ có trang giấy này.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Leaves fall back to the root. And the root now has a caretaker, with a clear job.",
          "sub": "“Lá rụng về cội.” Còn cội giờ đã có người trông, với một việc ghi rõ ràng.",
          "keys": [
            "việc ghi rõ ràng"
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
      "ref": "outro"
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
          },
          {
            "at": 150,
            "fit": "J",
            "ms": 900
          },
          {
            "at": "l2",
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l2:nationality",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l6",
            "fit": "J",
            "ms": 1000
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Bốn chặng · việc làm ngay",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 5496,
            "y": 40,
            "at": "l2:nationality+900"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9432,
            "y": 40,
            "at": "l3:narrow"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1560,
            "y": 1130,
            "at": "l4:lease"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 3528,
            "y": 1130,
            "at": "l5:transfer"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Viết ra hôm nay:",
            "x": 7932,
            "y": 1260,
            "size": 52,
            "at": "l6:Today",
            "color": "accent"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "• còn quốc tịch Việt Nam không?",
            "x": 7952,
            "y": 1340,
            "size": 44,
            "at": "l6:nationality"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "• đang đứng tên nhà đất nào?",
            "x": 7952,
            "y": 1410,
            "size": 44,
            "at": "l6:property"
          },
          {
            "id": "j-4",
            "t": "text",
            "text": "• ai ở nhà làm thay được?",
            "x": 7952,
            "y": 1480,
            "size": 44,
            "at": "l6:acts"
          },
          {
            "id": "j-nx",
            "t": "text",
            "text": "Bài tiếp: có được đứng tên?",
            "x": 7932,
            "y": 1590,
            "size": 34,
            "at": "l7:Next",
            "color": "muted"
          },
          {
            "id": "j-note",
            "t": "text",
            "text": "Bài để tham khảo, không phải tư vấn vụ việc cụ thể. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1730,
            "size": 26,
            "at": "l7",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "j-note2",
            "t": "text",
            "text": "Luật Đất đai đang sửa đổi: kiểm lại với cơ quan, chuyên gia trước khi làm.",
            "x": 7932,
            "y": 1770,
            "size": 26,
            "at": "l7",
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
          "say": "So, four stops.",
          "sub": "Tóm lại, bốn chặng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: your nationality decides your rights.",
          "sub": "Một: quốc tịch quyết định quyền của bạn.",
          "keys": [
            "quốc tịch"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: authority with a narrow scope. The task, not the house.",
          "sub": "Hai: uỷ quyền đúng phạm vi. Giao việc, không giao nhà.",
          "keys": [
            "đúng phạm vi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: renting needs a lease, and know the tax threshold.",
          "sub": "Ba: cho thuê có hợp đồng, biết ngưỡng thuế."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Four: selling from afar means a transfer contract.",
          "sub": "Bốn: bán khi ở xa bằng hợp đồng chuyển nhượng.",
          "keys": [
            "hợp đồng chuyển nhượng"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Today, write your page: your nationality, the property in your name, and who acts for you.",
          "sub": "Việc làm ngay: viết trang giấy của bạn. Còn quốc tịch không, đứng tên nhà đất nào, ai làm thay.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Next: can Vietnamese living abroad hold title to land back home? And laws change, so check before you act.",
          "sub": "Bài tiếp theo: người Việt định cư ở nước ngoài có được đứng tên nhà đất? Luật có thể đổi, kiểm lại trước khi làm."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s21",
      "module": "QUIZ-01",
      "data": {
        "q": "How does the law recognise a land transfer, according to the article?",
        "options": [
          "Through a land transfer contract, not through an authority letter",
          "Through a verbal agreement made in front of the family",
          "Through an authority letter, which counts exactly like a sale"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "page-facing-up",
        "why": "Luật ghi nhận chuyển nhượng qua hợp đồng chuyển nhượng."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "How does the law recognise a land transfer, according to the article?",
          "sub": "Theo bài, luật ghi nhận chuyển nhượng đất qua hình thức nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Through a land transfer contract, not through an authority letter.",
          "sub": "Qua hợp đồng chuyển nhượng, không phải giấy uỷ quyền."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Authority only lets a relative sign that contract for you.",
          "sub": "Uỷ quyền chỉ để người thân ký hợp đồng ấy thay bạn."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[32]"
    },
    {
      "id": "s22",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Nhà đất ở quê khi mình ở xa"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting below.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ ngay bên dưới.",
          "face": "happy"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-23",
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-23: đồ vật kể chuyện (cuốn sổ đỏ trong vali → trở lại ở sân bay: sổ đỏ khoá ở nhà, trong túi chỉ một trang giấy). Đét đứng trái + bảng trắng 10 ô theo TUẦN CUỐI TRƯỚC KHI BÀ TƯ BAY: thứ Hai xếp vali (intro, p1) → ba câu hỏi (p1, p2; BRK-08 mốc luật p3) → thứ Ba quyền với Thảo gọi về (p5, p6; BRK-04 p7) → thứ Tư uỷ quyền cho Dũng (p9; “Khoan đã!” toàn quyền định đoạt p11) → thứ Năm viết hẹp, ký ở cơ quan đại diện (p10, p12) → thứ Sáu cho thuê (p13; BRK-03 500 triệu p14; p15, p16) → thứ Bảy Bác Bình bán (p17–p19; BRK-02 p20) → Chủ nhật một trang giấy (outro) → sân bay (khép vòng “Lá rụng về cội”). Nhân vật: Bà Tư (chính, đóng vai “bà Lan” p11), Thảo, Dũng, Bác Bình (vai “ông Hùng” p19). Mọi điều, mốc, số lấy từ bài; lưu ý chung #133 ở ô J.",
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
