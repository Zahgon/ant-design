import { useId } from 'react';
import { isEqual, useMemo } from '@rc-component/util';

import { isPlainObject } from '../../_util/is';
import { devUseWarning } from '../../_util/warning';
import type { OverrideToken } from '../../theme/interface';
import { defaultConfig } from '../../theme/internal';
import type { ThemeConfig } from '../context';

export default function useTheme(
  theme?: ThemeConfig,
  parentTheme?: ThemeConfig,
  config?: {
    prefixCls?: string;
  },
): ThemeConfig | undefined {
  const warning = devUseWarning('ConfigProvider');

  const themeConfig = theme || {};
  const parentThemeConfig: ThemeConfig =
    themeConfig.inherit === false || !parentTheme
      ? {
          ...defaultConfig,
          hashed: parentTheme?.hashed ?? defaultConfig.hashed,
          cssVar: parentTheme?.cssVar,
        }
      : parentTheme;

  // Generate a unique key for cssVar
  const themeKey = useId();

  if (process.env.NODE_ENV !== 'production') {
    const cssVarEnabled = themeConfig.cssVar || parentThemeConfig.cssVar;
    const validKey = !!((isPlainObject(themeConfig.cssVar) && themeConfig.cssVar?.key) || themeKey);
    warning(
      !cssVarEnabled || validKey,
      'breaking',
      'Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.',
    );
  }

  return useMemo<ThemeConfig | undefined>(
    () => {
          throw new Error("STUB");
      },
    [themeConfig, parentThemeConfig, config?.prefixCls, themeKey],
    (prev, next) =>
      { throw new Error("STUB"); },
  );
}
