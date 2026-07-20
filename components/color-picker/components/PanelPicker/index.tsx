import type { FC } from 'react';
import React, { useContext } from 'react';
import RcColorPicker from '@rc-component/color-picker';
import type { Color } from '@rc-component/color-picker';
import { useLayoutEffect } from '@rc-component/util';

import { useForceUpdate } from '../../../_util/hooks';
import Segmented from '../../../segmented';
import { AggregationColor } from '../../color';
import { PanelPickerContext } from '../../context';
import { genAlphaColor, generateColor } from '../../util';
import ColorClear from '../ColorClear';
import ColorInput from '../ColorInput';
import ColorSlider from '../ColorSlider';
import GradientColorBar from './GradientColorBar';

const components = {
  slider: ColorSlider,
};

type Info = {
  type?: 'hue' | 'alpha';
  value?: number;
};

const PanelPicker: FC = () => {
    throw new Error("STUB");
};
export default PanelPicker;
