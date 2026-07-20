import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';

import type { UploadToken } from '.';
import { clearFix, textEllipsis } from '../../style';
import type { GenerateStyle } from '../../theme/internal';

const genListStyle: GenerateStyle<UploadToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export default genListStyle;
