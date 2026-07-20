import React from 'react';
import { ConfigProvider, Select, Space } from 'antd';
import type { SelectProps } from 'antd';

const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
