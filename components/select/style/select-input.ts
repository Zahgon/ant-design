import { unit } from '@ant-design/cssinjs';
import type { CSSObject } from '@ant-design/cssinjs';

import { resetComponent, textEllipsis } from '../../style';
import type { GenerateStyle } from '../../theme/interface';
import { genCssVar } from '../../theme/util/genStyleUtils';
import genSelectInputCustomizeStyle from './select-input-customize';
import genSelectInputMultipleStyle from './select-input-multiple';
import type { SelectToken } from './token';

interface VariableColors {
  border: string;
  borderHover: string;
  borderActive: string;
  borderOutline: string;
  borderDisabled?: string;

  background?: string;
  backgroundHover?: string;
  backgroundActive?: string;
  backgroundDisabled?: string;

  color?: string;
  affixColor?: string;
}

/** Set CSS variables and hover/focus styles for a Select input based on provided colors. */
const genSelectInputVariableStyle = (token: SelectToken, colors: VariableColors): CSSObject => {
  const { componentCls, antCls } = token;

  const [varName] = genCssVar(antCls, 'select');

  const { border, borderHover, borderActive, borderOutline } = colors;

  const baseBG = colors.background || token.selectorBg || token.colorBgContainer;

  return {
    [varName('border-color')]: border,
    [varName('background-color')]: baseBG,
    [varName('affix-color')]: colors.affixColor,

    [`&:not(${componentCls}-disabled)`]: {
      '&:hover': {
        [varName('border-color')]: borderHover,
        [varName('background-color')]: colors.backgroundHover || baseBG,
      },

      [`&${componentCls}-focused`]: {
        [varName('border-color')]: borderActive,
        [varName('background-color')]: colors.backgroundActive || baseBG,

        boxShadow: `0 0 0 ${unit(token.controlOutlineWidth)} ${borderOutline}`,
      },
    },

    [`&${componentCls}-disabled`]: {
      [varName('border-color')]: colors.borderDisabled || colors.border,
      [varName('background-color')]: colors.backgroundDisabled || colors.background,
    },
  };
};

/** Generate variant-scoped variable styles and status overrides for a Select input */
const genSelectInputVariantStyle = (
  token: SelectToken,
  variant: string,
  colors: VariableColors,
  errorColors: Partial<VariableColors>,
  warningColors: Partial<VariableColors>,
  patchStyle?: CSSObject,
): CSSObject => {
  const { componentCls } = token;
  return {
    [`&${componentCls}-${variant}`]: [
      genSelectInputVariableStyle(token, colors),
      {
        [`&${componentCls}-status-error`]: genSelectInputVariableStyle(token, {
          ...colors,
          ...errorColors,
        }),
        [`&${componentCls}-status-warning`]: genSelectInputVariableStyle(token, {
          ...colors,
          ...warningColors,
        }),
      },
      patchStyle,
    ],
  };
};

const genSelectInputFocusVisibleStyle = (token: SelectToken, outlineColor: string): CSSObject => ({
  outline: `${unit(token.lineWidth)} ${token.lineType} ${outlineColor}`,
  outlineOffset: unit(token.calc(token.lineWidth).mul(-1).equal()),
  transition: [`outline-offset`, `outline`].map((prop) => { throw new Error("STUB"); }).join(', '),
});

const genSelectInputStyle: GenerateStyle<SelectToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export default genSelectInputStyle;
