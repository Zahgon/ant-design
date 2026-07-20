import React, { useState } from 'react';
import { TreeSelect } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
        key: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node4',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];

const MAX_COUNT = 2;

function MaxCountNoEffectDemo() {
    throw new Error("STUB");
}

export default MaxCountNoEffectDemo;
