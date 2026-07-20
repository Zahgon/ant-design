import React from 'react';
import { Button, Form, Input, Space } from 'antd';
import type { FormProps, GetProp } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => { throw new Error("STUB"); });

const stylesObject: FormProps['styles'] = {
  label: {
    textAlign: 'end',
    color: '#333',
    fontWeight: 500,
  },
  content: {
    paddingInlineStart: 12,
  },
};

const stylesFunction: FormProps['styles'] = (info): GetProp<FormProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
