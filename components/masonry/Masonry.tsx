import * as React from 'react';
import type { CSSProperties } from 'react';
import { CSSMotionList } from '@rc-component/motion';
import ResizeObserver from '@rc-component/resize-observer';
import { composeRef, isEqual, useLayoutEffect } from '@rc-component/util';
import { clsx } from 'clsx';

import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isNumber } from '../_util/is';
import { responsiveArray } from '../_util/responsiveObserver';
import type { Breakpoint } from '../_util/responsiveObserver';
import { useComponentConfig } from '../config-provider/context';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import type { RowProps } from '../grid';
import useBreakpoint from '../grid/hooks/useBreakpoint';
import useGutter from '../grid/hooks/useGutter';
import { genCssVar } from '../theme/util/genStyleUtils';
import useDelay from './hooks/useDelay';
import usePositions from './hooks/usePositions';
import type { ItemHeightData } from './hooks/usePositions';
import useRefs from './hooks/useRefs';
import MasonryItem from './MasonryItem';
import type { MasonryItemType } from './MasonryItem';
import useStyle from './style';

export type Gap = number | undefined;

export type Key = string | number;

export type MasonrySemanticType = {
  classNames?: {
    root?: string;
    item?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    item?: React.CSSProperties;
  };
};

export type MasonrySemanticAllType = GenerateSemantic<MasonrySemanticType, MasonryProps>;

export interface MasonryProps<ItemDataType = any> {
  // Style
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  style?: CSSProperties;

  classNames?: MasonrySemanticAllType['classNamesAndFn'];
  styles?: MasonrySemanticAllType['stylesAndFn'];

  /** Spacing between items */
  gutter?: RowProps['gutter'];

  // Data
  items?: MasonryItemType<ItemDataType>[];

  itemRender?: (itemInfo: MasonryItemType<ItemDataType> & { index: number }) => React.ReactNode;

  /** Number of columns in the masonry grid layout */
  columns?: number | Partial<Record<Breakpoint, number>>;

  /** Trigger when item layout order changed */
  onLayoutChange?: (sortInfo: { key: React.Key; column: number }[]) => void;

  fresh?: boolean;
}

export interface MasonryRef {
  nativeElement: HTMLDivElement;
}

type ItemColumnsType = [item: MasonryItemType, column: number];

const Masonry = React.forwardRef<MasonryRef, MasonryProps>((props, ref) => {
    throw new Error("STUB");
});

if (process.env.NODE_ENV !== 'production') {
  Masonry.displayName = 'Masonry';
}

export default Masonry as (<ItemDataType = any>(
  props: React.PropsWithChildren<MasonryProps<ItemDataType>> & React.RefAttributes<MasonryRef>,
) => React.ReactElement) &
  Pick<React.FC, 'displayName'>;
