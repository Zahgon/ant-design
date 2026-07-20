import React from 'react';
import { Flex, Menu } from 'antd';
import type { GetProp, MenuProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => { throw new Error("STUB"); });

const items: Required<MenuProps>['items'] = [
  {
    key: 'SubMenu',
    label: 'Navigation One',
    children: [
      {
        key: 'g1',
        label: 'Item 1',
        type: 'group',
        children: [
          { key: '1', label: 'Option 1' },
          { key: '2', label: 'Option 2' },
        ],
      },
    ],
  },
  { key: 'mail', label: 'Navigation Two' },
];

const styles: MenuProps['styles'] = {
  root: { border: '1px solid #f0f0f0', padding: 8, borderRadius: 4 },
  item: { color: '#1677ff' },
  subMenu: { list: { color: '#fa541c' } },
};

const stylesFn: MenuProps['styles'] = (info): GetProp<MenuProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
