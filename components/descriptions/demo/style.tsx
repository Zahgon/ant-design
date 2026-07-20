import React, { useState } from 'react';
import { Descriptions, Divider, Radio, Switch } from 'antd';
import type { DescriptionsProps } from 'antd';

const labelStyle: React.CSSProperties = { background: 'red' };
const contentStyle: React.CSSProperties = { background: 'green' };

type LayoutType = 'horizontal' | 'vertical' | undefined;

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Product',
    children: 'Cloud Database',
    styles: {
      label: labelStyle,
      content: contentStyle,
    },
  },
  {
    key: '2',
    label: 'Billing Mode',
    children: 'Prepaid',
  },
  {
    key: '3',
    label: 'Automatic Renewal',
    children: 'YES',
  },
];

const rootStyleItems: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Product',
    children: 'Cloud Database',
  },
  {
    key: '2',
    label: 'Billing Mode',
    children: 'Prepaid',
  },
  {
    key: '3',
    label: 'Automatic Renewal',
    children: 'YES',
    styles: {
      label: { color: 'orange' },
      content: { color: 'blue' },
    },
  },
];

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
