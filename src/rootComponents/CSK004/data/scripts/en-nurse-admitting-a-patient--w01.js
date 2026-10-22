// en-nurse-admitting-a-patient--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "en-nurse-admitting-a-patient--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "en-nurses-foreign-patients",
    "slug": "en-nurse-admitting-a-patient",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Tiếp nhận bệnh nhân nhập viện: hỏi thông tin bằng tiếng Anh thế nào?",
    "series": "Tiếng Anh cho điều dưỡng — hỏi, giải thích, trấn an bệnh nhân nước ngoài đúng và đủ"
  },
  "format": "W",
  "mode": "text",
  "narrator": "det",
  "presenter": {
    "side": "left"
  },
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
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
            "fit": [
              "a-band",
              "a-bt"
            ],
            "zoom": 1.6,
            "move": "cut"
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "a-band",
            "t": "box",
            "x": 60,
            "y": 120,
            "w": 760,
            "h": 120,
            "at": "l1:band",
            "fill": "#e8f1ff",
            "stroke": 5
          },
          {
            "id": "a-bt",
            "t": "text",
            "text": "HỌ TÊN · NGÀY SINH",
            "x": 110,
            "y": 150,
            "size": 52,
            "at": "l1:band+500",
            "font": "base"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Bạn là ai?",
            "x": 60,
            "y": 300,
            "size": 84,
            "at": "l2:who",
            "color": "accent",
            "hl": [
              {
                "text": "ai",
                "at": "l2:who"
              }
            ]
          },
          {
            "id": "a-no",
            "t": "text",
            "text": "Vòng tay không biết nói",
            "x": 60,
            "y": 430,
            "size": 52,
            "at": "l3:talk",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A plastic band. Light as a feather, cheap as a candy wrapper.",
          "sub": "Một chiếc vòng nhựa. Nhẹ như lông hồng, rẻ như giấy gói kẹo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet on a ward, it answers the biggest question: who are you?",
          "sub": "Vậy mà trong khoa, nó trả lời câu hỏi lớn nhất: bạn là ai?",
          "keys": [
            "bạn là ai"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But a band can't talk. And busy nurses sometimes forget to let patients talk.",
          "sub": "Nhưng vòng tay không biết nói. Mà điều dưỡng bận rộn đôi khi quên để bệnh nhân nói.",
          "keys": [
            "để bệnh nhân nói"
          ]
        }
      ],
      "beats": {
        "after": 300
      },
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
            "at": "l2",
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
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "face": "worried"
                }
              ],
              "props": [
                "bed",
                "airplane-arrival"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Ngày 1 · 8:30 · phòng 305",
            "icon": "hospital"
          },
          {
            "id": "a-form",
            "t": "text",
            "text": "Phiếu nhập viện: cả chục ô",
            "x": 60,
            "y": 530,
            "size": 46,
            "at": "l3:boxes",
            "color": "muted"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Đầu xuôi thì đuôi lọt”",
            "x": 60,
            "y": 620,
            "size": 54,
            "at": "l4:head",
            "color": "accent",
            "hl": [
              {
                "text": "Đầu xuôi",
                "at": "l4:head"
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
          "say": "Meet Thảo, a nurse on the medical ward, admission form in hand.",
          "sub": "Đây là Thảo, điều dưỡng khoa nội, tay cầm phiếu nhập viện."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Sam, from Australia, just moved up to the ward, tired after a long flight.",
          "sub": "Còn đây là Sam, người Úc, vừa được chuyển lên khoa, mệt nhừ sau chuyến bay dài.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Thảo has a dozen boxes to fill. Sam has one question: can I trust this nurse?",
          "sub": "Thảo có cả chục ô phải điền. Sam chỉ có một câu hỏi: tin cô này được không?",
          "keys": [
            "tin cô này được không"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "As we say: if the head goes through, the tail follows.",
          "sub": "Ông bà nói: “Đầu xuôi thì đuôi mới lọt.”",
          "keys": [
            "Đầu xuôi thì đuôi mới lọt"
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
            "text": "Nói gì, theo thứ tự nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:admit",
            "hl": [
              {
                "text": "thứ tự",
                "at": "l1:order"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: điền phiếu thật nhanh",
            "x": 2028,
            "y": 165,
            "size": 48,
            "at": "l2:race",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:but"
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "1. Giới thiệu mình",
            "x": 2028,
            "y": 260,
            "size": 50,
            "at": "l3:introduce"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "2. Bệnh nhân tự nói danh tính",
            "x": 2028,
            "y": 335,
            "size": 46,
            "at": "l3:identity"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "3. Hỏi mở: dị ứng, thuốc",
            "x": 2028,
            "y": 410,
            "size": 50,
            "at": "l4:allergies"
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "4. Vòng tay, chuông gọi",
            "x": 2028,
            "y": 485,
            "size": 50,
            "at": "l4:call bell"
          },
          {
            "id": "b-5",
            "t": "text",
            "text": "5. Tóm tắt lại",
            "x": 2028,
            "y": 560,
            "size": 50,
            "at": "l4:summarise",
            "color": "accent",
            "hl": [
              {
                "text": "Tóm tắt",
                "at": "l4:summarise"
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
          "say": "So how do you admit a patient in English, and in what order?",
          "sub": "Vậy tiếp nhận bệnh nhân bằng tiếng Anh nói gì, theo thứ tự nào?",
          "keys": [
            "theo thứ tự nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not a race to fill the form before the patient falls asleep.",
          "sub": "Không phải cuộc đua điền phiếu trước khi bệnh nhân ngủ gật."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But introduce yourself, then let the patient state their own identity.",
          "sub": "Mà là: giới thiệu mình, rồi để bệnh nhân tự nói danh tính.",
          "keys": [
            "tự nói danh tính"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Ask open questions about allergies and medicines, explain the band and call bell, and summarise.",
          "sub": "Hỏi mở về dị ứng và thuốc, giải thích vòng tay, chuông gọi, rồi tóm tắt lại."
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Buổi sáng tiếp nhận Sam",
        "points": [
          {
            "label": "8:30",
            "sub": "Mở đầu",
            "illus": "waving-hand"
          },
          {
            "label": "8:35",
            "sub": "Danh tính",
            "illus": "label"
          },
          {
            "label": "8:40",
            "sub": "Dị ứng",
            "illus": "red-circle"
          },
          {
            "label": "8:50",
            "sub": "Thuốc đang dùng",
            "illus": "pill"
          },
          {
            "label": "9:00",
            "sub": "Chuông, phòng",
            "illus": "bellhop-bell"
          },
          {
            "label": "9:10",
            "sub": "Tóm tắt",
            "illus": "clipboard"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One morning, six stops, one tired patient.",
          "sub": "Một buổi sáng, sáu chặng, một bệnh nhân mệt nhừ.",
          "keys": [
            "sáu chặng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Clipboard ready. Let's go.",
          "sub": "Cầm phiếu lên. Đi nào."
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
            "text": "① 8:30 · Mở đầu",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "wave",
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "right"
                }
              ],
              "props": [
                "bed",
                "hospital"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:bedside",
            "caption": "Ngày 1 · 8:30 · bên giường",
            "icon": "waving-hand"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Tên + vai trò",
            "x": 3996,
            "y": 165,
            "size": 54,
            "at": "l5:name",
            "hl": [
              {
                "text": "vai trò",
                "at": "l5:role"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Muốn được gọi thế nào?",
            "x": 3996,
            "y": 250,
            "size": 50,
            "at": "l3:call"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Báo trước việc sắp làm",
            "x": 3996,
            "y": 335,
            "size": 50,
            "at": "l3:going to",
            "color": "accent",
            "hl": [
              {
                "text": "Báo trước",
                "at": "l5:announce"
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
          "say": "Stop one, eight thirty, at the bedside. OET's first criterion: build the relationship.",
          "sub": "Chặng một, tám rưỡi, bên giường. Tiêu chí đầu của OET: xây dựng quan hệ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Good morning, my name's Thảo, and I'm the nurse looking after you today.",
          "sub": "Chào buổi sáng, tôi tên Thảo, hôm nay tôi là điều dưỡng chăm sóc chị.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "What would you like me to call you? I'm going to ask a few questions so we can look after you safely. Is now a good time?",
          "sub": "Chị muốn tôi gọi chị thế nào? Tôi sẽ hỏi vài câu để chăm sóc chị an toàn. Giờ có tiện không?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "Just Sam, please. Yes, go ahead.",
          "sub": "Cứ gọi Sam. Được, cô hỏi đi.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Name and role first, then announce the plan. Patients follow a road they can see.",
          "sub": "Tên và vai trò trước, rồi báo trước việc sắp làm. Thấy đường thì bệnh nhân dễ đi cùng.",
          "keys": [
            "báo trước việc sắp làm"
          ]
        }
      ],
      "ref": "p1,p2"
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
            "id": "c-cam",
            "t": "text",
            "text": "Cambridge: bài 1, giúp thoải mái",
            "x": 3996,
            "y": 450,
            "size": 38,
            "at": "l1:first unit"
          },
          {
            "id": "c-al",
            "t": "text",
            "text": "“I see.” · “Go on.”",
            "x": 3996,
            "y": 530,
            "size": 58,
            "at": "l2:I see",
            "color": "accent",
            "hl": [
              {
                "text": "“Go on.”",
                "at": "l2:Go on"
              }
            ]
          },
          {
            "id": "c-al2",
            "t": "text",
            "text": "= lắng nghe chủ động",
            "x": 4036,
            "y": 620,
            "size": 44,
            "at": "l2:active"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Cambridge English for Nursing Intermediate Plus · OET Speaking criteria",
            "x": 3996,
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
          "say": "Cambridge English for Nursing puts patients at ease in its very first unit, on taking a history.",
          "sub": "Cambridge English for Nursing đặt việc giúp bệnh nhân thoải mái ngay bài đầu, bài hỏi bệnh sử."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Active listening can be tiny: I see. Go on. Like nodding, but with sound.",
          "sub": "Lắng nghe chủ động có khi chỉ là: “I see.” “Go on.” Như gật đầu, nhưng có tiếng.",
          "keys": [
            "Lắng nghe chủ động"
          ]
        }
      ],
      "ref": "p3"
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
            "text": "② 8:35 · Danh tính",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-q",
            "t": "text",
            "text": "“Could you tell me your",
            "x": 5964,
            "y": 165,
            "size": 50,
            "at": "l2:full name"
          },
          {
            "id": "d-q2",
            "t": "text",
            "text": "full name and date of birth?”",
            "x": 6004,
            "y": 240,
            "size": 50,
            "at": "l2:date",
            "color": "accent",
            "hl": [
              {
                "text": "full name",
                "at": "l2:full name"
              }
            ]
          },
          {
            "id": "d-nhs",
            "t": "text",
            "text": "NHS: trước mỗi can thiệp",
            "x": 5964,
            "y": 340,
            "size": 46,
            "at": "l1:policy"
          },
          {
            "id": "d-bd",
            "t": "text",
            "text": "+ kiểm vòng trước thuốc, truyền dịch",
            "x": 6004,
            "y": 410,
            "size": 36,
            "at": "l3:band",
            "color": "muted"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: NHS Borders — Patient Identification Policy",
            "x": 5964,
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
          "say": "Stop two, identity. The NHS Borders policy says the patient states their full name and date of birth.",
          "sub": "Chặng hai, danh tính. Chính sách của NHS Borders: bệnh nhân tự nói họ tên đầy đủ và ngày sinh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The model question: could you tell me your full name and date of birth, please?",
          "sub": "Câu mẫu: “Could you tell me your full name and date of birth, please?”",
          "keys": [
            "Could you tell me"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Before every intervention. And check the band before medicines or a drip.",
          "sub": "Trước mỗi can thiệp. Và kiểm vòng tay trước khi cho thuốc hay truyền dịch."
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
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "neutral"
                }
              ],
              "props": [
                "bed",
                "hospital"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:rush",
            "caption": "Ngày 1 · 8:35 · phiếu ghi “Ms Martin”",
            "icon": "label"
          },
          {
            "id": "d-wr",
            "t": "text",
            "text": "“You're Ms Martin, right?”",
            "x": 5964,
            "y": 500,
            "size": 46,
            "at": "l2:Martin",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "But in a rush, Thảo glances at the chart instead.",
          "sub": "Nhưng đang vội, Thảo liếc hồ sơ rồi hỏi luôn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "You're Ms Martin, right?",
          "sub": "Chị là chị Martin, đúng không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Mm. Yes.",
          "sub": "Ừm. Vâng.",
          "face": "neutral"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sam is exhausted and only half heard. Yes is the easiest word in any language.",
          "sub": "Sam mệt lả, nghe được một nửa. “Yes” là chữ dễ nói nhất ở mọi thứ tiếng."
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s09",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "8:36 · đối chiếu vòng tay",
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
        "verdict": {
          "ok": false,
          "label": "Đọc tên cho bệnh nhân gật",
          "why": "Ngày sinh trên vòng khác hồ sơ: chị Martin là bệnh nhân khác, tên gần giống, vừa chuyển vào cùng phòng.",
          "rule": "Để bệnh nhân tự nói tên"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Ms Martin, then. Let me just check your band.",
          "sub": "Vậy là chị Martin. Để tôi xem vòng tay.",
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
          "say": "Wrong birth date. Ms Martin is another patient, just moved into this room.",
          "sub": "Ngày sinh không khớp. Chị Martin là bệnh nhân khác, tên gần giống, vừa chuyển vào cùng phòng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Lần nữa nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Could you tell me your full name and date of birth, please?",
          "sub": "Chị vui lòng cho biết họ tên đầy đủ và ngày sinh?",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "sam",
          "say": "Sam Miller. Not Martin.",
          "sub": "Sam Miller. Không phải Martin.",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. Let patients say their own name, not nod at yours.",
          "sub": "Đúng. Để bệnh nhân tự nói tên, đừng đọc tên cho họ gật đầu.",
          "phase": "redo",
          "keys": [
            "tự nói tên"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p6,p7"
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
            "at": "l1",
            "fit": [
              "d-sp",
              "d-sl"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-wrx",
            "t": "strike",
            "over": "d-wr",
            "at": "l1"
          },
          {
            "id": "d-sp",
            "t": "text",
            "text": "“Could you spell your surname?”",
            "x": 5964,
            "y": 580,
            "size": 44,
            "at": "l1:spell",
            "color": "accent"
          },
          {
            "id": "d-sl",
            "t": "text",
            "text": "“…a little more slowly?”",
            "x": 5964,
            "y": 650,
            "size": 44,
            "at": "l2:slowly"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Hỏi lại = cẩn thận",
            "x": 6804,
            "y": 690,
            "size": 52,
            "at": "l3:careful",
            "color": "accent",
            "hl": [
              {
                "text": "cẩn thận",
                "at": "l3:careful"
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
          "say": "Foreign names are easy to mishear. Ask: could you spell your surname for me, please?",
          "sub": "Tên nước ngoài dễ nghe nhầm. Hỏi: “Could you spell your surname for me, please?”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Or: sorry, could you say that again a little more slowly?",
          "sub": "Hoặc: “Sorry, could you say that again a little more slowly?”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Asking again is being careful, not being bad at English.",
          "sub": "Hỏi lại là cẩn thận, không phải kém tiếng Anh.",
          "keys": [
            "cẩn thận"
          ]
        }
      ],
      "ref": "p5"
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
            "at": "l6",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 8:40 · Dị ứng",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "bed",
                "hospital"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:allergies",
            "caption": "Ngày 1 · 8:40 · hỏi dị ứng",
            "icon": "red-circle"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Hỏi kèm ví dụ:",
            "x": 7932,
            "y": 165,
            "size": 50,
            "at": "l6:examples",
            "hl": [
              {
                "text": "ví dụ",
                "at": "l6:examples"
              }
            ]
          },
          {
            "id": "e-1b",
            "t": "text",
            "text": "thuốc · thức ăn · thứ khác",
            "x": 7972,
            "y": 240,
            "size": 46,
            "at": "l6:examples+400"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Có → “What happens?”",
            "x": 7932,
            "y": 330,
            "size": 50,
            "at": "l6:reaction",
            "color": "accent",
            "hl": [
              {
                "text": "What happens?",
                "at": "l6:reaction"
              }
            ]
          },
          {
            "id": "e-2b",
            "t": "text",
            "text": "ghi phản ứng, không chỉ ghi tên",
            "x": 7972,
            "y": 410,
            "size": 38,
            "at": "l6:name",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, eight forty. Allergies.",
          "sub": "Chặng ba, tám giờ bốn mươi. Dị ứng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Do you have any allergies, for example to medicines, foods or anything else?",
          "sub": "Chị có dị ứng gì không, ví dụ với thuốc, thức ăn hay thứ gì khác?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Oh, yes. One antibiotic, I think.",
          "sub": "À, có. Một loại kháng sinh, hình như vậy.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "What happens when you have it?",
          "sub": "Khi dùng thuốc đó thì chị bị sao?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "sam",
          "say": "I get a rash.",
          "sub": "Tôi bị nổi mẩn.",
          "face": "worried"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Examples widen their memory. Then ask the reaction, so you record more than a name.",
          "sub": "Ví dụ giúp bệnh nhân nghĩ rộng ra. Rồi hỏi phản ứng, để ghi đúng phản ứng, không chỉ ghi tên."
        }
      ],
      "ref": "p8"
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
            "id": "e-red",
            "t": "box",
            "x": 7932,
            "y": 500,
            "w": 300,
            "h": 70,
            "at": "l1:red band",
            "fill": "#e5533d",
            "stroke": 4
          },
          {
            "id": "e-redt",
            "t": "text",
            "text": "vòng đỏ = có dị ứng",
            "x": 8262,
            "y": 505,
            "size": 46,
            "at": "l1:red band+300",
            "hl": [
              {
                "text": "có dị ứng",
                "at": "l1:allergy"
              }
            ]
          },
          {
            "id": "e-rec",
            "t": "text",
            "text": "chi tiết: ghi trong hồ sơ",
            "x": 7932,
            "y": 600,
            "size": 38,
            "at": "l2:records",
            "color": "muted"
          },
          {
            "id": "e-own",
            "t": "text",
            "text": "Viện khác? Theo quy trình mình",
            "x": 7932,
            "y": 680,
            "size": 36,
            "at": "l3:hospital",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "In the NHS Borders policy, a patient with an allergy wears an extra red band. This red band tells the staff that you have an allergy.",
          "sub": "Ở NHS Borders, người có dị ứng đeo thêm vòng đỏ. “Vòng đỏ này báo cho nhân viên biết chị có dị ứng.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The details go in the records, not on the band.",
          "sub": "Chi tiết dị ứng ghi trong hồ sơ, không ghi trên vòng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Your hospital's band rules may differ. Follow your own procedure.",
          "sub": "Quy định vòng tay ở viện bạn có thể khác. Làm theo quy trình nơi mình làm.",
          "keys": [
            "quy trình nơi mình làm"
          ]
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s13",
      "module": "BRK-04",
      "data": {
        "title": "Không đeo vòng đỏ thì sao?",
        "wrong": "Không vòng đỏ = không dị ứng",
        "right": "Không vòng đỏ → vẫn xem hồ sơ, hỏi lại",
        "wrongIllus": "red-circle",
        "rightIllus": "clipboard"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "No red band, so no allergy?",
          "sub": "Không đeo vòng đỏ, vậy là không dị ứng?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Wrong. Check the records, and ask again.",
          "sub": "Sai. Xem hồ sơ, và hỏi lại.",
          "keys": [
            "hỏi lại"
          ]
        }
      ],
      "ref": "p10"
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
          }
        ],
        "items": [
          {
            "id": "e-k",
            "t": "text",
            "text": "Vòng tay nhắc, câu hỏi chốt",
            "x": 8772,
            "y": 690,
            "size": 44,
            "at": "l3:reminder",
            "color": "accent",
            "hl": [
              {
                "text": "câu hỏi chốt",
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
          "say": "The band may not be on yet, may come off for a procedure, or the patient remembers an old allergy later.",
          "sub": "Vòng có thể chưa được đeo, bị tháo khi làm thủ thuật, hoặc bệnh nhân mới nhớ ra dị ứng cũ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So ask again at key moments, like before a first dose.",
          "sub": "Nên hỏi lại ở lúc quan trọng, như trước khi cho thuốc lần đầu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: the band is a reminder. It can't replace the question.",
          "sub": "Rút ra: vòng tay là lời nhắc, không thay được câu hỏi.",
          "keys": [
            "không thay được câu hỏi"
          ]
        }
      ],
      "ref": "p10,p11"
    },
    {
      "id": "s15",
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
            "at": "l5",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 8:50 · Thuốc đang dùng",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four"
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
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "give",
                  "face": "happy"
                }
              ],
              "props": [
                "bed",
                "pill"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:medicines",
            "caption": "Ngày 1 · 8:50 · túi thuốc từ nhà",
            "icon": "pill"
          },
          {
            "id": "f-bad",
            "t": "text",
            "text": "“Medicine? Yes or no?”",
            "x": 60,
            "y": 1255,
            "size": 48,
            "at": "l2:Yes or no",
            "color": "muted"
          },
          {
            "id": "f-no",
            "t": "text",
            "text": "→ “No.” (vitamin, thuốc nhỏ mắt?)",
            "x": 100,
            "y": 1335,
            "size": 38,
            "at": "l3:vitamins"
          },
          {
            "id": "f-badx",
            "t": "strike",
            "over": "f-bad",
            "at": "l4:Instead"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four, eight fifty. Foreign patients often bring medicines from home, with unfamiliar brand names.",
          "sub": "Chặng bốn, tám giờ năm mươi. Bệnh nhân nước ngoài hay mang thuốc từ nước mình, tên thương mại lạ hoắc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The narrow way: medicine? Yes or no?",
          "sub": "Cách hỏi hẹp: “Medicine? Yes or no?”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A German patient in the lesson said no. To him, vitamins and eye drops weren't medicine.",
          "sub": "Một bệnh nhân người Đức trong bài đáp “No”: với họ, vitamin và thuốc nhỏ mắt đâu phải “medicine”."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Instead: are you taking any medicines at the moment, including vitamins or anything you buy without a prescription?",
          "sub": "Thay vào đó: “Chị có đang dùng thuốc gì không, kể cả vitamin hay thuốc mua không cần đơn?”"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "sam",
          "say": "Oh, vitamins count? Then these two.",
          "sub": "Ồ, vitamin cũng tính à? Vậy thì hai lọ này.",
          "face": "surprised",
          "pose": "give"
        }
      ],
      "ref": "p12,p14"
    },
    {
      "id": "s16",
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
            "id": "f-pk",
            "t": "text",
            "text": "Xin xem vỏ hộp thuốc",
            "x": 60,
            "y": 1430,
            "size": 40,
            "at": "l1:packets",
            "color": "accent"
          },
          {
            "id": "f-op",
            "t": "text",
            "text": "Mở trước → cụ thể sau",
            "x": 60,
            "y": 1520,
            "size": 50,
            "at": "l2:Open",
            "hl": [
              {
                "text": "Mở trước",
                "at": "l2:Open"
              }
            ]
          },
          {
            "id": "f-of",
            "t": "text",
            "text": "“How often do you take it?”",
            "x": 100,
            "y": 1600,
            "size": 42,
            "at": "l3:often"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Hỏi càng hẹp, đáp càng thiếu",
            "x": 60,
            "y": 1700,
            "size": 52,
            "at": "l4:narrower",
            "color": "accent",
            "hl": [
              {
                "text": "đáp càng thiếu",
                "at": "l4:thinner"
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
          "say": "Then: have you brought them with you? Could I have a look at the packets?",
          "sub": "Rồi: “Chị có mang theo không? Cho tôi xem vỏ hộp được không?”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "OET's rule: open questions first, specific ones later, no leading questions.",
          "sub": "Nguyên tắc OET: hỏi mở trước, hỏi cụ thể sau, tránh câu dẫn dắt.",
          "keys": [
            "hỏi mở trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The open one lets Sam talk. The specific one fixes the timing: how often do you take it?",
          "sub": "Câu mở để Sam kể. Câu cụ thể chốt giờ dùng: “How often do you take it?”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: the narrower the question, the thinner the answer.",
          "sub": "Rút ra: câu hỏi càng hẹp, câu trả lời càng thiếu.",
          "keys": [
            "càng hẹp",
            "càng thiếu"
          ]
        }
      ],
      "ref": "p12,p13,p15"
    },
    {
      "id": "s17",
      "module": "BRK-07",
      "data": {
        "question": "Giới thiệu phòng: nói một mạch, hay từng ý?",
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
          "say": "Explaining the room: all in one breath, or one point at a time?",
          "sub": "Giới thiệu phòng: nói một mạch, hay từng ý một?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s18",
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
            "at": "l6",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 9:00 · Vòng tay, chuông gọi",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
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
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "point"
                },
                {
                  "id": "sam",
                  "side": "right"
                }
              ],
              "props": [
                "bellhop-bell",
                "toilet"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "Ngày 1 · 9:00 · Dũng giới thiệu phòng",
            "icon": "bellhop-bell"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Vòng tay: đeo suốt đợt nằm viện",
            "x": 2028,
            "y": 1255,
            "size": 42,
            "at": "l2:keep it on"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Chuông: bấm là có người",
            "x": 2028,
            "y": 1330,
            "size": 46,
            "at": "l3:press"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Mời làm thử: “Show me…”",
            "x": 2028,
            "y": 1490,
            "size": 50,
            "at": "l4:show me",
            "color": "accent",
            "hl": [
              {
                "text": "làm thử",
                "at": "l4:show me"
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
          "say": "Stop five, nine a.m. Meet Dũng, Thảo's colleague, a new nurse. He shows Sam the room.",
          "sub": "Chặng năm, chín giờ. Đây là Dũng, đồng nghiệp của Thảo, điều dưỡng mới ra trường. Dũng giới thiệu phòng cho Sam.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "This is your identity band. Please keep it on while you're in hospital.",
          "sub": "Đây là vòng tay nhận dạng. Chị đeo suốt thời gian nằm viện nhé."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "This is the call bell. If you need anything, just press this button and one of us will come.",
          "sub": "Đây là chuông gọi. Cần gì, chị bấm nút này, sẽ có người đến."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Could you show me how you'd call us if you needed help?",
          "sub": "Chị bấm thử cho tôi xem, khi cần thì chị gọi chúng tôi thế nào?",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "sam",
          "say": "Like this?",
          "sub": "Thế này à?",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Ding! Now Dũng knows for sure she can use it.",
          "sub": "Ting! Giờ Dũng biết chắc Sam dùng được chuông.",
          "keys": [
            "biết chắc"
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
      "ref": "p16,p17"
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
            "id": "g-ck",
            "t": "text",
            "text": "Một ý ngắn → dừng → kiểm",
            "x": 2028,
            "y": 1580,
            "size": 46,
            "at": "l1:pause",
            "hl": [
              {
                "text": "dừng",
                "at": "l1:pause"
              }
            ]
          },
          {
            "id": "g-sm",
            "t": "text",
            "text": "AHRQ: “show-me”",
            "x": 2028,
            "y": 1660,
            "size": 50,
            "at": "l2:show-me",
            "color": "accent"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Thử một lần, đỡ giảng nhiều lần",
            "x": 2028,
            "y": 1750,
            "size": 44,
            "at": "l3:once",
            "color": "accent",
            "hl": [
              {
                "text": "Thử một lần",
                "at": "l3:once"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: AHRQ — Teach-Back (Tool 5)",
            "x": 2868,
            "y": 1790,
            "size": 28,
            "at": "l2",
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
          "say": "One short point, then pause. AHRQ calls it chunk and check.",
          "sub": "Mỗi lần một ý ngắn rồi dừng: AHRQ gọi là chia nhỏ rồi kiểm tra."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Asking to try it is show-me: great for hands-on things, like the bell or the bed buttons.",
          "sub": "Mời làm thử là “show-me”: hợp việc làm bằng tay, như bấm chuông, chỉnh giường."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Say it gently, so it doesn't feel like a test. Try once, explain far fewer times.",
          "sub": "Nói nhẹ nhàng để không như bị kiểm tra. Thử một lần, đỡ giải thích lại nhiều lần.",
          "keys": [
            "Thử một lần"
          ]
        }
      ],
      "ref": "p16,p18,p19"
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
            "text": "⑥ 9:10 · Tóm tắt, hỏi điều lo",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "bed",
                "clipboard"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:form",
            "caption": "Ngày 1 · 9:10 · phiếu đã điền xong",
            "icon": "clipboard"
          },
          {
            "id": "h-s",
            "t": "text",
            "text": "“So, just to check…”",
            "x": 3996,
            "y": 1255,
            "size": 52,
            "at": "l2:just to check",
            "color": "accent"
          },
          {
            "id": "h-s2",
            "t": "text",
            "text": "→ bệnh nhân sửa nếu sai",
            "x": 4036,
            "y": 1335,
            "size": 42,
            "at": "l4:correct",
            "hl": [
              {
                "text": "sửa",
                "at": "l4:correct"
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
          "say": "Stop six, nine ten. The form is full, and Thảo has ten other jobs waiting.",
          "sub": "Chặng sáu, chín giờ mười. Phiếu đã đầy, Thảo còn cả chục việc khác đang chờ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "So, just to check: you're allergic to that antibiotic, it gives you a rash, and you take these two at home. Is that right?",
          "sub": "Vậy tôi kiểm lại: chị dị ứng loại kháng sinh đó, bị nổi mẩn, và ở nhà chị dùng hai lọ này. Đúng không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "That's right.",
          "sub": "Đúng rồi.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Summarising is an OET skill: the patient can correct you before a mistake grows.",
          "sub": "Tóm tắt là kỹ thuật trong tiêu chí OET: bệnh nhân sửa được trước khi sai sót lớn lên.",
          "keys": [
            "sửa được"
          ]
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
            "id": "h-a",
            "t": "text",
            "text": "A: “OK, finished, thank you.”",
            "x": 3996,
            "y": 1430,
            "size": 44,
            "at": "l1:Option A",
            "color": "coral"
          },
          {
            "id": "h-a2",
            "t": "text",
            "text": "lát sau lại bấm chuông",
            "x": 4036,
            "y": 1505,
            "size": 34,
            "at": "l1:rings",
            "color": "muted"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "B: “Anything you'd like to ask me?”",
            "x": 3996,
            "y": 1580,
            "size": 42,
            "at": "l2:Option B",
            "color": "accent"
          },
          {
            "id": "h-b2",
            "t": "text",
            "text": "→ hỏi luôn, trả lời một lần",
            "x": 4036,
            "y": 1655,
            "size": 38,
            "at": "l2:once"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Hỏi “còn gì không” sớm",
            "x": 3996,
            "y": 1740,
            "size": 52,
            "at": "l4:early",
            "color": "accent",
            "hl": [
              {
                "text": "sớm",
                "at": "l4:early"
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
          "say": "Option A: OK, finished, thank you. Later Sam rings, just to ask about the doctor and visiting hours.",
          "sub": "Cách A: “OK, finished, thank you.” Lát sau Sam bấm chuông chỉ để hỏi giờ bác sĩ đến, giờ người nhà được vào."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Option B: a few more minutes, and Sam asks both right away. Answered once.",
          "sub": "Cách B: thêm ít phút, Sam hỏi luôn hai điều đó. Trả lời một lần."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Is there anything you'd like to ask me, or anything that's worrying you?",
          "sub": "Chị có muốn hỏi gì, hay có điều gì đang làm chị lo không?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: ask anything else early, and you'll be called back less.",
          "sub": "Rút ra: hỏi “còn gì không” lúc đầu, đỡ bị gọi lại nhiều lần sau.",
          "keys": [
            "đỡ bị gọi lại"
          ]
        }
      ],
      "ref": "p21,p22,p23"
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
            "text": "10:00 · Trước liều thuốc đầu",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:ten"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "give"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "bed",
                "pill"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:first dose",
            "caption": "Ngày 1 · 10:00 · thuốc theo y lệnh",
            "icon": "pill"
          },
          {
            "id": "i-band",
            "t": "box",
            "x": 5964,
            "y": 1260,
            "w": 700,
            "h": 100,
            "at": "l2:Before",
            "fill": "#e8f1ff",
            "stroke": 5
          },
          {
            "id": "i-bt",
            "t": "text",
            "text": "SAM MILLER ✓",
            "x": 6014,
            "y": 1280,
            "size": 52,
            "at": "l3:Miller",
            "font": "base",
            "color": "accent"
          },
          {
            "id": "i-al",
            "t": "text",
            "text": "+ hỏi lại dị ứng",
            "x": 5964,
            "y": 1410,
            "size": 50,
            "at": "l2:allergies"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "Đầu xuôi → đuôi lọt",
            "x": 5964,
            "y": 1510,
            "size": 56,
            "at": "l5:head",
            "color": "accent",
            "hl": [
              {
                "text": "đuôi lọt",
                "at": "l5:tail"
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
          "say": "Ten a.m. Back to our plastic band. The first dose, as the doctor ordered.",
          "sub": "Mười giờ sáng. Quay lại chiếc vòng nhựa. Liều thuốc đầu tiên, theo y lệnh bác sĩ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Before this, could you tell me your full name and date of birth again? And any allergies?",
          "sub": "Trước khi dùng thuốc, chị nói lại họ tên, ngày sinh nhé? Và có dị ứng gì không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Sam Miller, again! And yes, that antibiotic. You really like my name.",
          "sub": "Lại Sam Miller! Và có, loại kháng sinh đó. Cô thích tên tôi ghê.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Band and words match. The band reminds, the question does the work.",
          "sub": "Vòng tay và lời chị khớp nhau. Vòng để nhắc, câu hỏi mới là việc chính.",
          "keys": [
            "câu hỏi mới là việc chính"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The head went through this morning. Now the tail follows.",
          "sub": "Đầu đã xuôi từ sáng. Giờ đuôi lọt.",
          "keys": [
            "đuôi lọt"
          ]
        }
      ],
      "ref": "p4,p10"
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
            "at": "l1:end",
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l2:Then",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:open",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l4:summarise",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "J",
            "ms": 1000
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Mang vào ca",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:list"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l1:to",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1242,
            "size": 56,
            "at": "l1:to+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Tên + vai trò",
            "x": 7997,
            "y": 1252,
            "size": 40,
            "at": "l1:to+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1332,
            "w": 44,
            "h": 44,
            "at": "l1:take",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1314,
            "size": 56,
            "at": "l1:take+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "“Full name, date of birth?”",
            "x": 7997,
            "y": 1324,
            "size": 40,
            "at": "l1:take+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1404,
            "w": 44,
            "h": 44,
            "at": "l1:into",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1386,
            "size": 56,
            "at": "l1:into+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Dị ứng: ví dụ + phản ứng",
            "x": 7997,
            "y": 1396,
            "size": 40,
            "at": "l1:into+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1476,
            "w": 44,
            "h": 44,
            "at": "l1:your",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1458,
            "size": 56,
            "at": "l1:your+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Thuốc: kể cả vitamin",
            "x": 7997,
            "y": 1468,
            "size": 40,
            "at": "l1:your+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1548,
            "w": 44,
            "h": 44,
            "at": "l1:shift",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1530,
            "size": 56,
            "at": "l1:shift+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Chuông: mời bấm thử",
            "x": 7997,
            "y": 1540,
            "size": 40,
            "at": "l1:shift+200"
          },
          {
            "id": "j-c5",
            "t": "box",
            "x": 7932,
            "y": 1620,
            "w": 44,
            "h": 44,
            "at": "l1:Six",
            "stroke": 5
          },
          {
            "id": "j-k5",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1602,
            "size": 56,
            "at": "l1:Six+600",
            "color": "accent"
          },
          {
            "id": "j-l5",
            "t": "text",
            "text": "Tóm tắt + hỏi điều lo",
            "x": 7997,
            "y": 1612,
            "size": 40,
            "at": "l1:Six+200"
          },
          {
            "id": "j-a",
            "t": "text",
            "text": "Làm ngay: đọc to ×3",
            "x": 8772,
            "y": 1690,
            "size": 40,
            "at": "l5:Read",
            "color": "accent",
            "hl": [
              {
                "text": "×3",
                "at": "l5:three times"
              }
            ]
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Bài tiếp: hỏi về cơn đau",
            "x": 8772,
            "y": 1760,
            "size": 44,
            "at": "l6:Next"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 6664,
            "y": 170,
            "at": "l2:own"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 760,
            "y": 1520,
            "at": "l3:end"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1260,
            "at": "l4:summarise"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo giao tiếp; chẩn đoán, thuốc, thủ thuật luôn theo bác sĩ và quy trình bệnh viện. Nhân vật là minh hoạ.",
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
          "say": "So, here's the list to take into your shift. Six lines.",
          "sub": "Tóm lại, đây là danh sách mang vào ca. Sáu dòng.",
          "keys": [
            "mang vào ca"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Name and role first. Then patients state their own name and date of birth.",
          "sub": "Tên và vai trò trước. Rồi bệnh nhân tự nói họ tên và ngày sinh.",
          "keys": [
            "tự nói"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ask open questions: allergies with examples and reactions, medicines including vitamins.",
          "sub": "Hỏi mở: dị ứng kèm ví dụ và phản ứng, thuốc kể cả vitamin."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Show the bell, invite a try. Then summarise, and ask what worries them.",
          "sub": "Chỉ chuông gọi, mời bấm thử. Rồi tóm tắt và hỏi điều họ lo.",
          "keys": [
            "tóm tắt"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: read the identity question aloud three times, until it flows.",
          "sub": "Làm ngay: đọc to câu xác nhận danh tính ba lần cho trôi chảy.",
          "keys": [
            "ba lần"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next, what patients say most after admission: it hurts. The pain lesson.",
          "sub": "Bài tiếp: câu bệnh nhân hay nói nhất sau khi nhập viện, “It hurts”. Hỏi về cơn đau."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p24,outro"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "What is the common misunderstanding about the red allergy band?",
        "options": [
          "Thinking that the band must list every allergy in very small writing",
          "Thinking that no red band means the patient definitely has no allergies",
          "Thinking that red bands are only for children who are afraid of needles"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "red-circle",
        "why": "Thiếu vòng đỏ không có nghĩa là không dị ứng, nhân viên phải kiểm tra hồ sơ. Vòng có thể chưa đeo hoặc đã bị tháo."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What is the common misunderstanding about the red allergy band?",
          "sub": "Hiểu lầm thường gặp về vòng tay đỏ báo dị ứng là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Thinking that no red band means the patient definitely has no allergies.",
          "sub": "Tưởng không đeo vòng đỏ là chắc chắn không dị ứng."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "The band reminds. The question decides.",
          "sub": "Vòng tay để nhắc. Câu hỏi mới chốt."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[17]"
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Bạn đã xem xong. Còn bốn mươi câu hỏi",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three times aloud: full name and date of birth. Then the forty questions below.",
          "sub": "Đọc to ba lần câu họ tên, ngày sinh. Rồi làm bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi en-nurses-foreign-patients, bài đào sâu 1) dựng theo hạt nhân kịch bản (#136) + biến thể #144. Hook HOOK-23: đồ vật kể chuyện — vòng tay nhận dạng cận cảnh (“bạn là ai?”), kéo ra thấy Thảo và Sam; vòng trở lại ở 10:00 trước liều thuốc đầu (khép vòng). Dòng thời gian: buổi sáng Ngày 1 ở phòng 305 (8:30 mở đầu → 8:35 danh tính, “Khoan đã!” “You're Ms Martin, right?” → 8:40 dị ứng, vòng đỏ → 8:50 thuốc đang dùng → 9:00 Dũng giới thiệu phòng, show-me → 9:10 tóm tắt, A/B → 10:00). Nhân vật: Thảo (p1, p6, p22), Sam (gộp bệnh nhân Pháp intro, “Mr Martin” p6 kể thành Sam bị gọi nhầm tên “Ms Martin”, người Đức p14 kể bằng lời, người Hàn p17), Dũng (p17). Thành ngữ: “Đầu xuôi thì đuôi mới lọt.” Cảnh ngắt nhịp: BRK-08 (sáu chặng), BRK-04 (vòng đỏ), BRK-07 (rehook). Câu đố questions[17].",
  "loop": {
    "open": "s00",
    "close": "s22"
  }
};
