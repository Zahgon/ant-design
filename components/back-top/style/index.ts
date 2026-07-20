import { unit } from '@ant-design/cssinjs';
import type { CSSObject } from '@ant-design/cssinjs';

import { resetComponent } from '../../style';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';

/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
  /**
   * @desc 弹出层的 z-index
   * @descEN z-index of popup
   */
  zIndexPopup: number;
}

type BackTopToken = FullToken<'BackTop'> & {
  /**
   * @desc BackTop 背景颜色
   * @descEN Background color of BackTop
   */
  backTopBackground: string;
  /**
   * @desc BackTop 文字颜色
   * @descEN Text color of BackTop
   */
  backTopColor: string;
  /**
   * @desc BackTop 悬停背景颜色
   * @descEN Hover background color of BackTop
   */
  backTopHoverBackground: string;
  /**
   * @desc BackTop 字体大小
   * @descEN Font size of BackTop
   */
  backTopFontSize: number | string;
  /**
   * @desc BackTop 尺寸
   * @descEN Size of BackTop
   */
  backTopSize: number;

  // Position
  /**
   * @desc BackTop 底部偏移量
   * @descEN Bottom offset of BackTop
   */
  backTopBlockEnd: number | string;
  /**
   * @desc BackTop 右侧偏移量
   * @descEN Right offset of BackTop
   */
  backTopInlineEnd: number | string;
  /**
   * @desc BackTop 中等屏幕右侧偏移量
   * @descEN Right offset of BackTop on medium screens
   */
  backTopInlineEndMD: number | string;
  /**
   * @desc BackTop 小屏幕右侧偏移量
   * @descEN Right offset of BackTop on small screens
   */
  backTopInlineEndXS: number | string;
};

// ============================== Shared ==============================
const genSharedBackTopStyle: GenerateStyle<BackTopToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genMediaBackTopStyle: GenerateStyle<BackTopToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export const prepareComponentToken: GetDefaultToken<'BackTop'> = (token) => { throw new Error("STUB"); };

// ============================== Export ==============================
export default genStyleHooks(
  'BackTop',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
);
