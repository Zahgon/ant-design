import React from 'react';
import { Button, Flex, Tooltip } from 'antd';
import type { GetProp, TooltipProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => { throw new Error("STUB"); });

const styles: TooltipProps['styles'] = {
  container: {
    borderRadius: 12,
    boxShadow: 'inset 0 0 8px #ccc',
  },
};

const stylesFn: TooltipProps['styles'] = (info): GetProp<TooltipProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
