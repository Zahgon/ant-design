import type { CSSObject } from '@ant-design/cssinjs';

import type { FullToken, GenerateStyle } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';

/** Component only token. Which will handle additional calculation of alias token */
// biome-ignore lint/suspicious/noEmptyInterface: ComponentToken need to be empty by default
export interface ComponentToken {}

/**
 * @desc Empty 组件的 Token
 * @descEN Token for Empty component
 */
interface EmptyToken extends FullToken<'Empty'> {
  /**
   * @desc 空状态图片类名
   * @descEN Class name for empty state image
   */
  emptyImgCls: string;
  /**
   * @desc 空状态图片高度
   * @descEN Height of empty state image
   */
  emptyImgHeight: number | string;
  /**
   * @desc 小号空状态图片高度
   * @descEN Height of small empty state image
   */
  emptyImgHeightSM: number | string;
  /**
   * @desc 中号空状态图片高度
   * @descEN Height of medium empty state image
   */
  emptyImgHeightMD: number | string;
}

// ============================== Shared ==============================
const genSharedEmptyStyle: GenerateStyle<EmptyToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export default genStyleHooks('Empty', (token) => {
    throw new Error("STUB");
});
