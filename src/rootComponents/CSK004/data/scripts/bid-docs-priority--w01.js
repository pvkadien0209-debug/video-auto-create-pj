// bid-docs-priority--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bid-docs-priority--w01",
  "unit": {
    "audience": "epc-procurement",
    "slug": "bid-docs-priority",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Hồ sơ mời thầu, hồ sơ dự thầu và biên bản thương thảo đứng ở đâu trong thứ tự ưu tiên?",
    "series": "Từ chọn thầu đến điều khoản EPC — cho mua sắm đấu thầu, biến kết quả thương thảo thành câu chữ đòi được tiền"
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
            "fit": [
              "a-v"
            ],
            "zoom": 1.3,
            "move": "cut"
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "a-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 60,
            "y": 130,
            "w": 720,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "worried"
                }
              ],
              "props": [
                "electric-plug",
                "page-facing-up"
              ]
            },
            "at": 0,
            "caption": "Sau ngày ký · phòng họp",
            "icon": "electric-plug"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "Đề xuất: loại cáp rẻ hơn",
            "x": 900,
            "y": 170,
            "size": 46,
            "at": "l3:cheaper",
            "color": "coral"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "Yêu cầu: loại cáp tốt hơn",
            "x": 900,
            "y": 250,
            "size": 46,
            "at": "l3:better",
            "color": "accent"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "“…được chấp thuận khi…”",
            "x": 900,
            "y": 360,
            "size": 52,
            "at": "l4:sentence",
            "hl": [
              {
                "text": "khi…",
                "at": "l4:sentence"
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
          "say": "Some months after signing. Sam, the contractor's lead negotiator, has a sentence ready.",
          "sub": "Vài tháng sau ngày ký. Sam, trưởng nhóm đàm phán của nhà thầu, có sẵn một câu.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "My proposal was approved at",
          "sub": "Đề xuất của tôi đã được chấp thuận khi…",
          "pose": "explain",
          "stop": true
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Cut! Her proposal named a cheaper cable. The owner's requirements, a better one.",
          "sub": "Cắt! Đề xuất của chị ấy ghi loại cáp rẻ hơn. Yêu cầu của chủ đầu tư ghi loại tốt hơn.",
          "keys": [
            "loại cáp rẻ hơn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Hold that sentence. We'll hear the end soon.",
          "sub": "Giữ câu ấy lại. Lát nữa nghe nốt.",
          "keys": [
            "nghe nốt"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "whoosh",
          "offsetMs": 900
        }
      ],
      "ref": "p5"
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
              "a-w"
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
            "id": "a-w",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 920,
            "y": 130,
            "w": 720,
            "data": {
              "set": "office",
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
                  "side": "right",
                  "face": "happy",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "books",
                "page-facing-up"
              ]
            },
            "at": "l1",
            "caption": "Tuần trước ngày ký · bàn Thảo",
            "icon": "books"
          },
          {
            "id": "a-4",
            "t": "text",
            "text": "Quay lại: tuần trước ngày ký",
            "x": 60,
            "y": 630,
            "size": 38,
            "at": "l1:before",
            "color": "muted"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Trên kính, dưới nhường”",
            "x": 60,
            "y": 690,
            "size": 48,
            "at": "l5:respect",
            "color": "accent",
            "hl": [
              {
                "text": "Trên kính",
                "at": "l5:respect"
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
          "say": "Rewind to the week before signing. Thảo, head of procurement, faces three stacks.",
          "sub": "Quay lại tuần trước ngày ký. Thảo, trưởng ban mua sắm, ngồi trước ba chồng giấy cao.",
          "keys": [
            "tuần trước ngày ký"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "A thousand-page bid, three rounds of minutes, and their final draft.",
          "sub": "Hồ sơ dự thầu nghìn trang, biên bản ba vòng họp, và bản cuối nhà thầu gửi.",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And Dũng, her young officer, with a bright idea, as usual.",
          "sub": "Còn Dũng, chuyên viên trẻ, như mọi khi, có sáng kiến.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Easy. Staple them all together, and sign!",
          "sub": "Dễ ợt. Bấm ghim hết vào một tập, rồi ký!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: respect those above, give way to those below. A contract needs that too.",
          "sub": "Ông bà dạy: “Trên kính, dưới nhường.” Hợp đồng cũng cần biết ai trên ai dưới.",
          "keys": [
            "Trên kính, dưới nhường"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 400
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
            "text": "Khi vênh nhau, cái nào thắng?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:wins",
            "hl": [
              {
                "text": "cái nào thắng",
                "at": "l1:wins"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Chỉ tài liệu có tên trong HĐ",
            "x": 2028,
            "y": 180,
            "size": 44,
            "at": "l2:listed",
            "color": "accent",
            "hl": [
              {
                "text": "có tên",
                "at": "l2:listed"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "mới chắc có giá trị",
            "x": 2068,
            "y": 250,
            "size": 44,
            "at": "l2:count"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Yêu cầu CĐT trên đề xuất NT",
            "x": 2028,
            "y": 340,
            "size": 48,
            "at": "l3:above",
            "hl": [
              {
                "text": "trên",
                "at": "l3:above"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 560,
            "w": 240,
            "h": 90,
            "at": "l4:week+400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2298,
            "y": 560,
            "w": 240,
            "h": 90,
            "at": "l4:week+650",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2568,
            "y": 560,
            "w": 240,
            "h": 90,
            "at": "l4:week+900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2838,
            "y": 560,
            "w": 240,
            "h": 90,
            "at": "l4:week+1150",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3108,
            "y": 560,
            "w": 240,
            "h": 90,
            "at": "l4:week+1400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3378,
            "y": 560,
            "w": 240,
            "h": 90,
            "at": "l4:week+1650",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2",
            "x": 2078,
            "y": 575,
            "size": 46,
            "at": "l4:week+520"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T3",
            "x": 2348,
            "y": 575,
            "size": 46,
            "at": "l4:week+770"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T4",
            "x": 2618,
            "y": 575,
            "size": 46,
            "at": "l4:week+1020"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T5",
            "x": 2888,
            "y": 575,
            "size": 46,
            "at": "l4:week+1270"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T6",
            "x": 3158,
            "y": 575,
            "size": 46,
            "at": "l4:week+1520"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T7",
            "x": 3428,
            "y": 575,
            "size": 46,
            "at": "l4:week+1770"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "When the bid, the minutes and the draft disagree, which wins?",
          "sub": "Khi hồ sơ dự thầu, biên bản và bản cuối nói khác nhau, cái nào thắng?",
          "keys": [
            "cái nào thắng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Short answer: only documents listed in the contract surely count.",
          "sub": "Đáp ngắn: chỉ tài liệu được liệt kê trong hợp đồng mới chắc chắn có giá trị.",
          "keys": [
            "được liệt kê trong hợp đồng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And the order of precedence must put the owner's requirements above the contractor's proposal.",
          "sub": "Và thứ tự ưu tiên phải đặt Yêu cầu của chủ đầu tư trên đề xuất của nhà thầu.",
          "keys": [
            "thứ tự ưu tiên"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One week before the pen.",
          "sub": "Một tuần trước khi đặt bút."
        }
      ],
      "ref": "intro"
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
            "id": "d-t",
            "t": "text",
            "text": "① Thứ Hai · Ai đứng trên?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:above"
          },
          {
            "id": "d-b0",
            "t": "box",
            "x": 3996,
            "y": 150,
            "w": 600,
            "h": 66,
            "at": "l3:amendments",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "d-b1",
            "t": "box",
            "x": 4046,
            "y": 230,
            "w": 600,
            "h": 66,
            "at": "l3:body",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "d-b2",
            "t": "box",
            "x": 4096,
            "y": 310,
            "w": 600,
            "h": 66,
            "at": "l4:requirements",
            "stroke": 4,
            "color": "accent"
          },
          {
            "id": "d-b3",
            "t": "box",
            "x": 4146,
            "y": 390,
            "w": 600,
            "h": 66,
            "at": "l4:appendices",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "d-b4",
            "t": "box",
            "x": 4196,
            "y": 470,
            "w": 600,
            "h": 66,
            "at": "l4:proposal",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "(i) Văn bản sửa đổi",
            "x": 4021,
            "y": 160,
            "size": 38,
            "at": "l3:amendments+200"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "(ii) Thân hợp đồng",
            "x": 4071,
            "y": 240,
            "size": 38,
            "at": "l3:body+200"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "(iii) Yêu cầu CĐT",
            "x": 4121,
            "y": 320,
            "size": 38,
            "at": "l4:requirements+200"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "(iv) Phụ lục khác",
            "x": 4171,
            "y": 400,
            "size": 38,
            "at": "l4:appendices+200"
          },
          {
            "id": "d-l4",
            "t": "text",
            "text": "(v) Đề xuất NT",
            "x": 4221,
            "y": 480,
            "size": 38,
            "at": "l4:proposal+200"
          },
          {
            "id": "d-r",
            "t": "text",
            "text": "Thứ tự = luật làng của hợp đồng",
            "x": 4936,
            "y": 160,
            "size": 38,
            "at": "l2:village",
            "hl": [
              {
                "text": "luật làng",
                "at": "l2:village"
              }
            ]
          },
          {
            "id": "d-s",
            "t": "text",
            "text": "sau ưu tiên hơn trước",
            "x": 4936,
            "y": 220,
            "size": 36,
            "at": "l3:later",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: Monday. Who stands above whom?",
          "sub": "Chặng một: thứ Hai. Ai đứng trên ai?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The order of precedence decides which document wins when they clash. The village rule of the contract.",
          "sub": "Thứ tự ưu tiên quyết định tài liệu nào thắng khi vênh nhau. Lệ làng của hợp đồng.",
          "keys": [
            "Lệ làng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A common sample: amendments first, later beats earlier. Then the body.",
          "sub": "Câu mẫu chung: văn bản sửa đổi đứng đầu, sau ưu tiên hơn trước. Rồi thân hợp đồng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then the owner's requirements, then other appendices, and last, the contractor's technical proposal.",
          "sub": "Rồi Yêu cầu của chủ đầu tư, các phụ lục khác, và cuối cùng là đề xuất kỹ thuật của nhà thầu.",
          "keys": [
            "cuối cùng là đề xuất kỹ thuật"
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
            "fit": "C",
            "move": "cut"
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
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4936,
            "y": 330,
            "w": 640,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "electric-plug",
                "page-facing-up"
              ]
            },
            "at": "l1",
            "caption": "Sau ngày ký · nếu không xếp thứ tự",
            "icon": "electric-plug"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Yêu cầu của mình trên lời chào",
            "x": 3996,
            "y": 560,
            "size": 40,
            "at": "l4:above",
            "color": "accent",
            "hl": [
              {
                "text": "trên lời chào",
                "at": "l4:seller"
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
          "say": "Now, Sam's sentence, if the contract never ranked the two.",
          "sub": "Giờ, câu của Sam, khi hợp đồng không xếp thứ tự hai tài liệu ấy.",
          "keys": [
            "câu của Sam"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "My proposal was approved at signing.",
          "sub": "Đề xuất của tôi đã được chấp thuận khi ký.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The owner must reach for the highest standard rule, and the argument begins.",
          "sub": "Chủ đầu tư phải viện dẫn điều “yêu cầu cao nhất thắng”, và hai bên bắt đầu tranh luận.",
          "keys": [
            "yêu cầu cao nhất thắng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lesson: your own requirements must stand above the seller's offer.",
          "sub": "Rút ra: Yêu cầu của mình phải đứng trên lời chào của người bán.",
          "keys": [
            "đứng trên lời chào"
          ]
        }
      ],
      "ref": "p5,p6"
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
            "id": "d-h",
            "t": "text",
            "text": "“Cao nhất thắng”: cao theo gì?",
            "x": 3996,
            "y": 620,
            "size": 36,
            "at": "l1:higher",
            "color": "coral"
          },
          {
            "id": "d-h2",
            "t": "text",
            "text": "→ cần cả hai: thứ tự + xác nhận",
            "x": 3996,
            "y": 672,
            "size": 32,
            "at": "l2:both",
            "hl": [
              {
                "text": "cả hai",
                "at": "l2:both"
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
          "say": "Highest standard wins? Helpful, but higher by what measure, and who decides?",
          "sub": "“Yêu cầu cao nhất thắng”? Có lợi, nhưng dễ cãi: cao hơn theo tiêu chí nào, ai xác định?",
          "keys": [
            "theo tiêu chí nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So have both: a clear ranking, and the contractor confirming it checked your requirements.",
          "sub": "Nên có cả hai: thứ tự ưu tiên rõ, và câu nhà thầu xác nhận đã kiểm tra Yêu cầu của chủ đầu tư.",
          "keys": [
            "có cả hai"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s07",
      "module": "BRK-09",
      "data": {
        "kind": "Nguồn",
        "title": "NĐ 210/2026, khoản 5 Điều 4",
        "detail": "EPC: rõ phạm vi, thiết kế, thiết bị; kiểm soát thống nhất",
        "illus": "classical-building",
        "around": [
          "page-facing-up",
          "balance-scale"
        ],
        "icon": "book-open"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "For EPC, Decree two ten wants clear scope, design and equipment.",
          "sub": "Với EPC, Nghị định 210/2026 đòi rõ phạm vi, yêu cầu thiết kế, thiết bị.",
          "keys": [
            "Nghị định 210/2026"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Controlled consistently from start to finish.",
          "sub": "Kiểm soát thống nhất suốt quá trình."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p8"
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
          }
        ],
        "items": [
          {
            "id": "d-80",
            "t": "text",
            "text": "Đ80 LXD: ngôn ngữ là tiếng Việt",
            "x": 4936,
            "y": 275,
            "size": 34,
            "at": "l1:Vietnamese",
            "hl": [
              {
                "text": "tiếng Việt",
                "at": "l1:Vietnamese"
              }
            ]
          },
          {
            "id": "d-def",
            "t": "text",
            "text": "Thứ tự mặc định? Pháp chế kiểm",
            "x": 3996,
            "y": 722,
            "size": 32,
            "at": "l2:default",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Article eighty of the 2025 Construction Law: the language is Vietnamese. With a foreign party and no agreed ranking, Vietnamese prevails.",
          "sub": "Điều 80 Luật Xây dựng 2025: ngôn ngữ hợp đồng là tiếng Việt; có bên nước ngoài mà không thoả thuận thứ tự thì tiếng Việt được ưu tiên.",
          "keys": [
            "tiếng Việt được ưu tiên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Is there a default ranking of documents in law? Legal checks. Don't let your contract depend on it.",
          "sub": "Luật có thứ tự mặc định giữa tài liệu không? Pháp chế cần kiểm. Đừng để hợp đồng phải dựa vào đó.",
          "keys": [
            "Đừng để hợp đồng phải dựa vào đó"
          ]
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s03",
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
              "c-v"
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
            "id": "c-t",
            "t": "text",
            "text": "② Thứ Ba · Ba lớp hồ sơ",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:layers"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 130,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "blue-book",
                "triangular-ruler"
              ]
            },
            "at": "l2:Hoa",
            "caption": "Thứ Ba · ban kỹ thuật",
            "icon": "blue-book"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Mời thầu: chủ đầu tư đòi gì",
            "x": 5964,
            "y": 170,
            "size": 44,
            "at": "l4:asks"
          },
          {
            "id": "c-1b",
            "t": "text",
            "text": "Yêu cầu: phạm vi, thông số, thử",
            "x": 6004,
            "y": 240,
            "size": 38,
            "at": "l4:heart",
            "color": "accent"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Dự thầu: nhà thầu chào gì",
            "x": 5964,
            "y": 320,
            "size": 44,
            "at": "l5:offers"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Biên bản: hai bên chốt gì",
            "x": 5964,
            "y": 400,
            "size": 44,
            "at": "l5:minutes"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Hiếm khi khớp nhau",
            "x": 5964,
            "y": 490,
            "size": 48,
            "at": "l6:rarely",
            "color": "coral",
            "hl": [
              {
                "text": "Hiếm khi khớp",
                "at": "l6:rarely"
              }
            ]
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "Mua sắm chọn: lớp nào, ở đâu",
            "x": 5964,
            "y": 570,
            "size": 42,
            "at": "l7:decide",
            "hl": [
              {
                "text": "lớp nào, ở đâu",
                "at": "l7:where"
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
          "say": "Second stop: Tuesday. Three layers of documents.",
          "sub": "Chặng hai: thứ Ba. Ba lớp hồ sơ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thảo visits Cô Hoa, head of the technical team, keeper of the owner's requirements.",
          "sub": "Thảo ghé Cô Hoa, trưởng ban kỹ thuật, người giữ Yêu cầu của chủ đầu tư.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Scope, specifications, standards, tests. It's all in our requirements. Right, done!",
          "sub": "Phạm vi, thông số, tiêu chuẩn, thử nghiệm. Tất cả trong Yêu cầu của mình. Rồi, vậy nha!",
          "pose": "hold"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Layer one: the invitation to bid, what the owner asks, with the requirements at its heart.",
          "sub": "Lớp một: hồ sơ mời thầu, điều chủ đầu tư đòi, cốt lõi là Yêu cầu của chủ đầu tư."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Layer two: the bid, what the contractor offers. Layer three: the minutes, what both sides agreed.",
          "sub": "Lớp hai: hồ sơ dự thầu, điều nhà thầu chào. Lớp ba: biên bản thương thảo, điều hai bên chốt."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "They rarely match. The proposal may fall short; the minutes may change both.",
          "sub": "Ba lớp hiếm khi khớp. Đề xuất có thể thấp hơn Yêu cầu; biên bản có thể sửa cả hai.",
          "keys": [
            "hiếm khi khớp"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Procurement must decide which layer goes into the contract, and where.",
          "sub": "Việc của mua sắm: quyết định lớp nào vào hợp đồng, ở vị trí nào.",
          "keys": [
            "lớp nào vào hợp đồng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Biên bản ký rồi, sao vẫn có thể mất?",
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
          "say": "Signed minutes. How could they vanish?",
          "sub": "Biên bản ký rồi, sao vẫn có thể mất?",
          "keys": [
            "có thể mất"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p10"
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
            "text": "③ Thứ Tư · Cục tẩy lớn",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:eraser"
          },
          {
            "id": "e-w",
            "t": "illus",
            "name": "wastebasket",
            "x": 7932,
            "y": 160,
            "size": 110,
            "at": "l2:entire"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Điều toàn bộ thoả thuận",
            "x": 8062,
            "y": 175,
            "size": 48,
            "at": "l2:entire",
            "color": "coral",
            "hl": [
              {
                "text": "toàn bộ thoả thuận",
                "at": "l2:entire"
              }
            ]
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "thư chào · email · biên bản họp",
            "x": 7932,
            "y": 300,
            "size": 42,
            "at": "l3:Offer"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "cam kết trong hồ sơ dự thầu",
            "x": 7932,
            "y": 370,
            "size": 42,
            "at": "l3:bid"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "→ có thể hết giá trị",
            "x": 7932,
            "y": 440,
            "size": 46,
            "at": "l4:lapsed",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Wednesday. Meet the biggest eraser in the contract.",
          "sub": "Chặng ba: thứ Tư. Gặp cục tẩy to nhất hợp đồng.",
          "keys": [
            "cục tẩy to nhất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The entire agreement clause: the contract is the whole deal, and replaces everything before signing.",
          "sub": "Điều toàn bộ thoả thuận: hợp đồng là toàn bộ thoả thuận, thay thế mọi trao đổi trước khi ký.",
          "keys": [
            "Điều toàn bộ thoả thuận"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Offer letters, emails, meeting minutes, promises in the bid.",
          "sub": "Thư chào, email, biên bản họp, cam kết trong hồ sơ dự thầu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Anything not carried into the body or appendices, the contractor can argue has lapsed.",
          "sub": "Thứ gì không đưa vào thân hợp đồng hay phụ lục, nhà thầu có thể lập luận là đã hết giá trị.",
          "keys": [
            "hết giá trị"
          ]
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Tư · tập biên bản",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "thao",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Biên bản ký rồi, khỏi đưa vào",
          "why": "Điều toàn bộ thoả thuận có thể gạt biên bản; người ký biên bản chưa chắc có thẩm quyền.",
          "rule": "Biên bản chỉ sống khi có tên trong hợp đồng"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "The minutes are signed by both sides. No need to copy them into the contract!",
          "sub": "Biên bản có chữ ký hai bên rồi. Khỏi chép vào hợp đồng!",
          "pose": "explain",
          "face": "happy",
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
          "say": "The eraser can wipe them. And the negotiator who signed may lack authority to sign the contract.",
          "sub": "Cục tẩy có thể xoá chúng. Mà người đi thương thảo ký biên bản chưa chắc có thẩm quyền ký hợp đồng.",
          "keys": [
            "chưa chắc có thẩm quyền"
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
          "say": "List the minutes as a contract document with a rank. Or copy each point into the body.",
          "sub": "Liệt kê biên bản vào danh mục tài liệu hợp đồng, có thứ hạng. Hoặc chép từng điểm vào thân hợp đồng.",
          "phase": "redo",
          "pose": "explain"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p10"
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
            "id": "e-5",
            "t": "text",
            "text": "Cách 1: vào danh mục, có hạng",
            "x": 8832,
            "y": 175,
            "size": 42,
            "at": "l1:list",
            "color": "accent"
          },
          {
            "id": "e-6",
            "t": "text",
            "text": "Cách 2: chép từng điểm vào thân",
            "x": 8832,
            "y": 255,
            "size": 40,
            "at": "l1:copy",
            "color": "accent"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Biên bản sống khi có tên",
            "x": 8832,
            "y": 380,
            "size": 48,
            "at": "l2:named",
            "color": "accent",
            "hl": [
              {
                "text": "có tên",
                "at": "l2:named"
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
          "say": "Two safe ways: list the minutes with a clear rank, or copy every agreed point into the body and appendices.",
          "sub": "Hai cách an toàn: liệt kê biên bản với vị trí rõ trong thứ tự ưu tiên, hoặc chép từng điểm đã chốt vào thân và phụ lục."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Minutes only survive when they're named in the contract.",
          "sub": "Biên bản chỉ sống sót khi có tên trong hợp đồng.",
          "keys": [
            "có tên trong hợp đồng"
          ]
        }
      ],
      "ref": "p10,p11"
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
            "at": "l3",
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
            "text": "④ Thứ Năm · Địa chỉ phụ lục",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:address"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 920,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "card-index",
                "nut-and-bolt"
              ]
            },
            "at": "l1:Thursday",
            "caption": "Thứ Năm · bảng theo dõi cam kết",
            "icon": "card-index"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Nhân sự chủ chốt",
            "x": 60,
            "y": 1260,
            "size": 42,
            "at": "l2:staff"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Nhà sản xuất, thông số thiết bị",
            "x": 60,
            "y": 1325,
            "size": 40,
            "at": "l2:makers"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Thầu phụ · tiến độ · bảo hành",
            "x": 60,
            "y": 1390,
            "size": 40,
            "at": "l2:subcontractors"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "Mỗi loại: một phụ lục sẵn",
            "x": 60,
            "y": 1470,
            "size": 44,
            "at": "l2:appendix",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: Thursday. Every bid promise needs an address.",
          "sub": "Chặng bốn: thứ Năm. Mỗi cam kết dự thầu cần một địa chỉ.",
          "keys": [
            "một địa chỉ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Worth keeping: key staff, equipment makers and specs, subcontractors, schedule, warranty. Each has its appendix.",
          "sub": "Đáng giữ: nhân sự chủ chốt, nhà sản xuất và thông số thiết bị, thầu phụ, tiến độ, bảo hành. Mỗi loại đã có phụ lục tương ứng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "The bid says main equipment from the named maker, with so many years design life. Where does it go?",
          "sub": "Hồ sơ dự thầu ghi thiết bị chính của nhà sản xuất đã nêu, tuổi thọ thiết kế [ ] năm. Đưa vào đâu chị?",
          "pose": "hold",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Five steps. Watch.",
          "sub": "Năm bước. Xem nhé.",
          "pose": "explain"
        }
      ],
      "ref": "p12,p13"
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
            "id": "f-st-c0",
            "t": "box",
            "x": 60,
            "y": 1560,
            "w": 40,
            "h": 40,
            "at": "l1:table",
            "stroke": 5
          },
          {
            "id": "f-st-k0",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1544,
            "size": 50,
            "at": "l1:table+600",
            "color": "accent"
          },
          {
            "id": "f-st-l0",
            "t": "text",
            "text": "Ghi vào bảng + số trang",
            "x": 122,
            "y": 1550,
            "size": 32,
            "at": "l1:table+200"
          },
          {
            "id": "f-st-c1",
            "t": "box",
            "x": 60,
            "y": 1618,
            "w": 40,
            "h": 40,
            "at": "l1:data",
            "stroke": 5
          },
          {
            "id": "f-st-k1",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1602,
            "size": 50,
            "at": "l1:data+600",
            "color": "accent"
          },
          {
            "id": "f-st-l1",
            "t": "text",
            "text": "Chọn phụ lục đích",
            "x": 122,
            "y": 1608,
            "size": 32,
            "at": "l1:data+200"
          },
          {
            "id": "f-st-c2",
            "t": "box",
            "x": 60,
            "y": 1676,
            "w": 40,
            "h": 40,
            "at": "l2:obligation",
            "stroke": 5
          },
          {
            "id": "f-st-k2",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1660,
            "size": 50,
            "at": "l2:obligation+600",
            "color": "accent"
          },
          {
            "id": "f-st-l2",
            "t": "text",
            "text": "Chép thành câu nghĩa vụ",
            "x": 122,
            "y": 1666,
            "size": 32,
            "at": "l2:obligation+200"
          },
          {
            "id": "f-st-c3",
            "t": "box",
            "x": 60,
            "y": 1734,
            "w": 40,
            "h": 40,
            "at": "l3:body",
            "stroke": 5
          },
          {
            "id": "f-st-k3",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1718,
            "size": 50,
            "at": "l3:body+600",
            "color": "accent"
          },
          {
            "id": "f-st-l3",
            "t": "text",
            "text": "Thân HĐ: “là nghĩa vụ”",
            "x": 122,
            "y": 1724,
            "size": 32,
            "at": "l3:body+200"
          },
          {
            "id": "f-st-c4",
            "t": "box",
            "x": 60,
            "y": 1792,
            "w": 40,
            "h": 40,
            "at": "l4:transferred",
            "stroke": 5
          },
          {
            "id": "f-st-k4",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1776,
            "size": 50,
            "at": "l4:transferred+600",
            "color": "accent"
          },
          {
            "id": "f-st-l4",
            "t": "text",
            "text": "Đánh dấu “đã chuyển”",
            "x": 122,
            "y": 1782,
            "size": 32,
            "at": "l4:transferred+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "One: log it in the table with the bid page. Two: target the equipment data sheet appendix.",
          "sub": "Một: ghi vào bảng theo dõi, kèm trang hồ sơ dự thầu. Hai: chọn phụ lục đích, bảng thông số thiết bị.",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Three: rewrite it as an obligation. The contractor supplies that equipment with those specs.",
          "sub": "Ba: chép thành câu nghĩa vụ: nhà thầu cung cấp thiết bị đó với thông số đó."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Four: in the body, the contractor confirms the commitments in Appendix blank are obligations.",
          "sub": "Bốn: thêm vào thân hợp đồng câu: “Nhà thầu xác nhận các cam kết tại Phụ lục [ ] là nghĩa vụ theo Hợp đồng.”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Five: mark it transferred, with the appendix number.",
          "sub": "Năm: đánh dấu “đã chuyển” và ghi số phụ lục.",
          "face": "happy"
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
            "id": "f-k",
            "t": "text",
            "text": "Mỗi cam kết một địa chỉ",
            "x": 960,
            "y": 1780,
            "size": 40,
            "at": "l1:address",
            "color": "accent",
            "hl": [
              {
                "text": "địa chỉ",
                "at": "l1:address"
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
          "say": "Every bid promise needs an address in an appendix.",
          "sub": "Mỗi cam kết dự thầu phải có địa chỉ trong phụ lục.",
          "keys": [
            "có địa chỉ trong phụ lục"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And where the proposal falls below your requirements, don't lift the whole block. Rank it below, or copy only what you truly accepted.",
          "sub": "Phần đề xuất thấp hơn Yêu cầu thì đừng kéo cả khối lên. Để đề xuất đứng dưới, hoặc chỉ trích phần đã thật sự chấp thuận.",
          "keys": [
            "đừng kéo cả khối lên"
          ]
        }
      ],
      "ref": "p14,p15"
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
            "text": "⑤ Thứ Sáu · Danh mục phụ lục",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:list"
          },
          {
            "id": "g-e",
            "t": "text",
            "text": "Lỗi hay gặp:",
            "x": 2028,
            "y": 1260,
            "size": 48,
            "at": "l2:mistakes",
            "color": "coral"
          },
          {
            "id": "g-e1",
            "t": "text",
            "text": "• có tên, không có bản ký",
            "x": 2028,
            "y": 1330,
            "size": 40,
            "at": "l2:copy"
          },
          {
            "id": "g-e2",
            "t": "text",
            "text": "• tên danh mục ≠ trang bìa",
            "x": 2028,
            "y": 1390,
            "size": 40,
            "at": "l3:cover"
          },
          {
            "id": "g-e3",
            "t": "text",
            "text": "• dẫn “Phụ lục 2”, đánh chữ",
            "x": 2028,
            "y": 1450,
            "size": 40,
            "at": "l3:letters"
          },
          {
            "id": "g-e4",
            "t": "text",
            "text": "• “sẽ đính kèm sau”",
            "x": 2028,
            "y": 1510,
            "size": 40,
            "at": "l4:later",
            "color": "coral",
            "hl": [
              {
                "text": "đính kèm sau",
                "at": "l4:later"
              }
            ]
          },
          {
            "id": "g-ck-c0",
            "t": "box",
            "x": 2928,
            "y": 1290,
            "w": 40,
            "h": 40,
            "at": "l5:signed",
            "stroke": 5
          },
          {
            "id": "g-ck-k0",
            "t": "text",
            "text": "✓",
            "x": 2932,
            "y": 1274,
            "size": 50,
            "at": "l5:signed+600",
            "color": "accent"
          },
          {
            "id": "g-ck-l0",
            "t": "text",
            "text": "Mỗi phụ lục có bản ký",
            "x": 2990,
            "y": 1280,
            "size": 38,
            "at": "l5:signed+200"
          },
          {
            "id": "g-ck-c1",
            "t": "box",
            "x": 2928,
            "y": 1365,
            "w": 40,
            "h": 40,
            "at": "l5:matching",
            "stroke": 5
          },
          {
            "id": "g-ck-k1",
            "t": "text",
            "text": "✓",
            "x": 2932,
            "y": 1349,
            "size": 50,
            "at": "l5:matching+600",
            "color": "accent"
          },
          {
            "id": "g-ck-l1",
            "t": "text",
            "text": "Tên, số khớp mọi chỗ",
            "x": 2990,
            "y": 1355,
            "size": 38,
            "at": "l5:matching+200"
          },
          {
            "id": "g-ck-c2",
            "t": "box",
            "x": 2928,
            "y": 1440,
            "w": 40,
            "h": 40,
            "at": "l6:later",
            "stroke": 5
          },
          {
            "id": "g-ck-k2",
            "t": "text",
            "text": "✓",
            "x": 2932,
            "y": 1424,
            "size": 50,
            "at": "l6:later+600",
            "color": "accent"
          },
          {
            "id": "g-ck-l2",
            "t": "text",
            "text": "Hết “sẽ đính kèm sau”",
            "x": 2990,
            "y": 1430,
            "size": 38,
            "at": "l6:later+200"
          },
          {
            "id": "g-ck-c3",
            "t": "box",
            "x": 2928,
            "y": 1515,
            "w": 40,
            "h": 40,
            "at": "l6:initials",
            "stroke": 5
          },
          {
            "id": "g-ck-k3",
            "t": "text",
            "text": "✓",
            "x": 2932,
            "y": 1499,
            "size": 50,
            "at": "l6:initials+600",
            "color": "accent"
          },
          {
            "id": "g-ck-l3",
            "t": "text",
            "text": "Ký nháy, giáp lai",
            "x": 2990,
            "y": 1505,
            "size": 38,
            "at": "l6:initials+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: Friday. The list of appendices against the signing set.",
          "sub": "Chặng năm: thứ Sáu. Danh mục phụ lục so với tập ký."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Common mistakes: the list names an appendix with no signed copy.",
          "sub": "Lỗi hay gặp: danh mục ghi một phụ lục nhưng không có bản ký.",
          "keys": [
            "Lỗi hay gặp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Names differ from the cover page. The body cites Appendix two, but appendices use letters.",
          "sub": "Tên trong danh mục khác trang bìa. Thân hợp đồng dẫn “Phụ lục 2”, trong khi phụ lục đánh chữ cái."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And schedules or milestones still marked: to be attached later. Each one opens a fight.",
          "sub": "Và phụ lục tiến độ, mốc thanh toán ghi “sẽ đính kèm sau”. Mỗi lỗi mở ra một cuộc cãi.",
          "keys": [
            "sẽ đính kèm sau"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Thảo's checklist: every listed appendix signed, names and numbers matching everywhere.",
          "sub": "Danh sách của Thảo: mỗi phụ lục có bản ký, tên và số khớp ở danh mục, trang bìa, chỗ dẫn chiếu."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "No more to be attached later, and initials or seals on every page, as agreed.",
          "sub": "Không còn “sẽ đính kèm sau”, và mỗi trang có chữ ký nháy hoặc dấu giáp lai theo thoả thuận."
        }
      ],
      "ref": "p16,p17"
    },
    {
      "id": "s17",
      "module": "BRK-04",
      "data": {
        "title": "Phụ lục tiến độ",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "“Phụ lục 2 – Tiến độ”, sẽ đính kèm sau",
        "right": "“Phụ lục D – Tiến độ, [ ] trang, ký ngày [ ]”",
        "wrongIllus": "page-with-curl",
        "rightIllus": "spiral-calendar"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before: Appendix two, schedule, to be attached later.",
          "sub": "Trước: Phụ lục 2, tiến độ, sẽ đính kèm sau."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After: Appendix D, pages counted, signed the same day.",
          "sub": "Sau: Phụ lục D, đủ số trang, ký cùng ngày.",
          "keys": [
            "ký cùng ngày"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p18"
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
            "id": "g-k",
            "t": "text",
            "text": "Danh mục ghi gì, tập có nấy",
            "x": 2028,
            "y": 1650,
            "size": 46,
            "at": "l2:contain",
            "color": "accent",
            "hl": [
              {
                "text": "có nấy",
                "at": "l2:contain"
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
          "say": "The first version lets the contractor say there's no binding schedule. The second leaves no room to argue.",
          "sub": "Bản trước để nhà thầu nói không có tiến độ ràng buộc; bản sau không còn chỗ để cãi.",
          "keys": [
            "không còn chỗ để cãi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Whatever the list names, the signed set must contain.",
          "sub": "Danh mục ghi gì, tập ký phải có nấy.",
          "keys": [
            "tập ký phải có nấy"
          ]
        }
      ],
      "ref": "p18,p19"
    },
    {
      "id": "s19",
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
            "at": "l6",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Sáng thứ Bảy · Lần sợi chỉ",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:thread"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "hold",
                  "face": "surprised"
                }
              ],
              "props": [
                "thread",
                "magnifying-glass-tilted-left"
              ]
            },
            "at": "l1:Saturday",
            "caption": "Sáng thứ Bảy · bàn Thảo",
            "icon": "thread"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Một khái niệm, mọi chỗ",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l2:concept",
            "hl": [
              {
                "text": "mọi chỗ",
                "at": "l2:everywhere"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Giá · thời hạn · bàn giao",
            "x": 3996,
            "y": 1335,
            "size": 42,
            "at": "l3:price"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Bảo lãnh · phạt · chấm dứt",
            "x": 3996,
            "y": 1400,
            "size": 42,
            "at": "l3:guarantee",
            "color": "accent"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "Cặp hay vênh: bảo lãnh ×3 chỗ",
            "x": 3996,
            "y": 1480,
            "size": 40,
            "at": "l4:guarantee",
            "color": "coral"
          },
          {
            "id": "h-5",
            "t": "text",
            "text": "Xem xét tài liệu · chạy thử",
            "x": 3996,
            "y": 1550,
            "size": 38,
            "at": "l5:review"
          },
          {
            "id": "h-6",
            "t": "text",
            "text": "Nhà sản xuất: dự thầu ↔ danh sách",
            "x": 3996,
            "y": 1610,
            "size": 34,
            "at": "l5:maker"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: Saturday morning. Thảo pulls a thread.",
          "sub": "Chặng sáu: sáng thứ Bảy. Thảo lần sợi chỉ.",
          "keys": [
            "lần sợi chỉ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Pick one concept, find it everywhere: invitation, bid, minutes, body, appendices. Check each spot.",
          "sub": "Chọn một khái niệm, tìm mọi chỗ nó xuất hiện: mời thầu, dự thầu, biên bản, thân, phụ lục. Kiểm từng chỗ.",
          "keys": [
            "tìm mọi chỗ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Six threads: price, completion time, handover, guarantee, penalties, termination.",
          "sub": "Sáu sợi: giá hợp đồng, thời hạn hoàn thành, bàn giao, bảo lãnh, phạt, chấm dứt."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Start with pairs that often clash. The guarantee: rate and term in the bid, the body, and the form.",
          "sub": "Bắt đầu từ các cặp hay vênh. Bảo lãnh: tỷ lệ và thời hạn ở hồ sơ mời thầu, thân hợp đồng, mẫu ở phụ lục.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Then review periods, testing time, and the equipment maker in the bid versus the approved list.",
          "sub": "Rồi thời hạn xem xét tài liệu, thời gian chạy thử, nhà sản xuất thiết bị trong hồ sơ dự thầu và danh sách chấp thuận."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Found it! The guarantee form in the appendix is lower and shorter than the body.",
          "sub": "Thấy rồi! Mẫu bảo lãnh ở phụ lục ghi mức thấp hơn, thời hạn ngắn hơn thân hợp đồng.",
          "face": "surprised",
          "pose": "hold"
        }
      ],
      "ref": "p20,p21,p22"
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
          }
        ],
        "items": [
          {
            "id": "h-q",
            "t": "text",
            "text": "Thân HĐ đứng trên phụ lục",
            "x": 3996,
            "y": 1690,
            "size": 40,
            "at": "l1:above",
            "color": "muted"
          },
          {
            "id": "h-q2",
            "t": "text",
            "text": "Ngân hàng trả theo chữ thư",
            "x": 3996,
            "y": 1750,
            "size": 44,
            "at": "l2:letter",
            "color": "coral",
            "hl": [
              {
                "text": "chữ thư",
                "at": "l2:letter"
              }
            ]
          },
          {
            "id": "h-q3",
            "t": "text",
            "text": "→ sửa mẫu trước khi ký",
            "x": 3996,
            "y": 1810,
            "size": 40,
            "at": "l3:fix",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The body ranks above the appendix. So why fix the form?",
          "sub": "Thân hợp đồng đứng trên phụ lục. Vậy cần sửa mẫu không?",
          "keys": [
            "cần sửa mẫu không"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Because the bank issues and pays on the words of the guarantee letter, not your ranking.",
          "sub": "Có. Ngân hàng phát hành và trả tiền theo chữ của thư bảo lãnh, không theo thứ tự ưu tiên.",
          "keys": [
            "chữ của thư bảo lãnh"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fix the form to match the body before signing.",
          "sub": "Phải sửa mẫu cho khớp thân hợp đồng trước khi ký."
        }
      ],
      "ref": "p22"
    },
    {
      "id": "s21",
      "module": "BRK-10",
      "data": {
        "quote": "Thứ tự ưu tiên không cứu được một tờ mẫu sai",
        "mark": "tờ mẫu sai",
        "by": "Rút ra",
        "illus": "page-with-curl"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A precedence clause can't rescue a wrong form.",
          "sub": "Thứ tự ưu tiên không cứu được một tờ mẫu sai.",
          "keys": [
            "tờ mẫu sai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Write that one down.",
          "sub": "Ghi câu này lại."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p23"
    },
    {
      "id": "s22",
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
            "text": "Ngày ký · cùng phòng họp",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:signing"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "fountain-pen",
                "page-facing-up"
              ]
            },
            "at": "l1:signing",
            "caption": "Ngày ký · phòng họp",
            "icon": "fountain-pen"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "(iii) Yêu cầu CĐT",
            "x": 5964,
            "y": 1260,
            "size": 48,
            "at": "l3:requirements",
            "color": "accent"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "(v) Đề xuất NT",
            "x": 5964,
            "y": 1340,
            "size": 48,
            "at": "l3:proposal",
            "color": "muted"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "“…chấp thuận khi ký”",
            "x": 5964,
            "y": 1430,
            "size": 44,
            "at": "l4:sentence"
          },
          {
            "id": "i-3x",
            "t": "strike",
            "over": "i-3",
            "at": "l4:nowhere"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Trên kính, dưới nhường”",
            "x": 5964,
            "y": 1550,
            "size": 54,
            "at": "l5:respect",
            "color": "accent",
            "hl": [
              {
                "text": "Trên kính",
                "at": "l5:respect"
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
          "say": "Signing day. Same meeting room, same Sam.",
          "sub": "Ngày ký. Vẫn phòng họp ấy, vẫn Sam ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Requirements above our proposal, minutes listed, Appendix D attached. We're good.",
          "sub": "Yêu cầu đứng trên đề xuất của chúng tôi, biên bản có tên, Phụ lục D đính kèm. Ổn cả.",
          "pose": "hold",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Rank three, the owner's requirements. Rank five, your proposal.",
          "sub": "Hạng ba: Yêu cầu của chủ đầu tư. Hạng năm: đề xuất của bên chị.",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That old sentence, approved at signing? Now it has nowhere to stand.",
          "sub": "Câu “đã được chấp thuận khi ký” ngày trước? Giờ hết chỗ đứng.",
          "keys": [
            "hết chỗ đứng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Respect those above, give way to those below. In a contract, write down who is above.",
          "sub": "“Trên kính, dưới nhường.” Trong hợp đồng, phải ghi rõ ai đứng trên.",
          "keys": [
            "ghi rõ ai đứng trên"
          ]
        }
      ],
      "ref": "p5,p6"
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
          },
          {
            "at": 150,
            "fit": "J",
            "ms": 900
          },
          {
            "at": "l1:jobs",
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
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "G",
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
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 5496,
            "y": 40,
            "at": "l2:One"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1560,
            "y": 1130,
            "at": "l3:Two"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3528,
            "y": 1130,
            "at": "l4:Three"
          },
          {
            "id": "j-t",
            "t": "text",
            "text": "Ba việc · làm ngay",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l5:table"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Lập bảng cam kết của nhà thầu",
            "x": 7932,
            "y": 1270,
            "size": 44,
            "at": "l5:table",
            "color": "accent"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Mỗi dòng: phụ lục sẽ chứa nó",
            "x": 7932,
            "y": 1350,
            "size": 44,
            "at": "l5:appendix",
            "hl": [
              {
                "text": "phụ lục",
                "at": "l5:appendix"
              }
            ]
          },
          {
            "id": "j-nx",
            "t": "text",
            "text": "Bài tiếp: mẫu bảo lãnh",
            "x": 7932,
            "y": 1470,
            "size": 40,
            "at": "l6:Next",
            "color": "muted"
          },
          {
            "id": "j-src1",
            "t": "text",
            "text": "Bài để tham khảo chung; tình huống là minh hoạ, không lấy từ hợp đồng, dự án hay pháp nhân cụ thể nào.",
            "x": 7932,
            "y": 1730,
            "size": 26,
            "at": "l6",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "j-src2",
            "t": "text",
            "text": "Việc cụ thể, đối chiếu văn bản hiện hành và hỏi pháp chế.",
            "x": 7932,
            "y": 1770,
            "size": 26,
            "at": "l6",
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
          "say": "So, three jobs.",
          "sub": "Tóm lại, ba việc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: a clear ranking, the owner's requirements above the proposal.",
          "sub": "Một: thứ tự ưu tiên rõ, Yêu cầu của chủ đầu tư trên đề xuất.",
          "keys": [
            "thứ tự ưu tiên rõ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: every bid promise with an address in an appendix.",
          "sub": "Hai: mỗi cam kết dự thầu có địa chỉ trong phụ lục."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: the list of appendices matches the signed set.",
          "sub": "Ba: danh mục khớp tập ký.",
          "keys": [
            "danh mục khớp tập ký"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Today: make a table of the contractor's promises, and next to each, the appendix that will hold it.",
          "sub": "Việc làm ngay: lập bảng cam kết của nhà thầu, ghi cạnh mỗi dòng phụ lục sẽ chứa nó.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next: guarantee forms and issuing banks. General information only, not advice on any real contract.",
          "sub": "Bài tiếp: mẫu bảo lãnh và ngân hàng phát hành. Đây là thông tin chung, không phải tư vấn cho hợp đồng cụ thể."
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
        "q": "In the thinking exercise, why must the guarantee form be fixed despite the ranking?",
        "options": [
          "The bank pays according to the words of the guarantee, not the contract ranking",
          "The ranking puts the guarantee form above the body, so the form always wins",
          "The contractor can cancel the guarantee if the ranking clause is ever mentioned"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "bank",
        "why": "Ngân hàng trả theo chữ của thư bảo lãnh."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "In the thinking exercise, why must the guarantee form be fixed despite the ranking?",
          "sub": "Trong phần thử nghĩ, vì sao phải sửa mẫu bảo lãnh dù đã có thứ tự ưu tiên?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The bank pays according to the words of the guarantee, not the contract ranking.",
          "sub": "Ngân hàng trả theo chữ của thư bảo lãnh, không theo thứ tự ưu tiên của hợp đồng."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "A precedence clause can't rescue a wrong form.",
          "sub": "Thứ tự ưu tiên không cứu được một tờ mẫu sai."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[38]"
    },
    {
      "id": "s25",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Hồ sơ thầu trong thứ tự ưu tiên"
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
  "hook": "HOOK-22",
  "notes": "#145 bài MỚI (bài 2 chuỗi epc-procurement) theo hạt nhân (#136) + biến thể edit (#144). HOOK-22 (câu thoại bị cắt, p5): sau ngày ký, Sam “Đề xuất của tôi đã được chấp thuận khi…” → cắt → tua về tuần trước ngày ký → nói trọn ở s05 (chặng ②). Dòng thời gian: TUẦN TRƯỚC NGÀY KÝ của Thảo: T2 ba lớp hồ sơ, gặp Cô Hoa (p1, p2) → T3 thứ tự ưu tiên (p3, p4), câu Sam (p5, p6), “cao nhất thắng” (p7), BRK-09 NĐ 210/2026 + Đ80 LXD (p8) → BRK-07 → T4 điều toàn bộ thoả thuận (p9), “Khoan đã!” Dũng: biên bản ký rồi khỏi chép (p10; p11) → T5 cam kết dự thầu vào phụ lục, làm mẫu năm bước (p12–p15) → T6 danh mục phụ lục (p16, p17; BRK-04 Trước/Sau p18; p19) → sáng T7 lần sợi chỉ, Dũng thấy mẫu bảo lãnh lệch (p20–p22; BRK-10 p23) → ngày ký cùng phòng họp với Sam (khép vòng, ca dao “Trên kính, dưới nhường”). Nhân vật: Thảo, Dũng, Sam, Cô Hoa. Số chỉ từ bài: NĐ 210/2026 Đ4 k5, Đ80 LXD 135/2025, [ ] năm, [ ]%. Câu đố questions[38].",
  "loop": {
    "open": "s00",
    "close": "s22"
  }
};
