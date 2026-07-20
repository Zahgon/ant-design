import type { CSSObject } from '@ant-design/cssinjs';

import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks } from '../../theme/internal';

export interface ComponentToken {
  /**
   * @desc 弹出层的 z-index
   * @descEN z-index of popup
   */
  zIndexPopup: number;
}

interface AffixToken extends FullToken<'Affix'> {
  //
}

// ============================== Shared ==============================
const genSharedAffixStyle: GenerateStyle<AffixToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export const prepareComponentToken: GetDefaultToken<'Affix'> = (token) => { throw new Error("STUB"); };

// ============================== Export ==============================
export default genStyleHooks('Affix', genSharedAffixStyle, prepareComponentToken);
