import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';

import type { MenuToken } from '.';
import type { GenerateStyle } from '../../theme/internal';

const getHorizontalStyle: GenerateStyle<MenuToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export default getHorizontalStyle;
