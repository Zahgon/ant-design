import React from 'react';
import { Flex, Progress } from 'antd';
import type { GetProp, ProgressProps } from 'antd';

const classNames: ProgressProps['classNames'] = {
  root: 'demo-progress-root',
  rail: 'demo-progress-rail',
  track: 'demo-progress-track',
};

const stylesFn: ProgressProps['styles'] = (info): GetProp<ProgressProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
