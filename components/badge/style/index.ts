import type { CSSObject } from '@ant-design/cssinjs';
import { Keyframes, unit } from '@ant-design/cssinjs';

import { resetComponent } from '../../style';
import type { FullToken, GenerateStyle, GenStyleFn, GetDefaultToken } from '../../theme/internal';
import { genPresetColor, genStyleHooks, mergeToken } from '../../theme/internal';

/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
  // Component token here
  /**
   * @desc 徽标 z-index
   * @descEN z-index of badge
   */
  indicatorZIndex: number | string;
  /**
   * @desc 徽标高度
   * @descEN Height of badge
   */
  indicatorHeight: number | string;
  /**
   * @desc 小号徽标高度
   * @descEN Height of small badge
   */
  indicatorHeightSM: number | string;
  /**
   * @desc 点状徽标尺寸
   * @descEN Size of dot badge
   */
  dotSize: number;
  /**
   * @desc 徽标文本尺寸
   * @descEN Font size of badge text
   */
  textFontSize: number;
  /**
   * @desc 小号徽标文本尺寸
   * @descEN Font size of small badge text
   */
  textFontSizeSM: number;
  /**
   * @desc 徽标文本粗细
   * @descEN Font weight of badge text
   */
  textFontWeight: number | string;
  /**
   * @desc 状态徽标尺寸
   * @descEN Size of status badge
   */
  statusSize: number;
  /**
   * @desc 多字符徽标水平内边距
   * @descEN Inline padding of multiple words badge
   */
  paddingInline: number | string;
}

/**
 * @desc Badge 组件的 Token
 * @descEN Token for Badge component
 */
export interface BadgeToken extends FullToken<'Badge'> {
  /**
   * @desc 徽标字体高度
   * @descEN Font height of badge
   */
  badgeFontHeight: number;
  /**
   * @desc 徽标文本颜色
   * @descEN Text color of badge
   */
  badgeTextColor: string;
  /**
   * @desc 徽标颜色
   * @descEN Color of badge
   */
  badgeColor: string;
  /**
   * @desc 徽标悬停颜色
   * @descEN Hover color of badge
   */
  badgeColorHover: string;
  /**
   * @desc 徽标阴影尺寸
   * @descEN Shadow size of badge
   */
  badgeShadowSize: number;
  /**
   * @desc 徽标阴影颜色
   * @descEN Shadow color of badge
   */
  badgeShadowColor: string;
  /**
   * @desc 徽标处理持续时间
   * @descEN Processing duration of badge
   */
  badgeProcessingDuration: string;
  /**
   * @desc 徽标丝带偏移量
   * @descEN Ribbon offset of badge
   */
  badgeRibbonOffset: number;
  /**
   * @desc 徽标丝带角变换
   * @descEN Ribbon corner transform of badge
   */
  badgeRibbonCornerTransform: string;
  /**
   * @desc 徽标丝带角滤镜
   * @descEN Ribbon corner filter of badge
   */
  badgeRibbonCornerFilter: string;
}

const antStatusProcessing = new Keyframes('antStatusProcessing', {
  '0%': { transform: 'scale(0.8)', opacity: 0.5 },
  '100%': { transform: 'scale(2.4)', opacity: 0 },
});

const antZoomBadgeIn = new Keyframes('antZoomBadgeIn', {
  '0%': { transform: 'scale(0) translate(50%, -50%)', opacity: 0 },
  '100%': { transform: 'scale(1) translate(50%, -50%)' },
});

const antZoomBadgeOut = new Keyframes('antZoomBadgeOut', {
  '0%': { transform: 'scale(1) translate(50%, -50%)' },
  '100%': { transform: 'scale(0) translate(50%, -50%)', opacity: 0 },
});

const antNoWrapperZoomBadgeIn = new Keyframes('antNoWrapperZoomBadgeIn', {
  '0%': { transform: 'scale(0)', opacity: 0 },
  '100%': { transform: 'scale(1)' },
});

const antNoWrapperZoomBadgeOut = new Keyframes('antNoWrapperZoomBadgeOut', {
  '0%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(0)', opacity: 0 },
});

const antBadgeLoadingCircle = new Keyframes('antBadgeLoadingCircle', {
  '0%': { transformOrigin: '50%' },
  '100%': {
    transform: 'translate(50%, -50%) rotate(360deg)',
    transformOrigin: '50%',
  },
});

const genSharedBadgeStyle: GenerateStyle<BadgeToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export const prepareToken = (token: Parameters<GenStyleFn<'Badge'>>[0]) => {
    throw new Error("STUB");
};

export const prepareComponentToken: GetDefaultToken<'Badge'> = (token) => {
    throw new Error("STUB");
};

export default genStyleHooks(
  'Badge',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
);
