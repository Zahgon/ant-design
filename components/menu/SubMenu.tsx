import * as React from 'react';
import { SubMenu as RcSubMenu, useFullPath } from '@rc-component/menu';
import { omit } from '@rc-component/util';
import { clsx } from 'clsx';

import { useZIndex } from '../_util/hooks';
import { cloneElement } from '../_util/reactNode';
import type { SubMenuType } from './interface';
import type { MenuContextProps } from './MenuContext';
import MenuContext from './MenuContext';

export interface SubMenuProps extends Omit<SubMenuType, 'ref' | 'key' | 'children' | 'label'> {
  title?: React.ReactNode;
  children?: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
    throw new Error("STUB");
};

export default SubMenu;
