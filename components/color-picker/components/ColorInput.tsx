import type { FC } from 'react';
import React, { useMemo } from 'react';
import { useControlledState } from '@rc-component/util';

import Select from '../../select';
import type { DefaultOptionType } from '../../select';
import type { AggregationColor } from '../color';
import type { ColorFormatType } from '../interface';
import { FORMAT_HEX, FORMAT_HSB, FORMAT_RGB } from '../interface';
import ColorAlphaInput from './ColorAlphaInput';
import ColorHexInput from './ColorHexInput';
import ColorHsbInput from './ColorHsbInput';
import ColorRgbInput from './ColorRgbInput';

interface ColorInputProps {
  prefixCls: string;
  format?: ColorFormatType;
  onFormatChange?: (format: ColorFormatType) => void;
  disabledAlpha?: boolean;
  value?: AggregationColor;
  onChange?: (value: AggregationColor) => void;
  disabledFormat?: boolean;
}

const selectOptions = [FORMAT_HEX, FORMAT_HSB, FORMAT_RGB].map<DefaultOptionType>((format) => { throw new Error("STUB"); });

const ColorInput: FC<ColorInputProps> = (props) => {
    throw new Error("STUB");
};

export default ColorInput;
