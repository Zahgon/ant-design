import { unit } from '@ant-design/cssinjs';
import type { CSSObject } from '@ant-design/cssinjs';

import {
  genBorderlessStyle,
  genFilledStyle,
  genOutlinedStyle,
  genUnderlinedStyle,
} from '../../input/style/variants';
import type { GenerateStyle } from '../../theme/interface';
import type { PickerToken } from './token';

const genVariantsStyle: GenerateStyle<PickerToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export default genVariantsStyle;
