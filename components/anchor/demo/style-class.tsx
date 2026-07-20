import React from 'react';
import { Anchor, Col, Row } from 'antd';
import type { AnchorProps, GetProp } from 'antd';

const classNamesObject: AnchorProps['classNames'] = {
  root: 'demo-anchor-root',
  item: 'demo-anchor-item',
  itemTitle: 'demo-anchor-title',
  indicator: 'demo-anchor-indicator',
};

const stylesFn: AnchorProps['styles'] = (info): GetProp<AnchorProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const items: NonNullable<AnchorProps['items']> = [
  {
    key: 'part-1',
    href: '#part-1',
    title: 'Part 1',
  },
  {
    key: 'part-2',
    href: '#part-2',
    title: 'Part 2',
  },
  {
    key: 'part-3',
    href: '#part-3',
    title: 'Part 3',
  },
];

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
