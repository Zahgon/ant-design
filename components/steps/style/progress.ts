import type { CSSObject } from '@ant-design/cssinjs';

import type { StepsToken } from '.';
import type { GenerateStyle } from '../../theme/internal';
import { genCssVar } from '../../theme/util/genStyleUtils';

const genStepsProgressStyle: GenerateStyle<StepsToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export default genStepsProgressStyle;
