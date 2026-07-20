import React from 'react';
import type { SliderProps as RcSliderProps, SliderRef } from '@rc-component/slider';
import RcSlider from '@rc-component/slider';
import { raf } from '@rc-component/util';
import { clsx } from 'clsx';

import { useOrientation } from '../_util/hooks';
import type { Orientation } from '../_util/hooks';
import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isNumber } from '../_util/is';
import type { GetProp } from '../_util/type';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import DisabledContext from '../config-provider/DisabledContext';
import type { AbstractTooltipProps, TooltipPlacement } from '../tooltip';
import SliderInternalContext from './Context';
import SliderTooltip from './SliderTooltip';
import useStyle from './style';
import useRafLock from './useRafLock';

export type SliderMarks = RcSliderProps['marks'];

export type SliderSemanticType = {
  classNames?: {
    root?: string;
    tracks?: string;
    track?: string;
    rail?: string;
    handle?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    tracks?: React.CSSProperties;
    track?: React.CSSProperties;
    rail?: React.CSSProperties;
    handle?: React.CSSProperties;
  };
};

export type SliderSemanticAllType = GenerateSemantic<SliderSemanticType, SliderBaseProps>;

export interface SliderProps extends Omit<RcSliderProps, 'styles' | 'classNames'> {
  classNames?: SliderSemanticAllType['classNamesAndFn'];
  styles?: SliderSemanticAllType['stylesAndFn'];
}

interface HandleGeneratorInfo {
  value?: number;
  dragging?: boolean;
  index: number;
}

export type HandleGeneratorFn = (config: {
  tooltipPrefixCls?: string;
  prefixCls?: string;
  info: HandleGeneratorInfo;
}) => React.ReactElement;

export type Formatter = ((value?: number) => React.ReactNode) | null;

export interface SliderTooltipProps extends AbstractTooltipProps {
  prefixCls?: string;
  open?: boolean;
  placement?: TooltipPlacement;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  formatter?: Formatter;
  autoAdjustOverflow?: boolean;
}

export interface SliderBaseProps {
  prefixCls?: string;
  reverse?: boolean;
  min?: number;
  max?: number;
  step?: null | number;
  marks?: SliderMarks;
  dots?: boolean;
  included?: boolean;
  disabled?: boolean | boolean[];
  keyboard?: boolean;
  orientation?: Orientation;
  vertical?: boolean;
  className?: string;
  rootClassName?: string;
  id?: string;
  style?: React.CSSProperties;
  tooltip?: SliderTooltipProps;
  autoFocus?: boolean;

  classNames?: SliderSemanticAllType['classNamesAndFn'];
  styles?: SliderSemanticAllType['stylesAndFn'];
  onFocus?: React.FocusEventHandler<HTMLDivElement>;
  onBlur?: React.FocusEventHandler<HTMLDivElement>;

  // Accessibility
  tabIndex?: SliderProps['tabIndex'];
  ariaLabelForHandle?: SliderProps['ariaLabelForHandle'];
  ariaLabelledByForHandle?: SliderProps['ariaLabelledByForHandle'];
  ariaRequired?: SliderProps['ariaRequired'];
  ariaValueTextFormatterForHandle?: SliderProps['ariaValueTextFormatterForHandle'];
}

export interface SliderSingleProps extends SliderBaseProps {
  range?: false;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  /** @deprecated Please use `onChangeComplete` instead */
  onAfterChange?: (value: number) => void;
  onChangeComplete?: (value: number) => void;
  /** @deprecated Please use `styles.handle` instead */
  handleStyle?: React.CSSProperties;
  /** @deprecated Please use `styles.track` instead */
  trackStyle?: React.CSSProperties;
  /** @deprecated Please use `styles.rail` instead */
  railStyle?: React.CSSProperties;
}

export interface SliderRangeProps extends SliderBaseProps {
  range: true | SliderRange;
  value?: number[];
  defaultValue?: number[];
  onChange?: (value: number[]) => void;
  /** @deprecated Please use `onChangeComplete` instead */
  onAfterChange?: (value: number[]) => void;
  onChangeComplete?: (value: number[]) => void;
  /** @deprecated Please use `styles.handle` instead */
  handleStyle?: React.CSSProperties[];
  /** @deprecated Please use `styles.track` instead */
  trackStyle?: React.CSSProperties[];
  /** @deprecated Please use `styles.rail` instead */
  railStyle?: React.CSSProperties;
}

type SliderRange = Exclude<GetProp<RcSliderProps, 'range'>, boolean>;

export type Opens = { [index: number]: boolean };

function getTipFormatter(tipFormatter?: Formatter) {
  if (tipFormatter || tipFormatter === null) {
    return tipFormatter;
  }
  return (val?: number) => { throw new Error("STUB"); };
}

const Slider = React.forwardRef<SliderRef, SliderSingleProps | SliderRangeProps>((props, ref) => {
    throw new Error("STUB");
});

if (process.env.NODE_ENV !== 'production') {
  Slider.displayName = 'Slider';
}

export default Slider;
