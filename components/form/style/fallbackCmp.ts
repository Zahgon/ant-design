/**
 * Fallback of IE.
 * Safe to remove.
 */

// Style as inline component
import type { CSSObject } from '@ant-design/cssinjs';

import { prepareToken } from '.';
import type { FormToken } from '.';
import { genSubStyleComponent } from '../../theme/internal';
import type { GenerateStyle } from '../../theme/internal';

// ============================= Fallback =============================
const genFallbackStyle: GenerateStyle<FormToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export default genSubStyleComponent(['Form', 'item-item'], (token, { rootPrefixCls }) => {
    throw new Error("STUB");
});
