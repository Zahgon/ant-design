import { unit } from '@ant-design/cssinjs';
import type { CSSObject } from '@ant-design/cssinjs';

import type { FloatButtonToken } from '.';
import { resetComponent } from '../../style';
import type { GenerateStyle } from '../../theme/interface';
import { genCssVar } from '../../theme/util/genStyleUtils';

const genGroupStyle: GenerateStyle<FloatButtonToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export default genGroupStyle;
