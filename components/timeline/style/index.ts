import type { CSSObject } from '@ant-design/cssinjs';

import { resetComponent } from '../../style';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';
import { genCssVar } from '../../theme/util/genStyleUtils';
import genHorizontalStyle from './horizontal';

export interface ComponentToken {
  /**
   * @desc 轨迹颜色
   * @descEN Line color
   */
  tailColor?: string;
  /**
   * @desc 轨迹宽度
   * @descEN Line width
   */
  tailWidth?: number | string;
  /**
   * @desc 节点边框宽度
   * @descEN Border width of node
   */
  dotBorderWidth?: number | string;
  /**
   * @desc 节点大小
   * @descEN Node size
   */
  dotSize?: number | string;
  /**
   * @desc 节点背景色
   * @descEN Background color of node
   */
  dotBg?: string;
  /**
   * @desc 时间项下间距
   * @descEN Bottom padding of item
   */
  itemPaddingBottom?: number;
}

export interface TimelineToken extends FullToken<'Timeline'> {
  itemHeadSize: number;
  customHeadPaddingVertical: number;
  paddingInlineEnd: number;
}

const genTimelineStyle: GenerateStyle<TimelineToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genVerticalStyle: GenerateStyle<TimelineToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export const prepareComponentToken: GetDefaultToken<'Timeline'> = (token) => { throw new Error("STUB"); };

export default genStyleHooks(
  'Timeline',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
);
