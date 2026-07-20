import * as React from 'react';
import FilterFilled from '@ant-design/icons/FilterFilled';
import type { FieldDataNode } from '@rc-component/tree';
import { isEqual, mergeProps } from '@rc-component/util';
import { clsx } from 'clsx';

import type { FilterState } from '.';
import { useSyncState } from '../../../_util/hooks';
import { isFunction, isNumber } from '../../../_util/is';
import type { AnyObject } from '../../../_util/type';
import { devUseWarning } from '../../../_util/warning';
import Button from '../../../button/Button';
import type { CheckboxChangeEvent } from '../../../checkbox';
import Checkbox from '../../../checkbox';
import { ConfigContext } from '../../../config-provider/context';
import Dropdown from '../../../dropdown';
import type { DropdownProps } from '../../../dropdown';
import Empty from '../../../empty';
import type { MenuProps } from '../../../menu';
import Menu from '../../../menu';
import { OverrideProvider } from '../../../menu/OverrideContext';
import Radio from '../../../radio';
import type { EventDataNode } from '../../../tree';
import Tree from '../../../tree';
import type {
  ColumnFilterItem,
  ColumnType,
  FilterKey,
  FilterSearchType,
  FilterValue,
  GetPopupContainer,
  Key,
  TableLocale,
} from '../../interface';
import TableMeasureRowContext from '../../TableMeasureRowContext';
import FilterSearch from './FilterSearch';
import FilterDropdownMenuWrapper from './FilterWrapper';

type FilterTreeDataNode = FieldDataNode<{ title: React.ReactNode; key: string }>;

interface FilterResetProps {
  confirm?: boolean;
  closeDropdown?: boolean;
}

export function flattenKeys(filters?: ColumnFilterItem[]) {
  let keys: FilterValue = [];
  (filters || []).forEach(({ value, children }) => {
      throw new Error("STUB");
  });
  return keys;
}

function hasSubMenu(filters: ColumnFilterItem[]) {
  return filters.some(({ children }) => { throw new Error("STUB"); });
}

const searchValueMatched = (normalizedSearchValue: string, text: React.ReactNode) => {
  if (typeof text === 'string' || isNumber(text)) {
    return text.toString().toLowerCase().includes(normalizedSearchValue);
  }
  return false;
};

interface RenderFilterItemsOptions {
  filters: ColumnFilterItem[];
  prefixCls: string;
  filteredKeys: Key[];
  filterMultiple: boolean;
  searchValue: string;
  normalizedSearchValue: string;
  filterSearch: FilterSearchType<ColumnFilterItem>;
}

const renderFilterItems = (options: RenderFilterItemsOptions): Required<MenuProps>['items'] => {
  const {
    filters,
    prefixCls,
    filteredKeys,
    filterMultiple,
    searchValue,
    normalizedSearchValue,
    filterSearch,
  } = options;

  return filters.map((filter, index) => {
      throw new Error("STUB");
  });
};

export type TreeColumnFilterItem = ColumnFilterItem & FilterTreeDataNode;

export interface FilterDropdownProps<RecordType = AnyObject> {
  tablePrefixCls: string;
  prefixCls: string;
  dropdownPrefixCls: string;
  column: ColumnType<RecordType>;
  filterState?: FilterState<RecordType>;
  filterOnClose: boolean;
  filterMultiple: boolean;
  filterMode?: 'menu' | 'tree';
  filterSearch?: FilterSearchType<ColumnFilterItem | TreeColumnFilterItem>;
  columnKey: Key;
  children: React.ReactNode;
  triggerFilter: (filterState: FilterState<RecordType>) => void;
  locale: TableLocale;
  getPopupContainer?: GetPopupContainer;
  filterResetToDefaultFilteredValue?: boolean;
  rootClassName?: string;
}

function wrapStringListType(keys?: FilterKey) {
  return (keys as string[]) || [];
}

const FilterDropdown = <RecordType extends AnyObject = AnyObject>(
  props: FilterDropdownProps<RecordType>,
) => {
    throw new Error("STUB");
};

export default FilterDropdown;
