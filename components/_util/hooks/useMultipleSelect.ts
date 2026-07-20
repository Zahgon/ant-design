import { useCallback, useState } from 'react';

export type PrevSelectedIndex = null | number;

/**
 * @title multipleSelect hooks
 * @description multipleSelect by hold down shift key
 */
export const useMultipleSelect = <T, K>(getKey: (item: T, index: number, array: T[]) => K) => {
  const [prevSelectedIndex, setPrevSelectedIndex] = useState<PrevSelectedIndex>(null);

  const multipleSelect = useCallback(
    (currentSelectedIndex: number, data: T[], selectedKeys: Set<K>) => {
          throw new Error("STUB");
      },
    [prevSelectedIndex],
  );

  return [multipleSelect, setPrevSelectedIndex] as const;
};
