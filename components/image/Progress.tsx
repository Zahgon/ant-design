import * as React from 'react';
import { clsx } from 'clsx';

import { isNumber } from '../_util/is';

// Visually hidden styles for screen readers
const VISUALLY_HIDDEN_STYLE: React.CSSProperties = {
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
};

export type ProgressClassNames = {
  root?: string;
  content?: string;
  rail?: string;
  indicator?: string;
};

export type ProgressStyles = {
  root?: React.CSSProperties;
  content?: React.CSSProperties;
  rail?: React.CSSProperties;
  indicator?: React.CSSProperties;
};

export interface ProgressProps {
  prefixCls: string;
  percent?: number;
  render?: (progress: React.ReactNode, percent: number) => React.ReactNode;
  classNames?: ProgressClassNames;
  styles?: ProgressStyles;
  rootClassName?: string;
  rootStyle?: React.CSSProperties;
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
}

const Progress: React.FC<ProgressProps> = (props) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  Progress.displayName = 'ImageProgress';
}

export default Progress;
