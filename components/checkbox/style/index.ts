import { unit } from '@ant-design/cssinjs';

import { genFocusOutline, resetComponent } from '../../style';
import { genNoMotionRawStyle, genNoMotionStyle } from '../../style/motion';
import type { FullToken, GenerateStyle } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';

// biome-ignore lint/suspicious/noEmptyInterface: ComponentToken need to be empty by default
export interface ComponentToken {}

/**
 * @desc Checkbox 组件的 Token
 * @descEN Token for Checkbox component
 */
interface CheckboxToken extends FullToken<'Checkbox'> {
  /**
   * @desc Checkbox 类名
   * @descEN Checkbox class name
   */
  checkboxCls: string;
  /**
   * @desc Checkbox 尺寸
   * @descEN Size of Checkbox
   */
  checkboxSize: number;
}

// ============================== Styles ==============================
export const genCheckboxStyle: GenerateStyle<CheckboxToken> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export function getStyle(prefixCls: string, token: FullToken<'Checkbox'>) {
    throw new Error("STUB");
}

export default genStyleHooks('Checkbox', (token, { prefixCls }) => { throw new Error("STUB"); });
