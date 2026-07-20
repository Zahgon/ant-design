import type { CSSObject } from '@ant-design/cssinjs';

import { textEllipsis } from '../../style';
import type { GenerateStyle } from '../../theme/internal';
import type { TableToken } from './index';

const genEllipsisStyle: GenerateStyle<TableToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export default genEllipsisStyle;
