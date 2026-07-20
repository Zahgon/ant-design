import React from 'react';
import { CheckCircleFilled, CloseCircleFilled, ReloadOutlined } from '@ant-design/icons';
import type { QRCodeProps } from 'antd';
import { Button, Flex, QRCode, Space, Spin } from 'antd';

const value = 'https://ant.design';

const customStatusRender: QRCodeProps['statusRender'] = (info) => {
    throw new Error("STUB");
};

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
