import React from 'react';
import { Flex, Steps } from 'antd';
import type { GetProp, StepsProps } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => { throw new Error("STUB"); });

const stylesObject: StepsProps['styles'] = {
  itemIcon: { borderRadius: '30%' },
  itemContent: { fontStyle: 'italic' },
};

const stylesFn: StepsProps['styles'] = (info): GetProp<StepsProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
