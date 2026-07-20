import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';

import type { GenerateStyle } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';
import { genCssVar } from '../../theme/util/genStyleUtils';
import type { InputToken } from './token';
import { initComponentToken, initInputToken } from './token';

const genSearchStyle: GenerateStyle<InputToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export default genStyleHooks(
  ['Input', 'Search'],
  (token) => {
      throw new Error("STUB");
  },
  initComponentToken,
);
