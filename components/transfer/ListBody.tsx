import * as React from 'react';
import { useControlledState } from '@rc-component/util';
import { clsx } from 'clsx';

import type { KeyWiseTransferItem } from '.';
import { isPlainObject } from '../_util/is';
import Pagination from '../pagination';
import type { PaginationType, TransferKey } from './interface';
import ListItem from './ListItem';
import type { RenderedItem, TransferListProps } from './Section';

export const OmitProps = ['handleFilter', 'handleClear', 'checkedKeys'] as const;
export type OmitProp = (typeof OmitProps)[number];
type PartialTransferListProps<RecordType> = Omit<TransferListProps<RecordType>, OmitProp>;
type ExistPagination = Exclude<PaginationType, boolean>;

export interface TransferListBodyProps<RecordType> extends PartialTransferListProps<RecordType> {
  filteredItems: RecordType[];
  filteredRenderItems: RenderedItem<RecordType>[];
  selectedKeys: TransferKey[];
}

const parsePagination = (pagination?: ExistPagination) => {
  const defaultPagination: PaginationType = {
    simple: true,
    showSizeChanger: false,
    showLessItems: false,
  };

  return { ...defaultPagination, ...pagination };
};
export interface ListBodyRef<RecordType extends KeyWiseTransferItem> {
  items?: RenderedItem<RecordType>[];
}

const TransferListBody: React.ForwardRefRenderFunction<
  ListBodyRef<KeyWiseTransferItem>,
  TransferListBodyProps<KeyWiseTransferItem>
> = <RecordType extends KeyWiseTransferItem>(
  props: TransferListBodyProps<RecordType>,
  ref: React.ForwardedRef<ListBodyRef<RecordType>>,
) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  TransferListBody.displayName = 'TransferListBody';
}

export default React.forwardRef<
  ListBodyRef<KeyWiseTransferItem>,
  TransferListBodyProps<KeyWiseTransferItem>
>(TransferListBody);
