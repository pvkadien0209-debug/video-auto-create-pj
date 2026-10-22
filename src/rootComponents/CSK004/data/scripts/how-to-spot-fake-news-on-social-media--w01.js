// Kịch bản video W lần 3 (#110) — "Cách nhận biết tin giả trên mạng xã hội trước khi chia sẻ" · chuỗi "Tư duy phản biện"
// Giọng đọc tiếng Anh, phụ đề tiếng Việt; hoạt hình + thẻ. Đủ ý cho 40 câu bài tập.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-spot-fake-news-on-social-media--w01",
  "hook": "HOOK-15",
  "unit": {
    "audience": "everyday-information-readers",
    "slug": "how-to-spot-fake-news-on-social-media",
    "door": "ky-nang",
    "level": "B1",
    "title": "Cách nhận biết tin giả trên mạng xã hội trước khi chia sẻ",
    "series": "Tư duy phản biện"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "narrator": "det",
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
            "fit": "A",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "a-msg",
            "t": "text",
            "text": "“Cảnh báo khẩn, chia sẻ ngay!”",
            "x": 60,
            "y": 40,
            "size": 60,
            "at": "l1:urgent",
            "color": "coral"
          },
          {
            "id": "a-num",
            "t": "text",
            "text": "2 phút",
            "x": 60,
            "y": 140,
            "size": 170,
            "at": "l2:two minutes",
            "color": "accent",
            "hl": [
              {
                "text": "2 phút",
                "at": "l2:two minutes"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "đủ để lộ rất nhiều tin giả",
            "x": 70,
            "y": 360,
            "size": 50,
            "at": "l2:fake"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Mắt thấy mới là thật”?",
            "x": 60,
            "y": 470,
            "size": 46,
            "at": "l3:ears",
            "hl": [
              {
                "text": "Mắt thấy",
                "at": "l3:eyes"
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
          "say": "Urgent warning! Share with your family now!",
          "sub": "“Cảnh báo khẩn, chia sẻ ngay cho người thân!”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Many fake posts fall apart after about two minutes of checking.",
          "sub": "Rất nhiều tin giả lộ ra chỉ sau khoảng hai phút kiểm tra.",
          "keys": [
            "khoảng hai phút"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Grandma said: ears can be fooled, eyes see the truth. Online? Even eyes get fooled.",
          "sub": "Bà dặn: “Tai nghe là giả, mắt thấy mới là thật.” Trên mạng? Mắt cũng bị lừa.",
          "keys": [
            "mắt thấy mới là thật"
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
            "at": "l1",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3:end",
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
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "mobile-phone",
                "alarm-clock"
              ]
            },
            "at": "l1",
            "caption": "6:30 sáng Chủ nhật · vừa mở mắt",
            "icon": "alarm-clock"
          },
          {
            "id": "a-th",
            "t": "text",
            "text": "Chia sẻ trước, đọc… sau",
            "x": 60,
            "y": 600,
            "size": 50,
            "at": "l3:shared",
            "color": "coral",
            "hl": [
              {
                "text": "đọc… sau",
                "at": "l3:hero"
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
          "say": "Meet Dũng, again. Six thirty, Sunday morning, one eye open.",
          "sub": "Lại là Dũng. Sáu rưỡi sáng Chủ nhật, mới mở được một mắt."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Last week he learned to ask questions. Today, the family chat wakes up before him.",
          "sub": "Tuần trước Dũng đã tập đặt câu hỏi. Hôm nay, nhóm chat gia đình dậy trước cả Dũng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Urgent warning? Shared it in one second. I'm a hero!",
          "sub": "Cảnh báo khẩn? Chia sẻ trong một giây. Mình đúng là người hùng!",
          "face": "surprised"
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
            "text": "Tin giả: soi trước khi bấm",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:spot",
            "hl": [
              {
                "text": "trước khi bấm",
                "at": "l1:before"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Ai đăng?",
            "x": 2028,
            "y": 160,
            "size": 54,
            "at": "l2:who"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Bằng chứng?",
            "x": 2388,
            "y": 160,
            "size": 54,
            "at": "l2:evidence"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Khi nào?",
            "x": 2798,
            "y": 160,
            "size": 54,
            "at": "l2:when"
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "Nguồn chính thức?",
            "x": 3118,
            "y": 160,
            "size": 54,
            "at": "l2:official",
            "color": "accent"
          },
          {
            "id": "b-emo",
            "t": "text",
            "text": "Sợ · giận · thương → làm ngay",
            "x": 2028,
            "y": 270,
            "size": 48,
            "at": "l3:scare",
            "color": "coral",
            "hl": [
              {
                "text": "làm ngay",
                "at": "l3:act"
              }
            ]
          },
          {
            "id": "b-wor",
            "t": "text",
            "text": "Nhắm nỗi lo: bố mẹ, con, tiền",
            "x": 2028,
            "y": 355,
            "size": 48,
            "at": "l4:parents"
          },
          {
            "id": "b-slow",
            "t": "text",
            "text": "“Đúng như mình lo” → chậm lại",
            "x": 2028,
            "y": 440,
            "size": 50,
            "at": "l5:exactly",
            "color": "accent",
            "hl": [
              {
                "text": "chậm lại",
                "at": "l5:slower"
              }
            ]
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Một Chủ nhật, 8 mốc giờ",
            "x": 2028,
            "y": 545,
            "size": 44,
            "at": "l6:sunday"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 615,
            "w": 190,
            "h": 90,
            "at": "l6:sunday+300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2233,
            "y": 615,
            "w": 190,
            "h": 90,
            "at": "l6:sunday+500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2438,
            "y": 615,
            "w": 190,
            "h": 90,
            "at": "l6:sunday+700",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2643,
            "y": 615,
            "w": 190,
            "h": 90,
            "at": "l6:sunday+900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2848,
            "y": 615,
            "w": 190,
            "h": 90,
            "at": "l6:sunday+1100",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3053,
            "y": 615,
            "w": 190,
            "h": 90,
            "at": "l6:sunday+1300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3258,
            "y": 615,
            "w": 190,
            "h": 90,
            "at": "l6:sunday+1500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d7",
            "t": "box",
            "x": 3463,
            "y": 615,
            "w": 190,
            "h": 90,
            "at": "l6:sunday+1700",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "6:30",
            "x": 2048,
            "y": 632,
            "size": 44,
            "at": "l6:sunday+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "7:00",
            "x": 2253,
            "y": 632,
            "size": 44,
            "at": "l6:sunday+620"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "9:00",
            "x": 2458,
            "y": 632,
            "size": 44,
            "at": "l6:sunday+820"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "11:00",
            "x": 2663,
            "y": 632,
            "size": 44,
            "at": "l6:sunday+1020"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "14:00",
            "x": 2868,
            "y": 632,
            "size": 44,
            "at": "l6:sunday+1220"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "16:00",
            "x": 3073,
            "y": 632,
            "size": 44,
            "at": "l6:sunday+1420"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "19:00",
            "x": 3278,
            "y": 632,
            "size": 44,
            "at": "l6:sunday+1620"
          },
          {
            "id": "b-dt7",
            "t": "text",
            "text": "21:00",
            "x": 3483,
            "y": 632,
            "size": 44,
            "at": "l6:sunday+1820"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you spot fake news before you hit share?",
          "sub": "Vậy làm sao nhận ra tin giả trước khi bấm chia sẻ?",
          "keys": [
            "trước khi bấm chia sẻ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Four questions: who posted it, what's the evidence, when, and do official sources say the same?",
          "sub": "Bốn câu: ai đăng, bằng chứng là gì, đăng khi nào, nguồn chính thức khác có nói giống vậy không?",
          "keys": [
            "Bốn câu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fake news is built to scare, anger, or move you. High feelings make us act and skip checking.",
          "sub": "Tin giả được viết để gây sợ, giận, thương cảm. Cảm xúc lên cao, ta muốn làm ngay, bỏ qua kiểm tra.",
          "keys": [
            "làm ngay"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It aims at worries we already have: our parents' health, our kids' safety, our savings.",
          "sub": "Nó nhắm đúng nỗi lo sẵn có: sức khoẻ bố mẹ, an toàn của con, tiền tiết kiệm."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The more it feels exactly like your fear, the slower you go. Itching to share? Wait two minutes.",
          "sub": "Càng thấy “đúng như mình lo”, càng nên chậm. Muốn chia sẻ ngay? Đợi hai phút.",
          "keys": [
            "Đợi hai phút"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Now, one Sunday of the family chat.",
          "sub": "Giờ theo nhóm chat gia đình suốt một Chủ nhật."
        }
      ],
      "ref": "intro,p1,p2,p3"
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
            "text": "① 7:00 · Nước lá thần kỳ",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:seven"
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
                  "id": "binh",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "herb",
                "pill"
              ]
            },
            "at": "l1:dad",
            "caption": "7:00 · phòng khách nhà bác Bình",
            "icon": "herb"
          },
          {
            "id": "c-post",
            "t": "text",
            "text": "“Uống nước lá, bỏ thuốc huyết áp”",
            "x": 3996,
            "y": 160,
            "size": 42,
            "at": "l1:leaf",
            "color": "coral"
          },
          {
            "id": "c-coat",
            "t": "text",
            "text": "Áo blouse ≠ bác sĩ",
            "x": 3996,
            "y": 250,
            "size": 60,
            "at": "l3:white coat",
            "color": "accent",
            "hl": [
              {
                "text": "≠ bác sĩ",
                "at": "l3:anyone"
              }
            ]
          },
          {
            "id": "c-no",
            "t": "text",
            "text": "Không tên, không bệnh viện",
            "x": 3996,
            "y": 345,
            "size": 46,
            "at": "l4:hospital",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seven o'clock. Dũng's dad, Bác Bình, finds a post: drink this leaf water, no more blood pressure pills.",
          "sub": "Bảy giờ. Bố Dũng, bác Bình, thấy bài: “Uống nước lá này mỗi sáng, khỏi cần thuốc huyết áp.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Look, a man in a white coat says it. A doctor! I'll stop my pills.",
          "sub": "Xem này, người mặc áo blouse trắng nói hẳn hoi. Bác sĩ đấy! Bố bỏ thuốc thôi.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Anyone can put on a white coat for a photo. Costumes are cheap.",
          "sub": "Ai cũng mặc được áo blouse để chụp ảnh. Đồ hoá trang rẻ lắm.",
          "keys": [
            "Ai cũng mặc được áo blouse"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No doctor's name, no hospital. Nobody can check it.",
          "sub": "Không tên bác sĩ, không bệnh viện. Không ai kiểm tra được."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p6"
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
            "id": "c-rx",
            "t": "text",
            "text": "Thuốc kê theo từng người",
            "x": 3996,
            "y": 450,
            "size": 48,
            "at": "l1:prescribed"
          },
          {
            "id": "c-rut",
            "t": "text",
            "text": "Muốn dừng → hỏi bác sĩ của mình",
            "x": 3996,
            "y": 535,
            "size": 46,
            "at": "l2:treats",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi bác sĩ",
                "at": "l2:call"
              }
            ]
          },
          {
            "id": "c-sig",
            "t": "text",
            "text": "Càng nhiều dấu hiệu → càng soi",
            "x": 4836,
            "y": 685,
            "size": 44,
            "at": "l3:more signs"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Blood pressure pills are prescribed for each person.",
          "sub": "Thuốc huyết áp là thuốc bác sĩ kê theo từng người."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Want to cut down or stop? Call the doctor who treats you, not a post.",
          "sub": "Muốn giảm hay ngừng, hãy gọi hỏi chính bác sĩ đang khám cho mình, đừng theo bài đăng.",
          "keys": [
            "chính bác sĩ đang khám cho mình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No single sign proves a post is fake. But more signs mean more checking.",
          "sub": "Không dấu hiệu nào một mình chứng minh tin giả. Nhưng càng nhiều dấu hiệu, càng phải kiểm kỹ.",
          "keys": [
            "càng phải kiểm kỹ"
          ]
        }
      ],
      "ref": "p5,p6,p7"
    },
    {
      "id": "s05",
      "module": "BRK-06",
      "ref": "p4",
      "data": {
        "title": "Thấy mấy thứ này thì nghi",
        "items": [
          {
            "illus": "face-screaming-in-fear",
            "text": "Sốc! Kinh hoàng!"
          },
          {
            "illus": "alarm-clock",
            "text": "Giục chia sẻ ngay"
          },
          {
            "illus": "bust-in-silhouette",
            "text": "“Theo chuyên gia”"
          },
          {
            "illus": "framed-picture",
            "text": "Ảnh chụp màn hình"
          },
          {
            "illus": "spiral-calendar",
            "text": "Không ngày đăng"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Shock headlines. Share now. Experts say. Screenshots. No date.",
          "sub": "Tiêu đề sốc. Giục chia sẻ. “Theo chuyên gia”. Ảnh chụp màn hình. Không ngày đăng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Or a copycat newspaper name.",
          "sub": "Hoặc trang có tên na ná một tờ báo lớn."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ]
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
            "at": "l1:nine",
            "fit": [
              "d-v"
            ],
            "zoom": 1.3,
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
            "id": "d-t",
            "t": "text",
            "text": "② 9:00 · Kiểm tra hai phút",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:nine"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop",
                "magnifying-glass-tilted-left"
              ]
            },
            "at": "l1:nine",
            "caption": "9:00 · Dũng soi lại tin sáng nay",
            "icon": "magnifying-glass-tilted-left"
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 170,
            "w": 50,
            "h": 50,
            "at": "l2:whole",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 152,
            "size": 62,
            "at": "l2:whole+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Đọc hết bài, đừng chỉ tiêu đề",
            "x": 6039,
            "y": 162,
            "size": 42,
            "at": "l2:whole+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 255,
            "w": 50,
            "h": 50,
            "at": "l3:who posted",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 237,
            "size": 62,
            "at": "l3:who posted+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Ai đăng? Trang mới lập?",
            "x": 6039,
            "y": 247,
            "size": 42,
            "at": "l3:who posted+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 340,
            "w": 50,
            "h": 50,
            "at": "l4:original date",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 322,
            "size": 62,
            "at": "l4:original date+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Tìm ngày gốc",
            "x": 6039,
            "y": 332,
            "size": 42,
            "at": "l4:original date+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 425,
            "w": 50,
            "h": 50,
            "at": "l5:sideways",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 407,
            "size": 62,
            "at": "l5:sideways+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Đọc ngang: mở thẻ mới",
            "x": 6039,
            "y": 417,
            "size": 42,
            "at": "l5:sideways+200"
          },
          {
            "id": "d-img",
            "t": "text",
            "text": "Ảnh: tìm bằng hình ảnh",
            "x": 5964,
            "y": 540,
            "size": 48,
            "at": "l6:image search",
            "color": "accent",
            "hl": [
              {
                "text": "tìm bằng hình ảnh",
                "at": "l6:image search"
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
          "say": "Nine o'clock. Dũng tries the two minute check on this morning's warning.",
          "sub": "Chín giờ. Dũng thử kiểm tra hai phút với tin cảnh báo sáng nay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Step one: read the whole post, not just the headline. Headlines often oversell.",
          "sub": "Bước một: đọc hết bài, đừng chỉ đọc tiêu đề. Tiêu đề hay nói quá so với nội dung.",
          "keys": [
            "đọc hết bài"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: who posted it? An official page, or a brand new one? What did it post before?",
          "sub": "Hai: ai đăng? Trang chính thức hay trang mới lập, đã từng đăng gì?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: find the original date. Search a few keywords and see when it first appeared.",
          "sub": "Ba: tìm ngày gốc. Gõ vài từ khoá xem tin xuất hiện lần đầu khi nào.",
          "keys": [
            "ngày gốc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Four: read sideways. Open a new tab. Do mainstream news or government sites report it?",
          "sub": "Bốn: đọc ngang. Mở thẻ mới, xem báo chính thống hay trang cơ quan nhà nước có đưa tin không.",
          "keys": [
            "đọc ngang"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And for photos: image search. Is it from an old event, or another place?",
          "sub": "Còn với ảnh: tìm kiếm bằng hình ảnh. Ảnh có phải từ sự kiện cũ, nơi khác không?",
          "keys": [
            "tìm kiếm bằng hình ảnh"
          ]
        }
      ],
      "ref": "p8,p9,p10"
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
            "id": "d-res",
            "t": "text",
            "text": "Tin sáng nay: từ năm ngoái",
            "x": 6804,
            "y": 685,
            "size": 46,
            "at": "l1:last year",
            "color": "coral",
            "hl": [
              {
                "text": "năm ngoái",
                "at": "l1:last year"
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
          "say": "Wait. This warning is from last year. And I already shared it at six thirty...",
          "sub": "Ơ. Tin cảnh báo này từ năm ngoái. Mà mình lỡ chia sẻ lúc sáu rưỡi rồi…",
          "face": "worried"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Hold that thought, Dũng. We'll fix it tonight.",
          "sub": "Giữ nỗi lo đó nhé Dũng. Tối nay ta sửa."
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s08",
      "module": "BRK-07",
      "ref": "p12",
      "data": {
        "question": "Ảnh có thật thì tin có thật?",
        "illus": "framed-picture"
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
          "say": "If the photo is real, is the story real?",
          "sub": "Ảnh có thật thì tin có thật không?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ]
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
            "text": "③ 11:00 · Ảnh lũ ngập mái",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:eleven"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "water-wave",
                "house"
              ]
            },
            "at": "l1:lan",
            "caption": "11:00 · Lan làm mẫu",
            "icon": "water-wave"
          },
          {
            "id": "e-post",
            "t": "text",
            "text": "“Thị xã mình đang lũ lớn!”",
            "x": 7932,
            "y": 160,
            "size": 48,
            "at": "l1:flooding",
            "color": "coral"
          },
          {
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 260,
            "w": 50,
            "h": 50,
            "at": "l3:personal",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 242,
            "size": 62,
            "at": "l3:personal+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Tài khoản cá nhân, không nguồn",
            "x": 8007,
            "y": 252,
            "size": 40,
            "at": "l3:personal+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 340,
            "w": 50,
            "h": 50,
            "at": "l4:years",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 322,
            "size": 62,
            "at": "l4:years+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Ảnh: nhiều năm trước, tỉnh khác",
            "x": 8007,
            "y": 332,
            "size": 40,
            "at": "l4:years+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 420,
            "w": 50,
            "h": 50,
            "at": "l5:moderate",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 402,
            "size": 62,
            "at": "l5:moderate+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Tin địa phương: mưa vừa",
            "x": 8007,
            "y": 412,
            "size": 40,
            "at": "l5:moderate+200"
          },
          {
            "id": "e-c3",
            "t": "box",
            "x": 7932,
            "y": 500,
            "w": 50,
            "h": 50,
            "at": "l6:don't share",
            "stroke": 5
          },
          {
            "id": "e-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 482,
            "size": 62,
            "at": "l6:don't share+600",
            "color": "accent"
          },
          {
            "id": "e-l3",
            "t": "text",
            "text": "Kết luận: không chia sẻ",
            "x": 8007,
            "y": 492,
            "size": 40,
            "at": "l6:don't share+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Eleven o'clock. Lan, Dũng's cousin, sees a photo: water up to the roofs. Our town is flooding, pray!",
          "sub": "Mười một giờ. Lan, em họ Dũng, thấy ảnh nước ngập ngang mái nhà: “Thị xã mình đang lũ lớn, mọi người cầu nguyện!”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Scary. But let me check before I pray in public.",
          "sub": "Đáng sợ thật. Nhưng để mình kiểm tra trước khi cầu nguyện công khai.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One: who posted and when? A personal account, no photo source.",
          "sub": "Một: ai đăng, đăng khi nào? Tài khoản cá nhân, không ghi nguồn ảnh."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Two: image search. The photo appeared years ago, in another province.",
          "sub": "Hai: tìm bằng hình ảnh. Ảnh đã xuất hiện từ nhiều năm trước, ở tỉnh khác.",
          "keys": [
            "nhiều năm trước"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Three: read sideways. Today's local news only reports moderate rain.",
          "sub": "Ba: đọc ngang. Trang tin địa phương hôm nay chỉ báo mưa vừa."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Conclusion: real photo, not today's story. Don't share. Under two minutes.",
          "sub": "Kết luận: ảnh có thật nhưng không phải chuyện hôm nay. Không chia sẻ. Chưa đến hai phút.",
          "keys": [
            "không phải chuyện hôm nay"
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
      "ref": "p11"
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
            "id": "e-rut",
            "t": "text",
            "text": "Ảnh thật ≠ chuyện hôm nay",
            "x": 8772,
            "y": 685,
            "size": 50,
            "at": "l1:real photo",
            "color": "accent",
            "hl": [
              {
                "text": "≠ chuyện hôm nay",
                "at": "l1:today"
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
          "say": "A real photo is not always today's news.",
          "sub": "Ảnh thật chưa chắc là chuyện hôm nay.",
          "keys": [
            "chưa chắc là chuyện hôm nay"
          ]
        }
      ],
      "ref": "p11,p12"
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
          },
          {
            "at": "l4",
            "fit": [
              "f-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 14:00 · Gương mặt quen",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:two"
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
                  "id": "binh",
                  "side": "left",
                  "pose": "phone",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l4"
                }
              ],
              "props": [
                "television",
                "pill"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "E-MOVE-01"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "dung"
                }
              ]
            },
            "at": "l1:video",
            "caption": "14:00 · bác Bình xem video",
            "icon": "television"
          },
          {
            "id": "f-ad",
            "t": "text",
            "text": "“Khỏi đau khớp sau 2 tuần”",
            "x": 60,
            "y": 1250,
            "size": 48,
            "at": "l1:joint pain",
            "color": "coral"
          },
          {
            "id": "f-buy",
            "t": "text",
            "text": "→ đặt mua mấy hộp",
            "x": 60,
            "y": 1330,
            "size": 44,
            "at": "l2:boxes",
            "color": "muted"
          },
          {
            "id": "f-off",
            "t": "text",
            "text": "Trang chính thức: “video ghép mặt”",
            "x": 60,
            "y": 1420,
            "size": 42,
            "at": "l4:official",
            "hl": [
              {
                "text": "ghép mặt",
                "at": "l4:face"
              }
            ]
          },
          {
            "id": "f-lost",
            "t": "text",
            "text": "Tiền đã chuyển: mất",
            "x": 60,
            "y": 1500,
            "size": 48,
            "at": "l5:money",
            "color": "coral",
            "hl": [
              {
                "text": "mất",
                "at": "l5:can't"
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
          "say": "Two p.m. Bác Bình watches a video: a familiar TV host sells pills that cure joint pain in two weeks.",
          "sub": "Hai giờ chiều. Bác Bình xem video: người dẫn chương trình quen mặt giới thiệu viên uống “khỏi đau khớp sau hai tuần”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "If he says so, it's real. I ordered a few boxes!",
          "sub": "Anh ấy nói thì thật rồi. Bố đặt mấy hộp luôn!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Videos can now be cut, dubbed, even faked: face and voice, almost real.",
          "sub": "Video giờ có thể bị cắt ghép, lồng tiếng, thậm chí giả cả gương mặt lẫn giọng nói.",
          "keys": [
            "giả cả gương mặt lẫn giọng nói"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Dad, his official page warns: that video used his face without permission.",
          "sub": "Bố ơi, trang chính thức của anh ấy đã cảnh báo: video bị ghép mặt.",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The money already sent? It can't be recovered.",
          "sub": "Số tiền đã chuyển thì không lấy lại được.",
          "keys": [
            "không lấy lại được"
          ]
        }
      ],
      "ref": "p13,p15"
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
            "id": "f-chk",
            "t": "text",
            "text": "Tìm trang chính thức + tin phủ nhận",
            "x": 60,
            "y": 1590,
            "size": 42,
            "at": "l1:official page"
          },
          {
            "id": "f-rut",
            "t": "text",
            "text": "Mặt quen ≠ lời thật",
            "x": 60,
            "y": 1680,
            "size": 62,
            "at": "l2:familiar",
            "color": "accent",
            "hl": [
              {
                "text": "≠ lời thật",
                "at": "l2:true"
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
          "say": "Check: the person's official page, and news reports of them denying it.",
          "sub": "Cách kiểm tra: tìm trang chính thức của người đó, và tin báo chí họ lên tiếng phủ nhận.",
          "keys": [
            "trang chính thức"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A familiar face doesn't guarantee true words. Even eyes get fooled now.",
          "sub": "Gương mặt quen không bảo đảm lời nói thật. Giờ mắt thấy cũng bị lừa.",
          "keys": [
            "không bảo đảm lời nói thật"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Four p.m. Meet Cô Hoa, Lan's mum. She picks up her nephew, so she's in the parents' group.",
          "sub": "Bốn giờ chiều. Đây là cô Hoa, mẹ Lan. Cô hay đón cháu nhỏ đi học, nên ở trong nhóm phụ huynh.",
          "keys": [
            "cô Hoa"
          ]
        }
      ],
      "ref": "p14,p16"
    },
    {
      "id": "s13",
      "module": "DLG-01",
      "ref": "p17,p18",
      "data": {
        "set": "kitchen",
        "label": "16:00 · nhóm phụ huynh",
        "actors": [
          {
            "id": "hoa",
            "side": "left",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Chuyển tin đồn kèm câu hỏi",
          "why": "Nhiều người chỉ đọc tin, không đọc câu hỏi; vài phụ huynh xin nghỉ làm đón con sớm.",
          "rule": "Muốn hỏi thì hỏi riêng, đừng hỏi bằng cách chia sẻ"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "School closed for illness? I'll forward it: anyone know if it's true?",
          "sub": "Trường cho nghỉ vì dịch à? Chuyển vào nhóm: “Có ai biết thật không?”",
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
          "say": "Many read only the post, not your question. Some parents leave work early.",
          "sub": "Nhiều người chỉ đọc tin, không đọc câu hỏi. Có người sẽ xin nghỉ làm đón con.",
          "keys": [
            "chỉ đọc tin"
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
          "say": "I'll call the school office, or message the teacher privately.",
          "sub": "Để cô gọi văn phòng trường, hoặc nhắn riêng cô chủ nhiệm.",
          "phase": "redo",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "Then I'll tell the group only what the school confirms.",
          "sub": "Rồi chỉ báo vào nhóm điều nhà trường xác nhận.",
          "phase": "redo",
          "face": "happy"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      }
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
            "at": "l1",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l1:end",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 16:00 · Tin đồn trường học",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:four"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "kitchen",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "school",
                "telephone-receiver"
              ]
            },
            "at": "l1:four",
            "caption": "16:00 · quay lại lần hai",
            "icon": "school"
          },
          {
            "id": "g-bef",
            "t": "text",
            "text": "Trước: chuyển kèm “thật không?”",
            "x": 2028,
            "y": 1250,
            "size": 44,
            "at": "l2:before",
            "color": "muted"
          },
          {
            "id": "g-befx",
            "t": "strike",
            "over": "g-bef",
            "at": "l2:denial"
          },
          {
            "id": "g-bad",
            "t": "text",
            "text": "→ phụ huynh nghỉ làm, trường phủ nhận",
            "x": 2028,
            "y": 1325,
            "size": 38,
            "at": "l2:leave work",
            "color": "coral"
          },
          {
            "id": "g-aft",
            "t": "text",
            "text": "Sau: gọi trường, nhắn riêng",
            "x": 2028,
            "y": 1420,
            "size": 48,
            "at": "l3:after",
            "color": "accent"
          },
          {
            "id": "g-stop",
            "t": "text",
            "text": "Tin đồn dừng lại",
            "x": 2028,
            "y": 1500,
            "size": 54,
            "at": "l3:rumour",
            "hl": [
              {
                "text": "dừng lại",
                "at": "l3:not one step"
              }
            ]
          },
          {
            "id": "g-rut",
            "t": "text",
            "text": "Muốn hỏi → hỏi riêng",
            "x": 2028,
            "y": 1610,
            "size": 62,
            "at": "l4:privately",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi riêng",
                "at": "l4:privately"
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
          "say": "Take two, four p.m. Not sure? Avoid sharing to ask.",
          "sub": "Lần hai, bốn giờ chiều. Chưa chắc? Đừng chia sẻ để hỏi thử.",
          "keys": [
            "chia sẻ để hỏi thử"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Before: parents skim, leave work to pick up kids, and the school sends a denial.",
          "sub": "Trước: phụ huynh đọc lướt, xin nghỉ làm đón con, nhà trường phải gửi thông báo phủ nhận."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "After: she still asks, but the rumour doesn't travel, not one step.",
          "sub": "Sau: vẫn hỏi được, mà tin đồn không lan thêm một bước nào.",
          "keys": [
            "không lan thêm một bước nào"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Want to ask? Ask privately, or ask someone who knows. Don't ask by sharing.",
          "sub": "Muốn hỏi thì hỏi riêng, hỏi người am hiểu. Đừng hỏi bằng cách chia sẻ.",
          "keys": [
            "hỏi riêng"
          ]
        }
      ],
      "ref": "p17,p18,p19"
    },
    {
      "id": "s15",
      "module": "BRK-04",
      "ref": "p20,p21",
      "data": {
        "title": "Người thân chia sẻ tin sai",
        "wrong": "“Lại tin mấy thứ vớ vẩn!”",
        "right": "Cảm ơn ý tốt, đưa nguồn, mời cùng xem",
        "wrongIllus": "angry-face",
        "rightIllus": "handshake"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Nonsense again? They get hurt, and defend the post.",
          "sub": "“Lại tin mấy thứ vớ vẩn!”? Người kia tự ái, càng bảo vệ tin."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thank them, show your source, look together.",
          "sub": "Cảm ơn ý tốt, đưa nguồn, mời cùng xem."
        }
      ]
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
          },
          {
            "at": "l3",
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
            "id": "h-t",
            "t": "text",
            "text": "⑥ 19:00 · Nhắc người thân",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:seven"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
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
                "speech-balloon"
              ]
            },
            "at": "l1:old warning",
            "caption": "19:00 · Dũng nhắn riêng cô Hoa",
            "icon": "speech-balloon"
          },
          {
            "id": "h-sil",
            "t": "text",
            "text": "Im lặng → tin sai lan tiếp",
            "x": 3996,
            "y": 1250,
            "size": 46,
            "at": "l2:silence",
            "color": "muted"
          },
          {
            "id": "h-har",
            "t": "text",
            "text": "Gay gắt → tự ái, cãi lại",
            "x": 3996,
            "y": 1325,
            "size": 46,
            "at": "l2:harsh",
            "color": "coral"
          },
          {
            "id": "h-thx",
            "t": "text",
            "text": "Cảm ơn → đưa nguồn → cùng xem",
            "x": 3996,
            "y": 1420,
            "size": 46,
            "at": "l4:source",
            "color": "accent",
            "hl": [
              {
                "text": "cùng xem",
                "at": "l4:together"
              }
            ]
          },
          {
            "id": "h-pri",
            "t": "text",
            "text": "Nhóm đông? Nhắn riêng",
            "x": 3996,
            "y": 1510,
            "size": 54,
            "at": "l5:privately",
            "hl": [
              {
                "text": "Nhắn riêng",
                "at": "l5:privately"
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
          "say": "Seven p.m. Cô Hoa posts an old warning in the family chat.",
          "sub": "Bảy giờ tối. Cô Hoa đăng một tin cảnh báo cũ vào nhóm chat gia đình."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Silence lets it spread. A harsh reply makes her defend it. Dũng picks a third way.",
          "sub": "Im lặng thì tin sai lan tiếp; trả lời gay gắt thì người kia càng bảo vệ tin. Dũng chọn cách thứ ba."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Thanks for warning us, Cô. It's from last year, and a paper corrected it. Could you take a look?",
          "sub": "Cảm ơn cô đã nhắc cả nhà. Con tìm thử thì thấy tin từ năm ngoái, đã có báo đính chính, cô xem giúp con nhé.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Thank the good intention, give your source, invite her to look together.",
          "sub": "Cảm ơn ý tốt, đưa nguồn, mời cùng xem.",
          "keys": [
            "mời cùng xem"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And he sends it privately. Elders listen better when not corrected in front of a crowd.",
          "sub": "Và Dũng nhắn riêng. Người lớn dễ nghe hơn khi không bị sửa sai trước đông người.",
          "keys": [
            "nhắn riêng"
          ]
        }
      ],
      "ref": "p20,p21,p22"
    },
    {
      "id": "s17",
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 21:00 · Lỡ chia sẻ rồi",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:nine"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "wastebasket",
                "mobile-phone"
              ]
            },
            "at": "l1:nine",
            "caption": "21:00 · Dũng tự sửa",
            "icon": "wastebasket"
          },
          {
            "id": "i-del",
            "t": "text",
            "text": "Xoá bài",
            "x": 5964,
            "y": 1260,
            "size": 64,
            "at": "l1:delete",
            "color": "coral"
          },
          {
            "id": "i-cor",
            "t": "text",
            "text": "+ một dòng đính chính",
            "x": 5964,
            "y": 1360,
            "size": 52,
            "at": "l2:wasn't accurate",
            "hl": [
              {
                "text": "đính chính",
                "at": "l2:forwarding"
              }
            ]
          },
          {
            "id": "i-tr",
            "t": "text",
            "text": "Đáng tin hơn, không kém đi",
            "x": 5964,
            "y": 1470,
            "size": 54,
            "at": "l3:more trustworthy",
            "color": "accent",
            "hl": [
              {
                "text": "Đáng tin hơn",
                "at": "l3:more trustworthy"
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
          "say": "Nine p.m. Remember Dũng's six thirty share? Time to delete it.",
          "sub": "Chín giờ tối. Nhớ cú chia sẻ lúc sáu rưỡi của Dũng chứ? Đến lúc xoá."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "The news I shared this morning wasn't accurate. Please stop forwarding it.",
          "sub": "Tin mình chia sẻ sáng nay chưa chính xác, mọi người đừng chuyển tiếp nữa nhé.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It stops the spread, and makes you look more trustworthy, not less.",
          "sub": "Việc này giúp mọi người dừng lan truyền, và cho thấy bạn đáng tin hơn chứ không kém đi.",
          "keys": [
            "đáng tin hơn"
          ]
        }
      ],
      "ref": "p23"
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
            "at": "l1",
            "fit": [
              "j-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "6:30 sáng hôm sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:six thirty"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "alarm-clock",
                "pushpin"
              ]
            },
            "at": "l1:six thirty",
            "caption": "6:30 sáng thứ Hai · ngón cái dừng lại",
            "icon": "pushpin"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1265,
            "w": 50,
            "h": 50,
            "at": "l2:stop",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1247,
            "size": 62,
            "at": "l2:stop+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Sợ, giận → dừng",
            "x": 8007,
            "y": 1257,
            "size": 40,
            "at": "l2:stop+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1335,
            "w": 50,
            "h": 50,
            "at": "l2:read",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1317,
            "size": 62,
            "at": "l2:read+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Đọc hết bài",
            "x": 8007,
            "y": 1327,
            "size": 40,
            "at": "l2:read+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1405,
            "w": 50,
            "h": 50,
            "at": "l3:who",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1387,
            "size": 62,
            "at": "l3:who+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Ai đăng, khi nào",
            "x": 8007,
            "y": 1397,
            "size": 40,
            "at": "l3:who+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1475,
            "w": 50,
            "h": 50,
            "at": "l3:sideways",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1457,
            "size": 62,
            "at": "l3:sideways+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Đọc ngang nguồn chính thức",
            "x": 8007,
            "y": 1467,
            "size": 40,
            "at": "l3:sideways+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1545,
            "w": 50,
            "h": 50,
            "at": "l4:image",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1527,
            "size": 62,
            "at": "l4:image+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Tìm bằng hình ảnh",
            "x": 8007,
            "y": 1537,
            "size": 40,
            "at": "l4:image+200"
          },
          {
            "id": "j-c5",
            "t": "box",
            "x": 7932,
            "y": 1615,
            "w": 50,
            "h": 50,
            "at": "l4:not sure",
            "stroke": 5
          },
          {
            "id": "j-k5",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1597,
            "size": 62,
            "at": "l4:not sure+600",
            "color": "accent"
          },
          {
            "id": "j-l5",
            "t": "text",
            "text": "Không chắc → không chia sẻ",
            "x": 8007,
            "y": 1607,
            "size": 40,
            "at": "l4:not sure+200"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Mắt thấy, tai nghe… tay kiểm tra",
            "x": 8772,
            "y": 1775,
            "size": 44,
            "at": "l5:eyes",
            "color": "accent",
            "hl": [
              {
                "text": "tay kiểm tra",
                "at": "l5:hands"
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
          "say": "Six thirty next morning. A new urgent warning. This time, Dũng's thumb stops.",
          "sub": "Sáu rưỡi sáng hôm sau. Lại một tin cảnh báo khẩn. Lần này, ngón cái của Dũng dừng lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "He pins a checklist in the family chat. Scared or angry? Stop. Read the whole post.",
          "sub": "Dũng ghim danh sách vào nhóm chat gia đình. Thấy sợ, giận? Dừng. Đọc hết bài.",
          "keys": [
            "Dừng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Check who posted, and when. Read sideways to official sources.",
          "sub": "Xem ai đăng, đăng khi nào. Đọc ngang sang nguồn chính thức."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Image search the photos. Not sure? Don't share.",
          "sub": "Tìm bằng hình ảnh. Không chắc thì không chia sẻ.",
          "keys": [
            "không chia sẻ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Eyes see, ears hear, and now, hands check.",
          "sub": "Mắt thấy, tai nghe, giờ thêm… tay kiểm tra.",
          "keys": [
            "tay kiểm tra"
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
      "ref": "p24,outro"
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
            "at": "l1:two minutes",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l2:photo",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:privately",
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
            "x": 3528,
            "y": 260,
            "at": "l1:two minutes"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8632,
            "y": 160,
            "at": "l2:photo"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2668,
            "y": 1610,
            "at": "l3:privately"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "g-rut"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:sharing"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; thuốc men, sức khoẻ hãy hỏi bác sĩ đang khám cho bạn.",
            "x": 7932,
            "y": 1825,
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
          "say": "So: feel a jolt? Give it two minutes. Who, evidence, when, official sources.",
          "sub": "Tóm lại: thấy thót tim? Cho nó hai phút. Ai đăng, bằng chứng, khi nào, nguồn chính thức.",
          "keys": [
            "hai phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A real photo, or a familiar face, doesn't make it today's truth.",
          "sub": "Ảnh thật, mặt quen, chưa chắc là sự thật hôm nay.",
          "keys": [
            "chưa chắc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not sure? Ask privately, not by sharing. Two minutes cost far less than a day of corrections.",
          "sub": "Chưa chắc thì hỏi riêng, đừng hỏi bằng cách chia sẻ. Hai phút kiểm tra rẻ hơn nhiều một ngày đính chính.",
          "keys": [
            "rẻ hơn nhiều một ngày đính chính"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p3,p12,p19"
    },
    {
      "id": "s20",
      "module": "QUIZ-01",
      "ref": "questions[22]",
      "data": {
        "q": "In the before and after example, what happens when the rumour is forwarded with a question?",
        "options": [
          "The school thanks the sender for sharing the warning with the parents group",
          "Some parents leave work to pick up their children, and the school denies it",
          "Everyone reads the question carefully and waits for the official news"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "school",
        "why": "Thêm câu hỏi không ngăn được người khác làm theo tin đồn."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "In the before and after example, what happens when the rumour is forwarded with a question?",
          "sub": "Trong ví dụ trước – sau, chuyển tiếp tin đồn kèm câu hỏi thì sao?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Some parents leave work to pick up their children, and the school denies it.",
          "sub": "Vài phụ huynh xin nghỉ làm đón con, và nhà trường phải phủ nhận."
        }
      ]
    },
    {
      "id": "s21",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Dừng hai phút, rồi chọn"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before you share, try the forty questions below.",
          "sub": "Trước khi bấm chia sẻ, thử bốn mươi câu hỏi bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit #144: Đét đứng trái + bảng trắng 10 ô (5 × 2) đi theo MỘT CHỦ NHẬT của nhóm chat gia đình (6:30 Dũng lỡ chia sẻ cảnh báo khẩn → 7:00 nước lá → 9:00 kiểm tra hai phút → 11:00 Lan và ảnh lũ → 14:00 video ghép mặt → 16:00 “Khoan đã!” tin trường học → 19:00 nhắc khéo → 21:00 đính chính → 6:30 sáng hôm sau). Nhân vật (4, theo w145/_series): Dũng (người nhắc khéo p21, người đính chính p23, “bạn” ở mở bài), bác Bình (người tin áo blouse p6, bố của Oanh p15), Lan (🧪 p11; gộp Oanh tìm trang chính thức thành Dũng), cô Hoa (phụ huynh p18, “cô” ở p21). Cảnh ngắt nhịp: BRK-06 dấu hiệu nghi (p4), BRK-07 rehook (p12), BRK-04 Sai/Đúng nhắc người thân (p20–p21). Số chỉ lấy từ bài (hai phút, hai tuần). Bài có ý sức khoẻ (thuốc huyết áp) → dòng lưu ý chung cuối (#133). Khép vòng: “Tai nghe là giả, mắt thấy là thật” → “Mắt thấy, tai nghe… tay kiểm tra”. Bản cũ (W lần 3, #110): w145/bak/how-to-spot-fake-news-on-social-media--w01.js.",
  "loop": {
    "open": "s01",
    "close": "s18"
  }
};
