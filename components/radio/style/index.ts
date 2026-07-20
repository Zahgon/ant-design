import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';

import { genFocusOutline, resetComponent } from '../../style';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';

// ============================== Tokens ==============================
export interface ComponentToken {
  // Radio
  /**
   * @desc 单选框大小
   * @descEN Radio size
   */
  radioSize: number;
  /**
   * @desc 单选框圆点大小
   * @descEN Size of Radio dot
   */
  dotSize: number;
  /**
   * @desc 单选框圆点禁用颜色
   * @descEN Color of disabled Radio dot
   */
  dotColorDisabled: string;

  // Radio buttons
  /**
   * @desc 单选框按钮背景色
   * @descEN Background color of Radio button
   */
  buttonBg: string;
  /**
   * @desc 单选框按钮选中背景色
   * @descEN Background color of checked Radio button
   */
  buttonCheckedBg: string;
  /**
   * @desc 单选框按钮文本颜色
   * @descEN Color of Radio button text
   */
  buttonColor: string;
  /**
   * @desc 单选框按钮横向内间距
   * @descEN Horizontal padding of Radio button
   */
  buttonPaddingInline: number;
  /**
   * @desc 单选框按钮选中并禁用时的背景色
   * @descEN Background color of checked and disabled Radio button
   */
  buttonCheckedBgDisabled: string;
  /**
   * @desc 单选框按钮选中并禁用时的文本颜色
   * @descEN Color of checked and disabled Radio button text
   */
  buttonCheckedColorDisabled: string;
  /**
   * @desc 单选框实色按钮选中时的文本颜色
   * @descEN Color of checked solid Radio button text
   */
  buttonSolidCheckedColor: string;
  /**
   * @desc 单选框实色按钮选中时的背景色
   * @descEN Background color of checked solid Radio button text
   */
  buttonSolidCheckedBg: string;
  /**
   * @desc 单选框实色按钮选中时的悬浮态背景色
   * @descEN Background color of checked solid Radio button text when hover
   */
  buttonSolidCheckedHoverBg: string;
  /**
   * @desc 单选框实色按钮选中时的激活态背景色
   * @descEN Background color of checked solid Radio button text when active
   */
  buttonSolidCheckedActiveBg: string;
  /**
   * @desc 单选框右间距
   * @descEN Margin right of Radio button
   */
  wrapperMarginInlineEnd: number;

  /** @internal */
  radioColor: string;
  /** @internal */
  radioBgColor: string;
}

/**
 * @desc Radio 组件的 Token
 * @descEN Token for Radio component
 */
interface RadioToken extends FullToken<'Radio'> {
  /**
   * @desc 单选框焦点阴影
   * @descEN Focus shadow of Radio
   */
  radioFocusShadow: string;
  /**
   * @desc 单选框按钮焦点阴影
   * @descEN Focus shadow of Radio button
   */
  radioButtonFocusShadow: string;
}

// ============================== Styles ==============================
// styles from RadioGroup only
const getGroupRadioStyle: GenerateStyle<RadioToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// Styles from radio-wrapper
const getRadioBasicStyle: GenerateStyle<RadioToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// Styles from radio-button
const getRadioButtonStyle: GenerateStyle<RadioToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export const prepareComponentToken: GetDefaultToken<'Radio'> = (token) => {
    throw new Error("STUB");
};

export default genStyleHooks(
  'Radio',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
  {
    unitless: {
      radioSize: true,
      dotSize: true,
    },
  },
);
