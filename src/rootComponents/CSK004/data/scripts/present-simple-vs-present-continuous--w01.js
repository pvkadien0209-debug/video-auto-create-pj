// Kịch bản video W lần 3 (#110) — "Thì hiện tại đơn và hiện tại tiếp diễn khác nhau thế nào?" · chuỗi "Ngữ pháp tiếng Anh cần biết"
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "present-simple-vs-present-continuous--w01",
  "hook": "HOOK-03",
  "unit": {
    "audience": "grammar-relearners",
    "slug": "present-simple-vs-present-continuous",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Thì hiện tại đơn và hiện tại tiếp diễn khác nhau thế nào?",
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
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT NGÀY THỨ BA của Thảo (8:00 nhắn khách “I prepare the quotation” → 9:00 họp đầu với Sam → 9:30 giới thiệu công ty, giờ tàu → 10:30 Bác Bình hỏi Dũng “Khoan đã!” → 11:00 khách hiểu gì → 14:00 gọi Sam, I'm understanding → 16:00 soát báo cáo tuần → 21:00 ở nhà → 8:00 thứ Tư khép vòng). Neo mở: ảnh chân dung / đoạn video (p1). Nhân vật: Thảo, Sam, Bác Bình, Dũng (w145/_series/grammar-relearners.md). Cảnh ngắt nhịp: BRK-05 (nhắc lại), BRK-07 (rehook sang động từ trạng thái), BRK-04 (thói quen gym). Câu đố đổi sang questions[22] (câu treo báo giá đã giải ở ô F). Ca dao: “Ăn có nhai, nói có nghĩ”. Bản cũ (W lần 3): w145/bak/present-simple-vs-present-continuous--w01.js.",
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
            "id": "a-pf",
            "t": "box",
            "x": 80,
            "y": 110,
            "w": 300,
            "h": 340,
            "at": "l1:portrait",
            "stroke": 6
          },
          {
            "id": "a-pi",
            "t": "text",
            "text": "I work",
            "x": 120,
            "y": 230,
            "size": 72,
            "at": "l1:job"
          },
          {
            "id": "a-pt",
            "t": "text",
            "text": "ảnh chân dung",
            "x": 80,
            "y": 470,
            "size": 52,
            "at": "l1:portrait+500",
            "hl": [
              {
                "text": "chân dung",
                "at": "l1:job"
              }
            ]
          },
          {
            "id": "a-vf",
            "t": "box",
            "x": 470,
            "y": 110,
            "w": 360,
            "h": 340,
            "at": "l2:video",
            "stroke": 6,
            "color": "coral"
          },
          {
            "id": "a-vi",
            "t": "text",
            "text": "▶ I'm working",
            "x": 490,
            "y": 230,
            "size": 60,
            "at": "l2:starts",
            "color": "coral"
          },
          {
            "id": "a-vt",
            "t": "text",
            "text": "video đang quay",
            "x": 470,
            "y": 470,
            "size": 52,
            "at": "l2:video+500",
            "color": "coral",
            "hl": [
              {
                "text": "đang quay",
                "at": "l2:running"
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
          "say": "One portrait: your job, your habits, facts that rarely change.",
          "sub": "Một tấm ảnh chân dung: nghề, thói quen, sự thật ít thay đổi.",
          "keys": [
            "ảnh chân dung"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One video, still running: it starts, it goes on, then it stops.",
          "sub": "Một đoạn video đang quay: có lúc bắt đầu, đang chạy, rồi sẽ dừng.",
          "keys": [
            "video đang quay"
          ]
        }
      ],
      "ref": "p1"
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "page-facing-up"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Ba 8:00 · nhắn khách",
            "icon": "mobile-phone"
          },
          {
            "id": "a-msg",
            "t": "text",
            "text": "“I prepare the quotation.”",
            "x": 60,
            "y": 580,
            "size": 50,
            "at": "l3:prepare",
            "color": "coral",
            "hl": [
              {
                "text": "prepare",
                "at": "l3:prepare"
              }
            ]
          },
          {
            "id": "a-qq",
            "t": "text",
            "text": "Khách hiểu gì?",
            "x": 60,
            "y": 670,
            "size": 52,
            "at": "l4:understand",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Thảo, accountant at a furniture exporter.",
          "sub": "Đây là Thảo, kế toán ở công ty nội thất xuất khẩu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Tuesday, eight a.m. She's still writing a quotation, and texts the client.",
          "sub": "Thứ Ba, tám giờ sáng. Báo giá đang soạn dở, chiều mới gửi. Cô nhắn cho khách.",
          "keys": [
            "đang soạn dở"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I prepare the quotation.",
          "sub": "I prepare the quotation.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Portrait or video? What will the client understand? Keep that question in your pocket.",
          "sub": "Ảnh hay video đây? Khách sẽ hiểu gì? Bỏ túi câu hỏi này đã.",
          "keys": [
            "Khách sẽ hiểu gì?"
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
      "ref": "intro,p13"
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
            "text": "work hay working?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:simple",
            "hl": [
              {
                "text": "working",
                "at": "l1:continuous"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: học thuộc bảng thì",
            "x": 2028,
            "y": 160,
            "size": 48,
            "at": "l2:table",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:table+400"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: thường ngày hay đang dở?",
            "x": 2028,
            "y": 240,
            "size": 50,
            "at": "l2:everyday",
            "color": "accent",
            "hl": [
              {
                "text": "đang dở",
                "at": "l2:unfinished"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "I work in sales → nghề",
            "x": 2028,
            "y": 330,
            "size": 48,
            "at": "l3:sales",
            "hl": [
              {
                "text": "work",
                "at": "l3:work"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "I'm working on a report → hôm nay",
            "x": 2028,
            "y": 400,
            "size": 44,
            "at": "l3:report",
            "hl": [
              {
                "text": "I'm working",
                "at": "l3:working"
              }
            ]
          },
          {
            "id": "b-t",
            "t": "text",
            "text": "Tháng sau còn vậy không?",
            "x": 2928,
            "y": 160,
            "size": 52,
            "at": "l4:next month",
            "color": "coral",
            "hl": [
              {
                "text": "Tháng sau",
                "at": "l4:next month"
              }
            ]
          },
          {
            "id": "b-h1",
            "t": "text",
            "text": "I live in Hanoi → nhà",
            "x": 2928,
            "y": 250,
            "size": 46,
            "at": "l5:live"
          },
          {
            "id": "b-h2",
            "t": "text",
            "text": "I'm living in Hanoi for now → tạm",
            "x": 2928,
            "y": 320,
            "size": 40,
            "at": "l5:for now",
            "hl": [
              {
                "text": "for now",
                "at": "l5:for now"
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
          "say": "So, present simple or present continuous?",
          "sub": "Vậy hiện tại đơn hay hiện tại tiếp diễn?",
          "keys": [
            "hiện tại đơn",
            "tiếp diễn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No need for the whole table. One question: everyday and long-term, or unfinished and temporary?",
          "sub": "Không cần học lại cả bảng thì. Một câu hỏi: thường ngày, lâu dài, hay đang dở, tạm thời?",
          "keys": [
            "thường ngày",
            "đang dở"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "I work in sales is your job. I'm working on a sales report is today's task. Both correct.",
          "sub": "I work in sales là nghề. I'm working on a sales report là việc dở hôm nay. Cả hai đều đúng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not sure? Ask: will this still be true next month?",
          "sub": "Phân vân? Hỏi: tháng sau chuyện này còn như vậy không?",
          "keys": [
            "tháng sau"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "I live in Hanoi is home. I'm living in Hanoi for now is a temporary stay.",
          "sub": "I live in Hanoi là nhà lâu dài. I'm living in Hanoi for now là đang ở tạm."
        }
      ],
      "ref": "p1,p2,p3"
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
            "id": "b-wk",
            "t": "text",
            "text": "Một ngày thứ Ba, sáu chặng",
            "x": 2028,
            "y": 520,
            "size": 52,
            "at": "l1:six",
            "hl": [
              {
                "text": "sáu chặng",
                "at": "l1:six stops"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l1:six stops+500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2298,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l1:six stops+750",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2568,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l1:six stops+1000",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2838,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l1:six stops+1250",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3108,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l1:six stops+1500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3378,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l1:six stops+1750",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "9:00",
            "x": 2063,
            "y": 628,
            "size": 48,
            "at": "l1:six stops+620"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "10:30",
            "x": 2333,
            "y": 628,
            "size": 48,
            "at": "l1:six stops+870"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "11:00",
            "x": 2603,
            "y": 628,
            "size": 48,
            "at": "l1:six stops+1120"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "14:00",
            "x": 2873,
            "y": 628,
            "size": 48,
            "at": "l1:six stops+1370"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "16:00",
            "x": 3143,
            "y": 628,
            "size": 48,
            "at": "l1:six stops+1620"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "21:00",
            "x": 3413,
            "y": 628,
            "size": 48,
            "at": "l1:six stops+1870"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Now, Thảo's Tuesday in six stops. Portrait or video, every time.",
          "sub": "Giờ theo Thảo qua một ngày thứ Ba, sáu chặng. Chặng nào cũng hỏi: ảnh hay video.",
          "keys": [
            "sáu chặng"
          ]
        }
      ],
      "ref": "intro"
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
            "text": "① 9:00 · Tự giới thiệu",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:nine"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
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
                  "enter": "pop",
                  "at": "l1"
                }
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
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Sam",
            "caption": "9:00 · họp đầu với đối tác",
            "icon": "handshake"
          },
          {
            "id": "c-b",
            "t": "text",
            "text": "I am working as…",
            "x": 3996,
            "y": 170,
            "size": 52,
            "at": "l2:working",
            "color": "muted"
          },
          {
            "id": "c-bx",
            "t": "strike",
            "over": "c-b",
            "at": "l5:temporary"
          },
          {
            "id": "c-new",
            "t": "text",
            "text": "→ “Are you new here?”",
            "x": 3996,
            "y": 250,
            "size": 48,
            "at": "l3:new",
            "color": "coral",
            "hl": [
              {
                "text": "new",
                "at": "l3:new"
              }
            ]
          },
          {
            "id": "c-a",
            "t": "text",
            "text": "I'm an accountant here.",
            "x": 3996,
            "y": 350,
            "size": 52,
            "at": "l4:accountant",
            "color": "accent"
          },
          {
            "id": "c-a2",
            "t": "text",
            "text": "I handle payroll.",
            "x": 3996,
            "y": 430,
            "size": 52,
            "at": "l4:payroll",
            "color": "accent",
            "hl": [
              {
                "text": "handle",
                "at": "l4:handle"
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
          "say": "Stop one: nine o'clock, a first meeting. Meet Sam, the foreign buyer.",
          "sub": "Chặng một: chín giờ, buổi họp đầu. Đây là Sam, đối tác bên mua.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Hello. I am working as an accountant in this company.",
          "sub": "Xin chào. I am working as an accountant in this company.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Oh, are you new here?",
          "sub": "Ồ, chị mới vào à?",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "No, no. I'm an accountant here. I handle payroll for the whole office.",
          "sub": "Không ạ. I'm an accountant here. I handle payroll for the whole office.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The continuous sounds temporary. The simple paints a stable job, shorter, with a real detail.",
          "sub": "Tiếp diễn nghe như việc tạm thời. Thì đơn vẽ đúng chân dung nghề ổn định, ngắn hơn, lại thêm chi tiết.",
          "keys": [
            "chân dung nghề ổn định"
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
      "ref": "p4,p7"
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
            "id": "c-k",
            "t": "text",
            "text": "Nghề: thì đơn · việc dở: -ing",
            "x": 3996,
            "y": 560,
            "size": 52,
            "at": "l1:job",
            "color": "accent",
            "hl": [
              {
                "text": "Nghề: thì đơn",
                "at": "l1:job"
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
          "say": "Introducing yourself at a meeting or interview? Your job takes the simple form. Unfinished tasks get -ing.",
          "sub": "Tự giới thiệu ở buổi họp hay phỏng vấn: nói về nghề dùng thì đơn; việc đang dở mới thêm -ing.",
          "keys": [
            "nói về nghề dùng thì đơn"
          ]
        }
      ],
      "ref": "p4,p8"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 9:30 · Chữ s và lịch tàu",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:company"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Our company makes furniture",
            "x": 5964,
            "y": 170,
            "size": 52,
            "at": "l1:makes",
            "hl": [
              {
                "text": "makes",
                "at": "l1:makes"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "She manages the team",
            "x": 5964,
            "y": 250,
            "size": 52,
            "at": "l1:manages",
            "hl": [
              {
                "text": "manages",
                "at": "l1:manages"
              }
            ]
          },
          {
            "id": "d-s",
            "t": "text",
            "text": "he, she, it, công ty → -s",
            "x": 5964,
            "y": 335,
            "size": 42,
            "at": "l2:name",
            "color": "coral"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Does she works here?",
            "x": 5964,
            "y": 430,
            "size": 52,
            "at": "l3:works",
            "color": "muted"
          },
          {
            "id": "d-3x",
            "t": "strike",
            "over": "d-3",
            "at": "l3:not"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "→ Does she work here?",
            "x": 5964,
            "y": 510,
            "size": 52,
            "at": "l3:base",
            "color": "accent",
            "hl": [
              {
                "text": "work",
                "at": "l3:base"
              }
            ]
          },
          {
            "id": "d-tr",
            "t": "text",
            "text": "The train leaves at seven tomorrow",
            "x": 6804,
            "y": 170,
            "size": 46,
            "at": "l5:leaves",
            "hl": [
              {
                "text": "leaves",
                "at": "l5:leaves"
              }
            ]
          },
          {
            "id": "d-tri",
            "t": "illus",
            "name": "alarm-clock",
            "x": 7104,
            "y": 260,
            "size": 160,
            "at": "l4:train"
          },
          {
            "id": "d-tt",
            "t": "text",
            "text": "lịch cố định → thì đơn",
            "x": 6804,
            "y": 460,
            "size": 52,
            "at": "l5:simple",
            "color": "accent",
            "hl": [
              {
                "text": "lịch cố định",
                "at": "l5:simple"
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
          "say": "Stop two: Thảo presents the company. Our company makes furniture. She manages the team.",
          "sub": "Chặng hai: Thảo giới thiệu công ty. Our company makes furniture. She manages the team."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Add s or es for he, she, it, a person's name, or a company.",
          "sub": "Thêm -s, -es khi chủ ngữ là he, she, it, tên một người hay một công ty.",
          "keys": [
            "Thêm -s, -es"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But after does or doesn't, back to the base form. Does she work here, not does she works.",
          "sub": "Đã có does, doesn't thì động từ về dạng gốc: Does she work here?",
          "keys": [
            "dạng gốc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sam asks about her train to the factory tomorrow.",
          "sub": "Sam hỏi chuyến tàu xuống xưởng ngày mai."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Timetables take the simple form, even for tomorrow. The train leaves at seven tomorrow.",
          "sub": "Lịch cố định như giờ tàu, giờ mở cửa: dùng thì đơn, kể cả ngày mai.",
          "keys": [
            "thì đơn, kể cả ngày mai"
          ]
        }
      ],
      "ref": "p5,p6"
    },
    {
      "id": "s08",
      "module": "BRK-05",
      "data": {
        "title": "Đến đây, mình đã biết",
        "points": [
          "Nghề, thói quen: thì đơn",
          "he, she, it: nhớ chữ s",
          "Giờ tàu, lịch cố định: thì đơn"
        ],
        "illus": "framed-picture"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Job and habits: simple.",
          "sub": "Nghề, thói quen: thì đơn."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "He, she, it: add the s.",
          "sub": "He, she, it: nhớ chữ s."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Timetables: simple too.",
          "sub": "Lịch cố định: cũng thì đơn."
        }
      ],
      "ref": "p5,p6"
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
            "at": "l3:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 10:30 · Sếp hỏi tiến độ",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:shoulder"
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
                  "side": "left",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "phone"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "walk",
                  "at": "l2"
                }
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
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:tap",
            "caption": "10:30 · bàn của Dũng",
            "icon": "office-building"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three: ten thirty. A quiet tap on a shoulder.",
          "sub": "Chặng ba: mười giờ rưỡi. Có người vỗ vai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Bác Bình, the director, sharp as a red pen.",
          "sub": "Đây là Bác Bình, giám đốc, sắc như cây bút đỏ.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Dũng, new in logistics, typing faster than he thinks.",
          "sub": "Còn đây là Dũng, nhân viên kho vận mới, gõ nhanh hơn nghĩ.",
          "keys": [
            "Dũng"
          ]
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "10:30 · bàn của Dũng",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "binh",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "I working on it",
          "why": "Thiếu am, is, are: lỗi người Việt hay gặp nhất khi gõ vội.",
          "rule": "am, is, are + động từ thêm -ing"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "binh",
          "say": "How is the report going?",
          "sub": "Báo cáo tới đâu rồi cháu?",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I working on it.",
          "sub": "I working on it.",
          "face": "happy",
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
          "say": "The continuous needs am, is or are, plus -ing. Missing am is our most common typo.",
          "sub": "Tiếp diễn cần am, is, are cộng -ing. Thiếu am là lỗi gõ vội hay gặp nhất.",
          "keys": [
            "am, is, are cộng -ing"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Lần nữa nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "I'm working on it now. I'll send it before lunch.",
          "sub": "I'm working on it now. I'll send it before lunch.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "binh",
          "say": "Good. Thanks.",
          "sub": "Tốt. Cảm ơn cháu.",
          "phase": "redo",
          "face": "happy"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p9"
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
            "id": "e-tmp",
            "t": "text",
            "text": "Tạm thời, giai đoạn này",
            "x": 7932,
            "y": 160,
            "size": 50,
            "at": "l1:temporary",
            "hl": [
              {
                "text": "Tạm thời",
                "at": "l1:temporary"
              }
            ]
          },
          {
            "id": "e-h",
            "t": "text",
            "text": "We're hiring this month",
            "x": 7932,
            "y": 235,
            "size": 46,
            "at": "l1:hiring"
          },
          {
            "id": "e-c",
            "t": "text",
            "text": "I'm covering for Lan",
            "x": 7932,
            "y": 300,
            "size": 46,
            "at": "l2:covering"
          },
          {
            "id": "e-p",
            "t": "text",
            "text": "Hẹn chắc: I'm meeting the supplier",
            "x": 7932,
            "y": 390,
            "size": 40,
            "at": "l3:meeting",
            "color": "accent",
            "hl": [
              {
                "text": "I'm meeting",
                "at": "l3:meeting"
              }
            ]
          },
          {
            "id": "e-p2",
            "t": "text",
            "text": "giờ bay, giờ tàu: vẫn thì đơn",
            "x": 7932,
            "y": 460,
            "size": 44,
            "at": "l4:flights",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The continuous also covers temporary things this period. We're hiring two developers this month.",
          "sub": "Tiếp diễn còn cho việc tạm thời trong giai đoạn này: We're hiring two developers this month.",
          "keys": [
            "tạm thời"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "I'm covering for Lan while she's on leave.",
          "sub": "I'm covering for Lan while she's on leave."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And fixed plans: I'm meeting the supplier on Friday. Time and place, already booked.",
          "sub": "Và kế hoạch đã hẹn chắc: I'm meeting the supplier on Friday. Có giờ, có chỗ.",
          "keys": [
            "hẹn chắc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But flights and trains on a timetable stay simple.",
          "sub": "Còn giờ bay, giờ tàu theo lịch cố định: vẫn thì đơn."
        }
      ],
      "ref": "p10,p11"
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
          }
        ],
        "items": [
          {
            "id": "e-q1",
            "t": "text",
            "text": "Sorry, I'm on a call.",
            "x": 7932,
            "y": 555,
            "size": 44,
            "at": "l1:call",
            "hl": [
              {
                "text": "I'm on a call",
                "at": "l1:call"
              }
            ]
          },
          {
            "id": "e-q2",
            "t": "text",
            "text": "I'm finishing the slides",
            "x": 7932,
            "y": 625,
            "size": 44,
            "at": "l2:finishing"
          },
          {
            "id": "e-q3",
            "t": "text",
            "text": "What are you working on?",
            "x": 7932,
            "y": 695,
            "size": 44,
            "at": "l3:working",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three ready lines. Busy: Sorry, I'm on a call. Can I call you back?",
          "sub": "Ba câu dùng ngay. Đang bận: Sorry, I'm on a call. Can I call you back?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Progress: I'm finishing the slides, they'll be ready by noon.",
          "sub": "Báo tiến độ: I'm finishing the slides, they'll be ready by noon."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Checking in: What are you working on these days?",
          "sub": "Hỏi han đồng nghiệp: What are you working on these days?"
        }
      ],
      "ref": "p12"
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
            "at": "l3",
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
            "text": "④ 11:00 · Khách hiểu gì?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:text"
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
                  "side": "center",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "mobile-phone",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:eleven",
            "caption": "11:00 · khách nhắn lại",
            "icon": "page-facing-up"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "I prepare the quotation",
            "x": 60,
            "y": 1260,
            "size": 48,
            "at": "l1:prepare",
            "color": "muted"
          },
          {
            "id": "f-r",
            "t": "text",
            "text": "→ “tôi là người lo báo giá”",
            "x": 60,
            "y": 1340,
            "size": 48,
            "at": "l2:charge",
            "color": "coral",
            "hl": [
              {
                "text": "người lo báo giá",
                "at": "l2:charge"
              }
            ]
          },
          {
            "id": "f-1x",
            "t": "strike",
            "over": "f-1",
            "at": "l4:running"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "I'm preparing the quotation now",
            "x": 60,
            "y": 1450,
            "size": 44,
            "at": "l4:preparing",
            "color": "accent",
            "hl": [
              {
                "text": "I'm preparing",
                "at": "l4:preparing"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "I'll send it this afternoon",
            "x": 60,
            "y": 1520,
            "size": 44,
            "at": "l4:afternoon",
            "color": "accent"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Việc đang chạy, câu cũng “đang”",
            "x": 60,
            "y": 1650,
            "size": 52,
            "at": "l5:running",
            "color": "accent",
            "hl": [
              {
                "text": "câu cũng “đang”",
                "at": "l5:sentence"
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
          "say": "Stop four: eleven. Remember the text? I prepare the quotation.",
          "sub": "Chặng bốn: mười một giờ. Nhớ tin nhắn lúc sáng? I prepare the quotation."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Simple form, everyday thing. The client reads: I'm the person in charge of quotes.",
          "sub": "Thì đơn là chuyện thường ngày, nên khách hiểu: tôi là người lo báo giá, một vai trò chung.",
          "keys": [
            "một vai trò chung"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "So they don't know it's coming this afternoon!",
          "sub": "Vậy là khách không biết chiều nay báo giá tới!",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Make it a video: I'm preparing the quotation now, I'll send it this afternoon. Running, with an arrival time.",
          "sub": "Cho nó thành video: I'm preparing the quotation now, I'll send it this afternoon. Đang chạy, có giờ tới."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "If the work is running, the sentence runs too.",
          "sub": "Việc đang chạy thì câu cũng phải “đang”.",
          "keys": [
            "câu cũng phải “đang”"
          ]
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s14",
      "module": "BRK-07",
      "data": {
        "question": "Đang hiểu thì nói “I'm understanding” được không?",
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
          "say": "If I'm understanding right now, why can't I say it?",
          "sub": "Đang hiểu ngay lúc này, sao lại không nói “I'm understanding”?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p18"
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
            "at": "l1",
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
            "text": "⑤ 14:00 · Gọi với Sam",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:clear"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
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
                  "id": "sam",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l2",
                  "shot": "E-SHOT-07",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:clear",
            "caption": "14:00 · cuộc gọi",
            "icon": "telephone-receiver"
          },
          {
            "id": "g-u",
            "t": "text",
            "text": "I'm understanding",
            "x": 2028,
            "y": 1260,
            "size": 52,
            "at": "l2:understanding",
            "color": "muted"
          },
          {
            "id": "g-ux",
            "t": "strike",
            "over": "g-u",
            "at": "l3:state"
          },
          {
            "id": "g-u2",
            "t": "text",
            "text": "→ I understand",
            "x": 2028,
            "y": 1340,
            "size": 56,
            "at": "l3:I understand",
            "color": "accent",
            "hl": [
              {
                "text": "I understand",
                "at": "l3:I understand"
              }
            ]
          },
          {
            "id": "g-g",
            "t": "text",
            "text": "Got it · I see · That makes sense",
            "x": 2028,
            "y": 1440,
            "size": 40,
            "at": "l4:Got it"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "sam",
          "say": "Is everything clear so far?",
          "sub": "Tới đây rõ cả chứ?",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Yes, I'm understanding.",
          "sub": "Vâng, tôi đang hiểu ạ.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Adding -ing doesn't sound more focused. Understand is a state in your head, so people say I understand.",
          "sub": "Thêm -ing không làm mình nghe chăm chú hơn. Understand là trạng thái trong đầu, người bản xứ nói I understand.",
          "keys": [
            "trạng thái trong đầu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "To show you're following: Got it. I see. That makes sense.",
          "sub": "Muốn cho thấy mình theo kịp: Got it, I see, That makes sense."
        }
      ],
      "ref": "p18"
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
            "id": "g-st",
            "t": "text",
            "text": "know, want, need, own, cost…",
            "x": 2028,
            "y": 1525,
            "size": 44,
            "at": "l1:know",
            "hl": [
              {
                "text": "know",
                "at": "l1:know"
              }
            ]
          },
          {
            "id": "g-nd",
            "t": "text",
            "text": "I'm needing more time",
            "x": 2028,
            "y": 1590,
            "size": 44,
            "at": "l2:needing",
            "color": "muted"
          },
          {
            "id": "g-ndx",
            "t": "strike",
            "over": "g-nd",
            "at": "l2:strange"
          },
          {
            "id": "g-2m",
            "t": "text",
            "text": "have: sở hữu ↔ đang ăn",
            "x": 2028,
            "y": 1655,
            "size": 44,
            "at": "l3:lunch"
          },
          {
            "id": "g-2t",
            "t": "text",
            "text": "think: ý kiến ↔ cân nhắc",
            "x": 2028,
            "y": 1720,
            "size": 44,
            "at": "l4:considering"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Hiểu, biết, cần, muốn: không -ing",
            "x": 2028,
            "y": 1790,
            "size": 44,
            "at": "l5:no",
            "color": "accent",
            "hl": [
              {
                "text": "không -ing",
                "at": "l5:no -ing"
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
          "say": "State verbs for thoughts, feelings, owning: know, understand, believe, remember, want, need, prefer, own, belong, cost, seem.",
          "sub": "Động từ trạng thái, suy nghĩ, cảm xúc, sở hữu: know, understand, believe, remember, want, need, prefer, own, belong, cost, seem.",
          "keys": [
            "Động từ trạng thái"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "I need more time. This plan costs too much. I'm needing more time sounds strange.",
          "sub": "Nói I need more time, This plan costs too much. I'm needing more time nghe rất lạ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two-faced verbs: I have a car means own. I'm having lunch means eating.",
          "sub": "Vài động từ hai nghĩa: I have a car là sở hữu, I'm having lunch là đang ăn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "I think it's a good idea is an opinion. I'm thinking about changing jobs means considering.",
          "sub": "I think it's a good idea là ý kiến; I'm thinking about changing jobs là đang cân nhắc."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Know, understand, need, want: no -ing.",
          "sub": "Hiểu, biết, cần, muốn: không đi với -ing.",
          "keys": [
            "không đi với -ing"
          ]
        }
      ],
      "ref": "p15,p16,p17,p19"
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 16:00 · Soát báo cáo tuần",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:report"
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
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                }
              ]
            },
            "at": "l1:report",
            "caption": "16:00 · báo cáo của Dũng",
            "icon": "page-facing-up"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "My manager want the report",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l1:want",
            "color": "muted"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "→ wants",
            "x": 4636,
            "y": 1260,
            "size": 48,
            "at": "l2:wants",
            "color": "accent",
            "hl": [
              {
                "text": "wants",
                "at": "l2:wants"
              }
            ]
          },
          {
            "id": "h-vn",
            "t": "text",
            "text": "Tiếng Việt không chia động từ",
            "x": 3996,
            "y": 1345,
            "size": 44,
            "at": "l3:Vietnamese"
          },
          {
            "id": "h-sig",
            "t": "text",
            "text": "always, usually, every week → đơn",
            "x": 3996,
            "y": 1435,
            "size": 40,
            "at": "l5:always"
          },
          {
            "id": "h-sig2",
            "t": "text",
            "text": "now, at the moment, currently → -ing",
            "x": 3996,
            "y": 1500,
            "size": 38,
            "at": "l5:now",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six: four p.m., Dũng's weekly report. First line: my manager want the report today.",
          "sub": "Chặng sáu: bốn giờ chiều, báo cáo tuần của Dũng. Dòng đầu: My manager want the report today."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Missing s. My manager wants the report today.",
          "sub": "Thiếu chữ s: My manager wants the report today.",
          "keys": [
            "Thiếu chữ s"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Vietnamese verbs never change for the subject, so our eyes skip that little s.",
          "sub": "Tiếng Việt không chia động từ theo chủ ngữ, nên mắt mình dễ bỏ qua chữ s nhỏ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Next line: I'm going to the gym every Monday.",
          "sub": "Dòng tiếp: I'm going to the gym every Monday."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Always, usually, every week signal the simple form. Now, at the moment, currently signal -ing.",
          "sub": "Always, usually, every week là tín hiệu thì đơn; now, at the moment, currently là tín hiệu tiếp diễn."
        }
      ],
      "ref": "p20,p21"
    },
    {
      "id": "s18",
      "module": "BRK-04",
      "data": {
        "title": "Thói quen hằng tuần",
        "labels": [
          "Sai",
          "Đúng"
        ],
        "wrong": "I'm going to the gym every Monday",
        "right": "I go to the gym every Monday",
        "wrongIllus": "repeat-button",
        "rightIllus": "spiral-calendar"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A habit with -ing? Wrong.",
          "sub": "Thói quen mà dùng -ing? Sai."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "I go to the gym every Monday. Unless it's just this month.",
          "sub": "I go to the gym every Monday. Trừ khi chỉ là lịch tháng này."
        }
      ],
      "ref": "p21"
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
            "id": "h-al",
            "t": "text",
            "text": "always coming late → lời than",
            "x": 3996,
            "y": 1570,
            "size": 40,
            "at": "l1:always",
            "color": "coral",
            "hl": [
              {
                "text": "lời than",
                "at": "l1:complaint"
              }
            ]
          },
          {
            "id": "h-ot",
            "t": "text",
            "text": "always is working overtime",
            "x": 3996,
            "y": 1640,
            "size": 44,
            "at": "l2:always",
            "color": "muted"
          },
          {
            "id": "h-otx",
            "t": "strike",
            "over": "h-ot",
            "at": "l3:remove"
          },
          {
            "id": "h-ok",
            "t": "text",
            "text": "is working overtime this month",
            "x": 3996,
            "y": 1710,
            "size": 44,
            "at": "l4:this month",
            "color": "accent",
            "hl": [
              {
                "text": "is working",
                "at": "l4:working"
              }
            ]
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Gõ xong, soát s và -ing",
            "x": 3996,
            "y": 1785,
            "size": 46,
            "at": "l5:check",
            "color": "accent",
            "hl": [
              {
                "text": "soát s và -ing",
                "at": "l5:check"
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
          "say": "He's always coming late, said with a sigh, is a complaint. In work emails it reads like blame.",
          "sub": "He's always coming late, giọng bực bội, là lời than. Trong email công việc, đọc lên như trách móc.",
          "keys": [
            "lời than"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Last line: Our team always is working overtime. Long-term, or just this month? This month, so keep -ing.",
          "sub": "Dòng cuối: Our team always is working overtime. Lâu dài hay giai đoạn này? Chỉ tháng này: giữ tiếp diễn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Remove always, it sounds like a complaint. Check s and -ing: is working.",
          "sub": "Bỏ always vì nghe như than và đặt sai chỗ. Soát s và -ing: is working, đủ cả."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Add time and reason: Our team is working overtime a lot this month to finish the project.",
          "sub": "Thêm thời gian, lý do: Our team is working overtime a lot this month to finish the project."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Type a sentence, check the s and the -ing.",
          "sub": "Gõ xong một câu, soát ngay chữ s và chữ ing.",
          "keys": [
            "soát ngay chữ s và chữ ing"
          ]
        }
      ],
      "ref": "p22,p23,p24"
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
            "zoom": 1.3,
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
            "text": "21:00 · Luyện miệng ở nhà",
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
                "crescent-moon"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:home",
            "caption": "21:00 · ở nhà",
            "icon": "crescent-moon"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "3 câu thói quen → thì đơn",
            "x": 5964,
            "y": 1260,
            "size": 48,
            "at": "l1:three",
            "hl": [
              {
                "text": "thì đơn",
                "at": "l1:simple"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "3 câu tuần này → -ing",
            "x": 5964,
            "y": 1340,
            "size": 48,
            "at": "l1:week",
            "color": "accent"
          },
          {
            "id": "i-10",
            "t": "text",
            "text": "Trước khi gửi: 10 giây",
            "x": 5964,
            "y": 1450,
            "size": 52,
            "at": "l4:ten seconds",
            "color": "coral",
            "hl": [
              {
                "text": "10 giây",
                "at": "l4:ten seconds"
              }
            ]
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Ăn có nhai, nói có nghĩ”",
            "x": 5964,
            "y": 1550,
            "size": 50,
            "at": "l5:chew",
            "color": "accent",
            "hl": [
              {
                "text": "nói có nghĩ",
                "at": "l5:think"
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
          "say": "Nine p.m., home. Each evening: three habit lines in the simple, three about this week with -ing.",
          "sub": "Chín giờ tối, ở nhà. Mỗi tối nói to ba câu thói quen bằng thì đơn, ba câu về tuần này bằng tiếp diễn.",
          "keys": [
            "nói to"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I check emails at eight. This week I'm preparing the budget.",
          "sub": "I check emails at eight. This week I'm preparing the budget.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Your own story sticks better than any table.",
          "sub": "Dùng chính chuyện của mình thì nhớ lâu hơn học thuộc bảng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Before sending, read each verb: everyday, or unfinished? Ten seconds fixes most tense mistakes.",
          "sub": "Trước khi gửi, đọc từng động từ: thường ngày hay đang dở? Mười giây ấy sửa phần lớn lỗi chọn thì.",
          "keys": [
            "Mười giây"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "As grandma says: chew before you eat, think before you speak.",
          "sub": "Ông bà dạy: “Ăn có nhai, nói có nghĩ.”",
          "keys": [
            "nói có nghĩ"
          ]
        }
      ],
      "ref": "p25,p26"
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
            "at": "l3",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Thứ Tư · 8:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Wednesday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "hot-beverage"
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
                }
              ]
            },
            "at": "l1:Wednesday",
            "caption": "Thứ Tư 8:00 · khách mới",
            "icon": "mobile-phone"
          },
          {
            "id": "j-m",
            "t": "text",
            "text": "I'm preparing the quotation now",
            "x": 7932,
            "y": 1260,
            "size": 44,
            "at": "l2:preparing",
            "color": "accent",
            "hl": [
              {
                "text": "I'm preparing",
                "at": "l2:preparing"
              }
            ]
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1390,
            "w": 46,
            "h": 46,
            "at": "l3:s",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1372,
            "size": 58,
            "at": "l3:s+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "ngôi ba có s?",
            "x": 7997,
            "y": 1382,
            "size": 46,
            "at": "l3:s+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1480,
            "w": 46,
            "h": 46,
            "at": "l3:before",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1462,
            "size": 58,
            "at": "l3:before+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "-ing có am, is, are?",
            "x": 7997,
            "y": 1472,
            "size": 46,
            "at": "l3:before+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1570,
            "w": 46,
            "h": 46,
            "at": "l3:state",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1552,
            "size": 58,
            "at": "l3:state+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "động từ trạng thái + -ing?",
            "x": 7997,
            "y": 1562,
            "size": 46,
            "at": "l3:state+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Wednesday, eight a.m. Same desk, a new client, same Thảo.",
          "sub": "Thứ Tư, tám giờ sáng. Vẫn bàn ấy, khách mới, vẫn Thảo ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'm preparing the quotation now. I'll send it this afternoon.",
          "sub": "I'm preparing the quotation now. I'll send it this afternoon.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Her three boxes: third person s, am is are before -ing, no state verb with -ing.",
          "sub": "Ba ô của Thảo: ngôi ba có s chưa, có -ing thì có am, is, are chưa, có động từ trạng thái nào bị thêm -ing không."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A video this time. The client knows it's coming.",
          "sub": "Lần này là video. Khách biết báo giá sắp tới.",
          "keys": [
            "sắp tới"
          ]
        }
      ],
      "ref": "p27"
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
            "at": "l2",
            "fit": "A",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 760,
            "y": 120,
            "at": "l2:portrait"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 760,
            "y": 1260,
            "at": "l3:running"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2728,
            "y": 1260,
            "at": "l4:state"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So, two tenses, one question: everyday thing, or unfinished thing?",
          "sub": "Tóm lại: hai thì, một câu hỏi: chuyện thường ngày hay chuyện đang dở?",
          "keys": [
            "một câu hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Portrait: your job, habits, timetables.",
          "sub": "Ảnh chân dung: nghề, thói quen, lịch cố định."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Video: work running now, temporary things, booked plans.",
          "sub": "Video: việc đang chạy, việc tạm thời, kế hoạch đã hẹn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "State verbs stay simple. And check every s and every -ing.",
          "sub": "Động từ trạng thái giữ thì đơn. Và soát từng chữ s, từng chữ ing.",
          "keys": [
            "soát từng chữ s"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next step: when the job is done, the present perfect.",
          "sub": "Bước tiếp theo: khi việc đã xong, thì hiện tại hoàn thành.",
          "keys": [
            "hiện tại hoàn thành"
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
        "q": "Why do native speakers usually say I understand instead of I'm understanding?",
        "options": [
          "I'm understanding is very formal, so it is only used in written contracts",
          "Both forms are equally common, so the choice depends only on your accent",
          "Understand is a state verb about the mind, so it rarely takes the ing form"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "telephone-receiver",
        "why": "Understand là động từ trạng thái, chỉ điều trong đầu chứ không phải hành động đang diễn ra. Vì vậy “I'm understanding” nghe lạ, còn “Got it” hay “I understand” tự nhiên hơn."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Why do native speakers usually say I understand instead of I'm understanding?",
          "sub": "Vì sao người bản xứ thường nói I understand thay vì I'm understanding?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Understand is a state verb about the mind, so it rarely takes the ing form.",
          "sub": "Vì understand là động từ trạng thái, chỉ một điều trong đầu."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[22]"
    },
    {
      "id": "s33",
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
          "say": "Write two lines about you: your job, and this week's task. Then try the forty questions below.",
          "sub": "Viết hai câu: một về công việc ổn định, một về việc tuần này. Rồi làm bốn mươi câu bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
