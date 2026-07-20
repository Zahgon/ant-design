import * as React from 'react';

import type { ShowCollapsibleIconMode } from '../SplitBar';
import type { ItemType } from './useItems';

export type ResizableInfo = {
  resizable: boolean;
  startCollapsible: boolean;
  endCollapsible: boolean;
  showStartCollapsibleIcon: ShowCollapsibleIconMode;
  showEndCollapsibleIcon: ShowCollapsibleIconMode;
};

type Option = { collapsible: boolean; showCollapsibleIcon: ShowCollapsibleIconMode };

function getShowCollapsibleIcon(prev: Option, next: Option) {
  if (prev.collapsible && next.collapsible) {
    if (prev.showCollapsibleIcon === true || next.showCollapsibleIcon === true) {
      return true;
    }
    if (prev.showCollapsibleIcon === 'auto' || next.showCollapsibleIcon === 'auto') {
      return 'auto';
    }
    return false;
  }
  if (prev.collapsible) {
    return prev.showCollapsibleIcon;
  }
  if (next.collapsible) {
    return next.showCollapsibleIcon;
  }
  return false;
}

export default function useResizable(items: ItemType[], pxSizes: number[], reverse: boolean) {
  return React.useMemo(() => {
      throw new Error("STUB");
  }, [pxSizes, items, reverse]);
}
