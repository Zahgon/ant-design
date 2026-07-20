import React from 'react';
import { Flex, Tree } from 'antd';
import type { GetProp, TreeProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => { throw new Error("STUB"); });

const treeData: TreeProps['treeData'] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            title: 'leaf',
            key: '0-0-1-0',
          },
        ],
      },
    ],
  },
];

const styles: TreeProps['styles'] = {
  root: { border: '2px solid #d9d9d9' },
  item: { margin: '2px 0' },
};

const stylesFn: TreeProps['styles'] = (info): GetProp<TreeProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
