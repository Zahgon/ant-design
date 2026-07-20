import * as React from 'react';
import { clsx } from 'clsx';

import { genCssVar } from '../theme/util/genStyleUtils';

export interface ProgressIconProps {
  prefixCls: string;
  rootPrefixCls: string;
  percent: number;
}

const ProgressIcon: React.FC<React.PropsWithChildren<ProgressIconProps>> = (props) => {
    throw new Error("STUB");
};

export default ProgressIcon;
