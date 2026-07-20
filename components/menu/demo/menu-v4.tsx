import React, { useState } from 'react';
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { ConfigProvider, Menu, Switch, Typography } from 'antd';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: '1',
    icon: <MailOutlined />,
    label: 'Navigation One',
  },
  {
    key: '2',
    icon: <CalendarOutlined />,
    label: 'Navigation Two',
  },
  {
    key: 'sub1',
    icon: <AppstoreOutlined />,
    label: 'Navigation Two',
    children: [
      {
        key: '3',
        label: (
          <Typography.Text ellipsis>
            Ant Design, a design language for background applications, is refined by Ant UED Team
          </Typography.Text>
        ),
      },
      {
        key: '4',
        label: 'Option 4',
      },
      {
        key: 'sub1-2',
        label: 'Submenu',
        children: [
          { key: '5', label: 'Option 5' },
          { key: '6', label: 'Option 6' },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      { label: 'Option 7', key: '7' },
      { label: 'Option 8', key: '8' },
      { label: 'Option 9', key: '9' },
      { label: 'Option 10', key: '10' },
    ],
  },
  {
    key: 'link',
    icon: <LinkOutlined />,
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Ant Design
      </a>
    ),
  },
];

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
