import React from 'react';
import { Flex, TreeSelect } from 'antd';
import type { GetProp, TreeSelectProps } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => { throw new Error("STUB"); });

const styleObject: TreeSelectProps['styles'] = {
  input: {
    fontSize: 16,
  },
  suffix: {
    color: '#1890ff',
  },
  popup: {
    root: {
      border: '1px solid #1890ff',
    },
  },
};

const styleFunction: TreeSelectProps['styles'] = (
  info,
): GetProp<TreeSelectProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const treeData: TreeSelectProps['treeData'] = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: 'leaf3',
          },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
