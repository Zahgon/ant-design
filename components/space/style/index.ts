import type { CSSObject } from '@ant-design/cssinjs';

import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';

/** Component only token. Which will handle additional calculation of alias token */
// biome-ignore lint/suspicious/noEmptyInterface: ComponentToken need to be empty by default
export interface ComponentToken {}

interface SpaceToken extends FullToken<'Space'> {
  spaceGapSmallSize: number;
  spaceGapMiddleSize: number;
  spaceGapLargeSize: number;
}

const genSpaceStyle: GenerateStyle<SpaceToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genSpaceGapStyle: GenerateStyle<SpaceToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export const prepareComponentToken: GetDefaultToken<'Space'> = () => { throw new Error("STUB"); };

export default genStyleHooks(
  'Space',
  (token) => {
      throw new Error("STUB");
  },
  () => { throw new Error("STUB"); },
  {
    // Space component don't apply extra font style
    // https://github.com/ant-design/ant-design/issues/40315
    resetStyle: false,
  },
);
