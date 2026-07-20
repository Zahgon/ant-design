import * as React from 'react';

import { useForceUpdate } from './useForceUpdate';

type UseSyncStateProps<T> = readonly [() => T, (newValue: T) => void];

export const useSyncState = <T>(initialValue: T): UseSyncStateProps<T> => {
  const ref = React.useRef<T>(initialValue);
  const [, forceUpdate] = useForceUpdate();
  return [
    () => { throw new Error("STUB"); },
    (newValue: T) => {
        throw new Error("STUB");
    },
  ] as const;
};
