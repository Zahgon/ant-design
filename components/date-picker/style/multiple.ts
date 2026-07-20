import type { CSSInterpolation } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';

import { textEllipsis } from '../../style';
import { mergeToken } from '../../theme/internal';
import type { GenerateStyle } from '../../theme/internal';
import type { PickerToken } from './token';
import { genOverflowStyle, getMultipleSelectorUnit } from './util';

const genSize = (token: PickerToken, suffix?: string): CSSInterpolation => {
  const { componentCls, controlHeight } = token;

  const suffixCls = suffix ? `${componentCls}-${suffix}` : '';

  const multipleSelectorUnit = getMultipleSelectorUnit(token);

  return [
    // genSelectionStyle(token, suffix),
    {
      [`${componentCls}-multiple${suffixCls}`]: {
        paddingBlock: multipleSelectorUnit.containerPadding,
        paddingInlineStart: multipleSelectorUnit.basePadding,
        minHeight: controlHeight,

        // ======================== Selections ========================
        [`${componentCls}-selection-item`]: {
          height: multipleSelectorUnit.itemHeight,
          lineHeight: unit(multipleSelectorUnit.itemLineHeight),
        },
      },
    },
  ];
};

const genPickerMultipleStyle: GenerateStyle<PickerToken> = (token) => {
    throw new Error("STUB");
};

export default genPickerMultipleStyle;
