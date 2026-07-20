import * as React from 'react';
import { clsx } from 'clsx';

import { isNonNullable } from '../_util/is';
import { ConfigContext } from '../config-provider';
import type { DropdownProps } from '../dropdown/dropdown';
import Dropdown from '../dropdown/dropdown';
import type { ItemType } from './Breadcrumb';
import BreadcrumbContext from './BreadcrumbContext';
import BreadcrumbSeparator from './BreadcrumbSeparator';
import { renderItem } from './useItemRender';

export interface SeparatorType {
  separator?: React.ReactNode;
  key?: React.Key;
}

type MenuType = NonNullable<DropdownProps['menu']>;

interface MenuItem {
  key?: React.Key;
  title?: React.ReactNode;
  label?: React.ReactNode;
  path?: string;
  href?: string;
}

export interface BreadcrumbItemProps extends SeparatorType {
  prefixCls?: string;
  href?: string;
  menu?: Omit<MenuType, 'items'> & {
    items?: MenuItem[];
  };
  dropdownProps?: DropdownProps;
  dropdownIcon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const InternalBreadcrumbItem: React.FC<BreadcrumbItemProps> = (props) => {
    throw new Error("STUB");
};

type CompoundedComponent = React.FC<BreadcrumbItemProps> & {
  /** @internal */
  __ANT_BREADCRUMB_ITEM: boolean;
};

const BreadcrumbItem: CompoundedComponent = (props) => {
    throw new Error("STUB");
};

BreadcrumbItem.__ANT_BREADCRUMB_ITEM = true;

export default BreadcrumbItem;
