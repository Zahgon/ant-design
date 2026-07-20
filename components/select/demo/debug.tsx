import React from 'react';
import { Button, Flex, Input, Select, Space } from 'antd';

const style: React.CSSProperties = {
  width: 500,
  position: 'relative',
  zIndex: 1,
  border: '1px solid red',
  backgroundColor: '#fff',
};

const handleChange = (value: string | string[]) => {
  console.log(`selected ${value}`);
};

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
