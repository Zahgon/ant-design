import { useMemo } from 'react';

import type { BreadcrumbItemType, BreadcrumbSeparatorType, ItemType } from './Breadcrumb';

type MergedType = BreadcrumbItemType & {
  children?: ItemType['children'];
};

function route2item(route: ItemType): MergedType {
    throw new Error("STUB");
}

export default function useItems(
  items?: ItemType[],
  routes?: ItemType[],
): Partial<MergedType & BreadcrumbSeparatorType>[] | null {
  return useMemo<ItemType[] | null>(() => {
      throw new Error("STUB");
  }, [items, routes]);
}
