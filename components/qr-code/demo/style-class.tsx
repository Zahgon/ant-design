import React from 'react';
import { Flex, QRCode } from 'antd';
import type { GetProp, QRCodeProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => { throw new Error("STUB"); });

const stylesObject: QRCodeProps['styles'] = {
  root: {
    border: '2px solid #1890ff',
    borderRadius: 8,
    padding: 16,
    backgroundColor: 'rgb(24, 144, 255, 0.1)',
  },
};

const stylesFunction: QRCodeProps['styles'] = (info): GetProp<QRCodeProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
