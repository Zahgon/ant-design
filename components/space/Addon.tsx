import React from 'react';
import { clsx } from 'clsx';

import { getStatusClassNames } from '../_util/statusUtils';
import type { InputStatus } from '../_util/statusUtils';
import { ConfigContext } from '../config-provider';
import type { Variant } from '../config-provider';
import { useCompactItemContext } from './Compact';
import useStyle from './style/addon';

export interface SpaceCompactCellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  prefixCls?: string;
  variant?: Variant;
  disabled?: boolean;
  status?: InputStatus;
}

const SpaceAddon = React.forwardRef<HTMLDivElement, SpaceCompactCellProps>((props, ref) => {
    throw new Error("STUB");
});

export default SpaceAddon;
