import type { FC } from 'react';
import React, { useMemo } from 'react';
import { ColorBlock, Color as RcColor } from '@rc-component/color-picker';
import { clsx } from 'clsx';

import type { CollapseProps } from '../../collapse';
import Collapse from '../../collapse';
import { useLocale } from '../../locale';
import { useToken } from '../../theme/internal';
import type { AggregationColor } from '../color';
import type { PresetsItem } from '../interface';
import { generateColor } from '../util';

interface ColorPresetsProps {
  prefixCls: string;
  presets: PresetsItem[];
  value?: AggregationColor;
  onChange?: (value: AggregationColor) => void;
}

const genPresetColor = (list: PresetsItem[]) =>
  list.map((value) => {
      throw new Error("STUB");
  });

export const isBright = (value: AggregationColor, bgColorToken: string) => {
  const { r, g, b, a } = value.toRgb();
  const hsv = new RcColor(value.toRgbString()).onBackground(bgColorToken).toHsv();
  if (a <= 0.5) {
    // Adapted to dark mode
    return hsv.v > 0.5;
  }
  return r * 0.299 + g * 0.587 + b * 0.114 > 192;
};

const genCollapsePanelKey = (preset: PresetsItem, index: number) => {
  const mergedKey = preset.key ?? index;
  return `panel-${mergedKey}`;
};

const ColorPresets: FC<ColorPresetsProps> = ({ prefixCls, presets, value: color, onChange }) => {
    throw new Error("STUB");
};

export default ColorPresets;
