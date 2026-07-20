import * as React from 'react';

import type { AnyObject } from '../../../_util/type';
import { devUseWarning } from '../../../_util/warning';
import type {
  ColumnsType,
  ColumnTitleProps,
  ColumnType,
  FilterKey,
  FilterValue,
  GetPopupContainer,
  Key,
  SafeKey,
  TableLocale,
  TransformColumns,
} from '../../interface';
import { getColumnKey, getColumnPos, renderColumnTitle } from '../../util';
import FilterDropdown, { flattenKeys } from './FilterDropdown';

export interface FilterState<RecordType = AnyObject> {
  column: ColumnType<RecordType>;
  key: Key;
  filteredKeys?: FilterKey;
  forceFiltered?: boolean;
}

const collectFilterStates = <RecordType extends AnyObject = AnyObject>(
  columns: ColumnsType<RecordType>,
  init: boolean,
  pos?: string,
): FilterState<RecordType>[] => {
  let filterStates: FilterState<RecordType>[] = [];

  (columns || []).forEach((column, index) => {
      throw new Error("STUB");
  });

  return filterStates;
};

function injectFilter<RecordType extends AnyObject = AnyObject>(
  prefixCls: string,
  dropdownPrefixCls: string,
  columns: ColumnsType<RecordType>,
  filterStates: FilterState<RecordType>[],
  locale: TableLocale,
  triggerFilter: (filterState: FilterState<RecordType>) => void,
  getPopupContainer?: GetPopupContainer,
  pos?: string,
  rootClassName?: string,
): ColumnsType<RecordType> {
  return columns.map((column, index) => {
      throw new Error("STUB");
  });
}

const generateFilterInfo = <RecordType extends AnyObject = AnyObject>(
  filterStates: FilterState<RecordType>[],
) => {
  const currentFilters: Record<string, FilterValue | null> = {};

  filterStates.forEach(({ key, filteredKeys, column }) => {
      throw new Error("STUB");
  });

  return currentFilters;
};

export const getFilterData = <RecordType extends AnyObject = AnyObject>(
  data: RecordType[],
  filterStates: FilterState<RecordType>[],
  childrenColumnName: string,
) => {
  const filterDatas = filterStates.reduce<RecordType[]>((currentData, filterState) => {
      throw new Error("STUB");
  }, data);

  return filterDatas;
};

export interface FilterConfig<RecordType = AnyObject> {
  prefixCls: string;
  dropdownPrefixCls: string;
  mergedColumns: ColumnsType<RecordType>;
  locale: TableLocale;
  onFilterChange: (
    filters: Record<string, FilterValue | null>,
    filterStates: FilterState<RecordType>[],
  ) => void;
  getPopupContainer?: GetPopupContainer;
  rootClassName?: string;
}

const getMergedColumns = <RecordType extends AnyObject = AnyObject>(
  rawMergedColumns: ColumnsType<RecordType>,
): ColumnsType<RecordType> =>
  rawMergedColumns.flatMap((column) => {
      throw new Error("STUB");
  });

const useFilter = <RecordType extends AnyObject = AnyObject>(
  props: FilterConfig<RecordType>,
): [
  TransformColumns<RecordType>,
  FilterState<RecordType>[],
  Record<string, FilterValue | null>,
] => {
  const {
    prefixCls,
    dropdownPrefixCls,
    mergedColumns: rawMergedColumns,
    onFilterChange,
    getPopupContainer,
    locale: tableLocale,
    rootClassName,
  } = props;
  const warning = devUseWarning('Table');

  const mergedColumns = React.useMemo(
    () => { throw new Error("STUB"); },
    [rawMergedColumns],
  );

  const [filterStates, setFilterStates] = React.useState<FilterState<RecordType>[]>(() =>
    { throw new Error("STUB"); },
  );

  const mergedFilterStates = React.useMemo(() => {
      throw new Error("STUB");
  }, [mergedColumns, filterStates]);

  const filters = React.useMemo(
    () => { throw new Error("STUB"); },
    [mergedFilterStates],
  );

  const triggerFilter = (filterState: FilterState<RecordType>) => {
    const newFilterStates = mergedFilterStates.filter(({ key }) => { throw new Error("STUB"); });
    newFilterStates.push(filterState);
    setFilterStates(newFilterStates);
    onFilterChange(generateFilterInfo<RecordType>(newFilterStates), newFilterStates);
  };

  const transformColumns = (innerColumns: ColumnsType<RecordType>) =>
    { throw new Error("STUB"); };

  return [transformColumns, mergedFilterStates, filters] as const;
};

export { flattenKeys };

export default useFilter;
