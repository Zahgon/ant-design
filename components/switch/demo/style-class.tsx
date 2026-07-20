import React from 'react';
import { Flex, Switch } from 'antd';
import type { GetProp, SwitchProps } from 'antd';
import { createStyles } from 'antd-style';

const useStyle = createStyles((props) => {
    throw new Error("STUB");
});

const stylesObject: SwitchProps['styles'] = {
  root: {
    backgroundColor: '#F5D2D2',
  },
};

const stylesFn: SwitchProps['styles'] = (info): GetProp<SwitchProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const Demo: React.FC = () => {
    throw new Error("STUB");
};

export default Demo;
