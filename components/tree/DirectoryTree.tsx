import * as React from 'react';
import FileOutlined from '@ant-design/icons/FileOutlined';
import FolderOpenOutlined from '@ant-design/icons/FolderOpenOutlined';
import FolderOutlined from '@ant-design/icons/FolderOutlined';
import { conductExpandParent, convertDataToEntities, convertTreeToData } from '@rc-component/tree';
import type RcTree from '@rc-component/tree';
import type { BasicDataNode, DataNode, EventDataNode } from '@rc-component/tree';
import { clsx } from 'clsx';

import { ConfigContext } from '../config-provider';
import type { AntdTreeNodeAttribute, TreeProps } from './Tree';
import Tree from './Tree';
import { calcRangeKeys, convertDirectoryKeysToNodes } from './utils/dictUtil';

export type ExpandAction = false | 'click' | 'doubleClick';

export interface DirectoryTreeProps<T extends BasicDataNode = DataNode> extends TreeProps<T> {
  expandAction?: ExpandAction;
}

type DirectoryTreeCompoundedComponent = (<T extends BasicDataNode | DataNode = DataNode>(
  props: React.PropsWithChildren<DirectoryTreeProps<T>> & React.RefAttributes<RcTree>,
) => React.ReactElement) &
  Pick<React.FC, 'displayName'>;

export interface DirectoryTreeState {
  expandedKeys?: React.Key[];
  selectedKeys?: React.Key[];
}

function getIcon(props: AntdTreeNodeAttribute): React.ReactNode {
  const { isLeaf, expanded } = props;
  if (isLeaf) {
    return <FileOutlined />;
  }
  return expanded ? <FolderOpenOutlined /> : <FolderOutlined />;
}

function getTreeData({ treeData, children }: DirectoryTreeProps) {
  return treeData || convertTreeToData(children);
}

const DirectoryTree = React.forwardRef<RcTree, DirectoryTreeProps>((oriProps, ref) => {
    throw new Error("STUB");
}) as DirectoryTreeCompoundedComponent;

if (process.env.NODE_ENV !== 'production') {
  DirectoryTree.displayName = 'DirectoryTree';
}

export default DirectoryTree;
