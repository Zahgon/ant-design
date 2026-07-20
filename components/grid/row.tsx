import * as React from 'react';
import { clsx } from 'clsx';

import { isNumber, isPlainObject, isString } from '../_util/is';
import type { Breakpoint, ScreenMap } from '../_util/responsiveObserver';
import { responsiveArray } from '../_util/responsiveObserver';
import { ConfigContext } from '../config-provider';
import useBreakpoint from './hooks/useBreakpoint';
import useGutter from './hooks/useGutter';
import RowContext from './RowContext';
import type { RowContextState } from './RowContext';
import { useRowStyle } from './style';

const _RowAligns = ['top', 'middle', 'bottom', 'stretch'] as const;
const _RowJustify = [
  'start',
  'end',
  'center',
  'space-around',
  'space-between',
  'space-evenly',
] as const;

type ResponsiveLike<T> = {
  [key in Breakpoint]?: T;
};

export type Gutter = number | string | undefined | Partial<Record<Breakpoint, number>>;

type ResponsiveAligns = ResponsiveLike<(typeof _RowAligns)[number]>;

type ResponsiveJustify = ResponsiveLike<(typeof _RowJustify)[number]>;

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  gutter?: Gutter | [Gutter, Gutter];
  align?: (typeof _RowAligns)[number] | ResponsiveAligns;
  justify?: (typeof _RowJustify)[number] | ResponsiveJustify;
  prefixCls?: string;
  wrap?: boolean;
}

const useMergedPropByScreen = (
  oriProp: RowProps['align'] | RowProps['justify'],
  screen: ScreenMap | null,
) => {
  const [prop, setProp] = React.useState(() => { throw new Error("STUB"); });

  const calcMergedAlignOrJustify = () => {
    if (isString(oriProp)) {
      setProp(oriProp);
    }
    if (!isPlainObject(oriProp)) {
      return;
    }
    for (let i = 0; i < responsiveArray.length; i++) {
      const breakpoint: Breakpoint = responsiveArray[i];
      // if do not match, do nothing
      if (!screen || !screen[breakpoint]) {
        continue;
      }
      const curVal = oriProp[breakpoint];
      if (curVal !== undefined) {
        setProp(curVal);
        return;
      }
    }
  };

  React.useEffect(() => {
      throw new Error("STUB");
  }, [JSON.stringify(oriProp), screen]);

  return prop;
};

const Row = React.forwardRef<HTMLDivElement, RowProps>((props, ref) => {
    throw new Error("STUB");
});

if (process.env.NODE_ENV !== 'production') {
  Row.displayName = 'Row';
}

export default Row;
