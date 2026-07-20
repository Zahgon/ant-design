import type { CSSObject } from '@ant-design/cssinjs';
import { Keyframes, unit } from '@ant-design/cssinjs';

import { resetComponent } from '../../style';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks } from '../../theme/internal';

export interface ComponentToken {
  /**
   * @desc 指示点宽度
   * @descEN Width of indicator
   */
  dotWidth: number | string;
  /**
   * @desc 指示点高度
   * @descEN Height of indicator
   */
  dotHeight: number | string;
  /**
   * @desc 指示点之间的间距
   * @descEN gap between indicator
   */
  dotGap: number;
  /**
   * @desc 指示点距离边缘的距离
   * @descEN dot offset to Carousel edge
   */
  dotOffset: number;
  /** @deprecated Use `dotActiveWidth` instead. */
  dotWidthActive: number;
  /**
   * @desc 激活态指示点宽度
   * @descEN Width of active indicator
   */
  dotActiveWidth: number | string;
  /**
   * @desc 切换箭头大小
   * @descEN Size of arrows
   */
  arrowSize: number;
  /**
   * @desc 切换箭头边距
   * @descEN arrows offset to Carousel edge
   */
  arrowOffset: number;
}

interface CarouselToken extends FullToken<'Carousel'> {}

export const DotDuration = '--dot-duration';

const genCarouselStyle: GenerateStyle<CarouselToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genArrowsStyle: GenerateStyle<CarouselToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genDotsStyle: GenerateStyle<CarouselToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genCarouselVerticalStyle: GenerateStyle<CarouselToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genCarouselRtlStyle: GenerateStyle<CarouselToken> = (token) => {
    throw new Error("STUB");
};

export const prepareComponentToken: GetDefaultToken<'Carousel'> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export default genStyleHooks(
  'Carousel',
  (token) => { throw new Error("STUB"); },
  prepareComponentToken,
  {
    deprecatedTokens: [['dotWidthActive', 'dotActiveWidth']],
  },
);
