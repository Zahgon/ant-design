import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';

import { genFocusOutline, genFocusStyle, resetComponent, textEllipsis } from '../../style';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';

export interface ComponentToken {
  /**
   * @desc 选项文本颜色
   * @descEN Text color of item
   */
  itemColor: string;
  /**
   * @desc 选项悬浮态文本颜色
   * @descEN Text color of item when hover
   */
  itemHoverColor: string;
  /**
   * @desc 选项悬浮态背景颜色
   * @descEN Background color of item when hover
   */
  itemHoverBg: string;
  /**
   * @desc 选项激活态背景颜色
   * @descEN Background color of item when active
   */
  itemActiveBg: string;
  /**
   * @desc 选项选中时背景颜色
   * @descEN Background color of item when selected
   */
  itemSelectedBg: string;
  /**
   * @desc 选项选中时文字颜色
   * @descEN Text color of item when selected
   */
  itemSelectedColor: string;
  /**
   * @desc Segmented 控件容器的 padding
   * @descEN Padding of Segmented container
   */
  trackPadding: string | number;
  /**
   * @desc Segmented 控件容器背景色
   * @descEN Background of Segmented container
   */
  trackBg: string;
}

interface SegmentedToken extends FullToken<'Segmented'> {
  segmentedPaddingHorizontal: number | string;
  segmentedPaddingHorizontalSM: number | string;
}

// ============================== Mixins ==============================
function getItemDisabledStyle(cls: string, token: SegmentedToken): CSSObject {
  return {
    [`${cls}, ${cls}:hover, ${cls}:focus`]: {
      color: token.colorTextDisabled,
      cursor: 'not-allowed',
    },
  };
}

const getItemSelectedStyle: GenerateStyle<SegmentedToken, CSSObject> = (token) => {
  return {
    background: token.itemSelectedBg,
    boxShadow: token.boxShadowTertiary,
  };
};

const segmentedTextEllipsisCss: CSSObject = {
  overflow: 'hidden',
  // handle text ellipsis
  ...textEllipsis,
};

// ============================== Styles ==============================
const genSegmentedStyle: GenerateStyle<SegmentedToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export const prepareComponentToken: GetDefaultToken<'Segmented'> = (token) => {
    throw new Error("STUB");
};

export default genStyleHooks(
  'Segmented',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
);
