import * as React from 'react';

import { ConfigContext } from '../config-provider';
import SkeletonNode from './Node';
import type { SkeletonNodeProps } from './Node';

export interface SkeletonImageProps
  extends Omit<SkeletonNodeProps, 'children' | 'internalClassName'> {}

const SkeletonImage: React.FC<SkeletonImageProps> = (props) => {
    throw new Error("STUB");
};

export default SkeletonImage;
