import React from "react";

// Action này không render UI trực tiếp.
// Nó đóng vai trò đánh dấu để ActionOrchestrator xử lý logic inject CSS
// thông qua cssOverrideManager.
const ActionCssClass = () => {
  return null;
};

export default ActionCssClass;
