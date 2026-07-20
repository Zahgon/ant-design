import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';

import {
  genBasicInputStyle,
  genPlaceholderStyle,
  initComponentToken,
  initInputToken,
} from '../../input/style';
import type { SharedComponentToken, SharedInputToken } from '../../input/style/token';
import {
  genBorderlessStyle,
  genDisabledStyle,
  genFilledStyle,
  genOutlinedStyle,
  genUnderlinedStyle,
} from '../../input/style/variants';
import { resetComponent, textEllipsis } from '../../style';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';
import { genCssVar } from '../../theme/util/genStyleUtils';

export interface ComponentToken extends SharedComponentToken {
  /**
   * @desc 弹层 z-index
   * @descEN z-index of popup
   */
  zIndexPopup: number;
  /**
   * @desc 弹层高度
   * @descEN Height of popup
   */
  dropdownHeight: number | string;
  /**
   * @desc 菜单项高度
   * @descEN Height of menu item
   */
  controlItemWidth: number | string;
}

/**
 * @desc Mentions 组件的 Token
 * @descEN Token for Mentions component
 */
type MentionsToken = FullToken<'Mentions'> &
  SharedInputToken & {
    /**
     * @desc 菜单项内边距
     * @descEN Padding of menu item
     */
    itemPaddingVertical: string | number;
  };

// ============================= Mentions =============================
const genDropdownStyle: GenerateStyle<MentionsToken, CSSObject> = (token) => {
  const {
    componentCls,
    fontSize,
    paddingXXS,
    colorBgElevated,
    borderRadiusLG,
    boxShadowSecondary,
    itemPaddingVertical,
    controlPaddingHorizontal,
    colorText,
    borderRadius,
    lineHeight,
    colorTextDisabled,
    controlItemBgHover,
    motionDurationSlow,
  } = token;
  return {
    [componentCls]: {
      // ================== Dropdown ==================
      '&-dropdown': {
        // Ref select dropdown style
        ...resetComponent(token),

        position: 'absolute',
        top: -9999,
        insetInlineStart: -9999,
        zIndex: token.zIndexPopup,
        boxSizing: 'border-box',
        fontSize,
        fontVariant: 'initial',
        padding: paddingXXS,
        backgroundColor: colorBgElevated,
        borderRadius: borderRadiusLG,
        outline: 'none',
        boxShadow: boxShadowSecondary,

        '&-hidden': {
          display: 'none',
        },

        [`${componentCls}-dropdown-menu`]: {
          maxHeight: token.dropdownHeight,
          margin: 0,
          paddingInlineStart: 0, // Override default ul/ol
          overflow: 'auto',
          listStyle: 'none',
          outline: 'none',

          '&-item': {
            ...textEllipsis,
            position: 'relative',
            display: 'block',
            minWidth: token.controlItemWidth,
            padding: `${unit(itemPaddingVertical)} ${unit(controlPaddingHorizontal)}`,
            color: colorText,
            borderRadius,
            fontWeight: 'normal',
            lineHeight,
            cursor: 'pointer',
            transition: `background-color ${motionDurationSlow} ease`,

            '&:hover': {
              backgroundColor: controlItemBgHover,
            },

            '&-disabled': {
              color: colorTextDisabled,
              cursor: 'not-allowed',

              '&:hover': {
                color: colorTextDisabled,
                backgroundColor: controlItemBgHover,
                cursor: 'not-allowed',
              },
            },

            '&-selected': {
              color: colorText,
              fontWeight: token.fontWeightStrong,
              backgroundColor: controlItemBgHover,
            },

            '&-active': {
              backgroundColor: controlItemBgHover,
            },
          },
        },
      },
    },
  };
};

const genMentionsStyle: GenerateStyle<MentionsToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ============================== Tokens ==============================
export const prepareComponentToken: GetDefaultToken<'Mentions'> = (token) => { throw new Error("STUB"); };

// ============================== Export ==============================
export default genStyleHooks(
  'Mentions',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
);
