// eight-part-sentence--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "eight-part-sentence--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "epc-legal-counsel",
    "slug": "eight-part-sentence",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Một câu nghĩa vụ trong hợp đồng EPC thế nào là đủ vế?",
    "series": "Soạn và rà hợp đồng EPC từ hạt đến lá — cho pháp chế, viết câu đủ vế, dẫn chiếu đúng và giữ vững khi đàm phán"
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
  "anchor": {
    "type": "question",
    "value": "Câu ngắn hay câu đủ vế an toàn hơn?",
    "ref": "p8"
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
            "id": "a-q",
            "t": "text",
            "text": "Câu nào an toàn hơn?",
            "x": 60,
            "y": 40,
            "size": 72,
            "at": "l1:safer",
            "hl": [
              {
                "text": "an toàn",
                "at": "l1:safer"
              }
            ]
          },
          {
            "id": "a-ba",
            "t": "box",
            "x": 60,
            "y": 190,
            "w": 780,
            "h": 230,
            "at": "l2:short",
            "stroke": 5
          },
          {
            "id": "a-a",
            "t": "text",
            "text": "A. Câu ngắn, gọn",
            "x": 90,
            "y": 220,
            "size": 56,
            "at": "l2:short"
          },
          {
            "id": "a-a2",
            "t": "text",
            "text": "“Nhà thầu hoàn thành đúng tiến độ.”",
            "x": 90,
            "y": 330,
            "size": 34,
            "at": "l2:short+400",
            "color": "muted"
          },
          {
            "id": "a-bb",
            "t": "box",
            "x": 900,
            "y": 190,
            "w": 780,
            "h": 230,
            "at": "l3:complete",
            "stroke": 5
          },
          {
            "id": "a-b",
            "t": "text",
            "text": "B. Câu đủ vế, dài hơn",
            "x": 930,
            "y": 220,
            "size": 52,
            "at": "l3:complete"
          },
          {
            "id": "a-b2",
            "t": "text",
            "text": "đúng · sai · ai xác nhận · trần",
            "x": 930,
            "y": 330,
            "size": 34,
            "at": "l3:complete+400",
            "color": "muted"
          },
          {
            "id": "a-v",
            "t": "text",
            "text": "Bạn chọn?",
            "x": 60,
            "y": 510,
            "size": 56,
            "at": "l4:pick",
            "color": "coral"
          },
          {
            "id": "a-ax",
            "t": "strike",
            "over": "a-a",
            "at": "l5:B"
          },
          {
            "id": "a-r",
            "t": "ring",
            "around": [
              "a-b"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l5:B"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Two sentences in your EPC draft. In a dispute, which one is safer?",
          "sub": "Hai câu trong bản nháp EPC. Khi tranh chấp, câu nào an toàn hơn?",
          "keys": [
            "an toàn hơn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A: short and clean. The contractor completes the works on schedule.",
          "sub": "A: ngắn, gọn. “Nhà thầu hoàn thành Công trình đúng tiến độ.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "B: longer, complete. If right, if wrong, who confirms, how much.",
          "sub": "B: dài hơn, đủ vế. Đúng thì sao, sai thì sao, ai xác nhận, tối đa bao nhiêu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Most people pick A. Fewer words, fewer risks. Pick yours.",
          "sub": "Đa số chọn A. Ít chữ, ít rủi ro. Bạn chọn câu nào?",
          "keys": [
            "Đa số chọn A"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The answer is B. Short sentences are short because they dropped the hard part.",
          "sub": "Đáp án là B. Câu ngắn thường ngắn vì đã bỏ đi phần khó nhất.",
          "keys": [
            "Đáp án là B"
          ]
        }
      ],
      "beats": {
        "after": 300
      },
      "ref": "intro,p8"
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
              "a-vg"
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
            "id": "a-vg",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 900,
            "y": 440,
            "w": 420,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "thumb",
                  "face": "happy"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "binh",
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
            "caption": "14:00 · bàn pháp chế",
            "icon": "pencil"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Sai một li, đi một dặm”",
            "x": 60,
            "y": 620,
            "size": 50,
            "at": "l5:inch",
            "color": "accent",
            "hl": [
              {
                "text": "đi một dặm",
                "at": "l5:mile"
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
          "say": "Sentence A came from Dũng, a young site engineer. Two p.m., Tuesday.",
          "sub": "Câu A là của Dũng, kỹ sư hiện trường trẻ. Hai giờ chiều thứ Ba.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Short and clean. Nobody can argue with that!",
          "sub": "Ngắn gọn thế này, ai cãi được!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Bác Bình, head of legal for the owner, red pencil in hand.",
          "sub": "Còn đây là Bác Bình, trưởng pháp chế Chủ đầu tư, tay cầm bút chì đỏ.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Slowly now. On schedule, which schedule? And if late, then what?",
          "sub": "Từ từ, mình xem lại đã. Đúng tiến độ nào? Mà chậm thì sao?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Off by an inch, lost by a mile. One missing part, a mile of dispute.",
          "sub": "“Sai một li, đi một dặm.” Thiếu một vế, cãi nhau cả dặm.",
          "keys": [
            "Sai một li, đi một dặm"
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
      "ref": "intro,p8"
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
            "text": "Câu nghĩa vụ đủ vế là gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:complete",
            "hl": [
              {
                "text": "đủ vế",
                "at": "l1:complete"
              }
            ]
          },
          {
            "id": "b-t1",
            "t": "text",
            "text": "Viết: câu 8 thành phần",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:eight",
            "hl": [
              {
                "text": "8 thành phần",
                "at": "l2:eight"
              }
            ]
          },
          {
            "id": "b-t2",
            "t": "text",
            "text": "Rà: 5 câu hỏi ngược",
            "x": 2028,
            "y": 250,
            "size": 50,
            "at": "l2:five",
            "hl": [
              {
                "text": "5 câu hỏi ngược",
                "at": "l2:reverse"
              }
            ]
          },
          {
            "id": "b-cl",
            "t": "illus",
            "name": "alarm-clock",
            "x": 2968,
            "y": 160,
            "size": 110,
            "at": "l3:late"
          },
          {
            "id": "b-when",
            "t": "text",
            "text": "Tranh chấp: khi chậm, sai, thiếu",
            "x": 3098,
            "y": 175,
            "size": 36,
            "at": "l3:late",
            "color": "coral"
          },
          {
            "id": "b-rest",
            "t": "text",
            "text": "Giá trị ở vế còn lại",
            "x": 2968,
            "y": 290,
            "size": 48,
            "at": "l4:other",
            "color": "accent",
            "hl": [
              {
                "text": "vế còn lại",
                "at": "l4:other half"
              }
            ]
          },
          {
            "id": "b-4q",
            "t": "text",
            "text": "sai thì sao · ai xác định",
            "x": 2968,
            "y": 370,
            "size": 36,
            "at": "l4:who"
          },
          {
            "id": "b-4q2",
            "t": "text",
            "text": "tối đa bao nhiêu · báo thế nào",
            "x": 2968,
            "y": 425,
            "size": 36,
            "at": "l4:much"
          },
          {
            "id": "b-hap",
            "t": "text",
            "text": "Chỉ vế đúng = kịch bản đẹp",
            "x": 2028,
            "y": 380,
            "size": 44,
            "at": "l5:happy",
            "color": "muted"
          },
          {
            "id": "b-fill",
            "t": "text",
            "text": "→ luật lấp chỗ trống",
            "x": 2068,
            "y": 450,
            "size": 44,
            "at": "l5:fills",
            "color": "coral"
          },
          {
            "id": "b-fight",
            "t": "text",
            "text": "Khoảng trống = cãi nhau hẹn trước",
            "x": 2028,
            "y": 560,
            "size": 50,
            "at": "l6:fight",
            "color": "accent",
            "hl": [
              {
                "text": "hẹn trước",
                "at": "l6:booked"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "text",
            "text": "14:00",
            "x": 2028,
            "y": 670,
            "size": 36,
            "at": "l7:afternoon+0",
            "color": "muted"
          },
          {
            "id": "b-d1",
            "t": "text",
            "text": "15:00",
            "x": 2233,
            "y": 670,
            "size": 36,
            "at": "l7:afternoon+200",
            "color": "muted"
          },
          {
            "id": "b-d2",
            "t": "text",
            "text": "16:00",
            "x": 2438,
            "y": 670,
            "size": 36,
            "at": "l7:afternoon+400",
            "color": "muted"
          },
          {
            "id": "b-d3",
            "t": "text",
            "text": "17:00",
            "x": 2643,
            "y": 670,
            "size": 36,
            "at": "l7:afternoon+600",
            "color": "muted"
          },
          {
            "id": "b-d4",
            "t": "text",
            "text": "18:00",
            "x": 2848,
            "y": 670,
            "size": 36,
            "at": "l7:afternoon+800",
            "color": "muted"
          },
          {
            "id": "b-d5",
            "t": "text",
            "text": "19:00",
            "x": 3053,
            "y": 670,
            "size": 36,
            "at": "l7:afternoon+1000",
            "color": "muted"
          },
          {
            "id": "b-d6",
            "t": "text",
            "text": "20:00",
            "x": 3258,
            "y": 670,
            "size": 36,
            "at": "l7:afternoon+1200",
            "color": "muted"
          },
          {
            "id": "b-d7",
            "t": "text",
            "text": "21:00",
            "x": 3463,
            "y": 670,
            "size": 36,
            "at": "l7:afternoon+1400",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what makes an obligation sentence in an EPC contract complete?",
          "sub": "Vậy một câu nghĩa vụ trong hợp đồng EPC thế nào là đủ vế?",
          "keys": [
            "đủ vế"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two tools: the eight part sentence to write, and five reverse questions to review.",
          "sub": "Hai công cụ: mô hình câu 8 thành phần để viết, và 5 câu hỏi ngược để rà.",
          "keys": [
            "8 thành phần",
            "5 câu hỏi ngược"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Disputes rarely start when all runs on time. They start when someone is late, wrong, or short.",
          "sub": "Tranh chấp hầu như không xảy ra lúc đúng hẹn, mà khi có người làm chậm, làm sai, làm thiếu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So the value lives in the other half: if wrong, who decides, how much, how to notify.",
          "sub": "Nên giá trị nằm ở vế còn lại: sai thì sao, ai xác định, tối đa bao nhiêu, báo thế nào.",
          "keys": [
            "vế còn lại"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Only the happy path? It goes silent, and the law fills the gap, maybe not your way.",
          "sub": "Câu chỉ có vế đúng sẽ im lặng; luật lấp chỗ trống, có thể không như các bên muốn."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Every gap like that is a fight booked in advance.",
          "sub": "Mỗi khoảng trống như vậy là một cuộc cãi nhau được hẹn trước.",
          "keys": [
            "cãi nhau được hẹn trước"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "One afternoon, two p.m. to nine.",
          "sub": "Một buổi chiều, từ hai giờ đến chín giờ tối."
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s03",
      "module": "BRK-02",
      "data": {
        "kicker": "Công cụ 1",
        "title": "Tám câu hỏi cho một câu",
        "hl": "Tám câu hỏi",
        "sub": "Câu nghĩa vụ hoàn chỉnh trả lời đủ cả tám"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tool one. Eight questions for one sentence.",
          "sub": "Công cụ một. Tám câu hỏi cho một câu.",
          "keys": [
            "Tám câu hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A complete duty answers all eight.",
          "sub": "Câu nghĩa vụ hoàn chỉnh trả lời đủ cả tám."
        }
      ],
      "ref": "p3"
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
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 14:30 · Tám thành phần",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:eight"
          },
          {
            "id": "c-b0",
            "t": "badge",
            "n": 1,
            "x": 4006,
            "y": 195,
            "at": "l2:subject"
          },
          {
            "id": "c-p0",
            "t": "text",
            "text": "Chủ thể · ai làm",
            "x": 4086,
            "y": 170,
            "size": 42,
            "at": "l2:subject+200"
          },
          {
            "id": "c-b1",
            "t": "badge",
            "n": 2,
            "x": 4006,
            "y": 300,
            "at": "l2:action"
          },
          {
            "id": "c-p1",
            "t": "text",
            "text": "Hành vi · phải, được, không",
            "x": 4086,
            "y": 275,
            "size": 42,
            "at": "l2:action+200"
          },
          {
            "id": "c-b2",
            "t": "badge",
            "n": 3,
            "x": 4006,
            "y": 405,
            "at": "l2:object"
          },
          {
            "id": "c-p2",
            "t": "text",
            "text": "Đối tượng · làm gì",
            "x": 4086,
            "y": 380,
            "size": 42,
            "at": "l2:object+200"
          },
          {
            "id": "c-b3",
            "t": "badge",
            "n": 4,
            "x": 4006,
            "y": 510,
            "at": "l3:standard"
          },
          {
            "id": "c-p3",
            "t": "text",
            "text": "Tiêu chuẩn · ai xác nhận",
            "x": 4086,
            "y": 485,
            "size": 42,
            "at": "l3:standard+200"
          },
          {
            "id": "c-b4",
            "t": "badge",
            "n": 5,
            "x": 4846,
            "y": 195,
            "at": "l3:time"
          },
          {
            "id": "c-p4",
            "t": "text",
            "text": "Thời hạn, điều kiện",
            "x": 4926,
            "y": 170,
            "size": 42,
            "at": "l3:time+200"
          },
          {
            "id": "c-b5",
            "t": "badge",
            "n": 6,
            "x": 4846,
            "y": 300,
            "at": "l4:consequence"
          },
          {
            "id": "c-p5",
            "t": "text",
            "text": "Hậu quả khi vi phạm",
            "x": 4926,
            "y": 275,
            "size": 42,
            "at": "l4:consequence+200",
            "color": "coral"
          },
          {
            "id": "c-b6",
            "t": "badge",
            "n": 7,
            "x": 4846,
            "y": 405,
            "at": "l4:limits"
          },
          {
            "id": "c-p6",
            "t": "text",
            "text": "Giới hạn, ngoại lệ",
            "x": 4926,
            "y": 380,
            "size": 42,
            "at": "l4:limits+200",
            "color": "coral"
          },
          {
            "id": "c-b7",
            "t": "badge",
            "n": 8,
            "x": 4846,
            "y": 510,
            "at": "l4:procedure"
          },
          {
            "id": "c-p7",
            "t": "text",
            "text": "Thủ tục · báo, khiếu nại",
            "x": 4926,
            "y": 485,
            "size": 42,
            "at": "l4:procedure+200",
            "color": "coral"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Vế 6, 7, 8: hay bị bỏ",
            "x": 3996,
            "y": 620,
            "size": 50,
            "at": "l5:dropped",
            "color": "accent",
            "hl": [
              {
                "text": "hay bị bỏ",
                "at": "l5:dropped"
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
          "say": "Two thirty. Bác Bình writes the eight parts down the margin.",
          "sub": "Hai rưỡi. Bác Bình ghi tám thành phần dọc lề giấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One, subject: who acts. Two, action: must, may, must not. Three, object: what.",
          "sub": "Một, chủ thể: ai làm. Hai, hành vi: phải, được hay không được. Ba, đối tượng: làm gì."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Four, standard: what is right, who confirms. Five, time or condition.",
          "sub": "Bốn, tiêu chuẩn: thế nào là đúng, ai xác nhận. Năm, thời hạn, điều kiện."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Six, consequence. Seven, limits and exceptions. Eight, procedure: notice, proof, claims.",
          "sub": "Sáu, hậu quả khi vi phạm. Bảy, giới hạn, ngoại lệ. Tám, thủ tục: thông báo, chứng minh, khiếu nại."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Guess which three get dropped most: six, seven and eight.",
          "sub": "Đoán xem ba vế nào hay bị bỏ nhất: sáu, bảy và tám.",
          "keys": [
            "hay bị bỏ nhất"
          ]
        }
      ],
      "ref": "p3,p5"
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
          },
          {
            "at": 150,
            "fit": "D",
            "ms": 900
          },
          {
            "at": "l6",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 15:00 · Ghép câu mẫu",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Three"
          },
          {
            "id": "d-p0",
            "t": "text",
            "text": "1. The Contractor",
            "x": 5964,
            "y": 155,
            "size": 30,
            "at": "l2:Contractor",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "d-p1",
            "t": "text",
            "text": "2. shall complete",
            "x": 5964,
            "y": 217,
            "size": 30,
            "at": "l2:complete",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "d-p2",
            "t": "text",
            "text": "3. the Works",
            "x": 5964,
            "y": 279,
            "size": 30,
            "at": "l2:Works",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "d-p3",
            "t": "text",
            "text": "4. in accordance with the Employer's Requirements",
            "x": 5964,
            "y": 341,
            "size": 30,
            "at": "l3:Requirements",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "d-p4",
            "t": "text",
            "text": "5. by the Time for Completion",
            "x": 5964,
            "y": 403,
            "size": 30,
            "at": "l3:Time",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "d-p5",
            "t": "text",
            "text": "6. shall pay Delay Damages",
            "x": 5964,
            "y": 465,
            "size": 30,
            "at": "l4:Delay",
            "font": "base",
            "color": "coral"
          },
          {
            "id": "d-p6",
            "t": "text",
            "text": "7. subject to the cap in Clause [ ]",
            "x": 5964,
            "y": 527,
            "size": 30,
            "at": "l4:cap",
            "font": "base",
            "color": "coral"
          },
          {
            "id": "d-p7",
            "t": "text",
            "text": "8. within [ ] Days after becoming aware",
            "x": 5964,
            "y": 589,
            "size": 30,
            "at": "l5:within",
            "font": "base",
            "color": "coral"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6964,
            "y": 150,
            "w": 620,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1",
            "caption": "15:00 · Thảo ghé bàn",
            "icon": "page-facing-up"
          },
          {
            "id": "d-ref",
            "t": "text",
            "text": "Ở điều khác: phải dẫn chiếu",
            "x": 6964,
            "y": 610,
            "size": 36,
            "at": "l7:refer",
            "hl": [
              {
                "text": "dẫn chiếu",
                "at": "l7:refer"
              }
            ]
          },
          {
            "id": "d-gap",
            "t": "text",
            "text": "Không ở đâu = lỗ hổng",
            "x": 6964,
            "y": 680,
            "size": 40,
            "at": "l8:nowhere",
            "color": "coral",
            "hl": [
              {
                "text": "lỗ hổng",
                "at": "l8:gap"
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
          "say": "Three p.m. Thảo, an engineer from the technical team, brings a sample.",
          "sub": "Ba giờ chiều. Thảo, kỹ sư điện ban kỹ thuật, mang tới một câu mẫu.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The Contractor, shall complete, the Works: subject, action, object.",
          "sub": "Chủ thể, hành vi, đối tượng: The Contractor, shall complete, the Works."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Per the Employer's Requirements: standard. By the Time for Completion: time.",
          "sub": "Theo Yêu cầu của chủ đầu tư: tiêu chuẩn. Trước Thời hạn hoàn thành: thời hạn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Shall pay Delay Damages: consequence. Subject to the cap, except Employer delay: limits.",
          "sub": "Trả Tiền Bồi thường Chậm: hậu quả. Theo trần, trừ lỗi chủ đầu tư: giới hạn, ngoại lệ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Within so many days after becoming aware: procedure.",
          "sub": "Trong [ ] Ngày kể từ khi biết: thủ tục."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Firstly, must all eight fit in one line?",
          "sub": "Thứ nhất, cả tám phải nằm trong một dòng ạ?",
          "face": "thinking"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "binh",
          "say": "No. A part may live in another clause, but then the sentence must refer to it.",
          "sub": "Không. Thành phần có thể nằm ở điều khác, nhưng câu phải dẫn chiếu tới đúng điều đó.",
          "keys": [
            "dẫn chiếu"
          ]
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "binh",
          "say": "A part found nowhere at all, that is the gap.",
          "sub": "Thành phần không nằm ở đâu cả, mới là lỗ hổng.",
          "keys": [
            "lỗ hổng"
          ]
        }
      ],
      "ref": "p4,p6"
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
            "text": "③ 16:00 · Năm câu hỏi ngược",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Four"
          },
          {
            "id": "e-b0",
            "t": "badge",
            "n": 1,
            "x": 7952,
            "y": 195,
            "at": "l2:whom"
          },
          {
            "id": "e-q0",
            "t": "text",
            "text": "Nghĩa vụ cho ai, quyền cho ai?",
            "x": 8012,
            "y": 170,
            "size": 40,
            "at": "l2:whom+200"
          },
          {
            "id": "e-b1",
            "t": "badge",
            "n": 2,
            "x": 7952,
            "y": 283,
            "at": "l2:wrong"
          },
          {
            "id": "e-q1",
            "t": "text",
            "text": "Vế đúng hay sai? Vế kia đâu?",
            "x": 8012,
            "y": 258,
            "size": 40,
            "at": "l2:wrong+200"
          },
          {
            "id": "e-b2",
            "t": "badge",
            "n": 3,
            "x": 7952,
            "y": 371,
            "at": "l3:measured"
          },
          {
            "id": "e-q2",
            "t": "text",
            "text": "“Đúng” đo bằng gì, ai kết luận?",
            "x": 8012,
            "y": 346,
            "size": 40,
            "at": "l3:measured+200"
          },
          {
            "id": "e-b3",
            "t": "badge",
            "n": 4,
            "x": 7952,
            "y": 459,
            "at": "l3:consequence"
          },
          {
            "id": "e-q3",
            "t": "text",
            "text": "Sai: hậu quả, ai chịu, tối đa?",
            "x": 8012,
            "y": 434,
            "size": 40,
            "at": "l3:consequence+200"
          },
          {
            "id": "e-b4",
            "t": "badge",
            "n": 5,
            "x": 7952,
            "y": 547,
            "at": "l4:change"
          },
          {
            "id": "e-q4",
            "t": "text",
            "text": "Điều nào làm đổi câu này?",
            "x": 8012,
            "y": 522,
            "size": 40,
            "at": "l4:change+200"
          },
          {
            "id": "e-sub",
            "t": "text",
            "text": "subject to · notwithstanding",
            "x": 8012,
            "y": 610,
            "size": 34,
            "at": "l4:subject",
            "color": "muted",
            "font": "base"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Four p.m. Tool two: five reverse questions, for any sentence.",
          "sub": "Bốn giờ chiều. Công cụ hai: năm câu hỏi ngược, cho mọi câu luật, câu hợp đồng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: duty on whom, right for whom? Two: right case or wrong case? Where is the other half?",
          "sub": "Một: nghĩa vụ cho ai, quyền cho ai? Hai: câu nói làm đúng hay làm sai, vế còn lại ở đâu?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three: how is right measured, who concludes? Four: if wrong, the consequence, who bears it, how much, any cure?",
          "sub": "Ba: “đúng” đo bằng gì, ai kết luận? Bốn: sai thì hậu quả gì, ai chịu, tối đa bao nhiêu, có khắc phục không?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Five: does another clause change it, with subject to, or notwithstanding?",
          "sub": "Năm: có điều khoản nào khác làm thay đổi câu này không, như “subject to”, “notwithstanding”?"
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s08",
      "module": "BRK-04",
      "data": {
        "title": "Hiểu lầm thường gặp",
        "wrong": "Câu càng ngắn, càng ít rủi ro",
        "right": "Câu đủ vế mới an toàn",
        "wrongIllus": "scissors",
        "rightIllus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Shorter means safer? A common myth.",
          "sub": "Câu càng ngắn càng ít rủi ro? Hiểu lầm phổ biến."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Only a complete sentence is safe.",
          "sub": "Câu đủ vế mới an toàn.",
          "keys": [
            "Câu đủ vế mới an toàn"
          ]
        }
      ],
      "ref": "p8,p9"
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
          },
          {
            "at": "l3",
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
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8972,
            "y": 120,
            "w": 580,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "shrug",
                  "face": "surprised"
                }
              ],
              "props": [
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                }
              ]
            },
            "at": "l1",
            "caption": "16:20 · soi câu của Dũng",
            "icon": "page-facing-up"
          },
          {
            "id": "e-o1",
            "t": "text",
            "text": "Tiến độ nào? Ai xác nhận?",
            "x": 8972,
            "y": 560,
            "size": 34,
            "at": "l2:which",
            "color": "coral"
          },
          {
            "id": "e-o2",
            "t": "text",
            "text": "Chậm do chủ đầu tư thì sao?",
            "x": 8972,
            "y": 620,
            "size": 34,
            "at": "l2:owner",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Now run Dũng's sentence through them.",
          "sub": "Giờ soi câu của Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Which schedule? Who confirms completion? Late, then what? Late because of the owner, then what?",
          "sub": "Tiến độ nào? Ai xác nhận hoàn thành? Chậm thì sao? Chậm vì chủ đầu tư thì sao?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "So my short sentence just left the hard part for later?",
          "sub": "Vậy câu gọn của em chỉ là để phần khó lại cho sau?",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Yes. Answered later, in an arbitration room, at both parties' cost.",
          "sub": "Đúng. Sẽ được trả lời sau này, trong phòng trọng tài, bằng chi phí của cả hai bên.",
          "keys": [
            "trong phòng trọng tài"
          ]
        }
      ],
      "ref": "p8"
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
            "text": "④ 17:00 · “Đúng hạn thì không phạt”",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Five"
          },
          {
            "id": "f-s",
            "t": "text",
            "text": "“Đúng hạn thì không chịu phạt”",
            "x": 60,
            "y": 1250,
            "size": 36,
            "at": "l1:time",
            "color": "muted"
          },
          {
            "id": "f-only",
            "t": "text",
            "text": "Chỉ có vế đúng",
            "x": 60,
            "y": 1320,
            "size": 48,
            "at": "l2:right",
            "color": "coral",
            "hl": [
              {
                "text": "vế đúng",
                "at": "l2:right"
              }
            ]
          },
          {
            "id": "f-m4",
            "t": "text",
            "text": "thiếu ④ tiêu chuẩn: ai xác nhận?",
            "x": 60,
            "y": 1410,
            "size": 38,
            "at": "l3:standard"
          },
          {
            "id": "f-m6",
            "t": "text",
            "text": "thiếu ⑥ hậu quả: phạt bao nhiêu?",
            "x": 60,
            "y": 1475,
            "size": 38,
            "at": "l3:consequence"
          },
          {
            "id": "f-m7",
            "t": "text",
            "text": "thiếu ⑦ trần, lỗi chủ đầu tư",
            "x": 60,
            "y": 1540,
            "size": 38,
            "at": "l4:cap"
          },
          {
            "id": "f-m8",
            "t": "text",
            "text": "thiếu ⑧ gia hạn theo điều nào?",
            "x": 60,
            "y": 1605,
            "size": 38,
            "at": "l4:extension"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Five p.m. The classic: if the contractor finishes on time, no penalty.",
          "sub": "Năm giờ chiều. Câu kinh điển: “Nếu nhà thầu hoàn thành đúng hạn thì không chịu phạt.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It has only the right half.",
          "sub": "Câu chỉ có vế đúng.",
          "keys": [
            "vế đúng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Missing: the standard, who confirms completion. The consequence, how much for delay.",
          "sub": "Thiếu tiêu chuẩn: ai xác nhận hoàn thành. Thiếu hậu quả: chậm phạt bao nhiêu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Missing limits: the cap, owner delay. Missing procedure: which extension clause.",
          "sub": "Thiếu giới hạn: trần, lỗi chủ đầu tư. Thiếu thủ tục: gia hạn theo điều nào."
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "17:10 · bàn pháp chế",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Giữ mỗi “đúng hạn thì không phạt”",
          "why": "Câu chỉ có vế đúng: thiếu mức phạt chậm theo ngày, trần, và cửa gia hạn. Khi chậm, câu im lặng.",
          "rule": "Viết vế sai trước, vế đúng sẽ tự rõ"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "The boss likes it short. I'll keep no penalty if on time. Done!",
          "sub": "Sếp thích gọn. Em giữ câu “đúng hạn thì không phạt” thôi. Ok, làm luôn!",
          "pose": "thumb",
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
          "say": "Then lateness has no price, no cap, no extension door.",
          "sub": "Vậy chậm thì không có giá, không trần, không cửa gia hạn.",
          "keys": [
            "không cửa gia hạn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Làm lại nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "First the delay consequence: a daily rate, a cap, and the link to extensions.",
          "sub": "Trước hết viết hậu quả chậm: mức theo ngày, trần, và nối với điều gia hạn.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. Write the wrong half first.",
          "sub": "Đúng. Viết vế sai trước.",
          "phase": "redo",
          "keys": [
            "Viết vế sai trước"
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
      "id": "s12",
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
              "f-a1",
              "f-a5"
            ],
            "zoom": 1.1,
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
            "id": "f-after",
            "t": "box",
            "x": 900,
            "y": 1250,
            "w": 790,
            "h": 530,
            "at": "l1:After",
            "stroke": 4,
            "color": "accent"
          },
          {
            "id": "f-a0",
            "t": "text",
            "text": "Sau:",
            "x": 930,
            "y": 1270,
            "size": 44,
            "at": "l1:After",
            "color": "accent"
          },
          {
            "id": "f-a1",
            "t": "text",
            "text": "Không đạt Vận hành TM trước Ngày bắt buộc",
            "x": 930,
            "y": 1340,
            "size": 28,
            "at": "l1:operation",
            "font": "base"
          },
          {
            "id": "f-a2",
            "t": "text",
            "text": "(được gia hạn theo Điều [ ])",
            "x": 930,
            "y": 1390,
            "size": 28,
            "at": "l2:extended",
            "font": "base",
            "hl": [
              {
                "text": "gia hạn",
                "at": "l2:extended"
              }
            ]
          },
          {
            "id": "f-a3",
            "t": "text",
            "text": "→ Tiền Bồi thường Chậm theo ngày, Phụ lục [ ]",
            "x": 930,
            "y": 1440,
            "size": 28,
            "at": "l2:daily",
            "font": "base"
          },
          {
            "id": "f-a4",
            "t": "text",
            "text": "tổng không vượt quá [ ]% Giá Hợp đồng",
            "x": 930,
            "y": 1490,
            "size": 28,
            "at": "l3:capped",
            "font": "base",
            "hl": [
              {
                "text": "[ ]% Giá Hợp đồng",
                "at": "l3:price"
              }
            ]
          },
          {
            "id": "f-a5",
            "t": "text",
            "text": "không miễn nghĩa vụ hoàn thành · giữ quyền chấm dứt",
            "x": 930,
            "y": 1540,
            "size": 28,
            "at": "l4:finish",
            "font": "base",
            "color": "coral"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Viết vế sai trước",
            "x": 930,
            "y": 1650,
            "size": 56,
            "at": "l5:wrong",
            "color": "accent",
            "hl": [
              {
                "text": "vế sai trước",
                "at": "l5:wrong"
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
          "say": "After: miss commercial operation by the required date,",
          "sub": "Bản sau: không đạt Vận hành Thương mại trước Ngày Bắt buộc,"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "as extended under a clause, and pay daily delay damages per the appendix,",
          "sub": "được gia hạn theo Điều [ ], thì trả Tiền Bồi thường Chậm theo mức ngày tại Phụ lục [ ],"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "capped at a percent of the contract price.",
          "sub": "tổng không vượt quá [ ]% Giá Hợp đồng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Paying does not end the duty to finish, nor the right to terminate.",
          "sub": "Trả rồi vẫn không miễn nghĩa vụ hoàn thành, không mất quyền chấm dứt.",
          "keys": [
            "không miễn nghĩa vụ hoàn thành"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Write the wrong half first; the right half becomes obvious.",
          "sub": "Viết vế sai trước, vế đúng sẽ tự rõ.",
          "keys": [
            "vế đúng sẽ tự rõ"
          ]
        }
      ],
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
            "text": "⑤ 18:00 · Hậu quả khớp luật",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Six"
          },
          {
            "id": "g-418",
            "t": "text",
            "text": "Bộ luật Dân sự 2015 · Điều 418",
            "x": 2028,
            "y": 1250,
            "size": 44,
            "at": "l1:Civil"
          },
          {
            "id": "g-p",
            "t": "text",
            "text": "Phạt vi phạm: nộp một khoản tiền",
            "x": 2028,
            "y": 1325,
            "size": 40,
            "at": "l2:penalty"
          },
          {
            "id": "g-o",
            "t": "text",
            "text": "Chỉ phạt · hoặc phạt + bồi thường",
            "x": 2028,
            "y": 1390,
            "size": 40,
            "at": "l2:plus"
          },
          {
            "id": "g-only",
            "t": "text",
            "text": "Chỉ ghi phạt → chỉ chịu phạt",
            "x": 2028,
            "y": 1480,
            "size": 48,
            "at": "l3:only",
            "color": "coral",
            "hl": [
              {
                "text": "chỉ chịu phạt",
                "at": "l3:only"
              }
            ]
          },
          {
            "id": "g-lost",
            "t": "text",
            "text": "Im lặng: mất quyền đòi bồi thường",
            "x": 2028,
            "y": 1560,
            "size": 36,
            "at": "l4:silence",
            "color": "coral"
          },
          {
            "id": "g-fix",
            "t": "text",
            "text": "Ghi rõ: vừa phạt vừa bồi thường",
            "x": 2028,
            "y": 1650,
            "size": 44,
            "at": "l5:both",
            "color": "accent",
            "hl": [
              {
                "text": "vừa phạt vừa bồi thường",
                "at": "l5:both"
              }
            ]
          },
          {
            "id": "g-box",
            "t": "box",
            "x": 2968,
            "y": 1250,
            "w": 690,
            "h": 420,
            "at": "l6:Construction",
            "stroke": 4
          },
          {
            "id": "g-86",
            "t": "text",
            "text": "Luật Xây dựng 2025, Điều 86",
            "x": 2998,
            "y": 1280,
            "size": 34,
            "at": "l6:Construction"
          },
          {
            "id": "g-86a",
            "t": "text",
            "text": "thiệt hại thực tế, hoặc",
            "x": 2998,
            "y": 1350,
            "size": 36,
            "at": "l6:actual"
          },
          {
            "id": "g-86b",
            "t": "text",
            "text": "mức thiệt hại định trước",
            "x": 2998,
            "y": 1410,
            "size": 36,
            "at": "l6:agreed",
            "hl": [
              {
                "text": "định trước",
                "at": "l6:agreed"
              }
            ]
          },
          {
            "id": "g-ltm",
            "t": "text",
            "text": "Luật Thương mại 2005: kiểm hiện hành",
            "x": 2998,
            "y": 1510,
            "size": 30,
            "at": "l7:Commercial",
            "color": "muted"
          },
          {
            "id": "g-b6",
            "t": "text",
            "text": "Đào sâu: bài 6",
            "x": 2998,
            "y": 1590,
            "size": 36,
            "at": "l7:six",
            "color": "muted"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Điều 418 Bộ luật Dân sự 2015; Điều 86 Luật Xây dựng 2025; Luật Thương mại 2005 (theo bài học)",
            "x": 2028,
            "y": 1825,
            "size": 26,
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
          "say": "Six p.m. The consequence must fit the law. Civil Code, Article four eighteen.",
          "sub": "Sáu giờ chiều. Vế hậu quả phải khớp luật. Điều 418 Bộ luật Dân sự 2015."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A penalty is an agreed sum paid for breach. Agree penalty only, or penalty plus damages.",
          "sub": "Phạt vi phạm: bên vi phạm nộp một khoản tiền; có thể thỏa thuận chỉ phạt, hoặc vừa phạt vừa bồi thường."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Agree only a penalty, and the breaching party pays only the penalty.",
          "sub": "Nếu chỉ thỏa thuận phạt thì bên vi phạm chỉ phải chịu phạt.",
          "keys": [
            "chỉ phải chịu phạt"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So silence can cut the owner's right to damages.",
          "sub": "Nên câu hậu quả im lặng có thể cắt mất quyền đòi bồi thường của chủ đầu tư."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "binh",
          "say": "Then we write it plainly: penalty and damages, both.",
          "sub": "Vậy mình ghi rõ: vừa phạt vừa bồi thường.",
          "keys": [
            "vừa phạt vừa bồi thường"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "The Construction Law, Article eighty six: actual loss, or a pre agreed amount.",
          "sub": "Điều 86 Luật Xây dựng 2025: bồi thường theo thiệt hại thực tế, hoặc mức thiệt hại định trước."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "The Commercial Law has its own rules; check current law. More in lesson six.",
          "sub": "Luật Thương mại 2005 có quy định riêng, cần kiểm văn bản hiện hành. Bài 6 đào sâu."
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s14",
      "module": "BRK-07",
      "data": {
        "question": "“Thanh toán khi nghiệm thu” thì có gì sai?",
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
          "say": "What could be wrong with pay on acceptance?",
          "sub": "“Thanh toán khi nghiệm thu” thì có gì sai?",
          "keys": [
            "Thanh toán khi nghiệm thu"
          ]
        }
      ],
      "ref": "p15"
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
            "text": "⑥ 19:00 · Thanh toán khi nghiệm thu",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Seven"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "money-bag"
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
                  "shot": "E-SHOT-10",
                  "on": "binh",
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
            "caption": "19:00 · họp trực tuyến",
            "icon": "money-bag"
          },
          {
            "id": "h-q1",
            "t": "text",
            "text": "Chưa nghiệm thu thì sao?",
            "x": 3996,
            "y": 1260,
            "size": 42,
            "at": "l3:not yet",
            "color": "coral"
          },
          {
            "id": "h-q2",
            "t": "text",
            "text": "Ai nghiệm thu, bao lâu?",
            "x": 3996,
            "y": 1335,
            "size": 42,
            "at": "l3:Who"
          },
          {
            "id": "h-q3",
            "t": "text",
            "text": "Im lặng = đã nghiệm thu?",
            "x": 3996,
            "y": 1410,
            "size": 46,
            "at": "l4:silent",
            "color": "coral",
            "hl": [
              {
                "text": "Im lặng",
                "at": "l4:silent"
              }
            ]
          },
          {
            "id": "h-dee",
            "t": "text",
            "text": "→ điều “coi như chấp thuận”",
            "x": 3996,
            "y": 1490,
            "size": 40,
            "at": "l5:deemed",
            "hl": [
              {
                "text": "coi như chấp thuận",
                "at": "l5:deemed"
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
          "say": "Seven p.m., online. This is Sam, for the contractor.",
          "sub": "Bảy giờ tối, họp trực tuyến. Đây là Sam, đại diện nhà thầu.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Simple: the employer pays when the work is accepted.",
          "sub": "Đơn giản thôi: chủ đầu tư thanh toán khi công việc được nghiệm thu.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Slowly now. If not yet accepted? Who accepts, and how fast?",
          "sub": "Từ từ, mình xem lại đã. Chưa nghiệm thu thì sao? Ai nghiệm thu, trong bao lâu?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "And if the owner stays silent, is that acceptance?",
          "sub": "Còn chủ đầu tư im lặng thì có bị coi là đã nghiệm thu không?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "That question leads to deemed approval, scattered at every milestone in contractor drafts.",
          "sub": "Câu cuối dẫn tới điều “coi như chấp thuận”, bản nháp mẫu nhà thầu rải ở mọi mốc.",
          "keys": [
            "coi như chấp thuận"
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
      "ref": "p15"
    },
    {
      "id": "s16",
      "module": "BRK-04",
      "data": {
        "title": "Hai cách viết câu thanh toán",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrong": "Trả trong [ ] ngày sau khi nghiệm thu",
        "right": "Trả trong [ ] ngày sau khi Chứng nhận được cấp",
        "wrongIllus": "hourglass-not-done",
        "rightIllus": "page-facing-up"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A: pay after acceptance.",
          "sub": "Cách A: trả sau khi nghiệm thu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "B: after a certificate is issued.",
          "sub": "Cách B: sau khi Chứng nhận được cấp.",
          "keys": [
            "Chứng nhận"
          ]
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
            "fit": "H",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "h-a",
            "t": "text",
            "text": "A: hồ sơ nằm bàn, chưa ký",
            "x": 3996,
            "y": 1590,
            "size": 38,
            "at": "l1:unsigned",
            "color": "coral"
          },
          {
            "id": "h-a2",
            "t": "text",
            "text": "→ thầu đòi tiền như đã nghiệm thu",
            "x": 4036,
            "y": 1650,
            "size": 34,
            "at": "l1:accepted",
            "color": "coral"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "B: hạn cấp, hoặc từ chối",
            "x": 4836,
            "y": 1780,
            "size": 34,
            "at": "l2:refuse",
            "color": "accent"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Gắn tiền vào chứng nhận có hạn",
            "x": 3996,
            "y": 1750,
            "size": 46,
            "at": "l4:certificate",
            "color": "accent",
            "hl": [
              {
                "text": "chứng nhận có hạn",
                "at": "l4:certificate"
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
          "say": "With A, the file sits unsigned. The contractor cries delay, and with deemed approval, claims as if accepted.",
          "sub": "Với A, hồ sơ nằm bàn không ai ký; nhà thầu nói cố tình trì hoãn, có điều coi như chấp thuận thì đòi tiền như đã nghiệm thu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "B adds a deadline to issue or refuse with reasons, and a fence around deemed approval.",
          "sub": "B kèm thời hạn chủ đầu tư phải cấp hoặc từ chối có lý do, và hàng rào cho chấp thuận mặc nhiên."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Tie money to a certificate with a deadline, not to a loose word.",
          "sub": "Gắn tiền vào một chứng nhận có thời hạn, đừng gắn vào một chữ chung chung.",
          "keys": [
            "chứng nhận có thời hạn"
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 20:00 · Bảng 8 cột, 10 câu",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Eight"
          },
          {
            "id": "i-pick",
            "t": "text",
            "text": "Chọn: hoàn thành, thanh toán, bảo lãnh, thử nghiệm, khiếm khuyết",
            "x": 5964,
            "y": 1240,
            "size": 28,
            "at": "l1:completion",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "i-rule",
            "t": "text",
            "text": "Có: chép · ở điều khác: số điều · trống: tô đậm",
            "x": 5964,
            "y": 1285,
            "size": 28,
            "at": "l2:copy",
            "font": "base"
          },
          {
            "id": "i-s",
            "t": "text",
            "text": "“Sửa mọi Khiếm khuyết được thông báo”",
            "x": 5964,
            "y": 1340,
            "size": 34,
            "at": "l3:Defect",
            "color": "muted"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1410,
            "w": 185,
            "h": 70,
            "at": "l4:Subject+0",
            "stroke": 4
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 6164,
            "y": 1410,
            "w": 185,
            "h": 70,
            "at": "l4:Subject+120",
            "stroke": 4
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 6364,
            "y": 1410,
            "w": 185,
            "h": 70,
            "at": "l4:Subject+240",
            "stroke": 4
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 6564,
            "y": 1410,
            "w": 185,
            "h": 70,
            "at": "l4:Subject+360",
            "stroke": 4
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 6764,
            "y": 1410,
            "w": 185,
            "h": 70,
            "at": "l4:Subject+480",
            "stroke": 4
          },
          {
            "id": "i-c5",
            "t": "box",
            "x": 6964,
            "y": 1410,
            "w": 185,
            "h": 70,
            "at": "l4:Subject+600",
            "stroke": 4
          },
          {
            "id": "i-c6",
            "t": "box",
            "x": 7164,
            "y": 1410,
            "w": 185,
            "h": 70,
            "at": "l4:Subject+720",
            "stroke": 4
          },
          {
            "id": "i-c7",
            "t": "box",
            "x": 7364,
            "y": 1410,
            "w": 185,
            "h": 70,
            "at": "l4:Subject+840",
            "stroke": 4
          },
          {
            "id": "i-h0",
            "t": "text",
            "text": "CT",
            "x": 6014,
            "y": 1422,
            "size": 40,
            "at": "l4:Subject+100"
          },
          {
            "id": "i-h1",
            "t": "text",
            "text": "HV",
            "x": 6214,
            "y": 1422,
            "size": 40,
            "at": "l4:Subject+220"
          },
          {
            "id": "i-h2",
            "t": "text",
            "text": "ĐT",
            "x": 6414,
            "y": 1422,
            "size": 40,
            "at": "l4:Subject+340"
          },
          {
            "id": "i-h3",
            "t": "text",
            "text": "TC",
            "x": 6614,
            "y": 1422,
            "size": 40,
            "at": "l4:Subject+460"
          },
          {
            "id": "i-h4",
            "t": "text",
            "text": "TH",
            "x": 6814,
            "y": 1422,
            "size": 40,
            "at": "l4:Subject+580"
          },
          {
            "id": "i-h5",
            "t": "text",
            "text": "HQ",
            "x": 7014,
            "y": 1422,
            "size": 40,
            "at": "l4:Subject+700"
          },
          {
            "id": "i-h6",
            "t": "text",
            "text": "GH",
            "x": 7214,
            "y": 1422,
            "size": 40,
            "at": "l4:Subject+820"
          },
          {
            "id": "i-h7",
            "t": "text",
            "text": "TT",
            "x": 7414,
            "y": 1422,
            "size": 40,
            "at": "l4:Subject+940"
          },
          {
            "id": "i-v0",
            "t": "text",
            "text": "✓",
            "x": 6034,
            "y": 1495,
            "size": 54,
            "at": "l4:Subject",
            "color": "accent"
          },
          {
            "id": "i-v1",
            "t": "text",
            "text": "✓",
            "x": 6234,
            "y": 1495,
            "size": 54,
            "at": "l4:must",
            "color": "accent"
          },
          {
            "id": "i-v2",
            "t": "text",
            "text": "✓",
            "x": 6434,
            "y": 1495,
            "size": 54,
            "at": "l4:notified",
            "color": "accent"
          },
          {
            "id": "i-v3",
            "t": "box",
            "x": 6564,
            "y": 1500,
            "w": 185,
            "h": 70,
            "at": "l5:Standard",
            "fill": "#e4574a",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "i-v4",
            "t": "box",
            "x": 6764,
            "y": 1500,
            "w": 185,
            "h": 70,
            "at": "l5:Time",
            "fill": "#e4574a",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "i-v5",
            "t": "box",
            "x": 6964,
            "y": 1500,
            "w": 185,
            "h": 70,
            "at": "l5:Consequence",
            "fill": "#e4574a",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "i-v6",
            "t": "box",
            "x": 7164,
            "y": 1500,
            "w": 185,
            "h": 70,
            "at": "l6:Limits",
            "fill": "#e4574a",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "i-v7",
            "t": "box",
            "x": 7364,
            "y": 1500,
            "w": 185,
            "h": 70,
            "at": "l6:Procedure",
            "fill": "#e4574a",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "i-fix",
            "t": "text",
            "text": "+ [ ] Ngày · thử lại · tự sửa, trừ tiền",
            "x": 5964,
            "y": 1610,
            "size": 36,
            "at": "l7:retest",
            "color": "accent",
            "hl": [
              {
                "text": "tự sửa, trừ tiền",
                "at": "l7:deduct"
              }
            ]
          },
          {
            "id": "i-ex",
            "t": "text",
            "text": "+ ngoại lệ: vận hành sai",
            "x": 5964,
            "y": 1670,
            "size": 36,
            "at": "l7:misuse",
            "color": "accent"
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Ô trống = câu đối tác sẽ hỏi",
            "x": 5964,
            "y": 1750,
            "size": 48,
            "at": "l8:partner",
            "color": "coral",
            "hl": [
              {
                "text": "đối tác sẽ hỏi",
                "at": "l8:partner"
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
          "say": "Eight p.m. The exercise: ten sentences, on completion, payment, guarantees, tests, defects.",
          "sub": "Tám giờ tối. Bài tập: 10 câu, ưu tiên hoàn thành, thanh toán, bảo lãnh, thử nghiệm, khiếm khuyết."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Eight columns. Present: copy it. Elsewhere: the clause number. Missing: shade it.",
          "sub": "Kẻ 8 cột. Có thì chép, ở điều khác thì ghi số điều, không có thì tô đậm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Try this one: the contractor shall remedy every notified Defect.",
          "sub": "Thử câu này: “Nhà thầu sửa mọi Khiếm khuyết được thông báo.”",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Subject: the contractor. Action: must remedy. Object: notified defects.",
          "sub": "Chủ thể: Nhà thầu. Hành vi: phải sửa. Đối tượng: Khiếm khuyết được thông báo."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "binh",
          "say": "Standard: blank. Time: blank. Consequence: blank. Can we fix it ourselves and deduct? Silent.",
          "sub": "Tiêu chuẩn: trống. Thời hạn: trống. Hậu quả: trống, không nói chủ đầu tư được tự sửa và trừ tiền.",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "binh",
          "say": "Limits: blank, no misuse exclusion. Procedure: blank.",
          "sub": "Giới hạn: trống, chưa loại trừ vận hành sai. Thủ tục: trống."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "The rewrite adds days from notice, a retest, the right to fix and deduct, and a misuse exception.",
          "sub": "Câu viết lại thêm [ ] Ngày từ khi nhận thông báo, thử lại sau sửa, quyền tự sửa và trừ tiền, ngoại lệ do vận hành sai."
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Every empty cell is a question your partner will ask in a dispute.",
          "sub": "Ô trống trong bảng chính là câu hỏi đối tác sẽ hỏi khi tranh chấp.",
          "keys": [
            "đối tác sẽ hỏi"
          ]
        }
      ],
      "ref": "p18,p19,p20"
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
            "text": "21:00 · Cùng bàn ấy",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Nine"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "check-mark-button"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "binh",
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
            "caption": "21:00 · bàn pháp chế",
            "icon": "check-mark-button"
          },
          {
            "id": "j-c",
            "t": "text",
            "text": "Cột hậu quả, thủ tục trống nhất?",
            "x": 7932,
            "y": 1260,
            "size": 38,
            "at": "l2:consequence"
          },
          {
            "id": "j-c2",
            "t": "text",
            "text": "→ thiếu tầng hậu quả (bài 1)",
            "x": 7972,
            "y": 1330,
            "size": 38,
            "at": "l2:layer",
            "color": "coral"
          },
          {
            "id": "j-c3",
            "t": "text",
            "text": "Ô trống → issues list + câu đề xuất",
            "x": 7932,
            "y": 1410,
            "size": 36,
            "at": "l2:issues",
            "color": "accent"
          },
          {
            "id": "j-ab",
            "t": "text",
            "text": "A ✗   B ✓",
            "x": 7932,
            "y": 1520,
            "size": 72,
            "at": "l4:B",
            "color": "accent",
            "hl": [
              {
                "text": "B ✓",
                "at": "l4:B"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Sai một li, đi một dặm”",
            "x": 7932,
            "y": 1690,
            "size": 50,
            "at": "l5:inch",
            "color": "accent",
            "hl": [
              {
                "text": "đi một dặm",
                "at": "l5:mile"
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
          "say": "Nine p.m. Same desk. Blank cells counted by column.",
          "sub": "Chín giờ tối. Vẫn bàn ấy. Đếm ô trống theo cột."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Consequence and procedure emptiest? The draft lacks the consequence layer. Each blank goes on the issues list.",
          "sub": "Cột hậu quả, thủ tục trống nhiều nhất? Bản nháp thiếu tầng hậu quả, như bài 1 cảnh báo. Mỗi ô trống vào issues list kèm câu đề xuất."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "I rewrote my sentence. Which schedule, who confirms, delay damages, cap, extension. It's long now!",
          "sub": "Em viết lại câu rồi: tiến độ nào, ai xác nhận, bồi thường chậm, trần, gia hạn. Giờ dài ghê!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Longer, and safe. B, not A.",
          "sub": "Dài hơn, mà an toàn. Câu B, không phải câu A.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Off by an inch, lost by a mile. Today, Dũng got back his inch.",
          "sub": "“Sai một li, đi một dặm.” Hôm nay Dũng đã lấy lại một li ấy.",
          "keys": [
            "lấy lại một li"
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
      "ref": "p21,outro"
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
            "at": "l1:eight",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:wrong",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:certificate",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 5516,
            "y": 40,
            "at": "l1:eight"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1580,
            "y": 1130,
            "at": "l2:wrong"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5516,
            "y": 1130,
            "at": "l3:certificate"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Tham khảo chung; tình huống là minh hoạ, không lấy từ hợp đồng hay dự án cụ thể nào.",
            "x": 7932,
            "y": 1780,
            "size": 28,
            "at": "l4",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "z-note2",
            "t": "text",
            "text": "Việc cụ thể: đối chiếu văn bản hiện hành và hỏi luật sư.",
            "x": 7932,
            "y": 1822,
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
          "say": "So: write with eight parts, review with five reverse questions.",
          "sub": "Tóm lại: viết bằng 8 thành phần, rà bằng 5 câu hỏi ngược.",
          "keys": [
            "8 thành phần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Write the wrong half first, and say whether penalty and damages combine.",
          "sub": "Viết vế sai trước, và nói rõ phạt có cộng bồi thường không.",
          "keys": [
            "Viết vế sai trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Tie payment to a certificate with a deadline.",
          "sub": "Gắn tiền vào một chứng nhận có thời hạn.",
          "keys": [
            "chứng nhận có thời hạn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "General knowledge, illustrative story. For a real contract, check current law and ask a lawyer.",
          "sub": "Bài để tham khảo chung, tình huống là minh hoạ. Việc cụ thể, đối chiếu văn bản hiện hành và hỏi luật sư.",
          "keys": [
            "hỏi luật sư"
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
        "q": "The delay clause names a penalty but is silent on damages, what should counsel add?",
        "options": [
          "A statement that the employer may claim both the penalty and compensation for losses",
          "A statement that the contractor may choose which of the two it prefers to pay",
          "Nothing, because the law always adds damages on top of any agreed penalty"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "balance-scale",
        "why": "Theo Điều 418 Bộ luật Dân sự 2015, nếu chỉ thỏa thuận phạt thì bên vi phạm chỉ phải chịu phạt; muốn đòi cả bồi thường thì phải ghi rõ vừa phạt vừa bồi thường."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The delay clause names a penalty but is silent on damages, what should counsel add?",
          "sub": "Điều phạt chậm có phạt nhưng im lặng về bồi thường, pháp chế nên thêm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "State that the employer may claim the penalty and compensation, both.",
          "sub": "Ghi rõ chủ đầu tư được đòi cả tiền phạt lẫn bồi thường thiệt hại."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "A silent consequence can cost you a right.",
          "sub": "Câu hậu quả im lặng có thể làm mất một quyền."
        }
      ],
      "ref": "questions[21]"
    },
    {
      "id": "s22",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi điền bảng 8 thành phần cho 10 câu"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, pick ten sentences, fill the eight part table, and rewrite the delay and payment sentences.",
          "sub": "Hôm nay, chọn 10 câu, điền bảng 8 thành phần, viết lại ít nhất câu phạt chậm và câu thanh toán."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next: shall, may, deemed. Now, the forty questions below.",
          "sub": "Bài sau: shall, may, deemed. Giờ thử bốn mươi câu hỏi bên dưới."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-21: câu hỏi để người xem đoán sai — “câu ngắn gọn (A) hay câu đủ vế (B) an toàn hơn?”, đa số chọn A, lật: B (hiểu lầm p8) → câu A là của Dũng, Bác Bình “từ từ…”, “Sai một li, đi một dặm”. Đét trái + bảng 10 ô theo MỘT CHIỀU thứ Ba 14:00 → 21:00: (BRK-02) 8 thành phần → ghép câu mẫu, Thảo hỏi, dẫn chiếu → 5 câu hỏi ngược (BRK-04 hiểu lầm câu ngắn) + soi câu Dũng → “đúng hạn thì không phạt” + “Khoan đã!” Dũng giữ câu gọn + trước–sau → Điều 418 BLDS, Điều 86 Luật XD → (BRK-07) Sam “thanh toán khi nghiệm thu” (BRK-04 cách A/B) → bảng 8 cột, câu sửa Khiếm khuyết → 21:00 cùng bàn, câu của Dũng đủ vế, khép vòng A/B. Nhân vật theo w145/_series/epc-legal-counsel.md. Không nêu tên người, pháp nhân, dự án, hợp đồng thật. Số/điều chỉ từ bài: 8 thành phần, 5 câu hỏi ngược, 10 câu, Điều 418 BLDS 2015, Điều 86 Luật XD 2025, Luật Thương mại 2005; ô trống [ ] giữ nguyên. Câu đố questions[21]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
