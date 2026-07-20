import { unit } from '@ant-design/cssinjs';
import type { CSSObject } from '@ant-design/cssinjs';

import type { GenerateStyle } from '../../theme/internal';
import type { TableToken } from './index';

const genStickyStyle: GenerateStyle<TableToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export default genStickyStyle;
