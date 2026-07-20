import React from 'react';
import { Checkbox, Col, Row } from 'antd';
import type { GetProp } from 'antd';

const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
  console.log('checked = ', checkedValues);
};

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
