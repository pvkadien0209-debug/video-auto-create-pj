// ielts-speaking-guide--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "ielts-speaking-guide--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "ielts-speaking-takers",
    "slug": "ielts-speaking-guide",
    "door": "kien-thuc",
    "level": "B1",
    "title": "IELTS Speaking diễn ra thế nào và giám khảo chấm theo gì?",
    "series": "IELTS Speaking tự nhiên — ba phần thi và bốn tiêu chí chấm cho thí sinh band 5.5–7"
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
            "fit": "A",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "a-num",
            "t": "text",
            "text": "11–14 phút",
            "x": 60,
            "y": 100,
            "size": 150,
            "at": "l1:Eleven",
            "color": "accent",
            "hl": [
              {
                "text": "11–14",
                "at": "l1:Eleven"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "3 phần · 1 giám khảo",
            "x": 70,
            "y": 320,
            "size": 60,
            "at": "l1:Three"
          },
          {
            "id": "a-rec",
            "t": "text",
            "text": "cả buổi được ghi âm",
            "x": 70,
            "y": 420,
            "size": 50,
            "at": "l2:recorded",
            "hl": [
              {
                "text": "ghi âm",
                "at": "l2:recorded"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: IELTS.org — IELTS Academic format: Speaking",
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
          "say": "Eleven to fourteen minutes. Three parts. One examiner.",
          "sub": "Mười một đến mười bốn phút. Ba phần. Một giám khảo.",
          "keys": [
            "Mười một đến mười bốn phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "That's IELTS Speaking, says IELTS dot org, and the whole talk is recorded.",
          "sub": "Đó là phần Nói IELTS, theo IELTS.org, và cả buổi nói được ghi âm.",
          "keys": [
            "được ghi âm"
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
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "mobile-phone"
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
            "caption": "Thứ Bảy 8:00 · ôn bài mẫu",
            "icon": "page-facing-up"
          },
          {
            "id": "a-10",
            "t": "text",
            "text": "10 bài mẫu thuộc lòng",
            "x": 60,
            "y": 520,
            "size": 52,
            "at": "l2:ten",
            "color": "coral",
            "hl": [
              {
                "text": "thuộc lòng",
                "at": "l2:memorising"
              }
            ]
          },
          {
            "id": "a-yes",
            "t": "text",
            "text": "“Yes, I do.” … im lặng",
            "x": 60,
            "y": 620,
            "size": 54,
            "at": "l5:Yes",
            "color": "accent",
            "hl": [
              {
                "text": "im lặng",
                "at": "l6:silence"
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
          "say": "Meet Thảo, twenty-seven, an office worker taking IELTS Academic for her master's.",
          "sub": "Đây là Thảo, hai mươi bảy tuổi, nhân viên văn phòng, thi IELTS Academic để học thạc sĩ.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Her speaking is around five point five. Saturday, eight a.m., she's memorising ten model answers.",
          "sub": "Điểm Nói của cô quanh 5.5. Tám giờ sáng thứ Bảy, cô đang học thuộc mười bài mẫu.",
          "keys": [
            "mười bài mẫu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Ten perfect answers about my hometown. Nothing can go wrong!",
          "sub": "Mười bài thật hay về quê mình. Không thể trật được!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Half an hour later, the mock examiner asks: do you like cooking?",
          "sub": "Nửa tiếng sau, giám khảo thi thử hỏi: bạn có thích nấu ăn không?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Yes, I do.",
          "sub": "Có ạ.",
          "face": "neutral"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Then silence. Like a phone call where you only say hello.",
          "sub": "Rồi im lặng. Như gọi điện mà chỉ nói đúng một câu “A lô”.",
          "keys": [
            "im lặng"
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
      "ref": "intro,p20"
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
            "text": "Giám khảo nghe gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:listen",
            "hl": [
              {
                "text": "nghe gì",
                "at": "l1:listen"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: bài thuộc, từ hiếm",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:memorised",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:rare+300"
          },
          {
            "id": "b-y1",
            "t": "text",
            "text": "Mà là: nói dài hơn",
            "x": 2028,
            "y": 260,
            "size": 54,
            "at": "l3:longer",
            "color": "accent",
            "hl": [
              {
                "text": "dài hơn",
                "at": "l3:longer"
              }
            ]
          },
          {
            "id": "b-y2",
            "t": "text",
            "text": "tự nhiên, có ý",
            "x": 2088,
            "y": 345,
            "size": 50,
            "at": "l3:natural"
          },
          {
            "id": "b-y3",
            "t": "text",
            "text": "bốn tiêu chí ngang nhau",
            "x": 2088,
            "y": 420,
            "size": 50,
            "at": "l3:four"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what does the examiner actually listen for?",
          "sub": "Vậy giám khảo thực ra nghe gì?",
          "keys": [
            "nghe gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not a perfect memorised answer, and not rare words.",
          "sub": "Không phải bài thuộc lòng hoàn hảo, cũng không phải từ thật hiếm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But longer, natural answers with real ideas, scored on four equal criteria.",
          "sub": "Mà là câu trả lời dài hơn, tự nhiên, có ý, chấm theo bốn tiêu chí ngang nhau.",
          "keys": [
            "bốn tiêu chí ngang nhau"
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
            "id": "b-i1",
            "t": "illus",
            "name": "door",
            "x": 2928,
            "y": 160,
            "size": 80,
            "at": "l1:separate"
          },
          {
            "id": "b-k1",
            "t": "text",
            "text": "Phòng riêng: bạn + giám khảo",
            "x": 3028,
            "y": 175,
            "size": 40,
            "at": "l1:separate+200",
            "hl": [
              {
                "text": "Phòng riêng",
                "at": "l1:separate"
              }
            ]
          },
          {
            "id": "b-k2",
            "t": "text",
            "text": "Cùng hoặc khác ngày",
            "x": 3028,
            "y": 245,
            "size": 40,
            "at": "l1:examiner"
          },
          {
            "id": "b-i2",
            "t": "illus",
            "name": "laptop",
            "x": 2928,
            "y": 330,
            "size": 80,
            "at": "l3:computer"
          },
          {
            "id": "b-k3",
            "t": "text",
            "text": "Thi máy, Nói vẫn với người",
            "x": 3028,
            "y": 345,
            "size": 40,
            "at": "l3:conversation",
            "hl": [
              {
                "text": "với người",
                "at": "l3:conversation"
              }
            ]
          },
          {
            "id": "b-k4",
            "t": "text",
            "text": "đối diện hoặc qua video",
            "x": 3028,
            "y": 415,
            "size": 40,
            "at": "l4:video"
          },
          {
            "id": "b-k5",
            "t": "text",
            "text": "Không gõ, không máy chấm",
            "x": 2028,
            "y": 540,
            "size": 52,
            "at": "l4:software",
            "color": "accent",
            "hl": [
              {
                "text": "không máy chấm",
                "at": "l4:software"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: British Council; IDP Việt Nam — IELTS trên máy tính",
            "x": 2028,
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
          "say": "British Council describes a separate room, just you and the examiner, on the same day as other skills or not.",
          "sub": "British Council mô tả: phòng riêng, chỉ bạn và giám khảo, cùng hay khác ngày với các kỹ năng kia.",
          "keys": [
            "phòng riêng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "IELTS in Vietnam is on computer, but IDP Vietnam says Speaking stays a conversation with an examiner.",
          "sub": "Ở Việt Nam thi trên máy, nhưng theo IDP Việt Nam, phần Nói vẫn là trò chuyện với giám khảo.",
          "keys": [
            "trò chuyện với giám khảo"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Face to face at some centres, by video at others. No typing, no scoring software.",
          "sub": "Đối diện ở một số điểm thi, qua màn hình video ở điểm khác. Không gõ, không nói vào phần mềm chấm.",
          "keys": [
            "phần mềm chấm"
          ]
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s04",
      "module": "BRK-08",
      "data": {
        "title": "Thứ Bảy thi thử Nói",
        "points": [
          {
            "label": "8:30",
            "sub": "Phần 1",
            "illus": "speech-balloon"
          },
          {
            "label": "8:40",
            "sub": "Phần 2 · 3",
            "illus": "memo"
          },
          {
            "label": "9:00",
            "sub": "Bốn tiêu chí",
            "illus": "clipboard"
          },
          {
            "label": "9:40",
            "sub": "Giọng Mỹ?",
            "illus": "speaking-head"
          },
          {
            "label": "10:00",
            "sub": "Bài mẫu",
            "illus": "page-facing-up"
          },
          {
            "label": "10:30",
            "sub": "Nghe lại",
            "illus": "mobile-phone"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One Saturday morning, six stops.",
          "sub": "Một sáng thứ Bảy, sáu chặng.",
          "keys": [
            "Một sáng thứ Bảy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Phone recording. Let's begin.",
          "sub": "Điện thoại bật ghi âm. Bắt đầu."
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
            "at": "l3",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 8:30 · Phần 1",
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
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "mobile-phone"
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
                  "shot": "E-SHOT-09",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Sam",
            "caption": "8:30 · phòng thi thử",
            "icon": "speech-balloon"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "4–5 phút",
            "x": 3996,
            "y": 170,
            "size": 64,
            "at": "l3:four",
            "color": "accent",
            "hl": [
              {
                "text": "4–5",
                "at": "l3:four"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Chào hỏi, kiểm danh tính",
            "x": 3996,
            "y": 270,
            "size": 46,
            "at": "l3:ID"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Nhà, gia đình, việc học…",
            "x": 3996,
            "y": 350,
            "size": 46,
            "at": "l4:Home"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Mỗi câu đáp: 2–3 câu",
            "x": 3996,
            "y": 440,
            "size": 52,
            "at": "l4:two",
            "hl": [
              {
                "text": "2–3 câu",
                "at": "l4:two"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: British Council — IELTS Speaking test format",
            "x": 3996,
            "y": 720,
            "size": 28,
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
          "say": "Stop one, eight thirty. Meet Sam, the group's native English teacher, playing examiner today.",
          "sub": "Chặng một, tám rưỡi. Đây là Sam, cô giáo bản ngữ của nhóm, hôm nay đóng vai giám khảo.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Good morning. Can you tell me your full name, please?",
          "sub": "Chào em. Em cho cô biết họ tên đầy đủ nhé?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Part one: four to five minutes. Introductions, an ID check, then familiar topics.",
          "sub": "Phần 1: bốn đến năm phút. Chào hỏi, kiểm tra danh tính, rồi những chủ đề quen thuộc.",
          "keys": [
            "bốn đến năm phút"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Home, family, work, studies, hobbies. British Council suggests two or three sentences per answer.",
          "sub": "Nhà ở, gia đình, công việc, việc học, sở thích. British Council gợi ý mỗi câu đáp hai, ba câu.",
          "keys": [
            "hai, ba câu"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "sam",
          "say": "Do you like cooking?",
          "sub": "Em có thích nấu ăn không?",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s06",
      "module": "DLG-01",
      "data": {
        "set": "meeting",
        "label": "Thứ Bảy 8:30 · Phần 1",
        "actors": [
          {
            "id": "sam",
            "side": "left"
          },
          {
            "id": "thao",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "“Yes, I do.” rồi im",
          "why": "Giám khảo gần như chưa nghe bạn nói; câu cụt không cho thấy trình độ.",
          "rule": "Thêm một lý do, một chi tiết"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Yes, I do.",
          "sub": "Có ạ.",
          "face": "neutral",
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
          "say": "Three words, then silence. The examiner has heard almost nothing.",
          "sub": "Ba chữ rồi im. Giám khảo gần như chưa nghe bạn nói.",
          "keys": [
            "chưa nghe bạn nói"
          ]
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
          "say": "Yes, I do, especially on weekends, because it helps me relax after a busy week.",
          "sub": "Có ạ, nhất là cuối tuần, vì nấu ăn giúp em thư giãn sau một tuần bận rộn.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Last Sunday I made a simple chicken soup for my family.",
          "sub": "Chủ nhật vừa rồi em nấu một nồi canh gà đơn giản cho cả nhà.",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Still short. But now there's a reason and a real detail.",
          "sub": "Vẫn ngắn. Nhưng giờ có lý do và một chi tiết thật.",
          "phase": "redo",
          "keys": [
            "lý do và một chi tiết"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p4,p5"
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
            "id": "c-f1",
            "t": "text",
            "text": "Đáp",
            "x": 3996,
            "y": 540,
            "size": 56,
            "at": "l1:yes"
          },
          {
            "id": "c-f2",
            "t": "text",
            "text": "+ lý do",
            "x": 4156,
            "y": 540,
            "size": 56,
            "at": "l1:reason",
            "color": "accent"
          },
          {
            "id": "c-f3",
            "t": "text",
            "text": "+ chi tiết",
            "x": 4406,
            "y": 540,
            "size": 56,
            "at": "l1:detail",
            "color": "accent",
            "hl": [
              {
                "text": "chi tiết",
                "at": "l1:detail"
              }
            ]
          },
          {
            "id": "c-f4",
            "t": "text",
            "text": "“Như cơm có canh”",
            "x": 3996,
            "y": 630,
            "size": 48,
            "at": "l2:rice",
            "color": "muted",
            "hl": [
              {
                "text": "cơm có canh",
                "at": "l2:rice"
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
          "say": "Takeaway: don't stop at yes or no. One reason, one detail. That's enough.",
          "sub": "Rút ra: đừng dừng ở “Có” hay “Không”. Một lý do, một chi tiết là đủ.",
          "keys": [
            "Một lý do, một chi tiết"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Like rice with soup: simple, but now it's a real meal.",
          "sub": "Như cơm có canh: đơn giản, mà thành bữa.",
          "keys": [
            "cơm có canh"
          ]
        }
      ],
      "ref": "p5"
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
            "at": "l3",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 8:40 · Phần 2",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "pose": "give"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "memo",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Stop two",
            "caption": "8:40 · thẻ đề, bút chì, giấy",
            "icon": "memo"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "3–4 phút, cả chuẩn bị",
            "x": 5964,
            "y": 165,
            "size": 48,
            "at": "l1:three",
            "hl": [
              {
                "text": "3–4 phút",
                "at": "l1:three"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "1 phút chuẩn bị",
            "x": 5964,
            "y": 240,
            "size": 54,
            "at": "l3:minute",
            "color": "accent",
            "hl": [
              {
                "text": "1 phút",
                "at": "l3:minute"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "nói khoảng 2 phút",
            "x": 5964,
            "y": 315,
            "size": 54,
            "at": "l3:two",
            "color": "accent"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "Hết giờ: giám khảo dừng",
            "x": 5964,
            "y": 395,
            "size": 44,
            "at": "l4:stops"
          },
          {
            "id": "d-5",
            "t": "text",
            "text": "+ 1–2 câu hỏi thêm",
            "x": 6004,
            "y": 455,
            "size": 40,
            "at": "l4:one or two",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, eight forty. Part two: three to four minutes, preparation included.",
          "sub": "Chặng hai, tám giờ bốn mươi. Phần 2: ba đến bốn phút, tính cả chuẩn bị.",
          "keys": [
            "ba đến bốn phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Here's your task card, a pencil and some paper. You have one minute.",
          "sub": "Thẻ đề của em đây, bút chì và giấy. Em có một phút.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One minute to prepare, then about two minutes of talking.",
          "sub": "Một phút chuẩn bị, rồi nói khoảng hai phút.",
          "keys": [
            "Một phút chuẩn bị"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "When time's up, the examiner stops you, and may ask one or two more questions.",
          "sub": "Hết giờ, giám khảo dừng bạn lại, có thể hỏi thêm một hai câu."
        }
      ],
      "ref": "p6"
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
            "id": "d-p3",
            "t": "text",
            "text": "Phần 3 · 4–5 phút",
            "x": 5964,
            "y": 530,
            "size": 50,
            "at": "l1:four",
            "color": "accent",
            "hl": [
              {
                "text": "Phần 3",
                "at": "l1:three"
              }
            ]
          },
          {
            "id": "d-p3b",
            "t": "text",
            "text": "chung, trừu tượng hơn",
            "x": 6004,
            "y": 600,
            "size": 40,
            "at": "l2:abstract",
            "hl": [
              {
                "text": "trừu tượng",
                "at": "l2:abstract"
              }
            ]
          },
          {
            "id": "d-p3c",
            "t": "text",
            "text": "giải thích, phân tích, suy đoán",
            "x": 6004,
            "y": 660,
            "size": 36,
            "at": "l3:speculating"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: IELTS.org — Speaking",
            "x": 5964,
            "y": 128,
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
          "say": "Part three: four to five minutes, linked to the part two topic.",
          "sub": "Phần 3: bốn đến năm phút, nối với chủ đề Phần 2."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The questions get more general and more abstract.",
          "sub": "Câu hỏi chung hơn, trừu tượng hơn.",
          "keys": [
            "trừu tượng hơn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "IELTS dot org says it tests explaining opinions, analysing, discussing and speculating.",
          "sub": "IELTS.org ghi phần này kiểm tra giải thích ý kiến, phân tích, thảo luận và suy đoán.",
          "keys": [
            "giải thích ý kiến"
          ]
        }
      ],
      "ref": "p7"
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
            "at": "l3",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 9:00 · Bốn tiêu chí",
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
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
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
                "clipboard"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Stop three",
            "caption": "9:00 · phiếu chấm",
            "icon": "clipboard"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "1 Trôi chảy, mạch lạc",
            "x": 7932,
            "y": 165,
            "size": 44,
            "at": "l3:fluency",
            "hl": [
              {
                "text": "Trôi chảy",
                "at": "l3:fluency"
              }
            ]
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "2 Vốn từ",
            "x": 7932,
            "y": 225,
            "size": 44,
            "at": "l3:lexical",
            "hl": [
              {
                "text": "Vốn từ",
                "at": "l3:lexical"
              }
            ]
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "3 Ngữ pháp",
            "x": 7932,
            "y": 285,
            "size": 44,
            "at": "l3:grammatical",
            "hl": [
              {
                "text": "Ngữ pháp",
                "at": "l3:grammatical"
              }
            ]
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "4 Phát âm",
            "x": 7932,
            "y": 345,
            "size": 44,
            "at": "l3:pronunciation",
            "hl": [
              {
                "text": "Phát âm",
                "at": "l3:pronunciation"
              }
            ]
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "Ngang nhau → trung bình",
            "x": 7932,
            "y": 415,
            "size": 46,
            "at": "l4:equal",
            "color": "accent",
            "hl": [
              {
                "text": "trung bình",
                "at": "l4:average"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: IELTS.org — IELTS scoring in detail",
            "x": 7932,
            "y": 128,
            "size": 28,
            "at": "l3",
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
          "say": "Stop three, nine a.m. Sam fills in her score sheet.",
          "sub": "Chặng ba, chín giờ. Sam điền phiếu chấm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Four boxes, Thảo. Each one counts the same.",
          "sub": "Bốn ô, Thảo ạ. Ô nào cũng nặng như nhau.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "IELTS dot org lists them: fluency and coherence, lexical resource, grammatical range and accuracy, pronunciation.",
          "sub": "IELTS.org nêu bốn tiêu chí: trôi chảy và mạch lạc, vốn từ, ngữ pháp, phát âm.",
          "keys": [
            "bốn tiêu chí"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Equal weight, and the average is your score. Four table legs of the same length.",
          "sub": "Trọng số ngang nhau, trung bình là điểm Nói. Như bốn chân bàn dài bằng nhau.",
          "keys": [
            "bốn chân bàn"
          ]
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
          },
          {
            "at": "l1",
            "fit": [
              "e-d1",
              "e-d3"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l2:end",
            "fit": "E",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "e-d1",
            "t": "text",
            "text": "Tốc độ thường, ít ngập ngừng",
            "x": 7932,
            "y": 490,
            "size": 36,
            "at": "l1:speed"
          },
          {
            "id": "e-d2",
            "t": "text",
            "text": "Sắp ý, nối bằng từ nối",
            "x": 7932,
            "y": 545,
            "size": 36,
            "at": "l1:linking",
            "hl": [
              {
                "text": "từ nối",
                "at": "l1:linking"
              }
            ]
          },
          {
            "id": "e-d3",
            "t": "text",
            "text": "Quên từ → diễn đạt lại",
            "x": 7932,
            "y": 600,
            "size": 38,
            "at": "l2:paraphrasing",
            "color": "accent",
            "hl": [
              {
                "text": "diễn đạt lại",
                "at": "l2:paraphrasing"
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
          "say": "Fluency: normal speed without too much hesitation. Coherence: ideas in order, joined with linking words.",
          "sub": "Trôi chảy: tốc độ bình thường, không ngập ngừng nhiều. Mạch lạc: ý có thứ tự, nối bằng từ nối.",
          "keys": [
            "từ nối"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Vocabulary: the right words, no need for rare ones, and paraphrasing when a word escapes you.",
          "sub": "Vốn từ: dùng từ đúng, không cần từ hiếm, và diễn đạt lại khi quên từ.",
          "keys": [
            "diễn đạt lại"
          ]
        }
      ],
      "ref": "p9"
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
          }
        ],
        "items": [
          {
            "id": "e-g",
            "t": "text",
            "text": "Ngữ pháp: đơn + phức, ít lỗi",
            "x": 7932,
            "y": 655,
            "size": 36,
            "at": "l1:simple",
            "hl": [
              {
                "text": "ít lỗi",
                "at": "l1:few"
              }
            ]
          },
          {
            "id": "e-p",
            "t": "text",
            "text": "Phát âm: hiểu, không cố quá",
            "x": 7932,
            "y": 705,
            "size": 36,
            "at": "l2:effort",
            "color": "accent",
            "hl": [
              {
                "text": "không cố quá",
                "at": "l2:effort"
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
          "say": "Grammar: simple and complex sentences, few errors. Know your usual slips, like articles or prepositions.",
          "sub": "Ngữ pháp: câu đơn lẫn câu phức, ít lỗi. Biết lỗi quen của mình, như mạo từ, giới từ.",
          "keys": [
            "câu đơn lẫn câu phức"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Pronunciation: can the listener understand you without too much effort?",
          "sub": "Phát âm: người nghe có hiểu bạn mà không phải cố quá nhiều không?",
          "keys": [
            "không phải cố quá nhiều"
          ]
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s14",
      "module": "BRK-05",
      "data": {
        "title": "Bạn có biết",
        "points": [
          "Đủ đặc điểm mới được band",
          "Tính trên cả ba phần",
          "Đừng chỉ lo từ vựng"
        ],
        "illus": "light-bulb"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A band needs all its positive features.",
          "sub": "Muốn được band, phải đủ các đặc điểm của band đó.",
          "keys": [
            "đủ các đặc điểm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "All three parts count.",
          "sub": "Điểm tính trên cả ba phần.",
          "keys": [
            "cả ba phần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Not just vocabulary.",
          "sub": "Đừng chỉ lo từ vựng.",
          "keys": [
            "Đừng chỉ lo từ vựng"
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
            "text": "④ 9:20 · Band 5 · 6 · 7",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four",
            "hl": [
              {
                "text": "5 · 6 · 7",
                "at": "l1:five"
              }
            ]
          },
          {
            "id": "f-h0",
            "t": "text",
            "text": "Band 5",
            "x": 330,
            "y": 1250,
            "size": 52,
            "at": "l2:five"
          },
          {
            "id": "f-h1",
            "t": "text",
            "text": "Band 6",
            "x": 790,
            "y": 1250,
            "size": 52,
            "at": "l3:six"
          },
          {
            "id": "f-h2",
            "t": "text",
            "text": "Band 7",
            "x": 1250,
            "y": 1250,
            "size": 52,
            "at": "l3:seven",
            "color": "accent"
          },
          {
            "id": "f-r1-l",
            "t": "text",
            "text": "Trôi chảy",
            "x": 60,
            "y": 1340,
            "size": 40,
            "at": "l2:Fluency",
            "color": "muted"
          },
          {
            "id": "f-r1-0",
            "t": "text",
            "text": "lặp, tự sửa, chậm",
            "x": 330,
            "y": 1340,
            "size": 36,
            "at": "l2:repeats"
          },
          {
            "id": "f-r1-1",
            "t": "text",
            "text": "nói dài, đôi lúc rời",
            "x": 790,
            "y": 1340,
            "size": 36,
            "at": "l3:willing"
          },
          {
            "id": "f-r1-2",
            "t": "text",
            "text": "dài, không gắng sức",
            "x": 1250,
            "y": 1340,
            "size": 36,
            "at": "l3:without",
            "color": "accent"
          },
          {
            "id": "f-r2-l",
            "t": "text",
            "text": "Vốn từ",
            "x": 60,
            "y": 1430,
            "size": 40,
            "at": "l4:Vocabulary",
            "color": "muted"
          },
          {
            "id": "f-r2-0",
            "t": "text",
            "text": "đủ từ, kém linh hoạt",
            "x": 330,
            "y": 1430,
            "size": 36,
            "at": "l4:flexibility"
          },
          {
            "id": "f-r2-1",
            "t": "text",
            "text": "từ chưa hợp, nghĩa rõ",
            "x": 790,
            "y": 1430,
            "size": 36,
            "at": "l4:clear"
          },
          {
            "id": "f-r2-2",
            "t": "text",
            "text": "linh hoạt, thành ngữ",
            "x": 1250,
            "y": 1430,
            "size": 36,
            "at": "l5:idioms",
            "color": "accent"
          },
          {
            "id": "f-r3-l",
            "t": "text",
            "text": "Ngữ pháp",
            "x": 60,
            "y": 1520,
            "size": 40,
            "at": "l6:Grammar",
            "color": "muted"
          },
          {
            "id": "f-r3-0",
            "t": "text",
            "text": "câu phức hay sai",
            "x": 330,
            "y": 1520,
            "size": 36,
            "at": "l6:complex"
          },
          {
            "id": "f-r3-1",
            "t": "text",
            "text": "trộn ngắn với phức",
            "x": 790,
            "y": 1520,
            "size": 36,
            "at": "l6:mixes"
          },
          {
            "id": "f-r3-2",
            "t": "text",
            "text": "nhiều câu không lỗi",
            "x": 1250,
            "y": 1520,
            "size": 36,
            "at": "l6:error",
            "color": "accent"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: IELTS.org — IELTS Speaking Band Descriptors",
            "x": 60,
            "y": 1810,
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
          "say": "Stop four, nine twenty. Band five, six, seven: what's the difference?",
          "sub": "Chặng bốn, chín giờ hai mươi. Band 5, 6, 7 khác nhau ở đâu?",
          "keys": [
            "Band 5, 6, 7"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fluency. Band five keeps going, but repeats, self-corrects or slows down.",
          "sub": "Trôi chảy. Band 5 vẫn nói tiếp, nhưng lặp, tự sửa, hay chậm lại."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Band six is willing to speak at length, though coherence slips. Band seven talks at length without effort.",
          "sub": "Band 6 sẵn lòng nói dài, dù đôi lúc mất mạch. Band 7 nói dài, không thấy gắng sức.",
          "keys": [
            "không thấy gắng sức"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Vocabulary. Five has enough words, but little flexibility. Six may miss a word, yet stays clear.",
          "sub": "Vốn từ. Band 5 đủ từ mà kém linh hoạt. Band 6 có từ chưa hợp, nghĩa vẫn rõ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Seven uses words flexibly, with some less common words and idioms.",
          "sub": "Band 7 dùng từ linh hoạt, có một số từ ít phổ biến và thành ngữ.",
          "keys": [
            "thành ngữ"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Grammar. Five slips on complex sentences, six mixes short and complex, seven has many error-free ones.",
          "sub": "Ngữ pháp. Band 5 câu phức hay sai, band 6 trộn ngắn với phức, band 7 nhiều câu không lỗi.",
          "keys": [
            "nhiều câu không lỗi"
          ]
        }
      ],
      "ref": "p13,p14"
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
            "id": "f-p",
            "t": "text",
            "text": "Phát âm",
            "x": 60,
            "y": 1630,
            "size": 40,
            "at": "l1:Pronunciation",
            "color": "muted"
          },
          {
            "id": "f-p6",
            "t": "text",
            "text": "Band 6: nhịp, trọng âm chưa đều",
            "x": 330,
            "y": 1630,
            "size": 40,
            "at": "l1:rhythm",
            "hl": [
              {
                "text": "chưa đều",
                "at": "l1:uneven"
              }
            ]
          },
          {
            "id": "f-p8",
            "t": "text",
            "text": "Band 8: chính xác, tinh tế",
            "x": 330,
            "y": 1700,
            "size": 40,
            "at": "l2:eight",
            "color": "accent"
          },
          {
            "id": "f-p57",
            "t": "text",
            "text": "Band 5 và 7: ở giữa",
            "x": 330,
            "y": 1770,
            "size": 36,
            "at": "l2:between",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Pronunciation: band six uses many features, but control of rhythm and stress is uneven.",
          "sub": "Phát âm: band 6 dùng được nhiều đặc điểm, nhưng nhịp và trọng âm còn chưa đều.",
          "keys": [
            "chưa đều"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Band eight uses them precisely. Five and seven sit in between.",
          "sub": "Band 8 dùng chúng để truyền ý chính xác, tinh tế. Band 5 và 7 nằm ở giữa."
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s17",
      "module": "BRK-07",
      "data": {
        "question": "Phát âm điểm cao: phải giọng Anh, giọng Mỹ?",
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
          "say": "For a high pronunciation score, do you need a British or American accent?",
          "sub": "Phát âm điểm cao thì phải nói giọng Anh, giọng Mỹ?",
          "keys": [
            "giọng Anh, giọng Mỹ"
          ]
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 9:40 · Giọng Mỹ?",
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
              "set": "meeting",
              "actors": [
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "left",
                  "face": "thinking"
                }
              ],
              "props": [
                "speaking-head"
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
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "9:40 · lượt của Dũng",
            "icon": "speaking-head"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Bắt chước giọng bản xứ",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l2:accent",
            "color": "coral"
          },
          {
            "id": "g-1x",
            "t": "strike",
            "over": "g-1",
            "at": "l4:worry"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Giám khảo hiểu nhiều giọng",
            "x": 2028,
            "y": 1360,
            "size": 48,
            "at": "l4:many",
            "hl": [
              {
                "text": "nhiều giọng",
                "at": "l4:many"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Chấm: dễ hiểu đến đâu",
            "x": 2028,
            "y": 1450,
            "size": 52,
            "at": "l5:easily",
            "color": "accent",
            "hl": [
              {
                "text": "dễ hiểu",
                "at": "l5:easily"
              }
            ]
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "+ trọng âm, ngữ điệu",
            "x": 2068,
            "y": 1535,
            "size": 46,
            "at": "l5:stress"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: IDP — 10 tips for IELTS Speaking",
            "x": 2028,
            "y": 1810,
            "size": 28,
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
          "say": "Stop five, nine forty. Meet Dũng, Thảo's cousin, a second-year biology student, next in line.",
          "sub": "Chặng năm, chín giờ bốn mươi. Đây là Dũng, em họ Thảo, sinh viên năm hai ngành sinh học, đến lượt thi thử.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I copy American films all day. My accent is my secret weapon!",
          "sub": "Em nhại phim Mỹ suốt ngày. Giọng Mỹ là bí kíp của em!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Sorry, Dũng. Could you say that again, more slowly?",
          "sub": "Xin lỗi Dũng. Em nói lại chậm hơn được không?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Common mix-up. IDP says don't worry about your accent: examiners understand many accents.",
          "sub": "Hiểu lầm thường gặp. IDP khuyên đừng lo về giọng: giám khảo hiểu được rất nhiều giọng.",
          "keys": [
            "đừng lo về giọng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "What's scored is how easily you're understood, plus stress and intonation.",
          "sub": "Điều được chấm là người nghe hiểu bạn dễ đến đâu, cùng trọng âm và ngữ điệu.",
          "keys": [
            "hiểu bạn dễ đến đâu"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s19",
      "module": "BRK-04",
      "data": {
        "title": "Đích của phát âm",
        "wrong": "Giống hệt người bản xứ",
        "right": "Nói rõ, người nghe dễ hiểu",
        "wrongIllus": "performing-arts",
        "rightIllus": "ear"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Sounding exactly like a native speaker?",
          "sub": "Giống hệt người bản xứ?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The goal is being easy to understand.",
          "sub": "Đích là dễ hiểu, không phải giống người bản xứ.",
          "keys": [
            "dễ hiểu"
          ]
        }
      ],
      "ref": "p17"
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
            "text": "⑥ 10:00 · Bài mẫu",
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
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
                  "side": "left"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Stop six",
            "caption": "10:00 · thêm một lượt Phần 1",
            "icon": "page-facing-up"
          },
          {
            "id": "h-q",
            "t": "text",
            "text": "Hỏi: cuối tuần làm gì?",
            "x": 3996,
            "y": 1250,
            "size": 46,
            "at": "l4:weekends",
            "hl": [
              {
                "text": "cuối tuần",
                "at": "l4:weekends"
              }
            ]
          },
          {
            "id": "h-a",
            "t": "text",
            "text": "Đáp: lịch sử, món ăn",
            "x": 3996,
            "y": 1320,
            "size": 46,
            "at": "l4:History",
            "color": "coral"
          },
          {
            "id": "h-ca",
            "t": "text",
            "text": "“Râu ông nọ cắm cằm bà kia”",
            "x": 3996,
            "y": 1395,
            "size": 42,
            "at": "l5:beard",
            "color": "accent",
            "hl": [
              {
                "text": "cắm cằm bà kia",
                "at": "l5:chin"
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
          "say": "Stop six, ten a.m. One more round of part one. Remember the ten model answers?",
          "sub": "Chặng sáu, mười giờ. Thêm một lượt Phần 1. Nhớ mười bài mẫu không?",
          "keys": [
            "mười bài mẫu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "What do people in your town do at weekends?",
          "sub": "Người ở quê em thường làm gì vào cuối tuần?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "My hometown is famous for its long history and its delicious local dishes, such as…",
          "sub": "Quê em nổi tiếng với lịch sử lâu đời và nhiều món ăn ngon, chẳng hạn như…",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "History and food. But the question was about weekends.",
          "sub": "Lịch sử, món ăn. Nhưng câu hỏi là về cuối tuần.",
          "keys": [
            "về cuối tuần"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our saying: one man's beard stuck on another's chin.",
          "sub": "Ông bà gọi là: “Râu ông nọ cắm cằm bà kia.”",
          "keys": [
            "Râu ông nọ cắm cằm bà kia"
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
          },
          {
            "at": "l2",
            "fit": [
              "h-2",
              "h-3"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l4",
            "fit": "H",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "h-1",
            "t": "text",
            "text": "Không cho thấy đúng trình độ",
            "x": 3996,
            "y": 1475,
            "size": 38,
            "at": "l1:hides",
            "hl": [
              {
                "text": "đúng trình độ",
                "at": "l1:level"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Lệch câu hỏi, ý thừa",
            "x": 3996,
            "y": 1535,
            "size": 38,
            "at": "l2:fits"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Mất nhấn, giọng đều đều",
            "x": 3996,
            "y": 1595,
            "size": 38,
            "at": "l3:flat",
            "color": "coral",
            "hl": [
              {
                "text": "đều đều",
                "at": "l3:monotone"
              }
            ]
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "Áo may sẵn: rộng hoặc chật",
            "x": 3996,
            "y": 1655,
            "size": 36,
            "at": "l4:shirt",
            "color": "muted"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: IDP — M is to memorise or not; British Council",
            "x": 3996,
            "y": 1218,
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
          "say": "IDP says memorised language hides your real level. Examiners spot it, and your score may drop.",
          "sub": "IDP nói ngôn ngữ học thuộc không cho thấy đúng trình độ. Giám khảo nhận ra, và điểm có thể thấp đi.",
          "keys": [
            "không cho thấy đúng trình độ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two more harms. It rarely fits the question, and brings extra bits nobody asked for.",
          "sub": "Thêm hai cái hại. Bài thuộc hiếm khi khớp câu hỏi, lại có ý thừa không ai hỏi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And recited words lose natural stress and feeling. British Council warns of a flat, monotone voice.",
          "sub": "Và đọc bài thuộc thì mất trọng âm tự nhiên, mất cảm xúc. British Council cảnh báo giọng đều đều.",
          "keys": [
            "giọng đều đều"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Like a ready-made shirt: on everyone, a little too big or too tight.",
          "sub": "Như áo may sẵn: ai mặc cũng thấy hơi rộng, hơi chật.",
          "keys": [
            "áo may sẵn"
          ]
        }
      ],
      "ref": "p18,p19"
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
          }
        ],
        "items": [
          {
            "id": "h-k",
            "t": "text",
            "text": "Ý + từ theo chủ đề",
            "x": 3996,
            "y": 1780,
            "size": 42,
            "at": "l5:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "Ý + từ",
                "at": "l5:ideas"
              }
            ]
          },
          {
            "id": "h-m",
            "t": "text",
            "text": "Sơ đồ ý, từ đã quen",
            "x": 3996,
            "y": 1720,
            "size": 38,
            "at": "l3:mind"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "So what do I do with my ten answers?",
          "sub": "Vậy mười bài mẫu của em thì sao?",
          "face": "worried"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Keep the ideas, drop the script. Learn hometown words, then answer many different questions in your own words.",
          "sub": "Giữ ý, bỏ kịch bản. Học từ vựng chủ đề quê hương, rồi tập trả lời nhiều câu hỏi khác nhau bằng lời của mình.",
          "keys": [
            "bằng lời của mình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "IDP suggests word lists or mind maps per topic, and British Council says: practise with a partner.",
          "sub": "IDP gợi ý danh sách từ hoặc sơ đồ ý theo chủ đề; British Council khuyên luyện cùng bạn.",
          "keys": [
            "sơ đồ ý"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: prepare ideas and words by topic, not word-for-word answers.",
          "sub": "Rút ra: chuẩn bị ý và từ theo chủ đề, đừng chuẩn bị nguyên văn câu trả lời.",
          "keys": [
            "ý và từ theo chủ đề"
          ]
        }
      ],
      "ref": "p20,p21,p22"
    },
    {
      "id": "s23",
      "module": "BRK-11",
      "data": {
        "title": "Lộ trình 4 bài tiếp",
        "items": [
          "Phần 1: lý do, chi tiết",
          "Phần 2: ghi chú, nói đủ",
          "Phần 3: nêu ý kiến",
          "Phát âm, trôi chảy"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Four: pronunciation, fluency.",
          "sub": "Bốn: phát âm, trôi chảy."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Three: opinions.",
          "sub": "Ba: nêu ý kiến."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Two: the long turn.",
          "sub": "Hai: nói đủ hai phút."
        },
        {
          "id": "l4",
          "lang": "en",
          "say": "One: part one. Start here.",
          "sub": "Một: Phần 1. Bắt đầu từ đây.",
          "keys": [
            "Bắt đầu từ đây"
          ]
        }
      ],
      "ref": "p23"
    },
    {
      "id": "s24",
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
            "text": "⑦ 10:30 · Nghe lại",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Ten thirty"
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
                  "side": "center",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "mobile-phone",
                "memo"
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
            "at": "l1:Ten thirty",
            "caption": "10:30 · bản ghi âm",
            "icon": "mobile-phone"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Mỗi tuần: ghi âm trọn 3 phần",
            "x": 5964,
            "y": 1260,
            "size": 44,
            "at": "l3:record",
            "hl": [
              {
                "text": "ghi âm",
                "at": "l3:record"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Ghi lỗi: cụt, ừm à, ngữ pháp",
            "x": 5964,
            "y": 1340,
            "size": 42,
            "at": "l4:List"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "→ biết ôn bài nào trước",
            "x": 6004,
            "y": 1415,
            "size": 44,
            "at": "l4:lesson",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Ten thirty. Thảo plays back the recording on her phone.",
          "sub": "Mười giờ rưỡi. Thảo mở lại bản ghi âm trên điện thoại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Short answers, long umms, and the same tense mistake again and again!",
          "sub": "Trả lời cụt, ừm à dài, và một lỗi thì lặp đi lặp lại!",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "IDP and British Council agree: each week, record at least one full three-part practice, then listen back.",
          "sub": "IDP và British Council đều khuyên: mỗi tuần ghi âm ít nhất một buổi luyện trọn ba phần, rồi nghe lại.",
          "keys": [
            "ghi âm ít nhất một buổi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "List your usual problems, and you'll know which lesson to study first.",
          "sub": "Ghi lỗi hay gặp, rồi bạn biết nên ôn bài nào trước."
        }
      ],
      "ref": "p24"
    },
    {
      "id": "s25",
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
            "at": "l3",
            "fit": [
              "i-v2"
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
            "id": "i-v2",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
                  "side": "left"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Next Saturday",
            "caption": "Thứ Bảy sau 8:00 · cùng phòng",
            "icon": "speech-balloon"
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "Thứ Bảy sau · 8:00",
            "x": 5964,
            "y": 1530,
            "size": 52,
            "at": "l1:Next Saturday"
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "Đáp · lý do · chi tiết ✓",
            "x": 5964,
            "y": 1620,
            "size": 50,
            "at": "l4:Answer",
            "color": "accent",
            "hl": [
              {
                "text": "✓",
                "at": "l4:detail"
              }
            ]
          },
          {
            "id": "i-6",
            "t": "text",
            "text": "Râu nào đúng cằm nấy",
            "x": 5964,
            "y": 1710,
            "size": 50,
            "at": "l4:beard",
            "hl": [
              {
                "text": "đúng cằm",
                "at": "l4:chin"
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
          "say": "Next Saturday, eight a.m. Same room, same examiner, no script.",
          "sub": "Thứ Bảy tuần sau, tám giờ sáng. Vẫn phòng ấy, giám khảo ấy, không kịch bản."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "What do people in your town do at weekends?",
          "sub": "Người ở quê em làm gì vào cuối tuần?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Most people go to the morning market, because it's lively. Last weekend I had noodles there with my mum.",
          "sub": "Phần lớn mọi người đi chợ sáng, vì vui và đông. Cuối tuần rồi em ăn bún ở đó với mẹ.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Answer, reason, detail. This time, the beard is on the right chin.",
          "sub": "Đáp, lý do, chi tiết. Lần này râu ông nào cắm đúng cằm ông nấy.",
          "keys": [
            "đúng cằm ông nấy"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "My own words. I said it!",
          "sub": "Lời của em. Nói ra rồi!",
          "face": "happy"
        }
      ],
      "ref": "p20,p21"
    },
    {
      "id": "s26",
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
            "at": "l2",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "H",
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
            "id": "j-t",
            "t": "text",
            "text": "Tóm lại: nói thật, nói đủ",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:So"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Làm ngay: ghi âm 3 câu",
            "x": 7932,
            "y": 1290,
            "size": 48,
            "at": "l5:Try",
            "hl": [
              {
                "text": "ghi âm",
                "at": "l5:record"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "mỗi câu: đáp, lý do, chi tiết",
            "x": 7972,
            "y": 1375,
            "size": 44,
            "at": "l5:reason"
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Bài tiếp: Phần 1",
            "x": 7932,
            "y": 1480,
            "size": 50,
            "at": "l6:Next",
            "color": "accent"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 5536,
            "y": 30,
            "at": "l2:reason"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9472,
            "y": 30,
            "at": "l3:four"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5536,
            "y": 1120,
            "at": "l4:ideas"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi học; cấu trúc đề, quy định thi có thể đổi — kiểm lại trang chính thức IELTS. Nhân vật là minh hoạ.",
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
          "say": "So, IELTS Speaking: three parts, a real examiner.",
          "sub": "Tóm lại, phần Nói IELTS: ba phần, một giám khảo thật.",
          "keys": [
            "ba phần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: give a reason and a detail, not just yes or no.",
          "sub": "Một: có lý do và chi tiết, đừng chỉ “Có” hay “Không”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: four equal criteria. Speak clearly instead of copying an accent.",
          "sub": "Hai: bốn tiêu chí ngang nhau. Nói rõ thay vì bắt chước giọng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: prepare ideas by topic, not memorised answers.",
          "sub": "Ba: chuẩn bị ý theo chủ đề, không học thuộc bài mẫu."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: record three part one questions. Each answer gets a reason and a detail.",
          "sub": "Làm ngay: ghi âm ba câu Phần 1. Mỗi câu đáp có lý do và chi tiết.",
          "keys": [
            "ghi âm ba câu Phần 1"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next up: part one, without being too brief.",
          "sub": "Bài tiếp theo: Phần 1, trả lời sao cho không quá ngắn.",
          "keys": [
            "Phần 1"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "You speak well in part two but very briefly elsewhere, what happens?",
        "options": [
          "Your score is raised because the examiner remembers the best answer",
          "Your score reflects average performance across all three parts, so it suffers",
          "Your score is based only on part two, so the short answers do not matter"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "clipboard",
        "why": "Bản mô tả band ghi điểm dựa trên phần thể hiện trung bình qua cả ba phần. Một phần hay không bù được cả buổi nói cụt."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You speak well in part two but very briefly elsewhere, what happens?",
          "sub": "Bạn nói tốt ở Phần 2 nhưng rất cụt ở các phần khác, điều gì xảy ra?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Your score reflects average performance across all three parts, so it suffers.",
          "sub": "Điểm dựa trên phần thể hiện trung bình qua cả ba phần, nên bị kéo xuống."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Every part counts. Keep talking in all three.",
          "sub": "Phần nào cũng tính. Nói đủ ở cả ba phần."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[22]"
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
          "say": "Phone on record, one reason, one detail. Then try the forty questions below.",
          "sub": "Bật ghi âm, một lý do, một chi tiết. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT SÁNG THỨ BẢY THI THỬ NÓI ở lớp Sam (8:00 Thảo ôn mười bài mẫu → 8:30 Phần 1 “Yes, I do.” → “Khoan đã!” tua lại → 8:40 Phần 2·3 → 9:00 bốn tiêu chí → 9:20 band 5·6·7 → 9:40 Dũng giọng Mỹ → 10:00 bài mẫu quê hương lạc đề → 10:30 nghe lại ghi âm → thứ Bảy sau 8:00 khép vòng). Neo mở (HOOK-24): “11–14 phút · 3 phần · 1 giám khảo” (IELTS.org). Nhân vật: Thảo (chính), Sam (giám khảo thi thử), Dũng (em họ) — w145/_series/ielts-speaking-takers.md. Cảnh ngắt nhịp: BRK-08 (một sáng thứ Bảy), BRK-05 (bạn có biết), BRK-07 (rehook giọng Mỹ), BRK-04 (giống bản xứ / dễ hiểu), BRK-11 (lộ trình 4 bài). Ca dao: “Râu ông nọ cắm cằm bà kia”. Câu đố questions[22].",
  "loop": {
    "open": "s01",
    "close": "s25"
  }
};
