import { unit } from '@ant-design/cssinjs';
import type { CSSInterpolation } from '@ant-design/cssinjs';

import type { MenuToken } from '.';
import { genFocusOutline } from '../../style';

const accessibilityFocus = (token: MenuToken) => genFocusOutline(token);

const getThemeStyle = (token: MenuToken, themeSuffix: string): CSSInterpolation => {
    throw new Error("STUB");
};

export default getThemeStyle;
