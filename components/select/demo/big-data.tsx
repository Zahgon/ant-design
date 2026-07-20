import React from 'react';
import type { SelectProps } from 'antd';
import { Select, Typography } from 'antd';

const { Title } = Typography;

const options: SelectProps['options'] = [];

for (let i = 0; i < 100000; i++) {
  const value = `${i.toString(36)}${i}`;
  options.push({
    label: value,
    value,
    disabled: i === 10,
  });
}

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
