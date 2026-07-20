import * as React from 'react';
import type { MenuItemProps as RcMenuItemProps } from '@rc-component/menu';
import { Item } from '@rc-component/menu';
import { omit, toArray } from '@rc-component/util';
import { clsx } from 'clsx';

import { isFunction } from '../_util/is';
import { cloneElement } from '../_util/reactNode';
import type { SiderContextProps } from '../layout/Sider';
import { SiderContext } from '../layout/Sider';
import type { TooltipProps, TooltipSemanticType } from '../tooltip';
import Tooltip from '../tooltip';
import type { MenuContextProps } from './MenuContext';
import MenuContext from './MenuContext';

export interface MenuItemProps extends Omit<RcMenuItemProps, 'title'> {
  icon?: React.ReactNode;
  danger?: boolean;
  title?: React.ReactNode;
}

type MenuItemComponent = React.FC<MenuItemProps>;

type RestArgs<T> = T extends (arg: any, ...args: infer P) => any ? P : never;

type GenericProps<T = unknown> = T extends infer U extends MenuItemProps
  ? unknown extends U
    ? MenuItemProps
    : U
  : MenuItemProps;

type GenericComponent = Omit<MenuItemComponent, ''> &
  (<T extends MenuItemProps>(
    props: GenericProps<T>,
    ...args: RestArgs<MenuItemComponent>
  ) => ReturnType<MenuItemComponent>);

const MenuItem: GenericComponent = (props) => {
    throw new Error("STUB");
};

export default MenuItem;
