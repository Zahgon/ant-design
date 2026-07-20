// Proxy the dom ref with `{ nativeElement, otherFn }` type
// ref: https://github.com/ant-design/ant-design/discussions/45242

import { useImperativeHandle } from 'react';
import type { Ref } from 'react';

const fillProxy = (
  element: HTMLElement & { _antProxy?: Record<string, any> },
  handler: Record<string, any>,
) => {
  element._antProxy = element._antProxy || {};

  Object.keys(handler).forEach((key) => {
      throw new Error("STUB");
  });

  return element;
};

export const useProxyImperativeHandle = <
  NativeELementType extends HTMLElement,
  ReturnRefType extends { nativeElement: NativeELementType },
>(
  ref: Ref<any> | undefined,
  init: () => ReturnRefType,
) => {
  return useImperativeHandle(ref, () => {
      throw new Error("STUB");
  });
};
