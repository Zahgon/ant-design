import * as React from 'react';
import RcCollapse from '@rc-component/collapse';
import { clsx } from 'clsx';

import { devUseWarning } from '../_util/warning';
import { ConfigContext } from '../config-provider';

export type CollapsibleType = 'header' | 'icon' | 'disabled';

export interface CollapsePanelProps {
  key: string | number;
  header: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  showArrow?: boolean;
  prefixCls?: string;
  forceRender?: boolean;
  id?: string;
  extra?: React.ReactNode;
  collapsible?: CollapsibleType;
  children?: React.ReactNode;
}

const CollapsePanel = React.forwardRef<HTMLDivElement, CollapsePanelProps>((props, ref) => {
    throw new Error("STUB");
});

export default CollapsePanel;
