import type { FC } from 'react';
import React from 'react';
import { clsx } from 'clsx';

import type { AggregationColor } from '../color';
import { generateColor } from '../util';

interface ColorClearProps {
  prefixCls: string;
  value?: AggregationColor;
  onChange?: (value: AggregationColor) => void;
  className?: string;
  style?: React.CSSProperties;
}

const ColorClear: FC<ColorClearProps> = ({ prefixCls, value, onChange, className, style }) => {
    throw new Error("STUB");
};

export default ColorClear;
