import type { CSSInterpolation, CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';

import { genFocusStyle, resetIcon } from '../../style';
import { genNoMotionStyle } from '../../style/motion';
import type { GenerateStyle } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';
import genGroupStyle from './group';
import type { ButtonToken, ComponentToken } from './token';
import { prepareComponentToken, prepareToken } from './token';
import genVariantStyle from './variant';

export type { ComponentToken };

// ============================== Shared ==============================
const genSharedButtonStyle: GenerateStyle<ButtonToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ============================== Shape ===============================
const genCircleButtonStyle: GenerateStyle<ButtonToken, CSSObject> = (token) => ({
  minWidth: token.controlHeight,
  paddingInline: 0,
  borderRadius: '50%',
});

// =============================== Size ===============================
const genButtonStyle = (token: ButtonToken, prefixCls = ''): CSSInterpolation => {
  const {
    componentCls,
    controlHeight,
    fontSize,
    borderRadius,
    buttonPaddingHorizontal,
    iconCls,
    buttonPaddingVertical,
    buttonIconOnlyFontSize,
  } = token;

  return [
    {
      [prefixCls]: {
        fontSize,
        height: controlHeight,
        padding: `${unit(buttonPaddingVertical!)} ${unit(buttonPaddingHorizontal!)}`,
        borderRadius,

        [`&${componentCls}-icon-only`]: {
          width: controlHeight,

          [iconCls]: {
            fontSize: buttonIconOnlyFontSize,
          },
        },
      },
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${componentCls}${componentCls}-circle${prefixCls}`]: genCircleButtonStyle(token),
    },
    {
      [`${componentCls}${componentCls}-round${prefixCls}`]: {
        borderRadius: token.controlHeight,
        [`&:not(${componentCls}-icon-only)`]: {
          paddingInline: token.buttonPaddingHorizontal,
        },
      },
    },
  ];
};

const genSizeBaseButtonStyle: GenerateStyle<ButtonToken> = (token) => {
    throw new Error("STUB");
};

const genSizeSmallButtonStyle: GenerateStyle<ButtonToken> = (token) => {
    throw new Error("STUB");
};

const genSizeLargeButtonStyle: GenerateStyle<ButtonToken> = (token) => {
    throw new Error("STUB");
};

const genBlockButtonStyle: GenerateStyle<ButtonToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export default genStyleHooks(
  'Button',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
  {
    unitless: {
      fontWeight: true,
      contentLineHeight: true,
      contentLineHeightSM: true,
      contentLineHeightLG: true,
    },
  },
);
