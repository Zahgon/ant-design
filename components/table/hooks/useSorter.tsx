import * as React from 'react';
import CaretDownOutlined from '@ant-design/icons/CaretDownOutlined';
import CaretUpOutlined from '@ant-design/icons/CaretUpOutlined';
import { KeyCode } from '@rc-component/util';
import { clsx } from 'clsx';

import { isFunction, isNumber, isPlainObject } from '../../_util/is';
import type { AnyObject } from '../../_util/type';
import type { Locale } from '../../locale';
import type { TooltipProps } from '../../tooltip';
import Tooltip from '../../tooltip';
import type {
  ColumnGroupType,
  ColumnSorter,
  ColumnsType,
  ColumnTitleProps,
  ColumnType,
  CompareFn,
  Key,
  SorterResult,
  SorterTooltipProps,
  SortOrder,
  TableLocale,
  TransformColumns,
} from '../interface';
import { getColumnKey, getColumnPos, renderColumnTitle, safeColumnTitle } from '../util';

const ASCEND = 'ascend';
const DESCEND = 'descend';

const getMultiplePriority = <RecordType extends AnyObject = AnyObject>(
  column: ColumnType<RecordType>,
): number | false => {
  if (isPlainObject<ColumnSorter<RecordType>>(column.sorter) && isNumber(column.sorter.multiple)) {
    return column.sorter.multiple;
  }
  return false;
};

const getSortFunction = <RecordType extends AnyObject = AnyObject>(
  sorter: ColumnType<RecordType>['sorter'],
): CompareFn<RecordType> | false => {
  if (isFunction(sorter)) {
    return sorter;
  }
  if (isPlainObject<ColumnSorter<RecordType>>(sorter) && sorter.compare) {
    return sorter.compare;
  }
  return false;
};

const nextSortDirection = (sortDirections: SortOrder[], current: SortOrder | null) => {
  if (!current) {
    return sortDirections[0];
  }
  return sortDirections[sortDirections.indexOf(current) + 1];
};

export interface SortState<RecordType = AnyObject> {
  column: ColumnType<RecordType>;
  key: Key;
  sortOrder: SortOrder | null;
  multiplePriority: number | false;
}

const collectSortStates = <RecordType extends AnyObject = AnyObject>(
  columns: ColumnsType<RecordType>,
  init: boolean,
  pos?: string,
): SortState<RecordType>[] => {
  let sortStates: SortState<RecordType>[] = [];

  const pushState = (column: ColumnsType<RecordType>[number], columnPos: string) => {
    sortStates.push({
      column,
      key: getColumnKey<RecordType>(column, columnPos),
      multiplePriority: getMultiplePriority<RecordType>(column),
      sortOrder: column.sortOrder!,
    });
  };

  (columns || []).forEach((column, index) => {
      throw new Error("STUB");
  });

  return sortStates;
};

const injectSorter = <RecordType extends AnyObject = AnyObject>(
  prefixCls: string,
  columns: ColumnsType<RecordType>,
  sorterStates: SortState<RecordType>[],
  triggerSorter: (sorterSates: SortState<RecordType>) => void,
  defaultSortDirections: SortOrder[],
  tableLocale?: TableLocale,
  tableShowSorterTooltip?: boolean | SorterTooltipProps,
  pos?: string,
  a11yLocale?: Locale['global'],
): ColumnsType<RecordType> => {
  const finalColumns = (columns || []).map((column, index) => {
      throw new Error("STUB");
  });
  return finalColumns;
};

const stateToInfo = <RecordType extends AnyObject = AnyObject>(
  sorterState: SortState<RecordType>,
): SorterResult<RecordType> => {
  const { column, sortOrder } = sorterState;
  return {
    column,
    order: sortOrder,
    field: column.dataIndex as SorterResult<RecordType>['field'],
    columnKey: column.key,
  };
};

const generateSorterInfo = <RecordType extends AnyObject = AnyObject>(
  sorterStates: SortState<RecordType>[],
): SorterResult<RecordType> | SorterResult<RecordType>[] => {
  const activeSorters = sorterStates.reduce<SorterResult<RecordType>[]>((list, sorterState) => {
      throw new Error("STUB");
  }, []);

  // =========== Legacy compatible support ===========
  // https://github.com/ant-design/ant-design/pull/19226
  if (activeSorters.length === 0 && sorterStates.length) {
    const lastIndex = sorterStates.length - 1;
    return {
      ...stateToInfo(sorterStates[lastIndex]),
      column: undefined,
      order: undefined,
      field: undefined,
      columnKey: undefined,
    };
  }

  if (activeSorters.length <= 1) {
    return activeSorters[0] || {};
  }

  return activeSorters;
};

export const getSortData = <RecordType extends AnyObject = AnyObject>(
  data: readonly RecordType[],
  sortStates: SortState<RecordType>[],
  childrenColumnName: string,
): RecordType[] => {
  const innerSorterStates = sortStates
    .slice()
    .sort((a, b) => { throw new Error("STUB"); });

  const cloneData = data.slice();

  const runningSorters = innerSorterStates.filter(
    ({ column: { sorter }, sortOrder }) => { throw new Error("STUB"); },
  );

  // Skip if no sorter needed
  if (!runningSorters.length) {
    return cloneData;
  }

  return cloneData
    .sort((record1, record2) => {
        throw new Error("STUB");
    })
    .map<RecordType>((record) => {
        throw new Error("STUB");
    });
};

interface SorterConfig<RecordType = AnyObject> {
  prefixCls: string;
  mergedColumns: ColumnsType<RecordType>;
  /**
   * Columns before applying the responsive filter.
   * Used to collect `defaultSortOrder` / controlled `sortOrder` for columns
   * that are currently hidden by `column.responsive`, so the user's sort
   * intent is preserved when the column appears at a different breakpoint.
   * Falls back to `mergedColumns` when not provided.
   */
  baseColumns?: ColumnsType<RecordType>;
  onSorterChange: (
    sorterResult: SorterResult<RecordType> | SorterResult<RecordType>[],
    sortStates: SortState<RecordType>[],
  ) => void;
  sortDirections: SortOrder[];
  tableLocale?: TableLocale;
  showSorterTooltip?: boolean | SorterTooltipProps;
  globalLocale?: Locale['global'];
}

const useFilterSorter = <RecordType extends AnyObject = AnyObject>(
  props: SorterConfig<RecordType>,
): [
  TransformColumns<RecordType>,
  SortState<RecordType>[],
  ColumnTitleProps<RecordType>,
  () => SorterResult<RecordType> | SorterResult<RecordType>[],
] => {
    throw new Error("STUB");
};

export default useFilterSorter;
