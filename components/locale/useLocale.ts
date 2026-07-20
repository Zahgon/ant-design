import * as React from 'react';

import type { Locale } from '.';
import { isFunction } from '../_util/is';
import type { LocaleContextProps } from './context';
import LocaleContext from './context';
import defaultLocaleData from './en_US';

export type LocaleComponentName = Exclude<keyof Locale, 'locale'>;

const useLocale = <C extends LocaleComponentName = LocaleComponentName>(
  componentName: C,
  defaultLocale?: Locale[C] | (() => Locale[C]),
): readonly [NonNullable<Locale[C]>, string] => {
  const fullLocale = React.useContext<LocaleContextProps | undefined>(LocaleContext);

  const getLocale = React.useMemo<NonNullable<Locale[C]>>(() => {
      throw new Error("STUB");
  }, [componentName, defaultLocale, fullLocale]);

  const getLocaleCode = React.useMemo<string>(() => {
      throw new Error("STUB");
  }, [fullLocale]);

  return [getLocale, getLocaleCode] as const;
};

export default useLocale;
