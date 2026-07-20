import { unit } from '@ant-design/cssinjs';
import type { CSSObject } from '@ant-design/cssinjs';

import { resetComponent } from '../../style';
import { initFadeMotion, initZoomMotion } from '../../style/motion';
import type { ArrowOffsetToken } from '../../style/placementArrow';
import getArrowStyle, {
  getArrowOffsetToken,
  MAX_VERTICAL_CONTENT_RADIUS,
} from '../../style/placementArrow';
import type { ArrowToken } from '../../style/roundedArrow';
import { getArrowToken } from '../../style/roundedArrow';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genPresetColor, genStyleHooks, mergeToken } from '../../theme/internal';
import { genCssVar } from '../../theme/util/genStyleUtils';

export interface ComponentToken extends ArrowOffsetToken, ArrowToken {
  /**
   * @since 6.2.0
   * @desc 文字提示最大宽度
   * @descEN Max width of tooltip
   */
  maxWidth: number;
  /**
   * @desc 文字提示 z-index
   * @descEN z-index of tooltip
   */
  zIndexPopup: number;
}

interface TooltipToken extends FullToken<'Tooltip'> {
  // default variables
  tooltipMaxWidth: number;
  tooltipColor: string;
  tooltipBg: string;
  tooltipBorderRadius: number;
}

const FALL_BACK_ORIGIN = '50%';

const genTooltipStyle: GenerateStyle<TooltipToken> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export const prepareComponentToken: GetDefaultToken<'Tooltip'> = (token) => { throw new Error("STUB"); };

export default (prefixCls: string, rootCls: string, injectStyle = true) => {
    throw new Error("STUB");
};
