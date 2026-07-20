import React from 'react';
import { Descriptions, Flex } from 'antd';
import type { DescriptionsProps, GetProp } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => { throw new Error("STUB"); });

const items: DescriptionsProps['items'] = [
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
  },
];

const styles: DescriptionsProps['styles'] = {
  label: {
    color: '#000',
  },
};

const stylesFn: DescriptionsProps['styles'] = (
  info,
): GetProp<DescriptionsProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
