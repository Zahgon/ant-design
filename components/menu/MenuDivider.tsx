import * as React from 'react';
import { Divider } from '@rc-component/menu';
import { clsx } from 'clsx';

import { ConfigContext } from '../config-provider';

export interface MenuDividerProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string;
  prefixCls?: string;
  style?: React.CSSProperties;
  dashed?: boolean;
}

const MenuDivider: React.FC<MenuDividerProps> = (props) => {
    throw new Error("STUB");
};

export default MenuDivider;
