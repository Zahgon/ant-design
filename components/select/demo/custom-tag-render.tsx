import React from 'react';
import { Select, Tag } from 'antd';
import type { SelectProps } from 'antd';

type TagRender = SelectProps['tagRender'];

const options: SelectProps['options'] = [
  { value: 'gold' },
  { value: 'lime' },
  { value: 'green' },
  { value: 'cyan' },
];

const tagRender: TagRender = (props) => {
    throw new Error("STUB");
};

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
