import React from 'react';
import { Alert, Button, Flex } from 'antd';
import type { AlertProps, GetProp } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => { throw new Error("STUB"); });

const styleFn: AlertProps['styles'] = ({
  props: { type },
}): GetProp<AlertProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
