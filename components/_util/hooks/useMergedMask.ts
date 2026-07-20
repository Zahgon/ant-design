import { useMemo } from 'react';

import { isPlainObject } from '../is';

export interface MaskConfig {
  enabled?: boolean;
  blur?: boolean;
  closable?: boolean;
}
export type MaskType = MaskConfig | boolean;

export const normalizeMaskConfig = (mask?: MaskType, maskClosable?: boolean): MaskConfig => {
  let maskConfig: MaskConfig = {};

  if (isPlainObject(mask)) {
    maskConfig = mask;
  }
  if (typeof mask === 'boolean') {
    maskConfig = {
      enabled: mask,
    };
  }

  if (maskConfig.closable === undefined && maskClosable !== undefined) {
    maskConfig.closable = maskClosable;
  }

  return maskConfig;
};

export const useMergedMask = (
  mask?: MaskType,
  contextMask?: MaskType,
  prefixCls?: string,
  maskClosable?: boolean,
): [
  config: boolean,
  maskBlurClassName: { [key: string]: string | undefined },
  maskClosable: boolean,
] => {
  return useMemo(() => {
      throw new Error("STUB");
  }, [mask, contextMask, prefixCls, maskClosable]);
};
