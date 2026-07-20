import { unit } from '@ant-design/cssinjs';
import type { CSSObject } from '@ant-design/cssinjs';

import type { FloatButtonToken } from '.';
import type { GenerateStyle } from '../../theme/interface';
import { genCssVar } from '../../theme/util/genStyleUtils';

const genFloatButtonStyle: GenerateStyle<FloatButtonToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export default genFloatButtonStyle;
