import React from 'react';
import { Flex, Image } from 'antd';
import type { GetProp, ImageProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => { throw new Error("STUB"); });

const styles: ImageProps['styles'] = {
  image: {
    borderRadius: '4px',
  },
};

const stylesFn: ImageProps['styles'] = (info): GetProp<ImageProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
