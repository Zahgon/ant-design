import React, { useState } from 'react';
import type { RadioChangeEvent, RadioGroupProps } from 'antd';
import { Flex, Input, Radio } from 'antd';

const labelStyle: React.CSSProperties = {
  height: 32,
  lineHeight: '32px',
};

const buttonOptions: RadioGroupProps['options'] = [
  { label: 'Apple', value: 'Apple', className: 'label-1' },
  { label: 'Pear', value: 'Pear', className: 'label-2' },
  { label: 'Orange', value: 'Orange', title: 'Orange', className: 'label-3' },
];

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
