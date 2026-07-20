import React from 'react';
import { CarryOutOutlined } from '@ant-design/icons';
import type { TreeDataNode, TreeProps } from 'antd';
import { Switch, Tree } from 'antd';

const x = 3;
const y = 2;
const z = 1;
const data: TreeDataNode[] = [];

const generateData = (_level: number, preKey = '0', tns = data): TreeDataNode[] | undefined => {
  const children: string[] = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key, icon: <CarryOutOutlined /> });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
      throw new Error("STUB");
  });
};

generateData(z);

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
