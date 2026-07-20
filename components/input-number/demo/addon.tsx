import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Cascader, InputNumber, Select, Space } from 'antd';

const selectBefore = (
  <Select
    defaultValue="add"
    style={{ width: 60 }}
    options={[
      { label: '+', value: 'add' },
      { label: '-', value: 'minus' },
    ]}
  />
);

const selectAfter = (
  <Select
    defaultValue="USD"
    style={{ width: 60 }}
    options={[
      { label: '$', value: 'USD' },
      { label: '€', value: 'EUR' },
      { label: '£', value: 'GBP' },
      { label: '¥', value: 'CNY' },
    ]}
  />
);

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
