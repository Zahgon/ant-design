// Style as status component
import type { CSSInterpolation } from '@ant-design/cssinjs';

import { prepareComponentToken, prepareToken } from '.';
import type { TagToken } from '.';
import capitalize from '../../_util/capitalize';
import { genSubStyleComponent } from '../../theme/internal';

// ============================== Status ==============================
type CssVariableType = 'Success' | 'Info' | 'Error' | 'Warning';

const genTagStatusStyle = (
  token: TagToken,
  status: 'success' | 'processing' | 'error' | 'warning',
  cssVariableType: CssVariableType,
): CSSInterpolation => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export default genSubStyleComponent<'Tag'>(
  ['Tag', 'status'],
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
);
