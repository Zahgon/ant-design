import * as React from 'react';
import { clsx } from 'clsx';

import { ConfigContext } from '../config-provider';
import useSize from '../config-provider/hooks/useSize';
import type { SkeletonElementProps } from './Element';
import Element from './Element';
import useStyle from './style';

export interface AvatarProps extends Omit<SkeletonElementProps, 'shape'> {
  shape?: 'circle' | 'square';
}

const SkeletonAvatar: React.FC<AvatarProps> = (props) => {
    throw new Error("STUB");
};

export default SkeletonAvatar;
