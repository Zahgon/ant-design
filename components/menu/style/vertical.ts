import { unit } from '@ant-design/cssinjs';
import type { CSSObject } from '@ant-design/cssinjs';

import type { MenuToken } from '.';
import { textEllipsis } from '../../style';
import type { GenerateStyle } from '../../theme/internal';

const getVerticalInlineStyle: GenerateStyle<MenuToken, CSSObject> = (token) => {
  const {
    componentCls,
    itemHeight,
    itemMarginInline,
    padding,
    menuArrowSize,
    marginXS,
    itemMarginBlock,
    itemWidth,
    itemPaddingInline,
  } = token;

  const paddingWithArrow = token.calc(menuArrowSize).add(padding).add(marginXS).equal();

  return {
    [`${componentCls}-item`]: {
      position: 'relative',
      overflow: 'hidden',
    },

    [`${componentCls}-item, ${componentCls}-submenu-title`]: {
      height: itemHeight,
      lineHeight: unit(itemHeight),
      paddingInline: itemPaddingInline,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      marginInline: itemMarginInline,
      marginBlock: itemMarginBlock,
      width: itemWidth,
    },

    [`> ${componentCls}-item,
            > ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
      height: itemHeight,
      lineHeight: unit(itemHeight),
    },

    [`${componentCls}-item-group-list ${componentCls}-submenu-title,
            ${componentCls}-submenu-title`]: {
      paddingInlineEnd: paddingWithArrow,
    },
  };
};

const getVerticalStyle: GenerateStyle<MenuToken> = (token) => {
    throw new Error("STUB");
};

export default getVerticalStyle;
