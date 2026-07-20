import * as React from 'react';
import { useMemo } from 'react';

import { useLocale } from '../locale';
import { useToken } from '../theme/internal';
import { getAsSolidColor } from './utils';

const Simple: React.FC = () => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  Simple.displayName = 'SimpleImage';
}

export default Simple;
