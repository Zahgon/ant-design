import React from 'react';
import { Button, Flex, Popover } from 'antd';
import type { GetProp, PopoverProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => { throw new Error("STUB"); });

const styles: PopoverProps['styles'] = {
  container: {
    background: '#eee',
    boxShadow: 'inset 5px 5px 3px #fff, inset -5px -5px 3px #ddd, 0 0 3px rgba(0,0,0,0.2)',
  },
  content: {
    color: '#262626',
  },
};

const stylesFn: PopoverProps['styles'] = (info): GetProp<PopoverProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
