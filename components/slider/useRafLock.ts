import * as React from 'react';
import { raf } from '@rc-component/util';

export default function useRafLock(): [state: boolean, setState: (nextState: boolean) => void] {
  const [state, setState] = React.useState(false);

  const rafRef = React.useRef<number>(null);
  const cleanup = () => {
    raf.cancel(rafRef.current!);
  };

  const setDelayState = (nextState: boolean) => {
      throw new Error("STUB");
  };

  React.useEffect(() => { throw new Error("STUB"); }, []);

  return [state, setDelayState];
}
