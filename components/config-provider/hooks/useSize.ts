import React from 'react';

import { isFunction, isString } from '../../_util/is';
import type { SizeType } from '../SizeContext';
import SizeContext from '../SizeContext';

const useSize = <T extends string | undefined | number | object>(
  customSize?: T | ((ctxSize: SizeType) => T),
): T => {
  const size = React.useContext<SizeType>(SizeContext);
  const mergedSize = React.useMemo<T>(() => {
      throw new Error("STUB");
  }, [customSize, size]);
  return mergedSize;
};

export default useSize;
