// src/Components/ActionOrchestrator/ActionOrchestrator.jsx
import React from "react";
import { useCurrentFrame } from "remotion";
import { calculateCssOverrides } from "./utils/cssOverrideManager";
import { ACTION_REGISTRY } from "./utils/actionRegistry";

/**
 * 🎯 ACTION ORCHESTRATOR - FIXED VERSION
 *
 * ✅ FIX: actionDuration tính từ item.startFrame (không phải actionStartFrame)
 *
 * TIMING PRIORITY:
 * 1. actionDuration (highest) - actionEndFrame = item.startFrame + actionDuration
 * 2. ToEndFrame - Kéo dài đến cuối video
 * 3. group - Sync với group
 * 4. item.endFrame (default) - Fallback
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

        // ⭐ Tính toán frame range
        let actionStartFrame = item.startFrame;
        let actionEndFrame = item.endFrame;

        // ⭐ 1. Apply delay trước (nếu có)
        if (typeof action.delay === "number") {
          actionStartFrame = actionStartFrame + action.delay;
        }

        // ⭐ 2. ƯU TIÊN CAO NHẤT: actionDuration
        if (typeof action.actionDuration === "number") {
          // ✅ FIX: Tính từ actionStartFrame, đã tính delay!
          actionEndFrame = actionStartFrame + action.actionDuration;

          // Debug log
          if (process.env.NODE_ENV === "development") {
            console.log(`📊 Action ${actionIndex + 1} [${action.cmd}]:`, {
              delay: action.delay || 0,
              actionDuration: action.actionDuration,
              itemStartFrame: item.startFrame,
              actionStartFrame,
              actionEndFrame,
              visibleDuration: actionEndFrame - actionStartFrame,
            });
          }

          // Vẫn cho phép ChangeStartFrame nếu cần
          if (typeof action.ChangeStartFrame === "number") {
            actionStartFrame = actionStartFrame + action.ChangeStartFrame;
          }
        }
        // ⭐ 3. Xử lý ToEndFrame (nếu không có actionDuration)
        else if (action.ToEndFrame === true) {
          actionEndFrame = toEndFrame;
          if (typeof action.ChangeStartFrame === "number") {
            actionStartFrame = actionStartFrame + action.ChangeStartFrame;
          }
        }
        // ⭐ 4. Xử lý group (nếu không có actionDuration và ToEndFrame)
        else if (action.group !== undefined && action.group !== null) {
          const groupEndFrame = groupEndFrames.get(action.group);
          if (groupEndFrame !== undefined) {
            actionEndFrame = groupEndFrame;
          }
          if (typeof action.ChangeStartFrame === "number") {
            actionStartFrame = actionStartFrame + action.ChangeStartFrame;
          }
          if (typeof action.ChangeEndFrame === "number") {
            actionEndFrame = actionEndFrame + action.ChangeEndFrame;
          }
        }
        // ⭐ 5. Fallback
        else {
          if (typeof action.ChangeStartFrame === "number") {
            actionStartFrame = actionStartFrame + action.ChangeStartFrame;
          }
          if (typeof action.ChangeEndFrame === "number") {
            actionEndFrame = item.endFrame + action.ChangeEndFrame;
          }
        }

        // ⭐ 6. Check active
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
