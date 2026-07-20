import * as React from 'react';

export default function useRefs() {
  const ref = React.useRef<Map<React.Key, HTMLDivElement | null> | null>(null);

  if (ref.current === null) {
    ref.current = new Map();
  }

  const setRef = (key: React.Key, element: HTMLDivElement | null) => {
      throw new Error("STUB");
  };

  const getRef = (key: React.Key) => { throw new Error("STUB"); };

  return [setRef, getRef] as const;
}
