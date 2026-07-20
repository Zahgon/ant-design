import React from 'react';
import { CloseCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { Flex, Tag } from 'antd';

const preventDefault = (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  console.log('Clicked! But prevent default.');
};

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
