import type { CSSObject } from '@ant-design/cssinjs';

import { operationUnit } from '../../style';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks } from '../../theme/internal';
import {
  getCopyableStyles,
  getEditableStyles,
  getEllipsisStyles,
  getLinkStyles,
  getResetStyles,
  getTitleStyles,
} from './mixins';

/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
  /**
   * @desc 标题上间距
   * @descEN Margin top of title
   */
  titleMarginTop: number | string;
  /**
   * @desc 标题下间距
   * @descEN Margin bottom of title
   */
  titleMarginBottom: number | string;
}

export type TypographyToken = FullToken<'Typography'>;

const genTypographyStyle: GenerateStyle<TypographyToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export const prepareComponentToken: GetDefaultToken<'Typography'> = () => { throw new Error("STUB"); };

// ============================== Export ==============================
export default genStyleHooks('Typography', genTypographyStyle, prepareComponentToken);
