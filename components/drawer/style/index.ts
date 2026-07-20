import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';

import { genFocusStyle } from '../../style';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';
import genMotionStyle from './motion';

export interface ComponentToken {
  /**
   * @desc 弹窗 z-index
   * @descEN z-index of drawer
   */
  zIndexPopup: number;
  /**
   * @desc 底部区域纵向内间距
   * @descEN Vertical padding of footer
   */
  footerPaddingBlock: number;
  /**
   * @desc 底部区域横向内间距
   * @descEN Horizontal padding of footer
   */
  footerPaddingInline: number;
  /**
   * @desc 拖拽手柄大小
   * @descEN Size of resize handle
   */
  draggerSize: number;
}

export interface DrawerToken extends FullToken<'Drawer'> {}

// =============================== Base ===============================
const genDrawerStyle: GenerateStyle<DrawerToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export const prepareComponentToken: GetDefaultToken<'Drawer'> = (token) => { throw new Error("STUB"); };

// ============================== Export ==============================
export default genStyleHooks(
  'Drawer',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
);
