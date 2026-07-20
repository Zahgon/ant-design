import { generate } from '@ant-design/colors';
import type { DerivativeFunc } from '@ant-design/cssinjs';

import type { MapToken, PresetColorType, SeedToken } from '../../interface';
import { PresetColors } from '../../interface/presetColors';
import defaultAlgorithm from '../default';
import { defaultPresetColors } from '../seed';
import genColorMapToken from '../shared/genColorMapToken';
import { generateColorPalettes, generateNeutralColorPalettes } from './colors';

const derivative: DerivativeFunc<SeedToken, MapToken> = (token, mapToken) => {
    throw new Error("STUB");
};

export default derivative;
