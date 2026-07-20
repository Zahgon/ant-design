import type { CSSObject } from '@ant-design/cssinjs';

import type { GenerateStyle } from '../../theme/internal';
import type { TableToken } from './index';

// ========================= Placeholder ==========================
const genEmptyStyle: GenerateStyle<TableToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export default genEmptyStyle;
