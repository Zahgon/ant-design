import type { CSSObject } from '@ant-design/cssinjs';

import type { GenerateStyle } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';
import type { ComponentToken, InputToken } from './token';
import { initComponentToken, initInputToken } from './token';

export type { ComponentToken };
export { initComponentToken, initInputToken };

const genTextAreaStyle: GenerateStyle<InputToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export default genStyleHooks(
  ['Input', 'TextArea'],
  (token) => {
      throw new Error("STUB");
  },
  initComponentToken,
  {
    resetFont: false,
  },
);
