// contractor-mindset--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "contractor-mindset--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "epc-contractor-side",
    "slug": "contractor-mindset",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Nhà thầu EPC nhìn hợp đồng thế nào và muốn gì nhất?",
    "series": "Nhìn hợp đồng EPC qua mắt nhà thầu — cho người đàm phán phía chủ đầu tư, đoán trước điểm họ đòi và đáp đúng câu chữ"
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
              "a-r1",
              "a-r2"
            ],
            "zoom": 1.3,
            "move": "cut"
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "a-h",
            "t": "text",
            "text": "Bản sửa của nhà thầu",
            "x": 60,
            "y": 50,
            "size": 60,
            "at": "l1:page",
            "color": "accent"
          },
          {
            "id": "a-r1",
            "t": "text",
            "text": "Giá tăng",
            "x": 80,
            "y": 150,
            "size": 50,
            "at": "l1:strike"
          },
          {
            "id": "a-r1b",
            "t": "text",
            "text": "→ tăng hoặc giảm",
            "x": 300,
            "y": 150,
            "size": 50,
            "at": "l1:added",
            "color": "coral",
            "hl": [
              {
                "text": "hoặc",
                "at": "l1:little"
              }
            ]
          },
          {
            "id": "a-r2",
            "t": "text",
            "text": "“bổ sung”",
            "x": 80,
            "y": 230,
            "size": 50,
            "at": "l1:strike+400"
          },
          {
            "id": "a-r2x",
            "t": "strike",
            "over": "a-r2",
            "at": "l1:strike+700"
          },
          {
            "id": "a-r3",
            "t": "text",
            "text": "… tuỳ thời điểm nào đến sau",
            "x": 80,
            "y": 310,
            "size": 44,
            "at": "l1:there"
          },
          {
            "id": "a-r3x",
            "t": "strike",
            "over": "a-r3",
            "at": "l1:there+500"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Vài chục chỗ nhỏ, gộp lại?",
            "x": 80,
            "y": 400,
            "size": 48,
            "at": "l3:dozen",
            "hl": [
              {
                "text": "gộp lại",
                "at": "l3:Together"
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
          "say": "One page. A strike here, one little word added there.",
          "sub": "Một trang giấy. Chỗ này gạch, chỗ kia thêm một chữ nhỏ.",
          "keys": [
            "thêm một chữ nhỏ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A few dozen tiny edits. Together, they can move a whole block of risk. Who is holding this page?",
          "sub": "Vài chục chỗ sửa nhỏ xíu. Gộp lại, chúng có thể dời cả khối rủi ro. Ai đang cầm trang này?",
          "keys": [
            "dời cả khối rủi ro"
          ]
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
            "y": 40,
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
                  "face": "thinking"
                }
              ],
              "props": [
                "e-mail",
                "page-facing-up"
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
            "caption": "8:00 thứ Hai · bàn pháp chế",
            "icon": "e-mail"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Biết người biết ta”",
            "x": 80,
            "y": 520,
            "size": 54,
            "at": "l4:yourself",
            "color": "accent",
            "hl": [
              {
                "text": "Biết người",
                "at": "l4:yourself"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "→ đọc bằng mắt nhà thầu",
            "x": 80,
            "y": 610,
            "size": 46,
            "at": "l4:contractor"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "This is Thảo, in-house lawyer for the owner of a power plant project.",
          "sub": "Đây là Thảo, chuyên viên pháp chế phía chủ đầu tư một dự án nhà máy điện.",
          "keys": [
            "chủ đầu tư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Monday, eight a.m. The contractor's markup just arrived.",
          "sub": "Tám giờ sáng thứ Hai. Bản sửa của nhà thầu vừa về.",
          "keys": [
            "Bản sửa của nhà thầu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Firstly, why so many tiny edits? Secondly, what do they want?",
          "sub": "Thứ nhất, sao sửa nhiều chỗ nhỏ thế? Thứ hai, họ muốn gì?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Know them, know yourself, win every battle. Today we read like the contractor.",
          "sub": "“Biết người biết ta, trăm trận trăm thắng.” Hôm nay ta đọc bằng mắt nhà thầu.",
          "keys": [
            "Biết người biết ta"
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
            "text": "Nhà thầu đọc hợp đồng thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:read",
            "hl": [
              {
                "text": "thế nào",
                "at": "l1:how"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: kẻ xấu tìm mánh",
            "x": 2028,
            "y": 160,
            "size": 50,
            "at": "l2:villain",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:tricks"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: bảng giá rủi ro",
            "x": 2028,
            "y": 250,
            "size": 62,
            "at": "l3:price",
            "color": "accent",
            "hl": [
              {
                "text": "bảng giá rủi ro",
                "at": "l3:list"
              }
            ]
          },
          {
            "id": "b-push",
            "t": "text",
            "text": "Không đẩy được → cộng vào giá",
            "x": 2028,
            "y": 350,
            "size": 50,
            "at": "l4:push",
            "color": "coral",
            "hl": [
              {
                "text": "cộng vào giá",
                "at": "l4:added"
              }
            ]
          },
          {
            "id": "b-i",
            "t": "illus",
            "name": "money-bag",
            "x": 3268,
            "y": 170,
            "size": 200,
            "at": "l3:tag"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how does an EPC contractor read the contract, and what does it want most?",
          "sub": "Vậy nhà thầu EPC đọc hợp đồng thế nào, và muốn gì nhất?",
          "keys": [
            "muốn gì nhất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not as a villain hunting for tricks.",
          "sub": "Không phải như kẻ xấu đi tìm mánh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But as a price list of risks. Every risk wears a price tag.",
          "sub": "Mà như một bảng giá rủi ro. Rủi ro nào cũng gắn mác giá.",
          "keys": [
            "bảng giá rủi ro"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A risk it cannot push away comes back, added to the price.",
          "sub": "Rủi ro nào không đẩy đi được thì quay lại, cộng vào giá.",
          "keys": [
            "cộng vào giá"
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
            "id": "b-mk",
            "t": "text",
            "text": "Bản sửa = rủi ro muốn bớt",
            "x": 2028,
            "y": 450,
            "size": 46,
            "at": "l1:list",
            "hl": [
              {
                "text": "muốn bớt",
                "at": "l1:shed"
              }
            ]
          },
          {
            "id": "b-dp",
            "t": "text",
            "text": "bớt không được → nấp vào dự phòng",
            "x": 2028,
            "y": 520,
            "size": 42,
            "at": "l2:contingency",
            "color": "muted",
            "hl": [
              {
                "text": "dự phòng",
                "at": "l2:hides"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 610,
            "w": 210,
            "h": 84,
            "at": "l3:seven+300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2263,
            "y": 610,
            "w": 210,
            "h": 84,
            "at": "l3:seven+550",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2498,
            "y": 610,
            "w": 210,
            "h": 84,
            "at": "l3:seven+800",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2733,
            "y": 610,
            "w": 210,
            "h": 84,
            "at": "l3:seven+1050",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 610,
            "w": 210,
            "h": 84,
            "at": "l3:seven+1300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 610,
            "w": 210,
            "h": 84,
            "at": "l3:seven+1550",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3438,
            "y": 610,
            "w": 210,
            "h": 84,
            "at": "l3:seven+1800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "8:30",
            "x": 2056,
            "y": 622,
            "size": 46,
            "at": "l3:seven+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "10:00",
            "x": 2291,
            "y": 622,
            "size": 46,
            "at": "l3:seven+670"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "11:00",
            "x": 2526,
            "y": 622,
            "size": 46,
            "at": "l3:seven+920"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "14:00",
            "x": 2761,
            "y": 622,
            "size": 46,
            "at": "l3:seven+1170"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "15:30",
            "x": 2996,
            "y": 622,
            "size": 46,
            "at": "l3:seven+1420"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "16:30",
            "x": 3231,
            "y": 622,
            "size": 46,
            "at": "l3:seven+1670"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "17:30",
            "x": 3466,
            "y": 622,
            "size": 46,
            "at": "l3:seven+1920"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Read that way, the markup is a list of risks they want to shed.",
          "sub": "Đọc theo cách đó, bản sửa là bảng kê những rủi ro họ muốn bớt.",
          "keys": [
            "bảng kê những rủi ro"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "What they cannot shed hides in a contingency.",
          "sub": "Phần không bớt được thì nấp trong khoản dự phòng.",
          "keys": [
            "khoản dự phòng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Now, Thảo's Monday, in seven stops.",
          "sub": "Giờ theo Thảo qua một ngày thứ Hai, bảy chặng.",
          "keys": [
            "bảy chặng"
          ]
        }
      ],
      "ref": "p3"
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
            "text": "① 8:30 · Ba trụ cột",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:eight"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 110,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
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
              "props": [
                "factory",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
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
            "caption": "8:30 · Dũng ghé bàn Thảo",
            "icon": "factory"
          },
          {
            "id": "c-buy",
            "t": "text",
            "text": "CĐT mua một kết quả:",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l4:result",
            "hl": [
              {
                "text": "kết quả",
                "at": "l4:result"
              }
            ]
          },
          {
            "id": "c-buy2",
            "t": "text",
            "text": "chạy được · đúng mục đích · đúng hạn",
            "x": 3996,
            "y": 240,
            "size": 36,
            "at": "l4:working",
            "color": "muted"
          },
          {
            "id": "c-p1",
            "t": "text",
            "text": "Một đầu mối",
            "x": 3996,
            "y": 330,
            "size": 46,
            "at": "l5:Single"
          },
          {
            "id": "c-p2",
            "t": "text",
            "text": "Giá trọn gói",
            "x": 3996,
            "y": 400,
            "size": 46,
            "at": "l5:lump"
          },
          {
            "id": "c-p3",
            "t": "text",
            "text": "Thời hạn chắc",
            "x": 3996,
            "y": 470,
            "size": 46,
            "at": "l5:firm"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: eight thirty.",
          "sub": "Chặng một: tám rưỡi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Dũng, the owner's young site engineer, always in a hurry.",
          "sub": "Đây là Dũng, kỹ sư hiện trường trẻ phía chủ đầu tư, lúc nào cũng vội.",
          "keys": [
            "kỹ sư hiện trường"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "EPC means lump sum. One contractor, one price, one finish date. Let's sign quickly!",
          "sub": "EPC là trọn gói mà. Một nhà thầu, một giá, một ngày xong. Ký luôn cho kịp!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The owner buys a result: a working plant, fit for purpose, on time.",
          "sub": "Trong EPC, chủ đầu tư mua một kết quả: nhà máy chạy được, đúng mục đích, đúng hạn.",
          "keys": [
            "mua một kết quả"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Single point, lump sum, firm date: three pillars the owner wants.",
          "sub": "Một đầu mối, giá trọn gói, thời hạn chắc: ba trụ cột chủ đầu tư muốn.",
          "keys": [
            "ba trụ cột"
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
            "id": "c-a1",
            "t": "arrow",
            "from": [
              4306,
              355
            ],
            "to": [
              4361,
              355
            ],
            "at": "l2:interface"
          },
          {
            "id": "c-g1",
            "t": "text",
            "text": "cả lỗi giao diện",
            "x": 4376,
            "y": 337,
            "size": 36,
            "at": "l2:interface+200",
            "color": "coral"
          },
          {
            "id": "c-a2",
            "t": "arrow",
            "from": [
              4306,
              425
            ],
            "to": [
              4361,
              425
            ],
            "at": "l2:Lump"
          },
          {
            "id": "c-g2",
            "t": "text",
            "text": "khối lượng, giá vật tư",
            "x": 4376,
            "y": 407,
            "size": 36,
            "at": "l2:Lump+200",
            "color": "coral"
          },
          {
            "id": "c-a3",
            "t": "arrow",
            "from": [
              4306,
              495
            ],
            "to": [
              4361,
              495
            ],
            "at": "l3:Firm"
          },
          {
            "id": "c-g3",
            "t": "text",
            "text": "ngày chậm → tiền phạt",
            "x": 4376,
            "y": 477,
            "size": 36,
            "at": "l3:penalty",
            "color": "coral"
          },
          {
            "id": "c-exp",
            "t": "text",
            "text": "→ EPC thường đắt hơn",
            "x": 3996,
            "y": 580,
            "size": 52,
            "at": "l4:pricier",
            "color": "accent",
            "hl": [
              {
                "text": "đắt hơn",
                "at": "l4:pricier"
              }
            ]
          },
          {
            "id": "c-210",
            "t": "text",
            "text": "NĐ 210/2026: trọn gói KHÔNG bắt buộc",
            "x": 3996,
            "y": 660,
            "size": 40,
            "at": "l5:Decree",
            "hl": [
              {
                "text": "KHÔNG bắt buộc",
                "at": "l5:compulsory"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nghị định 210/2026/NĐ-CP, Điều 11 — giá hợp đồng xây dựng",
            "x": 3996,
            "y": 722,
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
          "say": "For the contractor, each pillar is a load of risk.",
          "sub": "Với nhà thầu, mỗi trụ cột là một gánh rủi ro.",
          "keys": [
            "một gánh rủi ro"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Single point: every interface mistake. Lump sum: quantities and material prices.",
          "sub": "Một đầu mối: gánh cả lỗi giao diện. Trọn gói: rủi ro khối lượng, giá vật tư."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Firm date: each late day may become a penalty.",
          "sub": "Thời hạn chắc: mỗi ngày chậm có thể thành tiền phạt."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So EPC is usually pricier. Like phở with extra egg: every topping is billed.",
          "sub": "Vì vậy EPC thường đắt hơn. Như phở thêm trứng: món nào cũng tính tiền.",
          "keys": [
            "EPC thường đắt hơn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Decree two ten of twenty twenty six calls lump sum common for EPC. Not compulsory.",
          "sub": "Nghị định 210/2026 ghi trọn gói “áp dụng phổ biến” cho EPC khi quản lý được rủi ro, nhưng không bắt buộc.",
          "keys": [
            "không bắt buộc"
          ]
        }
      ],
      "ref": "p2,p4"
    },
    {
      "id": "s07",
      "module": "BRK-04",
      "data": {
        "title": "Giá chắc từ đâu?",
        "labels": [
          "Dũng tưởng",
          "Thực ra"
        ],
        "wrong": "Cứ là EPC thì tự có giá chắc",
        "right": "Giá chắc đến từ câu chữ, không từ cái tên",
        "wrongIllus": "label",
        "rightIllus": "memo"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "EPC on the cover means a firm price?",
          "sub": "Ghi EPC ngoài bìa là giá chắc?",
          "keys": [
            "giá chắc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. A firm price comes from wording.",
          "sub": "Không. Giá chắc đến từ câu chữ.",
          "keys": [
            "câu chữ"
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
            "text": "② 10:00 · Danh sách mong muốn",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:ten"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 110,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "handshake"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2:Sam",
            "caption": "10:00 · họp trực tuyến với nhà thầu",
            "icon": "laptop"
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 175,
            "w": 44,
            "h": 44,
            "at": "l4:cap",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 163,
            "size": 56,
            "at": "l4:cap+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Trần trách nhiệm thấp",
            "x": 6034,
            "y": 169,
            "size": 38,
            "at": "l4:cap+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 247,
            "w": 44,
            "h": 44,
            "at": "l4:indirect",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 235,
            "size": 56,
            "at": "l4:indirect+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Loại trừ thiệt hại gián tiếp",
            "x": 6034,
            "y": 241,
            "size": 38,
            "at": "l4:indirect+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 319,
            "w": 44,
            "h": 44,
            "at": "l4:sole",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 307,
            "size": 56,
            "at": "l4:sole+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Phạt chậm: biện pháp duy nhất",
            "x": 6034,
            "y": 313,
            "size": 38,
            "at": "l4:sole+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 391,
            "w": 44,
            "h": 44,
            "at": "l5:Wide",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 379,
            "size": 56,
            "at": "l5:Wide+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Gia hạn rộng, thông báo nhẹ",
            "x": 6034,
            "y": 385,
            "size": 38,
            "at": "l5:Wide+200"
          },
          {
            "id": "d-c4",
            "t": "box",
            "x": 5964,
            "y": 463,
            "w": 44,
            "h": 44,
            "at": "l5:Early",
            "stroke": 5
          },
          {
            "id": "d-k4",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 451,
            "size": 56,
            "at": "l5:Early+600",
            "color": "accent"
          },
          {
            "id": "d-l4",
            "t": "text",
            "text": "Thanh toán sớm",
            "x": 6034,
            "y": 457,
            "size": 38,
            "at": "l5:Early+200"
          },
          {
            "id": "d-c5",
            "t": "box",
            "x": 5964,
            "y": 535,
            "w": 44,
            "h": 44,
            "at": "l5:silence",
            "stroke": 5
          },
          {
            "id": "d-k5",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 523,
            "size": 56,
            "at": "l5:silence+600",
            "color": "accent"
          },
          {
            "id": "d-l5",
            "t": "text",
            "text": "Im lặng = chấp thuận",
            "x": 6034,
            "y": 529,
            "size": 38,
            "at": "l5:silence+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: ten a.m., a video call.",
          "sub": "Chặng hai: mười giờ sáng, họp trực tuyến."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Sam, who leads the contractor's negotiating team. Polite, and very direct.",
          "sub": "Đây là Sam, trưởng nhóm đàm phán của nhà thầu. Lịch sự, và rất thẳng.",
          "keys": [
            "trưởng nhóm đàm phán"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Honestly? We price every risk. Same wish list on every project.",
          "sub": "Nói thật nhé? Chúng tôi định giá mọi rủi ro. Dự án nào cũng một danh sách mong muốn.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A low liability cap with few exceptions. No indirect loss. Delay damages as the sole remedy.",
          "sub": "Trần trách nhiệm thấp, ít ngoại lệ. Loại trừ thiệt hại gián tiếp. Phạt chậm là biện pháp duy nhất.",
          "keys": [
            "biện pháp duy nhất"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Wide extensions, light notices. Early payment. And owner silence counts as approval.",
          "sub": "Gia hạn rộng, thông báo nhẹ. Thanh toán sớm. Và chủ đầu tư im lặng thì coi như chấp thuận.",
          "keys": [
            "coi như chấp thuận"
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
            "fit": "D",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "d-r1",
            "t": "text",
            "text": "Trần thấp → lỗ có đáy",
            "x": 5964,
            "y": 585,
            "size": 34,
            "at": "l2:bottom",
            "hl": [
              {
                "text": "có đáy",
                "at": "l2:bottom"
              }
            ]
          },
          {
            "id": "d-r2",
            "t": "text",
            "text": "Gián tiếp → không gánh tiền điện",
            "x": 5964,
            "y": 630,
            "size": 34,
            "at": "l3:power"
          },
          {
            "id": "d-r3",
            "t": "text",
            "text": "Duy nhất → thu phạt rồi thôi",
            "x": 5964,
            "y": 675,
            "size": 34,
            "at": "l4:Sole"
          },
          {
            "id": "d-r4",
            "t": "text",
            "text": "Gia hạn, trả sớm → tiền không kẹt",
            "x": 5964,
            "y": 720,
            "size": 34,
            "at": "l4:stuck",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Every wish has a reason. A low cap gives their worst loss a bottom.",
          "sub": "Mong muốn nào cũng có lý do. Trần thấp để khoản lỗ lớn nhất có đáy.",
          "keys": [
            "có đáy"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No indirect loss, so they never carry the owner's lost power sales.",
          "sub": "Loại trừ thiệt hại gián tiếp để không gánh doanh thu bán điện mất của chủ đầu tư."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sole remedy: you collect damages, and that's it. Wide extensions and early pay: cash never gets stuck.",
          "sub": "Biện pháp duy nhất: chủ đầu tư thu phạt rồi thôi. Gia hạn rộng, thanh toán sớm: dòng tiền không bị kẹt.",
          "keys": [
            "dòng tiền không bị kẹt"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s10",
      "module": "BRK-04",
      "data": {
        "title": "Cùng một điều phạt chậm",
        "labels": [
          "Nhà thầu muốn",
          "Chủ đầu tư muốn"
        ],
        "wrong": "Phạt chậm là biện pháp duy nhất",
        "right": "Không ảnh hưởng quyền khác, chạm trần được chấm dứt",
        "wrongIllus": "locked",
        "rightIllus": "key"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Contractor: damages, then nothing more.",
          "sub": "Nhà thầu: phạt chậm, rồi thôi.",
          "keys": [
            "rồi thôi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Owner: other rights kept, termination at the cap.",
          "sub": "Chủ đầu tư: không ảnh hưởng quyền khác, chạm trần được chấm dứt.",
          "keys": [
            "không ảnh hưởng quyền khác"
          ]
        }
      ],
      "ref": "p8"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 11:00 · Bốn nỗi sợ",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:eleven",
            "hl": [
              {
                "text": "Bốn nỗi sợ",
                "at": "l1:fear"
              }
            ]
          },
          {
            "id": "e-i0",
            "t": "illus",
            "name": "rock",
            "x": 7932,
            "y": 160,
            "size": 90,
            "at": "l2:unforeseen"
          },
          {
            "id": "e-f0",
            "t": "text",
            "text": "Công trường không lường trước",
            "x": 8052,
            "y": 175,
            "size": 44,
            "at": "l2:unforeseen+200"
          },
          {
            "id": "e-i1",
            "t": "illus",
            "name": "scroll",
            "x": 7932,
            "y": 270,
            "size": 90,
            "at": "l2:change"
          },
          {
            "id": "e-f1",
            "t": "text",
            "text": "Thay đổi pháp luật",
            "x": 8052,
            "y": 285,
            "size": 44,
            "at": "l2:change+200"
          },
          {
            "id": "e-i2",
            "t": "illus",
            "name": "hourglass-not-done",
            "x": 7932,
            "y": 380,
            "size": 90,
            "at": "l2:owner"
          },
          {
            "id": "e-f2",
            "t": "text",
            "text": "Chậm do chủ đầu tư",
            "x": 8052,
            "y": 395,
            "size": 44,
            "at": "l2:owner+200"
          },
          {
            "id": "e-i3",
            "t": "illus",
            "name": "high-voltage",
            "x": 7932,
            "y": 490,
            "size": 90,
            "at": "l2:grid"
          },
          {
            "id": "e-f3",
            "t": "text",
            "text": "Chậm đấu nối lưới",
            "x": 8052,
            "y": 505,
            "size": 44,
            "at": "l2:grid+200"
          },
          {
            "id": "e-how",
            "t": "text",
            "text": "Đẩy về bằng câu chữ nhỏ:",
            "x": 8832,
            "y": 170,
            "size": 46,
            "at": "l3:tiny",
            "color": "accent"
          },
          {
            "id": "e-h1",
            "t": "text",
            "text": "• thêm sự kiện gia hạn",
            "x": 8832,
            "y": 250,
            "size": 40,
            "at": "l3:event"
          },
          {
            "id": "e-h2",
            "t": "text",
            "text": "• “dựa trên mốc tạm của CĐT”",
            "x": 8832,
            "y": 320,
            "size": 40,
            "at": "l4:provisional",
            "color": "coral"
          },
          {
            "id": "e-h3",
            "t": "text",
            "text": "• đóng băng quy chuẩn lưới",
            "x": 8832,
            "y": 390,
            "size": 40,
            "at": "l4:frozen",
            "hl": [
              {
                "text": "đóng băng",
                "at": "l4:frozen"
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
          "say": "Third stop: eleven a.m. What does the contractor fear most?",
          "sub": "Chặng ba: mười một giờ. Nhà thầu sợ gì nhất?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Four usual fears: unforeseen site conditions, change in law, owner delay, grid connection.",
          "sub": "Bốn nỗi sợ hay gặp: công trường không lường trước, thay đổi pháp luật, chậm do chủ đầu tư, chậm đấu nối.",
          "keys": [
            "Bốn nỗi sợ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "They push them back with tiny wording. One more extension event.",
          "sub": "Họ đẩy về bằng câu chữ nhỏ. Thêm một sự kiện gia hạn.",
          "keys": [
            "câu chữ nhỏ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A note: schedule based on the owner's provisional dates. Or a grid code frozen at signing.",
          "sub": "Một ghi chú: “tiến độ dựa trên mốc tạm của chủ đầu tư”. Hoặc quy chuẩn lưới đóng băng tại ngày ký.",
          "keys": [
            "đóng băng"
          ]
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "11:30 · Dũng chép câu mẫu",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Chép câu mẫu là rủi ro địa chất về nhà thầu",
          "why": "Luật Xây dựng 2025: địa chất bất thường không lường trước là hoàn cảnh thay đổi cơ bản.",
          "rule": "Soi câu mẫu bằng luật Việt Nam"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Easy. We copy the model line: the contractor bears all site risk. Done.",
          "sub": "Dễ mà. Chép câu mẫu quốc tế: nhà thầu chịu mọi rủi ro công trường. Xong.",
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
          "say": "Construction Law twenty twenty five, Article thirteen: abnormal unforeseeable geology is a fundamental change. Renegotiation may follow.",
          "sub": "Điều 13 Luật Xây dựng 2025: địa chất bất thường không lường trước là hoàn cảnh thay đổi cơ bản. Có thể phải đàm phán lại.",
          "keys": [
            "hoàn cảnh thay đổi cơ bản"
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
          "who": "dung",
          "say": "Okay. We ask a lawyer if that line holds here.",
          "sub": "Rồi. Hỏi luật sư xem câu đó hiệu lực tới đâu.",
          "phase": "redo",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Copying the model line is not enough. Check it against Vietnamese law.",
          "sub": "Chép câu mẫu chưa đủ. Phải soi câu mẫu bằng luật Việt Nam.",
          "phase": "redo",
          "keys": [
            "soi câu mẫu bằng luật Việt Nam"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p10,p11"
    },
    {
      "id": "s13",
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
            "text": "④ 14:00 · Khiếu nại để bớt phạt",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:calls"
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
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                }
              ],
              "props": [
                "telephone-receiver",
                "balance-scale"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:calls",
            "caption": "14:00 · Thảo gọi Bác Bình",
            "icon": "telephone-receiver"
          },
          {
            "id": "f-b0",
            "t": "badge",
            "n": 1,
            "x": 90,
            "y": 1290,
            "at": "l4:event"
          },
          {
            "id": "f-c0",
            "t": "text",
            "text": "Báo sự kiện",
            "x": 140,
            "y": 1268,
            "size": 44,
            "at": "l4:event+200"
          },
          {
            "id": "f-b1",
            "t": "badge",
            "n": 2,
            "x": 90,
            "y": 1370,
            "at": "l4:detailed"
          },
          {
            "id": "f-c1",
            "t": "text",
            "text": "Khiếu nại chi tiết",
            "x": 140,
            "y": 1348,
            "size": 44,
            "at": "l4:detailed+200"
          },
          {
            "id": "f-b2",
            "t": "badge",
            "n": 3,
            "x": 90,
            "y": 1450,
            "at": "l4:extension"
          },
          {
            "id": "f-c2",
            "t": "text",
            "text": "Xin gia hạn",
            "x": 140,
            "y": 1428,
            "size": 44,
            "at": "l4:extension+200"
          },
          {
            "id": "f-b3",
            "t": "badge",
            "n": 4,
            "x": 90,
            "y": 1530,
            "at": "l4:cost"
          },
          {
            "id": "f-c3",
            "t": "text",
            "text": "Tính chi phí",
            "x": 140,
            "y": 1508,
            "size": 44,
            "at": "l4:cost+200"
          },
          {
            "id": "f-key",
            "t": "text",
            "text": "Chạy bằng thông báo",
            "x": 60,
            "y": 1610,
            "size": 50,
            "at": "l4:notices",
            "color": "accent",
            "hl": [
              {
                "text": "thông báo",
                "at": "l4:notices"
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
          "say": "Fourth stop: two p.m. Thảo calls her boss, Mr Bình, head of legal.",
          "sub": "Chặng bốn: hai giờ chiều. Thảo gọi sếp, Bác Bình, trưởng pháp chế.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Slowly now. A late project means daily damages for the contractor.",
          "sub": "Từ từ nhé. Dự án chậm thì nhà thầu bị phạt theo ngày.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "So it shows part of the delay was yours, then claims time and prolongation cost.",
          "sub": "Nên họ tìm cách chứng minh một phần chậm do chủ đầu tư, để xin gia hạn và đòi chi phí kéo dài.",
          "keys": [
            "chi phí kéo dài"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The chain runs on notices: event, detailed claim, extension, cost.",
          "sub": "Chuỗi đó chạy bằng thông báo: báo sự kiện, khiếu nại chi tiết, xin gia hạn, tính chi phí.",
          "keys": [
            "chạy bằng thông báo"
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
      "ref": "p12"
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
            "id": "f-tl",
            "t": "text",
            "text": "CĐT gây chậm, không gia hạn",
            "x": 60,
            "y": 1680,
            "size": 34,
            "at": "l1:cause"
          },
          {
            "id": "f-tl2",
            "t": "text",
            "text": "→ mốc bỏ ngỏ, mất căn cứ phạt",
            "x": 60,
            "y": 1725,
            "size": 34,
            "at": "l2:basis",
            "color": "coral",
            "hl": [
              {
                "text": "bỏ ngỏ",
                "at": "l2:basis"
              }
            ]
          },
          {
            "id": "f-d1",
            "t": "text",
            "text": "Giữ: điều kiện tiên quyết",
            "x": 60,
            "y": 1770,
            "size": 34,
            "at": "l3:conditions",
            "color": "accent",
            "hl": [
              {
                "text": "điều kiện tiên quyết",
                "at": "l3:precedent"
              }
            ]
          },
          {
            "id": "f-d2",
            "t": "text",
            "text": "+ câu chống “time at large”",
            "x": 60,
            "y": 1815,
            "size": 34,
            "at": "l3:clause"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "binh",
          "say": "And if you cause delay but grant no extension, the completion date may be set at large.",
          "sub": "Còn nếu chủ đầu tư gây chậm mà không gia hạn, mốc hoàn thành có thể bị coi là bỏ ngỏ.",
          "keys": [
            "bỏ ngỏ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "That's the prevention principle. The owner loses its basis for damages.",
          "sub": "Nguyên tắc ngăn cản của thông lệ quốc tế. Chủ đầu tư mất căn cứ tính phạt."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The defence: conditions precedent for extensions, and a clause against time at large.",
          "sub": "Cách giữ: điều kiện tiên quyết để được gia hạn, và câu chống “time at large”.",
          "keys": [
            "điều kiện tiên quyết"
          ]
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s15",
      "module": "BRK-03",
      "data": {
        "value": 12,
        "suffix": "%",
        "label": "trần phạt, chỉ cho dự án đầu tư công và PPP",
        "illus": "balance-scale"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The contractor quotes the penalty cap.",
          "sub": "Nhà thầu hay viện trần phạt.",
          "keys": [
            "trần phạt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Twelve percent, but only public investment and PPP.",
          "sub": "Mười hai phần trăm, nhưng chỉ dự án đầu tư công và PPP.",
          "keys": [
            "chỉ dự án đầu tư công và PPP"
          ]
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s16",
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
            "at": 200,
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
        "items": []
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Private projects? Not settled. One award cut it to eight percent, a judgment allowed more.",
          "sub": "Dự án tư nhân? Chưa thống nhất. Có phán quyết cắt về 8% theo Luật Thương mại, có bản án chấp nhận cao hơn.",
          "face": "thinking",
          "keys": [
            "Chưa thống nhất"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "The draft dropping the eight percent cap is not passed. Check the law in force.",
          "sub": "Dự thảo bỏ trần 8% chưa được thông qua. Kiểm văn bản hiện hành nhé.",
          "keys": [
            "chưa được thông qua"
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
            "text": "⑤ 15:30 · Đòn bẩy của nhà thầu",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:three"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1200,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "money-bag",
                "memo"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:meeting",
            "caption": "15:30 · phòng đàm phán",
            "icon": "memo"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Không tạm ứng, không mở L/C,",
            "x": 2028,
            "y": 1260,
            "size": 40,
            "at": "l3:leverage"
          },
          {
            "id": "g-1b",
            "t": "text",
            "text": "không trả khoản không tranh chấp",
            "x": 2028,
            "y": 1315,
            "size": 40,
            "at": "l3:leverage+300"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "→ tạm ngừng → chấm dứt",
            "x": 2028,
            "y": 1390,
            "size": 50,
            "at": "l3:agree",
            "color": "coral",
            "hl": [
              {
                "text": "tạm ngừng",
                "at": "l3:suspension"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Luật XD 2025: các bên thoả thuận",
            "x": 2028,
            "y": 1480,
            "size": 40,
            "at": "l3:Construction"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Báo trước bằng văn bản",
            "x": 2028,
            "y": 1550,
            "size": 48,
            "at": "l4:written",
            "color": "accent",
            "hl": [
              {
                "text": "bằng văn bản",
                "at": "l4:written"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Luật Xây dựng 135/2025/QH15, Điều 85",
            "x": 2968,
            "y": 1825,
            "size": 24,
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
          "say": "Fifth stop: three thirty. Sam is back, in the meeting room.",
          "sub": "Chặng năm: ba rưỡi chiều. Sam quay lại, ở phòng đàm phán."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "No advance, no letter of credit, no undisputed payment? Then we suspend. Later, we terminate.",
          "sub": "Không tạm ứng, không mở thư tín dụng, không trả khoản không tranh chấp? Chúng tôi tạm ngừng. Rồi chấm dứt.",
          "face": "neutral",
          "keys": [
            "tạm ngừng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fair leverage. The Construction Law lets the parties agree the suspension cases.",
          "sub": "Đòn bẩy chính đáng. Luật Xây dựng 2025 để các bên thoả thuận các trường hợp tạm dừng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And whoever suspends or terminates must give written notice first.",
          "sub": "Bên tạm dừng hay chấm dứt phải báo trước bằng văn bản.",
          "keys": [
            "báo trước bằng văn bản"
          ]
        }
      ],
      "ref": "p15"
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
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-ca",
            "t": "text",
            "text": "“Coi như chấp thuận”",
            "x": 2028,
            "y": 1610,
            "size": 44,
            "at": "l2:deemed",
            "hl": [
              {
                "text": "Coi như",
                "at": "l2:deemed"
              }
            ]
          },
          {
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1680,
            "w": 44,
            "h": 44,
            "at": "l3:reminder",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 1668,
            "size": 46,
            "at": "l3:reminder+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "văn bản nhắc",
            "x": 2098,
            "y": 1674,
            "size": 32,
            "at": "l3:reminder+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1734,
            "w": 44,
            "h": 44,
            "at": "l3:deadline",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 1722,
            "size": 46,
            "at": "l3:deadline+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "thời hạn ngắn",
            "x": 2098,
            "y": 1728,
            "size": 32,
            "at": "l3:deadline+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1788,
            "w": 44,
            "h": 44,
            "at": "l3:sensitive",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 1776,
            "size": 46,
            "at": "l3:sensitive+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "trừ hồ sơ nhạy cảm",
            "x": 2098,
            "y": 1782,
            "size": 32,
            "at": "l3:sensitive+200"
          },
          {
            "id": "g-fn",
            "t": "text",
            "text": "Hàng rào có cổng",
            "x": 2968,
            "y": 1760,
            "size": 46,
            "at": "l4:gate",
            "color": "accent",
            "hl": [
              {
                "text": "có cổng",
                "at": "l4:gate"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "sam",
          "say": "Our fear? You go silent, never sign the certificate, and damages keep running.",
          "sub": "Chúng tôi sợ gì à? Chủ đầu tư im lặng, không ký chứng nhận, để phạt cứ chạy.",
          "face": "worried"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So they ask for deemed approval and deemed taking over.",
          "sub": "Nên họ đòi điều “coi như chấp thuận” và bàn giao mặc nhiên.",
          "keys": [
            "coi như chấp thuận"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Firstly, a written reminder. Secondly, a short deadline. Thirdly, sensitive documents excluded.",
          "sub": "Thứ nhất, có văn bản nhắc. Thứ hai, thời hạn ngắn. Thứ ba, loại trừ hồ sơ nhạy cảm.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not a wall. A fence, with a gate.",
          "sub": "Không phải bức tường. Là hàng rào có cổng.",
          "keys": [
            "hàng rào có cổng"
          ]
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s19",
      "module": "BRK-07",
      "data": {
        "question": "Hai chữ nhỏ lấy đi được một bảo đảm?",
        "illus": "shield"
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
          "say": "Can two little words take away a guarantee?",
          "sub": "Hai chữ nhỏ có lấy đi được một bảo đảm không?",
          "keys": [
            "Hai chữ nhỏ"
          ]
        }
      ],
      "ref": "p19,p20"
    },
    {
      "id": "s20",
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
              "h-b",
              "h-a"
            ],
            "zoom": 1.15,
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
            "text": "⑥ 16:30 · Hai chữ, một bảo đảm",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:four"
          },
          {
            "id": "h-bl",
            "t": "text",
            "text": "Trước",
            "x": 3996,
            "y": 1230,
            "size": 36,
            "at": "l2:Before",
            "color": "muted"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "Nhà thầu BỔ SUNG Bảo lãnh khi Giá tăng quá [ ]%",
            "x": 3996,
            "y": 1275,
            "size": 40,
            "at": "l2:top",
            "font": "base"
          },
          {
            "id": "h-al",
            "t": "text",
            "text": "Sau (bản sửa)",
            "x": 3996,
            "y": 1340,
            "size": 36,
            "at": "l3:After",
            "color": "muted"
          },
          {
            "id": "h-a",
            "t": "text",
            "text": "Nhà thầu ĐIỀU CHỈNH Bảo lãnh khi Giá tăng hoặc giảm quá [ ]%",
            "x": 3996,
            "y": 1385,
            "size": 40,
            "at": "l3:adjust",
            "font": "base",
            "hl": [
              {
                "text": "hoặc giảm",
                "at": "l3:reduced"
              },
              {
                "text": "ĐIỀU CHỈNH",
                "at": "l3:adjust"
              }
            ]
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "nghĩa vụ tăng bảo đảm",
            "x": 3996,
            "y": 1460,
            "size": 46,
            "at": "l4:duty"
          },
          {
            "id": "h-ar",
            "t": "arrow",
            "from": [
              4536,
              1488
            ],
            "to": [
              4616,
              1488
            ],
            "at": "l4:right"
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "quyền giảm bảo đảm",
            "x": 4636,
            "y": 1460,
            "size": 46,
            "at": "l4:right",
            "color": "coral",
            "hl": [
              {
                "text": "quyền giảm",
                "at": "l4:right"
              }
            ]
          },
          {
            "id": "h-take",
            "t": "text",
            "text": "Hai chữ lấy đi một bảo đảm",
            "x": 3996,
            "y": 1535,
            "size": 46,
            "at": "l5:words",
            "color": "accent",
            "hl": [
              {
                "text": "lấy đi một bảo đảm",
                "at": "l5:guarantee"
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
          "say": "Sixth stop: four thirty. Back to the first page.",
          "sub": "Chặng sáu: bốn rưỡi chiều. Quay lại trang giấy lúc sáng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Before: the contractor must top up the security when the price rises past a set percent.",
          "sub": "Trước: nhà thầu bổ sung bảo lãnh thực hiện khi giá hợp đồng tăng quá một tỷ lệ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "After: the contractor may adjust it when the price rises, or is reduced.",
          "sub": "Sau: nhà thầu điều chỉnh bảo lãnh khi giá tăng hoặc giảm.",
          "keys": [
            "hoặc giảm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Two words and one verb. A duty to increase became a right to reduce.",
          "sub": "Chỉ thêm hai chữ, đổi một động từ: nghĩa vụ tăng bảo đảm thành quyền giảm bảo đảm.",
          "keys": [
            "quyền giảm bảo đảm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Two added words can take away a guarantee. Termites in the beam.",
          "sub": "Hai chữ thêm vào có thể lấy đi một bảo đảm. Như con mối trong cột nhà.",
          "keys": [
            "lấy đi một bảo đảm"
          ]
        }
      ],
      "ref": "p17,p19,p20"
    },
    {
      "id": "s21",
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
            "id": "h-q",
            "t": "text",
            "text": "Ba câu hỏi mỗi chỗ sửa:",
            "x": 3996,
            "y": 1658,
            "size": 38,
            "at": "l2:three",
            "color": "accent"
          },
          {
            "id": "h-q0",
            "t": "text",
            "text": "1. Ai thêm quyền, ai mất?",
            "x": 3996,
            "y": 1715,
            "size": 34,
            "at": "l2:gains"
          },
          {
            "id": "h-q1",
            "t": "text",
            "text": "2. Chậm, vỡ, tranh chấp?",
            "x": 4556,
            "y": 1715,
            "size": 34,
            "at": "l2:late"
          },
          {
            "id": "h-q2",
            "t": "text",
            "text": "3. Nối với điều nào?",
            "x": 5116,
            "y": 1715,
            "size": 34,
            "at": "l2:connect"
          },
          {
            "id": "h-con",
            "t": "text",
            "text": "Nhượng có điều kiện, không cả cụm",
            "x": 3996,
            "y": 1780,
            "size": 40,
            "at": "l3:conditions",
            "hl": [
              {
                "text": "có điều kiện",
                "at": "l3:conditions"
              }
            ]
          },
          {
            "id": "h-amd",
            "t": "text",
            "text": "Hay gặp nhất: phụ lục sửa đổi",
            "x": 4996,
            "y": 1788,
            "size": 32,
            "at": "l4:amendment",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three questions per edit: who gains or loses, what if late, bust or disputed, what does it connect to?",
          "sub": "Mỗi chỗ sửa, hỏi ba câu: ai được, ai mất; nếu chậm, vỡ, tranh chấp thì sao; nối với điều nào?",
          "keys": [
            "hỏi ba câu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Must you give way? Give way with conditions, not the whole phrase.",
          "sub": "Phải nhượng ư? Nhượng có điều kiện, đừng nhượng cả cụm.",
          "keys": [
            "Nhượng có điều kiện"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "These phrases show up most in amendment agreements, when milestones have passed.",
          "sub": "Những cụm từ này hay xuất hiện nhất trong phụ lục sửa đổi, khi mốc đã qua.",
          "keys": [
            "phụ lục sửa đổi"
          ]
        }
      ],
      "ref": "p17,p18,p21"
    },
    {
      "id": "s22",
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 17:30 · Chuẩn bị bàn đàm phán",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:five"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Mỗi điều quan trọng: 3 vị trí",
            "x": 5964,
            "y": 1255,
            "size": 46,
            "at": "l2:three"
          },
          {
            "id": "i-b0",
            "t": "box",
            "x": 5964,
            "y": 1330,
            "w": 300,
            "h": 90,
            "at": "l2:opening",
            "stroke": 4
          },
          {
            "id": "i-p0",
            "t": "text",
            "text": "Mở",
            "x": 6064,
            "y": 1344,
            "size": 50,
            "at": "l2:opening+200"
          },
          {
            "id": "i-b1",
            "t": "box",
            "x": 6304,
            "y": 1330,
            "w": 300,
            "h": 90,
            "at": "l2:fallback",
            "stroke": 4
          },
          {
            "id": "i-p1",
            "t": "text",
            "text": "Lùi",
            "x": 6404,
            "y": 1344,
            "size": 50,
            "at": "l2:fallback+200"
          },
          {
            "id": "i-b2",
            "t": "box",
            "x": 6644,
            "y": 1330,
            "w": 360,
            "h": 90,
            "at": "l2:walk",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "i-p2",
            "t": "text",
            "text": "Không nhượng",
            "x": 6674,
            "y": 1344,
            "size": 50,
            "at": "l2:walk+200",
            "color": "coral"
          },
          {
            "id": "i-must",
            "t": "text",
            "text": "Phải thắng:",
            "x": 5964,
            "y": 1480,
            "size": 46,
            "at": "l3:must",
            "color": "accent"
          },
          {
            "id": "i-m1",
            "t": "text",
            "text": "trần trách nhiệm · phạt chậm, chấm dứt",
            "x": 6204,
            "y": 1485,
            "size": 40,
            "at": "l4:cap"
          },
          {
            "id": "i-m2",
            "t": "text",
            "text": "bảo lãnh · trách nhiệm thiết kế",
            "x": 6204,
            "y": 1545,
            "size": 40,
            "at": "l4:design"
          },
          {
            "id": "i-tr",
            "t": "text",
            "text": "Có thể đổi · Sẵn sàng nhượng",
            "x": 5964,
            "y": 1620,
            "size": 40,
            "at": "l3:trade",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: five thirty. Thảo's negotiation sheet.",
          "sub": "Chặng bảy: năm rưỡi chiều. Tờ chuẩn bị đàm phán của Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "For each key clause, three positions: opening, fallback, and walk away.",
          "sub": "Mỗi điều quan trọng có ba vị trí: mở, lùi, và không nhượng.",
          "keys": [
            "ba vị trí"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then a priority list: must win, can trade, ready to give.",
          "sub": "Kèm danh sách ưu tiên: phải thắng, có thể đổi, sẵn sàng nhượng.",
          "keys": [
            "phải thắng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Usually must win: liability cap, delay damages with termination, guarantees, design responsibility.",
          "sub": "Thường phải thắng: trần trách nhiệm, phạt chậm và quyền chấm dứt, bảo lãnh, trách nhiệm thiết kế."
        }
      ],
      "ref": "p22"
    },
    {
      "id": "s23",
      "module": "BRK-04",
      "data": {
        "title": "Trần thấp, biện pháp duy nhất?",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrong": "Từ chối cả hai, không giải thích",
        "right": "Hỏi họ lo gì, rồi đổi: trần thấp lấy quyền chấm dứt",
        "wrongIllus": "no-entry",
        "rightIllus": "handshake"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Option A: refuse both, no reasons.",
          "sub": "Cách A: từ chối cả hai, không giải thích.",
          "keys": [
            "Cách A"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Option B: ask what worries them, then trade.",
          "sub": "Cách B: hỏi họ lo gì, rồi đưa phương án đổi.",
          "keys": [
            "Cách B"
          ]
        }
      ],
      "ref": "p23"
    },
    {
      "id": "s24",
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
            "at": "l1",
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
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 7044,
            "y": 1240,
            "w": 540,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "handshake",
                "memo"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": 0,
            "caption": "Cách B · vòng đàm phán sau",
            "icon": "handshake"
          },
          {
            "id": "i-ask",
            "t": "text",
            "text": "Hỏi họ sợ gì, rồi trả giá",
            "x": 5964,
            "y": 1700,
            "size": 46,
            "at": "l3:fear",
            "color": "accent",
            "hl": [
              {
                "text": "sợ gì",
                "at": "l3:fear"
              }
            ]
          },
          {
            "id": "i-auth",
            "t": "text",
            "text": "Kiểm thẩm quyền: Ban TGĐ, HĐQT?",
            "x": 5964,
            "y": 1780,
            "size": 40,
            "at": "l4:authority",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "A lower cap is possible. In return, we drop sole remedy and keep termination when damages hit the cap.",
          "sub": "Trần thấp hơn thì được. Đổi lại, bỏ câu biện pháp duy nhất, và giữ quyền chấm dứt khi phạt chạm trần.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Hmm. We still need to discuss the number. But I see your point.",
          "sub": "Hừm. Con số thì còn phải bàn. Nhưng tôi hiểu ý chị.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Option A ends with a contingency in the price. Option B: ask their fear first, then bargain.",
          "sub": "Cách A kết bằng dự phòng cộng vào giá. Cách B: hỏi họ sợ gì trước, rồi mới trả giá.",
          "keys": [
            "hỏi họ sợ gì trước"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And know your authority: some points need the executive board or directors.",
          "sub": "Và nhớ giới hạn thẩm quyền: điều gì phải xin Ban Tổng Giám đốc hay Hội đồng quản trị.",
          "keys": [
            "giới hạn thẩm quyền"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 200
        }
      ],
      "ref": "p23,p24,p25"
    },
    {
      "id": "s25",
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
            "text": "18:30 · Cùng trang ấy",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:same"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1200,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "face": "happy",
                  "pose": "thumb"
                }
              ],
              "props": [
                "page-facing-up",
                "e-mail"
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
            "caption": "18:30 · cùng bàn, cùng trang lúc 8 giờ",
            "icon": "page-facing-up"
          },
          {
            "id": "j-r1",
            "t": "text",
            "text": "tăng hoặc giảm → ? ? ?",
            "x": 7932,
            "y": 1260,
            "size": 46,
            "at": "l2:questions",
            "color": "coral"
          },
          {
            "id": "j-r2",
            "t": "text",
            "text": "“bổ sung” → ? ? ?",
            "x": 7932,
            "y": 1330,
            "size": 46,
            "at": "l2:questions+300",
            "color": "coral"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Biết người biết ta”",
            "x": 7932,
            "y": 1420,
            "size": 52,
            "at": "l3:Know",
            "color": "accent",
            "hl": [
              {
                "text": "Biết người",
                "at": "l3:Know"
              }
            ]
          },
          {
            "id": "j-s0",
            "t": "text",
            "text": "1. Rủi ro nhà thầu sợ nhất",
            "x": 7932,
            "y": 1515,
            "size": 32,
            "at": "l4:Six+0",
            "font": "base"
          },
          {
            "id": "j-s1",
            "t": "text",
            "text": "2. Khiếu nại để bù giá",
            "x": 7932,
            "y": 1563,
            "size": 32,
            "at": "l4:Six+250",
            "font": "base"
          },
          {
            "id": "j-s2",
            "t": "text",
            "text": "3. Tạm ngừng, chấm dứt",
            "x": 7932,
            "y": 1611,
            "size": 32,
            "at": "l4:Six+500",
            "font": "base"
          },
          {
            "id": "j-s3",
            "t": "text",
            "text": "4. Coi như chấp thuận",
            "x": 7932,
            "y": 1659,
            "size": 32,
            "at": "l4:Six+750",
            "font": "base"
          },
          {
            "id": "j-s4",
            "t": "text",
            "text": "5. Phụ lục sửa đổi",
            "x": 7932,
            "y": 1707,
            "size": 32,
            "at": "l4:Six+1000",
            "font": "base"
          },
          {
            "id": "j-s5",
            "t": "text",
            "text": "6. Đóng vai nhà thầu",
            "x": 7932,
            "y": 1755,
            "size": 32,
            "at": "l4:Six+1250",
            "font": "base"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Six thirty. Same desk, same page from eight this morning.",
          "sub": "Sáu rưỡi tối. Vẫn cái bàn ấy, vẫn trang giấy lúc tám giờ sáng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Every tiny edit now has three questions beside it. Tomorrow I know what to hold.",
          "sub": "Chỗ sửa nhỏ nào giờ cũng có ba câu hỏi bên cạnh. Mai em biết chỗ nào phải giữ.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Know them, know yourself. The contractor is no enemy, just a side pricing risk.",
          "sub": "“Biết người biết ta.” Nhà thầu không phải kẻ thù, chỉ là bên đang định giá rủi ro.",
          "keys": [
            "định giá rủi ro"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Six lessons follow, starting with the risks contractors fear most.",
          "sub": "Sáu bài tiếp theo, mở đầu bằng rủi ro nhà thầu sợ nhất.",
          "keys": [
            "Sáu bài tiếp theo"
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
      "ref": "p26,outro"
    },
    {
      "id": "s26",
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
            "at": "l1:price",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l2:wording",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l3:fear",
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
            "x": 3588,
            "y": 20,
            "at": "l1:price"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 5556,
            "y": 1110,
            "at": "l2:wording"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 7524,
            "y": 1110,
            "at": "l3:fear"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Kiến thức chung, không phải tư vấn cho hợp đồng cụ thể; nhân vật, dự án là minh hoạ; câu chữ cần luật sư kiểm.",
            "x": 7932,
            "y": 1812,
            "size": 28,
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
          "say": "So: the contractor reads the contract as a price list of risks.",
          "sub": "Tóm lại: nhà thầu đọc hợp đồng như bảng giá rủi ro.",
          "keys": [
            "bảng giá rủi ro"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A firm price comes from wording, and two small words can move a whole guarantee.",
          "sub": "Giá chắc đến từ câu chữ, và hai chữ nhỏ có thể dời cả một bảo đảm.",
          "keys": [
            "Giá chắc đến từ câu chữ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ask what they fear first, then bargain with conditions.",
          "sub": "Hỏi họ sợ gì trước, rồi mặc cả có điều kiện.",
          "keys": [
            "Hỏi họ sợ gì trước"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s27",
      "module": "QUIZ-01",
      "data": {
        "q": "In the before and after example, what did adding or reduced do?",
        "options": [
          "It made the security larger whenever the contract price went either way",
          "It turned a duty to increase security into a right to reduce it",
          "It changed nothing, because the percentage in brackets stayed the same"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "shield",
        "why": "Thêm “hoặc giảm” và đổi “bổ sung” thành “điều chỉnh” biến nghĩa vụ tăng bảo đảm thành quyền giảm bảo đảm."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "In the before and after example, what did adding or reduced do?",
          "sub": "Trong ví dụ trước – sau, việc thêm “hoặc giảm” đã làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "It turned a duty to increase security into a right to reduce it.",
          "sub": "Nó biến nghĩa vụ tăng bảo đảm thành quyền giảm bảo đảm."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Two words, one guarantee.",
          "sub": "Hai chữ, một bảo đảm."
        }
      ],
      "ref": "questions[31]"
    },
    {
      "id": "s28",
      "module": "END-05",
      "data": {
        "text": "Đánh dấu từng chữ thêm, bớt",
        "sub": "Bản sửa gần nhất · bài sau: rủi ro nhà thầu sợ nhất"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, mark every place in your latest markup where one phrase was added or removed.",
          "sub": "Hôm nay, đánh dấu mọi chỗ chỉ thêm hoặc bớt một cụm từ trong bản sửa gần nhất.",
          "keys": [
            "thêm hoặc bớt một cụm từ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next: the risks contractors fear most. Now, forty questions below.",
          "sub": "Bài sau: rủi ro nhà thầu sợ nhất. Giờ thử bốn mươi câu hỏi bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (bài tổng chuỗi epc-contractor-side) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-23 (đồ vật kể chuyện): một trang bản sửa của nhà thầu (“tăng hoặc giảm”, gạch “bổ sung”, bỏ “tuỳ thời điểm nào đến sau”) cận rồi kéo ra thấy Thảo → trở lại ở ô J, mỗi chỗ sửa gắn ba dấu hỏi. Dòng thời gian: một thứ Hai của Thảo (8:00 bản sửa về → 8:30 Dũng “EPC là giá chắc” p1–p5 → 10:00 gọi Sam: danh sách mong muốn p6–p8 → 11:00 bốn nỗi sợ p9 + “Khoan đã!” chép câu mẫu p10–p11 → 14:00 Bác Bình: chuỗi khiếu nại, time at large, 12% / 8% p12–p14 → 15:30 Sam: tạm ngừng, chấp thuận mặc nhiên p15–p16 → BRK-07 → 16:30 “hoặc giảm” p17–p21 → 17:30 ba vị trí, Cách A/B, thẩm quyền p22–p25 → 18:30 cùng trang, sáu bài tiếp p26). Nhân vật theo w145/_series/epc-contractor-side.md: Thảo (chính), Dũng, Sam (nhà thầu), Bác Bình. Dự án, nhà thầu giả định; không nêu tên pháp nhân, dự án, hợp đồng, tổ chức soạn mẫu có thật (Silver Book → “câu mẫu quốc tế”). Số chỉ từ bài: 12% (đầu tư công, PPP), 8% (Luật Thương mại), NĐ 210/2026, Luật XD 2025 Điều 13, 85. Câu trích “Biết người biết ta, trăm trận trăm thắng” mở/khép vòng. Cảnh ngắt nhịp: BRK-04 s07, s10, s23; DLG s12; BRK-03 s15; BRK-07 s19. Câu đố questions[31]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s25"
  }
};
