import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';

import type { TimelineToken } from '.';
import type { GenerateStyle } from '../../theme/internal';
import { genCssVar } from '../../theme/util/genStyleUtils';

const genHorizontalStyle: GenerateStyle<TimelineToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export default genHorizontalStyle;
