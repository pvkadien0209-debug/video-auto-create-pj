// bar-evening-weekend-class--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-evening-weekend-class--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "bar-inhouse-to-lawyer",
    "slug": "bar-evening-weekend-class",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Chọn lớp đào tạo nghề luật sư buổi tối hay cuối tuần?",
    "series": "Vừa làm pháp chế vừa lấy thẻ luật sư — lộ trình cho người đang đi làm"
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
            "id": "a-num",
            "t": "text",
            "text": "36.600.000 đ",
            "x": 60,
            "y": 60,
            "size": 150,
            "at": "l1:thirty-six",
            "color": "accent",
            "hl": [
              {
                "text": "36.600.000 đ",
                "at": "l1:thousand"
              }
            ]
          },
          {
            "id": "a-two",
            "t": "text",
            "text": "hệ tối = hệ cuối tuần",
            "x": 70,
            "y": 260,
            "size": 60,
            "at": "l2:weekend"
          },
          {
            "id": "a-but",
            "t": "text",
            "text": "giá như nhau, cái giá khác nhau",
            "x": 70,
            "y": 350,
            "size": 50,
            "at": "l3:detail",
            "color": "coral",
            "hl": [
              {
                "text": "cái giá khác nhau",
                "at": "l3:cost"
              }
            ]
          },
          {
            "id": "a-light",
            "t": "text",
            "text": "Ta tưởng: lớp tối là lớp nhẹ?",
            "x": 70,
            "y": 440,
            "size": 50,
            "at": "l4:lighter",
            "color": "muted"
          },
          {
            "id": "a-lx",
            "t": "strike",
            "over": "a-light",
            "at": "l5:not"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: Thông báo tuyển sinh khoá 28 lần 1/2026, Học viện Tư pháp",
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
          "say": "Thirty-six million, six hundred thousand dong.",
          "sub": "36.600.000 đồng.",
          "keys": [
            "36.600.000"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The fee for an evening lawyer training class. And for a weekend class too.",
          "sub": "Học phí lớp đào tạo nghề luật sư hệ buổi tối. Và hệ cuối tuần cũng vậy.",
          "keys": [
            "hệ buổi tối",
            "hệ cuối tuần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But one detail matters: same price, very different cost to your life.",
          "sub": "Nhưng có một chi tiết: giá như nhau, mà cái giá phải trả cho đời sống thì khác hẳn.",
          "keys": [
            "cái giá"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Many think the evening class is the lighter one.",
          "sub": "Nhiều người tưởng lớp tối là lớp nhẹ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "It's not. So what really decides?",
          "sub": "Không phải. Vậy điều gì thật sự quyết định?"
        }
      ],
      "ref": "intro,p8"
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
            "x": 880,
            "y": 150,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "laptop",
                "coin"
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
            "at": "l1",
            "caption": "Tối thứ Hai tuần 1 · nhà Thảo",
            "icon": "laptop"
          },
          {
            "id": "a-coin",
            "t": "text",
            "text": "tung đồng xu?",
            "x": 60,
            "y": 560,
            "size": 50,
            "at": "l2:coin",
            "color": "coral"
          },
          {
            "id": "a-cx",
            "t": "strike",
            "over": "a-coin",
            "at": "l3:coin"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Thảo, four years in a company legal team, notebook always open.",
          "sub": "Đây là Thảo, pháp chế bốn năm ở một công ty, sổ tay lúc nào cũng mở."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Evening or weekend? Same fee. Should I just toss a coin?",
          "sub": "Tối hay cuối tuần? Học phí như nhau. Hay tung đồng xu nhỉ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Put the coin away. Two weeks to choose. Let's go.",
          "sub": "Cất đồng xu đi. Hai tuần để chọn. Bắt đầu nào.",
          "keys": [
            "Hai tuần để chọn"
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
            "text": "Học tối hay cuối tuần?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:evening",
            "hl": [
              {
                "text": "tối",
                "at": "l1:evening"
              },
              {
                "text": "cuối tuần",
                "at": "l1:weekend"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: rẻ hơn, nhẹ hơn",
            "x": 2028,
            "y": 150,
            "size": 50,
            "at": "l2:cheaper",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:but"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: giữ được 12 tháng",
            "x": 2028,
            "y": 230,
            "size": 56,
            "at": "l2:twelve",
            "color": "accent",
            "hl": [
              {
                "text": "giữ được 12 tháng",
                "at": "l2:keep"
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
          "say": "So, the evening class or the weekend class?",
          "sub": "Vậy học hệ buổi tối hay hệ cuối tuần?",
          "keys": [
            "buổi tối",
            "cuối tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not which is cheaper or lighter. But which one you can keep for twelve months.",
          "sub": "Không phải hệ nào rẻ hơn, nhẹ hơn. Mà là hệ nào mình giữ được đủ 12 tháng.",
          "keys": [
            "giữ được đủ 12 tháng"
          ]
        }
      ],
      "ref": "p7"
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
            "fit": [
              "b-12",
              "b-gate"
            ],
            "zoom": 1.05,
            "ms": 800
          },
          {
            "at": "l4",
            "fit": "B",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "b-12",
            "t": "text",
            "text": "12 tháng · 36 tín chỉ · xét tuyển",
            "x": 2028,
            "y": 330,
            "size": 50,
            "at": "l1:twelve",
            "hl": [
              {
                "text": "xét tuyển",
                "at": "l1:application"
              }
            ]
          },
          {
            "id": "b-12s",
            "t": "text",
            "text": "chưa tính nghỉ hè, Lễ, Tết",
            "x": 2058,
            "y": 395,
            "size": 38,
            "at": "l1:holidays",
            "color": "muted"
          },
          {
            "id": "b-dk",
            "t": "text",
            "text": "Cử nhân luật · công dân thường trú",
            "x": 2028,
            "y": 460,
            "size": 44,
            "at": "l2:law degree"
          },
          {
            "id": "b-dk2",
            "t": "text",
            "text": "đạo đức tốt · không bị truy cứu, đủ điều kiện án tích",
            "x": 2028,
            "y": 515,
            "size": 28,
            "at": "l2:criminal",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "b-ft",
            "t": "text",
            "text": "Đi làm toàn thời gian: không loại",
            "x": 2028,
            "y": 570,
            "size": 48,
            "at": "l3:full time",
            "color": "accent",
            "hl": [
              {
                "text": "không loại",
                "at": "l3:does not"
              }
            ]
          },
          {
            "id": "b-gate",
            "t": "text",
            "text": "Cửa bắt buộc trước tập sự",
            "x": 2868,
            "y": 330,
            "size": 48,
            "at": "l4:gate",
            "color": "coral",
            "hl": [
              {
                "text": "bắt buộc",
                "at": "l4:compulsory"
              }
            ]
          },
          {
            "id": "b-gate2",
            "t": "text",
            "text": "cần giấy chứng nhận tốt nghiệp",
            "x": 2888,
            "y": 395,
            "size": 38,
            "at": "l4:certificate"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Luật Luật sư, Điều 12 · Thông tư 10/2021/TT-BTP, Điều 3 · Thông báo tuyển sinh khoá 28 lần 1/2026, Học viện Tư pháp",
            "x": 2028,
            "y": 720,
            "size": 26,
            "at": "l1",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Article twelve: law graduates may join a twelve-month course. Thirty-six credits, holidays excluded, selection by application.",
          "sub": "Điều 12: người có bằng cử nhân luật được dự khoá đào tạo 12 tháng. 36 tín chỉ, chưa tính nghỉ hè, Lễ, Tết; xét tuyển hồ sơ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The notice asks for Vietnamese citizens, good conduct, a clean criminal standing, and a law degree.",
          "sub": "Thông báo yêu cầu: công dân Việt Nam thường trú, đạo đức tốt, không bị truy cứu, đủ điều kiện án tích, có bằng cử nhân luật trở lên."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A full-time job does not exclude you. Phew.",
          "sub": "Đi làm toàn thời gian không phải điều kiện loại trừ. Thở phào.",
          "keys": [
            "không phải điều kiện loại trừ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And it's a compulsory gate: no graduation certificate, no traineeship, unless you're exempt.",
          "sub": "Và đây là cửa bắt buộc: không có giấy chứng nhận tốt nghiệp thì không đăng ký tập sự, trừ người được miễn.",
          "keys": [
            "cửa bắt buộc"
          ]
        }
      ],
      "ref": "p1,p2,p3"
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
            "text": "① Tối thứ Ba · Ba hệ",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:stop one"
          },
          {
            "id": "c-h1",
            "t": "text",
            "text": "• ngày, thứ Hai – thứ Sáu",
            "x": 3996,
            "y": 160,
            "size": 48,
            "at": "l2:weekday daytime"
          },
          {
            "id": "c-h2",
            "t": "text",
            "text": "• tối, thứ Hai – thứ Sáu",
            "x": 3996,
            "y": 230,
            "size": 48,
            "at": "l2:weekday evening",
            "hl": [
              {
                "text": "tối",
                "at": "l2:evening"
              }
            ]
          },
          {
            "id": "c-h3",
            "t": "text",
            "text": "• ngày, thứ Bảy – Chủ nhật",
            "x": 3996,
            "y": 300,
            "size": 48,
            "at": "l2:weekend",
            "hl": [
              {
                "text": "thứ Bảy – Chủ nhật",
                "at": "l2:weekend"
              }
            ]
          },
          {
            "id": "c-pin",
            "t": "illus",
            "name": "round-pushpin",
            "x": 4836,
            "y": 150,
            "size": 80,
            "at": "l3:Hanoi"
          },
          {
            "id": "c-hn",
            "t": "text",
            "text": "Hà Nội: phố Trần Vỹ, Phú Diễn",
            "x": 4936,
            "y": 160,
            "size": 44,
            "at": "l3:Hanoi"
          },
          {
            "id": "c-hcm",
            "t": "text",
            "text": "TP.HCM: 821 Kha Vạn Cân, Linh Xuân",
            "x": 4936,
            "y": 225,
            "size": 40,
            "at": "l3:Ho Chi Minh"
          },
          {
            "id": "c-on",
            "t": "text",
            "text": "Trực tuyến? Thông báo không nhắc",
            "x": 4836,
            "y": 300,
            "size": 44,
            "at": "l4:online",
            "color": "muted",
            "hl": [
              {
                "text": "không nhắc",
                "at": "l4:no mention"
              }
            ]
          },
          {
            "id": "c-map",
            "t": "illus",
            "name": "world-map",
            "x": 3996,
            "y": 420,
            "size": 110,
            "at": "l5:local"
          },
          {
            "id": "c-ht",
            "t": "text",
            "text": "Lớp phối hợp ở địa phương",
            "x": 4136,
            "y": 420,
            "size": 48,
            "at": "l5:local",
            "color": "accent"
          },
          {
            "id": "c-ht2",
            "t": "text",
            "text": "Hà Tĩnh: 70 học viên, 3 tỉnh",
            "x": 4136,
            "y": 485,
            "size": 40,
            "at": "l5:seventy",
            "hl": [
              {
                "text": "70 học viên",
                "at": "l5:seventy"
              }
            ]
          },
          {
            "id": "c-ht3",
            "t": "text",
            "text": "vẫn 12 tháng, 36 tín chỉ",
            "x": 4136,
            "y": 545,
            "size": 40,
            "at": "l6:same",
            "color": "muted"
          },
          {
            "id": "c-ask",
            "t": "text",
            "text": "Ở xa → hỏi Sở Tư pháp",
            "x": 4136,
            "y": 615,
            "size": 50,
            "at": "l6:Department",
            "color": "coral",
            "hl": [
              {
                "text": "hỏi Sở Tư pháp",
                "at": "l6:Department"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Thông báo tuyển sinh khoá 28 lần 1/2026, Học viện Tư pháp · Tạp chí Luật sư Việt Nam, 10/5/2026",
            "x": 3996,
            "y": 725,
            "size": 26,
            "at": "l5",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one: Tuesday night. Three types of class, two campuses.",
          "sub": "Chặng một: tối thứ Ba. Ba hệ, hai nơi học."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Weekday daytime, weekday evening, and weekend daytime.",
          "sub": "Ban ngày thứ Hai đến thứ Sáu, buổi tối thứ Hai đến thứ Sáu, ban ngày thứ Bảy, Chủ nhật."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Campuses in Hanoi and Ho Chi Minh City.",
          "sub": "Cơ sở ở Hà Nội, phố Trần Vỹ, và TP. Hồ Chí Minh, 821 Kha Vạn Cân."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Online? The notice makes no mention.",
          "sub": "Học trực tuyến? Thông báo không nhắc.",
          "keys": [
            "không nhắc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "There are also local joint classes. In Hà Tĩnh, seventy students from three provinces.",
          "sub": "Còn có lớp phối hợp ở địa phương. Ở Hà Tĩnh: 70 học viên từ Hà Tĩnh, Nghệ An, Quảng Trị.",
          "keys": [
            "70 học viên"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Same twelve months, same credits. Live far away? Ask your provincial Department of Justice.",
          "sub": "Vẫn 12 tháng, 36 tín chỉ. Ở xa hai thành phố lớn? Hỏi Sở Tư pháp nơi mình.",
          "keys": [
            "Hỏi Sở Tư pháp"
          ]
        }
      ],
      "ref": "p4,p5"
    },
    {
      "id": "s05",
      "module": "BRK-07",
      "data": {
        "question": "Học phí như nhau. Vậy khác nhau ở đâu?",
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
          "say": "Same fee for both. So where's the real difference?",
          "sub": "Học phí như nhau. Vậy khác nhau ở đâu?",
          "keys": [
            "khác nhau ở đâu"
          ]
        }
      ],
      "ref": "p8"
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
            "at": "a1",
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
            "text": "② Thứ Tư · Hai cái giá",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:stop two"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "thao",
                  "pose": "hold"
                }
              ],
              "left": {
                "label": "Cách A: hệ buổi tối",
                "ok": true
              },
              "right": {
                "label": "Cách B: hệ cuối tuần",
                "ok": true
              }
            },
            "at": "l1:forty",
            "caption": "Thứ Tư · 40 phút tới lớp",
            "icon": "bus"
          },
          {
            "id": "d-moon",
            "t": "illus",
            "name": "crescent-moon",
            "x": 5964,
            "y": 150,
            "size": 80,
            "at": "a1:evening"
          },
          {
            "id": "d-a",
            "t": "text",
            "text": "A: cuối tuần còn cho nhà",
            "x": 6064,
            "y": 160,
            "size": 46,
            "at": "a1:weekends",
            "color": "accent"
          },
          {
            "id": "d-a2",
            "t": "text",
            "text": "nhưng tối nào cũng phi tới lớp",
            "x": 6064,
            "y": 225,
            "size": 40,
            "at": "a2:every",
            "color": "coral"
          },
          {
            "id": "d-sun",
            "t": "illus",
            "name": "sun",
            "x": 5964,
            "y": 310,
            "size": 80,
            "at": "b1:Saturday"
          },
          {
            "id": "d-b",
            "t": "text",
            "text": "B: ngày thường làm trọn",
            "x": 6064,
            "y": 320,
            "size": 46,
            "at": "b1:workdays",
            "color": "accent"
          },
          {
            "id": "d-b2",
            "t": "text",
            "text": "nhưng mất gần hết cuối tuần",
            "x": 6064,
            "y": 385,
            "size": 40,
            "at": "b2:weekends",
            "color": "coral"
          },
          {
            "id": "d-rule",
            "t": "text",
            "text": "Chọn cái giữ được cả năm",
            "x": 5964,
            "y": 500,
            "size": 58,
            "at": "l3:all year",
            "color": "accent",
            "hl": [
              {
                "text": "cả năm",
                "at": "l3:all year"
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
          "say": "Stop two: Wednesday. Thảo's class is forty minutes from her office. Two ways.",
          "sub": "Chặng hai: thứ Tư. Lớp cách chỗ Thảo 40 phút. Hai cách.",
          "keys": [
            "40 phút"
          ]
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "thao",
          "say": "Evening class. My weekends stay free for family!",
          "sub": "Hệ tối. Cuối tuần còn trống cho gia đình!",
          "phase": "a",
          "face": "happy"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "thao",
          "say": "But every evening I leave on time and rush straight there. An urgent task? I'm late.",
          "sub": "Nhưng tối nào cũng phải về đúng giờ, đi thẳng tới lớp. Có việc gấp là muộn.",
          "phase": "a",
          "face": "worried"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "thao",
          "say": "Weekend class. My workdays stay whole, Saturday and Sunday are school.",
          "sub": "Hệ cuối tuần. Ngày thường làm trọn vẹn, thứ Bảy, Chủ nhật đi học.",
          "phase": "b"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "thao",
          "say": "But a whole year of weekends, gone. Miss one day, miss a huge chunk.",
          "sub": "Nhưng gần như mất hết cuối tuần cả năm. Vắng một buổi là hụt cả khối kiến thức.",
          "phase": "b",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Evenings eat your energy, weekends eat your days off. Pick the one you can keep all year.",
          "sub": "Hệ tối lấy sức buổi tối, hệ cuối tuần lấy trọn ngày nghỉ. Chọn cái mình giữ được cả năm.",
          "keys": [
            "giữ được cả năm"
          ]
        }
      ],
      "ref": "p6,p7"
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
            "text": "③ Thứ Năm · Học phí",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:stop three"
          },
          {
            "id": "e-day",
            "t": "text",
            "text": "Ban ngày: 29.280.000 đ",
            "x": 7932,
            "y": 160,
            "size": 50,
            "at": "l1:daytime",
            "color": "muted"
          },
          {
            "id": "e-eve",
            "t": "text",
            "text": "Tối / cuối tuần: 36.600.000 đ",
            "x": 7932,
            "y": 230,
            "size": 50,
            "at": "l1:thirty-six",
            "color": "accent",
            "hl": [
              {
                "text": "36.600.000 đ",
                "at": "l1:thirty-six"
              }
            ]
          },
          {
            "id": "e-up",
            "t": "text",
            "text": "có thể tăng → chỉ để dự trù",
            "x": 7932,
            "y": 300,
            "size": 40,
            "at": "l2:rise",
            "color": "coral",
            "hl": [
              {
                "text": "chỉ để dự trù",
                "at": "l2:budgeting"
              }
            ]
          },
          {
            "id": "e-200",
            "t": "text",
            "text": "+ phí xét tuyển 200.000 đ, chuyển khoản",
            "x": 7932,
            "y": 380,
            "size": 44,
            "at": "l3:two hundred"
          },
          {
            "id": "e-code",
            "t": "text",
            "text": "ghi: họ tên + mã lớp, đúng mẫu",
            "x": 7932,
            "y": 445,
            "size": 44,
            "at": "l3:class code",
            "hl": [
              {
                "text": "mã lớp",
                "at": "l3:class code"
              }
            ]
          },
          {
            "id": "e-warn",
            "t": "text",
            "text": "ghi sai: Học viện không chịu trách nhiệm",
            "x": 7932,
            "y": 505,
            "size": 28,
            "at": "l4:wrong",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "e-uu",
            "t": "text",
            "text": "Ưu đãi: đối tượng chính sách, học viên Học viện",
            "x": 8772,
            "y": 160,
            "size": 30,
            "at": "l5:discounts",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "e-uu2",
            "t": "text",
            "text": "mức giảm: Quyết định 3011/QĐ-HVTP → hỏi lại",
            "x": 8772,
            "y": 200,
            "size": 30,
            "at": "l5:decision",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Thông báo tuyển sinh khoá 28 lần 1/2026, Học viện Tư pháp",
            "x": 7932,
            "y": 545,
            "size": 26,
            "at": "l2",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three: Thursday, money. Daytime: twenty-nine million two eighty. Evening and weekend: thirty-six million six.",
          "sub": "Chặng ba: thứ Năm, chuyện tiền. Ban ngày 29.280.000 đồng. Tối và cuối tuần cùng 36.600.000 đồng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The notice says fees may rise every year. So use it for budgeting only.",
          "sub": "Thông báo ghi học phí có thể tăng hằng năm, nên con số chỉ để dự trù.",
          "keys": [
            "chỉ để dự trù"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Plus a two-hundred-thousand selection fee, by bank transfer: full name plus class code.",
          "sub": "Cộng phí xét tuyển 200.000 đồng, chuyển khoản, ghi họ tên kèm mã lớp theo mẫu.",
          "keys": [
            "họ tên kèm mã lớp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Write it wrong, and the Academy is not responsible. No pressure.",
          "sub": "Ghi sai thì Học viện không chịu trách nhiệm. Nhẹ nhàng thôi mà."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Some groups get discounts with papers. The exact rate is in another Academy decision, so ask.",
          "sub": "Một số nhóm được miễn, giảm khi nộp kèm giấy tờ; mức cụ thể theo Quyết định 3011/QĐ-HVTP, cần hỏi lại Học viện."
        }
      ],
      "ref": "p8,p9,p10"
    },
    {
      "id": "s08",
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
            "at": "l2",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8872,
            "y": 260,
            "w": 640,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "money-bag",
                "receipt"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Năm · bàn bên cạnh",
            "icon": "money-bag"
          },
          {
            "id": "e-s1",
            "t": "text",
            "text": "1. học phí tối: 36.600.000",
            "x": 7932,
            "y": 585,
            "size": 34,
            "at": "l2:thirty-six"
          },
          {
            "id": "e-s2",
            "t": "text",
            "text": "2. + 200.000 xét tuyển",
            "x": 7932,
            "y": 622,
            "size": 34,
            "at": "l2:two hundred"
          },
          {
            "id": "e-s3",
            "t": "text",
            "text": "3. “có thể tăng” → hỏi Học viện",
            "x": 7932,
            "y": 659,
            "size": 34,
            "at": "l3:may rise"
          },
          {
            "id": "e-s4",
            "t": "text",
            "text": "4. chuyển đúng mẫu, chụp biên lai",
            "x": 7932,
            "y": 696,
            "size": 34,
            "at": "l4:receipt",
            "hl": [
              {
                "text": "biên lai",
                "at": "l4:receipt"
              }
            ]
          },
          {
            "id": "e-s5",
            "t": "text",
            "text": "5. nhân sự hỗ trợ học phí?",
            "x": 7932,
            "y": 733,
            "size": 34,
            "at": "l5:HR",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "At the next desk, meet Dũng. Five years in legal, and a spreadsheet for everything.",
          "sub": "Bàn bên là Dũng. Pháp chế năm năm, việc gì cũng lập bảng tính."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Evening class, Hanoi. Thirty-six million six, plus two hundred thousand selection fee.",
          "sub": "Hệ tối, Hà Nội. 36.600.000 đồng, cộng 200.000 đồng phí xét tuyển.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Note: may rise yearly. I'll ask the Academy which rate applies.",
          "sub": "Ghi chú: có thể tăng hằng năm. Hỏi Học viện mức áp dụng cho khoá mình."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Transfer with name and evening class code, then snap the receipt.",
          "sub": "Chuyển khoản ghi họ tên kèm mã lớp hệ tối Hà Nội, rồi chụp lại biên lai."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Last step: ask HR if the company supports tuition. Okay, done!",
          "sub": "Bước cuối: hỏi phòng nhân sự có hỗ trợ học phí không. Ok, xong!",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Budget from the latest notice, pay in the right format, keep the receipt.",
          "sub": "Dự trù bằng thông báo mới nhất, chuyển khoản đúng mẫu, giữ biên lai.",
          "keys": [
            "giữ biên lai"
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
      "ref": "p11,p12"
    },
    {
      "id": "s09",
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
            "text": "④ Thứ Sáu · Hồ sơ, hạn nộp",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:stop four"
          },
          {
            "id": "f-dl",
            "t": "text",
            "text": "Khoá 28: hạn 20/3/2026",
            "x": 60,
            "y": 1240,
            "size": 52,
            "at": "l1:March",
            "color": "coral",
            "hl": [
              {
                "text": "20/3/2026",
                "at": "l1:March"
              }
            ]
          },
          {
            "id": "f-how",
            "t": "text",
            "text": "nộp trực tiếp (giờ hành chính) hoặc bưu điện",
            "x": 60,
            "y": 1310,
            "size": 28,
            "at": "l2:post",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1380,
            "w": 46,
            "h": 46,
            "at": "l3:history",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1362,
            "size": 58,
            "at": "l3:history+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "2 sơ yếu lý lịch, xác nhận",
            "x": 130,
            "y": 1372,
            "size": 44,
            "at": "l3:history+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1460,
            "w": 46,
            "h": 46,
            "at": "l3:forms",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1442,
            "size": 58,
            "at": "l3:forms+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "2 phiếu đăng ký, dán ảnh",
            "x": 130,
            "y": 1452,
            "size": 44,
            "at": "l3:forms+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1540,
            "w": 46,
            "h": 46,
            "at": "l4:copies",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1522,
            "size": 58,
            "at": "l4:copies+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "2 bản chứng thực bằng luật",
            "x": 130,
            "y": 1532,
            "size": 44,
            "at": "l4:copies+200"
          },
          {
            "id": "f-c3",
            "t": "box",
            "x": 60,
            "y": 1620,
            "w": 46,
            "h": 46,
            "at": "l4:photos",
            "stroke": 5
          },
          {
            "id": "f-k3",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1602,
            "size": 58,
            "at": "l4:photos+600",
            "color": "accent"
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "4 ảnh 3x4, ≤ 6 tháng",
            "x": 130,
            "y": 1612,
            "size": 44,
            "at": "l4:photos+200"
          },
          {
            "id": "f-c4",
            "t": "box",
            "x": 60,
            "y": 1700,
            "w": 46,
            "h": 46,
            "at": "l5:discount",
            "stroke": 5
          },
          {
            "id": "f-k4",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1682,
            "size": 58,
            "at": "l5:discount+600",
            "color": "accent"
          },
          {
            "id": "f-l4",
            "t": "text",
            "text": "Giấy tờ ưu đãi, nếu có",
            "x": 130,
            "y": 1692,
            "size": 44,
            "at": "l5:discount+200"
          },
          {
            "id": "f-xn",
            "t": "text",
            "text": "UBND cấp xã hoặc tổ chức hành nghề công chứng",
            "x": 900,
            "y": 1380,
            "size": 26,
            "at": "l3:commune",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "f-ph",
            "t": "text",
            "text": "ghi họ tên, ngày sinh sau ảnh",
            "x": 900,
            "y": 1620,
            "size": 26,
            "at": "l4:back",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Thông báo tuyển sinh khoá 28 lần 1/2026, Học viện Tư pháp",
            "x": 900,
            "y": 1810,
            "size": 26,
            "at": "l1",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four: Friday, paperwork. For intake twenty-eight, the deadline was March twentieth.",
          "sub": "Chặng bốn: thứ Sáu, hồ sơ. Khoá 28 lần 1 năm 2026 nhận hồ sơ đến hạn 20/3/2026."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Hand it in during office hours, Monday to Friday, or send it by post.",
          "sub": "Nộp trực tiếp trong giờ hành chính thứ Hai đến thứ Sáu, hoặc gửi qua bưu điện."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two personal history forms, certified by the commune or a notary. Two registration forms with photos.",
          "sub": "Hai sơ yếu lý lịch có xác nhận của UBND cấp xã hoặc tổ chức công chứng. Hai phiếu đăng ký dán ảnh."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Two certified copies of your degree. Four small photos, under six months old, name on the back.",
          "sub": "Hai bản chứng thực bằng cử nhân luật. Bốn ảnh 3x4 chụp không quá 6 tháng, ghi họ tên, ngày sinh sau ảnh."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And discount papers, if any.",
          "sub": "Và giấy tờ ưu đãi học phí, nếu có."
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s10",
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
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 900,
            "y": 1440,
            "w": 640,
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
                "envelope",
                "japanese-post-office"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Sáu · giờ hành chính?",
            "icon": "envelope"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Office hours only? I'm in my own office then!",
          "sub": "Chỉ giờ hành chính? Giờ đó em cũng đang ở cơ quan mà!",
          "face": "surprised"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So post it early, or book half a day off well ahead. Never cut it close.",
          "sub": "Vậy gửi bưu điện, hoặc xin nghỉ nửa buổi từ sớm. Đừng để sát hạn.",
          "keys": [
            "Đừng để sát hạn"
          ]
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Sáu · giờ nghỉ trưa",
        "actors": [
          {
            "id": "dung",
            "side": "left",
            "pose": "thumb"
          },
          {
            "id": "thao",
            "side": "right",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Lớp tối là lớp nhẹ, vắng nhiều cũng được",
          "why": "Cả ba hệ học cùng chương trình 12 tháng, 36 tín chỉ; thông báo không nói hệ tối được nới yêu cầu.",
          "rule": "Lớp tối không phải lớp nhẹ; hỏi quy chế chuyên cần trước khi đóng tiền"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Evening class is the easy one. Skip a lot, just pass the final!",
          "sub": "Lớp tối là lớp dễ. Vắng nhiều cũng được, thi cuối khoá là xong!",
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
          "say": "All three share one programme: twelve months, thirty-six credits. No relaxed evenings.",
          "sub": "Cả ba hệ cùng một chương trình 12 tháng, 36 tín chỉ. Không chỗ nào nói hệ tối được nới.",
          "keys": [
            "cùng một chương trình"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind!",
          "sub": "Tua lại!",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Fine. I'll read the attendance rules, and treat every session as counted.",
          "sub": "Được rồi. Đọc quy chế chuyên cần, coi mọi buổi đều được tính.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "An evening class is not a light class. Ask the rules before you pay.",
          "sub": "Lớp tối không phải lớp nhẹ. Hỏi quy chế chuyên cần trước khi đóng tiền.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb",
          "keys": [
            "Lớp tối không phải lớp nhẹ"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p17,p18"
    },
    {
      "id": "s12",
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
            "text": "⑤ Thứ Hai tuần 2 · Hỏi trước",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:stop five"
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
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "e-mail",
                "laptop"
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
            "at": "l1:Monday",
            "caption": "Tối thứ Hai tuần 2 · nhà Thảo",
            "icon": "e-mail"
          },
          {
            "id": "g-miss",
            "t": "text",
            "text": "Thông báo KHÔNG ghi:",
            "x": 2028,
            "y": 1250,
            "size": 50,
            "at": "l1:doesn't say",
            "color": "coral"
          },
          {
            "id": "g-m1",
            "t": "text",
            "text": "• ngày khai giảng, giờ học",
            "x": 2028,
            "y": 1320,
            "size": 44,
            "at": "l1:opening"
          },
          {
            "id": "g-m2",
            "t": "text",
            "text": "• điểm danh, điều kiện dự thi",
            "x": 2028,
            "y": 1380,
            "size": 44,
            "at": "l2:attendance"
          },
          {
            "id": "g-qc",
            "t": "text",
            "text": "→ nằm trong quy chế đào tạo",
            "x": 2028,
            "y": 1450,
            "size": 44,
            "at": "l2:rules",
            "hl": [
              {
                "text": "quy chế",
                "at": "l2:rules"
              }
            ]
          },
          {
            "id": "g-mail",
            "t": "text",
            "text": "Hỏi: lịch · số buổi được vắng · điều kiện thi",
            "x": 2028,
            "y": 1710,
            "size": 30,
            "at": "l3:schedule",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "g-keep",
            "t": "text",
            "text": "Giữ câu trả lời bằng văn bản",
            "x": 2028,
            "y": 1770,
            "size": 48,
            "at": "l4:writing",
            "color": "accent",
            "hl": [
              {
                "text": "bằng văn bản",
                "at": "l4:writing"
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
          "say": "Stop five: Monday, week two. The notice doesn't say the opening date, hours, or roll calls.",
          "sub": "Chặng năm: thứ Hai tuần 2. Thông báo không ghi ngày khai giảng, giờ học, điểm danh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Attendance and exam conditions live in the training rules, handed out at enrolment.",
          "sub": "Chuyên cần, điều kiện dự thi nằm trong quy chế đào tạo, phát khi nhập học.",
          "keys": [
            "quy chế đào tạo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Dear training office: the expected schedule, allowed absences, and exam conditions, please?",
          "sub": "Kính gửi phòng đào tạo: xin cho biết lịch học dự kiến, số buổi được vắng, điều kiện dự thi ạ.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Keep the answer in writing. You'll need it with your company.",
          "sub": "Giữ câu trả lời bằng văn bản để sắp lịch với công ty.",
          "keys": [
            "bằng văn bản"
          ]
        }
      ],
      "ref": "p16,p19"
    },
    {
      "id": "s13",
      "module": "BRK-08",
      "data": {
        "title": "Nếu không báo trưởng phòng",
        "points": [
          {
            "label": "Đầu năm",
            "sub": "Chọn hệ tối, im lặng",
            "illus": "zipper-mouth-face"
          },
          {
            "label": "Quý cuối",
            "sub": "Dồn hợp đồng cần rà",
            "illus": "page-facing-up"
          },
          {
            "label": "Tám giờ tối",
            "sub": "Vẫn ở công ty",
            "illus": "office-building"
          },
          {
            "label": "Ba tuần",
            "sub": "Vắng lớp, đuối tố tụng",
            "illus": "face-with-head-bandage"
          }
        ],
        "current": 3
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Picture Dũng, evening class, telling no one. Year-end rush, at work till eight.",
          "sub": "Hình dung Dũng học tối, không báo ai. Cuối năm dồn hợp đồng, ở lại tới tám giờ."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Three weeks of missed classes.",
          "sub": "Ba tuần liền vắng lớp.",
          "keys": [
            "Ba tuần"
          ]
        }
      ],
      "ref": "p20"
    },
    {
      "id": "s14",
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
            "at": "l1",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Tua nhanh · Quý cuối năm",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:borrowing"
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
                  "face": "sad",
                  "pose": "think"
                }
              ],
              "props": [
                "page-facing-up",
                "crescent-moon"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-05",
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
            "at": "l1",
            "caption": "Quý cuối năm · 8 giờ tối",
            "icon": "crescent-moon"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Mượn tài liệu bạn học",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l1:borrowing",
            "color": "muted"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Đuối môn kỹ năng tố tụng",
            "x": 3996,
            "y": 1330,
            "size": 46,
            "at": "l1:litigation",
            "color": "coral"
          },
          {
            "id": "h-rule",
            "t": "text",
            "text": "Báo lịch học từ đầu",
            "x": 3996,
            "y": 1450,
            "size": 58,
            "at": "l2:early",
            "color": "accent",
            "hl": [
              {
                "text": "từ đầu",
                "at": "l2:early"
              }
            ]
          },
          {
            "id": "h-rule2",
            "t": "text",
            "text": "đừng để mùa cao điểm quyết thay",
            "x": 3996,
            "y": 1530,
            "size": 44,
            "at": "l2:peak",
            "hl": [
              {
                "text": "quyết thay",
                "at": "l2:decide"
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
          "say": "Borrowing notes again. And this litigation skills class… I'm drowning.",
          "sub": "Lại đi mượn tài liệu. Môn kỹ năng tố tụng này… mình đuối quá.",
          "face": "sad"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Tell the company your class schedule early. Don't let peak season decide for you.",
          "sub": "Báo lịch học cho công ty từ đầu, đừng để mùa cao điểm tự quyết thay mình.",
          "keys": [
            "từ đầu"
          ]
        }
      ],
      "ref": "p20,p21"
    },
    {
      "id": "s15",
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
            "text": "⑦ Thứ Ba tuần 2 · Báo sếp",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:stop seven"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Ba tuần 2 · phòng họp",
            "icon": "speech-balloon"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Hệ gì, học buổi nào",
            "x": 5964,
            "y": 1260,
            "size": 46,
            "at": "l2:evening"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Ngày học: về đúng giờ",
            "x": 5964,
            "y": 1325,
            "size": 40,
            "at": "l2:on time",
            "hl": [
              {
                "text": "về đúng giờ",
                "at": "l2:on time"
              }
            ]
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Việc gấp: xử lý bằng cách…",
            "x": 5964,
            "y": 1390,
            "size": 40,
            "at": "l2:urgent"
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "+ hỗ trợ học phí?",
            "x": 5964,
            "y": 1480,
            "size": 50,
            "at": "l4:tuition",
            "color": "accent",
            "hl": [
              {
                "text": "hỗ trợ học phí",
                "at": "l4:tuition"
              }
            ]
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "+ ghi vào kế hoạch phát triển",
            "x": 5964,
            "y": 1550,
            "size": 44,
            "at": "l4:development plan"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven: Tuesday. Thảo goes to Cô Hoa, head of legal.",
          "sub": "Chặng bảy: thứ Ba. Thảo gặp Cô Hoa, trưởng phòng pháp chế."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I've enrolled in the evening class, Monday to Friday. May I leave on time those days? Urgent work, I'll handle by phone.",
          "sub": "Em đăng ký hệ buổi tối. Những ngày học, cho em về đúng giờ; việc gấp em xử lý qua điện thoại ạ.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Agreed. Okay!",
          "sub": "Đồng ý. Rồi, vậy nha!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "If the company wants you carded, ask about tuition support, or add it to your development plan.",
          "sub": "Nếu công ty khuyến khích có thẻ, hỏi luôn hỗ trợ học phí, hoặc ghi vào kế hoạch phát triển cá nhân.",
          "keys": [
            "hỗ trợ học phí"
          ]
        }
      ],
      "ref": "p22"
    },
    {
      "id": "s16",
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
            "text": "Tối thứ Hai tuần 3",
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
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "envelope",
                "laptop"
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
            "at": "l1:same",
            "caption": "Tối thứ Hai tuần 3 · nhà Thảo",
            "icon": "envelope"
          },
          {
            "id": "j-num",
            "t": "text",
            "text": "36.600.000 đ",
            "x": 7932,
            "y": 1260,
            "size": 80,
            "at": "l3:same price",
            "color": "muted"
          },
          {
            "id": "j-cost",
            "t": "text",
            "text": "giá như nhau, cái giá mình chọn",
            "x": 7932,
            "y": 1370,
            "size": 46,
            "at": "l3:cost",
            "color": "accent",
            "hl": [
              {
                "text": "mình chọn",
                "at": "l3:chose"
              }
            ]
          },
          {
            "id": "j-coin",
            "t": "text",
            "text": "đồng xu: vẫn trong túi",
            "x": 7932,
            "y": 1460,
            "size": 44,
            "at": "l4:coin"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Two weeks later. Same table, same Monday night.",
          "sub": "Hai tuần sau. Vẫn bàn ấy, vẫn tối thứ Hai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Evening class, Hanoi. Rules asked, boss told, envelope ready for the post.",
          "sub": "Hệ tối, Hà Nội. Đã hỏi quy chế, đã báo sếp, phong bì sẵn sàng gửi bưu điện.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Same price for both. But Thảo chose the cost she can pay all year.",
          "sub": "Giá như nhau. Nhưng Thảo chọn cái giá mình trả được cả năm.",
          "keys": [
            "trả được cả năm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And the coin? Still in her pocket.",
          "sub": "Còn đồng xu? Vẫn nằm trong túi."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "tich-tac-dai"
        }
      ],
      "ref": "outro,p7"
    },
    {
      "id": "s17",
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
            "fit": "D",
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
            "x": 7464,
            "y": 30,
            "at": "l1"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9432,
            "y": 30,
            "at": "l2"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3528,
            "y": 1120,
            "at": "l3"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Kiến thức nghề tham khảo, không phải tư vấn cho trường hợp riêng. Số liệu theo thông báo khoá 28; khoá sau có thể đổi, đối chiếu thông báo mới nhất.",
            "x": 7932,
            "y": 1790,
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
          "say": "Step back. Pick the class you can keep all year.",
          "sub": "Lùi lại. Chọn hệ mình giữ được cả năm.",
          "keys": [
            "giữ được cả năm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Budget from the latest notice, and keep the receipt.",
          "sub": "Dự trù theo thông báo mới nhất, giữ biên lai."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ask the rules in writing, then tell your boss early.",
          "sub": "Hỏi quy chế bằng văn bản, rồi báo sếp từ đầu.",
          "keys": [
            "báo sếp từ đầu"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p7,p12,p19,p21"
    },
    {
      "id": "s18",
      "module": "QUIZ-01",
      "data": {
        "q": "Which idea matches the takeaway about evening and weekend classes?",
        "options": [
          "Pick the option whose time cost you can sustain for the whole year",
          "Pick both options together so you can finish the course faster",
          "Pick the cheapest option, because time costs do not matter in practice"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "crescent-moon",
        "why": "Hệ tối lấy sức buổi tối, hệ cuối tuần lấy ngày nghỉ; điều cần là chọn hệ giữ được cả năm."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which idea matches the takeaway about evening and weekend classes?",
          "sub": "Ý nào khớp với điều rút ra về hệ tối và hệ cuối tuần?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Pick the option whose time cost you can sustain for the whole year.",
          "sub": "Chọn hệ có cái giá về thời gian mà mình giữ được cả năm."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Evenings take energy, weekends take days off.",
          "sub": "Hệ tối lấy sức, hệ cuối tuần lấy ngày nghỉ."
        }
      ],
      "beats": {
        "after": 800
      },
      "ref": "questions[12]"
    },
    {
      "id": "s19",
      "module": "END-05",
      "data": {
        "text": "Hôm nay: hỏi phòng đào tạo về lịch và chuyên cần",
        "sub": "Rồi đọc bài: tập sự 20 giờ mỗi tuần"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, ask the training office about schedules and attendance. Next lesson: twenty hours of traineeship a week.",
          "sub": "Hôm nay gửi câu hỏi về lịch và quy chế chuyên cần cho phòng đào tạo. Bài sau: tập sự 20 giờ mỗi tuần.",
          "face": "laugh",
          "keys": [
            "phòng đào tạo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "General knowledge, not advice for your case. Always check the latest notice.",
          "sub": "Kiến thức nghề tham khảo, không phải tư vấn cho trường hợp riêng. Luôn đối chiếu thông báo mới nhất."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI, dựng theo hạt nhân #136 + biến thể #144 (bang-trang-kit). HOOK-24: vật neo 36.600.000 đ (p8) → “giá như nhau, cái giá khác nhau” → ngộ nhận lớp tối là lớp nhẹ → câu hỏi chính. Dòng thời gian: hai tuần Thảo chọn hệ — A tối thứ Hai tuần 1 (tung đồng xu?), B câu hỏi chính + ai được học (p1–p3), C ① tối thứ Ba ba hệ, hai nơi, lớp Hà Tĩnh (p4–p5), BRK-07 rehook, D ② thứ Tư hai cái giá A/B của Thảo (p6–p7), E ③ thứ Năm học phí, phí xét tuyển, ưu đãi (p8–p10) + Dũng lập bảng dự trù 5 bước (p11–p12), F ④ thứ Sáu hồ sơ, hạn 20/3/2026, gửi bưu điện (p13–p15), Khoan đã! Dũng ‘lớp tối là lớp nhẹ’ (p17–p18), G ⑤ thứ Hai tuần 2 hỏi phòng đào tạo (p16, p19), BRK-08 nếu không báo trưởng phòng (p20), H ⑥ tua nhanh quý cuối năm của Dũng (p20–p21), I ⑦ thứ Ba tuần 2 Thảo báo Cô Hoa (p22), J tối thứ Hai tuần 3 khép vòng (36.600.000, đồng xu). Nhân vật theo w145/_series/bar-inhouse-to-lawyer.md: chị Thảo (p6) giữ; anh Khoa (p11) → Dũng; ‘một pháp chế’ (p20) → Dũng (tua nhanh giả định). Số chỉ từ bài: 36.600.000 / 29.280.000 / 200.000 đồng, 12 tháng, 36 tín chỉ, 40 phút, 70 học viên (Tạp chí Luật sư Việt Nam 10/5/2026), hạn 20/3/2026, 2/2/2/4 giấy tờ, ảnh ≤ 6 tháng, QĐ 3011/QĐ-HVTP; Điều 12 Luật Luật sư, Điều 3 TT 10/2021. Lưu ý chung (#133) ở tóm tắt + END. Câu đố questions[12].",
  "loop": {
    "open": "s01",
    "close": "s16"
  }
};
