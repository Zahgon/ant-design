import * as React from 'react';
import { useMemo } from 'react';

import { useLocale } from '../locale';
import { useToken } from '../theme/internal';
import { getAsSolidColor } from './utils';

const Empty: React.FC = () => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  Empty.displayName = 'EmptyImage';
}

export default Empty;
