import type { CSSObject } from '@ant-design/cssinjs';

import type { StepsToken } from '.';
import type { GenerateStyle } from '../../theme/internal';
import { genCssVar } from '../../theme/util/genStyleUtils';
import { getItemWithWidthStyle } from './util';

const genSmallStyle: GenerateStyle<StepsToken, CSSObject> = (token) => {
    throw new Error("STUB");
};
export default genSmallStyle;
