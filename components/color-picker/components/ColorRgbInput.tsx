import type { FC } from 'react';
import React, { useState } from 'react';
import type { RGB } from '@rc-component/color-picker';

import type { AggregationColor } from '../color';
import { generateColor } from '../util';
import ColorSteppers from './ColorSteppers';

interface ColorRgbInputProps {
  prefixCls: string;
  value?: AggregationColor;
  onChange?: (value: AggregationColor) => void;
}

const ColorRgbInput: FC<ColorRgbInputProps> = ({ prefixCls, value, onChange }) => {
    throw new Error("STUB");
};

export default ColorRgbInput;
