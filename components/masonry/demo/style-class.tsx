import React from 'react';
import { Card, Divider, Flex, Masonry, Typography } from 'antd';
import type { GetProp, MasonryProps } from 'antd';
import { createStaticStyles } from 'antd-style';
import type { MasonryItemType } from 'antd/es/masonry/MasonryItem';

const { Title } = Typography;

const classNames = createStaticStyles(({ css }) => { throw new Error("STUB"); });

const items = [120, 80, 100, 60, 140, 90, 110, 70].map<MasonryItemType<number>>(
  (height, index) => { throw new Error("STUB"); },
);

const styles: MasonryProps['styles'] = {
  root: {
    borderRadius: 12,
    padding: 20,
    height: 260,
    backgroundColor: 'rgba(250,250,250,0.5)',
  },
  item: {
    transform: 'scale(0.98)',
    transition: 'transform 0.2s ease',
    border: '1px solid #ccc',
  },
};

const stylesFn: MasonryProps['styles'] = (info): GetProp<MasonryProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
