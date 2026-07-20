import * as React from 'react';

import { isPlainObject } from '../_util/is';
import { devUseWarning } from '../_util/warning';
import type { BlockProps } from './Base';
import Base from './Base';

export interface LinkProps
  extends BlockProps<'a'>,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'type' | keyof BlockProps<'a'>> {
  ellipsis?: boolean;
}

const Link = React.forwardRef<HTMLElement, LinkProps>((props, ref) => {
    throw new Error("STUB");
});

export default Link;
