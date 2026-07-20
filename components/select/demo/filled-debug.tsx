import React from 'react';
import { Flex, Select } from 'antd';
import type { SelectProps } from 'antd';

const sharedSelectProps: SelectProps<string> = {
  value: 'lucy',
  variant: 'filled' as const,
  style: { flex: '1 1 50%', minWidth: 0 },
  options: [
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'Yiminghe', label: 'yiminghe' },
  ],
};

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
