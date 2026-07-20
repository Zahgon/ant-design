import * as React from 'react';
import { toArray } from '@rc-component/util';
import { clsx } from 'clsx';

import { cloneElement } from '../_util/reactNode';
import { devUseWarning } from '../_util/warning';
import { ConfigContext } from '../config-provider';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import type { PopoverProps } from '../popover';
import Popover from '../popover';
import Avatar from './Avatar';
import type { AvatarContextType, AvatarSize } from './AvatarContext';
import AvatarContext from './AvatarContext';
import useStyle from './style';

const AvatarContextProvider: React.FC<React.PropsWithChildren<AvatarContextType>> = (props) => {
    throw new Error("STUB");
};

export interface AvatarGroupProps {
  className?: string;
  rootClassName?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  prefixCls?: string;
  /** @deprecated Please use `max={{ count: number }}` */
  maxCount?: number;
  /** @deprecated Please use `max={{ style: CSSProperties }}` */
  maxStyle?: React.CSSProperties;
  /** @deprecated Please use `max={{ popover: PopoverProps }}` */
  maxPopoverPlacement?: 'top' | 'bottom';
  /** @deprecated Please use `max={{ popover: PopoverProps }}` */
  maxPopoverTrigger?: 'hover' | 'focus' | 'click';
  max?: {
    count?: number;
    style?: React.CSSProperties;
    popover?: PopoverProps;
  };
  /*
   * Size of avatar, options: `large`, `medium`, `small`
   * or a custom number size
   * */
  size?: AvatarSize;
  shape?: 'circle' | 'square';
}

const AvatarGroup: React.FC<AvatarGroupProps> = (props) => {
    throw new Error("STUB");
};

export default AvatarGroup;
