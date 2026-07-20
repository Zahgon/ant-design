import React from 'react';
import { Checkbox } from 'antd';
import type { CheckboxOptionType } from 'antd';

const options: CheckboxOptionType<string>[] = [
  { label: 'Short', value: 'a' },
  { label: 'Long label that may wrap in narrow container', value: 'b' },
  { label: 'Medium', value: 'c' },
];

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
