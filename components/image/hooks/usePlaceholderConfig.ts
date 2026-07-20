import { isValidElement, useMemo } from 'react';

import type { ImageProgressConfig, PlaceholderType } from '..';
import { isPlainObject } from '../../_util/is';

export function isPlaceholderConfig(
  placeholder: unknown,
): placeholder is { progress?: boolean | ImageProgressConfig } {
  return isPlainObject(placeholder) && !isValidElement(placeholder);
}

export default function usePlaceholderConfig(placeholder?: PlaceholderType) {
  return useMemo(() => {
      throw new Error("STUB");
  }, [placeholder]);
}
