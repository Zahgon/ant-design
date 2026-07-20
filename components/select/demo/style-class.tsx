import React from 'react';
import { MehOutlined } from '@ant-design/icons';
import { Flex, Select } from 'antd';
import type { GetProp, SelectProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => { throw new Error("STUB"); });

const options: SelectProps['options'] = [
  { value: 'GuangZhou', label: 'GuangZhou' },
  { value: 'ShenZhen', label: 'ShenZhen' },
];

const stylesObject: SelectProps['styles'] = {
  prefix: {
    color: '#1890ff',
  },
  suffix: {
    color: '#1890ff',
  },
};

const stylesFn: SelectProps['styles'] = ({ props }): GetProp<SelectProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
