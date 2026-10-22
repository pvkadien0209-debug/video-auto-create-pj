export function splitInmodeSegments(segments) {
  const result = [];

  for (const segment of segments) {
    if (segment.code !== "INMODE") {
      result.push(segment);
      continue;
    }

    const actions = segment.actions || [];
    if (actions.length === 0) continue;

    const allGroupIndices = new Set();

    for (const action of actions) {
      if (
        action._modeGroup != null &&
        !isNaN(action._modeGroup)
      ) {
        allGroupIndices.add(action._modeGroup);
      }
    }

    if (allGroupIndices.size === 0) {
      allGroupIndices.add(0);
    }

    const sortedGroupIndices = [...allGroupIndices].sort(
      (a, b) => a - b,
    );

    const firstGroupIndex = sortedGroupIndices[0];
    const groupMap = new Map();

    for (const idx of sortedGroupIndices) {
      groupMap.set(idx, []);
    }

    for (const action of actions) {
      const groupIdx =
        action._modeGroup != null &&
        !isNaN(action._modeGroup)
          ? action._modeGroup
          : firstGroupIndex;

      if (!groupMap.has(groupIdx)) {
        groupMap.set(groupIdx, []);
      }

      groupMap.get(groupIdx).push(action);
    }

    const sortedGroups = [...groupMap.entries()].sort(
      (a, b) => a[0] - b[0],
    );

    for (let gi = 0; gi < sortedGroups.length; gi++) {
      const [, groupActions] = sortedGroups[gi];
      if (groupActions.length === 0) continue;

      groupActions.sort((a, b) => {
        const sttA = a._sttMode != null ? a._sttMode : 999;
        const sttB = b._sttMode != null ? b._sttMode : 999;
        return sttA - sttB;
      });

      const cleanedActions = groupActions.map((action) => {
        const cleaned = { ...action };
        delete cleaned._sttMode;
        delete cleaned._modeGroup;
        return cleaned;
      });

      let newCode = segment.code;
      let newTimeFixed;
      let hasTimeFixed = false;
      let newTimePlus;
      let hasTimePlus = false;

      for (const action of cleanedActions) {
        if (action.code != null && action.code !== "") {
          newCode = action.code;
        }

        if (action.timeFixed != null) {
          newTimeFixed = action.timeFixed;
          hasTimeFixed = true;
        }

        if (action.timePlus != null) {
          newTimePlus = action.timePlus;
          hasTimePlus = true;
        }
      }

      const newSegment = {
        ...segment,
        code: newCode,
        actions: cleanedActions,
        stt: segment.stt + (gi + 1) * 0.001,
      };

      if (hasTimeFixed) newSegment.timeFixed = newTimeFixed;
      else delete newSegment.timeFixed;

      if (hasTimePlus) newSegment.timePlus = newTimePlus;
      else delete newSegment.timePlus;

      result.push(newSegment);
    }
  }

  return result;
}
