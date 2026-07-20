import React from 'react';
import type { InputNumberProps } from 'antd';
import { InputNumber, Space } from 'antd';

const onChange: InputNumberProps['onChange'] = (value) => {
  console.log('changed', value);
};

const formatter: InputNumberProps<number>['formatter'] = (value) => {
  const [start, end] = `${value}`.split('.') || [];
  const v = `${start}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `$ ${end ? `${v}.${end}` : `${v}`}`;
};

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
