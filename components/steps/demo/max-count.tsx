import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import type { InputNumberProps } from 'antd';
import { Button, Flex, InputNumber, Steps, Typography } from 'antd';

const genItems = (count: number) =>
  Array.from({ length: count }, (_, index) => { throw new Error("STUB"); });

const getMiddleCurrent = (count: number) => Math.floor((count - 1) / 2);

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
