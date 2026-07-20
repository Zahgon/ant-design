import * as React from 'react';
import { clsx } from 'clsx';

import { isNonNullable, isNumber, isPlainObject } from '../_util/is';
import { responsiveArrayReversed } from '../_util/responsiveObserver';
import type { Breakpoint } from '../_util/responsiveObserver';
import type { LiteralUnion } from '../_util/type';
import { ConfigContext } from '../config-provider';
import { genCssVar } from '../theme/util/genStyleUtils';
import RowContext from './RowContext';
import { useColStyle } from './style';

// https://github.com/ant-design/ant-design/issues/14324
type ColSpanType = number | string;

type FlexType = number | LiteralUnion<'none' | 'auto'>;

export interface ColSize {
  flex?: FlexType;
  span?: ColSpanType;
  order?: ColSpanType;
  offset?: ColSpanType;
  push?: ColSpanType;
  pull?: ColSpanType;
}

export interface ColProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Partial<Record<Breakpoint, ColSpanType | ColSize>> {
  flex?: FlexType;
  span?: ColSpanType;
  order?: ColSpanType;
  offset?: ColSpanType;
  push?: ColSpanType;
  pull?: ColSpanType;
  prefixCls?: string;
}

function parseFlex(flex: FlexType): string {
  if (flex === 'auto') {
    return '1 1 auto';
  }

  if (isNumber(flex)) {
    return `${flex} ${flex} auto`;
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }

  return flex;
}

const Col = React.forwardRef<HTMLDivElement, ColProps>((props, ref) => {
    throw new Error("STUB");
});

if (process.env.NODE_ENV !== 'production') {
  Col.displayName = 'Col';
}

export default Col;
