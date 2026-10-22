// bar-admission-documents--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-admission-documents--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "bar-academy-admission",
    "slug": "bar-admission-documents",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Hồ sơ dự tuyển gồm những gì và nộp thế nào?",
    "series": "Vào lớp đào tạo nghề luật sư — hồ sơ, xét tuyển và chọn hệ học tại Học viện Tư pháp"
  },
  "format": "W",
  "mode": "text",
  "narrator": "det",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
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
            "text": "1 dòng",
            "x": 60,
            "y": 110,
            "size": 170,
            "at": "l1:One",
            "color": "accent",
            "hl": [
              {
                "text": "1 dòng",
                "at": "l1:line"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "chuyển khoản sai → lỡ đợt",
            "x": 70,
            "y": 340,
            "size": 54,
            "at": "l1:wrong"
          },
          {
            "id": "a-myth",
            "t": "text",
            "text": "Ta tưởng: hồ sơ đẹp là xong?",
            "x": 70,
            "y": 440,
            "size": 50,
            "at": "l2:pretty",
            "color": "muted"
          },
          {
            "id": "a-mythx",
            "t": "strike",
            "over": "a-myth",
            "at": "l3:matches"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: Thông báo tuyển sinh khoá 28 lần 1/2026, Học viện Tư pháp",
            "x": 60,
            "y": 720,
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
          "say": "One wrong line in a bank transfer, or one missing stamp, and you can miss the round.",
          "sub": "Một dòng chuyển khoản sai, một tờ thiếu xác nhận, là có thể lỡ cả đợt.",
          "keys": [
            "lỡ cả đợt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Because this class has no exam. The file is everything, and pretty is not the point.",
          "sub": "Vì lớp này không thi. Hồ sơ là tất cả, mà đẹp thì chưa phải điểm chính.",
          "keys": [
            "Hồ sơ là tất cả"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A correct file matches the notice, word by word.",
          "sub": "Hồ sơ đúng là hồ sơ khớp thông báo từng chữ.",
          "keys": [
            "khớp thông báo từng chữ"
          ]
        }
      ],
      "ref": "intro,p7"
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
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "tear-off-calendar",
                "steaming-bowl"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "dung",
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
            "caption": "Còn 10 ngày · tối, phòng trọ TP.HCM",
            "icon": "tear-off-calendar"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Giấy rách phải giữ lấy lề”",
            "x": 70,
            "y": 560,
            "size": 54,
            "at": "l4:paper",
            "color": "accent",
            "hl": [
              {
                "text": "giữ lấy lề",
                "at": "l4:edges"
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
          "say": "Meet Dũng.",
          "sub": "Đây là Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Law graduate, new job in Ho Chi Minh City, weekend class in mind. Speed: motorbike. Patience: zero.",
          "sub": "Cử nhân luật, mới vào TP.HCM đi làm, nhắm hệ cuối tuần. Tốc độ: xe máy. Kiên nhẫn: bằng không.",
          "keys": [
            "hệ cuối tuần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Ten days to the deadline? Easy. I'll do it all on the last night!",
          "sub": "Còn mười ngày nữa mới hết hạn à? Dễ. Đêm cuối làm luôn!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: even torn paper must keep its edges. Rules stay rules, even in a rush.",
          "sub": "Ông bà dặn: “Giấy rách phải giữ lấy lề.” Vội mấy cũng phải giữ nếp.",
          "keys": [
            "Giấy rách phải giữ lấy lề"
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
            "text": "Hồ sơ gồm gì, nộp thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:file",
            "hl": [
              {
                "text": "gồm gì",
                "at": "l1:what"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "02 bộ, bản giấy",
            "x": 2028,
            "y": 160,
            "size": 62,
            "at": "l2:Two",
            "color": "accent",
            "hl": [
              {
                "text": "02 bộ",
                "at": "l2:Two"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "• Sơ yếu lý lịch, bản gốc ×2",
            "x": 2028,
            "y": 260,
            "size": 42,
            "at": "l3:history"
          },
          {
            "id": "b-2b",
            "t": "text",
            "text": "• Phiếu đăng ký, bản gốc ×2",
            "x": 2028,
            "y": 320,
            "size": 42,
            "at": "l3:registration"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "• Bản chứng thực bằng ×2",
            "x": 2028,
            "y": 380,
            "size": 42,
            "at": "l4:certified"
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "• Ảnh 3x4 ×4",
            "x": 2028,
            "y": 440,
            "size": 42,
            "at": "l4:photos"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 560,
            "w": 240,
            "h": 100,
            "at": "l5:ten+300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2298,
            "y": 560,
            "w": 240,
            "h": 100,
            "at": "l5:ten+520",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2568,
            "y": 560,
            "w": 240,
            "h": 100,
            "at": "l5:ten+740",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2838,
            "y": 560,
            "w": 240,
            "h": 100,
            "at": "l5:ten+960",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3108,
            "y": 560,
            "w": 240,
            "h": 100,
            "at": "l5:ten+1180",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3378,
            "y": 560,
            "w": 240,
            "h": 100,
            "at": "l5:ten+1400",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "10",
            "x": 2108,
            "y": 575,
            "size": 56,
            "at": "l5:ten+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "9",
            "x": 2378,
            "y": 575,
            "size": 56,
            "at": "l5:ten+640"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "8",
            "x": 2648,
            "y": 575,
            "size": 56,
            "at": "l5:ten+860"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "7",
            "x": 2918,
            "y": 575,
            "size": 56,
            "at": "l5:ten+1080"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "…",
            "x": 3188,
            "y": 575,
            "size": 56,
            "at": "l5:ten+1300"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "0",
            "x": 3458,
            "y": 575,
            "size": 56,
            "at": "l5:ten+1520"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what goes in the file, and how do you submit it?",
          "sub": "Vậy hồ sơ gồm gì, nộp thế nào?",
          "keys": [
            "gồm gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two paper sets.",
          "sub": "Hai bộ, bản giấy.",
          "keys": [
            "Hai bộ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Each with an original personal history form and an original registration form, two copies each.",
          "sub": "Sơ yếu lý lịch bản gốc hai bản, phiếu đăng ký tuyển sinh bản gốc hai bản."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Two certified copies of the degree, and four three by four photos.",
          "sub": "Hai bản chứng thực bằng, bốn ảnh 3x4."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Now, ten days with Dũng, counting down to zero.",
          "sub": "Giờ theo Dũng mười ngày, đếm ngược về không.",
          "keys": [
            "đếm ngược"
          ]
        }
      ],
      "ref": "p1"
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
            "text": "① Còn 10 ngày · Mẫu đúng",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:ten"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                }
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
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
            "at": "l2:Thảo",
            "caption": "Còn 10 ngày · Thảo gọi video",
            "icon": "mobile-phone"
          },
          {
            "id": "c-old",
            "t": "text",
            "text": "Mẫu cũ trong ngăn kéo",
            "x": 3996,
            "y": 170,
            "size": 48,
            "at": "l3:old",
            "color": "muted"
          },
          {
            "id": "c-oldx",
            "t": "strike",
            "over": "c-old",
            "at": "l4:portal"
          },
          {
            "id": "c-new",
            "t": "text",
            "text": "Tải mẫu: hocvientuphap.edu.vn",
            "x": 3996,
            "y": 260,
            "size": 46,
            "at": "l4:portal",
            "color": "accent",
            "hl": [
              {
                "text": "Tải mẫu",
                "at": "l4:download"
              }
            ]
          },
          {
            "id": "c-ink",
            "t": "text",
            "text": "Hai tờ: bút mực xanh",
            "x": 3996,
            "y": 350,
            "size": 52,
            "at": "l5:blue",
            "hl": [
              {
                "text": "mực xanh",
                "at": "l5:blue ink"
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
          "say": "First stop: ten days left, a video call.",
          "sub": "Chặng một: còn mười ngày, một cuộc gọi video."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Thảo, Dũng's cousin, who already posted her own file. Organised enough to label her labels.",
          "sub": "Đây là Thảo, chị họ Dũng, đã nộp xong hồ sơ của mình. Ngăn nắp tới mức dán nhãn cho cả nhãn.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "I found an old form from last round in my drawer. Same thing, right?",
          "sub": "Em thấy mẫu đợt trước trong ngăn kéo. Như nhau mà, đúng không chị?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Number one: download the current forms from the academy portal. Then compare.",
          "sub": "Thứ nhất: tải mẫu hiện hành trên cổng thông tin Học viện. Rồi đối chiếu.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And fill both forms in blue ink. An old form is the fastest way to start again.",
          "sub": "Và điền cả hai tờ bằng bút mực xanh. Dùng mẫu cũ là cách nhanh nhất để làm lại từ đầu.",
          "keys": [
            "bút mực xanh"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p2,p3"
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
            "id": "c-e1",
            "t": "text",
            "text": "Phiếu: ghi email + điện thoại",
            "x": 3996,
            "y": 450,
            "size": 44,
            "at": "l1:email",
            "hl": [
              {
                "text": "email",
                "at": "l1:email"
              }
            ]
          },
          {
            "id": "c-e2",
            "t": "text",
            "text": "Bằng NN: + giấy công nhận",
            "x": 3996,
            "y": 520,
            "size": 44,
            "at": "l2:abroad"
          },
          {
            "id": "c-e3",
            "t": "text",
            "text": "Miễn, giảm: + giấy chứng minh",
            "x": 3996,
            "y": 590,
            "size": 44,
            "at": "l2:reduction",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The registration form needs your email and phone number, clearly written.",
          "sub": "Phiếu đăng ký phải ghi rõ email và số điện thoại.",
          "keys": [
            "email và số điện thoại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Degree from abroad? Add the recognition paper. Asking for a fee reduction? Add your proof.",
          "sub": "Bằng nước ngoài: thêm giấy công nhận. Xin miễn, giảm học phí: thêm giấy tờ chứng minh."
        }
      ],
      "ref": "p2,p8"
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
            "at": "l2",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Còn 9 ngày · Đi xác nhận",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:nine"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "classical-building",
                "hourglass-not-done"
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
                }
              ]
            },
            "at": "l1:morning",
            "caption": "Còn 9 ngày · sáng sớm",
            "icon": "classical-building"
          },
          {
            "id": "d-who",
            "t": "text",
            "text": "UBND cấp xã",
            "x": 5964,
            "y": 170,
            "size": 56,
            "at": "l3:committee",
            "hl": [
              {
                "text": "UBND cấp xã",
                "at": "l3:committee"
              }
            ]
          },
          {
            "id": "d-or",
            "t": "text",
            "text": "hoặc tổ chức hành nghề công chứng",
            "x": 5964,
            "y": 260,
            "size": 40,
            "at": "l3:notary"
          },
          {
            "id": "d-orig",
            "t": "text",
            "text": "Sơ yếu lý lịch: bản gốc",
            "x": 5964,
            "y": 350,
            "size": 48,
            "at": "l4:original",
            "hl": [
              {
                "text": "bản gốc",
                "at": "l4:original"
              }
            ]
          },
          {
            "id": "d-slow",
            "t": "text",
            "text": "Chậm nhất → làm sớm nhất",
            "x": 5964,
            "y": 450,
            "size": 54,
            "at": "l5:slowest",
            "color": "accent",
            "hl": [
              {
                "text": "làm sớm nhất",
                "at": "l5:first"
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
          "say": "Second stop: nine days left, early morning.",
          "sub": "Chặng hai: còn chín ngày, sáng sớm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Certification? Fine, I'll go now. Before work, before coffee.",
          "sub": "Xác nhận à? Ok, đi luôn. Trước giờ làm, trước cả cà phê.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The history form is certified by the commune people's committee, or a notary office.",
          "sub": "Sơ yếu lý lịch do Uỷ ban nhân dân cấp xã hoặc tổ chức hành nghề công chứng xác nhận.",
          "keys": [
            "Uỷ ban nhân dân cấp xã"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And it must be the original.",
          "sub": "Và phải là bản gốc."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "You carry it there and wait, so it is often the slowest step. Slowest goes first.",
          "sub": "Tự mang đi rồi ngồi chờ, nên thường chậm nhất. Chậm nhất thì làm trước.",
          "keys": [
            "Chậm nhất thì làm trước"
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
            "text": "③ Còn 9 ngày · Ảnh 3x4",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:afternoon"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "camera-with-flash",
                "framed-picture"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:photo",
            "caption": "Còn 9 ngày · tiệm chụp ảnh",
            "icon": "camera-with-flash"
          },
          {
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 180,
            "w": 46,
            "h": 46,
            "at": "l3:six",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 162,
            "size": 58,
            "at": "l3:six+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Chụp ≤ 6 tháng",
            "x": 8000,
            "y": 170,
            "size": 46,
            "at": "l3:six+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 280,
            "w": 46,
            "h": 46,
            "at": "l3:edited",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 262,
            "size": 58,
            "at": "l3:edited+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Không chỉnh sửa",
            "x": 8000,
            "y": 270,
            "size": 46,
            "at": "l3:edited+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 380,
            "w": 46,
            "h": 46,
            "at": "l4:back",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 362,
            "size": 58,
            "at": "l4:back+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Sau ảnh: họ tên, ngày sinh",
            "x": 8000,
            "y": 370,
            "size": 46,
            "at": "l4:back+200"
          },
          {
            "id": "e-no",
            "t": "text",
            "text": "Ảnh năm ngoái, da mịn ✗",
            "x": 7932,
            "y": 520,
            "size": 44,
            "at": "l5:smooth",
            "color": "coral",
            "hl": [
              {
                "text": "✗",
                "at": "l5:neither"
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
          "say": "Third stop: same afternoon, a photo shop.",
          "sub": "Chặng ba: chiều cùng ngày, tiệm chụp ảnh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Can you smooth my skin a bit? It's for an important file.",
          "sub": "Anh làm mịn da giúp em chút nhé? Hồ sơ quan trọng mà.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Photos taken within six months of the notice, and not edited.",
          "sub": "Ảnh chụp không quá sáu tháng tính đến lúc thông báo, không chỉnh sửa.",
          "keys": [
            "không chỉnh sửa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Name and birth date written on the back.",
          "sub": "Mặt sau ghi họ tên, ngày tháng năm sinh."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A lovely photo from last year? A smooth filter? Neither fits.",
          "sub": "Ảnh đẹp từ năm ngoái? Ảnh làm mịn da? Đều không đúng yêu cầu.",
          "keys": [
            "không đúng yêu cầu"
          ]
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s09",
      "module": "BRK-04",
      "data": {
        "title": "Phiếu đăng ký của Thảo",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Bút bi đen, bỏ trống email, ảnh cũ",
        "right": "Mực xanh, email, điện thoại, ảnh mới",
        "wrongIllus": "pen",
        "rightIllus": "fountain-pen"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thảo's first try: black pen, no email, old photo.",
          "sub": "Lần đầu của Thảo: bút bi đen, trống email, ảnh cũ.",
          "keys": [
            "bút bi đen"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Redo: blue ink, email, phone, new photo.",
          "sub": "Làm lại: mực xanh, email, điện thoại, ảnh mới.",
          "keys": [
            "mực xanh"
          ]
        }
      ],
      "ref": "p6"
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
            "id": "e-key",
            "t": "text",
            "text": "Đúng = khớp từng chữ",
            "x": 7932,
            "y": 620,
            "size": 58,
            "at": "l2:matches",
            "color": "accent",
            "hl": [
              {
                "text": "khớp từng chữ",
                "at": "l2:word by word"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "My first form looked neat. It just didn't match the notice.",
          "sub": "Tờ đầu của chị trông gọn lắm. Chỉ là không khớp thông báo.",
          "face": "neutral"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A correct file matches the notice word by word. With an email, the academy can reach you.",
          "sub": "Hồ sơ đúng là khớp thông báo từng chữ. Có email, Học viện mới đủ kênh báo tin.",
          "keys": [
            "khớp thông báo từng chữ"
          ]
        }
      ],
      "ref": "p6,p7"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "shop",
        "label": "Còn 8 ngày · tiệm photo",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Photo bằng là đủ",
          "why": "Thông báo ghi “bản chứng thực”: bản sao được chứng thực từ bản chính.",
          "rule": "Bản chứng thực: yêu cầu, không phải gợi ý"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Two photocopies of my degree, please. Done, cheap and fast!",
          "sub": "Photo cho em hai bản bằng. Xong, rẻ mà nhanh!",
          "pose": "give",
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
          "say": "The notice says certified copies, made from the original by an authority. A plain photocopy usually isn't.",
          "sub": "Thông báo ghi bản chứng thực: bản sao được chứng thực từ bản chính. Bản photo thường không có giá trị đó.",
          "keys": [
            "bản chứng thực"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Làm lại nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Okay. I'll get two certified copies from the original.",
          "sub": "Được rồi. Em đi chứng thực hai bản từ bản chính.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb"
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
      "id": "s12",
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
            "text": "④ Còn 8 ngày · Bản chứng thực",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:hand"
          },
          {
            "id": "f-ic",
            "t": "illus",
            "name": "seal",
            "x": 1450,
            "y": 1250,
            "size": 170,
            "at": "l1:certified"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Bằng cử nhân luật trở lên ×2",
            "x": 60,
            "y": 1260,
            "size": 48,
            "at": "l2:two",
            "hl": [
              {
                "text": "×2",
                "at": "l2:two"
              }
            ]
          },
          {
            "id": "f-ph",
            "t": "text",
            "text": "Bản photo thường",
            "x": 60,
            "y": 1350,
            "size": 48,
            "at": "l2:photocopies",
            "color": "muted"
          },
          {
            "id": "f-phx",
            "t": "strike",
            "over": "f-ph",
            "at": "l2:not"
          },
          {
            "id": "f-fr",
            "t": "text",
            "text": "Bằng NN + giấy công nhận",
            "x": 60,
            "y": 1450,
            "size": 46,
            "at": "l3:foreign"
          },
          {
            "id": "f-fr2",
            "t": "text",
            "text": "→ chứng thực cùng lúc",
            "x": 100,
            "y": 1520,
            "size": 44,
            "at": "l3:together",
            "color": "accent",
            "hl": [
              {
                "text": "cùng lúc",
                "at": "l3:together"
              }
            ]
          },
          {
            "id": "f-key",
            "t": "text",
            "text": "“Bản chứng thực” là yêu cầu",
            "x": 60,
            "y": 1650,
            "size": 54,
            "at": "l4:requirement",
            "color": "accent",
            "hl": [
              {
                "text": "là yêu cầu",
                "at": "l4:requirement"
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
          "say": "Fourth stop: eight days left, certified copies in hand.",
          "sub": "Chặng bốn: còn tám ngày, cầm bản chứng thực trong tay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two certified copies of the law degree, or a higher one. Not photocopies.",
          "sub": "Hai bản chứng thực bằng cử nhân luật trở lên. Không phải bản photo."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Foreign degree? Certify the recognition paper together with it, enough for both sets.",
          "sub": "Bằng nước ngoài? Chứng thực giấy công nhận cùng lúc, đủ cho hai bộ.",
          "keys": [
            "cùng lúc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Certified copy is a requirement, not a suggestion.",
          "sub": "“Bản chứng thực” là một yêu cầu, không phải một gợi ý.",
          "keys": [
            "một yêu cầu"
          ]
        }
      ],
      "ref": "p8,p9,p10"
    },
    {
      "id": "s13",
      "module": "BRK-07",
      "data": {
        "question": "Chuyển khoản sai một dòng thì sao?",
        "illus": "money-with-wings"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "But wait. The fee.",
          "sub": "Nhưng khoan. Còn lệ phí."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "What if one line of the transfer is wrong?",
          "sub": "Chuyển khoản sai một dòng thì sao?",
          "keys": [
            "sai một dòng"
          ]
        }
      ],
      "ref": "p15,p16"
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
            "at": "l5",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Còn 8 ngày tối · Lệ phí",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:evening"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
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
                "mobile-phone",
                "bank"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
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
            "at": "l1:evening",
            "caption": "Còn 8 ngày · tối, phòng trọ",
            "icon": "bank"
          },
          {
            "id": "g-fee",
            "t": "text",
            "text": "200.000 đ / thí sinh",
            "x": 2028,
            "y": 1260,
            "size": 56,
            "at": "l2:two hundred",
            "color": "accent",
            "hl": [
              {
                "text": "200.000 đ",
                "at": "l2:two hundred"
              }
            ]
          },
          {
            "id": "g-hn",
            "t": "text",
            "text": "HN: BIDV Đông Đô",
            "x": 2028,
            "y": 1350,
            "size": 42,
            "at": "l2:BIDV"
          },
          {
            "id": "g-hcm",
            "t": "text",
            "text": "HCM: Agribank Thủ Đức",
            "x": 2028,
            "y": 1410,
            "size": 42,
            "at": "l2:Agribank"
          },
          {
            "id": "g-stk",
            "t": "text",
            "text": "Số TK: chép từ thông báo",
            "x": 2028,
            "y": 1490,
            "size": 44,
            "at": "l3:copy",
            "color": "coral",
            "hl": [
              {
                "text": "chép từ thông báo",
                "at": "l3:notice"
              }
            ]
          },
          {
            "id": "g-syn",
            "t": "text",
            "text": "Họ tên + mã lớp",
            "x": 2028,
            "y": 1590,
            "size": 56,
            "at": "l4:name",
            "hl": [
              {
                "text": "mã lớp",
                "at": "l4:code"
              }
            ]
          },
          {
            "id": "g-c00",
            "t": "text",
            "text": "",
            "x": 2028,
            "y": 1680,
            "size": 30,
            "at": "l5:campus+0",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "g-c01",
            "t": "text",
            "text": "Ngày",
            "x": 2228,
            "y": 1680,
            "size": 30,
            "at": "l5:campus+0",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "g-c02",
            "t": "text",
            "text": "Tối",
            "x": 2428,
            "y": 1680,
            "size": 30,
            "at": "l5:campus+0",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "g-c03",
            "t": "text",
            "text": "T7, CN",
            "x": 2628,
            "y": 1680,
            "size": 30,
            "at": "l5:campus+0",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "g-c10",
            "t": "text",
            "text": "HN",
            "x": 2028,
            "y": 1735,
            "size": 30,
            "at": "l5:campus+300",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "g-c11",
            "t": "text",
            "text": "LS281HNngay",
            "x": 2228,
            "y": 1735,
            "size": 30,
            "at": "l5:campus+300",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "g-c12",
            "t": "text",
            "text": "LS281HNtoi",
            "x": 2428,
            "y": 1735,
            "size": 30,
            "at": "l5:campus+300",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "g-c13",
            "t": "text",
            "text": "LS281HNcn",
            "x": 2628,
            "y": 1735,
            "size": 30,
            "at": "l5:campus+300",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "g-c20",
            "t": "text",
            "text": "HCM",
            "x": 2028,
            "y": 1790,
            "size": 30,
            "at": "l5:campus+600",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "g-c21",
            "t": "text",
            "text": "LS281HCMngay",
            "x": 2228,
            "y": 1790,
            "size": 30,
            "at": "l5:campus+600",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "g-c22",
            "t": "text",
            "text": "LS281HCMtoi",
            "x": 2428,
            "y": 1790,
            "size": 30,
            "at": "l5:campus+600",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "g-c23",
            "t": "text",
            "text": "LS281HCMcn",
            "x": 2628,
            "y": 1790,
            "size": 30,
            "at": "l5:campus+600",
            "font": "base",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: eight days left, evening. The bank app opens.",
          "sub": "Chặng năm: còn tám ngày, buổi tối. Mở ứng dụng ngân hàng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two hundred thousand dong per applicant. Hanoi applicants pay a BIDV account, Ho Chi Minh City ones an Agribank account.",
          "sub": "Hai trăm nghìn đồng mỗi thí sinh. Hà Nội chuyển BIDV Đông Đô, TP.HCM chuyển Agribank Thủ Đức.",
          "keys": [
            "Hai trăm nghìn đồng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Copy the account number from the notice, never from someone's message.",
          "sub": "Số tài khoản chép từ thông báo, đừng chép từ tin nhắn ai gửi.",
          "keys": [
            "chép từ thông báo"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Transfer note: my full name, plus the class code. Which code?",
          "sub": "Nội dung: họ tên, cộng mã lớp. Mã nào nhỉ?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The code marks both campus and format. Get it wrong, and the academy is not responsible.",
          "sub": "Mã gắn cả cơ sở lẫn hệ học. Ghi sai, Học viện không chịu trách nhiệm giải quyết.",
          "keys": [
            "không chịu trách nhiệm"
          ]
        }
      ],
      "ref": "p15,p16"
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
            "at": "l1",
            "fit": [
              "g-c23",
              "g-c13",
              "g-c03"
            ],
            "zoom": 1.4,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "G",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "g-ring",
            "t": "ring",
            "around": [
              "g-c23"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l1:weekend"
          },
          {
            "id": "g-ex",
            "t": "text",
            "text": "“Ho ten + LS281HCMcn”",
            "x": 2848,
            "y": 1780,
            "size": 40,
            "at": "l2:name",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Weekend class in Ho Chi Minh City: the code ending in H C M, C N.",
          "sub": "Hệ cuối tuần ở TP.HCM: mã LS281HCMcn.",
          "keys": [
            "LS281HCMcn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "My name, exactly as on my form, then that code. Two hundred thousand, sent. Screenshot saved!",
          "sub": "Họ tên đúng như trên phiếu, rồi mã đó. Hai trăm nghìn, xong. Chụp màn hình lưu lại!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The class code in your transfer note is your choice of format, in writing.",
          "sub": "Mã lớp trong dòng chuyển khoản chính là lựa chọn hệ học của bạn.",
          "keys": [
            "lựa chọn hệ học"
          ]
        }
      ],
      "ref": "p17,p18"
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
            "text": "⑥ Còn 7 ngày · Nộp ở đâu?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:seven"
          },
          {
            "id": "h-how",
            "t": "text",
            "text": "Trực tiếp T2–T6, giờ hành chính",
            "x": 3996,
            "y": 1260,
            "size": 44,
            "at": "l2:person"
          },
          {
            "id": "h-or",
            "t": "text",
            "text": "hoặc: bưu điện",
            "x": 3996,
            "y": 1325,
            "size": 44,
            "at": "l2:post",
            "hl": [
              {
                "text": "bưu điện",
                "at": "l2:post"
              }
            ]
          },
          {
            "id": "h-hn",
            "t": "text",
            "text": "HN: Phòng A104, Trần Vỹ",
            "x": 3996,
            "y": 1410,
            "size": 42,
            "at": "l3:Hanoi"
          },
          {
            "id": "h-hcm",
            "t": "text",
            "text": "HCM: Tầng 3, 821 Kha Vạn Cân",
            "x": 3996,
            "y": 1470,
            "size": 42,
            "at": "l3:floor"
          },
          {
            "id": "h-dl",
            "t": "text",
            "text": "Hạn đợt 1: 20/3/2026",
            "x": 4836,
            "y": 1260,
            "size": 54,
            "at": "l4:twentieth",
            "color": "coral",
            "hl": [
              {
                "text": "20/3/2026",
                "at": "l4:twentieth"
              }
            ]
          },
          {
            "id": "h-new",
            "t": "text",
            "text": "Đợt sau: tìm thông báo mới",
            "x": 4836,
            "y": 1350,
            "size": 44,
            "at": "l5:later",
            "color": "accent",
            "hl": [
              {
                "text": "thông báo mới",
                "at": "l5:latest"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: Thông báo tuyển sinh khoá 28",
            "x": 3996,
            "y": 1560,
            "size": 26,
            "at": "l4",
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
          "say": "Sixth stop: seven days left. Where does it go?",
          "sub": "Chặng sáu: còn bảy ngày. Nộp ở đâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In person on weekdays, office hours, except holidays. Or by post.",
          "sub": "Nộp trực tiếp trong giờ hành chính, thứ Hai đến thứ Sáu, trừ lễ Tết. Hoặc gửi bưu điện."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hanoi: room A one oh four at the academy. Ho Chi Minh City: third floor, Kha Vạn Cân street.",
          "sub": "Hà Nội: Phòng A104, Học viện Tư pháp. TP.HCM: Tầng 3, số 821 Kha Vạn Cân."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Round one of intake twenty-eight closed on the twentieth of March, twenty twenty-six.",
          "sub": "Đợt một khoá 28 hạn ngày 20/3/2026.",
          "keys": [
            "20/3/2026"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A later round has its own notice, so look up the latest one, not an old date.",
          "sub": "Đợt sau có thông báo riêng: tìm thông báo mới nhất, đừng dùng hạn cũ.",
          "keys": [
            "thông báo mới nhất"
          ]
        }
      ],
      "ref": "p11,p12"
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
          }
        ],
        "items": [
          {
            "id": "h-ck",
            "t": "text",
            "text": "Tự kiểm lần cuối:",
            "x": 4836,
            "y": 1420,
            "size": 48,
            "at": "l1:check",
            "hl": [
              {
                "text": "lần cuối",
                "at": "l1:final"
              }
            ]
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 4836,
            "y": 1510,
            "w": 46,
            "h": 46,
            "at": "l2:sets",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4840,
            "y": 1492,
            "size": 58,
            "at": "l2:sets+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Đủ 02 bộ",
            "x": 4904,
            "y": 1500,
            "size": 36,
            "at": "l2:sets+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 4836,
            "y": 1582,
            "w": 46,
            "h": 46,
            "at": "l2:certified",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4840,
            "y": 1564,
            "size": 58,
            "at": "l2:certified+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Lý lịch đã xác nhận",
            "x": 4904,
            "y": 1572,
            "size": 36,
            "at": "l2:certified+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 4836,
            "y": 1654,
            "w": 46,
            "h": 46,
            "at": "l3:blue",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4840,
            "y": 1636,
            "size": 58,
            "at": "l3:blue+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Mực xanh, ảnh mới",
            "x": 4904,
            "y": 1644,
            "size": 36,
            "at": "l3:blue+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 4836,
            "y": 1726,
            "w": 46,
            "h": 46,
            "at": "l3:degree",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4840,
            "y": 1708,
            "size": 58,
            "at": "l3:degree+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Bằng chứng thực",
            "x": 4904,
            "y": 1716,
            "size": 36,
            "at": "l3:degree+200"
          },
          {
            "id": "h-c4",
            "t": "box",
            "x": 4836,
            "y": 1798,
            "w": 46,
            "h": 46,
            "at": "l4:account",
            "stroke": 5
          },
          {
            "id": "h-k4",
            "t": "text",
            "text": "✓",
            "x": 4840,
            "y": 1780,
            "size": 58,
            "at": "l4:account+600",
            "color": "accent"
          },
          {
            "id": "h-l4",
            "t": "text",
            "text": "Đúng tài khoản, mã lớp",
            "x": 4904,
            "y": 1788,
            "size": 36,
            "at": "l4:account+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before sealing the envelope, one final check.",
          "sub": "Trước khi dán phong bì, tự kiểm lần cuối."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Two sets, complete. History form certified, original.",
          "sub": "Đủ hai bộ. Sơ yếu lý lịch đã xác nhận, bản gốc.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Blue ink, new photos, degree certified.",
          "sub": "Mực xanh, ảnh mới, bằng đã chứng thực."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Fee to the right account, right code, and still before the deadline.",
          "sub": "Lệ phí đúng tài khoản, đúng mã lớp, và vẫn còn trước hạn.",
          "keys": [
            "trước hạn"
          ]
        }
      ],
      "ref": "p19"
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
            "at": "l4",
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
            "text": "⑦ Còn 7 ngày · Bưu điện",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:post office"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "post-office",
                "receipt"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
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
            "at": "l1:post office",
            "caption": "Còn 7 ngày · bưu điện",
            "icon": "post-office"
          },
          {
            "id": "i-a",
            "t": "text",
            "text": "A: ngày cuối, không biên nhận",
            "x": 5964,
            "y": 1260,
            "size": 44,
            "at": "l2:last",
            "color": "muted"
          },
          {
            "id": "i-ax",
            "t": "strike",
            "over": "i-a",
            "at": "l3:trace"
          },
          {
            "id": "i-b",
            "t": "text",
            "text": "B: sớm 1 tuần, giữ biên nhận",
            "x": 5964,
            "y": 1350,
            "size": 46,
            "at": "l3:week",
            "color": "accent",
            "hl": [
              {
                "text": "giữ biên nhận",
                "at": "l3:receipt"
              }
            ]
          },
          {
            "id": "i-p",
            "t": "text",
            "text": "Chụp lại toàn bộ hồ sơ",
            "x": 6004,
            "y": 1430,
            "size": 42,
            "at": "l4:photographed"
          },
          {
            "id": "i-key",
            "t": "text",
            "text": "Tính cả ngày đi đường",
            "x": 5964,
            "y": 1560,
            "size": 52,
            "at": "l5:transit",
            "color": "accent",
            "hl": [
              {
                "text": "ngày đi đường",
                "at": "l5:transit"
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
          "say": "Seventh stop: still seven days left, the post office. Yes, Dũng the last-night man.",
          "sub": "Chặng bảy: vẫn còn bảy ngày, ra bưu điện. Vâng, chính Dũng “đêm cuối làm luôn”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Option A: post on the last days, no receipt, and simply hope.",
          "sub": "Cách A: gửi những ngày cuối, không giữ biên nhận, rồi cầu may."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Option B: a week early, a receipt with a tracking code. Now you can trace it.",
          "sub": "Cách B: gửi sớm một tuần, giữ biên nhận có mã tra cứu. Có gì cũng tra được.",
          "keys": [
            "mã tra cứu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "And I photographed every page before sealing it. Ok, sent!",
          "sub": "Em chụp lại từng trang trước khi dán phong bì rồi. Ok, gửi!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "By post, count the days in transit, and always keep the receipt.",
          "sub": "Gửi bưu điện thì tính cả ngày đi đường, và luôn giữ biên nhận.",
          "keys": [
            "luôn giữ biên nhận"
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
      "ref": "p13,p14"
    },
    {
      "id": "s19",
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
            "text": "Còn 0 ngày · tối, phòng trọ",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Deadline"
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
                "receipt",
                "tear-off-calendar"
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
                }
              ]
            },
            "at": "l1:Deadline",
            "caption": "Ngày hạn · tối, phòng trọ",
            "icon": "receipt"
          },
          {
            "id": "j-tr",
            "t": "text",
            "text": "Mã tra cứu: đã tới nơi ✓",
            "x": 7932,
            "y": 1260,
            "size": 46,
            "at": "l2:tracking",
            "hl": [
              {
                "text": "đã tới nơi",
                "at": "l2:arrived"
              }
            ]
          },
          {
            "id": "j-hn",
            "t": "text",
            "text": "Hỏi HN: 024.62873428, máy lẻ 1001",
            "x": 7932,
            "y": 1370,
            "size": 34,
            "at": "l3:questions"
          },
          {
            "id": "j-hcm",
            "t": "text",
            "text": "Hỏi HCM: 028.22539101",
            "x": 7932,
            "y": 1425,
            "size": 34,
            "at": "l3:questions+300"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Giấy rách… giữ biên nhận”",
            "x": 7932,
            "y": 1560,
            "size": 54,
            "at": "l4:receipt",
            "color": "accent",
            "hl": [
              {
                "text": "giữ biên nhận",
                "at": "l4:receipt"
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
          "say": "Deadline day. Same room, same evening, same noodles.",
          "sub": "Ngày hạn. Vẫn phòng ấy, vẫn tối ấy, vẫn gói mì ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Everyone's panicking in the group chat. Me? Tracking code says arrived. Time for noodles.",
          "sub": "Nhóm chat cuống cả lên. Em á? Mã tra cứu báo đã tới nơi. Ăn mì thôi.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Still have questions? Call the training office in Hanoi or the team in Ho Chi Minh City. Asking beats fixing.",
          "sub": "Còn thắc mắc? Gọi Phòng Đào tạo ở Hà Nội hoặc Tổ Đào tạo ở TP.HCM. Hỏi trước nhanh hơn sửa sau.",
          "keys": [
            "Hỏi trước nhanh hơn sửa sau"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Even torn paper keeps its edges. And a smart applicant keeps the receipt.",
          "sub": "“Giấy rách phải giữ lấy lề.” Còn người nộp khôn thì giữ lấy... biên nhận.",
          "keys": [
            "biên nhận"
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
      "ref": "p20"
    },
    {
      "id": "s20",
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
            "at": "l1:certified",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:copies",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:code",
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
            "x": 6684,
            "y": 470,
            "at": "l1:certified"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 820,
            "y": 1660,
            "at": "l2:copies"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2468,
            "y": 1590,
            "at": "l3:code"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Kiến thức tham khảo; mỗi đợt có thông báo riêng, đối chiếu thông báo của đợt bạn nộp.",
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
          "say": "So: two sets, current forms, history form certified first.",
          "sub": "Tóm lại: hai bộ, mẫu hiện hành, sơ yếu lý lịch đi xác nhận trước.",
          "keys": [
            "đi xác nhận trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fresh unedited photos, and certified copies, not photocopies.",
          "sub": "Ảnh mới không chỉnh, bằng chứng thực chứ không photo.",
          "keys": [
            "bằng chứng thực"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fee with the exact class code, posted early, receipt kept.",
          "sub": "Lệ phí đúng mã lớp, gửi sớm, giữ biên nhận.",
          "keys": [
            "đúng mã lớp"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s21",
      "module": "QUIZ-01",
      "data": {
        "q": "A friend says a plain photocopy of the degree is enough, what is the mistake?",
        "options": [
          "The notice asks for certified copies, which a plain photocopy usually is not",
          "Nothing, a plain photocopy has exactly the same value as a certified one",
          "The notice asks for the original, which the academy keeps forever"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "page-facing-up",
        "why": "Thông báo yêu cầu bản chứng thực, bản photo thường không có giá trị đó."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A friend says a plain photocopy of the degree is enough, what is the mistake?",
          "sub": "Bạn nói photo bằng là đủ, sai ở đâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The notice asks for certified copies, which a plain photocopy usually is not.",
          "sub": "Thông báo đòi bản chứng thực, mà bản photo thường không phải."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Certified copy is a requirement, not a suggestion.",
          "sub": "Bản chứng thực là yêu cầu, không phải gợi ý."
        }
      ],
      "ref": "questions[17]"
    },
    {
      "id": "s22",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Tuần này: tải mẫu, đi xác nhận"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "This week, download the forms and get your history form certified.",
          "sub": "Tuần này: tải mẫu, mang sơ yếu lý lịch đi xác nhận."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then try the forty questions below.",
          "sub": "Rồi thử bốn mươi câu hỏi bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô theo MƯỜI NGÀY ĐẾM NGƯỢC tới hạn nộp của Dũng ở TP.HCM, hệ cuối tuần (còn 10 ngày: mẫu đúng, Thảo gọi video → còn 9: xác nhận, ảnh + BRK Trước–Sau phiếu của Thảo → còn 8: “Khoan đã!” photo bằng, bản chứng thực, lệ phí + mã lớp → còn 7: nơi nộp, hạn, tự kiểm, gửi bưu điện sớm → ngày hạn). Nhân vật theo w145/_series/bar-academy-admission.md: Dũng (đóng Minh p13, p17), Thảo (Trước–Sau p6). Số liệu chỉ từ bài: 02 bộ, 4 ảnh, 6 tháng, 200.000 đ, mã lớp LS281…, Phòng A104, Tầng 3 số 821 Kha Vạn Cân, hạn 20/3/2026, số điện thoại. Cảnh ngắt nhịp: BRK-04 s09 (Trước/Sau p6), BRK-07 s13 (sai một dòng chuyển khoản p16), DLG s11 (photo bằng p9). Khép vòng: ‘Giấy rách phải giữ lấy lề’ → giữ lấy biên nhận; phòng trọ buổi tối còn 10 ngày → ngày hạn. Câu đố questions[17]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
