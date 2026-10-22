import DataFront from "../data_Front_001.json" with { type: "json" };
import { initTransitions } from "../../../components/ActionOrchestrator/utils/transitions/transitionResolver.js";

export function loadData() {
  const [
    arr1_configs,
    arr2_styles_raw,
    arr3_contents_raw,
    arr4_data,
    arr5_transitions,
    arr6_stylesLib,
    arr7_contentsLib,
  ] = DataFront;

  let arr2_styles = arr2_styles_raw || [];
  let arr3_contents = arr3_contents_raw || [];

  if (arr6_stylesLib && arr7_contentsLib) {
    arr2_styles = [...arr6_stylesLib, ...arr2_styles];
    arr3_contents = [...arr7_contentsLib, ...arr3_contents];

    console.log(
      `✅ dataLoader: Merged arr6 (${arr6_stylesLib.length}) into arr2, ` +
      `arr7 (${arr7_contentsLib.length}) into arr3`,
    );
  } else if (arr6_stylesLib || arr7_contentsLib) {
    console.warn(
      "⚠️ dataLoader: arr6 và arr7 phải cùng có hoặc cùng không có — bỏ qua merge.",
    );
  }

  if (arr5_transitions) {
    const rows = Array.isArray(arr5_transitions)
      ? Array.isArray(arr5_transitions[0])
        ? arr5_transitions[0]
        : arr5_transitions
      : [];

    if (rows.length > 0) {
      initTransitions(rows);
      console.log(
        `✅ dataLoader: Loaded ${rows.length} custom transition(s)`,
      );
    }
  }

  return {
    arr1_configs,
    arr2_styles,
    arr3_contents,
    arr4_data,
  };
}
