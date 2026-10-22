export function cleanMetadataFromActions(segments) {
  return segments.map((segment) => {
    const cleanedActions = segment.actions.map((action) => {
      const cleaned = { ...action };
      delete cleaned._sttMode;
      delete cleaned._modeGroup;
      return cleaned;
    });

    return {
      ...segment,
      actions: cleanedActions,
    };
  });
}
