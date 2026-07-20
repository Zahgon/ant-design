import * as React from 'react';
import { getNodeRef, supportNodeRef, useComposeRef } from '@rc-component/util';

import ContextIsolator from '../_util/ContextIsolator';
import type { MenuProps } from './menu';

// Used for Dropdown only
export interface OverrideContextProps {
  prefixCls?: string;
  expandIcon?: React.ReactNode;
  mode?: MenuProps['mode'];
  selectable?: boolean;
  validator?: (menuProps: Pick<MenuProps, 'mode'>) => void;
  onClick?: () => void;
  rootClassName?: string;
}

const OverrideContext = React.createContext<OverrideContextProps | null>(null);

/** @internal Only used for Dropdown component. Do not use this in your production. */
export const OverrideProvider = React.forwardRef<
  HTMLElement,
  OverrideContextProps & { children: React.ReactNode }
>((props, ref) => {
    throw new Error("STUB");
});

/** @internal Only used for Dropdown component. Do not use this in your production. */
export default OverrideContext;
