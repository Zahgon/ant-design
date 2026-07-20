import * as React from 'react';

export default function useDebounce<T>(value: T[]): T[] {
  const [cacheValue, setCacheValue] = React.useState(value);
  React.useEffect(() => {
      throw new Error("STUB");
  }, [value]);

  return cacheValue;
}
