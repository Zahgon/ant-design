import { unit } from '@ant-design/cssinjs';
import type { CSSObject } from '@ant-design/cssinjs';

import { genFocusOutline, genFocusStyle, resetComponent, textEllipsis } from '../../style';
import { slideDownIn, slideDownOut, slideUpIn, slideUpOut } from '../../style/motion';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';
import genMotionStyle from './motion';

export interface ComponentToken {
  /**
   * @desc 下拉菜单 z-index
   * @descEN z-index of dropdown menu
   */
  zIndexPopup: number;
  /**
   * @desc 卡片标签页背景色
   * @descEN Background color of card tab
   */
  cardBg: string;
  /**
   * @desc 卡片标签页高度
   * @descEN Height of card tab
   */
  cardHeight: number;
  /**
   * @desc 小尺寸卡片标签页高度
   * @descEN Height of small card tab
   */
  cardHeightSM: number;
  /**
   * @desc 大尺寸卡片标签页高度
   * @descEN Height of large card tab
   */
  cardHeightLG: number;
  /**
   * @desc 卡片标签页内间距
   * @descEN Padding of card tab
   */
  cardPadding: string;
  /**
   * @desc 小号卡片标签页内间距
   * @descEN Padding of small card tab
   */
  cardPaddingSM: string;
  /**
   * @desc 大号卡片标签页内间距
   * @descEN Padding of large card tab
   */
  cardPaddingLG: string;
  /**
   * @desc 标签页标题文本大小
   * @descEN Font size of title
   */
  titleFontSize: number;
  /**
   * @desc 大号标签页标题文本大小
   * @descEN Font size of large title
   */
  titleFontSizeLG: number;
  /**
   * @desc 小号标签页标题文本大小
   * @descEN Font size of small title
   */
  titleFontSizeSM: number;
  /**
   * @desc 指示条颜色
   * @descEN Color of indicator
   */
  inkBarColor: string;
  /**
   * @desc 横向标签页外间距
   * @descEN Horizontal margin of horizontal tab
   */
  horizontalMargin: string;
  /**
   * @desc 横向标签页标签间距
   * @descEN Horizontal gutter of horizontal tab
   */
  horizontalItemGutter: number;
  /**
   * @desc 横向标签页标签外间距
   * @descEN Horizontal margin of horizontal tab item
   */
  horizontalItemMargin: string;
  /**
   * @desc 横向标签页标签外间距（RTL）
   * @descEN Horizontal margin of horizontal tab item (RTL)
   */
  horizontalItemMarginRTL: string;
  /**
   * @desc 横向标签页标签内间距
   * @descEN Horizontal padding of horizontal tab item
   */
  horizontalItemPadding: string;
  /**
   * @desc 大号横向标签页标签内间距
   * @descEN Horizontal padding of large horizontal tab item
   */
  horizontalItemPaddingLG: string;
  /**
   * @desc 小号横向标签页标签内间距
   * @descEN Horizontal padding of small horizontal tab item
   */
  horizontalItemPaddingSM: string;
  /**
   * @desc 纵向标签页标签内间距
   * @descEN Vertical padding of vertical tab item
   */
  verticalItemPadding: string;
  /**
   * @desc 纵向标签页标签外间距
   * @descEN Vertical margin of vertical tab item
   */
  verticalItemMargin: string;
  /**
   * @desc 标签文本颜色
   * @descEN Text color of tab
   */
  itemColor: string;
  /**
   * @desc 标签激活态文本颜色
   * @descEN Text color of active tab
   */
  itemActiveColor: string;
  /**
   * @desc 标签悬浮态文本颜色
   * @descEN Text color of hover tab
   */
  itemHoverColor: string;
  /**
   * @desc 标签选中态文本颜色
   * @descEN Text color of selected tab
   */
  itemSelectedColor: string;
  /**
   * @desc 卡片标签间距
   * @descEN Gutter of card tab
   */
  cardGutter: number;
}

export interface TabsToken extends FullToken<'Tabs'> {
  tabsCardPadding: string;
  dropdownEdgeChildVerticalPadding: number;
  tabsNavWrapPseudoWidth: number;
  tabsDropdownHeight: number | string;
  tabsDropdownWidth: number | string;
  tabsHorizontalItemMargin: string;
  tabsHorizontalItemMarginRTL: string;
}

const genCardStyle: GenerateStyle<TabsToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genDropdownStyle: GenerateStyle<TabsToken, CSSObject> = (token) => {
  const { antCls, componentCls, itemHoverColor, dropdownEdgeChildVerticalPadding } = token;
  return {
    [`${componentCls}-dropdown`]: {
      ...resetComponent(token),

      position: 'absolute',
      top: -9999,
      left: {
        _skip_check_: true,
        value: -9999,
      },
      zIndex: token.zIndexPopup,
      display: 'block',

      '&-hidden': {
        display: 'none',
      },

      // When position is not enough for tabs dropdown, the placement will revert.
      // We will handle this with revert motion name.
      [`&${antCls}-slide-down-enter${antCls}-slide-down-enter-active${componentCls}-dropdown-placement-bottomLeft,
        &${antCls}-slide-down-appear${antCls}-slide-down-appear-active${componentCls}-dropdown-placement-bottomLeft,
        &${antCls}-slide-down-enter${antCls}-slide-down-enter-active${componentCls}-dropdown-placement-bottom,
        &${antCls}-slide-down-appear${antCls}-slide-down-appear-active${componentCls}-dropdown-placement-bottom,
        &${antCls}-slide-down-enter${antCls}-slide-down-enter-active${componentCls}-dropdown-placement-bottomRight,
        &${antCls}-slide-down-appear${antCls}-slide-down-appear-active${componentCls}-dropdown-placement-bottomRight`]:
        {
          animationName: slideUpIn,
        },

      [`&${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-dropdown-placement-topLeft,
        &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-dropdown-placement-topLeft,
        &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-dropdown-placement-top,
        &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-dropdown-placement-top,
        &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-dropdown-placement-topRight,
        &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-dropdown-placement-topRight`]:
        {
          animationName: slideDownIn,
        },

      [`&${antCls}-slide-down-leave${antCls}-slide-down-leave-active${componentCls}-dropdown-placement-bottomLeft,
        &${antCls}-slide-down-leave${antCls}-slide-down-leave-active${componentCls}-dropdown-placement-bottom,
        &${antCls}-slide-down-leave${antCls}-slide-down-leave-active${componentCls}-dropdown-placement-bottomRight`]:
        {
          animationName: slideUpOut,
        },

      [`&${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-dropdown-placement-topLeft,
        &${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-dropdown-placement-top,
        &${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-dropdown-placement-topRight`]:
        {
          animationName: slideDownOut,
        },

      [`${componentCls}-dropdown-menu`]: {
        maxHeight: token.tabsDropdownHeight,
        margin: 0,
        padding: `${unit(dropdownEdgeChildVerticalPadding)} 0`,
        overflowX: 'hidden',
        overflowY: 'auto',
        textAlign: {
          _skip_check_: true,
          value: 'left',
        },
        listStyleType: 'none',
        backgroundColor: token.colorBgContainer,
        backgroundClip: 'padding-box',
        borderRadius: token.borderRadiusLG,
        outline: 'none',
        boxShadow: token.boxShadowSecondary,

        '&-item': {
          ...textEllipsis,
          display: 'flex',
          alignItems: 'center',
          minWidth: token.tabsDropdownWidth,
          margin: 0,
          padding: `${unit(token.paddingXXS)} ${unit(token.paddingSM)}`,
          color: token.colorText,
          fontWeight: 'normal',
          fontSize: token.fontSize,
          lineHeight: token.lineHeight,
          cursor: 'pointer',
          transition: `all ${token.motionDurationSlow}`,

          '> span': {
            flex: 1,
            whiteSpace: 'nowrap',
          },

          '&-remove': {
            flex: 'none',
            marginLeft: {
              _skip_check_: true,
              value: token.marginSM,
            },
            color: token.colorIcon,
            fontSize: token.fontSizeSM,
            background: 'transparent',
            border: 0,
            cursor: 'pointer',

            '&:hover': {
              color: itemHoverColor,
            },
          },

          '&:hover': {
            background: token.controlItemBgHover,
          },

          '&-disabled': {
            '&, &:hover': {
              color: token.colorTextDisabled,
              background: 'transparent',
              cursor: 'not-allowed',
            },
          },
        },
      },
    },
  };
};

const genPositionStyle: GenerateStyle<TabsToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genSizeStyle: GenerateStyle<TabsToken, CSSObject> = (token) => {
  const {
    componentCls,
    cardPaddingSM,
    cardPaddingLG,
    cardHeightSM,
    cardHeightLG,
    horizontalItemPaddingSM,
    horizontalItemPaddingLG,
  } = token;
  return {
    // >>>>> shared
    [componentCls]: {
      '&-small': {
        [`> ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            padding: horizontalItemPaddingSM,
            fontSize: token.titleFontSizeSM,
          },
        },
      },

      '&-large': {
        [`> ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            padding: horizontalItemPaddingLG,
            fontSize: token.titleFontSizeLG,
            lineHeight: token.lineHeightLG,
          },
        },
      },
    },

    // >>>>> card
    [`${componentCls}-card`]: {
      // Small
      [`&${componentCls}-small`]: {
        [`> ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            padding: cardPaddingSM,
          },
          [`${componentCls}-nav-add`]: {
            minWidth: cardHeightSM,
            minHeight: cardHeightSM,
          },
        },
        [`&${componentCls}-bottom`]: {
          [`> ${componentCls}-nav ${componentCls}-tab`]: {
            borderRadius: `0 0 ${unit(token.borderRadius)} ${unit(token.borderRadius)}`,
          },
        },
        [`&${componentCls}-top`]: {
          [`> ${componentCls}-nav ${componentCls}-tab`]: {
            borderRadius: `${unit(token.borderRadius)} ${unit(token.borderRadius)} 0 0`,
          },
        },
        [`&${componentCls}-right`]: {
          [`> ${componentCls}-nav ${componentCls}-tab`]: {
            borderRadius: {
              _skip_check_: true,
              value: `0 ${unit(token.borderRadius)} ${unit(token.borderRadius)} 0`,
            },
          },
        },
        [`&${componentCls}-left`]: {
          [`> ${componentCls}-nav ${componentCls}-tab`]: {
            borderRadius: {
              _skip_check_: true,
              value: `${unit(token.borderRadius)} 0 0 ${unit(token.borderRadius)}`,
            },
          },
        },
      },

      // Large
      [`&${componentCls}-large`]: {
        [`> ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            padding: cardPaddingLG,
          },
          [`${componentCls}-nav-add`]: {
            minWidth: cardHeightLG,
            minHeight: cardHeightLG,
          },
        },
      },
    },
  };
};

const genTabStyle: GenerateStyle<TabsToken, CSSObject> = (token) => {
  const {
    componentCls,
    itemActiveColor,
    itemHoverColor,
    iconCls,
    tabsHorizontalItemMargin,
    horizontalItemPadding,
    itemSelectedColor,
    itemColor,
  } = token;

  const tabCls = `${componentCls}-tab`;

  return {
    [tabCls]: {
      position: 'relative',
      WebkitTouchCallout: 'none',
      WebkitTapHighlightColor: 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      padding: horizontalItemPadding,
      fontSize: token.titleFontSize,
      background: 'transparent',
      border: 0,
      outline: 'none',
      cursor: 'pointer',
      color: itemColor,

      '&-btn, &-remove': {
        '&:focus:not(:focus-visible), &:active': {
          color: itemActiveColor,
        },
      },

      '&-btn': {
        outline: 'none',
        transition: `all ${token.motionDurationSlow}`,
        [`${tabCls}-icon:not(:last-child)`]: {
          marginInlineEnd: token.marginSM,
        },
      },

      '&-remove': {
        flex: 'none',
        lineHeight: 1,
        marginRight: {
          _skip_check_: true,
          value: token.calc(token.marginXXS).mul(-1).equal(),
        },
        marginLeft: {
          _skip_check_: true,
          value: token.marginXS,
        },
        color: token.colorIcon,
        fontSize: token.fontSizeSM,
        background: 'transparent',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        transition: `all ${token.motionDurationSlow}`,
        '&:hover': {
          color: token.colorTextHeading,
        },
        ...genFocusStyle(token),
      },

      '&:hover': {
        color: itemHoverColor,
      },

      [`&${tabCls}-active ${tabCls}-btn`]: {
        color: itemSelectedColor,
      },

      [`&${tabCls}-focus ${tabCls}-btn:focus-visible`]: genFocusOutline(token),

      [`&${tabCls}-disabled`]: {
        color: token.colorTextDisabled,
        cursor: 'not-allowed',
      },

      [`&${tabCls}-disabled ${tabCls}-btn, &${tabCls}-disabled ${componentCls}-remove`]: {
        '&:focus, &:active': {
          color: token.colorTextDisabled,
        },
      },

      [`& ${tabCls}-remove ${iconCls}`]: {
        margin: 0,
        verticalAlign: 'middle',
      },

      [`${iconCls}:not(:last-child)`]: {
        marginRight: {
          _skip_check_: true,
          value: token.marginSM,
        },
      },
    },

    [`${tabCls} + ${tabCls}`]: {
      margin: {
        _skip_check_: true,
        value: tabsHorizontalItemMargin,
      },
    },
  };
};

const genRtlStyle: GenerateStyle<TabsToken, CSSObject> = (token) => {
  const { componentCls, tabsHorizontalItemMarginRTL, iconCls, cardGutter, calc } = token;
  const rtlCls = `${componentCls}-rtl`;
  return {
    [rtlCls]: {
      direction: 'rtl',

      [`${componentCls}-nav`]: {
        [`${componentCls}-tab`]: {
          margin: {
            _skip_check_: true,
            value: tabsHorizontalItemMarginRTL,
          },

          [`${componentCls}-tab:last-of-type`]: {
            marginLeft: {
              _skip_check_: true,
              value: 0,
            },
          },

          [iconCls]: {
            marginRight: {
              _skip_check_: true,
              value: 0,
            },
            marginLeft: {
              _skip_check_: true,
              value: token.marginSM,
            },
          },

          [`${componentCls}-tab-remove`]: {
            marginRight: {
              _skip_check_: true,
              value: token.marginXS,
            },
            marginLeft: {
              _skip_check_: true,
              value: calc(token.marginXXS).mul(-1).equal(),
            },

            [iconCls]: {
              margin: 0,
            },
          },
        },
      },

      [`&${componentCls}-left`]: {
        [`> ${componentCls}-nav`]: {
          order: 1,
        },

        [`> ${componentCls}-body-holder`]: {
          order: 0,
        },
      },

      [`&${componentCls}-right`]: {
        [`> ${componentCls}-nav`]: {
          order: 0,
        },

        [`> ${componentCls}-body-holder`]: {
          order: 1,
        },
      },

      // ====================== Card ======================
      [`&${componentCls}-card${componentCls}-top, &${componentCls}-card${componentCls}-bottom`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab + ${componentCls}-tab`]: {
            marginRight: {
              _skip_check_: true,
              value: cardGutter,
            },
            marginLeft: { _skip_check_: true, value: 0 },
          },
        },
      },
    },

    [`${componentCls}-dropdown-rtl`]: {
      direction: 'rtl',
    },

    [`${componentCls}-menu-item`]: {
      [`${componentCls}-dropdown-rtl`]: {
        textAlign: {
          _skip_check_: true,
          value: 'right',
        },
      },
    },
  };
};

const genTabsStyle: GenerateStyle<TabsToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export const prepareComponentToken: GetDefaultToken<'Tabs'> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export default genStyleHooks(
  'Tabs',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
);
