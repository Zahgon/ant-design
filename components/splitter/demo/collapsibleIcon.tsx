import React, { useState } from 'react';
import { Flex, Radio, Splitter, Typography } from 'antd';
import type { RadioChangeEvent } from 'antd';
import type { CheckboxGroupProps } from 'antd/es/checkbox';

const Desc: React.FC<Readonly<{ text?: string | number }>> = (props) => { throw new Error("STUB"); };

const options: CheckboxGroupProps<'auto' | boolean>['options'] = [
  { label: 'Auto', value: 'auto' },
  { label: 'True', value: true },
  { label: 'False', value: false },
];

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
