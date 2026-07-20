import type { CSSObject } from '@ant-design/cssinjs';

import { genComponentStyleHook } from '../../theme/internal';
import type { FullToken, GenerateStyle } from '../../theme/internal';
import { genCssVar } from '../../theme/util/genStyleUtils';

// biome-ignore lint/suspicious/noEmptyInterface: ComponentToken need to be empty by default
export interface ComponentToken {}

export interface WaveToken extends FullToken<'Wave'> {}

const genWaveStyle: GenerateStyle<WaveToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export default genComponentStyleHook('Wave', genWaveStyle);
