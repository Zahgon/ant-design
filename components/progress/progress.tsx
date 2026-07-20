import * as React from 'react';
import { FastColor } from '@ant-design/fast-color';
import CheckCircleFilled from '@ant-design/icons/CheckCircleFilled';
import CheckOutlined from '@ant-design/icons/CheckOutlined';
import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import { omit } from '@rc-component/util';
import { clsx } from 'clsx';

import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isPlainObject } from '../_util/is';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import type { SizeType } from '../config-provider/SizeContext';
import Circle from './Circle';
import Line from './Line';
import Steps from './Steps';
import useStyle from './style';
import { getSize, getSuccessPercent, validProgress } from './utils';

export type ProgressSemanticType = {
  classNames?: {
    root?: string;
    body?: string;
    rail?: string;
    track?: string;
    indicator?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    body?: React.CSSProperties;
    rail?: React.CSSProperties;
    track?: React.CSSProperties;
    indicator?: React.CSSProperties;
  };
};

export type ProgressSemanticAllType = GenerateSemantic<ProgressSemanticType, ProgressProps>;

export const ProgressTypes = ['line', 'circle', 'dashboard'] as const;
export type ProgressType = (typeof ProgressTypes)[number];
const ProgressStatuses = ['normal', 'exception', 'active', 'success'] as const;
/**
 * Note: `default` is deprecated and will be removed in v7, please use `medium` instead.
 */
export type ProgressSize = Exclude<SizeType, 'large'> | 'default';
export type StringGradients = Record<string, string>;
type FromToGradients = { from: string; to: string };
export type ProgressGradient = { direction?: string } & (StringGradients | FromToGradients);
export interface PercentPositionType {
  align?: 'start' | 'center' | 'end';
  type?: 'inner' | 'outer';
}

export interface SuccessProps {
  percent?: number;
  strokeColor?: string;
}

export type ProgressAriaProps = Pick<React.AriaAttributes, 'aria-label' | 'aria-labelledby'>;

export type GapPlacement = 'top' | 'bottom' | 'start' | 'end';

export type GapPosition = 'top' | 'bottom' | 'left' | 'right';

export interface ProgressProps extends ProgressAriaProps {
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  classNames?: ProgressSemanticAllType['classNamesAndFn'];
  styles?: ProgressSemanticAllType['stylesAndFn'];

  type?: ProgressType;
  percent?: number;
  format?: (percent?: number, successPercent?: number) => React.ReactNode;
  status?: (typeof ProgressStatuses)[number];
  showInfo?: boolean;
  strokeWidth?: number;
  strokeLinecap?: 'butt' | 'square' | 'round';
  strokeColor?: string | string[] | ProgressGradient;
  /** @deprecated Please use `railColor` instead */
  trailColor?: string;
  railColor?: string;
  /** @deprecated Use `size` instead */
  width?: number;
  success?: SuccessProps;
  style?: React.CSSProperties;
  gapDegree?: number;
  gapPlacement?: GapPlacement;
  /** @deprecated please use `gapPlacement` instead */
  gapPosition?: GapPosition;
  size?: number | [number | string, number] | ProgressSize | { width?: number; height?: number };
  steps?: number | { count: number; gap: number };
  percentPosition?: PercentPositionType;
  children?: React.ReactNode;
  rounding?: (step: number) => number;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {
    throw new Error("STUB");
});

if (process.env.NODE_ENV !== 'production') {
  Progress.displayName = 'Progress';
}

export default Progress;
