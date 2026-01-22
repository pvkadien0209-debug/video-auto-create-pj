// ✅ Import JSON trực tiếp
import DataFront from "./data_Front_001.json" with { type: "json" };
import { VideoPresets } from "../../components/ActionOrchestrator/utils/cssUtils/cssUltis.js";
import { ObjCSS } from "./objCSS.js";
import { CMD } from "../../components/ActionOrchestrator/utils/actionRegistry.js";
import {
  Sort0toN,
  anim,
  keepOnlyActionsCodeTimeFixedStt,
} from "../../components/ActionOrchestrator/utils/dataSupportFuntions.js";
const colorBG = ["yellow", "red", "green", "purple", "blue"];
const CMD_Fetch = CMD;

const SpaceSound = "SOUNDCHUNG_SpaceSound";
let mode = "BBBB"; //chinh ở excel

let fileArrInput = [{ img: "" }, { text: "MỘT CÂU MỚI ĐƯỢC NHẬP TỪ EXCEL" }]; //chinh ở excel

let Agroup001 = group001_type02(fileArrInput);

if (mode === "AAAA") {
  Agroup001 = group001(fileArrInput);
}

const Agroup002 = Cauhoi4dapan();
const Agroup001group003 = group003();
let videoData01 = [];

let tempSets = [].concat(Agroup001, Agroup002);

videoData01.push(tempSets);

console.log(JSON.stringify(keepOnlyActionsCodeTimeFixedStt(videoData01)));

export { videoData01 };

function OBJ_BEGIN(e) {
  return [
    {
      cmd: CMD_Fetch.divAction,
      id: "DIV001",
      styleCss: {
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        top: "100px",
        zIndex: "10",
        width: "1000px",
        // backgroundColor: "red",
        // ⭐ Bắt đầu từ invisible
      },
    },
    {
      cmd: CMD_Fetch.divAction,
      id: "DIV001A",
      toID: "DIV001",
      delay: 30, // ⭐ Xuất hiện sau 30 frames
      styleCss: {
        zIndex: "10",
        width: "200px",
        height: "100px",
        backgroundColor: "yellow",
        // ⭐ Bắt đầu từ invisible
        opacity: 0,
        animation: anim({
          name: "fadeInSlideUp",
          frames: 60,
          ease: "ease-out",
          delayFrames: 0, // ⭐ Animation bắt đầu ngay khi div xuất hiện
          fillMode: "forwards",
        }),
      },
    },
    {
      cmd: CMD_Fetch.divAction,
      id: "DIV001B",
      toID: "DIV001",
      delay: 60, // ⭐ Xuất hiện sau 60 frames
      styleCss: {
        zIndex: "10",
        width: "200px",
        height: "300px",
        backgroundColor: "blue",
        // ⭐ Bắt đầu từ invisible
        opacity: 0,
        animation: anim({
          name: "fadeInSlideUp",
          frames: 60,
          ease: "ease-out",
          delayFrames: 0,
          fillMode: "forwards",
        }),
      },
    },
    {
      cmd: CMD_Fetch.divAction,
      id: "DIV001C",
      toID: "DIV001B",
      delay: 70, // ⭐ Xuất hiện sau 60 frames
      styleCss: {},
    },

    // VideoPresets.loopingBackground("LoopingVideo001.mp4", {
    //   id: "IDvideo001", // ⭐ ID cụ thể
    //   panAnimation: false,
    //   panAmount: 5,
    //   panDuration: 150,
    //   styleCss: {
    //     height: "1920px",
    //     width: "2000px",
    //     transform: "translate(-20%, -10%)",
    //   },
    // }),
  ];
}
function OBJ_END(e) {
  return [
    {
      cmd: "typingTextActionToID",
      text: "HÃY FOLLOW TÔI",
      sound: true,
      noTyping: false,
      styleCss: ObjCSS.BEGIN_END_StyleCSs,
    },
  ];
}

function OBJ_DEMNGUOC(e) {
  return [
    {
      cmd: "countdown",
      countDownFrom: 1,
      colorTheme: "orange",
      zIndex: 100,
      styleCss: {
        transform: "translate(-50%, -50%) scale(2)",
        top: "50%",
        left: "50%",
        position: "absolute",
        animation: anim({
          name: "slowRotate",
          frames: 150, // 5s @30fps
          ease: "linear", // rotate nên linear cho mượt
          iterationCount: "infinite",
          fillMode: "both", // hoặc bỏ luôn cũng được
        }),
      },
    },
  ];
}

function OBJ_QSAW(e, topPX, QSAWPX, i) {
  return [
    {
      cmd: "typingTextActionToID",
      text: e.text,
      group: "1",
      styleCss: {
        ...ObjCSS.CSStypingtextAA001,
        position: "absolute",
        top: topPX,
        backgroundColor: colorBG[QSAWPX - 1],
      },
    },
  ];
}
function OBJ_CHONDAPAN(e) {
  return [
    ,
    {
      cmd: CMD_Fetch.divAction,
      id: "DUNG",
      styleCss: {
        position: "flex",
        top: "100px",
        zIndex: "10",
        width: "100%",
        backgroundColor: "red",
        transition: "height 5s ease-out",
      },
    },
    {
      cmd: CMD_Fetch.divAction,
      id: "DUNG1",
      styleCss: {
        position: "flex",
        backgroundColor: "yellow",
        width: "1000px",
        height: "100px",
      },
    },
    ,
    {
      cmd: "actionCssId",
      toID: "DUNG",
      cssMode: "add",
      css: {
        backgroundColor: "yellow",
        // background: "black",
        color: "black",
      },
    },
    {
      cmd: "typingTextActionToID",
      toID: "DUNG",
      text: "e.text",
      styleCss: {
        ...ObjCSS.CSStypingtextAA001,
        position: "flex",
      },
    },
    {
      cmd: "actionCssId",
      toID: "B25",
      cssMode: "add",
      css: {
        backgroundColor: "yellow",
        // background: "black",
        color: "black",
        height: "300px",
      },
    },

    {
      cmd: CMD.imageViewActionToID,
      toID: "DUNG",
      img: "CSK_001.png",
      styleCss: {
        width: "100px",
        position: "relative",
      },
    },
    {
      cmd: CMD.imageViewActionToID,
      toID: "DUNG1",
      img: "CSK_001.png",
      styleCss: {
        width: "100px",
        position: "relative",
      },
    },
    {
      cmd: CMD.imageViewActionToID,
      toID: "DUNG",
      delay: 30,
      img: "CSK_001.png",
      positionMode: "before",
      styleCss: {
        width: "200px",
        display: "block",
        animation: anim({
          name: "fadeInScale",
          frames: 50, // 5s @30fps
          ease: "linear", // rotate nên linear cho mượt
          iterationCount: 1,
          fillMode: "both", // hoặc bỏ luôn cũng được
        }),
      },
    },
    ,
  ];
}

function OBJ_Hook(e) {
  return [
    {
      cmd: "typingText",
      text: e.text,
      styleCss: ObjCSS.CSStypingtextAA001,
    },
    {
      cmd: CMD_Fetch.soundPlayerAction,
      soundSource: "SOUNDCHUNG_tiktokTypingSoundCapcut",
    },
  ];
}

function Cauhoi4dapan(
  arrInput = [{}, {}, {}, {}, {}],
  group = "groupDefaulte",
) {
  return [
    {
      actions: [
        {
          cmd: "typingTextActionToID",
          text: "Tôi bị đau khớp kéo dài hơn 2 tuần không giảm, nhận định nào là đúng nhất?",
          group: "1",
          styleCss: {
            width: "1000px",
            minHeight: "100px",
            border: "1px solid black",
            fontSize: "100px",
            position: "absolute",
            top: "50px",
            backgroundColor: "yellow",
          },
        },
      ],
      code: "CSKA_001",
      timeFixed: null,
      stt: 2,
    },
    {
      actions: [
        {
          cmd: "typingTextActionToID",
          text: "A. Đau khớp nào cũng tự hết.",
          group: "1",
          styleCss: {
            width: "1000px",
            minHeight: "100px",
            border: "1px solid black",
            fontSize: "100px",
            position: "absolute",
            top: "400px",
            backgroundColor: "red",
          },
        },
      ],
      code: "CSKA_002",
      timeFixed: null,
      stt: 3,
    },
    {
      actions: [
        {
          cmd: "typingTextActionToID",
          text: "B. Chỉ cần uống thuốc giảm đau là đủ.",
          group: "1",
          styleCss: {
            width: "1000px",
            minHeight: "100px",
            border: "1px solid black",
            fontSize: "100px",
            position: "absolute",
            top: "550px",
            backgroundColor: "green",
          },
        },
      ],
      code: "CSKA_003",
      timeFixed: null,
      stt: 4,
    },
    {
      actions: [
        {
          cmd: "typingTextActionToID",
          text: "C. Đau kéo dài có thể là bệnh, nên đi khám.",
          group: "1",
          styleCss: {
            width: "1000px",
            minHeight: "100px",
            border: "1px solid black",
            fontSize: "100px",
            position: "absolute",
            top: "800px",
            backgroundColor: "purple",
          },
        },
      ],
      code: "CSKA_004",
      timeFixed: null,
      stt: 5,
    },
    {
      actions: [
        {
          cmd: "typingTextActionToID",
          text: "D. Chỉ người già mới bị bệnh khớp.",
          group: "1",
          styleCss: {
            width: "1000px",
            minHeight: "100px",
            border: "1px solid black",
            fontSize: "100px",
            position: "absolute",
            top: "1050px",
            backgroundColor: "blue",
          },
        },
      ],
      code: "CSKA_005",
      timeFixed: null,
      stt: 6,
    },
    {
      actions: [
        {
          cmd: "countdown",
          countDownFrom: 1,
          colorTheme: "orange",
          group: "1",
          zIndex: 100,
          styleCss: {
            transform: "translate(-50%, -50%) scale(2)",
            top: "50%",
            left: "50%",
            position: "absolute",
            animation: "slowRotate 5.000000s linear 0.000000s infinite both",
          },
        },
      ],
      code: "SOUNDCHUNG_SpaceSound",
      timeFixed: 1,
      stt: 7,
    },
  ];
}

function group001(
  arrInput = [{ text: "HÌNH" }, { text: "text ...." }],
  groupD = "groupDefaulte",
) {
  let idInputText = "AAAAA";
  return [
    {
      actions: [
        {
          cmd: "divAction",
          id: "DIV001",
          group: groupD,
          styleCss: {
            position: "absolute",
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            top: "100px",
            zIndex: "10",
            width: "1000px",
          },
        },
        {
          cmd: "divAction",
          id: "DIV001A",
          toID: "DIV001",
          group: groupD,
          delay: 30,
          styleCss: {
            zIndex: "10",
            width: "200px",
            height: "100px",
            backgroundColor: "yellow",
          },
        },
        {
          cmd: "divAction",
          id: idInputText,
          group: groupD,
          toID: "DIV001",
          delay: 60,
          styleCss: {
            zIndex: "10",
            width: "200px",
            height: "300px",
            backgroundColor: "blue",
          },
        },
      ],
      code: "SOUNDCHUNG_SpaceSound",
      timeFixed: 3,
      stt: 0,
    },
    {
      actions: [
        {
          cmd: CMD_Fetch.typingTextActionToID,
          toID: idInputText,
          text: arrInput[1].text,
          styleCss: {
            fontSize: "100px",
          },
          group: groupD,
        },
        {
          cmd: "soundPlayerAction",
          soundSource: "SOUNDCHUNG_tiktokTypingSoundCapcut",
        },
      ],
      code: "CSKA_000",
      timeFixed: null,
      stt: 1,
    },
  ];
}

function group003() {
  return [
    {
      actions: [
        null,
        {
          cmd: "divAction",
          id: "DUNG",
          styleCss: {
            position: "flex",
            top: "100px",
            zIndex: "10",
            width: "100%",
            backgroundColor: "red",
            transition: "height 5s ease-out",
          },
        },
        {
          cmd: "divAction",
          id: "DUNG1",
          styleCss: {
            position: "flex",
            backgroundColor: "yellow",
            width: "1000px",
            height: "100px",
          },
        },
        null,
        {
          cmd: "actionCssId",
          toID: "DUNG",
          cssMode: "add",
          css: { backgroundColor: "yellow", color: "black" },
        },
        {
          cmd: "typingTextActionToID",
          toID: "DUNG",
          text: "e.text",
          styleCss: {
            width: "1000px",
            minHeight: "100px",
            border: "1px solid black",
            fontSize: "100px",
            position: "flex",
          },
        },
        {
          cmd: "actionCssId",
          toID: "B25",
          cssMode: "add",
          css: {
            backgroundColor: "yellow",
            color: "black",
            height: "300px",
          },
        },
        {
          cmd: "imageViewActionToID",
          toID: "DUNG",
          img: "CSK_001.png",
          styleCss: { width: "100px", position: "relative" },
        },
        {
          cmd: "imageViewActionToID",
          toID: "DUNG1",
          img: "CSK_001.png",
          styleCss: { width: "100px", position: "relative" },
        },
        {
          cmd: "imageViewActionToID",
          toID: "DUNG",
          delay: 30,
          img: "CSK_001.png",
          positionMode: "before",
          styleCss: {
            width: "200px",
            display: "block",
            animation: "fadeInScale 1.666667s linear 0.000000s 1 both",
          },
        },
        null,
      ],
      code: "CSKA_006",
      timeFixed: null,
      stt: 8,
    },
    {
      actions: [
        {
          cmd: "typingTextActionToID",
          text: "HÃY FOLLOW TÔI",
          sound: true,
          noTyping: false,
          styleCss: {
            position: "absolute",
            top: "100px",
            fontSize: "70px",
            borderTop: "1px solid black",
            borderRadius: "20px",
            textAlign: "left",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            padding: "20px",
            lineHeight: 1.75,
            letterSpacing: "0.5px",
            color: "#ffffff",
            zIndex: 2,
          },
        },
      ],
      code: "CSKA_007",
      timeFixed: null,
      stt: 9,
    },
  ];
}

function group001_type02(
  arrInput = [
    { text: "HÌNH" },
    { text: "text ...texxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx." },
  ],
  groupD = "groupDefaulte",
) {
  let idInputText = "AAAAA";
  return [
    {
      actions: [
        {
          cmd: "divAction",
          id: "DIV001",
          group: groupD,
          styleCss: {
            position: "absolute",
            gap: "20px",
            top: "100px",
            zIndex: "10",
            width: "100%",
          },
        },
        {
          cmd: "divAction",
          id: "DIV-A",
          toID: "DIV001",
          group: groupD,
          delay: 1,
          styleCss: {
            zIndex: "10",
            width: "100%",
            minHeight: "100px",
            // backgroundColor: "yellow",
          },
        },
        {
          cmd: "divAction",
          id: "DIV-B",
          group: groupD,
          toID: "DIV001",
          delay: 1,
          styleCss: {
            zIndex: "10",
            width: "100%",
            height: "300px",
            // backgroundColor: "blue",
          },
        },
        {
          cmd: "divAction",
          id: "DIV-C",
          group: groupD,
          toID: "DIV001",
          delay: 1,
          styleCss: {
            zIndex: "10",
            width: "100%",
            height: "300px",
            // backgroundColor: "green",
          },
        },
        {
          cmd: CMD_Fetch.imageViewActionToID,
          img: "CSK_001.png",
          toID: "DIV-C",
          group: groupD,
          delay: 1,
          styleCss: {
            zIndex: "10",
            width: "100%",
            height: "500px",
            // backgroundColor: "green",
          },
        },
        {
          cmd: CMD_Fetch.typingTextActionToID,
          toID: "DIV-B",
          text: arrInput[1].text,
          styleCss: {
            fontSize: "100px",
          },
          group: groupD,
        },
        {
          cmd: "soundPlayerAction",
          soundSource: "SOUNDCHUNG_tiktokTypingSoundCapcut",
        },
      ],
      code: "CSKA_000",
      timeFixed: null,
      stt: 0,
    },
    {
      actions: [
        {
          cmd: CMD_Fetch.imageViewActionToID,
          toID: "DIV-A",
          img: "CSK_001.png",
          styleCss: { zIndex: "10", width: "100%", height: "600px" },
          group: groupD,
        },
        {
          cmd: "soundPlayerAction",
          soundSource: "SOUNDCHUNG_tiktokTypingSoundCapcut",
        },
      ],
      code: "CSKA_000",
      timeFixed: null,
      stt: 1,
    },
  ];
}
function group001_type03(
  arrInput = [
    { text: "HÌNH" },
    { text: "text ...texxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx." },
  ],
  groupD = "groupDefaulte",
) {
  let idInputText = "AAAAA";
  return [
    {
      actions: [
        {
          cmd: "divAction",
          id: "DIV001",
          group: groupD,
          styleCss: {
            position: "absolute",
            gap: "20px",
            top: "100px",
            zIndex: "10",
            width: "100%",
          },
        },
        {
          cmd: "divAction",
          id: "DIV-A",
          toID: "DIV001",
          group: groupD,
          delay: 1,
          styleCss: {
            zIndex: "10",
            width: "100%",
            minHeight: "100px",
            // backgroundColor: "yellow",
          },
        },
        {
          cmd: "divAction",
          id: "DIV-B",
          group: groupD,
          toID: "DIV001",
          delay: 1,
          styleCss: {
            zIndex: "10",
            width: "100%",
            height: "300px",
            // backgroundColor: "blue",
          },
        },
        {
          cmd: "divAction",
          id: "DIV-C",
          group: groupD,
          toID: "DIV001",
          delay: 1,
          styleCss: {
            zIndex: "10",
            width: "100%",
            height: "300px",
            // backgroundColor: "green",
          },
        },
        {
          cmd: CMD_Fetch.imageViewActionToID,
          img: "CSK_001.png",
          toID: "DIV-C",
          group: groupD,
          delay: 1,
          styleCss: {
            zIndex: "10",
            width: "100%",
            height: "500px",
            // backgroundColor: "green",
          },
        },
      ],
      code: "SOUNDCHUNG_SpaceSound",
      timeFixed: 3,
      stt: 0,
    },
    {
      actions: [
        {
          cmd: CMD_Fetch.typingTextActionToID,
          toID: "DIV-B",
          text: arrInput[1].text,
          styleCss: {
            fontSize: "100px",
          },
          group: groupD,
        },
        {
          cmd: "soundPlayerAction",
          soundSource: "SOUNDCHUNG_tiktokTypingSoundCapcut",
        },
      ],
      code: "CSKA_000",
      timeFixed: null,
      stt: 1,
    },
    {
      actions: [
        {
          cmd: CMD_Fetch.imageViewActionToID,
          toID: "DIV-A",
          img: "CSK_001.png",
          styleCss: { zIndex: "10", width: "100%", height: "600px" },
          group: groupD,
        },
        {
          cmd: "soundPlayerAction",
          soundSource: "SOUNDCHUNG_tiktokTypingSoundCapcut",
        },
      ],
      code: "CSKA_000",
      timeFixed: null,
      stt: 1,
    },
  ];
}
