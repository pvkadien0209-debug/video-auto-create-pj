// Kịch bản video W lần 3 (#110) — "Tìm việc trên mạng và nhận ra tin tuyển dụng lừa đảo" · chuỗi "Từ giảng đường đến công việc đầu tiên"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "spot-fake-job-ads--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "final-year-students",
    "slug": "spot-fake-job-ads",
    "door": "ky-nang",
    "level": "B1",
    "title": "Tìm việc trên mạng và nhận ra tin tuyển dụng lừa đảo",
    "series": "Từ giảng đường đến công việc đầu tiên"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT TUẦN SĂN VIỆC của Lan, tháng 4 (tối thứ Hai 23:00 tin “trúng tuyển, không cần phỏng vấn” → T3 trung tâm việc làm → T4 tin thật ghi gì → T5 Dũng “làm nhiệm vụ” → T6 kiểm tra công ty, “Khoan đã!” gửi căn cước → T7 hẹn phòng khách sạn, đòi tiền giữ chỗ → CN Dũng và tài khoản ngân hàng → tối CN lỡ rồi thì sao, Bác Bình → lại tối thứ Hai 23:00, tin thật). Nhân vật (theo w145/_series/final-year-students.md): Lan (“bạn” 🧪 p12), Dũng (người làm nhiệm vụ p7; Phát p23 kể như “người từng làm thế”, Dũng từ chối theo p20/p24), Bác Bình (phụ huynh p28); kẻ gian chỉ qua tin nhắn; Vy (p18) giữ là “một bạn sinh viên” do Đét kể. Luật ở BRK-09 lấy từ p16 (Bộ luật Lao động 2019, Điều 17 theo nguồn của bài). Số trong bài: 10 phút, 3 tháng (p18). Ngắt nhịp: BRK-06 montage 5 dấu hiệu p4, BRK-09 lower-third luật p16, BRK-11 đếm ngược 3 điều p20–p22. Bản cũ (W lần 3, #110): w145/bak/spot-fake-job-ads--w01.js.",
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
      "id": "d00",
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
            "id": "a-bait",
            "t": "text",
            "text": "Việc nhẹ.",
            "x": 60,
            "y": 110,
            "size": 90,
            "at": "l1:Easy",
            "color": "coral"
          },
          {
            "id": "a-bait2",
            "t": "text",
            "text": "Lương cao.",
            "x": 60,
            "y": 220,
            "size": 90,
            "at": "l1:High",
            "color": "coral"
          },
          {
            "id": "a-bait3",
            "t": "text",
            "text": "Nhận ngay.",
            "x": 60,
            "y": 330,
            "size": 90,
            "at": "l1:today",
            "color": "coral",
            "hl": [
              {
                "text": "Nhận ngay",
                "at": "l2:hook"
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
          "say": "Easy work. High pay. Start today.",
          "sub": "Việc nhẹ. Lương cao. Nhận ngay.",
          "keys": [
            "Lương cao"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three words sweet as roasted sugarcane, with a hook hidden in the bait.",
          "sub": "Ba câu ngọt như mía lùi, và lưỡi câu giấu trong mồi.",
          "keys": [
            "lưỡi câu"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "d01",
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
            "at": "l6",
            "fit": "A",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "a-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "room",
              "label": "Tin nhắn lúc khuya",
              "actor": {
                "id": "lan",
                "side": "left"
              },
              "contact": {
                "name": "“Phòng nhân sự”",
                "illus": "office-building"
              },
              "messages": [
                {
                  "from": "them",
                  "text": "Chúc mừng em trúng tuyển! Không cần phỏng vấn.",
                  "at": "l3"
                },
                {
                  "from": "them",
                  "text": "Em gửi ảnh hai mặt căn cước và số tài khoản để làm lương nhé.",
                  "at": "l4"
                }
              ]
            },
            "at": "l1",
            "caption": "Tháng 4 · tối thứ Hai · 23:00",
            "icon": "mobile-phone"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Gửi hay dừng?",
            "x": 60,
            "y": 520,
            "size": 72,
            "at": "l6:send",
            "color": "accent",
            "hl": [
              {
                "text": "dừng",
                "at": "l6:thought"
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
          "say": "Meet Lan.",
          "sub": "Đây là Lan."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Final-year accounting, job hunting at eleven p.m. in April.",
          "sub": "Sinh viên năm cuối kế toán, đang săn việc lúc mười một giờ đêm. Tháng Tư."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "A message from a famous company: you're hired, no interview needed!",
          "sub": "Tin nhắn từ một công ty có tiếng: “Chúc mừng em trúng tuyển! Không cần phỏng vấn.”"
        },
        {
          "id": "l4",
          "lang": "en",
          "say": "Just send both sides of your ID card, and your bank account number.",
          "sub": "“Em gửi ảnh hai mặt căn cước và số tài khoản để làm lương nhé.”"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "No interview? Amazing!",
          "sub": "Không cần phỏng vấn? Tuyệt quá!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Send, or stop? Hold that thought.",
          "sub": "Gửi hay dừng? Giữ câu hỏi đó đã.",
          "keys": [
            "Gửi hay dừng"
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
      "ref": "p12"
    },
    {
      "id": "d02",
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
            "text": "Tin thật hay tin lừa?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:spot",
            "hl": [
              {
                "text": "tin lừa",
                "at": "l1:fake"
              }
            ]
          },
          {
            "id": "b-most",
            "t": "text",
            "text": "Phần lớn tin là thật",
            "x": 2028,
            "y": 160,
            "size": 50,
            "at": "l2:most"
          },
          {
            "id": "b-sign",
            "t": "text",
            "text": "Tin giả lộ qua vài dấu hiệu",
            "x": 2028,
            "y": 235,
            "size": 46,
            "at": "l2:signs",
            "color": "muted"
          },
          {
            "id": "b-rule",
            "t": "text",
            "text": "Việc thật trả tiền cho bạn",
            "x": 2028,
            "y": 330,
            "size": 60,
            "at": "l3:pays you",
            "color": "accent",
            "hl": [
              {
                "text": "trả tiền cho bạn",
                "at": "l3:pays you"
              }
            ]
          },
          {
            "id": "b-r1",
            "t": "text",
            "text": "✗ nộp tiền ✗ tài khoản ✗ giấy gốc",
            "x": 2028,
            "y": 420,
            "size": 44,
            "at": "l3:money"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you spot a fake job ad?",
          "sub": "Vậy làm sao nhận ra tin tuyển dụng lừa đảo?",
          "keys": [
            "lừa đảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Relax: most posts online are real. Fakes give themselves away with the same few signs.",
          "sub": "Bình tĩnh: phần lớn tin trên mạng là thật. Tin giả hay lộ qua vài dấu hiệu giống nhau."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The root rule: a real job pays you. It never wants your money, bank account or original papers.",
          "sub": "Nguyên tắc gốc: việc thật trả tiền cho bạn, không bắt nộp tiền, không cần tài khoản ngân hàng hay bản gốc giấy tờ.",
          "keys": [
            "Nguyên tắc gốc"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "d03",
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
            "id": "b-rush",
            "t": "text",
            "text": "“Chỉ còn vài suất!”",
            "x": 2968,
            "y": 160,
            "size": 54,
            "at": "l2:few",
            "color": "coral"
          },
          {
            "id": "b-slow",
            "t": "text",
            "text": "Thấy mình vội → chậm lại",
            "x": 2968,
            "y": 255,
            "size": 50,
            "at": "l3:hurry",
            "color": "accent",
            "hl": [
              {
                "text": "chậm lại",
                "at": "l3:slowing"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l4:week+50",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2263,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l4:week+130",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2498,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l4:week+210",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2733,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l4:week+290",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l4:week+370",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l4:week+450",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3438,
            "y": 615,
            "w": 230,
            "h": 90,
            "at": "l4:week+530",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T3",
            "x": 2083,
            "y": 628,
            "size": 46,
            "at": "l4:week+120"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T4",
            "x": 2318,
            "y": 628,
            "size": 46,
            "at": "l4:week+200"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T5",
            "x": 2553,
            "y": 628,
            "size": 46,
            "at": "l4:week+280"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T6",
            "x": 2788,
            "y": 628,
            "size": 46,
            "at": "l4:week+360"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T7",
            "x": 3023,
            "y": 628,
            "size": 46,
            "at": "l4:week+440"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "CN",
            "x": 3258,
            "y": 628,
            "size": 46,
            "at": "l4:week+520"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "CN tối",
            "x": 3463,
            "y": 628,
            "size": 46,
            "at": "l4:week+600"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Why do fakes work on final-year students? Friends get jobs, and you feel behind.",
          "sub": "Sao tin giả dễ ăn với sinh viên năm cuối? Bạn bè lần lượt có việc, mình thấy tụt lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Scammers know it: only a few places left, accept today!",
          "sub": "Kẻ gian hiểu tâm lý đó: “chỉ còn vài suất, nhận ngay hôm nay!”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Noticing you're in a hurry is step one to slowing down.",
          "sub": "Nhận ra mình đang vội là bước đầu để chậm lại.",
          "keys": [
            "mình đang vội"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lan's job-hunting week, in seven stops.",
          "sub": "Theo Lan một tuần săn việc, bảy chặng."
        }
      ],
      "ref": "p3"
    },
    {
      "id": "d04",
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
            "text": "① Thứ Ba · Tìm ở đâu?",
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
              "set": "campus",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "school"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:career",
            "caption": "Trung tâm hỗ trợ việc làm",
            "icon": "school"
          },
          {
            "id": "c-s1",
            "t": "text",
            "text": "✓ Trung tâm việc làm của trường",
            "x": 3996,
            "y": 160,
            "size": 42,
            "at": "l2:career office",
            "color": "accent"
          },
          {
            "id": "c-s2",
            "t": "text",
            "text": "✓ Ngày hội việc làm trường tổ chức",
            "x": 3996,
            "y": 220,
            "size": 42,
            "at": "l2:fairs",
            "color": "accent"
          },
          {
            "id": "c-s3",
            "t": "text",
            "text": "✓ Trang chính thức của công ty",
            "x": 3996,
            "y": 280,
            "size": 42,
            "at": "l2:websites",
            "color": "accent"
          },
          {
            "id": "c-s4",
            "t": "text",
            "text": "✓ Thầy cô, khoá trên giới thiệu",
            "x": 3996,
            "y": 340,
            "size": 42,
            "at": "l2:teachers",
            "color": "accent"
          },
          {
            "id": "c-g",
            "t": "text",
            "text": "Nhóm mạng: chỉ để biết có việc",
            "x": 3996,
            "y": 440,
            "size": 46,
            "at": "l4:exists",
            "hl": [
              {
                "text": "biết có việc",
                "at": "l4:exists"
              }
            ]
          },
          {
            "id": "c-g2",
            "t": "text",
            "text": "→ tìm lại trên trang chính thức",
            "x": 4036,
            "y": 515,
            "size": 42,
            "at": "l4:own site",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one: Tuesday. Lan visits the school's career centre.",
          "sub": "Chặng một: thứ Ba. Lan ghé trung tâm hỗ trợ việc làm của trường."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Lowest risk: the school career office, its job fairs, company websites, jobs teachers or seniors pass on.",
          "sub": "Ít rủi ro nhất: trung tâm việc làm của trường, ngày hội việc làm, trang chính thức của công ty, việc thầy cô hay khoá trên giới thiệu.",
          "keys": [
            "Ít rủi ro nhất"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "And job groups on social media? So many posts!",
          "sub": "Còn nhóm tìm việc trên mạng? Nhiều tin lắm!",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Anyone can post there. Use them to learn a job exists, then find it on the company's own site.",
          "sub": "Ai cũng đăng được. Coi đó là nơi biết có việc, rồi tìm lại đúng vị trí trên trang chính thức.",
          "keys": [
            "trang chính thức"
          ]
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "d05",
      "module": "BRK-06",
      "data": {
        "title": "Năm dấu hiệu đáng ngờ",
        "items": [
          {
            "illus": "money-bag",
            "text": "Lương cao bất thường"
          },
          {
            "illus": "house",
            "text": "Việc nhẹ tại nhà"
          },
          {
            "illus": "red-question-mark",
            "text": "Không tên công ty"
          },
          {
            "illus": "mobile-phone",
            "text": "Chỉ qua tin nhắn"
          },
          {
            "illus": "alarm-clock",
            "text": "Giục quyết ngay"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Huge pay, easy home work, no company name, chat only, decide now.",
          "sub": "Lương cao bất thường, việc nhẹ tại nhà, không tên công ty, chỉ nhắn tin, giục quyết ngay."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Five warning signs.",
          "sub": "Năm dấu hiệu đáng ngờ."
        }
      ],
      "ref": "p4"
    },
    {
      "id": "d06",
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
            "text": "② Thứ Tư · Tin thật ghi gì?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:stop two"
          },
          {
            "id": "d-r",
            "t": "text",
            "text": "Tin thật ghi rõ:",
            "x": 5964,
            "y": 160,
            "size": 54,
            "at": "l2:real post",
            "color": "accent"
          },
          {
            "id": "d-r1",
            "t": "text",
            "text": "tên công ty · vị trí · việc",
            "x": 5964,
            "y": 240,
            "size": 46,
            "at": "l2:names"
          },
          {
            "id": "d-r2",
            "t": "text",
            "text": "yêu cầu · cách nộp hồ sơ",
            "x": 5964,
            "y": 305,
            "size": 46,
            "at": "l2:requirements"
          },
          {
            "id": "d-pay",
            "t": "text",
            "text": "Lương “thoả thuận”: chưa sao",
            "x": 5964,
            "y": 400,
            "size": 48,
            "at": "l3:negotiable",
            "hl": [
              {
                "text": "chưa sao",
                "at": "l3:alone"
              }
            ]
          },
          {
            "id": "d-job",
            "t": "text",
            "text": "Cần rõ: công việc, không phải số",
            "x": 5964,
            "y": 480,
            "size": 40,
            "at": "l3:work",
            "color": "muted"
          },
          {
            "id": "d-mail",
            "t": "text",
            "text": "@tên-miền-công-ty > hộp thư miễn phí",
            "x": 6804,
            "y": 200,
            "size": 44,
            "at": "l4:domain"
          },
          {
            "id": "d-fake",
            "t": "text",
            "text": "…nhưng tên miền cũng bị nhái",
            "x": 6804,
            "y": 280,
            "size": 44,
            "at": "l4:faked",
            "color": "coral"
          },
          {
            "id": "d-cmp",
            "t": "text",
            "text": "→ đối chiếu trang chính thức",
            "x": 6804,
            "y": 360,
            "size": 46,
            "at": "l4:official",
            "color": "accent",
            "hl": [
              {
                "text": "đối chiếu",
                "at": "l4:Check"
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
          "say": "Stop two: Wednesday. What does a real post look like?",
          "sub": "Chặng hai: thứ Tư. Tin thật trông thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A real post names the company, the role, the tasks, the requirements, and how to apply.",
          "sub": "Tin thật ghi rõ tên công ty, vị trí, việc phải làm, yêu cầu và cách nộp hồ sơ.",
          "keys": [
            "ghi rõ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Salary 'negotiable'? Fine alone; many discuss pay at interview. The work must be clear.",
          "sub": "Lương “thoả thuận”? Chưa phải dấu hiệu xấu: nhiều nơi bàn lương khi phỏng vấn. Điều cần rõ là công việc.",
          "keys": [
            "công việc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A company email domain beats a free inbox, but domains get faked. Check the official site.",
          "sub": "Email tên miền công ty đáng tin hơn hộp thư miễn phí, nhưng tên miền cũng bị nhái. Đối chiếu trang chính thức.",
          "keys": [
            "Đối chiếu trang chính thức"
          ]
        }
      ],
      "ref": "p5,p6"
    },
    {
      "id": "d07",
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
          },
          {
            "at": "l4",
            "fit": [
              "e-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Năm · “Làm nhiệm vụ”",
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
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "red-heart",
                "money-with-wings"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-07",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "Dũng · việc làm thêm “thả tim”",
            "icon": "red-heart"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Thưởng nhỏ → tin",
            "x": 7932,
            "y": 160,
            "size": 52,
            "at": "l3:small"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "“Nâng cấp”: nạp trước",
            "x": 7932,
            "y": 245,
            "size": 52,
            "at": "l3:upgrade",
            "color": "coral"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Nạp lần sau lớn hơn",
            "x": 7932,
            "y": 330,
            "size": 46,
            "at": "l5:bigger"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "Lần lớn nhất: bị chặn",
            "x": 7932,
            "y": 405,
            "size": 50,
            "at": "l5:blocks",
            "color": "coral",
            "hl": [
              {
                "text": "bị chặn",
                "at": "l5:blocks"
              }
            ]
          },
          {
            "id": "e-r",
            "t": "text",
            "text": "Thưởng nhỏ chính là mồi",
            "x": 7932,
            "y": 510,
            "size": 56,
            "at": "l6:bait",
            "color": "accent",
            "hl": [
              {
                "text": "mồi",
                "at": "l6:bait"
              }
            ]
          },
          {
            "id": "e-r2",
            "t": "text",
            "text": "Việc thật không bắt bạn nạp tiền",
            "x": 8752,
            "y": 690,
            "size": 46,
            "at": "l6:top up"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three: Thursday. Meet Dũng, Lan's classmate, proud of a new side job.",
          "sub": "Chặng ba: thứ Năm. Còn đây là Dũng, bạn cùng khoá của Lan, đang tự hào về việc làm thêm mới.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I just heart videos, and they pay real money! How is that a scam?",
          "sub": "Mình chỉ thả tim video mà họ trả tiền thật! Sao lừa được?",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The task scam pays small first, so you trust it. Then comes the upgrade task.",
          "sub": "Kiểu lừa “làm nhiệm vụ” trả trước vài khoản nhỏ để bạn tin. Rồi đến “nhiệm vụ nâng cấp”.",
          "keys": [
            "nhiệm vụ nâng cấp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Top up first, get it back with commission? Okay, let's go!",
          "sub": "Nạp tiền trước, hoàn lại kèm hoa hồng? Ok, làm luôn!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Each top-up bigger. At the biggest: no withdrawal, and the group blocks him.",
          "sub": "Mỗi lần nạp lớn hơn lần trước. Đến lần lớn nhất thì không rút được, nhóm chặn liên lạc."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "The small reward was the bait. A real job pays you; it never asks you to top up.",
          "sub": "Khoản thưởng nhỏ chính là mồi. Việc thật trả tiền cho bạn, không bắt bạn nạp tiền.",
          "keys": [
            "chính là mồi"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1100
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "d08",
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
            "text": "④ Thứ Sáu · Kiểm tra công ty",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:stop four"
          },
          {
            "id": "f-k-c0",
            "t": "box",
            "x": 60,
            "y": 1260,
            "w": 46,
            "h": 46,
            "at": "l2:tax code",
            "stroke": 5
          },
          {
            "id": "f-k-k0",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1242,
            "size": 58,
            "at": "l2:tax code+600",
            "color": "accent"
          },
          {
            "id": "f-k-l0",
            "t": "text",
            "text": "Tra tên, mã số thuế",
            "x": 130,
            "y": 1252,
            "size": 44,
            "at": "l2:tax code+200"
          },
          {
            "id": "f-k-c1",
            "t": "box",
            "x": 60,
            "y": 1330,
            "w": 46,
            "h": 46,
            "at": "l3:careers",
            "stroke": 5
          },
          {
            "id": "f-k-k1",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1312,
            "size": 58,
            "at": "l3:careers+600",
            "color": "accent"
          },
          {
            "id": "f-k-l1",
            "t": "text",
            "text": "Trang tuyển dụng chính thức",
            "x": 130,
            "y": 1322,
            "size": 44,
            "at": "l3:careers+200"
          },
          {
            "id": "f-k-c2",
            "t": "box",
            "x": 60,
            "y": 1400,
            "w": 46,
            "h": 46,
            "at": "l3:reviews",
            "stroke": 5
          },
          {
            "id": "f-k-k2",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1382,
            "size": 58,
            "at": "l3:reviews+600",
            "color": "accent"
          },
          {
            "id": "f-k-l2",
            "t": "text",
            "text": "Nhận xét người từng làm",
            "x": 130,
            "y": 1392,
            "size": 44,
            "at": "l3:reviews+200"
          },
          {
            "id": "f-k-c3",
            "t": "box",
            "x": 60,
            "y": 1470,
            "w": 46,
            "h": 46,
            "at": "l3:seniors",
            "stroke": 5
          },
          {
            "id": "f-k-k3",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1452,
            "size": 58,
            "at": "l3:seniors+600",
            "color": "accent"
          },
          {
            "id": "f-k-l3",
            "t": "text",
            "text": "Hỏi anh chị khoá trên",
            "x": 130,
            "y": 1462,
            "size": 44,
            "at": "l3:seniors+200"
          },
          {
            "id": "f-1c",
            "t": "text",
            "text": "Lệch 1 chữ → dừng",
            "x": 60,
            "y": 1570,
            "size": 60,
            "at": "l4:letter",
            "color": "coral",
            "hl": [
              {
                "text": "Lệch 1 chữ",
                "at": "l4:One letter"
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
          "say": "Stop four: Friday. Monday's message is still waiting. Time to check.",
          "sub": "Chặng bốn: thứ Sáu. Tin nhắn tối thứ Hai vẫn nằm đó. Đến lúc kiểm tra."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Look up the company name and tax code on the government business portal.",
          "sub": "Tra tên và mã số thuế công ty trên cổng tra cứu đăng ký doanh nghiệp của nhà nước.",
          "keys": [
            "mã số thuế"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Is the role on its careers page? Read former staff reviews. Ask seniors who worked there.",
          "sub": "Trang tuyển dụng chính thức có đăng không? Đọc nhận xét người từng làm. Hỏi anh chị khoá trên."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Scammers borrow big names and change one letter. One letter off? Stop.",
          "sub": "Kẻ gian mượn tên công ty lớn, đổi một chữ. So từng chữ: lệch một chữ là dừng.",
          "keys": [
            "lệch một chữ là dừng"
          ]
        }
      ],
      "ref": "p9,p11"
    },
    {
      "id": "d09",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Gửi hay dừng?",
        "actors": [
          {
            "id": "lan",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Gửi căn cước khi chưa rõ công ty",
          "why": "Thông tin căn cước lọt ra ngoài có thể bị dùng để vay tiền mạo danh.",
          "rule": "Chưa rõ công ty, chưa gửi căn cước"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "Both sides of my ID, my account number. Sent!",
          "sub": "Hai mặt căn cước, số tài khoản. Gửi!",
          "face": "happy",
          "pose": "phone",
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
          "say": "No interview, yet they want your ID? Hello, loans in your name.",
          "sub": "Không phỏng vấn mà đòi căn cước? Có thể bị dùng để vay tiền mạo danh.",
          "keys": [
            "vay tiền mạo danh"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Quay lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "A free inbox, not their domain. I'll call the number on their official site.",
          "sub": "Hộp thư miễn phí, không phải tên miền công ty. Mình tự tìm số trên trang chính thức để gọi.",
          "phase": "redo",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Papers only after confirming and signing. Not sure of the company? No ID.",
          "sub": "Chỉ nộp giấy tờ sau khi đã xác nhận và ký hợp đồng. Chưa rõ công ty, chưa gửi căn cước.",
          "phase": "redo",
          "keys": [
            "chưa gửi căn cước"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p10,p12,p13"
    },
    {
      "id": "d10",
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
            "id": "f-no",
            "t": "text",
            "text": "Không có đợt tuyển nào!",
            "x": 900,
            "y": 1290,
            "size": 56,
            "at": "l2:no such",
            "color": "coral"
          },
          {
            "id": "f-r",
            "t": "text",
            "text": "Rõ công ty mới gửi căn cước",
            "x": 900,
            "y": 1390,
            "size": 48,
            "at": "l2:keeps",
            "color": "accent",
            "hl": [
              {
                "text": "mới gửi căn cước",
                "at": "l2:keeps"
              }
            ]
          },
          {
            "id": "f-num",
            "t": "text",
            "text": "Số trên web ✓ · số trong tin ✗",
            "x": 60,
            "y": 1730,
            "size": 44,
            "at": "l3:post"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "Hello, I saw a post with your company's name. Did you post it?",
          "sub": "Em chào anh chị, em thấy tin tuyển mang tên công ty mình, có phải do công ty đăng không ạ?",
          "pose": "phone"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Answer: no such hiring round. Lan keeps her ID.",
          "sub": "Câu trả lời: không có đợt tuyển nào như vậy. Lan giữ lại căn cước."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The number on the website, never the one in the post.",
          "sub": "Gọi số trên trang chính thức, không gọi số ghi trong tin đăng."
        }
      ],
      "ref": "p10,p13"
    },
    {
      "id": "d11",
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
            "text": "⑤ Thứ Bảy · Hẹn lạ, đòi phí",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:stop five"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "label": "Lời mời thứ hai",
              "actor": {
                "id": "lan",
                "side": "left"
              },
              "contact": {
                "name": "Người tuyển dụng",
                "illus": "office-building"
              },
              "messages": [
                {
                  "from": "them",
                  "text": "Mời em phỏng vấn ở phòng khách sạn nhé.",
                  "at": "l1"
                },
                {
                  "from": "them",
                  "text": "Em đỗ rồi! Đóng chút tiền giữ chỗ nhé.",
                  "at": "l4"
                },
                {
                  "from": "me",
                  "text": "Em cảm ơn anh chị, nhưng em không đóng khoản phí nào trước khi ký hợp đồng ạ. Nếu cần, em xin gửi bản sao giấy tờ.",
                  "at": "l5"
                }
              ]
            },
            "at": "l1:hotel",
            "caption": "Thứ Bảy · lời mời thứ hai",
            "icon": "hotel"
          },
          {
            "id": "g-off",
            "t": "text",
            "text": "Văn phòng · gọi video có tên",
            "x": 2028,
            "y": 1250,
            "size": 46,
            "at": "l2:office",
            "color": "accent"
          },
          {
            "id": "g-alone",
            "t": "text",
            "text": "Hỏi lý do · đừng đi một mình",
            "x": 2028,
            "y": 1325,
            "size": 46,
            "at": "l2:alone",
            "hl": [
              {
                "text": "đừng đi một mình",
                "at": "l2:alone"
              }
            ]
          },
          {
            "id": "g-fam",
            "t": "text",
            "text": "Nhắn nhà: địa chỉ, tên, giờ về",
            "x": 2028,
            "y": 1410,
            "size": 46,
            "at": "l3:address",
            "color": "accent",
            "hl": [
              {
                "text": "giờ về",
                "at": "l3:back"
              }
            ]
          },
          {
            "id": "g-ok",
            "t": "text",
            "text": "Nơi đàng hoàng: không ép",
            "x": 2848,
            "y": 1780,
            "size": 46,
            "at": "l6:push",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five: Saturday. Another offer: an interview in a hotel room.",
          "sub": "Chặng năm: thứ Bảy. Lời mời khác: phỏng vấn ở một phòng khách sạn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Real interviews: the office, or a video call with the company name. Ask why, and never go alone.",
          "sub": "Phỏng vấn thật ở văn phòng hoặc gọi video có tên công ty. Hỏi lý do, đề nghị đổi, và đừng đi một mình.",
          "keys": [
            "đừng đi một mình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Somewhere new? Text family the address, the name, and when you'll be back.",
          "sub": "Đi nơi mới? Nhắn người thân địa chỉ, tên người hẹn, giờ dự định về. Mất một phút."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then: you passed! Pay a small deposit to hold your place.",
          "sub": "Rồi bất ngờ: “Em đỗ rồi! Đóng chút tiền giữ chỗ nhé.”"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "Thank you, but I don't pay any fee before a contract. I can send copies of my papers.",
          "sub": "Em cảm ơn anh chị, nhưng em không đóng phí nào trước khi ký hợp đồng ạ. Em xin gửi bản sao giấy tờ.",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Polite, and firm. A decent employer won't push.",
          "sub": "Lịch sự mà chắc. Nơi tuyển dụng đàng hoàng sẽ không ép.",
          "keys": [
            "không ép"
          ]
        }
      ],
      "ref": "p14,p15,p17"
    },
    {
      "id": "d12",
      "module": "BRK-09",
      "data": {
        "kind": "Luật",
        "title": "Bộ luật Lao động 2019, Điều 17",
        "detail": "Cấm buộc đặt cọc, cấm giữ bản gốc giấy tờ",
        "illus": "open-book",
        "around": [
          "money-with-wings",
          "identification-card"
        ],
        "icon": "scale"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "And Vietnam's labour law backs her.",
          "sub": "Và luật lao động Việt Nam đứng về phía Lan."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No deposits to get hired. No keeping original papers.",
          "sub": "Không được buộc đặt cọc. Không được giữ bản gốc giấy tờ."
        }
      ],
      "ref": "p16"
    },
    {
      "id": "d13",
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
            "text": "Một bạn: “đỗ” sau 10 phút",
            "x": 2028,
            "y": 1520,
            "size": 46,
            "at": "l1:minutes"
          },
          {
            "id": "g-st2",
            "t": "text",
            "text": "→ đóng tiền khoá đào tạo",
            "x": 2068,
            "y": 1590,
            "size": 42,
            "at": "l2:course",
            "color": "coral"
          },
          {
            "id": "g-st3",
            "t": "text",
            "text": "→ không việc, văn phòng đổi chủ",
            "x": 2068,
            "y": 1655,
            "size": 42,
            "at": "l3:tenant",
            "color": "muted"
          },
          {
            "id": "g-rule",
            "t": "text",
            "text": "Tuyển người: trả lương",
            "x": 2028,
            "y": 1720,
            "size": 46,
            "at": "l4:wages",
            "color": "accent"
          },
          {
            "id": "g-rule2",
            "t": "text",
            "text": "Đòi phí: là bán hàng",
            "x": 2028,
            "y": 1788,
            "size": 46,
            "at": "l4:selling",
            "color": "coral",
            "hl": [
              {
                "text": "bán hàng",
                "at": "l4:selling"
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
          "say": "One student was hired in ten minutes, in an office rented by the hour.",
          "sub": "Một bạn sinh viên được báo đỗ sau mười phút, ở một văn phòng thuê theo giờ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then a paid sales course, refunded after three months of work, they said.",
          "sub": "Kèm yêu cầu đóng tiền khoá đào tạo bán hàng, hứa hoàn lại sau ba tháng làm việc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A few talks. No work. And the office had a new tenant.",
          "sub": "Vài buổi nghe nói chuyện. Không ai giao việc. Văn phòng đã đổi người thuê."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Hiring means paying wages. Charging fees means selling.",
          "sub": "Tuyển người thì trả lương, đòi phí là bán hàng.",
          "keys": [
            "đòi phí là bán hàng"
          ]
        }
      ],
      "ref": "p18,p19"
    },
    {
      "id": "d14",
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
            "at": "l5",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Chủ nhật · Từ chối ngay",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:stop six"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "hold"
                }
              ],
              "props": [
                "credit-card"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:offers",
            "caption": "Chủ nhật · “mở tài khoản nhận lương”",
            "icon": "credit-card"
          },
          {
            "id": "h-a",
            "t": "text",
            "text": "Mở tài khoản, giao thẻ + mật khẩu",
            "x": 3996,
            "y": 1250,
            "size": 42,
            "at": "l2:card",
            "color": "muted"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "→ vài tháng sau: bị mời làm việc",
            "x": 4036,
            "y": 1320,
            "size": 40,
            "at": "l3:police",
            "color": "coral"
          },
          {
            "id": "h-no",
            "t": "text",
            "text": "✗ tài khoản ✗ ví ✗ sim",
            "x": 3996,
            "y": 1410,
            "size": 56,
            "at": "l4:lend",
            "color": "coral"
          },
          {
            "id": "h-r",
            "t": "text",
            "text": "Tên mình, chỉ mình cầm",
            "x": 3996,
            "y": 1510,
            "size": 56,
            "at": "l5:hands",
            "color": "accent",
            "hl": [
              {
                "text": "chỉ mình cầm",
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
          "say": "Stop six: Sunday. A 'company' offers Dũng cash to open a new bank account for salaries.",
          "sub": "Chặng sáu: Chủ nhật. Một “công ty” trả tiền nhờ Dũng mở tài khoản mới để “nhận lương”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then hand the card and password to their 'accountant'.",
          "sub": "Rồi giao thẻ và mật khẩu cho “kế toán” giữ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Others who did? Months later, police questioned them: their account moved suspicious money.",
          "sub": "Người từng làm thế? Vài tháng sau bị mời lên làm việc: tài khoản mang tên mình dính giao dịch đáng ngờ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "No. I don't lend, rent or sell my account, e-wallet, or SIM.",
          "sub": "Không. Mình không cho mượn, cho thuê hay bán tài khoản, ví điện tử, sim.",
          "face": "stern",
          "pose": "stop"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "An account in your name stays in your hands.",
          "sub": "Tài khoản mang tên mình, chỉ mình cầm.",
          "keys": [
            "chỉ mình cầm"
          ]
        }
      ],
      "ref": "p20,p23,p24"
    },
    {
      "id": "d15",
      "module": "BRK-11",
      "data": {
        "title": "3 điều từ chối ngay",
        "items": [
          "Cho mượn tài khoản, sim",
          "Đọc mã xác thực, cài ứng dụng lạ",
          "Việc nước ngoài đi gấp"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Three: rushed jobs abroad.",
          "sub": "Ba: việc ở nước ngoài, đi gấp."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Two: bank codes, strange apps.",
          "sub": "Hai: đọc mã xác thực, cài ứng dụng lạ."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "One: lending your account.",
          "sub": "Một: cho mượn tài khoản, sim."
        }
      ],
      "ref": "p20,p21,p22"
    },
    {
      "id": "d16",
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
            "id": "h-otp",
            "t": "text",
            "text": "✗ Đọc mã OTP · ✗ app lạ",
            "x": 3996,
            "y": 1620,
            "size": 46,
            "at": "l1:code",
            "color": "coral"
          },
          {
            "id": "h-ab",
            "t": "text",
            "text": "Nước ngoài hợp pháp:",
            "x": 3996,
            "y": 1700,
            "size": 46,
            "at": "l2:Legal"
          },
          {
            "id": "h-ab2",
            "t": "text",
            "text": "hợp đồng · giấy phép · thời gian",
            "x": 4036,
            "y": 1770,
            "size": 40,
            "at": "l2:permits",
            "color": "accent",
            "hl": [
              {
                "text": "giấy phép",
                "at": "l2:permits"
              }
            ]
          },
          {
            "id": "h-fam",
            "t": "text",
            "text": "Hỏi cơ quan chức năng, gia đình",
            "x": 4816,
            "y": 1780,
            "size": 40,
            "at": "l3:authorities"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Real employers never need the code your bank texts you, or an app sent by chat.",
          "sub": "Nhà tuyển dụng thật không cần mã xác thực ngân hàng gửi về, hay ứng dụng cài theo tin nhắn.",
          "keys": [
            "không cần mã xác thực"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Huge pay abroad, free tickets, leave in days? Legal jobs abroad have contracts, permits and time to prepare.",
          "sub": "Việc nước ngoài lương rất cao, bao vé, đi gấp? Đi làm hợp pháp có hợp đồng, giấy phép, thời gian chuẩn bị.",
          "keys": [
            "hợp đồng, giấy phép"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Check with the authorities, and talk with family first.",
          "sub": "Kiểm tra qua cơ quan chức năng, bàn với gia đình trước."
        }
      ],
      "ref": "p21,p22"
    },
    {
      "id": "d17",
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
            "text": "⑦ Tối Chủ nhật · Lỡ rồi?",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:stop seven"
          },
          {
            "id": "i-k-c0",
            "t": "box",
            "x": 5964,
            "y": 1260,
            "w": 46,
            "h": 46,
            "at": "l2:Stop",
            "stroke": 5
          },
          {
            "id": "i-k-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1242,
            "size": 58,
            "at": "l2:Stop+600",
            "color": "accent"
          },
          {
            "id": "i-k-l0",
            "t": "text",
            "text": "Ngừng chuyển thêm",
            "x": 6034,
            "y": 1252,
            "size": 44,
            "at": "l2:Stop+200"
          },
          {
            "id": "i-k-c1",
            "t": "box",
            "x": 5964,
            "y": 1330,
            "w": 46,
            "h": 46,
            "at": "l2:bank",
            "stroke": 5
          },
          {
            "id": "i-k-k1",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1312,
            "size": 58,
            "at": "l2:bank+600",
            "color": "accent"
          },
          {
            "id": "i-k-l1",
            "t": "text",
            "text": "Gọi ngay ngân hàng",
            "x": 6034,
            "y": 1322,
            "size": 44,
            "at": "l2:bank+200"
          },
          {
            "id": "i-k-c2",
            "t": "box",
            "x": 5964,
            "y": 1400,
            "w": 46,
            "h": 46,
            "at": "l3:Screenshot",
            "stroke": 5
          },
          {
            "id": "i-k-k2",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1382,
            "size": 58,
            "at": "l3:Screenshot+600",
            "color": "accent"
          },
          {
            "id": "i-k-l2",
            "t": "text",
            "text": "Chụp tin nhắn, số tài khoản",
            "x": 6034,
            "y": 1392,
            "size": 44,
            "at": "l3:Screenshot+200"
          },
          {
            "id": "i-k-c3",
            "t": "box",
            "x": 5964,
            "y": 1470,
            "w": 46,
            "h": 46,
            "at": "l3:police",
            "stroke": 5
          },
          {
            "id": "i-k-k3",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1452,
            "size": 58,
            "at": "l3:police+600",
            "color": "accent"
          },
          {
            "id": "i-k-l3",
            "t": "text",
            "text": "Trình báo công an",
            "x": 6034,
            "y": 1462,
            "size": 44,
            "at": "l3:police+200"
          },
          {
            "id": "i-id",
            "t": "text",
            "text": "Lộ căn cước: canh khoản vay lạ",
            "x": 5964,
            "y": 1560,
            "size": 40,
            "at": "l4:loan"
          },
          {
            "id": "i-sh",
            "t": "text",
            "text": "Bị lừa ≠ kém cỏi",
            "x": 5964,
            "y": 1635,
            "size": 56,
            "at": "l5:stupid",
            "color": "accent",
            "hl": [
              {
                "text": "≠ kém cỏi",
                "at": "l5:stupid"
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
          "say": "Stop seven: Sunday night. Dũng's lost top-up? Already sent money or papers?",
          "sub": "Chặng bảy: tối Chủ nhật. Còn khoản nạp của Dũng? Lỡ gửi tiền, giấy tờ rồi thì sao?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Stop paying, even if 'this top-up unlocks everything'. Call your bank at once.",
          "sub": "Ngừng chuyển thêm, kể cả khi họ hứa “nạp lần này là rút được hết”. Gọi ngay ngân hàng.",
          "keys": [
            "Ngừng chuyển thêm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Screenshot the messages, account numbers, the post. Report to the nearest police.",
          "sub": "Chụp lại tin nhắn, số tài khoản, trang tin đăng. Trình báo công an nơi gần nhất."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sent an ID photo? Watch for loan calls, change passwords, tell family.",
          "sub": "Đã gửi ảnh căn cước? Để ý cuộc gọi lạ về khoản vay, đổi mật khẩu quan trọng, báo người thân."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Being scammed doesn't make you stupid. Telling early helps you act fast, and warns friends.",
          "sub": "Bị lừa không có nghĩa là kém cỏi. Kể sớm giúp hành động nhanh, và giữ cho bạn bè không mắc bẫy.",
          "keys": [
            "không có nghĩa là kém cỏi"
          ]
        }
      ],
      "ref": "p25,p26,p27"
    },
    {
      "id": "d18",
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
            "at": "l2",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
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
                  "id": "binh",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "face": "worried"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "push"
                }
              ]
            },
            "at": "l1",
            "caption": "Tối Chủ nhật · nhà bố mẹ",
            "icon": "house"
          },
          {
            "id": "i-p",
            "t": "text",
            "text": "Phụ huynh: cùng xem, đừng trách",
            "x": 6784,
            "y": 1780,
            "size": 44,
            "at": "l3:blaming",
            "color": "accent",
            "hl": [
              {
                "text": "đừng trách",
                "at": "l3:blaming"
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
          "say": "Lan is home for the night. Meet Bác Bình, her dad, who checks every lock three times.",
          "sub": "Lan về nhà tối nay. Đây là bác Bình, bố Lan, khoá cửa xong còn kiểm tra ba lần.",
          "keys": [
            "bác Bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Dad, I almost sent my ID to a fake company this week.",
          "sub": "Bố ơi, tuần này con suýt gửi căn cước cho công ty lừa.",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Dear parents: instead of blaming, look at the post together.",
          "sub": "Thưa phụ huynh: thay vì trách, hãy cùng con xem lại tin tuyển dụng.",
          "keys": [
            "thay vì trách"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Show me. And remember: no real job makes you pay first.",
          "sub": "Cho bố xem nào. Nhớ nhé: không có việc thật nào bắt mình nộp tiền trước.",
          "face": "happy",
          "pose": "explain"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p28"
    },
    {
      "id": "d19",
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
            "text": "Lại tối thứ Hai · 23:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Monday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "label": "Tin nhắn lúc khuya",
              "actor": {
                "id": "lan",
                "side": "left"
              },
              "contact": {
                "name": "tuyendung@congty.vn",
                "illus": "office-building"
              },
              "messages": [
                {
                  "from": "them",
                  "text": "Mời em phỏng vấn tại văn phòng công ty.",
                  "at": "l2"
                },
                {
                  "from": "me",
                  "text": "Dạ, em cảm ơn ạ. Em sẽ có mặt.",
                  "at": "l3"
                }
              ]
            },
            "at": "l1:another",
            "caption": "Một tuần sau · cùng giờ ấy",
            "icon": "e-mail"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "✓ tên miền công ty",
            "x": 7932,
            "y": 1250,
            "size": 46,
            "at": "l2:domain",
            "color": "accent"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "✓ văn phòng thật",
            "x": 7932,
            "y": 1320,
            "size": 46,
            "at": "l2:office",
            "color": "accent"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "✓ không một đồng phí",
            "x": 7932,
            "y": 1390,
            "size": 46,
            "at": "l2:fee",
            "color": "accent"
          },
          {
            "id": "j-bait",
            "t": "text",
            "text": "Việc nhẹ, lương cao, nhận ngay?",
            "x": 7932,
            "y": 1490,
            "size": 42,
            "at": "l4:Easy",
            "color": "muted"
          },
          {
            "id": "j-baitx",
            "t": "strike",
            "over": "j-bait",
            "at": "l4:prefers"
          },
          {
            "id": "j-real",
            "t": "text",
            "text": "Công ty thật · lương thật",
            "x": 7932,
            "y": 1570,
            "size": 54,
            "at": "l4:real pay",
            "hl": [
              {
                "text": "lương thật",
                "at": "l4:real pay"
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
          "say": "Monday again, eleven p.m. Same room, another message.",
          "sub": "Lại tối thứ Hai, mười một giờ đêm. Vẫn phòng ấy, lại một tin nhắn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "An interview at the company office. From the company domain. Not one fee.",
          "sub": "Mời phỏng vấn tại văn phòng công ty. Từ tên miền công ty. Không một đồng phí."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "I called the number on their website. It's real!",
          "sub": "Mình đã gọi số trên trang chính thức. Thật rồi!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Easy work, high pay, start today? Lan prefers a real company, a real office, real pay.",
          "sub": "Việc nhẹ, lương cao, nhận ngay? Lan chọn công ty thật, văn phòng thật, lương thật.",
          "keys": [
            "lương thật"
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
      "ref": "p6,p10"
    },
    {
      "id": "d20",
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
            "fit": "B",
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
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l6",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 2868,
            "y": 520,
            "at": "l2:hurry"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8632,
            "y": 510,
            "at": "l3:first"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1600,
            "y": 1390,
            "at": "l4:papers"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 4696,
            "y": 1510,
            "at": "l5:account"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; lỡ bị lừa, báo ngay ngân hàng và công an.",
            "x": 7932,
            "y": 1810,
            "size": 28,
            "at": "l6:end",
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
          "say": "Every fake circles four things.",
          "sub": "Tin giả nào cũng xoay quanh bốn thứ.",
          "keys": [
            "bốn thứ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: your hurry.",
          "sub": "Một: sự vội.",
          "keys": [
            "sự vội"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: money paid first.",
          "sub": "Hai: tiền nộp trước.",
          "keys": [
            "tiền nộp trước"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: your original papers.",
          "sub": "Ba: giấy tờ gốc.",
          "keys": [
            "giấy tờ gốc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Four: your account. Guard all four.",
          "sub": "Bốn: tài khoản của bạn. Giữ chặt cả bốn.",
          "keys": [
            "tài khoản của bạn"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Today: check one post you plan to apply for.",
          "sub": "Hôm nay: kiểm tra lại một tin bạn đang định ứng tuyển.",
          "keys": [
            "kiểm tra lại một tin"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s30",
      "module": "QUIZ-01",
      "ref": "questions[17]",
      "data": {
        "q": "Which rule protects your identity documents during a job search?",
        "options": [
          "Send only the front side of your card, since the back is not important",
          "Send them early, because fast applicants usually get the best positions",
          "Do not send real ID papers until you know the company is real"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "identification-card",
        "why": "Chưa rõ công ty, chưa gửi căn cước."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which rule protects your identity documents during a job search?",
          "sub": "Quy tắc nào giữ an toàn cho giấy tờ tuỳ thân khi bạn đi tìm việc?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Do not send real ID papers until you know the company is real.",
          "sub": "Chưa rõ công ty thật, chưa gửi giấy tờ thật."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Not sure about the company? Do not send your ID.",
          "sub": "Chưa rõ công ty, chưa gửi căn cước."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s31",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Tìm việc an toàn"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting below.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ.",
          "face": "happy"
        }
      ]
    }
  ],
  "loop": {
    "open": "d01",
    "close": "d19"
  }
};
