import * as React from 'react';
import { clsx } from 'clsx';

import { devUseWarning } from '../_util/warning';
import { ConfigContext } from '../config-provider';
import type { AntAnchor } from './Anchor';
import AnchorContext from './context';

export interface AnchorLinkBaseProps {
  prefixCls?: string;
  href: string;
  target?: string;
  title: React.ReactNode;
  className?: string;
  replace?: boolean;
  targetOffset?: number;
}

export interface AnchorLinkProps extends AnchorLinkBaseProps {
  children?: React.ReactNode;
}

const AnchorLink: React.FC<AnchorLinkProps> = (props) => {
    throw new Error("STUB");
};

export default AnchorLink;
