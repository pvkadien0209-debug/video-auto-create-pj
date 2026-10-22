// Kịch bản video W lần 3 (#110) — "Nhận ra việc làm thêm lừa đảo: đặt cọc, cộng tác viên online" · chuỗi "Đi làm thêm khi còn đi học"
// Giọng đọc tiếng Anh, phụ đề tiếng Việt; hoạt hình (SCENE/DLG/HOST/END-05) + thẻ. Đủ ý cho 40 câu hỏi của bài.
export default {
  "schema": "detpro.video-script/0.2",
  "id": "spot-part-time-job-scams--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "students-with-part-time-jobs",
    "slug": "spot-part-time-job-scams",
    "door": "ky-nang",
    "level": "B1",
    "title": "Nhận ra việc làm thêm lừa đảo: đặt cọc, cộng tác viên online",
    "series": "Đi làm thêm khi còn đi học"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô theo MỘT THÁNG TÌM VIỆC của Lan và Dũng (tối Chủ nhật tin cọc đồng phục → thứ Hai đọc tin tuyển → thứ Ba tiền cọc, phí → thứ Tư nhóm cộng tác viên → cuối tuần đơn combo → tuần sau giấy tờ, tài khoản → sáng thứ Bảy phỏng vấn nơi lạ → tối thứ Bảy lỡ bị lừa → tối Chủ nhật gọi bà Tư). Nhân vật theo w145/_series/students-with-part-time-jobs.md: Lan (Ngọc p6, người đi phỏng vấn p18–p20), Dũng (người đọc tin p1, ‘bạn’ p24), Bà Tư (người thân p26). Hằng (p16) kể không tên; quản lý nhà hàng (p6) chỉ được nhắc; người tuyển/kẻ lừa chỉ là tin nhắn. Số/luật chỉ từ bài: Bộ luật Lao động 2019 cấm bắt đặt cọc (p4; Điều 17 theo nguồn bài, ghi nhỏ trên bảng); ‘chín giờ’ là giờ hẹn kể chuyện (bản cũ). Cảnh ngắt nhịp: DLG s07 (chuyển cọc → câu từ chối mẫu, p5–p6), BRK-04 s10 (Hiểu lầm/Thực ra, p11), BRK-07 s17 (rehook: Dũng đã mất tiền), BRK-04 s19 (Cách A/Cách B, p24). Khép vòng: tối Chủ nhật mở bằng tin nhắn của Lan, khép bằng cuộc gọi bà Tư; ‘Tham thì thâm’ → ‘kể sớm thì vết thâm mau lành’. Câu đố giữ questions[19]. Bản cũ: w145/bak/spot-part-time-job-scams--w01.js.",
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
            "text": "“Chuyển cọc đồng phục ngay”",
            "x": 60,
            "y": 120,
            "size": 70,
            "at": "l1:uniform",
            "color": "accent",
            "hl": [
              {
                "text": "ngay",
                "at": "l1:now"
              }
            ]
          },
          {
            "id": "a-why",
            "t": "text",
            "text": "vì “nhiều người nộp đơn lắm”",
            "x": 70,
            "y": 250,
            "size": 48,
            "at": "l2:applied"
          },
          {
            "id": "a-next",
            "t": "text",
            "text": "Hôm sau: số tắt máy",
            "x": 70,
            "y": 340,
            "size": 50,
            "at": "l3:next",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A job message: send the uniform deposit now.",
          "sub": "Một tin nhắn tuyển dụng: chuyển tiền cọc đồng phục ngay.",
          "keys": [
            "cọc đồng phục"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Why the rush? “So many people have applied.”",
          "sub": "Sao gấp thế? “Nhiều người nộp đơn lắm.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The next day, that number is out of service.",
          "sub": "Hôm sau, số đó không liên lạc được nữa."
        }
      ],
      "ref": "p6"
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
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "money-with-wings"
              ]
            },
            "at": "l1",
            "caption": "Tối Chủ nhật · phòng trọ của Lan",
            "icon": "mobile-phone"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Tham thì thâm”",
            "x": 60,
            "y": 500,
            "size": 64,
            "at": "l3:Greed",
            "color": "accent",
            "hl": [
              {
                "text": "thâm",
                "at": "l3:bruise"
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
          "say": "Meet Lan, a student hunting for a part-time job. That message just landed on her phone.",
          "sub": "Đây là Lan, sinh viên đang tìm việc làm thêm. Tin nhắn ấy vừa đến máy Lan.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Servers for that famous restaurant near school? I'd better pay now!",
          "sub": "Tuyển phục vụ cho nhà hàng nổi tiếng gần trường? Phải chuyển ngay mới kịp!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Our elders warned: Greed leaves a bruise. Scammers just add: hurry.",
          "sub": "Ông bà dặn: “Tham thì thâm.” Kẻ lừa chỉ thêm một chữ: gấp.",
          "keys": [
            "Tham thì thâm"
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
      "ref": "p6"
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
            "text": "Việc thật hay lừa đảo?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:tell",
            "hl": [
              {
                "text": "lừa đảo",
                "at": "l1:scam"
              }
            ]
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Việc thật thì luôn:",
            "x": 2028,
            "y": 180,
            "size": 56,
            "at": "l2:real",
            "color": "accent"
          },
          {
            "id": "b-s0",
            "t": "box",
            "x": 2028,
            "y": 300,
            "w": 380,
            "h": 100,
            "at": "l3:pay",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-s1",
            "t": "box",
            "x": 2438,
            "y": 300,
            "w": 380,
            "h": 100,
            "at": "l3:deposit",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-s2",
            "t": "box",
            "x": 2848,
            "y": 300,
            "w": 380,
            "h": 100,
            "at": "l4:borrows",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-s3",
            "t": "box",
            "x": 3258,
            "y": 300,
            "w": 380,
            "h": 100,
            "at": "l4:see",
            "stroke": 4,
            "color": "accent"
          },
          {
            "id": "b-st0",
            "t": "text",
            "text": "Không đòi nộp tiền",
            "x": 2048,
            "y": 322,
            "size": 40,
            "at": "l3:pay+200"
          },
          {
            "id": "b-st1",
            "t": "text",
            "text": "Không bắt nạp tiền",
            "x": 2458,
            "y": 322,
            "size": 40,
            "at": "l3:deposit+200"
          },
          {
            "id": "b-st2",
            "t": "text",
            "text": "Không mượn tài khoản",
            "x": 2868,
            "y": 322,
            "size": 40,
            "at": "l4:borrows+200"
          },
          {
            "id": "b-st3",
            "t": "text",
            "text": "Cho xem nơi làm",
            "x": 3278,
            "y": 322,
            "size": 40,
            "at": "l4:see+200"
          },
          {
            "id": "b-all",
            "t": "text",
            "text": "Mọi chiêu: lấy tiền, tài khoản, giấy tờ trước khi bạn kịp kiểm",
            "x": 2028,
            "y": 520,
            "size": 34,
            "at": "l5:check",
            "color": "coral",
            "font": "base"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So, real job or scam? How do you tell?",
          "sub": "Vậy việc thật hay lừa đảo? Nhận ra thế nào?",
          "keys": [
            "lừa đảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A real job passes four tests.",
          "sub": "Việc thật luôn qua được bốn phép thử."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It never makes you pay, and never makes you deposit money to earn commission.",
          "sub": "Không bắt bạn nộp tiền, không bắt bạn nạp tiền để nhận hoa hồng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It never borrows your account or ID. And it always lets you see the workplace.",
          "sub": "Không mượn tài khoản hay giấy tờ của bạn. Và luôn để bạn đến xem nơi làm.",
          "keys": [
            "đến xem nơi làm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Every trick wants your money, account or papers, before you can check.",
          "sub": "Mọi chiêu đều muốn tiền, tài khoản hoặc giấy tờ của bạn, trước khi bạn kịp kiểm tra."
        }
      ],
      "ref": "intro,outro"
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
            "text": "① Thứ Hai · Đọc tin tuyển",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Monday"
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
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "mobile-phone",
                "magnifying-glass-tilted-left"
              ]
            },
            "at": "l1:Dũng",
            "caption": "Thứ Hai · giờ nghỉ trên lớp",
            "icon": "magnifying-glass-tilted-left"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Lương cao bất thường",
            "x": 3996,
            "y": 170,
            "size": 42,
            "at": "l3:high",
            "color": "coral"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "“Không cần kinh nghiệm”",
            "x": 3996,
            "y": 232,
            "size": 42,
            "at": "l3:experience",
            "color": "coral"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Tuyển gấp, rất nhiều người",
            "x": 3996,
            "y": 294,
            "size": 42,
            "at": "l3:lots",
            "color": "coral"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Chỉ nhắn tin, không địa chỉ",
            "x": 3996,
            "y": 356,
            "size": 42,
            "at": "l4:messages",
            "color": "coral"
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "Kéo sang nhóm chat khác",
            "x": 3996,
            "y": 418,
            "size": 42,
            "at": "l4:group",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one: Monday. This is Dũng, Lan's classmate, scrolling job ads between classes.",
          "sub": "Chặng một: thứ Hai. Đây là Dũng, bạn cùng lớp Lan, lướt tin tuyển giữa giờ học.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "No experience, a few hours a day, great pay! Too good?",
          "sub": "Không cần kinh nghiệm, mỗi ngày vài giờ, lương cao! Ngon quá?",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Warning signs: pay unusually high for the work, no experience needed, hiring lots of people fast.",
          "sub": "Dấu hiệu cần dừng: lương cao bất thường so với việc, không cần kinh nghiệm, tuyển gấp rất nhiều người.",
          "keys": [
            "lương cao bất thường"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Messages only, no company name or address. Pulled into another group chat at once.",
          "sub": "Chỉ liên lạc qua tin nhắn, không tên công ty, không địa chỉ. Bị kéo ngay sang nhóm chat khác."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p1,p2"
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
            "id": "c-r",
            "t": "text",
            "text": "Càng dễ, càng cao → càng nghi",
            "x": 3996,
            "y": 495,
            "size": 44,
            "at": "l1:easier",
            "color": "accent",
            "hl": [
              {
                "text": "càng nghi",
                "at": "l1:careful"
              }
            ]
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 580,
            "w": 46,
            "h": 46,
            "at": "l2:Search",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 562,
            "size": 58,
            "at": "l2:Search+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Tìm tên, số điện thoại",
            "x": 4064,
            "y": 570,
            "size": 36,
            "at": "l2:Search+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 644,
            "w": 46,
            "h": 46,
            "at": "l2:address",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 626,
            "size": 58,
            "at": "l2:address+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Hỏi địa chỉ, hẹn đến",
            "x": 4064,
            "y": 634,
            "size": 36,
            "at": "l2:address+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 708,
            "w": 46,
            "h": 46,
            "at": "l3:seniors",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 690,
            "size": 58,
            "at": "l3:seniors+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Hỏi anh chị khoá trên",
            "x": 4064,
            "y": 698,
            "size": 36,
            "at": "l3:seniors+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The easier the work and the higher the pay, the more careful you should be.",
          "sub": "Việc càng dễ mà lương càng cao thì càng nên nghi.",
          "keys": [
            "càng nên nghi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Checks: Search the name and number online for warnings. Ask for an address, and arrange a visit.",
          "sub": "Cách kiểm: tìm tên công ty, số điện thoại trên mạng xem có ai cảnh báo. Hỏi địa chỉ cụ thể, hẹn đến tận nơi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And ask seniors, or your school's student groups.",
          "sub": "Và hỏi anh chị khoá trên, hoặc nhóm sinh viên của trường."
        }
      ],
      "ref": "p1,p3"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Ba · Tiền cọc, phí",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Tuesday"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Phí hồ sơ · cọc đồng phục",
            "x": 5964,
            "y": 170,
            "size": 46,
            "at": "l2:fees",
            "color": "coral"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Tiền “giữ chỗ” · bộ hàng mẫu",
            "x": 5964,
            "y": 245,
            "size": 46,
            "at": "l2:place",
            "color": "coral"
          },
          {
            "id": "d-law",
            "t": "text",
            "text": "Luật cấm bắt người làm đặt cọc",
            "x": 5964,
            "y": 340,
            "size": 46,
            "at": "l3:bans",
            "color": "accent",
            "hl": [
              {
                "text": "cấm",
                "at": "l3:bans"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Bộ luật Lao động 2019, Điều 17",
            "x": 5964,
            "y": 410,
            "size": 28,
            "at": "l3:Code",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "d-buy",
            "t": "text",
            "text": "Mua tại chỗ, có biên nhận",
            "x": 5964,
            "y": 470,
            "size": 44,
            "at": "l4:uniform"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two: Tuesday. Lan's recruiter is back, asking for money.",
          "sub": "Chặng hai: thứ Ba. Người tuyển của Lan quay lại, đòi tiền."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Most common tricks: application fees, uniform deposits, money to hold your place, or to buy a sample kit.",
          "sub": "Chiêu hay gặp nhất: phí hồ sơ, tiền cọc đồng phục, tiền “giữ chỗ”, tiền mua bộ hàng mẫu.",
          "keys": [
            "tiền cọc đồng phục"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The 2019 Labour Code bans employers making workers pay a deposit. Any name, even “uniform deposit”.",
          "sub": "Bộ luật Lao động 2019 cấm bắt người lao động đặt cọc để được làm. Dưới mọi tên gọi, kể cả “cọc đồng phục”.",
          "keys": [
            "cấm bắt người lao động đặt cọc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Buying a uniform? A clear price, paid at the workplace, with a receipt, after meeting the manager.",
          "sub": "Phải tự mua đồng phục? Giá rõ ràng, trả tại chỗ làm, có biên nhận, sau khi đã gặp quản lý."
        }
      ],
      "ref": "p4"
    },
    {
      "id": "s07",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "“Chuyển cọc để giữ chỗ”",
        "actors": [
          {
            "id": "lan",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Chuyển cọc cho người chưa gặp",
          "why": "Hôm sau thuê bao tắt máy; quản lý nhà hàng nói quán không tuyển.",
          "rule": "Tên quán có thể thật, người tuyển có thể giả"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "Okay, sending the uniform deposit now!",
          "sub": "Rồi, mình chuyển tiền cọc đồng phục luôn!",
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
          "say": "A student did exactly that. At the restaurant, the manager was surprised: they weren't hiring at all.",
          "sub": "Có bạn đã làm y vậy. Đến nhà hàng hỏi, quản lý ngạc nhiên: quán không hề tuyển người."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Thử lại nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "I don't transfer first. I'll come meet you. Uniform? I'll pay there, with a receipt.",
          "sub": "Em không chuyển khoản trước ạ. Em xin đến tận nơi. Đồng phục em xin trả tại chỗ, có biên nhận ạ.",
          "phase": "redo",
          "pose": "phone"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A real employer agrees. A scammer vanishes.",
          "sub": "Nơi tuyển thật sẽ đồng ý; kẻ lừa thường biến mất.",
          "phase": "redo",
          "keys": [
            "kẻ lừa thường biến mất"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p5,p6,p7"
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
          }
        ],
        "items": [
          {
            "id": "d-r1",
            "t": "text",
            "text": "Tên quán có thể thật,",
            "x": 5964,
            "y": 580,
            "size": 58,
            "at": "l1:shop",
            "color": "accent"
          },
          {
            "id": "d-r2",
            "t": "text",
            "text": "người tuyển có thể giả",
            "x": 5964,
            "y": 670,
            "size": 58,
            "at": "l1:recruiter",
            "color": "accent",
            "hl": [
              {
                "text": "có thể giả",
                "at": "l1:fake"
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
          "say": "The shop may be real. The recruiter may be fake.",
          "sub": "Tên quán có thể thật, người tuyển có thể giả.",
          "keys": [
            "người tuyển có thể giả"
          ]
        }
      ],
      "ref": "p7"
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
            "text": "③ Thứ Tư · “Cộng tác viên”",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Wednesday"
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
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "thumbs-up",
                "money-bag"
              ]
            },
            "at": "l1:tasks",
            "caption": "Thứ Tư · tối, phòng trọ",
            "icon": "thumbs-up"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Nhiệm vụ dễ: thả tim, xem video",
            "x": 7932,
            "y": 170,
            "size": 42,
            "at": "l1:liking"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "→ vài khoản nhỏ, trả thật",
            "x": 7932,
            "y": 245,
            "size": 46,
            "at": "l2:real",
            "color": "accent"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Nhiệm vụ thưởng cao: nạp trước",
            "x": 7932,
            "y": 330,
            "size": 42,
            "at": "l4:deposit",
            "color": "coral",
            "hl": [
              {
                "text": "nạp trước",
                "at": "l4:deposit"
              }
            ]
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "→ tiền nạp lớn dần",
            "x": 7932,
            "y": 405,
            "size": 46,
            "at": "l4:grow",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three: Wednesday. Dũng joins an “online partner” group. Easy tasks: liking posts, reviewing products, watching videos.",
          "sub": "Chặng ba: thứ Tư. Dũng vào nhóm “cộng tác viên online”. Nhiệm vụ dễ: thả tim, đánh giá sản phẩm, xem video."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Real money, for real! A few small payments already.",
          "sub": "Tiền thật nha! Đã nhận được mấy khoản nhỏ rồi.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Small, real, and right on time. Remember that.",
          "sub": "Nhỏ, thật, và đúng hẹn. Nhớ điều đó."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then, for high-reward tasks, you must deposit first, and the deposits grow.",
          "sub": "Rồi muốn nhận “nhiệm vụ thưởng cao”, phải nạp tiền trước, và tiền nạp lớn dần.",
          "keys": [
            "nạp tiền trước"
          ]
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s10",
      "module": "BRK-04",
      "data": {
        "title": "Hiểu lầm thường gặp",
        "labels": [
          "Hiểu lầm",
          "Thực ra"
        ],
        "wrong": "Đã trả tiền thật thì không thể là lừa",
        "right": "Khoản nhỏ trả thật chính là mồi",
        "wrongIllus": "money-bag",
        "rightIllus": "fishing-pole"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Real pay means no scam?",
          "sub": "Đã trả tiền thật thì không thể là lừa?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Wrong. Those small payments are the bait.",
          "sub": "Thực ra, mấy khoản nhỏ trả thật chính là mồi.",
          "keys": [
            "chính là mồi"
          ]
        }
      ],
      "ref": "p11"
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
            "text": "④ Cuối tuần · Đơn combo",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:combo"
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
                  "side": "center",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "locked-with-key",
                "money-with-wings"
              ]
            },
            "at": "l1:weekend",
            "caption": "Cuối tuần · phòng trọ",
            "icon": "locked-with-key"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Rút tiền: “thao tác sai”",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l2:withdraw",
            "color": "coral"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "“Nạp thêm để mở khoá”",
            "x": 60,
            "y": 1335,
            "size": 46,
            "at": "l3:unlock",
            "color": "coral",
            "hl": [
              {
                "text": "Nạp thêm",
                "at": "l3:more"
              }
            ]
          },
          {
            "id": "f-stop",
            "t": "text",
            "text": "→ DỪNG HẲN",
            "x": 60,
            "y": 1430,
            "size": 60,
            "at": "l4:Stop",
            "color": "accent",
            "hl": [
              {
                "text": "DỪNG HẲN",
                "at": "l4:Stop"
              }
            ]
          },
          {
            "id": "f-rule",
            "t": "text",
            "text": "Bỏ tiền trước = đầu tư hoặc lừa",
            "x": 60,
            "y": 1540,
            "size": 42,
            "at": "l5:investment"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four: the weekend. A “combo order”: deposit first, bigger than last time.",
          "sub": "Chặng bốn: cuối tuần. Một “đơn combo”: nạp tiền trước, lần sau lớn hơn lần trước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I want to withdraw... “Wrong action”?",
          "sub": "Mình muốn rút... “Thao tác sai”?",
          "face": "surprised",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "“Deposit more to unlock.” Some even borrow from friends. That same day, the group disappears.",
          "sub": "“Nạp thêm để mở khoá.” Có người vay cả bạn bè để nạp. Đúng hôm đó, nhóm chat giải tán."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Stop completely here. Depositing more almost never gets back what you put in.",
          "sub": "Đây là lúc phải dừng hẳn. Nạp thêm gần như không bao giờ lấy lại được số đã nạp.",
          "keys": [
            "dừng hẳn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Easy rule: if you pay first to get paid, it's an investment or a scam. Not a job.",
          "sub": "Quy tắc dễ nhớ: phải bỏ tiền ra trước mới được trả tiền thì là đầu tư hoặc lừa đảo, không phải việc làm.",
          "keys": [
            "không phải việc làm"
          ]
        }
      ],
      "ref": "p9,p10,p11"
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
            "id": "f-r1",
            "t": "text",
            "text": "Được trả tiền nhỏ là mồi,",
            "x": 60,
            "y": 1670,
            "size": 56,
            "at": "l1:bait",
            "color": "accent"
          },
          {
            "id": "f-r2",
            "t": "text",
            "text": "bị bảo nạp tiền là bẫy",
            "x": 60,
            "y": 1755,
            "size": 56,
            "at": "l1:trap",
            "color": "accent",
            "hl": [
              {
                "text": "là bẫy",
                "at": "l1:trap"
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
          "say": "Small payments are bait. Being told to deposit is the trap.",
          "sub": "Được trả tiền nhỏ là mồi, bị bảo nạp tiền là bẫy.",
          "keys": [
            "bị bảo nạp tiền là bẫy"
          ]
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
            "text": "⑤ Tuần sau · Giấy tờ, tài khoản",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:week"
          },
          {
            "id": "g-ok",
            "t": "text",
            "text": "Chỉ đưa ở nơi đã kiểm",
            "x": 2028,
            "y": 1260,
            "size": 42,
            "at": "l1:checked",
            "color": "accent"
          },
          {
            "id": "g-n1",
            "t": "text",
            "text": "✗ Ảnh hai mặt căn cước + chân dung",
            "x": 2028,
            "y": 1350,
            "size": 40,
            "at": "l2:ID",
            "color": "coral"
          },
          {
            "id": "g-n2",
            "t": "text",
            "text": "✗ Mã xác thực, mật khẩu",
            "x": 2028,
            "y": 1425,
            "size": 42,
            "at": "l3:code",
            "color": "coral",
            "hl": [
              {
                "text": "Mã xác thực",
                "at": "l3:code"
              }
            ]
          },
          {
            "id": "g-n3",
            "t": "text",
            "text": "✗ Thuê, mở hộ tài khoản",
            "x": 2028,
            "y": 1500,
            "size": 38,
            "at": "l4:Renting",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five: next week. Real jobs need your details only at a checked workplace, for contract and pay.",
          "sub": "Chặng năm: tuần sau. Việc thật có thể cần thông tin của bạn, nhưng chỉ đưa ở nơi đã kiểm tra, để ký hợp đồng, nhận lương."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Never message both sides of your ID, plus a selfie holding it, to a stranger.",
          "sub": "Không gửi ảnh hai mặt căn cước kèm ảnh chân dung cầm giấy tờ cho người lạ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Never give anyone a code sent to your phone, or a bank password. Not even a “manager”.",
          "sub": "Không bao giờ đưa mã xác thực hay mật khẩu ngân hàng cho ai, kể cả người xưng là quản lý.",
          "keys": [
            "mã xác thực"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Renting out your account, opening one for someone, a SIM in your name: very dangerous.",
          "sub": "Cho thuê tài khoản, mở hộ tài khoản, đứng tên sim: rất nguy hiểm."
        }
      ],
      "ref": "p13,p14,p15"
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
          }
        ],
        "items": [
          {
            "id": "g-st",
            "t": "text",
            "text": "“Nhận hàng”: căn cước + tài khoản mới + mật khẩu",
            "x": 2028,
            "y": 1590,
            "size": 34,
            "at": "l1:parcel",
            "font": "base"
          },
          {
            "id": "g-pol",
            "t": "text",
            "text": "→ công an mời lên làm việc",
            "x": 2028,
            "y": 1660,
            "size": 46,
            "at": "l2:police",
            "color": "coral",
            "hl": [
              {
                "text": "công an",
                "at": "l2:police"
              }
            ]
          },
          {
            "id": "g-r",
            "t": "text",
            "text": "Tài khoản tên mình, chỉ mình dùng",
            "x": 2028,
            "y": 1760,
            "size": 50,
            "at": "l3:account",
            "color": "accent",
            "hl": [
              {
                "text": "chỉ mình dùng",
                "at": "l3:alone"
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
          "say": "A student hired as a “parcel receiver” sent her ID, opened a new account “for pay”, and gave its password.",
          "sub": "Có bạn được tuyển “nhân viên nhận hàng”: gửi ảnh căn cước, mở tài khoản mới “để nhận lương”, đưa luôn mật khẩu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Weeks later, the police called her in. That account had received money from many scam victims.",
          "sub": "Vài tuần sau, bạn ấy được công an mời lên làm việc: tài khoản đó nhận tiền của nhiều người bị lừa.",
          "keys": [
            "công an mời lên làm việc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "An account in your name is for you alone.",
          "sub": "Tài khoản tên mình, chỉ mình mình dùng.",
          "keys": [
            "chỉ mình mình dùng"
          ]
        }
      ],
      "ref": "p16,p17"
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
            "at": "l4",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Sáng thứ Bảy · Phỏng vấn",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Saturday"
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
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone"
                }
              ],
              "props": [
                "office-building",
                "mobile-phone"
              ]
            },
            "at": "l1:Lan",
            "caption": "Sáng thứ Bảy · văn phòng có biển hiệu",
            "icon": "office-building"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Ban ngày · có biển · có người làm",
            "x": 3996,
            "y": 1260,
            "size": 42,
            "at": "l1:daytime",
            "hl": [
              {
                "text": "Ban ngày",
                "at": "l1:daytime"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Báo địa chỉ, giờ; nhắn khi xong",
            "x": 3996,
            "y": 1335,
            "size": 42,
            "at": "l2:address",
            "color": "accent"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "“Làm giàu”, mua hàng, rủ người?",
            "x": 3996,
            "y": 1430,
            "size": 42,
            "at": "l3:rich",
            "color": "coral"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "→ cảm ơn, ra về",
            "x": 3996,
            "y": 1505,
            "size": 50,
            "at": "l4:Thank",
            "color": "accent",
            "hl": [
              {
                "text": "ra về",
                "at": "l4:leave"
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
          "say": "Stop six: Saturday morning. Lan, wiser now, books interviews in the daytime, at a place with a sign and people working.",
          "sub": "Chặng sáu: sáng thứ Bảy. Lan giờ đã tỉnh, hẹn phỏng vấn ban ngày, ở nơi có biển hiệu, có người đang làm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Dũng, here's the address. Interview at nine. I'll text you when I'm done.",
          "sub": "Dũng ơi, địa chỉ đây. Chín giờ phỏng vấn. Xong mình nhắn nhé.",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "If the “interview” becomes talk of getting rich, buying stock to be an agent, or recruiting friends,",
          "sub": "Nếu buổi “phỏng vấn” thành buổi nói về làm giàu, bắt mua hàng làm đại lý, hay rủ thêm người,"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Thank them and leave. Nothing needs signing or paying that day.",
          "sub": "hãy cảm ơn và ra về. Không cần ký gì, đóng tiền gì ngay hôm đó.",
          "keys": [
            "cảm ơn và ra về"
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
      "ref": "p18,p19"
    },
    {
      "id": "s16",
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
            "at": "l2",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-say",
            "t": "text",
            "text": "“Em xin về hỏi gia đình”",
            "x": 3996,
            "y": 1610,
            "size": 48,
            "at": "l1:family",
            "hl": [
              {
                "text": "hỏi gia đình",
                "at": "l1:family"
              }
            ]
          },
          {
            "id": "h-keep",
            "t": "text",
            "text": "Bị cố giữ chân → đi ngay",
            "x": 3996,
            "y": 1710,
            "size": 50,
            "at": "l2:keep",
            "color": "coral",
            "hl": [
              {
                "text": "đi ngay",
                "at": "l2:once"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "Thank you. I need to go home and talk with my family first.",
          "sub": "Em cảm ơn anh chị, em cần về suy nghĩ và hỏi ý kiến gia đình đã ạ.",
          "pose": "hold"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Decent people let you go. Someone who tries to keep you there? Leave at once.",
          "sub": "Người tử tế sẽ để bạn đi. Ai cố giữ chân bạn, đó là dấu hiệu cần đi ngay.",
          "keys": [
            "cần đi ngay"
          ]
        }
      ],
      "ref": "p20"
    },
    {
      "id": "s17",
      "module": "BRK-07",
      "data": {
        "question": "Còn Dũng, tiền đã nạp rồi. Làm gì bây giờ?",
        "illus": "money-with-wings"
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
          "say": "And Dũng? His money's already gone. What now?",
          "sub": "Còn Dũng? Tiền đã nạp mất rồi. Giờ làm gì?"
        }
      ],
      "ref": "p24"
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
            "text": "⑦ Tối thứ Bảy · Lỡ bị lừa",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Saturday"
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
                  "face": "sad"
                }
              ],
              "props": [
                "camera-with-flash",
                "receipt"
              ]
            },
            "at": "l1:ashamed",
            "caption": "Tối thứ Bảy · phòng trọ của Dũng",
            "icon": "receipt"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1260,
            "w": 46,
            "h": 46,
            "at": "l3:Stop",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1242,
            "size": 58,
            "at": "l3:Stop+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Dừng chuyển tiền",
            "x": 6032,
            "y": 1250,
            "size": 42,
            "at": "l3:Stop+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1332,
            "w": 46,
            "h": 46,
            "at": "l3:Screenshot",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1314,
            "size": 58,
            "at": "l3:Screenshot+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Chụp tin nhắn, số TK",
            "x": 6032,
            "y": 1322,
            "size": 42,
            "at": "l3:Screenshot+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1404,
            "w": 46,
            "h": 46,
            "at": "l4:bank",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1386,
            "size": 58,
            "at": "l4:bank+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Gọi tổng đài ngân hàng",
            "x": 6032,
            "y": 1394,
            "size": 42,
            "at": "l4:bank+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1476,
            "w": 46,
            "h": 46,
            "at": "l5:police",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1458,
            "size": 58,
            "at": "l5:police+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Trình báo công an",
            "x": 6032,
            "y": 1466,
            "size": 42,
            "at": "l5:police+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven: Saturday night. Dũng has lost money to that group, and he's too ashamed to tell anyone.",
          "sub": "Chặng bảy: tối thứ Bảy. Dũng đã mất tiền vì nhóm ấy, xấu hổ không dám kể với ai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "How could I fall for that?",
          "sub": "Sao mình lại dính vào được chứ?",
          "face": "sad",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Step one: Stop sending money, whatever they promise. Screenshot messages, account numbers, the ad, the phone number.",
          "sub": "Một: dừng chuyển tiền, dù họ hứa gì. Chụp lại tin nhắn, số tài khoản đã chuyển, trang tuyển, số điện thoại."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Call your bank on the number on your card or in the official app.",
          "sub": "Gọi ngân hàng qua số tổng đài in trên thẻ hoặc trong ứng dụng chính thức.",
          "keys": [
            "số tổng đài"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then report to the nearest police. Early reports raise the chances, and protect others.",
          "sub": "Rồi đến công an gần nhất trình báo. Báo sớm thì cơ hội cao hơn, và giúp người khác tránh được."
        }
      ],
      "ref": "p21,p22"
    },
    {
      "id": "s19",
      "module": "BRK-04",
      "data": {
        "title": "Hai lựa chọn",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrong": "Trang “thu hồi tiền”: đóng phí trước",
        "right": "Mang tin nhắn, biên lai đến công an",
        "wrongIllus": "money-with-wings",
        "rightIllus": "receipt"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Pay a “recovery” site first?",
          "sub": "Trả phí trước cho trang “hỗ trợ thu hồi”?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. Receipts to the police, in person.",
          "sub": "Không. Mang biên lai đến công an, trực tiếp.",
          "keys": [
            "đến công an"
          ]
        }
      ],
      "ref": "p24"
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
            "id": "i-2nd",
            "t": "text",
            "text": "Thu hồi có phí: lừa tiếp",
            "x": 5964,
            "y": 1570,
            "size": 46,
            "at": "l1:recover",
            "color": "coral"
          },
          {
            "id": "i-r1",
            "t": "text",
            "text": "Mất tiền một lần đã đủ,",
            "x": 5964,
            "y": 1670,
            "size": 54,
            "at": "l3:once",
            "color": "accent"
          },
          {
            "id": "i-r2",
            "t": "text",
            "text": "đừng trả phí để mất lần hai",
            "x": 5964,
            "y": 1755,
            "size": 50,
            "at": "l3:twice",
            "color": "accent",
            "hl": [
              {
                "text": "mất lần hai",
                "at": "l3:twice"
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
          "say": "Beware anyone online offering to recover your money for a fee, even if they say they're police. It's usually scam number two.",
          "sub": "Cảnh giác với người qua mạng hứa lấy lại tiền rồi đòi phí trước, kể cả xưng là công an. Thường là lần lừa thứ hai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Maybe I won't get it back. But I won't lose more.",
          "sub": "Có thể không lấy lại được. Nhưng chắc chắn không mất thêm.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Losing money once is enough. Don't pay a fee to lose it twice.",
          "sub": "Mất tiền một lần đã đủ, đừng trả phí để mất lần hai.",
          "keys": [
            "đừng trả phí để mất lần hai"
          ]
        }
      ],
      "ref": "p23,p25"
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
            "text": "⑧ Tối Chủ nhật · Gọi bà",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "phone",
                  "face": "sad"
                },
                {
                  "id": "tu",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone"
                }
              ],
              "props": [
                "mobile-phone",
                "house"
              ]
            },
            "at": "l1:Tư",
            "caption": "Tối Chủ nhật · cuộc gọi về quê",
            "icon": "mobile-phone"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Kể với người thân, dù ngại",
            "x": 7932,
            "y": 1260,
            "size": 46,
            "at": "l4:family",
            "color": "accent",
            "hl": [
              {
                "text": "dù ngại",
                "at": "l4:hard"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Phụ huynh: báo trước, góp ý sau",
            "x": 7932,
            "y": 1340,
            "size": 44,
            "at": "l5:Parents"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Tham thì thâm” · kể sớm thì nhẹ",
            "x": 7932,
            "y": 1490,
            "size": 42,
            "at": "l6:Greed",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Last stop: Sunday night, like the start. Dũng calls Bà Tư, his grandma.",
          "sub": "Chặng cuối: tối Chủ nhật, như lúc mở đầu. Dũng gọi bà Tư, bà nội.",
          "keys": [
            "bà Tư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Grandma, I lost money to an online job. I'm so ashamed.",
          "sub": "Bà ơi, cháu bị lừa mất tiền vì việc online. Cháu xấu hổ quá.",
          "face": "sad",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "tu",
          "say": "You told me early. That's what matters. Bank first, then the police. The rest can wait.",
          "sub": "Cháu kể sớm là quý rồi. Báo ngân hàng trước, rồi công an. Chuyện khác tính sau.",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Tell family, even if it's hard. With help, the steps go faster and calmer.",
          "sub": "Hãy kể với người thân dù ngại. Có người cùng làm thì nhanh và bình tĩnh hơn.",
          "keys": [
            "kể với người thân"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Parents: help report first; advice can wait. Telling early deserves praise.",
          "sub": "Phụ huynh: giúp con báo ngân hàng, trình báo trước; góp ý để sau. Con dám kể sớm đã đáng quý."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Greed leaves a bruise. Telling early makes it heal faster.",
          "sub": "“Tham thì thâm.” Nhưng kể sớm thì vết thâm mau lành.",
          "keys": [
            "kể sớm"
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
      "ref": "p26"
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
            "at": "l1:shop",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:Small",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:account",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l4:Losing",
            "fit": "I",
            "zoom": 0.8
          },
          {
            "at": "l4:end",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 6604,
            "y": 600,
            "at": "l1:shop"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 760,
            "y": 1690,
            "at": "l2:Small"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2848,
            "y": 1780,
            "at": "l3:account"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 6664,
            "y": 1690,
            "at": "l4:Losing"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Thông tin chung để tham khảo, không thay tư vấn pháp lý; bị lừa hãy báo ngân hàng và công an.",
            "x": 7932,
            "y": 1845,
            "size": 26,
            "at": "l4:end",
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
          "say": "Four sayings to screenshot. One: the shop may be real, the recruiter fake.",
          "sub": "Bốn câu để chụp màn hình. Một: tên quán có thể thật, người tuyển có thể giả.",
          "keys": [
            "người tuyển có thể giả"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two: Small payments are bait; being told to deposit is the trap.",
          "sub": "Hai: được trả tiền nhỏ là mồi, bị bảo nạp tiền là bẫy."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three: an account in your name is for you alone.",
          "sub": "Ba: tài khoản tên mình, chỉ mình mình dùng.",
          "keys": [
            "chỉ mình mình dùng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Four: Losing money once is enough.",
          "sub": "Bốn: mất tiền một lần đã đủ.",
          "keys": [
            "mất tiền một lần đã đủ"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p7,p12,p17,p25"
    },
    {
      "id": "s35",
      "module": "QUIZ-01",
      "ref": "questions[19]",
      "data": {
        "q": "What does the saying small payments are bait, being told to deposit is the trap teach?",
        "options": [
          "Small payments prove the job is real, so you can safely deposit larger amounts",
          "Small early payments are used to hook you, so stop when asked to pay",
          "Only very large deposits are risky, small ones are always fine to send"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "fishing-pole",
        "why": "Khoảnh khắc cần dừng là khi bị bảo nạp tiền. Khoản nạp nhỏ cũng dẫn đến khoản lớn hơn."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What does the saying small payments are bait, being told to deposit is the trap teach?",
          "sub": "Câu “Được trả tiền nhỏ là mồi, bị bảo nạp tiền là bẫy” dạy điều gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Small early payments are used to hook you, so stop when asked to pay.",
          "sub": "Khoản nhỏ lúc đầu là để câu bạn, bị bảo nạp tiền thì dừng."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Stop the moment they ask for a deposit. A small one leads to bigger ones.",
          "sub": "Bị bảo nạp tiền là lúc dừng. Khoản nhỏ dẫn đến khoản lớn hơn."
        }
      ]
    },
    {
      "id": "s36",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi giúp bạn nhận ra tin tuyển lạ",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Do it now: screenshot the sayings and the refusal line, for the next strange job ad.",
          "sub": "Làm ngay: chụp màn hình các câu “Rút ra” và câu từ chối mẫu để dùng khi gặp tin lạ.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then practise with the forty questions below.",
          "sub": "Rồi luyện tiếp với bốn mươi câu hỏi bên dưới nhé.",
          "face": "happy"
        }
      ]
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
