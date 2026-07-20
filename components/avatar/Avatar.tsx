import * as React from 'react';
import ResizeObserver from '@rc-component/resize-observer';
import { composeRef } from '@rc-component/util';
import { clsx } from 'clsx';

import { isNumber, isPlainObject } from '../_util/is';
import type { Breakpoint } from '../_util/responsiveObserver';
import { responsiveArray } from '../_util/responsiveObserver';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import useSize from '../config-provider/hooks/useSize';
import useBreakpoint from '../grid/hooks/useBreakpoint';
import type { AvatarContextType, AvatarSize } from './AvatarContext';
import AvatarContext from './AvatarContext';
import useStyle from './style';

export interface AvatarProps {
  /** Shape of avatar, options: `circle`, `square` */
  shape?: 'circle' | 'square';
  /*
   * Size of avatar, options: `large`, `medium`, `small`
   * or a custom number size
   * */
  size?: AvatarSize;
  gap?: number;
  /** Src of image avatar */
  src?: React.ReactNode;
  /** Srcset of image avatar */
  srcSet?: string;
  draggable?: boolean | 'true' | 'false';
  /** Icon to be used in avatar */
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  children?: React.ReactNode;
  alt?: string;
  crossOrigin?: '' | 'anonymous' | 'use-credentials';
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  /* callback when img load error */
  /* return false to prevent Avatar show default fallback behavior, then you can do fallback by yourself */
  onError?: () => boolean;
}

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
    throw new Error("STUB");
});

if (process.env.NODE_ENV !== 'production') {
  Avatar.displayName = 'Avatar';
}

export default Avatar;
