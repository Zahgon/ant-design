import type { CSSObject } from '@ant-design/cssinjs';
import { Keyframes } from '@ant-design/cssinjs';

import { resetComponent } from '../../style';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';

export interface ComponentToken {
  /**
   * @desc 进度条默认颜色
   * @descEN Default color of progress bar
   */
  defaultColor: string;
  /**
   * @desc 进度条剩余部分颜色
   * @descEN Color of remaining part of progress bar
   */
  remainingColor: string;
  /**
   * @desc 圆形进度条文字颜色
   * @descEN Text color of circular progress bar
   */
  circleTextColor: string;
  /**
   * @desc 条状进度条圆角
   * @descEN Border radius of line progress bar
   */
  lineBorderRadius: number;
  /**
   * @desc 圆形进度条文本大小
   * @descEN Text size of circular progress bar
   */
  circleTextFontSize: string;
  /**
   * @desc 圆形进度条图标大小
   * @descEN Icon size of circular progress bar
   */
  circleIconFontSize: string;
}

export const LineStrokeColorVar = '--progress-line-stroke-color';

/**
 * @desc Progress 组件的 Token
 * @descEN Token for Progress component
 */
interface ProgressToken extends FullToken<'Progress'> {
  /**
   * @desc 进度步骤最小宽度
   * @descEN Minimum width of progress step
   */
  progressStepMinWidth: number | string;
  /**
   * @desc 进度步骤右间距
   * @descEN Right margin of progress step
   */
  progressStepMarginInlineEnd: number | string;
  /**
   * @desc 进度条动画持续时间
   * @descEN Duration of progress bar animation
   */
  progressActiveMotionDuration: string;
}

const genAntProgressActive = (isRtl?: boolean) => {
  const direction = isRtl ? '100%' : '-100%';
  return new Keyframes(`antProgress${isRtl ? 'RTL' : 'LTR'}Active`, {
    '0%': {
      transform: `translateX(${direction}) scaleX(0)`,
      opacity: 0.1,
    },
    '20%': {
      transform: `translateX(${direction}) scaleX(0)`,
      opacity: 0.5,
    },
    to: {
      transform: 'translateX(0) scaleX(1)',
      opacity: 0,
    },
  });
};

// ====================================================================
// ==                              Base                              ==
// ====================================================================
const genBaseStyle: GenerateStyle<ProgressToken, CSSObject> = (token) => {
  const { componentCls: progressCls, iconCls: iconPrefixCls } = token;

  return {
    [progressCls]: {
      ...resetComponent(token),

      display: 'inline-flex',

      '&-rtl': {
        direction: 'rtl',
      },

      [`${progressCls}-indicator`]: {
        color: token.colorText,
        lineHeight: 1,
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        wordBreak: 'normal',
        [iconPrefixCls]: {
          fontSize: token.fontSize,
        },
      },

      [`&${progressCls}-status-exception`]: {
        [`${progressCls}-indicator`]: {
          color: token.colorError,
        },
      },

      [`&${progressCls}-status-success`]: {
        [`${progressCls}-indicator`]: {
          color: token.colorSuccess,
        },
      },
    },
  };
};

// ====================================================================
// ==                              Line                              ==
// ====================================================================
const genLineStyle: GenerateStyle<ProgressToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ====================================================================
// ==                             Circle                             ==
// ====================================================================
const genCircleStyle: GenerateStyle<ProgressToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ====================================================================
// ==                              Step                              ==
// ====================================================================
const genStepStyle: GenerateStyle<ProgressToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ====================================================================
// ==                           Small Line                           ==
// ====================================================================
const genSmallLine: GenerateStyle<ProgressToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ====================================================================
// ==                             Export                             ==
// ====================================================================
export const prepareComponentToken: GetDefaultToken<'Progress'> = (token) => { throw new Error("STUB"); };

export default genStyleHooks(
  'Progress',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
);
