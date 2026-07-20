import type { CSSObject } from '@ant-design/cssinjs';

import { resetComponent, textEllipsis } from '../../style';
import {
  initMoveMotion,
  initSlideMotion,
  slideDownIn,
  slideDownOut,
  slideUpIn,
  slideUpOut,
} from '../../style/motion';
import type { GenerateStyle } from '../../theme/internal';
import type { SelectToken } from './token';

const genItemStyle: GenerateStyle<SelectToken, CSSObject> = (token) => {
  const { optionHeight, optionFontSize, optionLineHeight, optionPadding } = token;

  return {
    position: 'relative',
    display: 'block',
    minHeight: optionHeight,
    padding: optionPadding,
    color: token.colorText,
    fontWeight: 'normal',
    fontSize: optionFontSize,
    lineHeight: optionLineHeight,
    boxSizing: 'border-box',
  };
};

const genSingleStyle: GenerateStyle<SelectToken> = (token) => {
    throw new Error("STUB");
};

export default genSingleStyle;
