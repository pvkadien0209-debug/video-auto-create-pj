// Kịch bản video W lần 3 (#110) — "Đi làm thêm khi còn đi học: những điều cần biết" · chuỗi "Đi làm thêm khi còn đi học"
// Giọng đọc tiếng Anh, phụ đề tiếng Việt; hoạt hình (SCENE/DLG/HOST/END-05) + thẻ. Đủ ý cho 40 câu hỏi của bài.
export default {
  "schema": "detpro.video-script/0.2",
  "id": "what-to-know-before-part-time-job--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "students-with-part-time-jobs",
    "slug": "what-to-know-before-part-time-job",
    "door": "ky-nang",
    "level": "B1",
    "title": "Sinh viên muốn đi làm thêm cần biết những gì?",
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
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô theo HỌC KỲ ĐI LÀM ĐẦU TIÊN của Dũng (tối Chủ nhật tin tờ rơi → tối thứ Hai gọi bố → thứ Tư biển tuyển trước quán → thứ Bảy phỏng vấn quán cô Hoa → tuần đầu → giữa kỳ, ca tối của Lan → ngày lương → cuối kỳ nghỉ việc → đầu kỳ hai, lại tin tờ rơi). Nhân vật theo w145/_series/students-with-part-time-jobs.md: Dũng (‘bạn’ p7, p11), Bác Bình = bố Dũng (phụ huynh p4; bản cũ là bố Lan), Cô Hoa (quản lý p11, p18), Lan (Hương p18). Không có số liệu ngoài bài (‘1 tuần thử việc’ theo p11). Cảnh ngắt nhịp: DLG s12 (‘Dạ vâng’ → hỏi thử việc, p11), BRK-07 s16 (rehook trước chặng học), BRK-04 s18 (Sai/Đúng ca tối, p19). Khép vòng: tin tờ rơi tối Chủ nhật ở phòng Dũng mở/khép; ‘Học đi đôi với hành’ → ‘đã hành, và đã học’. Câu đố giữ questions[12]. Bản cũ: w145/bak/what-to-know-before-part-time-job--w01.js.",
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
            "text": "“Phát tờ rơi · lương ngày cao”",
            "x": 60,
            "y": 120,
            "size": 64,
            "at": "l1:flyer",
            "color": "accent",
            "hl": [
              {
                "text": "lương ngày cao",
                "at": "l1:pay"
              }
            ]
          },
          {
            "id": "a-fee",
            "t": "text",
            "text": "Chuyển trước: phí hồ sơ, đồng phục",
            "x": 70,
            "y": 250,
            "size": 48,
            "at": "l2:Transfer",
            "color": "coral",
            "hl": [
              {
                "text": "Chuyển trước",
                "at": "l2:first"
              }
            ]
          },
          {
            "id": "a-ta",
            "t": "text",
            "text": "Ta tưởng: việc nhẹ, nhận luôn?",
            "x": 70,
            "y": 340,
            "size": 50,
            "at": "l3:easy",
            "color": "muted"
          },
          {
            "id": "a-tax",
            "t": "strike",
            "over": "a-ta",
            "at": "l3:end"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A late-night message: flyer job, good pay by the day.",
          "sub": "Tin nhắn lúc khuya: tuyển phát tờ rơi, lương theo ngày khá cao.",
          "keys": [
            "lương theo ngày khá cao"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The only catch? Transfer a file fee and a uniform fee first.",
          "sub": "Điều kiện duy nhất? Chuyển trước phí hồ sơ và tiền đồng phục.",
          "keys": [
            "Chuyển trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Easy work, easy money? Hmm.",
          "sub": "Việc nhẹ, tiền dễ? Hừm."
        }
      ],
      "ref": "p7"
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
                "money-bag"
              ]
            },
            "at": "l1",
            "caption": "Tối Chủ nhật · đầu học kỳ một",
            "icon": "mobile-phone"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Gửi tiền luôn?",
            "x": 60,
            "y": 470,
            "size": 60,
            "at": "l2:send",
            "color": "coral",
            "hl": [
              {
                "text": "Gửi tiền",
                "at": "l2:send"
              }
            ]
          },
          {
            "id": "a-hold",
            "t": "text",
            "text": "Giữ tin nhắn này lại đã…",
            "x": 60,
            "y": 580,
            "size": 48,
            "at": "l3:come back",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng: second-year student, renting a room, hunting for his very first part-time job.",
          "sub": "Đây là Dũng: sinh viên năm hai ở trọ, đang săn việc làm thêm đầu tiên trong đời.",
          "keys": [
            "việc làm thêm đầu tiên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Good pay, easy work... Should I just send the money?",
          "sub": "Lương cao, việc nhẹ... Hay mình gửi tiền luôn nhỉ?",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hold that thought, Dũng. We'll come back to this message.",
          "sub": "Khoan đã Dũng. Lát nữa ta quay lại tin nhắn này."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "intro,p7"
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
            "text": "Làm thêm: tụt học? bị lừa?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:grades",
            "hl": [
              {
                "text": "bị lừa",
                "at": "l1:trick"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: “đừng đi làm”",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:answer",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:five"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: 5 thói quen",
            "x": 2028,
            "y": 260,
            "size": 58,
            "at": "l2:five",
            "color": "accent",
            "hl": [
              {
                "text": "5 thói quen",
                "at": "l2:habits"
              }
            ]
          },
          {
            "id": "b-s0",
            "t": "box",
            "x": 2028,
            "y": 400,
            "w": 300,
            "h": 90,
            "at": "l3:Know",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-s1",
            "t": "box",
            "x": 2358,
            "y": 400,
            "w": 300,
            "h": 90,
            "at": "l3:timetable",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-s2",
            "t": "box",
            "x": 2688,
            "y": 400,
            "w": 300,
            "h": 90,
            "at": "l3:check",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-s3",
            "t": "box",
            "x": 3018,
            "y": 400,
            "w": 300,
            "h": 90,
            "at": "l4:agree",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-s4",
            "t": "box",
            "x": 3348,
            "y": 400,
            "w": 300,
            "h": 90,
            "at": "l4:study",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-st0",
            "t": "text",
            "text": "Biết vì sao",
            "x": 2048,
            "y": 416,
            "size": 42,
            "at": "l3:Know+200"
          },
          {
            "id": "b-st1",
            "t": "text",
            "text": "Chọn theo lịch",
            "x": 2378,
            "y": 416,
            "size": 42,
            "at": "l3:timetable+200"
          },
          {
            "id": "b-st2",
            "t": "text",
            "text": "Kiểm nơi tuyển",
            "x": 2708,
            "y": 416,
            "size": 42,
            "at": "l3:check+200"
          },
          {
            "id": "b-st3",
            "t": "text",
            "text": "Thoả thuận rõ",
            "x": 3038,
            "y": 416,
            "size": 42,
            "at": "l4:agree+200"
          },
          {
            "id": "b-st4",
            "t": "text",
            "text": "Học đi trước",
            "x": 3368,
            "y": 416,
            "size": 42,
            "at": "l4:study+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So, will a part-time job sink your grades? Will someone trick you?",
          "sub": "Vậy đi làm thêm có làm tụt việc học? Có bị lừa không?",
          "keys": [
            "bị lừa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The answer isn't “don't work”. It's five habits.",
          "sub": "Câu trả lời không phải “đừng đi làm”. Mà là năm thói quen.",
          "keys": [
            "năm thói quen"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Know why you work, fit your timetable, check the employer,",
          "sub": "Biết mình làm để làm gì, chọn việc theo lịch học, kiểm tra kỹ nơi tuyển,"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "agree clearly before day one, and put study first.",
          "sub": "thoả thuận rõ trước ngày đầu, và luôn để việc học đứng trước.",
          "keys": [
            "việc học đứng trước"
          ]
        }
      ],
      "ref": "intro"
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
            "id": "b-ca",
            "t": "text",
            "text": "“Học đi đôi với hành”",
            "x": 2028,
            "y": 560,
            "size": 64,
            "at": "l1:hand",
            "color": "accent",
            "hl": [
              {
                "text": "đôi với hành",
                "at": "l1:doing"
              }
            ]
          },
          {
            "id": "b-eat",
            "t": "text",
            "text": "…miễn “hành” đừng ăn mất “học”",
            "x": 2068,
            "y": 660,
            "size": 46,
            "at": "l2:eat",
            "color": "coral"
          },
          {
            "id": "b-map",
            "t": "text",
            "text": "Bản đồ cả chuỗi",
            "x": 2948,
            "y": 560,
            "size": 38,
            "at": "l2:end",
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
          "say": "Our elders say: learning goes hand in hand with doing.",
          "sub": "Ông bà dặn: “Học đi đôi với hành.”",
          "keys": [
            "Học đi đôi với hành"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Just don't let the doing eat the learning for breakfast.",
          "sub": "Miễn là phần “hành” đừng xơi mất phần “học” ngay bữa sáng."
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
            "at": "l2",
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
            "text": "① Tối thứ Hai · Gọi về nhà",
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
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "binh",
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
            "at": "l1:dad",
            "caption": "Tối thứ Hai · cuộc gọi về quê",
            "icon": "mobile-phone"
          },
          {
            "id": "c-ask",
            "t": "text",
            "text": "Ở đâu? Giờ nào? Ai quản lý?",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l3:Where",
            "hl": [
              {
                "text": "Ai quản lý",
                "at": "l3:manager"
              }
            ]
          },
          {
            "id": "c-par",
            "t": "text",
            "text": "Bố mẹ: hỏi thay vì cấm",
            "x": 3996,
            "y": 250,
            "size": 46,
            "at": "l5:Parents",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi thay vì cấm",
                "at": "l5:asking"
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
          "say": "Stop one: Monday night. This is Bác Bình, Dũng's dad, a man of few words.",
          "sub": "Chặng một: tối thứ Hai. Đây là Bác Bình, bố Dũng, người kiệm lời.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Dad, I want to find a part-time job.",
          "sub": "Bố ơi, con muốn tìm việc làm thêm.",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Where? What hours? Who's the manager?",
          "sub": "Ở đâu? Giờ nào? Ai quản lý?",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "And whatever happens, you can tell us. We won't blame you.",
          "sub": "Có chuyện gì cứ kể bố mẹ nghe. Không ai trách đâu.",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Parents: kids want independence, and to help out. Try asking instead of banning.",
          "sub": "Phụ huynh: con muốn đi làm thường vì muốn tự lập, đỡ gánh cho nhà. Hãy hỏi thay vì cấm.",
          "keys": [
            "hỏi thay vì cấm"
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
          }
        ],
        "items": [
          {
            "id": "c-m",
            "t": "text",
            "text": "Cần tiền → trả đều, đúng hẹn",
            "x": 3996,
            "y": 350,
            "size": 46,
            "at": "l2:money",
            "hl": [
              {
                "text": "đúng hẹn",
                "at": "l2:time"
              }
            ]
          },
          {
            "id": "c-e",
            "t": "text",
            "text": "Cần kinh nghiệm → gần ngành học",
            "x": 3996,
            "y": 425,
            "size": 44,
            "at": "l3:experience"
          },
          {
            "id": "c-d",
            "t": "text",
            "text": "Dũng: tiền là chính",
            "x": 4836,
            "y": 680,
            "size": 44,
            "at": "l4:Money",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First question: money, experience, or both?",
          "sub": "Câu đầu tiên: cần tiền, cần kinh nghiệm, hay cả hai?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Need money most? Pick a job that pays steadily and on time.",
          "sub": "Cần tiền là chính? Ưu tiên việc trả đều, đúng hẹn.",
          "keys": [
            "trả đều, đúng hẹn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Need experience? Pick one near your major, even for less pay.",
          "sub": "Cần kinh nghiệm? Ưu tiên việc gần ngành học, dù lương có thể thấp hơn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Money first. Rent won't wait.",
          "sub": "Tiền là chính ạ. Tiền phòng đâu có chờ.",
          "face": "happy"
        }
      ],
      "ref": "p1"
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
          }
        ],
        "items": [
          {
            "id": "c-h",
            "t": "text",
            "text": "Giờ rảnh THẬT, không phải mong",
            "x": 3996,
            "y": 515,
            "size": 44,
            "at": "l1:real",
            "color": "accent",
            "hl": [
              {
                "text": "THẬT",
                "at": "l1:real"
              }
            ]
          },
          {
            "id": "c-minus",
            "t": "text",
            "text": "− học, tự học, đi lại, ngủ",
            "x": 4016,
            "y": 590,
            "size": 44,
            "at": "l1:classes"
          },
          {
            "id": "c-q",
            "t": "text",
            "text": "Đi bằng gì? Tháng nào thi?",
            "x": 3996,
            "y": 670,
            "size": 44,
            "at": "l3:travel",
            "hl": [
              {
                "text": "Tháng nào thi",
                "at": "l3:exams"
              }
            ]
          },
          {
            "id": "c-link",
            "t": "text",
            "text": "→ bài Chọn việc theo lịch học",
            "x": 4836,
            "y": 760,
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
          "say": "Then count your real free hours: minus classes, self-study, travel, and sleep.",
          "sub": "Tiếp theo, đếm giờ rảnh thật: trừ giờ học, giờ tự học, giờ đi lại và giờ ngủ.",
          "keys": [
            "giờ rảnh thật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "That number, not the hours you wish for, is what you can work.",
          "sub": "Con số đó, chứ không phải số giờ bạn mong có, mới là số giờ có thể đi làm.",
          "keys": [
            "không phải số giờ bạn mong có"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Also: how will you travel, and which months have exams?",
          "sub": "Thêm nữa: đi làm bằng gì, đi xa được đến đâu, tháng nào có thi?"
        }
      ],
      "ref": "p2,p3"
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
            "at": "l2",
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
            "text": "② Thứ Tư · Tìm việc ở đâu?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Wednesday"
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
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "face": "happy",
                  "pose": "point"
                }
              ],
              "props": [
                "memo",
                "magnifying-glass-tilted-left"
              ]
            },
            "at": "l1:Wednesday+400",
            "caption": "Thứ Tư · biển tuyển trước quán",
            "icon": "memo"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Người quen · khoá trên · trường",
            "x": 5964,
            "y": 170,
            "size": 42,
            "at": "l1:people",
            "hl": [
              {
                "text": "Người quen",
                "at": "l1:people"
              }
            ]
          },
          {
            "id": "d-sign",
            "t": "text",
            "text": "Biển tuyển trước cửa: đến tận nơi",
            "x": 5964,
            "y": 245,
            "size": 42,
            "at": "l2:sign"
          },
          {
            "id": "d-r1",
            "t": "text",
            "text": "Lương cao bất thường, việc nhẹ",
            "x": 5964,
            "y": 335,
            "size": 42,
            "at": "l4:pay",
            "color": "coral"
          },
          {
            "id": "d-r2",
            "t": "text",
            "text": "Chỉ nhắn tin, không địa chỉ",
            "x": 5964,
            "y": 400,
            "size": 42,
            "at": "l4:messages",
            "color": "coral"
          },
          {
            "id": "d-r3",
            "t": "text",
            "text": "Đòi nộp tiền trước",
            "x": 5964,
            "y": 465,
            "size": 46,
            "at": "l5:pay",
            "color": "coral",
            "hl": [
              {
                "text": "nộp tiền trước",
                "at": "l5:pay"
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
          "say": "Stop two: Wednesday, job hunting. Safest leads: people you know, seniors, friends, the student centre.",
          "sub": "Chặng hai: thứ Tư, đi tìm việc. Nguồn đáng tin: người quen, anh chị khoá trên, bạn bè, trung tâm hỗ trợ sinh viên của trường.",
          "keys": [
            "người quen"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A shop with a hiring sign on its door is easy to check. You can walk right in.",
          "sub": "Cửa hàng dán biển tuyển ngay trước cửa cũng dễ kiểm tra: bạn đến tận nơi được."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Stop at sky-high pay for feather-light work, or messages with no address.",
          "sub": "Dừng lại khi thấy lương cao bất thường cho việc nhẹ tênh, hoặc chỉ nhắn tin mà không có địa chỉ rõ.",
          "keys": [
            "lương cao bất thường"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Or anyone who wants you to pay before you start. Tricks: the lesson on job scams.",
          "sub": "Hoặc bất kỳ ai đòi bạn nộp tiền trước để được nhận việc. Các chiêu: bài nhận ra việc làm thêm lừa đảo.",
          "keys": [
            "nộp tiền trước"
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
            "at": "l1",
            "fit": [
              "a-msg"
            ],
            "zoom": 0.9,
            "ms": 900
          },
          {
            "at": "l2",
            "fit": "D",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "d-back",
            "t": "text",
            "text": "Nơi tuyển thật thu tiền?",
            "x": 5964,
            "y": 555,
            "size": 40,
            "at": "l1:flyer"
          },
          {
            "id": "d-no",
            "t": "text",
            "text": "Gần như không bao giờ",
            "x": 6804,
            "y": 690,
            "size": 48,
            "at": "l2:Almost",
            "color": "accent"
          },
          {
            "id": "d-end",
            "t": "text",
            "text": "→ cửa đóng, số đã chặn",
            "x": 5964,
            "y": 630,
            "size": 42,
            "at": "l3:locked",
            "color": "coral"
          },
          {
            "id": "d-rule",
            "t": "text",
            "text": "Việc thật trả tiền cho mình",
            "x": 5964,
            "y": 705,
            "size": 50,
            "at": "l5:real",
            "color": "accent",
            "hl": [
              {
                "text": "trả tiền cho mình",
                "at": "l5:pays"
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
          "say": "Dũng's flyer: would a real employer charge new workers?",
          "sub": "Quay lại tin tờ rơi của Dũng. Nơi tuyển thật có thu tiền người sắp đi làm không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Almost never. Real employers pay you, not the other way round.",
          "sub": "Gần như không bao giờ. Nơi tuyển thật trả tiền cho bạn, chứ không bắt bạn trả tiền để được làm.",
          "keys": [
            "Gần như không bao giờ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Payers find a locked door, a blocked number.",
          "sub": "Người chuyển khoản thường chỉ đến được một căn nhà đóng cửa, còn số điện thoại kia đã chặn mình."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Visit first. No fees to strangers.",
          "sub": "Vậy hãy đến tận nơi trước, từ chối mọi khoản phí chuyển trước cho người chưa gặp. Phí nhận lớp gia sư: xem bài gia sư."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A real job pays you. A fake job asks you for money.",
          "sub": "Việc thật trả tiền cho mình, việc giả đòi tiền của mình.",
          "keys": [
            "Việc thật trả tiền cho mình"
          ]
        }
      ],
      "ref": "p7,p8"
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
            "at": "l4",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Bảy · Phỏng vấn",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Saturday"
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
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                }
              ],
              "props": [
                "hot-beverage",
                "memo"
              ]
            },
            "at": "l1:café",
            "caption": "Thứ Bảy · quán cà phê cô Hoa",
            "icon": "hot-beverage"
          },
          {
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 170,
            "w": 46,
            "h": 46,
            "at": "l4:pay",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 152,
            "size": 58,
            "at": "l4:pay+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Lương tính sao, trả ngày nào",
            "x": 8000,
            "y": 160,
            "size": 42,
            "at": "l4:pay+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 240,
            "w": 46,
            "h": 46,
            "at": "l4:Shifts",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 222,
            "size": 58,
            "at": "l4:Shifts+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Ca làm, cách đổi ca",
            "x": 8000,
            "y": 230,
            "size": 42,
            "at": "l4:Shifts+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 310,
            "w": 46,
            "h": 46,
            "at": "l4:fines",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 292,
            "size": 58,
            "at": "l4:fines+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Phạt, trừ lương?",
            "x": 8000,
            "y": 300,
            "size": 42,
            "at": "l4:fines+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three: Saturday, an interview at a café. This is Cô Hoa, the owner. Busy, fast-talking, kind.",
          "sub": "Chặng ba: thứ Bảy, phỏng vấn ở quán cà phê. Đây là cô Hoa, chủ quán. Bận, nói nhanh, tốt bụng.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Pay's by the hour. We count it all at the end of the month.",
          "sub": "Lương theo giờ nhé. Cuối tháng cô tính.",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Before day one, settle three things: how pay is counted, and payday. Shifts, and swapping. Any fines.",
          "sub": "Trước ngày đầu, rõ ba điều: lương tính thế nào, trả ngày nào. Ca làm và cách đổi ca. Phạt hay trừ lương, nếu có."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "“Lương theo giờ, cuối tháng tính”",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "hoa",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Chỉ “Dạ vâng” vì ngại",
          "why": "Cuối tháng mới biết tuần đầu là thử việc, lương thấp hơn.",
          "rule": "Hỏi rõ một lần, đỡ buồn cả tháng"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Yes, okay. Sounds good!",
          "sub": "Dạ vâng. Được ạ!",
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
          "say": "Dũng feared looking demanding. Month's end: week one was a “trial”, lower pay.",
          "sub": "Dũng ngại bị cho là đòi hỏi. Cuối tháng mới biết: tuần đầu là “thử việc”, lương thấp hơn. Không ai nói trước."
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
          "who": "dung",
          "say": "Is there a trial period? And how is trial pay counted?",
          "sub": "Dạ, cho em hỏi mình có thời gian thử việc không, và lương thử việc tính thế nào ạ?",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "One clear question. Zero surprises.",
          "sub": "Một câu hỏi rõ. Không bất ngờ nào.",
          "phase": "redo",
          "keys": [
            "Một câu hỏi rõ"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p11,p12"
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
            "at": "l2",
            "fit": [
              "e-msg",
              "e-msgt"
            ],
            "zoom": 1.2,
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
            "id": "e-eve",
            "t": "text",
            "text": "Tối đó: nhắn tóm tắt",
            "x": 7932,
            "y": 440,
            "size": 48,
            "at": "l2:evening",
            "hl": [
              {
                "text": "nhắn tóm tắt",
                "at": "l2:summary"
              }
            ]
          },
          {
            "id": "e-msg",
            "t": "box",
            "x": 8772,
            "y": 680,
            "w": 780,
            "h": 80,
            "at": "l3:remember",
            "stroke": 4
          },
          {
            "id": "e-msgt",
            "t": "text",
            "text": "Theo giờ · thử việc 1 tuần · cuối tháng",
            "x": 8792,
            "y": 700,
            "size": 32,
            "at": "l3:remember+200",
            "font": "base"
          },
          {
            "id": "e-r1",
            "t": "text",
            "text": "Hỏi rõ một lần,",
            "x": 7932,
            "y": 580,
            "size": 58,
            "at": "l5:once",
            "color": "accent"
          },
          {
            "id": "e-r2",
            "t": "text",
            "text": "đỡ buồn cả tháng",
            "x": 7932,
            "y": 665,
            "size": 58,
            "at": "l5:month",
            "color": "accent",
            "hl": [
              {
                "text": "cả tháng",
                "at": "l5:month"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Spoken promises get forgotten. So that evening, Dũng texts a summary.",
          "sub": "Tối đó thêm một bước. Lời hứa miệng dễ quên hoặc bị nói khác đi. Nên Dũng nhắn tin tóm tắt.",
          "keys": [
            "nhắn tin tóm tắt"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Just to remember: pay by the hour, a paid one-week trial, paid at month's end.",
          "sub": "Em xin nhắn lại để nhớ ạ: lương theo giờ, thử việc một tuần có lương, trả vào cuối tháng.",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Ask clearly once, save a whole month of sadness.",
          "sub": "Hỏi rõ một lần, đỡ buồn cả tháng.",
          "keys": [
            "Hỏi rõ một lần"
          ]
        }
      ],
      "ref": "p9,p10,p11,p12"
    },
    {
      "id": "s14",
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
            "text": "④ Tuần đầu · Đi làm",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Serving"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "hot-beverage",
                "stopwatch"
              ]
            },
            "at": "l1:Stop four",
            "caption": "Tuần đầu · ca chiều ở quán",
            "icon": "stopwatch"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Học quy trình, nhớ tên",
            "x": 60,
            "y": 1260,
            "size": 42,
            "at": "l1:routine"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Hỏi nhiều, không ai trách",
            "x": 60,
            "y": 1335,
            "size": 46,
            "at": "l2:ask",
            "color": "accent",
            "hl": [
              {
                "text": "không ai trách",
                "at": "l2:minds"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Gia sư: học sinh hổng đâu?",
            "x": 60,
            "y": 1410,
            "size": 42,
            "at": "l4:Tutoring"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "→ bài Ngày đầu phục vụ · bài Gia sư",
            "x": 900,
            "y": 1780,
            "size": 30,
            "at": "l4:parents",
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
          "say": "Stop four: first week. Serving or sales? Learn the routine and coworkers' names.",
          "sub": "Chặng bốn: tuần đầu. Phục vụ, bán hàng? Học quy trình, nhớ tên đồng nghiệp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And to ask a lot. In week one, nobody minds questions.",
          "sub": "Và để hỏi thật nhiều. Tuần đầu, hỏi bao nhiêu cũng không ai trách.",
          "keys": [
            "không ai trách"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Tutoring? First find where the pupil is weak, and what parents hope for.",
          "sub": "Đi dạy gia sư? Trước hết tìm xem học sinh hổng ở đâu, phụ huynh mong gì. Mỗi việc có một bài riêng."
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
          }
        ],
        "items": [
          {
            "id": "f-log",
            "t": "text",
            "text": "Ghi: giờ vào · giờ ra · tiền",
            "x": 60,
            "y": 1520,
            "size": 40,
            "at": "l1:note",
            "color": "accent",
            "hl": [
              {
                "text": "giờ vào · giờ ra",
                "at": "l1:clock-out"
              }
            ]
          },
          {
            "id": "f-sec",
            "t": "text",
            "text": "Vài giây mỗi ngày",
            "x": 60,
            "y": 1610,
            "size": 52,
            "at": "l3:seconds"
          },
          {
            "id": "f-proof",
            "t": "text",
            "text": "= bằng chứng rõ nhất cuối tháng",
            "x": 60,
            "y": 1690,
            "size": 46,
            "at": "l3:proof",
            "color": "accent",
            "hl": [
              {
                "text": "bằng chứng",
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
          "say": "Any job: note clock-in, clock-out and expected pay in your phone. Daily.",
          "sub": "Dù làm gì, tự ghi giờ vào ca, giờ ra ca và số tiền dự kiến vào điện thoại. Mỗi ngày.",
          "keys": [
            "giờ vào ca, giờ ra ca"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A few seconds a day. At month's end, your clearest proof if numbers differ.",
          "sub": "Mỗi ngày vài giây. Cuối tháng, đó là bằng chứng rõ nhất khi có chênh lệch.",
          "keys": [
            "bằng chứng rõ nhất"
          ]
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s16",
      "module": "BRK-07",
      "data": {
        "question": "Lương rõ, ca rõ. Vậy cái gì tụt trước?",
        "illus": "books"
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
          "say": "Pay is clear, shifts are clear. So what slips first?",
          "sub": "Lương rõ, ca rõ. Vậy cái gì tụt trước?"
        }
      ],
      "ref": "p16"
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Giữa kỳ · Ca tối của Lan",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:mid-term"
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
                  "id": "lan",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "crescent-moon",
                "alarm-clock"
              ]
            },
            "at": "l1:Lan",
            "caption": "Giữa kỳ · tối, quán cô Hoa",
            "icon": "crescent-moon"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Thêm ca tối → về muộn",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l4:late",
            "color": "coral"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "→ dậy trễ, bỏ tiết đầu",
            "x": 2028,
            "y": 1335,
            "size": 46,
            "at": "l4:skip",
            "color": "coral",
            "hl": [
              {
                "text": "bỏ tiết đầu",
                "at": "l4:skip"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "→ thi giữa kỳ: không theo kịp",
            "x": 2028,
            "y": 1410,
            "size": 42,
            "at": "l5:keep",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five: mid-term. This is Lan, Dũng's classmate, a waitress here longer.",
          "sub": "Chặng năm: giữa kỳ. Đây là Lan, bạn cùng lớp Dũng, làm phục vụ ở quán cô Hoa lâu hơn nhiều.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "We're short of staff tonight, Lan. Could you take the evening shift again?",
          "sub": "Tối nay quán thiếu người, Lan ơi. Cháu nhận thêm ca tối nữa nhé?",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Every shift ended late. Bed, wake late, skip the first class.",
          "sub": "Ca nào cũng xong muộn. Về phòng là ngủ, sáng dậy trễ, bỏ luôn tiết đầu.",
          "keys": [
            "bỏ luôn tiết đầu"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "By mid-terms, she'd missed too many classes to keep up.",
          "sub": "Đến thi giữa kỳ, Lan mới thấy mình vắng quá nhiều buổi, không theo kịp bài."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p18"
    },
    {
      "id": "s18",
      "module": "BRK-04",
      "data": {
        "title": "Ca tối và buổi học",
        "wrong": "Nhận thêm ca, bỏ tiết đầu",
        "right": "Lịch học, lịch thi trước; ca xếp sau",
        "wrongIllus": "sleeping-face",
        "rightIllus": "books"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Take every extra shift, skip a class or two?",
          "sub": "Nhận hết ca thêm, bỏ một hai buổi học?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. Classes and exams first. Shifts come after.",
          "sub": "Không. Lịch học, lịch thi đi trước. Ca làm xếp sau.",
          "keys": [
            "Ca làm xếp sau"
          ]
        }
      ],
      "ref": "p16,p19"
    },
    {
      "id": "s19",
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
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1490,
            "w": 46,
            "h": 46,
            "at": "l2:sleep",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1472,
            "size": 58,
            "at": "l2:sleep+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "Thiếu ngủ nhiều ngày",
            "x": 2096,
            "y": 1480,
            "size": 40,
            "at": "l2:sleep+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1552,
            "w": 46,
            "h": 46,
            "at": "l2:classes",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1534,
            "size": 58,
            "at": "l2:classes+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "Bỏ buổi học",
            "x": 2096,
            "y": 1542,
            "size": 40,
            "at": "l2:classes+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1614,
            "w": 46,
            "h": 46,
            "at": "l3:exams",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1596,
            "size": 58,
            "at": "l3:exams+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "Sắp thi chưa ôn",
            "x": 2096,
            "y": 1604,
            "size": 40,
            "at": "l3:exams+200"
          },
          {
            "id": "g-c3",
            "t": "box",
            "x": 2028,
            "y": 1676,
            "w": 46,
            "h": 46,
            "at": "l3:snapping",
            "stroke": 5
          },
          {
            "id": "g-k3",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1658,
            "size": 58,
            "at": "l3:snapping+600",
            "color": "accent"
          },
          {
            "id": "g-l3",
            "t": "text",
            "text": "Hay cáu bạn phòng",
            "x": 2096,
            "y": 1666,
            "size": 40,
            "at": "l3:snapping+200"
          },
          {
            "id": "g-two",
            "t": "text",
            "text": "≥ 2 dấu hiệu → giảm giờ làm",
            "x": 2868,
            "y": 1790,
            "size": 40,
            "at": "l4:Two",
            "color": "coral",
            "hl": [
              {
                "text": "giảm giờ làm",
                "at": "l4:Cut"
              }
            ]
          },
          {
            "id": "g-r",
            "t": "text",
            "text": "Ca đổi được, buổi học khó bù",
            "x": 2028,
            "y": 1750,
            "size": 44,
            "at": "l5:moved",
            "color": "accent",
            "hl": [
              {
                "text": "khó bù",
                "at": "l5:hard"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Four signs: days of short sleep, missed classes,",
          "sub": "Để ý bốn dấu hiệu: thiếu ngủ nhiều ngày liền, bỏ buổi học vì mệt hoặc trùng ca,"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "exams with no revision, snapping at your roommate.",
          "sub": "sắp thi mà chưa ôn, và hay cáu với bạn cùng phòng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Two or more? Cut your hours.",
          "sub": "Từ hai dấu hiệu trở lên: nên giảm giờ làm.",
          "keys": [
            "giảm giờ làm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A shift can be moved. A missed class is hard to make up.",
          "sub": "Ca làm còn đổi được, buổi học bỏ rồi khó bù.",
          "keys": [
            "buổi học bỏ rồi khó bù"
          ]
        }
      ],
      "ref": "p16,p17,p19"
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
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Ngày lương đầu tiên",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:payday"
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
                "money-bag",
                "bubble-tea"
              ]
            },
            "at": "l1:payday",
            "caption": "Cuối tháng · phòng trọ của Dũng",
            "icon": "money-bag"
          },
          {
            "id": "h-split",
            "t": "text",
            "text": "Chia ngay 3 phần:",
            "x": 3996,
            "y": 1260,
            "size": 50,
            "at": "l2:split",
            "hl": [
              {
                "text": "Chia ngay",
                "at": "l2:split"
              }
            ]
          },
          {
            "id": "h-b0",
            "t": "box",
            "x": 3996,
            "y": 1350,
            "w": 240,
            "h": 80,
            "at": "l2:spending",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "h-bt0",
            "t": "text",
            "text": "Chi tiêu",
            "x": 4016,
            "y": 1362,
            "size": 42,
            "at": "l2:spending+200"
          },
          {
            "id": "h-b1",
            "t": "box",
            "x": 4256,
            "y": 1350,
            "w": 240,
            "h": 80,
            "at": "l2:savings",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "h-bt1",
            "t": "text",
            "text": "Để dành",
            "x": 4276,
            "y": 1362,
            "size": 42,
            "at": "l2:savings+200"
          },
          {
            "id": "h-b2",
            "t": "box",
            "x": 4516,
            "y": 1350,
            "w": 240,
            "h": 80,
            "at": "l2:study",
            "stroke": 4,
            "color": "accent"
          },
          {
            "id": "h-bt2",
            "t": "text",
            "text": "Việc học",
            "x": 4536,
            "y": 1362,
            "size": 42,
            "at": "l2:study+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six: first payday. The trap: spend a little, then more, until it's gone.",
          "sub": "Chặng sáu: ngày lương đầu tiên của Dũng. Cám dỗ: tiêu một ít, rồi thêm một ít, tới khi hết sạch."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Instead, split it right away: spending, savings, and money for study.",
          "sub": "Thay vào đó, chia ngay: phần chi tiêu, phần để dành, phần cho việc học.",
          "keys": [
            "chia ngay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Spending, savings, books. Split before the bubble tea finds me!",
          "sub": "Chi tiêu, để dành, sách vở. Chia xong trước khi trà sữa kịp gọi tên mình!",
          "face": "happy",
          "pose": "phone"
        }
      ],
      "ref": "p20"
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
            "id": "h-cut",
            "t": "text",
            "text": "Chậm lương / bị trừ không rõ?",
            "x": 3996,
            "y": 1510,
            "size": 44,
            "at": "l1:cut",
            "color": "coral"
          },
          {
            "id": "h-calm",
            "t": "text",
            "text": "Hỏi bình tĩnh + sổ ghi giờ",
            "x": 3996,
            "y": 1590,
            "size": 48,
            "at": "l2:calmly",
            "color": "accent",
            "hl": [
              {
                "text": "sổ ghi giờ",
                "at": "l2:record"
              }
            ]
          },
          {
            "id": "h-link",
            "t": "text",
            "text": "→ bài Lương chậm, trừ vô lý",
            "x": 4836,
            "y": 1780,
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
          "say": "Later, a surprise: late pay, or a cut with no reason given.",
          "sub": "Rồi một bất ngờ: lương trả chậm, hoặc bị trừ mà không rõ lý do."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask again, calmly, with your own record of hours.",
          "sub": "Hỏi lại một cách bình tĩnh, kèm ghi chép giờ làm của bạn. Lúc này, mấy dòng ghi mỗi ngày phát huy tác dụng.",
          "keys": [
            "ghi chép giờ làm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Cô Hoa, here are my hours this month. Could we check them together?",
          "sub": "Cô ơi, đây là giờ làm tháng này của cháu. Mình cùng xem lại được không ạ?",
          "pose": "explain"
        }
      ],
      "ref": "p21"
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
          },
          {
            "at": "l3",
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
            "text": "⑦ Cuối kỳ · Nghỉ cho đẹp",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:term"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "side": "right"
                }
              ],
              "props": [
                "spiral-calendar",
                "handshake"
              ]
            },
            "at": "l1:clashes",
            "caption": "Cuối kỳ · quán cô Hoa",
            "icon": "spiral-calendar"
          },
          {
            "id": "i-n",
            "t": "text",
            "text": "Nghỉ việc: chuyện bình thường",
            "x": 5964,
            "y": 1260,
            "size": 46,
            "at": "l1:normal"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1370,
            "w": 46,
            "h": 46,
            "at": "l5:Notice",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1352,
            "size": 58,
            "at": "l5:Notice+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Báo trước đúng hẹn",
            "x": 6032,
            "y": 1360,
            "size": 44,
            "at": "l5:Notice+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1440,
            "w": 46,
            "h": 46,
            "at": "l5:handover",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1422,
            "size": 58,
            "at": "l5:handover+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Bàn giao gọn gàng",
            "x": 6032,
            "y": 1430,
            "size": 44,
            "at": "l5:handover+200"
          },
          {
            "id": "i-get",
            "t": "text",
            "text": "→ đủ lương + lời giới thiệu tốt",
            "x": 5964,
            "y": 1540,
            "size": 44,
            "at": "l5:pay",
            "color": "accent",
            "hl": [
              {
                "text": "lời giới thiệu tốt",
                "at": "l5:reference"
              }
            ]
          },
          {
            "id": "i-link",
            "t": "text",
            "text": "→ bài Khi nào nên nghỉ việc làm thêm",
            "x": 6804,
            "y": 1780,
            "size": 30,
            "at": "l5:reference+800",
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
          "say": "Stop seven: end of term. The new timetable clashes with the shifts. Quitting is normal.",
          "sub": "Chặng bảy: cuối kỳ. Lịch học mới trùng ca làm. Nghỉ việc là chuyện bình thường."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Cô Hoa, telling you early: my timetable clashes. I'll hand over neatly.",
          "sub": "Cô ơi, lịch học mới của cháu bị trùng. Cháu báo sớm như đã hẹn, và sẽ bàn giao gọn gàng ạ.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Thanks for telling me early. Come back any time.",
          "sub": "Cảm ơn cháu báo sớm. Lúc nào rảnh cứ quay lại nhé.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Notice on time, a tidy handover: you get your full pay, and keep a good reference.",
          "sub": "Báo trước đúng hẹn, bàn giao gọn gàng: nhận đủ lương, giữ được lời giới thiệu tốt.",
          "keys": [
            "lời giới thiệu tốt"
          ]
        }
      ],
      "ref": "p22"
    },
    {
      "id": "s23",
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
            "at": "l3",
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
            "text": "⑧ Đầu kỳ hai · Tin cũ",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:term"
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
                "mobile-phone",
                "wastebasket"
              ]
            },
            "at": "l1:buzzes",
            "caption": "Tối Chủ nhật · đầu kỳ hai",
            "icon": "mobile-phone"
          },
          {
            "id": "j-ad",
            "t": "text",
            "text": "“Lương ngày cao, chuyển phí trước”",
            "x": 7932,
            "y": 1260,
            "size": 42,
            "at": "l2:fee",
            "color": "muted"
          },
          {
            "id": "j-adx",
            "t": "strike",
            "over": "j-ad",
            "at": "l3:Delete"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Học rồi, hành rồi",
            "x": 8772,
            "y": 1785,
            "size": 50,
            "at": "l4:done",
            "color": "accent",
            "hl": [
              {
                "text": "hành rồi",
                "at": "l4:done"
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
          "say": "Last stop: Sunday night, term two. Dũng's phone buzzes. Déjà vu.",
          "sub": "Chặng cuối: tối Chủ nhật, đầu kỳ hai. Điện thoại Dũng rung. Cảnh này quen quen."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Flyer job, good daily pay. Just transfer a fee first.",
          "sub": "Phát tờ rơi, lương ngày cao. Chỉ cần chuyển phí trước."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "A real job pays me. Delete.",
          "sub": "Việc thật thì trả tiền cho mình. Xoá.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Learning goes hand in hand with doing. Dũng has done it, and learned it.",
          "sub": "“Học đi đôi với hành.” Dũng đã hành, và đã học.",
          "keys": [
            "đã hành, và đã học"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p8,outro"
    },
    {
      "id": "s24",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "J",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1360,
            "w": 46,
            "h": 46,
            "at": "l2:Know",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1342,
            "size": 58,
            "at": "l2:Know+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Biết vì sao làm",
            "x": 8000,
            "y": 1350,
            "size": 38,
            "at": "l2:Know+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1432,
            "w": 46,
            "h": 46,
            "at": "l2:person",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1414,
            "size": 58,
            "at": "l2:person+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Xem tận mắt nơi tuyển",
            "x": 8000,
            "y": 1422,
            "size": 38,
            "at": "l2:person+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1504,
            "w": 46,
            "h": 46,
            "at": "l2:message",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1486,
            "size": 58,
            "at": "l2:message+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Tin nhắn ghi thoả thuận",
            "x": 8000,
            "y": 1494,
            "size": 38,
            "at": "l2:message+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1576,
            "w": 46,
            "h": 46,
            "at": "l3:hours",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1558,
            "size": 58,
            "at": "l3:hours+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Ghi giờ làm mỗi ngày",
            "x": 8000,
            "y": 1566,
            "size": 38,
            "at": "l3:hours+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1648,
            "w": 46,
            "h": 46,
            "at": "l3:Exams",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1630,
            "size": 58,
            "at": "l3:Exams+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Lịch thi đánh dấu sẵn",
            "x": 8000,
            "y": 1638,
            "size": 38,
            "at": "l3:Exams+200"
          },
          {
            "id": "j-c5",
            "t": "box",
            "x": 7932,
            "y": 1720,
            "w": 46,
            "h": 46,
            "at": "l3:split",
            "stroke": 5
          },
          {
            "id": "j-k5",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1702,
            "size": 58,
            "at": "l3:split+600",
            "color": "accent"
          },
          {
            "id": "j-l5",
            "t": "text",
            "text": "Chia tiền khi nhận lương",
            "x": 8000,
            "y": 1710,
            "size": 38,
            "at": "l3:split+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Six boxes to save.",
          "sub": "Sáu ô vuông nên lưu lại cho cả chặng đường."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Know why. See the place in person. A message recording the deal.",
          "sub": "Biết mình làm để làm gì. Kiểm tra nơi tuyển tận mắt. Có tin nhắn ghi lại thoả thuận."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Daily hours noted. Exams marked. Pay split on payday.",
          "sub": "Tự ghi giờ làm mỗi ngày. Lịch thi đánh dấu sẵn. Chia tiền ngay khi nhận lương."
        }
      ],
      "ref": "p23"
    },
    {
      "id": "s25",
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
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:Ask",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:shift",
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
            "x": 6664,
            "y": 700,
            "at": "l1:real"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8432,
            "y": 600,
            "at": "l2:Ask"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2808,
            "y": 1810,
            "at": "l3:shift"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Thông tin chung để tham khảo, không thay tư vấn pháp lý hay tài chính.",
            "x": 5964,
            "y": 1845,
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
          "say": "Three sayings to screenshot. One: a real job pays you; a fake one asks you for money.",
          "sub": "Ba câu để chụp màn hình. Một: việc thật trả tiền cho mình, việc giả đòi tiền của mình.",
          "keys": [
            "việc thật trả tiền cho mình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two: Ask clearly once, save a month of sadness.",
          "sub": "Hai: hỏi rõ một lần, đỡ buồn cả tháng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three: a shift can be moved; a missed class is hard to make up.",
          "sub": "Ba: ca làm còn đổi được, buổi học bỏ rồi khó bù.",
          "keys": [
            "buổi học bỏ rồi khó bù"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p8,p12,p19"
    },
    {
      "id": "s31",
      "module": "QUIZ-01",
      "ref": "questions[12]",
      "data": {
        "q": "Which saying from the article helps you tell a real job from a fake one?",
        "options": [
          "A real job pays you money, a fake job asks you for money",
          "A job that answers your messages quickly is always safe for students",
          "A job with a higher salary is always more trustworthy than a lower one"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "red-question-mark",
        "why": "Câu này đủ ngắn để nhớ ngay lúc đọc tin tuyển. Lương cao hay trả lời nhanh đều dễ làm giả."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which saying from the article helps you tell a real job from a fake one?",
          "sub": "Câu nào trong bài giúp bạn phân biệt việc thật và việc giả?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A real job pays you money, a fake job asks you for money.",
          "sub": "Việc thật trả tiền cho mình, việc giả đòi tiền của mình."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Short and easy to remember. High pay is easy to fake.",
          "sub": "Câu ngắn, dễ nhớ. Lương cao thì dễ làm giả."
        }
      ]
    },
    {
      "id": "s32",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi về cả chặng đường đi làm thêm",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Do it now: open your calendar and count this week's real free hours.",
          "sub": "Làm ngay: mở lịch, đếm số giờ rảnh thật của tuần này.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then try the forty questions below.",
          "sub": "Rồi thử sức với bốn mươi câu hỏi bên dưới nhé.",
          "face": "happy"
        }
      ]
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s23"
  }
};
