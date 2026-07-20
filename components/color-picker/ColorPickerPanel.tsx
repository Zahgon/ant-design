import type { FC } from 'react';
import React from 'react';

import { isFunction } from '../_util/is';
import Divider from '../divider';
import PanelPicker from './components/PanelPicker';
import PanelPresets from './components/PanelPresets';
import { PanelPickerContext, PanelPresetsContext } from './context';
import type { PanelPickerContextProps, PanelPresetsContextProps } from './context';
import type { ColorPickerProps } from './interface';

export interface ColorPickerPanelProps
  extends PanelPickerContextProps,
    Omit<PanelPresetsContextProps, 'onChange'> {
  onClear?: () => void;
  panelRender?: ColorPickerProps['panelRender'];
}

const ColorPickerPanel: FC<ColorPickerPanelProps> = (props) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  ColorPickerPanel.displayName = 'ColorPickerPanel';
}

export default ColorPickerPanel;
