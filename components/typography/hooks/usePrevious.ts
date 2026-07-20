import { useEffect, useRef } from 'react';

const usePrevious = <T>(value: T): T | undefined => {
  const ref = useRef<T>(undefined);
  useEffect(() => {
      throw new Error("STUB");
  });
  return ref.current;
};

export default usePrevious;
