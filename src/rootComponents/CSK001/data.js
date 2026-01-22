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
let Data_middle_001 = [];
for (let i = 0; i < DataFront.length; i += 2) {
  Data_middle_001.push(DataFront.slice(i, i + 2));
}

console.log("Data_middle_001", JSON.stringify(Data_middle_001));

let videoData01 = [];

Data_middle_001.forEach((e, i) => {
  videoData01.push(group001_type02(e));
});

const SpaceSound = "SOUNDCHUNG_SpaceSound";

console.log(JSON.stringify(keepOnlyActionsCodeTimeFixedStt(videoData01)));

export { videoData01 };

function group001_type02(
  arrInput = [
    { text: "HÌNH" },
    { text: "text ...texxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx." },
  ],
  groupD = "groupDefaulte",
) {
  let idInputText = "AAAAA";

  const obj_001 = {
    actions: [
      {
        cmd: "divAction",
        id: "BG001",
        ToEndFrame: true,
        styleCss: {
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "red",
        },
      },
      // {
      //   cmd: CMD_Fetch.imageViewActionToID,
      //   toID: "BG001",
      //   ToEndFrame: true,
      //   img: arrInput[0].background,
      //   styleCss: {
      //     position: "absolute",
      //     top: 0,
      //     bottom: 0,
      //     left: 0,
      //     right: 0,
      //   },
      // },
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
          textAlign: "center",
        },
      },

      {
        cmd: "divAction",
        id: "DIV-D",
        group: groupD,
        toID: "DIV001",
        delay: 1,
        styleCss: {
          zIndex: "10",
          width: "100%",
          minHeight: "100px",
          // backgroundColor: "green",
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
          maxHeight: "100px",
          overFlow: "hidden",
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
        img: arrInput[0].img,
        toID: "DIV-C",
        group: groupD,
        delay: 1,
        styleCss: {
          zIndex: "10",
          width: "700px",
          height: "700px",
          borderRadius: "20px",
          // backgroundColor: "green",
        },
      },
      {
        cmd: CMD_Fetch.typingText,
        toID: "DIV-B",
        text: arrInput[0].text,
        delay: 15,
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
    timeFixed: 5,
    stt: 0,
  };
  const obj_002 = {
    actions: [
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: "DIV-A",
        img: arrInput[1].img,
        styleCss: { zIndex: "10", width: "500px", height: "600px" },
        group: groupD,
      },

      {
        cmd: CMD_Fetch.typingTextActionToID,
        toID: "DIV-D",
        text: arrInput[1].text,
        styleCss: {
          fontSize: "100px",
          color: "yellow",
          fontWeight: "800",
        },
        group: groupD,
      },

      {
        cmd: CMD_Fetch.actionCssId,
        toID: "DIV-A",
        cssMode: "add",
        css: {
          // Yêu cầu mở rộng maxHeight 100->500 trong 5s
          maxHeight: "600px",
          transition: "max-height 1s ease-in-out",
        },
      },
    ],
    code: "CSKA_000",
    timeFixed: null,
    stt: 1,
  };
  let finalSet = [];
  finalSet.push(obj_001);
  finalSet.push(obj_002);
  return finalSet;
}
