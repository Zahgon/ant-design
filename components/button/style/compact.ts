// Style as inline component
import type { CSSObject } from '@ant-design/cssinjs';

import { genCompactItemStyle } from '../../style/compact-item';
import { genCompactItemVerticalStyle } from '../../style/compact-item-vertical';
import type { GenerateStyle } from '../../theme/internal';
import { genSubStyleComponent } from '../../theme/internal';
import { genCssVar } from '../../theme/util/genStyleUtils';
import type { ButtonToken } from './token';
import { prepareComponentToken, prepareToken } from './token';

const genButtonCompactStyle: GenerateStyle<ButtonToken> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export default genSubStyleComponent(
  ['Button', 'compact'],
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
);
