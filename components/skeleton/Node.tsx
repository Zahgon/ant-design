import * as React from 'react';
import { clsx } from 'clsx';

import { ConfigContext } from '../config-provider';
import type { SkeletonElementProps } from './Element';
import useStyle from './style';

export interface SkeletonNodeProps extends Omit<SkeletonElementProps, 'size' | 'shape'> {
  children?: React.ReactNode;
  internalClassName?: string;
}

const SkeletonNode: React.FC<SkeletonNodeProps> = (props) => {
    throw new Error("STUB");
};

export default SkeletonNode;
