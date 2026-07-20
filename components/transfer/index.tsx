import type { ChangeEvent, CSSProperties } from 'react';
import React, { useCallback, useContext } from 'react';
import { pickAttrs } from '@rc-component/util';
import { clsx } from 'clsx';

import { useMultipleSelect } from '../_util/hooks';
import type { PrevSelectedIndex } from '../_util/hooks';
import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isFunction, isNonNullable } from '../_util/is';
import type { InputStatus } from '../_util/statusUtils';
import { getMergedStatus, getStatusClassNames } from '../_util/statusUtils';
import { groupDisabledKeysMap, groupKeysMap } from '../_util/transKeys';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import DefaultRenderEmpty from '../config-provider/defaultRenderEmpty';
import DisabledContext from '../config-provider/DisabledContext';
import type { FormItemStatusContextProps } from '../form/context';
import { FormItemInputContext } from '../form/context';
import { useLocale } from '../locale';
import defaultLocale from '../locale/en_US';
import Actions from './Actions';
import useData from './hooks/useData';
import useSelection from './hooks/useSelection';
import type { PaginationType, TransferKey } from './interface';
import Search from './search';
import type { TransferCustomListBodyProps, TransferListProps } from './Section';
import Section from './Section';
import useStyle from './style';

export type { TransferOperationProps } from './Actions';
export type { TransferSearchProps } from './search';
export type { TransferListProps } from './Section';

export type TransferSemanticType = {
  classNames?: {
    root?: string;
    section?: string;
    header?: string;
    title?: string;
    body?: string;
    list?: string;
    item?: string;
    itemIcon?: string;
    itemContent?: string;
    footer?: string;
    actions?: string;
    source?: TransferSectionSemanticClassNames;
    target?: TransferSectionSemanticClassNames;
  };
  styles?: {
    root?: React.CSSProperties;
    section?: React.CSSProperties;
    header?: React.CSSProperties;
    title?: React.CSSProperties;
    body?: React.CSSProperties;
    list?: React.CSSProperties;
    item?: React.CSSProperties;
    itemIcon?: React.CSSProperties;
    itemContent?: React.CSSProperties;
    footer?: React.CSSProperties;
    actions?: React.CSSProperties;
    source?: TransferSectionSemanticStyles;
    target?: TransferSectionSemanticStyles;
  };
};

type TransferSectionSemanticClassNames = {
  section?: string;
  header?: string;
  title?: string;
  body?: string;
  list?: string;
  item?: string;
  itemIcon?: string;
  itemContent?: string;
  footer?: string;
};

type TransferSectionSemanticStyles = {
  section?: React.CSSProperties;
  header?: React.CSSProperties;
  title?: React.CSSProperties;
  body?: React.CSSProperties;
  list?: React.CSSProperties;
  item?: React.CSSProperties;
  itemIcon?: React.CSSProperties;
  itemContent?: React.CSSProperties;
  footer?: React.CSSProperties;
};

export type TransferSemanticAllType = GenerateSemantic<TransferSemanticType, TransferProps>;

export type TransferDirection = 'left' | 'right';

export interface RenderResultObject {
  label: React.ReactElement;
  value: string;
}

export type RenderResult = React.ReactElement | RenderResultObject | string | null;

export interface TransferItem {
  key?: TransferKey;
  title?: string;
  description?: string;
  disabled?: boolean;
  [name: string]: any;
}

export type KeyWise<T> = T & { key: TransferKey };
export type KeyWiseTransferItem = KeyWise<TransferItem>;

type TransferRender<RecordType> = (item: RecordType) => RenderResult;

export interface ListStyle {
  direction: TransferDirection;
}

export type SelectAllLabel =
  | React.ReactNode
  | ((info: { selectedCount: number; totalCount: number }) => React.ReactNode);

export interface TransferLocale {
  titles?: React.ReactNode[];
  notFoundContent?: React.ReactNode | React.ReactNode[];
  searchPlaceholder: string;
  itemUnit: string;
  itemsUnit: string;
  remove?: string;
  selectAll?: string;
  deselectAll?: string;
  selectCurrent?: string;
  selectInvert?: string;
  removeAll?: string;
  removeCurrent?: string;
}

export interface TransferSearchOption {
  placeholder?: string;
  defaultValue?: string;
}

export interface TransferProps<RecordType = any> extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onChange' | 'onScroll' | 'children'
> {
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  style?: React.CSSProperties;
  /** @deprecated Please use `styles.section` instead. */
  listStyle?: ((style: ListStyle) => CSSProperties) | CSSProperties;
  /** @deprecated Please use `styles.actions` instead. */
  operationStyle?: CSSProperties;
  classNames?: TransferSemanticAllType['classNamesAndFn'];
  styles?: TransferSemanticAllType['stylesAndFn'];

  disabled?: boolean;
  dataSource?: RecordType[];
  targetKeys?: TransferKey[];
  selectedKeys?: TransferKey[];
  render?: TransferRender<RecordType>;
  onChange?: (
    targetKeys: TransferKey[],
    direction: TransferDirection,
    moveKeys: TransferKey[],
  ) => void;
  onSelectChange?: (sourceSelectedKeys: TransferKey[], targetSelectedKeys: TransferKey[]) => void;

  titles?: React.ReactNode[];
  /** @deprecated Please use `actions` instead. */
  operations?: string[];
  actions?: React.ReactNode[];
  showSearch?: boolean | TransferSearchOption;
  filterOption?: (inputValue: string, item: RecordType, direction: TransferDirection) => boolean;
  locale?: Partial<TransferLocale>;
  footer?: (
    props: TransferListProps<RecordType>,
    info?: { direction: TransferDirection },
  ) => React.ReactNode;
  rowKey?: (record: RecordType) => TransferKey;
  onSearch?: (direction: TransferDirection, value: string) => void;
  onScroll?: (direction: TransferDirection, e: React.SyntheticEvent<HTMLUListElement>) => void;
  children?: (props: TransferCustomListBodyProps<RecordType>) => React.ReactNode;
  showSelectAll?: boolean;
  selectAllLabels?: SelectAllLabel[];
  oneWay?: boolean;
  pagination?: PaginationType;
  status?: InputStatus;
  selectionsIcon?: React.ReactNode;
}

const Transfer = <RecordType extends TransferItem = TransferItem>(
  props: TransferProps<RecordType>,
) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  Transfer.displayName = 'Transfer';
}

Transfer.List = Section;
Transfer.Search = Search;
Transfer.Operation = Actions;

export default Transfer;
