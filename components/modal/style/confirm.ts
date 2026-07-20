// Style as confirm component
import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';

import { prepareComponentToken, prepareToken } from '.';
import type { ModalToken } from '.';
import { clearFix } from '../../style';
import { genSubStyleComponent } from '../../theme/internal';
import type { GenerateStyle } from '../../theme/internal';

// ============================= Confirm ==============================
const genModalConfirmStyle: GenerateStyle<ModalToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export default genSubStyleComponent(
  ['Modal', 'confirm'],
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
  {
    // confirm is weak than modal since no conflict here
    order: -1000,
  },
);
