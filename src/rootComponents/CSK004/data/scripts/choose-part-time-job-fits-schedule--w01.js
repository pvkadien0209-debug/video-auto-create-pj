// Kịch bản video W lần 3 (#110) — "Chọn việc làm thêm phù hợp với lịch học" · chuỗi "Đi làm thêm khi còn đi học"
// Giọng đọc tiếng Anh, phụ đề tiếng Việt; hoạt hình (SCENE/DLG/HOST/END-05) + thẻ. Đủ ý cho 40 câu hỏi của bài.
export default {
  "schema": "detpro.video-script/0.2",
  "id": "choose-part-time-job-fits-schedule--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "students-with-part-time-jobs",
    "slug": "choose-part-time-job-fits-schedule",
    "door": "ky-nang",
    "level": "B1",
    "title": "Chọn việc làm thêm phù hợp với lịch học",
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
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô theo TUẦN CHỌN VIỆC của Dũng đầu học kỳ một (tối Chủ nhật tô lịch → cùng tối 4 tối hoá 2 → thứ Hai kiểu việc → thứ Ba cửa hàng tiện lợi → thứ Tư tính đường → thứ Bảy phỏng vấn quán cô Hoa → những tuần đầu tự kiểm → kỳ hai). Nhân vật theo w145/_series/students-with-part-time-jobs.md: Dũng (Uyên p4, ‘bạn’ p11), Lan (Trang p15, ca đóng cửa quán cô Hoa), Cô Hoa; Phong (p20) kể không tên trong BRK-04 (‘có bạn’). Số liệu chỉ từ bài: 10 giờ tối/gần nửa đêm (p15), 4 tối → 2 tối (p4), 3 ca chiều (p11), 4 + 1 = 5 giờ (p13), 2 tuần liền (p23), 3 ca/2 ngày (p20). Cảnh ngắt nhịp: BRK-03 s07 (4 → 2 tối), BRK-07 s12 (rehook kỳ hai), DLG s16 (câu Lan quên hỏi, tua về hôm nhận việc), BRK-04 s18 (Giấu/Báo sớm lịch thi). Khép vòng: mở Lan đi về một mình gần nửa đêm, khép Dũng tan đúng giờ về cùng Lan; ‘Liệu cơm gắp mắm’ → ‘liệu lịch rồi mới gắp ca’. Câu đố giữ questions[17]. Bản cũ: w145/bak/choose-part-time-job-fits-schedule--w01.js.",
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
            "id": "a-num",
            "t": "text",
            "text": "22:00",
            "x": 60,
            "y": 110,
            "size": 150,
            "at": "l1:ten",
            "color": "accent",
            "hl": [
              {
                "text": "22:00",
                "at": "l1:ten"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "tin tuyển: ca đóng cửa kết thúc",
            "x": 70,
            "y": 320,
            "size": 46,
            "at": "l1:closing"
          },
          {
            "id": "a-real",
            "t": "text",
            "text": "Ngoài đời: gần nửa đêm",
            "x": 70,
            "y": 410,
            "size": 54,
            "at": "l2:midnight",
            "color": "coral",
            "hl": [
              {
                "text": "gần nửa đêm",
                "at": "l2:midnight"
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
          "say": "Ten p.m. That's when the closing shift ends, says the job ad.",
          "sub": "Mười giờ tối. Tin tuyển ghi: ca đóng cửa kết thúc lúc đó.",
          "keys": [
            "Mười giờ tối"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In real life? Cleaning and stock checks drag on until nearly midnight.",
          "sub": "Ngoài đời? Dọn dẹp, kiểm hàng kéo đến gần nửa đêm.",
          "keys": [
            "gần nửa đêm"
          ]
        }
      ],
      "ref": "p15"
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
              "set": "street",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "face": "sad"
                }
              ],
              "props": [
                "night-with-stars",
                "crescent-moon"
              ]
            },
            "at": "l1",
            "caption": "Gần nửa đêm · đường về",
            "icon": "night-with-stars"
          },
          {
            "id": "a-forgot",
            "t": "text",
            "text": "Lan quên hỏi đúng một câu",
            "x": 60,
            "y": 520,
            "size": 50,
            "at": "l3:forgot",
            "hl": [
              {
                "text": "một câu",
                "at": "l3:question"
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
          "say": "Meet Lan, a student who took that closing shift. Walking home, alone.",
          "sub": "Đây là Lan, sinh viên nhận đúng ca đóng cửa ấy. Đang một mình đi về.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "The street's so empty. And I've got an early class tomorrow.",
          "sub": "Đường vắng quá. Mà sáng mai mình lại có tiết sớm.",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Lan forgot to ask one question. Hold on, we'll find it.",
          "sub": "Lan đã quên hỏi đúng một câu. Khoan, lát ta sẽ tìm ra.",
          "keys": [
            "một câu"
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
      "ref": "p15"
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
            "text": "Việc nào khớp lịch học?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:fits",
            "hl": [
              {
                "text": "khớp lịch học",
                "at": "l1:fits"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: lương cao nhất",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:highest",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:week"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: vừa tuần, đổi theo kỳ",
            "x": 2028,
            "y": 260,
            "size": 56,
            "at": "l2:week",
            "color": "accent",
            "hl": [
              {
                "text": "đổi theo kỳ",
                "at": "l2:term"
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
            "at": "l3:Draw",
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
            "at": "l3:type",
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
            "at": "l3:travel",
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
            "at": "l4:exam",
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
            "at": "l4:adjust",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-st0",
            "t": "text",
            "text": "Vẽ tuần",
            "x": 2048,
            "y": 416,
            "size": 42,
            "at": "l3:Draw+200"
          },
          {
            "id": "b-st1",
            "t": "text",
            "text": "Chọn kiểu việc",
            "x": 2378,
            "y": 416,
            "size": 42,
            "at": "l3:type+200"
          },
          {
            "id": "b-st2",
            "t": "text",
            "text": "Tính đường đi",
            "x": 2708,
            "y": 416,
            "size": 42,
            "at": "l3:travel+200"
          },
          {
            "id": "b-st3",
            "t": "text",
            "text": "Hỏi mùa thi",
            "x": 3038,
            "y": 416,
            "size": 42,
            "at": "l4:exam+200"
          },
          {
            "id": "b-st4",
            "t": "text",
            "text": "Thử, chỉnh",
            "x": 3368,
            "y": 416,
            "size": 42,
            "at": "l4:adjust+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you choose a job that fits your classes?",
          "sub": "Vậy chọn việc làm thêm thế nào cho khớp lịch học?",
          "keys": [
            "khớp lịch học"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not the highest pay. The job that fits your week, and changes with your term.",
          "sub": "Không phải việc lương cao nhất. Mà là việc vừa với tuần của bạn, đổi được theo kỳ học.",
          "keys": [
            "vừa với tuần của bạn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Draw your week first, pick a job type for the gaps, count the travel,",
          "sub": "Vẽ tuần ra trước, chọn kiểu việc khớp chỗ trống, tính cả đường đi,"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "ask about exam season, then try a few weeks and adjust.",
          "sub": "hỏi trước về mùa thi, rồi thử vài tuần và điều chỉnh."
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
            "text": "“Liệu cơm gắp mắm”",
            "x": 2028,
            "y": 560,
            "size": 64,
            "at": "l1:rice",
            "color": "accent"
          },
          {
            "id": "b-ca2",
            "t": "text",
            "text": "→ liệu lịch mà gắp ca",
            "x": 2068,
            "y": 660,
            "size": 50,
            "at": "l2:timetable",
            "color": "coral",
            "hl": [
              {
                "text": "gắp ca",
                "at": "l2:shifts"
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
          "say": "Our elders say: check the rice before you pick the side dish.",
          "sub": "Ông bà dặn: “Liệu cơm gắp mắm.”",
          "keys": [
            "Liệu cơm gắp mắm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "For students: check the timetable before you pick the shifts. Let's watch Dũng do it.",
          "sub": "Sinh viên thì: liệu lịch mà gắp ca. Cùng xem Dũng làm.",
          "keys": [
            "liệu lịch mà gắp ca"
          ]
        }
      ],
      "ref": "intro,outro"
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
            "at": "l3",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Tối Chủ nhật · Tô lịch tuần",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Sunday"
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
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "spiral-calendar",
                "pencil"
              ]
            },
            "at": "l1:Dũng",
            "caption": "Tối Chủ nhật · phòng trọ",
            "icon": "spiral-calendar"
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 170,
            "w": 46,
            "h": 46,
            "at": "l3:classes",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 152,
            "size": 58,
            "at": "l3:classes+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Cố định: học, đi lại, ăn, ngủ",
            "x": 4064,
            "y": 160,
            "size": 40,
            "at": "l3:classes+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 242,
            "w": 46,
            "h": 46,
            "at": "l4:self-study",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 224,
            "size": 58,
            "at": "l4:self-study+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Khung tự học riêng",
            "x": 4064,
            "y": 232,
            "size": 40,
            "at": "l4:self-study+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 314,
            "w": 46,
            "h": 46,
            "at": "l5:session",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 296,
            "size": 58,
            "at": "l5:session+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Một buổi để trống",
            "x": 4064,
            "y": 304,
            "size": 40,
            "at": "l5:session+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 386,
            "w": 46,
            "h": 46,
            "at": "l6:rest",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 368,
            "size": 58,
            "at": "l6:rest+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Còn lại: giờ đi làm",
            "x": 4064,
            "y": 376,
            "size": 40,
            "at": "l6:rest+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one: Sunday night. This is Dũng, second-year, about to pick his first job.",
          "sub": "Chặng một: tối Chủ nhật. Đây là Dũng, sinh viên năm hai, sắp chọn việc làm thêm đầu tiên.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "My timetable's half empty. Plenty of room for shifts!",
          "sub": "Thời khoá biểu trống nửa tuần. Thừa chỗ cho ca làm!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "First, colour the fixed boxes: classes, travel, meals, sleep.",
          "sub": "Trước hết, tô những ô cố định: giờ học, đi lại, bữa ăn, giấc ngủ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then book self-study blocks, like a second timetable.",
          "sub": "Rồi dành riêng vài khung tự học, như một “lịch học thứ hai”.",
          "keys": [
            "lịch học thứ hai"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And keep one session a week free: laundry, shopping, rest. Every week brings surprises.",
          "sub": "Chừa ít nhất một buổi không học, không làm: giặt giũ, đi chợ, nghỉ. Tuần nào cũng có việc bất ngờ."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Only the rest is for work.",
          "sub": "Chỗ còn lại mới là chỗ cho ca làm.",
          "keys": [
            "Chỗ còn lại"
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
      "ref": "p1,p2,p3"
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
            "text": "② Cùng tối · Bốn tối trống?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:four"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "(1) Ghi giờ trên lớp",
            "x": 5964,
            "y": 170,
            "size": 48,
            "at": "l2:class"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "(2) Ghi tự học, họp nhóm",
            "x": 5964,
            "y": 250,
            "size": 48,
            "at": "l3:group",
            "hl": [
              {
                "text": "họp nhóm",
                "at": "l3:group"
              }
            ]
          },
          {
            "id": "d-eve",
            "t": "text",
            "text": "→ phần lớn rơi vào buổi tối",
            "x": 6004,
            "y": 330,
            "size": 44,
            "at": "l3:evenings",
            "color": "coral"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "(3) Nhìn lại lịch",
            "x": 5964,
            "y": 420,
            "size": 48,
            "at": "l4:Look"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two: same night. Every evening looks free, so Dũng plans four evening shifts at a tea shop.",
          "sub": "Chặng hai: cùng tối. Tối nào cũng trống, Dũng định nhận bốn ca tối ở tiệm trà sữa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Before replying, three steps. One: write in class hours.",
          "sub": "Trước khi trả lời, làm ba bước. Một: ghi giờ trên lớp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: add self-study and group meetings. Most fall in the evenings.",
          "sub": "Hai: ghi tiếp giờ tự học, các buổi họp nhóm. Phần lớn rơi vào buổi tối.",
          "keys": [
            "buổi tối"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: Look again.",
          "sub": "Ba: nhìn lại lịch."
        }
      ],
      "ref": "p4"
    },
    {
      "id": "s07",
      "module": "BRK-03",
      "data": {
        "from": 4,
        "value": 2,
        "suffix": " tối",
        "label": "thật sự trống mỗi tuần",
        "illus": "spiral-calendar"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Not four evenings.",
          "sub": "Không phải bốn tối."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Only two are really free.",
          "sub": "Chỉ hai tối thật sự trống.",
          "keys": [
            "hai tối"
          ]
        }
      ],
      "ref": "p4"
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
            "id": "d-two",
            "t": "text",
            "text": "Nhận 2 ca, không vắng họp",
            "x": 5964,
            "y": 520,
            "size": 44,
            "at": "l1:two"
          },
          {
            "id": "d-r1",
            "t": "text",
            "text": "Giờ tự học ghi vào trước,",
            "x": 5964,
            "y": 610,
            "size": 54,
            "at": "l2:Self-study",
            "color": "accent",
            "hl": [
              {
                "text": "ghi vào trước",
                "at": "l2:first"
              }
            ]
          },
          {
            "id": "d-r2",
            "t": "text",
            "text": "ca làm điền vào sau",
            "x": 5964,
            "y": 690,
            "size": 54,
            "at": "l2:after",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "He takes exactly two shifts, and all term never misses a group meeting.",
          "sub": "Dũng nhận đúng hai ca, và cả kỳ không vắng buổi họp nhóm nào."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Self-study goes in first. Shifts go in after.",
          "sub": "Giờ tự học ghi vào trước, ca làm điền vào sau.",
          "keys": [
            "Giờ tự học ghi vào trước"
          ]
        }
      ],
      "ref": "p4,p5"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Hai · Kiểu việc nào?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Monday"
          },
          {
            "id": "e-b1",
            "t": "box",
            "x": 7932,
            "y": 150,
            "w": 780,
            "h": 300,
            "at": "l2:Fixed",
            "stroke": 4
          },
          {
            "id": "e-h1",
            "t": "text",
            "text": "Ca cố định",
            "x": 7962,
            "y": 165,
            "size": 56,
            "at": "l2:Fixed",
            "color": "accent"
          },
          {
            "id": "e-p1",
            "t": "text",
            "text": "+ tuần nào cũng cùng giờ",
            "x": 7962,
            "y": 255,
            "size": 40,
            "at": "l2:same"
          },
          {
            "id": "e-m1",
            "t": "text",
            "text": "− kỳ mới đổi lịch: khó giữ",
            "x": 7962,
            "y": 335,
            "size": 40,
            "at": "l3:new",
            "color": "coral"
          },
          {
            "id": "e-b2",
            "t": "box",
            "x": 8772,
            "y": 150,
            "w": 780,
            "h": 300,
            "at": "l4:Weekly",
            "stroke": 4
          },
          {
            "id": "e-h2",
            "t": "text",
            "text": "Ca đăng ký theo tuần",
            "x": 8802,
            "y": 165,
            "size": 50,
            "at": "l4:Weekly",
            "color": "accent"
          },
          {
            "id": "e-p2",
            "t": "text",
            "text": "+ hợp lịch hay đổi",
            "x": 8802,
            "y": 255,
            "size": 40,
            "at": "l4:changing"
          },
          {
            "id": "e-m2",
            "t": "text",
            "text": "− thu nhập lên xuống",
            "x": 8802,
            "y": 335,
            "size": 40,
            "at": "l5:income",
            "color": "coral",
            "hl": [
              {
                "text": "lên xuống",
                "at": "l5:down"
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
          "say": "Stop three: Monday. Which job type fits which timetable?",
          "sub": "Chặng ba: thứ Hai. Kiểu việc nào hợp kiểu lịch nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fixed shifts: the same hours every week. Easy, if your timetable holds all term.",
          "sub": "Ca cố định: tuần nào cũng làm cùng giờ. Dễ xếp, nếu lịch học ổn định cả kỳ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The weak spot: a new term, a new timetable, and the old shift may not survive.",
          "sub": "Điểm yếu: sang kỳ mới, lịch học đổi, ca cũ có thể không giữ được.",
          "keys": [
            "ca cũ có thể không giữ được"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Weekly sign-up: you pick shifts each week. Good for a changing timetable.",
          "sub": "Ca đăng ký theo tuần: tự chọn ca mỗi tuần. Hợp với lịch học hay thay đổi."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The price: income goes up and down, and some weeks you miss the shift you want.",
          "sub": "Đổi lại, thu nhập lên xuống, có tuần không được ca mình muốn.",
          "keys": [
            "thu nhập lên xuống"
          ]
        }
      ],
      "ref": "p6,p7"
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
            "id": "e-g",
            "t": "text",
            "text": "Gia sư: + đường đi, soạn bài",
            "x": 7932,
            "y": 500,
            "size": 44,
            "at": "l1:Tutoring",
            "hl": [
              {
                "text": "soạn bài",
                "at": "l1:planning"
              }
            ]
          },
          {
            "id": "e-s",
            "t": "text",
            "text": "Sự kiện: thu nhập không đều",
            "x": 7932,
            "y": 580,
            "size": 44,
            "at": "l2:events",
            "color": "coral"
          },
          {
            "id": "e-o",
            "t": "text",
            "text": "Online: dễ kéo vào đêm",
            "x": 7932,
            "y": 660,
            "size": 42,
            "at": "l3:Online"
          },
          {
            "id": "e-sc",
            "t": "text",
            "text": "+ kiểm tra kỹ nơi giao việc",
            "x": 8772,
            "y": 690,
            "size": 40,
            "at": "l3:scams",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tutoring: short evening or weekend lessons. But add travel and planning time; your schedule won't show them.",
          "sub": "Gia sư: buổi tối, cuối tuần, mỗi buổi không dài. Nhưng tính thêm giờ đi lại và soạn bài, lịch dạy không hiện.",
          "keys": [
            "giờ đi lại và soạn bài"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Weekend events: paid by the day, but irregular. Don't count them as fixed living money.",
          "sub": "Việc sự kiện cuối tuần: trả theo ngày nhưng không đều. Đừng tính vào tiền sống cố định."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Online work: your own hours, no clear finish, so it creeps into the night. And check for scams.",
          "sub": "Việc online: chủ động giờ, không có giờ kết thúc nên dễ kéo vào đêm. Và kiểm tra kỹ, vì nhiều chiêu lừa đội lốt.",
          "keys": [
            "dễ kéo vào đêm"
          ]
        }
      ],
      "ref": "p8,p9,p10"
    },
    {
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "Ca cố định ổn cả kỳ một. Kỳ hai thì sao?",
        "illus": "tear-off-calendar"
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
          "say": "Fixed shifts worked all term one. What about term two?",
          "sub": "Ca cố định ổn suốt kỳ một. Sang kỳ hai thì sao?"
        }
      ],
      "ref": "p11"
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
            "text": "④ Thứ Ba · Ca chiều cố định",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:store"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "face": "thinking"
                }
              ],
              "props": [
                "convenience-store",
                "tear-off-calendar"
              ]
            },
            "at": "l1:store",
            "caption": "Thứ Ba · cửa hàng tiện lợi",
            "icon": "convenience-store"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "3 ca chiều / tuần, cố định",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l1:three"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Kỳ hai: môn chính dời vào chiều",
            "x": 60,
            "y": 1340,
            "size": 42,
            "at": "l3:afternoons",
            "color": "coral"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Cửa hàng: không có ca khác",
            "x": 60,
            "y": 1415,
            "size": 42,
            "at": "l3:other",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four: Tuesday. A convenience store offers three fixed afternoon shifts a week.",
          "sub": "Chặng bốn: thứ Ba. Một cửa hàng tiện lợi mời làm ba ca chiều cố định mỗi tuần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Term one fits perfectly. Sign me up!",
          "sub": "Kỳ một khớp hoàn hảo. Nhận luôn!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Picture term two: main classes move onto those afternoons. The store has no other shifts.",
          "sub": "Thử nghĩ kỳ hai: các môn chính dời vào đúng các buổi chiều ấy. Cửa hàng không có ca khác."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "What should Dũng ask now, to avoid that?",
          "sub": "Vậy lúc nhận việc, Dũng nên hỏi câu gì để tránh cảnh đó?"
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
            "at": "l1",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-ask",
            "t": "text",
            "text": "“Kỳ sau, chuyển ca được không?”",
            "x": 60,
            "y": 1510,
            "size": 46,
            "at": "l1:timetable",
            "color": "accent",
            "hl": [
              {
                "text": "chuyển ca",
                "at": "l1:move"
              }
            ]
          },
          {
            "id": "f-no",
            "t": "text",
            "text": "Không? → biết trước, khỏi nghỉ gấp",
            "x": 60,
            "y": 1590,
            "size": 42,
            "at": "l3:If"
          },
          {
            "id": "f-r1",
            "t": "text",
            "text": "Lịch học đổi theo kỳ,",
            "x": 60,
            "y": 1690,
            "size": 56,
            "at": "l4:Timetables",
            "color": "accent"
          },
          {
            "id": "f-r2",
            "t": "text",
            "text": "việc phải đổi theo được",
            "x": 60,
            "y": 1775,
            "size": 56,
            "at": "l4:too",
            "color": "accent",
            "hl": [
              {
                "text": "đổi theo được",
                "at": "l4:change"
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
          "say": "If my timetable changes next term, can I move my shifts?",
          "sub": "Nếu kỳ sau lịch học của em đổi, em có chuyển ca được không ạ?",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The answer tells you if the job can bend with your classes.",
          "sub": "Câu trả lời cho biết việc có co giãn theo lịch học không."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "If not, you know early, instead of quitting in a one-week panic.",
          "sub": "Nếu không, bạn biết trước để tính, thay vì phải xin nghỉ gấp trong một tuần."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Timetables change each term. Your job must be able to change too.",
          "sub": "Lịch học đổi theo kỳ, việc chọn phải đổi theo được.",
          "keys": [
            "việc chọn phải đổi theo được"
          ]
        }
      ],
      "ref": "p11,p12"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Tư · Tính cả đường đi",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Wednesday"
          },
          {
            "id": "g-eq",
            "t": "text",
            "text": "4 + 1 = 5 tiếng",
            "x": 2028,
            "y": 1260,
            "size": 64,
            "at": "l2:four",
            "hl": [
              {
                "text": "5 tiếng",
                "at": "l2:five"
              }
            ]
          },
          {
            "id": "g-way",
            "t": "text",
            "text": "Chỗ làm trên đường trường ↔ phòng",
            "x": 2028,
            "y": 1360,
            "size": 44,
            "at": "l3:between",
            "color": "accent"
          },
          {
            "id": "g-n1",
            "t": "text",
            "text": "Ca muộn: đường sáng? còn xe buýt?",
            "x": 2028,
            "y": 1450,
            "size": 42,
            "at": "l4:lit"
          },
          {
            "id": "g-n2",
            "t": "text",
            "text": "Có bạn cùng ca về chung?",
            "x": 2028,
            "y": 1520,
            "size": 42,
            "at": "l4:coworker"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five: Wednesday. Count travel time as part of the job.",
          "sub": "Chặng năm: thứ Tư. Tính thời gian đi về vào giờ làm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A four-hour shift plus an hour on the road is really five hours of your day.",
          "sub": "Một ca bốn tiếng cộng một tiếng đi về, thật ra là năm tiếng của bạn.",
          "keys": [
            "năm tiếng của bạn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A job on the way between school and your room usually costs least.",
          "sub": "Chỗ làm nằm trên đường giữa trường và phòng trọ thường đỡ tốn nhất."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Late shift? Ask: is the road lit, are buses running, is a coworker going your way?",
          "sub": "Ca kết thúc muộn? Hỏi: đường về có sáng không, còn xe buýt không, có bạn cùng ca về chung không?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And Lan's missing question? Rewind to her hiring day at Cô Hoa's café.",
          "sub": "Còn câu Lan quên hỏi? Tua về hôm Lan nhận việc ở quán cô Hoa."
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s16",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "Ca đóng cửa: 10 giờ",
        "actors": [
          {
            "id": "lan",
            "side": "left"
          },
          {
            "id": "hoa",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Tin giờ tan trên giấy",
          "why": "Dọn dẹp, kiểm hàng kéo đến gần nửa đêm; đường về vắng, sáng có tiết sớm.",
          "rule": "Giờ tan trên giấy khác giờ tan ngoài đời"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "The closing shift ends at ten.",
          "sub": "Ca đóng cửa xong lúc mười giờ nhé.",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Ten? Perfect. I'll take it!",
          "sub": "Mười giờ? Tuyệt. Cháu nhận ạ!",
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
          "say": "Two weeks later: scared of the dark road, dozing off in class.",
          "sub": "Hai tuần sau: vừa sợ đường tối, vừa ngủ gật trên lớp."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Take two!",
          "sub": "Thử lại nhé!",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "lan",
          "say": "What time does the evening shift really finish? Do we often stay late to clean?",
          "sub": "Ca tối thường xong thật lúc mấy giờ ạ, có hay phải ở lại dọn muộn không ạ?",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Finishing time on paper isn't finishing time in real life.",
          "sub": "Giờ tan trên giấy khác giờ tan ngoài đời.",
          "phase": "redo",
          "keys": [
            "Giờ tan trên giấy"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p14,p15,p16"
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
            "at": "l5",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Bảy · Phỏng vấn",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "spiral-calendar",
                "hot-beverage"
              ]
            },
            "at": "l1:Hoa",
            "caption": "Thứ Bảy · quán cà phê cô Hoa",
            "icon": "hot-beverage"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1260,
            "w": 46,
            "h": 46,
            "at": "l2:minimum",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1242,
            "size": 58,
            "at": "l2:minimum+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Tối thiểu bao nhiêu ca?",
            "x": 4064,
            "y": 1250,
            "size": 42,
            "at": "l2:minimum+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1330,
            "w": 46,
            "h": 46,
            "at": "l3:sign",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1312,
            "size": 58,
            "at": "l3:sign+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Theo tuần hay cố định?",
            "x": 4064,
            "y": 1320,
            "size": 42,
            "at": "l3:sign+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1400,
            "w": 46,
            "h": 46,
            "at": "l4:exam",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1382,
            "size": 58,
            "at": "l4:exam+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Mùa thi giảm ca được?",
            "x": 4064,
            "y": 1390,
            "size": 42,
            "at": "l4:exam+200"
          },
          {
            "id": "h-tell",
            "t": "text",
            "text": "Nói thật lịch học, cả tháng thi",
            "x": 3996,
            "y": 1490,
            "size": 42,
            "at": "l5:real",
            "color": "accent",
            "hl": [
              {
                "text": "cả tháng thi",
                "at": "l5:exam"
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
          "say": "Stop six: Saturday, an interview at Cô Hoa's café, where Lan works. Dũng comes with three questions.",
          "sub": "Chặng sáu: thứ Bảy, phỏng vấn ở quán cô Hoa, nơi Lan làm. Dũng mang theo ba câu hỏi.",
          "keys": [
            "ba câu hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "What's the minimum number of shifts a week?",
          "sub": "Mỗi tuần em cần làm tối thiểu bao nhiêu ca ạ?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Do I sign up weekly, or are shifts fixed all term?",
          "sub": "Ca đăng ký theo tuần hay cố định cả kỳ ạ?",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "If I tell you early, can I work fewer shifts in exam weeks?",
          "sub": "Mùa thi em báo trước thì có giảm ca được không ạ?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And share your real timetable from the start, exam months included. Then the manager can plan.",
          "sub": "Và nói thật lịch học ngay từ đầu, kể cả những tháng có thi. Quản lý biết trước thì xếp ca dễ.",
          "keys": [
            "nói thật lịch học"
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
      "ref": "p17,p18"
    },
    {
      "id": "s18",
      "module": "BRK-04",
      "data": {
        "title": "Lịch thi",
        "labels": [
          "Giấu",
          "Báo sớm"
        ],
        "wrong": "Giấu lịch thi, sát ngày mới xin nghỉ",
        "right": "Đưa lịch thi ngay lúc phỏng vấn",
        "wrongIllus": "anxious-face-with-sweat",
        "rightIllus": "spiral-calendar"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Hide your exams, then beg for days off?",
          "sub": "Giấu lịch thi, sát ngày mới xin nghỉ?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. Share exam dates early, at the interview.",
          "sub": "Không. Báo lịch thi từ sớm, ngay lúc phỏng vấn.",
          "keys": [
            "Báo lịch thi từ sớm"
          ]
        }
      ],
      "ref": "p18,p21"
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
            "id": "h-ph",
            "t": "text",
            "text": "Giấu lịch thi → điểm thấp hẳn",
            "x": 3996,
            "y": 1570,
            "size": 42,
            "at": "l2:results",
            "color": "coral"
          },
          {
            "id": "h-min",
            "t": "text",
            "text": "Ca tối thiểu > giờ trống?",
            "x": 3996,
            "y": 1650,
            "size": 44,
            "at": "l3:minimum",
            "color": "coral"
          },
          {
            "id": "h-not",
            "t": "text",
            "text": "→ chưa phải lúc này",
            "x": 3996,
            "y": 1720,
            "size": 42,
            "at": "l3:now",
            "hl": [
              {
                "text": "lúc này",
                "at": "l3:now"
              }
            ]
          },
          {
            "id": "h-or",
            "t": "text",
            "text": "→ bỏ bê học, hoặc bỏ ngang",
            "x": 4836,
            "y": 1790,
            "size": 40,
            "at": "l4:quit",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One student hid his exams, then asked to skip three shifts two days before. Short-staffed, the manager refused.",
          "sub": "Có bạn giấu lịch thi, rồi xin nghỉ cả ba ca chỉ trước hai ngày. Quán thiếu người, quản lý không đồng ý."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "He worked and revised, exhausted. His results dropped sharply.",
          "sub": "Bạn ấy vừa làm vừa ôn trong mệt mỏi, kết quả kỳ đó thấp hẳn.",
          "keys": [
            "thấp hẳn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And if the minimum shifts exceed your free hours, it's not your job for now, however good the pay.",
          "sub": "Nếu số ca tối thiểu nhiều hơn giờ trống của bạn, đó chưa phải việc của bạn lúc này, dù lương hấp dẫn.",
          "keys": [
            "chưa phải việc của bạn lúc này"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Take it and juggle, and you usually neglect your studies, or quit halfway.",
          "sub": "Nhận rồi cố xoay xở, thường dẫn đến bỏ bê việc học hoặc bỏ việc giữa chừng."
        }
      ],
      "ref": "p20,p19"
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
            "at": "l5",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Những tuần đầu · Tự kiểm",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:weeks"
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
                  "pose": "think"
                }
              ],
              "props": [
                "bed",
                "books"
              ]
            },
            "at": "l1:trial",
            "caption": "Cuối mỗi tuần · phòng trọ",
            "icon": "books"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1260,
            "w": 46,
            "h": 46,
            "at": "l2:sleep",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1242,
            "size": 58,
            "at": "l2:sleep+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Ngủ đủ",
            "x": 6032,
            "y": 1250,
            "size": 44,
            "at": "l2:sleep+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1332,
            "w": 46,
            "h": 46,
            "at": "l2:classes",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1314,
            "size": 58,
            "at": "l2:classes+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Không bỏ buổi học",
            "x": 6032,
            "y": 1322,
            "size": 44,
            "at": "l2:classes+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1404,
            "w": 46,
            "h": 46,
            "at": "l3:Homework",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1386,
            "size": 58,
            "at": "l3:Homework+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Bài nộp đúng hạn",
            "x": 6032,
            "y": 1394,
            "size": 44,
            "at": "l3:Homework+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1476,
            "w": 46,
            "h": 46,
            "at": "l3:evening",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1458,
            "size": 58,
            "at": "l3:evening+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Còn một buổi nghỉ",
            "x": 6032,
            "y": 1466,
            "size": 44,
            "at": "l3:evening+200"
          },
          {
            "id": "i-2w",
            "t": "text",
            "text": "Thiếu ô 2 tuần → giảm ca",
            "x": 5964,
            "y": 1560,
            "size": 46,
            "at": "l4:two",
            "color": "coral",
            "hl": [
              {
                "text": "giảm ca",
                "at": "l4:Cut"
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
          "say": "Stop seven: the first weeks. Treat them as your own trial, and check every weekend.",
          "sub": "Chặng bảy: những tuần đầu. Coi đó là thời gian thử của chính bạn, cuối mỗi tuần tự kiểm.",
          "keys": [
            "thời gian thử của chính bạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Enough sleep? No missed classes?",
          "sub": "Ngủ có đủ không? Có bỏ buổi học nào không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Homework on time? Still one evening off?",
          "sub": "Bài tập nộp đúng hạn? Vẫn còn một buổi nghỉ?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A box missing two weeks running? Cut shifts, or change jobs.",
          "sub": "Thiếu ô nào hai tuần liền thì giảm ca hoặc đổi việc khác.",
          "keys": [
            "giảm ca hoặc đổi việc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Started with fewer shifts than I thought I could do. Good call.",
          "sub": "Mình bắt đầu ít ca hơn mức nghĩ mình làm được. Quyết định đúng.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Adding shifts is easy. Dropping shifts you promised is much harder.",
          "sub": "Xin thêm ca thì dễ, xin bớt ca sau khi đã hứa thì khó hơn nhiều.",
          "keys": [
            "xin bớt ca sau khi đã hứa"
          ]
        }
      ],
      "ref": "p22,p23,p25"
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
            "at": "l3",
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
            "text": "⑧ Sang kỳ hai · Tối về",
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
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "face": "happy"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "face": "happy"
                }
              ],
              "props": [
                "night-with-stars",
                "bus"
              ]
            },
            "at": "l1:term",
            "caption": "Kỳ hai · tối, đường về",
            "icon": "night-with-stars"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Lịch mới đặt cạnh lịch ca cũ",
            "x": 7932,
            "y": 1260,
            "size": 44,
            "at": "l1:next"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Báo quản lý ngay khi có lịch",
            "x": 7932,
            "y": 1340,
            "size": 44,
            "at": "l2:manager",
            "color": "accent",
            "hl": [
              {
                "text": "ngay khi có lịch",
                "at": "l2:soon"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Liệu lịch rồi mới gắp ca",
            "x": 7932,
            "y": 1490,
            "size": 52,
            "at": "l5:timetable",
            "color": "accent",
            "hl": [
              {
                "text": "Liệu lịch",
                "at": "l5:timetable"
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
          "say": "Last stop: term two. Dũng puts the new timetable next to his old shifts. Still fit?",
          "sub": "Chặng cuối: kỳ hai. Dũng đặt thời khoá biểu mới cạnh lịch ca cũ. Còn khớp không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "He tells his manager as soon as he has it, not in week one of classes.",
          "sub": "Dũng báo quản lý ngay khi có lịch mới, không đợi đến tuần học đầu tiên.",
          "keys": [
            "ngay khi có lịch mới"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Night again. Real finishing time, and Lan from the same shift to walk home with.",
          "sub": "Lại một tối. Tan đúng giờ thật, và có Lan cùng ca về chung."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "This time I asked the real finishing time. Let's go!",
          "sub": "Lần này mình hỏi giờ tan thật rồi. Về thôi!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Check the rice, then pick the side dish. Check the timetable, then pick the shifts.",
          "sub": "“Liệu cơm gắp mắm.” Liệu lịch rồi mới gắp ca.",
          "keys": [
            "Liệu lịch rồi mới gắp ca"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "p24,outro"
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
            "at": "l1:Self-study",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:Timetables",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:paper",
            "fit": "A",
            "zoom": 0.8
          },
          {
            "at": "l4:exam",
            "fit": "H",
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
            "x": 6724,
            "y": 600,
            "at": "l1:Self-study"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 700,
            "y": 1690,
            "at": "l2:Timetables"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 720,
            "y": 420,
            "at": "l3:paper"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 4696,
            "y": 1490,
            "at": "l4:exam"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Four sayings to screenshot. One: Self-study goes in first, shifts after.",
          "sub": "Bốn câu để chụp màn hình. Một: giờ tự học ghi vào trước, ca làm điền vào sau.",
          "keys": [
            "giờ tự học ghi vào trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two: Timetables change each term; your job must change too.",
          "sub": "Hai: lịch học đổi theo kỳ, việc chọn phải đổi theo được."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three: finishing time on paper isn't finishing time in real life.",
          "sub": "Ba: giờ tan trên giấy khác giờ tan ngoài đời.",
          "keys": [
            "giờ tan trên giấy"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Four: share exam dates early, and never beg at the last minute.",
          "sub": "Bốn: báo lịch thi từ sớm, khỏi xin nghỉ sát giờ.",
          "keys": [
            "báo lịch thi từ sớm"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p5,p12,p16,p21"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "ref": "questions[17]",
      "data": {
        "q": "What question at hiring helps you avoid losing a fixed shift job next semester?",
        "options": [
          "Can I skip the interview and start immediately without telling you my schedule",
          "If my timetable changes next semester, can I move my shifts to other days",
          "Can I take a free drink after every shift, since I work long afternoons"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "spiral-calendar",
        "why": "Câu trả lời cho bạn biết công việc có linh hoạt theo lịch học không."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What question at hiring helps you avoid losing a fixed shift job next semester?",
          "sub": "Câu hỏi nào lúc nhận việc giúp bạn khỏi mất việc ca cố định khi sang kỳ?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "If my timetable changes next semester, can I move my shifts to other days?",
          "sub": "Nếu kỳ sau lịch học đổi, em có chuyển ca sang ngày khác được không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "The answer tells you if the job can bend with your timetable.",
          "sub": "Câu trả lời cho bạn biết việc có linh hoạt theo lịch học không."
        }
      ]
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi để chọn việc khớp lịch học",
        "sub": "Nghe câu hỏi tiếng Anh, chọn một trong ba đáp án"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Do it now: colour your fixed boxes and study blocks, then count the gaps left.",
          "sub": "Làm ngay: tô ô cố định, khung tự học, rồi đếm chỗ còn trống.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then, forty questions are waiting below.",
          "sub": "Rồi bốn mươi câu hỏi đang chờ bạn bên dưới.",
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
