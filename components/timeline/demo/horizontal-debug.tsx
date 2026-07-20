import React from 'react';
import { Divider, Flex, Timeline } from 'antd';
import type { TimelineProps } from 'antd';

const longText = 'Long Text '.repeat(5);

const sharedProps: TimelineProps = {
  orientation: 'horizontal',
  styles: {
    item: {
      boxShadow: '0 0 1px rgba(255,0,0,0.6)',
    },
  },
  items: [
    {
      title: longText,
      content: longText,
    },
    {
      content: longText,
    },
    {
      content: longText,
    },
    {
      title: longText,
      content: longText,
    },
  ],
};

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
