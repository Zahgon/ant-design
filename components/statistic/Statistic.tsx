import * as React from 'react';
import { pickAttrs } from '@rc-component/util';
import { clsx } from 'clsx';

import type { HTMLAriaDataAttributes } from '../_util/aria-data-attrs';
import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isFunction } from '../_util/is';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import Skeleton from '../skeleton';
import StatisticNumber from './Number';
import useStyle from './style';
import type { FormatConfig, valueType } from './utils';

export type StatisticSemanticType = {
  classNames?: {
    root?: string;
    content?: string;
    value?: string /* 👈 6.4.0+ */;
    title?: string;
    header?: string;
    prefix?: string;
    suffix?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    content?: React.CSSProperties;
    value?: React.CSSProperties /* 👈 6.4.0+ */;
    title?: React.CSSProperties;
    header?: React.CSSProperties;
    prefix?: React.CSSProperties;
    suffix?: React.CSSProperties;
  };
};

export type StatisticSemanticAllType = GenerateSemantic<StatisticSemanticType, StatisticProps>;

export interface StatisticRef {
  nativeElement: HTMLDivElement;
}

interface StatisticReactProps extends FormatConfig {
  prefixCls?: string;
  className?: string;
  classNames?: StatisticSemanticAllType['classNamesAndFn'];
  styles?: StatisticSemanticAllType['stylesAndFn'];
  rootClassName?: string;
  style?: React.CSSProperties;
  value?: valueType;
  /** @deprecated Please use `styles.content` instead */
  valueStyle?: React.CSSProperties;
  valueRender?: (node: React.ReactNode) => React.ReactNode;
  title?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  loading?: boolean;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}

export type StatisticProps = HTMLAriaDataAttributes & StatisticReactProps;

const Statistic = React.forwardRef<StatisticRef, StatisticProps>((props, ref) => {
    throw new Error("STUB");
});

if (process.env.NODE_ENV !== 'production') {
  Statistic.displayName = 'Statistic';
}

export default Statistic;
