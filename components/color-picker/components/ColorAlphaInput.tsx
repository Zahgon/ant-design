import type { FC } from 'react';
import React, { useState } from 'react';

import type { AggregationColor } from '../color';
import { generateColor, getColorAlpha } from '../util';
import ColorSteppers from './ColorSteppers';

interface ColorAlphaInputProps {
  prefixCls: string;
  value?: AggregationColor;
  onChange?: (value: AggregationColor) => void;
}

const ColorAlphaInput: FC<ColorAlphaInputProps> = ({ prefixCls, value, onChange }) => {
    throw new Error("STUB");
};

export default ColorAlphaInput;
