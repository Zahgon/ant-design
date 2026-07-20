import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';

import { resetComponent, textEllipsis } from '../../style';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';

export interface ComponentToken {
  /**
   * @desc 链接纵向内间距
   * @descEN Vertical padding of link
   */
  linkPaddingBlock: number;
  /**
   * @desc 链接横向内间距
   * @descEN Horizontal padding of link
   */
  linkPaddingInlineStart: number;
}

/**
 * @desc Anchor 组件的 Token
 * @descEN Token for Anchor component
 */
interface AnchorToken extends FullToken<'Anchor'> {
  /**
   * @desc 容器块偏移量
   * @descEN Holder block offset
   */
  holderOffsetBlock: number;
  /**
   * @desc 次级锚点块内间距
   * @descEN Secondary anchor block padding
   */
  anchorPaddingBlockSecondary: number | string;
  /**
   * @desc 锚点球大小
   * @descEN Anchor ball size
   */
  anchorBallSize: number | string;
  /**
   * @desc 锚点标题块
   * @descEN Anchor title block
   */
  anchorTitleBlock: number | string;
}

// ============================== Shared ==============================
const genSharedAnchorStyle: GenerateStyle<AnchorToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genSharedAnchorHorizontalStyle: GenerateStyle<AnchorToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export const prepareComponentToken: GetDefaultToken<'Anchor'> = (token) => { throw new Error("STUB"); };

// ============================== Export ==============================
export default genStyleHooks(
  'Anchor',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
);
