// Kịch bản video W lần 3 (#110, #112) — "Làm sao đi qua một cuộc nói chuyện khó mà vẫn giữ được quan hệ?" · bài tổng chuỗi "Xử lý xung đột và cuộc nói chuyện khó"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-get-through-a-difficult-conversation--w01",
  "hook": "HOOK-18",
  "unit": {
    "audience": "people-in-conflict",
    "slug": "how-to-get-through-a-difficult-conversation",
    "door": "ky-nang",
    "level": "B1",
    "title": "Làm sao đi qua một cuộc nói chuyện khó mà vẫn giữ được quan hệ?",
    "series": "Xử lý xung đột và cuộc nói chuyện khó"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT TUẦN của Thảo. Mở: 9:00 thứ Hai, phòng họp “nồi áp suất”, chị Hoa ngắt lời “Làm thế này thì lỗ” (neo: 1 nhịp thở) → ① T2 9:00 bị nói nặng + “Khoan đã!” trước/sau (p1–p4) → ② T2 tối xin nghỉ, danh sách mười điều = mài dao (p5–p7) → ③ T3 phép thử máy quay với Dũng + BRK-04 Lâm/hàng xóm (p8–p10) → ④ T4 câu bốn phần với chị Hoa (p11–p12) → BRK-07 → ⑤ T5 phản biện sếp, nhận vơ công (p13–p16) → ⑥ T6 giao nhầm kho, nhận phần mình, xin lỗi 4 phần (p17–p20) → ⑦ cuối tuần đứng giữa bố mẹ về căn nhà cũ + BRK-11 hàng xóm + BRK-02 an toàn (p21–p27) → khép: 9:00 thứ Hai tuần sau. Nhân vật (4): Thảo, chị Hoa (trưởng phòng), Dũng (vận hành), Bác Bình (bố Thảo) — xem w145/_series/people-in-conflict.md. Mẹ Thảo, chồng Thảo, Lâm, chị hàng xóm không lên hình. Bản cũ (W lần 3): w145/bak/how-to-get-through-a-difficult-conversation--w01.js.",
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
            "text": "1 nhịp thở",
            "x": 60,
            "y": 110,
            "size": 140,
            "at": "l2:one breath",
            "color": "accent",
            "hl": [
              {
                "text": "1 nhịp thở",
                "at": "l2:breath"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "= đổi được 1 câu",
            "x": 70,
            "y": 320,
            "size": 60,
            "at": "l2:sentence"
          },
          {
            "id": "a-myth",
            "t": "text",
            "text": "Ta tưởng: phải cãi cho thắng?",
            "x": 70,
            "y": 430,
            "size": 52,
            "at": "l3:winning",
            "color": "muted"
          },
          {
            "id": "a-mx",
            "t": "strike",
            "over": "a-myth",
            "at": "l3:end"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Monday, nine a.m. The meeting room is a quiet pressure cooker.",
          "sub": "Thứ Hai, chín giờ sáng. Phòng họp im phăng phắc, như nồi áp suất.",
          "keys": [
            "nồi áp suất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Today, one breath will change one sentence.",
          "sub": "Hôm nay, một nhịp thở sẽ đổi được một câu.",
          "keys": [
            "một nhịp thở"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not winning. Just one breath.",
          "sub": "Không phải cãi thắng. Chỉ một nhịp thở."
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
            "at": "l2",
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
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1:Hoa",
                  "pose": "cross"
                }
              ],
              "props": [
                "bar-chart",
                "memo"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "hoa"
                },
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
            "caption": "Thứ Hai 9:00 · họp phòng",
            "icon": "bar-chart"
          },
          {
            "id": "a-hot",
            "t": "text",
            "text": "Mặt nóng · câu đáp trả sẵn",
            "x": 70,
            "y": 560,
            "size": 46,
            "at": "l3:burns",
            "color": "coral",
            "hl": [
              {
                "text": "câu đáp trả",
                "at": "l3:reply"
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
          "say": "This is Thảo, presenting her plan. And this is Ms Hoa, her manager.",
          "sub": "Đây là Thảo, đang trình bày kế hoạch. Còn đây là chị Hoa, trưởng phòng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "This way we'll lose money. Did you calculate anything?",
          "sub": "Làm thế này thì lỗ, em có tính gì không đấy?",
          "face": "stern",
          "pose": "stop"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Thảo's face burns. Her reply is ready on her tongue.",
          "sub": "Mặt Thảo nóng bừng. Câu đáp trả đã nằm sẵn đầu lưỡi.",
          "keys": [
            "Câu đáp trả"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Hold that second.",
          "sub": "Giữ nguyên giây ấy đã."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "intro,p3"
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
            "text": "Nói ra hay nhịn?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:Speak",
            "hl": [
              {
                "text": "hay nhịn",
                "at": "l1:quiet"
              }
            ]
          },
          {
            "id": "b-a",
            "t": "text",
            "text": "Nói ra → sợ to chuyện",
            "x": 2028,
            "y": 150,
            "size": 50,
            "at": "l1:Speak"
          },
          {
            "id": "b-b",
            "t": "text",
            "text": "Im lặng → ấm ức",
            "x": 2028,
            "y": 225,
            "size": 50,
            "at": "l1:quiet"
          },
          {
            "id": "b-bx",
            "t": "strike",
            "over": "b-b",
            "at": "l2:road"
          },
          {
            "id": "b-ax",
            "t": "strike",
            "over": "b-a",
            "at": "l2:third"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Đường thứ ba: 4 việc →",
            "x": 2028,
            "y": 330,
            "size": 60,
            "at": "l2:four",
            "color": "accent",
            "hl": [
              {
                "text": "4 việc",
                "at": "l2:four"
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
          "say": "A hard talk. Speak, and it grows. Stay quiet, and it hurts.",
          "sub": "Cuộc nói chuyện khó. Nói ra thì sợ to chuyện, im lặng thì ấm ức.",
          "keys": [
            "cuộc nói chuyện khó"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "There's a third road, with four things.",
          "sub": "Có đường thứ ba, gồm bốn việc.",
          "keys": [
            "bốn việc"
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
            "id": "b-c0",
            "t": "box",
            "x": 2868,
            "y": 175,
            "w": 46,
            "h": 46,
            "at": "l1:calm",
            "stroke": 5
          },
          {
            "id": "b-k0",
            "t": "text",
            "text": "✓",
            "x": 2873,
            "y": 157,
            "size": 58,
            "at": "l1:calm+600",
            "color": "accent"
          },
          {
            "id": "b-l0",
            "t": "text",
            "text": "Giữ bình tĩnh trước",
            "x": 2938,
            "y": 165,
            "size": 46,
            "at": "l1:calm+200"
          },
          {
            "id": "b-c1",
            "t": "box",
            "x": 2868,
            "y": 255,
            "w": 46,
            "h": 46,
            "at": "l1:facts",
            "stroke": 5
          },
          {
            "id": "b-k1",
            "t": "text",
            "text": "✓",
            "x": 2873,
            "y": 237,
            "size": 58,
            "at": "l1:facts+600",
            "color": "accent"
          },
          {
            "id": "b-l1",
            "t": "text",
            "text": "Nói đúng sự việc",
            "x": 2938,
            "y": 245,
            "size": 46,
            "at": "l1:facts+200"
          },
          {
            "id": "b-c2",
            "t": "box",
            "x": 2868,
            "y": 335,
            "w": 46,
            "h": 46,
            "at": "l2:wrong",
            "stroke": 5
          },
          {
            "id": "b-k2",
            "t": "text",
            "text": "✓",
            "x": 2873,
            "y": 317,
            "size": 58,
            "at": "l2:wrong+600",
            "color": "accent"
          },
          {
            "id": "b-l2",
            "t": "text",
            "text": "Sai thì nhận phần mình",
            "x": 2938,
            "y": 325,
            "size": 46,
            "at": "l2:wrong+200"
          },
          {
            "id": "b-c3",
            "t": "box",
            "x": 2868,
            "y": 415,
            "w": 46,
            "h": 46,
            "at": "l2:next step",
            "stroke": 5
          },
          {
            "id": "b-k3",
            "t": "text",
            "text": "✓",
            "x": 2873,
            "y": 397,
            "size": 58,
            "at": "l2:next step+600",
            "color": "accent"
          },
          {
            "id": "b-l3",
            "t": "text",
            "text": "Chốt một việc cụ thể",
            "x": 2938,
            "y": 405,
            "size": 46,
            "at": "l2:next step+200"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+200",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2260,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2492,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2724,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2956,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+1000",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3188,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+1200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3420,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+1400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2 9:00",
            "x": 2044,
            "y": 628,
            "size": 40,
            "at": "l3:seven stops+300"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T2 tối",
            "x": 2276,
            "y": 628,
            "size": 40,
            "at": "l3:seven stops+500"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T3",
            "x": 2508,
            "y": 628,
            "size": 40,
            "at": "l3:seven stops+700"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T4",
            "x": 2740,
            "y": 628,
            "size": 40,
            "at": "l3:seven stops+900"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T5",
            "x": 2972,
            "y": 628,
            "size": 40,
            "at": "l3:seven stops+1100"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T6",
            "x": 3204,
            "y": 628,
            "size": 40,
            "at": "l3:seven stops+1300"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "Cuối tuần",
            "x": 3436,
            "y": 628,
            "size": 34,
            "at": "l3:seven stops+1500"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stay calm first. Say the facts, in your own words.",
          "sub": "Giữ bình tĩnh trước. Nói đúng sự việc, bằng câu của mình.",
          "keys": [
            "Giữ bình tĩnh trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "When you're wrong, name your part. And agree on one clear next step.",
          "sub": "Sai thì nhận phần của mình. Và luôn chốt một việc cụ thể.",
          "keys": [
            "chốt một việc cụ thể"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One week with Thảo, in seven stops.",
          "sub": "Một tuần cùng Thảo, bảy chặng.",
          "keys": [
            "bảy chặng"
          ]
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
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Hai 9:00 · Bị nói nặng",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-fire",
            "t": "illus",
            "name": "face-with-steam-from-nose",
            "x": 5136,
            "y": 170,
            "size": 240,
            "at": "l1:danger"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Mặt nóng, giọng to lên",
            "x": 3996,
            "y": 160,
            "size": 50,
            "at": "l1:danger"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Phản xạ nhanh hơn suy nghĩ",
            "x": 3996,
            "y": 240,
            "size": 50,
            "at": "l2:reflex",
            "color": "coral",
            "hl": [
              {
                "text": "Phản xạ",
                "at": "l2:reflex"
              }
            ]
          },
          {
            "id": "c-do",
            "t": "text",
            "text": "Nhận ra dấu hiệu → thở ra",
            "x": 3996,
            "y": 340,
            "size": 50,
            "at": "l3:signs",
            "color": "accent",
            "hl": [
              {
                "text": "thở ra",
                "at": "l3:Breathe"
              }
            ]
          },
          {
            "id": "c-rep",
            "t": "text",
            "text": "Hạ giọng · nhắc lại ý họ",
            "x": 3996,
            "y": 420,
            "size": 48,
            "at": "l4:Lower"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one. Criticised in public, your body reacts as if in danger.",
          "sub": "Chặng một. Bị chê trước mặt người khác, cơ thể phản ứng như gặp nguy hiểm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The reflex to hit back runs faster than thinking.",
          "sub": "Phản xạ đánh trả chạy nhanh hơn suy nghĩ.",
          "keys": [
            "Phản xạ đánh trả"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So notice your signs. Breathe out slowly, once, to win a few seconds.",
          "sub": "Vậy hãy nhận ra dấu hiệu. Thở ra chậm một nhịp, để câu thêm vài giây.",
          "keys": [
            "Thở ra chậm một nhịp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lower your voice, repeat their point in one sentence.",
          "sub": "Hạ giọng, rồi nhắc lại ý người kia trong một câu."
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s06",
      "module": "DLG-01",
      "data": {
        "set": "meeting",
        "label": "Thứ Hai 9:00 · phòng họp",
        "actors": [
          {
            "id": "thao",
            "side": "left",
            "pose": "explain"
          },
          {
            "id": "hoa",
            "side": "right",
            "pose": "cross"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Số liệu thành thể diện",
          "why": "Câu đáp trả biến chuyện con số thành chuyện ai đúng ai sai.",
          "rule": "Gọi tên mối lo, hứa đưa bằng chứng"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "This way we'll lose money. Did you calculate anything?",
          "sub": "Làm thế này thì lỗ, em có tính gì không đấy?",
          "pose": "stop",
          "face": "stern"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I did! You didn't even read it all before judging.",
          "sub": "Em tính kỹ rồi, chị chưa đọc hết đã chê!",
          "face": "stern",
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
          "say": "Now it's about face, not numbers.",
          "sub": "Giờ thành chuyện thể diện, không còn là con số.",
          "keys": [
            "chuyện thể diện"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind. Breathe out first.",
          "sub": "Tua lại. Thở ra trước đã.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "You're worried about the costs, right? I'll send the spreadsheet after the meeting.",
          "sub": "Chị lo phần chi phí phải không ạ? Em gửi chị bảng tính ngay sau họp.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "She named the boss's worry. The talk stays with the numbers.",
          "sub": "Cô gọi tên mối lo của sếp. Cuộc bàn vẫn ở lại với con số.",
          "phase": "redo",
          "keys": [
            "gọi tên mối lo"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p3,p4"
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
            "id": "c-not",
            "t": "text",
            "text": "Bình tĩnh ≠ nuốt giận",
            "x": 3996,
            "y": 510,
            "size": 50,
            "at": "l1:swallowing",
            "color": "accent",
            "hl": [
              {
                "text": "≠ nuốt giận",
                "at": "l1:swallowing"
              }
            ]
          },
          {
            "id": "c-opt",
            "t": "text",
            "text": "Đáp ngắn · nói riêng · xin xem lại",
            "x": 3996,
            "y": 590,
            "size": 44,
            "at": "l2:briefly"
          },
          {
            "id": "c-rule",
            "t": "text",
            "text": "1 nhịp thở, đổi 1 câu",
            "x": 4836,
            "y": 600,
            "size": 56,
            "at": "l3:One breath",
            "color": "accent",
            "hl": [
              {
                "text": "đổi 1 câu",
                "at": "l3:sentence"
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
          "say": "Calm is not swallowing anger.",
          "sub": "Bình tĩnh không phải là nuốt giận.",
          "keys": [
            "nuốt giận"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Answer briefly, talk privately, or ask for time to check.",
          "sub": "Vẫn có thể trả lời ngắn, hẹn nói riêng, hoặc xin thời gian kiểm tra lại."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One breath out, one better sentence.",
          "sub": "Thở ra một nhịp, đổi được một câu.",
          "keys": [
            "đổi được một câu"
          ]
        }
      ],
      "ref": "p2,p4"
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
            "text": "② Thứ Hai tối · Xin tạm dừng",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-s1",
            "t": "text",
            "text": "Nói chồng lên nhau",
            "x": 5964,
            "y": 160,
            "size": 46,
            "at": "l1:over"
          },
          {
            "id": "d-s2",
            "t": "text",
            "text": "“Lúc nào cũng”, “không bao giờ”",
            "x": 5964,
            "y": 225,
            "size": 46,
            "at": "l1:always"
          },
          {
            "id": "d-pause",
            "t": "text",
            "text": "Tạm dừng = có hẹn + quay lại",
            "x": 5964,
            "y": 320,
            "size": 46,
            "at": "l1:pause",
            "color": "accent",
            "hl": [
              {
                "text": "có hẹn + quay lại",
                "at": "l1:come back"
              }
            ]
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold",
                  "face": "stern"
                }
              ],
              "props": [
                "memo",
                "pen"
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
            "at": "l2",
            "caption": "Thứ Hai 21:00 · nghỉ một tiếng",
            "icon": "memo"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, Monday night. A fight about visiting his family's ancestors. Talking over, always, never: time to pause, and come back.",
          "sub": "Chặng hai, tối thứ Hai. Ở nhà cãi chuyện đi lễ nhà nội. Nói chồng lên nhau, “lúc nào cũng”, “không bao giờ”: đến lúc tạm dừng, có hẹn, có quay lại.",
          "keys": [
            "tạm dừng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thảo asks her husband for an hour's break. Good. Then she grabs a pen.",
          "sub": "Thảo xin chồng nghỉ một tiếng. Tốt. Rồi cô cầm bút."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Ten things he did wrong this year. I'll write them all down.",
          "sub": "Mười điều anh ấy làm sai suốt năm qua. Mình ghi hết ra.",
          "face": "stern",
          "pose": "hold"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Will the second talk be easier, or harder?",
          "sub": "Rồi đọc từng điều. Lần nói thứ hai nhẹ hơn hay nặng hơn?",
          "keys": [
            "nhẹ hơn hay nặng hơn"
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
      "ref": "p5,p6"
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
            "id": "d-harder",
            "t": "text",
            "text": "Nặng hơn: nghỉ thành phản công",
            "x": 5964,
            "y": 420,
            "size": 44,
            "at": "l1:Harder",
            "color": "coral",
            "hl": [
              {
                "text": "Nặng hơn",
                "at": "l1:Harder"
              }
            ]
          },
          {
            "id": "d-cool",
            "t": "text",
            "text": "Uống nước · đi bộ · anh lo gì?",
            "x": 5964,
            "y": 500,
            "size": 44,
            "at": "l2:water"
          },
          {
            "id": "d-knife",
            "t": "illus",
            "name": "kitchen-knife",
            "x": 5964,
            "y": 570,
            "size": 100,
            "at": "l3:knife"
          },
          {
            "id": "d-rule",
            "t": "text",
            "text": "Nghỉ để nguội, đừng mài dao",
            "x": 6084,
            "y": 590,
            "size": 48,
            "at": "l3:Rest",
            "color": "accent",
            "hl": [
              {
                "text": "mài dao",
                "at": "l3:knife"
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
          "say": "Harder. The break became time to prepare an attack.",
          "sub": "Nặng hơn. Giờ nghỉ đã thành giờ chuẩn bị phản công, chồng chỉ còn cách tự vệ.",
          "keys": [
            "chuẩn bị phản công"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Better: drink water, take a walk, and think about his worry.",
          "sub": "Tốt hơn: uống nước, đi bộ cho nguội, rồi nghĩ xem chồng đang lo gì."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Rest to cool down. Don't rest to sharpen your knife.",
          "sub": "Nghỉ để nguội, đừng nghỉ để mài dao.",
          "keys": [
            "đừng nghỉ để mài dao"
          ]
        }
      ],
      "ref": "p6,p7"
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
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Ba · Phép thử máy quay",
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "think",
                  "face": "thinking"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "walk",
                  "at": "l2"
                }
              ],
              "props": [
                "alarm-clock",
                "memo"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "thao"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2",
            "caption": "Thứ Ba 9:10 · Dũng lại vào muộn",
            "icon": "alarm-clock"
          },
          {
            "id": "e-mix",
            "t": "text",
            "text": "Sự việc + cảm xúc + phán xét",
            "x": 7932,
            "y": 160,
            "size": 46,
            "at": "l1:facts"
          },
          {
            "id": "e-acc",
            "t": "text",
            "text": "= nghe như lời buộc tội",
            "x": 7932,
            "y": 230,
            "size": 46,
            "at": "l1:accusation",
            "color": "coral"
          },
          {
            "id": "e-cam",
            "t": "illus",
            "name": "video-camera",
            "x": 7932,
            "y": 310,
            "size": 110,
            "at": "l4:camera"
          },
          {
            "id": "e-ok",
            "t": "text",
            "text": "“Vào họp muộn 2 lần” ✓",
            "x": 8062,
            "y": 320,
            "size": 44,
            "at": "l4:twice",
            "color": "accent",
            "hl": [
              {
                "text": "muộn 2 lần",
                "at": "l4:twice"
              }
            ]
          },
          {
            "id": "e-no",
            "t": "text",
            "text": "“Em không tôn trọng ai”",
            "x": 8062,
            "y": 400,
            "size": 44,
            "at": "l5:respect"
          },
          {
            "id": "e-nox",
            "t": "strike",
            "over": "e-no",
            "at": "l5:end"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, Tuesday. Mix facts, feelings and judgement: they hear an accusation.",
          "sub": "Chặng ba, thứ Ba. Trộn sự việc, cảm xúc và phán xét, người nghe chỉ nghe thấy lời buộc tội.",
          "keys": [
            "lời buộc tội"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, Thảo's colleague from operations. Late again.",
          "sub": "Đây là Dũng, đồng nghiệp bên vận hành của Thảo. Lại vào muộn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Dũng, this week you were late for meetings twice.",
          "sub": "Dũng ơi, tuần này em vào họp muộn hai lần rồi.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The camera test. A camera can record: late twice.",
          "sub": "Phép thử máy quay. Máy quay ghi được: muộn hai lần.",
          "keys": [
            "phép thử máy quay"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "It can never record: you don't respect anyone.",
          "sub": "Nhưng không bao giờ ghi được: em không tôn trọng ai."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s11",
      "module": "BRK-04",
      "data": {
        "title": "Hàng xóm: “Nhà anh lúc nào cũng ồn!”",
        "wrong": "Lâm: “Lúc nào là lúc nào?”",
        "right": "Lâm: “Chị bị ảnh hưởng nhất lúc nào ạ?”",
        "labels": [
          "Cãi chữ",
          "Nghe cảm xúc"
        ],
        "wrongIllus": "pouting-face",
        "rightIllus": "ear"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Always noisy! Lâm almost asks: when is always?",
          "sub": "Lúc nào cũng ồn! Lâm suýt hỏi: lúc nào là lúc nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Instead: when does it bother you most?",
          "sub": "Thay vào đó: chị bị ảnh hưởng nhất lúc nào ạ?",
          "keys": [
            "ảnh hưởng nhất lúc nào"
          ]
        }
      ],
      "ref": "p9"
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
          }
        ],
        "items": [
          {
            "id": "e-kar",
            "t": "text",
            "text": "Karaoke thứ Bảy sau 10 giờ",
            "x": 7932,
            "y": 500,
            "size": 44,
            "at": "l1:karaoke"
          },
          {
            "id": "e-deal",
            "t": "text",
            "text": "→ tắt loa trước 10 giờ",
            "x": 7932,
            "y": 570,
            "size": 46,
            "at": "l1:speakers",
            "color": "accent"
          },
          {
            "id": "e-rule",
            "t": "text",
            "text": "Nghe cảm xúc trước, cãi chữ sau",
            "x": 8752,
            "y": 705,
            "size": 40,
            "at": "l2:feeling",
            "color": "accent",
            "hl": [
              {
                "text": "cảm xúc trước",
                "at": "l2:feeling first"
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
          "say": "Saturday karaoke after ten, while her child sleeps. Deal: speakers off before ten.",
          "sub": "Hoá ra là karaoke tối thứ Bảy sau mười giờ, lúc con chị ngủ. Hai nhà thống nhất tắt loa trước mười giờ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Hear the feeling first. Argue words later, if ever.",
          "sub": "Nghe ra cảm xúc trước, cãi chữ sau, mà thường chẳng cần cãi.",
          "keys": [
            "Nghe ra cảm xúc trước"
          ]
        }
      ],
      "ref": "p9,p10"
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
            "at": "l5",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Tư · Câu bốn phần",
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "spiral-calendar",
                "memo"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "thao"
                },
                {
                  "at": "l4",
                  "shot": "medium",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Ms Hoa",
            "caption": "Thứ Tư · bàn chị Hoa",
            "icon": "spiral-calendar"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "1. Em thấy + cảm xúc thật",
            "x": 60,
            "y": 1250,
            "size": 46,
            "at": "l2:stressed",
            "hl": [
              {
                "text": "cảm xúc thật",
                "at": "l2:stressed"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "2. Khi + tình huống cụ thể",
            "x": 60,
            "y": 1325,
            "size": 46,
            "at": "l2:after four"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "3. Vì + ảnh hưởng tới mình",
            "x": 60,
            "y": 1400,
            "size": 46,
            "at": "l2:because"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "4. Đề nghị = câu hỏi",
            "x": 60,
            "y": 1475,
            "size": 46,
            "at": "l3:agree",
            "color": "accent",
            "hl": [
              {
                "text": "câu hỏi",
                "at": "l3:agree"
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
          "say": "Stop four, Wednesday. Thảo goes to Ms Hoa about late Friday tasks.",
          "sub": "Chặng bốn, thứ Tư. Thảo sang gặp chị Hoa về chuyện việc giao muộn chiều thứ Sáu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I feel quite stressed getting tasks after four on Friday, because I work all weekend.",
          "sub": "Em thấy khá áp lực khi nhận việc sau bốn giờ chiều thứ Sáu, vì em phải làm cả cuối tuần.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Could we agree on a Thursday noon deadline?",
          "sub": "Mình thống nhất hạn gửi là trưa thứ Năm được không chị?",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Thursday noon. Fair enough.",
          "sub": "Trưa thứ Năm. Được, hợp lý.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "I feel, when, because, and a request as a question.",
          "sub": "Em thấy, khi, vì, và một đề nghị dạng câu hỏi.",
          "keys": [
            "đề nghị dạng câu hỏi"
          ]
        }
      ],
      "ref": "p11"
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
            "id": "f-feel",
            "t": "text",
            "text": "Sau “thấy”: cảm xúc của mình",
            "x": 60,
            "y": 1570,
            "size": 40,
            "at": "l1:feeling"
          },
          {
            "id": "f-but",
            "t": "text",
            "text": "+ “nhưng…” và một lời trách",
            "x": 60,
            "y": 1640,
            "size": 44,
            "at": "l2:but",
            "color": "coral"
          },
          {
            "id": "f-butx",
            "t": "strike",
            "over": "f-but",
            "at": "l2:blame+300"
          },
          {
            "id": "f-early",
            "t": "text",
            "text": "Nói sớm: càng nhịn càng nặng",
            "x": 880,
            "y": 1795,
            "size": 40,
            "at": "l3:early",
            "color": "accent",
            "hl": [
              {
                "text": "càng nhịn càng nặng",
                "at": "l3:heavier"
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
          "say": "After I feel comes your feeling, not their fault.",
          "sub": "Sau chữ “thấy” là cảm xúc của mình, không phải lỗi của người ta.",
          "keys": [
            "cảm xúc của mình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Make the request, then stop. No but, no extra blame.",
          "sub": "Nói xong đề nghị thì dừng. Đừng thêm “nhưng” và một lời trách."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And speak early. The longer you hold it in, the heavier it gets.",
          "sub": "Và nói sớm, vì chuyện càng nhịn càng nặng.",
          "keys": [
            "càng nhịn càng nặng"
          ]
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s15",
      "module": "BRK-07",
      "data": {
        "question": "Nếu sếp không đồng ý, hay có người nhận vơ công mình?",
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
          "say": "What if the boss disagrees, or someone takes your credit?",
          "sub": "Nếu sếp không đồng ý, hay có người nhận vơ công của mình?",
          "keys": [
            "nhận vơ công"
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
          },
          {
            "at": 150,
            "fit": "G",
            "ms": 900
          },
          {
            "at": "l4",
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
            "text": "⑤ Thứ Năm · Sếp và đồng nghiệp",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
          },
          {
            "id": "g-face",
            "t": "text",
            "text": "Sếp ngại mất mặt, hơn ý khác",
            "x": 2028,
            "y": 1250,
            "size": 40,
            "at": "l1:face",
            "hl": [
              {
                "text": "mất mặt",
                "at": "l1:face"
              }
            ]
          },
          {
            "id": "g-how",
            "t": "text",
            "text": "Nói riêng · mục tiêu chung · dữ kiện",
            "x": 2028,
            "y": 1320,
            "size": 40,
            "at": "l2:private"
          },
          {
            "id": "g-how2",
            "t": "text",
            "text": "+ 1 phương án · trao quyết định",
            "x": 2028,
            "y": 1385,
            "size": 40,
            "at": "l2:decision",
            "color": "accent",
            "hl": [
              {
                "text": "trao quyết định",
                "at": "l2:decision"
              }
            ]
          },
          {
            "id": "g-keep",
            "t": "text",
            "text": "Sếp giữ ý → làm hết sức",
            "x": 2028,
            "y": 1455,
            "size": 40,
            "at": "l3:Work hard"
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
                  "id": "hoa",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "face": "surprised"
                }
              ],
              "props": [
                "bar-chart",
                "e-mail"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "close",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "medium",
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
            "at": "l3:review",
            "caption": "Thứ Năm · họp tổng kết",
            "icon": "bar-chart"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, Thursday. Bosses rarely mind other opinions. They mind losing face.",
          "sub": "Chặng năm, thứ Năm. Sếp hiếm khi phật ý vì ý kiến khác, mà vì bị mất mặt.",
          "keys": [
            "bị mất mặt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Speak in private: shared goal, facts, one option, then hand the decision back.",
          "sub": "Nên nói riêng: mục tiêu chung, dữ kiện, một phương án, rồi trao lại quyền quyết định.",
          "keys": [
            "trao lại quyền quyết định"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "She keeps her plan? Work hard on it, and suggest one review.",
          "sub": "Sếp vẫn giữ ý? Làm hết sức theo hướng đã chọn, đề xuất một lần xem lại số liệu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Same meeting: someone says Dũng's report was theirs.",
          "sub": "Cũng buổi họp đó: có người nói báo cáo của Dũng là của mình."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Wait, that was my...",
          "sub": "Ơ, cái đó em…",
          "face": "surprised",
          "pose": "shrug"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "I remember the data part was Dũng's.",
          "sub": "Chị nhớ phần số liệu là Dũng làm mà.",
          "face": "happy",
          "pose": "point"
        }
      ],
      "ref": "p13,p14,p15"
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
            "id": "g-3",
            "t": "text",
            "text": "Mỗi thứ Sáu, 3 dòng:",
            "x": 2028,
            "y": 1540,
            "size": 44,
            "at": "l1:three lines",
            "hl": [
              {
                "text": "3 dòng",
                "at": "l1:three lines"
              }
            ]
          },
          {
            "id": "g-3b",
            "t": "text",
            "text": "xong gì · ai làm · tuần sau",
            "x": 2028,
            "y": 1605,
            "size": 42,
            "at": "l1:who did"
          },
          {
            "id": "g-spot",
            "t": "text",
            "text": "Không tố công khai · nói riêng",
            "x": 2028,
            "y": 1675,
            "size": 42,
            "at": "l2:accuse"
          },
          {
            "id": "g-rule",
            "t": "text",
            "text": "Việc mình làm, ghi bằng chữ",
            "x": 2848,
            "y": 1795,
            "size": 40,
            "at": "l3:writing",
            "color": "accent",
            "hl": [
              {
                "text": "ghi bằng chữ",
                "at": "l3:writing"
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
          "say": "Why? Every Friday for months, Dũng sends three lines: what's done, who did which part, what's next.",
          "sub": "Vì sao? Mấy tháng nay, thứ Sáu nào Dũng cũng gửi ba dòng: xong gì, ai làm phần nào, tuần sau làm gì."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Don't accuse in public. Add a detail only the author knows.",
          "sub": "Đừng tố trước mặt mọi người. Thêm một chi tiết chỉ người làm mới biết; sau đó nói riêng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The work you do, put it in writing.",
          "sub": "Việc mình làm, ghi lại bằng chữ.",
          "keys": [
            "ghi lại bằng chữ"
          ]
        }
      ],
      "ref": "p14,p15,p16"
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
            "text": "⑥ Thứ Sáu · Giao nhầm kho",
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
              "set": "shop",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "cross"
                }
              ],
              "props": [
                "package",
                "telephone-receiver"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "thao"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
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
            "at": "l1:shipment",
            "caption": "Thứ Sáu · quầy giao nhận",
            "icon": "package"
          },
          {
            "id": "h-a",
            "t": "text",
            "text": "A: “Lỗi bên kho!” “Lỗi bên bán!”",
            "x": 3996,
            "y": 1250,
            "size": 44,
            "at": "l2:blames",
            "color": "coral"
          },
          {
            "id": "h-a2",
            "t": "text",
            "text": "→ 1 tiếng, khách vẫn chờ",
            "x": 3996,
            "y": 1320,
            "size": 44,
            "at": "l2:waits"
          },
          {
            "id": "h-ax",
            "t": "strike",
            "over": "h-a",
            "at": "l3"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "B: nói phần của mình trước",
            "x": 3996,
            "y": 1410,
            "size": 50,
            "at": "l3:My part",
            "color": "accent",
            "hl": [
              {
                "text": "phần của mình",
                "at": "l3:My part"
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
          "say": "Stop six, Friday. A shipment went to the customer's old warehouse.",
          "sub": "Chặng sáu, thứ Sáu. Một lô hàng bị giao nhầm sang kho cũ của khách."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Version A: warehouse blames sales, sales blames warehouse. An hour later, the customer still waits.",
          "sub": "Cách A: bên kho đọc nhầm, bên bán không cập nhật. Một tiếng trôi qua, khách vẫn chờ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "My part: the customer phoned about the new warehouse, and I didn't update the system.",
          "sub": "Em nhận phần của em: khách báo đổi kho qua điện thoại, em chưa cập nhật hệ thống.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "We didn't check the original order either.",
          "sub": "Bên em cũng không đối chiếu đơn gốc.",
          "face": "sad",
          "pose": "shrug"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Start with your part. Then others dare to name theirs.",
          "sub": "Mở đầu bằng phần của mình, người khác mới dám nói phần của họ.",
          "keys": [
            "Mở đầu bằng phần của mình"
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
      "ref": "p19,p20"
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
          }
        ],
        "items": [
          {
            "id": "h-ap",
            "t": "text",
            "text": "Xin lỗi 4 phần:",
            "x": 3996,
            "y": 1500,
            "size": 48,
            "at": "l1:apology",
            "hl": [
              {
                "text": "4 phần",
                "at": "l1:apology"
              }
            ]
          },
          {
            "id": "h-ap2",
            "t": "text",
            "text": "việc · ảnh hưởng · xin lỗi · cách sửa",
            "x": 3996,
            "y": 1565,
            "size": 40,
            "at": "l1:effect"
          },
          {
            "id": "h-if",
            "t": "text",
            "text": "“Xin lỗi nếu bạn thấy buồn”",
            "x": 3996,
            "y": 1635,
            "size": 42,
            "at": "l1:Sorry if",
            "color": "muted"
          },
          {
            "id": "h-ifx",
            "t": "strike",
            "over": "h-if",
            "at": "l1:end"
          },
          {
            "id": "h-q",
            "t": "text",
            "text": "“Chuyện gì xảy ra, theo thứ tự?”",
            "x": 3996,
            "y": 1705,
            "size": 42,
            "at": "l2:What happened",
            "color": "accent",
            "hl": [
              {
                "text": "theo thứ tự",
                "at": "l2:step by step"
              }
            ]
          },
          {
            "id": "h-own",
            "t": "text",
            "text": "Nhận trách nhiệm ≠ ôm hết lỗi",
            "x": 4816,
            "y": 1795,
            "size": 40,
            "at": "l3:all the blame",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A sincere apology: what you did, its effect, sorry with no but, and the fix. Not: sorry if you feel upset.",
          "sub": "Xin lỗi chân thành có bốn phần: việc mình làm, ảnh hưởng, xin lỗi không “nhưng”, cách sửa. Không phải: xin lỗi nếu bạn thấy buồn.",
          "keys": [
            "bốn phần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Leading the review? Not who got it wrong, but: what happened, step by step?",
          "sub": "Dẫn buổi rút kinh nghiệm? Đừng hỏi ai sai, mà hỏi: chuyện gì đã xảy ra, theo thứ tự?",
          "keys": [
            "theo thứ tự"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Responsibility isn't taking all the blame. Name your part, fix it, prevent it.",
          "sub": "Nhận trách nhiệm không phải ôm hết lỗi. Nói phần mình, sửa ngay, tính cách phòng ngừa."
        }
      ],
      "ref": "p17,p18"
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
            "at": "l3",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Cuối tuần · Đứng giữa bố mẹ",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop seven"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "cross"
                }
              ],
              "props": [
                "house",
                "potted-plant"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "medium",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "medium",
                  "on": "binh",
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
            "caption": "Thứ Bảy · nhà cũ ở quê",
            "icon": "house"
          },
          {
            "id": "i-keep",
            "t": "text",
            "text": "Bố: giữ",
            "x": 5964,
            "y": 1250,
            "size": 56,
            "at": "l2:keep"
          },
          {
            "id": "i-sell",
            "t": "text",
            "text": "Mẹ: bán",
            "x": 6264,
            "y": 1250,
            "size": 56,
            "at": "l2:sell"
          },
          {
            "id": "i-why",
            "t": "text",
            "text": "Hỏi “vì sao” sau chữ “muốn”",
            "x": 5964,
            "y": 1350,
            "size": 50,
            "at": "l4:Why",
            "color": "accent",
            "hl": [
              {
                "text": "vì sao",
                "at": "l4:Why"
              }
            ]
          },
          {
            "id": "i-n1",
            "t": "text",
            "text": "Bố: chỗ thờ cúng",
            "x": 5964,
            "y": 1440,
            "size": 46,
            "at": "l5:worship"
          },
          {
            "id": "i-n2",
            "t": "text",
            "text": "Mẹ: nhà xuống cấp, không ai trông",
            "x": 5964,
            "y": 1510,
            "size": 42,
            "at": "l6:fall apart"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven, the weekend. Thảo visits her parents' old country house.",
          "sub": "Chặng bảy, cuối tuần. Thảo về căn nhà cũ của bố mẹ ở quê."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet her dad, Bác Bình. He wants to keep the house. Her mum wants to sell.",
          "sub": "Đây là bố cô, Bác Bình. Mấy tháng nay, bố muốn giữ nhà, mẹ muốn bán."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "We keep the old house. That's final.",
          "sub": "Giữ căn nhà cũ. Thế thôi.",
          "face": "stern",
          "pose": "cross"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Why does that matter to you, Dad? I'll ask Mum the same.",
          "sub": "Vì sao điều đó quan trọng với bố? Con cũng sẽ hỏi mẹ như vậy.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "binh",
          "say": "I need a place to worship the ancestors.",
          "sub": "Bố cần có chỗ thờ cúng ông bà.",
          "face": "sad",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And Mum fears it will fall apart, with no one to look after it.",
          "sub": "Còn mẹ lo nhà xuống cấp mà không ai trông."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p21,p22"
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
            "id": "i-deal",
            "t": "text",
            "text": "→ Giữ nhà + nhờ họ hàng trông",
            "x": 5964,
            "y": 1590,
            "size": 44,
            "at": "l1:relative",
            "color": "accent",
            "hl": [
              {
                "text": "nhờ họ hàng",
                "at": "l1:relative"
              }
            ]
          },
          {
            "id": "i-mid",
            "t": "text",
            "text": "Không bênh · nghe riêng · gặp chung",
            "x": 5964,
            "y": 1665,
            "size": 40,
            "at": "l2:Listen"
          },
          {
            "id": "i-mid2",
            "t": "text",
            "text": "Ghi: ai làm gì, từ khi nào",
            "x": 6784,
            "y": 1795,
            "size": 40,
            "at": "l3:write"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: keep the house, and ask a relative nearby to look after it.",
          "sub": "Thế là: giữ nhà, nhờ một người họ hàng ở gần trông nom.",
          "keys": [
            "nhờ một người họ hàng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In the middle, don't judge. Listen to each privately, then meet together.",
          "sub": "Đứng giữa thì không phân xử. Nghe riêng từng người, rồi gặp chung."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then write who does what, and when to check.",
          "sub": "Rồi ghi rõ ai làm gì, từ khi nào, và hẹn ngày xem lại."
        }
      ],
      "ref": "p22,p23,p21"
    },
    {
      "id": "s22",
      "module": "BRK-11",
      "data": {
        "title": "Hàng xóm, người nhà",
        "items": [
          "Nói sớm, nói riêng",
          "Mỗi lần một chuyện",
          "Gõ cửa, đừng đăng nhóm chat"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three: knock, don't post.",
          "sub": "Ba: gõ cửa, đừng đăng nhóm chat."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two: one thing at a time.",
          "sub": "Hai: mỗi lần một chuyện."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One: speak early.",
          "sub": "Một: nói sớm, nói riêng.",
          "keys": [
            "nói sớm, nói riêng"
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
            "fit": "I",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "i-peace",
            "t": "text",
            "text": "Giữ hoà khí > thắng một trận",
            "x": 5964,
            "y": 1740,
            "size": 44,
            "at": "l1:peace",
            "color": "accent",
            "hl": [
              {
                "text": "Giữ hoà khí",
                "at": "l1:peace"
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
          "say": "One harsh word can stop two homes speaking for years. Keeping the peace beats winning.",
          "sub": "Một câu nặng có thể làm hai nhà không nhìn mặt nhau rất lâu. Giữ hoà khí quan trọng hơn thắng một trận cãi.",
          "keys": [
            "Giữ hoà khí"
          ]
        }
      ],
      "ref": "p24,p26"
    },
    {
      "id": "s24",
      "module": "BRK-02",
      "data": {
        "kicker": "Khi nào không còn là nói khéo",
        "title": "An toàn của bạn đứng trước",
        "hl": "An toàn",
        "sub": "Rời đi · nhờ người tin cậy · gọi công an"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Threats or violence? Safety first.",
          "sub": "Bị đe doạ, động tay chân? An toàn trước đã.",
          "keys": [
            "An toàn trước đã"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Leave, get help, call the police if in danger.",
          "sub": "Rời đi, nhờ người tin cậy, gọi công an nếu nguy hiểm."
        }
      ],
      "ref": "p27"
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
            "at": 100,
            "fit": "H",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "h-rule",
            "t": "text",
            "text": "Ý kiến: khéo · Quy định: rõ",
            "x": 3996,
            "y": 1795,
            "size": 44,
            "at": "l2:Opinions",
            "color": "accent",
            "hl": [
              {
                "text": "Quy định: rõ",
                "at": "l2:clearly"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A plan breaks the rules? Opinions, say kindly. Rules, say clearly, in writing.",
          "sub": "Kế hoạch có thể trái quy định? Ý kiến thì nói khéo, quy định thì nói rõ, bằng văn bản.",
          "keys": [
            "quy định thì nói rõ"
          ]
        }
      ],
      "ref": "p27"
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
            "text": "Thứ Hai tuần sau · 9:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Monday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "cross"
                }
              ],
              "props": [
                "bar-chart",
                "memo"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "medium",
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
            "at": "l1:same",
            "caption": "Thứ Hai · 9:00 · cùng phòng họp",
            "icon": "bar-chart"
          },
          {
            "id": "j-br",
            "t": "text",
            "text": "1 nhịp thở ✓",
            "x": 7932,
            "y": 1270,
            "size": 64,
            "at": "l4:breath",
            "color": "accent",
            "hl": [
              {
                "text": "1 nhịp thở",
                "at": "l4:breath"
              }
            ]
          },
          {
            "id": "j-wk",
            "t": "text",
            "text": "Bình tĩnh · đúng việc · chốt 1 bước",
            "x": 7932,
            "y": 1390,
            "size": 44,
            "at": "l4:next step",
            "hl": [
              {
                "text": "chốt 1 bước",
                "at": "l4:next step"
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
          "say": "Monday again. Same room, same nine a.m., same pressure cooker.",
          "sub": "Lại thứ Hai. Vẫn phòng ấy, vẫn chín giờ ấy, vẫn nồi áp suất ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Are these costs right this time?",
          "sub": "Lần này chi phí đúng chưa em?",
          "face": "stern",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "You want to check the costs? Page three. Let's review it together after the meeting.",
          "sub": "Chị muốn kiểm phần chi phí ạ? Trang ba đây. Sau họp mình xem lại cùng nhau nhé.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One breath, one sentence of facts, one clear next step. No whistle today.",
          "sub": "Một nhịp thở, một câu đúng sự việc, một việc cụ thể để chốt. Hôm nay nồi chẳng xì hơi.",
          "keys": [
            "một việc cụ thể để chốt"
          ]
        }
      ],
      "ref": "outro"
    },
    {
      "id": "s27",
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
            "at": "l1:Breathe",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:feeling",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:part",
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
            "x": 5436,
            "y": 440,
            "at": "l1:Breathe+400"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8572,
            "y": 480,
            "at": "l2:feeling+400"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4636,
            "y": 1390,
            "at": "l3:part+1200"
          },
          {
            "id": "z-s1",
            "t": "text",
            "text": "Chuỗi: bình tĩnh → tạm dừng → sự việc/cảm xúc",
            "x": 7932,
            "y": 1560,
            "size": 32,
            "at": "l4:Each+1100",
            "font": "base"
          },
          {
            "id": "z-s2",
            "t": "text",
            "text": "→ sếp → nhận vơ → xin lỗi → hoà giải → nhà",
            "x": 7932,
            "y": 1610,
            "size": 32,
            "at": "l4:series+600",
            "font": "base"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; khi có đe doạ, bạo lực hay vấn đề pháp lý, hãy tìm người có chuyên môn hoặc cơ quan chức năng.",
            "x": 7932,
            "y": 1810,
            "size": 26,
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
          "say": "So: no perfect sentence needed. Breathe out once.",
          "sub": "Tóm lại: không cần câu nói hoàn hảo. Thở ra một nhịp.",
          "keys": [
            "Thở ra một nhịp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Hear the feeling first.",
          "sub": "Nghe ra cảm xúc trước.",
          "keys": [
            "cảm xúc trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Start with your own part.",
          "sub": "Mở đầu bằng phần của mình.",
          "keys": [
            "phần của mình"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Each stop has its own lesson in this series.",
          "sub": "Mỗi chặng có một bài đào sâu trong chuỗi này."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s47",
      "module": "QUIZ-01",
      "ref": "questions[26]",
      "data": {
        "q": "Something goes wrong at work, what should your first sentence be about?",
        "options": [
          "The other department, because they usually make mistakes like this one",
          "Your own part in the problem, even a small one, and how you will fix it",
          "The computer system, so that no person has to take any responsibility"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "package",
        "why": "Câu đầu tiên quyết định mọi người cùng sửa hay cùng tự vệ. Hãy nói phần của mình trước."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Something goes wrong at work, what should your first sentence be about?",
          "sub": "Có chuyện hỏng ở chỗ làm, câu đầu tiên của bạn nên nói về điều gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Your own part in the problem, even a small one, and how you will fix it.",
          "sub": "Phần của mình trong chuyện đó, dù nhỏ, và mình sẽ sửa thế nào."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Your first sentence decides if people fix it together, or defend themselves together.",
          "sub": "Câu đầu tiên quyết định mọi người cùng sửa hay cùng tự vệ."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s48",
      "module": "END-05",
      "data": {
        "text": "Bình tĩnh, đúng việc, chốt một bước",
        "sub": "Bốn mươi câu hỏi đang chờ bạn"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Write down two signs of your anger, then open the lesson on staying calm. And try the forty questions!",
          "sub": "Viết ra hai dấu hiệu cơn giận, rồi mở bài giữ bình tĩnh. Và thử bốn mươi câu nhé!"
        }
      ]
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s26"
  }
};
