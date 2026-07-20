import * as React from 'react';
import { toArray } from '@rc-component/util';

import { isPlainObject } from '../../_util/is';
import type { PanelProps } from '../interface';

export type ItemType = Omit<PanelProps, 'collapsible'> & {
  collapsible: {
    start?: boolean;
    end?: boolean;
    showCollapsibleIcon: 'auto' | boolean;
  };
};

function getCollapsible(collapsible?: PanelProps['collapsible']): ItemType['collapsible'] {
  if (isPlainObject(collapsible)) {
    return {
      ...collapsible,
      showCollapsibleIcon:
        collapsible.showCollapsibleIcon === undefined ? 'auto' : collapsible.showCollapsibleIcon,
    };
  }

  const mergedCollapsible = !!collapsible;
  return {
    start: mergedCollapsible,
    end: mergedCollapsible,
    showCollapsibleIcon: 'auto',
  };
}

/**
 * Convert `children` into `items`.
 */
function useItems(children: React.ReactNode): ItemType[] {
  const items = React.useMemo(
    () =>
      { throw new Error("STUB"); },
    [children],
  );
  return items;
}

export default useItems;
