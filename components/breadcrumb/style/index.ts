import { unit } from '@ant-design/cssinjs';
import type { CSSObject } from '@ant-design/cssinjs';

import { genFocusStyle, resetComponent } from '../../style';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';

export interface ComponentToken {
  /**
   * @desc 面包屑项文字颜色
   * @descEN Text color of Breadcrumb item
   */
  itemColor: string;
  /**
   * @desc 图标大小
   * @descEN Icon size
   */
  iconFontSize: number;
  /**
   * @desc 链接文字颜色
   * @descEN Text color of link
   */
  linkColor: string;
  /**
   * @desc 链接文字悬浮颜色
   * @descEN Color of hovered link
   */
  linkHoverColor: string;
  /**
   * @desc 最后一项文字颜色
   * @descEN Text color of the last item
   */
  lastItemColor: string;
  /**
   * @desc 分隔符外间距
   * @descEN Margin of separator
   */
  separatorMargin: number;
  /**
   * @desc 分隔符颜色
   * @descEN Color of separator
   */
  separatorColor: string;
}

interface BreadcrumbToken extends FullToken<'Breadcrumb'> {}

const genBreadcrumbStyle: GenerateStyle<BreadcrumbToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export const prepareComponentToken: GetDefaultToken<'Breadcrumb'> = (token) => { throw new Error("STUB"); };

// ============================== Export ==============================
export default genStyleHooks(
  'Breadcrumb',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
);
