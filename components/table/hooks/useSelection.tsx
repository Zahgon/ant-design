import * as React from 'react';
import { useCallback, useMemo } from 'react';
import DownOutlined from '@ant-design/icons/DownOutlined';
import { INTERNAL_COL_DEFINE } from '@rc-component/table';
import type { FixedType } from '@rc-component/table';
import { arrAdd, arrDel, conductCheck, convertDataToEntities } from '@rc-component/tree';
import type { DataNode } from '@rc-component/tree';
import { useControlledState } from '@rc-component/util';
import { clsx } from 'clsx';

import { useMultipleSelect } from '../../_util/hooks';
import { isFunction, isPlainObject } from '../../_util/is';
import type { AnyObject } from '../../_util/type';
import { devUseWarning } from '../../_util/warning';
import type { CheckboxProps } from '../../checkbox';
import Checkbox from '../../checkbox';
import Dropdown from '../../dropdown';
import type { RadioProps } from '../../radio';
import Radio from '../../radio';
import type {
  ColumnsType,
  ColumnType,
  ExpandType,
  GetPopupContainer,
  GetRowKey,
  Key,
  RowSelectMethod,
  SelectionItem,
  TableLocale,
  TableRowSelection,
  TransformColumns,
} from '../interface';

// TODO: warning if use ajax!!!

export const SELECTION_COLUMN = {} as const;
export const SELECTION_ALL = 'SELECT_ALL' as const;
export const SELECTION_INVERT = 'SELECT_INVERT' as const;
export const SELECTION_NONE = 'SELECT_NONE' as const;

const EMPTY_LIST: React.Key[] = [];

interface UseSelectionConfig<RecordType = AnyObject> {
  prefixCls: string;
  pageData: RecordType[];
  data: RecordType[];
  getRowKey: GetRowKey<RecordType>;
  getRecordByKey: (key: Key) => RecordType;
  expandType: ExpandType;
  childrenColumnName: string;
  locale: TableLocale;
  getPopupContainer?: GetPopupContainer;
}

export type INTERNAL_SELECTION_ITEM =
  | SelectionItem
  | typeof SELECTION_ALL
  | typeof SELECTION_INVERT
  | typeof SELECTION_NONE;

const flattenData = <RecordType extends AnyObject = AnyObject>(
  childrenColumnName: keyof RecordType,
  data?: RecordType[],
  list: RecordType[] = [],
): RecordType[] => {
  (data || []).forEach((record) => {
      throw new Error("STUB");
  });
  return list;
};

const useSelection = <RecordType extends AnyObject = AnyObject>(
  config: UseSelectionConfig<RecordType>,
  rowSelection?: TableRowSelection<RecordType>,
): readonly [TransformColumns<RecordType>, Set<Key>] => {
  const {
    preserveSelectedRowKeys,
    selectedRowKeys,
    defaultSelectedRowKeys,
    getCheckboxProps,
    getTitleCheckboxProps,
    onChange: onSelectionChange,
    onSelect,
    onSelectAll,
    onSelectInvert,
    onSelectNone,
    onSelectMultiple,
    columnWidth: selectionColWidth,
    type: selectionType,
    selections,
    fixed,
    renderCell: customizeRenderCell,
    hideSelectAll,
    checkStrictly = true,
  } = rowSelection || {};

  const {
    prefixCls,
    data,
    pageData,
    getRecordByKey,
    getRowKey,
    expandType,
    childrenColumnName,
    locale: tableLocale,
    getPopupContainer,
  } = config;

  const warning = devUseWarning('Table');

  // ========================= MultipleSelect =========================
  const [multipleSelect, updatePrevSelectedIndex] = useMultipleSelect<React.Key, React.Key>(
    (item) => { throw new Error("STUB"); },
  );

  // ========================= Keys =========================
  const [mergedSelectedKeys, setMergedSelectedKeys] = useControlledState(
    defaultSelectedRowKeys || EMPTY_LIST,
    selectedRowKeys,
  );
  const mergedSelectedKeyList = mergedSelectedKeys ?? EMPTY_LIST;

  // ======================== Caches ========================
  const preserveRecordsRef = React.useRef(new Map<Key, RecordType>());

  const updatePreserveRecordsCache = useCallback(
    (keys: Key[]) => {
          throw new Error("STUB");
      },
    [getRecordByKey, preserveSelectedRowKeys],
  );

  // Update cache with selectedKeys
  React.useEffect(() => {
      throw new Error("STUB");
  }, [mergedSelectedKeyList, updatePreserveRecordsCache]);

  // Get flatten data
  const flattedData = useMemo(
    () => { throw new Error("STUB"); },
    [childrenColumnName, pageData],
  );

  const { keyEntities } = useMemo(() => {
      throw new Error("STUB");
  }, [data, getRowKey, checkStrictly, childrenColumnName, preserveSelectedRowKeys, flattedData]);

  // Get all checkbox props
  const checkboxPropsMap = useMemo(() => {
      throw new Error("STUB");
  }, [flattedData, getRowKey, getCheckboxProps]);

  const isCheckboxDisabled = useCallback(
    (r: RecordType): boolean => {
          throw new Error("STUB");
      },
    [checkboxPropsMap, getRowKey],
  );

  const [derivedSelectedKeys, derivedHalfSelectedKeys] = useMemo(() => {
      throw new Error("STUB");
  }, [mergedSelectedKeyList, checkStrictly, keyEntities, isCheckboxDisabled]);

  const derivedSelectedKeySet = useMemo<Set<Key>>(() => {
      throw new Error("STUB");
  }, [derivedSelectedKeys, selectionType]);

  const derivedHalfSelectedKeySet = useMemo<Set<Key>>(
    () => { throw new Error("STUB"); },
    [derivedHalfSelectedKeys, selectionType],
  );

  // Reset if rowSelection reset
  React.useEffect(() => {
      throw new Error("STUB");
  }, [!!rowSelection]);

  const setSelectedKeys = useCallback(
    (keys: Key[], method: RowSelectMethod) => {
          throw new Error("STUB");
      },
    [setMergedSelectedKeys, getRecordByKey, onSelectionChange, preserveSelectedRowKeys],
  );

  // ====================== Selections ======================
  // Trigger single `onSelect` event
  const triggerSingleSelection = useCallback(
    (key: Key, selected: boolean, keys: Key[], event: Event) => {
          throw new Error("STUB");
      },
    [onSelect, getRecordByKey, setSelectedKeys],
  );

  const mergedSelections = useMemo<SelectionItem[] | null>(() => {
      throw new Error("STUB");
  }, [
    selections,
    hideSelectAll,
    tableLocale.selectionAll,
    tableLocale.selectInvert,
    tableLocale.selectNone,
    checkboxPropsMap,
    derivedSelectedKeySet,
    data,
    pageData,
    getRowKey,
    onSelectInvert,
    setSelectedKeys,
  ]);

  // ======================= Columns ========================
  const transformColumns = useCallback(
    (columns: ColumnsType<RecordType>): ColumnsType<RecordType> => {
          throw new Error("STUB");
      },
    [
      getRowKey,
      flattedData,
      rowSelection,
      derivedSelectedKeys,
      derivedSelectedKeySet,
      derivedHalfSelectedKeySet,
      selectionColWidth,
      mergedSelections,
      expandType,
      checkboxPropsMap,
      onSelectMultiple,
      triggerSingleSelection,
      isCheckboxDisabled,
    ],
  );

  return [transformColumns, derivedSelectedKeySet] as const;
};

export default useSelection;
