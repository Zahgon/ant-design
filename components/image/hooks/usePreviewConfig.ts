import { isValidElement, useMemo } from 'react';

import type { PreviewConfig } from '..';
import type { MaskType } from '../../_util/hooks';
import { isPlainObject } from '../../_util/is';
import { devUseWarning } from '../../_util/warning';
import type { GroupPreviewConfig } from '../PreviewGroup';

function normalizeMask(mask?: MaskType | React.ReactNode) {
  if (isValidElement(mask)) {
    return [mask, undefined];
  }
  if (typeof mask === 'boolean' || isPlainObject(mask)) {
    return [undefined, mask];
  }
  return [undefined, undefined];
}

export default function usePreviewConfig<T extends PreviewConfig | GroupPreviewConfig>(
  preview?: boolean | T,
): [previewConfig: T, rootClassName: string, maskClassName: string] {
  // Get origin preview config
  const rawPreviewConfig = useMemo(() => {
      throw new Error("STUB");
  }, [preview]) as T;

  const splittedPreviewConfig = useMemo(() => {
      throw new Error("STUB");
  }, [rawPreviewConfig]) as [T, string, string];

  if (process.env.NODE_ENV !== 'production') {
    const warning = devUseWarning('Image');

    if (rawPreviewConfig) {
      [
        ['visible', 'open'],
        ['onVisibleChange', 'onOpenChange'],
        ['maskClassName', 'classNames.cover'],
        ['rootClassName', 'classNames.root'],
        ['toolbarRender', 'actionsRender'],
      ].forEach(([deprecatedName, newName]) => {
          throw new Error("STUB");
      });
      warning(
        !isValidElement(rawPreviewConfig.mask),
        'deprecated',
        '`mask` used as ReactNode is deprecated. Please use `cover` instead.',
      );
      warning(
        !('forceRender' in rawPreviewConfig),
        'breaking',
        '`forceRender` is no longer supported.',
      );
      warning(
        !('destroyOnClose' in rawPreviewConfig),
        'breaking',
        '`destroyOnClose` is no longer supported.',
      );
    }
  }

  return splittedPreviewConfig;
}
