// vn-power-of-attorney-for-property--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "vn-power-of-attorney-for-property--w01",
  "unit": {
    "audience": "emigrants-keeping-property-in-vietnam",
    "slug": "vn-power-of-attorney-for-property",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Uỷ quyền cho người thân quản lý nhà đất thế nào cho an toàn?",
    "series": "Nhà đất ở quê khi mình ở nước ngoài — cho người định cư giữ, cho thuê, chuyển giao tài sản đúng luật"
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
            "text": "“toàn quyền",
            "x": 60,
            "y": 80,
            "size": 110,
            "at": "l1:full",
            "color": "coral"
          },
          {
            "id": "a-q2",
            "t": "text",
            "text": "quản lý, định đoạt”",
            "x": 120,
            "y": 230,
            "size": 96,
            "at": "l1:dispose",
            "color": "coral",
            "hl": [
              {
                "text": "định đoạt",
                "at": "l1:dispose"
              }
            ]
          },
          {
            "id": "a-s",
            "t": "text",
            "text": "Trong một mẫu miễn phí trên mạng",
            "x": 60,
            "y": 400,
            "size": 44,
            "at": "l2:sample",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Full power to manage and dispose.",
          "sub": "“Toàn quyền quản lý, định đoạt.”",
          "keys": [
            "Toàn quyền"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Six words, in a free sample from the internet. They sound so tidy.",
          "sub": "Mấy chữ ấy nằm trong một mẫu miễn phí trên mạng. Nghe gọn gàng quá chừng."
        }
      ],
      "beats": {
        "after": 400
      },
      "ref": "p7,p9"
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
            "at": "l5",
            "fit": "A",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "a-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 920,
            "y": 130,
            "w": 720,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "phone",
                  "face": "happy",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "mobile-phone",
                "page-facing-up"
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai · gọi video hai đầu",
            "icon": "mobile-phone"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "Thảo: ở nước ngoài, có căn hộ",
            "x": 60,
            "y": 500,
            "size": 40,
            "at": "l2:apartment"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "Dũng: ở nhà, lo cho thuê",
            "x": 60,
            "y": 560,
            "size": 40,
            "at": "l1:rents"
          },
          {
            "id": "a-k",
            "t": "text",
            "text": "Chi tiết đáng chú ý: “toàn quyền”",
            "x": 60,
            "y": 650,
            "size": 42,
            "at": "l5:detail",
            "color": "accent",
            "hl": [
              {
                "text": "“toàn quyền”",
                "at": "l5:full power"
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
          "say": "Meet Dũng, at home, who rents out his aunt's apartment. He found the sample.",
          "sub": "Đây là Dũng, ở quê, lo việc cho thuê căn hộ của cô mình. Dũng tìm ra mẫu ấy.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Thảo, his aunt, settled abroad, owner of that apartment in town.",
          "sub": "Còn đây là Thảo, cô của Dũng, định cư nước ngoài, chủ căn hộ ở thị trấn.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Aunt Thảo, new tenants next month! I sent you a sample authority. Just sign!",
          "sub": "Cô Thảo ơi, tháng sau có khách thuê mới! Cháu gửi cô mẫu uỷ quyền rồi, cô ký là xong!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Looks official. Let me read it tonight.",
          "sub": "Nhìn cũng chuyên nghiệp. Để tối nay cô đọc.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "But one detail matters more than the rest: full power.",
          "sub": "Nhưng có một chi tiết đáng chú ý hơn cả: chữ “toàn quyền”.",
          "keys": [
            "toàn quyền"
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
            "text": "Uỷ quyền thật ra là gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:really",
            "hl": [
              {
                "text": "thật ra là gì",
                "at": "l1:really"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Trao người khác làm thay",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:act",
            "color": "accent",
            "hl": [
              {
                "text": "làm thay",
                "at": "l2:act"
              }
            ]
          },
          {
            "id": "b-1b",
            "t": "text",
            "text": "ký hợp đồng, nộp hồ sơ",
            "x": 2048,
            "y": 245,
            "size": 40,
            "at": "l2:contracts"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Nhà vẫn đứng tên bạn",
            "x": 2028,
            "y": 320,
            "size": 52,
            "at": "l3:name",
            "hl": [
              {
                "text": "vẫn đứng tên bạn",
                "at": "l3:your name"
              }
            ]
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Vượt phạm vi, sai hình thức",
            "x": 2928,
            "y": 170,
            "size": 42,
            "at": "l4:beyond",
            "color": "coral"
          },
          {
            "id": "b-3b",
            "t": "text",
            "text": "→ có thể bị tuyên vô hiệu",
            "x": 2948,
            "y": 240,
            "size": 42,
            "at": "l4:invalid",
            "hl": [
              {
                "text": "vô hiệu",
                "at": "l4:invalid"
              }
            ]
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "Nên uỷ quyền khi ở nước ngoài",
            "x": 2928,
            "y": 330,
            "size": 40,
            "at": "l5:abroad"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật 13/12/2025",
            "x": 2028,
            "y": 400,
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
          "say": "So what is a power of attorney, really?",
          "sub": "Vậy uỷ quyền thật ra là gì?",
          "keys": [
            "thật ra là gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The owner gives someone power to act for them, like signing contracts or filing papers.",
          "sub": "Là chủ sở hữu lập văn bản trao quyền cho người khác làm thay, như ký hợp đồng, nộp hồ sơ.",
          "keys": [
            "làm thay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It does not change ownership. The house stays in your name.",
          "sub": "Uỷ quyền không làm thay đổi quyền sở hữu. Nhà đất vẫn đứng tên bạn.",
          "keys": [
            "vẫn đứng tên bạn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The person may only act within the written scope. Go beyond it, or use the wrong form, and a deal may be declared invalid.",
          "sub": "Người được uỷ quyền chỉ làm trong phạm vi đã ghi. Vượt phạm vi hoặc sai hình thức, giao dịch có thể bị tuyên vô hiệu khi tranh chấp.",
          "keys": [
            "vô hiệu"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And it makes sense when you can't do things in person, like living abroad.",
          "sub": "Uỷ quyền hợp lý khi chủ nhà không thể trực tiếp làm, như đi công tác hay ở nước ngoài."
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s03",
      "module": "BRK-07",
      "data": {
        "question": "Ký uỷ quyền cho con rồi, khỏi cần theo dõi?",
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
          "say": "Sign for your child, then stop watching?",
          "sub": "Ký uỷ quyền cho con rồi, khỏi cần theo dõi?",
          "keys": [
            "khỏi cần theo dõi"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
          }
        ],
        "items": [
          {
            "id": "b-m1",
            "t": "text",
            "text": "Ký cho con = giao nhà cho con",
            "x": 2028,
            "y": 470,
            "size": 40,
            "at": "l1:handed",
            "color": "muted"
          },
          {
            "id": "b-m1x",
            "t": "strike",
            "over": "b-m1",
            "at": "l3:Both"
          },
          {
            "id": "b-m2",
            "t": "text",
            "text": "Sợ uỷ quyền vì sợ mất nhà",
            "x": 2928,
            "y": 470,
            "size": 40,
            "at": "l2:afraid",
            "color": "muted"
          },
          {
            "id": "b-m2x",
            "t": "strike",
            "over": "b-m2",
            "at": "l3:wrong"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 590,
            "w": 520,
            "h": 110,
            "at": "l4:three+300",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2588,
            "y": 590,
            "w": 520,
            "h": 110,
            "at": "l4:three+700",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 3148,
            "y": 590,
            "w": 520,
            "h": 110,
            "at": "l4:three+1100",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "1. Viết hẹp",
            "x": 2058,
            "y": 610,
            "size": 50,
            "at": "l4:three+450"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "2. Có thời hạn",
            "x": 2618,
            "y": 610,
            "size": 50,
            "at": "l4:three+850"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "3. Ký đúng nơi",
            "x": 3178,
            "y": 610,
            "size": 50,
            "at": "l4:three+1250"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Some think signing for a child means the house is handed over, and stop following anything.",
          "sub": "Có người nghĩ ký uỷ quyền cho con là coi như giao nhà cho con, rồi chẳng theo dõi gì nữa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Others are afraid to sign at all, thinking they'll lose the house.",
          "sub": "Ngược lại, có người sợ uỷ quyền vì tưởng mình mất nhà."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Both are wrong. Authority is handing over tasks, not handing over the house.",
          "sub": "Cả hai đều chưa đúng. Uỷ quyền là giao việc, không phải giao nhà.",
          "keys": [
            "giao việc, không phải giao nhà"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So three weeks of Thảo's paper, in three ideas: narrow, time limited, signed in the right place.",
          "sub": "Ba tuần Thảo làm lại tờ giấy, gói trong ba ý: viết hẹp, có thời hạn, ký đúng nơi.",
          "keys": [
            "ba ý"
          ]
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
            "text": "① Thứ Ba · Rủi ro nằm đâu?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First stop"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "1. Uỷ quyền toàn phần",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l2:full",
            "color": "coral",
            "hl": [
              {
                "text": "toàn phần",
                "at": "l2:full authority"
              }
            ]
          },
          {
            "id": "c-1b",
            "t": "text",
            "text": "bán, nhận tiền, giao sổ đỏ",
            "x": 4036,
            "y": 240,
            "size": 40,
            "at": "l2:sell"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "2. Giấy tờ, công chứng giả",
            "x": 3996,
            "y": 320,
            "size": 50,
            "at": "l3:fake"
          },
          {
            "id": "c-2b",
            "t": "text",
            "text": "giả danh chủ đất",
            "x": 4036,
            "y": 390,
            "size": 40,
            "at": "l3:pretends"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "3. Nội dung mơ hồ, lạm quyền",
            "x": 3996,
            "y": 470,
            "size": 50,
            "at": "l4:vague"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật 13/12/2025",
            "x": 3996,
            "y": 720,
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
          "say": "First stop: Tuesday. Thảo reads the article everyone shares. Three risks.",
          "sub": "Chặng một: thứ Ba. Thảo đọc bài viết ai cũng chia sẻ. Ba rủi ro."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: full authority, letting someone sell, take the money and hand over the red book.",
          "sub": "Một: uỷ quyền toàn phần, cho phép bán, nhận tiền, giao sổ đỏ. Chủ nhà mất kiểm soát.",
          "keys": [
            "uỷ quyền toàn phần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: fake documents or fake notarisation, or someone who pretends to be the owner.",
          "sub": "Hai: giấy tờ, công chứng giả, hoặc kẻ giả danh chủ đất.",
          "keys": [
            "giả danh chủ đất"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: disputes, when wording is vague or someone abuses the power.",
          "sub": "Ba: tranh chấp khi nội dung không rõ, hoặc có lạm quyền."
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s06",
      "module": "BRK-06",
      "data": {
        "title": "Ba rủi ro khi uỷ quyền",
        "items": [
          {
            "illus": "money-with-wings",
            "text": "Uỷ quyền toàn phần"
          },
          {
            "illus": "detective",
            "text": "Giấy tờ giả"
          },
          {
            "illus": "crossed-swords",
            "text": "Lạm quyền, tranh chấp"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Full power, fake papers, fights.",
          "sub": "Toàn quyền, giấy giả, tranh chấp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three ways to lose control.",
          "sub": "Ba đường mất kiểm soát.",
          "keys": [
            "mất kiểm soát"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
            "id": "c-4",
            "t": "text",
            "text": "“Uỷ quyền thay cho bán”",
            "x": 4836,
            "y": 170,
            "size": 50,
            "at": "l1:instead",
            "color": "muted"
          },
          {
            "id": "c-4x",
            "t": "strike",
            "over": "c-4",
            "at": "l2:shaky"
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "Luật ghi nhận: hợp đồng chuyển nhượng",
            "x": 4836,
            "y": 260,
            "size": 38,
            "at": "l1:transfer",
            "color": "accent",
            "hl": [
              {
                "text": "hợp đồng chuyển nhượng",
                "at": "l1:transfer contract"
              }
            ]
          },
          {
            "id": "c-6",
            "t": "text",
            "text": "→ bấp bênh cho cả hai bên",
            "x": 4856,
            "y": 330,
            "size": 42,
            "at": "l2:shaky",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A second article warns: the law recognises a land sale through a transfer contract, not authority used instead of a sale.",
          "sub": "Một bài khác cảnh báo: luật ghi nhận chuyển nhượng qua hợp đồng chuyển nhượng, không phải giấy uỷ quyền thay cho bán.",
          "keys": [
            "hợp đồng chuyển nhượng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "That trick leaves buyer and seller on shaky ground. The selling lesson comes back to it.",
          "sub": "Dùng uỷ quyền để mua bán là đặt cả hai bên vào thế bấp bênh. Bài bán nhà khi ở xa sẽ quay lại điểm này.",
          "keys": [
            "bấp bênh"
          ]
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s08",
      "module": "DLG-01",
      "data": {
        "set": "online",
        "label": "Thứ Tư · ký mẫu cho nhanh",
        "actors": [
          {
            "id": "thao",
            "side": "left"
          },
          {
            "id": "dung",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Ký nguyên mẫu “toàn quyền”",
          "why": "Chữ toàn quyền mở cửa cho mọi việc, kể cả việc chủ nhà không muốn.",
          "rule": "Viết đúng việc, cấm thẳng điều không được"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Fine. I'll sign the sample as it is. Full power saves time.",
          "sub": "Thôi được. Cô ký nguyên mẫu. Toàn quyền cho đỡ mất thời gian.",
          "pose": "explain",
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
          "say": "Full power opens every door, including the ones you'd never open. Ask your mother.",
          "sub": "Toàn quyền mở mọi cánh cửa, kể cả cửa bạn không bao giờ muốn mở. Hỏi mẹ bạn xem.",
          "keys": [
            "mở mọi cánh cửa"
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
          "say": "Mom, didn't your friend sign something like this?",
          "sub": "Mẹ ơi, bạn của mẹ ngày trước có ký giấy kiểu này không?",
          "phase": "redo",
          "face": "thinking"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p8"
    },
    {
      "id": "s09",
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
            "text": "② Thứ Tư · Chuyện bạn của mẹ",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second stop"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 130,
            "w": 720,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "tu",
                  "side": "center",
                  "pose": "explain",
                  "face": "sad",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "house",
                "page-facing-up"
              ]
            },
            "at": "l1:Bà Tư",
            "caption": "Thứ Tư · Bà Tư kể chuyện cũ",
            "icon": "house"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Trước khi đi: “toàn quyền” cho cháu",
            "x": 5964,
            "y": 170,
            "size": 40,
            "at": "l2:full power"
          },
          {
            "id": "d-1b",
            "t": "text",
            "text": "chỉ để tiện cho thuê",
            "x": 6004,
            "y": 235,
            "size": 40,
            "at": "l2:rent",
            "color": "muted"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Vài năm sau: người lạ dọn đến",
            "x": 5964,
            "y": 310,
            "size": 44,
            "at": "l3:strangers",
            "color": "coral",
            "hl": [
              {
                "text": "người lạ",
                "at": "l3:strangers"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Cháu ký giấy với người khác",
            "x": 5964,
            "y": 385,
            "size": 40,
            "at": "l4:sign"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "“Toàn quyền” mở cửa cho mọi việc",
            "x": 5964,
            "y": 520,
            "size": 46,
            "at": "l5:everything",
            "color": "accent",
            "hl": [
              {
                "text": "mọi việc",
                "at": "l5:everything"
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
          "say": "Second stop: Wednesday. Thảo's mother, Bà Tư, lives with her now.",
          "sub": "Chặng hai: thứ Tư. Mẹ Thảo, Bà Tư, giờ sống cùng Thảo.",
          "keys": [
            "Bà Tư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "tu",
          "say": "My friend signed full power to manage and dispose, for her nephew. Only so he could rent it out.",
          "sub": "Bạn mẹ ký cho cháu “toàn quyền quản lý, định đoạt” căn nhà, chỉ mong cháu tiện cho thuê.",
          "face": "sad",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "tu",
          "say": "Years later, neighbours called. Strangers had moved in.",
          "sub": "Vài năm sau, hàng xóm báo có người lạ dọn đến ở.",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Her nephew had used that same paper to sign with other people, without asking her.",
          "sub": "Hoá ra người cháu đã dùng chính văn bản đó ký giấy tờ với người khác mà không hỏi bà.",
          "keys": [
            "không hỏi bà"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Full power opens the door to everything, even what you never wanted.",
          "sub": "Chữ “toàn quyền” mở cửa cho mọi việc, kể cả việc bạn không muốn.",
          "keys": [
            "mở cửa cho mọi việc"
          ]
        }
      ],
      "ref": "p7,p8"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Năm · Viết phạm vi",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third stop"
          },
          {
            "id": "e-p",
            "t": "text",
            "text": "Chọn người: thân tín, hiểu luật",
            "x": 7932,
            "y": 170,
            "size": 44,
            "at": "l2:trusted",
            "hl": [
              {
                "text": "thân tín",
                "at": "l2:trusted"
              }
            ]
          },
          {
            "id": "e-p2",
            "t": "text",
            "text": "hoặc nhờ luật sư",
            "x": 7972,
            "y": 240,
            "size": 40,
            "at": "l2:lawyer",
            "color": "muted"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Ghi rõ: việc · địa điểm · thời hạn",
            "x": 7932,
            "y": 320,
            "size": 44,
            "at": "l3:tasks",
            "color": "accent"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Tránh: “được toàn quyền định đoạt”",
            "x": 7932,
            "y": 400,
            "size": 40,
            "at": "l3:avoid",
            "color": "coral"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Tổ chức công chứng hoặc UBND xã",
            "x": 7932,
            "y": 480,
            "size": 36,
            "at": "l4:notary"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "Mang giấy tờ gốc, đọc kỹ",
            "x": 7972,
            "y": 540,
            "size": 38,
            "at": "l4:originals"
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "Viết hẹp → ai cũng kiểm được",
            "x": 7932,
            "y": 620,
            "size": 44,
            "at": "l5:check",
            "color": "accent",
            "hl": [
              {
                "text": "kiểm được",
                "at": "l5:check"
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
          "say": "Third stop: Thursday. Thảo rewrites the paper, line by line.",
          "sub": "Chặng ba: thứ Năm. Thảo viết lại tờ giấy, từng dòng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Start with the person: someone trusted with some legal sense, or a lawyer.",
          "sub": "Bắt đầu từ chọn người: chỉ uỷ quyền cho người thân tín, có hiểu biết pháp luật, hoặc nhờ luật sư.",
          "keys": [
            "người thân tín"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then write the tasks, the place and the time limit. Avoid full power, and full power to dispose.",
          "sub": "Rồi ghi rõ việc được làm, địa điểm, thời hạn. Tránh cụm “toàn quyền” và “được toàn quyền định đoạt”.",
          "keys": [
            "ghi rõ việc được làm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Notarise it at a notary office or the commune People's Committee. Bring originals, read every line.",
          "sub": "Công chứng tại tổ chức hành nghề công chứng hoặc Uỷ ban nhân dân cấp xã; mang đủ giấy tờ gốc, đọc kỹ trước khi ký."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A narrow, clear paper lets tenants, notaries and officials check it at a glance.",
          "sub": "Văn bản hẹp mà rõ giúp người thuê, công chứng viên, cán bộ tiếp nhận kiểm được ngay.",
          "keys": [
            "kiểm được ngay"
          ]
        }
      ],
      "ref": "p9,p10"
    },
    {
      "id": "s11",
      "module": "BRK-04",
      "data": {
        "title": "Câu uỷ quyền của Thảo",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Bên B được toàn quyền quản lý, định đoạt nhà đất",
        "right": "Chỉ ký hợp đồng thuê; tiền vào tài khoản bên A; cấm bán",
        "wrongIllus": "unlocked",
        "rightIllus": "locked-with-key"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before: full power to manage and dispose.",
          "sub": "Trước: toàn quyền quản lý, định đoạt."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After: sign leases only, rent to her account, no selling.",
          "sub": "Sau: chỉ ký hợp đồng thuê, tiền vào tài khoản chủ, cấm bán.",
          "keys": [
            "cấm bán"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p11"
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
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8792,
            "y": 130,
            "w": 720,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "fountain-pen",
                "page-facing-up"
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Năm · bản “sau”",
            "icon": "fountain-pen"
          },
          {
            "id": "e-s1",
            "t": "text",
            "text": "ký HĐ thuê, ≤ [ ] tháng",
            "x": 8792,
            "y": 630,
            "size": 34,
            "at": "l1:lease"
          },
          {
            "id": "e-s2",
            "t": "text",
            "text": "tiền → TK đứng tên bên A",
            "x": 8792,
            "y": 675,
            "size": 34,
            "at": "l1:account"
          },
          {
            "id": "e-s3",
            "t": "text",
            "text": "không bán, tặng, thế chấp",
            "x": 8792,
            "y": 720,
            "size": 34,
            "at": "l2:mortgage",
            "color": "coral",
            "hl": [
              {
                "text": "không bán",
                "at": "l2:not sell"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Được làm: rõ. Không được: thẳng.",
            "x": 7932,
            "y": 700,
            "size": 40,
            "at": "l3:clearly",
            "color": "accent",
            "hl": [
              {
                "text": "thẳng",
                "at": "l3:straight"
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
          "say": "Party B signs a lease for my apartment, for no more than so many months, rent into my account.",
          "sub": "Bên B được thay Bên A ký hợp đồng cho thuê căn hộ, thời hạn thuê không quá [ ] tháng; tiền thuê vào tài khoản đứng tên Bên A.",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Party B may not sell, give away or mortgage it. Authority from this date, to that date.",
          "sub": "Bên B không được bán, tặng cho, thế chấp. Thời hạn uỷ quyền: từ [ ] đến [ ].",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Write what may be done clearly. Write what may not be done straight.",
          "sub": "Viết điều được làm cho rõ, viết điều không được làm cho thẳng.",
          "keys": [
            "cho thẳng"
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
            "text": "④ Thứ Sáu · Giấy cũ hết hạn?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth stop"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 920,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "hold",
                  "face": "worried"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "surprised"
                }
              ],
              "props": [
                "page-with-curl",
                "tear-off-calendar"
              ]
            },
            "at": "l1:Friday",
            "caption": "Thứ Sáu · Dũng lục giấy cũ",
            "icon": "page-with-curl"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Giấy cũ: không ghi thời hạn",
            "x": 60,
            "y": 1260,
            "size": 44,
            "at": "l2:no end date",
            "color": "coral"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "ký hơn một năm trước",
            "x": 100,
            "y": 1330,
            "size": 40,
            "at": "l3:year"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: Friday. Dũng finds Thảo's old authority, from before the new one.",
          "sub": "Chặng bốn: thứ Sáu. Dũng tìm thấy tờ uỷ quyền cũ của Thảo, có từ trước bản mới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Aunt, why not use the old one? It has no end date. Lasts forever, right?",
          "sub": "Cô ơi, dùng luôn tờ cũ được không? Không ghi thời hạn, vậy là mãi mãi nhỉ?",
          "face": "happy",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I signed it more than a year ago, and forgot the time limit.",
          "sub": "Cô ký từ hơn một năm trước, mà quên ghi thời hạn.",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Forever? Not quite.",
          "sub": "Mãi mãi? Không hẳn đâu."
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s14",
      "module": "BRK-03",
      "data": {
        "value": 1,
        "suffix": " năm",
        "label": "hiệu lực uỷ quyền khi không thoả thuận thời hạn",
        "illus": "tear-off-calendar"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "No agreed term, none set by law?",
          "sub": "Không thoả thuận, luật không quy định thời hạn?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One year, from the day it was made.",
          "sub": "Một năm, kể từ ngày xác lập việc uỷ quyền.",
          "keys": [
            "Một năm"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "nhan"
        }
      ],
      "ref": "p13"
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
            "id": "f-563",
            "t": "text",
            "text": "Điều 563 BLDS 2015: 01 năm",
            "x": 60,
            "y": 1420,
            "size": 46,
            "at": "l1:five six three",
            "color": "accent",
            "hl": [
              {
                "text": "01 năm",
                "at": "l1:expired"
              }
            ]
          },
          {
            "id": "f-564",
            "t": "text",
            "text": "Điều 564: uỷ quyền lại?",
            "x": 60,
            "y": 1490,
            "size": 40,
            "at": "l2:five six four"
          },
          {
            "id": "f-564b",
            "t": "text",
            "text": "chỉ khi đồng ý, bất khả kháng",
            "x": 100,
            "y": 1550,
            "size": 32,
            "at": "l2:force majeure",
            "color": "muted"
          },
          {
            "id": "f-569",
            "t": "text",
            "text": "Điều 569: đơn phương chấm dứt",
            "x": 60,
            "y": 1620,
            "size": 40,
            "at": "l3:five six nine",
            "hl": [
              {
                "text": "đơn phương chấm dứt",
                "at": "l3:end"
              }
            ]
          },
          {
            "id": "f-tip",
            "t": "text",
            "text": "Giữ liên lạc · hỏi tiến độ",
            "x": 60,
            "y": 1690,
            "size": 40,
            "at": "l4:touch"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Ghi thời hạn · ghi ngày vào lịch",
            "x": 920,
            "y": 1730,
            "size": 38,
            "at": "l5:calendar",
            "color": "accent",
            "hl": [
              {
                "text": "vào lịch",
                "at": "l5:calendar"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật, dẫn BLDS 2015",
            "x": 60,
            "y": 1795,
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
          "say": "That's Article five six three of the Civil Code 2015, as the article cites. Her old paper may have expired.",
          "sub": "Đó là Điều 563 Bộ luật Dân sự 2015 như bài nguồn dẫn. Tờ cũ của Thảo có thể đã hết hiệu lực.",
          "keys": [
            "hết hiệu lực"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article five six four: Dũng may pass the power on only with her consent, or by force majeure, never beyond the scope.",
          "sub": "Điều 564: Dũng chỉ được uỷ quyền lại khi Thảo đồng ý hoặc do bất khả kháng, và không vượt phạm vi ban đầu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And Article five six nine: Thảo may end the authority on her own.",
          "sub": "Điều 569: bên uỷ quyền được đơn phương chấm dứt hợp đồng uỷ quyền.",
          "keys": [
            "đơn phương chấm dứt"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Practical tip: stay in touch, ask for updates, and if you suspect abuse, end it in writing.",
          "sub": "Lời khuyên thực tế: giữ liên lạc, yêu cầu cập nhật tiến độ; nghi sai phạm thì lập văn bản chấm dứt uỷ quyền."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Write the time limit in the paper, and the end date in your calendar.",
          "sub": "Ghi thời hạn vào văn bản, ghi ngày hết hạn vào lịch.",
          "keys": [
            "ghi ngày hết hạn vào lịch"
          ]
        }
      ],
      "ref": "p13,p14,p16"
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
            "at": "l5",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Tuần hai · Ký nơi mình sống",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth stop"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2888,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "classical-building",
                "envelope"
              ]
            },
            "at": "l1:consulate",
            "caption": "Tuần hai · cơ quan đại diện Việt Nam",
            "icon": "classical-building"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Gọi hỏi lịch hẹn, giấy tờ",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "l2:appointment"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Ký trước người có thẩm quyền",
            "x": 2028,
            "y": 1335,
            "size": 44,
            "at": "l4:in front",
            "hl": [
              {
                "text": "có thẩm quyền",
                "at": "l4:authorised official"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Công chứng tại cơ quan đại diện",
            "x": 2028,
            "y": 1410,
            "size": 40,
            "at": "l4:notarised",
            "color": "accent"
          },
          {
            "id": "g-env",
            "t": "illus",
            "name": "envelope",
            "x": 2028,
            "y": 1500,
            "size": 100,
            "at": "l5:post"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Gửi BẢN GỐC về nước",
            "x": 2148,
            "y": 1515,
            "size": 50,
            "at": "l5:original",
            "color": "coral",
            "hl": [
              {
                "text": "BẢN GỐC",
                "at": "l5:original"
              }
            ]
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "Luật Công chứng 2014: hỏi trước",
            "x": 2028,
            "y": 1650,
            "size": 32,
            "at": "l6:2014",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: week two. Thảo goes to the Vietnamese consulate where she lives.",
          "sub": "Chặng năm: tuần thứ hai. Thảo đến cơ quan đại diện Việt Nam nơi mình sống."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "First she calls to ask for an appointment and the papers to bring.",
          "sub": "Trước đó, Thảo gọi hỏi lịch hẹn và giấy tờ cần mang."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I'm here to sign an authority for my nephew in Vietnam.",
          "sub": "Tôi đến ký văn bản uỷ quyền cho cháu ở Việt Nam.",
          "pose": "hold",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "She signs in front of the authorised official, and the authority is notarised right there.",
          "sub": "Thảo ký trước người có thẩm quyền, văn bản uỷ quyền được công chứng tại cơ quan đại diện ngoại giao, lãnh sự."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then she sends the original home by post. Not a scan. The original.",
          "sub": "Rồi gửi bản gốc về nước qua bưu điện. Không phải bản scan. Bản gốc.",
          "keys": [
            "bản gốc"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "The source article is based on the Notary Law 2014, so ask your mission about details first.",
          "sub": "Bài nguồn dựa trên Luật Công chứng 2014, nên hỏi trước cơ quan đại diện nơi bạn ở về thủ tục cụ thể."
        }
      ],
      "ref": "p17,p18"
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
            "text": "⑥ Tuần ba · Hoàn tất ở quê",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sixth stop"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "envelope",
                "page-facing-up"
              ]
            },
            "at": "l2:Cô Hoa",
            "caption": "Tuần ba · văn phòng công chứng gần nhà",
            "icon": "page-facing-up"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Mang bản gốc đến công chứng",
            "x": 3996,
            "y": 1260,
            "size": 44,
            "at": "l1:original"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "nơi người được uỷ quyền cư trú",
            "x": 4016,
            "y": 1330,
            "size": 40,
            "at": "l5:live"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Công chứng tiếp vào bản gốc",
            "x": 3996,
            "y": 1410,
            "size": 46,
            "at": "l5:onto",
            "color": "accent",
            "hl": [
              {
                "text": "vào bản gốc",
                "at": "l5:onto"
              }
            ]
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "Bản scan qua email",
            "x": 3996,
            "y": 1500,
            "size": 44,
            "at": "l3:scan",
            "color": "muted"
          },
          {
            "id": "h-4x",
            "t": "strike",
            "over": "h-4",
            "at": "l4:Originals"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: week three. The envelope arrives. Dũng carries the original to a notary near home.",
          "sub": "Chặng sáu: tuần thứ ba. Phong bì về tới nơi. Dũng mang bản gốc ra văn phòng công chứng gần nhà."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Cô Hoa, the notary in town. Brisk, and allergic to shortcuts.",
          "sub": "Đây là Cô Hoa, công chứng viên ở thị trấn. Dứt khoát, và dị ứng với đường tắt.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "My aunt emailed me a scan too, just in case. Can we use that?",
          "sub": "Cô cháu có gửi kèm bản scan qua email nữa. Dùng bản đó được không cô?",
          "face": "happy",
          "pose": "hold"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Originals only. We notarise onto the original. Right, done!",
          "sub": "Chỉ bản gốc thôi. Cô công chứng tiếp vào bản gốc. Rồi, vậy nha!",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The person authorised brings the original where they live, for the next notarisation onto it.",
          "sub": "Người được uỷ quyền mang bản gốc đến tổ chức công chứng nơi mình cư trú, công chứng tiếp vào bản gốc.",
          "keys": [
            "công chứng tiếp vào bản gốc"
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
      "ref": "p18,p19"
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
            "id": "h-k1",
            "t": "text",
            "text": "Ký nơi mình sống",
            "x": 3996,
            "y": 1610,
            "size": 50,
            "at": "l1:Sign"
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "→ hoàn tất nơi có nhà",
            "x": 3996,
            "y": 1680,
            "size": 50,
            "at": "l1:finish",
            "color": "accent"
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "Luôn gửi bản gốc",
            "x": 3996,
            "y": 1755,
            "size": 56,
            "at": "l1:always",
            "color": "coral",
            "hl": [
              {
                "text": "bản gốc",
                "at": "l1:original"
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
          "say": "Sign where you live, finish where the house is, and always send the original.",
          "sub": "Ký ở nơi bạn sống, hoàn tất ở nơi có nhà, và luôn gửi bản gốc.",
          "keys": [
            "luôn gửi bản gốc"
          ]
        }
      ],
      "ref": "p20"
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
            "at": "l4",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Cuối tháng · Ký hợp đồng thuê",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:month"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "key",
                "page-facing-up"
              ]
            },
            "at": "l1:month",
            "caption": "Cuối tháng · khách thuê nhận chìa khoá",
            "icon": "key"
          },
          {
            "id": "i-q",
            "t": "text",
            "text": "“toàn quyền quản lý, định đoạt”",
            "x": 5964,
            "y": 1260,
            "size": 44,
            "at": "l3:full power",
            "color": "muted"
          },
          {
            "id": "i-qx",
            "t": "strike",
            "over": "i-q",
            "at": "l3:gone"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Chỉ thuê · tiền về tài khoản Thảo",
            "x": 5964,
            "y": 1350,
            "size": 42,
            "at": "l3:lease",
            "color": "accent"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Có ngày hết hạn trong lịch",
            "x": 5964,
            "y": 1430,
            "size": 42,
            "at": "l4:calendars",
            "hl": [
              {
                "text": "ngày hết hạn",
                "at": "l4:end date"
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
          "say": "End of the month. New tenants, a new lease.",
          "sub": "Cuối tháng. Khách thuê mới, hợp đồng thuê mới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Lease signed, Aunt. The tenant even read my authority, and checked it in a minute.",
          "sub": "Ký xong rồi cô ơi. Khách còn đọc giấy uỷ quyền của cháu, một phút là kiểm xong.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Full power to manage and dispose? Gone. Just the lease, rent to Thảo's account.",
          "sub": "“Toàn quyền quản lý, định đoạt”? Biến mất. Chỉ hợp đồng thuê, tiền về tài khoản Thảo.",
          "keys": [
            "Biến mất"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And the end date sits in two calendars, his and hers.",
          "sub": "Còn ngày hết hạn nằm trong hai cuốn lịch, của Dũng và của Thảo.",
          "keys": [
            "ngày hết hạn"
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
      "ref": "p12,p16"
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
            "at": "l2",
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l2:tasks",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l5:end",
            "fit": "J",
            "ms": 1000
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Bốn việc · việc làm ngay",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 3528,
            "y": 40,
            "at": "l2:tasks+900"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9432,
            "y": 40,
            "at": "l3:narrow"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1560,
            "y": 1130,
            "at": "l4:time limit"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 5496,
            "y": 1130,
            "at": "l5:mission"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Đọc lại giấy uỷ quyền đang có",
            "x": 7932,
            "y": 1270,
            "size": 46,
            "at": "l6:reread",
            "color": "accent"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Gạch dưới mọi chữ “toàn quyền”",
            "x": 7932,
            "y": 1350,
            "size": 46,
            "at": "l6:underline"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Gạch dưới ngày hết hạn",
            "x": 7932,
            "y": 1430,
            "size": 46,
            "at": "l6:end date"
          },
          {
            "id": "j-nx",
            "t": "text",
            "text": "Bài tiếp: cho thuê và thuế",
            "x": 7932,
            "y": 1540,
            "size": 38,
            "at": "l7:Next",
            "color": "muted"
          },
          {
            "id": "j-note",
            "t": "text",
            "text": "Bài để tham khảo, không phải tư vấn vụ việc cụ thể. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1730,
            "size": 26,
            "at": "l7",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "j-note2",
            "t": "text",
            "text": "Quy định có thể thay đổi: kiểm lại với cơ quan, chuyên gia trước khi làm.",
            "x": 7932,
            "y": 1770,
            "size": 26,
            "at": "l7",
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
          "say": "So, safe authority is four jobs.",
          "sub": "Tóm lại, uỷ quyền an toàn gồm bốn việc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: authority hands over tasks, not the house.",
          "sub": "Một: uỷ quyền là giao việc, không phải giao nhà.",
          "keys": [
            "giao việc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: pick someone truly trusted, and keep the scope narrow, with what's forbidden.",
          "sub": "Hai: chọn người thật đáng tin, viết phạm vi hẹp, kèm điều cấm.",
          "keys": [
            "phạm vi hẹp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: a time limit, on paper and in your calendar.",
          "sub": "Ba: có thời hạn, trên giấy và trong lịch."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Four: abroad, sign through a Vietnamese mission, and send the original home.",
          "sub": "Bốn: ở nước ngoài, ký qua cơ quan đại diện Việt Nam, gửi bản gốc về.",
          "keys": [
            "bản gốc"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Today: reread the authority you have. Underline every full power, and the end date.",
          "sub": "Việc làm ngay: đọc lại văn bản uỷ quyền đang có, gạch dưới mọi chữ “toàn quyền” và ngày hết hạn.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Next: renting out your home from abroad, the lease and the tax. Rules change, so check before you act.",
          "sub": "Bài tiếp theo: cho thuê nhà khi ở nước ngoài, hợp đồng và thuế. Quy định có thể đổi, kiểm lại trước khi làm."
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
        "q": "If no time limit is agreed or set by law, how long does authority last?",
        "options": [
          "Ten years, starting when the owner first left the country",
          "Forever, until the owner sells the house to someone else",
          "One year, counted from the day the authority was established"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "tear-off-calendar",
        "why": "Không thoả thuận, luật không quy định: uỷ quyền có hiệu lực một năm."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "If no time limit is agreed or set by law, how long does authority last?",
          "sub": "Nếu không thoả thuận và luật không quy định, uỷ quyền có hiệu lực bao lâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "One year, counted from the day the authority was established.",
          "sub": "Một năm, kể từ ngày xác lập việc uỷ quyền."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Article five six three of the Civil Code, as the article cites.",
          "sub": "Điều 563 Bộ luật Dân sự 2015, như bài nguồn dẫn."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[24]"
    },
    {
      "id": "s22",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Uỷ quyền nhà đất cho an toàn"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting below.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ ngay bên dưới.",
          "face": "happy"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-24",
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-24: vật neo là câu trích “toàn quyền quản lý, định đoạt” (p7, p9) trong mẫu Dũng tải trên mạng → “có một chi tiết đáng chú ý” → uỷ quyền thật ra là gì (p1, p2; BRK-07 rehook p3, p4) → ba ý. Đét đứng trái + bảng trắng 10 ô theo BA TUẦN THẢO LÀM LẠI GIẤY UỶ QUYỀN TỪ NƯỚC NGOÀI: thứ Ba ba rủi ro (p5; BRK-06; p6) → “Khoan đã!” ký nguyên mẫu toàn quyền (p8) → thứ Tư Bà Tư kể chuyện bạn (vai “bà Lan” p7) → thứ Năm viết phạm vi (p9, p10; BRK-04 Trước/Sau p11; p12) → thứ Sáu giấy cũ quá một năm (vai “chị Hạnh” p15; BRK-03 một năm p13; Điều 564, 569 p14; p16) → tuần hai ký tại cơ quan đại diện (vai “anh Minh” p17, p19) → tuần ba Dũng công chứng tiếp ở văn phòng Cô Hoa (p18, p20) → cuối tháng ký hợp đồng thuê, câu neo bị gạch (khép vòng). Nhân vật: Thảo, Dũng, Bà Tư, Cô Hoa. Mọi điều luật, mốc lấy từ bài; lưu ý chung #133 ở ô J.",
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
