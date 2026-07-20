import * as React from 'react';
import { clsx } from 'clsx';

import { ConfigContext } from '../config-provider';
import useSize from '../config-provider/hooks/useSize';
import type { SizeType } from '../config-provider/SizeContext';
import type { SkeletonElementProps } from './Element';
import Element from './Element';
import useStyle from './style';

export interface SkeletonButtonProps extends Omit<SkeletonElementProps, 'size'> {
  /**
   * Note: `default` is deprecated and will be removed in v7, please use `medium` instead.
   */
  size?: SizeType | 'default';
  block?: boolean;
}

const SkeletonButton: React.FC<SkeletonButtonProps> = (props) => {
    throw new Error("STUB");
};

export default SkeletonButton;
