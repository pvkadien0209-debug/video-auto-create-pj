// parents-and-scams-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "parents-and-scams-overview--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "children-protecting-parents-from-scams",
    "slug": "parents-and-scams-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Vì sao người cao tuổi dễ bị lừa qua điện thoại, và con cái giúp được gì?",
    "series": "Giữ cha mẹ khỏi bẫy lừa qua điện thoại — cho con cái dạy cha mẹ nhận ra và xử lý"
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
            "id": "a-q",
            "t": "text",
            "text": "Nhóm nào bị nhắm nhiều nhất?",
            "x": 60,
            "y": 60,
            "size": 64,
            "at": "l1:target"
          },
          {
            "id": "a-o1",
            "t": "text",
            "text": "Sinh viên?",
            "x": 80,
            "y": 170,
            "size": 56,
            "at": "l1:students",
            "color": "muted"
          },
          {
            "id": "a-o2",
            "t": "text",
            "text": "Trẻ em?",
            "x": 80,
            "y": 250,
            "size": 56,
            "at": "l1:children",
            "color": "muted"
          },
          {
            "id": "a-o3",
            "t": "text",
            "text": "Cha mẹ bạn?",
            "x": 80,
            "y": 330,
            "size": 56,
            "at": "l1:parents",
            "color": "muted"
          },
          {
            "id": "a-24",
            "t": "text",
            "text": "24 hình thức lừa",
            "x": 520,
            "y": 175,
            "size": 60,
            "at": "l2:twenty four"
          },
          {
            "id": "a-15",
            "t": "text",
            "text": "15/24",
            "x": 520,
            "y": 260,
            "size": 150,
            "at": "l3:Fifteen",
            "color": "accent",
            "hl": [
              {
                "text": "15/24",
                "at": "l3:older"
              }
            ]
          },
          {
            "id": "a-r",
            "t": "ring",
            "around": [
              "a-o3"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l3:older"
          },
          {
            "id": "a-x1",
            "t": "strike",
            "over": "a-o1",
            "at": "l3:children"
          },
          {
            "id": "a-x2",
            "t": "strike",
            "over": "a-o2",
            "at": "l3:students"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: Cẩm nang nhận diện lừa đảo trực tuyến, Bộ TT&TT 2023 — Thư viện Pháp luật giới thiệu",
            "x": 60,
            "y": 720,
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
          "say": "Quick guess. Who do scammers target most: students, children, or your parents?",
          "sub": "Đoán nhanh. Kẻ lừa đảo nhắm vào ai nhiều nhất: sinh viên, trẻ em, hay cha mẹ bạn?",
          "keys": [
            "nhắm vào ai nhiều nhất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A government handbook from twenty twenty-three lists twenty four common online scams.",
          "sub": "Cẩm nang năm 2023 của Bộ Thông tin và Truyền thông nêu 24 hình thức lừa đảo trực tuyến phổ biến."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fifteen of them target older people. More than the ones aimed at children or students.",
          "sub": "Mười lăm hình thức nhắm vào người cao tuổi. Nhiều hơn số nhắm vào trẻ em hay sinh viên.",
          "keys": [
            "Mười lăm hình thức"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "tiet-lo"
        }
      ],
      "ref": "p3"
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
            "at": "l6",
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
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "tu",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "phone"
                }
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "tu",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-10",
                  "on": "thao",
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
            "caption": "Tối thứ Hai · 20:00 · gọi video",
            "icon": "mobile-phone"
          },
          {
            "id": "a-cop",
            "t": "text",
            "text": "“Công an” gọi: nhà dính vụ án",
            "x": 60,
            "y": 470,
            "size": 44,
            "at": "l3:policeman",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Trẻ cậy cha, già cậy con”",
            "x": 60,
            "y": 580,
            "size": 60,
            "at": "l6:young",
            "color": "accent",
            "hl": [
              {
                "text": "già cậy con",
                "at": "l6:old"
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
          "say": "Meet Thảo. She works in the city, far from her parents.",
          "sub": "Đây là Thảo. Cô làm việc ở thành phố, xa bố mẹ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Monday, eight p.m., the weekly video call. And this is Bà Tư, her mum.",
          "sub": "Tối thứ Hai, tám giờ, cuộc gọi video hằng tuần. Còn đây là bà Tư, mẹ của Thảo.",
          "keys": [
            "bà Tư"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "tu",
          "say": "A policeman called today. He said our family is in a criminal case. But I haven't sent money yet.",
          "sub": "Hôm nay có anh công an gọi, bảo nhà mình dính vụ án. Mà mẹ chưa chuyển tiền đâu.",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Haven't sent it... yet? Mum!",
          "sub": "Chưa chuyển... nghĩa là suýt? Mẹ ơi!",
          "face": "surprised"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: the young lean on their parents, the old lean on their children.",
          "sub": "Ông bà dặn: “Trẻ cậy cha, già cậy con.”",
          "keys": [
            "già cậy con"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Thảo realises: it's her turn now.",
          "sub": "Tối nay Thảo hiểu: đến lượt mình."
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
            "text": "Vì sao cha mẹ dễ bị lừa?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:fall",
            "hl": [
              {
                "text": "dễ bị lừa",
                "at": "l1:scams"
              }
            ]
          },
          {
            "id": "b-q2",
            "t": "text",
            "text": "Con cái giúp được gì?",
            "x": 2028,
            "y": 140,
            "size": 60,
            "at": "l1:help",
            "color": "accent"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: cha mẹ kém hiểu biết",
            "x": 2028,
            "y": 260,
            "size": 52,
            "at": "l2:foolish",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:foolish+500"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: bị nhắm tới nhiều nhất",
            "x": 2028,
            "y": 350,
            "size": 58,
            "at": "l3:targeted",
            "color": "accent",
            "hl": [
              {
                "text": "nhiều nhất",
                "at": "l3:most"
              }
            ]
          },
          {
            "id": "b-do",
            "t": "text",
            "text": "→ con cái chủ động giúp",
            "x": 2068,
            "y": 440,
            "size": 50,
            "at": "l3:step",
            "hl": [
              {
                "text": "chủ động",
                "at": "l3:step"
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
          "say": "So why do older people fall for phone scams, and how can their children help?",
          "sub": "Vậy vì sao người cao tuổi dễ bị lừa qua điện thoại, và con cái giúp được gì?",
          "keys": [
            "con cái giúp được gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not because parents are foolish.",
          "sub": "Không phải vì cha mẹ kém hiểu biết."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But because they are the group targeted most. So children should step in.",
          "sub": "Mà vì họ là nhóm bị nhắm tới nhiều nhất. Nên con cái cần chủ động giúp.",
          "keys": [
            "chủ động giúp"
          ]
        }
      ],
      "ref": "p4"
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
            "id": "b-wk",
            "t": "text",
            "text": "1 tuần của Thảo · 5 chặng",
            "x": 2028,
            "y": 530,
            "size": 52,
            "at": "l1:week",
            "hl": [
              {
                "text": "5 chặng",
                "at": "l1:five"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2008,
            "y": 610,
            "w": 315,
            "h": 100,
            "at": "l2:Spot",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2343,
            "y": 610,
            "w": 315,
            "h": 100,
            "at": "l2:call",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2678,
            "y": 610,
            "w": 315,
            "h": 100,
            "at": "l2:nobody",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 3013,
            "y": 610,
            "w": 315,
            "h": 100,
            "at": "l2:safer",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3348,
            "y": 610,
            "w": 315,
            "h": 100,
            "at": "l2:tricked",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Nhận ra",
            "x": 2028,
            "y": 632,
            "size": 44,
            "at": "l2:Spot+200"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Gọi lại con",
            "x": 2363,
            "y": 632,
            "size": 44,
            "at": "l2:call+200"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Không ai được đòi",
            "x": 2698,
            "y": 632,
            "size": 34,
            "at": "l2:nobody+200"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Cài máy",
            "x": 3033,
            "y": 632,
            "size": 44,
            "at": "l2:safer+200"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Lỡ chuyển",
            "x": 3368,
            "y": 632,
            "size": 44,
            "at": "l2:tricked+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thảo has one week, and five stops to cover.",
          "sub": "Thảo có một tuần, và năm chặng phải đi.",
          "keys": [
            "năm chặng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Spot the scams. A call back rule. What nobody may ask for. A safer phone. And what to do if tricked.",
          "sub": "Nhận ra kịch bản. Quy tắc gọi lại cho con. Điều không ai được đòi. Cài điện thoại. Và làm gì nếu lỡ bị lừa."
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
            "at": "l3",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Ba · Vì sao cha mẹ?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:lunch"
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
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "mobile-phone",
                "police-officer"
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
            "at": "l1:reads",
            "caption": "Thứ Ba · giờ nghỉ trưa",
            "icon": "police-officer"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Hạn chế tiếp cận công nghệ",
            "x": 3996,
            "y": 160,
            "size": 46,
            "at": "l3:limited",
            "hl": [
              {
                "text": "công nghệ",
                "at": "l3:technology"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Thủ đoạn mới: khó nhận ra",
            "x": 3996,
            "y": 225,
            "size": 46,
            "at": "l3:new tricks",
            "color": "coral"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Giả: cơ quan · ngân hàng",
            "x": 3996,
            "y": 300,
            "size": 44,
            "at": "l4:officials"
          },
          {
            "id": "c-3b",
            "t": "text",
            "text": "nhà mạng · người thân cần tiền",
            "x": 3996,
            "y": 360,
            "size": 40,
            "at": "l4:relative"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Đòi: link · ứng dụng · mã",
            "x": 3996,
            "y": 425,
            "size": 42,
            "at": "l5:links",
            "color": "accent",
            "hl": [
              {
                "text": "mã",
                "at": "l5:codes"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Công an tỉnh Phú Thọ, Cổng TTĐT Chính phủ 22/6/2026",
            "x": 4836,
            "y": 715,
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
          "say": "Stop one, Tuesday lunch. Thảo reads police advice on the government portal.",
          "sub": "Chặng một, trưa thứ Ba. Thảo đọc khuyến cáo của công an trên Cổng Thông tin điện tử Chính phủ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Phú Thọ police, June twenty twenty-six. What about older people?",
          "sub": "Công an tỉnh Phú Thọ, tháng 6/2026. Về người cao tuổi thì sao nhỉ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Older people have limited access to technology, and new tricks are hard to spot.",
          "sub": "Người cao tuổi hạn chế trong tiếp cận công nghệ, khó nhận diện thủ đoạn mới.",
          "keys": [
            "khó nhận diện thủ đoạn mới"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Scammers pose as officials, bank staff, phone company workers, or a relative who needs money fast.",
          "sub": "Kẻ gian giả cơ quan chức năng, ngân hàng, nhân viên nhà mạng, hay người thân cần chuyển tiền gấp."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then come fake links, strange apps, and demands for codes and account details.",
          "sub": "Rồi gửi link giả, bảo cài ứng dụng lạ, đòi mã xác thực và thông tin tài khoản.",
          "keys": [
            "mã xác thực"
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
            "fit": "C",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "c-5",
            "t": "text",
            "text": "Đánh vào: con cháu, danh dự",
            "x": 3996,
            "y": 500,
            "size": 42,
            "at": "l1:safety",
            "hl": [
              {
                "text": "con cháu",
                "at": "l1:children's"
              }
            ]
          },
          {
            "id": "c-6",
            "t": "text",
            "text": "Hoảng → làm trước, nghĩ sau",
            "x": 3996,
            "y": 565,
            "size": 42,
            "at": "l1:honour",
            "color": "coral"
          },
          {
            "id": "c-7",
            "t": "text",
            "text": "Bình tĩnh, gọi người thân",
            "x": 3996,
            "y": 632,
            "size": 46,
            "at": "l3:calm",
            "color": "accent",
            "hl": [
              {
                "text": "Bình tĩnh",
                "at": "l3:calm"
              }
            ]
          },
          {
            "id": "c-8",
            "t": "text",
            "text": "Nửa đầu 2023: tăng gần 65%",
            "x": 3996,
            "y": 705,
            "size": 38,
            "at": "l4:sixty",
            "hl": [
              {
                "text": "gần 65%",
                "at": "l4:sixty"
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
          "say": "These stories hit what parents treasure most: their children's safety and the family's honour. Panic acts before thinking.",
          "sub": "Kịch bản đánh vào điều cha mẹ quý nhất: an toàn của con cháu, danh dự gia đình. Hoảng thì làm trước khi kịp nghĩ.",
          "keys": [
            "an toàn của con cháu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "First, says the police: stay calm, and contact family for advice.",
          "sub": "Bộ Công an khuyến cáo: trước hết giữ bình tĩnh, liên hệ người thân để được tư vấn.",
          "keys": [
            "giữ bình tĩnh"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And in the first half of twenty twenty-three, online scams rose nearly sixty five percent.",
          "sub": "Mà sáu tháng đầu năm 2023, lừa đảo trực tuyến tăng gần 65% so với cùng kỳ."
        }
      ],
      "ref": "p2,p3"
    },
    {
      "id": "s06",
      "module": "BRK-03",
      "data": {
        "value": 15,
        "suffix": " tỷ",
        "label": "hơn 15 tỷ đồng mất qua cuộc gọi giả công an",
        "illus": "money-with-wings"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Stop two, Wednesday. One fake police call. One woman.",
          "sub": "Chặng hai, thứ Tư. Một cuộc gọi giả danh công an. Một người phụ nữ."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "More than fifteen billion dong, gone.",
          "sub": "Hơn mười lăm tỷ đồng, mất trắng.",
          "keys": [
            "Hơn mười lăm tỷ đồng"
          ]
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
          },
          {
            "at": 150,
            "fit": "D",
            "ms": 900
          },
          {
            "at": "l4",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Tư · Mất bao nhiêu?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:threatened"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Hơn 15 tỷ đồng",
            "x": 5964,
            "y": 160,
            "size": 72,
            "at": "l1:fifteen",
            "color": "coral",
            "hl": [
              {
                "text": "15 tỷ",
                "at": "l1:billion"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "= tiền dành dụm cả đời",
            "x": 5964,
            "y": 270,
            "size": 48,
            "at": "l2:lifetime",
            "hl": [
              {
                "text": "cả đời",
                "at": "l2:lifetime"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "tiền dưỡng già, để cho cháu",
            "x": 5964,
            "y": 350,
            "size": 40,
            "at": "l2:grandchildren",
            "color": "muted"
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
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
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
            "at": "l3:brother",
            "caption": "Thứ Tư · Thảo gọi em trai",
            "icon": "telephone-receiver"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật, tổng hợp Công văn 397/TTCS-TTTH (01/11/2025)",
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
          "say": "A legal news site reports it: a fake officer threatened her and took over fifteen billion dong.",
          "sub": "Thư viện Pháp luật nêu vụ này: kẻ giả công an hù doạ, chiếm đoạt hơn 15 tỷ đồng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Often a lifetime of savings, for old age or for the grandchildren.",
          "sub": "Thường là tiền dành dụm cả đời, tiền dưỡng già hay để lại cho con cháu.",
          "keys": [
            "dành dụm cả đời"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Thảo calls her brother. Meet Dũng, a student, always in a hurry.",
          "sub": "Thảo gọi em trai. Đây là Dũng, sinh viên, lúc nào cũng vội.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Relax, sis. Mum knows my voice. Nobody can fake me!",
          "sub": "Chị yên tâm. Mẹ nghe giọng là biết em. Ai giả được em!",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "ref": "p5,p6"
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
            "id": "d-4",
            "t": "text",
            "text": "Giả giọng · giả nhân dạng",
            "x": 5964,
            "y": 450,
            "size": 50,
            "at": "l1:voices",
            "color": "coral",
            "hl": [
              {
                "text": "Giả giọng",
                "at": "l1:voices"
              }
            ]
          },
          {
            "id": "d-5",
            "t": "text",
            "text": "+ sim ảo, tài khoản không chính chủ",
            "x": 5964,
            "y": 530,
            "size": 40,
            "at": "l2:virtual"
          },
          {
            "id": "d-6",
            "t": "text",
            "text": "“Nghe giọng là biết con”",
            "x": 5964,
            "y": 620,
            "size": 52,
            "at": "l3:voice",
            "color": "muted"
          },
          {
            "id": "d-6x",
            "t": "strike",
            "over": "d-6",
            "at": "l3:enough"
          },
          {
            "id": "d-src2",
            "t": "text",
            "text": "Nguồn: Công văn 847/BCA-V01 (2026), Thư viện Pháp luật tóm tắt",
            "x": 6804,
            "y": 690,
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
          "say": "Sorry, Dũng. A twenty twenty-six police document notes scammers faking voices and faces.",
          "sub": "Tiếc quá Dũng ạ. Công văn 847 năm 2026 của Bộ Công an ghi nhận kẻ gian giả giọng nói, giả mạo nhân dạng.",
          "keys": [
            "giả giọng nói"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Plus virtual numbers, and bank accounts in other people's names.",
          "sub": "Kết hợp thuê bao ảo và tài khoản ngân hàng không chính chủ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So knowing your child's voice is no longer enough.",
          "sub": "Nên câu “nghe giọng là biết con mình” không còn đủ an toàn.",
          "keys": [
            "không còn đủ an toàn"
          ]
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
            "text": "③ Thứ Năm · Nhận ra vai",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:plan",
            "hl": [
              {
                "text": "Nhận ra vai",
                "at": "l1:roles"
              }
            ]
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
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
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l3:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l3:dad",
            "caption": "Thứ Năm · tối · gọi bố",
            "icon": "newspaper"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, Thursday. Stage one of the plan: help parents spot the roles scammers play.",
          "sub": "Chặng ba, thứ Năm. Chặng một của kế hoạch: giúp cha mẹ nhận ra những vai kẻ gian hay đóng.",
          "keys": [
            "những vai kẻ gian hay đóng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One troupe, many costumes.",
          "sub": "Một gánh hát, đủ loại trang phục."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Thảo calls her dad about them. Meet Bác Bình, retired, newspaper every morning.",
          "sub": "Thảo gọi cho bố để cùng điểm qua. Đây là bác Bình, bố Thảo, nghỉ hưu, sáng nào cũng đọc báo.",
          "keys": [
            "bác Bình"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s10",
      "module": "BRK-06",
      "data": {
        "title": "Một gánh hát, nhiều vai",
        "items": [
          {
            "illus": "police-officer",
            "text": "Công an"
          },
          {
            "illus": "judge",
            "text": "Toà án"
          },
          {
            "illus": "bank",
            "text": "Ngân hàng"
          },
          {
            "illus": "mobile-phone",
            "text": "Nhà mạng"
          },
          {
            "illus": "ambulance",
            "text": "Báo cấp cứu"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Police, courts, banks, phone companies.",
          "sub": "Công an, viện kiểm sát, toà án, ngân hàng, nhà mạng."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A grandchild in hospital. A prize.",
          "sub": "Con cháu cấp cứu. Trúng thưởng."
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
            "fit": "E",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "e-0",
            "t": "text",
            "text": "Vai khác nhau, dấu hiệu chung:",
            "x": 7932,
            "y": 165,
            "size": 48,
            "at": "l1:Different",
            "hl": [
              {
                "text": "dấu hiệu chung",
                "at": "l1:same signs"
              }
            ]
          },
          {
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 260,
            "w": 44,
            "h": 44,
            "at": "l1:hurry",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 242,
            "size": 56,
            "at": "l1:hurry+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Gấp gáp",
            "x": 7997,
            "y": 252,
            "size": 44,
            "at": "l1:hurry+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 345,
            "w": 44,
            "h": 44,
            "at": "l1:threats",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 327,
            "size": 56,
            "at": "l1:threats+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Doạ dẫm",
            "x": 7997,
            "y": 337,
            "size": 44,
            "at": "l1:threats+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 430,
            "w": 44,
            "h": 44,
            "at": "l1:secret",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 412,
            "size": 56,
            "at": "l1:secret+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Bắt giữ bí mật",
            "x": 7997,
            "y": 422,
            "size": 44,
            "at": "l1:secret+200"
          },
          {
            "id": "e-c3",
            "t": "box",
            "x": 7932,
            "y": 515,
            "w": 44,
            "h": 44,
            "at": "l2:transfer",
            "stroke": 5
          },
          {
            "id": "e-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 497,
            "size": 56,
            "at": "l2:transfer+600",
            "color": "accent"
          },
          {
            "id": "e-l3",
            "t": "text",
            "text": "Đòi tiền · mã OTP · cài ứng dụng",
            "x": 7997,
            "y": 507,
            "size": 44,
            "at": "l2:transfer+200"
          },
          {
            "id": "e-n",
            "t": "text",
            "text": "Bài sau: các kịch bản lừa",
            "x": 7932,
            "y": 640,
            "size": 44,
            "at": "l3:Details",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Different roles, same signs: hurry, threats, and keep it secret.",
          "sub": "Vai khác nhau, nhưng chung dấu hiệu: gấp gáp, doạ dẫm, bắt giữ bí mật.",
          "keys": [
            "chung dấu hiệu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then: transfer money, read out the OTP code, or install an app.",
          "sub": "Rồi đòi chuyển tiền, đọc mã OTP hay cài ứng dụng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Details are in the next lesson: which scam stories most often target older people.",
          "sub": "Chi tiết ở bài “Kịch bản lừa nào hay nhắm vào người cao tuổi?”."
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Thứ Năm · tối · nhà bố mẹ",
        "actors": [
          {
            "id": "binh",
            "side": "left",
            "pose": "hold"
          },
          {
            "id": "thao",
            "side": "right",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Bố cẩn thận, không ai lừa được",
          "why": "Chỉ một lần bấm link lạ hay đưa mã cho người lạ là điện thoại bị chiếm quyền, tài khoản bị truy cập.",
          "rule": "Cẩn thận vẫn cần một quy tắc chung"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "binh",
          "say": "I read the paper daily. Nobody fools me.",
          "sub": "Ngày nào bố cũng đọc báo. Không ai lừa được bố.",
          "face": "happy",
          "pose": "cross",
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
          "say": "One tap on a strange link can hijack a phone.",
          "sub": "Một lần bấm link lạ, điện thoại có thể bị chiếm quyền.",
          "keys": [
            "bị chiếm quyền"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Scammers just need one minute of panic.",
          "sub": "Kẻ gian không cần cha mẹ kém hiểu biết, chỉ cần một phút hoảng.",
          "keys": [
            "một phút hoảng"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Lần nữa nhé.",
          "phase": "redo"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "thao",
          "say": "Still, Dad, one family rule for panic.",
          "sub": "Bố cẩn thận thật. Nhưng nhà mình vẫn cần một quy tắc chung cho lúc hoảng.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "A shared rule works in a panic.",
          "sub": "Cẩn thận là tốt, nhưng vẫn cần một quy tắc chung để dùng đúng lúc hoảng.",
          "phase": "redo",
          "keys": [
            "quy tắc chung"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p8,p9"
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
            "at": "l5",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Sáu · Gọi lại con",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:simple",
            "hl": [
              {
                "text": "Gọi lại con",
                "at": "l1:call back"
              }
            ]
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Đòi tiền · đòi mã · tin dữ",
            "x": 60,
            "y": 1260,
            "size": 48,
            "at": "l2:money"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "→ Cúp máy",
            "x": 60,
            "y": 1340,
            "size": 64,
            "at": "l2:hang",
            "color": "accent",
            "hl": [
              {
                "text": "Cúp máy",
                "at": "l2:hang"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "→ Gọi con bằng số đã lưu",
            "x": 60,
            "y": 1430,
            "size": 52,
            "at": "l2:saved",
            "color": "accent"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "Đang nghe máy: không chuyển tiền",
            "x": 60,
            "y": 1530,
            "size": 40,
            "at": "l2:transfer",
            "color": "coral"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "tu",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-10",
                  "on": "tu",
                  "move": "cut"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l4:say",
            "caption": "Thứ Sáu · 21:00 · gọi mẹ",
            "icon": "telephone-receiver"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four, Friday. Stage two: one simple call back rule for the whole family.",
          "sub": "Chặng bốn, thứ Sáu. Chặng hai: một quy tắc gọi lại cho con, cả nhà cùng thống nhất.",
          "keys": [
            "quy tắc gọi lại cho con"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A call asking for money or codes, or bad news? Hang up, call your child on a saved number, and never transfer while on the line.",
          "sub": "Cuộc gọi đòi tiền, đòi mã hay báo tin dữ? Cúp máy, gọi lại con bằng số đã lưu, không chuyển tiền khi đang nghe máy.",
          "keys": [
            "Cúp máy"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But first, Thảo has to say it. The hard part.",
          "sub": "Nhưng trước hết, Thảo phải nói ra. Phần khó nhất."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Mum, you're old now, you get fooled easily. Just don't listen to anyone!",
          "sub": "Mẹ già rồi, dễ bị lừa lắm. Có ai gọi thì đừng nghe gì hết!",
          "face": "stern"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "tu",
          "say": "Old? Fooled easily? I raised you, you know.",
          "sub": "Già? Dễ bị lừa? Mẹ nuôi con lớn đấy nhé.",
          "face": "sad"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Ouch. Being taught by your kids can feel like an insult.",
          "sub": "Ối. Cha mẹ quen lo cho con, nay bị con “dạy” dễ thấy bị coi thường.",
          "keys": [
            "bị coi thường"
          ]
        }
      ],
      "ref": "p10,p14"
    },
    {
      "id": "s14",
      "module": "BRK-04",
      "data": {
        "title": "Cùng một lời nhắn",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Mẹ già rồi, dễ bị lừa, đừng nghe ai hết",
        "right": "Con cũng sợ bị lừa. Nhà mình thống nhất một cách nhé",
        "wrongIllus": "pouting-face",
        "rightIllus": "people-hugging"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: you're old, don't listen to anyone.",
          "sub": "Trước: mẹ già rồi, đừng nghe ai hết."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: I'm scared too. Let's agree on one way.",
          "sub": "Sau: con cũng sợ. Nhà mình thống nhất một cách nhé.",
          "keys": [
            "con cũng sợ"
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
            "fit": "F",
            "move": "cut"
          },
          {
            "at": "l1",
            "fit": [
              "f-v2"
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
            "id": "f-v2",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "tu",
                  "side": "right",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "tu",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": 0,
            "caption": "Thứ Sáu · tua lại",
            "icon": "telephone-receiver"
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "“Nhà mình cùng làm”",
            "x": 60,
            "y": 1620,
            "size": 54,
            "at": "l4:our family",
            "color": "accent",
            "hl": [
              {
                "text": "cùng làm",
                "at": "l4:does"
              }
            ]
          },
          {
            "id": "f-6",
            "t": "text",
            "text": "thay vì “mẹ phải nhớ”",
            "x": 100,
            "y": 1695,
            "size": 46,
            "at": "l4:must",
            "color": "muted"
          },
          {
            "id": "f-7",
            "t": "text",
            "text": "Kể vụ trên báo · hỏi ý",
            "x": 60,
            "y": 1780,
            "size": 42,
            "at": "l5:news"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Mum, scammers fake voices so well now. I'm scared I could be fooled too.",
          "sub": "Mẹ ơi, dạo này bọn lừa đảo giả giọng giỏi lắm. Con cũng sợ mình bị lừa.",
          "face": "worried"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Anyone asks for money, you hang up and call me. I'll do the same.",
          "sub": "Ai gọi đòi tiền thì mẹ cúp máy, gọi lại cho con. Con cũng làm vậy với mẹ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "tu",
          "say": "Both ways? Then that's fair. Agreed.",
          "sub": "Cả hai chiều à? Vậy thì công bằng. Mẹ đồng ý.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No jabs at age, one family, one side. Say our family does it, not you must remember.",
          "sub": "Không chê tuổi tác, cả nhà một phe. Nói “nhà mình cùng làm” thay vì “mẹ phải nhớ”.",
          "keys": [
            "nhà mình cùng làm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Share cases from the news, ask their opinion, admit you could be fooled too.",
          "sub": "Kể những vụ đã đăng báo, hỏi ý cha mẹ, và nhận rằng chính mình cũng có thể bị lừa."
        }
      ],
      "ref": "p15,p16,p14"
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
            "text": "⑤ Thứ Bảy · Chặng 3 và 4",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Saturday"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "walk",
                  "at": "l1"
                },
                {
                  "id": "tu",
                  "side": "right"
                }
              ],
              "props": [
                "mobile-phone",
                "locked"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:home",
            "caption": "Thứ Bảy · 9:00 · về quê",
            "icon": "house"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "③ Mật khẩu, mã OTP:",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l2:password",
            "color": "accent"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "không đưa ai, kể cả “ngân hàng”",
            "x": 2028,
            "y": 1335,
            "size": 44,
            "at": "l2:bank",
            "hl": [
              {
                "text": "không đưa ai",
                "at": "l2:even"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Ai đòi mã → giả",
            "x": 2028,
            "y": 1420,
            "size": 52,
            "at": "l3:fake",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, Saturday morning. Thảo goes home. Three heads around Dad's phone.",
          "sub": "Chặng năm, sáng thứ Bảy. Thảo về quê, ba người ngồi quanh điện thoại của bố."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Stage three: never give a password or OTP code to anyone, even someone claiming to be the bank.",
          "sub": "Chặng ba: không đưa mật khẩu, mã OTP cho bất kỳ ai, kể cả người xưng là ngân hàng.",
          "keys": [
            "mật khẩu, mã OTP"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Not even the bank? Then anyone asking for my code is fake. Easy!",
          "sub": "Ngân hàng cũng không à? Vậy ai đòi mã là giả. Dễ!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Exactly. Knowing what banks and state offices never do keeps parents calm.",
          "sub": "Chính xác. Biết chắc điều ngân hàng và cơ quan nhà nước không làm, cha mẹ sẽ bình tĩnh hơn.",
          "keys": [
            "bình tĩnh hơn"
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
      "ref": "p11"
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
          }
        ],
        "items": [
          {
            "id": "g-4",
            "t": "text",
            "text": "④ Cài lại điện thoại:",
            "x": 2028,
            "y": 1510,
            "size": 50,
            "at": "l1:Stage four",
            "color": "accent"
          },
          {
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1590,
            "w": 44,
            "h": 44,
            "at": "l1:lock",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1572,
            "size": 56,
            "at": "l1:lock+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "Khoá màn hình",
            "x": 2093,
            "y": 1582,
            "size": 38,
            "at": "l1:lock+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1655,
            "w": 44,
            "h": 44,
            "at": "l1:apps",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1637,
            "size": 56,
            "at": "l1:apps+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "Không cài ứng dụng lạ",
            "x": 2093,
            "y": 1647,
            "size": 38,
            "at": "l1:apps+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1720,
            "w": 44,
            "h": 44,
            "at": "l2:check",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1702,
            "size": 56,
            "at": "l2:check+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "Hiểu bước xác thực khi chuyển lớn",
            "x": 2093,
            "y": 1712,
            "size": 38,
            "at": "l2:check+200"
          },
          {
            "id": "g-c3",
            "t": "box",
            "x": 2028,
            "y": 1785,
            "w": 44,
            "h": 44,
            "at": "l2:block",
            "stroke": 5
          },
          {
            "id": "g-k3",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1767,
            "size": 56,
            "at": "l2:block+600",
            "color": "accent"
          },
          {
            "id": "g-l3",
            "t": "text",
            "text": "Chặn tin nhắn quảng cáo",
            "x": 2093,
            "y": 1777,
            "size": 38,
            "at": "l2:block+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stage four: set up the phone together. A screen lock, and no strange apps.",
          "sub": "Chặng bốn: cùng cài lại điện thoại. Khoá màn hình, không cài ứng dụng lạ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Learn the extra check on big transfers. Block advertising texts.",
          "sub": "Hiểu bước xác thực khi chuyển khoản lớn, đăng ký chặn tin nhắn quảng cáo.",
          "keys": [
            "chặn tin nhắn quảng cáo"
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
            "fit": "G",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "H",
            "ms": 900
          },
          {
            "at": "a1",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
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
            "text": "⑥ Thứ Bảy chiều · Bố gọi",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:afternoon"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "left": {
                "label": "Cách A: trách cả tiếng",
                "ok": false
              },
              "right": {
                "label": "Cách B: hỏi, khen, hẹn",
                "ok": true
              }
            },
            "at": "l1:bus",
            "caption": "Thứ Bảy · 16:00 · trên xe",
            "icon": "bus-stop"
          },
          {
            "id": "h-a",
            "t": "text",
            "text": "A: trách, tự cài máy không nói",
            "x": 3996,
            "y": 1260,
            "size": 44,
            "at": "a1:times",
            "color": "coral"
          },
          {
            "id": "h-a2",
            "t": "text",
            "text": "→ lần sau bố giấu",
            "x": 4036,
            "y": 1335,
            "size": 44,
            "at": "a2:mention",
            "color": "muted"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "B: hỏi · khen · hẹn cuối tuần",
            "x": 3996,
            "y": 1430,
            "size": 44,
            "at": "b1:say",
            "color": "accent"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Khen việc hỏi lại con",
            "x": 3996,
            "y": 1560,
            "size": 54,
            "at": "l4:Praise",
            "hl": [
              {
                "text": "Khen",
                "at": "l4:Praise"
              }
            ]
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "→ lần sau gọi sớm hơn",
            "x": 4036,
            "y": 1640,
            "size": 50,
            "at": "l4:sooner",
            "color": "accent",
            "hl": [
              {
                "text": "sớm hơn",
                "at": "l4:sooner"
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
          "say": "Stop six, Saturday afternoon. Thảo is on the bus back when Dad calls.",
          "sub": "Chặng sáu, chiều thứ Bảy. Thảo đang trên xe về thành phố thì bố gọi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "A stranger just called me. I hung up and called you, like we agreed.",
          "sub": "Vừa có người lạ gọi bố. Bố cúp máy, gọi con như đã hẹn.",
          "face": "neutral"
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "thao",
          "say": "Dad! How many times have I told you? I'll redo your phone myself.",
          "sub": "Bố! Con dặn bao nhiêu lần rồi? Để con tự cài lại máy bố.",
          "phase": "a",
          "face": "stern"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "binh",
          "say": "Fine... Next time I won't even mention it.",
          "sub": "Thôi... Lần sau bố chẳng kể nữa.",
          "phase": "a",
          "face": "sad"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "thao",
          "say": "What did he say, Dad? And well done for calling me first!",
          "sub": "Người đó nói gì hả bố? Bố gọi hỏi con trước là giỏi lắm!",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "thao",
          "say": "Next weekend, let's check your phone together.",
          "sub": "Cuối tuần sau, hai bố con cùng xem lại điện thoại nhé.",
          "phase": "b",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Praise them for checking, and next time they'll call you sooner.",
          "sub": "Khen việc cha mẹ đã hỏi lại con, lần sau cha mẹ sẽ gọi cho con sớm hơn.",
          "keys": [
            "gọi cho con sớm hơn"
          ]
        }
      ],
      "ref": "p17,p18"
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
            "text": "⑦ Chủ nhật · Chặng 5: lỡ chuyển",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "think",
                  "face": "worried"
                }
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
            "at": "l1:Dũng",
            "caption": "Chủ nhật · hai chị em",
            "icon": "money-with-wings"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l3:Stop",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1242,
            "size": 56,
            "at": "l3:Stop+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Dừng chuyển thêm",
            "x": 6029,
            "y": 1252,
            "size": 46,
            "at": "l3:Stop+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1345,
            "w": 44,
            "h": 44,
            "at": "l3:bank",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1327,
            "size": 56,
            "at": "l3:bank+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Gọi ngay ngân hàng",
            "x": 6029,
            "y": 1337,
            "size": 46,
            "at": "l3:bank+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1430,
            "w": 44,
            "h": 44,
            "at": "l3:evidence",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1412,
            "size": 56,
            "at": "l3:evidence+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Giữ bằng chứng",
            "x": 6029,
            "y": 1422,
            "size": 46,
            "at": "l3:evidence+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1515,
            "w": 44,
            "h": 44,
            "at": "l3:police",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1497,
            "size": 56,
            "at": "l3:police+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Trình báo công an",
            "x": 6029,
            "y": 1507,
            "size": 46,
            "at": "l3:police+200"
          },
          {
            "id": "i-c",
            "t": "text",
            "text": "An ủi, không trách",
            "x": 5964,
            "y": 1610,
            "size": 58,
            "at": "l4:comfort",
            "color": "accent",
            "hl": [
              {
                "text": "không trách",
                "at": "l4:blame"
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
          "say": "Stop seven, Sunday. Dũng asks the question nobody likes.",
          "sub": "Chặng bảy, Chủ nhật. Dũng hỏi câu chẳng ai muốn hỏi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "And if Mum or Dad already sent the money?",
          "sub": "Thế nếu bố mẹ lỡ chuyển tiền rồi thì sao?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Stage five: stop more transfers, call the bank at once, keep the evidence, report to the police.",
          "sub": "Chặng năm. Dừng chuyển thêm, gọi ngay cho ngân hàng, giữ lại bằng chứng, trình báo công an.",
          "keys": [
            "gọi ngay cho ngân hàng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And comfort them. Don't blame.",
          "sub": "Và an ủi, đừng trách.",
          "keys": [
            "đừng trách"
          ]
        }
      ],
      "ref": "p13"
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
          }
        ],
        "items": [
          {
            "id": "i-s1",
            "t": "text",
            "text": "Thủ tục: chuỗi “Đã bị lừa”",
            "x": 5964,
            "y": 1710,
            "size": 40,
            "at": "l1:series",
            "color": "muted"
          },
          {
            "id": "i-y",
            "t": "text",
            "text": "Đầu tư, tiền ảo → chuỗi 40+",
            "x": 5964,
            "y": 1780,
            "size": 40,
            "at": "l3:Investment",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A later lesson covers this, and the full procedures are in the series on what to do after a scam.",
          "sub": "Bài “Cha mẹ lỡ bị lừa chuyển tiền” sẽ đi kỹ; thủ tục chi tiết ở chuỗi “Đã bị lừa thì làm gì”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This series shows only warning signs, not how scammers build their stories.",
          "sub": "Chuỗi này chỉ mô tả dấu hiệu chung để nhận ra kẻ gian, không đi sâu vào cách chúng dựng kịch bản."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Investment offers, crypto, fake trading floors? See the investment scam series.",
          "sub": "Lời mời đầu tư, tiền ảo, sàn giả? Đọc chuỗi về lừa đảo đầu tư cho người 40+."
        }
      ],
      "ref": "p13,p19"
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
            "at": "l4",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Thứ Hai tuần sau · 20:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Same"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "face": "happy"
                },
                {
                  "id": "tu",
                  "side": "right",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "tu",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
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
            "at": "l1:call",
            "caption": "Thứ Hai tuần sau · 20:00",
            "icon": "mobile-phone"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "“Ngân hàng” gọi → cúp máy",
            "x": 7932,
            "y": 1260,
            "size": 46,
            "at": "l2:hung",
            "hl": [
              {
                "text": "cúp máy",
                "at": "l2:hung"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "→ gọi Thảo trước ✓",
            "x": 7972,
            "y": 1340,
            "size": 50,
            "at": "l2:called",
            "color": "accent"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Trẻ cậy cha, già cậy con”",
            "x": 7932,
            "y": 1450,
            "size": 54,
            "at": "l4:young",
            "color": "accent",
            "hl": [
              {
                "text": "già cậy con",
                "at": "l4:old"
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
          "say": "Next Monday, eight p.m. Same video call, same mum.",
          "sub": "Thứ Hai tuần sau, tám giờ tối. Vẫn cuộc gọi ấy, vẫn mẹ ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "tu",
          "say": "Someone said he was from the bank today. I hung up and called you first.",
          "sub": "Hôm nay có người xưng ngân hàng. Mẹ cúp máy, gọi con trước rồi đây.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Well done, Mum! The bank never asks for codes anyway.",
          "sub": "Mẹ giỏi quá! Đằng nào ngân hàng cũng không bao giờ đòi mã.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The young lean on their parents, the old on their children. This week, both ways.",
          "sub": "“Trẻ cậy cha, già cậy con.” Tuần này, cả nhà cậy nhau cả hai chiều.",
          "keys": [
            "cậy nhau cả hai chiều"
          ]
        }
      ],
      "ref": "outro,p10"
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
            "at": "l1:targeted",
            "fit": "A",
            "zoom": 0.8
          },
          {
            "at": "l2:Five",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l3:Tonight",
            "fit": "J",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 420,
            "y": 400,
            "at": "l1:targeted"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 3568,
            "y": 530,
            "at": "l2:Five"
          },
          {
            "id": "j-do",
            "t": "text",
            "text": "Tối nay: gọi, kể 1 vụ",
            "x": 7932,
            "y": 1570,
            "size": 50,
            "at": "l3:Tonight",
            "hl": [
              {
                "text": "kể 1 vụ",
                "at": "l3:case"
              }
            ]
          },
          {
            "id": "j-do2",
            "t": "text",
            "text": "→ hỏi: có cuộc gọi lạ chưa?",
            "x": 7972,
            "y": 1650,
            "size": 44,
            "at": "l3:strange"
          },
          {
            "id": "j-nx",
            "t": "text",
            "text": "Bài tiếp: các kịch bản lừa",
            "x": 7932,
            "y": 1730,
            "size": 44,
            "at": "l4:Next",
            "color": "accent"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi học; quy định có thể thay đổi — khi cần áp dụng, kiểm lại với cơ quan/chuyên gia. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1810,
            "size": 28,
            "at": "l4:end",
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
          "say": "So: older people are targeted most, and one call can take a lifetime of savings.",
          "sub": "Tóm lại: người cao tuổi là nhóm bị nhắm tới nhiều, và một cuộc gọi có thể lấy đi tiền dành dụm cả đời.",
          "keys": [
            "bị nhắm tới nhiều"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Five stages: spot the scams, call back, what nobody may ask, set up the phone, and what to do if tricked.",
          "sub": "Năm chặng: nhận ra kịch bản, gọi lại cho con, biết điều không ai được đòi, cài điện thoại, và biết làm gì nếu lỡ bị lừa.",
          "keys": [
            "Năm chặng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Tonight, call your parents, tell one case from the news, and ask about strange calls.",
          "sub": "Việc làm ngay: tối nay gọi bố mẹ, kể một vụ trên báo, hỏi bố mẹ đã từng nhận cuộc gọi lạ nào chưa.",
          "keys": [
            "tối nay gọi bố mẹ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Next: which scam stories most often target older people.",
          "sub": "Bài tiếp: Kịch bản lừa nào hay nhắm vào người cao tuổi?"
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
        "q": "Your mother hears that her grandson is in hospital, what should she do first?",
        "options": [
          "Ask the caller to send a photo and then pay whatever they say",
          "Send the hospital fee at once because every minute really matters",
          "Keep calm and call a family member to check before paying anything"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "ambulance",
        "why": "Bài nhắc việc đầu tiên khi nhận cuộc gọi đáng ngờ là giữ bình tĩnh. Mẹ nên liên hệ người thân để kiểm tra trước khi làm gì."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Your mother hears that her grandson is in hospital, what should she do first?",
          "sub": "Mẹ bạn nghe tin cháu đang nằm viện, việc đầu tiên mẹ nên làm là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Keep calm and call a family member to check before paying anything.",
          "sub": "Giữ bình tĩnh, gọi người thân kiểm tra trước khi trả bất cứ khoản nào."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Panic is the scammer's best friend. A call to the family is yours.",
          "sub": "Nỗi hoảng là bạn thân của kẻ gian. Một cuộc gọi về nhà là bạn thân của bạn."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[5]"
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Tối nay gọi bố mẹ. Còn bốn mươi câu hỏi",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Call your parents tonight. Then try the forty questions below.",
          "sub": "Tối nay gọi cho bố mẹ nhé. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân (#136) + biến thể #144. HOOK-21 (đoán: nhóm nào bị nhắm nhiều nhất → 15/24 người cao tuổi). Dòng thời gian: MỘT TUẦN của Thảo (tối thứ Hai 20:00 mẹ kể “anh công an” → thứ Ba đọc khuyến cáo → thứ Tư 15 tỷ, Dũng “mẹ nghe giọng là biết” → thứ Năm vai diễn + “Khoan đã!” bố cẩn thận → thứ Sáu quy tắc gọi lại, nói sao cho mẹ nghe → thứ Bảy về quê chặng 3–4 → chiều thứ Bảy bố gọi, hai cách đáp → Chủ nhật chặng 5 → thứ Hai sau 20:00 khép vòng). Đổi tên: “bạn”/chị Thu → Thảo; ông Phúc → Bác Bình; mẹ → Bà Tư; em trai → Dũng. Tục ngữ: “Trẻ cậy cha, già cậy con”. BRK-03 (15 tỷ), BRK-06 (các vai), BRK-04 (trước–sau p15). Câu đố questions[5]. Lưu ý chung cuối bài (#133).",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
