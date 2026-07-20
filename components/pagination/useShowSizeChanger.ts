import { useMemo } from 'react';

import type { PaginationProps } from '.';
import { isPlainObject } from '../_util/is';
import type { SelectProps } from '../select';

export default function useShowSizeChanger(showSizeChanger?: PaginationProps['showSizeChanger']) {
  return useMemo<[show: boolean | undefined, selectProps: SelectProps | undefined]>(() => {
      throw new Error("STUB");
  }, [showSizeChanger]);
}
