import React from 'react';
import { DeleteOutlined, DownOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import type { DropdownProps, MenuProps } from 'antd';

import useLocale from '../../../.dumi/hooks/useLocale';
import SemanticPreview from '../../../.dumi/theme/common/SemanticPreview';

const locales = {
  cn: {
    root: 'dropdown 的根元素，设置定位、层级和容器样式',
    itemTitle: 'dropdown 选项的标题内容区域，设置布局和文字样式',
    item: 'dropdown 的单个选项元素，设置选项的交互状态和背景样式',
    itemContent: 'dropdown 选项的主要内容区域，设置内容布局和链接样式',
    itemIcon: 'dropdown 选项的图标区域，设置图标的尺寸和间距样式',
  },
  en: {
    root: 'Root element of dropdown, sets positioning, z-index and container styles',
    itemTitle: 'Title content area of dropdown option, sets layout and text styles',
    item: 'Individual dropdown option element, sets interaction states and background styles',
    itemContent: 'Main content area of dropdown option, sets content layout and link styles',
    itemIcon: 'Icon area of dropdown option, sets icon size and spacing styles',
  },
};

const items: MenuProps['items'] = [
  {
    key: '1',
    type: 'group',
    label: 'Group title',
    children: [
      {
        key: '1-1',
        label: '1st menu item',
        icon: <SaveOutlined />,
      },
      {
        key: '1-2',
        label: '2nd menu item',
        icon: <EditOutlined />,
      },
    ],
  },
  {
    key: 'SubMenu',
    label: 'SubMenu',
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
  {
    key: '3',
    type: 'divider',
  },
  {
    key: '4',
    label: 'Delete',
    icon: <DeleteOutlined />,
    danger: true,
  },
];

const Block: React.FC<Readonly<DropdownProps>> = (props) => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
