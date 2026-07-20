import * as React from 'react';
import { Button, Space } from 'antd';
import type { GetProp, SpaceProps } from 'antd';

const classNamesObject: SpaceProps['classNames'] = {
  root: 'demo-space-root',
  item: 'demo-space-item',
  separator: 'demo-space-separator',
};

const classNamesFn: SpaceProps['classNames'] = (
  info,
): GetProp<SpaceProps, 'classNames', 'Return'> => {
    throw new Error("STUB");
};

const stylesObject: SpaceProps['styles'] = {
  root: { borderWidth: 2, borderStyle: 'dashed', padding: 8, marginBottom: 10 },
  item: { backgroundColor: '#f0f0f0', padding: 4 },
  separator: { color: 'red', fontWeight: 'bold' },
};

const stylesFn: SpaceProps['styles'] = (info): GetProp<SpaceProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
