import React from 'react';
import { Flex, Skeleton } from 'antd';
import type { GetProp, SkeletonProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const classnames = createStaticStyles(({ css }) => { throw new Error("STUB"); });

const paragraphStyles = createStaticStyles(({ css }) => { throw new Error("STUB"); });

const styles: SkeletonProps['styles'] = {
  avatar: {
    border: '1px solid #aaa',
  },
  title: {
    border: '1px solid #aaa',
  },
};

const stylesFn: SkeletonProps['styles'] = (info): GetProp<SkeletonProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
