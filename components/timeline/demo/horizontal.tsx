import React from 'react';
import { Divider, Flex, Timeline } from 'antd';
import type { TimelineProps } from 'antd';

const sharedProps: TimelineProps = {
  orientation: 'horizontal',
  items: [
    {
      content: 'Init',
    },
    {
      content: 'Start',
    },
    {
      content: 'Pending',
    },
    {
      content: 'Complete',
    },
  ],
};

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
