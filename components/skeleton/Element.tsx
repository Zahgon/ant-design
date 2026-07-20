import * as React from 'react';
import { clsx } from 'clsx';

import { isNumber } from '../_util/is';
import { devUseWarning } from '../_util/warning';
import type { SizeType } from '../config-provider/SizeContext';

export type ElementSemanticType = {
  classNames?: {
    root?: string;
    content?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    content?: React.CSSProperties;
  };
};

export interface SkeletonElementProps {
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  style?: React.CSSProperties;
  /**
   * Note: `default` is deprecated and will be removed in v7, please use `medium` instead.
   */
  size?: SizeType | number | 'default';
  shape?: 'circle' | 'square' | 'round' | 'default';
  active?: boolean;
  classNames?: ElementSemanticType['classNames'];
  styles?: ElementSemanticType['styles'];
}

const Element: React.FC<SkeletonElementProps> = (props) => {
    throw new Error("STUB");
};

export default Element;
