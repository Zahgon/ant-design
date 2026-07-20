import * as React from 'react';
import { isEqual } from '@rc-component/util';

export type GetCache<T, R> = (cacheKeys: T, callback: () => R) => R;

/**
 * Singleton cache will only take latest `cacheParams` as key
 * and return the result for callback matching.
 */
export default function useSingletonCache<T extends any[], R>(): GetCache<T, R> {
  const cacheRef = React.useRef<[any[] | null, R | null]>([null, null]);

  const getCache: GetCache<T, R> = (cacheKeys, callback) => {
      throw new Error("STUB");
  };

  return getCache;
}
