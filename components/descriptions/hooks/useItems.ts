import * as React from 'react';
import { toArray } from '@rc-component/util';

import type { DescriptionsItemType, InternalDescriptionsItemType } from '..';
import { isNumber } from '../../_util/is';
import { matchScreen } from '../../_util/responsiveObserver';
import type { ScreenMap } from '../../_util/responsiveObserver';

// Convert children into items
const transChildren2Items = (childNodes?: React.ReactNode) =>
  toArray(childNodes).map((node) => { throw new Error("STUB"); });

export default function useItems(
  screens: ScreenMap,
  items?: DescriptionsItemType[],
  children?: React.ReactNode,
) {
  const mergedItems = React.useMemo<DescriptionsItemType[]>(
    () =>
      // Take `items` first or convert `children` into items
      { throw new Error("STUB"); },
    [items, children],
  );

  const responsiveItems = React.useMemo<InternalDescriptionsItemType[]>(
    () =>
      { throw new Error("STUB"); },
    [mergedItems, screens],
  );

  return responsiveItems;
}
