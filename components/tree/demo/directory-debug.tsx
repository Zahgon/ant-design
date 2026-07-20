import React from 'react';
import { Flex, Tree } from 'antd';
import type { GetProps, TreeDataNode } from 'antd';

const { DirectoryTree } = Tree;

const treeData: TreeDataNode[] = [
  {
    title: 'parent 0',
    key: '0-0',
    children: [
      { title: 'leaf 0-0', key: '0-0-0', isLeaf: true, disabled: true },
      { title: 'leaf 0-1', key: '0-0-1', isLeaf: true, disableCheckbox: true },
    ],
  },
  {
    title: 'parent 1',
    key: '0-1',
    children: [
      { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
      { title: 'leaf 1-1', key: '0-1-1', isLeaf: true },
    ],
  },
];

const sharedProps: GetProps<typeof DirectoryTree> = {
  treeData,
  defaultExpandAll: true,
  onSelect: (keys, info) => {
      throw new Error("STUB");
  },
  onExpand: (keys, info) => {
      throw new Error("STUB");
  },
};

const DemoOne = () => { throw new Error("STUB"); };

const DemoTwo = () => { throw new Error("STUB"); };

const DemoThree = () => { throw new Error("STUB"); };

const BasicDemo = () => { throw new Error("STUB"); };

const NormalDemo = () => { throw new Error("STUB"); };

const NormalCheckDemo = () => { throw new Error("STUB"); };

const NormalDragDemo = () => { throw new Error("STUB"); };

const App = () => { throw new Error("STUB"); };

export default App;
