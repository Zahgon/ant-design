import type { FC } from 'react';
import React, { useEffect, useState } from 'react';

import Input from '../../input/Input';
import type { AggregationColor } from '../color';
import { toHexFormat } from '../color';
import { generateColor } from '../util';

interface ColorHexInputProps {
  prefixCls: string;
  value?: AggregationColor;
  onChange?: (value: AggregationColor) => void;
}

const hexReg = /(^#[\da-f]{6}$)|(^#[\da-f]{8}$)/i;
const isHexString = (hex?: string) => hexReg.test(`#${hex}`);

const ColorHexInput: FC<ColorHexInputProps> = ({ prefixCls, value, onChange }) => {
    throw new Error("STUB");
};

export default ColorHexInput;
