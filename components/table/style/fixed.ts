import type { CSSObject } from '@ant-design/cssinjs';

import type { GenerateStyle } from '../../theme/internal';
import type { TableToken } from './index';

export function getShadowStyle({
  colorSplit: shadowColor,
}: Pick<TableToken, 'colorSplit'>): [left: CSSObject, right: CSSObject] {
  const leftShadowStyle: CSSObject = { boxShadow: `inset 10px 0 8px -8px ${shadowColor}` };

  const rightShadowStyle: CSSObject = {
    boxShadow: `inset -10px 0 8px -8px ${shadowColor}`,
  };

  return [leftShadowStyle, rightShadowStyle];
}

const genFixedStyle: GenerateStyle<TableToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export default genFixedStyle;
