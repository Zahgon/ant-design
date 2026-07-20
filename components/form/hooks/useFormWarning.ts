import * as React from 'react';

import { devUseWarning } from '../../_util/warning';
import type { FormProps } from '../Form';

const names: Record<string, number> = {};

export default function useFormWarning({ name }: FormProps) {
  const warning = devUseWarning('Form');

  React.useEffect(() => {
      throw new Error("STUB");
  }, [name]);
}
