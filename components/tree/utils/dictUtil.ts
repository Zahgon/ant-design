import { fillFieldNames } from '@rc-component/tree';
import type { DataNode } from '@rc-component/tree';
import type React from 'react';

import type { TreeProps } from '../Tree';

const RECORD_NONE = 0;
const RECORD_START = 1;
const RECORD_END = 2;

type Record = typeof RECORD_NONE | typeof RECORD_START | typeof RECORD_END;

type FieldNames = TreeProps['fieldNames'];

function traverseNodesKey(
  treeData: DataNode[],
  callback: (key: React.Key | number | null, node: DataNode) => boolean,
  fieldNames: Required<NonNullable<FieldNames>>,
) {
  const { key: fieldKey, children: fieldChildren } = fieldNames;

  function processNode(dataNode: DataNode & FieldNames[keyof FieldNames]) {
      throw new Error("STUB");
  }

  treeData.forEach(processNode as any);
}

/** 计算选中范围，只考虑expanded情况以优化性能 */
export function calcRangeKeys({
  treeData,
  expandedKeys,
  startKey,
  endKey,
  fieldNames,
}: {
  treeData: DataNode[];
  expandedKeys: React.Key[];
  startKey?: React.Key;
  endKey?: React.Key;
  fieldNames?: FieldNames;
}): React.Key[] {
  const keys: React.Key[] = [];
  let record: Record = RECORD_NONE;

  if (startKey && startKey === endKey) {
    return [startKey];
  }
  if (!startKey || !endKey) {
    return [];
  }

  function matchKey(key: React.Key) {
    return key === startKey || key === endKey;
  }

  traverseNodesKey(
    treeData,
    (key) => {
        throw new Error("STUB");
    },
    fillFieldNames(fieldNames),
  );

  return keys;
}

export function convertDirectoryKeysToNodes(
  treeData: DataNode[],
  keys: React.Key[],
  fieldNames?: FieldNames,
) {
  const restKeys: React.Key[] = [...keys];
  const nodes: DataNode[] = [];
  traverseNodesKey(
    treeData,
    (key, node) => {
        throw new Error("STUB");
    },
    fillFieldNames(fieldNames),
  );
  return nodes;
}
