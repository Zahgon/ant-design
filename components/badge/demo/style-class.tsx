import React from 'react';
import { Avatar, Badge, Card, Flex, Space } from 'antd';
import type { BadgeProps, GetProp } from 'antd';
import { createStaticStyles } from 'antd-style';
import type { RibbonProps } from 'antd/es/badge/Ribbon';

const badgeClassNames = createStaticStyles(({ css }) => { throw new Error("STUB"); });

const ribbonClassNames = createStaticStyles(({ css }) => { throw new Error("STUB"); });

const badgeStyles: BadgeProps['styles'] = {
  root: {
    borderRadius: 8,
  },
};

const ribbonStyles: RibbonProps['styles'] = {
  indicator: {
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
};

const badgeStylesFn: BadgeProps['styles'] = (info): GetProp<RibbonProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const ribbonStylesFn: RibbonProps['styles'] = (info): GetProp<RibbonProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
