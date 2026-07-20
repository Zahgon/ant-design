import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Cascader, Input, Select, Space } from 'antd';

const selectBefore = (
  <Select
    defaultValue="http://"
    options={[
      { value: 'http://', label: 'http://' },
      { value: 'https://', label: 'https://' },
    ]}
  />
);
const selectAfter = (
  <Select
    defaultValue=".com"
    options={[
      { value: '.com', label: '.com' },
      { value: '.jp', label: '.jp' },
      { value: '.cn', label: '.cn' },
      { value: '.org', label: '.org' },
    ]}
  />
);

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
