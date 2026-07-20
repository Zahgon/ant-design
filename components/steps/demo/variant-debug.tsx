import React from 'react';
import { ConfigProvider, Divider, Flex, Steps } from 'antd';
import type { StepsProps } from 'antd';

const items: StepsProps['items'] = [
  {
    title: 'Finished',
    content: 'This is a content.',
  },
  {
    title: 'In Progress',
    content: 'This is a content.',
    status: 'error',
  },
  {
    title: 'Waiting',
    content: 'This is a content.',
  },
];

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
