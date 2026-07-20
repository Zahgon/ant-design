import { useMemo } from 'react';

export type Orientation = 'horizontal' | 'vertical';

const isValidOrientation = (orientation?: Orientation) => {
  return orientation === 'horizontal' || orientation === 'vertical';
};

export const useOrientation = (
  orientation?: Orientation,
  vertical?: boolean,
  legacyDirection?: Orientation,
): [Orientation, boolean] => {
  return useMemo(() => {
      throw new Error("STUB");
  }, [legacyDirection, orientation, vertical]);
};
