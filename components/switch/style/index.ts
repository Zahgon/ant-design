import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';
import { FastColor } from '@ant-design/fast-color';

import { genFocusStyle, resetComponent } from '../../style';
import { genNoMotionRawStyle, genNoMotionStyle } from '../../style/motion';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';

export interface ComponentToken {
  /**
   *  @desc 开关高度
   *  @descEN Height of Switch
   */
  trackHeight: number | string;
  /**
   * @desc 小号开关高度
   * @descEN Height of small Switch
   */
  trackHeightSM: number | string;
  /**
   * @desc 开关最小宽度
   * @descEN Minimum width of Switch
   */
  trackMinWidth: number | string;
  /**
   * @desc 小号开关最小宽度
   * @descEN Minimum width of small Switch
   */
  trackMinWidthSM: number | string;
  /**
   * @desc 开关内边距
   * @descEN Padding of Switch
   */
  trackPadding: number;
  /**
   * @desc 开关把手背景色
   * @descEN Background color of Switch handle
   */
  handleBg: string;
  /**
   * @desc 开关把手阴影
   * @descEN Shadow of Switch handle
   */
  handleShadow: string;
  /**
   * @desc 开关把手大小
   * @descEN Size of Switch handle
   */
  handleSize: number;
  /**
   * @desc 小号开关把手大小
   * @descEN Size of small Switch handle
   */
  handleSizeSM: number;
  /**
   * @desc 内容区域最小边距
   * @descEN Minimum margin of content area
   */
  innerMinMargin: number;
  /**
   * @desc 内容区域最大边距
   * @descEN Maximum margin of content area
   */
  innerMaxMargin: number;
  /**
   * @desc 小号开关内容区域最小边距
   * @descEN Minimum margin of content area of small Switch
   */
  innerMinMarginSM: number;
  /**
   * @desc 小号开关内容区域最大边距
   * @descEN Maximum margin of content area of small Switch
   */
  innerMaxMarginSM: number;
}

interface SwitchToken extends FullToken<'Switch'> {
  switchDuration: string;
  switchColor: string;
  switchDisabledOpacity: number;
  switchLoadingIconSize: number | string;
  switchLoadingIconColor: string;
  switchHandleActiveInset: string;
}

const genSwitchSmallStyle: GenerateStyle<SwitchToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genSwitchLoadingStyle: GenerateStyle<SwitchToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genSwitchHandleStyle: GenerateStyle<SwitchToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genSwitchInnerStyle: GenerateStyle<SwitchToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genSwitchStyle: GenerateStyle<SwitchToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export const prepareComponentToken: GetDefaultToken<'Switch'> = (token) => {
    throw new Error("STUB");
};

export default genStyleHooks(
  'Switch',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
);
