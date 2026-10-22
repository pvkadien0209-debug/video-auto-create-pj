// us-visa-bulletin-priority-date--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "us-visa-bulletin-priority-date--w01",
  "unit": {
    "audience": "family-sponsored-immigrants-to-us",
    "slug": "us-visa-bulletin-priority-date",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Đọc lịch chiếu khán thế nào để biết đến lượt mình chưa?",
    "series": "Từ hồ sơ được duyệt đến ngày phỏng vấn — cho người được bảo lãnh định cư Mỹ diện gia đình"
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
            "text": "Con của công dân Mỹ:",
            "x": 60,
            "y": 110,
            "size": 84,
            "at": "l1:child"
          },
          {
            "id": "a-q2",
            "t": "text",
            "text": "khỏi chờ?",
            "x": 60,
            "y": 220,
            "size": 110,
            "at": "l1:no waiting",
            "color": "accent",
            "hl": [
              {
                "text": "khỏi chờ",
                "at": "l1:no waiting"
              }
            ]
          },
          {
            "id": "a-b1",
            "t": "box",
            "x": 60,
            "y": 420,
            "w": 360,
            "h": 110,
            "at": "l2:yes",
            "stroke": 5
          },
          {
            "id": "a-b1t",
            "t": "text",
            "text": "Đúng",
            "x": 170,
            "y": 440,
            "size": 60,
            "at": "l2:yes+200"
          },
          {
            "id": "a-b2",
            "t": "box",
            "x": 480,
            "y": 420,
            "w": 360,
            "h": 110,
            "at": "l2:depends",
            "stroke": 5
          },
          {
            "id": "a-b2t",
            "t": "text",
            "text": "Chưa chắc",
            "x": 530,
            "y": 440,
            "size": 60,
            "at": "l2:depends+200"
          },
          {
            "id": "a-r",
            "t": "ring",
            "around": [
              "a-b2",
              "a-b2t"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:not always"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Quick guess. A child of a US citizen: no waiting at all?",
          "sub": "Đoán nhanh nhé. Con của công dân Mỹ: khỏi phải chờ?",
          "keys": [
            "khỏi phải chờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yes, or it depends? One second to choose.",
          "sub": "Đúng, hay chưa chắc? Một giây để chọn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Answer: not always. Some children of citizens must wait for their date.",
          "sub": "Đáp án: chưa chắc. Có những người con của công dân Mỹ vẫn phải chờ ngày.",
          "keys": [
            "chưa chắc"
          ]
        }
      ],
      "beats": {
        "after": 300
      },
      "ref": "intro,p4"
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
            "at": "l1",
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
            "x": 900,
            "y": 110,
            "w": 780,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "thumb",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "phone"
                }
              ],
              "props": [
                "pot-of-food",
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "19:00 · quán cơm, sau giờ đóng cửa",
            "icon": "pot-of-food"
          },
          {
            "id": "a-r1",
            "t": "text",
            "text": "Dũng: “Đi ngay!”",
            "x": 70,
            "y": 580,
            "size": 44,
            "at": "l2:right away"
          },
          {
            "id": "a-r2",
            "t": "text",
            "text": "Cô Hoa: “Sắp tới rồi!”",
            "x": 450,
            "y": 580,
            "size": 44,
            "at": "l4:almost",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Chậm mà chắc”",
            "x": 70,
            "y": 670,
            "size": 52,
            "at": "l5:slow",
            "color": "accent",
            "hl": [
              {
                "text": "Chậm mà chắc",
                "at": "l5:slow but sure"
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
          "say": "Meet Dũng, Ms Hoa's nephew. His dad in America just became a citizen.",
          "sub": "Đây là Dũng, cháu cô Hoa. Bố Dũng ở Mỹ vừa nhập quốc tịch.",
          "keys": [
            "vừa nhập quốc tịch"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I'm a citizen's son now. I go right away!",
          "sub": "Giờ em là con công dân Mỹ. Đi ngay thôi!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And Ms Hoa, owner of this rice shop, sponsored by her brother. Years of waiting.",
          "sub": "Còn cô Hoa, chủ quán cơm này, được anh trai bảo lãnh, chờ đã nhiều năm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "A customer says the brothers and sisters line is almost here!",
          "sub": "Khách quen nói diện anh em sắp tới rồi!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Two rumours, one bulletin. Tonight, we read it ourselves. Slow but sure.",
          "sub": "Hai lời đồn, một tờ lịch. Tối nay mình tự đọc. “Chậm mà chắc.”",
          "keys": [
            "Chậm mà chắc"
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
            "text": "Đến lượt mình chưa?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:turn",
            "hl": [
              {
                "text": "Đến lượt",
                "at": "l1:turn"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: hỏi người quen",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:friends",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:yourself"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: tự đọc lịch chiếu khán",
            "x": 2028,
            "y": 260,
            "size": 56,
            "at": "l2:yourself",
            "color": "accent",
            "hl": [
              {
                "text": "tự đọc",
                "at": "l2:yourself"
              }
            ]
          },
          {
            "id": "b-vb",
            "t": "text",
            "text": "Visa Bulletin · Bộ Ngoại giao Mỹ đăng mỗi tháng",
            "x": 2028,
            "y": 340,
            "size": 30,
            "at": "l3:every month",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "b-vb2",
            "t": "text",
            "text": "gia đình · việc làm · xổ số",
            "x": 2028,
            "y": 390,
            "size": 44,
            "at": "l3:family"
          },
          {
            "id": "b-s0b",
            "t": "box",
            "x": 2028,
            "y": 500,
            "w": 380,
            "h": 110,
            "at": "l4:priority date",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s1b",
            "t": "box",
            "x": 2438,
            "y": 500,
            "w": 380,
            "h": 110,
            "at": "l4:category",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s2b",
            "t": "box",
            "x": 2848,
            "y": 500,
            "w": 380,
            "h": 110,
            "at": "l4:column",
            "color": "coral",
            "stroke": 5
          },
          {
            "id": "b-s3b",
            "t": "box",
            "x": 3258,
            "y": 500,
            "w": 380,
            "h": 110,
            "at": "l4:chart",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s0",
            "t": "text",
            "text": "① Ngày ưu tiên",
            "x": 2053,
            "y": 530,
            "size": 44,
            "at": "l4:priority date+200"
          },
          {
            "id": "b-s1",
            "t": "text",
            "text": "② Diện",
            "x": 2463,
            "y": 530,
            "size": 44,
            "at": "l4:category+200"
          },
          {
            "id": "b-s2",
            "t": "text",
            "text": "③ Cột",
            "x": 2873,
            "y": 530,
            "size": 44,
            "at": "l4:column+200"
          },
          {
            "id": "b-s3",
            "t": "text",
            "text": "④ Bảng",
            "x": 3283,
            "y": 530,
            "size": 44,
            "at": "l4:chart+200"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: NVC; Visa Bulletin tháng 4/2026; Đại sứ quán Hoa Kỳ tại Việt Nam",
            "x": 2028,
            "y": 700,
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
          "say": "So how do you know whether your turn has come?",
          "sub": "Vậy làm sao biết đã đến lượt mình chưa?",
          "keys": [
            "đến lượt mình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not by asking friends. By reading the visa bulletin yourself.",
          "sub": "Không phải hỏi người quen, mà là tự đọc lịch chiếu khán.",
          "keys": [
            "tự đọc lịch chiếu khán"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The State Department posts it every month: visa numbers for family, employment and the lottery.",
          "sub": "Bộ Ngoại giao Mỹ đăng mỗi tháng: số thị thực cho diện gia đình, việc làm và xổ số."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Four steps: your priority date, your category, the right column, the right chart.",
          "sub": "Bốn bước: ngày ưu tiên, đúng diện, đúng cột, đúng bảng.",
          "keys": [
            "đúng cột, đúng bảng"
          ]
        }
      ],
      "ref": "intro,p2"
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
            "at": "l2",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 19:30 · Ngày ưu tiên",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:seven thirty"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 150,
            "w": 780,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up"
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
            "at": "l1:digs",
            "caption": "19:30 · tờ thông báo cũ",
            "icon": "page-facing-up"
          },
          {
            "id": "c-pd",
            "t": "text",
            "text": "Ngày người thân nộp đơn",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l3:filed",
            "hl": [
              {
                "text": "nộp đơn",
                "at": "l3:filed"
              }
            ]
          },
          {
            "id": "c-pd2",
            "t": "text",
            "text": "= số thứ tự xếp hàng",
            "x": 3996,
            "y": 250,
            "size": 50,
            "at": "l3:queue",
            "color": "accent",
            "hl": [
              {
                "text": "số thứ tự",
                "at": "l3:queue"
              }
            ]
          },
          {
            "id": "c-w",
            "t": "text",
            "text": "Ghi trên thông báo chấp thuận",
            "x": 3996,
            "y": 340,
            "size": 46,
            "at": "l4:approval"
          },
          {
            "id": "c-st",
            "t": "text",
            "text": "Bằng / gần ngày cắt → NVC bắt đầu",
            "x": 3996,
            "y": 430,
            "size": 40,
            "at": "l5:close",
            "color": "coral"
          },
          {
            "id": "c-sts",
            "t": "text",
            "text": "với các diện phải chờ; NVC sẽ báo khi bắt đầu",
            "x": 3996,
            "y": 490,
            "size": 28,
            "at": "l5:tell",
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
          "say": "Stop one, seven thirty. Ms Hoa digs out her old approval notice.",
          "sub": "Chặng một, bảy rưỡi. Cô Hoa lục lại tờ thông báo chấp thuận cũ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Here it is. Which of these dates matters?",
          "sub": "Đây rồi. Mà ngày nào trên này mới quan trọng?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The day your relative filed the petition. That's your priority date, your place in the queue.",
          "sub": "Ngày người thân nộp đơn bảo lãnh: ngày ưu tiên, như số thứ tự xếp hàng.",
          "keys": [
            "số thứ tự xếp hàng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It's printed on the approval notice USCIS sent.",
          "sub": "Ngày này ghi trên thông báo chấp thuận USCIS gửi."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "For waiting categories, NVC starts when your date equals or comes close to the cutoff. It will tell you.",
          "sub": "Với diện phải chờ, NVC bắt đầu khi ngày ưu tiên bằng hoặc gần bằng ngày cắt, và sẽ báo cho bạn.",
          "keys": [
            "gần bằng ngày cắt"
          ]
        }
      ],
      "ref": "p1"
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
            "text": "② 20:00 · Đúng diện",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:eight"
          },
          {
            "id": "d-ir",
            "t": "text",
            "text": "Trực hệ (IR): không xem bảng",
            "x": 5964,
            "y": 160,
            "size": 50,
            "at": "l2:immediate",
            "color": "accent",
            "hl": [
              {
                "text": "không xem bảng",
                "at": "l3:no need"
              }
            ]
          },
          {
            "id": "d-irs",
            "t": "text",
            "text": "vợ/chồng, con, cha mẹ của công dân Mỹ · không giới hạn số hằng năm",
            "x": 5964,
            "y": 230,
            "size": 28,
            "at": "l2:spouses",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "d-lan",
            "t": "text",
            "text": "Lan: làn ưu tiên",
            "x": 5964,
            "y": 290,
            "size": 44,
            "at": "l3:lan"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, eight o'clock. Which category are you in?",
          "sub": "Chặng hai, tám giờ. Bạn thuộc diện nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Spouses, children and parents of US citizens are immediate relatives, IR. No yearly cap, NVC moves right away.",
          "sub": "Vợ chồng, con, cha mẹ của công dân Mỹ là thân nhân trực hệ, IR: không giới hạn số hằng năm, NVC làm tiếp ngay.",
          "keys": [
            "không giới hạn số hằng năm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Like Lan, Ms Hoa's daughter, married to a citizen. No need to hunt dates in the chart.",
          "sub": "Như Lan, con gái cô Hoa, vợ công dân Mỹ: không cần dò ngày trong bảng.",
          "keys": [
            "không cần dò ngày"
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
            "at": "l2",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 150,
            "w": 780,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "globe-showing-americas"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "medium",
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
            "caption": "20:00 · Dũng chắc mẩm",
            "icon": "globe-showing-americas"
          },
          {
            "id": "d-f1",
            "t": "text",
            "text": "F1: con độc thân",
            "x": 5964,
            "y": 400,
            "size": 50,
            "at": "l3:unmarried",
            "color": "coral",
            "hl": [
              {
                "text": "F1",
                "at": "l3:f one"
              }
            ]
          },
          {
            "id": "d-f3",
            "t": "text",
            "text": "F3: con đã kết hôn",
            "x": 5964,
            "y": 470,
            "size": 50,
            "at": "l3:married"
          },
          {
            "id": "d-w",
            "t": "text",
            "text": "→ phải chờ ngày",
            "x": 5964,
            "y": 540,
            "size": 50,
            "at": "l3:wait",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Children are on that list. So I'm in!",
          "sub": "Có chữ “con” trong danh sách kìa. Vậy em được rồi!",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Careful. Many people think any child of a citizen goes right away.",
          "sub": "Cẩn thận. Nhiều người nghĩ cứ là con công dân Mỹ thì được đi ngay."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But the bulletin has F one for unmarried sons and daughters, F three for married ones. Both must wait.",
          "sub": "Nhưng lịch có diện F1 cho con độc thân, F3 cho con đã kết hôn của công dân Mỹ, và cả hai phải chờ ngày.",
          "keys": [
            "phải chờ ngày"
          ]
        }
      ],
      "ref": "p4"
    },
    {
      "id": "s06",
      "module": "BRK-04",
      "data": {
        "title": "Diện của bạn",
        "wrong": "Đoán theo lời kể",
        "right": "Đọc trên giấy tờ chính thức",
        "wrongIllus": "speech-balloon",
        "rightIllus": "page-facing-up"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Guessing from stories?",
          "sub": "Đoán theo lời kể?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Read it on your official papers.",
          "sub": "Đọc trên giấy tờ chính thức.",
          "keys": [
            "giấy tờ chính thức"
          ]
        }
      ],
      "ref": "p4,p5"
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
            "id": "d-take",
            "t": "text",
            "text": "Xác định diện trước khi đọc bảng",
            "x": 5964,
            "y": 640,
            "size": 46,
            "at": "l1:before",
            "color": "accent",
            "hl": [
              {
                "text": "trước khi đọc bảng",
                "at": "l1:before"
              }
            ]
          },
          {
            "id": "d-takes",
            "t": "text",
            "text": "theo thông báo chấp thuận và thư NVC",
            "x": 5964,
            "y": 710,
            "size": 28,
            "at": "l1:letters",
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
          "say": "So before reading any chart, confirm your category from the approval notice and NVC's letters.",
          "sub": "Vậy trước khi đọc bảng, xác định đúng diện theo thông báo chấp thuận và thư của NVC.",
          "keys": [
            "xác định đúng diện"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Fine. I'll check what my letters actually say.",
          "sub": "Được rồi. Em xem lại giấy tờ thật sự ghi gì.",
          "face": "thinking"
        }
      ],
      "ref": "p5"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 20:30 · F1 đến F4",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:eight thirty"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "F1 · con độc thân của công dân",
            "x": 7932,
            "y": 160,
            "size": 46,
            "at": "l2:f one"
          },
          {
            "id": "e-2a",
            "t": "text",
            "text": "F2A · vợ/chồng, con của thường trú nhân",
            "x": 7932,
            "y": 230,
            "size": 40,
            "at": "l2:f two a"
          },
          {
            "id": "e-2b",
            "t": "text",
            "text": "F2B · con độc thân từ 21 tuổi",
            "x": 7932,
            "y": 300,
            "size": 42,
            "at": "l3:twenty-one",
            "hl": [
              {
                "text": "từ 21 tuổi",
                "at": "l3:twenty-one"
              }
            ]
          },
          {
            "id": "e-2bs",
            "t": "text",
            "text": "của thường trú nhân",
            "x": 8632,
            "y": 312,
            "size": 30,
            "at": "l3:permanent",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "F3 · con đã kết hôn",
            "x": 7932,
            "y": 370,
            "size": 46,
            "at": "l4:f three"
          },
          {
            "id": "e-3s",
            "t": "text",
            "text": "của công dân",
            "x": 8632,
            "y": 382,
            "size": 30,
            "at": "l4:married",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "F4 · anh chị em của công dân",
            "x": 7932,
            "y": 440,
            "size": 46,
            "at": "l4:f four",
            "color": "accent",
            "hl": [
              {
                "text": "anh chị em",
                "at": "l4:brothers"
              }
            ]
          },
          {
            "id": "e-4s",
            "t": "text",
            "text": "công dân đã trưởng thành",
            "x": 8632,
            "y": 452,
            "size": 30,
            "at": "l4:adult",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "e-hoa",
            "t": "text",
            "text": "← cô Hoa",
            "x": 9022,
            "y": 440,
            "size": 46,
            "at": "l5:hoa",
            "color": "coral"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Visa Bulletin tháng 4/2026",
            "x": 8872,
            "y": 100,
            "size": 28,
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
          "say": "Stop three, eight thirty. The four family preference categories.",
          "sub": "Chặng ba, tám rưỡi. Bốn diện ưu tiên gia đình."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The April twenty twenty-six bulletin: F one, unmarried children of citizens. F two A, spouses and children of permanent residents.",
          "sub": "Theo lịch tháng 4/2026: F1, con độc thân của công dân Mỹ. F2A, vợ chồng và con của thường trú nhân."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "F two B, unmarried children aged twenty-one or over of permanent residents.",
          "sub": "F2B, con độc thân từ 21 tuổi trở lên của thường trú nhân.",
          "keys": [
            "từ 21 tuổi trở lên"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "F three, married children of citizens. F four, brothers and sisters of adult citizens.",
          "sub": "F3, con đã kết hôn của công dân Mỹ. F4, anh chị em của công dân Mỹ đã trưởng thành.",
          "keys": [
            "anh chị em"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "That last one is Ms Hoa.",
          "sub": "Dòng cuối chính là cô Hoa."
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s09",
      "module": "BRK-03",
      "data": {
        "value": 226000,
        "label": "thị thực diện gia đình ưu tiên, năm tài chính 2026",
        "illus": "bar-chart"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The yearly cap for family preference, fiscal year twenty twenty-six?",
          "sub": "Giới hạn năm tài chính 2026 cho diện gia đình ưu tiên?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Two hundred twenty-six thousand visas.",
          "sub": "Hai trăm hai mươi sáu nghìn thị thực.",
          "keys": [
            "Hai trăm hai mươi sáu nghìn"
          ]
        }
      ],
      "ref": "p7"
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
            "id": "e-n1",
            "t": "text",
            "text": "F1 ≈ 23.400 · F3 ≈ 23.400",
            "x": 7932,
            "y": 520,
            "size": 44,
            "at": "l1:twenty-three"
          },
          {
            "id": "e-n2",
            "t": "text",
            "text": "F2 ≈ 114.200 (77% / 23%)",
            "x": 7932,
            "y": 580,
            "size": 44,
            "at": "l2:fourteen"
          },
          {
            "id": "e-n3",
            "t": "text",
            "text": "F4 ≈ 65.000",
            "x": 7932,
            "y": 640,
            "size": 44,
            "at": "l2:sixty-five"
          },
          {
            "id": "e-7",
            "t": "text",
            "text": "Mỗi nước tối đa 7%",
            "x": 8772,
            "y": 620,
            "size": 50,
            "at": "l3:seven",
            "color": "coral",
            "hl": [
              {
                "text": "7%",
                "at": "l3:seven percent"
              }
            ]
          },
          {
            "id": "e-yr",
            "t": "text",
            "text": "Con số của một năm, bản khác có thể khác",
            "x": 7932,
            "y": 710,
            "size": 28,
            "at": "l4:one year",
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
          "say": "Roughly twenty-three thousand four hundred each for F one and F three.",
          "sub": "F1 khoảng 23.400, F3 khoảng 23.400."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "F two about a hundred fourteen thousand two hundred, split seventy-seven, twenty-three. F four about sixty-five thousand.",
          "sub": "F2 khoảng 114.200, chia F2A 77%, F2B 23%. F4 khoảng 65.000."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And each country gets at most seven percent of family and employment visas combined.",
          "sub": "Và mỗi nước được tối đa 7% tổng số diện gia đình và diện việc làm.",
          "keys": [
            "tối đa 7%"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "These are one year's numbers. Another bulletin may differ.",
          "sub": "Đây là con số của một năm; bản khác có thể khác.",
          "keys": [
            "bản khác có thể khác"
          ]
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
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 21:00 · Đúng cột",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:nine"
          },
          {
            "id": "f-c0b",
            "t": "box",
            "x": 60,
            "y": 1260,
            "w": 310,
            "h": 110,
            "at": "l2:five+0",
            "color": "accent",
            "stroke": 7
          },
          {
            "id": "f-c1b",
            "t": "box",
            "x": 390,
            "y": 1260,
            "w": 310,
            "h": 110,
            "at": "l2:five+250",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "f-c2b",
            "t": "box",
            "x": 720,
            "y": 1260,
            "w": 310,
            "h": 110,
            "at": "l2:five+500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "f-c3b",
            "t": "box",
            "x": 1050,
            "y": 1260,
            "w": 310,
            "h": 110,
            "at": "l2:five+750",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "f-c4b",
            "t": "box",
            "x": 1380,
            "y": 1260,
            "w": 310,
            "h": 110,
            "at": "l2:five+1000",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "f-c0",
            "t": "text",
            "text": "Chung",
            "x": 80,
            "y": 1285,
            "size": 46,
            "at": "l2:five+150"
          },
          {
            "id": "f-c1",
            "t": "text",
            "text": "Trung Quốc",
            "x": 410,
            "y": 1285,
            "size": 40,
            "at": "l2:five+400"
          },
          {
            "id": "f-c2",
            "t": "text",
            "text": "Ấn Độ",
            "x": 740,
            "y": 1285,
            "size": 46,
            "at": "l2:five+650"
          },
          {
            "id": "f-c3",
            "t": "text",
            "text": "Mexico",
            "x": 1070,
            "y": 1285,
            "size": 46,
            "at": "l2:five+900"
          },
          {
            "id": "f-c4",
            "t": "text",
            "text": "Philippines",
            "x": 1400,
            "y": 1285,
            "size": 40,
            "at": "l2:five+1150"
          },
          {
            "id": "f-all",
            "t": "text",
            "text": "All Chargeability Areas Except Those Listed",
            "x": 60,
            "y": 1390,
            "size": 30,
            "at": "l3:general",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "f-vn",
            "t": "text",
            "text": "Việt Nam → cột chung đầu tiên",
            "x": 60,
            "y": 1460,
            "size": 54,
            "at": "l3:first",
            "color": "accent",
            "hl": [
              {
                "text": "cột chung",
                "at": "l3:general"
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
          "say": "Stop four, nine o'clock. The family chart has five columns.",
          "sub": "Chặng bốn, chín giờ. Bảng diện gia đình có năm cột."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Five: a general column, then mainland China, India, Mexico and the Philippines.",
          "sub": "Năm cột: một cột chung, rồi Trung Quốc đại lục, Ấn Độ, Mexico, Philippines."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Vietnam has no column of its own. If you were born in Vietnam, read the first general one.",
          "sub": "Việt Nam không có cột riêng. Sinh ở Việt Nam thì xem cột chung đầu tiên.",
          "keys": [
            "cột chung đầu tiên"
          ]
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "21:00 · cô Hoa dò cột",
        "actors": [
          {
            "id": "hoa",
            "side": "center",
            "pose": "point"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đọc cột Philippines “vì gần Việt Nam”",
          "why": "Việt Nam không có cột riêng; người sinh ở Việt Nam xem cột chung đầu tiên.",
          "rule": "Nhầm cột là sai cả kết quả"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "The Philippines is our neighbour. I'll read that column!",
          "sub": "Philippines là hàng xóm mình. Mẹ đọc cột đó!",
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
          "say": "Being neighbours doesn't share a column. Born in Vietnam means the general column.",
          "sub": "Hàng xóm không có nghĩa chung cột. Sinh ở Việt Nam là xem cột chung.",
          "keys": [
            "xem cột chung"
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
          "who": "hoa",
          "say": "First column, F four row. Got it.",
          "sub": "Cột chung đầu tiên, dòng F4. Rồi, vậy nha!",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
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
          }
        ],
        "items": [
          {
            "id": "f-take",
            "t": "text",
            "text": "Nhầm cột = sai cả kết quả",
            "x": 60,
            "y": 1590,
            "size": 60,
            "at": "l1:wrong",
            "color": "coral",
            "hl": [
              {
                "text": "sai cả kết quả",
                "at": "l1:whole answer"
              }
            ]
          },
          {
            "id": "f-row",
            "t": "text",
            "text": "Cô Hoa: dòng F4 × cột chung",
            "x": 60,
            "y": 1700,
            "size": 50,
            "at": "l2:row",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Read another country's column, and the whole answer is wrong.",
          "sub": "Đọc nhầm sang cột nước khác là sai cả kết quả.",
          "keys": [
            "sai cả kết quả"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ms Hoa's spot: the F four row, general column. Now, which chart?",
          "sub": "Chỗ của cô Hoa: dòng F4, cột chung. Giờ đến: bảng nào?"
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
            "at": "l4",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 21:30 · Hai bảng",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:nine thirty"
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
                  "id": "hoa",
                  "side": "center",
                  "pose": "explain",
                  "face": "thinking"
                }
              ],
              "props": [
                "notebook",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "close",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l4",
            "caption": "21:30 · cô Hoa và cuốn sổ",
            "icon": "notebook"
          },
          {
            "id": "g-df",
            "t": "text",
            "text": "Dates for Filing",
            "x": 2028,
            "y": 1250,
            "size": 52,
            "at": "l2:filing",
            "hl": [
              {
                "text": "Filing",
                "at": "l2:filing"
              }
            ]
          },
          {
            "id": "g-dfv",
            "t": "text",
            "text": "→ được gom, nộp giấy tờ chưa?",
            "x": 2028,
            "y": 1320,
            "size": 44,
            "at": "l2:documents"
          },
          {
            "id": "g-fa",
            "t": "text",
            "text": "Final Action Dates",
            "x": 2028,
            "y": 1410,
            "size": 52,
            "at": "l3:final action",
            "color": "accent",
            "hl": [
              {
                "text": "Final Action",
                "at": "l3:final action"
              }
            ]
          },
          {
            "id": "g-fav",
            "t": "text",
            "text": "→ được cấp thị thực chưa?",
            "x": 2028,
            "y": 1480,
            "size": 44,
            "at": "l3:issued"
          },
          {
            "id": "g-ear",
            "t": "text",
            "text": "Ngày ưu tiên phải sớm hơn",
            "x": 2028,
            "y": 1560,
            "size": 46,
            "at": "l3:earlier",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, nine thirty. Each bulletin has two charts.",
          "sub": "Chặng năm, chín rưỡi. Mỗi bản lịch có hai bảng.",
          "keys": [
            "hai bảng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Dates for Filing: when you may start gathering and submitting documents to NVC. It usually runs ahead.",
          "sub": "Dates for Filing: khi nào được bắt đầu gom và nộp giấy tờ cho NVC. Bảng này thường đi trước."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Final Action Dates: when a visa can really be issued. Your priority date must be earlier than the date shown.",
          "sub": "Final Action Dates: khi nào thị thực thực sự được cấp. Ngày ưu tiên phải sớm hơn ngày ghi trong bảng.",
          "keys": [
            "sớm hơn ngày ghi trong bảng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "So each month: F four row, general column, filing chart first.",
          "sub": "Vậy mỗi tháng: dòng F4, cột chung, bảng nộp hồ sơ trước.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "If my date is earlier, I prepare papers as NVC says. Then I check the final chart.",
          "sub": "Ngày của mẹ sớm hơn thì chuẩn bị giấy tờ theo hướng dẫn NVC. Rồi so tiếp bảng cấp.",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Only earlier than that one means a visa can be issued. And she writes it all in a notebook.",
          "sub": "Chỉ khi sớm hơn ngày ở bảng đó mới đến lượt cấp thị thực. Và cô ghi hết vào một cuốn sổ.",
          "keys": [
            "ghi hết vào một cuốn sổ"
          ]
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
            "id": "g-take",
            "t": "text",
            "text": "Hai câu hỏi, hai bảng",
            "x": 2028,
            "y": 1650,
            "size": 62,
            "at": "l1:questions",
            "color": "accent",
            "hl": [
              {
                "text": "hai bảng",
                "at": "l1:charts"
              }
            ]
          },
          {
            "id": "g-us",
            "t": "text",
            "text": "Ở Mỹ điều chỉnh tình trạng: uscis.gov/visabulletininfo",
            "x": 2028,
            "y": 1740,
            "size": 30,
            "at": "l2:adjusting",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "g-vn",
            "t": "text",
            "text": "Phỏng vấn ở VN: theo NVC",
            "x": 2868,
            "y": 1780,
            "size": 44,
            "at": "l3:vietnam"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Two different questions, two different charts. Allowed to file yet? Allowed a visa yet?",
          "sub": "Hai câu hỏi khác nhau, hai bảng khác nhau: được nộp giấy tờ chưa, được cấp thị thực chưa.",
          "keys": [
            "hai bảng khác nhau"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "People adjusting status inside America follow USCIS rules, posted at uscis dot gov slash visa bulletin info.",
          "sub": "Người ở Mỹ xin điều chỉnh tình trạng với USCIS có quy định riêng, đăng ở uscis.gov/visabulletininfo."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Interviewing in Vietnam? Follow NVC's instructions.",
          "sub": "Phỏng vấn ở Việt Nam thì làm theo hướng dẫn của NVC."
        }
      ],
      "ref": "p12,p13"
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
            "at": 150,
            "fit": "H",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 22:00 · C, U và ngày lùi",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:ten"
          },
          {
            "id": "h-c",
            "t": "text",
            "text": "C = mọi người đủ điều kiện",
            "x": 3996,
            "y": 1260,
            "size": 50,
            "at": "l2:current",
            "color": "accent",
            "hl": [
              {
                "text": "C",
                "at": "l2:current"
              }
            ]
          },
          {
            "id": "h-u",
            "t": "text",
            "text": "U = chưa cấp số nào",
            "x": 3996,
            "y": 1340,
            "size": 50,
            "at": "l3:unauthorized",
            "color": "coral"
          },
          {
            "id": "h-d",
            "t": "text",
            "text": "Một ngày cụ thể = đang quá tải",
            "x": 3996,
            "y": 1420,
            "size": 46,
            "at": "l4:specific date",
            "hl": [
              {
                "text": "quá tải",
                "at": "l4:oversubscribed"
              }
            ]
          },
          {
            "id": "h-ds",
            "t": "text",
            "text": "chỉ người có ngày ưu tiên sớm hơn mới được xét",
            "x": 3996,
            "y": 1490,
            "size": 28,
            "at": "l4:earlier",
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
          "say": "Stop six, ten o'clock. Letters in the boxes.",
          "sub": "Chặng sáu, mười giờ. Những chữ trong ô."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "C means current: numbers for everyone eligible, whatever their priority date.",
          "sub": "Chữ C, current: có số thị thực cho mọi người đủ điều kiện, bất kể ngày ưu tiên.",
          "keys": [
            "bất kể ngày ưu tiên"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "U means unauthorized: no numbers at all.",
          "sub": "Chữ U, unauthorized: chưa được cấp số nào."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A specific date means the category is oversubscribed. Only earlier priority dates get considered.",
          "sub": "Ô ghi một ngày cụ thể: diện đó đang quá tải, chỉ người có ngày ưu tiên sớm hơn mới được xét.",
          "keys": [
            "đang quá tải"
          ]
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s17",
      "module": "BRK-07",
      "data": {
        "question": "Lịch vừa nhảy vọt: bán quán được chưa?",
        "illus": "house"
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
          "say": "The date jumped this month. Sell the shop now?",
          "sub": "Lịch vừa nhảy vọt. Bán quán được chưa?",
          "keys": [
            "Bán quán được chưa"
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
            "fit": "H",
            "move": "cut"
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
            "at": "l4",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "point",
                  "face": "happy"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "think"
                }
              ],
              "props": [
                "chart-decreasing",
                "pot-of-food"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
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
            "at": "l1",
            "caption": "22:00 · cô Hoa tính bán quán",
            "icon": "chart-decreasing"
          },
          {
            "id": "h-sell",
            "t": "text",
            "text": "Bán quán vì một tháng lịch tiến",
            "x": 3996,
            "y": 1560,
            "size": 44,
            "at": "l1:sell",
            "color": "muted"
          },
          {
            "id": "h-sellx",
            "t": "strike",
            "over": "h-sell",
            "at": "l5:just one"
          },
          {
            "id": "h-ret",
            "t": "text",
            "text": "Ngày có thể lùi (retrogression)",
            "x": 3996,
            "y": 1640,
            "size": 48,
            "at": "l4:move",
            "color": "coral",
            "hl": [
              {
                "text": "lùi",
                "at": "l4:move back"
              }
            ]
          },
          {
            "id": "h-rets",
            "t": "text",
            "text": "bản 4/2026 cảnh báo có thể lùi vào cuối năm tài chính",
            "x": 3996,
            "y": 1705,
            "size": 28,
            "at": "l4:fiscal",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "h-take",
            "t": "text",
            "text": "Ngày cắt không luôn tiến",
            "x": 3996,
            "y": 1780,
            "size": 50,
            "at": "l5:forward",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "It jumped forward this month! I'll sell the rice shop tomorrow!",
          "sub": "Tháng này lịch tiến nhanh quá! Mai mẹ bán quán luôn!",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Uncle Bình, a neighbour, still at his corner table, frowns.",
          "sub": "Bác Bình, hàng xóm, vẫn ngồi bàn góc, nhíu mày."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Slowly now. Let's check that again.",
          "sub": "Từ từ, mình xem lại đã.",
          "pose": "point"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The April bulletin says issuance for some countries fell, and warns dates may move back near the fiscal year's end.",
          "sub": "Bản tháng 4/2026 ghi tỷ lệ cấp cho người từ một số nước đã giảm, và cảnh báo có thể phải lùi ngày vào cuối năm tài chính.",
          "keys": [
            "lùi ngày"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Cutoffs don't always go forward. Don't sell a house or quit a job on just one fast month.",
          "sub": "Ngày cắt không phải lúc nào cũng tiến. Đừng bán nhà, nghỉ việc chỉ vì một tháng lịch tiến nhanh.",
          "keys": [
            "một tháng lịch tiến nhanh"
          ]
        }
      ],
      "ref": "p15"
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
          },
          {
            "at": "l6",
            "fit": [
              "i-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l6:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 22:30 · Bố Dũng nhập tịch",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:ten thirty"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "passport-control",
                "laptop"
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
                },
                {
                  "at": "l6",
                  "shot": "medium",
                  "on": "dung",
                  "move": "push"
                }
              ]
            },
            "at": "l1:ten thirty",
            "caption": "22:30 · Dũng gọi cho bố",
            "icon": "mobile-phone"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Bố gửi bằng chứng quốc tịch",
            "x": 5964,
            "y": 1250,
            "size": 46,
            "at": "l3:proof",
            "hl": [
              {
                "text": "bằng chứng quốc tịch",
                "at": "l3:proof"
              }
            ]
          },
          {
            "id": "i-1s",
            "t": "text",
            "text": "hộ chiếu Mỹ / giấy nhập tịch, qua Public Inquiry Form",
            "x": 5964,
            "y": 1310,
            "size": 28,
            "at": "l3:inquiry",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "F2A → thường sang trực hệ",
            "x": 5964,
            "y": 1370,
            "size": 46,
            "at": "l4:f two a"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "F2B → F1",
            "x": 5964,
            "y": 1440,
            "size": 60,
            "at": "l5:f one",
            "color": "accent",
            "hl": [
              {
                "text": "F2B → F1",
                "at": "l5:f one"
              }
            ]
          },
          {
            "id": "i-3s",
            "t": "text",
            "text": "trừ khi xin không chuyển theo CSPA",
            "x": 5964,
            "y": 1520,
            "size": 30,
            "at": "l5:opt",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "i-cmp",
            "t": "text",
            "text": "So dòng F2B và F1, cột chung",
            "x": 5964,
            "y": 1590,
            "size": 44,
            "at": "l6:compare",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven, ten thirty. Dũng calls his dad in America.",
          "sub": "Chặng bảy, mười rưỡi. Dũng gọi cho bố ở Mỹ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Dad, you're a citizen now. What changes for my case?",
          "sub": "Bố ơi, bố là công dân rồi. Hồ sơ con đổi gì không?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "His dad sends proof of citizenship to NVC through the Public Inquiry Form, to update the category.",
          "sub": "Bố gửi bằng chứng quốc tịch cho NVC qua mẫu hỏi đáp trực tuyến để cập nhật diện.",
          "keys": [
            "bằng chứng quốc tịch"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Spouses and minor children in F two A usually become immediate relatives, with no cap.",
          "sub": "Vợ chồng, con vị thành niên ở F2A thường chuyển sang thân nhân trực hệ, không giới hạn số."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Adult unmarried children move from F two B to F one, unless they opt out under the Child Status Protection Act.",
          "sub": "Con độc thân đã trưởng thành chuyển từ F2B sang F1, trừ khi xin không chuyển theo Đạo luật CSPA.",
          "keys": [
            "từ F2B sang F1"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "So I'm F one now. Not right away, but a new line to compare.",
          "sub": "Vậy giờ em là F1. Không đi ngay, nhưng có dòng mới để so.",
          "face": "thinking"
        }
      ],
      "ref": "p16,p17"
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
          }
        ],
        "items": [
          {
            "id": "i-diff",
            "t": "text",
            "text": "Khác duy nhất: lúc nào đáo hạn",
            "x": 5964,
            "y": 1680,
            "size": 40,
            "at": "l1:only difference",
            "hl": [
              {
                "text": "lúc nào đáo hạn",
                "at": "l1:current"
              }
            ]
          },
          {
            "id": "i-take",
            "t": "text",
            "text": "Báo NVC, đọc lại lịch",
            "x": 5964,
            "y": 1760,
            "size": 54,
            "at": "l2:sponsor",
            "color": "accent",
            "hl": [
              {
                "text": "Báo NVC",
                "at": "l2:tell nvc"
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
          "say": "NVC's FAQ says the only difference between F two B and F one is when the date becomes current.",
          "sub": "Hỏi đáp của NVC nói: khác nhau duy nhất giữa F2B và F1 là khi nào ngày ưu tiên đáo hạn.",
          "keys": [
            "khác nhau duy nhất"
          ]
        },
        {
          "id": "l1b",
          "lang": "en",
          "who": "det",
          "say": "So Dũng compares both rows in the current bulletin, then decides whether to opt out.",
          "sub": "Nên Dũng so hai dòng ở cột chung của bản hiện hành, rồi cân nhắc có xin không chuyển hay không."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "When your sponsor's status changes, your category may change too. Tell NVC, read the bulletin again.",
          "sub": "Người bảo lãnh đổi tình trạng, diện của bạn có thể đổi theo: báo NVC, đọc lại lịch.",
          "keys": [
            "báo NVC, đọc lại lịch"
          ]
        }
      ],
      "ref": "p17,p18"
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
            "text": "Tối đầu tháng sau · 19:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:next month"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "notebook",
                "laptop"
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
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:next month",
            "caption": "Đầu tháng sau · cùng bàn ấy",
            "icon": "notebook"
          },
          {
            "id": "j-nb",
            "t": "illus",
            "name": "notebook",
            "x": 7932,
            "y": 1250,
            "size": 110,
            "at": "l2:notebook"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Bản mới · 2 bảng · dòng F4",
            "x": 8072,
            "y": 1270,
            "size": 44,
            "at": "l2:two charts"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Con công dân: tuỳ diện",
            "x": 7932,
            "y": 1420,
            "size": 50,
            "at": "l3:depends",
            "hl": [
              {
                "text": "tuỳ diện",
                "at": "l3:depends"
              }
            ]
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Không ai đẩy ngày giùm bạn",
            "x": 7932,
            "y": 1520,
            "size": 46,
            "at": "l4:push",
            "color": "coral"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Chậm mà chắc",
            "x": 7932,
            "y": 1620,
            "size": 60,
            "at": "l5:slow",
            "color": "accent",
            "hl": [
              {
                "text": "Chậm mà chắc",
                "at": "l5:slow but sure"
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
          "say": "Early next month. Same table, seven p.m., a new bulletin.",
          "sub": "Đầu tháng sau. Vẫn bàn ấy, bảy giờ tối, một bản lịch mới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "New bulletin, two charts, F four row. Written in my notebook.",
          "sub": "Bản mới, hai bảng, dòng F4. Ghi vào sổ rồi.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Child of a citizen, no waiting? Turns out, it depends on the category.",
          "sub": "Con công dân Mỹ thì khỏi chờ? Hoá ra tuỳ diện.",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Nobody can predict the bulletin, and nobody can push the date for you.",
          "sub": "Không ai đoán trước được lịch, và không ai đẩy được ngày cho riêng bạn.",
          "keys": [
            "không ai đẩy được ngày"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Once a month, one notebook. Slow but sure.",
          "sub": "Mỗi tháng một lần, một cuốn sổ. Chậm mà chắc.",
          "keys": [
            "Chậm mà chắc"
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
      "ref": "p19"
    },
    {
      "id": "s22",
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
            "at": "l1:notice",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:column",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:filing",
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
            "x": 5536,
            "y": 20,
            "at": "l1:notice"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1600,
            "y": 1110,
            "at": "l2:column"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3568,
            "y": 1110,
            "at": "l3:filing"
          },
          {
            "id": "z-src",
            "t": "text",
            "text": "Bài để tham khảo; quy trình, biểu mẫu, lệ phí có thể thay đổi, làm theo hướng dẫn chính thức của NVC và Tổng Lãnh sự quán Hoa Kỳ. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1780,
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
          "say": "So: your priority date is on the approval notice. Immediate relatives skip the chart.",
          "sub": "Tóm lại: ngày ưu tiên ghi trên thông báo chấp thuận; thân nhân trực hệ không phải chờ lịch.",
          "keys": [
            "không phải chờ lịch"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "F one to F four? Born in Vietnam, read the general column.",
          "sub": "Diện F1 đến F4: sinh ở Việt Nam thì xem cột chung.",
          "keys": [
            "xem cột chung"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Check the filing chart, then the final action chart. And remember, dates can move back.",
          "sub": "So bảng ngày nộp hồ sơ rồi bảng ngày cấp, và nhớ: ngày có thể lùi.",
          "keys": [
            "ngày có thể lùi"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s31",
      "module": "QUIZ-01",
      "data": {
        "q": "Which column should applicants born in Vietnam read?",
        "options": [
          "The general column for all chargeability areas except those listed separately",
          "The China mainland column, because it is the closest neighbour",
          "The Philippines column, because both countries are in Southeast Asia"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "globe-showing-asia-australia",
        "why": "Bảng có cột riêng cho Trung Quốc đại lục, Ấn Độ, Mexico, Philippines. Việt Nam không có cột riêng nên xem cột chung."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which column should applicants born in Vietnam read?",
          "sub": "Người sinh ở Việt Nam nên xem cột nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Remember Ms Hoa and the Philippines.",
          "sub": "Nhớ lại cô Hoa và cột Philippines."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[15]"
    },
    {
      "id": "s32",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Right now: open this month's bulletin and write down the dates for your category.",
          "sub": "Việc làm ngay: mở bản lịch tháng này, ghi ngày của diện mình.",
          "keys": [
            "ghi ngày của diện mình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next lesson: the documents for NVC. Now, forty questions below!",
          "sub": "Bài sau: hồ sơ nộp cho NVC gồm những gì. Giờ thì, bốn mươi câu hỏi bên dưới!"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-21",
  "notes": "#145 bài MỚI dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-21 (câu hỏi để đoán sai): “Con của công dân Mỹ: khỏi chờ?” Đúng / Chưa chắc → lật “chưa chắc” (p4) → Dũng (bố vừa nhập quốc tịch) tin là đi ngay, cô Hoa nghe đồn “diện anh em sắp tới” (intro). Dòng thời gian: MỘT BUỔI TỐI ở quán cơm cô Hoa (19:00 → 19:30 ngày ưu tiên p1 → 20:00 đúng diện p3–p5 → 20:30 F1–F4 và con số p6–p7 → 21:00 đúng cột, “Khoan đã!” cột Philippines p8–p9 → 21:30 hai bảng p10–p13 → 22:00 C, U, ngày lùi p14–p15 → 22:30 bố Dũng nhập tịch p16–p18 → đầu tháng sau cùng bàn, cuốn sổ p19). Đổi tên (w145/_series/family-sponsored-immigrants-to-us.md): chị Mai p11 (F4) → cô Hoa; anh Tuấn p17 (F2B → F1) → Dũng; Lan (vợ công dân) chỉ được nhắc tên ở p3. Tục ngữ: “Chậm mà chắc”. BRK: 04 (lời kể / giấy tờ p4–p5), 03 (226.000 p7), 07 (rehook bán quán p15). Số chỉ lấy từ bài: 226.000, 23.400, 114.200 (77% / 23%), 65.000, 7%, 21 tuổi, 5 cột, bản 4/2026. Câu đố questions[15].",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
