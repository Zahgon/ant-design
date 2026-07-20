import { generate, presetPalettes, presetPrimaryColors } from '@ant-design/colors';

import type { MapToken, PresetColorType, SeedToken } from '../../interface';
import { defaultPresetColors } from '../seed';
import genColorMapToken from '../shared/genColorMapToken';
import genCommonMapToken from '../shared/genCommonMapToken';
import genControlHeight from '../shared/genControlHeight';
import genFontMapToken from '../shared/genFontMapToken';
import genSizeMapToken from '../shared/genSizeMapToken';
import { generateColorPalettes, generateNeutralColorPalettes } from './colors';

export default function derivative(token: SeedToken): MapToken {
    throw new Error("STUB");
}
