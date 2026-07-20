import * as React from 'react';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import { toArray } from '@rc-component/util';
import { clsx } from 'clsx';

import { genCssVar } from '../theme/util/genStyleUtils';
import type { TimelineItemType, TimelineMode, TimelineProps } from './Timeline';

const useItems = (
  rootPrefixCls: string,
  prefixCls: string,
  mode: TimelineMode,
  items?: TimelineItemType[],
  children?: React.ReactNode,
  pending?: TimelineProps['pending'],
  pendingDot?: TimelineProps['pendingDot'],
) => {
  const itemCls = `${prefixCls}-item`;

  const [varName] = genCssVar(rootPrefixCls, 'cmp-steps');

  // Merge items and children
  const parseItems = React.useMemo<TimelineItemType[]>(() => {
      throw new Error("STUB");
  }, [items, children]);

  // convert legacy type
  return React.useMemo(() => {
      throw new Error("STUB");
  }, [parseItems, pending, mode, itemCls, varName, pendingDot]);
};

export default useItems;
