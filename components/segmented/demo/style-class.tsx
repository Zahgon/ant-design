import React from 'react';
import { CloudOutlined, RocketOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { Flex, Segmented } from 'antd';
import type { GetProp, SegmentedProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => { throw new Error("STUB"); });

const styleFn: SegmentedProps['styles'] = (info): GetProp<SegmentedProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const styles: SegmentedProps['styles'] = {
  root: {
    padding: 4,
    width: 260,
  },
};

const options: SegmentedProps['options'] = [
  {
    label: 'Boost',
    value: 'boost',
    icon: <RocketOutlined />,
  },
  {
    label: 'Stream',
    value: 'stream',
    icon: <ThunderboltOutlined />,
  },
  {
    label: 'Cloud',
    value: 'cloud',
    icon: <CloudOutlined />,
  },
];

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
