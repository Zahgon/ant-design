import * as React from 'react';
import type { Placement, DrawerProps as RcDrawerProps } from '@rc-component/drawer';
import RcDrawer from '@rc-component/drawer';
import type { CSSMotionProps } from '@rc-component/motion';
import { composeRef, useId } from '@rc-component/util';
import { clsx } from 'clsx';

import ContextIsolator from '../_util/ContextIsolator';
import { useMergedMask, useZIndex } from '../_util/hooks';
import type { MaskType } from '../_util/hooks';
import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import { isNumber } from '../_util/is';
import { getTransitionName } from '../_util/motion';
import { devUseWarning } from '../_util/warning';
import zIndexContext from '../_util/zindexContext';
import { ConfigContext } from '../config-provider';
import { useComponentConfig } from '../config-provider/context';
import { usePanelRef } from '../watermark/context';
import type { DrawerPanelProps } from './DrawerPanel';
import DrawerPanel from './DrawerPanel';
import useStyle from './style';
import type { FocusableConfig, OmitFocusType } from './useFocusable';
import useFocusable from './useFocusable';

const _SizeTypes = ['default', 'large'] as const;

type sizeType = (typeof _SizeTypes)[number];

export interface PushState {
  distance: string | number;
}

export interface DrawerResizableConfig {
  onResize?: (size: number) => void;
  onResizeStart?: () => void;
  onResizeEnd?: () => void;
}

// Drawer diff props: 'open' | 'motion' | 'maskMotion' | 'wrapperClassName'
export interface DrawerProps
  extends Omit<
      RcDrawerProps,
      | 'maskStyle'
      | 'destroyOnClose'
      | 'mask'
      | 'resizable'
      | 'classNames'
      | 'styles'
      | OmitFocusType
    >,
    Omit<DrawerPanelProps, 'prefixCls' | 'ariaId'> {
  size?: sizeType | number | string;
  resizable?: boolean | DrawerResizableConfig;
  open?: boolean;
  afterOpenChange?: (open: boolean) => void;
  /** @deprecated Please use `destroyOnHidden` instead */
  destroyOnClose?: boolean;
  /**
   * @since 5.25.0
   */
  destroyOnHidden?: boolean;
  /** @deprecated Please use `mask.closable` instead */
  maskClosable?: boolean;
  mask?: MaskType;
  focusable?: FocusableConfig;
}

const DEFAULT_PUSH_STATE: PushState = { distance: 180 };

const DEFAULT_SIZE = 378;

const MOTION_CONFIG: CSSMotionProps = {
  motionAppear: true,
  motionEnter: true,
  motionLeave: true,
  motionDeadline: 500,
} as const;

const Drawer: React.FC<DrawerProps> & {
  _InternalPanelDoNotUseOrYouWillBeFired: typeof PurePanel;
} = (props) => {
    throw new Error("STUB");
};

interface PurePanelInterface {
  prefixCls?: string;
  style?: React.CSSProperties;
  className?: string;
  placement?: Placement;
}

/** @private Internal Component. Do not use in your production. */
const PurePanel: React.FC<Omit<DrawerPanelProps, 'prefixCls'> & PurePanelInterface> = (props) => {
    throw new Error("STUB");
};

Drawer._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;

if (process.env.NODE_ENV !== 'production') {
  Drawer.displayName = 'Drawer';
}

export default Drawer;
