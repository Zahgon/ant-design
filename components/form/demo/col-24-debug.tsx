import React from 'react';
import { Button, Divider, Form, Input, Select } from 'antd';

const sharedItem = (
  <Form.Item
    label={
      <a
        href="https://github.com/ant-design/ant-design/issues/36459"
        target="_blank"
        rel="noopener noreferrer"
      >
        #36459
      </a>
    }
    initialValue={['bamboo']}
    name="select"
    style={{ boxShadow: '0 0 3px red' }}
  >
    <Select
      style={{ width: '70%' }}
      mode="multiple"
      options={[
        { label: 'Bamboo', value: 'bamboo' },
        { label: 'Little', value: 'little' },
        { label: 'Light', value: 'light' },
      ]}
    />
  </Form.Item>
);

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
