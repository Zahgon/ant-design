import type { CSSProperties } from 'react';
import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';

import { resetComponent } from '../../style';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';

/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
  /**
   * @desc 文本横向内间距
   * @descEN Horizontal padding of text
   */
  textPaddingInline: CSSProperties['paddingInline'];
  /**
   * @desc 文本与边缘距离，取值 0 ～ 1
   * @descEN Distance between text and edge, which should be a number between 0 and 1.
   */
  orientationMargin?: number;
  /**
   * @desc 纵向分割线的横向外间距
   * @descEN Horizontal margin of vertical Divider
   */
  verticalMarginInline: CSSProperties['marginInline'];
}

/**
 * @desc Divider 组件的 Token
 * @descEN Token for Divider component
 */
interface DividerToken extends FullToken<'Divider'> {
  /**
   * @desc 尺寸边距
   * @descEN Size padding edge horizontal
   */
  sizePaddingEdgeHorizontal: number | string;
  /**
   * @desc 带文本的水平分割线的外边距
   * @descEN Horizontal margin of divider with text
   */
  dividerHorizontalWithTextGutterMargin: number | string;
}

// ============================== Size ================================
const genSizeDividerStyle: GenerateStyle<DividerToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ============================== Shared ==============================
const genSharedDividerStyle: GenerateStyle<DividerToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export const prepareComponentToken: GetDefaultToken<'Divider'> = (token) => { throw new Error("STUB"); };

// ============================== Export ==============================
export default genStyleHooks(
  'Divider',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
  {
    unitless: {
      orientationMargin: true,
    },
  },
);
