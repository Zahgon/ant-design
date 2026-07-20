import React from 'react';
import { Mentions } from 'antd';
import type { GetProp, MentionProps } from 'antd';

type MentionsOptionProps = GetProp<MentionProps, 'options'>[number];

const onChange = (value: string) => {
  console.log('Change:', value);
};

const onSelect = (option: MentionsOptionProps) => {
  console.log('select', option);
};

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
