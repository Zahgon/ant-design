import { unit } from '@ant-design/cssinjs';
import type { CSSObject } from '@ant-design/cssinjs';

import { genCompactItemStyle } from '../../style/compact-item';
import type { FullToken, GenerateStyle } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';
import genColorBlockStyle from './color-block';
import genInputStyle from './input';
import genPickerStyle from './picker';
import genPresetsStyle from './presets';
import genSliderStyle from './slider';

// biome-ignore lint/suspicious/noEmptyInterface: ComponentToken need to be empty by default
export interface ComponentToken {}

/**
 * @desc ColorPicker 组件的 Token
 * @descEN Token for ColorPicker component
 */
export interface ColorPickerToken extends FullToken<'ColorPicker'> {
  /**
   * @desc ColorPicker 宽度
   * @descEN Width of ColorPicker
   */
  colorPickerWidth: number;
  /**
   * @desc ColorPicker 内嵌阴影
   * @descEN Inset shadow of ColorPicker
   */
  colorPickerInsetShadow: string;
  /**
   * @desc ColorPicker 处理器尺寸
   * @descEN Handler size of ColorPicker
   */
  colorPickerHandlerSize: number;
  /**
   * @desc ColorPicker 小号处理器尺寸
   * @descEN Small handler size of ColorPicker
   */
  colorPickerHandlerSizeSM: number;
  /**
   * @desc ColorPicker 滑块高度
   * @descEN Slider height of ColorPicker
   */
  colorPickerSliderHeight: number;
  /**
   * @desc ColorPicker 预览尺寸
   * @descEN Preview size of ColorPicker
   */
  colorPickerPreviewSize: number;
  /**
   * @desc ColorPicker Alpha 输入宽度
   * @descEN Alpha input width of ColorPicker
   */
  colorPickerAlphaInputWidth: number;
  /**
   * @desc ColorPicker 输入数字处理器宽度
   * @descEN Input number handle width of ColorPicker
   */
  colorPickerInputNumberHandleWidth: number;
  /**
   * @desc ColorPicker 预设颜色尺寸
   * @descEN Preset color size of ColorPicker
   */
  colorPickerPresetColorSize: number;
}

export const genActiveStyle = (
  token: ColorPickerToken,
  borderColor: string,
  outlineColor: string,
) => ({
  borderInlineEndWidth: token.lineWidth,
  borderColor,
  boxShadow: `0 0 0 ${unit(token.controlOutlineWidth)} ${outlineColor}`,
  outline: 0,
});

const genRtlStyle: GenerateStyle<ColorPickerToken, CSSObject> = (token) => {
  const { componentCls } = token;
  return {
    '&-rtl': {
      [`${componentCls}-presets-color`]: {
        '&::after': {
          direction: 'ltr',
        },
      },
      [`${componentCls}-clear`]: {
        '&::after': {
          direction: 'ltr',
        },
      },
    },
  };
};

const genClearStyle = (
  token: ColorPickerToken,
  size: number,
  extraStyle?: CSSObject,
): CSSObject => {
  const { componentCls, borderRadiusSM, lineWidth, colorSplit, colorBorder, red6 } = token;

  return {
    [`${componentCls}-clear`]: {
      width: size,
      height: size,
      borderRadius: borderRadiusSM,
      border: `${unit(lineWidth)} solid ${colorSplit}`,
      position: 'relative',
      overflow: 'hidden',
      cursor: 'inherit',
      transition: `all ${token.motionDurationFast}`,

      ...extraStyle,
      '&::after': {
        content: '""',
        position: 'absolute',
        insetInlineEnd: token.calc(lineWidth).mul(-1).equal(),
        top: token.calc(lineWidth).mul(-1).equal(),
        display: 'block',
        width: 40, // maximum
        height: 2, // fixed
        transformOrigin: `calc(100% - 1px) 1px`,
        transform: 'rotate(-45deg)',
        backgroundColor: red6,
      },

      '&:hover': {
        borderColor: colorBorder,
      },
    },
  };
};

const genStatusStyle: GenerateStyle<ColorPickerToken, CSSObject> = (token) => {
  const {
    componentCls,
    colorError,
    colorWarning,
    colorErrorHover,
    colorWarningHover,
    colorErrorOutline,
    colorWarningOutline,
  } = token;
  return {
    [`&${componentCls}-status-error`]: {
      borderColor: colorError,
      '&:hover': {
        borderColor: colorErrorHover,
      },
      [`&${componentCls}-trigger-active`]: {
        ...genActiveStyle(token, colorError, colorErrorOutline),
      },
    },
    [`&${componentCls}-status-warning`]: {
      borderColor: colorWarning,
      '&:hover': {
        borderColor: colorWarningHover,
      },
      [`&${componentCls}-trigger-active`]: {
        ...genActiveStyle(token, colorWarning, colorWarningOutline),
      },
    },
  };
};
const genSizeStyle: GenerateStyle<ColorPickerToken, CSSObject> = (token) => {
  const {
    componentCls,
    controlHeightLG,
    controlHeightSM,
    controlHeight,
    controlHeightXS,
    borderRadius,
    borderRadiusSM,
    borderRadiusXS,
    borderRadiusLG,
    fontSizeLG,
  } = token;
  return {
    [`&${componentCls}-lg`]: {
      minWidth: controlHeightLG,
      minHeight: controlHeightLG,
      borderRadius: borderRadiusLG,
      [`${componentCls}-color-block, ${componentCls}-clear`]: {
        width: controlHeight,
        height: controlHeight,
        borderRadius,
      },
      [`${componentCls}-trigger-text`]: {
        fontSize: fontSizeLG,
      },
    },
    [`&${componentCls}-sm`]: {
      minWidth: controlHeightSM,
      minHeight: controlHeightSM,
      borderRadius: borderRadiusSM,
      [`${componentCls}-color-block, ${componentCls}-clear`]: {
        width: controlHeightXS,
        height: controlHeightXS,
        borderRadius: borderRadiusXS,
      },

      [`${componentCls}-trigger-text`]: {
        lineHeight: unit(controlHeightXS),
      },
    },
  };
};

const genColorPickerStyle: GenerateStyle<ColorPickerToken> = (token) => {
    throw new Error("STUB");
};

export default genStyleHooks('ColorPicker', (token) => {
    throw new Error("STUB");
});
