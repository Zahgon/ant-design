import React from 'react';

import { isPlainObject } from '../../_util/is';
import type { SpinProps } from '../../spin';

const useSpinProps = (loading?: boolean | SpinProps) => {
  const spinProps = React.useMemo<SpinProps>(() => {
      throw new Error("STUB");
  }, [loading]);
  return spinProps;
};

export default useSpinProps;
