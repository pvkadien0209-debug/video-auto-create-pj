// bar-choose-firm--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-choose-firm--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "bar-trainee-registration",
    "slug": "bar-choose-firm",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Chọn tổ chức hành nghề luật sư để tập sự theo tiêu chí nào?",
    "series": "Bắt đầu tập sự đúng thủ tục — chọn nơi tập sự, luật sư hướng dẫn và đăng ký với Đoàn luật sư"
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
            "fit": [
              "a-h",
              "a-b00",
              "a-b32"
            ],
            "zoom": 1.3,
            "move": "cut"
          },
          {
            "at": "l3:pull",
            "fit": "A",
            "ms": 1400
          }
        ],
        "items": [
          {
            "id": "a-h",
            "t": "text",
            "text": "Nơi 1 · Nơi 2 · Nơi 3",
            "x": 400,
            "y": 100,
            "size": 34,
            "at": "l1:columns",
            "color": "muted"
          },
          {
            "id": "a-r0",
            "t": "text",
            "text": "Loại tổ chức",
            "x": 70,
            "y": 172,
            "size": 38,
            "at": "l2:Type"
          },
          {
            "id": "a-b00",
            "t": "box",
            "x": 400,
            "y": 160,
            "w": 120,
            "h": 70,
            "at": "l2:Type",
            "stroke": 4
          },
          {
            "id": "a-b01",
            "t": "box",
            "x": 540,
            "y": 160,
            "w": 120,
            "h": 70,
            "at": "l2:Type",
            "stroke": 4
          },
          {
            "id": "a-b02",
            "t": "box",
            "x": 680,
            "y": 160,
            "w": 120,
            "h": 70,
            "at": "l2:Type",
            "stroke": 4
          },
          {
            "id": "a-r1",
            "t": "text",
            "text": "Lĩnh vực",
            "x": 70,
            "y": 267,
            "size": 38,
            "at": "l2:field"
          },
          {
            "id": "a-b10",
            "t": "box",
            "x": 400,
            "y": 255,
            "w": 120,
            "h": 70,
            "at": "l2:field",
            "stroke": 4
          },
          {
            "id": "a-b11",
            "t": "box",
            "x": 540,
            "y": 255,
            "w": 120,
            "h": 70,
            "at": "l2:field",
            "stroke": 4
          },
          {
            "id": "a-b12",
            "t": "box",
            "x": 680,
            "y": 255,
            "w": 120,
            "h": 70,
            "at": "l2:field",
            "stroke": 4
          },
          {
            "id": "a-r2",
            "t": "text",
            "text": "Ai hướng dẫn?",
            "x": 70,
            "y": 362,
            "size": 38,
            "at": "l2:supervisor"
          },
          {
            "id": "a-b20",
            "t": "box",
            "x": 400,
            "y": 350,
            "w": 120,
            "h": 70,
            "at": "l2:supervisor",
            "stroke": 4
          },
          {
            "id": "a-b21",
            "t": "box",
            "x": 540,
            "y": 350,
            "w": 120,
            "h": 70,
            "at": "l2:supervisor",
            "stroke": 4
          },
          {
            "id": "a-b22",
            "t": "box",
            "x": 680,
            "y": 350,
            "w": 120,
            "h": 70,
            "at": "l2:supervisor",
            "stroke": 4
          },
          {
            "id": "a-r3",
            "t": "text",
            "text": "Giờ · hợp đồng",
            "x": 70,
            "y": 457,
            "size": 38,
            "at": "l2:hours"
          },
          {
            "id": "a-b30",
            "t": "box",
            "x": 400,
            "y": 445,
            "w": 120,
            "h": 70,
            "at": "l2:hours",
            "stroke": 4
          },
          {
            "id": "a-b31",
            "t": "box",
            "x": 540,
            "y": 445,
            "w": 120,
            "h": 70,
            "at": "l2:hours",
            "stroke": 4
          },
          {
            "id": "a-b32",
            "t": "box",
            "x": 680,
            "y": 445,
            "w": 120,
            "h": 70,
            "at": "l2:hours",
            "stroke": 4
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A blank table. Four rows, three columns.",
          "sub": "Một tờ bảng trống. Bốn hàng, ba cột.",
          "keys": [
            "bảng trống"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Type, field, supervisor, hours. This sheet will decide someone's next year.",
          "sub": "Loại tổ chức, lĩnh vực, người hướng dẫn, giờ giấc. Tờ giấy này sẽ quyết định một năm của ai đó.",
          "keys": [
            "một năm của ai đó"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Whose? Let's pull back.",
          "sub": "Của ai? Lùi ra xem nào."
        }
      ],
      "ref": "intro,p16"
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
            "x": 900,
            "y": 110,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "clipboard",
                "graduation-cap"
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
            "caption": "Tối Chủ nhật · tờ bảng trống",
            "icon": "clipboard"
          },
          {
            "id": "a-luat",
            "t": "text",
            "text": "Có chữ “luật” là gửi?",
            "x": 900,
            "y": 620,
            "size": 42,
            "at": "l3:law",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Chọn mặt gửi vàng”",
            "x": 60,
            "y": 600,
            "size": 54,
            "at": "l5:choose",
            "color": "accent",
            "hl": [
              {
                "text": "Chọn mặt",
                "at": "l5:choose"
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
          "say": "Lawyer training certificate in hand, and a long list of firms.",
          "sub": "Giấy chứng nhận tốt nghiệp đào tạo nghề trong tay, và cả xấp tên tổ chức trong danh sách."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Write it down first! Not every place with law in its name.",
          "sub": "Ghi lại đã! Không phải cứ có chữ “luật” trong tên là gửi.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Many people apply anywhere, then learn months later nobody there can guide them.",
          "sub": "Nhiều người gửi khắp nơi, vài tháng sau mới thấy không ai đủ điều kiện hướng dẫn.",
          "keys": [
            "không ai đủ điều kiện hướng dẫn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: choose the face before you trust it with gold.",
          "sub": "Ông bà dặn: “Chọn mặt gửi vàng.”",
          "keys": [
            "Chọn mặt gửi vàng"
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
            "text": "Chọn nơi tập sự theo gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:choose",
            "hl": [
              {
                "text": "theo gì",
                "at": "l1:how"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: tấm biển trước cửa",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:sign",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:door"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: bốn tiêu chí",
            "x": 2028,
            "y": 270,
            "size": 60,
            "at": "l3:four",
            "color": "accent",
            "hl": [
              {
                "text": "bốn tiêu chí",
                "at": "l3:four"
              }
            ]
          },
          {
            "id": "b-c0",
            "t": "box",
            "x": 2028,
            "y": 400,
            "w": 380,
            "h": 110,
            "at": "l3:type",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-c1",
            "t": "box",
            "x": 2438,
            "y": 400,
            "w": 380,
            "h": 110,
            "at": "l3:field",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-c2",
            "t": "box",
            "x": 2848,
            "y": 400,
            "w": 380,
            "h": 110,
            "at": "l3:supervisor",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-c3",
            "t": "box",
            "x": 3258,
            "y": 400,
            "w": 380,
            "h": 110,
            "at": "l3:time",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-ct0",
            "t": "text",
            "text": "① Loại",
            "x": 2053,
            "y": 428,
            "size": 42,
            "at": "l3:type+200"
          },
          {
            "id": "b-ct1",
            "t": "text",
            "text": "② Lĩnh vực",
            "x": 2463,
            "y": 428,
            "size": 42,
            "at": "l3:field+200"
          },
          {
            "id": "b-ct2",
            "t": "text",
            "text": "③ Người hướng dẫn",
            "x": 2873,
            "y": 428,
            "size": 42,
            "at": "l3:supervisor+200"
          },
          {
            "id": "b-ct3",
            "t": "text",
            "text": "④ Thời gian",
            "x": 3283,
            "y": 428,
            "size": 42,
            "at": "l3:time+200"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Theo tuần của Thảo: từng tiêu chí",
            "x": 2028,
            "y": 590,
            "size": 46,
            "at": "l4:week",
            "hl": [
              {
                "text": "từng tiêu chí",
                "at": "l4:criterion"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Căn cứ: Thông tư 10/2021/TT-BTP · Luật Luật sư (VBHN 03)",
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
          "say": "So, how do you choose where to train?",
          "sub": "Vậy chọn nơi tập sự theo tiêu chí nào?",
          "keys": [
            "tiêu chí nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not by the sign on the door.",
          "sub": "Không phải theo tấm biển trước cửa."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But by four things: type, field, supervisor, and time.",
          "sub": "Mà theo bốn điều: loại tổ chức, lĩnh vực, luật sư hướng dẫn, thoả thuận thời gian.",
          "keys": [
            "bốn điều"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Thảo's week, one criterion at a time.",
          "sub": "Mình theo tuần của Thảo, từng tiêu chí một."
        }
      ],
      "ref": "intro,outro"
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
            "at": "l4",
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
            "text": "① Sáng thứ Hai · Loại nào?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 150,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "neutral"
                }
              ],
              "props": [
                "laptop",
                "globe-with-meridians"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Monday",
            "caption": "Sáng thứ Hai · lọc danh sách",
            "icon": "laptop"
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "Khoản 3 Điều 4:",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l2:clause",
            "hl": [
              {
                "text": "Khoản 3 Điều 4",
                "at": "l2:clause"
              }
            ]
          },
          {
            "id": "c-a",
            "t": "text",
            "text": "Văn phòng, công ty luật, chi nhánh",
            "x": 3996,
            "y": 250,
            "size": 38,
            "at": "l2:offices"
          },
          {
            "id": "c-f",
            "t": "text",
            "text": "Công ty luật nước ngoài tại VN",
            "x": 3996,
            "y": 330,
            "size": 40,
            "at": "l3:foreign"
          },
          {
            "id": "c-fx",
            "t": "strike",
            "over": "c-f",
            "at": "l4:Cross"
          },
          {
            "id": "c-ok",
            "t": "text",
            "text": "Vẫn được nhận!",
            "x": 3996,
            "y": 410,
            "size": 52,
            "at": "l5:too",
            "color": "accent",
            "hl": [
              {
                "text": "được nhận",
                "at": "l5:too"
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
          "say": "First stop: Monday morning. Thảo filters her list by type.",
          "sub": "Chặng một: sáng thứ Hai. Thảo lọc danh sách theo loại tổ chức."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Clause three, Article four: law offices, law companies, and their branches.",
          "sub": "Khoản 3 Điều 4: văn phòng luật sư, công ty luật và chi nhánh của chúng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Plus branches of foreign law organisations, and foreign law companies in Vietnam.",
          "sub": "Cùng chi nhánh tổ chức hành nghề luật sư nước ngoài, công ty luật nước ngoài tại Việt Nam và chi nhánh."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "A foreign company? Foreign capital. Cross it out.",
          "sub": "Công ty nước ngoài à? Vốn ngoại. Gạch luôn.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Hold on. Point b of clause three lists them too.",
          "sub": "Khoan. Điểm b khoản 3 cũng kể tên họ.",
          "keys": [
            "cũng kể tên họ"
          ]
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s04",
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
            "id": "c-8",
            "t": "text",
            "text": "Kiểm: LS Việt Nam đang hành nghề",
            "x": 3996,
            "y": 500,
            "size": 40,
            "at": "l1:Vietnamese",
            "hl": [
              {
                "text": "đang hành nghề",
                "at": "l1:practising"
              }
            ]
          },
          {
            "id": "c-gx",
            "t": "text",
            "text": "Đồng ý → cử LS + Giấy xác nhận",
            "x": 3996,
            "y": 575,
            "size": 40,
            "at": "l2:accept"
          },
          {
            "id": "c-key",
            "t": "text",
            "text": "Đừng gạch vì vốn ngoại: hỏi ai",
            "x": 3996,
            "y": 655,
            "size": 44,
            "at": "l3:cross",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi ai",
                "at": "l3:Ask"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: khoản 1, 3 Điều 4 · Điều 8 Thông tư 10/2021/TT-BTP",
            "x": 4836,
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
          "say": "The real check is the supervisor. Article eight wants a Vietnamese lawyer practising in the firm.",
          "sub": "Điều cần kiểm là người hướng dẫn. Điều 8 đòi luật sư Việt Nam đang hành nghề trong tổ chức.",
          "keys": [
            "luật sư Việt Nam đang hành nghề"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The process: you choose. If they accept, they name a supervisor and send a confirmation.",
          "sub": "Cách làm: mình tự chọn, tự thoả thuận. Họ đồng ý thì cử luật sư hướng dẫn và gửi Giấy xác nhận nhận tập sự."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So do not cross a place out for foreign capital. Ask who will guide you.",
          "sub": "Vậy đừng gạch tên một nơi vì vốn nước ngoài; hãy hỏi ai sẽ hướng dẫn.",
          "keys": [
            "hỏi ai sẽ hướng dẫn"
          ]
        }
      ],
      "ref": "p1,p2,p3"
    },
    {
      "id": "s05",
      "module": "BRK-07",
      "data": {
        "question": "Nhiều nơi được nhận. Nơi nào cho mình học thật?",
        "illus": "thinking-face"
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
          "say": "Many places can take you. Which one will really teach you?",
          "sub": "Nhiều nơi được nhận. Nơi nào cho mình học thật?",
          "keys": [
            "học thật"
          ]
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
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Ba · Công ty lớn",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 150,
            "w": 780,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                }
              ],
              "props": [
                "office-building",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:company",
            "caption": "Thứ Ba · phỏng vấn ở công ty luật",
            "icon": "office-building"
          },
          {
            "id": "d-a",
            "t": "text",
            "text": "Cách A: chỉ tư vấn doanh nghiệp",
            "x": 5964,
            "y": 170,
            "size": 40,
            "at": "l3:corporate",
            "hl": [
              {
                "text": "Cách A",
                "at": "l3:corporate"
              }
            ]
          },
          {
            "id": "d-a2",
            "t": "text",
            "text": "Có HĐLĐ · dịch, soát hợp đồng",
            "x": 5964,
            "y": 240,
            "size": 36,
            "at": "l3:translating",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: Tuesday, a big law company downtown.",
          "sub": "Chặng hai: thứ Ba, một công ty luật lớn ở trung tâm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Ms Hoa, who heads the firm. Straight to the point.",
          "sub": "Đây là Cô Hoa, người đứng đầu công ty. Nói thẳng, nói nhanh.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "We only do corporate advice. Labour contract, yes. Daily work: translating and reviewing contracts. Deal?",
          "sub": "Bên chị chỉ tư vấn doanh nghiệp. Có hợp đồng lao động. Việc hằng ngày: dịch và soát hợp đồng. Rồi, vậy nha?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sounds stable. But what does a trainee need to learn? Article six has the list.",
          "sub": "Nghe ổn định. Nhưng người tập sự cần học gì? Điều 6 có danh sách."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p6"
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
            "at": "l4",
            "fit": [
              "d-kt",
              "d-ask"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l5:end",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-6",
            "t": "text",
            "text": "Điều 6: nội dung tập sự",
            "x": 5964,
            "y": 330,
            "size": 44,
            "at": "l1:ethics",
            "hl": [
              {
                "text": "Điều 6",
                "at": "l1:ethics"
              }
            ]
          },
          {
            "id": "d-6a",
            "t": "text",
            "text": "Đạo đức · hồ sơ · hình sự",
            "x": 5964,
            "y": 400,
            "size": 36,
            "at": "l2:Criminal",
            "color": "muted"
          },
          {
            "id": "d-6b",
            "t": "text",
            "text": "Dân sự · lao động · tư vấn",
            "x": 5964,
            "y": 460,
            "size": 36,
            "at": "l3:advice",
            "color": "muted"
          },
          {
            "id": "d-kt",
            "t": "text",
            "text": "Kiểm tra: viết + vấn đáp",
            "x": 5964,
            "y": 545,
            "size": 46,
            "at": "l4:oral",
            "color": "coral",
            "hl": [
              {
                "text": "vấn đáp",
                "at": "l4:oral"
              }
            ]
          },
          {
            "id": "d-ask",
            "t": "text",
            "text": "Hỏi: có vụ tố tụng?",
            "x": 5964,
            "y": 635,
            "size": 50,
            "at": "l5:litigation",
            "color": "accent",
            "hl": [
              {
                "text": "vụ tố tụng",
                "at": "l5:litigation"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Điều 6 Thông tư 10/2021/TT-BTP · Tạp chí Luật sư Việt Nam 13/8/2026",
            "x": 6804,
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
          "say": "The law on lawyers and the code of ethics. Researching files, gathering documents, proposing solutions.",
          "sub": "Pháp luật về luật sư và Bộ Quy tắc đạo đức. Nghiên cứu hồ sơ, thu thập tài liệu, đề xuất hướng giải quyết."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Criminal defence. Representation in civil, family, business, labour and administrative cases.",
          "sub": "Bào chữa trong vụ án hình sự. Đại diện trong vụ việc dân sự, hôn nhân gia đình, kinh doanh thương mại, lao động, hành chính."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Plus legal advice, out of court representation, and other legal services.",
          "sub": "Thêm tư vấn pháp luật, đại diện ngoài tố tụng và dịch vụ pháp lý khác."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And the final test? Written papers, plus an oral practice on a case you choose.",
          "sub": "Còn kỳ kiểm tra? Bài viết về tố tụng, tư vấn, đại diện, và phần thực hành vấn đáp về một vụ việc tự chọn.",
          "keys": [
            "vấn đáp"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So ask first: will I join any litigation here?",
          "sub": "Vậy hỏi trước: ở đây mình có được tham gia vụ việc tố tụng không?",
          "keys": [
            "vụ việc tố tụng"
          ]
        }
      ],
      "ref": "p4,p5"
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
            "text": "③ Thứ Tư · Văn phòng nhỏ",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 150,
            "w": 780,
            "data": {
              "set": "office",
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
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "balance-scale",
                "file-folder"
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
            "at": "l1:office",
            "caption": "Thứ Tư · văn phòng luật sư nhỏ",
            "icon": "balance-scale"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "Cách B: hình sự, dân sự…",
            "x": 7932,
            "y": 170,
            "size": 40,
            "at": "l3:criminal",
            "hl": [
              {
                "text": "Cách B",
                "at": "l3:criminal"
              }
            ]
          },
          {
            "id": "e-b2",
            "t": "text",
            "text": "Thu nhập thấp hơn",
            "x": 7932,
            "y": 240,
            "size": 36,
            "at": "l3:pay",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Wednesday, a small office across town.",
          "sub": "Chặng ba: thứ Tư, một văn phòng nhỏ bên kia thành phố."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Uncle Bình, Thảo's uncle, who runs a small law office.",
          "sub": "Đây là Bác Bình, bác ruột Thảo, có một văn phòng luật sư nhỏ.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Slowly now. We take criminal cases, civil cases, and advice. The pay is lower, though.",
          "sub": "Từ từ nhé. Bác nhận cả án hình sự, dân sự, lẫn tư vấn. Có điều thu nhập thấp hơn.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Two offers, two prices to pay.",
          "sub": "Hai lời mời, hai cái giá."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p6"
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
          }
        ],
        "items": [
          {
            "id": "e-ba",
            "t": "box",
            "x": 7932,
            "y": 330,
            "w": 760,
            "h": 150,
            "at": "l1:Option",
            "stroke": 4
          },
          {
            "id": "e-ba1",
            "t": "text",
            "text": "A: giỏi soạn thảo",
            "x": 7957,
            "y": 345,
            "size": 44,
            "at": "l1:drafting",
            "hl": [
              {
                "text": "soạn thảo",
                "at": "l1:drafting"
              }
            ]
          },
          {
            "id": "e-ba2",
            "t": "text",
            "text": "– tự tìm cách làm tố tụng",
            "x": 7957,
            "y": 410,
            "size": 36,
            "at": "l1:litigation",
            "color": "coral"
          },
          {
            "id": "e-bb",
            "t": "box",
            "x": 7932,
            "y": 510,
            "w": 760,
            "h": 150,
            "at": "l2:Option",
            "stroke": 4
          },
          {
            "id": "e-bb1",
            "t": "text",
            "text": "B: đi nhiều mảng Điều 6",
            "x": 7957,
            "y": 525,
            "size": 44,
            "at": "l2:six",
            "hl": [
              {
                "text": "nhiều mảng",
                "at": "l2:more"
              }
            ]
          },
          {
            "id": "e-bb2",
            "t": "text",
            "text": "– tự cân đối chi tiêu",
            "x": 7957,
            "y": 590,
            "size": 36,
            "at": "l2:budget",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Option A: strong drafting, but she must find litigation practice elsewhere for the test.",
          "sub": "Cách A: giỏi soạn thảo, nhưng phải tự tìm cách làm quen vụ việc tố tụng cho phần thực hành.",
          "keys": [
            "giỏi soạn thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Option B: more of Article six, but a tighter budget.",
          "sub": "Cách B: đi qua nhiều nội dung ở Điều 6, nhưng phải tự cân đối chi tiêu.",
          "keys": [
            "nhiều nội dung ở Điều 6"
          ]
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s10",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Chọn theo việc, không theo tên tuổi",
        "hl": "theo việc",
        "sub": "Việc mình sẽ thật sự làm mỗi ngày"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Choose by the work, not by the name.",
          "sub": "Chọn theo việc, không theo tên tuổi.",
          "keys": [
            "theo việc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The work you will actually do, every day.",
          "sub": "Việc mình sẽ thật sự làm, mỗi ngày."
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
            "text": "④ Chiều thứ Tư · Ai hướng dẫn?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 900,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "mobile-phone",
                "airplane"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:calls",
            "caption": "Chiều thứ Tư · gọi lại Cô Hoa",
            "icon": "mobile-phone"
          },
          {
            "id": "f-q",
            "t": "text",
            "text": "“Ai hướng dẫn em?”",
            "x": 60,
            "y": 1260,
            "size": 52,
            "at": "l2:supervise",
            "color": "accent",
            "hl": [
              {
                "text": "Ai hướng dẫn",
                "at": "l2:supervise"
              }
            ]
          },
          {
            "id": "f-busy",
            "t": "text",
            "text": "“Đi công tác suốt…”",
            "x": 60,
            "y": 1345,
            "size": 42,
            "at": "l3:travel",
            "color": "coral"
          },
          {
            "id": "f-14",
            "t": "text",
            "text": "Điều 14: tổ chức phân công",
            "x": 60,
            "y": 1435,
            "size": 42,
            "at": "l4:fourteen",
            "hl": [
              {
                "text": "phân công",
                "at": "l4:assign"
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
          "say": "Fourth stop: Wednesday afternoon. Thảo calls Ms Hoa back with one question.",
          "sub": "Chặng bốn: chiều thứ Tư. Thảo gọi lại Cô Hoa, hỏi đúng một câu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Who would supervise me, and how many trainees does that person have?",
          "sub": "Ai sẽ hướng dẫn em, và người đó đang hướng dẫn mấy người ạ?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Me. But I travel most weeks. Signing your logbook? We'll see. Deal?",
          "sub": "Chị. Nhưng chị đi công tác suốt. Ký nhật ký à? Tính sau. Rồi, vậy nha?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Right question, first meeting. Article fourteen makes the firm assign a qualified supervisor.",
          "sub": "Hỏi đúng, ngay buổi gặp đầu. Điều 14 Thông tư buộc tổ chức phân công luật sư đủ điều kiện.",
          "keys": [
            "phân công luật sư đủ điều kiện"
          ]
        }
      ],
      "ref": "p8"
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
          }
        ],
        "items": [
          {
            "id": "f-7",
            "t": "text",
            "text": "Không còn ai đủ ĐK → từ chối",
            "x": 60,
            "y": 1520,
            "size": 40,
            "at": "l1:refuse",
            "hl": [
              {
                "text": "từ chối",
                "at": "l1:refuse"
              }
            ]
          },
          {
            "id": "f-13",
            "t": "text",
            "text": "Điều 13: theo dõi, ký nhật ký",
            "x": 60,
            "y": 1600,
            "size": 40,
            "at": "l2:thirteen",
            "hl": [
              {
                "text": "ký nhật ký",
                "at": "l2:logbook"
              }
            ]
          },
          {
            "id": "f-slow",
            "t": "text",
            "text": "Quá bận → hồ sơ chậm",
            "x": 60,
            "y": 1690,
            "size": 52,
            "at": "l3:busy",
            "color": "coral",
            "hl": [
              {
                "text": "hồ sơ chậm",
                "at": "l3:slows"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: khoản 1, 7 Điều 14 · Điều 13 Thông tư 10/2021/TT-BTP",
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
          "say": "Clause seven: no qualified supervisor left? The firm must refuse you.",
          "sub": "Khoản 7: không còn luật sư đủ điều kiện hướng dẫn thì tổ chức phải từ chối nhận."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article thirteen: the supervisor guides, monitors, signs your logbook, and writes your evaluation.",
          "sub": "Điều 13: luật sư hướng dẫn chỉ dẫn, theo dõi, giám sát, ký nhật ký và viết nhận xét.",
          "keys": [
            "ký nhật ký"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Too busy to read and sign? Your final file slows down.",
          "sub": "Bận quá không đọc, không ký? Hồ sơ cuối kỳ chậm theo.",
          "keys": [
            "chậm theo"
          ]
        }
      ],
      "ref": "p8,p9"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Năm · Lời mời của Dũng",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2868,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1:Dũng",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "hot-beverage",
                "memo"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                }
              ]
            },
            "at": "l1:coffee",
            "caption": "Thứ Năm · cà phê với Dũng",
            "icon": "hot-beverage"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: Thursday coffee with Dũng, Thảo's classmate from the course.",
          "sub": "Chặng năm: cà phê thứ Năm với Dũng, bạn cùng lớp đào tạo nghề của Thảo.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Quick, cheerful, and always in a hurry.",
          "sub": "Nhanh nhảu, vui vẻ, lúc nào cũng vội."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s14",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "Thứ Năm · quán cà phê",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Nhận lời “tự lo khách, tự ký thư tư vấn”",
          "why": "Khoản 3 Điều 14 Luật Luật sư: người tập sự không ký văn bản tư vấn pháp luật, không đại diện, bào chữa tại phiên toà.",
          "rule": "Giao việc quá quyền là rủi ro"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Great news! I'll find my own clients and sign advice letters myself!",
          "sub": "Tin vui! Một văn phòng bảo tớ tự lo khách, tự ký thư tư vấn cho nhanh!",
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
          "say": "Article fourteen: trainees sign no legal opinions, and do not plead in court.",
          "sub": "Khoản 3 Điều 14 Luật Luật sư: người tập sự không ký văn bản tư vấn, không bào chữa, đại diện tại phiên toà.",
          "keys": [
            "không ký văn bản tư vấn"
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
          "who": "dung",
          "say": "Then I'll ask how work is assigned under my supervisor.",
          "sub": "Vậy tớ hỏi lại cách phân công, làm dưới sự hướng dẫn của luật sư.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. Tasks beyond your powers are a risk, not a chance.",
          "sub": "Đúng. Giao việc quá quyền không phải cơ hội, mà là rủi ro.",
          "phase": "redo",
          "keys": [
            "mà là rủi ro"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p10,p11,p12"
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
            "at": "l3:end",
            "fit": "G",
            "ms": 400
          }
        ],
        "items": [
          {
            "id": "g-n1",
            "t": "text",
            "text": "✗ Ký văn bản tư vấn",
            "x": 2028,
            "y": 1260,
            "size": 42,
            "at": "l1:What",
            "color": "coral"
          },
          {
            "id": "g-n2",
            "t": "text",
            "text": "✗ Bào chữa tại phiên toà",
            "x": 2028,
            "y": 1330,
            "size": 42,
            "at": "l1:What+300",
            "color": "coral"
          },
          {
            "id": "g-y1",
            "t": "text",
            "text": "✓ Nghiên cứu hồ sơ, tài liệu",
            "x": 2028,
            "y": 1430,
            "size": 40,
            "at": "l1:research",
            "color": "accent"
          },
          {
            "id": "g-y2",
            "t": "text",
            "text": "✓ Đi cùng gặp (nếu đồng ý)",
            "x": 2028,
            "y": 1505,
            "size": 40,
            "at": "l2:meet",
            "color": "accent",
            "hl": [
              {
                "text": "nếu đồng ý",
                "at": "l2:agree"
              }
            ]
          },
          {
            "id": "g-y3",
            "t": "text",
            "text": "✓ Tư vấn khi được phân công",
            "x": 2028,
            "y": 1580,
            "size": 40,
            "at": "l3:assigned",
            "color": "accent"
          },
          {
            "id": "g-re",
            "t": "text",
            "text": "LS hướng dẫn chịu trách nhiệm",
            "x": 2028,
            "y": 1670,
            "size": 44,
            "at": "l3:answers",
            "hl": [
              {
                "text": "chịu trách nhiệm",
                "at": "l3:answers"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: khoản 3 Điều 14 Luật Luật sư (VBHN 03)",
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
          "say": "What a trainee can do: help the supervisor, research files, gather documents.",
          "sub": "Người tập sự được: giúp luật sư hướng dẫn, nghiên cứu hồ sơ, thu thập tài liệu, tình tiết."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Go with the supervisor to meet detainees, defendants or parties, if they agree.",
          "sub": "Đi cùng luật sư gặp người bị tạm giữ, bị can, bị cáo, đương sự, khi họ đồng ý."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Advise out of court when assigned and the client agrees. The supervisor answers for it all.",
          "sub": "Tư vấn, đại diện ngoài tố tụng khi được phân công và khách hàng đồng ý. Luật sư hướng dẫn chịu trách nhiệm.",
          "keys": [
            "chịu trách nhiệm"
          ]
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s16",
      "module": "BRK-03",
      "data": {
        "value": 20,
        "suffix": " giờ",
        "label": "tập sự tối thiểu mỗi tuần",
        "illus": "hourglass-not-done"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One number to promise.",
          "sub": "Một con số để cam kết."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "At least twenty training hours, every week.",
          "sub": "Tối thiểu hai mươi giờ tập sự mỗi tuần.",
          "keys": [
            "hai mươi giờ"
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
            "at": "l4",
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
            "text": "⑥ Thứ Sáu · Giờ và hợp đồng",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sixth"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 1240,
            "w": 780,
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
                "spiral-calendar",
                "money-bag"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:Friday",
            "caption": "Thứ Sáu · tính giờ, tính tiền",
            "icon": "spiral-calendar"
          },
          {
            "id": "h-20",
            "t": "text",
            "text": "≥ 20 giờ / tuần (Điều 12)",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l1:twenty",
            "color": "coral",
            "hl": [
              {
                "text": "≥ 20 giờ",
                "at": "l1:twenty"
              }
            ]
          },
          {
            "id": "h-hd",
            "t": "text",
            "text": "Được thoả thuận HĐLĐ",
            "x": 3996,
            "y": 1350,
            "size": 46,
            "at": "l2:negotiate",
            "hl": [
              {
                "text": "thoả thuận",
                "at": "l2:negotiate"
              }
            ]
          },
          {
            "id": "h-luong",
            "t": "text",
            "text": "Không có mức lương sẵn",
            "x": 3996,
            "y": 1440,
            "size": 46,
            "at": "l3:salary",
            "color": "accent",
            "hl": [
              {
                "text": "Không có mức lương",
                "at": "l3:salary"
              }
            ]
          },
          {
            "id": "h-tt",
            "t": "text",
            "text": "Lương, làm thêm: tự thoả thuận",
            "x": 3996,
            "y": 1520,
            "size": 34,
            "at": "l3:side",
            "color": "muted"
          },
          {
            "id": "h-ask",
            "t": "text",
            "text": "Hỏi trước khi gật đầu",
            "x": 3996,
            "y": 1630,
            "size": 50,
            "at": "l4:Ask",
            "color": "accent",
            "hl": [
              {
                "text": "Hỏi trước",
                "at": "l4:Ask"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: Điều 12, khoản 2 Điều 14 Thông tư 10/2021/TT-BTP",
            "x": 3996,
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
          "say": "Sixth stop: Friday. Article twelve sets the floor at twenty hours a week.",
          "sub": "Chặng sáu: thứ Sáu. Điều 12 đặt mức sàn hai mươi giờ mỗi tuần.",
          "keys": [
            "hai mươi giờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "You may negotiate a labour contract. Article fourteen says firms can sign one.",
          "sub": "Người tập sự có quyền thoả thuận hợp đồng lao động; khoản 2 Điều 14 nói tổ chức có thể ký."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But the circular sets no salary. Pay, hours, side jobs: all agreed between you.",
          "sub": "Nhưng Thông tư không đặt mức lương. Thu nhập, giờ làm, việc làm thêm: tự thoả thuận.",
          "keys": [
            "không đặt mức lương"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Write it down first! Hours, contract, pay. Ask before saying yes.",
          "sub": "Ghi lại đã! Giờ, hợp đồng, thu nhập. Hỏi trước khi gật đầu.",
          "face": "happy"
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s18",
      "module": "BRK-04",
      "data": {
        "title": "Thư xin tập sự",
        "wrong": "Em làm gì cũng được ạ",
        "right": "Đủ điều kiện, cam kết giờ, hỏi người hướng dẫn",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrongIllus": "pleading-face",
        "rightIllus": "memo"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before: I will do anything, please take me.",
          "sub": "Trước: em làm gì cũng được ạ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After: qualified, hours promised, supervisor asked.",
          "sub": "Sau: đủ điều kiện, cam kết giờ, hỏi người hướng dẫn.",
          "keys": [
            "hỏi người hướng dẫn"
          ]
        }
      ],
      "ref": "p14"
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
            "at": "l5",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Tối thứ Sáu · Viết lại thư",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Seventh"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 1240,
            "w": 780,
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
                "memo",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:rewrites",
            "caption": "Tối thứ Sáu · bản thư mới",
            "icon": "memo"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1275,
            "w": 46,
            "h": 46,
            "at": "l2:certificate",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1257,
            "size": 58,
            "at": "l2:certificate+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Đã có giấy tốt nghiệp",
            "x": 6032,
            "y": 1265,
            "size": 38,
            "at": "l2:certificate+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1355,
            "w": 46,
            "h": 46,
            "at": "l2:litigation",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1337,
            "size": 58,
            "at": "l2:litigation+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Muốn tập ở mảng nào",
            "x": 6032,
            "y": 1345,
            "size": 38,
            "at": "l2:litigation+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1435,
            "w": 46,
            "h": 46,
            "at": "l3:hours",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1417,
            "size": 58,
            "at": "l3:hours+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Cam kết ≥ giờ tối thiểu",
            "x": 6032,
            "y": 1425,
            "size": 38,
            "at": "l3:hours+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1515,
            "w": 46,
            "h": 46,
            "at": "l4:supervise",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1497,
            "size": 58,
            "at": "l4:supervise+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Hỏi: ai hướng dẫn?",
            "x": 6032,
            "y": 1505,
            "size": 38,
            "at": "l4:supervise+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1595,
            "w": 46,
            "h": 46,
            "at": "l4:contract",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1577,
            "size": 58,
            "at": "l4:contract+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Hỏi: có HĐLĐ không?",
            "x": 6032,
            "y": 1585,
            "size": 38,
            "at": "l4:contract+200"
          },
          {
            "id": "i-key",
            "t": "text",
            "text": "Hỏi rõ từ đầu, đỡ đổi nơi",
            "x": 5964,
            "y": 1690,
            "size": 48,
            "at": "l5:clearly",
            "color": "accent",
            "hl": [
              {
                "text": "đỡ đổi nơi",
                "at": "l5:changing"
              }
            ]
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: điểm đ khoản 2 Điều 12 Thông tư 10/2021/TT-BTP",
            "x": 5964,
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
          "say": "Seventh stop: Friday night. Thảo rewrites her email.",
          "sub": "Chặng bảy: tối thứ Sáu. Thảo viết lại thư."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I hold the lawyer training certificate, and wish to train in your litigation work.",
          "sub": "Em đã có giấy chứng nhận tốt nghiệp đào tạo nghề luật sư, muốn tập sự ở mảng tố tụng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I can commit the weekly hours, no fewer than the circular's minimum.",
          "sub": "Em bảo đảm số giờ mỗi tuần, không ít hơn mức tối thiểu của Thông tư."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Who would supervise me, and would there be a labour contract?",
          "sub": "Xin anh chị cho biết luật sư dự kiến hướng dẫn, và có hay không hợp đồng lao động."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Eligible, hours clear, the right questions. Ask clearly now, avoid changing firms halfway.",
          "sub": "Đủ điều kiện, rõ giờ, hỏi đúng điều. Hỏi rõ từ đầu thì đỡ phải đổi nơi giữa chừng.",
          "keys": [
            "đỡ phải đổi nơi giữa chừng"
          ]
        }
      ],
      "ref": "p14,p15"
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
            "text": "Tối Chủ nhật · tuần sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "face": "happy",
                  "pose": "hold"
                }
              ],
              "props": [
                "clipboard",
                "check-mark-button"
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
            "at": "l1:Sunday",
            "caption": "Tối Chủ nhật · tờ bảng đã kín",
            "icon": "clipboard"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1265,
            "w": 46,
            "h": 46,
            "at": "l2:Type",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1247,
            "size": 58,
            "at": "l2:Type+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Loại: khoản 3 Điều 4",
            "x": 8000,
            "y": 1255,
            "size": 32,
            "at": "l2:Type+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1331,
            "w": 46,
            "h": 46,
            "at": "l2:head",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1313,
            "size": 58,
            "at": "l2:head+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Trụ sở → Đoàn nào",
            "x": 8000,
            "y": 1321,
            "size": 32,
            "at": "l2:head+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1397,
            "w": 46,
            "h": 46,
            "at": "l2:field",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1379,
            "size": 58,
            "at": "l2:field+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Lĩnh vực, vụ tố tụng",
            "x": 8000,
            "y": 1387,
            "size": 32,
            "at": "l2:field+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1463,
            "w": 46,
            "h": 46,
            "at": "l2:supervisor",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1445,
            "size": 58,
            "at": "l2:supervisor+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Tên LS, đang hướng dẫn mấy",
            "x": 8000,
            "y": 1453,
            "size": 32,
            "at": "l2:supervisor+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1529,
            "w": 46,
            "h": 46,
            "at": "l2:hours",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1511,
            "size": 58,
            "at": "l2:hours+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Giờ cam kết mỗi tuần",
            "x": 8000,
            "y": 1519,
            "size": 32,
            "at": "l2:hours+200"
          },
          {
            "id": "j-c5",
            "t": "box",
            "x": 7932,
            "y": 1595,
            "w": 46,
            "h": 46,
            "at": "l2:contract",
            "stroke": 5
          },
          {
            "id": "j-k5",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1577,
            "size": 58,
            "at": "l2:contract+600",
            "color": "accent"
          },
          {
            "id": "j-l5",
            "t": "text",
            "text": "Hợp đồng, thu nhập",
            "x": 8000,
            "y": 1585,
            "size": 32,
            "at": "l2:contract+200"
          },
          {
            "id": "j-c6",
            "t": "box",
            "x": 7932,
            "y": 1661,
            "w": 46,
            "h": 46,
            "at": "l2:confirmation",
            "stroke": 5
          },
          {
            "id": "j-k6",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1643,
            "size": 58,
            "at": "l2:confirmation+600",
            "color": "accent"
          },
          {
            "id": "j-l6",
            "t": "text",
            "text": "Ngày có Giấy xác nhận",
            "x": 8000,
            "y": 1651,
            "size": 32,
            "at": "l2:confirmation+200"
          },
          {
            "id": "j-10",
            "t": "text",
            "text": "Bí: Đoàn giới thiệu, 10 ngày",
            "x": 7932,
            "y": 1740,
            "size": 40,
            "at": "l4:ten",
            "color": "accent",
            "hl": [
              {
                "text": "10 ngày",
                "at": "l4:ten"
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
          "say": "Sunday evening, one week later. Same table, same sheet. Not blank any more.",
          "sub": "Tối Chủ nhật, một tuần sau. Vẫn chiếc bàn ấy, tờ bảng ấy. Nhưng không còn trống."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Type, head office, field, supervisor, hours, contract, and when the confirmation comes.",
          "sub": "Loại tổ chức, trụ sở, lĩnh vực, người hướng dẫn, số giờ, hợp đồng, và ngày có Giấy xác nhận.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Head office matters too: it decides which bar receives your file.",
          "sub": "Trụ sở cũng quan trọng: nó quyết định Đoàn luật sư nào nhận hồ sơ.",
          "keys": [
            "Đoàn luật sư nào nhận hồ sơ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Still no deal after many tries? Ask the bar's board. It assigns a place within ten days.",
          "sub": "Thử nhiều nơi vẫn chưa được? Đề nghị Ban chủ nhiệm Đoàn giới thiệu, phân công trong mười ngày.",
          "keys": [
            "mười ngày"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Choose the face, then trust the gold. Thảo chose with one sheet of paper.",
          "sub": "“Chọn mặt gửi vàng.” Thảo chọn bằng một tờ bảng.",
          "keys": [
            "Chọn mặt gửi vàng"
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
      "ref": "p16,p17"
    },
    {
      "id": "s21",
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
            "at": "l1:field",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:supervises",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:helps",
            "fit": "G",
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
            "x": 6724,
            "y": 650,
            "at": "l1:field"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 820,
            "y": 1270,
            "at": "l2:supervises"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2788,
            "y": 1290,
            "at": "l3:helps"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Kiến thức nghề, không phải tư vấn vụ việc cụ thể; nhân vật là minh hoạ. Luật Luật sư đang sửa đổi (17/10–21/11/2026).",
            "x": 7932,
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
          "say": "So: check the type of firm, and the field of work.",
          "sub": "Tóm lại: kiểm loại tổ chức, và lĩnh vực sẽ được làm.",
          "keys": [
            "lĩnh vực"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask who supervises you, and the hours and contract.",
          "sub": "Hỏi ai hướng dẫn mình, cùng số giờ và hợp đồng.",
          "keys": [
            "ai hướng dẫn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A trainee helps, but signs no opinions and does not plead in court.",
          "sub": "Người tập sự giúp việc, nhưng không ký văn bản tư vấn, không ra phiên toà thay luật sư.",
          "keys": [
            "không ký văn bản tư vấn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "General knowledge, not advice for your case. The law is being amended, so recheck.",
          "sub": "Đây là kiến thức nghề, không phải tư vấn cho trường hợp riêng. Luật Luật sư đang sửa đổi, nhớ kiểm lại.",
          "keys": [
            "nhớ kiểm lại"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p17"
    },
    {
      "id": "s22",
      "module": "QUIZ-01",
      "data": {
        "q": "An office says you will sign advice letters yourself, how should you respond?",
        "options": [
          "Ask for a higher salary, since signing is a lawyer's job",
          "Ask how work will be assigned under the supervisor, since trainees cannot sign",
          "Accept happily, because signing letters is the fastest way to learn"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "memo",
        "why": "Khoản 3 Điều 14 Luật Luật sư: người tập sự không được ký văn bản tư vấn pháp luật; nên hỏi lại cách phân công dưới sự hướng dẫn của luật sư."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "An office says you will sign advice letters yourself, how should you respond?",
          "sub": "Văn phòng nói anh chị sẽ tự ký thư tư vấn, nên phản hồi thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Ask how work is assigned under your supervisor. Trainees cannot sign.",
          "sub": "Hỏi lại cách phân công dưới sự hướng dẫn của luật sư. Người tập sự không được ký."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Tasks beyond your powers are a risk, not a chance.",
          "sub": "Giao việc quá quyền là rủi ro, không phải cơ hội."
        }
      ],
      "ref": "questions[22]"
    },
    {
      "id": "s23",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi điền bảng so sánh cho ba nơi đang cân nhắc"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, fill the comparison table for three places you are weighing.",
          "sub": "Hôm nay, điền bảng so sánh cho ba nơi đang cân nhắc."
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
  "notes": "#145 bài MỚI theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-23: đồ vật kể chuyện — tờ bảng so sánh trống (máy kéo ra từ bảng đến Thảo; vật trở lại ở kết, đã điền). Đét trái + bảng 10 ô theo một tuần đi chọn nơi của Thảo: thứ Hai lọc loại tổ chức (công ty luật nước ngoài vẫn được nhận) → thứ Ba công ty Cô Hoa (Cách A) → thứ Tư văn phòng Bác Bình (Cách B) + BRK-02 rút ra → chiều thứ Tư gọi lại Cô Hoa: ai hướng dẫn → thứ Năm Dũng “tự ký thư tư vấn” (Khoan đã!) → thứ Sáu giờ, hợp đồng → tối thứ Sáu viết lại thư (BRK-04 trước/sau) → tối Chủ nhật tuần sau, bảng đã kín (khép vòng). Nhân vật theo w145/_series/bar-trainee-registration.md. Số/điều chỉ từ bài: Điều 4, 6, 8, 12, 13, 14 TT 10/2021; khoản 3 Điều 14 Luật Luật sư; 20 giờ/tuần; 10 ngày; Tạp chí LSVN 13/8/2026; kỳ họp 17/10–21/11/2026. BRK: s05 BRK-07, s10 BRK-02, s16 BRK-03 (20 giờ), s18 BRK-04 (thư trước/sau); DLG s14. Câu đố questions[22]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
