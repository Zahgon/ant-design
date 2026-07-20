/* eslint-disable react/no-array-index-key */
import type { CSSProperties, MouseEventHandler } from 'react';
import React, { forwardRef, useMemo } from 'react';
import { ColorBlock } from '@rc-component/color-picker';
import { pickAttrs } from '@rc-component/util';
import { clsx } from 'clsx';

import { isFunction } from '../../_util/is';
import { useLocale } from '../../locale';
import type { AggregationColor } from '../color';
import type { ColorFormatType, ColorPickerProps, ColorPickerSemanticAllType } from '../interface';
import { getColorAlpha } from '../util';
import ColorClear from './ColorClear';

export interface ColorTriggerProps {
  prefixCls: string;
  disabled?: boolean;
  format?: ColorFormatType;
  color: AggregationColor;
  open?: boolean;
  showText?: ColorPickerProps['showText'];
  className?: string;
  style?: CSSProperties;
  classNames: NonNullable<ColorPickerSemanticAllType['classNames']>;
  styles: NonNullable<ColorPickerSemanticAllType['styles']>;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
  activeIndex: number;
}

const ColorTrigger = forwardRef<HTMLDivElement, ColorTriggerProps>((props, ref) => {
    throw new Error("STUB");
});

export default ColorTrigger;
