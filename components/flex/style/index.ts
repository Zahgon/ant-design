import type { CSSInterpolation, CSSObject } from '@ant-design/cssinjs';

import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';
import { alignItemsValues, flexWrapValues, justifyContentValues } from '../utils';

/** Component only token. Which will handle additional calculation of alias token */
// biome-ignore lint/suspicious/noEmptyInterface: ComponentToken need to be empty by default
export interface ComponentToken {}

export interface FlexToken extends FullToken<'Flex'> {
  /**
   * @nameZH 小间隙
   * @nameEN Small Gap
   * @desc 控制元素的小间隙。
   * @descEN Control the small gap of the element.
   */
  flexGapSM: number;
  /**
   * @nameZH 间隙
   * @nameEN Gap
   * @desc 控制元素的间隙。
   * @descEN Control the gap of the element.
   */
  flexGap: number;
  /**
   * @nameZH 大间隙
   * @nameEN Large Gap
   * @desc 控制元素的大间隙。
   * @descEN Control the large gap of the element.
   */
  flexGapLG: number;
}

const genFlexStyle: GenerateStyle<FlexToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genFlexGapStyle: GenerateStyle<FlexToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genFlexWrapStyle: GenerateStyle<FlexToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genAlignItemsStyle: GenerateStyle<FlexToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genJustifyContentStyle: GenerateStyle<FlexToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export const prepareComponentToken: GetDefaultToken<'Flex'> = () => { throw new Error("STUB"); };

export default genStyleHooks(
  'Flex',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
  {
    // Flex component don't apply extra font style
    // https://github.com/ant-design/ant-design/issues/46403
    resetStyle: false,
  },
);
