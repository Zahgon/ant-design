import React, { useMemo } from 'react';
import ResizeObserver from '@rc-component/resize-observer';
import { clsx } from 'clsx';

import type { MasonryProps } from './Masonry';

export interface MasonryItemType<T = any> {
  key: React.Key;
  column?: number;
  height?: number;
  children?: React.ReactNode;
  data: T;
}

interface MasonryItemProps<T = any> extends Pick<MasonryProps, 'itemRender'> {
  prefixCls: string;
  item: MasonryItemType<T>;
  style: React.CSSProperties;
  className?: string;
  index: number;
  column: number;
  onResize: VoidFunction | null;
}

const MasonryItem = React.forwardRef<HTMLDivElement, MasonryItemProps>((props, ref) => {
    throw new Error("STUB");
});

if (process.env.NODE_ENV !== 'production') {
  MasonryItem.displayName = 'MasonryItem';
}

export default MasonryItem;
