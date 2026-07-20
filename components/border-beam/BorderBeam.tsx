import React, { useMemo } from 'react';
import { unit } from '@ant-design/cssinjs';
import { clsx } from 'clsx';

import { isNonNullable, isNumber, isString } from '../_util/is';
import { useComponentConfig } from '../config-provider/context';
import { genCssVar } from '../theme/util/genStyleUtils';
import BorderBeamEffect from './BorderBeamEffect';
import useBorderSize from './hooks/useBorderSize';
import useChildDom from './hooks/useChildDom';
import useStyle from './style';
import { getBorderBeamGradient } from './util';
import type { BorderBeamColor } from './util';

export type { BorderBeamColor, BorderBeamGradient } from './util';

const getInset = (width: number | string) => {
  return isString(width) ? `calc(-1 * ${width})` : `-${width}px`;
};

export interface BorderBeamProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  color?: BorderBeamColor;
  duration?: number;
  lineWidth?: number | string;
  outset?: number | string;
  size?: number | string;
}

const BorderBeam: React.FC<React.PropsWithChildren<BorderBeamProps>> = (props) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  BorderBeam.displayName = 'BorderBeam';
}

export default BorderBeam;
