import React from 'react';
import { Flex, Mentions } from 'antd';
import type { GetProp, MentionsProps } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => { throw new Error("STUB"); });

const options: MentionsProps['options'] = [
  { value: 'afc163', label: 'afc163' },
  { value: 'zombieJ', label: 'zombieJ' },
  { value: 'meet-student', label: 'meet-student' },
  { value: 'thinkasany', label: 'thinkasany' },
];

const stylesObject: MentionsProps['styles'] = {
  textarea: {
    fontSize: 14,
    resize: 'vertical',
    fontWeight: 200,
  },
};

const stylesFunction: MentionsProps['styles'] = (
  info,
): GetProp<MentionsProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
