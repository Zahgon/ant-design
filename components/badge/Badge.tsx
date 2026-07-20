import * as React from 'react';
import { useMemo, useRef } from 'react';
import CSSMotion from '@rc-component/motion';
import { clsx } from 'clsx';

import type { PresetStatusColorType } from '../_util/colors';
import { isPresetColor } from '../_util/colors';
import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isNonNullable, isNumber, isPlainObject, isReactRenderable, isString } from '../_util/is';
import { cloneElement } from '../_util/reactNode';
import type { LiteralUnion } from '../_util/type';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import type { SizeType } from '../config-provider/SizeContext';
import type { PresetColorKey } from '../theme/internal';
import ScrollNumber from './ScrollNumber';
import useStyle from './style';

export type BadgeSemanticType = {
  classNames?: {
    root?: string;
    indicator?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    indicator?: React.CSSProperties;
  };
};

export type BadgeSemanticAllType = GenerateSemantic<BadgeSemanticType, BadgeProps>;

export interface BadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'title'> {
  /** Number to show in badge */
  count?: React.ReactNode;
  showZero?: boolean;
  /** Max count to show */
  overflowCount?: number;
  /** Whether to show red dot without number */
  dot?: boolean;
  style?: React.CSSProperties;
  prefixCls?: string;
  scrollNumberPrefixCls?: string;
  className?: string;
  rootClassName?: string;
  status?: PresetStatusColorType;
  color?: LiteralUnion<PresetColorKey>;
  text?: React.ReactNode;
  /**
   * Note: `default` is deprecated and will be removed in v7, please use `medium` instead.
   */
  size?: Exclude<SizeType, 'large'> | 'default';
  offset?: [number | string, number | string];
  title?: string | null | false;
  children?: React.ReactNode;
  classNames?: BadgeSemanticAllType['classNamesAndFn'];
  styles?: BadgeSemanticAllType['stylesAndFn'];
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
    throw new Error("STUB");
});

if (process.env.NODE_ENV !== 'production') {
  Badge.displayName = 'Badge';
}

export default Badge;
