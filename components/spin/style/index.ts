import type { CSSObject } from '@ant-design/cssinjs';
import { Keyframes } from '@ant-design/cssinjs';

import { resetComponent } from '../../style';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';
import { genCssVar } from '../../theme/util/genStyleUtils';

export interface ComponentToken {
  /**
   * @desc 内容区域高度
   * @descEN Height of content area
   */
  contentHeight: number | string;
  /**
   * @desc 加载图标尺寸
   * @descEN Loading icon size
   */
  dotSize: number;
  /**
   * @desc 小号加载图标尺寸
   * @descEN Small loading icon size
   */
  dotSizeSM: number;
  /**
   * @desc 大号加载图标尺寸
   * @descEN Large loading icon size
   */
  dotSizeLG: number;
}

interface SpinToken extends FullToken<'Spin'> {
  spinDotDefault: string;
}

const antSpinMove = new Keyframes('antSpinMove', {
  to: { opacity: 1 },
});

const antRotate = new Keyframes('antRotate', {
  to: { transform: 'rotate(405deg)' },
});

// =============================== Spin ===============================
const genSpinStyle: GenerateStyle<SpinToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ============================ Indicator =============================
const genIndicatorStyle: GenerateStyle<SpinToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// =============================== Size ===============================
const genSizeStyle: GenerateStyle<SpinToken, CSSObject> = (token) => {
  const { componentCls } = token;

  const [varName] = genCssVar(token.antCls, 'spin');

  return {
    [componentCls]: {
      '&-sm': {
        [varName('dot-holder-size')]: token.dotSizeSM,
      },

      '&-lg': {
        [varName('dot-holder-size')]: token.dotSizeLG,
      },
    },
  };
};

// ========================= Component Token ==========================
export const prepareComponentToken: GetDefaultToken<'Spin'> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export default genStyleHooks(
  'Spin',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
);
