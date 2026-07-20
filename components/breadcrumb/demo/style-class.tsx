import React from 'react';
import { Breadcrumb, Flex } from 'antd';
import type { BreadcrumbProps, GetProp } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => { throw new Error("STUB"); });

const styles: BreadcrumbProps['styles'] = {
  root: { border: '1px solid #f0f0f0', padding: 8, borderRadius: 4 },
  item: { color: '#1890ff' },
  separator: { color: 'rgba(0, 0, 0, 0.45)' },
};

const stylesFn: BreadcrumbProps['styles'] = (
  info,
): GetProp<BreadcrumbProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const items = [
  { title: 'Ant Design' },
  { title: <a href="">Component</a> },
  { title: 'Breadcrumb' },
];

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
