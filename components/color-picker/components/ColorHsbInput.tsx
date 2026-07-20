import type { FC } from 'react';
import React, { useState } from 'react';
import type { HSB } from '@rc-component/color-picker';

import type { AggregationColor } from '../color';
import { generateColor, getRoundNumber } from '../util';
import ColorSteppers from './ColorSteppers';

interface ColorHsbInputProps {
  prefixCls: string;
  value?: AggregationColor;
  onChange?: (value: AggregationColor) => void;
}

const ColorHsbInput: FC<ColorHsbInputProps> = ({ prefixCls, value, onChange }) => {
    throw new Error("STUB");
};

export default ColorHsbInput;
