import { unit } from '@ant-design/cssinjs';
import type { CSSObject } from '@ant-design/cssinjs';

import { DEPRECATED_TOKENS, prepareComponentToken } from '.';
import type { LayoutToken } from '.';
import type { GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../theme/internal';

const genSiderStyle: GenerateStyle<LayoutToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export default genStyleHooks(['Layout', 'Sider'], genSiderStyle, prepareComponentToken, {
  deprecatedTokens: DEPRECATED_TOKENS,
});
