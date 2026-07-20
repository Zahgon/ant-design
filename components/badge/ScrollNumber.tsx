import * as React from 'react';
import { clsx } from 'clsx';

import { cloneElement } from '../_util/reactNode';
import { ConfigContext } from '../config-provider';
import SingleNumber from './SingleNumber';

export interface ScrollNumberProps {
  prefixCls?: string;
  className?: string;
  motionClassName?: string;
  count?: string | number | null;
  children?: React.ReactElement;
  component?: React.ComponentType<React.HTMLAttributes<HTMLElement>>;
  style?: React.CSSProperties;
  title?: string | number | null;
  show: boolean;
}

export interface ScrollNumberState {
  animateStarted?: boolean;
  count?: string | number | null;
}

const ScrollNumber = React.forwardRef<HTMLElement, ScrollNumberProps>((props, ref) => {
    throw new Error("STUB");
});

export default ScrollNumber;
