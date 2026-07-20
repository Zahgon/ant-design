import * as React from 'react';

export const usePatchElement = (): [
  React.ReactElement[],
  (element: React.ReactElement) => () => void,
] => {
  const [elements, setElements] = React.useState<React.ReactElement[]>([]);

  const patchElement = React.useCallback((element: React.ReactElement) => {
      throw new Error("STUB");
  }, []);

  return [elements, patchElement];
};
