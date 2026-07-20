import * as React from 'react';
import CheckOutlined from '@ant-design/icons/CheckOutlined';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import type { StepsProps as RcStepsProps } from '@rc-component/steps';
import RcSteps from '@rc-component/steps';
import { clsx } from 'clsx';

import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isFunction } from '../_util/is';
import type { GetProp } from '../_util/type';
import { devUseWarning } from '../_util/warning';
import Wave from '../_util/wave';
import { TARGET_CLS } from '../_util/wave/interface';
import { useComponentConfig } from '../config-provider/context';
import useSize from '../config-provider/hooks/useSize';
import type { SizeType } from '../config-provider/SizeContext';
import useBreakpoint from '../grid/hooks/useBreakpoint';
import { genCssVar } from '../theme/util/genStyleUtils';
import Tooltip from '../tooltip';
import { InternalContext } from './context';
import PanelArrow from './PanelArrow';
import ProgressIcon from './ProgressIcon';
import useStyle from './style';
import useDisplaySteps from './useDisplaySteps';

type RcIconRenderTypeInfo = Parameters<NonNullable<RcStepsProps['iconRender']>>[1];

export type IconRenderType = (
  oriNode: React.ReactNode,
  info: Pick<RcIconRenderTypeInfo, 'index' | 'active' | 'item' | 'components'>,
) => React.ReactNode;

export type StepsSemanticType = {
  classNames?: {
    root?: string;
    item?: string;
    itemWrapper?: string;
    itemIcon?: string;
    itemSection?: string;
    itemHeader?: string;
    itemTitle?: string;
    itemSubtitle?: string;
    itemContent?: string;
    itemRail?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    item?: React.CSSProperties;
    itemWrapper?: React.CSSProperties;
    itemIcon?: React.CSSProperties;
    itemSection?: React.CSSProperties;
    itemHeader?: React.CSSProperties;
    itemTitle?: React.CSSProperties;
    itemSubtitle?: React.CSSProperties;
    itemContent?: React.CSSProperties;
    itemRail?: React.CSSProperties;
  };
};

export type StepsSemanticAllType = GenerateSemantic<StepsSemanticType, StepsProps>;

interface StepItem {
  key?: React.Key;
  className?: string;
  style?: React.CSSProperties;
  classNames?: GetProp<RcStepsProps, 'items'>[number]['classNames'];
  styles?: GetProp<RcStepsProps, 'items'>[number]['styles'];

  /** @deprecated Please use `content` instead */
  description?: React.ReactNode;
  content?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  status?: 'wait' | 'process' | 'finish' | 'error';
  disabled?: boolean;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
}

export type ProgressDotRender = (
  iconDot: React.ReactNode,
  info: {
    index: number;
    status: NonNullable<RcStepsProps['status']>;
    title: React.ReactNode;
    /** @deprecated Please use `content` instead. */
    description: React.ReactNode;
    content: React.ReactNode;
  },
) => React.ReactNode;

export interface BaseStepsProps {
  // Style
  className?: string;
  rootClassName?: string;
  classNames?: StepsSemanticAllType['classNamesAndFn'];
  styles?: StepsSemanticAllType['stylesAndFn'];
  variant?: 'filled' | 'outlined';
  /**
   * Note: `default` is deprecated and will be removed in v7, please use `medium` instead.
   */
  size?: Exclude<SizeType, 'large'> | 'default';
  // Layout
  type?: 'default' | 'navigation' | 'inline' | 'panel' | 'dot';
  /** @deprecated Please use `orientation` instead. */
  direction?: 'horizontal' | 'vertical';
  orientation?: 'horizontal' | 'vertical';
  /** @deprecated Please use `titlePlacement` instead. */
  labelPlacement?: 'horizontal' | 'vertical';
  titlePlacement?: 'horizontal' | 'vertical';
  /** @deprecated Please use `type` and `iconRender` instead. */
  progressDot?: boolean | ProgressDotRender;
  responsive?: boolean;
  ellipsis?: boolean;
  /**
   * Maximum number of step items to display (`>= 3`).
   * Hidden step ranges are collapsed into disabled ellipsis steps.
   */
  maxCount?: number;
  /**
   * Set offset cell, only work when `type` is `inline`.
   */
  offset?: number;

  // Data
  current?: number;
  initial?: number;
  items?: StepItem[];
  percent?: number;
  status?: 'wait' | 'process' | 'finish' | 'error';

  // Render
  iconRender?: IconRenderType;

  // Events
  onChange?: (current: number) => void;
}

export interface StepsProps extends BaseStepsProps {
  prefixCls?: string;
  style?: React.CSSProperties;
}

const waveEffectClassNames: StepsProps['classNames'] = {
  itemIcon: TARGET_CLS,
};

const Steps = (props: StepsProps) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  Steps.displayName = 'Steps';
}

export default Steps;
