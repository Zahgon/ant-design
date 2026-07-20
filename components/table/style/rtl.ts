import type { CSSObject } from '@ant-design/cssinjs';

import type { GenerateStyle } from '../../theme/internal';
import { getShadowStyle } from './fixed';
import type { TableToken } from './index';

const genStyle: GenerateStyle<TableToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export default genStyle;
