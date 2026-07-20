import React, { useState } from 'react';
import { Radio, Select, Space } from 'antd';
import type { ConfigProviderProps, RadioChangeEvent, SelectProps } from 'antd';

type SizeType = ConfigProviderProps['componentSize'];

const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

const handleChange = (value: string | string[]) => {
  console.log(`Selected: ${value}`);
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
