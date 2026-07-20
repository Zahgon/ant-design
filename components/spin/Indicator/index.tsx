import * as React from 'react';
import { clsx } from 'clsx';

import { cloneElement } from '../../_util/reactNode';
import Looper from './Looper';

export interface IndicatorProps {
  prefixCls: string;
  indicator?: React.ReactNode;
  percent?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function Indicator(props: IndicatorProps) {
    throw new Error("STUB");
}
