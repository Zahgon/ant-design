import type { CSSObject } from '@ant-design/cssinjs';

import { PresetColors } from '../../theme/interface';
import type { GenerateStyle } from '../../theme/interface';
import { genCssVar } from '../../theme/util/genStyleUtils';
import type { ButtonToken } from './token';

const genVariantStyle: GenerateStyle<ButtonToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export default genVariantStyle;
