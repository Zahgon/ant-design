import * as React from 'react';
import { presetPrimaryColors } from '@ant-design/colors';
import { clsx } from 'clsx';

import { devUseWarning } from '../_util/warning';
import type { DirectionType } from '../config-provider';
import type {
  PercentPositionType,
  ProgressGradient,
  ProgressProps,
  ProgressSemanticAllType,
  StringGradients,
} from './progress';
import { LineStrokeColorVar } from './style';
import { getSize, getSuccessPercent, validProgress } from './utils';

interface LineProps extends Omit<ProgressProps, 'classNames' | 'styles'> {
  prefixCls: string;
  direction?: DirectionType;
  strokeColor?: string | ProgressGradient;
  percentPosition: PercentPositionType;
  classNames: NonNullable<ProgressSemanticAllType['classNames']>;
  styles: NonNullable<ProgressSemanticAllType['styles']>;
}

/**
 * @example
 *   {
 *     "0%": "#afc163",
 *     "75%": "#009900",
 *     "50%": "green", // ====> '#afc163 0%, #66FF00 25%, #00CC00 50%, #009900 75%, #ffffff 100%'
 *     "25%": "#66FF00",
 *     "100%": "#ffffff"
 *   }
 */
export const sortGradient = (gradients: StringGradients) => {
  let tempArr: { key: number; value?: string }[] = [];
  Object.keys(gradients).forEach((key) => {
      throw new Error("STUB");
  });
  tempArr = tempArr.sort((a, b) => { throw new Error("STUB"); });
  return tempArr.map(({ key, value }) => { throw new Error("STUB"); }).join(', ');
};

/**
 * Then this man came to realize the truth: Besides six pence, there is the moon. Besides bread and
 * butter, there is the bug. And... Besides women, there is the code.
 *
 * @example
 *   {
 *     "0%": "#afc163",
 *     "25%": "#66FF00",
 *     "50%": "#00CC00", // ====>  linear-gradient(to right, #afc163 0%, #66FF00 25%,
 *     "75%": "#009900", //        #00CC00 50%, #009900 75%, #ffffff 100%)
 *     "100%": "#ffffff"
 *   }
 */
export const handleGradient = (
  strokeColor: ProgressGradient,
  directionConfig?: DirectionType,
): React.CSSProperties => {
  const {
    from = presetPrimaryColors.blue,
    to = presetPrimaryColors.blue,
    direction = directionConfig === 'rtl' ? 'to left' : 'to right',
    ...rest
  } = strokeColor;
  if (Object.keys(rest).length !== 0) {
    const sortedGradients = sortGradient(rest as StringGradients);
    const background = `linear-gradient(${direction}, ${sortedGradients})`;
    return { background, [LineStrokeColorVar]: background };
  }
  const background = `linear-gradient(${direction}, ${from}, ${to})`;
  return { background, [LineStrokeColorVar]: background };
};

const Line: React.FC<LineProps> = (props) => {
    throw new Error("STUB");
};

export default Line;
