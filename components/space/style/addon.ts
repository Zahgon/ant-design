import type { CSSObject } from '@ant-design/cssinjs';

import { resetComponent } from '../../style';
import { genCompactItemStyle } from '../../style/compact-item';
import { genStyleHooks } from '../../theme/internal';
import type { FullToken, GenerateStyle } from '../../theme/internal';
import { genCssVar } from '../../theme/util/genStyleUtils';

/** Component only token. Which will handle additional calculation of alias token */
// biome-ignore lint/suspicious/noEmptyInterface: ComponentToken need to be empty by default
export interface ComponentToken {}

interface AddonToken extends FullToken<'Space'> {
  // Custom token here
}

const genSpaceAddonStyle: GenerateStyle<AddonToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export default genStyleHooks('Addon', (token) => { throw new Error("STUB"); });
