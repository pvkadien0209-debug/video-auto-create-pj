// bar-admission-eligibility--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-admission-eligibility--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "bar-academy-admission",
    "slug": "bar-admission-eligibility",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Ai đủ điều kiện dự tuyển và bằng nước ngoài có được không?",
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
            "text": "2 lớp",
            "x": 60,
            "y": 110,
            "size": 170,
            "at": "l1:Two",
            "color": "accent",
            "hl": [
              {
                "text": "2 lớp",
                "at": "l1:layers"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "bằng cấp · công dân, lý lịch",
            "x": 70,
            "y": 340,
            "size": 52,
            "at": "l1:degree"
          },
          {
            "id": "a-myth",
            "t": "text",
            "text": "Ta tưởng: có bằng là đủ?",
            "x": 70,
            "y": 440,
            "size": 52,
            "at": "l2:enough",
            "color": "muted"
          },
          {
            "id": "a-mythx",
            "t": "strike",
            "over": "a-myth",
            "at": "l3:Half"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: Thông báo tuyển sinh khoá 28, Học viện Tư pháp; Luật Luật sư (VBHN 03)",
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
          "say": "Two layers of conditions: your degree, and your citizenship and record.",
          "sub": "Hai lớp điều kiện: bằng cấp, và tư cách công dân, lý lịch.",
          "keys": [
            "Hai lớp điều kiện"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Most people think: I have a law degree, that is enough.",
          "sub": "Nhiều người nghĩ: có bằng luật là đủ rồi.",
          "keys": [
            "là đủ rồi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Half true. The other half hides off the diploma.",
          "sub": "Mới đúng một nửa. Nửa kia nằm ngoài tấm bằng.",
          "keys": [
            "nằm ngoài tấm bằng"
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
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "mobile-phone",
                "bell"
              ],
              "camera": [
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
            "at": "l1",
            "caption": "Tối Chủ nhật · nhóm chat gia đình",
            "icon": "mobile-phone"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "“Em có đủ điều kiện không?”",
            "x": 70,
            "y": 650,
            "size": 40,
            "at": "l3:qualify",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Biết mình biết ta…”",
            "x": 70,
            "y": 560,
            "size": 58,
            "at": "l4:yourself",
            "color": "accent",
            "hl": [
              {
                "text": "Biết mình",
                "at": "l4:yourself"
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
          "say": "Meet Thảo again, who just posted her own application.",
          "sub": "Lại là Thảo, vừa gửi xong hồ sơ của mình."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Now the family group chat rings like a market at dawn.",
          "sub": "Giờ nhóm chat gia đình reo như chợ sáng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Everyone asks the same thing: do I qualify? Number one, let's check this week.",
          "sub": "Ai cũng hỏi một câu: em có đủ điều kiện không? Thứ nhất, tuần này mình kiểm.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Know yourself and the other side, and you win every battle. Here: know your own file.",
          "sub": "“Biết mình biết ta, trăm trận trăm thắng.” Ở đây: biết hồ sơ của mình.",
          "keys": [
            "Biết mình biết ta"
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
            "text": "Mình có đủ điều kiện không?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:qualify",
            "hl": [
              {
                "text": "đủ điều kiện",
                "at": "l1:qualify"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "① Bằng cấp",
            "x": 2028,
            "y": 170,
            "size": 60,
            "at": "l2:degree",
            "hl": [
              {
                "text": "Bằng cấp",
                "at": "l2:degree"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "② Công dân, cư trú, lý lịch",
            "x": 2028,
            "y": 270,
            "size": 56,
            "at": "l2:citizenship",
            "hl": [
              {
                "text": "cư trú",
                "at": "l2:residence"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: nộp rồi chờ xem",
            "x": 2028,
            "y": 380,
            "size": 48,
            "at": "l3:send",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:but"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: biết chắc rồi mới nộp",
            "x": 2028,
            "y": 460,
            "size": 54,
            "at": "l3:know",
            "color": "accent",
            "hl": [
              {
                "text": "biết chắc",
                "at": "l3:know for sure"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 590,
            "w": 200,
            "h": 90,
            "at": "l3:papers+300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2258,
            "y": 590,
            "w": 200,
            "h": 90,
            "at": "l3:papers+500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2488,
            "y": 590,
            "w": 200,
            "h": 90,
            "at": "l3:papers+700",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2718,
            "y": 590,
            "w": 200,
            "h": 90,
            "at": "l3:papers+900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2948,
            "y": 590,
            "w": 200,
            "h": 90,
            "at": "l3:papers+1100",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3178,
            "y": 590,
            "w": 200,
            "h": 90,
            "at": "l3:papers+1300",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3408,
            "y": 590,
            "w": 200,
            "h": 90,
            "at": "l3:papers+1500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2",
            "x": 2088,
            "y": 603,
            "size": 48,
            "at": "l3:papers+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T3",
            "x": 2318,
            "y": 603,
            "size": 48,
            "at": "l3:papers+620"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T4",
            "x": 2548,
            "y": 603,
            "size": 48,
            "at": "l3:papers+820"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T5",
            "x": 2778,
            "y": 603,
            "size": 48,
            "at": "l3:papers+1020"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T6",
            "x": 3008,
            "y": 603,
            "size": 48,
            "at": "l3:papers+1220"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T7",
            "x": 3238,
            "y": 603,
            "size": 48,
            "at": "l3:papers+1420"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "CN",
            "x": 3468,
            "y": 603,
            "size": 48,
            "at": "l3:papers+1620"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So, do you qualify for the bar training class?",
          "sub": "Vậy, mình có đủ điều kiện dự lớp đào tạo nghề luật sư không?",
          "keys": [
            "đủ điều kiện"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Check two layers: the degree, then citizenship, residence and record.",
          "sub": "Kiểm hai lớp: bằng cấp, rồi tư cách công dân, cư trú, lý lịch."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not send and see, but know for sure before you spend effort on papers.",
          "sub": "Không phải nộp rồi chờ xem, mà biết chắc trước khi bỏ công làm hồ sơ.",
          "keys": [
            "biết chắc"
          ]
        }
      ],
      "ref": "intro,p17"
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
            "text": "① Thứ Hai · Bằng nào được?",
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "graduation-cap",
                "open-book"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "at": "l1:Monday",
            "caption": "Thứ Hai · giờ nghỉ trưa",
            "icon": "graduation-cap"
          },
          {
            "id": "c-12",
            "t": "text",
            "text": "Điều 12: cử nhân luật",
            "x": 3996,
            "y": 170,
            "size": 54,
            "at": "l3:twelve",
            "hl": [
              {
                "text": "cử nhân luật",
                "at": "l3:bachelor"
              }
            ]
          },
          {
            "id": "c-inst",
            "t": "text",
            "text": "Học viện Tư pháp, LĐLS",
            "x": 3996,
            "y": 260,
            "size": 38,
            "at": "l4:Judicial",
            "color": "muted"
          },
          {
            "id": "c-up",
            "t": "text",
            "text": "Thạc sĩ, tiến sĩ luật: vẫn được",
            "x": 3996,
            "y": 340,
            "size": 44,
            "at": "l5:master",
            "hl": [
              {
                "text": "vẫn được",
                "at": "l5:still"
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
          "say": "First stop: Monday lunch. The degree.",
          "sub": "Chặng một: trưa thứ Hai. Tấm bằng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Number one: what does the law actually say about degrees?",
          "sub": "Thứ nhất: luật nói gì về bằng cấp?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article twelve of the Law on Lawyers: a bachelor of law may join the training course.",
          "sub": "Điều 12 Luật Luật sư: người có bằng cử nhân luật được dự khoá đào tạo nghề.",
          "keys": [
            "cử nhân luật"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "At the Judicial Academy, or the training body of the Vietnam Bar Federation.",
          "sub": "Tại Học viện Tư pháp hoặc cơ sở đào tạo của Liên đoàn Luật sư Việt Nam."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The notice says bachelor of law or higher. A master or doctor of law still fits.",
          "sub": "Thông báo ghi cử nhân luật trở lên. Thạc sĩ, tiến sĩ luật vẫn thuộc đối tượng.",
          "keys": [
            "trở lên"
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
            "id": "c-oth",
            "t": "text",
            "text": "Bằng ngành khác, nhiều môn luật?",
            "x": 3996,
            "y": 450,
            "size": 42,
            "at": "l1:different",
            "color": "coral"
          },
          {
            "id": "c-ask",
            "t": "text",
            "text": "→ hỏi Phòng Đào tạo trước",
            "x": 4036,
            "y": 520,
            "size": 46,
            "at": "l2:ask",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi",
                "at": "l2:ask"
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
          "say": "But a degree with a different field name, even with lots of law subjects?",
          "sub": "Nhưng bằng mang tên ngành khác, dù học nhiều môn luật?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask the training office before applying. Both the law and the notice say bachelor of law.",
          "sub": "Hỏi Phòng Đào tạo trước khi nộp. Cả luật lẫn thông báo đều ghi cử nhân luật.",
          "keys": [
            "Hỏi Phòng Đào tạo"
          ]
        }
      ],
      "ref": "p2"
    },
    {
      "id": "s07",
      "module": "BRK-04",
      "data": {
        "title": "Thạc sĩ luật",
        "labels": [
          "Tưởng",
          "Thật"
        ],
        "wrong": "Có thạc sĩ luật là được miễn lớp",
        "right": "Điều 13 không ghi thạc sĩ: vẫn học",
        "wrongIllus": "graduation-cap",
        "rightIllus": "books"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Myth: a master in law skips the class.",
          "sub": "Tưởng: có thạc sĩ luật là được miễn lớp.",
          "keys": [
            "miễn lớp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Truth: article thirteen never mentions masters.",
          "sub": "Thật: Điều 13 không hề ghi thạc sĩ.",
          "keys": [
            "không hề ghi thạc sĩ"
          ]
        }
      ],
      "ref": "p3"
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
            "at": "l1",
            "fit": [
              "c-13",
              "c-131",
              "c-132"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "C",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "c-13",
            "t": "text",
            "text": "Điều 13 miễn: 4 nhóm",
            "x": 4836,
            "y": 690,
            "size": 44,
            "at": "l1:four",
            "hl": [
              {
                "text": "4 nhóm",
                "at": "l1:four"
              }
            ]
          },
          {
            "id": "c-key",
            "t": "text",
            "text": "Bằng cao hơn ≠ thay lớp nghề",
            "x": 3996,
            "y": 640,
            "size": 46,
            "at": "l3:higher",
            "color": "accent",
            "hl": [
              {
                "text": "≠ thay lớp nghề",
                "at": "l3:replace"
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
          "say": "Article thirteen exempts four groups: judges, prosecutors, investigators; law professors and doctors of law; and senior officials in law.",
          "sub": "Điều 13 miễn cho bốn nhóm: thẩm phán, kiểm sát viên, điều tra viên; giáo sư, phó giáo sư, tiến sĩ luật; và một số ngạch chính, cao cấp ngành luật."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A higher degree makes the file look nicer, but it does not replace the class.",
          "sub": "Bằng cao hơn giúp hồ sơ đẹp hơn, nhưng không thay được lớp học nghề.",
          "keys": [
            "không thay được lớp học nghề"
          ]
        }
      ],
      "ref": "p3,p4"
    },
    {
      "id": "s10",
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
            "at": "l3",
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
            "text": "② Thứ Ba · Bằng nước ngoài",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Tuesday"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
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
            "at": "l2:Lan",
            "caption": "Thứ Ba · Lan gọi video",
            "icon": "globe-showing-asia-australia"
          },
          {
            "id": "d-ok",
            "t": "text",
            "text": "Được, nếu có giấy công nhận",
            "x": 5964,
            "y": 170,
            "size": 48,
            "at": "l4:Yes",
            "color": "accent",
            "hl": [
              {
                "text": "giấy công nhận",
                "at": "l4:recognition"
              }
            ]
          },
          {
            "id": "d-cuc",
            "t": "text",
            "text": "Cục Quản lý chất lượng, Bộ GD&ĐT",
            "x": 5964,
            "y": 260,
            "size": 38,
            "at": "l5:quality"
          },
          {
            "id": "d-or",
            "t": "text",
            "text": "hoặc: văn bản không phải công nhận",
            "x": 5964,
            "y": 320,
            "size": 38,
            "at": "l5:none",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: Tuesday evening.",
          "sub": "Chặng hai: tối thứ Ba."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Lan, Thảo's cousin. She studied law abroad and asks questions very, very quietly.",
          "sub": "Đây là Lan, em họ Thảo. Học luật ở nước ngoài về, hỏi gì cũng nhỏ nhẹ, rụt rè.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Excuse me, can I ask... my law degree is from abroad. Does it count?",
          "sub": "Dạ, cho em hỏi... bằng luật của em học ở nước ngoài. Có được không ạ?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Yes, with the right paper. A foreign degree needs official recognition, unless it is exempt.",
          "sub": "Được, nếu đủ giấy. Bằng nước ngoài phải có văn bản công nhận, trừ trường hợp được miễn.",
          "keys": [
            "văn bản công nhận"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "From the education ministry's quality department, or a paper saying none is needed.",
          "sub": "Giấy của Cục Quản lý chất lượng, Bộ Giáo dục, hoặc văn bản xác định không phải công nhận."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 300
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
          }
        ],
        "items": [
          {
            "id": "d-2a",
            "t": "text",
            "text": "Bằng cử nhân NN → dự tuyển",
            "x": 5964,
            "y": 430,
            "size": 44,
            "at": "l1:education",
            "hl": [
              {
                "text": "dự tuyển",
                "at": "l1:apply"
              }
            ]
          },
          {
            "id": "d-2b",
            "t": "text",
            "text": "Học nghề NN: thủ tục riêng",
            "x": 5964,
            "y": 510,
            "size": 44,
            "at": "l2:trained",
            "color": "coral",
            "hl": [
              {
                "text": "thủ tục riêng",
                "at": "l2:separate"
              }
            ]
          },
          {
            "id": "d-2c",
            "t": "text",
            "text": "(Bộ trưởng Tư pháp quy định)",
            "x": 6004,
            "y": 580,
            "size": 36,
            "at": "l2:Minister",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Keep two things apart. Recognising your foreign degree is an education matter, so you can apply here.",
          "sub": "Tách hai việc. Công nhận bằng cử nhân nước ngoài là chuyện văn bằng, để được dự tuyển lớp trong nước.",
          "keys": [
            "chuyện văn bằng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Already trained as a lawyer abroad? That is a separate procedure, set by the Justice Minister.",
          "sub": "Đã học nghề luật sư ở nước ngoài? Đó là thủ tục khác, do Bộ trưởng Bộ Tư pháp quy định.",
          "keys": [
            "thủ tục khác"
          ]
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s12",
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
            "at": "l5",
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
            "text": "③ Thứ Tư · Lan làm 4 bước",
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
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "hourglass-not-done"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "E-SHOT-05",
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
            "at": "l1:Wednesday",
            "caption": "Thứ Tư · Lan bắt tay làm",
            "icon": "page-facing-up"
          },
          {
            "id": "e-b0",
            "t": "badge",
            "n": 1,
            "x": 7962,
            "y": 205,
            "at": "l2:read"
          },
          {
            "id": "e-s0",
            "t": "text",
            "text": "Đọc dòng bằng NN trong thông báo",
            "x": 8012,
            "y": 180,
            "size": 38,
            "at": "l2:read+200"
          },
          {
            "id": "e-b1",
            "t": "badge",
            "n": 2,
            "x": 7962,
            "y": 305,
            "at": "l3:apply"
          },
          {
            "id": "e-s1",
            "t": "text",
            "text": "Xin công nhận, hoặc giấy không cần",
            "x": 8012,
            "y": 280,
            "size": 38,
            "at": "l3:apply+200",
            "color": "coral",
            "hl": [
              {
                "text": "Xin công nhận",
                "at": "l5:right away"
              }
            ]
          },
          {
            "id": "e-b2",
            "t": "badge",
            "n": 3,
            "x": 7962,
            "y": 405,
            "at": "l4:certify"
          },
          {
            "id": "e-s2",
            "t": "text",
            "text": "Chứng thực bằng + giấy công nhận",
            "x": 8012,
            "y": 380,
            "size": 38,
            "at": "l4:certify+200"
          },
          {
            "id": "e-b3",
            "t": "badge",
            "n": 4,
            "x": 7962,
            "y": 505,
            "at": "l4:each"
          },
          {
            "id": "e-s3",
            "t": "text",
            "text": "Mỗi bộ hồ sơ một bản",
            "x": 8012,
            "y": 480,
            "size": 38,
            "at": "l4:each+200"
          },
          {
            "id": "e-key",
            "t": "text",
            "text": "Bằng NN đi kèm giấy công nhận",
            "x": 7932,
            "y": 640,
            "size": 46,
            "at": "l6:travelling",
            "color": "accent",
            "hl": [
              {
                "text": "đi kèm",
                "at": "l6:travelling"
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
          "say": "Third stop: Wednesday. Lan gets to work.",
          "sub": "Chặng ba: thứ Tư. Lan bắt tay vào làm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Step one: I read the foreign degree line in the newest notice.",
          "sub": "Bước một: em đọc kỹ dòng về bằng nước ngoài trong thông báo mới nhất."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: apply for recognition, or for the paper saying none is needed.",
          "sub": "Hai: nộp hồ sơ xin công nhận, hoặc xin văn bản xác định không phải công nhận."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three and four: certify the degree and the paper together, one copy for each set.",
          "sub": "Ba và bốn: chứng thực cả bằng lẫn giấy công nhận, đặt vào mỗi bộ hồ sơ một bản."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "I'll do step two right away. Nobody knows how long it takes.",
          "sub": "Bước hai em làm ngay. Có ai biết thủ tục mất bao lâu đâu.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A foreign degree gets in, but only travelling with its recognition paper.",
          "sub": "Bằng nước ngoài vào được, nhưng phải đi kèm giấy công nhận.",
          "keys": [
            "đi kèm giấy công nhận"
          ]
        }
      ],
      "ref": "p7,p8"
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
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Năm · Công dân, lý lịch",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:layer"
          },
          {
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1270,
            "w": 46,
            "h": 46,
            "at": "l2:citizen",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1252,
            "size": 58,
            "at": "l2:citizen+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "Công dân VN, thường trú tại VN",
            "x": 128,
            "y": 1260,
            "size": 44,
            "at": "l2:citizen+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1365,
            "w": 46,
            "h": 46,
            "at": "l2:political",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1347,
            "size": 58,
            "at": "l2:political+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "Chính trị vững, đạo đức tốt",
            "x": 128,
            "y": 1355,
            "size": 44,
            "at": "l2:political+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1460,
            "w": 46,
            "h": 46,
            "at": "l3:prosecution",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1442,
            "size": 58,
            "at": "l3:prosecution+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "Không bị truy cứu hình sự",
            "x": 128,
            "y": 1450,
            "size": 44,
            "at": "l3:prosecution+200"
          },
          {
            "id": "f-c3",
            "t": "box",
            "x": 60,
            "y": 1555,
            "w": 46,
            "h": 46,
            "at": "l3:cleared",
            "stroke": 5
          },
          {
            "id": "f-k3",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1537,
            "size": 58,
            "at": "l3:cleared+600",
            "color": "accent"
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "Án tích: đã được xoá",
            "x": 128,
            "y": 1545,
            "size": 44,
            "at": "l3:cleared+200"
          },
          {
            "id": "f-10",
            "t": "text",
            "text": "Điều 10: trung thành, tuân thủ",
            "x": 900,
            "y": 1280,
            "size": 38,
            "at": "l4:ten",
            "color": "muted"
          },
          {
            "id": "f-cert",
            "t": "text",
            "text": "Sơ yếu lý lịch có xác nhận",
            "x": 900,
            "y": 1380,
            "size": 44,
            "at": "l5:certified"
          },
          {
            "id": "f-match",
            "t": "text",
            "text": "→ khai khớp giấy tờ thật",
            "x": 940,
            "y": 1450,
            "size": 44,
            "at": "l5:match",
            "color": "accent",
            "hl": [
              {
                "text": "khớp giấy tờ thật",
                "at": "l5:real"
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
          "say": "Fourth stop: Thursday. The layer nobody prints on a diploma.",
          "sub": "Chặng bốn: thứ Năm. Lớp điều kiện không ai in lên tấm bằng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A Vietnamese citizen with permanent residence in Vietnam, firm political views, good character.",
          "sub": "Công dân Việt Nam thường trú tại Việt Nam, lập trường chính trị vững vàng, đạo đức tốt.",
          "keys": [
            "thường trú tại Việt Nam"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not facing criminal prosecution, and no conviction that is not yet cleared.",
          "sub": "Không đang bị truy cứu trách nhiệm hình sự, không thuộc diện chưa được xoá án tích."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Article ten adds loyalty, and respect for the constitution and law.",
          "sub": "Điều 10 thêm: trung thành với Tổ quốc, tuân thủ Hiến pháp và pháp luật."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Your history form gets certified, so what you write must match your real papers.",
          "sub": "Sơ yếu lý lịch có xác nhận, nên điều khai phải khớp giấy tờ thật.",
          "keys": [
            "khớp giấy tờ thật"
          ]
        }
      ],
      "ref": "p9,p10"
    },
    {
      "id": "s14",
      "module": "BRK-07",
      "data": {
        "question": "Định cư nước ngoài nhiều năm. Có chắc đủ điều kiện?",
        "illus": "globe-showing-europe-africa"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "But wait. Try this one.",
          "sub": "Nhưng khoan. Thử nghĩ xem."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Someone settled abroad for years. Surely eligible?",
          "sub": "Một người định cư ở nước ngoài nhiều năm. Có chắc đủ điều kiện?",
          "keys": [
            "Có chắc"
          ]
        }
      ],
      "ref": "p11"
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
            "id": "f-res",
            "t": "text",
            "text": "Định cư NN → chưa chắc",
            "x": 900,
            "y": 1560,
            "size": 48,
            "at": "l1:Not",
            "color": "coral",
            "hl": [
              {
                "text": "chưa chắc",
                "at": "l1:certain"
              }
            ]
          },
          {
            "id": "f-17",
            "t": "text",
            "text": "Điều 17: không thường trú",
            "x": 900,
            "y": 1640,
            "size": 40,
            "at": "l2:seventeen"
          },
          {
            "id": "f-17b",
            "t": "text",
            "text": "→ không cấp chứng chỉ",
            "x": 940,
            "y": 1700,
            "size": 40,
            "at": "l2:no",
            "color": "muted"
          },
          {
            "id": "f-key",
            "t": "text",
            "text": "Cư trú: không nằm trên bằng",
            "x": 60,
            "y": 1690,
            "size": 46,
            "at": "l4:residence",
            "color": "accent",
            "hl": [
              {
                "text": "không nằm trên bằng",
                "at": "l4:diploma"
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
          "say": "Not certain. The notice requires permanent residence in Vietnam.",
          "sub": "Chưa chắc. Thông báo yêu cầu thường trú tại Việt Nam.",
          "keys": [
            "Chưa chắc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And article seventeen gives no practising certificate to someone not residing in Vietnam.",
          "sub": "Và khoản 4 Điều 17 không cấp chứng chỉ hành nghề cho người không thường trú tại Việt Nam."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So check your residence status, and ask the academy before sending anything.",
          "sub": "Nên kiểm tình trạng cư trú, hỏi Học viện trước khi nộp."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Residence is not printed on your diploma, so it is easy to forget.",
          "sub": "Điều kiện cư trú không nằm trên tấm bằng, nên càng dễ quên.",
          "keys": [
            "càng dễ quên"
          ]
        }
      ],
      "ref": "p11,p12"
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
          },
          {
            "at": "l3",
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
            "text": "⑤ Thứ Sáu · Công chức học được?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "office-building",
                "clipboard"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2:Hoa",
            "caption": "Thứ Sáu · cơ quan cô Hoa",
            "icon": "office-building"
          },
          {
            "id": "g-ok",
            "t": "text",
            "text": "Học: được, không bị loại",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l4:exclude",
            "color": "accent",
            "hl": [
              {
                "text": "được",
                "at": "l4:does not"
              }
            ]
          },
          {
            "id": "g-no",
            "t": "text",
            "text": "Hành nghề: chưa cấp chứng chỉ",
            "x": 2028,
            "y": 1350,
            "size": 46,
            "at": "l5:certificate",
            "color": "coral",
            "hl": [
              {
                "text": "chưa cấp chứng chỉ",
                "at": "l5:certificate"
              }
            ]
          },
          {
            "id": "g-who",
            "t": "text",
            "text": "(cả quân đội, công an)",
            "x": 2028,
            "y": 1430,
            "size": 34,
            "at": "l5:servant",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: Friday, at a government office.",
          "sub": "Chặng năm: thứ Sáu, ở một cơ quan nhà nước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Ms Hoa, a civil servant who knows Thảo. Direct, busy, and allergic to long answers.",
          "sub": "Đây là cô Hoa, công chức, quen Thảo. Thẳng tính, bận rộn, dị ứng câu trả lời dài.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "I'm a civil servant. Can I even join the class? Short answer, please!",
          "sub": "Cô là công chức. Cô có được học không? Nói ngắn thôi nha!",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Short answer: yes. The notice does not exclude civil servants from the class.",
          "sub": "Ngắn gọn: được. Thông báo không loại cán bộ, công chức, viên chức khỏi lớp học.",
          "keys": [
            "được"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The catch comes later. While you remain a civil servant, or in army or police units, no practising certificate.",
          "sub": "Điểm cần nhớ ở chặng sau: còn là công chức, hay trong quân đội, công an, thì chưa được cấp chứng chỉ hành nghề.",
          "keys": [
            "chưa được cấp chứng chỉ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s17",
      "module": "BRK-03",
      "data": {
        "value": 70,
        "label": "học viên lớp khoá 28 ở Hà Tĩnh, có cả công chức",
        "illus": "busts-in-silhouette"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Look at the intake twenty-eight class in Hà Tĩnh.",
          "sub": "Nhìn lớp khoá 28 ở Hà Tĩnh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Seventy students, including many civil servants.",
          "sub": "Bảy mươi học viên, có cả nhiều cán bộ, công chức.",
          "keys": [
            "Bảy mươi học viên"
          ]
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s18",
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
            "id": "g-ht",
            "t": "text",
            "text": "Học cho việc ở cơ quan",
            "x": 2028,
            "y": 1520,
            "size": 38,
            "at": "l1:offices"
          },
          {
            "id": "g-key",
            "t": "text",
            "text": "Hành nghề: rời vị trí trước",
            "x": 2028,
            "y": 1600,
            "size": 42,
            "at": "l2:leave",
            "color": "accent",
            "hl": [
              {
                "text": "rời vị trí",
                "at": "l2:leave"
              }
            ]
          },
          {
            "id": "g-16",
            "t": "text",
            "text": "Buộc thôi việc: chờ 3 năm",
            "x": 2028,
            "y": 1690,
            "size": 40,
            "at": "l3:three",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Many study not to practise right away, but to do better legal work at their offices.",
          "sub": "Nhiều người học không phải để hành nghề ngay, mà để làm tốt việc pháp lý ở cơ quan."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Good. I study now, and plan to leave my post before practising. Done!",
          "sub": "Rồi, vậy nha! Cô học trước, muốn hành nghề thì tính chuyện rời vị trí.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "That clause also covers records, and people forced to quit, until three years pass. Know it before class.",
          "sub": "Khoản 4 Điều 17 còn nói án tích, người bị buộc thôi việc chưa hết ba năm. Biết trước khi đi học.",
          "keys": [
            "ba năm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Next morning, another worry. Dũng, Thảo's cousin, has a degree close to law.",
          "sub": "Sáng hôm sau, nỗi lo khác. Dũng, em họ Thảo, có bằng ngành gần luật."
        }
      ],
      "ref": "p14,p15,p16"
    },
    {
      "id": "s19",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Sáng thứ Bảy",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Cứ nộp đại, chờ xem có nhận không",
          "why": "Nếu bị loại: mất công xác nhận, chụp ảnh, chờ thêm một đợt.",
          "rule": "Gọi hỏi trước khi làm hồ sơ"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Not sure it counts. Whatever, I'll pay the fee, send it all, and see!",
          "sub": "Không chắc có được không. Kệ, em chuyển lệ phí, nộp luôn rồi tính!",
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
          "say": "If they reject it, you lose the certification, the photos, and a whole round.",
          "sub": "Nếu bị loại, mất công xác nhận, chụp ảnh, lại chờ thêm một đợt.",
          "keys": [
            "chờ thêm một đợt"
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
          "say": "Okay. I'll call the training office first and read them my exact field name.",
          "sub": "Được rồi. Em gọi Phòng Đào tạo trước, đọc đúng tên ngành ghi trên bằng.",
          "phase": "redo",
          "face": "happy",
          "pose": "phone"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p19"
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
            "at": "l3",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Bảy · Một cuộc gọi",
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
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "telephone-receiver"
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
            "at": "l1:call",
            "caption": "Thứ Bảy · gọi hỏi trước",
            "icon": "telephone-receiver"
          },
          {
            "id": "h-a",
            "t": "text",
            "text": "A: nộp đại, mất một đợt",
            "x": 3996,
            "y": 1260,
            "size": 44,
            "at": "l3:whole round",
            "color": "muted"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "B: gọi hỏi → biết trước",
            "x": 3996,
            "y": 1350,
            "size": 50,
            "at": "l3:Option B",
            "color": "accent",
            "hl": [
              {
                "text": "biết trước",
                "at": "l3:know"
              }
            ]
          },
          {
            "id": "h-hn",
            "t": "text",
            "text": "Hà Nội: 024.62873428, máy lẻ 1001",
            "x": 3996,
            "y": 1470,
            "size": 38,
            "at": "l4:Hanoi"
          },
          {
            "id": "h-hcm",
            "t": "text",
            "text": "TP.HCM: 028.22539101",
            "x": 3996,
            "y": 1530,
            "size": 38,
            "at": "l4:Chi Minh"
          },
          {
            "id": "h-key",
            "t": "text",
            "text": "1 cuộc gọi < 1 đợt chờ",
            "x": 3996,
            "y": 1650,
            "size": 60,
            "at": "l5:call",
            "color": "accent",
            "hl": [
              {
                "text": "1 cuộc gọi",
                "at": "l5:One call"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Số liên hệ theo thông báo khoá 28",
            "x": 3996,
            "y": 1825,
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
          "say": "Sixth stop: Saturday, one phone call.",
          "sub": "Chặng sáu: thứ Bảy, một cuộc gọi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Hello, my degree says this exact field name. Am I eligible?",
          "sub": "Alô, bằng của em ghi đúng tên ngành thế này. Em có thuộc đối tượng không ạ?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Option A costs a whole round. Option B costs one call, and you know the answer in advance.",
          "sub": "Cách A có thể mất cả một đợt. Cách B tốn một cuộc gọi, nhưng biết trước câu trả lời.",
          "keys": [
            "biết trước câu trả lời"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The notice lists the training office in Hanoi, and the training team in Ho Chi Minh City.",
          "sub": "Thông báo ghi số Phòng Đào tạo ở Hà Nội và Tổ Đào tạo ở TP.HCM."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One call before applying is cheaper than one round of waiting after rejection.",
          "sub": "Một cuộc gọi trước khi nộp rẻ hơn một đợt chờ sau khi bị loại.",
          "keys": [
            "rẻ hơn một đợt chờ"
          ]
        }
      ],
      "ref": "p18,p19,p20"
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
            "at": 150,
            "fit": "I",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Chủ nhật · Nên hỏi trước khi",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1260,
            "w": 46,
            "h": 46,
            "at": "l2:name",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1242,
            "size": 58,
            "at": "l2:name+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Bằng ngành khác tên",
            "x": 6032,
            "y": 1250,
            "size": 44,
            "at": "l2:name+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1360,
            "w": 46,
            "h": 46,
            "at": "l2:foreign",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1342,
            "size": 58,
            "at": "l2:foreign+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Bằng NN chưa có công nhận",
            "x": 6032,
            "y": 1350,
            "size": 44,
            "at": "l2:foreign+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1460,
            "w": 46,
            "h": 46,
            "at": "l3:residence",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1442,
            "size": 58,
            "at": "l3:residence+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Ở NN, chưa rõ thường trú",
            "x": 6032,
            "y": 1450,
            "size": 44,
            "at": "l3:residence+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1560,
            "w": 46,
            "h": 46,
            "at": "l3:criminal",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1542,
            "size": 58,
            "at": "l3:criminal+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Án tích, vụ hình sự chưa rõ",
            "x": 6032,
            "y": 1550,
            "size": 44,
            "at": "l3:criminal+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1660,
            "w": 46,
            "h": 46,
            "at": "l3:servant",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1642,
            "size": 58,
            "at": "l3:servant+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Công chức, muốn hành nghề",
            "x": 6032,
            "y": 1650,
            "size": 44,
            "at": "l3:servant+200"
          },
          {
            "id": "i-law",
            "t": "text",
            "text": "Luật Luật sư đang sửa đổi",
            "x": 5964,
            "y": 1770,
            "size": 40,
            "at": "l5:amended",
            "color": "coral",
            "hl": [
              {
                "text": "đang sửa đổi",
                "at": "l5:amended"
              }
            ]
          },
          {
            "id": "i-ky",
            "t": "text",
            "text": "Kỳ họp 17/10–21/11/2026",
            "x": 6804,
            "y": 1780,
            "size": 34,
            "at": "l5:session",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: Sunday. Thảo pins a list on the fridge: ask before you apply if...",
          "sub": "Chặng bảy: Chủ nhật. Thảo dán lên tủ lạnh: hỏi Học viện trước khi nộp nếu...",
          "keys": [
            "hỏi Học viện trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your degree has another field name. Your foreign degree lacks recognition.",
          "sub": "Bằng mang tên ngành khác. Bằng nước ngoài chưa có giấy công nhận."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Residence unclear, a criminal matter, a record maybe not cleared, or a civil servant.",
          "sub": "Chưa rõ thường trú, có vụ việc hình sự, chưa rõ xoá án tích, hay là công chức."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And the Law on Lawyers is being amended this session, so recheck afterwards.",
          "sub": "Luật Luật sư đang được sửa đổi ở kỳ họp này, nên kiểm lại điều kiện sau kỳ họp.",
          "keys": [
            "kiểm lại"
          ]
        }
      ],
      "ref": "p17,p18"
    },
    {
      "id": "s22",
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
            "text": "Tối Chủ nhật · một tuần sau",
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
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "check-mark-button"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "at": "l1:Sunday",
            "caption": "Tối Chủ nhật · nhóm chat yên ắng",
            "icon": "mobile-phone"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Lan: đang xin công nhận",
            "x": 7932,
            "y": 1260,
            "size": 44,
            "at": "l2:Lan"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Cô Hoa: học trước, tính sau",
            "x": 7932,
            "y": 1330,
            "size": 44,
            "at": "l2:Hoa"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Dũng: đã gọi hỏi ✓",
            "x": 7932,
            "y": 1400,
            "size": 44,
            "at": "l2:Dũng"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Biết mình… trước khi nộp”",
            "x": 7932,
            "y": 1540,
            "size": 54,
            "at": "l3:yourself",
            "color": "accent",
            "hl": [
              {
                "text": "trước khi nộp",
                "at": "l3:before"
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
          "say": "Sunday night again. Same sofa, same group chat. Much quieter.",
          "sub": "Lại tối Chủ nhật. Vẫn ghế ấy, vẫn nhóm chat ấy. Yên hơn hẳn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Lan is getting recognition, Ms Hoa will study first, Dũng already called. Everyone knows where they stand.",
          "sub": "Lan đang xin công nhận, cô Hoa học trước, Dũng đã gọi hỏi. Ai cũng biết mình đứng đâu.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Know yourself, win every battle. Here: know yourself before you apply.",
          "sub": "“Biết mình biết ta.” Ở đây: biết mình trước khi nộp.",
          "keys": [
            "biết mình trước khi nộp"
          ]
        }
      ],
      "ref": "outro"
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
            "at": "l1:law",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:foreign",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:residence",
            "fit": "F",
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
            "x": 4716,
            "y": 180,
            "at": "l1:law"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8652,
            "y": 650,
            "at": "l2:foreign"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 800,
            "y": 1290,
            "at": "l3:residence"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Kiến thức tham khảo, không phải tư vấn trường hợp riêng; đối chiếu thông báo mới nhất. Luật Luật sư đang sửa đổi.",
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
          "say": "So: a bachelor of law or higher. A master still takes the class.",
          "sub": "Tóm lại: cử nhân luật trở lên. Có thạc sĩ vẫn phải học lớp.",
          "keys": [
            "cử nhân luật trở lên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A foreign degree travels with its recognition paper.",
          "sub": "Bằng nước ngoài đi kèm giấy công nhận.",
          "keys": [
            "giấy công nhận"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Citizen with residence in Vietnam, clean record. Unsure? Call first.",
          "sub": "Công dân thường trú tại Việt Nam, lý lịch không vướng. Chưa chắc? Gọi hỏi trước.",
          "keys": [
            "Gọi hỏi trước"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s24",
      "module": "QUIZ-01",
      "data": {
        "q": "What do many people wrongly believe about a master degree in law?",
        "options": [
          "That it exempts them from the training class, though the exemption list omits it",
          "That it must be translated into English before the academy reads it",
          "That it bars them from the class, though the notice accepts higher degrees"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "graduation-cap",
        "why": "Điều 13 chỉ miễn bốn nhóm, không có thạc sĩ luật."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What do many people wrongly believe about a master degree in law?",
          "sub": "Nhiều người hiểu lầm gì về bằng thạc sĩ luật?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "That it exempts them from the class. But the exemption list does not include masters.",
          "sub": "Rằng thạc sĩ được miễn lớp. Nhưng danh sách miễn không có thạc sĩ."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "A higher degree helps your file, not your schedule.",
          "sub": "Bằng cao hơn giúp hồ sơ, không bớt được lịch học."
        }
      ],
      "ref": "questions[4]"
    },
    {
      "id": "s25",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi tự đánh dấu danh sách điều kiện"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tick the checklist for yourself, and write down what to ask the academy.",
          "sub": "Tự đánh dấu danh sách, ghi lại điểm còn băn khoăn để hỏi Học viện."
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
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô theo MỘT TUẦN tự kiểm điều kiện (tối Chủ nhật nhóm chat gia đình → T2 bằng cấp → T3, T4 Lan bằng nước ngoài → T5 công dân, lý lịch, cư trú → T6 cô Hoa công chức → sáng T7 Dũng “Khoan đã!” + gọi Phòng Đào tạo → CN danh sách nên hỏi → tối CN tuần sau). Nhân vật theo w145/_series/bar-academy-admission.md: Thảo, Lan (đóng Ngân p7), cô Hoa (công chức p13–p15), Dũng (đóng Huy p19). Số liệu chỉ từ bài: Điều 10/12/13/17, 4 nhóm miễn, 70 học viên Hà Tĩnh, 3 năm, số điện thoại Phòng/Tổ Đào tạo, kỳ họp 17/10–21/11/2026. Cảnh ngắt nhịp: BRK-04 s07 (thạc sĩ không được miễn, p3), BRK-07 s14 (định cư nước ngoài, p11), BRK-03 s17 (70 học viên, p14), DLG s19 (nộp đại, p19). Khép vòng: ‘Biết mình biết ta’ → biết mình trước khi nộp. Câu đố questions[4]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s22"
  }
};
