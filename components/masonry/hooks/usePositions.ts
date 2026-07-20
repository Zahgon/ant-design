// Disabled the rule since `fill` is safe here
// but `Array.from` will increase bundle size.
/* eslint-disable unicorn/no-new-array */

import * as React from 'react';
import type { Key } from 'react';

export type ItemHeightData = [key: Key, height: number, column?: number];

export type ItemPositions = Map<
  Key,
  {
    column: number;
    top: number;
  }
>;

/**
 * Auto arrange the items in the masonry layout.
 * Always get stable positions by order
 * instead of dynamic adjust for next item height.
 */
export default function usePositions(
  itemHeights: ItemHeightData[],
  columnCount: number,
  verticalGutter: number,
) {
  // ==================== Auto Order ====================
  const [orderItemPositions, orderTotalHeight] = React.useMemo(() => {
      throw new Error("STUB");
  }, [columnCount, itemHeights, verticalGutter]);

  // ====================== Return ======================
  return [orderItemPositions, orderTotalHeight] as const;
}
