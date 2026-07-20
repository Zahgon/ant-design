import * as React from 'react';
import DownOutlined from '@ant-design/icons/DownOutlined';
import { pickAttrs, toArray } from '@rc-component/util';
import { clsx } from 'clsx';

import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { cloneElement } from '../_util/reactNode';
import type { AnyObject } from '../_util/type';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import type { DropdownProps } from '../dropdown';
import type { BreadcrumbContextProps } from './BreadcrumbContext';
import BreadcrumbContext from './BreadcrumbContext';
import type { BreadcrumbItemProps } from './BreadcrumbItem';
import { InternalBreadcrumbItem } from './BreadcrumbItem';
import BreadcrumbSeparator from './BreadcrumbSeparator';
import useStyle from './style';
import useItemRender from './useItemRender';
import useItems from './useItems';

export interface BreadcrumbItemType extends React.AriaAttributes {
  key?: React.Key;
  /**
   * Different with `path`. Directly set the link of this item.
   */
  href?: string;
  /**
   * Different with `href`. It will concat all prev `path` to the current one.
   */
  path?: string;
  title?: React.ReactNode;
  /** @deprecated Please use `title` instead */
  breadcrumbName?: string;
  menu?: BreadcrumbItemProps['menu'];
  className?: string;
  style?: React.CSSProperties;
  dropdownProps?: DropdownProps;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>;

  /** @deprecated Please use `menu` instead */
  children?: Omit<BreadcrumbItemType, 'children'>[];
  [key: `data-${string}`]: string;
}

export interface BreadcrumbSeparatorType {
  type: 'separator';
  separator?: React.ReactNode;
}

export type ItemType = Partial<BreadcrumbItemType & BreadcrumbSeparatorType>;

export type InternalRouteType = Partial<BreadcrumbItemType & BreadcrumbSeparatorType>;

export type BreadcrumbSemanticType = {
  classNames?: {
    root?: string;
    item?: string;
    separator?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    item?: React.CSSProperties;
    separator?: React.CSSProperties;
  };
};

export type BreadcrumbSemanticAllType<T extends AnyObject = AnyObject> = GenerateSemantic<
  BreadcrumbSemanticType,
  BreadcrumbProps<T>
>;

export interface BreadcrumbProps<T extends AnyObject = AnyObject> {
  prefixCls?: string;
  params?: T;
  separator?: React.ReactNode;
  dropdownIcon?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  rootClassName?: string;
  children?: React.ReactNode;

  /** @deprecated Please use `items` instead */
  routes?: ItemType[];

  items?: ItemType[];
  classNames?: BreadcrumbSemanticAllType<T>['classNamesAndFn'];
  styles?: BreadcrumbSemanticAllType<T>['stylesAndFn'];

  itemRender?: (route: ItemType, params: T, routes: ItemType[], paths: string[]) => React.ReactNode;
}

const getPath = <T extends AnyObject = AnyObject>(params: T, path?: string) => {
  if (path === undefined) {
    return path;
  }
  let mergedPath = (path || '').replace(/^\//, '');
  Object.keys(params).forEach((key) => {
      throw new Error("STUB");
  });
  return mergedPath;
};

const Breadcrumb = <T extends AnyObject = AnyObject>(props: BreadcrumbProps<T>) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  Breadcrumb.displayName = 'Breadcrumb';
}

export default Breadcrumb;
