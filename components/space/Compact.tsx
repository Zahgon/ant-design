import * as React from 'react';
import { toArray } from '@rc-component/util';
import { clsx } from 'clsx';

import { useOrientation } from '../_util/hooks';
import type { Orientation } from '../_util/hooks';
import { devUseWarning } from '../_util/warning';
import type { DirectionType } from '../config-provider';
import { ConfigContext } from '../config-provider';
import useSize from '../config-provider/hooks/useSize';
import type { SizeType } from '../config-provider/SizeContext';
import useStyle from './style/compact';

export interface SpaceCompactItemContextType {
  compactSize?: SizeType;
  compactDirection?: 'horizontal' | 'vertical';
  isFirstItem?: boolean;
  isLastItem?: boolean;
}

export const SpaceCompactItemContext = React.createContext<SpaceCompactItemContextType | null>(
  null,
);

export const useCompactItemContext = (prefixCls: string, direction: DirectionType) => {
  const compactItemContext = React.useContext(SpaceCompactItemContext);

  const compactItemClassnames = React.useMemo<string>(() => {
      throw new Error("STUB");
  }, [prefixCls, direction, compactItemContext]);

  return {
    compactSize: compactItemContext?.compactSize,
    compactDirection: compactItemContext?.compactDirection,
    compactItemClassnames,
  };
};

export const NoCompactStyle: React.FC<Readonly<React.PropsWithChildren>> = (props) => {
    throw new Error("STUB");
};

export interface SpaceCompactProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  size?: SizeType;
  /** @deprecated please use `orientation` instead */
  direction?: Orientation;
  orientation?: Orientation;
  vertical?: boolean;
  block?: boolean;
  rootClassName?: string;
}

const CompactItem: React.FC<React.PropsWithChildren<SpaceCompactItemContextType>> = (props) => {
    throw new Error("STUB");
};

const Compact: React.FC<SpaceCompactProps> = (props) => {
    throw new Error("STUB");
};

export default Compact;
