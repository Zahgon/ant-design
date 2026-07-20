import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';

import { genBasicInputStyle, genPlaceholderStyle, initInputToken } from '../../input/style';
import {
  genBorderlessStyle,
  genFilledStyle,
  genOutlinedStyle,
  genUnderlinedStyle,
} from '../../input/style/variants';
import { resetComponent, resetIcon } from '../../style';
import { genCompactItemStyle } from '../../style/compact-item';
import type { GenerateStyle } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';
import { genCssVar } from '../../theme/util/genStyleUtils';
import type { ComponentToken, InputNumberToken } from './token';
import { prepareComponentToken } from './token';

export type { ComponentToken };

const genInputNumberStyles: GenerateStyle<InputNumberToken> = (token) => {
    throw new Error("STUB");
};

const genCompatibleStyles: GenerateStyle<InputNumberToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export default genStyleHooks(
  'InputNumber',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
  {
    unitless: {
      handleOpacity: true,
    },
    resetFont: false,
  },
);
