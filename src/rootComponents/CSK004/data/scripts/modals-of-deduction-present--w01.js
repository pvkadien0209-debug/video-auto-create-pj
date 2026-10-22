// modals-of-deduction-present--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "modals-of-deduction-present--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "b2-grammar-for-exam-takers",
    "slug": "modals-of-deduction-present",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Must be, might be, can't be: suy đoán về hiện tại thế nào?",
    "series": "Ngữ pháp B2 để viết và nói ăn điểm — cho người nhắm VSTEP bậc 4, IELTS 6.0"
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
            "id": "a-m",
            "t": "text",
            "text": "Maybe… I think…",
            "x": 60,
            "y": 110,
            "size": 130,
            "at": "l1:Maybe",
            "color": "accent",
            "hl": [
              {
                "text": "Maybe",
                "at": "l1:Maybe"
              }
            ]
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "Câu đúng, nhưng…",
            "x": 70,
            "y": 330,
            "size": 54,
            "at": "l2:correct"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "chỉ có MỘT cách đoán",
            "x": 70,
            "y": 420,
            "size": 54,
            "at": "l2:one way",
            "color": "coral",
            "hl": [
              {
                "text": "MỘT cách",
                "at": "l2:one"
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
          "say": "Maybe he is a doctor. I think he is tired. Maybe, I think, maybe.",
          "sub": "Maybe he is a doctor. I think he is tired. Maybe, I think, maybe.",
          "keys": [
            "Maybe"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Correct sentences. But it sounds like you own exactly one way to guess.",
          "sub": "Câu đúng cả. Nhưng nghe như người chỉ có đúng một cách để đoán.",
          "keys": [
            "một cách để đoán"
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
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "man-health-worker",
                "hospital"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "lan",
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
            "caption": "Thứ Bảy 8:00 · luyện tả ảnh",
            "icon": "hospital"
          },
          {
            "id": "a-p",
            "t": "text",
            "text": "Ảnh: áo trắng, hành lang bệnh viện",
            "x": 60,
            "y": 530,
            "size": 42,
            "at": "l2:coat"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Trông mặt mà bắt hình dong”",
            "x": 60,
            "y": 640,
            "size": 50,
            "at": "l4:face",
            "color": "accent",
            "hl": [
              {
                "text": "Trông mặt",
                "at": "l4:face"
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
          "say": "Meet Lan, a student aiming for B2. Saturday, eight a.m., photo practice for the speaking test.",
          "sub": "Đây là Lan, sinh viên nhắm B2. Thứ Bảy, tám giờ sáng, luyện tả ảnh cho phần Nói."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The photo: a man in a white coat, in a hospital corridor.",
          "sub": "Ảnh: một người đàn ông mặc áo blouse trắng, trong hành lang bệnh viện."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Maybe he is a doctor. I think he is tired. Maybe he is busy.",
          "sub": "Maybe he is a doctor. I think he is tired. Maybe he is busy.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our ancestors judged a person by the face. English does it too, and says how sure it is.",
          "sub": "Ông bà ta “trông mặt mà bắt hình dong”. Tiếng Anh cũng đoán, nhưng nói luôn mình chắc tới đâu.",
          "keys": [
            "chắc tới đâu"
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
      "ref": "p12,intro"
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
            "text": "Chắc tới đâu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:sure",
            "hl": [
              {
                "text": "Chắc tới đâu",
                "at": "l1:how sure"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Suy đoán = đoán dựa trên thông tin",
            "x": 2028,
            "y": 165,
            "size": 44,
            "at": "l2:guess",
            "hl": [
              {
                "text": "dựa trên thông tin",
                "at": "l2:information"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Một từ: vừa đoán, vừa mức chắc",
            "x": 2028,
            "y": 245,
            "size": 44,
            "at": "l3:both",
            "color": "accent"
          },
          {
            "id": "b-ln",
            "t": "line",
            "pts": [
              [
                2068,
                470
              ],
              [
                3608,
                470
              ]
            ],
            "at": "l4:scale",
            "stroke": 8
          },
          {
            "id": "b-c",
            "t": "text",
            "text": "can't",
            "x": 2068,
            "y": 500,
            "size": 60,
            "at": "l4:can't",
            "color": "coral",
            "hl": [
              {
                "text": "can't",
                "at": "l4:can't"
              }
            ]
          },
          {
            "id": "b-c2",
            "t": "text",
            "text": "chắc là không",
            "x": 2068,
            "y": 580,
            "size": 40,
            "at": "l4:can't+300",
            "color": "coral"
          },
          {
            "id": "b-m",
            "t": "text",
            "text": "might · may · could",
            "x": 2568,
            "y": 500,
            "size": 56,
            "at": "l4:might",
            "hl": [
              {
                "text": "might",
                "at": "l4:might"
              }
            ]
          },
          {
            "id": "b-m2",
            "t": "text",
            "text": "có thể",
            "x": 2668,
            "y": 580,
            "size": 40,
            "at": "l4:might+300"
          },
          {
            "id": "b-s",
            "t": "text",
            "text": "must",
            "x": 3418,
            "y": 500,
            "size": 60,
            "at": "l4:must",
            "color": "accent",
            "hl": [
              {
                "text": "must",
                "at": "l4:must"
              }
            ]
          },
          {
            "id": "b-s2",
            "t": "text",
            "text": "gần như chắc",
            "x": 3368,
            "y": 580,
            "size": 40,
            "at": "l4:must+300",
            "color": "accent"
          },
          {
            "id": "b-f",
            "t": "text",
            "text": "+ động từ nguyên mẫu, không to",
            "x": 2928,
            "y": 165,
            "size": 42,
            "at": "l5:without",
            "hl": [
              {
                "text": "không to",
                "at": "l5:without"
              }
            ]
          },
          {
            "id": "b-x",
            "t": "text",
            "text": "must to be · can't is",
            "x": 2928,
            "y": 245,
            "size": 46,
            "at": "l5:not",
            "color": "muted"
          },
          {
            "id": "b-xx",
            "t": "strike",
            "over": "b-x",
            "at": "l5:is+300"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you tell the listener how sure you are?",
          "sub": "Vậy làm sao cho người nghe biết mình chắc tới đâu?",
          "keys": [
            "chắc tới đâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "British Council: a deduction is a guess based on the information you have.",
          "sub": "British Council định nghĩa suy đoán là phỏng đoán dựa trên thông tin mình đang có."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A modal verb packs both: the guess, and your level of certainty.",
          "sub": "Một động từ khuyết thiếu gói cả hai: ý đoán và mức chắc chắn.",
          "keys": [
            "gói cả hai"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Picture a scale: can't on one end, might, may, could in the middle, must at the top.",
          "sub": "Hình dung một cái thang: đầu này can't, giữa là might, may, could, đầu kia là must."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And after them, the infinitive without to: must be, can't be. Not must to be, not can't is.",
          "sub": "Sau chúng là động từ nguyên mẫu không to: must be, can't be. Không viết must to be hay can't is.",
          "keys": [
            "không to"
          ]
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s03",
      "module": "BRK-02",
      "data": {
        "kicker": "Ba nấc",
        "title": "Gần chắc · có thể · chắc không",
        "hl": "chắc không",
        "sub": "must · might, may, could · can't"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Nearly sure. Possible. Sure it's not.",
          "sub": "Gần như chắc. Có thể. Chắc là không."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Must. Might, may, could. Can't.",
          "sub": "Must. Might, may, could. Can't.",
          "keys": [
            "Can't"
          ]
        }
      ],
      "ref": "outro"
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
            "at": "l4",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 9:00 · Must: gần như chắc",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one",
            "hl": [
              {
                "text": "Must",
                "at": "l1:Must"
              }
            ]
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
                  "id": "lan",
                  "side": "left"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "walk",
                  "at": "l1",
                  "pose": "hold",
                  "face": "sad"
                }
              ],
              "props": [
                "cold-face"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "9:00 · cổng thư viện, mưa lạnh",
            "icon": "cold-face"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "You must be freezing!",
            "x": 3996,
            "y": 170,
            "size": 54,
            "at": "l2:freezing",
            "color": "accent",
            "hl": [
              {
                "text": "must be",
                "at": "l2:must"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "chắc đúng / khả năng duy nhất",
            "x": 3996,
            "y": 260,
            "size": 44,
            "at": "l4:only"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "This must be her house.",
            "x": 3996,
            "y": 350,
            "size": 48,
            "at": "l5:house",
            "hl": [
              {
                "text": "must be",
                "at": "l5:must"
              }
            ]
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "← xe cô ấy trong gara",
            "x": 4036,
            "y": 425,
            "size": 44,
            "at": "l5:car",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one: must. Nine a.m., the library gate. Meet Dũng, Lan's study buddy, soaked and shivering.",
          "sub": "Chặng một: must. Chín giờ, cổng thư viện. Đây là Dũng, bạn cùng nhóm học của Lan, ướt sũng, run cầm cập.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Dũng! You must be freezing out there!",
          "sub": "Dũng! You must be freezing out there!",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Freezing. And my notes are soup.",
          "sub": "Lạnh cóng. Vở ghi thì thành canh rồi.",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Must: you feel sure it's true, or it's the only realistic possibility.",
          "sub": "Must: khi thấy chắc là đúng, hoặc đó là khả năng thực tế duy nhất.",
          "keys": [
            "khả năng thực tế duy nhất"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "British Council's example: this must be her house. I can see her car in the garage.",
          "sub": "Ví dụ của British Council: This must be her house. I can see her car in the garage."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p3,p4"
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
            "id": "c-k",
            "t": "text",
            "text": "must + lý do ngay sau",
            "x": 3996,
            "y": 540,
            "size": 54,
            "at": "l2:reason",
            "color": "accent",
            "hl": [
              {
                "text": "lý do",
                "at": "l2:reason"
              }
            ]
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "→ suy luận, không đoán mò",
            "x": 4036,
            "y": 630,
            "size": 46,
            "at": "l3:reasoning",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Notice: both sentences come with a reason, said or obvious from the scene.",
          "sub": "Để ý: cả hai câu đều có lý do, nói ra hoặc hiển nhiên từ hoàn cảnh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So in the exam, add the reason right after your must sentence.",
          "sub": "Nên khi thi, thêm lý do ngay sau câu must.",
          "keys": [
            "thêm lý do"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The examiner then hears reasoning, not wild guessing.",
          "sub": "Giám khảo sẽ thấy bạn suy luận, không đoán mò."
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
            "text": "② 10:00 · Might, may, could",
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
              "set": "campus",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "props": [
                "alarm-clock"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:late",
            "caption": "10:00 · Thảo chưa tới",
            "icon": "alarm-clock"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "She might be stuck in traffic",
            "x": 5964,
            "y": 170,
            "size": 46,
            "at": "l2:traffic",
            "hl": [
              {
                "text": "might be",
                "at": "l2:might"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "She could be in a meeting",
            "x": 5964,
            "y": 250,
            "size": 46,
            "at": "l3:meeting",
            "hl": [
              {
                "text": "could be",
                "at": "l3:could"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "có thể đúng, chưa chắc",
            "x": 5964,
            "y": 340,
            "size": 50,
            "at": "l4:possible",
            "color": "accent",
            "hl": [
              {
                "text": "chưa chắc",
                "at": "l4:not sure"
              }
            ]
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "may: trang trọng hơn",
            "x": 5964,
            "y": 430,
            "size": 50,
            "at": "l5:formal",
            "color": "coral",
            "hl": [
              {
                "text": "trang trọng",
                "at": "l5:formal"
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
          "say": "Stop two, ten a.m. Thảo, the office worker in their evening class, is late.",
          "sub": "Chặng hai, mười giờ. Thảo, chị nhân viên văn phòng học cùng lớp tối, vẫn chưa tới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "She's not answering. She might be stuck in traffic.",
          "sub": "Chị ấy không nghe máy. She might be stuck in traffic.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Or she could be in a meeting. Saturday overtime.",
          "sub": "Hoặc she could be in a meeting. Tăng ca thứ Bảy.",
          "face": "neutral"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Might, may, could: possible, but not sure. The three share one meaning.",
          "sub": "Might, may, could: có thể đúng nhưng chưa chắc. Ba từ cùng một nghĩa.",
          "keys": [
            "cùng một nghĩa"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "May is a little more formal than might and could.",
          "sub": "May trang trọng hơn might và could một chút."
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
            "fit": "D",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "d-5",
            "t": "text",
            "text": "Luận: This trend may be a sign…",
            "x": 5964,
            "y": 520,
            "size": 42,
            "at": "l1:trend",
            "hl": [
              {
                "text": "may be",
                "at": "l1:may"
              }
            ]
          },
          {
            "id": "d-6",
            "t": "text",
            "text": "Nói: He might be waiting…",
            "x": 5964,
            "y": 600,
            "size": 42,
            "at": "l2:waiting",
            "hl": [
              {
                "text": "might be",
                "at": "l2:might"
              }
            ]
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Cùng nghĩa; trang trọng chọn may",
            "x": 5964,
            "y": 690,
            "size": 44,
            "at": "l3:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "chọn may",
                "at": "l3:choose may"
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
          "say": "So may suits essays and formal letters: this trend may be a sign that young people value flexible work.",
          "sub": "Nên may hợp bài luận, thư trang trọng: This trend may be a sign that young people value flexible work."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Might and could sound natural in speaking: he might be waiting for a friend, I'm not sure.",
          "sub": "Might, could tự nhiên hơn khi nói: He might be waiting for a friend, I'm not sure."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: same meaning, possible. When the style is formal, choose may.",
          "sub": "Rút ra: cùng nghĩa có thể; văn phong trang trọng thì chọn may.",
          "keys": [
            "chọn may"
          ]
        }
      ],
      "ref": "p6,p7"
    },
    {
      "id": "s08",
      "module": "BRK-07",
      "data": {
        "question": "Must là “chắc là”, vậy “chắc là không” là mustn't?",
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
          "say": "If must is sure, is mustn't sure it's not?",
          "sub": "Must là chắc là, vậy chắc là không có phải mustn't?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
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
            "fit": "D",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "d-sam",
            "t": "text",
            "text": "11:00 · lớp Sam",
            "x": 6804,
            "y": 700,
            "size": 44,
            "at": "l1:class"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Eleven a.m., speaking class. Meet Sam, the native-speaker teacher, with a photo of a dark house.",
          "sub": "Mười một giờ, lớp luyện nói. Đây là Sam, cô giáo bản ngữ, cầm ảnh một ngôi nhà tối om.",
          "keys": [
            "Sam"
          ]
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "data": {
        "set": "meeting",
        "label": "11:00 · lớp luyện nói",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "sam",
            "side": "right",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "They mustn't be at home",
          "why": "Mustn't là lời cấm, không phải lời đoán; người nghe hiểu sai ý.",
          "rule": "Đoán là không phải: dùng can't"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "sam",
          "say": "All the lights are off. What can you say about the family?",
          "sub": "Đèn tắt hết. Em nói gì về gia đình này?",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "They mustn't be at home.",
          "sub": "They mustn't be at home.",
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
          "say": "Mustn't means not allowed. Dũng just banned the family from their own house.",
          "sub": "Mustn't là cấm. Dũng vừa cấm cả nhà người ta về nhà mình.",
          "keys": [
            "cấm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Lần nữa nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "They can't be at home. All the lights are off.",
          "sub": "They can't be at home. All the lights are off.",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Sure it's not? Can't.",
          "sub": "Chắc là không? Dùng can't.",
          "phase": "redo",
          "keys": [
            "can't"
          ]
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 13:00 · Can't: chắc là không",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three",
            "hl": [
              {
                "text": "Can't",
                "at": "l1:can't"
              }
            ]
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "It can't be far now.",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l2:far",
            "hl": [
              {
                "text": "can't be",
                "at": "l2:can't"
              }
            ]
          },
          {
            "id": "e-1b",
            "t": "text",
            "text": "← đã lái xe mấy tiếng",
            "x": 7972,
            "y": 245,
            "size": 44,
            "at": "l2:hours",
            "color": "coral"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "She can't know about the complaint.",
            "x": 7932,
            "y": 335,
            "size": 44,
            "at": "l3:complaint",
            "hl": [
              {
                "text": "can't know",
                "at": "l3:know"
              }
            ]
          },
          {
            "id": "e-2b",
            "t": "text",
            "text": "← vừa thăng chức cho anh ta",
            "x": 7972,
            "y": 410,
            "size": 44,
            "at": "l3:promoted",
            "color": "coral"
          },
          {
            "id": "e-x",
            "t": "text",
            "text": "You mustn't be late = CẤM đến muộn",
            "x": 8832,
            "y": 170,
            "size": 40,
            "at": "l5:late",
            "color": "muted",
            "hl": [
              {
                "text": "CẤM",
                "at": "l5:rule"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Đoán không phải: can't",
            "x": 8832,
            "y": 260,
            "size": 50,
            "at": "l6:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "can't",
                "at": "l6:can't"
              }
            ]
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "mustn't = lời cấm",
            "x": 8832,
            "y": 340,
            "size": 50,
            "at": "l6:ban",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, one p.m. Lan writes up can't: when you feel sure something is impossible.",
          "sub": "Chặng ba, một giờ chiều. Lan ghi lại can't: khi thấy chắc một điều là không thể."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "British Council: it can't be far now. We've been driving for hours.",
          "sub": "British Council: It can't be far now. We've been driving for hours."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And: she can't know about the complaint. She's promoted him to team leader.",
          "sub": "Và: She can't know about the complaint. She's promoted him to team leader."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "If she knew, she'd never have promoted him. That's the reasoning.",
          "sub": "Nếu biết có lời phàn nàn thì cô ấy đã không thăng chức cho anh ta. Đó là lý lẽ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Mustn't lives in the lesson on rules: you mustn't be late is a rule, not a guess.",
          "sub": "Mustn't nằm ở bài về quy định: You mustn't be late là lời cấm đến muộn, không phải lời đoán."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: guessing it's not true? Can't. Mustn't is a ban.",
          "sub": "Rút ra: đoán là không phải thì dùng can't; mustn't là lời cấm.",
          "keys": [
            "mustn't là lời cấm"
          ]
        }
      ],
      "ref": "p8,p9,p10"
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
            "at": "l3",
            "fit": [
              "f-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 14:00 · Tả ảnh bốn bước",
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
                  "id": "lan",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "man-health-worker",
                "hospital"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "medium",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "close",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:photo",
            "caption": "14:00 · cùng bức ảnh",
            "icon": "hospital"
          },
          {
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1270,
            "w": 44,
            "h": 44,
            "at": "l2:details",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1252,
            "size": 56,
            "at": "l2:details+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "(1) chi tiết chắc: áo, bệnh viện",
            "x": 125,
            "y": 1262,
            "size": 40,
            "at": "l2:details+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1360,
            "w": 44,
            "h": 44,
            "at": "l3:must",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1342,
            "size": 56,
            "at": "l3:must+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "(2) must: doctor or nurse",
            "x": 125,
            "y": 1352,
            "size": 40,
            "at": "l3:must+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1450,
            "w": 44,
            "h": 44,
            "at": "l4:might",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1432,
            "size": 56,
            "at": "l4:might+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "(3) might: on a break",
            "x": 125,
            "y": 1442,
            "size": 40,
            "at": "l4:might+200"
          },
          {
            "id": "f-c3",
            "t": "box",
            "x": 60,
            "y": 1540,
            "w": 44,
            "h": 44,
            "at": "l5:can't",
            "stroke": 5
          },
          {
            "id": "f-k3",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1522,
            "size": 56,
            "at": "l5:can't+600",
            "color": "accent"
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "(4) can't: a patient",
            "x": 125,
            "y": 1532,
            "size": 40,
            "at": "l5:can't+200"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Mỗi câu đoán + một chi tiết",
            "x": 60,
            "y": 1670,
            "size": 48,
            "at": "l6:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "một chi tiết",
                "at": "l6:detail"
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
          "say": "Stop four, two p.m. Same photo, new method. Speaking tests love photos and reasons.",
          "sub": "Chặng bốn, hai giờ chiều. Vẫn bức ảnh ấy, cách mới. Phần Nói hay bắt tả ảnh, đoán lý do."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Step one: the sure details. A white coat. A hospital.",
          "sub": "Bước một: chi tiết chắc chắn. Áo blouse trắng. Bệnh viện."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Step two, nearly sure: he must be a doctor or a nurse.",
          "sub": "Bước hai, gần như chắc: He must be a doctor or a nurse.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Step three, just possible: he might be on a break.",
          "sub": "Bước ba, chỉ là có thể: He might be on a break."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "Step four, rule one out: he can't be a patient, because he's wearing a uniform.",
          "sub": "Bước bốn, loại một khả năng: He can't be a patient, because he's wearing a uniform.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: every guess comes with a detail as its reason.",
          "sub": "Rút ra: mỗi câu đoán đi kèm một chi tiết làm lý do.",
          "keys": [
            "một chi tiết làm lý do"
          ]
        }
      ],
      "ref": "p11,p12,p13"
    },
    {
      "id": "s13",
      "module": "BRK-04",
      "data": {
        "title": "Tả ảnh nhóm bạn",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Maybe they are friends. I think they are happy.",
        "right": "They must be close friends, because they're laughing",
        "wrongIllus": "red-question-mark",
        "rightIllus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: maybe they're friends. I think they're happy.",
          "sub": "Trước: Maybe they're friends. I think they're happy."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: they must be close friends, because they're laughing together.",
          "sub": "Sau: They must be close friends, because they're laughing together.",
          "keys": [
            "must be"
          ]
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
            "id": "f-s",
            "t": "text",
            "text": "… it could be summer, since T-shirts",
            "x": 60,
            "y": 1750,
            "size": 40,
            "at": "l1:summer",
            "hl": [
              {
                "text": "could be",
                "at": "l1:could"
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
          "say": "And it could be summer, since everyone is wearing T-shirts. Two levels, two reasons.",
          "sub": "And it could be summer, since everyone is wearing T-shirts. Hai mức chắc chắn, hai lý do."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: swapping maybe for a modal plus a reason is a quick upgrade.",
          "sub": "Rút ra: đổi maybe thành động từ khuyết thiếu có lý do là một nâng cấp nhanh.",
          "keys": [
            "nâng cấp nhanh"
          ]
        }
      ],
      "ref": "p14,p15"
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
            "text": "⑤ 16:00 · Bẫy chữ “chắc là”",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five",
            "hl": [
              {
                "text": "chắc là",
                "at": "l1:probably"
              }
            ]
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "walk",
                  "at": "l2",
                  "pose": "phone"
                }
              ],
              "props": [
                "motor-scooter",
                "mobile-phone"
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
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "16:00 · Thảo hỏi tìm Lan",
            "icon": "motor-scooter"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "“Chắc là trời sắp mưa” = đoán chừng",
            "x": 2028,
            "y": 1260,
            "size": 40,
            "at": "l1:probably",
            "color": "coral"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "She must be in the library",
            "x": 2028,
            "y": 1345,
            "size": 44,
            "at": "l2:must",
            "color": "muted"
          },
          {
            "id": "g-2x",
            "t": "strike",
            "over": "g-2",
            "at": "l4:habit"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "→ She might be there",
            "x": 2028,
            "y": 1420,
            "size": 50,
            "at": "l4:might",
            "color": "accent",
            "hl": [
              {
                "text": "might",
                "at": "l4:might"
              }
            ]
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Thấy xe Lan → must",
            "x": 2028,
            "y": 1520,
            "size": 50,
            "at": "l5:motorbike",
            "hl": [
              {
                "text": "must",
                "at": "l6:must"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Có bằng chứng rõ mới must",
            "x": 2028,
            "y": 1620,
            "size": 48,
            "at": "l7:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "bằng chứng rõ",
                "at": "l7:evidence"
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
          "say": "Stop five, four p.m. Thảo asks Dũng where Lan is. Careful: Vietnamese chắc là can mean sure, or just probably.",
          "sub": "Chặng năm, bốn giờ chiều. Thảo hỏi Dũng Lan đâu. Cẩn thận: “chắc là” có khi gần như chắc, có khi chỉ đoán chừng, như “chắc là trời sắp mưa”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Lan? She must be in the library. She always goes there.",
          "sub": "Lan á? She must be in the library. Lan hay đến đó mà.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Must? Did you see her there?",
          "sub": "Must à? Em thấy Lan ở đó chưa?",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Only a habit, no evidence. So, a possibility: she might be in the library.",
          "sub": "Chỉ là thói quen, không có bằng chứng. Vậy là khả năng: She might be in the library.",
          "keys": [
            "không có bằng chứng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Oh wait, that's her motorbike, right in front of the library!",
          "sub": "Ơ, xe máy của Lan đỗ ngay trước thư viện kìa!",
          "face": "surprised"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Now she must be in the library.",
          "sub": "Giờ thì She must be in the library.",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: clear evidence, must. A rough guess, might.",
          "sub": "Rút ra: có bằng chứng rõ mới dùng must, đoán chừng thì dùng might.",
          "keys": [
            "bằng chứng rõ"
          ]
        }
      ],
      "ref": "p16,p17,p18"
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
            "text": "⑥ 17:00 · Soát trước khi nói",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1270,
            "w": 44,
            "h": 44,
            "at": "l2:without",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1252,
            "size": 56,
            "at": "l2:without+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "sau modal: nguyên mẫu, không to",
            "x": 4061,
            "y": 1262,
            "size": 46,
            "at": "l2:without+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1370,
            "w": 44,
            "h": 44,
            "at": "l3:must",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1352,
            "size": 56,
            "at": "l3:must+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "gần như chắc: must",
            "x": 4061,
            "y": 1362,
            "size": 46,
            "at": "l3:must+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1470,
            "w": 44,
            "h": 44,
            "at": "l3:might",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1452,
            "size": 56,
            "at": "l3:might+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "có thể: might, may, could",
            "x": 4061,
            "y": 1462,
            "size": 46,
            "at": "l3:might+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1570,
            "w": 44,
            "h": 44,
            "at": "l4:can't",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1552,
            "size": 56,
            "at": "l4:can't+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "chắc là không: can't",
            "x": 4061,
            "y": 1562,
            "size": 46,
            "at": "l4:can't+200"
          },
          {
            "id": "h-c4",
            "t": "box",
            "x": 3996,
            "y": 1670,
            "w": 44,
            "h": 44,
            "at": "l5:reason",
            "stroke": 5
          },
          {
            "id": "h-k4",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1652,
            "size": 56,
            "at": "l5:reason+600",
            "color": "accent"
          },
          {
            "id": "h-l4",
            "t": "text",
            "text": "câu đoán có lý do",
            "x": 4061,
            "y": 1662,
            "size": 46,
            "at": "l5:reason+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, five p.m. Thảo copies the group's five checks into her notebook.",
          "sub": "Chặng sáu, năm giờ chiều. Thảo chép năm điều cần soát của nhóm vào sổ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After must, might, may, could and can't: the infinitive without to.",
          "sub": "Sau must, might, may, could, can't: động từ nguyên mẫu không to."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Nearly sure, must. Just possible, might, may or could.",
          "sub": "Gần như chắc: must. Chỉ là có thể: might, may, could."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sure it's not: can't. Never mustn't.",
          "sub": "Chắc là không: can't, không dùng mustn't.",
          "keys": [
            "can't"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And every guess carries a reason.",
          "sub": "Và câu đoán nào cũng có lý do đi kèm.",
          "keys": [
            "lý do"
          ]
        }
      ],
      "ref": "p19"
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
            "at": "l4",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Chủ nhật · 8:00",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:desk"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "man-health-worker",
                "hospital"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Sunday",
            "caption": "Chủ nhật 8:00 · cùng bức ảnh",
            "icon": "hospital"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "He must be a doctor, because…",
            "x": 5964,
            "y": 1260,
            "size": 46,
            "at": "l2:because",
            "color": "accent",
            "hl": [
              {
                "text": "must",
                "at": "l2:must"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "He might be on a break",
            "x": 5964,
            "y": 1340,
            "size": 46,
            "at": "l3:break",
            "hl": [
              {
                "text": "might",
                "at": "l3:might"
              }
            ]
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "He can't be a patient",
            "x": 5964,
            "y": 1420,
            "size": 46,
            "at": "l3:patient",
            "hl": [
              {
                "text": "can't",
                "at": "l3:can't"
              }
            ]
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Trông mặt mà bắt hình dong”",
            "x": 5964,
            "y": 1540,
            "size": 50,
            "at": "l5:face",
            "color": "accent",
            "hl": [
              {
                "text": "bắt hình dong",
                "at": "l5:face"
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
          "say": "Sunday, eight a.m. Same desk, same photo, same Lan.",
          "sub": "Chủ nhật, tám giờ sáng. Vẫn bàn ấy, bức ảnh ấy, Lan ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "He must be a doctor, because he's wearing a white coat in a hospital.",
          "sub": "He must be a doctor, because he's wearing a white coat in a hospital.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "He might be on a break. And he can't be a patient. Nailed it.",
          "sub": "He might be on a break. And he can't be a patient. Nailed it.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No maybe, no I think. Three levels, three reasons.",
          "sub": "Không maybe, không I think. Ba mức chắc chắn, ba lý do."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Judge a person by the face, our saying goes. Lan judges by the coat, and says how sure she is.",
          "sub": "“Trông mặt mà bắt hình dong.” Lan trông áo mà đoán, và nói rõ mình chắc tới đâu.",
          "keys": [
            "chắc tới đâu"
          ]
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s18",
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
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "J",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tóm lại: chắc đâu nói đó",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:levels"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4696,
            "y": 170,
            "at": "l2:reason"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6664,
            "y": 170,
            "at": "l3:could"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 9472,
            "y": 170,
            "at": "l4:mustn't"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Làm ngay: 1 ảnh, 5 câu đoán",
            "x": 7932,
            "y": 1290,
            "size": 48,
            "at": "l5:photo",
            "hl": [
              {
                "text": "5 câu đoán",
                "at": "l5:five"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "→ ít nhất 3 mức, có lý do",
            "x": 7972,
            "y": 1370,
            "size": 46,
            "at": "l5:three"
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Bài tiếp: must have, might have",
            "x": 7932,
            "y": 1490,
            "size": 46,
            "at": "l6:Next",
            "color": "accent"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi học; cách chấm từng kỳ thi có thể thay đổi — kiểm lại trên trang chính thức. Nhân vật là minh hoạ.",
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
          "say": "So, these levels of deduction replace maybe and I think.",
          "sub": "Tóm lại, các mức suy đoán này thay cho maybe và I think.",
          "keys": [
            "thay cho maybe"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Must: nearly sure, with a reason.",
          "sub": "Must: gần như chắc, kèm lý do."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Might, may, could: possible.",
          "sub": "Might, may, could: có thể."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Can't: sure it's not. Never mustn't.",
          "sub": "Can't: chắc là không. Đừng dùng mustn't."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: open any photo, say five guesses with reasons, using at least three levels.",
          "sub": "Làm ngay: mở một bức ảnh, nói năm câu đoán có lý do, dùng ít nhất ba mức.",
          "keys": [
            "năm câu đoán"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next up: must have, might have, can't have, for things in the past.",
          "sub": "Bài tiếp theo: must have, might have, can't have, đoán chuyện đã qua.",
          "keys": [
            "must have"
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
        "q": "Why is he mustn't be at home wrong as a deduction?",
        "options": [
          "Mustn't means something is not allowed, so it gives a different meaning",
          "Mustn't must always be followed by to and a base verb",
          "Mustn't is too informal and can only be used with close friends"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "house",
        "why": "Mustn't mang nghĩa là cấm. Suy đoán phủ định dùng can't."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Why is he mustn't be at home wrong as a deduction?",
          "sub": "Vì sao he mustn't be at home sai khi dùng để suy đoán?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Mustn't means something is not allowed, so it gives a different meaning.",
          "sub": "Mustn't là cấm, nên câu mang nghĩa khác hẳn."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "For a negative deduction, use can't: he can't be at home.",
          "sub": "Suy đoán phủ định dùng can't: he can't be at home."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[18]"
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
          "say": "You must be ready for the forty questions below. You've just watched the whole video.",
          "sub": "Bạn hẳn đã sẵn sàng cho bốn mươi câu hỏi bên dưới. Vì bạn vừa xem hết video mà.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT NGÀY THỨ BẢY của nhóm học (8:00 Lan tả ảnh “Maybe… I think…” → 9:00 must, Dũng đội mưa → 10:00 might/may/could, Thảo đến muộn → 11:00 lớp Sam “Khoan đã!” mustn't → 13:00 can't → 14:00 Lan tả ảnh bốn bước → 16:00 Dũng nhắn “chắc là” → 17:00 soát năm điều → 8:00 Chủ nhật khép vòng). Neo mở: “Maybe… I think…”. Nhân vật: Lan (Trang/Linh trong bài), Dũng (Khoa), Thảo, Sam — w145/_series/b2-grammar-for-exam-takers.md. Cảnh ngắt nhịp: BRK-02 (ba nấc), BRK-07 (rehook mustn't), BRK-04 (trước–sau tả ảnh). Ca dao: “Trông mặt mà bắt hình dong”. Câu đố questions[18].",
  "loop": {
    "open": "s01",
    "close": "s17"
  }
};
