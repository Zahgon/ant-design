import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';

import { prepareComponentToken, prepareToken } from '.';
import type { BadgeToken } from '.';
import { resetComponent } from '../../style';
import type { GenerateStyle } from '../../theme/internal';
import { genPresetColor, genStyleHooks } from '../../theme/internal';

// ============================== Ribbon ==============================
const genRibbonStyle: GenerateStyle<BadgeToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export default genStyleHooks(
  ['Badge', 'Ribbon'],
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
);
