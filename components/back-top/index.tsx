import React from 'react';
import VerticalAlignTopOutlined from '@ant-design/icons/VerticalAlignTopOutlined';
import CSSMotion from '@rc-component/motion';
import { omit } from '@rc-component/util';
import { clsx } from 'clsx';

import getScroll from '../_util/getScroll';
import { cloneElement } from '../_util/reactNode';
import scrollTo from '../_util/scrollTo';
import throttleByAnimationFrame from '../_util/throttleByAnimationFrame';
import { devUseWarning } from '../_util/warning';
import type { ConfigConsumerProps } from '../config-provider';
import { ConfigContext } from '../config-provider';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import useStyle from './style';

export interface BackTopProps {
  visibilityHeight?: number;
  onClick?: React.MouseEventHandler<HTMLElement>;
  target?: () => HTMLElement | Window | Document;
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  style?: React.CSSProperties;
  duration?: number;
}

/**
 * @deprecated Please use `FloatButton.BackTop` instead.
 */
const BackTop: React.FC<React.PropsWithChildren<BackTopProps>> = (props) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  BackTop.displayName = 'Deprecated.BackTop';
}

export default BackTop;
