import * as React from 'react';
import type { UnstableContext } from '@rc-component/slider';

import type { GetProp } from '../../../_util/type';
import { AggregationColor } from '../../color';
import type { GradientColor } from '../../color';
import type { PanelPickerContextProps } from '../../context';
import { getGradientPercentColor } from '../../util';
import { GradientColorSlider } from '../ColorSlider';

function sortColors(colors: { percent: number; color: string }[]) {
  return [...colors].sort((a, b) => { throw new Error("STUB"); });
}

export interface GradientColorBarProps extends PanelPickerContextProps {
  colors: GradientColor;
}

/**
 * GradientColorBar will auto show when the mode is `gradient`.
 */
const GradientColorBar = (props: GradientColorBarProps) => {
    throw new Error("STUB");
};

export default React.memo(GradientColorBar);
