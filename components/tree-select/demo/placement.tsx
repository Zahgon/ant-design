import React, { useState } from 'react';
import type { GetProp, RadioChangeEvent, TreeSelectProps } from 'antd';
import { Radio, TreeSelect } from 'antd';

type SelectCommonPlacement = GetProp<TreeSelectProps, 'placement'>;

const treeData = [
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
            title: <b style={{ color: '#08c' }}>leaf3</b>,
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
