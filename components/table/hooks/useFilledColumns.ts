import * as React from 'react';
import { EXPAND_COLUMN } from '@rc-component/table';
import { mergeProps, omit } from '@rc-component/util';

import type { AnyObject } from '../../_util/type';
import type { ColumnGroupType, ColumnsType, ColumnType } from '../interface';
import { SELECTION_COLUMN } from './useSelection';

const useFilledColumns = <RecordType extends AnyObject = AnyObject>(
  columns: ColumnsType<RecordType>,
  column?: Partial<ColumnType<RecordType>>,
) =>
  React.useMemo(() => {
      throw new Error("STUB");
  }, [columns, column]);

export default useFilledColumns;
