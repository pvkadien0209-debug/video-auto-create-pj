// Kịch bản video W lần 3 (#110, #112) — bài tổng "Phỏng vấn bằng tiếng Anh: chuẩn bị những câu nào?" · chuỗi "Trả lời phỏng vấn bằng tiếng Anh"
// Giọng đọc tiếng Anh, phụ đề tiếng Việt; hoạt hình + thẻ. Đủ ý cho 40 câu bài tập.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "english-interview-questions-to-prepare--w01",
  "unit": {
    "audience": "english-interview-candidates",
    "slug": "english-interview-questions-to-prepare",
    "door": "ky-nang",
    "level": "B1",
    "title": "Phỏng vấn bằng tiếng Anh: chuẩn bị những câu nào?",
    "series": "Trả lời phỏng vấn bằng tiếng Anh"
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
            "id": "a-8",
            "t": "text",
            "text": "8 câu hỏi",
            "x": 60,
            "y": 130,
            "size": 170,
            "at": "l1:eight",
            "color": "accent",
            "hl": [
              {
                "text": "8 câu hỏi",
                "at": "l1:questions"
              }
            ]
          },
          {
            "id": "a-8b",
            "t": "text",
            "text": "+ 1 lời cảm ơn",
            "x": 70,
            "y": 360,
            "size": 60,
            "at": "l1:thank"
          },
          {
            "id": "a-any",
            "t": "text",
            "text": "Ta tưởng: xổ số?",
            "x": 70,
            "y": 470,
            "size": 54,
            "at": "l2:lottery",
            "color": "muted"
          },
          {
            "id": "a-anyx",
            "t": "strike",
            "over": "a-any",
            "at": "l2:end"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Eight familiar questions and one thank you: the usual English job interview.",
          "sub": "Tám câu hỏi quen và một lời cảm ơn: buổi phỏng vấn tiếng Anh thường là vậy.",
          "keys": [
            "Tám câu hỏi quen"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet many of us prepare as if it were a lottery.",
          "sub": "Vậy mà nhiều người chuẩn bị như đi xổ số.",
          "keys": [
            "xổ số"
          ]
        }
      ],
      "ref": "intro,p1"
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
            "at": "l4:end",
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
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "think",
                  "face": "worried"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3"
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
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Chủ nhật, 20:00 · phòng khách",
            "icon": "house"
          },
          {
            "id": "a-cd",
            "t": "text",
            "text": "“Biết thì thưa thốt,",
            "x": 70,
            "y": 570,
            "size": 46,
            "at": "l6:know",
            "color": "accent"
          },
          {
            "id": "a-cd2",
            "t": "text",
            "text": "không biết dựa cột mà nghe”",
            "x": 70,
            "y": 630,
            "size": 46,
            "at": "l6:pillar",
            "color": "accent",
            "hl": [
              {
                "text": "dựa cột",
                "at": "l6:pillar"
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
          "say": "Meet Thảo. Sunday, eight p.m.",
          "sub": "Đây là Thảo. Tám giờ tối Chủ nhật."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "My English interview is tomorrow at nine. What do I practise first?",
          "sub": "Chín giờ mai phỏng vấn tiếng Anh rồi. Luyện câu nào trước đây?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Dũng, her friend. His interview last month went badly.",
          "sub": "Còn đây là Dũng, bạn Thảo. Buổi phỏng vấn tháng trước của cậu hỏng bét."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "They asked: Why us? I just sat there, silent.",
          "sub": "Họ hỏi: “Sao lại chọn chỗ chúng tôi?” Mình ngồi im re.",
          "face": "sad"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Grandma says: if you know, speak up. If not, lean on the pillar. Dũng leaned.",
          "sub": "Ông bà dạy: “Biết thì thưa thốt, không biết thì dựa cột mà nghe.” Dũng đã dựa cột.",
          "keys": [
            "dựa cột"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p7"
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
            "text": "Luyện câu nào, thứ tự nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:practise",
            "hl": [
              {
                "text": "thứ tự nào",
                "at": "l1:order"
              }
            ]
          },
          {
            "id": "b-both",
            "t": "text",
            "text": "Họ nghe: ý + tiếng Anh",
            "x": 2028,
            "y": 160,
            "size": 52,
            "at": "l2:ideas",
            "hl": [
              {
                "text": "tiếng Anh",
                "at": "l2:English"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: thuộc từng chữ",
            "x": 2028,
            "y": 260,
            "size": 54,
            "at": "l3:word",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:freeze"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: mỗi câu một khung",
            "x": 2028,
            "y": 350,
            "size": 56,
            "at": "l3:frame",
            "color": "accent",
            "hl": [
              {
                "text": "một khung",
                "at": "l3:short frame"
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
          "say": "So what should Thảo practise, and in what order?",
          "sub": "Vậy Thảo nên luyện câu nào, theo thứ tự nào?",
          "keys": [
            "theo thứ tự nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "They hear your ideas, and how clear your English is.",
          "sub": "Họ nghe ý của bạn, và tiếng Anh có mạch lạc không.",
          "keys": [
            "mạch lạc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Learn it word by word, and one lost word makes you freeze. Keep a short frame instead.",
          "sub": "Thuộc từng chữ thì quên một từ là đứng hình. Hãy nhớ một khung ngắn.",
          "keys": [
            "một khung ngắn"
          ]
        }
      ],
      "ref": "p2"
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
            "id": "b-map",
            "t": "text",
            "text": "Bản đồ: sáng thứ Hai",
            "x": 2028,
            "y": 450,
            "size": 52,
            "at": "l1:map",
            "hl": [
              {
                "text": "sáng thứ Hai",
                "at": "l1:Monday"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 560,
            "w": 185,
            "h": 90,
            "at": "l1:map+600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2233,
            "y": 560,
            "w": 185,
            "h": 90,
            "at": "l1:map+850",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2438,
            "y": 560,
            "w": 185,
            "h": 90,
            "at": "l1:map+1100",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2643,
            "y": 560,
            "w": 185,
            "h": 90,
            "at": "l1:map+1350",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2848,
            "y": 560,
            "w": 185,
            "h": 90,
            "at": "l1:map+1600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3053,
            "y": 560,
            "w": 185,
            "h": 90,
            "at": "l1:map+1850",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3258,
            "y": 560,
            "w": 185,
            "h": 90,
            "at": "l1:map+2100",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d7",
            "t": "box",
            "x": 3463,
            "y": 560,
            "w": 185,
            "h": 90,
            "at": "l1:map+2350",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "9:00",
            "x": 2046,
            "y": 575,
            "size": 46,
            "at": "l1:map+720"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "9:05",
            "x": 2251,
            "y": 575,
            "size": 46,
            "at": "l1:map+970"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "9:15",
            "x": 2456,
            "y": 575,
            "size": 46,
            "at": "l1:map+1220"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "9:25",
            "x": 2661,
            "y": 575,
            "size": 46,
            "at": "l1:map+1470"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "9:35",
            "x": 2866,
            "y": 575,
            "size": 46,
            "at": "l1:map+1720"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "9:40",
            "x": 3071,
            "y": 575,
            "size": 46,
            "at": "l1:map+1970"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "9:50",
            "x": 3276,
            "y": 575,
            "size": 46,
            "at": "l1:map+2220"
          },
          {
            "id": "b-dt7",
            "t": "text",
            "text": "20:00",
            "x": 3481,
            "y": 575,
            "size": 40,
            "at": "l1:map+2470"
          },
          {
            "id": "b-mid",
            "t": "text",
            "text": "Giữa buổi: mỗi nơi một kiểu",
            "x": 2028,
            "y": 690,
            "size": 40,
            "at": "l2:middle",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Here is the map: one Monday morning, in the order questions usually come.",
          "sub": "Bản đồ đây: một sáng thứ Hai, theo thứ tự câu hỏi thường đến.",
          "keys": [
            "một sáng thứ Hai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Only the middle changes order. Same dishes, new menu.",
          "sub": "Chỉ phần giữa mỗi nơi xếp một kiểu: món vẫn thế, đổi thực đơn.",
          "keys": [
            "món vẫn thế"
          ]
        }
      ],
      "ref": "p1,intro"
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
            "at": "l4:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 9:00 · Tell me about yourself",
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
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:room",
            "caption": "Thứ Hai, 9:00 · phòng phỏng vấn",
            "icon": "office-building"
          },
          {
            "id": "c-1m",
            "t": "text",
            "text": "~1 phút · 3 phần",
            "x": 3996,
            "y": 170,
            "size": 60,
            "at": "l5:minute",
            "color": "accent",
            "hl": [
              {
                "text": "~1 phút",
                "at": "l5:minute"
              }
            ]
          },
          {
            "id": "c-p",
            "t": "text",
            "text": "Hiện tại → Quá khứ → Tương lai",
            "x": 3996,
            "y": 270,
            "size": 48,
            "at": "l5:present"
          },
          {
            "id": "c-r",
            "t": "text",
            "text": "+ 1 kết quả cụ thể",
            "x": 3996,
            "y": 350,
            "size": 48,
            "at": "l6:result",
            "hl": [
              {
                "text": "kết quả cụ thể",
                "at": "l6:result"
              }
            ]
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Câu cuối: riêng từng nơi",
            "x": 3996,
            "y": 430,
            "size": 46,
            "at": "l6:last line",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: nine a.m., the interview room.",
          "sub": "Chặng một: chín giờ sáng, phòng phỏng vấn.",
          "keys": [
            "chín giờ sáng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Cô Hoa, the interviewer. Her first question is almost always this.",
          "sub": "Đây là cô Hoa, người phỏng vấn. Câu đầu gần như luôn là câu này."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "So, tell me about yourself.",
          "sub": "Vậy, em giới thiệu về bản thân nhé.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I'm currently a sales executive at a furniture company.",
          "sub": "Hiện em là nhân viên kinh doanh ở một công ty nội thất.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "About one minute, in three parts: present, past, future.",
          "sub": "Khoảng một phút, ba phần: hiện tại, quá khứ, tương lai.",
          "keys": [
            "Khoảng một phút"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Add one real result, and write the last line fresh for each company.",
          "sub": "Thêm một kết quả cụ thể, và câu cuối viết riêng cho từng công ty.",
          "keys": [
            "một kết quả cụ thể"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p3"
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
            "id": "c-d",
            "t": "text",
            "text": "Dũng, tháng trước:",
            "x": 3996,
            "y": 520,
            "size": 44,
            "at": "l1:last month",
            "color": "muted"
          },
          {
            "id": "c-bio",
            "t": "text",
            "text": "“My name is… Nam Định…”",
            "x": 3996,
            "y": 580,
            "size": 44,
            "at": "l1:born",
            "color": "muted"
          },
          {
            "id": "c-biox",
            "t": "strike",
            "over": "c-bio",
            "at": "l2:work"
          },
          {
            "id": "c-cut",
            "t": "text",
            "text": "“Let's talk about your work.”",
            "x": 4836,
            "y": 690,
            "size": 40,
            "at": "l2:talk",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Last month Dũng began: My name is Dũng, I was born in Nam Định...",
          "sub": "Tháng trước Dũng mở màn: “Em tên Dũng, quê Nam Định…”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Polite cut: Let's talk about your work. Empty.",
          "sub": "Bị cắt ngang: “Nói về công việc nhé.” Trống trơn."
        }
      ],
      "ref": "p4"
    },
    {
      "id": "s05b",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Hỏi về bạn, nghe công việc",
        "hl": "nghe công việc",
        "sub": "Họ hỏi về bạn, nhưng muốn nghe về công việc của bạn"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "They ask about you.",
          "sub": "Họ hỏi về bạn."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "But they want to hear about your work.",
          "sub": "Nhưng muốn nghe về công việc của bạn."
        }
      ],
      "ref": "p5"
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
            "at": "a1",
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
          },
          {
            "at": "b1",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "b2:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 9:05 · Why this job?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:five"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "dung"
                },
                {
                  "id": "thao"
                }
              ],
              "left": {
                "label": "Dũng: khen chung",
                "ok": false
              },
              "right": {
                "label": "Thảo: chi tiết thật",
                "ok": true
              }
            },
            "at": "l1:job",
            "caption": "Cùng câu hỏi, hai cách",
            "icon": "light-bulb"
          },
          {
            "id": "d-a",
            "t": "text",
            "text": "“famous… good environment”",
            "x": 5964,
            "y": 170,
            "size": 46,
            "at": "a1:famous",
            "color": "muted"
          },
          {
            "id": "d-ax",
            "t": "strike",
            "over": "d-a",
            "at": "l4:hear"
          },
          {
            "id": "d-why",
            "t": "text",
            "text": "→ “Why us?”",
            "x": 5964,
            "y": 250,
            "size": 50,
            "at": "a2:why us",
            "color": "coral"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "1. Thích gì ở công việc",
            "x": 5964,
            "y": 360,
            "size": 48,
            "at": "b1:first",
            "hl": [
              {
                "text": "Thích",
                "at": "b1:enjoy"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "2. Chi tiết thật về công ty",
            "x": 5964,
            "y": 430,
            "size": 48,
            "at": "b2:second",
            "hl": [
              {
                "text": "Chi tiết thật",
                "at": "b2:showroom"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "3. Hợp nhu cầu của họ",
            "x": 5964,
            "y": 500,
            "size": 48,
            "at": "l6:need"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: nine oh five. Why do you want this job?",
          "sub": "Chặng hai: chín giờ năm. “Vì sao em muốn làm việc này?”",
          "keys": [
            "chín giờ năm"
          ]
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "dung",
          "say": "Because your company is famous and has a good environment.",
          "sub": "Vì công ty mình nổi tiếng và môi trường tốt ạ.",
          "phase": "a",
          "face": "happy"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "hoa",
          "say": "Many companies do. Why us?",
          "sub": "Nhiều công ty cũng vậy. Sao lại là chỗ chúng tôi?",
          "phase": "a"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "They hear that praise all day. Then, silence.",
          "sub": "Lời khen ấy họ nghe cả ngày. Rồi là im lặng.",
          "keys": [
            "im lặng"
          ]
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "thao",
          "say": "First, I really enjoy looking after business clients.",
          "sub": "Thứ nhất, em rất thích chăm sóc khách doanh nghiệp.",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "thao",
          "say": "Second, I saw your new showroom for office furniture. That's my market.",
          "sub": "Thứ hai, em thấy showroom nội thất văn phòng mới của mình, đúng mảng em rành.",
          "phase": "b"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And finally, why she fits their need. Those three words keep her on track.",
          "sub": "Cuối cùng, vì sao cô hợp nhu cầu của họ. “First… Second… And finally…” giữ cô đúng đường.",
          "keys": [
            "First… Second… And finally…"
          ]
        }
      ],
      "ref": "p6,p7"
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
            "id": "d-pay",
            "t": "text",
            "text": "Lương, gần nhà: đừng xếp đầu",
            "x": 5964,
            "y": 600,
            "size": 42,
            "at": "l1:salary",
            "color": "muted"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Khen chung → không ai nhớ",
            "x": 5964,
            "y": 680,
            "size": 54,
            "at": "l2:anyone",
            "color": "accent",
            "hl": [
              {
                "text": "không ai nhớ",
                "at": "l2:nobody"
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
          "say": "Salary or a short commute? Normal, just not the main reason.",
          "sub": "Lương hay gần nhà? Bình thường, chỉ đừng để thành lý do chính.",
          "keys": [
            "lý do chính"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Praise anyone could say is praise nobody remembers.",
          "sub": "Câu khen ai cũng nói được thì không ai nhớ.",
          "keys": [
            "không ai nhớ"
          ]
        }
      ],
      "ref": "p6,p8"
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
            "at": "l4:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 9:15 · Điểm yếu, 5 năm",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:fifteen"
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
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "9:15 · giữa buổi",
            "icon": "thinking-face"
          },
          {
            "id": "e-no",
            "t": "text",
            "text": "“I don't have any weaknesses”",
            "x": 7932,
            "y": 170,
            "size": 44,
            "at": "l3:any",
            "color": "muted"
          },
          {
            "id": "e-nox",
            "t": "strike",
            "over": "e-no",
            "at": "l3:self"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "1 câu điểm yếu thật",
            "x": 7932,
            "y": 260,
            "size": 52,
            "at": "l6:sentence",
            "hl": [
              {
                "text": "điểm yếu thật",
                "at": "l6:real"
              }
            ]
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "+ 3 câu cách cải thiện",
            "x": 7932,
            "y": 340,
            "size": 52,
            "at": "l6:three",
            "color": "accent",
            "hl": [
              {
                "text": "3 câu",
                "at": "l6:three"
              }
            ]
          },
          {
            "id": "e-nk",
            "t": "text",
            "text": "≠ kỹ năng chính của vị trí",
            "x": 7932,
            "y": 420,
            "size": 40,
            "at": "l6:key skill",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: nine fifteen, the middle.",
          "sub": "Chặng ba: chín giờ mười lăm, giữa buổi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "What is your greatest weakness?",
          "sub": "Điểm yếu lớn nhất của em là gì?",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Never say: I don't have any. It shows no self awareness.",
          "sub": "Đừng nói “em không có điểm yếu”: nghe như thiếu tự nhận thức.",
          "keys": [
            "thiếu tự nhận thức"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I tend to say yes to every request. Now I check my priorities first.",
          "sub": "Em hay nhận lời mọi việc. Giờ em xem việc ưu tiên trước đã.",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "One sentence on a real weakness, not a key skill. Three on how you improve.",
          "sub": "Một câu về điểm yếu thật, không phải kỹ năng chính; ba câu về cách cải thiện.",
          "keys": [
            "ba câu về cách cải thiện"
          ]
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s09",
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
            "id": "e-5",
            "t": "text",
            "text": "5 năm: kỹ năng, trách nhiệm",
            "x": 7932,
            "y": 520,
            "size": 46,
            "at": "l1:five years",
            "hl": [
              {
                "text": "5 năm",
                "at": "l1:five years"
              }
            ]
          },
          {
            "id": "e-will",
            "t": "text",
            "text": "will, will…",
            "x": 7932,
            "y": 600,
            "size": 44,
            "at": "l2:will",
            "color": "muted"
          },
          {
            "id": "e-willx",
            "t": "strike",
            "over": "e-will",
            "at": "l2:swap+400"
          },
          {
            "id": "e-like",
            "t": "text",
            "text": "→ “I'd like to…”",
            "x": 8212,
            "y": 600,
            "size": 44,
            "at": "l2:like",
            "color": "accent"
          },
          {
            "id": "e-abr",
            "t": "text",
            "text": "Du học? Giữ cho riêng mình",
            "x": 7932,
            "y": 680,
            "size": 42,
            "at": "l3:abroad",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Five years from now? A skill, more responsibility, and why this company.",
          "sub": "Năm năm tới? Một kỹ năng, thêm trách nhiệm, và vì sao là nơi này.",
          "keys": [
            "Năm năm tới"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Swap will, will, will for I'd like to.",
          "sub": "Thay “will” liên tục bằng “I'd like to…”.",
          "keys": [
            "I'd like to…"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Plans to leave, like studying abroad? Keep them to yourself.",
          "sub": "Định rời đi, như du học? Giữ cho riêng mình."
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s10",
      "module": "BRK-07",
      "data": {
        "question": "Đùa “Maybe I'll have your job!” thì sao?",
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
          "say": "What if you joke: Maybe I'll have your job?",
          "sub": "Nếu đùa: “Có khi em sẽ ngồi ghế của chị” thì sao?"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
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
          }
        ],
        "items": [
          {
            "id": "e-k",
            "t": "text",
            "text": "Nói con đường, đừng nhắm ghế",
            "x": 8772,
            "y": 690,
            "size": 42,
            "at": "l3:path",
            "color": "accent",
            "hl": [
              {
                "text": "con đường",
                "at": "l3:path"
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
          "say": "Dũng tried it, facing his future manager. Instant chill: a guide turned rival.",
          "sub": "Dũng thử rồi, trước mặt trưởng phòng tương lai. Lạnh toát: người dẫn dắt hoá đối thủ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Better: I'd like to be leading small projects by then.",
          "sub": "Nói thế này hơn: “Lúc đó em muốn dẫn dắt vài dự án nhỏ.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Talk about your path, not the seat of the person asking.",
          "sub": "Nói về con đường, đừng nhắm vào ghế của người hỏi.",
          "keys": [
            "Nói về con đường"
          ]
        }
      ],
      "ref": "p11,p12"
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
            "at": "l2:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 9:25 · Mức lương",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:twenty"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-07",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "9:25 · câu khó nói nhất",
            "icon": "money-bag"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "☐ Tìm hiểu mặt bằng trước",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l3:research"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "☐ Một khoảng, không quá rộng",
            "x": 60,
            "y": 1330,
            "size": 46,
            "at": "l3:narrow"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "☐ Mức thấp ≈ mức mong muốn",
            "x": 60,
            "y": 1400,
            "size": 46,
            "at": "l3:low end"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "☐ Ghi rõ gross hay net",
            "x": 60,
            "y": 1470,
            "size": 46,
            "at": "l4:gross",
            "hl": [
              {
                "text": "gross hay net",
                "at": "l4:net"
              }
            ]
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "“open to… the full package”",
            "x": 60,
            "y": 1550,
            "size": 44,
            "at": "l4:open",
            "color": "accent"
          },
          {
            "id": "f-6",
            "t": "text",
            "text": "Mức thấp hơn? Hỏi phúc lợi",
            "x": 60,
            "y": 1620,
            "size": 44,
            "at": "l5:lower",
            "color": "muted",
            "hl": [
              {
                "text": "phúc lợi",
                "at": "l5:benefits"
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
          "say": "Fourth stop: nine twenty-five. The question everyone fears.",
          "sub": "Chặng bốn: chín giờ hai lăm. Câu ai cũng ngại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "What are your salary expectations?",
          "sub": "Em mong muốn mức lương bao nhiêu?",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Research first. Give a narrow range, the low end close to what you want.",
          "sub": "Tìm hiểu trước. Đưa một khoảng không quá rộng, mức thấp gần mức bạn muốn.",
          "keys": [
            "một khoảng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Say gross or net, and add: I'm open to discussing the full package.",
          "sub": "Nói rõ gross hay net, thêm: “I'm open to discussing the full package.”",
          "keys": [
            "gross hay net"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A lower offer? Don't refuse yet. Ask about bonuses and benefits.",
          "sub": "Họ đưa thấp hơn? Đừng vội từ chối, hỏi về thưởng và phúc lợi.",
          "keys": [
            "thưởng và phúc lợi"
          ]
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s13",
      "module": "BRK-04",
      "data": {
        "title": "Được hỏi mức lương",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Mức nào anh chị thấy hợp lý cũng được",
        "right": "Khoảng X đến Y gross mỗi tháng, bàn cả gói",
        "wrongIllus": "woman-shrugging",
        "rightIllus": "money-bag"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: Whatever you think is fair.",
          "sub": "Trước: “Mức nào anh chị thấy hợp lý cũng được.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: X to Y gross, open to the package.",
          "sub": "Sau: khoảng X đến Y gross, sẵn lòng bàn cả gói."
        }
      ],
      "ref": "p14"
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
            "id": "f-hum",
            "t": "text",
            "text": "Khiêm tốn → họ tự chọn số",
            "x": 60,
            "y": 1710,
            "size": 44,
            "at": "l1:humble",
            "color": "muted"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Không nói số → người khác nói",
            "x": 60,
            "y": 1780,
            "size": 50,
            "at": "l2:someone",
            "color": "accent",
            "hl": [
              {
                "text": "người khác nói",
                "at": "l2:someone"
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
          "say": "The first sounds humble, but the company picks the number.",
          "sub": "Bản đầu nghe khiêm tốn, nhưng công ty tự chọn số, ghi thấp thì khó đòi lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "If you don't give a number, someone else will give it for you.",
          "sub": "Bạn không nói con số, người khác sẽ nói thay bạn.",
          "keys": [
            "người khác sẽ nói thay bạn"
          ]
        }
      ],
      "ref": "p14,p15"
    },
    {
      "id": "s15",
      "module": "DLG-01",
      "data": {
        "set": "meeting",
        "label": "9:35 · câu hỏi bất ngờ",
        "actors": [
          {
            "id": "hoa",
            "side": "left",
            "pose": "hold"
          },
          {
            "id": "thao",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Nói như đã biết",
          "why": "Một câu hỏi tiếp như “Which feature do you use most?” là lộ, cả những câu trả lời tốt khác cũng bị nghi ngờ.",
          "rule": "Không biết thì nói cách sẽ biết"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "Have you used this reporting tool?",
          "sub": "Em đã dùng công cụ báo cáo này chưa?",
          "face": "neutral"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Yes, I've used it a lot.",
          "sub": "Dạ, em dùng nhiều rồi ạ.",
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
          "say": "She only knows its name. One follow-up, and it falls apart.",
          "sub": "Cô mới nghe tên thôi. Một câu hỏi tiếp là lộ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind!",
          "sub": "Tua lại!",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Let me think about that for a moment.",
          "sub": "Cho em nghĩ một chút ạ.",
          "phase": "redo",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "thao",
          "say": "I haven't used that tool yet, but I use a similar one every week.",
          "sub": "Em chưa dùng công cụ đó, nhưng tuần nào em cũng dùng một công cụ tương tự.",
          "phase": "redo",
          "pose": "explain",
          "face": "happy",
          "react": {
            "hoa": "happy"
          }
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "sfx": [
        {
          "at": "l3",
          "key": "whoosh"
        }
      ],
      "ref": "p22,p23"
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
            "text": "⑤ 9:35 · Bí ý giữa chừng",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:blank"
          },
          {
            "id": "g-pause",
            "t": "illus",
            "name": "stopwatch",
            "x": 2028,
            "y": 1250,
            "size": 90,
            "at": "l1:pause"
          },
          {
            "id": "g-p",
            "t": "text",
            "text": "Dừng vài giây: bình thường",
            "x": 2138,
            "y": 1265,
            "size": 50,
            "at": "l1:normal",
            "hl": [
              {
                "text": "bình thường",
                "at": "l1:normal"
              }
            ]
          },
          {
            "id": "g-lt",
            "t": "text",
            "text": "“Let me think about that…”",
            "x": 2028,
            "y": 1370,
            "size": 48,
            "at": "l1:say so",
            "color": "accent"
          },
          {
            "id": "g-rp",
            "t": "text",
            "text": "Nhắc lại câu hỏi · hỏi rõ",
            "x": 2028,
            "y": 1450,
            "size": 48,
            "at": "l2:repeat",
            "hl": [
              {
                "text": "hỏi rõ",
                "at": "l2:clarify"
              }
            ]
          },
          {
            "id": "g-tut",
            "t": "text",
            "text": "+ cách sẽ học: video ngắn",
            "x": 2028,
            "y": 1550,
            "size": 48,
            "at": "l3:tutorials"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Không biết → nói cách sẽ biết",
            "x": 2028,
            "y": 1730,
            "size": 58,
            "at": "l4:find out",
            "color": "accent",
            "hl": [
              {
                "text": "cách sẽ biết",
                "at": "l4:find out"
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
          "say": "Mind gone blank? A short pause is normal, if you say so first.",
          "sub": "Bí ý giữa chừng? Dừng vài giây là bình thường, miễn báo trước.",
          "keys": [
            "bình thường"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Or repeat the question, or ask them to clarify.",
          "sub": "Hoặc nhắc lại câu hỏi, hay xin làm rõ.",
          "keys": [
            "xin làm rõ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Thảo adds how she learns: short online tutorials.",
          "sub": "Thảo nói thêm cách cô học: video hướng dẫn ngắn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Don't know? Say how you'll find out. Don't talk as if you know.",
          "sub": "Không biết thì nói cách sẽ biết, đừng nói như đã biết.",
          "keys": [
            "nói cách sẽ biết"
          ]
        }
      ],
      "ref": "p22,p23,p24"
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
            "at": "l2:end",
            "fit": "H",
            "ms": 700
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
            "at": "l5:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 9:40 · Kể chuyện, chọn bạn",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:forty"
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
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "9:40 · gần cuối buổi",
            "icon": "trophy"
          },
          {
            "id": "h-s",
            "t": "text",
            "text": "S · T · A · R",
            "x": 3996,
            "y": 1250,
            "size": 80,
            "at": "l3:STAR",
            "color": "accent"
          },
          {
            "id": "h-a",
            "t": "text",
            "text": "Hành động dài nhất · “I”",
            "x": 3996,
            "y": 1360,
            "size": 46,
            "at": "l3:action",
            "hl": [
              {
                "text": "dài nhất",
                "at": "l3:longest"
              }
            ]
          },
          {
            "id": "h-ps",
            "t": "text",
            "text": "+ quá khứ đơn",
            "x": 3996,
            "y": 1430,
            "size": 46,
            "at": "l3:past"
          },
          {
            "id": "h-w",
            "t": "text",
            "text": "2–3 điểm mạnh + bằng chứng",
            "x": 3996,
            "y": 1540,
            "size": 46,
            "at": "l6:strengths",
            "hl": [
              {
                "text": "bằng chứng",
                "at": "l6:evidence"
              }
            ]
          },
          {
            "id": "h-c",
            "t": "text",
            "text": "Đừng so với người khác",
            "x": 3996,
            "y": 1620,
            "size": 46,
            "at": "l6:compare",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: nine forty. Two questions near the end.",
          "sub": "Chặng sáu: chín giờ bốn mươi. Hai câu gần cuối."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Tell me about a time you solved a difficult problem.",
          "sub": "Kể chị nghe một lần em giải quyết việc khó.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A real story, you as the hero, in STAR. The action is longest, with I and the past simple.",
          "sub": "Một chuyện thật, bạn là vai chính, theo STAR. Hành động dài nhất, kể bằng “I”, quá khứ đơn.",
          "keys": [
            "Hành động dài nhất"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "And why should we hire you?",
          "sub": "Còn vì sao chúng tôi nên chọn em?",
          "face": "neutral"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "I think I'd be a strong fit for three reasons.",
          "sub": "Em nghĩ em rất hợp, vì ba lý do.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Two or three strengths from the job ad, each with evidence. Never compare yourself with others.",
          "sub": "Hai ba điểm mạnh khớp mô tả công việc, mỗi điểm một bằng chứng. Đừng so mình với ứng viên khác.",
          "keys": [
            "mỗi điểm một bằng chứng"
          ]
        }
      ],
      "ref": "p16,p17"
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
            "at": "l1",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 9:50 · Lượt bạn hỏi",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l0:turn"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-10",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
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
            "at": "l0",
            "caption": "9:50 · lượt của Thảo",
            "icon": "red-question-mark"
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "Chuẩn bị ~5 câu, hỏi 2–3",
            "x": 5964,
            "y": 1260,
            "size": 52,
            "at": "l4:five",
            "hl": [
              {
                "text": "~5 câu",
                "at": "l4:five"
              }
            ]
          },
          {
            "id": "i-wr",
            "t": "text",
            "text": "what does a day look",
            "x": 5964,
            "y": 1350,
            "size": 44,
            "at": "l5:not",
            "color": "muted"
          },
          {
            "id": "i-wrx",
            "t": "strike",
            "over": "i-wr",
            "at": "l5:not+600"
          },
          {
            "id": "i-ok",
            "t": "text",
            "text": "what a day looks like",
            "x": 5964,
            "y": 1420,
            "size": 48,
            "at": "l5:subject",
            "color": "accent",
            "hl": [
              {
                "text": "a day looks",
                "at": "l5:verb"
              }
            ]
          },
          {
            "id": "i-sv",
            "t": "text",
            "text": "chủ ngữ trước động từ",
            "x": 5964,
            "y": 1500,
            "size": 42,
            "at": "l5:verb",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l0",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: nine fifty. Your turn.",
          "sub": "Chặng bảy: chín giờ năm mươi. Đến lượt bạn."
        },
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "Do you have any questions for us?",
          "sub": "Em có câu hỏi nào cho chúng tôi không?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Could you tell me what a typical day looks like in this role?",
          "sub": "Chị cho em biết một ngày làm việc điển hình ở vị trí này thế nào ạ?",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Prepare about five open questions, ask two or three.",
          "sub": "Chuẩn bị khoảng năm câu hỏi mở, hỏi hai ba câu.",
          "keys": [
            "khoảng năm câu hỏi mở"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Not what does a day look like. After Could you tell me, the subject comes before the verb.",
          "sub": "Không dùng “what does…”: sau “Could you tell me”, chủ ngữ đứng trước động từ.",
          "keys": [
            "chủ ngữ đứng trước động từ"
          ]
        }
      ],
      "ref": "p18"
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
          }
        ],
        "items": [
          {
            "id": "i-np",
            "t": "text",
            "text": "“Notice period?” → “3 years”",
            "x": 5964,
            "y": 1610,
            "size": 44,
            "at": "l1:guessed",
            "color": "coral"
          },
          {
            "id": "i-npx",
            "t": "strike",
            "over": "i-np",
            "at": "l2:means"
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Không biết từ → hỏi từ đó",
            "x": 5964,
            "y": 1700,
            "size": 52,
            "at": "l2:exactly",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi từ đó",
                "at": "l2:exactly"
              }
            ]
          },
          {
            "id": "i-bye",
            "t": "text",
            "text": "10:00 · cảm ơn + 1 chi tiết",
            "x": 6804,
            "y": 1780,
            "size": 40,
            "at": "l3:ten",
            "hl": [
              {
                "text": "1 chi tiết",
                "at": "l3:detail"
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
          "say": "Dũng heard notice period on the phone, and guessed: Maybe three years.",
          "sub": "Phỏng vấn qua điện thoại, Dũng nghe “notice period” rồi đoán: “Chắc ba năm ạ.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It means warning time before leaving a job. So ask about exactly that word.",
          "sub": "Nghĩa là thời gian báo trước khi nghỉ việc. Không biết từ nào, hỏi đúng từ đó.",
          "keys": [
            "hỏi đúng từ đó"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "At ten, Thảo leaves with thanks, one detail from the talk, and hope to hear back.",
          "sub": "Mười giờ, Thảo chào: cảm ơn, một chi tiết trong buổi, và mong được phản hồi.",
          "keys": [
            "một chi tiết"
          ]
        }
      ],
      "ref": "p19,p20,p21"
    },
    {
      "id": "s20",
      "module": "BRK-10",
      "data": {
        "quote": "Không biết thì nói cách sẽ biết, đừng nói như đã biết",
        "mark": "nói cách sẽ biết",
        "by": "Rút ra của buổi sáng",
        "illus": "light-bulb"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "If you don't know, say how you'll find out.",
          "sub": "Không biết thì nói cách sẽ biết."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The lesson of the morning.",
          "sub": "Bài học của buổi sáng."
        }
      ],
      "ref": "p24"
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
            "at": "l2:end",
            "fit": "J",
            "ms": 700
          },
          {
            "at": "l4",
            "fit": [
              "j-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Thứ Hai, 20:00 · phòng khách",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:living"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "phone",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right"
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
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai, 20:00 · phòng khách",
            "icon": "e-mail"
          },
          {
            "id": "j-m",
            "t": "text",
            "text": "Email ngắn trong 1 ngày",
            "x": 7932,
            "y": 1260,
            "size": 50,
            "at": "l3:one day",
            "hl": [
              {
                "text": "trong 1 ngày",
                "at": "l3:one day"
              }
            ]
          },
          {
            "id": "j-m2",
            "t": "text",
            "text": "1 chi tiết · không hỏi kết quả",
            "x": 7932,
            "y": 1340,
            "size": 44,
            "at": "l3:result",
            "color": "muted"
          },
          {
            "id": "j-on",
            "t": "text",
            "text": "Online: chờ họ chào trước",
            "x": 7932,
            "y": 1410,
            "size": 44,
            "at": "l3:online",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Monday, eight p.m. Same living room, same hour as last night.",
          "sub": "Tám giờ tối thứ Hai. Vẫn phòng khách ấy, đúng giờ tối qua.",
          "keys": [
            "Vẫn phòng khách ấy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "A short thank you email, with one detail about the showroom. Sent!",
          "sub": "Email cảm ơn ngắn, nhắc chuyện showroom. Gửi!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Within one day, one detail, no asking about the result. Online? Wait for their goodbye.",
          "sub": "Trong vòng một ngày, một chi tiết, không hỏi kết quả. Online thì chờ họ chào trước.",
          "keys": [
            "Trong vòng một ngày"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "My interview is next week. What do I prepare?",
          "sub": "Tuần sau tới lượt mình. Chuẩn bị gì đây?",
          "face": "worried"
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
            "fit": "J",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1490,
            "w": 40,
            "h": 40,
            "at": "l1:three",
            "stroke": 4
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1474,
            "size": 50,
            "at": "l1:three+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Ba dòng giới thiệu",
            "x": 7992,
            "y": 1486,
            "size": 38,
            "at": "l1:three+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1548,
            "w": 40,
            "h": 40,
            "at": "l1:company",
            "stroke": 4
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1532,
            "size": 50,
            "at": "l1:company+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "1 chi tiết thật về công ty",
            "x": 7992,
            "y": 1544,
            "size": 38,
            "at": "l1:company+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1606,
            "w": 40,
            "h": 40,
            "at": "l2:weakness",
            "stroke": 4
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1590,
            "size": 50,
            "at": "l2:weakness+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "1 điểm yếu + cách cải thiện",
            "x": 7992,
            "y": 1602,
            "size": 38,
            "at": "l2:weakness+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1664,
            "w": 40,
            "h": 40,
            "at": "l2:range",
            "stroke": 4
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1648,
            "size": 50,
            "at": "l2:range+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Hướng 5 năm · khoảng lương",
            "x": 7992,
            "y": 1660,
            "size": 38,
            "at": "l2:range+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1722,
            "w": 40,
            "h": 40,
            "at": "l3:stories",
            "stroke": 4
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1706,
            "size": 50,
            "at": "l3:stories+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "2–3 chuyện STAR, điểm mạnh",
            "x": 7992,
            "y": 1718,
            "size": 38,
            "at": "l3:stories+200"
          },
          {
            "id": "j-c5",
            "t": "box",
            "x": 7932,
            "y": 1780,
            "w": 40,
            "h": 40,
            "at": "l3:questions",
            "stroke": 4
          },
          {
            "id": "j-k5",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1764,
            "size": 50,
            "at": "l3:questions+600",
            "color": "accent"
          },
          {
            "id": "j-l5",
            "t": "text",
            "text": "5 câu hỏi · nháp email",
            "x": 7992,
            "y": 1776,
            "size": 38,
            "at": "l3:questions+200"
          },
          {
            "id": "j-rec",
            "t": "text",
            "text": "Ghi âm, nghe lại, bấm giờ",
            "x": 8772,
            "y": 1780,
            "size": 42,
            "at": "l4:record",
            "hl": [
              {
                "text": "bấm giờ",
                "at": "l4:time"
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
          "say": "Thảo writes him a list. Three intro lines. One real company detail.",
          "sub": "Thảo viết cho cậu một danh sách. Ba dòng giới thiệu. Một chi tiết thật về công ty."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A weakness with its fix. A five year path. A salary range, gross or net.",
          "sub": "Một điểm yếu kèm cách cải thiện. Hướng năm năm, khoảng lương ghi rõ gross hay net."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two or three STAR stories and strengths. Five questions, and a draft thank you.",
          "sub": "Hai ba chuyện STAR, điểm mạnh. Năm câu hỏi, và bản nháp thư cảm ơn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Record and time it: about a minute for the intro, two for a story. Keywords only.",
          "sub": "Ghi âm, bấm giờ: giới thiệu một đến phút rưỡi, chuyện STAR tới hai phút. Chỉ ghi từ khoá.",
          "keys": [
            "Ghi âm, bấm giờ"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "No more leaning on the pillar!",
          "sub": "Hết dựa cột nhé!",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "If you know, speak up. This time, Dũng will know.",
          "sub": "“Biết thì thưa thốt.” Lần này Dũng sẽ biết.",
          "keys": [
            "Biết thì thưa thốt"
          ]
        }
      ],
      "ref": "p25,p26"
    },
    {
      "id": "s23",
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
            "at": "l1:frame",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l2:detail",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:find out",
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
            "x": 3468,
            "y": 300,
            "at": "l1:frame"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6664,
            "y": 420,
            "at": "l2:detail"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3468,
            "y": 1690,
            "at": "l3:find out"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; quy trình mỗi công ty một khác.",
            "x": 7932,
            "y": 1830,
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
          "say": "So: familiar questions, familiar order. Each gets a short frame, not a script.",
          "sub": "Tóm lại: câu hỏi quen, thứ tự quen. Mỗi câu một khung ngắn, không phải kịch bản.",
          "keys": [
            "Mỗi câu một khung ngắn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One real detail beats ten compliments.",
          "sub": "Một chi tiết thật thắng mười lời khen.",
          "keys": [
            "Một chi tiết thật"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And when you don't know, say how you'll find out.",
          "sub": "Và khi không biết, hãy nói cách sẽ biết.",
          "keys": [
            "nói cách sẽ biết"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p8,p24"
    },
    {
      "id": "s37",
      "module": "QUIZ-01",
      "ref": "questions[33]",
      "data": {
        "q": "A hard question leaves your mind empty, what should you do first?",
        "options": [
          "Say let me think about that for a moment, then really pause",
          "Look down at the table and stay silent until you are ready",
          "Fill the silence with um and er until an idea finally comes"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "thinking-face",
        "why": "Dừng vài giây để nghĩ là bình thường, miễn là báo trước. Im lặng không báo dễ bị hiểu là đứng hình."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A hard question leaves your mind empty, what should you do first?",
          "sub": "Một câu hỏi khó khiến đầu bạn trống rỗng, bạn nên làm gì trước?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Say let me think about that for a moment, then really pause.",
          "sub": "Nói “Let me think about that for a moment”, rồi thật sự dừng lại."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "A short pause is normal if you say so first. Silence without warning looks like you froze.",
          "sub": "Dừng để nghĩ là bình thường nếu báo trước. Im lặng không báo dễ bị hiểu là đứng hình."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s38",
      "module": "END-05",
      "data": {
        "text": "Tối nay: viết ba dòng, ghi âm một lần",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, write your three lines and record them once. Then try the forty questions below!",
          "sub": "Tối nay viết ba dòng, ghi âm một lần. Rồi thử bốn mươi câu bên dưới nhé!",
          "face": "laugh"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-24",
  "notes": "#145 (hạt nhân #136 + biến thể #144): Đét đứng trái + bảng trắng 10 ô theo MỘT NGÀY PHỎNG VẤN của Thảo: Chủ nhật 20:00 (phòng khách, Dũng kể vụ “Why us?”) → thứ Hai 9:00 tell me (C) → 9:05 why this job (D) → 9:15 điểm yếu, 5 năm (E) → 9:25 lương (F) → 9:35 “Khoan đã!” công cụ báo cáo + bí ý (G) → 9:40 STAR, why hire (H) → 9:50 hỏi lại, 10:00 chia tay (I) → thứ Hai 20:00 cùng phòng khách: email cảm ơn + danh sách cho Dũng (J, khép vòng ca dao “Biết thì thưa thốt, không biết thì dựa cột mà nghe”). Đổi tên: Hiếu (p4), Hải (p19), ứng viên khen công ty (p7), ứng viên đùa (p11) → Dũng (kể lại “tháng trước”); “bạn” ở p14, p23 → Thảo; người phỏng vấn/trưởng phòng → Cô Hoa. Cảnh ngắt nhịp: BRK-07 (s10, câu đùa p11), BRK-04 (s13, trước–sau lương p14), BRK-10 (s20, rút ra p24). Bản cũ: w145/bak/english-interview-questions-to-prepare--w01.js.",
  "loop": {
    "open": "s01",
    "close": "s22"
  }
};
