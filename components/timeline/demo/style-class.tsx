import React from 'react';
import { Flex, Timeline } from 'antd';
import type { GetProp, TimelineProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => { throw new Error("STUB"); });

const styles: TimelineProps['styles'] = {
  itemIcon: {
    borderColor: '#1890ff',
  },
};

const stylesFn: TimelineProps['styles'] = (info): GetProp<TimelineProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
