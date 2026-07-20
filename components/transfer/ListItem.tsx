import * as React from 'react';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
import { clsx } from 'clsx';

import type { KeyWiseTransferItem, TransferSemanticAllType } from '.';
import { isNumber } from '../_util/is';
import Checkbox from '../checkbox';
import { useLocale } from '../locale';
import defaultLocale from '../locale/en_US';

type ListItemProps<RecordType> = {
  prefixCls: string;
  classNames: NonNullable<TransferSemanticAllType['classNames']>;
  styles: NonNullable<TransferSemanticAllType['styles']>;
  renderedText?: string | number;
  renderedEl: React.ReactNode;
  disabled?: boolean;
  checked?: boolean;
  onClick: (item: RecordType, e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  onRemove?: (item: RecordType) => void;
  item: RecordType;
  showRemove?: boolean;
};

const ListItem = <RecordType extends KeyWiseTransferItem>(props: ListItemProps<RecordType>) => {
    throw new Error("STUB");
};

export default React.memo(ListItem);
