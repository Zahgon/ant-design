import React from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Flex, Space } from 'antd';

const onMenuClick: MenuProps['onClick'] = (e) => {
    throw new Error("STUB");
};

const items = [
  {
    key: '1',
    label: '1st item',
  },
  {
    key: '2',
    label: '2nd item',
  },
  {
    key: '3',
    label: '3rd item',
  },
];

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
