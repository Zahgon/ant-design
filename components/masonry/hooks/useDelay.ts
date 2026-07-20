import * as React from 'react';
import { raf, useEvent } from '@rc-component/util';

export default function useDelay(callback: VoidFunction) {
  const idRef = React.useRef<number>(0);

  const clearRaf = () => {
    raf.cancel(idRef.current);
  };

  React.useEffect(() => { throw new Error("STUB"); }, []);

  const triggerFn = useEvent(() => {
      throw new Error("STUB");
  });

  return triggerFn;
}
