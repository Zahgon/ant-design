import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';

import { clearFix, genFocusOutline, resetComponent } from '../../style';
import { genCompactItemStyle } from '../../style/compact-item';
import type { GenerateStyle } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';
import type { ComponentToken, InputToken } from './token';
import { initComponentToken, initInputToken } from './token';
import {
  genBorderlessStyle,
  genFilledGroupStyle,
  genFilledStyle,
  genOutlinedGroupStyle,
  genOutlinedStyle,
  genUnderlinedStyle,
} from './variants';

export type { ComponentToken };
export { initComponentToken, initInputToken };

export const genPlaceholderStyle = (color: string): CSSObject => ({
  // Firefox
  '&::-moz-placeholder': {
    opacity: 1,
  },
  '&::placeholder': {
    color,
    userSelect: 'none', // https://github.com/ant-design/ant-design/pull/32639
  },
  '&:placeholder-shown': {
    textOverflow: 'ellipsis',
  },
});

export const genActiveStyle: GenerateStyle<InputToken, CSSObject> = (token) => ({
  borderColor: token.activeBorderColor,
  boxShadow: token.activeShadow,
  outline: 0,
  backgroundColor: token.activeBg,
});

export const genInputLargeStyle: GenerateStyle<InputToken, CSSObject> = (token) => {
  const { paddingBlockLG, lineHeightLG, borderRadiusLG, paddingInlineLG } = token;
  return {
    padding: `${unit(paddingBlockLG)} ${unit(paddingInlineLG)}`,
    fontSize: token.inputFontSizeLG,
    lineHeight: lineHeightLG,
    borderRadius: borderRadiusLG,
  };
};

export const genInputSmallStyle: GenerateStyle<InputToken, CSSObject> = (token) => ({
  padding: `${unit(token.paddingBlockSM)} ${unit(token.paddingInlineSM)}`,
  fontSize: token.inputFontSizeSM,
  borderRadius: token.borderRadiusSM,
});

export const genBasicInputStyle = (
  token: InputToken,
  option: {
    largeStyle?: CSSObject;
    smallStyle?: CSSObject;
  } = {},
): CSSObject => ({
  position: 'relative',
  display: 'inline-block',
  width: '100%',
  minWidth: 0,
  padding: `${unit(token.paddingBlock)} ${unit(token.paddingInline)}`,
  color: token.colorText,
  fontSize: token.inputFontSize,
  lineHeight: token.lineHeight,
  borderRadius: token.borderRadius,
  transition: `all ${token.motionDurationMid}`,
  ...genPlaceholderStyle(token.colorTextPlaceholder),

  // Size
  '&-lg': {
    ...genInputLargeStyle(token),
    ...option.largeStyle,
  },
  '&-sm': {
    ...genInputSmallStyle(token),
    ...option.smallStyle,
  },

  // RTL
  '&-rtl, &-textarea-rtl': {
    direction: 'rtl',
  },
});

export const genInputGroupStyle: GenerateStyle<InputToken, CSSObject> = (token) => {
  const { componentCls, antCls } = token;

  return {
    position: 'relative',
    display: 'table',
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0,

    // Undo padding and float of grid classes
    "&[class*='col-']": {
      paddingInlineEnd: token.paddingXS,

      '&:last-child': {
        paddingInlineEnd: 0,
      },
    },

    // Sizing options
    [`&-lg ${componentCls}, &-lg > ${componentCls}-group-addon`]: {
      ...genInputLargeStyle(token),
    },

    [`&-sm ${componentCls}, &-sm > ${componentCls}-group-addon`]: {
      ...genInputSmallStyle(token),
    },

    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&-lg ${antCls}-select-single`]: {
      height: token.controlHeightLG,
    },

    [`&-sm ${antCls}-select-single`]: {
      height: token.controlHeightSM,
    },

    [`> ${componentCls}`]: {
      display: 'table-cell',

      '&:not(:first-child):not(:last-child)': {
        borderRadius: 0,
      },
    },

    [`${componentCls}-group`]: {
      '&-addon, &-wrap': {
        display: 'table-cell',
        width: 1,
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',

        '&:not(:first-child):not(:last-child)': {
          borderRadius: 0,
        },
      },

      '&-wrap > *': {
        display: 'block !important',
      },

      '&-addon': {
        position: 'relative',
        padding: `0 ${unit(token.paddingInline)}`,
        color: token.colorText,
        fontWeight: 'normal',
        fontSize: token.inputFontSize,
        textAlign: 'center',
        borderRadius: token.borderRadius,
        transition: `all ${token.motionDurationSlow}`,
        lineHeight: 1,

        // Reset Select's style in addon
        [`${antCls}-select`]: {
          margin: `${unit(token.calc(token.paddingBlock).add(1).mul(-1).equal())} ${unit(
            token.calc(token.paddingInline).mul(-1).equal(),
          )}`,

          [`&${antCls}-select-single:not(${antCls}-select-customize-input):not(${antCls}-pagination-size-changer)`]:
            {
              backgroundColor: 'inherit',
              border: `${unit(token.lineWidth)} ${token.lineType} transparent`,
              boxShadow: 'none',
            },
        },

        // https://github.com/ant-design/ant-design/issues/31333
        [`${antCls}-cascader-picker`]: {
          margin: `-9px ${unit(token.calc(token.paddingInline).mul(-1).equal())}`,
          backgroundColor: 'transparent',
          [`${antCls}-cascader-input`]: {
            textAlign: 'start',
            border: 0,
            boxShadow: 'none',
          },
        },
      },
    },

    [componentCls]: {
      width: '100%',
      marginBottom: 0,
      textAlign: 'inherit',

      '&:focus': {
        zIndex: 1, // Fix https://gw.alipayobjects.com/zos/rmsportal/DHNpoqfMXSfrSnlZvhsJ.png
        borderInlineEndWidth: 1,
      },

      '&:hover': {
        zIndex: 1,
        borderInlineEndWidth: 1,
      },
    },

    // Reset rounded corners
    [`> ${componentCls}:first-child, ${componentCls}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,

      // Reset Select's style in addon
      [`${antCls}-select`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
      },
    },

    [`> ${componentCls}-affix-wrapper`]: {
      [`&:not(:first-child) ${componentCls}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
      },

      [`&:not(:last-child) ${componentCls}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
      },
    },

    [`> ${componentCls}:last-child, ${componentCls}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,

      // Reset Select's style in addon
      [`${antCls}-select`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
      },
    },

    [`${componentCls}-affix-wrapper`]: {
      '&:not(:last-child)': {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
      },

      '&:not(:first-child)': {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
      },
    },

    [`&${componentCls}-group-compact`]: {
      display: 'block',
      ...clearFix(),

      [`${componentCls}-group-addon, ${componentCls}-group-wrap, > ${componentCls}`]: {
        '&:not(:first-child):not(:last-child)': {
          borderInlineEndWidth: token.lineWidth,

          '&:hover, &:focus': {
            zIndex: 1,
          },
        },
      },

      '& > *': {
        display: 'inline-flex',
        float: 'none',
        verticalAlign: 'top', // https://github.com/ant-design/ant-design-pro/issues/139
        borderRadius: 0,
      },

      [`
        & > ${componentCls}-affix-wrapper,
        & > ${componentCls}-number-affix-wrapper,
        & > ${antCls}-picker-range
      `]: {
        display: 'inline-flex',
      },

      '& > *:not(:last-child)': {
        marginInlineEnd: token.calc(token.lineWidth).mul(-1).equal(),
        borderInlineEndWidth: token.lineWidth,
      },

      // Undo float for .ant-input-group .ant-input
      [componentCls]: {
        float: 'none',
      },

      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${antCls}-select,
      & > ${antCls}-select-auto-complete ${componentCls},
      & > ${antCls}-cascader-picker ${componentCls},
      & > ${componentCls}-group-wrapper ${componentCls}`]: {
        borderInlineEndWidth: token.lineWidth,
        borderRadius: 0,

        '&:hover, &:focus': {
          zIndex: 1,
        },
      },

      [`& > ${antCls}-select-focused`]: {
        zIndex: 1,
      },

      // update z-index for arrow icon
      [`& > ${antCls}-select > ${antCls}-select-arrow`]: {
        zIndex: 1, // https://github.com/ant-design/ant-design/issues/20371
      },

      [`& > *:first-child,
      & > ${antCls}-select:first-child,
      & > ${antCls}-select-auto-complete:first-child ${componentCls},
      & > ${antCls}-cascader-picker:first-child ${componentCls}`]: {
        borderStartStartRadius: token.borderRadius,
        borderEndStartRadius: token.borderRadius,
      },

      [`& > *:last-child,
      & > ${antCls}-select:last-child,
      & > ${antCls}-cascader-picker:last-child ${componentCls},
      & > ${antCls}-cascader-picker-focused:last-child ${componentCls}`]: {
        borderInlineEndWidth: token.lineWidth,
        borderStartEndRadius: token.borderRadius,
        borderEndEndRadius: token.borderRadius,
      },

      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${antCls}-select-auto-complete ${componentCls}`]: {
        verticalAlign: 'top',
      },

      [`${componentCls}-group-wrapper + ${componentCls}-group-wrapper`]: {
        marginInlineStart: token.calc(token.lineWidth).mul(-1).equal(),
        [`${componentCls}-affix-wrapper`]: {
          // borderRadius: 0,
        },
      },
    },
  };
};

export const genInputStyle: GenerateStyle<InputToken, CSSObject> = (token) => {
  const { componentCls, controlHeightSM, lineWidth, calc } = token;

  const FIXED_CHROME_COLOR_HEIGHT = 16;
  const colorSmallPadding = calc(controlHeightSM)
    .sub(calc(lineWidth).mul(2))
    .sub(FIXED_CHROME_COLOR_HEIGHT)
    .div(2)
    .equal();

  return {
    [componentCls]: {
      ...resetComponent(token),
      ...genBasicInputStyle(token),

      // Variants
      ...genOutlinedStyle(token),
      ...genFilledStyle(token),
      ...genBorderlessStyle(token),
      ...genUnderlinedStyle(token),

      '&[type="color"]': {
        height: token.controlHeight,

        [`&${componentCls}-lg`]: {
          height: token.controlHeightLG,
        },
        [`&${componentCls}-sm`]: {
          height: controlHeightSM,
          paddingTop: colorSmallPadding,
          paddingBottom: colorSmallPadding,
        },
      },

      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration':
        {
          appearance: 'none',
        },
    },
  };
};

const genAllowClearStyle: GenerateStyle<InputToken, CSSObject> = (token) => {
  const { componentCls } = token;
  return {
    // ========================= Input =========================
    [`${componentCls}-clear-icon`]: {
      margin: 0,
      padding: 0,
      lineHeight: 0,
      color: token.colorTextQuaternary,
      fontSize: token.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: 'pointer',
      transition: `color ${token.motionDurationSlow}`,
      border: 'none',
      outline: 'none',
      backgroundColor: 'transparent',
      '&:hover': {
        color: token.colorIcon,
      },

      '&:focus-visible': {
        color: token.colorIcon,
        borderRadius: token.borderRadiusSM,
        ...genFocusOutline(token),
      },

      '&:active': {
        color: token.colorText,
      },

      '&-hidden': {
        visibility: 'hidden',
      },

      '&-has-suffix': {
        margin: `0 ${unit(token.inputAffixPadding)}`,
      },
    },
  };
};

export const genAffixStyle: GenerateStyle<InputToken, CSSObject> = (token) => {
  const {
    componentCls,
    inputAffixPadding,
    colorTextDescription,
    motionDurationSlow,
    colorIcon,
    colorIconHover,
  } = token;

  const affixCls = `${componentCls}-affix-wrapper`;
  const affixClsDisabled = `${componentCls}-affix-wrapper-disabled`;

  return {
    [affixCls]: {
      ...genBasicInputStyle(token),
      display: 'inline-flex',

      '&-focused, &:focus': {
        zIndex: 1,
      },

      [`> input${componentCls}`]: {
        padding: 0,
      },

      [`> input${componentCls}, > textarea${componentCls}`]: {
        fontSize: 'inherit',
        border: 'none',
        borderRadius: 0,
        outline: 'none',
        background: 'transparent',
        color: 'inherit',

        '&::-ms-reveal': {
          display: 'none',
        },

        '&:focus': {
          boxShadow: 'none !important',
        },
      },

      '&::before': {
        display: 'inline-block',
        width: 0,
        visibility: 'hidden',
        content: '"\\a0"',
      },

      [componentCls]: {
        '&-prefix, &-suffix': {
          display: 'flex',
          flex: 'none',
          alignItems: 'center',

          '> *:not(:last-child)': {
            marginInlineEnd: token.paddingXS,
          },
        },

        '&-show-count-suffix': {
          color: colorTextDescription,
          direction: 'ltr',
        },

        '&-show-count-has-suffix': {
          marginInlineEnd: token.paddingXXS,
        },

        '&-prefix': {
          marginInlineEnd: inputAffixPadding,
        },

        '&-suffix': {
          marginInlineStart: inputAffixPadding,
        },

        // password
        '&-password-icon': {
          display: 'inline-flex',
          color: colorIcon,
          cursor: 'pointer',
          transition: `all ${motionDurationSlow}`,

          '&:hover': {
            color: colorIconHover,
          },
        },
      },

      ...genAllowClearStyle(token),
    },

    // 覆盖 affix-wrapper borderRadius！
    [`${componentCls}-underlined`]: {
      borderRadius: 0,
    },

    [affixClsDisabled]: {
      // password disabled
      [`${componentCls}-password-icon`]: {
        color: colorIcon,
        cursor: 'not-allowed',

        '&:hover': {
          color: colorIcon,
        },
      },
    },
  };
};

const genGroupStyle: GenerateStyle<InputToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ============================== Range ===============================
const genRangeStyle: GenerateStyle<InputToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export const useSharedStyle = genStyleHooks(
  ['Input', 'Shared'],
  (token) => {
      throw new Error("STUB");
  },
  initComponentToken,
  {
    resetFont: false,
  },
);

export default genStyleHooks(
  ['Input', 'Component'],
  (token) => {
      throw new Error("STUB");
  },
  initComponentToken,
  {
    resetFont: false,
  },
);
