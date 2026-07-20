import { initFadeMotion } from '../../style/motion/fade';
import type { FullToken, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';
import genFloatButtonStyle from './button';
import genGroupStyle from './group';

/** Component only token. Which will handle additional calculation of alias token */
export type ComponentToken = object;

/**
 * @desc FloatButton 组件的 Token
 * @descEN Token for FloatButton component
 */
export type FloatButtonToken = FullToken<'FloatButton'> & {
  /**
   * @desc FloatButton 尺寸
   * @descEN Size of FloatButton
   */
  floatButtonSize: number;
  /**
   * @desc FloatButton 图标尺寸
   * @descEN Icon size of FloatButton
   */
  floatButtonIconSize: number | string;

  // Position
  /**
   * @desc FloatButton 底部内边距
   * @descEN Bottom inset of FloatButton
   */
  floatButtonInsetBlockEnd: number;
  /**
   * @desc FloatButton 右侧内边距
   * @descEN Right inset of FloatButton
   */
  floatButtonInsetInlineEnd: number;
};

// ============================== Export ==============================
export const prepareComponentToken: GetDefaultToken<'FloatButton'> = () => { throw new Error("STUB"); };

export default genStyleHooks(
  'FloatButton',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
  {
    // Should be higher than Button (-999)
    order: -998,
  },
);
