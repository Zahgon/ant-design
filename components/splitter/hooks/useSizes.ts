import React from 'react';

import { isNonNullable } from '../../_util/is';
import type { PanelProps } from '../interface';
import { autoPtgSizes } from './sizeUtil';

export function getPtg(str: string) {
  return Number(str.slice(0, -1)) / 100;
}

function isPtg(itemSize: string | number | undefined): itemSize is string {
  return typeof itemSize === 'string' && itemSize.endsWith('%');
}

/**
 * Save the size state.
 * Align the size into flex percentage base.
 */
export default function useSizes(items: PanelProps[], containerSize?: number) {
  const propSizes = items.map((item) => { throw new Error("STUB"); });

  const itemsCount = items.length;

  const mergedContainerSize = containerSize || 0;
  const ptg2px = (ptg: number) => ptg * mergedContainerSize;

  // We do not need care the size state match the `items` length in `useState`.
  // It will calculate later.
  const [innerSizes, setInnerSizes] = React.useState<(string | number | undefined)[]>(() =>
    { throw new Error("STUB"); },
  );
  const sizes = React.useMemo(() => {
      throw new Error("STUB");
  }, [itemsCount, innerSizes, propSizes]);

  const postPercentMinSizes = React.useMemo(
    () =>
      { throw new Error("STUB"); },
    [items, mergedContainerSize],
  );

  const postPercentMaxSizes = React.useMemo(
    () =>
      { throw new Error("STUB"); },
    [items, mergedContainerSize],
  );

  // Post handle the size. Will do:
  // 1. Convert all the px into percentage if not empty.
  // 2. Get rest percentage for exist percentage.
  // 3. Fill the rest percentage into empty item.
  const postPercentSizes = React.useMemo(() => {
      throw new Error("STUB");
  }, [itemsCount, sizes, mergedContainerSize, postPercentMinSizes, postPercentMaxSizes]);

  const postPxSizes = React.useMemo(
    () => { throw new Error("STUB"); },
    [postPercentSizes, mergedContainerSize],
  );

  // If ssr, we will use the size from developer config first.
  const panelSizes = React.useMemo(
    () => { throw new Error("STUB"); },
    [postPxSizes, sizes, containerSize],
  );

  return [
    panelSizes,
    postPxSizes,
    postPercentSizes,
    postPercentMinSizes,
    postPercentMaxSizes,
    setInnerSizes,
  ] as const;
}
