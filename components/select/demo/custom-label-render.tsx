import React from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';

type LabelRender = SelectProps['labelRender'];

const options = [
  { label: 'gold', value: 'gold' },
  { label: 'lime', value: 'lime' },
  { label: 'green', value: 'green' },
  { label: 'cyan', value: 'cyan' },
];

const labelRender: LabelRender = (props) => {
    throw new Error("STUB");
};

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
