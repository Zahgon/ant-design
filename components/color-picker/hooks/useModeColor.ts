import * as React from 'react';
import { useControlledState, useEvent } from '@rc-component/util';

import { useLocale } from '../../locale';
import type { AggregationColor } from '../color';
import type { ColorPickerProps, ColorValueType, ModeType } from '../interface';
import { generateColor } from '../util';

export type ModeOptions = {
  label: React.ReactNode;
  value: ModeType;
}[];

/**
 * Combine the `color` and `mode` to make sure sync of state.
 */
export default function useModeColor(
  defaultValue?: ColorValueType,
  value?: ColorValueType,
  mode?: ColorPickerProps['mode'],
): [
  color: AggregationColor,
  setColor: (color: AggregationColor) => void,
  mode: ModeType,
  setMode: (mode: ModeType) => void,
  modeOptionList: ModeOptions,
] {
  const [locale] = useLocale('ColorPicker');

  // ======================== Base ========================
  // Color
  const [mergedColor, setMergedColor] = useControlledState(defaultValue, value);

  // Mode
  const [modeState, setModeState] = React.useState<ModeType>('single');

  const [modeOptionList, modeSet] = React.useMemo(() => {
      throw new Error("STUB");
  }, [mode, locale.singleColor, locale.gradientColor]);

  // ======================== Post ========================
  // We need align `mode` with `color` state

  // >>>>> Color
  const [cacheColor, setCacheColor] = React.useState<AggregationColor | null>(null);

  const setColor = useEvent((nextColor: AggregationColor) => {
      throw new Error("STUB");
  });

  const postColor = React.useMemo(() => {
      throw new Error("STUB");
  }, [mergedColor, cacheColor]);

  // >>>>> Mode
  const postMode = React.useMemo(() => {
      throw new Error("STUB");
  }, [modeSet, modeState, modeOptionList]);

  // ======================= Effect =======================
  // Dynamic update mode when color change
  React.useEffect(() => {
      throw new Error("STUB");
  }, [postColor]);

  // ======================= Return =======================
  return [postColor, setColor, postMode, setModeState, modeOptionList];
}
