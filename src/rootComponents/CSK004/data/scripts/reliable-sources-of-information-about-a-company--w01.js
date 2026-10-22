// Kịch bản video W lần 3 (#110) — "Những nguồn thông tin đáng tin về một công ty" · chuỗi "Chuẩn bị phỏng vấn xin việc"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "reliable-sources-of-information-about-a-company--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "job-seekers",
    "slug": "reliable-sources-of-information-about-a-company",
    "door": "ky-nang",
    "level": "B1",
    "title": "Những nguồn thông tin đáng tin về một công ty",
    "series": "Chuẩn bị phỏng vấn xin việc"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô (5 × 2) đi theo MỘT TUẦN TÌM VIỆC của Dũng (T2 21:00 tin nhắn hẹn quán cà phê → T2 tra cổng đăng ký, hỏi lại, không đi → T3 lời mời thật: website, công bố thông tin, trang mạng xã hội → T4 sáng đọc báo, “Khoan đã!” tập với Lan (bài tài trợ cũ) → T4 khuya ba bài một sao, Lan “Đọc tiếp đã” → T5 sáng cà phê với bác Bình (người trong cuộc) → T5 tối năm dấu hiệu đáng ngờ, lời mời thứ Hai dính 3/5 → T6 9:00 phỏng vấn thật → T6 17:00 quán cà phê, khép vòng). Nhân vật: Dũng (chính, gộp Kha p5, Thiện p17, “bạn” p13), Lan (bạn cùng trọ: “Đọc tiếp đã” p17, đóng vai người phỏng vấn), bác Bình (từng làm ở công ty, nay nghỉ hưu: người trong cuộc p19–p20), cô Hoa (nhân sự, chỉ hỏi câu trung lập). Ca dao neo: “Trăm nghe không bằng một thấy” → khép “… không bằng một lần tra”. Cảnh ngắt nhịp: BRK-07 (rehook), BRK-04 (hiểu lầm trang mạng p10), BRK-05 (nhắc nhanh). “3/5 dấu hiệu” là đếm từ chính tình huống p5 (không tra được, chỉ nhắn chat, hẹn quán cà phê), không phải số liệu ngoài. Bản cũ: w145/bak/reliable-sources-of-information-about-a-company--w01.js.",
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
            "id": "a-mg",
            "t": "illus",
            "name": "magnifying-glass-tilted-left",
            "x": 60,
            "y": 110,
            "size": 110,
            "at": "l1:type"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "Bài khen nức nở",
            "x": 200,
            "y": 120,
            "size": 56,
            "at": "l1:praise",
            "color": "accent"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "Bình luận chê thậm tệ",
            "x": 200,
            "y": 210,
            "size": 56,
            "at": "l1:angry",
            "color": "coral"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "Tin cũ, không rõ ngày",
            "x": 200,
            "y": 300,
            "size": 56,
            "at": "l1:date",
            "color": "muted"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Tin cái nào?",
            "x": 60,
            "y": 430,
            "size": 90,
            "at": "l2:trust",
            "color": "accent",
            "hl": [
              {
                "text": "cái nào",
                "at": "l2:which"
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
          "say": "You type a company's name online. You get glowing praise, angry comments, and old news with no date.",
          "sub": "Bạn gõ tên công ty lên mạng. Nhận về bài khen nức nở, bình luận chê thậm tệ, tin cũ không rõ ngày.",
          "keys": [
            "khen nức nở",
            "chê thậm tệ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So which one do you trust?",
          "sub": "Vậy tin cái nào bây giờ?",
          "keys": [
            "tin cái nào"
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
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "hot-beverage"
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai 21:00 · tin nhắn lạ",
            "icon": "mobile-phone"
          },
          {
            "id": "a-msg",
            "t": "text",
            "text": "“Công ty XNK lớn”",
            "x": 920,
            "y": 640,
            "size": 46,
            "at": "l2:big",
            "color": "coral"
          },
          {
            "id": "a-msg2",
            "t": "text",
            "text": "→ hẹn ở quán cà phê",
            "x": 920,
            "y": 700,
            "size": 42,
            "at": "l2:café",
            "color": "coral",
            "hl": [
              {
                "text": "quán cà phê",
                "at": "l2:café"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Trăm nghe không bằng một thấy”",
            "x": 60,
            "y": 600,
            "size": 50,
            "at": "l5:hundred",
            "color": "accent",
            "hl": [
              {
                "text": "một thấy",
                "at": "l5:seeing"
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
          "say": "Meet Dũng. Final-year student, warehouse part-timer, always in a hurry.",
          "sub": "Đây là Dũng. Sinh viên năm cuối, làm thêm ở kho, lúc nào cũng vội.",
          "keys": [
            "lúc nào cũng vội"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Monday night, a chat message: we are a big import company, come to this café tomorrow.",
          "sub": "Tối thứ Hai, tin nhắn chat: bên anh là công ty xuất nhập khẩu lớn, mai em ra quán cà phê này nhé.",
          "keys": [
            "quán cà phê"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "A big company... but an interview in a café? Okay, I'll go!",
          "sub": "Công ty lớn... mà phỏng vấn ở quán cà phê? Thôi kệ, đi luôn!",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Hold your horses, Dũng.",
          "sub": "Khoan, Dũng ơi, ghìm cương lại đã."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: a hundred hearings are not worth one seeing.",
          "sub": "Ông bà dặn: “Trăm nghe không bằng một thấy.”",
          "keys": [
            "Trăm nghe không bằng một thấy"
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
      "ref": "p5"
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
            "text": "Nguồn nào đáng tin?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:sources",
            "hl": [
              {
                "text": "đáng tin",
                "at": "l1:trust"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: 1 nguồn biết hết",
            "x": 2028,
            "y": 160,
            "size": 48,
            "at": "l2:everything",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:looking"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: đúng nguồn, đúng câu",
            "x": 2028,
            "y": 240,
            "size": 54,
            "at": "l2:looking",
            "color": "accent",
            "hl": [
              {
                "text": "đúng nguồn",
                "at": "l2:looking"
              }
            ]
          },
          {
            "id": "b-r1",
            "t": "text",
            "text": "Có thật không?",
            "x": 2028,
            "y": 350,
            "size": 46,
            "at": "l3:real"
          },
          {
            "id": "b-s1",
            "t": "text",
            "text": "→ dữ liệu nhà nước",
            "x": 2488,
            "y": 350,
            "size": 46,
            "at": "l3:state",
            "color": "accent"
          },
          {
            "id": "b-r2",
            "t": "text",
            "text": "Làm ăn ra sao?",
            "x": 2028,
            "y": 420,
            "size": 46,
            "at": "l4:business"
          },
          {
            "id": "b-s2",
            "t": "text",
            "text": "→ báo cáo, báo chí",
            "x": 2488,
            "y": 420,
            "size": 46,
            "at": "l4:news",
            "color": "accent"
          },
          {
            "id": "b-r3",
            "t": "text",
            "text": "Muốn được nhìn thế nào?",
            "x": 2028,
            "y": 490,
            "size": 46,
            "at": "l5:seen"
          },
          {
            "id": "b-s3",
            "t": "text",
            "text": "→ trang chính thức",
            "x": 2608,
            "y": 490,
            "size": 46,
            "at": "l5:pages",
            "color": "accent"
          },
          {
            "id": "b-r4",
            "t": "text",
            "text": "Bên trong ra sao?",
            "x": 2028,
            "y": 560,
            "size": 46,
            "at": "l6:inside"
          },
          {
            "id": "b-s4",
            "t": "text",
            "text": "→ người trong cuộc",
            "x": 2488,
            "y": 560,
            "size": 46,
            "at": "l6:insiders",
            "color": "accent",
            "hl": [
              {
                "text": "người trong cuộc",
                "at": "l6:insiders"
              }
            ]
          },
          {
            "id": "b-dont",
            "t": "text",
            "text": "Đừng lấy quảng cáo đoán văn hoá",
            "x": 2028,
            "y": 680,
            "size": 44,
            "at": "l7:advert",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So which sources can you trust about a company?",
          "sub": "Vậy nguồn nào đáng tin khi tìm hiểu một công ty?",
          "keys": [
            "nguồn nào đáng tin"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No single source knows everything. Know what you're looking for.",
          "sub": "Không nguồn nào biết hết. Hãy biết mình đang tìm gì.",
          "keys": [
            "biết mình đang tìm gì"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Is it real and legal? Ask state records.",
          "sub": "Có thật, hợp pháp không? Hỏi dữ liệu nhà nước."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "How is business going? Reports and the news.",
          "sub": "Làm ăn ra sao? Báo cáo và báo chí."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "How does it want to be seen? Its official pages.",
          "sub": "Muốn được nhìn nhận thế nào? Trang chính thức."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "What's it really like inside? Reviews and insiders.",
          "sub": "Bên trong thật sự ra sao? Đánh giá và người trong cuộc.",
          "keys": [
            "người trong cuộc"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Don't judge culture from an advert, or business from one angry comment.",
          "sub": "Đừng lấy bài quảng cáo đoán văn hoá, hay một bình luận giận dữ đoán chuyện làm ăn."
        }
      ],
      "ref": "p1,p2"
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
            "text": "① Thứ Hai · Có thật không?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:checks"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop",
                "magnifying-glass-tilted-left"
              ]
            },
            "at": "l1:night",
            "caption": "Thứ Hai 21:15 · tra trên máy",
            "icon": "laptop"
          },
          {
            "id": "c-reg",
            "t": "text",
            "text": "Cổng đăng ký doanh nghiệp",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l3:register",
            "color": "accent",
            "hl": [
              {
                "text": "đăng ký doanh nghiệp",
                "at": "l3:register"
              }
            ]
          },
          {
            "id": "c-reg2",
            "t": "text",
            "text": "tên · mã số · trụ sở · ngành",
            "x": 3996,
            "y": 240,
            "size": 34,
            "at": "l3:address",
            "color": "muted"
          },
          {
            "id": "c-tax",
            "t": "text",
            "text": "Tra mã số thuế: còn hoạt động?",
            "x": 3996,
            "y": 320,
            "size": 42,
            "at": "l4:tax"
          },
          {
            "id": "c-0",
            "t": "text",
            "text": "Kết quả: không có",
            "x": 3996,
            "y": 420,
            "size": 56,
            "at": "l2:Nothing",
            "color": "coral",
            "hl": [
              {
                "text": "không có",
                "at": "l2:Nothing"
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
          "say": "First stop: Monday night. Dũng checks before he goes.",
          "sub": "Chặng một: tối thứ Hai. Dũng tra trước khi đi.",
          "keys": [
            "tra trước khi đi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Typing the name into the business register... Nothing. No match at all.",
          "sub": "Gõ tên lên cổng đăng ký doanh nghiệp... Không có. Không trùng khớp gì cả.",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The state business register shows the name, company code, address, founding date and business lines.",
          "sub": "Cổng đăng ký doanh nghiệp cho tra tên, mã số doanh nghiệp, trụ sở, ngày thành lập, ngành nghề.",
          "keys": [
            "Cổng đăng ký doanh nghiệp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And the tax code lookup shows if it's still operating. The most reliable source on legal status.",
          "sub": "Trang tra mã số thuế cho biết còn hoạt động hay đã ngừng. Nguồn tin cậy nhất về tư cách pháp lý.",
          "keys": [
            "Nguồn tin cậy nhất"
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
      "ref": "p3,p5"
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
            "at": "l1",
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
            "id": "c-ask",
            "t": "text",
            "text": "Nhắn: xin gặp ở văn phòng",
            "x": 3996,
            "y": 520,
            "size": 44,
            "at": "l1:office",
            "color": "accent"
          },
          {
            "id": "c-sil",
            "t": "text",
            "text": "→ vòng vo, rồi im lặng",
            "x": 4036,
            "y": 590,
            "size": 44,
            "at": "l2:silence",
            "color": "muted",
            "hl": [
              {
                "text": "im lặng",
                "at": "l2:silence"
              }
            ]
          },
          {
            "id": "c-rule",
            "t": "text",
            "text": "Tra không ra, chưa vội đến hẹn",
            "x": 3996,
            "y": 690,
            "size": 46,
            "at": "l3:rush",
            "hl": [
              {
                "text": "chưa vội đến hẹn",
                "at": "l3:rush"
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
          "say": "Could we meet at your office instead?",
          "sub": "Em xin phép được gặp ở văn phòng công ty ạ?",
          "face": "neutral",
          "pose": "phone"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A vague reply, then silence. Dũng doesn't go. Address far from the meeting place? Ask politely too.",
          "sub": "Bên kia trả lời vòng vo rồi im lặng. Dũng không đi. Địa chỉ đăng ký khác hẳn nơi hẹn? Cũng lịch sự hỏi lại.",
          "keys": [
            "Dũng không đi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Can't find the name? Don't rush to the meeting. And use the real government site, as steps may change.",
          "sub": "Tra không ra tên, chưa vội đến hẹn. Và dùng đúng trang của cơ quan nhà nước, vì cách tra có thể đổi.",
          "keys": [
            "chưa vội đến hẹn"
          ]
        }
      ],
      "ref": "p4,p5,p6"
    },
    {
      "id": "s05",
      "module": "BRK-07",
      "data": {
        "question": "Công ty có thật rồi, thì tin nó nói gì?",
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
          "say": "If a company is real, can you believe what it says?",
          "sub": "Công ty có thật rồi, thì tin được những gì nó nói?",
          "keys": [
            "tin được"
          ]
        }
      ],
      "ref": "p7"
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
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Ba · Công ty tự nói",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l2:website"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "envelope"
              ]
            },
            "at": "l1:email",
            "caption": "Thứ Ba 10:00 · email mời thật",
            "icon": "envelope"
          },
          {
            "id": "d-web",
            "t": "text",
            "text": "Website chính thức",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l2:website",
            "color": "accent"
          },
          {
            "id": "d-web2",
            "t": "text",
            "text": "= công ty tự giới thiệu",
            "x": 5964,
            "y": 245,
            "size": 46,
            "at": "l2:itself",
            "hl": [
              {
                "text": "tự giới thiệu",
                "at": "l2:itself"
              }
            ]
          },
          {
            "id": "d-pos",
            "t": "text",
            "text": "Tích cực → cần thêm nguồn",
            "x": 5964,
            "y": 325,
            "size": 44,
            "at": "l3:positive",
            "color": "coral"
          },
          {
            "id": "d-list",
            "t": "text",
            "text": "Niêm yết: báo cáo theo quy định",
            "x": 5964,
            "y": 420,
            "size": 38,
            "at": "l4:listed",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: Tuesday. A real invitation arrives, from a manufacturer, by email with the company's own domain.",
          "sub": "Chặng hai: thứ Ba. Lời mời thật đến, từ một công ty sản xuất, qua email theo tên miền công ty.",
          "keys": [
            "Lời mời thật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The official website shows what the company says about itself: products, history, direction.",
          "sub": "Website chính thức cho biết công ty tự nói gì về mình: sản phẩm, lịch sử, định hướng.",
          "keys": [
            "tự nói gì về mình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A good base, but always positive. Like a dating profile: true, and well lit.",
          "sub": "Nền tảng tốt, nhưng luôn tích cực. Như hồ sơ hẹn hò: thật, mà ánh sáng đẹp.",
          "keys": [
            "luôn tích cực"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Listed company? Investor pages and stock exchange disclosures must follow rules, not just promotion.",
          "sub": "Công ty niêm yết? Mục quan hệ cổ đông, trang công bố của sở giao dịch phải theo quy định, không chỉ để quảng bá."
        }
      ],
      "ref": "p7,p8"
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
            "id": "d-fb",
            "t": "text",
            "text": "Trang mạng xã hội: mở từ website",
            "x": 5964,
            "y": 520,
            "size": 44,
            "at": "l1:link",
            "color": "accent",
            "hl": [
              {
                "text": "mở từ website",
                "at": "l1:link"
              }
            ]
          },
          {
            "id": "d-fake",
            "t": "text",
            "text": "Tìm theo tên → trang nhái",
            "x": 5964,
            "y": 600,
            "size": 44,
            "at": "l2:look-alike",
            "color": "coral",
            "hl": [
              {
                "text": "trang nhái",
                "at": "l2:look-alike"
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
          "say": "Their social page shows recent activity. Open it from the link on their website.",
          "sub": "Trang mạng xã hội chính thức cho thấy hoạt động gần đây. Hãy mở từ đường dẫn trên website.",
          "keys": [
            "mở từ đường dẫn trên website"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Search by name, and you may meet look-alike pages.",
          "sub": "Tìm theo tên thì có thể gặp trang nhái, tên na ná."
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s08",
      "module": "BRK-04",
      "data": {
        "title": "Hiểu lầm thường gặp",
        "wrong": "Có tên và logo là trang chính thức",
        "right": "Vào trang từ website, tin lớn tìm thêm nguồn",
        "wrongIllus": "face-with-raised-eyebrow",
        "rightIllus": "link"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Name and logo means official? Anyone can copy them.",
          "sub": "Có tên, có logo là trang chính thức? Ai cũng chép được.",
          "keys": [
            "Ai cũng chép được"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Enter from the website. Check big news elsewhere.",
          "sub": "Vào từ website. Tin lớn thì tìm thêm nguồn.",
          "keys": [
            "Vào từ website"
          ]
        }
      ],
      "ref": "p10"
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
            "id": "d-cut",
            "t": "text",
            "text": "“Sắp cắt giảm nhân sự!”",
            "x": 6804,
            "y": 690,
            "size": 44,
            "at": "l1:cuts",
            "color": "coral"
          },
          {
            "id": "d-rule",
            "t": "text",
            "text": "Đi từ website chính thức",
            "x": 5964,
            "y": 690,
            "size": 44,
            "at": "l2:official",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A fake page posts: job cuts soon! Ask about it as fact, and you trap yourself.",
          "sub": "Trang nhái đăng: “sắp cắt giảm nhân sự!”. Hỏi như thể chắc chắn là tự đặt mình vào thế khó.",
          "keys": [
            "tự đặt mình vào thế khó"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Official page? Go through the official website.",
          "sub": "Trang chính thức thì đi vào từ website chính thức.",
          "keys": [
            "đi vào từ website chính thức"
          ]
        }
      ],
      "ref": "p10,p11"
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
            "text": "③ Thứ Tư · Đọc báo",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:news"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "hold",
                  "face": "surprised"
                }
              ],
              "props": [
                "newspaper",
                "hot-beverage"
              ]
            },
            "at": "l1:Wednesday",
            "caption": "Thứ Tư 7:00 · đọc báo",
            "icon": "newspaper"
          },
          {
            "id": "e-art",
            "t": "text",
            "text": "“Sắp mở nhà máy thứ hai!”",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l2:factory",
            "color": "accent"
          },
          {
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 300,
            "w": 46,
            "h": 46,
            "at": "l3:advert",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 282,
            "size": 58,
            "at": "l3:advert+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Tin tức hay quảng cáo?",
            "x": 8002,
            "y": 292,
            "size": 44,
            "at": "l3:advert+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 390,
            "w": 46,
            "h": 46,
            "at": "l4:date",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 372,
            "size": 58,
            "at": "l4:date+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Xem ngày đăng",
            "x": 8002,
            "y": 382,
            "size": 44,
            "at": "l4:date+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 480,
            "w": 46,
            "h": 46,
            "at": "l5:second",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 462,
            "size": 58,
            "at": "l5:second+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Tìm nguồn thứ hai",
            "x": 8002,
            "y": 472,
            "size": 44,
            "at": "l5:second+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Wednesday morning, the news.",
          "sub": "Chặng ba: sáng thứ Tư, đọc báo về công ty."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Wow! They're opening a second factory soon! I'll say that on Friday.",
          "sub": "Ồ! Công ty sắp mở nhà máy thứ hai! Thứ Sáu mình nói câu này.",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "News or advert? A sponsored label, or one-sided praise, means the company paid.",
          "sub": "Tin tức hay quảng cáo? Nhãn tài trợ, giọng ca ngợi một chiều thường do doanh nghiệp đặt.",
          "keys": [
            "Tin tức hay quảng cáo"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Check the date. Old plans may have changed.",
          "sub": "Xem ngày đăng. Kế hoạch từ vài năm trước có thể đã đổi.",
          "keys": [
            "Xem ngày đăng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And find a second source for important events.",
          "sub": "Và tìm thêm nguồn thứ hai cho sự kiện quan trọng."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "That evening he rehearses. This is Lan, his roommate, playing the interviewer.",
          "sub": "Tối đó Dũng tập trả lời. Đây là Lan, bạn cùng trọ, đóng vai người phỏng vấn."
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Thứ Tư 20:00 · tập với Lan",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "lan",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Trích bài báo cũ, bài tài trợ",
          "why": "Bài từ vài năm trước, cuối bài ghi nội dung tài trợ; tin gần đây không còn nhắc nhà máy.",
          "rule": "Xem ngày, xem nhãn, rồi mới trích"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "So, what do you know about our company?",
          "sub": "Vậy em biết gì về công ty chúng tôi?",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "You're opening a second factory soon!",
          "sub": "Công ty sắp mở nhà máy thứ hai ạ!",
          "face": "happy",
          "pose": "thumb",
          "stop": true
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Wait a second!",
          "sub": "Khoan đã!",
          "face": "stern",
          "pose": "stop"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "That article is years old. The small print says: sponsored. And recent news says nothing.",
          "sub": "Bài từ vài năm trước. Dòng chữ nhỏ cuối bài: nội dung tài trợ. Tin gần đây không nhắc nữa.",
          "keys": [
            "nội dung tài trợ"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Thử lại nhé.",
          "phase": "redo"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "dung",
          "say": "How are the company's plans to expand production now?",
          "sub": "Kế hoạch mở rộng sản xuất của công ty hiện ra sao ạ?",
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
            "id": "e-rule",
            "t": "text",
            "text": "Xem ngày, xem nhãn, rồi mới trích",
            "x": 7932,
            "y": 640,
            "size": 52,
            "at": "l1:date",
            "color": "accent",
            "hl": [
              {
                "text": "rồi mới trích",
                "at": "l1:quote"
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
          "say": "Check the date, check the label, then quote. Or turn it into a gentle question.",
          "sub": "Xem ngày, xem nhãn, rồi mới trích. Hoặc biến nó thành câu hỏi nhẹ nhàng.",
          "keys": [
            "Xem ngày, xem nhãn, rồi mới trích"
          ]
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
            "text": "④ Thứ Tư khuya · Đánh giá",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:review"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "phone",
                  "face": "worried"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "star",
                "mobile-phone"
              ]
            },
            "at": "l1:midnight",
            "caption": "Thứ Tư 23:00 · trang đánh giá",
            "icon": "star"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "3 bài 1 sao gay gắt",
            "x": 60,
            "y": 1260,
            "size": 50,
            "at": "l2:three",
            "color": "coral",
            "hl": [
              {
                "text": "1 sao",
                "at": "l2:one-star"
              }
            ]
          },
          {
            "id": "f-cancel",
            "t": "text",
            "text": "→ suýt huỷ phỏng vấn",
            "x": 100,
            "y": 1335,
            "size": 44,
            "at": "l2:cancel",
            "color": "muted"
          },
          {
            "id": "f-read",
            "t": "text",
            "text": "“Đọc tiếp đã”",
            "x": 60,
            "y": 1420,
            "size": 56,
            "at": "l3:Read",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: Wednesday, near midnight. Dũng opens a review site.",
          "sub": "Chặng bốn: thứ Tư, gần nửa đêm. Dũng mở trang đánh giá công ty."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Three harsh one-star reviews! I'll cancel the interview.",
          "sub": "Ba bài một sao gay gắt quá! Thôi huỷ phỏng vấn.",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Read on first.",
          "sub": "Đọc tiếp đã.",
          "face": "neutral"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Reviews let insiders speak, but they lean. Very happy or very angry people write more.",
          "sub": "Trang đánh giá cho nghe người trong cuộc, nhưng dễ lệch: người rất vui hay rất bực viết nhiều hơn.",
          "keys": [
            "dễ lệch"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Some posts polish, some smear. And one bad team isn't the whole company.",
          "sub": "Có bài đánh bóng, có bài bôi xấu. Và một phòng ban tệ chưa phải cả công ty.",
          "keys": [
            "một phòng ban tệ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 200
        }
      ],
      "ref": "p15,p17"
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
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1520,
            "w": 46,
            "h": 46,
            "at": "l1:Skip",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 65,
            "y": 1502,
            "size": 58,
            "at": "l1:Skip+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "Bỏ bài cao nhất, thấp nhất",
            "x": 130,
            "y": 1512,
            "size": 40,
            "at": "l1:Skip+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1595,
            "w": 46,
            "h": 46,
            "at": "l1:ten",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 65,
            "y": 1577,
            "size": 58,
            "at": "l1:ten+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "Đọc ~10 bài gần nhất",
            "x": 130,
            "y": 1587,
            "size": 40,
            "at": "l1:ten+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1670,
            "w": 46,
            "h": 46,
            "at": "l1:repeated",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 65,
            "y": 1652,
            "size": 58,
            "at": "l1:repeated+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "Tìm điểm nhắc lại",
            "x": 130,
            "y": 1662,
            "size": 40,
            "at": "l1:repeated+200"
          },
          {
            "id": "f-old",
            "t": "text",
            "text": "→ chê: 1 phòng ban cũ",
            "x": 60,
            "y": 1740,
            "size": 40,
            "at": "l2:old",
            "color": "muted"
          },
          {
            "id": "f-new",
            "t": "text",
            "text": "→ mới: người mới được kèm",
            "x": 60,
            "y": 1800,
            "size": 40,
            "at": "l2:coached",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: skip the highest and lowest, read about ten recent ones, find repeated points.",
          "sub": "Vậy: bỏ bài cao nhất và thấp nhất, đọc khoảng mười bài gần đây, tìm điểm được nhắc lại.",
          "keys": [
            "khoảng mười bài gần đây"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The complaints? One old department, years ago. New reviews say newcomers are coached well.",
          "sub": "Lời chê? Từ một phòng ban cũ, vài năm trước. Bài mới đều nói người mới được kèm tốt.",
          "keys": [
            "người mới được kèm tốt"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Many mention overtime or late pay? Ask gently. Drop both ends, look for what's shared.",
          "sub": "Nhiều người nhắc tăng ca, chậm lương? Hỏi thêm nhẹ nhàng. Bỏ hai đầu, nhìn điểm chung.",
          "keys": [
            "Bỏ hai đầu, nhìn điểm chung"
          ]
        }
      ],
      "ref": "p16,p17,p18"
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
            "at": "l5",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Năm · Người trong cuộc",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:insider"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "left"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold"
                }
              ],
              "props": [
                "hot-beverage"
              ]
            },
            "at": "l1:coffee",
            "caption": "Thứ Năm 7:30 · cà phê với bác Bình",
            "icon": "hot-beverage"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Qua bạn bè, cựu sinh viên",
            "x": 2028,
            "y": 1260,
            "size": 42,
            "at": "l2:alumni",
            "color": "muted"
          },
          {
            "id": "g-q1",
            "t": "text",
            "text": "“Một ngày ở phòng bác?”",
            "x": 2028,
            "y": 1340,
            "size": 48,
            "at": "l3:workday",
            "color": "accent"
          },
          {
            "id": "g-q2",
            "t": "text",
            "text": "“Vì sao gắn bó lâu?”",
            "x": 2028,
            "y": 1420,
            "size": 48,
            "at": "l4:kept",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: Thursday, coffee with an insider.",
          "sub": "Chặng năm: sáng thứ Năm, cà phê với người trong cuộc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Bác Bình, who worked there for years. Dũng found him through alumni and friends.",
          "sub": "Đây là bác Bình, từng làm ở đó nhiều năm. Dũng tìm được bác qua cựu sinh viên, bạn bè."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "What's a usual workday like in your department?",
          "sub": "Một ngày làm việc ở phòng bác thường thế nào ạ?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "And what kept you there so long?",
          "sub": "Và điều gì khiến bác gắn bó lâu như vậy ạ?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A short chat can beat hours online. Specific questions, short, respectful of his time.",
          "sub": "Một cuộc trò chuyện ngắn có thể hơn hàng giờ đọc mạng. Hỏi cụ thể, ngắn, tôn trọng thời gian người ta.",
          "keys": [
            "hơn hàng giờ đọc mạng"
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
            "fit": "G",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "g-no",
            "t": "text",
            "text": "Tránh hỏi tin nội bộ nhạy cảm",
            "x": 2028,
            "y": 1610,
            "size": 44,
            "at": "l1:sensitive",
            "color": "coral"
          },
          {
            "id": "g-one",
            "t": "text",
            "text": "Góc nhìn của 1 người",
            "x": 2028,
            "y": 1690,
            "size": 50,
            "at": "l2:one",
            "hl": [
              {
                "text": "1 người",
                "at": "l2:person's"
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
          "say": "Avoid sensitive inside information.",
          "sub": "Tránh hỏi thông tin nội bộ nhạy cảm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And remember: it's still one person's view. Another team may differ.",
          "sub": "Và nhớ: đó vẫn là góc nhìn của một người, nhóm khác có thể khác.",
          "keys": [
            "góc nhìn của một người"
          ]
        }
      ],
      "ref": "p20"
    },
    {
      "id": "s17",
      "module": "BRK-05",
      "data": {
        "title": "Đến đây, Dũng đã biết",
        "points": [
          "Tra tên trên cổng đăng ký",
          "Vào trang từ website",
          "Xem ngày, xem nhãn"
        ],
        "illus": "magnifying-glass-tilted-left"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Recap. Check the register.",
          "sub": "Nhắc nhanh. Tra tên trên cổng đăng ký."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Enter pages from the website.",
          "sub": "Vào trang từ website."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Check date and label.",
          "sub": "Xem ngày, xem nhãn."
        }
      ],
      "ref": "p6,p11,p14"
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Năm tối · Dấu hiệu lạ",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:warning",
            "hl": [
              {
                "text": "Dấu hiệu lạ",
                "at": "l1:signs"
              }
            ]
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1260,
            "w": 46,
            "h": 46,
            "at": "l2:register",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 1242,
            "size": 58,
            "at": "l2:register+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Không tra được trên cổng đăng ký",
            "x": 4066,
            "y": 1252,
            "size": 46,
            "at": "l2:register+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1345,
            "w": 46,
            "h": 46,
            "at": "l2:chat",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 1327,
            "size": 58,
            "at": "l2:chat+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Chỉ nhắn qua ứng dụng chat",
            "x": 4066,
            "y": 1337,
            "size": 46,
            "at": "l2:chat+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1430,
            "w": 46,
            "h": 46,
            "at": "l3:fees",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 1412,
            "size": 58,
            "at": "l3:fees+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Đòi phí hồ sơ, đặt cọc",
            "x": 4066,
            "y": 1422,
            "size": 46,
            "at": "l3:fees+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1515,
            "w": 46,
            "h": 46,
            "at": "l4:pay",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 1497,
            "size": 58,
            "at": "l4:pay+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Việc nhẹ, lương rất cao",
            "x": 4066,
            "y": 1507,
            "size": 46,
            "at": "l4:pay+200"
          },
          {
            "id": "h-c4",
            "t": "box",
            "x": 3996,
            "y": 1600,
            "w": 46,
            "h": 46,
            "at": "l5:café",
            "stroke": 5
          },
          {
            "id": "h-k4",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 1582,
            "size": 58,
            "at": "l5:café+600",
            "color": "accent"
          },
          {
            "id": "h-l4",
            "t": "text",
            "text": "Hẹn ở nơi không liên quan",
            "x": 4066,
            "y": 1592,
            "size": 46,
            "at": "l5:café+200"
          },
          {
            "id": "h-mon",
            "t": "text",
            "text": "Lời mời thứ Hai: 3/5 ✓",
            "x": 4936,
            "y": 1350,
            "size": 50,
            "at": "l6:three",
            "color": "coral",
            "hl": [
              {
                "text": "3/5",
                "at": "l6:three"
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
          "say": "Sixth stop: Thursday night. Dũng looks back at Monday's offer, with the warning signs.",
          "sub": "Chặng sáu: tối thứ Năm. Dũng nhìn lại lời mời hôm thứ Hai, theo các dấu hiệu đáng ngờ.",
          "keys": [
            "dấu hiệu đáng ngờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not in the business register. Contact only by chat, no company email.",
          "sub": "Không tra được trên cổng đăng ký. Chỉ liên hệ qua chat, không có email tên miền công ty."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fees for papers, uniforms, training, or a deposit before work.",
          "sub": "Đòi phí hồ sơ, đồng phục, đào tạo hay đặt cọc trước khi đi làm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Very high pay for simple work, no experience needed.",
          "sub": "Hứa lương rất cao cho việc đơn giản, không cần kinh nghiệm."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And a meeting place that makes no sense, like a café for a big company.",
          "sub": "Và hẹn ở nơi không liên quan, như quán cà phê với công ty “lớn”."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Monday's offer ticked three of five. Dũng's gut was right.",
          "sub": "Lời mời thứ Hai dính ba trên năm. Linh cảm của Dũng đúng.",
          "keys": [
            "ba trên năm"
          ]
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
            "id": "h-money",
            "t": "text",
            "text": "Chưa chắc: không chuyển tiền",
            "x": 3996,
            "y": 1690,
            "size": 50,
            "at": "l1:money",
            "color": "accent",
            "hl": [
              {
                "text": "không chuyển tiền",
                "at": "l1:money"
              }
            ]
          },
          {
            "id": "h-id",
            "t": "text",
            "text": "không gửi giấy tờ tuỳ thân",
            "x": 3996,
            "y": 1770,
            "size": 46,
            "at": "l1:ID",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "See these signs? Ask around, and never send money or ID papers until you're sure.",
          "sub": "Gặp các dấu hiệu này: hỏi thêm người quen, và đừng chuyển tiền hay gửi giấy tờ tuỳ thân khi chưa chắc.",
          "keys": [
            "đừng chuyển tiền"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Suspect a scam? You can ask the local authorities.",
          "sub": "Nghi lừa đảo, có thể hỏi cơ quan chức năng địa phương."
        }
      ],
      "ref": "p22"
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
            "at": "l5",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Thứ Sáu 9:00 · Phỏng vấn",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "walk",
                  "from": "left",
                  "at": "l1"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up"
              ]
            },
            "at": "l1:nine",
            "caption": "Thứ Sáu 9:00 · văn phòng thật",
            "icon": "office-building"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Có thật: cổng đăng ký ✓",
            "x": 5964,
            "y": 1260,
            "size": 46,
            "at": "l3:register"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Tự nói: website ✓",
            "x": 5964,
            "y": 1335,
            "size": 46,
            "at": "l3:website"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Bên trong: đánh giá, bác Bình ✓",
            "x": 5964,
            "y": 1410,
            "size": 44,
            "at": "l3:reviews"
          },
          {
            "id": "i-ask",
            "t": "text",
            "text": "Hỏi: kèm người mới thế nào?",
            "x": 5964,
            "y": 1510,
            "size": 44,
            "at": "l4:newcomers",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: Friday, nine a.m., a real office. Cô Hoa from HR asks the classic.",
          "sub": "Chặng bảy: thứ Sáu, chín giờ, văn phòng thật. Cô Hoa bên nhân sự hỏi câu kinh điển."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "What do you know about our company?",
          "sub": "Em biết gì về công ty chúng tôi?",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Dũng answers from the register, their website, the reviews and Bác Bình. All checked.",
          "sub": "Dũng trả lời từ cổng đăng ký, website, các bài đánh giá và bác Bình. Đều đã kiểm.",
          "keys": [
            "Đều đã kiểm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "I read that newcomers here are coached well. How does that work in this team?",
          "sub": "Em đọc thấy người mới ở đây được kèm cặp tốt. Ở nhóm mình việc đó diễn ra thế nào ạ?",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And the answer matches what the new reviews said.",
          "sub": "Và câu trả lời khớp với những gì các bài mới viết.",
          "keys": [
            "khớp"
          ]
        }
      ],
      "ref": "p17,outro"
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
            "text": "Thứ Sáu 17:00 · Quán cà phê",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:café"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
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
                "hot-beverage"
              ]
            },
            "at": "l1:Friday",
            "caption": "Thứ Sáu 17:00 · lại một tin nhắn lạ",
            "icon": "mobile-phone"
          },
          {
            "id": "j-warn",
            "t": "text",
            "text": "Nhóm tìm việc cảnh báo tên ấy",
            "x": 7932,
            "y": 1260,
            "size": 44,
            "at": "l1:warns",
            "color": "coral"
          },
          {
            "id": "j-new",
            "t": "text",
            "text": "Tin mới: “việc nhẹ lương cao”",
            "x": 7932,
            "y": 1350,
            "size": 46,
            "at": "l2:easy",
            "color": "muted"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Trăm nghe không bằng…",
            "x": 7932,
            "y": 1570,
            "size": 52,
            "at": "l3:hundred",
            "color": "accent"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "… một lần tra”",
            "x": 7932,
            "y": 1650,
            "size": 64,
            "at": "l3:check",
            "color": "accent",
            "hl": [
              {
                "text": "một lần tra",
                "at": "l3:check"
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
          "say": "Friday, five p.m., a café again. His job group now warns about Monday's company name.",
          "sub": "Thứ Sáu, năm giờ chiều, lại quán cà phê. Nhóm tìm việc đang cảnh báo đúng cái tên hôm thứ Hai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Another message: easy work, high pay... Let me check the register first.",
          "sub": "Lại tin nhắn: việc nhẹ lương cao... Để mình tra cổng đăng ký đã.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A hundred hearings are not worth one seeing. Or for Dũng: one check.",
          "sub": "“Trăm nghe không bằng một thấy.” Với Dũng: không bằng một lần tra.",
          "keys": [
            "một lần tra"
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
      "ref": "p5,p6"
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
            "at": "l1:real",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l1:wants",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:check",
            "fit": "F",
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
            "x": 4636,
            "y": 420,
            "at": "l1:real+600"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6604,
            "y": 170,
            "at": "l1:wants+600"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 760,
            "y": 1520,
            "at": "l2:check+600"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: the state tells you it's real. The company tells you how it wants to look.",
          "sub": "Tóm lại: nhà nước cho biết công ty có thật, công ty cho biết họ muốn được nhìn thế nào.",
          "keys": [
            "có thật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "News and insiders help you check.",
          "sub": "Báo chí và người trong cuộc giúp bạn kiểm tra.",
          "keys": [
            "kiểm tra"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Today: look up your next company, and open its page from the website. Next: reading the job description.",
          "sub": "Hôm nay: tra tên công ty sắp phỏng vấn, mở trang mạng xã hội từ website. Bài sau: đọc bản mô tả công việc.",
          "keys": [
            "tra tên công ty"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s29",
      "module": "QUIZ-01",
      "ref": "questions[27]",
      "data": {
        "q": "What is a good way to read employee reviews about a company?",
        "options": [
          "Skip the best and worst, read about ten recent ones, and find repeated points",
          "Read only the oldest reviews, because they show the true history of the company",
          "Read only the single best review, so you stay positive before the interview"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "star",
        "why": "Bỏ hai đầu, tìm điểm lặp lại; bài gần đây phản ánh hiện tại tốt hơn."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What is a good way to read employee reviews about a company?",
          "sub": "Cách đọc đánh giá của nhân viên về công ty là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Skip the best and worst, read about ten recent ones, and find repeated points.",
          "sub": "Bỏ hai đầu, đọc khoảng mười bài gần đây, tìm điểm lặp lại."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Recent reviews show the present better.",
          "sub": "Đánh giá gần đây phản ánh tình hình hiện tại tốt hơn."
        }
      ]
    },
    {
      "id": "s30",
      "module": "QUIZ-01",
      "ref": "questions[36]",
      "data": {
        "q": "Which is a warning sign about a job invitation?",
        "options": [
          "They ask you to pay a fee for documents, uniforms or training first",
          "They send an email from an address using the company's own domain",
          "They give you a clear office address that matches official records"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "warning",
        "why": "Đòi phí trước khi đi làm là dấu hiệu đáng ngờ."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which is a warning sign about a job invitation?",
          "sub": "Đâu là dấu hiệu đáng ngờ của một lời mời làm việc?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "They ask you to pay a fee for documents, uniforms or training first.",
          "sub": "Họ đòi đóng phí hồ sơ, đồng phục hay đào tạo trước."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "A company email and a matching address are normal signs.",
          "sub": "Email theo tên miền công ty, địa chỉ khớp hồ sơ là dấu hiệu bình thường."
        }
      ]
    },
    {
      "id": "s31",
      "module": "END-05",
      "data": {
        "text": "Hôm nay: tra tên công ty sắp phỏng vấn",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting below.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ bên dưới."
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
