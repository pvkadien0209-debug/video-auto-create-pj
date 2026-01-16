// ✅ Import JSON trực tiếp
import DataFront from "./data_Front_001.json" with { type: "json" };
import {
  itemVideoBackground,
  itemHeroSection,
  VideoPresets,
  TextPresets,
} from "../../components/ActionOrchestrator/utils/cssUtils/cssUltis.js";
import { Sort0toN } from "../../components/ActionOrchestrator/utils/sort0toN.js";

const HOOK_FOLLOW_StyleCSs = {
  position: "absolute",
  top: "500px",
  fontSize: "100px",
  border: "8px solid white",
  borderRadius: "50px",
  textAlign: "center",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  padding: "30px",
  lineHeight: 1.75,
  letterSpacing: "0.5px",
  color: "#ffffff",
  zIndex: 2,
  animation: "slideInBounce 1s ease-out",
  transition: "all 0.5s ease",
};
const COUNT_StyleCSs = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "150px",
  border: "10px solid white",
  borderRadius: "50px",
  textAlign: "center",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  padding: "30px",
  lineHeight: 1.75,
  letterSpacing: "0.5px",
  color: "#ffffff",
  zIndex: 2,
  transition: "all 0.3s ease",
  animation: "shake 1.2s ease-in-out infinite",
};
const CHONDAPAN_StyleCSs = {
  backgroundColor: "yellow",
  background: "yellow",
  color: "black",
  transition: "all 0.3s ease",
  animation: "highlightFlash 0.5s ease",
};
const MOTA_StyleCSs = {
  position: "absolute",
  top: "100px",
  fontSize: "60px",
  border: "10px solid white",
  borderRadius: "50px",
  textAlign: "left",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  padding: "30px",
  lineHeight: 1.75,
  letterSpacing: "0.5px",
  color: "#ffffff",
  zIndex: 2,
};

const SpaceSound = "SOUNDCHUNG_SpaceSound";
let videoData01 = [];

//duyet tung video
DataFront.forEach((groupArray) => {
  let processedGroup = [];
  //chen background
  groupArray.forEach((e, i) => {
    if (i === 0) {
      // push bản chỉnh sửa
      processedGroup.push({
        ...e,
        action: "BACKGROUND",
        code: SpaceSound,
        timeFixed: 5,
      });

      // push bản nguyên gốc
      processedGroup.push(e);
    } else {
      processedGroup.push(e);
    }
  });
  //duyet object
  processedGroup = processedGroup.map((e, i) => {
    const obj = { ...e };
    obj.stt = i;
    if (obj.id) {
      obj.IDMark = obj.id;
    }
    obj.ClassMark = (obj.class ? obj.class : "") + " all";

    if (!obj.code) {
      obj.code = SpaceSound;
      obj.timeFixed = 5;
    }

    return obj;
  });
  let QSAWPX = 0;
  processedGroup.forEach((e, i) => {
    switch (e.action) {
      case "BACKGROUND":
        e.timeFixed = 1;
        e.actions = OBJ_BACKGROUND(e);
        break; //
      case "HOOK":
        e.timeFixed = 3.4;
        e.actions = OBJ_HOOK(e);
        break; //
      case "COUNT":
        e.timeFixed = 1;
        e.actions = OBJ_COUNT(e);
        break; //
      case "DEMNGUOC":
        e.timeFixed = 3;
        e.actions = OBJ_DEMNGUOC(e);
        break;
      case "QSAW":
        let topPX =
          QSAWPX === 1 ? 50 + QSAWPX * 350 + "px" : 50 + QSAWPX * 250 + "px";
        QSAWPX++;
        if (QSAWPX === 5) {
          QSAWPX = 0;
        }
        e.actions = OBJ_QSAW(e, QSAWPX, topPX);
        break;
      case "CHONDAPAN1":
        e.actions = OBJ_CHONDAPAN(e);
        break;
      case "CHONDAPAN2":
        e.actions = OBJ_CHONDAPAN1(e);
        break;
      case "CHONDAPAN3":
        e.actions = OBJ_CHONDAPAN2(e);
        break;
      case "MOTA1":
        e.actions = OBJ_MOTA1(e);
        break;
      case "MOTA2":
        e.actions = OBJ_MOTA2(e);
        break;
      case "MOTA3":
        e.actions = OBJ_MOTA3(e);
        break;
      case "FOLLOW":
        e.actions = OBJ_FOLLOW(e);
        break;
      default:
        e.actions = []; // ⭐ Default actions
        break;
    }
  });
  processedGroup = Sort0toN(processedGroup);
  videoData01.push(processedGroup);
});

console.log(JSON.stringify(videoData01));

export { videoData01 };

function OBJ_BACKGROUND(e) {
  return [
    {
      cmd: "typingText",
      text: e.text,
      sound: true,
      noTyping: true,
      styleCss: HOOK_FOLLOW_StyleCSs,
    },
    ,
    {
      cmd: "DivAction",
      id: "ABCD",
      ToEndFrame: true,
      styleCss: {
        position: "absolute",
        top: "270px",
      },
    },
    {
      cmd: "imageView",
      toID: "ABCD",
      img: "CSK_001.png",
      imgSize: "200px",

      styleCss: {
        position: "relative",
        borderRadius: "50%",
        border: "1px solid black",
        backgroundColor: "yellow",
        zIndex: 10,
      },
    },

    VideoPresets.loopingBackground("LoopingVideo001.mp4", {
      id: "IDvideo001", // ⭐ ID cụ thể
      panAnimation: false,
      panAmount: 5,
      panDuration: 150,
      styleCss: {
        height: "1920px",
        width: "2000px",
        transform: "translate(-20%, -10%)",
      },
    }),
  ];
}
function OBJ_HOOK(e) {
  return [
    {
      cmd: "typingText",
      text: e.text,
      sound: true,
      noTyping: false,
      styleCss: HOOK_FOLLOW_StyleCSs,
    },
    {
      cmd: "DivAction",
      id: "ABCD",
      ToEndFrame: true,
      styleCss: {
        position: "absolute",
        top: "270px",
      },
    },
    {
      cmd: "imageView",
      toID: "ABCD",
      img: "CSK_001.png",
      imgSize: "200px",

      styleCss: {
        position: "relative",
        borderRadius: "50%",
        border: "1px solid black",
        backgroundColor: "yellow",
        zIndex: 10,
      },
    },
  ];
}
function OBJ_COUNT(e) {
  return [
    {
      cmd: "typingText",
      id: "countcss",
      text: e.text,
      noTyping: true,
      styleCss: COUNT_StyleCSs,
    },
    {
      cmd: "typingText",
      id: "countcss",
      text: e.text,
      noTyping: true,
      styleCss: COUNT_StyleCSs,
    },
  ];
}
function OBJ_QSAW(e, QSAWPX, topPX) {
  return [
    {
      cmd: "DivAction",
      id: `qsaw-container-${QSAWPX}`,
      ToEndFrame: true,
      styleCss: {
        position: "absolute",
        top: topPX,
        left: "0",
        width: "100%",
        minHeight: "200px", // Đảm bảo mỗi container có chiều cao tối thiểu
        padding: "10px 0", // Khoảng cách trên dưới
      },
    },
    {
      cmd: "typingText",
      toID: `qsaw-container-${QSAWPX}`,
      text: e.text,
      sound: true,
      noTyping: true,
      ToEndFrame: true,
      styleCss: {
        position: "absolute",
        fontSize: "60px",
        color: "#ffffff",
        borderTop: "1px solid black",
        borderRadius: "20px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "20px",
        lineHeight: 1.35,
        letterSpacing: "0.5px",
      },
    },
  ];
}
function OBJ_DEMNGUOC(e) {
  return [
    {
      cmd: "countdown",
      countDownFrom: 3,
      colorTheme: "orange",
      zIndex: 100,
      styleCss: {
        scale: "1.3",
        transform: "translateY(400px)",
      },
    },
  ];
}
function OBJ_CHONDAPAN(e) {
  return [
    {
      cmd: "actionCssId",
      toID: "DUNG1",
      cssMode: "replace",
      css: CHONDAPAN_StyleCSs,
    },
  ];
}
function OBJ_CHONDAPAN1(e) {
  return [
    {
      cmd: "actionCssId",
      toID: "DUNG2",
      cssMode: "replace",
      css: CHONDAPAN_StyleCSs,
    },
  ];
}
function OBJ_CHONDAPAN2(e) {
  return [
    {
      cmd: "actionCssId",
      toID: "DUNG3",
      cssMode: "replace",
      css: CHONDAPAN_StyleCSs,
    },
  ];
}
function OBJ_MOTA1(e) {
  return [
    {
      cmd: "typingText",
      text: e.text,
      sound: true,
      noTyping: true,
      styleCss: MOTA_StyleCSs,
    },
    {
      cmd: "actionCssClass",
      toClass: "ques1 all",
      cssMode: "add",
      css: {
        opacity: 0,
      },
    },
  ];
}
function OBJ_MOTA2(e) {
  return [
    {
      cmd: "typingText",
      text: e.text,
      sound: true,
      noTyping: true,
      styleCss: MOTA_StyleCSs,
    },
    {
      cmd: "actionCssClass",
      toClass: "ques2 all",
      cssMode: "add",
      css: {
        opacity: 0,
      },
    },
  ];
}
function OBJ_MOTA3(e) {
  return [
    {
      cmd: "typingText",
      text: e.text,
      sound: true,
      noTyping: true,
      styleCss: MOTA_StyleCSs,
    },
    {
      cmd: "actionCssClass",
      toClass: "ques3 all",
      cssMode: "add",
      css: {
        opacity: 0,
      },
    },
  ];
}
function OBJ_FOLLOW(e) {
  return [
    {
      cmd: "typingText",
      text: e.text,
      id: "END",
      sound: true,
      noTyping: false,
      styleCss: HOOK_FOLLOW_StyleCSs,
    },
  ];
}
