import React from 'react';
import { Flex, InputNumber } from 'antd';
import type { GetProp, InputNumberProps } from 'antd';
import { createStyles } from 'antd-style';

const useStyle = createStyles(({ token }) => { throw new Error("STUB"); });

const stylesObject: InputNumberProps['styles'] = {
  input: {
    fontSize: 14,
  },
};

const stylesFn: InputNumberProps['styles'] = ({
  props,
}): GetProp<InputNumberProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
