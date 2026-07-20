import * as React from 'react';
import { convertChildrenToColumns, INTERNAL_HOOKS } from '@rc-component/table';
import type { Reference as RcReference, TableProps as RcTableProps } from '@rc-component/table';
import { omit, pickAttrs } from '@rc-component/util';
import { clsx } from 'clsx';

import { useProxyImperativeHandle } from '../_util/hooks';
import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isFunction, isNumber, isPlainObject } from '../_util/is';
import type { Breakpoint } from '../_util/responsiveObserver';
import scrollTo from '../_util/scrollTo';
import type { AnyObject } from '../_util/type';
import { devUseWarning } from '../_util/warning';
import ConfigProvider from '../config-provider';
import type { ConfigConsumerProps } from '../config-provider/context';
import { ConfigContext, useComponentConfig } from '../config-provider/context';
import DefaultRenderEmpty from '../config-provider/defaultRenderEmpty';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import useSize from '../config-provider/hooks/useSize';
import type { SizeType } from '../config-provider/SizeContext';
import useBreakpoint from '../grid/hooks/useBreakpoint';
import { useLocale } from '../locale';
import defaultLocale from '../locale/en_US';
import Pagination from '../pagination';
import type { PaginationSemanticType } from '../pagination/Pagination';
import type { SpinProps } from '../spin';
import Spin from '../spin';
import { useToken } from '../theme/internal';
import renderExpandIcon from './ExpandIcon';
import useColumnTitleProps from './hooks/useColumnTitleProps';
import useContainerWidth from './hooks/useContainerWidth';
import useFilledColumns from './hooks/useFilledColumns';
import type { FilterConfig, FilterState } from './hooks/useFilter';
import useFilter, { getFilterData } from './hooks/useFilter';
import useLazyKVMap from './hooks/useLazyKVMap';
import usePagination, { DEFAULT_PAGE_SIZE, getPaginationParam } from './hooks/usePagination';
import useSelection from './hooks/useSelection';
import type { SortState } from './hooks/useSorter';
import useSorter, { getSortData } from './hooks/useSorter';
import useSpinProps from './hooks/useSpinProps';
import useTitleColumns from './hooks/useTitleColumns';
import type {
  ColumnsType,
  ColumnType,
  ExpandableConfig,
  ExpandType,
  FilterValue,
  GetPopupContainer,
  GetRowKey,
  RefInternalTable,
  SorterResult,
  SorterTooltipProps,
  SortOrder,
  TableAction,
  TableCurrentDataSource,
  TableLocale,
  TablePaginationConfig,
  TableRowSelection,
} from './interface';
import RcTable from './RcTable';
import RcVirtualTable from './RcTable/VirtualTable';
import useStyle from './style';
import TableMeasureRowContext from './TableMeasureRowContext';
import { getPaginationSize, normalizePlacement } from './util';

export type { ColumnsType, TablePaginationConfig };

const EMPTY_LIST: AnyObject[] = [];

type HeaderTableContextValue = {
  ariaProps?: React.AriaAttributes;
  component?: React.ElementType;
};

const HeaderTableContext = React.createContext<HeaderTableContextValue>({});

const HeaderTable: React.FC<React.TableHTMLAttributes<HTMLTableElement>> = (props) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  HeaderTable.displayName = 'HeaderTable';
}

type ComponentsSemanticClassNames = {
  wrapper?: string;
  cell?: string;
  row?: string;
};

type ComponentsSemanticStyles = {
  wrapper?: React.CSSProperties;
  cell?: React.CSSProperties;
  row?: React.CSSProperties;
};

export type TableSemanticType = {
  classNames?: {
    root?: string;
    section?: string;
    title?: string;
    footer?: string;
    body?: ComponentsSemanticClassNames;
    content?: string;
    header?: ComponentsSemanticClassNames;
    pagination?: PaginationSemanticType['classNames'];
  };
  styles?: {
    root?: React.CSSProperties;
    section?: React.CSSProperties;
    title?: React.CSSProperties;
    footer?: React.CSSProperties;
    body?: ComponentsSemanticStyles;
    content?: React.CSSProperties;
    header?: ComponentsSemanticStyles;
    pagination?: PaginationSemanticType['styles'];
  };
};

export type TableSemanticAllType<T = any> = GenerateSemantic<TableSemanticType, TableProps<T>>;

interface ChangeEventInfo<RecordType = AnyObject> {
  pagination: {
    current?: number;
    pageSize?: number;
    total?: number;
  };
  filters: Record<string, FilterValue | null>;
  sorter: SorterResult<RecordType> | SorterResult<RecordType>[];

  filterStates: FilterState<RecordType>[];
  sorterStates: SortState<RecordType>[];

  resetPagination: (current?: number, pageSize?: number) => void;
}

export interface TableProps<RecordType = AnyObject> extends Omit<
  RcTableProps<RecordType>,
  | 'transformColumns'
  | 'internalHooks'
  | 'internalRefs'
  | 'data'
  | 'columns'
  | 'scroll'
  | 'emptyText'
  | 'classNames'
  | 'styles'
> {
  classNames?: TableSemanticAllType<RecordType>['classNamesAndFn'];
  styles?: TableSemanticAllType<RecordType>['stylesAndFn'];
  dropdownPrefixCls?: string;
  dataSource?: RcTableProps<RecordType>['data'];
  column?: Partial<ColumnType<RecordType>>;
  columns?: ColumnsType<RecordType>;
  pagination?: false | TablePaginationConfig;
  loading?: boolean | SpinProps;
  size?: SizeType;
  bordered?: boolean;
  locale?: TableLocale;
  rootClassName?: string;

  onChange?: (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<RecordType> | SorterResult<RecordType>[],
    extra: TableCurrentDataSource<RecordType>,
  ) => void;
  rowSelection?: TableRowSelection<RecordType>;

  getPopupContainer?: GetPopupContainer;
  scroll?: RcTableProps<RecordType>['scroll'] & {
    scrollToFirstRowOnChange?: boolean;
  };
  sortDirections?: SortOrder[];
  showSorterTooltip?: boolean | SorterTooltipProps;
  virtual?: boolean;
}

/** Same as `TableProps` but we need record parent render times */
export interface InternalTableProps<RecordType = AnyObject> extends TableProps<RecordType> {
  _renderTimes: number;
}

const InternalTable = <RecordType extends AnyObject = AnyObject>(
  props: InternalTableProps<RecordType>,
  ref: React.Ref<HTMLDivElement>,
) => {
    throw new Error("STUB");
};

export default React.forwardRef(InternalTable) as RefInternalTable;
