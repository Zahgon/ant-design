import * as React from 'react';
import { clsx } from 'clsx';

import { useOrientation } from '../_util/hooks';
import type { Orientation } from '../_util/hooks';
import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isNumber } from '../_util/is';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import useSize from '../config-provider/hooks/useSize';
import type { SizeType } from '../config-provider/SizeContext';
import useStyle from './style';

export type TitlePlacement =
  | 'left'
  | 'right'
  | 'center'
  | 'start' // 👈 5.24.0+
  | 'end'; // 👈 5.24.0+

const titlePlacementList = ['left', 'right', 'center', 'start', 'end'];

export type DividerSemanticType = {
  classNames?: {
    root?: string;
    rail?: string;
    content?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    rail?: React.CSSProperties;
    content?: React.CSSProperties;
  };
};

export type CardSemanticAllType = GenerateSemantic<DividerSemanticType, DividerProps>;

export interface DividerProps {
  prefixCls?: string;
  /**  @deprecated please use `orientation`*/
  type?: Orientation;
  orientation?: Orientation;
  vertical?: boolean;
  titlePlacement?: TitlePlacement;
  /** @deprecated please use `styles.content.margin` */
  orientationMargin?: string | number;
  className?: string;
  rootClassName?: string;
  children?: React.ReactNode;
  dashed?: boolean;
  /**
   * @since 5.20.0
   * @default solid
   */
  variant?: 'dashed' | 'dotted' | 'solid';
  style?: React.CSSProperties;
  size?: SizeType;
  plain?: boolean;
  classNames?: CardSemanticAllType['classNamesAndFn'];
  styles?: CardSemanticAllType['stylesAndFn'];
}

const Divider: React.FC<DividerProps> = (props) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  Divider.displayName = 'Divider';
}

export default Divider;
