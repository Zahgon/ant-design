import React, { useMemo, useRef, useState } from 'react';
import DownOutlined from '@ant-design/icons/DownOutlined';
import { omit } from '@rc-component/util';
import { clsx } from 'clsx';

import { isFunction, isNonNullable, isNumber, isPlainObject, isString } from '../_util/is';
import { groupKeysMap } from '../_util/transKeys';
import Checkbox from '../checkbox';
import Dropdown from '../dropdown';
import type { MenuProps } from '../menu';
import type {
  KeyWiseTransferItem,
  RenderResult,
  RenderResultObject,
  SelectAllLabel,
  TransferDirection,
  TransferLocale,
  TransferSearchOption,
  TransferSemanticAllType,
} from './';
import type { PaginationType, TransferKey } from './interface';
import type { ListBodyRef, TransferListBodyProps } from './ListBody';
import DefaultListBody, { OmitProps } from './ListBody';
import Search from './search';

const defaultRender = () => { throw new Error("STUB"); };

function isRenderResultPlainObject(result: RenderResult): result is RenderResultObject {
  return (
    isNonNullable<RenderResult>(result) &&
    isPlainObject<RenderResultObject>(result) &&
    !React.isValidElement<any>(result)
  );
}

function getEnabledItemKeys<RecordType extends KeyWiseTransferItem>(items: RecordType[]) {
  return items.reduce<TransferKey[]>((keys, data) => {
      throw new Error("STUB");
  }, []);
}

function getTextFromRenderResult<RecordType extends KeyWiseTransferItem>(
  renderResult: RenderResult,
  item: RecordType,
): string {
  for (const value of [renderResult, item.title, item.key]) {
    if (isString(value)) {
      return value;
    }
    if (isNumber(value)) {
      return String(value);
    }
  }
  return '';
}

const isValidIcon = (icon: React.ReactNode) => icon !== undefined;

export interface RenderedItem<RecordType> {
  renderedText: string;
  renderedEl: React.ReactNode;
  item: RecordType;
}

type RenderListFunction<T> = (props: TransferListBodyProps<T>) => React.ReactNode;

export interface TransferListProps<RecordType> extends TransferLocale {
  prefixCls: string;
  style?: React.CSSProperties;
  classNames: NonNullable<TransferSemanticAllType['classNames']>;
  styles: NonNullable<TransferSemanticAllType['styles']>;

  titleText: React.ReactNode;
  dataSource: RecordType[];
  filterOption?: (filterText: string, item: RecordType, direction: TransferDirection) => boolean;
  checkedKeys: TransferKey[];
  handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onItemSelect: (
    key: TransferKey,
    check: boolean,
    e?: React.MouseEvent<Element, MouseEvent>,
  ) => void;
  onItemSelectAll: (dataSource: TransferKey[], checkAll: boolean | 'replace') => void;
  onItemRemove?: (keys: TransferKey[]) => void;
  handleClear: () => void;
  /** Render item */
  render?: (item: RecordType) => RenderResult;
  showSearch?: boolean | TransferSearchOption;
  searchPlaceholder: string;
  itemUnit: string;
  itemsUnit: string;
  renderList?: RenderListFunction<RecordType>;
  footer?: (
    props: TransferListProps<RecordType>,
    info?: { direction: TransferDirection },
  ) => React.ReactNode;
  onScroll: (e: React.UIEvent<HTMLUListElement, UIEvent>) => void;
  disabled?: boolean;
  direction: TransferDirection;
  showSelectAll?: boolean;
  selectAllLabel?: SelectAllLabel;
  showRemove?: boolean;
  pagination?: PaginationType;
  selectionsIcon?: React.ReactNode;
}

export interface TransferCustomListBodyProps<T> extends TransferListBodyProps<T> {}

const getShowSearchOption = (showSearch: boolean | TransferSearchOption) => {
  if (isPlainObject(showSearch)) {
    return {
      ...showSearch,
      defaultValue: showSearch.defaultValue || '',
    };
  }
  return {
    defaultValue: '',
    placeholder: '',
  };
};

const TransferSection = <RecordType extends KeyWiseTransferItem>(
  props: TransferListProps<RecordType>,
) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  TransferSection.displayName = 'TransferSection';
}

export default TransferSection;
