import React from 'react';
import { ConfigProvider, Radio } from 'antd';
import type { CheckboxGroupProps } from 'antd/es/checkbox';

const options: CheckboxGroupProps<string | number>['options'] = [
  { value: 1, label: 'A' },
  { value: 2, label: 'B' },
  { value: 3, label: 'C' },
  { value: 4, label: 'D' },
];

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
