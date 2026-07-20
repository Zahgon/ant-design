import type { CSSObject } from '@ant-design/cssinjs';

import type { FullToken, GenerateStyle } from '../../theme/internal';
import { genStyleHooks } from '../../theme/internal';

// biome-ignore lint/suspicious/noEmptyInterface: ComponentToken need to be empty by default
export interface ComponentToken {}

export interface MasonryToken extends FullToken<'Masonry'> {}

export const genMasonryStyle: GenerateStyle<MasonryToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export default genStyleHooks('Masonry', genMasonryStyle);
