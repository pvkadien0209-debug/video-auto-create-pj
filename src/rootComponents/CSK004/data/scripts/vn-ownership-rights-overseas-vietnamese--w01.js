// vn-ownership-rights-overseas-vietnamese--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "vn-ownership-rights-overseas-vietnamese--w01",
  "unit": {
    "audience": "emigrants-keeping-property-in-vietnam",
    "slug": "vn-ownership-rights-overseas-vietnamese",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Người Việt định cư ở nước ngoài có được đứng tên nhà đất tại Việt Nam?",
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
          }
        ],
        "items": [
          {
            "id": "a-q",
            "t": "text",
            "text": "Cùng sống ở nước ngoài.",
            "x": 60,
            "y": 50,
            "size": 52,
            "at": "l1:abroad"
          },
          {
            "id": "a-q2",
            "t": "text",
            "text": "Ai còn quyền đất như ở nhà?",
            "x": 60,
            "y": 120,
            "size": 52,
            "at": "l1:rights",
            "hl": [
              {
                "text": "còn quyền",
                "at": "l1:rights"
              }
            ]
          },
          {
            "id": "a-ba",
            "t": "box",
            "x": 60,
            "y": 230,
            "w": 800,
            "h": 120,
            "at": "l2:A",
            "stroke": 5
          },
          {
            "id": "a-a",
            "t": "text",
            "text": "A · Không ai: đi là mất",
            "x": 85,
            "y": 260,
            "size": 44,
            "at": "l2:A+200"
          },
          {
            "id": "a-bb",
            "t": "box",
            "x": 60,
            "y": 390,
            "w": 800,
            "h": 120,
            "at": "l2:B",
            "stroke": 5
          },
          {
            "id": "a-b",
            "t": "text",
            "text": "B · Người còn quốc tịch Việt Nam",
            "x": 85,
            "y": 420,
            "size": 40,
            "at": "l2:B+200"
          },
          {
            "id": "a-g",
            "t": "text",
            "text": "Bạn chọn…?",
            "x": 60,
            "y": 560,
            "size": 56,
            "at": "l3:Pick",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Two neighbours now live abroad. Who keeps land rights like people at home?",
          "sub": "Hai người hàng xóm giờ cùng sống ở nước ngoài. Ai còn quyền đất đai như người trong nước?",
          "keys": [
            "còn quyền"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A: nobody, leaving means losing. B: whoever still holds Vietnamese nationality.",
          "sub": "A: không ai cả, đi là mất. B: người còn quốc tịch Việt Nam."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Pick one. I'll wait.",
          "sub": "Chọn đi. Đét chờ."
        }
      ],
      "beats": {
        "after": 1200
      },
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
            "at": "l5",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "tu",
                  "side": "left",
                  "pose": "hold",
                  "face": "worried",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "hot-beverage",
                "house"
              ]
            },
            "at": "l1",
            "caption": "Chiều thứ Sáu · quán cà phê đầu làng",
            "icon": "hot-beverage"
          },
          {
            "id": "a-xa",
            "t": "strike",
            "over": "a-a",
            "at": "l5:wrong"
          },
          {
            "id": "a-rb",
            "t": "ring",
            "around": [
              "a-b"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l5:B"
          },
          {
            "id": "a-k",
            "t": "text",
            "text": "Cùng phố, khác thuyền",
            "x": 920,
            "y": 640,
            "size": 54,
            "at": "l6:boats",
            "color": "coral",
            "hl": [
              {
                "text": "khác thuyền",
                "at": "l6:different boats"
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
          "say": "Meet Bà Tư. She flew abroad to live with her daughter, and is home for a visit.",
          "sub": "Đây là Bà Tư. Bà đã sang nước ngoài ở với con gái, nay về quê thăm nhà.",
          "keys": [
            "Bà Tư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And Uncle Bình, her old neighbour, home for his mother's first death anniversary.",
          "sub": "Còn đây là Bác Bình, hàng xóm cũ, về quê làm giỗ đầu cho mẹ.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "We both live abroad now, Bà Tư. Same boat, right?",
          "sub": "Giờ hai ta cùng ở nước ngoài, bà Tư nhỉ. Cùng một thuyền.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "tu",
          "say": "People say we lose everything here. Is that true?",
          "sub": "Người ta bảo mình mất hết quyền ở đây. Thật không bác?",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A is wrong. The answer is B.",
          "sub": "A sai. Đáp án là B.",
          "keys": [
            "Đáp án là B"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Bà Tư kept her Vietnamese nationality. Uncle Bình took another one years ago. Same street, different boats.",
          "sub": "Bà Tư vẫn giữ quốc tịch Việt Nam. Bác Bình đã nhập quốc tịch nước khác từ lâu. Cùng phố, khác thuyền.",
          "keys": [
            "khác thuyền"
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
      "ref": "p2,p3"
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
            "text": "Nhà ở quê còn là của mình?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:still yours",
            "hl": [
              {
                "text": "còn là của mình",
                "at": "l1:still yours"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: bạn đang ở đâu",
            "x": 2028,
            "y": 180,
            "size": 50,
            "at": "l2:where",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:live"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: còn quốc tịch không",
            "x": 2028,
            "y": 270,
            "size": 58,
            "at": "l2:nationality",
            "color": "accent",
            "hl": [
              {
                "text": "còn quốc tịch",
                "at": "l2:nationality"
              }
            ]
          },
          {
            "id": "b-ca",
            "t": "text",
            "text": "“Giấy trắng mực đen”",
            "x": 2928,
            "y": 180,
            "size": 54,
            "at": "l3:black ink",
            "hl": [
              {
                "text": "mực đen",
                "at": "l3:black ink"
              }
            ]
          },
          {
            "id": "b-cb",
            "t": "text",
            "text": "→ tên trên sổ mới là chủ",
            "x": 2948,
            "y": 260,
            "size": 42,
            "at": "l3:name"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 600,
            "w": 300,
            "h": 100,
            "at": "l4:five stops+300",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2353,
            "y": 600,
            "w": 300,
            "h": 100,
            "at": "l4:five stops+560",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2678,
            "y": 600,
            "w": 300,
            "h": 100,
            "at": "l4:five stops+820",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 3003,
            "y": 600,
            "w": 300,
            "h": 100,
            "at": "l4:five stops+1080",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3328,
            "y": 600,
            "w": 300,
            "h": 100,
            "at": "l4:five stops+1340",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Hai nhóm",
            "x": 2046,
            "y": 625,
            "size": 38,
            "at": "l4:five stops+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Còn quốc tịch",
            "x": 2371,
            "y": 625,
            "size": 38,
            "at": "l4:five stops+680"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Gốc Việt",
            "x": 2696,
            "y": 625,
            "size": 38,
            "at": "l4:five stops+940"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Thừa kế",
            "x": 3021,
            "y": 625,
            "size": 38,
            "at": "l4:five stops+1200"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Nghĩa vụ",
            "x": 3346,
            "y": 625,
            "size": 38,
            "at": "l4:five stops+1460"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So, after you settle abroad, is the house back home still yours?",
          "sub": "Vậy định cư nước ngoài rồi, căn nhà ở quê còn là của mình không?",
          "keys": [
            "còn là của mình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It doesn't depend on where you live. It depends on your nationality.",
          "sub": "Không phụ thuộc bạn đang ở đâu, mà phụ thuộc bạn còn quốc tịch Việt Nam hay không.",
          "keys": [
            "quốc tịch Việt Nam"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And as our elders say: white paper, black ink. The name on the paper decides.",
          "sub": "Ông bà dặn: “Giấy trắng mực đen.” Tên trên giấy mới là người có quyền.",
          "keys": [
            "Giấy trắng mực đen"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three days of Uncle Bình's visit, in five stops.",
          "sub": "Ba ngày Bác Bình về quê, năm chặng."
        }
      ],
      "ref": "intro,p4"
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
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Luật chia mấy nhóm?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First stop"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Điều 4 · Luật Đất đai 2024",
            "x": 3996,
            "y": 160,
            "size": 50,
            "at": "l1:Article four",
            "color": "accent",
            "hl": [
              {
                "text": "Điều 4",
                "at": "l1:Article four"
              }
            ]
          },
          {
            "id": "c-i1",
            "t": "illus",
            "name": "busts-in-silhouette",
            "x": 3996,
            "y": 250,
            "size": 110,
            "at": "l2:group"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Nhóm 1: trong nước + công dân",
            "x": 4126,
            "y": 270,
            "size": 34,
            "at": "l2:citizens",
            "hl": [
              {
                "text": "công dân",
                "at": "l2:citizens"
              }
            ]
          },
          {
            "id": "c-i2",
            "t": "illus",
            "name": "bust-in-silhouette",
            "x": 3996,
            "y": 400,
            "size": 110,
            "at": "l3:separate"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Nhóm 2: người gốc Việt",
            "x": 4126,
            "y": 420,
            "size": 44,
            "at": "l3:separate",
            "color": "coral"
          },
          {
            "id": "c-2b",
            "t": "text",
            "text": "= đã thôi quốc tịch, quyền riêng",
            "x": 4126,
            "y": 485,
            "size": 36,
            "at": "l4:no longer"
          },
          {
            "id": "c-m",
            "t": "text",
            "text": "Đi → bán rẻ, sang tên vội",
            "x": 3996,
            "y": 600,
            "size": 38,
            "at": "l5:sell",
            "color": "muted"
          },
          {
            "id": "c-mx",
            "t": "strike",
            "over": "c-m",
            "at": "l6:still"
          },
          {
            "id": "c-ok",
            "t": "text",
            "text": "Còn quốc tịch → vẫn nhóm 1",
            "x": 4836,
            "y": 600,
            "size": 46,
            "at": "l6:still",
            "color": "accent",
            "hl": [
              {
                "text": "vẫn nhóm 1",
                "at": "l6:same group"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật, tổng hợp Luật Đất đai 2024",
            "x": 3996,
            "y": 705,
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
          "say": "First stop: Friday afternoon, same café. Article four of the Land Law 2024 lists the land users.",
          "sub": "Chặng một: chiều thứ Sáu, vẫn quán ấy. Điều 4 Luật Đất đai 2024 liệt kê các nhóm người sử dụng đất.",
          "keys": [
            "Điều 4"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One group reads: individuals in Vietnam, and Vietnamese living abroad who are Vietnamese citizens. Listed together.",
          "sub": "Một nhóm ghi chung: cá nhân trong nước và người Việt Nam định cư ở nước ngoài là công dân Việt Nam.",
          "keys": [
            "ghi chung"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "People of Vietnamese origin are listed as a separate group.",
          "sub": "Người gốc Việt Nam định cư ở nước ngoài là một nhóm riêng.",
          "keys": [
            "nhóm riêng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Origin means you no longer hold Vietnamese nationality. Their rights come with conditions.",
          "sub": "Người gốc Việt là người không còn quốc tịch Việt Nam; quyền của nhóm này quy định riêng, kèm điều kiện."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Yet many people sell cheap, or sign the house over to relatives, right before leaving.",
          "sub": "Vậy mà nhiều người vội bán rẻ, hoặc sang tên cho người thân ngay trước khi đi.",
          "keys": [
            "vội bán rẻ"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Keep your nationality, and you still stand in the same group as citizens at home.",
          "sub": "Còn giữ quốc tịch thì bạn vẫn đứng trong nhóm có quyền như công dân trong nước.",
          "keys": [
            "vẫn đứng trong nhóm"
          ]
        }
      ],
      "ref": "p1,p2,p3"
    },
    {
      "id": "s04",
      "module": "BRK-12",
      "data": {
        "word": "Quốc tịch",
        "sub": "Quốc tịch quyết định nhóm, nơi ở thì không",
        "from": [
          1250,
          600
        ],
        "others": [
          "Điều 4",
          "Nhóm 1",
          "Nhóm 2"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Nationality.",
          "sub": "Quốc tịch."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your nationality decides your group. Where you live does not.",
          "sub": "Quốc tịch quyết định nhóm của bạn, nơi ở thì không.",
          "keys": [
            "Quốc tịch quyết định nhóm"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p4"
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
            "text": "② Còn quốc tịch · tự đứng tên",
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
                  "id": "dung",
                  "side": "right",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "mobile-phone",
                "house-with-garden"
              ]
            },
            "at": "l1:Friday",
            "caption": "Tối thứ Sáu · Thảo gọi về",
            "icon": "mobile-phone"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Được giao đất, thuê đất",
            "x": 5964,
            "y": 170,
            "size": 44,
            "at": "l5:allocated"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Nhận chuyển nhượng quyền sử dụng đất",
            "x": 5964,
            "y": 235,
            "size": 38,
            "at": "l5:transfers"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Mua, thuê mua nhà gắn đất ở",
            "x": 5964,
            "y": 300,
            "size": 40,
            "at": "l6:buy"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "→ tự đứng tên, không nhờ ai",
            "x": 5964,
            "y": 380,
            "size": 48,
            "at": "l6:own name",
            "color": "accent",
            "hl": [
              {
                "text": "tự đứng tên",
                "at": "l6:own name"
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
          "say": "Second stop: Friday night. Bà Tư's phone rings.",
          "sub": "Chặng hai: tối thứ Sáu. Điện thoại Bà Tư đổ chuông."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Thảo, her daughter, settled abroad and still a Vietnamese citizen.",
          "sub": "Đây là Thảo, con gái bà, định cư nước ngoài và vẫn là công dân Việt Nam.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And Dũng, Bà Tư's grandson at home, never far from the phone.",
          "sub": "Còn Dũng, cháu nội Bà Tư ở quê, lúc nào cũng kè kè điện thoại.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Mom, I want to buy the small plot next to our house.",
          "sub": "Mẹ ơi, con muốn mua mảnh đất nhỏ cạnh nhà mình.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "As a citizen abroad, she can be allocated or lease land, and receive land use right transfers, like citizens at home.",
          "sub": "Là công dân ở nước ngoài, Thảo được Nhà nước giao đất, cho thuê đất, được nhận chuyển nhượng quyền sử dụng đất như công dân trong nước."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "She can buy a house with residential land, in her own name. No stand-in needed.",
          "sub": "Cũng được mua, thuê mua nhà ở gắn liền với đất ở, tự đứng tên, không cần nhờ ai.",
          "keys": [
            "tự đứng tên"
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
      "module": "DLG-01",
      "data": {
        "set": "online",
        "label": "Dũng xin đứng tên giùm",
        "actors": [
          {
            "id": "thao",
            "side": "left"
          },
          {
            "id": "dung",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Nhờ cháu đứng tên giùm",
          "why": "Trên giấy, người đứng tên mới là người có quyền; nhờ đứng tên dễ sinh tranh chấp.",
          "rule": "Còn quốc tịch thì tự đứng tên"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Put the plot in my name, Aunt Thảo. Easier for you!",
          "sub": "Cô Thảo cứ để cháu đứng tên giùm. Cho cô đỡ phiền!",
          "face": "happy",
          "pose": "thumb",
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
          "say": "On paper, the named person holds the rights. That's how family fights begin.",
          "sub": "Trên giấy, người đứng tên mới là người có quyền. Tranh chấp trong nhà bắt đầu từ đó.",
          "keys": [
            "người đứng tên mới là người có quyền"
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
          "who": "thao",
          "say": "Thanks, Dũng. I'm still a citizen. It goes in my own name.",
          "sub": "Cảm ơn Dũng. Cô vẫn là công dân Việt Nam, cô tự đứng tên.",
          "phase": "redo",
          "pose": "explain",
          "face": "happy"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p7"
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
            "id": "d-13",
            "t": "text",
            "text": "Luật 2013 · Điều 5: tách nhóm",
            "x": 5964,
            "y": 480,
            "size": 40,
            "at": "l1:2013",
            "color": "muted"
          },
          {
            "id": "d-24",
            "t": "text",
            "text": "2024 · khoản 3 Điều 4: hết tách",
            "x": 5964,
            "y": 545,
            "size": 40,
            "at": "l2:clause three",
            "color": "accent",
            "hl": [
              {
                "text": "hết tách",
                "at": "l2:fixed"
              }
            ]
          },
          {
            "id": "d-old",
            "t": "text",
            "text": "Xưa: nhờ anh em đứng tên giùm",
            "x": 6824,
            "y": 610,
            "size": 40,
            "at": "l3:relatives",
            "color": "coral"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Còn quốc tịch → tự đứng tên",
            "x": 6824,
            "y": 680,
            "size": 46,
            "at": "l4:own name",
            "color": "accent",
            "hl": [
              {
                "text": "tự đứng tên",
                "at": "l4:own name"
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
          "say": "Why did Dũng even offer? Article five of the 2013 Land Law separated people abroad from people at home.",
          "sub": "Sao Dũng lại đề nghị thế? Vì Điều 5 Luật Đất đai 2013 tách người ở nước ngoài khỏi hộ gia đình, cá nhân trong nước.",
          "keys": [
            "Luật Đất đai 2013"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Clause three, Article four of the 2024 law fixed that. A real step forward for overseas Vietnamese.",
          "sub": "Khoản 3 Điều 4 Luật 2024 đã khắc phục sự phân biệt này, nên nhiều bài gọi là bước mở rộng quyền cho kiều bào.",
          "keys": [
            "khắc phục"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Back then, many families had relatives at home hold title to land paid for from abroad.",
          "sub": "Trước đây, không ít gia đình nhờ anh chị em trong nước đứng tên giùm mảnh đất do người ở nước ngoài bỏ tiền mua."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lesson: keep your nationality, put your own name on the title.",
          "sub": "Rút ra: còn quốc tịch thì tự đứng tên, đừng nhờ người khác đứng hộ.",
          "keys": [
            "tự đứng tên"
          ]
        }
      ],
      "ref": "p6,p7,p8"
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
            "text": "③ Thứ Bảy · Giỗ đầu của mẹ",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third stop"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8792,
            "y": 130,
            "w": 720,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "binh",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "red-paper-lantern",
                "house"
              ]
            },
            "at": "l1:anniversary",
            "caption": "Sáng thứ Bảy · nhà mẹ Bác Bình",
            "icon": "house"
          },
          {
            "id": "e-g",
            "t": "text",
            "text": "Bác Bình: người gốc Việt",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l3:origin",
            "color": "coral",
            "hl": [
              {
                "text": "gốc Việt",
                "at": "l3:origin"
              }
            ]
          },
          {
            "id": "e-28",
            "t": "text",
            "text": "Điểm h khoản 1 Điều 28",
            "x": 7932,
            "y": 250,
            "size": 44,
            "at": "l4:point h",
            "color": "accent"
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "• mua, thuê mua nhà gắn đất ở",
            "x": 7952,
            "y": 320,
            "size": 38,
            "at": "l4:buy"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "• nhận thừa kế",
            "x": 7952,
            "y": 375,
            "size": 38,
            "at": "l4:inherit"
          },
          {
            "id": "e-c",
            "t": "text",
            "text": "• nhận tặng cho từ hàng thừa kế",
            "x": 7952,
            "y": 430,
            "size": 38,
            "at": "l4:gifts"
          },
          {
            "id": "e-d",
            "t": "text",
            "text": "nếu được phép nhập cảnh",
            "x": 7932,
            "y": 500,
            "size": 46,
            "at": "l5:enter",
            "color": "accent",
            "hl": [
              {
                "text": "được phép nhập cảnh",
                "at": "l5:allowed"
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
          "say": "Third stop: Saturday morning, the first anniversary of his mother's death.",
          "sub": "Chặng ba: sáng thứ Bảy, giỗ đầu mẹ Bác Bình."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Mom left this house, on residential land. I'm a foreign citizen now. Am I still her heir?",
          "sub": "Mẹ để lại căn nhà trên đất ở này. Bác giờ mang quốc tịch nước ngoài. Bác còn được hưởng thừa kế không?",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Uncle Bình is a person of Vietnamese origin. His rights are listed separately.",
          "sub": "Bác Bình thuộc nhóm người gốc Việt Nam định cư ở nước ngoài. Quyền của bác được quy định riêng.",
          "keys": [
            "người gốc Việt Nam"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Point h, clause one, Article twenty eight: buy or lease-purchase a house with residential land, inherit, and receive gifts from heirs.",
          "sub": "Điểm h khoản 1 Điều 28: được mua, thuê mua nhà ở gắn liền với đất ở, nhận thừa kế, nhận tặng cho từ người thuộc hàng thừa kế.",
          "keys": [
            "Điều 28"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The condition: being allowed to enter Vietnam.",
          "sub": "Điều kiện đi kèm: được phép nhập cảnh vào Việt Nam.",
          "keys": [
            "được phép nhập cảnh"
          ]
        }
      ],
      "ref": "p9,p11"
    },
    {
      "id": "s09",
      "module": "BRK-10",
      "data": {
        "quote": "Được mua, thuê mua nhà ở gắn liền với quyền sử dụng đất ở",
        "mark": "nhà ở gắn liền với quyền sử dụng đất ở",
        "by": "Điểm h khoản 1 Điều 28, Luật Đất đai 2024",
        "illus": "house-with-garden"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The exact words of the law.",
          "sub": "Nguyên văn luật."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Point h, clause one, Article twenty eight.",
          "sub": "Điểm h khoản 1 Điều 28, Luật Đất đai 2024."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p9"
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
            "id": "e-37",
            "t": "text",
            "text": "Điều 37, Điều 44: nhận thừa kế",
            "x": 7932,
            "y": 580,
            "size": 40,
            "at": "l1:thirty seven",
            "hl": [
              {
                "text": "nhận thừa kế",
                "at": "l1:inherits"
              }
            ]
          },
          {
            "id": "e-v2",
            "t": "text",
            "text": "Không đủ → hưởng giá trị",
            "x": 7932,
            "y": 640,
            "size": 38,
            "at": "l2:value",
            "color": "coral",
            "hl": [
              {
                "text": "hưởng giá trị",
                "at": "l2:value"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Mất quốc tịch ≠ mất phần",
            "x": 8792,
            "y": 640,
            "size": 52,
            "at": "l3:share",
            "color": "accent",
            "hl": [
              {
                "text": "≠ mất phần",
                "at": "l3:losing your share"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật 26/9/2025",
            "x": 7932,
            "y": 710,
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
          "say": "Under Articles thirty seven and forty four, if he may enter Vietnam, he inherits the land use right and the house.",
          "sub": "Theo điểm đ khoản 1 Điều 37 và khoản 1 Điều 44: được phép nhập cảnh thì nhận thừa kế quyền sử dụng đất và sở hữu nhà ở gắn liền."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "If not, his name can't go on the title, but he still receives the value of his share.",
          "sub": "Nếu không đủ điều kiện, bác không đứng tên được, nhưng vẫn được hưởng giá trị phần di sản.",
          "keys": [
            "hưởng giá trị phần di sản"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Lesson: losing your nationality is not losing your share. But the conditions are different.",
          "sub": "Rút ra: mất quốc tịch chưa chắc mất phần, nhưng điều kiện khác hẳn.",
          "keys": [
            "chưa chắc mất phần"
          ]
        }
      ],
      "ref": "p10,p11,p12"
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
            "at": "l3",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Chiều thứ Bảy · “Để đó”",
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
                  "id": "binh",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "tu",
                  "side": "right",
                  "face": "worried"
                }
              ],
              "props": [
                "page-facing-up",
                "hourglass-not-done"
              ]
            },
            "at": "l1:afternoon",
            "caption": "Chiều thứ Bảy · sau đám giỗ",
            "icon": "hourglass-not-done"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Văn bản thừa kế đất:",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l4:inheritance"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "phải công chứng / chứng thực",
            "x": 80,
            "y": 1330,
            "size": 46,
            "at": "l4:notarised",
            "color": "accent",
            "hl": [
              {
                "text": "công chứng",
                "at": "l4:notarised"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Điểm c khoản 3 Điều 27",
            "x": 80,
            "y": 1400,
            "size": 36,
            "at": "l4:point c",
            "color": "muted"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "Ở xa: qua cơ quan đại diện",
            "x": 60,
            "y": 1480,
            "size": 40,
            "at": "l5:mission"
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "hoặc uỷ quyền cho người ở nhà",
            "x": 80,
            "y": 1540,
            "size": 38,
            "at": "l5:authority"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: Saturday afternoon. The guests have gone home.",
          "sub": "Chặng bốn: chiều thứ Bảy. Khách đã về hết."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "My brothers say: leave the house be. We'll sort it out when you come back.",
          "sub": "Mấy em bảo: cứ để đó, khi nào anh về rồi tính.",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "tu",
          "say": "Leave it be? Your mother has been gone a whole year!",
          "sub": "Để đó? Bác gái đi cả năm rồi đấy!",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Point c, clause three, Article twenty seven: inheritance documents on land must be notarised or certified.",
          "sub": "Điểm c khoản 3 Điều 27: văn bản về thừa kế quyền sử dụng đất phải công chứng hoặc chứng thực.",
          "keys": [
            "công chứng hoặc chứng thực"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "From abroad, heirs usually sign through a Vietnamese mission, or give authority to someone at home.",
          "sub": "Người ở nước ngoài thường ký qua cơ quan đại diện Việt Nam, hoặc uỷ quyền cho người trong nước."
        }
      ],
      "ref": "p13,p15"
    },
    {
      "id": "s12",
      "module": "BRK-11",
      "data": {
        "title": "Thời hiệu thừa kế",
        "items": [
          "30 năm: chia nhà đất",
          "10 năm: xác nhận quyền thừa kế",
          "3 năm: nghĩa vụ tài sản"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three years: making heirs pay the dead person's debts.",
          "sub": "Ba năm: yêu cầu người thừa kế thực hiện nghĩa vụ tài sản."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ten years: confirming or rejecting a right to inherit.",
          "sub": "Mười năm: xác nhận hoặc bác bỏ quyền thừa kế."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Thirty years: dividing real estate.",
          "sub": "Ba mươi năm: yêu cầu chia di sản là bất động sản.",
          "keys": [
            "Ba mươi năm"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p14"
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
            "id": "f-623",
            "t": "text",
            "text": "Điều 623 BLDS 2015",
            "x": 60,
            "y": 1630,
            "size": 40,
            "at": "l1:Article six",
            "color": "muted"
          },
          {
            "id": "f-run",
            "t": "text",
            "text": "Không ai chia… thời hiệu vẫn chạy",
            "x": 60,
            "y": 1690,
            "size": 42,
            "at": "l2:running",
            "color": "coral",
            "hl": [
              {
                "text": "vẫn chạy",
                "at": "l2:running"
              }
            ]
          },
          {
            "id": "f-do",
            "t": "text",
            "text": "→ hẹn ngày lập văn bản phân chia",
            "x": 920,
            "y": 1730,
            "size": 38,
            "at": "l3:date",
            "color": "accent",
            "hl": [
              {
                "text": "văn bản phân chia",
                "at": "l3:written division"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật 26/9/2025",
            "x": 60,
            "y": 1800,
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
          "say": "Article six two three of the Civil Code 2015 counts these from the moment the inheritance opens.",
          "sub": "Điều 623 Bộ luật Dân sự 2015 tính các mốc này từ thời điểm mở thừa kế."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Year after year, nobody writes a division. The clock keeps running from the day his mother died.",
          "sub": "Năm này qua năm khác không ai lập văn bản phân chia, mà thời hiệu vẫn chạy từ ngày mẹ bác mất.",
          "keys": [
            "thời hiệu vẫn chạy"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Then let's set a date this year, for a written division.",
          "sub": "Vậy hẹn một ngày ngay trong năm nay, lập văn bản thoả thuận phân chia.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "An estate never divides itself. But the deadlines keep running.",
          "sub": "Di sản để lâu không tự chia, thời hiệu thì cứ chạy.",
          "keys": [
            "không tự chia"
          ]
        }
      ],
      "ref": "p14,p15,p16"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Chủ nhật · Quyền và nghĩa vụ",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth stop"
          },
          {
            "id": "g-q",
            "t": "text",
            "text": "Quyền",
            "x": 2028,
            "y": 1250,
            "size": 56,
            "at": "l2:rights",
            "color": "accent"
          },
          {
            "id": "g-q1",
            "t": "text",
            "text": "• giấy chứng nhận khi đủ điều kiện",
            "x": 2028,
            "y": 1330,
            "size": 36,
            "at": "l2:certificate"
          },
          {
            "id": "g-q2",
            "t": "text",
            "text": "• hưởng thành quả đầu tư trên đất",
            "x": 2028,
            "y": 1385,
            "size": 36,
            "at": "l2:investment"
          },
          {
            "id": "g-q3",
            "t": "text",
            "text": "• được Nhà nước bảo hộ",
            "x": 2028,
            "y": 1440,
            "size": 36,
            "at": "l3:protection"
          },
          {
            "id": "g-q4",
            "t": "text",
            "text": "• bồi thường, hỗ trợ, tái định cư",
            "x": 2028,
            "y": 1495,
            "size": 36,
            "at": "l3:compensation"
          },
          {
            "id": "g-q5",
            "t": "text",
            "text": "• khiếu nại, tố cáo, khởi kiện",
            "x": 2028,
            "y": 1550,
            "size": 36,
            "at": "l3:lawsuit"
          },
          {
            "id": "g-n",
            "t": "text",
            "text": "Nghĩa vụ",
            "x": 2868,
            "y": 1250,
            "size": 56,
            "at": "l4:duties",
            "color": "coral"
          },
          {
            "id": "g-n1",
            "t": "text",
            "text": "• đúng mục đích, đúng ranh giới",
            "x": 2868,
            "y": 1330,
            "size": 36,
            "at": "l4:purpose"
          },
          {
            "id": "g-n2",
            "t": "text",
            "text": "• đăng ký khi cho thuê, thế chấp…",
            "x": 2868,
            "y": 1385,
            "size": 36,
            "at": "l4:register"
          },
          {
            "id": "g-n3",
            "t": "text",
            "text": "• nghĩa vụ tài chính",
            "x": 2868,
            "y": 1440,
            "size": 36,
            "at": "l5:financial"
          },
          {
            "id": "g-n4",
            "t": "text",
            "text": "• bảo vệ đất, môi trường",
            "x": 2868,
            "y": 1495,
            "size": 36,
            "at": "l5:environment"
          },
          {
            "id": "g-n5",
            "t": "text",
            "text": "• giao lại đất khi bị thu hồi",
            "x": 2868,
            "y": 1550,
            "size": 36,
            "at": "l5:hand"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Ở xa, nghĩa vụ vẫn còn",
            "x": 2028,
            "y": 1680,
            "size": 56,
            "at": "l6:vanish",
            "color": "accent",
            "hl": [
              {
                "text": "vẫn còn",
                "at": "l6:vanish"
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
          "say": "Fifth stop: Sunday. Rights are nice. They come with a backpack of duties.",
          "sub": "Chặng năm: Chủ nhật. Quyền thì vui. Nhưng quyền đi kèm một ba lô nghĩa vụ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Rights first: a certificate when eligible, and the fruits of your work and investment on the land.",
          "sub": "Quyền: được cấp giấy chứng nhận khi đủ điều kiện, hưởng thành quả lao động và đầu tư trên đất."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "State protection, compensation, support and resettlement when land is recovered, and the right to complain or file a lawsuit.",
          "sub": "Được Nhà nước bảo hộ, được bồi thường, hỗ trợ, tái định cư khi bị thu hồi đất, được khiếu nại, tố cáo, khởi kiện.",
          "keys": [
            "bồi thường, hỗ trợ, tái định cư"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Duties: use land for its purpose, within its borders. Register and do the procedures when you lease or mortgage.",
          "sub": "Nghĩa vụ: dùng đất đúng mục đích, đúng ranh giới; đăng ký, làm đủ thủ tục khi chuyển đổi, chuyển nhượng, cho thuê, thế chấp."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Pay financial obligations, protect the land and environment, and hand land back when it's recovered.",
          "sub": "Thực hiện nghĩa vụ tài chính, bảo vệ đất và môi trường, giao lại đất khi có quyết định thu hồi."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Living abroad doesn't make these duties vanish.",
          "sub": "Ở xa không làm các nghĩa vụ này tự biến mất.",
          "keys": [
            "tự biến mất"
          ]
        }
      ],
      "ref": "p17,p18"
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
            "text": "Chủ nhật tối · Một trang chia việc",
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
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "clipboard",
                "mobile-phone"
              ]
            },
            "at": "l1:Thảo",
            "caption": "Chủ nhật tối · gọi video",
            "icon": "clipboard"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1270,
            "w": 40,
            "h": 40,
            "at": "l2:purpose",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1254,
            "size": 50,
            "at": "l2:purpose+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Đất dùng đúng mục đích trên sổ?",
            "x": 4058,
            "y": 1260,
            "size": 36,
            "at": "l2:purpose+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1360,
            "w": 40,
            "h": 40,
            "at": "l3:financial",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1344,
            "size": 50,
            "at": "l3:financial+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Nghĩa vụ tài chính đến hạn?",
            "x": 4058,
            "y": 1350,
            "size": 36,
            "at": "l3:financial+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1450,
            "w": 40,
            "h": 40,
            "at": "l4:mortgage",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1434,
            "size": 50,
            "at": "l4:mortgage+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Cho thuê, thế chấp: ai đăng ký?",
            "x": 4058,
            "y": 1440,
            "size": 36,
            "at": "l4:mortgage+200"
          },
          {
            "id": "h-w",
            "t": "text",
            "text": "Ghi ai lo gì, chụp gửi nhà",
            "x": 3996,
            "y": 1560,
            "size": 40,
            "at": "l5:photo",
            "hl": [
              {
                "text": "chụp gửi nhà",
                "at": "l5:photo"
              }
            ]
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Đứng tên xa, nghĩa vụ gần",
            "x": 3996,
            "y": 1670,
            "size": 52,
            "at": "l6:nearby",
            "color": "accent",
            "hl": [
              {
                "text": "nghĩa vụ gần",
                "at": "l6:nearby"
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
          "say": "Sunday night. Thảo calls Dũng with a list, the way she likes it.",
          "sub": "Tối Chủ nhật. Thảo gọi Dũng, kèm một danh sách, đúng kiểu Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "First: is the land used for the purpose written on the certificate?",
          "sub": "Thứ nhất: đất có đang dùng đúng mục đích ghi trên sổ không?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Second: any financial obligation coming due?",
          "sub": "Thứ hai: có khoản nghĩa vụ tài chính nào đến hạn không?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Third: if we lease or mortgage later, who handles the registration?",
          "sub": "Thứ ba: sau này cho thuê hay thế chấp, ai lo thủ tục đăng ký?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "I'll write who does what on one page, then send a photo to the whole family.",
          "sub": "Cháu ghi ai lo việc gì vào một trang, rồi chụp gửi cả nhà.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Hold title from afar? Then someone nearby must handle the duties.",
          "sub": "Đứng tên từ xa thì phải có người làm nghĩa vụ ở gần.",
          "keys": [
            "người làm nghĩa vụ ở gần"
          ]
        }
      ],
      "ref": "p19,p20"
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
            "text": "Sáng thứ Hai · vẫn quán ấy",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Monday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "tu",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "hot-beverage",
                "luggage"
              ]
            },
            "at": "l1:café",
            "caption": "Sáng thứ Hai · trước giờ Bác Bình bay",
            "icon": "luggage"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Bà Tư: công dân → như ở nhà",
            "x": 5964,
            "y": 1270,
            "size": 44,
            "at": "l2:citizen",
            "color": "accent"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Bác Bình: gốc Việt → có điều kiện",
            "x": 5964,
            "y": 1350,
            "size": 44,
            "at": "l3:conditions",
            "color": "coral"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Văn bản phân chia: đã hẹn ngày",
            "x": 5964,
            "y": 1430,
            "size": 40,
            "at": "l3:date"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Giấy trắng mực đen”",
            "x": 5964,
            "y": 1560,
            "size": 58,
            "at": "l4:black ink",
            "color": "accent",
            "hl": [
              {
                "text": "mực đen",
                "at": "l4:black ink"
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
          "say": "Monday morning. Same café, same two neighbours, same question.",
          "sub": "Sáng thứ Hai. Vẫn quán ấy, vẫn hai người hàng xóm, vẫn câu hỏi ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "tu",
          "say": "Same boat? No. I'm still a citizen, so I'm in the citizen group.",
          "sub": "Cùng thuyền á? Không đâu. Tôi vẫn là công dân, nên thuộc nhóm như người trong nước.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "And I'm the origin group, with conditions. And a date for the division.",
          "sub": "Còn tôi là người gốc Việt, có điều kiện. Và đã hẹn ngày lập văn bản phân chia.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "White paper, black ink. This time, the right names, on time.",
          "sub": "“Giấy trắng mực đen.” Lần này đúng tên, đúng lúc.",
          "keys": [
            "Giấy trắng mực đen"
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
      "ref": "p11,p16"
    },
    {
      "id": "s17",
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
            "fit": "J",
            "ms": 1000
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tóm tắt · việc làm ngay",
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
            "at": "l3:origin"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1560,
            "y": 1130,
            "at": "l4:Estates"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Kiểm giấy tờ quốc tịch",
            "x": 7932,
            "y": 1270,
            "size": 50,
            "at": "l5:nationality papers",
            "color": "accent"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Kiểm tên trên giấy chứng nhận",
            "x": 7932,
            "y": 1350,
            "size": 50,
            "at": "l5:certificate"
          },
          {
            "id": "j-nx",
            "t": "text",
            "text": "Bài tiếp: uỷ quyền cho người thân",
            "x": 7932,
            "y": 1470,
            "size": 40,
            "at": "l6:Next",
            "color": "muted"
          },
          {
            "id": "j-note",
            "t": "text",
            "text": "Bài để tham khảo, không phải tư vấn vụ việc cụ thể. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1730,
            "size": 26,
            "at": "l6",
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
            "at": "l6",
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
          "say": "So, one question rules it all.",
          "sub": "Tóm lại, mọi thứ xoay quanh một câu hỏi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Still Vietnamese nationality? Then citizen rights, and your own name on the title.",
          "sub": "Còn quốc tịch Việt Nam? Thì quyền như người trong nước, tự đứng tên.",
          "keys": [
            "tự đứng tên"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Of Vietnamese origin? Buy a house with residential land, inherit, receive gifts from heirs, if allowed to enter.",
          "sub": "Người gốc Việt? Được mua nhà ở gắn với đất ở, nhận thừa kế, nhận tặng cho từ hàng thừa kế, khi được phép nhập cảnh."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Estates don't divide themselves, and duties don't vanish abroad.",
          "sub": "Di sản không tự chia, nghĩa vụ không tự biến mất."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Today: check your nationality papers, and the name on your certificate.",
          "sub": "Việc làm ngay: kiểm lại giấy tờ quốc tịch của mình và tên trên giấy chứng nhận.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next: giving a relative authority, safely. And laws change, so check before you act.",
          "sub": "Bài tiếp theo: uỷ quyền cho người thân thế nào cho an toàn. Luật có thể đổi, kiểm lại trước khi làm."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s18",
      "module": "QUIZ-01",
      "data": {
        "q": "How long is the time limit to request division of real estate in an estate?",
        "options": [
          "Three months, counted from the day of the funeral ceremony",
          "Thirty years, counted from the moment the inheritance is opened",
          "One year, counted from the day the house was first built"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "hourglass-done",
        "why": "Chia di sản là bất động sản: thời hiệu 30 năm."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "How long is the time limit to request division of real estate in an estate?",
          "sub": "Thời hiệu yêu cầu chia di sản là bất động sản là bao lâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Thirty years, counted from the moment the inheritance is opened.",
          "sub": "Ba mươi năm, tính từ thời điểm mở thừa kế."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Article six two three of the Civil Code: thirty years for real estate.",
          "sub": "Điều 623 Bộ luật Dân sự 2015: chia di sản là bất động sản, thời hiệu 30 năm."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[26]"
    },
    {
      "id": "s19",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Người Việt ở nước ngoài và nhà đất"
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
  "hook": "HOOK-21",
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-21: câu hỏi để đoán sai (hai người hàng xóm cùng ở nước ngoài, ai còn quyền như người trong nước? A không ai / B người còn quốc tịch, p3). Đét đứng trái + bảng trắng 10 ô theo BA NGÀY BÁC BÌNH VỀ QUÊ GIỖ ĐẦU MẸ: chiều thứ Sáu cà phê với Bà Tư (Điều 4, p1–p3; BRK-12 “Quốc tịch” p4) → tối thứ Sáu Thảo gọi về mua đất (p5; “Khoan đã!” Dũng xin đứng tên giùm p7; Luật 2013 ↔ 2024 p6, p8) → sáng thứ Bảy giỗ, Bác Bình gốc Việt (p9, p11; BRK-10 trích điểm h khoản 1 Điều 28; Điều 37, 44 p10, p12) → chiều thứ Bảy “để đó” (p13, p15; BRK-11 thời hiệu 30/10/3 năm p14; p16) → Chủ nhật quyền và nghĩa vụ (p17, p18) → tối Chủ nhật Thảo, Dũng chia việc (p19, p20) → sáng thứ Hai cùng quán, cùng câu hỏi (khép vòng “Giấy trắng mực đen”). Nhân vật: Bà Tư, Bác Bình (vai “ông Hùng” p11 + “chị Thu” p15), Thảo (vai “anh Minh” p19), Dũng. Mọi điều, khoản, mốc lấy từ bài; lưu ý chung #133 ở ô J.",
  "loop": {
    "open": "s01",
    "close": "s16"
  }
};
