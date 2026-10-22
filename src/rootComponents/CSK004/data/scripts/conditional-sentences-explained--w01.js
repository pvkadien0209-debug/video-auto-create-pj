// Kịch bản video W lần 3 (#110) — "Câu điều kiện loại 1, 2, 3: hiểu một lần là nhớ" · chuỗi "Ngữ pháp tiếng Anh cần biết"
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "conditional-sentences-explained--w01",
  "hook": "HOOK-14",
  "unit": {
    "audience": "grammar-relearners",
    "slug": "conditional-sentences-explained",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Câu điều kiện loại 1, 2, 3: hiểu một lần là nhớ",
    "series": "Ngữ pháp tiếng Anh cần biết"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#143 dựng lại theo hạt nhân #136: Đét đứng trái + một bảng trắng chung 10 ô, đi theo một tuần đi làm của Thảo (học lại ngữ pháp): ① T2 sáng máy in (loại 0, hai vế) · ② T2 chiều thư cho khách (loại 1, vế sau linh hoạt) · ③ T3 thư nhắc hạn (unless) · ④ T4 sáng lời khuyên (loại 2, would lịch sự) · “Khoan đã!” T4 chiều đề xuất ngân sách · ⑤ kế hoạch hay giấc mơ · ⑥ T5 sáng báo cáo sai (loại 3, would ở vế if, I'd, câu trộn) · ⑦ T5 chiều Bác Bình (cách A/B) · ⑧ T5 tối ba câu + bảng soát. Mở/khép ở cuộc gọi chiều thứ Sáu với Sam (p18), câu đố giữ s32, kết giữ s34. Bảng viết công thức, tô vàng phần thì động từ. Mã cảnh mới b00–b22 để không dính mp3 cũ. Bản trước: w143/bak/conditional-sentences-explained--w01.js.",
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
      "id": "b00",
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
            "id": "a-3",
            "t": "text",
            "text": "3 loại",
            "x": 60,
            "y": 110,
            "size": 200,
            "at": "l1:three",
            "color": "accent",
            "hl": [
              {
                "text": "3 loại",
                "at": "l1:types"
              }
            ]
          },
          {
            "id": "a-3b",
            "t": "text",
            "text": "câu điều kiện + 1 quy tắc",
            "x": 70,
            "y": 370,
            "size": 56,
            "at": "l1:rule"
          },
          {
            "id": "a-ta",
            "t": "text",
            "text": "Ta tưởng: thuộc bảng dài?",
            "x": 70,
            "y": 470,
            "size": 52,
            "at": "l2:table",
            "color": "muted"
          },
          {
            "id": "a-tax",
            "t": "strike",
            "over": "a-ta",
            "at": "l2:phone"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three. Three types of if sentences, and one simple rule to tell them apart.",
          "sub": "Ba. Ba loại câu điều kiện, và một quy tắc đơn giản để phân biệt.",
          "keys": [
            "Ba loại câu điều kiện"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Forget the formula table, thick as a phone book.",
          "sub": "Quên cái bảng công thức dày như danh bạ điện thoại đi.",
          "keys": [
            "bảng công thức"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "b01",
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
              "a-call"
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
            "id": "a-call",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "close",
                  "on": "thao",
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
            "caption": "Chiều thứ Sáu · cuộc gọi",
            "icon": "telephone-receiver"
          },
          {
            "id": "a-sam",
            "t": "text",
            "text": "“…we'd have approved it.”",
            "x": 900,
            "y": 660,
            "size": 46,
            "at": "l3:approved",
            "hl": [
              {
                "text": "approved",
                "at": "l4:approved"
              }
            ]
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Duyệt rồi?",
            "x": 70,
            "y": 590,
            "size": 64,
            "at": "l5:really",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Thảo, an office worker relearning grammar. On Wednesday, she sent a partner her bid.",
          "sub": "Đây là Thảo, dân văn phòng đang học lại ngữ pháp. Thứ Tư, cô gửi hồ sơ dự thầu cho đối tác."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Friday, the partner calls. This is Sam: polite, busy, fond of long sentences.",
          "sub": "Thứ Sáu, đối tác gọi. Đây là Sam: lịch sự, bận rộn, mê câu dài.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "If you'd sent it on Monday, we'd have approved it.",
          "sub": "If you'd sent it on Monday, we'd have approved it."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Approved? So... it's approved?",
          "sub": "Có chữ approved… vậy là duyệt rồi à?",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Her heart starts dancing. But was it really approved? Hold that question.",
          "sub": "Tim cô bắt đầu nhảy múa. Nhưng duyệt thật chưa? Giữ câu hỏi này nhé.",
          "keys": [
            "duyệt thật chưa"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        },
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 1200
        }
      ],
      "ref": "p18"
    },
    {
      "id": "b02",
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
            "text": "Chọn loại câu điều kiện nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:pick",
            "hl": [
              {
                "text": "Chọn loại",
                "at": "l1:right"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: thuộc bảng",
            "x": 2028,
            "y": 150,
            "size": 52,
            "at": "l1:memorise",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l1:ask"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: thật đến đâu?",
            "x": 2028,
            "y": 230,
            "size": 58,
            "at": "l1:real",
            "color": "accent",
            "hl": [
              {
                "text": "thật đến đâu",
                "at": "l1:real+300"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Loại 1: có thể xảy ra",
            "x": 2028,
            "y": 350,
            "size": 52,
            "at": "l2:one",
            "hl": [
              {
                "text": "có thể xảy ra",
                "at": "l2:happen"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Loại 2: tưởng tượng, khó xảy ra",
            "x": 2028,
            "y": 430,
            "size": 52,
            "at": "l2:two",
            "hl": [
              {
                "text": "tưởng tượng",
                "at": "l2:imagined"
              }
            ]
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Loại 3: đã lỡ",
            "x": 2028,
            "y": 510,
            "size": 52,
            "at": "l2:three",
            "hl": [
              {
                "text": "đã lỡ",
                "at": "l2:didn"
              }
            ]
          },
          {
            "id": "b-r1",
            "t": "text",
            "text": "càng xa sự thật",
            "x": 2968,
            "y": 350,
            "size": 56,
            "at": "l3:further",
            "color": "coral"
          },
          {
            "id": "b-ar",
            "t": "arrow",
            "from": [
              3088,
              430
            ],
            "to": [
              3088,
              520
            ],
            "at": "l3:reality"
          },
          {
            "id": "b-r2",
            "t": "text",
            "text": "động từ càng lùi về quá khứ",
            "x": 2968,
            "y": 540,
            "size": 52,
            "at": "l3:back",
            "hl": [
              {
                "text": "lùi về quá khứ",
                "at": "l3:back+200"
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
          "say": "How do you pick the right type? Don't memorise tables. Just ask: how real is it?",
          "sub": "Vậy chọn loại nào cho đúng? Đừng thuộc bảng. Chỉ hỏi một câu: chuyện này thật đến đâu?",
          "keys": [
            "thật đến đâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Type one can really happen. Type two is imagined. Type three already didn't happen.",
          "sub": "Loại 1 có thể xảy ra thật. Loại 2 chỉ là tưởng tượng. Loại 3 thì đã không xảy ra."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The rule: the further from reality, the further back the verb goes.",
          "sub": "Quy tắc: càng xa sự thật, động từ càng lùi về quá khứ.",
          "keys": [
            "càng xa sự thật",
            "càng lùi về quá khứ"
          ]
        }
      ],
      "ref": "intro,p1"
    },
    {
      "id": "b03",
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
            "id": "b-wk",
            "t": "text",
            "text": "8 chặng · 1 tuần của Thảo",
            "x": 2028,
            "y": 610,
            "size": 44,
            "at": "l1:week",
            "hl": [
              {
                "text": "1 tuần",
                "at": "l1:week+300"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2018,
            "y": 680,
            "w": 190,
            "h": 70,
            "at": "l1:stop+0",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2226,
            "y": 680,
            "w": 190,
            "h": 70,
            "at": "l1:stop+200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2434,
            "y": 680,
            "w": 190,
            "h": 70,
            "at": "l1:stop+400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2642,
            "y": 680,
            "w": 190,
            "h": 70,
            "at": "l1:stop+600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2850,
            "y": 680,
            "w": 190,
            "h": 70,
            "at": "l1:stop+800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3058,
            "y": 680,
            "w": 190,
            "h": 70,
            "at": "l1:stop+1000",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3266,
            "y": 680,
            "w": 190,
            "h": 70,
            "at": "l1:stop+1200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d7",
            "t": "box",
            "x": 3474,
            "y": 680,
            "w": 190,
            "h": 70,
            "at": "l1:stop+1400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2 sáng",
            "x": 2032,
            "y": 690,
            "size": 36,
            "at": "l1:stop+100"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T2 chiều",
            "x": 2240,
            "y": 690,
            "size": 36,
            "at": "l1:stop+300"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T3",
            "x": 2448,
            "y": 690,
            "size": 36,
            "at": "l1:stop+500"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T4 sáng",
            "x": 2656,
            "y": 690,
            "size": 36,
            "at": "l1:stop+700"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T4 chiều",
            "x": 2864,
            "y": 690,
            "size": 36,
            "at": "l1:stop+900"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T5 sáng",
            "x": 3072,
            "y": 690,
            "size": 36,
            "at": "l1:stop+1100"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "T5 chiều",
            "x": 3280,
            "y": 690,
            "size": 36,
            "at": "l1:stop+1300"
          },
          {
            "id": "b-dt7",
            "t": "text",
            "text": "T5 tối",
            "x": 3488,
            "y": 690,
            "size": 36,
            "at": "l1:stop+1500"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Thảo's week at work. Every stop, one type, each with its own verb recipe.",
          "sub": "Mình theo một tuần đi làm của Thảo. Mỗi chặng một loại câu, loại nào cũng có công thức động từ riêng.",
          "keys": [
            "một tuần đi làm của Thảo"
          ]
        }
      ],
      "ref": "p3"
    },
    {
      "id": "b04",
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
              "c-off"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "C",
            "ms": 700
          },
          {
            "at": "l6",
            "fit": [
              "c-off"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l8",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Sáng thứ Hai: máy in",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:monday"
          },
          {
            "id": "c-off",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
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
                  "at": "l2"
                }
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "close",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "close",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l8",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:printer",
            "caption": "Sáng thứ Hai · công ty",
            "icon": "printer"
          },
          {
            "id": "c-f",
            "t": "text",
            "text": "If + hiện tại, hiện tại",
            "x": 3996,
            "y": 190,
            "size": 56,
            "at": "l5:zero",
            "hl": [
              {
                "text": "hiện tại, hiện tại",
                "at": "l5:both"
              }
            ]
          },
          {
            "id": "c-w",
            "t": "text",
            "text": "if ≈ when",
            "x": 3996,
            "y": 280,
            "size": 64,
            "at": "l5:when",
            "color": "accent",
            "hl": [
              {
                "text": "≈ when",
                "at": "l5:when+200"
              }
            ]
          },
          {
            "id": "c-s1",
            "t": "text",
            "text": "If you need help, call me.",
            "x": 3996,
            "y": 400,
            "size": 48,
            "at": "l6:if"
          },
          {
            "id": "c-s2",
            "t": "text",
            "text": "Call me if you need help.",
            "x": 3996,
            "y": 465,
            "size": 48,
            "at": "l8:call"
          },
          {
            "id": "c-ar",
            "t": "arrow",
            "from": [
              4656,
              420
            ],
            "to": [
              4656,
              500
            ],
            "at": "l8:swap"
          },
          {
            "id": "c-c1",
            "t": "text",
            "text": "if đứng đầu → có dấu phẩy",
            "x": 3996,
            "y": 570,
            "size": 46,
            "at": "l8:first",
            "hl": [
              {
                "text": "có dấu phẩy",
                "at": "l8:comma"
              }
            ]
          },
          {
            "id": "c-c2",
            "t": "text",
            "text": "if đứng sau → thường không",
            "x": 3996,
            "y": 640,
            "size": 46,
            "at": "l8:second",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: Monday morning. The printer blinks red, like a tiny fire alarm.",
          "sub": "Chặng một: sáng thứ Hai. Máy in văn phòng nháy đèn đỏ như còi báo cháy mini."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Dũng, the colleague at the next desk. He knows every machine's mood.",
          "sub": "Đây là Dũng, đồng nghiệp bàn bên, thuộc tính khí từng cái máy."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Dũng, is it broken again?",
          "sub": "Dũng ơi, lại hỏng à?",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "No. If the printer runs out of paper, the red light flashes.",
          "sub": "If the printer runs out of paper, the red light flashes.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Type zero, for rules: present simple in both parts. Here if means almost when.",
          "sub": "Loại 0 cho quy trình, nội quy: hiện tại đơn ở cả hai vế. Ở đây if gần nghĩa với when.",
          "keys": [
            "hiện tại đơn ở cả hai vế"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Thanks! If you need help, call me.",
          "sub": "Cảm ơn nha! If you need help, call me.",
          "face": "happy"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Halves swap seats: call me if you need help. If first, add a comma. If second, usually none.",
          "sub": "Hai vế đổi chỗ được: Call me if you need help. Vế if đứng đầu thì có dấu phẩy, đứng sau thường không cần.",
          "keys": [
            "dấu phẩy"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p2,p4"
    },
    {
      "id": "b06",
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
              "d-mail"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4",
            "fit": "D",
            "ms": 700
          },
          {
            "at": "l5",
            "fit": [
              "d-mail"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Chiều thứ Hai: thư cho khách",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:monday"
          },
          {
            "id": "d-mail",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
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
                  "pose": "think"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "close",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "close",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:client",
            "caption": "Chiều thứ Hai · viết email",
            "icon": "envelope-with-arrow"
          },
          {
            "id": "d-x",
            "t": "text",
            "text": "if the client will approve",
            "x": 5964,
            "y": 190,
            "size": 46,
            "at": "l3:will",
            "color": "coral"
          },
          {
            "id": "d-xx",
            "t": "strike",
            "over": "d-x",
            "at": "l4:future"
          },
          {
            "id": "d-f",
            "t": "text",
            "text": "If + hiện tại đơn → will",
            "x": 5964,
            "y": 270,
            "size": 56,
            "at": "l4:present",
            "hl": [
              {
                "text": "hiện tại đơn",
                "at": "l4:simple"
              }
            ]
          },
          {
            "id": "d-ok",
            "t": "text",
            "text": "if the client approves ✓",
            "x": 5964,
            "y": 360,
            "size": 48,
            "at": "l5:approves",
            "color": "accent",
            "hl": [
              {
                "text": "approves",
                "at": "l5:approves+300"
              }
            ]
          },
          {
            "id": "d-q",
            "t": "text",
            "text": "“…feel free to ask.”",
            "x": 5964,
            "y": 460,
            "size": 50,
            "at": "l6:feel",
            "hl": [
              {
                "text": "feel free to ask",
                "at": "l6:free"
              }
            ]
          },
          {
            "id": "d-r",
            "t": "text",
            "text": "Vế sau: can, should, mệnh lệnh",
            "x": 5964,
            "y": 545,
            "size": 48,
            "at": "l7:can",
            "hl": [
              {
                "text": "can, should, mệnh lệnh",
                "at": "l7:command"
              }
            ]
          },
          {
            "id": "d-p",
            "t": "text",
            "text": "“Biết thì thưa thốt…”",
            "x": 5964,
            "y": 640,
            "size": 50,
            "at": "l7:grandma",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: Monday afternoon. Thảo emails a client about a new design.",
          "sub": "Chặng hai: chiều thứ Hai. Thảo viết thư cho khách về bản thiết kế mới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "If the client will approve the design, we'll start next week.",
          "sub": "If the client will approve the design, we'll start next week.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Hmm. Will after if? My ears itch.",
          "sub": "Hừm. Will đứng sau if à? Nghe ngứa tai quá.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Good ears. Type one, a real possibility: present simple after if, even for the future.",
          "sub": "Tai thính đấy. Loại 1, chuyện có thể xảy ra thật: sau if dùng hiện tại đơn, kể cả nói về tương lai.",
          "keys": [
            "hiện tại đơn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "If the client approves the design, we'll start next week.",
          "sub": "If the client approves the design, we'll start next week.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "And end with: If you have any questions, feel free to ask.",
          "sub": "Kết thư thêm câu: If you have any questions, feel free to ask.",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "The result can use can, should, or a command. Like grandma said: if you know, speak up.",
          "sub": "Vế sau có thể dùng can, should hay câu mệnh lệnh. Như bà dặn: “Biết thì thưa thốt.”",
          "keys": [
            "câu mệnh lệnh"
          ]
        }
      ],
      "ref": "intro,p5,p6"
    },
    {
      "id": "b08",
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
            "at": "l5",
            "fit": "E",
            "ms": 700
          },
          {
            "at": "l6",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l8",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Ba: thư nhắc hạn",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:tuesday"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "close",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "close",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l8",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:email",
            "caption": "Sáng thứ Ba · hộp thư",
            "icon": "money-with-wings"
          },
          {
            "id": "e-x",
            "t": "text",
            "text": "Trả tiền → bị huỷ?",
            "x": 7932,
            "y": 180,
            "size": 52,
            "at": "l3:cancel",
            "color": "coral"
          },
          {
            "id": "e-xx",
            "t": "strike",
            "over": "e-x",
            "at": "l5:means"
          },
          {
            "id": "e-u",
            "t": "text",
            "text": "unless = if … not",
            "x": 7932,
            "y": 260,
            "size": 72,
            "at": "l5:means",
            "color": "accent",
            "hl": [
              {
                "text": "if … not",
                "at": "l5:not"
              }
            ]
          },
          {
            "id": "e-n",
            "t": "text",
            "text": "= “nếu không”",
            "x": 7932,
            "y": 360,
            "size": 56,
            "at": "l5:swap"
          },
          {
            "id": "e-ok",
            "t": "text",
            "text": "Không trả → mất đơn",
            "x": 7932,
            "y": 450,
            "size": 52,
            "at": "l6:payment",
            "hl": [
              {
                "text": "Không trả",
                "at": "l6:no"
              }
            ]
          },
          {
            "id": "e-slow",
            "t": "text",
            "text": "Gặp unless → đọc chậm",
            "x": 7932,
            "y": 560,
            "size": 54,
            "at": "l8:slow",
            "color": "accent",
            "hl": [
              {
                "text": "đọc chậm",
                "at": "l8:slow+300"
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
          "say": "Third stop: Tuesday. A supplier's email lands, short and a little scary.",
          "sub": "Chặng ba: thứ Ba. Thư nhà cung cấp rơi vào hộp thư của Thảo, ngắn mà hơi rợn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Unless we receive your payment by Friday, the order will be cancelled.",
          "sub": "Unless we receive your payment by Friday, the order will be cancelled.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Pay, and they cancel? Then I'll just wait.",
          "sub": "Trả tiền thì họ huỷ? Vậy mình cứ ngồi chờ.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Hold on! Unless is not if. Read it again, slowly.",
          "sub": "Ơ kìa! Unless đâu phải if. Đọc chậm lại đi chị.",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Unless means if not. Swap it in: If we don't receive your payment by Friday.",
          "sub": "Unless là “nếu không”. Thay vào: If we don't receive your payment by Friday.",
          "keys": [
            "nếu không"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Oh! No payment, no order. I'm paying today.",
          "sub": "À! Không trả thì mất đơn. Hôm nay trả luôn.",
          "face": "happy"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Unless loves deadlines and contracts. Skim it, you read the opposite. So slow down.",
          "sub": "Unless mê email nhắc hạn và hợp đồng. Đọc lướt là hiểu ngược. Gặp unless, đọc chậm lại.",
          "keys": [
            "đọc chậm lại"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "tin-den",
          "offsetMs": 1500
        }
      ],
      "ref": "p7,p8,p9"
    },
    {
      "id": "b10",
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
          },
          {
            "at": "l5",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Sáng thứ Tư: chuyện tưởng tượng",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:wednesday"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
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
                  "pose": "think"
                }
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
                  "shot": "close",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "close",
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
            "at": "l1:tea",
            "caption": "Sáng thứ Tư · góc pha trà",
            "icon": "thought-balloon"
          },
          {
            "id": "f-iw",
            "t": "text",
            "text": "If I were you, I would…",
            "x": 60,
            "y": 1280,
            "size": 56,
            "at": "l4:were",
            "hl": [
              {
                "text": "were",
                "at": "l4:everyone"
              }
            ]
          },
          {
            "id": "f-r",
            "t": "text",
            "text": "be → were, mọi ngôi",
            "x": 60,
            "y": 1370,
            "size": 46,
            "at": "l4:everyone",
            "color": "muted"
          },
          {
            "id": "f-pol",
            "t": "text",
            "text": "It would help if you could…",
            "x": 60,
            "y": 1450,
            "size": 46,
            "at": "l6:softens",
            "hl": [
              {
                "text": "would",
                "at": "l6:would"
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
          "say": "Fourth stop: Wednesday tea break. Dũng looks like he's hiding a state secret.",
          "sub": "Chặng bốn: thứ Tư, góc pha trà. Dũng mặt như đang giấu bí mật quốc gia."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I got a job offer. Should I take it?",
          "sub": "Em vừa nhận lời mời làm việc. Có nên nhận không chị?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "If I were you, I would accept the offer.",
          "sub": "If I were you, I would accept the offer.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Type two: not real. Thảo isn't Dũng, never will be. With be, use were for everyone.",
          "sub": "Loại 2: điều không có thật. Thảo đâu phải Dũng. Với be, văn viết chuẩn dùng were cho mọi ngôi.",
          "keys": [
            "were cho mọi ngôi"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Thanks! It would help if you could send the details.",
          "sub": "Cảm ơn chị! It would help if you could send the details.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Would softens a request, even without if: would it be possible to move the meeting?",
          "sub": "Would làm lời nhờ mềm hẳn, kể cả câu không có if: Would it be possible to move the meeting? (không phải câu điều kiện)",
          "keys": [
            "mềm hẳn"
          ]
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "b11",
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
            "id": "f-f",
            "t": "text",
            "text": "If + quá khứ đơn → would",
            "x": 60,
            "y": 1540,
            "size": 56,
            "at": "l1:past",
            "hl": [
              {
                "text": "quá khứ đơn",
                "at": "l1:simple"
              }
            ]
          },
          {
            "id": "f-flag",
            "t": "text",
            "text": "quá khứ = cờ “tưởng tượng”",
            "x": 60,
            "y": 1620,
            "size": 46,
            "at": "l2:flag",
            "hl": [
              {
                "text": "tưởng tượng",
                "at": "l2:imagined"
              }
            ]
          },
          {
            "id": "f-ca",
            "t": "text",
            "text": "“Ước gì sông rộng một gang…”",
            "x": 60,
            "y": 1690,
            "size": 46,
            "at": "l2:folk",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Recipe: if plus past simple, then would. If I had a bigger budget, I would hire two more people.",
          "sub": "Công thức: if + quá khứ đơn, vế sau would. If I had a bigger budget, I would hire two more people.",
          "keys": [
            "quá khứ đơn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It talks about now. The past is just a flag: imagined. Like the folk song: if only the river were narrow.",
          "sub": "Câu nói về hiện tại; quá khứ là lá cờ báo “tưởng tượng”, như ca dao: “Ước gì sông rộng một gang.”",
          "keys": [
            "tưởng tượng"
          ]
        }
      ],
      "ref": "p10,p12"
    },
    {
      "id": "b12",
      "module": "DLG-01",
      "data": {
        "set": "meeting",
        "label": "Chiều thứ Tư · phòng họp",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Nói kế hoạch thật như một giấc mơ",
          "why": "Ngân sách sắp được duyệt mà dùng loại 2, sếp nghe thành “tiếc là không có tiền” và chuyển mục khác.",
          "rule": "Có khả năng thật, đừng nói như một giấc mơ"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "My proposal: two new people. The budget will probably be approved.",
          "sub": "Đề xuất của em: tuyển thêm hai người. Ngân sách nhiều khả năng sẽ được duyệt.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "So... if we had more budget, we would hire two people.",
          "sub": "Nên là… if we had more budget, we would hire two people.",
          "pose": "shrug",
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
          "say": "That's type two. The boss hears: sadly, there's no money. Next item!",
          "sub": "Đó là loại 2. Sếp nghe thành: tiếc là không có tiền. Chuyển mục khác!",
          "keys": [
            "tiếc là không có tiền"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Quay lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "If the budget is approved, we'll hire two people.",
          "sub": "If the budget is approved, we'll hire two people.",
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
      "ref": "p13"
    },
    {
      "id": "b13",
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
            "text": "⑤ Thứ Tư: kế hoạch hay mơ?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:fifth"
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "If we had more budget…",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l1:two",
            "color": "coral"
          },
          {
            "id": "g-a2",
            "t": "text",
            "text": "→ điều ước, sếp lướt qua",
            "x": 2068,
            "y": 1330,
            "size": 46,
            "at": "l1:wish",
            "color": "muted",
            "hl": [
              {
                "text": "điều ước",
                "at": "l1:wish+200"
              }
            ]
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "If the budget is approved…",
            "x": 2028,
            "y": 1430,
            "size": 50,
            "at": "l1:one",
            "color": "accent"
          },
          {
            "id": "g-b2",
            "t": "text",
            "text": "→ kế hoạch chờ đèn xanh",
            "x": 2068,
            "y": 1500,
            "size": 46,
            "at": "l1:plan",
            "hl": [
              {
                "text": "đèn xanh",
                "at": "l1:green"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Có thật → đừng nói như mơ",
            "x": 2028,
            "y": 1620,
            "size": 60,
            "at": "l2:dream",
            "hl": [
              {
                "text": "đừng nói như mơ",
                "at": "l2:dream+200"
              }
            ]
          },
          {
            "id": "g-bid",
            "t": "box",
            "x": 3018,
            "y": 1260,
            "w": 560,
            "h": 260,
            "at": "l3:bid",
            "stroke": 5
          },
          {
            "id": "g-bid1",
            "t": "text",
            "text": "Hồ sơ dự thầu",
            "x": 3068,
            "y": 1300,
            "size": 56,
            "at": "l3:bid+300"
          },
          {
            "id": "g-bid2",
            "t": "text",
            "text": "gửi: tối thứ Tư",
            "x": 3068,
            "y": 1400,
            "size": 52,
            "at": "l3:wednesday",
            "hl": [
              {
                "text": "thứ Tư",
                "at": "l3:remember"
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
          "say": "Fifth stop. Type two sounds like a wish. Type one, like a plan waiting for a green light.",
          "sub": "Chặng năm. Loại 2 nghe như một điều ước. Loại 1 nghe như kế hoạch chỉ chờ bật đèn xanh.",
          "keys": [
            "điều ước",
            "chờ bật đèn xanh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "If it can really happen, don't say it like a dream.",
          "sub": "Có khả năng thật thì đừng nói như một giấc mơ.",
          "keys": [
            "đừng nói như một giấc mơ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fired up, Thảo sends her bid that evening. Wednesday. Remember that day.",
          "sub": "Được tiếp lửa, tối đó Thảo gửi hồ sơ dự thầu. Thứ Tư. Nhớ lấy ngày này.",
          "keys": [
            "Thứ Tư"
          ]
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "b14",
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
            "at": "l5",
            "fit": "H",
            "ms": 700
          },
          {
            "at": "l7:first",
            "fit": [
              "h-d"
            ],
            "zoom": 1.25,
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Sáng thứ Năm: chuyện đã lỡ",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:thursday"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "face": "sad"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "face": "worried"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "close",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "close",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:report",
            "caption": "Sáng thứ Năm · phòng họp",
            "icon": "bar-chart"
          },
          {
            "id": "h-x",
            "t": "text",
            "text": "Thực tế: không kiểm → đã sai",
            "x": 3996,
            "y": 1280,
            "size": 46,
            "at": "l3:didn",
            "hl": [
              {
                "text": "đã sai",
                "at": "l3:made"
              }
            ]
          },
          {
            "id": "h-f",
            "t": "text",
            "text": "If had V3 → would have V3",
            "x": 3996,
            "y": 1355,
            "size": 56,
            "at": "l3:recipe",
            "hl": [
              {
                "text": "had V3",
                "at": "l3:had"
              },
              {
                "text": "would have V3",
                "at": "l3:would"
              }
            ]
          },
          {
            "id": "h-n",
            "t": "text",
            "text": "V3 = quá khứ phân từ",
            "x": 3996,
            "y": 1435,
            "size": 34,
            "at": "l3:done",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "h-w",
            "t": "text",
            "text": "If I would have known",
            "x": 3996,
            "y": 1495,
            "size": 46,
            "at": "l4:would",
            "color": "coral"
          },
          {
            "id": "h-wx",
            "t": "strike",
            "over": "h-w",
            "at": "l5:never"
          },
          {
            "id": "h-r",
            "t": "text",
            "text": "If I had known ✓",
            "x": 3996,
            "y": 1560,
            "size": 46,
            "at": "l5:had",
            "color": "accent",
            "hl": [
              {
                "text": "had",
                "at": "l5:had+200"
              }
            ]
          },
          {
            "id": "h-d",
            "t": "text",
            "text": "I'd = had · I'd = would",
            "x": 3996,
            "y": 1630,
            "size": 52,
            "at": "l7:first",
            "hl": [
              {
                "text": "had",
                "at": "l7:had"
              },
              {
                "text": "would",
                "at": "l7:would"
              }
            ]
          },
          {
            "id": "h-m",
            "t": "text",
            "text": "would have = đã lỡ",
            "x": 3996,
            "y": 1702,
            "size": 56,
            "at": "l7:missed",
            "color": "accent",
            "hl": [
              {
                "text": "đã lỡ",
                "at": "l7:missed+300"
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
          "say": "Sixth stop: Thursday morning. A report went out with a wrong number. Dead silence.",
          "sub": "Chặng sáu: sáng thứ Năm. Báo cáo gửi đi với một con số sai. Im phăng phắc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "If we had checked the figures, we wouldn't have made that mistake.",
          "sub": "If we had checked the figures, we wouldn't have made that mistake.",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Type three: they didn't check, and they made it. Recipe: if had done, would have done.",
          "sub": "Loại 3: thực tế đã không kiểm, và đã sai. Công thức: if + had done, vế sau would have done.",
          "keys": [
            "would have done"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "My message to the boss: If I would have known, I would have called you.",
          "sub": "Em nhắn sếp thế này: If I would have known, I would have called you.",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The classic mistake! Would never sits after if: If I had known, I would have called you.",
          "sub": "Lỗi phổ biến nhất! Would không ngồi ở vế if. Viết: If I had known, I would have called you.",
          "keys": [
            "vế if"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Or fast, like a native: If I'd known, I'd have called you.",
          "sub": "Nói nhanh kiểu bản xứ: If I'd known, I'd have called you.",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "The first I'd is had, the second is would. And would have means a missed chance.",
          "sub": "I'd đầu là had, I'd sau là would; cứ dựa vào vị trí. Còn would have là chuyện đã lỡ.",
          "keys": [
            "chuyện đã lỡ"
          ]
        }
      ],
      "ref": "p15,p16,p17,p19"
    },
    {
      "id": "b16",
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
            "id": "h-mix",
            "t": "text",
            "text": "Trộn: had V3 → would be…",
            "x": 3996,
            "y": 1780,
            "size": 46,
            "at": "l1:studied",
            "color": "muted",
            "hl": [
              {
                "text": "would be",
                "at": "l1:would"
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
          "say": "Past condition, present result? Mix them: If I had studied accounting, I would be working at a bank now.",
          "sub": "Điều kiện ở quá khứ, kết quả ở hiện tại thì trộn: If I had studied accounting, I would be working at a bank now. Chỉ cần nghe là nhận ra.",
          "keys": [
            "nghe là nhận ra"
          ]
        }
      ],
      "ref": "p20"
    },
    {
      "id": "b17",
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
            "at": "a1",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Chiều thứ Năm: khách giận",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:thursday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "face": "worried"
                }
              ],
              "left": {
                "label": "Cách A: loại 3",
                "ok": false
              },
              "right": {
                "label": "Cách B: loại 1",
                "ok": true
              }
            },
            "at": "l1:meet",
            "caption": "Chiều thứ Năm · cửa hàng",
            "icon": "handshake"
          },
          {
            "id": "i-a",
            "t": "text",
            "text": "A: If you had given… → trách",
            "x": 5964,
            "y": 1280,
            "size": 46,
            "at": "l2:a",
            "color": "coral",
            "hl": [
              {
                "text": "trách",
                "at": "l2:blame"
              }
            ]
          },
          {
            "id": "i-b",
            "t": "text",
            "text": "B: If you confirm… → giúp",
            "x": 5964,
            "y": 1370,
            "size": 46,
            "at": "l2:b",
            "color": "accent",
            "hl": [
              {
                "text": "giúp",
                "at": "l2:help"
              }
            ]
          },
          {
            "id": "i-me",
            "t": "text",
            "text": "Hướng về mình → bài học",
            "x": 5964,
            "y": 1510,
            "size": 52,
            "at": "l3:yourself",
            "hl": [
              {
                "text": "bài học",
                "at": "l3:lesson"
              }
            ]
          },
          {
            "id": "i-you",
            "t": "text",
            "text": "Hướng về khách → lời trách",
            "x": 5964,
            "y": 1590,
            "size": 52,
            "at": "l4:client",
            "color": "coral",
            "hl": [
              {
                "text": "lời trách",
                "at": "l4:blame"
              }
            ]
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Với khách: nói bước tiếp theo",
            "x": 5964,
            "y": 1700,
            "size": 54,
            "at": "l4:next",
            "color": "accent",
            "hl": [
              {
                "text": "bước tiếp theo",
                "at": "l4:step"
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
          "say": "Seventh stop, Thursday afternoon. Meet Bác Bình, a client. Late order, because he wrote the wrong address.",
          "sub": "Chặng bảy: chiều thứ Năm. Đây là Bác Bình, khách hàng. Đơn giao trễ vì chính bác ghi sai địa chỉ."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "thao",
          "say": "If you had given us the correct address, we would have delivered on time.",
          "sub": "If you had given us the correct address, we would have delivered on time.",
          "phase": "a",
          "pose": "point",
          "react": {
            "binh": "sad"
          }
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "thao",
          "say": "Thanks for updating the address. If you confirm it today, we'll deliver tomorrow.",
          "sub": "Thanks for updating the address. If you confirm it today, we'll deliver tomorrow.",
          "phase": "b",
          "pose": "explain",
          "face": "happy",
          "react": {
            "binh": "happy"
          }
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A points at his mistake: blame. B points at the next step: help.",
          "sub": "Cách A đúng ngữ pháp nhưng chỉ vào lỗi cũ: bác thấy bị trách. Cách B chỉ bước tiếp theo: bác thấy được giúp.",
          "keys": [
            "bị trách",
            "được giúp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "On yourself, type three is a lesson: If I had checked earlier, we wouldn't have missed it.",
          "sub": "Loại 3 hướng về mình là bài học: If I had checked earlier, we wouldn't have missed it.",
          "keys": [
            "bài học"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Aimed at a client, it's blame. Talk about the next step.",
          "sub": "Chĩa vào khách, If you had told us earlier…, thành lời trách. Hãy nói bước tiếp theo.",
          "keys": [
            "lời trách"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1500
        }
      ],
      "ref": "p21,p22,p23"
    },
    {
      "id": "b19",
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
            "at": "l5",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "⑧ Tối thứ Năm: ba câu",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:thursday"
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
                  "pose": "think"
                }
              ],
              "props": [
                "open-book"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "push"
                }
              ]
            },
            "at": "l1:warms",
            "caption": "Tối thứ Năm · ở nhà",
            "icon": "open-book"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Đang chờ: get → ’ll move",
            "x": 7932,
            "y": 1260,
            "size": 48,
            "at": "l2:waiting",
            "hl": [
              {
                "text": "get",
                "at": "l2:get"
              },
              {
                "text": "’ll move",
                "at": "l2:move"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Khả năng thấp: got → would",
            "x": 7932,
            "y": 1340,
            "size": 48,
            "at": "l3:low",
            "hl": [
              {
                "text": "got",
                "at": "l3:got"
              },
              {
                "text": "would",
                "at": "l3:would"
              }
            ]
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Đã trượt: had got → would have",
            "x": 7932,
            "y": 1420,
            "size": 48,
            "at": "l4:failed",
            "hl": [
              {
                "text": "had got",
                "at": "l4:had"
              },
              {
                "text": "would have",
                "at": "l4:would"
              }
            ]
          },
          {
            "id": "j-ck",
            "t": "text",
            "text": "Trước khi gửi:",
            "x": 7932,
            "y": 1510,
            "size": 50,
            "at": "l5:sending"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1590,
            "w": 44,
            "h": 44,
            "stroke": 5,
            "at": "l5:will"
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1572,
            "size": 56,
            "color": "accent",
            "at": "l5:will+500"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Vế if: không will/would",
            "x": 8002,
            "y": 1586,
            "size": 44,
            "at": "l5:will+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1656,
            "w": 44,
            "h": 44,
            "stroke": 5,
            "at": "l5:type"
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1638,
            "size": 56,
            "color": "accent",
            "at": "l5:type+500"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Đúng loại = mức có thật",
            "x": 8002,
            "y": 1652,
            "size": 44,
            "at": "l5:type+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1722,
            "w": 44,
            "h": 44,
            "stroke": 5,
            "at": "l5:blame"
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1704,
            "size": 56,
            "color": "accent",
            "at": "l5:blame+500"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Loại 3: có trách ai?",
            "x": 8002,
            "y": 1718,
            "size": 44,
            "at": "l5:blame+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1788,
            "w": 44,
            "h": 44,
            "stroke": 5,
            "at": "l5:unless"
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1770,
            "size": 56,
            "color": "accent",
            "at": "l5:unless+500"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "unless = nếu không",
            "x": 8002,
            "y": 1784,
            "size": 44,
            "at": "l5:unless+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Last stop: Thursday night. Thảo warms up like a singer: one topic, three sentences.",
          "sub": "Chặng cuối: tối thứ Năm. Thảo luyện như ca sĩ khởi động giọng: một chủ đề, ba câu.",
          "keys": [
            "một chủ đề, ba câu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Still waiting: If I get the job, I'll move to Da Nang.",
          "sub": "Đang chờ kết quả: If I get the job, I'll move to Da Nang.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Low chances: If I got the job, I would move to Da Nang.",
          "sub": "Khả năng thấp: If I got the job, I would move to Da Nang."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Already failed: If I had got the job, I would have moved to Da Nang.",
          "sub": "Đã trượt: If I had got the job, I would have moved to Da Nang.",
          "face": "sad"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Before sending: no will after if, the right type, no blame, and unless means if not.",
          "sub": "Trước khi gửi: vế if không will, would; đúng loại; không trách ai; unless là “nếu không”.",
          "keys": [
            "Trước khi gửi"
          ]
        }
      ],
      "ref": "p25,p26"
    },
    {
      "id": "b21",
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
            "at": "l1:one",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:two",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:three",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l3:rule",
            "fit": "B",
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
            "id": "f-1",
            "t": "badge",
            "n": 1,
            "x": 7404,
            "y": 30,
            "at": "l1:one"
          },
          {
            "id": "f-2",
            "t": "badge",
            "n": 2,
            "x": 1500,
            "y": 1120,
            "at": "l2:two"
          },
          {
            "id": "f-3",
            "t": "badge",
            "n": 3,
            "x": 5436,
            "y": 1120,
            "at": "l3:three"
          },
          {
            "id": "f-r",
            "t": "ring",
            "around": [
              "b-r1",
              "b-r2"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:further"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Type one, ready to use: If you have any questions, let me know. If we finish early, we'll call you.",
          "sub": "Loại 1, dùng ngay: If you have any questions, let me know. If we finish early, we'll call you.",
          "keys": [
            "Loại 1"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Type two, imagined or polite: If I were you, I'd take the offer.",
          "sub": "Loại 2, giả định hay lịch sự: If I were you, I'd take the offer.",
          "keys": [
            "Loại 2"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Type three, for yourself only. And one rule: the further from reality, the further back the verb goes.",
          "sub": "Loại 3 chỉ dùng cho mình. Và một quy tắc: càng xa sự thật, động từ càng lùi về quá khứ.",
          "keys": [
            "càng xa sự thật"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p24,p1,outro"
    },
    {
      "id": "s32",
      "module": "QUIZ-01",
      "ref": "questions[22]",
      "data": {
        "q": "A partner says if you'd sent it on Monday, we'd have approved it, was it approved?",
        "options": [
          "Yes, the word approved shows that the partner has already accepted it",
          "Not yet, but it will surely be approved if you wait until Monday",
          "No, the third type describes a result that did not happen in the past"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "file-folder",
        "why": "Câu loại 3 nói về điều đã không xảy ra: không gửi thứ Hai nên đã không được duyệt."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A partner says if you'd sent it on Monday, we'd have approved it, was it approved?",
          "sub": "Đối tác nói if you'd sent it on Monday, we'd have approved it, hồ sơ đã được duyệt chưa?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No, the third type describes a result that did not happen in the past.",
          "sub": "Chưa. Loại 3 nói về kết quả đã không xảy ra."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "You'd sent is had sent. We'd have approved is would have approved. It was not sent on Monday, so it was not approved.",
          "sub": "You'd sent là had sent, we'd have approved là would have approved: không gửi thứ Hai nên chưa được duyệt."
        }
      ]
    },
    {
      "id": "b22",
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
              "a-call2"
            ],
            "zoom": 1.35,
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "a-call2",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
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
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "sam",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Chiều thứ Sáu · cuộc gọi",
            "icon": "telephone-receiver"
          },
          {
            "id": "a-qx",
            "t": "strike",
            "over": "a-q",
            "at": "l1:imagined"
          },
          {
            "id": "a-no",
            "t": "text",
            "text": "→ Chưa duyệt",
            "x": 380,
            "y": 590,
            "size": 60,
            "at": "l1:not",
            "color": "accent",
            "hl": [
              {
                "text": "Chưa",
                "at": "l1:monday"
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
          "say": "Back to Friday. Approved was only imagined: the bid went out Wednesday, not Monday.",
          "sub": "Quay lại thứ Sáu. Approved chỉ là kết quả tưởng tượng: hồ sơ gửi thứ Tư, không phải thứ Hai.",
          "keys": [
            "kết quả tưởng tượng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I see. Is there anything we can still do?",
          "sub": "Dạ, vậy bên mình còn cách nào khắc phục không ạ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Good question. Let's talk about the next step.",
          "sub": "Hỏi hay đấy. Mình bàn bước tiếp theo nhé.",
          "face": "happy"
        }
      ]
    },
    {
      "id": "s34",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi điều kiện đang chờ bạn",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Write three sentences, one for each type, and read them aloud. Then try the forty questions!",
          "sub": "Viết ba câu theo ba loại rồi đọc to. Sau đó làm bốn mươi câu bên dưới nhé!",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "b01",
    "close": "b22"
  }
};
