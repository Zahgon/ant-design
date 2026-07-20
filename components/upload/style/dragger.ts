import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';

import type { UploadToken } from '.';
import type { GenerateStyle } from '../../theme/internal';

const genDraggerStyle: GenerateStyle<UploadToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export default genDraggerStyle;
