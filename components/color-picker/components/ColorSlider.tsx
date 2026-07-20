import * as React from 'react';
import type { BaseSliderProps } from '@rc-component/color-picker';
import { UnstableContext } from '@rc-component/slider';
import { useEvent } from '@rc-component/util';
import { clsx } from 'clsx';

import type { GetProp } from '../../_util/type';
import Slider from '../../slider';
import SliderInternalContext from '../../slider/Context';
import type { SliderInternalContextProps } from '../../slider/Context';
import { getGradientPercentColor } from '../util';

export interface GradientColorSliderProps
  extends Omit<BaseSliderProps, 'value' | 'onChange' | 'onChangeComplete' | 'type'> {
  value: number[];
  onChange?: (value: number[]) => void;
  onChangeComplete: (value: number[]) => void;
  range?: boolean;
  className?: string;
  activeIndex?: number;
  onActive?: (index: number) => void;
  type: BaseSliderProps['type'] | 'gradient';

  // Drag events
  onDragStart?: GetProp<typeof UnstableContext, 'onDragStart'>;
  onDragChange?: GetProp<typeof UnstableContext, 'onDragChange'>;

  // Key event
  onKeyDelete?: (index: number) => void;
}

export const GradientColorSlider = (props: GradientColorSliderProps) => {
    throw new Error("STUB");
};

const SingleColorSlider = (props: BaseSliderProps) => {
    throw new Error("STUB");
};

export default SingleColorSlider;
