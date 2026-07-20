import React from 'react';
import { Flex, Slider } from 'antd';
import type { SliderSingleProps } from 'antd';
import { createStyles } from 'antd-style';

const useHorizontalStyles = createStyles(({ css }) => { throw new Error("STUB"); });

const useVerticalStyles = createStyles(({ css, prefixCls, cssVar }) => { throw new Error("STUB"); });

const stylesObject: SliderSingleProps['styles'] = {
  track: { backgroundImage: 'linear-gradient(180deg, #91caff, #1677ff)' },
  handle: { borderColor: '#1677ff', boxShadow: '0 2px 8px #1677ff' },
};

const stylesFn: SliderSingleProps['styles'] = (info) => {
    throw new Error("STUB");
};

const sharedProps: SliderSingleProps = {
  defaultValue: 30,
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
