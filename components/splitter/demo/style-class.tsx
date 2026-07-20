import React from 'react';
import { Flex, Splitter, Typography } from 'antd';
import type { GetProp, SplitterProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const Desc: React.FC<Readonly<{ text?: string | number; style?: React.CSSProperties }>> = (
  props,
) => {
    throw new Error("STUB");
};

const styles = createStaticStyles(({ css, cssVar }) => { throw new Error("STUB"); });

const stylesObject: SplitterProps['styles'] = {
  root: { backgroundColor: '#fffbe6' },
  // dragger: { backgroundColor: 'rgba(194,223,252,0.4)' },
  dragger: { default: { backgroundColor: 'rgba(194,223,252,0.4)' } },
};

const stylesFn: SplitterProps['styles'] = ({
  props,
}): GetProp<SplitterProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
