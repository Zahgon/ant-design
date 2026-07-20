import { useEffect, useRef } from 'react';

import type { InputRef } from '../Input';

export default function useRemovePasswordTimeout(
  inputRef: React.RefObject<InputRef | null>,
  triggerOnMount?: boolean,
) {
  const removePasswordTimeoutRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const removePasswordTimeout = () => {
    removePasswordTimeoutRef.current.push(
      setTimeout(() => {
          throw new Error("STUB");
      }),
    );
  };

  useEffect(() => {
      throw new Error("STUB");
  }, [triggerOnMount]);

  return removePasswordTimeout;
}
