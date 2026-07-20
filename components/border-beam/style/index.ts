import type { CSSObject } from '@ant-design/cssinjs';
import { Keyframes, unit } from '@ant-design/cssinjs';

import { genNoMotionRawStyle } from '../../style/motion';
import type { FullToken, GenerateStyle } from '../../theme/internal';
import { genStyleHooks } from '../../theme/internal';
import { genCssVar } from '../../theme/util/genStyleUtils';
import { DEFAULT_BORDER_BEAM_DURATION, MAX_BEAM_COLOR_STOP_PERCENT } from '../util';

export type ComponentToken = object;

interface BorderBeamToken extends FullToken<'BorderBeam'> {}

const genBorderBeamStyle: GenerateStyle<BorderBeamToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export default genStyleHooks('BorderBeam', genBorderBeamStyle);
