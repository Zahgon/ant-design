import * as React from 'react';
import { useControlledState, useEvent } from '@rc-component/util';

import type { TransferKey } from '../interface';

const EMPTY_KEYS: TransferKey[] = [];

function filterKeys(keys: TransferKey[], dataKeys: Set<TransferKey>) {
  const filteredKeys = keys.filter((key) => { throw new Error("STUB"); });
  return keys.length === filteredKeys.length ? keys : filteredKeys;
}

function flattenKeys(keys: Set<TransferKey>) {
  return Array.from(keys).join(';');
}

function useSelection<T extends { key: TransferKey }>(
  leftDataSource: T[],
  rightDataSource: T[],
  selectedKeys?: TransferKey[],
): [
  sourceSelectedKeys: TransferKey[],
  targetSelectedKeys: TransferKey[],
  setSourceSelectedKeys: (srcKeys: TransferKey[]) => void,
  setTargetSelectedKeys: (srcKeys: TransferKey[]) => void,
] {
  // Prepare `dataSource` keys
  const [leftKeys, rightKeys] = React.useMemo(
    () => { throw new Error("STUB"); },
    [leftDataSource, rightDataSource],
  );

  // Selected Keys
  const [mergedSelectedKeys, setMergedSelectedKeys] = useControlledState<React.Key[]>(
    EMPTY_KEYS,
    selectedKeys,
  );

  const sourceSelectedKeys = React.useMemo(
    () => { throw new Error("STUB"); },
    [mergedSelectedKeys, leftKeys],
  );
  const targetSelectedKeys = React.useMemo(
    () => { throw new Error("STUB"); },
    [mergedSelectedKeys, rightKeys],
  );

  // // Reset when data changed
  React.useEffect(() => {
      throw new Error("STUB");
  }, [flattenKeys(leftKeys), flattenKeys(rightKeys)]);

  // Update keys
  const setSourceSelectedKeys = useEvent((nextSrcKeys: TransferKey[]) => {
      throw new Error("STUB");
  });
  const setTargetSelectedKeys = useEvent((nextTargetKeys: TransferKey[]) => {
      throw new Error("STUB");
  });

  return [
    // Keys
    sourceSelectedKeys,
    targetSelectedKeys,
    // Updater
    setSourceSelectedKeys,
    setTargetSelectedKeys,
  ];
}

export default useSelection;
