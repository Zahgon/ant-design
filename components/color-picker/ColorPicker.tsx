import React, { useContext, useMemo } from 'react';
import { useControlledState } from '@rc-component/util';
import { clsx } from 'clsx';

import ContextIsolator from '../_util/ContextIsolator';
import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import genPurePanel from '../_util/PurePanel';
import { getStatusClassNames } from '../_util/statusUtils';
import type { GetProp } from '../_util/type';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import DisabledContext from '../config-provider/DisabledContext';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import useSize from '../config-provider/hooks/useSize';
import { FormItemInputContext } from '../form/context';
import type { PopoverProps } from '../popover';
import Popover from '../popover';
import { useCompactItemContext } from '../space/Compact';
import useMergedArrow from '../tooltip/hook/useMergedArrow';
import { AggregationColor } from './color';
import type { ColorPickerPanelProps } from './ColorPickerPanel';
import ColorPickerPanel from './ColorPickerPanel';
import ColorTrigger from './components/ColorTrigger';
import useModeColor from './hooks/useModeColor';
import type { ColorFormatType, ColorPickerProps, ModeType, TriggerPlacement } from './interface';
import useStyle from './style';
import { genAlphaColor, generateColor, getColorAlpha } from './util';

type CompoundedComponent = React.FC<ColorPickerProps> & {
  _InternalPanelDoNotUseOrYouWillBeFired: typeof PurePanel;
};

const ColorPicker: CompoundedComponent = (props) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  ColorPicker.displayName = 'ColorPicker';
}

const PurePanel = genPurePanel(
  ColorPicker,
  undefined,
  (props: ColorPickerProps) => { throw new Error("STUB"); },
  'color-picker',
  /* istanbul ignore next */
  (prefixCls) => { throw new Error("STUB"); },
);

ColorPicker._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;

export default ColorPicker;
