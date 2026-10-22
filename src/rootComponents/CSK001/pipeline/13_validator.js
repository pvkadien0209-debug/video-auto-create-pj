export function validateSegments(segments) {
  return segments
    .filter((segment) => {
      if (segment.code === "NULLA" || segment.code == null) {
        return false;
      }

      return true;
    })
    .map((segment) => {
      const validActions = segment.actions.filter(
        (action) => !JSON.stringify(action).includes("NULLA"),
      );

      return {
        ...segment,
        actions: validActions,
      };
    });
}
