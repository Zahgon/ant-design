import React from 'react';
import { Button, Flex } from 'antd';
import type { ButtonProps, GetProp } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ cssVar }) => { throw new Error("STUB"); });

const stylesObject: ButtonProps['styles'] = {
  root: {
    boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
  },
};

const stylesFn: ButtonProps['styles'] = (info): GetProp<ButtonProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
