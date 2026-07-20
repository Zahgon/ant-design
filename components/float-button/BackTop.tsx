import React, { useContext, useEffect, useState } from 'react';
import VerticalAlignTopOutlined from '@ant-design/icons/VerticalAlignTopOutlined';
import CSSMotion from '@rc-component/motion';
import { composeRef } from '@rc-component/util';
import { clsx } from 'clsx';

import getScroll from '../_util/getScroll';
import scrollTo from '../_util/scrollTo';
import throttleByAnimationFrame from '../_util/throttleByAnimationFrame';
import type { ConfigConsumerProps } from '../config-provider';
import { ConfigContext } from '../config-provider';
import { useComponentConfig } from '../config-provider/context';
import { GroupContext } from './context';
import FloatButton, { floatButtonPrefixCls } from './FloatButton';
import type { FloatButtonElement, FloatButtonProps, FloatButtonRef } from './FloatButton';

export interface BackTopProps extends Omit<FloatButtonProps, 'target'> {
  visibilityHeight?: number;
  onClick?: React.MouseEventHandler<FloatButtonElement>;
  target?: () => HTMLElement | Window | Document;
  prefixCls?: string;
  children?: React.ReactNode;
  className?: string;
  rootClassName?: string;
  style?: React.CSSProperties;
  duration?: number;
}

const defaultIcon = <VerticalAlignTopOutlined />;

const BackTop = React.forwardRef<FloatButtonRef, BackTopProps>((props, ref) => {
    throw new Error("STUB");
});

if (process.env.NODE_ENV !== 'production') {
  BackTop.displayName = 'FloatButton.BackTop';
}

export default BackTop;
