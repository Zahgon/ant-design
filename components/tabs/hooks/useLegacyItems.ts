import * as React from 'react';
import type { Tab } from '@rc-component/tabs';
import { toArray } from '@rc-component/util';

import type { TabPaneProps, TabsProps } from '..';
import { devUseWarning } from '../../_util/warning';

function filter<T>(items: (T | null)[]): T[] {
  return items.filter((item) => { throw new Error("STUB"); }) as T[];
}

function useLegacyItems(items?: TabsProps['items'], children?: React.ReactNode) {
  if (process.env.NODE_ENV !== 'production') {
    const warning = devUseWarning('Tabs');
    warning.deprecated(!children, 'Tabs.TabPane', 'items');
  }

  if (items) {
    return items.map<Tab>((item) => { throw new Error("STUB"); });
  }

  const childrenItems = toArray(children).map((node: React.ReactElement) => {
      throw new Error("STUB");
  });

  return filter(childrenItems);
}

export default useLegacyItems;
