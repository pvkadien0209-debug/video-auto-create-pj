// migration-scams-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "migration-scams-overview--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "emigrants-avoiding-migration-scams",
    "slug": "migration-scams-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Vì sao người muốn đi nước ngoài hay bị lừa, và bị lừa thế nào?",
    "series": "Không mất tiền vì lừa đảo xuất ngoại — cho người Việt nhận ra dịch vụ lừa đảo việc làm, định cư"
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
      "id": "o00",
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
            "text": "Ứng trước tiền vé?",
            "x": 60,
            "y": 80,
            "size": 84,
            "at": "l1:ticket",
            "color": "accent",
            "hl": [
              {
                "text": "tiền vé",
                "at": "l1:ticket"
              }
            ]
          },
          {
            "id": "a-bA",
            "t": "box",
            "x": 60,
            "y": 220,
            "w": 700,
            "h": 100,
            "at": "l2:kind",
            "stroke": 5
          },
          {
            "id": "a-A",
            "t": "text",
            "text": "A. Người tốt bụng",
            "x": 90,
            "y": 238,
            "size": 56,
            "at": "l2:kind+200"
          },
          {
            "id": "a-bB",
            "t": "box",
            "x": 60,
            "y": 350,
            "w": 700,
            "h": 100,
            "at": "l2:trap",
            "stroke": 5
          },
          {
            "id": "a-B",
            "t": "text",
            "text": "B. Một cái bẫy",
            "x": 90,
            "y": 368,
            "size": 56,
            "at": "l2:trap+200"
          },
          {
            "id": "a-Ax",
            "t": "strike",
            "over": "a-A",
            "at": "l3:trust"
          },
          {
            "id": "a-Br",
            "t": "ring",
            "around": [
              "a-B"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:trust+300"
          },
          {
            "id": "a-usd",
            "t": "text",
            "text": "Tiền chuộc: 3.000 – 30.000 USD",
            "x": 60,
            "y": 480,
            "size": 46,
            "at": "l4:ransom",
            "color": "coral",
            "hl": [
              {
                "text": "3.000 – 30.000 USD",
                "at": "l4:thirty"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: Công an TP Hải Phòng, 2022 (Tạp chí Luật sư Việt Nam)",
            "x": 60,
            "y": 735,
            "size": 26,
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
          "say": "Quick guess. A recruiter offers to pay your plane ticket to work abroad.",
          "sub": "Đoán nhanh nhé. Bên tuyển ứng trước tiền vé cho bạn đi làm nước ngoài.",
          "keys": [
            "ứng trước tiền vé"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A: a kind recruiter. B: a trap.",
          "sub": "A: người tốt bụng. B: một cái bẫy."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Most people pick A. But Hai Phong police warned: paying travel first is a way to win your trust.",
          "sub": "Phần đông chọn A. Nhưng Công an Hải Phòng cảnh báo: ứng trước chi phí đi lại là một cách tạo lòng tin.",
          "keys": [
            "tạo lòng tin"
          ],
          "wait": 1500
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Some lured to Cambodia were held, then forced to call home for ransom: three to thirty thousand dollars.",
          "sub": "Có người bị dụ sang Campuchia, bị giữ lại, bị ép gọi về nhà đòi tiền chuộc 3.000–30.000 USD.",
          "keys": [
            "tiền chuộc"
          ]
        }
      ],
      "ref": "p3"
    },
    {
      "id": "o01",
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
            "module": "SCENE-02",
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "home",
              "label": "Tin nhắn tối thứ Sáu",
              "actor": {
                "id": "dung",
                "side": "left"
              },
              "contact": {
                "name": "Người tuyển",
                "illus": "factory"
              },
              "messages": [
                {
                  "from": "them",
                  "text": "Tuyển gấp đi làm nhà máy ở nước ngoài. Bên anh ứng trước tiền vé!",
                  "at": "l3"
                },
                {
                  "from": "them",
                  "text": "Chuyển cọc giữ suất trong tối nay nhé em.",
                  "at": "l4"
                }
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Sáu · 21:00",
            "icon": "mobile-phone"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Mật ngọt thì chết ruồi”",
            "x": 60,
            "y": 590,
            "size": 54,
            "at": "l6:honey",
            "color": "accent",
            "hl": [
              {
                "text": "chết ruồi",
                "at": "l6:fly"
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
          "say": "A welder from a central province, dreaming of rebuilding his mum's house.",
          "sub": "Thợ hàn ở một xã miền Trung, mơ xây lại căn nhà cho mẹ.",
          "keys": [
            "xây lại căn nhà cho mẹ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Friday, nine p.m. Urgent factory jobs abroad, ticket paid in advance!",
          "sub": "Tối thứ Sáu, chín giờ: “Tuyển gấp đi làm nhà máy ở nước ngoài. Bên anh ứng trước tiền vé!”"
        },
        {
          "id": "l4",
          "lang": "en",
          "say": "Just send a deposit tonight to hold your place.",
          "sub": "“Chuyển cọc giữ suất trong tối nay nhé em.”"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "They even pay my ticket? What kind people!",
          "sub": "Còn ứng cả tiền vé cho mình? Người tốt quá!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Kind, or a trap? Our elders say: sweet honey kills the fly.",
          "sub": "Người tốt hay cái bẫy? Ông bà dặn: “Mật ngọt thì chết ruồi.”",
          "keys": [
            "Mật ngọt thì chết ruồi"
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
      "ref": "intro,p11"
    },
    {
      "id": "o02",
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
            "text": "Vì sao hay bị lừa?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:abroad",
            "hl": [
              {
                "text": "hay bị lừa",
                "at": "l1:often"
              }
            ]
          },
          {
            "id": "b-wish",
            "t": "text",
            "text": "Mong muốn đi: chính đáng",
            "x": 2028,
            "y": 160,
            "size": 54,
            "at": "l2:fair",
            "hl": [
              {
                "text": "chính đáng",
                "at": "l2:fair"
              }
            ]
          },
          {
            "id": "b-w2",
            "t": "text",
            "text": "lương, con cái, đời mới",
            "x": 2028,
            "y": 240,
            "size": 38,
            "at": "l2:pay",
            "color": "muted"
          },
          {
            "id": "b-aim",
            "t": "text",
            "text": "→ chính là đích ngắm",
            "x": 2028,
            "y": 310,
            "size": 54,
            "at": "l3:aim",
            "color": "coral",
            "hl": [
              {
                "text": "đích ngắm",
                "at": "l3:aim"
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
          "say": "So why are people who want to go abroad scammed so often? And how?",
          "sub": "Vậy vì sao người muốn đi nước ngoài hay bị lừa? Và bị lừa thế nào?",
          "keys": [
            "hay bị lừa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "First, the wish is fair: better pay, a future for the kids, a new life.",
          "sub": "Trước hết, mong muốn ấy chính đáng: lương cao hơn, cơ hội cho con cái, một cuộc sống mới.",
          "keys": [
            "chính đáng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But that very wish is what scammers aim at.",
          "sub": "Nhưng chính mong muốn ấy là thứ kẻ gian nhắm vào.",
          "keys": [
            "kẻ gian nhắm vào"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "o03",
      "module": "BRK-03",
      "data": {
        "value": 53159,
        "suffix": " người",
        "label": "lao động đi làm nước ngoài, 5 tháng đầu 2026",
        "illus": "airplane-departure"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Five months of twenty twenty-six.",
          "sub": "Năm tháng đầu năm 2026."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Fifty-three thousand, one hundred fifty-nine workers went abroad.",
          "sub": "53.159 lao động đi làm việc ở nước ngoài."
        }
      ],
      "ref": "p1"
    },
    {
      "id": "o04",
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
            "id": "b-n",
            "t": "text",
            "text": "53.159 người · 5 tháng",
            "x": 2868,
            "y": 160,
            "size": 60,
            "at": "l1",
            "color": "accent"
          },
          {
            "id": "b-pct",
            "t": "text",
            "text": "= 47,5% kế hoạch 112.000",
            "x": 2868,
            "y": 245,
            "size": 48,
            "at": "l1:percent",
            "hl": [
              {
                "text": "47,5%",
                "at": "l1:percent"
              }
            ]
          },
          {
            "id": "b-kh",
            "t": "text",
            "text": "→ kẻ gian sẵn “khách”",
            "x": 2868,
            "y": 330,
            "size": 52,
            "at": "l3:customers",
            "color": "coral",
            "hl": [
              {
                "text": "sẵn “khách”",
                "at": "l3:customers"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Bộ Nội vụ, theo VnEconomy 12/6/2026",
            "x": 2868,
            "y": 410,
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
          "say": "That's forty-seven point five percent of the year's plan: one hundred twelve thousand.",
          "sub": "Bằng 47,5% kế hoạch cả năm là 112.000 người.",
          "keys": [
            "47,5%"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "When so many want to go, scammers have plenty of customers waiting.",
          "sub": "Khi nhiều người cùng muốn đi, kẻ gian có sẵn rất nhiều “khách”.",
          "keys": [
            "rất nhiều “khách”"
          ]
        }
      ],
      "ref": "p1"
    },
    {
      "id": "o05",
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
            "id": "b-l1",
            "t": "text",
            "text": "✗ Không giấy phép vẫn tuyển",
            "x": 2028,
            "y": 400,
            "size": 42,
            "at": "l1:unlicensed"
          },
          {
            "id": "b-l2",
            "t": "text",
            "text": "✗ Mượn, thuê giấy phép · mạo danh",
            "x": 2028,
            "y": 460,
            "size": 42,
            "at": "l1:lent"
          },
          {
            "id": "b-l3",
            "t": "text",
            "text": "Mạng xã hội, web giả · tinh vi",
            "x": 2028,
            "y": 520,
            "size": 42,
            "at": "l2:social",
            "color": "muted"
          },
          {
            "id": "b-smart",
            "t": "text",
            "text": "Bị lừa ≠ thiếu hiểu biết",
            "x": 2028,
            "y": 600,
            "size": 58,
            "at": "l3:ignorant",
            "color": "accent",
            "hl": [
              {
                "text": "≠ thiếu hiểu biết",
                "at": "l3:ignorant"
              }
            ]
          },
          {
            "id": "b-fast",
            "t": "text",
            "text": "…chỉ quá mong lối đi nhanh",
            "x": 2868,
            "y": 640,
            "size": 48,
            "at": "l3:quick",
            "color": "coral",
            "hl": [
              {
                "text": "lối đi nhanh",
                "at": "l3:quick way"
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
          "say": "The ministry also reports unlicensed recruiters, licences lent or rented, and fake licensed firms.",
          "sub": "Bộ Nội vụ còn nêu: nơi không giấy phép vẫn tuyển, nơi cho mượn, cho thuê giấy phép, kẻ mạo danh doanh nghiệp được cấp phép."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It spreads through social media and fake websites, slicker every year.",
          "sub": "Thủ đoạn lan qua mạng xã hội và trang web giả, ngày càng tinh vi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And victims usually aren't ignorant. They just want a quick way too badly.",
          "sub": "Người bị lừa thường không thiếu hiểu biết. Họ chỉ quá mong một lối đi nhanh.",
          "keys": [
            "quá mong một lối đi nhanh"
          ]
        }
      ],
      "ref": "p2"
    },
    {
      "id": "o06",
      "module": "BRK-08",
      "data": {
        "title": "Năm chặng tự kiểm tra",
        "points": [
          {
            "label": "Dấu hiệu",
            "sub": "Lời mời việc",
            "illus": "warning"
          },
          {
            "label": "“Bao đậu”",
            "sub": "Lời hứa visa",
            "illus": "passport-control"
          },
          {
            "label": "Tra cứu",
            "sub": "Kênh chính thức",
            "illus": "magnifying-glass-tilted-left"
          },
          {
            "label": "Cái bẫy",
            "sub": "Mua bán người",
            "illus": "chains"
          },
          {
            "label": "Gọi ai",
            "sub": "Khi gặp nạn",
            "illus": "telephone-receiver"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Five stops in this series: signs, guaranteed visas, official checks...",
          "sub": "Chuỗi có năm chặng: dấu hiệu, lời hứa “bao đậu”, kênh chính thức..."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "...trafficking risks, and who to call.",
          "sub": "...nguy cơ mua bán người, và gọi ai."
        }
      ],
      "ref": "intro,outro"
    },
    {
      "id": "o07",
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
            "text": "① Thứ Bảy · Dấu hiệu",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:stop one"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "props": [
                "hot-beverage",
                "mobile-phone"
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
                  "shot": "E-SHOT-06",
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
            "at": "l1:stall",
            "caption": "Sáng thứ Bảy · quán nước của mẹ",
            "icon": "hot-beverage"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one: Saturday morning, at his mum's tea stall.",
          "sub": "Chặng một: sáng thứ Bảy, ở quán nước của mẹ Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Bác Bình, the neighbour who once worked abroad on a proper contract.",
          "sub": "Còn đây là Bác Bình, hàng xóm, ngày trước từng đi làm nước ngoài theo hợp đồng đàng hoàng.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Look, Bác! Factory job, ticket paid, deposit tonight. Shall I go?",
          "sub": "Bác xem này! Việc nhà máy, ứng tiền vé, cọc tối nay. Cháu đi nhé?",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Take it slow. Let's read it again first.",
          "sub": "Từ từ, mình xem lại đã.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Bác Bình is right. Scam offers share a few signs.",
          "sub": "Bác nói đúng. Lời mời lừa đảo thường có vài điểm chung."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "ref": "p5"
    },
    {
      "id": "o08",
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
            "id": "c-k-c0",
            "t": "box",
            "x": 3996,
            "y": 170,
            "w": 44,
            "h": 44,
            "at": "l1:fees",
            "stroke": 5
          },
          {
            "id": "c-k-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 152,
            "size": 56,
            "at": "l1:fees+600",
            "color": "accent"
          },
          {
            "id": "c-k-l0",
            "t": "text",
            "text": "Đòi phí trước khi nhận việc",
            "x": 4066,
            "y": 162,
            "size": 42,
            "at": "l1:fees+200"
          },
          {
            "id": "c-k-c1",
            "t": "box",
            "x": 3996,
            "y": 242,
            "w": 44,
            "h": 44,
            "at": "l2:vague",
            "stroke": 5
          },
          {
            "id": "c-k-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 224,
            "size": 56,
            "at": "l2:vague+600",
            "color": "accent"
          },
          {
            "id": "c-k-l1",
            "t": "text",
            "text": "Việc, công ty mơ hồ",
            "x": 4066,
            "y": 234,
            "size": 42,
            "at": "l2:vague+200"
          },
          {
            "id": "c-k-c2",
            "t": "box",
            "x": 3996,
            "y": 314,
            "w": 44,
            "h": 44,
            "at": "l2:too high",
            "stroke": 5
          },
          {
            "id": "c-k-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 296,
            "size": 56,
            "at": "l2:too high+600",
            "color": "accent"
          },
          {
            "id": "c-k-l2",
            "t": "text",
            "text": "Lương quá cao so yêu cầu",
            "x": 4066,
            "y": 306,
            "size": 42,
            "at": "l2:too high+200"
          },
          {
            "id": "c-k-c3",
            "t": "box",
            "x": 3996,
            "y": 386,
            "w": 44,
            "h": 44,
            "at": "l3:same day",
            "stroke": 5
          },
          {
            "id": "c-k-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 368,
            "size": 56,
            "at": "l3:same day+600",
            "color": "accent"
          },
          {
            "id": "c-k-l3",
            "t": "text",
            "text": "Ép ký ngay trong ngày",
            "x": 4066,
            "y": 378,
            "size": 42,
            "at": "l3:same day+200"
          },
          {
            "id": "c-ep",
            "t": "text",
            "text": "“Cọc tối nay” = ép",
            "x": 3996,
            "y": 470,
            "size": 54,
            "at": "l3:pressure",
            "color": "coral",
            "hl": [
              {
                "text": "= ép",
                "at": "l3:same day"
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
          "say": "Fees before the job: a file fee, a recruitment fee, a training fee.",
          "sub": "Đòi đóng phí trước khi nhận việc: phí hồ sơ, phí tuyển dụng, phí đào tạo.",
          "keys": [
            "phí trước khi nhận việc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A vague job and a vague company. Pay far too high for what's required.",
          "sub": "Công việc và thông tin công ty mơ hồ. Lương, phúc lợi quá cao so với yêu cầu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And pressure to sign the contract the same day.",
          "sub": "Và ép ký hợp đồng ngay trong ngày.",
          "keys": [
            "ngay trong ngày"
          ]
        }
      ],
      "ref": "p5"
    },
    {
      "id": "o09",
      "module": "BRK-06",
      "data": {
        "title": "Thêm dấu hiệu “việc nhẹ lương cao”",
        "items": [
          {
            "illus": "graduation-cap",
            "text": "Không cần bằng cấp"
          },
          {
            "illus": "page-facing-up",
            "text": "Không hợp đồng"
          },
          {
            "illus": "office-building",
            "text": "Không ai cấp phép"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "No degree needed. No contract. No licensed company behind it.",
          "sub": "Không cần bằng cấp. Không có hợp đồng. Không doanh nghiệp được cấp phép đứng ra."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Signs the foreign ministry added in twenty twenty-five.",
          "sub": "Dấu hiệu Bộ Ngoại giao nêu thêm năm 2025."
        }
      ],
      "ref": "p5"
    },
    {
      "id": "o10",
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
            "id": "c-25",
            "t": "text",
            "text": "25 kịch bản · 5 nhóm",
            "x": 3996,
            "y": 560,
            "size": 50,
            "at": "l1:twenty-five",
            "hl": [
              {
                "text": "5 nhóm",
                "at": "l1:five groups"
              }
            ]
          },
          {
            "id": "c-sm",
            "t": "text",
            "text": "Rút nhỏ → dụ nạp lớn",
            "x": 3996,
            "y": 640,
            "size": 50,
            "at": "l2:small",
            "color": "coral",
            "hl": [
              {
                "text": "dụ nạp lớn",
                "at": "l2:big"
              }
            ]
          },
          {
            "id": "c-rule",
            "t": "text",
            "text": "Càng dễ, nhanh, nhiều tiền → dừng",
            "x": 4816,
            "y": 680,
            "size": 44,
            "at": "l3:easier",
            "color": "accent",
            "hl": [
              {
                "text": "dừng",
                "at": "l3:stop"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Cổng TTĐT Hà Tĩnh 2025; Bộ Công an 9/2026",
            "x": 3996,
            "y": 730,
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
          "say": "The police list twenty-five online scam scripts, in five groups.",
          "sub": "Tháng 9/2026, Bộ Công an cảnh báo 25 kịch bản lừa đảo trên mạng, chia thành năm nhóm.",
          "keys": [
            "25 kịch bản"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One is fake jobs: let you withdraw small sums first, then lure a big deposit.",
          "sub": "Một nhóm là tuyển dụng: cho rút tiền nhỏ lúc đầu để tạo tin, rồi dụ nạp tiền lớn.",
          "keys": [
            "dụ nạp tiền lớn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The easier, faster and richer an offer is for what it asks, the more you stop and check.",
          "sub": "Lời mời càng dễ, càng nhanh, càng nhiều tiền so với yêu cầu thì càng cần dừng lại kiểm tra.",
          "keys": [
            "dừng lại kiểm tra"
          ]
        }
      ],
      "ref": "p6,p7"
    },
    {
      "id": "o11",
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
            "at": "l5",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Chủ nhật · “Bao đậu visa”",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:stop two"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "home",
              "label": "Quảng cáo trên mạng",
              "actor": {
                "id": "lan",
                "side": "left"
              },
              "contact": {
                "name": "Dịch vụ visa",
                "illus": "passport-control"
              },
              "messages": [
                {
                  "from": "them",
                  "text": "Bao đậu visa! 100% có visa, không cần phỏng vấn.",
                  "at": "l2"
                },
                {
                  "from": "them",
                  "text": "Em gửi hộ chiếu bản gốc, ký giấy, chuyển khoản trọn gói nhé.",
                  "at": "l3"
                }
              ]
            },
            "at": "l1:Lan",
            "caption": "Chủ nhật · Lan lướt mạng",
            "icon": "passport-control"
          },
          {
            "id": "d-100",
            "t": "text",
            "text": "“100%” → rồi đòi:",
            "x": 5964,
            "y": 170,
            "size": 52,
            "at": "l5:warns"
          },
          {
            "id": "d-give",
            "t": "text",
            "text": "hộ chiếu · chữ ký · tiền lớn",
            "x": 5964,
            "y": 250,
            "size": 48,
            "at": "l5:passports",
            "color": "coral",
            "hl": [
              {
                "text": "hộ chiếu",
                "at": "l5:passports"
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
          "say": "Stop two: Sunday. Dũng's sister Lan, a tailor, wants to go too. And fast.",
          "sub": "Chặng hai: Chủ nhật. Lan, em gái Dũng, thợ may, cũng muốn đi. Mà phải nhanh.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "An ad: guaranteed visa, one hundred percent, no interview!",
          "sub": "Quảng cáo: “Bao đậu visa! 100% có visa, không cần phỏng vấn.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Send your original passport, sign here, transfer the full package.",
          "sub": "“Em gửi hộ chiếu bản gốc, ký giấy, chuyển khoản trọn gói nhé.”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "One hundred percent? Then I'm going too!",
          "sub": "Một trăm phần trăm? Vậy em đi luôn!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Vietnam Plus warns: next come passports, signatures and big transfers.",
          "sub": "Vietnam+ cảnh báo: kẻ gian quảng cáo đúng những câu này, rồi đòi giao hộ chiếu, ký giấy, chuyển khoản lớn.",
          "keys": [
            "giao hộ chiếu"
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
      "ref": "p8"
    },
    {
      "id": "o12",
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
            "at": "l4",
            "fit": [
              "d-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-740",
            "t": "text",
            "text": "10 người · hơn 740 triệu",
            "x": 5964,
            "y": 360,
            "size": 56,
            "at": "l1:ten",
            "color": "coral",
            "hl": [
              {
                "text": "hơn 740 triệu",
                "at": "l1:seven hundred"
              }
            ]
          },
          {
            "id": "d-ca",
            "t": "text",
            "text": "Giấy tờ giả → bị từ chối",
            "x": 5964,
            "y": 450,
            "size": 46,
            "at": "l2:refusal"
          },
          {
            "id": "d-ban",
            "t": "text",
            "text": "+ cấm vào Canada ≥ 5 năm",
            "x": 5964,
            "y": 520,
            "size": 50,
            "at": "l3:five",
            "color": "accent",
            "hl": [
              {
                "text": "≥ 5 năm",
                "at": "l3:five years"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Vietnam+ 9/2026 · Cục An toàn thông tin 2024 · Chính phủ Canada (IRCC)",
            "x": 6784,
            "y": 725,
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
          "say": "In twenty twenty-four, ten people lost over seven hundred forty million dong in one wave.",
          "sub": "Năm 2024, Cục An toàn thông tin ghi nhận 10 người bị chiếm đoạt hơn 740 triệu đồng chỉ trong một đợt.",
          "keys": [
            "hơn 740 triệu đồng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Worse, Canada says: false papers mean refusal, even if your agent sent them.",
          "sub": "Tệ hơn, Chính phủ Canada nêu: giấy tờ giả thì hồ sơ bị từ chối, kể cả khi người đại diện gửi giúp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And possibly a ban of at least five years.",
          "sub": "Và có thể bị cấm vào Canada ít nhất 5 năm.",
          "keys": [
            "ít nhất 5 năm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "So nobody can really guarantee a visa?",
          "sub": "Vậy không ai bao đậu được thật à?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Nobody can. Lesson three explains why.",
          "sub": "Không ai cả. Bài thứ ba sẽ giải thích vì sao."
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "o13",
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
            "text": "③ Thứ Hai · Kênh chính thức",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:stop three"
          },
          {
            "id": "e-call",
            "t": "text",
            "text": "“Suất cuối, tối nay!”",
            "x": 7932,
            "y": 160,
            "size": 54,
            "at": "l1:last",
            "color": "coral"
          },
          {
            "id": "e-lic",
            "t": "text",
            "text": "Đưa người đi: phải có giấy phép",
            "x": 7932,
            "y": 260,
            "size": 46,
            "at": "l3:licence",
            "hl": [
              {
                "text": "phải có giấy phép",
                "at": "l3:licence"
              }
            ]
          },
          {
            "id": "e-list",
            "t": "text",
            "text": "Tra danh sách trên trang Cục",
            "x": 7932,
            "y": 340,
            "size": 40,
            "at": "l4:list",
            "color": "accent"
          },
          {
            "id": "e-cap",
            "t": "text",
            "text": "Trần phí: ≤ 1 tháng lương / 12 tháng",
            "x": 7932,
            "y": 430,
            "size": 50,
            "at": "l5:caps",
            "hl": [
              {
                "text": "≤ 1 tháng lương",
                "at": "l5:one month"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: LuatVietnam (13/4/2022) · Luật 69/2020/QH14 (Tạp chí Luật sư VN)",
            "x": 7932,
            "y": 510,
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
          "say": "Stop three: Monday. The recruiter calls again. Last place, tonight!",
          "sub": "Chặng ba: thứ Hai. Người tuyển gọi lại: “Suất cuối, tối nay!”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Before any money moves, check the official channels.",
          "sub": "Trước khi đưa tiền, tra kênh chính thức.",
          "keys": [
            "tra kênh chính thức"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In Vietnam, a company sending workers abroad must hold a licence.",
          "sub": "Ở Việt Nam, doanh nghiệp đưa người đi làm việc ở nước ngoài phải có giấy phép.",
          "keys": [
            "phải có giấy phép"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Search the list on the Department of Overseas Labour's website.",
          "sub": "Tra danh sách doanh nghiệp trên trang của Cục Quản lý lao động ngoài nước, như LuatVietnam hướng dẫn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And Law sixty-nine caps service fees, for example one month's pay for each twelve months of work.",
          "sub": "Luật 69/2020/QH14 còn đặt trần tiền dịch vụ, ví dụ không quá một tháng lương cho mỗi 12 tháng làm việc.",
          "keys": [
            "không quá một tháng lương"
          ]
        }
      ],
      "ref": "p10"
    },
    {
      "id": "o14",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Thứ Hai · 21:00",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Chuyển cọc ngay vì sợ hết suất",
          "why": "Nhanh đấy, nhưng không biết tiền đi đâu, đang làm việc với ai.",
          "rule": "Suất thật không biến mất sau một ngày tra cứu"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Last place tonight? Okay, sending the deposit now!",
          "sub": "Suất cuối tối nay? Ok, chuyển cọc luôn!",
          "face": "happy",
          "pose": "phone",
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
          "say": "Fast, sure. But where does the money go? Who are you dealing with?",
          "sub": "Nhanh thật. Nhưng tiền đi đâu? Mình đang làm việc với ai?",
          "keys": [
            "tiền đi đâu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Quay lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Send me the full company name and fees in writing. I'll check, then decide.",
          "sub": "Anh gửi em tên đầy đủ công ty, mức phí bằng văn bản. Em tra xong mới quyết ạ.",
          "phase": "redo",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "A day or two slower. But now he knows who he's dealing with.",
          "sub": "Mất một hai ngày. Nhưng anh biết mình đang làm việc với ai.",
          "phase": "redo",
          "keys": [
            "làm việc với ai"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p11"
    },
    {
      "id": "o15",
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
            "id": "e-a",
            "t": "text",
            "text": "Cách A: chuyển ngay",
            "x": 8772,
            "y": 170,
            "size": 50,
            "at": "l1:A",
            "color": "muted"
          },
          {
            "id": "e-ax",
            "t": "strike",
            "over": "e-a",
            "at": "l1:where"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "Cách B: tên → tra → phí giấy",
            "x": 8772,
            "y": 260,
            "size": 48,
            "at": "l2:B",
            "color": "accent"
          },
          {
            "id": "e-real",
            "t": "text",
            "text": "Suất thật không mọc cánh bay",
            "x": 8772,
            "y": 380,
            "size": 48,
            "at": "l3:vanish",
            "hl": [
              {
                "text": "không mọc cánh",
                "at": "l3:vanish"
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
          "say": "Option A: pay at once, and never know where the money went.",
          "sub": "Cách A: chuyển ngay, và không biết tiền đi đâu.",
          "keys": [
            "không biết tiền đi đâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Option B: slower, but clear.",
          "sub": "Cách B: chậm hơn, nhưng rõ ràng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A real place doesn't vanish because you spent one day checking.",
          "sub": "Suất thật không biến mất chỉ vì bạn dành một ngày để tra cứu.",
          "keys": [
            "không biến mất"
          ]
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "o16",
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
            "at": "l3",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Ba · Cái bẫy",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:stop four"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "face": "worried"
                }
              ],
              "props": [
                "newspaper"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Bác",
            "caption": "Tối thứ Ba · Bác Bình ghé chơi",
            "icon": "newspaper"
          },
          {
            "id": "f-free",
            "t": "text",
            "text": "Mất tiền… và mất tự do",
            "x": 60,
            "y": 1260,
            "size": 52,
            "at": "l2:freedom",
            "color": "coral",
            "hl": [
              {
                "text": "mất tự do",
                "at": "l2:freedom"
              }
            ]
          },
          {
            "id": "f-39",
            "t": "text",
            "text": "39 công dân · Myanmar",
            "x": 60,
            "y": 1360,
            "size": 60,
            "at": "l3:thirty-nine",
            "color": "accent"
          },
          {
            "id": "f-39b",
            "t": "text",
            "text": "được đưa về an toàn · 9/4/2025",
            "x": 60,
            "y": 1440,
            "size": 40,
            "at": "l3:home",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four: Tuesday evening. Bác Bình drops by with the news.",
          "sub": "Chặng bốn: tối thứ Ba. Bác Bình ghé chơi, mang theo tin thời sự."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Some people lose more than money, son. They lose their freedom.",
          "sub": "Có người không chỉ mất tiền đâu cháu. Mất cả tự do.",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "On April ninth, twenty twenty-five, the foreign ministry helped bring home thirty-nine citizens held in Myanmar.",
          "sub": "Ngày 9/4/2025, Bộ Ngoại giao cho biết đã phối hợp đưa 39 công dân bị giữ ở Myanmar về nước an toàn.",
          "keys": [
            "39 công dân"
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
      "ref": "p13"
    },
    {
      "id": "o17",
      "module": "BRK-09",
      "data": {
        "kind": "Nguồn",
        "title": "ILO · 11 dấu hiệu cưỡng bức",
        "detail": "Giữ giấy tờ, trói buộc bằng nợ, hạn chế đi lại",
        "illus": "chains",
        "around": [
          "passport-control",
          "money-with-wings"
        ],
        "icon": "book-open"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The ILO lists eleven signs of forced labour.",
          "sub": "ILO nêu 11 dấu hiệu lao động cưỡng bức."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Papers kept, debt bondage, movement limited.",
          "sub": "Giữ giấy tờ, trói buộc bằng nợ, hạn chế đi lại."
        }
      ],
      "ref": "p13"
    },
    {
      "id": "o18",
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
            "zoom": 1.3,
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
            "id": "f-11",
            "t": "text",
            "text": "ILO: 11 dấu hiệu",
            "x": 60,
            "y": 1540,
            "size": 54,
            "at": "l2:eleven",
            "hl": [
              {
                "text": "11 dấu hiệu",
                "at": "l2:eleven"
              }
            ]
          },
          {
            "id": "f-11b",
            "t": "text",
            "text": "giấy tờ · nợ · đi lại",
            "x": 60,
            "y": 1620,
            "size": 40,
            "at": "l2:eleven+400",
            "color": "muted"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Bộ Ngoại giao (Báo Thanh Tra, 9/4/2025) · ILO",
            "x": 60,
            "y": 1820,
            "size": 26,
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
          "who": "dung",
          "say": "So a boss who keeps my passport, just for safety...",
          "sub": "Vậy ông chủ mà “giữ hộ” hộ chiếu của cháu...",
          "face": "worried"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "That's one of those eleven signs, son.",
          "sub": "Là một trong mười một dấu hiệu đấy cháu.",
          "face": "stern"
        }
      ],
      "ref": "p13"
    },
    {
      "id": "o19",
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
            "at": "l3",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Tư · Gọi ai?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:stop five"
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
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "face": "worried"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "props": [
                "mobile-phone",
                "telephone-receiver"
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
            "at": "l1:mum",
            "caption": "Thứ Tư · ở nhà",
            "icon": "telephone-receiver"
          },
          {
            "id": "g-q",
            "t": "text",
            "text": "“Lỡ có chuyện, gọi ai?”",
            "x": 2028,
            "y": 1260,
            "size": 52,
            "at": "l2:call",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five: Wednesday. Dũng sits down with his mum, Cô Hoa, the family's chief worrier.",
          "sub": "Chặng năm: thứ Tư. Dũng ngồi với mẹ, cô Hoa, “tổng lo xa” của cả nhà.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "If something happens over there, who do I even call?",
          "sub": "Lỡ bên đó có chuyện, mẹ biết gọi ai?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three numbers worth saving before anyone packs a bag.",
          "sub": "Ba số đáng lưu trước khi ai đó xếp vali.",
          "keys": [
            "Ba số"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1200
        }
      ],
      "ref": "p14"
    },
    {
      "id": "o20",
      "module": "BRK-11",
      "data": {
        "title": "3 số cần nhớ",
        "items": [
          "Đường dây nóng bảo hộ công dân",
          "Đại sứ quán Việt Nam",
          "Tổng đài 111"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Three: one one one, for trafficking reports. Free, all day.",
          "sub": "Ba: Tổng đài 111 báo tin mua bán người, miễn phí, 24 giờ."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Two: our embassy in that country.",
          "sub": "Hai: đại sứ quán Việt Nam tại nước đó."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "One: the citizen protection hotline.",
          "sub": "Một: đường dây nóng bảo hộ công dân."
        }
      ],
      "ref": "p14"
    },
    {
      "id": "o21",
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
            "at": "l2",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2:end",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-num",
            "t": "text",
            "text": "+84 981 84 84 84",
            "x": 2028,
            "y": 1350,
            "size": 72,
            "at": "l1:Plus",
            "color": "accent",
            "hl": [
              {
                "text": "+84 981 84 84 84",
                "at": "l1:Consular"
              }
            ]
          },
          {
            "id": "g-cls",
            "t": "text",
            "text": "Cục Lãnh sự · Bộ Ngoại giao",
            "x": 2028,
            "y": 1450,
            "size": 42,
            "at": "l1:Consular"
          },
          {
            "id": "g-emb",
            "t": "text",
            "text": "Đại sứ quán VN tại nước đó",
            "x": 2028,
            "y": 1520,
            "size": 42,
            "at": "l1:Consular+500"
          },
          {
            "id": "g-111",
            "t": "text",
            "text": "111 · mua bán người · miễn phí 24h",
            "x": 2028,
            "y": 1590,
            "size": 40,
            "at": "l1:Consular+900"
          },
          {
            "id": "g-save",
            "t": "text",
            "text": "Đã lưu: “Khẩn cấp ở nước ngoài”",
            "x": 2848,
            "y": 1782,
            "size": 44,
            "at": "l2:Saved",
            "color": "accent",
            "hl": [
              {
                "text": "Đã lưu",
                "at": "l2:Saved"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Bộ Ngoại giao · NĐ 162/2025/NĐ-CP (Tổng đài 111)",
            "x": 2028,
            "y": 1815,
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
          "say": "Plus eight four, nine eight one, eight four, eight four, eight four. Run by the Consular Department.",
          "sub": "+84 981 84 84 84, của Cục Lãnh sự, Bộ Ngoại giao.",
          "keys": [
            "Cục Lãnh sự"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Saved. Under 'Emergency abroad'. Right, done, son!",
          "sub": "Lưu rồi. Tên là “Khẩn cấp ở nước ngoài”. Rồi, vậy nha con!",
          "face": "happy",
          "pose": "phone"
        }
      ],
      "ref": "p14"
    },
    {
      "id": "o22",
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
            "text": "⑥ Thứ Năm · Thông tin cũ",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:stop six"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "rolled-up-newspaper",
                "laptop"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Lan",
            "caption": "Thứ Năm · Lan đọc bài cũ",
            "icon": "rolled-up-newspaper"
          },
          {
            "id": "h-426",
            "t": "text",
            "text": "426 doanh nghiệp?",
            "x": 3996,
            "y": 1260,
            "size": 64,
            "at": "l2:four hundred",
            "color": "muted"
          },
          {
            "id": "h-old",
            "t": "text",
            "text": "Số tại tháng 4/2022",
            "x": 3996,
            "y": 1360,
            "size": 50,
            "at": "l3:April",
            "color": "coral",
            "hl": [
              {
                "text": "4/2022",
                "at": "l3:April"
              }
            ]
          },
          {
            "id": "h-426x",
            "t": "strike",
            "over": "h-426",
            "at": "l3:changed"
          },
          {
            "id": "h-now",
            "t": "text",
            "text": "→ tra tên, ngay lúc làm hồ sơ",
            "x": 3996,
            "y": 1450,
            "size": 46,
            "at": "l4:Search",
            "color": "accent",
            "hl": [
              {
                "text": "ngay lúc làm hồ sơ",
                "at": "l4:apply"
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
          "say": "Stop six: Thursday. Lan has done her homework, from an old article.",
          "sub": "Chặng sáu: thứ Năm. Lan làm “bài tập về nhà”, từ một bài báo cũ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Four hundred twenty-six licensed companies nationwide! I'll judge firms by that.",
          "sub": "Cả nước có 426 doanh nghiệp được cấp phép! Em dựa vào số này để đoán công ty thật giả.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Careful. That number is from April twenty twenty-two. It may have changed.",
          "sub": "Cẩn thận. Đó là số tại tháng 4/2022, nay có thể đã khác.",
          "keys": [
            "tháng 4/2022"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Search the company's name in the list on the official site, right when you apply.",
          "sub": "Hãy tra tên công ty trong danh sách đang đăng trên trang chính thức, ngay lúc làm hồ sơ.",
          "keys": [
            "ngay lúc làm hồ sơ"
          ]
        }
      ],
      "ref": "p16"
    },
    {
      "id": "o23",
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
            "id": "h-rule",
            "t": "text",
            "text": "Mỗi nước: kênh, luật riêng",
            "x": 3996,
            "y": 1550,
            "size": 46,
            "at": "l1:own"
          },
          {
            "id": "h-cty",
            "t": "text",
            "text": "Mỹ, Canada, Úc, Nhật, Hàn: chuỗi riêng",
            "x": 3996,
            "y": 1625,
            "size": 38,
            "at": "l2:US",
            "color": "muted"
          },
          {
            "id": "h-lost",
            "t": "text",
            "text": "Lỡ chuyển tiền: xem chuỗi riêng",
            "x": 3996,
            "y": 1690,
            "size": 38,
            "at": "l3:sent"
          },
          {
            "id": "h-ref",
            "t": "text",
            "text": "Tin cũ: tra lại hôm nay",
            "x": 4816,
            "y": 1782,
            "size": 46,
            "at": "l4:reference",
            "color": "accent",
            "hl": [
              {
                "text": "tra lại hôm nay",
                "at": "l4:today"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: LuatVietnam (13/4/2022)",
            "x": 3996,
            "y": 1815,
            "size": 26,
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
          "say": "Each country has its own channels and laws, and rules change over time.",
          "sub": "Mỗi nước có kênh và luật riêng, và quy định thay đổi theo thời gian.",
          "keys": [
            "quy định thay đổi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Picked a country? The US, Canada, Australia, Japan and Korea each have a series.",
          "sub": "Đã chọn nước đến? Mỹ, Canada, Úc, Nhật, Hàn đều có chuỗi riêng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Already sent money? See the series on what to do once you've been scammed.",
          "sub": "Lỡ chuyển tiền rồi? Xem chuỗi “Đã bị lừa thì làm gì”."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Old information is only a reference. Before you pay, check the official site again, today.",
          "sub": "Thông tin cũ chỉ để tham khảo. Trước khi nộp tiền, tra lại trên trang chính thức, ngay hôm nay.",
          "keys": [
            "chỉ để tham khảo"
          ]
        }
      ],
      "ref": "p15,p17"
    },
    {
      "id": "o24",
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
            "at": "l3",
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
            "text": "⑦ Tối thứ Năm · Ba câu hỏi",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:stop seven"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "label": "Hỏi lại người tuyển",
              "actor": {
                "id": "dung",
                "side": "left"
              },
              "contact": {
                "name": "Người tuyển",
                "illus": "factory"
              },
              "messages": [
                {
                  "from": "me",
                  "text": "Ai trả tiền vé? Vì sao? Đổi lại em phải làm gì?",
                  "at": "l3"
                },
                {
                  "from": "them",
                  "text": "Không tin thì thôi, khối người đang chờ!",
                  "at": "l4"
                }
              ]
            },
            "at": "l1:Friday",
            "caption": "Tối thứ Năm · mở lại tin cũ",
            "icon": "mobile-phone"
          },
          {
            "id": "i-0",
            "t": "text",
            "text": "Tiền ứng trước ≠ dấu hiệu tốt",
            "x": 5964,
            "y": 1250,
            "size": 46,
            "at": "l2:good sign",
            "color": "coral"
          },
          {
            "id": "i-k-c0",
            "t": "box",
            "x": 5964,
            "y": 1350,
            "w": 44,
            "h": 44,
            "at": "l3:Who",
            "stroke": 5
          },
          {
            "id": "i-k-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1332,
            "size": 56,
            "at": "l3:Who+600",
            "color": "accent"
          },
          {
            "id": "i-k-l0",
            "t": "text",
            "text": "Ai trả?",
            "x": 6034,
            "y": 1342,
            "size": 50,
            "at": "l3:Who+200"
          },
          {
            "id": "i-k-c1",
            "t": "box",
            "x": 5964,
            "y": 1430,
            "w": 44,
            "h": 44,
            "at": "l3:Why",
            "stroke": 5
          },
          {
            "id": "i-k-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1412,
            "size": 56,
            "at": "l3:Why+600",
            "color": "accent"
          },
          {
            "id": "i-k-l1",
            "t": "text",
            "text": "Vì sao?",
            "x": 6034,
            "y": 1422,
            "size": 50,
            "at": "l3:Why+200"
          },
          {
            "id": "i-k-c2",
            "t": "box",
            "x": 5964,
            "y": 1510,
            "w": 44,
            "h": 44,
            "at": "l3:return",
            "stroke": 5
          },
          {
            "id": "i-k-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1492,
            "size": 56,
            "at": "l3:return+600",
            "color": "accent"
          },
          {
            "id": "i-k-l2",
            "t": "text",
            "text": "Đổi lại mình làm gì?",
            "x": 6034,
            "y": 1502,
            "size": 50,
            "at": "l3:return+200"
          },
          {
            "id": "i-no",
            "t": "text",
            "text": "Không đáp + giục → dừng",
            "x": 5964,
            "y": 1610,
            "size": 54,
            "at": "l5:pressure",
            "color": "accent",
            "hl": [
              {
                "text": "dừng",
                "at": "l5:keeps"
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
          "say": "Stop seven: Thursday night. Dũng reopens Friday's message.",
          "sub": "Chặng bảy: tối thứ Năm. Dũng mở lại tin nhắn tối thứ Sáu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Being given money first isn't a good sign yet. Ask three questions.",
          "sub": "Được cho tiền trước chưa phải dấu hiệu tốt. Hãy hỏi ba câu.",
          "keys": [
            "chưa phải dấu hiệu tốt"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Who pays my ticket? Why? And what must I do in return?",
          "sub": "Ai trả tiền vé? Vì sao? Và đổi lại em phải làm gì?",
          "pose": "phone",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "say": "Don't trust us? Fine. Plenty of people are waiting!",
          "sub": "“Không tin thì thôi, khối người đang chờ!”"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "No answers, just pressure. Dũng keeps his money in his pocket.",
          "sub": "Không trả lời, chỉ có giục. Dũng giữ tiền trong túi.",
          "keys": [
            "giữ tiền trong túi"
          ]
        }
      ],
      "ref": "p4"
    },
    {
      "id": "o25",
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
            "text": "Lại tối thứ Sáu · 21:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "phone",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "house"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "at": "l1:same",
            "caption": "Một tuần sau · cùng giờ ấy",
            "icon": "house"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "✓ 0 đồng cọc",
            "x": 7932,
            "y": 1250,
            "size": 48,
            "at": "l2:deposit",
            "color": "accent"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "✓ danh sách để tra",
            "x": 7932,
            "y": 1320,
            "size": 48,
            "at": "l2:list",
            "color": "accent"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "✓ số khẩn đã lưu",
            "x": 7932,
            "y": 1390,
            "size": 48,
            "at": "l2:hotline",
            "color": "accent"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Mật ngọt… đọc nhãn”",
            "x": 7932,
            "y": 1510,
            "size": 56,
            "at": "l5:honey",
            "color": "accent",
            "hl": [
              {
                "text": "đọc nhãn",
                "at": "l5:label"
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
          "say": "Friday again, nine p.m. Same phone, same Dũng.",
          "sub": "Lại tối thứ Sáu, chín giờ. Vẫn chiếc điện thoại ấy, vẫn Dũng ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "No deposit sent. I've got a list to check, and Mum saved the hotline.",
          "sub": "Không chuyển đồng cọc nào. Con có danh sách để tra, mẹ đã lưu số đường dây nóng.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Ticket paid in advance: kind, or trap? Now Dũng asks who pays, why, and for what.",
          "sub": "Ứng trước tiền vé: người tốt hay cái bẫy? Giờ Dũng biết hỏi: ai trả, vì sao, đổi lại gì.",
          "keys": [
            "ai trả, vì sao, đổi lại gì"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Sweet honey kills the fly. This fly has learned to read the label.",
          "sub": "“Mật ngọt thì chết ruồi.” Con ruồi này đã biết đọc nhãn hũ mật.",
          "keys": [
            "đọc nhãn hũ mật"
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
      "ref": "p3,p4"
    },
    {
      "id": "o26",
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
            "fit": "G",
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
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4716,
            "y": 170,
            "at": "l2:signs"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9492,
            "y": 30,
            "at": "l3:official"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2728,
            "y": 1350,
            "at": "l4:save"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Nhân vật là minh hoạ; bài để tham khảo, quy định có thể thay đổi, kiểm lại với cơ quan chức năng.",
            "x": 7932,
            "y": 1820,
            "size": 28,
            "at": "l5:end",
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
          "say": "So: the wish to go is fair, and that's exactly why easy promises tempt us.",
          "sub": "Tóm lại: mong muốn đi là chính đáng, nhưng chính nó khiến ta dễ tin lời hứa dễ dàng.",
          "keys": [
            "lời hứa dễ dàng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: spot the signs. Easy, fast, rich, rushed.",
          "sub": "Một: nhận ra dấu hiệu. Dễ, nhanh, nhiều tiền, giục.",
          "keys": [
            "nhận ra dấu hiệu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: check the official list before paying.",
          "sub": "Hai: tra danh sách trên kênh chính thức trước khi nộp tiền.",
          "keys": [
            "kênh chính thức"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: save plus eight four, nine eight one, eight four, eight four, eight four.",
          "sub": "Ba: lưu số +84 981 84 84 84.",
          "keys": [
            "+84 981 84 84 84"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Do it today. Next lesson: red flags in overseas job offers.",
          "sub": "Làm ngay hôm nay. Bài tiếp: dấu hiệu lời mời việc ở nước ngoài là lừa đảo.",
          "keys": [
            "Làm ngay hôm nay"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "o27",
      "module": "QUIZ-01",
      "data": {
        "q": "A recruiter says the last place will be gone tonight, what does the takeaway suggest?",
        "options": [
          "Ask a friend to pay for you so that the place is kept",
          "Take a day to check, since a real place will still be there",
          "Pay tonight, since real places always vanish within a few hours"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "hourglass-not-done",
        "why": "Suất thật vẫn còn sau một ngày tra cứu; chỉ suất giả mới sợ bạn chờ."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A recruiter says the last place will be gone tonight, what does the takeaway suggest?",
          "sub": "Bên tuyển nói suất cuối sẽ hết trong tối nay, câu Rút ra gợi ý gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Take a day to check. A real place will still be there.",
          "sub": "Dành một ngày tra cứu. Suất thật vẫn còn đó."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Being rushed is a reason to slow down.",
          "sub": "Bị giục là lý do để chậm lại."
        }
      ],
      "ref": "questions[28]"
    },
    {
      "id": "o28",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi lưu số +84 981 84 84 84"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, save the citizen protection hotline in your phone.",
          "sub": "Tối nay, lưu số đường dây nóng bảo hộ công dân vào điện thoại."
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
  "notes": "#145 bài MỚI (bài tổng chuỗi emigrants-avoiding-migration-scams) dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-21: đoán sai “ứng trước tiền vé = người tốt?” (p3, Công an Hải Phòng 2022). Dòng thời gian: MỘT TUẦN của Dũng (tối thứ Sáu 21:00 tin tuyển gấp → T7 dấu hiệu, Bác Bình → CN Lan “bao đậu visa” → T2 kênh chính thức + “Khoan đã!” chuyển cọc (Cách A/B p11) → T3 Bác Bình: 39 công dân, ILO → T4 cô Hoa lưu 3 số → T5 Lan và số 426 (p16) → tối T5 ba câu hỏi (p4) → tối thứ Sáu tuần sau). Nhân vật theo w145/_series/emigrants-avoiding-migration-scams.md: Dũng (gộp anh Tuấn p11), Lan (chị Lan p16), Bác Bình, cô Hoa. Số liệu chỉ từ bài: 53.159 / 47,5% / 112.000 / 24.030 / 21.104 (Bộ Nội vụ 6/2026), 3.000–30.000 USD, 25 kịch bản 5 nhóm, 10 người 740 triệu, ≥ 5 năm (Canada), 1 tháng lương / 12 tháng (Luật 69/2020/QH14), 39 công dân 9/4/2025, 11 dấu hiệu ILO, +84 981 84 84 84, 111, 426 doanh nghiệp 4/2022. Ngắt nhịp: BRK-03 (53.159), BRK-08 (5 chặng của chuỗi), BRK-06 (dấu hiệu Bộ Ngoại giao), BRK-09 (ILO), BRK-11 (3 số cần nhớ), DLG o14. Khép vòng: “Mật ngọt thì chết ruồi” → con ruồi biết đọc nhãn. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "o01",
    "close": "o25"
  }
};
