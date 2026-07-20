import type { CSSObject } from '@ant-design/cssinjs';

import type { GenerateStyle } from '../../theme/internal';
import type { ButtonToken } from './token';

const genButtonBorderStyle = (buttonTypeCls: string, borderColor: string) => ({
  // Border
  [`> span, > ${buttonTypeCls}`]: {
    '&:not(:last-child)': {
      [`&, & > ${buttonTypeCls}`]: {
        '&:not(:disabled)': {
          borderInlineEndColor: borderColor,
        },
      },
    },

    '&:not(:first-child)': {
      [`&, & > ${buttonTypeCls}`]: {
        '&:not(:disabled)': {
          borderInlineStartColor: borderColor,
        },
      },
    },
  },
});

const genGroupStyle: GenerateStyle<ButtonToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export default genGroupStyle;
