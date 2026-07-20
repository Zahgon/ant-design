import type { CSSProperties } from 'react';
import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';

import { resetComponent } from '../../style';
import { genCollapseMotion, zoomIn } from '../../style/motion';
import type {
  AliasToken,
  FullToken,
  GenerateStyle,
  GenStyleFn,
  GetDefaultToken,
} from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';
import { genCssVar } from '../../theme/util/genStyleUtils';
import genFormValidateMotionStyle from './explain';

export interface ComponentToken {
  /**
   * @desc 必填项标记颜色
   * @descEN Required mark color
   */
  labelRequiredMarkColor: string;
  /**
   * @desc 标签颜色
   * @descEN Label color
   */
  labelColor: string;
  /**
   * @desc 标签字体大小
   * @descEN Label font size
   */
  labelFontSize: number;
  /**
   * @desc 标签高度
   * @descEN Label height
   */
  labelHeight: number | string;
  /** @internal */
  verticalLabelHeight: number | string;
  /**
   * @desc 标签冒号前间距
   * @descEN Label colon margin-inline-start
   */
  labelColonMarginInlineStart: number;
  /**
   * @desc 标签冒号后间距
   * @descEN Label colon margin-inline-end
   */
  labelColonMarginInlineEnd: number;
  /**
   * @desc 表单项间距
   * @descEN Form item margin bottom
   */
  itemMarginBottom: number;
  /**
   * @desc 行内布局表单项间距
   * @descEN Inline layout form item margin bottom
   */
  inlineItemMarginBottom: number;
  /**
   * @desc 垂直布局标签内边距
   * @descEN Vertical layout label padding
   */
  verticalLabelPadding: CSSProperties['padding'];
  /**
   * @desc 垂直布局标签外边距
   * @descEN Vertical layout label margin
   */
  verticalLabelMargin: CSSProperties['margin'];
}

/**
 * @desc Form 组件的 Token
 * @descEN Token for Form component
 */
export interface FormToken extends FullToken<'Form'> {
  /**
   * @desc 表单项类名
   * @descEN Form item class name
   */
  formItemCls: string;
  /**
   * @desc 根前缀类名
   * @descEN Root prefix class name
   */
  rootPrefixCls: string;
}

const resetForm: GenerateStyle<AliasToken, CSSObject> = (token) => ({
  legend: {
    display: 'block',
    width: '100%',
    marginBottom: token.marginLG,
    padding: 0,
    color: token.colorTextDescription,
    fontSize: token.fontSizeLG,
    lineHeight: 'inherit',
    border: 0,
    borderBottom: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
  },

  'input[type="search"]': {
    boxSizing: 'border-box',
  },

  // Position radios and checkboxes better
  'input[type="radio"], input[type="checkbox"]': {
    lineHeight: 'normal',
  },

  'input[type="file"]': {
    display: 'block',
  },

  // Make range inputs behave like textual form controls
  'input[type="range"]': {
    display: 'block',
    width: '100%',
  },

  // Make multiple select elements height not fixed
  'select[multiple], select[size]': {
    height: 'auto',
  },

  // Focus for file, radio, and checkbox
  "input[type='file']:focus, input[type='radio']:focus, input[type='checkbox']:focus": {
    outline: 0,
    boxShadow: `0 0 0 ${unit(token.controlOutlineWidth)} ${token.controlOutline}`,
  },

  // Adjust output element
  output: {
    display: 'block',
    paddingTop: 15,
    color: token.colorText,
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
  },
});

const genFormSize = (token: FormToken, height: number): CSSObject => {
  const { formItemCls } = token;

  return {
    [formItemCls]: {
      [`${formItemCls}-label > label`]: {
        height,
      },

      [`${formItemCls}-control-input`]: {
        minHeight: height,
      },
    },
  };
};

const genFormStyle: GenerateStyle<FormToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genFormItemStyle: GenerateStyle<FormToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const makeVerticalLayoutLabel: GenerateStyle<FormToken, CSSObject> = (token) => ({
  padding: token.verticalLabelPadding,
  margin: token.verticalLabelMargin,
  whiteSpace: 'initial',
  textAlign: 'start',

  '> label': {
    margin: 0,

    '&::after': {
      // https://github.com/ant-design/ant-design/issues/43538
      visibility: 'hidden',
    },
  },
});

const genHorizontalStyle: GenerateStyle<FormToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genInlineStyle: GenerateStyle<FormToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const makeVerticalLayout: GenerateStyle<FormToken, CSSObject> = (token) => {
  const { componentCls, formItemCls, rootPrefixCls } = token;

  return {
    [`${formItemCls} ${formItemCls}-label`]: makeVerticalLayoutLabel(token),
    // ref: https://github.com/ant-design/ant-design/issues/45122
    [`${componentCls}:not(${componentCls}-inline)`]: {
      [formItemCls]: {
        flexWrap: 'wrap',

        [`${formItemCls}-label, ${formItemCls}-control`]: {
          // When developer pass `xs: { span }`,
          // It should follow the `xs` screen config
          // ref: https://github.com/ant-design/ant-design/issues/44386
          [`&:not([class*=" ${rootPrefixCls}-col-xs"])`]: {
            flex: '0 0 100%',
            maxWidth: '100%',
          },
        },
      },
    },
  };
};

const genVerticalStyle: GenerateStyle<FormToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export const prepareComponentToken: GetDefaultToken<'Form'> = (token) => { throw new Error("STUB"); };

export const prepareToken = (token: Parameters<GenStyleFn<'Form'>>[0], rootPrefixCls: string) => {
    throw new Error("STUB");
};

export default genStyleHooks(
  'Form',
  (token, { rootPrefixCls }) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
  {
    // Let From style before the Grid
    // ref https://github.com/ant-design/ant-design/issues/44386
    order: -1000,
  },
);
