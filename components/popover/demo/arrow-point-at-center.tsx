import React from 'react';
import { Flex, Popover } from 'antd';
import type { GetProp } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => { throw new Error("STUB"); });

type Placement = GetProp<typeof Popover, 'placement'>;

const placements: Placement[] = [
  'topLeft',
  'top',
  'topRight',
  'leftTop',
  'left',
  'leftBottom',
  'rightTop',
  'right',
  'rightBottom',
  'bottomLeft',
  'bottom',
  'bottomRight',
];

const App = () => {
    throw new Error("STUB");
};

export default App;
