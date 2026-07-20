import { unit } from '@ant-design/cssinjs';
import type { CSSObject } from '@ant-design/cssinjs';

import { operationUnit, resetComponent, resetIcon, textEllipsis } from '../../style';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';

export interface ComponentToken {
  /**
   * @desc 列表宽度
   * @descEN Width of list
   */
  listWidth: number | string;
  /**
   * @desc 大号列表宽度
   * @descEN Width of large list
   */
  listWidthLG: number | string;
  /**
   * @desc 列表高度
   * @descEN Height of list
   */
  listHeight: number | string;
  /**
   * @desc 列表项高度
   * @descEN Height of list item
   */
  itemHeight: number | string;
  /**
   * @desc 列表项纵向内边距
   * @descEN Vertical padding of list item
   */
  itemPaddingBlock: number | string;
  /**
   * @desc 顶部高度
   * @descEN Height of header
   */
  headerHeight: number | string;
}

interface TransferToken extends FullToken<'Transfer'> {
  transferHeaderVerticalPadding: number;
}

const genTransferCustomizeStyle: GenerateStyle<TransferToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genTransferStatusColor = (token: TransferToken, color: string): CSSObject => {
  const { componentCls, colorBorder } = token;
  return {
    [`${componentCls}-section`]: {
      borderColor: color,

      [`${componentCls}-list-search:not([disabled])`]: {
        borderColor: colorBorder,
      },
    },
  };
};

const genTransferStatusStyle: GenerateStyle<TransferToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genTransferListStyle: GenerateStyle<TransferToken, CSSObject> = (token) => {
  const {
    componentCls,
    colorBorder,
    colorSplit,
    lineWidth,
    itemHeight,
    headerHeight,
    transferHeaderVerticalPadding,
    itemPaddingBlock,
    controlItemBgActive,
    colorTextDisabled,
    colorTextSecondary,
    listHeight,
    listWidth,
    listWidthLG,
    fontSizeIcon,
    marginXS,
    paddingSM,
    lineType,
    antCls,
    iconCls,
    motionDurationSlow,
    controlItemBgHover,
    borderRadiusLG,
    colorBgContainer,
    colorText,
    controlItemBgActiveHover,
  } = token;
  const contentBorderRadius = unit(token.calc(borderRadiusLG).sub(lineWidth).equal());

  return {
    display: 'flex',
    flexDirection: 'column',
    width: listWidth,
    height: listHeight,
    border: `${unit(lineWidth)} ${lineType} ${colorBorder}`,
    borderRadius: token.borderRadiusLG,

    '&-with-pagination': {
      width: listWidthLG,
      height: 'auto',
    },

    [`${componentCls}-list`]: {
      '&-search': {
        [`${iconCls}-search`]: {
          color: colorTextDisabled,
        },
      },

      '&-header': {
        display: 'flex',
        flex: 'none',
        alignItems: 'center',
        height: headerHeight,
        // border-top is on the transfer dom. We should minus 1px for this
        padding: `${unit(token.calc(transferHeaderVerticalPadding).sub(lineWidth).equal())} ${unit(
          paddingSM,
        )} ${unit(transferHeaderVerticalPadding)}`,
        color: colorText,
        background: colorBgContainer,
        borderBottom: `${unit(lineWidth)} ${lineType} ${colorSplit}`,
        borderRadius: `${unit(borderRadiusLG)} ${unit(borderRadiusLG)} 0 0`,

        '> *:not(:last-child)': {
          marginInlineEnd: 4, // This is magic and fixed number, DO NOT use token since it may change.
        },

        '> *': {
          flex: 'none',
        },

        '&-title': {
          ...textEllipsis,
          flex: '0 1 auto',
          textAlign: 'end',
          marginInlineStart: 'auto',
        },

        '&-dropdown': {
          ...resetIcon(),

          fontSize: fontSizeIcon,
          transform: 'translateY(10%)',
          cursor: 'pointer',

          '&[disabled]': {
            cursor: 'not-allowed',
          },
        },
      },

      '&-body': {
        display: 'flex',
        flex: 'auto',
        flexDirection: 'column',
        fontSize: token.fontSize,
        // https://blog.csdn.net/qq449245884/article/details/107373672/
        minHeight: 0,

        '&-search-wrapper': {
          position: 'relative',
          flex: 'none',
          padding: paddingSM,
        },
      },

      '&-content': {
        flex: 'auto',
        margin: 0,
        padding: 0,
        overflow: 'auto',
        listStyle: 'none',
        borderRadius: `0 0 ${contentBorderRadius} ${contentBorderRadius}`,

        '&-item': {
          display: 'flex',
          alignItems: 'center',
          minHeight: itemHeight,
          padding: `${unit(itemPaddingBlock)} ${unit(paddingSM)}`,
          transition: `all ${motionDurationSlow}`,

          '> *:not(:last-child)': {
            marginInlineEnd: marginXS,
          },

          '> *': {
            flex: 'none',
          },

          '&-text': {
            ...textEllipsis,
            flex: 'auto',
          },

          '&-remove': {
            ...operationUnit(token),
            color: colorBorder,

            '&:hover, &:focus': {
              color: colorTextSecondary,
            },

            '&:disabled': {
              color: colorTextDisabled,
              cursor: 'not-allowed',
            },
          },

          [`&:not(${componentCls}-list-content-item-disabled)`]: {
            '&:hover': {
              backgroundColor: controlItemBgHover,
              cursor: 'pointer',
            },

            [`&${componentCls}-list-content-item-checked:hover`]: {
              backgroundColor: controlItemBgActiveHover,
            },
          },

          '&-checked': {
            backgroundColor: controlItemBgActive,
          },

          '&-disabled': {
            color: colorTextDisabled,
            cursor: 'not-allowed',
          },
        },

        // Do not change hover style when `oneWay` mode
        [`&-show-remove ${componentCls}-list-content-item:not(${componentCls}-list-content-item-disabled):hover`]:
          {
            background: 'transparent',
            cursor: 'default',
          },
      },

      '&-pagination': {
        padding: token.paddingXS,
        textAlign: 'end',
        borderTop: `${unit(lineWidth)} ${lineType} ${colorSplit}`,

        [`${antCls}-pagination-options`]: {
          paddingInlineEnd: token.paddingXS,
        },
      },

      '&-body-not-found': {
        flex: 'none',
        width: '100%',
        margin: 'auto 0',
        color: colorTextDisabled,
        textAlign: 'center',
      },

      '&-footer': {
        borderTop: `${unit(lineWidth)} ${lineType} ${colorSplit}`,
      },

      // fix: https://github.com/ant-design/ant-design/issues/44489
      '&-checkbox': {
        lineHeight: 1,
      },
    },
  };
};

const genTransferStyle: GenerateStyle<TransferToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genTransferRTLStyle: GenerateStyle<TransferToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export const prepareComponentToken: GetDefaultToken<'Transfer'> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export default genStyleHooks(
  'Transfer',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
);
