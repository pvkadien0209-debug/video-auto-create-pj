// src/Components/ActionOrchestrator/ActionOrchestrator.jsx
import React from "react";
import { useCurrentFrame } from "remotion";
import { calculateCssOverrides } from "./utils/cssOverrideManager";
import { ACTION_REGISTRY } from "./utils/actionRegistry";

/**
 * 🎯 ACTION ORCHESTRATOR - FIXED TIMING LOGIC
 *
 * TIMING RULES:
 * ✅ delay: Dịch chuyển NGUYÊN action (cả start và end), GIỮ NGUYÊN độ dài
 * ✅ ChangeStartFrame: CHỈ thay đổi startFrame, ẢNH HƯỞNG độ dài
 * ✅ ChangeEndFrame: CHỈ thay đổi endFrame, ẢNH HƯỞNG độ dài
 *
 * PRIORITY:
 * 1. actionDuration (highest) - endFrame = startFrame + actionDuration
 * 2. ToEndFrame - Kéo dài đến cuối video
 * 3. group - Sync với group
 * 4. item.endFrame (fallback)
 */

function ActionOrchestrator({ codeFrame = [], textEnd }) {
  const frame = useCurrentFrame();

  // ✅ Tính toán toEndFrame
  const toEndFrame = React.useMemo(() => {
    if (codeFrame.length === 0) return 0;
    return Math.max(...codeFrame.map((item) => item.endFrame));
  }, [codeFrame]);

  // ⭐ Tính toán group endFrames
  const groupEndFrames = React.useMemo(() => {
    const groupMap = new Map();
    codeFrame.forEach((item) => {
      const actions = Array.isArray(item.actions)
        ? item.actions
        : item.action
          ? [item.action]
          : [];

      actions.forEach((action) => {
        if (!action || !action.cmd) return;
        const group = action.group;
        if (group === undefined || group === null) return;

        const currentGroupEndFrame = groupMap.get(group) || 0;
        if (item.endFrame > currentGroupEndFrame) {
          groupMap.set(group, item.endFrame);
        }
      });
    });
    return groupMap;
  }, [codeFrame]);

  // ✅ Tìm currentItem
  const currentItem = React.useMemo(() => {
    return codeFrame.find(
      (item) => frame >= item.startFrame && frame < item.endFrame,
    );
  }, [codeFrame, frame]);

  // ✅ Tìm TẤT CẢ actions đang active
  const activeActions = React.useMemo(() => {
    const allActiveActions = [];

    codeFrame.forEach((item, itemIndex) => {
      const actions = Array.isArray(item.actions)
        ? item.actions
        : item.action
          ? [item.action]
          : [];

      actions.forEach((action, actionIndex) => {
        if (!action || !action.cmd) return;

        // ⭐ BƯỚC 1: Khởi tạo frame range từ item
        let actionStartFrame = item.startFrame;
        let actionEndFrame = item.endFrame;

        // ⭐ BƯỚC 2: Apply DELAY trước (shift cả start và end)
        if (typeof action.delay === "number") {
          actionStartFrame += action.delay;
          // ⚠️ Chỉ shift endFrame nếu KHÔNG có override sau này
          // (sẽ kiểm tra ở bước tiếp theo)
        }

        // ⭐ BƯỚC 3: Xử lý endFrame theo PRIORITY
        if (typeof action.actionDuration === "number") {
          // 🔥 Priority 1: actionDuration (tính từ actionStartFrame đã có delay)
          actionEndFrame = actionStartFrame + action.actionDuration;
        } else if (action.ToEndFrame === true) {
          // 🔥 Priority 2: ToEndFrame (absolute, không bị delay ảnh hưởng)
          actionEndFrame = toEndFrame;
        } else if (action.group !== undefined && action.group !== null) {
          // 🔥 Priority 3: group (absolute, không bị delay ảnh hưởng)
          const groupEndFrame = groupEndFrames.get(action.group);
          if (groupEndFrame !== undefined) {
            actionEndFrame = groupEndFrame;
          }
        } else {
          // 🔥 Fallback: Giữ nguyên độ dài → delay cũng shift endFrame
          if (typeof action.delay === "number") {
            actionEndFrame += action.delay;
          }
        }

        // ⭐ BƯỚC 4: Apply ChangeStartFrame và ChangeEndFrame (sau cùng)
        if (typeof action.ChangeStartFrame === "number") {
          actionStartFrame += action.ChangeStartFrame;
        }
        if (typeof action.ChangeEndFrame === "number") {
          actionEndFrame += action.ChangeEndFrame;
        }

        // 📊 Debug log (development only)
        if (process.env.NODE_ENV === "development" && action.delay) {
          console.log(`📊 Action ${actionIndex + 1} [${action.cmd}]:`, {
            itemRange: `${item.startFrame}-${item.endFrame}`,
            delay: action.delay || 0,
            actionDuration: action.actionDuration,
            ChangeStartFrame: action.ChangeStartFrame,
            ChangeEndFrame: action.ChangeEndFrame,
            finalRange: `${actionStartFrame}-${actionEndFrame}`,
            duration: actionEndFrame - actionStartFrame,
          });
        }

        // ⭐ BƯỚC 5: Check active
        if (frame >= actionStartFrame && frame <= actionEndFrame) {
          allActiveActions.push({
            action,
            item,
            itemIndex,
            actionIndex,
            actionStartFrame,
            actionEndFrame,
          });
        }
      });
    });

    return allActiveActions;
  }, [codeFrame, frame, toEndFrame, groupEndFrames]);

  // ✅ Tính toán CSS Overrides
  const cssOverrides = React.useMemo(() => {
    return calculateCssOverrides(codeFrame, frame, toEndFrame);
  }, [codeFrame, frame, toEndFrame]);

  // ✅ Default styles
  const defaultTextStyle = {};

  // ✅ Function render action component
  const renderActionComponent = (activeActionData) => {
    const {
      action,
      item,
      itemIndex,
      actionIndex,
      actionStartFrame,
      actionEndFrame,
    } = activeActionData;

    const ActionComponent = ACTION_REGISTRY[action.cmd];
    if (!ActionComponent) {
      console.warn(
        `[ActionOrchestrator] ⚠️ Unknown action cmd: "${action.cmd}"`,
      );
      return null;
    }

    const actionData = {
      ...item,
      action,
      item,
      frame,
      actionStartFrame,
      actionEndFrame,
      toEndFrame,
      cssOverrides,
      defaultTextStyle,
      itemIndex,
      actionIndex,
      className:
        action.className || action.class || item.ClassMark || item.className,
      id: action.id || item.IDMark || item.id,
    };

    return <ActionComponent data={actionData} />;
  };

  // ⭐ Function render action với parent-child wrapping
  const renderActionWithWrapper = (activeActionData, index) => {
    const { action } = activeActionData;
    const parentID = action.parentID || action.parentId;
    const childID = action.childID || action.childId;
    const parentClass = action.parentClass || "";
    const childClass = action.childClass || "";

    const key = `${action.cmd}-${activeActionData.itemIndex}-${activeActionData.actionIndex}`;
    const component = renderActionComponent(activeActionData);

    if (parentID && childID) {
      const parentStyle = action.styleCssParent || {};
      const childStyle = action.styleCssChild || {};

      return (
        <div
          key={key}
          id={parentID}
          className={parentClass}
          style={parentStyle}
        >
          <div id={childID} className={childClass} style={childStyle}></div>
          {component}
        </div>
      );
    }

    return <React.Fragment key={key}>{component}</React.Fragment>;
  };

  // ✅ Render content
  const renderContent = () => {
    if (activeActions.length > 0) {
      return (
        <>
          {activeActions.map((activeActionData, index) =>
            renderActionWithWrapper(activeActionData, index),
          )}
        </>
      );
    }

    if (currentItem) {
      const hasText = currentItem.text && currentItem.text.trim() !== "";
      if (hasText) {
        return <div style={currentItem.styleCss}>{currentItem.text}</div>;
      }
    }

    return <div style={{ position: "relative" }}>{textEnd}</div>;
  };

  return <>{renderContent()}</>;
}

export default ActionOrchestrator;
