import * as React from 'react';
import type { ValidateStatus } from 'antd/es/form/FormItem';

import { devUseWarning } from '../../_util/warning';
import { FormItemInputContext } from '../context';

type UseFormItemStatus = () => {
  status?: ValidateStatus;
  errors: React.ReactNode[];
  warnings: React.ReactNode[];
};

const useFormItemStatus: UseFormItemStatus = () => {
    throw new Error("STUB");
};

// Only used for compatible package. Not promise this will work on future version.
(useFormItemStatus as any).Context = FormItemInputContext;

export default useFormItemStatus;
