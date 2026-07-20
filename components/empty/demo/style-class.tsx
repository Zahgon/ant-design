import React from 'react';
import type { EmptyProps, GetProp } from 'antd';
import { Button, Empty, Flex } from 'antd';
import { createStaticStyles } from 'antd-style';

const emptySharedProps: EmptyProps = {
  image: Empty.PRESENTED_IMAGE_SIMPLE,
  children: <Button type="primary">Create Now</Button>,
};

const classNames = createStaticStyles(({ css }) => { throw new Error("STUB"); });

const stylesObject: EmptyProps['styles'] = {
  root: { backgroundColor: '#f5f5f5', borderRadius: '8px' },
  image: { filter: 'grayscale(100%)' },
  description: { color: '#1890ff', fontWeight: 'bold' },
  footer: { marginTop: '16px' },
};

const stylesFn: EmptyProps['styles'] = ({ props }): GetProp<EmptyProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
