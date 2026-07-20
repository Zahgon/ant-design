import * as React from 'react';
import type { StackConfig } from '@rc-component/notification';

import { isPlainObject } from '../../_util/is';

export type StackConfigInput = boolean | StackConfig | undefined;

const useStackConfig = (
  stackConfig: StackConfigInput,
  defaultStackConfig: StackConfigInput,
): false | StackConfig =>
  React.useMemo(() => {
      throw new Error("STUB");
  }, [stackConfig, defaultStackConfig]);

export default useStackConfig;
