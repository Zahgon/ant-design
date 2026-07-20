import * as React from 'react';

import { isFunction, isNumber } from '../_util/is';
import type { FormatConfig, valueType } from './utils';

interface NumberProps extends FormatConfig {
  value: valueType;
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
}

const StatisticNumber: React.FC<NumberProps> = (props) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  StatisticNumber.displayName = 'StatisticNumber';
}

export default StatisticNumber;
