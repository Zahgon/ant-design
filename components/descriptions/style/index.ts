import { unit } from '@ant-design/cssinjs';
import type { CSSObject } from '@ant-design/cssinjs';

import { resetComponent, textEllipsis } from '../../style';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';

/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
  // Component token here
  /**
   * @desc 标签背景色
   * @descEN Background color of label
   */
  labelBg: string;
  /**
   * @desc 标签文字颜色
   * @descEN Text color of label
   */
  labelColor: string;
  /**
   * @desc 标题文字颜色
   * @descEN Text color of title
   */
  titleColor: string;
  /**
   * @desc 标题下间距
   * @descEN Bottom margin of title
   */
  titleMarginBottom: number;
  /**
   * @desc 子项下间距
   * @descEN Bottom padding of item
   */
  itemPaddingBottom: number;
  /**
   * @desc 子项结束间距
   * @descEN End padding of item
   */
  itemPaddingEnd: number;
  /**
   * @desc 冒号右间距
   * @descEN Right margin of colon
   */
  colonMarginRight: number;
  /**
   * @desc 冒号左间距
   * @descEN Left margin of colon
   */
  colonMarginLeft: number;
  /**
   * @desc 内容区域文字颜色
   * @descEN Text color of content
   */
  contentColor: string;
  /**
   * @desc 额外区域文字颜色
   * @descEN Text color of extra area
   */
  extraColor: string;
}

interface DescriptionsToken extends FullToken<'Descriptions'> {}

const genBorderedStyle: GenerateStyle<DescriptionsToken, CSSObject> = (token) => {
  const { componentCls, labelBg } = token;
  return {
    [`&${componentCls}-bordered`]: {
      [`> ${componentCls}-view`]: {
        border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
        '> table': {
          tableLayout: 'auto',
        },
        [`${componentCls}-row`]: {
          borderBottom: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
          '&:first-child': {
            '> th:first-child, > td:first-child': {
              borderStartStartRadius: token.borderRadiusLG,
            },
          },
          '&:last-child': {
            borderBottom: 'none',
            '> th:first-child, > td:first-child': {
              borderEndStartRadius: token.borderRadiusLG,
            },
          },
          [`> ${componentCls}-item-label, > ${componentCls}-item-content`]: {
            padding: `${unit(token.padding)} ${unit(token.paddingLG)}`,
            borderInlineEnd: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
            '&:last-child': {
              borderInlineEnd: 'none',
            },
          },
          [`> ${componentCls}-item-label`]: {
            color: token.colorTextSecondary,
            backgroundColor: labelBg,
            '&::after': {
              display: 'none',
            },
          },
        },
      },
      [`&${componentCls}-medium`]: {
        [`${componentCls}-row`]: {
          [`> ${componentCls}-item-label, > ${componentCls}-item-content`]: {
            padding: `${unit(token.paddingSM)} ${unit(token.paddingLG)}`,
          },
        },
      },
      [`&${componentCls}-small`]: {
        [`${componentCls}-row`]: {
          [`> ${componentCls}-item-label, > ${componentCls}-item-content`]: {
            padding: `${unit(token.paddingXS)} ${unit(token.padding)}`,
          },
        },
      },
    },
  };
};

const genDescriptionStyles: GenerateStyle<DescriptionsToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export const prepareComponentToken: GetDefaultToken<'Descriptions'> = (token) => { throw new Error("STUB"); };

// ============================== Export ==============================
export default genStyleHooks(
  'Descriptions',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
);
