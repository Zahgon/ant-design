import React from 'react';
import { Divider } from 'antd';
import type { DividerProps, GetProp } from 'antd';

const classNamesObject: DividerProps['classNames'] = {
  root: 'demo-divider-root',
  content: 'demo-divider-content',
  rail: 'demo-divider-rail',
};

const classNamesFn: DividerProps['classNames'] = (
  info,
): GetProp<DividerProps, 'classNames', 'Return'> => {
    throw new Error("STUB");
};

const stylesObject: DividerProps['styles'] = {
  root: { borderWidth: 2, borderStyle: 'dashed' },
  content: { fontStyle: 'italic' },
  rail: { opacity: 0.85 },
};

const stylesFn: DividerProps['styles'] = (info): GetProp<DividerProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
