// en-nurse-asking-about-pain--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "en-nurse-asking-about-pain--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "en-nurses-foreign-patients",
    "slug": "en-nurse-asking-about-pain",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Hỏi bệnh nhân về cơn đau bằng tiếng Anh: hỏi những gì, theo thứ tự nào?",
    "series": "Tiếng Anh cho điều dưỡng — hỏi, giải thích, trấn an bệnh nhân nước ngoài đúng và đủ"
  },
  "format": "W",
  "mode": "text",
  "narrator": "det",
  "anchor": {
    "type": "number",
    "value": "0 – 10",
    "ref": "p13"
  },
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
            "text": "0 – 10",
            "x": 60,
            "y": 70,
            "size": 150,
            "at": "l1:Zero",
            "color": "accent",
            "hl": [
              {
                "text": "0 – 10",
                "at": "l1:ten"
              }
            ]
          },
          {
            "id": "a-0",
            "t": "text",
            "text": "0 = không đau",
            "x": 70,
            "y": 290,
            "size": 54,
            "at": "l2:no pain"
          },
          {
            "id": "a-10",
            "t": "text",
            "text": "10 = đau nhất tưởng tượng",
            "x": 70,
            "y": 370,
            "size": 54,
            "at": "l2:worst"
          },
          {
            "id": "a-ok",
            "t": "text",
            "text": "10 = khoẻ hẳn?!",
            "x": 70,
            "y": 470,
            "size": 60,
            "at": "l3:great",
            "color": "coral",
            "hl": [
              {
                "text": "khoẻ hẳn",
                "at": "l3:great"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: U.S. Department of Veterans Affairs — Pain Numeric Rating Scale",
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
          "say": "Zero to ten. Two numbers that can save a whole shift of guessing.",
          "sub": "Từ 0 đến 10. Hai con số cứu cả một ca khỏi đoán mò.",
          "keys": [
            "0 đến 10"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Zero, no pain at all. Ten, the worst pain imaginable.",
          "sub": "0 là không đau chút nào. 10 là đau nhất có thể tưởng tượng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But here's the catch. Some patients think ten means, feeling great!",
          "sub": "Nhưng có một chi tiết: có bệnh nhân tưởng 10 là… khoẻ hẳn!",
          "keys": [
            "khoẻ hẳn"
          ]
        }
      ],
      "beats": {
        "after": 300
      },
      "ref": "p13,p14"
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
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "face": "sad",
                  "pose": "hold"
                }
              ],
              "props": [
                "bed",
                "bellhop-bell"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "sam",
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
            "caption": "Ngày 1 · 14:00 · chuông gọi",
            "icon": "bellhop-bell"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Muốn biết phải hỏi”",
            "x": 60,
            "y": 600,
            "size": 54,
            "at": "l5:know",
            "color": "accent",
            "hl": [
              {
                "text": "phải hỏi",
                "at": "l5:ask"
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
          "say": "Meet Thảo, a nurse on the medical ward. Two p.m., a call bell.",
          "sub": "Đây là Thảo, điều dưỡng khoa nội. Hai giờ chiều, chuông gọi reo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Sam, from Australia, admitted this morning, now holding her stomach.",
          "sub": "Còn đây là Sam, bệnh nhân người Úc, nhập viện sáng nay, giờ đang ôm bụng.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Pain. Here.",
          "sub": "Đau. Chỗ này.",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Thảo knows she must ask more. But what first?",
          "sub": "Thảo biết phải hỏi thêm. Nhưng hỏi gì trước?",
          "keys": [
            "hỏi gì trước"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents said: to know, you must ask. They didn't say in what order.",
          "sub": "Ông bà dạy: “Muốn biết phải hỏi.” Nhưng không dạy hỏi theo thứ tự nào.",
          "keys": [
            "Muốn biết phải hỏi"
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
            "text": "Hỏi gì, theo thứ tự nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:order",
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
            "text": "Không phải: hỏi dồn, nhảy lung tung",
            "x": 2028,
            "y": 165,
            "size": 46,
            "at": "l2:jumping",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:fixed"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: một thứ tự cố định",
            "x": 2028,
            "y": 250,
            "size": 52,
            "at": "l3:fixed",
            "color": "accent",
            "hl": [
              {
                "text": "cố định",
                "at": "l3:fixed"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "mở → cụ thể → thang 0–10 → tóm tắt",
            "x": 2028,
            "y": 340,
            "size": 40,
            "at": "l4:open"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what do you ask about pain, and in what order?",
          "sub": "Vậy hỏi về cơn đau thì hỏi gì, theo thứ tự nào?",
          "keys": [
            "theo thứ tự nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "When someone hurts, both sides rush, and questions start jumping around.",
          "sub": "Khi bệnh nhân đau, cả hai đều vội, câu hỏi dễ nhảy lung tung."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not a rapid-fire quiz. A fixed order, so you miss nothing and the patient keeps up.",
          "sub": "Không phải hỏi dồn như thi vấn đáp. Mà là thứ tự cố định: mình không sót ý, bệnh nhân theo kịp.",
          "keys": [
            "thứ tự cố định"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Open first, then specific, then the zero to ten scale, then a summary.",
          "sub": "Mở trước, rồi cụ thể, rồi thang 0 đến 10, cuối cùng tóm tắt."
        }
      ],
      "ref": "p1"
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
            "id": "b-soc",
            "t": "text",
            "text": "SOCRATES",
            "x": 2928,
            "y": 150,
            "size": 64,
            "at": "l1:SOCRATES",
            "color": "accent"
          },
          {
            "id": "b-s0",
            "t": "text",
            "text": "S · ở đâu",
            "x": 2928,
            "y": 250,
            "size": 40,
            "at": "l1:Site"
          },
          {
            "id": "b-s1",
            "t": "text",
            "text": "O · bắt đầu",
            "x": 2928,
            "y": 320,
            "size": 40,
            "at": "l1:Onset"
          },
          {
            "id": "b-s2",
            "t": "text",
            "text": "C · kiểu đau",
            "x": 2928,
            "y": 390,
            "size": 40,
            "at": "l1:Character"
          },
          {
            "id": "b-s3",
            "t": "text",
            "text": "R · lan",
            "x": 2928,
            "y": 460,
            "size": 40,
            "at": "l1:Radiation"
          },
          {
            "id": "b-s4",
            "t": "text",
            "text": "A · kèm theo",
            "x": 3308,
            "y": 250,
            "size": 40,
            "at": "l2:Associations"
          },
          {
            "id": "b-s5",
            "t": "text",
            "text": "T · diễn tiến",
            "x": 3308,
            "y": 320,
            "size": 40,
            "at": "l2:Time"
          },
          {
            "id": "b-s6",
            "t": "text",
            "text": "E · tăng, giảm",
            "x": 3308,
            "y": 390,
            "size": 40,
            "at": "l2:Exacerbating"
          },
          {
            "id": "b-s7",
            "t": "text",
            "text": "S · mức độ",
            "x": 3308,
            "y": 460,
            "size": 40,
            "at": "l2:Severity"
          },
          {
            "id": "b-fl",
            "t": "text",
            "text": "Khung, không phải kịch bản cứng",
            "x": 2028,
            "y": 450,
            "size": 44,
            "at": "l3:script",
            "hl": [
              {
                "text": "không phải kịch bản cứng",
                "at": "l3:script"
              }
            ]
          },
          {
            "id": "b-tk",
            "t": "text",
            "text": "Đã kể “lan xuống chân” → đánh dấu",
            "x": 2028,
            "y": 530,
            "size": 38,
            "at": "l4:leg",
            "color": "muted"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: SOCRATES (pain assessment) · OET Speaking criteria",
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
          "say": "A common frame is SOCRATES. Site, onset, character, radiation.",
          "sub": "Một khung hay dùng là SOCRATES: vị trí, khởi phát, tính chất, lan.",
          "keys": [
            "SOCRATES"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Associations, time course, exacerbating or relieving factors, and severity.",
          "sub": "Triệu chứng kèm, diễn tiến, yếu tố tăng hay giảm, và mức độ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It's a frame, not a script to recite word by word.",
          "sub": "Đó là bộ khung, không phải kịch bản đọc thuộc từng chữ.",
          "keys": [
            "không phải kịch bản"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "If the patient already says it spreads to the leg, just tick it and ask what's missing.",
          "sub": "Bệnh nhân tự kể đau lan xuống chân? Đánh dấu ý đó, hỏi tiếp phần còn thiếu."
        }
      ],
      "ref": "p2,p3"
    },
    {
      "id": "s04",
      "module": "BRK-08",
      "data": {
        "title": "Chiều Ngày 1 của Sam",
        "points": [
          {
            "label": "14:00",
            "sub": "Câu mở",
            "illus": "speech-balloon"
          },
          {
            "label": "14:05",
            "sub": "Chỗ đau, kiểu đau",
            "illus": "round-pushpin"
          },
          {
            "label": "14:10",
            "sub": "Thời gian",
            "illus": "stopwatch"
          },
          {
            "label": "14:15",
            "sub": "Thang 0–10",
            "illus": "input-numbers"
          },
          {
            "label": "14:20",
            "sub": "Tóm tắt",
            "illus": "clipboard"
          },
          {
            "label": "15:30",
            "sub": "Hỏi lại",
            "illus": "repeat-button"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One afternoon, one patient, six stops.",
          "sub": "Một buổi chiều, một bệnh nhân, sáu chặng.",
          "keys": [
            "sáu chặng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Pen out. Let's ask.",
          "sub": "Rút bút ra. Hỏi nào."
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
            "at": "l4",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 14:00 · Câu mở",
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
                  "pose": "explain"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "sad",
                  "pose": "hold"
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
            "at": "l1:bedside",
            "caption": "Ngày 1 · 14:00 · bên giường",
            "icon": "speech-balloon"
          },
          {
            "id": "c-ack",
            "t": "text",
            "text": "Ghi nhận cơn đau trước",
            "x": 3996,
            "y": 165,
            "size": 50,
            "at": "l4:acknowledge",
            "hl": [
              {
                "text": "Ghi nhận",
                "at": "l4:acknowledge"
              }
            ]
          },
          {
            "id": "c-op",
            "t": "text",
            "text": "“Can you tell me about it?”",
            "x": 3996,
            "y": 250,
            "size": 48,
            "at": "l4:open",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, two p.m., at the bedside. OET says: listen first, open questions before specific ones.",
          "sub": "Chặng một, hai giờ chiều, bên giường. OET dặn: nghe trước, hỏi mở trước, hỏi cụ thể sau."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'm sorry you're in pain. Let me ask you a few questions so we can help. Can you tell me about the pain?",
          "sub": "Tôi rất tiếc chị đang đau. Tôi hỏi vài câu để giúp chị nhé. Chị kể về cơn đau được không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "It started this morning. Now it's worse.",
          "sub": "Nó bắt đầu từ sáng. Giờ nặng hơn.",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Acknowledge first, then one open question. Someone in pain needs to feel heard before the quiz.",
          "sub": "Ghi nhận trước, rồi một câu hỏi mở. Người đang đau cần thấy mình được nghe, trước khi bị hỏi dồn.",
          "keys": [
            "được nghe"
          ]
        }
      ],
      "ref": "p4,p5"
    },
    {
      "id": "s06",
      "module": "BRK-10",
      "data": {
        "quote": "Tôi nghe được cơn đau này làm anh chị khó chịu thế nào",
        "mark": "nghe được",
        "by": "Câu mẫu luyện OET — E2Language",
        "illus": "ear"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "I can hear how much discomfort this is causing you.",
          "sub": "Tôi nghe được cơn đau này làm anh chị khó chịu thế nào.",
          "keys": [
            "nghe được"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A sample line from E2Language's OET material.",
          "sub": "Câu mẫu trong tài liệu luyện OET của E2Language."
        }
      ],
      "ref": "p5"
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
            "id": "c-bad",
            "t": "text",
            "text": "“You have pain in stomach? Yes? Strong?”",
            "x": 3996,
            "y": 350,
            "size": 36,
            "at": "l1:stomach",
            "color": "muted"
          },
          {
            "id": "c-bad2",
            "t": "text",
            "text": "→ gật 3 lần, chỉ biết “đau bụng”",
            "x": 4036,
            "y": 420,
            "size": 38,
            "at": "l1:nods"
          },
          {
            "id": "c-badx",
            "t": "strike",
            "over": "c-bad",
            "at": "l2:open"
          },
          {
            "id": "c-good",
            "t": "text",
            "text": "Câu mở → 2 ý SOCRATES",
            "x": 3996,
            "y": 500,
            "size": 50,
            "at": "l2:two",
            "color": "accent",
            "hl": [
              {
                "text": "2 ý",
                "at": "l2:two"
              }
            ]
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "1 câu mở = 3 câu đóng",
            "x": 3996,
            "y": 640,
            "size": 58,
            "at": "l3:three",
            "color": "accent",
            "hl": [
              {
                "text": "1 câu mở",
                "at": "l3:One open"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: E2Language — OET Speaking, Video 4",
            "x": 4836,
            "y": 700,
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
          "say": "Compare: you have pain in stomach? Yes? Strong? The patient just nods three times.",
          "sub": "So sánh: “You have pain in stomach? Yes? Strong?” Bệnh nhân chỉ gật ba lần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In the lesson's example, the open question got two SOCRATES points at once: after lunch, and getting worse.",
          "sub": "Trong ví dụ của bài, câu mở cho ngay hai ý SOCRATES: bắt đầu sau bữa trưa, và tăng dần."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: one open question can do the work of three closed ones.",
          "sub": "Rút ra: một câu hỏi mở có thể thay cho ba câu hỏi đóng.",
          "keys": [
            "một câu hỏi mở"
          ]
        }
      ],
      "ref": "p6,p7"
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
            "at": "l6",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 14:05 · Chỗ đau, kiểu đau",
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
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "point"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "sad",
                  "pose": "point"
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
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l5",
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
            "at": "l1:Where",
            "caption": "Ngày 1 · 14:05 · chỉ vào chỗ đau",
            "icon": "round-pushpin"
          },
          {
            "id": "d-pt",
            "t": "text",
            "text": "“Can you point to it?”",
            "x": 5964,
            "y": 165,
            "size": 50,
            "at": "l2:point",
            "color": "accent",
            "hl": [
              {
                "text": "point",
                "at": "l2:point"
              }
            ]
          },
          {
            "id": "d-rd",
            "t": "text",
            "text": "“Does it go anywhere else?”",
            "x": 5964,
            "y": 245,
            "size": 46,
            "at": "l2:anywhere"
          },
          {
            "id": "d-lr",
            "t": "text",
            "text": "bụng dưới bên phải",
            "x": 6004,
            "y": 325,
            "size": 44,
            "at": "l3:lower",
            "color": "muted"
          },
          {
            "id": "d-ch",
            "t": "text",
            "text": "Đưa sẵn vài từ để chọn",
            "x": 5964,
            "y": 420,
            "size": 50,
            "at": "l6:offer",
            "color": "accent",
            "hl": [
              {
                "text": "để chọn",
                "at": "l6:choose"
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
          "say": "Stop two, five past two. Where is it? Sam may not know the English for that body part.",
          "sub": "Chặng hai, hai giờ năm phút. Đau ở đâu? Sam có thể không biết từ tiếng Anh cho chỗ đó."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Where exactly is the pain? Can you point to it? Does it go anywhere else?",
          "sub": "Đau chính xác ở đâu? Chị chỉ vào được không? Có lan đi đâu không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Here. Lower right. Just here.",
          "sub": "Đây. Bên phải, phía dưới. Chỉ chỗ này.",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "What does the pain feel like? Is it an ache, or is it sharp, like stabbing?",
          "sub": "Chị thấy đau thế nào? Âm ỉ, hay nhói, như dao đâm?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "sam",
          "say": "Sharp.",
          "sub": "Nhói.",
          "face": "sad"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Offer a few words to choose from. Sam doesn't need a medical dictionary, just a menu.",
          "sub": "Đưa sẵn vài từ để chọn. Sam không cần từ điển y khoa, chỉ cần một tờ thực đơn.",
          "keys": [
            "một tờ thực đơn"
          ]
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "s09",
      "module": "BRK-06",
      "data": {
        "title": "Thực đơn cơn đau",
        "items": [
          {
            "illus": "face-with-head-bandage",
            "text": "aching · âm ỉ"
          },
          {
            "illus": "high-voltage",
            "text": "sharp · nhói"
          },
          {
            "illus": "kitchen-knife",
            "text": "stabbing · dao đâm"
          },
          {
            "illus": "fire",
            "text": "burning · rát bỏng"
          },
          {
            "illus": "beating-heart",
            "text": "throbbing · giật"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Aching, sharp, stabbing, burning, throbbing.",
          "sub": "Âm ỉ, nhói, như dao đâm, rát bỏng, giật theo nhịp."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The pain menu. Patients just point.",
          "sub": "Thực đơn cơn đau. Bệnh nhân chỉ việc chọn.",
          "keys": [
            "chỉ việc chọn"
          ]
        }
      ],
      "ref": "p9"
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
            "at": "l4",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 14:10 · Thời gian, tăng giảm",
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
                  "face": "sad"
                }
              ],
              "props": [
                "bed",
                "stopwatch"
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
            "at": "l1:time",
            "caption": "Ngày 1 · 14:10 · mỗi câu một ý",
            "icon": "stopwatch"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Liên tục hay lúc có lúc không?",
            "x": 7932,
            "y": 165,
            "size": 44,
            "at": "l2:come and go"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Điều gì làm tăng, giảm?",
            "x": 7932,
            "y": 245,
            "size": 46,
            "at": "l2:worse"
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "→ liên tục · đi lại đau hơn",
            "x": 7972,
            "y": 325,
            "size": 40,
            "at": "l3:Walking",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, ten past two. Time, and what changes the pain.",
          "sub": "Chặng ba, hai giờ mười. Thời gian, và điều làm cơn đau thay đổi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Does it come and go? Does anything make it worse?",
          "sub": "Lúc đau lúc không, hay liên tục? Có gì làm đau hơn không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "All the time. Walking is worse.",
          "sub": "Liên tục. Đi lại thì đau hơn.",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Each question asks one thing, so a patient in pain answers in a few words.",
          "sub": "Mỗi câu chỉ hỏi một điều, nên người đang đau vẫn trả lời được bằng vài chữ.",
          "keys": [
            "Mỗi câu chỉ hỏi một điều"
          ]
        }
      ],
      "ref": "p10,p11"
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
            "id": "e-on",
            "t": "text",
            "text": "Đột ngột hay từ từ?",
            "x": 7932,
            "y": 420,
            "size": 46,
            "at": "l1:suddenly"
          },
          {
            "id": "e-as",
            "t": "text",
            "text": "Kèm buồn nôn? …",
            "x": 7932,
            "y": 495,
            "size": 46,
            "at": "l2:sick"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Mỗi câu một ý",
            "x": 7932,
            "y": 610,
            "size": 64,
            "at": "l3:One idea",
            "color": "accent",
            "hl": [
              {
                "text": "một ý",
                "at": "l3:idea"
              }
            ]
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "đau mấy cũng trả lời được",
            "x": 7972,
            "y": 700,
            "size": 40,
            "at": "l3:answer"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Onset: when did the pain start? Did it come on suddenly or gradually?",
          "sub": "Khởi phát: “When did the pain start? Did it come on suddenly or gradually?”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Other symptoms: have you noticed anything else, like feeling sick?",
          "sub": "Triệu chứng kèm: “Have you noticed anything else, like feeling sick?”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: one idea per question, and even a patient in pain can answer.",
          "sub": "Rút ra: mỗi câu một ý, bệnh nhân đau mấy cũng trả lời được.",
          "keys": [
            "mỗi câu một ý"
          ]
        }
      ],
      "ref": "p10,p12"
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
            "at": "l4",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 14:15 · Thang 0–10",
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
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "bed",
                "input-numbers"
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
            "at": "l1:scale",
            "caption": "Ngày 1 · 14:15 · hỏi mức độ",
            "icon": "input-numbers"
          },
          {
            "id": "f-q",
            "t": "text",
            "text": "“If 0 is no pain and 10…”",
            "x": 60,
            "y": 1255,
            "size": 46,
            "at": "l2:no pain",
            "color": "accent"
          },
          {
            "id": "f-7",
            "t": "text",
            "text": "Sam: 7 / 10",
            "x": 60,
            "y": 1345,
            "size": 64,
            "at": "l3:Seven",
            "hl": [
              {
                "text": "7 / 10",
                "at": "l3:Seven"
              }
            ]
          },
          {
            "id": "f-va",
            "t": "text",
            "text": "Bản VA: “…how would you rate your pain right now?”",
            "x": 60,
            "y": 1450,
            "size": 30,
            "at": "l4:rate",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four, a quarter past two. Severity, on the zero to ten scale.",
          "sub": "Chặng bốn, hai giờ mười lăm. Mức độ, theo thang 0 đến 10."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "If zero is no pain and ten is the worst pain you can imagine, what number would you give your pain now?",
          "sub": "Nếu 0 là không đau, 10 là đau nhất chị có thể tưởng tượng, thì cơn đau bây giờ chị cho mấy điểm?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Seven.",
          "sub": "Bảy.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That's the short version of the VA scale. The VA asks: how would you rate your pain right now?",
          "sub": "Đó là bản gọn của thang VA. Bản gốc hỏi: “how would you rate your pain right now?”"
        }
      ],
      "ref": "p13"
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
          }
        ],
        "items": [
          {
            "id": "f-bad",
            "t": "text",
            "text": "“How bad is the pain?”",
            "x": 60,
            "y": 1530,
            "size": 46,
            "at": "l1:How bad",
            "color": "muted"
          },
          {
            "id": "f-bad2",
            "t": "text",
            "text": "→ “very bad”: mỗi người hiểu một kiểu",
            "x": 100,
            "y": 1600,
            "size": 36,
            "at": "l1:very bad"
          },
          {
            "id": "f-badx",
            "t": "strike",
            "over": "f-bad",
            "at": "l2:both ends"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Nói rõ 0, 10 → rồi hỏi số",
            "x": 60,
            "y": 1700,
            "size": 52,
            "at": "l3:Say",
            "color": "accent",
            "hl": [
              {
                "text": "rồi hỏi số",
                "at": "l3:then ask"
              }
            ]
          },
          {
            "id": "f-tool",
            "t": "text",
            "text": "Khó chọn số? Công cụ của khoa",
            "x": 60,
            "y": 1790,
            "size": 36,
            "at": "l4:tool",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Many think how bad is the pain is enough. You get very bad, or not so bad, and everyone means something different.",
          "sub": "Nhiều người tưởng hỏi “How bad is the pain?” là đủ. Được “very bad”, “not so bad”, mà mỗi người hiểu một kiểu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A scale with both ends said out loud gives a number you can compare next time. And ten is not feeling great.",
          "sub": "Thang có hai đầu nói rõ cho một con số để lần sau so. Và 10 không phải là khoẻ hẳn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: say what zero and ten mean, then ask for the number.",
          "sub": "Rút ra: nói rõ 0 là gì, 10 là gì, rồi mới hỏi con số.",
          "keys": [
            "rồi mới hỏi con số"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Numbers hard for the patient? Use your unit's pain tool, in simple words.",
          "sub": "Bệnh nhân khó chọn số? Dùng công cụ đánh giá đau khoa bạn đang dùng, giải thích bằng lời đơn giản."
        }
      ],
      "ref": "p14,p15,p16"
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
            "at": "l2",
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
            "text": "⑤ 14:20 · Tóm tắt, bước tiếp",
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
            "at": "l1:summarising",
            "caption": "Ngày 1 · 14:20 · trước khi báo bác sĩ",
            "icon": "clipboard"
          },
          {
            "id": "g-s",
            "t": "text",
            "text": "“Have I got that right?”",
            "x": 2028,
            "y": 1255,
            "size": 50,
            "at": "l2:right",
            "color": "accent",
            "hl": [
              {
                "text": "got that right",
                "at": "l2:right"
              }
            ]
          },
          {
            "id": "g-s2",
            "t": "text",
            "text": "→ bệnh nhân xác nhận, sửa",
            "x": 2068,
            "y": 1340,
            "size": 42,
            "at": "l5:correct"
          },
          {
            "id": "g-nx",
            "t": "text",
            "text": "“I'll let the doctor know now”",
            "x": 2028,
            "y": 1430,
            "size": 44,
            "at": "l4:doctor"
          },
          {
            "id": "g-dr",
            "t": "text",
            "text": "Thuốc, liều, giờ: theo y lệnh",
            "x": 2028,
            "y": 1520,
            "size": 44,
            "at": "l5:orders",
            "color": "coral",
            "hl": [
              {
                "text": "theo y lệnh",
                "at": "l5:orders"
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
          "say": "Stop five, twenty past two. OET lists summarising to check as an information-gathering skill.",
          "sub": "Chặng năm, hai giờ hai mươi. OET coi tóm tắt để kiểm tra là kỹ thuật thu thập thông tin."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "So, it's in your lower right side, it started this morning, it's sharp, worse when you walk, and seven out of ten now. Have I got that right?",
          "sub": "Vậy: đau bụng dưới bên phải, bắt đầu từ sáng, đau nhói, đi lại đau hơn, giờ 7 trên 10. Tôi ghi đúng chưa?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Yes. That's it.",
          "sub": "Đúng. Vậy đó.",
          "face": "neutral"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I'll let the doctor know now, and I'll come back to check on you.",
          "sub": "Tôi báo bác sĩ ngay, rồi quay lại xem chị thế nào."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "No promises beyond your role. Pain medicine, dose and timing follow the doctor's orders. And the patient can correct the summary first.",
          "sub": "Không hứa ngoài quyền mình. Thuốc giảm đau, liều, giờ dùng theo y lệnh bác sĩ. Bệnh nhân sửa được bản tóm tắt trước."
        }
      ],
      "ref": "p22,p23"
    },
    {
      "id": "s15",
      "module": "BRK-07",
      "data": {
        "question": "Thuốc đã dùng. Hỏi lại thế nào cho ra sự thật?",
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
          "say": "The medicine is given. How do you ask again, and get the truth?",
          "sub": "Thuốc đã dùng. Hỏi lại thế nào để nhận được sự thật?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p21"
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
            "at": "l5",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 15:30 · Hỏi lại",
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
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "thumb",
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "neutral"
                }
              ],
              "props": [
                "bed",
                "pill"
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
            "at": "l2:Dũng",
            "caption": "Ngày 1 · 15:30 · một giờ sau thuốc",
            "icon": "pill"
          },
          {
            "id": "h-q",
            "t": "text",
            "text": "“…better now, isn't it?”",
            "x": 3996,
            "y": 1255,
            "size": 50,
            "at": "l3:isn't it",
            "color": "coral"
          },
          {
            "id": "h-w",
            "t": "text",
            "text": "Dũng ghi: “đã đỡ”",
            "x": 3996,
            "y": 1340,
            "size": 50,
            "at": "l5:writes"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, three thirty. An hour after the painkiller the doctor ordered.",
          "sub": "Chặng sáu, ba rưỡi chiều. Một giờ sau liều thuốc giảm đau theo y lệnh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, a newly qualified nurse on the same ward. Cheerful, and in a hurry.",
          "sub": "Đây là Dũng, điều dưỡng mới ra trường cùng khoa. Vui vẻ, và luôn vội.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "The pain is better now, isn't it?",
          "sub": "Giờ đỡ đau rồi, phải không chị?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "Yes, a bit, thanks.",
          "sub": "Vâng, đỡ chút, cảm ơn.",
          "face": "neutral"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Dũng writes: better. Case closed. Or is it?",
          "sub": "Dũng ghi: “đã đỡ”. Xong chuyện. Thật không?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "p19"
    },
    {
      "id": "s17",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "16:00 · chuông lại reo",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "sam",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Câu hỏi dẫn dắt",
          "why": "Bệnh nhân lịch sự, ngại phiền nên đồng ý theo; nửa tiếng sau bấm chuông: cơn đau vẫn như cũ.",
          "rule": "Hỏi trung tính, cùng một thang"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "sam",
          "say": "Sorry. It's still the same. I didn't want to bother you.",
          "sub": "Xin lỗi. Vẫn đau như cũ. Lúc nãy tôi không muốn làm phiền.",
          "face": "sad",
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
          "say": "Isn't it already holds the answer. Polite patients just agree.",
          "sub": "“Isn't it?” đã gợi sẵn đáp án. Bệnh nhân lịch sự thì cứ đồng ý."
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
          "who": "dung",
          "say": "How is your pain now, on the same scale from zero to ten?",
          "sub": "Giờ chị đau mức nào, vẫn theo thang 0 đến 10 lúc nãy?",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "sam",
          "say": "Still seven, honestly.",
          "sub": "Thật lòng thì vẫn bảy.",
          "phase": "redo",
          "face": "sad"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. A leading question gets a polite answer, not the truth.",
          "sub": "Đúng. Hỏi dẫn dắt thì nhận câu trả lời lịch sự, không nhận sự thật.",
          "phase": "redo",
          "keys": [
            "không nhận sự thật"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p17,p19,p20"
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
          }
        ],
        "items": [
          {
            "id": "h-l1",
            "t": "text",
            "text": "Dẫn dắt: “…is it?”",
            "x": 3996,
            "y": 1430,
            "size": 38,
            "at": "l1:not too bad",
            "color": "muted"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Gây rối: 3 câu trong 1",
            "x": 3996,
            "y": 1500,
            "size": 46,
            "at": "l2:three",
            "color": "muted"
          },
          {
            "id": "h-l1x",
            "t": "strike",
            "over": "h-l1",
            "at": "l3:separate"
          },
          {
            "id": "h-l2x",
            "t": "strike",
            "over": "h-l2",
            "at": "l3:separate+400"
          },
          {
            "id": "h-ok",
            "t": "text",
            "text": "Tách từng câu · cùng thang 0–10",
            "x": 3996,
            "y": 1590,
            "size": 44,
            "at": "l3:same scale",
            "color": "accent",
            "hl": [
              {
                "text": "cùng thang",
                "at": "l3:same scale"
              }
            ]
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Lịch sự ≠ sự thật",
            "x": 3996,
            "y": 1700,
            "size": 60,
            "at": "l4:polite",
            "color": "accent",
            "hl": [
              {
                "text": "≠ sự thật",
                "at": "l4:true"
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
          "say": "OET warns against leading questions, like it's not too bad, is it?",
          "sub": "OET khuyên tránh câu dẫn dắt, như “It's not too bad, is it?”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And confusing ones: three questions in one breath. Sharp or dull, does it go to your back, when did it start?",
          "sub": "Và câu gây rối: ba câu trong một hơi. “Nhói hay âm ỉ, có lan ra lưng không, bắt đầu khi nào?”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Separate them, wait for each answer, and re-ask on the same scale, so you and the doctor see real change.",
          "sub": "Tách ra, đợi từng câu trả lời, và hỏi lại theo cùng thang để bạn và bác sĩ thấy thay đổi thật.",
          "keys": [
            "cùng thang"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Polite is not the same as true.",
          "sub": "Lịch sự không đồng nghĩa với sự thật."
        }
      ],
      "ref": "p17,p18,p21"
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
            "text": "16:00 · Chuông lại reo",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:bell"
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
                "bellhop-bell"
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
            "at": "l1:bell",
            "caption": "Ngày 1 · 16:00 · cùng chiếc chuông",
            "icon": "bellhop-bell"
          },
          {
            "id": "i-7",
            "t": "text",
            "text": "14:15: 7 / 10 → 16:00: 7 / 10",
            "x": 5964,
            "y": 1260,
            "size": 46,
            "at": "l3:same",
            "hl": [
              {
                "text": "7 / 10",
                "at": "l3:seven"
              }
            ]
          },
          {
            "id": "i-dr",
            "t": "text",
            "text": "→ báo bác sĩ: chưa đỡ",
            "x": 6004,
            "y": 1345,
            "size": 46,
            "at": "l2:doctor",
            "color": "coral"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "Muốn biết phải hỏi… đúng",
            "x": 5964,
            "y": 1450,
            "size": 54,
            "at": "l4:ask",
            "color": "accent",
            "hl": [
              {
                "text": "đúng",
                "at": "l4:right"
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
          "say": "Four p.m. The same call bell as two o'clock.",
          "sub": "Bốn giờ chiều. Vẫn chiếc chuông lúc hai giờ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Thank you for telling me. I'll let the doctor know now, and come back to check.",
          "sub": "Cảm ơn chị đã nói thật. Tôi báo bác sĩ ngay, rồi quay lại xem chị.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Seven at two fifteen, still seven now. The same scale shows the truth: no real change.",
          "sub": "Hai giờ mười lăm: bảy. Giờ vẫn bảy. Cùng một thang nên thấy rõ: chưa đỡ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "To know, you must ask. And now Dũng knows: you must ask it right.",
          "sub": "“Muốn biết phải hỏi.” Giờ Dũng biết thêm: phải hỏi cho đúng.",
          "keys": [
            "phải hỏi cho đúng"
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
      "ref": "p21,p23"
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
            "at": "l2:open",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l3:Say",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l4:leading",
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
            "at": "l1:card"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1250,
            "w": 44,
            "h": 44,
            "at": "l1:card",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1232,
            "size": 56,
            "at": "l1:card+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Câu mở + ghi nhận cơn đau",
            "x": 7997,
            "y": 1242,
            "size": 36,
            "at": "l1:card+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1312,
            "w": 44,
            "h": 44,
            "at": "l1:for",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1294,
            "size": 56,
            "at": "l1:for+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Mời chỉ chỗ đau",
            "x": 7997,
            "y": 1304,
            "size": 36,
            "at": "l1:for+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1374,
            "w": 44,
            "h": 44,
            "at": "l1:your",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1356,
            "size": 56,
            "at": "l1:your+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Gợi ý từ tả cảm giác",
            "x": 7997,
            "y": 1366,
            "size": 36,
            "at": "l1:your+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1436,
            "w": 44,
            "h": 44,
            "at": "l1:pocket",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1418,
            "size": 56,
            "at": "l1:pocket+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Bắt đầu · diễn tiến · tăng giảm",
            "x": 7997,
            "y": 1428,
            "size": 36,
            "at": "l1:pocket+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1498,
            "w": 44,
            "h": 44,
            "at": "l1:open",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1480,
            "size": 56,
            "at": "l1:open+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Thang 0–10, nói rõ hai đầu",
            "x": 7997,
            "y": 1490,
            "size": 36,
            "at": "l1:open+200"
          },
          {
            "id": "j-c5",
            "t": "box",
            "x": 7932,
            "y": 1560,
            "w": 44,
            "h": 44,
            "at": "l1:point",
            "stroke": 5
          },
          {
            "id": "j-k5",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1542,
            "size": 56,
            "at": "l1:point+600",
            "color": "accent"
          },
          {
            "id": "j-l5",
            "t": "text",
            "text": "Tránh câu dẫn dắt",
            "x": 7997,
            "y": 1552,
            "size": 36,
            "at": "l1:point+200"
          },
          {
            "id": "j-c6",
            "t": "box",
            "x": 7932,
            "y": 1622,
            "w": 44,
            "h": 44,
            "at": "l1:words",
            "stroke": 5
          },
          {
            "id": "j-k6",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1604,
            "size": 56,
            "at": "l1:words+600",
            "color": "accent"
          },
          {
            "id": "j-l6",
            "t": "text",
            "text": "Tóm tắt + nói bước tiếp",
            "x": 7997,
            "y": 1614,
            "size": 36,
            "at": "l1:words+200"
          },
          {
            "id": "j-a",
            "t": "text",
            "text": "Làm ngay: thẻ thang 0–10",
            "x": 7932,
            "y": 1690,
            "size": 40,
            "at": "l5:aloud",
            "color": "accent",
            "hl": [
              {
                "text": "thẻ",
                "at": "l5:card"
              }
            ]
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Bài tiếp: giải thích thủ thuật",
            "x": 7932,
            "y": 1750,
            "size": 38,
            "at": "l6:Next"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4696,
            "y": 640,
            "at": "l2:three"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 760,
            "y": 1700,
            "at": "l3:then"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1700,
            "at": "l4:truth"
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
          "say": "So, the card for your pocket: open, point, words, timing, scale, no leading, summary. Seven lines.",
          "sub": "Tóm lại, tấm thẻ trong túi áo: câu mở, chỉ chỗ đau, từ gợi ý, thời gian, thang điểm, không dẫn dắt, tóm tắt. Bảy dòng.",
          "keys": [
            "tấm thẻ trong túi áo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One open question beats three closed ones.",
          "sub": "Một câu mở hơn ba câu đóng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Say what zero and ten mean, then ask for the number.",
          "sub": "Nói rõ 0 và 10, rồi mới hỏi số."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And no leading questions. Polite answers are not the truth.",
          "sub": "Và không hỏi dẫn dắt. Câu trả lời lịch sự chưa phải sự thật.",
          "keys": [
            "không hỏi dẫn dắt"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: write the zero to ten question on a small card, keep it in your pocket, read it aloud.",
          "sub": "Làm ngay: viết câu hỏi thang 0–10 lên một tấm thẻ nhỏ, để trong túi áo, đọc to vài lần.",
          "keys": [
            "tấm thẻ nhỏ"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next, after pain comes a procedure: explaining it before you start.",
          "sub": "Bài tiếp: biết đau rồi thì đến thủ thuật, giải thích trước cho đúng."
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
        "q": "A patient says ten and smiles, explaining they feel fine, what went wrong?",
        "options": [
          "The patient was lying, because nobody can feel fine with any pain",
          "The ends of the scale were not explained, so they thought ten meant well",
          "Nothing went wrong, because ten always means the patient feels fine"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "input-numbers",
        "why": "Bài nêu có bệnh nhân tưởng 10 là khoẻ hẳn. Vì vậy phải nói rõ hai đầu thang trước khi hỏi con số."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A patient says ten and smiles, explaining they feel fine, what went wrong?",
          "sub": "Bệnh nhân nói “ten” và mỉm cười, bảo mình thấy ổn, điều gì đã sai?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The ends of the scale were not explained, so they thought ten meant well.",
          "sub": "Hai đầu thang chưa được nói rõ, nên họ tưởng 10 là khoẻ."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Ten is not feeling great. Say both ends first.",
          "sub": "10 đâu phải khoẻ hẳn. Nói rõ hai đầu trước đã."
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
          "say": "Card in your pocket, zero to ten. Then try the forty questions below.",
          "sub": "Thẻ 0–10 trong túi áo. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi en-nurses-foreign-patients, bài đào sâu 2) dựng theo hạt nhân kịch bản (#136) + biến thể #144. Hook HOOK-24: neo số “0 – 10” (thang VA) → chi tiết: có bệnh nhân tưởng 10 là khoẻ hẳn (p14). Dòng thời gian: chiều Ngày 1 của Sam ở phòng 305 (14:00 chuông gọi, câu mở → 14:05 chỗ đau, kiểu đau → 14:10 thời gian, tăng giảm → 14:15 thang 0–10, Sam 7/10 → 14:20 tóm tắt, báo bác sĩ → 15:30 Dũng hỏi “better now, isn't it?” → 16:00 chuông reo, “Khoan đã!” → khép vòng: cùng thang, vẫn 7). Nhân vật: Thảo (p11), Sam (gộp bệnh nhân Nhật p11/intro và người Anh p19), Dũng (p19). Ví dụ p6 (sau bữa trưa) kể bằng lời Đét để khỏi lệch với tóm tắt p22 (từ sáng). Thành ngữ: “Muốn biết phải hỏi” → “phải hỏi cho đúng”. Cảnh ngắt nhịp: BRK-08 (một buổi chiều), BRK-10 (câu mẫu E2Language), BRK-06 (thực đơn cơn đau), BRK-07 (rehook). Câu đố questions[22].",
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
