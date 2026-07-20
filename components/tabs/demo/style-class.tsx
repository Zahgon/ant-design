import React from 'react';
import { Flex, Tabs } from 'antd';
import type { GetProp, TabsProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => { throw new Error("STUB"); });

const stylesObject: TabsProps['styles'] = {
  root: { borderWidth: 2, borderStyle: 'dashed', padding: 16, marginBottom: 10 },
  header: { backgroundColor: 'rgba(245,245,245,0.5)' },
  item: { fontWeight: 'bold', color: '#1890ff', padding: `6px 10px` },
  indicator: { backgroundColor: 'rgba(255,77,79, 0.3)', height: 4 },
  body: { backgroundColor: 'rgba(230,247,255,0.8)' },
  content: { padding: 16 },
};

const stylesFn: TabsProps['styles'] = (info): GetProp<TabsProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const items = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
