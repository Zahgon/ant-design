import * as React from 'react';
import type { ProgressProps as RcProgressProps } from '@rc-component/progress';
import { Circle as RCCircle } from '@rc-component/progress';
import { omit } from '@rc-component/util';
import { clsx } from 'clsx';

import { isPlainObject } from '../_util/is';
import { useComponentConfig } from '../config-provider/context';
import Tooltip from '../tooltip';
import type {
  GapPosition,
  ProgressGradient,
  ProgressProps,
  ProgressSemanticAllType,
} from './progress';
import { getPercentage, getSize, getStrokeColor } from './utils';

const CIRCLE_MIN_STROKE_WIDTH = 3;

const getMinPercent = (width: number): number => (CIRCLE_MIN_STROKE_WIDTH / width) * 100;

const OMIT_SEMANTIC_NAMES = ['root', 'body', 'indicator'] as const;

export interface CircleProps extends Omit<ProgressProps, 'classNames' | 'styles'> {
  prefixCls: string;
  children: React.ReactNode;
  progressStatus: string;
  strokeColor?: string | ProgressGradient;
  classNames: NonNullable<ProgressSemanticAllType['classNames']>;
  styles: NonNullable<ProgressSemanticAllType['styles']>;
}

const Circle: React.FC<CircleProps> = (props) => {
    throw new Error("STUB");
};

export default Circle;
