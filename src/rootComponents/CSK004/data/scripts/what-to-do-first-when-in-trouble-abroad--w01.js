// Kịch bản video W lần 3 (#110, #112) — "Gặp sự cố ở nước ngoài: làm gì trong mười lăm phút đầu?" · chuỗi "Gặp sự cố ở nước ngoài: làm gì ngay" (bài tổng)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "what-to-do-first-when-in-trouble-abroad--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "travellers-in-trouble",
    "slug": "what-to-do-first-when-in-trouble-abroad",
    "door": "ky-nang",
    "level": "B1",
    "title": "Gặp sự cố ở nước ngoài: làm gì trong mười lăm phút đầu?",
    "series": "Gặp sự cố ở nước ngoài: làm gì ngay"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô đi theo SÁU NGÀY, SÁU SỰ CỐ của nhà Thảo (tối Ngày 1 đáp xuống → 21:30 vali không ra → gần 1 giờ sáng khách sạn → Ngày 3 22:00 Dũng mất hộ chiếu → Ngày 4 gần nửa đêm Thảo mất thẻ, “Khoan đã!” → Ngày 5 nửa đêm cô Hoa tức ngực → Ngày 6 chuyến về bị huỷ → chờ chuyến tối → đêm Ngày 6 về tới sân bay nhà, khép vòng). Mạch chuỗi: w145/_series/travellers-in-trouble.md. Đổi tên: Hạ (p9) → Thảo; “bạn” mất hộ chiếu (p5), người nhắn mẹ (p30), “bạn” báo vali (p18–p19) → Dũng; “bạn” đến muộn (p28), “bạn” ở quầy (p26) → Thảo; mẹ bạn (p23) → cô Hoa; Mai/Nam/Lan (p13) → Thảo/Dũng/cô Hoa; Sang (p16) → “một người khách” không lên hình; lễ tân, nhân viên sân bay → Sam. Cảnh ngắt nhịp: BRK-07 (s04 rehook), BRK-04 (s15 cấp cứu trước), BRK-10 (s19 “Hoá đơn hôm nay là tiền về ngày mai”), BRK-09 (s23 tổng đài bảo hộ công dân). Số liệu chỉ từ bài: +84 981 84 84 84, ≤ 12 tháng/1 lần (Luật 49/2019), 7/21 ngày (Công ước Montreal), nửa tiếng. Câu neo: “Phúc bất trùng lai, họa vô đơn chí”. Bản cũ (W lần 3): w145/bak/what-to-do-first-when-in-trouble-abroad--w01.js.",
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
            "id": "a-num",
            "t": "text",
            "text": "15 phút đầu",
            "x": 60,
            "y": 120,
            "size": 150,
            "at": "l1:fifteen",
            "color": "accent",
            "hl": [
              {
                "text": "15 phút đầu",
                "at": "l1:minutes"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "lúc rối nhất, cần thứ tự nhất",
            "x": 70,
            "y": 330,
            "size": 48,
            "at": "l2:messiest",
            "hl": [
              {
                "text": "thứ tự",
                "at": "l2:order"
              }
            ]
          },
          {
            "id": "a-myth",
            "t": "text",
            "text": "Ta tưởng: hoảng trước, tính sau?",
            "x": 70,
            "y": 440,
            "size": 50,
            "at": "l3:panic",
            "color": "muted"
          },
          {
            "id": "a-mx",
            "t": "strike",
            "over": "a-myth",
            "at": "l3:chick"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Trouble abroad? The first fifteen minutes matter most.",
          "sub": "Gặp sự cố ở nước ngoài? Mười lăm phút đầu là quan trọng nhất.",
          "keys": [
            "Mười lăm phút đầu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The messiest moment is exactly when you need the right order.",
          "sub": "Lúc rối nhất lại là lúc cần làm đúng thứ tự nhất.",
          "keys": [
            "đúng thứ tự"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Yet we spend those minutes in panic, like a lost chick.",
          "sub": "Vậy mà ta hay dùng chúng để hoảng, như gà con lạc mẹ.",
          "keys": [
            "gà con lạc mẹ"
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
            "at": "l1",
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
              "set": "airport",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "airplane-arrival",
                "night-with-stars"
              ]
            },
            "at": "l1",
            "caption": "Ngày 1 · tối · vừa đáp xuống",
            "icon": "airplane-arrival"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Phúc bất trùng lai…”",
            "x": 60,
            "y": 560,
            "size": 56,
            "at": "l4:blessings",
            "color": "accent",
            "hl": [
              {
                "text": "trùng lai",
                "at": "l4:pairs"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "…họa vô đơn chí",
            "x": 60,
            "y": 650,
            "size": 56,
            "at": "l4:troubles",
            "color": "coral",
            "hl": [
              {
                "text": "vô đơn chí",
                "at": "l4:alone"
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
          "say": "Meet Thảo, the family list keeper.",
          "sub": "Đây là Thảo, người giữ danh sách của cả nhà."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "With her cousin Dũng, and her mum, Cô Hoa.",
          "sub": "Đi cùng em họ Dũng và mẹ là cô Hoa."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Six days abroad. Let's hope nothing goes wrong!",
          "sub": "Sáu ngày xa nhà. Mong đừng có chuyện gì nha!",
          "face": "happy",
          "pose": "wave"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: blessings never come in pairs, troubles never come alone.",
          "sub": "Ông bà dặn: “Phúc bất trùng lai, họa vô đơn chí.”",
          "keys": [
            "họa vô đơn chí"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Six days, six problems.",
          "sub": "Chuyến này: sáu ngày, sáu sự cố.",
          "keys": [
            "sáu ngày, sáu sự cố"
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
            "text": "Gặp chuyện: làm gì trước?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:first",
            "hl": [
              {
                "text": "làm gì trước",
                "at": "l1:first"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Hoảng trước, tính sau",
            "x": 2028,
            "y": 160,
            "size": 52,
            "at": "l1:panic",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l1:panic+300"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Một nhịp, ba bước",
            "x": 2028,
            "y": 250,
            "size": 60,
            "at": "l2:rhythm",
            "color": "accent",
            "hl": [
              {
                "text": "ba bước",
                "at": "l2:three beats"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "① Chặn thiệt hại",
            "x": 2868,
            "y": 170,
            "size": 60,
            "at": "l3:stop",
            "hl": [
              {
                "text": "Chặn thiệt hại",
                "at": "l3:damage"
              }
            ]
          },
          {
            "id": "b-1s",
            "t": "text",
            "text": "khoá thẻ · ra quầy · cấp cứu",
            "x": 2928,
            "y": 250,
            "size": 40,
            "at": "l3:lock",
            "color": "muted"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "② Xin giấy tờ",
            "x": 2868,
            "y": 320,
            "size": 60,
            "at": "l4:papers",
            "hl": [
              {
                "text": "Xin giấy tờ",
                "at": "l4:get papers"
              }
            ]
          },
          {
            "id": "b-2s",
            "t": "text",
            "text": "biên bản · mã hồ sơ · hoá đơn",
            "x": 2928,
            "y": 400,
            "size": 40,
            "at": "l4:report",
            "color": "muted"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "③ Chỉ tin kênh chính thức",
            "x": 2868,
            "y": 470,
            "size": 56,
            "at": "l5:official",
            "color": "accent",
            "hl": [
              {
                "text": "chính thức",
                "at": "l5:official"
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
          "say": "So what first? Not panic.",
          "sub": "Vậy làm gì trước? Không phải hoảng.",
          "keys": [
            "làm gì trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One rhythm for every problem, three beats.",
          "sub": "Mà là một nhịp cho mọi sự cố, ba bước.",
          "keys": [
            "một nhịp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One: stop the damage. Lock cards, go to the desk, call an ambulance.",
          "sub": "Một: chặn thiệt hại. Khoá thẻ, ra quầy hãng bay, gọi cấp cứu.",
          "keys": [
            "chặn thiệt hại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Two: get papers. A police report, a file number, receipts.",
          "sub": "Hai: xin giấy tờ. Biên bản, mã hồ sơ, hoá đơn.",
          "keys": [
            "xin giấy tờ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Three: trust only numbers and addresses from official channels.",
          "sub": "Ba: chỉ tin số, địa chỉ lấy từ kênh chính thức.",
          "keys": [
            "kênh chính thức"
          ]
        }
      ],
      "ref": "intro,p1"
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
            "id": "b-skip",
            "t": "text",
            "text": "Đừng nhảy cóc",
            "x": 2028,
            "y": 360,
            "size": 60,
            "at": "l1:skip",
            "color": "coral",
            "hl": [
              {
                "text": "nhảy cóc",
                "at": "l1:skip"
              }
            ]
          },
          {
            "id": "b-ev1",
            "t": "text",
            "text": "Chụp từng tờ → email mình",
            "x": 2028,
            "y": 480,
            "size": 46,
            "at": "l2:photograph"
          },
          {
            "id": "b-ev2",
            "t": "text",
            "text": "Ghi tên nhân viên, giờ",
            "x": 2028,
            "y": 560,
            "size": 46,
            "at": "l2:names"
          },
          {
            "id": "b-ev3",
            "t": "text",
            "text": "Lời hứa → xin ghi lại",
            "x": 2868,
            "y": 560,
            "size": 46,
            "at": "l2:promises",
            "hl": [
              {
                "text": "ghi lại",
                "at": "l2:writing"
              }
            ]
          },
          {
            "id": "b-ev4",
            "t": "text",
            "text": "Một tin ngắn về nhà",
            "x": 2868,
            "y": 640,
            "size": 46,
            "at": "l2:message",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Each step makes a paper for the next. So don't skip steps.",
          "sub": "Mỗi bước tạo giấy tờ cho bước sau, nên đừng nhảy cóc.",
          "keys": [
            "đừng nhảy cóc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Photograph papers to your email, note names and times, get promises in writing, message home.",
          "sub": "Chụp giấy tờ gửi email mình, ghi tên nhân viên và giờ, lời hứa xin ghi lại, nhắn một tin về nhà."
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s04",
      "module": "BRK-07",
      "data": {
        "question": "Sáu ngày, sáu sự cố: ba bước có trụ nổi?",
        "illus": "luggage"
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
          "say": "Six days, six problems. Will three beats survive?",
          "sub": "Sáu ngày, sáu sự cố. Ba bước ấy có trụ nổi?"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
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
          },
          {
            "at": "l5",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l8",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Ngày 1 · Vali không ra",
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
              "set": "airport",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "shrug"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l4"
                }
              ],
              "props": [
                "luggage",
                "left-luggage"
              ]
            },
            "at": "l1:suitcase",
            "caption": "21:30 · khu nhận hành lý",
            "icon": "luggage"
          },
          {
            "id": "c-out",
            "t": "text",
            "text": "Ra ngoài rồi hỏi",
            "x": 3996,
            "y": 160,
            "size": 50,
            "at": "l2:outside",
            "color": "muted"
          },
          {
            "id": "c-outx",
            "t": "strike",
            "over": "c-out",
            "at": "l3:back in"
          },
          {
            "id": "c-rep",
            "t": "text",
            "text": "Báo TRƯỚC cửa ra",
            "x": 3996,
            "y": 240,
            "size": 60,
            "at": "l3:exit",
            "color": "coral",
            "hl": [
              {
                "text": "TRƯỚC cửa ra",
                "at": "l3:before"
              }
            ]
          },
          {
            "id": "c-desk",
            "t": "text",
            "text": "Quầy Baggage Services",
            "x": 3996,
            "y": 335,
            "size": 50,
            "at": "l4:baggage services",
            "hl": [
              {
                "text": "Baggage Services",
                "at": "l4:services"
              }
            ]
          },
          {
            "id": "c-bf",
            "t": "text",
            "text": "“Đen, cỡ lớn”",
            "x": 3996,
            "y": 430,
            "size": 48,
            "at": "l5:black",
            "color": "muted"
          },
          {
            "id": "c-bfx",
            "t": "strike",
            "over": "c-bf",
            "at": "l7:red"
          },
          {
            "id": "c-af",
            "t": "text",
            "text": "Ảnh + dấu riêng",
            "x": 3996,
            "y": 510,
            "size": 56,
            "at": "l7:photo",
            "color": "accent",
            "hl": [
              {
                "text": "dấu riêng",
                "at": "l7:strap"
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
          "say": "Stop one. Day one, nine thirty p.m. No suitcase for Dũng.",
          "sub": "Chặng một: Ngày 1, chín rưỡi tối. Vali của Dũng không ra.",
          "keys": [
            "Vali của Dũng không ra"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "No problem! I'll go outside and ask someone.",
          "sub": "Không sao! Em ra ngoài hỏi ai đó.",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Wait. Many airports won't let you back in. Report before the exit.",
          "sub": "Từ từ. Nhiều sân bay không cho quay lại. Báo trước khi qua cửa ra.",
          "keys": [
            "Báo trước khi qua cửa ra"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Find Baggage Services. Meet Sam, the staff there.",
          "sub": "Tìm quầy Baggage Services. Và đây là Sam, nhân viên ở quầy."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "My suitcase did not arrive. Here is my tag. It is black and large.",
          "sub": "Vali của tôi không về. Đây là thẻ hành lý. Vali màu đen, cỡ lớn.",
          "pose": "give"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "dung",
          "say": "It has a red strap and a yellow tag. Here is a photo.",
          "sub": "Có dây đỏ, thẻ vàng. Đây là ảnh.",
          "pose": "phone"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Black and large? Half the store room. A photo and a mark bring it home.",
          "sub": "Đen, cỡ lớn? Nửa cái kho. Vali có ảnh và dấu riêng thì dễ tìm đường về.",
          "keys": [
            "ảnh và dấu riêng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l4",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p18,p19,p20"
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
            "at": "l2",
            "fit": [
              "c-mt",
              "c-mt2"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l2:end",
            "fit": "C",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "c-file",
            "t": "text",
            "text": "Mã hồ sơ · giữ hoá đơn",
            "x": 3996,
            "y": 600,
            "size": 46,
            "at": "l1:file number",
            "hl": [
              {
                "text": "Mã hồ sơ",
                "at": "l1:file number"
              }
            ]
          },
          {
            "id": "c-mt",
            "t": "text",
            "text": "Hỏng: 7 ngày",
            "x": 3996,
            "y": 690,
            "size": 44,
            "at": "l2:seven",
            "color": "coral"
          },
          {
            "id": "c-mt2",
            "t": "text",
            "text": "Chậm: 21 ngày",
            "x": 4336,
            "y": 690,
            "size": 44,
            "at": "l2:twenty",
            "color": "coral",
            "hl": [
              {
                "text": "21 ngày",
                "at": "l2:twenty-one"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Công ước Montreal 1999, Điều 31(2)",
            "x": 4816,
            "y": 740,
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
          "who": "det",
          "say": "Get a report with a file number. Buy only essentials, and keep every receipt.",
          "sub": "Lấy biên bản có mã hồ sơ. Chỉ mua đồ thiết yếu, giữ từng hoá đơn.",
          "keys": [
            "mã hồ sơ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Under the Montreal Convention, complain in writing: seven days if damaged, twenty-one if delayed.",
          "sub": "Theo Công ước Montreal, khiếu nại bằng văn bản: hỏng trong 7 ngày, đến chậm trong 21 ngày.",
          "keys": [
            "7 ngày",
            "21 ngày"
          ]
        }
      ],
      "ref": "p21"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Gần 1 giờ sáng · Khách sạn",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:stop two"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "hotel",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "left": {
                "label": "Cách A: im lặng",
                "ok": false
              },
              "right": {
                "label": "Cách B: nhắn trước",
                "ok": true
              }
            },
            "at": "l1:versions",
            "caption": "Chuyến bay trễ · quầy lễ tân",
            "icon": "bellhop-bell"
          },
          {
            "id": "d-a",
            "t": "text",
            "text": "A: im lặng, doạ đánh giá",
            "x": 5964,
            "y": 160,
            "size": 46,
            "at": "a2:review",
            "color": "coral"
          },
          {
            "id": "d-b",
            "t": "text",
            "text": "B: nhắn trước “keep my room”",
            "x": 5964,
            "y": 240,
            "size": 44,
            "at": "b1:keep",
            "color": "accent"
          },
          {
            "id": "d-r1",
            "t": "text",
            "text": "Đến muộn: nhắn trước",
            "x": 5964,
            "y": 340,
            "size": 52,
            "at": "l4:message ahead",
            "hl": [
              {
                "text": "nhắn trước",
                "at": "l4:message ahead"
              }
            ]
          },
          {
            "id": "d-r2",
            "t": "text",
            "text": "Đến nơi: nói nhẹ",
            "x": 5964,
            "y": 420,
            "size": 52,
            "at": "l4:gently",
            "hl": [
              {
                "text": "nói nhẹ",
                "at": "l4:gently"
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
          "say": "Stop two. Late flight, hotel near one a.m. Two versions of Thảo.",
          "sub": "Chặng hai: chuyến bay trễ, gần một giờ sáng mới tới khách sạn. Hai phiên bản của Thảo.",
          "keys": [
            "gần một giờ sáng"
          ]
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "sam",
          "say": "Sorry, your room was given to another guest.",
          "sub": "Xin lỗi, phòng đã cho khách khác.",
          "phase": "a",
          "pose": "explain"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "thao",
          "say": "What? Then I'll write a bad review!",
          "sub": "Sao cơ? Vậy tôi viết đánh giá xấu!",
          "phase": "a",
          "face": "stern",
          "pose": "point"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "thao",
          "say": "My flight is late. I will arrive around midnight. Please keep my room.",
          "sub": "Chuyến bay trễ, tôi đến khoảng nửa đêm. Giữ phòng giúp tôi.",
          "phase": "b",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Version A hunts for a bed till dawn. So: message ahead, then speak gently.",
          "sub": "Bản A tự tìm giường đến gần sáng. Vậy: đến muộn thì nhắn trước, đến nơi thì nói nhẹ.",
          "keys": [
            "nhắn trước",
            "nói nhẹ"
          ]
        }
      ],
      "ref": "p28,p29"
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
            "id": "d-find",
            "t": "text",
            "text": "Tìm theo mã, họ, người đặt",
            "x": 5964,
            "y": 520,
            "size": 44,
            "at": "l2:booking number",
            "hl": [
              {
                "text": "mã",
                "at": "l2:booking number"
              }
            ]
          },
          {
            "id": "d-flip",
            "t": "text",
            "text": "Họ ↔ tên hay bị đảo",
            "x": 5964,
            "y": 600,
            "size": 44,
            "at": "l2:switched",
            "color": "coral"
          },
          {
            "id": "d-plat",
            "t": "text",
            "text": "Đã trả trước: đừng trả lại",
            "x": 5964,
            "y": 690,
            "size": 44,
            "at": "l3:twice",
            "color": "accent",
            "hl": [
              {
                "text": "đừng trả lại",
                "at": "l3:twice"
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
          "say": "I have a reservation. Here is my booking confirmation.",
          "sub": "Tôi có đặt phòng. Đây là xác nhận đặt phòng.",
          "pose": "give"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask them to search by booking number or family name. Vietnamese names get switched.",
          "sub": "Nhờ tìm theo mã, theo họ, theo người đặt hộ. Tên người Việt hay bị đảo họ và tên.",
          "keys": [
            "đảo họ và tên"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Prepaid on a platform? Don't pay twice. Call the platform.",
          "sub": "Đã trả qua nền tảng? Đừng trả lần hai. Gọi nền tảng ngay tại quầy.",
          "keys": [
            "Đừng trả lần hai"
          ]
        }
      ],
      "ref": "p26,p27"
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
            "at": "l5:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Ngày 3 · Mất hộ chiếu",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:stop three"
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
                  "id": "dung",
                  "side": "left",
                  "face": "worried",
                  "pose": "shrug"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "passport-control",
                "memo"
              ]
            },
            "at": "l1:passport",
            "caption": "22:00 · phòng khách sạn",
            "icon": "passport-control"
          },
          {
            "id": "e-run",
            "t": "text",
            "text": "Chạy ra chợ ngay",
            "x": 7932,
            "y": 160,
            "size": 50,
            "at": "l2:market",
            "color": "muted"
          },
          {
            "id": "e-runx",
            "t": "strike",
            "over": "e-run",
            "at": "l3:sit"
          },
          {
            "id": "e-sit",
            "t": "text",
            "text": "Ngồi xuống, lục từng ngăn",
            "x": 7932,
            "y": 240,
            "size": 50,
            "at": "l3:sit",
            "hl": [
              {
                "text": "từng ngăn",
                "at": "l3:pocket"
              }
            ]
          },
          {
            "id": "e-last",
            "t": "text",
            "text": "Nhớ lần cuối cầm",
            "x": 7932,
            "y": 320,
            "size": 46,
            "at": "l4:last held"
          },
          {
            "id": "e-call",
            "t": "text",
            "text": "→ gọi từng nơi",
            "x": 7932,
            "y": 390,
            "size": 46,
            "at": "l4:call",
            "color": "accent",
            "hl": [
              {
                "text": "gọi từng nơi",
                "at": "l4:each"
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
          "say": "Stop three. Day three, ten p.m. Dũng's passport is gone.",
          "sub": "Chặng ba: Ngày 3, mười giờ tối. Hộ chiếu của Dũng biến mất.",
          "keys": [
            "Hộ chiếu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "It's gone! I'll run back to the market right now!",
          "sub": "Mất rồi! Em chạy ra chợ ngay đây!",
          "face": "worried",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sit down. Search every pocket first.",
          "sub": "Ngồi xuống đã. Lục lại từng ngăn, từ từ.",
          "keys": [
            "Ngồi xuống đã"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Recall where you last held it: reception, exchange, tax refund shop, taxi. Call each.",
          "sub": "Nhớ lần cuối cầm: lễ tân, đổi tiền, hoàn thuế, taxi. Gọi từng nơi."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "I think I left my passport here this afternoon. Could you please check?",
          "sub": "Hình như chiều nay tôi để quên hộ chiếu ở đây. Kiểm tra giúp tôi được không?",
          "pose": "phone"
        }
      ],
      "ref": "p5"
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
            "at": "l2",
            "fit": [
              "e-rg",
              "e-rg2"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "E",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "e-p1",
            "t": "text",
            "text": "① Công an → biên bản",
            "x": 7932,
            "y": 480,
            "size": 46,
            "at": "l1:police",
            "hl": [
              {
                "text": "biên bản",
                "at": "l1:report"
              }
            ]
          },
          {
            "id": "e-p2",
            "t": "text",
            "text": "② Đại sứ quán, lãnh sự",
            "x": 7932,
            "y": 550,
            "size": 46,
            "at": "l1:embassy"
          },
          {
            "id": "e-rg",
            "t": "text",
            "text": "Hộ chiếu rút gọn:",
            "x": 7932,
            "y": 630,
            "size": 44,
            "at": "l2:short procedure",
            "hl": [
              {
                "text": "rút gọn",
                "at": "l2:short procedure"
              }
            ]
          },
          {
            "id": "e-rg2",
            "t": "text",
            "text": "≤ 12 tháng · dùng 1 lần",
            "x": 8312,
            "y": 630,
            "size": 44,
            "at": "l2:twelve",
            "color": "accent",
            "hl": [
              {
                "text": "1 lần",
                "at": "l2:once"
              }
            ]
          },
          {
            "id": "e-scam",
            "t": "text",
            "text": "“Làm giấy nhanh, có quen”",
            "x": 7932,
            "y": 700,
            "size": 40,
            "at": "l3:fast",
            "color": "muted"
          },
          {
            "id": "e-scamx",
            "t": "strike",
            "over": "e-scam",
            "at": "l3:walk"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Luật Xuất cảnh, nhập cảnh 49/2019/QH14 (Điều 17–18)",
            "x": 8752,
            "y": 740,
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
          "who": "det",
          "say": "Still missing? Police report first, then the Vietnamese embassy or consulate.",
          "sub": "Vẫn không thấy? Báo công an lấy biên bản trước, rồi mới đến Đại sứ quán, Tổng lãnh sự quán.",
          "keys": [
            "biên bản"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Usually a short procedure passport home: twelve months at most, no extension, used once.",
          "sub": "Thường được cấp hộ chiếu rút gọn để về: hạn không quá 12 tháng, không gia hạn, dùng một lần.",
          "keys": [
            "dùng một lần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fast papers, a friend inside, deposit first? Walk away.",
          "sub": "“Làm giấy nhanh”, “có quen trong lãnh sự”, “cọc trước”? Tránh xa: giấy tờ chỉ làm ở cơ quan chính thức.",
          "keys": [
            "Tránh xa"
          ]
        }
      ],
      "ref": "p6,p7"
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
            "text": "④ Ngày 4 · Mất thẻ",
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
                "purse",
                "alarm-clock"
              ]
            },
            "at": "l1:midnight",
            "caption": "Gần nửa đêm · về phòng",
            "icon": "purse"
          },
          {
            "id": "f-plan",
            "t": "text",
            "text": "Mai hỏi quán, rồi gọi",
            "x": 60,
            "y": 1250,
            "size": 48,
            "at": "l2:tomorrow",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four. Day four, near midnight. Even list keepers slip.",
          "sub": "Chặng bốn: Ngày 4, gần nửa đêm. Người giữ danh sách cũng có lúc sơ sẩy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "My card is gone! Probably the restaurant. Who answers now? I'll ask tomorrow.",
          "sub": "Thẻ mất rồi! Chắc rơi ở quán. Giờ này ai trả lời? Mai hỏi vậy.",
          "face": "worried",
          "pose": "shrug"
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Ngày 4 · gần nửa đêm",
        "actors": [
          {
            "id": "thao",
            "side": "center",
            "pose": "phone",
            "face": "thinking"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Để sáng mai mới gọi ngân hàng",
          "why": "Thẻ còn mở cả đêm, sáng ra đã có giao dịch lạ.",
          "rule": "Khoá trước, tìm sau"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Midnight. I'll ask at the restaurant tomorrow, then call the bank.",
          "sub": "Nửa đêm rồi. Mai ra quán hỏi, rồi mới gọi ngân hàng.",
          "pose": "shrug",
          "stop": true
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Wait a second!",
          "sub": "Khoan đã!",
          "face": "stern"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "By morning, the app shows online payments made before dawn.",
          "sub": "Sáng ra, ứng dụng báo giao dịch trực tuyến lúc rạng sáng."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "First, I lock my card in the bank app.",
          "sub": "Trước hết, khoá thẻ trên ứng dụng ngân hàng.",
          "phase": "redo",
          "pose": "phone",
          "face": "neutral"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Lock first, look later.",
          "sub": "Khoá trước, tìm sau.",
          "phase": "redo",
          "face": "happy"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p8,p9,p10"
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
            "id": "f-planx",
            "t": "strike",
            "over": "f-plan",
            "at": "l1:lock"
          },
          {
            "id": "f-rule",
            "t": "text",
            "text": "Khoá trước, tìm sau",
            "x": 60,
            "y": 1330,
            "size": 64,
            "at": "l1:lock first",
            "color": "accent",
            "hl": [
              {
                "text": "Khoá trước",
                "at": "l1:lock first"
              }
            ]
          },
          {
            "id": "f-pay",
            "t": "text",
            "text": "“I did not make this payment.”",
            "x": 60,
            "y": 1430,
            "size": 42,
            "at": "l1:payment"
          },
          {
            "id": "f-otp",
            "t": "text",
            "text": "Xin đọc mã → cúp máy",
            "x": 60,
            "y": 1520,
            "size": 50,
            "at": "l2:code",
            "color": "coral",
            "hl": [
              {
                "text": "cúp máy",
                "at": "l2:hang up"
              }
            ]
          },
          {
            "id": "f-cash",
            "t": "text",
            "text": "Hết tiền: thẻ dự phòng",
            "x": 60,
            "y": 1610,
            "size": 48,
            "at": "l4:backup",
            "hl": [
              {
                "text": "thẻ dự phòng",
                "at": "l4:backup"
              }
            ]
          },
          {
            "id": "f-pp",
            "t": "text",
            "text": "Hộ chiếu làm tin",
            "x": 60,
            "y": 1780,
            "size": 44,
            "at": "l5:passport",
            "color": "muted"
          },
          {
            "id": "f-ppx",
            "t": "strike",
            "over": "f-pp",
            "at": "l5:loan"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Lock first, look later. Strange payment? I did not make this payment.",
          "sub": "Khoá trước, tìm sau. Thấy khoản lạ? Báo ngân hàng: Tôi không thực hiện giao dịch này.",
          "keys": [
            "Khoá trước, tìm sau"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then a call: your bank, asking you to read a code. Hang up.",
          "sub": "Rồi có cuộc gọi tự xưng ngân hàng, xin đọc mã xác thực. Cúp máy.",
          "keys": [
            "Cúp máy"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Thank you, I will call my bank myself.",
          "sub": "Cảm ơn, tôi sẽ tự gọi ngân hàng.",
          "face": "stern",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No money? A backup card, or family sending money officially.",
          "sub": "Hết tiền? Dùng thẻ dự phòng, hoặc nhờ người thân chuyển qua kênh chính thức.",
          "keys": [
            "thẻ dự phòng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Never pawn your passport for a loan.",
          "sub": "Đừng đưa hộ chiếu làm tin để vay người lạ."
        }
      ],
      "ref": "p8,p11"
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
            "at": "l2:end",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Ngày 5 · Tức ngực",
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
              "set": "room",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "face": "worried",
                  "pose": "stand"
                },
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "phone",
                  "enter": "pop",
                  "at": "l4"
                }
              ],
              "props": [
                "ambulance",
                "telephone-receiver"
              ]
            },
            "at": "l1:chest",
            "caption": "Nửa đêm · phòng khách sạn",
            "icon": "ambulance"
          },
          {
            "id": "g-q",
            "t": "text",
            "text": "Tìm số bảo hiểm trước?",
            "x": 2028,
            "y": 1250,
            "size": 50,
            "at": "l3:insurance",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five. Day five, midnight. Cô Hoa wakes with chest pain.",
          "sub": "Chặng năm: Ngày 5, nửa đêm. Cô Hoa tỉnh dậy, tức ngực.",
          "keys": [
            "tức ngực"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "My chest is tight. I can't breathe well.",
          "sub": "Ngực mẹ tức lắm. Thở không nổi.",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Thảo grabs her phone. Dig for the insurance number first?",
          "sub": "Thảo vồ lấy điện thoại. Lục tìm số bảo hiểm trước?"
        }
      ],
      "ref": "p23"
    },
    {
      "id": "s15",
      "module": "BRK-04",
      "data": {
        "wrong": "Lục email tìm số bảo hiểm",
        "right": "Gọi cấp cứu ngay",
        "wrongIllus": "e-mail",
        "rightIllus": "ambulance"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Search emails for the policy?",
          "sub": "Lục email tìm hợp đồng?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. Call an ambulance now. Insurance later.",
          "sub": "Không. Gọi cấp cứu ngay. Bảo hiểm báo sau."
        }
      ],
      "ref": "p23,p24"
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
            "at": "l1",
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
            "id": "g-qx",
            "t": "strike",
            "over": "g-q",
            "at": "l1"
          },
          {
            "id": "g-call",
            "t": "text",
            "text": "Gọi cấp cứu / nhờ lễ tân",
            "x": 2028,
            "y": 1330,
            "size": 48,
            "at": "l1:ambulance",
            "color": "coral",
            "hl": [
              {
                "text": "Gọi cấp cứu",
                "at": "l1:call"
              }
            ]
          },
          {
            "id": "g-rule",
            "t": "text",
            "text": "Cấp cứu trước, giấy tờ sau",
            "x": 2028,
            "y": 1420,
            "size": 50,
            "at": "l3:help",
            "color": "accent",
            "hl": [
              {
                "text": "giấy tờ sau",
                "at": "l3:papers"
              }
            ]
          },
          {
            "id": "g-m1",
            "t": "text",
            "text": "Khẩn cấp → cấp cứu",
            "x": 2028,
            "y": 1540,
            "size": 44,
            "at": "l4:chest",
            "color": "coral"
          },
          {
            "id": "g-m2",
            "t": "text",
            "text": "Trong ngày → gọi bảo hiểm",
            "x": 2028,
            "y": 1615,
            "size": 44,
            "at": "l4:fever"
          },
          {
            "id": "g-m3",
            "t": "text",
            "text": "Nhẹ → hỏi dược sĩ",
            "x": 2028,
            "y": 1690,
            "size": 44,
            "at": "l5:pharmacist",
            "color": "muted"
          },
          {
            "id": "g-rc",
            "t": "text",
            "text": "Xin hoá đơn chi tiết",
            "x": 2028,
            "y": 1780,
            "size": 44,
            "at": "l5:itemised",
            "color": "accent",
            "hl": [
              {
                "text": "hoá đơn chi tiết",
                "at": "l5:receipt"
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
          "say": "Please call an ambulance. My mother has chest pain.",
          "sub": "Làm ơn gọi cấp cứu. Mẹ tôi bị đau ngực.",
          "face": "worried",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "I'm calling now.",
          "sub": "Tôi gọi ngay đây.",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A policy takes half an hour to read. Emergency? Help first, papers later.",
          "sub": "Đọc hợp đồng có thể mất nửa tiếng. Nguy kịch thì gọi cấp cứu, giấy tờ để sau.",
          "keys": [
            "giấy tờ để sau"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three levels. Chest pain: ambulance. High fever: insurance, then a doctor today.",
          "sub": "Ba mức. Đau ngực, khó thở, ngất: cấp cứu. Sốt cao, vết thương cần khâu: gọi bảo hiểm, khám trong ngày."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Mild? A pharmacist. And always an itemised receipt.",
          "sub": "Nhẹ: hỏi dược sĩ. Khám xong, xin hoá đơn chi tiết, giữ đơn thuốc.",
          "keys": [
            "hoá đơn chi tiết"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 200
        }
      ],
      "ref": "p22,p23,p24,p25"
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
            "at": "l4",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Ngày 6 · Chuyến về bị huỷ",
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
              "set": "airport",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "dung",
                  "side": "center"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "props": [
                "airplane-departure",
                "cross-mark"
              ]
            },
            "at": "l1:cancelled",
            "caption": "Sân bay · màn hình: huỷ",
            "icon": "airplane-departure"
          },
          {
            "id": "h-who",
            "t": "text",
            "text": "Lỡ hay huỷ: lỗi ai?",
            "x": 3996,
            "y": 1250,
            "size": 50,
            "at": "l2:fault",
            "hl": [
              {
                "text": "lỗi ai",
                "at": "l2:whose fault"
              }
            ]
          },
          {
            "id": "h-can",
            "t": "text",
            "text": "Hãng huỷ → chuyến khác, hoàn tiền",
            "x": 3996,
            "y": 1330,
            "size": 40,
            "at": "l2:refund",
            "color": "accent"
          },
          {
            "id": "h-buy",
            "t": "text",
            "text": "Mua ngay vé hãng khác",
            "x": 3996,
            "y": 1410,
            "size": 46,
            "at": "l3:read",
            "color": "muted"
          },
          {
            "id": "h-buyx",
            "t": "strike",
            "over": "h-buy",
            "at": "l3:buying"
          },
          {
            "id": "h-split",
            "t": "text",
            "text": "Chia việc, đừng chờ loa",
            "x": 3996,
            "y": 1510,
            "size": 50,
            "at": "l7:split",
            "color": "accent",
            "hl": [
              {
                "text": "Chia việc",
                "at": "l7:split"
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
          "say": "Stop six. Day six. Flight home: cancelled.",
          "sub": "Chặng sáu: Ngày 6, chuyến bay về. Màn hình báo: huỷ.",
          "keys": [
            "huỷ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Whose fault? If the airline cancels, often another flight or a refund.",
          "sub": "Lỗi của ai? Hãng huỷ thì ở nhiều nơi được chọn chuyến khác hoặc hoàn tiền.",
          "keys": [
            "lỗi của ai"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So read the airline's messages before buying another ticket.",
          "sub": "Vậy đừng vội mua vé hãng khác. Đọc tin của hãng mình trước."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "No new flight in the email yet. I'll call the hotline.",
          "sub": "Email chưa có chuyến mới. Chị gọi tổng đài."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "I'll queue at the desk!",
          "sub": "Em ra quầy xếp hàng!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "The evening flight still has seats. I'll text Dũng.",
          "sub": "Chuyến tối còn chỗ. Mẹ nhắn Dũng nha!",
          "pose": "phone"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Split the jobs. Don't wait for announcements.",
          "sub": "Huỷ chuyến thì chia việc, đừng ngồi chờ loa.",
          "keys": [
            "đừng ngồi chờ loa"
          ]
        }
      ],
      "ref": "p12,p13,p14"
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
            "id": "h-ask",
            "t": "text",
            "text": "“Put me on that flight?”",
            "x": 3996,
            "y": 1610,
            "size": 46,
            "at": "l1:put me"
          },
          {
            "id": "h-wr",
            "t": "text",
            "text": "“In writing, please?”",
            "x": 3996,
            "y": 1690,
            "size": 46,
            "at": "l2:writing",
            "hl": [
              {
                "text": "In writing",
                "at": "l2:writing"
              }
            ]
          },
          {
            "id": "h-miss",
            "t": "text",
            "text": "Lỡ chuyến: ra quầy ngay",
            "x": 3996,
            "y": 1780,
            "size": 44,
            "at": "l3:desk",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "I saw the evening flight still has seats. Can you put me on that flight?",
          "sub": "Tôi thấy chuyến tối còn chỗ. Chị xếp tôi vào chuyến đó được không?",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Am I entitled to a meal or a hotel? Could I have that in writing, please?",
          "sub": "Tôi có được hỗ trợ bữa ăn, khách sạn không? Cho tôi xin xác nhận bằng văn bản?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Missed it yourself? Desk first, not the hotel.",
          "sub": "Còn tự lỡ chuyến? Ra ngay quầy, đừng về khách sạn."
        }
      ],
      "ref": "p12,p15"
    },
    {
      "id": "s19",
      "module": "BRK-10",
      "data": {
        "quote": "Hoá đơn hôm nay là tiền về ngày mai",
        "mark": "tiền về ngày mai",
        "by": "Rút ra từ một chuyến trễ",
        "illus": "receipt"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One traveller kept no receipts. Insurance paid nothing.",
          "sub": "Một người khách không giữ hoá đơn. Bảo hiểm không trả gì."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Today's receipts are tomorrow's money back.",
          "sub": "Hoá đơn hôm nay là tiền về ngày mai.",
          "keys": [
            "tiền về ngày mai"
          ]
        }
      ],
      "ref": "p16,p17"
    },
    {
      "id": "s20",
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
            "text": "Chờ chuyến tối",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:gate"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "airport",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "mobile-phone",
                "envelope"
              ]
            },
            "at": "l1:gate",
            "caption": "Nhìn lại tin nhắn Ngày 3",
            "icon": "mobile-phone"
          },
          {
            "id": "i-msg",
            "t": "text",
            "text": "Đã làm gì, làm gì tiếp",
            "x": 5964,
            "y": 1250,
            "size": 46,
            "at": "l2:police"
          },
          {
            "id": "i-what",
            "t": "text",
            "text": "→ người nhà bớt lo",
            "x": 5964,
            "y": 1330,
            "size": 50,
            "at": "l3:worry less",
            "color": "accent",
            "hl": [
              {
                "text": "bớt lo",
                "at": "l3:worry less"
              }
            ]
          },
          {
            "id": "i-claim",
            "t": "text",
            "text": "Về nhà: gửi hồ sơ sớm",
            "x": 5964,
            "y": 1430,
            "size": 48,
            "at": "l4:claims",
            "hl": [
              {
                "text": "gửi hồ sơ sớm",
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
          "say": "At the gate, Thảo rereads Dũng's message from day three.",
          "sub": "Chờ chuyến tối, Thảo đọc lại tin Dũng nhắn về nhà hôm Ngày 3."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I lost my passport. I've told the police. Tomorrow I'll go to the consulate. I'm fine.",
          "sub": "Con mất hộ chiếu, đã báo công an, mai con lên lãnh sự quán. Con vẫn ổn, có gì con gọi.",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Say what you did, so family worry less.",
          "sub": "Nói rõ việc đã làm, người nhà bớt lo; đi công tác thì báo công ty."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Back home, send claims early, with receipts. Time limits apply.",
          "sub": "Về đến nơi, gửi hồ sơ sớm, kèm giấy xác nhận, hoá đơn. Hồ sơ thường có thời hạn.",
          "keys": [
            "gửi hồ sơ sớm"
          ]
        }
      ],
      "ref": "p30,p31"
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
          }
        ],
        "items": [
          {
            "id": "i-map",
            "t": "text",
            "text": "Sáu sự cố, sáu bài",
            "x": 5964,
            "y": 1520,
            "size": 50,
            "at": "l1:deeper",
            "hl": [
              {
                "text": "sáu bài",
                "at": "l1:deeper"
              }
            ]
          },
          {
            "id": "i-b0",
            "t": "box",
            "x": 5964,
            "y": 1610,
            "w": 250,
            "h": 90,
            "at": "l2:passport+0",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "i-b1",
            "t": "box",
            "x": 6234,
            "y": 1610,
            "w": 250,
            "h": 90,
            "at": "l2:passport+450",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "i-b2",
            "t": "box",
            "x": 6504,
            "y": 1610,
            "w": 250,
            "h": 90,
            "at": "l2:passport+900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "i-b3",
            "t": "box",
            "x": 5964,
            "y": 1720,
            "w": 250,
            "h": 90,
            "at": "l2:passport+1350",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "i-b4",
            "t": "box",
            "x": 6234,
            "y": 1720,
            "w": 250,
            "h": 90,
            "at": "l2:passport+1800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "i-b5",
            "t": "box",
            "x": 6504,
            "y": 1720,
            "w": 250,
            "h": 90,
            "at": "l2:passport+2250",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "i-bt0",
            "t": "text",
            "text": "Hộ chiếu",
            "x": 5979,
            "y": 1630,
            "size": 38,
            "at": "l2:passport+120"
          },
          {
            "id": "i-bt1",
            "t": "text",
            "text": "Ví, thẻ",
            "x": 6249,
            "y": 1630,
            "size": 38,
            "at": "l2:passport+570"
          },
          {
            "id": "i-bt2",
            "t": "text",
            "text": "Chuyến bay",
            "x": 6519,
            "y": 1630,
            "size": 38,
            "at": "l2:passport+1020"
          },
          {
            "id": "i-bt3",
            "t": "text",
            "text": "Vali",
            "x": 5979,
            "y": 1740,
            "size": 38,
            "at": "l2:passport+1470"
          },
          {
            "id": "i-bt4",
            "t": "text",
            "text": "Bị ốm",
            "x": 6249,
            "y": 1740,
            "size": 38,
            "at": "l2:passport+1920"
          },
          {
            "id": "i-bt5",
            "t": "text",
            "text": "Mất phòng",
            "x": 6519,
            "y": 1740,
            "size": 38,
            "at": "l2:passport+2370"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "This lesson is the quick map. Each problem has a deeper lesson.",
          "sub": "Bài này là tấm bản đồ tra nhanh. Mỗi sự cố có một bài đào sâu.",
          "keys": [
            "tấm bản đồ tra nhanh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Passport, wallet, flight, luggage, sickness, hotel. In trouble? Open yours.",
          "sub": "Hộ chiếu, ví, chuyến bay, hành lý, bị ốm, khách sạn hết phòng. Đang gặp chuyện? Mở thẳng bài đúng sự cố.",
          "keys": [
            "Mở thẳng bài đúng sự cố"
          ]
        }
      ],
      "ref": "p32"
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
            "at": "l4",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Đêm Ngày 6 · Về nhà",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:six"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "airport",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "phone",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "center",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "wave",
                  "face": "happy"
                }
              ],
              "props": [
                "airplane-arrival",
                "house"
              ]
            },
            "at": "l1:home",
            "caption": "Sân bay nhà · cùng giờ ấy",
            "icon": "house"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“…họa vô đơn chí”",
            "x": 7932,
            "y": 1260,
            "size": 56,
            "at": "l2:alone",
            "color": "coral"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "có thứ tự, họa xếp hàng",
            "x": 7932,
            "y": 1360,
            "size": 52,
            "at": "l4:line",
            "color": "accent",
            "hl": [
              {
                "text": "họa xếp hàng",
                "at": "l4:waits in line"
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
          "say": "Day six, late night. Home.",
          "sub": "Đêm Ngày 6. Về tới nhà, cùng giờ như hôm đi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Six days, six problems. Troubles never come alone, huh?",
          "sub": "Sáu ngày, sáu chuyện. Đúng là họa vô đơn chí nha!",
          "face": "laugh",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Each had an order, Mum. Next time, numbers saved first.",
          "sub": "Chuyện nào cũng có thứ tự mẹ ạ. Chuyến sau, con lưu số khẩn cấp trước.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Troubles never come alone. But with an order, even trouble waits in line.",
          "sub": "Họa vô đơn chí. Nhưng có thứ tự, họa cũng phải xếp hàng.",
          "keys": [
            "họa cũng phải xếp hàng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 200
        }
      ],
      "ref": "outro"
    },
    {
      "id": "s23",
      "module": "BRK-09",
      "data": {
        "kind": "Số cần lưu",
        "title": "+84 981 84 84 84",
        "detail": "Tổng đài bảo hộ công dân, Cục Lãnh sự",
        "illus": "telephone-receiver",
        "around": [
          "sos-button",
          "classical-building"
        ],
        "icon": "phone"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Save this: plus eight four, nine eight one, eight four, eight four, eight four.",
          "sub": "Lưu số này: +84 981 84 84 84."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The citizen protection hotline.",
          "sub": "Tổng đài bảo hộ công dân."
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s24",
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
            "id": "j-n1",
            "t": "text",
            "text": "Số khẩn cấp nơi đến",
            "x": 7932,
            "y": 1490,
            "size": 46,
            "at": "l1:emergency"
          },
          {
            "id": "j-n2",
            "t": "text",
            "text": "Đường dây nóng bảo hiểm, thẻ",
            "x": 7932,
            "y": 1560,
            "size": 42,
            "at": "l1:insurance"
          },
          {
            "id": "j-n3",
            "t": "text",
            "text": "Đại sứ quán: trang Bộ Ngoại giao",
            "x": 7932,
            "y": 1630,
            "size": 40,
            "at": "l2:embassy",
            "hl": [
              {
                "text": "Bộ Ngoại giao",
                "at": "l2:foreign"
              }
            ]
          },
          {
            "id": "j-st",
            "t": "text",
            "text": "Số người lạ gửi",
            "x": 7932,
            "y": 1700,
            "size": 44,
            "at": "l2:never",
            "color": "muted"
          },
          {
            "id": "j-stx",
            "t": "strike",
            "over": "j-st",
            "at": "l2:never"
          },
          {
            "id": "j-prev",
            "t": "text",
            "text": "Phòng ngừa: chuỗi “Lần đầu”",
            "x": 7932,
            "y": 1780,
            "size": 40,
            "at": "l3:first trip",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Also: local emergency number, insurance hotline, card hotline.",
          "sub": "Lưu cả số khẩn cấp nước sở tại, đường dây nóng bảo hiểm, đường dây nóng thẻ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Embassy numbers from the Foreign Ministry website. Never from strangers.",
          "sub": "Cơ quan đại diện: tìm trên trang Bộ Ngoại giao. Không dùng số người lạ gửi.",
          "keys": [
            "Không dùng số người lạ gửi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Prevention? See our first trip abroad series.",
          "sub": "Phòng ngừa từ trước? Xem chuỗi “Lần đầu đi du lịch nước ngoài”."
        }
      ],
      "ref": "p3,p4"
    },
    {
      "id": "s25",
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
            "at": "l1:damage",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l2:papers",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:official",
            "fit": "J",
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
            "x": 720,
            "y": 1340,
            "at": "l1:damage"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8492,
            "y": 480,
            "at": "l2:papers"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 8632,
            "y": 1630,
            "at": "l3:official"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; quy định có thể thay đổi, tra trang chính thức. Không thay lời khuyên bác sĩ.",
            "x": 8752,
            "y": 1830,
            "size": 24,
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
          "say": "So, the first fifteen minutes: stop the damage first.",
          "sub": "Tóm lại, mười lăm phút đầu: chặn thiệt hại trước.",
          "keys": [
            "chặn thiệt hại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Get papers on the spot.",
          "sub": "Xin giấy tờ ngay tại chỗ.",
          "keys": [
            "Xin giấy tờ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And trust only official channels.",
          "sub": "Và chỉ tin kênh chính thức.",
          "keys": [
            "kênh chính thức"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s26",
      "module": "QUIZ-01",
      "ref": "questions[10]",
      "data": {
        "q": "Your wallet with bank cards is gone, what should you do before looking for it?",
        "options": [
          "Walk back to every shop you visited and ask the staff about it",
          "Lock the cards in the bank app or call the official card hotline",
          "Wait a day, because cards are rarely used by people who find them"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "credit-card",
        "why": "Khoá thẻ trước, tìm ví sau. Tìm lại được thì thường mở khoá ngay trên ứng dụng."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Your wallet with bank cards is gone, what should you do before looking for it?",
          "sub": "Ví có thẻ ngân hàng của bạn biến mất. Bạn nên làm gì trước khi đi tìm?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Lock the cards in the bank app or call the official card hotline.",
          "sub": "Khoá thẻ trên ứng dụng hoặc gọi đường dây nóng thẻ chính thức."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Lock first, look later. If you find the cards, you can usually unlock them in the app.",
          "sub": "Khoá trước, tìm sau. Tìm lại thì thường mở khoá được trên ứng dụng."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s27",
      "module": "END-05",
      "data": {
        "text": "Lưu số khẩn cấp ngay hôm nay",
        "sub": "Rồi làm 40 câu hỏi bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Save your emergency numbers today, then try the forty questions. Next: a lost passport.",
          "sub": "Lưu số khẩn cấp ngay hôm nay, rồi làm bốn mươi câu hỏi. Bài sau: mất hộ chiếu."
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s22"
  }
};
