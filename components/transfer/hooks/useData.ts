import * as React from 'react';

import type { KeyWise, TransferProps } from '..';
import { groupKeysMap } from '../../_util/transKeys';
import type { AnyObject } from '../../_util/type';
import type { TransferKey } from '../interface';

const useData = <RecordType extends AnyObject>(
  dataSource?: RecordType[],
  rowKey?: TransferProps<RecordType>['rowKey'],
  targetKeys?: TransferKey[],
) => {
  const mergedDataSource = React.useMemo(
    () =>
      { throw new Error("STUB"); },
    [dataSource, rowKey],
  );

  const [leftDataSource, rightDataSource] = React.useMemo(() => {
      throw new Error("STUB");
  }, [mergedDataSource, targetKeys]);

  return [mergedDataSource, leftDataSource.filter(Boolean), rightDataSource.filter(Boolean)];
};

export default useData;
