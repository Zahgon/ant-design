import type { CSSObject } from '@ant-design/cssinjs';

import type { GenerateStyle } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';
import type { InputToken } from './token';
import { initComponentToken, initInputToken } from './token';

// =============================== OTP ================================
const genOTPStyle: GenerateStyle<InputToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export default genStyleHooks(
  ['Input', 'OTP'],
  (token) => {
      throw new Error("STUB");
  },
  initComponentToken,
);
