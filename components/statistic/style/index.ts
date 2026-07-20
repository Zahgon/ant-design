import type { CSSObject } from '@ant-design/cssinjs';

import { resetComponent } from '../../style';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';

export interface ComponentToken {
  /**
   * @desc 标题字体大小
   * @descEN Title font size
   */
  titleFontSize: number;
  /**
   * @desc 内容字体大小
   * @descEN Content font size
   */
  contentFontSize: number | string;
}

interface StatisticToken extends FullToken<'Statistic'> {}

const genStatisticStyle: GenerateStyle<StatisticToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export const prepareComponentToken: GetDefaultToken<'Statistic'> = (token) => {
    throw new Error("STUB");
};

export default genStyleHooks(
  'Statistic',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
);
