import { useMemo } from 'react';
import type { Components } from '@rc-component/picker/interface';

import PickerButton from '../PickerButton';

export default function useComponents(components?: Components) {
  return useMemo(
    () => { throw new Error("STUB"); },
    [components],
  );
}
