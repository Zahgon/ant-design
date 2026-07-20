import * as React from 'react';
import { mergeProps } from '@rc-component/util';
import { clsx } from 'clsx';

import { isFunction, isPlainObject } from '../_util/is';
import { responsiveArray } from '../_util/responsiveObserver';
import type { Breakpoint } from '../_util/responsiveObserver';
import { devUseWarning } from '../_util/warning';
import { ConfigContext } from '../config-provider';
import { useComponentConfig } from '../config-provider/context';
import DefaultRenderEmpty from '../config-provider/defaultRenderEmpty';
import useSize from '../config-provider/hooks/useSize';
import { Row } from '../grid';
import type { RowProps } from '../grid';
import useBreakpoint from '../grid/hooks/useBreakpoint';
import type { PaginationConfig } from '../pagination';
import Pagination from '../pagination';
import type { SpinProps } from '../spin';
import Spin from '../spin';
import { ListContext } from './context';
import Item from './Item';
import useStyle from './style';

export type { ListConsumerProps } from './context';
export type {
  ListItemMetaProps,
  ListItemProps,
  ListItemSemanticClassNames,
  ListItemSemanticName,
  ListItemSemanticStyles,
} from './Item';

export type ColumnCount = number;

export type ColumnType = 'gutter' | 'column' | Breakpoint;

export interface ListGridType {
  gutter?: RowProps['gutter'];
  column?: ColumnCount;
  xs?: ColumnCount;
  sm?: ColumnCount;
  md?: ColumnCount;
  lg?: ColumnCount;
  xl?: ColumnCount;
  xxl?: ColumnCount;
  xxxl?: ColumnCount;
}

export type ListSize = 'small' | 'default' | 'large';

export type ListItemLayout = 'horizontal' | 'vertical';

export interface ListProps<T> {
  bordered?: boolean;
  className?: string;
  rootClassName?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  dataSource?: T[];
  extra?: React.ReactNode;
  grid?: ListGridType;
  id?: string;
  itemLayout?: ListItemLayout;
  loading?: boolean | SpinProps;
  loadMore?: React.ReactNode;
  pagination?: PaginationConfig | false;
  prefixCls?: string;
  rowKey?: ((item: T) => React.Key) | keyof T;
  renderItem?: (item: T, index: number) => React.ReactNode;
  size?: ListSize;
  split?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  locale?: ListLocale;
}

export interface ListLocale {
  emptyText: React.ReactNode;
}

const InternalList = <T,>(props: ListProps<T>, ref: React.ForwardedRef<HTMLDivElement>) => {
    throw new Error("STUB");
};

const ListWithForwardRef = React.forwardRef(InternalList) as (<T>(
  props: ListProps<T> & {
    ref?: React.ForwardedRef<HTMLDivElement>;
  },
) => ReturnType<typeof InternalList>) &
  Pick<React.FC, 'displayName'>;

if (process.env.NODE_ENV !== 'production') {
  ListWithForwardRef.displayName = 'Deprecated.List';
}

type CompoundedComponent = typeof ListWithForwardRef & {
  Item: typeof Item;
};

const List = ListWithForwardRef as CompoundedComponent;

List.Item = Item;

export default List;
