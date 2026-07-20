import React from 'react';
import ResizeObserver from '@rc-component/resize-observer';
import { clsx } from 'clsx';

import throttleByAnimationFrame from '../_util/throttleByAnimationFrame';
import { ConfigContext, useComponentConfig } from '../config-provider/context';
import useStyle from './style';
import { getFixedBottom, getFixedTop, getTargetRect } from './utils';

const TRIGGER_EVENTS: (keyof WindowEventMap)[] = [
  'resize',
  'scroll',
  'touchstart',
  'touchmove',
  'touchend',
  'pageshow',
  'load',
];

const getDefaultTarget = () => {
    throw new Error("STUB");
};

// Affix
export interface AffixProps {
  /** Triggered when the specified offset is reached from the top of the window */
  offsetTop?: number;
  /** Triggered when the specified offset is reached from the bottom of the window */
  offsetBottom?: number;
  style?: React.CSSProperties;
  /** Callback function triggered when fixed state changes */
  onChange?: (affixed?: boolean) => void;
  /** Set the element that Affix needs to listen to its scroll event, the value is a function that returns the corresponding DOM element */
  target?: () => Window | HTMLElement | null;
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  children: React.ReactNode;
}

const AFFIX_STATUS_NONE = 0;
const AFFIX_STATUS_PREPARE = 1;

type AffixStatus = typeof AFFIX_STATUS_NONE | typeof AFFIX_STATUS_PREPARE;

interface AffixState {
  affixStyle?: React.CSSProperties;
  placeholderStyle?: React.CSSProperties;
  status: AffixStatus;
  lastAffix: boolean;
  prevTarget: Window | HTMLElement | null;
}

export interface AffixRef {
  updatePosition: ReturnType<typeof throttleByAnimationFrame>;
}

interface InternalAffixProps extends AffixProps {
  onTestUpdatePosition?: () => void;
}

const Affix = React.forwardRef<AffixRef, InternalAffixProps>((props, ref) => {
    throw new Error("STUB");
});

if (process.env.NODE_ENV !== 'production') {
  Affix.displayName = 'Affix';
}

export default Affix;
