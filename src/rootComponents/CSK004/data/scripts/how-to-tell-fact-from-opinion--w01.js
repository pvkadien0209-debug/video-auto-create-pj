// Kịch bản video W lần 3 (#110) — "Cách phân biệt sự thật và ý kiến khi đọc tin, nghe người khác nói" · chuỗi "Tư duy phản biện"
// Giọng đọc tiếng Anh, phụ đề tiếng Việt; hoạt hình + thẻ. Đủ ý cho 40 câu bài tập.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-tell-fact-from-opinion--w01",
  "hook": "HOOK-01",
  "unit": {
    "audience": "everyday-information-readers",
    "slug": "how-to-tell-fact-from-opinion",
    "door": "ky-nang",
    "level": "B1",
    "title": "Cách phân biệt sự thật và ý kiến khi đọc tin, nghe người khác nói",
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
            "id": "a-1",
            "t": "text",
            "text": "“Quán này bẩn lắm, ai cũng biết”",
            "x": 60,
            "y": 50,
            "size": 54,
            "at": "l1:filthy",
            "color": "coral"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "“Giá điện tăng, rõ ràng vô lý”",
            "x": 60,
            "y": 140,
            "size": 54,
            "at": "l1:electricity",
            "color": "coral"
          },
          {
            "id": "a-n",
            "t": "text",
            "text": "Tin phần nào?",
            "x": 60,
            "y": 250,
            "size": 110,
            "at": "l2:which part",
            "color": "accent",
            "hl": [
              {
                "text": "phần nào?",
                "at": "l2:believe"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Nói có sách, mách có chứng”",
            "x": 60,
            "y": 430,
            "size": 52,
            "at": "l3:book",
            "hl": [
              {
                "text": "có chứng",
                "at": "l3:proof"
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
          "say": "This place is filthy, everyone knows. Electricity went up, clearly unfair.",
          "sub": "“Quán này bẩn lắm, ai cũng biết.” “Giá điện tăng, rõ ràng là vô lý.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "We hear dozens of these a day. Which part should we believe?",
          "sub": "Mỗi ngày ta nghe hàng chục câu như thế. Nên tin phần nào?",
          "keys": [
            "tin phần nào"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Grandma's rule: speak with a book, tell with proof.",
          "sub": "Ông bà dặn: “Nói có sách, mách có chứng.”",
          "keys": [
            "Nói có sách, mách có chứng"
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
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "birthday-cake",
                "mobile-phone"
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Hai · đặt tiệc sinh nhật mẹ",
            "icon": "birthday-cake"
          },
          {
            "id": "a-rv",
            "t": "text",
            "text": "“Bẩn kinh khủng, ai cũng đau”",
            "x": 60,
            "y": 560,
            "size": 40,
            "at": "l3:filthy",
            "color": "coral"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Huỷ tiệc?",
            "x": 60,
            "y": 640,
            "size": 60,
            "at": "l3:cancel",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Lan.",
          "sub": "Đây là Lan."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Office worker, calm, the family's unofficial fact checker. Tonight she books Mum's birthday dinner.",
          "sub": "Dân văn phòng, điềm tĩnh, “kiểm chứng viên” không chính thức của nhà. Tối nay Lan đặt tiệc sinh nhật mẹ.",
          "keys": [
            "kiểm chứng viên"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Wait. A review says this place is filthy and everyone gets sick. Should I cancel?",
          "sub": "Ơ. Có bài bảo quán này bẩn kinh khủng, ai ăn cũng đau bụng. Huỷ không nhỉ?",
          "face": "worried"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "intro,p6"
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
            "text": "Sự thật hay ý kiến?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:fact",
            "hl": [
              {
                "text": "Sự thật",
                "at": "l1:fact"
              }
            ]
          },
          {
            "id": "b-how",
            "t": "text",
            "text": "“Kiểm tra bằng cách nào?”",
            "x": 2028,
            "y": 150,
            "size": 64,
            "at": "l1:check",
            "color": "accent",
            "hl": [
              {
                "text": "bằng cách nào?",
                "at": "l1:how"
              }
            ]
          },
          {
            "id": "b-f",
            "t": "text",
            "text": "Sự thật: giấy tờ, số đo",
            "x": 2028,
            "y": 265,
            "size": 46,
            "at": "l2:papers"
          },
          {
            "id": "b-o",
            "t": "text",
            "text": "Ý kiến: nhận định, cảm nhận",
            "x": 2028,
            "y": 340,
            "size": 46,
            "at": "l3:judgement",
            "color": "coral"
          },
          {
            "id": "b-rain",
            "t": "text",
            "text": "“Hôm qua mưa ở đây” → kiểm được",
            "x": 2868,
            "y": 265,
            "size": 42,
            "at": "l4:rained"
          },
          {
            "id": "b-wr",
            "t": "text",
            "text": "nắng → sự thật bị nói sai",
            "x": 2908,
            "y": 335,
            "size": 40,
            "at": "l4:sunny",
            "color": "muted",
            "hl": [
              {
                "text": "nói sai",
                "at": "l4:wrong"
              }
            ]
          },
          {
            "id": "b-val",
            "t": "text",
            "text": "Ý kiến có lý do → đáng nghe",
            "x": 2028,
            "y": 430,
            "size": 46,
            "at": "l5:experienced",
            "hl": [
              {
                "text": "đáng nghe",
                "at": "l5:worth"
              }
            ]
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "1 tuần, 7 chặng",
            "x": 2028,
            "y": 540,
            "size": 46,
            "at": "l6:week"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l6:stops+300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2263,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l6:stops+520",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2498,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l6:stops+740",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2733,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l6:stops+960",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l6:stops+1180",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l6:stops+1400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3438,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l6:stops+1620",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2",
            "x": 2093,
            "y": 628,
            "size": 48,
            "at": "l6:stops+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T3",
            "x": 2328,
            "y": 628,
            "size": 48,
            "at": "l6:stops+640"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T4",
            "x": 2563,
            "y": 628,
            "size": 48,
            "at": "l6:stops+860"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T5",
            "x": 2798,
            "y": 628,
            "size": 48,
            "at": "l6:stops+1080"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T6",
            "x": 3033,
            "y": 628,
            "size": 48,
            "at": "l6:stops+1300"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T7",
            "x": 3268,
            "y": 628,
            "size": 48,
            "at": "l6:stops+1520"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "CN",
            "x": 3503,
            "y": 628,
            "size": 48,
            "at": "l6:stops+1740"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fact or opinion? One question sorts them: how could I check this, if I wanted to?",
          "sub": "Sự thật hay ý kiến? Một câu hỏi phân loại: nếu muốn, mình kiểm tra điều này bằng cách nào?",
          "keys": [
            "bằng cách nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A fact can be checked: papers, measurements, original photos, your own eyes.",
          "sub": "Sự thật kiểm chứng được: giấy tờ, số đo, hình ảnh gốc, quan sát.",
          "keys": [
            "kiểm chứng được"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "An opinion is a judgement or a feeling. Reasonable or not, it can't be proven true.",
          "sub": "Ý kiến là nhận định, cảm nhận. Hợp lý hay không, nó không “chứng minh đúng” được.",
          "keys": [
            "nhận định, cảm nhận"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It rained here yesterday is checkable. If it was sunny, it's a fact claim, told wrong.",
          "sub": "Cẩn thận: “Hôm qua trời mưa ở đây” kiểm tra được. Hôm qua nắng thì đó là sự thật bị nói sai.",
          "keys": [
            "sự thật bị nói sai"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Opinions aren't worthless. Experienced advice with reasons is worth hearing. Just ask: based on what?",
          "sub": "Ý kiến không vô giá trị. Lời khuyên có kinh nghiệm, có lý do, rất đáng nghe. Chỉ cần hỏi: dựa vào đâu?",
          "keys": [
            "dựa vào đâu"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Now, Lan's week, in seven stops.",
          "sub": "Giờ theo Lan một tuần, bảy chặng."
        }
      ],
      "ref": "intro,p1,p2,p3"
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
          },
          {
            "at": "l1:stop one",
            "fit": [
              "c-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Tối thứ Hai · Soi bài chê",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:stop one"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "fork-and-knife-with-plate"
              ]
            },
            "at": "l1:monday",
            "caption": "Tối thứ Hai · đọc nhận xét quán",
            "icon": "fork-and-knife-with-plate"
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 170,
            "w": 50,
            "h": 50,
            "at": "l2:best",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 152,
            "size": 62,
            "at": "l2:best+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Đánh giá: tốt nhất, tệ",
            "x": 4071,
            "y": 162,
            "size": 40,
            "at": "l2:best+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 245,
            "w": 50,
            "h": 50,
            "at": "l2:clearly",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 227,
            "size": 62,
            "at": "l2:clearly+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Tuyệt đối: rõ ràng, ai cũng biết",
            "x": 4071,
            "y": 237,
            "size": 40,
            "at": "l2:clearly+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 320,
            "w": 50,
            "h": 50,
            "at": "l3:will",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 302,
            "size": 62,
            "at": "l3:will+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Dự đoán: sẽ, sớm muộn",
            "x": 4071,
            "y": 312,
            "size": 40,
            "at": "l3:will+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 395,
            "w": 50,
            "h": 50,
            "at": "l3:should",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 377,
            "size": 62,
            "at": "l3:should+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Nên, phải: phải cấm",
            "x": 4071,
            "y": 387,
            "size": 40,
            "at": "l3:should+200"
          },
          {
            "id": "c-fx",
            "t": "text",
            "text": "Sự thật: ngày, nơi, tên, văn bản",
            "x": 3996,
            "y": 480,
            "size": 42,
            "at": "l4:dates",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one: Monday. Lan studies the review like a detective.",
          "sub": "Chặng một: tối thứ Hai. Lan soi bài chê như thám tử."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Opinion signals: judging words like best or awful, absolute words like clearly or everyone knows.",
          "sub": "Dấu hiệu ý kiến: từ đánh giá như tốt nhất, tệ; từ tuyệt đối như rõ ràng, ai cũng biết.",
          "keys": [
            "Dấu hiệu ý kiến"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Predictions like will, and should or must, like it must be banned.",
          "sub": "Từ dự đoán như “sẽ”, và từ nên, phải, như “phải cấm”."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Facts carry dates, places, names, documents, concrete actions. The shop closed on Monday.",
          "sub": "Sự thật có ngày tháng, địa điểm, tên người, văn bản, hành động cụ thể: “Cửa hàng đóng cửa từ thứ hai.”",
          "keys": [
            "hành động cụ thể"
          ]
        }
      ],
      "ref": "p4,p5"
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
            "id": "c-bad",
            "t": "text",
            "text": "“bẩn kinh khủng” = đánh giá",
            "x": 4836,
            "y": 685,
            "size": 44,
            "at": "l2:filthy",
            "color": "coral"
          },
          {
            "id": "c-all",
            "t": "text",
            "text": "“ai cũng” = nói quá",
            "x": 5366,
            "y": 685,
            "size": 44,
            "at": "l2:everyone",
            "color": "coral"
          },
          {
            "id": "c-no",
            "t": "text",
            "text": "Không ảnh, không ngày, không tên",
            "x": 3996,
            "y": 560,
            "size": 42,
            "at": "l3:no photo",
            "color": "muted"
          },
          {
            "id": "c-rut",
            "t": "text",
            "text": "Chê to vẫn chỉ là ý kiến",
            "x": 3996,
            "y": 650,
            "size": 56,
            "at": "l5:loud",
            "color": "accent",
            "hl": [
              {
                "text": "chỉ là ý kiến",
                "at": "l5:opinion"
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
          "say": "So, which part of that review can Lan check? Almost none.",
          "sub": "Vậy bài chê có phần nào Lan kiểm tra được? Gần như không.",
          "keys": [
            "Gần như không"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Filthy is a judgement. Everyone is an exaggeration.",
          "sub": "“Bẩn kinh khủng” là đánh giá. “Ai cũng” là nói quá."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No photo, no date, no name of anyone sick. Maybe the poster just fought with the owner.",
          "sub": "Không ảnh, không ngày, không tên người bị đau. Có khi người đăng vừa cãi nhau với chủ quán."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Before I cancel, I'll read more reviews, and drop by to see.",
          "sub": "Trước khi huỷ, mình đọc thêm nhận xét khác, rồi ghé xem tận nơi.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "However loud the complaint, it's still just one opinion.",
          "sub": "Chê to tiếng đến đâu vẫn chỉ là một ý kiến.",
          "keys": [
            "vẫn chỉ là một ý kiến"
          ]
        }
      ],
      "ref": "p6,p7"
    },
    {
      "id": "s06",
      "module": "BRK-02",
      "ref": "p2",
      "data": {
        "kicker": "Nhớ nhé",
        "title": "Câu sai vẫn có thể là sự thật",
        "hl": "là sự thật",
        "sub": "Kiểm tra được thì là khẳng định về sự thật, dù đúng hay sai"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A false sentence can still be a fact claim.",
          "sub": "Câu sai vẫn có thể là khẳng định về sự thật."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Checkable means fact claim, true or false.",
          "sub": "Kiểm tra được thì là sự thật, dù đúng hay sai."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ]
    },
    {
      "id": "s07",
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
            "text": "② Thứ Ba · Câu trộn cả hai",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:stop two"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain",
                  "face": "stern"
                },
                {
                  "id": "lan",
                  "side": "right"
                }
              ],
              "props": [
                "motor-scooter"
              ]
            },
            "at": "l1:tuesday",
            "caption": "Thứ Ba · bãi xe chung cư",
            "icon": "motor-scooter"
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 170,
            "w": 50,
            "h": 50,
            "at": "l4:copy",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 152,
            "size": 62,
            "at": "l4:copy+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Chép lại câu",
            "x": 6039,
            "y": 162,
            "size": 42,
            "at": "l4:copy+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 245,
            "w": 50,
            "h": 50,
            "at": "l4:underline",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 227,
            "size": 62,
            "at": "l4:underline+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Gạch chân phần kiểm được",
            "x": 6039,
            "y": 237,
            "size": 42,
            "at": "l4:underline+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 320,
            "w": 50,
            "h": 50,
            "at": "l5:source",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 302,
            "size": 62,
            "at": "l5:source+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Phần đó: hỏi nguồn",
            "x": 6039,
            "y": 312,
            "size": 42,
            "at": "l5:source+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 395,
            "w": 50,
            "h": 50,
            "at": "l5:why",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 377,
            "size": 62,
            "at": "l5:why+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Phần nhận định: hỏi lý do",
            "x": 6039,
            "y": 387,
            "size": 42,
            "at": "l5:why+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two: Tuesday. Most everyday sentences mix both.",
          "sub": "Chặng hai: thứ Ba. Hầu hết câu nói hằng ngày trộn cả hai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Like this one from Bác Bình, Lan's uncle, the building's loudest resident.",
          "sub": "Như câu của bác Bình, bác của Lan, cư dân to tiếng nhất chung cư.",
          "keys": [
            "bác Bình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Parking fees went up this month. Clearly the managers just want profit!",
          "sub": "Phí gửi xe tăng từ tháng này. Rõ ràng ban quản lý muốn kiếm lời!",
          "face": "stern",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Four steps to split it. Copy the sentence. Underline the checkable part.",
          "sub": "Bốn bước tách. Chép lại câu. Gạch chân phần kiểm tra được.",
          "keys": [
            "Gạch chân"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "For that part, ask the source: where's this from? For the rest, ask why: why do you think so?",
          "sub": "Phần đó hỏi nguồn: “Số này lấy từ đâu?” Phần nhận định hỏi lý do: “Vì sao bác thấy vậy?”",
          "keys": [
            "hỏi nguồn",
            "hỏi lý do"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "s08",
      "module": "DLG-01",
      "ref": "p9,p17",
      "data": {
        "set": "street",
        "label": "Thứ Ba · bãi xe chung cư",
        "actors": [
          {
            "id": "binh",
            "side": "left"
          },
          {
            "id": "lan",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Tin cả câu một lúc",
          "why": "Phí tăng kiểm tra được qua thông báo; “muốn kiếm lời” là đoán ý định, cần bằng chứng riêng.",
          "rule": "Phần sự thật hỏi nguồn, phần nhận định hỏi lý do"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "binh",
          "say": "Fees up again. They just want profit!",
          "sub": "Phí lại tăng. Họ chỉ muốn kiếm lời!",
          "pose": "explain",
          "face": "stern"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Totally! Let's write an angry post!",
          "sub": "Chuẩn luôn! Viết bài bóc phốt đi bác!",
          "face": "stern",
          "pose": "point",
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
          "say": "The fee is checkable. Wanting profit is a guess.",
          "sub": "Phí tăng kiểm tra được. “Muốn kiếm lời” là đoán.",
          "keys": [
            "đoán"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! With an elder, no debate. Just ask for the source.",
          "sub": "Tua lại! Với người lớn, không cần tranh luận. Chỉ cần hỏi nguồn.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "lan",
          "say": "Where did you read it, Bác? I'd like to see more.",
          "sub": "Bác đọc ở đâu ạ, con muốn xem thêm.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "binh",
          "say": "The notice is downstairs. The rest... my guess.",
          "sub": "Thông báo dán dưới sảnh. Còn lại… bác đoán.",
          "phase": "redo",
          "face": "thinking",
          "pose": "think"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      }
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
            "id": "d-ok",
            "t": "text",
            "text": "“Phí tăng” → thông báo",
            "x": 5964,
            "y": 500,
            "size": 46,
            "at": "l1:notice"
          },
          {
            "id": "d-gs",
            "t": "text",
            "text": "“muốn kiếm lời” → đoán ý định",
            "x": 5964,
            "y": 570,
            "size": 46,
            "at": "l1:profit",
            "color": "coral",
            "hl": [
              {
                "text": "đoán ý định",
                "at": "l1:evidence"
              }
            ]
          },
          {
            "id": "d-ask",
            "t": "text",
            "text": "“Bác đọc ở đâu ạ?”",
            "x": 6804,
            "y": 685,
            "size": 50,
            "at": "l2:where",
            "color": "accent",
            "hl": [
              {
                "text": "ở đâu",
                "at": "l2:where"
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
          "say": "The fee is in the notice. The profit motive needs its own evidence.",
          "sub": "Phí tăng có thông báo. Chuyện “muốn kiếm lời” cần bằng chứng riêng.",
          "keys": [
            "bằng chứng riêng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Where did you read it? I'd like to see more. Now you both look at the source.",
          "sub": "“Bác đọc ở đâu ạ, con muốn xem thêm.” Thế là hai bác cháu cùng nhìn vào nguồn.",
          "keys": [
            "cùng nhìn vào nguồn"
          ]
        }
      ],
      "ref": "p9,p17"
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
            "text": "③ Thứ Tư · Nhóm chat công ty",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:stop three"
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
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "phone",
                  "face": "stern"
                }
              ],
              "props": [
                "mobile-phone",
                "money-bag"
              ]
            },
            "at": "l1:wednesday",
            "caption": "Thứ Tư · văn phòng của Dũng",
            "icon": "money-bag"
          },
          {
            "id": "e-msg",
            "t": "text",
            "text": "“Kế toán cẩu thả, lương lại trễ”",
            "x": 7932,
            "y": 160,
            "size": 44,
            "at": "l2:sloppy",
            "color": "coral"
          },
          {
            "id": "e-fwd",
            "t": "text",
            "text": "Dũng: chuyển tiếp + bực bội",
            "x": 7932,
            "y": 235,
            "size": 44,
            "at": "l4:forwards",
            "color": "muted"
          },
          {
            "id": "e-real",
            "t": "text",
            "text": "Thật ra: trễ 1 ngày, nghỉ lễ",
            "x": 7932,
            "y": 330,
            "size": 48,
            "at": "l5:one day",
            "hl": [
              {
                "text": "trễ 1 ngày",
                "at": "l5:one day"
              }
            ]
          },
          {
            "id": "e-ann",
            "t": "text",
            "text": "+ đã báo từ trước",
            "x": 7932,
            "y": 405,
            "size": 44,
            "at": "l5:announced",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three: Wednesday. Lan's cousin Dũng is having a day.",
          "sub": "Chặng ba: thứ Tư. Dũng, anh họ của Lan, đang có một ngày… nóng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Someone posts in his company chat: accounting is sloppy, salary is late again.",
          "sub": "Ai đó nhắn vào nhóm chat công ty: “Phòng kế toán cẩu thả, lương tháng này lại trễ.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Typical! Forwarding this. Somebody has to say it!",
          "sub": "Đúng là! Chuyển tiếp luôn. Phải có người lên tiếng chứ!",
          "face": "stern",
          "pose": "point"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Dũng forwards it with a few angry lines.",
          "sub": "Dũng chuyển tiếp, kèm vài câu bực bội."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Turns out: salary was one day late, because of a public holiday. Announced in advance.",
          "sub": "Hoá ra lương trễ đúng một ngày vì trùng ngày nghỉ lễ, đã có thông báo từ trước."
        }
      ],
      "ref": "p10"
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
          }
        ],
        "items": [
          {
            "id": "e-boss",
            "t": "text",
            "text": "Trưởng phòng nhắn riêng: gỡ tin",
            "x": 7932,
            "y": 500,
            "size": 44,
            "at": "l1:manager"
          },
          {
            "id": "e-rut",
            "t": "text",
            "text": "Chuyện có thật ≠ lời bình đúng",
            "x": 7932,
            "y": 600,
            "size": 52,
            "at": "l2:true story",
            "color": "accent",
            "hl": [
              {
                "text": "≠ lời bình đúng",
                "at": "l2:comment"
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
          "say": "That afternoon his manager messages him privately: please take the post down.",
          "sub": "Chiều đó trưởng phòng nhắn riêng, nhờ Dũng gỡ tin đã chuyển tiếp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A true story doesn't make the comment true. Late, yes. Sloppy? That was an opinion.",
          "sub": "Chuyện có thật chưa chắc lời bình đã đúng. Trễ: có. Cẩu thả? Đó là ý kiến.",
          "keys": [
            "chưa chắc lời bình đã đúng"
          ]
        }
      ],
      "ref": "p10,p11"
    },
    {
      "id": "s12",
      "module": "BRK-03",
      "ref": "p13",
      "data": {
        "from": 2,
        "value": 4,
        "suffix": " ca",
        "label": "từ hai lên bốn ca: cũng là gấp đôi",
        "illus": "bar-chart"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Two cases become four.",
          "sub": "Hai ca lên bốn ca."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Technically, that's also doubled.",
          "sub": "Về lý thuyết, thế cũng là gấp đôi."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "nhan"
        }
      ]
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
            "at": "l3",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Năm · Tiêu đề “gấp đôi”",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:stop four"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "kitchen",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "newspaper",
                "microbe"
              ]
            },
            "at": "l1:thursday",
            "caption": "Thứ Năm · bếp nhà cô Hoa",
            "icon": "newspaper"
          },
          {
            "id": "f-hd",
            "t": "text",
            "text": "“Ca bệnh tăng gấp đôi”",
            "x": 60,
            "y": 1250,
            "size": 40,
            "at": "l1:cases",
            "color": "coral"
          },
          {
            "id": "f-num",
            "t": "text",
            "text": "Có số = kiểm được, chưa chắc đúng",
            "x": 60,
            "y": 1330,
            "size": 42,
            "at": "l3:checkable",
            "hl": [
              {
                "text": "chưa chắc đúng",
                "at": "l3:true"
              }
            ]
          },
          {
            "id": "f-3q",
            "t": "text",
            "text": "Từ đâu? Lúc nào? So với gì?",
            "x": 60,
            "y": 1415,
            "size": 50,
            "at": "l4:where from",
            "color": "accent",
            "hl": [
              {
                "text": "So với gì?",
                "at": "l4:compared"
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
          "say": "Stop four: Thursday. Lan's mum, Cô Hoa, reads a headline: cases in our ward have doubled.",
          "sub": "Chặng bốn: thứ Năm. Mẹ Lan, cô Hoa, đọc tiêu đề: “Số ca bệnh ở phường tăng gấp đôi.”",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Doubled! Nobody leaves this house for a month!",
          "sub": "Gấp đôi! Cả nhà ở yên trong nhà một tháng!",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A number tells you it's checkable, not that it's true. It can be wrong, old, or cut from context.",
          "sub": "Con số cho biết câu đó kiểm tra được, chưa cho biết nó đúng. Số có thể sai, cũ, hoặc bị cắt khỏi bối cảnh.",
          "keys": [
            "chưa cho biết nó đúng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Ask: where from, measured when, compared to what?",
          "sub": "Hãy hỏi: số từ đâu, đo lúc nào, so với cái gì?",
          "keys": [
            "so với cái gì"
          ]
        }
      ],
      "ref": "p12,p13"
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
            "id": "f-r",
            "t": "text",
            "text": "Gấp đôi = tỉ lệ ≠ quy mô",
            "x": 60,
            "y": 1520,
            "size": 44,
            "at": "l1:ratio",
            "hl": [
              {
                "text": "≠ quy mô",
                "at": "l1:size"
              }
            ]
          },
          {
            "id": "f-24",
            "t": "text",
            "text": "2 → 4",
            "x": 60,
            "y": 1600,
            "size": 70,
            "at": "l2:two",
            "color": "accent"
          },
          {
            "id": "f-1k",
            "t": "text",
            "text": "1.000 → 2.000",
            "x": 300,
            "y": 1600,
            "size": 70,
            "at": "l2:thousand",
            "color": "coral"
          },
          {
            "id": "f-wash",
            "t": "text",
            "text": "Lời khuyên: rửa tay, vệ sinh",
            "x": 900,
            "y": 1775,
            "size": 40,
            "at": "l3:wash"
          },
          {
            "id": "f-rut",
            "t": "text",
            "text": "Thấy “gấp đôi”: hỏi “từ bao nhiêu?”",
            "x": 60,
            "y": 1730,
            "size": 46,
            "at": "l4:doubled",
            "color": "accent",
            "hl": [
              {
                "text": "từ bao nhiêu?",
                "at": "l4:from how many"
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
          "say": "Doubled is a ratio, not a size.",
          "sub": "“Gấp đôi” nói về tỉ lệ, không nói về quy mô.",
          "keys": [
            "tỉ lệ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two to four is doubled. So is one thousand to two thousand.",
          "sub": "Hai lên bốn là gấp đôi. Một nghìn lên hai nghìn cũng là gấp đôi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Inside, the health office just says: wash hands, keep things clean. No house arrest needed.",
          "sub": "Đọc vào bài, cơ quan y tế chỉ khuyên rửa tay, giữ vệ sinh. Chưa cần “giam” cả nhà.",
          "keys": [
            "rửa tay, giữ vệ sinh"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "See doubled? Ask right away: doubled from how many?",
          "sub": "Thấy “gấp đôi”, hỏi ngay: “từ bao nhiêu?”",
          "keys": [
            "từ bao nhiêu"
          ]
        }
      ],
      "ref": "p13,p14"
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
            "at": "l3:end",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Sáu · Nghe người khác nói",
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
              "set": "meeting",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "bar-chart"
              ]
            },
            "at": "l1:friday",
            "caption": "Thứ Sáu · họp phòng",
            "icon": "bar-chart"
          },
          {
            "id": "g-no",
            "t": "text",
            "text": "Tin hết / bác hết",
            "x": 2028,
            "y": 1250,
            "size": 56,
            "at": "l2:all",
            "color": "muted"
          },
          {
            "id": "g-nox",
            "t": "strike",
            "over": "g-no",
            "at": "l2:choose"
          },
          {
            "id": "g-yes",
            "t": "text",
            "text": "Nhận dữ kiện, hỏi riêng ý kiến",
            "x": 2028,
            "y": 1340,
            "size": 46,
            "at": "l2:accept",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi riêng",
                "at": "l2:separately"
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
          "say": "Stop five: Friday meeting. A colleague shows numbers, plus a big theory about the cause.",
          "sub": "Chặng năm: họp sáng thứ Sáu. Đồng nghiệp trình bày số liệu, kèm một giả thuyết to về nguyên nhân."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Don't choose between believe it all and reject it all. Accept the clear facts, ask about the opinion separately.",
          "sub": "Đừng chọn giữa tin hết và bác hết. Nhận phần dữ kiện đã rõ, hỏi riêng phần ý kiến.",
          "keys": [
            "hỏi riêng phần ý kiến"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "The numbers look right to me. About the cause, do we have more information?",
          "sub": "Phần số liệu em thấy đúng. Còn phần nguyên nhân, mình có thêm thông tin nào không ạ?",
          "face": "happy",
          "pose": "explain"
        }
      ],
      "ref": "p15"
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
          }
        ],
        "items": [
          {
            "id": "g-ex",
            "t": "text",
            "text": "Chuyên gia nói = vẫn là ý kiến",
            "x": 2028,
            "y": 1490,
            "size": 46,
            "at": "l1:expert",
            "hl": [
              {
                "text": "vẫn là ý kiến",
                "at": "l1:still"
              }
            ]
          },
          {
            "id": "g-exq",
            "t": "text",
            "text": "“Ý này dựa trên kết quả nào?”",
            "x": 2028,
            "y": 1570,
            "size": 48,
            "at": "l2:based",
            "color": "accent"
          },
          {
            "id": "g-eld",
            "t": "text",
            "text": "Người lớn: “Bác đọc ở đâu ạ?”",
            "x": 2868,
            "y": 1775,
            "size": 44,
            "at": "l3:elder"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "An expert's opinion is still an opinion, just better grounded.",
          "sub": "Ý kiến chuyên gia vẫn là ý kiến, dù có cơ sở hơn.",
          "keys": [
            "vẫn là ý kiến"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Gentlest question: what result is this based on?",
          "sub": "Câu hỏi nhẹ nhàng nhất: “Ý này dựa trên kết quả nào vậy anh?”",
          "keys": [
            "dựa trên kết quả nào"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And for an elder at home, like Bác Bình on Tuesday: where did you read it? That's enough.",
          "sub": "Còn với người lớn trong nhà, như bác Bình hôm thứ Ba: “Bác đọc ở đâu ạ?” là đủ."
        }
      ],
      "ref": "p16,p17"
    },
    {
      "id": "s17",
      "module": "BRK-11",
      "ref": "p7,p11,p14",
      "data": {
        "title": "3 điều cần nhớ",
        "items": [
          "Chê to vẫn chỉ là ý kiến",
          "Chuyện thật, lời bình chưa chắc",
          "“Gấp đôi”? Từ bao nhiêu?"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three: doubled? From how many?",
          "sub": "Ba: gấp đôi? Từ bao nhiêu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two: true story, unproven comment.",
          "sub": "Hai: chuyện thật, lời bình chưa chắc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One: loud is still opinion.",
          "sub": "Một: chê to vẫn chỉ là ý kiến."
        }
      ]
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
            "at": "a1",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "a2",
            "fit": "H",
            "ms": 700
          },
          {
            "at": "b1",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "b2",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Bảy · Khi chính mình nói",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:stop six"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "kitchen",
              "actors": [
                {
                  "id": "hoa",
                  "pose": "phone"
                }
              ],
              "left": {
                "label": "Dán nhãn",
                "ok": false
              },
              "right": {
                "label": "Nói việc cụ thể",
                "ok": true
              }
            },
            "at": "l1:saturday",
            "caption": "Thứ Bảy · cô Hoa nhắn chồng",
            "icon": "mobile-phone"
          },
          {
            "id": "h-fe",
            "t": "text",
            "text": "“Anh ấy coi thường tôi” = cảm nhận",
            "x": 3996,
            "y": 1250,
            "size": 40,
            "at": "l2:looks down",
            "color": "coral"
          },
          {
            "id": "h-ev",
            "t": "text",
            "text": "“Ngắt lời tôi 2 lần” = sự việc",
            "x": 3996,
            "y": 1320,
            "size": 40,
            "at": "l2:interrupted",
            "hl": [
              {
                "text": "sự việc",
                "at": "l2:event"
              }
            ]
          },
          {
            "id": "h-bef",
            "t": "text",
            "text": "Trước: “Anh chẳng bao giờ…”",
            "x": 3996,
            "y": 1420,
            "size": 44,
            "at": "a1:never",
            "color": "muted"
          },
          {
            "id": "h-befx",
            "t": "strike",
            "over": "h-bef",
            "at": "a2:angry"
          },
          {
            "id": "h-aft",
            "t": "text",
            "text": "Sau: việc cụ thể + đề nghị rõ",
            "x": 3996,
            "y": 1510,
            "size": 46,
            "at": "b2:agrees",
            "color": "accent",
            "hl": [
              {
                "text": "đề nghị rõ",
                "at": "b2:request"
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
          "say": "Stop six: Saturday. Now the tricky part: our own words.",
          "sub": "Chặng sáu: thứ Bảy. Giờ tới phần khó: lời của chính mình."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "He looks down on me is a feeling. He interrupted me twice is an event.",
          "sub": "“Anh ấy coi thường tôi” là cảm nhận. “Anh ấy ngắt lời tôi hai lần” là sự việc.",
          "keys": [
            "cảm nhận",
            "sự việc"
          ]
        },
        {
          "id": "a0",
          "lang": "en",
          "who": "det",
          "say": "Cô Hoa wants her husband to help more at home.",
          "sub": "Cô Hoa muốn chồng phụ việc nhà nhiều hơn."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "hoa",
          "say": "You never help with the housework.",
          "sub": "Anh chẳng bao giờ phụ việc nhà.",
          "phase": "a",
          "face": "stern"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "det",
          "say": "He replies with a list of everything he did. Angry all evening.",
          "sub": "Chồng nhắn lại cả loạt việc đã làm. Giận nhau cả tối.",
          "phase": "a"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "hoa",
          "say": "I cooked all seven dinners this week. Could you cook tomorrow?",
          "sub": "Tuần này em nấu cơm cả bảy tối, mai anh nấu giúp em nhé?",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "det",
          "say": "He agrees at once. One concrete fact, one clear request.",
          "sub": "Anh đồng ý ngay. Một việc cụ thể, một đề nghị rõ ràng.",
          "phase": "b",
          "keys": [
            "đề nghị rõ ràng"
          ]
        }
      ],
      "ref": "p18,p19"
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
          }
        ],
        "items": [
          {
            "id": "h-rut",
            "t": "text",
            "text": "Nói việc, đừng dán nhãn người",
            "x": 3996,
            "y": 1620,
            "size": 52,
            "at": "l1:label",
            "color": "accent",
            "hl": [
              {
                "text": "đừng dán nhãn",
                "at": "l1:label"
              }
            ]
          },
          {
            "id": "h-th",
            "t": "text",
            "text": "“Theo mình thấy…” → báo trước ý kiến",
            "x": 3996,
            "y": 1715,
            "size": 40,
            "at": "l2:in my view"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A label makes people defend themselves. Say what happened, don't label the person.",
          "sub": "Nhãn dán khiến người nghe phải tự vệ. Nói việc đã xảy ra, đừng dán nhãn con người.",
          "keys": [
            "đừng dán nhãn con người"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And for your own opinion, flag it: in my view, or I think. People can push back more easily.",
          "sub": "Còn ý kiến riêng thì báo trước: “Theo mình thấy…”, “Mình nghĩ…”. Người nghe dễ góp ý lại hơn.",
          "keys": [
            "Theo mình thấy"
          ]
        }
      ],
      "ref": "p20,p21"
    },
    {
      "id": "s20",
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
            "text": "⑦ Chủ nhật · Đúng quán ấy",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "face": "happy"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "face": "happy",
                  "pose": "explain"
                }
              ],
              "props": [
                "birthday-cake",
                "party-popper"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "E-MOVE-01"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-09"
                }
              ]
            },
            "at": "l1:sunday",
            "caption": "Chủ nhật · sinh nhật mẹ",
            "icon": "birthday-cake"
          },
          {
            "id": "i-chk",
            "t": "text",
            "text": "Đọc thêm nhận xét + ghé tận nơi",
            "x": 5964,
            "y": 1260,
            "size": 44,
            "at": "l1:checked"
          },
          {
            "id": "i-op",
            "t": "text",
            "text": "“Theo con thấy, quán ngon!”",
            "x": 5964,
            "y": 1350,
            "size": 50,
            "at": "l2:in my view",
            "color": "accent",
            "hl": [
              {
                "text": "Theo con thấy",
                "at": "l2:in my view"
              }
            ]
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "Nói có sách, mách có… ảnh",
            "x": 5964,
            "y": 1470,
            "size": 54,
            "at": "l4:proof",
            "hl": [
              {
                "text": "có… ảnh",
                "at": "l4:photos"
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
          "say": "Stop seven: Sunday. The birthday dinner, at the same restaurant. Lan checked more reviews, and dropped by.",
          "sub": "Chặng bảy: Chủ nhật. Tiệc sinh nhật ở đúng quán ấy. Lan đã đọc thêm nhận xét, ghé tận nơi.",
          "keys": [
            "đúng quán ấy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "In my view, the food here is lovely. That's my opinion, Mum!",
          "sub": "Theo con thấy, đồ ăn quán này ngon. Ý kiến riêng của con nhé mẹ!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "And the kitchen is clean. I saw it myself.",
          "sub": "Còn bếp sạch thì mẹ tận mắt thấy rồi.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Speak with a book, tell with proof. Today: with photos, and a clean kitchen.",
          "sub": "“Nói có sách, mách có chứng.” Hôm nay: có ảnh, có cả bếp sạch.",
          "keys": [
            "Nói có sách, mách có chứng"
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
      "ref": "p6,p21,outro"
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
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Luyện tuần này",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:practice"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1280,
            "w": 50,
            "h": 50,
            "at": "l1:underline",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1262,
            "size": 62,
            "at": "l1:underline+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Gạch chân sự thật / ý kiến",
            "x": 8007,
            "y": 1272,
            "size": 46,
            "at": "l1:underline+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1375,
            "w": 50,
            "h": 50,
            "at": "l2:advert",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1357,
            "size": 62,
            "at": "l2:advert+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Đếm từ đánh giá trong quảng cáo",
            "x": 8007,
            "y": 1367,
            "size": 46,
            "at": "l2:advert+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1470,
            "w": 50,
            "h": 50,
            "at": "l3:rewrite",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1452,
            "size": 62,
            "at": "l3:rewrite+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Viết lại 1 câu chê chung chung",
            "x": 8007,
            "y": 1462,
            "size": 46,
            "at": "l3:rewrite+200"
          },
          {
            "id": "j-ref",
            "t": "text",
            "text": "Mắt tự “bắt” chữ “ai cũng biết”",
            "x": 7932,
            "y": 1610,
            "size": 50,
            "at": "l4:catch",
            "color": "accent",
            "hl": [
              {
                "text": "tự “bắt”",
                "at": "l4:catch"
              }
            ]
          },
          {
            "id": "j-rx",
            "t": "text",
            "text": "= đã có phản xạ",
            "x": 7932,
            "y": 1700,
            "size": 56,
            "at": "l4:reflex",
            "hl": [
              {
                "text": "phản xạ",
                "at": "l4:reflex"
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
          "say": "Practice this week. Each day, underline three facts and three opinions in one article.",
          "sub": "Luyện tuần này. Mỗi ngày gạch chân ba câu sự thật, ba câu ý kiến trong một bài báo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Read one advert and count the judging words.",
          "sub": "Đọc một quảng cáo, đếm các từ đánh giá."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Rewrite one general complaint as a concrete action.",
          "sub": "Viết lại một câu chê chung chung thành câu mô tả hành động cụ thể."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Soon your eyes catch everyone knows and clearly on their own. That's a reflex.",
          "sub": "Vài lần là mắt tự “bắt” được chữ “ai cũng biết”, “rõ ràng”. Thế là có phản xạ.",
          "keys": [
            "phản xạ"
          ]
        }
      ],
      "ref": "p22,p23"
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
            "at": "l1:how",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l2:source",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:happened",
            "fit": "H",
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
            "x": 2928,
            "y": 150,
            "at": "l1:how"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6664,
            "y": 240,
            "at": "l2:source"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1625,
            "at": "l3:happened"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "h-rut"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:label"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: ask how could I check this. Checkable is a fact claim. The rest is opinion.",
          "sub": "Tóm lại: hỏi “kiểm tra bằng cách nào?”. Kiểm được là sự thật; còn lại là ý kiến.",
          "keys": [
            "kiểm tra bằng cách nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Split mixed sentences: ask the source for facts, the reason for opinions.",
          "sub": "Câu trộn thì tách: sự thật hỏi nguồn, ý kiến hỏi lý do.",
          "keys": [
            "hỏi nguồn",
            "hỏi lý do"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And when you speak, say what happened. Don't label people.",
          "sub": "Còn khi mình nói: nói việc đã xảy ra, đừng dán nhãn người.",
          "keys": [
            "đừng dán nhãn người"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p8,p20"
    },
    {
      "id": "s23",
      "module": "QUIZ-01",
      "ref": "questions[11]",
      "data": {
        "q": "A neighbour says parking fees went up, so the managers just want profit, what is the opinion part?",
        "options": [
          "The part about fees going up, because any sentence about prices is an opinion",
          "Neither part, because a neighbour who lives in the building must know the truth",
          "The part about wanting profit, because it guesses their purpose without proof"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "motor-scooter",
        "why": "“Muốn kiếm lời” là đoán ý định, cần bằng chứng riêng."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A neighbour says parking fees went up, so the managers just want profit. What is the opinion part?",
          "sub": "Hàng xóm nói phí gửi xe tăng nên ban quản lý chỉ muốn kiếm lời. Phần nào là ý kiến?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The part about wanting profit, because it guesses their purpose without proof.",
          "sub": "Phần “muốn kiếm lời”, vì nó đoán ý định mà không có bằng chứng."
        }
      ]
    },
    {
      "id": "s24",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Tách sự thật, hỏi lý do"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fact or opinion? Test yourself with forty questions below.",
          "sub": "Sự thật hay ý kiến? Thử sức với bốn mươi câu hỏi bên dưới."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit #144: Đét đứng trái + bảng trắng 10 ô (5 × 2) đi theo MỘT TUẦN của Lan đặt tiệc sinh nhật mẹ (tối thứ Hai đọc bài chê quán → thứ Ba bác Bình và phí gửi xe + “Khoan đã!” → thứ Tư nhóm chat công ty của Dũng → thứ Năm cô Hoa và tiêu đề “gấp đôi” → thứ Sáu họp phòng → thứ Bảy cô Hoa nhắn chồng → Chủ nhật tiệc ở đúng quán ấy). Nhân vật (4, theo w145/_series): Lan (gộp “bạn” p6, cách hỏi p15–p17), bác Bình (ví dụ p9, người lớn p17), Dũng (Khải p10), cô Hoa (người đọc tiêu đề p13, Nhung p19 — chồng không lên hình). Cảnh ngắt nhịp: BRK-02 (p2), BRK-03 “2 → 4 ca” (p13), BRK-11 ba điều rút ra (p7, p11, p14). Số chỉ lấy từ bài (2→4, 1.000→2.000, bảy tối, hai lần). Khép vòng: “Nói có sách, mách có chứng” → “… có ảnh, có cả bếp sạch”. Bản cũ (W lần 3, #110): w145/bak/how-to-tell-fact-from-opinion--w01.js.",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
