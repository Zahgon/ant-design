import type { DerivativeFunc } from '@ant-design/cssinjs';

import type { MapToken, SeedToken } from '../../interface';
import defaultAlgorithm from '../default';
import genControlHeight from '../shared/genControlHeight';
import genFontMapToken from '../shared/genFontMapToken';
import genCompactSizeMapToken from './genCompactSizeMapToken';

const derivative: DerivativeFunc<SeedToken, MapToken> = (token, mapToken) => {
    throw new Error("STUB");
};

export default derivative;
